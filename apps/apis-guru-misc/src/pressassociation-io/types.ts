declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/asset': {
      $get: {
        input: {
          query: {
            updatedAfter?: string | undefined
            limit?: number | undefined
            aliases?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset/:assetId': {
      $get: {
        input: { param: { assetId: string } } & { query: { aliases?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset/:assetId/contributor': {
      $get: {
        input: { param: { assetId: string } } & { query: { aliases?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/catalogue': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/catalogue/:catalogueId': {
      $get: {
        input: { param: { catalogueId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/catalogue/:catalogueId/asset': {
      $get: {
        input: { param: { catalogueId: string } } & {
          query: {
            title?: string | undefined
            start?: string | undefined
            end?: string | undefined
            updatedAfter?: string | undefined
            limit?: number | undefined
            aliases?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/catalogue/:catalogueId/asset/:assetId': {
      $get: {
        input: { param: { catalogueId: string; assetId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel': {
      $get: {
        input: {
          query: {
            platformId?: string | undefined
            regionId?: string | undefined
            aliases?: boolean | undefined
            date?: string | undefined
            scheduleStart?: string | undefined
            scheduleEnd?: string | undefined
            scheduleUpdatedSince?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channel/:channelId': {
      $get: {
        input: { param: { channelId: string } } & { query: { aliases?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contributor': {
      $get: {
        input: {
          query: {
            updatedAfter?: string | undefined
            limit?: number | undefined
            aliases?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contributor/:contributorId': {
      $get: {
        input: { param: { contributorId: string } } & { query: { aliases?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/feature': {
      $get: {
        input: {
          query: {
            type?: string | undefined
            date?: string | undefined
            start?: string | undefined
            end?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/feature-type': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/feature/:featureId': {
      $get: {
        input: { param: { featureId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/platform': {
      $get: {
        input: { query: { aliases?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/platform/:platformId': {
      $get: {
        input: { param: { platformId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/platform/:platformId/region': {
      $get: {
        input: { param: { platformId: string } } & { query: { aliases?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedule': {
      $get: {
        input: {
          query: {
            channelId: string
            start: string
            end?: string | undefined
            aliases?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
