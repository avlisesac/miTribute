function loadModels() {
  loadGuybrushIdleStill();
}

//*Load Models*//
function loadGuybrushIdleStill() {
  loader.load(
    "../models/guybrush/guybrushIdleStill.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      guybrushIdle = object;
      guybrushIdle.name = "guybrushIdle";
      guybrushIdle.castShadow = true;
      //*guybrushFrame1.receiveShadow = true;*//
      guybrushGroup.add(guybrushIdle);
      loadGuybrushWalkFrame01();
    }
  );
}

function loadGuybrushWalkFrame01() {
  loader.load(
    "../models/guybrush/guybrushWalk_frame1.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      guybrushWalkFrame1 = object;
      guybrushWalkFrame1.name = "guybrushWalkFrame1";
      guybrushWalkFrame1.visible = false;
      guybrushGroup.add(guybrushWalkFrame1);
      loadGuybrushWalkFrame02();
    }
  );
}
function loadGuybrushWalkFrame02() {
  loader.load(
    "../models/guybrush/guybrushWalk_frame2.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      guybrushWalkFrame2 = object;
      guybrushWalkFrame2.name = "guybrushWalkFrame2";
      guybrushWalkFrame2.visible = false;
      guybrushGroup.add(guybrushWalkFrame2);
      loadScummBar1();
    }
  );
}
function loadScummBar1() {
  loader.load(
    "../models/scummBar/scummBar1.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBar1 = object;
      scummBar1.name = "scummBar1";
      scummBar1.screenName = "";
      scummBar1.lookYN = false;
      loadScummConvo1();
    }
  );
}
function loadScummConvo1() {
  loader.load(
    "../models/scummBar/convos/scummConvo1.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummConvo1 = object;
      scummConvo1.name = "scummConvo1";
      //*scummConvo1.castShadow = true;
      //*scummConvo1.receiveShadow = true;
      scummConvo1Box = new THREE.Box3().setFromObject(scummConvo1);
      scummConvo1HeightHalf = scummConvo1Box.max.y / 2;
      scummConvo1.position.y = -30;
      scummConvo1.rotation.y = -0.075;
      loadScummBarPirate01_head();
    }
  );
}
function loadScummBarPirate01_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate01_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate01_head = object;
      scummBarPirate01_head.lookYN = true;

      scummBarPirate01_head.name - "scummBarPirate01_head";
      scummBarPirate01_head.screenName = "Pirate";
      scummBarPirate01_head.lookText =
        "That guy looks like a local.  He probably knows the area well.";
      scummBarPirate01_head.convoScreen = scummConvo1;
      scummBarPirate01_head.convoArray = pirate01Convo;
      scummBarPirate01_head.epOverride = 1;
      scummBarPirate01_head.talkYesNo = 1;
      scummBarPirate01_head.endPoint = new THREE.Vector3(-46.78, 1, 6.24);

      loadScummBarPirate01_body();
    }
  );
}
function loadScummBarPirate01_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate01_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate01_body = object;
      scummBarPirate01_body.lookYN = true;

      scummBarPirate01_body.name - "scummBarPirate01_body";
      scummBarPirate01_body.screenName = "Pirate";
      scummBarPirate01_body.lookText =
        "That guy looks like a local.  He probably knows the area well.";
      scummBarPirate01_body.convoScreen = scummConvo1;
      scummBarPirate01_body.convoArray = pirate01Convo;
      scummBarPirate01_body.epOverride = 1;
      scummBarPirate01_body.talkYesNo = 1;
      scummBarPirate01_body.endPoint = new THREE.Vector3(-46.78, 1, 6.24);

      loadScummBarPirate02();
    }
  );
}
function loadScummBarPirate02() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate02.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate02 = object;
      scummBarPirate02.lookYN = true;
      scummBarPirate02.name = "scummBarPirate02";
      scummBarPirate02.screenName = "Pirate";
      scummBarPirate02.lookText = "Cool stripes! And such a stylish eyepatch.";
      scummBarPirate02.epOverride = 1;
      scummBarPirate02.endPoint = new THREE.Vector3(-32.67, 1, -12.61);
      loadScummBarPirate03_head();
    }
  );
}

