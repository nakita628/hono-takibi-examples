import { createRoute, z } from '@hono/zod-openapi'

const OwnerSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'ID')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (!Object.hasOwn(val, 'name')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (!Object.hasOwn(val, 'role')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'ID')) {
        const Schema = z.string().openapi({ example: '12345678Z' })
        if (!Schema.safeParse(Reflect.get(val, 'ID')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'name')) {
        const Schema = z.string().openapi({ example: 'LUIS GARCIA BAQUERO' })
        if (!Schema.safeParse(Reflect.get(val, 'name')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'role')) {
        const Schema = z
          .enum([
            'owner',
            'co-owner',
            'legal representative',
            'administrator',
            'attorney-in-fact',
            'authorised',
          ])
          .openapi({ example: 'owner' })
        if (!Schema.safeParse(Reflect.get(val, 'role')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
    if (Array.isArray(val)) {
      {
        const Schema = z.array(z.any())
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .openapi({ required: ['ID', 'name', 'role'] })
  .openapi('Owner')

const AccountsSchema = z
  .object({
    balances: z
      .object({
        available: z.number().exactOptional().openapi({ example: 14302.07 }),
        current: z.number().exactOptional().openapi({ example: 14302.07 }),
      })
      .openapi({ required: [] }),
    code: z
      .string()
      .openapi({ description: 'Código IBAN sin espacios', example: 'ES4914651234561234567890' }),
    currency: z.string().openapi({ example: 'EUR' }),
    name: z.string().openapi({ example: 'Cuenta NÓMINA' }),
    owners: OwnerSchema,
    transactions: z.array(
      z
        .object({
          amount: z.number().exactOptional().openapi({ example: -1.1 }),
          balance: z.number().exactOptional().openapi({ example: 14302.07 }),
          description: z.string().exactOptional().openapi({ example: 'Pago en TELPARK MADRID ES' }),
          operation_date: z.iso.date().exactOptional().openapi({ example: '2022-12-30' }),
          uuid: z
            .string()
            .exactOptional()
            .openapi({ example: 'd0c2ea4c072cf4d7b0fd494d7728260d736e6b25' }),
          value_date: z.iso.date().exactOptional().openapi({ example: '2022-12-30' }),
        })
        .openapi({ required: [] }),
    ),
    uuid: z.string().openapi({ example: '8076932f04f73e27fe608fee4d12fca8708dec8c' }),
  })
  .openapi({
    description:
      'Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2',
    required: ['uuid', 'code', 'name', 'currency', 'owners', 'balances', 'transactions'],
  })
  .openapi('Accounts')

const CardsSchema = z
  .object({
    anual_interest: z.number().exactOptional().openapi({ example: 17.48 }),
    balances: z
      .object({
        available: z.number().exactOptional().openapi({ example: 3980 }),
        disposed: z.number().exactOptional().openapi({ example: 20 }),
        limit: z.number().exactOptional().openapi({ example: 4000 }),
      })
      .openapi({ required: [] }),
    code: z
      .string()
      .openapi({
        description: 'Numeración con ofuscación PCI compliance',
        example: '516097********1234',
      }),
    currency: z.string().openapi({ example: 'EUR' }),
    linked_account: z.string().exactOptional().openapi({ example: 'ES4021005321592566566159' }),
    name: z.string().openapi({ example: 'Tarjeta Crédito' }),
    next_payment_date: z.iso.date().exactOptional().openapi({ example: '2023-01-05' }),
    owner: OwnerSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive', 'cancelled'])
      .exactOptional()
      .openapi({ example: 'active' }),
    subtype: z.enum(['credit', 'debit', 'prepaid']).openapi({ example: 'credit' }),
    tae: z.number().exactOptional().openapi({ example: 18.95 }),
    transactions: z
      .object({
        amount: z.number().openapi({ example: -20 }),
        description: z.string().openapi({ example: 'Pago en AMZN MKTP ES123CM0ZM4' }),
        settled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indica si es un movimiento perteneciente a un extracto diferente del periodo de facturación actual',
            example: false,
          }),
        uuid: z.string().openapi({ example: '78ceedca9cd9d2f2bfbb2439795ab6a1fcefc12b' }),
        value_date: z.iso.date().openapi({ example: '2022-12-28' }),
      })
      .exactOptional()
      .openapi({ required: ['uuid', 'value_date', 'amount', 'description'] }),
    uuid: z.string().openapi({ example: 'aefd89eade0a6a09d9b8eab4c22da6a6a37632e6' }),
  })
  .openapi({
    description: 'Tarjetas de crédito, débito y prepago',
    required: ['subtype', 'uuid', 'code', 'name', 'currency', 'balances'],
  })
  .openapi('Cards')

const ContractsSchema = z
  .object({
    contract_id: z
      .string()
      .openapi({
        description:
          'Identificador único del contrato. Valor a indicar para seleccionar el contrato al que se desea acceder',
        example: 'B12345678',
      }),
    description: z
      .string()
      .openapi({
        description:
          'Descripción que acompaña al contract_id. Normalmente será el nombre de la sociedad o persona titular del contrato',
        example: 'WEALTH READER S.L.',
      }),
  })
  .openapi({
    description:
      'Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)',
    required: ['contract_id', 'description'],
  })
  .openapi('Contracts')

const StatisticsSchema = z
  .object({
    SESSION: z
      .string()
      .openapi({
        description:
          'Guarda siempre este valor, tanto si la conexión es correcta como si no. Es necesario para obtener soporte',
        example: '3463754e3540884',
      }),
    execution_time: z
      .number()
      .openapi({ description: 'Duración de la ejecución', example: 0.958119869232178 }),
    operation_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'El valor vendrá indicado cuando se haya invocado a la API a través del Widget que proporciona Wealth Reader. Para saber más sobre este tipo de integración, visita: https://docs-es.wealthreader.com/',
        example: '1827C79229',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'El valor vendrá indicado cuando se ha pedido la custodia de credenciales con la opción tokenize=true',
        example: 'FRJ0mHlaqZwLzu',
      }),
  })
  .openapi({ required: ['SESSION', 'execution_time'] })
  .openapi('Statistics')

const EntitiesSchema = z
  .object({
    bic: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Código BIC. Solamente está indicado cuando la entidad es un banco',
        example: 'BMARES2M',
      }),
    code: z.string().openapi({ description: 'El código de la institución', example: 'bancamarch' }),
    inputs: z
      .object({
        document_type: z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "Nombre del campo. Al ser el campo 'tipo de documento' un listado de valores desplegables, este string es un listado de valores separados por punto y coma",
                example: 'DNI;Pasaporte',
              }),
            placeholder: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información',
                example: '',
              }),
            required: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Indica si el campo es requerido', example: 0 }),
            validation_rule: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Indica el tipo de dato que acepta este campo',
                example: '',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        password: z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Nombre del campo', example: 'Clave de acceso' }),
            placeholder: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información',
                example: '',
              }),
            required: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Indica si el campo es requerido', example: 1 }),
            validation_rule: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Indica el tipo de dato que acepta este campo',
                example: "type='password'",
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        second_password: z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Indica el tipo de dato que acepta este campo',
                example: '',
              }),
            placeholder: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información',
                example: '',
              }),
            required: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Indica si el campo es requerido', example: 0 }),
            validation_rule: z
              .string()
              .exactOptional()
              .openapi({ description: 'The validation rule for the field', example: '' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        user: z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Nombre del campo', example: 'Nombre de usuario' }),
            placeholder: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información',
                example: 'Email',
              }),
            required: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Indica si el campo es requerido', example: 1 }),
            validation_rule: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Indica el tipo de dato que acepta este campo',
                example: "type='email'",
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: [] }),
    logo: z
      .string()
      .openapi({ description: 'Logotipo', example: 'https://cdn.wealthreader.com/bancamarch.svg' }),
    name: z
      .string()
      .openapi({ description: 'The nombre de la institución', example: 'Bancamarch' }),
    statistics: StatisticsSchema.exactOptional(),
  })
  .openapi({ required: ['code', 'name', 'logo', 'inputs', 'statictics'] })
  .openapi('Entities')

