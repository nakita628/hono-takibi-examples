type PostOAuth2Token = {
  grant_type:
    | 'authorization_code'
    | 'refresh_token'
    | 'client_credentials'
    | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    | 'urn:ietf:params:oauth:grant-type:token-exchange'
  client_id?: string | undefined
  client_secret?: string | undefined
  code?: string | undefined
  refresh_token?: string | undefined
  assertion?: string | undefined
  subject_token?: string | undefined
  subject_token_type?: 'urn:ietf:params:oauth:token-type:access_token' | undefined
  actor_token?: string | undefined
  actor_token_type?: 'urn:ietf:params:oauth:token-type:id_token' | undefined
  scope?: string | undefined
  resource?: string | undefined
  box_subject_type?: 'enterprise' | 'user' | undefined
  box_subject_id?: string | undefined
  box_shared_link?: string | undefined
}
type FolderMini = {
  id: string
  etag?: (string | null) | undefined
  type: 'folder'
  sequence_id?: {} | undefined
  name?: string | undefined
}
type FileMini = {
  id: string
  etag?: (string | null) | undefined
  type: 'file'
  sequence_id?: {} | undefined
  name?: string | undefined
  sha1?: string | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
}
type Resource = FolderMini | FileMini
type ResourceScope = {
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
    | 'item_upload'
    | 'item_read'
    | undefined
  object?: Resource | undefined
}
type AccessToken = {
  access_token?: string | undefined
  expires_in?: bigint | undefined
  token_type?: 'bearer' | undefined
  restricted_to?: ResourceScope[] | undefined
  refresh_token?: string | undefined
  issued_token_type?: 'urn:ietf:params:oauth:token-type:access_token' | undefined
}
type OAuth2Error = { error?: string | undefined; error_description?: string | undefined }
type PostOAuth2TokenRefreshAccessToken = {
  grant_type: 'refresh_token'
  client_id: string
  client_secret: string
  refresh_token: string
}
type PostOAuth2Revoke = {
  client_id?: string | undefined
  client_secret?: string | undefined
  token?: string | undefined
}
type SharedLinkOtpAllowlistEntry = {
  type: 'email' | 'domain'
  value: string
  created_at: string
  created_by: { id: string; type: 'user' }
}
type Collection = {
  id?: string | undefined
  type?: 'collection' | undefined
  name?: 'Favorites' | undefined
  collection_type?: 'favorites' | undefined
}
type FileFull = {
  id: string
  etag?: (string | null) | undefined
  type: 'file'
  sequence_id?: {} | undefined
  name?: string | undefined
  sha1?: string | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  description?: string | undefined
  size?: number | undefined
  path_collection?: { total_count: bigint; entries: FolderMini[] } | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  shared_link?:
    | {
        url: string
        download_url?: (string | null) | undefined
        vanity_url?: (string | null) | undefined
        vanity_name?: (string | null) | undefined
        access?: 'open' | 'company' | 'collaborators' | undefined
        effective_access: 'open' | 'company' | 'collaborators'
        effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access'
        unshared_at?: (string | null) | undefined
        is_password_enabled: boolean
        permissions?: { can_download: boolean; can_preview: boolean; can_edit: boolean } | undefined
        download_count: number
        preview_count: number
        one_time_passcode: { mode: string; allowlist?: SharedLinkOtpAllowlistEntry[] | undefined }
      }
    | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  version_number?: string | undefined
  comment_count?: number | undefined
  permissions?:
    | {
        can_delete: boolean
        can_download: boolean
        can_invite_collaborator: boolean
        can_rename: boolean
        can_set_share_access: boolean
        can_share: boolean
        can_annotate?: boolean | undefined
        can_comment?: boolean | undefined
        can_preview?: boolean | undefined
        can_upload?: boolean | undefined
        can_view_annotations_all?: boolean | undefined
        can_view_annotations_self?: boolean | undefined
        can_apply_watermark?: boolean | undefined
      }
    | undefined
  tags?: {} | undefined
  lock?:
    | {
        id?: string | undefined
        type?: 'lock' | undefined
        created_by?:
          | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
          | undefined
        created_at?: string | undefined
        expired_at?: string | undefined
        is_download_prevented?: boolean | undefined
        app_type?: 'gsuite' | 'office_wopi' | 'office_wopiplus' | 'other' | undefined
      }
    | undefined
  extension?: string | undefined
  is_package?: boolean | undefined
  expiring_embed_link?:
    | {
        access_token?: string | undefined
        expires_in?: bigint | undefined
        token_type?: 'bearer' | undefined
        restricted_to?: ResourceScope[] | undefined
        url?: string | undefined
      }
    | undefined
  watermark_info?:
    | {
        is_watermarked?: boolean | undefined
        is_watermark_inherited?: boolean | undefined
        is_watermarked_by_access_policy?: boolean | undefined
      }
    | undefined
  is_accessible_via_shared_link?: boolean | undefined
  allowed_invitee_roles?:
    | (
        | 'editor'
        | 'viewer'
        | 'previewer'
        | 'uploader'
        | 'previewer uploader'
        | 'viewer uploader'
        | 'co-owner'
      )[]
    | undefined
  is_externally_owned?: boolean | undefined
  has_collaborations?: boolean | undefined
  metadata?: {} | undefined
  expires_at?: (string | null) | undefined
  representations?:
    | {
        entries?:
          | {
              content?: { url_template?: string | undefined } | undefined
              info?: { url?: string | undefined } | undefined
              properties?:
                | {
                    dimensions?: string | undefined
                    paged?: string | undefined
                    thumb?: string | undefined
                  }
                | undefined
              representation?: string | undefined
              status?:
                | { state?: 'success' | 'viewable' | 'pending' | 'none' | undefined }
                | undefined
            }[]
          | undefined
      }
    | undefined
  classification?:
    | { name?: string | undefined; definition?: string | undefined; color?: string | undefined }
    | undefined
  uploader_display_name?: {} | undefined
  disposition_at?: (string | null) | undefined
  shared_link_permission_options?:
    | (('can_preview' | 'can_download' | 'can_edit')[] | null)
    | undefined
  is_associated_with_app_item?: boolean | undefined
  collections?: Collection[] | undefined
  is_download_available?: boolean | undefined
  download_url?: string | undefined
  authenticated_download_url?: string | undefined
  allowed_shared_link_access_levels?: ('open' | 'company' | 'collaborators')[] | undefined
}
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
    | 'unprocessable_entity'
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
type TrashFileRestored = {
  id: string
  etag?: (string | null) | undefined
  type: 'file'
  sequence_id: {}
  name?: string | undefined
  sha1: string
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  description: string
  size: number
  path_collection: { total_count: bigint; entries: FolderMini[] }
  created_at: string
  modified_at: string
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  owned_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  shared_link?: (string | null) | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  item_status: 'active' | 'trashed' | 'deleted'
}
type FileBase = { id: string; etag?: (string | null) | undefined; type: 'file' } | null
type FolderBase = { id: string; etag?: (string | null) | undefined; type: 'folder' }
type WebLinkBase = { id: string; type: 'web_link'; etag?: string | undefined }
type AppItemAssociatedItem = FileBase | FolderBase | WebLinkBase
type AppItemAssociation = {
  id: string
  type: 'app_item_association'
  app_item: { id: string; type: 'app_item'; application_type: string }
  item: AppItemAssociatedItem
}
type AppItemAssociations = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: AppItemAssociation[] | undefined
}
type Files = { total_count?: bigint | undefined; entries?: FileFull[] | undefined }
type UploadUrl = { upload_url?: string | undefined; upload_token?: string | undefined }
type FileVersionMini = { id: string; type: 'file_version'; sha1?: string | undefined }
type FileConflict = {
  id: string
  etag?: (string | null) | undefined
  type: 'file'
  sequence_id?: {} | undefined
  name?: string | undefined
  sha1?: string | undefined
  file_version?: FileVersionMini | undefined
}
type ConflictError = {
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
    | 'unprocessable_entity'
    | 'too_many_requests'
    | 'internal_server_error'
    | 'unavailable'
    | 'item_name_invalid'
    | 'insufficient_scope'
    | undefined
  message?: string | undefined
  context_info?: { conflicts?: FileConflict[] | undefined } | undefined
  help_url?: string | undefined
  request_id?: string | undefined
}
type UploadSession = {
  id?: string | undefined
  type?: 'upload_session' | undefined
  session_expires_at?: string | undefined
  part_size?: bigint | undefined
  total_parts?: number | undefined
  num_parts_processed?: number | undefined
  session_endpoints?:
    | {
        plan?: string | undefined
        upload_part?: string | undefined
        commit?: string | undefined
        abort?: string | undefined
        list_parts?: string | undefined
        status?: string | undefined
        log_event?: string | undefined
      }
    | undefined
}
type UploadPart = {
  part_id?: string | undefined
  offset?: bigint | undefined
  size?: bigint | undefined
  sha1?: string | undefined
  sha512?: string | undefined
}
type UploadedPart = { part?: UploadPart | undefined }
type UploadParts = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: UploadPart[] | undefined
}
type UploadPartPlan = { offset: bigint; size: bigint; sha512: string }
type UploadSessionPlanRequest = { parts: UploadPartPlan[] }
type UploadPartPlanHit = { offset: bigint; size: bigint; sha512: string; part_id: string }
type UploadSessionPlanResponse = {
  upload_session_id: string
  hits: UploadPartPlanHit[]
  misses: UploadPartPlan[]
}
type UserCollaborations = {
  id: string
  type: 'user'
  name?: string | undefined
  login?: string | undefined
  is_active?: boolean | undefined
}
type GroupMini = {
  id: string
  type: 'group'
  name?: string | undefined
  group_type?: 'managed_group' | 'all_users_group' | undefined
}
type CollaborationAccessGrantee = UserCollaborations | GroupMini
type Collaboration = {
  id: string
  type: 'collaboration'
  item?: {} | undefined
  app_item?: { id: string; type: 'app_item'; application_type: string } | undefined
  accessible_by?: CollaborationAccessGrantee | undefined
  invite_email?: (string | null) | undefined
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
  expires_at?: (string | null) | undefined
  is_access_only?: boolean | undefined
  status?: 'accepted' | 'pending' | 'rejected' | undefined
  acknowledged_at?: string | undefined
  created_by?:
    | {
        id: string
        type: 'user'
        name?: string | undefined
        login?: string | undefined
        is_active?: boolean | undefined
      }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
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
type Collaborations = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: Collaboration[] | undefined
}
type CommentFull = {
  id?: string | undefined
  type?: 'comment' | undefined
  is_reply_comment?: boolean | undefined
  message?: string | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  item?: { id?: string | undefined; type?: string | undefined } | undefined
  tagged_message?: string | undefined
}
type Comments = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: CommentFull[] | undefined
}
type TaskAssignment = {
  id?: string | undefined
  type?: 'task_assignment' | undefined
  item?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'file'
        sequence_id?: {} | undefined
        name?: string | undefined
        sha1?: string | undefined
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
      }
    | undefined
  assigned_to?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  message?: string | undefined
  completed_at?: string | undefined
  assigned_at?: string | undefined
  reminded_at?: string | undefined
  resolution_state?: 'completed' | 'incomplete' | 'approved' | 'rejected' | undefined
  assigned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
}
type Task = {
  id?: string | undefined
  type?: 'task' | undefined
  item?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'file'
        sequence_id?: {} | undefined
        name?: string | undefined
        sha1?: string | undefined
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
      }
    | undefined
  due_at?: string | undefined
  action?: 'review' | 'complete' | undefined
  message?: string | undefined
  task_assignment_collection?:
    | { total_count?: bigint | undefined; entries?: TaskAssignment[] | undefined }
    | undefined
  is_completed?: boolean | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at?: string | undefined
  completion_rule?: 'all_assignees' | 'any_assignee' | undefined
}
type Tasks = { total_count?: bigint | undefined; entries?: Task[] | undefined }
type TrashFile = {
  id: string
  etag?: (string | null) | undefined
  type: 'file'
  sequence_id: {}
  name?: string | undefined
  sha1: string
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  description: string
  size: number
  path_collection: {
    total_count: bigint
    entries: {
      type?: 'folder' | undefined
      id?: string | undefined
      sequence_id?: (string | null) | undefined
      etag?: (string | null) | undefined
      name?: string | undefined
    }[]
  }
  created_at: string
  modified_at: string
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  owned_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  shared_link?: (string | null) | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  item_status: 'active' | 'trashed' | 'deleted'
}
type FileVersionFull = {
  id: string
  type: 'file_version'
  sha1?: string | undefined
  name?: string | undefined
  size?: bigint | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  trashed_at?: (string | null) | undefined
  trashed_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  restored_at?: (string | null) | undefined
  restored_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  purged_at?: (string | null) | undefined
  uploader_display_name?: {} | undefined
  version_number?: string | undefined
}
type FileVersions = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: FileVersionFull[] | undefined
}
type Metadata = {
  $parent?: string | undefined
  $template?: string | undefined
  $scope?: string | undefined
  $version?: number | undefined
}
type Metadatas = { entries?: Metadata[] | undefined; limit?: number | undefined }
type Classification = {
  Box__Security__Classification__Key?: string | undefined
  $parent?: string | undefined
  $template?: 'securityClassification-6VMVochwUWo' | undefined
  $scope?: string | undefined
  $version?: number | undefined
  $type?: string | undefined
  $typeVersion?: number | undefined
  $canEdit?: boolean | undefined
}
type MetadataFull = {
  $parent?: string | undefined
  $template?: string | undefined
  $scope?: string | undefined
  $version?: number | undefined
  $canEdit?: boolean | undefined
  $id?: string | undefined
  $type?: string | undefined
  $typeVersion?: number | undefined
}
type MetadataError = {
  code?: string | undefined
  message?: string | undefined
  request_id?: string | undefined
}
type MetadataInstanceValue = string | number | number | string[]
type KeywordSkillCard = {
  created_at?: string | undefined
  type: 'skill_card'
  skill_card_type: 'keyword'
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill: { type: 'service'; id: string }
  invocation: { type: 'skill_invocation'; id: string }
  entries: { text?: string | undefined }[]
}
type TimelineSkillCard = {
  created_at?: string | undefined
  type: 'skill_card'
  skill_card_type: 'timeline'
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill: { type: 'service'; id: string }
  invocation: { type: 'skill_invocation'; id: string }
  duration?: number | undefined
  entries: {
    text?: string | undefined
    appears?: { start?: number | undefined; end?: number | undefined }[] | undefined
    image_url?: string | undefined
  }[]
}
type TranscriptSkillCard = {
  created_at?: string | undefined
  type: 'skill_card'
  skill_card_type: 'transcript'
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  skill: { type: 'service'; id: string }
  invocation: { type: 'skill_invocation'; id: string }
  duration?: number | undefined
  entries: { text?: string | undefined; appears?: { start?: number | undefined }[] | undefined }[]
}
type StatusSkillCard = {
  created_at?: string | undefined
  type: 'skill_card'
  skill_card_type: 'status'
  skill_card_title?: { code?: string | undefined; message: string } | undefined
  status: {
    code: 'invoked' | 'processing' | 'success' | 'transient_failure' | 'permanent_failure'
    message?: string | undefined
  }
  skill: { type: 'service'; id: string }
  invocation: { type: 'skill_invocation'; id: string }
}
type SkillCard = KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard
type SkillCardsMetadata = {
  $canEdit?: boolean | undefined
  $id?: string | undefined
  $parent?: string | undefined
  $scope?: string | undefined
  $template?: string | undefined
  $type?: string | undefined
  $typeVersion?: number | undefined
  $version?: number | undefined
  cards?: SkillCard[] | undefined
}
type Watermark = {
  watermark?: { created_at?: string | undefined; modified_at?: string | undefined } | undefined
}
type FileRequest = {
  id: string
  type: 'file_request'
  title?: string | undefined
  description?: (string | null) | undefined
  status?: 'active' | 'inactive' | undefined
  is_email_required?: boolean | undefined
  is_description_required?: boolean | undefined
  expires_at?: string | undefined
  folder: {
    id: string
    etag?: (string | null) | undefined
    type: 'folder'
    sequence_id?: {} | undefined
    name?: string | undefined
  }
  url?: string | undefined
  etag?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at: string
  updated_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  updated_at: string
}
type FileRequestUpdateRequest = {
  title?: string | undefined
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
  is_email_required?: boolean | undefined
  is_description_required?: boolean | undefined
  expires_at?: string | undefined
}
type FileRequestCopyRequest = {
  title?: string | undefined
  description?: string | undefined
  status?: 'active' | 'inactive' | undefined
  is_email_required?: boolean | undefined
  is_description_required?: boolean | undefined
  expires_at?: string | undefined
  folder?: { type?: 'folder' | undefined; id: string } | undefined
}
type WebLink = {
  id: string
  type: 'web_link'
  etag?: string | undefined
  url?: string | undefined
  sequence_id?: {} | undefined
  name?: string | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  path_collection?: { total_count: bigint; entries: FolderMini[] } | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  shared_link?:
    | {
        url: string
        download_url?: (string | null) | undefined
        vanity_url?: (string | null) | undefined
        vanity_name?: (string | null) | undefined
        access?: 'open' | 'company' | 'collaborators' | undefined
        effective_access: 'open' | 'company' | 'collaborators'
        effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access'
        unshared_at?: (string | null) | undefined
        is_password_enabled: boolean
        permissions?: { can_download: boolean; can_preview: boolean; can_edit: boolean } | undefined
        download_count: number
        preview_count: number
        one_time_passcode: { mode: string; allowlist?: SharedLinkOtpAllowlistEntry[] | undefined }
      }
    | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  collections?: Collection[] | undefined
  allowed_shared_link_access_levels?: ('open' | 'company' | 'collaborators')[] | undefined
}
type Item = FileFull | FolderMini | WebLink
type FolderFull = {
  id: string
  etag?: (string | null) | undefined
  type: 'folder'
  sequence_id?: {} | undefined
  name?: string | undefined
  created_at?: (string | null) | undefined
  modified_at?: (string | null) | undefined
  description?: {} | undefined
  size?: bigint | undefined
  path_collection?: { total_count: bigint; entries: FolderMini[] } | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  shared_link?:
    | {
        url: string
        download_url?: (string | null) | undefined
        vanity_url?: (string | null) | undefined
        vanity_name?: (string | null) | undefined
        access?: 'open' | 'company' | 'collaborators' | undefined
        effective_access: 'open' | 'company' | 'collaborators'
        effective_permission: 'can_edit' | 'can_download' | 'can_preview' | 'no_access'
        unshared_at?: (string | null) | undefined
        is_password_enabled: boolean
        permissions?: { can_download: boolean; can_preview: boolean; can_edit: boolean } | undefined
        download_count: number
        preview_count: number
        one_time_passcode: { mode: string; allowlist?: SharedLinkOtpAllowlistEntry[] | undefined }
      }
    | undefined
  folder_upload_email?:
    | ({ access?: 'open' | 'collaborators' | undefined; email?: string | undefined } | null)
    | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
  item_collection?:
    | {
        limit?: bigint | undefined
        next_marker?: (string | null) | undefined
        prev_marker?: (string | null) | undefined
        total_count?: bigint | undefined
        offset?: bigint | undefined
        order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
        entries?: Item[] | undefined
      }
    | undefined
  sync_state?: {} | undefined
  has_collaborations?: boolean | undefined
  permissions?:
    | {
        can_delete: boolean
        can_download: boolean
        can_invite_collaborator: boolean
        can_rename: boolean
        can_set_share_access: boolean
        can_share: boolean
        can_upload?: boolean | undefined
        can_apply_watermark?: boolean | undefined
      }
    | undefined
  tags?: {} | undefined
  can_non_owners_invite?: {} | undefined
  is_externally_owned?: boolean | undefined
  metadata?: {} | undefined
  is_collaboration_restricted_to_enterprise?: {} | undefined
  allowed_shared_link_access_levels?: ('open' | 'company' | 'collaborators')[] | undefined
  allowed_invitee_roles?:
    | (
        | 'editor'
        | 'viewer'
        | 'previewer'
        | 'uploader'
        | 'previewer uploader'
        | 'viewer uploader'
        | 'co-owner'
      )[]
    | undefined
  watermark_info?:
    | {
        is_watermarked?: boolean | undefined
        is_watermark_inherited?: boolean | undefined
        is_watermarked_by_access_policy?: boolean | undefined
      }
    | undefined
  is_accessible_via_shared_link?: boolean | undefined
  can_non_owners_view_collaborators?: boolean | undefined
  classification?:
    | { name?: string | undefined; definition?: string | undefined; color?: string | undefined }
    | undefined
  is_associated_with_app_item?: boolean | undefined
  collections?: Collection[] | undefined
}
type TrashFolderRestored = {
  id?: string | undefined
  etag?: (string | null) | undefined
  type?: 'folder' | undefined
  sequence_id?: {} | undefined
  name?: string | undefined
  created_at?: (string | null) | undefined
  modified_at?: (string | null) | undefined
  description?: {} | undefined
  size?: bigint | undefined
  path_collection?: { total_count: bigint; entries: FolderMini[] } | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  shared_link?: (string | null) | undefined
  folder_upload_email?: (string | null) | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
}
type Items = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  total_count?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: Item[] | undefined
}
type TrashFolder = {
  id: string
  etag?: (string | null) | undefined
  type: 'folder'
  sequence_id?: {} | undefined
  name: string
  created_at?: (string | null) | undefined
  modified_at?: (string | null) | undefined
  description: {}
  size: bigint
  path_collection: {
    total_count: bigint
    entries: {
      type?: 'folder' | undefined
      id?: string | undefined
      sequence_id?: (string | null) | undefined
      etag?: (string | null) | undefined
      name?: string | undefined
    }[]
  }
  created_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  modified_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  content_created_at?: (string | null) | undefined
  content_modified_at?: (string | null) | undefined
  owned_by: { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
  shared_link?: (string | null) | undefined
  folder_upload_email?: (string | null) | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  item_status: 'active' | 'trashed' | 'deleted'
}
type FolderLock = {
  folder?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  id?: string | undefined
  type?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  created_at?: string | undefined
  locked_operations?: { move: boolean; delete: boolean } | undefined
  lock_type?: string | undefined
}
type FolderLocks = {
  entries?: FolderLock[] | undefined
  limit?: string | undefined
  next_marker?: (string | null) | undefined
}
type MetadataTemplate = {
  id: string
  type: 'metadata_template'
  scope?: string | undefined
  templateKey?: string | undefined
  displayName?: string | undefined
  hidden?: boolean | undefined
  fields?:
    | {
        type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'taxonomy' | 'integer'
        key: string
        displayName: string
        description?: string | undefined
        hidden?: boolean | undefined
        options?: { key: string; id?: string | undefined }[] | undefined
        taxonomyKey?: string | undefined
        taxonomyId?: string | undefined
        namespace?: string | undefined
        optionsRules?:
          | { multiSelect?: boolean | undefined; selectableLevels?: number[] | undefined }
          | undefined
        id?: string | undefined
      }[]
    | undefined
  copyInstanceOnItemCopy?: boolean | undefined
}
type MetadataTemplates = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: MetadataTemplate[] | undefined
}
type ClassificationTemplate = {
  id: string
  type: 'metadata_template'
  scope: string
  templateKey: 'securityClassification-6VMVochwUWo'
  displayName: 'Classification'
  hidden?: boolean | undefined
  copyInstanceOnItemCopy?: boolean | undefined
  fields: {
    id: string
    type: 'enum'
    key: 'Box__Security__Classification__Key'
    displayName: 'Classification'
    hidden?: boolean | undefined
    options: {
      id: string
      key: string
      staticConfig?:
        | {
            classification?:
              | { classificationDefinition?: string | undefined; colorID?: bigint | undefined }
              | undefined
          }
        | undefined
    }[]
  }[]
}
type MetadataCascadePolicy = {
  id: string
  type: 'metadata_cascade_policy'
  owner_enterprise?: { type?: 'enterprise' | undefined; id?: string | undefined } | undefined
  parent?: { type?: 'folder' | undefined; id?: string | undefined } | undefined
  scope?: string | undefined
  templateKey?: string | undefined
}
type MetadataCascadePolicies = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: MetadataCascadePolicy[] | undefined
}
type MetadataQuery = {
  from: string
  query?: string | undefined
  query_params?: { [x: string]: {} } | undefined
  ancestor_folder_id: string
  order_by?:
    | { field_key?: string | undefined; direction?: 'ASC' | 'DESC' | 'asc' | 'desc' | undefined }[]
    | undefined
  limit?: number | undefined
  marker?: string | undefined
  fields?: string[] | undefined
}
type MetadataQueryResultItem = FileFull | FolderFull
type MetadataQueryResults = {
  entries?: MetadataQueryResultItem[] | undefined
  limit?: bigint | undefined
  next_marker?: string | undefined
}
type CollaborationsOffsetPaginated = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  entries?: Collaboration[] | undefined
}
type MetadataFilter = {
  scope?: 'global' | 'enterprise' | 'enterprise_{enterprise_id}' | undefined
  templateKey?: string | undefined
  filters?: { [x: string]: {} } | undefined
}
type SearchResultItem = FileFull | FolderFull | WebLink
type SearchResults = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  type?: 'search_results_items' | undefined
  entries?: SearchResultItem[] | undefined
}
type SearchResultWithSharedLink = {
  accessible_via_shared_link?: string | undefined
  item?: {} | undefined
  type?: string | undefined
}
type SearchResultsWithSharedLinks = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  type?: 'search_results_with_shared_links' | undefined
  entries?: SearchResultWithSharedLink[] | undefined
}
type SearchResultsResponse = SearchResults | SearchResultsWithSharedLinks
type TaskAssignments = { total_count?: bigint | undefined; entries?: TaskAssignment[] | undefined }
type TrashWebLinkRestored = {
  type?: 'web_link' | undefined
  id?: string | undefined
  sequence_id: {}
  etag?: string | undefined
  name?: string | undefined
  url?: string | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  path_collection: { total_count: bigint; entries: FolderMini[] }
  created_at?: string | undefined
  modified_at?: string | undefined
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  shared_link?: (string | null) | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
}
type TrashWebLink = {
  type?: 'web_link' | undefined
  id?: string | undefined
  sequence_id?: {} | undefined
  etag?: string | undefined
  name?: string | undefined
  url?: string | undefined
  parent?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  description?: string | undefined
  path_collection?:
    | {
        total_count: bigint
        entries: {
          type?: 'folder' | undefined
          id?: string | undefined
          sequence_id?: (string | null) | undefined
          etag?: (string | null) | undefined
          name?: string | undefined
        }[]
      }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  trashed_at?: (string | null) | undefined
  purged_at?: (string | null) | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  shared_link?: (string | null) | undefined
  item_status?: 'active' | 'trashed' | 'deleted' | undefined
}
type AppItem = { id: string; type: 'app_item'; application_type: string }
type TrackingCode = {
  type?: 'tracking_code' | undefined
  name?: string | undefined
  value?: string | undefined
}
type UserFull = {
  id: string
  type: 'user'
  name?: string | undefined
  login?: string | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  language?: string | undefined
  timezone?: string | undefined
  space_amount?: bigint | undefined
  space_used?: bigint | undefined
  max_upload_size?: bigint | undefined
  status?: 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload' | undefined
  job_title?: string | undefined
  phone?: string | undefined
  address?: string | undefined
  avatar_url?: string | undefined
  notification_email?:
    | ({ email?: string | undefined; is_confirmed?: boolean | undefined } | null)
    | undefined
  role?: 'admin' | 'coadmin' | 'user' | undefined
  tracking_codes?: TrackingCode[] | undefined
  can_see_managed_users?: boolean | undefined
  is_sync_enabled?: boolean | undefined
  is_external_collab_restricted?: boolean | undefined
  is_exempt_from_device_limits?: boolean | undefined
  is_exempt_from_login_verification?: boolean | undefined
  is_collaborated_content_available_when_owner_inactive?: boolean | undefined
  enterprise?:
    | { id?: string | undefined; type?: 'enterprise' | undefined; name?: string | undefined }
    | undefined
  my_tags?: string[] | undefined
  hostname?: string | undefined
  is_platform_access_only?: boolean | undefined
  external_app_user_id?: string | undefined
}
type Users = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  total_count?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: UserFull[] | undefined
}
type SessionTerminationMessage = { message?: string | undefined }
type UserAvatar = {
  pic_urls?:
    | { small?: string | undefined; large?: string | undefined; preview?: string | undefined }
    | undefined
}
type EmailAlias = {
  id?: string | undefined
  type?: 'email_alias' | undefined
  email?: string | undefined
  is_confirmed?: boolean | undefined
}
type EmailAliases = { total_count?: bigint | undefined; entries?: EmailAlias[] | undefined }
type GroupMembership = {
  id?: string | undefined
  type?: 'group_membership' | undefined
  user?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  group?:
    | {
        id: string
        type: 'group'
        name?: string | undefined
        group_type?: 'managed_group' | 'all_users_group' | undefined
      }
    | undefined
  role?: 'member' | 'admin' | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type GroupMemberships = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: GroupMembership[] | undefined
}
type UserMini = { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
type Invite = {
  id: string
  type: 'invite'
  invited_to?:
    | { id?: string | undefined; type?: 'enterprise' | undefined; name?: string | undefined }
    | undefined
  actionable_by?: UserMini | undefined
  invited_by?: UserMini | undefined
  status?: string | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  auto_roll_in_at?: (string | null) | undefined
  is_auto_roll_in?: boolean | undefined
}
type GroupFull = {
  id: string
  type: 'group'
  name?: string | undefined
  group_type?: 'managed_group' | 'all_users_group' | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  provenance?: string | undefined
  external_sync_identifier?: string | undefined
  description?: string | undefined
  invitability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users' | undefined
  member_viewability_level?: 'admins_only' | 'admins_and_members' | 'all_managed_users' | undefined
  permissions?: { can_invite_as_collaborator?: boolean | undefined } | undefined
}
type Groups = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: GroupFull[] | undefined
}
type WebhookMini = {
  id?: string | undefined
  type?: 'webhook' | undefined
  target?: { id?: string | undefined; type?: 'file' | 'folder' | undefined } | undefined
}
type Webhooks = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: WebhookMini[] | undefined
}
type Webhook = {
  id?: string | undefined
  type?: 'webhook' | undefined
  target?: { id?: string | undefined; type?: 'file' | 'folder' | undefined } | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at?: string | undefined
  address?: string | undefined
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
        | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
        | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
        | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
        | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
      )[]
    | undefined
}
type RealtimeServer = {
  type?: string | undefined
  url?: string | undefined
  ttl?: string | undefined
  max_retries?: string | undefined
  retry_timeout?: number | undefined
}
type RealtimeServers = { chunk_size?: bigint | undefined; entries?: RealtimeServer[] | undefined }
type Event = {
  type?: string | undefined
  created_at?: string | undefined
  recorded_at?: string | undefined
  event_id?: string | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  event_type?: {} | undefined
  session_id?: string | undefined
  source?: {} | undefined
  additional_details?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Events = {
  chunk_size?: bigint | undefined
  next_stream_position?: string | bigint | undefined
  entries?: Event[] | undefined
}
type Collections = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: Collection[] | undefined
}
type ItemsOffsetPaginated = {
  total_count?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  order?: { by?: string | undefined; direction?: 'ASC' | 'DESC' | undefined }[] | undefined
  entries?: Item[] | undefined
}
type RecentItem = {
  type?: string | undefined
  item?: {} | undefined
  interaction_type?:
    | 'item_preview'
    | 'item_upload'
    | 'item_comment'
    | 'item_open'
    | 'item_modify'
    | undefined
  interacted_at?: string | undefined
  interaction_shared_link?: string | undefined
}
type RecentItems = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: RecentItem[] | undefined
}
type RetentionPolicyMaxExtensionLengthResponse = 'none' | string
type RetentionPolicy = {
  id: string
  type: 'retention_policy'
  policy_name?: string | undefined
  retention_length?: string | undefined
  disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
  max_extension_length?: RetentionPolicyMaxExtensionLengthResponse | undefined
  description?: string | undefined
  policy_type?: 'finite' | 'indefinite' | undefined
  retention_type?: 'modifiable' | 'non_modifiable' | undefined
  status?: 'active' | 'retired' | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  can_owner_extend_retention?: boolean | undefined
  are_owners_notified?: boolean | undefined
  custom_notification_recipients?: UserMini[] | undefined
  assignment_counts?:
    | {
        enterprise?: bigint | undefined
        folder?: bigint | undefined
        metadata_template?: bigint | undefined
      }
    | undefined
}
type RetentionPolicies = {
  entries?: RetentionPolicy[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type RetentionPolicyMaxExtensionLengthRequest = 'none' | string | number
type UserBase = { id: string; type: 'user' }
type RetentionPolicyAssignment = {
  id: string
  type: 'retention_policy_assignment'
  retention_policy?:
    | {
        id: string
        type: 'retention_policy'
        policy_name?: string | undefined
        retention_length?: string | undefined
        disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
        max_extension_length?: RetentionPolicyMaxExtensionLengthResponse | undefined
      }
    | undefined
  assigned_to?:
    | {
        id?: (string | null) | undefined
        type?: 'folder' | 'enterprise' | 'metadata_template' | undefined
      }
    | undefined
  filter_fields?:
    | (
        | ({ field?: (string | null) | undefined; value?: (string | null) | undefined } | null)[]
        | null
      )
    | undefined
  assigned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  assigned_at?: string | undefined
  start_date_field?: string | undefined
}
type RetentionPolicyAssignments = {
  entries?: RetentionPolicyAssignment[] | undefined
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
}
type FilesUnderRetention = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: FileMini[] | undefined
}
type LegalHoldPolicy = {
  id: string
  type: 'legal_hold_policy'
  policy_name?: string | undefined
  description?: string | undefined
  status?: 'active' | 'applying' | 'releasing' | 'released' | undefined
  assignment_counts?:
    | {
        user?: bigint | undefined
        folder?: bigint | undefined
        file?: bigint | undefined
        file_version?: bigint | undefined
        ownership?: bigint | undefined
        interactions?: bigint | undefined
        metadata_template?: bigint | undefined
      }
    | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  deleted_at?: string | undefined
  filter_started_at?: string | undefined
  filter_ended_at?: string | undefined
  release_notes?: string | undefined
}
type LegalHoldPolicies = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: LegalHoldPolicy[] | undefined
}
type LegalHoldPolicyAssignmentFilterField = { field: string; value: string }
type LegalHoldPolicyAssignment = {
  id?: string | undefined
  type?: 'legal_hold_policy_assignment' | undefined
  legal_hold_policy?: { id: string; type: 'legal_hold_policy' } | undefined
  assigned_to?:
    | {
        type:
          | 'file'
          | 'file_version'
          | 'folder'
          | 'user'
          | 'ownership'
          | 'interactions'
          | 'metadata_template'
        id: string
      }
    | undefined
  assigned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  assigned_at?: string | undefined
  deleted_at?: string | undefined
  filter_fields?: LegalHoldPolicyAssignmentFilterField[] | undefined
}
type LegalHoldPolicyAssignments = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: LegalHoldPolicyAssignment[] | undefined
}
type FilesOnHold = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: FileMini[] | undefined
}
type FileVersionRetention = {
  id?: string | undefined
  type?: 'file_version_retention' | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  file?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'file'
        sequence_id?: {} | undefined
        name?: string | undefined
        sha1?: string | undefined
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
      }
    | undefined
  applied_at?: string | undefined
  disposition_at?: string | undefined
  winning_retention_policy?:
    | {
        id: string
        type: 'retention_policy'
        policy_name?: string | undefined
        retention_length?: string | undefined
        disposition_action?: 'permanently_delete' | 'remove_retention' | undefined
        max_extension_length?: RetentionPolicyMaxExtensionLengthResponse | undefined
      }
    | undefined
}
type FileVersionRetentions = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: FileVersionRetention[] | undefined
}
type FileVersion = {
  id: string
  type: 'file_version'
  sha1?: string | undefined
  name?: string | undefined
  size?: bigint | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  trashed_at?: (string | null) | undefined
  trashed_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  restored_at?: (string | null) | undefined
  restored_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  purged_at?: (string | null) | undefined
  uploader_display_name?: {} | undefined
}
type FileVersionsOnHold = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: FileVersion[] | undefined
}
type FileVersionLegalHold = {
  id?: string | undefined
  type?: 'file_version_legal_hold' | undefined
  file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
  file?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'file'
        sequence_id?: {} | undefined
        name?: string | undefined
        sha1?: string | undefined
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
      }
    | undefined
  legal_hold_policy_assignments?: LegalHoldPolicyAssignment[] | undefined
  deleted_at?: string | undefined
}
type FileVersionLegalHolds = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: FileVersionLegalHold[] | undefined
}
type ShieldInformationBarrier = {
  id?: string | undefined
  type?: 'shield_information_barrier' | undefined
  enterprise?: { id?: string | undefined; type?: 'enterprise' | undefined } | undefined
  status?: 'draft' | 'pending' | 'disabled' | 'enabled' | 'invalid' | undefined
  created_at?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  updated_at?: string | undefined
  updated_by?: { id: string; type: 'user' } | undefined
  enabled_at?: string | undefined
  enabled_by?: { id: string; type: 'user' } | undefined
}
type ShieldInformationBarriers = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: ShieldInformationBarrier[] | undefined
}
type ShieldInformationBarrierBase = {
  id?: string | undefined
  type?: 'shield_information_barrier' | undefined
}
type ShieldInformationBarrierReport = {
  id?: string | undefined
  type?: 'shield_information_barrier_report' | undefined
  shield_information_barrier?:
    | { shield_information_barrier?: ShieldInformationBarrierBase | undefined }
    | undefined
  status?: 'pending' | 'error' | 'done' | 'cancelled' | undefined
  details?: { details?: { folder_id?: string | undefined } | undefined } | undefined
  created_at?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  updated_at?: string | undefined
}
type ShieldInformationBarrierReports = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: ShieldInformationBarrierReport[] | undefined
}
type ShieldInformationBarrierReference = {
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
}
type ShieldInformationBarrierSegment = {
  id?: string | undefined
  type?: 'shield_information_barrier_segment' | undefined
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
  name?: string | undefined
  description?: string | undefined
  created_at?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  updated_at?: string | undefined
  updated_by?: { id: string; type: 'user' } | undefined
}
type ShieldInformationBarrierSegments = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: ShieldInformationBarrierSegment[] | undefined
}
type ShieldInformationBarrierSegmentMember = {
  id?: string | undefined
  type?: 'shield_information_barrier_segment_member' | undefined
  user?: { id: string; type: 'user' } | undefined
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
  shield_information_barrier_segment?:
    | { id?: string | undefined; type?: 'shield_information_barrier_segment' | undefined }
    | undefined
  created_at?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  updated_at?: string | undefined
  updated_by?: { id: string; type: 'user' } | undefined
}
type ShieldInformationBarrierSegmentMembers = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: ShieldInformationBarrierSegmentMember[] | undefined
}
type ShieldInformationBarrierSegmentRestriction = {
  type?: 'shield_information_barrier_segment_restriction' | undefined
  id?: string | undefined
  shield_information_barrier_segment?:
    | { id?: string | undefined; type?: 'shield_information_barrier_segment' | undefined }
    | undefined
  restricted_segment?:
    | { id?: string | undefined; type?: 'shield_information_barrier_segment' | undefined }
    | undefined
  shield_information_barrier?: ShieldInformationBarrierBase | undefined
  created_at?: string | undefined
  created_by?: { id: string; type: 'user' } | undefined
  updated_at?: string | undefined
  updated_by?: { id: string; type: 'user' } | undefined
}
type ShieldInformationBarrierSegmentRestrictions = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: ShieldInformationBarrierSegmentRestriction[] | undefined
}
type DevicePinner = {
  id?: string | undefined
  type?: 'device_pinner' | undefined
  owned_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  product_name?: string | undefined
}
type DevicePinners = {
  entries?: DevicePinner[] | undefined
  limit?: bigint | undefined
  next_marker?: bigint | undefined
  order?: { by?: 'id' | undefined; direction?: 'asc' | 'desc' | undefined }[] | undefined
}
type TermsOfService = {
  id: string
  type: 'terms_of_service'
  status?: 'enabled' | 'disabled' | undefined
  enterprise?:
    | { id?: string | undefined; type?: 'enterprise' | undefined; name?: string | undefined }
    | undefined
  tos_type?: 'managed' | 'external' | undefined
  text?: string | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type TermsOfServices = { total_count?: bigint | undefined; entries?: TermsOfService[] | undefined }
type TermsOfServiceUserStatus = {
  id: string
  type: 'terms_of_service_user_status'
  tos?: { id: string; type: 'terms_of_service' } | undefined
  user?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  is_accepted?: boolean | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type TermsOfServiceUserStatuses = {
  total_count?: bigint | undefined
  entries?: TermsOfServiceUserStatus[] | undefined
}
type CollaborationAllowlistEntry = {
  id?: string | undefined
  type?: 'collaboration_whitelist_entry' | undefined
  domain?: string | undefined
  direction?: 'inbound' | 'outbound' | 'both' | undefined
  enterprise?:
    | { id?: string | undefined; type?: 'enterprise' | undefined; name?: string | undefined }
    | undefined
  created_at?: string | undefined
}
type CollaborationAllowlistEntries = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: CollaborationAllowlistEntry[] | undefined
}
type CollaborationAllowlistExemptTarget = {
  id?: string | undefined
  type?: 'collaboration_whitelist_exempt_target' | undefined
  enterprise?:
    | { id?: string | undefined; type?: 'enterprise' | undefined; name?: string | undefined }
    | undefined
  user?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type CollaborationAllowlistExemptTargets = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: CollaborationAllowlistExemptTarget[] | undefined
}
type StoragePolicy = { id: string; type: 'storage_policy'; name?: string | undefined }
type StoragePolicies = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: StoragePolicy[] | undefined
}
type StoragePolicyAssignment = {
  id: string
  type: 'storage_policy_assignment'
  storage_policy?: { id: string; type: 'storage_policy' } | undefined
  assigned_to?: { id?: string | undefined; type?: string | undefined } | undefined
}
type StoragePolicyAssignments = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: StoragePolicyAssignment[] | undefined
}
type ZipDownloadRequest = {
  items: { type: 'file' | 'folder'; id: string }[]
  download_file_name?: string | undefined
}
type ZipDownload = {
  download_url?: string | undefined
  status_url?: string | undefined
  expires_at?: string | undefined
  name_conflicts?:
    | {
        id?: string | undefined
        type?: 'file' | 'folder' | undefined
        original_name?: string | undefined
        download_name?: string | undefined
      }[][]
    | undefined
}
type ZipDownloadStatus = {
  total_file_count?: number | undefined
  downloaded_file_count?: number | undefined
  skipped_file_count?: number | undefined
  skipped_folder_count?: number | undefined
  state?: 'in_progress' | 'failed' | 'succeeded' | undefined
}
type SignRequestCancelRequest = { reason?: string | undefined }
type SignRequestPrefillTag = {
  document_tag_id?: (string | null) | undefined
  text_value?: (string | null) | undefined
  checkbox_value?: (boolean | null) | undefined
  date_value?: (string | null) | undefined
}
type SignRequestSignerVerificationMethodLogin = { type: 'login' }
type SignRequestSignerVerificationMethodPhoneSMS = { type: 'phone'; phone_number: string }
type SignRequestSignerVerificationMethodCacPiv = { type: 'cac_piv' }
type SignRequestSignerVerificationMethod =
  | SignRequestSignerVerificationMethodLogin
  | SignRequestSignerVerificationMethodPhoneSMS
  | SignRequestSignerVerificationMethodCacPiv
