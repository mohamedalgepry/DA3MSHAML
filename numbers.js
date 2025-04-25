// بيانات الأرقام الهامة في مصر (محدثة وشاملة)
const importantNumbers = [
    // ============= أرقام الطوارئ العامة =============
    {
        name: "الشرطة",
        number: "122",
        category: "emergency",
        description: "رقم الطوارئ للشرطة المصرية"
    },
    {
        name: "الإسعاف",
        number: "123",
        category: "emergency",
        description: "رقم الطوارئ لسيارات الإسعاف"
    },
    {
        name: "الحماية المدنية (المطافي)",
        number: "180",
        category: "emergency",
        description: "رقم الطوارئ للحماية المدنية وإطفاء الحرائق"
    },
    {
        name: "الشرطة السياحية",
        number: "126",
        category: "emergency",
        description: "للتبليغ عن المشاكل التي تواجه السائحين"
    },
    {
        name: "شرطة النجدة",
        number: "129",
        category: "emergency",
        description: "للتبليغ عن أي حالات طارئة تتطلب تدخل الشرطة"
    },
    {
        name: "المرور",
        number: "128",
        category: "emergency",
        description: "للتبليغ عن حوادث الطرق والمخالفات المرورية"
    },

    // ============= أرقام الدعم النفسي =============
    {
        name: "الخط الساخن للدعم النفسي - وزارة الصحة (أرضي)",
        number: "08008880700",
        category: "support",
        description: "خط ساخن مجاني من أي خط أرضي لتقديم الدعم النفسي والاستشارات في حالات الطوارئ"
    },
    {
        name: "الخط الساخن للدعم النفسي - وزارة الصحة (محمول)",
        number: "0220816831",
        category: "support",
        description: "خط ساخن للدعم النفسي والاستشارات من أي هاتف محمول"
    },
    {
        name: "مركز قضايا المرأة المصرية",
        number: "0237154557",
        category: "support",
        description: "يقدم دعمًا نفسيًا وقانونيًا للنساء المعنفات"
    },
    {
        name: "مركز النديم لضحايا العنف الأسري",
        number: "01000552793",
        category: "support",
        description: "خط ساخن لدعم الناجيات من العنف الأسري والتعذيب"
    },
    {
        name: "مركز النديم لدعم الناجيات",
        number: "01006662404",
        category: "support",
        description: "خط ساخن إضافي لدعم الناجيات من العنف"
    },
    {
        name: "الجمعية المصرية للتوعية والصحة النفسية (وعي)",
        number: "غير متوفر",
        category: "support",
        description: "تقدم دعمًا نفسيًا للفئات المهمشة مثل النساء والأطفال"
    },
    {
        name: "جمعية قرية الأمل للتأهيل النفسي",
        number: "023524563",
        category: "support",
        description: "توفر دعمًا نفسيًا وإيواء لأطفال الشوارع (للقصر فقط)"
    },
    {
        name: "خط نجدة الطفل",
        number: "16000",
        category: "support",
        description: "للتبليغ عن أي انتهاكات ضد الأطفال"
    },

    // ============= مستشفيات الصحة النفسية =============
    {
        name: "مستشفى العباسية للصحة النفسية",
        number: "0224832500",
        category: "mental-health",
        description: "أكبر مركز علاجي للصحة النفسية وعلاج الإدمان في القاهرة"
    },
    {
        name: "مستشفى المعمورة للصحة النفسية",
        number: "033684204",
        category: "mental-health",
        description: "مركز علاجي للإدمان والصحة النفسية في الإسكندرية"
    },
    {
        name: "مستشفى القصر العيني",
        number: "0223654000",
        category: "mental-health",
        description: "مستشفى جامعي يضم قسمًا للصحة النفسية وعلاج الإدمان"
    },
    {
        name: "مستشفى حلوان للصحة النفسية",
        number: "0225563000",
        category: "mental-health",
        description: "يقدم خدمات علاجية للإدمان والاضطرابات النفسية"
    },
    {
        name: "مستشفى الدمرداش",
        number: "0226748000",
        category: "mental-health",
        description: "مستشفى جامعي يوفر خدمات الصحة النفسية"
    },
    {
        name: "مستشفى المطار الجديدة",
        number: "0222684000",
        category: "mental-health",
        description: "مركز علاجي متخصص في علاج الإدمان"
    },
    {
        name: "مستشفى القوات المسلحة بالمعادي",
        number: "0225249000",
        category: "mental-health",
        description: "يقدم خدمات علاج الإدمان والصحة النفسية"
    },
    {
        name: "مستشفى شبرا قاص",
        number: "غير متوفر",
        category: "mental-health",
        description: "يضم قسمًا لعلاج الإدمان والصحة النفسية"
    },
    {
        name: "مستشفى العزازي بالشرقية",
        number: "0552304000",
        category: "mental-health",
        description: "يقدم خدمات الصحة النفسية وعلاج الإدمان"
    },
    {
        name: "مركز العزيمة (الغردقة)",
        number: "غير متوفر",
        category: "mental-health",
        description: "مركز لعلاج الإدمان والتأهيل النفسي"
    },
    {
        name: "مستشفى دار الهضبة للطب النفسي",
        number: "01154333341",
        category: "mental-health",
        description: "مستشفى خاص متخصص في الطب النفسي وعلاج الإدمان"
    },
    {
        name: "مستشفى دار الأمل للطب النفسي",
        number: "0224182000",
        category: "mental-health",
        description: "يقدم خدمات علاج الإدمان والصحة النفسية في التجمع الخامس"
    },
    {
        name: "مستشفى كليوباترا",
        number: "0224152000",
        category: "mental-health",
        description: "مستشفى خاص يقدم خدمات طبية شاملة تشمل الطب النفسي"
    },
    {
        name: "مستشفى بورسعيد للصحة النفسية",
        number: "0663234000",
        category: "mental-health",
        description: "مستشفى حكومي يقدم خدمات الصحة النفسية"
    },
    {
        name: "مستشفى أسيوط للصحة النفسية",
        number: "0882334000",
        category: "mental-health",
        description: "مستشفى حكومي يضم قسمًا للصحة النفسية"
    },
    {
        name: "مستشفى طنطا للصحة النفسية",
        number: "0403334000",
        category: "mental-health",
        description: "يقدم خدمات علاجية للاضطرابات النفسية"
    },
    {
        name: "مستشفى أسوان للصحة النفسية",
        number: "0973484000",
        category: "mental-health",
        description: "مستشفى حكومي للصحة النفسية وعلاج الإدمان"
    },
    {
        name: "مستشفى شبين الكوم للصحة النفسية",
        number: "0482224000",
        category: "mental-health",
        description: "يوفر خدمات الصحة النفسية في المنوفية"
    },

    // ============= أرقام الصحة العامة =============
    {
        name: "وزارة الصحة والسكان",
        number: "105",
        category: "health",
        description: "الخط الساخن لوزارة الصحة والسكان"
    },
    {
        name: "مركز مكافحة السموم",
        number: "0226085385",
        category: "health",
        description: "للإبلاغ عن حالات التسمم"
    },
    {
        name: "الهلال الأحمر المصري",
        number: "123",
        category: "health",
        description: "للحالات الطبية الطارئة"
    },
    {
        name: "الطوارئ الطبية (الإسعاف الجوي)",
        number: "137",
        category: "health",
        description: "للحالات الحرجة التي تحتاج لنقل جوي"
    },

    // ============= المستشفيات العسكرية =============
    {
        name: "المستشفى العسكري بالمعادي",
        number: "0223627000",
        category: "health",
        description: "مستشفى تابع للقوات المسلحة يقدم خدمات طبية متكاملة"
    },
    {
        name: "مستشفى الشرطة بالعباسية",
        number: "0224822000",
        category: "health",
        description: "مستشفى تابع لوزارة الداخلية - قسم الطوارئ 24 ساعة"
    },
    {
        name: "مستشفى القوات المسلحة بالمعادي (مستشفى 57357)",
        number: "0225380000",
        category: "health",
        description: "أحد أكبر المستشفيات العسكرية المتخصصة في الأورام"
    },
    {
        name: "مستشفى الجلاء العسكري",
        number: "0224025000",
        category: "health",
        description: "من أقدم المستشفيات العسكرية في القاهرة"
    },
    {
        name: "مستشفى الإسماعيلية العسكري",
        number: "0643201000",
        category: "health",
        description: "يخدم المحافظات المجاورة لقناة السويس"
    },

    // ============= المستشفيات المدنية الحكومية =============
    {
        name: "مستشفى أحمد ماهر التعليمي",
        number: "0223641000",
        category: "health",
        description: "من أكبر المستشفيات التعليمية في مصر - قسم الطوارئ 24 ساعة"
    },
    {
        name: "مستشفى المنيرة العام",
        number: "0225905000",
        category: "health",
        description: "يخدم مناطق وسط القاهرة"
    },
    {
        name: "مستشفى دار الشفاء",
        number: "0225904000",
        category: "health",
        description: "متخصص في أمراض الصدر والجهاز التنفسي"
    },
    {
        name: "مستشفى النزهة الدولي",
        number: "0222617000",
        category: "health",
        description: "من المستشفيات الحديثة بمنطقة النزهة"
    },
    {
        name: "مستشفى مصر الدولي",
        number: "0222618000",
        category: "health",
        description: "يقدم خدمات طبية متكاملة بمعايير دولية"
    },

    // ============= المستشفيات الجامعية =============
    {
        name: "مستشفيات جامعة القاهرة (قصر العيني)",
        number: "0223655000",
        category: "health",
        description: "مجمع مستشفيات تعليمي يضم أحدث الأقسام الطبية"
    },
    {
        name: "مستشفى جامعة عين شمس التخصصي",
        number: "0222843000",
        category: "health",
        description: "يقدم خدمات تشخيصية وعلاجية متقدمة"
    },
    {
        name: "مستشفى جامعة الإسكندرية الرئيسي",
        number: "034870000",
        category: "health",
        description: "أكبر مستشفى تعليمي في الإسكندرية"
    },

    // ============= أرقام المنوفية =============
    {
        name: "شرطة المنوفية - غرفة العمليات",
        number: "0482200222",
        category: "emergency",
        description: "غرفة عمليات شرطة محافظة المنوفية للطوارئ"
    },
    {
        name: "مستشفى شبين الكوم المركزي - الطوارئ",
        number: "0482224000",
        category: "emergency",
        description: "قسم الطوارئ الرئيسي بالمحافظة"
    },
    {
        name: "مستشفى شبين الكوم التعليمي",
        number: "0482235000",
        category: "health",
        description: "أكبر مستشفى تعليمي بالمنوفية - قسم الطوارئ 24 ساعة"
    },
    {
        name: "مستشفى منوف العام",
        number: "0482602000",
        category: "health",
        description: "يخدم مراكز غرب المنوفية"
    },
    {
        name: "مستشفى سرس الليان",
        number: "0482920000",
        category: "health",
        description: "يخدم مناطق شرق المنوفية"
    },
    {
        name: "شركة مياه الشرب بالمنوفية",
        number: "0482223000",
        category: "water",
        description: "لبلاغات أعطال المياه بالمحافظة"
    },
    {
        name: "شركة الكهرباء بالمنوفية",
        number: "0482221000",
        category: "electricity",
        description: "لبلاغات أعطال الكهرباء"
    },
    {
        name: "شركة الغاز بالمنوفية",
        number: "0482225000",
        category: "gas",
        description: "لبلاغات أعطال الغاز الطبيعي"
    },
    {
        name: "محطة قطارات شبين الكوم",
        number: "0482226000",
        category: "transport",
        description: "الاستعلام عن مواعيد القطارات"
    },
    {
        name: "أتوبيس غرب الدلتا - فرع المنوفية",
        number: "0482227000",
        category: "transport",
        description: "مواعيد السفر والنقل الداخلي"
    },
    {
        name: "غرفة شكاوى محافظة المنوفية",
        number: "0482228000",
        category: "complaints",
        description: "لتلقي شكاوى المواطنين ضد الجهات الحكومية"
    },
    {
        name: "الخط الساخن لمحافظ المنوفية",
        number: "16528",
        category: "government",
        description: "للتواصل المباشر مع مكتب المحافظ"
    },

    // ============= أرقام حكومية =============
    {
        name: "الخط الساخن لرئاسة مجلس الوزراء",
        number: "16528",
        category: "government",
        description: "للشكاوى والاستفسارات الحكومية"
    },
    {
        name: "الشكاوى الحكومية",
        number: "16528",
        category: "government",
        description: "للتقدم بشكاوى ضد أي جهة حكومية"
    },
    {
        name: "الخط الساخن للوزارات",
        number: "15508",
        category: "government",
        description: "للتواصل مع مختلف الوزارات"
    },

    // ============= أرقام الخدمات =============
    {
        name: "شركة الكهرباء",
        number: "121",
        category: "electricity",
        description: "لبلاغات أعطال الكهرباء"
    },
    {
        name: "شركة المياه",
        number: "125",
        category: "water",
        description: "لبلاغات أعطال المياه"
    },
    {
        name: "شركة الغاز",
        number: "129",
        category: "gas",
        description: "لبلاغات أعطال الغاز"
    },
    {
        name: "الخط الساخن للاتصالات",
        number: "155",
        category: "services",
        description: "للشكاوى والاستفسارات عن خدمات الاتصالات"
    },
    {
        name: "الخط الساخن للبريد المصري",
        number: "16789",
        category: "services",
        description: "لمتابعة الشحنات البريدية والشكاوى"
    },

    // ============= أرقام الشكاوى =============
    {
        name: "الشكاوى ضد الكهرباء",
        number: "121",
        category: "complaints",
        description: "للشكاوى المتعلقة بخدمات الكهرباء"
    },
    {
        name: "الشكاوى ضد المياه",
        number: "125",
        category: "complaints",
        description: "للشكاوى المتعلقة بخدمات المياه"
    },
    {
        name: "الشكاوى ضد الغاز",
        number: "129",
        category: "complaints",
        description: "للشكاوى المتعلقة بخدمات الغاز"
    },

    // ============= أرقام المواصلات =============
    {
        name: "السكك الحديدية",
        number: "0225753555",
        category: "transport",
        description: "للاستعلام عن مواعيد القطارات"
    },
    {
        name: "مترو الأنفاق",
        number: "0225753555",
        category: "transport",
        description: "للشكاوى والاستفسارات عن مترو الأنفاق"
    },
    {
        name: "النقل العام",
        number: "16516",
        category: "transport",
        description: "للشكاوى والاستفسارات عن وسائل النقل العام"
    }
];

