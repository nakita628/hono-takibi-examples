declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/login': {
      $post: {
        input: {
          json: {
            user?: string | undefined
            password?: string | undefined
            resume?: string | undefined
            code?: string | undefined
          }
        }
        output: {
          status?: string | undefined
          data?:
            | {
                authToken?: string | undefined
                userId?: string | undefined
                me?:
                  | {
                      _id?: string | undefined
                      name?: string | undefined
                      emails?:
                        | { address?: string | undefined; verified?: boolean | undefined }[]
                        | undefined
                      status?: string | undefined
                      statusConnection?: string | undefined
                      username?: string | undefined
                      utcOffset?: number | undefined
                      active?: boolean | undefined
                      roles?: string[] | undefined
                      settings?: { preferences?: { [x: string]: unknown } | undefined } | undefined
                      avatarUrl?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/logout': {
      $post: {
        input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
        output: { status?: string | undefined; data?: { message?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/loginCode.redeem': {
      $post:
        | {
            input: { json: { code: string } }
            output: { loginToken: string; userId: string; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { code: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { code: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/me': {
      $get: {
        input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
        output: {
          _id?: string | undefined
          name?: string | undefined
          emails?: { address?: string | undefined; verified?: boolean | undefined }[] | undefined
          status?: string | undefined
          statusConnection?: string | undefined
          username?: string | undefined
          utcOffset?: number | undefined
          active?: boolean | undefined
          roles?: string[] | undefined
          settings?:
            | {
                preferences?:
                  | {
                      enableAutoAway?: boolean | undefined
                      idleTimeoutLimit?: number | undefined
                      desktopNotificationDuration?: number | undefined
                      audioNotifications?: string | undefined
                      desktopNotifications?: string | undefined
                      mobileNotifications?: string | undefined
                      unreadAlert?: boolean | undefined
                      useEmojis?: boolean | undefined
                      convertAsciiEmoji?: boolean | undefined
                      autoImageLoad?: boolean | undefined
                      saveMobileBandwidth?: boolean | undefined
                      collapseMediaByDefault?: boolean | undefined
                      hideUsernames?: boolean | undefined
                      hideRoles?: boolean | undefined
                      hideFlexTab?: boolean | undefined
                      hideAvatars?: boolean | undefined
                      roomsListExhibitionMode?: string | undefined
                      sidebarViewMode?: string | undefined
                      sidebarHideAvatar?: boolean | undefined
                      sidebarShowUnread?: boolean | undefined
                      sidebarShowFavorites?: boolean | undefined
                      sendOnEnter?: string | undefined
                      messageViewMode?: number | undefined
                      emailNotificationMode?: string | undefined
                      roomCounterSidebar?: boolean | undefined
                      newRoomNotification?: string | undefined
                      newMessageNotification?: string | undefined
                      muteFocusedConversations?: boolean | undefined
                      notificationsSoundVolume?: number | undefined
                    }
                  | undefined
              }
            | undefined
          customFields?: { twitter?: string | undefined } | undefined
          avatarUrl?: string | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users.2fa.enableEmail': {
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
    '/api/v1/users.2fa.sendEmailCode': {
      $post:
        | {
            input: {
              header: { 'X-Auth-Token'?: string | undefined; 'X-User-Id'?: string | undefined }
            } & { json: { emailOrUsername: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'X-Auth-Token'?: string | undefined; 'X-User-Id'?: string | undefined }
            } & { json: { emailOrUsername: string } }
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
              header: { 'X-Auth-Token'?: string | undefined; 'X-User-Id'?: string | undefined }
            } & { json: { emailOrUsername: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.2fa.disableEmail': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
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
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/users.enableTotp': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
              }
            }
            output: { secret: string; url: string; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
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
                'X-2fa-Code': string
                'X-2fa-method': string
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.validateTotp': {
      $post:
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
              }
            } & { json: { code: string } }
            output: { codes: string[]; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
              }
            } & { json: { code: string } }
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
                'X-Auth-Token': string
                'X-User-Id': string
                'X-2fa-Code': string
                'X-2fa-method': string
              }
            } & { json: { code: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.disableTotp': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { code: string }
            }
            output: { disabled: boolean; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { code: string }
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
              json: { code: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.regenerateTotpCodes': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { code: string }
            }
            output: { codes: string[]; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { code: string }
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
              json: { code: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/users.totpCodesRemaining': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { remaining: number; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
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
    }
  } & {
    '/api/v1/twoFactorChallenges.sendEmailCode': {
      $post:
        | {
            input: { json: { challengeId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { challengeId: string } }
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
    '/api/v1/twoFactorChallenges.verifyChallenge': {
      $post:
        | {
            input: { json: { challengeId: string; code: string } }
            output: { loginToken: string; userId: string; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { challengeId: string; code: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
