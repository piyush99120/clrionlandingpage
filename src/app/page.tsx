import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-24 text-center relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 pointer-events-none animate-pulse"></div>
        <div className="max-w-4xl mx-auto relative">
          {/* Logo */}
          <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/clerion-logo.png"
              alt="Clerion Logo"
              width={500}
              height={500}
              className="mx-auto mb-6 animate-float"
            />
          </div>
          {/* Tagline */}
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed animate-slide-up">
            A simplified, intuitive accounting solution designed for clients, practitioners, and administrators.
          </p>
          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 leading-relaxed animate-fade-in">
            Clerion is a powerful web-based accounting platform designed to simplify financial management for businesses, practitioners, and administrators. From reporting to billing management, Clerion brings everything under one roof
          </p>
          {/* Try Now Button */}
          <a
            href="#get-started"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
          >
            Try Now
          </a>
        </div>
      </section>

      {/* Website Preview Section */}
      <section className="container mx-auto px-4 py-24 bg-gradient-to-r from-fuchsia-50 to-violet-50 rounded-3xl mx-4 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/Group 9.png"
                  alt="Accounting Services"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Right: Description */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Streamlined Financial Management</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Clerion provides a dashboard to view your financials, manage clients, and create invoices with ease.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>
                Real-time financial tracking
              </li>
              <li className="flex items-center text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                Intuitive client management
              </li>
              <li className="flex items-center text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="w-2 h-2 rounded-full bg-pink-500 mr-3"></span>
                Seamless invoice creation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-24 animate-fade-in">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent mb-16">What Clerion Solves</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Automated Invoicing",
              description: "Automates invoicing and expense tracking",
              color: "from-indigo-500 to-indigo-600",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              )
            },
            {
              title: "Client Management",
              description: "Simplifies client and transaction management",
              color: "from-purple-500 to-purple-600",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              )
            },
            {
              title: "Financial Visibility",
              description: "Offers clear visibility into financial performance",
              color: "from-pink-500 to-pink-600",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              )
            },
            {
              title: "Secure Access",
              description: "Secure multi-role access for different user types",
              color: "from-violet-500 to-violet-600",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              )
            }
          ].map((solution, index) => (
            <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full transform hover:-translate-y-2 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-lg mb-6 bg-gradient-to-r ${solution.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {solution.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* User Roles Section */}
      <section className="container mx-auto px-4 py-24 bg-gradient-to-r from-fuchsia-50 to-violet-50 rounded-3xl mx-4 animate-fade-in">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent mb-16 animate-slide-up">Who Is Clerion For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Client Login */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Client Login</h3>
              <p className="text-gray-700 text-center mb-6">Clients can log in to view invoices, make payments, and track their financial history.</p>
            </div>
            <div className="relative w-full h-48 mt-6">
              <Image
                src="/user.png"
                alt="Client Dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Practitioner Login */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Practitioner Login</h3>
              <p className="text-gray-700 text-center mb-6">Practitioners can manage multiple client accounts, generate reports, and oversee transactions.</p>
            </div>
            <div className="relative w-full h-48 mt-6">
              <Image
                src="/practitoner.png"
                alt="Practitioner Dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Admin Login */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Super Admin Login</h3>
              <p className="text-gray-700 text-center mb-6">Admins have full system control to manage users, roles, and configurations.</p>
            </div>
            <div className="relative w-full h-48 mt-6">
              <Image
                src="/Login.svg"
                alt="Admin Dashboard"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-16">Built With Modern Web Technologies</h2>
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {[
            {
              name: "Laravel",
              color: "bg-red-600",
              icon: (
                <path fill="currentColor" d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L5.044.05a.375.375 0 01.378 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.019.015.039.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.031.033-.045.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001l4.513-2.598a.375.375 0 01.378 0l4.513 2.598c.015.01.027.021.04.033.013.01.026.018.038.027.013.014.02.03.033.045.008.011.019.021.024.033.01.019.016.039.024.059.004.01.01.021.013.032a.364.364 0 01.014.098z"/>
              )
            },
            {
              name: "MySQL",
              color: "bg-blue-600",
              icon: (
                <path fill="currentColor" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/>
              )
            },
            {
              name: "Firebase",
              color: "bg-yellow-500",
              icon: (
                <path fill="currentColor" d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
              )
            },
            {
              name: "Tailwind CSS",
              color: "bg-sky-500",
              icon: (
                <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
              )
            },
            {
              name: "Notifications",
              color: "bg-purple-500",
              icon: (
                <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              )
            }
          ].map((tech, index) => (
            <div key={index} className="group hover:transform hover:scale-110 transition-all duration-300">
              <div className={`w-24 h-24 ${tech.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4`}>
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
                  {tech.icon}
                </svg>
              </div>
              <p className="text-gray-700 font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
   