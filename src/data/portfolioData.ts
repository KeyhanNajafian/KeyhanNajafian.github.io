import { Publication, EducationItem, AwardItem, ExperienceItem, TeachingItem, MentorshipItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Dr. Keyhan Najafian',
  title: 'Postdoctoral Researcher in AI Systems & Deployment',
  affiliation: "Vision Research Lab, University of Calgary",
  location: 'Calgary, Alberta, Canada',
  email: 'keyhan.najafian@ucalgary.ca',
  altEmail: 'keyhan.najafian@gmail.com',
  avatarUrl: '/headshot.png',
  githubUrl: 'https://github.com/KeyhanNajafian',
  linkedinUrl: 'https://www.linkedin.com/in/keyhannajafian/',
  scholarUrl: 'https://scholar.google.ca/citations?hl=en&user=3RI_XdQAAAAJ',
  labUrl: 'https://vision.cpsc.ucalgary.ca/',
  bioSubtitle: "Postdoctoral Researcher in AI Systems and Deployment at the University of Calgary's Vision Research Lab.",
  aboutMeText: "With over eight years of experience in computer vision and deep learning, Dr. Najafian specializes in architecting robust automation backends for precision agriculture, medical imaging, and signal processing. Having grown up on a farm, his firsthand experience with agricultural data collection profoundly shapes his approach to building practical, deployment-ready AI systems. His expertise spans the end-to-end development of multilevel AI architectures, from high-capacity foundation models to resource-efficient systems engineered for portable edge-computing hardware.",
  researchFocusTags: [
    'Precision Agriculture',
    'Medical Imaging Systems',
    'Real-time Signal Processing',
    'Embedded Edge AI',
    'Foundation Models',
    'Semi- & Self-Supervised Learning'
  ]
};

