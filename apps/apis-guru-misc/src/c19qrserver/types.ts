type InvalidToken = { message?: string | undefined }
type LoginResponse = {
  admin?: boolean | undefined
  login_id?: number | undefined
  name?: string | undefined
  read_only?: boolean | undefined
  token?: string | undefined
}
type RequestPasswordResetResponse = { email?: string | undefined; guid?: string | undefined }
type Signin = {
  dt?: number | undefined
  email?: string | undefined
  id?: number | undefined
  name: string
  phone: string
}
type SigninResponse = { result?: number | undefined }
type KeyFailure = { message?: string | undefined }
type UserRecord = {
  admin?: boolean | undefined
  email?: string | undefined
  id?: number | undefined
  name?: string | undefined
  read_only?: boolean | undefined
}
type CreateUserResponse = { email?: string | undefined; guid?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/changePassword': {
      $post:
        | {
            input: { json: { old_password?: string | undefined; password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { old_password?: string | undefined; password?: string | undefined } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/login': {
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                password?: string | undefined
                source?: 'iOS' | 'android' | 'web' | undefined
              }
            }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                password?: string | undefined
                source?: 'iOS' | 'android' | 'web' | undefined
              }
            }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  } & { '/logout': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/requestPasswordReset': {
      $post:
        | {
            input: { json: { email?: string | undefined } }
            output: RequestPasswordResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email?: string | undefined } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/signin': {
      $post:
        | { input: { json: Signin }; output: SigninResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: Signin }; output: InvalidToken; outputFormat: 'json'; status: 401 }
        | { input: { json: Signin }; output: KeyFailure; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/signin/:signinId': {
      $delete:
        | { input: { param: { signinId: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { signinId: number } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { signinId: number } }
            output: Signin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signinId: number } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { signinId: number } } & { json: Signin }
            output: UserRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signinId: number } } & { json: Signin }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/signins': {
      $get:
        | {
            input: { query: { less_than?: number | undefined; return_count?: number | undefined } }
            output: Signin[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { less_than?: number | undefined; return_count?: number | undefined } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { less_than?: number | undefined; return_count?: number | undefined } }
            output: KeyFailure
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/user': {
      $post:
        | {
            input: {
              json: {
                admin?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                read_only?: boolean | undefined
              }
            }
            output: CreateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                admin?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                read_only?: boolean | undefined
              }
            }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/user/:userId': {
      $delete:
        | { input: { param: { userId: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { userId: number } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { userId: number } }
            output: UserRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: number } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/users': {
      $get:
        | { input: {}; output: UserRecord[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidToken; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/verifyPasswordChange': {
      $post:
        | {
            input: { json: { guid?: string | undefined; password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { guid?: string | undefined; password?: string | undefined } }
            output: InvalidToken
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
