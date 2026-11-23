declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/action/organization_activity_list': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_activity_list_html': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_autocomplete': {
      $get: {
        input: { query: { q?: string | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_follower_count': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_follower_list': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_list': {
      $get: {
        input: { query: { offset?: number | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_list_for_user': {
      $get: {
        input: { query: { permission?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_revision_list': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/organization_show': {
      $get: {
        input: { query: { id?: string | undefined; include_datasets?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_activity_list': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_activity_list_html': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_autocomplete': {
      $get: {
        input: { query: { q?: string | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_list': {
      $get: {
        input: { query: { offset?: number | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_relationships_list': {
      $get: {
        input: {
          query: { id?: string | undefined; id2?: string | undefined; rel?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_revision_list': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_search': {
      $get: {
        input: { query: { q?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/package_show': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/related_list': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            dataset?: string | undefined
            type_filter?: string | undefined
            sort?: string | undefined
            featured?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/resource_search': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            fields?: string | undefined
            order_by?: string | undefined
            offset?: number | undefined
            limit?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/resource_show': {
      $get: {
        input: { query: { id?: string | undefined; include_tracking?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/action/status_show': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/action/tag_list': {
      $get: {
        input: { query: { offset?: number | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