function loadScummBarPirate03_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate03_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate03_head = object;
      scummBarPirate03_head.lookYN = true;
      scummBarPirate03_head.screenName = "Pirate";
      scummBarPirate03_head.name = "scummBarPirate03_head";
      scummBarPirate03_head.lookText = "What a nice hat!";
      scummBarPirate03_head.epOverride = 1;
      scummBarPirate03_head.endPoint = new THREE.Vector3(-33.36, 1, 17.31);
      loadScummBarPirate03_body();
    }
  );
}
function loadScummBarPirate03_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate03_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate03_body = object;
      scummBarPirate03_body.lookYN = true;
      scummBarPirate03_body.screenName = "Pirate";
      scummBarPirate03_body.name = "scummBarPirate03_body";
      scummBarPirate03_body.lookText = "What a nice hat!";
      scummBarPirate03_body.epOverride = 1;
      scummBarPirate03_body.endPoint = new THREE.Vector3(-33.36, 1, 17.31);
      loadScummBarPirate04_head();
    }
  );
}

function loadScummBarPirate04_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate04_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate04_head = object;
      scummBarPirate04_head.lookYN = true;
      scummBarPirate04_head.screenName = "Pirate";
      scummBarPirate04_head.name = "scummBarPirate04_head";
      scummBarPirate04_head.lookText = "His patch says 'Ask Me About LOOM'.";
      scummBarPirate04_head.epOverride = 1;
      scummBarPirate04_head.endPoint = new THREE.Vector3(-8.5, 1, 3.91);
      loadScummBarPirate04_body();
    }
  );
}
function loadScummBarPirate04_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate04_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate04_body = object;
      scummBarPirate04_body.lookYN = true;
      scummBarPirate04_body.screenName = "Pirate";
      scummBarPirate04_body.name = "scummBarPirate04_body";
      scummBarPirate04_body.lookText = "His patch says 'Ask Me About LOOM'.";
      scummBarPirate04_body.epOverride = 1;
      scummBarPirate04_body.endPoint = new THREE.Vector3(-8.5, 1, 3.91);
      loadScummBarPirate05();
    }
  );
}
function loadScummBarPirate05() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate05.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate05 = object;
      scummBarPirate05.lookYN = true;
      scummBarPirate05.screenName = "Unconscious Pirate";
      scummBarPirate05.name = "scummBarPirate05";
      scummBarPirate05.lookText = "Looks like he's out for the night.";
      scummBarPirate05.epOverride = 1;
      scummBarPirate05.endPoint = new THREE.Vector3(-40.8, 1, 20.56);
      loadScummBarPirate06();
    }
  );
}
function loadScummBarPirate06() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate06.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate06 = object;
      scummBarPirate06.lookYN = true;
      scummBarPirate06.screenName = "Pirate";
      scummBarPirate06.name = "scummBarPirate06";
      scummBarPirate06.lookText = "They look pretty busy back there.";
      scummBarPirate06.epOverride = 1;
      scummBarPirate06.endPoint = new THREE.Vector3(-5.8, 1, 2.07);
      loadScummBarPirate07_head();
    }
  );
}
function loadScummBarPirate07_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate07_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate07_head = object;
      scummBarPirate07_head.lookYN = true;
      scummBarPirate07_head.screenName = "Pirate";
      scummBarPirate07_head.name = "scummBarPirate07_head";
      scummBarPirate07_head.lookText =
        "These two are busy listening to the pirate on the left.";
      scummBarPirate07_head.epOverride = 1;
      scummBarPirate07_head.endPoint = new THREE.Vector3(-41.23, 1, 5.6);
      loadScummBarPirate07_body();
    }
  );
}
function loadScummBarPirate07_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate07_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate07_body = object;
      scummBarPirate07_body.lookYN = true;
      scummBarPirate07_body.screenName = "Pirate";
      scummBarPirate07_body.name = "scummBarPirate07_body";
      scummBarPirate07_body.lookText =
        "These two are busy listening to the pirate on the left.";
      scummBarPirate07_body.epOverride = 1;
      scummBarPirate07_body.endPoint = new THREE.Vector3(-41.23, 1, 5.6);
      loadScummBarPirate08_head();
    }
  );
}
function loadScummBarPirate08_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate08_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate08_head = object;
      scummBarPirate08_head.lookYN = true;
      scummBarPirate08_head.screenName = "Pirate";
      scummBarPirate08_head.name = "scummBarPirate08_head";
      scummBarPirate08_head.lookText =
        "These two are busy listening to the pirate on the left.";
      scummBarPirate08_head.epOverride = 1;
      scummBarPirate08_head.endPoint = new THREE.Vector3(-41.23, 1, 5.6);
      loadScummBarPirate08_body();
    }
  );
}
function loadScummBarPirate08_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate08_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate08_body = object;
      scummBarPirate08_body.lookYN = true;
      scummBarPirate08_body.screenName = "Pirate";
      scummBarPirate08_body.name = "scummBarPirate08_body";
      scummBarPirate08_body.lookText =
        "These two are busy listening to the pirate on the left.";
      scummBarPirate08_body.epOverride = 1;
      scummBarPirate08_body.endPoint = new THREE.Vector3(-41.23, 1, 5.6);
      loadScummBarPirate09_head();
    }
  );
}
function loadScummBarPirate09_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate09_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate09_head = object;
      scummBarPirate09_head.lookYN = true;
      scummBarPirate09_head.screenName = "Pirate";
      scummBarPirate09_head.name = "scummBarPirate09_head";
      scummBarPirate09_head.lookText = "He seems busy.";
      scummBarPirate09_head.epOverride = 1;
      scummBarPirate09_head.endPoint = new THREE.Vector3(-35.07, 1, 18.83);
      loadScummBarPirate09_body();
    }
  );
}
function loadScummBarPirate09_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate09_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate09_body = object;
      scummBarPirate09_body.lookYN = true;
      scummBarPirate09_body.screenName = "Pirate";
      scummBarPirate09_body.name = "scummBarPirate09_body";
      scummBarPirate09_body.lookText = "He seems busy.";
      scummBarPirate09_body.epOverride = 1;
      scummBarPirate09_body.endPoint = new THREE.Vector3(-35.07, 1, 18.83);
      loadScummBarPirate10_head();
    }
  );
}
function loadScummBarPirate10_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate10_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate10_head = object;
      scummBarPirate10_head.lookYN = true;
      scummBarPirate10_head.screenName = "Pirate";
      scummBarPirate10_head.name = "scummBarPirate10_head";
      scummBarPirate10_head.lookText = "They look busy";
      scummBarPirate10_head.epOverride = 1;
      scummBarPirate10_head.endPoint = new THREE.Vector3(-10.67, 1, 20.73);
      loadScummBarPirate10_body();
    }
  );
}
function loadScummBarPirate10_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate10_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate10_body = object;
      scummBarPirate10_body.lookYN = true;
      scummBarPirate10_body.screenName = "Pirate";
      scummBarPirate10_body.name = "scummBarPirate10_body";
      scummBarPirate10_body.lookText = "They look busy";
      scummBarPirate10_body.epOverride = 1;
      scummBarPirate10_body.endPoint = new THREE.Vector3(-10.67, 1, 20.73);
      loadScummBarPirate11();
    }
  );
}
function loadScummBarPirate11() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate11.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate11 = object;
      scummBarPirate11.lookYN = true;
      scummBarPirate11.screenName = "Pirate";
      scummBarPirate11.name = "scummBarPirate11";
      scummBarPirate11.lookText = "They look pretty busy back there.";
      scummBarPirate11.epOverride = 1;
      scummBarPirate11.endPoint = new THREE.Vector3(-5.8, 1, 2.07);
      loadScummBarPirate12();
    }
  );
}
function loadScummBarPirate12() {
  loader.load(
    "../models/scummBar/chars/scummBarAnchorPirate.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      geometry.translate(1.5, 0, -1);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate12 = object;
      scummBarPirate12.lookYN = true;
      scummBarPirate12.screenName = "Pirate";
      scummBarPirate12.name = "scummBarPirate12";
      scummBarPirate12.lookText = "How did he get up there?!";
      scummBarPirate12.epOverride = 1;
      scummBarPirate12.endPoint = new THREE.Vector3(-30.07, 1, -1);
      loadScummBarPirate13_head();
    }
  );
}
function loadScummBarPirate13_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate13_head.js",
    function (geometry, materials) {
      var material = materials[0];
      geometry.translate(0, -1.5, 0);
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate13_head = object;
      scummBarPirate13_head.lookYN = true;
      scummBarPirate13_head.screenName = "Pirate";
      scummBarPirate13_head.name = "scummBarPirate13_head";
      scummBarPirate13_head.lookText = "He must have had a big night.";
      scummBarPirate13_head.epOverride = 1;
      scummBarPirate13_head.endPoint = new THREE.Vector3(-58.89, 1, 15.63);
      loadScummBarPirate13_body();
    }
  );
}
function loadScummBarPirate13_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirate13_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirate13_body = object;
      scummBarPirate13_body.lookYN = true;
      scummBarPirate13_body.screenName = "Pirate";
      scummBarPirate13_body.name = "scummBarPirate13_body";
      scummBarPirate13_body.lookText = "He must have had a big night.";
      scummBarPirate13_body.epOverride = 1;
      scummBarPirate13_body.endPoint = new THREE.Vector3(-58.89, 1, 15.63);
      loadScummBarLady01_head();
    }
  );
}
function loadScummBarLady01_head() {
  loader.load(
    "../models/scummBar/chars/scummBarLady01_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarLady01_head = object;
      scummBarLady01_head.lookYN = true;
      scummBarLady01_head.name = "scummBarLady01_head";
      scummBarLady01_head.screenName = "Pirate";
      scummBarLady01_head.lookText = "The green is refreshing.";
      scummBarLady01_head.epOverride = 1;
      scummBarLady01_head.endPoint = new THREE.Vector3(-13.67, 1, 4.01);
      loadScummBarLady01_body();
    }
  );
}
function loadScummBarLady01_body() {
  loader.load(
    "../models/scummBar/chars/scummBarLady01_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarLady01_body = object;
      scummBarLady01_body.lookYN = true;
      scummBarLady01_body.name = "scummBarLady01_body";
      scummBarLady01_body.screenName = "Pirate";
      scummBarLady01_body.lookText = "The green is refreshing.";
      scummBarLady01_body.epOverride = 1;
      scummBarLady01_body.endPoint = new THREE.Vector3(-13.67, 1, 4.01);
      loadScummBarLady02_head();
    }
  );
}

