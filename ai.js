// بيانات نماذج الذكاء الاصطناعي المحدثة
const aiModels = {
    text: [
        { 
            name: "ChatGPT-4o", 
            description: "أحدث نموذج من OpenAI للدردشة الذكية متعدد المهام", 
            url: "https://chat.openai.com",
            rating: 4.9,
            languages: "متعدد اللغات",
            year: 2024,
            free: false
        },
        { 
            name: "Claude 3", 
            description: "نموذج الدردشة من Anthropic مع تركيز على الأمان والأخلاقيات", 
            url: "https://claude.ai",
            rating: 4.7,
            languages: "الإنجليزية والعربية",
            year: 2024,
            free: true
        },
        { 
            name: "GPT-5", 
            description: "أحدث نموذج نصي من OpenAI (قيد التطوير)", 
            url: "https://openai.com",
            rating: 5.0,
            languages: "متعدد اللغات",
            year: 2025,
            free: false,
            api: true
        },
        { 
            name: "Claude 4", 
            description: "تحديث لنموذج Claude مع قدرات أوسع", 
            url: "https://claude.ai",
            rating: 4.9,
            languages: "الإنجليزية والعربية",
            year: 2025,
            free: false
        },
        { 
            name: "Mistral 7B", 
            description: "نموذج مفتوح المصدر بكفاءة عالية", 
            url: "https://mistral.ai",
            rating: 4.6,
            languages: "متعدد اللغات",
            year: 2024,
            free: true,
            openSource: true
        },
        {
            name: "Gemini 1.5", 
            description: "نموذج جوجل المتقدم مع قدرات استدلال طويلة المدى", 
            url: "https://gemini.google.com",
            rating: 4.8,
            languages: "متعدد اللغات",
            year: 2024,
            free: true
        },
        { 
            name: "LLaMA 3", 
            description: "نموذج مفتوح المصدر من Meta للبحث والتطوير", 
            url: "https://ai.meta.com/llama/",
            rating: 4.5,
            languages: "متعدد اللغات",
            year: 2024,
            free: true
        },
        { 
            name: "Perplexity AI", 
            description: "مساعد بحثي بدقة عالية مع ذكر المصادر", 
            url: "https://www.perplexity.ai",
            rating: 4.6,
            languages: "الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "DeepSeek", 
            description: "نموذج محادثة متقدم من الصين", 
            url: "https://deepseek.com",
            rating: 4.6,
            languages: "الصينية/الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "Doubao", 
            description: "نموذج محادثة من تطوير ByteDance", 
            url: "https://www.doubao.com",
            rating: 4.4,
            languages: "الصينية/الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "Kimi", 
            description: "مساعد ذكي للمحادثة من Moonshot AI", 
            url: "https://kimi.moonshot.cn",
            rating: 4.5,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "Talkie", 
            description: "شات بوت تفاعلي من MiniMax", 
            url: "https://talkie.minimax.com",
            rating: 4.3,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "ChatGLM", 
            description: "نموذج لغوي مفتوح المصدر من Tsinghua & Zhipu AI", 
            url: "https://chatglm.cn",
            rating: 4.4,
            languages: "الصينية/الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "iFlyTek Spark", 
            description: "مساعد ذكي متعدد الاستخدامات", 
            url: "https://spark.iflytek.com",
            rating: 4.5,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "You.com", 
            description: "محرك بحث مدعوم بالذكاء الاصطناعي", 
            url: "https://you.com",
            rating: 4.4,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        { 
            name: "Jasper AI", 
            description: "أداة كتابة تسويقية متقدمة", 
            url: "https://www.jasper.ai",
            rating: 4.6,
            languages: "الإنجليزية",
            year: 2022,
            free: false
        },
        
        { 
            name: "Cohere Command", 
            description: "نموذج نصي متقدم للشركات من Cohere", 
            url: "https://cohere.com",
            rating: 4.7,
            languages: "الإنجليزية",
            year: 2024,
            free: false
        },
        { 
            name: "Anthropic Claude Instant", 
            description: "نسخة سريعة من Claude للاستجابة الفورية", 
            url: "https://claude.ai",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2024,
            free: true
        },
        { 
            name: "Bloom", 
            description: "نموذج لغوي مفتوح المصدر من BigScience", 
            url: "https://bigscience.huggingface.co",
            rating: 4.4,
            languages: "متعدد اللغات",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "Jurassic-2", 
            description: "نموذج الذكاء الاصطناعي من AI21 Labs", 
            url: "https://www.ai21.com",
            rating: 4.6,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "Writer", 
            description: "منصة كتابة بالذكاء الاصطناعي للشركات", 
            url: "https://writer.com",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "NovelAI", 
            description: "مساعد كتابة إبداعية للقصص والخيال", 
            url: "https://novelai.net",
            rating: 4.3,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "Inworld AI", 
            description: "إنشاء شخصيات ذكاء اصطناعي تفاعلية", 
            url: "https://inworld.ai",
            rating: 4.4,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "Character.AI", 
            description: "إنشاء شخصيات افتراضية للدردشة", 
            url: "https://beta.character.ai",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "DeepL Write", 
            description: "مساعد كتابة متقدم لتحسين النصوص", 
            url: "https://www.deepl.com/write",
            rating: 4.7,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        { 
            name: "Sudowrite", 
            description: "مساعد كتابة إبداعية للروائيين", 
            url: "https://www.sudowrite.com",
            rating: 4.3,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        {
            name: "Cohere Generate", 
            description: "نموذج توليد نصوص متقدم للشركات", 
            url: "https://cohere.com/generate",
            rating: 4.6,
            languages: "الإنجليزية",
            year: 2024,
            free: false
        },
        { 
            name: "AI21 Studio", 
            description: "منصة نماذج لغوية متقدمة", 
            url: "https://studio.ai21.com",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2024,
            free: false
        },
        { 
            name: "NexusRaven", 
            description: "نموذج مفتوح المصدر لأتمتة المهام", 
            url: "https://github.com/nexusflowai/NexusRaven",
            rating: 4.3,
            languages: "الإنجليزية",
            year: 2024,
            free: true,
            openSource: true
        }
    ],
    image: [
        { 
            name: "Midjourney V6", 
            description: "أقوى نموذج لتوليد الصور الفنية بدقة عالية", 
            url: "https://www.midjourney.com",
            rating: 4.9,
            type: "فني/واقعي",
            year: 2024,
            free: false
        },
        { 
            name: "Stable Diffusion XL", 
            description: "إصدار متقدم من Stable Diffusion", 
            url: "https://stability.ai",
            rating: 4.8,
            type: "فني/واقعي",
            year: 2024,
            free: true,
            openSource: true
        },
        { 
            name: "Krea AI", 
            description: "توليد صور بدقة 4K", 
            url: "https://krea.ai",
            rating: 4.7,
            type: "فوتوغرافي",
            year: 2024,
            free: false
        },
        {
            name: "DALL·E 3", 
            description: "نموذج توليد الصور من OpenAI مع تفاصيل دقيقة", 
            url: "https://openai.com/dall-e",
            rating: 4.8,
            type: "واقعي/فني",
            year: 2023,
            free: false
        },
        { 
            name: "Stable Diffusion 3", 
            description: "نموذج مفتوح المصدر لتوليد الصور بجودة عالية", 
            url: "https://stability.ai/stable-diffusion",
            rating: 4.7,
            type: "متنوع",
            year: 2024,
            free: true
        },
        { 
            name: "Adobe Firefly", 
            description: "أدوات الذكاء الاصطناعي المدمجة مع منتجات أدوبي", 
            url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
            rating: 4.6,
            type: "إبداعي",
            year: 2023,
            free: false
        },
        { 
            name: "Tongyi Wanxiang", 
            description: "نموذج رسم بالذكاء الاصطناعي من Alibaba", 
            url: "https://wanxiang.alibaba.com",
            rating: 4.5,
            type: "فني/واقعي",
            year: 2023,
            free: true
        },
        { 
            name: "WHEE", 
            description: "توليد واستعادة الصور من Meitu", 
            url: "https://whee.meitu.com",
            rating: 4.3,
            type: "فوتوغرافي",
            year: 2023,
            free: true
        },
        { 
            name: "Keling AI", 
            description: "توليد صور وفيديوهات للتجارة الإلكترونية", 
            url: "https://keling.kuaishou.com",
            rating: 4.4,
            type: "تجاري",
            year: 2023,
            free: false
        },
        { 
            name: "Lumi", 
            description: "منصة إنشاء محتوى مرئي من ByteDance", 
            url: "https://lumi.bytedance.com",
            rating: 4.5,
            type: "متنوع",
            year: 2023,
            free: true
        },
        { 
            name: "Qiyu AI", 
            description: "توليد فنون تقليدية صينية", 
            url: "https://qiyu.ai",
            rating: 4.2,
            type: "فني",
            year: 2023,
            free: true
        },
        { 
            name: "Duoyou AI Reactor", 
            description: "توليد لوحات متعددة الأساليب من Alibaba", 
            url: "https://duoyou.alibaba.com",
            rating: 4.3,
            type: "فني",
            year: 2023,
            free: true
        },
        { 
            name: "Canva AI", 
            description: "تصميم ذكي مع أدوات متكاملة", 
            url: "https://www.canva.com/ai-tools/",
            rating: 4.7,
            type: "تصميم",
            year: 2023,
            free: false
        },
        
        { 
            name: "Ideogram", 
            description: "توليد صور مع نص مدمج بدقة عالية", 
            url: "https://ideogram.ai",
            rating: 4.6,
            type: "تصميم",
            year: 2024,
            free: true
        },
        { 
            name: "Leonardo.AI", 
            description: "منصة متكاملة لتوليد وتعديل الصور", 
            url: "https://leonardo.ai",
            rating: 4.7,
            type: "فني/تصميم",
            year: 2024,
            free: true
        },
        { 
            name: "Playground AI", 
            description: "توليد صور مجانية بجودة عالية", 
            url: "https://playgroundai.com",
            rating: 4.5,
            type: "متنوع",
            year: 2024,
            free: true
        },
        { 
            name: "DreamUp", 
            description: "توليد صور فنية من DeviantArt", 
            url: "https://www.dreamup.com",
            rating: 4.4,
            type: "فني",
            year: 2023,
            free: false
        },
        { 
            name: "Artbreeder", 
            description: "خلط وتعديل الصور الفنية", 
            url: "https://www.artbreeder.com",
            rating: 4.3,
            type: "فني",
            year: 2023,
            free: true
        },
        { 
            name: "NightCafe", 
            description: "توليد صور فنية بأساليب مختلفة", 
            url: "https://creator.nightcafe.studio",
            rating: 4.4,
            type: "فني",
            year: 2023,
            free: true
        },
        { 
            name: "Bing Image Creator", 
            description: "أداة توليد صور من Microsoft", 
            url: "https://www.bing.com/create",
            rating: 4.5,
            type: "متنوع",
            year: 2023,
            free: true
        },
        { 
            name: "Pixlr AI", 
            description: "أدوات تحرير صور مدعومة بالذكاء الاصطناعي", 
            url: "https://pixlr.com/ai-image-generator/",
            rating: 4.3,
            type: "تحرير صور",
            year: 2023,
            free: true
        },
        { 
            name: "Fotor AI", 
            description: "توليد وتحرير الصور بذكاء اصطناعي", 
            url: "https://www.fotor.com/features/ai-image-generator/",
            rating: 4.2,
            type: "تحرير صور",
            year: 2023,
            free: true
        },
        { 
            name: "Deep Dream Generator", 
            description: "تحويل الصور إلى أعمال فنية", 
            url: "https://deepdreamgenerator.com",
            rating: 4.1,
            type: "فني",
            year: 2023,
            free: true
        },
        { 
            name: "Imagine AI", 
            description: "توليد صور من Meta", 
            url: "https://imagine.meta.com",
            rating: 4.3,
            type: "متنوع",
            year: 2023,
            free: true
        },
        { 
            name: "Dream by Wombo", 
            description: "تطبيق توليد صور فنية", 
            url: "https://dream.ai",
            rating: 4.2,
            type: "فني",
            year: 2023,
            free: true
        },
        {
            name: "Stable Diffusion Turbo", 
            description: "نسخة سريعة من Stable Diffusion", 
            url: "https://stability.ai/news/stablediffusion-turbo-launch",
            rating: 4.7,
            type: "فني/واقعي",
            year: 2024,
            free: true
        },
        { 
            name: "Adobe Photoshop AI", 
            description: "أدوات الذكاء الاصطناعي في فوتوشوب", 
            url: "https://www.adobe.com/products/photoshop/ai.html",
            rating: 4.8,
            type: "تحرير صور",
            year: 2024,
            free: false
        }
    ],
    audio: [
        { 
            name: "ElevenLabs", 
            description: "توليد أصوات بشرية واقعية بدرجات عاطفية", 
            url: "https://elevenlabs.io",
            rating: 4.8,
            languages: "40+ لغة",
            year: 2023,
            free: true
        },
        { 
            name: "Voice.ai", 
            description: "تحويل الصوت في الوقت الحقيقي بأصوات مختلفة", 
            url: "https://voice.ai",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "Murf AI", 
            description: "منصة متكاملة لأصوات الذكاء الاصطناعي للمحتوى", 
            url: "https://murf.ai",
            rating: 4.4,
            languages: "20+ لغة",
            year: 2022,
            free: false
        },
        
        { 
            name: "Play.ht", 
            description: "تحويل النص إلى كلام طبيعي بجودة عالية", 
            url: "https://play.ht",
            rating: 4.6,
            languages: "30+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Resemble AI", 
            description: "إنشاء أصوات مخصصة وتقليد الأصوات", 
            url: "https://www.resemble.ai",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "Lovo AI", 
            description: "منصة متكاملة لأصوات الذكاء الاصطناعي", 
            url: "https://lovo.ai",
            rating: 4.4,
            languages: "20+ لغة",
            year: 2023,
            free: true
        },
        { 
            name: "Speechify", 
            description: "تحويل النص إلى كلام بجودة عالية", 
            url: "https://speechify.com",
            rating: 4.3,
            languages: "20+ لغة",
            year: 2023,
            free: true
        },
        { 
            name: "Descript", 
            description: "تحرير الصوت والفيديو باستخدام الذكاء الاصطناعي", 
            url: "https://www.descript.com",
            rating: 4.5,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "Suno AI", 
            description: "توليد موسيقى وأغاني بالذكاء الاصطناعي", 
            url: "https://suno.com",
            rating: 4.4,
            languages: "الإنجليزية",
            year: 2024,
            free: true
        },
        { 
            name: "Boomy", 
            description: "إنشاء موسيقى أوتوماتيكي بالذكاء الاصطناعي", 
            url: "https://boomy.com",
            rating: 4.3,
            languages: "الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "Soundraw", 
            description: "توليد موسيقى مخصصة بالذكاء الاصطناعي", 
            url: "https://soundraw.io",
            rating: 4.2,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "AIVA", 
            description: "تأليف موسيقى عاطفية بالذكاء الاصطناعي", 
            url: "https://www.aiva.ai",
            rating: 4.4,
            languages: "الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "Mubert", 
            description: "توليد موسيقى بدون حقوق ملكية", 
            url: "https://mubert.com",
            rating: 4.3,
            languages: "الإنجليزية",
            year: 2023,
            free: false
        },
        { 
            name: "VocaliD", 
            description: "إنشاء أصوات بشرية مخصصة", 
            url: "https://vocalid.ai",
            rating: 4.4,
            languages: "الإنجليزية",
            year: 2024,
            free: false
        }
    ],
    video: [
        { 
            name: "Runway Gen-2", 
            description: "توليد فيديو من النص أو الصور بجودة عالية", 
            url: "https://runwayml.com",
            rating: 4.7,
            type: "إبداعي",
            year: 2023,
            free: false
        },
        { 
            name: "Pika Labs", 
            description: "أداة قوية لتعديل وإنشاء الفيديو بالذكاء الاصطناعي", 
            url: "https://pika.art",
            rating: 4.6,
            type: "فني",
            year: 2023,
            free: true
        },
        { 
            name: "Synthesia", 
            description: "إنشاء فيديو بتقنية الأفاتار الرقمي", 
            url: "https://www.synthesia.io",
            rating: 4.5,
            type: "تعليمي/تجاري",
            year: 2022,
            free: false
        },
        { 
            name: "Kling AI", 
            description: "مولد فيديوهات واقعية من Kuaishou", 
            url: "https://kling.kuaishou.com",
            rating: 4.6,
            type: "واقعي",
            year: 2023,
            free: true
        },
        { 
            name: "Pictory", 
            description: "تحويل نص إلى فيديو تلقائياً", 
            url: "https://pictory.ai",
            rating: 4.5,
            type: "تسويقي",
            year: 2022,
            free: false
        },
        { 
            name: "HeyGen", 
            description: "إنشاء أفاتارات واقعية تتكلم", 
            url: "https://www.heygen.com",
            rating: 4.6,
            type: "تجاري",
            year: 2023,
            free: false
        },
        
        { 
            name: "InVideo AI", 
            description: "تحويل النص إلى فيديو احترافي", 
            url: "https://invideo.io/ai",
            rating: 4.5,
            type: "تسويقي",
            year: 2023,
            free: false
        },
        { 
            name: "Fliki", 
            description: "إنشاء فيديو من النص مع أصوات واقعية", 
            url: "https://fliki.ai",
            rating: 4.4,
            type: "تسويقي",
            year: 2023,
            free: true
        },
        { 
            name: "Synthesys", 
            description: "إنشاء فيديوهات بأصوات وأفاتارات واقعية", 
            url: "https://synthesys.io",
            rating: 4.3,
            type: "تجاري",
            year: 2023,
            free: false
        },
        { 
            name: "DeepBrain AI", 
            description: "إنشاء فيديوهات بأفاتارات ذكاء اصطناعي", 
            url: "https://www.deepbrain.io",
            rating: 4.4,
            type: "تجاري",
            year: 2023,
            free: false
        },
        { 
            name: "D-ID", 
            description: "إنشاء فيديوهات بأوجه متحركة واقعية", 
            url: "https://www.d-id.com",
            rating: 4.5,
            type: "إبداعي",
            year: 2023,
            free: true
        },
        { 
            name: "Colossyan", 
            description: "منصة إنشاء فيديوهات تعليمية", 
            url: "https://www.colossyan.com",
            rating: 4.3,
            type: "تعليمي",
            year: 2023,
            free: false
        },
        { 
            name: "Steve AI", 
            description: "تحويل النص إلى فيديو متحرك", 
            url: "https://www.steve.ai",
            rating: 4.2,
            type: "تسويقي",
            year: 2023,
            free: false
        },
        { 
            name: "Vizard AI", 
            description: "تحرير الفيديو الذكي بالذكاء الاصطناعي", 
            url: "https://vizard.ai",
            rating: 4.3,
            type: "تحرير",
            year: 2023,
            free: true
        },
        { 
            name: "RawShorts", 
            description: "إنشاء فيديوهات رسوم متحركة", 
            url: "https://www.rawshorts.com",
            rating: 4.2,
            type: "رسوم متحركة",
            year: 2023,
            free: false
        },
        { 
            name: "Animaker", 
            description: "صنع فيديوهات رسوم متحركة بسهولة", 
            url: "https://www.animaker.com",
            rating: 4.1,
            type: "رسوم متحركة",
            year: 2023,
            free: true
        },
        { 
            name: "Lumen5", 
            description: "تحويل المقالات إلى فيديوهات", 
            url: "https://lumen5.com",
            rating: 4.3,
            type: "تسويقي",
            year: 2023,
            free: true
        },
        { 
            name: "Kaiber", 
            description: "تحويل النصوص والصور إلى فيديو فني", 
            url: "https://kaiber.ai",
            rating: 4.5,
            type: "فني",
            year: 2024,
            free: false
        },
        { 
            name: "Synthesys X", 
            description: "جيل جديد من فيديوهات الذكاء الاصطناعي", 
            url: "https://synthesys.io/x",
            rating: 4.6,
            type: "تجاري",
            year: 2024,
            free: false
        }
    ],
    code: [
        { 
            name: "GitHub Copilot X", 
            description: "مساعد برمجة متقدم مع دعم الدردشة", 
            url: "https://github.com/features/copilot",
            rating: 4.8,
            languages: "جميع لغات البرمجة",
            year: 2023,
            free: false
        },
        { 
            name: "Codeium", 
            description: "بديل مجاني لـ Copilot مع دعم ممتاز", 
            url: "https://codeium.com",
            rating: 4.7,
            languages: "50+ لغة برمجة",
            year: 2023,
            free: true
        },
        { 
            name: "Tabnine", 
            description: "مساعد برمجة يعمل بدون اتصال بالإنترنت", 
            url: "https://www.tabnine.com",
            rating: 4.5,
            languages: "30+ لغة برمجة",
            year: 2022,
            free: true
        },
        { 
            name: "Tongyi Lingma", 
            description: "مساعد برمجي ذكي من Alibaba Cloud", 
            url: "https://lingma.aliyun.com",
            rating: 4.5,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        { 
            name: "MarsCode", 
            description: "بيئة تطوير مدعومة بالذكاء الاصطناعي من ByteDance", 
            url: "https://marscode.bytedance.com",
            rating: 4.4,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        { 
            name: "Comate", 
            description: "مساعد برمجي متقدم من Baidu", 
            url: "https://comate.baidu.com",
            rating: 4.5,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        
        { 
            name: "Amazon CodeWhisperer", 
            description: "مساعد برمجة من Amazon", 
            url: "https://aws.amazon.com/codewhisperer/",
            rating: 4.6,
            languages: "15+ لغة برمجة",
            year: 2023,
            free: true
        },
        { 
            name: "Replit Ghostwriter", 
            description: "مساعد برمجة مدمج في Replit", 
            url: "https://replit.com/site/ghostwriter",
            rating: 4.4,
            languages: "30+ لغة برمجة",
            year: 2023,
            free: false
        },
        { 
            name: "Sourcegraph Cody", 
            description: "مساعد برمجة يعمل على الكود بأكمله", 
            url: "https://about.sourcegraph.com/cody",
            rating: 4.5,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        { 
            name: "CodeComplete", 
            description: "مساعد برمجة مخصص للشركات", 
            url: "https://www.codecomplete.ai",
            rating: 4.3,
            languages: "20+ لغة برمجة",
            year: 2023,
            free: false
        },
        { 
            name: "Phind", 
            description: "مساعد برمجة مع دعم البحث", 
            url: "https://www.phind.com",
            rating: 4.4,
            languages: "متعدد اللغات",
            year: 2023,
            free: true
        },
        { 
            name: "MutableAI", 
            description: "مساعد برمجة مع ميزات متقدمة", 
            url: "https://mutable.ai",
            rating: 4.2,
            languages: "متعدد اللغات",
            year: 2023,
            free: false
        },
        { 
            name: "CodeT5", 
            description: "نموذج برمجة مفتوح المصدر", 
            url: "https://github.com/salesforce/CodeT5",
            rating: 4.3,
            languages: "متعدد اللغات",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "AskCodi", 
            description: "مساعد برمجة متعدد الاستخدامات", 
            url: "https://www.askcodi.com",
            rating: 4.1,
            languages: "20+ لغة برمجة",
            year: 2023,
            free: true
        },
        { 
            name: "CodeSquire", 
            description: "مساعد برمجة لمحللي البيانات", 
            url: "https://codesquire.ai",
            rating: 4.0,
            languages: "Python, SQL, R",
            year: 2023,
            free: false
        },
        { 
            name: "Bito AI", 
            description: "مساعد برمجة مخصص للفرق", 
            url: "https://bito.ai",
            rating: 4.2,
            languages: "10+ لغة برمجة",
            year: 2023,
            free: true
        },
        { 
            name: "Starcoder 2", 
            description: "نموذج برمجة مفتوح المصدر من BigCode", 
            url: "https://huggingface.co/bigcode/starcoder2",
            rating: 4.7,
            languages: "30+ لغة برمجة",
            year: 2024,
            free: true,
            openSource: true
        }
    ],
    translate: [
        { 
            name: "DeepL Pro", 
            description: "أدق خدمة ترجمة بالذكاء الاصطناعي", 
            url: "https://www.deepl.com/translator",
            rating: 4.9,
            languages: "30+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Google Translate AI", 
            description: "ترجمة جوجل المدعومة بأحدث نماذج الذكاء الاصطناعي", 
            url: "https://translate.google.com",
            rating: 4.6,
            languages: "100+ لغة",
            year: 2023,
            free: true
        },
       
        { 
            name: "ModernMT", 
            description: "نموذج ترجمة متكيف مع السياق", 
            url: "https://www.modernmt.com",
            rating: 4.5,
            languages: "20+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "NLLB by Meta", 
            description: "نموذج ترجمة مفتوح المصدر يدعم 200 لغة", 
            url: "https://ai.meta.com/research/no-language-left-behind/",
            rating: 4.4,
            languages: "200+ لغة",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "Systran", 
            description: "منصة ترجمة احترافية للشركات", 
            url: "https://www.systransoft.com",
            rating: 4.3,
            languages: "50+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Lingvanex", 
            description: "حلول ترجمة متكاملة للشركات", 
            url: "https://lingvanex.com",
            rating: 4.2,
            languages: "40+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Memsource", 
            description: "منصة ترجمة مدعومة بالذكاء الاصطناعي", 
            url: "https://www.memsource.com",
            rating: 4.3,
            languages: "100+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Smartcat", 
            description: "منصة ترجمة وتعاون للفرق", 
            url: "https://www.smartcat.ai",
            rating: 4.1,
            languages: "100+ لغة",
            year: 2023,
            free: true
        },
        { 
            name: "iTranslate", 
            description: "تطبيق ترجمة متقدم للهواتف", 
            url: "https://www.itranslate.com",
            rating: 4.0,
            languages: "100+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Sonix", 
            description: "ترجمة تلقائية للنصوص الصوتية", 
            url: "https://sonix.ai",
            rating: 4.2,
            languages: "40+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "Translate.com", 
            description: "منصة ترجمة شاملة", 
            url: "https://www.translate.com",
            rating: 4.1,
            languages: "100+ لغة",
            year: 2023,
            free: false
        },
        { 
            name: "DeepL API", 
            description: "خدمة ترجمة متقدمة للمطورين", 
            url: "https://www.deepl.com/pro-api",
            rating: 4.8,
            languages: "30+ لغة",
            year: 2024,
            free: false
        }
    ],
    research: [
        { 
            name: "Scismic", 
            description: "منصة بحث علمي مدعومة بالذكاء الاصطناعي", 
            url: "https://scismic.com",
            rating: 4.4,
            field: "أكاديمي",
            year: 2024,
            free: true
        },
    
        { 
            name: "Elicit", 
            description: "مساعد بحثي لتحليل الأوراق العلمية", 
            url: "https://elicit.org",
            rating: 4.7,
            field: "أكاديمي",
            year: 2023,
            free: true
        },
        { 
            name: "Consensus", 
            description: "إجابات مدعومة بأبحاث علمية", 
            url: "https://consensus.app",
            rating: 4.6,
            field: "علمي",
            year: 2023,
            free: false
        },
        
        { 
            name: "Scite", 
            description: "تحليل الاستشهادات العلمية", 
            url: "https://scite.ai",
            rating: 4.5,
            field: "أكاديمي",
            year: 2023,
            free: false
        },
        { 
            name: "ResearchRabbit", 
            description: "اكتشاف الأوراق العلمية ذات الصلة", 
            url: "https://www.researchrabbit.ai",
            rating: 4.4,
            field: "أكاديمي",
            year: 2023,
            free: true
        },
        { 
            name: "Iris.ai", 
            description: "مساعد بحثي متقدم", 
            url: "https://iris.ai",
            rating: 4.3,
            field: "أكاديمي",
            year: 2023,
            free: false
        },
        { 
            name: "Semantic Scholar", 
            description: "محرك بحث أكاديمي مدعوم بالذكاء الاصطناعي", 
            url: "https://www.semanticscholar.org",
            rating: 4.6,
            field: "أكاديمي",
            year: 2023,
            free: true
        },
        { 
            name: "Connected Papers", 
            description: "اكتشاف الأوراق العلمية المرتبطة", 
            url: "https://www.connectedpapers.com",
            rating: 4.4,
            field: "أكاديمي",
            year: 2023,
            free: true
        },
        { 
            name: "Scholarcy", 
            description: "تلخيص الأوراق العلمية تلقائياً", 
            url: "https://www.scholarcy.com",
            rating: 4.3,
            field: "أكاديمي",
            year: 2023,
            free: false
        },
        { 
            name: "SciSpace", 
            description: "فهم الأوراق العلمية المعقدة", 
            url: "https://typeset.io",
            rating: 4.5,
            field: "أكاديمي",
            year: 2023,
            free: true
        },
        { 
            name: "Litmaps", 
            description: "رسم خرائط للعلاقات بين الأوراق العلمية", 
            url: "https://www.litmaps.com",
            rating: 4.2,
            field: "أكاديمي",
            year: 2023,
            free: false
        },
        { 
            name: "Inciteful", 
            description: "أدوات لاكتشاف الأوراق العلمية", 
            url: "https://inciteful.xyz",
            rating: 4.1,
            field: "أكاديمي",
            year: 2023,
            free: true
        }

    ],
    assistant: [
        { 
            name: "AgentGPT", 
            description: "إنشاء وكلاء ذكاء اصطناعي تلقائيين", 
            url: "https://agentgpt.reworkd.ai",
            rating: 4.4,
            type: "أتمتة",
            year: 2023,
            free: true
        },
        { 
            name: "AutoGPT", 
            description: "نموذج يعمل تلقائياً لتحقيق الأهداف", 
            url: "https://github.com/Significant-Gravitas/Auto-GPT",
            rating: 4.3,
            type: "أتمتة",
            year: 2023,
            free: true
        },
       
        { 
            name: "BabyAGI", 
            description: "نظام إدارة مهام ذاتي", 
            url: "https://github.com/yoheinakajima/babyagi",
            rating: 4.2,
            type: "أتمتة",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "GodMode", 
            description: "واجهة للتفاعل مع نماذج الذكاء الاصطناعي", 
            url: "https://godmode.space",
            rating: 4.3,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "HyperWrite", 
            description: "مساعد كتابة وتصفح ذكي", 
            url: "https://hyperwriteai.com",
            rating: 4.4,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Personal AI", 
            description: "مساعد شخصي يتعلم منك", 
            url: "https://www.personal.ai",
            rating: 4.2,
            type: "شخصي",
            year: 2023,
            free: false
        },
        { 
            name: "Pi", 
            description: "مساعد شخصي ذكي للدردشة", 
            url: "https://pi.ai",
            rating: 4.5,
            type: "شخصي",
            year: 2023,
            free: true
        },
        { 
            name: "Inflection AI", 
            description: "مساعد شخصي متقدم", 
            url: "https://inflection.ai",
            rating: 4.3,
            type: "شخصي",
            year: 2023,
            free: true
        },
        { 
            name: "MindOS", 
            description: "مساعد ذكي لإدارة المهام", 
            url: "https://www.mindos.com",
            rating: 4.1,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "Taskade", 
            description: "مساعد إدارة مشاريع ومهام", 
            url: "https://www.taskade.com",
            rating: 4.2,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Motion", 
            description: "مساعد جدولة ذكي", 
            url: "https://www.usemotion.com",
            rating: 4.3,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "Reclaim AI", 
            description: "مساعد جدولة تلقائية", 
            url: "https://reclaim.ai",
            rating: 4.2,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Adept", 
            description: "مساعد ذكي لأتمتة المهام على الحاسوب", 
            url: "https://www.adept.ai",
            rating: 4.5,
            type: "أتمتة",
            year: 2024,
            free: false
        }
    ],
    chinese: [
        { 
            name: "Ernie Bot (Baidu)", 
            description: "نموذج الذكاء الاصطناعي الصيني المتقدم", 
            url: "https://yiyan.baidu.com",
            rating: 4.5,
            languages: "الصينية/الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "Tongyi Qianwen (Alibaba)", 
            description: "نموذج Alibaba للذكاء الاصطناعي العام", 
            url: "https://tongyi.aliyun.com",
            rating: 4.4,
            languages: "الصينية/الإنجليزية",
            year: 2023,
            free: true
        },
        { 
            name: "SenseChat", 
            description: "نموذج محادثة من SenseTime", 
            url: "https://chat.sensetime.com",
            rating: 4.3,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "360 Zhinao", 
            description: "نموذج ذكاء اصطناعي من 360", 
            url: "https://ai.360.cn",
            rating: 4.2,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "Xinghuo", 
            description: "نموذج من iFlytek للشركات", 
            url: "https://xinghuo.xfyun.cn",
            rating: 4.4,
            languages: "الصينية",
            year: 2023,
            free: false
        },
        { 
            name: "MOSS", 
            description: "نموذج مفتوح المصدر من جامعة Fudan", 
            url: "https://moss.fastnlp.top",
            rating: 4.1,
            languages: "الصينية/الإنجليزية",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "Ruanqi", 
            description: "نموذج من NetEase للذكاء الاصطناعي", 
            url: "https://youdao.com",
            rating: 4.0,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "Huatuo", 
            description: "نموذج طبي صيني متخصص", 
            url: "https://huatuo.ai",
            rating: 4.3,
            languages: "الصينية",
            year: 2023,
            free: true
        },
        { 
            name: "Belle", 
            description: "نموذج محادثة مفتوح المصدر", 
            url: "https://github.com/LianjiaTech/BELLE",
            rating: 4.2,
            languages: "الصينية",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "Linly", 
            description: "نموذج محادثة صيني مفتوح المصدر", 
            url: "https://github.com/CVI-SZU/Linly",
            rating: 4.1,
            languages: "الصينية",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "CPM-Bee", 
            description: "نموذج لغوي صيني متقدم", 
            url: "https://github.com/OpenBMB/CPM-Bee",
            rating: 4.0,
            languages: "الصينية",
            year: 2023,
            free: true,
            openSource: true
        },
        { 
            name: "DeepSeek-V3", 
            description: "أحدث نسخة من نموذج DeepSeek الصيني", 
            url: "https://deepseek.com",
            rating: 4.6,
            languages: "الصينية/الإنجليزية",
            year: 2024,
            free: true
        }
    ],
    tools: [
        { 
            name: "ChatPDF", 
            description: "التفاعل مع ملفات PDF كأنك تتحدث مع خبير", 
            url: "https://www.chatpdf.com",
            rating: 4.6,
            type: "معالجة مستندات",
            year: 2023,
            free: true
        },
        { 
            name: "Notion AI", 
            description: "مساعد ذكي مدمج في منصة Notion", 
            url: "https://www.notion.so/product/ai",
            rating: 4.5,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "GrammarlyGO", 
            description: "مساعد كتابة متقدم من Grammarly", 
            url: "https://www.grammarly.com/grammarlygo",
            rating: 4.7,
            type: "كتابة",
            year: 2023,
            free: false
        },
        { 
            name: "WritingCat", 
            description: "مساعد كتابة ذكي من Meta Technology", 
            url: "https://writingcat.com",
            rating: 4.3,
            type: "كتابة",
            year: 2023,
            free: true
        },
        { 
            name: "Yuanqi", 
            description: "مساعد شخصي للرفاهية النفسية من Tencent", 
            url: "https://yuanqi.qq.com",
            rating: 4.2,
            type: "صحة نفسية",
            year: 2023,
            free: true
        },
        { 
            name: "Otter.ai", 
            description: "نسخ وتلخيص المحادثات الصوتية", 
            url: "https://otter.ai",
            rating: 4.5,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Fireflies", 
            description: "مساعد اجتماعات ذكي", 
            url: "https://fireflies.ai",
            rating: 4.4,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Tome", 
            description: "إنشاء عروض تقديمية بالذكاء الاصطناعي", 
            url: "https://tome.app",
            rating: 4.6,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Beautiful.ai", 
            description: "تصميم عروض تقديمية ذكية", 
            url: "https://www.beautiful.ai",
            rating: 4.5,
            type: "تصميم",
            year: 2023,
            free: false
        },
        { 
            name: "Rewind AI", 
            description: "تسجيل وتذكر كل ما تفعله على الحاسوب", 
            url: "https://www.rewind.ai",
            rating: 4.3,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "Mem", 
            description: "تنظيم المعرفة الشخصية", 
            url: "https://get.mem.ai",
            rating: 4.4,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "Clockwise", 
            description: "تحسين جدولك الزمني تلقائياً", 
            url: "https://www.getclockwise.com",
            rating: 4.2,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "SaneBox", 
            description: "تنظيم البريد الإلكتروني بالذكاء الاصطناعي", 
            url: "https://www.sanebox.com",
            rating: 4.5,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "Briefly", 
            description: "تلخيص المستندات الطويلة", 
            url: "https://www.brieflyai.com",
            rating: 4.3,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Genei", 
            description: "بحث وتلخيص المستندات", 
            url: "https://www.genei.io",
            rating: 4.2,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "ChatGPT for Sheets", 
            description: "دمج ChatGPT مع جداول Google", 
            url: "https://workspace.google.com/marketplace/app/chatgpt_for_sheets_and_docs/677318054654",
            rating: 4.6,
            type: "إنتاجية",
            year: 2023,
            free: false
        },
        { 
            name: "AI2sql", 
            description: "تحويل النص إلى استعلامات SQL", 
            url: "https://www.ai2sql.io",
            rating: 4.4,
            type: "برمجة",
            year: 2023,
            free: true
        },
        { 
            name: "TLDR This", 
            description: "تلخيص المقالات والمواقع", 
            url: "https://tldrthis.com",
            rating: 4.3,
            type: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Wordtune", 
            description: "إعادة صياغة النصوص وتحسينها", 
            url: "https://www.wordtune.com",
            rating: 4.5,
            type: "كتابة",
            year: 2023,
            free: false
        },
        { 
            name: "Uizard", 
            description: "تصميم واجهات المستخدم بالذكاء الاصطناعي", 
            url: "https://uizard.io",
            rating: 4.5,
            type: "تصميم",
            year: 2024,
            free: true
        },
        { 
            name: "Diagram", 
            description: "إنشاء مخططات وتصاميم ذكية", 
            url: "https://www.diagram.com",
            rating: 4.4,
            type: "تصميم",
            year: 2024,
            free: false
        }
    ],
    medical: [
        { 
            name: "IBM Watson Health", 
            description: "منصة الذكاء الاصطناعي للرعاية الصحية من IBM", 
            url: "https://www.ibm.com/watson-health",
            rating: 4.7,
            field: "تشخيص وعلاج",
            year: 2023,
            free: false
        },
        { 
            name: "Google Med-PaLM 3", 
            description: "نموذج طبي متقدم من جوجل", 
            url: "https://ai.google/healthcare",
            rating: 4.9,
            field: "تشخيص طبي",
            year: 2024,
            free: false
        },
        { 
            name: "Surgical AI", 
            description: "مساعد جراحي بالذكاء الاصطناعي", 
            url: "https://www.surgical.ai",
            rating: 4.8,
            field: "جراحة",
            year: 2024,
            free: false
        },
        {
            name: "DeepMind Health", 
            description: "أبحاث الذكاء الاصطناعي في المجال الطبي من جوجل", 
            url: "https://deepmind.google/health",
            rating: 4.8,
            field: "بحوث طبية",
            year: 2023,
            free: false
        },
        { 
            name: "Nuance DAX", 
            description: "مساعد طبي لتدوين الملاحظات السريرية", 
            url: "https://www.nuance.com/healthcare.html",
            rating: 4.6,
            field: "توثيق طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Zebra Medical Vision", 
            description: "تحليل الصور الطبية باستخدام الذكاء الاصطناعي", 
            url: "https://www.zebra-med.com",
            rating: 4.7,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "PathAI", 
            description: "تحليل العينات المرضية باستخدام الذكاء الاصطناعي", 
            url: "https://www.pathai.com",
            rating: 4.5,
            field: "تشخيص مرضي",
            year: 2023,
            free: false
        },
        { 
            name: "Butterfly Network", 
            description: "أجهزة الموجات فوق الصوتية الذكية", 
            url: "https://www.butterflynetwork.com",
            rating: 4.6,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Owkin", 
            description: "منصة للبحث الطبي والتعاون بين المؤسسات", 
            url: "https://owkin.com",
            rating: 4.4,
            field: "بحوث طبية",
            year: 2023,
            free: false
        },
        { 
            name: "Tempus", 
            description: "تحليل البيانات الطبية للطب الدقيق", 
            url: "https://www.tempus.com",
            rating: 4.5,
            field: "تحليل بيانات",
            year: 2023,
            free: false
        },
        { 
            name: "Insilico Medicine", 
            description: "اكتشاف الأدوية باستخدام الذكاء الاصطناعي", 
            url: "https://insilico.com",
            rating: 4.6,
            field: "اكتشاف أدوية",
            year: 2023,
            free: false
        },
        { 
            name: "BenevolentAI", 
            description: "منصة لاكتشاف الأدوية وتطويرها", 
            url: "https://www.benevolent.com",
            rating: 4.5,
            field: "اكتشاف أدوية",
            year: 2023,
            free: false
        },
        { 
            name: "SOPHiA GENETICS", 
            description: "تحليل البيانات الجينية للطب الدقيق", 
            url: "https://www.sophiagenetics.com",
            rating: 4.7,
            field: "جينوميات",
            year: 2023,
            free: false
        },
        { 
            name: "Caption Health", 
            description: "مساعد الذكاء الاصطناعي لتصوير القلب", 
            url: "https://captionhealth.com",
            rating: 4.5,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Paige AI", 
            description: "تحليل الصور المرضية بالذكاء الاصطناعي", 
            url: "https://www.paige.ai",
            rating: 4.6,
            field: "تشخيص مرضي",
            year: 2023,
            free: false
        },
        { 
            name: "Viz.ai", 
            description: "اكتشاف السكتات الدماغية بالذكاء الاصطناعي", 
            url: "https://www.viz.ai",
            rating: 4.7,
            field: "تشخيص طبي",
            year: 2023,
            free: false
        },
        { 
            name: "HeartFlow", 
            description: "تحليل تدفق الدم في القلب", 
            url: "https://www.heartflow.com",
            rating: 4.5,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Prognos", 
            description: "تحليل البيانات الطبية للتنبؤ بالأمراض", 
            url: "https://www.prognos.ai",
            rating: 4.4,
            field: "تحليل بيانات",
            year: 2023,
            free: false
        },
        { 
            name: "Enlitic", 
            description: "تحليل الصور الطبية العميقة", 
            url: "https://www.enlitic.com",
            rating: 4.3,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Aidoc", 
            description: "تحليل الصور الإشعاعية بالذكاء الاصطناعي", 
            url: "https://www.aidoc.com",
            rating: 4.6,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Nanox AI", 
            description: "تحليل الصور الطبية للكشف المبكر", 
            url: "https://www.nanox.vision",
            rating: 4.4,
            field: "تصوير طبي",
            year: 2023,
            free: false
        },
        { 
            name: "Qventus", 
            description: "تحسين العمليات في المستشفيات", 
            url: "https://www.qventus.com",
            rating: 4.3,
            field: "إدارة مستشفيات",
            year: 2023,
            free: false
        },
        { 
            name: "Huma", 
            description: "مراقبة المرضى عن بعد", 
            url: "https://www.huma.com",
            rating: 4.5,
            field: "رعاية عن بعد",
            year: 2023,
            free: false
        },
        { 
            name: "K Health", 
            description: "تشخيص طبي شخصي بالذكاء الاصطناعي", 
            url: "https://khealth.com",
            rating: 4.4,
            field: "تشخيص طبي",
            year: 2023,
            free: true
        },
        { 
            name: "Ada Health", 
            description: "مساعد تشخيص طبي شخصي", 
            url: "https://ada.com",
            rating: 4.5,
            field: "تشخيص طبي",
            year: 2023,
            free: true
        },
        { 
            name: "Buoy Health", 
            description: "مساعد تشخيص طبي ذكي", 
            url: "https://www.buoyhealth.com",
            rating: 4.3,
            field: "تشخيص طبي",
            year: 2023,
            free: true
        },
        { 
            name: "Babylon Health", 
            description: "رعاية صحية شخصية بالذكاء الاصطناعي", 
            url: "https://www.babylonhealth.com",
            rating: 4.4,
            field: "رعاية صحية",
            year: 2023,
            free: false
        },
        { 
            name: "DeepScribe", 
            description: "تدوين الملاحظات الطبية تلقائياً", 
            url: "https://www.deepscribe.ai",
            rating: 4.6,
            field: "توثيق طبي",
            year: 2024,
            free: false
        },
        { 
            name: "Rad AI", 
            description: "تحليل الصور الإشعاعية المتقدم", 
            url: "https://www.radai.com",
            rating: 4.7,
            field: "تصوير طبي",
            year: 2024,
            free: false
        }
    ],
    education: [
        { 
            name: "Khanmigo", 
            description: "مساعد تعليمي من Khan Academy", 
            url: "https://khanacademy.org",
            rating: 4.7,
            field: "تعليم عام",
            year: 2024,
            free: false
        },
        {
            name: "Coursera AI Tutor", 
            description: "مساعد تعلم آلي مخصص", 
            url: "https://coursera.org",
            rating: 4.5,
            field: "تعليم إلكتروني",
            year: 2023,
            free: true
        },
        
        { 
            name: "Duolingo Max", 
            description: "تعلم اللغات بمساعدة الذكاء الاصطناعي", 
            url: "https://www.duolingo.com",
            rating: 4.6,
            field: "تعليم لغات",
            year: 2023,
            free: false
        },
        { 
            name: "Quizlet Learn", 
            description: "تعلم ذكي مع التكيف التلقائي", 
            url: "https://quizlet.com",
            rating: 4.4,
            field: "تعليم عام",
            year: 2023,
            free: true
        },
        { 
            name: "Socratic by Google", 
            description: "مساعد تعليمي لحل المسائل", 
            url: "https://socratic.org",
            rating: 4.5,
            field: "تعليم عام",
            year: 2023,
            free: true
        },
        { 
            name: "Brainly AI", 
            description: "مساعدة في الواجبات المدرسية", 
            url: "https://brainly.com",
            rating: 4.3,
            field: "تعليم عام",
            year: 2023,
            free: true
        },
        { 
            name: "Knowji", 
            description: "تعلم المفردات بالذكاء الاصطناعي", 
            url: "https://knowji.com",
            rating: 4.2,
            field: "تعليم لغات",
            year: 2023,
            free: false
        },
        { 
            name: "Elsa Speak", 
            description: "تحسين النطق باللغة الإنجليزية", 
            url: "https://elsaspeak.com",
            rating: 4.5,
            field: "تعليم لغات",
            year: 2023,
            free: false
        },
        { 
            name: "Amira Learning", 
            description: "مساعدة في تعلم القراءة", 
            url: "https://www.amiralearning.com",
            rating: 4.3,
            field: "تعليم أطفال",
            year: 2023,
            free: false
        },
        { 
            name: "Century Tech", 
            description: "منصة تعلم تكيفية", 
            url: "https://www.century.tech",
            rating: 4.4,
            field: "تعليم عام",
            year: 2023,
            free: false
        },
        { 
            name: "Carnegie Learning", 
            description: "تعلم الرياضيات بالذكاء الاصطناعي", 
            url: "https://www.carnegielearning.com",
            rating: 4.3,
            field: "تعليم رياضيات",
            year: 2023,
            free: false
        },
        { 
            name: "Querium", 
            description: "مساعدة في تعلم STEM", 
            url: "https://www.querium.com",
            rating: 4.2,
            field: "تعليم علوم",
            year: 2023,
            free: false
        },
        { 
            name: "Mathia", 
            description: "مساعد تعلم الرياضيات", 
            url: "https://www.carnegielearning.com/mathia/",
            rating: 4.4,
            field: "تعليم رياضيات",
            year: 2023,
            free: false
        },
        { 
            name: "WriteLab", 
            description: "تحسين مهارات الكتابة", 
            url: "https://writelab.com",
            rating: 4.3,
            field: "تعليم كتابة",
            year: 2023,
            free: false
        },
        { 
            name: "Gradescope", 
            description: "تصحيح الواجبات تلقائياً", 
            url: "https://www.gradescope.com",
            rating: 4.5,
            field: "تعليم عام",
            year: 2023,
            free: false
        },
        { 
            name: "Alelo", 
            description: "تعلم اللغات بمحاكاة المحادثات", 
            url: "https://alelo.com",
            rating: 4.2,
            field: "تعليم لغات",
            year: 2023,
            free: false
        },
        { 
            name: "MathGPT", 
            description: "مساعد تعلم الرياضيات بالذكاء الاصطناعي", 
            url: "https://www.mathgpt.com",
            rating: 4.5,
            field: "تعليم رياضيات",
            year: 2024,
            free: true
        },
        { 
            name: "Cognii", 
            description: "مساعد تعليمي تفاعلي", 
            url: "https://www.cognii.com",
            rating: 4.3,
            field: "تعليم عام",
            year: 2024,
            free: false
        }
    ],
    
    finance: [
        { 
            name: "BloombergGPT", 
            description: "نموذج مالي متخصص من بلومبيرج لتحليل الأسواق المالية", 
            url: "https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/",
            rating: 4.8,
            field: "تحليل الأسواق",
            year: 2023,
            free: false
        },
        { 
            name: "Kensho", 
            description: "منصة ذكاء اصطناعي لتحليل البيانات المالية والاستثمارية", 
            url: "https://www.kensho.com",
            rating: 4.7,
            field: "الاستثمار الذكي",
            year: 2023,
            free: false
        },
        { 
            name: "AlphaSense", 
            description: "مساعد بحثي متقدم للبيانات المالية ووثائق الشركات", 
            url: "https://www.alpha-sense.com",
            rating: 4.6,
            field: "البحث المالي",
            year: 2023,
            free: false
        },
        { 
            name: "Sentieo", 
            description: "منصة تحليل مالي متكاملة بذكاء اصطناعي", 
            url: "https://sentieo.com",
            rating: 4.5,
            field: "التحليل المالي",
            year: 2023,
            free: false
        },
        { 
            name: "Trefis", 
            description: "تحليل وتقييم الشركات باستخدام الذكاء الاصطناعي", 
            url: "https://www.trefis.com",
            rating: 4.4,
            field: "تقييم الشركات",
            year: 2023,
            free: true
        },
        { 
            name: "Zacks Premium", 
            description: "توصيات استثمارية مدعومة بالذكاء الاصطناعي", 
            url: "https://www.zacks.com",
            rating: 4.3,
            field: "التوصيات الاستثمارية",
            year: 2023,
            free: false
        },
        { 
            name: "TipRanks", 
            description: "تحليل أداء المحللين الماليين وتوقعاتهم", 
            url: "https://www.tipranks.com",
            rating: 4.5,
            field: "تقييم المحللين",
            year: 2023,
            free: true
        },
        { 
            name: "Trade Ideas", 
            description: "نموذج ذكاء اصطناعي لتوليد أفكار التداول", 
            url: "https://www.trade-ideas.com",
            rating: 4.4,
            field: "تداول الأسهم",
            year: 2023,
            free: false
        },
        { 
            name: "Aidyia", 
            description: "نظام استثمار بالذكاء الاصطناعي للأسواق العالمية", 
            url: "https://www.aidyia.com",
            rating: 4.6,
            field: "الاستثمار الآلي",
            year: 2023,
            free: false
        },
        { 
            name: "EquBot", 
            description: "إدارة المحافظ الاستثمارية بالذكاء الاصطناعي", 
            url: "https://www.equbot.com",
            rating: 4.5,
            field: "إدارة المحافظ",
            year: 2023,
            free: false
        },
        { 
            name: "Kavout", 
            description: "تحليل الأسهم باستخدام التعلم الآلي", 
            url: "https://www.kavout.com",
            rating: 4.3,
            field: "تحليل الأسهم",
            year: 2023,
            free: true
        },
        { 
            name: "Aladdin by BlackRock", 
            description: "منصة إدارة استثمارات متكاملة من بلاكروك", 
            url: "https://www.blackrock.com/aladdin",
            rating: 4.8,
            field: "إدارة الاستثمارات",
            year: 2023,
            free: false
        },
        { 
            name: "ForwardLane", 
            description: "مساعد مالي ذكي للاستشارات الاستثمارية", 
            url: "https://www.forwardlane.com",
            rating: 4.4,
            field: "الاستشارات المالية",
            year: 2023,
            free: false
        },
        { 
            name: "Eagle Alpha", 
            description: "تحليل البيانات البديلة للاستثمار", 
            url: "https://www.eaglealpha.com",
            rating: 4.5,
            field: "البيانات البديلة",
            year: 2023,
            free: false
        },
        { 
            name: "Lux Hedge", 
            description: "تحليل صناديق التحوط باستخدام الذكاء الاصطناعي", 
            url: "https://www.luxhedge.com",
            rating: 4.3,
            field: "صناديق التحوط",
            year: 2023,
            free: false
        }
    ],
     
    business: [
        { 
            name: "Jasper for Business", 
            description: "أداة كتابة تسويقية للفرق", 
            url: "https://www.jasper.ai",
            rating: 4.6,
            field: "تسويق",
            year: 2023,
            free: false
        },
        { 
            name: "Copy.ai", 
            description: "إنشاء محتوى تسويقي بالذكاء الاصطناعي", 
            url: "https://www.copy.ai",
            rating: 4.5,
            field: "تسويق",
            year: 2023,
            free: true
        },
        { 
            name: "Anyword", 
            description: "تحسين النصوص التسويقية", 
            url: "https://anyword.com",
            rating: 4.4,
            field: "تسويق",
            year: 2023,
            free: false
        },
        { 
            name: "Regie.ai", 
            description: "إنشاء محتوى مبيعات", 
            url: "https://www.regie.ai",
            rating: 4.3,
            field: "مبيعات",
            year: 2023,
            free: false
        },
        { 
            name: "Gong", 
            description: "تحليل محادثات المبيعات", 
            url: "https://www.gong.io",
            rating: 4.7,
            field: "مبيعات",
            year: 2023,
            free: false
        },
        { 
            name: "Chorus by ZoomInfo", 
            description: "تحليل محادثات المبيعات", 
            url: "https://www.chorus.ai",
            rating: 4.6,
            field: "مبيعات",
            year: 2023,
            free: false
        },
        { 
            name: "Cresta", 
            description: "تحسين أداء خدمة العملاء", 
            url: "https://cresta.com",
            rating: 4.5,
            field: "خدمة عملاء",
            year: 2023,
            free: false
        },
        { 
            name: "Exceed.ai", 
            description: "أتمتة المبيعات والتفاعل مع العملاء", 
            url: "https://exceed.ai",
            rating: 4.4,
            field: "مبيعات",
            year: 2023,
            free: false
        },
        { 
            name: "People.ai", 
            description: "تحسين أداء فرق المبيعات", 
            url: "https://people.ai",
            rating: 4.5,
            field: "مبيعات",
            year: 2023,
            free: false
        },
        { 
            name: "Clari", 
            description: "تنبؤات المبيعات بالذكاء الاصطناعي", 
            url: "https://www.clari.com",
            rating: 4.6,
            field: "مبيعات",
            year: 2023,
            free: false
        },
        { 
            name: "Glean", 
            description: "بحث ذكي في بيانات الشركة", 
            url: "https://www.glean.com",
            rating: 4.4,
            field: "إدارة معرفة",
            year: 2023,
            free: false
        },
        { 
            name: "Guru", 
            description: "إدارة المعرفة للفرق", 
            url: "https://www.getguru.com",
            rating: 4.5,
            field: "إدارة معرفة",
            year: 2023,
            free: false
        },
        { 
            name: "Tome", 
            description: "إنشاء عروض تقديمية للعمل", 
            url: "https://tome.app",
            rating: 4.6,
            field: "إنتاجية",
            year: 2023,
            free: true
        },
        { 
            name: "Beautiful.ai", 
            description: "تصميم عروض تقديمية احترافية", 
            url: "https://www.beautiful.ai",
            rating: 4.5,
            field: "تصميم",
            year: 2023,
            free: false
        },
        { 
            name: "Decktopus", 
            description: "إنشاء عروض تقديمية بذكاء اصطناعي", 
            url: "https://www.decktopus.com",
            rating: 4.3,
            field: "تصميم",
            year: 2023,
            free: true
        },
        { 
            name: "Clari Copilot", 
            description: "مساعد مبيعات متقدم", 
            url: "https://www.clari.com/copilot",
            rating: 4.6,
            field: "مبيعات",
            year: 2024,
            free: false
        },
        { 
            name: "Gong Revenue Intelligence", 
            description: "تحليل بيانات الإيرادات", 
            url: "https://www.gong.io/revenue-intelligence",
            rating: 4.7,
            field: "مبيعات",
            year: 2024,
            free: false
        }
    ]
};

// أيقونات الأقسام المحدثة
const categoryIcons = {
    text: "fas fa-comment-dots",
    image: "fas fa-palette",
    audio: "fas fa-volume-up",
    video: "fas fa-video",
    code: "fas fa-code",
    translate: "fas fa-language",
    research: "fas fa-flask",
    assistant: "fas fa-robot",
    chinese: "fas fa-dragon",
    tools: "fas fa-tools",
    medical: "fas fa-heartbeat",
    education: "fas fa-graduation-cap",
    business: "fas fa-briefcase",
    finance: "fas fa-chart-line",
    
};

// عناوين الأقسام المحدثة
const categoryTitles = {
    text: "نصوص وكتابة ومحادثة",
    image: "تصميم وصور",
    audio: "أصوات وتحويل نص لصوت",
    video: "فيديو وتوليد فيديو",
    code: "برمجة وأكواد",
    translate: "ترجمة ولغات",
    research: "بحوث وتحليل بيانات",
    assistant: "مساعدات ذكية وأتمتة",
    chinese: "نماذج صينية",
    tools: "أدوات مساعدة",
    medical: "نماذج طبية وصحية",
    education: "تعليم وتعلم",
    business: "أعمال وتجارة",
    finance: "مالية واستثمار",
};


// عرض النماذج في الصفحة
function displayModels() {
    const container = document.querySelector('.ai-categories');
    container.innerHTML = '';
    
    for (const [category, models] of Object.entries(aiModels)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category';
        categorySection.dataset.category = category;
        
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <h3><i class="${categoryIcons[category]}"></i> ${categoryTitles[category]}</h3>
            <span class="category-badge">${models.length} نموذج</span>
        `;
        
        const grid = document.createElement('div');
        grid.className = 'models-grid';
        
        models.forEach(model => {
            const card = document.createElement('div');
            card.className = 'model-card';
            
            // تحديد إذا كان النموذج مجاني أو مدفوع
            const pricingBadge = model.free ? 
                '<span class="model-badge free">مجاني</span>' : 
                '<span class="model-badge paid">مدفوع</span>';
            
            // تحديد بيانات إضافية حسب النوع
            let extraMeta = '';
            if (category === 'text' || category === 'translate' || category === 'audio') {
                extraMeta = `<span><i class="fas fa-language"></i> ${model.languages}</span>`;
            } else if (category === 'image') {
                extraMeta = `<span><i class="fas fa-paint-brush"></i> ${model.type}</span>`;
            } else if (category === 'research' || category === 'medical'|| category === 'finance' || category === 'education' || category === 'business') {
                extraMeta = `<span><i class="fas fa-graduation-cap"></i> ${model.field}</span>`;
            }
            
            card.innerHTML = `
                <div class="model-content">
                    ${pricingBadge}
                    <h4><i class="${categoryIcons[category]}"></i> ${model.name}</h4>
                    <p>${model.description}</p>
                    <div class="model-meta">
                        <span><i class="fas fa-star"></i> ${model.rating}</span>
                        ${extraMeta}
                        <span><i class="fas fa-calendar-alt"></i> ${model.year}</span>
                    </div>
                    <a href="${model.url}" target="_blank" class="model-link">
                        تجربة النموذج <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <div class="model-footer">
                    <button class="details-btn" data-model="${model.name.toLowerCase().replace(/\s+/g, '-')}">
                        <i class="fas fa-info-circle"></i> التفاصيل
                    </button>
                    <button class="try-btn" data-link="${model.url}">
                        <i class="fas fa-play"></i> تجربة
                    </button>
                </div>
            `;
            
            grid.appendChild(card);
        });
        
        categorySection.appendChild(header);
        categorySection.appendChild(grid);
        container.appendChild(categorySection);
    }
    
    // إضافة أحداث النقر على الأزرار
    addButtonEvents();
}

// فلترة النماذج
function filterModels() {
    const searchTerm = document.getElementById('ai-search').value.toLowerCase();
    const filterValue = document.getElementById('ai-filter').value;
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        const categoryType = category.dataset.category;
        const shouldShowCategory = filterValue === 'all' || filterValue === categoryType;
        
        if (shouldShowCategory) {
            let hasVisibleModels = false;
            const models = category.querySelectorAll('.model-card');
            
            models.forEach(model => {
                const modelName = model.querySelector('h4').textContent.toLowerCase();
                const modelDesc = model.querySelector('p').textContent.toLowerCase();
                const isMatch = searchTerm === '' || 
                              modelName.includes(searchTerm) || 
                              modelDesc.includes(searchTerm);
                
                model.style.display = isMatch ? 'block' : 'none';
                if (isMatch) hasVisibleModels = true;
            });
            
            category.style.display = hasVisibleModels ? 'block' : 'none';
        } else {
            category.style.display = 'none';
        }
    });
}

// إضافة أحداث النقر على الأزرار
function addButtonEvents() {
    // أزرار التجربة
    document.querySelectorAll('.try-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const url = this.getAttribute('data-link');
            window.open(url, '_blank');
        });
    });
    
    // أزرار التفاصيل (يمكن توسيعها لاحقاً)
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modelId = this.getAttribute('data-model');
            alert(`سيتم عرض تفاصيل أكثر عن ${modelId} في إصدار لاحق`);
        });
    });
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    displayModels();
    
    // أحداث البحث والتصفية
    document.getElementById('ai-search').addEventListener('input', filterModels);
    document.getElementById('ai-filter').addEventListener('change', filterModels);
    document.getElementById('search-btn').addEventListener('click', filterModels);
    
    // تطبيق الفلترة عند تحميل الصفحة
    filterModels();
});


// إضافة الأنماط الإضافية إلى الصفحة
const styleElement = document.createElement('style');
styleElement.innerHTML = additionalStyles;
document.head.appendChild(styleElement);