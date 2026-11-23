type AssetWriteRequest = { guide_id: number; file: File }
type BasicUser = {
  url?: string | undefined
  id?: number | undefined
  username: string
  first_name?: string | undefined
  last_name?: string | undefined
}
type AssetRead = {
  uuid?: string | undefined
  filename: string
  created_date?: string | undefined
  owner?: BasicUser | undefined
  guide_id?: number | undefined
}
type AccessTokenRead = {
  id?: number | undefined
  name?: string | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  expiry_date?: (string | null) | undefined
  last_used_date?: (string | null) | undefined
  read_only?: boolean | undefined
  owner?: BasicUser | undefined
  value?: string | undefined
}
type PaginatedAccessTokenReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: AccessTokenRead[]
}
type AccessTokenWriteRequest = {
  name: string
  expiry_date?: (string | null) | undefined
  read_only?: boolean | undefined
}
type PatchedAccessTokenWriteRequest = {
  name?: string | undefined
  expiry_date?: (string | null) | undefined
  read_only?: boolean | undefined
}
type LoginSerializerExRequest = {
  username?: string | undefined
  email?: string | undefined
  password: string
}
type Token = { key: string }
type RestAuthDetail = { detail?: string | undefined }
type PasswordChangeRequest = { old_password: string; new_password1: string; new_password2: string }
type PasswordResetSerializerExRequest = { email: string }
type PasswordResetConfirmRequest = {
  new_password1: string
  new_password2: string
  uid: string
  token: string
}
type RegisterSerializerExRequest = {
  username: string
  email?: string | undefined
  password1: string
  password2: string
  first_name?: string | undefined
  last_name?: string | undefined
}
type RegisterSerializerEx = {
  username: string
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  email_verification_required?: boolean | undefined
  key?: (string | null) | undefined
}
type ProviderTypeEnum = 'AWS_S3_BUCKET' | 'AZURE_CONTAINER' | 'GOOGLE_CLOUD_STORAGE'
type CredentialsTypeEnum =
  | 'KEY_SECRET_KEY_PAIR'
  | 'ACCOUNT_NAME_TOKEN_PAIR'
  | 'KEY_FILE_PATH'
  | 'ANONYMOUS_ACCESS'
  | 'CONNECTION_STRING'
type CloudStorageRead = {
  id?: number | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  manifests?: string[] | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  provider_type: ProviderTypeEnum
  resource: string
  display_name: string
  credentials_type: CredentialsTypeEnum
  specific_attributes?: string | undefined
  description?: string | undefined
  organization?: (number | null) | undefined
}
type PaginatedCloudStorageReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: CloudStorageRead[]
}
type BasicUserRequest = {
  username: string
  first_name?: string | undefined
  last_name?: string | undefined
}
type CloudStorageWriteRequest = {
  provider_type: ProviderTypeEnum
  resource: string
  display_name: string
  owner?: BasicUserRequest | undefined
  credentials_type: CredentialsTypeEnum
  session_token?: string | undefined
  account_name?: string | undefined
  key?: string | undefined
  secret_key?: string | undefined
  connection_string?: string | undefined
  key_file?: File | undefined
  specific_attributes?: string | undefined
  description?: string | undefined
  manifests?: string[] | undefined
}
type PatchedCloudStorageWriteRequest = {
  provider_type?: ProviderTypeEnum | undefined
  resource?: string | undefined
  display_name?: string | undefined
  owner?: BasicUserRequest | undefined
  credentials_type?: CredentialsTypeEnum | undefined
  session_token?: string | undefined
  account_name?: string | undefined
  key?: string | undefined
  secret_key?: string | undefined
  connection_string?: string | undefined
  key_file?: File | undefined
  specific_attributes?: string | undefined
  description?: string | undefined
  manifests?: string[] | undefined
}
type FileInfoTypeEnum = 'REG' | 'DIR'
type FileInfo = { name: string; type: FileInfoTypeEnum; mime_type: string }
type CloudStorageContent = { next?: (string | null) | undefined; content: FileInfo[] }
type CommentRead = {
  id?: number | undefined
  issue?: number | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  message?: string | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
}
type PaginatedCommentReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: CommentRead[]
}
type CommentWriteRequest = { issue: number; message?: string | undefined }
type PatchedCommentWriteRequest = { message?: string | undefined }
type ConsensusMergeCreateRequest = { task_id?: number | undefined; job_id?: number | undefined }
type RqId = { rq_id: string }
type ConsensusSettings = {
  id?: number | undefined
  task_id?: number | undefined
  iou_threshold?: number | undefined
}
type PaginatedConsensusSettingsList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ConsensusSettings[]
}
type PatchedConsensusSettingsRequest = { iou_threshold?: number | undefined }
type EventRequest = {
  scope: string
  obj_name?: (string | null) | undefined
  obj_id?: (number | null) | undefined
  obj_val?: (string | null) | undefined
  source?: (string | null) | undefined
  timestamp: string
  count?: (number | null) | undefined
  duration?: number | undefined
  project_id?: (number | null) | undefined
  task_id?: (number | null) | undefined
  job_id?: (number | null) | undefined
  user_id?: (number | null) | undefined
  user_name?: (string | null) | undefined
  user_email?: (string | null) | undefined
  org_id?: (number | null) | undefined
  org_slug?: (string | null) | undefined
  payload?: (string | null) | undefined
}
type ClientEventsRequest = {
  events?: EventRequest[] | undefined
  previous_event?:
    | {
        scope: string
        obj_name?: (string | null) | undefined
        obj_id?: (number | null) | undefined
        obj_val?: (string | null) | undefined
        source?: (string | null) | undefined
        timestamp: string
        count?: (number | null) | undefined
        duration?: number | undefined
        project_id?: (number | null) | undefined
        task_id?: (number | null) | undefined
        job_id?: (number | null) | undefined
        user_id?: (number | null) | undefined
        user_name?: (string | null) | undefined
        user_email?: (string | null) | undefined
        org_id?: (number | null) | undefined
        org_slug?: (string | null) | undefined
        payload?: (string | null) | undefined
      }
    | undefined
  timestamp: string
}
type Event = {
  scope: string
  obj_name?: (string | null) | undefined
  obj_id?: (number | null) | undefined
  obj_val?: (string | null) | undefined
  source?: (string | null) | undefined
  timestamp: string
  count?: (number | null) | undefined
  duration?: number | undefined
  project_id?: (number | null) | undefined
  task_id?: (number | null) | undefined
  job_id?: (number | null) | undefined
  user_id?: (number | null) | undefined
  user_name?: (string | null) | undefined
  user_email?: (string | null) | undefined
  org_id?: (number | null) | undefined
  org_slug?: (string | null) | undefined
  payload?: (string | null) | undefined
}
type ClientEvents = { events?: Event[] | undefined; timestamp: string }
type UserGrowthData = {
  id?: number | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  github_prompt_shown?: boolean | undefined
  github_prompt_support_clicked?: boolean | undefined
  github_prompt_enabled?: boolean | undefined
  promotion_notifications_allowed?: boolean | undefined
}
type PaginatedUserGrowthDataList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: UserGrowthData[]
}
type PatchedUserGrowthDataRequest = {
  github_prompt_shown?: boolean | undefined
  github_prompt_support_clicked?: boolean | undefined
  promotion_notifications_allowed?: boolean | undefined
}
type AnnotationGuideWriteRequest = {
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  markdown?: string | undefined
}
type AnnotationGuideRead = {
  id?: number | undefined
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  markdown?: string | undefined
}
type PatchedAnnotationGuideWriteRequest = {
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  markdown?: string | undefined
}
type RoleEnum = 'worker' | 'supervisor' | 'maintainer' | 'owner'
type BasicOrganization = { id?: number | undefined; slug?: string | undefined }
type InvitationRead = {
  key?: string | undefined
  created_date?: string | undefined
  owner: {
    url?: string | undefined
    id?: number | undefined
    username: string
    first_name?: string | undefined
    last_name?: string | undefined
  }
  role: RoleEnum
  user: BasicUser
  organization: number
  expired?: (boolean | null) | undefined
  accepted?: boolean | undefined
  organization_info: BasicOrganization
}
type PaginatedInvitationReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: InvitationRead[]
}
type InvitationWriteRequest = { role: RoleEnum; email: string }
type AcceptInvitationRead = { organization_slug: string }
type CommentsSummary = { count?: number | undefined; url?: string | undefined }
type IssueRead = {
  id?: number | undefined
  frame?: number | undefined
  position: number[]
  job?: number | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  assignee?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  created_date?: (string | null) | undefined
  updated_date?: (string | null) | undefined
  resolved?: boolean | undefined
  comments: CommentsSummary
}
type PaginatedIssueReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: IssueRead[]
}
type IssueWriteRequest = {
  frame: number
  position: number[]
  job: number
  assignee?: (number | null) | undefined
  message: string
  resolved?: boolean | undefined
}
type PatchedIssueWriteRequest = {
  position?: number[] | undefined
  assignee?: (number | null) | undefined
  resolved?: boolean | undefined
}
type IssuesSummary = { url?: string | undefined; count?: number | undefined }
type LabelsSummary = { url?: string | undefined }
type LocationEnum = 'cloud_storage' | 'local'
type JobRead = {
  url?: string | undefined
  id?: number | undefined
  task_id?: number | undefined
  task_name?: (string | null) | undefined
  project_id?: (number | null) | undefined
  project_name?: (string | null) | undefined
  assignee?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  guide_id?: (number | null) | undefined
  dimension?: string | undefined
  mode?: string | undefined
  media_type?: string | undefined
  bug_tracker?: (string | null) | undefined
  status?: {} | undefined
  stage?: {} | undefined
  state?: {} | undefined
  frame_count?: number | undefined
  start_frame?: number | undefined
  stop_frame?: number | undefined
  data_chunk_size?: (number | null) | undefined
  data_compressed_chunk_type?: {} | undefined
  data_original_chunk_type?: {} | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  issues: IssuesSummary
  labels: LabelsSummary
  type?: {} | undefined
  organization?: (number | null) | undefined
  target_storage?:
    | {
        id?: number | undefined
        location?: LocationEnum | undefined
        cloud_storage_id?: (number | null) | undefined
      }
    | undefined
  source_storage?:
    | {
        id?: number | undefined
        location?: LocationEnum | undefined
        cloud_storage_id?: (number | null) | undefined
      }
    | undefined
  assignee_updated_date?: (string | null) | undefined
  parent_job_id?: (number | null) | undefined
  replicas_count?: number | undefined
}
type PaginatedJobReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: JobRead[]
}
type GroundTruthJobCreateTypeEnum = 'ground_truth'
type FrameSelectionMethod = 'random_uniform' | 'random_per_job' | 'manual'
type GroundTruthJobCreateRequest = {
  assignee?: (number | null) | undefined
  type: GroundTruthJobCreateTypeEnum
  task_id: number
  frame_selection_method?: FrameSelectionMethod | undefined
  frames?: number[] | undefined
  frame_count?: number | undefined
  frame_share?: number | undefined
  frames_per_job_count?: number | undefined
  frames_per_job_share?: number | undefined
  random_seed?: number | undefined
}
type ReplicaJobCreateTypeEnum = 'replica'
type ReplicaJobCreateRequest = {
  assignee?: (number | null) | undefined
  type: ReplicaJobCreateTypeEnum
  task_id: number
  parent_job_id: number
}
type JobWriteRequest = GroundTruthJobCreateRequest | ReplicaJobCreateRequest
type JobStage = 'annotation' | 'validation' | 'acceptance'
type OperationStatus = 'new' | 'in progress' | 'completed' | 'rejected'
type PatchedJobWriteRequest = {
  assignee?: (number | null) | undefined
  stage?: JobStage | undefined
  state?: OperationStatus | undefined
}
type AttributeVal = { spec_id: number; value: string }
type LabeledImage = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeVal[] | undefined
}
type ShapeType =
  | 'rectangle'
  | 'polygon'
  | 'polyline'
  | 'points'
  | 'ellipse'
  | 'cuboid'
  | 'mask'
  | 'skeleton'
