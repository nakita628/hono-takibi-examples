import { createRoute, z } from '@hono/zod-openapi'

const AccountsSchema = z
  .array(z.looseObject({}))
  .openapi({
    description:
      'Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2',
    required: ['uuid', 'code', 'name', 'currency', 'owners', 'balances', 'transactions'],
  })
  .openapi('Accounts')

const CardsSchema = z
  .array(z.looseObject({}))
  .openapi({
    description: 'Tarjetas de crédito, débito y prepago',
    required: ['subtype', 'uuid', 'code', 'name', 'currency', 'balances'],
  })
  .openapi('Cards')

const ContractsSchema = z
  .array(z.looseObject({}))
  .openapi({
    description:
      'Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)',
    required: ['contract_id', 'description'],
  })
  .openapi('Contracts')

const EntitiesSchema = z
  .array(z.looseObject({}))
  .openapi({ required: ['code', 'name', 'logo', 'inputs', 'statictics'] })
  .openapi('Entities')

const PortfoliosSchema = z
  .array(z.looseObject({}))
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
