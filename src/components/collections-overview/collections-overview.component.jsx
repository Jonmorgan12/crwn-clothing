import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
<<<<<<< HEAD
import { CollectionsOverviewContainer } from "./collections-overview.styles";
=======

import "./collections-overview.styles.scss";
>>>>>>> parent of b09e5f8... converted all components into styled components, restructured my folders, bug fixes

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectProps }) => (
      <PreviewCollection key={id} {...otherCollectProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
