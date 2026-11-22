declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/settings.public': {
      $get: {
        input: {
          query: {
            offset?: number | undefined
            count?: number | undefined
            _id?: string | undefined
            sort?: string | undefined
          }
        }
        output: {
          settings?:
            | { _id?: string | undefined; value?: boolean | string | undefined }[]
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
    '/api/v1/settings.oauth': {
      $get: {
        input: {}
        output: {
          services: {
            _id?: string | undefined
            name?: string | undefined
            clientId?: string | undefined
            buttonLabelText?: string | undefined
            buttonColor?: string | undefined
            buttonLabelColor?: string | undefined
            custom?: boolean | undefined
            service?: string | undefined
            serverURL?: string | undefined
            tokenPath?: string | undefined
            identityPath?: string | undefined
            authorizePath?: string | undefined
            scope?: string | undefined
            loginStyle?: string | undefined
            tokenSentVia?: string | undefined
            identityTokenSentVia?: string | undefined
            usernameField?: string | undefined
            mergeUsers?: boolean | undefined
            hideButtonOnMobile?: boolean | undefined
            clientConfig?: { provider?: string | undefined } | undefined
            entryPoint?: string | undefined
            idpSLORedirectURL?: string | undefined
            usernameNormalize?: 'None' | 'Lowercase' | undefined
            immutableProperty?: 'Username' | 'EMail' | undefined
            generateUsername?: boolean | undefined
            debug?: boolean | undefined
            nameOverwrite?: boolean | undefined
            mailOverwrite?: boolean | undefined
            issuer?: string | undefined
            logoutBehaviour?: 'SAML' | 'Local' | undefined
            defaultUserRole?: string | undefined
            signatureValidationType?:
              | 'All'
              | 'Response'
              | 'Assertion'
              | 'Either'
              | 'None'
              | undefined
            validateLogoutRequestSignature?: boolean | undefined
            validateLogoutResponseSignature?: boolean | undefined
            userDataFieldMap?: string | undefined
            allowedClockDrift?: number | undefined
            channelsAttributeUpdate?: boolean | undefined
            includePrivateChannelsInUpdate?: boolean | undefined
            customAuthnContext?: string | undefined
            authnContextComparison?: 'better' | 'exact' | 'maximum' | 'minimum' | undefined
            identifierFormat?: string | undefined
            nameIDPolicyTemplate?: string | undefined
            authnContextTemplate?: string | undefined
            authRequestTemplate?: string | undefined
            logoutResponseTemplate?: string | undefined
            logoutRequestTemplate?: string | undefined
            metadataCertificateTemplate?: string | undefined
            metadataTemplate?: string | undefined
          }[]
          success: true
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/settings': {
      $get:
        | {
            input: {
              query: {
                includeDefaults?: boolean | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              settings?:
                | { _id?: string | undefined; value?: boolean | string | undefined }[]
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
                includeDefaults?: boolean | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                includeDefaults?: boolean | undefined
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
            status: 403
          }
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { settings: { _id: string; value: { [x: string]: unknown } }[] } }
            output: { success?: boolean | undefined }
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
            } & { json: { settings: { _id: string; value: { [x: string]: unknown } }[] } }
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
            } & { json: { settings: { _id: string; value: { [x: string]: unknown } }[] } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { settings: { _id: string; value: { [x: string]: unknown } }[] } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?:
                | { method?: string | undefined; settingIds?: string[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/settings.addCustomOAuth': {
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { name: string } }
            output: { success?: boolean | undefined }
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
            } & { json: { name: string } }
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
            } & { json: { name: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { name: string } }
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
    '/api/v1/settings.removeCustomOAuth': {
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { name: string } }
            output: { success?: boolean | undefined }
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
            } & { json: { name: string } }
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
            } & { json: { name: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { name: string } }
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
    '/api/v1/settings.refreshOAuthServices': {
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
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
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
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
    '/api/v1/settings/:_id': {
      $post:
        | {
            input: { param: { _id: string } } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & {
              json: {
                value: string
                color?: string | undefined
                editor?: string | undefined
                execute?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & {
              json: {
                value: string
                color?: string | undefined
                editor?: string | undefined
                execute?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              _id?: string | undefined
              value?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/setupWizard.parameters': {
      $get:
        | {
            input: {}
            output: {
              settings?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    value?: { [x: string]: unknown } | undefined
                    values?:
                      | { key?: string | undefined; i18nLabel?: string | undefined }[]
                      | undefined
                    wizard?: { step?: number | undefined; order?: number | undefined } | undefined
                  }[]
                | undefined
              serverAlreadyRegistered?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/service.configurations': {
      $get: {
        input: {}
        output: {
          configurations?:
            | {
                _id?: string | undefined
                service?: string | undefined
                clientId?: string | undefined
              }[]
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/cloud.connectWorkspace': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { token: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { token: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { token: string }
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
    '/api/v1/cloud.manualRegister': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { cloudBlob: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { cloudBlob: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { cloudBlob: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/cloud.registrationStatus': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              registrationStatus?:
                | {
                    workspaceRegistered?: boolean | undefined
                    workspaceId?: string | undefined
                    uniqueId?: string | undefined
                    token?: string | undefined
                    email?: string | undefined
                  }
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
    '/api/v1/cloud.workspaceRegisterData': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { registerData?: string | undefined; success?: boolean | undefined }
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
    '/api/v1/dns.resolve.txt': {
      $post:
        | {
            input: { query: { url: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { url: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/dns.resolve.srv': {
      $post:
        | {
            input: { query: { url: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { url: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.fetchMyKeys': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              public_key?: string | undefined
              private_key?: string | undefined
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
    '/api/v1/e2e.getUsersOfRoomWithoutKey': {
      $get:
        | {
            input: { query: { rid: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    e2e?: { public_key?: string | undefined } | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rid: string } } & {
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
            input: { query: { rid: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.setRoomKeyID': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string; keyID: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string; keyID: string }
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
              json: { rid: string; keyID: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.setUserPublicAndPrivateKeys': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { public_key: string; private_key: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { public_key: string; private_key: string }
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
              json: { public_key: string; private_key: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.updateGroupKey': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { uid: string; rid: string; key: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { uid: string; rid: string; key: string }
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
              json: { uid: string; rid: string; key: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.requestSubscriptionKeys': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined }
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
    '/api/v1/e2e.acceptSuggestedGroupKey': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string }
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
              json: { rid: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.rejectSuggestedGroupKey': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string }
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
              json: { rid: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.fetchUsersWaitingForGroupKey': {
      $get:
        | {
            input: { query: { roomIds: string[] } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              usersWaitingForE2EKeys?:
                | { [x: string]: { _id?: string | undefined; public_key?: string | undefined }[] }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roomIds: string[] } } & {
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
            input: { query: { roomIds: string[] } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.provideUsersSuggestedGroupKeys': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                usersSuggestedGroupKeys: {
                  [x: string]: {
                    _id: string
                    key: string
                    oldKeys?:
                      | {
                          e2eKeyId?: string | undefined
                          ts?: string | undefined
                          E2EKey?: string | undefined
                        }[]
                      | undefined
                  }[]
                }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                usersSuggestedGroupKeys: {
                  [x: string]: {
                    _id: string
                    key: string
                    oldKeys?:
                      | {
                          e2eKeyId?: string | undefined
                          ts?: string | undefined
                          E2EKey?: string | undefined
                        }[]
                      | undefined
                  }[]
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
                usersSuggestedGroupKeys: {
                  [x: string]: {
                    _id: string
                    key: string
                    oldKeys?:
                      | {
                          e2eKeyId?: string | undefined
                          ts?: string | undefined
                          E2EKey?: string | undefined
                        }[]
                      | undefined
                  }[]
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/e2e.resetRoomKey': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string; e2eKey: string; e2eKeyId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string; e2eKey: string; e2eKeyId: string }
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
              json: { rid: string; e2eKey: string; e2eKeyId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { rid: string; e2eKey: string; e2eKeyId: string }
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
    '/api/v1/uploadImportFile': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                binaryContent: string
                importerKey: string
                fileName: string
                contentType: string
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                binaryContent: string
                importerKey: string
                fileName: string
                contentType: string
              }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                binaryContent: string
                importerKey: string
                fileName: string
                contentType: string
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/downloadPublicImportFile': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { fileUrl: string; importerKey: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { fileUrl: string; importerKey: string }
            }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
              details?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { fileUrl: string; importerKey: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { fileUrl: string; importerKey: string }
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
    '/api/v1/startImport': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                input: {
                  users: { all?: boolean | undefined; list?: string[] | undefined }
                  channels: { all?: boolean | undefined; list?: string[] | undefined }
                }
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                input: {
                  users: { all?: boolean | undefined; list?: string[] | undefined }
                  channels: { all?: boolean | undefined; list?: string[] | undefined }
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                input: {
                  users: { all?: boolean | undefined; list?: string[] | undefined }
                  channels: { all?: boolean | undefined; list?: string[] | undefined }
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
    '/api/v1/getImportFileData': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              users?: { [x: string]: unknown }[] | undefined
              channels?: { [x: string]: unknown }[] | undefined
              message_count?: number | undefined
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
    '/api/v1/getImportProgress': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              key?: string | undefined
              name?: string | undefined
              step?: string | undefined
              count?: { completed?: number | undefined; total?: number | undefined } | undefined
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
    '/api/v1/getLatestImportOperations': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              _id?: string | undefined
              type?: string | undefined
              importerKey?: string | undefined
              ts?: number | undefined
              status?: string | undefined
              valid?: boolean | undefined
              user?: string | undefined
              _updatedAt?: string | undefined
            }[]
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
    '/api/v1/downloadPendingFiles': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; count?: number | undefined }
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
    '/api/v1/downloadPendingAvatars': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; count?: number | undefined }
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
    '/api/v1/getCurrentImportOperation': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              success?: boolean | undefined
              operation?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    importerKey?: string | undefined
                    ts?: number | undefined
                    status?: string | undefined
                    valid?: boolean | undefined
                    user?: string | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
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
    '/api/v1/importers.list': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { key?: string | undefined; name?: string | undefined }[]
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
    '/api/v1/import.new': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              operation?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    importerKey?: string | undefined
                    ts?: string | undefined
                    status?: string | undefined
                    valid?: boolean | undefined
                    user?: string | undefined
                    _updatedAt?: string | undefined
                  }
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
    '/api/v1/import.addUsers': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                users?:
                  | {
                      username?: string | undefined
                      emails: string[]
                      importIds: string[]
                      name?: string | undefined
                      password?: string | undefined
                      utcOffset?: number | undefined
                      roles?: string[] | undefined
                      type?: string | undefined
                      bio?: string | undefined
                      deleted?: boolean | undefined
                      avatarUrl?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                users?:
                  | {
                      username?: string | undefined
                      emails: string[]
                      importIds: string[]
                      name?: string | undefined
                      password?: string | undefined
                      utcOffset?: number | undefined
                      roles?: string[] | undefined
                      type?: string | undefined
                      bio?: string | undefined
                      deleted?: boolean | undefined
                      avatarUrl?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                users?:
                  | {
                      username?: string | undefined
                      emails: string[]
                      importIds: string[]
                      name?: string | undefined
                      password?: string | undefined
                      utcOffset?: number | undefined
                      roles?: string[] | undefined
                      type?: string | undefined
                      bio?: string | undefined
                      deleted?: boolean | undefined
                      avatarUrl?: string | undefined
                    }[]
                  | undefined
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
    '/api/v1/import.run': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined }
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
    '/api/v1/import.status': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              state?: string | undefined
              operation?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    importerKey?: string | undefined
                    ts?: string | undefined
                    status?: string | undefined
                    valid?: boolean | undefined
                    user?: string | undefined
                    _updatedAt?: string | undefined
                    count?: { total?: number | undefined; users?: number | undefined } | undefined
                  }
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
    '/api/v1/import.clear': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined }
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
    '/api/v1/instances.get': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              instances?:
                | {
                    address?: string | undefined
                    currentStatus?:
                      | {
                          connected?: boolean | undefined
                          lastHeartbeatTime?: number | undefined
                          local?: boolean | undefined
                        }
                      | undefined
                    instanceRecord?:
                      | {
                          _id?: string | undefined
                          _createdAt?: string | undefined
                          _updatedAt?: string | undefined
                          extraInformation?:
                            | {
                                host?: string | undefined
                                port?: string | undefined
                                tcpPort?: number | undefined
                                os?:
                                  | {
                                      type?: string | undefined
                                      platform?: string | undefined
                                      arch?: string | undefined
                                      release?: string | undefined
                                      uptime?: number | undefined
                                      loadavg?: number[] | undefined
                                      totalmem?: number | undefined
                                      freemem?: number | undefined
                                      cpus?: number | undefined
                                    }
                                  | undefined
                                nodeVersion?: string | undefined
                                conns?: number | undefined
                              }
                            | undefined
                          name?: string | undefined
                          pid?: number | undefined
                        }
                      | undefined
                    broadcastAuth?: boolean | undefined
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
    '/api/v1/moderation.reportsByUsers': {
      $get:
        | {
            input: {
              query: {
                oldest?: string | undefined
                latest?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              reports?:
                | {
                    rooms?:
                      | {
                          _id?: string | undefined
                          t?: string | undefined
                          federated?: boolean | undefined
                        }[]
                      | undefined
                    count?: number | undefined
                    message?: string | undefined
                    msgId?: string | undefined
                    ts?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                    userId?: string | undefined
                    isUserDeleted?: boolean | undefined
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
                oldest?: string | undefined
                latest?: string | undefined
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
                oldest?: string | undefined
                latest?: string | undefined
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
    '/api/v1/moderation.user.reportedMessages': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                userId: string
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              messages?:
                | {
                    _id?: string | undefined
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
                    room?: { _id?: string | undefined; t?: string | undefined } | undefined
                    ts?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              total?: number | undefined
              offset?: number | undefined
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
                userId: string
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                userId: string
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
    '/api/v1/moderation.reports': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                msgId: string
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              reports?:
                | {
                    _id?: string | undefined
                    description?: string | undefined
                    reportedBy?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                          createdAt?: string | undefined
                        }
                      | undefined
                    room?: { _id?: string | undefined; t?: string | undefined } | undefined
                    ts?: string | undefined
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
                msgId: string
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                msgId: string
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
    '/api/v1/moderation.reportInfo': {
      $get:
        | {
            input: { query: { reportId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { reportId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { reportId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
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
    '/api/v1/moderation.dismissReports': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId?: string | undefined; msgId?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId?: string | undefined; msgId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId?: string | undefined; msgId?: string | undefined }
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
    '/api/v1/moderation.user.deleteReportedMessages': {
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
    '/api/v1/moderation.dismissUserReports': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId: string; reason?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { userId: string; reason?: string | undefined }
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
              json: { userId: string; reason?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/moderation.user.reportsByUserId': {
      $get:
        | {
            input: { query: { userId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
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
                    roles?: string[] | undefined
                    active?: boolean | undefined
                    name?: string | undefined
                    avatarETag?: string | undefined
                  }
                | undefined
              reports?:
                | {
                    _id?: string | undefined
                    description?: string | undefined
                    reportedBy?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          username?: string | undefined
                          createdAt?: string | undefined
                        }
                      | undefined
                    reportedUser?:
                      | {
                          _id?: string | undefined
                          createdAt?: string | undefined
                          username?: string | undefined
                          emails?:
                            | { address?: string | undefined; verified?: boolean | undefined }[]
                            | undefined
                          name?: string | undefined
                        }
                      | undefined
                    ts?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              total?: number | undefined
              offset?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
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
        | {
            input: { query: { userId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/moderation.userReports': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              reports?:
                | {
                    count?: number | undefined
                    reportedUser?:
                      | {
                          _id?: string | undefined
                          createdAt?: string | undefined
                          username?: string | undefined
                          emails?:
                            | { address?: string | undefined; verified?: boolean | undefined }[]
                            | undefined
                          name?: string | undefined
                        }
                      | undefined
                    ts?: string | undefined
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/sessions/list': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              sessions?:
                | {
                    sessionId?: string | undefined
                    userId?: string | undefined
                    device?:
                      | {
                          type?: string | undefined
                          name?: string | undefined
                          longVersion?: string | undefined
                          os?:
                            | { name?: string | undefined; version?: string | undefined }
                            | undefined
                          version?: string | undefined
                        }
                      | undefined
                    host?: string | undefined
                    ip?: string | undefined
                    loginAt?: string | undefined
                    _id?: string | undefined
                    current?: boolean | undefined
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
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/sessions/list.all': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: {
              sessions?:
                | {
                    sessionId?: string | undefined
                    userId?: string | undefined
                    device?:
                      | {
                          type?: string | undefined
                          name?: string | undefined
                          longVersion?: string | undefined
                          os?:
                            | { name?: string | undefined; version?: string | undefined }
                            | undefined
                          version?: string | undefined
                        }
                      | undefined
                    host?: string | undefined
                    ip?: string | undefined
                    loginAt?: string | undefined
                    _user?: { username?: string | undefined; name?: string | undefined } | undefined
                    _id?: string | undefined
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
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
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
                    availableMethods?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
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
    '/api/v1/sessions/info': {
      $get:
        | {
            input: { query: { sessionId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              _id?: string | undefined
              type?: string | undefined
              sessionId?: string | undefined
              instanceId?: string | undefined
              loginToken?: string | undefined
              ip?: string | undefined
              host?: string | undefined
              device?:
                | {
                    type?: string | undefined
                    name?: string | undefined
                    longVersion?: string | undefined
                    os?: { name?: string | undefined; version?: string | undefined } | undefined
                    version?: string | undefined
                  }
                | undefined
              userId?: string | undefined
              roles?: string[] | undefined
              mostImportantRole?: string | undefined
              loginAt?: string | undefined
              day?: number | undefined
              month?: number | undefined
              year?: number | undefined
              searchTerm?: string | undefined
              createdAt?: string | undefined
              _updatedAt?: string | undefined
              closedAt?: string | undefined
              lastActivityAt?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionId: string } } & {
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
            input: { query: { sessionId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/sessions/info.admin': {
      $get:
        | {
            input: { query: { sessionId: string } } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: {
              sessionId?: string | undefined
              userId?: string | undefined
              device?:
                | {
                    type?: string | undefined
                    name?: string | undefined
                    longVersion?: string | undefined
                    os?: { name?: string | undefined; version?: string | undefined } | undefined
                    version?: string | undefined
                  }
                | undefined
              host?: string | undefined
              ip?: string | undefined
              loginAt?: string | undefined
              _user?: { name?: string | undefined; username?: string | undefined } | undefined
              _id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionId: string } } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
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
            input: { query: { sessionId: string } } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sessionId: string } } & {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
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
    '/api/v1/sessions/logout.me': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { sessionId: string }
            }
            output: { sessionId?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { sessionId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { sessionId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/sessions/logout': {
      $post:
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { sessionId: string } }
            output: { sessionId?: string | undefined; success?: boolean | undefined }
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
            } & { json: { sessionId: string } }
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
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { sessionId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-User-Id': string
                'X-Auth-Token': string
                'x-2fa-code'?: string | undefined
                'x-2fa-method'?: string | undefined
              }
            } & { json: { sessionId: string } }
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
    '/api/v1/pw.getPolicy': {
      $get: {
        input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-conference.capabilities': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              providerName?: string | undefined
              capabilities?:
                | {
                    mic?: boolean | undefined
                    cam?: boolean | undefined
                    title?: boolean | undefined
                  }
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
            status: 400
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference.list': {
      $get:
        | {
            input: {
              query: { roomId: string; offset?: number | undefined; count?: number | undefined }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              data?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    users?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                          avatarETag?: string | undefined
                          ts?: string | undefined
                        }[]
                      | undefined
                    messages?: { started?: string | undefined } | undefined
                    status?: number | undefined
                    anonymousUsers?: number | undefined
                    createdAt?: string | undefined
                    providerName?: string | undefined
                    ringing?: boolean | undefined
                    title?: string | undefined
                    rid?: string | undefined
                    createdBy?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          username?: string | undefined
                        }
                      | undefined
                    _updatedAt?: string | undefined
                    url?: string | undefined
                    endedAt?: string | undefined
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
              query: { roomId: string; offset?: number | undefined; count?: number | undefined }
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
              query: { roomId: string; offset?: number | undefined; count?: number | undefined }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference.info': {
      $get:
        | {
            input: { query: { callId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              _id?: string | undefined
              type?: string | undefined
              users?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                    avatarETag?: string | undefined
                    ts?: string | undefined
                    joined?: boolean | undefined
                    joinedAt?: string | undefined
                    declined?: boolean | undefined
                    declinedAt?: string | undefined
                    leftAt?: string | undefined
                    leftReason?: 'reported' | 'timeout' | undefined
                    lastSeenAt?: string | undefined
                    ringingAt?: string | undefined
                  }[]
                | undefined
              messages?: { started?: string | undefined } | undefined
              status?: number | undefined
              anonymousUsers?: number | undefined
              createdAt?: string | undefined
              providerName?: string | undefined
              ringing?: boolean | undefined
              title?: string | undefined
              rid?: string | undefined
              createdBy?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    username?: string | undefined
                  }
                | undefined
              _updatedAt?: string | undefined
              url?: string | undefined
              capabilities?:
                | {
                    mic?: boolean | undefined
                    cam?: boolean | undefined
                    title?: boolean | undefined
                    persistentChat?: boolean | undefined
                    embedded?: boolean | undefined
                  }
                | undefined
              chatAccess?:
                | {
                    rid?: string | undefined
                    name?: string | undefined
                    type?: string | undefined
                    membersWithoutAccess?: string[] | undefined
                    canInvite?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { callId: string } } & {
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
            input: { query: { callId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference.providers': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              data?: { key?: string | undefined; label?: string | undefined }[] | undefined
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
    '/api/v1/video-conference.start': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                roomId: string
                title?: string | undefined
                allowRinging?: boolean | undefined
              }
            }
            output: {
              data?:
                | {
                    type?: string | undefined
                    callId?: string | undefined
                    rid?: string | undefined
                    providerName?: string | undefined
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
                roomId: string
                title?: string | undefined
                allowRinging?: boolean | undefined
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
                roomId: string
                title?: string | undefined
                allowRinging?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference.join': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                callId: string
                state?: { mic?: boolean | undefined; cam?: boolean | undefined } | undefined
              }
            }
            output: {
              url?: string | undefined
              providerName?: string | undefined
              callId?: string | undefined
              rid?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                callId: string
                state?: { mic?: boolean | undefined; cam?: boolean | undefined } | undefined
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
                callId: string
                state?: { mic?: boolean | undefined; cam?: boolean | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference.cancel': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
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
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/video-conference.decline': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
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
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.leave': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
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
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.heartbeat': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
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
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.ring': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; userId: string }
            }
            output: { rang?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; userId: string }
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
              json: { callId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; userId: string }
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; userId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.add-participants': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; users: string[]; ring?: boolean | undefined }
            }
            output: { added?: string[] | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; users: string[]; ring?: boolean | undefined }
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
              json: { callId: string; users: string[]; ring?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; users: string[]; ring?: boolean | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.rename': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; title: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; title: string }
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
              json: { callId: string; title: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; title: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.share-chat': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; mode: 'invite' | 'discussion' }
            }
            output: { rid?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; mode: 'invite' | 'discussion' }
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
              json: { callId: string; mode: 'invite' | 'discussion' }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { callId: string; mode: 'invite' | 'discussion' }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/video-conference.joinable': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              calls?:
                | {
                    callId?: string | undefined
                    name?: string | undefined
                    createdAt?: string | undefined
                    usersCount?: number | undefined
                    participants?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }[]
                      | undefined
                    joined?: boolean | undefined
                    declined?: boolean | undefined
                    ringingAt?: string | undefined
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
    '/api/v1/media-calls.state': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              calls?:
                | {
                    _id?: string | undefined
                    service?: 'webrtc' | undefined
                    kind?: 'direct' | undefined
                    state?: 'ringing' | 'active' | undefined
                    createdBy?:
                      | {
                          type?: string | undefined
                          id?: string | undefined
                          contractId?: string | undefined
                        }
                      | undefined
                    createdAt?: string | undefined
                    caller?:
                      | {
                          type?: string | undefined
                          id?: string | undefined
                          contractId?: string | undefined
                          displayName?: string | undefined
                          username?: string | undefined
                        }
                      | undefined
                    callee?:
                      | {
                          type?: string | undefined
                          id?: string | undefined
                          contractId?: string | undefined
                          displayName?: string | undefined
                          username?: string | undefined
                        }
                      | undefined
                    expiresAt?: string | undefined
                    uids?: string[] | undefined
                    ended?: boolean | undefined
                    callerRequestedId?: string | undefined
                    features?: string[] | undefined
                    _updatedAt?: string | undefined
                    acceptedAt?: string | undefined
                    activatedAt?: string | undefined
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
    '/api/v1/media-calls.info': {
      $get:
        | {
            input: { query: { callId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              call?:
                | {
                    _id?: string | undefined
                    service?: 'webrtc' | undefined
                    kind?: 'direct' | undefined
                    state?: 'none' | 'ringing' | 'accepted' | 'active' | 'hangup' | undefined
                    createdBy?: { [x: string]: unknown } | undefined
                    createdAt?: string | undefined
                    caller?:
                      | {
                          type?: string | undefined
                          id?: string | undefined
                          contractId?: string | undefined
                          displayName?: string | undefined
                          username?: string | undefined
                          sipExtension?: string | undefined
                        }
                      | undefined
                    callee?:
                      | {
                          type?: string | undefined
                          id?: string | undefined
                          contractId?: string | undefined
                          displayName?: string | undefined
                          username?: string | undefined
                          sipExtension?: string | undefined
                        }
                      | undefined
                    ended?: boolean | undefined
                    endedBy?: { [x: string]: unknown } | undefined
                    endedAt?: string | undefined
                    hangupReason?: string | undefined
                    expiresAt?: string | undefined
                    acceptedAt?: string | undefined
                    activatedAt?: string | undefined
                    uids?: string[] | undefined
                    features?: string[] | undefined
                    sipCallId?: string | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { callId: string } } & {
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
            input: { query: { callId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { callId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/audit.auditions': {
      $get:
        | {
            input: { query: { startDate: string; endDate: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              auditions: {
                _id: string
                _updatedAt?: string | undefined
                ts: string
                results: number
                u: {
                  _id: string
                  username?: string | undefined
                  name?: string | undefined
                  avatarETag?: string | undefined
                }
                fields: {
                  type: string
                  msg?: (string | null) | undefined
                  startDate?: (string | null) | undefined
                  endDate?: (string | null) | undefined
                  rids?: (string[] | null) | undefined
                  room?: (string | null) | undefined
                  users?: (string[] | null) | undefined
                  visitor?: (string | null) | undefined
                  agent?: (string | null) | undefined
                  filters?: (string | null) | undefined
                }
              }[]
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { startDate: string; endDate: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { startDate: string; endDate: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
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
    '/api/v1/audit.messages': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                rid?: string | undefined
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
              }
            }
            output: {
              messages: {
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
              }[]
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                rid?: string | undefined
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
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
                rid?: string | undefined
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                rid?: string | undefined
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
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
    '/api/v1/audit.omnichannelMessages': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
              }
            }
            output: {
              messages: {
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
              }[]
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
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
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: {
                startDate: string
                endDate: string
                users: string[]
                msg: string | null
                type: string
                visitor?: (string | null) | undefined
                agent?: (string | null) | undefined
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
