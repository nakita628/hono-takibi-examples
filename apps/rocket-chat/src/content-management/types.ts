declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/emoji-custom.all': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              emojis?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    aliases?: string[] | undefined
                    extension?: string | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              offset?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/emoji-custom.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { emoji: File; name: string; aliases?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { emoji: File; name: string; aliases?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { emoji: File; name: string; aliases?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/emoji-custom.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { emojiId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { emojiId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { emojiId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/emoji-custom.list': {
      $get:
        | {
            input: {
              query: {
                updatedSince?: string | undefined
                _updatedAt?: string | undefined
                _id?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              emojis?:
                | {
                    update?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          aliases?: { [x: string]: unknown }[] | undefined
                          extension?: string | undefined
                          _updatedAt?: string | undefined
                        }[]
                      | undefined
                    remove?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          aliases?: { [x: string]: unknown }[] | undefined
                          extension?: string | undefined
                          _updatedAt?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                updatedSince?: string | undefined
                _updatedAt?: string | undefined
                _id?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/emoji-custom.update': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              form: {
                emoji?: string | undefined
                name: string
                _id: string
                aliases?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              form: {
                emoji?: string | undefined
                name: string
                _id: string
                aliases?: string | undefined
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              form: {
                emoji?: string | undefined
                name: string
                _id: string
                aliases?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/custom-sounds.list': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                name?: string | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              sounds?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    extension?: string | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              offset?: number | undefined
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
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/custom-sounds.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { sound: File; name: string }
            }
            output: {
              sound?: { _id?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { sound: File; name: string }
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
              form: { sound: File; name: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { sound: File; name: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/custom-sounds.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { _id: string; name: string; sound?: File | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { _id: string; name: string; sound?: File | undefined }
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
              form: { _id: string; name: string; sound?: File | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { _id: string; name: string; sound?: File | undefined }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/custom-user-status.list': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                _id?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              statuses?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    statusType?: string | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              offset?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                _id?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/custom-user-status.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; statusType: string }
            }
            output: {
              customUserStatus?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    statusType?: string | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; statusType: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { method?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; statusType: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/custom-user-status.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; name: string; statusType: string }
            }
            output: {
              customUserStatus?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    statusType?: string | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; name: string; statusType: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; name: string; statusType: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/custom-user-status.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { customUserStatusId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { customUserStatusId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { customUserStatusId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/assets.setAsset': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { asset: string; assetName: string; refreshAllClients?: boolean | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { asset: string; assetName: string; refreshAllClients?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: { asset: string; assetName: string; refreshAllClients?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/assets.unsetAsset': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { assetName: string; refreshAllClients?: boolean | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { assetName: string; refreshAllClients?: boolean | undefined }
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
              json: { assetName: string; refreshAllClients?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/custom-sounds.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string }
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
              json: { _id: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/custom-sounds.getOne': {
      $get:
        | {
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              sound?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    extension?: string | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { _id: string } } & {
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
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
