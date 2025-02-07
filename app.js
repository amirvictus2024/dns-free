"use strict";

const App = (() => {
    // کَش کردن المان‌های DOM اصلی
    const appContainer = document.getElementById('app');
    const toastElement = document.querySelector('.toast');

    // وضعیت فعلی برنامه
    let currentPage = 1;

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
            active: true,
            ipv4: ['11.0.142.190', '21.150.97.167'],
            ipv6: ['2a13:fc01:db76:15ad::1', '2a13:fc01:db76:15ad::0'],
            ipv4Enabled: true,
            ipv6Enabled: true
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
            active: true,
            ipv4: ['51.211.114.23', '2.91.54.185'],
            ipv6: ['2001:16a2:cb13:4050:58d9::1', '2001:16a2:cb13:4050:58d9::0'],
            ipv4Enabled: true,
            ipv6Enabled: true,
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
            active: true,
            ipv4: ['156.210.239.17', '41.36.139.196'],
            ipv6: ['2a0e:4200:3bbd:6b:1', '2a0e:4200:496c:6298:1'],
            ipv4Enabled: true,
            ipv6Enabled: true
        },
        {
            id: 'Turkey 2',
            name: 'ترکیه 2',
            countryCode: 'tr',
            active: true,
            ipv4: ['78.187.161.254', '88.227.36.76'],
            ipv6: ['2a00:1d32:420:d4a7::1', '2a00:1d32:420:d4a7::0'],
            ipv4Enabled: true,
            ipv6Enabled: true
        },
        {
            id: 'Albania',
            name: 'آلبانی',
            countryCode: 'al',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'iraq',
            name: 'عراق',
            countryCode: 'iq',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'oman',
            name: 'عمان',
            countryCode: 'om',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'india',
            name: 'هند',
            countryCode: 'in',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'japan',
            name: 'ژاپن',
            countryCode: 'jp',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'UK',
            name: 'انگلیس',
            countryCode: 'gb',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'Finland',
            name: 'فنلاند',
            countryCode: 'fi',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'Norway',
            name: 'نروژ',
            countryCode: 'no',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'Luxembourg',
            name: 'لوکزامبورگ',
            countryCode: 'lu',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false
        },
        {
            id: 'Georgia',
            name: 'گرجستان',
            countryCode: 'ge',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Macau',
            name: 'ماکائو',
            countryCode: 'mo',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Azerbaijan',
            name: 'آذربایجان',
            countryCode: 'az',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Colombia',
            name: 'کلمبیا',
            countryCode: 'co',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'qatar',
            name: 'قطر',
            countryCode: 'qa',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
            customFlag: './flag/qa.svg'
        },
        {
            id: 'lebonan',
            name: 'لبنان',
            countryCode: 'lb',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Hungray',
            name: 'مجارستان',
            countryCode: 'hu',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Grecce',
            name: 'یونان',
            countryCode: 'gr',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Austria',
            name: 'اتریش',
            countryCode: 'at',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'Armania',
            name: 'ارمنستان',
            countryCode: 'am',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
        {
            id: 'spain',
            name: 'اسپانیا',
            countryCode: 'es',
            active: false,
            ipv4: ['', ''],
            ipv6: ['', ''],
            ipv4Enabled: false,
            ipv6Enabled: false,
        },
    ];

    const wireguardConfig = {
        icon: '<img src="wire1.svg" alt="WireGuard">',
        servers: {
            WGserver1: "https://drive.google.com/uc?export=download&id=1VeKdjgBqxxphnzPk7_Ee34igdHGiDUj4",
            WGserver2: "https://drive.google.com/uc?export=download&id=1OMT3mqE8i4z6yKW4m8iLN2TqwvaodqLE",
            WGserver3: "https://drive.google.com/uc?export=download&id=1hBJbj96aXDilkqMmO1_qZUNleo7z4UoC",
        }
    };

    // توابع کمکی
    const getFlagUrl = (countryCode) => `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;

    const getFlagHtml = (location) => {
        if (location.customFlag) {
            const dimensions = location.flagSize ? `width="${location.flagSize.width}" height="${location.flagSize.height}"` : '';
            return `<img src="${location.customFlag}" alt="${location.name} flag" ${dimensions}>`;
        } else {
            const flagUrl = getFlagUrl(location.countryCode);
            const dimensions = location.flagSize ? `width="${location.flagSize.width}" height="${location.flagSize.height}"` : '';
            return `<img src="${flagUrl}" alt="${location.name} flag" ${dimensions}>`;
        }
    };

    // ساخت یک ورودی DNS (بدون استفاده از رویداد inline)
    const createDNSEntry = (ip, enabled) => {
        return `
      <div class="dns-entry ${!enabled ? 'disabled' : ''}" data-ip="${ip}" data-enabled="${enabled}">
        <span>${ip}</span>
        <button class="copy-button" ${!enabled ? 'disabled' : ''}>
          <i class="fas fa-copy"></i>
        </button>
      </div>
    `;
    };

    // ساخت کارت DNS
    const createDNSCard = (location) => {
        return `
      <div class="card dns-card" data-id="${location.id}">
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
    };

    // ساخت کارت وایرگارد (بخش دانلود لینک حذف شده)
    const createWireGuardCard = () => {
        const serverOptions = Object.entries(wireguardConfig.servers)
            .map(([server, url]) => `<option value="${server}">${server}</option>`)
            .join('');
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
          ${serverOptions}
        </select>
      </div>
    `;
    };

    // ساخت کارت بررسی IP
    const createIPCheckerCard = () => {
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
          <button id="checkBtn" class="check-btn">
            <i class="fas fa-search"></i>
            <span>بررسی</span>
          </button>
        </div>
        <div id="ipResult" class="ip-result"></div>
      </div>
    `;
    };

    // توابع صفحه‌بندی
    const createPaginationData = (cards, cardsPerPage = 6) => {
        const totalCards = cards.length;
        const totalPages = Math.ceil(totalCards / cardsPerPage);
        return {
            totalPages,
            getPageCards: (pageNumber) => {
                const startIndex = (pageNumber - 1) * cardsPerPage;
                return cards.slice(startIndex, startIndex + cardsPerPage);
            }
        };
    };

    const calculateVisiblePages = (currentPage, totalPages, maxVisiblePages = 5) => {
        let pages = [];
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 2) {
                pages = [1, 2, 3, '...', totalPages];
            } else if (currentPage >= totalPages - 1) {
                pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }
        return pages;
    };

    const generatePageNumbersHTML = (currentPage, totalPages) => {
        const pages = calculateVisiblePages(currentPage, totalPages);
        return pages.map(page => {
            if (page === '...') {
                return `<span class="page-dots">...</span>`;
            }
            return `<button class="page-number ${currentPage === page ? 'active' : ''}" data-page="${page}">${page}</button>`;
        }).join('');
    };

    const generateAllCards = () => {
        // آرایه شامل کارت‌های بررسی IP، وایرگارد و سپس کارت‌های DNS (فعال و غیر فعال)
        return [
            { type: 'ipchecker' },
            { type: 'wireguard' },
            ...dnsLocations.filter(loc => loc.active),
            ...dnsLocations.filter(loc => !loc.active)
        ];
    };

    // تابع رندر کردن برنامه به همراه صفحه‌بندی
    const renderApp = () => {
        const allCards = generateAllCards();
        const pagination = createPaginationData(allCards);
        const pageCards = pagination.getPageCards(currentPage);
        const contentHTML = pageCards.map(card => {
            switch (card.type) {
                case 'ipchecker':
                    return createIPCheckerCard();
                case 'wireguard':
                    return createWireGuardCard();
                default:
                    return createDNSCard(card);
            }
        }).join('');

        const paginationHTML = `
      <div class="pagination-controls">
        <button class="nav-button" id="prevPage" ${currentPage === 1 ? 'disabled' : ''}>
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="pagination-numbers">
          ${generatePageNumbersHTML(currentPage, pagination.totalPages)}
        </div>
        <button class="nav-button" id="nextPage" ${currentPage === pagination.totalPages ? 'disabled' : ''}>
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>
    `;

        appContainer.innerHTML = contentHTML + paginationHTML;
        attachEventListeners();
    };

    // نمایش پیام موفقیت (Toast)
    const showToast = () => {
        toastElement.style.display = 'block';
        setTimeout(() => {
            toastElement.style.display = 'none';
        }, 2000);
    };

    // کپی کردن متن به کلیپ‌بورد
    const copyToClipboard = async (text, targetElement) => {
        if (targetElement.classList.contains('disabled')) return;
        try {
            await navigator.clipboard.writeText(text);
            const iconElement = targetElement.querySelector('.copy-button i');
            if (iconElement) {
                iconElement.classList.replace('fa-copy', 'fa-check');
                iconElement.style.color = '#4CAF50';
                showToast();
                setTimeout(() => {
                    iconElement.classList.replace('fa-check', 'fa-copy');
                    iconElement.style.color = '';
                }, 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // بررسی موقعیت IP
    const checkIPLocation = async () => {
        const ipInput = document.getElementById('ipInput');
        const ipResult = document.getElementById('ipResult');
        if (!ipInput) return;
        const ip = ipInput.value.trim();
        // اعتبارسنجی ساده IPv4 (برای پشتیبانی از IPv6 می‌توانید الگوی جامع‌تری استفاده کنید)
        const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipRegex.test(ip)) {
            ipResult.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i> لطفا یک IP معتبر وارد کنید</div>`;
            return;
        }
        ipResult.innerHTML = `<div class="loading"><i class="fas fa-spinner fa-spin"></i> در حال دریافت اطلاعات...</div>`;
        try {
            const response = await fetch(`https://api.iplocation.net/?ip=${ip}`);
            const data = await response.json();
            ipResult.innerHTML = `
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
            ipResult.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i> خطا در دریافت اطلاعات</div>`;
            console.error('Error fetching IP location:', error);
        }
    };

    // افزودن event listenerها به المان‌های داینامیک
    const attachEventListeners = () => {
        // رویداد کپی برای المان‌های DNS
        appContainer.querySelectorAll('.dns-entry').forEach(entry => {
            if (entry.dataset.enabled === "true") {
                entry.addEventListener('click', () => {
                    const ip = entry.getAttribute('data-ip');
                    copyToClipboard(ip, entry);
                });
            }
        });

        // رویداد بررسی IP
        const checkBtn = document.getElementById('checkBtn');
        if (checkBtn) {
            checkBtn.addEventListener('click', checkIPLocation);
        }

        // رویدادهای صفحه‌بندی
        const prevBtn = document.getElementById('prevPage');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderApp();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
        const nextBtn = document.getElementById('nextPage');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const totalPages = createPaginationData(generateAllCards()).totalPages;
                if (currentPage < totalPages) {
                    currentPage++;
                    renderApp();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        // رویداد کلیک بر روی شماره‌های صفحه
        appContainer.querySelectorAll('.page-number').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.getAttribute('data-page'), 10);
                if (page && page !== currentPage) {
                    currentPage = page;
                    renderApp();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    };

    // تابع اولیه برای راه‌اندازی برنامه
    const init = () => {
        // جلوگیری از منوی راست‌کلیک
        document.addEventListener('contextmenu', e => e.preventDefault());
        // جلوگیری از کلیدهای میانبر مربوط به DevTools
        document.addEventListener('keydown', (e) => {
            if (e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
                (e.ctrlKey && e.key === "U")) {
                e.preventDefault();
            }
        });
        renderApp();
    };

    return { init };
})();

// راه‌اندازی برنامه پس از بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', App.init);
