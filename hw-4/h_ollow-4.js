class PaginationHelper {
    collection;
    itemsPerPage;
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if(pageIndex > this.pageCount() - 1 || pageIndex < 0)
            return -1;
        if(pageIndex === this.pageCount() - 1)
            return (this.itemsPerPage - (this.pageCount() * this.itemsPerPage - this.itemCount()));
        return this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        if(itemIndex > this.collection.length - 1 || itemIndex < 0)
            return -1;
        //if(this.collection.length - 1 - itemIndex < this.itemsPerPage)
        return Math.ceil(itemIndex / this.itemsPerPage);
    }
}