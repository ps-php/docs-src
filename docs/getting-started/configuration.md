---
sidebar_position: 2
title: Configuration
---

## Initial Configuration
All of the configuration files are placed in the ```app/config``` directory. These configuration files allow you to configure things like your database connection, base url, application environment, and many more.

## Environment Configuration
You can directly edit the configuration values ​​without opening the files in ```app/config``` by opening the env.php file.<br/>
By default, env file are not available, you must copy the ```env.example.php``` file to ```env.php```
```
cp env.example.php env.php
```

## Accessing Configuration Value
You can easily get configuration value ​​with the ```config``` function anywhere in your application.
```php
$value = config('app_name');
```
