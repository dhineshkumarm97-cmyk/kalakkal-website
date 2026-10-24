import React, { useState, useEffect, useMemo } from 'react';
import { 
  Shield, 
  FileText, 
  Mail, 
  Smartphone, 
  Lock, 
  Share2, 
  Trash2, 
  Bell, 
  Camera, 
  Mic, 
  Image as ImageIcon, 
  Wifi, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  UserX, 
  Bookmark, 
  UserPlus, 
  UserCheck, 
  Tv, 
  Users, 
  Info,
  Calendar,
  ArrowUp,
  Building2,
  Sparkles,
  Award,
  BookOpen,
  Heart,
  Video,
  Globe,
  Sliders,
  Sun,
  Eye,
  ShieldCheck,
  TrendingUp,
  Smile,
  Compass
} from 'lucide-react';

interface Section {
  id: string;
  number: string;
  title: string;
  content: string[];
  icon: React.ReactNode;
}


type ViewMode = 'about-kalakkal' | 'about-company' | 'privacy';

const APP_ICON_URL = "https://res.cloudinary.com/dkc9ru68y/image/upload/v1792199685/file_00000000dc208208b0661e7132785ad9_rrcgpf.png";
const COMPANY_ICON_URL = "https://res.cloudinary.com/dkc9ru68y/image/upload/v1792393315/IMG_20261011_111625_510_ufbitr.webp";
const SUPPORT_EMAIL = "kalakkal.support.mdx@gmail.com";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('about-kalakkal');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const sections: Section[] = useMemo(() => [
    {
      id: 'intro',
      number: '1',
      title: 'Introduction',
      icon: <Info className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Welcome to Kalakkal.',
        'Kalakkal is a social media platform for sharing photos, videos, and connecting with people. It allows users to create accounts, watch and discover short-form videos, upload and share their own content, connect with other users through the Kalakkal follow system, bookmark videos, use available music and audio features, and manage their account through the application.',
        'This Privacy Policy explains what information may be collected, how information may be used, how information may be shared, and the choices available to users when using Kalakkal.',
        'By using Kalakkal, you acknowledge that you have read and understood this Privacy Policy.'
      ]
    },
    {
      id: 'info-collected',
      number: '2',
      title: 'Information We Collect',
      icon: <FileText className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Depending on how you use Kalakkal, the application may process information necessary to provide its features.',
        'This may include:',
        '• Account information, such as information required to create and manage your Kalakkal account.',
        '• Email address, when required for account registration, authentication, account recovery, or account-related communication.',
        '• Profile information that you choose to provide, such as your name, username, profile image, or other profile information.',
        '• User-generated content, including photos, videos, and other content that you voluntarily upload to Kalakkal.',
        '• Follow system information, such as followers, following relationships, and connections between users.',
        '• Bookmark information, when you save videos to your Kalakkal account.',
        '• App activity information necessary to operate features and maintain the service.',
        '• Device and technical information that may be processed by the application or third-party services used by the application.',
        '• Diagnostic and performance information where applicable.',
        'Only information that is actually collected or processed by the production version of Kalakkal should be considered part of this policy.'
      ]
    },
    {
      id: 'device-permissions',
      number: '3',
      title: 'Device Permissions',
      icon: <Smartphone className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal may request certain device permissions when a feature requires them.',
        'Depending on the features enabled in the installed version of Kalakkal, these permissions may include access to:',
        '• Camera — to record photos and videos when the user chooses to create media content.',
        '• Microphone — to record audio when the user chooses to record video or audio.',
        '• Photos and media — to select media that the user chooses to upload or use within Kalakkal.',
        '• Notifications — to provide notifications when enabled by the user.',
        '• Internet/network access — to connect to Kalakkal services and provide online features.',
        'Kalakkal requests permissions only when they are required by an available feature.',
        'Users can manage applicable permissions through their Android device settings.',
        'IMPORTANT: Only include permissions that are actually declared and requested by the final production Kalakkal app.'
      ]
    },
    {
      id: 'how-we-use',
      number: '4',
      title: 'How We Use Information',
      icon: <Shield className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Information may be used to operate and provide Kalakkal\'s features, including:',
        '• Creating and managing user accounts.',
        '• Authenticating users and helping users access their accounts.',
        '• Providing user profiles.',
        '• Allowing users to upload and display their photos, videos and other content.',
        '• Providing media playback and content discovery.',
        '• Providing follow system and profile connection functionality.',
        '• Saving and displaying bookmarked videos.',
        '• Providing music and audio features where available.',
        '• Maintaining and improving application functionality.',
        '• Diagnosing technical problems and improving performance.',
        '• Protecting the service against abuse, fraud, unauthorized activity, and security threats.',
        '• Responding to support requests.',
        '• Providing advertising where applicable.',
        'We use information only for purposes that are reasonably related to operating, maintaining, securing, and improving the Kalakkal service.'
      ]
    },
    {
      id: 'ugc',
      number: '5',
      title: 'User-Generated Content',
      icon: <Tv className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal allows users to upload and share photo and video content.',
        'When you upload content to Kalakkal, that content may be processed, stored, displayed, and distributed as necessary to provide the application\'s social and media-sharing features.',
        'Users are responsible for the content they choose to upload and share.',
        'Users should not upload content that violates applicable laws, intellectual property rights, privacy rights, or Kalakkal\'s applicable rules and policies.',
        'If content is removed or an account is deleted, certain information may remain temporarily or be retained where required for security, legal, or operational purposes.'
      ]
    },
    {
      id: 'follow-system',
      number: '6',
      title: 'Follow System & Connections',
      icon: <UserPlus className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal features a social follow system that allows users to follow other accounts, maintain follower and following counts, and establish connections with other Kalakkal users.',
        'Information associated with followers and following relationships is stored with the user\'s account so that the application can display existing connections and counts.',
        'Users can manage their follow relationships, view followers, and follow or unfollow other profiles through the functionality provided in the application.'
      ]
    },
    {
      id: 'bookmarks',
      number: '7',
      title: 'Bookmarks',
      icon: <Bookmark className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal allows users to bookmark supported videos for easier access later.',
        'Bookmark information may be associated with the user\'s account so that bookmarked videos can remain available when the user signs in to the same account on a supported installation of Kalakkal.',
        'Users can manage their bookmarks through the application.'
      ]
    },
    {
      id: 'advertising',
      number: '8',
      title: 'Advertising',
      icon: <Share2 className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal may display advertisements through Google AdMob.',
        'Google AdMob is a third-party advertising service provided by Google.',
        'Google and its advertising technologies may process certain information in connection with advertising, subject to Google\'s applicable policies and settings.',
        'For more information about Google\'s privacy practices, please visit:',
        'https://policies.google.com/privacy',
        'Kalakkal does not control all information processing performed directly by third-party advertising services.',
        'Advertising availability and behavior may vary depending on the user\'s location, device, settings, and applicable advertising requirements.'
      ]
    },
    {
      id: 'third-party',
      number: '9',
      title: 'Third-Party Services',
      icon: <Users className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal may use third-party services that are necessary to provide specific application functionality.',
        'The production version of Kalakkal currently uses Google Mobile Ads / AdMob for advertising.',
        'Third-party services may process information according to their own privacy policies and applicable laws.',
        'Kalakkal does not list a third-party service in this Privacy Policy unless that service is actually included or used by the production application.',
        'If additional third-party services are added to Kalakkal in the future, this Privacy Policy may be updated where necessary.'
      ]
    },
    {
      id: 'data-sharing',
      number: '10',
      title: 'Data Sharing',
      icon: <Share2 className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal may share or provide access to information when necessary to operate the service.',
        'This may include:',
        '• Service providers that help operate, maintain, secure, or support Kalakkal.',
        '• Advertising providers, including Google AdMob, where applicable.',
        '• Legal authorities when disclosure is required by applicable law, legal process, or a valid legal request.',
        '• Parties involved in protecting the security, rights, or property of Kalakkal, its users, or others where legally permitted.',
        'Kalakkal does not sell users\' personal information as a business practice.'
      ]
    },
    {
      id: 'data-security',
      number: '11',
      title: 'Data Security',
      icon: <Lock className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal uses reasonable technical and organizational measures intended to protect information against unauthorized access, alteration, disclosure, or destruction.',
        'However, no internet-based service, electronic transmission, or storage system can be guaranteed to be completely secure.',
        'Users should protect their account credentials and should contact Kalakkal support if they believe their account has been accessed without authorization.'
      ]
    },
    {
      id: 'data-retention',
      number: '12',
      title: 'Data Retention',
      icon: <Calendar className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal retains information only for as long as reasonably necessary to provide the requested services, maintain accounts, provide application functionality, protect security, resolve disputes, comply with legal obligations, and fulfill other legitimate operational purposes.',
        'The exact retention period may vary depending on the type of information and the purpose for which it is processed.',
        'When information is no longer required, it may be deleted, anonymized, or otherwise handled according to applicable legal and operational requirements.'
      ]
    },
    {
      id: 'account-deletion',
      number: '13',
      title: 'Account Deletion',
      icon: <UserX className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Users may request deletion of their Kalakkal account using the account deletion functionality provided by Kalakkal.',
        'When an account is deleted, information associated with the account may be deleted or removed from active systems, subject to applicable legal, security, fraud-prevention, backup, and operational requirements.',
        'Some information may need to be retained for a limited period when required by law or reasonably necessary to protect the security and integrity of the service.',
        'IMPORTANT: Make sure this section exactly matches the account-deletion functionality available in the production Kalakkal app before publishing this Privacy Policy.'
      ]
    },
    {
      id: 'childrens-privacy',
      number: '14',
      title: "Children's Privacy",
      icon: <Shield className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal is designed as a social media platform.',
        'Kalakkal does not knowingly request or collect personal information from children in violation of applicable privacy laws.',
        'Users should use Kalakkal only when they are legally permitted to do so under applicable laws and the requirements applicable to their location.',
        'If a parent or guardian believes that a child has provided personal information to Kalakkal inappropriately, they may contact Kalakkal support so the matter can be reviewed.'
      ]
    },
    {
      id: 'privacy-choices',
      number: '15',
      title: 'Your Privacy Choices',
      icon: <CheckCircle2 className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Depending on the features available in Kalakkal, users may have choices regarding their information.',
        'These may include:',
        '• Updating account or profile information.',
        '• Managing follow relationships and follower connections.',
        '• Managing bookmarked videos.',
        '• Managing device permissions through Android settings.',
        '• Managing notification permissions through Android settings.',
        '• Requesting account deletion through the available account deletion process.',
        'Users may contact Kalakkal support if they have questions about their privacy or personal information.'
      ]
    },
    {
      id: 'changes',
      number: '16',
      title: 'Changes to This Privacy Policy',
      icon: <FileText className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'Kalakkal may update this Privacy Policy from time to time to reflect changes to the application, services, legal requirements, or data practices.',
        'When changes are made, the updated Privacy Policy will be published on this page and the "Last Updated" date will be changed accordingly.',
        'Users are encouraged to review this page periodically for the latest information.'
      ]
    },
    {
      id: 'contact-us',
      number: '17',
      title: 'Contact Us',
      icon: <Mail className="w-5 h-5 text-[#00D6A3]" />,
      content: [
        'If you have questions, concerns, or requests regarding this Privacy Policy or Kalakkal\'s privacy practices, please contact:',
        'Kalakkal Support',
        `Email: ${SUPPORT_EMAIL}`
      ]
    }
  ], []);

  // Filter sections by search query for Privacy Policy
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(sec => 
      sec.title.toLowerCase().includes(q) || 
      sec.content.some(paragraph => paragraph.toLowerCase().includes(q))
    );
  }, [sections, searchQuery]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SUPPORT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const switchView = (mode: ViewMode) => {
    setCurrentView(mode);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 font-sans selection:bg-[#00D6A3]/20 selection:text-[#00D6A3] flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => switchView('about-kalakkal')}>
            <img 
              src={APP_ICON_URL} 
              alt="Kalakkal App Icon" 
              className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-[#00D6A3]/20 border border-neutral-800 bg-black"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-wider text-white">Kalakkal</h1>
              <p className="text-[10px] text-neutral-400 font-medium tracking-wide">MDX</p>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => switchView('about-kalakkal')}
              className={`text-xs font-semibold transition cursor-pointer pb-1 border-b-2 ${
                currentView === 'about-kalakkal' ? 'text-white border-[#00D6A3]' : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            >
              About Kalakkal
            </button>
            <button
              onClick={() => switchView('about-company')}
              className={`text-xs font-semibold transition cursor-pointer pb-1 border-b-2 ${
                currentView === 'about-company' ? 'text-white border-[#00D6A3]' : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            >
              About Company
            </button>
            <button
              onClick={() => switchView('privacy')}
              className={`text-xs font-semibold transition cursor-pointer pb-1 border-b-2 ${
                currentView === 'privacy' ? 'text-white border-[#00D6A3]' : 'text-neutral-400 border-transparent hover:text-white'
              }`}
            >
              Privacy Policy
            </button>

            <button
              onClick={() => setSupportModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 transition flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#00D6A3]" />
              Support
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSupportModalOpen(true)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center"
              aria-label="Support"
            >
              <Mail className="w-4 h-4 text-[#00D6A3]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 py-4 space-y-2 z-30">
          <button
            onClick={() => switchView('about-kalakkal')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between ${
              currentView === 'about-kalakkal' ? 'bg-neutral-900 text-white' : 'text-neutral-300 hover:bg-neutral-900/60'
            }`}
          >
            <span>About Kalakkal</span>
            <ChevronRight className="w-4 h-4 text-neutral-500" />
          </button>
          <button
            onClick={() => switchView('about-company')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between ${
              currentView === 'about-company' ? 'bg-neutral-900 text-white' : 'text-neutral-300 hover:bg-neutral-900/60'
            }`}
          >
            <span>About Company (MDX)</span>
            <ChevronRight className="w-4 h-4 text-neutral-500" />
          </button>
          <button
            onClick={() => switchView('privacy')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between ${
              currentView === 'privacy' ? 'bg-neutral-900 text-white' : 'text-neutral-300 hover:bg-neutral-900/60'
            }`}
          >
            <span>Privacy Policy</span>
            <ChevronRight className="w-4 h-4 text-neutral-500" />
          </button>
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => { setSupportModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#00D6A3]" /> Support & Contact
            </button>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* VIEW 1: ABOUT Kalakkal (HOME) - 22 SECTIONS */}
      {/* ========================================== */}
      {currentView === 'about-kalakkal' && (
        <div className="flex-1 flex flex-col animate-fadeIn space-y-20 pb-20">
          
          {/* 1. Hero Section */}
          <section className="relative border-b border-neutral-800/60 bg-gradient-to-b from-neutral-900/60 via-[#0B0B0C] to-[#0B0B0C] py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00D6A3]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
              <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-xl">
                <img 
                  src={APP_ICON_URL} 
                  alt="Kalakkal Logo" 
                  className="w-8 h-8 rounded-full object-contain border border-neutral-700 bg-black"
                />
                <span className="text-xs font-bold text-white tracking-wide">Kalakkal Social Platform</span>
              </div>
              <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white">
                <span className="text-[#00D6A3]">Kalakkal</span>
              </h2>
              <p className="text-lg sm:text-2xl font-medium text-neutral-200 max-w-2xl mx-auto">
                A social media platform for sharing photos, videos, and connecting with people.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Kalakkal is a social media platform designed to give people a simple and engaging place to share photos, watch videos, discover new creators, connect with people and express themselves. Kalakkal brings media, creativity and social interaction together in one easy-to-use mobile experience.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => switchView('about-company')}
                  className="px-8 py-3.5 rounded-xl bg-[#00D6A3] text-black hover:bg-[#00bf91] text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-xl shadow-[#00D6A3]/20"
                >
                  Open Kalakkal <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection('what-is-kalakkal')}
                  className="px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 transition flex items-center gap-2 cursor-pointer"
                >
                  Explore Kalakkal
                </button>
              </div>
            </div>
          </section>


          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 w-full">

            {/* 2. What is Kalakkal? */}
            <section id="what-is-kalakkal" className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D6A3]/10 text-[#00D6A3] text-xs font-semibold border border-[#00D6A3]/20">
                Overview
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">What is Kalakkal?</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is a social media platform created to make sharing photos, watching videos, and connecting with people simple and enjoyable. Users can explore a continuous feed, discover content from different creators, interact with profiles, connect with other users through the Kalakkal follow system, save videos using Bookmarks, and personalize their experience through application settings.
                </p>
                <p>
                  The platform is designed around social discovery and media sharing. Instead of making the experience complicated, Kalakkal focuses on the core things people want from a modern platform: discovering interesting content, expressing creativity, building connections and enjoying media in a smooth interface.
                </p>
                <p>
                  Kalakkal is developed with a focus on usability, performance, visual quality and continuous improvement.
                </p>
              </div>
            </section>

            {/* 3. Our Purpose */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D6A3]/10 text-[#00D6A3] text-xs font-semibold border border-[#00D6A3]/20">
                Mission
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Our Purpose</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  The purpose of Kalakkal is to provide a modern digital space where creativity and social connection can come together through photos, videos and stories.
                </p>
                <p>
                  We want Kalakkal to provide an experience where users can discover entertaining content, share their creativity and connect with people in a simple and accessible way.
                </p>
                <p>
                  Every part of the product is designed around making the experience easier to use while giving users useful tools for personalization and social interaction.
                </p>
              </div>
            </section>

            {/* 4. Our Vision */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D6A3]/10 text-[#00D6A3] text-xs font-semibold border border-[#00D6A3]/20">
                Future
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Our Vision</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Our vision is to build Kalakkal into a modern social media platform that combines media sharing, entertainment and meaningful social connection in one experience.
                </p>
                <p>
                  We aim to continuously improve the platform based on user needs, technology improvements and real-world usage while maintaining a simple, reliable and enjoyable experience.
                </p>
                <p>
                  Kalakkal is being developed with a long-term vision: to create a recognizable digital platform where people can watch, create, discover and connect.
                </p>
              </div>
            </section>

            {/* 5. What You Can Do With Kalakkal */}
            <section className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-xs font-bold text-[#00D6A3] uppercase tracking-widest">Capabilities</h3>
                <h4 className="text-3xl font-bold text-white tracking-tight">What You Can Do With Kalakkal</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Video className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Watch Videos</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Explore videos through the Kalakkal feed. Discover different types of content and move through media using a simple viewing experience.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Create and Upload</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Create and upload your own photos, videos and share your creativity with the Kalakkal community.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Discover Creators</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Explore creator profiles and discover content from different users across the platform.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Follow System</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Kalakkal provides a follow system that allows users to follow other accounts, view follower and following counts, and build connections within the community.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Bookmarks</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Save content that you want to find again later using the Bookmark feature. Bookmarked content is associated with the user's account so it can remain available when the same account is used on another installation, subject to content availability.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Info className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Profiles</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Each user can have a personal Kalakkal profile where their account information and uploaded content can be presented in one place.
                  </p>
                </div>


                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Personalization</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Kalakkal provides settings that allow users to personalize parts of their application experience, including available appearance and interface preferences.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Light and Dark Mode</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Users can choose between supported light and dark appearance modes according to their preference.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3 sm:col-span-2 lg:col-span-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-white text-base">Customization</h5>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Kalakkal provides customization options designed to let users adjust supported aspects of the application's appearance and experience.
                  </p>
                </div>

              </div>
            </section>

            {/* 6. Built Around Media & Social Connection */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Built Around Media & Community</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Photo and video sharing are at the center of Kalakkal. The platform is designed around quick discovery and an easy-to-use media feed experience.
                </p>
                <p>
                  Users can move through content naturally, discover new posts and continue exploring without unnecessary complexity.
                </p>
                <p>
                  The experience is designed to keep the focus on the content while providing access to useful social and creator features.
                </p>
              </div>
            </section>

            {/* 7. Social Connection */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Connect Through Kalakkal</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is not only about viewing media. It is also about connecting with other people through the platform.
                </p>
                <p>
                  With features such as follower systems and user profiles, users can discover other accounts and build connections within the Kalakkal community.
                </p>
                <p>
                  Kalakkal is designed to make social interaction feel simple and integrated into the experience.
                </p>
              </div>
            </section>

            {/* 8. Creator Experience */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">For Creators</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal gives creators a place to share photos and video content with an audience.
                </p>
                <p>
                  Creators can upload their content, present it through their profile and allow other users to discover their posts through the Kalakkal feed.
                </p>
                <p>
                  Our goal is to make the creator experience straightforward while providing a platform where original content can be shared and discovered.
                </p>
              </div>
            </section>

            {/* 9. Personal User Experience */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Your Kalakkal Experience</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is designed so that different users can personalize their experience according to their preferences.
                </p>
                <p>
                  Supported settings allow users to adjust available appearance and interface options, including supported themes, fonts and other customization settings.
                </p>
                <p>
                  The goal is to give users more control over how the application looks and feels while keeping the core Kalakkal experience consistent.
                </p>
              </div>
            </section>

            {/* 10. Account-Based Experience */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Your Account, Your Content</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal uses user accounts to provide a personalized experience. Account-based information allows supported features such as profiles, follow relationships and bookmarks to be associated with the appropriate user account.
                </p>
                <p>
                  When users sign back into the same account, supported account-based information can be restored according to the application's data availability and retention policies.
                </p>
              </div>
            </section>

            {/* 11. Designed for a Modern Mobile Experience */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Made for Mobile</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is designed primarily around the modern smartphone experience.
                </p>
                <p>
                  The interface focuses on touch interaction, smooth navigation, clear controls and simple access to important features.
                </p>
                <p>
                  The design philosophy is to keep the experience visually modern while avoiding unnecessary complexity.
                </p>
              </div>
            </section>

            {/* 12. Privacy and User Control */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Privacy Matters</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  We believe users should have clear information about how their information is handled. Kalakkal provides a Privacy Policy explaining the information collected, how it is used, third-party services involved, advertising, account-related information, retention and available privacy choices.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => switchView('privacy')}
                  className="px-6 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-bold transition inline-flex items-center gap-2 cursor-pointer shadow"
                >
                  <Shield className="w-4 h-4" /> Read Privacy Policy
                </button>
              </div>
            </section>

            {/* 13. Advertising */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Advertising on Kalakkal</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal may display advertisements to support the operation and continued development of the platform. Advertising is provided through Google AdMob.
                </p>
                <p>
                  Advertisements may appear in supported areas of the application according to the implemented advertising experience and applicable platform requirements.
                </p>
                <p>
                  Advertising and related data handling should always be described consistently with the application's actual implementation and the applicable privacy requirements.
                </p>
              </div>
            </section>

            {/* 14. Safety and Responsible Use */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">A Responsible Community</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is designed to provide a platform for sharing and discovering user-generated content. Users are expected to use the platform responsibly and follow applicable laws, platform rules and community standards.
                </p>
                <p>
                  Users should respect other people, avoid unlawful content and use the platform in a way that supports a safe and respectful community.
                </p>
              </div>
            </section>

            {/* 15. Continuous Improvement */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Always Improving</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is continuously being developed and improved.
                </p>
                <p>
                  We use product improvements, technical improvements and user feedback to refine the experience over time.
                </p>
                <p>
                  New improvements may include performance enhancements, interface improvements, reliability updates, security improvements and improvements to existing features.
                </p>
                <p>
                  The goal is not simply to add more features, but to make the overall Kalakkal experience more useful, stable and enjoyable.
                </p>
              </div>
            </section>

            {/* 16. Our Product Philosophy */}
            <section className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white tracking-tight">Simple. Creative. Connected.</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3] mx-auto">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-wider">SIMPLE</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Kalakkal aims to keep the core media and social experience easy to understand and use.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3] mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-wider">CREATIVE</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Kalakkal provides a platform where users can create and share photo and video content.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3] mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg uppercase tracking-wider">CONNECTED</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Kalakkal provides social features that allow users to discover profiles and build connections through the follow system.
                  </p>
                </div>
              </div>
            </section>

            {/* 17. Built by MDX */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Kalakkal by MDX</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is a product of MDX, a technology and digital innovation initiative focused on building modern digital products and experiences.
                </p>
                <p>
                  MDX focuses on turning creative ideas into practical digital products while continuously improving technology, design and user experience.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => switchView('about-company')}
                  className="px-6 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-bold transition inline-flex items-center gap-2 cursor-pointer shadow"
                >
                  <Building2 className="w-4 h-4" /> About MDX
                </button>
              </div>
            </section>

            {/* 18. Founder */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Founded by M. Dhinesh Kumar</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Kalakkal is founded by M. Dhinesh Kumar, Founder of MDX.
                </p>
                <p>
                  The product vision focuses on building modern digital experiences that combine technology, creativity and practical user-focused design.
                </p>
                <p>
                  Through MDX, the goal is to develop digital products that are useful, accessible and continuously improved through innovation and development.
                </p>
              </div>
            </section>

            {/* 19. Founder Message */}
            <section className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
              <h3 className="text-xs font-bold text-[#00D6A3] uppercase tracking-widest">A Message From the Founder</h3>
              <blockquote className="text-lg sm:text-2xl font-medium text-white italic leading-relaxed">
                “At MDX, our goal is to turn creative ideas into useful digital products. We believe technology should be accessible, practical and continuously improved. Kalakkal represents our vision of building a modern social media platform focused on media sharing, connection and community.”
              </blockquote>
              <div className="pt-2">
                <p className="font-bold text-white">M. Dhinesh Kumar</p>
                <p className="text-xs text-neutral-400">Founder, MDX</p>
              </div>
            </section>

            {/* 20. Our Commitment */}
            <section className="bg-neutral-950/80 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">Our Commitment to Kalakkal Users</h3>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                <p>
                  We are committed to continuously improving Kalakkal and providing a reliable, modern and user-focused experience.
                </p>
                <p>
                  As the platform develops, we aim to improve performance, usability, security, reliability and useful features while keeping the core experience simple.
                </p>
                <p>
                  User feedback and real-world usage can help guide future improvements to the platform.
                </p>
              </div>
            </section>

            {/* 21. Kalakkal's Core Identity */}
            <section className="bg-neutral-950 border border-neutral-800 rounded-3xl p-12 text-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D6A3]/5 via-transparent to-[#00D6A3]/5 pointer-events-none"></div>
              <img 
                src={APP_ICON_URL} 
                alt="Kalakkal Logo" 
                className="w-16 h-16 rounded-2xl object-contain border border-neutral-700 mx-auto shadow-2xl bg-black"
              />
              <div className="space-y-2">
                <h3 className="text-4xl font-black tracking-wider text-white">Kalakkal</h3>
                <p className="text-lg font-bold text-[#00D6A3]">Share. Connect. Discover.</p>
              </div>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
                A social media platform for sharing photos, videos, and connecting with people.
              </p>
            </section>

            {/* 22. Closing Section */}
            <section className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-3xl p-12 text-center space-y-6 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Welcome to Kalakkal</h3>
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto">
                Share a photo. Watch something new. Discover people. Build connections. Kalakkal is built for the next generation of social media and community experiences.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => switchView('about-company')}
                  className="px-8 py-3.5 rounded-xl bg-[#00D6A3] text-black hover:bg-[#00bf91] text-xs font-bold transition cursor-pointer shadow-xl shadow-[#00D6A3]/20"
                >
                  Open Kalakkal
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 transition cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </section>

          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* VIEW 2: ABOUT COMPANY (MDX)                */}
      {/* ========================================== */}
      {currentView === 'about-company' && (
        <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 animate-fadeIn w-full">
          
          {/* Hero */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
              <img 
                src={COMPANY_ICON_URL} 
                alt="MDX Company Icon" 
                className="w-6 h-6 rounded-full object-cover border border-neutral-700 bg-black"
              />
              <span>MDX — Technology & Digital Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              About MDX
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              MDX is a technology and digital innovation company focused on developing modern digital products, software applications, creative experiences, and technology-driven solutions.
            </p>
            <p className="text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              The company focuses on combining technology, creativity, and user-focused design to develop useful digital products and experiences.
            </p>
          </div>

          {/* Founder Section */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D6A3]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">Leadership</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Founder</h3>
              </div>
            </div>

            <div className="border-t border-neutral-800/80 pt-6 space-y-4">
              <h4 className="text-2xl font-black text-white">M. Dhinesh Kumar</h4>
              <p className="text-xs sm:text-sm font-semibold text-[#00D6A3]">Founder, MDX</p>
              
              <div className="space-y-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p>
                  M. Dhinesh Kumar is the Founder of MDX and is involved in the company's product vision, technology initiatives, creative direction, and development of digital products.
                </p>
                <p>
                  His focus is on exploring technology, software development, digital innovation, entertainment, education, and creative digital experiences.
                </p>
                <p>
                  Under this vision, MDX develops and explores products designed to provide useful and modern digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#00D6A3]" />
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Our vision is to create modern, useful, and accessible digital products that combine technology, creativity, and user-focused design.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              We aim to continuously explore new ideas and technologies while improving the digital experiences we create.
            </p>
          </div>

          {/* Our Focus */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#00D6A3]" />
              Our Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Technology</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Developing modern software, applications, and digital solutions.</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Digital Innovation</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Exploring new technologies and ideas to create useful digital experiences.</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Education</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Developing technology-focused educational and learning experiences.</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                  <Tv className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Entertainment</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Creating digital entertainment products and media experiences.</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Devotional Media</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Supporting digital devotional content, media, and experiences.</p>
              </div>
            </div>
          </div>

          {/* Our Product — Kalakkal */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Tv className="w-5 h-5 text-[#00D6A3]" />
              Our Product — Kalakkal
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Kalakkal is a social media platform developed under the MDX product ecosystem.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Kalakkal is designed to provide users with a modern platform for sharing photos and videos, creating and sharing content, connecting with other users through the follow system, bookmarking videos, and using available music and audio features.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Kalakkal focuses on simple navigation, media discovery, creativity, and social connections.
            </p>
          </div>

          {/* Founder Message */}
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
            <h3 className="text-xs font-bold text-[#00D6A3] uppercase tracking-widest">A Message From the Founder</h3>
            <blockquote className="text-base sm:text-xl font-medium text-white italic leading-relaxed">
              "At MDX, our goal is to turn creative ideas into useful digital products. We believe technology should be accessible, practical, and continuously improved. Kalakkal represents our vision of building a modern social media platform focused on media sharing, connection, and community."
            </blockquote>
            <div className="pt-2">
              <p className="font-bold text-white">— M. Dhinesh Kumar</p>
              <p className="text-xs text-neutral-400">Founder, MDX</p>
            </div>
          </div>

          {/* Our Community */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Users className="w-5 h-5 text-[#00D6A3]" />
              Our Community
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Kalakkal is designed to bring creators and viewers together through a simple social media experience.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Through features such as the follow system, profiles, media sharing, and bookmarks, users can build connections and interact with the content they enjoy.
            </p>
          </div>

          {/* Contact MDX */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-10 space-y-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Contact MDX</h3>
            <p className="text-sm text-neutral-300 max-w-xl mx-auto">
              For business, product, support, or other official enquiries, contact MDX through the official contact information provided on the website.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSupportModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#00D6A3] text-black hover:bg-[#00bf91] text-xs font-bold transition inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#00D6A3]/20"
              >
                <Mail className="w-4 h-4" /> {SUPPORT_EMAIL}
              </button>
            </div>
          </div>

        </div>
      )}

      {/* ========================================== */}
      {/* VIEW 3: PRIVACY POLICY                     */}
      {/* ========================================== */}
      {currentView === 'privacy' && (
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          
          {/* Privacy Header */}
          <div className="mb-10 text-center sm:text-left border-b border-neutral-800 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D6A3]/10 text-[#00D6A3] text-xs font-semibold border border-[#00D6A3]/20">
                Official Legal Document
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Kalakkal Privacy Policy
              </h2>
              <p className="text-sm text-neutral-400">
                Last Updated: <span className="text-neutral-200 font-medium">September 27, 2026</span>
              </p>
            </div>

            {/* Account Deletion Quick Action */}
            <button
              onClick={() => setDeletionModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
            >
              <Trash2 className="w-4 h-4 text-red-400" /> Account & Data Deletion
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
            
            {/* Desktop Table of Contents Sidebar */}
            <div className="hidden lg:block lg:col-span-1 sticky top-28 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-xs font-bold text-neutral-300 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#00D6A3]" /> Table of Contents
              </div>
              
              {/* Search within sections */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search policy..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#00D6A3] transition"
                />
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between group ${
                      activeSection === sec.id 
                        ? 'bg-[#00D6A3]/10 text-[#00D6A3] border border-[#00D6A3]/30' 
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <span className="truncate pr-2">{sec.number}. {sec.title}</span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${activeSection === sec.id ? 'rotate-90 text-[#00D6A3]' : 'text-neutral-600 group-hover:text-neutral-400'}`} />
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Mobile Search Bar */}
              <div className="block lg:hidden relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search privacy policy sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#00D6A3] transition shadow-lg"
                />
              </div>

              {filteredSections.length === 0 ? (
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-12 text-center space-y-3">
                  <HelpCircle className="w-10 h-10 text-neutral-600 mx-auto" />
                  <h3 className="text-lg font-bold text-white">No sections found</h3>
                  <p className="text-xs text-neutral-400">Try searching with different keywords.</p>
                </div>
              ) : (
                filteredSections.map((sec) => (
                  <section 
                    key={sec.id} 
                    id={sec.id}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl transition hover:border-neutral-700 scroll-mt-28"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-800">
                      <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                        {sec.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#00D6A3] uppercase tracking-widest">Section {sec.number}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{sec.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {sec.content.map((paragraph, idx) => (
                        <p key={idx} className={paragraph.includes('Email:') ? 'font-mono text-[#00D6A3] bg-neutral-900/80 p-3 rounded-lg border border-neutral-800 inline-block' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))
              )}

              {/* Bottom Footer Box on Privacy Policy */}
              <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-4 shadow-xl">
                <h3 className="text-lg font-bold text-white">Have questions about your privacy?</h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Our support team is ready to help you with any questions regarding your Kalakkal account, data practices, or privacy choices.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => setSupportModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-[#00D6A3] text-black hover:bg-[#00bf91] text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-[#00D6A3]/20"
                  >
                    <Mail className="w-4 h-4" /> Contact Support
                  </button>
                  <button
                    onClick={() => setDeletionModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" /> Account Deletion Guide
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto bg-neutral-950 border-t border-neutral-800/80 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={APP_ICON_URL} 
              alt="Kalakkal Logo" 
              className="w-8 h-8 rounded-lg object-contain bg-black border border-neutral-800"
            />
            <div>
              <p className="font-bold text-white">Kalakkal</p>
              <p className="text-[10px] text-neutral-500">Official Privacy Policy & Product Website by MDX</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <button onClick={() => switchView('about-kalakkal')} className="hover:text-white transition cursor-pointer">About Kalakkal</button>
            <button onClick={() => switchView('about-company')} className="hover:text-white transition cursor-pointer">About MDX</button>
            <button onClick={() => switchView('privacy')} className="hover:text-white transition cursor-pointer">Privacy Policy</button>
            <button onClick={() => setSupportModalOpen(true)} className="hover:text-white transition cursor-pointer">Contact</button>
          </div>

          <div className="text-center md:text-right text-neutral-500 text-[11px]">
            <p>© 2026 MDX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white shadow-2xl transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-[#00D6A3]" />
        </button>
      )}

      {/* Support / Contact Modal */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSupportModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#00D6A3]/10 border border-[#00D6A3]/20 flex items-center justify-center text-[#00D6A3]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Kalakkal Support</h3>
              <p className="text-xs text-neutral-400">Contact our support team directly via email.</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3">
              <p className="text-xs text-neutral-400">For any privacy questions, inquiries, or support requests, please contact us at:</p>
              <div className="font-mono text-sm font-bold text-[#00D6A3] bg-neutral-950 p-3 rounded-xl border border-neutral-800 select-all">
                {SUPPORT_EMAIL}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex-1 py-3 rounded-xl bg-[#00D6A3] text-black hover:bg-[#00bf91] text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-[#00D6A3]/20"
              >
                <Mail className="w-4 h-4" /> Open Email Client
              </a>
              <button
                onClick={handleCopyEmail}
                className="py-3 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 transition"
              >
                {copiedEmail ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Account Deletion Modal */}
      {deletionModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setDeletionModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Account & Data Deletion</h3>
              <p className="text-xs text-neutral-400">How to request deletion of your Kalakkal account and associated data.</p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                To delete your Kalakkal account and associated data, you can use the account deletion option inside the mobile app:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 pl-2 text-neutral-300">
                <li>Open the Kalakkal app on your Android device.</li>
                <li>Go to <strong className="text-white">Settings</strong> &gt; <strong className="text-white">Account</strong>.</li>
                <li>Tap <strong className="text-white">Delete Account</strong> and confirm your request.</li>
              </ol>
              <p className="pt-2 text-neutral-400">
                Alternatively, you can email <span className="font-mono text-[#00D6A3]">{SUPPORT_EMAIL}</span> with the subject "Account Deletion Request" from your registered email address.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setDeletionModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-white transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
