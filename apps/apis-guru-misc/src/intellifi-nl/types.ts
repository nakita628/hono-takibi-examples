type Url = string
type IdReadOnly = string
type TimeCreated = string
type TimeUpdated = string
type TimeLastAccessed = string
type Blob = {
  blob_key?: string | undefined
  content_type?: string | undefined
  download_url?: Url | undefined
  filename?: string | undefined
  hash?: string | undefined
  id?: IdReadOnly | undefined
  time_created?: TimeCreated | undefined
  time_last_accessed?: TimeLastAccessed | undefined
  time_updated?: TimeUpdated | undefined
  upload_url?: Url | undefined
  url?: Url | undefined
}
type ResponseDefaultResource = {
  resource?: { id?: IdReadOnly | undefined; url?: Url | undefined } | undefined
  status?: number | undefined
}
type EventTopicResourceType =
  | 'blobs'
  | 'items'
  | 'keys'
  | 'kvpairs'
  | 'locations'
  | 'presences'
  | 'services'
  | 'spots'
  | 'subscriptions'
  | 'users'
type EventTopicAction =
  | 'created'
  | 'updated'
  | 'deleted'
  | 'disappeared'
  | 'connection-rssi-changed'
type TimeExpire = string
type TimeEvent = string
type EventTopicArgument = { [x: string]: unknown }
type Event = {
  id?: IdReadOnly | undefined
  payload?: { [x: string]: unknown } | undefined
  time_created?: TimeCreated | undefined
  time_event?: TimeEvent | undefined
  time_expire?: TimeExpire | undefined
  topic?:
    | {
        action?: EventTopicAction | undefined
        arguments?: EventTopicArgument | undefined
        resource_id?: IdReadOnly | undefined
        resource_type?: EventTopicResourceType | undefined
        resource_url?: Url | undefined
      }
    | undefined
  url?: Url | undefined
}
type CodeHex = string
type Label = string
type MoveCount = number
type ItemProtocol =
  | 'altbeacon'
  | 'uniwear'
  | 'nfc'
  | 'generic'
  | 'eddystone'
  | 'epcgen2'
  | 'ibeacon'
  | 'nanoble'
