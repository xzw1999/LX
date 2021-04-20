<?php

use think\facade\Route;

Route::miss(function () {
    $appRequest = request()->request('s');
    if ($appRequest === null) {
        $appName = '';
    } else {
        $appRequest = str_replace('//', '/', $appRequest);
        $appName = explode('/', $appRequest)[1] ?? '';
    }
    switch (strtolower($appName)) {
        case 'admin':
            return view(app()->getRootPath() . 'public' . DS . 'admin' . DS . 'index.html');
        case 'home':
            if (request()->isMobile()) {
                return redirect(app()->route->buildUrl('/'));
            } else {
                return view(app()->getRootPath() . 'public' . DS . 'home' . DS . 'index.html');
            }
        case 'kefu':
            return view(app()->getRootPath() . 'public' . DS . 'admin' . DS . 'index.html');
        default:
            if (!request()->isMobile() && is_dir(app()->getRootPath() . 'public' . DS . 'home') && !request()->get('type')) {
                return redirect(app()->route->buildUrl('/home/'));;
            } else {
                return view(app()->getRootPath() . 'public' . DS . 'index.html');
            }
    }
});
