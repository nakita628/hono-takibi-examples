declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/permissions.listAll': {
      $get:
        | {
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              update?:
                | {
                    _id?: string | undefined
                    _updatedAt?: string | undefined
                    roles?: string[] | undefined
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
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/permissions.update': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissions: { _id?: string | undefined; roles?: string[] | undefined }[] }
            }
            output: {
              permissions?: { _id?: string | undefined; roles?: string[] | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissions: { _id?: string | undefined; roles?: string[] | undefined }[] }
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
              json: { permissions: { _id?: string | undefined; roles?: string[] | undefined }[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/permissions.addRole': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
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
    '/api/v1/permissions.removeRole': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { permissionId: string; role: string }
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
    '/api/v1/roles.create': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                name: string
                scope?: string | undefined
                description?: string | undefined
                mandatory2fa?: boolean | undefined
              }
            }
            output: {
              role?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    scope?: string | undefined
                    description?: string | undefined
                    protected?: boolean | undefined
                    mandatory2fa?: boolean | undefined
                    _updatedAt?: string | undefined
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
                name: string
                scope?: string | undefined
                description?: string | undefined
                mandatory2fa?: boolean | undefined
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
              json: {
                name: string
                scope?: string | undefined
                description?: string | undefined
                mandatory2fa?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.update': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                roleId: string
                name: string
                scope?: string | undefined
                description?: string | undefined
                mandatory2fa?: boolean | undefined
              }
            }
            output: {
              role?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    scope?: string | undefined
                    description?: string | undefined
                    protected?: boolean | undefined
                    mandatory2fa?: boolean | undefined
                    _updatedAt?: string | undefined
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
                roleId: string
                name: string
                scope?: string | undefined
                description?: string | undefined
                mandatory2fa?: boolean | undefined
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
              json: {
                roleId: string
                name: string
                scope?: string | undefined
                description?: string | undefined
                mandatory2fa?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.addUserToRole': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roleId?: string | undefined; username: string; roomId?: string | undefined }
            }
            output: {
              role?:
                | {
                    _id?: string | undefined
                    scope?: string | undefined
                    description?: string | undefined
                    mandatory2fa?: boolean | undefined
                    name?: string | undefined
                    protected?: boolean | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roleId?: string | undefined; username: string; roomId?: string | undefined }
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
              json: { roleId?: string | undefined; username: string; roomId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.getUsersInRole': {
      $get:
        | {
            input: {
              query: {
                role: string
                roomId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    type?: string | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    name?: string | undefined
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
                role: string
                roomId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
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
                role: string
                roomId?: string | undefined
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
    '/api/v1/roles.list': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              roles?:
                | {
                    _id?: string | undefined
                    description?: string | undefined
                    mandatory2fa?: boolean | undefined
                    protected?: boolean | undefined
                    scope?: string | undefined
                    name?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.sync': {
      $get:
        | {
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              roles?:
                | {
                    update?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          scope?: 'Users' | 'Subscriptions' | undefined
                          description?: string | undefined
                          mandatory2fa?: boolean | undefined
                          protected?: boolean | undefined
                          _updatedAt?: string | undefined
                        }[]
                      | undefined
                    remove?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          scope?: 'Users' | 'Subscriptions' | undefined
                          description?: string | undefined
                          mandatory2fa?: boolean | undefined
                          protected?: boolean | undefined
                          __collection__?: string | undefined
                          _deletedAt?: string | undefined
                          _updatedAt?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              success?: true | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { updatedSince?: string | undefined } } & {
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
            input: { query: { updatedSince?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.delete': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roleId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roleId: string }
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
              json: { roleId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.removeUserFromRole': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roleId: string; username: string; scope?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roleId: string; username: string; scope?: string | undefined }
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
              json: { roleId: string; username: string; scope?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/roles.getUsersInPublicRoles': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    roles?: string[] | undefined
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
    '/api/v1/users.create': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                name: string
                email: string
                password: string
                username: string
                active?: boolean | undefined
                nickname?: string | undefined
                bio?: string | undefined
                joinDefaultChannels?: boolean | undefined
                statusText?: string | undefined
                roles?: string[] | undefined
                requirePasswordChange?: boolean | undefined
                setRandomPassword?: boolean | undefined
                sendWelcomeEmail?: boolean | undefined
                sipExtension?: string | undefined
                phones?: { number: string; label?: string | undefined }[] | undefined
                verified?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
              }
            }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    type?: string | undefined
                    roles?: string[] | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    _updatedAt?: string | undefined
                    bio?: string | undefined
                    name?: string | undefined
                    nickname?: string | undefined
                    requirePasswordChange?: boolean | undefined
                    settings?: { [x: string]: unknown } | undefined
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
                name: string
                email: string
                password: string
                username: string
                active?: boolean | undefined
                nickname?: string | undefined
                bio?: string | undefined
                joinDefaultChannels?: boolean | undefined
                statusText?: string | undefined
                roles?: string[] | undefined
                requirePasswordChange?: boolean | undefined
                setRandomPassword?: boolean | undefined
                sendWelcomeEmail?: boolean | undefined
                sipExtension?: string | undefined
                phones?: { number: string; label?: string | undefined }[] | undefined
                verified?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                name: string
                email: string
                password: string
                username: string
                active?: boolean | undefined
                nickname?: string | undefined
                bio?: string | undefined
                joinDefaultChannels?: boolean | undefined
                statusText?: string | undefined
                roles?: string[] | undefined
                requirePasswordChange?: boolean | undefined
                setRandomPassword?: boolean | undefined
                sendWelcomeEmail?: boolean | undefined
                sipExtension?: string | undefined
                phones?: { number: string; label?: string | undefined }[] | undefined
                verified?: boolean | undefined
                customFields?: { [x: string]: unknown } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.register': {
      $post:
        | {
            input: {
              json: {
                username: string
                email: string
                pass: string
                name: string
                secretURL?: string | undefined
              }
            }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    name?: string | undefined
                    utcOffset?: number | undefined
                    username?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                username: string
                email: string
                pass: string
                name: string
                secretURL?: string | undefined
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
    '/api/v1/users.update': {
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code': string
                'x-2fa-method': string
              }
            } & {
              json: {
                userId: string
                data: {
                  name?: string | undefined
                  email?: string | undefined
                  password?: string | undefined
                  username?: string | undefined
                  active?: boolean | undefined
                  roles?: string[] | undefined
                  requirePasswordChange?: boolean | undefined
                  sendWelcomeEmail?: boolean | undefined
                  sipExtension?: string | undefined
                  phones?: { number: string; label?: string | undefined }[] | undefined
                  verified?: boolean | undefined
                  customFields?: { [x: string]: unknown } | undefined
                }
                confirmRelinquish?: boolean | undefined
              }
            }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    type?: string | undefined
                    roles?: string[] | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    inactiveReason?: string | undefined
                    name?: string | undefined
                    _updatedAt?: string | undefined
                    __rooms?: string[] | undefined
                    requirePasswordChange?: boolean | undefined
                    settings?: { [x: string]: unknown } | undefined
                    statusText?: string | undefined
                    livechatStatusSystemModified?: boolean | undefined
                    statusLivechat?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code': string
                'x-2fa-method': string
              }
            } & {
              json: {
                userId: string
                data: {
                  name?: string | undefined
                  email?: string | undefined
                  password?: string | undefined
                  username?: string | undefined
                  active?: boolean | undefined
                  roles?: string[] | undefined
                  requirePasswordChange?: boolean | undefined
                  sendWelcomeEmail?: boolean | undefined
                  sipExtension?: string | undefined
                  phones?: { number: string; label?: string | undefined }[] | undefined
                  verified?: boolean | undefined
                  customFields?: { [x: string]: unknown } | undefined
                }
                confirmRelinquish?: boolean | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    action?: string | undefined
                    shouldBeRemoved?: string[] | undefined
                    shouldChangeOwner?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code': string
                'x-2fa-method': string
              }
            } & {
              json: {
                userId: string
                data: {
                  name?: string | undefined
                  email?: string | undefined
                  password?: string | undefined
                  username?: string | undefined
                  active?: boolean | undefined
                  roles?: string[] | undefined
                  requirePasswordChange?: boolean | undefined
                  sendWelcomeEmail?: boolean | undefined
                  sipExtension?: string | undefined
                  phones?: { number: string; label?: string | undefined }[] | undefined
                  verified?: boolean | undefined
                  customFields?: { [x: string]: unknown } | undefined
                }
                confirmRelinquish?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.updateOwnBasicInfo': {
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & {
              json: {
                data: {
                  email?: string | undefined
                  newPassword?: string | undefined
                  currentPassword?: string | undefined
                  nickname?: string | undefined
                  bio?: string | undefined
                  username?: string | undefined
                  name?: string | undefined
                  statusType?: string | undefined
                  statusText?: string | undefined
                  phones?: { number: string; label?: string | undefined }[] | undefined
                }
                customFields?: { [x: string]: unknown } | undefined
              }
            }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    services?:
                      | {
                          password?: { bcrypt?: string | undefined } | undefined
                          email2fa?:
                            | { enabled?: boolean | undefined; changedAt?: string | undefined }
                            | undefined
                          resume?:
                            | {
                                loginTokens?:
                                  | {
                                      when?: string | undefined
                                      hashedToken?: string | undefined
                                      twoFactorAuthorizedHash?: string | undefined
                                      twoFactorAuthorizedUntil?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          email?:
                            | {
                                verificationTokens?:
                                  | {
                                      token?: string | undefined
                                      address?: string | undefined
                                      when?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          totp?: { enabled?: boolean | undefined } | undefined
                          passwordHistory?: string[] | undefined
                        }
                      | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    type?: string | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    _updatedAt?: string | undefined
                    __rooms?: string[] | undefined
                    roles?: string[] | undefined
                    name?: string | undefined
                    settings?:
                      | {
                          preferences?: { themeAppearence?: string | undefined } | undefined
                          profile?: { [x: string]: unknown } | undefined
                        }
                      | undefined
                    lastLogin?: string | undefined
                    statusConnection?: string | undefined
                    utcOffset?: number | undefined
                    banners?:
                      | {
                          'versionUpdate-6_0_0'?:
                            | {
                                id?: string | undefined
                                priority?: number | undefined
                                title?: string | undefined
                                text?: string | undefined
                                textArguments?: string[] | undefined
                                link?: string | undefined
                                modifiers?: { [x: string]: unknown }[] | undefined
                                read?: boolean | undefined
                              }
                            | undefined
                          'versionUpdate-6_2_8'?:
                            | {
                                id?: string | undefined
                                priority?: number | undefined
                                title?: string | undefined
                                text?: string | undefined
                                textArguments?: string[] | undefined
                                link?: string | undefined
                                modifiers?: { [x: string]: unknown }[] | undefined
                              }
                            | undefined
                        }
                      | undefined
                    statusDefault?: string | undefined
                    statusText?: string | undefined
                    operator?: boolean | undefined
                    livechatStatusSystemModified?: boolean | undefined
                    statusLivechat?: string | undefined
                    livechatCount?: number | undefined
                    livechat?: { maxNumberSimultaneousChat?: string | undefined } | undefined
                    bio?: string | undefined
                    nickname?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & {
              json: {
                data: {
                  email?: string | undefined
                  newPassword?: string | undefined
                  currentPassword?: string | undefined
                  nickname?: string | undefined
                  bio?: string | undefined
                  username?: string | undefined
                  name?: string | undefined
                  statusType?: string | undefined
                  statusText?: string | undefined
                  phones?: { number: string; label?: string | undefined }[] | undefined
                }
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
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & {
              json: {
                data: {
                  email?: string | undefined
                  newPassword?: string | undefined
                  currentPassword?: string | undefined
                  nickname?: string | undefined
                  bio?: string | undefined
                  username?: string | undefined
                  name?: string | undefined
                  statusType?: string | undefined
                  statusText?: string | undefined
                  phones?: { number: string; label?: string | undefined }[] | undefined
                }
                customFields?: { [x: string]: unknown } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.info': {
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                username?: string | undefined
                importId?: string | undefined
                includeUserRooms?: string | undefined
                email?: string | undefined
                sipExtension?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    type?: string | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    roles?: string[] | undefined
                    name?: string | undefined
                    requirePasswordChange?: boolean | undefined
                    lastLogin?: string | undefined
                    statusConnection?: string | undefined
                    utcOffset?: number | undefined
                    sipExtension?: string | undefined
                    phones?: { number: string; label?: string | undefined }[] | undefined
                    canViewAllInfo?: boolean | undefined
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
                userId?: string | undefined
                username?: string | undefined
                importId?: string | undefined
                includeUserRooms?: string | undefined
                email?: string | undefined
                sipExtension?: string | undefined
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
                userId?: string | undefined
                username?: string | undefined
                importId?: string | undefined
                includeUserRooms?: string | undefined
                email?: string | undefined
                sipExtension?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.list': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                email?: (string | null) | undefined
                username?: (string | null) | undefined
                customFields?: { [x: string]: string } | undefined
                includeCustomFields?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    type?: string | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    roles?: string[] | undefined
                    name?: string | undefined
                    lastLogin?: string | undefined
                    nameInsensitive?: string | undefined
                    avatarETag?: string | undefined
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
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                email?: (string | null) | undefined
                username?: (string | null) | undefined
                customFields?: { [x: string]: string } | undefined
                includeCustomFields?: boolean | undefined
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
                sort?: string | undefined
                email?: (string | null) | undefined
                username?: (string | null) | undefined
                customFields?: { [x: string]: string } | undefined
                includeCustomFields?: boolean | undefined
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
                sort?: string | undefined
                email?: (string | null) | undefined
                username?: (string | null) | undefined
                customFields?: { [x: string]: string } | undefined
                includeCustomFields?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/users.setAvatar': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { avatarUrl: string; userId?: string | undefined }
            } & { form: { image: File; service?: string | undefined; userId?: string | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { avatarUrl: string; userId?: string | undefined }
            } & { form: { image: File; service?: string | undefined; userId?: string | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { avatarUrl: string; userId?: string | undefined }
            } & { form: { image: File; service?: string | undefined; userId?: string | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.getAvatar': {
      $get:
        | {
            input: { query: { userId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId: string } } & {
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
    }
  } & {
    '/api/v1/users.resetAvatar': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId: string }
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
              json: { userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId: string }
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
    '/api/v1/users.setStatus': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                message?: string | undefined
                status?: string | undefined
                expiresAt?: string | undefined
                userId?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                message?: string | undefined
                status?: string | undefined
                expiresAt?: string | undefined
                userId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                message?: string | undefined
                status?: string | undefined
                expiresAt?: string | undefined
                userId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.getStatus': {
      $get:
        | {
            input: { query: { userId?: string | undefined } }
            output: {
              _id?: string | undefined
              connectionStatus?: string | undefined
              status?: string | undefined
              statusSource?: string | undefined
              statusExpiresAt?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.setActiveStatus': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                activeStatus: boolean
                userId: string
                confirmRelinquish?: boolean | undefined
              }
            }
            output: {
              user?: { _id?: string | undefined; active?: boolean | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                activeStatus: boolean
                userId: string
                confirmRelinquish?: boolean | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    shouldBeRemoved?: string[] | undefined
                    shouldChangeOwner?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                activeStatus: boolean
                userId: string
                confirmRelinquish?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.deactivateIdle': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { daysIdle: number; role?: string | undefined }
            }
            output: { count?: number | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { daysIdle: number; role?: string | undefined }
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
              json: { daysIdle: number; role?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { daysIdle: number; role?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/users.getPresence': {
      $get:
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { presence?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.presence': {
      $get:
        | {
            input: { query: { from?: string | undefined; ids?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    utcOffset?: number | undefined
                    statusText?: string | undefined
                    statusSource?: string | undefined
                    statusExpiresAt?: string | undefined
                    avatarETag?: string | undefined
                  }[]
                | undefined
              full?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: string | undefined; ids?: string | undefined } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; confirmRelinquish?: boolean | undefined }
            }
            output: {
              success?: boolean | undefined
              deletedRooms?: { [x: string]: unknown }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; confirmRelinquish?: boolean | undefined }
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
              json: { userId: string; confirmRelinquish?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; confirmRelinquish?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/users.deleteOwnAccount': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { password: string; confirmRelinquish?: boolean | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { password: string; confirmRelinquish?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { password: string; confirmRelinquish?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.createToken': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; secret: string }
            }
            output: {
              data?: { userId?: string | undefined; authToken?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; secret: string }
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
              json: { userId: string; secret: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; secret: string }
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
    '/api/v1/users.getPreferences': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              preferences?:
                | {
                    newRoomNotification?: string | undefined
                    newMessageNotification?: string | undefined
                    muteFocusedConversations?: boolean | undefined
                    useEmojis?: boolean | undefined
                    convertAsciiEmoji?: boolean | undefined
                    saveMobileBandwidth?: boolean | undefined
                    collapseMediaByDefault?: boolean | undefined
                    autoImageLoad?: boolean | undefined
                    emailNotificationMode?: string | undefined
                    roomsListExhibitionMode?: string | undefined
                    unreadAlert?: boolean | undefined
                    notificationsSoundVolume?: number | undefined
                    desktopNotifications?: string | undefined
                    mobileNotifications?: string | undefined
                    enableAutoAway?: boolean | undefined
                    highlights?: { [x: string]: unknown }[] | undefined
                    desktopNotificationDuration?: number | undefined
                    viewMode?: number | undefined
                    hideUsernames?: boolean | undefined
                    hideRoles?: boolean | undefined
                    hideAvatars?: boolean | undefined
                    hideFlexTab?: boolean | undefined
                    sendOnEnter?: string | undefined
                    roomCounterSidebar?: boolean | undefined
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
    '/api/v1/users.setPreferences': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                userId?: string | undefined
                data: {
                  language?: string | undefined
                  newRoomNotification?: string | undefined
                  newMessageNotification?: string | undefined
                  muteFocusedConversations?: boolean | undefined
                  clockMode?: number | undefined
                  useEmojis?: boolean | undefined
                  convertAsciiEmoji?: boolean | undefined
                  saveMobileBandwidth?: boolean | undefined
                  collapseMediaByDefault?: boolean | undefined
                  autoImageLoad?: boolean | undefined
                  emailNotificationMode?: string | undefined
                  unreadAlert?: boolean | undefined
                  notificationsSoundVolume?: number | undefined
                  desktopNotifications?: string | undefined
                  pushNotifications?: string | undefined
                  enableAutoAway?: boolean | undefined
                  highlights?: string[] | undefined
                  messageViewMode?: number | undefined
                  hideUsernames?: boolean | undefined
                  hideRoles?: boolean | undefined
                  displayAvatars?: boolean | undefined
                  hideFlexTab?: boolean | undefined
                  sendOnEnter?: string | undefined
                  idleTimeLimit?: number | undefined
                  sidebarShowFavorites?: boolean | undefined
                  sidebarShowUnread?: boolean | undefined
                  statusVisibilityDenied?: string[] | undefined
                  sidebarSortby?: string | undefined
                  sidebarViewMode?: string | undefined
                  sidebarDisplayAvatar?: boolean | undefined
                  sidebarGroupByType?: boolean | undefined
                  sidebarCategories?:
                    | {
                        _id: string
                        name: string
                        default?: boolean | undefined
                        showUnreads?: boolean | undefined
                        keepUnreadsOnTop?: boolean | undefined
                      }[]
                    | undefined
                  dontAskAgainList?:
                    | { action?: string | undefined; label?: string | undefined }[]
                    | undefined
                  notifyCalendarEvents?: boolean | undefined
                  themeAppearence?: string | undefined
                  masterVolume?: number | undefined
                  alsoSendThreadToChannel?: string | undefined
                  desktopNotificationRequireInteraction?: boolean | undefined
                  showThreadsInMainChannel?: boolean | undefined
                  fontSize?: string | undefined
                  receiveLoginDetectionEmail?: boolean | undefined
                  omnichannelTranscriptPDF?: boolean | undefined
                  omnichannelTranscriptEmail?: boolean | undefined
                  omnichannelHideConversationAfterClosing?: boolean | undefined
                  enableMobileRinging?: boolean | undefined
                  utcOffset?: number | undefined
                }
              }
            }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    settings?:
                      | {
                          preferences?:
                            | {
                                enableAutoAway?: boolean | undefined
                                idleTimeLimit?: number | undefined
                                desktopNotificationRequireInteraction?: boolean | undefined
                                desktopNotifications?: string | undefined
                                pushNotifications?: string | undefined
                                unreadAlert?: boolean | undefined
                                useEmojis?: boolean | undefined
                                convertAsciiEmoji?: boolean | undefined
                                autoImageLoad?: boolean | undefined
                                saveMobileBandwidth?: boolean | undefined
                                collapseMediaByDefault?: boolean | undefined
                                hideUsernames?: boolean | undefined
                                hideRoles?: boolean | undefined
                                hideFlexTab?: boolean | undefined
                                displayAvatars?: boolean | undefined
                                sidebarGroupByType?: boolean | undefined
                                sidebarCategories?:
                                  | {
                                      _id?: string | undefined
                                      name?: string | undefined
                                      default?: boolean | undefined
                                      showUnreads?: boolean | undefined
                                      keepUnreadsOnTop?: boolean | undefined
                                    }[]
                                  | undefined
                                sidebarViewMode?: string | undefined
                                sidebarDisplayAvatar?: boolean | undefined
                                sidebarShowUnread?: boolean | undefined
                                sidebarSortby?: string | undefined
                                statusVisibilityDenied?: string[] | undefined
                                showMessageInMainThread?: boolean | undefined
                                sidebarShowFavorites?: boolean | undefined
                                sendOnEnter?: string | undefined
                                messageViewMode?: number | undefined
                                emailNotificationMode?: string | undefined
                                newRoomNotification?: string | undefined
                                newMessageNotification?: string | undefined
                                muteFocusedConversations?: boolean | undefined
                                notificationsSoundVolume?: number | undefined
                                enableMessageParserEarlyAdoption?: boolean | undefined
                                mobileNotifications?: string | undefined
                                desktopNotificationDuration?: number | undefined
                                dontAskAgainList?: { [x: string]: unknown }[] | undefined
                                highlights?: { [x: string]: unknown }[] | undefined
                                language?: string | undefined
                              }
                            | undefined
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
                userId?: string | undefined
                data: {
                  language?: string | undefined
                  newRoomNotification?: string | undefined
                  newMessageNotification?: string | undefined
                  muteFocusedConversations?: boolean | undefined
                  clockMode?: number | undefined
                  useEmojis?: boolean | undefined
                  convertAsciiEmoji?: boolean | undefined
                  saveMobileBandwidth?: boolean | undefined
                  collapseMediaByDefault?: boolean | undefined
                  autoImageLoad?: boolean | undefined
                  emailNotificationMode?: string | undefined
                  unreadAlert?: boolean | undefined
                  notificationsSoundVolume?: number | undefined
                  desktopNotifications?: string | undefined
                  pushNotifications?: string | undefined
                  enableAutoAway?: boolean | undefined
                  highlights?: string[] | undefined
                  messageViewMode?: number | undefined
                  hideUsernames?: boolean | undefined
                  hideRoles?: boolean | undefined
                  displayAvatars?: boolean | undefined
                  hideFlexTab?: boolean | undefined
                  sendOnEnter?: string | undefined
                  idleTimeLimit?: number | undefined
                  sidebarShowFavorites?: boolean | undefined
                  sidebarShowUnread?: boolean | undefined
                  statusVisibilityDenied?: string[] | undefined
                  sidebarSortby?: string | undefined
                  sidebarViewMode?: string | undefined
                  sidebarDisplayAvatar?: boolean | undefined
                  sidebarGroupByType?: boolean | undefined
                  sidebarCategories?:
                    | {
                        _id: string
                        name: string
                        default?: boolean | undefined
                        showUnreads?: boolean | undefined
                        keepUnreadsOnTop?: boolean | undefined
                      }[]
                    | undefined
                  dontAskAgainList?:
                    | { action?: string | undefined; label?: string | undefined }[]
                    | undefined
                  notifyCalendarEvents?: boolean | undefined
                  themeAppearence?: string | undefined
                  masterVolume?: number | undefined
                  alsoSendThreadToChannel?: string | undefined
                  desktopNotificationRequireInteraction?: boolean | undefined
                  showThreadsInMainChannel?: boolean | undefined
                  fontSize?: string | undefined
                  receiveLoginDetectionEmail?: boolean | undefined
                  omnichannelTranscriptPDF?: boolean | undefined
                  omnichannelTranscriptEmail?: boolean | undefined
                  omnichannelHideConversationAfterClosing?: boolean | undefined
                  enableMobileRinging?: boolean | undefined
                  utcOffset?: number | undefined
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                userId?: string | undefined
                data: {
                  language?: string | undefined
                  newRoomNotification?: string | undefined
                  newMessageNotification?: string | undefined
                  muteFocusedConversations?: boolean | undefined
                  clockMode?: number | undefined
                  useEmojis?: boolean | undefined
                  convertAsciiEmoji?: boolean | undefined
                  saveMobileBandwidth?: boolean | undefined
                  collapseMediaByDefault?: boolean | undefined
                  autoImageLoad?: boolean | undefined
                  emailNotificationMode?: string | undefined
                  unreadAlert?: boolean | undefined
                  notificationsSoundVolume?: number | undefined
                  desktopNotifications?: string | undefined
                  pushNotifications?: string | undefined
                  enableAutoAway?: boolean | undefined
                  highlights?: string[] | undefined
                  messageViewMode?: number | undefined
                  hideUsernames?: boolean | undefined
                  hideRoles?: boolean | undefined
                  displayAvatars?: boolean | undefined
                  hideFlexTab?: boolean | undefined
                  sendOnEnter?: string | undefined
                  idleTimeLimit?: number | undefined
                  sidebarShowFavorites?: boolean | undefined
                  sidebarShowUnread?: boolean | undefined
                  statusVisibilityDenied?: string[] | undefined
                  sidebarSortby?: string | undefined
                  sidebarViewMode?: string | undefined
                  sidebarDisplayAvatar?: boolean | undefined
                  sidebarGroupByType?: boolean | undefined
                  sidebarCategories?:
                    | {
                        _id: string
                        name: string
                        default?: boolean | undefined
                        showUnreads?: boolean | undefined
                        keepUnreadsOnTop?: boolean | undefined
                      }[]
                    | undefined
                  dontAskAgainList?:
                    | { action?: string | undefined; label?: string | undefined }[]
                    | undefined
                  notifyCalendarEvents?: boolean | undefined
                  themeAppearence?: string | undefined
                  masterVolume?: number | undefined
                  alsoSendThreadToChannel?: string | undefined
                  desktopNotificationRequireInteraction?: boolean | undefined
                  showThreadsInMainChannel?: boolean | undefined
                  fontSize?: string | undefined
                  receiveLoginDetectionEmail?: boolean | undefined
                  omnichannelTranscriptPDF?: boolean | undefined
                  omnichannelTranscriptEmail?: boolean | undefined
                  omnichannelHideConversationAfterClosing?: boolean | undefined
                  enableMobileRinging?: boolean | undefined
                  utcOffset?: number | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.forgotPassword': {
      $post:
        | {
            input: { json: { email: string } }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/users.getUsernameSuggestion': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { result?: string | undefined; success?: boolean | undefined }
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
    '/api/v1/users.getAvatarSuggestion': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              suggestions?:
                | {
                    google?:
                      | {
                          service?: string | undefined
                          url?: string | undefined
                          blob?: string | undefined
                          contentType?: string | undefined
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
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.checkUsernameAvailability': {
      $get:
        | {
            input: { query: { username: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { result?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { username: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { method?: string | undefined; field?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { username: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.generatePersonalAccessToken': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string; bypassTwoFactor?: boolean | undefined } }
            output: { token?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string; bypassTwoFactor?: boolean | undefined } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    codeGenerated?: boolean | undefined
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string; bypassTwoFactor?: boolean | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string; bypassTwoFactor?: boolean | undefined } }
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
    '/api/v1/users.regeneratePersonalAccessToken': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
            output: { token?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    codeGenerated?: boolean | undefined
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
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
    '/api/v1/users.getPersonalAccessTokens': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              tokens?:
                | {
                    name?: string | undefined
                    createdAt?: string | undefined
                    lastTokenPart?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
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
    '/api/v1/users.removePersonalAccessToken': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    codeGenerated?: boolean | undefined
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { tokenName: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.requestDataDownload': {
      $get:
        | {
            input: { query: { fullExport?: boolean | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              requested?: boolean | undefined
              exportOperation?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    userId?: string | undefined
                    roomList?:
                      | {
                          roomId?: string | undefined
                          roomName?: string | undefined
                          userId?: (string | null) | undefined
                          exportedCount?: number | undefined
                          status?: string | undefined
                          targetFile?: string | undefined
                          type?: string | undefined
                        }[]
                      | undefined
                    status?: string | undefined
                    exportPath?: string | undefined
                    assetsPath?: string | undefined
                    fileList?: { [x: string]: unknown }[] | undefined
                    generatedFile?: string | undefined
                    fullExport?: boolean | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fullExport?: boolean | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.logoutOtherClients': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              token?: string | undefined
              tokenExpires?: string | undefined
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
    '/api/v1/users.autocomplete': {
      $get:
        | {
            input: { query: { selector: { [x: string]: unknown } } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              items?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    name?: string | undefined
                    nickname?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { selector: { [x: string]: unknown } } } & {
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
            input: { query: { selector: { [x: string]: unknown } } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.removeOtherTokens': {
      $post:
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
            status: 401
          }
    }
  } & {
    '/api/v1/users.resetE2EKey': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    codeGenerated?: boolean | undefined
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
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
    '/api/v1/users.resetTOTP': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    codeGenerated?: boolean | undefined
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { userId?: string | undefined } }
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
    '/api/v1/users.listTeams': {
      $get:
        | {
            input: { query: { userId: string } } & {
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
                    isOwner?: boolean | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId: string } } & {
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
            input: { query: { userId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/moderation.reportUser': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; description: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId: string; description: string }
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
              json: { userId: string; description: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.logout': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId?: string | undefined }
            }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { userId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/ldap.syncNow': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | {
                    method?: string | undefined
                    codeGenerated?: boolean | undefined
                    availableMethods?: string[] | undefined
                    error?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/ldap.testConnection': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { error?: string | undefined; reason?: string | undefined } | undefined
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
    '/api/v1/ldap.testSearch': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
            }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: { error?: string | undefined; total?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/avatar/:subject': {
      $get: {
        input: { param: { subject: string } } & {
          query: {
            format?: string | undefined
            size?: number | undefined
            rc_uid?: string | undefined
            rc_token?: string | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v1/users.sendWelcomeEmail': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { email: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { email: string }
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
              json: { email: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/sendInvitationEmail': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { emails: string[] }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { emails: string[] }
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
              json: { emails: string[] }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.sendConfirmationEmail': {
      $post:
        | {
            input: { json: { email: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string } }
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
    '/api/v1/users.verifyEmail': {
      $post:
        | {
            input: { json: { token: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } }
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
    '/api/v1/users.listByStatus': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                status?: string | undefined
                hasLoggedIn?: boolean | undefined
                type?: string | undefined
                'roles[]'?: string | undefined
                searchTerm?: string | undefined
                'inactiveReason[]'?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    type?: string | undefined
                    roles?: string[] | undefined
                    status?: string | undefined
                    active?: boolean | undefined
                    name?: string | undefined
                    lastLogin?: string | undefined
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
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                count?: number | undefined
                status?: string | undefined
                hasLoggedIn?: boolean | undefined
                type?: string | undefined
                'roles[]'?: string | undefined
                searchTerm?: string | undefined
                'inactiveReason[]'?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/saml.parseMetadata': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { url: string }
            }
            output: {
              entryPoint?: string | undefined
              idpSLORedirectURL?: string | undefined
              cert?: string | undefined
              identifierFormat?: string | undefined
              warnings: string[]
              success: true
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { url: string }
            }
            output: { success: false; error: string; errorType?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { url: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { url: string }
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
