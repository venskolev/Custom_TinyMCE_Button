(function() {
    tinymce.PluginManager.add('custom_button', function( editor, url ) {
        editor.addButton( 'custom_button', {
            text: 'Заключение',
            icon: false,
            // onclick: function() {
            //     editor.insertContent( '<hr /><BR />В случай че статията Ви харесва и мислите, че би могла да бъде полезна за приятелите Ви, подкрепете я чрез споделяне. <BR /><i>Тази статия има информативна цел и не представлява научен труд или доказателство!</i>' );
            // }
            onclick : function() {
                // Запитване дали да се промени текста за въвеждане
                var inputValue = prompt("Enter new content", "");

                // Запитване дали сме сигурни за промяната
                var doChange = confirm("Are you sure you want to change the content?");

                // Проверка дали да се запише нов текст
                if (doChange && inputValue !== null) {
                    editor.insertContent(inputValue);
                } else {
                    editor.insertContent( '<hr /><BR />В случай че статията Ви харесва и мислите, че би могла да бъде полезна за приятелите Ви, подкрепете я чрез споделяне. <BR /><i>Тази статия има информативна цел и не представлява научен труд или доказателство!</i>' );
                }
            },
            createControl : function(n, cm) {
                return null;
            },
        });
        
    });
    
})();
