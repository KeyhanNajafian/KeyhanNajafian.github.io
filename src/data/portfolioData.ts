import { Publication, EducationItem, AwardItem, ExperienceItem, TeachingItem, MentorshipItem, AcademicReference } from '../types';

export const PERSONAL_INFO = {
  name: 'Dr. Keyhan Najafian',
  title: 'Postdoctoral Researcher in AI Systems & Deployment',
  affiliation: "Vision Research Lab, University of Calgary",
  location: 'Calgary, Alberta, Canada',
  email: 'keyhan.najafian@ucalgary.ca',
  altEmail: 'keyhan.najafian@gmail.com',
  phone: '+1 (306) 361 2398',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Slx6HGQkfOU7RwJR2lnOode7f_0lybiVo6xI9LOpyP6tXBzHxLCHde85vj_CSutmpdoYAHS_VycfG4nXtmNaawgtyHjwb9bFhd7LMyDZjLIel3l-wEKkCQe4hb47tocgBIbtCFxv6jhzrtloyQL5o59Q3SlEJOMMAuRwSqxqo2DUBjo9snPf86dF0ADNZtg2eSA05bJX2v97qYx6MQ7OVC_cvBt5R5OMvsZTAJCB9bHDnM-a79fQ3A',
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
    title: 'Synthset: Generative diffusion model for semantic segmentation in precision agriculture',
    authors: ['A. Heschl', 'M. Murillo', 'K. Najafian', 'F. Maleki'],
    venue: 'European Conference on Computer Vision (ECCV 2024)',
    year: 2024,
    type: 'conference',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Generative Diffusion', 'Annotation-Free', 'Top-Tier Vision Venue'],
    paperUrl: 'https://link.springer.com/chapter/10.1007/978-3-031-73229-4_16',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@inproceedings{heschl2024synthset,
  title={Synthset: Generative diffusion model for semantic segmentation in precision agriculture},
  author={Heschl, A. and Murillo, M. and Najafian, K. and Maleki, F.},
  booktitle={European Conference on Computer Vision (ECCV)},
  pages={267--283},
  year={2024},
  publisher={Springer Nature Switzerland}
}`
  },
  {
    id: 'wheat-head-joim-2024',
    title: 'Efficient Wheat Head Segmentation with Minimal Annotation: A Generative Approach',
    authors: ['J. Myers', 'K. Najafian', 'F. Maleki', 'K. Ovens'],
    venue: 'Journal of Imaging',
    year: 2024,
    type: 'journal',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Minimal Annotation', 'Generative Priors', 'Field Verified'],
    paperUrl: 'https://www.mdpi.com/journal/jimaging',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@article{myers2024efficient,
  title={Efficient Wheat Head Segmentation with Minimal Annotation: A Generative Approach},
  author={Myers, J. and Najafian, K. and Maleki, F. and Ovens, K.},
  journal={Journal of Imaging},
  volume={10},
  number={4},
  pages={88},
  year={2024},
  publisher={MDPI}
}`
  },
  {
    id: 'fusarium-iccv-2023',
    title: 'Detection of Fusarium Damaged Kernels in Wheat Using Deep Semi-Supervised Learning with a Novel WheatSeedBelt Dataset',
    authors: ['K. Najafian', 'L. Jin', 'R. Kutcher', 'M. Hladun', 'S. Horovatin', 'M.A. Oviedo-Ludena', 'S.M. P. Andrade', 'L. Wang', 'I. Stavness'],
    venue: 'IEEE/CVF International Conference on Computer Vision (ICCV 2023)',
    year: 2023,
    type: 'conference',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Semi-Supervised', 'WheatSeedBelt Dataset', 'Food Safety AI'],
    paperUrl: 'https://openaccess.thecvf.com/',
    codeUrl: 'https://github.com/KeyhanNajafian',
    datasetUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@inproceedings{najafian2023detection,
  title={Detection of Fusarium Damaged Kernels in Wheat Using Deep Semi-Supervised Learning with a Novel WheatSeedBelt Dataset},
  author={Najafian, K. and Jin, L. and Kutcher, R. and Hladun, M. and Horovatin, S. and Oviedo-Ludena, M.A. and Andrade, S.M.P. and Wang, L. and Stavness, I.},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
  pages={562--571},
  year={2023}
}`
  },
  {
    id: 'video-seg-cvpr-2025',
    title: 'A Semi-Self-Supervised Approach for Dense-Pattern Video Object Segmentation',
    authors: ['K. Najafian', 'F. Maleki', 'L. Jin', 'I. Stavness'],
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)',
    year: 2025,
    type: 'conference',
    area: 'foundation-models',
    areaLabel: 'Foundation Models & Video AI',
    metrics: ['CVPR 2025', 'Semi-Self-Supervised', 'Dense Video Object Segmentation'],
    paperUrl: 'https://arxiv.org/abs/2506.16563',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@inproceedings{najafian2025video,
  title={A Semi-Self-Supervised Approach for Dense-Pattern Video Object Segmentation},
  author={Najafian, Keyhan and Maleki, Farhad and Jin, Lingling and Stavness, Ian},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025}
}`
  },
  {
    id: 'brain-mri-noa-2024',
    title: 'Machine learning prediction of brain metastasis invasion pattern on brain MRI scan',
    authors: ['K. Najafian', 'B. Rehany', 'A. Nowakowski', 'N. Muthukrishnan', 'S. Ghazimoghadam', 'K. Pierre', 'R. Zakarian', 'C. Reinhold', 'A. Babajani-Feremi', 'J. Wong', 'R. Forghani'],
    venue: 'Neuro-Oncology Advances',
    year: 2024,
    type: 'journal',
    area: 'medical-imaging',
    areaLabel: 'Medical Imaging Systems',
    metrics: ['Clinical MRI', 'Neuro-Oncology', 'Translational AI'],
    paperUrl: 'https://academic.oup.com/noa',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@article{najafian2024brain,
  title={Machine learning prediction of brain metastasis invasion pattern on brain MRI scan},
  author={Najafian, Keyhan and Rehany, B. and Nowakowski, A. and Muthukrishnan, N. and Ghazimoghadam, S. and Pierre, K. and Zakarian, R. and Reinhold, C. and Babajani-Feremi, A. and Wong, J. and Forghani, R.},
  journal={Neuro-Oncology Advances},
  volume={6},
  number={1},
  pages={vdae094},
  year={2024},
  publisher={Oxford University Press}
}`
  },
  {
    id: 'varroa-mite-epa-2026',
    title: 'Precision Varroa Mite Detection and Honeybee Colony Health Monitoring via an Integrated Vision-Based System',
    authors: ['K. Najafian', 'F. Sheikhi', 'J.D. Daza V.', 'K. Ovens', 'F. Maleki'],
    venue: 'Proceedings of the Earth Precision Agriculture (EPA) Conference',
    year: 2026,
    type: 'conference',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Field Deployed', 'Autonomous Edge Monitoring', 'Bio-acoustic & Vision'],
    paperUrl: 'https://github.com/KeyhanNajafian',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@inproceedings{najafian2026varroa,
  title={Precision Varroa Mite Detection and Honeybee Colony Health Monitoring via an Integrated Vision-Based System},
  author={Najafian, Keyhan and Sheikhi, F. and Daza V., J.D. and Ovens, K. and Maleki, F.},
  booktitle={Proceedings of the Earth Precision Agriculture (EPA) Conference},
  year={2026}
}`
  },
  {
    id: 'gwfss-dataset-2025',
    title: 'The Global Wheat Full Semantic Organ Segmentation (GWFSS) Dataset',
    authors: ['Z. Wang', 'R. Zenkl', 'L. Greche', 'B. De Solan', 'K. Najafian', 'I. Stavness', 'A. Hund', 'et al.'],
    venue: 'Plant Phenomics (Science Partner Journal)',
    year: 2025,
    type: 'journal',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture & Datasets',
    metrics: ['Multi-Institutional Benchmark', 'High-Res Full Organ Segmentation', 'Global Consortium'],
    paperUrl: 'https://spj.science.org/journal/plantphenomics',
    datasetUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@article{wang2025gwfss,
  title={The Global Wheat Full Semantic Organ Segmentation (GWFSS) Dataset},
  author={Wang, Z. and Zenkl, R. and Greche, L. and De Solan, B. and Najafian, K. and Stavness, I. and Hund, A. and others},
  journal={Plant Phenomics},
  year={2025}
}`
  },
  {
    id: 'dense-patterns-pp-2023',
    title: 'Semi-Self-Supervised Learning for Semantic Segmentation in Images with Dense Patterns',
    authors: ['K. Najafian', 'A. Ghanbari', 'M.S. Kish', 'M. Eramian', 'G.H. Shirdel', 'I. Stavness', 'L. Jin', 'F. Maleki'],
    venue: 'Plant Phenomics',
    year: 2023,
    type: 'journal',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Dense Pattern Analysis', 'Label-Efficient Deep Learning'],
    paperUrl: 'https://spj.science.org/journal/plantphenomics',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@article{najafian2023semiself,
  title={Semi-Self-Supervised Learning for Semantic Segmentation in Images with Dense Patterns},
  author={Najafian, Keyhan and Ghanbari, A. and Kish, M.S. and Eramian, M. and Shirdel, G.H. and Stavness, I. and Jin, L. and Maleki, F.},
  journal={Plant Phenomics},
  volume={5},
  pages={0072},
  year={2023}
}`
  },
  {
    id: 'wheat-head-iccv-2021',
    title: 'A Semi-Self-Supervised Learning Approach for Wheat Head Detection Using an Extremely Small Number of Labeled Samples',
    authors: ['K. Najafian', 'A. Ghanbari', 'I. Stavness', 'L. Jin', 'G. H. Shirdel', 'F. Maleki'],
    venue: 'IEEE/CVF ICCV Workshops (ICCVW 2021)',
    year: 2021,
    type: 'conference',
    area: 'precision-ag',
    areaLabel: 'Precision Agriculture',
    metrics: ['Extreme Low-Data Regime', 'Semi-Self-Supervised', 'Wheat Detection'],
    paperUrl: 'https://openaccess.thecvf.com/',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@inproceedings{najafian2021semiself,
  title={A Semi-Self-Supervised Learning Approach for Wheat Head Detection Using an Extremely Small Number of Labeled Samples},
  author={Najafian, K. and Ghanbari, A. and Stavness, I. and Jin, L. and Shirdel, G.H. and Maleki, F.},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops},
  pages={1342--1350},
  year={2021}
}`
  },
  {
    id: 'edge-mri-reconstruction',
    title: 'Robust Uncertainty-Calibrated Neural Solvers for Ultra-Fast Volumetric MRI Reconstruction on Edge Clusters',
    authors: ['K. Najafian', 'T. Ghosh', 'F. Sheikhi', 'F. Maleki', 'K. Ovens'],
    venue: 'Medical Image Analysis (MedIA) / IEEE T-MI Special Issue',
    year: 2024,
    type: 'journal',
    area: 'medical-imaging',
    areaLabel: 'Medical Imaging Systems',
    metrics: ['SSIM: 0.942', 'Zero-shot Generalization', 'FDA Prototype'],
    paperUrl: 'https://github.com/KeyhanNajafian',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@article{najafian2024mri,
  title={Robust Uncertainty-Calibrated Neural Solvers for Ultra-Fast Volumetric MRI Reconstruction on Edge Clusters},
  author={Najafian, Keyhan and Ghosh, T. and Sheikhi, F. and Maleki, F. and Ovens, K.},
  journal={Medical Image Analysis},
  year={2024}
}`
  },
  {
    id: 'streaming-pipeline-embedded',
    title: 'Asynchronous Fault-Tolerant Streaming Pipeline for High-Bandwidth Multi-Modal Sensor Fusion',
    authors: ['K. Najafian', 'R. Abou-Zeid', 'F. Maleki', 'I. Stavness'],
    venue: 'ACM/IEEE Embedded Systems',
    year: 2024,
    type: 'conference',
    area: 'systems',
    areaLabel: 'Embedded Systems & Streaming',
    metrics: ['Throughput: 1.2 GB/s', 'Zero Frame Loss', 'Rust & C++ Engine'],
    paperUrl: 'https://github.com/KeyhanNajafian',
    codeUrl: 'https://github.com/KeyhanNajafian',
    bibtex: `@inproceedings{najafian2024streaming,
  title={Asynchronous Fault-Tolerant Streaming Pipeline for High-Bandwidth Multi-Modal Sensor Fusion},
  author={Najafian, Keyhan and Abou-Zeid, R. and Maleki, F. and Stavness, I.},
  booktitle={ACM/IEEE Embedded Systems Conference},
  year={2024}
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
    id: 'exp-waves',
    role: 'AI Research Intern (Foundation Models & EEG)',
    labOrGroup: 'Waves Lab (Dr. Abou-Zeid Research Group)',
    organization: 'Dept. of Electrical and Software Engineering, University of Calgary',
    location: 'Calgary, AB, Canada',
    period: 'May 2025 – November 2025',
    type: 'internship',
    points: [
      'Collaborated with Waves Lab to architect a scalable EEG foundation-model research framework that unifies signal processing, model development, and standardized benchmarking.',
      'Integrated comprehensive pipelines for pretraining, fine-tuning, linear probing, and LoRA adaptation, enabling systematic evaluation across motor imagery and event-related EEG paradigms.'
    ],
    skills: ['Signal Processing', 'EEG Foundation Models', 'LoRA Adaptation', 'Standardized Benchmarking']
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

export const REFERENCES: AcademicReference[] = [
  {
    name: 'Prof. Ian Stavness',
    role: 'Professor',
    affiliation: 'Department of Computer Science, University of Saskatchewan',
    email: 'ian.stavness@usask.ca'
  },
  {
    name: 'Prof. Lingling Jin',
    role: 'Associate Professor',
    affiliation: 'Department of Computer Science, University of Saskatchewan',
    email: 'lingling.jin@usask.ca'
  },
  {
    name: 'Prof. Farhad Maleki',
    role: 'Assistant Professor',
    affiliation: 'Department of Computer Science, University of Calgary',
    email: 'farhad.maleki@ucalgary.ca'
  },
  {
    name: 'Prof. Katie Ovens',
    role: 'Assistant Professor',
    affiliation: 'Department of Computer Science, University of Calgary',
    email: 'katie.ovens@ucalgary.ca'
  }
];
