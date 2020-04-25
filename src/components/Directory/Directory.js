import React, {Component} from 'react';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends Component {
    render(){
   this.state={
       sections: [
        {title:"TELEVISION", linkUrl:"shop", imageUrl:"https://cnet2.cbsistatic.com/img/63_TZqTRVAVST-kI_FCfReUVQhc=/1200x675/2019/06/07/495a521f-2783-4aa0-888a-6123b844ec73/vizio-m-series-quantum05.jpg"},
        {title:"MOBILE PHONES", linkUrl:"shop", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa17lgbB9Hml0vXHCBH0h6CN-FTE4edBdarotjSXcXp4dMhijK&s"},
        {title:"LAPTOPS", linkUrl:"shop", imageUrl:"data:image/jpeg;base64,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"},
        {title:"DESKTOP", linkUrl:"shop", imageUrl:"https://i.pcmag.com/imagery/reviews/07LLQWrr7cxOWl7ebgWvNe7-17..v_1574731215.jpg", size:"large"},
        {title:"ACCESSORIES", linkUrl:"shop", imageUrl:"https://images.pexels.com/photos/3921702/pexels-photo-3921702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", size:"large"}
      ],
   }
        return(
            <div className="directory">
               {this.state.sections.map(({id, ...otherSectionProps}) => 
                   (<MenuItem id= {id} {...otherSectionProps} />)
               )}
            </div>
        )
    }
}

export default Directory;