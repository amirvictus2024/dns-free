// برای پرچم های سفارشی 
// flagSize: { width: 96, height: 72 }
// customFlag: '/images/custom-sweden.png'
const dnsLocations = [
    {
        id: 'germany',
        name: 'آلمان',
        countryCode: 'de',
        active: true,
        ipv4: ['185.149.213.148', '185.149.213.149'],
        ipv6: ['2a02:c6a0:74cd::1', '2a02:c6a0:74cd::0'],
        ipv4Enabled: true,
        ipv6Enabled: true,
    },
    {
        id: 'sweden',
        name: 'سوئد',
        countryCode: 'se',
        active: true,
        ipv4: ['185.57.168.87', '185.57.168.88'],
        ipv6: ['2001:678:d5c:bb26::1', '2001:678:d5c:bb26::0'],
        ipv4Enabled: true,
        ipv6Enabled: true,
    },
    {
        id: 'netherlands',
        name: 'هلند',
        countryCode: 'nl',
        active: true,
        ipv4: ['145.125.185.206', '145.125.185.207'],
        ipv6: ['2001:611:3b4d::1', '2001:611:3b4d::0'],
        ipv4Enabled: true,
        ipv6Enabled: true,
    },
    {
        id: 'iran',
        name: 'رادار',
        countryCode: 'ir',
        active: true,
        ipv4: ['10.202.10.10', '10.202.10.11'],
        ipv6: ['', ''],
        ipv4Enabled: true,
        ipv6Enabled: false,
    },
    {
        id: 'iran',
        name: 'الکترو',
        countryCode: 'ir',
        active: true,
        ipv4: ['78.157.42.100', '78.157.42.101'],
        ipv6: ['', ''],
        ipv4Enabled: true,
        ipv6Enabled: false
    },
    {
        id: 'ukrain',
        name: 'اوکراین',
        countryCode: 'ua',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false
    },
    {
        id: 'poland',
        name: 'لهستان',
        countryCode: 'pl',
        active: true,
        ipv4: ['194.204.179.99', '80.54.157.76'],
        ipv6: ['2a01:1130:f094::1', '2a01:1130:f094::0'],
        ipv4Enabled: true,
        ipv6Enabled: true
    },
    {
        id: 'usa',
        name: 'آمریکا',
        countryCode: 'us',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false
    },
    {
        id: 'canada',
        name: 'کانادا',
        countryCode: 'ca',
        active: true,
        ipv4: ['142.198.141.253', '72.184.8.174'],
        ipv6: ['2605:b100:116::1:3502:caa4', '2605:b100:116::1:3502:caa5'],
        ipv4Enabled: true,
        ipv6Enabled: true,
        customFlag: './flag/ca.svg'
    },
    {
        id: 'Mexico',
        name: 'مکزیک',
        countryCode: 'mx',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false
    },
    {
        id: 'France',
        name: 'فرانسه',
        countryCode: 'fr',
        active: true,
        ipv4: ['185.231.58.57', '163.114.32.72'],
        ipv6: ['2a01:cb1a:9932:7583::1', '2a01:cb1a:7ee9:4a01::1'],
        ipv4Enabled: true,
        ipv6Enabled: true
    },
    {
        id: 'Cyprus',
        name: 'قبرس',
        countryCode: 'cy',
        active: true,
        ipv4: ['213.7.55.215', '62.228.46.174'],
        ipv6: ['2a00:1358:fe01:dc30::1', '2a00:1358:ab54:2d96::1'],
        ipv4Enabled: true,
        ipv6Enabled: true
    },
    {
        id: 'Turkey',
        name: 'ترکیه',
        countryCode: 'tr',
        active: true,
        ipv4: ['95.0.140.35', '85.96.237.161'],
        ipv6: ['2a01:358:242c::1', '2a01:358:0e35::0'],
        ipv4Enabled: true,
        ipv6Enabled: true
    },
    {
        id: 'UAE',
        name: 'امارات',
        countryCode: '',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false,
        customFlag: './flag/ae.svg'
    },
    {
        id: 'Saudi Arabia',
        name: 'عربستان',
        countryCode: 'sa',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false,
    },
    {
        id: 'Russia',
        name: 'روسیه',
        countryCode: 'ru',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false,
    },
    {
        id: 'italy',
        name: 'ایتالیا',
        countryCode: 'it',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false,
    },
    {
        id: 'Bulgaria',
        name: 'بلغارستان',
        countryCode: 'bg',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false,
    },
    {
        id: 'Egypt',
        name: 'مصر',
        countryCode: 'eg',
        active: false,
        ipv4: ['', ''],
        ipv6: ['', ''],
        ipv4Enabled: false,
        ipv6Enabled: false,
    }
];

