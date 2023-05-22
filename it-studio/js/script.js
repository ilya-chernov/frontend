$(".element").typed({
    stringsElement: '#hero',
    typeSpeed: 0, // Скорость печати
    backSpeed: 0, // Скорость удаления
    startDelay: 0, // Задержка перед стартом анимации
    backDelay: 500, // Пауза перед удалением 
    loop: false, // Повтор (true или false)
    loopCount: false, // Число повторов, false = бесконечно
    showCursor: true, // Отображение курсора
    attr: null, // Атрибут
    callback: function(){ } // Функция вызываемая после окончания работы плагина
});