declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/email-inbox.list': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              emailInboxes?:
                | {
                    _id?: string | undefined
                    active?: boolean | undefined
                    name?: string | undefined
                    email?: string | undefined
                    description?: string | undefined
                    senderInfo?: string | undefined
                    department?: string | undefined
                    smtp?:
                      | {
                          server?: string | undefined
                          port?: number | undefined
                          username?: string | undefined
                          password?: string | undefined
                          secure?: boolean | undefined
                        }
                      | undefined
                    imap?:
                      | {
                          server?: string | undefined
                          port?: number | undefined
                          username?: string | undefined
                          password?: string | undefined
                          secure?: boolean | undefined
                        }
                      | undefined
                    _createdAt?: string | undefined
                    _updatedAt?: string | undefined
                    _createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
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
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
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
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
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
    '/api/v1/email-inbox': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                _id?: string | undefined
                name: string
                email: string
                active: boolean
                description?: string | undefined
                senderInfo?: string | undefined
                department?: string | undefined
                smtp: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
                imap: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
              }
            }
            output: { _id?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                _id?: string | undefined
                name: string
                email: string
                active: boolean
                description?: string | undefined
                senderInfo?: string | undefined
                department?: string | undefined
                smtp: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
                imap: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                _id?: string | undefined
                name: string
                email: string
                active: boolean
                description?: string | undefined
                senderInfo?: string | undefined
                department?: string | undefined
                smtp: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
                imap: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
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
                _id?: string | undefined
                name: string
                email: string
                active: boolean
                description?: string | undefined
                senderInfo?: string | undefined
                department?: string | undefined
                smtp: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
                imap: {
                  password?: string | undefined
                  port?: number | undefined
                  secure?: boolean | undefined
                  server?: string | undefined
                  username?: string | undefined
                }
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
    '/api/v1/email-inbox/:_id': {
      $get:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              active?: boolean | undefined
              name?: string | undefined
              email?: string | undefined
              description?: string | undefined
              senderInfo?: string | undefined
              department?: string | undefined
              smtp?:
                | {
                    server?: string | undefined
                    port?: number | undefined
                    username?: string | undefined
                    password?: string | undefined
                    secure?: boolean | undefined
                  }
                | undefined
              imap?:
                | {
                    server?: string | undefined
                    port?: number | undefined
                    username?: string | undefined
                    password?: string | undefined
                    secure?: boolean | undefined
                  }
                | undefined
              _createdAt?: string | undefined
              _updatedAt?: string | undefined
              _createdBy?: { _id?: string | undefined; username?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
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
        | {
            input: { param: { _id: string } } & {
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
      $delete:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { _id?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
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
        | {
            input: { param: { _id: string } } & {
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
    '/api/v1/email-inbox.search': {
      $get:
        | {
            input: { query: { email: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              emailInbox?:
                | {
                    _id?: string | undefined
                    active?: boolean | undefined
                    name?: string | undefined
                    email?: string | undefined
                    description?: string | undefined
                    senderInfo?: string | undefined
                    department?: string | undefined
                    smtp?:
                      | {
                          server?: string | undefined
                          port?: number | undefined
                          username?: string | undefined
                          password?: string | undefined
                          secure?: boolean | undefined
                        }
                      | undefined
                    imap?:
                      | {
                          server?: string | undefined
                          port?: number | undefined
                          username?: string | undefined
                          password?: string | undefined
                          secure?: boolean | undefined
                        }
                      | undefined
                    _createdAt?: string | undefined
                    _updatedAt?: string | undefined
                    _createdBy?:
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
            input: { query: { email: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { email: string } } & {
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
    '/api/v1/email-inbox.send-test/:_id': {
      $post:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { _id?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { _id: string } } & {
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
    '/api/v1/shield.svg': {
      $get: {
        input: {
          query: {
            type?: string | undefined
            icon?: string | undefined
            channel: string
            name: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v1/spotlight': {
      $get:
        | {
            input: {
              query: {
                query: string
                usernames?: string | undefined
                type?: string | undefined
                rid?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    avatarETag?: string | undefined
                  }[]
                | undefined
              rooms?: { [x: string]: unknown }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                usernames?: string | undefined
                type?: string | undefined
                rid?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/smtp.check': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { isSMTPConfigured?: boolean | undefined; success?: boolean | undefined }
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
    '/api/v1/fingerprint': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { setDeploymentAs: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { setDeploymentAs: string }
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
              json: { setDeploymentAs: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { setDeploymentAs: string }
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
    '/api/v1/licenses.info': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              license?:
                | {
                    license?:
                      | {
                          version?: string | undefined
                          information?:
                            | {
                                id?: string | undefined
                                autoRenew?: boolean | undefined
                                createdAt?: string | undefined
                                visualExpiration?: string | undefined
                                notifyAdminsAt?: string | undefined
                                notifyUsersAt?: string | undefined
                                trial?: boolean | undefined
                                cancellable?: boolean | undefined
                                offline?: boolean | undefined
                                grantedBy?: { [x: string]: unknown } | undefined
                                grantedTo?: { [x: string]: unknown } | undefined
                                tags?:
                                  | { name?: string | undefined; color?: string | undefined }[]
                                  | undefined
                              }
                            | undefined
                          validation?:
                            | {
                                serverUrls?:
                                  | { value?: string | undefined; type?: string | undefined }[]
                                  | undefined
                                cloudWorkspaceId?: string | undefined
                                serverUniqueId?: string | undefined
                                validPeriods?:
                                  | {
                                      validUntil?: string | undefined
                                      invalidBehavior?: string | undefined
                                    }[]
                                  | undefined
                                legalTextAgreement?:
                                  | { type?: string | undefined; acceptedVia?: string | undefined }
                                  | undefined
                                statisticsReport?:
                                  | {
                                      required?: boolean | undefined
                                      allowedStaleInDays?: number | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          grantedModules?: { module?: string | undefined }[] | undefined
                          limits?:
                            | {
                                guestUsers?:
                                  | { max?: number | undefined; behavior?: string | undefined }[]
                                  | undefined
                                roomsPerGuest?:
                                  | { max?: number | undefined; behavior?: string | undefined }[]
                                  | undefined
                                monthlyActiveContacts?:
                                  | { max?: number | undefined; behavior?: string | undefined }[]
                                  | undefined
                              }
                            | undefined
                          cloudMeta?: { [x: string]: unknown } | undefined
                        }
                      | undefined
                    activeModules?: string[] | undefined
                    preventedActions?:
                      | {
                          activeUsers?: boolean | undefined
                          guestUsers?: boolean | undefined
                          roomsPerGuest?: boolean | undefined
                          privateApps?: boolean | undefined
                          marketplaceApps?: boolean | undefined
                          monthlyActiveContacts?: boolean | undefined
                        }
                      | undefined
                    limits?:
                      | {
                          activeUsers?: { max?: number | undefined } | undefined
                          guestUsers?: { max?: number | undefined } | undefined
                          privateApps?: { max?: number | undefined } | undefined
                          marketplaceApps?: { max?: number | undefined } | undefined
                          monthlyActiveContacts?: { max?: number | undefined } | undefined
                        }
                      | undefined
                    tags?: { name?: string | undefined; color?: string | undefined }[] | undefined
                    trial?: boolean | undefined
                  }
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
    '/api/v1/licenses.add': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license?: string | undefined }
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
              json: { license?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license?: string | undefined }
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
    '/api/v1/licenses.validate': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              reasons?:
                | {
                    behavior?: string | undefined
                    reason?: string | undefined
                    modules?: string[] | undefined
                    limit?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { license: string }
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
    '/api/v1/licenses.maxActiveUsers': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              maxActiveUsers?: number | undefined
              activeUsers?: number | undefined
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
    '/api/v1/commands.get': {
      $get:
        | {
            input: { query: { command: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              command?:
                | {
                    command?: string | undefined
                    params?: string | undefined
                    description?: string | undefined
                    clientOnly?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { command: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { command: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/commands.list': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              commands?:
                | { command?: string | undefined; clientOnly?: boolean | undefined }[]
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
    '/api/v1/commands.preview': {
      $get:
        | {
            input: { query: { command: string; roomId: string; params?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { command: string; roomId: string; params?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { command: string; roomId: string; params?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { command: string; roomId: string; params?: string | undefined } } & {
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
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                tmid: string
                params?: string | undefined
                triggerId?: string | undefined
                previewItem: { id: string; type: string; value: string }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                tmid: string
                params?: string | undefined
                triggerId?: string | undefined
                previewItem: { id: string; type: string; value: string }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                tmid: string
                params?: string | undefined
                triggerId?: string | undefined
                previewItem: { id: string; type: string; value: string }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                tmid: string
                params?: string | undefined
                triggerId?: string | undefined
                previewItem: { id: string; type: string; value: string }
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
    '/api/v1/commands.run': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                params?: string | undefined
                tmid?: string | undefined
                triggerId?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                params?: string | undefined
                tmid?: string | undefined
                triggerId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                params?: string | undefined
                tmid?: string | undefined
                triggerId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                command: string
                roomId: string
                params?: string | undefined
                tmid?: string | undefined
                triggerId?: string | undefined
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
    '/api/v1/mailer': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                from: string
                subject: string
                body?: string | undefined
                dryrun?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                from: string
                subject: string
                body?: string | undefined
                dryrun?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { function?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                from: string
                subject: string
                body?: string | undefined
                dryrun?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/mailer.unsubscribe': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; createdAt: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; createdAt: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/calendar-events.list': {
      $get:
        | {
            input: { query: { date: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { data?: { [x: string]: unknown }[] | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { date: string } } & {
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
            input: { query: { date: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/calendar-events.info': {
      $get:
        | {
            input: { query: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              event?:
                | {
                    _id?: string | undefined
                    uid?: string | undefined
                    startTime?: string | undefined
                    endTime?: string | undefined
                    subject?: string | undefined
                    description?: string | undefined
                    meetingUrl?: (string | null) | undefined
                    reminderMinutesBeforeStart?: number | undefined
                    reminderTime?: string | undefined
                    notificationSent?: boolean | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & {
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
            input: { query: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/calendar-events.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
                externalId?: string | undefined
              }
            }
            output: { id?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
                externalId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/calendar-events.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                eventId: string
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                eventId: string
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
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
                eventId: string
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/calendar-events.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { eventId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { eventId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { eventId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/calendar-events.import': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                externalId: string
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
              }
            }
            output: { id?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                externalId: string
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
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
                externalId: string
                startTime: string
                endTime?: string | undefined
                subject: string
                description: string
                reminderMinutesBeforeStart?: number | undefined
                busy?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/apps/public/:app-id/incoming': {
      $post:
        | {
            input: { param: { 'app-id': string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                action: string
                sessionId: string
                actionData?: { targetDepartment?: string | undefined } | undefined
              }
            }
            output: { msg?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'app-id': string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                action: string
                sessionId: string
                actionData?: { targetDepartment?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference/jitsi.update-timeout': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string }
            }
            output: { jitsiTimeout?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/apps/public/:appId/templateMessage': {
      $post:
        | {
            input: { param: { appId: string } } & {
              json: {
                phoneNumbers: string[]
                connectedWhatsAppNo: string
                targetAgent?: string | undefined
                targetDepartment?: string | undefined
                template: {
                  namespace?: string | undefined
                  name?: string | undefined
                  language?: { code?: string | undefined; policy?: string | undefined } | undefined
                  components?:
                    | {
                        type?: string | undefined
                        parameters?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              json: {
                phoneNumbers: string[]
                connectedWhatsAppNo: string
                targetAgent?: string | undefined
                targetDepartment?: string | undefined
                template: {
                  namespace?: string | undefined
                  name?: string | undefined
                  language?: { code?: string | undefined; policy?: string | undefined } | undefined
                  components?:
                    | {
                        type?: string | undefined
                        parameters?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appId: string } } & {
              json: {
                phoneNumbers: string[]
                connectedWhatsAppNo: string
                targetAgent?: string | undefined
                targetDepartment?: string | undefined
                template: {
                  namespace?: string | undefined
                  name?: string | undefined
                  language?: { code?: string | undefined; policy?: string | undefined } | undefined
                  components?:
                    | {
                        type?: string | undefined
                        parameters?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appId: string } } & {
              json: {
                phoneNumbers: string[]
                connectedWhatsAppNo: string
                targetAgent?: string | undefined
                targetDepartment?: string | undefined
                template: {
                  namespace?: string | undefined
                  name?: string | undefined
                  language?: { code?: string | undefined; policy?: string | undefined } | undefined
                  components?:
                    | {
                        type?: string | undefined
                        parameters?:
                          | { type?: string | undefined; text?: string | undefined }[]
                          | undefined
                      }[]
                    | undefined
                }
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
  },
  '/'
>
export default routes