type SignRequestSignerInputEmailValidation = { validation_type: 'email' }
type SignRequestSignerInputCustomValidation = {
  validation_type: 'custom'
  custom_regex: string | null
  custom_error_message: string | null
}
type SignRequestSignerInputZIPValidation = { validation_type: 'zip' }
type SignRequestSignerInputZIP4Validation = { validation_type: 'zip_4' }
type SignRequestSignerInputZIPJPValidation = { validation_type: 'zip_jp' }
type SignRequestSignerInputSSNValidation = { validation_type: 'ssn' }
type SignRequestSignerInputNumberWithPeriodValidation = {
  validation_type?: 'number_with_period' | undefined
}
type SignRequestSignerInputNumberWithCommaValidation = {
  validation_type?: 'number_with_comma' | undefined
}
type SignRequestSignerInputDateISOValidation = { validation_type?: 'date_iso' | undefined }
type SignRequestSignerInputDateUSValidation = { validation_type?: 'date_us' | undefined }
type SignRequestSignerInputDateEUValidation = { validation_type?: 'date_eu' | undefined }
type SignRequestSignerInputDateAsiaValidation = { validation_type?: 'date_asia' | undefined }
type SignRequestSignerInputValidation =
  | SignRequestSignerInputEmailValidation
  | SignRequestSignerInputCustomValidation
  | SignRequestSignerInputZIPValidation
  | SignRequestSignerInputZIP4Validation
  | SignRequestSignerInputZIPJPValidation
  | SignRequestSignerInputSSNValidation
  | SignRequestSignerInputNumberWithPeriodValidation
  | SignRequestSignerInputNumberWithCommaValidation
  | SignRequestSignerInputDateISOValidation
  | SignRequestSignerInputDateUSValidation
  | SignRequestSignerInputDateEUValidation
  | SignRequestSignerInputDateAsiaValidation
