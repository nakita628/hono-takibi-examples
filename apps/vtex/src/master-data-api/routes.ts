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

const DEPRECATEDDocumentRequestSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({ description: 'This can be any JSON document field.' }),
  })
  .openapi({ description: 'This can be any pure JSON document.', required: [] })
  .openapi('DEPRECATEDDocumentRequest')

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
      dataEntityId: 'Client',
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

const DocumentRequestSchema = z
  .record(z.string(), z.string().openapi({ description: 'JSON document fields.' }))
  .openapi({
    description: 'This can be any pure JSON document. Add new _Key-Value_ pairs to test.',
    title: 'DocumentRequest',
  })
  .openapi('DocumentRequest')

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
        dataEntityId: 'Client',
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

const ListversionSchema = z
  .object({ date: z.string(), document: z.object({}).exactOptional(), id: z.string() })
  .openapi({ required: ['id', 'date'], title: 'Listversion' })
  .openapi('Listversion')

const NameSchema = z
  .object({ type: z.string() })
  .openapi({ example: { type: 'string' }, required: ['type'], title: 'Name' })
  .openapi('Name')

const PropertiesSchema = z
  .object({ name: NameSchema })
  .openapi({ example: { name: { type: 'string' } }, required: ['name'], title: 'Properties' })
  .openapi('Properties')

const PutindicesRequestSchema = z
  .object({
    fields: z.string().openapi({ description: 'Comma-separted fields of the index' }),
    multiple: z
      .boolean()
      .openapi({
        description:
          'Determines whether the values need to be unique. If false, values must be unique.',
      }),
    name: z.string().openapi({ description: 'Name to identify the index' }),
  })
  .openapi({
    example: { fields: 'fieldName', multiple: false, name: 'indexName' },
    required: ['name', 'multiple', 'fields'],
    title: 'PutindicesRequest',
  })
  .openapi('PutindicesRequest')

const SaveschemabynameRequestSchema = z
  .object({ properties: PropertiesSchema })
  .openapi({
    example: { properties: { name: { type: 'string' } } },
    required: ['properties'],
    title: 'SaveschemabynameRequest',
  })
  .openapi('SaveschemabynameRequest')

const UsingFieldsAllSchema = z
  .object({
    accountId: z.string(),
    accountName: z.string(),
    dataEntityId: z.string(),
    id: z.string(),
  })
  .openapi({
    example: {
      accountId: '14af940d-9300-4279-9355-61d44c2ff879',
      accountName: 'my-store-name',
      dataEntityId: 'Client',
      id: 'b818cbda-e489-11e6-94f4-0ac138d2d42e',
    },
    required: ['id', 'accountId', 'accountName', 'dataEntityId'],
    title: 'Using_fields=_all',
  })
  .openapi('UsingFieldsAll')

const ValidatedocumentbyclustersRequestSchema = z
  .object({ name: z.string(), rule: z.string() })
  .openapi({
    example: { name: 'male', rule: 'gender=male' },
    required: ['name', 'rule'],
    title: 'ValidatedocumentbyclustersRequest',
  })
  .openapi('ValidatedocumentbyclustersRequest')

const CreateUpdateAddressRequestsSchema = z
  .object({
    addressName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Address name.', example: 'My house' }),
    addressType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Type of address. For example, `Residential` or `Pickup`, among others.',
        example: 'residential',
      }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'City of the shipping address.', example: 'Rio de Janeiro' }),
    complement: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Complement to the shipping address in case it applies.',
        example: '3rd floor',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Three letter ISO code of the country of the shipping address.',
        example: 'BRA',
      }),
    neighborhood: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Neighborhood of the address.', example: 'Botafogo' }),
    number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Number of the building, house or apartment in the shipping address.',
        example: '300',
      }),
    postalCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Postal Code.', example: '12345-000' }),
    receiverName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the person who is going to receive the order.',
        example: 'Clark Kent.',
      }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Complement that might help locate the shipping address more precisely in case of delivery.',
        example: 'Grey building',
      }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'State of the shipping address.', example: 'Rio de Janeiro' }),
    street: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Street of the address.', example: 'Praia de Botafogo' }),
    userId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'ID of the customer to whom the address belongs.',
        example: '7e03m794-a33a-11e9-84rt6-0adfa64s5a8e',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateUpdateAddressRequests')