// DOM Elements
const numbersContainer = document.querySelector('.numbers-container');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('numberSearch');
const searchBtn = document.getElementById('searchBtn');

// عرض جميع الأرقام
function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    
    if (numbers.length === 0) {
        numbersContainer.innerHTML = '<p class="no-results">لا توجد نتائج مطابقة للبحث</p>';
        return;
    }
    
    numbers.forEach(number => {
        const numberCard = document.createElement('div');
        numberCard.className = 'number-card';
        numberCard.dataset.category = number.category;
        
        numberCard.innerHTML = `
            <div class="number-header">
                <h3>${number.name}</h3>
                <span class="category-tag ${number.category}">${getCategoryName(number.category)}</span>
            </div>
            <div class="number-body">
                <p class="number">${number.number}</p>
                <p class="description">${number.description}</p>
            </div>
            <div class="number-actions">
                <button class="call-btn" data-number="${number.number}">
                    <i class="fas fa-phone"></i> اتصل
                </button>
                <button class="copy-btn" data-number="${number.number}">
                    <i class="far fa-copy"></i> نسخ
                </button>
            </div>
        `;
        
        numbersContainer.appendChild(numberCard);
    });
    
    // إضافة مستمعي الأحداث لأزرار الاتصال والنسخ
    document.querySelectorAll('.call-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const phoneNumber = btn.dataset.number;
            if (phoneNumber && phoneNumber !== 'غير متوفر') {
                window.open(`tel:${phoneNumber}`);
            }
        });
    });
    
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const phoneNumber = btn.dataset.number;
            if (phoneNumber && phoneNumber !== 'غير متوفر') {
                navigator.clipboard.writeText(phoneNumber);
                alert('تم نسخ الرقم: ' + phoneNumber);
            }
        });
    });
}

