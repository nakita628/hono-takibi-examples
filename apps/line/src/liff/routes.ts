import { createRoute, z } from '@hono/zod-openapi'

const LiffViewSchema = z
  .object({
    type: z
      .enum(['compact', 'tall', 'full'])
      .openapi({
        description:
          'Size of the LIFF app view. Specify one of these values:\n- compact\n- tall\n- full\n',
      }),
    url: z
      .url()
      .openapi({
        description:
          "Endpoint URL. This is the URL of the web app that implements the LIFF app\n(e.g. https://example.com).\nUsed when the LIFF app is launched using the LIFF URL.\nThe URL scheme must be https. URL fragments (#URL-fragment) can't be specified.\n",
      }),
    moduleMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '`true` to use the LIFF app in modular mode.\nWhen in modular mode, the action button in the header is not displayed.\n',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#add-liff-app' },
    required: ['type', 'url'],
  })
  .openapi('LiffView')

const LiffFeaturesSchema = z
  .object({
    ble: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '`true` if the LIFF app supports Bluetooth® Low Energy for LINE Things. `false` otherwise.\n',
      }),
    qrCode: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '`true` to use the 2D code reader in the LIFF app. false otherwise. The default value is `false`.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps',
    },
    required: [],
  })
  .openapi('LiffFeatures')

const LiffScopeSchema = z
  .enum(['openid', 'email', 'profile', 'chat_message.write'])
  .openapi({
    description:
      'Array of scopes required for some LIFF SDK methods to function.\nThe default value is `["profile", "chat_message.write"]`.\n\n',
  })
  .openapi('LiffScope')

const LiffBotPromptSchema = z
  .enum(['normal', 'aggressive', 'none'])
  .openapi({
    description:
      "Specify the setting for bot link feature with one of the following values:\n\n`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.\n`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.\n`none`: Don't display the option to add the LINE Official Account as a friend.\n  The default value is none.\n",
  })
  .openapi('LiffBotPrompt')

const AddLiffAppRequestSchema = z
  .object({
    view: LiffViewSchema,
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the LIFF app.\n\nThe LIFF app name can\'t include "LINE" or similar strings, or inappropriate strings.\n',
      }),
    features: LiffFeaturesSchema.exactOptional(),
    permanentLinkPattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'How additional information in LIFF URLs is handled. Specify `concat`.\n',
      }),
    scope: z.array(LiffScopeSchema).exactOptional(),
    botPrompt: LiffBotPromptSchema.exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#add-liff-app' },
    required: ['view'],
  })
  .openapi('AddLiffAppRequest')

const UpdateLiffViewSchema = z
  .object({
    type: z
      .enum(['compact', 'tall', 'full'])
      .exactOptional()
      .openapi({
        description:
          'Size of the LIFF app view. Specify one of these values:\n- compact\n- tall\n- full\n',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "Endpoint URL. This is the URL of the web app that implements the LIFF app\n(e.g. https://example.com).\nUsed when the LIFF app is launched using the LIFF URL.\nThe URL scheme must be https. URL fragments (#URL-fragment) can't be specified.\n",
      }),
    moduleMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '`true` to use the LIFF app in modular mode.\nWhen in modular mode, the action button in the header is not displayed.\n',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#update-liff-app' },
    required: [],
  })
  .openapi('UpdateLiffView')

const AddLiffAppResponseSchema = z
  .object({ liffId: z.string() })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#add-liff-app' },
    required: ['liffId'],
  })
  .openapi('AddLiffAppResponse')

const UpdateLiffAppRequestSchema = z
  .object({
    view: UpdateLiffViewSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the LIFF app.\n\nThe LIFF app name can\'t include "LINE" or similar strings, or inappropriate strings.\n',
      }),
    features: LiffFeaturesSchema.exactOptional(),
    permanentLinkPattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'How additional information in LIFF URLs is handled. Specify `concat`.\n',
      }),
    scope: z.array(LiffScopeSchema).exactOptional(),
    botPrompt: LiffBotPromptSchema.exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#add-liff-app' },
    required: [],
  })
  .openapi('UpdateLiffAppRequest')

