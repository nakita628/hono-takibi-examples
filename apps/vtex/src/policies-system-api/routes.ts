import { createRoute, z } from '@hono/zod-openapi'

const AccountTypeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({ example: 0, title: 'AccountType' })
  .openapi('AccountType')

const AccountSchema = z
  .object({
    accountType: AccountTypeSchema.exactOptional(),
    id: z.string().exactOptional(),
    isActive: z.boolean().exactOptional(),
    isOperating: z.boolean().exactOptional(),
    mainAccountName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    operationDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ title: 'Account', required: [] })
  .openapi('Account')

const EvaluatePolicyRequestSchema = z
  .object({
    context: z
      .looseObject({})
      .default({ brandId: '2000001', discountPercentage: '91.00' })
      .openapi({ description: 'Conditions that the Policy needs to satisfy', title: 'context' }),
    resource: z
      .string()
      .default('vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert')
      .openapi({ description: 'Scope on which this policy must be evaluated', title: 'resource' }),
  })
  .openapi({ required: ['resource', 'context'] })
  .openapi('EvaluatePolicyRequest')

const PolicyActionGetResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Action ID', title: 'id' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata object from the current action', title: 'metadata' }),
  })
  .openapi({ title: 'PolicyActionGetResponse', required: [] })
  .openapi('PolicyActionGetResponse')

const StatementGetResponseSchema = z
  .object({
    actions: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Action ID. The possible values can be `SendSlackMessage`, `SendEmail`, and `DeactivatePromotions`',
            title: 'id',
          }),
        metadata: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'Data inside of the actions', title: 'metadata' }),
      })
      .exactOptional()
      .openapi({
        description: 'Actions that the Policy will execute',
        title: 'actions',
        required: [],
      }),
    condition: z
      .object({
        conditions: z
          .array(
            z
              .object({
                conditions: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'These are the conditions the actions can have. The possible values are `[]`, `stringEquals`, and `numericGreaterThan`',
                    title: 'conditions',
                  }),
                key: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The element that will define what the policy will influence. This field has the possible values `skuId`, `brandId`, `discountPercentage`',
                    title: 'key',
                  }),
                operation: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The action of the condition. This operation possible values are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between`',
                    title: 'operation',
                  }),
                values: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'Value of the key', title: 'values' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of conditions that will activate the policy' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Condition to activate this policy. This object can have a maximum of ten recursive conditions',
        title: 'condition',
        required: [],
      }),
    effect: z
      .string()
      .default('Allow')
      .openapi({
        description:
          'This field is not functional at the moment. To create a correct request, fill the field with `Allow`',
        title: 'effect',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This operation will determine if all the conditions need to be valid or at least one of them, if the conditions array is not empty.  The possible values to these fields are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between`',
        title: 'operation',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Scope on which this policy must be evaluated', title: 'resource' }),
  })
  .openapi({ required: ['effect'] })
  .openapi('StatementGetResponse')

const PolicyGetResponseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Policy description. This description is only for internal use of identification',
        title: 'description',
      }),
    id: z.string().exactOptional().openapi({ description: 'Policy ID', title: 'id' }),
    name: z.string().exactOptional().openapi({ description: 'Policy Name', title: 'name' }),
    statements: z
      .array(StatementGetResponseSchema)
      .exactOptional()
      .openapi({ description: 'Requirements to the Policy be applied', title: 'statements' }),
  })
  .openapi({ title: 'PolicyGetResponse', required: [] })
  .openapi('PolicyGetResponse')

const PolicySaveRequestSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description:
          'Policy description. This description is only for internal use of identification',
        title: 'description',
      }),
    name: z.string().openapi({ description: 'Policy Name', title: 'name' }),
    statements: z
      .array(StatementGetResponseSchema)
      .openapi({ description: 'Requirements to the Policy be applied', title: 'statements' }),
  })
  .openapi({ required: ['name', 'description', 'statements'] })
  .openapi('PolicySaveRequest')