// الحصول على اسم الفئة بالعربية
function getCategoryName(category) {
    const categories = {
        'all': 'الكل',
        'emergency': 'طوارئ',
        'health': 'صحة',
        'mental-health': 'صحة نفسية',
        'support': 'دعم نفسي',
        'government': 'حكومي',
        'services': 'خدمات',
        'complaints': 'شكاوى',
        'electricity': 'كهرباء',
        'water': 'مياه',
        'gas': 'غاز',
        'transport': 'مواصلات'
    };
    
    return categories[category] || category;
}

// تصفية الأرقام حسب الفئة
function filterNumbers(category) {
    if (category === 'all') {
        displayNumbers(importantNumbers);
        return;
    }
    
    const filteredNumbers = importantNumbers.filter(number => number.category === category);
    displayNumbers(filteredNumbers);
}

// البحث عن الأرقام
function searchNumbers(query) {
    if (!query) {
        displayNumbers(importantNumbers);
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    
    const results = importantNumbers.filter(number => 
        number.name.toLowerCase().includes(lowerQuery) || 
        number.number.includes(query) ||
        number.description.toLowerCase().includes(lowerQuery)
    );
    
    displayNumbers(results);
}

// تهيئة الصفحة
function init() {
    displayNumbers(importantNumbers);
    
    // إضافة مستمعي الأحداث لأزرار الفئات
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterNumbers(btn.dataset.category);
        });
    });
    
    // إضافة مستمعي الأحداث للبحث
    searchBtn.addEventListener('click', () => {
        searchNumbers(searchInput.value.trim());
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchNumbers(searchInput.value.trim());
        }
    });
    
    // مسح البحث عند النقر على زر الكل
    document.querySelector('.category-btn[data-category="all"]').addEventListener('click', () => {
        searchInput.value = '';
    });
}

// تشغيل التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', init);