type Browsers = {
  chrome?: string[] | undefined
  firefox?: string[] | undefined
  opera?: string[] | undefined
}
type ScreenshotPayload = {
  callback_url?: string | undefined
  configs?:
    | { 'macos mojave'?: Browsers | undefined; 'windows 10'?: Browsers | undefined }
    | undefined
  defer_time?: number | undefined
  email?: boolean | undefined
  mac_res?: string | undefined
  password?: string | undefined
  tunnel?: boolean | undefined
  tunnel_identifier?: string | undefined
  url?: string | undefined
  username?: string | undefined
  win_res?: string | undefined
}
type StartScreenshotSuccess = { test_id?: string | undefined }
type StartScreenshotBadRequest = { message?: string | undefined }
type AccessDenied = { message?: string | undefined }
type Forbidden = { message?: string | undefined }
type Android_7_0 = { devices?: string[] | undefined }
type Ios_12_0 = { devices?: string[] | undefined }
type OsDevices = { 'android 7.0'?: Android_7_0 | undefined; 'ios 12.0'?: Ios_12_0 | undefined }
type Locations = {
  locations?: { code?: string | undefined; name?: string | undefined }[] | undefined
}
type OsBrowsers = { 'macos mojave'?: Browsers | undefined; 'windows 10'?: Browsers | undefined }
type Profiles = {
  profiles?:
    | {
        name?: string | undefined
        profile_config?:
          | {
              credentials?:
                | { password?: string | undefined; username?: string | undefined }
                | undefined
              locators?:
                | {
                    password?: { type?: string | undefined; value?: string | undefined } | undefined
                    submit?: { type?: string | undefined; value?: string | undefined } | undefined
                    username?: { type?: string | undefined; value?: string | undefined } | undefined
                  }
                | undefined
              login_url?: string | undefined
              profile_name?: string | undefined
            }
          | undefined
      }[]
    | undefined
}
type ResList = string[]
type Resolutions = { mac_res?: ResList | undefined; win_res?: ResList | undefined }
type StopScreenshotSuccess = { message?: string | undefined }
type StopScreenshotNotFound = { message?: string | undefined }
type ScreenshotType = {
  activity_id?: string | undefined
  browser?: string | undefined
  browser_version?: string | undefined
  os?: string | undefined
  resolution?: string | undefined
  screenshot_url?: string | undefined
  status?: string | undefined
  thumbnail_url?: string | undefined
}
type ScreenshotTestResponse = {
  callback_url?: string | undefined
  defer_time?: number | undefined
  screenshots?: ScreenshotType[] | undefined
  test_id?: string | undefined
  test_status?: string | undefined
  url?: string | undefined
}
type ScreenshotNotFound = { message?: string | undefined; reason?: string | undefined }
type ZippedScreenshotsSuccess = { url?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | {
            input: { json: ScreenshotPayload }
            output: StartScreenshotSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScreenshotPayload }
            output: StartScreenshotBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ScreenshotPayload }
            output: AccessDenied
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ScreenshotPayload }
            output: Forbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/devices': {
      $get:
        | {
            input: { query: { os?: string | undefined } }
            output: OsDevices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { os?: string | undefined } }
            output: AccessDenied
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/locations': {
      $get:
        | { input: {}; output: Locations; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AccessDenied; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/os-browsers': {
      $get:
        | {
            input: { query: { os?: string | undefined } }
            output: OsBrowsers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { os?: string | undefined } }
            output: AccessDenied
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/profiles': {
      $get:
        | { input: {}; output: Profiles; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AccessDenied; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/resolutions': {
      $get:
        | { input: {}; output: Resolutions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AccessDenied; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/stop/:test_id': {
      $put:
        | {
            input: { param: { test_id: string } }
            output: StopScreenshotSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { test_id: string } }
            output: AccessDenied
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { test_id: string } }
            output: Forbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { test_id: string } }
            output: StopScreenshotNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:test_id': {
      $get:
        | {
            input: { param: { test_id: string } }
            output: ScreenshotTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { test_id: string } }
            output: AccessDenied
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { test_id: string } }
            output: Forbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { test_id: string } }
            output: ScreenshotNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:test_id/zip': {
      $get:
        | {
            input: { param: { test_id: string } }
            output: ZippedScreenshotsSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { test_id: string } }
            output: AccessDenied
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { test_id: string } }
            output: Forbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { test_id: string } }
            output: ScreenshotNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