const PortfoliosSchema = z
  .object({
    annualized_volatility: z
      .number()
      .openapi({ description: 'El valor será 0 cuando la entidad no lo proporcione', example: 0 }),
    code: z.string().openapi({ example: '1465010091400123456789' }),
    composition: z
      .object({
        DGS: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Valor indicado siempre que la cartera sea subtype: pension-plans',
            example: 'F0062',
          }),
        DGS_description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Valor indicado siempre que la cartera sea subtype: pension-plans',
            example: 'ABANCA EMPLEO, FONDO DE PENSIONES',
          }),
        ISIN: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Valor indicado siempre que la cartera sea subtype: funds o stocks',
            example: 'ES0152743003',
          }),
        ISIN_description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Valor indicado siempre que la cartera sea subtype: funds o stocks',
            example: 'Fondo Dinámico',
          }),
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Divisa en codificación ISO 4217', example: 'EUR' }),
        price: z
          .number()
          .exactOptional()
          .openapi({ description: 'Precio actual', example: 14.5577 }),
        shares: z
          .number()
          .exactOptional()
          .openapi({ description: 'Participaciones', example: 225.0077 }),
        total_amount: z
          .number()
          .exactOptional()
          .openapi({ description: 'Importe total', example: 3275.6 }),
        weighting: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Peso con respecto al resto de la composición de la cartera',
            example: 100,
          }),
      })
      .openapi({ description: 'Composición de la cartera', required: [] }),
    contracting_date: z.iso.date().openapi({ example: '2016-04-27' }),
    contributions: z.number().openapi({ example: 3019.33 }),
    currency: z.string().openapi({ example: 'EUR' }),
    linked_account: z
      .string()
      .openapi({
        description:
          'Código IBAN sin espacios. El valor será not-provided cuando la entidad no lo proporcione',
        example: 'ES4021005321592566566159',
      }),
    name: z.string().openapi({ example: 'Fondo Dinámico' }),
    owners: OwnerSchema,
    subtype: z.enum(['funds', 'stocks', 'pension-plans']).openapi({ example: 'funds' }),
    total_value: z.number().openapi({ example: 3275.6 }),
    transactions: z
      .xor([
        z.object({ ISIN: z.string().exactOptional() }).openapi({ required: [] }),
        z.object({ DGS: z.string().exactOptional() }).openapi({ required: [] }),
      ])
      .openapi({
        required: [
          'uuid',
          'value_date',
          'operation_type',
          'shares',
          'price',
          'total_amount',
          'reference_currency',
          'currency',
          'exchange_rate',
        ],
      }),
    uuid: z
      .string()
      .openapi({
        description: 'Identificador único asignado por Wealth Reader',
        example: '05e4563f5bbf2d06efd0a29ebe7edbbb4e1bff63',
      }),
    weighted_return: z.number().openapi({ example: 8.49 }),
    withholdings: z.number().openapi({ example: 0 }),
    yield: z.number().openapi({ example: 256.27 }),
  })
  .openapi({
    description: 'Carteras de acciones, fondos y planes de pensiones',
    required: [
      'subtype',
      'uuid',
      'code',
      'name',
      'currency',
      'total_value',
      'weighted_return',
      'annualized_volatility',
      'yield',
      'contributions',
      'withholdings',
      'contracting_date',
      'linked_account',
      'owners',
      'composition',
      'transactions',
    ],
  })
  .openapi('Portfolios')

