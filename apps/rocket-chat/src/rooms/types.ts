type Attachment = {
  ts?: string | undefined
  title?: string | undefined
  title_link?: string | undefined
  title_link_download?: boolean | undefined
  image_dimensions?: { width?: number | undefined; height?: number | undefined } | undefined
  image_preview?: string | undefined
  image_url?: string | undefined
  image_type?: string | undefined
  image_size?: number | undefined
  type?: string | undefined
  description?: string | undefined
}
type XmppFederation = {
  version?: number | undefined
  role?: string | undefined
  muc?: string | undefined
  origin?: string | undefined
}
type Subscription = {
  _id?: string | undefined
  open?: boolean | undefined
  alert?: boolean | undefined
  unread?: number | undefined
  userMentions?: number | undefined
  groupMentions?: number | undefined
  ts?: string | undefined
  rid?: string | undefined
  name?: string | undefined
  fname?: (string | null) | undefined
  t?: string | undefined
  u?:
    | { _id?: string | undefined; username?: string | undefined; name?: string | undefined }
    | undefined
  _updatedAt?: string | undefined
  ls?: string | undefined
  E2EKey?: string | undefined
  draft?: string | undefined
  threadDrafts?: { [x: string]: string } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/channels.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                members?: string[] | undefined
                readOnly?: boolean | undefined
                excludeSelf?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
                extraData?:
                  | {
                      broadcast?: boolean | undefined
                      encrypted?: boolean | undefined
                      teamId?: string | undefined
                      topic?: string | undefined
                      federated?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    _updatedAt?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
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
                name: string
                members?: string[] | undefined
                readOnly?: boolean | undefined
                excludeSelf?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
                extraData?:
                  | {
                      broadcast?: boolean | undefined
                      encrypted?: boolean | undefined
                      teamId?: string | undefined
                      topic?: string | undefined
                      federated?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.addAll': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; activeUsersOnly?: boolean | undefined }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; activeUsersOnly?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.addLeader': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.addModerator': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.addOwner': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.anonymousread': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    msg?: string | undefined
                    groupable?: boolean | undefined
                    blocks?:
                      | {
                          type?: string | undefined
                          blockId?: string | undefined
                          callId?: string | undefined
                          appId?: string | undefined
                        }[]
                      | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    rid?: string | undefined
                    _updatedAt?: string | undefined
                    urls?: { [x: string]: unknown }[] | undefined
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    md?:
                      | {
                          type?: string | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }[]
                      | undefined
                    attachments?: Attachment[] | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
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
    }
  } & {
    '/api/v1/channels.archive': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
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
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.close': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.counters': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              joined?: boolean | undefined
              members?: number | undefined
              unreads?: number | undefined
              unreadsFrom?: string | undefined
              msgs?: number | undefined
              latest?: string | undefined
              userMentions?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined; roomName?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined; roomName?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.files': {
      $get: {
        input: {
          query: {
            roomId?: string | undefined
            roomName?: string | undefined
            sort?: { [x: string]: unknown } | undefined
            count?: number | undefined
            offset?: number | undefined
            typeGroup?: string | undefined
            name?: string | undefined
          }
        } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
        output: {
          files?:
            | {
                _id?: string | undefined
                name?: string | undefined
                size?: number | undefined
                type?: string | undefined
                rid?: string | undefined
                userId?: string | undefined
                store?: string | undefined
                _updatedAt?: string | undefined
                identify?:
                  | {
                      format?: string | undefined
                      size?: { width?: number | undefined; height?: number | undefined } | undefined
                    }
                  | undefined
                complete?: boolean | undefined
                etag?: string | undefined
                path?: string | undefined
                progress?: number | undefined
                token?: string | undefined
                uploadedAt?: string | undefined
                uploading?: boolean | undefined
                url?: string | undefined
                typeGroup?: string | undefined
                user?:
                  | {
                      _id?: string | undefined
                      username?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
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
    }
  } & {
    '/api/v1/channels.history': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: boolean | undefined
                showThreadMessages?: boolean | undefined
                unreads?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              files?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    size?: number | undefined
                    type?: string | undefined
                    rid?: string | undefined
                    userId?: string | undefined
                    store?: string | undefined
                    _updatedAt?: string | undefined
                    identify?:
                      | {
                          format?: string | undefined
                          size?:
                            | { width?: number | undefined; height?: number | undefined }
                            | undefined
                        }
                      | undefined
                    complete?: boolean | undefined
                    etag?: string | undefined
                    path?: string | undefined
                    progress?: number | undefined
                    token?: string | undefined
                    uploadedAt?: string | undefined
                    uploading?: boolean | undefined
                    url?: string | undefined
                    typeGroup?: string | undefined
                    user?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: boolean | undefined
                showThreadMessages?: boolean | undefined
                unreads?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.info': {
      $get:
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.invite': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                userIds?: string[] | undefined
                username?: string | undefined
                user?: string | undefined
                usernames?: string[] | undefined
              }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                        }
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
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                userIds?: string[] | undefined
                username?: string | undefined
                user?: string | undefined
                usernames?: string[] | undefined
              }
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
              json: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                userIds?: string[] | undefined
                username?: string | undefined
                user?: string | undefined
                usernames?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.join': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; joinCode?: string | undefined }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; joinCode?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.kick': {
      $post:
        | {
            input: { json: { roomId: string; userId: string } }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { roomId: string; userId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.leave': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
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
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.list.joined': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              channels?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    topic?: string | undefined
                    muted?: { [x: string]: unknown }[] | undefined
                    unmuted?: string[] | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
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
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.list': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              channels?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                text?:
                                  | { type?: string | undefined; text?: string | undefined }
                                  | undefined
                                blockId?: string | undefined
                                appId?: string | undefined
                                elements?:
                                  | {
                                      type?: string | undefined
                                      text?: string | undefined
                                      emoji?: boolean | undefined
                                    }[]
                                  | undefined
                              }[]
                            | undefined
                          editedAt?: string | undefined
                          editedBy?:
                            | { _id?: string | undefined; username?: string | undefined }
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    description?: string | undefined
                    federated?: boolean | undefined
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
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.members': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                status?: string[] | undefined
                filter?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              members?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    _updatedAt?: string | undefined
                    name?: string | undefined
                    nickname?: string | undefined
                    avatarETag?: string | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                status?: string[] | undefined
                filter?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.messages': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    urls?: { [x: string]: unknown }[] | undefined
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    md?:
                      | {
                          type?: string | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }[]
                      | undefined
                    replies?: string[] | undefined
                    tcount?: number | undefined
                    tlm?: string | undefined
                    attachments?: Attachment[] | undefined
                    editedAt?: string | undefined
                    editedBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    reactions?: { [x: string]: unknown } | undefined
                    t?: string | undefined
                    _hidden?: boolean | undefined
                    parent?: string | undefined
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
                roomId: string
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.moderators': {
      $get:
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              moderators?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.online': {
      $get:
        | {
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              online?: { _id?: string | undefined; username?: string | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.open': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.removeLeader': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.removeModerator': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.removeOwner': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.rename': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; name: string }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
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
              json: { roomId: string; name: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { method?: string | undefined; action?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; name: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.roles': {
      $get:
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } }
            output: {
              roles?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    roles?: string[] | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setAnnouncement': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string; announcement: string }
            }
            output: { announcement?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string; announcement: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setCustomFields': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string; customFields: { organization?: string | undefined } }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { organization?: string | undefined } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    announcement?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string; customFields: { organization?: string | undefined } }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setDefault': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; default: boolean }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    usernames?: string[] | undefined
                    joinCodeRequired?: boolean | undefined
                    muted?: { [x: string]: unknown }[] | undefined
                    default?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; default: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setDescription': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; description: string }
            }
            output: { description?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; description: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setJoinCode': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; joinCode: string }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { organization?: string | undefined } | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    announcement?: string | undefined
                    description?: string | undefined
                    joinCodeRequired?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; joinCode: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setPurpose': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; purpose: string }
            }
            output: { purpose?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; purpose: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setReadOnly': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; readOnly: boolean }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    usernames?: string[] | undefined
                    joinCodeRequired?: boolean | undefined
                    muted?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; readOnly: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setTopic': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; topic: string }
            }
            output: { topic?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; topic: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.setType': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; type: string }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    usernames?: string[] | undefined
                    joinCodeRequired?: boolean | undefined
                    muted?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; type: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { method?: string | undefined; action?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; type: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.unarchive': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.getAllUserMentionsByChannel': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              mentions?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    urls?: { [x: string]: unknown }[] | undefined
                    mentions?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                          type?: string | undefined
                        }[]
                      | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    md?:
                      | {
                          type?: string | undefined
                          value?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }
                                  | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
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
                roomId: string
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
    '/api/v1/channels.getIntegrations': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
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
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/channels.convertToTeam': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: {
              team?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    type?: number | undefined
                    createdAt?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    roomId?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/rooms.saveNotification': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                notifications: {
                  desktopNotifications?: string | undefined
                  disableNotifications?: string | undefined
                  emailNotifications?: string | undefined
                  audioNotificationValue?: string | undefined
                  desktopNotificationDuration?: string | undefined
                  audioNotifications?: string | undefined
                  unreadAlert?: string | undefined
                  hideUnreadStatus?: string | undefined
                  mobilePushNotifications?: string | undefined
                }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                notifications: {
                  desktopNotifications?: string | undefined
                  disableNotifications?: string | undefined
                  emailNotifications?: string | undefined
                  audioNotificationValue?: string | undefined
                  desktopNotificationDuration?: string | undefined
                  audioNotifications?: string | undefined
                  unreadAlert?: string | undefined
                  hideUnreadStatus?: string | undefined
                  mobilePushNotifications?: string | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.saveDraft': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { rid: string; draft: string; tmid?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { rid: string; draft: string; tmid?: string | undefined }
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
              json: { rid: string; draft: string; tmid?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.adminRooms': {
      $get:
        | {
            input: {
              query: {
                types?: string[] | undefined
                filter?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              rooms?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    topic?: string | undefined
                    announcement?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
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
                types?: string[] | undefined
                filter?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.cleanHistory': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                latest: string
                oldest: string
                inclusive?: boolean | undefined
                excludePinned?: boolean | undefined
                filesOnly?: boolean | undefined
                users?: string[] | undefined
                limit?: number | undefined
                ignoreDiscussion?: boolean | undefined
                ignoreThreads?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                latest: string
                oldest: string
                inclusive?: boolean | undefined
                excludePinned?: boolean | undefined
                filesOnly?: boolean | undefined
                users?: string[] | undefined
                limit?: number | undefined
                ignoreDiscussion?: boolean | undefined
                ignoreThreads?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.history': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                count?: number | undefined
                previous?: string | undefined
                next?: string | undefined
                aroundId?: string | undefined
                lastSeen?: string | undefined
                showThreadMessages?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                  }[]
                | undefined
              cursor?:
                | { next?: (string | null) | undefined; previous?: (string | null) | undefined }
                | undefined
              firstUnread?: { [x: string]: unknown } | undefined
              unreadNotLoaded?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                roomId: string
                count?: number | undefined
                previous?: string | undefined
                next?: string | undefined
                aroundId?: string | undefined
                lastSeen?: string | undefined
                showThreadMessages?: boolean | undefined
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
                roomId: string
                count?: number | undefined
                previous?: string | undefined
                next?: string | undefined
                aroundId?: string | undefined
                lastSeen?: string | undefined
                showThreadMessages?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                roomId: string
                count?: number | undefined
                previous?: string | undefined
                next?: string | undefined
                aroundId?: string | undefined
                lastSeen?: string | undefined
                showThreadMessages?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                roomId: string
                count?: number | undefined
                previous?: string | undefined
                next?: string | undefined
                aroundId?: string | undefined
                lastSeen?: string | undefined
                showThreadMessages?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/rooms.info': {
      $get:
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    ts?: string | undefined
                    t?: string | undefined
                    name?: string | undefined
                    usernames?: { [x: string]: unknown }[] | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    _updatedAt?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    default?: boolean | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          rid?: string | undefined
                          ts?: string | undefined
                          msg?: string | undefined
                          alias?: (string | null) | undefined
                          attachments?: { [x: string]: unknown }[] | undefined
                          file?:
                            | {
                                _id?: string | undefined
                                name?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          groupable?: boolean | undefined
                          drid?: string | undefined
                          _updatedAt?: string | undefined
                        }
                      | undefined
                    lm?: string | undefined
                  }
                | undefined
              classificationBanner?:
                | {
                    style?: 'classic' | undefined
                    uppercase?: boolean | undefined
                    monospace?: boolean | undefined
                    text?: string | undefined
                    segments?:
                      | { attrId?: string | undefined; text?: string | undefined }[]
                      | undefined
                    backgroundColor?: string | undefined
                    color?: string | undefined
                  }
                | undefined
              abacRequiredAttributes?: string[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
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
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.getDiscussions': {
      $get:
        | {
            input: {
              query: {
                roomName?: string | undefined
                roomId?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              discussions?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    _updatedAt?: string | undefined
                    topic?: string | undefined
                    prid?: string | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
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
                roomName?: string | undefined
                roomId?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.get': {
      $get:
        | {
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              update?:
                | {
                    _id?: string | undefined
                    ts?: string | undefined
                    t?: string | undefined
                    name?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    _updatedAt?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    default?: boolean | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          rid?: string | undefined
                          ts?: string | undefined
                          msg?: string | undefined
                          alias?: (string | null) | undefined
                          attachments?: Attachment[] | undefined
                          file?:
                            | {
                                _id?: string | undefined
                                name?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          groupable?: boolean | undefined
                          drid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?:
                            | {
                                url?: string | undefined
                                meta?: { [x: string]: unknown } | undefined
                              }[]
                            | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    uids?: string[] | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                  }[]
                | undefined
              remove?: { [x: string]: unknown }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.join': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json:
                | { roomId: string; joinCode?: string | undefined }
                | { roomName: string; joinCode?: string | undefined }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
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
              json:
                | { roomId: string; joinCode?: string | undefined }
                | { roomName: string; joinCode?: string | undefined }
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
              json:
                | { roomId: string; joinCode?: string | undefined }
                | { roomName: string; joinCode?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.leave': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.favorite': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; favorite: boolean }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; favorite: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.autocomplete.availableForTeams': {
      $get:
        | {
            input: { query: { name: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              items?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.autocomplete.channelAndPrivate': {
      $get:
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              items?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.autocomplete.adminRooms': {
      $get:
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              items?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.adminRooms.getRoom': {
      $get:
        | {
            input: { query: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              name?: string | undefined
              fname?: string | undefined
              t?: string | undefined
              msgs?: number | undefined
              usersCount?: number | undefined
              u?: { _id?: string | undefined; username?: string | undefined } | undefined
              ro?: boolean | undefined
              default?: boolean | undefined
              customFields?: { [x: string]: unknown } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { rid: string } } & {
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
    }
  } & {
    '/api/v1/rooms.saveRoomSettings': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                roomName?: string | undefined
                roomDescription?: string | undefined
                roomAvatar?: string | undefined
                featured?: boolean | undefined
                roomTopic?: string | undefined
                roomAnnouncement?: string | undefined
                roomCustomFields?: { [x: string]: unknown } | undefined
                roomType?: string | undefined
                readOnly?: boolean | undefined
                reactWhenReadOnly?: boolean | undefined
                systemMessages?: string[] | undefined
                default?: boolean | undefined
                joinCode?: string | undefined
                streamingOptions?: { [x: string]: unknown } | undefined
                retentionEnabled?: boolean | undefined
                retentionMaxAge?: string | undefined
                retentionExcludePinned?: boolean | undefined
                retentionFilesOnly?: boolean | undefined
                retentionIgnoreThreads?: boolean | undefined
                retentionOverrideGlobal?: boolean | undefined
                encrypted?: boolean | undefined
                favorite?: { [x: string]: unknown } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
              }
            }
            output: { rid?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                roomName?: string | undefined
                roomDescription?: string | undefined
                roomAvatar?: string | undefined
                featured?: boolean | undefined
                roomTopic?: string | undefined
                roomAnnouncement?: string | undefined
                roomCustomFields?: { [x: string]: unknown } | undefined
                roomType?: string | undefined
                readOnly?: boolean | undefined
                reactWhenReadOnly?: boolean | undefined
                systemMessages?: string[] | undefined
                default?: boolean | undefined
                joinCode?: string | undefined
                streamingOptions?: { [x: string]: unknown } | undefined
                retentionEnabled?: boolean | undefined
                retentionMaxAge?: string | undefined
                retentionExcludePinned?: boolean | undefined
                retentionFilesOnly?: boolean | undefined
                retentionIgnoreThreads?: boolean | undefined
                retentionOverrideGlobal?: boolean | undefined
                encrypted?: boolean | undefined
                favorite?: { [x: string]: unknown } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { method?: string | undefined; action?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                roomName?: string | undefined
                roomDescription?: string | undefined
                roomAvatar?: string | undefined
                featured?: boolean | undefined
                roomTopic?: string | undefined
                roomAnnouncement?: string | undefined
                roomCustomFields?: { [x: string]: unknown } | undefined
                roomType?: string | undefined
                readOnly?: boolean | undefined
                reactWhenReadOnly?: boolean | undefined
                systemMessages?: string[] | undefined
                default?: boolean | undefined
                joinCode?: string | undefined
                streamingOptions?: { [x: string]: unknown } | undefined
                retentionEnabled?: boolean | undefined
                retentionMaxAge?: string | undefined
                retentionExcludePinned?: boolean | undefined
                retentionFilesOnly?: boolean | undefined
                retentionIgnoreThreads?: boolean | undefined
                retentionOverrideGlobal?: boolean | undefined
                encrypted?: boolean | undefined
                favorite?: { [x: string]: unknown } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.nameExists': {
      $get:
        | {
            input: { query: { roomName: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { exists?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomName: string } } & {
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
            input: { query: { roomName: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.changeArchivationState': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { rid: string; action: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { rid: string; action: string }
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
              json: { rid: string; action: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.export': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                type: string
                dateFrom?: string | undefined
                dateTo?: string | undefined
                format?: string | undefined
                toUsers?: string[] | undefined
                toEmails?: string[] | undefined
                messages?: string[] | undefined
                subject?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                type: string
                dateFrom?: string | undefined
                dateTo?: string | undefined
                format?: string | undefined
                toUsers?: string[] | undefined
                toEmails?: string[] | undefined
                messages?: string[] | undefined
                subject?: string | undefined
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
                rid: string
                type: string
                dateFrom?: string | undefined
                dateTo?: string | undefined
                format?: string | undefined
                toUsers?: string[] | undefined
                toEmails?: string[] | undefined
                messages?: string[] | undefined
                subject?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                type: string
                dateFrom?: string | undefined
                dateTo?: string | undefined
                format?: string | undefined
                toUsers?: string[] | undefined
                toEmails?: string[] | undefined
                messages?: string[] | undefined
                subject?: string | undefined
              }
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
    '/api/v1/rooms.muteUser': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; roomId: string }
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
              json: { userId: string; roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.unmuteUser': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; roomId: string }
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
              json: { userId: string; roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.createDiscussion': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                prid: string
                t_name: string
                users?: string[] | undefined
                pmid?: string | undefined
                reply?: string | undefined
              }
            }
            output: {
              discussion?:
                | {
                    rid?: string | undefined
                    name?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    topic?: string | undefined
                    prid?: string | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    default?: boolean | undefined
                    _updatedAt?: string | undefined
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
                prid: string
                t_name: string
                users?: string[] | undefined
                pmid?: string | undefined
                reply?: string | undefined
              }
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
              json: {
                prid: string
                t_name: string
                users?: string[] | undefined
                pmid?: string | undefined
                reply?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.images': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                startingFromId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              files?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    size?: number | undefined
                    type?: string | undefined
                    rid?: string | undefined
                    userId?: string | undefined
                    store?: string | undefined
                    _updatedAt?: string | undefined
                    identify?:
                      | {
                          format?: string | undefined
                          size?:
                            | { width?: number | undefined; height?: number | undefined }
                            | undefined
                        }
                      | undefined
                    complete?: boolean | undefined
                    etag?: string | undefined
                    path?: string | undefined
                    progress?: number | undefined
                    token?: string | undefined
                    uploadedAt?: string | undefined
                    uploading?: boolean | undefined
                    url?: string | undefined
                    typeGroup?: string | undefined
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
                roomId: string
                startingFromId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
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
                roomId: string
                startingFromId?: string | undefined
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
    '/api/v1/audit/rooms.members': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                filter?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              members?:
                | {
                    _id?: string | undefined
                    status?: string | undefined
                    name?: string | undefined
                    username?: string | undefined
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
                roomId: string
                filter?: string | undefined
                count?: number | undefined
                offset?: number | undefined
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
                roomId: string
                filter?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                roomId: string
                filter?: string | undefined
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
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
    '/api/v1/rooms.membersOrderedByRole': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                roomName?: string | undefined
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                status?: string[] | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              members?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    _updatedAt?: string | undefined
                    name?: string | undefined
                    roles?: string[] | undefined
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
                roomId: string
                roomName?: string | undefined
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                status?: string[] | undefined
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
                roomId: string
                roomName?: string | undefined
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                status?: string[] | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                roomId: string
                roomName?: string | undefined
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                status?: string[] | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
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
    '/api/v1/teams.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                type: 0 | 1
                members?: string[] | undefined
                room?: { id?: string | undefined; readOnly?: boolean | undefined } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
                owner?: string | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
              }
            }
            output: {
              team?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    type?: number | undefined
                    createdAt?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    roomId?: string | undefined
                  }
                | undefined
              skippedMembers?: string[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                type: 0 | 1
                members?: string[] | undefined
                room?: { id?: string | undefined; readOnly?: boolean | undefined } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
                owner?: string | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                type: 0 | 1
                members?: string[] | undefined
                room?: { id?: string | undefined; readOnly?: boolean | undefined } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
                owner?: string | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                type: 0 | 1
                members?: string[] | undefined
                room?: { id?: string | undefined; readOnly?: boolean | undefined } | undefined
                sidepanel?: { items?: string[] | undefined } | undefined
                owner?: string | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/teams.listAll': {
      $get:
        | {
            input: { query: { offset?: number | undefined; count?: number | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              teams?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    type?: number | undefined
                    createdAt?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    roomId?: string | undefined
                    rooms?: number | undefined
                    numberOfUsers?: number | undefined
                  }[]
                | undefined
              total?: number | undefined
              count?: number | undefined
              offset?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; count?: number | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.list': {
      $get:
        | {
            input: {
              query: {
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              teams?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    type?: number | undefined
                    createdAt?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    roomId?: string | undefined
                    rooms?: number | undefined
                    numberOfUsers?: number | undefined
                  }[]
                | undefined
              total?: number | undefined
              count?: number | undefined
              offset?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: { [x: string]: unknown } | undefined
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
    '/api/v1/teams.info': {
      $get:
        | {
            input: { query: { teamId?: string | undefined; teamName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              teamInfo?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    type?: number | undefined
                    createdAt?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    roomId?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamId?: string | undefined; teamName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                data: { name?: string | undefined; type?: number | undefined }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                data: { name?: string | undefined; type?: number | undefined }
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
                teamId: string
                data: { name?: string | undefined; type?: number | undefined }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.addMembers': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                members: { userId?: string | undefined; roles?: string[] | undefined }[]
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                members: { userId?: string | undefined; roles?: string[] | undefined }[]
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
                teamId: string
                members: { userId?: string | undefined; roles?: string[] | undefined }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                members: { userId?: string | undefined; roles?: string[] | undefined }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/teams.updateMember': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                member: {
                  userId?: string | undefined
                  roles?: { [x: string]: unknown }[] | undefined
                }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                member: {
                  userId?: string | undefined
                  roles?: { [x: string]: unknown }[] | undefined
                }
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
                teamId: string
                member: {
                  userId?: string | undefined
                  roles?: { [x: string]: unknown }[] | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamId: string
                member: {
                  userId?: string | undefined
                  roles?: { [x: string]: unknown }[] | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/teams.members': {
      $get:
        | {
            input: {
              query: {
                teamName?: string | undefined
                teamId?: string | undefined
                name?: string | undefined
                username?: string | undefined
                status?: string[] | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              members?:
                | {
                    user?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                          status?: string | undefined
                          settings?:
                            | {
                                preferences?: { themeAppearence?: string | undefined } | undefined
                                profile?: { [x: string]: unknown } | undefined
                              }
                            | undefined
                        }
                      | undefined
                    roles?: string[] | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    createdAt?: string | undefined
                  }[]
                | undefined
              total?: number | undefined
              count?: number | undefined
              offset?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                teamName?: string | undefined
                teamId?: string | undefined
                name?: string | undefined
                username?: string | undefined
                status?: string[] | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.leave': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; rooms: string[] }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; rooms: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.removeMember': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; userId: string; rooms?: string[] | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; userId: string; rooms?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamName?: string | undefined
                teamId?: string | undefined
                roomsToRemove?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                teamName?: string | undefined
                teamId?: string | undefined
                roomsToRemove?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.autocomplete': {
      $get:
        | {
            input: { query: { name: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              teams?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    teamId?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.convertToChannel': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.addRooms': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; rooms: string[] }
            }
            output: {
              rooms?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    teamId?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; rooms: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { teamId: string; rooms: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.removeRoom': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                teamName?: string | undefined
                teamId?: string | undefined
                roomId?: string | undefined
              }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                teamName?: string | undefined
                teamId?: string | undefined
                roomId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.updateRoom': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; isDefault: boolean }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    teamId?: string | undefined
                    teamDefault?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; isDefault: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.listRooms': {
      $get:
        | {
            input: {
              query: {
                teamId?: string | undefined
                teamName?: string | undefined
                type?: string | undefined
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              rooms?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    teamId?: string | undefined
                    teamDefault?: boolean | undefined
                  }[]
                | undefined
              total?: number | undefined
              count?: number | undefined
              offset?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                teamId?: string | undefined
                teamName?: string | undefined
                type?: string | undefined
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.listRoomsOfUser': {
      $get:
        | {
            input: {
              query: {
                teamName?: string | undefined
                teamId?: string | undefined
                userId: string
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              rooms?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    federated?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          msg?: string | undefined
                          groupable?: boolean | undefined
                          blocks?:
                            | {
                                type?: string | undefined
                                blockId?: string | undefined
                                callId?: string | undefined
                                appId?: string | undefined
                              }[]
                            | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          rid?: string | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                        }
                      | undefined
                    teamId?: string | undefined
                    teamDefault?: boolean | undefined
                    isLastOwner?: boolean | undefined
                  }[]
                | undefined
              total?: number | undefined
              count?: number | undefined
              offset?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                teamName?: string | undefined
                teamId?: string | undefined
                userId: string
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/teams.listChildren': {
      $get:
        | {
            input: {
              query: {
                teamName?: string | undefined
                teamId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                filter?: string | undefined
                type?: string | undefined
                roomId?: string | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              total?: number | undefined
              data?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    _updatedAt?: string | undefined
                    topic?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    teamId?: string | undefined
                    teamMain?: boolean | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                teamName?: string | undefined
                teamId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                filter?: string | undefined
                type?: string | undefined
                roomId?: string | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
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
                teamName?: string | undefined
                teamId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                filter?: string | undefined
                type?: string | undefined
                roomId?: string | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.online': {
      $get:
        | {
            input: { query: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              online?: { _id?: string | undefined; username?: string | undefined }[] | undefined
              success?: boolean | undefined
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
    }
  } & {
    '/api/v1/groups.getIntegrations': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                count?: number | undefined
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
                    channel?: string[] | undefined
                    _createdAt?: string | undefined
                    _createdBy?:
                      | { username?: string | undefined; _id?: string | undefined }
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
            input: {
              query: {
                roomId: string
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
                roomId: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                roomId: string
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
            status: 403
          }
    }
  } & {
    '/api/v1/groups.addAll': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; activeUsersOnly?: boolean | undefined }
            }
            output: {
              channel?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; activeUsersOnly?: boolean | undefined }
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
              json: { roomId: string; activeUsersOnly?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.addLeader': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.addModerator': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.addOwner': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.archive': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
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
    '/api/v1/groups.close': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
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
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.counters': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              joined?: boolean | undefined
              members?: number | undefined
              unreads?: number | undefined
              unreadsFrom?: string | undefined
              msgs?: number | undefined
              latest?: string | undefined
              userMentions?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                readOnly?: boolean | undefined
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
                extraData?:
                  | {
                      broadcast?: boolean | undefined
                      encrypted?: boolean | undefined
                      teamId?: string | undefined
                      xmppFederated?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    usersCount?: number | undefined
                    abacAttributes?:
                      | { key?: string | undefined; values?: string[] | undefined }[]
                      | undefined
                    xmppFederation?: XmppFederation | undefined
                  }
                | undefined
              skippedMembers?: string[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                readOnly?: boolean | undefined
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
                extraData?:
                  | {
                      broadcast?: boolean | undefined
                      encrypted?: boolean | undefined
                      teamId?: string | undefined
                      xmppFederated?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                readOnly?: boolean | undefined
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
                abacAttributes?: { [x: string]: string[] } | undefined
                extraData?:
                  | {
                      broadcast?: boolean | undefined
                      encrypted?: boolean | undefined
                      teamId?: string | undefined
                      xmppFederated?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined; roomName?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined; roomName?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined; roomName?: string | undefined }
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
    '/api/v1/groups.history': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: boolean | undefined
                unreads?: boolean | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    ts?: string | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    _updatedAt?: string | undefined
                    t?: string | undefined
                    groupable?: boolean | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                roomId: string
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: boolean | undefined
                unreads?: boolean | undefined
                offset?: number | undefined
                count?: number | undefined
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
                roomId: string
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: boolean | undefined
                unreads?: boolean | undefined
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
    '/api/v1/groups.info': {
      $get:
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    default?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
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
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.invite': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                username?: string | undefined
                userIds?: string[] | undefined
                usernames?: string[] | undefined
              }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    ts?: string | undefined
                    t?: string | undefined
                    name?: string | undefined
                    usernames?: string[] | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    msgs?: number | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                username?: string | undefined
                userIds?: string[] | undefined
                usernames?: string[] | undefined
              }
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
              json: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                username?: string | undefined
                userIds?: string[] | undefined
                usernames?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId?: string | undefined
                roomName?: string | undefined
                userId?: string | undefined
                username?: string | undefined
                userIds?: string[] | undefined
                usernames?: string[] | undefined
              }
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
    '/api/v1/groups.kick': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
    '/api/v1/groups.leave': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
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
              json: { roomId?: string | undefined }
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
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.listAll': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              groups?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    customFields?: { companyId?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
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
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.list': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              groups?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
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
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.members': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
                status?: string[] | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              members?:
                | {
                    _id?: string | undefined
                    status?: string | undefined
                    name?: string | undefined
                    utcOffset?: number | undefined
                    username?: string | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
                status?: string[] | undefined
                filter?: string | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                offset?: number | undefined
                status?: string[] | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.messages': {
      $get:
        | {
            input: {
              query: {
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
                count?: number | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    reactions?:
                      | { ':frowning2:'?: { usernames?: string[] | undefined } | undefined }
                      | undefined
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    starred?: { _id?: string | undefined } | undefined
                    t?: string | undefined
                    groupable?: boolean | undefined
                    attachments?: Attachment[] | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
                count?: number | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: boolean | undefined
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
                roomId?: string | undefined
                roomName?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
                count?: number | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.moderators': {
      $get:
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              moderators?: { [x: string]: unknown }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
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
            input: { query: { roomId?: string | undefined; roomName?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.open': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
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
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.removeLeader': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.removeModerator': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.removeOwner': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; userId: string }
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
              json: { roomId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.rename': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; name: string }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
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
              json: { roomId: string; name: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; name: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setAnnouncement': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; announcement: string }
            }
            output: { announcement?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; announcement: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setCustomFields': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; customFields: { [x: string]: unknown } }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    _updatedAt?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sidepanel?: { items?: string[] | undefined } | undefined
                    teamId?: string | undefined
                    teamMain?: boolean | undefined
                    rolePrioritiesCreated?: number | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          ts?: string | undefined
                          u?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                              }
                            | undefined
                          _updatedAt?: string | undefined
                          urls?: { [x: string]: unknown }[] | undefined
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          md?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    encrypted?: boolean | undefined
                    e2eKeyId?: string | undefined
                    retention?:
                      | { enabled?: boolean | undefined; overrideGlobal?: boolean | undefined }
                      | undefined
                    announcement?: string | undefined
                    announcementDetails?: string | undefined
                    customFields?: { company?: string | undefined } | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; customFields: { [x: string]: unknown } }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; customFields: { [x: string]: unknown } }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setDescription': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; description: string }
            }
            output: { description?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; description: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; description: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setPurpose': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; purpose: string }
            }
            output: { purpose?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; purpose: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setReadOnly': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; readOnly: boolean }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    usernames?: string[] | undefined
                    joinCodeRequired?: boolean | undefined
                    muted?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; readOnly: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; readOnly: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setTopic': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; topic: string }
            }
            output: { topic?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; topic: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; topic: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setType': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; type: string }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    usernames?: string[] | undefined
                    joinCodeRequired?: boolean | undefined
                    muted?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; type: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { method?: string | undefined; action?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; type: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.unarchive': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
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
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.files': {
      $get:
        | {
            input: {
              query: {
                roomName?: string | undefined
                roomId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                typeGroup?: string | undefined
                name?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              files?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    size?: number | undefined
                    type?: string | undefined
                    rid?: string | undefined
                    description?: string | undefined
                    store?: string | undefined
                    complete?: boolean | undefined
                    uploading?: boolean | undefined
                    extension?: string | undefined
                    progress?: number | undefined
                    user?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    instanceId?: string | undefined
                    etag?: string | undefined
                    path?: string | undefined
                    token?: string | undefined
                    uploadedAt?: string | undefined
                    url?: string | undefined
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
                roomName?: string | undefined
                roomId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                typeGroup?: string | undefined
                name?: string | undefined
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
                roomName?: string | undefined
                roomId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                typeGroup?: string | undefined
                name?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.setEncrypted': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { encrypted: boolean; roomId: string }
            }
            output: {
              group?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    description?: string | undefined
                    broadcast?: boolean | undefined
                    encrypted?: boolean | undefined
                    teamMain?: boolean | undefined
                    name?: string | undefined
                    t?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    u?: { _id?: string | undefined; username?: string | undefined } | undefined
                    ts?: string | undefined
                    ro?: boolean | undefined
                    teamId?: string | undefined
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
              json: { encrypted: boolean; roomId: string }
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
              json: { encrypted: boolean; roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.convertToTeam': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: {
              team?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    type?: number | undefined
                    createdAt?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _updatedAt?: string | undefined
                    roomId?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/groups.roles': {
      $get:
        | {
            input: { query: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              roles?:
                | {
                    rid?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    roles?: string[] | undefined
                    _id?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId: string } } & {
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
            input: { query: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/directory': {
      $get:
        | {
            input: {
              query: {
                text?: string | undefined
                type?: string | undefined
                workspace?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              result?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    name?: string | undefined
                    username?: string | undefined
                    avatarETag?: string | undefined
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
                text?: string | undefined
                type?: string | undefined
                workspace?: string | undefined
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
    '/api/v1/rooms.open': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string }
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
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.hide': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
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
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/findOrCreateInvite': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { rid: string; days: number; maxUses: number }
            }
            output: {
              _id?: string | undefined
              days?: number | undefined
              maxUses?: number | undefined
              rid?: string | undefined
              userId?: string | undefined
              createdAt?: string | undefined
              expires?: (string | null) | undefined
              uses?: number | undefined
              _updatedAt?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { rid: string; days: number; maxUses: number }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.roles': {
      $get:
        | {
            input: { query: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              roles?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    roles?: string[] | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              errorType?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.isMember': {
      $get:
        | {
            input: { query: { roomId: string; userId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { isMember?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId: string; userId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { roomId: string; userId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.autocomplete.channelAndPrivate.withPagination': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                selector: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              items?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                  }[]
                | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                selector: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                selector: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/rooms.media/:rid': {
      $post: {
        input: { param: { rid: string } } & {
          header: { 'X-Auth-Token': string; 'X-User-Id': string }
        } & { form: { file: File; content?: string | undefined } }
        output: {
          file?: { _id?: string | undefined; url?: string | undefined } | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/rooms.mediaConfirm/:rid/:fileId': {
      $post:
        | {
            input: { param: { rid: string; fileId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                description?: string | undefined
                fileName?: string | undefined
                fileContent?: { [x: string]: unknown } | undefined
                emoji?: string | undefined
                groupable?: boolean | undefined
                msg?: string | undefined
                tmid?: string | undefined
                avatar?: string | undefined
                alias?: string | undefined
                customFields?: string | undefined
              }
            }
            output: {
              message?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    ts?: string | undefined
                    msg?: string | undefined
                    file?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          type?: string | undefined
                          size?: number | undefined
                          format?: string | undefined
                        }
                      | undefined
                    files?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          type?: string | undefined
                          size?: number | undefined
                          format?: string | undefined
                        }[]
                      | undefined
                    attachments?:
                      | {
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          image_dimensions?:
                            | { width?: number | undefined; height?: number | undefined }
                            | undefined
                          image_preview?: string | undefined
                          image_url?: string | undefined
                          image_type?: string | undefined
                          image_size?: number | undefined
                          type?: string | undefined
                        }[]
                      | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    urls?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string; fileId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                description?: string | undefined
                fileName?: string | undefined
                fileContent?: { [x: string]: unknown } | undefined
                emoji?: string | undefined
                groupable?: boolean | undefined
                msg?: string | undefined
                tmid?: string | undefined
                avatar?: string | undefined
                alias?: string | undefined
                customFields?: string | undefined
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
            input: { param: { rid: string; fileId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                description?: string | undefined
                fileName?: string | undefined
                fileContent?: { [x: string]: unknown } | undefined
                emoji?: string | undefined
                groupable?: boolean | undefined
                msg?: string | undefined
                tmid?: string | undefined
                avatar?: string | undefined
                alias?: string | undefined
                customFields?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/uploads.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { fileId: string }
            }
            output: { deletedFiles?: string[] | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { fileId: string }
            }
            output: {
              success?: boolean | undefined
              errorType?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { fileId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/listInvites': {
      $get:
        | {
            input: {}
            output: {
              _id?: string | undefined
              days?: number | undefined
              maxUses?: number | undefined
              rid?: string | undefined
              userId?: string | undefined
              createdAt?: string | undefined
              expires?: (string | null) | undefined
              uses?: number | undefined
              _updatedAt?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/removeInvite/:_id': {
      $delete:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
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
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/useInviteToken': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { token: string }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    topic?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { token: string }
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
              json: { token: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/abac/rooms/:rid/attributes': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { attributes?: { [x: string]: string[] } | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { attributes?: { [x: string]: string[] } | undefined }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { attributes?: { [x: string]: string[] } | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { attributes?: { [x: string]: string[] } | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/rooms/:rid/attributes/:key': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { values?: string[] | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { values?: string[] | undefined }
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
              json: { values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { values?: string[] | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { values?: string[] | undefined }
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
              json: { values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/attributes': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                key?: string | undefined
                values?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              attributes?:
                | {
                    _id?: string | undefined
                    key?: string | undefined
                    values?: string[] | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
              total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                key?: string | undefined
                values?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                key?: string | undefined
                values?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                key?: string | undefined
                values?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key?: string | undefined; values?: string[] | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key?: string | undefined; values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key?: string | undefined; values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key?: string | undefined; values?: string[] | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/users/sync': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                usernames?: string[] | undefined
                ids?: string[] | undefined
                emails?: string[] | undefined
                ldapIds?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                usernames?: string[] | undefined
                ids?: string[] | undefined
                emails?: string[] | undefined
                ldapIds?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                usernames?: string[] | undefined
                ids?: string[] | undefined
                emails?: string[] | undefined
                ldapIds?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                usernames?: string[] | undefined
                ids?: string[] | undefined
                emails?: string[] | undefined
                ldapIds?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/attributes/:_id': {
      $put:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key: string; values: string[] }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key: string; values: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key: string; values: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { key: string; values: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              key?: string | undefined
              values?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/attributes/:key/is-in-use': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; inUse?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/attributes.listKeys': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              data?: { key?: string | undefined; label?: string | undefined }[] | undefined
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
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/attributes.listAssignable': {
      $get:
        | {
            input: { query: { rid?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              attributes?: { key?: string | undefined; values?: string[] | undefined }[] | undefined
              requiredKeys?: string[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rid?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { rid?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { rid?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/rooms': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                filter?: string | undefined
                filterType?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              rooms?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    t?: string | undefined
                    abacAttributes?:
                      | { key?: string | undefined; values?: string[] | undefined }[]
                      | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
              total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                filter?: string | undefined
                filterType?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                filter?: string | undefined
                filterType?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                filter?: string | undefined
                filterType?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/rooms.evaluateMembership': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                rid?: string | undefined
                attributes: { [x: string]: string[] }
                filter?: string | undefined
                group?: 'loses' | 'retains' | undefined
                after?: { _id?: string | undefined; username?: string | undefined } | undefined
              }
            }
            output: {
              compliant?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
              nonCompliant?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
              inconclusive?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
              creator?: 'compliant' | 'nonCompliant' | 'inconclusive' | undefined
              members?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                    verdict?: 'compliant' | 'nonCompliant' | 'inconclusive' | undefined
                    roles?: string[] | undefined
                  }[]
                | undefined
              count?: number | undefined
              checked?: number | undefined
              total?: number | undefined
              next?: { _id?: string | undefined; username?: string | undefined } | undefined
              editor?: 'compliant' | 'nonCompliant' | 'inconclusive' | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                rid?: string | undefined
                attributes: { [x: string]: string[] }
                filter?: string | undefined
                group?: 'loses' | 'retains' | undefined
                after?: { _id?: string | undefined; username?: string | undefined } | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                rid?: string | undefined
                attributes: { [x: string]: string[] }
                filter?: string | undefined
                group?: 'loses' | 'retains' | undefined
                after?: { _id?: string | undefined; username?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                members?: string[] | undefined
                excludeSelf?: boolean | undefined
                rid?: string | undefined
                attributes: { [x: string]: string[] }
                filter?: string | undefined
                group?: 'loses' | 'retains' | undefined
                after?: { _id?: string | undefined; username?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/audit': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                actor?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              events?:
                | {
                    _id?: string | undefined
                    ts?: string | undefined
                    t?: string | undefined
                    actor?:
                      | {
                          type?: string | undefined
                          _id?: string | undefined
                          username?: string | undefined
                          ip?: string | undefined
                          useragent?: string | undefined
                        }
                      | undefined
                    data?:
                      | { key?: string | undefined; value?: { [x: string]: unknown } | undefined }[]
                      | undefined
                  }[]
                | undefined
              offset?: number | undefined
              count?: number | undefined
              total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                actor?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                actor?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                actor?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/abac/pdp/health': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              available?: true | undefined
              message?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              available?: false | undefined
              message?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/subscriptions.get': {
      $get:
        | {
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              update?: Subscription[] | undefined
              remove?: { [x: string]: unknown }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/subscriptions.getOne': {
      $get:
        | {
            input: { query: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { subscription?: Subscription | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId: string } } & {
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
            input: { query: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/subscriptions.read': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json:
                | { roomId: string; readThreads?: boolean | undefined }
                | { rid: string; readThreads?: boolean | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json:
                | { roomId: string; readThreads?: boolean | undefined }
                | { rid: string; readThreads?: boolean | undefined }
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
              json:
                | { roomId: string; readThreads?: boolean | undefined }
                | { rid: string; readThreads?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/subscriptions.unread': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string } | { firstUnreadMessage: { _id?: string | undefined } }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string } | { firstUnreadMessage: { _id?: string | undefined } }
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
              json: { roomId: string } | { firstUnreadMessage: { _id?: string | undefined } }
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