// تنظیمات مربوط به وایرگارد
const wireguardConfig = {
    icon: '<img src="wire1.svg" alt="WireGuard">',  // آیکون وایرگارد
    servers: {
        WGserver1: "https://krakenfiles.com/view/xXnqxrrEpt/file.html",  // لینک دانلود کانفیگ
    }
};

// تابع دریافت URL پرچم از سرویس flagcdn
function getFlagUrl(countryCode) {
    return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
}

// تابع ساخت HTML مربوط به پرچم با پشتیبانی از پرچم سفارشی و سایز سفارشی
function getFlagHtml(location) {
    if (location.customFlag) {
        // اگر پرچم سفارشی تعریف شده باشد
        return `
            <img 
                src="${location.customFlag}"
                alt="${location.name} flag"
                ${location.flagSize ? `width="${location.flagSize.width}" height="${location.flagSize.height}"` : ''}
            >
        `;
    } else {
        // استفاده از پرچم پیش‌فرض
        const flagUrl = getFlagUrl(location.countryCode);
        return `
            <img 
                src="${flagUrl}"
                srcset="${flagUrl} 1x,
                        https://flagcdn.com/w320/${location.countryCode}.png 2x"
                alt="${location.name} flag"
                ${location.flagSize ? `width="${location.flagSize.width}" height="${location.flagSize.height}"` : ''}
            >
        `;
    }
}

// تابع ساخت المان DNS با قابلیت کپی کردن
function createDNSEntry(ip, enabled) {
    return `
        <div class="dns-entry ${!enabled ? 'disabled' : ''}" ${enabled ? `onclick="copyToClipboard('${ip}', this)"` : ''}>
            <span>${ip}</span>
            <button class="copy-button" ${!enabled ? 'disabled' : ''}>
                <i class="fas fa-copy"></i>
            </button>
        </div>
    `;
}

// تابع ساخت کارت کامل برای هر لوکیشن
function createDNSCard(location) {
    return `
        <div class="card">
            <div class="card-header">
                <div class="location">
                    <div class="location-icon">${getFlagHtml(location)}</div>
                    <span>${location.name}</span>
                </div>
                <div class="status ${location.active ? 'active' : 'inactive'}">
                    ${location.active ? 'فعال' : 'غیرفعال'}
                </div>
            </div>
            <div class="dns-section">
                <div class="section-title">DNS نسل ۴</div>
                ${location.ipv4.map(ip => createDNSEntry(ip, location.ipv4Enabled)).join('')}
            </div>
            <div class="dns-section">
                <div class="section-title">DNS نسل ۶</div>
                ${location.ipv6.map(ip => createDNSEntry(ip, location.ipv6Enabled)).join('')}
            </div>
        </div>
    `;
}

// تابع ساخت کارت وایرگارد
function createWireGuardCard() {
    return `
        <div class="card wireguard-card">
            <div class="card-header">
                <div class="location">
                    <div class="location-icon">${wireguardConfig.icon}</div>
                    <span>کانفیگ وایرگارد</span>
                </div>
            </div>
            <select id="serverSelect">
                <option value="">انتخاب سرور</option>
                ${Object.entries(wireguardConfig.servers).map(([server, url]) =>
        `<option value="${server}">${server}</option>`
    ).join('')}
            </select>
            <button class="download-btn" onclick="downloadConfig()">
                <i class="fas fa-download"></i>
                <span>دانلود کانفیگ</span>
            </button>
        </div>
    `;
}

