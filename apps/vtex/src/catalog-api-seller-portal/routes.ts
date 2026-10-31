import { createRoute, z } from '@hono/zod-openapi'

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiCatalogSellerPortalBrandsRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/brands',
  tags: ['Brand'],
  summary: 'Get List of Brands',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about all brands of the store. It is mandatory to use at least one query parameter. \r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "data": [\r\n        {\r\n            "id": "7",\r\n            "name": "All For Paws",\r\n            "isActive": true,\r\n            "createdAt": "2022-01-17T19:43:14.18678Z",\r\n            "updatedAt": "2022-01-17T19:43:14.18678Z"\r\n        },\r\n        {\r\n            "id": "1",\r\n            "name": "AOC",\r\n            "isActive": true,\r\n            "createdAt": "2021-08-16T21:13:40.55189Z",\r\n            "updatedAt": "2021-08-16T21:13:40.55189Z"\r\n        }\r\n    ],\r\n    "_metadata": {\r\n        "total": 18,\r\n        "from": 1,\r\n        "to": 2,\r\n        "orderBy": "name,asc"\r\n    }\r\n}\r\n```',
  operationId: 'ListBrand',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search word.',
            explode: true,
            in: 'query',
            name: 'q',
            required: false,
            schema: { example: 'tshirt', type: 'string' },
            style: 'form',
          },
          example: 'tshirt',
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The first page of the interval of the brand list.',
            explode: true,
            in: 'query',
            name: 'from',
            required: false,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The last page of the interval of the brand list.',
            explode: true,
            in: 'query',
            name: 'to',
            required: false,
            schema: { example: '50', type: 'string' },
            style: 'form',
          },
          example: '50',
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.',
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { example: 'status,asc;name,asc', type: 'string' },
            style: 'form',
          },
          example: 'status,asc;name,asc',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Brand name.',
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { example: 'Zwilling', type: 'string' },
            style: 'form',
          },
          example: 'Zwilling',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _metadata: z
                .object({
                  from: z
                    .int()
                    .openapi({
                      description: 'The first page of the interval of the brand list.',
                      example: 1,
                      title: 'from',
                    }),
                  orderBy: z
                    .string()
                    .openapi({
                      description:
                        'The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.',
                      example: 'name,desc',
                      title: 'orderBy',
                    }),
                  to: z
                    .int()
                    .openapi({
                      description: 'The last page of the interval of the brand list.',
                      example: 10,
                      title: 'to',
                    }),
                  total: z
                    .int()
                    .openapi({
                      description: 'Total of brands on the list.',
                      example: 1399,
                      title: 'total',
                    }),
                })
                .openapi({
                  description:
                    'Information about the organization and exhibition of the brand list.',
                  example: { from: 1, orderBy: 'name,desc', to: 10, total: 1399 },
                  required: ['total', 'from', 'to', 'orderBy'],
                  title: '_metadata',
                }),
              data: z
                .array(
                  z
                    .object({
                      createdAt: z
                        .string()
                        .openapi({
                          description: 'Date when the brand was created.',
                          example: '2021-01-18T14:41:45.696488+00:00',
                          title: 'createdAt',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'Brand unique identifier number.',
                          example: '863',
                          title: 'id',
                        }),
                      isActive: z
                        .boolean()
                        .openapi({
                          description:
                            'The condition defines if the brand is active (`true`) or inactive (`false`).',
                          example: false,
                          title: 'isActive',
                        }),
                      name: z
                        .string()
                        .openapi({
                          description: 'Brand Name.',
                          example: 'Zwilling',
                          title: 'name',
                        }),
                      updatedAt: z
                        .string()
                        .openapi({
                          description: 'Last date when the brand was updated.',
                          example: '2021-01-18T14:41:45.696488+00:00',
                          title: 'updatedAt',
                        }),
                    })
                    .openapi({
                      example: {
                        createdAt: '2021-01-18T14:41:45.696488+00:00',
                        displayOnMenu: false,
                        id: '863',
                        isActive: false,
                        name: 'Zwilling',
                        score: 0,
                        updatedAt: '2021-01-18T14:41:45.696488+00:00',
                      },
                      required: ['id', 'name', 'isActive', 'createdAt', 'updatedAt'],
                      title: '',
                    }),
                )
                .openapi({
                  description: "List with information about the store's brands.",
                  title: 'data',
                }),
            })
            .openapi({ required: ['data', '_metadata'], title: '' }),
          example: {
            _metadata: { from: 1, orderBy: 'name,desc', to: 10, total: 1399 },
            data: [
              {
                createdAt: '2021-01-18T14:41:45.696488+00:00',
                id: '863',
                isActive: false,
                name: 'Zwilling',
                updatedAt: '2021-01-18T14:41:45.696488+00:00',
              },
              {
                createdAt: '2021-01-18T14:45:32.900176+00:00',
                id: '1298',
                isActive: false,
                name: 'Zooz Pets',
                updatedAt: '2021-01-18T14:45:32.900176+00:00',
              },
            ],
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiCatalogSellerPortalBrandsRoute = createRoute({
  method: 'post',
  path: '/api/catalog-seller-portal/brands',
  tags: ['Brand'],
  summary: 'Create Brand',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Creates a new brand.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n  "name": "Zwilling",\r\n  "isActive": true\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "id": "20",\r\n  "name": "Zwilling",\r\n  "isActive": true,\r\n  "createdAt": "2021-05-17T15:20:36.077253+00:00",\r\n  "updatedAt": "2021-01-18T14:41:45.696488+00:00"\r\n}\r\n```',
  operationId: 'PostBrand',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              isActive: z
                .boolean()
                .openapi({
                  description:
                    'The condition defines if the brand is active (`true`) or inactive (`false`).',
                  example: true,
                  title: 'isActive',
                }),
              name: z
                .string()
                .openapi({ description: 'Brand Name.', example: 'Zwilling', title: 'name' }),
            })
            .openapi({ required: ['name', 'isActive'], title: '' }),
          example: { isActive: true, name: 'Zwilling' },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date when the brand was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Brand unique identifier number.',
                  example: '863',
                  title: 'id',
                }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The condition defines if the brand is active (`true`) or inactive (`false`).',
                  example: true,
                  title: 'isActive',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Brand Name.', example: 'Zwilling', title: 'name' }),
              updatedAt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Last date when the brand was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            createdAt: '2021-05-17T15:20:36.077253+00:00',
            id: '863',
            isActive: true,
            name: 'Zwilling',
            updatedAt: '2021-01-18T14:41:45.696488+00:00',
          },
        },
      },
    },
  },
})

