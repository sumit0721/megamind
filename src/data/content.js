// src/data/content.js
// Single source of truth. Edit text/data here, not inside page components.

export const services = [
  {
    slug: 'ibms',
    name: 'Integrated Building Management Systems',
    short: 'Centralized control of HVAC, lighting, security, and energy systems.',
    description:
      'A Master System Integrator approach to Building Automation — unifying HVAC, lighting, fire alarm, access control, energy metering, and environmental sensors into a single control dashboard for real-time monitoring and event notification.',
    tags: ['LT/MCC/PCC Panels', 'Distribution Boards', 'Power & Control Cables', 'Cable Trays & Conduits', 'Earthing & Lightning Protection'],
    image: '/images/services/ibms.jpg',
  },
  {
    slug: 'lighting-utility',
    name: 'Lighting & Utility Monitoring and Control',
    short: 'Smart, scheduled, and remotely controllable lighting and utility systems.',
    description:
      'Automated lighting and utility control systems that reduce energy waste through scheduling, occupancy sensing, and centralized monitoring across facilities.',
    tags: ['Scheduling', 'Occupancy Sensing', 'Remote Control', 'Energy Reduction'],
    image: '/images/services/lighting.jpg',
  },
  {
    slug: 'energy-management',
    name: 'Energy Management Systems',
    short: 'Building, factory, city, and microgrid-level energy optimization.',
    description:
      'End-to-end energy management spanning building, factory, city, and microgrid systems — real-time energy monitoring, optimization, and reporting to reduce operational cost and improve sustainability.',
    tags: ['Building EMS', 'Factory EMS', 'City EMS', 'Microgrid Systems'],
    image: '/images/services/energy-management.jpg',
  },
  {
    slug: 'cctv',
    name: 'CCTV Surveillance & Intelligent Video Analytics',
    short: 'AI-driven video surveillance with motion tracking and analytics.',
    description:
      'Comprehensive CCTV coverage layouts combined with intelligent video analytics — face detection, motion tracking, and heat-mapping — for proactive facility security.',
    tags: ['AI Analytics', 'Motion Tracking', 'Heat Maps', 'Facility Coverage'],
    image: '/images/services/cctv.jpg',
  },
  {
    slug: 'access-control',
    name: 'Access Control Systems (RFID & Biometric)',
    short: 'Secure entry via RFID cards and biometric authentication.',
    description:
      'Turnstile and door access systems combining RFID card readers and biometric scanning for secure, auditable facility entry management.',
    tags: ['RFID Cards', 'Biometric Scan', 'Turnstile Integration', 'Audit Trail'],
    image: '/images/services/access-control.jpg',
  },
  {
    slug: 'fire-detection',
    name: 'Fire Detection, Alarm & Clean Agent Gas Suppression',
    short: 'Addressable fire alarm systems and clean agent suppression.',
    description:
      'Addressable fire detection and alarm systems including control units, notification appliances, and initiating devices, paired with clean agent gas suppression systems for critical facility protection.',
    tags: ['Control Units', 'Notification Appliances', 'Initiating Devices', 'Gas Suppression'],
    image: '/images/services/fire-detection.jpg',
  },
  {
    slug: 'public-address',
    name: 'Public Address & Emergency Evacuation Systems',
    short: 'Building-wide PA and evacuation alert infrastructure.',
    description:
      'Integrated public address and emergency evacuation systems designed to deliver clear, building-wide alerts during emergency events.',
    tags: ['Building-wide PA', 'Emergency Alerts', 'Evacuation Routing'],
    image: '/images/services/public-address.jpg',
  },
  {
    slug: 'rodent-water-leak',
    name: 'Rodent Detection & Water Leak Detection Systems',
    short: 'Early-warning sensors for false floors and critical infrastructure.',
    description:
      'Water leak detection sensors deployed across false floor cable areas with early alert notification flow, alongside ultrasonic rodent repellent systems to protect critical infrastructure.',
    tags: ['Water Leak Sensors', 'Early Warning', 'Ultrasonic Rodent Repellent'],
    image: '/images/services/rodent-water-leak.jpg',
  },
  {
    slug: 'dcim',
    name: 'Data Center Infrastructure Management (DCIM)',
    short: 'Configure, monitor, detect, analyze, and act — full server lifecycle.',
    description:
      'A complete data center infrastructure management cycle covering configuration, real-time monitoring, problem detection, analysis, and corrective action across racks and cooling zones.',
    tags: ['Rack Layout', 'Cooling Zones', 'Capacity Monitoring', 'Environmental Data'],
    image: '/images/services/dcim.jpg',
  },
]

