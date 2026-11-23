declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/users': {
      $get: {
        input: { query: { q?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { activate?: string | undefined } } & {
          json: {
            groupIds?: string[] | undefined
            profile?:
              | {
                  email?: string | undefined
                  firstName?: string | undefined
                  lastName?: string | undefined
                  login?: string | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/me': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/users/:userId': {
      $get: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { userId: string } } & {
          json: {
            credentials?:
              | {
                  recovery_question?:
                    | { answer?: string | undefined; question?: string | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/appLinks': {
      $get: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/credentials/change_password': {
      $post: {
        input: { param: { userId: string } } & {
          json: {
            newPassword?: { value?: string | undefined } | undefined
            oldPassword?: { value?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/credentials/change_recovery_question': {
      $post: {
        input: { param: { userId: string } } & {
          json: {
            password?: { value?: string | undefined } | undefined
            recovery_question?:
              | { answer?: string | undefined; question?: string | undefined }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/credentials/forgot_password': {
      $post: {
        input: { param: { userId: string } } & { query: { sendEmail?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/groups': {
      $get: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/activate': {
      $post: {
        input: { param: { userId: string } } & { query: { sendEmail?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/deactivate': {
      $post: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/expire_password': {
      $post: {
        input: { param: { userId: string } } & { query: { tempPassword?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/reset_factors': {
      $post: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/reset_password': {
      $post: {
        input: { param: { userId: string } } & { query: { sendEmail?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/suspend': {
      $post: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/unlock': {
      $post: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/lifecycle/unsuspend': {
      $post: { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:userId/sessions': {
      $delete: {
        input: { param: { userId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
