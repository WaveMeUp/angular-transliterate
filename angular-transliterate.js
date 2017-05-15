/**
 * Created by Viacheslav Osadchiy
 * https://github.com/WaveMeUp/transliteration
 */

(function(){
    'use strict';

    var trans = angular.module('vo.transliterate', []);
    trans.directive('transliterate', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                var a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};
                // время до обновления модели, чтобы создавался эффект замены
                ctrl.$options.$$options.debounce = 100;
                function transliterate(word){
                    // console.log(word);
                    if (word) {
                        word = word.split('').map(function (char) {
                            return a[char] || char;
                        }).join("");

                        ctrl.$setViewValue(word);
                        ctrl.$render();
                        return word;
                    } else return word;
                }
                ctrl.$formatters.push(transliterate);
                ctrl.$parsers.push(transliterate);
            }
        }
    })
})();
