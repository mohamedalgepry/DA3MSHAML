// تنشيط الروابط في القائمة
document.addEventListener('DOMContentLoaded', function() {
    // تحديد الصفحة الحالية وتفعيل الرابط المناسب
    const currentPage = location.pathname.split('/').pop().replace('.html', '');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace('.html', '');
        if (linkPage === currentPage || (currentPage === 'index' && linkPage === '')) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // فلترة نماذج الذكاء الاصطناعي
if (document.getElementById('ai-search')) {
    const aiSearch = document.getElementById('ai-search');
    const aiFilter = document.getElementById('ai-filter');
    const aiCategories = document.querySelectorAll('.ai-categories .category');
    
    function filterAIModels() {
        const searchTerm = aiSearch.value.toLowerCase();
        const filterValue = aiFilter.value;
        
        aiCategories.forEach(category => {
            const categoryType = category.getAttribute('data-category');
            const models = category.querySelectorAll('.model-card');
            let hasVisibleModels = false;
            
            models.forEach(model => {
                const modelName = model.querySelector('h4').textContent.toLowerCase();
                const modelDesc = model.querySelector('p').textContent.toLowerCase();
                const matchesSearch = searchTerm === '' || 
                                    modelName.includes(searchTerm) || 
                                    modelDesc.includes(searchTerm);
                const matchesFilter = filterValue === 'all' || categoryType === filterValue;
                
                if (matchesSearch && matchesFilter) {
                    model.style.display = 'block';
                    hasVisibleModels = true;
                } else {
                    model.style.display = 'none';
                }
            });
            
            category.style.display = hasVisibleModels ? 'block' : 'none';
        });
    }
    
    aiSearch.addEventListener('input', filterAIModels);
    aiFilter.addEventListener('change', filterAIModels);
    
    // تطبيق الفلترة عند تحميل الصفحة
    filterAIModels();
}
    
    // فلترة منصات الكورسات (إذا كان القسم موجودًا)
if (document.getElementById('course-search')) {
    const courseSearch = document.getElementById('course-search');
    const courseFilter = document.getElementById('course-filter');
    const categoryFilter = document.getElementById('category-filter');
    const courseCards = document.querySelectorAll('.courses-grid .course-card');
    
    function filterCourses() {
        const searchTerm = courseSearch.value.toLowerCase();
        const filterValue = courseFilter.value;
        const categoryValue = categoryFilter.value;
        
        courseCards.forEach(card => {
            const cardLang = card.getAttribute('data-lang');
            const cardCategory = card.getAttribute('data-category');
            const courseName = card.querySelector('h3').textContent.toLowerCase();
            const courseDesc = card.querySelector('p').textContent.toLowerCase();
            
            const matchesSearch = searchTerm === '' || 
                                courseName.includes(searchTerm) || 
                                courseDesc.includes(searchTerm);
            const matchesFilter = filterValue === 'all' || cardLang === filterValue;
            const matchesCategory = categoryValue === 'all' || cardCategory === categoryValue;
            
            if (matchesSearch && matchesFilter && matchesCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // تفعيل الفلترة عند أي تغيير
    courseSearch.addEventListener('input', filterCourses);
    courseFilter.addEventListener('change', filterCourses);
    categoryFilter.addEventListener('change', filterCourses);
    
    // تطبيق الفلترة عند تحميل الصفحة
    filterCourses();

}
    // نظام تقييم النجوم (إذا كان القسم موجودًا)
    const allStars = document.querySelectorAll('.stars i');
    
    allStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            const starsContainer = this.parentElement;
            const feedback = starsContainer.nextElementSibling.querySelector('span');
            
            // تحديث النجوم
            starsContainer.querySelectorAll('i').forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // تحديث التقييم
            feedback.textContent = rating;
        });
    });
    
    // التمرير السلس عند النقر على الروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إظهار/إخفاء الأقسام عند التمرير
    const sections = document.querySelectorAll('.section');
    
    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // التحقق عند التحميل وعند التمرير
    window.addEventListener('load', checkSections);
    window.addEventListener('scroll', checkSections);
});