<h1 id="wealth-reader-api">Wealth Reader API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Las APIs regulatorias basadas en PSD2 proporcionan acceso a cierta información financiera como saldos de cuentas bancarias y transacciones. Sin embargo, hay otras fuentes de información patrimonial que no son accesibles por estas APIs. La API de Wealth Reader amplía la información ofrecida por las APIs regulatorias proporcionando acceso en tiempo real a las fuentes patrimoniales adicionales en cualquier entidad del mundo. Existen otros dos documentos relacionados que te ayudarán a integrar la API de Wealth Reader. Uno es la guía de integración del widget Javascript: https://docs-es.wealthreader.com/, y el  otro una colección Postman basada en esta documentación.

Base URLs:

* <a href="https://virtserver.swaggerhub.com/Wealth-Reader/api/1.0.0">https://virtserver.swaggerhub.com/Wealth-Reader/api/1.0.0</a> - SwaggerHub API Auto Mocking

* <a href="https://api.wealthreader.com/">https://api.wealthreader.com/</a>

Email: <a href="mailto:info@wealthreader.com">info@wealthreader.com</a> 

<a href="https://docs-es.wealthreader.com/">External documentation</a>

<h1 id="wealth-reader-api-entity-data">entity-data</h1>

Métodos utilizados para recuperar información de las entidades

## Obtiene el listado de entidades soportadas

> Code samples

```bash
curl https://example.com/entities \
  -H 'Accept: application/json'
```

`GET /entities`

Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.


> Example responses

> 200 Response

```json
[
  [
    {}
  ]
]
```

> 400 Response

```json
[
  {
    "error": {
      "code": 1000,
      "contracts": [
        {}
      ],
      "message": "Login incorrecto"
    },
    "statistics": {
      "SESSION": "3463754e3540884",
      "execution_time": 0.958119869232178,
      "operation_id": "1827C79229",
      "token": "FRJ0mHlaqZwLzu"
    },
    "success": false
  }
]
```

<h3 id="obtiene-el-listado-de-entidades-soportadas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|listado de entidades|Inline|
|400|Bad Request|error|Inline|

<h3 id="obtiene-el-listado-de-entidades-soportadas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[entities](#schemaentities)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Obtiene los activos financieros y el detalle de su composición

> Code samples

```bash
curl https://example.com/entities \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'OTP=string&SESSION=string&api_key=string&code=string&contract_code=string&document_type=NIF&password=string&second_password=string&token=string&tokenize=false&user=string'
```

`POST /entities`

Obtiene los activos financieros y el detalle de su composición de carteras de inversión compuestas por acciones o fondos, tarjetas de crédito, seguros y préstamos. Incluye información de titularidad de cada uno de los activos así como identificadores únicos que facilitan el tratamiento del dato. Es posible obtener datos Mock. Consulte con el equipo técnico cómo hacerlo.


> Body parameter

```yaml
OTP: string
SESSION: string
api_key: string
code: string
contract_code: string
document_type: NIF
password: string
second_password: string
token: string
tokenize: false
user: string
```

<h3 id="obtiene-los-activos-financieros-y-el-detalle-de-su-composición-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» OTP|body|string|false|Solo necesario cuando se esté completando la seguda petición de un login con 2 factores de autenticación, si el tipo de desafío es OTP. Requiere la clave que la entidad le ha enviado al usario final|
|» SESSION|body|string|false|Solo necesario cuando se esté completando la seguda petición de un login con 2 factores de autenticación. Requiere el valor de SESSION obtenido en la primera petición|
|» api_key|body|string|false|Identifica al cliente en el servicio|
|» code|body|string|false|Nombre de la entidad. El listado completo está disponible con GET|
|» contract_code|body|string|false|Solo necesario cuando el usuario puede acceder a más de un contrato. El listado de contratos disponibles se obtiene al realizar una conexión con un usuario con opción a trabajar con varios contratos en su entidad (que al hacer login en su banca online ve como primera opción una pantalla de selección de contratos) y cuya llamada a la API no se le ha especificado un valor a contract_code|
|» document_type|body|string|false|Tipo de documento, requerido según la entidad. Si es requerido o no, está indicado en el listado de entidades. Ver definición.|
|» password|body|string|false|Contraseña|
|» second_password|body|string|false|Segunda contraseña, requerida según la entidad.|
|» token|body|string|false|Valor para credenciales custodiadas, tokenizadas previamente mediante una llamada a este método con el valor de tokenize=true. Están disponibles los siguientes usuarios Mock: MOCKDATA, respuesta OK; MOCKOTP, respuesta con desafío OTP; MOCKLOGINKO, respuesta con error de login|
|» tokenize|body|boolean|false|Indica si Wealth Reader debe custodiar los credenciales, de tal manera que incluído en el body de respuesta estará un token que permite conectar con la entidad sin necesidad de conocer los credenciales: document_type, user, password, second_password, contract_code|
|» user|body|string|false|Usuario. Están disponibles los siguientes usuarios Mock: MOCKDATA, respuesta OK; MOCKOTP, respuesta con desafío OTP; MOCKLOGINKO, respuesta con error de login|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» document_type|NIF|
|» document_type|Pasaporte|
|» document_type|Tarjeta de residencia|