type SubLabeledShape = {
  type: ShapeType
  occluded?: boolean | undefined
  outside?: boolean | undefined
  z_order?: number | undefined
  rotation?: number | undefined
  points?: number[] | undefined
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeVal[] | undefined
  score?: number | undefined
}
type LabeledShape = {
  type: ShapeType
  occluded?: boolean | undefined
  outside?: boolean | undefined
  z_order?: number | undefined
  rotation?: number | undefined
  points?: number[] | undefined
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeVal[] | undefined
  score?: number | undefined
  elements?: SubLabeledShape[] | undefined
}
type TrackedShape = {
  type: ShapeType
  occluded?: boolean | undefined
  outside?: boolean | undefined
  z_order?: number | undefined
  rotation?: number | undefined
  points?: number[] | undefined
  attributes?: AttributeVal[] | undefined
  id?: (number | null) | undefined
  frame: number
}
type SubLabeledTrack = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeVal[] | undefined
  shapes: TrackedShape[]
}
type LabeledTrack = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeVal[] | undefined
  shapes: TrackedShape[]
  elements?: SubLabeledTrack[] | undefined
}
type LabeledInterval = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  attributes?: AttributeVal[] | undefined
  score?: number | undefined
  start: number
  stop: number | null
}
type LabeledData = {
  version?: number | undefined
  tags?: LabeledImage[] | undefined
  shapes?: LabeledShape[] | undefined
  tracks?: LabeledTrack[] | undefined
  intervals?: LabeledInterval[] | undefined
}
type AnnotationFileRequest = { annotation_file: File }
type AttributeValRequest = { spec_id: number; value: string }
type LabeledImageRequest = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeValRequest[] | undefined
}
type SubLabeledShapeRequest = {
  type: ShapeType
  occluded?: boolean | undefined
  outside?: boolean | undefined
  z_order?: number | undefined
  rotation?: number | undefined
  points?: number[] | undefined
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeValRequest[] | undefined
  score?: number | undefined
}
type LabeledShapeRequest = {
  type: ShapeType
  occluded?: boolean | undefined
  outside?: boolean | undefined
  z_order?: number | undefined
  rotation?: number | undefined
  points?: number[] | undefined
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeValRequest[] | undefined
  score?: number | undefined
  elements?: SubLabeledShapeRequest[] | undefined
}
type TrackedShapeRequest = {
  type: ShapeType
  occluded?: boolean | undefined
  outside?: boolean | undefined
  z_order?: number | undefined
  rotation?: number | undefined
  points?: number[] | undefined
  attributes?: AttributeValRequest[] | undefined
  id?: (number | null) | undefined
  frame: number
}
type SubLabeledTrackRequest = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeValRequest[] | undefined
  shapes: TrackedShapeRequest[]
}
type LabeledTrackRequest = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  frame: number
  attributes?: AttributeValRequest[] | undefined
  shapes: TrackedShapeRequest[]
  elements?: SubLabeledTrackRequest[] | undefined
}
type LabeledIntervalRequest = {
  id?: (number | null) | undefined
  label_id: number
  group?: (number | null) | undefined
  source?: string | undefined
  attributes?: AttributeValRequest[] | undefined
  score?: number | undefined
  start: number
  stop: number | null
}
type LabeledDataRequest = {
  version?: number | undefined
  tags?: LabeledImageRequest[] | undefined
  shapes?: LabeledShapeRequest[] | undefined
  tracks?: LabeledTrackRequest[] | undefined
  intervals?: LabeledIntervalRequest[] | undefined
}
type PatchedLabeledDataRequest = {
  version?: number | undefined
  tags?: LabeledImageRequest[] | undefined
  shapes?: LabeledShapeRequest[] | undefined
  tracks?: LabeledTrackRequest[] | undefined
  intervals?: LabeledIntervalRequest[] | undefined
}
type ChapterMetadata = { title?: string | undefined }
type Chapter = { id: number; start: number; stop: number; metadata: ChapterMetadata }
type FileMetadata = { name: string; type?: {} | undefined }
type RelatedImageMetadata = {
  name: string
  type?: {} | undefined
  intrinsic_matrix?: number[][] | undefined
  extrinsic_matrix?: number[][] | undefined
}
type RelatedFileMetadata = FileMetadata | RelatedImageMetadata
type FrameMeta = {
  width?: number | undefined
  height?: number | undefined
  name: string
  related_files: number
  related_files_metadata?: RelatedFileMetadata[] | undefined
  has_related_context?: boolean | undefined
}
type DataMetaRead = {
  chapters?: (Chapter[] | null) | undefined
  chunks_updated_date: string
  chunk_size?: (number | null) | undefined
  size?: number | undefined
  image_quality?: number | undefined
  start_frame?: number | undefined
  stop_frame?: number | undefined
  frame_filter?: string | undefined
  frames: FrameMeta[] | null
  deleted_frames: number[]
  included_frames?: (number[] | null) | undefined
  storage?: {} | undefined
  cloud_storage_id?: (number | null) | undefined
}
type PatchedJobDataMetaWriteRequest = { deleted_frames?: number[] | undefined }
type JobValidationLayoutRead = {
  honeypot_count?: number | undefined
  honeypot_frames?: number[] | undefined
  honeypot_real_frames?: number[] | undefined
}
type PatchedJobValidationLayoutWriteRequest = {
  frame_selection_method?: {} | undefined
  honeypot_real_frames?: number[] | undefined
}
type InputTypeEnum = 'checkbox' | 'radio' | 'number' | 'text' | 'select'
type Attribute = {
  id?: number | undefined
  name: string
  mutable: boolean
  input_type: InputTypeEnum
  default_value?: string | undefined
  values: string[]
}
type Sublabel = {
  id?: number | undefined
  name: string
  color?: string | undefined
  attributes?: Attribute[] | undefined
  type?: {} | undefined
  has_parent?: boolean | undefined
}
type Label = {
  id?: number | undefined
  name: string
  color?: string | undefined
  attributes?: Attribute[] | undefined
  type?: {} | undefined
  svg?: string | undefined
  sublabels?: Sublabel[] | undefined
  project_id?: (number | null) | undefined
  task_id?: (number | null) | undefined
  parent_id?: (number | null) | undefined
  has_parent?: boolean | undefined
}
type PaginatedLabelList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: Label[]
}
type AttributeRequest = {
  id?: number | undefined
  name: string
  mutable: boolean
  input_type: InputTypeEnum
  default_value?: string | undefined
  values: string[]
  deleted?: boolean | undefined
}
type SublabelRequest = {
  id?: number | undefined
  name: string
  color?: string | undefined
  attributes?: AttributeRequest[] | undefined
  type?: {} | undefined
  has_parent?: boolean | undefined
}
type PatchedLabelRequest = {
  id?: number | undefined
  name?: string | undefined
  color?: string | undefined
  attributes?: AttributeRequest[] | undefined
  deleted?: boolean | undefined
  type?: {} | undefined
  svg?: string | undefined
  sublabels?: SublabelRequest[] | undefined
}
type OnlineFunctionCallRequest = { job?: number | undefined; task?: number | undefined }
type FunctionCallParams = {
  id: string | null
  task: number | null
  job?: number | undefined
  threshold: number | null
}
type FunctionCall = {
  id: string
  function: FunctionCallParams
  status: string | null
  progress?: (number | null) | undefined
  enqueued: string | null
  started: string | null
  ended: string | null
  exc_info?: (string | null) | undefined
}
type SublabelMappingEntryRequest = {
  name: string
  attributes?: { [x: string]: string } | undefined
}
type LabelMappingEntryRequest = {
  name: string
  attributes?: { [x: string]: string } | undefined
  sublabels?: { [x: string]: SublabelMappingEntryRequest } | undefined
}
type FunctionCallRequest = {
  function: string
  task: number
  job?: number | undefined
  max_distance?: number | undefined
  threshold?: number | undefined
  cleanup?: boolean | undefined
  convMaskToPoly?: boolean | undefined
  conv_mask_to_poly?: boolean | undefined
  mapping?: { [x: string]: LabelMappingEntryRequest } | undefined
  roi?: number[] | undefined
}
type MembershipRead = {
  id?: number | undefined
  user: BasicUser
  organization?: number | undefined
  is_active?: boolean | undefined
  joined_date?: (string | null) | undefined
  role?: {} | undefined
  invitation?: (string | null) | undefined
}
type PaginatedMembershipReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MembershipRead[]
}
type PatchedMembershipWriteRequest = { role?: RoleEnum | undefined }
type OrganizationRead = {
  id?: number | undefined
  slug?: string | undefined
  name?: string | undefined
  description?: string | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  contact?: { [x: string]: unknown } | undefined
  owner: {
    url?: string | undefined
    id?: number | undefined
    username: string
    first_name?: string | undefined
    last_name?: string | undefined
  }
}
type PaginatedOrganizationReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: OrganizationRead[]
}
type OrganizationWriteRequest = {
  slug: string
  name?: string | undefined
  description?: string | undefined
  contact?: { [x: string]: unknown } | undefined
}
type PatchedOrganizationWriteRequest = {
  slug?: string | undefined
  name?: string | undefined
  description?: string | undefined
  contact?: { [x: string]: unknown } | undefined
}
type TasksSummary = { count?: number | undefined; url?: string | undefined }
type ProjectRead = {
  url?: string | undefined
  id?: number | undefined
  name?: string | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  assignee?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  guide_id?: (number | null) | undefined
  bug_tracker?: string | undefined
  task_subsets?: string[] | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  status?: {} | undefined
  dimension?: (string | null) | undefined
  organization?: (number | null) | undefined
  organization_id?: (number | null) | undefined
  target_storage?:
    | {
        id?: number | undefined
        location?: LocationEnum | undefined
        cloud_storage_id?: (number | null) | undefined
      }
    | undefined
  source_storage?:
    | {
        id?: number | undefined
        location?: LocationEnum | undefined
        cloud_storage_id?: (number | null) | undefined
      }
    | undefined
  tasks: TasksSummary
  labels: LabelsSummary
  assignee_updated_date?: (string | null) | undefined
}
type PaginatedProjectReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ProjectRead[]
}
type ProjectWriteRequest = {
  name: string
  labels?: PatchedLabelRequest[] | undefined
  owner_id?: (number | null) | undefined
  assignee_id?: (number | null) | undefined
  bug_tracker?: string | undefined
  target_storage?:
    | { location?: LocationEnum | undefined; cloud_storage_id?: (number | null) | undefined }
    | undefined
  source_storage?:
    | { location?: LocationEnum | undefined; cloud_storage_id?: (number | null) | undefined }
    | undefined
}
type PatchedProjectWriteRequest = {
  name?: string | undefined
  labels?: PatchedLabelRequest[] | undefined
  owner_id?: (number | null) | undefined
  assignee_id?: (number | null) | undefined
  bug_tracker?: string | undefined
  target_storage?:
    | { location?: LocationEnum | undefined; cloud_storage_id?: (number | null) | undefined }
    | undefined
  source_storage?:
    | { location?: LocationEnum | undefined; cloud_storage_id?: (number | null) | undefined }
    | undefined
  organization_id?: (number | null) | undefined
}
type DatasetFileRequest = { dataset_file: File }
type ProjectFileRequest = { project_file: File }
type NullEnum = null
type AnnotationId = {
  obj_id?: number | undefined
  job_id?: number | undefined
  type?: {} | undefined
  shape_type?: ShapeType | NullEnum | undefined
}
type AnnotationConflictRequirement = { id?: number | undefined; name?: string | undefined }
type AnnotationConflict = {
  id?: number | undefined
  frame?: number | undefined
  type?: {} | undefined
  annotation_ids: AnnotationId[]
  report_id?: number | undefined
  severity?: {} | undefined
  attribute_names?: string[] | undefined
  requirements?: AnnotationConflictRequirement[] | undefined
}
type PaginatedAnnotationConflictList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: AnnotationConflict[]
}
type QualityReportTarget = 'job' | 'task' | 'project'
type QualityTargetMetric =
  | 'accuracy'
  | 'precision'
  | 'recall'
  | 'jaccard_index'
  | 'dice'
  | 'mean_accuracy'
  | 'mean_precision'
  | 'mean_recall'
  | 'mean_jaccard_index'
  | 'mean_dice'
  | 'label_accuracy'
  | 'label_precision'
  | 'label_recall'
  | 'label_jaccard_index'
  | 'label_dice'
