<p align="center">
<a href="https://easywechat.org/">
<img src="https://easywechat.org/logo.svg" alt="EasyWeChat" width="160">
</a>

<p align="center">π¦ It is probably the best SDK in the world for developing Wechat App.</p>

<p align="center">
<a href="https://travis-ci.org/overtrue/wechat"><img src="https://travis-ci.org/overtrue/wechat.svg?branch=master" alt="Build Status"></a>
<a href="https://packagist.org/packages/overtrue/wechat"><img src="https://poser.pugx.org/overtrue/wechat/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/overtrue/wechat"><img src="https://poser.pugx.org/overtrue/wechat/v/unstable.svg" alt="Latest Unstable Version"></a>
<a href="https://scrutinizer-ci.com/g/overtrue/wechat/build-status/master"><img src="https://scrutinizer-ci.com/g/overtrue/wechat/badges/build.png?b=master" alt="Build Status"></a>
<a href="https://scrutinizer-ci.com/g/overtrue/wechat/?branch=master"><img src="https://scrutinizer-ci.com/g/overtrue/wechat/badges/quality-score.png?b=master" alt="Scrutinizer Code Quality"></a>
<a href="https://scrutinizer-ci.com/g/overtrue/wechat/?branch=master"><img src="https://scrutinizer-ci.com/g/overtrue/wechat/badges/coverage.png?b=master" alt="Code Coverage"></a>
<a href="https://packagist.org/packages/overtrue/wechat"><img src="https://poser.pugx.org/overtrue/wechat/downloads" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/overtrue/wechat"><img src="https://poser.pugx.org/overtrue/wechat/license" alt="License"></a>
</p>

</div>

<p align="center">
    <b>Special thanks to the generous sponsorship by:</b>
    <br><br>
    <a href="https://www.yousails.com">
      <img src="https://yousails.com/banners/brand.png" width=350>
    </a>
    <br><br>
    <a href="https://laravist.com">
      <img width="160" src="https://o0dpls1ru.qnssl.com/laravist.com-logo.png">
    </a>
</p>

<p align="center">
<img width="400" src="http://wx1.sinaimg.cn/mw690/82b94fb4gy1fgwafq32r0j20nw0nwter.jpg">
</p>

<p align="center">ε³ζ³¨ζηε¬δΌε·ζδ»¬δΈθ΅·θθδ»£η ζδΉζ ·οΌ</p>

## Feature

 - ε½εδΈι£δΉδΉ±δΈε«η³οΌ
 - ιθεΌεθδΈιθ¦ε³ζ³¨ηη»θοΌ
 - ζΉζ³δ½Ώη¨ζ΄δΌιοΌδΈεΏεε»η η©Άι£δΊε₯ζͺηηζΉζ³εζθη±»εζ―εε₯η¨ηοΌ
 - θͺε?δΉηΌε­ζΉεΌοΌ
 - η¬¦ε [PSR](https://github.com/php-fig/fig-standards) ζ εοΌδ½ ε―δ»₯εη§ζΉδΎΏηδΈδ½ ηζ‘ζΆιζοΌ
 - ι«εΊ¦ζ½θ±‘ηζΆζ―η±»οΌεε»εη§ζΌjsonδΈxmlηηθ¦οΌ
 - θ―¦η» Debug ζ₯εΏοΌδΈεδΊ€δΊι½δΈη?δΊηΆοΌ

## Requirement

1. PHP >= 5.5.9
2. **[composer](https://getcomposer.org/)**
3. openssl ζε±
4. fileinfo ζε±οΌη΄ ζη?‘ηζ¨‘ειθ¦η¨ε°οΌ

> SDK ε―Ήζδ½Ώη¨ηζ‘ζΆεΉΆζ ηΉε«θ¦ζ±

## Installation

```shell
composer require "overtrue/wechat:~3.1" -vvv
```

## Usage

εΊζ¬δ½Ώη¨οΌδ»₯ζε‘η«―δΈΊδΎοΌ:

```php
<?php

use EasyWeChat\Foundation\Application;

$options = [
    'debug'     => true,
    'app_id'    => 'wx3cf0f39249eb0e60',
    'secret'    => 'f1c242f4f28f735d4687abb469072a29',
    'token'     => 'easywechat',
    'log' => [
        'level' => 'debug',
        'file'  => '/tmp/easywechat.log',
    ],
    // ...
];

$app = new Application($options);

$server = $app->server;
$user = $app->user;

$server->setMessageHandler(function($message) use ($user) {
    $fromUser = $user->get($message->FromUserName);

    return "{$fromUser->nickname} ζ¨ε₯½οΌζ¬’θΏε³ζ³¨ overtrue!";
});

$server->serve()->send();
```

ζ΄ε€θ―·εθ[http://easywechat.org/](http://easywechat.org/)γ

## Documentation

- Homepage: http://easywechat.org
- Forum: https://forum.easywechat.org
- εΎ?δΏ‘ε¬δΌεΉ³ε°ζζ‘£: https://mp.weixin.qq.com/wiki
- WeChat Official Documentation: http://admin.wechat.com/wiki

> εΌΊηε»Ίθ??ηζεΎ?δΏ‘ζζ‘£εεζ₯δ½Ώη¨ζ¬ SDKγ

## Integration

[Laravel 5 ζε±ε: overtrue/laravel-wechat](https://github.com/overtrue/laravel-wechat)

## Contribution

[Contribution Guide](.github/CONTRIBUTING.md)

## License

MIT
