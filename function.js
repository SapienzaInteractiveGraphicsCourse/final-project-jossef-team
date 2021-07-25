import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );


const controls = new OrbitControls( camera, renderer.domElement );

controls.maxDistance=25;

const monetaGeometry = new THREE.BoxGeometry(2, 2, 2);
const textureMoneta = new THREE.TextureLoader().load('logo.jpeg');
const monetaMaterial = new THREE.MeshBasicMaterial( { map:textureMoneta } );
const moneta1 = new THREE.Mesh( monetaGeometry, monetaMaterial );
const moneta2 = new THREE.Mesh( monetaGeometry, monetaMaterial );
const moneta3 = new THREE.Mesh( monetaGeometry, monetaMaterial );
const moneta4 = new THREE.Mesh( monetaGeometry, monetaMaterial );
const moneta5 = new THREE.Mesh( monetaGeometry, monetaMaterial );
moneta1.position.z=2;
moneta1.position.y=2;
moneta1.position.x=2;
moneta2.position.z=11;
moneta2.position.y=3;
moneta2.position.x=-2;
moneta3.position.z=24;
moneta3.position.y=4;
moneta4.position.z=-15;
moneta4.position.y=-15;
moneta4.position.x=42;
moneta5.position.z=-6;
moneta5.position.y=-6;
moneta5.position.x=-12;
scene.add( moneta1);
scene.add( moneta2 );
scene.add( moneta3 );
scene.add( moneta4 );
scene.add( moneta5 );



//SUPERMAN
const capelliGeometry = new THREE.BoxGeometry(0.7, 0.3, 0.5);
const capelliMaterial = new THREE.MeshBasicMaterial( { color: 0x000000} );
const capelli = new THREE.Mesh( capelliGeometry, capelliMaterial );
capelli.position.set(-1, 1, -3);

const facciaGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.5);
const facciaMaterial = new THREE.MeshBasicMaterial( { color: 0xFFCCCC} );
const faccia = new THREE.Mesh( facciaGeometry, facciaMaterial );
faccia.position.set(0, -0.5, 0);

const occhio1Geometry = new THREE.BoxGeometry(0.1, 0.1, 0.31);
const occhio1Material = new THREE.MeshBasicMaterial( { color: 0x000000} );
const occhio1 = new THREE.Mesh( occhio1Geometry, occhio1Material );
occhio1.position.set(0.2, 0.1, 0.1);

const occhio2Geometry = new THREE.BoxGeometry(0.1, 0.1, 0.31);
const occhio2Material = new THREE.MeshBasicMaterial( { color: 0x000000} );
const occhio2 = new THREE.Mesh( occhio2Geometry, occhio2Material );
occhio2.position.set(-0.2, 0.1, 0.1);

const boccaGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.31);
const boccaMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
const bocca = new THREE.Mesh( boccaGeometry, boccaMaterial );
bocca.position.set(0, -0.2, 0.1);

const corpoGeometry = new THREE.BoxGeometry(1.2, 2, 0.5);
const corpoMaterial = new THREE.MeshBasicMaterial( { color: 0x0000CC} );
const corpo = new THREE.Mesh( corpoGeometry, corpoMaterial );
corpo.position.set(0, -1.38, 0);

const sGeometry = new THREE.BoxGeometry(0.5, 1, 0.3);
const sMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFF00} );
const s = new THREE.Mesh( sGeometry, sMaterial );
s.position.set(0, 0, 0.11);

const s1Geometry = new THREE.BoxGeometry(0.3, 0.1, 0);
const s1Material = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
const s1 = new THREE.Mesh( s1Geometry, s1Material );
s1.position.set(0, 0.4, 0.16);

const s2Geometry = new THREE.BoxGeometry(0.1, 0.4, 0);
const s2Material = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
const s2 = new THREE.Mesh( s2Geometry, s2Material );
s2.position.set(-0.1, 0.2, 0.16);

const s3Geometry = new THREE.BoxGeometry(0.3, 0.1, 0);
const s3Material = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
const s3 = new THREE.Mesh( s3Geometry, s3Material );
s3.position.set(0, 0, 0.16);