type QualityReportScoreComponents = {
  valid_count: number
  missing_count: number
  extra_count: number
}
type QualityReportRequirementCalculationStatusEnum = 'computed' | 'not_computed'
type ReasonEnum = 'no_annotations' | 'filter_no_matches' | 'required_attributes_missing'
type QualityReportRequirementCalculation = {
  status: QualityReportRequirementCalculationStatusEnum
  reason?: ReasonEnum | NullEnum | undefined
}
type QualityReportRequirementSummaryItem = {
  requirement_id: number | null
  name: string
  metric: QualityTargetMetric
  score: number | null
  score_components: QualityReportScoreComponents
  calculation: QualityReportRequirementCalculation
  threshold: number
}
type QualityReportRequirementsSummary = {
  total: number
  enabled: number
  completed: number
  not_computed: number
  items: QualityReportRequirementSummaryItem[]
}
type QualityReportSummary = {
  total_frames: number
  validation_frames: number
  validation_frame_share: number
  conflict_count: number
  error_count: number
  conflicts_by_type: { [x: string]: number }
  tasks?:
    | {
        total: number
        custom: number
        not_configured: number
        excluded: number
        included: number
        completed: number
      }
    | undefined
  jobs?:
    | {
        total: number
        excluded: number
        not_checkable: number
        included: number
        completed: number
      }
    | undefined
  requirements?: QualityReportRequirementsSummary | undefined
}
type QualityReport = {
  id?: number | undefined
  job_id?: (number | null) | undefined
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  parent_id?: (number | null) | undefined
  target: QualityReportTarget
  summary: QualityReportSummary
  created_date?: string | undefined
  target_last_updated?: string | undefined
  gt_last_updated?: (string | null) | undefined
  assignee?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
}
type PaginatedQualityReportList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: QualityReport[]
}
type QualityReportCreateRequest = { task_id?: number | undefined; project_id?: number | undefined }
type QualityReportConfusionMatrixAxes = { cols: string; rows: string }
type QualityReportTargetMetricSummaryMetricEnum =
  | 'accuracy'
  | 'precision'
  | 'recall'
  | 'jaccard_index'
  | 'dice'
type AggregationEnum = 'micro' | 'mean' | 'label'
type QualityReportTargetMetricValues = {
  micro: number | null
  mean: number | null
  label: number | null
}
type QualityReportTargetMetricSummary = {
  metric: QualityReportTargetMetricSummaryMetricEnum
  aggregation: AggregationEnum
  values: QualityReportTargetMetricValues
  worst_labels: string[]
}
type QualityReportConfusionMatrix = {
  labels: string[]
  rows: number[][]
  axes: QualityReportConfusionMatrixAxes
  precision: number[] | null
  recall: number[] | null
  accuracy: number[] | null
  jaccard_index: number[] | null
  dice: number[] | null
  target_metric_summary: QualityReportTargetMetricSummary
}
type AnnotationTypeEnum =
  | 'tag'
  | 'rectangle'
  | 'skeleton'
  | 'skeleton_keypoint'
  | 'points'
  | 'polyline'
  | 'mask'
  | 'polygon'
  | 'ellipse'
