"""Generate the static Publications section for keyhannajafian.github.io.

    Reads data/publications.json and writes pre-rendered HTML into public/, which
    Vite copies verbatim into dist/ at build time. The existing React homepage is
    untouched.
"""

import html
import json
import os
import shutil
from datetime import date
from typing import Any, Dict, List, Optional


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(ROOT, "data", "publications.json")
OUT_ROOT = os.path.join(ROOT, "public")

TODAY = date.today().isoformat()


CSS = """
:root{--ink:#0F172A;--muted:#475569;--faint:#64748B;--line:#E2E8F0;--bg:#F8FAFC;
--card:#FFFFFF;--emerald:#047857;--emerald-bg:#ECFDF5;--sky:#0369A1;--sky-bg:#F0F9FF}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);
font-family:'Plus Jakarta Sans',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
line-height:1.65;-webkit-font-smoothing:antialiased}
code,pre,.mono{font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
a{color:var(--sky);text-decoration:none}
a:hover{text-decoration:underline}
.skip{position:absolute;left:-9999px}
.skip:focus{left:1rem;top:1rem;position:fixed;background:#fff;padding:.6rem 1rem;
border-radius:8px;border:1px solid var(--line);z-index:50}
.wrap{max-width:60rem;margin:0 auto;padding:0 1.25rem}
header.site{background:rgba(248,250,252,.92);border-bottom:1px solid var(--line);
position:sticky;top:0;z-index:20;backdrop-filter:blur(8px)}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;
gap:1rem;padding-top:.85rem;padding-bottom:.85rem;flex-wrap:wrap}
.brand{font-weight:800;color:var(--ink);letter-spacing:-.01em}
.brand span{display:block;font-size:.72rem;font-weight:500;color:var(--faint);letter-spacing:0}
header.site nav{display:flex;gap:1rem;font-size:.86rem;font-weight:600}
header.site nav a{color:var(--muted)}
header.site nav a[aria-current="page"]{color:var(--emerald)}
.crumbs{font-size:.78rem;color:var(--faint);padding:1.25rem 0 0}
.crumbs a{color:var(--faint)}
main{padding-bottom:4rem}
h1{font-size:clamp(1.55rem,3.6vw,2.2rem);line-height:1.25;letter-spacing:-.02em;
margin:.75rem 0 .5rem;font-weight:800}
h2{font-size:1.15rem;margin:2.25rem 0 .65rem;letter-spacing:-.01em;font-weight:700;
padding-bottom:.4rem;border-bottom:1px solid var(--line)}
h3{font-size:1rem;margin:1.5rem 0 .4rem;font-weight:700}
p{margin:.65rem 0}
.lede{font-size:1.02rem;color:var(--muted)}
.meta{color:var(--muted);font-size:.9rem;margin:.35rem 0}
.meta .me{font-weight:700;color:var(--ink);border-bottom:2px solid #10B981}
.tags{display:flex;flex-wrap:wrap;gap:.4rem;margin:.9rem 0}
.tag{font-family:'JetBrains Mono',monospace;font-size:.72rem;padding:.2rem .55rem;
border-radius:6px;background:#F1F5F9;border:1px solid var(--line);color:var(--muted)}
.tag.area{background:var(--emerald-bg);border-color:#A7F3D0;color:var(--emerald);font-weight:600}
.links{display:flex;flex-wrap:wrap;gap:.5rem;margin:1.1rem 0 .25rem}
.links a{font-size:.82rem;font-weight:600;padding:.45rem .8rem;border-radius:8px;
border:1px solid var(--line);background:var(--card)}
.links a.primary{background:var(--sky);border-color:var(--sky);color:#fff}
blockquote.abstract{margin:0;padding:1rem 1.15rem;background:var(--card);
border:1px solid var(--line);border-left:3px solid var(--emerald);border-radius:0 12px 12px 0}
blockquote.abstract p{margin:0;color:#1E293B}
ul{margin:.5rem 0;padding-left:1.15rem}
li{margin:.3rem 0;color:#1E293B}
dl.facts{display:grid;grid-template-columns:auto 1fr;gap:.35rem 1rem;margin:.5rem 0;
font-size:.9rem}
dl.facts dt{color:var(--faint);font-weight:600}
dl.facts dd{margin:0}
pre.cite{background:#0F172A;color:#E2E8F0;padding:1rem;border-radius:12px;
overflow-x:auto;font-size:.74rem;line-height:1.55}
.card{display:block;background:var(--card);border:1px solid var(--line);border-radius:14px;
padding:1.1rem 1.15rem;margin:.75rem 0}
.card h3{margin:0 0 .3rem;font-size:1.02rem}
.card h3 a{color:var(--ink)}
.card p{margin:.35rem 0;font-size:.88rem;color:var(--muted)}
.year{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--faint);margin:.2rem 0}
.authors{font-size:.85rem;color:var(--muted);margin:.25rem 0}
h3.sub{margin-top:1.75rem;font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;
color:var(--faint);font-family:'JetBrains Mono',monospace}
section[id]{scroll-margin-top:5rem;padding-top:.5rem}
a.tag.area{text-decoration:none}
a.tag.area:hover{background:#D1FAE5}
.backtop{font-size:.78rem;margin-top:1.25rem}
footer.site{border-top:1px solid var(--line);background:#0F172A;color:#94A3B8;
padding:2rem 0;font-size:.85rem}
footer.site a{color:#CBD5E1}
@media(max-width:640px){dl.facts{grid-template-columns:1fr}dl.facts dd{margin-bottom:.5rem}}
"""