export const getApiCatalogSellerPortalBrandsBrandIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/brands/{brandId}',
  tags: ['Brand'],
  summary: 'Get Brand by ID',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about a brand by its ID.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "id": "863",\r\n  "name": "Zwilling",\r\n  "isActive": false,\r\n  "createdAt": "2021-01-18T14:41:45.696488+00:00",\r\n  "updatedAt": "2021-01-18T14:41:45.696488+00:00"\r\n}\r\n```',
  operationId: 'GetBrand',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      brandId: z
        .string()
        .openapi({
          param: {
            description: 'Brand unique identifier number.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: '863', type: 'string' },
          },
          example: '863',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date when the brand was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Brand unique identifier number.',
                  example: '863',
                  title: 'id',
                }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The condition defines if the brand is active (`true`) or inactive (`false`).',
                  example: false,
                  title: 'isActive',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Brand Name.', example: 'Zwilling', title: 'name' }),
              updatedAt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Last date when the brand was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({
              example: {
                createdAt: '2021-01-18T14:41:45.696488+00:00',
                id: '863',
                isActive: false,
                name: 'Zwilling',
                updatedAt: '2021-01-18T14:41:45.696488+00:00',
              },
              title: '',
              required: [],
            }),
          example: {
            createdAt: '2021-01-18T14:41:45.696488+00:00',
            id: '863',
            isActive: false,
            name: 'Zwilling',
            updatedAt: '2021-01-18T14:41:45.696488+00:00',
          },
        },
      },
    },
  },
})

export const putApiCatalogSellerPortalBrandsBrandIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog-seller-portal/brands/{brandId}',
  tags: ['Brand'],
  summary: 'Update Brand',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Updates an existing brand. \r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n  "id": "20",\r\n  "name": "Zwilling",\r\n  "isActive": true\r\n}\r\n```',
  operationId: 'PutBrand',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      brandId: z
        .string()
        .openapi({
          param: {
            description: 'Brand unique identifier number.',
            in: 'path',
            name: 'brandId',
            required: true,
            schema: { example: '20', type: 'string' },
          },
          example: '20',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'Brand unique identifier number.',
                  example: '20',
                  title: 'id',
                }),
              isActive: z
                .boolean()
                .openapi({
                  description:
                    'The condition defines if the brand is active (`true`) or inactive (`false`).',
                  example: true,
                  title: 'isActive',
                }),
              name: z
                .string()
                .openapi({ description: 'Brand Name.', example: 'Zwilling', title: 'name' }),
            })
            .openapi({ required: ['id', 'name', 'isActive'], title: '' }),
          example: { id: '20', isActive: true, name: 'Zwilling' },
        },
      },
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiCatalogSellerPortalCategoryTreeRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/category-tree',
  tags: ['Category'],
  summary: 'Get Category Tree',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about the category tree from the store.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "roots": [\r\n        {\r\n            "value": {\r\n                "id": "2",\r\n                "name": "Departamento Artesanato",\r\n                "isActive": true\r\n            },\r\n            "children": [\r\n                {\r\n                    "value": {\r\n                        "id": "3",\r\n                        "name": "Artesanato de Barro",\r\n                        "isActive": false\r\n                    },\r\n                    "children": [\r\n                        {\r\n                            "value": {\r\n                                "id": "4",\r\n                                "name": "Artesanato de Barro Vermelho",\r\n                                "isActive": false\r\n                            },\r\n                            "children": []\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            "value": {\r\n                "id": "5",\r\n                "name": "Perfumes",\r\n                "isActive": false\r\n            },\r\n            "children": [\r\n                {\r\n                    "value": {\r\n                        "id": "6",\r\n                        "name": "Perfume Feminino",\r\n                        "isActive": false\r\n                    },\r\n                    "children": []\r\n                },\r\n                {\r\n                    "value": {\r\n                        "id": "7",\r\n                        "name": "Perfume Masculino",\r\n                        "isActive": false,\r\n                        "displayOnMenu": false,\r\n                        "score": 0,\r\n                        "filterByBrand": false,\r\n                        "isClickable": false\r\n                    },\r\n                    "children": []\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    "createdAt": "2021-08-16T20:57:13.070813Z",\r\n    "updatedAt": "2022-07-07T14:24:56.416337Z"\r\n}\r\n```',
  operationId: 'GetCategoryTree',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      depth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Category tree level.',
            in: 'query',
            name: 'depth',
            required: false,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date when the category tree was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              roots: z
                .array(
                  z
                    .object({
                      children: z
                        .array(
                          z
                            .object({
                              value: z
                                .object({
                                  id: z
                                    .string()
                                    .openapi({
                                      description: 'Children category unique identifier number.',
                                      title: 'id',
                                    }),
                                  isActive: z
                                    .boolean()
                                    .openapi({
                                      description:
                                        'The condition defines if the children category is active (`true`) or inactive (`false`).',
                                      example: false,
                                      title: 'isActive',
                                    }),
                                  name: z
                                    .string()
                                    .openapi({
                                      description: 'Children category Name.',
                                      example: 'Perfumes',
                                      title: 'name',
                                    }),
                                })
                                .openapi({
                                  description: 'Object with values of a children category.',
                                  example: { id: '2', isActive: false, name: 'Perfumes' },
                                  required: ['id', 'name', 'isActive'],
                                  title: 'value',
                                }),
                            })
                            .openapi({
                              example: { value: { id: '2', isActive: false, name: 'Perfumes' } },
                              required: ['value'],
                              title: '',
                            }),
                        )
                        .openapi({
                          description: 'List of all children categories of the parent category.',
                          example: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
                          title: 'children',
                        }),
                      value: z
                        .object({
                          id: z
                            .string()
                            .openapi({
                              description: 'Category unique identifier number.',
                              example: '1',
                              title: 'id',
                            }),
                          isActive: z
                            .boolean()
                            .openapi({
                              description:
                                'The condition defines if the category is active (`true`) or inactive (`false`).',
                              example: false,
                              title: 'isActive',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description: 'Category Name.',
                              example: 'sandboxintegracao',
                              title: 'name',
                            }),
                        })
                        .openapi({
                          description: 'Object with values of a category.',
                          example: { id: '1', isActive: false, name: 'sandboxintegracao' },
                          required: ['id', 'name', 'isActive'],
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['value', 'children'], title: '' }),
                )
                .openapi({
                  description: 'List of all categories of the store.',
                  example: [
                    {
                      children: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
                      value: { id: '1', isActive: false, name: 'sandboxintegracao' },
                    },
                  ],
                  title: 'roots',
                }),
              updatedAt: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Last date when the category tree was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({ required: ['roots'], title: '' }),
          example: {
            createdAt: '2021-08-16T20:57:13.070813Z',
            roots: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        value: { id: '4', isActive: false, name: 'Artesanato de Barro Vermelho' },
                      },
                    ],
                    value: { id: '3', isActive: false, name: 'Artesanato de Barro' },
                  },
                ],
                value: { id: '2', isActive: true, name: 'Departamento Artesanato' },
              },
              {
                children: [
                  { children: [], value: { id: '6', isActive: false, name: 'Perfume Feminino' } },
                  {
                    children: [],
                    value: {
                      displayOnMenu: false,
                      filterByBrand: false,
                      id: '7',
                      isActive: false,
                      isClickable: false,
                      name: 'Perfume Masculino',
                      score: 0,
                    },
                  },
                ],
                value: { id: '5', isActive: false, name: 'Perfumes' },
              },
            ],
            updatedAt: '2022-07-07T14:24:56.416337Z',
          },
        },
      },
    },
  },
})

export const putApiCatalogSellerPortalCategoryTreeRoute = createRoute({
  method: 'put',
  path: '/api/catalog-seller-portal/category-tree',
  tags: ['Category'],
  summary: 'Update Category Tree',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Updates the existing categories in the category tree.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n  "roots": [\r\n    {\r\n      "value": {\r\n        "id": "2",\r\n        "name": "Departamento Artesanato",\r\n        "isActive": true\r\n      },\r\n      "children": [\r\n        {\r\n          "value": {\r\n            "id": "3",\r\n            "name": "Artesanato de Barro",\r\n            "isActive": false\r\n          },\r\n          "children": [\r\n            {\r\n              "value": {\r\n                "id": "4",\r\n                "name": "Artesanato de Barro Vermelho",\r\n                "isActive": false\r\n              },\r\n              "children": []\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "value": {\r\n        "id": "5",\r\n        "name": "Perfumes",\r\n        "isActive": false\r\n      },\r\n      "children": [\r\n        {\r\n          "value": {\r\n            "id": "6",\r\n            "name": "Perfume Feminino",\r\n            "isActive": false\r\n          },\r\n          "children": []\r\n        },\r\n        {\r\n          "value": {\r\n            "id": "7",\r\n            "name": "Perfume Masculino",\r\n            "isActive": false,\r\n            "displayOnMenu": false,\r\n            "score": 0,\r\n            "filterByBrand": false,\r\n            "isClickable": false\r\n          },\r\n          "children": []\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}\r\n```',
  operationId: 'UpdateCategoryTree',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              roots: z
                .array(
                  z
                    .object({
                      children: z
                        .array(
                          z
                            .object({
                              value: z
                                .object({
                                  id: z
                                    .string()
                                    .openapi({
                                      description: 'Children category unique identifier number.',
                                      title: 'id',
                                    }),
                                  isActive: z
                                    .boolean()
                                    .openapi({
                                      description:
                                        'The condition defines if the children category is active (`true`) or inactive (`false`).',
                                      example: false,
                                      title: 'isActive',
                                    }),
                                  name: z
                                    .string()
                                    .openapi({
                                      description: 'Children category Name.',
                                      example: 'Perfumes',
                                      title: 'name',
                                    }),
                                })
                                .openapi({
                                  description: 'Object with values of a children category.',
                                  example: { id: '2', isActive: false, name: 'Perfumes' },
                                  required: ['id', 'name', 'isActive'],
                                  title: 'value',
                                }),
                            })
                            .openapi({
                              example: { value: { id: '2', isActive: false, name: 'Perfumes' } },
                              required: ['value'],
                              title: '',
                            }),
                        )
                        .openapi({
                          description: 'List of all children categories of the parent category.',
                          example: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
                          title: 'children',
                        }),
                      value: z
                        .object({
                          id: z
                            .string()
                            .openapi({
                              description: 'Category unique identifier number.',
                              example: '1',
                              title: 'id',
                            }),
                          isActive: z
                            .boolean()
                            .openapi({
                              description:
                                'The condition defines if the category is active (`true`) or inactive (`false`).',
                              example: false,
                              title: 'isActive',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description: 'Category Name.',
                              example: 'sandboxintegracao',
                              title: 'name',
                            }),
                        })
                        .openapi({
                          description: 'Object with values of a category.',
                          example: { id: '1', isActive: false, name: 'sandboxintegracao' },
                          required: ['id', 'name', 'isActive'],
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['value', 'children'], title: '' }),
                )
                .openapi({
                  description: 'List of all categories of the store.',
                  example: [
                    {
                      children: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
                      value: { id: '1', isActive: false, name: 'sandboxintegracao' },
                    },
                  ],
                  title: 'roots',
                }),
            })
            .openapi({ required: ['roots'], title: '' }),
          example: {
            roots: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        value: { id: '4', isActive: false, name: 'Artesanato de Barro Vermelho' },
                      },
                    ],
                    value: { id: '3', isActive: false, name: 'Artesanato de Barro' },
                  },
                ],
                value: { id: '2', isActive: true, name: 'Departamento Artesanato' },
              },
              {
                children: [
                  { children: [], value: { id: '6', isActive: false, name: 'Perfume Feminino' } },
                  { children: [], value: { id: '7', isActive: false, name: 'Perfume Masculino' } },
                ],
                value: { id: '5', isActive: false, name: 'Perfumes' },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiCatalogSellerPortalCategoryTreeCategoriesRoute = createRoute({
  method: 'post',
  path: '/api/catalog-seller-portal/category-tree/categories',
  tags: ['Category'],
  summary: 'Create Category',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Creates a new category.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n  "parentId": "567",\r\n  "Name": "Beauty"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "value": {\r\n    "id": "1",\r\n    "name": "Beauty",\r\n    "isActive": false\r\n  },\r\n  "children": [\r\n    {\r\n      "value": {\r\n        "id": "2",\r\n        "name": "Perfumes",\r\n        "isActive": false\r\n      }\r\n    }\r\n  ]\r\n}\r\n```',
  operationId: 'CreateCategory',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .openapi({ description: 'Category name.', example: 'Beauty', title: 'Name' }),
              parentId: z
                .string()
                .openapi({
                  description: 'Parent category unique identifier number.',
                  example: '567',
                  title: 'parentId',
                }),
            })
            .openapi({ required: ['parentId', 'Name'], title: '' }),
          example: { Name: 'Beauty', parentId: '567' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              children: z
                .array(
                  z
                    .object({
                      value: z
                        .object({
                          id: z
                            .string()
                            .openapi({
                              description: 'Children category unique identifier number.',
                              title: 'id',
                            }),
                          isActive: z
                            .boolean()
                            .openapi({
                              description:
                                'The condition defines if the children category is active (`true`) or inactive (`false`).',
                              example: false,
                              title: 'isActive',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description: 'Children category Name.',
                              example: 'Perfumes',
                              title: 'name',
                            }),
                        })
                        .openapi({
                          description: 'Object with values of a children category.',
                          example: { id: '2', isActive: false, name: 'Perfumes' },
                          required: ['id', 'name', 'isActive'],
                          title: 'value',
                        }),
                    })
                    .openapi({
                      example: { value: { id: '2', isActive: false, name: 'Perfumes' } },
                      required: ['value'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'List of all children categories of the parent category.',
                  example: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
                  title: 'children',
                }),
              value: z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description: 'Category unique identifier number.',
                      example: '1',
                      title: 'id',
                    }),
                  isActive: z
                    .boolean()
                    .openapi({
                      description:
                        'The condition defines if the category is active (`true`) or inactive (`false`).',
                      example: false,
                      title: 'isActive',
                    }),
                  name: z
                    .string()
                    .openapi({
                      description: 'Category Name.',
                      example: 'sandboxintegracao',
                      title: 'name',
                    }),
                })
                .openapi({
                  description: 'Object with values of a category.',
                  example: { id: '1', isActive: false, name: 'sandboxintegracao' },
                  required: ['id', 'name', 'isActive'],
                  title: 'value',
                }),
            })
            .openapi({ required: ['value', 'children'], title: '' }),
          example: {
            children: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
            value: { id: '1', isActive: false, name: 'Beauty' },
          },
        },
      },
    },
  },
})

export const getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/category-tree/categories/{categoryId}',
  tags: ['Category'],
  summary: 'Get Category by ID',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about a category by its ID. \r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "value": {\r\n    "id": "1",\r\n    "name": "sandboxintegracao",\r\n    "isActive": false\r\n  },\r\n  "children": [\r\n    {\r\n      "value": {\r\n        "id": "2",\r\n        "name": "Perfumes",\r\n        "isActive": false\r\n      }\r\n    }\r\n  ]\r\n}\r\n```',
  operationId: 'Getbyid',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'Category unique identifier number.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { example: '1', type: 'string' },
          },
          example: '1',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              children: z
                .array(
                  z
                    .object({
                      value: z
                        .object({
                          id: z
                            .string()
                            .openapi({
                              description: 'Children category unique identifier number.',
                              example: '234',
                              title: 'id',
                            }),
                          isActive: z
                            .boolean()
                            .openapi({
                              description:
                                'The condition defines if the children category is active (`true`) or inactive (`false`).',
                              example: false,
                              title: 'isActive',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description: 'Children category Name.',
                              example: 'Perfumes',
                              title: 'name',
                            }),
                        })
                        .openapi({
                          description: 'Object with values of a children category.',
                          example: { id: '2', isActive: false, name: 'Perfumes' },
                          required: ['id', 'name', 'isActive'],
                          title: 'value',
                        }),
                    })
                    .openapi({
                      example: { value: { id: '2', isActive: false, name: 'Perfumes' } },
                      required: ['value'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'List of all children categories of the parent category.',
                  example: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
                  title: 'children',
                }),
              value: z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description: 'Category unique identifier number.',
                      example: '1',
                      title: 'id',
                    }),
                  isActive: z
                    .boolean()
                    .openapi({
                      description:
                        'The condition defines if the category is active (`true`) or inactive (`false`).',
                      example: false,
                      title: 'isActive',
                    }),
                  name: z
                    .string()
                    .openapi({
                      description: 'Category Name.',
                      example: 'sandboxintegracao',
                      title: 'name',
                    }),
                })
                .openapi({
                  description: 'Object with values of a category.',
                  example: { id: '1', isActive: false, name: 'sandboxintegracao' },
                  required: ['id', 'name', 'isActive'],
                  title: 'value',
                }),
            })
            .openapi({ required: ['value', 'children'], title: '' }),
          example: {
            children: [{ value: { id: '2', isActive: false, name: 'Perfumes' } }],
            value: { id: '1', isActive: false, name: 'sandboxintegracao' },
          },
        },
      },
    },
  },
})

