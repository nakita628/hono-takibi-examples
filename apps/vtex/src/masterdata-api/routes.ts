import { createRoute, z } from '@hono/zod-openapi'

const ArEVentilaOSchema = z
  .object({ Date: z.string(), Point: z.int32(), Until: z.string() })
  .openapi({
    example: {
      Date: '2016-10-18T16:53:31.0842607Z',
      Point: 1,
      Until: '2017-04-16T16:53:31.0842607Z',
    },
    required: ['Point', 'Date', 'Until'],
    title: 'ArEVentilaO',
  })
  .openapi('ArEVentilaO')

const CreatenewdocumentSchema = z
  .object({ Href: z.string(), Id: z.string() })
  .openapi({
    example: {
      Href: 'http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
      Id: 'CL-b818cbda-e489-11e6-94f4-0ac138d2d42e',
    },
    required: ['Id', 'Href'],
    title: 'Createnewdocument',
  })
  .openapi('Createnewdocument')

const CreatenewdocumentRequestSchema = z
  .object({
    Boolean: z.boolean(),
    Currency: z.number(),
    Date: z.string(),
    Date_Time: z.string(),
    Decimal: z.number(),
    Email: z.string(),
    Integer: z.int32(),
    Long: z.int32(),
    Percent: z.number(),
    Relationship: z.string(),
    Text: z.string(),
    Time: z.string(),
    URL: z.string(),
    Varchar10: z.string(),
    Varchar100: z.string(),
    Varchar50: z.string(),
    Varchar750: z.string(),
  })
  .openapi({
    example: {
      Boolean: true,
      Currency: 2.5,
      Date: '1992-11-17',
      Date_Time: '2016-09-14T19:21:01.3163733Z',
      Decimal: 2.5,
      Email: 'meu@email.com',
      Integer: 1000000,
      Long: 1000000000,
      Percent: 85.42,
      Relationship: '5eb31afb-7ab0-11e6-94b4-0a44686e393f',
      Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      Time: '23:50',
      URL: 'http://www.vtex.com',
      Varchar10: 'Lorem ipsu',
      Varchar100: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      Varchar50: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      Varchar750: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    required: [
      'Boolean',
      'Currency',
      'Date',
      'Date_Time',
      'Decimal',
      'Email',
      'Integer',
      'Long',
      'Percent',
      'Time',
      'URL',
      'Varchar10',
      'Varchar50',
      'Varchar750',
      'Varchar100',
      'Relationship',
      'Text',
    ],
    title: 'CreatenewdocumentRequest',
  })
  .openapi('CreatenewdocumentRequest')

const CreateorupdateentiredocumentRequestSchema = z
  .object({
    Boolean: z.boolean(),
    Currency: z.number(),
    Date: z.string(),
    Date_Time: z.string(),
    Decimal: z.number(),
    Email: z.string(),
    Integer: z.int32(),
    Long: z.int32(),
    Percent: z.number(),
    Relationship: z.string(),
    Text: z.string(),
    Time: z.string(),
    URL: z.string(),
    Varchar10: z.string(),
    Varchar100: z.string(),
    Varchar50: z.string(),
    Varchar750: z.string(),
    id: z.string(),
  })
  .openapi({
    example: {
      Boolean: true,
      Currency: 2.5,
      Date: '1992-11-17',
      Date_Time: '2016-09-14T19:21:01.3163733Z',
      Decimal: 2.5,
      Email: 'meu@email.com',
      Integer: 1000000,
      Long: 1000000000,
      Percent: 85.42,
      Relationship: '5eb31afb-7ab0-11e6-94b4-0a44686e393f',
      Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.... ',
      Time: '23:50',
      URL: 'http://www.vtex.com',
      Varchar10: 'Lorem ipsu',
      Varchar100: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      Varchar50: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      Varchar750: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      id: '4e4c55ac-e491-11e6-94f4-0ac138d2d42e',
    },
    required: [
      'id',
      'Boolean',
      'Currency',
      'Date',
      'Date_Time',
      'Decimal',
      'Email',
      'Integer',
      'Long',
      'Percent',
      'Time',
      'URL',
      'Varchar10',
      'Varchar50',
      'Varchar750',
      'Varchar100',
      'Relationship',
      'Text',
    ],
    title: 'CreateorupdateentiredocumentRequest',
  })
  .openapi('CreateorupdateentiredocumentRequest')

const CreateorupdatepartialdocumentRequestSchema = z
  .object({ Boolean: z.boolean(), id: z.string() })
  .openapi({
    example: { Boolean: true, id: '4e4c55ac-e491-11e6-94f4-0ac138d2d42e' },
    required: ['id', 'Boolean'],
    title: 'CreateorupdatepartialdocumentRequest',
  })
  .openapi('CreateorupdatepartialdocumentRequest')

const DeletescorebyfieldRequestSchema = z
  .object({ key: z.string() })
  .openapi({ example: { key: 'first key' }, required: ['key'], title: 'DeletescorebyfieldRequest' })
  .openapi('DeletescorebyfieldRequest')

const ScoresSchema = z
  .object({ 'Ar e Ventilação': z.array(ArEVentilaOSchema).openapi({ description: '' }) })
  .openapi({
    example: {
      'Ar e Ventilação': [
        { Date: '2016-10-18T16:53:31.0842607Z', Point: 1, Until: '2017-04-16T16:53:31.0842607Z' },
      ],
    },
    required: ['Ar e Ventilação'],
    title: 'Scores',
  })
  .openapi('Scores')

const DepartmentVisitedTagSchema = z
  .object({ DisplayValue: z.string(), Scores: ScoresSchema })
  .openapi({
    example: {
      DisplayValue: 'Ar e Ventilação',
      Scores: {
        'Ar e Ventilação': [
          { Date: '2016-10-18T16:53:31.0842607Z', Point: 1, Until: '2017-04-16T16:53:31.0842607Z' },
        ],
      },
    },
    required: ['DisplayValue', 'Scores'],
    title: 'DepartmentVisitedTag',
  })
  .openapi('DepartmentVisitedTag')

const DocumentSchema = z
  .object({
    accountId: z.string(),
    accountName: z.string(),
    carttag: z.string().nullable(),
    checkouttag: z.string().nullable(),
    dataEntityId: z.string(),
    departmentVisitedTag: DepartmentVisitedTagSchema,
    email: z.string(),
    followers: z.array(z.string()).openapi({ description: '' }),
    id: z.string(),
    rclastsession: z.string(),
    rclastsessiondate: z.string(),
  })
  .openapi({
    example: {
      accountId: 'my-account-id',
      accountName: 'my-account',
      carttag: null,
      checkouttag: null,
      dataEntityId: 'CL',
      departmentVisitedTag: {
        DisplayValue: 'Ar e Ventilação',
        Scores: {
          'Ar e Ventilação': [
            {
              Date: '2016-10-18T16:53:31.0842607Z',
              Point: 1,
              Until: '2017-04-16T16:53:31.0842607Z',
            },
          ],
        },
      },
      email: 'teste@mail.com',
      followers: [],
      id: 'my-id',
      rclastsession: '163054c0-954f-11e6-891e-4d2b1c3450a4',
      rclastsessiondate: '2016-10-18T16:53:00',
    },
    required: [
      'id',
      'dataEntityId',
      'accountId',
      'accountName',
      'followers',
      'email',
      'rclastsession',
      'rclastsessiondate',
      'checkouttag',
      'carttag',
      'departmentVisitedTag',
    ],
    title: 'Document',
  })
  .openapi('Document')

const FieldSchema = z
  .object({
    displayName: z.string(),
    isFilter: z.boolean(),
    isInternal: z.boolean(),
    isNullable: z.boolean(),
    isSearchable: z.boolean(),
    name: z.string(),
    type: z.string(),
  })
  .openapi({
    example: {
      displayName: 'Atualizado em',
      isFilter: true,
      isInternal: true,
      isNullable: true,
      isSearchable: false,
      name: 'updatedIn',
      type: 'Date and Time',
    },
    required: [
      'name',
      'type',
      'displayName',
      'isNullable',
      'isSearchable',
      'isFilter',
      'isInternal',
    ],
    title: 'Field',
  })
  .openapi('Field')

const GetdataentityfieldsSchema = z
  .object({
    acronym: z.string(),
    allowGetAll: z.boolean(),
    fields: z.array(FieldSchema).openapi({ description: '' }),
    name: z.string(),
    primaryKeyType: z.string(),
  })
  .openapi({
    example: {
      acronym: 'SP',
      allowGetAll: false,
      fields: [
        {
          displayName: 'Atualizado em',
          isFilter: true,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'updatedIn',
          type: 'Date and Time',
        },
        {
          displayName: 'Atualizado por',
          isFilter: true,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'updatedBy',
          type: 'User Login',
        },
        {
          displayName: 'Auto increment',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Auto_Increment',
          type: 'Auto Increment',
        },
        {
          displayName: 'Boolean',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Boolean',
          type: 'Boolean',
        },
        {
          displayName: 'Criado em',
          isFilter: true,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'createdIn',
          type: 'Date and Time',
        },
        {
          displayName: 'Criado por',
          isFilter: true,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'createdBy',
          type: 'User Login',
        },
        {
          displayName: 'Currency',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Currency',
          type: 'Currency',
        },
        {
          displayName: 'Date',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Date',
          type: 'Date',
        },
        {
          displayName: 'Date and Time',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Date_Time',
          type: 'Date and Time',
        },
        {
          displayName: 'Decimal',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Decimal',
          type: 'Decimal',
        },
        {
          displayName: 'Email',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'Email',
          type: 'Email',
        },
        {
          displayName: 'Entidade de dados',
          isFilter: false,
          isInternal: true,
          isNullable: false,
          isSearchable: true,
          name: 'dataEntityId',
          type: 'Varchar 10',
        },
        {
          displayName: 'File',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'File',
          type: 'File',
        },
        {
          displayName: 'Filtro automático',
          isFilter: false,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'auto_filter',
          type: 'Text',
        },
        {
          displayName: 'ID da loja',
          isFilter: false,
          isInternal: true,
          isNullable: false,
          isSearchable: false,
          name: 'accountId',
          type: 'Varchar 50',
        },
        {
          displayName: 'Id do documento',
          isFilter: false,
          isInternal: true,
          isNullable: false,
          isSearchable: true,
          name: 'id',
          type: 'Varchar 100',
        },
        {
          displayName: 'Integer',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Integer',
          type: 'Integer',
        },
        {
          displayName: 'Long',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Long',
          type: 'Long',
        },
        {
          displayName: 'Nome da loja',
          isFilter: false,
          isInternal: true,
          isNullable: false,
          isSearchable: true,
          name: 'accountName',
          type: 'Varchar 100',
        },
        {
          displayName: 'Percent',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Percent',
          type: 'Percent',
        },
        {
          displayName: 'Relationship',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'Relationship',
          type: 'Relationship',
        },
        {
          displayName: 'Score2',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Score2',
          type: 'Score2',
        },
        {
          displayName: 'Seguidores',
          isFilter: false,
          isInternal: true,
          isNullable: true,
          isSearchable: true,
          name: 'followers',
          type: 'Text',
        },
        {
          displayName: 'Tags',
          isFilter: false,
          isInternal: true,
          isNullable: true,
          isSearchable: true,
          name: 'tags',
          type: 'Text',
        },
        {
          displayName: 'Text',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Text',
          type: 'Text',
        },
        {
          displayName: 'Time',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'Time',
          type: 'Time',
        },
        {
          displayName: 'Ultima interação em',
          isFilter: true,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'lastInteractionIn',
          type: 'Date and Time',
        },
        {
          displayName: 'Ultima interação por',
          isFilter: true,
          isInternal: true,
          isNullable: true,
          isSearchable: false,
          name: 'lastInteractionBy',
          type: 'User Login',
        },
        {
          displayName: 'URL',
          isFilter: true,
          isInternal: false,
          isNullable: true,
          isSearchable: false,
          name: 'URL',
          type: 'URL',
        },
        {
          displayName: 'User Login',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'User_Login',
          type: 'User Login',
        },
        {
          displayName: 'Varchar 10',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'Varchar10',
          type: 'Varchar 10',
        },
        {
          displayName: 'Varchar 100',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'Varchar100',
          type: 'Varchar 100',
        },
        {
          displayName: 'Varchar 50',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'Varchar50',
          type: 'Varchar 50',
        },
        {
          displayName: 'Varchar 750',
          isFilter: false,
          isInternal: false,
          isNullable: true,
          isSearchable: true,
          name: 'Varchar750',
          type: 'Varchar 750',
        },
      ],
      name: 'Sample',
      primaryKeyType: 'GUID',
    },
    required: ['acronym', 'name', 'primaryKeyType', 'allowGetAll', 'fields'],
    title: 'Getdataentityfields',
  })
  .openapi('Getdataentityfields')

const GetversionSchema = z
  .object({ author: z.string(), document: DocumentSchema, id: z.string() })
  .openapi({
    example: {
      author: 'user-id',
      document: {
        accountId: 'my-account-id',
        accountName: 'my-account',
        carttag: null,
        checkouttag: null,
        dataEntityId: 'CL',
        departmentVisitedTag: {
          DisplayValue: 'Ar e Ventilação',
          Scores: {
            'Ar e Ventilação': [
              {
                Date: '2016-10-18T16:53:31.0842607Z',
                Point: 1,
                Until: '2017-04-16T16:53:31.0842607Z',
              },
            ],
          },
        },
        email: 'teste@mail.com',
        followers: [],
        id: 'my-id',
        rclastsession: '163054c0-954f-11e6-891e-4d2b1c3450a4',
        rclastsessiondate: '2016-10-18T16:53:00',
      },
      id: 'version-id',
    },
    required: ['id', 'author', 'document'],
    title: 'Getversion',
  })
  .openapi('Getversion')

const ListdataentitySchema = z
  .object({
    acronym: z.string(),
    allowGetAll: z.boolean(),
    name: z.string(),
    primaryKeyType: z.string(),
  })
  .openapi({
    example: { acronym: 'SP', allowGetAll: false, name: 'Sample', primaryKeyType: 'GUID' },
    required: ['acronym', 'name', 'primaryKeyType', 'allowGetAll'],
    title: 'Listdataentity',
  })
  .openapi('Listdataentity')

const ListversionSchema = z
  .object({ date: z.string(), id: z.string() })
  .openapi({
    example: { date: '2016-10-18T16:53:32+00:00', id: '_EAR0cJ7XB5k5grnmm0zeKGlVvVM9WCPV_' },
    required: ['id', 'date'],
    title: 'Listversion',
  })
  .openapi('Listversion')

const PutscorebyfieldRequestSchema = z
  .object({ key: z.string(), point: z.int32(), until: z.string() })
  .openapi({
    example: { key: 'first key', point: 1, until: '10m' },
    required: ['key', 'point', 'until'],
    title: 'PutscorebyfieldRequest',
  })
  .openapi('PutscorebyfieldRequest')

const PutscoresRequestSchema = z
  .object({ field: z.string(), key: z.string(), point: z.int32(), until: z.string() })
  .openapi({
    example: { field: 'carttag', key: 'Payment', point: 1, until: '10m' },
    required: ['field', 'key', 'point', 'until'],
    title: 'PutscoresRequest',
  })
  .openapi('PutscoresRequest')

const PutversionSchema = z
  .object({ Href: z.string(), Id: z.string() })
  .openapi({
    example: {
      Href: 'http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
      Id: 'CL-b818cbda-e489-11e6-94f4-0ac138d2d42e',
    },
    required: ['Id', 'Href'],
    title: 'Putversion',
  })
  .openapi('Putversion')

const UpdateentiredocumentRequestSchema = z
  .object({
    Boolean: z.boolean(),
    Currency: z.number(),
    Date: z.string(),
    Date_Time: z.string(),
    Decimal: z.number(),
    Email: z.string(),
    Integer: z.int32(),
    Long: z.int32(),
    Percent: z.number(),
    Relationship: z.string(),
    Text: z.string(),
    Time: z.string(),
    URL: z.string(),
    Varchar10: z.string(),
    Varchar100: z.string(),
    Varchar50: z.string(),
    Varchar750: z.string(),
  })
  .openapi({
    example: {
      Boolean: true,
      Currency: 2.5,
      Date: '1992-11-17',
      Date_Time: '2016-09-14T19:21:01.3163733Z',
      Decimal: 2.5,
      Email: 'meu@email.com',
      Integer: 1000000,
      Long: 1000000000,
      Percent: 85.42,
      Relationship: '5eb31afb-7ab0-11e6-94b4-0a44686e393f',
      Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      Time: '23:50',
      URL: 'http://www.vtex.com',
      Varchar10: 'Lorem ipsu',
      Varchar100: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      Varchar50: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      Varchar750: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    required: [
      'Boolean',
      'Currency',
      'Date',
      'Date_Time',
      'Decimal',
      'Email',
      'Integer',
      'Long',
      'Percent',
      'Time',
      'URL',
      'Varchar10',
      'Varchar50',
      'Varchar750',
      'Varchar100',
      'Relationship',
      'Text',
    ],
    title: 'UpdateentiredocumentRequest',
  })
  .openapi('UpdateentiredocumentRequest')

const UpdatepartialdocumentRequestSchema = z
  .object({ Boolean: z.boolean() })
  .openapi({
    example: { Boolean: false },
    required: ['Boolean'],
    title: 'UpdatepartialdocumentRequest',
  })
  .openapi('UpdatepartialdocumentRequest')

const UsingfiltersSchema = z
  .object({ campo1: z.string(), campo2: z.string(), campo3: z.int32() })
  .openapi({
    example: { campo1: 'valor1', campo2: 'valor2', campo3: 3 },
    required: ['campo1', 'campo2', 'campo3'],
    title: 'Usingfilters',
  })
  .openapi('Usingfilters')

const ValidateDocumentbyClustersRequestSchema = z
  .object({ name: z.string(), rule: z.string() })
  .openapi({
    example: { name: 'male', rule: 'gender=male' },
    required: ['name', 'rule'],
    title: 'ValidateDocumentbyClustersRequest',
  })
  .openapi('ValidateDocumentbyClustersRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiDataentitiesRoute = createRoute({
  method: 'get',
  path: '/api/dataentities',
  tags: ['Data Entities'],
  summary: 'List data entities',
  description:
    'Retrieves the list of existing data entities in the store.\r\n\r\n### Response status code\r\n\r\n1. Status Code `403`: Access not allowed\r\n2. Status Code `200`: Retrieves data entity list\r\n\r\n> All headers listed below are required.',
  operationId: 'Listdataentities',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(ListdataentitySchema),
          example: [
            { acronym: 'SP', allowGetAll: false, name: 'Sample', primaryKeyType: 'GUID' },
            { acronym: 'AD', allowGetAll: false, name: 'Endereço', primaryKeyType: 'GUID' },
            { acronym: 'CL', allowGetAll: false, name: 'Cliente', primaryKeyType: 'GUID' },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiDataentitiesAcronymRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}',
  tags: ['Data Entities'],
  summary: 'Get data entity structure',
  description:
    'Returns the data entity structure with its respective fields and data type.\r\n\r\n### Response status code\r\n\r\n1. Status Code `403`: Access not allowed\r\n2. Status Code `200`: Retrieves data entity structure\r\n\r\n> All headers listed below are required.',
  operationId: 'Getdataentitystructure',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Identifies the kind of data',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetdataentityfieldsSchema,
          example: {
            acronym: 'SP',
            allowGetAll: false,
            fields: [
              {
                displayName: 'Atualizado em',
                isFilter: true,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'updatedIn',
                type: 'Date and Time',
              },
              {
                displayName: 'Atualizado por',
                isFilter: true,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'updatedBy',
                type: 'User Login',
              },
              {
                displayName: 'Auto increment',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Auto_Increment',
                type: 'Auto Increment',
              },
              {
                displayName: 'Boolean',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Boolean',
                type: 'Boolean',
              },
              {
                displayName: 'Criado em',
                isFilter: true,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'createdIn',
                type: 'Date and Time',
              },
              {
                displayName: 'Criado por',
                isFilter: true,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'createdBy',
                type: 'User Login',
              },
              {
                displayName: 'Currency',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Currency',
                type: 'Currency',
              },
              {
                displayName: 'Date',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Date',
                type: 'Date',
              },
              {
                displayName: 'Date and Time',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Date_Time',
                type: 'Date and Time',
              },
              {
                displayName: 'Decimal',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Decimal',
                type: 'Decimal',
              },
              {
                displayName: 'Email',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'Email',
                type: 'Email',
              },
              {
                displayName: 'Entidade de dados',
                isFilter: false,
                isInternal: true,
                isNullable: false,
                isSearchable: true,
                name: 'dataEntityId',
                type: 'Varchar 10',
              },
              {
                displayName: 'File',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'File',
                type: 'File',
              },
              {
                displayName: 'Filtro automático',
                isFilter: false,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'auto_filter',
                type: 'Text',
              },
              {
                displayName: 'ID da loja',
                isFilter: false,
                isInternal: true,
                isNullable: false,
                isSearchable: false,
                name: 'accountId',
                type: 'Varchar 50',
              },
              {
                displayName: 'Id do documento',
                isFilter: false,
                isInternal: true,
                isNullable: false,
                isSearchable: true,
                name: 'id',
                type: 'Varchar 100',
              },
              {
                displayName: 'Integer',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Integer',
                type: 'Integer',
              },
              {
                displayName: 'Long',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Long',
                type: 'Long',
              },
              {
                displayName: 'Nome da loja',
                isFilter: false,
                isInternal: true,
                isNullable: false,
                isSearchable: true,
                name: 'accountName',
                type: 'Varchar 100',
              },
              {
                displayName: 'Percent',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Percent',
                type: 'Percent',
              },
              {
                displayName: 'Relationship',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'Relationship',
                type: 'Relationship',
              },
              {
                displayName: 'Score2',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Score2',
                type: 'Score2',
              },
              {
                displayName: 'Seguidores',
                isFilter: false,
                isInternal: true,
                isNullable: true,
                isSearchable: true,
                name: 'followers',
                type: 'Text',
              },
              {
                displayName: 'Tags',
                isFilter: false,
                isInternal: true,
                isNullable: true,
                isSearchable: true,
                name: 'tags',
                type: 'Text',
              },
              {
                displayName: 'Text',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Text',
                type: 'Text',
              },
              {
                displayName: 'Time',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'Time',
                type: 'Time',
              },
              {
                displayName: 'Ultima interação em',
                isFilter: true,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'lastInteractionIn',
                type: 'Date and Time',
              },
              {
                displayName: 'Ultima interação por',
                isFilter: true,
                isInternal: true,
                isNullable: true,
                isSearchable: false,
                name: 'lastInteractionBy',
                type: 'User Login',
              },
              {
                displayName: 'URL',
                isFilter: true,
                isInternal: false,
                isNullable: true,
                isSearchable: false,
                name: 'URL',
                type: 'URL',
              },
              {
                displayName: 'User Login',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'User_Login',
                type: 'User Login',
              },
              {
                displayName: 'Varchar 10',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'Varchar10',
                type: 'Varchar 10',
              },
              {
                displayName: 'Varchar 100',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'Varchar100',
                type: 'Varchar 100',
              },
              {
                displayName: 'Varchar 50',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'Varchar50',
                type: 'Varchar 50',
              },
              {
                displayName: 'Varchar 750',
                isFilter: false,
                isInternal: false,
                isNullable: true,
                isSearchable: true,
                name: 'Varchar750',
                type: 'Varchar 750',
              },
            ],
            name: 'Sample',
            primaryKeyType: 'GUID',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiDataentitiesAcronymDocumentsRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{acronym}/documents',
  tags: ['Documents'],
  summary: 'Create or update entire document',
  operationId: 'Createorupdateentiredocument',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Identifies the kind of data',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            Boolean: true,
            Currency: 2.5,
            Date: '1992-11-17',
            Date_Time: '2016-09-14T19:21:01.3163733Z',
            Decimal: 2.5,
            Email: 'meu@email.com',
            Integer: 1000000,
            Long: 1000000000,
            Percent: 85.42,
            Relationship: '5eb31afb-7ab0-11e6-94b4-0a44686e393f',
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.... ',
            Time: '23:50',
            URL: 'http://www.vtex.com',
            Varchar10: 'Lorem ipsu',
            Varchar100: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            Varchar50: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            Varchar750: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            id: '4e4c55ac-e491-11e6-94f4-0ac138d2d42e',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiDataentitiesAcronymDocumentsRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/{acronym}/documents',
  tags: ['Documents'],
  summary: 'Create new document',
  description: 'Creates documents through a JSON object where the key is the name of the field.',
  operationId: 'Createnewdocument',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Identifies the kind of data',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            Boolean: true,
            Currency: 2.5,
            Date: '1992-11-17',
            Date_Time: '2016-09-14T19:21:01.3163733Z',
            Decimal: 2.5,
            Email: 'meu@email.com',
            Integer: 1000000,
            Long: 1000000000,
            Percent: 85.42,
            Relationship: '5eb31afb-7ab0-11e6-94b4-0a44686e393f',
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            Time: '23:50',
            URL: 'http://www.vtex.com',
            Varchar10: 'Lorem ipsu',
            Varchar100: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            Varchar50: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            Varchar750: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: CreatenewdocumentSchema,
          example: {
            Href: 'http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'CL-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const patchApiDataentitiesAcronymDocumentsRoute = createRoute({
  method: 'patch',
  path: '/api/dataentities/{acronym}/documents',
  tags: ['Documents'],
  summary: 'Create or update partial document',
  operationId: 'Createorupdatepartialdocument',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Identifies the kind of data',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}),
          example: { Boolean: true, id: '4e4c55ac-e491-11e6-94f4-0ac138d2d42e' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiDataentitiesAcronymDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}/documents/{id}',
  tags: ['Documents'],
  summary: 'Get document',
  description:
    'Retrieves a document.\r\n\r\nAssign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.',
  operationId: 'Getdocument',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: UsingfiltersSchema,
          example: { campo1: 'valor1', campo2: 'valor2', campo3: 3 },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiDataentitiesAcronymDocumentsIdRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{acronym}/documents/{id}',
  tags: ['Documents'],
  summary: 'Update entire document',
  operationId: 'Updateentiredocument',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            Boolean: true,
            Currency: 2.5,
            Date: '1992-11-17',
            Date_Time: '2016-09-14T19:21:01.3163733Z',
            Decimal: 2.5,
            Email: 'meu@email.com',
            Integer: 1000000,
            Long: 1000000000,
            Percent: 85.42,
            Relationship: '5eb31afb-7ab0-11e6-94b4-0a44686e393f',
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            Time: '23:50',
            URL: 'http://www.vtex.com',
            Varchar10: 'Lorem ipsu',
            Varchar100: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            Varchar50: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            Varchar750: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const deleteApiDataentitiesAcronymDocumentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/{acronym}/documents/{id}',
  tags: ['Documents'],
  summary: 'Delete document',
  description: 'It allows to delete a document.',
  operationId: 'Deletedocument',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const patchApiDataentitiesAcronymDocumentsIdRoute = createRoute({
  method: 'patch',
  path: '/api/dataentities/{acronym}/documents/{id}',
  tags: ['Documents'],
  summary: 'Update partial document',
  operationId: 'Updatepartialdocument',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: z.object({}), example: { Boolean: false } } },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postApiDataentitiesAcronymDocumentsIdClustersRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/{acronym}/documents/{id}/clusters',
  tags: ['Clusters'],
  summary: 'Validate Document by Clusters',
  operationId: 'ValidateDocumentbyClusters',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(z.any()),
          example: [
            { name: 'male', rule: 'gender=male' },
            {
              name: 'complex',
              rule: '((gender=male AND percent=0.35) AND any is null) AND (name=*go*)',
            },
            {
              name: 'complex2',
              rule: '((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)',
            },
            { name: 'createdIn', rule: 'createdIn between 2015-10-28 AND 2015-10-30' },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiDataentitiesAcronymDocumentsIdScoreRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{acronym}/documents/{id}/score',
  tags: ['Score'],
  summary: 'Put scores',
  description: 'It allows punctuate in more than one field and more than one key.',
  operationId: 'Putscores',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(PutscoresRequestSchema).openapi({ description: '' }),
          example: [
            { field: 'carttag', key: 'Payment', point: 1, until: '10m' },
            { field: 'scoretest', key: 'Point 1', point: 1, until: '1d' },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{acronym}/documents/{id}/score/{field-name}',
  tags: ['Score'],
  summary: 'Put score by field',
  description: 'It allows to punctuate in a specific field.',
  operationId: 'Putscorebyfield',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
      'field-name': z
        .string()
        .default('{{field-name}}')
        .openapi({
          param: {
            description: 'Name of the field to score',
            in: 'path',
            name: 'field-name',
            required: true,
            schema: { default: '{{field-name}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: PutscorebyfieldRequestSchema,
          example: { key: 'first key', point: 1, until: '10m' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/{acronym}/documents/{id}/score/{field-name}',
  tags: ['Score'],
  summary: 'Delete score by field',
  description: 'Allows you to remove a key from a specific field.',
  operationId: 'Deletescorebyfield',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
      'field-name': z
        .string()
        .default('{{field-name}}')
        .openapi({
          param: {
            description: 'Name of the field to remove score from',
            in: 'path',
            name: 'field-name',
            required: true,
            schema: { default: '{{field-name}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: DeletescorebyfieldRequestSchema,
          example: { key: 'first key' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiDataentitiesAcronymDocumentsIdVersionsRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}/documents/{id}/versions',
  tags: ['Versions'],
  summary: 'List versions',
  description: 'Allows to list the versions of a document.',
  operationId: 'Listversions',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(ListversionSchema),
          example: [
            { date: '2016-10-18T16:53:32+00:00', id: '_EAR0cJ7XB5k5grnmm0zeKGlVvVM9WCPV_' },
            { date: '2016-09-08T20:11:42+00:00', id: '_E5SH9WXVvhPBNnbQtYAAGqrIysIeNYhy_' },
            { date: '2016-07-14T00:36:36+00:00', id: '_cwVfOG7S6XeAiDBhNpLiJM1cwRiJcvdp_' },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}/documents/{id}/versions/{versionId}',
  tags: ['Versions'],
  summary: 'Get version',
  description: 'Returns the version of a document.',
  operationId: 'Getversion',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
      versionId: z
        .string()
        .default('{{versionId}}')
        .openapi({
          param: {
            description: 'Id of the version to get',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { default: '{{versionId}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetversionSchema,
          example: {
            author: 'user-id',
            document: {
              accountId: 'my-account-id',
              accountName: 'my-account',
              carttag: null,
              checkouttag: null,
              dataEntityId: 'CL',
              departmentVisitedTag: {
                DisplayValue: 'Ar e Ventilação',
                Scores: {
                  'Ar e Ventilação': [
                    {
                      Date: '2016-10-18T16:53:31.0842607Z',
                      Point: 1,
                      Until: '2017-04-16T16:53:31.0842607Z',
                    },
                  ],
                },
              },
              email: 'teste@mail.com',
              followers: [],
              id: 'my-id',
              rclastsession: '163054c0-954f-11e6-891e-4d2b1c3450a4',
              rclastsessiondate: '2016-10-18T16:53:00',
            },
            id: 'version-id',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{acronym}/documents/{id}/versions/{versionId}',
  tags: ['Versions'],
  summary: 'Put version',
  description: 'Updates document with version values.',
  operationId: 'Putversion',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
      versionId: z
        .string()
        .default('{{versionId}}')
        .openapi({
          param: {
            description: 'Id of the version to update',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { default: '{{versionId}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: PutversionSchema,
          example: {
            Href: 'http://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'CL-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/{acronym}/documents/{id}/{field}/attachments',
  tags: ['Attachments'],
  summary: 'Save attachment',
  description:
    'This API allows you to save a file in a field of type `File`.\n\r\n\rWhen using in javascript, you must add the header `content-type` with value `multipart/form-data;`\n\r\n\rYou can upload more than one file. Just add a new field in the `form-data` with type `File`.',
  operationId: 'Saveattachment',
  request: {
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
      field: z
        .string()
        .default('{{field}}')
        .openapi({
          param: {
            description: 'Field to attach the file to, as described in admin',
            in: 'path',
            name: 'field',
            required: true,
            schema: { default: '{{field}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(
                  z
                    .file()
                    .openapi({
                      type: 'string',
                      format: 'binary',
                      description: 'File to be uploaded',
                    }),
                ),
              ),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}/documents/{id}/{field}/attachments/{file-name}',
  tags: ['Attachments'],
  summary: 'Retrieve attachment',
  description:
    'Use this API to retrieve a file.\r\n\r\nBe sure to include the file extension in the name. Like in this example:\r\n```\r\n/dataentities/CL/documents/123/file/attachments/image.png\r\n```',
  operationId: 'Retrieveattachment',
  request: {
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Two letter word that identifies the data structure',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .default('{{id}}')
        .openapi({
          param: {
            description: 'Id of the document',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: '{{id}}', type: 'string' },
            style: 'simple',
          },
        }),
      field: z
        .string()
        .default('{{field}}')
        .openapi({
          param: {
            description: 'Field to attach the file to, as described in admin',
            in: 'path',
            name: 'field',
            required: true,
            schema: { default: '{{field}}', type: 'string' },
            style: 'simple',
          },
        }),
      'file-name': z
        .string()
        .default('{{file-name}}')
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'file-name',
            required: true,
            schema: { default: '{{file-name}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getApiDataentitiesAcronymScrollRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}/scroll',
  tags: ['Scroll'],
  summary: 'Scroll documents',
  description:
    'Scrolls through documents according to the query parameter filters.\n\r\n\r> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.\n\r\n\rUse all the features of `search` API to perform filters.\r\n\r\nIn the first request, the `X-VTEX-MD-TOKEN` token will be obtained in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.\r\n\r\n**ATTENTION:** To inform the number of documents per request, use the query string parameter `_size`, which has the maximum value of 1000.\r\n\r\nAfter the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.\r\n\r\n### First request example:\r\n```\r\n/dataentities/CL/scroll?isCluster=true&_size=250&_fields=email,firstName\r\n```\r\n\r\nAfter the first request, retrieve the token in the header `X-VTEX-MD-TOKEN` and make the next requests.\r\n\r\n### Example of subsequent requests:\r\n```\r\n/dataentities/CL/scroll?_token=tokenvalueexample\r\n```',
  operationId: 'Scrolldocuments',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Identifies the kind of data',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: '', headers: z.object({}) },
    429: {
      description: 'Too Many Requests',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'Wildcard queries temporarily blocked due to excessive usage. Consider adjusting your code to remove them or reduce the rate of search requests with wildcards (*). This temporary block may also be due to excessive use of requests with the parameter `keyword`.',
            }),
          example: {},
        },
      },
    },
  },
})

export const getApiDataentitiesAcronymSearchRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{acronym}/search',
  tags: ['Search'],
  summary: 'Search documents',
  description:
    'Search documents by the query parameters described below.\n\r\n\r> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.',
  operationId: 'Searchdocuments',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/vnd.vtex.ds.v10+json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/vnd.vtex.ds.v10+json', type: 'string' },
            style: 'simple',
          },
        }),
      'REST-Range': z
        .string()
        .default('resources=0-10')
        .openapi({
          param: {
            description: 'Range of documents to show',
            in: 'header',
            name: 'REST-Range',
            required: true,
            schema: { default: 'resources=0-10', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      acronym: z
        .string()
        .default('{{acronym}}')
        .openapi({
          param: {
            description: 'Identifies the kind of data',
            in: 'path',
            name: 'acronym',
            required: true,
            schema: { default: '{{acronym}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      _fields: z
        .string()
        .default('email,firstName,document')
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields that will be returned by document',
            in: 'query',
            name: '_fields',
            required: false,
            schema: { default: 'email,firstName,document', type: 'string' },
            style: 'form',
          },
        }),
      _where: z
        .string()
        .default('firstName is not null')
        .exactOptional()
        .openapi({
          param: {
            description: 'Specification of filters. As seen below',
            in: 'query',
            name: '_where',
            required: false,
            schema: { default: 'firstName is not null', type: 'string' },
            style: 'form',
          },
        }),
      _schema: z
        .string()
        .default('{{schema}}')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enter with the name of the schema to filter documents by compatibility of the schema.',
            in: 'query',
            name: '_schema',
            required: false,
            schema: { default: '{{schema}}', type: 'string' },
            style: 'form',
          },
        }),
      _keyword: z
        .string()
        .default('String to search')
        .exactOptional()
        .openapi({
          param: {
            description: 'String to search',
            in: 'query',
            name: '_keyword',
            required: false,
            schema: { default: 'String to search', type: 'string' },
            style: 'form',
          },
        }),
      _sort: z
        .string()
        .default('firstName ASC')
        .exactOptional()
        .openapi({
          param: {
            description: 'Use ASC value to sort ascending or DESC value to sort descending. ',
            in: 'query',
            name: '_sort',
            required: false,
            schema: { default: 'firstName ASC', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Use this endpoint to search Master Data v1 documents with highly customizable filters.\r\n\r\n## Headers\r\n\r\n| Name |  |\r\n| -------- | -------- |\r\n| Content-Type | application/json |\r\n| Accept | application/vnd.vtex.ds.v10+json |\r\n| x-vtex-api-appKey | App Key |\r\n| x-vtex-api-appToken | App Token |\r\n| REST-Range | Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query. |\r\n\r\n\r\n## Querystring\r\n\r\n> Learn more about [Master Data v1 search queries](https://developers.vtex.com/vtex-rest-api/docs/how-the-queries-in-master-data-v1-work).\r\n\r\n| Attribute | What it does |\r\n| -------- | -------- |\r\n| _fields | Fields that will be returned by document |\r\n| _where | Specification of filters |\r\n| _keyword | Search in all fields marked as searchable |\r\n| _sort | Sort order |\r\n\r\n## How to fill the querystring attributes\r\n\r\n1. _fields: Use the field names separated by commas. Ex. `_fields=email,firstName,document`.\r\n2. _where: See the query examples below to learn how to use filters.\r\n3. _keyword: Enter the value you want to query. Use quotes for a partial query. Ex. `_keyword=Maria` or `_keyword=*Maria*`\r\n4. _sort: Use `ASC` value to sort ascending or `DESC` value to sort descending. Ex. `_sort=firstName ASC`.\r\n5. If you want to fetch all fields use the `_all` parameter in the list of response fields. Ex: `_fields=_all`\r\n\r\n\r\n## Query Examples:\r\n\r\n\r\n### Simple filter\r\n\r\n```\r\n/dataentities/CL/search?email=my@email.com\r\n```\r\n\r\n### Complex filter\r\n\r\n```\r\n/dataentities/CL/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)\r\n```\r\n\r\n### Filter by range\r\n\r\n#### Date Range\r\n\r\n```\r\n/dataentities/CL/search?_where=createdIn between 2001-01-01 AND 2016-01-01\r\n```\r\n\r\n#### Range numeric fields\r\n\r\n```\r\n/dataentities/CL/search?_where=age between 18 AND 25\r\n```\r\n\r\n### Partial filter\r\n\r\n```\r\n/dataentities/CL/search?firstName=*Maria*\r\n```\r\n\r\n### Filter for null values\r\n\r\n```\r\n/dataentities/CL/search?_where=firstName is null\r\n```\r\n\r\n### Filter for non-null values\r\n\r\n```\r\n/dataentities/CL/search?_where=firstName is not null\r\n```\r\n\r\n### Filter for difference\r\n```\r\n/dataentities/CL/search?_where=firstName<>maria\r\n```\r\n\r\n### Filter greater than or less than\r\n```\r\n/dataentities/CL/search?_where=number>5\r\n/dataentities/CL/search?_where=date<2001-01-01\r\n```',
      headers: z.object({}),
    },
    503: {
      description: 'Service Unavailable',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description:
                'Wildcard queries temporarily blocked due to excessive usage. Consider adjusting your code to remove them or reduce the rate of search requests with wildcards (*). This temporary block may also be due to excessive use of requests with the parameter `keyword`.',
            }),
          example: {},
        },
      },
    },
  },
})