def esc(text: str) -> str:
    """ Escape a string for safe inclusion in HTML text or attributes.

        Args:
            text: Raw string.

        Returns:
            HTML-escaped string.
    """
    return html.escape(text, quote=True)


def jsonld(payload: Dict[str, Any]) -> str:
    """ Serialize a JSON-LD block into a script tag.

        Args:
            payload: Structured data mapping.

        Returns:
            HTML script element as a string.
    """
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    return f'<script type="application/ld+json">\n{body}\n</script>'


def author_html(authors: List[str], me: str) -> str:
    """ Render an author list with the site owner emphasized.

        Args:
            authors: Ordered author names.
            me: Name to emphasize.

        Returns:
            HTML fragment.
    """
    parts = []
    for name in authors:
        if name == me:
            parts.append(f'<span class="me">{esc(name)}</span>')
        else:
            parts.append(esc(name))

    return ", ".join(parts)


def page(
    base: str,
    canonical: str,
    title: str,
    description: str,
    body: str,
    extra_head: str = "",
    active: str = "publications",
) -> str:
    """ Assemble a complete HTML document.

        Args:
            base: Site base URL.
            canonical: Absolute canonical URL for this page.
            title: Document title.
            description: Meta description.
            body: Inner HTML for the main element and surrounding content.
            extra_head: Additional head markup such as citation tags and JSON-LD.
            active: Navigation item to mark as current.

        Returns:
            Full HTML document.
    """
    nav_items = [
        ("Home", f"{base}/", "home"),
        ("Publications", f"{base}/publications/", "publications"),
    ]
    nav = "".join(
        f'<a href="{href}"{" aria-current=\"page\"" if key == active else ""}>{esc(label)}</a>'
        for label, href, key in nav_items
    )

    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(description)}">
<link rel="canonical" href="{canonical}">
<meta name="author" content="Keyhan Najafian">
<meta property="og:type" content="article">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(description)}">
<meta property="og:url" content="{canonical}">
<meta property="og:site_name" content="Keyhan Najafian">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{esc(title)}">
<meta name="twitter:description" content="{esc(description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>{CSS}</style>
{extra_head}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site">
  <div class="wrap">
    <a class="brand" href="{base}/">Dr. Keyhan Najafian<span>Postdoctoral Researcher, Vision Research Lab, University of Calgary</span></a>
    <nav aria-label="Main">{nav}</nav>
  </div>
</header>
{body}
<footer class="site">
  <div class="wrap">
    <p>Keyhan Najafian, Vision Research Lab, Department of Computer Science, University of Calgary.</p>
    <p><a href="{base}/">Homepage</a> &middot; <a href="{base}/publications/">All publications</a> &middot;
       <a href="https://scholar.google.ca/citations?hl=en&amp;user=3RI_XdQAAAAJ">Google Scholar</a> &middot;
       <a href="https://github.com/KeyhanNajafian">GitHub</a></p>
  </div>
