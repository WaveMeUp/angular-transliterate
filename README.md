# What is it?
**Angular-transliterate** is the AngularJS directive for transliteration from Cyryllic to Latin

# Usage
Make sure to embed it in your HTML document:
```
<script src="path/to/angular-transliterate.js"></script>
```

Inject `vo.transliterate` module as a dependency to your app:
```
var app = angular.module('myApp', ['vo.transliterate'])
```

Then add `transliterate` directive to your text input:
```
<input placeholder="name" transliterate />
```

# Options
Change ```ctrl.$options.$$options.debounce = 100``` to `0` if you don't want "update" effect.

# Описание
**Angular-transliterate** это AngularJS директива для транслитерации данных в текстовом поле с кириллицы на латиницу

# Использование
Подключите скрипт в HTML файл:
```
<script src="path/to/angular-transliterate.js"></script>
```

Добавьте модуль `vo.transliterate` в зависимости вашего приложения:
```
var app = angular.module('myApp', ['vo.transliterate'])
```

Затем используйте директиву `transliterate` в инпуте:
```
<input placeholder="name" transliterate />
```

# Опции
Измените ```ctrl.$options.$$options.debounce = 100``` на `0`, если не хотите эффект "обновления".
