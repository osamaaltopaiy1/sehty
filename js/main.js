// بيانات تجريبية للاستعلام
const mockData = {
    // الشخص الأول
    '12345678': {
        serviceCode: 'GSL12345',
        name: 'وهاج ياسر عبدالله باخشوين',
        issueDate: '16-10-2024',
        startDate: '16-10-2024',
        endDate: '16-10-2024',
        duration: 1,
        doctorName: 'حسن الشريف',
        doctorTitle: 'طبيب باطنية'
    },
    // الشخص الثاني
    '2233445566': {
        serviceCode: 'M23456',
        name: 'سارة محمد أحمد العمري',
        issueDate: '15-10-2024',
        startDate: '15-10-2024',
        endDate: '17-10-2024',
        duration: 3,
        doctorName: 'فاطمة السيد',
        doctorTitle: 'طبيب أطفال'
    },
    // الشخص الثالث
    '3344556677': {
        serviceCode: 'M34567',
        name: 'عبدالله خالد سعيد الغامدي',
        issueDate: '14-10-2024',
        startDate: '18-10-2024',
        endDate: '20-10-2024',
        duration: 3,
        doctorName: 'محمد العتيبي',
        doctorTitle: 'طبيب عظام'
    }





































};

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    
    // دالة البحث
    function searchPatient() {
        const nationalId = document.getElementById('nationalId').value;
        const serviceCode = document.getElementById('serviceCode').value;
        const resultSection = document.getElementById('resultSection');
        const resultContent = document.getElementById('resultContent');
        
        // البحث في البيانات التجريبية
        const patient = mockData[nationalId];
        
        // إخفاء النتائج السابقة بتأثير انتقالي
        resultSection.classList.remove('show');
        
        setTimeout(() => {
            if (patient && patient.serviceCode === serviceCode) {
                // عرض البيانات
                resultContent.innerHTML = `
                    <div class="patient-info">
                        <div class="info-item">
                            <div class="label">الاسم:</div>
                            <div class="value">${patient.name}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">تاريخ إصدار تقرير الإجازة:</div>
                            <div class="value">${patient.issueDate}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">تبدأ من:</div>
                            <div class="value">${patient.startDate}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">حتى:</div>
                            <div class="value">${patient.endDate}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">مدة الإجازة:</div>
                            <div class="value">${patient.duration} يوم</div>
                        </div>
                        <div class="info-item">
                            <div class="label">اسم الطبيب:</div>
                            <div class="value">${patient.doctorName}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">المسمى الوظيفي:</div>
                            <div class="value">${patient.doctorTitle}</div>
                        </div>
                    </div>
                `;
            } else {
                // عرض رسالة خطأ
                resultContent.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-circle"></i>
                        عذراً، لم يتم العثور على بيانات مطابقة. يرجى التحقق من المعلومات المدخلة.
                    </div>
                `;
            }
            
            // إظهار النتائج بتأثير انتقالي
            resultSection.style.display = 'block';
            setTimeout(() => {
                resultSection.classList.add('show');
            }, 50);
        }, 300);
    }
    
    // دالة إعادة التعيين
    function resetForm() {
        const resultSection = document.getElementById('resultSection');
        document.getElementById('nationalId').value = '';
        document.getElementById('serviceCode').value = '';
        
        // إخفاء النتائج بتأثير انتقالي
        resultSection.classList.remove('show');
        setTimeout(() => {
            resultSection.style.display = 'none';
        }, 500);
    }
    
    // إضافة مستمعي الأحداث
    searchButton.addEventListener('click', searchPatient);
    resetButton.addEventListener('click', resetForm);
});
