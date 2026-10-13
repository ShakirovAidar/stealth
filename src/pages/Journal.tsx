import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Why We Chose Magnesium Hydroxide',
    excerpt:
      'A closer look at the mineral foundation of STEALTH and how it fits into a baking-soda-free, aluminum-free formula.',
    href: '/magnesium-deodorant',
    tag: 'Formula',
  },
  {
    title: 'Baking Soda in Natural Deodorant — What to Know',
    excerpt:
      'Some people prefer to avoid baking soda. Here is why STEALTH takes a different path.',
    href: '/baking-soda-free-deodorant',
    tag: 'Ingredients',
  },
  {
    title: 'Natural Deodorant for Sensitive Skin',
    excerpt:
      'Underarm skin can be reactive. How we designed the formula with comfort in mind.',
    href: '/sensitive-skin-deodorant',
    tag: 'Skin',
  },
  {
    title: 'Born in Phuket: Designing for Heat and Humidity',
    excerpt:
      'The tropical environment that shaped how we think about everyday deodorant performance.',
    href: '/about',
    tag: 'Brand',
  },
];

export default function Journal() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">Journal</h1>
      <p className="mt-4 text-muted">
        Educational materials on magnesium deodorant, ingredients, sensitive skin, and the thinking
        behind STEALTH.
      </p>

      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <article key={post.title} className="border-b border-border pb-8 last:border-0">
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              {post.tag}
            </span>
            <h2 className="mt-2 text-xl font-semibold">
              <Link to={post.href} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <Link
              to={post.href}
              className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
