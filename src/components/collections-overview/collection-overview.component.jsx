import React from 'react';

import Collection from '../../components/collection/collection.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';



const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
             {collections.map(({id,...otherCollectionProps})=>(<Collection key={id} {...otherCollectionProps}/>))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);