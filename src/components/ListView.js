import ShopItem from './ShopItem';

export default function ListView(props) {
    const { items } = props;

    return (
        <div className='item-list'>
            {items.map((item, index) => 
                <ShopItem 
                    item={item}
                    key={index}
                />)}
        </div>
    )
}