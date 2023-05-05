(function() {
    tinymce.PluginManager.add('custom_button', function( editor, url ) {
        editor.addButton( 'custom_button', {
            text: 'Заключение',
            icon: false,
            onclick: function() {
                editor.insertContent( '<hr /><BR />В случай че статията Ви харесва и мислите, че би могла да бъде полезна за приятелите Ви, подкрепете я чрез споделяне. <BR /><i>Тази статия има информативна цел и не представлява научен труд или доказателство!</i>' );
            }
        });
    });
})();
