import { createRoute, z } from '@hono/zod-openapi'

const BackgroundSchema = z
  .object({
    backgroundImage: z.string().nullable(),
    backgroundColor: z.string(),
    primaryColor: z.string(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['backgroundImage', 'backgroundColor', 'primaryColor', 'version'] })
  .openapi('Background')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const PublicCapabilitiesSchema = z
  .object({
    theming: z
      .object({
        name: z.string(),
        productName: z.string(),
        url: z.string(),
        imprintUrl: z.string(),
        privacyUrl: z.string(),
        slogan: z.string(),
        color: z.string(),
        'color-text': z.string(),
        'color-element': z.string(),
        'color-element-bright': z.string(),
        'color-element-dark': z.string(),
        logo: z.string(),
        background: z.string(),
        'background-text': z.string(),
        'background-plain': z.boolean(),
        'background-default': z.boolean(),
        logoheader: z.string(),
        favicon: z.string(),
        primaryColor: z.string(),
        backgroundColor: z.string(),
        defaultPrimaryColor: z.string(),
        defaultBackgroundColor: z.string(),
        inverted: z.boolean(),
        cacheBuster: z.string(),
        enabledThemes: z.array(z.string()),
        toastTimeout: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        toastTimeoutValues: z.array(
          z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        ),
      })
      .openapi({
        required: [
          'name',
          'productName',
          'url',
          'imprintUrl',
          'privacyUrl',
          'slogan',
          'color',
          'color-text',
          'color-element',
          'color-element-bright',
          'color-element-dark',
          'logo',
          'background',
          'background-text',
          'background-plain',
          'background-default',
          'logoheader',
          'favicon',
          'primaryColor',
          'backgroundColor',
          'defaultPrimaryColor',
          'defaultBackgroundColor',
          'inverted',
          'cacheBuster',
          'enabledThemes',
          'toastTimeout',
          'toastTimeoutValues',
        ],
      }),
  })
  .openapi({ required: ['theming'] })
  .openapi('PublicCapabilities')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpAppsThemingThemeThemeIdCssRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/theme/{themeId}.css',
  tags: ['theming'],
  summary: 'Get the CSS stylesheet for a theme',
  operationId: 'theming-get-theme-stylesheet',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            description: 'ID of the theme',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      plain: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'plain',
            in: 'query',
            description: 'Let the browser decide the CSS priority',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      withCustomCss: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'withCustomCss',
            in: 'query',
            description: 'Include custom CSS',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Stylesheet returned',
      content: { 'text/css': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: { description: 'Theme not found', content: { 'text/html': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsThemingImageKeyRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/image/{key}',
  tags: ['theming'],
  summary: 'Get an image',
  operationId: 'theming-get-image',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            description: 'Key of the image',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      useSvg: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'useSvg',
            in: 'query',
            description: 'Return image as SVG',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Image returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: { description: 'Image not found', content: { 'text/html': { schema: z.string() } } },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsThemingManifestAppRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/manifest/{app}',
  tags: ['theming'],
  summary: 'Get the manifest for an app',
  operationId: 'theming-get-manifest',
  request: {
    params: z.object({
      app: z
        .string()
        .default('core')
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string', default: 'core' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Manifest returned',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              short_name: z.string(),
              start_url: z.string(),
              theme_color: z.string(),
              background_color: z.string(),
              description: z.string(),
              icons: z.array(
                z
                  .object({ src: z.string().min(1), type: z.string(), sizes: z.string() })
                  .openapi({ required: ['src', 'type', 'sizes'] }),
              ),
              display_override: z.array(z.string()),
              display: z.string(),
            })
            .openapi({
              required: [
                'name',
                'short_name',
                'start_url',
                'theme_color',
                'background_color',
                'description',
                'icons',
                'display_override',
                'display',
              ],
            }),
        },
      },
    },
    404: { description: 'App not found', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsThemingFaviconAppRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/favicon/{app}',
  tags: ['icon'],
  summary: 'Return a 32x32 favicon as png',
  operationId: 'icon-get-favicon',
  request: {
    params: z.object({
      app: z
        .string()
        .default('core')
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string', default: 'core' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Favicon returned',
      content: {
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/x-icon': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    404: { description: 'Favicon not found', content: { 'text/html': { schema: z.string() } } },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsThemingIconAppRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/icon/{app}',
  tags: ['icon'],
  summary: 'Return a 512x512 icon for touch devices',
  operationId: 'icon-get-touch-icon',
  request: {
    params: z.object({
      app: z
        .string()
        .default('core')
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string', default: 'core' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Touch icon returned',
      content: {
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    404: { description: 'Touch icon not found', content: { 'text/html': { schema: z.string() } } },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsThemingImgAppImageRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/img/{app}/{image}',
  tags: ['icon'],
  summary: 'Get a themed icon',
  operationId: 'icon-get-themed-icon',
  request: {
    params: z.object({
      app: z
        .string()
        .openapi({
          param: {
            name: 'app',
            in: 'path',
            description: 'ID of the app',
            required: true,
            schema: { type: 'string' },
          },
        }),
      image: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'image',
            in: 'path',
            description: 'image file name (svg required)',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Themed icon returned',
      content: {
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    404: { description: 'Themed icon not found', content: { 'text/html': { schema: z.string() } } },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getIndexPhpAppsThemingBackgroundRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/theming/background',
  tags: ['user_theme'],
  summary: 'Get the background image',
  operationId: 'user_theme-get-background',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Background image returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Background image not found',
      content: { 'text/html': { schema: z.string() } },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpAppsThemingBackgroundTypeRoute = createRoute({
  method: 'post',
  path: '/index.php/apps/theming/background/{type}',
  tags: ['user_theme'],
  summary: 'Set the background',
  operationId: 'user_theme-set-background',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'Type of background',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              value: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Path of the background image' }),
              color: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Color for the background' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Background set successfully',
      content: { 'application/json': { schema: BackgroundSchema } },
    },
    400: {
      description: 'Setting background is not possible',
      content: {
        'application/json': {
          schema: z.object({ error: z.string() }).openapi({ required: ['error'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ error: z.string() }).openapi({ required: ['error'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteIndexPhpAppsThemingBackgroundCustomRoute = createRoute({
  method: 'delete',
  path: '/index.php/apps/theming/background/custom',
  tags: ['user_theme'],
  summary: 'Delete the background',
  operationId: 'user_theme-delete-background',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Background deleted successfully',
      content: { 'application/json': { schema: BackgroundSchema } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/theming/api/v1/theme/{themeId}/enable',
  tags: ['user_theme'],
  summary: 'Enable theme',
  operationId: 'user_theme-enable-theme',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            description: 'the theme ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Theme enabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Enabling theme is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/theming/api/v1/theme/{themeId}',
  tags: ['user_theme'],
  summary: 'Disable theme',
  operationId: 'user_theme-disable-theme',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            description: 'the theme ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Theme disabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Disabling theme is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