function loadScummBarLady02_head() {
  loader.load(
    "../models/scummBar/chars/scummBarLady02_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarLady02_head = object;
      scummBarLady02_head.lookYN = true;
      scummBarLady02_head.name = "scummBarLady02_head";
      scummBarLady02_head.screenName = "Pirate";
      scummBarLady02_head.lookText = "They look busy";
      scummBarLady02_head.epOverride = 1;
      scummBarLady02_head.endPoint = new THREE.Vector3(-10.67, 1, 20.73);
      loadScummBarLady02_body();
    }
  );
}
function loadScummBarLady02_body() {
  loader.load(
    "../models/scummBar/chars/scummBarLady02_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarLady02_body = object;
      scummBarLady02_body.lookYN = true;
      scummBarLady02_body.name = "scummBarLady02_body";
      scummBarLady02_body.screenName = "Pirate";
      scummBarLady02_body.lookText = "They look busy";
      scummBarLady02_body.epOverride = 1;
      scummBarLady02_body.endPoint = new THREE.Vector3(-10.67, 1, 20.73);
      loadScummBarDog_wBone_head();
    }
  );
}
function loadScummBarDog_wBone_head() {
  loader.load(
    "../models/scummBar/chars/scummBarDog_wBone_head.js",
    function (geometry, materials) {
      var material = materials[0];
      geometry.translate(0, -2, 0);
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarDog_wBone_head = object;
      scummBarDog_wBone_head.lookYN = true;
      scummBarDog_wBone_head.name = "scummBarDog_wBone_head";
      scummBarDog_wBone_head.screenName = "Dog";
      scummBarDog_wBone_head.lookText = "Aww.  Little puppers!";
      scummBarDog_wBone_head.epOverride = 1;
      scummBarDog_wBone_head.endPoint = new THREE.Vector3(-6.93, 1, 3.93);
      loadScummBarDog_wBone_body();
    }
  );
}
function loadScummBarDog_wBone_body() {
  loader.load(
    "../models/scummBar/chars/scummBarDog_wBone_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarDog_wBone_body = object;
      scummBarDog_wBone_body.lookYN = true;
      scummBarDog_wBone_body.name = "scummBarDog_wBone_body";
      scummBarDog_wBone_body.screenName = "Dog";
      scummBarDog_wBone_body.lookText = "Aww.  Little puppers!";
      scummBarDog_wBone_body.epOverride = 1;
      scummBarDog_wBone_body.endPoint = new THREE.Vector3(-6.93, 1, 3.93);
      loadScummBarPirateKing01_head();
    }
  );
}

