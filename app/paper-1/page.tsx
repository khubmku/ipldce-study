import Link from "next/link";

export default function PaperOneSyllabus() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-maroon-700 mb-6">
        Paper–I : Syllabus (Department of Posts)
      </h1>

      {/* 1. Acts */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Acts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/ipo-act">
              The Post Office Act, 2023 (Act No. 43 of 2023)
            </Link>
          </li>
          <li>
            <Link href="/acts/govt-savings-promotion-act-1873">
              Government Savings Promotion Act, 1873
            </Link>
          </li>
          <li>
            <Link href="/acts/pmla-2002">
              Prevention of Money Laundering Act, 2002 (AML/CFT)
            </Link>
          </li>
          <li>
            <Link href="/acts/consumer-protection-act-2019">
              Consumer Protection Act, 2019
            </Link>
          </li>
          <li>
            <Link href="/acts/it-act-2000">
              Information Technology Act, 2000
            </Link>
          </li>
        </ul>
      </section>

      {/* 2. Rules & Schemes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Rules & Savings Schemes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/rules/post-office-rules-2024">
              Post Office Rules, 2024 & Post Office Regulations, 2024
            </Link>
          </li>
          <li>
            <Link href="/rules/govt-savings-promotion-rules-2018">
              Government Savings Promotion Rules, 2018
            </Link>
          </li>
          <li>
            <Link href="/schemes/posb-savings-account-2019">
              Post Office Savings Account Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/rd-2019">
              National Savings Recurring Deposit Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/td-2019">
              National Savings Time Deposit Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/mis-2019">
              National Savings Monthly Income Account Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/scss-2019">
              Senior Citizens’ Savings Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/nsc-2019">
              National Savings Certificate (VIII Issue), 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/kvp-2019">
              Kisan Vikas Patra Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/ppf-2019">
              Public Provident Fund Scheme, 2019
            </Link>
          </li>
          <li>
            <Link href="/schemes/sss-2019">
              Sukanya Samriddhi Account Scheme, 2019
            </Link>
          </li>
        </ul>
      </section>

      {/* 3. PLI */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          3. Post Office Life Insurance
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <Link href="/pli/pli-sankalan">
              PLI Scheme, 2011 (SANKALAN) & Amendments
            </Link>
          </li>
        </ul>
      </section>

      {/* 4. Postal Manuals */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Postal Manuals</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/manuals/bo-rules">Book of BO Rules</Link></li>
          <li><Link href="/manuals/pm-vol-ii">Postal Manual Volume II</Link></li>
          <li><Link href="/manuals/pm-vol-iii">Postal Manual Volume III</Link></li>
          <li>
            <Link href="/manuals/pm-vol-iv">
              Postal Manual Volume IV (Leave, Pension, Gratuity)
            </Link>
          </li>
          <li><Link href="/manuals/pm-vol-viii">Postal Manual Volume VIII</Link></li>
          <li><Link href="/manuals/mail-operations">Mail Operations & Money Remittances</Link></li>
        </ul>
      </section>

      {/* 5. Other Important Topics */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Other Important Topics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/schemes/jansuraksha">Jansuraksha Schemes</Link></li>
          <li><Link href="/post/inland-foreign">Inland & Foreign Post Guidelines</Link></li>
          <li><Link href="/digital/digipin">DIGIPIN – Basic Understanding</Link></li>
          <li><Link href="/projects/mail-network">Mail & Parcel Network Optimization</Link></li>
          <li><Link href="/dnk">Dak Ghar Niryat Kendra (DNK)</Link></li>
        </ul>
      </section>

      {/* 6. Banking & IT */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Banking & IT</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/sb/manuals">POSB Manuals & SB Orders</Link></li>
          <li><Link href="/it/apt-knowledge">APT Knowledge (IT 2.0)</Link></li>
          <li><Link href="/it/cbs-pli">CBS & PLI-CIS</Link></li>
          <li><Link href="/ippb">India Post Payments Bank</Link></li>
        </ul>
      </section>

      {/* 7. Service Rules */}
      <section>
        <h2 className="text-xl font-semibold mb-3">7. Service Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/rules/ccs-conduct-1964">CCS (Conduct) Rules, 1964</Link></li>
          <li><Link href="/rules/ccs-cca-1965">CCS (CCA) Rules, 1965</Link></li>
          <li><Link href="/rules/ccs-ts-1965">CCS (Temporary Service) Rules, 1965</Link></li>
          <li><Link href="/rules/gds-2020">GDS (Conduct & Engagement) Rules, 2020</Link></li>
        </ul>
      </section>
    </div>
  );
}