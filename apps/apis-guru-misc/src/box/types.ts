type CollaborationAllowlistEntry = {
  created_at?: string | undefined
  direction?: 'inbound' | 'outbound' | 'both' | undefined
  domain?: string | undefined
  enterprise?:
    | { id?: string | undefined; name?: string | undefined; type?: 'enterprise' | undefined }
    | undefined
  id?: string | undefined
  type?: 'collaboration_whitelist_entry' | undefined
}
type CollaborationAllowlistEntries = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: CollaborationAllowlistEntry[] | undefined
}
type ClientError = {
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
  context_info?: { message?: string | undefined } | undefined
  help_url?: string | undefined
  message?: string | undefined
  request_id?: string | undefined
  status?: number | undefined
  type?: 'error' | undefined
}
type CollaborationAllowlistExemptTarget = {
  created_at?: string | undefined
  enterprise?:
    | { id?: string | undefined; name?: string | undefined; type?: 'enterprise' | undefined }
    | undefined
  id?: string | undefined
  modified_at?: string | undefined
  type?: 'collaboration_whitelist' | undefined
  user?:
    | { id?: string | undefined; name?: string | undefined; type?: 'enterprise' | undefined }
    | undefined
}
type CollaborationAllowlistExemptTargets = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: CollaborationAllowlistExemptTarget[] | undefined
}
type Collaboration = {
  acceptance_requirements_status?:
    | {
        strong_password_requirement?:
          | {
              enterprise_has_strong_password_required_for_external_users?: boolean | undefined
              user_has_strong_password?: (boolean | null) | undefined
            }
          | undefined
        terms_of_service_requirement?:
          | {
              is_accepted?: (boolean | null) | undefined
              terms_of_service?:
                | { id?: string | undefined; type?: 'terms_of_service' | undefined }
                | undefined
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
  accessible_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  acknowledged_at?: string | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  expires_at?: (string | null) | undefined
  id?: string | undefined
  invite_email?: (string | null) | undefined
  item?: {} | undefined
  modified_at?: string | undefined
  role?:
    | 'editor'
    | 'viewer'
    | 'previewer'
    | 'uploader'
    | 'previewer uploader'
    | 'viewer uploader'
    | 'co-owner'
    | 'owner'
    | undefined
  status?: 'accepted' | 'pending' | 'rejected' | undefined
  type?: 'collaboration' | undefined
}
type Collaborations = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: Collaboration[] | undefined
}
type Collection = {
  collection_type?: 'favorites' | undefined
  id?: string | undefined
  name?: 'Favorites' | undefined
  type?: 'collection' | undefined
}
type Collections = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: Collection[] | undefined
}
type FileMini = {
  etag?: (string | null) | undefined
  id: string
  type: 'file'
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  name?: string | undefined
  sequence_id?: {} | undefined
  sha1?: string | undefined
}
type FolderMini = {
  etag?: (string | null) | undefined
  id: string
  type: 'folder'
  name?: string | undefined
  sequence_id?: {} | undefined
}
type WebLinkMini = {
  etag?: string | undefined
  id: string
  type: 'web_link'
  name?: string | undefined
  sequence_id?: {} | undefined
  url?: string | undefined
}
type Items = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: (FileMini | FolderMini | WebLinkMini)[] | undefined
}
type Comment = {
  id?: string | undefined
  type?: 'comment' | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  is_reply_comment?: boolean | undefined
  item?: { id?: string | undefined; type?: string | undefined } | undefined
  message?: string | undefined
  modified_at?: string | undefined
}
type DevicePinner = {
  id?: string | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  product_name?: string | undefined
  type?: 'device_pinner' | undefined
}
type DevicePinners = {
  entries?: DevicePinner[] | undefined
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  order?: { by?: 'id' | undefined; direction?: 'asc' | 'desc' | undefined }[] | undefined
}
type Event = {
  additional_details?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  event_id?: string | undefined
  event_type?: {} | undefined
  recorded_at?: string | undefined
  session_id?: string | undefined
  source?: {} | undefined
  type?: string | undefined
}
type Events = {
  chunk_size?: bigint | undefined
  entries?: Event[] | undefined
  next_stream_position?: string | undefined
}
type RealtimeServer = {
  max_retries?: number | undefined
  retry_timeout?: number | undefined
  ttl?: number | undefined
  type?: string | undefined
  url?: string | undefined
}
type RealtimeServers = { chunk_size?: bigint | undefined; entries?: RealtimeServer[] | undefined }
type FileRequest = {
  created_at: string
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: (string | null) | undefined
  etag?: (string | null) | undefined
  expires_at?: string | undefined
  folder: {
    etag?: (string | null) | undefined
    id: string
    type: 'folder'
    name?: string | undefined
    sequence_id?: {} | undefined
  }
  id?: string | undefined
  is_description_required?: boolean | undefined
  is_email_required?: boolean | undefined
  status?: 'active' | 'inactive' | undefined
  title?: string | undefined
  type?: 'file_request' | undefined
  updated_at: string
  updated_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  url?: string | undefined
}
type FileRequestUpdateRequest = {
  description?: string | undefined
  expires_at?: string | undefined
  is_description_required?: boolean | undefined
  is_email_required?: boolean | undefined
  status?: 'active' | 'inactive' | undefined
  title?: string | undefined
}
type FileRequestCopyRequest = {
  description?: string | undefined
  expires_at?: string | undefined
  is_description_required?: boolean | undefined
  is_email_required?: boolean | undefined
  status?: 'active' | 'inactive' | undefined
  title?: string | undefined
  folder?: { id: string; type?: 'folder' | undefined } | undefined
}
type LegalHoldPolicyAssignment = {
  id?: string | undefined
  type?: 'legal_hold_policy_assignment' | undefined
  assigned_at?: string | undefined
  assigned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  assigned_to?: {} | undefined
  deleted_at?: string | undefined
  legal_hold_policy?:
    | { id?: string | undefined; type?: 'legal_hold_policy' | undefined }
    | undefined
}
type FileVersionLegalHold = {
  deleted_at?: string | undefined
  file?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'file'
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
        name?: string | undefined
        sequence_id?: {} | undefined
        sha1?: string | undefined
      }
    | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  id?: string | undefined
  legal_hold_policy_assignments?: LegalHoldPolicyAssignment[] | undefined
  type?: 'file_version_legal_hold' | undefined
}
type FileVersionLegalHolds = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: FileVersionLegalHold[] | undefined
}
type FileVersionRetention = {
  applied_at?: string | undefined
  disposition_at?: string | undefined
  file?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'file'
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
        name?: string | undefined
        sequence_id?: {} | undefined
        sha1?: string | undefined
      }
    | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  id?: string | undefined
  type?: 'file_version_retention' | undefined
  winning_retention_policy?:
    | {
        id: string
        type: 'retention_policy'
        disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
        policy_name?: string | undefined
        retention_length?: string | undefined
      }
    | undefined
}
type FileVersionRetentions = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: FileVersionRetention[] | undefined
}
type UploadUrl = { upload_token?: string | undefined; upload_url?: string | undefined }
type FileVersionMini = { id: string; type: 'file_version'; sha1?: string | undefined }
type FileConflict = {
  etag?: (string | null) | undefined
  id: string
  type: 'file'
  file_version?: FileVersionMini | undefined
  name?: string | undefined
  sequence_id?: {} | undefined
  sha1?: string | undefined
}
type ConflictError = {
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
  context_info?: { conflicts?: FileConflict[] | undefined } | undefined
  help_url?: string | undefined
  message?: string | undefined
  request_id?: string | undefined
  status?: number | undefined
  type?: 'error' | undefined
}
type File2 = {
  etag?: (string | null) | undefined
  id: string
  type: 'file'
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  name?: string | undefined
  sequence_id?: {} | undefined
  sha1?: string | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  modified_at?: string | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection?: { entries: FolderMini[]; total_count: bigint } | undefined
  purged_at?: (string | null) | undefined
  shared_link?:
    | {
        access?: 'open' | 'company' | 'collaborators' | undefined
        download_count: number
        download_url?: (string | null) | undefined
        effective_access: 'open' | 'company' | 'collaborators'
        effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access'
        is_password_enabled: boolean
        permissions?: { can_download: boolean; can_edit: boolean; can_preview: boolean } | undefined
        preview_count: number
        unshared_at?: (string | null) | undefined
        url: string
        vanity_name?: (string | null) | undefined
        vanity_url?: (string | null) | undefined
      }
    | undefined
  size?: number | undefined
  trashed_at?: (string | null) | undefined
}
type Files = { entries?: File2[] | undefined; total_count?: bigint | undefined }
type UploadSession = {
  id?: string | undefined
  num_parts_processed?: number | undefined
  part_size?: bigint | undefined
  session_endpoints?:
    | {
        abort?: string | undefined
        commit?: string | undefined
        list_parts?: string | undefined
        log_event?: string | undefined
        status?: string | undefined
        upload_part?: string | undefined
      }
    | undefined
  session_expires_at?: string | undefined
  total_parts?: number | undefined
  type?: 'upload_session' | undefined
}
type UploadPart = {
  offset?: bigint | undefined
  part_id?: string | undefined
  size?: bigint | undefined
  sha1?: string | undefined
}
type UploadedPart = { part?: UploadPart | undefined }
type UploadParts = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: UploadPart[] | undefined
}
type TrashFileRestored = {
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_at: string
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description: string
  etag?: (string | null) | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  id: string
  item_status: 'active' | 'trashed' | 'deleted'
  modified_at: string
  modified_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  name?: string | undefined
  owned_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection: { entries: FolderMini[]; total_count: bigint }
  purged_at?: (string | null) | undefined
  sequence_id: {}
  sha1: string
  shared_link?: (string | null) | undefined
  size: number
  trashed_at?: (string | null) | undefined
  type: 'file'
}
type Comments = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: Comment[] | undefined
}
type Metadata = {
  $parent?: string | undefined
  $scope?: string | undefined
  $template?: string | undefined
  $version?: number | undefined
}
type Metadatas = { entries?: Metadata[] | undefined; limit?: number | undefined }
type Classification = {
  $canEdit?: boolean | undefined
  $parent?: string | undefined
  $scope?: string | undefined
  $template?: 'securityClassification-6VMVochwUWo' | undefined
  $type?: string | undefined
  $typeVersion?: number | undefined
  $version?: number | undefined
  Box__Security__Classification__Key?: string | undefined
}
type SkillCard = {
  created_at?: string | undefined
  duration?: number | undefined
  entries?:
    | {
        appears?: { end?: number | undefined; start?: number | undefined }[] | undefined
        image_url?: string | undefined
        text?: string | undefined
      }[]
    | undefined
  invocation: { id: string; type: 'skill_invocation' }
  skill: { id: string; type: 'service' }
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill_card_type: 'transcript' | 'keyword' | 'timeline' | 'status'
  status?:
    | {
        code: 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure'
        message?: string | undefined
      }
    | undefined
  type: 'skill_card'
}
type KeywordSkillCard = {
  created_at?: string | undefined
  entries: { text?: string | undefined }[]
  invocation: { id: string; type: 'skill_invocation' }
  skill: { id: string; type: 'service' }
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill_card_type: 'keyword'
  type: 'skill_card'
}
type TimelineSkillCard = {
  created_at?: string | undefined
  duration?: number | undefined
  entries: {
    appears?: { end?: number | undefined; start?: number | undefined }[] | undefined
    image_url?: string | undefined
    text?: string | undefined
  }[]
  invocation: { id: string; type: 'skill_invocation' }
  skill: { id: string; type: 'service' }
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill_card_type: 'timeline'
  type: 'skill_card'
}
type TranscriptSkillCard = {
  created_at?: string | undefined
  duration?: number | undefined
  entries: { appears?: { start?: number | undefined }[] | undefined; text?: string | undefined }[]
  invocation: { id: string; type: 'skill_invocation' }
  skill: { id: string; type: 'service' }
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill_card_type: 'transcript'
  type: 'skill_card'
}
type StatusSkillCard = {
  created_at?: string | undefined
  invocation: { id: string; type: 'skill_invocation' }
  skill: { id: string; type: 'service' }
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill_card_type: 'status'
  status: {
    code: 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure'
    message?: string | undefined
  }
  type: 'skill_card'
}
type SkillCardsMetadata = {
  $canEdit?: boolean | undefined
  $id?: string | undefined
  $parent?: string | undefined
  $scope?: string | undefined
  $template?: string | undefined
  $type?: string | undefined
  $typeVersion?: number | undefined
  $version?: number | undefined
  cards?:
    | (SkillCard | KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard)[]
    | undefined
}
type TaskAssignment = {
  assigned_at?: string | undefined
  assigned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  assigned_to?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  completed_at?: string | undefined
  id?: string | undefined
  item?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'file'
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
        name?: string | undefined
        sequence_id?: {} | undefined
        sha1?: string | undefined
      }
    | undefined
  message?: string | undefined
  reminded_at?: string | undefined
  resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected' | undefined
  type?: 'task_assignment' | undefined
}
type Task = {
  action?: 'review' | 'complete' | undefined
  completion_rule?: 'all_assignees' | 'any_assignee' | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  due_at?: string | undefined
  id?: string | undefined
  is_completed?: boolean | undefined
  item?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'file'
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
        name?: string | undefined
        sequence_id?: {} | undefined
        sha1?: string | undefined
      }
    | undefined
  message?: string | undefined
  task_assignment_collection?:
    | { entries?: TaskAssignment[] | undefined; total_count?: bigint | undefined }
    | undefined
  type?: 'task' | undefined
}
type Tasks = { entries?: Task[] | undefined; total_count?: bigint | undefined }
type TrashFile = {
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_at: string
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description: string
  etag?: (string | null) | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  id: string
  item_status: 'active' | 'trashed' | 'deleted'
  modified_at: string
  modified_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  name?: string | undefined
  owned_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection: {
    entries: {
      etag?: (string | null) | undefined
      id?: string | undefined
      name?: string | undefined
      sequence_id?: (string | null) | undefined
      type?: 'folder' | undefined
    }[]
    total_count: bigint
  }
  purged_at?: (string | null) | undefined
  sequence_id: {}
  sha1: string
  shared_link?: (string | null) | undefined
  size: number
  trashed_at?: (string | null) | undefined
  type: 'file'
}
type FileVersion = {
  id: string
  type: 'file_version'
  sha1?: string | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  name?: string | undefined
  purged_at?: (string | null) | undefined
  restored_at?: (string | null) | undefined
  restored_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  size?: bigint | undefined
  trashed_at?: (string | null) | undefined
  trashed_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  uploader_display_name?: {} | undefined
}
type FileVersions = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: FileVersion[] | undefined
}
type Watermark = {
  watermark?: { created_at?: string | undefined; modified_at?: string | undefined } | undefined
}
type FolderLock = {
  created_at?: string | undefined
  created_by?: { id?: string | undefined; type: 'user' } | undefined
  folder?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  id?: string | undefined
  lock_type?: string | undefined
  locked_operations?: { delete: boolean; move: boolean } | undefined
  type?: string | undefined
}
type FolderLocks = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: FolderLock[] | undefined
}
type Folder = {
  etag?: (string | null) | undefined
  id: string
  type: 'folder'
  name?: string | undefined
  sequence_id?: {} | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_at?: (string | null) | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: {} | undefined
  folder_upload_email?:
    | ({ access?: 'open' | 'collaborators' | undefined; email?: string | undefined } | null)
    | undefined
  item_collection?:
    | {
        limit?: bigint | undefined
        offset?: bigint | undefined
        order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
        total_count?: bigint | undefined
        entries?: (FileMini | FolderMini | WebLinkMini)[] | undefined
      }
    | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  modified_at?: (string | null) | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection?: { entries: FolderMini[]; total_count: bigint } | undefined
  purged_at?: (string | null) | undefined
  shared_link?:
    | {
        access?: 'open' | 'company' | 'collaborators' | undefined
        download_count: number
        download_url?: (string | null) | undefined
        effective_access: 'open' | 'company' | 'collaborators'
        effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access'
        is_password_enabled: boolean
        permissions?: { can_download: boolean; can_edit: boolean; can_preview: boolean } | undefined
        preview_count: number
        unshared_at?: (string | null) | undefined
        url: string
        vanity_name?: (string | null) | undefined
        vanity_url?: (string | null) | undefined
      }
    | undefined
  size?: bigint | undefined
  trashed_at?: (string | null) | undefined
}
type TrashFolderRestored = {
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_at?: (string | null) | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: {} | undefined
  etag?: (string | null) | undefined
  folder_upload_email?: (string | null) | undefined
  id?: string | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  modified_at?: (string | null) | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  name?: string | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection?: { entries: FolderMini[]; total_count: bigint } | undefined
  purged_at?: (string | null) | undefined
  sequence_id?: {} | undefined
  shared_link?: (string | null) | undefined
  size?: bigint | undefined
  trashed_at?: (string | null) | undefined
  type?: 'folder' | undefined
}
type TrashFolder = {
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_at?: (string | null) | undefined
  created_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  description: {}
  etag?: (string | null) | undefined
  folder_upload_email?: (string | null) | undefined
  id: string
  item_status: 'active' | 'trashed' | 'deleted'
  modified_at?: (string | null) | undefined
  modified_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  name: string
  owned_by: {
    id?: string | undefined
    type: 'user'
    login?: string | undefined
    name?: string | undefined
  }
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection: {
    entries: {
      etag?: (string | null) | undefined
      id?: string | undefined
      name?: string | undefined
      sequence_id?: (string | null) | undefined
      type?: 'folder' | undefined
    }[]
    total_count: bigint
  }
  purged_at?: (string | null) | undefined
  sequence_id?: {} | undefined
  shared_link?: (string | null) | undefined
  size: bigint
  trashed_at?: (string | null) | undefined
  type: 'folder'
}
type GroupMembership = {
  created_at?: string | undefined
  group?:
    | {
        id?: string | undefined
        type?: 'group' | undefined
        group_type?: 'managed_group' | 'all_users_group' | undefined
        name?: string | undefined
      }
    | undefined
  id?: string | undefined
  modified_at?: string | undefined
  role?: 'member' | 'admin' | undefined
  type?: 'group_membership' | undefined
  user?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
}
type GroupMini = {
  id?: string | undefined
  type?: 'group' | undefined
  group_type?: 'managed_group' | 'all_users_group' | undefined
  name?: string | undefined
}
type Groups = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: GroupMini[] | undefined
}
type Group = {
  id?: string | undefined
  type?: 'group' | undefined
  group_type?: 'managed_group' | 'all_users_group' | undefined
  name?: string | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type SessionTerminationMessage = { message?: string | undefined }
type GroupMemberships = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: GroupMembership[] | undefined
}
type UserMini = {
  id?: string | undefined
  type: 'user'
  login?: string | undefined
  name?: string | undefined
}
type Invite = {
  actionable_by?: UserMini | undefined
  created_at?: string | undefined
  id?: string | undefined
  invited_by?: UserMini | undefined
  invited_to?:
    | { id?: string | undefined; name?: string | undefined; type?: 'enterprise' | undefined }
    | undefined
  modified_at?: string | undefined
  status?: string | undefined
  type?: 'invite' | undefined
}
type LegalHoldPolicy = {
  id?: string | undefined
  type?: 'legal_hold_policy' | undefined
  assignment_counts?:
    | {
        file?: bigint | undefined
        file_version?: bigint | undefined
        folder?: bigint | undefined
        user?: bigint | undefined
      }
    | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  deleted_at?: string | undefined
  description?: string | undefined
  filter_ended_at?: string | undefined
  filter_started_at?: string | undefined
  modified_at?: string | undefined
  policy_name?: string | undefined
  release_notes?: string | undefined
  status?: 'active' | 'applying' | 'releasing' | 'released' | undefined
}
type LegalHoldPolicies = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: LegalHoldPolicy[] | undefined
}
type LegalHoldPolicyAssignmentBase = {
  id?: string | undefined
  type?: 'legal_hold_policy_assignment' | undefined
}
type LegalHoldPolicyAssignments = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: LegalHoldPolicyAssignmentBase[] | undefined
}
type MetadataCascadePolicy = {
  id?: string | undefined
  owner_enterprise?: { id?: string | undefined; type?: 'enterprise' | undefined } | undefined
  parent?: { id?: string | undefined; type?: 'folder' | undefined } | undefined
  scope?: 'global' | 'enterprise_*' | undefined
  templateKey?: string | undefined
  type?: 'metadata_cascade_policy' | undefined
}
type MetadataCascadePolicies = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: MetadataCascadePolicy[] | undefined
}
type MetadataQuery = {
  ancestor_folder_id: string
  fields?: string[] | undefined
  from: string
  limit?: number | undefined
  marker?: string | undefined
  order_by?:
    | { direction?: 'ASC' | 'DESC' | 'asc' | 'desc' | undefined; field_key?: string | undefined }[]
    | undefined
  query?: string | undefined
  query_params?: { [x: string]: string } | undefined
}
type MetadataQueryResults = {
  entries?: (File2 | Folder)[] | undefined
  limit?: bigint | undefined
  next_marker?: string | undefined
}
type MetadataQueryIndex = {
  fields?: { key?: string | undefined; sort_direction?: 'asc' | 'desc' | undefined }[] | undefined
  id?: string | undefined
  status: 'building' | 'active' | 'disabled'
  type: string
}
type MetadataQueryIndices = {
  entries?: MetadataQueryIndex[] | undefined
  limit?: bigint | undefined
  next_marker?: string | undefined
}
type MetadataTemplate = {
  copyInstanceOnItemCopy?: boolean | undefined
  displayName?: string | undefined
  fields?:
    | {
        description?: string | undefined
        displayName: string
        hidden?: boolean | undefined
        key: string
        options?: { key: string; id?: string | undefined }[] | undefined
        type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect'
        id?: string | undefined
      }[]
    | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  scope?: string | undefined
  templateKey?: string | undefined
  type: 'metadata_template'
}
type MetadataTemplates = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: MetadataTemplate[] | undefined
}
type ClassificationTemplate = {
  copyInstanceOnItemCopy?: boolean | undefined
  displayName?: 'Classification' | undefined
  fields?:
    | {
        displayName?: 'Classification' | undefined
        hidden?: boolean | undefined
        id?: string | undefined
        key?: 'Box__Security__Classification__Key' | undefined
        options?:
          | {
              id?: string | undefined
              key?: string | undefined
              staticConfig?:
                | {
                    classification?:
                      | {
                          classificationDefinition?: string | undefined
                          colorID?: number | undefined
                        }
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        type?: 'enum' | undefined
      }[]
    | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  scope?: string | undefined
  templateKey?: 'securityClassification-6VMVochwUWo' | undefined
  type: 'metadata_template'
}
type PostOAuth2Revoke = {
  client_id?: string | undefined
  client_secret?: string | undefined
  token?: string | undefined
}
type OAuth2Error = { error?: string | undefined; error_description?: string | undefined }
type PostOAuth2Token = {
  actor_token?: string | undefined
  actor_token_type?: 'urn:ietf:params:oauth:token-type:id_token' | undefined
  assertion?: string | undefined
  box_shared_link?: string | undefined
  box_subject_id?: string | undefined
  box_subject_type?: 'enterprise' | 'user' | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  code?: string | undefined
  grant_type:
    | 'authorization_code'
    | 'refresh_token'
    | 'client_credentials'
    | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    | 'urn:ietf:params:oauth:grant-type:token-exchange'
  refresh_token?: string | undefined
  resource?: string | undefined
  scope?: string | undefined
  subject_token?: string | undefined
  subject_token_type?: 'urn:ietf:params:oauth:token-type:access_token' | undefined
}
type FileScope = {
  object?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'file'
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
        name?: string | undefined
        sequence_id?: {} | undefined
        sha1?: string | undefined
      }
    | undefined
  scope?:
    | 'annotation_edit'
    | 'annotation_view_all'
    | 'annotation_view_self'
    | 'base_explorer'
    | 'base_picker'
    | 'base_preview'
    | 'base_upload'
    | 'item_delete'
    | 'item_download'
    | 'item_preview'
    | 'item_rename'
    | 'item_share'
    | undefined
}
type AccessToken = {
  access_token?: string | undefined
  expires_in?: bigint | undefined
  issued_token_type?: 'urn:ietf:params:oauth:token-type:access_token' | undefined
  refresh_token?: string | undefined
  restricted_to?: FileScope[] | undefined
  token_type?: 'bearer' | undefined
}
type PostOAuth2TokenRefreshAccessToken = {
  client_id: string
  client_secret: string
  grant_type: 'refresh_token'
  refresh_token: string
}
type RecentItem = {
  interacted_at?: string | undefined
  interaction_shared_link?: string | undefined
  interaction_type?:
    | 'item_preview'
    | 'item_upload'
    | 'item_comment'
    | 'item_open'
    | 'item_modify'
    | undefined
  item?: {} | undefined
  type?: string | undefined
}
type RecentItems = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: RecentItem[] | undefined
}
type RetentionPolicyMini = {
  id: string
  type: 'retention_policy'
  disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
  policy_name?: string | undefined
  retention_length?: string | undefined
}
type RetentionPolicies = {
  entries?: RetentionPolicyMini[] | undefined
  limit?: bigint | undefined
  next_marker?: string | undefined
}
type RetentionPolicy = {
  id: string
  type: 'retention_policy'
  disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
  policy_name?: string | undefined
  retention_length?: string | undefined
  are_owners_notified?: boolean | undefined
  assignment_counts?:
    | {
        enterprise?: bigint | undefined
        folder?: bigint | undefined
        metadata_template?: bigint | undefined
      }
    | undefined
  can_owner_extend_retention?: boolean | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  custom_notification_recipients?: UserMini[] | undefined
  description?: string | undefined
  modified_at?: string | undefined
  policy_type?: 'finite' | 'indefinite' | undefined
  retention_type?: 'modifiable' | 'non-modifiable' | undefined
  status?: 'active' | 'retired' | undefined
}
type RetentionPolicyAssignmentBase = { id: string; type: 'retention_policy_assignment' }
type RetentionPolicyAssignments = {
  entries?: RetentionPolicyAssignmentBase[] | undefined
  limit?: bigint | undefined
  next_marker?: string | undefined
}
type RetentionPolicyAssignment = {
  assigned_at?: string | undefined
  assigned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  assigned_to?:
    | { id?: string | undefined; type?: 'folder' | 'enterprise' | 'metadata_template' | undefined }
    | undefined
  filter_fields?:
    | (
        | ({ field?: (string | null) | undefined; value?: (string | null) | undefined } | null)[]
        | null
      )
    | undefined
  id?: string | undefined
  retention_policy?:
    | {
        id: string
        type: 'retention_policy'
        disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
        policy_name?: string | undefined
        retention_length?: string | undefined
      }
    | undefined
  start_date_field?: string | undefined
  type?: 'retention_policy_assignment' | undefined
}
type FilesUnderRetention = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: FileMini[] | undefined
}
type MetadataFilter = {
  filters?: {} | undefined
  scope?: 'global' | 'enterprise' | 'enterprise_{enterprise_id}' | undefined
  templateKey?: string | undefined
}
type WebLink = {
  etag?: string | undefined
  id: string
  type: 'web_link'
  name?: string | undefined
  sequence_id?: {} | undefined
  url?: string | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  modified_at?: string | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection?: { entries: FolderMini[]; total_count: bigint } | undefined
  purged_at?: (string | null) | undefined
  shared_link?:
    | {
        access?: 'open' | 'company' | 'collaborators' | undefined
        download_count: number
        download_url?: (string | null) | undefined
        effective_access: 'open' | 'company' | 'collaborators'
        effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access'
        is_password_enabled: boolean
        permissions?: { can_download: boolean; can_edit: boolean; can_preview: boolean } | undefined
        preview_count: number
        unshared_at?: (string | null) | undefined
        url: string
        vanity_name?: (string | null) | undefined
        vanity_url?: (string | null) | undefined
      }
    | undefined
  trashed_at?: (string | null) | undefined
}
type SearchResults = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  total_count?: bigint | undefined
  entries?: (File2 | Folder | WebLink)[] | undefined
}
type SearchResultWithSharedLink = {
  accessible_via_shared_link?: string | undefined
  item?: {} | undefined
  type?: string | undefined
}
type SearchResultsWithSharedLinks = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  total_count?: bigint | undefined
  entries?: SearchResultWithSharedLink[] | undefined
}
type ShieldInformationBarrierBase = {
  id?: string | undefined
  type?: 'shield_information_barrier' | undefined
}
type ShieldInformationBarrierReport = {
  id?: string | undefined
  type?: 'shield_information_barrier_report' | undefined
  created_at?: string | undefined
  created_by?: { id?: string | undefined; type: 'user' } | undefined
  details?: { details?: { folder_id?: string | undefined } | undefined } | undefined
  shield_information_barrier?:
    | { shield_information_barrier?: ShieldInformationBarrierBase | undefined }
    | undefined
  status?: 'pending' | 'error' | 'done' | 'cancelled' | undefined
  updated_at?: string | undefined
}
type ShieldInformationBarrierReference = {
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
}
type ShieldInformationBarrierSegmentMember = {
  id?: string | undefined
  type?: 'shield_information_barrier_segment_member' | undefined
  user?: { id?: string | undefined; type: 'user' } | undefined
  created_at?: string | undefined
  created_by?: { id?: string | undefined; type: 'user' } | undefined
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
  shield_information_barrier_segment?:
    | { id?: string | undefined; type?: 'shield_information_barrier_segment' | undefined }
    | undefined
  updated_at?: string | undefined
  updated_by?: { id?: string | undefined; type: 'user' } | undefined
}
type ShieldInformationBarrierSegmentRestriction = {
  id?: string | undefined
  type?: 'shield_information_barrier_segment_restriction' | undefined
  restricted_segment?:
    | { id?: string | undefined; type?: 'shield_information_barrier_segment' | undefined }
    | undefined
  shield_information_barrier_segment?:
    | { id?: string | undefined; type?: 'shield_information_barrier_segment' | undefined }
    | undefined
  created_at?: string | undefined
  created_by?: { id?: string | undefined; type: 'user' } | undefined
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
  updated_at?: string | undefined
  updated_by?: { id?: string | undefined; type: 'user' } | undefined
}
type ShieldInformationBarrierSegment = {
  created_at?: string | undefined
  created_by?: { id?: string | undefined; type: 'user' } | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
  type?: 'shield_information_barrier_segment' | undefined
  updated_at?: string | undefined
  updated_by?: { id?: string | undefined; type: 'user' } | undefined
}
type ShieldInformationBarrier = {
  created_at?: string | undefined
  created_by?: { id?: string | undefined; type: 'user' } | undefined
  enabled_at?: string | undefined
  enabled_by?: { id?: string | undefined; type: 'user' } | undefined
  enterprise?: { id?: string | undefined; type?: 'enterprise' | undefined } | undefined
  id?: string | undefined
  status?: 'draft' | 'pending' | 'disabled' | 'enabled' | 'invalid' | undefined
  type?: 'shield_information_barrier' | undefined
  updated_at?: string | undefined
  updated_by?: { id?: string | undefined; type: 'user' } | undefined
}
type SignRequestPrefillTag = {
  checkbox_value?: boolean | undefined
  date_value?: string | undefined
  document_tag_id?: string | undefined
  text_value?: string | undefined
}
type SignRequestSignerInput = {
  checkbox_value?: boolean | undefined
  date_value?: string | undefined
  document_tag_id?: string | undefined
  text_value?: string | undefined
  content_type?:
    | 'initial'
    | 'stamp'
    | 'signature'
    | 'company'
    | 'title'
    | 'email'
    | 'full_name'
    | 'first_name'
    | 'last_name'
    | 'text'
    | 'date'
    | 'checkbox'
    | 'attachment'
    | undefined
  page_index?: number | undefined
  type?: 'signature' | 'date' | 'text' | 'checkbox' | undefined
}
type SignRequestSigner = {
  declined_redirect_url?: (string | null) | undefined
  email: string
  embed_url_external_user_id?: string | undefined
  is_in_person?: boolean | undefined
  login_required?: (boolean | null) | undefined
  order?: number | undefined
  password?: string | undefined
  redirect_url?: (string | null) | undefined
  role?: 'signer' | 'approver' | 'final_copy_reader' | undefined
  verification_phone_number?: string | undefined
  embed_url?: string | undefined
  has_viewed_document?: boolean | undefined
  inputs?: SignRequestSignerInput[] | undefined
  signer_decision?:
    | { finalized_at?: string | undefined; type?: 'signed' | 'declined' | undefined }
    | undefined
}
type SignRequest = {
  are_reminders_enabled?: boolean | undefined
  are_text_signatures_enabled?: boolean | undefined
  days_valid?: (number | null) | undefined
  declined_redirect_url?: (string | null) | undefined
  email_message?: (string | null) | undefined
  email_subject?: (string | null) | undefined
  external_id?: (string | null) | undefined
  is_document_preparation_needed?: boolean | undefined
  is_phone_verification_required_to_view?: (boolean | null) | undefined
  name?: string | undefined
  parent_folder: {
    etag?: (string | null) | undefined
    id: string
    type: 'folder'
    name?: string | undefined
    sequence_id?: {} | undefined
  }
  prefill_tags?: SignRequestPrefillTag[] | undefined
  redirect_url?: (string | null) | undefined
  auto_expire_at?: (string | null) | undefined
  id?: string | undefined
  prepare_url?: (string | null) | undefined
  sign_files?:
    | { files?: FileMini[] | undefined; is_ready_for_download?: boolean | undefined }
    | undefined
  signature_color?: (string | null) | undefined
  signers?: SignRequestSigner[] | undefined
  signing_log?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'file'
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
        name?: string | undefined
        sequence_id?: {} | undefined
        sha1?: string | undefined
      }
    | undefined
  source_files?: FileMini[] | undefined
  status?:
    | 'converting'
    | 'created'
    | 'sent'
    | 'viewed'
    | 'signed'
    | 'cancelled'
    | 'declined'
    | 'error_converting'
    | 'error_sending'
    | 'expired'
    | undefined
  type?: 'sign-request' | undefined
}
type SignRequests = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: SignRequest[] | undefined
}
type SignRequestCreateSigner = {
  declined_redirect_url?: (string | null) | undefined
  email: string
  embed_url_external_user_id?: string | undefined
  is_in_person?: boolean | undefined
  login_required?: (boolean | null) | undefined
  order?: number | undefined
  password?: string | undefined
  redirect_url?: (string | null) | undefined
  role?: 'signer' | 'approver' | 'final_copy_reader' | undefined
  verification_phone_number?: string | undefined
}
type SignRequestCreateRequest = {
  are_reminders_enabled?: boolean | undefined
  are_text_signatures_enabled?: boolean | undefined
  days_valid?: (number | null) | undefined
  declined_redirect_url?: (string | null) | undefined
  email_message?: (string | null) | undefined
  email_subject?: (string | null) | undefined
  external_id?: (string | null) | undefined
  is_document_preparation_needed?: boolean | undefined
  is_phone_verification_required_to_view?: (boolean | null) | undefined
  name?: string | undefined
  parent_folder: {
    etag?: (string | null) | undefined
    id: string
    type: 'folder'
    name?: string | undefined
    sequence_id?: {} | undefined
  }
  prefill_tags?: SignRequestPrefillTag[] | undefined
  redirect_url?: (string | null) | undefined
  signature_color?: 'blue' | 'black' | 'red' | undefined
  signers?: SignRequestCreateSigner[] | undefined
  source_files?: FileMini[] | undefined
}
type StoragePolicy = {
  id?: string | undefined
  type?: 'storage_policy' | undefined
  name?: string | undefined
}
type StoragePolicies = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: StoragePolicy[] | undefined
}
type StoragePolicyAssignment = {
  assigned_to?: { id?: string | undefined; type?: string | undefined } | undefined
  storage_policy?: { id?: string | undefined; type?: 'storage_policy' | undefined } | undefined
}
type StoragePolicyAssignments = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: StoragePolicyAssignment[] | undefined
}
type TaskAssignments = { entries?: TaskAssignment[] | undefined; total_count?: bigint | undefined }
type TermsOfServiceUserStatus = {
  created_at?: string | undefined
  id?: string | undefined
  is_accepted?: boolean | undefined
  modified_at?: string | undefined
  tos?: { id?: string | undefined; type?: 'terms_of_service' | undefined } | undefined
  type?: 'terms_of_service_user_status' | undefined
  user?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
}
type TermsOfServiceUserStatuses = {
  entries?: TermsOfServiceUserStatus[] | undefined
  total_count?: bigint | undefined
}
type TermsOfService = {
  id?: string | undefined
  type?: 'terms_of_service' | undefined
  created_at?: string | undefined
  enterprise?:
    | { id?: string | undefined; name?: string | undefined; type?: 'enterprise' | undefined }
    | undefined
  modified_at?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  text?: string | undefined
  tos_type?: 'managed' | 'external' | undefined
}
type TermsOfServices = { entries?: TermsOfService[] | undefined; total_count?: bigint | undefined }
type User = {
  id?: string | undefined
  type: 'user'
  login?: string | undefined
  name?: string | undefined
  address?: string | undefined
  avatar_url?: string | undefined
  created_at?: string | undefined
  job_title?: string | undefined
  language?: string | undefined
  max_upload_size?: bigint | undefined
  modified_at?: string | undefined
  notification_email?:
    | ({ email?: string | undefined; is_confirmed?: boolean | undefined } | null)
    | undefined
  phone?: string | undefined
  space_amount?: bigint | undefined
  space_used?: bigint | undefined
  status?: 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload' | undefined
  timezone?: string | undefined
}
type Users = {
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  total_count?: bigint | undefined
  entries?: User[] | undefined
}
type TrackingCode = {
  name?: string | undefined
  type?: 'tracking_code' | undefined
  value?: string | undefined
}
type UserAvatar = {
  pic_urls?:
    | { large?: string | undefined; preview?: string | undefined; small?: string | undefined }
    | undefined
}
type EmailAlias = {
  email?: string | undefined
  id?: string | undefined
  is_confirmed?: boolean | undefined
  type?: 'email_alias' | undefined
}
type EmailAliases = { entries?: EmailAlias[] | undefined; total_count?: bigint | undefined }
type TrashWebLinkRestored = {
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  modified_at?: string | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  name?: string | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection: { entries: FolderMini[]; total_count: bigint }
  purged_at?: (string | null) | undefined
  sequence_id: {}
  shared_link?: (string | null) | undefined
  trashed_at?: (string | null) | undefined
  type?: 'web_link' | undefined
  url?: string | undefined
}
type TrashWebLink = {
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  modified_at?: string | undefined
  modified_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  name?: string | undefined
  owned_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  parent?:
    | {
        etag?: (string | null) | undefined
        id: string
        type: 'folder'
        name?: string | undefined
        sequence_id?: {} | undefined
      }
    | undefined
  path_collection?:
    | {
        entries: {
          etag?: (string | null) | undefined
          id?: string | undefined
          name?: string | undefined
          sequence_id?: (string | null) | undefined
          type?: 'folder' | undefined
        }[]
        total_count: bigint
      }
    | undefined
  purged_at?: (string | null) | undefined
  sequence_id?: {} | undefined
  shared_link?: (string | null) | undefined
  trashed_at?: (string | null) | undefined
  type?: 'web_link' | undefined
  url?: string | undefined
}
type WebhookMini = {
  id?: string | undefined
  target?: { id?: string | undefined; type?: 'file' | 'folder' | undefined } | undefined
  type?: 'webhook' | undefined
}
type Webhooks = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: WebhookMini[] | undefined
}
type Webhook = {
  id?: string | undefined
  target?: { id?: string | undefined; type?: 'file' | 'folder' | undefined } | undefined
  type?: 'webhook' | undefined
  address?: string | undefined
  created_at?: string | undefined
  created_by?:
    | {
        id?: string | undefined
        type: 'user'
        login?: string | undefined
        name?: string | undefined
      }
    | undefined
  triggers?:
    | (
        | 'FILE.UPLOADED'
        | 'FILE.PREVIEWED'
        | 'FILE.DOWNLOADED'
        | 'FILE.TRASHED'
        | 'FILE.DELETED'
        | 'FILE.RESTORED'
        | 'FILE.COPIED'
        | 'FILE.MOVED'
        | 'FILE.LOCKED'
        | 'FILE.UNLOCKED'
        | 'FILE.RENAMED'
        | 'COMMENT.CREATED'
        | 'COMMENT.UPDATED'
        | 'COMMENT.DELETED'
        | 'TASK_ASSIGNMENT.CREATED'
        | 'TASK_ASSIGNMENT.UPDATED'
        | 'METADATA_INSTANCE.CREATED'
        | 'METADATA_INSTANCE.UPDATED'
        | 'METADATA_INSTANCE.DELETED'
        | 'FOLDER.CREATED'
        | 'FOLDER.RENAMED'
        | 'FOLDER.DOWNLOADED'
        | 'FOLDER.RESTORED'
        | 'FOLDER.DELETED'
        | 'FOLDER.COPIED'
        | 'FOLDER.MOVED'
        | 'FOLDER.TRASHED'
        | 'WEBHOOK.DELETED'
        | 'COLLABORATION.CREATED'
        | 'COLLABORATION.ACCEPTED'
        | 'COLLABORATION.REJECTED'
        | 'COLLABORATION.REMOVED'
        | 'COLLABORATION.UPDATED'
        | 'SHARED_LINK.DELETED'
        | 'SHARED_LINK.CREATED'
        | 'SHARED_LINK.UPDATED'
        | 'SIGN_REQUEST.COMPLETED'
        | 'SIGN_REQUEST.DECLINED'
        | 'SIGN_REQUEST.EXPIRED'
      )[]
    | undefined
}
type Workflow = {
  description?: string | undefined
  id?: string | undefined
  is_enabled?: boolean | undefined
  name?: string | undefined
  type?: 'workflow' | undefined
  flows?:
    | {
        created_at?: string | undefined
        created_by?: { id?: string | undefined; type: 'user' } | undefined
        id?: string | undefined
        outcomes?: {} | undefined
        trigger?:
          | {
              scope?:
                | {
                    object?: { id?: string | undefined; type?: 'folder' | undefined } | undefined
                    ref?: string | undefined
                    type?: 'trigger_scope' | undefined
                  }[]
                | undefined
              trigger_type?: 'WORKFLOW_MANUAL_START' | undefined
              type?: 'trigger' | undefined
            }
          | undefined
        type?: 'flow' | undefined
      }[]
    | undefined
}
type Workflows = {
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  prev_marker?: bigint | undefined
  entries?: Workflow[] | undefined
}
type ZipDownloadRequest = {
  download_file_name?: string | undefined
  items: { id: string; type: 'file' | 'folder.' }[]
}
type ZipDownload = {
  download_url?: string | undefined
  expires_at?: string | undefined
  name_conflicts?:
    | {
        download_name?: string | undefined
        id?: string | undefined
        original_name?: string | undefined
        type?: 'file' | 'folder' | undefined
      }[][]
    | undefined
  status_url?: string | undefined
}
type ZipDownloadStatus = {
  downloaded_file_count?: number | undefined
  skipped_file_count?: number | undefined
  skipped_folder_count?: number | undefined
  state?: 'in_progress' | 'failed' | 'success' | undefined
  total_file_count?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/authorize': {
      $get:
        | {
            input: {
              query: {
                response_type: 'code'
                client_id: string
                redirect_uri?: string | undefined
                state?: string | undefined
                scope?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                response_type: 'code'
                client_id: string
                redirect_uri?: string | undefined
                state?: string | undefined
                scope?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/collaboration_whitelist_entries': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: CollaborationAllowlistEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { direction: 'inbound' | 'outbound' | 'both'; domain: string } }
            output: CollaborationAllowlistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { direction: 'inbound' | 'outbound' | 'both'; domain: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaboration_whitelist_entries/:collaboration_whitelist_entry_id': {
      $delete:
        | {
            input: { param: { collaboration_whitelist_entry_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collaboration_whitelist_entry_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { collaboration_whitelist_entry_id: string } }
            output: CollaborationAllowlistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collaboration_whitelist_entry_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaboration_whitelist_exempt_targets': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: CollaborationAllowlistExemptTargets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { user: { id: string } } }
            output: CollaborationAllowlistExemptTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { user: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaboration_whitelist_exempt_targets/:collaboration_whitelist_exempt_target_id': {
      $delete:
        | {
            input: { param: { collaboration_whitelist_exempt_target_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collaboration_whitelist_exempt_target_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { collaboration_whitelist_exempt_target_id: string } }
            output: CollaborationAllowlistExemptTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collaboration_whitelist_exempt_target_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaborations': {
      $get:
        | {
            input: {
              query: {
                status: 'pending'
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: Collaborations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status: 'pending'
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined; notify?: boolean | undefined } } & {
              json: {
                accessible_by: {
                  id?: string | undefined
                  login?: string | undefined
                  type: 'user' | 'group'
                }
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                item: { id: string; type: 'file' | 'folder' }
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
              }
            }
            output: Collaboration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined; notify?: boolean | undefined } } & {
              json: {
                accessible_by: {
                  id?: string | undefined
                  login?: string | undefined
                  type: 'user' | 'group'
                }
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                item: { id: string; type: 'file' | 'folder' }
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fields?: string[] | undefined; notify?: boolean | undefined } } & {
              json: {
                accessible_by: {
                  id?: string | undefined
                  login?: string | undefined
                  type: 'user' | 'group'
                }
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                item: { id: string; type: 'file' | 'folder' }
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaborations/:collaboration_id': {
      $delete:
        | {
            input: { param: { collaboration_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collaboration_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { collaboration_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: Collaboration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collaboration_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                  | 'owner'
                status?: 'pending' | 'accepted' | 'rejected' | undefined
              }
            }
            output: Collaboration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                  | 'owner'
                status?: 'pending' | 'accepted' | 'rejected' | undefined
              }
            }
            output: Collaboration
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                  | 'owner'
                status?: 'pending' | 'accepted' | 'rejected' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                  | 'owner'
                status?: 'pending' | 'accepted' | 'rejected' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: Collections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/:collection_id/items': {
      $get:
        | {
            input: { param: { collection_id: string } } & {
              query: {
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: Items
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } } & {
              query: {
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comments': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                item?: { id: string; type: 'file' | 'comment' } | undefined
                message: string
                tagged_message?: string | undefined
              }
            }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                item?: { id: string; type: 'file' | 'comment' } | undefined
                message: string
                tagged_message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/comments/:comment_id': {
      $delete:
        | {
            input: { param: { comment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { comment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { comment_id: string } } & { query: { fields?: string[] | undefined } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { comment_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { message?: string | undefined } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { message?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/device_pinners/:device_pinner_id': {
      $delete:
        | {
            input: { param: { device_pinner_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { device_pinner_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { device_pinner_id: string } }
            output: DevicePinner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_pinner_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/enterprises/:enterprise_id/device_pinners': {
      $get:
        | {
            input: { param: { enterprise_id: string } } & {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: DevicePinners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_id: string } } & {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                stream_type?:
                  | 'all'
                  | 'changes'
                  | 'sync'
                  | 'admin_logs'
                  | 'admin_logs_streaming'
                  | undefined
                stream_position?: string | undefined
                limit?: bigint | undefined
                event_type?:
                  | (
                      | 'ACCESS_GRANTED'
                      | 'ACCESS_REVOKED'
                      | 'ADD_DEVICE_ASSOCIATION'
                      | 'ADD_LOGIN_ACTIVITY_DEVICE'
                      | 'ADMIN_LOGIN'
                      | 'APPLICATION_CREATED'
                      | 'APPLICATION_PUBLIC_KEY_ADDED'
                      | 'APPLICATION_PUBLIC_KEY_DELETED'
                      | 'CHANGE_ADMIN_ROLE'
                      | 'CHANGE_FOLDER_PERMISSION'
                      | 'COLLABORATION_ACCEPT'
                      | 'COLLABORATION_EXPIRATION'
                      | 'COLLABORATION_INVITE'
                      | 'COLLABORATION_REMOVE'
                      | 'COLLABORATION_ROLE_CHANGE'
                      | 'COMMENT_CREATE'
                      | 'COMMENT_DELETE'
                      | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY'
                      | 'CONTENT_WORKFLOW_AUTOMATION_ADD'
                      | 'CONTENT_WORKFLOW_AUTOMATION_DELETE'
                      | 'CONTENT_WORKFLOW_POLICY_ADD'
                      | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION'
                      | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION'
                      | 'COPY'
                      | 'DATA_RETENTION_CREATE_RETENTION'
                      | 'DATA_RETENTION_REMOVE_RETENTION'
                      | 'DELETE'
                      | 'DELETE_USER'
                      | 'DEVICE_TRUST_CHECK_FAILED'
                      | 'DOWNLOAD'
                      | 'EDIT'
                      | 'EDIT_USER'
                      | 'EMAIL_ALIAS_CONFIRM'
                      | 'EMAIL_ALIAS_REMOVE'
                      | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
                      | 'EXTERNAL_COLLAB_SECURITY_SETTINGS'
                      | 'FAILED_LOGIN'
                      | 'FILE_MARKED_MALICIOUS'
                      | 'FILE_WATERMARKED_DOWNLOAD'
                      | 'GROUP_ADD_ITEM'
                      | 'GROUP_ADD_USER'
                      | 'GROUP_CREATION'
                      | 'GROUP_DELETION'
                      | 'GROUP_EDITED'
                      | 'GROUP_REMOVE_ITEM'
                      | 'GROUP_REMOVE_USER'
                      | 'ITEM_MODIFY'
                      | 'ITEM_OPEN'
                      | 'ITEM_SHARED_UPDATE'
                      | 'ITEM_SYNC'
                      | 'ITEM_UNSYNC'
                      | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
                      | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
                      | 'LEGAL_HOLD_POLICY_CREATE'
                      | 'LEGAL_HOLD_POLICY_DELETE'
                      | 'LEGAL_HOLD_POLICY_UPDATE'
                      | 'LOCK'
                      | 'LOGIN'
                      | 'METADATA_INSTANCE_CREATE'
                      | 'METADATA_INSTANCE_DELETE'
                      | 'METADATA_INSTANCE_UPDATE'
                      | 'METADATA_TEMPLATE_CREATE'
                      | 'METADATA_TEMPLATE_DELETE'
                      | 'METADATA_TEMPLATE_UPDATE'
                      | 'MOVE'
                      | 'NEW_USER'
                      | 'OAUTH2_ACCESS_TOKEN_REVOKE'
                      | 'PREVIEW'
                      | 'REMOVE_DEVICE_ASSOCIATION'
                      | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
                      | 'RENAME'
                      | 'RETENTION_POLICY_ASSIGNMENT_ADD'
                      | 'SHARE'
                      | 'SHARE_EXPIRATION'
                      | 'SHIELD_ALERT'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_JUSTIFICATION_APPROVAL'
                      | 'SIGN_DOCUMENT_ASSIGNED'
                      | 'SIGN_DOCUMENT_CANCELLED'
                      | 'SIGN_DOCUMENT_COMPLETED'
                      | 'SIGN_DOCUMENT_CONVERTED'
                      | 'SIGN_DOCUMENT_CREATED'
                      | 'SIGN_DOCUMENT_DECLINED'
                      | 'SIGN_DOCUMENT_EXPIRED'
                      | 'SIGN_DOCUMENT_SIGNED'
                      | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED'
                      | 'SIGNER_DOWNLOADED'
                      | 'SIGNER_FORWARDED'
                      | 'STORAGE_EXPIRATION'
                      | 'TASK_ASSIGNMENT_CREATE'
                      | 'TASK_ASSIGNMENT_DELETE'
                      | 'TASK_ASSIGNMENT_UPDATE'
                      | 'TASK_CREATE'
                      | 'TASK_UPDATE'
                      | 'TERMS_OF_SERVICE_ACCEPT'
                      | 'TERMS_OF_SERVICE_REJECT'
                      | 'UNDELETE'
                      | 'UNLOCK'
                      | 'UNSHARE'
                      | 'UPDATE_COLLABORATION_EXPIRATION'
                      | 'UPDATE_SHARE_EXPIRATION'
                      | 'UPLOAD'
                      | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
                      | 'WATERMARK_LABEL_CREATE'
                      | 'WATERMARK_LABEL_DELETE'
                    )[]
                  | undefined
                created_after?: string | undefined
                created_before?: string | undefined
              }
            }
            output: Events
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                stream_type?:
                  | 'all'
                  | 'changes'
                  | 'sync'
                  | 'admin_logs'
                  | 'admin_logs_streaming'
                  | undefined
                stream_position?: string | undefined
                limit?: bigint | undefined
                event_type?:
                  | (
                      | 'ACCESS_GRANTED'
                      | 'ACCESS_REVOKED'
                      | 'ADD_DEVICE_ASSOCIATION'
                      | 'ADD_LOGIN_ACTIVITY_DEVICE'
                      | 'ADMIN_LOGIN'
                      | 'APPLICATION_CREATED'
                      | 'APPLICATION_PUBLIC_KEY_ADDED'
                      | 'APPLICATION_PUBLIC_KEY_DELETED'
                      | 'CHANGE_ADMIN_ROLE'
                      | 'CHANGE_FOLDER_PERMISSION'
                      | 'COLLABORATION_ACCEPT'
                      | 'COLLABORATION_EXPIRATION'
                      | 'COLLABORATION_INVITE'
                      | 'COLLABORATION_REMOVE'
                      | 'COLLABORATION_ROLE_CHANGE'
                      | 'COMMENT_CREATE'
                      | 'COMMENT_DELETE'
                      | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY'
                      | 'CONTENT_WORKFLOW_AUTOMATION_ADD'
                      | 'CONTENT_WORKFLOW_AUTOMATION_DELETE'
                      | 'CONTENT_WORKFLOW_POLICY_ADD'
                      | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION'
                      | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION'
                      | 'COPY'
                      | 'DATA_RETENTION_CREATE_RETENTION'
                      | 'DATA_RETENTION_REMOVE_RETENTION'
                      | 'DELETE'
                      | 'DELETE_USER'
                      | 'DEVICE_TRUST_CHECK_FAILED'
                      | 'DOWNLOAD'
                      | 'EDIT'
                      | 'EDIT_USER'
                      | 'EMAIL_ALIAS_CONFIRM'
                      | 'EMAIL_ALIAS_REMOVE'
                      | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
                      | 'EXTERNAL_COLLAB_SECURITY_SETTINGS'
                      | 'FAILED_LOGIN'
                      | 'FILE_MARKED_MALICIOUS'
                      | 'FILE_WATERMARKED_DOWNLOAD'
                      | 'GROUP_ADD_ITEM'
                      | 'GROUP_ADD_USER'
                      | 'GROUP_CREATION'
                      | 'GROUP_DELETION'
                      | 'GROUP_EDITED'
                      | 'GROUP_REMOVE_ITEM'
                      | 'GROUP_REMOVE_USER'
                      | 'ITEM_MODIFY'
                      | 'ITEM_OPEN'
                      | 'ITEM_SHARED_UPDATE'
                      | 'ITEM_SYNC'
                      | 'ITEM_UNSYNC'
                      | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
                      | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
                      | 'LEGAL_HOLD_POLICY_CREATE'
                      | 'LEGAL_HOLD_POLICY_DELETE'
                      | 'LEGAL_HOLD_POLICY_UPDATE'
                      | 'LOCK'
                      | 'LOGIN'
                      | 'METADATA_INSTANCE_CREATE'
                      | 'METADATA_INSTANCE_DELETE'
                      | 'METADATA_INSTANCE_UPDATE'
                      | 'METADATA_TEMPLATE_CREATE'
                      | 'METADATA_TEMPLATE_DELETE'
                      | 'METADATA_TEMPLATE_UPDATE'
                      | 'MOVE'
                      | 'NEW_USER'
                      | 'OAUTH2_ACCESS_TOKEN_REVOKE'
                      | 'PREVIEW'
                      | 'REMOVE_DEVICE_ASSOCIATION'
                      | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
                      | 'RENAME'
                      | 'RETENTION_POLICY_ASSIGNMENT_ADD'
                      | 'SHARE'
                      | 'SHARE_EXPIRATION'
                      | 'SHIELD_ALERT'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_JUSTIFICATION_APPROVAL'
                      | 'SIGN_DOCUMENT_ASSIGNED'
                      | 'SIGN_DOCUMENT_CANCELLED'
                      | 'SIGN_DOCUMENT_COMPLETED'
                      | 'SIGN_DOCUMENT_CONVERTED'
                      | 'SIGN_DOCUMENT_CREATED'
                      | 'SIGN_DOCUMENT_DECLINED'
                      | 'SIGN_DOCUMENT_EXPIRED'
                      | 'SIGN_DOCUMENT_SIGNED'
                      | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED'
                      | 'SIGNER_DOWNLOADED'
                      | 'SIGNER_FORWARDED'
                      | 'STORAGE_EXPIRATION'
                      | 'TASK_ASSIGNMENT_CREATE'
                      | 'TASK_ASSIGNMENT_DELETE'
                      | 'TASK_ASSIGNMENT_UPDATE'
                      | 'TASK_CREATE'
                      | 'TASK_UPDATE'
                      | 'TERMS_OF_SERVICE_ACCEPT'
                      | 'TERMS_OF_SERVICE_REJECT'
                      | 'UNDELETE'
                      | 'UNLOCK'
                      | 'UNSHARE'
                      | 'UPDATE_COLLABORATION_EXPIRATION'
                      | 'UPDATE_SHARE_EXPIRATION'
                      | 'UPLOAD'
                      | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
                      | 'WATERMARK_LABEL_CREATE'
                      | 'WATERMARK_LABEL_DELETE'
                    )[]
                  | undefined
                created_after?: string | undefined
                created_before?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $options:
        | { input: {}; output: RealtimeServers; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClientError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/file_requests/:file_request_id': {
      $delete:
        | {
            input: { param: { file_request_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_request_id: string } }
            output: FileRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: FileRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_request_id: string } } & {
              header: { 'if-match'?: string | undefined }
            } & { json: FileRequestUpdateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/file_requests/:file_request_id/copy': {
      $post:
        | {
            input: { param: { file_request_id: string } } & { json: FileRequestCopyRequest }
            output: FileRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_request_id: string } } & { json: FileRequestCopyRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_request_id: string } } & { json: FileRequestCopyRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_request_id: string } } & { json: FileRequestCopyRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_request_id: string } } & { json: FileRequestCopyRequest }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_request_id: string } } & { json: FileRequestCopyRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/file_version_legal_holds': {
      $get:
        | {
            input: {
              query: { policy_id: string; marker?: string | undefined; limit?: bigint | undefined }
            }
            output: FileVersionLegalHolds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { policy_id: string; marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/file_version_legal_holds/:file_version_legal_hold_id': {
      $get:
        | {
            input: { param: { file_version_legal_hold_id: string } }
            output: FileVersionLegalHold
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_version_legal_hold_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/file_version_retentions': {
      $get:
        | {
            input: {
              query: {
                file_id?: string | undefined
                file_version_id?: string | undefined
                policy_id?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                disposition_before?: string | undefined
                disposition_after?: string | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: FileVersionRetentions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                file_id?: string | undefined
                file_version_id?: string | undefined
                policy_id?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                disposition_before?: string | undefined
                disposition_after?: string | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/file_version_retentions/:file_version_retention_id': {
      $get:
        | {
            input: { param: { file_version_retention_id: string } }
            output: FileVersionRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_version_retention_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/content': {
      $options:
        | {
            input: {
              json: {
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                size?: number | undefined
              }
            }
            output: UploadUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                size?: number | undefined
              }
            }
            output: ConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                size?: number | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: {
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
                  name: string
                  parent: { id: string }
                }
                file: File
              }
            }
            output: Files
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: {
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
                  name: string
                  parent: { id: string }
                }
                file: File
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: {
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
                  name: string
                  parent: { id: string }
                }
                file: File
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: {
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
                  name: string
                  parent: { id: string }
                }
                file: File
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/upload_sessions': {
      $post:
        | {
            input: { json: { file_name: string; file_size: bigint; folder_id: string } }
            output: UploadSession
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { file_name: string; file_size: bigint; folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { file_name: string; file_size: bigint; folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { file_name: string; file_size: bigint; folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { file_name: string; file_size: bigint; folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { file_name: string; file_size: bigint; folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/upload_sessions/:upload_session_id': {
      $delete:
        | {
            input: { param: { upload_session_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { upload_session_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { upload_session_id: string } }
            output: UploadSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_session_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { upload_session_id: string } } & {
              header: { digest: string; 'content-range': string }
            } & { json: File }
            output: UploadedPart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: { digest: string; 'content-range': string }
            } & { json: File }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: { digest: string; 'content-range': string }
            } & { json: File }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: { digest: string; 'content-range': string }
            } & { json: File }
            output: ClientError
            outputFormat: 'json'
            status: 416
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: { digest: string; 'content-range': string }
            } & { json: File }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/upload_sessions/:upload_session_id/commit': {
      $post:
        | {
            input: { param: { upload_session_id: string } } & {
              header: {
                digest: string
                'if-match'?: string | undefined
                'if-none-match'?: string | undefined
              }
            } & { json: { parts: UploadPart[] } }
            output: Files
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: {
                digest: string
                'if-match'?: string | undefined
                'if-none-match'?: string | undefined
              }
            } & { json: { parts: UploadPart[] } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: {
                digest: string
                'if-match'?: string | undefined
                'if-none-match'?: string | undefined
              }
            } & { json: { parts: UploadPart[] } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: {
                digest: string
                'if-match'?: string | undefined
                'if-none-match'?: string | undefined
              }
            } & { json: { parts: UploadPart[] } }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { upload_session_id: string } } & {
              header: {
                digest: string
                'if-match'?: string | undefined
                'if-none-match'?: string | undefined
              }
            } & { json: { parts: UploadPart[] } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/upload_sessions/:upload_session_id/parts': {
      $get:
        | {
            input: { param: { upload_session_id: string } } & {
              query: { offset?: bigint | undefined; limit?: bigint | undefined }
            }
            output: UploadParts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_session_id: string } } & {
              query: { offset?: bigint | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id': {
      $delete:
        | {
            input: { param: { file_id: string } } & { header: { 'if-match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { file_id: string } } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_id: string } } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints': string | null
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: TrashFileRestored
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                description?: string | undefined
                disposition_at?: string | undefined
                lock?:
                  | {
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    }
                  | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id#add_shared_link': {
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id#get_shared_link': {
      $get:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id#remove_shared_link': {
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id#update_shared_link': {
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/collaborations': {
      $get:
        | {
            input: { param: { file_id: string } } & {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: Collaborations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/comments': {
      $get:
        | {
            input: { param: { file_id: string } } & {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Comments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/content': {
      $get:
        | {
            input: { param: { file_id: string } } & {
              query: { version?: string | undefined; access_token?: string | undefined }
            } & { header: { range?: string | undefined; boxapi?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { file_id: string } } & {
              query: { version?: string | undefined; access_token?: string | undefined }
            } & { header: { range?: string | undefined; boxapi?: string | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { file_id: string } } & {
              query: { version?: string | undefined; access_token?: string | undefined }
            } & { header: { range?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined; 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: { content_modified_at?: string | undefined; name: string }
                file: File
              }
            }
            output: Files
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined; 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: { content_modified_at?: string | undefined; name: string }
                file: File
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined; 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: { content_modified_at?: string | undefined; name: string }
                file: File
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/copy': {
      $post:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                parent: { id: string }
                version?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/metadata': {
      $get:
        | {
            input: { param: { file_id: string } }
            output: Metadatas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo': {
      $delete:
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_id: string } }
            output: Classification
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { file_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: Classification
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: Classification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/metadata/global/boxSkillsCards': {
      $delete:
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_id: string } }
            output: SkillCardsMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { file_id: string } } & {
              json: {
                cards: (
                  | SkillCard
                  | KeywordSkillCard
                  | TimelineSkillCard
                  | TranscriptSkillCard
                  | StatusSkillCard
                )[]
              }
            }
            output: SkillCardsMetadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                cards: (
                  | SkillCard
                  | KeywordSkillCard
                  | TimelineSkillCard
                  | TranscriptSkillCard
                  | StatusSkillCard
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                cards: (
                  | SkillCard
                  | KeywordSkillCard
                  | TimelineSkillCard
                  | TranscriptSkillCard
                  | StatusSkillCard
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                cards: (
                  | SkillCard
                  | KeywordSkillCard
                  | TimelineSkillCard
                  | TranscriptSkillCard
                  | StatusSkillCard
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                cards: (
                  | SkillCard
                  | KeywordSkillCard
                  | TimelineSkillCard
                  | TranscriptSkillCard
                  | StatusSkillCard
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: string | undefined
                value?: {} | undefined
              }[]
            }
            output: SkillCardsMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: string | undefined
                value?: {} | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: string | undefined
                value?: {} | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/metadata/:scope/:template_key': {
      $delete:
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: Metadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: Metadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: Metadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/tasks': {
      $get:
        | {
            input: { param: { file_id: string } }
            output: Tasks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/thumbnail.:extension': {
      $get:
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string; extension: 'png' | 'jpg' } } & {
              query: {
                min_height?: number | undefined
                min_width?: number | undefined
                max_height?: number | undefined
                max_width?: number | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/trash': {
      $delete:
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } }
            output: TrashFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/upload_sessions': {
      $post:
        | {
            input: { param: { file_id: string } } & {
              json: { file_name?: string | undefined; file_size: bigint }
            }
            output: UploadSession
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & {
              json: { file_name?: string | undefined; file_size: bigint }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & {
              json: { file_name?: string | undefined; file_size: bigint }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/versions': {
      $get:
        | {
            input: { param: { file_id: string } } & {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: FileVersions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/versions/current': {
      $post:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { id?: string | undefined; type?: 'file_version' | undefined }
            }
            output: FileVersion
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: { id?: string | undefined; type?: 'file_version' | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/versions/:file_version_id': {
      $delete:
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              header: { 'if-match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              header: { 'if-match'?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: FileVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              json: { trashed_at?: string | undefined }
            }
            output: FileVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              json: { trashed_at?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/watermark': {
      $delete:
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { file_id: string } }
            output: Watermark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { file_id: string } } & { json: { watermark: { imprint: 'default' } } }
            output: Watermark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { json: { watermark: { imprint: 'default' } } }
            output: Watermark
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & { json: { watermark: { imprint: 'default' } } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folder_locks': {
      $get:
        | {
            input: { query: { folder_id: string } }
            output: FolderLocks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                folder: { id: string; type: string }
                locked_operations?: { delete: boolean; move: boolean } | undefined
              }
            }
            output: FolderLock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                folder: { id: string; type: string }
                locked_operations?: { delete: boolean; move: boolean } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                folder: { id: string; type: string }
                locked_operations?: { delete: boolean; move: boolean } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                folder: { id: string; type: string }
                locked_operations?: { delete: boolean; move: boolean } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folder_locks/:folder_lock_id': {
      $delete:
        | {
            input: { param: { folder_lock_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { folder_lock_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_lock_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_lock_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                name: string
                parent: { id: string }
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: Folder
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                name: string
                parent: { id: string }
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                name: string
                parent: { id: string }
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                name: string
                parent: { id: string }
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                name: string
                parent: { id: string }
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                name: string
                parent: { id: string }
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/trash/items': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
              }
            }
            output: Items
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                direction?: 'ASC' | 'DESC' | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id': {
      $delete:
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { recursive?: boolean | undefined }
            } & { header: { 'if-match'?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: TrashFolderRestored
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                can_non_owners_invite?: boolean | undefined
                can_non_owners_view_collaborators?: boolean | undefined
                collections?: { id?: string | undefined; type?: string | undefined }[] | undefined
                description?: string | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id#add_shared_link': {
      $put:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id#get_shared_link': {
      $get:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id#remove_shared_link': {
      $put:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id#update_shared_link': {
      $put:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/collaborations': {
      $get:
        | {
            input: { param: { folder_id: string } } & { query: { fields?: string[] | undefined } }
            output: Collaborations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/copy': {
      $post:
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: Folder
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { json: { name?: string | undefined; parent: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/items': {
      $get:
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            } & { header: { boxapi?: string | undefined } }
            output: Items
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            } & { header: { boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            } & { header: { boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            } & { header: { boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
              }
            } & { header: { boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/metadata': {
      $get:
        | {
            input: { param: { folder_id: string } }
            output: Metadatas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo': {
      $delete:
        | { input: { param: { folder_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { folder_id: string } }
            output: Classification
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { folder_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: Classification
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { Box__Security__Classification__Key?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { folder_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: Classification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { folder_id: string } } & {
              json: {
                op?: 'replace' | undefined
                path?: '/Box__Security__Classification__Key' | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/metadata/:scope/:template_key': {
      $delete:
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: Metadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: Metadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: Metadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                from?: string | undefined
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/trash': {
      $delete:
        | { input: { param: { folder_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { folder_id: string } } & { query: { fields?: string[] | undefined } }
            output: TrashFolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/watermark': {
      $delete:
        | { input: { param: { folder_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { folder_id: string } }
            output: Watermark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { folder_id: string } } & {
              json: { watermark: { imprint: 'default' } }
            }
            output: Watermark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { watermark: { imprint: 'default' } }
            }
            output: Watermark
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { watermark: { imprint: 'default' } }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/group_memberships': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                configurable_permissions?: { [x: string]: boolean } | undefined
                group: { id: string }
                role?: 'member' | 'admin' | undefined
                user: { id: string }
              }
            }
            output: GroupMembership
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                configurable_permissions?: { [x: string]: boolean } | undefined
                group: { id: string }
                role?: 'member' | 'admin' | undefined
                user: { id: string }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                configurable_permissions?: { [x: string]: boolean } | undefined
                group: { id: string }
                role?: 'member' | 'admin' | undefined
                user: { id: string }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/group_memberships/:group_membership_id': {
      $delete:
        | {
            input: { param: { group_membership_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_membership_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { group_membership_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: GroupMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_membership_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { group_membership_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: {
                configurable_permissions?: { [x: string]: boolean } | undefined
                role?: 'member' | 'admin' | undefined
              }
            }
            output: GroupMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_membership_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: {
                configurable_permissions?: { [x: string]: boolean } | undefined
                role?: 'member' | 'admin' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups': {
      $get:
        | {
            input: {
              query: {
                filter_term?: string | undefined
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Groups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter_term?: string | undefined
                fields?: string[] | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                external_sync_identifier?: string | undefined
                invitability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                member_viewability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                name: string
                provenance?: string | undefined
              }
            }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                external_sync_identifier?: string | undefined
                invitability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                member_viewability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                name: string
                provenance?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                description?: string | undefined
                external_sync_identifier?: string | undefined
                invitability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                member_viewability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                name: string
                provenance?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/terminate_sessions': {
      $post:
        | {
            input: { json: { group_ids: string[] } }
            output: SessionTerminationMessage
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: { group_ids: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/:group_id': {
      $delete:
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { group_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { group_id: string } } & { query: { fields?: string[] | undefined } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { group_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: {
                description?: string | undefined
                external_sync_identifier?: string | undefined
                invitability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                member_viewability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                name?: string | undefined
                provenance?: string | undefined
              }
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: {
                description?: string | undefined
                external_sync_identifier?: string | undefined
                invitability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                member_viewability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                name?: string | undefined
                provenance?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: {
                description?: string | undefined
                external_sync_identifier?: string | undefined
                invitability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                member_viewability_level?:
                  | 'admins_only'
                  | 'admins_and_members'
                  | 'all_managed_users'
                  | undefined
                name?: string | undefined
                provenance?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/:group_id/collaborations': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: Collaborations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/:group_id/memberships': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: GroupMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/invites': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { actionable_by: { login?: string | undefined }; enterprise: { id: string } }
            }
            output: Invite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: { actionable_by: { login?: string | undefined }; enterprise: { id: string } }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/invites/:invite_id': {
      $get:
        | {
            input: { param: { invite_id: string } } & { query: { fields?: string[] | undefined } }
            output: Invite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invite_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policies': {
      $get:
        | {
            input: {
              query: {
                policy_name?: string | undefined
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: LegalHoldPolicies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                policy_name?: string | undefined
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                filter_ended_at?: string | undefined
                filter_started_at?: string | undefined
                is_ongoing?: boolean | undefined
                policy_name: string
              }
            }
            output: LegalHoldPolicy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                description?: string | undefined
                filter_ended_at?: string | undefined
                filter_started_at?: string | undefined
                is_ongoing?: boolean | undefined
                policy_name: string
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                description?: string | undefined
                filter_ended_at?: string | undefined
                filter_started_at?: string | undefined
                is_ongoing?: boolean | undefined
                policy_name: string
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                description?: string | undefined
                filter_ended_at?: string | undefined
                filter_started_at?: string | undefined
                is_ongoing?: boolean | undefined
                policy_name: string
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policies/:legal_hold_policy_id': {
      $delete:
        | {
            input: { param: { legal_hold_policy_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { legal_hold_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { legal_hold_policy_id: string } }
            output: LegalHoldPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { legal_hold_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { legal_hold_policy_id: string } } & {
              json: {
                description?: string | undefined
                policy_name?: string | undefined
                release_notes?: string | undefined
              }
            }
            output: LegalHoldPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { legal_hold_policy_id: string } } & {
              json: {
                description?: string | undefined
                policy_name?: string | undefined
                release_notes?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { legal_hold_policy_id: string } } & {
              json: {
                description?: string | undefined
                policy_name?: string | undefined
                release_notes?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policy_assignments': {
      $get:
        | {
            input: {
              query: {
                policy_id: string
                assign_to_type?: 'file' | 'file_version' | 'folder' | 'user' | undefined
                assign_to_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
                fields?: string[] | undefined
              }
            }
            output: LegalHoldPolicyAssignments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                policy_id: string
                assign_to_type?: 'file' | 'file_version' | 'folder' | 'user' | undefined
                assign_to_id?: string | undefined
                marker?: string | undefined
                limit?: bigint | undefined
                fields?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'file' | 'file_version' | 'folder' | 'user' }
                policy_id: string
              }
            }
            output: LegalHoldPolicyAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'file' | 'file_version' | 'folder' | 'user' }
                policy_id: string
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id': {
      $delete:
        | {
            input: { param: { legal_hold_policy_assignment_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { legal_hold_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { legal_hold_policy_assignment_id: string } }
            output: LegalHoldPolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { legal_hold_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id/file_versions_on_hold': {
      $get:
        | {
            input: { param: { legal_hold_policy_assignment_id: string } } & {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                fields?: string[] | undefined
              }
            }
            output: FileVersionLegalHolds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { legal_hold_policy_assignment_id: string } } & {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                fields?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id/files_on_hold': {
      $get:
        | {
            input: { param: { legal_hold_policy_assignment_id: string } } & {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                fields?: string[] | undefined
              }
            }
            output: FileVersionLegalHolds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { legal_hold_policy_assignment_id: string } } & {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                fields?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_cascade_policies': {
      $get:
        | {
            input: {
              query: {
                folder_id: string
                owner_enterprise_id?: string | undefined
                marker?: string | undefined
                offset?: bigint | undefined
              }
            }
            output: MetadataCascadePolicies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                folder_id: string
                owner_enterprise_id?: string | undefined
                marker?: string | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                folder_id: string
                owner_enterprise_id?: string | undefined
                marker?: string | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                folder_id: string
                owner_enterprise_id?: string | undefined
                marker?: string | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                folder_id: string
                owner_enterprise_id?: string | undefined
                marker?: string | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: { folder_id: string; scope: 'global' | 'enterprise'; templateKey: string }
            }
            output: MetadataCascadePolicy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: { folder_id: string; scope: 'global' | 'enterprise'; templateKey: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { folder_id: string; scope: 'global' | 'enterprise'; templateKey: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { folder_id: string; scope: 'global' | 'enterprise'; templateKey: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { folder_id: string; scope: 'global' | 'enterprise'; templateKey: string }
            }
            output: ConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: { folder_id: string; scope: 'global' | 'enterprise'; templateKey: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_cascade_policies/:metadata_cascade_policy_id': {
      $delete:
        | {
            input: { param: { metadata_cascade_policy_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { metadata_cascade_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { metadata_cascade_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { metadata_cascade_policy_id: string } }
            output: MetadataCascadePolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { metadata_cascade_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { metadata_cascade_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_cascade_policies/:metadata_cascade_policy_id/apply': {
      $post:
        | {
            input: { param: { metadata_cascade_policy_id: string } } & {
              json: { conflict_resolution: 'none' | 'overwrite' }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { metadata_cascade_policy_id: string } } & {
              json: { conflict_resolution: 'none' | 'overwrite' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { metadata_cascade_policy_id: string } } & {
              json: { conflict_resolution: 'none' | 'overwrite' }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_queries/execute_read': {
      $post:
        | {
            input: { json: MetadataQuery }
            output: MetadataQueryResults
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MetadataQuery }; output: ClientError; outputFormat: 'json'; status: 400 }
        | { input: { json: MetadataQuery }; output: ClientError; outputFormat: 'json'; status: 404 }
        | { input: { json: MetadataQuery }; output: ClientError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/metadata_query_indices': {
      $get:
        | {
            input: { query: { scope: 'global' | 'enterprise'; template_key: string } }
            output: MetadataQueryIndices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates': {
      $get:
        | {
            input: { query: { metadata_instance_id: string } }
            output: MetadataTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { metadata_instance_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { metadata_instance_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/enterprise': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: MetadataTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ClientError; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: ClassificationTemplate; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClientError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ClientError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ClientError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add': {
      $put:
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                fieldKey: string
                op: string
              }[]
            }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                fieldKey: string
                op: string
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                fieldKey: string
                op: string
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                fieldKey: string
                op: string
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#delete': {
      $put:
        | {
            input: { json: { enumOptionKey: string; fieldKey: string; op: string }[] }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { enumOptionKey: string; fieldKey: string; op: string }[] }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { enumOptionKey: string; fieldKey: string; op: string }[] }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { enumOptionKey: string; fieldKey: string; op: string }[] }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update': {
      $put:
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                enumOptionKey: string
                fieldKey: string
                op: string
              }[]
            }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                enumOptionKey: string
                fieldKey: string
                op: string
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                enumOptionKey: string
                fieldKey: string
                op: string
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                data: {
                  classification?:
                    | {
                        classificationDefinition?: string | undefined
                        colorID?: number | undefined
                      }
                    | undefined
                  key: string
                }
                enumOptionKey: string
                fieldKey: string
                op: string
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/global': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: MetadataTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/schema': {
      $post:
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: string
                fields?:
                  | {
                      description?: string | undefined
                      displayName: string
                      hidden?: boolean | undefined
                      key: string
                      options?: { key: string }[] | undefined
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect'
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: string
                templateKey?: string | undefined
              }
            }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: string
                fields?:
                  | {
                      description?: string | undefined
                      displayName: string
                      hidden?: boolean | undefined
                      key: string
                      options?: { key: string }[] | undefined
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect'
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: string
                templateKey?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: string
                fields?:
                  | {
                      description?: string | undefined
                      displayName: string
                      hidden?: boolean | undefined
                      key: string
                      options?: { key: string }[] | undefined
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect'
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: string
                templateKey?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: string
                fields?:
                  | {
                      description?: string | undefined
                      displayName: string
                      hidden?: boolean | undefined
                      key: string
                      options?: { key: string }[] | undefined
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect'
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: string
                templateKey?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/schema#classifications': {
      $post:
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: 'Classification'
                fields?:
                  | {
                      displayName?: 'Classification' | undefined
                      hidden?: boolean | undefined
                      key?: 'Box__Security__Classification__Key' | undefined
                      options?:
                        | {
                            key?: string | undefined
                            staticConfig?:
                              | {
                                  classification?:
                                    | {
                                        classificationDefinition?: string | undefined
                                        colorID?: number | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }[]
                        | undefined
                      type?: 'enum' | undefined
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: 'enterprise'
                templateKey?: 'securityClassification-6VMVochwUWo' | undefined
              }
            }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: 'Classification'
                fields?:
                  | {
                      displayName?: 'Classification' | undefined
                      hidden?: boolean | undefined
                      key?: 'Box__Security__Classification__Key' | undefined
                      options?:
                        | {
                            key?: string | undefined
                            staticConfig?:
                              | {
                                  classification?:
                                    | {
                                        classificationDefinition?: string | undefined
                                        colorID?: number | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }[]
                        | undefined
                      type?: 'enum' | undefined
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: 'enterprise'
                templateKey?: 'securityClassification-6VMVochwUWo' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: 'Classification'
                fields?:
                  | {
                      displayName?: 'Classification' | undefined
                      hidden?: boolean | undefined
                      key?: 'Box__Security__Classification__Key' | undefined
                      options?:
                        | {
                            key?: string | undefined
                            staticConfig?:
                              | {
                                  classification?:
                                    | {
                                        classificationDefinition?: string | undefined
                                        colorID?: number | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }[]
                        | undefined
                      type?: 'enum' | undefined
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: 'enterprise'
                templateKey?: 'securityClassification-6VMVochwUWo' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                copyInstanceOnItemCopy?: boolean | undefined
                displayName: 'Classification'
                fields?:
                  | {
                      displayName?: 'Classification' | undefined
                      hidden?: boolean | undefined
                      key?: 'Box__Security__Classification__Key' | undefined
                      options?:
                        | {
                            key?: string | undefined
                            staticConfig?:
                              | {
                                  classification?:
                                    | {
                                        classificationDefinition?: string | undefined
                                        colorID?: number | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }[]
                        | undefined
                      type?: 'enum' | undefined
                    }[]
                  | undefined
                hidden?: boolean | undefined
                scope: 'enterprise'
                templateKey?: 'securityClassification-6VMVochwUWo' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/:scope/:template_key/schema': {
      $delete:
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
                data?: { [x: string]: string } | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
                op:
                  | 'editTemplate'
                  | 'addField'
                  | 'reorderFields'
                  | 'addEnumOption'
                  | 'reorderEnumOptions'
                  | 'reorderMultiSelectOptions'
                  | 'addMultiSelectOption'
                  | 'editField'
                  | 'removeField'
                  | 'editEnumOption'
                  | 'removeEnumOption'
                  | 'editMultiSelectOption'
                  | 'removeMultiSelectOption'
              }[]
            }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
                data?: { [x: string]: string } | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
                op:
                  | 'editTemplate'
                  | 'addField'
                  | 'reorderFields'
                  | 'addEnumOption'
                  | 'reorderEnumOptions'
                  | 'reorderMultiSelectOptions'
                  | 'addMultiSelectOption'
                  | 'editField'
                  | 'removeField'
                  | 'editEnumOption'
                  | 'removeEnumOption'
                  | 'editMultiSelectOption'
                  | 'removeMultiSelectOption'
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
                data?: { [x: string]: string } | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
                op:
                  | 'editTemplate'
                  | 'addField'
                  | 'reorderFields'
                  | 'addEnumOption'
                  | 'reorderEnumOptions'
                  | 'reorderMultiSelectOptions'
                  | 'addMultiSelectOption'
                  | 'editField'
                  | 'removeField'
                  | 'editEnumOption'
                  | 'removeEnumOption'
                  | 'editMultiSelectOption'
                  | 'removeMultiSelectOption'
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
                data?: { [x: string]: string } | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
                op:
                  | 'editTemplate'
                  | 'addField'
                  | 'reorderFields'
                  | 'addEnumOption'
                  | 'reorderEnumOptions'
                  | 'reorderMultiSelectOptions'
                  | 'addMultiSelectOption'
                  | 'editField'
                  | 'removeField'
                  | 'editEnumOption'
                  | 'removeEnumOption'
                  | 'editMultiSelectOption'
                  | 'removeMultiSelectOption'
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
                data?: { [x: string]: string } | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
                op:
                  | 'editTemplate'
                  | 'addField'
                  | 'reorderFields'
                  | 'addEnumOption'
                  | 'reorderEnumOptions'
                  | 'reorderMultiSelectOptions'
                  | 'addMultiSelectOption'
                  | 'editField'
                  | 'removeField'
                  | 'editEnumOption'
                  | 'removeEnumOption'
                  | 'editMultiSelectOption'
                  | 'removeMultiSelectOption'
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/revoke': {
      $post:
        | {
            input: { json: PostOAuth2Revoke } & { form: PostOAuth2Revoke }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: PostOAuth2Revoke } & { form: PostOAuth2Revoke }
            output: OAuth2Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostOAuth2Revoke } & { form: PostOAuth2Revoke }
            output: OAuth2Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/token': {
      $post:
        | {
            input: { json: PostOAuth2Token } & { form: PostOAuth2Token }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PostOAuth2Token } & { form: PostOAuth2Token }
            output: OAuth2Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostOAuth2Token } & { form: PostOAuth2Token }
            output: OAuth2Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/token#refresh': {
      $post:
        | {
            input: { json: PostOAuth2TokenRefreshAccessToken } & {
              form: PostOAuth2TokenRefreshAccessToken
            }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PostOAuth2TokenRefreshAccessToken } & {
              form: PostOAuth2TokenRefreshAccessToken
            }
            output: OAuth2Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostOAuth2TokenRefreshAccessToken } & {
              form: PostOAuth2TokenRefreshAccessToken
            }
            output: OAuth2Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/recent_items': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: RecentItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policies': {
      $get:
        | {
            input: {
              query: {
                policy_name?: string | undefined
                policy_type?: 'finite' | 'indefinite' | undefined
                created_by_user_id?: string | undefined
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: RetentionPolicies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                policy_name?: string | undefined
                policy_type?: 'finite' | 'indefinite' | undefined
                created_by_user_id?: string | undefined
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                policy_name?: string | undefined
                policy_type?: 'finite' | 'indefinite' | undefined
                created_by_user_id?: string | undefined
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                policy_name?: string | undefined
                policy_type?: 'finite' | 'indefinite' | undefined
                created_by_user_id?: string | undefined
                fields?: string[] | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: true | false | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action: 'permanently_delete' | 'remove_retention'
                policy_name: string
                policy_type: 'finite' | 'indefinite'
                retention_length?: string | undefined
                retention_type?: 'modifiable' | 'non-modifiable' | undefined
              }
            }
            output: RetentionPolicy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: true | false | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action: 'permanently_delete' | 'remove_retention'
                policy_name: string
                policy_type: 'finite' | 'indefinite'
                retention_length?: string | undefined
                retention_type?: 'modifiable' | 'non-modifiable' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: true | false | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action: 'permanently_delete' | 'remove_retention'
                policy_name: string
                policy_type: 'finite' | 'indefinite'
                retention_length?: string | undefined
                retention_type?: 'modifiable' | 'non-modifiable' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: true | false | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action: 'permanently_delete' | 'remove_retention'
                policy_name: string
                policy_type: 'finite' | 'indefinite'
                retention_length?: string | undefined
                retention_type?: 'modifiable' | 'non-modifiable' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policies/:retention_policy_id': {
      $delete:
        | {
            input: { param: { retention_policy_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { retention_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { retention_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { retention_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { retention_policy_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: RetentionPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                policy_name?: string | undefined
                retention_length?: string | undefined
                retention_type?: string | undefined
                status?: string | undefined
              }
            }
            output: RetentionPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                policy_name?: string | undefined
                retention_length?: string | undefined
                retention_type?: string | undefined
                status?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                policy_name?: string | undefined
                retention_length?: string | undefined
                retention_type?: string | undefined
                status?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                policy_name?: string | undefined
                retention_length?: string | undefined
                retention_type?: string | undefined
                status?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                are_owners_notified?: true | false | undefined
                can_owner_extend_retention?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
                description?: string | undefined
                disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
                policy_name?: string | undefined
                retention_length?: string | undefined
                retention_type?: string | undefined
                status?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policies/:retention_policy_id/assignments': {
      $get:
        | {
            input: { param: { retention_policy_id: string } } & {
              query: {
                type?: 'folder' | 'enterprise' | 'metadata_template' | undefined
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: RetentionPolicyAssignments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              query: {
                type?: 'folder' | 'enterprise' | 'metadata_template' | undefined
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              query: {
                type?: 'folder' | 'enterprise' | 'metadata_template' | undefined
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policy_assignments': {
      $post:
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'enterprise' | 'folder' | 'metadata_template' }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
                policy_id: string
                start_date_field?: string | undefined
              }
            }
            output: RetentionPolicyAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'enterprise' | 'folder' | 'metadata_template' }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
                policy_id: string
                start_date_field?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'enterprise' | 'folder' | 'metadata_template' }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
                policy_id: string
                start_date_field?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'enterprise' | 'folder' | 'metadata_template' }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
                policy_id: string
                start_date_field?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                assign_to: { id: string; type: 'enterprise' | 'folder' | 'metadata_template' }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
                policy_id: string
                start_date_field?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policy_assignments/:retention_policy_assignment_id': {
      $delete:
        | {
            input: { param: { retention_policy_assignment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { retention_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { retention_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { retention_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: RetentionPolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policy_assignments/:retention_policy_assignment_id/file_versions_under_retention': {
      $get:
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: FilesUnderRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policy_assignments/:retention_policy_assignment_id/files_under_retention': {
      $get:
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: FilesUnderRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { retention_policy_assignment_id: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: 'user_content' | 'enterprise_content' | undefined
                file_extensions?: string[] | undefined
                created_at_range?: string[] | undefined
                updated_at_range?: string[] | undefined
                size_range?: number[] | undefined
                owner_user_ids?: string[] | undefined
                recent_updater_user_ids?: string[] | undefined
                ancestor_folder_ids?: string[] | undefined
                content_types?:
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tag')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: SearchResults | SearchResultsWithSharedLinks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: 'user_content' | 'enterprise_content' | undefined
                file_extensions?: string[] | undefined
                created_at_range?: string[] | undefined
                updated_at_range?: string[] | undefined
                size_range?: number[] | undefined
                owner_user_ids?: string[] | undefined
                recent_updater_user_ids?: string[] | undefined
                ancestor_folder_ids?: string[] | undefined
                content_types?:
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tag')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: 'user_content' | 'enterprise_content' | undefined
                file_extensions?: string[] | undefined
                created_at_range?: string[] | undefined
                updated_at_range?: string[] | undefined
                size_range?: number[] | undefined
                owner_user_ids?: string[] | undefined
                recent_updater_user_ids?: string[] | undefined
                ancestor_folder_ids?: string[] | undefined
                content_types?:
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tag')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: 'user_content' | 'enterprise_content' | undefined
                file_extensions?: string[] | undefined
                created_at_range?: string[] | undefined
                updated_at_range?: string[] | undefined
                size_range?: number[] | undefined
                owner_user_ids?: string[] | undefined
                recent_updater_user_ids?: string[] | undefined
                ancestor_folder_ids?: string[] | undefined
                content_types?:
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tag')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                query?: string | undefined
                scope?: 'user_content' | 'enterprise_content' | undefined
                file_extensions?: string[] | undefined
                created_at_range?: string[] | undefined
                updated_at_range?: string[] | undefined
                size_range?: number[] | undefined
                owner_user_ids?: string[] | undefined
                recent_updater_user_ids?: string[] | undefined
                ancestor_folder_ids?: string[] | undefined
                content_types?:
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tag')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shared_items': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shared_items#folders': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shared_items#web_links': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_reports': {
      $get:
        | {
            input: {
              query: {
                shield_information_barrier_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: {
              entries?: ShieldInformationBarrierReport[] | undefined
              limit?: bigint | undefined
              next_marker?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                shield_information_barrier_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                shield_information_barrier_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ShieldInformationBarrierReference }
            output: ShieldInformationBarrierReport
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ShieldInformationBarrierReference }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ShieldInformationBarrierReference }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ShieldInformationBarrierReference }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_reports/:shield_information_barrier_report_id': {
      $get:
        | {
            input: { param: { shield_information_barrier_report_id: string } }
            output: ShieldInformationBarrierReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_report_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_report_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segment_members': {
      $get:
        | {
            input: {
              query: {
                shield_information_barrier_segment_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: {
              entries?: ShieldInformationBarrierSegmentMember[] | undefined
              limit?: bigint | undefined
              next_marker?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                shield_information_barrier_segment_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                type?: 'shield_information_barrier_segment_member' | undefined
                user: { id?: string | undefined; type: 'user' }
              }
            }
            output: ShieldInformationBarrierSegmentMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                type?: 'shield_information_barrier_segment_member' | undefined
                user: { id?: string | undefined; type: 'user' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                type?: 'shield_information_barrier_segment_member' | undefined
                user: { id?: string | undefined; type: 'user' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segment_members/:shield_information_barrier_segment_member_id': {
      $delete:
        | {
            input: { param: { shield_information_barrier_segment_member_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shield_information_barrier_segment_member_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_member_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { shield_information_barrier_segment_member_id: string } }
            output: ShieldInformationBarrierSegmentMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_segment_member_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_member_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segment_restrictions': {
      $get:
        | {
            input: {
              query: {
                shield_information_barrier_segment_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: {
              entries?: ShieldInformationBarrierSegmentRestriction[] | undefined
              limit?: bigint | undefined
              next_marker?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                shield_information_barrier_segment_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                restricted_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                type: 'shield_information_barrier_segment_restriction'
              }
            }
            output: ShieldInformationBarrierSegmentRestriction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                restricted_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                type: 'shield_information_barrier_segment_restriction'
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                restricted_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                type: 'shield_information_barrier_segment_restriction'
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segment_restrictions/:shield_information_barrier_segment_restriction_id': {
      $delete:
        | {
            input: { param: { shield_information_barrier_segment_restriction_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shield_information_barrier_segment_restriction_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_restriction_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { shield_information_barrier_segment_restriction_id: string } }
            output: ShieldInformationBarrierSegmentRestriction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_segment_restriction_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_restriction_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segments': {
      $get:
        | {
            input: {
              query: {
                shield_information_barrier_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: {
              entries?: ShieldInformationBarrierSegment[] | undefined
              limit?: bigint | undefined
              next_marker?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                shield_information_barrier_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                shield_information_barrier_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                name: string
                shield_information_barrier: ShieldInformationBarrierBase
              }
            }
            output: ShieldInformationBarrierSegment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                description?: string | undefined
                name: string
                shield_information_barrier: ShieldInformationBarrierBase
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                description?: string | undefined
                name: string
                shield_information_barrier: ShieldInformationBarrierBase
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                description?: string | undefined
                name: string
                shield_information_barrier: ShieldInformationBarrierBase
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id': {
      $delete:
        | {
            input: { param: { shield_information_barrier_segment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { shield_information_barrier_segment_id: string } }
            output: ShieldInformationBarrierSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { description?: (string | null) | undefined; name?: string | undefined }
            }
            output: ShieldInformationBarrierSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { description?: (string | null) | undefined; name?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { description?: (string | null) | undefined; name?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { description?: (string | null) | undefined; name?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barriers': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: {
              entries?: ShieldInformationBarrier[] | undefined
              limit?: bigint | undefined
              next_marker?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ShieldInformationBarrier }
            output: ShieldInformationBarrier
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ShieldInformationBarrier }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ShieldInformationBarrier }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barriers/change_status': {
      $post:
        | {
            input: { json: { id: string; status: 'pending' | 'disabled' } }
            output: ShieldInformationBarrier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; status: 'pending' | 'disabled' } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { id: string; status: 'pending' | 'disabled' } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { id: string; status: 'pending' | 'disabled' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barriers/:shield_information_barrier_id': {
      $get:
        | {
            input: { param: { shield_information_barrier_id: string } }
            output: ShieldInformationBarrier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sign_requests': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: SignRequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SignRequestCreateRequest }
            output: SignRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SignRequestCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sign_requests/:sign_request_id': {
      $get:
        | {
            input: { param: { sign_request_id: string } }
            output: SignRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sign_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sign_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sign_requests/:sign_request_id/cancel': {
      $post:
        | {
            input: { param: { sign_request_id: string } }
            output: SignRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sign_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sign_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sign_requests/:sign_request_id/resend': {
      $post:
        | {
            input: { param: { sign_request_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { sign_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sign_request_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/skill_invocations/:skill_id': {
      $put:
        | {
            input: { param: { skill_id: string } } & {
              json: {
                file: { id?: string | undefined; type?: 'file' | undefined }
                file_version?:
                  | { id?: string | undefined; type?: 'file_version' | undefined }
                  | undefined
                metadata: {
                  cards?:
                    | (
                        | SkillCard
                        | KeywordSkillCard
                        | TimelineSkillCard
                        | TranscriptSkillCard
                        | StatusSkillCard
                      )[]
                    | undefined
                }
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                usage?: { unit?: string | undefined; value?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & {
              json: {
                file: { id?: string | undefined; type?: 'file' | undefined }
                file_version?:
                  | { id?: string | undefined; type?: 'file_version' | undefined }
                  | undefined
                metadata: {
                  cards?:
                    | (
                        | SkillCard
                        | KeywordSkillCard
                        | TimelineSkillCard
                        | TranscriptSkillCard
                        | StatusSkillCard
                      )[]
                    | undefined
                }
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                usage?: { unit?: string | undefined; value?: number | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & {
              json: {
                file: { id?: string | undefined; type?: 'file' | undefined }
                file_version?:
                  | { id?: string | undefined; type?: 'file_version' | undefined }
                  | undefined
                metadata: {
                  cards?:
                    | (
                        | SkillCard
                        | KeywordSkillCard
                        | TimelineSkillCard
                        | TranscriptSkillCard
                        | StatusSkillCard
                      )[]
                    | undefined
                }
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                usage?: { unit?: string | undefined; value?: number | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & {
              json: {
                file: { id?: string | undefined; type?: 'file' | undefined }
                file_version?:
                  | { id?: string | undefined; type?: 'file_version' | undefined }
                  | undefined
                metadata: {
                  cards?:
                    | (
                        | SkillCard
                        | KeywordSkillCard
                        | TimelineSkillCard
                        | TranscriptSkillCard
                        | StatusSkillCard
                      )[]
                    | undefined
                }
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                usage?: { unit?: string | undefined; value?: number | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/storage_policies': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: StoragePolicies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/storage_policies/:storage_policy_id': {
      $get:
        | {
            input: { param: { storage_policy_id: string } }
            output: StoragePolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storage_policy_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/storage_policy_assignments': {
      $get:
        | {
            input: {
              query: {
                marker?: string | undefined
                resolved_for_type: 'user' | 'enterprise'
                resolved_for_id: string
              }
            }
            output: StoragePolicyAssignments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                resolved_for_type: 'user' | 'enterprise'
                resolved_for_id: string
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                assigned_to: { id: string; type: 'user' | 'enterprise' }
                storage_policy: { id: string; type: 'storage_policy' }
              }
            }
            output: StoragePolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                assigned_to: { id: string; type: 'user' | 'enterprise' }
                storage_policy: { id: string; type: 'storage_policy' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/storage_policy_assignments/:storage_policy_assignment_id': {
      $delete:
        | {
            input: { param: { storage_policy_assignment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { storage_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { storage_policy_assignment_id: string } }
            output: StoragePolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storage_policy_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { storage_policy_assignment_id: string } } & {
              json: { storage_policy: { id: string; type: 'storage_policy' } }
            }
            output: StoragePolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storage_policy_assignment_id: string } } & {
              json: { storage_policy: { id: string; type: 'storage_policy' } }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/task_assignments': {
      $post:
        | {
            input: {
              json: {
                assign_to: { id?: string | undefined; login?: string | undefined }
                task: { id: string; type: 'task' }
              }
            }
            output: TaskAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                assign_to: { id?: string | undefined; login?: string | undefined }
                task: { id: string; type: 'task' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                assign_to: { id?: string | undefined; login?: string | undefined }
                task: { id: string; type: 'task' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                assign_to: { id?: string | undefined; login?: string | undefined }
                task: { id: string; type: 'task' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                assign_to: { id?: string | undefined; login?: string | undefined }
                task: { id: string; type: 'task' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/task_assignments/:task_assignment_id': {
      $delete:
        | {
            input: { param: { task_assignment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { task_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { task_assignment_id: string } }
            output: TaskAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_assignment_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { task_assignment_id: string } } & {
              json: {
                message?: string | undefined
                resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected' | undefined
              }
            }
            output: TaskAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_assignment_id: string } } & {
              json: {
                message?: string | undefined
                resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_assignment_id: string } } & {
              json: {
                message?: string | undefined
                resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_assignment_id: string } } & {
              json: {
                message?: string | undefined
                resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks': {
      $post:
        | {
            input: {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                item: { id: string; type: 'file' }
                message?: string | undefined
              }
            }
            output: Task
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                item: { id: string; type: 'file' }
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                item: { id: string; type: 'file' }
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                item: { id: string; type: 'file' }
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                item: { id: string; type: 'file' }
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:task_id': {
      $delete:
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: { param: { task_id: string } }; output: Task; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { task_id: string } } & {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                message?: string | undefined
              }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_id: string } } & {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_id: string } } & {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_id: string } } & {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_id: string } } & {
              json: {
                action?: 'review' | 'complete' | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
                due_at?: string | undefined
                message?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:task_id/assignments': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: TaskAssignments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { task_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/terms_of_service_user_statuses': {
      $get:
        | {
            input: { query: { tos_id: string; user_id?: string | undefined } }
            output: TermsOfServiceUserStatuses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tos_id: string; user_id?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                is_accepted: boolean
                tos: { id: string; type: 'terms_of_service' }
                user: { id: string; type: 'user' }
              }
            }
            output: TermsOfServiceUserStatus
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                is_accepted: boolean
                tos: { id: string; type: 'terms_of_service' }
                user: { id: string; type: 'user' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/terms_of_service_user_statuses/:terms_of_service_user_status_id': {
      $put:
        | {
            input: { param: { terms_of_service_user_status_id: string } } & {
              json: { is_accepted: boolean }
            }
            output: TermsOfServiceUserStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terms_of_service_user_status_id: string } } & {
              json: { is_accepted: boolean }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/terms_of_services': {
      $get:
        | {
            input: { query: { tos_type?: 'external' | 'managed' | undefined } }
            output: TermsOfServices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tos_type?: 'external' | 'managed' | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                status: 'enabled' | 'disabled'
                text: string
                tos_type?: 'external' | 'managed' | undefined
              }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                status: 'enabled' | 'disabled'
                text: string
                tos_type?: 'external' | 'managed' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/terms_of_services/:terms_of_service_id': {
      $get:
        | {
            input: { param: { terms_of_service_id: string } }
            output: TermsOfService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terms_of_service_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { terms_of_service_id: string } } & {
              json: { status: 'enabled' | 'disabled'; text: string }
            }
            output: TermsOfService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terms_of_service_id: string } } & {
              json: { status: 'enabled' | 'disabled'; text: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                filter_term?: string | undefined
                user_type?: 'all' | 'managed' | 'external' | undefined
                external_app_user_id?: string | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
              }
            }
            output: Users
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter_term?: string | undefined
                user_type?: 'all' | 'managed' | 'external' | undefined
                external_app_user_id?: string | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
                usemarker?: boolean | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                address?: string | undefined
                can_see_managed_users?: boolean | undefined
                external_app_user_id?: string | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_external_collab_restricted?: boolean | undefined
                is_platform_access_only?: boolean | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                language?: string | undefined
                login?: string | undefined
                name: string
                phone?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                space_amount?: bigint | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                timezone?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                address?: string | undefined
                can_see_managed_users?: boolean | undefined
                external_app_user_id?: string | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_external_collab_restricted?: boolean | undefined
                is_platform_access_only?: boolean | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                language?: string | undefined
                login?: string | undefined
                name: string
                phone?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                space_amount?: bigint | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                timezone?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/me': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/terminate_sessions': {
      $post:
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: SessionTerminationMessage
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: { user_ids: string[]; user_logins: string[] } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id': {
      $delete:
        | {
            input: { param: { user_id: string } } & {
              query: { notify?: boolean | undefined; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: string } } & {
              query: { notify?: boolean | undefined; force?: boolean | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                address?: string | undefined
                can_see_managed_users?: boolean | undefined
                enterprise?: (string | null) | undefined
                external_app_user_id?: string | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_external_collab_restricted?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                language?: string | undefined
                login?: string | undefined
                name?: string | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                notify?: boolean | undefined
                phone?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                space_amount?: bigint | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                timezone?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                address?: string | undefined
                can_see_managed_users?: boolean | undefined
                enterprise?: (string | null) | undefined
                external_app_user_id?: string | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_external_collab_restricted?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                language?: string | undefined
                login?: string | undefined
                name?: string | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                notify?: boolean | undefined
                phone?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                space_amount?: bigint | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                timezone?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                address?: string | undefined
                can_see_managed_users?: boolean | undefined
                enterprise?: (string | null) | undefined
                external_app_user_id?: string | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_external_collab_restricted?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                language?: string | undefined
                login?: string | undefined
                name?: string | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                notify?: boolean | undefined
                phone?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                space_amount?: bigint | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                timezone?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                address?: string | undefined
                can_see_managed_users?: boolean | undefined
                enterprise?: (string | null) | undefined
                external_app_user_id?: string | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_external_collab_restricted?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                language?: string | undefined
                login?: string | undefined
                name?: string | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                notify?: boolean | undefined
                phone?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                space_amount?: bigint | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                timezone?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id/avatar': {
      $delete:
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { user_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: { param: { user_id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { user_id: string } } & { form: { pic: File } }
            output: UserAvatar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { form: { pic: File } }
            output: UserAvatar
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string } } & { form: { pic: File } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { form: { pic: File } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { form: { pic: File } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & { form: { pic: File } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id/email_aliases': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: EmailAliases
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { user_id: string } } & { json: { email: string } }
            output: EmailAlias
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string } } & { json: { email: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id/email_aliases/:email_alias_id': {
      $delete:
        | {
            input: { param: { user_id: string; email_alias_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: string; email_alias_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id/folders/0': {
      $put:
        | {
            input: { param: { user_id: string } } & {
              query: { fields?: string[] | undefined; notify?: boolean | undefined }
            } & { json: { owned_by: { id: string } } }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: { fields?: string[] | undefined; notify?: boolean | undefined }
            } & { json: { owned_by: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              query: { fields?: string[] | undefined; notify?: boolean | undefined }
            } & { json: { owned_by: { id: string } } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id/memberships': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: GroupMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links': {
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                name?: string | undefined
                parent: { id: string }
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                url: string
              }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                name?: string | undefined
                parent: { id: string }
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                url: string
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id': {
      $delete:
        | {
            input: { param: { web_link_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { web_link_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { web_link_id: string } } & { header: { boxapi?: string | undefined } }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & { header: { boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { web_link_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: TrashWebLinkRestored
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { web_link_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { web_link_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { web_link_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: { name?: string | undefined; parent?: { id?: string | undefined } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { web_link_id: string } } & {
              json: {
                description?: string | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                url?: string | undefined
              }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & {
              json: {
                description?: string | undefined
                name?: string | undefined
                parent?: { id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
                url?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id#add_shared_link': {
      $put:
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id#get_shared_link': {
      $get:
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id#remove_shared_link': {
      $put:
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id#update_shared_link': {
      $put:
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_edit?: boolean | undefined
                            can_preview?: boolean | undefined
                          }
                        | undefined
                      unshared_at?: string | undefined
                      vanity_name?: string | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id/trash': {
      $delete:
        | {
            input: { param: { web_link_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { web_link_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { web_link_id: string } } & { query: { fields?: string[] | undefined } }
            output: TrashWebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { web_link_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: Webhooks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                address: string
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                triggers: (
                  | 'FILE.UPLOADED'
                  | 'FILE.PREVIEWED'
                  | 'FILE.DOWNLOADED'
                  | 'FILE.TRASHED'
                  | 'FILE.DELETED'
                  | 'FILE.RESTORED'
                  | 'FILE.COPIED'
                  | 'FILE.MOVED'
                  | 'FILE.LOCKED'
                  | 'FILE.UNLOCKED'
                  | 'FILE.RENAMED'
                  | 'COMMENT.CREATED'
                  | 'COMMENT.UPDATED'
                  | 'COMMENT.DELETED'
                  | 'TASK_ASSIGNMENT.CREATED'
                  | 'TASK_ASSIGNMENT.UPDATED'
                  | 'METADATA_INSTANCE.CREATED'
                  | 'METADATA_INSTANCE.UPDATED'
                  | 'METADATA_INSTANCE.DELETED'
                  | 'FOLDER.CREATED'
                  | 'FOLDER.RENAMED'
                  | 'FOLDER.DOWNLOADED'
                  | 'FOLDER.RESTORED'
                  | 'FOLDER.DELETED'
                  | 'FOLDER.COPIED'
                  | 'FOLDER.MOVED'
                  | 'FOLDER.TRASHED'
                  | 'WEBHOOK.DELETED'
                  | 'COLLABORATION.CREATED'
                  | 'COLLABORATION.ACCEPTED'
                  | 'COLLABORATION.REJECTED'
                  | 'COLLABORATION.REMOVED'
                  | 'COLLABORATION.UPDATED'
                  | 'SHARED_LINK.DELETED'
                  | 'SHARED_LINK.CREATED'
                  | 'SHARED_LINK.UPDATED'
                  | 'SIGN_REQUEST.COMPLETED'
                  | 'SIGN_REQUEST.DECLINED'
                  | 'SIGN_REQUEST.EXPIRED'
                )[]
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                address: string
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                triggers: (
                  | 'FILE.UPLOADED'
                  | 'FILE.PREVIEWED'
                  | 'FILE.DOWNLOADED'
                  | 'FILE.TRASHED'
                  | 'FILE.DELETED'
                  | 'FILE.RESTORED'
                  | 'FILE.COPIED'
                  | 'FILE.MOVED'
                  | 'FILE.LOCKED'
                  | 'FILE.UNLOCKED'
                  | 'FILE.RENAMED'
                  | 'COMMENT.CREATED'
                  | 'COMMENT.UPDATED'
                  | 'COMMENT.DELETED'
                  | 'TASK_ASSIGNMENT.CREATED'
                  | 'TASK_ASSIGNMENT.UPDATED'
                  | 'METADATA_INSTANCE.CREATED'
                  | 'METADATA_INSTANCE.UPDATED'
                  | 'METADATA_INSTANCE.DELETED'
                  | 'FOLDER.CREATED'
                  | 'FOLDER.RENAMED'
                  | 'FOLDER.DOWNLOADED'
                  | 'FOLDER.RESTORED'
                  | 'FOLDER.DELETED'
                  | 'FOLDER.COPIED'
                  | 'FOLDER.MOVED'
                  | 'FOLDER.TRASHED'
                  | 'WEBHOOK.DELETED'
                  | 'COLLABORATION.CREATED'
                  | 'COLLABORATION.ACCEPTED'
                  | 'COLLABORATION.REJECTED'
                  | 'COLLABORATION.REMOVED'
                  | 'COLLABORATION.UPDATED'
                  | 'SHARED_LINK.DELETED'
                  | 'SHARED_LINK.CREATED'
                  | 'SHARED_LINK.UPDATED'
                  | 'SIGN_REQUEST.COMPLETED'
                  | 'SIGN_REQUEST.DECLINED'
                  | 'SIGN_REQUEST.EXPIRED'
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                address: string
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                triggers: (
                  | 'FILE.UPLOADED'
                  | 'FILE.PREVIEWED'
                  | 'FILE.DOWNLOADED'
                  | 'FILE.TRASHED'
                  | 'FILE.DELETED'
                  | 'FILE.RESTORED'
                  | 'FILE.COPIED'
                  | 'FILE.MOVED'
                  | 'FILE.LOCKED'
                  | 'FILE.UNLOCKED'
                  | 'FILE.RENAMED'
                  | 'COMMENT.CREATED'
                  | 'COMMENT.UPDATED'
                  | 'COMMENT.DELETED'
                  | 'TASK_ASSIGNMENT.CREATED'
                  | 'TASK_ASSIGNMENT.UPDATED'
                  | 'METADATA_INSTANCE.CREATED'
                  | 'METADATA_INSTANCE.UPDATED'
                  | 'METADATA_INSTANCE.DELETED'
                  | 'FOLDER.CREATED'
                  | 'FOLDER.RENAMED'
                  | 'FOLDER.DOWNLOADED'
                  | 'FOLDER.RESTORED'
                  | 'FOLDER.DELETED'
                  | 'FOLDER.COPIED'
                  | 'FOLDER.MOVED'
                  | 'FOLDER.TRASHED'
                  | 'WEBHOOK.DELETED'
                  | 'COLLABORATION.CREATED'
                  | 'COLLABORATION.ACCEPTED'
                  | 'COLLABORATION.REJECTED'
                  | 'COLLABORATION.REMOVED'
                  | 'COLLABORATION.UPDATED'
                  | 'SHARED_LINK.DELETED'
                  | 'SHARED_LINK.CREATED'
                  | 'SHARED_LINK.UPDATED'
                  | 'SIGN_REQUEST.COMPLETED'
                  | 'SIGN_REQUEST.DECLINED'
                  | 'SIGN_REQUEST.EXPIRED'
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                address: string
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                triggers: (
                  | 'FILE.UPLOADED'
                  | 'FILE.PREVIEWED'
                  | 'FILE.DOWNLOADED'
                  | 'FILE.TRASHED'
                  | 'FILE.DELETED'
                  | 'FILE.RESTORED'
                  | 'FILE.COPIED'
                  | 'FILE.MOVED'
                  | 'FILE.LOCKED'
                  | 'FILE.UNLOCKED'
                  | 'FILE.RENAMED'
                  | 'COMMENT.CREATED'
                  | 'COMMENT.UPDATED'
                  | 'COMMENT.DELETED'
                  | 'TASK_ASSIGNMENT.CREATED'
                  | 'TASK_ASSIGNMENT.UPDATED'
                  | 'METADATA_INSTANCE.CREATED'
                  | 'METADATA_INSTANCE.UPDATED'
                  | 'METADATA_INSTANCE.DELETED'
                  | 'FOLDER.CREATED'
                  | 'FOLDER.RENAMED'
                  | 'FOLDER.DOWNLOADED'
                  | 'FOLDER.RESTORED'
                  | 'FOLDER.DELETED'
                  | 'FOLDER.COPIED'
                  | 'FOLDER.MOVED'
                  | 'FOLDER.TRASHED'
                  | 'WEBHOOK.DELETED'
                  | 'COLLABORATION.CREATED'
                  | 'COLLABORATION.ACCEPTED'
                  | 'COLLABORATION.REJECTED'
                  | 'COLLABORATION.REMOVED'
                  | 'COLLABORATION.UPDATED'
                  | 'SHARED_LINK.DELETED'
                  | 'SHARED_LINK.CREATED'
                  | 'SHARED_LINK.UPDATED'
                  | 'SIGN_REQUEST.COMPLETED'
                  | 'SIGN_REQUEST.DECLINED'
                  | 'SIGN_REQUEST.EXPIRED'
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                address: string
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                triggers: (
                  | 'FILE.UPLOADED'
                  | 'FILE.PREVIEWED'
                  | 'FILE.DOWNLOADED'
                  | 'FILE.TRASHED'
                  | 'FILE.DELETED'
                  | 'FILE.RESTORED'
                  | 'FILE.COPIED'
                  | 'FILE.MOVED'
                  | 'FILE.LOCKED'
                  | 'FILE.UNLOCKED'
                  | 'FILE.RENAMED'
                  | 'COMMENT.CREATED'
                  | 'COMMENT.UPDATED'
                  | 'COMMENT.DELETED'
                  | 'TASK_ASSIGNMENT.CREATED'
                  | 'TASK_ASSIGNMENT.UPDATED'
                  | 'METADATA_INSTANCE.CREATED'
                  | 'METADATA_INSTANCE.UPDATED'
                  | 'METADATA_INSTANCE.DELETED'
                  | 'FOLDER.CREATED'
                  | 'FOLDER.RENAMED'
                  | 'FOLDER.DOWNLOADED'
                  | 'FOLDER.RESTORED'
                  | 'FOLDER.DELETED'
                  | 'FOLDER.COPIED'
                  | 'FOLDER.MOVED'
                  | 'FOLDER.TRASHED'
                  | 'WEBHOOK.DELETED'
                  | 'COLLABORATION.CREATED'
                  | 'COLLABORATION.ACCEPTED'
                  | 'COLLABORATION.REJECTED'
                  | 'COLLABORATION.REMOVED'
                  | 'COLLABORATION.UPDATED'
                  | 'SHARED_LINK.DELETED'
                  | 'SHARED_LINK.CREATED'
                  | 'SHARED_LINK.UPDATED'
                  | 'SIGN_REQUEST.COMPLETED'
                  | 'SIGN_REQUEST.DECLINED'
                  | 'SIGN_REQUEST.EXPIRED'
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                address: string
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                triggers: (
                  | 'FILE.UPLOADED'
                  | 'FILE.PREVIEWED'
                  | 'FILE.DOWNLOADED'
                  | 'FILE.TRASHED'
                  | 'FILE.DELETED'
                  | 'FILE.RESTORED'
                  | 'FILE.COPIED'
                  | 'FILE.MOVED'
                  | 'FILE.LOCKED'
                  | 'FILE.UNLOCKED'
                  | 'FILE.RENAMED'
                  | 'COMMENT.CREATED'
                  | 'COMMENT.UPDATED'
                  | 'COMMENT.DELETED'
                  | 'TASK_ASSIGNMENT.CREATED'
                  | 'TASK_ASSIGNMENT.UPDATED'
                  | 'METADATA_INSTANCE.CREATED'
                  | 'METADATA_INSTANCE.UPDATED'
                  | 'METADATA_INSTANCE.DELETED'
                  | 'FOLDER.CREATED'
                  | 'FOLDER.RENAMED'
                  | 'FOLDER.DOWNLOADED'
                  | 'FOLDER.RESTORED'
                  | 'FOLDER.DELETED'
                  | 'FOLDER.COPIED'
                  | 'FOLDER.MOVED'
                  | 'FOLDER.TRASHED'
                  | 'WEBHOOK.DELETED'
                  | 'COLLABORATION.CREATED'
                  | 'COLLABORATION.ACCEPTED'
                  | 'COLLABORATION.REJECTED'
                  | 'COLLABORATION.REMOVED'
                  | 'COLLABORATION.UPDATED'
                  | 'SHARED_LINK.DELETED'
                  | 'SHARED_LINK.CREATED'
                  | 'SHARED_LINK.UPDATED'
                  | 'SIGN_REQUEST.COMPLETED'
                  | 'SIGN_REQUEST.DECLINED'
                  | 'SIGN_REQUEST.EXPIRED'
                )[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhooks/:webhook_id': {
      $delete:
        | {
            input: { param: { webhook_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                address?: string | undefined
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                triggers?:
                  | (
                      | 'FILE.UPLOADED'
                      | 'FILE.PREVIEWED'
                      | 'FILE.DOWNLOADED'
                      | 'FILE.TRASHED'
                      | 'FILE.DELETED'
                      | 'FILE.RESTORED'
                      | 'FILE.COPIED'
                      | 'FILE.MOVED'
                      | 'FILE.LOCKED'
                      | 'FILE.UNLOCKED'
                      | 'FILE.RENAMED'
                      | 'COMMENT.CREATED'
                      | 'COMMENT.UPDATED'
                      | 'COMMENT.DELETED'
                      | 'TASK_ASSIGNMENT.CREATED'
                      | 'TASK_ASSIGNMENT.UPDATED'
                      | 'METADATA_INSTANCE.CREATED'
                      | 'METADATA_INSTANCE.UPDATED'
                      | 'METADATA_INSTANCE.DELETED'
                      | 'FOLDER.CREATED'
                      | 'FOLDER.RENAMED'
                      | 'FOLDER.DOWNLOADED'
                      | 'FOLDER.RESTORED'
                      | 'FOLDER.DELETED'
                      | 'FOLDER.COPIED'
                      | 'FOLDER.MOVED'
                      | 'FOLDER.TRASHED'
                      | 'WEBHOOK.DELETED'
                      | 'COLLABORATION.CREATED'
                      | 'COLLABORATION.ACCEPTED'
                      | 'COLLABORATION.REJECTED'
                      | 'COLLABORATION.REMOVED'
                      | 'COLLABORATION.UPDATED'
                      | 'SHARED_LINK.DELETED'
                      | 'SHARED_LINK.CREATED'
                      | 'SHARED_LINK.UPDATED'
                      | 'SIGN_REQUEST.COMPLETED'
                      | 'SIGN_REQUEST.DECLINED'
                      | 'SIGN_REQUEST.EXPIRED'
                    )[]
                  | undefined
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                address?: string | undefined
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                triggers?:
                  | (
                      | 'FILE.UPLOADED'
                      | 'FILE.PREVIEWED'
                      | 'FILE.DOWNLOADED'
                      | 'FILE.TRASHED'
                      | 'FILE.DELETED'
                      | 'FILE.RESTORED'
                      | 'FILE.COPIED'
                      | 'FILE.MOVED'
                      | 'FILE.LOCKED'
                      | 'FILE.UNLOCKED'
                      | 'FILE.RENAMED'
                      | 'COMMENT.CREATED'
                      | 'COMMENT.UPDATED'
                      | 'COMMENT.DELETED'
                      | 'TASK_ASSIGNMENT.CREATED'
                      | 'TASK_ASSIGNMENT.UPDATED'
                      | 'METADATA_INSTANCE.CREATED'
                      | 'METADATA_INSTANCE.UPDATED'
                      | 'METADATA_INSTANCE.DELETED'
                      | 'FOLDER.CREATED'
                      | 'FOLDER.RENAMED'
                      | 'FOLDER.DOWNLOADED'
                      | 'FOLDER.RESTORED'
                      | 'FOLDER.DELETED'
                      | 'FOLDER.COPIED'
                      | 'FOLDER.MOVED'
                      | 'FOLDER.TRASHED'
                      | 'WEBHOOK.DELETED'
                      | 'COLLABORATION.CREATED'
                      | 'COLLABORATION.ACCEPTED'
                      | 'COLLABORATION.REJECTED'
                      | 'COLLABORATION.REMOVED'
                      | 'COLLABORATION.UPDATED'
                      | 'SHARED_LINK.DELETED'
                      | 'SHARED_LINK.CREATED'
                      | 'SHARED_LINK.UPDATED'
                      | 'SIGN_REQUEST.COMPLETED'
                      | 'SIGN_REQUEST.DECLINED'
                      | 'SIGN_REQUEST.EXPIRED'
                    )[]
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                address?: string | undefined
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                triggers?:
                  | (
                      | 'FILE.UPLOADED'
                      | 'FILE.PREVIEWED'
                      | 'FILE.DOWNLOADED'
                      | 'FILE.TRASHED'
                      | 'FILE.DELETED'
                      | 'FILE.RESTORED'
                      | 'FILE.COPIED'
                      | 'FILE.MOVED'
                      | 'FILE.LOCKED'
                      | 'FILE.UNLOCKED'
                      | 'FILE.RENAMED'
                      | 'COMMENT.CREATED'
                      | 'COMMENT.UPDATED'
                      | 'COMMENT.DELETED'
                      | 'TASK_ASSIGNMENT.CREATED'
                      | 'TASK_ASSIGNMENT.UPDATED'
                      | 'METADATA_INSTANCE.CREATED'
                      | 'METADATA_INSTANCE.UPDATED'
                      | 'METADATA_INSTANCE.DELETED'
                      | 'FOLDER.CREATED'
                      | 'FOLDER.RENAMED'
                      | 'FOLDER.DOWNLOADED'
                      | 'FOLDER.RESTORED'
                      | 'FOLDER.DELETED'
                      | 'FOLDER.COPIED'
                      | 'FOLDER.MOVED'
                      | 'FOLDER.TRASHED'
                      | 'WEBHOOK.DELETED'
                      | 'COLLABORATION.CREATED'
                      | 'COLLABORATION.ACCEPTED'
                      | 'COLLABORATION.REJECTED'
                      | 'COLLABORATION.REMOVED'
                      | 'COLLABORATION.UPDATED'
                      | 'SHARED_LINK.DELETED'
                      | 'SHARED_LINK.CREATED'
                      | 'SHARED_LINK.UPDATED'
                      | 'SIGN_REQUEST.COMPLETED'
                      | 'SIGN_REQUEST.DECLINED'
                      | 'SIGN_REQUEST.EXPIRED'
                    )[]
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                address?: string | undefined
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                triggers?:
                  | (
                      | 'FILE.UPLOADED'
                      | 'FILE.PREVIEWED'
                      | 'FILE.DOWNLOADED'
                      | 'FILE.TRASHED'
                      | 'FILE.DELETED'
                      | 'FILE.RESTORED'
                      | 'FILE.COPIED'
                      | 'FILE.MOVED'
                      | 'FILE.LOCKED'
                      | 'FILE.UNLOCKED'
                      | 'FILE.RENAMED'
                      | 'COMMENT.CREATED'
                      | 'COMMENT.UPDATED'
                      | 'COMMENT.DELETED'
                      | 'TASK_ASSIGNMENT.CREATED'
                      | 'TASK_ASSIGNMENT.UPDATED'
                      | 'METADATA_INSTANCE.CREATED'
                      | 'METADATA_INSTANCE.UPDATED'
                      | 'METADATA_INSTANCE.DELETED'
                      | 'FOLDER.CREATED'
                      | 'FOLDER.RENAMED'
                      | 'FOLDER.DOWNLOADED'
                      | 'FOLDER.RESTORED'
                      | 'FOLDER.DELETED'
                      | 'FOLDER.COPIED'
                      | 'FOLDER.MOVED'
                      | 'FOLDER.TRASHED'
                      | 'WEBHOOK.DELETED'
                      | 'COLLABORATION.CREATED'
                      | 'COLLABORATION.ACCEPTED'
                      | 'COLLABORATION.REJECTED'
                      | 'COLLABORATION.REMOVED'
                      | 'COLLABORATION.UPDATED'
                      | 'SHARED_LINK.DELETED'
                      | 'SHARED_LINK.CREATED'
                      | 'SHARED_LINK.UPDATED'
                      | 'SIGN_REQUEST.COMPLETED'
                      | 'SIGN_REQUEST.DECLINED'
                      | 'SIGN_REQUEST.EXPIRED'
                    )[]
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                address?: string | undefined
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                triggers?:
                  | (
                      | 'FILE.UPLOADED'
                      | 'FILE.PREVIEWED'
                      | 'FILE.DOWNLOADED'
                      | 'FILE.TRASHED'
                      | 'FILE.DELETED'
                      | 'FILE.RESTORED'
                      | 'FILE.COPIED'
                      | 'FILE.MOVED'
                      | 'FILE.LOCKED'
                      | 'FILE.UNLOCKED'
                      | 'FILE.RENAMED'
                      | 'COMMENT.CREATED'
                      | 'COMMENT.UPDATED'
                      | 'COMMENT.DELETED'
                      | 'TASK_ASSIGNMENT.CREATED'
                      | 'TASK_ASSIGNMENT.UPDATED'
                      | 'METADATA_INSTANCE.CREATED'
                      | 'METADATA_INSTANCE.UPDATED'
                      | 'METADATA_INSTANCE.DELETED'
                      | 'FOLDER.CREATED'
                      | 'FOLDER.RENAMED'
                      | 'FOLDER.DOWNLOADED'
                      | 'FOLDER.RESTORED'
                      | 'FOLDER.DELETED'
                      | 'FOLDER.COPIED'
                      | 'FOLDER.MOVED'
                      | 'FOLDER.TRASHED'
                      | 'WEBHOOK.DELETED'
                      | 'COLLABORATION.CREATED'
                      | 'COLLABORATION.ACCEPTED'
                      | 'COLLABORATION.REJECTED'
                      | 'COLLABORATION.REMOVED'
                      | 'COLLABORATION.UPDATED'
                      | 'SHARED_LINK.DELETED'
                      | 'SHARED_LINK.CREATED'
                      | 'SHARED_LINK.UPDATED'
                      | 'SIGN_REQUEST.COMPLETED'
                      | 'SIGN_REQUEST.DECLINED'
                      | 'SIGN_REQUEST.EXPIRED'
                    )[]
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { webhook_id: string } } & {
              json: {
                address?: string | undefined
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                triggers?:
                  | (
                      | 'FILE.UPLOADED'
                      | 'FILE.PREVIEWED'
                      | 'FILE.DOWNLOADED'
                      | 'FILE.TRASHED'
                      | 'FILE.DELETED'
                      | 'FILE.RESTORED'
                      | 'FILE.COPIED'
                      | 'FILE.MOVED'
                      | 'FILE.LOCKED'
                      | 'FILE.UNLOCKED'
                      | 'FILE.RENAMED'
                      | 'COMMENT.CREATED'
                      | 'COMMENT.UPDATED'
                      | 'COMMENT.DELETED'
                      | 'TASK_ASSIGNMENT.CREATED'
                      | 'TASK_ASSIGNMENT.UPDATED'
                      | 'METADATA_INSTANCE.CREATED'
                      | 'METADATA_INSTANCE.UPDATED'
                      | 'METADATA_INSTANCE.DELETED'
                      | 'FOLDER.CREATED'
                      | 'FOLDER.RENAMED'
                      | 'FOLDER.DOWNLOADED'
                      | 'FOLDER.RESTORED'
                      | 'FOLDER.DELETED'
                      | 'FOLDER.COPIED'
                      | 'FOLDER.MOVED'
                      | 'FOLDER.TRASHED'
                      | 'WEBHOOK.DELETED'
                      | 'COLLABORATION.CREATED'
                      | 'COLLABORATION.ACCEPTED'
                      | 'COLLABORATION.REJECTED'
                      | 'COLLABORATION.REMOVED'
                      | 'COLLABORATION.UPDATED'
                      | 'SHARED_LINK.DELETED'
                      | 'SHARED_LINK.CREATED'
                      | 'SHARED_LINK.UPDATED'
                      | 'SIGN_REQUEST.COMPLETED'
                      | 'SIGN_REQUEST.DECLINED'
                      | 'SIGN_REQUEST.EXPIRED'
                    )[]
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflows': {
      $get:
        | {
            input: {
              query: {
                folder_id: string
                trigger_type?: string | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: Workflows
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                folder_id: string
                trigger_type?: string | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                folder_id: string
                trigger_type?: string | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                folder_id: string
                trigger_type?: string | undefined
                limit?: bigint | undefined
                marker?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/workflows/:workflow_id/start': {
      $post:
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                files: { id?: string | undefined; type?: 'file' | undefined }[]
                flow: { id?: string | undefined; type?: string | undefined }
                folder: { id?: string | undefined; type?: 'folder' | undefined }
                outcomes?:
                  | {
                      id?: string | undefined
                      parameter?: string | undefined
                      type?: 'outcome' | undefined
                    }[]
                  | undefined
                type?: 'workflow_parameters' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                files: { id?: string | undefined; type?: 'file' | undefined }[]
                flow: { id?: string | undefined; type?: string | undefined }
                folder: { id?: string | undefined; type?: 'folder' | undefined }
                outcomes?:
                  | {
                      id?: string | undefined
                      parameter?: string | undefined
                      type?: 'outcome' | undefined
                    }[]
                  | undefined
                type?: 'workflow_parameters' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                files: { id?: string | undefined; type?: 'file' | undefined }[]
                flow: { id?: string | undefined; type?: string | undefined }
                folder: { id?: string | undefined; type?: 'folder' | undefined }
                outcomes?:
                  | {
                      id?: string | undefined
                      parameter?: string | undefined
                      type?: 'outcome' | undefined
                    }[]
                  | undefined
                type?: 'workflow_parameters' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                files: { id?: string | undefined; type?: 'file' | undefined }[]
                flow: { id?: string | undefined; type?: string | undefined }
                folder: { id?: string | undefined; type?: 'folder' | undefined }
                outcomes?:
                  | {
                      id?: string | undefined
                      parameter?: string | undefined
                      type?: 'outcome' | undefined
                    }[]
                  | undefined
                type?: 'workflow_parameters' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                files: { id?: string | undefined; type?: 'file' | undefined }[]
                flow: { id?: string | undefined; type?: string | undefined }
                folder: { id?: string | undefined; type?: 'folder' | undefined }
                outcomes?:
                  | {
                      id?: string | undefined
                      parameter?: string | undefined
                      type?: 'outcome' | undefined
                    }[]
                  | undefined
                type?: 'workflow_parameters' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zip_downloads': {
      $post:
        | {
            input: { json: ZipDownloadRequest }
            output: ZipDownload
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ZipDownloadRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ZipDownloadRequest }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ZipDownloadRequest }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ZipDownloadRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zip_downloads/:zip_download_id/content': {
      $get:
        | {
            input: { param: { zip_download_id: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zip_downloads/:zip_download_id/status': {
      $get:
        | {
            input: { param: { zip_download_id: string } }
            output: ZipDownloadStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { zip_download_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
