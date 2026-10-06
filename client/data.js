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
        title: "Alvynx",
        email: "alwan@alvynx.com",
        phone: "",
        location: "Remote / Worldwide",
        instagram: "https://www.instagram.com/alwan.visuals?stkn=czRnYTcxZnd6bG41",
        youtube: "",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/alwankhan/",
    },

    // ─── Hero Section ────────────────────────────────────
    hero: {
        greeting: "Alvynx",
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
        {
            question: "How long does a 60-second video take to deliver?",
            answer: "Standard turnaround for a 60-second video is typically 1 to 2 weeks, depending on the complexity of the motion design, script, and assets provided."
        },
        {
            question: "Do you offer monthly retainer packages?",
            answer: "Yes! We offer flexible monthly retainers based on your continuous video needs. We can discuss your expected volume on call to tailor a custom package."
        },
        {
            question: "How do you learn about my product before editing?",
            answer: "We dive deep into your brand by researching your product, target audience, and market independently. We'll also get some details from you during our onboarding call."
        },
        {
            question: "What if I need revisions on the video?",
            answer: "Every project includes dedicated rounds of revisions typically 2-3 revisions to ensure the final edit aligns perfectly with your vision and brand guidelines."
        },
        {
            question: "What do I need to provide to get started?",
            answer: "Just your product details, brand assets (logos, UI, fonts), and a script if you have one. If you don't have a script, We will built script from scratch."
        },
    ],
};
