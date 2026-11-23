declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/livechat/users/:type': {
      $post:
        | {
            input: { param: { type: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { username: string } }
            output: {
              user?: { _id?: string | undefined; username?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { username: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { username: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { username: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { type: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                onlyAvailable?: boolean | undefined
                showIdleAgents?: boolean | undefined
                excludeId?: string | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              users?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    statusLivechat?: string | undefined
                    name?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    livechat?: string | undefined
                    departments?: string[] | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                onlyAvailable?: boolean | undefined
                showIdleAgents?: boolean | undefined
                excludeId?: string | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                onlyAvailable?: boolean | undefined
                showIdleAgents?: boolean | undefined
                excludeId?: string | undefined
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
    '/api/v1/livechat/users/:type/:_id': {
      $get:
        | {
            input: { param: { type: string; _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              user?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                    status?: string | undefined
                    statusLivechat?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: string | undefined }[]
                      | undefined
                    livechat?: { maxNumberSimultaneousChat?: string | undefined } | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string; _id: string } } & {
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
            input: { param: { type: string; _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string; _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/livechat/agent.info/:rid/:token': {
      $get: {
        input: { param: { rid: string; token: string } }
        output: {
          agent?:
            | {
                _id?: string | undefined
                emails?:
                  | { address?: string | undefined; verified?: boolean | undefined }[]
                  | undefined
                status?: string | undefined
                name?: string | undefined
                username?: string | undefined
                livechat?: { maxNumberSimultaneousChat?: string | undefined } | undefined
              }
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/livechat/agent.next/:token': {
      $get: {
        input: { param: { token: string } }
        output: {
          agent?:
            | {
                _id?: string | undefined
                emails?:
                  | { address?: string | undefined; verified?: boolean | undefined }[]
                  | undefined
                name?: string | undefined
                username?: string | undefined
              }
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/livechat/agents.saveInfo': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                agentId: string
                agentData: { [x: string]: unknown }
                agentDepartments: string[]
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                agentId: string
                agentData: { [x: string]: unknown }
                agentDepartments: string[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/agent.status': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { agentId?: string | undefined }
            }
            output: { status?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { agentId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/omnichannel/contact': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                token: string
                name: string
                email?: string | undefined
                phone?: string | undefined
                contactManager?: { username?: string | undefined } | undefined
              }
            }
            output: { contact?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                token: string
                name: string
                email?: string | undefined
                phone?: string | undefined
                contactManager?: { username?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                token: string
                name: string
                email?: string | undefined
                phone?: string | undefined
                contactManager?: { username?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                token: string
                name: string
                email?: string | undefined
                phone?: string | undefined
                contactManager?: { username?: string | undefined } | undefined
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
      $get:
        | {
            input: { query: { contactId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              contact?:
                | ({
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    ts?: string | undefined
                    _updatedAt?: string | undefined
                    department?: string | undefined
                    name?: string | undefined
                    visitorEmails?: { address?: string | undefined }[] | undefined
                    phone?: { phoneNumber?: string | undefined }[] | undefined
                    livechatData?: { [x: string]: unknown } | undefined
                  } | null)
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { contactId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { contactId: string } } & {
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
    '/api/v1/omnichannel/contact.search': {
      $get:
        | {
            input: {
              query: {
                email?: string | undefined
                phone?: string | undefined
                custom?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              contact?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    ts?: string | undefined
                    _updatedAt?: string | undefined
                    department?: string | undefined
                    name?: string | undefined
                    visitorEmails?: { address?: string | undefined }[] | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
                    livechatData?: { hobby?: string | undefined } | undefined
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
                email?: string | undefined
                phone?: string | undefined
                custom?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phone?: string | undefined
                custom?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phone?: string | undefined
                custom?: string | undefined
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
    '/api/v1/omnichannel/contacts': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                phones: string[]
                emails: string[]
                customFields?: { [x: string]: unknown } | undefined
                contactManager?: string | undefined
              }
            }
            output: { contactId?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                phones: string[]
                emails: string[]
                customFields?: { [x: string]: unknown } | undefined
                contactManager?: string | undefined
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
                name: string
                phones: string[]
                emails: string[]
                customFields?: { [x: string]: unknown } | undefined
                contactManager?: string | undefined
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
                phones: string[]
                emails: string[]
                customFields?: { [x: string]: unknown } | undefined
                contactManager?: string | undefined
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
    '/api/v1/omnichannel/contacts.update': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { [x: string]: unknown }
            }
            output: {
              contact?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    name?: string | undefined
                    emails?: { address?: string | undefined }[] | undefined
                    phones?: { phoneNumber?: string | undefined }[] | undefined
                    channels?:
                      | {
                          name?: string | undefined
                          visitor?:
                            | {
                                visitorId?: string | undefined
                                source?: { type?: string | undefined } | undefined
                              }
                            | undefined
                          blocked?: boolean | undefined
                          verified?: boolean | undefined
                          details?:
                            | { type?: string | undefined; destination?: string | undefined }
                            | undefined
                          lastChat?:
                            | { _id?: string | undefined; ts?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    customFields?: { [x: string]: unknown } | undefined
                    unknown?: boolean | undefined
                    preRegistration?: boolean | undefined
                    _updatedAt?: string | undefined
                    conflictingFields?: { [x: string]: unknown }[] | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
                    contactManager?: string | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { [x: string]: unknown }
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
              json: { [x: string]: unknown }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { [x: string]: unknown }
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
    '/api/v1/omnichannel/contacts.conflicts': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                contactId: string
                name?: string | undefined
                customFields?:
                  | { field1?: string | undefined; field2?: string | undefined }
                  | undefined
                contactManager?: string | undefined
                wipeConflicts?: boolean | undefined
              }
            }
            output: {
              result?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    name?: string | undefined
                    channels?:
                      | {
                          name?: string | undefined
                          visitor?:
                            | {
                                visitorId?: string | undefined
                                source?: { type?: string | undefined } | undefined
                              }
                            | undefined
                          blocked?: boolean | undefined
                          verified?: boolean | undefined
                          details?:
                            | { type?: string | undefined; destination?: string | undefined }
                            | undefined
                          lastChat?:
                            | { _id?: string | undefined; ts?: string | undefined }
                            | undefined
                          field?: string | undefined
                          value?: string | undefined
                          verifiedAt?: string | undefined
                        }[]
                      | undefined
                    customFields?:
                      | { field1?: string | undefined; field2?: string | undefined }
                      | undefined
                    unknown?: boolean | undefined
                    preRegistration?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
                    activity?: string[] | undefined
                    emails?: { address?: string | undefined }[] | undefined
                    phones?: { [x: string]: unknown }[] | undefined
                    conflictingFields?: { [x: string]: unknown }[] | undefined
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
                contactId: string
                name?: string | undefined
                customFields?:
                  | { field1?: string | undefined; field2?: string | undefined }
                  | undefined
                contactManager?: string | undefined
                wipeConflicts?: boolean | undefined
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
                contactId: string
                name?: string | undefined
                customFields?:
                  | { field1?: string | undefined; field2?: string | undefined }
                  | undefined
                contactManager?: string | undefined
                wipeConflicts?: boolean | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                contactId: string
                name?: string | undefined
                customFields?:
                  | { field1?: string | undefined; field2?: string | undefined }
                  | undefined
                contactManager?: string | undefined
                wipeConflicts?: boolean | undefined
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
    '/api/v1/omnichannel/contacts.get': {
      $get:
        | {
            input: { query: { contactId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              contact?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    name?: string | undefined
                    channels?:
                      | {
                          name?: string | undefined
                          visitor?:
                            | {
                                visitorId?: string | undefined
                                source?: { type?: string | undefined } | undefined
                              }
                            | undefined
                          blocked?: boolean | undefined
                          verified?: boolean | undefined
                          details?:
                            | { type?: string | undefined; destination?: string | undefined }
                            | undefined
                          lastChat?:
                            | { _id?: string | undefined; ts?: string | undefined }
                            | undefined
                          field?: string | undefined
                          value?: string | undefined
                          verifiedAt?: string | undefined
                        }[]
                      | undefined
                    customFields?:
                      | {
                          'social-number'?: string | undefined
                          address?: string | undefined
                          'zip-code'?: string | undefined
                        }
                      | undefined
                    unknown?: boolean | undefined
                    _updatedAt?: string | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
                    conflictingFields?: { [x: string]: unknown }[] | undefined
                    emails?: { address?: string | undefined }[] | undefined
                    contactManager?: string | undefined
                    phones?: { [x: string]: unknown }[] | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { contactId: string } } & {
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
            input: { query: { contactId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { contactId: string } } & {
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
    '/api/v1/omnichannel/contacts.search': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                searchText?: string | undefined
                unknown?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              contacts?:
                | {
                    _id?: string | undefined
                    createdAt?: string | undefined
                    name?: string | undefined
                    emails?: { address?: string | undefined }[] | undefined
                    phones?: { [x: string]: unknown }[] | undefined
                    channels?:
                      | {
                          name?: string | undefined
                          visitor?:
                            | {
                                visitorId?: string | undefined
                                source?: { type?: string | undefined } | undefined
                              }
                            | undefined
                          blocked?: boolean | undefined
                          verified?: boolean | undefined
                          details?:
                            | { type?: string | undefined; destination?: string | undefined }
                            | undefined
                          lastChat?:
                            | { _id?: string | undefined; ts?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    customFields?: { 'social-number'?: string | undefined } | undefined
                    unknown?: boolean | undefined
                    _updatedAt?: string | undefined
                    conflictingFields?: { [x: string]: unknown }[] | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
                    contactManager?:
                      | {
                          _id?: string | undefined
                          name?: string | undefined
                          username?: string | undefined
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
                searchText?: string | undefined
                unknown?: boolean | undefined
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
                searchText?: string | undefined
                unknown?: boolean | undefined
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
                sort?: { [x: string]: unknown } | undefined
                searchText?: string | undefined
                unknown?: boolean | undefined
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
    '/api/v1/omnichannel/contacts.channels': {
      $get:
        | {
            input: { query: { contactId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              channels?:
                | {
                    name?: string | undefined
                    visitor?:
                      | {
                          visitorId?: string | undefined
                          source?: { type?: string | undefined } | undefined
                        }
                      | undefined
                    blocked?: boolean | undefined
                    verified?: boolean | undefined
                    details?:
                      | { type?: string | undefined; destination?: string | undefined }
                      | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
                    field?: string | undefined
                    value?: string | undefined
                    verifiedAt?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { contactId: string } } & {
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
            input: { query: { contactId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/omnichannel/contacts.history': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                contactId: string
                source?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                contactId: string
                source?: string | undefined
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
                contactId: string
                source?: string | undefined
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
                sort?: { [x: string]: unknown } | undefined
                contactId: string
                source?: string | undefined
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
    '/api/v1/omnichannel/contacts.checkExistence': {
      $get:
        | {
            input: {
              query: {
                contactId?: string | undefined
                email?: string | undefined
                phone?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { exists?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                contactId?: string | undefined
                email?: string | undefined
                phone?: string | undefined
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
    }
  } & {
    '/api/v1/omnichannel/contacts.block': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { visitor: { visitorId: string; source: { type: string } } }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { visitor: { visitorId: string; source: { type: string } } }
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
              json: { visitor: { visitorId: string; source: { type: string } } }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/omnichannel/contacts.unblock': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { visitor: { visitorId: string; source: { type: string } } }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { visitor: { visitorId: string; source: { type: string } } }
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
              json: { visitor: { visitorId: string; source: { type: string } } }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/analytics/agent-overview': {
      $get:
        | {
            input: {
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              head?: { name?: string | undefined }[] | undefined
              data?: { name?: string | undefined; value?: string | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
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
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
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
    '/api/v1/livechat/analytics/overview': {
      $get:
        | {
            input: {
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { title?: string | undefined; value?: string | number | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
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
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { name: string; from: string; to: string; departmentId?: string | undefined }
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
    '/api/v1/livechat/config': {
      $get: {
        input: { query: { token?: string | undefined; department?: string | undefined } }
        output: {
          config?:
            | {
                enabled?: boolean | undefined
                settings?:
                  | {
                      registrationForm?: boolean | undefined
                      allowSwitchingDepartments?: boolean | undefined
                      nameFieldRegistrationForm?: boolean | undefined
                      emailFieldRegistrationForm?: boolean | undefined
                      displayOfflineForm?: boolean | undefined
                      videoCall?: boolean | undefined
                      fileUpload?: boolean | undefined
                      language?: string | undefined
                      transcript?: boolean | undefined
                      historyMonitorType?: string | undefined
                      forceAcceptDataProcessingConsent?: boolean | undefined
                      showConnecting?: boolean | undefined
                      agentHiddenInfo?: boolean | undefined
                      clearLocalStorageWhenChatEnded?: boolean | undefined
                      limitTextLength?: boolean | undefined
                    }
                  | undefined
                theme?:
                  | {
                      title?: string | undefined
                      color?: string | undefined
                      offlineTitle?: string | undefined
                      offlineColor?: string | undefined
                      actionLinks?:
                        | {
                            icon?: string | undefined
                            i18nLabel?: string | undefined
                            method_id?: string | undefined
                            params?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                messages?:
                  | {
                      offlineMessage?: string | undefined
                      offlineSuccessMessage?: string | undefined
                      offlineUnavailableMessage?: string | undefined
                      conversationFinishedMessage?: string | undefined
                      transcriptMessage?: string | undefined
                    }
                  | undefined
                survey?: { items?: string[] | undefined; values?: string[] | undefined } | undefined
                departments?:
                  | {
                      _id?: string | undefined
                      name?: string | undefined
                      showOnRegistration?: boolean | undefined
                      showOnOfflineForm?: boolean | undefined
                      departmentsAllowedToForward?: string[] | undefined
                    }[]
                  | undefined
                online?: boolean | undefined
                guest?:
                  | {
                      _id?: string | undefined
                      username?: string | undefined
                      token?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                room?:
                  | {
                      _id?: string | undefined
                      servedBy?:
                        | { _id?: string | undefined; username?: string | undefined }
                        | undefined
                      open?: boolean | undefined
                    }
                  | undefined
                agent?:
                  | {
                      _id?: string | undefined
                      emails?:
                        | { address?: string | undefined; verified?: boolean | undefined }[]
                        | undefined
                      name?: string | undefined
                      username?: string | undefined
                    }
                  | undefined
              }
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/livechat/rooms': {
      $get:
        | {
            input: {
              query: {
                agents?: string[] | undefined
                departmentId?: string | undefined
                open?: boolean | undefined
                createdAt?: string | undefined
                closedAt?: string | undefined
                tags?: string | undefined
                customFields?: string | undefined
                roomName?: string | undefined
                onhold?: boolean | undefined
                queued?: string | undefined
                units?: string[] | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              rooms?:
                | {
                    _id?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    lm?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    ts?: string | undefined
                    v?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          token?: string | undefined
                          status?: string | undefined
                        }
                      | undefined
                    servedBy?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          ts?: string | undefined
                        }
                      | undefined
                    cl?: boolean | undefined
                    open?: boolean | undefined
                    waitingResponse?: boolean | undefined
                    departmentId?: string | undefined
                    _updatedAt?: string | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          token?: string | undefined
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
                          mentions?: { [x: string]: unknown }[] | undefined
                          channels?: { [x: string]: unknown }[] | undefined
                          newRoom?: boolean | undefined
                          showConnecting?: boolean | undefined
                        }
                      | undefined
                    metrics?: { v?: { lq?: string | undefined } | undefined } | undefined
                    livechatData?: { docId?: string | undefined } | undefined
                    tags?: string[] | undefined
                    name?: string | undefined
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
                agents?: string[] | undefined
                departmentId?: string | undefined
                open?: boolean | undefined
                createdAt?: string | undefined
                closedAt?: string | undefined
                tags?: string | undefined
                customFields?: string | undefined
                roomName?: string | undefined
                onhold?: boolean | undefined
                queued?: string | undefined
                units?: string[] | undefined
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
                agents?: string[] | undefined
                departmentId?: string | undefined
                open?: boolean | undefined
                createdAt?: string | undefined
                closedAt?: string | undefined
                tags?: string | undefined
                customFields?: string | undefined
                roomName?: string | undefined
                onhold?: boolean | undefined
                queued?: string | undefined
                units?: string[] | undefined
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
    '/api/v1/livechat/room': {
      $get:
        | {
            input: {
              query: { token: string; rid?: string | undefined; agentId?: string | undefined }
            }
            output: {
              room?:
                | {
                    _id?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    v?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          token?: string | undefined
                          status?: string | undefined
                          lastMessageTs?: string | undefined
                        }
                      | undefined
                    departmentId?: string | undefined
                    default?: boolean | undefined
                    ro?: boolean | undefined
                    sysMes?: boolean | undefined
                    open?: boolean | undefined
                    msgs?: number | undefined
                    ts?: string | undefined
                    _updatedAt?: string | undefined
                    lm?: string | undefined
                    customFields?: { salesforceCrmContactId?: string | undefined } | undefined
                    usersCount?: number | undefined
                    cl?: boolean | undefined
                    departmentAncestors?: string[] | undefined
                    lastMessage?:
                      | {
                          _id?: string | undefined
                          rid?: string | undefined
                          msg?: string | undefined
                          token?: string | undefined
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
                          newRoom?: boolean | undefined
                          showConnecting?: boolean | undefined
                        }
                      | undefined
                    metrics?:
                      | {
                          reaction?:
                            | {
                                fd?: string | undefined
                                ft?: number | undefined
                                tt?: number | undefined
                              }
                            | undefined
                          response?:
                            | {
                                avg?: number | undefined
                                fd?: string | undefined
                                ft?: number | undefined
                                total?: number | undefined
                                tt?: number | undefined
                              }
                            | undefined
                          v?: { lq?: string | undefined } | undefined
                          servedBy?: { lr?: string | undefined } | undefined
                        }
                      | undefined
                    servedBy?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          ts?: string | undefined
                        }
                      | undefined
                    waitingResponse?: boolean | undefined
                  }
                | undefined
              newRoom?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { token: string; rid?: string | undefined; agentId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/livechat/room.close': {
      $post:
        | {
            input: { json: { rid: string; token: string } }
            output: {
              rid?: string | undefined
              comment?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rid: string; token: string } }
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
    '/api/v1/livechat/room.closeByUser': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                rid: string
                comment?: string | undefined
                forceClose?: boolean | undefined
                tags?: string[] | undefined
                generateTranscriptPdf?: boolean | undefined
                transcriptEmail?:
                  | {
                      sendToVisitor?: boolean | undefined
                      requestData?:
                        | { email?: string | undefined; subject?: string | undefined }
                        | undefined
                    }
                  | undefined
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
                comment?: string | undefined
                forceClose?: boolean | undefined
                tags?: string[] | undefined
                generateTranscriptPdf?: boolean | undefined
                transcriptEmail?:
                  | {
                      sendToVisitor?: boolean | undefined
                      requestData?:
                        | { email?: string | undefined; subject?: string | undefined }
                        | undefined
                    }
                  | undefined
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
                comment?: string | undefined
                forceClose?: boolean | undefined
                tags?: string[] | undefined
                generateTranscriptPdf?: boolean | undefined
                transcriptEmail?:
                  | {
                      sendToVisitor?: boolean | undefined
                      requestData?:
                        | { email?: string | undefined; subject?: string | undefined }
                        | undefined
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
    '/api/v1/livechat/room.join': {
      $get:
        | {
            input: { query: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
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
            status: 403
          }
    }
  } & {
    '/api/v1/livechat/room.saveInfo': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                guestData?:
                  | {
                      _id: string
                      name?: string | undefined
                      email?: string | undefined
                      phone?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                roomData?:
                  | {
                      _id: string
                      topic?: string | undefined
                      tags?: string[] | undefined
                      priorityId?: string | undefined
                      slaId?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                guestData?:
                  | {
                      _id: string
                      name?: string | undefined
                      email?: string | undefined
                      phone?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                roomData?:
                  | {
                      _id: string
                      topic?: string | undefined
                      tags?: string[] | undefined
                      priorityId?: string | undefined
                      slaId?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
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
                guestData?:
                  | {
                      _id: string
                      name?: string | undefined
                      email?: string | undefined
                      phone?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                roomData?:
                  | {
                      _id: string
                      topic?: string | undefined
                      tags?: string[] | undefined
                      priorityId?: string | undefined
                      slaId?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                guestData?:
                  | {
                      _id: string
                      name?: string | undefined
                      email?: string | undefined
                      phone?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                roomData?:
                  | {
                      _id: string
                      topic?: string | undefined
                      tags?: string[] | undefined
                      priorityId?: string | undefined
                      slaId?: string | undefined
                      livechatData?: { [x: string]: unknown } | undefined
                    }
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
    '/api/v1/livechat/room.forward': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                roomId: string
                userId?: string | undefined
                departmentId?: string | undefined
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
                userId?: string | undefined
                departmentId?: string | undefined
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
                userId?: string | undefined
                departmentId?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/transfer.history/:rid': {
      $get:
        | {
            input: { param: { rid: string } } & {
              query: {
                count?: number | undefined
                offset?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              history?: { [x: string]: unknown }[] | undefined
              count?: number | undefined
              offset?: number | undefined
              data?:
                | {
                    history?:
                      | {
                          transferredBy?:
                            | {
                                _id?: string | undefined
                                username?: string | undefined
                                name?: string | undefined
                                type?: string | undefined
                              }
                            | undefined
                          ts?: string | undefined
                          scope?: string | undefined
                          previousDepartment?: string | undefined
                          nextDepartment?:
                            | { _id?: string | undefined; name?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    count?: number | undefined
                    offset?: number | undefined
                    total?: number | undefined
                    success?: boolean | undefined
                  }
                | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              query: {
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
            input: { param: { rid: string } } & {
              query: {
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
    '/api/v1/livechat/room.survey': {
      $post:
        | {
            input: {
              json: {
                rid: string
                token: string
                data: { name?: string | undefined; value?: string | undefined }[]
              }
            }
            output: {
              rid?: string | undefined
              data?: { additionalFeedback?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                rid: string
                token: string
                data: { name?: string | undefined; value?: string | undefined }[]
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
    '/api/v1/livechat/room.onHold': {
      $post:
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
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
            input: { header: { 'X-User-Id': string; 'X-Auth-Token': string } } & {
              json: { roomId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/upload/:rid': {
      $post:
        | {
            input: { param: { rid: string } } & { header: { 'x-visitor-token': string } } & {
              form: { file: string; description?: string | undefined }
            }
            output: {
              _id?: string | undefined
              rid?: string | undefined
              msg?: string | undefined
              token?: string | undefined
              file?:
                | { _id?: string | undefined; name?: string | undefined; type?: string | undefined }
                | undefined
              attachments?:
                | {
                    ts?: string | undefined
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
                    description?: string | undefined
                    descriptionMd?:
                      | {
                          type?: string | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
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
              urls?: { [x: string]: unknown }[] | undefined
              mentions?: { [x: string]: unknown }[] | undefined
              channels?: { [x: string]: unknown }[] | undefined
              newRoom?: boolean | undefined
              showConnecting?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & { header: { 'x-visitor-token': string } } & {
              form: { file: string; description?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/livechat/room/:rid/priority': {
      $post:
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { priorityId: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { priorityId: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { priorityId: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { priorityId: string } }
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
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rid: string } } & {
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
    '/api/v1/livechat/rooms.removeAllClosedRooms': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { removedRooms?: number | undefined; success?: boolean | undefined }
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
    '/api/v1/livechat/rooms.delete': {
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
              errorType?: string | undefined
              error?: string | undefined
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
    '/api/v1/livechat/room.resumeOnHold': {
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
    '/api/v1/livechat/rooms/filters': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              filters?:
                | {
                    type?: string | undefined
                    id?: string | undefined
                    alias?: string | undefined
                    sidebarIcon?: string | undefined
                    defaultIcon?: string | undefined
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
    '/api/v1/livechat/visitor/department.transfer': {
      $post:
        | {
            input: { json: { token: string; rid: string; department: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string; rid: string; department: string } }
            output: {
              success?: boolean | undefined
              errorType?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/livechat/department': {
      $get:
        | {
            input: {
              query: {
                text?: string | undefined
                enabled?: boolean | undefined
                showArchived?: boolean | undefined
                onlyMyDepartments?: boolean | undefined
                excludeDepartmentId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    name?: string | undefined
                    description?: string | undefined
                    showOnRegistration?: boolean | undefined
                    showOnOfflineForm?: boolean | undefined
                    requestTagBeforeClosingChat?: boolean | undefined
                    email?: string | undefined
                    chatClosingTags?: { [x: string]: unknown }[] | undefined
                    offlineMessageChannelName?: string | undefined
                    abandonedRoomsCloseCustomMessage?: string | undefined
                    waitingQueueMessage?: string | undefined
                    departmentsAllowedToForward?: { [x: string]: unknown }[] | undefined
                    fallbackForwardDepartment?: string | undefined
                    _updatedAt?: string | undefined
                    numAgents?: number | undefined
                    type?: string | undefined
                    businessHourId?: string | undefined
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
                enabled?: boolean | undefined
                showArchived?: boolean | undefined
                onlyMyDepartments?: boolean | undefined
                excludeDepartmentId?: string | undefined
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
                text?: string | undefined
                enabled?: boolean | undefined
                showArchived?: boolean | undefined
                onlyMyDepartments?: boolean | undefined
                excludeDepartmentId?: string | undefined
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
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?: { agentId?: string | undefined; order?: number | undefined }[] | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
              }
            }
            output: {
              department?:
                | {
                    enabled?: boolean | undefined
                    name?: string | undefined
                    numAgents?: number | undefined
                    showOnRegistration?: boolean | undefined
                    _updatedAt?: string | undefined
                    _id?: string | undefined
                  }
                | undefined
              agents?:
                | {
                    agentId?: string | undefined
                    count?: number | undefined
                    order?: number | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?: { agentId?: string | undefined; order?: number | undefined }[] | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
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
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?: { agentId?: string | undefined; order?: number | undefined }[] | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?: { agentId?: string | undefined; order?: number | undefined }[] | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
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
    '/api/v1/livechat/department/:_id': {
      $get:
        | {
            input: { param: { _id: string } } & {
              query: { includeAgents?: boolean | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              department?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    name?: string | undefined
                    description?: string | undefined
                    numAgents?: number | undefined
                    showOnRegistration?: boolean | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              agents?:
                | {
                    _id?: string | undefined
                    agentId?: string | undefined
                    departmentId?: string | undefined
                    username?: string | undefined
                    count?: number | undefined
                    order?: number | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              query: { includeAgents?: boolean | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { _id: string } } & {
              query: { includeAgents?: boolean | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?:
                  | {
                      agentId?: string | undefined
                      count?: string | undefined
                      order?: string | undefined
                    }[]
                  | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
              }
            }
            output: {
              department?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    name?: string | undefined
                    description?: string | undefined
                    numAgents?: number | undefined
                    showOnRegistration?: boolean | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
              agents?:
                | {
                    _id?: string | undefined
                    agentId?: string | undefined
                    departmentId?: string | undefined
                    username?: string | undefined
                    count?: number | undefined
                    order?: number | undefined
                    _updatedAt?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?:
                  | {
                      agentId?: string | undefined
                      count?: string | undefined
                      order?: string | undefined
                    }[]
                  | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
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
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?:
                  | {
                      agentId?: string | undefined
                      count?: string | undefined
                      order?: string | undefined
                    }[]
                  | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                department: {
                  enabled: boolean
                  showOnRegistration: boolean
                  name: string
                  email: string
                  showOnOfflineForm: boolean
                  description?: string | undefined
                }
                agents?:
                  | {
                      agentId?: string | undefined
                      count?: string | undefined
                      order?: string | undefined
                    }[]
                  | undefined
                departmentUnit?: { _id?: string | undefined } | undefined
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
    '/api/v1/livechat/department.autocomplete': {
      $get:
        | {
            input: {
              query: {
                selector: string
                onlyMyDepartments?: boolean | undefined
                showArchived?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              items?: { _id?: string | undefined; name?: string | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                selector: string
                onlyMyDepartments?: boolean | undefined
                showArchived?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                selector: string
                onlyMyDepartments?: boolean | undefined
                showArchived?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/department/:_id/agents': {
      $get:
        | {
            input: { param: { _id: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              agents?:
                | {
                    _id?: string | undefined
                    agentId?: string | undefined
                    departmentId?: string | undefined
                    _updatedAt?: string | undefined
                    count?: number | undefined
                    departmentEnabled?: boolean | undefined
                    order?: number | undefined
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
            input: { param: { _id: string } } & {
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
        | {
            input: { param: { _id: string } } & {
              query: {
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
      $post:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                upsert: { agentId: string; username: string }[]
                remove: { [x: string]: unknown }[]
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                upsert: { agentId: string; username: string }[]
                remove: { [x: string]: unknown }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                upsert: { agentId: string; username: string }[]
                remove: { [x: string]: unknown }[]
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
    '/api/v1/livechat/department.listByIds': {
      $get:
        | {
            input: { query: { ids: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    name?: string | undefined
                    description?: string | undefined
                    showOnRegistration?: boolean | undefined
                    showOnOfflineForm?: boolean | undefined
                    requestTagBeforeClosingChat?: boolean | undefined
                    email?: string | undefined
                    chatClosingTags?: { [x: string]: unknown }[] | undefined
                    offlineMessageChannelName?: string | undefined
                    abandonedRoomsCloseCustomMessage?: string | undefined
                    waitingQueueMessage?: string | undefined
                    departmentsAllowedToForward?: string | undefined
                    _updatedAt?: string | undefined
                    numAgents?: number | undefined
                    ancestors?: string[] | undefined
                    maxNumberSimultaneousChat?: string | undefined
                    type?: string | undefined
                    visitorInactivityTimeoutInSeconds?: string | undefined
                    parentId?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { ids: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & {
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
    '/api/v1/livechat/analytics/departments/amount-of-chats': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                start: string
                end: string
                answered?: boolean | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?: { rooms?: number | undefined; _id?: string | undefined }[] | undefined
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
                start: string
                end: string
                answered?: boolean | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                answered?: boolean | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                answered?: boolean | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/average-service-time': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | { _id?: string | undefined; averageServiceTimeInSeconds?: number | undefined }[]
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/average-chat-duration-time': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    averageChatDurationTimeInSeconds?: number | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/total-service-time': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    chats?: number | undefined
                    serviceTimeDuration?: number | undefined
                  }[]
                | undefined
              count?: number | undefined
              offset?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/average-waiting-time': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | { _id?: string | undefined; averageWaitingTimeInSeconds?: number | undefined }[]
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/total-transferred-chats': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | { numberOfTransferredRooms?: number | undefined; _id?: string | undefined }[]
                | undefined
              count?: number | undefined
              offset?: number | undefined
              total?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/total-abandoned-chats': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | { abandonedRooms?: number | undefined; _id?: string | undefined }[]
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/analytics/departments/percentage-abandoned-chats': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | { _id?: string | undefined; percentageOfAbandonedChats?: number | undefined }[]
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
                departmentId?: string | undefined
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
    '/api/v1/livechat/departments/archived': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    showOnRegistration?: boolean | undefined
                    name?: string | undefined
                    email?: string | undefined
                    showOnOfflineForm?: boolean | undefined
                    type?: string | undefined
                    _updatedAt?: string | undefined
                    abandonedRoomsCloseCustomMessage?: string | undefined
                    allowReceiveForwardOffline?: boolean | undefined
                    chatClosingTags?: { [x: string]: unknown }[] | undefined
                    departmentsAllowedToForward?: { [x: string]: unknown }[] | undefined
                    description?: string | undefined
                    fallbackForwardDepartment?: string | undefined
                    offlineMessageChannelName?: string | undefined
                    requestTagBeforeClosingChat?: boolean | undefined
                    waitingQueueMessage?: string | undefined
                    numAgents?: number | undefined
                    ancestors?: string[] | undefined
                    parentId?: string | undefined
                    archived?: boolean | undefined
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
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/department/:_id/archive': {
      $post:
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
    '/api/v1/livechat/department/:_id/unarchive': {
      $post:
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
    '/api/v1/livechat/department/isDepartmentCreationAvailable': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              isDepartmentCreationAvailable?: boolean | undefined
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
    '/api/v1/livechat/custom-fields.save': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                customFieldId?: string | undefined
                customFieldData: {
                  field?: string | undefined
                  label?: string | undefined
                  visibility?: string | undefined
                  scope?: string | undefined
                  type?: string | undefined
                  searchable?: boolean | undefined
                  regexp?: string | undefined
                  required?: boolean | undefined
                  defaultValue?: string | undefined
                  options?: string | undefined
                  public?: boolean | undefined
                }
              }
            }
            output: {
              customField?:
                | {
                    label?: string | undefined
                    scope?: string | undefined
                    visibility?: string | undefined
                    type?: string | undefined
                    searchable?: boolean | undefined
                    regexp?: string | undefined
                    required?: boolean | undefined
                    defaultValue?: string | undefined
                    options?: string | undefined
                    public?: boolean | undefined
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
              json: {
                customFieldId?: string | undefined
                customFieldData: {
                  field?: string | undefined
                  label?: string | undefined
                  visibility?: string | undefined
                  scope?: string | undefined
                  type?: string | undefined
                  searchable?: boolean | undefined
                  regexp?: string | undefined
                  required?: boolean | undefined
                  defaultValue?: string | undefined
                  options?: string | undefined
                  public?: boolean | undefined
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
                customFieldId?: string | undefined
                customFieldData: {
                  field?: string | undefined
                  label?: string | undefined
                  visibility?: string | undefined
                  scope?: string | undefined
                  type?: string | undefined
                  searchable?: boolean | undefined
                  regexp?: string | undefined
                  required?: boolean | undefined
                  defaultValue?: string | undefined
                  options?: string | undefined
                  public?: boolean | undefined
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
    '/api/v1/livechat/custom.field': {
      $post:
        | {
            input: { json: { token: string; key: string; value: string; overwrite: boolean } }
            output: {
              field?:
                | {
                    key?: string | undefined
                    value?: string | undefined
                    overwrite?: boolean | undefined
                  }
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string; key: string; value: string; overwrite: boolean } }
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
    '/api/v1/livechat/custom.fields': {
      $post:
        | {
            input: {
              json: {
                token: string
                customFields: { key: string; value: string; overwrite: boolean }[]
              }
            }
            output: {
              fields?:
                | {
                    Key?: string | undefined
                    value?: string | undefined
                    overwrite?: boolean | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                token: string
                customFields: { key: string; value: string; overwrite: boolean }[]
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
    '/api/v1/livechat/custom-fields': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              customFields?:
                | {
                    _id?: string | undefined
                    label?: string | undefined
                    scope?: string | undefined
                    visibility?: string | undefined
                    regexp?: string | undefined
                    searchable?: boolean | undefined
                    type?: string | undefined
                    required?: boolean | undefined
                    defaultValue?: string | undefined
                    options?: string | undefined
                    public?: boolean | undefined
                    _updatedAt?: string | undefined
                    id?: string | undefined
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
    '/api/v1/livechat/custom-fields/:_id': {
      $get:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              customField?:
                | {
                    _id?: string | undefined
                    label?: string | undefined
                    scope?: string | undefined
                    visibility?: string | undefined
                    regexp?: string | undefined
                    searchable?: boolean | undefined
                    type?: string | undefined
                    required?: boolean | undefined
                    defaultValue?: string | undefined
                    options?: string | undefined
                    public?: boolean | undefined
                    _updatedAt?: string | undefined
                    id?: string | undefined
                  }
                | undefined
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
    '/api/v1/livechat/custom-fields.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { customFieldId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { customFieldId: string }
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
              json: { customFieldId: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { customFieldId: string }
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
    '/api/v1/livechat/page.visited': {
      $post:
        | {
            input: {
              json: {
                token: string
                rid?: string | undefined
                pageInfo: { change: string; title: string; location: { href: string } }
              }
            }
            output: {
              page?:
                | {
                    msg?: string | undefined
                    navigation?:
                      | {
                          page?:
                            | {
                                change?: string | undefined
                                title?: string | undefined
                                location?: { href?: string | undefined } | undefined
                              }
                            | undefined
                          token?: string | undefined
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
              json: {
                token: string
                rid?: string | undefined
                pageInfo: { change: string; title: string; location: { href: string } }
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
    '/api/v1/livechat/transcript': {
      $post:
        | {
            input: { json: { rid: string; token: string; email: string } }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rid: string; token: string; email: string } }
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
    '/api/v1/livechat/transcript/:rid': {
      $post:
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { email: string; subject: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { email: string; subject: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { email: string; subject: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { email: string; subject: string } }
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
            input: { param: { rid: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rid: string } } & {
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
    '/api/v1/omnichannel/:rid/request-transcript': {
      $post:
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rid: string } } & {
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
    '/api/v1/livechat/agents/:agentId/departments': {
      $get:
        | {
            input: { param: { agentId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    agentId?: string | undefined
                    departmentId?: string | undefined
                    _updatedAt?: string | undefined
                    count?: number | undefined
                    departmentEnabled?: boolean | undefined
                    order?: number | undefined
                    username?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/analytics/agents/average-service-time': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              agents?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    averageServiceTimeInSeconds?: number | undefined
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
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
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
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                count?: number | undefined
                offset?: number | undefined
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
    '/api/v1/livechat/analytics/agents/total-service-time': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              agents?:
                | {
                    chats?: number | undefined
                    _id?: string | undefined
                    username?: string | undefined
                    serviceTimeDuration?: number | undefined
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
                start: string
                end: string
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
                start: string
                end: string
                offset?: number | undefined
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
                start: string
                end: string
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
            status: 403
          }
    }
  } & {
    '/api/v1/livechat/analytics/agents/available-for-service-history': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                fullReport?: boolean | undefined
                offset?: number | undefined
                count?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              agents?:
                | {
                    serviceHistory?:
                      | { startedAt?: string | undefined; stoppedAt?: string | undefined }[]
                      | undefined
                    availableTimeInSeconds?: number | undefined
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
                start: string
                end: string
                fullReport?: boolean | undefined
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
                start: string
                end: string
                fullReport?: boolean | undefined
                offset?: number | undefined
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
                start: string
                end: string
                fullReport?: boolean | undefined
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
            status: 403
          }
    }
  } & {
    '/api/v1/livechat/appearance': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              appearance?:
                | {
                    _id?: string | undefined
                    type?: string | undefined
                    group?: string | undefined
                    public?: boolean | undefined
                    i18nLabel?: string | undefined
                    packageValue?: boolean | undefined
                    valueSource?: string | undefined
                    hidden?: boolean | undefined
                    blocked?: boolean | undefined
                    sorter?: number | undefined
                    i18nDescription?: string | undefined
                    autocomplete?: boolean | undefined
                    ts?: string | undefined
                    _updatedAt?: string | undefined
                    createdAt?: string | undefined
                    value?: boolean | undefined
                    secret?: boolean | undefined
                    section?: string | undefined
                    enterprise?: boolean | undefined
                    requiredOnWizard?: boolean | undefined
                    env?: boolean | undefined
                    enableQuery?: string | undefined
                    editor?: string | undefined
                    packageEditor?: string | undefined
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
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
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
              json: { _id: string; value: boolean }[]
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; value: boolean }[]
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
              json: { _id: string; value: boolean }[]
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; value: boolean }[]
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
    '/api/v1/livechat/business-hours': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              businessHours?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    active?: boolean | undefined
                    type?: string | undefined
                    ts?: string | undefined
                    workHours?:
                      | {
                          day?: string | undefined
                          start?:
                            | {
                                time?: string | undefined
                                utc?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                                cron?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                              }
                            | undefined
                          finish?:
                            | {
                                time?: string | undefined
                                utc?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                                cron?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                              }
                            | undefined
                          open?: boolean | undefined
                        }[]
                      | undefined
                    timezone?: { name?: string | undefined; utc?: string | undefined } | undefined
                    _updatedAt?: string | undefined
                    departmentsToApplyBusinessHour?: string | undefined
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
                name?: string | undefined
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
    '/api/v1/livechat/business-hour': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              businessHour?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    active?: boolean | undefined
                    type?: string | undefined
                    ts?: string | undefined
                    workHours?:
                      | {
                          day?: string | undefined
                          start?:
                            | {
                                time?: string | undefined
                                utc?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                                cron?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                              }
                            | undefined
                          finish?:
                            | {
                                time?: string | undefined
                                utc?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                                cron?:
                                  | { dayOfWeek?: string | undefined; time?: string | undefined }
                                  | undefined
                              }
                            | undefined
                          code?: number | undefined
                          open?: boolean | undefined
                        }[]
                      | undefined
                    timezone?: { name?: string | undefined; utc?: string | undefined } | undefined
                    _updatedAt?: string | undefined
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
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
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
    '/api/v1/livechat/business-hours.remove': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; type: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { _id: string; type: string }
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
              json: { _id: string; type: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/business-hours.save': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                timezoneName: string
                daysOpen: string[]
                departmentsToApplyBusinessHour: string
                active: boolean
                type: string
                workHours: { day: string; start: string; finish: string; open: boolean }[]
                _id?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                name: string
                timezoneName: string
                daysOpen: string[]
                departmentsToApplyBusinessHour: string
                active: boolean
                type: string
                workHours: { day: string; start: string; finish: string; open: boolean }[]
                _id?: string | undefined
              }
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
              json: {
                name: string
                timezoneName: string
                daysOpen: string[]
                departmentsToApplyBusinessHour: string
                active: boolean
                type: string
                workHours: { day: string; start: string; finish: string; open: boolean }[]
                _id?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/analytics/dashboards/conversation-totalizers': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              totalizers?: { title?: string | undefined; value?: number | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/agents-productivity-totalizers': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              totalizers?: { title?: string | undefined; value?: string | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/chats-totalizers': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/productivity-totalizers': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              totalizers?: { title?: string | undefined; value?: string | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/charts/chats': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              open?: number | undefined
              closed?: number | undefined
              queued?: number | undefined
              onhold?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/charts/chats-per-agent': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              'test.cat'?: { open?: number | undefined; closed?: number | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/charts/agents-status': {
      $get:
        | {
            input: { query: { departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              offline?: number | undefined
              away?: number | undefined
              busy?: number | undefined
              available?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/charts/chats-per-department': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              Test?: { open?: number | undefined; closed?: number | undefined } | undefined
              Sales?: { open?: number | undefined; closed?: number | undefined } | undefined
              Finance?: { open?: number | undefined; closed?: number | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/analytics/dashboards/charts/timings': {
      $get:
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              response?: { avg?: number | undefined; longest?: number | undefined } | undefined
              reaction?: { avg?: number | undefined; longest?: number | undefined } | undefined
              chatDuration?: { avg?: number | undefined; longest?: number | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string; departmentId?: string | undefined } } & {
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
    '/api/v1/livechat/livechat/analytics/dashboards/charts-data': {
      $get:
        | {
            input: {
              query: {
                start: string
                end: string
                chartName: string
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              chartLabel?: string | undefined
              dataLabels?: string[] | undefined
              dataPoints?: number[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start: string
                end: string
                chartName: string
                departmentId?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start: string
                end: string
                chartName: string
                departmentId?: string | undefined
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
    '/api/v1/livechat/inquiries.list': {
      $get:
        | {
            input: {
              query: {
                department?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              inquiries?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    name?: string | undefined
                    ts?: string | undefined
                    status?: string | undefined
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
                department?: string | undefined
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
                department?: string | undefined
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
    '/api/v1/livechat/inquiries.take': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { inquiryId: string; userId?: string | undefined }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { inquiryId: string; userId?: string | undefined }
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
              json: { inquiryId: string; userId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { inquiryId: string; userId?: string | undefined }
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
    '/api/v1/livechat/inquiries.queuedForUser': {
      $get:
        | {
            input: {
              query: {
                department?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-User-Id': string; 'X-Auth-Token': string } }
            output: {
              inquiries?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    name?: string | undefined
                    ts?: string | undefined
                    department?: string | undefined
                    message?: string | undefined
                    status?: string | undefined
                    v?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          token?: string | undefined
                          status?: string | undefined
                        }
                      | undefined
                    t?: string | undefined
                    queueOrder?: number | undefined
                    estimatedWaitingTimeQueue?: number | undefined
                    estimatedServiceTimeAt?: string | undefined
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
                department?: string | undefined
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
                department?: string | undefined
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
    '/api/v1/livechat/inquiries.getOne': {
      $get:
        | {
            input: { query: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              inquiry?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    name?: string | undefined
                    ts?: string | undefined
                    message?: string | undefined
                    status?: string | undefined
                    v?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          token?: string | undefined
                          status?: string | undefined
                          activity?: string[] | undefined
                        }
                      | undefined
                    t?: string | undefined
                    priorityWeight?: number | undefined
                    estimatedWaitingTimeQueue?: number | undefined
                    source?: { type?: string | undefined } | undefined
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
                    takenAt?: string | undefined
                  }
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
            status: 403
          }
    }
  } & {
    '/api/v1/livechat/inquiry.setSLA': {
      $put:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; sla: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; sla: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; sla: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; sla: string }
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
    '/api/v1/livechat/inquiries.returnAsInquiry': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; departmentId?: string | undefined }
            }
            output: { result?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; departmentId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { roomId: string; departmentId?: string | undefined }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/integrations.settings': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              settings?:
                | {
                    _id?: string | undefined
                    _updatedAt?: string | undefined
                    autocomplete?: boolean | undefined
                    blocked?: boolean | undefined
                    createdAt?: string | undefined
                    group?: string | undefined
                    hidden?: boolean | undefined
                    i18nDescription?: string | undefined
                    i18nLabel?: string | undefined
                    packageValue?: string | undefined
                    secret?: boolean | undefined
                    section?: string | undefined
                    sorter?: number | undefined
                    ts?: string | undefined
                    type?: string | undefined
                    value?: string | undefined
                    valueSource?: string | undefined
                    meteorSettingsValue?: string | undefined
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
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
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
    '/api/v1/livechat/queue': {
      $get:
        | {
            input: {
              query: {
                departmentId?: string | undefined
                agentId?: string | undefined
                includeOfflineAgents?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              queue?:
                | {
                    chats?: number | undefined
                    user?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          status?: string | undefined
                        }
                      | undefined
                    department?: { _id?: string | undefined; name?: string | undefined } | undefined
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
                departmentId?: string | undefined
                agentId?: string | undefined
                includeOfflineAgents?: string | undefined
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
                departmentId?: string | undefined
                agentId?: string | undefined
                includeOfflineAgents?: string | undefined
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
    '/api/v1/livechat/sms-incoming/:service': {
      $post: {
        input: { param: { service: string } } & {
          json: {
            From?: string | undefined
            To?: string | undefined
            Body?: string | undefined
            ToCountry?: string | undefined
            ToState?: string | undefined
            ToCity?: string | undefined
            ToZip?: string | undefined
            FromCountry?: string | undefined
            FromState?: string | undefined
            FromCity?: string | undefined
            FromZip?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v1/livechat/config/routing': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              config?:
                | {
                    previewRoom?: boolean | undefined
                    showConnecting?: boolean | undefined
                    showQueue?: boolean | undefined
                    showQueueLink?: boolean | undefined
                    returnQueue?: boolean | undefined
                    enableTriggerAction?: boolean | undefined
                    autoAssignAgent?: boolean | undefined
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
    '/api/v1/livechat/triggers': {
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
              triggers?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    description?: string | undefined
                    enabled?: boolean | undefined
                    runOnce?: boolean | undefined
                    conditions?:
                      | { name?: string | undefined; value?: string | undefined }[]
                      | undefined
                    actions?:
                      | {
                          name?: string | undefined
                          params?:
                            | { sender?: string | undefined; msg?: string | undefined }
                            | undefined
                        }[]
                      | undefined
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
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                _id?: string | undefined
                name: string
                description: string
                enabled: boolean
                runOnce: boolean
                conditions: { name?: string | undefined; value?: number | string | undefined }[]
                actions: {
                  name?: string | undefined
                  params?:
                    | {
                        sender?: string | undefined
                        name?: string | undefined
                        msg?: string | undefined
                        serviceUrl?: string | undefined
                        serviceTimeout?: number | undefined
                        serviceFallbackMessage?: string | undefined
                      }
                    | undefined
                }[]
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                _id?: string | undefined
                name: string
                description: string
                enabled: boolean
                runOnce: boolean
                conditions: { name?: string | undefined; value?: number | string | undefined }[]
                actions: {
                  name?: string | undefined
                  params?:
                    | {
                        sender?: string | undefined
                        name?: string | undefined
                        msg?: string | undefined
                        serviceUrl?: string | undefined
                        serviceTimeout?: number | undefined
                        serviceFallbackMessage?: string | undefined
                      }
                    | undefined
                }[]
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
                _id?: string | undefined
                name: string
                description: string
                enabled: boolean
                runOnce: boolean
                conditions: { name?: string | undefined; value?: number | string | undefined }[]
                actions: {
                  name?: string | undefined
                  params?:
                    | {
                        sender?: string | undefined
                        name?: string | undefined
                        msg?: string | undefined
                        serviceUrl?: string | undefined
                        serviceTimeout?: number | undefined
                        serviceFallbackMessage?: string | undefined
                      }
                    | undefined
                }[]
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
                description: string
                enabled: boolean
                runOnce: boolean
                conditions: { name?: string | undefined; value?: number | string | undefined }[]
                actions: {
                  name?: string | undefined
                  params?:
                    | {
                        sender?: string | undefined
                        name?: string | undefined
                        msg?: string | undefined
                        serviceUrl?: string | undefined
                        serviceTimeout?: number | undefined
                        serviceFallbackMessage?: string | undefined
                      }
                    | undefined
                }[]
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
    '/api/v1/livechat/triggers/:_id': {
      $get:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              trigger?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    description?: string | undefined
                    enabled?: boolean | undefined
                    runOnce?: boolean | undefined
                    conditions?:
                      | { name?: string | undefined; value?: string | undefined }[]
                      | undefined
                    actions?:
                      | {
                          name?: string | undefined
                          params?:
                            | { sender?: string | undefined; msg?: string | undefined }
                            | undefined
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
            output: { success?: boolean | undefined }
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
    '/api/v1/livechat/triggers/external-service/test': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { webhookUrl: string; timeout: string; fallbackMessage: string }
            }
            output: {
              triggerId?: string | undefined
              response?:
                | {
                    statusCode?: number | undefined
                    contents?:
                      | { msg?: string | undefined; order?: number | undefined }[]
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
              json: { webhookUrl: string; timeout: string; fallbackMessage: string }
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
              json: { webhookUrl: string; timeout: string; fallbackMessage: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/monitors': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              monitors?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    emails?:
                      | { address?: string | undefined; verified?: boolean | undefined }[]
                      | undefined
                    status?: string | undefined
                    name?: string | undefined
                    statusLivechat?: string | undefined
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
    '/api/v1/livechat/monitors/:username': {
      $get:
        | {
            input: { param: { username: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              username?: string | undefined
              emails?:
                | { address?: string | undefined; verified?: boolean | undefined }[]
                | undefined
              status?: string | undefined
              name?: string | undefined
              statusLivechat?: string | undefined
              livechat?: { maxNumberSimultaneousChat?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } } & {
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
    '/api/v1/livechat/monitors.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
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
              json: { username: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/monitors.create': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
            }
            output: {
              _id?: string | undefined
              username?: string | undefined
              roles?: string[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { username: string }
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
              json: { username: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/priorities': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                text?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              priorities?:
                | {
                    _id?: string | undefined
                    i18n?: string | undefined
                    sortItem?: number | undefined
                    dirty?: boolean | undefined
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
    '/api/v1/livechat/priorities/:priorityId': {
      $get:
        | {
            input: { param: { priorityId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              i18n?: string | undefined
              sortItem?: number | undefined
              dirty?: boolean | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priorityId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { priorityId: string } } & {
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
      $put:
        | {
            input: { param: { priorityId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { name: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priorityId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
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
            input: { param: { priorityId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & { json: { name: string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { priorityId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
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
    '/api/v1/livechat/priorities.reset': {
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
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { reset?: boolean | undefined; success?: boolean | undefined }
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
    '/api/v1/livechat/tags': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                count?: number | undefined
                text?: string | undefined
                department?: string | undefined
                viewAll?: boolean | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              tags?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    numDepartments?: number | undefined
                    departments?: string[] | undefined
                    _updatedAt?: string | undefined
                    description?: string | undefined
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
                text?: string | undefined
                department?: string | undefined
                viewAll?: boolean | undefined
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
                offset?: number | undefined
                count?: number | undefined
                text?: string | undefined
                department?: string | undefined
                viewAll?: boolean | undefined
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
    '/api/v1/livechat/tags/:tagId': {
      $get:
        | {
            input: { param: { tagId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              name?: string | undefined
              numDepartments?: number | undefined
              departments?: string[] | undefined
              _updatedAt?: string | undefined
              description?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tagId: string } } & {
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
            input: { param: { tagId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/livechat/tags.delete': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { id: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { id: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { id: string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/tags.save': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                tagData: { name?: string | undefined; description?: string | undefined }
                tagDepartments?: string[] | undefined
                _id?: string | undefined
              }
            }
            output: {
              name?: string | undefined
              description?: string | undefined
              numDepartments?: number | undefined
              departments?: string[] | undefined
              _id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                tagData: { name?: string | undefined; description?: string | undefined }
                tagDepartments?: string[] | undefined
                _id?: string | undefined
              }
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
              json: {
                tagData: { name?: string | undefined; description?: string | undefined }
                tagDepartments?: string[] | undefined
                _id?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/units': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
              }
            }
            output: {
              name?: string | undefined
              visibility?: string | undefined
              type?: string | undefined
              numMonitors?: number | undefined
              numDepartments?: number | undefined
              _updatedAt?: string | undefined
              _id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
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
      $get:
        | {
            input: {
              query: {
                text?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              units?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    visibility?: string | undefined
                    type?: string | undefined
                    numMonitors?: number | undefined
                    numDepartments?: number | undefined
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
                text?: string | undefined
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
                text?: string | undefined
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
    '/api/v1/livechat/units/:id': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
              }
            }
            output: {
              name?: string | undefined
              visibility?: string | undefined
              type?: string | undefined
              numMonitors?: number | undefined
              numDepartments?: number | undefined
              _updatedAt?: string | undefined
              _id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            } & {
              json: {
                unitData: { name: string; visibility: string }
                unitMonitors: { monitorId: string; username: string }[]
                unitDepartments: { departmentId: string }[]
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
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
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
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              name?: string | undefined
              visibility?: string | undefined
              type?: string | undefined
              numMonitors?: number | undefined
              numDepartments?: number | undefined
              _updatedAt?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
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
    '/api/v1/livechat/units/:unitId/monitors': {
      $get:
        | {
            input: { param: { unitId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              monitors?:
                | {
                    _id?: string | undefined
                    monitorId?: string | undefined
                    unitId?: string | undefined
                    _updatedAt?: string | undefined
                    username?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { unitId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { unitId: string } } & {
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
    '/api/v1/livechat/units/:unitId/departments/available': {
      $get:
        | {
            input: { param: { unitId: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                text?: string | undefined
                onlyMyDepartments?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    name?: string | undefined
                    description?: string | undefined
                    showOnRegistration?: boolean | undefined
                    showOnOfflineForm?: boolean | undefined
                    requestTagBeforeClosingChat?: boolean | undefined
                    email?: string | undefined
                    chatClosingTags?: { [x: string]: unknown }[] | undefined
                    offlineMessageChannelName?: string | undefined
                    abandonedRoomsCloseCustomMessage?: string | undefined
                    waitingQueueMessage?: string | undefined
                    departmentsAllowedToForward?: { [x: string]: unknown }[] | undefined
                    fallbackForwardDepartment?: string | undefined
                    _updatedAt?: string | undefined
                    numAgents?: number | undefined
                    type?: string | undefined
                    ancestors?: string[] | undefined
                    parentId?: string | undefined
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
            input: { param: { unitId: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                text?: string | undefined
                onlyMyDepartments?: boolean | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { unitId: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                text?: string | undefined
                onlyMyDepartments?: boolean | undefined
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
    '/api/v1/livechat/units/:unitId/departments': {
      $get:
        | {
            input: { param: { unitId: string } } & {
              query: { offset?: number | undefined; count?: number | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              departments?:
                | {
                    _id?: string | undefined
                    enabled?: boolean | undefined
                    name?: string | undefined
                    description?: string | undefined
                    showOnRegistration?: boolean | undefined
                    showOnOfflineForm?: boolean | undefined
                    requestTagBeforeClosingChat?: boolean | undefined
                    email?: string | undefined
                    chatClosingTags?: string[] | undefined
                    offlineMessageChannelName?: string | undefined
                    maxNumberSimultaneousChat?: string | undefined
                    visitorInactivityTimeoutInSeconds?: string | undefined
                    abandonedRoomsCloseCustomMessage?: string | undefined
                    waitingQueueMessage?: string | undefined
                    departmentsAllowedToForward?: string | undefined
                    _updatedAt?: string | undefined
                    numAgents?: number | undefined
                    ancestors?: string[] | undefined
                    parentId?: string | undefined
                    fallbackForwardDepartment?: string | undefined
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
            input: { param: { unitId: string } } & {
              query: { offset?: number | undefined; count?: number | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { unitId: string } } & {
              query: { offset?: number | undefined; count?: number | undefined }
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
    '/api/v1/livechat/analytics/dashboards/conversations-by-status': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              total?: number | undefined
              data?: { label?: string | undefined; value?: number | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
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
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
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
    '/api/v1/livechat/analytics/dashboards/conversations-by-department': {
      $get:
        | {
            input: {
              query: { start: string; end: string; sort?: { [x: string]: unknown } | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              total?: number | undefined
              data?: { label?: string | undefined; value?: number | undefined }[] | undefined
              unspecified?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { start: string; end: string; sort?: { [x: string]: unknown } | undefined }
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
              query: { start: string; end: string; sort?: { [x: string]: unknown } | undefined }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { start: string; end: string; sort?: { [x: string]: unknown } | undefined }
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
    '/api/v1/livechat/analytics/dashboards/conversations-by-tags': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              total?: number | undefined
              data?: { label?: string | undefined; value?: number | undefined }[] | undefined
              unspecified?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
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
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
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
    '/api/v1/livechat/analytics/dashboards/conversations-by-agent': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: {
              total?: number | undefined
              data?: { label?: string | undefined; value?: number | undefined }[] | undefined
              unspecified?: number | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
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
            input: { query: { start: string; end: string } } & {
              header: { 'X-User-Id': string; 'X-Auth-Token': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { start: string; end: string } } & {
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
    '/api/v1/livechat/analytics/dashboards/conversations-by-source': {
      $get:
        | {
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              total?: number | undefined
              data?: { label?: string | undefined; value?: number | undefined }[] | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start: string; end: string } } & {
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
            input: { query: { start: string; end: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/sla': {
      $get:
        | {
            input: {
              query: {
                text?: string | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              sla?:
                | {
                    _id?: string | undefined
                    name?: string | undefined
                    description?: string | undefined
                    dueTimeInMinutes?: number | undefined
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
                text?: string | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                text?: string | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                offset?: number | undefined
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
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; description: string; dueTimeInMinutes: number }
            }
            output: {
              sla?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    dueTimeInMinutes?: number | undefined
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
              json: { name: string; description: string; dueTimeInMinutes: number }
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
              json: { name: string; description: string; dueTimeInMinutes: number }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: { name: string; description: string; dueTimeInMinutes: number }
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
    '/api/v1/livechat/sla/:slaId': {
      $get:
        | {
            input: { param: { slaId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              _id?: string | undefined
              name?: string | undefined
              description?: string | undefined
              dueTimeInMinutes?: number | undefined
              _updatedAt?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slaId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slaId: string } } & {
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
      $put:
        | {
            input: { param: { slaId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              sla?:
                | {
                    name?: string | undefined
                    description?: string | undefined
                    dueTimeInMinutes?: number | undefined
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
            input: { param: { slaId: string } } & {
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
            input: { param: { slaId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slaId: string } } & {
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
            input: { param: { slaId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slaId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { slaId: string } } & {
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
    '/api/v1/livechat/visitor': {
      $post:
        | {
            input: {
              json: {
                visitor: {
                  name?: string | undefined
                  email?: string | undefined
                  department?: string | undefined
                  token: string
                  phone?: string | undefined
                  username?: string | undefined
                  customFields?:
                    | {
                        key?: string | undefined
                        value?: string | undefined
                        overwrite?: boolean | undefined
                      }[]
                    | undefined
                }
              }
            }
            output: {
              visitor?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    ts?: string | undefined
                    _updatedAt?: string | undefined
                    name?: string | undefined
                    phone?: { phoneNumber?: string | undefined }[] | undefined
                    token?: string | undefined
                    visitorEmails?: { address?: string | undefined }[] | undefined
                    department?: string | undefined
                    externalIds?:
                      | {
                          appId?: string | undefined
                          entityId?: string | undefined
                          metadata?: { [x: string]: unknown } | undefined
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
              json: {
                visitor: {
                  name?: string | undefined
                  email?: string | undefined
                  department?: string | undefined
                  token: string
                  phone?: string | undefined
                  username?: string | undefined
                  customFields?:
                    | {
                        key?: string | undefined
                        value?: string | undefined
                        overwrite?: boolean | undefined
                      }[]
                    | undefined
                }
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/livechat/visitor/:token': {
      $get: {
        input: { param: { token: string } }
        output: {
          visitor?:
            | {
                _id?: string | undefined
                username?: string | undefined
                _updatedAt?: string | undefined
                token?: string | undefined
                phone?: { phoneNumber?: string | undefined }[] | undefined
                visitorEmails?: { address?: string | undefined }[] | undefined
                name?: string | undefined
                livechatData?: { address?: string | undefined } | undefined
                externalIds?:
                  | {
                      appId?: string | undefined
                      entityId?: string | undefined
                      metadata?: { [x: string]: unknown } | undefined
                    }[]
                  | undefined
              }
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { token: string } }
        output: {
          visitor?: { _id?: string | undefined; ts?: string | undefined } | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/livechat/visitors.info': {
      $get:
        | {
            input: { query: { visitorId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              visitor?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    status?: string | undefined
                    ts?: string | undefined
                    _updatedAt?: string | undefined
                    name?: string | undefined
                    phone?: { phoneNumber?: string | undefined }[] | undefined
                    visitorEmails?: { address?: string | undefined }[] | undefined
                    department?: string | undefined
                    externalIds?:
                      | {
                          appId?: string | undefined
                          entityId?: string | undefined
                          metadata?: { [x: string]: unknown } | undefined
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
            input: { query: { visitorId: string } } & {
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
            input: { query: { visitorId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { visitorId: string } } & {
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
    '/api/v1/livechat/visitor/:token/room': {
      $get:
        | {
            input: { param: { token: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              rooms?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
                    cl?: boolean | undefined
                    servedBy?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          ts?: string | undefined
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
            input: { param: { token: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/visitors.search': {
      $get:
        | {
            input: {
              query: {
                term: string
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              visitors?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                    visitorEmails?: { address?: string | undefined }[] | undefined
                    lastChat?: { _id?: string | undefined; ts?: string | undefined } | undefined
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
                term: string
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
                term: string
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
    '/api/v1/livechat/visitors.pagesVisited/:roomId': {
      $get:
        | {
            input: { param: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              pages?:
                | {
                    _id?: string | undefined
                    t?: string | undefined
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
                    navigation?:
                      | {
                          page?:
                            | {
                                change?: string | undefined
                                title?: string | undefined
                                location?: { href?: string | undefined } | undefined
                              }
                            | undefined
                          token?: string | undefined
                        }
                      | undefined
                    expireAt?: number | undefined
                    _updatedAt?: string | undefined
                    rid?: string | undefined
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
            input: { param: { roomId: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/visitors.chatHistory/room/:roomId/visitor/:visitorId': {
      $get:
        | {
            input: { param: { roomId: string; visitorId: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              history?:
                | {
                    _id?: string | undefined
                    msgs?: number | undefined
                    usersCount?: number | undefined
                    lm?: string | undefined
                    fname?: string | undefined
                    t?: string | undefined
                    ts?: string | undefined
                    departmentId?: string | undefined
                    v?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          status?: string | undefined
                          lastMessageTs?: string | undefined
                        }
                      | undefined
                    cl?: boolean | undefined
                    open?: boolean | undefined
                    _updatedAt?: string | undefined
                    departmentAncestors?: string[] | undefined
                    lastMessage?:
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
                          unread?: boolean | undefined
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
                          newRoom?: boolean | undefined
                          showConnecting?: boolean | undefined
                        }
                      | undefined
                    metrics?:
                      | {
                          reaction?:
                            | {
                                fd?: string | undefined
                                ft?: number | undefined
                                tt?: number | undefined
                              }
                            | undefined
                          response?:
                            | {
                                avg?: number | undefined
                                fd?: string | undefined
                                ft?: number | undefined
                                total?: number | undefined
                                tt?: number | undefined
                              }
                            | undefined
                          v?: { lq?: string | undefined } | undefined
                        }
                      | undefined
                    waitingResponse?: boolean | undefined
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
            input: { param: { roomId: string; visitorId: string } } & {
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
    '/api/v1/livechat/visitors.searchChats/room/:roomId/visitor/:visitorId': {
      $get:
        | {
            input: { param: { roomId: string; visitorId: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                searchText?: string | undefined
                closedChatsOnly?: string | undefined
                servedChatsOnly?: string | undefined
                source?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              history?:
                | {
                    _id?: string | undefined
                    msgs?: number | undefined
                    fname?: string | undefined
                    ts?: string | undefined
                    v?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          status?: string | undefined
                          lastMessageTs?: string | undefined
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
            input: { param: { roomId: string; visitorId: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                searchText?: string | undefined
                closedChatsOnly?: string | undefined
                servedChatsOnly?: string | undefined
                source?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/visitors.autocomplete': {
      $get:
        | {
            input: { query: { selector: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              items?:
                | {
                    _id?: string | undefined
                    username?: string | undefined
                    name?: string | undefined
                    custom_name?: string | undefined
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
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
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
    '/api/v1/livechat/visitor.status': {
      $post:
        | {
            input: { json: { token: string; status: string } }
            output: {
              token?: string | undefined
              status?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string; status: string } }
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
    '/api/v1/canned-responses': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                shortcut: string
                text: string
                scope: string
                tags?: string[] | undefined
                departmentId?: string | undefined
                _id?: string | undefined
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                shortcut: string
                text: string
                scope: string
                tags?: string[] | undefined
                departmentId?: string | undefined
                _id?: string | undefined
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
                shortcut: string
                text: string
                scope: string
                tags?: string[] | undefined
                departmentId?: string | undefined
                _id?: string | undefined
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                shortcut: string
                text: string
                scope: string
                tags?: string[] | undefined
                departmentId?: string | undefined
                _id?: string | undefined
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
      $get:
        | {
            input: {
              query: {
                shortcut?: string | undefined
                text?: string | undefined
                scope?: string | undefined
                tags?: string | undefined
                departmentId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                createdBy?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              cannedResponses?:
                | {
                    _id?: string | undefined
                    shortcut?: string | undefined
                    text?: string | undefined
                    scope?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _createdAt?: string | undefined
                    _updatedAt?: string | undefined
                    tags?: string[] | undefined
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
                shortcut?: string | undefined
                text?: string | undefined
                scope?: string | undefined
                tags?: string | undefined
                departmentId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                createdBy?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                shortcut?: string | undefined
                text?: string | undefined
                scope?: string | undefined
                tags?: string | undefined
                departmentId?: string | undefined
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                createdBy?: string | undefined
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
    '/api/v1/canned-responses.get': {
      $get:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              responses?:
                | {
                    _id?: string | undefined
                    shortcut?: string | undefined
                    text?: string | undefined
                    scope?: string | undefined
                    departmentId?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _createdAt?: string | undefined
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
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
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
    '/api/v1/canned-responses/:_id': {
      $get:
        | {
            input: { param: { _id: string } } & {
              header: { 'X-Auth-Token': string; 'X-User-Id': string }
            }
            output: {
              cannedResponse?:
                | {
                    _id?: string | undefined
                    shortcut?: string | undefined
                    text?: string | undefined
                    scope?: string | undefined
                    userId?: string | undefined
                    createdBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    _createdAt?: string | undefined
                    _updatedAt?: string | undefined
                  }
                | undefined
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
            output: { success?: boolean | undefined }
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
    }
  } & {
    '/api/v1/livechat/message': {
      $post:
        | {
            input: {
              json: {
                token: string
                rid: string
                msg: string
                _id?: string | undefined
                agent?: { agentId?: string | undefined; username?: string | undefined } | undefined
              }
            }
            output: {
              message?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    token?: string | undefined
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
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                token: string
                rid: string
                msg: string
                _id?: string | undefined
                agent?: { agentId?: string | undefined; username?: string | undefined } | undefined
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
    '/api/v1/livechat/messages': {
      $post:
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                visitor: { token?: string | undefined }
                messages: { msg?: string | undefined }[]
              }
            }
            output: {
              messages?:
                | {
                    username?: string | undefined
                    msg?: string | undefined
                    ts?: string | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
              json: {
                visitor: { token?: string | undefined }
                messages: { msg?: string | undefined }[]
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
                visitor: { token?: string | undefined }
                messages: { msg?: string | undefined }[]
              }
            }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/livechat/message/:_id': {
      $put: {
        input: { param: { _id: string } } & {
          json: { token?: string | undefined; rid?: string | undefined; msg?: string | undefined }
        }
        output: {
          message?:
            | {
                _id?: string | undefined
                msg?: string | undefined
                u?:
                  | {
                      _id?: string | undefined
                      username?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
                ls?: string | undefined
              }
            | undefined
          success?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { _id: string } } & { query: { token: string; rid: string } }
            output: {
              message?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    token?: string | undefined
                    alias?: string | undefined
                    ts?: string | undefined
                    u?:
                      | {
                          _id?: string | undefined
                          username?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    unread?: boolean | undefined
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
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & { query: { token: string; rid: string } }
            output: {
              success?: boolean | undefined
              error?: string | undefined
              errorType?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { _id: string } } & { json: { token: string; rid: string } }
            output: {
              message?: { _id?: string | undefined; ls?: string | undefined } | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { _id: string } } & { json: { token: string; rid: string } }
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
    '/api/v1/livechat/messages.history/:rid': {
      $get:
        | {
            input: { param: { rid: string } } & {
              query: {
                token: string
                ls?: { [x: string]: unknown } | undefined
                end?: { [x: string]: unknown } | undefined
                limit?: number | undefined
              }
            }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    msg?: string | undefined
                    token?: string | undefined
                    alias?: string | undefined
                    ls?: string | undefined
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
                    editedAt?: string | undefined
                    editedBy?:
                      | { _id?: string | undefined; username?: string | undefined }
                      | undefined
                    urls?: { [x: string]: unknown }[] | undefined
                  }[]
                | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rid: string } } & {
              query: {
                token: string
                ls?: { [x: string]: unknown } | undefined
                end?: { [x: string]: unknown } | undefined
                limit?: number | undefined
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
    '/api/v1/livechat/offline.message': {
      $post:
        | {
            input: {
              json: {
                name: string
                email: string
                message: string
                department: string
                host: string
              }
            }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                email: string
                message: string
                department: string
                host: string
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
    '/api/v1/livechat/:rid/messages': {
      $get:
        | {
            input: { param: { rid: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                searchTerm?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: {
              messages?:
                | {
                    _id?: string | undefined
                    rid?: string | undefined
                    ts?: string | undefined
                    msg?: string | undefined
                    groupable?: boolean | undefined
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
                          description?: string | undefined
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
                    token?: string | undefined
                    alias?: string | undefined
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
            input: { param: { rid: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                searchTerm?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rid: string } } & {
              query: {
                offset?: number | undefined
                count?: number | undefined
                sort?: { [x: string]: unknown } | undefined
                searchTerm?: string | undefined
              }
            } & { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
            output: { success?: boolean | undefined; error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/omnichannel/integrations': {
      $post: {
        input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } } & {
          json: {
            LivechatWebhookUrl?: string | undefined
            LivechatSecretToken?: string | undefined
            LivechatHttpTimeout?: number | undefined
            LivechatWebhookOnStart?: boolean | undefined
            LivechatWebhookOnClose?: boolean | undefined
            LivechatWebhookOnChatTaken?: boolean | undefined
            LivechatWebhookOnChatQueued?: boolean | undefined
            LivechatWebhookOnForward?: boolean | undefined
            LivechatWebhookOnOfflineMsg?: boolean | undefined
            LivechatWebhookOnVisitorMessage?: boolean | undefined
            LivechatWebhookOnAgentMessage?: boolean | undefined
          }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/livechat/webhook.test': {
      $post: {
        input: { header: { 'X-Auth-Token': string; 'X-User-Id': string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
