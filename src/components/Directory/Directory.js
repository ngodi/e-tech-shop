import React, {Component} from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { createStructuredSelector } from 'reselect';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

const Directory = ({ sections }) =>
        (
            <div className="directory">
               {sections.map(({id, ...otherSectionProps}) => 
                   (<MenuItem key= {id} {...otherSectionProps} />)
               )}
            </div>
        )

 const mapStateToProps = createStructuredSelector({
     sections: selectDirectorySections
 }) 
export default connect(mapStateToProps)(Directory);