type SignRequestSignerInput = {
  document_tag_id?: (string | null) | undefined
  text_value?: (string | null) | undefined
  checkbox_value?: (boolean | null) | undefined
  date_value?: (string | null) | undefined
  type?: 'signature' | 'date' | 'text' | 'checkbox' | 'radio' | 'dropdown' | undefined
  content_type?:
    | 'signature'
    | 'initial'
    | 'stamp'
    | 'date'
    | 'checkbox'
    | 'text'
    | 'full_name'
    | 'first_name'
    | 'last_name'
    | 'company'
    | 'title'
    | 'email'
    | 'attachment'
    | 'radio'
    | 'dropdown'
    | undefined
  page_index?: number | undefined
  read_only?: boolean | undefined
  validation?: SignRequestSignerInputValidation | ({} | null) | undefined
  reason?: (string | null) | undefined
  is_validated?: (boolean | null) | undefined
}
type SignRequestSignerAttachment = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type SignRequestSigner = {
  email?: (string | null) | undefined
  role?: 'signer' | 'approver' | 'final_copy_reader' | undefined
  is_in_person?: boolean | undefined
  order?: number | undefined
  embed_url_external_user_id?: (string | null) | undefined
  redirect_url?: (string | null) | undefined
  declined_redirect_url?: (string | null) | undefined
  login_required?: (boolean | null) | undefined
  verification_phone_number?: (string | null) | undefined
  password?: (string | null) | undefined
  signer_group_id?: (string | null) | undefined
  suppress_notifications?: (boolean | null) | undefined
  language?: (string | null) | undefined
  verification_method?: SignRequestSignerVerificationMethod | ({} | null) | undefined
  has_viewed_document?: boolean | undefined
  signer_decision?:
    | ({
        type?: 'signed' | 'declined' | undefined
        finalized_at?: string | undefined
        additional_info?: (string | null) | undefined
      } | null)
    | undefined
  inputs?: SignRequestSignerInput[] | undefined
  embed_url?: (string | null) | undefined
  iframeable_embed_url?: (string | null) | undefined
  attachments?: (SignRequestSignerAttachment[] | null) | undefined
}
type SignRequest = {
  is_document_preparation_needed?: boolean | undefined
  redirect_url?: (string | null) | undefined
  declined_redirect_url?: (string | null) | undefined
  are_text_signatures_enabled?: boolean | undefined
  email_subject?: (string | null) | undefined
  email_message?: (string | null) | undefined
  are_reminders_enabled?: boolean | undefined
  name?: string | undefined
  prefill_tags?: SignRequestPrefillTag[] | undefined
  days_valid?: (number | null) | undefined
  external_id?: (string | null) | undefined
  template_id?: (string | null) | undefined
  external_system_name?: (string | null) | undefined
  request_flow?: (string | null) | undefined
  type?: 'sign-request' | undefined
  source_files?: FileBase[] | undefined
  signers?: SignRequestSigner[] | undefined
  signature_color?: (string | null) | undefined
  id?: string | undefined
  prepare_url?: (string | null) | undefined
  signing_log?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'file'
        sequence_id?: {} | undefined
        name?: string | undefined
        sha1?: string | undefined
        file_version?: { id: string; type: 'file_version'; sha1?: string | undefined } | undefined
      }
    | undefined
  status?:
    | 'converting'
    | 'created'
    | 'sent'
    | 'viewed'
    | 'signed'
    | 'cancelled'
    | 'declined'
    | 'error'
    | 'error_converting'
    | 'error_sending'
    | 'expired'
    | 'finalizing'
    | 'error_finalizing'
    | undefined
  sign_files?:
    | { files?: FileMini[] | undefined; is_ready_for_download?: boolean | undefined }
    | undefined
  auto_expire_at?: (string | null) | undefined
  parent_folder?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  collaborator_level?: (string | null) | undefined
  short_id?: string | undefined
  created_at?: string | undefined
  finished_at?: (string | null) | undefined
  error_code?: (string | null) | undefined
  sender_email?: (string | null) | undefined
  sender_id?: (number | null) | undefined
}
type SignRequests = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: SignRequest[] | undefined
}
type SignRequestCreateSigner = {
  email?: (string | null) | undefined
  role?: 'signer' | 'approver' | 'final_copy_reader' | undefined
  is_in_person?: boolean | undefined
  order?: number | undefined
  embed_url_external_user_id?: (string | null) | undefined
  redirect_url?: (string | null) | undefined
  declined_redirect_url?: (string | null) | undefined
  login_required?: (boolean | null) | undefined
  verification_phone_number?: (string | null) | undefined
  password?: (string | null) | undefined
  signer_group_id?: (string | null) | undefined
  suppress_notifications?: (boolean | null) | undefined
  language?: (string | null) | undefined
  verification_method?: SignRequestSignerVerificationMethod | ({} | null) | undefined
}
type SignRequestCreateRequest = {
  is_document_preparation_needed?: boolean | undefined
  redirect_url?: (string | null) | undefined
  declined_redirect_url?: (string | null) | undefined
  are_text_signatures_enabled?: boolean | undefined
  email_subject?: (string | null) | undefined
  email_message?: (string | null) | undefined
  are_reminders_enabled?: boolean | undefined
  name?: string | undefined
  prefill_tags?: SignRequestPrefillTag[] | undefined
  days_valid?: (number | null) | undefined
  external_id?: (string | null) | undefined
  template_id?: (string | null) | undefined
  external_system_name?: (string | null) | undefined
  request_flow?: (string | null) | undefined
  source_files?: (FileBase[] | null) | undefined
  signature_color?: 'blue' | 'black' | 'red' | undefined
  signers?: SignRequestCreateSigner[] | undefined
  parent_folder?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
}
type Workflow = {
  id?: string | undefined
  type?: 'workflow' | undefined
  name?: string | undefined
  description?: string | undefined
  is_enabled?: boolean | undefined
  flows?:
    | {
        id?: string | undefined
        type?: 'flow' | undefined
        trigger?:
          | {
              type?: 'trigger' | undefined
              trigger_type?: 'WORKFLOW_MANUAL_START' | undefined
              scope?:
                | {
                    type?: 'trigger_scope' | undefined
                    ref?: string | undefined
                    object?: { type?: 'folder' | undefined; id?: string | undefined } | undefined
                  }[]
                | undefined
            }
          | undefined
        outcomes?: {} | undefined
        created_at?: string | undefined
        created_by?: { id: string; type: 'user' } | undefined
      }[]
    | undefined
}
type Workflows = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: Workflow[] | undefined
}
type Outcome = {
  id: string
  collaborators?:
    | {
        type: 'variable'
        variable_type: 'user_list'
        variable_value: { type: 'user'; id: string }[]
      }
    | undefined
  completion_rule?:
    | {
        type: 'variable'
        variable_type: 'task_completion_rule'
        variable_value: 'all_assignees' | 'any_assignees'
      }
    | undefined
  file_collaborator_role?:
    | { type: 'variable'; variable_type: 'collaborator_role'; variable_value: {} }
    | undefined
  task_collaborators?:
    | {
        type: 'variable'
        variable_type: 'user_list'
        variable_value: { type: 'user'; id: string }[]
      }
    | undefined
  role?: { type: 'variable'; variable_type: 'collaborator_role'; variable_value: {} } | undefined
}
type TemplateSignerInput = {
  document_tag_id?: (string | null) | undefined
  text_value?: (string | null) | undefined
  checkbox_value?: (boolean | null) | undefined
  date_value?: (string | null) | undefined
  type?:
    | 'signature'
    | 'date'
    | 'text'
    | 'checkbox'
    | 'attachment'
    | 'radio'
    | 'dropdown'
    | undefined
  content_type?:
    | 'signature'
    | 'initial'
    | 'stamp'
    | 'date'
    | 'checkbox'
    | 'text'
    | 'full_name'
    | 'first_name'
    | 'last_name'
    | 'company'
    | 'title'
    | 'email'
    | 'attachment'
    | 'radio'
    | 'dropdown'
    | undefined
  is_required?: boolean | undefined
  page_index?: number | undefined
  document_id?: (string | null) | undefined
  dropdown_choices?: (string[] | null) | undefined
  group_id?: (string | null) | undefined
  coordinates?: { x?: number | undefined; y?: number | undefined } | undefined
  dimensions?: { width?: number | undefined; height?: number | undefined } | undefined
  label?: (string | null) | undefined
  read_only?: boolean | undefined
  validation?: SignRequestSignerInputValidation | ({} | null) | undefined
}
type TemplateSignerVerificationMethodLogin = { type: 'login' }
type TemplateSignerVerificationMethodPhoneSMS = { type: 'phone' }
type TemplateSignerVerificationMethodCacPiv = { type: 'cac_piv' }
type TemplateSignerVerificationMethod =
  | TemplateSignerVerificationMethodLogin
  | TemplateSignerVerificationMethodPhoneSMS
  | TemplateSignerVerificationMethodCacPiv
