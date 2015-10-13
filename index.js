function permute(arr) {
    
    var N = arr.length;
    var directions = [];
    var indices = [];

    directions.push(0);
    indices.push(0);
    for (var i = 1; i < N; i += 1) {
        directions.push(-1);
        indices.push(i);
    }
    
    function swap(i, j) {
        var tmp = indices[i];
        indices[i] = indices[j];
        indices[j] = tmp;

        tmp = directions[i];
        directions[i] = directions[j];
        directions[j] = tmp;
    }

    function result() {
        var res = [];
        for (var i = 0; i < N; i += 1) {
            res.push(arr[indices[i]]);
        }
        return res;
    }

    var makeResult = typeof arr !== 'string' ? result : function () {
        return result().join('');
    };

    return function () {
        var i, maxIndex, moveTo;
        for (i = 0; i < N; i += 1) {
            if (directions[i] !== 0) {
                maxIndex = i;
                break;
            }
        }
        if (maxIndex === undefined) {
            return undefined;
        }
        for (i = maxIndex + 1; i < N; i += 1) {
            if (directions[i] !== 0 && indices[i] > indices[maxIndex]) {
                maxIndex = i;
            }
        }
        moveTo = maxIndex + directions[maxIndex];
        swap(maxIndex, moveTo);
        if (moveTo === 0 || moveTo === N - 1 || indices[moveTo + directions[moveTo]] > indices[moveTo]) {
            directions[moveTo] = 0;
        }
        for (i = 0; i < N; i += 1) {
            if (indices[i] > indices[moveTo]) {
                if (i < moveTo) {
                    directions[i] = 1;
                } else {
                    directions[i] = -1;
                }
            }
        }
        return makeResult();
    };
};

permute.all = function (arr) {
    var generator = permute(arr);
    var next = arr;
    var result = [];
    while (next !== undefined) {
        result.push(next);
        next = generator();
    }
    return result;
};

module.exports = permute;
