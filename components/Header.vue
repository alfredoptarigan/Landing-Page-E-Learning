<template>
  <div class="header w-100 h-100 pr-5" style="background-image: url('bg-1.jpg');">
    <div class="container w-100">
      <!-- Start Navbar -->
      <nav
        class="navbar navbar-expand-lg navbar-light bg-transparent w-100"
        data-aos-once="false"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <a class="navbar-brand" href="#">
          <img src="Logo.svg" alt srcset />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <div class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto poppins-medium">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                  <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll href="#praktikum">
                  Praktikum
                  <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-scroll href="#about">
                  About
                  <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                  <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Register
                  <span class="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End of Navbar -->

      <!-- Section Header -->
      <section
        class="w-100 ml-3 jmb"
        data-aos="fade-down"
        data-aos-once="false"
        data-aos-duration="2000"
      >
        <div class="row">
          <div class="col-sm-12 col-lg-6 w-100">
            <h1
              class="josefins-sans-bold text-justify"
            >Belajar Secara Jarak Jauh Sesuai Jadwal Praktikum</h1>
            <p class="josefins-sans-regular text-justify">
              Mari mengurangi jarak dan tetap belajar
              untuk menambah ilmu.
            </p>
            <a href="/register" class="btn btn-prim">Get Started</a>
          </div>
          <div class="col-sm-12 col-lg-6 w-100 mt-5">
            <img src="right-1x.png" class="img-responsive mt-5" width="100%" height="auto" />
          </div>
        </div>
      </section>
      <!-- End of Section Header -->
    </div>
  </div>
</template>
