type DocGenTemplateCreateRequest = { file: { type: 'file'; id: string } }
type DocGenTemplateBase = { file?: { type: 'file'; id: string } | undefined }
type ClientError = {
  type?: 'error' | undefined
  status?: number | undefined
  code?:
    | 'created'
    | 'accepted'
    | 'no_content'
    | 'redirect'
    | 'not_modified'
    | 'bad_request'
    | 'unauthorized'
    | 'forbidden'
    | 'not_found'
    | 'method_not_allowed'
    | 'conflict'
    | 'precondition_failed'
    | 'too_many_requests'
    | 'internal_server_error'
    | 'unavailable'
    | 'item_name_invalid'
    | 'insufficient_scope'
    | undefined
  message?: string | undefined
  context_info?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  help_url?: string | undefined
  request_id?: string | undefined
}
type DocGenTemplate = {
  file?: { type: 'file'; id: string } | undefined
  file_name?: (string | null) | undefined
}
type DocGenTemplates = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: DocGenTemplate[] | undefined
}
type DocGenTag = {
  tag_content: string
  tag_type: 'text' | 'arithmetic' | 'conditional' | 'for-loop' | 'table-loop' | 'image'
  json_paths: string[]
}
type DocGenTags = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: DocGenTag[] | undefined
}
type DocGenTagsProcessingMessage = { message: string }
type DocGenJob = {
  id: string
  type: 'docgen_job'
  external_id?: string | undefined
  batch?: { id: string; type: 'docgen_batch' } | undefined
  template_file?: { type: 'file'; id: string } | undefined
  template_file_version?: { id: string; type: 'file_version' } | undefined
  output_file?: {} | undefined
  output_file_version?: {} | undefined
  status?: 'submitted' | 'completed' | 'failed' | 'completed_with_error' | 'pending' | undefined
  output_type?: string | undefined
  failures?: ({ errors: string[]; warnings: string[] } | null) | undefined
}
type DocGenJobFull = {
  id: string
  type: 'docgen_job'
  external_id?: string | undefined
  batch?: { id: string; type: 'docgen_batch' } | undefined
  template_file?: { type: 'file'; id: string } | undefined
  template_file_version?: { id: string; type: 'file_version' } | undefined
  output_file?: {} | undefined
  output_file_version?: {} | undefined
  status?: 'submitted' | 'completed' | 'failed' | 'completed_with_error' | 'pending' | undefined
  output_type?: string | undefined
  failures?: ({ errors: string[]; warnings: string[] } | null) | undefined
  created_at?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  enterprise?: { id?: string | undefined; type?: 'enterprise' | undefined } | undefined
  source?: string | undefined
}
type DocGenJobsFull = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: DocGenJobFull[] | undefined
}
type DocGenJobs = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: DocGenJob[] | undefined
}
type DocGenDocumentGenerationData = {
  generated_file_name: string
  user_input: { [x: string]: { [x: string]: unknown } }
  external_id?: string | undefined
}
type DocGenBatchCreateRequest = {
  file: { type: 'file'; id: string }
  file_version?: { id: string; type: 'file_version' } | undefined
  input_source: string
  destination_folder: { type: 'folder'; id: string }
  output_type: string
  document_generation_data: DocGenDocumentGenerationData[]
}
type DocGenBatchBase = { id: string; type: 'docgen_batch' }
type EnterpriseConfiguration = {
  id?: string | undefined
  type?: 'enterprise_configuration' | undefined
  security?: {} | undefined
  content_and_sharing?: {} | undefined
  user_settings?: {} | undefined
  shield?: {} | undefined
}
type Hub = {
  id: string
  type: 'hubs'
  title?: string | undefined
  description?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  updated_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  view_count?: number | undefined
  is_ai_enabled?: boolean | undefined
  is_collaboration_restricted_to_enterprise?: boolean | undefined
  can_non_owners_invite?: boolean | undefined
  can_shared_link_be_created?: boolean | undefined
  can_public_shared_link_be_created?: boolean | undefined
  copy_hub_access?: 'all' | 'company' | 'none' | undefined
}
type Hubs = {
  entries?: Hub[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type HubCreateRequest = { title: string; description?: string | undefined }
type HubUpdateRequest = {
  title?: string | undefined
  description?: string | undefined
  is_ai_enabled?: boolean | undefined
  is_collaboration_restricted_to_enterprise?: boolean | undefined
  can_non_owners_invite?: boolean | undefined
  can_shared_link_be_created?: boolean | undefined
  can_public_shared_link_be_created?: boolean | undefined
  copy_hub_access?: 'all' | 'company' | 'none' | undefined
}
type HubCopyRequest = {
  title?: string | undefined
  description?: string | undefined
  include_items?: boolean | undefined
}
type HubBase = { id: string; type: 'hubs' }
type HubCollaborationUser = {
  id: string
  type: 'user'
  name?: string | undefined
  login?: string | undefined
}
type GroupMini = {
  id: string
  type: 'group'
  name?: string | undefined
  group_type?: 'managed_group' | 'all_users_group' | undefined
}
type HubAccessGrantee = HubCollaborationUser | GroupMini
type HubCollaboration = {
  id: string
  type: 'hub_collaboration'
  hub?: HubBase | undefined
  accessible_by?: HubAccessGrantee | undefined
  role?: string | undefined
  status?: 'accepted' | 'pending' | 'rejected' | undefined
  acceptance_requirements_status?:
    | {
        terms_of_service_requirement?:
          | {
              is_accepted?: (boolean | null) | undefined
              terms_of_service?: { id: string; type: 'terms_of_service' } | undefined
            }
          | undefined
        strong_password_requirement?:
          | {
              enterprise_has_strong_password_required_for_external_users?: boolean | undefined
              user_has_strong_password?: (boolean | null) | undefined
            }
          | undefined
        two_factor_authentication_requirement?:
          | {
              enterprise_has_two_factor_auth_enabled?: boolean | undefined
              user_has_two_factor_authentication_enabled?: (boolean | null) | undefined
            }
          | undefined
      }
    | undefined
}
type HubCollaborations = {
  entries?: HubCollaboration[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type HubCollaborationCreateRequest = {
  hub: { type: 'hubs'; id: string }
  accessible_by: { type: string; id?: string | undefined; login?: string | undefined }
  role: string
}
type HubCollaborationUpdateRequest = { role?: string | undefined }
type HubItem = { id: string; type: 'file' | 'folder' | 'web_link'; name: string }
type HubItems = {
  entries?: HubItem[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type FileReference = { type: 'file'; id: string }
type FolderReference = { type: 'folder'; id: string }
type WeblinkReference = { type: 'web_link'; id: string }
type HubItemReference = FileReference | FolderReference | WeblinkReference
type HubItemOperation = {
  action: 'add' | 'remove'
  item: HubItemReference
  parent_id?: string | undefined
}
type HubItemsManageRequest = { operations?: HubItemOperation[] | undefined }
type HubItemOperationResult = {
  action?: string | undefined
  item?: HubItemReference | undefined
  parent_id?: string | undefined
  status?: number | undefined
  error?: string | undefined
}
type HubItemsManageResponse = { operations: HubItemOperationResult[] }
type HubDocumentPage = {
  id: string
  type: string
  parent_id?: (string | null) | undefined
  title_fragment: string
}
type HubDocumentPages = {
  entries: HubDocumentPage[]
  type: 'document_pages'
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type HubParagraphTextBlock = {
  id: string
  parent_id?: (string | null) | undefined
  type?: 'paragraph' | undefined
  fragment?: string | undefined
}
type HubSectionTitleTextBlock = {
  id: string
  parent_id?: (string | null) | undefined
  type?: 'section_title' | undefined
  fragment?: string | undefined
}
type HubCalloutBoxTextBlock = {
  id: string
  parent_id?: (string | null) | undefined
  type?: 'callout_box' | undefined
  fragment?: string | undefined
}
type HubItemListBlock = {
  id: string
  parent_id?: (string | null) | undefined
  type?: 'item_list' | undefined
}
type HubDividerBlock = {
  id: string
  parent_id?: (string | null) | undefined
  type?: 'divider' | undefined
}
type HubDocumentBlockEntry =
  | HubParagraphTextBlock
  | HubSectionTitleTextBlock
  | HubCalloutBoxTextBlock
  | HubItemListBlock
  | HubDividerBlock
type HubDocumentBlocks = {
  entries: HubDocumentBlockEntry[]
  type: 'document_blocks'
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type ShieldListMini = {
  id: string
  type: 'shield_list'
  name: string
  content: { type?: string | undefined }
}
type ShieldLists = { entries?: ShieldListMini[] | undefined }
type ShieldListsCreate = { name: string; description?: string | undefined; content: {} }
type ShieldList = {
  id: string
  type: string
  name: string
  enterprise: { id?: string | undefined; type?: 'enterprise' | undefined }
  description?: string | undefined
  created_at: string
  updated_at: string
  content: {}
}
type ShieldListsUpdate = { name: string; description?: string | undefined; content: {} }
type Archive = {
  id: string
  type: 'archive'
  name: string
  size: bigint
  description: string | null
  owned_by: { id: string; type: string }
}
type Archives = {
  entries?: Archive[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type UserReference = { type: 'user'; id: string }
type ExternalUsersSubmitDeleteJobRequest = { external_users: UserReference[] }
type ExternalUserDeletionResult = { user_id: string; status: number; detail?: string | undefined }
type ExternalUsersSubmitDeleteJobResponse = { entries: ExternalUserDeletionResult[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/docgen_templates': {
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenTemplateCreateRequest }
            output: DocGenTemplateBase
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenTemplateCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenTemplateCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenTemplateCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenTemplateCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: DocGenTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_templates/:template_id': {
      $delete:
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: DocGenTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_templates/:template_id/tags': {
      $get:
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: DocGenTags
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: DocGenTagsProcessingMessage
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                template_version_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_jobs/:job_id': {
      $get:
        | {
            input: { param: { job_id: string } } & { header: { 'box-version': '2025.0' } }
            output: DocGenJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { job_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { job_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_jobs': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: DocGenJobsFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_template_jobs/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: DocGenJobs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { template_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_batch_jobs/:batch_id': {
      $get:
        | {
            input: { param: { batch_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: DocGenJobs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batch_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { batch_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/docgen_batches': {
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenBatchCreateRequest }
            output: DocGenBatchBase
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenBatchCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenBatchCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenBatchCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: DocGenBatchCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprise_configurations/:enterprise_id': {
      $get:
        | {
            input: { param: { enterprise_id: string } } & { query: { categories: string[] } } & {
              header: { 'box-version': '2025.0' }
            }
            output: EnterpriseConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_id: string } } & { query: { categories: string[] } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hubs': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: string | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: Hubs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: string | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCreateRequest }
            output: Hub
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprise_hubs': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: Hubs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                sort?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hubs/:hub_id': {
      $get:
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: Hub
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubUpdateRequest
            }
            output: Hub
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubUpdateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubUpdateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubUpdateRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hubs/:hub_id/copy': {
      $post:
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubCopyRequest
            }
            output: Hub
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubCopyRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubCopyRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hub_collaborations': {
      $get:
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: HubCollaborations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCollaborationCreateRequest }
            output: HubCollaboration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCollaborationCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: HubCollaborationCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hub_collaborations/:hub_collaboration_id': {
      $get:
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: HubCollaboration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            } & { json: HubCollaborationUpdateRequest }
            output: HubCollaboration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            } & { json: HubCollaborationUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            } & { json: HubCollaborationUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hub_collaboration_id: string } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hub_items': {
      $get:
        | {
            input: {
              query: {
                hub_id: string
                parent_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: HubItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                hub_id: string
                parent_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                hub_id: string
                parent_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                hub_id: string
                parent_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hubs/:hub_id/manage_items': {
      $post:
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubItemsManageRequest
            }
            output: HubItemsManageResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubItemsManageRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubItemsManageRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hub_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: HubItemsManageRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hub_document_pages': {
      $get:
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: HubDocumentPages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { hub_id: string; marker?: string | undefined; limit?: bigint | undefined }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/hub_document_blocks': {
      $get:
        | {
            input: {
              query: {
                hub_id: string
                page_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: HubDocumentBlocks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                hub_id: string
                page_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                hub_id: string
                page_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                hub_id: string
                page_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_lists': {
      $get: {
        input: { header: { 'box-version': '2025.0' } }
        output: ShieldLists
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: ShieldListsCreate }
            output: ShieldList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & { json: ShieldListsCreate }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/shield_lists/:shield_list_id': {
      $get:
        | {
            input: { param: { shield_list_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ShieldList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_list_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { shield_list_id: string } } & { header: { 'box-version': '2025.0' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shield_list_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { shield_list_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { shield_list_id: string } } & {
              header: { 'box-version': '2025.0' }
            } & { json: ShieldListsUpdate }
            output: ShieldList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_list_id: string } } & {
              header: { 'box-version': '2025.0' }
            } & { json: ShieldListsUpdate }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_list_id: string } } & {
              header: { 'box-version': '2025.0' }
            } & { json: ShieldListsUpdate }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/archives': {
      $get:
        | {
            input: { query: { limit?: bigint | undefined; marker?: string | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: Archives
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: bigint | undefined; marker?: string | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: bigint | undefined; marker?: string | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: bigint | undefined; marker?: string | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: bigint | undefined; marker?: string | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: bigint | undefined; marker?: string | undefined } } & {
              header: { 'box-version': '2025.0' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: Archive
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: {
                name: string
                description?: string | undefined
                storage_policy_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/archives/:archive_id': {
      $delete:
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: Archive
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { archive_id: string } } & { header: { 'box-version': '2025.0' } } & {
              json: { name?: string | undefined; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/external_users/submit_delete_job': {
      $post:
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: ExternalUsersSubmitDeleteJobRequest
            }
            output: ExternalUsersSubmitDeleteJobResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: ExternalUsersSubmitDeleteJobRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'box-version': '2025.0' } } & {
              json: ExternalUsersSubmitDeleteJobRequest
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