export const postApiCatalogSellerPortalProductsRoute = createRoute({
  method: 'post',
  path: '/api/catalog-seller-portal/products',
  tags: ['Product'],
  summary: 'Create Product',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Creates a new product and its SKUs. \r\n\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "status": "active",\r\n    "name": "VTEX 10 Shirt",\r\n    "description": "Shirt number 10 by VTEX.",\r\n    "brandId": "1",\r\n    "categoryIds": [\r\n        "732"\r\n    ],\r\n    "specs": [\r\n        {\r\n            "name": "Color",\r\n            "values": [\r\n                "Black",\r\n                "White"\r\n            ]\r\n        },\r\n        {\r\n            "name": "Size",\r\n            "values": [\r\n                "S",\r\n                "M",\r\n                "L"\r\n            ]\r\n        }\r\n    ],\r\n    "attributes": [\r\n        {\r\n            "name": "Fabric",\r\n            "value": "Cotton"\r\n        },\r\n        {\r\n            "name": "Gender",\r\n            "value": "Feminine"\r\n        }\r\n    ],\r\n    "slug": "/vtex-shirt",\r\n    "images": [\r\n        {\r\n            "id": "vtex_logo.jpg",\r\n            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",\r\n            "alt": "VTEX"\r\n        }\r\n    ],\r\n    "skus": [\r\n        {\r\n            "name": "VTEX Shirt Black Size S",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234567",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "Black"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "S"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        },\r\n        {\r\n            "name": "VTEX Shirt White Size L",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234568",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "White"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "L"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        }\r\n    ],\r\n    "origin": "vtxleo7778",\r\n    "transportModal": "110",\r\n    "taxCode": "234"\r\n}\r\n```\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "id": "189371",\r\n    "status": "active",\r\n    "name": "VTEX 10 Shirt",\r\n    "brandId": "1",\r\n    "brandName": "AOC",\r\n    "categoryIds": [\r\n        "732"\r\n    ],\r\n    "categoryNames": [\r\n        "/Men/Acessories/"\r\n    ],\r\n    "specs": [\r\n        {\r\n            "name": "Color",\r\n            "values": [\r\n                "Black",\r\n                "White"\r\n            ]\r\n        },\r\n        {\r\n            "name": "Size",\r\n            "values": [\r\n                "S",\r\n                "M",\r\n                "L"\r\n            ]\r\n        }\r\n    ],\r\n    "attributes": [\r\n        {\r\n            "name": "Fabric",\r\n            "value": "Cotton"\r\n        },\r\n        {\r\n            "name": "Gender",\r\n            "value": "Feminine"\r\n        }\r\n    ],\r\n    "slug": "/vtex-shirt",\r\n    "images": [\r\n        {\r\n            "id": "vtex_logo.jpg",\r\n            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",\r\n            "alt": "VTEX"\r\n        }\r\n    ],\r\n    "skus": [\r\n        {\r\n            "id": "182907",\r\n            "name": "VTEX Shirt Black Size S",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234567",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "Black"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "S"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        },\r\n        {\r\n            "id": "182908",\r\n            "name": "VTEX Shirt White Size L",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234568",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "White"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "L"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        }\r\n    ],\r\n    "origin": "vtxleo7778",\r\n    "transportModal": "110",\r\n    "taxCode": "234",\r\n    "createdAt": "2022-11-01T14:15:54.262702Z",\r\n    "updatedAt": "2022-11-01T14:15:54.262702Z"\r\n}\r\n```',
  operationId: 'PostProduct',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Attribute name.',
                          example: 'Fabric',
                          title: 'name',
                        }),
                      value: z
                        .string()
                        .openapi({
                          description: 'Attribute value.',
                          example: 'Cotton',
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['name', 'value'], title: '' }),
                )
                .openapi({
                  description:
                    'Attributes of the product. Attributes are additional properties used to create site browsing filters.',
                  example: [
                    { name: 'Fabric', value: 'Cotton' },
                    { name: 'Gender', value: 'Feminine' },
                  ],
                  title: 'attributes',
                }),
              brandId: z
                .string()
                .openapi({
                  description: "Product's Brand unique identifier number.",
                  example: '1',
                  title: 'brandId',
                }),
              categoryIds: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description:
                    "Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.",
                  example: ['732'],
                  title: 'categoryIds',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Description of the primary information related to the product. A simple and easy-to-understand summary for the customer.',
                  example: 'Descrição camiseta VTEX',
                  title: 'description',
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product reference unique identifier number in the store.',
                  example: 'sandboxintegracao-310117347',
                  title: 'externalId',
                }),
              images: z
                .array(
                  z
                    .object({
                      alt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Image alternative description.',
                          example: 'imagem',
                          title: 'alt',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'Image ID.',
                          example: 'vtex_logo.jpg',
                          title: 'id',
                        }),
                      url: z
                        .string()
                        .openapi({
                          description:
                            'Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).',
                          example:
                            'https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                          title: 'url',
                        }),
                    })
                    .openapi({ required: ['id', 'url'], title: '' }),
                )
                .openapi({
                  description: 'Information of the images of the product.',
                  example: [
                    {
                      alt: 'imagem',
                      id: 'vtex_logo.jpg',
                      url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                    },
                  ],
                  title: 'images',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                  example: 'VTEX Shirt',
                  title: 'name',
                }),
              origin: z
                .string()
                .openapi({
                  description:
                    'Origin account of the product. It is not possible to alter products where the origin is `marketplace`.',
                  example: 'vtxleo7778',
                  title: 'origin',
                }),
              skus: z
                .array(
                  z
                    .object({
                      dimensions: z
                        .object({
                          height: z
                            .number()
                            .openapi({ description: 'SKU height.', example: 2.1, title: 'height' }),
                          length: z
                            .number()
                            .openapi({ description: 'SKU length.', example: 1.6, title: 'length' }),
                          width: z
                            .number()
                            .openapi({ description: 'SKU width.', example: 1.5, title: 'width' }),
                        })
                        .openapi({
                          description: 'SKU dimensions.',
                          example: { height: 2.1, length: 1.6, width: 1.5 },
                          required: ['width', 'height', 'length'],
                          title: 'dimensions',
                        }),
                      ean: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unique SKU identification code (barcode), composed of up to 13 numeric characters.',
                          example: '978-1909621862',
                          title: 'ean',
                        }),
                      externalId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Unique reference code created to improve the store's organization. This is not a required field.",
                          example: '1909621862',
                          title: 'externalId',
                        }),
                      images: z
                        .array(z.any())
                        .openapi({
                          description: "SKU's images IDs.",
                          example: ['vtex_logo.jpg'],
                          title: 'images',
                        }),
                      isActive: z
                        .boolean()
                        .openapi({
                          description: 'If the SKU is active (`true`) or inactive (`false`).',
                          example: false,
                          title: 'isActive',
                        }),
                      manufacturerCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'SKU reference code in the store.',
                          example: '1234567',
                          title: 'code',
                        }),
                      name: z
                        .string()
                        .openapi({
                          description:
                            'SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                          example: 'VTEX Shirt Black Size S',
                          title: 'name',
                        }),
                      specs: z
                        .array(
                          z
                            .object({
                              name: z
                                .string()
                                .openapi({
                                  description: "SKU's specification name.",
                                  example: 'Color',
                                  title: 'name',
                                }),
                              value: z
                                .string()
                                .openapi({
                                  description: "SKU's specification values.",
                                  example: 'Black',
                                  title: 'value',
                                }),
                            })
                            .openapi({ required: ['name', 'value'], title: '' }),
                        )
                        .nullable()
                        .openapi({
                          description:
                            'SKU specifications. This field is mandatory, but nullable if there is only one SKU.',
                          example: [
                            { name: 'Color', value: 'Black' },
                            { name: 'Size', value: 'S' },
                          ],
                          title: 'specs',
                        }),
                      weight: z
                        .int()
                        .openapi({ description: 'SKU weight.', example: 300, title: 'weight' }),
                    })
                    .openapi({
                      required: ['name', 'isActive', 'weight', 'dimensions', 'specs', 'images'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'SKUs of the product.',
                  example: [
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      images: [
                        'https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                      ],
                      isActive: true,
                      manufacturerCode: '1234567',
                      name: 'VTEX Shirt Black Size S',
                      specs: [
                        { name: 'Color', value: 'Black' },
                        { name: 'Size', value: 'S' },
                      ],
                      weight: 300,
                    },
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234568',
                      name: 'VTEX Shirt White Size L',
                      specs: [
                        { name: 'Color', value: 'White' },
                        { name: 'Size', value: 'L' },
                      ],
                      weight: 300,
                    },
                  ],
                  title: 'skus',
                }),
              slug: z
                .string()
                .openapi({
                  description: 'Reference of the product in the URL of the store.',
                  example: '/vtex-shirt',
                  title: 'slug',
                }),
              specs: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Specification name.',
                          example: 'Color',
                          title: 'name',
                        }),
                      values: z
                        .array(z.string().openapi({ title: '' }))
                        .openapi({
                          description: 'Specification values.',
                          example: ['Black', 'White'],
                          title: 'values',
                        }),
                    })
                    .openapi({ required: ['name', 'values'], title: '' }),
                )
                .openapi({
                  description: 'Specifications that will differentiate the possible product SKUs.',
                  example: [
                    { name: 'Color', values: ['Black', 'White'] },
                    { name: 'Size', values: ['S', 'M', 'L'] },
                  ],
                  title: 'specs',
                }),
              status: z
                .string()
                .openapi({
                  description: 'Status of the product. Its values can be `active` or `inactive`.',
                  example: 'active',
                  title: 'status',
                }),
              taxCode: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Product tax code.', example: '123', title: 'taxCode' }),
              transportModal: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Transport modal of the product.',
                  example: '1',
                  title: 'transportModal',
                }),
            })
            .openapi({
              required: [
                'status',
                'name',
                'brandId',
                'categoryIds',
                'specs',
                'attributes',
                'slug',
                'images',
                'skus',
                'origin',
              ],
              title: '',
            }),
          example: {
            attributes: [
              { name: 'Fabric', value: 'Cotton' },
              { name: 'Gender', value: 'Feminine' },
            ],
            brandId: '1',
            categoryIds: ['732'],
            description: 'Shirt number 10 by VTEX.',
            images: [
              {
                alt: 'VTEX',
                id: 'vtex_logo.jpg',
                url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
              },
            ],
            name: 'VTEX 10 Shirt',
            origin: 'vtxleo7778',
            skus: [
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234567',
                name: 'VTEX Shirt Black Size S',
                specs: [
                  { name: 'Color', value: 'Black' },
                  { name: 'Size', value: 'S' },
                ],
                weight: 300,
              },
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234568',
                name: 'VTEX Shirt White Size L',
                specs: [
                  { name: 'Color', value: 'White' },
                  { name: 'Size', value: 'L' },
                ],
                weight: 300,
              },
            ],
            slug: '/vtex-shirt',
            specs: [
              { name: 'Color', values: ['Black', 'White'] },
              { name: 'Size', values: ['S', 'M', 'L'] },
            ],
            status: 'active',
            taxCode: '234',
            transportModal: '110',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Attribute name.',
                          example: 'Fabric',
                          title: 'name',
                        }),
                      value: z
                        .string()
                        .openapi({
                          description: 'Attribute value.',
                          example: 'Cotton',
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['name', 'value'], title: '' }),
                )
                .openapi({
                  description:
                    'Attributes of the product. Attributes are additional properties used to create site browsing filters.',
                  example: [
                    { name: 'Fabric', value: 'Cotton' },
                    { name: 'Gender', value: 'Feminine' },
                  ],
                  title: 'attributes',
                }),
              brandId: z
                .string()
                .openapi({
                  description: "Product's Brand unique identifier number.",
                  example: '1',
                  title: 'brandId',
                }),
              brandName: z
                .string()
                .openapi({
                  description: 'Name of the Brand associated with the product.',
                  example: 'AOC',
                  title: 'brandName',
                }),
              categoryIds: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description:
                    "Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.",
                  example: ['732'],
                  title: 'categoryIds',
                }),
              categoryNames: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description: "Names of the product's categories, displayed in a path format.",
                  example: ['/Men/Acessories/'],
                  title: 'categoryNames',
                }),
              createdAt: z
                .string()
                .openapi({
                  description: 'Date when the product was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product reference unique identifier number in the store.',
                  example: 'sandboxintegracao-310117347',
                  title: 'externalId',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Product's unique identifier number.",
                  example: '189371',
                  title: 'id',
                }),
              images: z
                .array(
                  z
                    .object({
                      alt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Image alternative description.',
                          example: 'imagem',
                          title: 'alt',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'Image ID.',
                          example: 'vtex_logo.jpg',
                          title: 'id',
                        }),
                      url: z
                        .string()
                        .openapi({
                          description:
                            'Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).',
                          example:
                            'https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                          title: 'url',
                        }),
                    })
                    .openapi({ required: ['id', 'url'], title: '' }),
                )
                .openapi({
                  description: 'Information of the images of the product.',
                  example: [
                    {
                      alt: 'imagem',
                      id: 'vtex_logo.jpg',
                      url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                    },
                  ],
                  title: 'images',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                  example: 'VTEX 10 Shirt',
                  title: 'name',
                }),
              origin: z
                .string()
                .openapi({
                  description:
                    'Origin account of the product. It is not possible to alter products where the origin is `marketplace`.',
                  example: 'vtxleo7778',
                  title: 'origin',
                }),
              skus: z
                .array(
                  z
                    .object({
                      dimensions: z
                        .object({
                          height: z
                            .number()
                            .openapi({ description: 'SKU height.', example: 2.1, title: 'height' }),
                          length: z
                            .number()
                            .openapi({ description: 'SKU length.', example: 1.6, title: 'length' }),
                          width: z
                            .number()
                            .openapi({ description: 'SKU width.', example: 1.5, title: 'width' }),
                        })
                        .openapi({
                          description: 'SKU dimensions.',
                          example: { height: 2.1, length: 1.6, width: 1.5 },
                          required: ['width', 'height', 'length'],
                          title: 'dimensions',
                        }),
                      ean: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unique SKU identification code (barcode), composed of up to 13 numeric characters.',
                          example: '978-1909621862',
                          title: 'ean',
                        }),
                      externalId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Unique reference code created to improve the store's organization. This is not a required field.",
                          example: '1909621862',
                          title: 'externalId',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'SKU unique identifier number.',
                          example: '182907',
                          title: 'id',
                        }),
                      images: z
                        .array(z.any())
                        .openapi({
                          description: "SKU's images IDs.",
                          example: ['vtex_logo.jpg'],
                          title: 'images',
                        }),
                      isActive: z
                        .boolean()
                        .openapi({
                          description: 'If the SKU is active (`true`) or inactive (`false`).',
                          example: false,
                          title: 'isActive',
                        }),
                      manufacturerCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'SKU reference code in the store.',
                          example: '1234567',
                          title: 'code',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                          example: 'VTEX Shirt Black Size S',
                          title: 'name',
                        }),
                      specs: z
                        .array(
                          z
                            .object({
                              name: z
                                .string()
                                .openapi({
                                  description: "SKU's specification name.",
                                  example: 'Color',
                                  title: 'name',
                                }),
                              value: z
                                .string()
                                .openapi({
                                  description: "SKU's specification values.",
                                  example: 'Black',
                                  title: 'value',
                                }),
                            })
                            .openapi({ required: ['name', 'value'], title: '' }),
                        )
                        .nullable()
                        .openapi({
                          description:
                            'SKU specifications. This field is mandatory, but nullable if there is only one SKU.',
                          example: [
                            { name: 'Color', value: 'Black' },
                            { name: 'Size', value: 'S' },
                          ],
                          title: 'specs',
                        }),
                      weight: z
                        .int()
                        .openapi({ description: 'SKU weight.', example: 300, title: 'weight' }),
                    })
                    .openapi({
                      required: ['id', 'isActive', 'weight', 'dimensions', 'specs', 'images'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'SKUs of the product.',
                  example: [
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182907',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234567',
                      name: 'VTEX Shirt Black Size S',
                      specs: [
                        { name: 'Color', value: 'Black' },
                        { name: 'Size', value: 'S' },
                      ],
                      weight: 300,
                    },
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182908',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234568',
                      name: 'VTEX Shirt White Size L',
                      specs: [
                        { name: 'Color', value: 'White' },
                        { name: 'Size', value: 'L' },
                      ],
                      weight: 300,
                    },
                  ],
                  title: 'skus',
                }),
              slug: z
                .string()
                .openapi({
                  description: 'Reference of the product in the URL of the store.',
                  example: '/vtex-shirt',
                  title: 'slug',
                }),
              specs: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Specification name.',
                          example: 'Color',
                          title: 'name',
                        }),
                      values: z
                        .array(z.string().openapi({ title: '' }))
                        .openapi({
                          description: 'Specification values.',
                          example: ['Black', 'White'],
                          title: 'values',
                        }),
                    })
                    .openapi({ required: ['name', 'values'], title: '' }),
                )
                .openapi({
                  description: 'Specifications that will differentiate the possible product SKUs.',
                  example: [
                    { name: 'Color', values: ['Black', 'White'] },
                    { name: 'Size', values: ['S', 'M', 'L'] },
                  ],
                  title: 'specs',
                }),
              status: z
                .string()
                .openapi({
                  description: 'Status of the product. Its values can be `active` or `inactive`.',
                  example: 'active',
                  title: 'status',
                }),
              taxCode: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Product tax code.', example: '123', title: 'taxCode' }),
              transportModal: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Transport modal of the product.',
                  example: '1',
                  title: 'transportModal',
                }),
              updatedAt: z
                .string()
                .openapi({
                  description: 'Last date when the product was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({
              required: [
                'status',
                'name',
                'brandId',
                'brandName',
                'categoryIds',
                'categoryNames',
                'specs',
                'attributes',
                'slug',
                'images',
                'skus',
                'origin',
                'createdAt',
                'updatedAt',
              ],
              title: '',
            }),
          example: {
            attributes: [
              { name: 'Fabric', value: 'Cotton' },
              { name: 'Gender', value: 'Feminine' },
            ],
            brandId: '1',
            brandName: 'AOC',
            categoryIds: ['732'],
            categoryNames: ['/sandboxintegracao/Acessórios/'],
            createdAt: '2021-01-18T14:41:45.696488+00:00',
            id: '189371',
            images: [
              {
                alt: 'VTEX',
                id: 'vtex_logo.jpg',
                url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
              },
            ],
            name: 'VTEX 10 Shirt',
            origin: 'vtxleo7778',
            skus: [
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182907',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234567',
                specs: [
                  { name: 'Color', value: 'Black' },
                  { name: 'Size', value: 'S' },
                ],
                weight: 300,
              },
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182908',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234568',
                specs: [
                  { name: 'Color', value: 'White' },
                  { name: 'Size', value: 'L' },
                ],
                weight: 300,
              },
            ],
            slug: '/vtex-shirt',
            specs: [
              { name: 'Color', values: ['Black', 'White'] },
              { name: 'Size', values: ['S', 'M', 'L'] },
            ],
            status: 'active',
            taxCode: null,
            transportModal: null,
            updatedAt: '2021-01-18T14:41:45.696488+00:00',
          },
        },
      },
    },
    204: { description: 'No Content' },
  },
})

export const getApiCatalogSellerPortalProductsParamRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/products/{param}',
  tags: ['Product'],
  summary: 'Get Product by external ID,  SKU ID, SKU external ID or slug',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about a product by its external ID, SKU ID, SKU external ID or product slug. The response also has information about the product\'s SKUs. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "id": "189371",\r\n    "status": "active",\r\n    "name": "VTEX 10 Shirt",\r\n    "brandId": "1",\r\n    "brandName": "AOC",\r\n    "categoryIds": [\r\n        "732"\r\n    ],\r\n    "categoryNames": [\r\n        "/sandboxintegracao/Acessórios/"\r\n    ],\r\n    "specs": [\r\n        {\r\n            "name": "Color",\r\n            "values": [\r\n                "Black",\r\n                "White"\r\n            ]\r\n        },\r\n        {\r\n            "name": "Size",\r\n            "values": [\r\n                "S",\r\n                "M",\r\n                "L"\r\n            ]\r\n        }\r\n    ],\r\n    "attributes": [\r\n        {\r\n            "name": "Fabric",\r\n            "value": "Cotton"\r\n        },\r\n        {\r\n            "name": "Gender",\r\n            "value": "Feminine"\r\n        }\r\n    ],\r\n    "slug": "/vtex-shirt",\r\n    "images": [\r\n        {\r\n            "id": "vtex_logo.jpg",\r\n            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",\r\n            "alt": "VTEX"\r\n        }\r\n    ],\r\n    "skus": [\r\n        {\r\n            "id": "182907",\r\n            "name": "VTEX Shirt Black Size S",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234567",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "Black"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "S"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        },\r\n        {\r\n            "id": "182908",\r\n            "name": "VTEX Shirt White Size L",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234568",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "White"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "L"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        }\r\n    ],\r\n    "transportModal": "123",\r\n    "taxCode": "100",\r\n    "origin": "vtxleo7778",\r\n    "createdAt": "2022-10-31T16:28:25.578067Z",\r\n    "updatedAt": "2022-10-31T16:28:25.578067Z"\r\n}\r\n```',
  operationId: 'GetProductQuery',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description:
              'This part of the path must follow this format: `{param}={value}`. Replace `{param}` with the name of the parameter used to fetch a product, which can be one of the following: `external-id` (product reference unique identifier number in the store), `sku-id` (SKU unique identifier number), `sku-external-id` (SKU reference unique identifier number in the store) or `slug` (reference of the product in the URL of the store). Replace `{value}` with the value of the selected param. Make sure there is a `=` between them.',
            in: 'path',
            name: 'param',
            required: true,
            schema: { example: 'external-id=189371', type: 'string' },
          },
          example: 'external-id=189371',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Attribute name.',
                          example: 'Fabric',
                          title: 'name',
                        }),
                      value: z
                        .string()
                        .openapi({
                          description: 'Attribute value.',
                          example: 'Cotton',
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['name', 'value'], title: '' }),
                )
                .openapi({
                  description:
                    'Attributes of the product. Attributes are additional properties used to create site browsing filters.',
                  example: [
                    { name: 'Fabric', value: 'Cotton' },
                    { name: 'Gender', value: 'Feminine' },
                  ],
                  title: 'attributes',
                }),
              brandId: z
                .string()
                .openapi({
                  description: "Product's Brand unique identifier number.",
                  example: '1',
                  title: 'brandId',
                }),
              brandName: z
                .string()
                .openapi({
                  description: 'Name of the Brand associated with the product.',
                  example: 'AOC',
                  title: 'brandName',
                }),
              categoryIds: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description:
                    "Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.",
                  example: ['732'],
                  title: 'categoryIds',
                }),
              categoryNames: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description: "Names of the product's categories, displayed in a path format.",
                  example: ['/Men/Acessories/'],
                  title: 'categoryNames',
                }),
              createdAt: z
                .string()
                .openapi({
                  description: 'Date when the product was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product reference unique identifier number in the store.',
                  example: 'sandboxintegracao-310117347',
                  title: 'externalId',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Product's unique identifier number.",
                  example: '189371',
                  title: 'id',
                }),
              images: z
                .array(
                  z
                    .object({
                      alt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Image alternative description.',
                          example: 'imagem',
                          title: 'alt',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'Image ID.',
                          example: 'vtex_logo.jpg',
                          title: 'id',
                        }),
                      url: z
                        .string()
                        .openapi({
                          description:
                            'Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).',
                          example:
                            'https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                          title: 'url',
                        }),
                    })
                    .openapi({ required: ['id', 'url'], title: '' }),
                )
                .openapi({
                  description: 'Information of the images of the product.',
                  example: [
                    {
                      alt: 'imagem',
                      id: 'vtex_logo.jpg',
                      url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                    },
                  ],
                  title: 'images',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                  example: 'Camiseta VTEX 10',
                  title: 'name',
                }),
              origin: z
                .string()
                .openapi({
                  description:
                    'Origin account of the product. It is not possible to alter products where the origin is `marketplace`.',
                  example: 'vtxleo7778',
                  title: 'origin',
                }),
              skus: z
                .array(
                  z
                    .object({
                      dimensions: z
                        .object({
                          height: z
                            .number()
                            .openapi({ description: 'SKU height.', example: 2.1, title: 'height' }),
                          length: z
                            .number()
                            .openapi({ description: 'SKU length.', example: 1.6, title: 'length' }),
                          width: z
                            .number()
                            .openapi({ description: 'SKU width.', example: 1.5, title: 'width' }),
                        })
                        .openapi({
                          description: 'SKU dimensions.',
                          example: { height: 2.1, length: 1.6, width: 1.5 },
                          required: ['width', 'height', 'length'],
                          title: 'dimensions',
                        }),
                      ean: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unique SKU identification code (barcode), composed of up to 13 numeric characters.',
                          example: '978-1909621862',
                          title: 'ean',
                        }),
                      externalId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Unique reference code created to improve the store's organization. This is not a required field.",
                          example: '1909621862',
                          title: 'externalId',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'SKU unique identifier number.',
                          example: '182907',
                          title: 'id',
                        }),
                      images: z
                        .array(z.any())
                        .openapi({
                          description: "SKU's images IDs.",
                          example: ['vtex_logo.jpg'],
                          title: 'images',
                        }),
                      isActive: z
                        .boolean()
                        .openapi({
                          description: 'If the SKU is active (`true`) or inactive (`false`).',
                          example: false,
                          title: 'isActive',
                        }),
                      manufacturerCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'SKU reference code in the store.',
                          example: '1234567',
                          title: 'code',
                        }),
                      specs: z
                        .array(
                          z
                            .object({
                              name: z
                                .string()
                                .openapi({
                                  description: "SKU's specification name.",
                                  example: 'Color',
                                  title: 'name',
                                }),
                              value: z
                                .string()
                                .openapi({
                                  description: "SKU's specification values.",
                                  example: 'Black',
                                  title: 'value',
                                }),
                            })
                            .openapi({ required: ['name', 'value'], title: '' }),
                        )
                        .nullable()
                        .openapi({
                          description:
                            'SKU specifications. This field is mandatory, but nullable if there is only one SKU.',
                          example: [
                            { name: 'Color', value: 'Black' },
                            { name: 'Size', value: 'S' },
                          ],
                          title: 'specs',
                        }),
                      weight: z
                        .int()
                        .openapi({ description: 'SKU weight.', example: 300, title: 'weight' }),
                    })
                    .openapi({
                      required: ['id', 'isActive', 'weight', 'dimensions', 'specs', 'images'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'SKUs of the product.',
                  example: [
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182907',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234567',
                      specs: [
                        { name: 'Color', value: 'Black' },
                        { name: 'Size', value: 'S' },
                      ],
                      weight: 300,
                    },
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182908',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234568',
                      specs: [
                        { name: 'Color', value: 'White' },
                        { name: 'Size', value: 'L' },
                      ],
                      weight: 300,
                    },
                  ],
                  title: 'skus',
                }),
              slug: z
                .string()
                .openapi({
                  description: 'Reference of the product in the URL of the store.',
                  example: '/vtex-shirt',
                  title: 'slug',
                }),
              specs: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Specification name.',
                          example: 'Color',
                          title: 'name',
                        }),
                      values: z
                        .array(z.string().openapi({ title: '' }))
                        .openapi({
                          description: 'Specification values.',
                          example: ['Black', 'White'],
                          title: 'values',
                        }),
                    })
                    .openapi({ required: ['name', 'values'], title: '' }),
                )
                .openapi({
                  description: 'Specifications that will differentiate the possible product SKUs.',
                  example: [
                    { name: 'Color', values: ['Black', 'White'] },
                    { name: 'Size', values: ['S', 'M', 'L'] },
                  ],
                  title: 'specs',
                }),
              status: z
                .string()
                .openapi({
                  description: 'Status of the product. Its values can be `active` or `inactive`.',
                  example: 'active',
                  title: 'status',
                }),
              taxCode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product tax code.', example: '123', title: 'taxCode' }),
              transportModal: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Transport modal of the product.',
                  example: '1',
                  title: 'transportModal',
                }),
              updatedAt: z
                .string()
                .openapi({
                  description: 'Last date when the product was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({
              required: [
                'status',
                'name',
                'brandId',
                'brandName',
                'categoryIds',
                'categoryNames',
                'specs',
                'attributes',
                'slug',
                'images',
                'skus',
                'origin',
                'createdAt',
                'updatedAt',
              ],
              title: '',
            }),
          example: {
            attributes: [
              { name: 'Fabric', value: 'Cotton' },
              { name: 'Gender', value: 'Feminine' },
            ],
            brandId: '1',
            brandName: 'AOC',
            categoryIds: ['732'],
            categoryNames: ['/Men/Acessories/'],
            createdAt: '2022-10-31T16:28:25.578067Z',
            id: '189371',
            images: [
              {
                alt: 'VTEX',
                id: 'vtex_logo.jpg',
                url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
              },
            ],
            name: 'VTEX 10 Shirt',
            origin: 'vtxleo7778',
            skus: [
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182907',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234567',
                name: 'VTEX Shirt Black Size S',
                specs: [
                  { name: 'Color', value: 'Black' },
                  { name: 'Size', value: 'S' },
                ],
                weight: 300,
              },
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182908',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234568',
                name: 'VTEX Shirt White Size L',
                specs: [
                  { name: 'Color', value: 'White' },
                  { name: 'Size', value: 'L' },
                ],
                weight: 300,
              },
            ],
            slug: '/vtex-shirt',
            specs: [
              { name: 'Color', values: ['Black', 'White'] },
              { name: 'Size', values: ['S', 'M', 'L'] },
            ],
            status: 'active',
            taxCode: '100',
            transportModal: '123',
            updatedAt: '2022-10-31T16:28:25.578067Z',
          },
        },
      },
    },
  },
})

export const getApiCatalogSellerPortalProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/products/{productId}',
  tags: ['Product'],
  summary: 'Get Product by ID',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about a product by its ID. The response also has information about the product\'s SKUs. \r\n\r\n ## Response body example\r\n\r\n```json\r\n{\r\n    "id": "189371",\r\n    "status": "active",\r\n    "name": "VTEX 10 Shirt",\r\n    "brandId": "1",\r\n    "brandName": "AOC",\r\n    "categoryIds": [\r\n        "732"\r\n    ],\r\n    "categoryNames": [\r\n        "/sandboxintegracao/Acessórios/"\r\n    ],\r\n    "specs": [\r\n        {\r\n            "name": "Color",\r\n            "values": [\r\n                "Black",\r\n                "White"\r\n            ]\r\n        },\r\n        {\r\n            "name": "Size",\r\n            "values": [\r\n                "S",\r\n                "M",\r\n                "L"\r\n            ]\r\n        }\r\n    ],\r\n    "attributes": [\r\n        {\r\n            "name": "Fabric",\r\n            "value": "Cotton"\r\n        },\r\n        {\r\n            "name": "Gender",\r\n            "value": "Feminine"\r\n        }\r\n    ],\r\n    "slug": "/vtex-shirt",\r\n    "images": [\r\n        {\r\n            "id": "vtex_logo.jpg",\r\n            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",\r\n            "alt": "VTEX"\r\n        }\r\n    ],\r\n    "skus": [\r\n        {\r\n            "id": "182907",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234567",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "Black"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "S"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        },\r\n        {\r\n            "id": "182908",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234568",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "White"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "L"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        }\r\n    ],\r\n    "transportModal": "123",\r\n    "taxCode": "100",\r\n    "origin": "vtxleo7778",\r\n    "createdAt": "2022-10-31T16:28:25.578067Z",\r\n    "updatedAt": "2022-10-31T17:09:12.639088Z"\r\n}\r\n```',
  operationId: 'GetProduct',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product unique identifier number.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: '189371', type: 'string' },
          },
          example: '189371',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Attribute name.',
                          example: 'Fabric',
                          title: 'name',
                        }),
                      value: z
                        .string()
                        .openapi({
                          description: 'Attribute value.',
                          example: 'Cotton',
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['name', 'value'], title: '' }),
                )
                .openapi({
                  description:
                    'Attributes of the product. Attributes are additional properties used to create site browsing filters.',
                  example: [
                    { name: 'Fabric', value: 'Cotton' },
                    { name: 'Gender', value: 'Feminine' },
                  ],
                  title: 'attributes',
                }),
              brandId: z
                .string()
                .openapi({
                  description: "Product's Brand unique identifier number.",
                  example: '1',
                  title: 'brandId',
                }),
              brandName: z
                .string()
                .openapi({
                  description: 'Name of the Brand associated with the product.',
                  example: 'AOC',
                  title: 'brandName',
                }),
              categoryIds: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description:
                    "Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.",
                  example: ['732'],
                  title: 'categoryIds',
                }),
              categoryNames: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description: "Names of the product's categories, displayed in a path format.",
                  example: ['/Men/Acessories/'],
                  title: 'categoryNames',
                }),
              createdAt: z
                .string()
                .openapi({
                  description: 'Date when the product was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product reference unique identifier number in the store.',
                  example: 'sandboxintegracao-310117347',
                  title: 'externalId',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Product's unique identifier number.",
                  example: '189371',
                  title: 'id',
                }),
              images: z
                .array(
                  z
                    .object({
                      alt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Image alternative description.',
                          example: 'imagem',
                          title: 'alt',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'Image ID.',
                          example: 'vtex_logo.jpg',
                          title: 'id',
                        }),
                      url: z
                        .string()
                        .openapi({
                          description:
                            'Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).',
                          example:
                            'https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                          title: 'url',
                        }),
                    })
                    .openapi({ required: ['id', 'url'], title: '' }),
                )
                .openapi({
                  description: 'Information of the images of the product.',
                  example: [
                    {
                      alt: 'imagem',
                      id: 'vtex_logo.jpg',
                      url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                    },
                  ],
                  title: 'images',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                  example: 'Camiseta VTEX 10',
                  title: 'name',
                }),
              origin: z
                .string()
                .openapi({
                  description:
                    'Origin account of the product. It is not possible to alter products where the origin is `marketplace`.',
                  example: 'vtxleo7778',
                  title: 'origin',
                }),
              skus: z
                .array(
                  z
                    .object({
                      dimensions: z
                        .object({
                          height: z
                            .number()
                            .openapi({ description: 'SKU height.', example: 2.1, title: 'height' }),
                          length: z
                            .number()
                            .openapi({ description: 'SKU length.', example: 1.6, title: 'length' }),
                          width: z
                            .number()
                            .openapi({ description: 'SKU width.', example: 1.5, title: 'width' }),
                        })
                        .openapi({
                          description: 'SKU dimensions.',
                          example: { height: 2.1, length: 1.6, width: 1.5 },
                          required: ['width', 'height', 'length'],
                          title: 'dimensions',
                        }),
                      ean: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unique SKU identification code (barcode), composed of up to 13 numeric characters.',
                          example: '978-1909621862',
                          title: 'ean',
                        }),
                      externalId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Unique reference code created to improve the store's organization. This is not a required field.",
                          example: '1909621862',
                          title: 'externalId',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'SKU unique identifier number.',
                          example: '182907',
                          title: 'id',
                        }),
                      images: z
                        .array(z.any())
                        .openapi({
                          description: "SKU's images IDs.",
                          example: ['vtex_logo.jpg'],
                          title: 'images',
                        }),
                      isActive: z
                        .boolean()
                        .openapi({
                          description: 'If the SKU is active (`true`) or inactive (`false`).',
                          example: false,
                          title: 'isActive',
                        }),
                      manufacturerCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'SKU reference code in the store.',
                          example: '1234567',
                          title: 'code',
                        }),
                      specs: z
                        .array(
                          z
                            .object({
                              name: z
                                .string()
                                .openapi({
                                  description: "SKU's specification name.",
                                  example: 'Color',
                                  title: 'name',
                                }),
                              value: z
                                .string()
                                .openapi({
                                  description: "SKU's specification values.",
                                  example: 'Black',
                                  title: 'value',
                                }),
                            })
                            .openapi({ required: ['name', 'value'], title: '' }),
                        )
                        .nullable()
                        .openapi({
                          description:
                            'SKU specifications. This field is mandatory, but nullable if there is only one SKU.',
                          example: [
                            { name: 'Color', value: 'Black' },
                            { name: 'Size', value: 'S' },
                          ],
                          title: 'specs',
                        }),
                      weight: z
                        .int()
                        .openapi({ description: 'SKU weight.', example: 300, title: 'weight' }),
                    })
                    .openapi({
                      required: ['id', 'isActive', 'weight', 'dimensions', 'specs', 'images'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'SKUs of the product.',
                  example: [
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182907',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234567',
                      specs: [
                        { name: 'Color', value: 'Black' },
                        { name: 'Size', value: 'S' },
                      ],
                      weight: 300,
                    },
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182908',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234568',
                      specs: [
                        { name: 'Color', value: 'White' },
                        { name: 'Size', value: 'L' },
                      ],
                      weight: 300,
                    },
                  ],
                  title: 'skus',
                }),
              slug: z
                .string()
                .openapi({
                  description: 'Reference of the product in the URL of the store.',
                  example: '/vtex-shirt',
                  title: 'slug',
                }),
              specs: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Specification name.',
                          example: 'Color',
                          title: 'name',
                        }),
                      values: z
                        .array(z.string().openapi({ title: '' }))
                        .openapi({
                          description: 'Specification values.',
                          example: ['Black', 'White'],
                          title: 'values',
                        }),
                    })
                    .openapi({ required: ['name', 'values'], title: '' }),
                )
                .openapi({
                  description: 'Specifications that will differentiate the possible product SKUs.',
                  example: [
                    { name: 'Color', values: ['Black', 'White'] },
                    { name: 'Size', values: ['S', 'M', 'L'] },
                  ],
                  title: 'specs',
                }),
              status: z
                .string()
                .openapi({
                  description: 'Status of the product. Its values can be `active` or `inactive`.',
                  example: 'active',
                  title: 'status',
                }),
              taxCode: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Product tax code.', example: '123', title: 'taxCode' }),
              transportModal: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Transport modal of the product.',
                  example: '1',
                  title: 'transportModal',
                }),
              updatedAt: z
                .string()
                .openapi({
                  description: 'Last date when the product was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({
              required: [
                'status',
                'name',
                'brandId',
                'brandName',
                'categoryIds',
                'categoryNames',
                'specs',
                'attributes',
                'slug',
                'images',
                'skus',
                'origin',
                'createdAt',
                'updatedAt',
              ],
              title: '',
            }),
          example: {
            attributes: [
              { name: 'Fabric', value: 'Cotton' },
              { name: 'Gender', value: 'Feminine' },
            ],
            brandId: '1',
            brandName: 'AOC',
            categoryIds: ['732'],
            categoryNames: ['/sandboxintegracao/Acessórios/'],
            createdAt: '2022-10-31T16:28:25.578067Z',
            id: '189371',
            images: [
              {
                alt: 'VTEX',
                id: 'vtex_logo.jpg',
                url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
              },
            ],
            name: 'VTEX 10 Shirt',
            origin: 'vtxleo7778',
            skus: [
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182907',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234567',
                specs: [
                  { name: 'Color', value: 'Black' },
                  { name: 'Size', value: 'S' },
                ],
                weight: 300,
              },
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182908',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234568',
                specs: [
                  { name: 'Color', value: 'White' },
                  { name: 'Size', value: 'L' },
                ],
                weight: 300,
              },
            ],
            slug: '/vtex-shirt',
            specs: [
              { name: 'Color', values: ['Black', 'White'] },
              { name: 'Size', values: ['S', 'M', 'L'] },
            ],
            status: 'active',
            taxCode: '100',
            transportModal: '123',
            updatedAt: '2022-10-31T17:09:12.639088Z',
          },
        },
      },
    },
  },
})