</footer>
</body>
</html>
"""


def breadcrumbs(base: str, trail: List[Dict[str, str]]) -> str:
    """ Build both the visible breadcrumb trail and its JSON-LD counterpart.

        Args:
            base: Site base URL.
            trail: Ordered list of dicts with name and url keys.

        Returns:
            HTML fragment containing the visible trail; JSON-LD is returned separately.
    """
    links = " / ".join(
        f'<a href="{item["url"]}">{esc(item["name"])}</a>' if idx < len(trail) - 1
        else esc(item["name"])
        for idx, item in enumerate(trail)
    )

    return f'<nav class="crumbs" aria-label="Breadcrumb">{links}</nav>'


def breadcrumb_ld(trail: List[Dict[str, str]]) -> Dict[str, Any]:
    """ Build BreadcrumbList structured data.

        Args:
            trail: Ordered list of dicts with name and url keys.

        Returns:
            JSON-LD mapping.
    """
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": item["name"], "item": item["url"]}
            for i, item in enumerate(trail)
        ],
    }


def citation_tags(pub: Dict[str, Any], base: str) -> str:
    """ Build Highwire Press and Dublin Core metadata tags for a publication.

        These are the tags Google Scholar reads when indexing author-hosted pages.

        Args:
            pub: Publication record.
            base: Site base URL.

        Returns:
            HTML head fragment.
    """
    lines = [f'<meta name="citation_title" content="{esc(pub["title"])}">']
    for name in pub["authors"]:
        lines.append(f'<meta name="citation_author" content="{esc(name)}">')

    lines.append(f'<meta name="citation_publication_date" content="{pub["year"]}">')
    lines.append(f'<meta name="citation_date" content="{pub["year"]}">')

    if pub["venueType"] == "journal":
        lines.append(f'<meta name="citation_journal_title" content="{esc(pub["venue"])}">')
    elif pub["venueType"] == "conference":
        lines.append(f'<meta name="citation_conference_title" content="{esc(pub["venue"])}">')
    else:
        lines.append(f'<meta name="citation_technical_report_institution" content="arXiv">')

    if pub.get("pages"):
        start, _, end = pub["pages"].partition("-")
        lines.append(f'<meta name="citation_firstpage" content="{esc(start)}">')
        if end:
            lines.append(f'<meta name="citation_lastpage" content="{esc(end)}">')

    if pub.get("doi"):
        lines.append(f'<meta name="citation_doi" content="{esc(pub["doi"])}">')

    if pub.get("pmid"):
        lines.append(f'<meta name="citation_pmid" content="{esc(pub["pmid"])}">')

    pdf_url = pub["links"].get("pdf") or pub["links"].get("paper")
    if pdf_url and pdf_url.lower().endswith(".pdf"):
        lines.append(f'<meta name="citation_pdf_url" content="{esc(pdf_url)}">')

    lines.append(
        f'<meta name="citation_abstract_html_url" '
        f'content="{base}/publications/{pub["slug"]}/">'
    )

    lines.append(f'<meta name="DC.title" content="{esc(pub["title"])}">')
    for name in pub["authors"]:
        lines.append(f'<meta name="DC.creator" content="{esc(name)}">')
    lines.append(f'<meta name="DC.date" content="{pub["year"]}">')
    lines.append(f'<meta name="DC.type" content="Text">')
    lines.append(f'<meta name="DC.source" content="{esc(pub["venue"])}">')
    if pub.get("doi"):
        lines.append(f'<meta name="DC.identifier" content="https://doi.org/{esc(pub["doi"])}">')

    for term in pub["keywords"]:
        lines.append(f'<meta name="DC.subject" content="{esc(term)}">')

    return "\n".join(lines)


def article_ld(pub: Dict[str, Any], base: str, area_name: str) -> Dict[str, Any]:
    """ Build ScholarlyArticle structured data for a publication.

        Args:
            pub: Publication record.
            base: Site base URL.
            area_name: Human-readable research area.

        Returns:
            JSON-LD mapping.
    """
    url = f"{base}/publications/{pub['slug']}/"
    data: Dict[str, Any] = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": pub["title"],
        "name": pub["title"],
        "url": url,
        "mainEntityOfPage": url,
        "datePublished": str(pub["year"]),
        "inLanguage": "en",
        "abstract": pub["abstract"],
        "author": [{"@type": "Person", "name": name} for name in pub["authors"]],
        "about": [{"@type": "Thing", "name": term} for term in pub["keywords"][:12]],
        "keywords": ", ".join(pub["keywords"]),
        "isPartOf": {
            "@type": "Periodical" if pub["venueType"] == "journal" else "PublicationEvent",
            "name": pub["venue"],
        },
        "publisher": {"@type": "Organization", "name": pub["venue"]},
        "creativeWorkStatus": "Published" if pub["venueType"] != "preprint" else "Preprint",
        "citation": pub["venue"],
        "genre": area_name,
    }

    if pub.get("doi"):
        data["identifier"] = [
            {"@type": "PropertyValue", "propertyID": "DOI", "value": pub["doi"]}
        ]
        data["sameAs"] = f"https://doi.org/{pub['doi']}"

    if pub.get("license"):
        data["license"] = pub["license"]

    repos = pub.get("repositories") or []
    if repos:
        data["codeRepository"] = [r["url"] for r in repos]

    return data


def render_publication(pub: Dict[str, Any], data: Dict[str, Any], area: Dict[str, Any]) -> str:
    """ Render one publication detail page.

        Args:
            pub: Publication record.
            data: Full data file.
            area: Area record the publication belongs to.

        Returns:
            Full HTML document.
    """
    base = data["site"]["baseUrl"]
    me = data["site"]["authorName"]
    url = f"{base}/publications/{pub['slug']}/"

    trail = [
        {"name": "Home", "url": f"{base}/"},
        {"name": "Publications", "url": f"{base}/publications/"},
        {"name": pub["shortTitle"], "url": url},
    ]

    link_labels = [
        ("paper", "Paper", True),
        ("pdf", "PDF", False),
        ("preprint", "Preprint", False),
        ("code", "Code", False),
        ("dataset", "Dataset", False),
        ("pubmed", "PubMed", False),
    ]
    links = []
    seen = set()
    for repo in pub.get("repositories") or []:
        if repo["url"] not in seen:
            seen.add(repo["url"])
            links.append(
                f'<a href="{esc(repo["url"])}" rel="noopener">Code: {esc(repo["name"])}</a>'
            )
    for key, label, primary in link_labels:
        href = pub["links"].get(key)
        if not href or href in seen:
            continue
        seen.add(href)
        cls = ' class="primary"' if primary else ""
        links.append(f'<a{cls} href="{esc(href)}" rel="noopener">{label}</a>')

    repos = pub.get("repositories") or []
    repo_html = ""
    if repos:
        cards = "".join(
            f'<article class="card"><h3><a href="{esc(r["url"])}" rel="noopener">'
            f'{esc(r["name"])}</a></h3><p class="mono year">{esc(r["url"])}</p>'
            f'<p>{esc(r.get("note", ""))}</p></article>'
            for r in repos
        )
        repo_html = f"<h2>Code and implementation</h2>{cards}"

    def section(heading: str, items: Optional[List[str]]) -> str:
        if not items:
            return ""
        entries = "".join(f"<li>{esc(i)}</li>" for i in items)
        return f"<h2>{esc(heading)}</h2><ul>{entries}</ul>"

    facts = [("Venue", pub["venue"]), ("Year", str(pub["year"]))]
    if pub.get("pages"):
        facts.append(("Pages", pub["pages"]))
    if pub.get("doi"):
        facts.append(("DOI", f'<a href="https://doi.org/{esc(pub["doi"])}">{esc(pub["doi"])}</a>'))
    if pub.get("pmid"):
        facts.append(("PMID", esc(pub["pmid"])))
    if pub.get("license"):
        facts.append(("License", pub["license"]))
    facts_html = "".join(
        f"<dt>{esc(k)}</dt><dd>{v if k in ('DOI',) else esc(v)}</dd>" for k, v in facts
    )

    related = [
        p for p in data["publications"]
        if p["area"] == pub["area"] and p["slug"] != pub["slug"]
    ][:3]
    related_html = "".join(
        f'<article class="card"><h3><a href="{base}/publications/{p["slug"]}/">'
        f'{esc(p["title"])}</a></h3><p class="year">{esc(p["venueShort"])}</p>'
        f'<p>{esc(p["summary"])}</p></article>'
        for p in related
    )

    keyword_html = "".join(
        f'<a class="tag" href="{base}/publications/#{area["slug"]}">{esc(k)}</a>'
        for k in pub["keywords"]
    )

    note = ""
    if pub.get("authorNote"):
        note = f'<p class="meta">{esc(pub["authorNote"])}</p>'

    truncated = ""
    if pub.get("abstractTruncated"):
        truncated = (
            '<p class="meta">Abstract shown as published; see the publisher page for the '
            'complete text.</p>'
        )

    body = f"""
