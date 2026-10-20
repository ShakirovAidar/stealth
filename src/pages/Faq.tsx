import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'Does STEALTH actually work?',
    a: 'STEALTH is designed to help control everyday underarm odor using a magnesium-based odor-control system. It uses magnesium hydroxide and triethyl citrate rather than aluminum salts.',
  },
  {
    q: 'Does STEALTH work in hot and humid weather?',
    a: 'Yes. STEALTH was developed in Phuket, where heat and humidity are part of everyday life. The formula is designed for everyday odor control in warm, humid conditions.',
  },
  {
    q: 'Is STEALTH suitable for sensitive skin?',
    a: 'STEALTH is designed with sensitive skin in mind and contains 0% baking soda. The formula also includes skin-conditioning ingredients such as jojoba oil, meadowfoam seed oil, mango butter and shea butter.',
  },
  {
    q: 'Does STEALTH contain aluminum?',
    a: 'No. STEALTH contains no aluminum salts.',
  },
  {
    q: 'Does STEALTH contain baking soda?',
    a: 'No. STEALTH contains 0% baking soda. Instead, the odor-control system uses magnesium hydroxide and triethyl citrate.',
  },
  {
    q: 'What is magnesium hydroxide?',
    a: 'Magnesium hydroxide is a mineral compound and the foundation of STEALTH\'s odor-control system. It is used as part of our approach to everyday odor control without aluminum salts.',
  },
  {
    q: 'How long does one stick last?',
    a: 'How long a stick lasts depends on how much you apply and how often you use it. A light layer is generally enough for each application.',
  },
  {
    q: 'How do I apply STEALTH?',
    a: 'Apply a light layer to clean, dry underarms. If you\'ve just shaved and your skin feels sensitive, wait until it feels comfortable before applying.',
  },
  {
    q: 'What ingredients are in STEALTH?',
    a: 'The formula includes: Magnesium Hydroxide, Triethyl Citrate, Meadowfoam Seed Oil, Jojoba Oil, Mango Butter, Shea Butter, MCT Oil, Beeswax, Rice Bran Wax, Spherical Silica Microspheres, Tocopherol, Essential Oils. Every ingredient has a specific role in the formula.',
  },
  {
    q: 'Where is STEALTH made?',
    a: 'STEALTH was developed in Phuket, Thailand. The tropical climate played an important role in how we think about everyday deodorant performance.',
  },
  {
    q: 'Where does STEALTH ship from?',
    a: 'Orders ship from Phuket, Thailand.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Shipping times depend on your destination and the shipping method selected at checkout. Your available shipping options and estimated delivery time will be shown during checkout.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, STEALTH ships internationally. Available destinations, shipping options and costs are shown at checkout.',
  },
  {
    q: 'Can I return my order?',
    a: 'Returns are accepted according to the STEALTH Returns Policy. Because deodorant is a personal-care product, eligibility can depend on whether the product has been opened or used.',
  },
  {
    q: 'What if my order arrives damaged?',
    a: 'If your order arrives damaged, contact us with your order details and photos of the damaged package or product. We\'ll review the issue and help with the next steps.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Available payment methods are displayed at checkout and may vary depending on your location.',
  },
];

export default function Faq() {
  return (
    <div className="site-container article-page py-12 md:py-16">
      <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">
        Frequently Asked Questions
      </h1>
      <p className="mt-4 text-text">
        Everything you need to know about STEALTH — from how it works to shipping and returns.
      </p>

      <div className="mt-12 space-y-8">
        {faqs.map((item) => (
          <div key={item.q}>
            <h2 className="text-lg font-semibold">{item.q}</h2>
            <p className="mt-2 text-base text-text leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="text-xl font-semibold mb-4">Still Have a Question?</h2>
        <p className="text-text text-base">
          We're happy to help. Reach out via the contact email on your order confirmation, or explore
          the individual pages below.
        </p>
        <ul className="mt-6 space-y-2 text-base">
          <li>
            <Link to="/magnesium-deodorant" className="text-text underline underline-offset-4">
              Magnesium Deodorant
            </Link>{' '}
            — How the magnesium-based formula works.
          </li>
          <li>
            <Link to="/baking-soda-free-deodorant" className="text-text underline underline-offset-4">
              Baking Soda-Free Deodorant
            </Link>{' '}
            — Why STEALTH doesn't use baking soda.
          </li>
          <li>
            <Link to="/sensitive-skin-deodorant" className="text-text underline underline-offset-4">
              Sensitive Skin Deodorant
            </Link>{' '}
            — More about the formula and sensitive-skin considerations.
          </li>
          <li>
            <Link to="/formula" className="text-text underline underline-offset-4">
              The Formula
            </Link>{' '}
            — A closer look at what's inside.
          </li>
        </ul>
      </section>
    </div>
  );
}