function loadScummBarPirateKing01_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing01_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing01_head = object;
      scummBarPirateKing01_head.lookYN = true;
      scummBarPirateKing01_head.name = "scummBarPirateKing01_head";
      scummBarPirateKing01_head.screenName = "important-looking pirates";
      scummBarPirateKing01_head.lookText = "These must be the pirate leaders.";
      scummBarPirateKing01_head.epOverride = 1;
      scummBarPirateKing01_head.endPoint = new THREE.Vector3(25.93, 1, 14.74);
      loadScummBarPirateKing01_body();
    }
  );
}
function loadScummBarPirateKing01_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing01_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing01_body = object;
      scummBarPirateKing01_body.lookYN = true;
      scummBarPirateKing01_body.name = "scummBarPirateKing01_body";
      scummBarPirateKing01_body.screenName = "important-looking pirates";
      scummBarPirateKing01_body.lookText = "These must be the pirate leaders.";
      scummBarPirateKing01_body.epOverride = 1;
      scummBarPirateKing01_body.endPoint = new THREE.Vector3(25.93, 1, 14.74);
      loadScummBarPirateKing01_drinkArm();
    }
  );
}
function loadScummBarPirateKing01_drinkArm() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing01_drinkArm.js",
    function (geometry, materials) {
      var material = materials[0];
      geometry.translate(0, -2, 3);
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing01_drinkArm = object;
      scummBarPirateKing01_drinkArm.lookYN = true;
      scummBarPirateKing01_drinkArm.name = "scummBarPirateKing01_drinkArm";
      scummBarPirateKing01_drinkArm.screenName = "important-looking pirates";
      scummBarPirateKing01_drinkArm.lookText =
        "These must be the pirate leaders.";
      scummBarPirateKing01_drinkArm.epOverride = 1;
      scummBarPirateKing01_drinkArm.endPoint = new THREE.Vector3(
        25.93,
        1,
        14.74
      );
      loadScummBarPirateKing02_head();
    }
  );
}
function loadScummBarPirateKing02_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing02_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing02_head = object;
      scummBarPirateKing02_head.lookYN = true;
      scummBarPirateKing02_head.name = "scummBarPirateKing02_head";
      scummBarPirateKing02_head.screenName = "important-looking pirates";
      scummBarPirateKing02_head.lookText = "These must be the pirate leaders.";
      scummBarPirateKing02_head.epOverride = 1;
      scummBarPirateKing02_head.endPoint = new THREE.Vector3(25.93, 1, 14.74);
      loadScummBarPirateKing02_body();
    }
  );
}
function loadScummBarPirateKing02_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing02_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing02_body = object;
      scummBarPirateKing02_body.lookYN = true;
      scummBarPirateKing02_body.name = "scummBarPirateKing02_body";
      scummBarPirateKing02_body.screenName = "important-looking pirates";
      scummBarPirateKing02_body.lookText = "These must be the pirate leaders.";
      scummBarPirateKing02_body.epOverride = 1;
      scummBarPirateKing02_body.endPoint = new THREE.Vector3(25.93, 1, 14.74);
      loadScummBarPirateKing02_drinkArm();
    }
  );
}
function loadScummBarPirateKing02_drinkArm() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing02_drinkArm.js",
    function (geometry, materials) {
      var material = materials[0];
      geometry.translate(0, -2, 2);
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing02_drinkArm = object;
      scummBarPirateKing02_drinkArm.name = "scummBarPirateKing02_drinkArm";
      scummBarPirateKing02_drinkArm.screenName = "important-looking pirates";
      scummBarPirateKing02_drinkArm.lookText =
        "These must be the pirate leaders.";
      scummBarPirateKing02_drinkArm.epOverride = 1;
      scummBarPirateKing02_drinkArm.endPoint = new THREE.Vector3(
        25.93,
        1,
        14.74
      );
      loadScummBarPirateKing03_head();
    }
  );
}
function loadScummBarPirateKing03_head() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing03_head.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing03_head = object;
      scummBarPirateKing03_head.name = "scummBarPirateKing03_head";
      scummBarPirateKing03_head.screenName = "important-looking pirates";
      scummBarPirateKing03_head.lookText = "These must be the pirate leaders.";
      scummBarPirateKing03_head.epOverride = 1;
      scummBarPirateKing03_head.endPoint = new THREE.Vector3(25.93, 1, 14.74);
      loadScummBarPirateKing03_body();
    }
  );
}
function loadScummBarPirateKing03_body() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing03_body.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing03_body = object;
      scummBarPirateKing03_body.name = "scummBarPirateKing03_body";
      scummBarPirateKing03_body.screenName = "important-looking pirates";
      scummBarPirateKing03_body.lookText = "These must be the pirate leaders.";
      scummBarPirateKing03_body.epOverride = 1;
      scummBarPirateKing03_body.endPoint = new THREE.Vector3(25.93, 1, 14.74);
      loadScummBarPirateKing03_drinkArm();
    }
  );
}
function loadScummBarPirateKing03_drinkArm() {
  loader.load(
    "../models/scummBar/chars/scummBarPirateKing03_drinkArm.js",
    function (geometry, materials) {
      var material = materials[0];
      geometry.translate(0, -1, 3);
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      scummBarPirateKing03_drinkArm = object;
      scummBarPirateKing03_drinkArm.name = "scummBarPirateKing03_drinkArm";
      scummBarPirateKing03_drinkArm.screenName = "important-looking pirates";
      scummBarPirateKing03_drinkArm.lookText =
        "These must be the pirate leaders.";
      scummBarPirateKing03_drinkArm.epOverride = 1;
      scummBarPirateKing03_drinkArm.endPoint = new THREE.Vector3(
        25.93,
        1,
        14.74
      );
      loadPaperObject();
    }
  );
}