export const clients = [
  { name: 'Siemens', logo: '/images/clients/siemens.png' },
  { name: 'Voltas Limited', logo: '/images/clients/voltas.png' },
  { name: 'CapitaLand', logo: '/images/clients/capitaland.png' },
  { name: 'Sterlite', logo: '/images/clients/sterlite.png' },
  { name: 'Lodha', logo: '/images/clients/lodha.png' },
  { name: 'Bajaj Electricals', logo: '/images/clients/bajaj.png' },
  { name: 'Podtech Lifecare', logo: '/images/clients/podtech.png' },
  { name: 'Lakeshore', logo: '/images/clients/lakeshore.png' },
  { name: 'Hiranandani', logo: '/images/clients/hiranandani.png' },
  { name: 'Lifecare', logo: '/images/clients/lifecare.png' },
  { name: 'FTS Cleanrooms', logo: '/images/clients/fts-cleanrooms.png' },
  { name: 'Cosmos Bank', logo: '/images/clients/cosmos-bank.png' },
  { name: 'PRASA', logo: '/images/clients/prasa.png' },
  { name: 'Ajanta Pharma', logo: '/images/clients/ajanta-pharma.png' },
  { name: 'Karkinos', logo: '/images/clients/karkinos.png' },
]

export const projects = [
  // Data Center category
  { client: 'Reliance Jio', scope: ['BMS', 'Fire Alarm', 'Gas Suppression'], location: 'Navi Mumbai', category: 'Data Center' },
  { client: 'CDAC', scope: ['Building Management System (BMS)'], location: 'Pune', category: 'Data Center' },
  { client: 'MAHA IT – Data Center (Sanpada)', scope: ['Siemens BMS', 'UPS & DG Monitoring', 'Energy Metering', 'Temp & RH Monitoring', 'Fire Alarm', 'CCTV', 'Access Control'], location: 'Navi Mumbai', category: 'Data Center' },
  { client: 'Tata Memorial Hospital', scope: ['IBMS', 'Fire Alarm', 'Gas Suppression', 'Access Control', 'CCTV', 'WLD', 'Rodent System'], location: 'Kharghar', category: 'Data Center' },
  { client: 'FT Pharma', scope: ['Siemens BMS System'], location: 'Dubai', category: 'Data Center' },
  { client: 'Veu Now', scope: ['BMS', 'Fire Alarm', 'Gas Suppression', 'Access Control', 'CCTV', 'VESDA'], location: 'Akbarpur', category: 'Data Center' },
  { client: 'Veu Now', scope: ['BMS', 'Fire Alarm', 'Gas Suppression', 'Access Control', 'CCTV', 'VESDA'], location: 'Shimla', category: 'Data Center' },
  { client: 'Veu Now', scope: ['BMS', 'Fire Alarm', 'Gas Suppression', 'Access Control', 'CCTV', 'VESDA'], location: 'Lucknow', category: 'Data Center' },
  { client: 'IPR', scope: ['BMS', 'CCTV Surveillance'], location: 'Ahmedabad', category: 'Data Center' },
  { client: 'Ortseam', scope: ['Fire Alarm', 'Water Leak Detection', 'Rodent System'], location: 'Bangalore', category: 'Data Center' },
  { client: 'Reliance Jio', scope: ['BMS', 'Fire Alarm', 'Gas Suppression'], location: 'Navi Mumbai', category: 'Data Center' },

  // Commercial / Enterprise category
  { client: 'Cosmos Bank', scope: ['IBMS - BMS (Siemens)', 'Access Control (HID)', 'CCTV Surveillance'], location: 'Pune', category: 'Commercial / Enterprise' },
  { client: 'BG House', scope: ['Fire Alarm System (Edwards)'], location: 'Powai', category: 'Commercial / Enterprise' },
  { client: 'Ajanta Pharma – Head Office', scope: ['BMS (Siemens)', 'Battery Health Monitoring'], location: 'Andheri (Chakala)', category: 'Commercial / Enterprise' },
  { client: 'Zola', scope: ['Addressable Fire Alarm System (EST3)'], location: 'Powai', category: 'Commercial / Enterprise' },
  { client: 'Eaton', scope: ['BMS (Delta)', 'Temp & RH Sensors', 'Immersion Sensors', 'Differential Pressure Switches', 'VFD Monitoring & Control'], location: 'Pune', category: 'Commercial / Enterprise' },
  { client: 'The Capital Mall', scope: ['Non-Comprehensive AMC for BMS'], location: 'Nallasopara', category: 'Commercial / Enterprise' },
  { client: 'NCPA – Nariman Point', scope: ['Non-Comprehensive AMC for BMS'], location: 'Mumbai', category: 'Commercial / Enterprise' },
  { client: 'Nirvaa Solutions Pvt. Ltd.', scope: ['Comprehensive AMC: BMS', 'Access Control', 'Fire Alarm', 'CCTV', 'Water Leak Detection', 'Rodent Repellent', 'Aspirating Detection'], location: 'Karad', category: 'Commercial / Enterprise' },

  // Pharmaceutical / International category
  { client: 'FT Pharma', scope: ['BMS (Siemens) – Supply, Installation & Commissioning'], location: 'Dubai', category: 'Pharmaceutical / International' },
  { client: 'Biovencer Healthcare Pvt. Ltd.', scope: ['IBMS - BMS (Siemens)', 'Access Control (HID)', 'CCTV Surveillance'], location: 'Dubai', category: 'Pharmaceutical / International' },
  { client: 'MedPharma', scope: ['BMS (Siemens) – Supply, Installation & Commissioning'], location: 'Dubai', category: 'Pharmaceutical / International' },
  { client: 'Yashat', scope: ['BMS (Siemens) – Supply, Installation & Commissioning'], location: 'Dubai', category: 'Pharmaceutical / International' },
  { client: 'Naumtech', scope: ['BMS (Siemens) – Supply, Installation & Commissioning'], location: 'Dubai', category: 'Pharmaceutical / International' },
  { client: 'MD Pharma', scope: ['BMS (Siemens) – Supply, Installation & Commissioning'], location: 'Nigeria, Africa', category: 'Pharmaceutical / International' },
  { client: 'Karkinos Healthcare Pvt. Ltd.', scope: ['Siemens BMS', 'Differential Pressure Monitoring', 'Temp & RH Sensors', 'Chilled Water Valve Control', 'Electrical Feeder Monitoring', 'VFD Monitoring & Control', 'Environmental Monitoring'], location: 'Navi Mumbai (Turbhe)', category: 'Pharmaceutical / International' },
]

