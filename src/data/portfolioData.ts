export const PERSONAL_INFO = {
  name: 'Dr. Keyhan Najafian',
  title: 'Postdoctoral Researcher in AI Systems & Deployment',
  affiliation: "Vision Research Lab, University of Calgary",
  location: 'Calgary, Alberta, Canada',
  email: '***REMOVED***',
  altEmail: '***REMOVED***',
  avatarUrl: '/headshot.png',
  githubUrl: 'https://github.com/KeyhanNajafian',
  linkedinUrl: 'https://www.linkedin.com/in/keyhannajafian/',
  scholarUrl: 'https://scholar.google.ca/citations?hl=en&user=3RI_XdQAAAAJ',
  labUrl: 'https://vision.cpsc.ucalgary.ca/',
  bioSubtitle: "Postdoctoral Researcher in AI Systems and Deployment at the University of Calgary's Vision Research Lab.",
  aboutMeText: "Dr. Keyhan Najafian builds vision and signal models that perform when labeled data is scarce. His doctoral research introduced semi-self-supervised pipelines that synthesize training data from a handful of annotated examples, then adapt to real-world imagery through staged domain adaptation and pseudo-labeling, cutting annotation requirements by roughly ninety percent while matching or surpassing fully supervised baselines.\n\nThe approach generalizes across domains. In precision agriculture it spans detection, semantic and instance segmentation, and video analysis of dense crop canopies, alongside public benchmarks built with the Global Wheat Dataset Consortium. In medical imaging it recovers noninvasive biomarkers from MRI and histopathology, including a radiomics model that predicts brain metastasis invasion pattern at 85% accuracy where expert radiologists reach 44 to 59%. In biosignal analysis it extends to EEG foundation models and brain-computer interface decoding.\n\nA second thread runs through all of it: making research deployable. He designs tiered architectures spanning high-capacity foundation models and resource-efficient variants for edge hardware, and has delivered systems in production use for crop disease screening.",
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
    description: 'Developing radiomic and convolutional deep learning models for noninvasive MRI biomarkers, brain metastasis invasion prediction, and histopathological image classification.',
    icon: 'Activity'
  },
  {
    title: 'Edge Deployment & Real-time Systems',
    description: 'Deploying high-throughput inference on embedded CUDA devices and edge clusters.',
    icon: 'Cpu'
  }
];
