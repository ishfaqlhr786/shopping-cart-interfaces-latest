
import Button from '@material-ui/core/Button'

import {CartItemType} from '../App'
import {Wrapper}  from '../Items/Items.styles'

interface Props{
item:CartItemType,
handleAddToCart:(clickedItem:CartItemType)=>void;
}
const Items:React.FC<Props>=({item,
handleAddToCart}) =>(
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            {console.log(item.price)}
            <h3>
                {item.title}
            </h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
        <Button onClick={()=> handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
)

export default Items;