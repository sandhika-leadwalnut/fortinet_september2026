// components/KeyHighlights.tsx

import SectionHeader from "./SectionHeader";
import { DocumentIcon } from "./icons";
import { CHART_COLORS } from "../constants/constants";

const KeyHighlights = () => {
  /* ==========================================================
      SERP DATA
  ========================================================== */
const imageClass =
  "block mx-auto w-auto max-w-[85%] max-h-[80vh] object-contain rounded-xl border border-gray-300 shadow-sm mb-6";
  const priorityPages = [
    {
      keyword: "what is sase",
      link: "https://www.fortinet.com/resources/cyberglossary/sase",
      position: 4,
      image: "/sase.jpeg",
      insight:"The 'What is SASE' keyword has secured a Page 1 position at #4, with consistent backlink acquisition strengthening the page's authority and bringing it within reach of the Top 3. "
    },
    {
      keyword: " what is network security ",
      link: "https://www.fortinet.com/resources/cyberglossary/what-is-network-security  ",
      position: 1,
      image: "/network-security.jpeg",
      insight:" The 'What is Network Security' keyword has climbed to the #1 position, consolidating its Page 1 presence after sustained backlink acquisition throughout the campaign. "
    },
    {
      keyword: "cyber attack ",
      link: "https://www.fortinet.com/resources/cyberglossary/what-is-secops",
      position: 1,
      image: "/cyber attack.png",
      insight:"The 'Cyber Attack' keyword has reached the #1 position, demonstrating continued ranking gains driven by consistent backlink acquisition."
    },
   
  ];

  const topCategories = [
    {
      keyword: "Post-Quantum Cryptography ",
      link: "https://www.fortinet.com/resources/cyberglossary/post-quantum-cryptography",
      position: 1,
      image: "/PQC.jpeg",
      insight:" The 'Post Quantum Cryptography' keyword has reached the #1 position, demonstrating continued ranking gains driven by consistent backlink acquisition. "
    },
    {
      keyword: "What is AI Security",
      link: "https://www.fortinet.com/resources/cyberglossary/ai-security",
      position: 5,
      image: "/AI Security.jpeg",
      insight:" The 'What is AI Security' keyword has reached a strong Top 5 position at #5, demonstrating solid search visibility and strengthening Fortinet's presence within the AI security category. "
    },
    {
      keyword: "quantum key distribution",
      link: "https://www.fortinet.com/resources/cyberglossary/quantum-key-distribution",
      position: 1,
      image: "/quantum-key-distribution.jpeg",
      insight:"The 'Quantum Key Distribution' keyword has achieved a #1 ranking, giving Fortinet maximum search visibility and strengthening its authority in the quantum cybersecurity category. "
    },
   
  ];

  /* ==========================================================
      LLM DATA
  ========================================================== */

  const llmHighlights = [
    {
      title: "Brand Visibility% Performance",
      image: "/Brand Visibility Performance .jpeg",
      insight:
        "Fortinet's overall brand visibility stands in position one among the competitors at 44.5%, indicating a stable lead in AI/LLM search presence",
    },
    {
      title: "Category Brand Visibility Performance",
      image: "/Category Brand Visibility Performance.jpeg",
      insight:
        "Fortinet leads in 6 out of 10 primary categories, achieving a 60% category leadership rate, demonstrating strong authority across the majority of key cybersecurity topics. ",
    },
    {
      title: "Category Matrix - Market Positioning",
      image: "/category-matrix.jpeg",
      insight:
      ["Fortinet's LLM Marketing positioning" ,
"Citation Leaders - AI in Cybersecurity, Quantum Security & Zero Trust/ZTNA.  ",
"Visibility Leaders - Network Security, Firewall/NGFW & OT Security",
"- Strongholds - SASE & SD-WAN"
      ]
    },
    {
      title: "Top citation domains landscape:",
      image: "/top-domain.jpeg",
      insight:
        "Fortinet ranks #1 in the citation domains with a share of 8.71%, outperforming Palo Alto Networks and maintaining a strong lead over all major competitors. ",
    }
  ];

  const guestPosts = [
    {
      image: "/5-best-sdwan.jpeg",
      title: "5 Best SD-WAN Solutions for Secure and High-Performance Business Networks - Techidemics ",
      link: "https://techidemics.com/5-best-sd-wan-solutions-for-secure-and-high-performance-business-networks/",
    },
    {
      image: "/5-cybersecurity.jpeg",
      title: "  5 Cybersecurity Companies With AI-Powered Solutions for SOC Teams - Kracensoft.com ",
      link: "https://kracensoft.com/5-cybersecurity-companies-with-ai-powered-solutions-for-soc-teams/",
    },
    {
      image: "/5 Cloud Security.jpeg",
      title: " 5 Cloud Security Providers With Built-In Threat Detection Capabilities | techslassh.com.co ",
      link: "https://techslassh.com.co/5-cloud-security-providers-with-built-in-threat-detection-capabilities/",
    },
  ];

  return (
    <div
      className="bg-white rounded-lg shadow-md border-t-4 p-6 hover:shadow-lg transition-all duration-300"
      style={{ borderTopColor: CHART_COLORS.primary }}
    >
      <SectionHeader
        icon={<DocumentIcon />}
        title="Key Highlights"
      />

      {/* ==========================================================
            SERP KEY HIGHLIGHTS
      ========================================================== */}

      <section className="mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          SERP Key Highlights
        </h2>

        {/* Priority Pages */}

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Priority Category Pages
          </h3>

          <p className="text-gray-700 leading-7 mb-10">
What is SASE, What is Network Security, and Cyber Attack - moved into Page 1 positions following backlink-driven ranking improvements.           </p>

          <div className="space-y-14">
            {priorityPages.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.keyword}
                  className="w-[85%] mx-auto rounded-xl border border-gray-300 shadow-sm mb-6"
                />

                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Keyword:</span>{" "}
                    {item.keyword}
                  </p>

                  <p className="break-all">
                    <span className="font-semibold">Link:</span>{" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {item.link}
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold">Position:</span>{" "}
                    {item.position}
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
                <p className="text-gray-700 leading-7">
                  <span className="font-semibold">Insight:</span>{" "}
                  {item.insight}
                </p>
              </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Top Categories
          </h3>

          <p className="text-gray-700 leading-7 mb-10">
Quantum & AI Cybersecurity Cyberglossary pages rank in the Top 3 positions on Page 1 post-backlink efforts.
          </p>

          <div className="space-y-14">
            {topCategories.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.keyword}
                  className={imageClass}
                />

                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Keyword:</span>{" "}
                    {item.keyword}
                  </p>

                  <p className="break-all">
                    <span className="font-semibold">Link:</span>{" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {item.link}
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold">Position:</span>{" "}
                    {item.position}
                  </p>
                     <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
                <p className="text-gray-700 leading-7">
                  <span className="font-semibold">Insight:</span>{" "}
                  {item.insight}
                </p>
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}

      <div className="border-t border-gray-300 mb-20"></div>

      {/* ==========================================================
            LLM KEY HIGHLIGHTS
      ========================================================== */}

     <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          LLM Key Highlights
        </h2>

        {/* LLM Charts */}

        <div className="space-y-16 mb-20">
          {llmHighlights.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>

              <img
                src={item.image}
                alt={item.title}
               className={imageClass}
              />

                         <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5">
                {Array.isArray(item.insight) ? (
                  <div className="text-gray-700 leading-7 space-y-1">
                    <p>
                      <span className="font-semibold">Insight:</span>{" "}
                      {item.insight[0]}
                    </p>
                    {item.insight.slice(1).map((line, i) => (
                      <p key={i} className="ml-4">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 leading-7">
                    <span className="font-semibold">Insight:</span>{" "}
                    {item.insight}
                  </p>
                )}
              </div>
            </div>
            
          ))}
        </div>

        {/* Guest Posts */}

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Listicle Type of Guest Posts - Third-Party Guest Posts for Brand Mentions
          </h3>

          <p className="text-gray-700 leading-7 mb-10">
           Publishing listicle-style ("Best"/"Top") commercial-intent content to achieve a 
           dual benefit: earning high-quality backlinks while increasing LLM visibility with brand mentions.

          </p>

          <div className="space-y-14">
            {guestPosts.map((post, index) => (
              <div key={index}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={imageClass} 
                />

                <div className="space-y-3">
                  <p className="font-semibold">{post.title}</p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    {post.link}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5 mt-10">
            <p className="text-gray-700 leading-7">
              <span className="font-semibold">Insight:</span> Publishing listicle-style ("Best"/"Top") 
              commercial intent content to achieve a dual benefit: earning high-quality backlinks while increasing LLM visibility with brand mentions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyHighlights;