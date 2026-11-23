type GraphQLRequest = {
  operationName?: string | undefined
  query: string
  variables?: ({ [x: string]: unknown } | null) | undefined
}
type GraphQLResponse = {
  data?: { [x: string]: unknown } | undefined
  errors?: { [x: string]: unknown }[] | undefined
}
type ID = string
type ServiceCredentialType = {
  archived_at?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: ID | undefined
  kind?: string | undefined
  last_seen_at?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  refresh_state_part_id?: ID | undefined
  source_created_at?: string | undefined
  source_deleted_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  updated_at?: string | undefined
}
type CollectionLinks = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  prev?: string | undefined
}
type CollectionMetadata = {
  count?: number | undefined
  limit?: number | undefined
  offset?: number | undefined
}
type ServiceCredentialTypesCollection = {
  data?: ServiceCredentialType[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type ErrorNotFound = {
  errors?: { detail?: string | undefined; status?: string | undefined }[] | undefined
}
type ServiceCredential = {
  archived_at?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: ID | undefined
  last_seen_at?: string | undefined
  name?: string | undefined
  refresh_state_part_id?: ID | undefined
  service_credential_type_id?: ID | undefined
  source_created_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  source_updated_at?: string | undefined
  type_name?: string | undefined
  updated_at?: string | undefined
}
type ServiceCredentialsCollection = {
  data?: ServiceCredential[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type ServiceInstance = {
  archived_at?: string | undefined
  created_at?: string | undefined
  external_url?: string | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: ID | undefined
  last_seen_at?: string | undefined
  name?: string | undefined
  refresh_state_part_id?: ID | undefined
  root_service_instance_id?: ID | undefined
  service_inventory_id?: ID | undefined
  service_offering_id?: ID | undefined
  service_plan_id?: ID | undefined
  source_created_at?: string | undefined
  source_deleted_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  updated_at?: string | undefined
}
type ServiceInstancesCollection = {
  data?: ServiceInstance[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type ServiceInventory = {
  archived_at?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: ID | undefined
  last_seen_at?: string | undefined
  name?: string | undefined
  refresh_state_part_id?: ID | undefined
  source_created_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  source_updated_at?: string | undefined
  updated_at?: string | undefined
}
type ServiceInventoriesCollection = {
  data?: ServiceInventory[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type Tag = { tag?: string | undefined }
type TagsCollection = {
  data?: Tag[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type ServiceOfferingNode = {
  archived_at?: string | undefined
  created_at?: string | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: ID | undefined
  last_seen_at?: string | undefined
  name?: string | undefined
  refresh_state_part_id?: ID | undefined
  root_service_offering_id?: ID | undefined
  service_inventory_id?: ID | undefined
  service_offering_id?: ID | undefined
  source_created_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  source_updated_at?: string | undefined
  updated_at?: string | undefined
}
type ServiceOfferingNodesCollection = {
  data?: ServiceOfferingNode[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type ServiceOffering = {
  archived_at?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  display_name?: string | undefined
  distributor?: string | undefined
  documentation_url?: string | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: ID | undefined
  last_seen_at?: string | undefined
  long_description?: string | undefined
  name?: string | undefined
  refresh_state_part_id?: ID | undefined
  service_inventory_id?: ID | undefined
  source_created_at?: string | undefined
  source_deleted_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  support_url?: string | undefined
  updated_at?: string | undefined
}
type ServiceOfferingsCollection = {
  data?: ServiceOffering[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type AppliedInventoriesParametersServicePlan = {
  service_parameters?: { [x: string]: unknown } | undefined
}
type OrderParametersServiceOffering = {
  provider_control_parameters?: { [x: string]: unknown } | undefined
  service_parameters?: { [x: string]: unknown } | undefined
  service_plan_id?: ID | undefined
}
type ServicePlan = {
  archived_at?: string | undefined
  create_json_schema?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  description?: string | undefined
  extra?: { [x: string]: unknown } | undefined
  id?: ID | undefined
  last_seen_at?: string | undefined
  name?: string | undefined
  refresh_state_part_id?: ID | undefined
  resource_version?: string | undefined
  service_offering_id?: ID | undefined
  source_created_at?: string | undefined
  source_deleted_at?: string | undefined
  source_id?: ID | undefined
  source_ref?: string | undefined
  update_json_schema?: string | undefined
  updated_at?: string | undefined
}
type ServicePlansCollection = {
  data?: ServicePlan[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type Source = {
  archived_at?: string | undefined
  availability_message?: string | undefined
  availability_status?: string | undefined
  cloud_connector_id?: string | undefined
  created_at?: string | undefined
  enabled?: boolean | undefined
  id?: ID | undefined
  info?: { [x: string]: unknown } | undefined
  last_available_at?: string | undefined
  last_checked_at?: string | undefined
  last_refresh_message?: string | undefined
  last_successful_refresh_at?: string | undefined
  name?: string | undefined
  previous_sha?: string | undefined
  previous_size?: number | undefined
  refresh_finished_at?: string | undefined
  refresh_started_at?: string | undefined
  refresh_state?: string | undefined
  refresh_task_id?: string | undefined
  uid?: string | undefined
  updated_at?: string | undefined
}
type SourcesCollection = {
  data?: Source[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
type UUID = string
type Task = {
  archived_at?: string | undefined
  child_task_id?: string | undefined
  completed_at?: string | undefined
  controller_message_id?: string | undefined
  created_at?: string | undefined
  id?: UUID | undefined
  input?: { [x: string]: unknown } | undefined
  message?: string | undefined
  name?: string | undefined
  output?: { [x: string]: unknown } | undefined
  owner?: string | undefined
  source_id?: ID | undefined
  state?: 'pending' | 'queued' | 'running' | 'timedout' | 'completed' | undefined
  status?: 'ok' | 'warn' | 'unchanged' | 'error' | undefined
  target_source_ref?: string | undefined
  target_type?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type TasksCollection = {
  data?: Task[] | undefined
  links?: CollectionLinks | undefined
  meta?: CollectionMetadata | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/graphql': {
      $post: {
        input: { json: GraphQLRequest }
        output: GraphQLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/openapi.json': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service_credential_types': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServiceCredentialTypesCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_credential_types/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServiceCredentialType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_credentials': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServiceCredentialsCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_credentials/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServiceCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_instances': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServiceInstancesCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_instances/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServiceInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_inventories': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServiceInventoriesCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_inventories/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServiceInventory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_inventories/:id/tag': {
      $post:
        | {
            input: { param: { id: string } } & { json: Tag[] }
            output: Tag[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: Tag[] }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/service_inventories/:id/tags': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: TagsCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_inventories/:id/untag': {
      $post: {
        input: { param: { id: string } } & { json: Tag[] }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/service_offering_nodes': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServiceOfferingNodesCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_offering_nodes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServiceOfferingNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_offerings': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServiceOfferingsCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_offerings/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServiceOffering
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_offerings/:id/applied_inventories_tags': {
      $post:
        | {
            input: { param: { id: string } } & { json: AppliedInventoriesParametersServicePlan }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppliedInventoriesParametersServicePlan }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/service_offerings/:id/order': {
      $post:
        | {
            input: { param: { id: string } } & { json: OrderParametersServiceOffering }
            output: { task_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OrderParametersServiceOffering }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/service_offerings/:id/service_instances': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServiceInstancesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_offerings/:id/service_offering_nodes': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServiceOfferingNodesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_offerings/:id/service_plans': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServicePlansCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/service_plans': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: ServicePlansCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_plans/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ServicePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: SourcesCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sources/:id': {
      $get:
        | { input: { param: { id: string } }; output: Source; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/incremental_refresh': {
      $patch:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/sources/:id/refresh': {
      $patch:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/sources/:id/service_instances': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServiceInstancesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/service_inventories': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServiceInventoriesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/service_offering_nodes': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServiceOfferingNodesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/service_offerings': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServiceOfferingsCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/service_plans': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ServicePlansCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/tasks': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: TasksCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: { [x: string]: unknown } | undefined
                sort_by?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tags': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: TagsCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            filter?: { [x: string]: unknown } | undefined
            sort_by?: { [x: string]: unknown } | undefined
          }
        }
        output: TasksCollection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/:id': {
      $get:
        | { input: { param: { id: string } }; output: Task; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: Task }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: Task }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Task }
            output: ErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
