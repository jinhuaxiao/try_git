/** 
 * Array unique function,同时将去掉null及undefined 
 * @param {Array} ary 需要进行unique的数组. 
 * @return {Array} 返回经过去重的新的数组， 
 * 不会修改原来的数组内容. 
 */  
function unique(ary) {  
    var i = 0,  
        gid='_'+(+new Date)+Math.random(),  
        objs = [],  
        hash = {  
            'string': {},  
            'boolean': {},  
            'number': {}  
        }, p, l = ary.length,  
        ret = [];  
    for (; i < l; i++) {  
        p = ary[i];  
        if (p == null) continue;  
        tp = typeof p;  
        if (tp in hash) {  
            if (!(p in hash[tp])) {  
                hash[tp][p] = 1;  
                ret.push(p);  
            }  
        } else {  
            if (p[gid]) continue;  
            p[gid]=1;  
            objs.push(p);  
            ret.push(p);  
        }  
    }  
    for(i=0,l=objs.length;i<l;i++) {  
        p=objs[i];  
        p[gid]=undefined;  
        delete p[gid];  
    }  
    return ret;  
}  
  
//Test  
console.log(unique([1,'1','null',window,window,unique,unique,1,2,2,'a','b','a',null,undefined,true,true,false,1,false,'b']));  
