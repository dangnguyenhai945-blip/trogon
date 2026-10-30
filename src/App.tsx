import { useState, type FormEvent } from "react"

function Icon({
  name,
  size = 22,
  className = "",
}: {
  name: string
  size?: number
  className?: string
}) {
  const paths: Record<string, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
        <path d="M9 21v-8h6v8" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    rooms: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h1m4 0h1M9 11h1m4 0h1m-5 10v-6h4v6" />
      </>
    ),
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7Z" />,
    receipt: (
      <>
        <path d="M5 3h14v18l-3-2-4 2-4-2-3 2Z" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="6" width="18" height="15" rx="3" />
        <path d="M3 8V5a2 2 0 0 1 2-2h12v3m4 6h-6v5h6m-3-2.5h.01" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
    chart: (
      <>
        <path d="M4 3v17h17M8 15l4-5 4 2 5-7" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-4a6 6 0 0 1 12 0v4m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="m9 3-1 3-3 1-2 5 2 5 3 1 1 3h6l1-3 3-1 2-5-2-5-3-1-1-3Z" />
      </>
    ),
    gift: (
      <>
        <path d="M3 8h18v5H3Zm2 5v8h14v-8M12 8v13" />
        <path d="M12 8C2 8 6-1 10 4l2 4c10 0 6-9 2-4Z" />
      </>
    ),
    star: <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.home}
    </svg>
  )
}

function Logo({
  light = false,
  small = false,
}: {
  light?: boolean
  small?: boolean
}) {
  return (
    <a
      href="#"
      className={`logo ${light ? "logo-light" : ""} ${
        small ? "logo-small" : ""
      }`}
      aria-label="TrọGọn — Trang chủ"
    >
      <span className="logo-mark">
        <Icon name="home" size={small ? 18 : 23} />
      </span>
      <span>
        Trọ<span className="logo-accent">Gọn</span>
        <span className="logo-dot">.</span>
      </span>
    </a>
  )
}

const features = [
  {
    icon: "rooms",
    tag: "LẤP ĐẦY PHÒNG TRỐNG",
    title: "Phòng trống có khách.\nKhông phải chờ lâu.",
    description:
      "Kết nối ngay người tìm thuê trong khu vực. Quản lý tin đăng, yêu cầu thuê và lịch xem phòng ở một nơi.",
    color: "green",
    detail: "Đúng người thuê, đúng thời điểm",
  },
  {
    icon: "bolt",
    tag: "CHỐT ĐIỆN NƯỚC",
    title: "Chốt số thật nhanh.\nKhông lo sai lệch.",
    description:
      "Nhập chỉ số ngay trên điện thoại, đính kèm ảnh đồng hồ và nhận cảnh báo khi có chỉ số bất thường.",
    color: "orange",
    detail: "Minh bạch từng con số",
  },
  {
    icon: "receipt",
    tag: "HÓA ĐƠN & VIETQR",
    title: "Một chạm xuất hóa đơn.\nMột quét là thanh toán.",
    description:
      "Tự động tính tiền phòng, điện nước và tạo VietQR đúng số tiền. Gửi hóa đơn cho người thuê chỉ trong tích tắc.",
    color: "blue",
    detail: "Ít thao tác, thêm thời gian",
  },
  {
    icon: "wallet",
    tag: "THU TIỀN & CÔNG NỢ",
    title: "Tiền về rõ ràng.\nCông nợ gọn gàng.",
    description:
      "Theo dõi khoản thu và công nợ trực quan. Gạch nợ theo tiền thực nhận, không bỏ sót hay nhầm lẫn.",
    color: "purple",
    detail: "An tâm quản lý dòng tiền",
  },
]

