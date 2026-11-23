declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/integrations.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                type: string
                username: string
                channel: string
                scriptEnabled: boolean
                script?: string | undefined
                name: string
                enabled: boolean
                alias?: string | undefined
                avatar?: string | undefined
                emoji?: string | undefined
                event: string
                urls: string[]
                triggerWords?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              integration?:
                | {
                    type?: string | undefined
                    username?: string | undefined
                    channel?: string[] | undefined
                    scriptEnabled?: boolean | undefined
                    name?: string | undefined
                    enabled?: boolean | undefined
                    scriptEngine?: string | undefined
                    overrideDestinationChannelEnabled?: boolean | undefined
                    token?: string | undefined
                    userId?: string | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _id?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                type: string
                username: string
                channel: string
                scriptEnabled: boolean
                script?: string | undefined
                name: string
                enabled: boolean
                alias?: string | undefined
                avatar?: string | undefined
                emoji?: string | undefined
                event: string
                urls: string[]
                triggerWords?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                type: string
                username: string
                channel: string
                scriptEnabled: boolean
                script?: string | undefined
                name: string
                enabled: boolean
                alias?: string | undefined
                avatar?: string | undefined
                emoji?: string | undefined
                event: string
                urls: string[]
                triggerWords?: string | undefined
                token?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.get': {
      $get:
        | {
            input: { query: { integrationId: string; createdBy?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              integration?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    username?: string | undefined
                    channel?: string[] | undefined
                    scriptEnabled?: boolean | undefined
                    name?: string | undefined
                    enabled?: boolean | undefined
                    event?: string | undefined
                    urls?: string[] | undefined
                    scriptEngine?: string | undefined
                    userId?: string | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { integrationId: string; createdBy?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { integrationId: string; createdBy?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.history': {
      $get:
        | {
            input: {
              query: {
                id: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              history?: { [x: string]: unknown }[] | undefined
              offset?: number | undefined
              items?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.clearHistory': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.replayOutgoing': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string; historyId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string; historyId: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string; historyId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.list': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                name?: string | undefined
                type?: string | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              integrations?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    username?: string | undefined
                    alias?: string | undefined
                    avatar?: string | undefined
                    name?: string | undefined
                    triggerWords?: string[] | undefined
                    urls?: string[] | undefined
                    token?: string | undefined
                    script?: string | undefined
                    scriptEnabled?: boolean | undefined
                    impersonateUser?: boolean | undefined
                    scriptCompiled?: string | undefined
                    scriptError?: string | undefined
                    type?: string | undefined
                    userId?: string | undefined
                    channel?: { [x: string]: unknown }[] | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { username?: string | undefined; _id?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              offset?: number | undefined
              items?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                name?: string | undefined
                type?: string | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.update': {
      $put:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                type: string
                name: string
                enabled: boolean
                username: string
                scriptEnabled: boolean
                channel: string
                integrationId: string
                urls?: string[] | undefined
                event?: string | undefined
                triggerWords?: string | undefined
                alias?: string | undefined
                avatar?: string | undefined
                emoji?: string | undefined
                token?: string | undefined
                script?: string | undefined
                targetChannel?: string | undefined
                target_url?: string | undefined
              }
            }
            output: {
              integration?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    channel?: string[] | undefined
                    username?: string | undefined
                    name?: string | undefined
                    alias?: string | undefined
                    avatarUrl?: string | undefined
                    emoji?: string | undefined
                    scriptEnabled?: boolean | undefined
                    script?: string | undefined
                    type?: string | undefined
                    token?: string | undefined
                    userId?: string | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    _updatedBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                type: string
                name: string
                enabled: boolean
                username: string
                scriptEnabled: boolean
                channel: string
                integrationId: string
                urls?: string[] | undefined
                event?: string | undefined
                triggerWords?: string | undefined
                alias?: string | undefined
                avatar?: string | undefined
                emoji?: string | undefined
                token?: string | undefined
                script?: string | undefined
                targetChannel?: string | undefined
                target_url?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                type: string
                name: string
                enabled: boolean
                username: string
                scriptEnabled: boolean
                channel: string
                integrationId: string
                urls?: string[] | undefined
                event?: string | undefined
                triggerWords?: string | undefined
                alias?: string | undefined
                avatar?: string | undefined
                emoji?: string | undefined
                token?: string | undefined
                script?: string | undefined
                targetChannel?: string | undefined
                target_url?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/integrations.remove': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string; type: string }
            }
            output: {
              integration?:
                | {
                    type?: string | undefined
                    username?: string | undefined
                    channel?: boolean | undefined
                    scriptEnabled?: string | undefined
                    name?: string | undefined
                    enabled?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string; type: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { integrationId: string; type: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/oauth-apps.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; redirectUri: string; active: boolean }
            }
            output: {
              application?:
                | {
                    name?: string | undefined
                    redirectUri?: string | undefined
                    active?: boolean | undefined
                    clientId?: string | undefined
                    clientSecret?: string | undefined
                    _createdAt?: string | undefined
                    _updatedAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _id?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; redirectUri: string; active: boolean }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; redirectUri: string; active: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/oauth-apps.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; redirectUri: string; active: boolean; appId: string }
            }
            output: {
              _id?: string | undefined
              name?: string | undefined
              redirectUri?: string | undefined
              active?: boolean | undefined
              clientId?: string | undefined
              clientSecret?: string | undefined
              _createdAt?: string | undefined
              _updatedAt?: string | undefined
              _createdBy?: { _id?: string | undefined; username?: string | undefined } | undefined
              _updatedBy?: { _id?: string | undefined; username?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; redirectUri: string; active: boolean; appId: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; redirectUri: string; active: boolean; appId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/oauth-apps.list': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              oauthApps?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    active?: boolean | undefined
                    clientId?: string | undefined
                    clientSecret?: string | undefined
                    redirectUri?: string | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/oauth-apps.get': {
      $get:
        | {
            input: { query: { clientId?: string | undefined; _id?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              oauthApp?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    active?: boolean | undefined
                    clientId?: string | undefined
                    clientSecret?: string | undefined
                    redirectUri?: string | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { clientId?: string | undefined; _id?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { clientId?: string | undefined; _id?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/oauth-apps.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { appId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { appId: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { appId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
