import { createRoute, z } from '@hono/zod-openapi'

const ActionCombineSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    id: z.string(),
    list: z.array(z.string()).exactOptional(),
    name: z.string(),
    owner: z.string(),
  })
  .openapi({ required: ['id', 'name', 'owner', 'createdAt', 'createdBy', 'output', 'config'] })
  .openapi('ActionCombine')

const ActionSendSchema = z
  .object({
    config: z
      .object({
        html: z.string().exactOptional(),
        subject: z.string(),
        text: z.string().exactOptional(),
        type: z.string(),
      })
      .openapi({ required: ['type', 'subject'] }),
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    id: z.string(),
    name: z.string(),
    output: z.string(),
    owner: z.string(),
  })
  .openapi({ required: ['id', 'name', 'owner', 'createdAt', 'createdBy', 'output', 'config'] })
  .openapi('ActionSend')

const AddActionAliasRequestSchema = z
  .object({
    config: z
      .object({ alias: z.string().exactOptional(), type: z.literal('alias').exactOptional() })
      .openapi({ required: [] }),
    name: z.string(),
    type: z.literal('mailscript-email'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionAliasRequest')

const AddActionCombineRequestSchema = z
  .object({ list: z.array(z.string()), name: z.string() })
  .openapi({ required: ['name', 'list'] })
  .openapi('AddActionCombineRequest')

const AddActionDaemonRequestSchema = z
  .object({
    config: z
      .object({ body: z.string(), daemon: z.string().exactOptional() })
      .openapi({ required: ['body'] }),
    name: z.string(),
    type: z.literal('daemon'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionDaemonRequest')

const AddActionForwardRequestSchema = z
  .object({
    config: z
      .object({
        forward: z.string(),
        from: z.string(),
        key: z.string(),
        type: z.literal('forward'),
      })
      .openapi({ required: ['type', 'forward', 'from', 'key'] }),
    name: z.string(),
    type: z.literal('mailscript-email'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionForwardRequest')

const AddActionReplyAllRequestSchema = z
  .object({
    config: z
      .object({
        from: z.string(),
        html: z.string().exactOptional(),
        key: z.string(),
        text: z.string().exactOptional(),
        type: z.literal('replyAll'),
      })
      .openapi({ required: ['type', 'from', 'key'] }),
    name: z.string(),
    type: z.literal('mailscript-email'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionReplyAllRequest')

const AddActionReplyRequestSchema = z
  .object({
    config: z
      .object({
        from: z.string(),
        html: z.string().exactOptional(),
        key: z.string(),
        text: z.string().exactOptional(),
        type: z.literal('reply'),
      })
      .openapi({ required: ['type', 'from', 'key'] }),
    name: z.string(),
    type: z.literal('mailscript-email'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionReplyRequest')

const AddActionResponseSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('AddActionResponse')

const AddActionSendRequestSchema = z
  .object({
    config: z
      .object({
        from: z.string(),
        html: z.string().exactOptional(),
        key: z.string(),
        subject: z.string(),
        text: z.string().exactOptional(),
        to: z.string().exactOptional(),
        type: z.literal('send').exactOptional(),
      })
      .openapi({ required: ['send', 'subject', 'from', 'key'] }),
    name: z.string(),
    type: z.literal('mailscript-email'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionSendRequest')

const AddActionSmsRequestSchema = z
  .object({
    config: z
      .object({ number: z.string(), text: z.string() })
      .openapi({ required: ['number', 'text'] }),
    name: z.string(),
    type: z.literal('sms'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionSmsRequest')

const AddActionWebhookRequestSchema = z
  .object({
    config: z
      .object({
        body: z.string(),
        opts: z
          .object({ headers: z.object({}), method: z.enum(['POST', 'GET', 'DELETE']) })
          .openapi({ required: ['headers', 'method'] }),
        url: z.string(),
      })
      .openapi({ required: ['url', 'opts', 'body'] }),
    name: z.string(),
    type: z.literal('webhook'),
  })
  .openapi({ required: ['name', 'type', 'config'] })
  .openapi('AddActionWebhookRequest')

const AddAddressRequestSchema = z
  .object({ address: z.string() })
  .openapi({ required: ['address'] })
  .openapi('AddAddressRequest')

const AddDomainRequestSchema = z
  .object({ domain: z.string() })
  .openapi({ required: ['domain'] })
  .openapi('AddDomainRequest')

const AddEmailVerificationRequestSchema = z
  .object({ email: z.string(), type: z.literal('email') })
  .openapi({ required: ['type', 'email'] })
  .openapi('AddEmailVerificationRequest')

const AddKeyRequestSchema = z
  .object({ name: z.string(), read: z.boolean(), write: z.boolean() })
  .openapi({ required: ['name', 'read', 'write'] })
  .openapi('AddKeyRequest')

const AddKeyResponseSchema = z
  .object({ id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AddKeyResponse')

const AddSmsVerificationRequestSchema = z
  .object({ sms: z.string(), type: z.literal('sms') })
  .openapi({ required: ['type', 'sms'] })
  .openapi('AddSmsVerificationRequest')

const CriteriaSchema = z
  .object({
    domain: z.string().exactOptional(),
    from: z.string().exactOptional(),
    hasAttachments: z.boolean().exactOptional(),
    hasTheWords: z.string().exactOptional(),
    sentTo: z.string().exactOptional(),
    subjectContains: z.string().exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: [] })
  .openapi('Criteria')

const CriteriaOperandSchema = z
  .object({ and: z.array(z.string()).exactOptional(), or: z.array(z.string()).exactOptional() })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: [] })
  .openapi('CriteriaOperand')

const AddTriggerRequestSchema = z
  .object({ criteria: z.xor([CriteriaSchema, CriteriaOperandSchema]), name: z.string() })
  .openapi({ required: ['name', 'criteria'] })
  .openapi('AddTriggerRequest')

const AddTriggerResponseSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('AddTriggerResponse')

const AddVerificationResponseSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('AddVerificationResponse')

const AddWorkflowRequestSchema = z
  .object({
    action: z.string(),
    active: z.boolean().exactOptional(),
    input: z.string(),
    name: z.string(),
    trigger: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'input', 'action'] })
  .openapi('AddWorkflowRequest')

const AddWorkspaceRequestSchema = z
  .object({ workspace: z.string() })
  .openapi({ required: ['workspace'] })
  .openapi('AddWorkspaceRequest')

const AddressSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    displayName: z.string().exactOptional(),
    id: z.string(),
    owner: z.string(),
  })
  .openapi({ required: ['id', 'owner', 'createdAt', 'createdBy'] })
  .openapi('Address')

const CheckDomainVerifySchema = z
  .object({ domain: z.string(), success: z.boolean() })
  .openapi({ required: ['domain', 'success'] })
  .openapi('CheckDomainVerify')

const DomainResponseSchema = z
  .object({
    domain: z.string(),
    records: z.array(
      z
        .object({ name: z.string(), type: z.string(), value: z.string() })
        .openapi({ required: ['type', 'name', 'value'] }),
    ),
  })
  .openapi({ required: ['domain', 'records'] })
  .openapi('DomainResponse')

const ErrorResponseSchema = z
  .object({ error: z.string() })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const GetAllActionsResponseSchema = z
  .object({ list: z.array(z.xor([ActionSendSchema, ActionCombineSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllActionsResponse')

const GetAllAddressesResponseSchema = z
  .object({ list: z.array(z.xor([AddressSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllAddressesResponse')

const GetAllDomainsResponseSchema = z
  .object({ id: z.array(z.string()).exactOptional() })
  .openapi({ required: ['list'] })
  .openapi('GetAllDomainsResponse')

const MailscriptEmailInputSchema = z
  .object({
    address: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    id: z.string(),
    name: z.string(),
    owner: z.string(),
    type: z.literal('mailescript-email'),
  })
  .openapi({ required: ['id', 'name', 'type', 'owner', 'createdAt', 'createdBy', 'address'] })
  .openapi('MailscriptEmailInput')

const GetAllInputsResponseSchema = z
  .object({ list: z.array(z.xor([MailscriptEmailInputSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllInputsResponse')

const IntegrationSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    id: z.string(),
    type: z.literal('google'),
  })
  .openapi({ required: ['id', 'type', 'createdAt'] })
  .openapi('Integration')

const GetAllIntegrationsResponseSchema = z
  .object({ list: z.array(z.xor([IntegrationSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllIntegrationsResponse')

const KeySchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    id: z.string(),
    name: z.string(),
    read: z.boolean(),
    write: z.boolean(),
  })
  .openapi({ required: ['id', 'name', 'read', 'write', 'createdBy', 'createdAt'] })
  .openapi('Key')

const GetAllKeysResponseSchema = z
  .object({ list: z.array(z.xor([KeySchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllKeysResponse')

const TriggerSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    criteria: CriteriaSchema,
    displayName: z.string().exactOptional(),
    id: z.string(),
    name: z.string(),
    owner: z.string(),
  })
  .openapi({ required: ['id', 'owner', 'createdAt', 'createdBy', 'name', 'criteria'] })
  .openapi('Trigger')

const GetAllTriggersResponseSchema = z
  .object({ list: z.array(z.xor([TriggerSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllTriggersResponse')

const VerificationEmailSchema = z
  .object({
    email: z.string().exactOptional(),
    id: z.string().exactOptional(),
    type: z.literal('email').exactOptional(),
    verified: z.boolean().exactOptional(),
    verifiedAt: z.iso.datetime({ offset: true }).exactOptional(),
    verifiedBy: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerificationEmail')

const VerificationSmsSchema = z
  .object({
    id: z.string().exactOptional(),
    sms: z.string().exactOptional(),
    type: z.literal('sms').exactOptional(),
    verified: z.boolean().exactOptional(),
    verifiedAt: z.iso.datetime({ offset: true }).exactOptional(),
    verifiedBy: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerificationSms')

const GetAllVerificationsResponseSchema = z
  .object({ list: z.array(z.xor([VerificationEmailSchema, VerificationSmsSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllVerificationsResponse')

const WorkflowSchema = z
  .object({
    action: z.string(),
    active: z.boolean().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    id: z.string(),
    input: z.string(),
    name: z.string(),
    owner: z.string(),
    trigger: z.string(),
  })
  .openapi({
    required: ['id', 'name', 'owner', 'createdAt', 'createdBy', 'input', 'trigger', 'action'],
  })
  .openapi('Workflow')

const GetAllWorkflowsResponseSchema = z
  .object({ list: z.array(z.xor([WorkflowSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllWorkflowsResponse')

const WorkspaceSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    createdBy: z.string(),
    id: z.string(),
    owner: z.string(),
  })
  .openapi({ required: ['id', 'owner', 'createdAt', 'createdBy'] })
  .openapi('Workspace')

const GetAllWorkspacesResponseSchema = z
  .object({ list: z.array(z.xor([WorkspaceSchema])) })
  .openapi({ required: ['list'] })
  .openapi('GetAllWorkspacesResponse')

const KeyValuePairSchema = z
  .object({ key: z.string(), value: z.string() })
  .openapi({ required: ['key', 'value'] })
  .openapi('KeyValuePair')

const SendRequestSchema = z
  .object({
    from: z.string(),
    html: z.string().exactOptional(),
    subject: z.string(),
    text: z.string().exactOptional(),
    to: z.string(),
  })
  .openapi({ required: ['to', 'from', 'subject'] })
  .openapi('SendRequest')

const SetWorkflowRequestSchema = z
  .object({
    id: z.string().exactOptional(),
    pairs: z.array(z.xor([KeyValuePairSchema])).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetWorkflowRequest')

const UpdateKeyRequestSchema = z
  .object({ name: z.string(), read: z.boolean(), write: z.boolean() })
  .openapi({ required: ['name', 'read', 'write'] })
  .openapi('UpdateKeyRequest')

const UpdateUserRequestSchema = z
  .object({ displayName: z.string() })
  .openapi({ required: ['displayName'] })
  .openapi('UpdateUserRequest')

const UserSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }),
    displayName: z.string(),
    email: z.string(),
    id: z.string(),
    photoURL: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'displayName', 'email', 'createdAt'] })
  .openapi('User')

const VerifyEmailRequestSchema = z
  .object({ code: z.string(), email: z.string() })
  .openapi({ required: ['email', 'code'] })
  .openapi('VerifyEmailRequest')

const VerifySmsRequestSchema = z
  .object({ code: z.string(), sms: z.string() })
  .openapi({ required: ['sms', 'code'] })
  .openapi('VerifySmsRequest')

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getActionsRoute = createRoute({
  method: 'get',
  path: '/actions',
  tags: ['actions'],
  summary: 'Get all actions for the user',
  operationId: 'getAllActions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GetAllActionsResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postActionsRoute = createRoute({
  method: 'post',
  path: '/actions',
  tags: ['actions'],
  summary: 'Add an action',
  operationId: 'addAction',
  request: {
    body: {
      description: 'Add action body',
      content: {
        'application/json': {
          schema: z.xor([
            AddActionCombineRequestSchema,
            AddActionSmsRequestSchema,
            AddActionWebhookRequestSchema,
            AddActionDaemonRequestSchema,
            AddActionSendRequestSchema,
            AddActionForwardRequestSchema,
            AddActionForwardRequestSchema,
            AddActionReplyRequestSchema,
            AddActionReplyAllRequestSchema,
            AddActionAliasRequestSchema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: AddActionResponseSchema,
          examples: { list: { value: '[\n"hielle.com"\n]' } },
        },
      },
    },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Not authorized or bad code',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putActionsActionRoute = createRoute({
  method: 'put',
  path: '/actions/{action}',
  tags: ['actions'],
  summary: 'Update an action key',
  operationId: 'updateAction',
  request: {
    params: z.object({
      action: z
        .string()
        .openapi({
          param: {
            description: 'ID of action',
            in: 'path',
            name: 'action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Action body',
      content: {
        'application/json': {
          schema: z.xor([
            AddActionCombineRequestSchema,
            AddActionSmsRequestSchema,
            AddActionWebhookRequestSchema,
            AddActionDaemonRequestSchema,
            AddActionSendRequestSchema,
            AddActionForwardRequestSchema,
            AddActionForwardRequestSchema,
            AddActionReplyRequestSchema,
            AddActionReplyAllRequestSchema,
            AddActionAliasRequestSchema,
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful update operation',
      content: { 'application/json': { schema: KeySchema } },
    },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteActionsActionRoute = createRoute({
  method: 'delete',
  path: '/actions/{action}',
  tags: ['actions'],
  summary: 'Delete an action',
  operationId: 'deleteAction',
  request: {
    params: z.object({
      action: z
        .string()
        .openapi({
          param: {
            description: 'ID of the action',
            in: 'path',
            name: 'action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful delete operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAddressesRoute = createRoute({
  method: 'get',
  path: '/addresses',
  tags: ['addresses'],
  summary: 'Get all addresses you have access to',
  operationId: 'getAllAddresses',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetAllAddressesResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAddressesRoute = createRoute({
  method: 'post',
  path: '/addresses',
  tags: ['addresses'],
  summary: 'Claim a new Mailscript address',
  operationId: 'addAddress',
  request: {
    body: {
      description: 'Address body',
      content: { 'application/json': { schema: AddAddressRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful operation' },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAddressesAddressRoute = createRoute({
  method: 'delete',
  path: '/addresses/{address}',
  tags: ['addresses'],
  summary: 'Delete a mailscript address',
  operationId: 'deleteAddress',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful delete operation' },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAddressesAddressKeysRoute = createRoute({
  method: 'get',
  path: '/addresses/{address}/keys',
  tags: ['keys'],
  summary: 'List address keys',
  operationId: 'getAllKeys',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetAllKeysResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Address not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAddressesAddressKeysRoute = createRoute({
  method: 'post',
  path: '/addresses/{address}/keys',
  tags: ['keys'],
  summary: 'Add address key',
  operationId: 'addKey',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Key body',
      content: { 'application/json': { schema: AddKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: AddKeyResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Address not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAddressesAddressKeysKeyRoute = createRoute({
  method: 'get',
  path: '/addresses/{address}/keys/{key}',
  tags: ['keys'],
  summary: 'Get address key',
  operationId: 'getKey',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'ID of key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: KeySchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putAddressesAddressKeysKeyRoute = createRoute({
  method: 'put',
  path: '/addresses/{address}/keys/{key}',
  tags: ['keys'],
  summary: 'Update an address key',
  operationId: 'updateKey',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'ID of key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Key body',
      content: { 'application/json': { schema: UpdateKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: KeySchema } },
    },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteAddressesAddressKeysKeyRoute = createRoute({
  method: 'delete',
  path: '/addresses/{address}/keys/{key}',
  tags: ['keys'],
  summary: 'Delete address key',
  operationId: 'deleteKey',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'ID of key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful delete operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDaemonsDaemonTokenRoute = createRoute({
  method: 'get',
  path: '/daemons/{daemon}/token',
  tags: ['daemon'],
  summary: 'Get a token for opening a daemon connection',
  operationId: 'getDaemonToken',
  request: {
    params: z.object({
      daemon: z
        .string()
        .openapi({
          param: {
            description: 'name of Daemon',
            in: 'path',
            name: 'daemon',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful get operation',
      content: {
        'application/json': {
          schema: z.object({ token: z.string() }).openapi({ required: ['token'] }),
        },
      },
    },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['domains'],
  summary: 'Get all domains you have access to',
  operationId: 'getAllDomains',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: GetAllDomainsResponseSchema,
          examples: { list: { value: '{\n"list": ["hielle.com"]\n}' } },
        },
      },
    },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDomainsRoute = createRoute({
  method: 'post',
  path: '/domains',
  tags: ['domains'],
  summary: 'Claim a new Domain',
  operationId: 'addDomain',
  request: {
    body: {
      description: 'Domain body',
      content: { 'application/json': { schema: AddDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: DomainResponseSchema,
          examples: {
            Add: {
              value:
                '{\n  "id": "hielle.com",\n  "records": [\n    {\n      "type:" "TXT",\n      "name": "@",\n      "value": "ms_verify=eecbb911-d940-41ea-8fc2-2c83295f418b"\n    }\n  ]\n}',
            },
          },
        },
      },
    },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getDomainsVerifyDomainRoute = createRoute({
  method: 'get',
  path: '/domains/verify/{domain}',
  tags: ['domains'],
  summary: 'Get domain verification',
  operationId: 'getDomainVerify',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Full Top-level domain name',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: DomainResponseSchema,
          examples: {
            'Domain verification record': {
              value:
                '{\n  "id": "hielle.com",\n  "records": [\n    {\n      "type:" "TXT",\n      "name": "@",\n      "value": "ms_verify=eecbb911-d940-41ea-8fc2-2c83295f418b"\n    }\n  ]\n}',
            },
          },
        },
      },
    },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDomainsVerifyDomainRoute = createRoute({
  method: 'post',
  path: '/domains/verify/{domain}',
  tags: ['domains'],
  summary: 'Check a new Domain',
  operationId: 'CheckDomainVerify',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Full Top-level domain name',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CheckDomainVerifySchema,
          examples: { checkDomainVerify: { value: '{\n"id":"hielle.com",\n"success": true\n}' } },
        },
      },
    },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Authorization failed',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteDomainsDomainRoute = createRoute({
  method: 'delete',
  path: '/domains/{domain}',
  tags: ['domains'],
  summary: 'Remove a domain',
  operationId: 'removeDomainVerify',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Full Top-level domain name',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation' },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getInputsRoute = createRoute({
  method: 'get',
  path: '/inputs',
  tags: ['inputs'],
  summary: 'Get all inputs you have access to',
  operationId: 'getAllInputs',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetAllInputsResponseSchema } },
    },
    400: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getIntegrationsRoute = createRoute({
  method: 'get',
  path: '/integrations',
  tags: ['integrations'],
  summary: 'Get all integrations for the user',
  operationId: 'getAllIntegrations',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GetAllIntegrationsResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteIntegrationsIntegrationRoute = createRoute({
  method: 'delete',
  path: '/integrations/{integration}',
  tags: ['integrations'],
  summary: 'Delete an integration',
  operationId: 'deleteIntegration',
  request: {
    params: z.object({
      integration: z
        .string()
        .openapi({
          param: {
            description: 'ID of the integration',
            in: 'path',
            name: 'integration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful delete operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postSendRoute = createRoute({
  method: 'post',
  path: '/send',
  tags: ['send'],
  summary: 'Send an email',
  operationId: 'send',
  request: {
    body: {
      description: 'request body',
      content: { 'application/json': { schema: SendRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful operation' },
    400: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getTriggersRoute = createRoute({
  method: 'get',
  path: '/triggers',
  tags: ['triggers'],
  summary: 'Get all triggers you have access to',
  operationId: 'getAllTriggers',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetAllTriggersResponseSchema } },
    },
    400: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postTriggersRoute = createRoute({
  method: 'post',
  path: '/triggers',
  tags: ['triggers'],
  summary: 'Setup a trigger',
  operationId: 'addTrigger',
  request: {
    body: {
      description: 'Trigger body',
      content: { 'application/json': { schema: AddTriggerRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful add operation',
      content: { 'application/json': { schema: AddTriggerResponseSchema } },
    },
    400: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putTriggersTriggerRoute = createRoute({
  method: 'put',
  path: '/triggers/{trigger}',
  tags: ['triggers'],
  summary: 'Update a trigger',
  operationId: 'updateTrigger',
  request: {
    params: z.object({
      trigger: z
        .string()
        .openapi({
          param: {
            description: 'ID of the trigger',
            in: 'path',
            name: 'trigger',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Trigger body',
      content: { 'application/json': { schema: AddTriggerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful update operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteTriggersTriggerRoute = createRoute({
  method: 'delete',
  path: '/triggers/{trigger}',
  tags: ['triggers'],
  summary: 'Delete a trigger',
  operationId: 'deleteTrigger',
  request: {
    params: z.object({
      trigger: z
        .string()
        .openapi({
          param: {
            description: 'ID of the trigger',
            in: 'path',
            name: 'trigger',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful delete operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['user'],
  summary: 'Get the authenticated user',
  operationId: 'getAuthenticatedUser',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: UserSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putUserRoute = createRoute({
  method: 'put',
  path: '/user',
  tags: ['user'],
  summary: 'Update a user',
  operationId: 'updateUser',
  request: {
    body: {
      description: 'User body',
      content: { 'application/json': { schema: UpdateUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful update operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getVerificationsRoute = createRoute({
  method: 'get',
  path: '/verifications',
  tags: ['verifications'],
  summary: 'Get all verificats for the user',
  operationId: 'getAllVerifications',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: GetAllVerificationsResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postVerificationsRoute = createRoute({
  method: 'post',
  path: '/verifications',
  tags: ['verifications'],
  summary: 'Start verification process for external email address or sms number',
  operationId: 'addVerification',
  request: {
    body: {
      description: 'Key body',
      content: {
        'application/json': {
          schema: z.xor([AddEmailVerificationRequestSchema, AddSmsVerificationRequestSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: { 'application/json': { schema: AddVerificationResponseSchema } },
    },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postVerificationsVerificationVerifyRoute = createRoute({
  method: 'post',
  path: '/verifications/{verification}/verify',
  tags: ['verifications'],
  summary: 'Verify an email address or sms number with a code',
  operationId: 'verify',
  request: {
    params: z.object({
      verification: z
        .string()
        .openapi({
          param: {
            description: 'ID of the verification entry',
            in: 'path',
            name: 'verification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Verify action body',
      content: {
        'application/json': { schema: z.xor([VerifyEmailRequestSchema, VerifySmsRequestSchema]) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Not authorized or bad code',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getWorkflowsRoute = createRoute({
  method: 'get',
  path: '/workflows',
  tags: ['workflows'],
  summary: 'Get all workflows you have access to',
  operationId: 'getAllWorkflows',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetAllWorkflowsResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postWorkflowsRoute = createRoute({
  method: 'post',
  path: '/workflows',
  tags: ['workflows'],
  summary: 'Setup workflow',
  operationId: 'addWorkflow',
  request: {
    body: {
      description: 'Workflow body',
      content: { 'application/json': { schema: AddWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'successful operation' },
    400: {
      description: 'Internal error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postWorkflowsSetRoute = createRoute({
  method: 'post',
  path: '/workflows/set',
  tags: ['workflows'],
  summary: 'Set a property on a workflow',
  operationId: 'setWorkflow',
  request: {
    body: {
      description: 'Set Workflow body',
      content: { 'application/json': { schema: SetWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful update operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putWorkflowsWorkflowRoute = createRoute({
  method: 'put',
  path: '/workflows/{workflow}',
  tags: ['workflows'],
  summary: 'Update an workflow',
  operationId: 'updateWorkflow',
  request: {
    params: z.object({
      workflow: z
        .string()
        .openapi({
          param: {
            description: 'ID of the workflow',
            in: 'path',
            name: 'workflow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Workflow body',
      content: { 'application/json': { schema: AddWorkflowRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful update operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteWorkflowsWorkflowRoute = createRoute({
  method: 'delete',
  path: '/workflows/{workflow}',
  tags: ['workflows'],
  summary: 'Delete a workflow',
  operationId: 'deleteWorkflow',
  request: {
    params: z.object({
      workflow: z
        .string()
        .openapi({
          param: {
            description: 'ID of the workflow',
            in: 'path',
            name: 'workflow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful delete operation' },
    400: {
      description: 'Failure',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getWorkspacesRoute = createRoute({
  method: 'get',
  path: '/workspaces',
  tags: ['workspaces'],
  summary: 'Get all workspaces you have access to',
  operationId: 'getAllWorkspaces',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetAllWorkspacesResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postWorkspacesRoute = createRoute({
  method: 'post',
  path: '/workspaces',
  tags: ['workspaces'],
  summary: 'Claim a Mailscript workspace',
  description: 'An attendant address will be created as well',
  operationId: 'addWorkspace',
  request: {
    body: {
      description: 'request body',
      content: { 'application/json': { schema: AddWorkspaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'successful operation' },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Bad credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    405: {
      description: 'Invalid input',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
