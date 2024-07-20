# cypress/e2e/tennis_tests.feature

Feature: Pruebas de la página web de Tennis

  Background:
    Given que estoy en la página principal de Tennis en un dispositivo de escritorio

  Scenario: La página principal se carga correctamente
    Then la página debe tener el título "Tennis | Tienda de Ropa Online en Colombia"
    And las <imagenes> deben ser visibles
      |imagenes              |
      |Jeans hombre          |
      |Shorts                |
      |Faldas para mujer     |
      |Bermudas para hombre  |

  Scenario: La página principal no debe tener el título incorrecto
    Then la página no debe tener el título "Tenis | Tienda de Ropa Online en Colombia"

  Scenario: El menú debe cargarse correctamente
    When la página carga completamente
    Then las <imágenes> deben ser visibles 
      |imagenes              |
      |Buzos                 |
      |Camisetas             |
      |Jeans                 |

  Scenario: Agregar un artículo de ropa y hacer clic en "seguir comprando"
    Given que estoy en la página principal
    When hago clic en la imagen de "Shorts"
    And selecciono una talla disponible
    And hago clic en "AGREGAR AL CARRITO"
    Then debo ver el enlace "SEGUIR COMPRANDO"
    When hago clic en "SEGUIR COMPRANDO"

  Background:
    Given que estoy en la página principal de Tennis en un dispositivo móvil

  Scenario: La página principal se carga correctamente
    Then la página debe tener el título "Tennis | Tienda de Ropa Online en Colombia"
    And las <imagenes> deben ser visibles
      |imagenes              |
      |Jeans hombre          |
      |Shorts                |
      |Faldas para mujer     |
      |Bermudas para hombre  |

  Scenario: El menú debe cargarse correctamente
    When la página carga completamente
    Then las <imágenes> deben ser visibles 
      |imagenes              |
      |Buzos                 |
      |Camisetas             |
      |Jeans                 |

  Scenario: Agregar un artículo de ropa y proceder a la compra en móvil
    Given que estoy en la página principal
    When hago clic en la imagen de "Jeans"
    And selecciono una talla disponible
    And hago clic en "AGREGAR AL CARRITO"
    Then debo ver el botón "FINALIZAR COMPRA"
    When hago clic en "FINALIZAR COMPRA"
    And veo la página de "Carrito" con el botón "COMPRAR"
    When hago clic en "COMPRAR"
