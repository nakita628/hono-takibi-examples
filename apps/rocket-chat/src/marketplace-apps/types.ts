declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
  } & {
    '/api/apps': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: {
                url?: string | undefined
                app?: File | undefined
                permissions?: { name?: string | undefined }[] | undefined
              }
            }
            output: {
              app?:
                | {
                    id?: string | undefined
                    version?: string | undefined
                    requiredApiVersion?: string | undefined
                    iconFile?: string | undefined
                    author?:
                      | {
                          name?: string | undefined
                          homepage?: string | undefined
                          support?: string | undefined
                        }
                      | undefined
                    name?: string | undefined
                    nameSlug?: string | undefined
                    classFile?: string | undefined
                    description?: string | undefined
                    implements?: { [x: string]: unknown }[] | undefined
                    iconFileContent?: string | undefined
                    status?: string | undefined
                  }
                | undefined
              implemented?:
                | {
                    IPreMessageSentPrevent?: boolean | undefined
                    IPreMessageSentExtend?: boolean | undefined
                    IPreMessageSentModify?: boolean | undefined
                    IPostMessageSent?: boolean | undefined
                    IPreMessageDeletePrevent?: boolean | undefined
                    IPostMessageDeleted?: boolean | undefined
                    IPreMessageUpdatedPrevent?: boolean | undefined
                    IPreMessageUpdatedExtend?: boolean | undefined
                    IPreMessageUpdatedModify?: boolean | undefined
                    IPostMessageUpdated?: boolean | undefined
                    IPostMessageReacted?: boolean | undefined
                    IPostMessageFollowed?: boolean | undefined
                    IPostMessagePinned?: boolean | undefined
                    IPostMessageStarred?: boolean | undefined
                    IPostMessageReported?: boolean | undefined
                    IPreRoomCreatePrevent?: boolean | undefined
                    IPreRoomCreateExtend?: boolean | undefined
                    IPreRoomCreateModify?: boolean | undefined
                    IPostRoomCreate?: boolean | undefined
                    IPreRoomDeletePrevent?: boolean | undefined
                    IPostRoomDeleted?: boolean | undefined
                    IPreRoomUserJoined?: boolean | undefined
                    IPostRoomUserJoined?: boolean | undefined
                    IPreRoomUserLeave?: boolean | undefined
                    IPostRoomUserLeave?: boolean | undefined
                    IPostExternalComponentOpened?: boolean | undefined
                    IPostExternalComponentClosed?: boolean | undefined
                    IUIKitInteractionHandler?: boolean | undefined
                    IUIKitLivechatInteractionHandler?: boolean | undefined
                    IPostLivechatRoomStarted?: boolean | undefined
                    IPostLivechatRoomClosed?: boolean | undefined
                    ILivechatRoomClosedHandler?: boolean | undefined
                    IPostLivechatAgentAssigned?: boolean | undefined
                    IPostLivechatAgentUnassigned?: boolean | undefined
                    IPostLivechatRoomTransferred?: boolean | undefined
                    IPostLivechatGuestSaved?: boolean | undefined
                    IPostLivechatRoomSaved?: boolean | undefined
                    IPreFileUpload?: boolean | undefined
                    IPreEmailSent?: boolean | undefined
                    IPostUserCreated?: boolean | undefined
                    IPostUserUpdated?: boolean | undefined
                    IPostUserDeleted?: boolean | undefined
                    IPostUserLoggedIn?: boolean | undefined
                    IPostUserLoggedOut?: boolean | undefined
                    IPostUserStatusChanged?: boolean | undefined
                  }
                | undefined
              licenseValidation?:
                | {
                    errors?: { [x: string]: unknown } | undefined
                    warnings?: { [x: string]: unknown } | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              form: {
                url?: string | undefined
                app?: File | undefined
                permissions?: { name?: string | undefined }[] | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/apps/logs': {
      $get:
        | {
            input: {
              query: {
                appId?: string | undefined
                logLevel?: string | undefined
                method?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              offset?: number | undefined
              logs?:
                | {
                    _id?: string | undefined
                    appId?: string | undefined
                    method?: string | undefined
                    entries?:
                      | {
                          caller?: string | undefined
                          severity?: string | undefined
                          method?: string | undefined
                          timestamp?: string | undefined
                          args?: string[] | undefined
                        }[]
                      | undefined
                    startTime?: string | undefined
                    endTime?: string | undefined
                    totalTime?: number | undefined
                    _createdAt?: string | undefined
                    instanceId?: string | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
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
                appId?: string | undefined
                logLevel?: string | undefined
                method?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
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
                appId?: string | undefined
                logLevel?: string | undefined
                method?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/app/:id/logs': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                method?: string | undefined
                logLevel?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              offset?: number | undefined
              logs?:
                | {
                    _id?: string | undefined
                    appId?: string | undefined
                    method?: string | undefined
                    entries?:
                      | {
                          caller?: string | undefined
                          severity?: string | undefined
                          method?: string | undefined
                          timestamp?: string | undefined
                          args?: string[] | undefined
                        }[]
                      | undefined
                    startTime?: string | undefined
                    endTime?: string | undefined
                    totalTime?: number | undefined
                    _createdAt?: string | undefined
                    instanceId?: string | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              count?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                method?: string | undefined
                logLevel?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
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
            input: { param: { id: string } } & {
              query: {
                method?: string | undefined
                logLevel?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
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
            input: { param: { id: string } } & {
              query: {
                method?: string | undefined
                logLevel?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
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
    '/api/apps/marketplace': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              appId?: string | undefined
              latest?:
                | {
                    internalId?: string | undefined
                    id?: string | undefined
                    name?: string | undefined
                    nameSlug?: string | undefined
                    version?: string | undefined
                    categories?: string[] | undefined
                    languages?: string[] | undefined
                    shortDescription?: string | undefined
                    description?: string | undefined
                    privacyPolicySummary?: string | undefined
                    documentationUrl?: string | undefined
                    detailedDescription?:
                      | { raw?: string | undefined; rendered?: string | undefined }
                      | undefined
                    detailedChangelog?:
                      | { raw?: string | undefined; rendered?: string | undefined }
                      | undefined
                    requiredApiVersion?: string | undefined
                    author?:
                      | {
                          name?: string | undefined
                          support?: string | undefined
                          homepage?: string | undefined
                        }
                      | undefined
                    classFile?: string | undefined
                    iconFile?: string | undefined
                    iconFileData?: string | undefined
                    status?: string | undefined
                    changesNote?: string | undefined
                    internalChangesNote?: string | undefined
                    isVisible?: boolean | undefined
                    createdDate?: string | undefined
                    modifiedDate?: string | undefined
                    isPurchased?: boolean | undefined
                    isSubscribed?: boolean | undefined
                    subscriptionInfo?:
                      | {
                          typeOf?: string | undefined
                          status?: string | undefined
                          statusFromBilling?: boolean | undefined
                          isSeatBased?: boolean | undefined
                          seats?: number | undefined
                          maxSeats?: number | undefined
                          license?:
                            | {
                                license?: string | undefined
                                version?: number | undefined
                                expireDate?: string | undefined
                              }
                            | undefined
                          startDate?: string | undefined
                          periodEnd?: string | undefined
                          endDate?: string | undefined
                          externallyManaged?: boolean | undefined
                          isSubscribedViaBundle?: boolean | undefined
                        }
                      | undefined
                    addonId?: string | undefined
                    compileJobId?: string | undefined
                    compiled?: boolean | undefined
                    isEnterpriseOnly?: boolean | undefined
                    permissions?: { name?: string | undefined }[] | undefined
                  }
                | undefined
              isAddon?: boolean | undefined
              addonId?: string | undefined
              isEnterpriseOnly?: boolean | undefined
              isBundle?: boolean | undefined
              bundledAppIds?: { [x: string]: unknown }[] | undefined
              bundledIn?: { [x: string]: unknown }[] | undefined
              isPurchased?: boolean | undefined
              isSubscribed?: boolean | undefined
              subscriptionInfo?:
                | {
                    typeOf?: string | undefined
                    status?: string | undefined
                    statusFromBilling?: boolean | undefined
                    isSeatBased?: boolean | undefined
                    seats?: number | undefined
                    maxSeats?: number | undefined
                    license?:
                      | {
                          license?: string | undefined
                          version?: number | undefined
                          expireDate?: string | undefined
                        }
                      | undefined
                    startDate?: string | undefined
                    periodEnd?: string | undefined
                    endDate?: string | undefined
                    externallyManaged?: boolean | undefined
                    isSubscribedViaBundle?: boolean | undefined
                  }
                | undefined
              price?: number | undefined
              purchaseType?: string | undefined
              isUsageBased?: boolean | undefined
              createdAt?: string | undefined
              modifiedAt?: string | undefined
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
    }
  } & {
    '/api/apps/categories': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              id?: string | undefined
              title?: string | undefined
              description?: string | undefined
              hidden?: boolean | undefined
              createdDate?: string | undefined
              modifiedDate?: string | undefined
            }[]
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
    '/api/apps/installed': {
      $get:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              apps?:
                | {
                    id?: string | undefined
                    version?: string | undefined
                    requiredApiVersion?: string | undefined
                    iconFile?: string | undefined
                    author?:
                      | {
                          name?: string | undefined
                          homepage?: string | undefined
                          support?: string | undefined
                        }
                      | undefined
                    name?: string | undefined
                    nameSlug?: string | undefined
                    classFile?: string | undefined
                    description?: string | undefined
                    implements?: { [x: string]: unknown }[] | undefined
                    iconFileContent?: string | undefined
                    status?: string | undefined
                    languages?:
                      | {
                          en?:
                            | {
                                params_example?: string | undefined
                                command_description?: string | undefined
                                bbb_url?: string | undefined
                                bbb_url_description?: string | undefined
                                bbb_shared_secret?: string | undefined
                                bbb_shared_secret_description?: string | undefined
                                bbb_register_hook?: string | undefined
                                bbb_register_hook_description?: string | undefined
                                bbb_additional_params?: string | undefined
                                bbb_additional_params_Description?: string | undefined
                              }
                            | undefined
                          de?:
                            | {
                                bbb_additional_params?: string | undefined
                                bbb_additional_params_Description?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    private?: boolean | undefined
                    migrated?: boolean | undefined
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
    '/apps/count': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              totalMarketplaceEnabled?: number | undefined
              totalPrivateEnabled?: number | undefined
              maxMarketplaceApps?: number | undefined
              maxPrivateApps?: number | undefined
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
    '/apps/buildExternalAppRequest': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { url?: string | undefined; success?: boolean | undefined }
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
    '/api/apps/:appId': {
      $get:
        | {
            input: { param: { appId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              app?:
                | {
                    id?: string | undefined
                    version?: string | undefined
                    requiredApiVersion?: string | undefined
                    iconFile?: string | undefined
                    author?:
                      | {
                          name?: string | undefined
                          homepage?: string | undefined
                          support?: string | undefined
                        }
                      | undefined
                    name?: string | undefined
                    nameSlug?: string | undefined
                    classFile?: string | undefined
                    description?: string | undefined
                    implements?: { [x: string]: unknown }[] | undefined
                    permissions?: { name?: string | undefined }[] | undefined
                    iconFileContent?: string | undefined
                    status?: string | undefined
                    languages?: { [x: string]: unknown } | undefined
                    private?: boolean | undefined
                    migrated?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { appId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              app?:
                | {
                    id?: string | undefined
                    version?: string | undefined
                    requiredApiVersion?: string | undefined
                    iconFile?: string | undefined
                    author?:
                      | {
                          name?: string | undefined
                          homepage?: string | undefined
                          support?: string | undefined
                        }
                      | undefined
                    name?: string | undefined
                    nameSlug?: string | undefined
                    classFile?: string | undefined
                    description?: string | undefined
                    implements?: { [x: string]: unknown }[] | undefined
                    permissions?: { name?: string | undefined }[] | undefined
                    iconFileContent?: string | undefined
                    status?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
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
