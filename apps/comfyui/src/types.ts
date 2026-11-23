type Asset = {
  created_at: string
  display_name?: (string | null) | undefined
  hash?: string | undefined
  id: string
  is_immutable?: boolean | undefined
  job_id?: (string | null) | undefined
  last_access_time?: string | undefined
  loader_path?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  mime_type?: string | undefined
  name: string
  preview_id?: (string | null) | undefined
  preview_url?: string | undefined
  short_url?: (string | null) | undefined
  size?: bigint | undefined
  tags?: string[] | undefined
  updated_at: string
  user_metadata?: { [x: string]: unknown } | undefined
}
type ListAssetsResponse = {
  assets: Asset[]
  has_more: boolean
  next_cursor?: string | undefined
  total: number
}
type ErrorResponse = {
  code: string
  details?: { [x: string]: unknown } | undefined
  message: string
}
type AssetCreated = {
  created_at: string
  display_name?: (string | null) | undefined
  hash?: string | undefined
  id: string
  is_immutable?: boolean | undefined
  job_id?: (string | null) | undefined
  last_access_time?: string | undefined
  loader_path?: (string | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  mime_type?: string | undefined
  name: string
  preview_id?: (string | null) | undefined
  preview_url?: string | undefined
  short_url?: (string | null) | undefined
  size?: bigint | undefined
  tags?: string[] | undefined
  updated_at: string
  user_metadata?: { [x: string]: unknown } | undefined
  created_new: boolean
}
type AssetUpdated = {
  display_name?: (string | null) | undefined
  hash?: string | undefined
  id: string
  job_id?: (string | null) | undefined
  loader_path?: (string | null) | undefined
  mime_type?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
  updated_at: string
  user_metadata?: { [x: string]: unknown } | undefined
}
type TagsModificationResponse = {
  added?: string[] | undefined
  already_present?: string[] | undefined
  not_present?: string[] | undefined
  removed?: string[] | undefined
  total_tags: string[]
}
type AssetTagHistogramResponse = { tag_counts: { [x: string]: number } }
type ChurnkeyAuthResponse = {
  auth_hash: string
  customer_id: string
  mode: 'live' | 'test' | 'sandbox'
}
type DeployToCloudError = {
  error:
    | 'offline'
    | 'multiple_credentials'
    | 'invalid_api_key_format'
    | 'invalid_body'
    | 'missing_credentials'
    | 'unauthorized'
    | 'too_large'
    | 'too_many_bundles'
    | 'builder_rejected'
    | 'builder_unavailable'
    | 'builder_busy'
  message?: string | undefined
}
type ModelFolder = { folders: string[]; name: string }
type ModelFile = { name: string; pathIndex: number; size: number }
type FeedbackRequest = {
  content?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  rating?: number | undefined
  type: 'missing_nodes' | 'general' | 'missing_models'
}
type FeedbackResponse = { [x: string]: unknown }
type GlobalSubgraphInfo = {
  data?: string | undefined
  info: { node_pack: string }
  name: string
  source: string
}
type GlobalSubgraphData = {
  data: string
  info: { node_pack: string }
  name: string
  source: string
}
type HistoryManageRequest = { clear?: boolean | undefined; delete?: string[] | undefined }
type HistoryEntry = {
  create_time?: bigint | undefined
  meta?: { [x: string]: unknown } | undefined
  outputs?: { [x: string]: unknown } | undefined
  prompt?:
    | {
        extra_data?: { [x: string]: unknown } | undefined
        priority?: number | undefined
        prompt_id?: string | undefined
      }
    | undefined
  prompt_id: string
  status?: { [x: string]: unknown } | undefined
  workflow_id?: string | undefined
}
type HistoryResponse = { history: HistoryEntry[] }
type HistoryDetailEntry = {
  meta?: { [x: string]: unknown } | undefined
  outputs?: { [x: string]: unknown } | undefined
  prompt?:
    | {
        extra_data?: { [x: string]: unknown } | undefined
        outputs_to_execute?: string[] | undefined
        priority?: number | undefined
        prompt?: { [x: string]: unknown } | undefined
        prompt_id?: string | undefined
      }
    | undefined
  status?: { [x: string]: unknown } | undefined
}
type HistoryDetailResponse = { [x: string]: HistoryDetailEntry }
type JobStatusResponse = {
  assigned_inference?: (string | null) | undefined
  created_at: string
  error_message?: (string | null) | undefined
  id: string
  last_state_update?: string | undefined
  status: 'waiting_to_dispatch' | 'pending' | 'in_progress' | 'completed' | 'error' | 'cancelled'
  updated_at: string
}
type JobEntry = {
  create_time: bigint
  execution_end_time?: bigint | undefined
  execution_error?:
    | {
        current_inputs: { [x: string]: unknown }
        current_outputs: { [x: string]: unknown }
        exception_message: string
        exception_type: string
        node_id: string
        node_type: string
        traceback: string[]
      }
    | undefined
  execution_start_time?: bigint | undefined
  id: string
  outputs_count?: number | undefined
  preview_output?: { [x: string]: unknown } | undefined
  previewable_outputs_count?: number | undefined
  status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled'
  workflow_id?: string | undefined
}
type PaginationInfo = {
  has_more: boolean
  limit: number
  next_cursor?: string | undefined
  offset: number
  total: number
}
type JobsListResponse = { jobs: JobEntry[]; pagination: PaginationInfo }
type JobDetailResponse = {
  create_time: bigint
  execution_end_time?: bigint | undefined
  execution_error?:
    | {
        current_inputs: { [x: string]: unknown }
        current_outputs: { [x: string]: unknown }
        exception_message: string
        exception_type: string
        node_id: string
        node_type: string
        traceback: string[]
      }
    | undefined
  execution_meta?: { [x: string]: unknown } | undefined
  execution_start_time?: bigint | undefined
  execution_status?: { [x: string]: unknown } | undefined
  id: string
  outputs?: { [x: string]: unknown } | undefined
  outputs_count?: number | undefined
  preview_output?: { [x: string]: unknown } | undefined
  previewable_outputs_count?: number | undefined
  status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled'
  update_time: bigint
  user_id?: string | undefined
  workflow?: { [x: string]: unknown } | undefined
  workflow_id?: string | undefined
  workflow_version_id?: string | undefined
  workspace_id?: string | undefined
}
type JobOutputAsset = {
  created_at: string
  hash?: string | undefined
  id: string
  mime_type?: string | undefined
  name: string
  node_id?: (string | null) | undefined
  output_index?: (number | null) | undefined
  output_key?: (string | null) | undefined
  preview_url?: string | undefined
  size?: bigint | undefined
}
type JobAssetsResponse = { assets: JobOutputAsset[]; job_id: string; pagination: PaginationInfo }
type JobCancelResponse = { cancelled: boolean }
type JobsCancelRequest = { job_ids: string[] }
type JobsCancelResponse = { cancelled: string[] }
type NodeInfo = {
  api_node?: boolean | undefined
  category?: string | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  display_name?: string | undefined
  experimental?: boolean | undefined
  input?: { [x: string]: unknown } | undefined
  input_order?: { [x: string]: string[] } | undefined
  name?: string | undefined
  output?: string[] | undefined
  output_is_list?: boolean[] | undefined
  output_name?: string[] | undefined
  output_node?: boolean | undefined
  output_tooltips?: string[] | undefined
  python_module?: string | undefined
}
type PromptInfo = { exec_info?: { queue_remaining?: number | undefined } | undefined }
type PromptRequest = {
  extra_data?: { [x: string]: unknown } | undefined
  front?: boolean | undefined
  number?: number | undefined
  partial_execution_targets?: string[] | undefined
  prompt: { [x: string]: unknown }
  workflow_id?: string | undefined
  workflow_metadata?: { [x: string]: string } | undefined
  workflow_version_id?: string | undefined
}
type PromptResponse = {
  node_errors?: { [x: string]: unknown } | undefined
  number?: number | undefined
  prompt_id?: string | undefined
}
type PromptErrorResponse = { [x: string]: unknown }
type QueueInfo = {
  queue_pending?: { [x: string]: unknown }[][] | undefined
  queue_running?: { [x: string]: unknown }[][] | undefined
}
type QueueManageRequest = { clear?: boolean | undefined; delete?: string[] | undefined }
type QueueManageResponse = { cleared?: boolean | undefined; deleted?: string[] | undefined }
type SystemStatsResponse = {
  devices: {
    name: string
    type: string
    vram_free?: number | undefined
    vram_total?: number | undefined
  }[]
  system: {
    argv: string[]
    cloud_version?: string | undefined
    comfyui_frontend_version?: string | undefined
    comfyui_version: string
    deploy_environment?: string | undefined
    embedded_python: boolean
    os: string
    python_version: string
    pytorch_version: string
    ram_free: number
    ram_total: number
    workflow_templates_version?: string | undefined
  }
}
type TagInfo = { count: number; name: string }
type ListTagsResponse = { has_more: boolean; tags: TagInfo[]; total: number }
type TaskEntry = {
  completed_at?: string | undefined
  create_time: string
  id: string
  started_at?: string | undefined
  status: 'created' | 'running' | 'completed' | 'failed'
  task_name: string
}
type TasksListResponse = { pagination: PaginationInfo; tasks: TaskEntry[] }
type TaskResponse = {
  completed_at?: string | undefined
  create_time: string
  error_message?: string | undefined
  id: string
  idempotency_key: string
  payload: { [x: string]: unknown }
  result?: { [x: string]: unknown } | undefined
  started_at?: string | undefined
  status: 'created' | 'running' | 'completed' | 'failed'
  task_name: string
  update_time: string
}
type UserResponse = { id: string; status: string }
type GetUserDataResponseFullFile = {
  modified?: bigint | undefined
  path?: string | undefined
  size?: number | undefined
}
type GetUserDataResponseFull = GetUserDataResponseFullFile[]
type UserDataResponseFull = {
  modified?: bigint | undefined
  path?: string | undefined
  size?: number | undefined
}
type AssetInfo = {
  id: string
  in_library: boolean
  model: boolean
  name: string
  preview_url: string
  public: boolean
  storage_url: string
}
type WorkflowPublishInfo = {
  assets: AssetInfo[]
  listed: boolean
  publish_time?: (string | null) | undefined
  share_id: string
  workflow_id: string
}
type PublishWorkflowAssetsRequest = { asset_ids: string[] }
type WorkflowForkedFrom = {
  workflow_id?: string | undefined
  workflow_version_id?: string | undefined
}
type WorkflowResponse = {
  created_at: string
  created_by: string
  default_view?: 'workflow' | 'app' | undefined
  description?: string | undefined
  forked_from?: WorkflowForkedFrom | undefined
  id: string
  latest_version: number
  name?: string | undefined
  updated_at: string
}
type WorkflowListResponse = { data: WorkflowResponse[]; pagination: PaginationInfo }
type CreateWorkflowRequest = {
  default_view?: 'workflow' | 'app' | undefined
  description?: string | undefined
  forked_from_workflow_id?: string | undefined
  forked_from_workflow_version_id?: string | undefined
  name?: string | undefined
  workflow_json: { [x: string]: unknown }
}
type UpdateWorkflowRequest = {
  default_view?: 'workflow' | 'app' | undefined
  description?: string | undefined
  name?: string | undefined
}
type WorkflowVersionContentResponse = {
  created_at: string
  created_by: string
  dependency_asset_ids?: string[] | undefined
  id: string
  version: number
  workflow_json: { [x: string]: unknown }
}
type ForkWorkflowRequest = { name?: string | undefined; source_version: number }
type CreateWorkflowVersionRequest = {
  base_version: number
  workflow_json: { [x: string]: unknown }
}
type WorkflowVersionResponse = {
  created_at: string
  created_by: string
  id: string
  latest_version: number
  version: number
}
type PublishedWorkflowDetail = {
  assets: AssetInfo[]
  listed: boolean
  name: string
  publish_time?: (string | null) | undefined
  share_id: string
  workflow_id: string
  workflow_json: { [x: string]: unknown }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/assets': {
      $get:
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?:
                  | 'name'
                  | 'created_at'
                  | 'updated_at'
                  | 'size'
                  | 'last_access_time'
                  | undefined
                order?: 'asc' | 'desc' | undefined
                include_public?: boolean | undefined
                hash?: string | undefined
                after?: string | undefined
              }
            }
            output: ListAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?:
                  | 'name'
                  | 'created_at'
                  | 'updated_at'
                  | 'size'
                  | 'last_access_time'
                  | undefined
                order?: 'asc' | 'desc' | undefined
                include_public?: boolean | undefined
                hash?: string | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?:
                  | 'name'
                  | 'created_at'
                  | 'updated_at'
                  | 'size'
                  | 'last_access_time'
                  | undefined
                order?: 'asc' | 'desc' | undefined
                include_public?: boolean | undefined
                hash?: string | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?:
                  | 'name'
                  | 'created_at'
                  | 'updated_at'
                  | 'size'
                  | 'last_access_time'
                  | undefined
                order?: 'asc' | 'desc' | undefined
                include_public?: boolean | undefined
                hash?: string | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              form: {
                file: File
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
              }
            }
            output: AssetCreated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                file: File
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
              }
            }
            output: AssetCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                file: File
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
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
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
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
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              form: {
                file: File
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              form: {
                file: File
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                file: File
                hash?: string | undefined
                id?: string | undefined
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                tags?: string | undefined
                user_metadata?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/assets/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: { param: { id: string } }; output: Asset; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: AssetUpdated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                mime_type?: string | undefined
                name?: string | undefined
                preview_id?: string | undefined
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/assets/:id/content': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { disposition?: 'inline' | 'attachment' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { disposition?: 'inline' | 'attachment' | undefined }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { id: string } } & {
              query: { disposition?: 'inline' | 'attachment' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { disposition?: 'inline' | 'attachment' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/assets/:id/tags': {
      $delete:
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: TagsModificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: TagsModificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: { tags: string[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/assets/from-hash': {
      $post:
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: AssetCreated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: AssetCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                hash: string
                mime_type?: string | undefined
                name?: string | undefined
                tags: string[]
                user_metadata?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/assets/hash/:hash': {
      $head:
        | { input: { param: { hash: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { hash: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hash: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | { input: { param: { hash: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { hash: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/assets/prune': {
      $post: {
        input: {}
        output: { marked?: number | undefined; status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/assets/seed': {
      $post: {
        input: { json: { roots?: string[] | undefined } }
        output: { status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/assets/seed/cancel': {
      $post: {
        input: {}
        output: { status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/assets/seed/status': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/assets/tags/refine': {
      $get:
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                include_public?: boolean | undefined
              }
            }
            output: AssetTagHistogramResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                include_public?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                include_public?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include_tags?: string[] | undefined
                exclude_tags?: string[] | undefined
                tags_all?: string[] | undefined
                tags_any?: string[] | undefined
                tags_none?: string[] | undefined
                name_contains?: string | undefined
                limit?: number | undefined
                include_public?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/billing/churnkey/auth': {
      $get:
        | { input: {}; output: ChurnkeyAuthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/api/default_workflow': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/deploy/bundle': {
      $post:
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: { bundle_id: string; expires_at: string; url: string; workspace_id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                workflow?: ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DeployToCloudError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/deploy/summary': {
      $get:
        | {
            input: {}
            output: { custom_nodes: number; models: number }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: DeployToCloudError; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/api/embeddings': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/experiment/models': {
      $get:
        | { input: {}; output: ModelFolder[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/experiment/models/:folder': {
      $get:
        | {
            input: { param: { folder: string } }
            output: ModelFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/extensions': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/features': {
      $get: {
        input: {}
        output: {
          agent?:
            | { reason?: string | undefined; state: 'starting' | 'ready' | 'failed' }
            | undefined
          deploy_to_cloud?: boolean | undefined
          free_tier_balance?: { allowance: number; remaining: number; used: number } | undefined
          max_upload_size?: number | undefined
          server_boot_id?: string | undefined
          supports_preview_metadata?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/feedback': {
      $post:
        | {
            input: { json: FeedbackRequest }
            output: FeedbackResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: FeedbackRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FeedbackRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FeedbackRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/files/mask-layers': {
      $get:
        | {
            input: { query: { filename: string } }
            output: {
              mask?: (string | null) | undefined
              paint?: (string | null) | undefined
              painted?: (string | null) | undefined
              painted_masked?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filename: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/free': {
      $post: {
        input: { json: { free_memory?: boolean | undefined; unload_models?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/global_subgraphs': {
      $get:
        | {
            input: {}
            output: { [x: string]: GlobalSubgraphInfo }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/global_subgraphs/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GlobalSubgraphData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/history': {
      $post:
        | { input: { json: HistoryManageRequest }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: HistoryManageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: HistoryManageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: HistoryManageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/history_v2': {
      $get:
        | {
            input: { query: { max_items?: number | undefined; offset?: number | undefined } }
            output: HistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { max_items?: number | undefined; offset?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { max_items?: number | undefined; offset?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/history_v2/:prompt_id': {
      $get:
        | {
            input: { param: { prompt_id: string } }
            output: HistoryDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { prompt_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { prompt_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/i18n': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/interrupt': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/job/:job_id/status': {
      $get:
        | {
            input: { param: { job_id: string } }
            output: JobStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/jobs': {
      $get:
        | {
            input: {
              query: {
                status?: string | undefined
                workflow_id?: string | undefined
                output_type?: 'image' | 'video' | 'audio' | '3d' | undefined
                sort_by?: 'create_time' | 'execution_time' | undefined
                sort_order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: JobsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: string | undefined
                workflow_id?: string | undefined
                output_type?: 'image' | 'video' | 'audio' | '3d' | undefined
                sort_by?: 'create_time' | 'execution_time' | undefined
                sort_order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?: string | undefined
                workflow_id?: string | undefined
                output_type?: 'image' | 'video' | 'audio' | '3d' | undefined
                sort_by?: 'create_time' | 'execution_time' | undefined
                sort_order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                status?: string | undefined
                workflow_id?: string | undefined
                output_type?: 'image' | 'video' | 'audio' | '3d' | undefined
                sort_by?: 'create_time' | 'execution_time' | undefined
                sort_order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/jobs/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } } & {
              query: { short_link?: 'ephemeral_tool_chain' | 'default' | undefined }
            }
            output: JobDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } } & {
              query: { short_link?: 'ephemeral_tool_chain' | 'default' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } } & {
              query: { short_link?: 'ephemeral_tool_chain' | 'default' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { job_id: string } } & {
              query: { short_link?: 'ephemeral_tool_chain' | 'default' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } } & {
              query: { short_link?: 'ephemeral_tool_chain' | 'default' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/jobs/:job_id/assets': {
      $get:
        | {
            input: { param: { job_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: JobAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/jobs/:job_id/cancel': {
      $post:
        | {
            input: { param: { job_id: string } }
            output: JobCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/jobs/cancel': {
      $post:
        | {
            input: { json: JobsCancelRequest }
            output: JobsCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobsCancelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: JobsCancelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: JobsCancelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobsCancelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/node_replacements': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/object_info': {
      $get: { input: {}; output: { [x: string]: NodeInfo }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/prompt': {
      $get:
        | { input: {}; output: PromptInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: PromptRequest }
            output: PromptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: PromptRequest }
            output: PromptErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/queue': {
      $get:
        | { input: {}; output: QueueInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: QueueManageRequest }
            output: QueueManageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueueManageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: QueueManageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: QueueManageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/settings': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: { [x: string]: unknown } | string }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } | string }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { [x: string]: unknown } | string }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/settings/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { value?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: { [x: string]: unknown } | string }
            output: { value?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { [x: string]: unknown } | string }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { [x: string]: unknown } | string }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/system_stats': {
      $get:
        | { input: {}; output: SystemStatsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/tags': {
      $get:
        | {
            input: {
              query: {
                prefix?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: 'count_desc' | 'name_asc' | undefined
                include_zero?: boolean | undefined
                include_public?: boolean | undefined
              }
            }
            output: ListTagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                prefix?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: 'count_desc' | 'name_asc' | undefined
                include_zero?: boolean | undefined
                include_public?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                prefix?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: 'count_desc' | 'name_asc' | undefined
                include_zero?: boolean | undefined
                include_public?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                prefix?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: 'count_desc' | 'name_asc' | undefined
                include_zero?: boolean | undefined
                include_public?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/tasks': {
      $get:
        | {
            input: {
              query: {
                task_name?: string | undefined
                idempotency_key?: string | undefined
                status?: string | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                sort_order?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: TasksListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                task_name?: string | undefined
                idempotency_key?: string | undefined
                status?: string | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                sort_order?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                task_name?: string | undefined
                idempotency_key?: string | undefined
                status?: string | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                sort_order?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                task_name?: string | undefined
                idempotency_key?: string | undefined
                status?: string | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                sort_order?: 'asc' | 'desc' | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/tasks/:task_id': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: TaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/upload/image': {
      $post:
        | {
            input: {
              form: {
                image: File
                overwrite?: string | undefined
                subfolder?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              name?: string | undefined
              subfolder?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                image: File
                overwrite?: string | undefined
                subfolder?: string | undefined
                type?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                image: File
                overwrite?: string | undefined
                subfolder?: string | undefined
                type?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                image: File
                overwrite?: string | undefined
                subfolder?: string | undefined
                type?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/upload/mask': {
      $post:
        | {
            input: { form: { image: File; original_ref: string } }
            output: {
              name?: string | undefined
              subfolder?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { image: File; original_ref: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { image: File; original_ref: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: { image: File; original_ref: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/user': {
      $get:
        | { input: {}; output: UserResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/userdata': {
      $get:
        | {
            input: {
              query: {
                dir?: string | undefined
                recurse?: boolean | undefined
                split?: boolean | undefined
                full_info?: boolean | undefined
              }
            }
            output: GetUserDataResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dir?: string | undefined
                recurse?: boolean | undefined
                split?: boolean | undefined
                full_info?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                dir?: string | undefined
                recurse?: boolean | undefined
                split?: boolean | undefined
                full_info?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                dir?: string | undefined
                recurse?: boolean | undefined
                split?: boolean | undefined
                full_info?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                dir?: string | undefined
                recurse?: boolean | undefined
                split?: boolean | undefined
                full_info?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/userdata/:file': {
      $delete:
        | { input: { param: { file: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 500 }
      $get:
        | { input: { param: { file: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 400 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { file: string } }; output: string; outputFormat: 'text'; status: 500 }
      $post:
        | {
            input: { param: { file: string } } & {
              query: {
                overwrite?: 'true' | 'false' | undefined
                full_info?: 'true' | 'false' | undefined
              }
            } & { json: File }
            output: UserDataResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file: string } } & {
              query: {
                overwrite?: 'true' | 'false' | undefined
                full_info?: 'true' | 'false' | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { file: string } } & {
              query: {
                overwrite?: 'true' | 'false' | undefined
                full_info?: 'true' | 'false' | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { file: string } } & {
              query: {
                overwrite?: 'true' | 'false' | undefined
                full_info?: 'true' | 'false' | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { file: string } } & {
              query: {
                overwrite?: 'true' | 'false' | undefined
                full_info?: 'true' | 'false' | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { file: string } } & {
              query: {
                overwrite?: 'true' | 'false' | undefined
                full_info?: 'true' | 'false' | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/userdata/:file/move/:dest': {
      $post:
        | {
            input: { param: { file: string; dest: string } } & {
              query: { overwrite?: 'true' | 'false' | undefined }
            }
            output: UserDataResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file: string; dest: string } } & {
              query: { overwrite?: 'true' | 'false' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { file: string; dest: string } } & {
              query: { overwrite?: 'true' | 'false' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { file: string; dest: string } } & {
              query: { overwrite?: 'true' | 'false' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { file: string; dest: string } } & {
              query: { overwrite?: 'true' | 'false' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { file: string; dest: string } } & {
              query: { overwrite?: 'true' | 'false' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/api/userdata/:file/publish': {
      $get:
        | {
            input: { param: { file: string } }
            output: WorkflowPublishInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { file: string } } & { json: PublishWorkflowAssetsRequest }
            output: WorkflowPublishInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file: string } } & { json: PublishWorkflowAssetsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file: string } } & { json: PublishWorkflowAssetsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file: string } } & { json: PublishWorkflowAssetsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file: string } } & { json: PublishWorkflowAssetsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/users': {
      $get:
        | {
            input: {}
            output: { migrated: boolean; storage: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/vhs/queryvideo': {
      $get:
        | {
            input: { query: { filename: string } }
            output: { source: { duration: number; fps: number; frames: number; size: number[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filename: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { filename: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/view': {
      $get:
        | {
            input: {
              query: {
                filename: string
                subfolder?: string | undefined
                type?: string | undefined
                fullpath?: string | undefined
                format?: string | undefined
                frame_rate?: number | undefined
                workflow?: string | undefined
                timestamp?: number | undefined
                channel?: string | undefined
                res?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                filename: string
                subfolder?: string | undefined
                type?: string | undefined
                fullpath?: string | undefined
                format?: string | undefined
                frame_rate?: number | undefined
                workflow?: string | undefined
                timestamp?: number | undefined
                channel?: string | undefined
                res?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                filename: string
                subfolder?: string | undefined
                type?: string | undefined
                fullpath?: string | undefined
                format?: string | undefined
                frame_rate?: number | undefined
                workflow?: string | undefined
                timestamp?: number | undefined
                channel?: string | undefined
                res?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: {
                filename: string
                subfolder?: string | undefined
                type?: string | undefined
                fullpath?: string | undefined
                format?: string | undefined
                frame_rate?: number | undefined
                workflow?: string | undefined
                timestamp?: number | undefined
                channel?: string | undefined
                res?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filename: string
                subfolder?: string | undefined
                type?: string | undefined
                fullpath?: string | undefined
                format?: string | undefined
                frame_rate?: number | undefined
                workflow?: string | undefined
                timestamp?: number | undefined
                channel?: string | undefined
                res?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filename: string
                subfolder?: string | undefined
                type?: string | undefined
                fullpath?: string | undefined
                format?: string | undefined
                frame_rate?: number | undefined
                workflow?: string | undefined
                timestamp?: number | undefined
                channel?: string | undefined
                res?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/workflow_templates': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/workflows': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                default_view?: 'workflow' | 'app' | undefined
                sort?: 'create_time' | 'update_time' | 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: WorkflowListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                default_view?: 'workflow' | 'app' | undefined
                sort?: 'create_time' | 'update_time' | 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                default_view?: 'workflow' | 'app' | undefined
                sort?: 'create_time' | 'update_time' | 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateWorkflowRequest }
            output: WorkflowResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/workflows/:workflow_id': {
      $delete:
        | {
            input: { param: { workflow_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { workflow_id: string } }
            output: WorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { workflow_id: string } } & { json: UpdateWorkflowRequest }
            output: WorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_id: string } } & { json: UpdateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflow_id: string } } & { json: UpdateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } } & { json: UpdateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflow_id: string } } & { json: UpdateWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/workflows/:workflow_id/content': {
      $get:
        | {
            input: { param: { workflow_id: string } }
            output: WorkflowVersionContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/workflows/:workflow_id/fork': {
      $post:
        | {
            input: { param: { workflow_id: string } } & { json: ForkWorkflowRequest }
            output: WorkflowResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workflow_id: string } } & { json: ForkWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflow_id: string } } & { json: ForkWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_id: string } } & { json: ForkWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } } & { json: ForkWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflow_id: string } } & { json: ForkWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/workflows/:workflow_id/versions': {
      $post:
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: WorkflowVersionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflow_id: string } } & { json: CreateWorkflowVersionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/workflows/published/:share_id': {
      $get:
        | {
            input: { param: { share_id: string } }
            output: PublishedWorkflowDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { share_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { share_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { share_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { share_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/internal/folder_paths': {
      $get: { input: {}; output: { [x: string]: string[][] }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/internal/logs': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/internal/logs/raw': {
      $get: {
        input: {}
        output: {
          entries?: { m?: string | undefined; t?: number | undefined }[] | undefined
          size?: { cols?: number | undefined; rows?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/internal/logs/subscribe': {
      $patch: {
        input: { json: { clientId: string; enabled: boolean } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
