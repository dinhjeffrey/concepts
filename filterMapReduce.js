// Array Methods by Tim. We learned filter, map, reduce
  window.users = [
    {"id":1,"firstName":"Marilyn","lastName":"Graham","email":"mgraham0@nymag.com","createdAt":"6/29/2015","updatedAt":"10/21/2015","username":"mgraham0"},
    {"id":2,"firstName":"Roy","email":"rhart1@odnoklassniki.ru","createdAt":"5/6/2015","updatedAt":"4/16/2015","username":"rhill1"},
    {"id":3,"firstName":"Jack","email":"jburton2@uol.com.br","createdAt":"5/8/2015","updatedAt":"12/8/2015","username":"jwoods2"},
    {"id":4,"firstName":"Kevin","lastName":"Alexander","email":"kalexander3@cafepress.com","createdAt":"10/29/2015","updatedAt":"11/3/2015","username":"kalexander3"},
    {"id":5,"firstName":"Kathleen","email":"kspencer4@redcross.org","createdAt":"3/26/2015","updatedAt":"3/9/2016","username":"kpowell4"},
    {"id":6,"firstName":"Linda","email":"ldean5@dell.com","createdAt":"3/31/2015","updatedAt":"7/22/2015","username":"lwilliams5"},
    {"id":7,"firstName":"Martha","email":"mhenry6@w3.org","createdAt":"12/18/2015","updatedAt":"6/2/2015","username":"mwebb6"},
    {"id":8,"firstName":"Paula","email":"pwatkins7@wired.com","createdAt":"6/18/2015","updatedAt":"1/30/2016","username":"ppalmer7"},
    {"id":9,"firstName":"Timothy","lastName":"Turner","email":"tturner8@netscape.com","createdAt":"9/21/2015","updatedAt":"6/16/2015","username":"tturner8"},
    {"id":10,"firstName":"Terry","email":"tmiller9@jiathis.com","createdAt":"12/31/2015","updatedAt":"9/18/2015","username":"twallace9"},
    {"id":11,"firstName":"Theresa","email":"tlawrencea@mac.com","createdAt":"3/1/2016","updatedAt":"4/11/2015","username":"tkellya"},
    {"id":12,"firstName":"Dorothy","lastName":"Graham","email":"dgrahamb@shop-pro.jp","createdAt":"2/26/2016","updatedAt":"3/2/2016","username":"dgrahamb"},
    {"id":13,"firstName":"Carol","lastName":"Ramos","email":"cramosc@elpais.com","createdAt":"5/2/2015","updatedAt":"6/27/2015","username":"cramosc"},
    {"id":14,"firstName":"Mary","lastName":"Castillo","email":"mcastillod@wunderground.com","createdAt":"10/1/2015","updatedAt":"11/16/2015","username":"mcastillod"},
    {"id":15,"firstName":"Bonnie","lastName":"Dixon","email":"bdixone@time.com","createdAt":"2/19/2016","updatedAt":"10/27/2015","username":"bdixone"},
    {"id":16,"firstName":"Richard","email":"rhallf@ibm.com","createdAt":"9/14/2015","updatedAt":"9/29/2015","username":"rarnoldf"},
    {"id":17,"firstName":"Robin","email":"rwoodg@bloomberg.com","createdAt":"5/28/2015","updatedAt":"4/15/2015","username":"rleeg"},
    {"id":18,"firstName":"Robert","email":"rryanh@fema.gov","createdAt":"7/23/2015","updatedAt":"11/14/2015","username":"rwalkerh"},
    {"id":19,"firstName":"Pamela","lastName":"Torres","email":"ptorresi@mozilla.org","createdAt":"1/28/2016","updatedAt":"5/5/2015","username":"ptorresi"},
    {"id":20,"firstName":"Jonathan","email":"jarnoldj@china.com.cn","createdAt":"2/16/2016","updatedAt":"10/27/2015","username":"jgrayj"},
    {"id":21,"firstName":"Ernest","email":"espencerk@japanpost.jp","createdAt":"8/25/2015","updatedAt":"1/25/2016","username":"esandersk"},
    {"id":22,"firstName":"Wanda","lastName":"Rodriguez","email":"wrodriguezl@ameblo.jp","createdAt":"10/11/2015","updatedAt":"9/9/2015","username":"wrodriguezl"},
    {"id":23,"firstName":"Harold","email":"hjacksonm@howstuffworks.com","createdAt":"9/7/2015","updatedAt":"1/17/2016","username":"hhowardm"},
    {"id":24,"firstName":"Christina","email":"cspencern@linkedin.com","createdAt":"6/23/2015","updatedAt":"7/14/2015","username":"cstewartn"},
    {"id":25,"firstName":"Steve","lastName":"Ferguson","email":"sfergusono@wiley.com","createdAt":"6/20/2015","updatedAt":"10/24/2015","username":"sfergusono"},
    {"id":26,"firstName":"Peter","email":"pfullerp@weather.com","createdAt":"6/17/2015","updatedAt":"6/11/2015","username":"phunterp"},
    {"id":27,"firstName":"Wanda","email":"woliverq@irs.gov","createdAt":"11/4/2015","updatedAt":"12/15/2015","username":"wwellsq"},
    {"id":28,"firstName":"Sandra","email":"slawrencer@rambler.ru","createdAt":"1/27/2016","updatedAt":"4/16/2015","username":"sduncanr"},
    {"id":29,"firstName":"Julie","email":"jmillss@imageshack.us","createdAt":"8/1/2015","updatedAt":"9/12/2015","username":"jmccoys"},
    {"id":30,"firstName":"Dennis","lastName":"Welch","email":"dwelcht@drupal.org","createdAt":"7/26/2015","updatedAt":"8/25/2015","username":"dwelcht"}
  ]

  document.addEventListener('DOMContentLoaded', function() {
    /* ================ filter ==================
        returns the entire object if it is true. Filters through if it is false
    */
    // log the count of all users with a last name
    var filtered = users.filter(function(user) {
        return !!user.lastName // bang bang. so return true if they have a last name
    }).length
    console.log(filtered)

    /* ================ map ===================
        returns whatever you want. you can manipulate what gets returned
    */
    // log a list of usernames in upper case
    var mapped = users.map(function (user) {
        return user.username.toUpperCase()
    })
    console.log(mapped)

    /* ================ reduce ===========
        takes in an accumulator and adds up the value. Note is needs accumulator parameter .reduce(function(user) {} , 0)
    */
    // log the sum of ids of users created in 2015
    var filtered2015 = users.filter(function(user) {
        return user.createdAt.slice(-4) === '2015'        
    })
    var reduced = filtered2015.reduce(function(acc, user){
        return acc + user.id;
    }, 0)
    console.log(reduced)

    // log a list of all email addresses of users missing a last name
    var listNoLastName = users.filter(function(user) {
        return !user.lastName
    })
    var filterEmail = listNoLastName.map(function(user) {
        return user.email
    })
    console.log(filterEmail)

  })