<div class="wrap">
{breadcrumbs(base, trail)}
<main id="main">
<article>
  <p><span class="tag area">{esc(area["name"])}</span> <span class="year">{esc(pub["venueShort"])}</span></p>
  <h1>{esc(pub["title"])}</h1>
  <p class="meta">{author_html(pub["authors"], me)}</p>
  {note}
  <p class="lede">{esc(pub["summary"])}</p>
  <div class="links">{"".join(links)}</div>

  <h2>Publication details</h2>
  <dl class="facts">{facts_html}</dl>

  <h2>Abstract</h2>
  <blockquote class="abstract"><p>{esc(pub["abstract"])}</p></blockquote>
  {truncated}

  {section("Key contributions", pub.get("contributions"))}
  {section("Methods and techniques", pub.get("methods"))}
  {section("Data and materials", pub.get("data"))}
  {section("Results", pub.get("results"))}
  {section("Applications", pub.get("applications"))}

  {repo_html}

  <h2>Research topics and keywords</h2>
  <div class="tags">{keyword_html}</div>

  <h2>Cite this work</h2>
  <pre class="cite">{esc(pub["bibtex"])}</pre>

  <h2>Related work in {esc(area["name"])}</h2>
  {related_html}
  <p><a href="{base}/publications/#{area["slug"]}">All {esc(area["name"])} publications</a> &middot;
     <a href="{base}/publications/">Complete publication list</a></p>
