import React from 'react';
import testData from '../../../../.storybook/test-data';
import SignatureRequest from './signature-request.component';

const primaryIdentity = Object.values(testData.metamask.identities)[0];

const containerStyle = {
  width: '357px',
};

export default {
  title: 'Components/App/SignatureRequest',
  id: __filename,
};

export const DefaultStory = () => {
  return (
    <div style={containerStyle}>
      <SignatureRequest
        txData={{
          msgParams: {
            data: JSON.stringify({
              domain: {
                name: 'happydapp.website',
              },
              message: {
                string: 'haay wuurl',
                number: 42,
              },
            }),
            origin: 'https://happydapp.website/governance?futarchy=true',
          },
        }}
        fromAccount={primaryIdentity}
      />
    </div>
  );
};

DefaultStory.storyName = 'Default';