function Dashboard() {
  return (
    <div
      className="product-scene"
      aria-label="Minh họa giao diện quản lý TrọGọn"
    >
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <div className="dashboard">
        <aside className="dash-sidebar">
          <Logo small />
          <div className="property">
            <span className="property-icon">
              <Icon name="rooms" size={17} />
            </span>
            <div>
              Dãy trọ An Nhiên<small>24 phòng · Thủ Đức</small>
            </div>
            <Icon name="chevron" size={14} />
          </div>
          <span className="sidebar-label">QUẢN LÝ</span>
          {[
            ["chart", "Tổng quan"],
            ["rooms", "Phòng trọ"],
            ["people", "Người thuê"],
            ["bolt", "Điện nước"],
            ["receipt", "Hóa đơn"],
            ["wallet", "Thu tiền & Công nợ"],
          ].map(([icon, text], i) => (
            <div key={text} className={`side-link ${i === 0 ? "active" : ""}`}>
              <Icon name={icon} size={16} />
              {text}
            </div>
          ))}
          <div className="sidebar-bottom">
            <Icon name="settings" size={15} /> Cài đặt
          </div>
        </aside>
        <div className="dash-main">
          <div className="dash-top">
            <span>Tổng quan</span>
            <div>
              <Icon name="bell" size={17} />
              <span className="user-avatar">A</span>
            </div>
          </div>
          <div className="dash-body">
            <div className="dash-greeting">
              <div>
                <h3>
                  Chào buổi sáng, anh An{" "}
                  <span className="sun-symbol">
                    <Icon name="spark" size={13} />
                  </span>
                </h3>
                <p>Mọi thứ đang được quản lý thật gọn gàng.</p>
              </div>
              <span className="month">
                Tháng 06, 2026 <Icon name="chevron" size={12} />
              </span>
            </div>
            <div className="stat-grid">
              <div className="stat">
                <span>
                  Doanh thu tháng này <Icon name="wallet" size={13} />
                </span>
                <strong>
                  68.500.000 <small>đ</small>
                </strong>
                <em>
                  ↗ 12,8% <b>so với tháng trước</b>
                </em>
              </div>
              <div className="stat">
                <span>
                  Phòng đang cho thuê <Icon name="rooms" size={13} />
                </span>
                <strong>
                  22<small> / 24 phòng</small>
                </strong>
                <em>
                  91,7% <b>tỷ lệ lấp đầy</b>
                </em>
              </div>
              <div className="stat">
                <span>
                  Chờ thanh toán <Icon name="clock" size={13} />
                </span>
                <strong>
                  4.200.000 <small>đ</small>
                </strong>
                <em className="orange-text">
                  <b>Còn 2 hóa đơn chưa thu</b>
                </em>
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-heading">
                <strong>Tổng quan thu chi</strong>
                <span>
                  <i /> Thu nhập <i className="muted-dot" /> Chi phí
                </span>
              </div>
              <div className="chart-area">
                <div className="chart-axis">
                  <span>80tr</span>
                  <span>60tr</span>
                  <span>40tr</span>
                  <span>20tr</span>
                </div>
                <div className="bars">
                  {[48, 63, 54, 76, 66, 88].map((height, i) => (
                    <div className="bar-group" key={i}>
                      <div className="bar-pair">
                        <div
                          className="bar revenue"
                          style={{ height: `${height}%` }}
                        />
                        <div
                          className="bar expense"
                          style={{ height: `${height * 0.34}%` }}
                        />
                      </div>
                      <span>Tháng {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="recent-heading">
              <strong>Hóa đơn gần đây</strong>
              <span>Xem tất cả →</span>
            </div>
            <div className="mini-table">
              <div>
                <span>Phòng</span>
                <span>Người thuê</span>
                <span>Số tiền</span>
                <span>Trạng thái</span>
              </div>
              <div>
                <strong>P.101</strong>
                <span>Nguyễn Minh Anh</span>
                <strong>3.450.000đ</strong>
                <span className="paid">Đã thanh toán</span>
              </div>
              <div>
                <strong>P.102</strong>
                <span>Trần Hoàng Nam</span>
                <strong>3.250.000đ</strong>
                <span className="pending">Chờ thanh toán</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-notice">
        <span className="notice-icon">
          <Icon name="check" size={19} />
        </span>
        <div>
          <strong>Bạn vừa nhận được thanh toán!</strong>
          <p>
            Phòng 101 <span>+3.450.000đ</span>
          </p>
        </div>
        <span className="notice-time">Vừa xong</span>
      </div>
      <div className="invoice">
        <div className="invoice-head">
          <span className="tiny-logo">
            <Icon name="home" size={13} />
            TrọGọn
          </span>
          <span>HÓA ĐƠN TIỀN PHÒNG</span>
        </div>
        <span className="invoice-room">Phòng 101 · Tháng 06/2026</span>
        <strong className="invoice-total">
          3.450.000<span>đ</span>
        </strong>
        <div className="qr-code" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <defs>
              <pattern
                id="qr"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0h5v5H0zm7 0h4v10H7zm-7 7h5v4H0zm7 5h7v2H7"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#qr)" />
            {[
              [0, 0],
              [70, 0],
              [0, 70],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <rect x={x} y={y} width="30" height="30" fill="white" />
                <rect
                  x={x + 2}
                  y={y + 2}
                  width="26"
                  height="26"
                  fill="currentColor"
                />
                <rect x={x + 6} y={y + 6} width="18" height="18" fill="white" />
                <rect
                  x={x + 10}
                  y={y + 10}
                  width="10"
                  height="10"
                  fill="currentColor"
                />
              </g>
            ))}
          </svg>
          <span>
            <Icon name="home" size={15} />
          </span>
        </div>
        <div className="vietqr">
          Viet<span>QR</span>
          <span className="qr-bank">NAPAS 247</span>
        </div>
        <p>Quét mã. Thanh toán. Thật gọn.</p>
        <div className="invoice-footer">
          <Icon name="shield" size={12} />
          Thông tin minh họa sản phẩm
        </div>
      </div>
      <div className="scene-caption">
        <span className="live-dot" /> Một nền tảng. Mọi thứ trong tầm tay.
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    const form = event.currentTarget
    const data = new FormData(form)

    const FORM_ID = "1FAIpQLSffoPta3kW_FhF9bzf8UxvAo8kKsjLcRBTdaEfzrHzAZp-pbA"

    // Dùng hidden iframe để tránh CORS hoàn toàn
    const iframe = document.createElement("iframe")
    iframe.name = "hidden-gform-target"
    iframe.style.display = "none"
    document.body.appendChild(iframe)

    const hiddenForm = document.createElement("form")
    hiddenForm.action = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`
    hiddenForm.method = "POST"
    hiddenForm.target = "hidden-gform-target"

    const fields: Record<string, string> = {
      "entry.872957351": (data.get("fullName") as string) ?? "",
      "entry.1896787650": (data.get("phone") as string) ?? "",
      "entry.1087105294": (data.get("email") as string) ?? "",
      "entry.61568495": (data.get("rooms") as string) ?? "",
    }

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = name
      input.value = value
      hiddenForm.appendChild(input)
    })

    document.body.appendChild(hiddenForm)
    hiddenForm.submit()

    setTimeout(() => {
      document.body.removeChild(hiddenForm)
      document.body.removeChild(iframe)
    }, 3000)

    setSubmitting(false)
    setSubmitted(true)
  }
  const faqs = [
    [
      "TrọGọn phù hợp với quy mô nhà trọ nào?",
      "Dù bạn quản lý dưới 5 phòng hay nhiều dãy trọ, TrọGọn giúp tập trung thông tin phòng, người thuê và hóa đơn vào một nơi, để việc quản lý luôn đơn giản.",
    ],
    [
      "Đăng ký sớm có cần thanh toán trước không?",
      "Không. Đăng ký trải nghiệm sớm hoàn toàn miễn phí và không yêu cầu thông tin thẻ ngân hàng.",
    ],
    [
      "Tôi không rành công nghệ, có sử dụng được không?",
      "TrọGọn được thiết kế đơn giản, dễ thao tác trên điện thoại. Chủ trọ đăng ký sớm còn được hướng dẫn 1-1 và hỗ trợ chuẩn hóa dữ liệu phòng.",
    ],
  ]
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav
            className={menuOpen ? "navigation is-open" : "navigation"}
            aria-label="Điều hướng chính"
          >
            <a href="#tinh-nang" onClick={() => setMenuOpen(false)}>
              Tính năng
            </a>
            <a href="#uu-dai" onClick={() => setMenuOpen(false)}>
              Ưu đãi đăng ký sớm <span className="nav-tag">EARLY BIRD</span>
            </a>
            <a href="#cau-hoi" onClick={() => setMenuOpen(false)}>
              Câu hỏi thường gặp
            </a>
          </nav>
          <a className="button header-cta" href="#dang-ky">
            Đăng ký trải nghiệm <Icon name="arrow" size={17} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mở menu điều hướng"
            aria-expanded={menuOpen}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <span className="live-dot" /> QUẢN LÝ GỌN GÀNG. AN TÂM MỖI NGÀY.
              </div>
              <h1>
                Nhẹ việc quản lý.
                <br />
                Đều tiền mỗi tháng.
                <br />
                <span>Thảnh thơi làm chủ.</span>
              </h1>
              <p className="hero-description">
                Từ phòng trống đến hóa đơn, từ chốt điện nước đến thu tiền.
                TrọGọn giúp bạn quản lý cả dãy trọ trong một nơi — đơn giản và
                không lo thất thoát.
              </p>
              <a href="#dang-ky" className="button button-lime hero-button">
                Đăng ký trải nghiệm miễn phí <Icon name="arrow" size={20} />
              </a>
              <div className="hero-assurances">
                <span>
                  <Icon name="check" size={15} /> Miễn phí 6 tháng đầu
                </span>
                <span>
                  <Icon name="check" size={15} /> Không cần thẻ ngân hàng
                </span>
              </div>
              <div className="hero-social">
                <div className="avatar-stack">
                  <span>H</span>
                  <span>M</span>
                  <span>A</span>
                  <span>T</span>
                </div>
                <div>
                  <div className="social-stars">★★★★★</div>
                  <p>Dành cho chủ trọ Việt, hiểu việc chủ trọ Việt.</p>
                </div>
              </div>
            </div>
            <Dashboard />
          </div>
        </section>
        <section className="value-strip">
          <div className="container value-strip-inner">
            <p>
              Bớt việc không tên.
              <br />
              <strong>Thêm thời gian cho bạn.</strong>
            </p>
            <div>
              <Icon name="clock" />
              <span>
                Tiết kiệm thời gian<strong>quản lý mỗi tháng</strong>
              </span>
            </div>
            <div>
              <Icon name="shield" />
              <span>
                Minh bạch thu chi<strong>không lo thất thoát</strong>
              </span>
            </div>
            <div>
              <Icon name="home" />
              <span>
                Quản lý mọi lúc<strong>ngay trên điện thoại</strong>
              </span>
            </div>
          </div>
        </section>
        <section className="features section-space" id="tinh-nang">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  MỘT NỀN TẢNG, BỐN TRỢ THỦ ĐẮC LỰC
                </span>
                <h2>Việc quản lý trọ, để TrọGọn lo.</h2>
              </div>
              <p>
                Không còn sổ sách chồng chất hay tin nhắn thất lạc.
                <br className="desktop-break" /> Mọi việc rõ ràng, mọi con số
                trong tầm tay.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature, i) => (
                <article
                  className={`feature-card ${feature.color}`}
                  key={feature.tag}
                >
                  <div className="feature-top">
                    <span className="feature-icon">
                      <Icon name={feature.icon} size={25} />
                    </span>
                    <span className="feature-number">0{i + 1}</span>
                  </div>
                  <span className="feature-tag">{feature.tag}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-bottom">
                    <Icon name="check" size={15} />
                    {feature.detail}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="early-section" id="uu-dai">
          <div className="container">
            <div className="early-banner">
              <div className="early-main">
                <span className="early-label">
                  <Icon name="gift" size={17} /> ĐẶC QUYỀN NGƯỜI TIÊN PHONG
                </span>
                <h2>
                  Bắt đầu sớm.
                  <br />
                  Nhận nhiều hơn.
                </h2>
                <p>
                  Dành riêng cho <strong>50 chủ trọ đầu tiên</strong>
                  <br />
                  đồng hành cùng TrọGọn.
                </p>
                <a href="#dang-ky" className="early-link">
                  Giữ suất trải nghiệm của bạn <Icon name="arrow" size={19} />
                </a>
              </div>
              <div className="early-perks">
                <div className="perk">
                  <span>
                    <Icon name="gift" size={24} />
                  </span>
                  <div>
                    <h3>6 tháng miễn phí. Trọn vẹn tính năng.</h3>
                    <p>Trải nghiệm 100% nền tảng, không lo chi phí khởi đầu.</p>
                  </div>
                  <b>01</b>
                </div>
                <div className="perk">
                  <span>
                    <Icon name="chart" size={24} />
                  </span>
                  <div>
                    <h3>Tin đăng nổi bật, lấp phòng nhanh hơn.</h3>
                    <p>
                      Ưu tiên hiển thị tin đăng lên TOP trong khu vực của bạn.
                    </p>
                  </div>
                  <b>02</b>
                </div>
                <div className="perk">
                  <span>
                    <Icon name="people" size={24} />
                  </span>
                  <div>
                    <h3>Có người đồng hành, ngay từ bước đầu.</h3>
                    <p>Hỗ trợ nhập dữ liệu phòng và hướng dẫn sử dụng 1-1.</p>
                  </div>
                  <b>03</b>
                </div>
              </div>
              <div className="early-decoration" />
            </div>
          </div>
        </section>
        <section className="signup-section section-space" id="dang-ky">
          <div className="container signup-layout">
            <div className="signup-copy">
              <span className="eyebrow">BẮT ĐẦU HÀNH TRÌNH QUẢN LÝ GỌN</span>
              <h2>
                Dãy trọ của bạn.
                <br />
                Một khởi đầu <span>gọn hơn.</span>
              </h2>
              <p>
                Trở thành một trong những chủ trọ đầu tiên trải nghiệm TrọGọn.
                Để lại thông tin, chúng tôi sẽ liên hệ và đồng hành cùng bạn.
              </p>
              <div className="signup-points">
                <span>
                  <Icon name="check" size={17} /> Không mất phí đăng ký, không
                  ràng buộc
                </span>
                <span>
                  <Icon name="check" size={17} /> Ưu tiên nhận lời mời trải
                  nghiệm sớm
                </span>
                <span>
                  <Icon name="check" size={17} /> Đội ngũ hỗ trợ người Việt,
                  luôn sẵn sàng
                </span>
              </div>
              <div className="founder-note">
                <span className="quote-mark">“</span>
                <blockquote>
                  Chúng tôi tin rằng làm chủ trọ không nên là một công việc bận
                  rộn suốt ngày. TrọGọn được tạo ra để bạn có thêm thời gian cho
                  những điều quan trọng hơn.
                </blockquote>
                <div>
                  <span className="team-avatar">
                    <Icon name="home" size={19} />
                  </span>
                  <span>
                    <strong>Đội ngũ TrọGọn</strong>
                    <small>Làm sản phẩm từ sự thấu hiểu.</small>
                  </span>
                </div>
              </div>
            </div>
            <form className="signup-form" onSubmit={submitForm}>
              <span className="form-badge">
                <span className="live-dot" /> ĐANG MỞ ĐĂNG KÝ SỚM
              </span>
              <h3>Giữ một suất cho bạn.</h3>
              <p>Chỉ mất 30 giây để bắt đầu một cách quản lý mới.</p>
              <label htmlFor="full-name">
                Họ và tên <span>*</span>
              </label>
              <input
                id="full-name"
                name="fullName"
                placeholder="Nhập họ và tên của bạn"
                autoComplete="name"
                required
                maxLength={100}
              />
              <label htmlFor="phone">
                Số điện thoại / Zalo <span>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Ví dụ: 0912 345 678"
                pattern="(0|[+]84)[0-9 ]{8,14}"
                title="Vui lòng nhập số điện thoại bắt đầu bằng 0 hoặc +84"
                required
              />
              <label htmlFor="email">
                Email <small>(Không bắt buộc)</small>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="email@cuaban.com"
              />
              <label htmlFor="rooms">Số lượng phòng đang quản lý</label>
              <div className="select-wrap">
                <select id="rooms" name="rooms" defaultValue="">
                  <option value="" disabled>
                    Chọn số lượng phòng
                  </option>
                  <option value="Dưới 5 phòng">Dưới 5 phòng</option>
                  <option value="6–20 phòng">6–20 phòng</option>
                  <option value="21–50 phòng">21–50 phòng</option>
                </select>
                <Icon name="chevron" size={17} />
              </div>
              <button
                className="button button-lime form-submit"
                type="submit"
                disabled={submitting}
                style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}
              >
                {submitting ? "Đang gửi…" : <>Đăng ký nhận trải nghiệm sớm <Icon name="arrow" size={19} /></>}
              </button>
              <p className="privacy-note">
                <Icon name="lock" size={13} /> Bảo mật thông tin. Không spam.
                Không làm phiền.
              </p>
              {submitted && (
                <div className="form-feedback" role="status">
                  <strong>🎉 Đăng ký thành công!</strong>
                  <p>
                    Cảm ơn bạn đã đăng ký trải nghiệm sớm TrọGọn.
                    Chúng tôi sẽ liên hệ với bạn qua số điện thoại sớm nhất!
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)}>
                    Đăng ký thêm
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>
        <section className="faq-section" id="cau-hoi">
          <div className="container faq-layout">
            <div>
              <span className="eyebrow">BẠN HỎI, TRỌGỌN ĐÁP</span>
              <h2>
                Một vài điều
                <br />
                bạn có thể muốn biết.
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], i) => (
                <div
                  className={`faq-item ${faqOpen === i ? "expanded" : ""}`}
                  key={question}
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-${i}`}
                  >
                    {question}
                    <span>{faqOpen === i ? "−" : "+"}</span>
                  </button>
                  <div id={`faq-${i}`} hidden={faqOpen !== i}>
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <Logo />
            <p>Quản lý gọn gàng. An tâm làm chủ.</p>
          </div>
          <div className="footer-contact">
            <span>Cùng xây dựng một cách quản lý trọ tốt hơn.</span>
            <a href="mailto:hello@trogon.vn">
              <Icon name="mail" size={17} />
              hello@trogon.vn
              <Icon name="arrow" size={15} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 TrọGọn. Bảo lưu mọi quyền.</span>
          <span>Được làm bằng sự thấu hiểu, dành cho chủ trọ Việt.</span>
          <a href="#dang-ky">
            Trải nghiệm TrọGọn <Icon name="arrow" size={15} />
          </a>
        </div>
      </footer>
    </>
  )
}