const PropertiesSchema = z
  .object({
    code: z.string().openapi({ description: 'Referencia catastral' }),
    currency: z.string(),
    description: z.string().exactOptional(),
    historic_prices: z.array(
      z
        .object({ date: z.iso.date().exactOptional(), price: z.number().exactOptional() })
        .openapi({ required: [] }),
    ),
    purpose: z.string().exactOptional(),
    trading_price: z.number(),
    trading_year: z.number(),
    uuid: z.string(),
  })
  .openapi({
    description: 'Activos inmobiliarios',
    required: ['uuid', 'code', 'currency', 'trading_price', 'trading_year', 'historic_prices'],
  })
  .openapi('Properties')

const UserInformationSchema = z
  .object({
    ID: z.string().openapi({ example: '12345678Z' }),
    address: z.string().exactOptional().openapi({ example: 'CALLE BAILEN 41 1A' }),
    birth_date: z.iso.date().exactOptional().openapi({ example: '1980-09-26' }),
    birth_place: z.string().exactOptional().openapi({ example: 'SEVILLA' }),
    cell_phone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Número de teléfono con el prefijo internacional, sin espacios',
        example: '+34666123456',
      }),
    city: z.string().exactOptional().openapi({ example: 'MADRID' }),
    country: z.string().exactOptional().openapi({ example: 'SPAIN' }),
    email: z.string().exactOptional().openapi({ example: 'lgarcia@gmail.com' }),
    gender: z.enum(['male', 'female']).exactOptional().openapi({ example: 'male' }),
    job: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'El valor aquí es muy variable de una entidad a otra: de indicar solamente si es cuenta propia o cuenta ajena a indicar el tipo de profesión',
        example: 'CUENTA PROPIA',
      }),
    marital_status: z.enum(['single', 'married']).exactOptional().openapi({ example: 'married' }),
    name: z.string().openapi({ example: 'LUIS GARCIA BAQUERO' }),
    postal_code: z.string().exactOptional().openapi({ example: '28005' }),
  })
  .openapi({
    description: 'Información relativa a la persona que hace login',
    required: ['ID', 'name'],
  })
  .openapi('UserInformation')

