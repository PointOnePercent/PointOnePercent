import React from 'react';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';

export default function PageHome(): JSX.Element {
  const blog = useSelector((state: any) =>
    orderBy(state.blog, ['date'], ['desc']),
  );

  return (
    <div>
      {/* <div className='wrapper-description fancy'>
          <h3>A dedicated group for dedicated gamers</h3>
          <div className='page-description fancy'>
            <p>Is being top 1% too casual for you? Then this is your home. This group's aim is to band together the most determined gamers out there that aim to do the impossible! The ones that forget to sleep, neglect their beloved ones, need a minute to adjust to sunlight, will only eat to survive.... OK, exaggerated, but you get the point.</p>
          </div>
        </div> 
      */}
      <div className="page-blog">
        {blog.map((entry, entryIndex) => (
          <div className="blog-entry" key={`entry-${entryIndex}`}>
            <h1>{entry.title}</h1>
            <h2>
              ~{entry.author}, {new Date(entry.date).toLocaleDateString()}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: entry.content }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}