var db = new PouchDB('stockPaletas');
regVentas = {
	fecha: [],
	modelo: [],
	ganancia: [],
	stock:[]
};

db.allDocs({include_docs: true, descending: true})
	.then(function(update){
		dataBase = update;

		document.getElementById("PagPrincStock1").innerHTML = update.rows[0].doc.mod1.stock;
		document.getElementById("CarbonDuoFullProf").value 	= "$" + update.rows[0].doc.mod1.prBas * (1+(update.rows[0].doc.mod1.gaPro/100));
		document.getElementById("CarbonDuoFullPart").value 	= "$" + update.rows[0].doc.mod1.prBas * (1+(update.rows[0].doc.mod1.gaPar/100));

		document.getElementById("PagPrincStock2").innerHTML = update.rows[0].doc.mod2.stock;
		document.getElementById("CarbonDuoProf").value 		= "$" + update.rows[0].doc.mod2.prBas * (1+(update.rows[0].doc.mod2.gaPro/100));
		document.getElementById("CarbonDuoPart").value 		= "$" + update.rows[0].doc.mod2.prBas * (1+(update.rows[0].doc.mod2.gaPar/100));
		
		document.getElementById("PagPrincStock3").innerHTML = update.rows[0].doc.mod3.stock;
		document.getElementById("CarbonEVOProf").value 		= "$" + update.rows[0].doc.mod3.prBas * (1+(update.rows[0].doc.mod3.gaPro/100));
		document.getElementById("CarbonEVOPart").value 		= "$" + update.rows[0].doc.mod3.prBas * (1+(update.rows[0].doc.mod3.gaPar/100));

		document.getElementById("PagPrincStock4").innerHTML = update.rows[0].doc.mod4.stock;
		document.getElementById("ConicEnergFullProf").value = "$" + update.rows[0].doc.mod4.prBas * (1+(update.rows[0].doc.mod4.gaPro/100));
		document.getElementById("ConicEnergFullPart").value = "$" + update.rows[0].doc.mod4.prBas * (1+(update.rows[0].doc.mod4.gaPar/100));
		
		document.getElementById("PagPrincStock5").innerHTML = update.rows[0].doc.mod5.stock;
		document.getElementById("ConicEnergProf").value 	= "$" + update.rows[0].doc.mod5.prBas * (1+(update.rows[0].doc.mod5.gaPro/100));
		document.getElementById("ConicEnergPart").value 	= "$" + update.rows[0].doc.mod5.prBas * (1+(update.rows[0].doc.mod5.gaPar/100));

		document.getElementById("PagPrincStock6").innerHTML = update.rows[0].doc.mod6.stock;
		document.getElementById("EspectraProf").value 		= "$" + update.rows[0].doc.mod6.prBas * (1+(update.rows[0].doc.mod6.gaPro/100));
		document.getElementById("EspectraPart").value 		= "$" + update.rows[0].doc.mod6.prBas * (1+(update.rows[0].doc.mod6.gaPar/100));
		
		document.getElementById("PagPrincStock7").innerHTML = update.rows[0].doc.mod7.stock;
		document.getElementById("EuphoriaProf").value 	    = "$" + update.rows[0].doc.mod7.prBas * (1+(update.rows[0].doc.mod7.gaPro/100));
		document.getElementById("EuphoriaPart").value 		= "$" + update.rows[0].doc.mod7.prBas * (1+(update.rows[0].doc.mod7.gaPar/100));

		document.getElementById("PagPrincStock8").innerHTML = update.rows[0].doc.mod8.stock;
		document.getElementById("GranPatagoniaProf").value 	= "$" + update.rows[0].doc.mod8.prBas * (1+(update.rows[0].doc.mod8.gaPro/100));
		document.getElementById("GranPatagoniaPart").value 	= "$" + update.rows[0].doc.mod8.prBas * (1+(update.rows[0].doc.mod8.gaPar/100));
		
		document.getElementById("PagPrincStock9").innerHTML = update.rows[0].doc.mod9.stock;
		document.getElementById("LeirBagProf").value 		= "$" + update.rows[0].doc.mod9.prBas * (1+(update.rows[0].doc.mod9.gaPro/100));
		document.getElementById("LeirBagPart").value 		= "$" + update.rows[0].doc.mod9.prBas * (1+(update.rows[0].doc.mod9.gaPar/100));

		document.getElementById("PagPrincStock10").innerHTML= update.rows[0].doc.mod10.stock;
		document.getElementById("MaxD3FullCarbonProf").value= "$" + update.rows[0].doc.mod10.prBas * (1+(update.rows[0].doc.mod10.gaPro/100));
		document.getElementById("MaxD3FullCarbonPart").value= "$" + update.rows[0].doc.mod10.prBas * (1+(update.rows[0].doc.mod10.gaPar/100));
		
		document.getElementById("PagPrincStock11").innerHTML= update.rows[0].doc.mod11.stock;
		document.getElementById("MaxD3Prof").value 			= "$" + update.rows[0].doc.mod11.prBas * (1+(update.rows[0].doc.mod11.gaPro/100));
		document.getElementById("MaxD3Part").value 			= "$" + update.rows[0].doc.mod11.prBas * (1+(update.rows[0].doc.mod11.gaPar/100));

		document.getElementById("PagPrincStock12").innerHTML= update.rows[0].doc.mod12.stock;
		document.getElementById("MaxD5FullCarbonProf").value= "$" + update.rows[0].doc.mod12.prBas * (1+(update.rows[0].doc.mod12.gaPro/100));
		document.getElementById("MaxD5FullCarbonPart").value= "$" + update.rows[0].doc.mod12.prBas * (1+(update.rows[0].doc.mod12.gaPar/100));
		
		});

