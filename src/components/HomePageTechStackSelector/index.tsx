import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const stacks = [
   {
      name: 'Frontend',
      description: 'Guides for integrating OAuth into frontend frameworks and SPAs.',
      links: [
         { label: 'ReactJs', to: '/docs/category/react' },
         { label: 'Vue', to: '/docs/category/vue' },
      ],
   },
   {
      name: 'Backend',
      description: 'Set up secure OAuth flows and protect your APIs with backend integration.',
      links: [
         { label: 'Go', to: '/docs/category/gogolang' },
         { label: 'Python', to: '/docs/category/python' },
         { label: 'Java', to: '/docs/category/java' },
      ],
   },
];

export default function TechStackSelector() {
   return (
      <div className={styles.stackGrid}>
         {stacks.map((stack) => (
            <div key={stack.name} className={styles.stackCard}>
               <h3>{stack.name}</h3>
               <p>{stack.description}</p>
               <div className={styles.linkList}>
                  {stack.links.map((link) => (
                     <Link key={link.label} className={styles.stackButton} to={link.to}>
                        {link.label}
                     </Link>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
}