export const CORE_PILLARS = [
  {
    title: 'Multilevel Foundation Models',
    description: 'Engineering tiered architectures from high-capacity generative models for low-uncertainty tasks to compact, resource-efficient models optimized for constrained edge hardware.',
    icon: 'Layers'
  },
  {
    title: 'Precision Agriculture',
    description: 'Architecting robust vision pipelines for semantic wheat organ segmentation, Fusarium disease detection, Varroa mite monitoring, and automated yield phenotyping.',
    icon: 'Wheat'
  },
  {
    title: 'Medical Imaging & Diagnostics',
    description: 'Developing high-precision clinical neural solvers for volumetric MRI reconstruction, brain metastasis invasion prediction, and histopathological diagnosis.',
    icon: 'Activity'
  },
  {
    title: 'Edge Deployment & Real-time Systems',
    description: 'Deploying high-throughput distributed inference pipelines on embedded CUDA devices and edge clusters with sub-15ms latency and zero frame loss.',
    icon: 'Cpu'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'phd',
    degree: 'Ph.D. in Computer Science',
    field: 'Computer Science (Computer Vision & Deep Learning)',
    institution: 'University of Saskatchewan',
    location: 'Saskatoon, SK, Canada',
    period: 'Sep 2021 – Oct 2025',
    gpa: '95 out of 100',
    thesisOrDissertationType: 'Dissertation',
    thesisOrDissertationTitle: 'Semi-Self-Supervised Learning for Deep Models: Reducing Annotation Costs in Dense-Pattern Agricultural Image Analysis',
    highlights: [
      'Recipient of the 2026 PhD Research Excellence Award',
      'Borealis AI Fellowship Award recipient (Top 10 AI researchers nationwide)',
      'Spearheaded multi-institutional vision pipelines for precision plant phenotyping'
    ]
  },
  {
    id: 'ms',
    degree: 'M.S. in Computer Science',
    field: 'Computer Science (Artificial Intelligence)',
    institution: 'Shahid Beheshti University',
    location: 'Tehran, Iran',
    period: 'Sep 2017 – Sep 2020',
    gpa: '92.5 out of 100',
    ranking: 'Ranked 1st among 20 students in cohort',
    thesisOrDissertationType: 'Thesis',
    thesisOrDissertationTitle: 'Deep Learning Using Limited Data',
    highlights: [
      'Graduated at the top of the graduating class',
      'Developed novel few-shot and weakly supervised representation methods'
    ]
  },
  {
    id: 'bs',
    degree: 'B.S. in Computer Science',
    field: 'Computer Science',
    institution: 'Shahid Bahonar University',
    location: 'Kerman, Iran',
    period: 'Sep 2013 – Jul 2017',
    gpa: '93.45 out of 100',
    ranking: 'Ranked 1st among 40 students in cohort',
    thesisOrDissertationType: 'Thesis',
    thesisOrDissertationTitle: 'Metaheuristic Algorithms for Approximating NP-Hard Problems',
    highlights: [
      'Ranked 1st in department cohort of 40 students',
      'Co-chaired the Linux Society promoting open-source tools'
    ]
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'PhD Research Excellence Award',
    issuer: 'Department of Computer Science, University of Saskatchewan',
    date: 'May 2026',
    description: 'Awarded for outstanding research performance and doctoral impact in computer vision and machine learning.',
    badge: 'Honor Distinction'
  },
  {
    id: 'award-2',
    title: 'Research Excellence in STEM Technology and Engineering Award',
    issuer: 'GSA Annual Award, University of Saskatchewan',
    date: 'Mar 2025',
    description: 'Awarded for exceptional contributions to research and technological innovation across STEM fields.',
    badge: 'Annual STEM Award'
  },
  {
    id: 'award-3',
    title: 'Ph.D. Geddes Award',
    issuer: 'Department of Computer Science, University of Saskatchewan',
    date: 'May 2024',
    description: 'Awarded for exceptional academic performance and research productivity at the Ph.D. level.',
    badge: 'Merit Award'
  },
  {
    id: 'award-4',
    title: 'Borealis AI Fellowship Award',
    issuer: 'Borealis AI',
    date: 'Aug 2023',
    description: 'Recognized as one of only 10 exceptional graduate researchers in Artificial Intelligence across Canada for 2022-2023.',
    badge: 'National Fellowship'
  },
  {
    id: 'award-5',
    title: 'Vanier Canada Graduate Scholarships Nominee',
    issuer: 'University of Saskatchewan',
    date: 'Oct 2022',
    description: 'Institutional nominee for Canada’s premier doctoral scholarship in recognition of academic excellence and leadership potential.',
    badge: 'National Nominee'
  },
  {
    id: 'award-6',
    title: 'Poster Competition Winner (GIFS)',
    issuer: 'Global Institute for Food Security',
    date: 'Oct 2022',
    description: 'Awarded 1st prize at the 7th Annual Plant Phenotyping and Imaging Research Centre (P2IRC) Symposium.',
    badge: 'Research Prize'
  },
  {
    id: 'award-7',
    title: 'Global Wheat Head Detection Competition (4th Place)',
    issuer: 'GWHD Challenge / Kaggle',
    date: 'Jul 2021',
    description: 'Achieved 4th place worldwide with an ultra-close performance margin of only 0.008 to the 1st place team.',
    badge: 'International Top 4'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'synthset-eccv-2024',
    slug: 'synthset-diffusion-semantic-segmentation',
    title: 'SynthSet: Generative Diffusion Model for Semantic Segmentation in Precision Agriculture',
    authors: ['A. Heschl', 'M. Murillo', 'K. Najafian', 'F. Maleki'],
    venue: 'Computer Vision - ECCV 2024 Workshops, Lecture Notes in Computer Science volume 15625',
    year: 2024,
    type: 'workshop',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    doi: '10.1007/978-3-031-91835-3_18',
    paperUrl: 'https://doi.org/10.1007/978-3-031-91835-3_18',
    codeUrl: 'https://github.com/VisionResearchLab/SynthSet',
    bibtex: `@inproceedings{heschl2024synthset,
  title     = {SynthSet: Generative Diffusion Model for Semantic Segmentation in Precision Agriculture},
  author    = {Heschl, Andrew and Murillo, Mauricio and Najafian, Keyhan and Maleki, Farhad},
  booktitle = {Computer Vision -- ECCV 2024 Workshops},
  series    = {Lecture Notes in Computer Science},
  volume    = {15625},
  pages     = {267--283},
  year      = {2024},
  publisher = {Springer},
  doi       = {10.1007/978-3-031-91835-3_18}
}`
  },
  {
    id: 'beyond-annotations-eccv-2024',
    slug: 'wheat-head-segmentation-l-systems-game-engines',
    title: 'Beyond Annotations: Efficient Wheat Head Segmentation Using L-Systems, Game Engines, and Student-Teacher Models',
    authors: ['H. Beheshtifard', 'E. Mickelson', 'K. Najafian', 'F. Maleki'],
    venue: 'Computer Vision - ECCV 2024 Workshops, Lecture Notes in Computer Science volume 15625',
    year: 2024,
    type: 'workshop',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Dice: 0.87', 'No Manual Annotation'],
    doi: '10.1007/978-3-031-91835-3_21',
    paperUrl: 'https://doi.org/10.1007/978-3-031-91835-3_21',
    bibtex: `@inproceedings{beheshtifard2024beyond,
  title     = {Beyond Annotations: Efficient Wheat Head Segmentation Using L-Systems, Game Engines, and Student-Teacher Models},
  author    = {Beheshtifard, Hosein and Mickelson, Elijah and Najafian, Keyhan and Maleki, Farhad},
  booktitle = {Computer Vision -- ECCV 2024 Workshops},
  series    = {Lecture Notes in Computer Science},
  volume    = {15625},
  pages     = {319--334},
  year      = {2024},
  publisher = {Springer},
  doi       = {10.1007/978-3-031-91835-3_21}
}`
  },
  {
    id: 'wheat-head-joim-2024',
    slug: 'efficient-wheat-head-segmentation-generative',
    title: 'Efficient Wheat Head Segmentation with Minimal Annotation: A Generative Approach',
    authors: ['J. Myers', 'K. Najafian', 'F. Maleki', 'K. Ovens'],
    venue: 'Journal of Imaging, volume 10, issue 7, article 152',
    year: 2024,
    type: 'journal',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    doi: '10.3390/jimaging10070152',
    paperUrl: 'https://doi.org/10.3390/jimaging10070152',
    bibtex: `@article{myers2024efficient,
  title     = {Efficient Wheat Head Segmentation with Minimal Annotation: A Generative Approach},
  author    = {Myers, Jaden and Najafian, Keyhan and Maleki, Farhad and Ovens, Katie},
  journal   = {Journal of Imaging},
  volume    = {10},
  number    = {7},
  pages     = {152},
  year      = {2024},
  doi       = {10.3390/jimaging10070152}
}`
  },
  {
    id: 'fusarium-iccv-2023',
    slug: 'fusarium-damaged-kernel-detection-wheatseedbelt',
    title: 'Detection of Fusarium Damaged Kernels in Wheat Using Deep Semi-Supervised Learning on a Novel WheatSeedBelt Dataset',
    authors: ['K. Najafian', 'L. Jin', 'H.R. Kutcher', 'M. Hladun', 'S. Horovatin', 'M.A. Oviedo-Ludena', 'S.M.P. De Andrade', 'L. Wang', 'I. Stavness'],
    venue: 'IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)',
    year: 2023,
    type: 'workshop',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['F1: 84.29% (Healthy vs. Unhealthy)', '40,420 Kernel Images', '268 Wheat Varieties'],
    doi: '10.1109/ICCVW60793.2023.00073',
    paperUrl: 'https://doi.org/10.1109/ICCVW60793.2023.00073',
    codeUrl: 'https://github.com/USask-BINFO/WheatSeedBelt',
    datasetUrl: '/datasets/wheatseedbelt/',
    bibtex: `@inproceedings{najafian2023fusarium,
  title     = {Detection of Fusarium Damaged Kernels in Wheat Using Deep Semi-Supervised Learning on a Novel WheatSeedBelt Dataset},
  author    = {Najafian, Keyhan and Jin, Lingling and Kutcher, H. Randy and Hladun, Mackenzie and Horovatin, Samuel and Oviedo-Ludena, Maria Alejandra and De Andrade, Sheila Maria Pereira and Wang, Lipu and Stavness, Ian},
  booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)},
  pages     = {660--669},
  year      = {2023},
  doi       = {10.1109/ICCVW60793.2023.00073}
}`
  },
  {
    id: 'video-seg-cvpr-2025',
    slug: 'dense-pattern-video-object-segmentation',
    title: 'A Semi-Self-Supervised Approach for Dense-Pattern Video Object Segmentation',
    authors: ['K. Najafian', 'F. Maleki', 'L. Jin', 'I. Stavness'],
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)',
    year: 2025,
    type: 'workshop',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Dice: 0.79 (Drone External Test)'],
    paperUrl: 'https://openaccess.thecvf.com/content/CVPR2025W/V4A/html/Najafian_A_Semi-Self-Supervised_Approach_for_Dense-Pattern_Video_Object_Segmentation_CVPRW_2025_paper.html',
    codeUrl: 'https://github.com/USask-BINFO/DVOS',
    bibtex: `@inproceedings{najafian2025dvos,
  title     = {A Semi-Self-Supervised Approach for Dense-Pattern Video Object Segmentation},
  author    = {Najafian, Keyhan and Maleki, Farhad and Jin, Lingling and Stavness, Ian},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)},
  pages     = {5451--5460},
  year      = {2025}
}`
  },
  {
    id: 'glmask-arxiv-2025',
    slug: 'semantic-to-instance-segmentation-glmask',
    title: 'From Semantic To Instance: A Semi-Self-Supervised Learning Approach',
    authors: ['K. Najafian', 'F. Maleki', 'L. Jin', 'I. Stavness'],
    venue: 'arXiv preprint arXiv:2506.16563',
    year: 2025,
    type: 'preprint',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['mAP@50: 98.5% (Wheat Heads)', 'mAP@50: +12.6% on COCO'],
    doi: '10.48550/arXiv.2506.16563',
    paperUrl: 'https://arxiv.org/abs/2506.16563',
    codeUrl: 'https://github.com/USask-BINFO/glmask-semantic2instance',
    bibtex: `@misc{najafian2025semantictoinstance,
  title         = {From Semantic To Instance: A Semi-Self-Supervised Learning Approach},
  author        = {Najafian, Keyhan and Maleki, Farhad and Jin, Lingling and Stavness, Ian},
  year          = {2025},
  eprint        = {2506.16563},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
  doi           = {10.48550/arXiv.2506.16563}
}`
  },
  {
    id: 'brain-mri-noa-2024',
    slug: 'brain-metastasis-invasion-pattern-mri-machine-learning',
    title: 'Machine learning prediction of brain metastasis invasion pattern on brain magnetic resonance imaging scans',
    authors: ['K. Najafian', 'B. Rehany', 'A. Nowakowski', 'S. Ghazimoghadam', 'K. Pierre', 'R. Zakarian', 'T. Al-Saadi', 'C. Reinhold', 'A. Babajani-Feremi', 'J.K. Wong', 'M.-C. Guiot', 'M.-C. Lacasse', 'S. Lam', 'P.M. Siegel', 'K. Petrecca', 'M. Dankner', 'R. Forghani'],
    venue: 'Neuro-Oncology Advances, volume 6, issue 1, article vdae200',
    year: 2024,
    type: 'journal',
    area: 'medical-imaging',
    areaLabel: 'Precision Health',
    metrics: ['Accuracy: 85%', 'Precision: 93%', 'F1: 90%'],
    doi: '10.1093/noajnl/vdae200',
    paperUrl: 'https://doi.org/10.1093/noajnl/vdae200',
    bibtex: `@article{najafian2024bmip,
  title   = {Machine learning prediction of brain metastasis invasion pattern on brain magnetic resonance imaging scans},
  author  = {Najafian, Keyhan and Rehany, Benjamin and Nowakowski, Alexander and Ghazimoghadam, Saba and Pierre, Kevin and Zakarian, Rita and Al-Saadi, Tariq and Reinhold, Caroline and Babajani-Feremi, Abbas and Wong, Joshua K. and Guiot, Marie-Christine and Lacasse, Marie-Constance and Lam, Stephanie and Siegel, Peter M. and Petrecca, Kevin and Dankner, Matthew and Forghani, Reza},
  journal = {Neuro-Oncology Advances},
  volume  = {6},
  number  = {1},
  pages   = {vdae200},
  year    = {2024},
  doi     = {10.1093/noajnl/vdae200}
}`
  },
  {
    id: 'gwfss-dataset-2025',
    slug: 'global-wheat-full-semantic-organ-segmentation-dataset',
    title: 'The Global Wheat Full Semantic Organ Segmentation (GWFSS) Dataset',
    authors: ['Z. Wang', 'R. Zenkl', 'L. Greche', 'B. De Solan', 'L. Bernigaud Samatan', 'S. Ouahid', 'A. Visioni', 'C.A. Robles-Zazueta', 'F. Pinto', 'I. Perez-Olivera', 'M.P. Reynolds', 'C. Zhu', 'S. Liu', 'M.-P. D\'argaignon', 'R. Lopez-Lozano', 'M. Weiss', 'A. Marzougui', 'L. Roth', 'S. Dandrifosse', 'A. Carlier', 'B. Dumont', 'B. Mercatoris', 'J. Fernandez', 'S. Chapman', 'K. Najafian', 'I. Stavness', 'H. Wang', 'W. Guo', 'N. Virlet', 'M.J. Hawkesford', 'Z. Chen', 'E. David', 'J. Gillet', 'K. Irfan', 'A. Comar', 'A. Hund'],
    venue: 'Plant Phenomics, volume 7, issue 3, article 100084',
    year: 2025,
    type: 'journal',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['1,096 Labelled Images', '11 Institutions'],
    doi: '10.1016/j.plaphe.2025.100084',
    paperUrl: 'https://doi.org/10.1016/j.plaphe.2025.100084',
    datasetUrl: 'https://doi.org/10.3929/ethz-b-000734546',
    bibtex: `@article{wang2025gwfss,
  title   = {The Global Wheat Full Semantic Organ Segmentation (GWFSS) dataset},
  author  = {Wang, Zijian and Zenkl, Radek and Greche, Latifa and De Solan, Benoit and Bernigaud Samatan, Lucas and Ouahid, Safaa and Visioni, Andrea and Robles-Zazueta, Carlos A. and Pinto, Francisco and Perez-Olivera, Ivan and Reynolds, Matthew P. and Zhu, Chen and Liu, Shouyang and D'argaignon, Marie-Pia and Lopez-Lozano, Raul and Weiss, Marie and Marzougui, Afef and Roth, Lukas and Dandrifosse, S{\\'e}bastien and Carlier, Alexis and Dumont, Benjamin and Mercatoris, Beno{\\^i}t and Fernandez, Javier and Chapman, Scott and Najafian, Keyhan and Stavness, Ian and Wang, Haozhou and Guo, Wei and Virlet, Nicolas and Hawkesford, Malcolm J. and Chen, Zhi and David, Etienne and Gillet, Joss and Irfan, Kamran and Comar, Alexis and Hund, Andreas},
  journal = {Plant Phenomics},
  volume  = {7},
  number  = {3},
  pages   = {100084},
  year    = {2025},
  doi     = {10.1016/j.plaphe.2025.100084}
}`
  },
  {
    id: 'dense-patterns-pp-2023',
    slug: 'semi-self-supervised-segmentation-dense-patterns',
    title: 'Semi-Self-Supervised Learning for Semantic Segmentation in Images with Dense Patterns',
    authors: ['K. Najafian', 'A. Ghanbari', 'M. Sabet Kish', 'M. Eramian', 'G.H. Shirdel', 'I. Stavness', 'L. Jin', 'F. Maleki'],
    venue: 'Plant Phenomics, volume 5, article 0025',
    year: 2023,
    type: 'journal',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Dice: 0.89 (Two Annotated Images)', 'Dice: 0.73 (External, 18 Domains)'],
    doi: '10.34133/plantphenomics.0025',
    paperUrl: 'https://doi.org/10.34133/plantphenomics.0025',
    codeUrl: 'https://github.com/KeyhanNajafian/ImageSimulatorPipeline',
    bibtex: `@article{najafian2023semiselfsupervised,
  title     = {Semi-Self-Supervised Learning for Semantic Segmentation in Images with Dense Patterns},
  author    = {Najafian, Keyhan and Ghanbari, Alireza and Sabet Kish, Mahdi and Eramian, Mark and Shirdel, Gholam Hassan and Stavness, Ian and Jin, Lingling and Maleki, Farhad},
  journal   = {Plant Phenomics},
  volume    = {5},
  pages     = {0025},
  year      = {2023},
  doi       = {10.34133/plantphenomics.0025}
}`
  },
  {
    id: 'wheat-head-iccv-2021',
    slug: 'wheat-head-detection-limited-labeled-samples',
    title: 'A Semi-Self-Supervised Learning Approach for Wheat Head Detection Using Extremely Small Number of Labeled Samples',
    authors: ['K. Najafian', 'A. Ghanbari', 'I. Stavness', 'L. Jin', 'G.H. Shirdel', 'F. Maleki'],
    venue: 'IEEE/CVF International Conference on Computer Vision Workshops (ICCVW), CVPPA',
    year: 2021,
    type: 'workshop',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['mAP@50: 0.827 (GWHD)', 'Supervised Baseline: 0.741'],
    paperUrl: 'https://openaccess.thecvf.com/content/ICCV2021W/CVPPA/papers/Najafian_A_Semi-Self-Supervised_Learning_Approach_for_Wheat_Head_Detection_Using_Extremely_ICCVW_2021_paper.pdf',
    codeUrl: 'https://github.com/KeyhanNajafian/ImageSimulatorPipeline',
    bibtex: `@inproceedings{najafian2021semiselfsupervised,
  title     = {A Semi-Self-Supervised Learning Approach for Wheat Head Detection Using Extremely Small Number of Labeled Samples},
  author    = {Najafian, Keyhan and Ghanbari, Alireza and Stavness, Ian and Jin, Lingling and Shirdel, Gholam Hassan and Maleki, Farhad},
  booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVW)},
  pages     = {1342--1350},
  year      = {2021}
}`
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-postdoc',
    role: 'Postdoctoral Researcher in AI Systems & Deployment',
    labOrGroup: 'Vision Research Lab',
    organization: 'Department of Computer Science, University of Calgary',
    location: 'Calgary, AB, Canada',
    period: 'December 2025 – Present',
    type: 'postdoc',
    points: [
      'Architect and deploy high-throughput computer vision automation pipelines for real-time robotic agricultural monitoring and medical diagnosis.',
      'Develop tiered foundation model architectures that balance parameter capacity for research exploration with ultra-compact INT8/FP16 models for portable edge inference.',
      'Lead cross-disciplinary collaborations linking agricultural sensor fleets, edge AI clusters, and diagnostic cloud backends.'
    ],
    skills: ['PyTorch', 'TensorRT', 'Edge AI', 'Foundation Models', 'C++', 'System Architecture']
  },
  {
    id: 'exp-bioinformatics',
    role: 'Deep Learning Specialist & Lead Researcher',
    labOrGroup: 'Bioinformatics Lab',
    organization: 'Department of Computer Science, University of Saskatchewan',
    location: 'Saskatoon, SK, Canada',
    period: 'September 2021 – October 2025',
    type: 'academic',
    points: [
      'Led the design and implementation of end-to-end software infrastructures integrating vision-based automation backends, streamlining complex data workflows in precision agriculture and medical diagnostics.',
      'Engineered semi-supervised and self-supervised algorithms capable of learning robust representations from extremely small annotated sets in dense-pattern agricultural imagery.',
      'Mentored graduate and undergraduate researchers, resulting in national awards and top-tier conference publications (ICCV, ECCV, CVPR).'
    ],
    skills: ['PyTorch', 'Semi-Self-Supervised', 'Precision Agriculture', 'Plant Phenomics', 'HPC Clusters']
  },
  {
    id: 'exp-rail',
    role: 'AI Specialist and Researcher',
    labOrGroup: 'RAIL & AIPHL Laboratories',
    organization: 'University of Florida (School of Medicine) & McGill University Health Center',
    location: 'Gainesville, FL & Montreal, QC',
    period: 'December 2022 – August 2024',
    type: 'industry-research',
    points: [
      'Collaborated with the Radiomics and Augmented Intelligence Laboratory (RAIL) at UF Department of Radiology.',
      'Partnered with the Augmented Intelligence & Precision Health Laboratory (AIPHL) at the Research Institute of McGill University Health Center.',
      'Pioneered deep learning systems for predicting brain metastasis invasion patterns and automated MRI volumetric segmentation.'
    ],
    skills: ['Radiomics', 'Medical Image Analysis', 'Brain MRI', 'Clinical Solvers', 'PyTorch']
  },
  {
    id: 'exp-create',
    role: 'Data Scientist & Researcher',
    labOrGroup: 'CREATE SAFER Program',
    organization: 'Department of Soil Science, University of Saskatchewan',
    location: 'Saskatoon, SK, Canada',
    period: 'September 2021 – September 2022',
    type: 'academic',
    points: [
      'Executed data science and machine learning research for the Sustainable Applied Fertilizer Environmental Remediation (SAFER) program.',
      'Extracted spatial-temporal sensor features for environmental remediation and soil health modeling.'
    ],
    skills: ['Data Science', 'Soil Phenotyping', 'Environmental Sensors', 'Python']
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Programming Languages',
    skills: ['Python (Expert)', 'C++ (Proficient)', 'BASH Scripting', 'SQL', 'TypeScript / React', 'HTML / CSS']
  },
  {
    category: 'Deep Learning & AI Frameworks',
    skills: ['PyTorch', 'Keras', 'Scikit-Learn', 'OpenCV', 'Hugging Face (Transformers, Diffusers)', 'TensorRT']
  },
  {
    category: 'High Performance & Edge Computing',
    skills: ['PyCUDA', 'CUDA C++', 'Large-Scale Distributed Training', 'Jetson / Edge Hardware', 'Multi-GPU Clusters']
  },
  {
    category: 'Developer Platforms & Tools',
    skills: ['Linux / Unix Admin', 'Git / GitHub', 'Docker', 'AWS Cloud', 'Weights & Biases', 'LaTeX / Overleaf']
  },
  {
    category: 'Core AI / ML Research Paradigms',
    skills: [
      'Generative Models (Diffusion, GANs)',
      'Vision Transformers & CNNs',
      'Semi-Supervised & Self-Supervised Learning',
      'Dense Pattern Semantic & Instance Segmentation',
      '3D Deep Learning & Synchrotron X-ray Imaging',
      'Medical Image Analysis & Volumetric MRI'
    ]
  }
];