type Technology = 'bluetooth' | 'optical' | 'rfid'
type TimeMoved = string
type ItemType = 'barcode' | 'bluetitan' | 'gbtag' | 'relay' | 'smarttag' | 'tag'
type ConfigRequest = { [x: string]: unknown }
type Custom = { [x: string]: unknown } | null
type LocationRequest = string
type Metadata = { [x: string]: unknown }
type GeoCoordsReadOnly = {
  lat?: number | undefined
  lng?: number | undefined
  time_updated?: TimeUpdated | undefined
}
type ListOfSetIds = IdReadOnly[]
type Item = {
  config_request?: ConfigRequest | undefined
  custom?: Custom | undefined
  label?: Label | undefined
  location_request?: LocationRequest | undefined
  metadata?: Metadata | undefined
  code_hex?: CodeHex | undefined
  geo_coords?: GeoCoordsReadOnly | undefined
  id?: IdReadOnly | undefined
  is_present?: boolean | undefined
  move_count?: MoveCount | undefined
  protocol?: ItemProtocol | undefined
  sets?: ListOfSetIds | undefined
  technology?: Technology | undefined
  time_created?: TimeCreated | undefined
  time_last_present?: string | undefined
  time_moved?: TimeMoved | undefined
  time_updated?: TimeUpdated | undefined
  type?: ItemType | undefined
  url?: Url | undefined
}
type ItemUpdate = {
  config_request?: ConfigRequest | undefined
  custom?: Custom | undefined
  label?: Label | undefined
  location_request?: LocationRequest | undefined
  metadata?: Metadata | undefined
}
type Key = {
  id?: IdReadOnly | undefined
  is_read_only?: boolean | undefined
  label?: string | undefined
  secret?: string | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
}
type KeyValuePair = {
  kv_value?: ({ [x: string]: unknown } | null) | undefined
  id?: IdReadOnly | undefined
  kv_key?: string | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
}
type KeyValuePairUpdate = { kv_value?: ({ [x: string]: unknown } | null) | undefined }
type LocationRuleType = 'allow' | 'disallow' | 'disappeared' | 'debounce'
type RuleEnabled = boolean
type Location = {
  custom?: Custom | undefined
  id?: IdReadOnly | undefined
  label?: Label | undefined
  metadata?: Metadata | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
}
type LocationRuleParameters = { [x: string]: unknown }
type LocationRule = {
  conditions?:
    | { from_location?: Location | undefined }
    | { from_location_id?: IdReadOnly | undefined }
    | { from_location_url?: Url | undefined }
    | { to_location?: Location | undefined }
    | { to_location_id?: IdReadOnly | undefined }
    | { to_location_url?: Url | undefined }
    | undefined
  enabled?: RuleEnabled | undefined
  id?: IdReadOnly | undefined
  label?: Label | undefined
  parameters?: LocationRuleParameters | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  type?: LocationRuleType | undefined
  url?: Url | undefined
}
type Id = string
type LocationRuleUpdate = {
  conditions?: { from_location?: Id | undefined; to_location?: Id | undefined } | undefined
  enabled?: RuleEnabled | undefined
  label?: Label | undefined
  parameters?: LocationRuleParameters | undefined
  type?: LocationRuleType | undefined
}
type Proximity = 'far' | 'near' | 'immediate'
type Presence = {
  id?: IdReadOnly | undefined
  item?: Item | undefined
  item_id?: IdReadOnly | undefined
  item_url?: Url | undefined
  location?: Location | undefined
  location_id?: IdReadOnly | undefined
  location_url?: Url | undefined
  proximity?: Proximity | undefined
  technology?: Technology | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
}
type Name = string
type BootCount = number
type Config = { [x: string]: unknown }
type RestartRequest = boolean
type Version = string
type Service = {
  boot_count?: BootCount | undefined
  config?: Config | undefined
  config_request?: ConfigRequest | undefined
  id?: IdReadOnly | undefined
  name?: Name | undefined
  restart_request?: RestartRequest | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
  version?: Version | undefined
}
type ItemList = {
  custom?: Custom | undefined
  id?: IdReadOnly | undefined
  label?: Label | undefined
  list?: Url | undefined
  metadata?: Metadata | undefined
  sha1?: string | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  total?: number | undefined
}
type ListOfItemIds = IdReadOnly[]
type ResponseListResource = { status?: number | undefined; total?: number | undefined }
type SpotList = {
  custom?: Custom | undefined
  id?: IdReadOnly | undefined
  label?: Label | undefined
  list?: Url | undefined
  metadata?: Metadata | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  total?: number | undefined
}
type IsOnline = boolean
type RequestCounter = number
type SerialNumber = number
type GeoCoords = {
  lat?: number | undefined
  lng?: number | undefined
  time_updated?: TimeUpdated | undefined
}
type Senses = { [x: string]: unknown }
type SensesRequest = { [x: string]: unknown }
type SpotGet = {
  antenna_report_locations?:
    | {
        antenna_number?: number | undefined
        report_location?: Location | undefined
        report_location_id?: IdReadOnly | undefined
        report_location_url?: Url | undefined
      }[]
    | undefined
  config?: Config | undefined
  config_request?: ConfigRequest | undefined
  geo_coords?: GeoCoords | undefined
  id?: IdReadOnly | undefined
  is_online?: IsOnline | undefined
  request_counter?: RequestCounter | undefined
  senses?: Senses | undefined
  senses_request?: SensesRequest | undefined
  serial_number?: SerialNumber | undefined
  status?: { [x: string]: unknown } | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
}
type SpotUpdate = {
  antenna_report_locations?:
    | {
        antenna_number?: number | undefined
        report_location?: Location | undefined
        report_location_id?: IdReadOnly | undefined
        report_location_url?: Url | undefined
      }[]
    | undefined
  config?: Config | undefined
  config_request?: ConfigRequest | undefined
  geo_coords?: GeoCoords | undefined
  id?: IdReadOnly | undefined
  is_online?: IsOnline | undefined
  request_counter?: RequestCounter | undefined
  senses?: Senses | undefined
  senses_request?: SensesRequest | undefined
  serial_number?: SerialNumber | undefined
  status?: { [x: string]: unknown } | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  url?: Url | undefined
  report_location?: Id | undefined
}
type SpotSet = {
  created_by?: string | undefined
  id?: IdReadOnly | undefined
  setid?: number | undefined
  spot_id?: IdReadOnly | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
}
type SpotSetCreate = {
  created_by?: string | undefined
  id?: IdReadOnly | undefined
  setid?: number | undefined
  spot_id?: IdReadOnly | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
}
type SpotSetUpdate = { delete?: boolean | undefined }
type Subscription = {
  custom?: Custom | undefined
  database_hold_time_h?: number | undefined
  description?: (string | null) | undefined
  events_url?: Url | undefined
  id?: IdReadOnly | undefined
  populate_events?: boolean | undefined
  target_delivery_last_failure?: { [x: string]: unknown } | undefined
  target_delivery_status?: { [x: string]: unknown } | undefined
  target_retry?: boolean | undefined
  target_url?: string | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeUpdated | undefined
  topic_filter?: string | undefined
  url?: Url | undefined
  verify_target_certificate?: boolean | undefined
}
type User = {
  email?: string | undefined
  first_name?: string | undefined
  id?: IdReadOnly | undefined
  is_admin?: boolean | undefined
  is_locked?: boolean | undefined
  last_name?: string | undefined
  password?: string | undefined
  time_created?: TimeCreated | undefined
  time_updated?: TimeCreated | undefined
  url?: Url | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/authinfo': {
      $get: {
        input: {}
        output: {
          api_key_id?: string | undefined
          auth_method?: 'user_session' | 'internal' | 'static_api_key' | undefined
          authenticated?: boolean | undefined
          permissions?: { mutate?: boolean | undefined } | undefined
          url?: Url | undefined
          user_id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/blobs': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            hash?: string | undefined
            blob_key?: string | undefined
            content_type?: string | undefined
            filename?: string | undefined
            time_last_accessed?: string | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Blob[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Blob }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/blobs/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { id: string } }; output: Blob; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/blobs/:id/download/:filename': {
      $get: {
        input: { param: { id: string; filename: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/blobs/:id/upload': {
      $post: {
        input: { param: { id: string } } & { form: { file?: File | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/events': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            'topic.resource_type'?: EventTopicResourceType | undefined
            'topic.action'?: EventTopicAction | undefined
            'topic.resource'?: IdReadOnly | undefined
            time_event?: TimeExpire | undefined
            time_expire?: TimeExpire | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Event[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/:id': {
      $get: { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/items': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            after_code?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            before_code?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            from_code?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            until_code?: string | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            code_hex?: CodeHex | undefined
            is_present?: boolean | undefined
            label?: Label | undefined
            location?: IdReadOnly | undefined
            metadata?: string | undefined
            move_count?: MoveCount | undefined
            protocol?: ItemProtocol | undefined
            sets?: IdReadOnly | undefined
            technology?: Technology | undefined
            text?: string | undefined
            time_last_present?: string | undefined
            time_moved?: TimeMoved | undefined
            type?: ItemType | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Item[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Item }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/items/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { id: string } }; output: Item; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: ItemUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/keys': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            secret?: string | undefined
            label?: string | undefined
            is_read_only?: boolean | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Key[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Key }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/keys/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { id: string } }; output: Key; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: Key }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kvpairs': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            kv_key?: string | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: KeyValuePair[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: KeyValuePair }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/kvpairs/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: KeyValuePair
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: KeyValuePairUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/locationrules': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            label?: Label | undefined
            type?: LocationRuleType | undefined
            enabled?: RuleEnabled | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: LocationRule[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: LocationRuleUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/locationrules/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: LocationRule
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: LocationRuleUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/locations': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            label?: Label | undefined
            metadata?: string | undefined
            text?: string | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Location[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Location }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/locations/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: Location
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: Location }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presences': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            item?: IdReadOnly | undefined
            location?: IdReadOnly | undefined
            proximity?: Proximity | undefined
            technology?: Technology | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Presence[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presences/:id': {
      $get: {
        input: { param: { id: string } }
        output: Presence
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/services': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            name?: Name | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Service[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/services/:id': {
      $get: { input: { param: { id: string } }; output: Service; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: Service }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sets/itemlists': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            label?: Label | undefined
            metadata?: string | undefined
            text?: string | undefined
            total?: number | undefined
            sha1?: string | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: ItemList[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ItemList }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sets/itemlists/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ItemList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ItemList }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sets/itemlists/:id/ids': {
      $get: {
        input: { param: { id: string } }
        output: ListOfItemIds
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: ListOfItemIds }
        output: ResponseListResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sets/itemlists/:id/ids/:itemId': {
      $delete: {
        input: { param: { id: string; itemId: string } }
        output: ResponseListResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sets/spotlists': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            label?: Label | undefined
            metadata?: string | undefined
            text?: string | undefined
            total?: number | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: SpotList[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ItemList }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sets/spotlists/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: SpotList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: SpotList }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sets/spotlists/:id/ids': {
      $get: {
        input: { param: { id: string } }
        output: ListOfItemIds
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: ListOfItemIds }
        output: ResponseListResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sets/spotlists/:id/ids/:itemId': {
      $delete: {
        input: { param: { id: string; itemId: string } }
        output: ResponseListResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spots': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            is_online?: IsOnline | undefined
            request_counter?: RequestCounter | undefined
            serial_number?: SerialNumber | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: SpotGet[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spots/:id': {
      $get: { input: { param: { id: string } }; output: SpotGet; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: SpotUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spots/:id/sets': {
      $get: { input: { param: { id: string } }; output: SpotSet; outputFormat: 'json'; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: SpotSetCreate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spots/:id/sets/:setId': {
      $get: {
        input: { param: { id: string; setId: string } }
        output: SpotSet
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; setId: string } } & { json: SpotSetUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/spotsets': {
      $get: { input: {}; output: SpotSet; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SpotSetCreate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/spotsets/:id': {
      $get: { input: { param: { id: string } }; output: SpotSet; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: SpotSetUpdate }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscriptions': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            topic_filter?: string | undefined
            description?: string | undefined
            database_hold_time_h?: number | undefined
            populate_events?: boolean | undefined
            verify_target_certificate?: boolean | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Subscription[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Subscription }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/subscriptions/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: Subscription }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscriptions/:id/events': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            'topic.resource_type'?: EventTopicResourceType | undefined
            'topic.action'?: EventTopicAction | undefined
            'topic.resource'?: IdReadOnly | undefined
            time_event?: TimeExpire | undefined
            time_expire?: TimeExpire | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: Event[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            after_id?: string | undefined
            before?: string | undefined
            before_id?: string | undefined
            from?: string | undefined
            from_id?: string | undefined
            id_only?: boolean | undefined
            limit?: number | undefined
            populate?: string | undefined
            results_only?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            until?: string | undefined
            until_id?: string | undefined
            timeout_s?: number | undefined
            id?: IdReadOnly | undefined
            time_created?: TimeCreated | undefined
            time_updated?: TimeUpdated | undefined
            email?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            is_admin?: boolean | undefined
            is_locked?: boolean | undefined
          }
        }
        output: {
          count?: number | undefined
          count_current?: number | undefined
          is_limited?: boolean | undefined
          next_url?: string | undefined
          query_duration_ms?: number | undefined
          url?: Url | undefined
          results?: User[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: User }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:id': {
      $delete: {
        input: { param: { id: string } }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { id: string } }; output: User; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: User }
        output: ResponseDefaultResource
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
