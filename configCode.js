// var modelo13= {nombre: "Pampa DX2",					stock: parseInt(document.getElementById("stock13").innerHTML)};
// var modelo14= {nombre: "Prisma full carbono",		stock: parseInt(document.getElementById("stock14").innerHTML)};
// var modelo15= {nombre: "prisma", 					stock: parseInt(document.getElementById("stock15").innerHTML)};
// var modelo16= {nombre: "rober 12 full carbono",		stock: parseInt(document.getElementById("stock16").innerHTML)};
// var modelo17= {nombre: "rober 12",					stock: parseInt(document.getElementById("stock17").innerHTML)};
// var modelo18= {nombre: "rober 8",					stock: parseInt(document.getElementById("stock18").innerHTML)};
// var modelo19= {nombre: "rober platinum",			stock: parseInt(document.getElementById("stock19").innerHTML)};
// var modelo20= {nombre: "saurus",					stock: parseInt(document.getElementById("stock20").innerHTML)};
// var modelo21= {nombre: "sur deluxe",				stock: parseInt(document.getElementById("stock21").innerHTML)};
// var modelo22= {nombre: "tuga",						stock: parseInt(document.getElementById("stock22").innerHTML)};
// var modelo23= {nombre: "vulkan",					stock: parseInt(document.getElementById("stock23").innerHTML)};

var db = new PouchDB('stockPaletas');
actualizoTablas()

function actualizoTablas(){
	db.allDocs({include_docs: true, descending: true})
	.then(function(update){
		console.log(update);	
		document.getElementById("PB1").value 	= update.rows[0].doc.mod1.prBas;
		document.getElementById("GPA1").value 	= update.rows[0].doc.mod1.gaPar;
		document.getElementById("GPR1").value 	= update.rows[0].doc.mod1.gaPro;
		document.getElementById("ST1").value 	= update.rows[0].doc.mod1.stock;

		document.getElementById("PB2").value 	= update.rows[0].doc.mod2.prBas;
		document.getElementById("GPA2").value 	= update.rows[0].doc.mod2.gaPar;
		document.getElementById("GPR2").value 	= update.rows[0].doc.mod2.gaPro;
		document.getElementById("ST2").value 	= update.rows[0].doc.mod2.stock;

		document.getElementById("PB3").value 	= update.rows[0].doc.mod3.prBas;
		document.getElementById("GPA3").value 	= update.rows[0].doc.mod3.gaPar;
		document.getElementById("GPR3").value 	= update.rows[0].doc.mod3.gaPro;
		document.getElementById("ST3").value 	= update.rows[0].doc.mod3.stock;

		document.getElementById("PB4").value 	= update.rows[0].doc.mod4.prBas;
		document.getElementById("GPA4").value 	= update.rows[0].doc.mod4.gaPar;
		document.getElementById("GPR4").value 	= update.rows[0].doc.mod4.gaPro;
		document.getElementById("ST4").value 	= update.rows[0].doc.mod4.stock;

		document.getElementById("PB5").value 	= update.rows[0].doc.mod5.prBas;
		document.getElementById("GPA5").value 	= update.rows[0].doc.mod5.gaPar;
		document.getElementById("GPR5").value 	= update.rows[0].doc.mod5.gaPro;
		document.getElementById("ST5").value 	= update.rows[0].doc.mod5.stock;

		document.getElementById("PB6").value 	= update.rows[0].doc.mod6.prBas;
		document.getElementById("GPA6").value 	= update.rows[0].doc.mod6.gaPar;
		document.getElementById("GPR6").value 	= update.rows[0].doc.mod6.gaPro;
		document.getElementById("ST6").value 	= update.rows[0].doc.mod6.stock;

		document.getElementById("PB7").value 	= update.rows[0].doc.mod7.prBas;
		document.getElementById("GPA7").value 	= update.rows[0].doc.mod7.gaPar;
		document.getElementById("GPR7").value 	= update.rows[0].doc.mod7.gaPro;
		document.getElementById("ST7").value 	= update.rows[0].doc.mod7.stock;

		document.getElementById("PB8").value 	= update.rows[0].doc.mod8.prBas;
		document.getElementById("GPA8").value 	= update.rows[0].doc.mod8.gaPar;
		document.getElementById("GPR8").value 	= update.rows[0].doc.mod8.gaPro;
		document.getElementById("ST8").value 	= update.rows[0].doc.mod8.stock;

		document.getElementById("PB9").value 	= update.rows[0].doc.mod9.prBas;
		document.getElementById("GPA9").value 	= update.rows[0].doc.mod9.gaPar;
		document.getElementById("GPR9").value 	= update.rows[0].doc.mod9.gaPro;
		document.getElementById("ST9").value 	= update.rows[0].doc.mod9.stock;

		document.getElementById("PB10").value 	= update.rows[0].doc.mod10.prBas;
		document.getElementById("GPA10").value 	= update.rows[0].doc.mod10.gaPar;
		document.getElementById("GPR10").value 	= update.rows[0].doc.mod10.gaPro;
		document.getElementById("ST10").value 	= update.rows[0].doc.mod10.stock;

		document.getElementById("PB11").value 	= update.rows[0].doc.mod11.prBas;
		document.getElementById("GPA11").value 	= update.rows[0].doc.mod11.gaPar;
		document.getElementById("GPR11").value 	= update.rows[0].doc.mod11.gaPro;
		document.getElementById("ST11").value 	= update.rows[0].doc.mod11.stock;

		document.getElementById("PB12").value 	= update.rows[0].doc.mod12.prBas;
		document.getElementById("GPA12").value 	= update.rows[0].doc.mod12.gaPar;
		document.getElementById("GPR12").value 	= update.rows[0].doc.mod12.gaPro;
		document.getElementById("ST12").value 	= update.rows[0].doc.mod12.stock;})
	.catch(console.log());
	
}

