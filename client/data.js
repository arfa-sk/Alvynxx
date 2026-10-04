/**
 * Site Data Layer
 *
 * All site content lives here as fallback data. When the backend is
 * reachable, api.js fetches live content instead. The rendering logic
 * in script.js stays untouched either way.
 */

const PORTFOLIO = {
    // ─── Company Info ────────────────────────────────────
    personal: {
        name: "Alvynx",
        shortName: "ALVYNX",
        title: "B2B SaaS Video Editing Agency",
        email: "alwan@alvynx.com",
        phone: "",
        location: "Remote / Worldwide",
        instagram: "https://instagram.com/alvynx",
        youtube: "https://youtube.com/@alvynx",
        twitter: "https://twitter.com/alvynx",
        linkedin: "https://linkedin.com/company/alvynx",
    },

    // ─── Hero Section ────────────────────────────────────
    hero: {
        greeting: "B2B SaaS Video Production",
        title: 'Make them stop.<br class="hero-br-mobile"> Make them understand.<br class="hero-br-desktop hero-br-mobile"> Make them buy.',
        subtitle: "We produce animated VSLs and ads for SaaS and fintech brands built around attention, clarity, and conversion.",
        videoUrl: "",
    },

    // ─── Stats ───────────────────────────────────────────
    stats: [
        { number: "10+", label: "Videos Produced" },
        { number: "3+", label: "Years Editing" },
        { number: "5+", label: "Industries" },
    ],

    // ─── Our Work ────────────────────────────────────────
    work: [
        {
            title: "Deel",
            tag: "Product Launch",
            tagColor: "pink",
            description: "A smooth interface animation breaking down multi-currency payroll and compliance into clean visuals.",
            videoSrc: "assest/videos/deel.mp4",
            fileId: "14sKSGo-wlXnJr_rYfcG6CorGQCaOmFlx",
            videoUrl: "https://drive.google.com/file/d/14sKSGo-wlXnJr_rYfcG6CorGQCaOmFlx/preview",
            thumbnail: ""
        },
        {
            title: "Elevate Pay",
            tag: "Product Demo",
            tagColor: "cyan",
            description: "An engaging animations displaying global USD accounts and seamless international payments.",
            videoSrc: "assest/videos/elevate.mp4",
            fileId: "1bQ5OUPCA3Kjz0ZYJpmyS3ZhLRZZiTcab",
            videoUrl: "https://drive.google.com/file/d/1bQ5OUPCA3Kjz0ZYJpmyS3ZhLRZZiTcab/preview",
            thumbnail: ""
        },
        {
            title: "Flowla",
            tag: "Product Launch",
            tagColor: "pink",
            description: "Dynamic animation highlighting digital sales rooms that streamline complex B2B client onboarding.",
            videoSrc: "assest/videos/flowla.mp4",
            fileId: "1YQN0jxITwz_flEkaSWUirFu2DstSK1Vs",
            videoUrl: "https://drive.google.com/file/d/1YQN0jxITwz_flEkaSWUirFu2DstSK1Vs/preview",
            thumbnail: ""
        },
        {
            title: "Lightfield",
            tag: "Product Demo",
            tagColor: "cyan",
            description: "A interface edit highlighting AI assisted email drafting, quick message edits, and automated follow-up sequences.",
            videoSrc: "assest/videos/lightfield.mp4",
            fileId: "1P07aSgtpwPoaxczb29URvAvZ9r-SnwAV",
            videoUrl: "https://drive.google.com/file/d/1P07aSgtpwPoaxczb29URvAvZ9r-SnwAV/preview",
            thumbnail: ""
        },
        {
            title: "SimpleAI",
            tag: "AI & SaaS Ad",
            tagColor: "pink",
            description: "A slick product breakdown demonstrating automated voice agents and SMS workflows converting leads on autopilot.",
            videoSrc: "assest/videos/simple_ai.mp4",
            fileId: "1boJcIenOS9skmiKSOvmPKz_QPC05W82-",
            videoUrl: "https://drive.google.com/file/d/1boJcIenOS9skmiKSOvmPKz_QPC05W82-/preview",
            thumbnail: ""
        },
        {
            title: "Code Swifters",
            tag: "Developer Tool",
            tagColor: "purple",
            description: "A modern tech overview displaying website scalable mobile apps, and full stack engineering work.",
            videoSrc: "assest/videos/code_swifter.mp4",
            fileId: "1vv2HhVRddzUeVuGoLF1L2T6lRqOWelIC",
            videoUrl: "https://drive.google.com/file/d/1vv2HhVRddzUeVuGoLF1L2T6lRqOWelIC/preview",
            thumbnail: ""
        },
        {
            title: "NayaPay",
            tag: "Product Demo",
            tagColor: "cyan",
            description: "High energy animations showcasing mobile app featuring instant digital payments, virtual cards, and more.",
            videoSrc: "assest/videos/nayapay.mp4",
            fileId: "1gFz9jl4ghoUbug9ZzoPaKsEH0C-yf-bM",
            videoUrl: "https://drive.google.com/file/d/1gFz9jl4ghoUbug9ZzoPaKsEH0C-yf-bM/preview",
            thumbnail: ""
        },
        {
            title: "Ramp",
            tag: "Commercial",
            tagColor: "pink",
            description: "A crisp kinetic edit illustrating smart corporate cards and automated real-time expense tracking.",
            videoSrc: "assest/videos/ramp.mp4",
            fileId: "1SNjnNQfNOjQhnaYi6u2SVyNmnBTWWI3x",
            videoUrl: "https://drive.google.com/file/d/1SNjnNQfNOjQhnaYi6u2SVyNmnBTWWI3x/preview",
            thumbnail: ""
        },
        {
            title: "Stenox",
            tag: "Short-Form Ad",
            tagColor: "cyan",
            description: "A high retention animation for desktop ap showcasing instant voice-to-text transcription right on macOS.",
            videoSrc: "assest/videos/stenox.mp4",
            fileId: "1vJm7x0LLeYwkQJoTfhjPsVbKmv62ZPYN",
            videoUrl: "https://drive.google.com/file/d/1vJm7x0LLeYwkQJoTfhjPsVbKmv62ZPYN/preview",
            thumbnail: ""
        },
    ],

    // ─── Impact ──────────────────────────────────────────
    impact: [
        { clientName: "Placeholder Client A", metric: "60k+ views", thumbnail: "", videoUrl: "" },
        { clientName: "Placeholder Client B", metric: "400+ signups", thumbnail: "", videoUrl: "" },
        { clientName: "Placeholder Client C", metric: "6k+ views", thumbnail: "", videoUrl: "" },
        { clientName: "Placeholder Client D", metric: "25k+ views", thumbnail: "", videoUrl: "" },
    ],

    // ─── How It Works / Process ──────────────────────────
    process: [
        { title: "Discovery", place: "", description: "One call. We learn your product, your users, and what's not landing." },
        { title: "Script", place: "", description: "Built to convert, not describe. You approve the idea before you see a frame." },
        { title: "Design & Animation", place: "", description: "Visuals take shape first. Motion brings them alive." },
        { title: "Delivery", place: "", description: "Platform-ready cuts for landing page, ads, socials. Ready to launch, not just finished." },
    ],

    // ─── Testimonials ────────────────────────────────────
    testimonials: [
        { quote: "Our launch video blew up and we didn't even have to promote it ourselves — 60k+ views in the first week.", name: "Placeholder Name", role: "Founder, Placeholder SaaS", avatar: "" },
        { quote: "Explaining our product used to take a 10-minute call. Now I just send the Alvynx video and replies roll in.", name: "Placeholder Name", role: "Founder, Placeholder App", avatar: "" },
        { quote: "Elite-level storytelling with zero handholding needed on our end. It's amazing how easy they made it look.", name: "Placeholder Name", role: "Head of Growth, Placeholder Inc.", avatar: "" },
        { quote: "Our product is genuinely hard to explain. Alvynx took the chaos and turned it into something people actually watch to the end.", name: "Placeholder Name", role: "Co-founder, Placeholder Labs", avatar: "" },
        { quote: "We've worked with the team a few times now — never missed a deadline, and every video felt like they understood our brand.", name: "Placeholder Name", role: "Marketing Lead, Placeholder Co.", avatar: "" },
        { quote: "Crypto meets AI isn't easy to market, but Alvynx made it click for our audience.", name: "Placeholder Name", role: "Digital Entrepreneur", avatar: "" },
    ],

    // ─── Offers / Pricing ────────────────────────────────
    offers: [
        {
            title: "Starter",
            type: "One-off",
            description: "One-off project &bull; Best for first-time clients & single launches",
            isRecommended: false,
            features: [
                "1 video (launch or demo, your choice)",
                "16:9 + 9:16 formats included",
                "2 revision rounds",
                "10–15 days turnaround",
                "No ad creatives included",
                "Best for first-time clients & single launches",
            ],
            ctaText: "Request a project",
            ctaLink: "#booking",
        },
        {
            title: "Growth",
            type: "Monthly retainer",
            description: "Monthly retainer &bull; Best for brands prioritizing quality over volume",
            isRecommended: true,
            features: [
                "1 main video / month (16:9 + 9:16)",
                "2 ad creatives / month (built from scratch)",
                "2 revisions on main video + 1 per ad",
                "Rolling turnaround, priority queue",
                "Best for quality over ad volume",
            ],
            ctaText: "Request a project",
            ctaLink: "#booking",
        },
        {
            title: "Scale",
            type: "Monthly retainer",
            description: "Monthly retainer &bull; Best for scaling paid social & creative testing",
            isRecommended: false,
            features: [
                "1 main video / month (16:9 + 9:16)",
                "4 ad creatives / month (built from scratch)",
                "2 revisions on main video + 1 per ad",
                "Rolling turnaround, priority queue",
                "Occasional 2nd video in lighter months",
                "Best for scaling paid social volume",
            ],
            ctaText: "Request a project",
            ctaLink: "#booking",
        },
    ],

    // ─── FAQ ─────────────────────────────────────────────
    faq: [
        { question: "What is your Organic Launch Campaign?", answer: "It's a launch video paired with a network of creators and your own personal network, coordinated to release at the same time — so the algorithm sees a spike in activity around your launch." },
        { question: "How is that different from just a launch video?", answer: "A launch video on its own still needs an audience. The Organic Launch Campaign adds the distribution — vetted creators and a synchronized release — so the video actually gets seen." },
        { question: "Do you offer voiceovers in different accents or languages?", answer: "Yes — let us know the accent, language, or tone you're going for and we'll match a voiceover to it." },
        { question: "How long will it take?", answer: "Most launch and demo videos are delivered within 1-2 weeks of final script approval, depending on complexity and revisions." },
        { question: "Do you offer monthly packages?", answer: "Yes, the Bulk Creative Videos package is built for teams that need a steady stream of videos every month at a discounted per-video rate." },
        { question: "How do you learn about my product?", answer: "A short intake form to start, then our team digs into your product, competitors, and user feedback before we ever write a script." },
        { question: "Do you have a physical office or are you fully remote?", answer: "We're fully remote and work with SaaS teams worldwide." },
    ],
};
