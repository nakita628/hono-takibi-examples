declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/appstore/v1/application_charges.json': {
      $post: {
        input: {
          json: {
            application_charge?: { application_charge_source_id?: string | undefined } | undefined
          }
        }
        output: {
          application_charge?:
            | {
                id?: string | undefined
                make_date?: number | undefined
                point?: number | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/appstore/v1/installation.json': {
      $delete: {
        input: {}
        output: {
          account_id?: string | undefined
          application_charge_source_id?: string | undefined
          recurring_application_charge_id?: string | undefined
          uninstalled_at?: number | undefined
          usage_charge?:
            | { api_token?: string | undefined; closing_on?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/appstore/v1/recurring_application_charges/:recurringApplicationChargeId/usage_charges.json': {
      $post: {
        input: { param: { recurringApplicationChargeId: string } } & {
          header: { 'X-Appstore-Usage-Charge-Token'?: string | undefined }
        } & { json: { usage_charge?: { description: string; point: number } | undefined } }
        output: {
          usage_charge?:
            | {
                description?: string | undefined
                id?: string | undefined
                make_date?: number | undefined
                point?: number | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/appstore/v1/script_tags.json': {
      $get: {
        input: {}
        output: {
          script_tags?:
            | {
                account_id?: string | undefined
                display_scope?: 'shop' | 'thanks_page' | undefined
                id?: number | undefined
                integrity?: string | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            script_tag?:
              | {
                  display_scope?: 'shop' | 'thanks_page' | undefined
                  integrity?: string | undefined
                  src?: string | undefined
                }
              | undefined
          }
        }
        output: {
          script_tag?:
            | {
                account_id?: string | undefined
                display_scope?: 'shop' | 'thanks_page' | undefined
                id?: number | undefined
                integrity?: string | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/appstore/v1/script_tags/:scriptTagId.json': {
      $delete: {
        input: { param: { scriptTagId: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { scriptTagId: number } }
        output: {
          script_tag?:
            | {
                account_id?: string | undefined
                display_scope?: 'shop' | 'thanks_page' | undefined
                id?: number | undefined
                integrity?: string | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { scriptTagId: number } } & {
          json: {
            script_tag?:
              | {
                  display_scope?: 'shop' | 'thanks_page' | undefined
                  integrity?: string | undefined
                  src?: string | undefined
                }
              | undefined
          }
        }
        output: {
          script_tag?:
            | {
                account_id?: string | undefined
                display_scope?: 'shop' | 'thanks_page' | undefined
                id?: number | undefined
                integrity?: string | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/inline_script_tags.json': {
      $get: {
        input: {}
        output: {
          inline_script_tags?:
            | {
                account_id?: string | undefined
                display_scope?: 'all' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                script?: string | undefined
                trigger_event?: 'object_builded' | undefined
                update_date?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            inline_script_tag?:
              | {
                  display_scope?: 'all' | 'thanks_page' | 'cart' | undefined
                  script?: string | undefined
                  trigger_event?: 'object_builded' | undefined
                }
              | undefined
          }
        }
        output: {
          inline_script_tag?:
            | {
                account_id?: string | undefined
                display_scope?: 'all' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                script?: string | undefined
                trigger_event?: 'object_builded' | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/inline_script_tags/:inlineScriptTagId.json': {
      $delete: {
        input: { param: { inlineScriptTagId: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { inlineScriptTagId: number } }
        output: {
          inline_script_tag?:
            | {
                account_id?: string | undefined
                display_scope?: 'all' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                script?: string | undefined
                trigger_event?: 'object_builded' | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inlineScriptTagId: number } } & {
          json: {
            inline_script_tag?:
              | {
                  display_scope?: 'all' | 'thanks_page' | 'cart' | undefined
                  script?: string | undefined
                  trigger_event?: 'object_builded' | undefined
                }
              | undefined
          }
        }
        output: {
          inline_script_tag?:
            | {
                account_id?: string | undefined
                display_scope?: 'all' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                oauth_application_id?: number | undefined
                script?: string | undefined
                trigger_event?: 'object_builded' | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/script_tags.json': {
      $get: {
        input: {}
        output: {
          script_tags?:
            | {
                display_scope?: 'all' | 'shop' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            script_tag?:
              | {
                  display_scope?: 'all' | 'shop' | 'thanks_page' | 'cart' | undefined
                  src?: string | undefined
                }
              | undefined
          }
        }
        output: {
          script_tag?:
            | {
                display_scope?: 'all' | 'shop' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/script_tags/:scriptTagId.json': {
      $delete: {
        input: { param: { scriptTagId: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { scriptTagId: number } }
        output: {
          script_tag?:
            | {
                display_scope?: 'all' | 'shop' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { scriptTagId: number } } & {
          json: {
            script_tag?:
              | {
                  display_scope?: 'all' | 'shop' | 'thanks_page' | 'cart' | undefined
                  src?: string | undefined
                }
              | undefined
          }
        }
        output: {
          script_tag?:
            | {
                display_scope?: 'all' | 'shop' | 'thanks_page' | 'cart' | undefined
                id?: number | undefined
                make_date?: number | undefined
                src?: string | undefined
                update_date?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