</article>
</main>
</div>
"""

    extra_head = "\n".join([
        citation_tags(pub, base),
        jsonld(article_ld(pub, base, area["name"])),
        jsonld(breadcrumb_ld(trail)),
    ])

    description = pub["summary"][:300]
    title = f"{pub['title']} | {pub['venueShort']} | Keyhan Najafian"

    return page(base, url, title, description, body, extra_head, active="publications")


def render_index(data: Dict[str, Any]) -> str:
    """ Render the single publications page, divided into the two research areas.

        Args:
            data: Full data file.

        Returns:
            Full HTML document.
    """
    base = data["site"]["baseUrl"]
    url = f"{base}/publications/"
    all_pubs = sorted(data["publications"], key=lambda p: (-p["year"], p["title"]))

    trail = [{"name": "Home", "url": f"{base}/"}, {"name": "Publications", "url": url}]

    def card(pub: Dict[str, Any]) -> str:
        repos = pub.get("repositories") or []
        repo_line = ""
        if repos:
            names = " &middot; ".join(
                f'<a href="{esc(r["url"])}" rel="noopener">{esc(r["name"])}</a>'
                for r in repos
            )
            repo_line = f'<p class="year">Code: {names}</p>'
        doi_line = ""
        if pub.get("doi"):
            doi_line = (f'<p class="year"><a href="https://doi.org/{esc(pub["doi"])}">'
                        f'doi:{esc(pub["doi"])}</a></p>')
        return (
            f'<article class="card">'
            f'<h3><a href="{base}/publications/{pub["slug"]}/">{esc(pub["title"])}</a></h3>'
            f'<p class="year">{esc(pub["venueShort"])} &middot; {esc(pub["venue"])}</p>'
            f'<p class="authors">{author_html(pub["authors"][:4], data["site"]["authorName"])}'
            f'{" et al." if len(pub["authors"]) > 4 else ""}</p>'
            f'<p>{esc(pub["summary"])}</p>'
            f'{doi_line}{repo_line}'
            f'</article>'
        )

    sections = []
    toc = []
    for area in data["areas"]:
        pubs = [p for p in all_pubs if p["area"] == area["slug"]]
        if not pubs:
            continue

        toc.append(f'<a class="tag area" href="#{area["slug"]}">{esc(area["name"])} '
                   f'({len(pubs)})</a>')

        intro = "".join(f"<p>{esc(par)}</p>" for par in area["intro"])
        cards = "".join(card(p) for p in pubs)

        dsets = [d for d in data["datasets"]
                 if any(p["slug"] == d["relatedPublication"] for p in pubs)]
        dataset_html = ""
        if dsets:
            items = "".join(
                f'<article class="card"><h3><a href="{base}/datasets/{d["slug"]}/">'
                f'{esc(d["name"])}</a></h3><p>{esc(d["description"][:220])}</p></article>'
                for d in dsets
            )
            dataset_html = (f'<h3 class="sub">Datasets from this area</h3>{items}')

        sections.append(
            f'<section id="{area["slug"]}" aria-labelledby="{area["slug"]}-heading">'
            f'<h2 id="{area["slug"]}-heading">{esc(area["title"])}</h2>'
            f'{intro}{cards}{dataset_html}'
            f'<p class="backtop"><a href="#main">Back to top</a></p>'
            f'</section>'
        )

    body = f"""
