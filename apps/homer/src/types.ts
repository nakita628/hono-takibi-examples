type LoginRequest = { username: string; password: string }
type Pagination = {
  limit?: number | undefined
  next_cursor?: string | undefined
  prev_cursor?: string | undefined
  total?: number | undefined
  has_more?: boolean | undefined
}
type Meta = {
  request_id?: string | undefined
  trace_id?: string | undefined
  pagination?: Pagination | undefined
  message?: string | undefined
}
type LoginResponse = {
  data?:
    | {
        token?: string | undefined
        scope?: string | undefined
        user?: { admin?: boolean | undefined } | undefined
      }
    | undefined
  meta?: Meta | undefined
}
type FieldError = { field?: string | undefined; message?: string | undefined }
type Error = {
  type: string
  title: string
  status: number
  detail?: string | undefined
  errors?: FieldError[] | undefined
}
type ErrorResponse = { error: Error }
type AuthProvidersResponse = {
  data?:
    | {
        internal?:
          | {
              enable?: boolean | undefined
              name?: string | undefined
              position?: number | undefined
              type?: string | undefined
            }
          | undefined
        oauth2?:
          | {
              enable?: boolean | undefined
              name?: string | undefined
              position?: number | undefined
              provider_image?: string | undefined
              provider_name?: string | undefined
              type?: string | undefined
              url?: string | undefined
              auto_redirect?: boolean | undefined
            }[]
          | undefined
      }
    | undefined
  meta?: Meta | undefined
}
type OAuth2TokenExchange = { token: string }
type User = {
  guid?: string | undefined
  username?: string | undefined
  name?: string | undefined
  partid?: number | undefined
  email?: string | undefined
  enabled?: boolean | undefined
  firstname?: string | undefined
  lastname?: string | undefined
  department?: string | undefined
  user_group?: string | undefined
}
type UserListResponse = {
  data?: { items?: User[] | undefined } | undefined
  meta?: Meta | undefined
}
type UserCreate = {
  username: string
  partid: number
  email: string
  password?: string | undefined
  name?: string | undefined
  enabled?: boolean | undefined
  firstname: string
  lastname: string
  department: string
  user_group: string
}
type IdResponse = { data?: string | undefined; meta?: Meta | undefined }
type UserResponse = { data?: User | undefined; meta?: Meta | undefined }
type UserPatch = {
  partid?: number | undefined
  email?: string | undefined
  password?: string | undefined
  name?: string | undefined
  enabled?: boolean | undefined
  firstname?: string | undefined
  lastname?: string | undefined
  department?: string | undefined
  user_group?: string | undefined
}
type UserProfile = {
  guid?: string | undefined
  username?: string | undefined
  display_name?: string | undefined
  avatar?: string | undefined
  group?: string | undefined
  admin?: boolean | undefined
  external_auth?: boolean | undefined
  external_profile?: string | undefined
}
type UserProfileResponse = { data?: UserProfile | undefined; meta?: Meta | undefined }
type DashboardElement = {
  cssclass?: string | undefined
  href?: string | undefined
  id?: string | undefined
  owner?: string | undefined
  name?: string | undefined
  param?: string | undefined
  shared?: boolean | undefined
  type?: number | undefined
  weight?: number | undefined
}
type UserSetting = {
  category?: string | undefined
  data?: DashboardElement | undefined
  guid?: string | undefined
  id?: number | undefined
  param?: string | undefined
  partid?: number | undefined
  user_name?: string | undefined
}
type UserSettingListResponse = {
  data?: { items?: UserSetting[] | undefined } | undefined
  meta?: Meta | undefined
}
type UserSettingUpsert = {
  category?: string | undefined
  param: string
  data: { [x: string]: unknown }
}
type CallElement = {
  id?: number | undefined
  sid?: string | undefined
  dst_host?: string | undefined
  src_host?: string | undefined
  dst_id?: string | undefined
  src_id?: string | undefined
  src_ip?: string | undefined
  dst_ip?: string | undefined
  src_port?: number | undefined
  dst_port?: number | undefined
  alias_src?: string | undefined
  alias_dst?: string | undefined
  method?: string | undefined
  method_text?: string | undefined
  create_date?: bigint | undefined
  protocol?: number | undefined
  msg_color?: string | undefined
  table?: string | undefined
  ruri_user?: string | undefined
  destination?: number | undefined
  micro_ts?: bigint | undefined
  storage_lake?: string | undefined
  storage_volume?: string | undefined
}
type CallListResponse = {
  data?: { items?: CallElement[] | undefined; keys?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type SearchObject = {
  filter?:
    | {
        proto_type?: number | undefined
        event_type?: 'call' | 'registration' | 'rtp' | 'rtcp' | 'log' | undefined
        method?: string | undefined
        call_id?: string | undefined
        ruri_user?: string | undefined
        from_user?: string | undefined
        to_user?: string | undefined
        user_agent?: string | undefined
        src_ip?: string | undefined
        dst_ip?: string | undefined
        src_port?: number | undefined
        dst_port?: number | undefined
        capture_id?: number | undefined
        node?: string | undefined
      }
    | undefined
  param?:
    | {
        transaction?: { [x: string]: unknown } | undefined
        limit?: number | undefined
        search?: { [x: string]: unknown } | undefined
        orlogic?: boolean | undefined
        whitelist?: string[] | undefined
        location?: { node?: string[] | undefined } | undefined
        timezone?: { value?: number | undefined; name?: string | undefined } | undefined
      }
    | undefined
  timestamp?: { from?: bigint | undefined; to?: bigint | undefined } | undefined
}
type TransactionSessionRequest = {
  session_id?: string | undefined
  session_ids?: string[] | undefined
  proto_type?: number | undefined
  event_type?: string | undefined
  timestamp?: { from?: bigint | undefined; to?: bigint | undefined } | undefined
  whitelist?: string[] | undefined
  correlate?: boolean | undefined
}
type ProtocolHeader = {
  dst_ip?: string | undefined
  src_ip?: string | undefined
  dst_port?: number | undefined
  src_port?: number | undefined
  protocol?: number | undefined
  capture_id?: number | undefined
  capture_pass?: string | undefined
  payload_type?: number | undefined
  time_seconds?: number | undefined
  time_useconds?: number | undefined
  protocol_family?: number | undefined
}
type DataHeader = {
  call_id?: string | undefined
  method?: string | undefined
  to_tag?: string | undefined
  to_user?: string | undefined
  from_tag?: string | undefined
  pid_user?: string | undefined
  auth_user?: string | undefined
  from_user?: string | undefined
  ruri_user?: string | undefined
  user_agent?: string | undefined
  ruri_domain?: string | undefined
}
type Message = {
  id?: number | undefined
  sid?: string | undefined
  protocol_header?: ProtocolHeader | undefined
  data_header?: DataHeader | undefined
  raw?: string | undefined
}
type MessageListResponse = {
  data?: { items?: Message[] | undefined } | undefined
  meta?: Meta | undefined
}
type MessageResponse = { data?: Message | undefined; meta?: Meta | undefined }
type MessageDecoded = {
  data?: { [x: string]: unknown }[] | undefined
  isup?: { [x: string]: unknown } | undefined
  shark?: { [x: string]: unknown } | undefined
  shark_error?: string | undefined
}
type MessageDecodedResponse = { data?: MessageDecoded | undefined; meta?: Meta | undefined }
type SearchTransactionRtcp = {
  id?: number | undefined
  sid?: string | undefined
  dst_ip?: string | undefined
  src_ip?: string | undefined
  dst_port?: number | undefined
  src_port?: number | undefined
  payload_type?: number | undefined
  micro_ts?: bigint | undefined
}
type SearchTransactionRtcpList = { data?: SearchTransactionRtcp[] | undefined }
type SearchTransactionRtp = {
  id?: number | undefined
  sid?: string | undefined
  dst_ip?: string | undefined
  src_ip?: string | undefined
  dst_port?: number | undefined
  src_port?: number | undefined
  payload_type?: number | undefined
  micro_ts?: bigint | undefined
}
type SearchTransactionRtpList = { data?: SearchTransactionRtp[] | undefined }
type SearchTransactionQos = {
  rtcp?: SearchTransactionRtcpList | undefined
  rtp?: SearchTransactionRtpList | undefined
  vqrtcp?: { data?: { [x: string]: unknown }[] | undefined } | undefined
}
type QosResponse = { data?: SearchTransactionQos | undefined; meta?: Meta | undefined }
type ExportRequest = { type: 'pcap' | 'text'; query: { [x: string]: unknown } }
type ExportResponse = {
  data?: { export_id?: string | undefined; status?: string | undefined } | undefined
  meta?: Meta | undefined
}
type ExportStatusResponse = {
  data?:
    | {
        export_id?: string | undefined
        status?: string | undefined
        download_url?: string | undefined
      }
    | undefined
  meta?: Meta | undefined
}
type ImportResponse = {
  data?: { inserted?: number | undefined; rejected?: number | undefined } | undefined
  meta?: Meta | undefined
}
type DashboardListResponse = {
  data?: { items?: DashboardElement[] | undefined } | undefined
  meta?: Meta | undefined
}
type DashboardResponse = { data?: DashboardElement | undefined; meta?: Meta | undefined }
type MappingSchema = {
  guid?: string | undefined
  profile?: string | undefined
  hepid?: number | undefined
  hep_alias?: string | undefined
  partid?: number | undefined
  version?: number | undefined
  retention?: number | undefined
  partition_step?: number | undefined
  create_index?: { [x: string]: unknown } | undefined
  create_table?: string | undefined
  correlation_mapping?: { [x: string]: unknown } | undefined
  fields_mapping?: { [x: string]: unknown } | undefined
  fields_settings?: { [x: string]: unknown } | undefined
  schema_mapping?: { [x: string]: unknown } | undefined
  schema_settings?: { [x: string]: unknown } | undefined
}
type MappingListResponse = {
  data?: { items?: MappingSchema[] | undefined } | undefined
  meta?: Meta | undefined
}
type MappingResponse = { data?: MappingSchema | undefined; meta?: Meta | undefined }
type SmartSearchField = {
  category?: string | undefined
  name?: string | undefined
  value?: string | undefined
}
type MappingFieldsResponse = {
  data?: { items?: SmartSearchField[] | undefined } | undefined
  meta?: Meta | undefined
}
type HepsubSchema = {
  guid?: string | undefined
  profile?: string | undefined
  hepid?: number | undefined
  hep_alias?: string | undefined
  version?: number | undefined
  mapping?: { [x: string]: unknown } | undefined
}
type HepsubListResponse = {
  data?: { items?: HepsubSchema[] | undefined } | undefined
  meta?: Meta | undefined
}
type HepsubResponse = { data?: HepsubSchema | undefined; meta?: Meta | undefined }
type AliasStruct = {
  id?: number | undefined
  guid?: string | undefined
  alias?: string | undefined
  ip?: string | undefined
  port?: number | undefined
  mask?: number | undefined
  capture_id?: string | undefined
  status?: boolean | undefined
  custom_image?: string | undefined
  tag1?: string | undefined
  tag2?: string | undefined
  tag3?: string | undefined
  tag4?: string | undefined
}
type AliasListResponse = {
  data?: { items?: AliasStruct[] | undefined } | undefined
  meta?: Meta | undefined
}
type GlobalSetting = {
  id?: number | undefined
  guid?: string | undefined
  partid?: number | undefined
  category?: string | undefined
  param?: string | undefined
  data?: { [x: string]: unknown } | undefined
}
type GlobalSettingListResponse = {
  data?: { items?: GlobalSetting[] | undefined } | undefined
  meta?: Meta | undefined
}
type GlobalSettingUpsert = {
  guid?: string | undefined
  partid?: number | undefined
  category: string
  param?: string | undefined
  data?: { [x: string]: unknown } | undefined
}
type GlobalSettingResponse = { data?: GlobalSetting | undefined; meta?: Meta | undefined }
type HepScript = {
  id?: number | undefined
  guid?: string | undefined
  profile?: string | undefined
  hep_alias?: string | undefined
  type?: string | undefined
  hepid?: number | undefined
  status?: boolean | undefined
  script?: string | undefined
}
type HepScriptListResponse = {
  data?: { items?: HepScript[] | undefined } | undefined
  meta?: Meta | undefined
}
type HepScriptUpsert = {
  guid?: string | undefined
  profile?: string | undefined
  hep_alias?: string | undefined
  type?: string | undefined
  hepid?: number | undefined
  status?: boolean | undefined
  script?: string | undefined
}
type HepScriptResponse = { data?: HepScript | undefined; meta?: Meta | undefined }
type AuthTokenItem = {
  guid?: string | undefined
  creator_guid?: string | undefined
  name?: string | undefined
  user_object?:
    | {
        username?: string | undefined
        firstname?: string | undefined
        lastname?: string | undefined
        email?: string | undefined
        user_group?: string | undefined
        id?: number | undefined
        partid?: number | undefined
      }
    | undefined
  ip_address?: string | undefined
  create_date?: string | undefined
  lastusage_date?: string | undefined
  expire_date?: string | undefined
  usage_calls?: number | undefined
  limit_calls?: number | undefined
  active?: boolean | undefined
}
type AuthTokenListResponse = {
  data?: { items?: AuthTokenItem[] | undefined } | undefined
  meta?: Meta | undefined
}
type AuthTokenCreate = {
  name?: string | undefined
  expire_date?: string | undefined
  limit_calls?: number | undefined
  active?: boolean | undefined
}
type AuthTokenCreateResponse = {
  data?: { token?: string | undefined } | undefined
  meta?: Meta | undefined
}
type AuthTokenResponse = { data?: AuthTokenItem | undefined; meta?: Meta | undefined }
type AuthTokenUpdate = {
  name?: string | undefined
  expire_date?: string | undefined
  limit_calls?: number | undefined
  active?: boolean | undefined
}
type AgentSub = {
  uuid?: string | undefined
  gid?: number | undefined
  host?: string | undefined
  port?: number | undefined
  protocol?: string | undefined
  path?: string | undefined
  node?: string | undefined
  type?: string | undefined
  ttl?: number | undefined
  create_date?: string | undefined
  expire_date?: string | undefined
  active?: number | undefined
}
type AgentSubListResponse = {
  data?: { items?: AgentSub[] | undefined } | undefined
  meta?: Meta | undefined
}
type AgentSubResponse = { data?: AgentSub | undefined; meta?: Meta | undefined }
type AgentTypeListResponse = {
  data?: { items?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type AgentSearchRequest = { guid?: string | undefined; type?: string | undefined }
type Node = {
  arhive?: boolean | undefined
  db_archive?: string | undefined
  db_name?: string | undefined
  host?: string | undefined
  name?: string | undefined
  node?: string | undefined
  online?: boolean | undefined
  primary?: boolean | undefined
  table_prefix?: string | undefined
  value?: string | undefined
}
type NodeListResponse = {
  data?: { items?: Node[] | undefined } | undefined
  meta?: Meta | undefined
}
type ModulesStatusResponse = {
  data?:
    | {
        loki?:
          | {
              enable?: boolean | undefined
              template?: string | undefined
              external_url?: string | undefined
            }
          | undefined
      }
    | undefined
  meta?: Meta | undefined
}
type StatisticQuery = {
  param?:
    | {
        limit?: number | undefined
        precision?: number | undefined
        query?:
          | {
              main?: string | undefined
              database?: string | undefined
              retention?: string | undefined
              rawquery?: string | undefined
              type?: string[] | undefined
              tag?: string[] | undefined
            }[]
          | undefined
        bfrom?: number | undefined
        total?: boolean | undefined
      }
    | undefined
  timestamp?: { from?: bigint | undefined; to?: bigint | undefined } | undefined
}
type StatisticResponse = {
  data?: { [x: string]: unknown } | undefined
  total?: number | undefined
  meta?: Meta | undefined
}
type StatisticDbResponse = {
  data?: { [x: string]: unknown } | undefined
  status?: string | undefined
  total?: number | undefined
  meta?: Meta | undefined
}
type StatisticMeasurementsResponse = {
  data?: { items?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type StatisticMetricsResponse = {
  data?: { items?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type StatisticTagsResponse = {
  data?: { items?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type LokiLabelsResponse = {
  data?: { items?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type LokiValuesResponse = {
  data?: { items?: string[] | undefined } | undefined
  meta?: Meta | undefined
}
type LokiQuery = {
  param?:
    | {
        limit?: number | undefined
        search?: string | undefined
        server?: string | undefined
        timezone?: { [x: string]: unknown } | undefined
      }
    | undefined
  timestamp?: { from?: bigint | undefined; to?: bigint | undefined } | undefined
}
type LokiQueryResponse = {
  data?:
    | {
        custom_1?: string | undefined
        custom_2?: string | undefined
        id?: number | undefined
        micro_ts?: bigint | undefined
      }[]
    | undefined
  total?: number | undefined
  meta?: Meta | undefined
}
type GrafanaStatusResponse = {
  data?: { [x: string]: unknown } | undefined
  meta?: Meta | undefined
}
type GrafanaFoldersResponse = {
  data?: { items?: { [x: string]: unknown }[] | undefined } | undefined
  meta?: Meta | undefined
}
type GrafanaDashboardResponse = {
  data?: { [x: string]: unknown } | undefined
  meta?: Meta | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth/sessions': {
      $post:
        | {
            input: { json: LoginRequest }
            output: LoginResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: LoginRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/sessions/:sessionId': {
      $delete:
        | { input: { param: { sessionId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { sessionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sessionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sessionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/providers': {
      $get:
        | { input: {}; output: AuthProvidersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/auth/oauth2/:provider/redirect': {
      $get:
        | { input: { param: { provider: string } }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { param: { provider: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { provider: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/oauth2/:provider/callback': {
      $get:
        | { input: { param: { provider: string } }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { param: { provider: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { provider: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth/oauth2/token': {
      $post:
        | {
            input: { json: OAuth2TokenExchange }
            output: LoginResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: OAuth2TokenExchange }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OAuth2TokenExchange }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: OAuth2TokenExchange }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
                'filter[username]'?: string | undefined
                'filter[email]'?: string | undefined
                'filter[user_group]'?: string | undefined
                'filter[enabled]'?: boolean | undefined
              }
            }
            output: UserListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
                'filter[username]'?: string | undefined
                'filter[email]'?: string | undefined
                'filter[user_group]'?: string | undefined
                'filter[enabled]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
                'filter[username]'?: string | undefined
                'filter[email]'?: string | undefined
                'filter[user_group]'?: string | undefined
                'filter[enabled]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
                'filter[username]'?: string | undefined
                'filter[email]'?: string | undefined
                'filter[user_group]'?: string | undefined
                'filter[enabled]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: UserCreate }; output: IdResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: UserCreate }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: UserCreate }; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: { json: UserCreate }; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: { json: UserCreate }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/users/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { userId: string } } & { json: UserPatch }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: UserPatch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserPatch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserPatch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: UserPatch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: UserProfileResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/me/settings': {
      $get:
        | { input: {}; output: UserSettingListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/me/settings/:category': {
      $put:
        | {
            input: { param: { category: string } } & { json: UserSettingUpsert }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category: string } } & { json: UserSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { category: string } } & { json: UserSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { category: string } } & { json: UserSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { category: string } } & { json: UserSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { category: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { category: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { category: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { category: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[transaction_id]'?: string | undefined
                'filter[src_ip]'?: string | undefined
                'filter[dst_ip]'?: string | undefined
                'filter[protocol]'?: number | undefined
                'filter[method]'?: string | undefined
              }
            }
            output: CallListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[transaction_id]'?: string | undefined
                'filter[src_ip]'?: string | undefined
                'filter[dst_ip]'?: string | undefined
                'filter[protocol]'?: number | undefined
                'filter[method]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[transaction_id]'?: string | undefined
                'filter[src_ip]'?: string | undefined
                'filter[dst_ip]'?: string | undefined
                'filter[protocol]'?: number | undefined
                'filter[method]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: bigint | undefined
                to?: bigint | undefined
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[transaction_id]'?: string | undefined
                'filter[src_ip]'?: string | undefined
                'filter[dst_ip]'?: string | undefined
                'filter[protocol]'?: number | undefined
                'filter[method]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactions/search': {
      $post:
        | {
            input: { json: SearchObject }
            output: CallListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SearchObject }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SearchObject }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SearchObject }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactions/messages': {
      $post:
        | {
            input: { json: TransactionSessionRequest }
            output: MessageListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/:messageId': {
      $get:
        | {
            input: { param: { messageId: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/:messageId/decoded': {
      $get:
        | {
            input: { param: { messageId: string } }
            output: MessageDecodedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactions/qos': {
      $post:
        | {
            input: { json: TransactionSessionRequest }
            output: QosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TransactionSessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports': {
      $post:
        | {
            input: { json: ExportRequest }
            output: ExportResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/:exportId': {
      $get:
        | {
            input: { param: { exportId: string } }
            output: ExportStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/:exportId/download': {
      $get:
        | {
            input: { param: { exportId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { exportId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/imports/pcap': {
      $post:
        | {
            input: {
              form: {
                file: File
                override_to_current_time?: 'true' | 'false' | '1' | '0' | 'on' | 'off' | undefined
                force_sip_table?: string | undefined
                force_table?: string | undefined
              }
            }
            output: ImportResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                file: File
                override_to_current_time?: 'true' | 'false' | '1' | '0' | 'on' | 'off' | undefined
                force_sip_table?: string | undefined
                force_table?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                file: File
                override_to_current_time?: 'true' | 'false' | '1' | '0' | 'on' | 'off' | undefined
                force_sip_table?: string | undefined
                force_table?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                file: File
                override_to_current_time?: 'true' | 'false' | '1' | '0' | 'on' | 'off' | undefined
                force_sip_table?: string | undefined
                force_table?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: DashboardListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: DashboardElement }
            output: IdResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dashboards/:dashboardId': {
      $get:
        | {
            input: { param: { dashboardId: string } }
            output: DashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { dashboardId: string } } & { json: DashboardElement }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } } & { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } } & { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } } & { json: DashboardElement }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { dashboardId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me/dashboards/reset': {
      $post:
        | { input: {}; output: MessageResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/mappings': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: MappingListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: MappingSchema }; output: IdResponse; outputFormat: 'json'; status: 201 }
        | {
            input: { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mappings/:mappingId': {
      $get:
        | {
            input: { param: { mappingId: string } }
            output: MappingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { mappingId: string } } & { json: MappingSchema }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mappingId: string } } & { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mappingId: string } } & { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mappingId: string } } & { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mappingId: string } } & { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mappingId: string } } & { json: MappingSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { mappingId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mappingId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mappings/fields': {
      $get:
        | {
            input: { query: { hepid: number; profile: string } }
            output: MappingFieldsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { hepid: number; profile: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { hepid: number; profile: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { hepid: number; profile: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/hepsubs': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: HepsubListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[profile]'?: string | undefined
                'filter[hepid]'?: number | undefined
                'filter[hep_alias]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: HepsubSchema }; output: IdResponse; outputFormat: 'json'; status: 201 }
        | {
            input: { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/hepsubs/:hepsubId': {
      $get:
        | {
            input: { param: { hepsubId: string } }
            output: HepsubResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { hepsubId: string } } & { json: HepsubSchema }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hepsubId: string } } & { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hepsubId: string } } & { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hepsubId: string } } & { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hepsubId: string } } & { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hepsubId: string } } & { json: HepsubSchema }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { hepsubId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hepsubId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/aliases': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: AliasListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: AliasStruct }; output: IdResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/aliases/:aliasId': {
      $put:
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { aliasId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ipaliases': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: AliasListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[alias]'?: string | undefined
                'filter[ip]'?: string | undefined
                'filter[capture_id]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: AliasStruct }; output: IdResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: { json: AliasStruct }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/ipaliases/:aliasId': {
      $put:
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { aliasId: string } } & { json: AliasStruct }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { aliasId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { aliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advanced': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[category]'?: string | undefined
                'filter[param]'?: string | undefined
              }
            }
            output: GlobalSettingListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[category]'?: string | undefined
                'filter[param]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[category]'?: string | undefined
                'filter[param]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: GlobalSettingUpsert }
            output: IdResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advanced/:guid': {
      $get:
        | {
            input: { param: { guid: string } }
            output: GlobalSettingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { guid: string } } & { json: GlobalSettingUpsert }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guid: string } } & { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { guid: string } } & { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { guid: string } } & { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { guid: string } } & { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { guid: string } } & { json: GlobalSettingUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { guid: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { guid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[profile]'?: string | undefined
                'filter[type]'?: string | undefined
              }
            }
            output: HepScriptListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[profile]'?: string | undefined
                'filter[type]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'filter[profile]'?: string | undefined
                'filter[type]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: HepScriptUpsert }
            output: IdResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scripts/:scriptId': {
      $get:
        | {
            input: { param: { scriptId: string } }
            output: HepScriptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { scriptId: string } } & { json: HepScriptUpsert }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scriptId: string } } & { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scriptId: string } } & { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { scriptId: string } } & { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scriptId: string } } & { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scriptId: string } } & { json: HepScriptUpsert }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { scriptId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scriptId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/openapi.json': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth-tokens': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[name]'?: string | undefined
                'filter[active]'?: boolean | undefined
              }
            }
            output: AuthTokenListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[name]'?: string | undefined
                'filter[active]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[name]'?: string | undefined
                'filter[active]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[name]'?: string | undefined
                'filter[active]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[name]'?: string | undefined
                'filter[active]'?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AuthTokenCreate }
            output: AuthTokenCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AuthTokenCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuthTokenCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AuthTokenCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AuthTokenCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/auth-tokens/:tokenId': {
      $get:
        | {
            input: { param: { tokenId: string } }
            output: AuthTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tokenId: string } } & { json: AuthTokenUpdate }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: string } } & { json: AuthTokenUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenId: string } } & { json: AuthTokenUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenId: string } } & { json: AuthTokenUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenId: string } } & { json: AuthTokenUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenId: string } } & { json: AuthTokenUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agents/subscriptions': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[type]'?: string | undefined
                'filter[node]'?: string | undefined
              }
            }
            output: AgentSubListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[type]'?: string | undefined
                'filter[node]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[type]'?: string | undefined
                'filter[node]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                'filter[type]'?: string | undefined
                'filter[node]'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: AgentSub }; output: IdResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: AgentSub }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: AgentSub }; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: { json: AgentSub }; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: { json: AgentSub }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/agents/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: AgentSubResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { subscriptionId: string } } & { json: AgentSub }
            output: IdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & { json: AgentSub }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & { json: AgentSub }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & { json: AgentSub }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } } & { json: AgentSub }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & { json: AgentSub }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { subscriptionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agents/types': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: AgentTypeListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agents/types/:type': {
      $get:
        | {
            input: { param: { type: string } } & {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: AgentSubListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agents/search': {
      $post:
        | {
            input: { json: AgentSearchRequest }
            output: AgentSubListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AgentSearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AgentSearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AgentSearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/db/nodes': {
      $get:
        | { input: {}; output: NodeListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/modules': {
      $get:
        | { input: {}; output: ModulesStatusResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/statistics/query': {
      $post:
        | {
            input: { json: StatisticQuery }
            output: StatisticResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StatisticQuery }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StatisticQuery }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StatisticQuery }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/statistics/databases': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: StatisticDbResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/statistics/measurements': {
      $get:
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: StatisticMeasurementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/statistics/metrics': {
      $get:
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: StatisticMetricsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/statistics/tags': {
      $get:
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: StatisticTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                db: string
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/logs/loki/labels': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: LokiLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/logs/loki/values': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: LokiValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/logs/loki/query': {
      $post:
        | {
            input: { json: LokiQuery }
            output: LokiQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: LokiQuery }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: LokiQuery }; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: { json: LokiQuery }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/integrations/grafana/status': {
      $get:
        | { input: {}; output: GrafanaStatusResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/integrations/grafana/folders': {
      $get:
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: GrafanaFoldersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'page[limit]'?: number | undefined
                'page[cursor]'?: string | undefined
                sort?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/integrations/grafana/dashboards/:uid': {
      $get:
        | {
            input: { param: { uid: string } }
            output: GrafanaDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { uid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stream/hep': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 101 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  },
  '/'
>
export default routes
