/***************** Smooth Scrolling ******************/

$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});

$(document).ready(function(){
  $(".hide--expand").addClass("invisivel");
    $(".expand").click(function(){
        $(this).next(".hide--expand").slideToggle("slow")
        .siblings(".hide--expand:visible").slideUp("slow");
        $(this).toggleClass("corrente")
        .siblings().removeClass("corrente");
    return false;
    });
}); 

/************************* Waypoints **************************************/
    $(document).ready(function() {

        $('.wp1').waypoint(function() {
            $('.wp1').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp2').waypoint(function() {
            $('.wp2').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp3').waypoint(function() {
            $('.wp3').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp4').waypoint(function() {
            $('.wp4').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp5').waypoint(function() {
            $('.wp5').addClass('animated fadeInLeft');
        }, {
            offset: '50%'
        });
        $('.wp6').waypoint(function() {
            $('.wp6').addClass('animated fadeInLeft');
        }, {
            offset: '75%'
        });
    });

/************************* Jqueryhoverdir - APTO **************************/
    $(function() {
        $('#da-thumbs > li').each( function() {$(this).hoverdir();});
    });

 
/************************* Slick - LAZER *********************************/
    $('.single-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        mobileFirst:true,
        respondTo: 'slider',
        centerMode: true,
        asNavFor: '.slider-nav'
    });
/****************************** POP-CORRETOR *******************************/

    var   timerPopUp    = null,
          timeToOpen    = 5000,
          global_closed = false,
          global_opened = false,
          actionSite    = "Index";

          /* FUNCTIONS */
        // Start Timer para Abrir a PopUp
        function popUpCorretorStart() {
            var popUpExibida = $( '#hfSessao' ).val();
            
            if( ( popUpExibida == "False" || popUpExibida == "0" ) && timerPopUp === null ) {
                
                timerPopUp = setTimeout( function(e) {
                    popUpCorretorOpen();
                }, timeToOpen );

            }

        }

        // Open PopUp
        function popUpCorretorOpen() {

            if( 
                $( '.pelicula' ).length > 0 ||
                $( '.galeria-fullscreen__container.show' ).length > 0 ||
                $( 'input:focus, select:focus' ).length > 0 ||
                $( '.simule-financiamento.ativo' ).length > 0
            ) { // Tem algum PopUp Aberto ou input em foco?
                timerPopUp = setTimeout( function() {
                    popUpCorretorOpen();
                }, timeToOpen );
            } else {
                fechaPopup();
                $( window ).off( 'scroll.popup mousemove.popup click.popup keyup.popup' );
                        
                // Esconde as sugestões de busca, para que o popup não fique sobreposto
                $('div.sugestoes').hide();
                // Remove a classe ativo da busca por filtros e do popup de simule um financiamento, para que o popup não fique sobreposto
                $('.conteudo .busca-por-filtros, aside.simule-financiamento').removeClass('ativo');

                // Abre e Seta qual a PopUp Abert
                abrePopups('#falecorretor');
                popupName = 'falecorretor';

                // Seta Global Opened para true
                global_opened = true;

                // Dispara evento de Analytics
                trackEvent('Intervencao-Home', 'Impressao', 'Fale com o corretor');
            } // End if/else

        }

         // Reset Timer para Abrir a PopUp
        function popUpCorretorReset() {

            // Limpa o timer para abrir o PopUp
            var popUpExibida = $( '#hfSessao' ).val();
            
            if( popUpExibida == "False" || popUpExibida == "0" ) {
                clearTimeout( timerPopUp );
                timerPopUp = null;
            } 
            
            // Se as globais de abertura do PopUp forem falsas, reinicia o timer
            if( !global_opened && !global_closed ) {
                popUpCorretorStart();
            }

        }

        // Close PopUp Triggers
        function popUpCorretorClose() {

            if( !global_closed ) {
                global_closed = true;

                var popUpExibida = $( '#hfSessao' ).val();

                $( '#falecorretor, .pelicula:visible' ).fadeOut( 800, function() {
                    $( '#falecorretor a.fechar, .pelicula:visible' ).remove();

                    // Desabilitar PopUp?
                    if( ( popUpExibida == "False" || popUpExibida == "0" ) && popupName == 'falecorretor' ) {
                        DesabilitarPopUp();
                    }
                });

                // Limpa o timer para abrir o PopUp
                clearTimeout( timerPopUp );

                var elem = $( '#falecorretor' );

                if( elem.length > 0 && elem.is(':visible') ){
                    trackEvent('Intervencao-Home', 'fechar', 'Fale com o corretor');
                }
            }

        }
        /* TRIGGERS */
        // Document Ready
        $( document ).ready( function() {
            // Inicia o Timer
            popUpCorretorStart();

            // Eventos de Click
            $( '.js--pop-tiberio' ).on( 'click', function() {

                trackEvent( 'Intervencao-Home', 'Clique', 'Fale com o corretor' );
                popUpCorretorClose();

                return abrirChat( '/fale-conosco/opcoes?praca=sp&amp;ponto=1&amp;camp_int=IntervencaoHome_sp_FaleComCorretor' );
            });
            
        });

        // Pausa PopUp quando o usuário interage com a página
        // Trigger to clear Timer
        $( window ).on( 'scroll.popup mousemove.popup click.popup', function() {
            popUpCorretorReset();
        });

        // KeyUp
        $( document ).on( 'keyup.popup', function( e ) {
            // ESC
            if( e.keyCode === 27 ) {
                popUpCorretorClose();
            }
            
            popUpCorretorReset();
        });

        // Unbind Clicks
        $( document ).off( 'click', '#falecorretor a.fechar' );

        // Click -> Cancel PopUp
        $( document ).on( 'click', '#falecorretor a.fechar, .pelicula:visible', function(e) {
            e.preventDefault();
            popUpCorretorClose();
            return false;
        });

/************************************************************** ABRIR POPUP E CORRETOR EM OUTRA JANELA *******************************************************/

 function abrir(URL) {
   
    var width = 710;
    var height = 436;
   
    var left = 740;
    var top = 99;
   
   window.open(URL,'janela', 'width='+width+', height='+height+', top='+top+', left='+left+', scrollbars=no, scrolling=no, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no'); 
  } 

/************************************************************** MENSAIS **************************************************************************************/
  $(".fecharMensais").click(function(){
    $(".mensais").css("display","none");
  })          