type BlankEnum = ''
type SimilarityMetricEnum = 'iou' | 'oks' | 'boundary_f' | 'equality'
type SimilarityThresholdPolicyModeEnum = 'constant' | 'linear'
type InputEnum = 'gt.shape_area'
type ExtrapolationEnum = 'clamp'
type ThresholdPolicyPoint = { x: number; y: number }
type SimilarityThresholdPolicy = {
  type?: {} | undefined
  mode: SimilarityThresholdPolicyModeEnum
  value?: number | undefined
  input?: InputEnum | undefined
  extrapolation?: ExtrapolationEnum | undefined
  points?: ThresholdPolicyPoint[] | undefined
}
type QualityPointSizeBase = 'image_size' | 'group_bbox_size'
type ComparatorEnum = 'exact' | 'levenshtein'
type AttributeComparisonRule = {
  spec_id: number
  enabled: boolean
  comparator?: ComparatorEnum | NullEnum | undefined
  threshold?: (number | null) | undefined
}
type QualityRequirementListItem = {
  id?: number | undefined
  settings_id?: number | undefined
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  name?: string | undefined
  is_base?: boolean | undefined
  sort_order?: number | undefined
  filter?: string | undefined
  enabled?: boolean | undefined
  annotation_type?: AnnotationTypeEnum | BlankEnum | NullEnum | undefined
  metric?: QualityTargetMetric | NullEnum | undefined
  required_score?: (number | null) | undefined
  parent_requirement?: (number | null) | undefined
  similarity_metric?: SimilarityMetricEnum | BlankEnum | NullEnum | undefined
  iou_threshold?: number | SimilarityThresholdPolicy | undefined
  oks_threshold?: (number | null) | undefined
  boundary_f_threshold?: (number | null) | undefined
  boundary_f_tolerance?: (number | null) | undefined
  point_size?: (number | null) | undefined
  point_size_base?: QualityPointSizeBase | BlankEnum | NullEnum | undefined
  line_thickness?: (number | null) | undefined
  match_orientation?: (boolean | null) | undefined
  line_orientation_threshold?: (number | null) | undefined
  match_groups?: (boolean | null) | undefined
  group_match_threshold?: (number | null) | undefined
  check_covered_annotations?: (boolean | null) | undefined
  object_visibility_threshold?: (number | null) | undefined
  panoptic_comparison?: (boolean | null) | undefined
  attribute_comparison?:
    | {
        default?:
          | {
              enabled?: (boolean | null) | undefined
              comparator?: ComparatorEnum | NullEnum | undefined
              threshold?: (number | null) | undefined
            }
          | undefined
        rules?: AttributeComparisonRule[] | undefined
      }
    | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
}
type QualitySettings = {
  id?: number | undefined
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  job_filter?: string | undefined
  inherit?: boolean | undefined
  max_validations_per_job?: number | undefined
  requirements?: QualityRequirementListItem[] | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
}
type PaginatedQualitySettingsList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: QualitySettings[]
}
type ThresholdPolicyPointRequest = { x: number; y: number }
type SimilarityThresholdPolicyRequest = {
  type?: {} | undefined
  mode: SimilarityThresholdPolicyModeEnum
  value?: number | undefined
  input?: InputEnum | undefined
  extrapolation?: ExtrapolationEnum | undefined
  points?: ThresholdPolicyPointRequest[] | undefined
}
type AttributeComparisonRuleRequest = {
  spec_id: number
  enabled: boolean
  comparator?: ComparatorEnum | NullEnum | undefined
  threshold?: (number | null) | undefined
}
type QualityRequirementListItemRequest = {
  settings_id?: number | undefined
  name?: string | undefined
  sort_order?: number | undefined
  filter?: string | undefined
  enabled?: boolean | undefined
  annotation_type?: AnnotationTypeEnum | BlankEnum | NullEnum | undefined
  metric?: QualityTargetMetric | NullEnum | undefined
  required_score?: (number | null) | undefined
  parent_requirement?: (number | null) | undefined
  similarity_metric?: SimilarityMetricEnum | BlankEnum | NullEnum | undefined
  iou_threshold?: number | SimilarityThresholdPolicyRequest | undefined
  oks_threshold?: (number | null) | undefined
  boundary_f_threshold?: (number | null) | undefined
  boundary_f_tolerance?: (number | null) | undefined
  point_size?: (number | null) | undefined
  point_size_base?: QualityPointSizeBase | BlankEnum | NullEnum | undefined
  line_thickness?: (number | null) | undefined
  match_orientation?: (boolean | null) | undefined
  line_orientation_threshold?: (number | null) | undefined
  match_groups?: (boolean | null) | undefined
  group_match_threshold?: (number | null) | undefined
  check_covered_annotations?: (boolean | null) | undefined
  object_visibility_threshold?: (number | null) | undefined
  panoptic_comparison?: (boolean | null) | undefined
  attribute_comparison?:
    | {
        default?:
          | {
              enabled?: (boolean | null) | undefined
              comparator?: ComparatorEnum | NullEnum | undefined
              threshold?: (number | null) | undefined
            }
          | undefined
        rules?: AttributeComparisonRuleRequest[] | undefined
      }
    | undefined
}
type QualitySettingsRequest = {
  job_filter?: string | undefined
  inherit?: boolean | undefined
  max_validations_per_job?: number | undefined
  requirements?: QualityRequirementListItemRequest[] | undefined
}
type PatchedQualitySettingsRequest = {
  job_filter?: string | undefined
  inherit?: boolean | undefined
  max_validations_per_job?: number | undefined
  requirements?: QualityRequirementListItemRequest[] | undefined
}
type PaginatedQualityRequirementListItemList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: QualityRequirementListItem[]
}
type QualityRequirementRequest = {
  settings_id?: number | undefined
  name?: string | undefined
  sort_order?: number | undefined
  filter?: string | undefined
  enabled?: boolean | undefined
  annotation_type?: AnnotationTypeEnum | BlankEnum | NullEnum | undefined
  metric?: QualityTargetMetric | NullEnum | undefined
  required_score?: (number | null) | undefined
  parent_requirement?: (number | null) | undefined
  similarity_metric?: SimilarityMetricEnum | BlankEnum | NullEnum | undefined
  iou_threshold?: number | SimilarityThresholdPolicyRequest | undefined
  oks_threshold?: (number | null) | undefined
  boundary_f_threshold?: (number | null) | undefined
  boundary_f_tolerance?: (number | null) | undefined
  point_size?: (number | null) | undefined
  point_size_base?: QualityPointSizeBase | BlankEnum | NullEnum | undefined
  line_thickness?: (number | null) | undefined
  match_orientation?: (boolean | null) | undefined
  line_orientation_threshold?: (number | null) | undefined
  match_groups?: (boolean | null) | undefined
  group_match_threshold?: (number | null) | undefined
  check_covered_annotations?: (boolean | null) | undefined
  object_visibility_threshold?: (number | null) | undefined
  panoptic_comparison?: (boolean | null) | undefined
  attribute_comparison?:
    | {
        default?:
          | {
              enabled?: (boolean | null) | undefined
              comparator?: ComparatorEnum | NullEnum | undefined
              threshold?: (number | null) | undefined
            }
          | undefined
        rules?: AttributeComparisonRuleRequest[] | undefined
      }
    | undefined
}
type QualityRequirement = {
  id?: number | undefined
  settings_id?: number | undefined
  task_id?: (number | null) | undefined
  project_id?: (number | null) | undefined
  name?: string | undefined
  is_base?: boolean | undefined
  sort_order?: number | undefined
  filter?: string | undefined
  enabled?: boolean | undefined
  annotation_type?: AnnotationTypeEnum | BlankEnum | NullEnum | undefined
  metric?: QualityTargetMetric | NullEnum | undefined
  required_score?: (number | null) | undefined
  parent_requirement?: (number | null) | undefined
  effective?: { [x: string]: unknown } | undefined
  similarity_metric?: SimilarityMetricEnum | BlankEnum | NullEnum | undefined
  iou_threshold?: number | SimilarityThresholdPolicy | undefined
  oks_threshold?: (number | null) | undefined
  boundary_f_threshold?: (number | null) | undefined
  boundary_f_tolerance?: (number | null) | undefined
  point_size?: (number | null) | undefined
  point_size_base?: QualityPointSizeBase | BlankEnum | NullEnum | undefined
  line_thickness?: (number | null) | undefined
  match_orientation?: (boolean | null) | undefined
  line_orientation_threshold?: (number | null) | undefined
  match_groups?: (boolean | null) | undefined
  group_match_threshold?: (number | null) | undefined
  check_covered_annotations?: (boolean | null) | undefined
  object_visibility_threshold?: (number | null) | undefined
  panoptic_comparison?: (boolean | null) | undefined
  attribute_comparison?:
    | {
        default?:
          | {
              enabled?: (boolean | null) | undefined
              comparator?: ComparatorEnum | NullEnum | undefined
              threshold?: (number | null) | undefined
            }
          | undefined
        rules?: AttributeComparisonRule[] | undefined
      }
    | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
}
type PatchedQualityRequirementRequest = {
  settings_id?: number | undefined
  name?: string | undefined
  sort_order?: number | undefined
  filter?: string | undefined
  enabled?: boolean | undefined
  annotation_type?: AnnotationTypeEnum | BlankEnum | NullEnum | undefined
  metric?: QualityTargetMetric | NullEnum | undefined
  required_score?: (number | null) | undefined
  parent_requirement?: (number | null) | undefined
  similarity_metric?: SimilarityMetricEnum | BlankEnum | NullEnum | undefined
  iou_threshold?: number | SimilarityThresholdPolicyRequest | undefined
  oks_threshold?: (number | null) | undefined
  boundary_f_threshold?: (number | null) | undefined
  boundary_f_tolerance?: (number | null) | undefined
  point_size?: (number | null) | undefined
  point_size_base?: QualityPointSizeBase | BlankEnum | NullEnum | undefined
  line_thickness?: (number | null) | undefined
  match_orientation?: (boolean | null) | undefined
  line_orientation_threshold?: (number | null) | undefined
  match_groups?: (boolean | null) | undefined
  group_match_threshold?: (number | null) | undefined
  check_covered_annotations?: (boolean | null) | undefined
  object_visibility_threshold?: (number | null) | undefined
  panoptic_comparison?: (boolean | null) | undefined
  attribute_comparison?:
    | {
        default?:
          | {
              enabled?: (boolean | null) | undefined
              comparator?: ComparatorEnum | NullEnum | undefined
              threshold?: (number | null) | undefined
            }
          | undefined
        rules?: AttributeComparisonRuleRequest[] | undefined
      }
    | undefined
}
type QualityRequirementBulkCreateNodeRequest = {
  name: string
  sort_order?: number | undefined
  filter?: string | undefined
  enabled?: boolean | undefined
  annotation_type?: AnnotationTypeEnum | BlankEnum | NullEnum | undefined
  metric?: QualityTargetMetric | NullEnum | undefined
  required_score?: (number | null) | undefined
  parent_requirement?: (number | null) | undefined
  similarity_metric?: SimilarityMetricEnum | BlankEnum | NullEnum | undefined
  iou_threshold?: number | SimilarityThresholdPolicyRequest | undefined
  oks_threshold?: (number | null) | undefined
  boundary_f_threshold?: (number | null) | undefined
  boundary_f_tolerance?: (number | null) | undefined
  point_size?: (number | null) | undefined
  point_size_base?: QualityPointSizeBase | BlankEnum | NullEnum | undefined
  line_thickness?: (number | null) | undefined
  match_orientation?: (boolean | null) | undefined
  line_orientation_threshold?: (number | null) | undefined
  match_groups?: (boolean | null) | undefined
  group_match_threshold?: (number | null) | undefined
  check_covered_annotations?: (boolean | null) | undefined
  object_visibility_threshold?: (number | null) | undefined
  panoptic_comparison?: (boolean | null) | undefined
  attribute_comparison?:
    | {
        default?:
          | {
              enabled?: (boolean | null) | undefined
              comparator?: ComparatorEnum | NullEnum | undefined
              threshold?: (number | null) | undefined
            }
          | undefined
        rules?: AttributeComparisonRuleRequest[] | undefined
      }
    | undefined
  children?: QualityRequirementBulkCreateNodeRequest[] | undefined
}
type QualityRequirementBulkCreateRequest = {
  settings_id: number
  requirements: QualityRequirementBulkCreateNodeRequest[]
}
type RequestStatus = 'queued' | 'started' | 'failed' | 'finished'
type RequestDataOperation = {
  type: string
  target: string
  project_id?: (number | null) | undefined
  task_id?: (number | null) | undefined
  job_id?: (number | null) | undefined
  org_id?: (number | null) | undefined
  format?: (string | null) | undefined
  function_id?: (string | null) | undefined
  lightweight?: (boolean | null) | undefined
}
type Request = {
  status: RequestStatus
  message?: string | undefined
  id: string
  operation: RequestDataOperation
  progress?: (number | null) | undefined
  created_date: string
  started_date?: (string | null) | undefined
  finished_date?: (string | null) | undefined
  expiry_date?: (string | null) | undefined
  owner?: { id?: number | undefined; username: string } | undefined
  result_url?: (string | null) | undefined
  result_id?: (number | null) | undefined
}
type PaginatedRequestList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: Request[]
}
type About = {
  name: string
  description: string
  version: string
  logo_url: string
  subtitle: string
}
type DatasetFormat = {
  name: string
  ext: string
  version: string
  enabled: boolean
  dimension: string
}
type DatasetFormats = { importers: DatasetFormat[]; exporters: DatasetFormat[] }
type Plugins = { ANALYTICS: boolean; MODELS: boolean }
type JobsSummary = {
  count?: number | undefined
  completed: number | null
  validation: number | null
  url?: string | undefined
}
type TaskRead = {
  url?: string | undefined
  id?: number | undefined
  name?: string | undefined
  project_id?: (number | null) | undefined
  project_name?: (string | null) | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  assignee?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  bug_tracker?: string | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  overlap?: (number | null) | undefined
  segment_size?: number | undefined
  initial_replicas?: number | undefined
  status?: {} | undefined
  data_chunk_size?: (number | null) | undefined
  data_original_chunk_type?: {} | undefined
  data_compressed_chunk_type?: {} | undefined
  data_cloud_storage_id?: (number | null) | undefined
  guide_id?: (number | null) | undefined
  size?: number | undefined
  image_quality?: number | undefined
  data?: (number | null) | undefined
  dimension?: string | undefined
  mode?: string | undefined
  media_type?: string | undefined
  subset?: string | undefined
  organization_id?: (number | null) | undefined
  organization?: (number | null) | undefined
  target_storage?:
    | {
        id?: number | undefined
        location?: LocationEnum | undefined
        cloud_storage_id?: (number | null) | undefined
      }
    | undefined
  source_storage?:
    | {
        id?: number | undefined
        location?: LocationEnum | undefined
        cloud_storage_id?: (number | null) | undefined
      }
    | undefined
  jobs: JobsSummary
  labels: LabelsSummary
  assignee_updated_date?: (string | null) | undefined
  validation_mode?: (string | null) | undefined
}
type PaginatedTaskReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: TaskRead[]
}
type StorageRequest = {
  location?: LocationEnum | undefined
  cloud_storage_id?: (number | null) | undefined
}
type TaskWriteRequest = {
  name: string
  project_id?: (number | null) | undefined
  owner_id?: (number | null) | undefined
  assignee_id?: (number | null) | undefined
  bug_tracker?: string | undefined
  overlap?: (number | null) | undefined
  segment_size?: number | undefined
  labels?: PatchedLabelRequest[] | undefined
  subset?: string | undefined
  target_storage?: StorageRequest | undefined
  source_storage?: StorageRequest | undefined
  initial_replicas?: number | undefined
  consensus_replicas?: number | undefined
}
type PatchedTaskWriteRequest = {
  name?: string | undefined
  project_id?: (number | null) | undefined
  owner_id?: (number | null) | undefined
  assignee_id?: (number | null) | undefined
  bug_tracker?: string | undefined
  labels?: PatchedLabelRequest[] | undefined
  subset?: string | undefined
  target_storage?: StorageRequest | undefined
  source_storage?: StorageRequest | undefined
  organization_id?: (number | null) | undefined
}
type StorageMethod = 'cache' | 'file_system'
type SortingMethod = 'lexicographical' | 'natural' | 'predefined' | 'random'
type ValidationMode = 'gt' | 'gt_pool'
type DataRequest = {
  chunk_size?: (number | null) | undefined
  image_quality?: number | undefined
  start_frame?: number | undefined
  stop_frame?: number | undefined
  frame_filter?: string | undefined
  client_files?: File[] | undefined
  server_files?: string[] | undefined
  remote_files?: string[] | undefined
  use_zip_chunks?: boolean | undefined
  server_files_exclude?: string[] | undefined
  cloud_storage_id?: (number | null) | undefined
  use_cache?: boolean | undefined
  copy_data?: boolean | undefined
  storage_method?: StorageMethod | undefined
  sorting_method?: SortingMethod | undefined
  filename_pattern?: (string | null) | undefined
  job_file_mapping?: string[][] | undefined
  upload_file_order?: string[] | undefined
  validation_params?:
    | {
        mode: ValidationMode
        frame_selection_method?: FrameSelectionMethod | undefined
        random_seed?: number | undefined
        frames?: string[] | undefined
        frame_count?: number | undefined
        frame_share?: number | undefined
        frames_per_job_count?: number | undefined
        frames_per_job_share?: number | undefined
      }
    | undefined
}
type DataResponse = RqId | File
type PatchedDataMetaWriteRequest = {
  deleted_frames?: number[] | undefined
  cloud_storage_id?: (number | null) | undefined
}
type RqStatusStateEnum = 'Queued' | 'Started' | 'Finished' | 'Failed'
type RqStatus = {
  state: RqStatusStateEnum
  message?: string | undefined
  progress?: number | undefined
}
type TaskValidationLayoutRead = {
  mode?: ValidationMode | NullEnum | undefined
  frames_per_job_count?: (number | null) | undefined
  validation_frames?: number[] | undefined
  disabled_frames?: number[] | undefined
  honeypot_count?: number | undefined
  honeypot_frames?: number[] | undefined
  honeypot_real_frames?: number[] | undefined
}
type PatchedTaskValidationLayoutWriteRequest = {
  disabled_frames?: number[] | undefined
  frame_selection_method?: {} | undefined
  honeypot_real_frames?: number[] | undefined
}
type TaskFileRequest = { task_file: File }
type CvatUsageReasonEnum =
  | 'work_project'
  | 'academic_research'
  | 'teaching_or_coursework'
  | 'personal_project'