function guardarBaseDatos(){
	let modelo1 = {
		nombre: "Carbon duo full carbono",	
		prBas: parseInt(document.getElementById("PB1").value),
		gaPar: parseInt(document.getElementById("GPA1").value),
		gaPro: parseInt(document.getElementById("GPR1").value),
		stock: parseInt(document.getElementById("ST1").value)
		};
	let modelo2 = {
		nombre: "Carbon duo", 				
		prBas: parseInt(document.getElementById("PB2").value),
		gaPar: parseInt(document.getElementById("GPA2").value),
		gaPro: parseInt(document.getElementById("GPR2").value),
		stock: parseInt(document.getElementById("ST2").value)
		};
	let modelo3 = {
		nombre: "Condor Evo",	
		prBas: parseInt(document.getElementById("PB3").value),
		gaPar: parseInt(document.getElementById("GPA3").value),
		gaPro: parseInt(document.getElementById("GPR3").value),
		stock: parseInt(document.getElementById("ST3").value)
		};
	let modelo4 = {
		nombre: "Conic energy full carbono", 				
		prBas: parseInt(document.getElementById("PB4").value),
		gaPar: parseInt(document.getElementById("GPA4").value),
		gaPro: parseInt(document.getElementById("GPR4").value),
		stock: parseInt(document.getElementById("ST4").value)
		};
	let modelo5 = {
		nombre: "Espectra",	
		prBas: parseInt(document.getElementById("PB5").value),
		gaPar: parseInt(document.getElementById("GPA5").value),
		gaPro: parseInt(document.getElementById("GPR5").value),
		stock: parseInt(document.getElementById("ST5").value)
		};
	let modelo6 = {
		nombre: "Euphoria", 				
		prBas: parseInt(document.getElementById("PB6").value),
		gaPar: parseInt(document.getElementById("GPA6").value),
		gaPro: parseInt(document.getElementById("GPR6").value),
		stock: parseInt(document.getElementById("ST6").value)
		};	
	let modelo7 = {
		nombre: "Gran patagonia",	
		prBas: parseInt(document.getElementById("PB7").value),
		gaPar: parseInt(document.getElementById("GPA7").value),
		gaPro: parseInt(document.getElementById("GPR7").value),
		stock: parseInt(document.getElementById("ST7").value)
		};
	let modelo8 = {
		nombre: "Leirbag", 				
		prBas: parseInt(document.getElementById("PB8").value),
		gaPar: parseInt(document.getElementById("GPA8").value),
		gaPro: parseInt(document.getElementById("GPR8").value),
		stock: parseInt(document.getElementById("ST8").value)
		};
	let modelo9 = {
		nombre: "Max D3 full carbono",	
		prBas: parseInt(document.getElementById("PB9").value),
		gaPar: parseInt(document.getElementById("GPA9").value),
		gaPro: parseInt(document.getElementById("GPR9").value),
		stock: parseInt(document.getElementById("ST9").value)
		};
	let modelo10 = {
		nombre: "Max D3", 				
		prBas: parseInt(document.getElementById("PB10").value),
		gaPar: parseInt(document.getElementById("GPA10").value),
		gaPro: parseInt(document.getElementById("GPR10").value),
		stock: parseInt(document.getElementById("ST10").value)
		};
	let modelo11 = {
		nombre: "Max_D5 full carbono",	
		prBas: parseInt(document.getElementById("PB11").value),
		gaPar: parseInt(document.getElementById("GPA11").value),
		gaPro: parseInt(document.getElementById("GPR11").value),
		stock: parseInt(document.getElementById("ST11").value)
		};
	let modelo12 = {
		nombre: "Max D5", 				
		prBas: parseInt(document.getElementById("PB12").value),
		gaPar: parseInt(document.getElementById("GPA12").value),
		gaPro: parseInt(document.getElementById("GPR12").value),
		stock: parseInt(document.getElementById("ST12").value)
		};

	let todo ={
		_id: new Date().toISOString(),
		mod1: modelo1,
		mod2: modelo2,
		mod3: modelo3,
		mod4: modelo4,
		mod5: modelo5,
		mod6: modelo6,
		mod7: modelo7,
		mod8: modelo8,
		mod9: modelo9,
		mod10: modelo10,
		mod11: modelo11,
		mod12: modelo12
	};
	db.put(todo)
}