const s4Geometry = new THREE.BoxGeometry(0.1, 0.4, 0);
const s4Material = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
const s4 = new THREE.Mesh( s4Geometry, s4Material );
s4.position.set(0.1, -0.2, 0.16);

const s5Geometry = new THREE.BoxGeometry(0.3, 0.1, 0);
const s5Material = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
const s5 = new THREE.Mesh( s5Geometry, s5Material );
s5.position.set(0, -0.4, 0.16);

const cint1Geometry = new THREE.BoxGeometry(1.2, 0.2, 0.5);
const cint1Material = new THREE.MeshBasicMaterial( { color:0xFFFF00} );
const cint1 = new THREE.Mesh( cint1Geometry, cint1Material );
cint1.position.set(0, -1.1, 0);

const cint2Geometry = new THREE.BoxGeometry(1.2, 0.2, 0.5);
const cint2Material = new THREE.MeshBasicMaterial( { color:0x000000} );
const cint2 = new THREE.Mesh( cint2Geometry, cint2Material );
cint2.position.set(0, -0.2, 0);

const bottoneGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.31);
const bottoneMaterial = new THREE.MeshBasicMaterial( { color:0xFF0000} );
const bottone = new THREE.Mesh( bottoneGeometry, bottoneMaterial );
bottone.position.set(0, -0.1, 0.1);

const gambaSxGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const gambaSxMaterial = new THREE.MeshBasicMaterial( { color:0x0000CC} );
const gambaSx = new THREE.Mesh( gambaSxGeometry, gambaSxMaterial );
gambaSx.position.set(-0.35, -1.9, 0);

const gambaDxGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const gambaDxMaterial = new THREE.MeshBasicMaterial( { color:0x0000CC} );
const gambaDx = new THREE.Mesh( gambaDxGeometry, gambaDxMaterial );
gambaDx.position.set(0.35, -1.9, 0);

const braccioSxGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.5);
const braccioSxMaterial = new THREE.MeshBasicMaterial( { color:0x0000CC} );
const braccioSx = new THREE.Mesh( braccioSxGeometry, braccioSxMaterial );
braccioSx.position.set(+0.7, 0.3, 0);

braccioSx.rotation.z-=1.3;

const braccioDxGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.5);
const braccioDxMaterial = new THREE.MeshBasicMaterial( { color:0x0000CC} );
const braccioDx = new THREE.Mesh( braccioDxGeometry, braccioDxMaterial );
braccioDx.position.set(-0.7, 0.3, 0);

braccioDx.rotation.z+=1.3;

const mantelloGeometry = new THREE.PlaneGeometry(2, 3);
const mantelloMaterial = new THREE.MeshBasicMaterial( { color:0xFF0000, side: THREE.DoubleSide} );
const mantello = new THREE.Mesh( mantelloGeometry, mantelloMaterial );
mantello.position.set(0, -0.4, -0.7);

mantello.rotation.x+=0.3;

corpo.add(mantello);
corpo.add(braccioDx);
corpo.add(braccioSx);
corpo.add(gambaDx);
corpo.add(gambaSx);
cint1.add(cint2);
cint1.add(bottone);
corpo.add(cint1);
s.add(s1);
s.add(s2);
s.add(s3);
s.add(s4);
s.add(s5);
corpo.add(s);
faccia.add(corpo);
faccia.add(bocca);
faccia.add(occhio1);
faccia.add(occhio2);
capelli.add(faccia)
scene.add(capelli);


capelli.position.x+=2;
capelli.position.z-=5;
capelli.rotation.y-=3.1;


 var hlight = new THREE.AmbientLight(0x404040)
 scene.add(hlight);

 var directionalLight = new THREE.DirectionalLight(0xffffff);
 directionalLight.position.set(0,1,0);
 directionalLight.castShadow = true;
 scene.add(directionalLight);

 var light = new THREE.PointLight(0xc4c4c4, 2);
 light.position.set(0, 3, 25);
 scene.add(light);