> Example responses

> 200 Response

```json
[
  {
    "portfolios": [
      null
    ],
    "payload": {
      "accounts": [
        {}
      ],
      "cards": [
        {}
      ],
      "portfolios": [
        {}
      ],
      "properties": {
        "code": "string",
        "currency": "string",
        "description": "string",
        "historic_prices": [
          {
            "date": "1970-01-01",
            "price": 0
          }
        ],
        "purpose": "string",
        "trading_price": 0,
        "trading_year": 0,
        "uuid": "string"
      },
      "user_information": {
        "ID": "12345678Z",
        "address": "CALLE BAILEN 41 1A",
        "birth_date": "1980-09-26",
        "birth_place": "SEVILLA",
        "cell_phone": "+34666123456",
        "city": "MADRID",
        "country": "SPAIN",
        "email": "lgarcia@gmail.com",
        "gender": "male",
        "job": "CUENTA PROPIA",
        "marital_status": "married",
        "name": "LUIS GARCIA BAQUERO",
        "postal_code": "28005"
      }
    },
    "statistics": {
      "SESSION": "3463754e3540884",
      "execution_time": 0.958119869232178,
      "operation_id": "1827C79229",
      "token": "FRJ0mHlaqZwLzu"
    },
    "success": true
  }
]
```

> 400 Response

```json
[
  {
    "error": {
      "code": 1000,
      "contracts": [
        {}
      ],
      "message": "Login incorrecto"
    },
    "statistics": {
      "SESSION": "3463754e3540884",
      "execution_time": 0.958119869232178,
      "operation_id": "1827C79229",
      "token": "FRJ0mHlaqZwLzu"
    },
    "success": false
  }
]
```

<h3 id="obtiene-los-activos-financieros-y-el-detalle-de-su-composición-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|datos obtenidos de la entidad|Inline|
|400|Bad Request|error|Inline|

<h3 id="obtiene-los-activos-financieros-y-el-detalle-de-su-composición-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[entity-data](#schemaentity-data)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Listado de códigos de error

> Code samples

```bash
curl https://example.com/error-codes \
  -H 'Accept: application/json'
```

`GET /error-codes`

Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.


<h3 id="listado-de-códigos-de-error-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|query|string|false|Idioma de la respuesta|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|es|
|lang|en|

> Example responses

> 200 Response

```json
[
  {
    "code": 2,
    "description": "Llamada incorrecta",
    "how_to_proceed": "El texto recibido en \"message\" detallará el motivo del error. Por ejemplo, \"El parámetro \"api_key\" es obligatorio\".",
    "possible_reasons": "Alguno de los parámetros requeridos no se ha enviado o se ha enviado en un formato incorrecto"
  }
]
```

> 400 Response

```json
[
  {
    "error": {
      "code": 1000,
      "contracts": [
        {}
      ],
      "message": "Login incorrecto"
    },
    "statistics": {
      "SESSION": "3463754e3540884",
      "execution_time": 0.958119869232178,
      "operation_id": "1827C79229",
      "token": "FRJ0mHlaqZwLzu"
    },
    "success": false
  }
]
```

<h3 id="listado-de-códigos-de-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Códigos de error junto con su descripción, posible motivo y cómo proceder|Inline|
|400|Bad Request|error|Inline|