function ventaParticular(parModelo){

	regVentas.fecha.push(new Date().toISOString());

	switch (parModelo) {
		case 1:
		    document.getElementById("PagPrincStock1").innerHTML--; 
		    dataBase.rows[0].doc.mod1.stock--;
		    regVentas.modelo.push('Carbon D. F. C.');
		    regVentas.ganancia.push(dataBase.rows[0].doc.mod1.prBas * (dataBase.rows[0].doc.mod1.gaPro/100));
		    regVentas.stock.push(dataBase.rows[0].doc.mod1.stock);
		break;
	    case 2:
	        document.getElementById("PagPrincStock2").innerHTML--;
	        dataBase.rows[0].doc.mod2.stock--;
	        regVentas.modelo.push('Carbon Duo');
	        regVentas.ganancia.push(dataBase.rows[0].doc.mod2.prBas * (dataBase.rows[0].doc.mod2.gaPro/100));
		    regVentas.stock.push(dataBase.rows[0].doc.mod2.stock);
        break;	
	    case 3:
	        document.getElementById("PagPrincStock3").innerHTML--;
	        dataBase.rows[0].doc.mod3.stock--;
	        regVentas.modelo.push('Condor Evo');
	        regVentas.ganancia.push(dataBase.rows[0].doc.mod3.prBas * (dataBase.rows[0].doc.mod3.gaPro/100));
		    regVentas.stock.push(dataBase.rows[0].doc.mod3.stock);
        break;
	    case 4:
	        document.getElementById("PagPrincStock4").innerHTML--;
	        dataBase.rows[0].doc.mod4.stock--;
	        regVentas.modelo.push('Conic E.F.C.');
        break;
	    case 5:
	        document.getElementById("PagPrincStock5").innerHTML--;
	        dataBase.rows[0].doc.mod5.stock--;
	        regVentas.modelo.push('Conic Energy');
        break;
	    case 6:
	        document.getElementById("PagPrincStock6").innerHTML--;
	        dataBase.rows[0].doc.mod6.stock--;
	        regVentas.modelo.push('Espectra');
        break;
    	case 7:
		    document.getElementById("PagPrincStock7").innerHTML--; 
		    dataBase.rows[0].doc.mod7.stock--;
		    regVentas.modelo.push('Euphoria');
		break;
	    case 8:
	        document.getElementById("PagPrincStock8").innerHTML--;
	        dataBase.rows[0].doc.mod8.stock--;
	        regVentas.modelo.push('Gran Patagonia');
        break;	
	    case 9:
	        document.getElementById("PagPrincStock9").innerHTML--;
	        dataBase.rows[0].doc.mod9.stock--;
	        regVentas.modelo.push('Leirbag');
        break;
	    case 10:
	        document.getElementById("PagPrincStock10").innerHTML--;
	        dataBase.rows[0].doc.mod10.stock--;
	        regVentas.modelo.push('Max D3 F.C.');
        break;
	    case 11:
	        document.getElementById("PagPrincStock11").innerHTML--;
	        dataBase.rows[0].doc.mod11.stock--;
	        regVentas.modelo.push('Max D3');
        break;
	    case 12:
	        document.getElementById("PagPrincStock12").innerHTML--;
	        dataBase.rows[0].doc.mod12.stock--;
	        regVentas.modelo.push('Max D5 F.C.');
        break;
	}
	console.log(regVentas)
	guardarDataBase();
}