var ObjectsArray=new Array();

const loader = new THREE.GLTFLoader();
var flagP1=false;
loader.load('scene.gltf', function(gltf){
     var earth = gltf.scene;
     ObjectsArray.push(earth);
     earth.scale.x=0.1;
     earth.scale.y=0.1;
     earth.scale.z=0.1;
     scene.add(earth);
     earth.position.z=60.3;
     earth.position.y=60.3;
     flagP1=true;
     
})
if(flagP1){
var pianeta1col = new THREE.Box3().setFromObject(ObjectsArray[0]);
}

var flagP2=false;
const loader1 = new THREE.GLTFLoader();
loader1.load('cartella1/scene.gltf', function(gltf){
     var saturno = gltf.scene;
     ObjectsArray.push(saturno);
     saturno.scale.x=1;
     saturno.scale.y=1;
     saturno.scale.z=1;
     scene.add(saturno);
     saturno.position.z=60.3;
     saturno.position.y=60.3;
     flagP2=true;
})

if(flagP2){
    var pianeta2col = new THREE.Box3().setFromObject(ObjectsArray[1]);
}

var flagP3= false;
const loader2 = new THREE.GLTFLoader();
loader2.load('cartella2/scene.gltf', function(gltf){
     var viola = gltf.scene;
     ObjectsArray.push(viola);
     viola.scale.x=10;
     viola.scale.y=10;
     viola.scale.z=10;
     scene.add(viola);
     viola.position.z=-60.3;
     viola.position.y=-60.3;
     flagP3=true;
})
if(flagP3){
    var pianeta3col = new THREE.Box3().setFromObject(ObjectsArray[2]);
}

var flagP4=false;
const loader3 = new THREE.GLTFLoader();
loader3.load('cartella3/scene.gltf', function(gltf){
     var boh = gltf.scene;
     ObjectsArray.push(boh);
     boh.scale.x=10;
     boh.scale.y=10;
     boh.scale.z=10;
     scene.add(boh);
     boh.position.z=130.3;
     boh.position.y=-80.3;
     boh.position.x=80.3;
     flagP4=true;
})
if(flagP4){
    var pianeta4col = new THREE.Box3().setFromObject(ObjectsArray[3]);
}

var flagP5 = false;
const loader4 = new THREE.GLTFLoader();
loader4.load('cartella4/scene.gltf', function(gltf){
     var giove = gltf.scene;
     ObjectsArray.push(giove);
     giove.scale.x=0.1;
     giove.scale.y=0.1;
     giove.scale.z=0.1;
     scene.add(giove);
     giove.position.z=-90.3;
     giove.position.y=-20.3;
     giove.position.x=20.3;
     flagP5 = true;
})
if(flagP5){
    var pianeta5col = new THREE.Box3().setFromObject(ObjectsArray[4]);
}

var flagP6 = false;
const loader5 = new THREE.GLTFLoader();
loader5.load('cartella5/scene.gltf', function(gltf){
     var nav1 = gltf.scene;
     ObjectsArray.push(nav1);
     nav1.scale.x=0.001;
     nav1.scale.y=0.001;
     nav1.scale.z=0.001;
     scene.add(nav1);
     nav1.position.z=-100.3;
     nav1.position.y=0;
     flagP6 = true;
})
if(flagP6){
    var pianeta6col = new THREE.Box3().setFromObject(ObjectsArray[5]);
}

var flagP7 = false;
const loader6 = new THREE.GLTFLoader();
loader6.load('cartella6/scene.gltf', function(gltf){
     var nav2 = gltf.scene;
     ObjectsArray.push(nav2);
     nav2.scale.x=100;
     nav2.scale.y=100;
     nav2.scale.z=100;
     scene.add(nav2);
     nav2.position.x=-300;
     flagP7 = true;
})
if(flagP7){
    var pianeta7col = new THREE.Box3().setFromObject(ObjectsArray[6]);
}

