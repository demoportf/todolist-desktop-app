class RedditService {
  constructor($http) {
    this.$http = $http;
    this.items = [];
    this.busy = false;
    this.after = "";
  }
  nextPage() {
    if (this.busy) return;
    this.busy = true;
   
    var url =
      "https://api.reddit.com/hot?after=" + this.after;
    // return this.$http.jsonp(url).success(
    //   function(data) {
    //     var items = data.data.children;
    //     for (var i = 0; i < items.length; i++) {
    //       this.items.push(items[i].data);
    //     }
    //     this.after = "t3_" + this.items[this.items.length - 1].id;
    //     this.busy = false;
    //   }.bind(this)
    // );

    return this.$http.jsonp(url).then(
      function(data) {
        var items = data.data.children;
        for (var i = 0; i < items.length; i++) {
          this.items.push(items[i].data);
        }
        this.after = "t3_" + this.items[this.items.length - 1].id;
        this.busy = false;
      }.bind(this)
    );
  }
}

RedditService.$inject = ["$http"];

module.exports = RedditService;