const LiffAppSchema = z
  .object({
    liffId: z.string().exactOptional().openapi({ description: 'LIFF app ID' }),
    view: LiffViewSchema.exactOptional(),
    description: z.string().exactOptional().openapi({ description: 'Name of the LIFF app' }),
    features: LiffFeaturesSchema.exactOptional(),
    permanentLinkPattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'How additional information in LIFF URLs is handled. concat is returned.\n',
      }),
    scope: z.array(LiffScopeSchema).exactOptional(),
    botPrompt: LiffBotPromptSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps',
    },
    required: [],
  })
  .openapi('LiffApp')

const GetAllLiffAppsResponseSchema = z
  .object({ apps: z.array(LiffAppSchema).exactOptional() })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps',
    },
    required: [],
  })
  .openapi('GetAllLiffAppsResponse')

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', description: 'Channel access token' }

export const getLiffV1AppsRoute = createRoute({
  method: 'get',
  path: '/liff/v1/apps',
  tags: ['liff'],
  summary: 'Get all LIFF apps',
  description: 'Gets information on all the LIFF apps added to the channel.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps' },
  operationId: 'getAllLIFFApps',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetAllLiffAppsResponseSchema,
          example: {
            apps: [
              {
                liffId: '{liffId}',
                view: { type: 'full', url: 'https://example.com/myservice' },
                description: 'Happy New York',
                permanentLinkPattern: 'concat',
              },
              {
                liffId: '{liffId}',
                view: { type: 'tall', url: 'https://example.com/myservice2' },
                features: { ble: true, qrCode: true },
                permanentLinkPattern: 'concat',
                scope: ['profile', 'chat_message.write'],
                botPrompt: 'none',
              },
            ],
          },
        },
      },
    },
    401: { description: 'Authentication failed.\n' },
    404: { description: 'There is no LIFF app on the channel.\n\n\n\n' },
  },
})

export const postLiffV1AppsRoute = createRoute({
  method: 'post',
  path: '/liff/v1/apps',
  tags: ['liff'],
  summary: 'Create LIFF app',
  description: 'Adding the LIFF app to a channel',
  externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#add-liff-app' },
  operationId: 'addLIFFApp',
  request: {
    body: { content: { 'application/json': { schema: AddLiffAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AddLiffAppResponseSchema, example: { liffId: '{liffId}' } },
      },
    },
    400: {
      description:
        'This status code means one of the following:\n- The request contains an invalid value.\n- The maximum number of LIFF apps that can be added to the channel has been reached.\n',
    },
    401: { description: 'Authentication failed.\n\n' },
  },
})

export const putLiffV1AppsLiffIdRoute = createRoute({
  method: 'put',
  path: '/liff/v1/apps/{liffId}',
  tags: ['liff'],
  summary: 'Update LIFF app from a channel',
  description: 'Update LIFF app settings',
  externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#update-liff-app' },
  operationId: 'updateLIFFApp',
  request: {
    params: z.object({
      liffId: z
        .string()
        .openapi({
          param: {
            name: 'liffId',
            in: 'path',
            required: true,
            description: 'ID of the LIFF app to be updated',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLiffAppRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'The request contains an invalid value.\n' },
    401: { description: 'Authentication failed.\n' },
    404: {
      description:
        'This status code means one of the following:\n- The specified LIFF app does not exist.\n- The specified LIFF app has been added to another channel.\n',
    },
  },
})

export const deleteLiffV1AppsLiffIdRoute = createRoute({
  method: 'delete',
  path: '/liff/v1/apps/{liffId}',
  tags: ['liff'],
  summary: 'Delete LIFF app from a channel',
  description: 'Deletes a LIFF app from a channel.\n',
  externalDocs: { url: 'https://developers.line.biz/en/reference/liff-server/#delete-liff-app' },
  operationId: 'deleteLIFFApp',
  request: {
    params: z.object({
      liffId: z
        .string()
        .openapi({
          param: {
            name: 'liffId',
            in: 'path',
            required: true,
            description: 'ID of the LIFF app to be updated',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    401: { description: 'Authentication failed.\n' },
    404: {
      description:
        'This status code means one of the following:\n- The specified LIFF app does not exist.\n- The specified LIFF app has been added to another channel.\n\n',
    },
  },
})