type PlannedActivitiesEnum =
  | 'set_up_projects'
  | 'annotate_data'
  | 'review_quality'
  | 'manage_annotators'
  | 'connect_models'
  | 'evaluate_for_organization'
type CreatedViaEnum = 'registration' | 'social' | 'sso' | 'ldap' | 'invitation'
type User = {
  url?: string | undefined
  id?: number | undefined
  username: string
  first_name?: string | undefined
  last_name?: string | undefined
  email?: string | undefined
  groups: string[]
  is_staff?: boolean | undefined
  is_superuser?: boolean | undefined
  is_active?: boolean | undefined
  last_login?: (string | null) | undefined
  date_joined?: string | undefined
  has_analytics_access?: (boolean | null) | undefined
  cvat_usage_reason?: CvatUsageReasonEnum | BlankEnum | undefined
  primary_role?: string | undefined
  planned_activities?: PlannedActivitiesEnum[] | undefined
  data_types?: string[] | undefined
  discovery_source?: string | undefined
  email_verified?: (boolean | null) | undefined
  created_via?: CreatedViaEnum | NullEnum | undefined
}
type MetaUser = User | BasicUser
type PaginatedMetaUserList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MetaUser[]
}
type PatchedUserRequest = {
  username?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  email?: string | undefined
  groups?: string[] | undefined
  is_staff?: boolean | undefined
  is_superuser?: boolean | undefined
  is_active?: boolean | undefined
  cvat_usage_reason?: CvatUsageReasonEnum | BlankEnum | undefined
  primary_role?: string | undefined
  planned_activities?: PlannedActivitiesEnum[] | undefined
  data_types?: string[] | undefined
  discovery_source?: string | undefined
}
type WebhookType = 'organization' | 'project' | 'server'
type WebhookContentType = 'application/json'
type EventsEnum =
  | 'completed:request[calculate:quality]'
  | 'completed:request[create:task]'
  | 'completed:request[export:annotations]'
  | 'completed:request[export:backup]'
  | 'completed:request[export:dataset]'
  | 'completed:request[merge:job]'
  | 'completed:request[merge:task]'
  | 'create:comment'
  | 'create:invitation'
  | 'create:issue'
  | 'create:job'
  | 'create:membership'
  | 'create:organization'
  | 'create:project'
  | 'create:task'
  | 'create:user'
  | 'delete:comment'
  | 'delete:invitation'
  | 'delete:issue'
  | 'delete:job'
  | 'delete:membership'
  | 'delete:organization'
  | 'delete:project'
  | 'delete:task'
  | 'delete:user'
  | 'update:comment'
  | 'update:issue'
  | 'update:job'
  | 'update:membership'
  | 'update:organization'
  | 'update:project'
  | 'update:task'
  | 'update:user'