function loadPaperObject() {
  loader.load(
    "../models/scummBar/decor/paperMini.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      paperObject = object;
      paperObject.name = "paperObject";
      paperObject.screenName = "Paper";
      paperObject.lookText = "Looks like paper.";
      paperObject.invLookText = "It says: This Game Isn't Finished.";
      paperObject.item = true;
      paperObject.invImage = "../_images/paper.png";
      paperObject.epOverride = 1;
      paperObject.endPoint = new THREE.Vector3(12, 1, 7.75);
      loadFireFrame1();
    }
  );
}

function loadFireFrame1() {
  loader.load(
    "../models/scummBar/decor/scummBarFireFrame1.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      fireFrame1 = object;
      fireFrame1.name = "fireFrame1";
      fireFrame1.visible = false;
      fireGroup.add(fireFrame1);
      loadFireFrame2();
    }
  );
}
function loadFireFrame2() {
  loader.load(
    "../models/scummBar/decor/scummBarFireFrame2.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      fireFrame2 = object;
      fireFrame2.name = "fireFrame2";
      fireFrame2.visible = false;
      fireGroup.add(fireFrame2);
      loadFireFrame3();
    }
  );
}
function loadFireFrame3() {
  loader.load(
    "../models/scummBar/decor/scummBarFireFrame3.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      fireFrame3 = object;
      fireFrame3.name = "fireFrame3";
      fireFrame3.visible = false;
      fireGroup.add(fireFrame3);
      loadScummBarNavMesh();
    }
  );
}
function loadScummBarNavMesh() {
  loader.load(
    "../models/scummBar/walkPaths.js",
    function (geometry, materials) {
      var material = materials[0];
      var faceMaterial = new THREE.MultiMaterial(materials);
      var object = new THREE.Mesh(geometry, faceMaterial);
      navMesh = object;
      navMesh.name = "navMesh";
      navMesh.visible = false;

      var zoneNodes = patrol.buildNodes(geometry);
      patrol.setZoneData("navMesh", zoneNodes);

      playerNavMeshGroup = patrol.getGroup("navMesh", guybrushGroup.position);

      sceneAdd();
      lightLoops();
      fireLoop();
      pirateLoop01();
      pirateLoop02();
      pirateLoop03();
      pirateLoop04();
      pirateLoop05();
      pirateKing01Loop();
      pirateKing02Loop();
      pirateKing03Loop();
      dogLoop();
      anchorLoop();
    }
  );
}
