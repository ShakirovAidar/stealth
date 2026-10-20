import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="site-container article-page py-12 md:py-16">
      <h1 className="font-sans text-3xl md:text-4xl text-text tracking-tight font-bold">About STEALTH</h1>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Born in Phuket</h2>
        <p className="text-text">
          STEALTH began in Phuket, Thailand. Here, heat and humidity aren't occasional challenges.
          They're part of everyday life.
        </p>
        <p className="text-text">
          That became the starting point for the brand. We wanted to create a deodorant that could
          fit naturally into that environment — something comfortable to wear through warm days,
          long rides, work, evenings out and everything in between.
        </p>
        <p className="text-text">So we started with the conditions we actually live in.</p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">The Formula Came First</h2>
        <p className="text-text">
          The goal was to build a natural deodorant around <strong>magnesium hydroxide</strong> as
          the foundation of its odor-control system.
        </p>
        <p className="text-text">From there, we developed the rest of the formula around three priorities:</p>
        <ul className="space-y-3 text-base mt-4">
          <li>
            <strong>Odor Control</strong> — A magnesium-based approach to everyday freshness.
          </li>
          <li>
            <strong>Comfort</strong> — A smooth formula with oils and butters chosen for a
            comfortable application.
          </li>
          <li>
            <strong>Simplicity</strong> — No aluminum salts. 0% baking soda. Every ingredient has a
            reason to be there.
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Tested by Real Life</h2>
        <p className="text-text">
          Phuket gave us a useful environment to develop the product. Heat, humidity, long days
          outside — those conditions helped shape how we think about deodorant performance.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Our Philosophy</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Keep the formula considered.</h3>
            <p className="mt-1 text-base text-text">
              We don't believe a natural product needs a complicated ingredient list.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Design for real life.</h3>
            <p className="mt-1 text-base text-text">
              Performance matters. So does how a product feels when you use it every day.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Make natural feel refined.</h3>
            <p className="mt-1 text-base text-text">
              Natural doesn't have to mean rustic. STEALTH is our take on a more considered natural
              deodorant.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 bg-action hover:bg-action-hover text-text text-sm font-medium"
        >
          Explore STEALTH
        </Link>
      </div>
    </div>
  );
}
