export default {
    crement(state) {
        state.count++;
    },
    addShopItem(state, index) {
        state.shopItem.push(index);
    }
}