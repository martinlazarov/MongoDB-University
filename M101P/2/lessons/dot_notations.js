db.catalog.find( { price : { $gt : 10000 } , "reviews.rating" : { $gte : 5 } } );