const CreateUpdateProfileRequestsSchema = z
  .object({
    document: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Client document.', example: '12345678900' }),
    documentType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Client document type.', example: 'CPF' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Client email address.', example: 'clark.kent@examplemail.com' }),
    firstName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Client first name.', example: 'Clark' }),
    isCorporate: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Indicates whether client is corporate.', example: false }),
    isNewsletterOptIn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Indicates whether client otped to receive the store newsletter.',
        example: false,
      }),
    lastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Client last name.', example: 'Kent' }),
    localeDefault: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Default locale, used to set store language and currency, for example.',
        example: 'en-US',
      }),
    phone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Client telephone number.', example: '+12025550195' }),
  })
  .openapi({ required: [] })
  .openapi('CreateUpdateProfileRequests')

const DocumentResponseSchema = z
  .object({
    Href: z.string().openapi({ description: 'Document reference URL.' }),
    Id: z.string().openapi({ description: 'ID of the document that was created or updated.' }),
  })
  .openapi({ required: ['Id', 'Href'] })
  .openapi('DocumentResponse')

const AcceptParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
      in: 'header',
      name: 'Accept',
      required: true,
      schema: { example: 'application/json', type: 'string' },
      style: 'simple',
    },
    example: 'application/json',
  })

const ContentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Type of the content being sent.',
      in: 'header',
      name: 'Content-Type',
      required: true,
      schema: { example: 'application/json', type: 'string' },
      style: 'simple',
    },
    example: 'application/json',
  })

const RESTRangeParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query.',
      in: 'header',
      name: 'REST-Range',
      required: true,
      schema: { example: 'resources=0-10', type: 'string' },
      style: 'simple',
    },
    example: 'resources=0-10',
  })

const FieldsParamsSchema = z
  .string()
  .default('email,firstName,document')
  .exactOptional()
  .openapi({
    param: {
      description:
        "Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.",
      in: 'query',
      name: '_fields',
      required: false,
      schema: { default: 'email,firstName,document', type: 'string' },
      style: 'form',
    },
  })

const KeywordParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.',
      in: 'query',
      name: '_keyword',
      required: false,
      schema: { example: 'String to search', type: 'string' },
      style: 'form',
    },
    example: 'String to search',
  })

const SchemaParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Name of the schema the document to be created needs to be compliant with.',
      in: 'query',
      name: '_schema',
      required: false,
      schema: { example: 'schema', type: 'string' },
      style: 'form',
    },
    example: 'schema',
  })

const SizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description: 'Inform the number of documents per request. Maximum value of `1000`.',
      in: 'query',
      name: '_size',
      required: false,
      schema: { default: 100, type: 'integer' },
      style: 'form',
    },
  })

const SortParamsSchema = z
  .string()
  .default('firstName ASC')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.',
      in: 'query',
      name: '_sort',
      required: false,
      schema: { default: 'firstName ASC', type: 'string' },
      style: 'form',
    },
  })

const TokenParamsSchema = z
  .string()
  .default('{tokenValueExample}')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Value of the header `X-VTEX-MD-TOKEN` returned in your first request. Send its value in this query string in the subsequent requests. The token has a timeout of 10 minutes, which refreshes after each new request.',
      in: 'query',
      name: '_token',
      required: false,
      schema: { default: '{tokenValueExample}', type: 'string' },
      style: 'form',
    },
  })

const WhereParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter specification.',
      in: 'query',
      name: '_where',
      required: false,
      schema: { example: 'firstName is not null.', type: 'string' },
      style: 'form',
    },
    example: 'firstName is not null.',
  })

const DataEntityNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.',
      in: 'path',
      name: 'dataEntityName',
      required: true,
      schema: { example: 'Client', type: 'string' },
    },
    example: 'Client',
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the Document.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { example: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e', type: 'string' },
      style: 'simple',
    },
    example: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
  })

const IndexNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Name of the index.',
      in: 'path',
      name: 'index_name',
      required: true,
      schema: { example: '{{index_name}}', type: 'string' },
      style: 'simple',
    },
    example: '{{index_name}}',
  })

const SchemaNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Name of the schema.',
      in: 'path',
      name: 'schemaName',
      required: true,
      schema: { example: '{{schema}}', type: 'string' },
      style: 'simple',
    },
    example: '{{schema}}',
  })

const VersionIdParamsSchema = z
  .string()
  .default('123456789abc')
  .openapi({
    param: {
      description: 'ID of the version to update.',
      in: 'path',
      name: 'versionId',
      required: true,
      schema: { default: '123456789abc', type: 'string' },
      style: 'simple',
    },
  })

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiDataentitiesAddressDocumentsRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/Address/documents',
  tags: ['Addresses'],
  summary: 'Create new customer address',
  description:
    'Creates new customer address. \r\n\r\n> You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).',
  operationId: 'CreateNewCustomerAddress',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ _schema: SchemaParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateUpdateAddressRequestsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Address/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'AD-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const deleteApiDataentitiesAddressDocumentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/Address/documents/{id}',
  tags: ['Addresses'],
  summary: 'Delete customer address',
  description: 'Deletes a customer address.',
  operationId: 'DeleteCustomerAddress',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Address/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'AD-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const patchApiDataentitiesAddressDocumentsIdRoute = createRoute({
  method: 'patch',
  path: '/api/dataentities/Address/documents/{id}',
  tags: ['Addresses'],
  summary: 'Update customer address',
  description:
    'Partially updates a customer address.\r\n\r\n> You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).',
  operationId: 'UpdateCustomerAddress',
  request: {
    query: z.object({ _schema: SchemaParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateUpdateAddressRequestsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Address/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'AD-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const postApiDataentitiesClientDocumentsRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/Client/documents',
  tags: ['Customer profiles'],
  summary: 'Create new customer profile',
  description:
    'Creates new customer profile.\r\n\r\n> You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).',
  operationId: 'CreateNewCustomerProfilev2',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ _schema: SchemaParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateUpdateProfileRequestsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const deleteApiDataentitiesClientDocumentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/Client/documents/{id}',
  tags: ['Customer profiles'],
  summary: 'Delete customer profile',
  description: 'Deletes a customer profile.',
  operationId: 'DeleteCustomerProfile',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const patchApiDataentitiesClientDocumentsIdRoute = createRoute({
  method: 'patch',
  path: '/api/dataentities/Client/documents/{id}',
  tags: ['Customer profiles'],
  summary: 'Update customer profile',
  description:
    'Partially updates a customer profile.\r\n\r\n> You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).',
  operationId: 'UpdateCustomerProfile',
  request: {
    query: z.object({ _schema: SchemaParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateUpdateProfileRequestsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const postApiDataentitiesDataEntityNameDocumentsRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/{dataEntityName}/documents',
  tags: ['Documents'],
  summary: 'Create new document',
  description:
    'This request allows you to create a new document corresponding to a given data entity. For example, you can create a new customer profile or address.\r\n\r\n> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to create.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to create a new customer profile, choose the `CL` data entity and send a request similar to this:\r\n\r\nPOST\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "email": "clark.kent@examplemail.com",\r\n    "firstName": "Clark",\r\n    "lastName": "Kent",\r\n    "phone": "+12025550195",\r\n    "documentType": "CPF",\r\n    "document": "12345678900"\r\n    "isCorporate": false,\r\n    "isNewsletterOptIn": false,\r\n    "localeDefault": "en-US"\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nFor a new address, the data entity is `AD` and the request would look like this:\r\n\r\nPOST\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "addressName": "My House",\r\n    "addressType": "residential",\r\n    "city": "Metropolis",\r\n    "complement": "",\r\n    "country": "USA",\r\n    "postalCode": "11375",\r\n    "receiverName": "Clark Kent",\r\n    "reference": null,\r\n    "state": "MP",\r\n    "street": "Baker Street",\r\n    "neighborhood": "Upper east side",\r\n    "number": "21",\r\n    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"\r\n}\r\n```',
  operationId: 'Createnewdocument',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    query: z.object({ _schema: SchemaParamsSchema }),
    body: { content: { 'application/json': { schema: DocumentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const patchApiDataentitiesDataEntityNameDocumentsRoute = createRoute({
  method: 'patch',
  path: '/api/dataentities/{dataEntityName}/documents',
  tags: ['Documents'],
  summary: 'Create partial document',
  description:
    'This request allows you to partially update a document corresponding to a given data entity.\r\n\r\n> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to create a customer profile\'s `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "phone": "+12025550195",\r\n    "isNewsletterOptIn": false\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nIn order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "receiverName": "Lois Lane"\r\n}\r\n```',
  operationId: 'Createorupdatepartialdocument',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    query: z.object({ _schema: SchemaParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    body: {
      description: 'JSON with the fields to be updated.',
      content: { 'application/json': { schema: DocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const getApiDataentitiesDataEntityNameDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/documents/{id}',
  tags: ['Documents'],
  summary: 'Get document',
  description:
    'Gets document by ID.\n\r\n\r> Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.',
  operationId: 'Getdocument',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema, id: IdParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
  },
  responses: {
    200: {
      description: 'Sucessful response',
      content: {
        'application/json': {
          schema: UsingFieldsAllSchema,
          example: {
            accountId: '14af940d-9300-4279-9355-61d44c2ff879',
            accountName: 'my-store-name',
            dataEntityId: 'Client',
            id: 'b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiDataentitiesDataEntityNameDocumentsIdRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{dataEntityName}/documents/{id}',
  tags: ['Documents'],
  summary: 'Update entire document',
  description:
    'Update an existing document corresponding to a given data entity. For example, you can update a customer profile or address.\r\n\r\n> You can use this request to update documents in any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to update an existing customer profile, choose the `CL` data entity and send a request similar to this:\r\n\r\nPUT\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "email": "clark.kent@examplemail.com",\r\n    "firstName": "Clark",\r\n    "lastName": "Kent",\r\n    "phone": "+12025550195",\r\n    "documentType": "CPF",\r\n    "document": "12345678900"\r\n    "isCorporate": false,\r\n    "isNewsletterOptIn": false,\r\n    "localeDefault": "en-US"\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nTo update an address, the data entity is `AD` and the request would look like this:\r\n\r\nPUT\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "addressName": "My House",\r\n    "addressType": "residential",\r\n    "city": "Metropolis",\r\n    "complement": "",\r\n    "country": "USA",\r\n    "postalCode": "11375",\r\n    "receiverName": "Clark Kent",\r\n    "reference": null,\r\n    "state": "MP",\r\n    "street": "Baker Street",\r\n    "neighborhood": "Upper east side",\r\n    "number": "21",\r\n    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"\r\n}\r\n```',
  operationId: 'Updateentiredocument',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema, id: IdParamsSchema }),
    query: z.object({ _where: WhereParamsSchema, _schema: SchemaParamsSchema }),
    headers: z.object({ Accept: AcceptParamsSchema }),
    body: { content: { 'application/json': { schema: DocumentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const deleteApiDataentitiesDataEntityNameDocumentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/{dataEntityName}/documents/{id}',
  tags: ['Documents'],
  summary: 'Delete document',
  description: 'It allows to delete a document.',
  operationId: 'Deletedocument',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema, id: IdParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const patchApiDataentitiesDataEntityNameDocumentsIdRoute = createRoute({
  method: 'patch',
  path: '/api/dataentities/{dataEntityName}/documents/{id}',
  tags: ['Documents'],
  summary: 'Update partial document',
  description:
    'This request allows you to partially update a document corresponding to a given data entity. For example, you can update some fields of a customer profile or address.\r\n\r\n> You can use this request to update documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to update a customer profile\'s `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "phone": "+12025550195",\r\n    "isNewsletterOptIn": false\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nIn order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    "receiverName": "Lois Lane"\r\n}\r\n```',
  operationId: 'Updatepartialdocument',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema, id: IdParamsSchema }),
    query: z.object({ _where: WhereParamsSchema, _schema: SchemaParamsSchema }),
    headers: z.object({ Accept: AcceptParamsSchema }),
    body: { content: { 'application/json': { schema: DocumentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const postApiDataentitiesDataEntityNameDocumentsIdClustersRoute = createRoute({
  method: 'post',
  path: '/api/dataentities/{dataEntityName}/documents/{id}/clusters',
  tags: ['Clusters'],
  summary: 'Validate document by clusters',
  description:
    'Check if a document is present in one or more clusters (specific set of field values).\r\n\r\n> There is a limit of five rules per request.',
  operationId: 'Validatedocumentbyclusters',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema, id: IdParamsSchema }),
    headers: z.object({ Accept: AcceptParamsSchema }),
    body: {
      description: 'Request body for validating a document by clusters',
      content: {
        'application/json': {
          schema: z
            .string()
            .default(
              '[\n    {\n        "name": "male",        \n        "rule": "gender=male"\n    },\n    {\n        "name": "complex",\n        "rule": "((gender=male AND percent=0.35) AND any is null) AND (name=*go*)"\n    },    \n    {\n        "name": "complex2",\n        "rule": "((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)"\n    },\n    {\n        "name": "createdIn",\n        "rule": "createdIn between 2015-10-28 AND 2015-10-30"\n    }\n]',
            ),
          example:
            '[\n    {\n        "name": "male",        \n        "rule": "gender=male"\n    },\n    {\n        "name": "complex",\n        "rule": "((gender=male AND percent=0.35) AND any is null) AND (name=*go*)"\n    },    \n    {\n        "name": "complex2",\n        "rule": "((gender=male AND percent=0.35) AND any is not null) OR (name=*go*)"\n    },\n    {\n        "name": "createdIn",\n        "rule": "createdIn between 2015-10-28 AND 2015-10-30"\n    }\n]',
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiDataentitiesDataEntityNameDocumentsIdVersionsRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/documents/{id}/versions',
  tags: ['Versions'],
  summary: 'List versions',
  description: 'Allows to list the versions of a document.',
  operationId: 'Listversions',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema, id: IdParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({
      load: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, return all the fields in each version of the document',
            in: 'query',
            name: 'load',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      fields: z
        .string()
        .default('id,dataEntityId,isNewsletterOptIn,createdBy')
        .exactOptional()
        .openapi({
          param: {
            description: 'If `load` is true, the response will return only these specific fields',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'id,dataEntityId,isNewsletterOptIn,createdBy', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(ListversionSchema),
          example: [
            {
              date: '2016-10-18T16:53:32+00:00',
              document: {
                createdBy: '81fc8b10-25b7-48de-b425-7b93554002cc',
                dataEntityId: 'Client',
                id: '72e7f8dd-1168-23ec-82ac-0e2b61663eb4',
                isNewsletterOptIn: true,
              },
              id: '_EAR0cJ7XB5k5grnmm0zeKGlVvVM9WCPy_',
            },
            {
              date: '2016-09-08T20:11:42+00:00',
              document: {
                createdBy: '81fc8b10-25b7-48de-b425-7b93554002cc',
                dataEntityId: 'Client',
                id: '72e7f8dd-1168-23ec-82ac-0e2b61663eb4',
                isNewsletterOptIn: true,
              },
              id: '_E5SH9WXVvhPBNnbQtYAAGqrIysIeNYhV_',
            },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}',
  tags: ['Versions'],
  summary: 'Get version',
  description: 'Returns the version of a document.',
  operationId: 'Getversion',
  request: {
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      id: IdParamsSchema,
      versionId: VersionIdParamsSchema,
    }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
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
              dataEntityId: 'Client',
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

export const putApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}',
  tags: ['Versions'],
  summary: 'Put version',
  description: 'Updates document with version values.',
  operationId: 'Putversion',
  request: {
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      id: IdParamsSchema,
      versionId: z
        .string()
        .default('{{versionId}}')
        .openapi({
          param: {
            description: 'ID of the version to update',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { default: '{{versionId}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DocumentResponseSchema,
          example: {
            Href: 'http://api.vtex.com/my-store-name/dataentities/Client/documents/b818cbda-e489-11e6-94f4-0ac138d2d42e',
            Id: 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e',
          },
        },
      },
    },
  },
})

export const getApiDataentitiesDataEntityNameIndicesRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/indices',
  tags: ['Indices'],
  summary: 'Get indices',
  description: 'Returns the list of indices by data entity.',
  operationId: 'Getindices',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putApiDataentitiesDataEntityNameIndicesRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{dataEntityName}/indices',
  tags: ['Indices'],
  summary: 'Put indices',
  description: 'Create an index.',
  operationId: 'Putindices',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    body: {
      description: 'Request body for creating an index',
      content: {
        'application/json': {
          schema: PutindicesRequestSchema,
          example: { fields: 'fieldName', multiple: false, name: 'indexName' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiDataentitiesDataEntityNameIndicesIndexNameRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/indices/{index_name}',
  tags: ['Indices'],
  summary: 'Get index by name',
  description: 'Returns an index.',
  operationId: 'Getindexbyname',
  request: {
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      index_name: IndexNameParamsSchema,
    }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteApiDataentitiesDataEntityNameIndicesIndexNameRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/{dataEntityName}/indices/{index_name}',
  tags: ['Indices'],
  summary: 'Delete index by name',
  description: 'Delete an index.',
  operationId: 'Deleteindexbyname',
  request: {
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      index_name: IndexNameParamsSchema,
    }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiDataentitiesDataEntityNameSchemasRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/schemas',
  tags: ['Schemas'],
  summary: 'Get schemas',
  description: 'Return the schemas saved.',
  operationId: 'Getschemas',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getApiDataentitiesDataEntityNameSchemasSchemaNameRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/schemas/{schemaName}',
  tags: ['Schemas'],
  summary: 'Get schema by name',
  description: 'Returns an existing schema for a given data entity.',
  operationId: 'Getschemabyname',
  request: {
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      schemaName: SchemaNameParamsSchema,
    }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const putApiDataentitiesDataEntityNameSchemasSchemaNameRoute = createRoute({
  method: 'put',
  path: '/api/dataentities/{dataEntityName}/schemas/{schemaName}',
  tags: ['Schemas'],
  summary: 'Save schema by name',
  description:
    'Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)\r\n\r\n> Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.\r\n\r\nThis request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).',
  operationId: 'Saveschemabyname',
  request: {
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      schemaName: SchemaNameParamsSchema,
    }),
    body: {
      description: 'Request body for saving schema',
      content: {
        'application/json': {
          schema: SaveschemabynameRequestSchema,
          example: { properties: { name: { type: 'string' } } },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const deleteApiDataentitiesDataEntityNameSchemasSchemaNameRoute = createRoute({
  method: 'delete',
  path: '/api/dataentities/{dataEntityName}/schemas/{schemaName}',
  tags: ['Schemas'],
  summary: 'Delete schema by name',
  description: 'Deletes an existing schema for a given data entity.',
  operationId: 'Deleteschemabyname',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
    params: z.object({
      dataEntityName: DataEntityNameParamsSchema,
      schemaName: SchemaNameParamsSchema,
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiDataentitiesDataEntityNameScrollRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/scroll',
  tags: ['Scroll'],
  summary: 'Scroll documents',
  description:
    "In the first request, the `X-VTEX-MD-TOKEN` token will be returned in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.\r\n\r\nAfter the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.\n\r\n\r> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.\r\n\r\n## Request examples\r\n\r\nFirst request:\r\n```\r\n/dataentities/Client/scroll?isCluster=true&_size=250&_fields=email,firstName\r\n```\r\n\r\nRetrieve the token in the header `X-VTEX-MD-TOKEN` from the first request's response and use it to make the next requests.\r\n\r\nSubsequent requests:\r\n```\r\n/dataentities/Client/scroll?_token={tokenValueExample}\r\n```",
  operationId: 'Scrolldocuments',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    headers: z.object({
      'Content-Type': ContentTypeParamsSchema,
      Accept: AcceptParamsSchema,
      'REST-Range': RESTRangeParamsSchema,
    }),
    query: z.object({
      _token: TokenParamsSchema,
      _fields: FieldsParamsSchema,
      _where: WhereParamsSchema,
      _schema: SchemaParamsSchema,
      _keyword: KeywordParamsSchema,
      _sort: SortParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', headers: z.object({}) },
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

export const getApiDataentitiesDataEntityNameSearchRoute = createRoute({
  method: 'get',
  path: '/api/dataentities/{dataEntityName}/search',
  tags: ['Search'],
  summary: 'Search documents',
  description:
    "Retrieves documents' information, while choosing which fields will be returned and filtering documents by specific fields.\r\n\r\n> The response header `REST-Content-Range` indicates the total amount of results for that specific search. For example, it may return `resources 0-100/136108`, which indicates it has returned results from 0 to 100 of a total 136108.\r\n\r\nBelow you can see some query examples and learn more about each query parameter.\n\r\n\r> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.\r\n\r\n## Query examples\r\n\r\n### Simple filter\r\n\r\n```\r\n/dataentities/Client/search?email=my@email.com\r\n```\r\n\r\n### Complex filter\r\n\r\n```\r\n/dataentities/Client/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)\r\n```\r\n\r\n### Date Range\r\n\r\n```\r\n/dataentities/Client/search?_where=createdIn between 2001-01-01 AND 2016-01-01\r\n```\r\n\r\n### Range numeric fields\r\n\r\n```\r\n/dataentities/Client/search?_where=age between 18 AND 25\r\n```\r\n\r\n### Partial filter\r\n\r\n```\r\n/dataentities/Client/search?firstName=*Maria*\r\n```\r\n\r\n### Filter for null values\r\n\r\n```\r\n/dataentities/Client/search?_where=firstName is null\r\n```\r\n\r\n### Filter for non-null values\r\n\r\n```\r\n/dataentities/Client/search?_where=firstName is not null\r\n```\r\n\r\n### Filter for difference\r\n```\r\n/dataentities/Client/search?_where=firstName<>maria\r\n```\r\n\r\n### Filter greater than or less than\r\n```\r\n/dataentities/Client/search?_where=number>5\r\n/dataentities/Client/search?_where=date<2001-01-01\r\n```",
  operationId: 'Searchdocuments',
  request: {
    params: z.object({ dataEntityName: DataEntityNameParamsSchema }),
    headers: z.object({
      'Content-Type': ContentTypeParamsSchema,
      Accept: AcceptParamsSchema,
      'REST-Range': RESTRangeParamsSchema,
    }),
    query: z.object({
      _fields: FieldsParamsSchema,
      _where: WhereParamsSchema,
      _schema: SchemaParamsSchema,
      _keyword: KeywordParamsSchema,
      _sort: SortParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK' },
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
