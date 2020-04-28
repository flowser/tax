<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function frontend()
    {
       return view('layouts/frontmaster');
    }

    public function backend()
    {
        return view('layouts/backmaster');
    }
}
