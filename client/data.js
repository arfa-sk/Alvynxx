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
        email: "hello@alvynx.com",
        phone: "+1 000-000-0000",
        location: "Remote / Worldwide",
        instagram: "https://instagram.com/alvynx",
        youtube: "https://youtube.com/@alvynx",
        twitter: "https://twitter.com/alvynx",
        linkedin: "https://linkedin.com/company/alvynx",
    },

    // ─── Hero Section ────────────────────────────────────
    hero: {
        greeting: "B2B SaaS Video Production",
        title: "Make them stop. Make them understand. Make them buy.",
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
            title: "Deel Launch Ad",
            tag: "Product Launch",
            tagColor: "pink",
            description: "A fast-paced launch video built to spread across social channels the day a major feature ships.",
            videoSrc: "assest/videos/deel.mp4",
            fileId: "14sKSGo-wlXnJr_rYfcG6CorGQCaOmFlx",
            videoUrl: "https://drive.google.com/file/d/14sKSGo-wlXnJr_rYfcG6CorGQCaOmFlx/preview",
            thumbnail: ""
        },
        {
            title: "Elevate Pay Explainer",
            tag: "Product Demo",
            tagColor: "cyan",
            description: "A clear, guided walkthrough of core fintech mechanics built to convert and educate trial users.",
            videoSrc: "assest/videos/elevate.mp4",
            fileId: "1bQ5OUPCA3Kjz0ZYJpmyS3ZhLRZZiTcab",
            videoUrl: "https://drive.google.com/file/d/1bQ5OUPCA3Kjz0ZYJpmyS3ZhLRZZiTcab/preview",
            thumbnail: ""
        },
        {
            title: "Flowla Commercial",
            tag: "Product Launch",
            tagColor: "pink",
            description: "A dynamic commercial ad engineered to highlight seamless workflow and customer engagement.",
            videoSrc: "assest/videos/flowla.mp4",
            fileId: "1YQN0jxITwz_flEkaSWUirFu2DstSK1Vs",
            videoUrl: "https://drive.google.com/file/d/1YQN0jxITwz_flEkaSWUirFu2DstSK1Vs/preview",
            thumbnail: ""
        },
        {
            title: "NayaPay Feature Reel",
            tag: "Product Demo",
            tagColor: "cyan",
            description: "Feature showcase highlighting frictionless mobile payments, modern cards, and app onboarding.",
            videoSrc: "assest/videos/nayapay.mp4",
            fileId: "1gFz9jl4ghoUbug9ZzoPaKsEH0C-yf-bM",
            videoUrl: "https://drive.google.com/file/d/1gFz9jl4ghoUbug9ZzoPaKsEH0C-yf-bM/preview",
            thumbnail: ""
        },
        {
            title: "Ramp 4K Spec Ad",
            tag: "Commercial",
            tagColor: "pink",
            description: "Ultra-sharp 4K motion design emphasizing corporate cards, spend management, and scale.",
            videoSrc: "assest/videos/ramp.mp4",
            fileId: "1SNjnNQfNOjQhnaYi6u2SVyNmnBTWWI3x",
            videoUrl: "https://drive.google.com/file/d/1SNjnNQfNOjQhnaYi6u2SVyNmnBTWWI3x/preview",
            thumbnail: ""
        },
        {
            title: "Stenox Short Ad",
            tag: "Short-Form Ad",
            tagColor: "cyan",
            description: "Punchy, high-impact short-form video tailored for high conversion and viral reach.",
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
        { title: "Design & Animation", place: "", description: "Storyboard locked first. Then animated, frame by frame. No mid-project surprises." },
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
            isRecommended: false,
            mainVideo: "1 video (launch or demo, your choice), 16:9 + 9:16",
            adCreatives: "None",
            revisions: "2 rounds",
            turnaround: "10-15 days",
            bestFor: "First-time clients, testing you out, single launches",
            ctaText: "Book a Call",
            ctaLink: "#booking",
        },
        {
            title: "Growth",
            type: "Monthly retainer",
            isRecommended: true,
            mainVideo: "1/month, 16:9 + 9:16, 2 revisions",
            adCreatives: "2/month, built from scratch, 1 revision each",
            revisions: "",
            turnaround: "Rolling, priority queue",
            bestFor: "Brands that want quality over ad volume",
            ctaText: "Book a Call",
            ctaLink: "#booking",
        },
        {
            title: "Scale",
            type: "Monthly retainer",
            isRecommended: false,
            mainVideo: "1/month, 16:9 + 9:16, 2 revisions (occasional 2nd video in lighter months, not guaranteed)",
            adCreatives: "4/month, built from scratch, 1 revision each",
            revisions: "",
            turnaround: "Rolling, priority queue",
            bestFor: "Brands scaling paid social, want more creative testing volume",
            ctaText: "Book a Call",
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