<div class="wrap">
{breadcrumbs(base, trail)}
<main id="main">
<h1>Publications</h1>
<p class="lede">Peer-reviewed research by Keyhan Najafian on label-efficient computer vision,
organized into two areas. Each entry links to a page with the published abstract, the methods
and datasets used, reported results, code repositories, and a citation.</p>
<nav class="tags" aria-label="Research areas">{"".join(toc)}</nav>
<p class="meta">Complete record also on
<a href="https://scholar.google.ca/citations?hl=en&amp;user=3RI_XdQAAAAJ">Google Scholar</a>.</p>
{"".join(sections)}
</main>
</div>
"""

    ld = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Publications by Keyhan Najafian",
        "url": url,
        "description": "Complete list of peer-reviewed publications by Keyhan Najafian in "
                       "precision agriculture and precision health.",
        "about": [{"@type": "Thing", "name": a["name"]} for a in data["areas"]],
        "hasPart": [
            {
                "@type": "WebPageElement",
                "name": a["title"],
                "url": f"{url}#{a['slug']}",
                "description": a["metaDescription"],
            }
            for a in data["areas"]
        ],
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": len(all_pubs),
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": i + 1,
                    "url": f"{base}/publications/{p['slug']}/",
                    "name": p["title"],
                }
                for i, p in enumerate(all_pubs)
            ],
        },
    }

    person = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Keyhan Najafian",
        "url": f"{base}/",
        "jobTitle": "Postdoctoral Researcher in AI Systems and Deployment",
        "affiliation": {"@type": "Organization", "name": data["site"]["authorAffiliation"]},
        "knowsAbout": [
            "computer vision", "semi-self-supervised learning", "precision agriculture",
            "plant phenotyping", "medical image analysis", "radiomics", "semantic segmentation",
        ],
        "sameAs": [
            data["site"]["scholarUrl"],
            data["site"]["githubUrl"],
            data["site"]["linkedinUrl"],
        ],
    }

    extra_head = "\n".join([jsonld(ld), jsonld(person), jsonld(breadcrumb_ld(trail))])
    description = ("Peer-reviewed publications by Keyhan Najafian on label-efficient computer "
                   "vision, in two areas: precision agriculture and precision health, with "
                   "abstracts, methods, datasets, code, and citations.")

    return page(base, url, "Publications | Keyhan Najafian", description, body, extra_head)



def render_dataset(dset: Dict[str, Any], data: Dict[str, Any]) -> str:
    """ Render a dataset page.

        Args:
            dset: Dataset record.
            data: Full data file.

        Returns:
            Full HTML document.
    """
    base = data["site"]["baseUrl"]
    url = f"{base}/datasets/{dset['slug']}/"
    pub = next(p for p in data["publications"] if p["slug"] == dset["relatedPublication"])

    trail = [
        {"name": "Home", "url": f"{base}/"},
        {"name": "Publications", "url": f"{base}/publications/"},
        {"name": dset["name"], "url": url},
    ]

    buttons = []
    if dset.get("externalUrl"):
        buttons.append(f'<a class="primary" href="{esc(dset["externalUrl"])}" rel="noopener">'
                       f'Access the dataset</a>')
    if dset.get("repositoryUrl"):
        buttons.append(f'<a href="{esc(dset["repositoryUrl"])}" rel="noopener">'
                       f'Processing code on GitHub</a>')
    external = f'<div class="links">{"".join(buttons)}</div>' if buttons else ""

    tags = "".join(f'<span class="tag">{esc(k)}</span>' for k in dset["keywords"])

    body = f"""