function ventaProfesor(proModelo){
	switch (proModelo) {
		case 1:
		    document.getElementById("PagPrincStock1").innerHTML--; 
		    dataBase.rows[0].doc.mod1.stock--;
		    regVentas.modelo.push('Carbon D. F. C.');
		break;

	    case 2:
	        document.getElementById("PagPrincStock2").innerHTML--;
	        dataBase.rows[0].doc.mod2.stock--;
        	regVentas.modelo.push('Carbon Duo');
        break;	
	    case 3:
	        document.getElementById("PagPrincStock3").innerHTML--;
	        dataBase.rows[0].doc.mod3.stock--;
	        regVentas.modelo.push('Condor Evo');
        break;
	    case 4:
	        document.getElementById("PagPrincStock4").innerHTML--;
	        dataBase.rows[0].doc.mod4.stock--;
	        regVentas.modelo.push('Conic E.F.C.');
        break;
	    case 5:
	        document.getElementById("PagPrincStock5").innerHTML--;
	        dataBase.rows[0].doc.mod5.stock--;
	        regVentas.modelo.push('Conic Energy');
        break;
	    case 6:
	        document.getElementById("PagPrincStock6").innerHTML--;
	        dataBase.rows[0].doc.mod6.stock--;
	        regVentas.modelo.push('Espectra');
        break;
        case 7:
		    document.getElementById("PagPrincStock7").innerHTML--; 
		    dataBase.rows[0].doc.mod7.stock--;
		break;
	    case 8:
	        document.getElementById("PagPrincStock8").innerHTML--;
	        dataBase.rows[0].doc.mod8.stock--;
        break;	
	    case 9:
	        document.getElementById("PagPrincStock9").innerHTML--;
	        dataBase.rows[0].doc.mod9.stock--;
        break;
	    case 10:
	        document.getElementById("PagPrincStock10").innerHTML--;
	        dataBase.rows[0].doc.mod10.stock--;
        break;
	    case 11:
	        document.getElementById("PagPrincStock11").innerHTML--;
	        dataBase.rows[0].doc.mod11.stock--;
        break;
	    case 12:
	        document.getElementById("PagPrincStock12").innerHTML--;
	        dataBase.rows[0].doc.mod12.stock--;
        break;
	}
	guardarDataBase();	
}

function guardarDataBase(){
	let todo ={
		_id: new Date().toISOString(),
		rVen: regVentas,
		mod1: dataBase.rows[0].doc.mod1,
		mod2: dataBase.rows[0].doc.mod2,
		mod3: dataBase.rows[0].doc.mod3,
		mod4: dataBase.rows[0].doc.mod4,
		mod5: dataBase.rows[0].doc.mod5,
		mod6: dataBase.rows[0].doc.mod6,
		mod7: dataBase.rows[0].doc.mod7,
		mod8: dataBase.rows[0].doc.mod8,
		mod9: dataBase.rows[0].doc.mod9,
		mod10:dataBase.rows[0].doc.mod10,
		mod11:dataBase.rows[0].doc.mod11,
		mod12:dataBase.rows[0].doc.mod12
	};
	db.put(todo)
}