export const TEACHING_AND_SERVICE = {
  teaching: [
    {
      role: 'Course Developer & Teaching Assistant',
      organization: 'University of Calgary',
      course: 'Machine Learning (Undergraduate Course)',
      period: 'Jan 2026 – Apr 2026',
      details: [
        'Collaborated with the lead professor to design curriculum materials translating complex AI concepts into accessible undergraduate coursework.',
        'Architected practical coding assignments, hands-on lab examples, and rigorous exams.'
      ]
    },
    {
      role: 'Instructor & Organizing Committee Member',
      organization: 'AI Research School (AIRS), University of Saskatchewan',
      course: 'AI for Coding & Computer Vision / Object Detection',
      period: 'June 2026',
      details: [
        'Co-organized a 2-day intensive AI research school for graduate and industry attendees.',
        'Designed and delivered two specialized instructional modules translating state-of-the-art vision models into practical deployment skills.'
      ]
    },
    {
      role: 'Graduate Teaching Assistant',
      organization: 'University of Saskatchewan',
      course: 'C++, Bash, Data Structures & Algorithms, Principles of CS',
      period: 'Sep 2021 – Apr 2025',
      details: [
        'Led lab instruction for cohorts ranging from 50 to 150 students across first- to third-year computing courses.',
        'Managed weekly help-desk sessions and graded programming projects in C++, Bash, and Java.'
      ]
    }
  ],
  mentorship: [
    {
      target: 'McMedHacks International Workshop Mentorship',
      organization: 'McGill University Health Centre',
      period: 'May 2022 – Aug 2022',
      description: 'Mentored over 1,000 global participants in applying deep learning methodologies to medical problems and trained junior mentors.'
    },
    {
      target: 'AI Research School (AIRS) Mentorship',
      organization: 'University of Calgary',
      period: 'Feb 2023 – Apr 2023',
      description: 'Guided two student cohorts in designing and implementing computer vision solutions for real-world scenarios.'
    },
    {
      target: 'Undergraduate & High School Research Mentorship',
      organization: 'University of Saskatchewan',
      period: 'May 2022 – Aug 2023',
      description: 'Mentored undergraduate and high school summer scholars, leading to 3 poster presentations and a prestigious Women in Research Excellence award.'
    }
  ],
  service: [
    {
      role: 'Global Wheat Full Semantic Segmentation (GWFSS) Challenge Organizer',
      organization: 'Multi-institutional Collaboration',
      period: 'Jan 2025 – Aug 2025',
      description: 'Co-led the design, benchmark metrics, and execution of the international GWFSS challenge on agricultural imagery.'
    },
    {
      role: 'Peer Reviewer',
      organization: 'IEEE/CVF WACV 2025 & IEEE BIBM (2023, 2024)',
      period: '2023 – Present',
      description: 'Peer reviewer for computer vision and bioinformatics conferences.'
    },
    {
      role: 'Executive Committee Member',
      organization: 'Computer Science Graduate Council, USask',
      period: 'Sep 2021 – Mar 2024',
      description: 'Represented Ph.D. students and fostered faculty-student collaboration.'
    }
  ]
};