const EntityDataSchema = z
  .union([
    z.object({ portfolios: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
    z.object({ accounts: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
    z.object({ cards: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
    z.object({ properties: z.array(z.any()).exactOptional() }).openapi({ required: [] }),
  ])
  .and(
    z
      .object({
        payload: z
          .object({
            accounts: AccountsSchema.exactOptional(),
            cards: CardsSchema.exactOptional(),
            portfolios: PortfoliosSchema.exactOptional(),
            properties: PropertiesSchema.exactOptional(),
            user_information: UserInformationSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        statistics: StatisticsSchema,
        success: z.boolean().openapi({ example: true }),
      })
      .openapi({ required: ['success', 'user_information', 'statistics'] }),
  )
  .openapi({ required: ['success', 'user_information', 'statistics'] })
  .openapi('EntityData')

const ErrorDetailSchema = z
  .object({
    code: z
      .int()
      .openapi({
        description:
          'El código indica la familia del error. Por ejemplo, de 2000 a 2999 indican problemas en el login. Cada código de error debe tratarse de forma diferente. Por ejemplo, si el código indica "Login incorrecto", no se debe reintentar la llamada; si el código indica "entidad en mantenimiento" sí se puede reintentar más tarde. Puedes obtener el listado completo en el método error-codes.',
        example: 1000,
      }),
    contracts: ContractsSchema.exactOptional(),
    message: z
      .string()
      .openapi({
        description:
          'Texto en el idioma de la entidad. Es seguro mostrárselo al usuario y en muchos casos le ayudará a corregir el error',
        example: 'Login incorrecto',
      }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    error: ErrorDetailSchema,
    statistics: StatisticsSchema,
    success: z.boolean().openapi({ example: false }),
  })
  .openapi({ required: ['success', 'error', 'statistics'] })
  .openapi('Error')

const ErrorCodesSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'name')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (Object.hasOwn(val, 'code')) {
        const Schema = z.int().openapi({ description: 'Código de error', example: 2 })
        if (!Schema.safeParse(Reflect.get(val, 'code')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'description')) {
        const Schema = z
          .string()
          .openapi({ description: 'Descripción del error', example: 'Llamada incorrecta' })
        if (!Schema.safeParse(Reflect.get(val, 'description')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'how_to_proceed')) {
        const Schema = z
          .string()
          .openapi({
            description: 'Cómo actuar cuando se obtiene este código de error',
            example:
              'El texto recibido en "message" detallará el motivo del error. Por ejemplo, "El parámetro "api_key" es obligatorio".',
          })
        if (!Schema.safeParse(Reflect.get(val, 'how_to_proceed')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
      if (Object.hasOwn(val, 'possible_reasons')) {
        const Schema = z
          .string()
          .openapi({
            description: 'Posibles causas del error',
            example:
              'Alguno de los parámetros requeridos no se ha enviado o se ha enviado en un formato incorrecto',
          })
        if (!Schema.safeParse(Reflect.get(val, 'possible_reasons')).success) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    }
    if (Array.isArray(val)) {
      {
        const Schema = z.array(z.any())
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .openapi({ required: ['name'] })
  .openapi('ErrorCodes')

export const getEntitiesRoute = createRoute({
  method: 'get',
  path: '/entities',
  tags: ['entity-data'],
  summary: 'Obtiene el listado de entidades soportadas',
  description:
    'Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.\n',
  responses: {
    200: {
      description: 'listado de entidades',
      content: { 'application/json': { schema: z.array(EntitiesSchema) } },
    },
    400: {
      description: 'error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
})

export const postEntitiesRoute = createRoute({
  method: 'post',
  path: '/entities',
  tags: ['entity-data'],
  summary: 'Obtiene los activos financieros y el detalle de su composición',
  description:
    'Obtiene los activos financieros y el detalle de su composición de carteras de inversión compuestas por acciones o fondos, tarjetas de crédito, seguros y préstamos. Incluye información de titularidad de cada uno de los activos así como identificadores únicos que facilitan el tratamiento del dato. Es posible obtener datos Mock. Consulte con el equipo técnico cómo hacerlo.\n',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              OTP: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Solo necesario cuando se esté completando la seguda petición de un login con 2 factores de autenticación, si el tipo de desafío es OTP. Requiere la clave que la entidad le ha enviado al usario final',
                  required: ['api_key', 'code'],
                }),
              SESSION: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Solo necesario cuando se esté completando la seguda petición de un login con 2 factores de autenticación. Requiere el valor de SESSION obtenido en la primera petición',
                }),
              api_key: z
                .string()
                .exactOptional()
                .openapi({ description: 'Identifica al cliente en el servicio' }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Nombre de la entidad. El listado completo está disponible con GET',
                }),
              contract_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Solo necesario cuando el usuario puede acceder a más de un contrato. El listado de contratos disponibles se obtiene al realizar una conexión con un usuario con opción a trabajar con varios contratos en su entidad (que al hacer login en su banca online ve como primera opción una pantalla de selección de contratos) y cuya llamada a la API no se le ha especificado un valor a contract_code',
                }),
              document_type: z
                .enum(['NIF', 'Pasaporte', 'Tarjeta de residencia'])
                .exactOptional()
                .openapi({
                  description:
                    'Tipo de documento, requerido según la entidad. Si es requerido o no, está indicado en el listado de entidades. Ver definición.',
                  example: 'NIF',
                }),
              password: z.string().exactOptional().openapi({ description: 'Contraseña' }),
              second_password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Segunda contraseña, requerida según la entidad.' }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Valor para credenciales custodiadas, tokenizadas previamente mediante una llamada a este método con el valor de tokenize=true. Están disponibles los siguientes usuarios Mock: MOCKDATA, respuesta OK; MOCKOTP, respuesta con desafío OTP; MOCKLOGINKO, respuesta con error de login',
                }),
              tokenize: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Indica si Wealth Reader debe custodiar los credenciales, de tal manera que incluído en el body de respuesta estará un token que permite conectar con la entidad sin necesidad de conocer los credenciales: document_type, user, password, second_password, contract_code',
                }),
              user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Usuario. Están disponibles los siguientes usuarios Mock: MOCKDATA, respuesta OK; MOCKOTP, respuesta con desafío OTP; MOCKLOGINKO, respuesta con error de login',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'datos obtenidos de la entidad',
      content: { 'application/json': { schema: z.array(EntityDataSchema) } },
    },
    400: {
      description: 'error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
})

export const getErrorCodesRoute = createRoute({
  method: 'get',
  path: '/error-codes',
  tags: ['entity-data'],
  summary: 'Listado de códigos de error',
  description:
    'Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.\n',
  request: {
    query: z.object({
      lang: z
        .enum(['es', 'en'])
        .default('es')
        .exactOptional()
        .openapi({
          param: {
            description: 'Idioma de la respuesta',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { default: 'es', enum: ['es', 'en'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Códigos de error junto con su descripción, posible motivo y cómo proceder',
      content: { 'application/json': { schema: z.array(ErrorCodesSchema) } },
    },
    400: {
      description: 'error',
      content: { 'application/json': { schema: z.array(ErrorSchema) } },
    },
  },
})