type WebhookRead = {
  id?: number | undefined
  url?: string | undefined
  target_url?: string | undefined
  description?: string | undefined
  type: WebhookType
  content_type: WebhookContentType
  is_active?: boolean | undefined
  enable_ssl?: boolean | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  owner?:
    | {
        url?: string | undefined
        id?: number | undefined
        username: string
        first_name?: string | undefined
        last_name?: string | undefined
      }
    | undefined
  project_id?: (number | null) | undefined
  organization?: (number | null) | undefined
  events?: EventsEnum[] | undefined
  last_status?: number | undefined
  last_delivery_date?: string | undefined
}
type PaginatedWebhookReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: WebhookRead[]
}
type WebhookWriteRequest = {
  target_url: string
  description?: string | undefined
  type: WebhookType
  content_type?: WebhookContentType | undefined
  secret?: string | undefined
  is_active?: boolean | undefined
  enable_ssl?: boolean | undefined
  project_id?: (number | null) | undefined
  events: EventsEnum[]
}
type PatchedWebhookWriteRequest = {
  target_url?: string | undefined
  description?: string | undefined
  content_type?: WebhookContentType | undefined
  secret?: string | undefined
  is_active?: boolean | undefined
  enable_ssl?: boolean | undefined
  events?: EventsEnum[] | undefined
}
type WebhookDeliveryRead = {
  id?: number | undefined
  webhook_id?: number | undefined
  event?: string | undefined
  status_code?: (number | null) | undefined
  redelivery?: boolean | undefined
  attempt?: (number | null) | undefined
  request_duration?: (number | null) | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  changed_fields?: string | undefined
  request?: { [x: string]: unknown } | undefined
  response?: { [x: string]: unknown } | undefined
}
type PaginatedWebhookDeliveryReadList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: WebhookDeliveryRead[]
}
type AllWebhookType = 'organization' | 'project' | 'server' | 'all'
type WebhooksEvent = {
  key?: string | undefined
  group?: { display_name?: string | undefined } | undefined
}
type Events = { webhook_type: AllWebhookType; events?: WebhooksEvent[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/assets': {
      $post: {
        input: { form: AssetWriteRequest }
        output: AssetRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/assets/:uuid': {
      $get: { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { uuid: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/auth/access_tokens': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            name?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            read_only?: boolean | undefined
            search?: string | undefined
            sort?: string | undefined
          }
        }
        output: PaginatedAccessTokenReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AccessTokenWriteRequest }
        output: AccessTokenRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/auth/access_tokens/:id': {
      $get: {
        input: { param: { id: number } }
        output: AccessTokenRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedAccessTokenWriteRequest }
        output: AccessTokenRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/auth/access_tokens/self': {
      $get: { input: {}; output: AccessTokenRead; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/auth/login': {
      $post: {
        input: { json: LoginSerializerExRequest }
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/auth/logout': {
      $post: { input: {}; output: RestAuthDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/auth/password/change': {
      $post: {
        input: { json: PasswordChangeRequest }
        output: RestAuthDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/auth/password/reset': {
      $post: {
        input: { json: PasswordResetSerializerExRequest }
        output: RestAuthDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/auth/password/reset/confirm': {
      $post: {
        input: { json: PasswordResetConfirmRequest }
        output: RestAuthDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/auth/register': {
      $post: {
        input: { json: RegisterSerializerExRequest }
        output: RegisterSerializerEx
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/auth/rules': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/cloudstorages': {
      $get: {
        input: {
          query: {
            credentials_type?:
              | 'KEY_SECRET_KEY_PAIR'
              | 'ACCOUNT_NAME_TOKEN_PAIR'
              | 'KEY_FILE_PATH'
              | 'ANONYMOUS_ACCESS'
              | 'CONNECTION_STRING'
              | undefined
            filter?: string | undefined
            name?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            provider_type?: 'AWS_S3_BUCKET' | 'AZURE_CONTAINER' | 'GOOGLE_CLOUD_STORAGE' | undefined
            resource?: string | undefined
            search?: string | undefined
            sort?: string | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedCloudStorageReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: CloudStorageWriteRequest } & { form: CloudStorageWriteRequest }
        output: CloudStorageRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/cloudstorages/:id': {
      $get: {
        input: { param: { id: number } }
        output: CloudStorageRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedCloudStorageWriteRequest } & {
          form: PatchedCloudStorageWriteRequest
        }
        output: CloudStorageRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/cloudstorages/:id/actions': {
      $get: { input: { param: { id: number } }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/cloudstorages/:id/content-v2': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            manifest_path?: string | undefined
            next_token?: string | undefined
            page_size?: number | undefined
            prefix?: string | undefined
          }
        }
        output: CloudStorageContent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/cloudstorages/:id/preview': {
      $get:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/cloudstorages/:id/status': {
      $get: {
        input: { param: { id: number } }
        output: 'AVAILABLE' | 'NOT_FOUND' | 'FORBIDDEN'
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/comments': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            frame_id?: number | undefined
            issue_id?: number | undefined
            job_id?: number | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            search?: string | undefined
            sort?: string | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedCommentReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: CommentWriteRequest }
        output: CommentRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/comments/:id': {
      $get: {
        input: { param: { id: number } }
        output: CommentRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedCommentWriteRequest }
        output: CommentRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/consensus/merges': {
      $post:
        | {
            input: { json: ConsensusMergeCreateRequest }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ConsensusMergeCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/consensus/settings': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            sort?: string | undefined
            task_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedConsensusSettingsList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/consensus/settings/:id': {
      $get: {
        input: { param: { id: number } }
        output: ConsensusSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedConsensusSettingsRequest }
        output: ConsensusSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/events': {
      $get:
        | {
            input: {
              query: {
                action?: 'download' | undefined
                filename?: string | undefined
                from?: string | undefined
                job_id?: number | undefined
                org_id?: number | undefined
                project_id?: number | undefined
                query_id?: string | undefined
                task_id?: number | undefined
                to?: string | undefined
                user_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                action?: 'download' | undefined
                filename?: string | undefined
                from?: string | undefined
                job_id?: number | undefined
                org_id?: number | undefined
                project_id?: number | undefined
                query_id?: string | undefined
                task_id?: number | undefined
                to?: string | undefined
                user_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              query: {
                action?: 'download' | undefined
                filename?: string | undefined
                from?: string | undefined
                job_id?: number | undefined
                org_id?: number | undefined
                project_id?: number | undefined
                query_id?: string | undefined
                task_id?: number | undefined
                to?: string | undefined
                user_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: ClientEventsRequest }
        output: ClientEvents
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/events/export': {
      $post: {
        input: {
          query: {
            cloud_storage_id?: number | undefined
            filename?: string | undefined
            from?: string | undefined
            job_id?: number | undefined
            location?: 'cloud_storage' | 'local' | undefined
            org_id?: number | undefined
            project_id?: number | undefined
            task_id?: number | undefined
            to?: string | undefined
            user_id?: number | undefined
          }
        }
        output: RqId
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/api/growth': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            sort?: string | undefined
          }
        }
        output: PaginatedUserGrowthDataList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/growth/:id': {
      $get: {
        input: { param: { id: string } }
        output: UserGrowthData
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: PatchedUserGrowthDataRequest }
        output: UserGrowthData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/guides': {
      $post: {
        input: { json: AnnotationGuideWriteRequest }
        output: AnnotationGuideRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/guides/:id': {
      $get: {
        input: { param: { id: number } }
        output: AnnotationGuideRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedAnnotationGuideWriteRequest }
        output: AnnotationGuideRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/invitations': {
      $get: {
        input: {
          query: {
            accepted?: boolean | undefined
            filter?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            search?: string | undefined
            sort?: string | undefined
            user_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedInvitationReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: InvitationWriteRequest }
        output: InvitationRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/invitations/:key': {
      $get: {
        input: { param: { key: string } }
        output: InvitationRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/invitations/:key/accept': {
      $post:
        | {
            input: { param: { key: string } }
            output: AcceptInvitationRead
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/invitations/:key/decline': {
      $post: { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/invitations/:key/resend': {
      $post:
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/issues': {
      $get: {
        input: {
          query: {
            assignee?: string | undefined
            filter?: string | undefined
            frame_id?: number | undefined
            job_id?: number | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            resolved?: boolean | undefined
            search?: string | undefined
            sort?: string | undefined
            task_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedIssueReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: IssueWriteRequest }
        output: IssueRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/issues/:id': {
      $get: {
        input: { param: { id: number } }
        output: IssueRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedIssueWriteRequest }
        output: IssueRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/jobs': {
      $get: {
        input: {
          query: {
            assignee?: string | undefined
            dimension?: '1d' | '2d' | '3d' | undefined
            filter?: string | undefined
            media_type?: 'image' | 'point_cloud' | 'audio' | undefined
            mode?: 'annotation' | 'interpolation' | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            parent_job_id?: number | undefined
            project_id?: number | undefined
            project_name?: string | undefined
            search?: string | undefined
            sort?: string | undefined
            stage?: 'annotation' | 'validation' | 'acceptance' | undefined
            state?: 'new' | 'in progress' | 'completed' | 'rejected' | undefined
            task_id?: number | undefined
            task_name?: string | undefined
            type?: 'annotation' | 'ground_truth' | 'replica' | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedJobReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: JobWriteRequest }
        output: JobRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/jobs/:id': {
      $get: { input: { param: { id: number } }; output: JobRead; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: PatchedJobWriteRequest }
        output: JobRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/jobs/:id/annotations/': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                action?: string | undefined
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: LabeledData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                action?: string | undefined
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 410
          }
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                import_mode?: 'append' | 'replace' | undefined
                location?: 'cloud_storage' | 'local' | undefined
                use_default_location?: boolean | undefined
              }
            } & { json: AnnotationFileRequest } & { form: AnnotationFileRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                import_mode?: 'append' | 'replace' | undefined
                location?: 'cloud_storage' | 'local' | undefined
                use_default_location?: boolean | undefined
              }
            } & { json: AnnotationFileRequest } & { form: AnnotationFileRequest }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                import_mode?: 'append' | 'replace' | undefined
                location?: 'cloud_storage' | 'local' | undefined
                use_default_location?: boolean | undefined
              }
            } & { json: AnnotationFileRequest } & { form: AnnotationFileRequest }
            output: {}
            outputFormat: string
            status: 405
          }
      $put: {
        input: { param: { id: number } } & { json: LabeledDataRequest } & {
          form: LabeledDataRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { query: { action: 'create' | 'delete' | 'update' } } & {
          json: PatchedLabeledDataRequest
        } & { form: PatchedLabeledDataRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/jobs/:id/data': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                index?: number | undefined
                number?: number | undefined
                quality?: 'compressed' | 'original' | undefined
                type: 'chunk' | 'context_image' | 'frame'
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                index?: number | undefined
                number?: number | undefined
                quality?: 'compressed' | 'original' | undefined
                type: 'chunk' | 'context_image' | 'frame'
              }
            }
            output: File
            outputFormat: 'json'
            status: 206
          }
        | {
            input: { param: { id: number } } & {
              query: {
                index?: number | undefined
                number?: number | undefined
                quality?: 'compressed' | 'original' | undefined
                type: 'chunk' | 'context_image' | 'frame'
              }
            }
            output: {}
            outputFormat: string
            status: 416
          }
    }
  } & {
    '/api/jobs/:id/data/meta': {
      $get: {
        input: { param: { id: number } }
        output: DataMetaRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedJobDataMetaWriteRequest }
        output: DataMetaRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/jobs/:id/dataset/export': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/jobs/:id/preview': {
      $get:
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
    }
  } & {
    '/api/jobs/:id/validation_layout': {
      $get: {
        input: { param: { id: number } }
        output: JobValidationLayoutRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedJobValidationLayoutWriteRequest }
        output: JobValidationLayoutRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/labels': {
      $get: {
        input: {
          query: {
            color?: string | undefined
            filter?: string | undefined
            job_id?: number | undefined
            name?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            parent?: string | undefined
            parent_id?: number | undefined
            project_id?: number | undefined
            search?: string | undefined
            sort?: string | undefined
            task_id?: number | undefined
            type?:
              | 'any'
              | 'cuboid'
              | 'ellipse'
              | 'mask'
              | 'points'
              | 'polygon'
              | 'polyline'
              | 'rectangle'
              | 'skeleton'
              | 'interval'
              | 'tag'
              | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedLabelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/labels/:id': {
      $get: { input: { param: { id: number } }; output: Label; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: PatchedLabelRequest }
        output: Label
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/lambda/functions': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/lambda/functions/:func_id': {
      $get: {
        input: { param: { func_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { func_id: string } } & { json: OnlineFunctionCallRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/lambda/requests': {
      $get: { input: {}; output: FunctionCall[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: FunctionCallRequest }
        output: FunctionCall
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/lambda/requests/:id': {
      $get: {
        input: { param: { id: string } }
        output: FunctionCall
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/memberships': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            role?: 'worker' | 'supervisor' | 'maintainer' | 'owner' | undefined
            search?: string | undefined
            sort?: string | undefined
            user?: string | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedMembershipReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/memberships/:id': {
      $get: {
        input: { param: { id: number } }
        output: MembershipRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedMembershipWriteRequest }
        output: MembershipRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/organizations': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            name?: string | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            search?: string | undefined
            slug?: string | undefined
            sort?: string | undefined
          }
        }
        output: PaginatedOrganizationReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: OrganizationWriteRequest }
        output: OrganizationRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/organizations/:id': {
      $get: {
        input: { param: { id: number } }
        output: OrganizationRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedOrganizationWriteRequest }
        output: OrganizationRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/projects': {
      $get: {
        input: {
          query: {
            assignee?: string | undefined
            filter?: string | undefined
            name?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            search?: string | undefined
            sort?: string | undefined
            status?: 'annotation' | 'validation' | 'completed' | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedProjectReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: ProjectWriteRequest }
        output: ProjectRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/projects/:id': {
      $get: {
        input: { param: { id: number } }
        output: ProjectRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedProjectWriteRequest }
        output: ProjectRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/projects/:id/backup/export': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                lightweight?: boolean | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                lightweight?: boolean | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                lightweight?: boolean | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/projects/:id/dataset/': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            } & { json: DatasetFileRequest } & { form: DatasetFileRequest }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            } & { json: DatasetFileRequest } & { form: DatasetFileRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            } & { json: DatasetFileRequest } & { form: DatasetFileRequest }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/projects/:id/dataset/export': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/projects/:id/preview': {
      $get:
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/projects/backup/': {
      $post: {
        input: {
          query: {
            cloud_storage_id?: number | undefined
            filename?: string | undefined
            location?: 'cloud_storage' | 'local' | undefined
            org?: string | undefined
            org_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } } & { json: ProjectFileRequest } & {
          form: ProjectFileRequest
        }
        output: RqId
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/api/quality/conflicts': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            frame?: number | undefined
            job_id?: number | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            project_id?: number | undefined
            report_id?: number | undefined
            severity?: 'error' | undefined
            sort?: string | undefined
            task_id?: number | undefined
            type?:
              | 'missing_annotation'
              | 'extra_annotation'
              | 'mismatching_label'
              | 'mismatching_direction'
              | 'mismatching_attributes'
              | 'mismatching_groups'
              | 'covered_annotation'
              | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedAnnotationConflictList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/quality/reports': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            include_legacy?: boolean | undefined
            job_id?: number | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            parent_id?: number | undefined
            project_id?: number | undefined
            sort?: string | undefined
            target?: 'job' | 'project' | 'task' | undefined
            task_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedQualityReportList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { query: { rq_id?: string | undefined } } & { json: QualityReportCreateRequest }
            output: QualityReport
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { rq_id?: string | undefined } } & { json: QualityReportCreateRequest }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { rq_id?: string | undefined } } & { json: QualityReportCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/quality/reports/:id': {
      $get: {
        input: { param: { id: number } }
        output: QualityReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/quality/reports/:id/confusion': {
      $get: { input: { param: { id: number } }; output: File; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/quality/reports/:id/confusion/matrix': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { format?: 'csv' | 'json' | undefined; requirement: number }
            }
            output: QualityReportConfusionMatrix
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { format?: 'csv' | 'json' | undefined; requirement: number }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { format?: 'csv' | 'json' | undefined; requirement: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/quality/reports/:id/data': {
      $get: {
        input: { param: { id: number } } & { query: { format?: 'json' | undefined } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/quality/settings': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            inherit?: boolean | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            parent_type?: 'project' | 'task' | undefined
            project_id?: number | undefined
            sort?: string | undefined
            task_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedQualitySettingsList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/quality/settings/:id': {
      $get: {
        input: { param: { id: number } }
        output: QualitySettings
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: QualitySettingsRequest }
        output: QualitySettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedQualitySettingsRequest }
        output: QualitySettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/quality/settings/requirements': {
      $get: {
        input: {
          query: {
            annotation_type?:
              | 'tag'
              | 'rectangle'
              | 'skeleton'
              | 'skeleton_keypoint'
              | 'points'
              | 'polyline'
              | 'mask'
              | 'polygon'
              | 'ellipse'
              | undefined
            enabled?: boolean | undefined
            filter?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            project_id?: number | undefined
            settings_id?: number | undefined
            sort?: string | undefined
            task_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedQualityRequirementListItemList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: QualityRequirementRequest }
        output: QualityRequirement
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/quality/settings/requirements/:id': {
      $get: {
        input: { param: { id: number } }
        output: QualityRequirement
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: QualityRequirementRequest }
        output: QualityRequirement
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedQualityRequirementRequest }
        output: QualityRequirement
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/quality/settings/requirements/bulk': {
      $post: {
        input: { json: QualityRequirementBulkCreateRequest }
        output: QualityRequirement[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/requests': {
      $get: {
        input: {
          query: {
            action?: string | undefined
            filter?: string | undefined
            format?: string | undefined
            job_id?: number | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            project_id?: number | undefined
            sort?: string | undefined
            status?: 'queued' | 'started' | 'failed' | 'finished' | undefined
            subresource?: string | undefined
            target?: string | undefined
            task_id?: number | undefined
          }
        }
        output: PaginatedRequestList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/requests/:id': {
      $get: { input: { param: { id: string } }; output: Request; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/requests/:id/cancel': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/schema/': {
      $get:
        | {
            input: {
              query: {
                lang?:
                  | 'af'
                  | 'ar'
                  | 'ar-dz'
                  | 'ast'
                  | 'az'
                  | 'be'
                  | 'bg'
                  | 'bn'
                  | 'br'
                  | 'bs'
                  | 'ca'
                  | 'ckb'
                  | 'cs'
                  | 'cy'
                  | 'da'
                  | 'de'
                  | 'dsb'
                  | 'el'
                  | 'en'
                  | 'en-au'
                  | 'en-gb'
                  | 'eo'
                  | 'es'
                  | 'es-ar'
                  | 'es-co'
                  | 'es-mx'
                  | 'es-ni'
                  | 'es-ve'
                  | 'et'
                  | 'eu'
                  | 'fa'
                  | 'fi'
                  | 'fr'
                  | 'fy'
                  | 'ga'
                  | 'gd'
                  | 'gl'
                  | 'he'
                  | 'hi'
                  | 'hr'
                  | 'hsb'
                  | 'hu'
                  | 'hy'
                  | 'ia'
                  | 'id'
                  | 'ig'
                  | 'io'
                  | 'is'
                  | 'it'
                  | 'ja'
                  | 'ka'
                  | 'kab'
                  | 'kk'
                  | 'km'
                  | 'kn'
                  | 'ko'
                  | 'ky'
                  | 'lb'
                  | 'lt'
                  | 'lv'
                  | 'mk'
                  | 'ml'
                  | 'mn'
                  | 'mr'
                  | 'ms'
                  | 'my'
                  | 'nb'
                  | 'ne'
                  | 'nl'
                  | 'nn'
                  | 'os'
                  | 'pa'
                  | 'pl'
                  | 'pt'
                  | 'pt-br'
                  | 'ro'
                  | 'ru'
                  | 'sk'
                  | 'sl'
                  | 'sq'
                  | 'sr'
                  | 'sr-latn'
                  | 'sv'
                  | 'sw'
                  | 'ta'
                  | 'te'
                  | 'tg'
                  | 'th'
                  | 'tk'
                  | 'tr'
                  | 'tt'
                  | 'udm'
                  | 'ug'
                  | 'uk'
                  | 'ur'
                  | 'uz'
                  | 'vi'
                  | 'zh-hans'
                  | 'zh-hant'
                  | undefined
                scheme?: 'json' | 'yaml' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                lang?:
                  | 'af'
                  | 'ar'
                  | 'ar-dz'
                  | 'ast'
                  | 'az'
                  | 'be'
                  | 'bg'
                  | 'bn'
                  | 'br'
                  | 'bs'
                  | 'ca'
                  | 'ckb'
                  | 'cs'
                  | 'cy'
                  | 'da'
                  | 'de'
                  | 'dsb'
                  | 'el'
                  | 'en'
                  | 'en-au'
                  | 'en-gb'
                  | 'eo'
                  | 'es'
                  | 'es-ar'
                  | 'es-co'
                  | 'es-mx'
                  | 'es-ni'
                  | 'es-ve'
                  | 'et'
                  | 'eu'
                  | 'fa'
                  | 'fi'
                  | 'fr'
                  | 'fy'
                  | 'ga'
                  | 'gd'
                  | 'gl'
                  | 'he'
                  | 'hi'
                  | 'hr'
                  | 'hsb'
                  | 'hu'
                  | 'hy'
                  | 'ia'
                  | 'id'
                  | 'ig'
                  | 'io'
                  | 'is'
                  | 'it'
                  | 'ja'
                  | 'ka'
                  | 'kab'
                  | 'kk'
                  | 'km'
                  | 'kn'
                  | 'ko'
                  | 'ky'
                  | 'lb'
                  | 'lt'
                  | 'lv'
                  | 'mk'
                  | 'ml'
                  | 'mn'
                  | 'mr'
                  | 'ms'
                  | 'my'
                  | 'nb'
                  | 'ne'
                  | 'nl'
                  | 'nn'
                  | 'os'
                  | 'pa'
                  | 'pl'
                  | 'pt'
                  | 'pt-br'
                  | 'ro'
                  | 'ru'
                  | 'sk'
                  | 'sl'
                  | 'sq'
                  | 'sr'
                  | 'sr-latn'
                  | 'sv'
                  | 'sw'
                  | 'ta'
                  | 'te'
                  | 'tg'
                  | 'th'
                  | 'tk'
                  | 'tr'
                  | 'tt'
                  | 'udm'
                  | 'ug'
                  | 'uk'
                  | 'ur'
                  | 'uz'
                  | 'vi'
                  | 'zh-hans'
                  | 'zh-hant'
                  | undefined
                scheme?: 'json' | 'yaml' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                lang?:
                  | 'af'
                  | 'ar'
                  | 'ar-dz'
                  | 'ast'
                  | 'az'
                  | 'be'
                  | 'bg'
                  | 'bn'
                  | 'br'
                  | 'bs'
                  | 'ca'
                  | 'ckb'
                  | 'cs'
                  | 'cy'
                  | 'da'
                  | 'de'
                  | 'dsb'
                  | 'el'
                  | 'en'
                  | 'en-au'
                  | 'en-gb'
                  | 'eo'
                  | 'es'
                  | 'es-ar'
                  | 'es-co'
                  | 'es-mx'
                  | 'es-ni'
                  | 'es-ve'
                  | 'et'
                  | 'eu'
                  | 'fa'
                  | 'fi'
                  | 'fr'
                  | 'fy'
                  | 'ga'
                  | 'gd'
                  | 'gl'
                  | 'he'
                  | 'hi'
                  | 'hr'
                  | 'hsb'
                  | 'hu'
                  | 'hy'
                  | 'ia'
                  | 'id'
                  | 'ig'
                  | 'io'
                  | 'is'
                  | 'it'
                  | 'ja'
                  | 'ka'
                  | 'kab'
                  | 'kk'
                  | 'km'
                  | 'kn'
                  | 'ko'
                  | 'ky'
                  | 'lb'
                  | 'lt'
                  | 'lv'
                  | 'mk'
                  | 'ml'
                  | 'mn'
                  | 'mr'
                  | 'ms'
                  | 'my'
                  | 'nb'
                  | 'ne'
                  | 'nl'
                  | 'nn'
                  | 'os'
                  | 'pa'
                  | 'pl'
                  | 'pt'
                  | 'pt-br'
                  | 'ro'
                  | 'ru'
                  | 'sk'
                  | 'sl'
                  | 'sq'
                  | 'sr'
                  | 'sr-latn'
                  | 'sv'
                  | 'sw'
                  | 'ta'
                  | 'te'
                  | 'tg'
                  | 'th'
                  | 'tk'
                  | 'tr'
                  | 'tt'
                  | 'udm'
                  | 'ug'
                  | 'uk'
                  | 'ur'
                  | 'uz'
                  | 'vi'
                  | 'zh-hans'
                  | 'zh-hant'
                  | undefined
                scheme?: 'json' | 'yaml' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                lang?:
                  | 'af'
                  | 'ar'
                  | 'ar-dz'
                  | 'ast'
                  | 'az'
                  | 'be'
                  | 'bg'
                  | 'bn'
                  | 'br'
                  | 'bs'
                  | 'ca'
                  | 'ckb'
                  | 'cs'
                  | 'cy'
                  | 'da'
                  | 'de'
                  | 'dsb'
                  | 'el'
                  | 'en'
                  | 'en-au'
                  | 'en-gb'
                  | 'eo'
                  | 'es'
                  | 'es-ar'
                  | 'es-co'
                  | 'es-mx'
                  | 'es-ni'
                  | 'es-ve'
                  | 'et'
                  | 'eu'
                  | 'fa'
                  | 'fi'
                  | 'fr'
                  | 'fy'
                  | 'ga'
                  | 'gd'
                  | 'gl'
                  | 'he'
                  | 'hi'
                  | 'hr'
                  | 'hsb'
                  | 'hu'
                  | 'hy'
                  | 'ia'
                  | 'id'
                  | 'ig'
                  | 'io'
                  | 'is'
                  | 'it'
                  | 'ja'
                  | 'ka'
                  | 'kab'
                  | 'kk'
                  | 'km'
                  | 'kn'
                  | 'ko'
                  | 'ky'
                  | 'lb'
                  | 'lt'
                  | 'lv'
                  | 'mk'
                  | 'ml'
                  | 'mn'
                  | 'mr'
                  | 'ms'
                  | 'my'
                  | 'nb'
                  | 'ne'
                  | 'nl'
                  | 'nn'
                  | 'os'
                  | 'pa'
                  | 'pl'
                  | 'pt'
                  | 'pt-br'
                  | 'ro'
                  | 'ru'
                  | 'sk'
                  | 'sl'
                  | 'sq'
                  | 'sr'
                  | 'sr-latn'
                  | 'sv'
                  | 'sw'
                  | 'ta'
                  | 'te'
                  | 'tg'
                  | 'th'
                  | 'tk'
                  | 'tr'
                  | 'tt'
                  | 'udm'
                  | 'ug'
                  | 'uk'
                  | 'ur'
                  | 'uz'
                  | 'vi'
                  | 'zh-hans'
                  | 'zh-hant'
                  | undefined
                scheme?: 'json' | 'yaml' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/server/about': { $get: { input: {}; output: About; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/server/annotation/formats': {
      $get: { input: {}; output: DatasetFormats; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/server/plugins': {
      $get: { input: {}; output: Plugins; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/server/share': {
      $get: {
        input: { query: { directory?: string | undefined; search?: string | undefined } }
        output: FileInfo[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tasks': {
      $get: {
        input: {
          query: {
            assignee?: string | undefined
            dimension?: '1d' | '2d' | '3d' | undefined
            filter?: string | undefined
            media_type?: 'image' | 'point_cloud' | 'audio' | undefined
            mode?: 'annotation' | 'interpolation' | undefined
            name?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            project_id?: number | undefined
            project_name?: string | undefined
            search?: string | undefined
            sort?: string | undefined
            status?: 'annotation' | 'validation' | 'completed' | undefined
            subset?: string | undefined
            tracker_link?: string | undefined
            validation_mode?: 'gt' | 'gt_pool' | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedTaskReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: TaskWriteRequest }
        output: TaskRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/tasks/:id': {
      $get: {
        input: { param: { id: number } }
        output: TaskRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedTaskWriteRequest }
        output: TaskRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/tasks/:id/annotations/': {
      $get:
        | {
            input: { param: { id: number } }
            output: LabeledData
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 410 }
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                import_mode?: 'append' | 'replace' | undefined
                location?: 'cloud_storage' | 'local' | undefined
                use_default_location?: boolean | undefined
              }
            } & { json: AnnotationFileRequest } & { form: AnnotationFileRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                import_mode?: 'append' | 'replace' | undefined
                location?: 'cloud_storage' | 'local' | undefined
                use_default_location?: boolean | undefined
              }
            } & { json: AnnotationFileRequest } & { form: AnnotationFileRequest }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format?: string | undefined
                import_mode?: 'append' | 'replace' | undefined
                location?: 'cloud_storage' | 'local' | undefined
                use_default_location?: boolean | undefined
              }
            } & { json: AnnotationFileRequest } & { form: AnnotationFileRequest }
            output: {}
            outputFormat: string
            status: 405
          }
      $put: {
        input: { param: { id: number } } & { json: LabeledDataRequest } & {
          form: LabeledDataRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { query: { action: 'create' | 'delete' | 'update' } } & {
          json: PatchedLabeledDataRequest
        } & { form: PatchedLabeledDataRequest }
        output: LabeledData
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/tasks/:id/backup/export': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                lightweight?: boolean | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                lightweight?: boolean | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                lightweight?: boolean | undefined
                location?: 'cloud_storage' | 'local' | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/tasks/:id/data/': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                number?: number | undefined
                quality?: 'compressed' | 'original' | undefined
                type: 'chunk' | 'context_image' | 'frame'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                number?: number | undefined
                quality?: 'compressed' | 'original' | undefined
                type: 'chunk' | 'context_image' | 'frame'
              }
            }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { id: number } } & {
              query: {
                number?: number | undefined
                quality?: 'compressed' | 'original' | undefined
                type: 'chunk' | 'context_image' | 'frame'
              }
            }
            output: {}
            outputFormat: string
            status: 416
          }
      $post: {
        input: { param: { id: number } } & {
          header: {
            'Upload-Finish'?: boolean | undefined
            'Upload-Multiple'?: boolean | undefined
            'Upload-Start'?: boolean | undefined
          }
        } & { json: DataRequest } & { form: DataRequest }
        output: DataResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/api/tasks/:id/data/meta': {
      $get: {
        input: { param: { id: number } }
        output: DataMetaRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedDataMetaWriteRequest }
        output: DataMetaRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tasks/:id/dataset/export': {
      $post:
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number } } & {
              query: {
                cloud_storage_id?: number | undefined
                filename?: string | undefined
                format: string
                location?: 'cloud_storage' | 'local' | undefined
                save_images?: boolean | undefined
              }
            }
            output: RqId
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/tasks/:id/preview': {
      $get:
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { header: { Prefer?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/tasks/:id/status': {
      $get: {
        input: { param: { id: number } }
        output: RqStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tasks/:id/validation_layout': {
      $get: {
        input: { param: { id: number } }
        output: TaskValidationLayoutRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedTaskValidationLayoutWriteRequest }
        output: TaskValidationLayoutRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tasks/backup/': {
      $post: {
        input: {
          query: {
            cloud_storage_id?: number | undefined
            filename?: string | undefined
            location?: 'cloud_storage' | 'local' | undefined
            org?: string | undefined
            org_id?: number | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } } & { json: TaskFileRequest } & {
          form: TaskFileRequest
        }
        output: RqId
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/api/users': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            first_name?: string | undefined
            is_active?: boolean | undefined
            last_name?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            page?: number | undefined
            page_size?: number | undefined
            search?: string | undefined
            sort?: string | undefined
            username?: string | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedMetaUserList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:id': {
      $get: {
        input: { param: { id: number } } & {
          query: { org?: string | undefined; org_id?: number | undefined }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: MetaUser
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedUserRequest }
        output: MetaUser
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/users/self': { $get: { input: {}; output: MetaUser; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/webhooks': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            org?: string | undefined
            org_id?: number | undefined
            owner?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
            project_id?: number | undefined
            search?: string | undefined
            sort?: string | undefined
            target_url?: string | undefined
            type?: 'organization' | 'project' | 'server' | undefined
          }
        } & { header: { 'X-Organization'?: string | undefined } }
        output: PaginatedWebhookReadList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { org?: string | undefined; org_id?: number | undefined } } & {
          header: { 'X-Organization'?: string | undefined }
        } & { json: WebhookWriteRequest }
        output: WebhookRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/webhooks/:id': {
      $get: {
        input: { param: { id: number } }
        output: WebhookRead
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WebhookWriteRequest }
        output: WebhookRead
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: PatchedWebhookWriteRequest }
        output: WebhookRead
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/webhooks/:id/deliveries': {
      $get: {
        input: { param: { id: number } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: PaginatedWebhookDeliveryReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/webhooks/:id/deliveries/:delivery_id': {
      $get: {
        input: { param: { delivery_id: string; id: number } }
        output: WebhookDeliveryRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/webhooks/:id/deliveries/:delivery_id/redelivery': {
      $post: {
        input: { param: { delivery_id: string; id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/webhooks/:id/ping': {
      $post: {
        input: { param: { id: number } }
        output: WebhookDeliveryRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/webhooks/events': {
      $get: {
        input: { query: { type?: 'all' | 'organization' | 'project' | 'server' | undefined } }
        output: Events
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
