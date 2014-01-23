QUnit.done(function(results){
    window.global_test_results = results;
});

test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});