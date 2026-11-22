declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/chat.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId?: string | undefined
                msgId?: string | undefined
                fileId?: string | undefined
                asUser?: boolean | undefined
              }
            }
            output: {
              _id?: string | undefined
              ts?: string | undefined
              message?:
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
                msgId?: string | undefined
                fileId?: string | undefined
                asUser?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId?: string | undefined
                msgId?: string | undefined
                fileId?: string | undefined
                asUser?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.react': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                messageId: string
                emoji?: string | undefined
                reaction?: string | undefined
                shouldReact?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                messageId: string
                emoji?: string | undefined
                reaction?: string | undefined
                shouldReact?: boolean | undefined
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
                messageId: string
                emoji?: string | undefined
                reaction?: string | undefined
                shouldReact?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                msgId: string
                text: string
                previewUrls?: string[] | undefined
                customFields?: { [x: string]: unknown } | undefined
              }
            }
            output: {
              message?:
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
                    urls?:
                      | {
                          url?: string | undefined
                          meta?: { [x: string]: unknown } | undefined
                          ignoreParse?: boolean | undefined
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
                    editedAt?: string | undefined
                    editedBy?:
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
                roomId: string
                msgId: string
                text: string
                previewUrls?: string[] | undefined
                customFields?: { [x: string]: unknown } | undefined
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
                roomId: string
                msgId: string
                text: string
                previewUrls?: string[] | undefined
                customFields?: { [x: string]: unknown } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.reportMessage': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { messageId: string; description: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { messageId: string; description: string }
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
              json: { messageId: string; description: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.followMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { mid: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { mid: string }
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
              json: { mid: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.unfollowMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { mid: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { mid: string }
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
              json: { mid: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.getMessage': {
      $get:
        | {
            input: { query: { msgId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              message?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    alias?: string | undefined
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
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { msgId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { msgId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.getThreadsList': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                rid: string
                type?: string | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              threads?:
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
                    reactions?:
                      | { ':smile:'?: { usernames?: string[] | undefined } | undefined }
                      | undefined
                    starred?: { [x: string]: unknown }[] | undefined
                    pinned?: boolean | undefined
                    pinnedAt?: string | undefined
                    pinnedBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    replies?: string[] | undefined
                    tcount?: number | undefined
                    tlm?: string | undefined
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
                sort?: { [x: string]: unknown } | undefined
                rid: string
                type?: string | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.getDeletedMessages': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                since: string
                roomId: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?: { _id?: string | undefined }[] | undefined
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
                sort?: { [x: string]: unknown } | undefined
                since: string
                roomId: string
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                since: string
                roomId: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.getDiscussions': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    rid?: string | undefined
                    ts?: string | undefined
                    msg?: string | undefined
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
                    dcount?: number | undefined
                    dlm?: string | undefined
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
                text?: string | undefined
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
                text?: string | undefined
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
                text?: string | undefined
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
    '/api/v1/chat.getMentionedMessages': {
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
                            | { type?: string | undefined; value?: string | undefined }[]
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
    '/api/v1/chat.getMessageReadReceipts': {
      $get:
        | {
            input: {
              query: { offset?: number | undefined; count?: number | undefined; messageId: string }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              receipts?:
                | {
                    _id?: string | undefined
                    roomId?: string | undefined
                    userId?: string | undefined
                    messageId?: string | undefined
                    ts?: string | undefined
                    user?:
                      | {
                          username?: string | undefined
                          name?: string | undefined
                          _id?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { offset?: number | undefined; count?: number | undefined; messageId: string }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { error?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { offset?: number | undefined; count?: number | undefined; messageId: string }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.getPinnedMessages': {
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
                    pinned?: boolean | undefined
                    pinnedAt?: string | undefined
                    pinnedBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    reactions?:
                      | { ':smile:'?: { usernames?: string[] | undefined } | undefined }
                      | undefined
                    starred?: { [x: string]: unknown }[] | undefined
                    replies?: string[] | undefined
                    tcount?: number | undefined
                    tlm?: string | undefined
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
    '/api/v1/chat.getMessages': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageIds: string[] }
            }
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
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageIds: string[] }
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
              json: { messageIds: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageIds: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageIds: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/chat.getStarredMessages': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    rid?: string | undefined
                    ts?: string | undefined
                    msg?: string | undefined
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
                    dcount?: number | undefined
                    dlm?: string | undefined
                    starred?: { _id?: string | undefined }[] | undefined
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
                roomId: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
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
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
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
    '/api/v1/chat.getThreadMessages': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                tmid: string
                aroundId?: string | undefined
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
                    replies?: string[] | undefined
                    tcount?: number | undefined
                    tlm?: string | undefined
                    tmid?: string | undefined
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
                sort?: { [x: string]: unknown } | undefined
                tmid: string
                aroundId?: string | undefined
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                tmid: string
                aroundId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.readThread': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { tmid: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { tmid: string }
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
              json: { tmid: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { tmid: string }
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
    '/api/v1/chat.ignoreUser': {
      $get:
        | {
            input: { query: { rid: string; userId: string; ignore: boolean } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rid: string; userId: string; ignore: boolean } } & {
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
            input: { query: { rid: string; userId: string; ignore: boolean } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.pinMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
            }
            output: {
              message?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    rid?: string | undefined
                    ts?: string | undefined
                    msg?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    groupable?: boolean | undefined
                    attachments?:
                      | {
                          text?: string | undefined
                          author_name?: string | undefined
                          author_icon?: string | undefined
                          ts?: string | undefined
                          attachments?: { [x: string]: unknown }[] | undefined
                        }[]
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
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
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
              json: { messageId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.unPinMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
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
              json: { messageId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.postMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json:
                | {
                    alias?: string | undefined
                    avatar?: string | undefined
                    emoji?: string | undefined
                    roomId: string | string[]
                    text?: string | undefined
                    parseUrls?: boolean | undefined
                    attachments?:
                      | {
                          audio_url?: string | undefined
                          author_icon?: string | undefined
                          author_link?: string | undefined
                          author_name?: string | undefined
                          collapsed?: boolean | undefined
                          color?: string | undefined
                          fields?:
                            | { short?: boolean | undefined; title: string; value: string }[]
                            | undefined
                          image_url?: string | undefined
                          message_link?: string | undefined
                          text?: string | undefined
                          thumb_url?: string | undefined
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          ts?: string | undefined
                          video_url?: string | undefined
                        }[]
                      | undefined
                    tmid?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                  }
                | {
                    alias?: string | undefined
                    avatar?: string | undefined
                    channel: string | string[]
                    emoji?: string | undefined
                    text?: string | undefined
                    parseUrls?: boolean | undefined
                    attachments?:
                      | {
                          audio_url?: string | undefined
                          author_icon?: string | undefined
                          author_link?: string | undefined
                          author_name?: string | undefined
                          collapsed?: boolean | undefined
                          color?: string | undefined
                          fields?:
                            | { short?: boolean | undefined; title: string; value: string }[]
                            | undefined
                          image_url?: string | undefined
                          message_link?: string | undefined
                          text?: string | undefined
                          thumb_url?: string | undefined
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          ts?: string | undefined
                          video_url?: string | undefined
                        }[]
                      | undefined
                    customFields?: { [x: string]: unknown } | undefined
                  }
            }
            output: {
              ts?: number | undefined
              channel?: string | undefined
              message?:
                | {
                    alias?: string | undefined
                    msg?: string | undefined
                    attachments?: { [x: string]: unknown }[] | undefined
                    parseUrls?: boolean | undefined
                    groupable?: boolean | undefined
                    emoji?: string | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    rid?: string | undefined
                    _id?: string | undefined
                    _updatedAt?: string | undefined
                    md?: { [x: string]: unknown }[] | undefined
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    urls?: { [x: string]: unknown }[] | undefined
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
                | {
                    alias?: string | undefined
                    avatar?: string | undefined
                    emoji?: string | undefined
                    roomId: string | string[]
                    text?: string | undefined
                    parseUrls?: boolean | undefined
                    attachments?:
                      | {
                          audio_url?: string | undefined
                          author_icon?: string | undefined
                          author_link?: string | undefined
                          author_name?: string | undefined
                          collapsed?: boolean | undefined
                          color?: string | undefined
                          fields?:
                            | { short?: boolean | undefined; title: string; value: string }[]
                            | undefined
                          image_url?: string | undefined
                          message_link?: string | undefined
                          text?: string | undefined
                          thumb_url?: string | undefined
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          ts?: string | undefined
                          video_url?: string | undefined
                        }[]
                      | undefined
                    tmid?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                  }
                | {
                    alias?: string | undefined
                    avatar?: string | undefined
                    channel: string | string[]
                    emoji?: string | undefined
                    text?: string | undefined
                    parseUrls?: boolean | undefined
                    attachments?:
                      | {
                          audio_url?: string | undefined
                          author_icon?: string | undefined
                          author_link?: string | undefined
                          author_name?: string | undefined
                          collapsed?: boolean | undefined
                          color?: string | undefined
                          fields?:
                            | { short?: boolean | undefined; title: string; value: string }[]
                            | undefined
                          image_url?: string | undefined
                          message_link?: string | undefined
                          text?: string | undefined
                          thumb_url?: string | undefined
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          ts?: string | undefined
                          video_url?: string | undefined
                        }[]
                      | undefined
                    customFields?: { [x: string]: unknown } | undefined
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
              json:
                | {
                    alias?: string | undefined
                    avatar?: string | undefined
                    emoji?: string | undefined
                    roomId: string | string[]
                    text?: string | undefined
                    parseUrls?: boolean | undefined
                    attachments?:
                      | {
                          audio_url?: string | undefined
                          author_icon?: string | undefined
                          author_link?: string | undefined
                          author_name?: string | undefined
                          collapsed?: boolean | undefined
                          color?: string | undefined
                          fields?:
                            | { short?: boolean | undefined; title: string; value: string }[]
                            | undefined
                          image_url?: string | undefined
                          message_link?: string | undefined
                          text?: string | undefined
                          thumb_url?: string | undefined
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          ts?: string | undefined
                          video_url?: string | undefined
                        }[]
                      | undefined
                    tmid?: string | undefined
                    customFields?: { [x: string]: unknown } | undefined
                  }
                | {
                    alias?: string | undefined
                    avatar?: string | undefined
                    channel: string | string[]
                    emoji?: string | undefined
                    text?: string | undefined
                    parseUrls?: boolean | undefined
                    attachments?:
                      | {
                          audio_url?: string | undefined
                          author_icon?: string | undefined
                          author_link?: string | undefined
                          author_name?: string | undefined
                          collapsed?: boolean | undefined
                          color?: string | undefined
                          fields?:
                            | { short?: boolean | undefined; title: string; value: string }[]
                            | undefined
                          image_url?: string | undefined
                          message_link?: string | undefined
                          text?: string | undefined
                          thumb_url?: string | undefined
                          title?: string | undefined
                          title_link?: string | undefined
                          title_link_download?: boolean | undefined
                          ts?: string | undefined
                          video_url?: string | undefined
                        }[]
                      | undefined
                    customFields?: { [x: string]: unknown } | undefined
                  }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.search': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                roomId: string
                searchText: string
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
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    _updatedAt?: string | undefined
                    score?: number | undefined
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
                count?: number | undefined
                offset?: number | undefined
                roomId: string
                searchText: string
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
                count?: number | undefined
                offset?: number | undefined
                roomId: string
                searchText: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.sendMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                message: {
                  t?: string | undefined
                  rid: string
                  msg?: string | undefined
                  alias?: string | undefined
                  emoji?: string | undefined
                  avatar?: string | undefined
                  attachments?:
                    | {
                        audio_url?: string | undefined
                        author_icon?: string | undefined
                        author_link?: string | undefined
                        author_name?: string | undefined
                        collapsed?: boolean | undefined
                        color?: string | undefined
                        fields?:
                          | { short?: boolean | undefined; title: string; value: string }[]
                          | undefined
                        image_url?: string | undefined
                        message_link?: string | undefined
                        text?: string | undefined
                        thumb_url?: string | undefined
                        title?: string | undefined
                        title_link?: string | undefined
                        title_link_download?: boolean | undefined
                        ts?: string | undefined
                        video_url?: string | undefined
                      }[]
                    | undefined
                  tmid?: string | undefined
                  tshow?: boolean | undefined
                  blocks?:
                    | {
                        type?: string | undefined
                        text?: { type?: string | undefined; text?: string | undefined } | undefined
                        fields?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                  customFields?: { [x: string]: unknown } | undefined
                  _id?: string | undefined
                  location?: { [x: string]: unknown } | undefined
                  groupable?: boolean | undefined
                  parseUrls?: boolean | undefined
                  text?: string | undefined
                  e2e?: string | undefined
                  e2eMentions?: { [x: string]: unknown } | undefined
                  content?: { [x: string]: unknown } | undefined
                }
                previewUrls?: string[] | undefined
              }
            }
            output: {
              message?:
                | {
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
                    md?: { [x: string]: unknown }[] | undefined
                    mentions?: { [x: string]: unknown }[] | undefined
                    channels?: { [x: string]: unknown }[] | undefined
                    urls?: { [x: string]: unknown }[] | undefined
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
                message: {
                  t?: string | undefined
                  rid: string
                  msg?: string | undefined
                  alias?: string | undefined
                  emoji?: string | undefined
                  avatar?: string | undefined
                  attachments?:
                    | {
                        audio_url?: string | undefined
                        author_icon?: string | undefined
                        author_link?: string | undefined
                        author_name?: string | undefined
                        collapsed?: boolean | undefined
                        color?: string | undefined
                        fields?:
                          | { short?: boolean | undefined; title: string; value: string }[]
                          | undefined
                        image_url?: string | undefined
                        message_link?: string | undefined
                        text?: string | undefined
                        thumb_url?: string | undefined
                        title?: string | undefined
                        title_link?: string | undefined
                        title_link_download?: boolean | undefined
                        ts?: string | undefined
                        video_url?: string | undefined
                      }[]
                    | undefined
                  tmid?: string | undefined
                  tshow?: boolean | undefined
                  blocks?:
                    | {
                        type?: string | undefined
                        text?: { type?: string | undefined; text?: string | undefined } | undefined
                        fields?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                  customFields?: { [x: string]: unknown } | undefined
                  _id?: string | undefined
                  location?: { [x: string]: unknown } | undefined
                  groupable?: boolean | undefined
                  parseUrls?: boolean | undefined
                  text?: string | undefined
                  e2e?: string | undefined
                  e2eMentions?: { [x: string]: unknown } | undefined
                  content?: { [x: string]: unknown } | undefined
                }
                previewUrls?: string[] | undefined
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
                message: {
                  t?: string | undefined
                  rid: string
                  msg?: string | undefined
                  alias?: string | undefined
                  emoji?: string | undefined
                  avatar?: string | undefined
                  attachments?:
                    | {
                        audio_url?: string | undefined
                        author_icon?: string | undefined
                        author_link?: string | undefined
                        author_name?: string | undefined
                        collapsed?: boolean | undefined
                        color?: string | undefined
                        fields?:
                          | { short?: boolean | undefined; title: string; value: string }[]
                          | undefined
                        image_url?: string | undefined
                        message_link?: string | undefined
                        text?: string | undefined
                        thumb_url?: string | undefined
                        title?: string | undefined
                        title_link?: string | undefined
                        title_link_download?: boolean | undefined
                        ts?: string | undefined
                        video_url?: string | undefined
                      }[]
                    | undefined
                  tmid?: string | undefined
                  tshow?: boolean | undefined
                  blocks?:
                    | {
                        type?: string | undefined
                        text?: { type?: string | undefined; text?: string | undefined } | undefined
                        fields?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                  customFields?: { [x: string]: unknown } | undefined
                  _id?: string | undefined
                  location?: { [x: string]: unknown } | undefined
                  groupable?: boolean | undefined
                  parseUrls?: boolean | undefined
                  text?: string | undefined
                  e2e?: string | undefined
                  e2eMentions?: { [x: string]: unknown } | undefined
                  content?: { [x: string]: unknown } | undefined
                }
                previewUrls?: string[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.starMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
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
              json: { messageId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.unStarMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string }
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
              json: { messageId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.syncThreadsList': {
      $get:
        | {
            input: {
              query: {
                sort?: { [x: string]: unknown } | undefined
                rid: string
                updatedSince: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              threads?:
                | {
                    update?:
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
                          replies?: string[] | undefined
                          tcount?: number | undefined
                          tlm?: string | undefined
                        }[]
                      | undefined
                    remove?:
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
                          replies?: string[] | undefined
                          tcount?: number | undefined
                          tlm?: string | undefined
                          _deletedAt?: string | undefined
                          __collection__?: string | undefined
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
                sort?: { [x: string]: unknown } | undefined
                rid: string
                updatedSince: string
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
                sort?: { [x: string]: unknown } | undefined
                rid: string
                updatedSince: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.syncThreadMessages': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                updatedSince: string
                tmid: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    update?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          tmid?: string | undefined
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
                    remove?: { [x: string]: unknown }[] | undefined
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                updatedSince: string
                tmid: string
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                updatedSince: string
                tmid: string
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.syncMessages': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                count?: number | undefined
                lastUpdate?: string | undefined
                fromTs?: string | undefined
                next?: string | undefined
                previous?: string | undefined
                type?: 'UPDATED' | 'DELETED' | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              result?:
                | {
                    updated?:
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
                          msg?: string | undefined
                          ts?: string | undefined
                          _updatedAt?: string | undefined
                          alias?: string | undefined
                          token?: string | undefined
                          unread?: boolean | undefined
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
                          t?: string | undefined
                          groupable?: boolean | undefined
                        }[]
                      | undefined
                    deleted?: { _id: string; _deletedAt: string }[] | undefined
                    cursor?:
                      | {
                          next?: (string | null) | undefined
                          previous?: (string | null) | undefined
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
            input: {
              query: {
                roomId: string
                count?: number | undefined
                lastUpdate?: string | undefined
                fromTs?: string | undefined
                next?: string | undefined
                previous?: string | undefined
                type?: 'UPDATED' | 'DELETED' | undefined
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
                lastUpdate?: string | undefined
                fromTs?: string | undefined
                next?: string | undefined
                previous?: string | undefined
                type?: 'UPDATED' | 'DELETED' | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/chat.getURLPreview': {
      $get:
        | {
            input: { query: { roomId: string; url: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              urlPreview?:
                | {
                    url?: string | undefined
                    meta?: { [x: string]: unknown } | undefined
                    headers?:
                      | { contentLength?: string | undefined; contentType?: string | undefined }
                      | undefined
                    ignoreParse?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomId: string; url: string } } & {
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
            input: { query: { roomId: string; url: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/im.blockUser': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; block: boolean }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; block: boolean }
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
              json: { roomId: string; block: boolean }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.close': {
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
    '/api/v1/dm.counters': {
      $get:
        | {
            input: { query: { roomId: string; userId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
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
            input: { query: { roomId: string; userId?: string | undefined } } & {
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
            input: { query: { roomId: string; userId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json:
                | { username: string; excludeSelf?: boolean | undefined }
                | { usernames: string; excludeSelf?: boolean | undefined }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    rid?: string | undefined
                    usernames?: string[] | undefined
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
                | { username: string; excludeSelf?: boolean | undefined }
                | { usernames: string; excludeSelf?: boolean | undefined }
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
              json:
                | { username: string; excludeSelf?: boolean | undefined }
                | { usernames: string; excludeSelf?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string } | { username: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string } | { username: string }
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
              json: { roomId: string } | { username: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.files': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                typeGroup?: string | undefined
                name?: string | undefined
                roomId?: string | undefined
                username?: string | undefined
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                typeGroup?: string | undefined
                name?: string | undefined
                roomId?: string | undefined
                username?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.history': {
      $get:
        | {
            input: {
              query: {
                roomId: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: string | undefined
                showThreadMessages?: boolean | undefined
                unreads?: boolean | undefined
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: string | undefined
                showThreadMessages?: boolean | undefined
                unreads?: boolean | undefined
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
                latest?: string | undefined
                oldest?: string | undefined
                inclusive?: string | undefined
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
    '/api/v1/dm.list.everyone': {
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
              ims?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    usersCount?: number | undefined
                    msgs?: number | undefined
                    ts?: string | undefined
                    uids?: string[] | undefined
                    default?: boolean | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    _USERNAMES?: string[] | undefined
                    lastMessage?:
                      | {
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
                          _id?: string | undefined
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
                                  | {
                                      type?: string | undefined
                                      value?:
                                        | {
                                            type?: string | undefined
                                            value?: string | undefined
                                            src?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }
                                              | undefined
                                            label?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
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
    '/api/v1/dm.list': {
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
              ims?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    usernames?: string[] | undefined
                    usersCount?: number | undefined
                    msgs?: number | undefined
                    ts?: string | undefined
                    uids?: string[] | undefined
                    encrypted?: boolean | undefined
                    default?: boolean | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    _updatedAt?: string | undefined
                    _USERNAMES?: string[] | undefined
                    e2eKeyId?: string | undefined
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
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    lm?: string | undefined
                    topic?: string | undefined
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
    '/api/v1/dm.members': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                roomId?: string | undefined
                username?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              members?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    name?: string | undefined
                    utcOffset?: number | undefined
                    statusText?: string | undefined
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
                sort?: { [x: string]: unknown } | undefined
                roomId?: string | undefined
                username?: string | undefined
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                roomId?: string | undefined
                username?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.messages': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                roomId?: string | undefined
                username?: string | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: string | undefined
                sort?: { [x: string]: unknown } | undefined
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
                roomId?: string | undefined
                username?: string | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: string | undefined
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
                offset?: number | undefined
                count?: number | undefined
                roomId?: string | undefined
                username?: string | undefined
                mentionIds?: string | undefined
                starredIds?: string | undefined
                pinned?: string | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dm.messages.others': {
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
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { route?: string | undefined } | undefined
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
    }
  } & {
    '/api/v1/dm.open': {
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
    '/api/v1/dm.setTopic': {
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
              json: { roomId: string; topic: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/autotranslate.getProviderUiMetadata': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              providers?:
                | { [x: string]: { name?: string | undefined; displayName?: string | undefined } }
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
    '/api/v1/autotranslate.getSupportedLanguages': {
      $get:
        | {
            input: { query: { targetLanguage: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              languages?:
                | {
                    name?: string | undefined
                    supports_formality?: boolean | undefined
                    language?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { targetLanguage: string } } & {
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
            input: { query: { targetLanguage: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/autotranslate.saveSettings': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                field: string
                value: boolean
                defaultLanguage?: string | undefined
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
                field: string
                value: boolean
                defaultLanguage?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/autotranslate.translateMessage': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string; targetLanguage?: string | undefined }
            }
            output: {
              message?:
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
                    translations?: { en?: string | undefined } | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string; targetLanguage?: string | undefined }
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
              json: { messageId: string; targetLanguage?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { messageId: string; targetLanguage?: string | undefined }
            }
            output: { success: false; error: string }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
