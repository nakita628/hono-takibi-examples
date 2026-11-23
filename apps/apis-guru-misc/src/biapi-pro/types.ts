type AccountType = {
  color?: string | undefined
  display_name: string
  display_name_p: string
  id: number
  id_parent?: number | undefined
  is_invest: boolean
  name: string
  product?: string | undefined
  weboob_type_id: number
}
type Connector = {
  auth_mechanism?: string | undefined
  beta: boolean
  charged: boolean
  code?: string | undefined
  color?: string | undefined
  hidden?: boolean | undefined
  id: number
  months_to_fetch?: number | undefined
  name: string
  restricted: boolean
  siret?: string | undefined
  slug?: string | undefined
  sync_frequency?: number | undefined
  uuid: string
}
type ConnectorCategory = { id: number; name: string }
type Connection = {
  active: boolean
  created?: string | undefined
  id: number
  id_connector: number
  id_user?: number | undefined
  last_push?: string | undefined
  last_update?: string | undefined
  next_try?: string | undefined
}
type ConnectorLogo = {
  id: number
  id_connector: number
  id_file: number
  type?: string | undefined
}
type ConnectorSource = {
  auth_mechanism?: string | undefined
  disabled?: string | undefined
  disabled_capabilities?: string | undefined
  fallback?: string | undefined
  id: number
  id_connector: number
  id_weboob: string
  name: string
  priority?: number | undefined
  stability?: string | undefined
}
type ConnectorSourceField = {
  id_connector_source: number
  label: string
  name: string
  regex?: string | undefined
  required?: boolean | undefined
  secret?: boolean | undefined
  type?: string | undefined
}
type Category = {
  color: string
  id: number
  id_logo?: number | undefined
  id_parent_category: number
  id_parent_category_in_menu: number
  id_user?: number | undefined
  income?: boolean | undefined
  name: string
  name_displayed?: string | undefined
  refundable: boolean
}
type Keyword = {
  id: number
  id_category: number
  income: boolean
  keyword: string
  priority: number
}
type Certificate = {
  created: string
  id: number
  id_private_key_file: number
  id_public_key_file: number
  type: string
}
type Client = {
  config?: string | undefined
  id: number
  id_logo?: number | undefined
  name: string
  private_key?: string | undefined
  pro: boolean
  public_key?: string | undefined
  redirect_uris: string
  secret: string
}
type File2 = { content_type: string; file_size: number; filename: string; id: number }
type ConfigLog = {
  id: number
  key: string
  new_value?: string | undefined
  origin?: string | undefined
  previous_value?: string | undefined
  timestamp: string
  type: string
}
type ConnectionLog = {
  error?: string | undefined
  error_message?: string | undefined
  error_uid?: string | undefined
  fields?: string | undefined
  id: number
  id_connection: number
  id_connector?: number | undefined
  id_source?: number | undefined
  id_user?: number | undefined
  login?: string | undefined
  nb_accounts?: number | undefined
  next_try?: string | undefined
  session_folder_id?: string | undefined
  start?: string | undefined
  statut?: number | undefined
  timestamp: string
  worker?: string | undefined
}
type ConnectionSource = {
  access_expire?: string | undefined
  created: string
  disabled?: string | undefined
  expire?: string | undefined
  id: number
  id_connection: number
  id_connector_source: number
  last_update?: string | undefined
  name: string
  next_try?: string | undefined
  state?: string | undefined
}
type Psd2Registration = { id: number; id_connector_source?: number | undefined; status: string }
type Psd2RegistrationLog = {
  created_at: string
  error_message?: string | undefined
  id: number
  id_psd2registration?: number | undefined
  type: string
}
type User = {
  id: number
  platform:
    | 'web'
    | 'iPad'
    | 'iPhone'
    | 'Android'
    | 'CAstore'
    | 'requestAccess'
    | 'sharedAccess'
    | 'singleAccess'
    | 'transfer'
    | 'refresh_token'
  signin: string
}
type TransactionsCluster = {
  created_by?: string | undefined
  enabled: boolean
  id: number
  id_account: number
  id_category?: number | undefined
  mean_amount: number
  median_increment?: number | undefined
  next_date?: string | undefined
  wording: string
}
type Alert = {
  id: number
  id_account?: number | undefined
  id_investment?: number | undefined
  id_transaction?: number | undefined
  id_user: number
  timestamp: string
  type: string
  value: number
}
type Account = {
  balance: number
  bookmarked: number
  coming?: number | undefined
  company_name?: string | undefined
  currency?: { [x: string]: unknown } | undefined
  deleted?: string | undefined
  disabled?: string | undefined
  display: boolean
  error?: string | undefined
  iban?: string | undefined
  id: number
  id_connection?: number | undefined
  id_parent?: number | undefined
  id_source?: number | undefined
  id_type?: number | undefined
  id_user?: number | undefined
  last_update?: string | undefined
  name?: string | undefined
  number?: string | undefined
  opening_date?: string | undefined
  original_name: string
  ownership?: string | undefined
  usage?: string | undefined
  webid?: string | undefined
}
type AccountLog = {
  balance: number
  coming?: number | undefined
  error?: string | undefined
  error_message?: string | undefined
  id: number
  id_account: number
  id_connection_log?: number | undefined
  id_connector?: number | undefined
  timestamp: string
}
type Transaction = {
  active: boolean
  application_date?: string | undefined
  bdate?: string | undefined
  bdatetime?: string | undefined
  card?: string | undefined
  coming: boolean
  comment?: string | undefined
  commission?: number | undefined
  commission_currency?: { [x: string]: unknown } | undefined
  counterparty?: string | undefined
  country?: string | undefined
  date: string
  date_scraped: string
  datetime?: string | undefined
  deleted?: string | undefined
  gross_value?: number | undefined
  id: number
  id_account: number
  id_category?: number | undefined
  id_cluster?: number | undefined
  last_update?: string | undefined
  nature: string
  original_currency?: { [x: string]: unknown } | undefined
  original_gross_value?: number | undefined
  original_value?: number | undefined
  original_wording: string
  rdate: string
  rdatetime?: string | undefined
  simplified_wording: string
  state: string
  stemmed_wording: string
  value?: number | undefined
  vdate?: string | undefined
  vdatetime?: string | undefined
  webid?: string | undefined
  wording?: string | undefined
}
type TransactionInformation = {
  id: number
  id_transaction: number
  key: string
  value?: string | undefined
}
type Profile = {
  admin: boolean
  conf?: string | undefined
  email: string
  id: number
  id_user: number
  lang?: string | undefined
  role: 'admin' | 'ser'
  statut: number
}
type Webhook = {
  add_to_data?: string | undefined
  created: string
  deleted?: string | undefined
  flush_fail?: string | undefined
  id: number
  id_auth?: number | undefined
  id_event?: number | undefined
  id_service?: number | undefined
  id_user?: number | undefined
  updated: string
  url?: string | undefined
}
type AuthProvider = { id: number; name: string; type: string }
type WebhookLog = {
  id: number
  id_service?: number | undefined
  id_user?: number | undefined
  id_webhook_data?: number | undefined
  next_try?: string | undefined
  response_code?: number | undefined
  response_date?: string | undefined
  timestamp: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account_types': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { accounttypes: AccountType[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account_types/:id_account_type': {
      $get: {
        input: { param: { id_account_type: number } } & { query: { expand?: string | undefined } }
        output: AccountType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/jwt': {
      $post: {
        input: { form: { duration?: number | undefined; scope?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/init': {
      $post: {
        input: { form: { client_id?: string | undefined; client_secret?: string | undefined } }
        output: { auth_token: string; expires_in?: number | undefined; type: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/jwt': {
      $post: {
        input: {
          form: {
            client_id?: string | undefined
            client_secret?: string | undefined
            expire?: boolean | undefined
            id_user?: number | undefined
            scope?: string | undefined
          }
        }
        output: { jwt_token: string; payload: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/renew': {
      $post: {
        input: {
          form: {
            client_id: string
            client_secret: string
            grant_type?: string | undefined
            id_user: number
            revoke_previous?: boolean | undefined
          }
        }
        output: { access_token: string; token_type: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/token': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          form: {
            application: string
            grant_type?: string | undefined
            password: string
            scope?: string | undefined
            username: string
          }
        }
        output: { expires_in?: number | undefined; scope: string; token: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/token/access': {
      $post: {
        input: {
          form: {
            client_id: string
            client_secret: string
            code: string
            grant_type?: string | undefined
            redirect_uri?: string | undefined
          }
        }
        output: { access_token: string; token_type: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/token/code': {
      $get: {
        input: {}
        output: { access: string; code: string; expires_in: number; type: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { banks: Connector[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/categories': {
      $post: {
        input: { query: { expand?: string | undefined } } & { form: { name: string } }
        output: ConnectorCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/categories/:id_category': {
      $delete: {
        input: { param: { id_category: number } } & { query: { expand?: string | undefined } }
        output: ConnectorCategory
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_category: number } } & { query: { expand?: string | undefined } } & {
          form: { name: string }
        }
        output: ConnectorCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_bank': {
      $get: {
        input: { param: { id_bank: number } } & { query: { expand?: string | undefined } }
        output: Connector
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/connections': {
      $get: {
        input: { param: { id_connector: number } } & {
          query: {
            method?: string | undefined
            n?: number | undefined
            type?: number | undefined
            occurences?: number | undefined
            source?: string | undefined
            minutes_without_sync?: number | undefined
            expand?: string | undefined
          }
        }
        output: { connections: Connection[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/logos': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/logos/main': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/logos/thumbnail': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/sources': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { sources: ConnectorSource[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/sources/:id_connector_source/fields': {
      $get: {
        input: { param: { id_connector: number; id_connector_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: { source_fields: ConnectorSourceField[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/banks/:id_connector/sources/:id_source': {
      $get: {
        input: { param: { id_connector: number; id_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectorSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { categories: Category[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/keywords': {
      $post: {
        input: { query: { expand?: string | undefined } }
        output: Keyword
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/keywords/:id_keyword': {
      $delete: {
        input: { param: { id_keyword: number } } & { query: { expand?: string | undefined } }
        output: Keyword
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categorize': {
      $post: {
        input: { form: { type: string; value: number; wording: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/certificate/:type': {
      $get: {
        input: { param: { type: string } } & { query: { expand?: string | undefined } }
        output: Certificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clients': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { clients: Client[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { expand?: string | undefined } } & {
          form: {
            config?: string | undefined
            generate_keys?: boolean | undefined
            name?: string | undefined
            redirect_uris?: string | undefined
          }
        }
        output: Client
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clients/:id_client': {
      $delete: {
        input: { param: { id_client: number } } & { query: { expand?: string | undefined } }
        output: Client
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_client: number } } & { query: { expand?: string | undefined } }
        output: Client
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_client: number } } & { query: { expand?: string | undefined } } & {
          form: {
            config?: string | undefined
            description?: string | undefined
            description_banks?: string | undefined
            description_providers?: string | undefined
            generate_keys?: boolean | undefined
            name?: string | undefined
            primary_color?: string | undefined
            pro?: boolean | undefined
            redirect_uris?: string | undefined
            secondary_color?: string | undefined
            secret?: boolean | undefined
            update_config?: boolean | undefined
          }
        }
        output: Client
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clients/:id_client/logo': {
      $delete: {
        input: { param: { id_client: number } } & { query: { expand?: string | undefined } }
        output: File2
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_client: number } } & { query: { expand?: string | undefined } }
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config': {
      $get: {
        input: { query: { search?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/config/logs': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            type?: string | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            expand?: string | undefined
          }
        }
        output: { configlogs: ConfigLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connections': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { connections: Connection[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connections/:id_connection/logs': {
      $get: {
        input: { param: { id_connection: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            period?: string | undefined
            id_user?: number | undefined
            id_connection?: number | undefined
            id_connector?: number | undefined
            connector_uuid?: string | undefined
            error?: string | undefined
            id_source?: number | undefined
            id_max?: number | undefined
            expand?: string | undefined
          }
        }
        output: { connectionlogs: ConnectionLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connections/:id_connection/sources': {
      $get: {
        input: { param: { id_connection: number } } & { query: { expand?: string | undefined } }
        output: { sources: ConnectionSource[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connections/:id_connection/sources/:id_source': {
      $delete: {
        input: { param: { id_connection: number; id_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectionSource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_connection: number; id_source: number } } & {
          query: { background?: boolean | undefined; expand?: string | undefined }
        } & { form: { disabled?: boolean | undefined; synchronize?: boolean | undefined } }
        output: ConnectionSource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_connection: number; id_source: number } } & {
          query: { background?: boolean | undefined; expand?: string | undefined }
        } & {
          form: {
            disabled?: boolean | undefined
            force?: boolean | undefined
            synchronize?: boolean | undefined
          }
        }
        output: ConnectionSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { connectors: Connector[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { expand?: string | undefined } } & {
          form: {
            comment?: string | undefined
            email?: string | undefined
            login: string
            name: string
            password: string
            sendmail?: boolean | undefined
            types?: string | undefined
            url?: string | undefined
          }
        }
        output: Connector
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { expand?: string | undefined } } & {
          form: { hidden?: boolean | undefined }
        }
        output: Connector
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: Connector
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } } & {
          form: {
            auth_mechanism?: string | undefined
            hidden?: boolean | undefined
            id_categories?: string | undefined
            sync_frequency?: number | undefined
          }
        }
        output: Connector
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/logos': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: ConnectorLogo
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: ConnectorLogo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/logos/main': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/logos/thumbnail': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/logos/:id_logo': {
      $delete: {
        input: { param: { id_connector: number; id_logo: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectorLogo
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_connector: number; id_logo: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectorLogo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/sources': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { sources: ConnectorSource[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } } & {
          form: {
            disabled_capabilities?: string | undefined
            unavailable_capabilities?: string | undefined
          }
        }
        output: ConnectorSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/sources/:id_connector_source/fields': {
      $get: {
        input: { param: { id_connector: number; id_connector_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: { source_fields: ConnectorSourceField[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connectors/:id_connector/sources/:id_source': {
      $get: {
        input: { param: { id_connector: number; id_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectorSource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_connector: number; id_source: number } } & {
          query: { expand?: string | undefined }
        } & {
          form: {
            auth_mechanism?: string | undefined
            disabled?: boolean | undefined
            disabled_capabilities?: string | undefined
            unavailable?: boolean | undefined
            unavailable_capabilities?: string | undefined
          }
        }
        output: ConnectorSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/incidents': {
      $get: {
        input: {
          query: {
            state?: string | undefined
            id?: number | undefined
            weboob_id?: string | undefined
            start_date?: string | undefined
            end_date?: string | undefined
            page?: number | undefined
            size?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/invoicing': {
      $get: {
        input: {
          query: {
            min_date?: string | undefined
            max_date?: string | undefined
            users_synced?: string | undefined
            users_bank?: string | undefined
            users_bill?: string | undefined
            accounts_synced?: string | undefined
            subscriptions_synced?: string | undefined
            connections_synced?: string | undefined
            connections_account?: string | undefined
            transfers_synced?: string | undefined
            payments_synced?: string | undefined
            all?: string | undefined
            detail?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/logs': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            period?: string | undefined
            id_user?: number | undefined
            id_connection?: number | undefined
            id_connector?: number | undefined
            connector_uuid?: string | undefined
            error?: string | undefined
            id_source?: number | undefined
            id_max?: number | undefined
            expand?: string | undefined
          }
        }
        output: { connectionlogs: ConnectionLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/monitoring': {
      $get: {
        input: { query: { period?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/providers': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { providers: Connector[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/connections': {
      $get: {
        input: { param: { id_connector: number } } & {
          query: { range?: number | undefined; expand?: string | undefined }
        }
        output: { connections: Connection[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/logos': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/logos/main': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/logos/thumbnail': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { connectorlogos: ConnectorLogo[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/sources': {
      $get: {
        input: { param: { id_connector: number } } & { query: { expand?: string | undefined } }
        output: { sources: ConnectorSource[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/sources/:id_connector_source/fields': {
      $get: {
        input: { param: { id_connector: number; id_connector_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: { source_fields: ConnectorSourceField[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_connector/sources/:id_source': {
      $get: {
        input: { param: { id_connector: number; id_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectorSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/providers/:id_provider': {
      $get: {
        input: { param: { id_provider: number } } & { query: { expand?: string | undefined } }
        output: Connector
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/psd2-registrations': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { psd2registrations: Psd2Registration[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/psd2-registrations/:id_psd2-registration': {
      $get: {
        input: { param: { 'id_psd2-registration': number } } & {
          query: { expand?: string | undefined }
        }
        output: Psd2Registration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/psd2-registrations/:id_psd2registration/logs': {
      $get: {
        input: { param: { id_psd2registration: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            expand?: string | undefined
          }
        }
        output: { psd2registrationlogs: Psd2RegistrationLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/publickey': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/test/sync': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/test/webhooks': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/users': {
      $get: {
        input: { query: { search?: string | undefined; expand?: string | undefined } }
        output: { total?: number | undefined; users: User[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user': {
      $delete: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/account_types': {
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: { accounttypes: AccountType[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/account_types/:id_account_type': {
      $get: {
        input: { param: { id_user: string; id_account_type: number } } & {
          query: { expand?: string | undefined }
        }
        output: AccountType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/accounts/:id_account/categories': {
      $get: {
        input: { param: { id_user: string; id_account: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id_user/accounts/:id_account/transactionsclusters': {
      $get: {
        input: { param: { id_user: string; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: { total?: number | undefined; transactionsclusters: TransactionsCluster[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/accounts/:id_account/transactionsclusters/:id_transactionscluster': {
      $delete: {
        input: {
          param: { id_user: string; id_account: number; id_transactionscluster: number }
        } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { id_user: string; id_account: number; id_transactionscluster: number }
        } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/alerts': {
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: { alerts: Alert[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/categories': {
      $get: { input: { param: { id_user: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/users/:id_user/categories/full': {
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: { categorys: Category[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } } & {
          form: {
            accountant_account?: string | undefined
            color?: string | undefined
            id_parent_category?: number | undefined
            id_parent_category_in_menu?: number | undefined
            income?: boolean | undefined
            name?: string | undefined
            refundable?: boolean | undefined
          }
        }
        output: Category
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/categories/full/:id_full': {
      $delete: {
        input: { param: { id_user: string; id_full: number } } & {
          query: { expand?: string | undefined }
        }
        output: Category
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_user: string; id_full: number } } & {
          query: { expand?: string | undefined }
        } & { form: { accountant_account?: string | undefined; hide?: string | undefined } }
        output: Category
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/config': {
      $delete: {
        input: { param: { id_user: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id_user: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections': {
      $delete: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: { connections: Connection[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string } } & {
          query: { source?: string | undefined; expand?: string | undefined }
        } & { form: { connector_uuid?: string | undefined; id_connector?: number | undefined } }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection': {
      $delete: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: {
            background?: boolean | undefined
            psu_requested?: boolean | undefined
            refresh_psd2_auth?: boolean | undefined
            expand?: string | undefined
          }
        } & {
          form: {
            active?: boolean | undefined
            decoupled?: boolean | undefined
            expire?: string | undefined
            login?: string | undefined
            password?: string | undefined
          }
        }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: {
            last_update?: string | undefined
            background?: boolean | undefined
            psu_requested?: boolean | undefined
            expand?: string | undefined
          }
        }
        output: Connection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts': {
      $delete: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: { accounts: Account[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        } & {
          form: {
            balance?: number | undefined
            iban?: string | undefined
            id_connection?: number | undefined
            id_currency?: string | undefined
            name: string
            number?: string | undefined
          }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account': {
      $delete: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        } & {
          form: {
            balance?: number | undefined
            bookmarked?: boolean | undefined
            disabled?: boolean | undefined
            display?: boolean | undefined
            iban?: string | undefined
            name?: string | undefined
            usage?: string | undefined
          }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/categories': {
      $get: {
        input: { param: { id_user: string; id_connection: number; id_account: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/delta': {
      $get: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: {
            min_date?: string | undefined
            max_date?: string | undefined
            period?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/logs': {
      $get: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            expand?: string | undefined
          }
        }
        output: { accountlogs: AccountLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/sources': {
      $get: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: { sources: ConnectionSource[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions': {
      $delete: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: Transaction
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            income?: boolean | undefined
            deleted?: boolean | undefined
            all?: boolean | undefined
            last_update?: string | undefined
            wording?: string | undefined
            min_value?: number | undefined
            max_value?: number | undefined
            search?: string | undefined
            value?: string | undefined
            id_category?: number | undefined
            expand?: string | undefined
          }
        }
        output: { total?: number | undefined; transactions: Transaction[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        } & {
          form: {
            active?: boolean | undefined
            coming?: boolean | undefined
            date: string
            date_scraped?: string | undefined
            id_account?: number | undefined
            original_wording: string
            rdate?: string | undefined
            state?: string | undefined
            type?: string | undefined
            value: number
          }
        }
        output: Transaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction': {
      $put: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transaction: number
          }
        } & { query: { expand?: string | undefined } } & {
          form: {
            active?: boolean | undefined
            application_date?: string | undefined
            comment?: string | undefined
            id_category?: number | undefined
            wording?: string | undefined
          }
        }
        output: Transaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations': {
      $delete: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transaction: number
          }
        } & { query: { expand?: string | undefined } }
        output: TransactionInformation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transaction: number
          }
        } & { query: { expand?: string | undefined } }
        output: { total?: number | undefined; transactioninformations: TransactionInformation[] }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transaction: number
          }
        } & { query: { expand?: string | undefined } }
        output: TransactionInformation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations/:id_information': {
      $delete: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transaction: number
            id_information: number
          }
        } & { query: { expand?: string | undefined } }
        output: TransactionInformation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transaction: number
            id_information: number
          }
        } & { query: { expand?: string | undefined } }
        output: TransactionInformation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters': {
      $get: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: { total?: number | undefined; transactionsclusters: TransactionsCluster[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_connection: number; id_account: number } } & {
          query: { expand?: string | undefined }
        }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters/:id_transactionscluster': {
      $delete: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transactionscluster: number
          }
        } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            id_user: string
            id_connection: number
            id_account: number
            id_transactionscluster: number
          }
        } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/informations': {
      $get: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: { connections: Connection[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/logs': {
      $get: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            period?: string | undefined
            id_user?: number | undefined
            id_connection?: number | undefined
            id_connector?: number | undefined
            connector_uuid?: string | undefined
            error?: string | undefined
            id_source?: number | undefined
            id_max?: number | undefined
            expand?: string | undefined
          }
        }
        output: { connectionlogs: ConnectionLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/sources': {
      $get: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: { sources: ConnectionSource[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/sources/:id_source': {
      $delete: {
        input: { param: { id_user: string; id_connection: number; id_source: number } } & {
          query: { expand?: string | undefined }
        }
        output: ConnectionSource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_connection: number; id_source: number } } & {
          query: { background?: boolean | undefined; expand?: string | undefined }
        } & { form: { disabled?: boolean | undefined; synchronize?: boolean | undefined } }
        output: ConnectionSource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_user: string; id_connection: number; id_source: number } } & {
          query: { background?: boolean | undefined; expand?: string | undefined }
        } & {
          form: {
            disabled?: boolean | undefined
            force?: boolean | undefined
            synchronize?: boolean | undefined
          }
        }
        output: ConnectionSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/transactionsclusters': {
      $get: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: { total?: number | undefined; transactionsclusters: TransactionsCluster[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string; id_connection: number } } & {
          query: { expand?: string | undefined }
        }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/connections/:id_connection/transactionsclusters/:id_transactionscluster': {
      $delete: {
        input: {
          param: { id_user: string; id_connection: number; id_transactionscluster: number }
        } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { id_user: string; id_connection: number; id_transactionscluster: number }
        } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/forecast': {
      $get: { input: { param: { id_user: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/users/:id_user/logs': {
      $get: {
        input: { param: { id_user: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            period?: string | undefined
            id_user?: number | undefined
            id_connection?: number | undefined
            id_connector?: number | undefined
            connector_uuid?: string | undefined
            error?: string | undefined
            id_source?: number | undefined
            id_max?: number | undefined
            expand?: string | undefined
          }
        }
        output: { connectionlogs: ConnectionLog[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/profiles': {
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: { profiles: Profile[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/profiles/main': {
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/profiles/:id_profile': {
      $get: {
        input: { param: { id_user: string; id_profile: number } } & {
          query: { expand?: string | undefined }
        }
        output: Profile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/token': {
      $post: {
        input: { param: { id_user: string } } & { form: { application: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/transactionsclusters': {
      $get: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: { total?: number | undefined; transactionsclusters: TransactionsCluster[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_user: string } } & { query: { expand?: string | undefined } }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id_user/transactionsclusters/:id_transactionscluster': {
      $delete: {
        input: { param: { id_user: string; id_transactionscluster: number } } & {
          query: { expand?: string | undefined }
        }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_user: string; id_transactionscluster: number } } & {
          query: { expand?: string | undefined }
        }
        output: TransactionsCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webauth': {
      $get: {
        input: {
          form: {
            client_id?: number | undefined
            id_transfer?: number | undefined
            redirect_uri?: string | undefined
            state?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/webhooks': {
      $delete: {
        input: { query: { expand?: string | undefined } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { total?: number | undefined; webhooks: Webhook[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { expand?: string | undefined } } & {
          form: {
            event?: string | undefined
            id_auth?: string | undefined
            id_service?: number | undefined
            id_user?: number | undefined
            params?: string | undefined
            url?: string | undefined
          }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/auth': {
      $delete: {
        input: { query: { expand?: string | undefined } }
        output: AuthProvider
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { authproviders: AuthProvider[]; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { expand?: string | undefined } } & {
          form: { config?: string | undefined; name: string; type: number }
        }
        output: AuthProvider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/auth/:id_auth': {
      $delete: {
        input: { param: { id_auth: number } } & { query: { expand?: string | undefined } }
        output: AuthProvider
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_auth: number } } & { query: { expand?: string | undefined } } & {
          form: { config?: string | undefined; name: string; type: number }
        }
        output: AuthProvider
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_auth: number } } & { query: { expand?: string | undefined } } & {
          form: { config?: string | undefined; name: string; type: number }
        }
        output: AuthProvider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:id_webhook': {
      $delete: {
        input: { param: { id_webhook: number } } & { query: { expand?: string | undefined } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_webhook: number } } & { query: { expand?: string | undefined } } & {
          form: {
            deleted?: string | undefined
            event?: string | undefined
            id_auth?: number | undefined
            id_service?: number | undefined
            id_user?: number | undefined
            url?: string | undefined
          }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id_webhook: number } } & { query: { expand?: string | undefined } } & {
          form: {
            deleted?: string | undefined
            event?: string | undefined
            id_auth?: number | undefined
            id_service?: number | undefined
            id_user?: number | undefined
            url?: string | undefined
          }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:id_webhook/add_to_data': {
      $delete: {
        input: { param: { id_webhook: number } } & { query: { expand?: string | undefined } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_webhook: number } } & { query: { expand?: string | undefined } }
        output: { total?: number | undefined; webhooks: Webhook[] }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_webhook: number } } & { query: { expand?: string | undefined } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:id_webhook/add_to_data/:key': {
      $delete: {
        input: { param: { id_webhook: number; key: string } } & {
          query: { expand?: string | undefined }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id_webhook: number; key: string } } & {
          query: { expand?: string | undefined }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id_webhook: number; key: string } } & {
          query: { expand?: string | undefined }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:id_webhook/logs': {
      $get: {
        input: { param: { id_webhook: number } } & {
          query: {
            id_user?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
            min_date?: string | undefined
            max_date?: string | undefined
            expand?: string | undefined
          }
        }
        output: { total?: number | undefined; webhooklogs: WebhookLog[] }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
