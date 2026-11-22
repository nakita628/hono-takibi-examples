type Folders = {
  id?: string | undefined
  name?: string | undefined
  parent?: string | Folders | undefined
  type?: 'files' | 'flows' | undefined
}
type Files = {
  id?: string | undefined
  storage?: string | undefined
  filename_disk?: string | undefined
  filename_download?: string | undefined
  title?: string | undefined
  type?: string | undefined
  folder?: string | Folders | undefined
  created_on?: string | undefined
  uploaded_by?: string | Users | undefined
  uploaded_on?: string | undefined
  charset?: (string | null) | undefined
  filesize?: number | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
  duration?: (number | null) | undefined
  embed?: (string | null) | undefined
  description?: (string | null) | undefined
  location?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
}
type Roles = {
  id?: string | undefined
  name?: string | undefined
  icon?: string | undefined
  description?: (string | null) | undefined
  ip_access?: string[] | undefined
  enforce_tfa?: boolean | undefined
  admin_access?: boolean | undefined
  app_access?: boolean | undefined
}
type Users = {
  id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  location?: (string | null) | undefined
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  avatar?: string | Files | undefined
  language?: string | undefined
  theme?: 'light' | 'dark' | 'auto' | undefined
  tfa_secret?: (string | null) | undefined
  status?: 'active' | 'invited' | 'draft' | 'suspended' | 'deleted' | undefined
  role?: string | Roles | undefined
  token?: (string | null) | undefined
  last_access?: (string | null) | undefined
  last_page?: (string | null) | undefined
}
type Collections = {
  collection?: string | undefined
  meta?:
    | ({
        collection?: string | undefined
        icon?: (string | null) | undefined
        color?: (string | null) | undefined
        note?: (string | null) | undefined
        display_template?: (string | null) | undefined
        hidden?: boolean | undefined
        singleton?: boolean | undefined
        translations?: (string | null) | undefined
        versioning?: boolean | undefined
        archive_field?: (string | null) | undefined
        archive_app_filter?: (string | null) | undefined
        archive_value?: (string | null) | undefined
        unarchive_value?: (string | null) | undefined
        sort_field?: (string | null) | undefined
      } | null)
    | undefined
  schema?:
    | {
        name?: string | undefined
        schema?: string | undefined
        comment?: (string | null) | undefined
      }
    | undefined
}
type Activity = {
  id?: number | undefined
  action?: 'create' | 'update' | 'delete' | 'login' | undefined
  user?: string | Users | undefined
  timestamp?: string | undefined
  ip?: string | undefined
  user_agent?: string | undefined
  origin?: string | undefined
  collection?: string | Collections | undefined
  item?: string | undefined
  comment?: (string | null) | undefined
}
type Metadata = { total_count?: number | undefined; filter_count?: number | undefined }
type Error = { message: string; extensions: { code: string } }
type Presets = {
  id?: number | undefined
  bookmark?: (string | null) | undefined
  user?: string | Users | undefined
  role?: string | Roles | undefined
  collection?: string | Collections | undefined
  search?: (string | null) | undefined
  filters?: ({ [x: string]: unknown }[] | null) | undefined
  layout?: string | undefined
  layout_query?: ({ [x: string]: unknown } | null) | undefined
  layout_options?: ({ [x: string]: unknown } | null) | undefined
}
type Comments = {
  id?: string | undefined
  collection?: string | Collections | undefined
  item?: string | undefined
  comment?: string | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  user_created?: string | Users | undefined
  user_updated?: string | Users | undefined
}
type Extensions = {
  bundle?: (string | null) | undefined
  name?: string | undefined
  meta?: { enabled?: boolean | undefined } | undefined
  schema?: { type?: string | undefined; local?: boolean | undefined } | undefined
}
type Fields = {
  collection?: string | undefined
  field?: string | undefined
  type?: string | undefined
  schema?:
    | {
        name?: string | undefined
        table?: string | undefined
        type?: string | undefined
        default_value?: (string | null) | undefined
        max_length?: (number | null) | undefined
        is_nullable?: boolean | undefined
        is_primary_key?: boolean | undefined
        has_auto_increment?: boolean | undefined
        foreign_key_column?: (string | null) | undefined
        foreign_key_table?: (string | null) | undefined
        comment?: (string | null) | undefined
        schema?: string | undefined
        foreign_key_schema?: (string | null) | undefined
      }
    | undefined
  meta?:
    | ({
        id?: number | undefined
        collection?: string | undefined
        field?: string | undefined
        special?: (string[] | null) | undefined
        'system-interface'?: (string | null) | undefined
        options?: ({ [x: string]: unknown } | null) | undefined
        display?: (string | null) | undefined
        display_options?: ({ [x: string]: unknown } | null) | undefined
        locked?: boolean | undefined
        readonly?: boolean | undefined
        hidden?: boolean | undefined
        sort?: (number | null) | undefined
        width?: 'half' | 'half-left' | 'half-right' | 'full' | 'fill' | null | undefined
        group?: (number | null) | undefined
        translations?: ({ [x: string]: unknown } | null) | undefined
        note?: (string | null) | undefined
      } | null)
    | undefined
}
type Operations = {
  id?: string | undefined
  name?: string | undefined
  key?: string | undefined
  type?: string | undefined
  options?: ({ [x: string]: unknown } | null) | undefined
  position_x?: number | undefined
  position_y?: number | undefined
  date_created?: (string | null) | undefined
  user_created?: string | Users | undefined
  resolve?: string | Operations | undefined
  reject?: string | Operations | undefined
  operation?: string | Flows | undefined
}
type Flows = {
  id?: string | undefined
  name?: string | undefined
  icon?: string | undefined
  color?: (string | null) | undefined
  note?: string | undefined
  status?: 'active' | 'inactive' | undefined
  trigger?: string | undefined
  options?: ({ [x: string]: unknown } | null) | undefined
  accountability?: string | undefined
  date_created?: (string | null) | undefined
  user_created?: string | Users | undefined
  operation?: string | Operations | undefined
  folder?: string | Folders | undefined
}
type Permissions = {
  id?: number | undefined
  role?: (string | null) | undefined
  collection?: string | undefined
  action?: 'create' | 'read' | 'update' | 'delete' | undefined
  permissions?: ({ [x: string]: unknown } | null) | undefined
  validation?: ({ [x: string]: unknown } | null) | undefined
  presets?: ({ [x: string]: unknown } | null) | undefined
  fields?: (string[] | null) | undefined
}
type Relations = {
  id?: number | undefined
  many_collection?: string | undefined
  many_field?: string | undefined
  many_primary?: string | undefined
  one_collection?: string | undefined
  one_field?: (string | null) | undefined
  one_primary?: string | undefined
  junction_field?: (string | null) | undefined
}
type Versions = {
  id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  collection?: string | Collections | undefined
  item?: string | undefined
  date_created?: (string | null) | undefined
  date_updated?: (string | null) | undefined
  user_created?: string | Users | undefined
  user_updated?: string | Users | undefined
  delta?: { [x: string]: unknown } | undefined
}
type Revisions = {
  id?: number | undefined
  activity?: number | Activity | undefined
  collection?: string | Collections | undefined
  item?: string | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  delta?: { [x: string]: unknown } | undefined
  parent?: (number | null) | undefined
  version?: string | Versions | undefined
}
type Schema = {
  version?: number | undefined
  directus?: string | undefined
  vendor?: string | undefined
  collections?: Collections[] | undefined
  fields?: Fields[] | undefined
  relations?: Relations[] | undefined
}
type Diff = {
  hash?: string | undefined
  diff?:
    | {
        collections?:
          | { collection?: string | undefined; diff?: { [x: string]: unknown }[] | undefined }[]
          | undefined
        fields?:
          | {
              collection?: string | undefined
              field?: string | undefined
              diff?: { [x: string]: unknown }[] | undefined
            }[]
          | undefined
        relations?:
          | {
              collection?: string | undefined
              field?: string | undefined
              related_collection?: string | undefined
              diff?: { [x: string]: unknown }[] | undefined
            }[]
          | undefined
      }
    | undefined
}
type Settings = {
  id?: number | undefined
  project_name?: string | undefined
  project_url?: (string | null) | undefined
  project_color?: (string | null) | undefined
  project_logo?: (string | null) | undefined
  public_foreground?: (string | null) | undefined
  public_background?: ({ id?: string | undefined; type?: string | undefined } | null) | undefined
  public_note?: (string | null) | undefined
  auth_login_attempts?: number | undefined
  auth_password_policy?: (string | null) | undefined
  storage_default_folder?: string | undefined
  default_exports_folder?: (string | null) | undefined
  storage_asset_transform?: 'all' | 'none' | 'presets' | undefined
  storage_asset_presets?:
    | (
        | {
            key?: string | undefined
            fit?: 'cover' | 'contain' | 'inside' | 'outside' | undefined
            width?: number | undefined
            height?: number | undefined
            withoutEnlargement?: boolean | undefined
            quality?: number | undefined
            format?: '' | 'jpeg' | 'png' | 'webp' | 'tiff' | 'avif' | undefined
            transforms?:
              | (
                  | {
                      method?: string | undefined
                      arguments?: ({ argument?: string | undefined }[] | null) | undefined
                    }[]
                  | null
                )
              | undefined
          }[]
        | null
      )
    | undefined
}
type Query = {
  fields?: string[] | undefined
  filter?: { [x: string]: unknown } | undefined
  search?: string | undefined
  sort?: string[] | undefined
  limit?: number | undefined
  offset?: number | undefined
  page?: number | undefined
  meta?: string | ('total_count' | 'filter_count')[] | undefined
  aggregate?:
    | {
        count?: string | string[] | undefined
        countDistinct?: string | string[] | undefined
        sum?: string | string[] | undefined
        sumDistinct?: string | string[] | undefined
        avg?: string | string[] | undefined
        avgDistinct?: string | string[] | undefined
        min?: string | string[] | undefined
        max?: string | string[] | undefined
      }
    | undefined
  groupBy?: string[] | undefined
  deep?: { [x: string]: unknown } | undefined
  alias?: { [x: string]: unknown } | undefined
  export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
  version?: string | undefined
  versionRaw?: boolean | undefined
  backlink?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/activity': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Activity[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/activity/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { data?: Activity | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/assets/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                key?: string | undefined
                transforms?: string | undefined
                download?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                key?: string | undefined
                transforms?: string | undefined
                download?: boolean | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/auth/login': {
      $post: {
        input: {
          json: {
            email: string
            password: string
            mode?: 'json' | 'cookie' | 'session' | undefined
            otp?: string | undefined
          }
        }
        output: {
          data?:
            | {
                access_token?: string | undefined
                expires?: number | undefined
                refresh_token?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/refresh': {
      $post:
        | {
            input: {
              json: {
                refresh_token?: string | undefined
                mode?: 'json' | 'cookie' | 'session' | undefined
              }
            }
            output: {
              data?:
                | {
                    access_token?: string | undefined
                    expires?: number | undefined
                    refresh_token?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                refresh_token?: string | undefined
                mode?: 'json' | 'cookie' | 'session' | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/auth/logout': {
      $post: {
        input: {
          json: {
            refresh_token?: string | undefined
            mode?: 'json' | 'cookie' | 'session' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/password/request': {
      $post: {
        input: { json: { email: string } }
        output: { errors?: Error[] | undefined }
        outputFormat: 'json'
        status: 401
      }
    }
  } & {
    '/auth/password/reset': {
      $post: {
        input: { json: { token: string; password: string } }
        output: { errors?: Error[] | undefined }
        outputFormat: 'json'
        status: 401
      }
    }
  } & {
    '/auth/oauth': {
      $get:
        | {
            input: {}
            output: { public?: boolean | undefined; data?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/auth/oauth/:provider': {
      $get:
        | {
            input: { param: { provider: string } } & { query: { redirect?: string | undefined } }
            output: {
              public?: boolean | undefined
              data?: { token?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string } } & { query: { redirect?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/items/:collection': {
      $get:
        | {
            input: { param: { collection: string } } & {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                version?: string | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: { [x: string]: unknown }[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                version?: string | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { collection: string } } & { json: unknown }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & { json: unknown }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { collection: string } } & {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            }
            output: { data?: { [x: string]: unknown }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { collection: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { collection: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/items/:collection/:id': {
      $get:
        | {
            input: { param: { collection: string; id: number | string } } & {
              query: {
                fields?: string[] | undefined
                version?: string | undefined
                versionRaw?: boolean | undefined
              }
            }
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string; id: number | string } } & {
              query: {
                fields?: string[] | undefined
                version?: string | undefined
                versionRaw?: boolean | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string; id: number | string } } & {
              query: {
                fields?: string[] | undefined
                version?: string | undefined
                versionRaw?: boolean | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { collection: string; id: number | string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { [x: string]: unknown } }
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string; id: number | string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string; id: number | string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { collection: string; id: number | string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { collection: string; id: number | string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string; id: number | string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/presets': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Presets[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                collection: string
                title?: string | undefined
                role?: string | undefined
                search?: string | undefined
                filters?:
                  | {
                      key?: string | undefined
                      field?: string | undefined
                      operator?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                layout?: string | undefined
                layout_query?: string | undefined
                layout_options?: string | undefined
              }
            }
            output: { data?: Presets | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                collection: string
                title?: string | undefined
                role?: string | undefined
                search?: string | undefined
                filters?:
                  | {
                      key?: string | undefined
                      field?: string | undefined
                      operator?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                layout?: string | undefined
                layout_query?: string | undefined
                layout_options?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | {
                      collection: string
                      title?: string | undefined
                      role?: string | undefined
                      search?: string | undefined
                      filters?:
                        | {
                            key?: string | undefined
                            field?: string | undefined
                            operator?: string | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      layout?: string | undefined
                      layout_query?: string | undefined
                      layout_options?: string | undefined
                    }
                  | undefined
              }
            }
            output: { data?: Presets[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | {
                      collection: string
                      title?: string | undefined
                      role?: string | undefined
                      search?: string | undefined
                      filters?:
                        | {
                            key?: string | undefined
                            field?: string | undefined
                            operator?: string | undefined
                            value?: number | undefined
                          }[]
                        | undefined
                      layout?: string | undefined
                      layout_query?: string | undefined
                      layout_options?: string | undefined
                    }
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/presets/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { data?: Presets | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } } & {
              json: {
                collection: string
                title?: string | undefined
                role?: number | undefined
                search_query?: string | undefined
                filters?:
                  | {
                      field?: string | undefined
                      operator?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                view_type?: string | undefined
                view_query?: string | undefined
                view_options?: string | undefined
                translation?: { [x: string]: unknown } | undefined
              }
            }
            output: { data?: Presets | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } } & {
              json: {
                collection: string
                title?: string | undefined
                role?: number | undefined
                search_query?: string | undefined
                filters?:
                  | {
                      field?: string | undefined
                      operator?: string | undefined
                      value?: number | undefined
                    }[]
                  | undefined
                view_type?: string | undefined
                view_query?: string | undefined
                view_options?: string | undefined
                translation?: { [x: string]: unknown } | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/collections': {
      $get:
        | {
            input: {}
            output: { data?: Collections[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: { data?: Collections | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: unknown } | { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Collections | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                meta?:
                  | {
                      icon?: (string | null) | undefined
                      color?: (string | null) | undefined
                      note?: (string | null) | undefined
                      display_template?: (string | null) | undefined
                      hidden?: boolean | undefined
                      singleton?: boolean | undefined
                      translation?: (string | null) | undefined
                      versioning?: boolean | undefined
                      archive_field?: (string | null) | undefined
                      archive_app_filter?: (string | null) | undefined
                      archive_value?: (string | null) | undefined
                      unarchive_value?: (string | null) | undefined
                      sort_field?: (string | null) | undefined
                    }
                  | undefined
              }
            }
            output: { data?: Collections | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                meta?:
                  | {
                      icon?: (string | null) | undefined
                      color?: (string | null) | undefined
                      note?: (string | null) | undefined
                      display_template?: (string | null) | undefined
                      hidden?: boolean | undefined
                      singleton?: boolean | undefined
                      translation?: (string | null) | undefined
                      versioning?: boolean | undefined
                      archive_field?: (string | null) | undefined
                      archive_app_filter?: (string | null) | undefined
                      archive_value?: (string | null) | undefined
                      unarchive_value?: (string | null) | undefined
                      sort_field?: (string | null) | undefined
                    }
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                meta?:
                  | {
                      icon?: (string | null) | undefined
                      color?: (string | null) | undefined
                      note?: (string | null) | undefined
                      display_template?: (string | null) | undefined
                      hidden?: boolean | undefined
                      singleton?: boolean | undefined
                      translation?: (string | null) | undefined
                      versioning?: boolean | undefined
                      archive_field?: (string | null) | undefined
                      archive_app_filter?: (string | null) | undefined
                      archive_value?: (string | null) | undefined
                      unarchive_value?: (string | null) | undefined
                      sort_field?: (string | null) | undefined
                    }
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/comments': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Comments[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { collection: string; item: string; comment: string }
            }
            output: { data?: Comments | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { collection: string; item: string; comment: string }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | { collection: string; item?: string | undefined; comment?: string | undefined }
                  | undefined
              }
            }
            output: { data?: Comments[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | { collection: string; item?: string | undefined; comment?: string | undefined }
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/comments/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { data?: Comments | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { collection: string; item?: string | undefined; comment?: string | undefined }
            }
            output: { data?: Comments | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { collection: string; item?: string | undefined; comment?: string | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { collection: string; item?: string | undefined; comment?: string | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/extensions': {
      $get:
        | {
            input: {}
            output: { data?: Extensions[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/extensions/:name': {
      $patch:
        | {
            input: { param: { name: string } } & {
              json: { meta?: { enabled?: boolean | undefined } | undefined }
            }
            output: { data?: Extensions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              json: { meta?: { enabled?: boolean | undefined } | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              json: { meta?: { enabled?: boolean | undefined } | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/extensions/:bundle/:name': {
      $patch:
        | {
            input: { param: { bundle: string; name: string } } & {
              json: { meta?: { enabled?: boolean | undefined } | undefined }
            }
            output: { data?: Extensions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bundle: string; name: string } } & {
              json: { meta?: { enabled?: boolean | undefined } | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bundle: string; name: string } } & {
              json: { meta?: { enabled?: boolean | undefined } | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/fields': {
      $get:
        | { input: {}; output: { data?: Fields[] | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/fields/:collection': {
      $get:
        | {
            input: { param: { collection: string } }
            output: { data?: Fields[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { collection: string } } & {
              json: {
                field: string
                type: string
                schema?:
                  | {
                      name?: string | undefined
                      table?: string | undefined
                      type?: string | undefined
                      default_value?: (string | null) | undefined
                      max_length?: (number | null) | undefined
                      is_nullable?: boolean | undefined
                      is_primary_key?: boolean | undefined
                      has_auto_increment?: boolean | undefined
                      foreign_key_column?: (string | null) | undefined
                      foreign_key_table?: (string | null) | undefined
                      comment?: (string | null) | undefined
                      schema?: string | undefined
                      foreign_key_schema?: (string | null) | undefined
                    }
                  | undefined
                meta?:
                  | ({
                      id?: number | undefined
                      collection?: string | undefined
                      field?: string | undefined
                      special?: (string[] | null) | undefined
                      'system-interface'?: (string | null) | undefined
                      options?: ({ [x: string]: unknown } | null) | undefined
                      display?: (string | null) | undefined
                      display_options?: ({ [x: string]: unknown } | null) | undefined
                      locked?: boolean | undefined
                      readonly?: boolean | undefined
                      hidden?: boolean | undefined
                      sort?: (number | null) | undefined
                      width?:
                        | 'half'
                        | 'half-left'
                        | 'half-right'
                        | 'full'
                        | 'fill'
                        | null
                        | undefined
                      group?: (number | null) | undefined
                      translation?: ({ [x: string]: unknown } | null) | undefined
                      note?: (string | null) | undefined
                    } | null)
                  | undefined
              }
            }
            output: { data?: Fields | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & {
              json: {
                field: string
                type: string
                schema?:
                  | {
                      name?: string | undefined
                      table?: string | undefined
                      type?: string | undefined
                      default_value?: (string | null) | undefined
                      max_length?: (number | null) | undefined
                      is_nullable?: boolean | undefined
                      is_primary_key?: boolean | undefined
                      has_auto_increment?: boolean | undefined
                      foreign_key_column?: (string | null) | undefined
                      foreign_key_table?: (string | null) | undefined
                      comment?: (string | null) | undefined
                      schema?: string | undefined
                      foreign_key_schema?: (string | null) | undefined
                    }
                  | undefined
                meta?:
                  | ({
                      id?: number | undefined
                      collection?: string | undefined
                      field?: string | undefined
                      special?: (string[] | null) | undefined
                      'system-interface'?: (string | null) | undefined
                      options?: ({ [x: string]: unknown } | null) | undefined
                      display?: (string | null) | undefined
                      display_options?: ({ [x: string]: unknown } | null) | undefined
                      locked?: boolean | undefined
                      readonly?: boolean | undefined
                      hidden?: boolean | undefined
                      sort?: (number | null) | undefined
                      width?:
                        | 'half'
                        | 'half-left'
                        | 'half-right'
                        | 'full'
                        | 'fill'
                        | null
                        | undefined
                      group?: (number | null) | undefined
                      translation?: ({ [x: string]: unknown } | null) | undefined
                      note?: (string | null) | undefined
                    } | null)
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string } } & {
              json: {
                field: string
                type: string
                schema?:
                  | {
                      name?: string | undefined
                      table?: string | undefined
                      type?: string | undefined
                      default_value?: (string | null) | undefined
                      max_length?: (number | null) | undefined
                      is_nullable?: boolean | undefined
                      is_primary_key?: boolean | undefined
                      has_auto_increment?: boolean | undefined
                      foreign_key_column?: (string | null) | undefined
                      foreign_key_table?: (string | null) | undefined
                      comment?: (string | null) | undefined
                      schema?: string | undefined
                      foreign_key_schema?: (string | null) | undefined
                    }
                  | undefined
                meta?:
                  | ({
                      id?: number | undefined
                      collection?: string | undefined
                      field?: string | undefined
                      special?: (string[] | null) | undefined
                      'system-interface'?: (string | null) | undefined
                      options?: ({ [x: string]: unknown } | null) | undefined
                      display?: (string | null) | undefined
                      display_options?: ({ [x: string]: unknown } | null) | undefined
                      locked?: boolean | undefined
                      readonly?: boolean | undefined
                      hidden?: boolean | undefined
                      sort?: (number | null) | undefined
                      width?:
                        | 'half'
                        | 'half-left'
                        | 'half-right'
                        | 'full'
                        | 'fill'
                        | null
                        | undefined
                      group?: (number | null) | undefined
                      translation?: ({ [x: string]: unknown } | null) | undefined
                      note?: (string | null) | undefined
                    } | null)
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/fields/:collection/:id': {
      $get:
        | {
            input: { param: { collection: string; id: string } }
            output: { data?: Fields | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string; id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string; id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { collection: string; id: string } } & {
              json: {
                field?: string | undefined
                type?: string | undefined
                schema?:
                  | {
                      name?: string | undefined
                      table?: string | undefined
                      type?: string | undefined
                      default_value?: (string | null) | undefined
                      max_length?: (number | null) | undefined
                      is_nullable?: boolean | undefined
                      is_primary_key?: boolean | undefined
                      has_auto_increment?: boolean | undefined
                      foreign_key_column?: (string | null) | undefined
                      foreign_key_table?: (string | null) | undefined
                      comment?: (string | null) | undefined
                      schema?: string | undefined
                      foreign_key_schema?: (string | null) | undefined
                    }
                  | undefined
                meta?:
                  | ({
                      id?: number | undefined
                      collection?: string | undefined
                      field?: string | undefined
                      special?: (string[] | null) | undefined
                      'system-interface'?: (string | null) | undefined
                      options?: ({ [x: string]: unknown } | null) | undefined
                      display?: (string | null) | undefined
                      display_options?: ({ [x: string]: unknown } | null) | undefined
                      locked?: boolean | undefined
                      readonly?: boolean | undefined
                      hidden?: boolean | undefined
                      sort?: (number | null) | undefined
                      width?:
                        | 'half'
                        | 'half-left'
                        | 'half-right'
                        | 'full'
                        | 'fill'
                        | null
                        | undefined
                      group?: (number | null) | undefined
                      translation?: ({ [x: string]: unknown } | null) | undefined
                      note?: (string | null) | undefined
                    } | null)
                  | undefined
              }
            }
            output: { data?: Fields | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string; id: string } } & {
              json: {
                field?: string | undefined
                type?: string | undefined
                schema?:
                  | {
                      name?: string | undefined
                      table?: string | undefined
                      type?: string | undefined
                      default_value?: (string | null) | undefined
                      max_length?: (number | null) | undefined
                      is_nullable?: boolean | undefined
                      is_primary_key?: boolean | undefined
                      has_auto_increment?: boolean | undefined
                      foreign_key_column?: (string | null) | undefined
                      foreign_key_table?: (string | null) | undefined
                      comment?: (string | null) | undefined
                      schema?: string | undefined
                      foreign_key_schema?: (string | null) | undefined
                    }
                  | undefined
                meta?:
                  | ({
                      id?: number | undefined
                      collection?: string | undefined
                      field?: string | undefined
                      special?: (string[] | null) | undefined
                      'system-interface'?: (string | null) | undefined
                      options?: ({ [x: string]: unknown } | null) | undefined
                      display?: (string | null) | undefined
                      display_options?: ({ [x: string]: unknown } | null) | undefined
                      locked?: boolean | undefined
                      readonly?: boolean | undefined
                      hidden?: boolean | undefined
                      sort?: (number | null) | undefined
                      width?:
                        | 'half'
                        | 'half-left'
                        | 'half-right'
                        | 'full'
                        | 'fill'
                        | null
                        | undefined
                      group?: (number | null) | undefined
                      translation?: ({ [x: string]: unknown } | null) | undefined
                      note?: (string | null) | undefined
                    } | null)
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string; id: string } } & {
              json: {
                field?: string | undefined
                type?: string | undefined
                schema?:
                  | {
                      name?: string | undefined
                      table?: string | undefined
                      type?: string | undefined
                      default_value?: (string | null) | undefined
                      max_length?: (number | null) | undefined
                      is_nullable?: boolean | undefined
                      is_primary_key?: boolean | undefined
                      has_auto_increment?: boolean | undefined
                      foreign_key_column?: (string | null) | undefined
                      foreign_key_table?: (string | null) | undefined
                      comment?: (string | null) | undefined
                      schema?: string | undefined
                      foreign_key_schema?: (string | null) | undefined
                    }
                  | undefined
                meta?:
                  | ({
                      id?: number | undefined
                      collection?: string | undefined
                      field?: string | undefined
                      special?: (string[] | null) | undefined
                      'system-interface'?: (string | null) | undefined
                      options?: ({ [x: string]: unknown } | null) | undefined
                      display?: (string | null) | undefined
                      display_options?: ({ [x: string]: unknown } | null) | undefined
                      locked?: boolean | undefined
                      readonly?: boolean | undefined
                      hidden?: boolean | undefined
                      sort?: (number | null) | undefined
                      width?:
                        | 'half'
                        | 'half-left'
                        | 'half-right'
                        | 'full'
                        | 'fill'
                        | null
                        | undefined
                      group?: (number | null) | undefined
                      translation?: ({ [x: string]: unknown } | null) | undefined
                      note?: (string | null) | undefined
                    } | null)
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { collection: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { collection: string; id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { collection: string; id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/files': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Files[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { data?: string | undefined } }
            output: { data?: Files | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { data?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                data?: { data?: string | undefined } | undefined
                keys?: string[] | undefined
              }
            }
            output: { data?: Files[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                data?: { data?: string | undefined } | undefined
                keys?: string[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/files/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { data?: Files | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                title?: string | undefined
                filename_download?: string | undefined
                description?: (string | null) | undefined
                folder?: string | Folders | undefined
                tags?: (string[] | null) | undefined
              }
            }
            output: { data?: Files | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                title?: string | undefined
                filename_download?: string | undefined
                description?: (string | null) | undefined
                folder?: string | Folders | undefined
                tags?: (string[] | null) | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/flows': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Flows[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Flows }
            output: { data?: Flows | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Flows }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Flows }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Flows | undefined; keys?: string[] | undefined } }
            output: { data?: Flows[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Flows | undefined; keys?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/flows/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Flows | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Flows
            }
            output: { data?: Flows | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Flows
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Flows
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/folders': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Folders[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { name: string; parent?: number | undefined }
            }
            output: { data?: Folders | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { name: string; parent?: number | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { name: string; parent?: number | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                data?: { name: string; parent?: number | undefined } | undefined
                keys?: string[] | undefined
              }
            }
            output: { data?: Folders[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                data?: { name: string; parent?: number | undefined } | undefined
                keys?: string[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/folders/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { data?: Folders | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: number | undefined }
            }
            output: { data?: Folders | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: number | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: number | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/operations': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Operations[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Operations }
            output: { data?: Operations | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Operations }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Operations }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Operations | undefined; keys?: string[] | undefined } }
            output: { data?: Operations[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Operations | undefined; keys?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/operations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Operations | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Operations
            }
            output: { data?: Operations | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Operations
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Operations
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/permissions': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                offset?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Permissions[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                offset?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                offset?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              json: {
                collection?: string | undefined
                comment?: 'none' | 'create' | 'update' | 'full' | undefined
                create?: 'none' | 'full' | undefined
                delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                explain?: 'none' | 'create' | 'update' | 'always' | undefined
                read?: 'none' | 'mine' | 'role' | 'full' | undefined
                role?: number | undefined
                read_field_blacklist?: string[] | undefined
                status?: string | undefined
                status_blacklist?: string[] | undefined
                update?: 'none' | 'mine' | 'role' | 'full' | undefined
                write_field_blacklist?: string[] | undefined
              }
            }
            output: { data?: Permissions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                collection?: string | undefined
                comment?: 'none' | 'create' | 'update' | 'full' | undefined
                create?: 'none' | 'full' | undefined
                delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                explain?: 'none' | 'create' | 'update' | 'always' | undefined
                read?: 'none' | 'mine' | 'role' | 'full' | undefined
                role?: number | undefined
                read_field_blacklist?: string[] | undefined
                status?: string | undefined
                status_blacklist?: string[] | undefined
                update?: 'none' | 'mine' | 'role' | 'full' | undefined
                write_field_blacklist?: string[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                collection?: string | undefined
                comment?: 'none' | 'create' | 'update' | 'full' | undefined
                create?: 'none' | 'full' | undefined
                delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                explain?: 'none' | 'create' | 'update' | 'always' | undefined
                read?: 'none' | 'mine' | 'role' | 'full' | undefined
                role?: number | undefined
                read_field_blacklist?: string[] | undefined
                status?: string | undefined
                status_blacklist?: string[] | undefined
                update?: 'none' | 'mine' | 'role' | 'full' | undefined
                write_field_blacklist?: string[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | {
                      collection?: string | undefined
                      comment?: 'none' | 'create' | 'update' | 'full' | undefined
                      create?: 'none' | 'full' | undefined
                      delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                      explain?: 'none' | 'create' | 'update' | 'always' | undefined
                      read?: 'none' | 'mine' | 'role' | 'full' | undefined
                      role?: number | undefined
                      read_field_blacklist?: string[] | undefined
                      status?: string | undefined
                      status_blacklist?: string[] | undefined
                      update?: 'none' | 'mine' | 'role' | 'full' | undefined
                      write_field_blacklist?: string[] | undefined
                    }
                  | undefined
              }
            }
            output: { data?: Permissions[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | {
                      collection?: string | undefined
                      comment?: 'none' | 'create' | 'update' | 'full' | undefined
                      create?: 'none' | 'full' | undefined
                      delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                      explain?: 'none' | 'create' | 'update' | 'always' | undefined
                      read?: 'none' | 'mine' | 'role' | 'full' | undefined
                      role?: number | undefined
                      read_field_blacklist?: string[] | undefined
                      status?: string | undefined
                      status_blacklist?: string[] | undefined
                      update?: 'none' | 'mine' | 'role' | 'full' | undefined
                      write_field_blacklist?: string[] | undefined
                    }
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/permissions/me': {
      $get:
        | {
            input: {}
            output: { data?: Permissions[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/permissions/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { data?: Permissions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } } & {
              json: {
                collection?: { [x: string]: unknown } | undefined
                comment?: 'none' | 'create' | 'update' | undefined
                create?: 'none' | 'full' | undefined
                delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                explain?: 'none' | 'create' | 'update' | 'always' | undefined
                read?: 'none' | 'mine' | 'role' | 'full' | undefined
                read_field_blacklist?: { [x: string]: unknown } | undefined
                role?: { [x: string]: unknown } | undefined
                status?: { [x: string]: unknown } | undefined
                status_blacklist?: { [x: string]: unknown } | undefined
                update?: 'none' | 'mine' | 'role' | 'full' | undefined
                write_field_blacklist?: { [x: string]: unknown } | undefined
              }
            }
            output: { data?: Permissions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } } & {
              json: {
                collection?: { [x: string]: unknown } | undefined
                comment?: 'none' | 'create' | 'update' | undefined
                create?: 'none' | 'full' | undefined
                delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                explain?: 'none' | 'create' | 'update' | 'always' | undefined
                read?: 'none' | 'mine' | 'role' | 'full' | undefined
                read_field_blacklist?: { [x: string]: unknown } | undefined
                role?: { [x: string]: unknown } | undefined
                status?: { [x: string]: unknown } | undefined
                status_blacklist?: { [x: string]: unknown } | undefined
                update?: 'none' | 'mine' | 'role' | 'full' | undefined
                write_field_blacklist?: { [x: string]: unknown } | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } } & {
              json: {
                collection?: { [x: string]: unknown } | undefined
                comment?: 'none' | 'create' | 'update' | undefined
                create?: 'none' | 'full' | undefined
                delete?: 'none' | 'mine' | 'role' | 'full' | undefined
                explain?: 'none' | 'create' | 'update' | 'always' | undefined
                read?: 'none' | 'mine' | 'role' | 'full' | undefined
                read_field_blacklist?: { [x: string]: unknown } | undefined
                role?: { [x: string]: unknown } | undefined
                status?: { [x: string]: unknown } | undefined
                status_blacklist?: { [x: string]: unknown } | undefined
                update?: 'none' | 'mine' | 'role' | 'full' | undefined
                write_field_blacklist?: { [x: string]: unknown } | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/relations': {
      $get:
        | {
            input: {}
            output: { data?: Relations[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: {
              json: {
                collection_many?: string | undefined
                collection_one?: string | undefined
                field_many?: string | undefined
                field_one?: string | undefined
                junction_field?: string | undefined
              }
            }
            output: { data?: Relations | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                collection_many?: string | undefined
                collection_one?: string | undefined
                field_many?: string | undefined
                field_one?: string | undefined
                junction_field?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                collection_many?: string | undefined
                collection_one?: string | undefined
                field_many?: string | undefined
                field_one?: string | undefined
                junction_field?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/relations/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: { data?: Relations | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & {
              json: {
                collection_many?: string | undefined
                collection_one?: string | undefined
                field_many?: string | undefined
                field_one?: string | undefined
                junction_field?: string | undefined
              }
            }
            output: { data?: Relations | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                collection_many?: string | undefined
                collection_one?: string | undefined
                field_many?: string | undefined
                field_one?: string | undefined
                junction_field?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: {
                collection_many?: string | undefined
                collection_one?: string | undefined
                field_many?: string | undefined
                field_one?: string | undefined
                junction_field?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/revisions': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Revisions[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/revisions/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { data?: Revisions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/roles': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Roles[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                enforce_tfa?: boolean | undefined
                external_id?: string | undefined
                ip_access?: string[] | undefined
                module_listing?: string | undefined
                name?: string | undefined
              }
            }
            output: { data?: Roles | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                enforce_tfa?: boolean | undefined
                external_id?: string | undefined
                ip_access?: string[] | undefined
                module_listing?: string | undefined
                name?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                enforce_tfa?: boolean | undefined
                external_id?: string | undefined
                ip_access?: string[] | undefined
                module_listing?: string | undefined
                name?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | {
                      description?: string | undefined
                      enforce_tfa?: boolean | undefined
                      external_id?: string | undefined
                      ip_access?: string[] | undefined
                      module_listing?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
              }
            }
            output: { data?: Roles[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & {
              json: {
                keys?: string[] | undefined
                data?:
                  | {
                      description?: string | undefined
                      enforce_tfa?: boolean | undefined
                      external_id?: string | undefined
                      ip_access?: string[] | undefined
                      module_listing?: string | undefined
                      name?: string | undefined
                    }
                  | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/roles/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { data?: Roles | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                enforce_tfa?: boolean | undefined
                external_id?: string | undefined
                ip_access?: string[] | undefined
                module_listing?: string | undefined
                name?: string | undefined
              }
            }
            output: { data?: Roles | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                enforce_tfa?: boolean | undefined
                external_id?: string | undefined
                ip_access?: string[] | undefined
                module_listing?: string | undefined
                name?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                enforce_tfa?: boolean | undefined
                external_id?: string | undefined
                ip_access?: string[] | undefined
                module_listing?: string | undefined
                name?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/schema/snapshot': {
      $get:
        | {
            input: {
              query: {
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                includeCollections?: string[] | undefined
                excludeCollections?: string[] | undefined
              }
            }
            output: { data?: Schema | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                includeCollections?: string[] | undefined
                excludeCollections?: string[] | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                includeCollections?: string[] | undefined
                excludeCollections?: string[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/schema/apply': {
      $post:
        | {
            input: { json: { data?: Diff | undefined } } & { form: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { data?: Diff | undefined } } & { form: { file?: File | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/schema/diff': {
      $post:
        | {
            input: {
              query: { force?: boolean | undefined; mode?: 'merge' | 'mirror' | undefined }
            } & { json: { data?: Schema | undefined } } & { form: { file?: File | undefined } }
            output: { data?: Diff | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { force?: boolean | undefined; mode?: 'merge' | 'mirror' | undefined }
            } & { json: { data?: Schema | undefined } } & { form: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: { force?: boolean | undefined; mode?: 'merge' | 'mirror' | undefined }
            } & { json: { data?: Schema | undefined } } & { form: { file?: File | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/server/info': {
      $get:
        | {
            input: {}
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/server/ping': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/settings': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } }
            output: { data?: Settings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { json: { [x: string]: unknown } }
            output: { data?: Settings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Users[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: Users }
            output: { data?: Users | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Users }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Users }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Users | undefined; keys?: string[] | undefined } }
            output: { data?: Users[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Users | undefined; keys?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/users/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { data?: Users | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Users
            }
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Users
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Users
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id/tfa/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/invite': {
      $post:
        | {
            input: { json: { email?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { email?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { email?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/invite/accept': {
      $post:
        | {
            input: { json: { token?: string | undefined; password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { token?: string | undefined; password?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { token?: string | undefined; password?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/me': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } }
            output: { data?: Users | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | { input: {}; output: { data?: Users | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/me/tfa/disable': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/me/tfa/enable': {
      $post:
        | {
            input: { json: { secret: string; otp: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { secret: string; otp: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { secret: string; otp: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/users/me/tfa/generate': {
      $post:
        | {
            input: { json: { password?: string | undefined } }
            output: {
              data?: { secret?: string | undefined; otpauth_url?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { password?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { password?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/users/me/track/page': {
      $patch:
        | {
            input: { json: { last_page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { last_page?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { last_page?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/register': {
      $post:
        | {
            input: {
              json: {
                email: string
                password: string
                first_name?: string | undefined
                last_name?: string | undefined
                verification_url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                email: string
                password: string
                first_name?: string | undefined
                last_name?: string | undefined
                verification_url?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email: string
                password: string
                first_name?: string | undefined
                last_name?: string | undefined
                verification_url?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                email: string
                password: string
                first_name?: string | undefined
                last_name?: string | undefined
                verification_url?: string | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/register/verify-email': {
      $get:
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { query: { token: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { token: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/utils/sort/:collection': {
      $post: {
        input: { param: { collection: string } } & {
          json: { item?: number | undefined; to?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/utils/import': {
      $post:
        | {
            input: {
              query: {
                mode?: 'add' | 'merge' | undefined
                dryRun?: boolean | undefined
                dangerouslyAllowDelete?: boolean | undefined
              }
            } & { form: { file?: File | undefined } }
            output: {
              data?:
                | {
                    applied?: boolean | undefined
                    mode?: 'add' | 'merge' | undefined
                    collections?:
                      | {
                          [x: string]: {
                            existing?: string[] | undefined
                            new?: string[] | undefined
                            deleted?: string[] | undefined
                            mapped?: { [x: string]: unknown } | undefined
                          }
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                mode?: 'add' | 'merge' | undefined
                dryRun?: boolean | undefined
                dangerouslyAllowDelete?: boolean | undefined
              }
            } & { form: { file?: File | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                mode?: 'add' | 'merge' | undefined
                dryRun?: boolean | undefined
                dangerouslyAllowDelete?: boolean | undefined
              }
            } & { form: { file?: File | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                mode?: 'add' | 'merge' | undefined
                dryRun?: boolean | undefined
                dangerouslyAllowDelete?: boolean | undefined
              }
            } & { form: { file?: File | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                mode?: 'add' | 'merge' | undefined
                dryRun?: boolean | undefined
                dangerouslyAllowDelete?: boolean | undefined
              }
            } & { form: { file?: File | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/utils/import/:collection': {
      $post:
        | {
            input: { param: { collection: string } } & {
              query: { background?: boolean | undefined }
            } & { form: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { collection: string } } & {
              query: { background?: boolean | undefined }
            } & { form: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/utils/export/:collection': {
      $post: {
        input: { param: { collection: string } } & {
          json: {
            format: 'csv' | 'csv_utf8' | 'xml' | 'json' | 'yaml'
            query: Query
            file?:
              | {
                  id?: string | undefined
                  storage?: string | undefined
                  filename_disk?: string | undefined
                  filename_download?: string | undefined
                  title?: string | undefined
                  type?: string | undefined
                  folder?: string | Folders | undefined
                  created_on?: string | undefined
                  uploaded_by?: string | Users | undefined
                  uploaded_on?: string | undefined
                  charset?: (string | null) | undefined
                  filesize?: number | undefined
                  width?: (number | null) | undefined
                  height?: (number | null) | undefined
                  duration?: (number | null) | undefined
                  embed?: (string | null) | undefined
                  description?: (string | null) | undefined
                  location?: (string | null) | undefined
                  tags?: (string[] | null) | undefined
                  metadata?: ({ [x: string]: unknown } | null) | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/utils/cache/clear': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/utils/random/string': {
      $get: {
        input: { query: { length?: number | undefined } }
        output: { data?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/versions': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { data?: Versions[] | undefined; meta?: Metadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
                aggregate?:
                  | {
                      count?: string | string[] | undefined
                      countDistinct?: string | string[] | undefined
                      sum?: string | string[] | undefined
                      sumDistinct?: string | string[] | undefined
                      avg?: string | string[] | undefined
                      avgDistinct?: string | string[] | undefined
                      min?: string | string[] | undefined
                      max?: string | string[] | undefined
                    }
                  | undefined
                groupBy?: string[] | undefined
                deep?: { [x: string]: unknown } | undefined
                alias?: { [x: string]: unknown } | undefined
                export?: 'csv' | 'csv_utf8' | 'json' | 'xml' | 'yaml' | undefined
                backlink?: boolean | undefined
                meta?: string | ('total_count' | 'filter_count')[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Versions }
            output: { data?: Versions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Versions }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { fields?: string[] | undefined } } & { json: Versions }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Versions | undefined; keys?: string[] | undefined } }
            output: { data?: Versions[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                filter?: { [x: string]: unknown } | undefined
                search?: string | undefined
                sort?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                page?: number | undefined
              }
            } & { json: { data?: Versions | undefined; keys?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/versions/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { data?: Versions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Versions
            }
            output: { data?: Versions | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Versions
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { fields?: string[] | undefined } } & {
              json: Versions
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/versions/:id/save': {
      $post:
        | {
            input: { param: { id: string } } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { [x: string]: unknown } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/versions/:id/compare': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/versions/:id/promote': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: { mainHash?: string | undefined; fields?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { mainHash?: string | undefined; fields?: string | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { mainHash?: string | undefined; fields?: string | undefined }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
