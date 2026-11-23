type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type Background = {
  backgroundImage: string | null
  backgroundColor: string
  primaryColor: string
  version: bigint
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/apps/theming/theme/:themeId.css': {
      $get:
        | {
            input: { param: { themeId: string } } & {
              query: { plain?: boolean | undefined; withCustomCss?: boolean | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { themeId: string } } & {
              query: { plain?: boolean | undefined; withCustomCss?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/index.php/apps/theming/image/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { useSvg?: boolean | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { useSvg?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { key: string } } & { query: { useSvg?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/index.php/apps/theming/manifest/:app': {
      $get:
        | {
            input: { param: { app: string } }
            output: {
              name: string
              short_name: string
              start_url: string
              theme_color: string
              background_color: string
              description: string
              icons: { src: string; type: string; sizes: string }[]
              display_override: string[]
              display: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/apps/theming/favicon/:app': {
      $get:
        | { input: { param: { app: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { app: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { app: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { app: string } }; output: string; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/index.php/apps/theming/icon/:app': {
      $get:
        | { input: { param: { app: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { app: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { app: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { app: string } }; output: string; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/index.php/apps/theming/img/:app/:image': {
      $get:
        | {
            input: { param: { app: string; image: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { app: string; image: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { app: string; image: string } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/index.php/apps/theming/background': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/index.php/apps/theming/background/:type': {
      $post:
        | {
            input: { param: { type: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value?: string | undefined; color?: (string | null) | undefined }
            }
            output: Background
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value?: string | undefined; color?: (string | null) | undefined }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value?: string | undefined; color?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value?: string | undefined; color?: (string | null) | undefined }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/index.php/apps/theming/background/custom': {
      $delete:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: Background
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/theming/api/v1/theme/:themeId/enable': {
      $put:
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/theming/api/v1/theme/:themeId': {
      $delete:
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { themeId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