export const putApiCatalogSellerPortalProductsProductIdRoute = createRoute({
  method: 'put',
  path: '/api/catalog-seller-portal/products/{productId}',
  tags: ['Product'],
  summary: 'Update Product',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Updates an existing product and its SKUs. \r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "id": "189371",\r\n    "status": "active",\r\n    "name": "VTEX 10 Shirt",\r\n    "description": "Shirt number 10 by VTEX.",\r\n    "brandId": "1",\r\n    "categoryIds": [\r\n        "732"\r\n    ],\r\n    "specs": [\r\n        {\r\n            "name": "Color",\r\n            "values": [\r\n                "Black",\r\n                "White"\r\n            ]\r\n        },\r\n        {\r\n            "name": "Size",\r\n            "values": [\r\n                "S",\r\n                "M",\r\n                "L"\r\n            ]\r\n        }\r\n    ],\r\n    "attributes": [\r\n        {\r\n            "name": "Fabric",\r\n            "value": "Cotton"\r\n        },\r\n        {\r\n            "name": "Gender",\r\n            "value": "Feminine"\r\n        }\r\n    ],\r\n    "slug": "/vtex-shirt",\r\n    "transportModal": null,\r\n    "taxCode": null,\r\n    "images": [\r\n        {\r\n            "id": "vtex_logo.jpg",\r\n            "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",\r\n            "alt": "VTEX"\r\n        }\r\n    ],\r\n    "skus": [\r\n        {\r\n            "name": "VTEX Shirt Black Size S",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234567",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "Black"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "S"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        },\r\n        {\r\n            "name": "VTEX Shirt White Size L",\r\n            "externalId": "1909621862",\r\n            "manufacturerCode": "1234568",\r\n            "isActive": true,\r\n            "weight": 300,\r\n            "dimensions": {\r\n                "width": 1.5,\r\n                "height": 2.1,\r\n                "length": 1.6\r\n            },\r\n            "specs": [\r\n                {\r\n                    "name": "Color",\r\n                    "value": "White"\r\n                },\r\n                {\r\n                    "name": "Size",\r\n                    "value": "L"\r\n                }\r\n            ],\r\n            "images": [\r\n                "vtex_logo.jpg"\r\n            ]\r\n        }\r\n    ],\r\n    "origin": "vtxleo7778"\r\n}\r\n```',
  operationId: 'PutProduct',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product unique identifier number.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: '189371', type: 'string' },
          },
          example: '189371',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Attribute name.',
                          example: 'Fabric',
                          title: 'name',
                        }),
                      value: z
                        .string()
                        .openapi({
                          description: 'Attribute value.',
                          example: 'Cotton',
                          title: 'value',
                        }),
                    })
                    .openapi({ required: ['name', 'value'], title: '' }),
                )
                .openapi({
                  description:
                    'Attributes of the product. Attributes are additional properties used to create site browsing filters.',
                  example: [
                    { name: 'Fabric', value: 'Cotton' },
                    { name: 'Gender', value: 'Feminine' },
                  ],
                  title: 'attributes',
                }),
              brandId: z
                .string()
                .openapi({
                  description: "Product's Brand unique identifier number.",
                  example: '1',
                  title: 'brandId',
                }),
              categoryIds: z
                .array(z.string().openapi({ title: '' }))
                .openapi({
                  description:
                    "Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.",
                  example: ['732'],
                  title: 'categoryIds',
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product reference unique identifier number in the store.',
                  example: 'sandboxintegracao-310117347',
                  title: 'externalId',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Product's unique identifier number.",
                  example: '189371',
                  title: 'id',
                }),
              images: z
                .array(
                  z
                    .object({
                      alt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Image alternative description.',
                          example: 'imagem',
                          title: 'alt',
                        }),
                      id: z
                        .string()
                        .openapi({
                          description: 'Image ID.',
                          example: 'vtex_logo.jpg',
                          title: 'id',
                        }),
                      url: z
                        .string()
                        .openapi({
                          description:
                            'Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).',
                          example:
                            'https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                          title: 'url',
                        }),
                    })
                    .openapi({ required: ['id', 'url'], title: '' }),
                )
                .openapi({
                  description: 'Information of the images of the product.',
                  example: [
                    {
                      alt: 'imagem',
                      id: 'vtex_logo.jpg',
                      url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
                    },
                  ],
                  title: 'images',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                  example: 'Camiseta VTEX 10',
                  title: 'name',
                }),
              origin: z
                .string()
                .openapi({
                  description:
                    'Origin account of the product. It is not possible to alter products where the origin is `marketplace`.',
                  example: 'vtxleo7778',
                  title: 'origin',
                }),
              skus: z
                .array(
                  z
                    .object({
                      dimensions: z
                        .object({
                          height: z
                            .number()
                            .openapi({ description: 'SKU height.', example: 2.1, title: 'height' }),
                          length: z
                            .number()
                            .openapi({ description: 'SKU length.', example: 1.6, title: 'length' }),
                          width: z
                            .number()
                            .openapi({ description: 'SKU width.', example: 1.5, title: 'width' }),
                        })
                        .openapi({
                          description: 'SKU dimensions.',
                          example: { height: 2.1, length: 1.6, width: 1.5 },
                          required: ['width', 'height', 'length'],
                          title: 'dimensions',
                        }),
                      ean: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unique SKU identification code (barcode), composed of up to 13 numeric characters.',
                          example: '978-1909621862',
                          title: 'ean',
                        }),
                      externalId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Unique reference code created to improve the store's organization. This is not a required field.",
                          example: '1909621862',
                          title: 'externalId',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'SKU unique identifier number. Do not include this field when adding a new SKU, only when editing existing SKUs.',
                          example: '182907',
                          title: 'id',
                        }),
                      images: z
                        .array(z.any())
                        .openapi({
                          description: "SKU's images IDs.",
                          example: ['vtex_logo.jpg'],
                          title: 'images',
                        }),
                      isActive: z
                        .boolean()
                        .openapi({
                          description:
                            'Defines if the SKU is active (`true`) or inactive (`false`).',
                          example: false,
                          title: 'isActive',
                        }),
                      manufacturerCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'SKU reference code in the store.',
                          example: '1234567',
                          title: 'code',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.',
                          example: 'VTEX Shirt Black Size S',
                          title: 'name',
                        }),
                      specs: z
                        .array(
                          z
                            .object({
                              name: z
                                .string()
                                .openapi({
                                  description: "SKU's specification name.",
                                  example: 'Color',
                                  title: 'name',
                                }),
                              value: z
                                .string()
                                .openapi({
                                  description: "SKU's specification values.",
                                  example: 'Black',
                                  title: 'value',
                                }),
                            })
                            .openapi({ required: ['name', 'value'], title: '' }),
                        )
                        .nullable()
                        .openapi({
                          description:
                            'SKU specifications. This field is mandatory, but nullable if there is only one SKU.',
                          example: [
                            { name: 'Color', value: 'Black' },
                            { name: 'Size', value: 'S' },
                          ],
                          title: 'specs',
                        }),
                      weight: z
                        .int()
                        .openapi({ description: 'SKU weight.', example: 300, title: 'weight' }),
                    })
                    .openapi({
                      required: ['isActive', 'weight', 'dimensions', 'specs', 'images'],
                      title: '',
                    }),
                )
                .openapi({
                  description: 'SKUs of the product.',
                  example: [
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182907',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234567',
                      name: 'VTEX Shirt Black Size S',
                      specs: [
                        { name: 'Color', value: 'Black' },
                        { name: 'Size', value: 'S' },
                      ],
                      weight: 300,
                    },
                    {
                      dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                      ean: '978-1909621862',
                      externalId: '1909621862',
                      id: '182908',
                      images: ['vtex_logo.jpg'],
                      isActive: true,
                      manufacturerCode: '1234568',
                      name: 'VTEX Shirt White Size L',
                      specs: [
                        { name: 'Color', value: 'White' },
                        { name: 'Size', value: 'L' },
                      ],
                      weight: 300,
                    },
                  ],
                  title: 'skus',
                }),
              slug: z
                .string()
                .openapi({
                  description: 'Reference of the product in the URL of the store.',
                  example: '/vtex-shirt',
                  title: 'slug',
                }),
              specs: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .openapi({
                          description: 'Specification name.',
                          example: 'Color',
                          title: 'name',
                        }),
                      values: z
                        .array(z.string().openapi({ title: '' }))
                        .openapi({
                          description: 'Specification values.',
                          example: ['Black', 'White'],
                          title: 'values',
                        }),
                    })
                    .openapi({ required: ['name', 'values'], title: '' }),
                )
                .openapi({
                  description: 'Specifications that will differentiate the possible product SKUs.',
                  example: [
                    { name: 'Color', values: ['Black', 'White'] },
                    { name: 'Size', values: ['S', 'M', 'L'] },
                  ],
                  title: 'specs',
                }),
              status: z
                .string()
                .openapi({
                  description: 'Status of the product. Its values can be `active` or `inactive`.',
                  example: 'active',
                  title: 'status',
                }),
              taxCode: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Product tax code.', example: '123', title: 'taxCode' }),
              transportModal: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Transport modal of the product.',
                  example: '1',
                  title: 'transportModal',
                }),
            })
            .openapi({
              required: [
                'status',
                'name',
                'brandId',
                'categoryIds',
                'specs',
                'attributes',
                'slug',
                'images',
                'skus',
                'origin',
              ],
              title: '',
            }),
          example: {
            attributes: [
              { name: 'Fabric', value: 'Cotton' },
              { name: 'Gender', value: 'Feminine' },
            ],
            brandId: '1',
            categoryIds: ['732'],
            id: '189371',
            images: [
              {
                alt: 'VTEX',
                id: 'vtex_logo.jpg',
                url: 'https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg',
              },
            ],
            name: 'VTEX 10 Shirt',
            origin: 'vtxleo7778',
            skus: [
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182907',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234567',
                name: 'VTEX Shirt Black Size S',
                specs: [
                  { name: 'Color', value: 'Black' },
                  { name: 'Size', value: 'S' },
                ],
                weight: 300,
              },
              {
                dimensions: { height: 2.1, length: 1.6, width: 1.5 },
                externalId: '1909621862',
                id: '182908',
                images: ['vtex_logo.jpg'],
                isActive: true,
                manufacturerCode: '1234568',
                name: 'VTEX Shirt White Size L',
                specs: [
                  { name: 'Color', value: 'White' },
                  { name: 'Size', value: 'L' },
                ],
                weight: 300,
              },
            ],
            slug: '/vtex-shirt',
            specs: [
              { name: 'Color', values: ['Black', 'White'] },
              { name: 'Size', values: ['S', 'M', 'L'] },
            ],
            status: 'active',
            taxCode: null,
            transportModal: null,
          },
        },
      },
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiCatalogSellerPortalProductsProductIdDescriptionRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/products/{productId}/description',
  tags: ['Product'],
  summary: 'Get Product Description by Product ID',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves the description of a product given a Product ID.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "productId": "61",\r\n    "description": "Beautifully handmade laptop case/sleeve made in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!",\r\n    "createdAt": "2022-10-10T19:18:45.612317Z",\r\n    "updatedAt": "2022-10-11T18:12:58.825544Z"\r\n}\r\n```',
  operationId: 'GetProductDescription',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product unique identifier number.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: '189371', type: 'string' },
          },
          example: '189371',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z
                .string()
                .openapi({
                  description: 'Date when the brand was created.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'createdAt',
                }),
              productId: z
                .string()
                .openapi({
                  description: "Product's unique identifier number.",
                  example: '61',
                  title: 'id',
                }),
              updatedAt: z
                .string()
                .openapi({
                  description: 'Last date when the brand was updated.',
                  example: '2021-01-18T14:41:45.696488+00:00',
                  title: 'updatedAt',
                }),
            })
            .openapi({ required: ['productId', 'createdAt', 'updatedAt'], title: '' }),
          example: {
            createdAt: '2022-10-10T19:18:45.612317Z',
            description:
              'Beautifully handmade laptop case/sleeve made in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!',
            productId: '61',
            updatedAt: '2022-10-11T18:12:58.825544Z',
          },
        },
      },
    },
  },
})

export const putApiCatalogSellerPortalProductsProductIdDescriptionRoute = createRoute({
  method: 'put',
  path: '/api/catalog-seller-portal/products/{productId}/description',
  tags: ['Product'],
  summary: 'Update Product Description by Product ID',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Updates the description of a product given a Product ID.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "productId": "71",\r\n    "description": "White shirt."\r\n}\r\n```',
  operationId: 'PutProductDescription',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product unique identifier number.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: '71', type: 'string' },
          },
          example: '71',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .openapi({
                  description: 'Product description.',
                  example: 'White shirt.',
                  title: 'description',
                }),
              productId: z
                .string()
                .openapi({
                  description: "Product's unique identifier number.",
                  example: '71',
                  title: 'productId',
                }),
            })
            .openapi({ required: ['productId', 'description'], title: '' }),
          example: { description: 'White shirt.', productId: '71' },
        },
      },
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiCatalogSellerPortalSkusSearchRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/skus/_search',
  tags: ['SKU'],
  summary: 'Search for SKU',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about an SKU taking into consideration the defined search criteria. It is mandatory to use at least one query parameter. \r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n  "data": [\r\n    {\r\n      "id": "2",\r\n      "productId": "2",\r\n      "externalId": "1909621862"\r\n    }\r\n  ],\r\n  "_metadata": {\r\n    "total": 1,\r\n    "from": 1,\r\n    "to": 15\r\n  }\r\n}\r\n```',
  operationId: 'SearchSKU',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The first page of the interval of the product list.',
            explode: true,
            in: 'query',
            name: 'from',
            required: false,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The last page of the interval of the product list.',
            explode: true,
            in: 'query',
            name: 'to',
            required: false,
            schema: { example: '50', type: 'string' },
            style: 'form',
          },
          example: '50',
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'SKU unique idenfier number.',
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      externalid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'SKU reference unique identifier number in the store.',
            explode: true,
            in: 'query',
            name: 'externalid',
            required: false,
            schema: { example: 123456789, type: 'integer' },
            style: 'form',
          },
          example: 123456789,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _metadata: z
                .object({
                  from: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The first page of the interval of the SKU list.' }),
                  to: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The last page of the interval of the SKU list.' }),
                  total: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total of SKUs on the list.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the organization and exhibition of the SKU list.',
                  required: [],
                }),
              data: z
                .array(
                  z
                    .object({
                      externalId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unique identifier number of the association of the SKU with a Franchise Account.',
                        }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'SKU unique identifier number.' }),
                      productId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product unique identifier number.' }),
                    })
                    .openapi({ title: '', required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'List with information about the SKU.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            _metadata: { from: 1, to: 15, total: 1 },
            data: [{ externalId: '1909621862', id: '2', productId: '2' }],
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiCatalogSellerPortalSkusIdsRoute = createRoute({
  method: 'get',
  path: '/api/catalog-seller-portal/skus/ids',
  tags: ['SKU'],
  summary: 'Get List of SKUs',
  description:
    ' >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX\'s discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests). \r\n\r\n Retrieves general information about all SKUs.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "data": [\r\n        "1",\r\n        "10",\r\n        "11",\r\n        "12",\r\n        "13",\r\n        "14",\r\n        "15",\r\n        "16",\r\n        "19",\r\n        "2",\r\n        "20",\r\n        "21",\r\n        "22",\r\n        "23",\r\n        "24"\r\n    ],\r\n    "_metadata": {\r\n        "total": 65,\r\n        "from": 1,\r\n        "to": 15\r\n    }\r\n}\r\n```',
  operationId: 'ListSKU',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The first page of the interval of the product list.',
            explode: true,
            in: 'query',
            name: 'from',
            required: false,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The last page of the interval of the product list.',
            explode: true,
            in: 'query',
            name: 'to',
            required: false,
            schema: { example: '50', type: 'string' },
            style: 'form',
          },
          example: '50',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _metadata: z
                .object({
                  from: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The first page of the interval of the SKU list.' }),
                  to: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The last page of the interval of the SKU list.' }),
                  total: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Total of SKUs on the list.' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the organization and exhibition of the SKU list.',
                  required: [],
                }),
              data: z
                .array(z.string().openapi({ description: 'SKU unique identifier number.' }))
                .exactOptional()
                .openapi({ description: 'List with information about the SKU.' }),
            })
            .openapi({ title: '', required: [] }),
          example: { _metadata: { from: 1, to: 5, total: 2 }, data: ['1', '2'] },
        },
      },
      headers: z.object({}),
    },
  },
})
