import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import   CollectionPreview   from '../preview-collection/preview-collection.component';

import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
     <div className = 'collection-overview'>
             {collections.map(({ id, ...otherCollectionProps }) => (   
        <CollectionPreview key={id} {...otherCollectionProps}/> 
     ))}  
     </div> 
);

const  mapStateToProps = createStructuredSelector({
     collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);

