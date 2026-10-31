import { createRoute, z } from '@hono/zod-openapi'

const AccessDeniedSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Unauthorized' }) })
  .openapi({ required: [] })
  .openapi('AccessDenied')

const ForbiddenSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Screenshot API is supported only in our premium plans. Please upgrade.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Forbidden')

const Android_7_0Schema = z
  .object({
    devices: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: [
          'galaxy j7 max',
          'galaxy s8',
          'galaxy s8+',
          'galaxy tab s3 9.3',
          'huawei honor 6x',
          'nexus 5x',
          'nexus 6p',
          'oppo r9',
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('Android_7_0')

const Android_9_0Schema = z
  .object({
    devices: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['galaxy s9 plus'] }),
  })
  .openapi({ required: [] })
  .openapi('Android_9_0')

const BrowsersSchema = z
  .object({
    chrome: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['76', '75'] }),
    firefox: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['67', '66'] }),
    opera: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['55', '54'] }),
  })
  .openapi({ required: [] })
  .openapi('Browsers')

const Ios_12_0Schema = z
  .object({
    devices: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['iphone xr', 'iphone xs', 'iphone xs max'] }),
  })
  .openapi({ required: [] })
  .openapi('Ios_12_0')

const LocationsSchema = z
  .object({
    locations: z
      .array(
        z
          .object({
            code: z.string().exactOptional().openapi({ example: 'US' }),
            name: z.string().exactOptional().openapi({ example: 'United States' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Locations')

const OsBrowsersSchema = z
  .object({
    'macos mojave': BrowsersSchema.exactOptional(),
    'windows 10': BrowsersSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OsBrowsers')

const OsDevicesSchema = z
  .object({
    'android 7.0': Android_7_0Schema.exactOptional(),
    'ios 12.0': Ios_12_0Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OsDevices')

const ProfilesSchema = z
  .object({
    profiles: z
      .array(
        z
          .object({
            name: z.string().exactOptional().openapi({ example: 'lambda-login' }),
            profile_config: z
              .object({
                credentials: z
                  .object({
                    password: z.string().exactOptional().openapi({ example: 'password' }),
                    username: z.string().exactOptional().openapi({ example: 'name' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                locators: z
                  .object({
                    password: z
                      .object({
                        type: z.string().exactOptional().openapi({ example: 'name' }),
                        value: z.string().exactOptional().openapi({ example: 'password' }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    submit: z
                      .object({
                        type: z.string().exactOptional().openapi({ example: 'css' }),
                        value: z.string().exactOptional().openapi({ example: 'button.btn-lg' }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    username: z
                      .object({
                        type: z.string().exactOptional().openapi({ example: 'name' }),
                        value: z.string().exactOptional().openapi({ example: 'email' }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                login_url: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'https://accounts.lambdatest.com/login' }),
                profile_name: z.string().exactOptional().openapi({ example: 'lambda-login' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Profiles')

const ResListSchema = z
  .array(z.string())
  .openapi({ example: ['1024x768', '1280x1024'] })
  .openapi('ResList')

const ResolutionsSchema = z
  .object({ mac_res: ResListSchema.exactOptional(), win_res: ResListSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Resolutions')

const ScreenshotTypeSchema = z
  .object({
    activity_id: z.string().exactOptional().openapi({ example: 'ACT100968331562237283340194' }),
    browser: z.string().exactOptional().openapi({ example: 'chrome' }),
    browser_version: z.string().exactOptional().openapi({ example: '76' }),
    os: z.string().exactOptional().openapi({ example: 'windows 10' }),
    resolution: z.string().exactOptional().openapi({ example: '1024x768' }),
    screenshot_url: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png',
      }),
    status: z.string().exactOptional().openapi({ example: 'completed' }),
    thumbnail_url: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png',
      }),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotType')

const ScreenshotTestResponseSchema = z
  .object({
    callback_url: z.string().exactOptional().openapi({ example: 'https://www.example.com' }),
    defer_time: z.number().exactOptional().openapi({ example: 5 }),
    screenshots: z.array(ScreenshotTypeSchema).exactOptional(),
    test_id: z.string().exactOptional().openapi({ example: 'TES100968331562237283314836' }),
    test_status: z.string().exactOptional().openapi({ example: 'completed' }),
    url: z.string().exactOptional().openapi({ example: 'https://www.lambdatest.com' }),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotTestResponse')

const ScreenshotDetailsSchema = ScreenshotTestResponseSchema.openapi('ScreenshotDetails')

const ScreenshotNotFoundSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'No data found' }),
    reason: z.string().exactOptional().openapi({ example: 'test_id is invalid' }),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotNotFound')

const ScreenshotPayloadSchema = z
  .object({
    callback_url: z.string().exactOptional().openapi({ example: 'https://www.example.com' }),
    configs: z
      .object({
        'macos mojave': BrowsersSchema.exactOptional(),
        'windows 10': BrowsersSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    defer_time: z.number().exactOptional().openapi({ example: 5 }),
    email: z.boolean().exactOptional().openapi({ example: true }),
    mac_res: z.string().exactOptional().openapi({ example: '1024x768' }),
    password: z.string().exactOptional().openapi({ example: 'password' }),
    tunnel: z.boolean().exactOptional().openapi({ example: true }),
    tunnel_identifier: z.string().exactOptional().openapi({ example: 'tunnel' }),
    url: z.string().exactOptional().openapi({ example: 'https://www.lambdatest.com' }),
    username: z.string().exactOptional().openapi({ example: 'admin' }),
    win_res: z.string().exactOptional().openapi({ example: '1366X768' }),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotPayload')

const StartScreenshotBadRequestSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        example:
          "The os, browser, browser_version combination is either unsupported or doesn't exist. Please try again with a different combination.",
      }),
  })
  .openapi({ required: [] })
  .openapi('StartScreenshotBadRequest')

const StartScreenshotSuccessSchema = z
  .object({
    test_id: z.string().exactOptional().openapi({ example: 'TES100968331562243938913767' }),
  })
  .openapi({ required: [] })
  .openapi('StartScreenshotSuccess')

const StopScreenshotNotFoundSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'No active Screenshot test found for this test_id' }),
  })
  .openapi({ required: [] })
  .openapi('StopScreenshotNotFound')

const StopScreenshotSuccessSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Test stopped successfully' }) })
  .openapi({ required: [] })
  .openapi('StopScreenshotSuccess')

const ZippedScreenshotsSuccessSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://s3-screenshots.s3.amazonaws.com/screenshots/TES1009632231568637527345629.zip',
      }),
  })
  .openapi({ required: [] })
  .openapi('ZippedScreenshotsSuccess')

const ObjectExampleExample = {
  summary: 'Screenshot Test',
  value: {
    configs: {
      'android 9.0': { devices: ['galaxy s9 plus'] },
      'ios 12.0': { devices: ['iphone xr', 'iphone xs', 'iphone xs max'] },
      'macos mojave': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        opera: ['58', '57'],
        safari: ['12'],
      },
      'windows 10': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        ie: ['11'],
        opera: ['58', '57'],
      },
    },
    defer_time: 5,
    email: true,
    layout: 'portrait',
    mac_res: '1024x768',
    smart_scroll: true,
    url: 'https://www.lambdatest.com',
    win_res: '1366X768',
  },
}

const ObjectExample2Example = {
  summary: 'Screenshot Test with Tunnel',
  value: {
    configs: {
      'android 9.0': { devices: ['galaxy s9 plus'] },
      'ios 12.0': { devices: ['iphone xr', 'iphone xs', 'iphone xs max'] },
      'macos mojave': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        opera: ['58', '57'],
        safari: ['12'],
      },
      'windows 10': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        ie: ['11'],
        opera: ['58', '57'],
      },
    },
    defer_time: 5,
    email: true,
    layout: 'portrait',
    mac_res: '1024x768',
    smart_scroll: true,
    tunnel: true,
    url: 'https://www.lambdatest.com',
    win_res: '1366X768',
  },
}

const ObjectExample3Example = {
  summary: 'Screenshot Test with Basic Authentication',
  value: {
    configs: {
      'android 9.0': { devices: ['galaxy s9 plus'] },
      'ios 12.0': { devices: ['iphone xr', 'iphone xs', 'iphone xs max'] },
      'macos mojave': { chrome: ['76', '75'], firefox: ['67', '66'], opera: ['58', '57'] },
      'windows 10': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        ie: ['11'],
        opera: ['58', '57'],
      },
    },
    defer_time: 5,
    email: true,
    layout: 'portrait',
    mac_res: '1024x768',
    password: 'password',
    smart_scroll: true,
    url: 'https://httpbin.org/basic-auth/username/password',
    username: 'username',
    win_res: '1366X768',
  },
}

const ObjectExample4Example = {
  summary: 'Screenshot Test with Callback Url',
  value: {
    callbackurl: 'https://www.example.com',
    configs: {
      'android 9.0': { devices: ['galaxy s9 plus'] },
      'ios 12.0': { devices: ['iphone xr', 'iphone xs', 'iphone xs max'] },
      'macos mojave': { chrome: ['76', '75'], firefox: ['67', '66'], opera: null },
      'windows 10': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        ie: ['11'],
        opera: ['58', '57'],
      },
    },
    defer_time: 5,
    email: true,
    mac_res: '1024x768',
    url: 'https://www.lambdatest.com',
    win_res: '1366X768',
  },
}

const ObjectExample5Example = {
  summary: 'Screenshot Test with Login',
  value: {
    configs: {
      'macos mojave': { chrome: ['76', '75'], firefox: ['67', '66'] },
      'windows 10': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        ie: ['11'],
        opera: ['58', '57'],
      },
    },
    defer_time: 5,
    email: true,
    mac_res: '1024x768',
    profile_id: 'lambda-login',
    url: 'https://www.lambdatest.com',
    win_res: '1366X768',
  },
}

const ObjectExample6Example = {
  summary: 'Screenshot Test with Geolocation',
  value: {
    configs: {
      'macos mojave': { chrome: ['76', '75'], firefox: ['67', '66'] },
      'windows 10': {
        chrome: ['76', '75'],
        firefox: ['67', '66'],
        ie: ['11'],
        opera: ['58', '57'],
      },
    },
    country_code: 'US',
    defer_time: 5,
    email: true,
    mac_res: '1024x768',
    url: 'https://www.lambdatest.com',
    win_res: '1366X768',
  },
}

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Start Screenshot Test'],
  summary: 'Start Screenshot Test',
  description: 'Start Screenshot Test',
  operationId: 'Start Screenshot Test',
  request: {
    body: {
      description: 'start screenshot test payload.',
      content: {
        'application/json': {
          schema: ScreenshotPayloadSchema,
          examples: {
            objectExample: ObjectExampleExample,
            objectExample2: ObjectExample2Example,
            objectExample3: ObjectExample3Example,
            objectExample4: ObjectExample4Example,
            objectExample5: ObjectExample5Example,
            objectExample6: ObjectExample6Example,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: StartScreenshotSuccessSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: StartScreenshotBadRequestSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
    403: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: ForbiddenSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getDevicesRoute = createRoute({
  method: 'get',
  path: '/devices',
  tags: ['Get Devices'],
  summary: 'Fetch all available device combinations.',
  description: 'Fetch all os devices combinations available on lambdatest platform.',
  operationId: 'devices',
  request: {
    query: z.object({
      os: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Fetch details for a particular OS',
            in: 'query',
            name: 'os',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: OsDevicesSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getLocationsRoute = createRoute({
  method: 'get',
  path: '/locations',
  tags: ['Get Locations'],
  summary: 'Fetch Locations',
  description: 'Fetch list of available Geolocations',
  operationId: 'Locations',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: LocationsSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getOsBrowsersRoute = createRoute({
  method: 'get',
  path: '/os-browsers',
  tags: ['Get OS-Browsers'],
  summary: 'Fetch all available os-browser combinations.',
  description: 'Fetch all os browsers combinations available on lambdatest platform.',
  operationId: 'os-browsers',
  request: {
    query: z.object({
      os: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Fetch details for a particular OS',
            in: 'query',
            name: 'os',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: OsBrowsersSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getProfilesRoute = createRoute({
  method: 'get',
  path: '/profiles',
  tags: ['Get Profiles'],
  summary: 'Fetch login profiles',
  description: 'Fetch login profiles',
  operationId: 'Profiles',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ProfilesSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getResolutionsRoute = createRoute({
  method: 'get',
  path: '/resolutions',
  tags: ['Get Resolutions'],
  summary: 'Fetch all available resolution on different OS',
  description: 'Fetch all available resolution on different OS',
  operationId: 'Resolutions',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ResolutionsSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const putStopTestIdRoute = createRoute({
  method: 'put',
  path: '/stop/{test_id}',
  tags: ['Stop Screenshot Test'],
  summary: 'Stop specified screenshot test',
  description: 'Stop specified screenshot test',
  operationId: 'stop screenshots test',
  request: {
    params: z.object({
      test_id: z
        .string()
        .openapi({
          param: {
            description: 'Test ID that details you want to stop',
            explode: false,
            in: 'path',
            name: 'test_id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: StopScreenshotSuccessSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
    403: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: ForbiddenSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: StopScreenshotNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getTestIdRoute = createRoute({
  method: 'get',
  path: '/{test_id}',
  tags: ['Get Screenshots'],
  summary: 'Fetch specified screenshot details',
  description: 'To fetch specified screenshot details',
  operationId: 'screenshots',
  request: {
    params: z.object({
      test_id: z
        .string()
        .openapi({
          param: {
            description: 'Test ID that details you want to fetch',
            explode: false,
            in: 'path',
            name: 'test_id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ScreenshotTestResponseSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
    403: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: ForbiddenSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ScreenshotNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getTestIdZipRoute = createRoute({
  method: 'get',
  path: '/{test_id}/zip',
  tags: ['Get Zipped Screenshots'],
  summary: 'Fetch Zipped Screenshots',
  description: 'Fetch Zipped Screenshots',
  operationId: 'ZippedScreenshots',
  request: {
    params: z.object({
      test_id: z
        .string()
        .openapi({
          param: {
            description: 'Test ID that Zipped Screenshots you want to fetch',
            explode: false,
            in: 'path',
            name: 'test_id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ZippedScreenshotsSuccessSchema } },
    },
    401: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: AccessDeniedSchema } },
    },
    403: {
      description: 'Access denied. Auth error.',
      content: { 'application/json': { schema: ForbiddenSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ScreenshotNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})