<div class="wrap">
{breadcrumbs(base, trail)}
<main id="main">
<h1>{esc(dset["title"])}</h1>
<p class="lede">{esc(dset["description"])}</p>
{external}
<h2>Associated publication</h2>
<article class="card"><h3><a href="{base}/publications/{pub["slug"]}/">{esc(pub["title"])}</a></h3>
<p class="year">{esc(pub["venueShort"])}</p><p>{esc(pub["summary"])}</p></article>
<h2>Keywords</h2>
<div class="tags">{tags}</div>
</main>
</div>
"""

    ld = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": dset["name"],
        "alternateName": dset["title"],
        "url": url,
        "description": dset["description"],
        "keywords": ", ".join(dset["keywords"]),
        "creator": {"@type": "Person", "name": "Keyhan Najafian"},
        "citation": f"https://doi.org/{pub['doi']}" if pub.get("doi") else pub["venue"],
    }
    if dset.get("externalUrl"):
        ld["distribution"] = {"@type": "DataDownload", "contentUrl": dset["externalUrl"]}
        ld["sameAs"] = dset["externalUrl"]

    if dset.get("repositoryUrl"):
        ld["codeRepository"] = dset["repositoryUrl"]

    extra_head = "\n".join([jsonld(ld), jsonld(breadcrumb_ld(trail))])

    return page(base, url, f"{dset['title']} | Keyhan Najafian",
                dset["description"][:300], body, extra_head)


def write(path: str, content: str) -> None:
    """ Write a file, creating parent directories as needed.

        Args:
            path: Absolute file path.
            content: File contents.
    """
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(content)


def build() -> List[str]:
    """ Generate the full publications section.

        Returns:
            List of URLs written, for the sitemap.
    """
    with open(DATA_PATH, encoding="utf-8") as handle:
        data = json.load(handle)

    base = data["site"]["baseUrl"]
    urls: List[str] = [f"{base}/", f"{base}/publications/"]

    for folder in ("publications", "datasets"):
        target = os.path.join(OUT_ROOT, folder)
        if os.path.isdir(target):
            shutil.rmtree(target)

    write(os.path.join(OUT_ROOT, "publications", "index.html"), render_index(data))

    for pub in data["publications"]:
        area = next(a for a in data["areas"] if a["slug"] == pub["area"])
        write(os.path.join(OUT_ROOT, "publications", pub["slug"], "index.html"),
              render_publication(pub, data, area))
        urls.append(f"{base}/publications/{pub['slug']}/")

    for dset in data["datasets"]:
        write(os.path.join(OUT_ROOT, "datasets", dset["slug"], "index.html"),
              render_dataset(dset, data))
        urls.append(f"{base}/datasets/{dset['slug']}/")

    entries = "\n".join(
        f"  <url><loc>{u}</loc><lastmod>{TODAY}</lastmod>"
        f"<changefreq>monthly</changefreq>"
        f"<priority>{'1.0' if u.endswith('.io/') else '0.8'}</priority></url>"
        for u in urls
    )
    sitemap = ('<?xml version="1.0" encoding="UTF-8"?>\n'
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
               f"{entries}\n</urlset>\n")
    write(os.path.join(OUT_ROOT, "sitemap.xml"), sitemap)

    robots = (f"User-agent: *\nAllow: /\n\nSitemap: {base}/sitemap.xml\n")
    write(os.path.join(OUT_ROOT, "robots.txt"), robots)

    return urls


if __name__ == "__main__":
    written = build()
    print(f"Generated {len(written)} URLs into {OUT_ROOT}")
    for item in written:
        print(f"  {item}")