var flagP8 = false;
const loader7 = new THREE.GLTFLoader();
loader7.load('cartella7/scene.gltf', function(gltf){
     var sole = gltf.scene;
     ObjectsArray.push(sole);
     sole.scale.x=20;
     sole.scale.y=20;
     sole.scale.z=20;
     scene.add(sole);
     sole.position.y=1000;
     sole.position.x=5000;
     flagP8 = true;
})
if(flagP8){
    var pianeta8col = new THREE.Box3().setFromObject(ObjectsArray[7]);
}

var sky;
var sun;

// Add Sky
sky = new THREE.Sky();
sky.scale.setScalar( 450000 );
scene.add(sky);

sun = new THREE.Vector3();



const effectController = {
    turbidity: 9,
    rayleigh: 10,
    mieCoefficient: 1,
    mieDirectionalG: 0.9,
    elevation: 0,
    azimuth: 90,
    exposure: renderer.toneMappingExposure
};



const uniforms = sky.material.uniforms;
uniforms[ 'turbidity' ].value = effectController.turbidity;
uniforms[ 'rayleigh' ].value = effectController.rayleigh;
uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;

const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
const theta = THREE.MathUtils.degToRad( effectController.azimuth );

sun.setFromSphericalCoords( 1, phi, theta );

uniforms[ 'sunPosition' ].value.copy( sun );

renderer.toneMappingExposure = effectController.exposure;
renderer.render( scene, camera );

var fermo=capelli.position.y;
var braccioDxGiu = braccioDx.position.y;
var braccioSxGiu = braccioSx.position.y;


function muovi(event) {
    var x = event.which;
    
    if (x == 40) { //indietro
        capelli.position.z+=2;
        capelli.rotation.y=0;
        braccioSx.position.y= braccioSxGiu;
        braccioDx.position.y= braccioDxGiu;
    }
    else if (x == 38) { //avanti
        capelli.position.z-=2;
        capelli.rotation.y=Math.PI;
        braccioSx.position.y= braccioSxGiu;
        braccioDx.position.y= braccioDxGiu;

    }
    else if (x == 37) { //sinistra
        capelli.position.x-=2;
        capelli.rotation.y=-Math.PI/2;
        braccioSx.position.y= braccioSxGiu;
        braccioDx.position.y= braccioDxGiu;
    }
    else if (x == 39) { //destra
        capelli.position.x+=2;
        capelli.rotation.y=Math.PI/2;
        braccioSx.position.y= braccioSxGiu;
        braccioDx.position.y= braccioDxGiu;
    }
    else if (x == 65) { //volo su (a)
        capelli.position.y+=2;
        braccioSx.position.y=Math.PI-1.6;
        braccioDx.position.y=Math.PI-1.6;
    }
    else if (x == 83) { //volo giu (s)
        capelli.position.y-=2;
        braccioSx.position.y= braccioSxGiu;
        braccioDx.position.y= braccioDxGiu;

    }
}

capelli.position.x=-180.33763770618174;
capelli.position.y=1.0022565421751695;
capelli.position.z=5.577346365690122;



document.body.addEventListener('keydown', muovi);

//IRON MAN 