export const team = [
  { name: 'Mr. Sameer Pawar', role: 'Design Engineer', experience: '10+ years in system design, ELV engineering, and IBMS solution architecture.', email: 'sameerpawar@megamindautomation.in', photo: '/images/team/sameer-pawar.jpg' },
  { name: 'Mr. Vikas Singh', role: 'Sales Representative', experience: '8+ years in business development, key account management, and enterprise solution sales.', email: 'sales@megamindautomation.in', photo: '/images/team/vikas-singh.jpg' },
  { name: 'Mrs. Sudha Singh', role: 'Procurement Manager', experience: '7+ years in vendor management, procurement planning, and supply chain coordination.', email: 'purchase@megamindautomation.in', photo: '/images/team/sudha-singh.jpg' },
  { name: 'Mr. Ravindra Gupta', role: 'Supervisor', experience: '8+ years in installation, testing and maintenance of ELV and automation systems.', email: 'ravindrag@megamindautomation.in', photo: '/images/team/ravindra-gupta.jpg' },
  { name: 'Ms. Nikita Rajkumar Chaubey', role: 'Accounts Manager', experience: '5+ years in finance operations, billing, compliance, and account management.', email: 'accounts@megamindautomation.in', photo: '/images/team/nikita-chaubey.jpg' },
]

export const flagshipProjects = [
  { client: 'Reliance Jio', location: 'Navi Mumbai', scope: ['BMS', 'Fire Alarm', 'Gas Suppression'] },
  { client: 'Tata Memorial Hospital', location: 'Kharghar', scope: ['IBMS', 'Fire Alarm', 'Access Control', 'CCTV'] },
  { client: 'Cosmos Bank', location: 'Pune', scope: ['BMS (Siemens)', 'Access Control', 'CCTV'] },
]

export const companyInfo = {
  name: 'Megamind Electrical & Automation Pvt. Ltd.',
  address: 'Shop No-04, Dhuri Commercial Plaza, Near Railway Station, Vasai East, Palghar – 401208',
  phone: '+91-9820795338',
  email: 'sales@megamindautomation.in',
  website: 'www.megamindautomation.in',
}