export const postApiPolicyEngineEvaluateRoute = createRoute({
  method: 'post',
  path: '/api/policy-engine/evaluate',
  tags: ['Policy'],
  summary: 'Evaluate Policies',
  description:
    'This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.',
  operationId: 'Policy_Evaluate',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
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
          schema: EvaluatePolicyRequestSchema,
          example: {
            context: { brandId: '2000001', discountPercentage: '91.00' },
            resource: 'vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert',
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
          schema: z
            .array(PolicyActionGetResponseSchema)
            .openapi({
              example: [
                {
                  id: 'SendSlackMessage',
                  metadata: {
                    alertDescription:
                      'Avoid selling products from Berenice with a discount greater than 70%.',
                    channel: 'C01NJFF35R6',
                    relatedUsers: ['URUNDC2NB'],
                  },
                },
              ],
            }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiPolicyEnginePoliciesRoute = createRoute({
  method: 'get',
  path: '/api/policy-engine/policies',
  tags: ['Policy'],
  summary: 'Get Policy List',
  description:
    'Retrieves a list of all policies in the account and general information of each policy.',
  operationId: 'Policy_List',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
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
          schema: z.array(PolicyGetResponseSchema).openapi({
            example: [
              {
                description: 'TesteMarcosPromotionsAlert',
                id: 'pa_test_001',
                name: 'TestAlarmBerenice',
                statements: [
                  {
                    actions: [
                      {
                        id: 'SendSlackMessage',
                        metadata: {
                          alertDescription:
                            'Avoid selling products from Berenice with a discount greater than 70%.',
                          channel: 'C01NJFF35R6',
                          relatedUsers: ['URUNDC2NB'],
                        },
                      },
                    ],
                    condition: {
                      conditions: [
                        {
                          conditions: [],
                          key: 'brandId',
                          operation: 'stringEquals',
                          values: ['2000001'],
                        },
                        {
                          conditions: [],
                          key: 'discountPercentage',
                          operation: 'numericGreaterThan',
                          values: ['70.00'],
                        },
                      ],
                      operation: 'and',
                    },
                    effect: 'Allow',
                    resource:
                      'vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert',
                  },
                ],
              },
            ],
          }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiPolicyEnginePoliciesIdRoute = createRoute({
  method: 'get',
  path: '/api/policy-engine/policies/{id}',
  tags: ['Policy'],
  summary: 'Get Policy by ID',
  description: 'Retrieves general information of a policy by its ID.',
  operationId: 'Policy_Get',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .default('pa_test_001')
        .openapi({
          param: {
            description: 'Policy ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: 'pa_test_001', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(PolicyGetResponseSchema).openapi({
            example: [
              {
                description: 'TesteMarcosPromotionsAlert',
                id: 'pa_test_001',
                name: 'TestAlarmBerenice',
                statements: [
                  {
                    actions: [
                      {
                        id: 'SendSlackMessage',
                        metadata: {
                          alertDescription:
                            'Avoid selling products from Berenice with a discount greater than 70%.',
                          channel: 'C01NJFF35R6',
                          relatedUsers: ['URUNDC2NB'],
                        },
                      },
                    ],
                    condition: {
                      conditions: [
                        {
                          conditions: [],
                          key: 'brandId',
                          operation: 'stringEquals',
                          values: ['2000001'],
                        },
                        {
                          conditions: [],
                          key: 'discountPercentage',
                          operation: 'numericGreaterThan',
                          values: ['70.00'],
                        },
                      ],
                      operation: 'and',
                    },
                    effect: 'Allow',
                    resource:
                      'vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert',
                  },
                ],
              },
            ],
          }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const putApiPolicyEnginePoliciesIdRoute = createRoute({
  method: 'put',
  path: '/api/policy-engine/policies/{id}',
  tags: ['Policy'],
  summary: 'Update Policy',
  description: 'Updates an existing policy at your account.',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .default('pa_test_001')
        .openapi({
          param: {
            description: 'Policy ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: 'pa_test_001', type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: { 'application/json': { schema: PolicySaveRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.array(PolicyGetResponseSchema).openapi({
            example: [
              {
                description: 'TesteMarcosPromotionsAlert',
                id: 'pa_test_001',
                name: 'TestAlarmBerenice',
                statements: [
                  {
                    actions: [
                      {
                        id: 'SendSlackMessage',
                        metadata: {
                          alertDescription:
                            'Avoid selling products from Berenice with a discount greater than 40%.',
                          channel: 'C01NJFF35R6',
                          relatedUsers: ['URUNDC2NB'],
                        },
                      },
                    ],
                    condition: {
                      conditions: [
                        {
                          conditions: [],
                          key: 'brandId',
                          operation: 'stringEquals',
                          values: ['2000001'],
                        },
                        {
                          conditions: [],
                          key: 'discountPercentage',
                          operation: 'numericGreaterThan',
                          values: ['40.00'],
                        },
                      ],
                      operation: 'and',
                    },
                    effect: 'Allow',
                    resource:
                      'vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert',
                  },
                ],
              },
            ],
          }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiPolicyEnginePoliciesIdRoute = createRoute({
  method: 'post',
  path: '/api/policy-engine/policies/{id}',
  tags: ['Policy'],
  summary: 'Create Policy',
  description: 'Creates a new policy from scratch.',
  operationId: 'Policy_CreateOrUpdate',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .default('pa_test_001')
        .openapi({
          param: {
            description: 'Policy ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: 'pa_test_001', type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: PolicySaveRequestSchema,
          example: {
            description: 'TesteMarcosPromotionsAlert',
            name: 'TestAlarmBerenice',
            statements: [
              {
                actions: [
                  {
                    id: 'SendSlackMessage',
                    metadata: {
                      alertDescription:
                        'Avoid selling products from Berenice with a discount greater than 40%.',
                      channel: 'C01NJFF35R6',
                      relatedUsers: ['URUNDC2NB'],
                    },
                  },
                ],
                condition: {
                  conditions: [
                    {
                      conditions: [],
                      key: 'brandId',
                      operation: 'stringEquals',
                      values: ['2000001'],
                    },
                    {
                      conditions: [],
                      key: 'discountPercentage',
                      operation: 'numericGreaterThan',
                      values: ['40.00'],
                    },
                  ],
                  operation: 'and',
                },
                effect: 'Allow',
                resource:
                  'vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert',
              },
            ],
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.array(PolicyGetResponseSchema).openapi({
            example: [
              {
                description: 'TesteMarcosPromotionsAlert',
                id: 'pa_test_001',
                name: 'TestAlarmBerenice',
                statements: [
                  {
                    actions: [
                      {
                        id: 'SendSlackMessage',
                        metadata: {
                          alertDescription:
                            'Avoid selling products from Berenice with a discount greater than 70%.',
                          channel: 'C01NJFF35R6',
                          relatedUsers: ['URUNDC2NB'],
                        },
                      },
                    ],
                    condition: {
                      conditions: [
                        {
                          conditions: [],
                          key: 'brandId',
                          operation: 'stringEquals',
                          values: ['2000001'],
                        },
                        {
                          conditions: [],
                          key: 'discountPercentage',
                          operation: 'numericGreaterThan',
                          values: ['70.00'],
                        },
                      ],
                      operation: 'and',
                    },
                    resource:
                      'vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert',
                  },
                ],
              },
            ],
          }),
        },
      },
      headers: z.object({}),
    },
  },
})

export const deleteApiPolicyEnginePoliciesIdRoute = createRoute({
  method: 'delete',
  path: '/api/policy-engine/policies/{id}',
  tags: ['Policy'],
  summary: 'Delete Policy by ID',
  description: 'Deletes a specific policy of the account by its ID.',
  operationId: 'Policy_Delete',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand ',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .default('pa_test_001')
        .openapi({
          param: {
            description: 'Policy ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { default: 'pa_test_001', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '200 OK' } },
})