const gemma1Geometry = new THREE.TetrahedronGeometry(1.5,2);
    const textureGemma1 = new THREE.TextureLoader().load('gemma1.png');
    const gemma1Material = new THREE.MeshBasicMaterial( { map:textureGemma1 } );
    const gemma1 = new THREE.Mesh( gemma1Geometry, gemma1Material );

    const gemma2Geometry = new THREE.TetrahedronGeometry(1.5,2);
    const textureGemma2 = new THREE.TextureLoader().load('gemma2.jpeg');
    const gemma2Material = new THREE.MeshBasicMaterial( { map:textureGemma2 } );
    const gemma2 = new THREE.Mesh( gemma2Geometry, gemma2Material );

    const gemma3Geometry = new THREE.TetrahedronGeometry(1.5,2);
    const textureGemma3 = new THREE.TextureLoader().load('gemma3.jpeg');
    const gemma3Material = new THREE.MeshBasicMaterial( { map:textureGemma3 } );
    const gemma3 = new THREE.Mesh( gemma3Geometry, gemma3Material );

    const gemma4Geometry = new THREE.TetrahedronGeometry(1.5,2);
    const textureGemma4 = new THREE.TextureLoader().load('gemma4.jpeg');
    const gemma4Material = new THREE.MeshBasicMaterial( { map:textureGemma4 } );
    const gemma4 = new THREE.Mesh( gemma4Geometry, gemma4Material );

    const gemma5Geometry = new THREE.TetrahedronGeometry(1.5,2);
    const textureGemma5 = new THREE.TextureLoader().load('gemma5.png');
    const gemma5Material = new THREE.MeshBasicMaterial( { map:textureGemma5 } );
    const gemma5 = new THREE.Mesh( gemma5Geometry, gemma5Material );

    gemma1.position.x=-8;
    gemma1.position.y=12;
    gemma1.position.z=-12;
    gemma2.position.x=11;
    gemma2.position.y=3;
    gemma2.position.z=-2;
    gemma3.position.x=4;
    gemma3.position.y=8;
    gemma3.position.z=-20;
    gemma4.position.x=-7;
    gemma4.position.y=14;
    gemma4.position.z=-20;
    gemma5.position.x=-30;
    gemma5.position.y=10;
    gemma5.position.z=30;

    const facciaIronGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.5);
    const facciaIronMaterial = new THREE.MeshBasicMaterial( {color: 0x990000 } );
    const facciaIron = new THREE.Mesh( facciaIronGeometry, facciaIronMaterial );
    facciaIron.position.set(-4, 2, 0);

    const textureMaschera = new THREE.TextureLoader().load('mascheraIron.png');
    const mascheraIronGeometry = new THREE.PlaneGeometry(0.7, 0.7);
    const mascheraIronMaterial = new THREE.MeshBasicMaterial( { map:textureMaschera, side: THREE.DoubleSide} );
    const mascheraIron = new THREE.Mesh( mascheraIronGeometry, mascheraIronMaterial );
    mascheraIron.position.set(0, 0, -0.26);

    const corpoIronGeometry = new THREE.BoxGeometry(1.2, 2, 0.5);
    const corpoIronMaterial = new THREE.MeshBasicMaterial( { color: 0x990000} );
    const corpoIron = new THREE.Mesh( corpoIronGeometry, corpoIronMaterial );
    corpoIron.position.set(0, -1.35, 0);

    const texturePancia = new THREE.TextureLoader().load('pancia.jpg');
    const panciaIronGeometry = new THREE.PlaneGeometry(1.2, 2);
    const panciaIronMaterial = new THREE.MeshBasicMaterial( { map:texturePancia, side: THREE.DoubleSide} );
    const panciaIron = new THREE.Mesh( panciaIronGeometry, panciaIronMaterial );
    panciaIron.position.set(0, 0, -0.26);

    const textureGambaSxIron = new THREE.TextureLoader().load('gambaSx.jpg');
    const SxIronGeometry = new THREE.PlaneGeometry(0.5,1);
    const SxIronMaterial = new THREE.MeshBasicMaterial( { map:textureGambaSxIron, side: THREE.DoubleSide} );
    const sxIron = new THREE.Mesh( SxIronGeometry, SxIronMaterial );
    sxIron.position.set(0, 0, -0.27);

    const gambaSxIronGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    const gambaSxIronMaterial = new THREE.MeshBasicMaterial( { color:0x990000} );
    const gambaSxIron = new THREE.Mesh( gambaSxIronGeometry, gambaSxIronMaterial );
    gambaSxIron.position.set(-0.35, -1, 0);

    const textureGambaDxIron = new THREE.TextureLoader().load('gambaDx.jpg');
    const DxIronGeometry = new THREE.PlaneGeometry(0.5,1);
    const DxIronMaterial = new THREE.MeshBasicMaterial( { map:textureGambaDxIron, side: THREE.DoubleSide} );
    const dxIron = new THREE.Mesh( DxIronGeometry, DxIronMaterial );
    dxIron.position.set(0, 0, -0.27);

    const gambaDxIronGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    const gambaDxIronMaterial = new THREE.MeshBasicMaterial( { color:0x990000} );
    const gambaDxIron = new THREE.Mesh( gambaDxIronGeometry, gambaDxIronMaterial );
    gambaDxIron.position.set(0.35, -1, 0);

    const braccioSxIronGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.5);
    const braccioSxIronMaterial = new THREE.MeshBasicMaterial( { color:0x990000} );
    const braccioSxIron = new THREE.Mesh( braccioSxIronGeometry, braccioSxIronMaterial );
    braccioSxIron.position.set(+0.7, 0.3, 0);

    braccioSxIron.rotation.z-=1.3;

    const braccioDxIronGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.5);
    const braccioDxIronMaterial = new THREE.MeshBasicMaterial( { color:0x990000} );
    const braccioDxIron = new THREE.Mesh( braccioDxIronGeometry, braccioDxIronMaterial );
    braccioDxIron.position.set(-0.7, 0.3, 0);

    braccioDxIron.rotation.z+=1.3;

    gambaDxIron.add(dxIron);
    gambaSxIron.add(sxIron);
    corpoIron.add(panciaIron);
    facciaIron.add(mascheraIron);
    corpoIron.add(gambaDxIron);
    corpoIron.add(gambaSxIron);
    corpoIron.add(braccioDxIron);
    corpoIron.add(braccioSxIron);
    facciaIron.add(corpoIron);


    facciaIron.position.x+=2;
    facciaIron.position.z-=5;
    facciaIron.rotation.y-=3.1;
   
    
    var braccioDxGiuIron = braccioDxIron.position.y;
    var braccioSxGiuIron = braccioSxIron.position.y;  

    function muoviIron(event) {
        var x = event.which;
        if (x == 40) { //indietro
            facciaIron.position.z+=2;
            facciaIron.rotation.y=Math.PI;
            braccioSxIron.position.y= braccioSxGiuIron;
            braccioDxIron.position.y= braccioDxGiuIron;
        }
        else if (x == 38) { //avanti
            facciaIron.position.z-=2;
            facciaIron.rotation.y=0;
            braccioSxIron.position.y= braccioSxGiuIron;
            braccioDxIron.position.y= braccioDxGiuIron;

        }
        else if (x == 37) { //sinistra
            facciaIron.position.x-=2;
            facciaIron.rotation.y=Math.PI/2;
            braccioSxIron.position.y= braccioSxGiuIron;
            braccioDxIron.position.y= braccioDxGiuIron;
        }
        else if (x == 39) { //destra
            facciaIron.position.x+=2;
            facciaIron.rotation.y=-Math.PI/2;
            braccioSxIron.position.y= braccioSxGiuIron;
            braccioDxIron.position.y= braccioDxGiuIron;
        }
        else if (x == 65) { //volo su (a)
            facciaIron.position.y+=2;
            braccioSxIron.position.y=Math.PI-1.6;
            braccioDxIron.position.y=Math.PI-1.6;
        }
        else if (x == 83) { //volo giu (s)
            facciaIron.position.y-=2;
            braccioSxIron.position.y= braccioSxGiuIron;
            braccioDxIron.position.y= braccioDxGiuIron;

        }
    }