// تابع کپی کردن متن در کلیپ‌بورد با نمایش انیمیشن
async function copyToClipboard(text, element) {
    if (element.classList.contains('disabled')) return;

    try {
        await navigator.clipboard.writeText(text);
        const button = element.querySelector('.copy-button i');
        button.classList.replace('fa-copy', 'fa-check');  // تغییر آیکون به تیک
        button.style.color = '#4CAF50';  // تغییر رنگ به سبز

        showToast();  // نمایش پیام موفقیت

        // برگرداندن آیکون به حالت اول بعد از 2 ثانیه
        setTimeout(() => {
            button.classList.replace('fa-check', 'fa-copy');
            button.style.color = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

// تابع نمایش پیام موفقیت
function showToast() {
    const toast = document.querySelector('.toast');
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}

// تابع دانلود کانفیگ وایرگارد
function downloadConfig() {
    const select = document.getElementById('serverSelect');
    const selectedServer = select.value;

    if (!selectedServer) {
        alert('لطفا یک سرور را انتخاب کنید');
        return;
    }

    const configUrl = wireguardConfig.servers[selectedServer];
    const link = document.createElement('a');
    link.href = configUrl;
    link.download = `wireguard-${selectedServer}.conf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// تابع اصلی برای رندر کردن کل برنامه
function renderApp() {
    const app = document.getElementById('app');
    const content = [
        createWireGuardCard(),  // ابتدا کارت وایرگارد
        ...dnsLocations.map(createDNSCard)  // سپس کارت‌های DNS
    ].join('');

    app.innerHTML = content;
}

// ویژگی‌های امنیتی

// غیرفعال کردن منوی راست کلیک
document.addEventListener("contextmenu", (event) => event.preventDefault());

// غیرفعال کردن کلیدهای میانبر مربوط به DevTools
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
    }
});

// جلوگیری از باز کردن DevTools
(function blockDevTools() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            window.location.reload();
        }
    });
    console.log('%c', element);
})();
// تابع جدید برای صفحه‌بندی
function createPagination(locations, cardsPerPage = 6) {
    const totalLocations = locations.length;
    const totalPages = Math.ceil(totalLocations / cardsPerPage);

    return {
        getTotalPages: () => totalPages,
        getPageLocations: (pageNumber) => {
            const startIndex = (pageNumber - 1) * cardsPerPage;
            const endIndex = startIndex + cardsPerPage;
            return locations.slice(startIndex, endIndex);
        }
    };
}

// متغیر برای نگهداری صفحه فعلی
let currentPage = 1;

// تابع رندر صفحه‌بندی
function renderPaginatedApp() {
    const app = document.getElementById('app');
    const pagination = createPagination([
        { type: 'ipchecker' },
        { type: 'wireguard' },
        ...dnsLocations
    ]);

    const pageLocations = pagination.getPageLocations(currentPage);

    const content = pageLocations.map(location => {
        if (location.type === 'ipchecker') return createIPCheckerCard();
        if (location.type === 'wireguard') return createWireGuardCard();
        return createDNSCard(location);
    }).join('');

    // اضافه کردن کنترل صفحه‌بندی
    const paginationControls = `
            <div class="pagination-controls">
                <button onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-right"></i> قبلی
                </button>
                <span>صفحه ${currentPage} از ${pagination.getTotalPages()}</span>
                <button onclick="changePage(1)" ${currentPage === pagination.getTotalPages() ? 'disabled' : ''}>
                    بعدی <i class="fas fa-chevron-left"></i>
                </button>
            </div>
        `;

    // رندر محتوا
    app.innerHTML = content + paginationControls;
}

// تابع تغییر صفحه
function changePage(direction) {
    const pagination = createPagination([
        ...dnsLocations.filter(loc => loc.active),
        ...dnsLocations.filter(loc => !loc.active)
    ]);

    // محاسبه صفحه جدید
    currentPage = Math.max(1, Math.min(
        currentPage + direction,
        pagination.getTotalPages()
    ));

    // رندر مجدد
    renderPaginatedApp();
}

// اضافه کردن استایل‌های صفحه‌بندی
const paginationStyles = `
    .pagination-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin-top: 20px;
        direction: rtl;
    }

    .pagination-controls button {
        background: rgba(30, 30, 30, 0.6);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .pagination-controls button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination-controls button:not(:disabled):hover {
        background: rgba(50, 50, 50, 0.7);
    }

    .pagination-controls span {
        color: white;
        font-weight: bold;
    }
    `;

// اضافه کردن استایل‌های صفحه‌بندی
const paginationStyleSheet = document.createElement("style");
paginationStyleSheet.textContent = paginationStyles;
document.head.appendChild(paginationStyleSheet);

// تغییر renderApp به renderPaginatedApp
renderPaginatedApp();
// ... تمام کدهای قبلی ...

// تابع جدید برای ساخت کارت بررسی IP
function createIPCheckerCard() {
    return `
        <div class="card ip-checker-card">
            <div class="card-header">
                <div class="location">
                    <div class="location-icon">
                        <i class="fas fa-search-location"></i>
                    </div>
                    <span>بررسی موقعیت IP</span>
                </div>
            </div>
            <div class="ip-input-section">
                <input type="text" id="ipInput" placeholder="آدرس IP را وارد کنید..." class="ip-input">
                <button onclick="checkIPLocation()" class="check-btn">
                    <i class="fas fa-search"></i>
                    <span>بررسی</span>
                </button>
            </div>
            <div id="ipResult" class="ip-result">
                <!-- نتایج اینجا نمایش داده خواهد شد -->
            </div>
        </div>
    `;
}

// تابع بررسی موقعیت IP
async function checkIPLocation() {
    const ipInput = document.getElementById('ipInput');
    const resultDiv = document.getElementById('ipResult');
    const ip = ipInput.value.trim();

    // اعتبارسنجی IP
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ip)) {
        resultDiv.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                لطفا یک IP معتبر وارد کنید
            </div>
        `;
        return;
    }

    try {
        // نمایش حالت لودینگ
        resultDiv.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i>
                در حال دریافت اطلاعات...
            </div>
        `;

        const response = await fetch(`https://api.iplocation.net/?ip=${ip}`);
        const data = await response.json();

        // نمایش نتایج
        resultDiv.innerHTML = `
            <div class="ip-info">
                <div class="info-row">
                    <span class="info-label">کشور:</span>
                    <span class="info-value">${data.country_name || 'نامشخص'}</span>
                    ${data.country_code ? `<img src="https://flagcdn.com/w20/${data.country_code.toLowerCase()}.png" alt="${data.country_name}" class="mini-flag">` : ''}
                </div>
                <div class="info-row">
                    <span class="info-label">ISP:</span>
                    <span class="info-value">${data.isp || 'نامشخص'}</span>
                </div>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                خطا در دریافت اطلاعات
            </div>
        `;
        console.error('Error fetching IP location:', error);
    }
}

// اضافه کردن استایل‌های جدید
const newStyles = `
.ip-checker-card {
margin-bottom: 20px;
background: rgba(20, 20, 20, 0.4);
border-radius: 20px;
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
padding: 20px;
overflow: hidden;
}

.ip-input-section {
display: flex;
align-items: center;
gap: 15px;
margin-bottom: 15px;
flex-wrap: wrap;
}

.ip-input {
flex: 1;
height: 45px;
padding: 0 15px;
background: rgba(30, 30, 30, 0.6);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 8px;
font-size: 14px;
direction: ltr;
color: white;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.check-btn {
height: 45px;
padding: 0 25px;
background: linear-gradient(45deg, #0D47A1, #1565C0);
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
font-size: 14px;
font-weight: 500;
white-space: nowrap;
box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
transition: all 0.3s ease;
}

.check-btn:hover {
background: linear-gradient(45deg, #1565C0, #1976D2);
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
}

.ip-result {
background: rgba(30, 30, 30, 0.6);
border-radius: 12px;
padding: 15px;
color: white;
text-align: left;
line-height: 1.6;
word-break: break-word;
}

.ip-info {
border-radius: 8px;
padding: 15px;
color: white;
background: rgba(255, 255, 255, 0.1);
}

.info-row {
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
gap: 10px;
flex-wrap: wrap;
direction: rtl; /* متن‌ها راست‌چین بشن */
}

.info-label {
font-weight: 500;
min-width: 120px;
color: rgba(255, 255, 255, 0.9);
white-space: nowrap;
text-align: right; /* برچسب‌ها سمت راست باشن */
flex: 1;
}

.info-value {
color: rgba(255, 255, 255, 0.8);
flex: 2;
text-align: left; /* مقدار سمت چپ بمونه */
word-break: break-word;
}


.loading {
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
color: rgba(255, 255, 255, 0.7);
padding: 15px;
}

.error-message {
color: #ff4d4d;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
background: rgba(220, 53, 69, 0.1);
padding: 12px;
border-radius: 8px;
margin-top: 10px;
text-align: center;
font-weight: 500;
}

`;

// اضافه کردن استایل‌ها به صفحه
const styleSheet = document.createElement("style");
styleSheet.textContent = newStyles;
document.head.appendChild(styleSheet);

// به‌روزرسانی تابع renderApp
function renderApp() {
    const app = document.getElementById('app');
    const content = [
        createIPCheckerCard(),    // اضافه کردن کارت بررسی IP
        createWireGuardCard(),    // کارت وایرگارد
        ...dnsLocations.map(createDNSCard)  // کارت‌های DNS
    ].join('');

    app.innerHTML = content;
}