type TemplateSigner = {
  inputs?: TemplateSignerInput[] | undefined
  email?: (string | null) | undefined
  role?: 'signer' | 'approver' | 'final_copy_reader' | undefined
  is_in_person?: boolean | undefined
  order?: number | undefined
  signer_group_id?: (string | null) | undefined
  label?: (string | null) | undefined
  public_id?: string | undefined
  is_password_required?: (boolean | null) | undefined
  is_phone_number_required?: (boolean | null) | undefined
  login_required?: (boolean | null) | undefined
  verification_method?: TemplateSignerVerificationMethod | ({} | null) | undefined
}
type SignTemplate = {
  type?: 'sign-template' | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  email_subject?: (string | null) | undefined
  email_message?: (string | null) | undefined
  days_valid?: (number | null) | undefined
  parent_folder?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  source_files?: FileMini[] | undefined
  are_fields_locked?: boolean | undefined
  are_options_locked?: boolean | undefined
  are_recipients_locked?: boolean | undefined
  are_email_settings_locked?: boolean | undefined
  are_files_locked?: boolean | undefined
  signers?: TemplateSigner[] | undefined
  additional_info?:
    | {
        non_editable?:
          | (
              | 'email_subject'
              | 'email_message'
              | 'name'
              | 'days_valid'
              | 'signers'
              | 'source_files'
            )[]
          | undefined
        required?: { signers?: 'email'[][] | undefined } | undefined
      }
    | undefined
  ready_sign_link?:
    | ({
        url?: string | undefined
        name?: (string | null) | undefined
        instructions?: (string | null) | undefined
        folder_id?: (string | null) | undefined
        is_notification_disabled?: boolean | undefined
        is_active?: boolean | undefined
      } | null)
    | undefined
  custom_branding?:
    | ({
        company_name?: (string | null) | undefined
        logo_uri?: (string | null) | undefined
        branding_color?: (string | null) | undefined
        email_footer_text?: (string | null) | undefined
      } | null)
    | undefined
  request_flow?: (string | null) | undefined
}
type SignTemplates = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: SignTemplate[] | undefined
}
type IntegrationMapping = {
  id: string
  type: 'integration_mapping'
  integration_type?: 'slack' | undefined
  is_manually_created?: boolean | undefined
  options?: { is_access_management_disabled?: boolean | undefined } | undefined
  created_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  modified_by?:
    | { id: string; type: 'user'; name?: string | undefined; login?: string | undefined }
    | undefined
  partner_item?:
    | {
        type: 'channel'
        id: string
        slack_workspace_id?: (string | null) | undefined
        slack_org_id?: (string | null) | undefined
      }
    | undefined
  box_item?:
    | {
        id: string
        etag?: (string | null) | undefined
        type: 'folder'
        sequence_id?: {} | undefined
        name?: string | undefined
      }
    | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type IntegrationMappings = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  entries?: IntegrationMapping[] | undefined
}
type IntegrationMappingSlackCreateRequest = {
  partner_item: {
    type: 'channel'
    id: string
    slack_workspace_id?: (string | null) | undefined
    slack_org_id?: (string | null) | undefined
  }
  box_item: { type: 'folder'; id: string }
  options?: { is_access_management_disabled?: boolean | undefined } | undefined
}
type IntegrationMappingTeams = {
  id: string
  type: 'integration_mapping'
  integration_type?: 'teams' | undefined
  is_overridden_by_manual_mapping?: boolean | undefined
  partner_item?: { type: 'channel' | 'team'; id: string; tenant_id: string } | undefined
  box_item?: { type: 'folder'; id: string } | undefined
  created_at?: string | undefined
  modified_at?: string | undefined
}
type IntegrationMappingsTeams = { entries?: IntegrationMappingTeams[] | undefined }
type IntegrationMappingTeamsCreateRequest = {
  partner_item: { type: 'channel' | 'team'; id: string; tenant_id: string; team_id: string }
  box_item: { type: 'folder'; id: string }
}
type AiItemAsk = { id: string; type: 'file' | 'hubs'; content?: string | undefined }
type AiDialogueHistory = {
  prompt?: string | undefined
  answer?: string | undefined
  created_at?: string | undefined
}
type AiAsk = {
  mode: 'multiple_item_qa' | 'single_item_qa'
  prompt: string
  items: AiItemAsk[]
  dialogue_history?: AiDialogueHistory[] | undefined
  include_citations?: boolean | undefined
  ai_agent?: {} | undefined
}
type AiAgentInfo = {
  models?:
    | {
        name?: string | undefined
        provider?: string | undefined
        supported_purpose?: string | undefined
      }[]
    | undefined
  processor?: string | undefined
}
type AiCitation = {
  content?: string | undefined
  id?: string | undefined
  type?: 'file' | undefined
  name?: string | undefined
}
type AiResponseFull = {
  answer: string
  created_at: string
  completion_reason?: string | undefined
  ai_agent_info?: AiAgentInfo | undefined
  citations?: AiCitation[] | undefined
}
type AiTextGen = {
  prompt: string
  items: { id: string; type: 'file'; content?: string | undefined }[]
  dialogue_history?: AiDialogueHistory[] | undefined
  ai_agent?: {} | undefined
}
type AiResponse = {
  answer: string
  created_at: string
  completion_reason?: string | undefined
  ai_agent_info?: AiAgentInfo | undefined
}
type AiLlmEndpointParamsOpenAi = {
  type: 'openai_params'
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  frequency_penalty?: (number | null) | undefined
  presence_penalty?: (number | null) | undefined
  stop?: (string | null) | undefined
}
type AiLlmEndpointParamsGoogle = {
  type: 'google_params'
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  top_k?: (number | null) | undefined
}
type AiLlmEndpointParamsAWS = {
  type: 'aws_params'
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
}
type AiLlmEndpointParamsIBM = {
  type: 'ibm_params'
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  top_k?: (number | null) | undefined
}
type AiLlmEndpointParams =
  | AiLlmEndpointParamsOpenAi
  | AiLlmEndpointParamsGoogle
  | AiLlmEndpointParamsAWS
  | AiLlmEndpointParamsIBM
type AiAgentLongTextTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  embeddings?:
    | {
        model?: string | undefined
        strategy?:
          | { id?: string | undefined; num_tokens_per_chunk?: number | undefined }
          | undefined
      }
    | undefined
}
type AiAgentBasicTextTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
}
type AiAgentSpreadsheetTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
}
type AiAgentAsk = {
  type: 'ai_agent_ask'
  long_text?: AiAgentLongTextTool | undefined
  basic_text?: AiAgentBasicTextTool | undefined
  spreadsheet?: AiAgentSpreadsheetTool | undefined
  long_text_multi?: AiAgentLongTextTool | undefined
  basic_text_multi?: AiAgentBasicTextTool | undefined
  basic_image?: AiAgentBasicTextTool | undefined
  basic_image_multi?: AiAgentBasicTextTool | undefined
}
type AiAgentBasicGenTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  embeddings?:
    | {
        model?: string | undefined
        strategy?:
          | { id?: string | undefined; num_tokens_per_chunk?: number | undefined }
          | undefined
      }
    | undefined
  content_template?: string | undefined
}
type AiAgentTextGen = { type: 'ai_agent_text_gen'; basic_gen?: AiAgentBasicGenTool | undefined }
type AiAgentExtract = {
  type: 'ai_agent_extract'
  long_text?: AiAgentLongTextTool | undefined
  basic_text?: AiAgentBasicTextTool | undefined
  basic_image?: AiAgentBasicTextTool | undefined
}
type AiAgentExtractStructured = {
  type: 'ai_agent_extract_structured'
  long_text?: AiAgentLongTextTool | undefined
  basic_text?: AiAgentBasicTextTool | undefined
  basic_image?: AiAgentBasicTextTool | undefined
}
type AiAgent = AiAgentAsk | AiAgentTextGen | AiAgentExtract | AiAgentExtractStructured
type AiItemBase = { id: string; type: 'file'; content?: string | undefined }
type AiExtract = { prompt: string; items: AiItemBase[]; ai_agent?: {} | undefined }
type AiExtractFieldOption = { key: string }
type AiExtractSubField = {
  key: string
  description?: string | undefined
  displayName?: string | undefined
  prompt?: string | undefined
  type?: string | undefined
  options?: AiExtractFieldOption[] | undefined
}
type AiTaxonomyReference = {
  type?: 'taxonomy' | undefined
  taxonomy_key?: string | undefined
  namespace?: string | undefined
}
type AiTaxonomyFileReference = {
  type?: 'file' | undefined
  taxonomy_key?: string | undefined
  id?: string | undefined
}
type AiTaxonomySource = AiTaxonomyReference | AiTaxonomyFileReference
type AiExtractStructured = {
  items: AiItemBase[]
  metadata_template?:
    | {
        template_key?: string | undefined
        type?: 'metadata_template' | undefined
        scope?: string | undefined
      }
    | undefined
  fields?:
    | {
        key: string
        description?: string | undefined
        displayName?: string | undefined
        prompt?: string | undefined
        type?: string | undefined
        options?: { key: string }[] | undefined
        fields?: AiExtractSubField[] | undefined
        taxonomy_key?: string | undefined
        namespace?: string | undefined
        options_rules?:
          | { multi_select?: boolean | undefined; selectable_levels?: number[] | undefined }
          | undefined
      }[]
    | undefined
  ai_agent?: {} | undefined
  include_confidence_score?: boolean | undefined
  include_reference?: boolean | undefined
  taxonomy_sources?: AiTaxonomySource[] | undefined
}
type AiExtractResponse = { [x: string]: { [x: string]: unknown } }
type AiExtractStructuredResponse = {
  answer: AiExtractResponse
  created_at: string
  completion_reason?: string | undefined
  confidence_score?: { [x: string]: { [x: string]: unknown } } | undefined
  reference?: { [x: string]: { [x: string]: unknown } } | undefined
  ai_agent_info?: AiAgentInfo | undefined
}
type GroupBase = { id: string; type: 'group' }
type AiAgentAllowedEntity = UserBase | GroupBase
type AiStudioAgentLongTextToolResponse = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  embeddings?:
    | {
        model?: string | undefined
        strategy?:
          | { id?: string | undefined; num_tokens_per_chunk?: number | undefined }
          | undefined
      }
    | undefined
  is_custom_instructions_included?: boolean | undefined
  warnings?: string[] | undefined
}
type AiStudioAgentBasicTextToolResponse = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  is_custom_instructions_included?: boolean | undefined
  warnings?: string[] | undefined
}
type AiStudioAgentSpreadsheetToolResponse = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  warnings?: string[] | undefined
}
type AiStudioAgentAskResponse = {
  type: 'ai_agent_ask'
  access_state: string
  description: string
  custom_instructions?: (string | null) | undefined
  suggested_questions?: string[] | undefined
  long_text?: AiStudioAgentLongTextToolResponse | undefined
  basic_text?: AiStudioAgentBasicTextToolResponse | undefined
  basic_image?: AiStudioAgentBasicTextToolResponse | undefined
  spreadsheet?: AiStudioAgentSpreadsheetToolResponse | undefined
  long_text_multi?: AiStudioAgentLongTextToolResponse | undefined
  basic_text_multi?: AiStudioAgentBasicTextToolResponse | undefined
  basic_image_multi?: AiStudioAgentBasicTextToolResponse | undefined
}
type AiStudioAgentBasicGenToolResponse = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  embeddings?:
    | {
        model?: string | undefined
        strategy?:
          | { id?: string | undefined; num_tokens_per_chunk?: number | undefined }
          | undefined
      }
    | undefined
  content_template?: string | undefined
  is_custom_instructions_included?: boolean | undefined
  warnings?: string[] | undefined
}
type AiStudioAgentTextGenResponse = {
  type: 'ai_agent_text_gen'
  access_state: string
  description: string
  custom_instructions?: (string | null) | undefined
  suggested_questions?: string[] | undefined
  basic_gen?: AiStudioAgentBasicGenToolResponse | undefined
}
type AiStudioAgentExtractResponse = {
  type: 'ai_agent_extract'
  access_state: string
  description: string
  custom_instructions?: (string | null) | undefined
  long_text?: AiStudioAgentLongTextToolResponse | undefined
  basic_text?: AiStudioAgentBasicTextToolResponse | undefined
  basic_image?: AiStudioAgentBasicTextToolResponse | undefined
}
type AiSingleAgentResponseFull = {
  id: string
  type?: 'ai_agent' | undefined
  origin: string
  name: string
  access_state: string
  created_by?: { id: string; type: 'user' } | undefined
  created_at?: string | undefined
  modified_by?: { id: string; type: 'user' } | undefined
  modified_at?: string | undefined
  icon_reference?: string | undefined
  allowed_entities?: AiAgentAllowedEntity[] | undefined
  ask?: AiStudioAgentAskResponse | undefined
  text_gen?: AiStudioAgentTextGenResponse | undefined
  extract?: AiStudioAgentExtractResponse | undefined
}
type AiMultipleAgentResponse = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: AiSingleAgentResponseFull[] | undefined
}
type AiStudioAgentLongTextTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  embeddings?:
    | {
        model?: string | undefined
        strategy?:
          | { id?: string | undefined; num_tokens_per_chunk?: number | undefined }
          | undefined
      }
    | undefined
  is_custom_instructions_included?: boolean | undefined
}
type AiStudioAgentBasicTextTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  is_custom_instructions_included?: boolean | undefined
}
type AiStudioAgentSpreadsheetTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
}
type AiStudioAgentAsk = {
  type: 'ai_agent_ask'
  access_state: string
  description: string
  custom_instructions?: (string | null) | undefined
  suggested_questions?: string[] | undefined
  long_text?: AiStudioAgentLongTextTool | undefined
  basic_text?: AiStudioAgentBasicTextTool | undefined
  basic_image?: AiStudioAgentBasicTextTool | undefined
  spreadsheet?: AiStudioAgentSpreadsheetTool | undefined
  long_text_multi?: AiStudioAgentLongTextTool | undefined
  basic_text_multi?: AiStudioAgentBasicTextTool | undefined
  basic_image_multi?: AiStudioAgentBasicTextTool | undefined
}
type AiStudioAgentBasicGenTool = {
  model?: string | undefined
  num_tokens_for_completion?: number | undefined
  llm_endpoint_params?: AiLlmEndpointParams | undefined
  system_message?: string | undefined
  prompt_template?: string | undefined
  embeddings?:
    | {
        model?: string | undefined
        strategy?:
          | { id?: string | undefined; num_tokens_per_chunk?: number | undefined }
          | undefined
      }
    | undefined
  content_template?: string | undefined
  is_custom_instructions_included?: boolean | undefined
}
type AiStudioAgentTextGen = {
  type: 'ai_agent_text_gen'
  access_state: string
  description: string
  custom_instructions?: (string | null) | undefined
  suggested_questions?: string[] | undefined
  basic_gen?: AiStudioAgentBasicGenTool | undefined
}
type AiStudioAgentExtract = {
  type: 'ai_agent_extract'
  access_state: string
  description: string
  custom_instructions?: (string | null) | undefined
  long_text?: AiStudioAgentLongTextTool | undefined
  basic_text?: AiStudioAgentBasicTextTool | undefined
  basic_image?: AiStudioAgentBasicTextTool | undefined
}
type CreateAiAgent = {
  type: 'ai_agent'
  name: string
  access_state: string
  icon_reference?: string | undefined
  allowed_entities?: AiAgentAllowedEntity[] | undefined
  ask?: AiStudioAgentAsk | undefined
  text_gen?: AiStudioAgentTextGen | undefined
  extract?: AiStudioAgentExtract | undefined
}
type MetadataTaxonomyLevel = {
  displayName?: string | undefined
  description?: string | undefined
  level?: number | undefined
}
type MetadataTaxonomy = {
  id: string
  key?: string | undefined
  displayName: string
  namespace: string
  levels?: MetadataTaxonomyLevel[] | undefined
}
type MetadataTaxonomies = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: MetadataTaxonomy[] | undefined
}
type MetadataTaxonomyLevels = { entries?: MetadataTaxonomyLevel[] | undefined }
type MetadataTaxonomyAncestor = {
  id?: string | undefined
  displayName?: string | undefined
  level?: number | undefined
}
type MetadataTaxonomyNode = {
  id: string
  displayName: string
  level: number
  parentId?: string | undefined
  nodePath?: string[] | undefined
  ancestors?: MetadataTaxonomyAncestor[] | undefined
}
type MetadataTaxonomyNodes = {
  limit?: bigint | undefined
  next_marker?: (string | null) | undefined
  prev_marker?: (string | null) | undefined
  entries?: MetadataTaxonomyNode[] | undefined
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
    '/files/:file_id': {
      $get:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints'?: (string | null) | undefined
              }
            }
            output: FileFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: {
                'if-none-match'?: string | undefined
                boxapi?: string | undefined
                'x-rep-hints'?: (string | null) | undefined
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
                'x-rep-hints'?: (string | null) | undefined
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
                'x-rep-hints'?: (string | null) | undefined
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
                'x-rep-hints'?: (string | null) | undefined
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
                'x-rep-hints'?: (string | null) | undefined
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
                'x-rep-hints'?: (string | null) | undefined
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: FileFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              header: { 'if-match'?: string | undefined }
            } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
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
                name?: string | undefined
                description?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                lock?:
                  | ({
                      access?: 'lock' | undefined
                      expires_at?: string | undefined
                      is_download_prevented?: boolean | undefined
                    } | null)
                  | undefined
                disposition_at?: string | undefined
                permissions?: { can_download?: 'open' | 'company' | undefined } | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                tags?: string[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/files/:file_id/app_item_associations': {
      $get:
        | {
            input: { param: { file_id: string } } & {
              query: {
                limit?: bigint | undefined
                marker?: string | undefined
                application_type?: string | undefined
              }
            }
            output: AppItemAssociations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              query: {
                limit?: bigint | undefined
                marker?: string | undefined
                application_type?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & {
              query: {
                limit?: bigint | undefined
                marker?: string | undefined
                application_type?: string | undefined
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
            output: File
            outputFormat: 'text'
            status: 200
          }
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
                attributes: { name: string; content_modified_at?: string | undefined }
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
                attributes: { name: string; content_modified_at?: string | undefined }
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
                attributes: { name: string; content_modified_at?: string | undefined }
                file: File
              }
            }
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
                size?: number | undefined
                parent?: { id?: string | undefined } | undefined
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
                size?: number | undefined
                parent?: { id?: string | undefined } | undefined
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
                size?: number | undefined
                parent?: { id?: string | undefined } | undefined
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
                  name: string
                  parent: { id: string }
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
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
                  name: string
                  parent: { id: string }
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
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
                  name: string
                  parent: { id: string }
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
                }
                file: File
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'content-md5'?: string | undefined }
            } & {
              form: {
                attributes: {
                  name: string
                  parent: { id: string }
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
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
                  name: string
                  parent: { id: string }
                  content_created_at?: string | undefined
                  content_modified_at?: string | undefined
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
            input: { json: { folder_id: string; file_size: bigint; file_name: string } }
            output: UploadSession
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { folder_id: string; file_size: bigint; file_name: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { folder_id: string; file_size: bigint; file_name: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { folder_id: string; file_size: bigint; file_name: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { folder_id: string; file_size: bigint; file_name: string } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { folder_id: string; file_size: bigint; file_name: string } }
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
              json: { file_size: bigint; file_name?: string | undefined }
            }
            output: UploadSession
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & {
              json: { file_size: bigint; file_name?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & {
              json: { file_size: bigint; file_name?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/upload_sessions/:upload_session_id': {
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
    '/files/upload_sessions/:upload_session_id/plan': {
      $post:
        | {
            input: { param: { upload_session_id: string } } & { json: UploadSessionPlanRequest }
            output: UploadSessionPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_session_id: string } } & { json: UploadSessionPlanRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_session_id: string } } & { json: UploadSessionPlanRequest }
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
            status: 400
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
    '/files/:file_id/copy': {
      $post:
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                version?: string | undefined
                parent: { id: string }
              }
            }
            output: FileFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                name?: string | undefined
                version?: string | undefined
                parent: { id: string }
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
                version?: string | undefined
                parent: { id: string }
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
                version?: string | undefined
                parent: { id: string }
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
                version?: string | undefined
                parent: { id: string }
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
                version?: string | undefined
                parent: { id: string }
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
                version?: string | undefined
                parent: { id: string }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/thumbnail.{extension}': {
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
    '/files/:file_id/trash': {
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
    '/files/:file_id/versions/:file_version_id': {
      $get:
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              query: { fields?: string[] | undefined }
            }
            output: FileVersionFull
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
      $put:
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              json: { trashed_at?: (string | null) | undefined }
            }
            output: FileVersionFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string; file_version_id: string } } & {
              json: { trashed_at?: (string | null) | undefined }
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
            output: FileVersionFull
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
    '/files/:file_id/metadata': {
      $get:
        | {
            input: { param: { file_id: string } } & { query: { view?: string | undefined } }
            output: Metadatas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { file_id: string } } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/files/:file_id/metadata/enterprise/securityClassification-6VMVochwUWo': {
      $get:
        | {
            input: { param: { file_id: string } }
            output: Classification
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
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: Classification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & {
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & {
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { file_id: string } } & {
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/files/:file_id/metadata/:scope/:template_key': {
      $get:
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { query: { view?: string | undefined } }
            output: MetadataFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: MetadataFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: MetadataError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: MetadataError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
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
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
              }[]
            }
            output: MetadataFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { file_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
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
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
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
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/files/:file_id/metadata/global/boxSkillsCards': {
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
            input: { param: { file_id: string } } & { json: { cards: SkillCard[] } }
            output: SkillCardsMetadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { file_id: string } } & { json: { cards: SkillCard[] } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } } & { json: { cards: SkillCard[] } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } } & { json: { cards: SkillCard[] } }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { file_id: string } } & { json: { cards: SkillCard[] } }
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
    }
  } & {
    '/files/:file_id/watermark': {
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
    }
  } & {
    '/file_requests/:file_request_id': {
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
    '/folders/:folder_id': {
      $get:
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: FolderFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'if-none-match'?: string | undefined; boxapi?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                fields?: string[] | undefined
                sort?: 'id' | 'name' | 'date' | 'size' | undefined
                direction?: 'ASC' | 'DESC' | undefined
                offset?: bigint | undefined
                limit?: bigint | undefined
              }
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
              }
            }
            output: FolderFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: { fields?: string[] | undefined }
            } & { header: { 'if-match'?: string | undefined } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
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
                name?: string | undefined
                description?: string | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
                can_non_owners_invite?: boolean | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?: { can_download?: boolean | undefined } | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                tags?: string[] | undefined
                is_collaboration_restricted_to_enterprise?: boolean | undefined
                collections?:
                  | ({ id?: string | undefined; type?: string | undefined }[] | null)
                  | undefined
                can_non_owners_view_collaborators?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/folders/:folder_id/app_item_associations': {
      $get:
        | {
            input: { param: { folder_id: string } } & {
              query: {
                limit?: bigint | undefined
                marker?: string | undefined
                application_type?: string | undefined
              }
            }
            output: AppItemAssociations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                limit?: bigint | undefined
                marker?: string | undefined
                application_type?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & {
              query: {
                limit?: bigint | undefined
                marker?: string | undefined
                application_type?: string | undefined
              }
            }
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
    '/folders': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                name: string
                parent: { id: string }
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
            output: FolderFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                name: string
                parent: { id: string }
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
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
                name: string
                parent: { id: string }
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
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
                name: string
                parent: { id: string }
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
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
                name: string
                parent: { id: string }
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
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
                name: string
                parent: { id: string }
                folder_upload_email?: { access?: 'open' | 'collaborators' | undefined } | undefined
                sync_state?: 'synced' | 'not_synced' | 'partially_synced' | undefined
              }
            }
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
            output: FolderFull
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
    '/folders/:folder_id/collaborations': {
      $get:
        | {
            input: { param: { folder_id: string } } & {
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
            input: { param: { folder_id: string } } & {
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
    '/folders/:folder_id/trash': {
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
    }
  } & {
    '/folders/:folder_id/metadata': {
      $get:
        | {
            input: { param: { folder_id: string } } & { query: { view?: string | undefined } }
            output: Metadatas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folder_id: string } } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { query: { view?: string | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/metadata/enterprise/securityClassification-6VMVochwUWo': {
      $get:
        | {
            input: { param: { folder_id: string } }
            output: Classification
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
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: Classification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { op: 'replace'; path: '/Box__Security__Classification__Key'; value: string }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/folders/:folder_id/metadata/:scope/:template_key': {
      $get:
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            }
            output: MetadataFull
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
            } & { json: { [x: string]: {} } }
            output: MetadataFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: MetadataError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
            output: MetadataError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & { json: { [x: string]: {} } }
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
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
              }[]
            }
            output: MetadataFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { folder_id: string; scope: 'global' | 'enterprise'; template_key: string }
            } & {
              json: {
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
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
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
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
                op?: 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | undefined
                path?: string | undefined
                value?: MetadataInstanceValue | undefined
                from?: string | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
                sort?: 'name' | 'date' | 'size' | undefined
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
                sort?: 'name' | 'date' | 'size' | undefined
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
                sort?: 'name' | 'date' | 'size' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/folders/:folder_id/watermark': {
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
                locked_operations?: { move: boolean; delete: boolean } | undefined
                folder: { type: string; id: string }
              }
            }
            output: FolderLock
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                locked_operations?: { move: boolean; delete: boolean } | undefined
                folder: { type: string; id: string }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                locked_operations?: { move: boolean; delete: boolean } | undefined
                folder: { type: string; id: string }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                locked_operations?: { move: boolean; delete: boolean } | undefined
                folder: { type: string; id: string }
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
    '/metadata_templates': {
      $get:
        | {
            input: {
              query: {
                metadata_instance_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: MetadataTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metadata_instance_id: string
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                metadata_instance_id: string
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
    '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema': {
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
                op: 'addEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                op: 'addEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                op: 'addEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                op: 'addEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
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
                op: 'editEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                enumOptionKey: string
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                op: 'editEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                enumOptionKey: string
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                op: 'editEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                enumOptionKey: string
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                op: 'editEnumOption'
                fieldKey: 'Box__Security__Classification__Key'
                enumOptionKey: string
                data: {
                  key: string
                  staticConfig?:
                    | {
                        classification?:
                          | {
                              classificationDefinition?: string | undefined
                              colorID?: bigint | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/:scope/:template_key/schema': {
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
                data?: { [x: string]: {} } | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
              }[]
            }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
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
                data?: { [x: string]: {} } | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
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
                data?: { [x: string]: {} } | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
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
                data?: { [x: string]: {} } | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scope: 'global' | 'enterprise'; template_key: string } } & {
              json: {
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
                data?: { [x: string]: {} } | undefined
                fieldKey?: string | undefined
                fieldKeys?: string[] | undefined
                enumOptionKey?: string | undefined
                enumOptionKeys?: string[] | undefined
                multiSelectOptionKey?: string | undefined
                multiSelectOptionKeys?: string[] | undefined
              }[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    '/metadata_templates/schema': {
      $post:
        | {
            input: {
              json: {
                scope: string
                templateKey?: string | undefined
                displayName: string
                hidden?: boolean | undefined
                fields?:
                  | {
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'taxonomy'
                      key: string
                      displayName: string
                      description?: string | undefined
                      hidden?: boolean | undefined
                      options?: { key: string }[] | undefined
                      taxonomyKey?: string | undefined
                      taxonomyId?: string | undefined
                      namespace?: string | undefined
                      optionsRules?:
                        | {
                            multiSelect?: boolean | undefined
                            selectableLevels?: number[] | undefined
                          }
                        | undefined
                    }[]
                  | undefined
                copyInstanceOnItemCopy?: boolean | undefined
              }
            }
            output: MetadataTemplate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                scope: string
                templateKey?: string | undefined
                displayName: string
                hidden?: boolean | undefined
                fields?:
                  | {
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'taxonomy'
                      key: string
                      displayName: string
                      description?: string | undefined
                      hidden?: boolean | undefined
                      options?: { key: string }[] | undefined
                      taxonomyKey?: string | undefined
                      taxonomyId?: string | undefined
                      namespace?: string | undefined
                      optionsRules?:
                        | {
                            multiSelect?: boolean | undefined
                            selectableLevels?: number[] | undefined
                          }
                        | undefined
                    }[]
                  | undefined
                copyInstanceOnItemCopy?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                scope: string
                templateKey?: string | undefined
                displayName: string
                hidden?: boolean | undefined
                fields?:
                  | {
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'taxonomy'
                      key: string
                      displayName: string
                      description?: string | undefined
                      hidden?: boolean | undefined
                      options?: { key: string }[] | undefined
                      taxonomyKey?: string | undefined
                      taxonomyId?: string | undefined
                      namespace?: string | undefined
                      optionsRules?:
                        | {
                            multiSelect?: boolean | undefined
                            selectableLevels?: number[] | undefined
                          }
                        | undefined
                    }[]
                  | undefined
                copyInstanceOnItemCopy?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                scope: string
                templateKey?: string | undefined
                displayName: string
                hidden?: boolean | undefined
                fields?:
                  | {
                      type: 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'taxonomy'
                      key: string
                      displayName: string
                      description?: string | undefined
                      hidden?: boolean | undefined
                      options?: { key: string }[] | undefined
                      taxonomyKey?: string | undefined
                      taxonomyId?: string | undefined
                      namespace?: string | undefined
                      optionsRules?:
                        | {
                            multiSelect?: boolean | undefined
                            selectableLevels?: number[] | undefined
                          }
                        | undefined
                    }[]
                  | undefined
                copyInstanceOnItemCopy?: boolean | undefined
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
                scope: 'enterprise'
                templateKey: 'securityClassification-6VMVochwUWo'
                displayName: 'Classification'
                hidden?: boolean | undefined
                copyInstanceOnItemCopy?: boolean | undefined
                fields: {
                  type: 'enum'
                  key: 'Box__Security__Classification__Key'
                  displayName: 'Classification'
                  hidden?: boolean | undefined
                  options: {
                    key: string
                    staticConfig?:
                      | {
                          classification?:
                            | {
                                classificationDefinition?: string | undefined
                                colorID?: bigint | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                }[]
              }
            }
            output: ClassificationTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                scope: 'enterprise'
                templateKey: 'securityClassification-6VMVochwUWo'
                displayName: 'Classification'
                hidden?: boolean | undefined
                copyInstanceOnItemCopy?: boolean | undefined
                fields: {
                  type: 'enum'
                  key: 'Box__Security__Classification__Key'
                  displayName: 'Classification'
                  hidden?: boolean | undefined
                  options: {
                    key: string
                    staticConfig?:
                      | {
                          classification?:
                            | {
                                classificationDefinition?: string | undefined
                                colorID?: bigint | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                }[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                scope: 'enterprise'
                templateKey: 'securityClassification-6VMVochwUWo'
                displayName: 'Classification'
                hidden?: boolean | undefined
                copyInstanceOnItemCopy?: boolean | undefined
                fields: {
                  type: 'enum'
                  key: 'Box__Security__Classification__Key'
                  displayName: 'Classification'
                  hidden?: boolean | undefined
                  options: {
                    key: string
                    staticConfig?:
                      | {
                          classification?:
                            | {
                                classificationDefinition?: string | undefined
                                colorID?: bigint | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                }[]
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                scope: 'enterprise'
                templateKey: 'securityClassification-6VMVochwUWo'
                displayName: 'Classification'
                hidden?: boolean | undefined
                copyInstanceOnItemCopy?: boolean | undefined
                fields: {
                  type: 'enum'
                  key: 'Box__Security__Classification__Key'
                  displayName: 'Classification'
                  hidden?: boolean | undefined
                  options: {
                    key: string
                    staticConfig?:
                      | {
                          classification?:
                            | {
                                classificationDefinition?: string | undefined
                                colorID?: bigint | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                }[]
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
    '/comments/:comment_id': {
      $get:
        | {
            input: { param: { comment_id: string } } & { query: { fields?: string[] | undefined } }
            output: CommentFull
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
            output: CommentFull
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
    }
  } & {
    '/comments': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                message: string
                tagged_message?: string | undefined
                item: { id: string; type: 'file' | 'comment' }
              }
            }
            output: CommentFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                message: string
                tagged_message?: string | undefined
                item: { id: string; type: 'file' | 'comment' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaborations/:collaboration_id': {
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
                status?: 'pending' | 'accepted' | 'rejected' | undefined
                expires_at?: string | undefined
                can_view_path?: boolean | undefined
              }
            }
            output: Collaboration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
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
                status?: 'pending' | 'accepted' | 'rejected' | undefined
                expires_at?: string | undefined
                can_view_path?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
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
                status?: 'pending' | 'accepted' | 'rejected' | undefined
                expires_at?: string | undefined
                can_view_path?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collaboration_id: string } } & {
              json: {
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
                status?: 'pending' | 'accepted' | 'rejected' | undefined
                expires_at?: string | undefined
                can_view_path?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
            output: CollaborationsOffsetPaginated
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
                item: { type?: 'file' | 'folder' | undefined; id?: string | undefined }
                accessible_by: {
                  type: 'user' | 'group'
                  id?: string | undefined
                  login?: string | undefined
                }
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                is_access_only?: boolean | undefined
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
              }
            }
            output: Collaboration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined; notify?: boolean | undefined } } & {
              json: {
                item: { type?: 'file' | 'folder' | undefined; id?: string | undefined }
                accessible_by: {
                  type: 'user' | 'group'
                  id?: string | undefined
                  login?: string | undefined
                }
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                is_access_only?: boolean | undefined
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fields?: string[] | undefined; notify?: boolean | undefined } } & {
              json: {
                item: { type?: 'file' | 'folder' | undefined; id?: string | undefined }
                accessible_by: {
                  type: 'user' | 'group'
                  id?: string | undefined
                  login?: string | undefined
                }
                role:
                  | 'editor'
                  | 'viewer'
                  | 'previewer'
                  | 'uploader'
                  | 'previewer uploader'
                  | 'viewer uploader'
                  | 'co-owner'
                is_access_only?: boolean | undefined
                can_view_path?: boolean | undefined
                expires_at?: string | undefined
              }
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
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tags')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | 'all_items' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                deleted_user_ids?: string[] | undefined
                deleted_at_range?: string[] | undefined
              }
            }
            output: SearchResultsResponse
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
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tags')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | 'all_items' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                deleted_user_ids?: string[] | undefined
                deleted_at_range?: string[] | undefined
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
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tags')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | 'all_items' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                deleted_user_ids?: string[] | undefined
                deleted_at_range?: string[] | undefined
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
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tags')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | 'all_items' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                deleted_user_ids?: string[] | undefined
                deleted_at_range?: string[] | undefined
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
                  | ('name' | 'description' | 'file_content' | 'comments' | 'tags')[]
                  | undefined
                type?: 'file' | 'folder' | 'web_link' | undefined
                trash_content?: 'non_trashed_only' | 'trashed_only' | 'all_items' | undefined
                mdfilters?: MetadataFilter[] | undefined
                sort?: 'modified_at' | 'relevance' | undefined
                direction?: 'DESC' | 'ASC' | undefined
                limit?: bigint | undefined
                include_recent_shared_links?: boolean | undefined
                fields?: string[] | undefined
                offset?: bigint | undefined
                deleted_user_ids?: string[] | undefined
                deleted_at_range?: string[] | undefined
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
                item: { id?: string | undefined; type?: 'file' | undefined }
                action?: 'review' | 'complete' | undefined
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
              }
            }
            output: Task
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                item: { id?: string | undefined; type?: 'file' | undefined }
                action?: 'review' | 'complete' | undefined
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                item: { id?: string | undefined; type?: 'file' | undefined }
                action?: 'review' | 'complete' | undefined
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                item: { id?: string | undefined; type?: 'file' | undefined }
                action?: 'review' | 'complete' | undefined
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                item: { id?: string | undefined; type?: 'file' | undefined }
                action?: 'review' | 'complete' | undefined
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tasks/:task_id': {
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
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
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
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
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
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
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
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
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
                message?: string | undefined
                due_at?: string | undefined
                completion_rule?: 'all_assignees' | 'any_assignee' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    '/task_assignments': {
      $post:
        | {
            input: {
              json: {
                task: { id: string; type: 'task' }
                assign_to: { id?: string | undefined; login?: string | undefined }
              }
            }
            output: TaskAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                task: { id: string; type: 'task' }
                assign_to: { id?: string | undefined; login?: string | undefined }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                task: { id: string; type: 'task' }
                assign_to: { id?: string | undefined; login?: string | undefined }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                task: { id: string; type: 'task' }
                assign_to: { id?: string | undefined; login?: string | undefined }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                task: { id: string; type: 'task' }
                assign_to: { id?: string | undefined; login?: string | undefined }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/task_assignments/:task_assignment_id': {
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
    }
  } & {
    '/shared_items': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: FileFull
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
    '/files/:file_id#get_shared_link': {
      $get:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } }
            output: FileFull
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
    '/files/:file_id#add_shared_link': {
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
              }
            }
            output: FileFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
    '/files/:file_id#update_shared_link': {
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
              }
            }
            output: FileFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
    '/files/:file_id#remove_shared_link': {
      $put:
        | {
            input: { param: { file_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: FileFull
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
    '/shared_items#folders': {
      $get:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              header: { 'if-none-match'?: string | undefined; boxapi: string }
            }
            output: FolderFull
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
    '/folders/:folder_id#get_shared_link': {
      $get:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } }
            output: FolderFull
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
    '/folders/:folder_id#add_shared_link': {
      $put:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
              }
            }
            output: FolderFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
    '/folders/:folder_id#update_shared_link': {
      $put:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: string | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
              }
            }
            output: FolderFull
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
    '/folders/:folder_id#remove_shared_link': {
      $put:
        | {
            input: { param: { folder_id: string } } & { query: { fields: string } } & {
              json: { shared_link?: ({ [x: string]: unknown } | null) | undefined }
            }
            output: FolderFull
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
    '/web_links': {
      $post:
        | {
            input: {
              json: {
                url: string
                parent: { id: string }
                name?: string | undefined
                description?: string | undefined
              }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                url: string
                parent: { id: string }
                name?: string | undefined
                description?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/web_links/:web_link_id': {
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
                url?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                name?: string | undefined
                description?: string | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
              }
            }
            output: WebLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { web_link_id: string } } & {
              json: {
                url?: string | undefined
                parent?: { id?: string | undefined; user_id?: string | undefined } | undefined
                name?: string | undefined
                description?: string | undefined
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      one_time_passcode?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/web_links/:web_link_id/trash': {
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
    '/web_links/:web_link_id#add_shared_link': {
      $put:
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
    '/web_links/:web_link_id#update_shared_link': {
      $put:
        | {
            input: { param: { web_link_id: string } } & { query: { fields: string } } & {
              json: {
                shared_link?:
                  | {
                      access?: 'open' | 'company' | 'collaborators' | undefined
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
                      password?: (string | null) | undefined
                      vanity_name?: string | undefined
                      unshared_at?: string | undefined
                      permissions?:
                        | {
                            can_download?: boolean | undefined
                            can_preview?: boolean | undefined
                            can_edit?: boolean | undefined
                          }
                        | undefined
                      one_time_passcode?: {} | undefined
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
    '/shared_items#app_items': {
      $get:
        | {
            input: { header: { boxapi: string } }
            output: AppItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { boxapi: string } }
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
                name: string
                login?: string | undefined
                is_platform_access_only?: boolean | undefined
                role?: 'coadmin' | 'user' | undefined
                language?: string | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                phone?: string | undefined
                address?: string | undefined
                space_amount?: bigint | undefined
                tracking_codes?: TrackingCode[] | undefined
                can_see_managed_users?: boolean | undefined
                timezone?: string | undefined
                is_external_collab_restricted?: boolean | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                external_app_user_id?: string | undefined
              }
            }
            output: UserFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                name: string
                login?: string | undefined
                is_platform_access_only?: boolean | undefined
                role?: 'coadmin' | 'user' | undefined
                language?: string | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                phone?: string | undefined
                address?: string | undefined
                space_amount?: bigint | undefined
                tracking_codes?: TrackingCode[] | undefined
                can_see_managed_users?: boolean | undefined
                timezone?: string | undefined
                is_external_collab_restricted?: boolean | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                external_app_user_id?: string | undefined
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
            output: UserFull
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
      $get:
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } }
            output: UserFull
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
                enterprise?: (string | null) | undefined
                notify?: boolean | undefined
                name?: string | undefined
                login?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                language?: string | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                phone?: string | undefined
                address?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
                can_see_managed_users?: boolean | undefined
                timezone?: string | undefined
                is_external_collab_restricted?: boolean | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_collaborated_content_available_when_owner_inactive?: boolean | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                space_amount?: bigint | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                external_app_user_id?: string | undefined
              }
            }
            output: UserFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise?: (string | null) | undefined
                notify?: boolean | undefined
                name?: string | undefined
                login?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                language?: string | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                phone?: string | undefined
                address?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
                can_see_managed_users?: boolean | undefined
                timezone?: string | undefined
                is_external_collab_restricted?: boolean | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_collaborated_content_available_when_owner_inactive?: boolean | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                space_amount?: bigint | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                external_app_user_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise?: (string | null) | undefined
                notify?: boolean | undefined
                name?: string | undefined
                login?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                language?: string | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                phone?: string | undefined
                address?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
                can_see_managed_users?: boolean | undefined
                timezone?: string | undefined
                is_external_collab_restricted?: boolean | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_collaborated_content_available_when_owner_inactive?: boolean | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                space_amount?: bigint | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                external_app_user_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise?: (string | null) | undefined
                notify?: boolean | undefined
                name?: string | undefined
                login?: string | undefined
                role?: 'coadmin' | 'user' | undefined
                language?: string | undefined
                is_sync_enabled?: boolean | undefined
                job_title?: string | undefined
                phone?: string | undefined
                address?: string | undefined
                tracking_codes?: TrackingCode[] | undefined
                can_see_managed_users?: boolean | undefined
                timezone?: string | undefined
                is_external_collab_restricted?: boolean | undefined
                is_exempt_from_device_limits?: boolean | undefined
                is_exempt_from_login_verification?: boolean | undefined
                is_password_reset_required?: boolean | undefined
                is_collaborated_content_available_when_owner_inactive?: boolean | undefined
                status?:
                  | 'active'
                  | 'inactive'
                  | 'cannot_delete_edit'
                  | 'cannot_delete_edit_upload'
                  | undefined
                space_amount?: bigint | undefined
                notification_email?: ({ email?: string | undefined } | null) | undefined
                external_app_user_id?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              query: { notify?: boolean | undefined; force?: boolean | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user_id/avatar': {
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
    }
  } & {
    '/users/:user_id/folders/0': {
      $put:
        | {
            input: { param: { user_id: string } } & {
              query: { fields?: string[] | undefined; notify?: boolean | undefined }
            } & { json: { owned_by: { id: string } } }
            output: FolderFull
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
    '/invites': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise: { id: string }
                actionable_by: { login?: string | undefined }
                is_auto_roll_in_enabled?: boolean | undefined
              }
            }
            output: Invite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise: { id: string }
                actionable_by: { login?: string | undefined }
                is_auto_roll_in_enabled?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise: { id: string }
                actionable_by: { login?: string | undefined }
                is_auto_roll_in_enabled?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                enterprise: { id: string }
                actionable_by: { login?: string | undefined }
                is_auto_roll_in_enabled?: boolean | undefined
              }
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
                name: string
                provenance?: string | undefined
                external_sync_identifier?: string | undefined
                description?: string | undefined
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
              }
            }
            output: GroupFull
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                name: string
                provenance?: string | undefined
                external_sync_identifier?: string | undefined
                description?: string | undefined
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
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                name: string
                provenance?: string | undefined
                external_sync_identifier?: string | undefined
                description?: string | undefined
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
      $get:
        | {
            input: { param: { group_id: string } } & { query: { fields?: string[] | undefined } }
            output: GroupFull
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
                name?: string | undefined
                provenance?: string | undefined
                external_sync_identifier?: string | undefined
                description?: string | undefined
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
              }
            }
            output: GroupFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { fields?: string[] | undefined }
            } & {
              json: {
                name?: string | undefined
                provenance?: string | undefined
                external_sync_identifier?: string | undefined
                description?: string | undefined
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
                name?: string | undefined
                provenance?: string | undefined
                external_sync_identifier?: string | undefined
                description?: string | undefined
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
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { group_id: string } }
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
    '/groups/:group_id/collaborations': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: CollaborationsOffsetPaginated
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
    '/group_memberships': {
      $post:
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                user: { id: string }
                group: { id: string }
                role?: 'member' | 'admin' | undefined
                configurable_permissions?: ({ [x: string]: boolean } | null) | undefined
              }
            }
            output: GroupMembership
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                user: { id: string }
                group: { id: string }
                role?: 'member' | 'admin' | undefined
                configurable_permissions?: ({ [x: string]: boolean } | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { fields?: string[] | undefined } } & {
              json: {
                user: { id: string }
                group: { id: string }
                role?: 'member' | 'admin' | undefined
                configurable_permissions?: ({ [x: string]: boolean } | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/group_memberships/:group_membership_id': {
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
                role?: 'member' | 'admin' | undefined
                configurable_permissions?: ({ [x: string]: boolean } | null) | undefined
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
                role?: 'member' | 'admin' | undefined
                configurable_permissions?: ({ [x: string]: boolean } | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                address: string
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
                  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                  | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                  | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                  | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                address: string
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
                  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                  | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                  | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                  | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                address: string
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
                  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                  | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                  | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                  | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                address: string
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
                  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                  | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                  | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                  | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                address: string
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
                  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                  | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                  | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                  | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target: { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                address: string
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
                  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                  | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                  | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                  | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                address?: string | undefined
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
                      | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                      | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                      | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                      | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                address?: string | undefined
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
                      | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                      | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                      | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                      | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                address?: string | undefined
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
                      | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                      | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                      | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                      | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                address?: string | undefined
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
                      | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                      | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                      | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                      | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                address?: string | undefined
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
                      | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                      | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                      | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                      | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
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
                target?:
                  | { id?: string | undefined; type?: 'file' | 'folder' | undefined }
                  | undefined
                address?: string | undefined
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
                      | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED'
                      | 'SIGN_REQUEST.SIGN_SIGNER_SIGNED'
                      | 'SIGN_REQUEST.SIGN_DOCUMENT_CREATED'
                      | 'SIGN_REQUEST.SIGN_ERROR_FINALIZING'
                    )[]
                  | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/skill_invocations/:skill_id': {
      $put:
        | {
            input: { param: { skill_id: string } } & {
              json: {
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                metadata: { cards?: SkillCard[] | undefined }
                file: { type?: 'file' | undefined; id?: string | undefined }
                file_version?:
                  | { type?: 'file_version' | undefined; id?: string | undefined }
                  | undefined
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
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                metadata: { cards?: SkillCard[] | undefined }
                file: { type?: 'file' | undefined; id?: string | undefined }
                file_version?:
                  | { type?: 'file_version' | undefined; id?: string | undefined }
                  | undefined
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
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                metadata: { cards?: SkillCard[] | undefined }
                file: { type?: 'file' | undefined; id?: string | undefined }
                file_version?:
                  | { type?: 'file_version' | undefined; id?: string | undefined }
                  | undefined
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
                status:
                  | 'invoked'
                  | 'processing'
                  | 'success'
                  | 'transient_failure'
                  | 'permanent_failure'
                metadata: { cards?: SkillCard[] | undefined }
                file: { type?: 'file' | undefined; id?: string | undefined }
                file_version?:
                  | { type?: 'file_version' | undefined; id?: string | undefined }
                  | undefined
                usage?: { unit?: string | undefined; value?: number | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events': {
      $options:
        | { input: {}; output: RealtimeServers; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClientError; outputFormat: 'json'; status: 200 }
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
                      | 'ADVANCED_FOLDER_SETTINGS_UPDATE'
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
                      | 'COMMENT_EDIT'
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
                      | 'EMAIL_ALIAS_PRIMARY'
                      | 'EMAIL_ALIAS_REMOVE'
                      | 'EMAIL_UPLOAD_DISABLED'
                      | 'EMAIL_UPLOAD_ENABLED'
                      | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
                      | 'EXTERNAL_COLLAB_SECURITY_SETTINGS'
                      | 'FAILED_LOGIN'
                      | 'FAVORITE'
                      | 'FILE_MARKED_MALICIOUS'
                      | 'FILE_REQUEST_CREATE'
                      | 'FILE_REQUEST_DELETE'
                      | 'FILE_REQUEST_UPDATE'
                      | 'FILE_VERSION_RESTORE'
                      | 'FILE_WATERMARKED_DOWNLOAD'
                      | 'GROUP_ADD_ITEM'
                      | 'GROUP_ADD_USER'
                      | 'GROUP_CREATION'
                      | 'GROUP_DELETION'
                      | 'GROUP_EDITED'
                      | 'GROUP_REMOVE_ITEM'
                      | 'GROUP_REMOVE_USER'
                      | 'ILLEGAL_ITEM_OWNERSHIP_TRANSFER_BY_USER'
                      | 'ITEM_EMAIL_SEND'
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
                      | 'METADATA_CASCADE_POLICY_APPLY'
                      | 'METADATA_CASCADE_POLICY_CREATE'
                      | 'METADATA_INSTANCE_COPY'
                      | 'METADATA_INSTANCE_CREATE'
                      | 'METADATA_INSTANCE_DELETE'
                      | 'METADATA_INSTANCE_UPDATE'
                      | 'METADATA_TEMPLATE_CREATE'
                      | 'METADATA_TEMPLATE_DELETE'
                      | 'METADATA_TEMPLATE_UPDATE'
                      | 'MOVE'
                      | 'NEW_USER'
                      | 'OAUTH2_ACCESS_TOKEN_REVOKE'
                      | 'OAUTH2_REFRESH_TOKEN_REVOKE'
                      | 'PREVIEW'
                      | 'REMOVE_DEVICE_ASSOCIATION'
                      | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
                      | 'RENAME'
                      | 'RETENTION_POLICY_ASSIGNMENT_ADD'
                      | 'SHARE'
                      | 'SHARED_LINK_ONE_TIME_PASSCODE_ACCESS'
                      | 'SHARED_LINK_ONE_TIME_PASSCODE_CHALLENGE'
                      | 'SHARED_LINK_SEND'
                      | 'SHARE_EXPIRATION'
                      | 'SHIELD_ALERT'
                      | 'SHIELD_DOWNLOAD_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_JUSTIFIED'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED'
                      | 'SHIELD_JUSTIFICATION_APPROVAL'
                      | 'SHIELD_PREVIEW_BLOCKED'
                      | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED'
                      | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE'
                      | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE'
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
                      | 'UNFAVORITE'
                      | 'UNLOCK'
                      | 'UNSHARE'
                      | 'UPDATE_COLLABORATION_EXPIRATION'
                      | 'UPDATE_SHARE_EXPIRATION'
                      | 'UPLOAD'
                      | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
                      | 'WATERMARK_LABEL_CREATE'
                      | 'WATERMARK_LABEL_DELETE'
                      | 'WORKFLOW_AUTOMATION_CREATE'
                      | 'WORKFLOW_AUTOMATION_DELETE'
                      | 'WORKFLOW_AUTOMATION_UPDATE'
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
                      | 'ADVANCED_FOLDER_SETTINGS_UPDATE'
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
                      | 'COMMENT_EDIT'
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
                      | 'EMAIL_ALIAS_PRIMARY'
                      | 'EMAIL_ALIAS_REMOVE'
                      | 'EMAIL_UPLOAD_DISABLED'
                      | 'EMAIL_UPLOAD_ENABLED'
                      | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
                      | 'EXTERNAL_COLLAB_SECURITY_SETTINGS'
                      | 'FAILED_LOGIN'
                      | 'FAVORITE'
                      | 'FILE_MARKED_MALICIOUS'
                      | 'FILE_REQUEST_CREATE'
                      | 'FILE_REQUEST_DELETE'
                      | 'FILE_REQUEST_UPDATE'
                      | 'FILE_VERSION_RESTORE'
                      | 'FILE_WATERMARKED_DOWNLOAD'
                      | 'GROUP_ADD_ITEM'
                      | 'GROUP_ADD_USER'
                      | 'GROUP_CREATION'
                      | 'GROUP_DELETION'
                      | 'GROUP_EDITED'
                      | 'GROUP_REMOVE_ITEM'
                      | 'GROUP_REMOVE_USER'
                      | 'ILLEGAL_ITEM_OWNERSHIP_TRANSFER_BY_USER'
                      | 'ITEM_EMAIL_SEND'
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
                      | 'METADATA_CASCADE_POLICY_APPLY'
                      | 'METADATA_CASCADE_POLICY_CREATE'
                      | 'METADATA_INSTANCE_COPY'
                      | 'METADATA_INSTANCE_CREATE'
                      | 'METADATA_INSTANCE_DELETE'
                      | 'METADATA_INSTANCE_UPDATE'
                      | 'METADATA_TEMPLATE_CREATE'
                      | 'METADATA_TEMPLATE_DELETE'
                      | 'METADATA_TEMPLATE_UPDATE'
                      | 'MOVE'
                      | 'NEW_USER'
                      | 'OAUTH2_ACCESS_TOKEN_REVOKE'
                      | 'OAUTH2_REFRESH_TOKEN_REVOKE'
                      | 'PREVIEW'
                      | 'REMOVE_DEVICE_ASSOCIATION'
                      | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
                      | 'RENAME'
                      | 'RETENTION_POLICY_ASSIGNMENT_ADD'
                      | 'SHARE'
                      | 'SHARED_LINK_ONE_TIME_PASSCODE_ACCESS'
                      | 'SHARED_LINK_ONE_TIME_PASSCODE_CHALLENGE'
                      | 'SHARED_LINK_SEND'
                      | 'SHARE_EXPIRATION'
                      | 'SHIELD_ALERT'
                      | 'SHIELD_DOWNLOAD_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_EXTERNAL_COLLAB_ACCESS_JUSTIFIED'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
                      | 'SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED'
                      | 'SHIELD_JUSTIFICATION_APPROVAL'
                      | 'SHIELD_PREVIEW_BLOCKED'
                      | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED'
                      | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE'
                      | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE'
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
                      | 'UNFAVORITE'
                      | 'UNLOCK'
                      | 'UNSHARE'
                      | 'UPDATE_COLLABORATION_EXPIRATION'
                      | 'UPDATE_SHARE_EXPIRATION'
                      | 'UPLOAD'
                      | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
                      | 'WATERMARK_LABEL_CREATE'
                      | 'WATERMARK_LABEL_DELETE'
                      | 'WORKFLOW_AUTOMATION_CREATE'
                      | 'WORKFLOW_AUTOMATION_DELETE'
                      | 'WORKFLOW_AUTOMATION_UPDATE'
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
            output: ItemsOffsetPaginated
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
    '/collections/:collection_id': {
      $get:
        | {
            input: { param: { collection_id: string } }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: string } }
            output: ClientError
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
                policy_name: string
                description?: string | undefined
                policy_type: 'finite' | 'indefinite'
                disposition_action: 'permanently_delete' | 'remove_retention'
                retention_length?: (string | null) | number | undefined
                retention_type?: 'modifiable' | 'non_modifiable' | undefined
                can_owner_extend_retention?: boolean | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
              }
            }
            output: RetentionPolicy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                policy_type: 'finite' | 'indefinite'
                disposition_action: 'permanently_delete' | 'remove_retention'
                retention_length?: (string | null) | number | undefined
                retention_type?: 'modifiable' | 'non_modifiable' | undefined
                can_owner_extend_retention?: boolean | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                policy_type: 'finite' | 'indefinite'
                disposition_action: 'permanently_delete' | 'remove_retention'
                retention_length?: (string | null) | number | undefined
                retention_type?: 'modifiable' | 'non_modifiable' | undefined
                can_owner_extend_retention?: boolean | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                policy_type: 'finite' | 'indefinite'
                disposition_action: 'permanently_delete' | 'remove_retention'
                retention_length?: (string | null) | number | undefined
                retention_type?: 'modifiable' | 'non_modifiable' | undefined
                can_owner_extend_retention?: boolean | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                policy_type: 'finite' | 'indefinite'
                disposition_action: 'permanently_delete' | 'remove_retention'
                retention_length?: (string | null) | number | undefined
                retention_type?: 'modifiable' | 'non_modifiable' | undefined
                can_owner_extend_retention?: boolean | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: boolean | undefined
                custom_notification_recipients?: UserMini[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/retention_policies/:retention_policy_id': {
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
                policy_name?: (string | null) | undefined
                description?: (string | null) | undefined
                disposition_action?:
                  | 'permanently_delete'
                  | 'remove_retention'
                  | (string | null)
                  | undefined
                retention_type?: (string | null) | undefined
                retention_length?: (string | null) | number | undefined
                status?: (string | null) | undefined
                can_owner_extend_retention?: (boolean | null) | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: (boolean | null) | undefined
                custom_notification_recipients?: (UserBase[] | null) | undefined
              }
            }
            output: RetentionPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                policy_name?: (string | null) | undefined
                description?: (string | null) | undefined
                disposition_action?:
                  | 'permanently_delete'
                  | 'remove_retention'
                  | (string | null)
                  | undefined
                retention_type?: (string | null) | undefined
                retention_length?: (string | null) | number | undefined
                status?: (string | null) | undefined
                can_owner_extend_retention?: (boolean | null) | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: (boolean | null) | undefined
                custom_notification_recipients?: (UserBase[] | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                policy_name?: (string | null) | undefined
                description?: (string | null) | undefined
                disposition_action?:
                  | 'permanently_delete'
                  | 'remove_retention'
                  | (string | null)
                  | undefined
                retention_type?: (string | null) | undefined
                retention_length?: (string | null) | number | undefined
                status?: (string | null) | undefined
                can_owner_extend_retention?: (boolean | null) | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: (boolean | null) | undefined
                custom_notification_recipients?: (UserBase[] | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                policy_name?: (string | null) | undefined
                description?: (string | null) | undefined
                disposition_action?:
                  | 'permanently_delete'
                  | 'remove_retention'
                  | (string | null)
                  | undefined
                retention_type?: (string | null) | undefined
                retention_length?: (string | null) | number | undefined
                status?: (string | null) | undefined
                can_owner_extend_retention?: (boolean | null) | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: (boolean | null) | undefined
                custom_notification_recipients?: (UserBase[] | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { retention_policy_id: string } } & {
              json: {
                policy_name?: (string | null) | undefined
                description?: (string | null) | undefined
                disposition_action?:
                  | 'permanently_delete'
                  | 'remove_retention'
                  | (string | null)
                  | undefined
                retention_type?: (string | null) | undefined
                retention_length?: (string | null) | number | undefined
                status?: (string | null) | undefined
                can_owner_extend_retention?: (boolean | null) | undefined
                max_extension_length?: RetentionPolicyMaxExtensionLengthRequest | undefined
                are_owners_notified?: (boolean | null) | undefined
                custom_notification_recipients?: (UserBase[] | null) | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
                policy_id: string
                assign_to: {
                  type: 'enterprise' | 'folder' | 'metadata_template'
                  id?: (string | null) | undefined
                }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
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
                policy_id: string
                assign_to: {
                  type: 'enterprise' | 'folder' | 'metadata_template'
                  id?: (string | null) | undefined
                }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
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
                policy_id: string
                assign_to: {
                  type: 'enterprise' | 'folder' | 'metadata_template'
                  id?: (string | null) | undefined
                }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
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
                policy_id: string
                assign_to: {
                  type: 'enterprise' | 'folder' | 'metadata_template'
                  id?: (string | null) | undefined
                }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
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
                policy_id: string
                assign_to: {
                  type: 'enterprise' | 'folder' | 'metadata_template'
                  id?: (string | null) | undefined
                }
                filter_fields?:
                  | { field?: string | undefined; value?: string | undefined }[]
                  | undefined
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
                policy_name: string
                description?: string | undefined
                filter_started_at?: string | undefined
                filter_ended_at?: string | undefined
                is_ongoing?: boolean | undefined
              }
            }
            output: LegalHoldPolicy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                filter_started_at?: string | undefined
                filter_ended_at?: string | undefined
                is_ongoing?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                filter_started_at?: string | undefined
                filter_ended_at?: string | undefined
                is_ongoing?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                policy_name: string
                description?: string | undefined
                filter_started_at?: string | undefined
                filter_ended_at?: string | undefined
                is_ongoing?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policies/:legal_hold_policy_id': {
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
                policy_name?: string | undefined
                description?: string | undefined
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
                policy_name?: string | undefined
                description?: string | undefined
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
                policy_name?: string | undefined
                description?: string | undefined
                release_notes?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
    }
  } & {
    '/legal_hold_policy_assignments': {
      $get:
        | {
            input: {
              query: {
                policy_id: string
                assign_to_type?:
                  | 'file'
                  | 'file_version'
                  | 'folder'
                  | 'user'
                  | 'ownership'
                  | 'interactions'
                  | 'metadata_template'
                  | undefined
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
                assign_to_type?:
                  | 'file'
                  | 'file_version'
                  | 'folder'
                  | 'user'
                  | 'ownership'
                  | 'interactions'
                  | 'metadata_template'
                  | undefined
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
                policy_id: string
                assign_to: {
                  type:
                    | 'file'
                    | 'file_version'
                    | 'folder'
                    | 'user'
                    | 'ownership'
                    | 'interactions'
                    | 'metadata_template'
                  id: string
                }
                filter_fields?: LegalHoldPolicyAssignmentFilterField[] | undefined
              }
            }
            output: LegalHoldPolicyAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                policy_id: string
                assign_to: {
                  type:
                    | 'file'
                    | 'file_version'
                    | 'folder'
                    | 'user'
                    | 'ownership'
                    | 'interactions'
                    | 'metadata_template'
                  id: string
                }
                filter_fields?: LegalHoldPolicyAssignmentFilterField[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/legal_hold_policy_assignments/:legal_hold_policy_assignment_id': {
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
            output: FilesOnHold
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
            output: FileVersionsOnHold
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
    '/shield_information_barriers': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ShieldInformationBarriers
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
            input: {
              json: { enterprise: { id?: string | undefined; type?: 'enterprise' | undefined } }
            }
            output: ShieldInformationBarrier
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: { enterprise: { id?: string | undefined; type?: 'enterprise' | undefined } }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { enterprise: { id?: string | undefined; type?: 'enterprise' | undefined } }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { enterprise: { id?: string | undefined; type?: 'enterprise' | undefined } }
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
            output: ShieldInformationBarrierReports
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
    '/shield_information_barrier_segments/:shield_information_barrier_segment_id': {
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
      $put:
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
            }
            output: ShieldInformationBarrierSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { shield_information_barrier_segment_id: string } } & {
              json: { name?: string | undefined; description?: (string | null) | undefined }
            }
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
            output: ShieldInformationBarrierSegments
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
                shield_information_barrier: ShieldInformationBarrierBase
                name: string
                description?: string | undefined
              }
            }
            output: ShieldInformationBarrierSegment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                shield_information_barrier: ShieldInformationBarrierBase
                name: string
                description?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                shield_information_barrier: ShieldInformationBarrierBase
                name: string
                description?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                shield_information_barrier: ShieldInformationBarrierBase
                name: string
                description?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segment_members/:shield_information_barrier_segment_member_id': {
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
            output: ShieldInformationBarrierSegmentMembers
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
                type?: 'shield_information_barrier_segment_member' | undefined
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                user: { id: string; type: 'user' }
              }
            }
            output: ShieldInformationBarrierSegmentMember
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                type?: 'shield_information_barrier_segment_member' | undefined
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                user: { id: string; type: 'user' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                type?: 'shield_information_barrier_segment_member' | undefined
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                user: { id: string; type: 'user' }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/shield_information_barrier_segment_restrictions/:shield_information_barrier_segment_restriction_id': {
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
            output: ShieldInformationBarrierSegmentRestrictions
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
                type: 'shield_information_barrier_segment_restriction'
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                restricted_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
              }
            }
            output: ShieldInformationBarrierSegmentRestriction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                type: 'shield_information_barrier_segment_restriction'
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                restricted_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                type: 'shield_information_barrier_segment_restriction'
                shield_information_barrier?: ShieldInformationBarrierBase | undefined
                shield_information_barrier_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
                restricted_segment: {
                  id?: string | undefined
                  type?: 'shield_information_barrier_segment' | undefined
                }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/device_pinners/:device_pinner_id': {
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
                tos_type?: 'external' | 'managed' | undefined
                text: string
              }
            }
            output: TermsOfService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                status: 'enabled' | 'disabled'
                tos_type?: 'external' | 'managed' | undefined
                text: string
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
                tos: { type: 'terms_of_service'; id: string }
                user: { type: 'user'; id: string }
                is_accepted: boolean
              }
            }
            output: TermsOfServiceUserStatus
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                tos: { type: 'terms_of_service'; id: string }
                user: { type: 'user'; id: string }
                is_accepted: boolean
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
            input: { json: { domain: string; direction: 'inbound' | 'outbound' | 'both' } }
            output: CollaborationAllowlistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { domain: string; direction: 'inbound' | 'outbound' | 'both' } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collaboration_whitelist_entries/:collaboration_whitelist_entry_id': {
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
                storage_policy: { type: 'storage_policy'; id: string }
                assigned_to: { type: 'user' | 'enterprise'; id: string }
              }
            }
            output: StoragePolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                storage_policy: { type: 'storage_policy'; id: string }
                assigned_to: { type: 'user' | 'enterprise'; id: string }
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/storage_policy_assignments/:storage_policy_assignment_id': {
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
              json: { storage_policy: { type: 'storage_policy'; id: string } }
            }
            output: StoragePolicyAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { storage_policy_assignment_id: string } } & {
              json: { storage_policy: { type: 'storage_policy'; id: string } }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
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
  } & {
    '/sign_requests/:sign_request_id/cancel': {
      $post:
        | {
            input: { param: { sign_request_id: string } } & { json: SignRequestCancelRequest }
            output: SignRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sign_request_id: string } } & { json: SignRequestCancelRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sign_request_id: string } } & { json: SignRequestCancelRequest }
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
    '/sign_requests': {
      $get:
        | {
            input: {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                senders?: string[] | undefined
                shared_requests?: boolean | undefined
              }
            }
            output: SignRequests
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                senders?: string[] | undefined
                shared_requests?: boolean | undefined
              }
            }
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
                type?: 'workflow_parameters' | undefined
                flow: { type?: string | undefined; id?: string | undefined }
                files: { type?: 'file' | undefined; id?: string | undefined }[]
                folder: { type?: 'folder' | undefined; id?: string | undefined }
                outcomes?: Outcome[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                type?: 'workflow_parameters' | undefined
                flow: { type?: string | undefined; id?: string | undefined }
                files: { type?: 'file' | undefined; id?: string | undefined }[]
                folder: { type?: 'folder' | undefined; id?: string | undefined }
                outcomes?: Outcome[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                type?: 'workflow_parameters' | undefined
                flow: { type?: string | undefined; id?: string | undefined }
                files: { type?: 'file' | undefined; id?: string | undefined }[]
                folder: { type?: 'folder' | undefined; id?: string | undefined }
                outcomes?: Outcome[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                type?: 'workflow_parameters' | undefined
                flow: { type?: string | undefined; id?: string | undefined }
                files: { type?: 'file' | undefined; id?: string | undefined }[]
                folder: { type?: 'folder' | undefined; id?: string | undefined }
                outcomes?: Outcome[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflow_id: string } } & {
              json: {
                type?: 'workflow_parameters' | undefined
                flow: { type?: string | undefined; id?: string | undefined }
                files: { type?: 'file' | undefined; id?: string | undefined }[]
                folder: { type?: 'folder' | undefined; id?: string | undefined }
                outcomes?: Outcome[] | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sign_templates': {
      $get:
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: SignTemplates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { marker?: string | undefined; limit?: bigint | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sign_templates/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: SignTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/integration_mappings/slack': {
      $get:
        | {
            input: {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                partner_item_type?: 'channel' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
                is_manually_created?: boolean | undefined
              }
            }
            output: IntegrationMappings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                partner_item_type?: 'channel' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
                is_manually_created?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                partner_item_type?: 'channel' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
                is_manually_created?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                limit?: bigint | undefined
                partner_item_type?: 'channel' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
                is_manually_created?: boolean | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: IntegrationMappingSlackCreateRequest }
            output: IntegrationMapping
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IntegrationMappingSlackCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IntegrationMappingSlackCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IntegrationMappingSlackCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/integration_mappings/slack/:integration_mapping_id': {
      $put:
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: {
                box_item?: { type: 'folder'; id: string } | undefined
                options?: { is_access_management_disabled?: boolean | undefined } | undefined
              }
            }
            output: IntegrationMapping
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: {
                box_item?: { type: 'folder'; id: string } | undefined
                options?: { is_access_management_disabled?: boolean | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: {
                box_item?: { type: 'folder'; id: string } | undefined
                options?: { is_access_management_disabled?: boolean | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: {
                box_item?: { type: 'folder'; id: string } | undefined
                options?: { is_access_management_disabled?: boolean | undefined } | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { integration_mapping_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integration_mapping_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integration_mapping_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/integration_mappings/teams': {
      $get:
        | {
            input: {
              query: {
                partner_item_type?: 'channel' | 'team' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
              }
            }
            output: IntegrationMappingsTeams
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                partner_item_type?: 'channel' | 'team' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                partner_item_type?: 'channel' | 'team' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                partner_item_type?: 'channel' | 'team' | undefined
                partner_item_id?: string | undefined
                box_item_id?: string | undefined
                box_item_type?: 'folder' | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: IntegrationMappingTeamsCreateRequest }
            output: IntegrationMappingTeams
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IntegrationMappingTeamsCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IntegrationMappingTeamsCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IntegrationMappingTeamsCreateRequest }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/integration_mappings/teams/:integration_mapping_id': {
      $put:
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: { box_item?: { type: 'folder'; id: string } | undefined }
            }
            output: IntegrationMappingTeams
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: { box_item?: { type: 'folder'; id: string } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: { box_item?: { type: 'folder'; id: string } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integration_mapping_id: string } } & {
              json: { box_item?: { type: 'folder'; id: string } | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { integration_mapping_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integration_mapping_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integration_mapping_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ai/ask': {
      $post:
        | { input: { json: AiAsk }; output: AiResponseFull; outputFormat: 'json'; status: 200 }
        | { input: { json: AiAsk }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: AiAsk }; output: ClientError; outputFormat: 'json'; status: 500 }
        | { input: { json: AiAsk }; output: ClientError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ai/text_gen': {
      $post:
        | { input: { json: AiTextGen }; output: AiResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: AiTextGen }; output: ClientError; outputFormat: 'json'; status: 500 }
        | { input: { json: AiTextGen }; output: ClientError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ai_agent_default': {
      $get:
        | {
            input: {
              query: {
                mode: 'ask' | 'text_gen' | 'extract' | 'extract_structured'
                language?: string | undefined
                model?: string | undefined
              }
            }
            output: AiAgent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                mode: 'ask' | 'text_gen' | 'extract' | 'extract_structured'
                language?: string | undefined
                model?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                mode: 'ask' | 'text_gen' | 'extract' | 'extract_structured'
                language?: string | undefined
                model?: string | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ai/extract': {
      $post:
        | { input: { json: AiExtract }; output: AiResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: AiExtract }; output: ClientError; outputFormat: 'json'; status: 422 }
        | { input: { json: AiExtract }; output: ClientError; outputFormat: 'json'; status: 500 }
        | { input: { json: AiExtract }; output: ClientError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ai/extract_structured': {
      $post:
        | {
            input: { json: AiExtractStructured }
            output: AiExtractStructuredResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AiExtractStructured }
            output: ClientError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AiExtractStructured }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: AiExtractStructured }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ai_agents': {
      $get:
        | {
            input: {
              query: {
                mode?: string[] | undefined
                fields?: string[] | undefined
                agent_state?: string[] | undefined
                include_box_default?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: AiMultipleAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                mode?: string[] | undefined
                fields?: string[] | undefined
                agent_state?: string[] | undefined
                include_box_default?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                mode?: string[] | undefined
                fields?: string[] | undefined
                agent_state?: string[] | undefined
                include_box_default?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateAiAgent }
            output: AiSingleAgentResponseFull
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateAiAgent }; output: ClientError; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateAiAgent }; output: ClientError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/ai_agents/:agent_id': {
      $put:
        | {
            input: { param: { agent_id: string } } & { json: CreateAiAgent }
            output: AiSingleAgentResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { json: CreateAiAgent }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } } & { json: CreateAiAgent }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { agent_id: string } } & { query: { fields?: string[] | undefined } }
            output: AiSingleAgentResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } } & { query: { fields?: string[] | undefined } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { agent_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata_taxonomies': {
      $post:
        | {
            input: { json: { key?: string | undefined; displayName: string; namespace: string } }
            output: MetadataTaxonomy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { key?: string | undefined; displayName: string; namespace: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { key?: string | undefined; displayName: string; namespace: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { key?: string | undefined; displayName: string; namespace: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: MetadataTaxonomies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string } } & {
              query: { marker?: string | undefined; limit?: bigint | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key': {
      $get:
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: MetadataTaxonomy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string }
            }
            output: MetadataTaxonomy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels': {
      $post:
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: MetadataTaxonomyLevel[]
            }
            output: MetadataTaxonomyLevels
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: MetadataTaxonomyLevel[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: MetadataTaxonomyLevel[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: MetadataTaxonomyLevel[]
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels/:level_index': {
      $patch:
        | {
            input: { param: { namespace: string; taxonomy_key: string; level_index: number } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: MetadataTaxonomyLevel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; level_index: number } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; level_index: number } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; level_index: number } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels:append': {
      $post:
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: MetadataTaxonomyLevels
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; description?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key/levels:trim': {
      $post:
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: MetadataTaxonomyLevels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes': {
      $get:
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              query: {
                level?: number[] | undefined
                parent?: string[] | undefined
                ancestor?: string[] | undefined
                query?: string | undefined
                'include-total-result-count'?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: MetadataTaxonomyNodes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              query: {
                level?: number[] | undefined
                parent?: string[] | undefined
                ancestor?: string[] | undefined
                query?: string | undefined
                'include-total-result-count'?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              query: {
                level?: number[] | undefined
                parent?: string[] | undefined
                ancestor?: string[] | undefined
                query?: string | undefined
                'include-total-result-count'?: boolean | undefined
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
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; level: number; parentId?: string | undefined }
            }
            output: MetadataTaxonomyNode
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; level: number; parentId?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; level: number; parentId?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string } } & {
              json: { displayName: string; level: number; parentId?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_taxonomies/:namespace/:taxonomy_key/nodes/:node_id': {
      $get:
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: MetadataTaxonomyNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } } & {
              json: { displayName?: string | undefined }
            }
            output: MetadataTaxonomyNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } } & {
              json: { displayName?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } } & {
              json: { displayName?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } } & {
              json: { displayName?: string | undefined }
            }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { namespace: string; taxonomy_key: string; node_id: string } }
            output: ClientError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata_templates/:namespace/:template_key/fields/:field_key/options': {
      $get:
        | {
            input: { param: { namespace: string; template_key: string; field_key: string } } & {
              query: {
                level?: number[] | undefined
                parent?: string[] | undefined
                ancestor?: string[] | undefined
                query?: string | undefined
                'include-total-result-count'?: boolean | undefined
                'only-selectable-options'?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: MetadataTaxonomyNodes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; template_key: string; field_key: string } } & {
              query: {
                level?: number[] | undefined
                parent?: string[] | undefined
                ancestor?: string[] | undefined
                query?: string | undefined
                'include-total-result-count'?: boolean | undefined
                'only-selectable-options'?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: ClientError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { namespace: string; template_key: string; field_key: string } } & {
              query: {
                level?: number[] | undefined
                parent?: string[] | undefined
                ancestor?: string[] | undefined
                query?: string | undefined
                'include-total-result-count'?: boolean | undefined
                'only-selectable-options'?: boolean | undefined
                marker?: string | undefined
                limit?: bigint | undefined
              }
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