var cont=0;
var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;
var flag5=false;
var flag6=false;
var flag7=false;
var flag8=false;

var flag1_1=false;
var flag2_2=false;
var flag3_3=false;
var flag4_4=false;
var flag5_5=false;
var flag6_6=false;

var cont1=0;
var flagGiorno = false;
var flagNotte = true;

var arrayText = new Array();
var contText = 0;
function animate() {
	requestAnimationFrame( animate );

    const loaderText = new THREE.FontLoader();

    loaderText.load( 'three.js-master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

        const textGeometry = new THREE.TextGeometry( 'Recover all the 5 elements', {
            font: font,
            size: 50,
            height: 1,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 0
        } );
        const textMaterial = new THREE.MeshBasicMaterial( { color:0xFFFFFF} );
        const text = new THREE.Mesh( textGeometry, textMaterial );
        arrayText.push(text);
    } );

    scene.add(arrayText[0]);
    
    arrayText[0].rotation.y=350;

    arrayText[0].position.x=1000;
    arrayText[0].position.y=400;
    


    controls.target=capelli.position;
    controls.update();

	
    var superman = new THREE.Box3().setFromObject(capelli);

    var moneta1col = new THREE.Box3().setFromObject(moneta1);
    var moneta2col = new THREE.Box3().setFromObject(moneta2);
    var moneta3col = new THREE.Box3().setFromObject(moneta3);
    var moneta4col = new THREE.Box3().setFromObject(moneta4);
    var moneta5col = new THREE.Box3().setFromObject(moneta5);  

    var collision1 = superman.intersectsBox(moneta1col);
    var collision2 = superman.intersectsBox(moneta2col);
    var collision3 = superman.intersectsBox(moneta3col);
    var collision4 = superman.intersectsBox(moneta4col);
    var collision5 = superman.intersectsBox(moneta5col);

    
    
    if(collision1 && flag1==false){
        scene.remove(moneta1);
        cont+=1;
        contText+=1;
        flag1=true;
        
        
    }
    if(collision2 && flag2==false){
        scene.remove(moneta2);
        cont+=1;
        contText+=1;
        flag2=true;
        

    }
    if(collision3 && flag3==false){
        scene.remove(moneta3);
        cont+=1;
        contText+=1;
        flag3=true;
    }
    if(collision4 && flag4==false){
        scene.remove(moneta4);
        cont+=1;
        contText+=1;
        flag4=true;
        }
    if(collision5 && flag5==false){
        scene.remove(moneta5);
        cont+=1;
        contText+=1;
        flag5=true;
    }
    

    if(cont==5 && flag6==false){
        if(flag7==false){

            alert("Congratulations, you have conquered the second level!");
            scene.remove(capelli);
            scene.add(facciaIron);
            scene.add( gemma1);
            scene.add( gemma2);
            scene.add( gemma3);
            scene.add( gemma4);
            scene.add( gemma5);
            flag7=true;
           
        }

        
        controls.target=facciaIron.position;
        controls.update();
        
        var ironman = new THREE.Box3().setFromObject(facciaIron);

        var gemma1col = new THREE.Box3().setFromObject(gemma1);
        var gemma2col = new THREE.Box3().setFromObject(gemma2);
        var gemma3col = new THREE.Box3().setFromObject(gemma3);
        var gemma4col = new THREE.Box3().setFromObject(gemma4);
        var gemma5col = new THREE.Box3().setFromObject(gemma5);  

        var collision1_1 = ironman.intersectsBox(gemma1col);
        var collision2_2 = ironman.intersectsBox(gemma2col);
        var collision3_3 = ironman.intersectsBox(gemma3col);
        var collision4_4 = ironman.intersectsBox(gemma4col);
        var collision5_5 = ironman.intersectsBox(gemma5col);
        
        if(collision1_1 && flag1_1==false){
            scene.remove(gemma1);
            cont1+=1;    
            flag1_1=true;
            
        }
        if(collision2_2 && flag2_2==false){
            scene.remove(gemma2);
            cont1+=1;
            flag2_2=true;

        }
        if(collision3_3 && flag3_3==false){
            scene.remove(gemma3);
            cont1+=1;
            flag3_3=true;
        }
        if(collision4_4 && flag4_4==false){
            scene.remove(gemma4);
            cont1+=1;
            flag4_4=true;
        }
        if(collision5_5 && flag5_5==false){
            scene.remove(gemma5);
            cont1+=1;
            flag5_5=true;
        }
        if(cont1==5 && flag6_6==false){
            scene.remove(facciaIron);
            if(flag8==false){
                alert("Congratulations, you saved the universe!");
                location.reload();
                flag8=true;
            }
              
        }
        document.body.addEventListener('keydown', muoviIron);
         
    }
    

    renderer.render( scene, camera );        
    
}

animate();



