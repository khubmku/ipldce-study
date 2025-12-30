export default function PostOfficeAct2023() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-maroon-700">
        📮 The Post Office Act, 2023
      </h1>

      {/* Basic Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <InfoCard title="📘 Introduction">
          <ul className="list-disc ml-5 space-y-1">
            <li>This Act replaces the Indian Post Office Act, 1898.</li>
            <li>It modernizes postal laws for citizen-centric services.</li>
            <li>Provides legal framework for diversified postal services.</li>
          </ul>
        </InfoCard>

        <InfoCard title="📜 Act Details">
          <ul className="space-y-1">
            <li><b>Act No:</b> 43 of 2023</li>
            <li><b>Enactment Date:</b> 24 December 2023</li>
            <li><b>Enforcement Date:</b> 18 June 2024</li>
          </ul>
        </InfoCard>
      </div>

      {/* Section-wise Notes */}
      <h2 className="text-2xl font-semibold text-maroon-700">
        📌 Section-wise Notes
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <SectionCard no="1" title="Short title & commencement">
          Act called <b>Post Office Act, 2023</b>.  
          Comes into force on date notified by Central Government.
        </SectionCard>

        <SectionCard no="2" title="Definitions">
          Defines terms like <b>Post Office, Director General, Item, Notification</b>.
        </SectionCard>

        <SectionCard no="3" title="Postal Services">
          Services prescribed by Central Government.  
          DG can fix charges and conditions.
        </SectionCard>

        <SectionCard no="4" title="Postage Stamps">
          Exclusive right of Post Office to issue physical or digital stamps.
        </SectionCard>

        <SectionCard no="5" title="Addresses & Postcodes">
          Government may prescribe addressing standards and postcode usage.
        </SectionCard>

        <SectionCard no="6" title="International Arrangements">
          Rules for postal services with foreign countries.
        </SectionCard>

        <SectionCard no="7" title="Recovery of Charges">
          Postal dues recoverable as <b>arrears of land revenue</b>.
        </SectionCard>

        <SectionCard no="8" title="Official Marks">
          Postal marks are prima facie evidence of facts.
        </SectionCard>

        <SectionCard no="9" title="Intercept / Detain Articles">
          Allowed in interest of security, public order, or law violations.
        </SectionCard>

        <SectionCard no="10" title="Exemption from Liability">
          No liability unless prescribed; officers liable only for fraud/wilful act.
        </SectionCard>

        <SectionCard no="11" title="Delegation of Powers">
          Powers (except rule-making) can be delegated to DG.
        </SectionCard>

        <SectionCard no="12" title="Power to Make Rules">
          Central Government empowered to make rules.
        </SectionCard>

        <SectionCard no="13" title="Power to Make Regulations">
          DG can make regulations with prior approval of Government.
        </SectionCard>

        <SectionCard no="14" title="Laying Before Parliament">
          Rules & regulations must be laid before both Houses.
        </SectionCard>

        <SectionCard no="15" title="Removal of Difficulties">
          Government can remove difficulties within 2 years.
        </SectionCard>

        <SectionCard no="16" title="Repeal & Savings">
          Repeals Indian Post Office Act, 1898.  
          Old rules continue if not inconsistent.
        </SectionCard>
      </div>
    </div>
  );
}

/* Reusable Components */

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg text-maroon-700 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function SectionCard({
  no,
  title,
  children,
}: {
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-4 bg-yellow-50">
      <h4 className="font-semibold text-maroon-700">
        Section {no}: {title}
      </h4>
      <p className="mt-1 text-sm">{children}</p>
    </div>
  );
}
