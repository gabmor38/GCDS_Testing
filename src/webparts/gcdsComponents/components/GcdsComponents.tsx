import * as React from 'react';
//import styles from './GcdsComponents.module.scss';
import { IGcdsComponentsProps } from './IGcdsComponentsProps';
import '@cdssnc/gcds-components-react/gcds.css' 
import { GcdsButton, GcdsCard, GcdsPagination, GcdsSrOnly } from '@cdssnc/gcds-components-react';

const GcdsComponents : React.FunctionComponent<IGcdsComponentsProps> = (props) => {
  
  return (
      <section>
        
        <h2>GC DESIGN COMPONENTS</h2>

        <h3> Card</h3>
        <GcdsCard
          cardTitle="Card title link"
          href="#"
          tag="Tag"
          description="Description or supporting text relating to the headline. Longer text will be truncated with ..."
        />

        <h3>Pagination</h3>
        <GcdsPagination
          label="Pagination"
          currentPage={9}
          totalPages={15}
          previousHref={'#previous'}
          nextHref={'#next'}
          display={'list'}
        />

        <h3>Buttons</h3>
        <div style={{display: 'grid', gridTemplateColumns: '32% 32% 32%', columnGap: '2%'}}>
          <div style={{marginBottom: '10px'}}>
            <GcdsButton
              buttonId={'1'}
              buttonRole={'primary'}
            >
              Primary Button label
            </GcdsButton>
          </div>
          <div style={{marginBottom: '10px'}}> 
            <GcdsButton
              buttonId={'2'}
              buttonRole={'secondary'}
            >
              Secondary Button label
            </GcdsButton>
          </div>
          <div style={{marginBottom: '10px'}}>
            <GcdsButton
              buttonId={'3'}
              buttonRole={'danger'}
            >
              Danger Button label
            </GcdsButton>
          </div>
        </div>

        <div>
          <h3>Screen Reader Only</h3>
          <GcdsSrOnly>
            Text only seen by assistive technologies
          </GcdsSrOnly>
        </div>

        

       


      </section>
    
  );
}

export default GcdsComponents;
