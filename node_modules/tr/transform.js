var isArray = function(o){
	return Object.prototype.toString.call(o) === '[object Array]';
}

Transformer = {
		transform: function(i, t){
			o = [];
			i.forEach(function(item){
				var orec = {};
				for(key in item){
					if(typeof(t[key]) === 'function'){
						orec[key] = t[key](item[key]);
					} else if(isArray(t[key])) {
						var v = item[key];
						if(t[key].length === 2) v = t[key][1](v);
						orec[t[key][0]] = v;
					}
				}
				o.push(orec);
			})
			return o;
		},
		validate: function(i, t){
			var fail;
			i.forEach(function(rec){
				for(key in rec){
				  if(!t.hasOwnProperty(key)) return fail = key;
				}
			});
			if(fail) return fail;
			var res = this.transform(i, t), badarr = [], ret = {};
			res.forEach(function(rec){
			  for(i in rec) if(!rec[i]) badarr.push(rec);
			});
			return badarr.length ? badarr : '';
		}
}

if(module && 'undefined' !== typeof(module.exports)) 
	module.exports = Transformer;