<h3 id="listado-de-códigos-de-error-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error-codes](#schemaerror-codes)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_accounts">accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
[
  {}
]
```

Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2

<h2 id="tocS_cards">cards</h2>
<!-- backwards compatibility -->
<a id="schemacards"></a>
<a id="schema_cards"></a>
<a id="tocScards"></a>
<a id="tocscards"></a>

```json
[
  {}
]
```

Tarjetas de crédito, débito y prepago

<h2 id="tocS_contracts">contracts</h2>
<!-- backwards compatibility -->
<a id="schemacontracts"></a>
<a id="schema_contracts"></a>
<a id="tocScontracts"></a>
<a id="tocscontracts"></a>

```json
[
  {}
]
```

Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)

<h2 id="tocS_entities">entities</h2>
<!-- backwards compatibility -->
<a id="schemaentities"></a>
<a id="schema_entities"></a>
<a id="tocSentities"></a>
<a id="tocsentities"></a>

```json
[
  {}
]
```

<h2 id="tocS_entity-data">entity-data</h2>
<!-- backwards compatibility -->
<a id="schemaentity-data"></a>
<a id="schema_entity-data"></a>
<a id="tocSentity-data"></a>
<a id="tocsentity-data"></a>

```json
{
  "portfolios": [
    null
  ],
  "payload": {
    "accounts": [
      {}
    ],
    "cards": [
      {}
    ],
    "portfolios": [
      {}
    ],
    "properties": {
      "code": "string",
      "currency": "string",
      "description": "string",
      "historic_prices": [
        {
          "date": "1970-01-01",
          "price": 0
        }
      ],
      "purpose": "string",
      "trading_price": 0,
      "trading_year": 0,
      "uuid": "string"
    },
    "user_information": {
      "ID": "12345678Z",
      "address": "CALLE BAILEN 41 1A",
      "birth_date": "1980-09-26",
      "birth_place": "SEVILLA",
      "cell_phone": "+34666123456",
      "city": "MADRID",
      "country": "SPAIN",
      "email": "lgarcia@gmail.com",
      "gender": "male",
      "job": "CUENTA PROPIA",
      "marital_status": "married",
      "name": "LUIS GARCIA BAQUERO",
      "postal_code": "28005"
    }
  },
  "statistics": {
    "SESSION": "3463754e3540884",
    "execution_time": 0.958119869232178,
    "operation_id": "1827C79229",
    "token": "FRJ0mHlaqZwLzu"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|object|false|none|none|
|statistics|[statistics](#schemastatistics)|true|none|none|
|success|boolean|true|none|none|
|*anyOf*|object|false|none|none|
|portfolios|[object]|false|none|none|
|*anyOf*|object|false|none|none|
|accounts|[object]|false|none|none|
|*anyOf*|object|false|none|none|
|cards|[object]|false|none|none|
|*anyOf*|object|false|none|none|
|properties|[object]|false|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": {
    "code": 1000,
    "contracts": [
      {}
    ],
    "message": "Login incorrecto"
  },
  "statistics": {
    "SESSION": "3463754e3540884",
    "execution_time": 0.958119869232178,
    "operation_id": "1827C79229",
    "token": "FRJ0mHlaqZwLzu"
  },
  "success": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[error-detail](#schemaerror-detail)|true|none|none|
|statistics|[statistics](#schemastatistics)|true|none|none|
|success|boolean|true|none|none|

<h2 id="tocS_error-codes">error-codes</h2>
<!-- backwards compatibility -->
<a id="schemaerror-codes"></a>
<a id="schema_error-codes"></a>
<a id="tocSerror-codes"></a>
<a id="tocserror-codes"></a>

```json
{
  "code": 2,
  "description": "Llamada incorrecta",
  "how_to_proceed": "El texto recibido en \"message\" detallará el motivo del error. Por ejemplo, \"El parámetro \"api_key\" es obligatorio\".",
  "possible_reasons": "Alguno de los parámetros requeridos no se ha enviado o se ha enviado en un formato incorrecto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|Código de error|
|description|string|false|none|Descripción del error|
|how_to_proceed|string|false|none|Cómo actuar cuando se obtiene este código de error|
|possible_reasons|string|false|none|Posibles causas del error|

<h2 id="tocS_error-detail">error-detail</h2>
<!-- backwards compatibility -->
<a id="schemaerror-detail"></a>
<a id="schema_error-detail"></a>
<a id="tocSerror-detail"></a>
<a id="tocserror-detail"></a>

```json
{
  "code": 1000,
  "contracts": [
    {}
  ],
  "message": "Login incorrecto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(unsigned)|true|none|El código indica la familia del error. Por ejemplo, de 2000 a 2999 indican problemas en el login. Cada código de error debe tratarse de forma diferente. Por ejemplo, si el código indica "Login incorrecto", no se debe reintentar la llamada; si el código indica "entidad en mantenimiento" sí se puede reintentar más tarde. Puedes obtener el listado completo en el método error-codes.|
|contracts|[contracts](#schemacontracts)|false|none|Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)|
|message|string|true|none|Texto en el idioma de la entidad. Es seguro mostrárselo al usuario y en muchos casos le ayudará a corregir el error|

<h2 id="tocS_owner">owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
{
  "ID": "12345678Z",
  "name": "LUIS GARCIA BAQUERO",
  "role": "owner"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|true|none|none|
|name|string|true|none|none|
|role|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|co-owner|
|role|legal representative|
|role|administrator|
|role|attorney-in-fact|
|role|authorised|

<h2 id="tocS_portfolios">portfolios</h2>
<!-- backwards compatibility -->
<a id="schemaportfolios"></a>
<a id="schema_portfolios"></a>
<a id="tocSportfolios"></a>
<a id="tocsportfolios"></a>

```json
[
  {}
]
```

Carteras de acciones, fondos y planes de pensiones

<h2 id="tocS_properties">properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
{
  "code": "string",
  "currency": "string",
  "description": "string",
  "historic_prices": [
    {
      "date": "1970-01-01",
      "price": 0
    }
  ],
  "purpose": "string",
  "trading_price": 0,
  "trading_year": 0,
  "uuid": "string"
}
```

Activos inmobiliarios

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Referencia catastral|
|currency|string|true|none|none|
|description|string|false|none|none|
|historic_prices|[object]|true|none|none|
|purpose|string|false|none|none|
|trading_price|number|true|none|none|
|trading_year|number|true|none|none|
|uuid|string|true|none|none|

<h2 id="tocS_statistics">statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
{
  "SESSION": "3463754e3540884",
  "execution_time": 0.958119869232178,
  "operation_id": "1827C79229",
  "token": "FRJ0mHlaqZwLzu"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SESSION|string|true|none|Guarda siempre este valor, tanto si la conexión es correcta como si no. Es necesario para obtener soporte|
|execution_time|number|true|none|Duración de la ejecución|
|operation_id|string|false|none|El valor vendrá indicado cuando se haya invocado a la API a través del Widget que proporciona Wealth Reader. Para saber más sobre este tipo de integración, visita: https://docs-es.wealthreader.com/|
|token|string|false|none|El valor vendrá indicado cuando se ha pedido la custodia de credenciales con la opción tokenize=true|

<h2 id="tocS_user_information">user_information</h2>
<!-- backwards compatibility -->
<a id="schemauser_information"></a>
<a id="schema_user_information"></a>
<a id="tocSuser_information"></a>
<a id="tocsuser_information"></a>

```json
{
  "ID": "12345678Z",
  "address": "CALLE BAILEN 41 1A",
  "birth_date": "1980-09-26",
  "birth_place": "SEVILLA",
  "cell_phone": "+34666123456",
  "city": "MADRID",
  "country": "SPAIN",
  "email": "lgarcia@gmail.com",
  "gender": "male",
  "job": "CUENTA PROPIA",
  "marital_status": "married",
  "name": "LUIS GARCIA BAQUERO",
  "postal_code": "28005"
}
```

Información relativa a la persona que hace login

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|true|none|none|
|address|string|false|none|none|
|birth_date|string(date)|false|none|none|
|birth_place|string|false|none|none|
|cell_phone|string|false|none|Número de teléfono con el prefijo internacional, sin espacios|
|city|string|false|none|none|
|country|string|false|none|none|
|email|string|false|none|none|
|gender|string|false|none|none|
|job|string|false|none|El valor aquí es muy variable de una entidad a otra: de indicar solamente si es cuenta propia o cuenta ajena a indicar el tipo de profesión|
|marital_status|string|false|none|none|
|name|string|true|none|none|
|postal_code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|
|marital_status|single|
|marital_status|married|
