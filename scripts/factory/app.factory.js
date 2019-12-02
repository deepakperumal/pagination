app.factory('GHRepo', function($http) {
  var GHRepo = function() {
    this.repos = [];
    this.busy = false;
    this.page = 1
  };

  GHRepo.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;

    var url = "https://jsonplaceholder.typicode.com/posts?userId="+this.page

    $http.get(url).success(function(data) {
       var items = data;
      for (var i = 0; i < items.length; i++) {
        this.repos.push(items[i]);
      }
      this.page += 1
      this.busy = false;
    }.bind(this));
  };

  return GHRepo;
});