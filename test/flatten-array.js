describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    expect(arr).toEqual(expected);
  });
});

function describe(arr, expected){
    if(!expected){ expected = []}
    for(var i=0; i<arr.length; i++){
        if(arr[i].constructor == Array){
            flattenArrayOfArrays(arr[i], expected);
        }else{
            expected.push(arr[i]);
        }
    }
    return expected;
}
