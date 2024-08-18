<!-- https://www.youtube.com/watch?v=WOB7mNFASTI -->
<!DOCTYPE html>
<html lang="en">

<head>
   <?php include ("includes/compatibility.php"); ?>
   <meta name="description" content="">
   <title>SGL</title>
   <?php include ("includes/style.php"); ?>
</head>

<body>
   <?php include ("includes/header.php"); ?>
  <section></section>
  <div >
    <section style="background-color: #f00;" class="sec1">
      <div class="container">
        <div class="col-md-3">
          <div class="box1">
            <h1>Box1</h1>
          </div>
  
          <div class="box2">
            <h1>Box2</h1>
          </div>
        </div>
  
        <div class="col-md-6">
          <div class="canvasBox">
            <canvas class="obj1"></canvas>
          </div>
        </div>
  
        <div class="col-md-3">
          <div class="box3">
            <h1>Box3</h1>
          </div>
  
          <div class="box4">
            <h1>Box4</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="sec2" style="background-color: #000;"></section>
  </div>

  <?php include ("includes/footer.php"); ?>
  <?php include ("includes/scripts.php"); ?>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

  <script src="main.js"></script>
</body>

</html>