
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Itaxi') }}</title>

    <link rel="icon" href="{{ asset('assets/img/brand/favicon.png')}}" type="image/png">
    <!-- Icons -->
     <link rel="stylesheet" href="{{ asset('themes/argon/assets/vendor/nucleo/css/nucleo.css')}}" type="text/css">
    <link rel="stylesheet" href="{{ asset('themes/argon/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css')}}" type="text/css">
  
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
</head>
<body>
    <div id="app">
            <backend-master></backend-master>
    </div>
    <script src="{{mix('js/app.js')}}"></script>
</body>

</html>
