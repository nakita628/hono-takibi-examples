type SchemasCollectionListItem = { description: string; name: string; slug: string }
type SchemasPaginatedCollectionResponse = {
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: SchemasCollectionListItem[] | undefined
}
type SchemasModelResponse = {
  cover_image_url?: (string | null) | undefined
  default_example?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  github_url?: (string | null) | undefined
  is_official?: boolean | undefined
  latest_version?: ({ [x: string]: unknown } | null) | undefined
  license_url?: (string | null) | undefined
  name?: string | undefined
  owner?: string | undefined
  paper_url?: (string | null) | undefined
  run_count?: number | undefined
  url?: string | undefined
  visibility?: 'public' | 'private' | undefined
}
type SchemasCollectionResponse = {
  description: string
  full_description?: (string | null) | undefined
  models: SchemasModelResponse[]
  name: string
  slug: string
}
type SchemasDeploymentResponse = {
  current_release?:
    | {
        configuration?:
          | {
              hardware?: string | undefined
              max_instances?: number | undefined
              min_instances?: number | undefined
            }
          | undefined
        created_at?: string | undefined
        created_by?:
          | {
              avatar_url?: string | undefined
              github_url?: string | undefined
              name?: string | undefined
              type: 'organization' | 'user'
              username: string
            }
          | undefined
        model?: string | undefined
        number?: number | undefined
        version?: string | undefined
      }
    | undefined
  name?: string | undefined
  owner?: string | undefined
}
type SchemasPredictionRequest = {
  input: { [x: string]: unknown }
  stream?: boolean | undefined
  webhook?: string | undefined
  webhook_events_filter?: ('start' | 'output' | 'logs' | 'completed')[] | undefined
}
type SchemasPredictionResponse = {
  completed_at?: string | undefined
  created_at: string
  data_removed: boolean
  deadline?: string | undefined
  deployment?: string | undefined
  error: string | null
  id: string
  input: { [x: string]: unknown }
  logs?: string | undefined
  metrics?: { total_time?: number | undefined } | undefined
  model: string
  output: { [x: string]: unknown }
  source?: 'web' | 'api' | undefined
  started_at?: string | undefined
  status: 'starting' | 'processing' | 'succeeded' | 'failed' | 'canceled' | 'aborted'
  urls: { cancel: string; get: string; stream?: string | undefined; web: string }
  version: string | 'hidden'
}
type SchemasFileResponse = {
  checksums: { sha256?: string | undefined }
  content_type: string
  created_at: string
  expires_at: string
  id: string
  metadata: { [x: string]: unknown }
  size: number
  urls: { get?: string | undefined }
}
type SchemasPaginatedModelResponse = {
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: SchemasModelResponse[] | undefined
}
type SchemasPaginatedPredictionResponse = {
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: SchemasPredictionResponse[] | undefined
}
type SchemasVersionResponse = {
  cog_version?: (string | null) | undefined
  created_at?: string | undefined
  id?: string | undefined
  openapi_schema?: ({ [x: string]: unknown } | null) | undefined
}
type SchemasPaginatedVersionResponse = {
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results?: SchemasVersionResponse[] | undefined
}
type SchemasTrainingRequest = {
  destination: string
  input: { [x: string]: unknown }
  webhook?: string | undefined
  webhook_events_filter?: ('start' | 'output' | 'logs' | 'completed')[] | undefined
}
type SchemasTrainingResponse = {
  completed_at?: string | undefined
  created_at?: string | undefined
  error?: (string | null) | undefined
  id?: string | undefined
  input?: { [x: string]: unknown } | undefined
  logs?: string | undefined
  metrics?: { predict_time?: number | undefined; total_time?: number | undefined } | undefined
  model?: string | undefined
  output?: { version?: string | undefined; weights?: string | undefined } | undefined
  source?: 'web' | 'api' | undefined
  started_at?: string | undefined
  status?: 'starting' | 'processing' | 'succeeded' | 'failed' | 'canceled' | 'aborted' | undefined
  urls?: { cancel?: string | undefined; get?: string | undefined } | undefined
  version?: string | undefined
}
type SchemasVersionPredictionRequest = {
  input: { [x: string]: unknown }
  stream?: boolean | undefined
  version: string
  webhook?: string | undefined
  webhook_events_filter?: ('start' | 'output' | 'logs' | 'completed')[] | undefined
}
type SchemasSearchCollectionResponse = {
  description: string
  models?: (string[] | null) | undefined
  name: string
  slug: string
}
type SchemasSearchModelMetadataResponse = {
  generated_description?: (string | null) | undefined
  score?: (number | null) | undefined
  tags?: string[] | undefined
}
type SchemasPageResponse = { href: string; name: string }
type SchemasSearchResponse = {
  collections: SchemasSearchCollectionResponse[]
  models: { metadata: SchemasSearchModelMetadataResponse; model: SchemasModelResponse }[]
  pages: SchemasPageResponse[]
  query: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get: {
        input: {}
        output: {
          avatar_url?: string | undefined
          github_url?: string | undefined
          name?: string | undefined
          type: 'organization' | 'user'
          username: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/collections': {
      $get: {
        input: {}
        output: SchemasPaginatedCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/collections/:collection_slug': {
      $get: {
        input: { param: { collection_slug: string } }
        output: SchemasCollectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deployments': {
      $get: {
        input: {}
        output: {
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results?: SchemasDeploymentResponse[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            hardware: string
            max_instances: number
            min_instances: number
            model: string
            name: string
            version: string
          }
        }
        output: SchemasDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deployments/:deployment_owner/:deployment_name': {
      $delete: {
        input: { param: { deployment_owner: string; deployment_name: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { deployment_owner: string; deployment_name: string } }
        output: SchemasDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { deployment_owner: string; deployment_name: string } } & {
          json: {
            hardware?: string | undefined
            max_instances?: number | undefined
            min_instances?: number | undefined
            version?: string | undefined
          }
        }
        output: SchemasDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deployments/:deployment_owner/:deployment_name/predictions': {
      $post:
        | {
            input: { param: { deployment_owner: string; deployment_name: string } } & {
              header: { Prefer?: string | undefined; 'Cancel-After'?: string | undefined }
            } & { json: SchemasPredictionRequest }
            output: SchemasPredictionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { deployment_owner: string; deployment_name: string } } & {
              header: { Prefer?: string | undefined; 'Cancel-After'?: string | undefined }
            } & { json: SchemasPredictionRequest }
            output: SchemasPredictionResponse
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/files': {
      $get: {
        input: {}
        output: {
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results?: SchemasFileResponse[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              form: {
                content: File
                filename?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                type?: string | undefined
              }
            }
            output: SchemasFileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                content: File
                filename?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                type?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/files/:file_id': {
      $delete:
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { file_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { file_id: string } }
            output: SchemasFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/files/:file_id/download': {
      $get:
        | {
            input: { param: { file_id: string } } & {
              query: { owner: string; expiry: bigint; signature: string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              query: { owner: string; expiry: bigint; signature: string }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/hardware': {
      $get: {
        input: {}
        output: { name?: string | undefined; sku?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models': {
      $get: {
        input: {
          query: {
            sort_by?: 'model_created_at' | 'latest_version_created_at' | undefined
            sort_direction?: 'asc' | 'desc' | undefined
          }
        }
        output: SchemasPaginatedModelResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            cover_image_url?: string | undefined
            description?: string | undefined
            github_url?: string | undefined
            hardware: string
            license_url?: string | undefined
            name: string
            owner: string
            paper_url?: string | undefined
            visibility: 'public' | 'private'
          }
        }
        output: SchemasModelResponse
        outputFormat: 'json'
        status: 201
      }
      $query: {
        input: { json: string }
        output: {
          next: string | null
          previous: string | null
          results: {
            cover_image_url?: (string | null) | undefined
            default_example?: ({ [x: string]: unknown } | null) | undefined
            description?: string | undefined
            github_url?: (string | null) | undefined
            latest_version?: ({ [x: string]: unknown } | null) | undefined
            license_url?: (string | null) | undefined
            name?: string | undefined
            owner?: string | undefined
            paper_url?: (string | null) | undefined
            run_count?: number | undefined
            url?: string | undefined
            visibility?: 'public' | 'private' | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:model_owner/:model_name': {
      $delete: {
        input: { param: { model_owner: string; model_name: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { model_owner: string; model_name: string } }
        output: SchemasModelResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { model_owner: string; model_name: string } } & {
          json: {
            description?: string | undefined
            github_url?: string | undefined
            license_url?: string | undefined
            paper_url?: string | undefined
            readme?: string | undefined
            weights_url?: string | undefined
          }
        }
        output: SchemasModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:model_owner/:model_name/examples': {
      $get: {
        input: { param: { model_owner: string; model_name: string } }
        output: SchemasPaginatedPredictionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:model_owner/:model_name/predictions': {
      $post:
        | {
            input: { param: { model_owner: string; model_name: string } } & {
              header: { Prefer?: string | undefined; 'Cancel-After'?: string | undefined }
            } & { json: SchemasPredictionRequest }
            output: SchemasPredictionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { model_owner: string; model_name: string } } & {
              header: { Prefer?: string | undefined; 'Cancel-After'?: string | undefined }
            } & { json: SchemasPredictionRequest }
            output: SchemasPredictionResponse
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/models/:model_owner/:model_name/readme': {
      $get:
        | {
            input: { param: { model_owner: string; model_name: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { model_owner: string; model_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/models/:model_owner/:model_name/versions': {
      $get: {
        input: { param: { model_owner: string; model_name: string } }
        output: SchemasPaginatedVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:model_owner/:model_name/versions/:version_id': {
      $delete: {
        input: { param: { model_owner: string; model_name: string; version_id: string } }
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { model_owner: string; model_name: string; version_id: string } }
        output: SchemasVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:model_owner/:model_name/versions/:version_id/trainings': {
      $post: {
        input: { param: { model_owner: string; model_name: string; version_id: string } } & {
          json: SchemasTrainingRequest
        }
        output: SchemasTrainingResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/predictions': {
      $get: {
        input: {
          query: {
            created_after?: string | undefined
            created_before?: string | undefined
            source?: 'web' | undefined
          }
        }
        output: {
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results?: SchemasPredictionResponse[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { Prefer?: string | undefined; 'Cancel-After'?: string | undefined }
            } & { json: SchemasVersionPredictionRequest }
            output: SchemasPredictionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { Prefer?: string | undefined; 'Cancel-After'?: string | undefined }
            } & { json: SchemasVersionPredictionRequest }
            output: SchemasPredictionResponse
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/predictions/:prediction_id': {
      $get: {
        input: { param: { prediction_id: string } }
        output: SchemasPredictionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/predictions/:prediction_id/cancel': {
      $post: {
        input: { param: { prediction_id: string } }
        output: SchemasPredictionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search': {
      $get:
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: SchemasSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { query: string; limit?: number | undefined } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/trainings': {
      $get: {
        input: {}
        output: {
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results?: SchemasTrainingResponse[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/trainings/:training_id': {
      $get: {
        input: { param: { training_id: string } }
        output: SchemasTrainingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/trainings/:training_id/cancel': {
      $post: {
        input: { param: { training_id: string } }
        output: SchemasTrainingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/default/secret': {
      $get: { input: {}; output: { key?: string | undefined }; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
