type GetDesignAnalyticsResponse = {
  average_view_duration_seconds?: bigint | undefined
  total_view_duration_seconds?: bigint | undefined
  unique_view_count: bigint
  total_view_count: bigint
}
type ErrorCode =
  | 'internal_error'
  | 'invalid_field'
  | 'invalid_header_value'
  | 'permission_denied'
  | 'too_many_requests'
  | 'not_found'
  | 'bad_request_body'
  | 'bad_http_method'
  | 'bad_request_params'
  | 'bad_query_params'
  | 'user_role_required'
  | 'endpoint_not_found'
  | 'endpoint_gone'
  | 'unsupported_version'
  | 'invalid_access_token'
  | 'revoked_access_token'
  | 'missing_field'
  | 'missing_scope'
  | 'invalid_grant'
  | 'invalid_request'
  | 'invalid_client'
  | 'unauthorized_client'
  | 'unsupported_grant_type'
  | 'invalid_scope'
  | 'invalid_basic_header'
  | 'invalid_file_format'
  | 'quota_exceeded'
  | 'credit_quota_exceeded'
  | 'credit_quota_cooldown'
  | 'app_credit_quota_exceeded'
  | 'unsupported_content_type'
  | 'request_too_large'
  | 'model_capacity_reached'
  | 'folder_not_found'
  | 'item_in_multiple_folders'
  | 'asset_not_found'
  | 'unsupported_asset'
  | 'asset_not_ready'
  | 'max_limit_reached'
  | 'permission_not_found'
  | 'permission_exists'
  | 'unauthorized_user'
  | 'user_not_found'
  | 'user_not_eligible'
  | 'group_not_found'
  | 'app_not_found'
  | 'app_has_non_draft_versions'
  | 'invalid_status_transition'
  | 'translation_validation_failed'
  | 'content_not_found'
  | 'doctype_not_found'
  | 'design_not_found'
  | 'offset_too_large'
  | 'page_not_found'
  | 'design_or_comment_not_found'
  | 'design_or_thread_not_found'
  | 'review_dismissed'
  | 'design_type_not_found'
  | 'team_not_found'
  | 'team_is_default'
  | 'comment_not_found'
  | 'too_many_comments'
  | 'too_many_replies'
  | 'message_too_long'
  | 'thread_not_found'
  | 'reply_not_found'
  | 'design_not_fillable'
  | 'autofill_data_invalid'
  | 'feature_not_available'
  | 'unsupported_design_type'
  | 'design_generation_not_enabled'
  | 'design_generation_rejected'
  | 'license_required'
  | 'input_unsafe'
  | 'display_name_unavailable'
  | 'user_not_managed'
  | 'saml_team_id_conflict'
  | 'saml_name_id_not_available'
  | 'user_linked_to_another_idp'
  | 'user_email_unverified'
  | 'user_not_active'
  | 'user_pending_consent'
  | 'account_exists'
  | 'domain_restricted'
  | 'user_already_member'
type Error = { code: ErrorCode; message: string }
type DesignAnalyticsViewerType = 'editor' | 'commenter' | 'viewer'
type DesignAnalyticsViewerVisibility =
  | 'shown'
  | 'anonymous'
  | 'opt_out'
  | 'another_team'
  | 'deleted'
type DesignAnalyticsViewerFormFactor = 'small' | 'large'
type Viewer = {
  viewer_id: string
  user?:
    | {
        user_id?: string | undefined
        team_id?: string | undefined
        display_name?: string | undefined
      }
    | undefined
  last_viewed_at: bigint
  viewer_type: DesignAnalyticsViewerType
  visibility: DesignAnalyticsViewerVisibility
  total_view_duration_seconds?: bigint | undefined
  first_viewed_at?: bigint | undefined
  pages_viewed?: bigint | undefined
  form_factor?: DesignAnalyticsViewerFormFactor | undefined
  device_operating_system?: string | undefined
  city_country?: string | undefined
  total_view_count?: bigint | undefined
}
type GetDesignAnalyticsViewersResponse = { items: Viewer[]; continuation?: string | undefined }
type ViewsAtTime = { count: bigint; bucket_start_at: bigint }
type GetDesignAnalyticsViewsOverTimeResponse = {
  items: ViewsAtTime[]
  continuation?: string | undefined
}
type PageViewFilterByViewer = { type: 'by_viewer'; link_id?: string | undefined; viewer_id: string }
type PageViewFilterForEditor = { type: 'for_editor' }
type PageViewFilterByLink = { type: 'by_link'; link_id: string }
type PageViewFilter = PageViewFilterByViewer | PageViewFilterForEditor | PageViewFilterByLink
type GetDesignAnalyticsPageViewsRequest = {
  page_ids: string[]
  limit?: number | undefined
  continuation?: string | undefined
  filter?: PageViewFilter | undefined
}
type PageViewDuration = {
  page_id?: string | undefined
  total_view_duration_seconds: bigint
  average_duration_seconds?: number | undefined
  unique_view_count?: bigint | undefined
}
type GetDesignAnalyticsPageViewsResponse = {
  items: PageViewDuration[]
  continuation?: string | undefined
}
type TrackableLink = {
  link_id: string
  name?: string | undefined
  total_view_count?: bigint | undefined
  unique_view_count?: bigint | undefined
  total_view_duration_seconds?: bigint | undefined
  average_view_duration_seconds?: bigint | undefined
  last_viewed_at?: bigint | undefined
}
type GetDesignAnalyticsLinksResponse = { items: TrackableLink[]; continuation?: string | undefined }
type JsonWebKey = {
  alg?: string | undefined
  kid: string
  kty: string
  n: string
  e: string
  use?: string | undefined
}
type GetAppJwksResponse = { keys: JsonWebKey[] }
type AssetType = 'image' | 'video'
type ImportStatusState = 'failed' | 'in_progress' | 'success'
type ImportErrorCode = 'file_too_big' | 'import_failed'
type ImportError = { code: ImportErrorCode; message: string }
type ImportStatus = { state: ImportStatusState; error?: ImportError | undefined }
type TeamUserSummary = { user_id: string; team_id: string }
type Thumbnail = { width: number; height: number; url: string }
type ImageMetadata = {
  type: 'image'
  width?: number | undefined
  height?: number | undefined
  smart_tags?: string[] | undefined
}
type VideoMetadata = { type: 'video'; width: number; height: number; duration?: number | undefined }
type AssetMetadata = ImageMetadata | VideoMetadata
type Asset = {
  type: AssetType
  id: string
  name: string
  tags: string[]
  import_status?: ImportStatus | undefined
  created_at: bigint
  updated_at: bigint
  owner: TeamUserSummary
  thumbnail?: Thumbnail | undefined
  metadata?: AssetMetadata | undefined
}
type GetAssetResponse = { asset: Asset }
type UpdateAssetRequest = { name?: string | undefined; tags?: string[] | undefined }
type UpdateAssetResponse = { asset: Asset }
type AssetUploadMetadata = { name_base64: string }
type AssetUploadStatus = 'failed' | 'in_progress' | 'success'
type AssetUploadErrorCode = 'file_too_big' | 'import_failed' | 'fetch_failed'
type AssetUploadError = { code: AssetUploadErrorCode; message: string }
type AssetUploadJob = {
  id: string
  status: AssetUploadStatus
  error?: AssetUploadError | undefined
  asset?: Asset | undefined
}
type CreateAssetUploadJobResponse = { job: AssetUploadJob }
type GetAssetUploadJobResponse = { job: AssetUploadJob }
type CreateUrlAssetUploadJobRequest = { name: string; url: string }
type CreateUrlAssetUploadJobResponse = { job: AssetUploadJob }
type GetUrlAssetUploadJobResponse = { job: AssetUploadJob }
type DatasetImageValue = { type: 'image'; asset_id: string }
type DatasetVideoValue = { type: 'video'; asset_id: string }
type DatasetTextValue = { type: 'text'; text: string }
type ColumnDataType = 'string' | 'number' | 'date' | 'boolean' | 'media' | 'variant'
type ColumnConfig = { name?: string | undefined; type: ColumnDataType }
type StringDataTableCell = { type: 'string'; value?: string | undefined }
type NumberCellMetadata = { formatting?: string | undefined }
type NumberDataTableCell = {
  type: 'number'
  value?: number | undefined
  metadata?: NumberCellMetadata | undefined
}
type BooleanDataTableCell = { type: 'boolean'; value?: boolean | undefined }
type DateDataTableCell = { type: 'date'; value?: bigint | undefined }
type DataTableImageMimeType =
  | 'image/jpeg'
  | 'image/heic'
  | 'image/png'
  | 'image/svg+xml'
  | 'image/webp'
  | 'image/tiff'
type DataTableAiDisclosure = 'app_generated' | 'none'
type DataTableImageUpload = {
  type: 'image_upload'
  url: string
  thumbnail_url: string
  mime_type: DataTableImageMimeType
  width?: number | undefined
  height?: number | undefined
  ai_disclosure: DataTableAiDisclosure
}
type DataTableVideoMimeType =
  | 'video/avi'
  | 'video/x-msvideo'
  | 'image/gif'
  | 'video/x-m4v'
  | 'video/x-matroska'
  | 'video/quicktime'
  | 'video/mp4'
  | 'video/mpeg'
  | 'video/webm'
  | 'application/json'
type DataTableVideoUpload = {
  type: 'video_upload'
  url: string
  thumbnail_image_url: string
  thumbnail_video_url?: string | undefined
  mime_type: DataTableVideoMimeType
  width?: number | undefined
  height?: number | undefined
  ai_disclosure: DataTableAiDisclosure
}
type DataTableMedia = DataTableImageUpload | DataTableVideoUpload
type MediaCollectionDataTableCell = { type: 'media'; value: DataTableMedia[] }
type DataTableCell =
  | StringDataTableCell
  | NumberDataTableCell
  | BooleanDataTableCell
  | DateDataTableCell
  | MediaCollectionDataTableCell
type DataTableRow = { cells: DataTableCell[] }
type DataTable = { column_configs?: ColumnConfig[] | undefined; rows: DataTableRow[] }
type DatasetChartValue = { type: 'chart'; chart_data: DataTable }
type DatasetSheetValue = { type: 'sheet'; sheet_data: DataTable }
type DatasetValue =
  | DatasetImageValue
  | DatasetVideoValue
  | DatasetTextValue
  | DatasetChartValue
  | DatasetSheetValue
type CreateFromBrandTemplateAutofillJobRequest = {
  type: 'create_from_brand_template'
  brand_template_id: string
  title?: string | undefined
  data: { [x: string]: DatasetValue }
}
type CreateFromDesignAutofillJobRequest = {
  type: 'create_from_design'
  design_id: string
  title?: string | undefined
  data: { [x: string]: DatasetValue }
}
type UpdateDesignAutofillJobRequest = {
  type: 'update_design'
  design_id: string
  data: { [x: string]: DatasetValue }
}
type CreateDesignAutofillJobRequest =
  | CreateFromBrandTemplateAutofillJobRequest
  | CreateFromDesignAutofillJobRequest
  | UpdateDesignAutofillJobRequest
type DesignAutofillStatus = 'in_progress' | 'success' | 'failed'
type DesignLinks = { edit_url: string; view_url: string }
type DesignSummary = {
  id: string
  title?: string | undefined
  url?: string | undefined
  thumbnail?: Thumbnail | undefined
  urls: DesignLinks
  created_at: bigint
  updated_at: bigint
  page_count?: number | undefined
}
type AutofillTrialInformation = { uses_remaining: number; upgrade_url: string }
type CreateDesignAutofillJobResult = {
  type: 'create_design'
  design: DesignSummary
  trial_information?: AutofillTrialInformation | undefined
}
type UpdateDesignAutofillJobResult = { type: 'update_design'; design: DesignSummary }
type DesignAutofillJobResult = CreateDesignAutofillJobResult | UpdateDesignAutofillJobResult
type AutofillErrorCode =
  | 'autofill_error'
  | 'thumbnail_generation_error'
  | 'create_design_error'
  | 'design_approval_error'
  | 'trial_quota_exceeded'
  | 'design_update_error'
type AutofillError = { code: AutofillErrorCode; message: string }
type DesignAutofillJob = {
  id: string
  status: DesignAutofillStatus
  result?: DesignAutofillJobResult | undefined
  error?: AutofillError | undefined
}
type CreateDesignAutofillJobResponse = { job: DesignAutofillJob }
type FeatureQuotaExceededError = { code: ErrorCode; message: string; upsell_url: string }
type GetDesignAutofillJobResponse = { job: DesignAutofillJob }
type OwnershipType = 'any' | 'owned' | 'shared'
type SortByType =
  | 'relevance'
  | 'modified_descending'
  | 'modified_ascending'
  | 'title_descending'
  | 'title_ascending'
type DatasetFilter = 'any' | 'non_empty'
type BrandTemplate = {
  id: string
  title: string
  view_url: string
  create_url: string
  thumbnail?: Thumbnail | undefined
  created_at: bigint
  updated_at: bigint
}
type ListBrandTemplatesResponse = { continuation?: string | undefined; items: BrandTemplate[] }
type PublishBrandTemplateRequest = { design_id: string }
type PublishBrandTemplateResponse = { brand_template: BrandTemplate }
type GetBrandTemplateResponse = { brand_template: BrandTemplate }
type ImageDataField = { type: 'image' }
type TextDataField = { type: 'text' }
type ChartDataField = { type: 'chart' }
type SheetDataField = { type: 'sheet' }
type DataField = ImageDataField | TextDataField | ChartDataField | SheetDataField
type GetBrandTemplateDatasetResponse = { dataset?: { [x: string]: DataField } | undefined }
type DesignCommentObjectInput = { type: 'design'; design_id: string }
type CommentObjectInput = DesignCommentObjectInput
type CreateCommentRequest = {
  attached_to: CommentObjectInput
  message: string
  assignee_id?: string | undefined
}
type DesignCommentObject = { type: 'design'; design_id: string }
type CommentObject = DesignCommentObject
type User = { id: string; display_name?: string | undefined }
type TeamUser = {
  user_id?: string | undefined
  team_id?: string | undefined
  display_name?: string | undefined
}
type ParentComment = {
  type: 'parent'
  id: string
  attached_to?: CommentObject | undefined
  message: string
  author: User
  created_at?: bigint | undefined
  updated_at?: bigint | undefined
  mentions: { [x: string]: TeamUser }
  assignee?: User | undefined
  resolver?: User | undefined
}
type CreateCommentResponse = { comment: ParentComment }
type CommentContent = { plaintext: string; markdown?: string | undefined }
type UserMention = { tag: string; user: TeamUser }
type Reply = {
  id: string
  design_id: string
  thread_id: string
  author?: User | undefined
  content: CommentContent
  mentions: { [x: string]: UserMention }
  created_at: bigint
  updated_at: bigint
}
type ListRepliesResponse = { continuation?: string | undefined; items: Reply[] }
type CreateReplyV2Request = { message_plaintext: string }
type CreateReplyV2Response = { reply: Reply }
type ReplyComment = {
  type: 'reply'
  id: string
  attached_to?: CommentObject | undefined
  message: string
  author: User
  created_at?: bigint | undefined
  updated_at?: bigint | undefined
  mentions: { [x: string]: TeamUser }
  thread_id: string
}
type Comment = ParentComment | ReplyComment
type CommentThreadType = {
  type: 'comment'
  content: CommentContent
  mentions: { [x: string]: UserMention }
  assignee?: User | undefined
  resolver?: User | undefined
}
type AddSuggestedEdit = { type: 'add'; text: string }
type DeleteSuggestedEdit = { type: 'delete'; text: string }
type SuggestionFormat =
  | 'font_family'
  | 'font_size'
  | 'font_weight'
  | 'font_style'
  | 'color'
  | 'background_color'
  | 'decoration'
  | 'strikethrough'
  | 'link'
  | 'letter_spacing'
  | 'line_height'
  | 'direction'
  | 'text_align'
  | 'list_marker'
  | 'list_level'
  | 'margin_inline_start'
  | 'text_indent'
  | 'font_size_modifier'
  | 'vertical_align'
type FormatSuggestedEdit = { type: 'format'; format: SuggestionFormat }
type SuggestedEdit = AddSuggestedEdit | DeleteSuggestedEdit | FormatSuggestedEdit
type SuggestionStatus = 'open' | 'accepted' | 'rejected'
type SuggestionThreadType = {
  type: 'suggestion'
  suggested_edits: SuggestedEdit[]
  status: SuggestionStatus
}
type ThreadType = CommentThreadType | SuggestionThreadType
type Thread = {
  id: string
  design_id: string
  thread_type: ThreadType
  author?: User | undefined
  created_at: bigint
  updated_at: bigint
}
type GetThreadResponse = { comment?: Comment | undefined; thread?: Thread | undefined }
type GetReplyResponse = { reply: Reply }
type CreateThreadRequest = { message_plaintext: string; assignee_id?: string | undefined }
type CreateThreadResponse = { thread: Thread }
type EdDsaJwk = { kid: string; kty: string; crv: string; x: string }
type GetSigningPublicKeysResponse = { keys: EdDsaJwk[] }
type DesignTypeOutputName =
  | 'doc'
  | 'email'
  | 'presentation'
  | 'sheet'
  | 'whiteboard'
  | 'custom'
  | 'unknown'
type Design = {
  id: string
  title?: string | undefined
  owner: TeamUserSummary
  thumbnail?: Thumbnail | undefined
  urls: DesignLinks
  created_at: bigint
  updated_at: bigint
  page_count?: number | undefined
  design_types: DesignTypeOutputName[]
}
type GetListDesignResponse = { continuation?: string | undefined; items: Design[] }
type PresetDesignTypeName = 'doc' | 'email' | 'presentation' | 'whiteboard'
type PresetDesignTypeInput = { type: 'preset'; name: PresetDesignTypeName }
type CustomDesignTypeInput = { type: 'custom'; width: number; height: number }
type DesignTypeInput = PresetDesignTypeInput | CustomDesignTypeInput
type DesignTypeCreateDesignRequest = {
  type: 'type_and_asset'
  design_type?: DesignTypeInput | undefined
  asset_id?: string | undefined
  title?: string | undefined
}
type DesignCreateDesignRequest = {
  type: 'design'
  design_id: string
  page_numbers?: number[] | undefined
}
type BrandTemplateCreateDesignRequest = {
  type: 'brand_template'
  brand_template_id: string
  page_numbers?: number[] | undefined
}
type CreateDesignRequest =
  | DesignTypeCreateDesignRequest
  | DesignCreateDesignRequest
  | BrandTemplateCreateDesignRequest
type CreateDesignResponse = { design: Design }
type GetDesignResponse = { design: Design }
type PageDimensions = { width: number; height: number }
type DesignPage = {
  id?: string | undefined
  index: number
  page_number: number
  dimensions?: PageDimensions | undefined
  thumbnail?: Thumbnail | undefined
  design_type: DesignTypeOutputName
}
type GetDesignPagesResponse = { items: DesignPage[] }
type PdfExportFormatOption = { page_numbers?: number[] | undefined }
type JpgExportFormatOption = { page_numbers?: number[] | undefined }
type PngExportFormatOption = { page_numbers?: number[] | undefined }
type SvgExportFormatOption = { page_numbers?: number[] | undefined }
type PptxExportFormatOption = { page_numbers?: number[] | undefined }
type GifExportFormatOption = { page_numbers?: number[] | undefined }
type Mp4ExportFormatOption = { page_numbers?: number[] | undefined }
type HtmlBundleExportFormatOption = { page_numbers?: number[] | undefined }
type HtmlStandaloneExportFormatOption = { page_numbers?: number[] | undefined }
type CsvExportFormatOption = { page_numbers?: number[] | undefined }
type ExportFormatOptions = {
  pdf?: PdfExportFormatOption | undefined
  jpg?: JpgExportFormatOption | undefined
  png?: PngExportFormatOption | undefined
  svg?: SvgExportFormatOption | undefined
  pptx?: PptxExportFormatOption | undefined
  gif?: GifExportFormatOption | undefined
  mp4?: Mp4ExportFormatOption | undefined
  html_bundle?: HtmlBundleExportFormatOption | undefined
  html_standalone?: HtmlStandaloneExportFormatOption | undefined
  csv?: CsvExportFormatOption | undefined
}
type GetDesignExportFormatsResponse = { formats: ExportFormatOptions }
type GetDesignDatasetResponse = { dataset?: { [x: string]: DataField } | undefined }
type PrintPartnerDesignDimensionsUnits = 'in' | 'cm' | 'mm'
type PrintPartnerDesignDimensions = {
  width: number
  height: number
  units: PrintPartnerDesignDimensionsUnits
}
type PrintPartnerDimensionsDesignSource = {
  type: 'dimensions'
  dimensions: PrintPartnerDesignDimensions
  product_type?: string | undefined
}
type PrintPartnerProductIdDesignSource = { type: 'partner_product_id'; partner_product_id: string }
type PrintPartnerDesignSource =
  | PrintPartnerDimensionsDesignSource
  | PrintPartnerProductIdDesignSource
type CreatePrintPartnerDesignRequest = {
  design_source: PrintPartnerDesignSource
  title?: string | undefined
  bleed?: number | undefined
  min_pages?: number | undefined
  max_pages?: number | undefined
}
type CreatePrintPartnerDesignResponse = { design: Design }
type GetPrintPartnerDesignResponse = { design: Design }
type DesignGenerationDesignTypeV2 = 'preset'
type DesignGenerationDesignTypeNameV2 = 'doc' | 'presentation'
type DesignGenerationOutlineSectionV2 = {
  title: string
  description?: string | undefined
  points?: string[] | undefined
}
type CreateDesignGenerationJobRequestV2 = {
  brief: string
  design_type: { type: DesignGenerationDesignTypeV2; name: DesignGenerationDesignTypeNameV2 }
  outline?: { sections: DesignGenerationOutlineSectionV2[] } | undefined
}
type DesignGenerationJobStatusV2 = 'failed' | 'in_progress' | 'success'
type DesignGenerationJobResultV2 = { design: DesignSummary }
type DesignGenerationJobErrorCodeV2 = 'content_not_allowed' | 'generation_failed'
type DesignGenerationJobErrorV2 = { code: DesignGenerationJobErrorCodeV2; message: string }
type DesignGenerationJobV2 = {
  id: string
  status: DesignGenerationJobStatusV2
  result?: DesignGenerationJobResultV2 | undefined
  error?: DesignGenerationJobErrorV2 | undefined
}
type CreateDesignGenerationJobResponseV2 = { job: DesignGenerationJobV2 }
type GetDesignGenerationJobResponseV2 = { job: DesignGenerationJobV2 }
type DesignImportMetadata = { title_base64: string; mime_type?: string | undefined }
type DesignImportStatus = 'failed' | 'in_progress' | 'success'
type DesignImportJobResult = { designs: DesignSummary[] }
type DesignImportErrorCode =
  | 'design_creation_throttled'
  | 'design_import_throttled'
  | 'duplicate_import'
  | 'internal_error'
  | 'invalid_file'
  | 'fetch_failed'
type DesignImportError = { code: DesignImportErrorCode; message: string }
type DesignImportJob = {
  id: string
  status: DesignImportStatus
  result?: DesignImportJobResult | undefined
  error?: DesignImportError | undefined
}
type CreateDesignImportJobResponse = { job: DesignImportJob }
type GetDesignImportJobResponse = { job: DesignImportJob }
type CreateUrlImportJobRequest = { title: string; url: string; mime_type?: string | undefined }
type CreateUrlImportJobResponse = { job: DesignImportJob }
type GetUrlImportJobResponse = { job: DesignImportJob }
type ImageSource = { asset_id: string }
type CreateImageToDesignImportJobRequest = { image: ImageSource; title?: string | undefined }
type ImageToDesignImportJobResult = { design: DesignSummary }
type ImageToDesignImportErrorCode =
  | 'bad_input'
  | 'moderation_error'
  | 'quota_exceeded'
  | 'design_creation_throttled'
  | 'internal_error'
type ImageToDesignImportError = { code: ImageToDesignImportErrorCode; message: string }
type ImageToDesignImportJob = {
  id: string
  status: DesignImportStatus
  result?: ImageToDesignImportJobResult | undefined
  error?: ImageToDesignImportError | undefined
}
type CreateImageToDesignImportJobResponse = { job: ImageToDesignImportJob }
type GetImageToDesignImportJobResponse = { job: ImageToDesignImportJob }
type ExportQuality = 'regular' | 'pro'
type ExportPageSize = 'a4' | 'a3' | 'letter' | 'legal'
type PdfExportFormat = {
  type: 'pdf'
  export_quality?: ExportQuality | undefined
  size?: ExportPageSize | undefined
  pages?: number[] | undefined
}
type JpgExportFormat = {
  type: 'jpg'
  export_quality?: ExportQuality | undefined
  quality: number
  height?: number | undefined
  width?: number | undefined
  pages?: number[] | undefined
}
type PngExportFormat = {
  type: 'png'
  export_quality?: ExportQuality | undefined
  height?: number | undefined
  width?: number | undefined
  lossless?: boolean | undefined
  transparent_background?: boolean | undefined
  as_single_image?: boolean | undefined
  pages?: number[] | undefined
}
type PptxExportFormat = { type: 'pptx'; pages?: number[] | undefined }
type GifExportFormat = {
  type: 'gif'
  export_quality?: ExportQuality | undefined
  height?: number | undefined
  width?: number | undefined
  pages?: number[] | undefined
}
type Mp4ExportQuality =
  | 'horizontal_480p'
  | 'horizontal_720p'
  | 'horizontal_1080p'
  | 'horizontal_4k'
  | 'vertical_480p'
  | 'vertical_720p'
  | 'vertical_1080p'
  | 'vertical_4k'
type Mp4ExportFormat = {
  type: 'mp4'
  export_quality?: ExportQuality | undefined
  quality: Mp4ExportQuality
  pages?: number[] | undefined
}
type HtmlBundleExportFormat = { type: 'html_bundle'; pages?: number[] | undefined }
type HtmlStandaloneExportFormat = { type: 'html_standalone'; pages?: number[] | undefined }
type CsvExportFormat = { type: 'csv'; pages?: number[] | undefined }
type ExportFormat =
  | PdfExportFormat
  | JpgExportFormat
  | PngExportFormat
  | PptxExportFormat
  | GifExportFormat
  | Mp4ExportFormat
  | HtmlBundleExportFormat
  | HtmlStandaloneExportFormat
  | CsvExportFormat
type CreateDesignExportJobRequest = { design_id: string; format: ExportFormat }
type DesignExportStatus = 'failed' | 'in_progress' | 'success'
type ExportErrorCode = 'license_required' | 'approval_required' | 'internal_failure'
type ExportError = { code: ExportErrorCode; message: string }
type ExportJob = {
  id: string
  status: DesignExportStatus
  urls?: string[] | undefined
  error?: ExportError | undefined
}
type CreateDesignExportJobResponse = { job: ExportJob }
type PrintPartnerExportDimensionsUnits = 'px' | 'in' | 'cm' | 'mm'
type PrintPartnerExportDimensions = {
  width?: number | undefined
  height?: number | undefined
  units?: PrintPartnerExportDimensionsUnits | undefined
}
type PrintPartnerPdfExportFormat = {
  type: 'pdf'
  bleed?: number | undefined
  crop_marks?: boolean | undefined
  cmyk?: boolean | undefined
  pdfx?: boolean | undefined
}
type PrintPartnerJpgExportFormat = { type: 'jpg' }
type PrintPartnerPngExportFormat = { type: 'png' }
type PrintPartnerExportFormat =
  | PrintPartnerPdfExportFormat
  | PrintPartnerJpgExportFormat
  | PrintPartnerPngExportFormat
type CreatePrintPartnerDesignExportJobRequest = {
  design_id: string
  dimensions?: PrintPartnerExportDimensions | undefined
  format: PrintPartnerExportFormat
  pages?: number[] | undefined
}
type CreatePrintPartnerDesignExportJobResponse = { job: ExportJob }
type GetDesignExportJobResponse = { job: ExportJob }
type Folder = {
  id: string
  name: string
  created_at: bigint
  updated_at: bigint
  thumbnail?: Thumbnail | undefined
}
type GetFolderResponse = { folder: Folder }
type UpdateFolderRequest = { name: string }
type UpdateFolderResponse = { folder?: Folder | undefined }
type FolderItemType = 'design' | 'folder' | 'image' | 'brand_template'
type FolderItemSortBy =
  | 'created_ascending'
  | 'created_descending'
  | 'modified_ascending'
  | 'modified_descending'
  | 'title_ascending'
  | 'title_descending'
type FolderItemPinStatus = 'any' | 'pinned'
type FolderItem = { type: 'folder'; folder: Folder }
type DesignItem = { type: 'design'; design: DesignSummary }
type AssetSummary = {
  type: AssetType
  id: string
  name: string
  tags: string[]
  created_at: bigint
  updated_at: bigint
  thumbnail?: Thumbnail | undefined
}
type ImageItem = { type: 'image'; image: AssetSummary }
type BrandTemplateSummary = {
  id: string
  title: string
  view_url: string
  create_url: string
  thumbnail?: Thumbnail | undefined
  created_at: bigint
  updated_at: bigint
}
type BrandTemplateItem = { type: 'brand_template'; brand_template: BrandTemplateSummary }
type FolderItemSummary = FolderItem | DesignItem | ImageItem | BrandTemplateItem
type ListFolderItemsResponse = { items: FolderItemSummary[]; continuation?: string | undefined }
type MoveFolderItemRequest = { to_folder_id: string; item_id: string }
type CreateFolderRequest = { name: string; parent_folder_id: string }
type CreateFolderResponse = { folder?: Folder | undefined }
type ImageGenerationAspectRatio =
  | 'square'
  | 'landscape'
  | 'portrait'
  | 'landscape_3_2'
  | 'portrait_2_3'
  | 'portrait_4_5'
  | 'landscape_4_3'
  | 'portrait_3_4'
  | 'landscape_5_4'
  | 'landscape_2_1'
  | 'portrait_1_2'
type ImageGenerationModel = 'craft_v1_2k' | 'lucid_origin' | 'z_image_turbo'
type NoneImageGenerationAssetUpload = { type: 'none' }
type UploadImageGenerationAssetUpload = { type: 'upload'; asset_name?: string | undefined }
type ImageGenerationAssetUpload = NoneImageGenerationAssetUpload | UploadImageGenerationAssetUpload
type CreateImageGenerationJobRequest = {
  prompt: string
  aspect_ratio?: ImageGenerationAspectRatio | undefined
  model?: ImageGenerationModel | undefined
  idempotency_key: string
  asset_upload?: ImageGenerationAssetUpload | undefined
}
type ImageGenerationJobStatus = 'failed' | 'in_progress' | 'success'
type GeneratedImage = {
  url: string
  asset?:
    | {
        type: AssetType
        id: string
        name: string
        tags: string[]
        created_at: bigint
        updated_at: bigint
        thumbnail?: Thumbnail | undefined
      }
    | undefined
  width: number
  height: number
}
type ImageGenerationJobResult = { image: GeneratedImage }
type ImageGenerationErrorCode =
  | 'unsafe_input'
  | 'timeout'
  | 'model_not_available'
  | 'model_retired'
  | 'internal_error'
type ImageGenerationError = { code: ImageGenerationErrorCode; message: string }
type ImageGenerationJob = {
  id: string
  status: ImageGenerationJobStatus
  result?: ImageGenerationJobResult | undefined
  error?: ImageGenerationError | undefined
}
type CreateImageGenerationJobResponse = { job: ImageGenerationJob }
type GetImageGenerationJobResponse = { job: ImageGenerationJob }
type BackgroundRemovalImageTransformation = { type: 'background_removal' }
type ImageTransformationType = BackgroundRemovalImageTransformation
type CreateImageTransformationJobRequest = {
  asset_id: string
  name?: string | undefined
  transformations: ImageTransformationType[]
}
type ImageTransformationJobStatus = 'failed' | 'in_progress' | 'success'
type ImageTransformationJobResult = {
  asset: {
    type: AssetType
    id: string
    name: string
    tags: string[]
    import_status?: ImportStatus | undefined
    created_at: bigint
    updated_at: bigint
    owner: TeamUserSummary
    thumbnail?: Thumbnail | undefined
    metadata?: AssetMetadata | undefined
  }
  url?: string | undefined
}
type ImageTransformationErrorCode = 'no_foreground_found' | 'quota_exceeded' | 'internal_error'
type ImageTransformationError = { code: ImageTransformationErrorCode; message: string }
type ImageTransformationJob = {
  id?: string | undefined
  status: ImageTransformationJobStatus
  result?: ImageTransformationJobResult | undefined
  error?: ImageTransformationError | undefined
}
type CreateImageTransformationJobResponse = { job: ImageTransformationJob }
type GetImageTransformationJobResponse = { job: ImageTransformationJob }
type DesignMergeSourceForInsertPagesOperation = {
  type: 'design'
  design_id: string
  page_numbers?: number[] | undefined
}
type MergeSourceForInsertPagesOperation = DesignMergeSourceForInsertPagesOperation
type InsertPagesDesignMergeOperation = {
  type: 'insert_pages'
  source: MergeSourceForInsertPagesOperation
  after_page_number?: number | undefined
}
type MovePagesDesignMergeOperation = {
  type: 'move_pages'
  from_page_numbers: number[]
  to_after_page_number: number
}
type DeletePagesDesignMergeOperation = { type: 'delete_pages'; page_numbers: number[] }
type DesignMergeOperation =
  | InsertPagesDesignMergeOperation
  | MovePagesDesignMergeOperation
  | DeletePagesDesignMergeOperation
type NewDesignCreateDesignMergeJobRequest = {
  type: 'create_new_design'
  operations: DesignMergeOperation[]
  title: string
}
type ModifyDesignCreateDesignMergeJobRequest = {
  type: 'modify_existing_design'
  design_id: string
  operations: DesignMergeOperation[]
  title?: string | undefined
}
type CreateDesignMergeJobRequest =
  | NewDesignCreateDesignMergeJobRequest
  | ModifyDesignCreateDesignMergeJobRequest
type DesignMergeJobStatus = 'in_progress' | 'success' | 'failed'
type DesignMergeJobResult = { design: DesignSummary }
type DesignMergeErrorCode =
  | 'thumbnail_generation_error'
  | 'merge_error'
  | 'create_design_error'
  | 'modify_design_error'
type DesignMergeError = { code: DesignMergeErrorCode; message: string }
type DesignMergeJob = {
  id: string
  status: DesignMergeJobStatus
  result?: DesignMergeJobResult | undefined
  error?: DesignMergeError | undefined
}
type CreateDesignMergeJobResponse = { job: DesignMergeJob }
type GetDesignMergeJobResponse = { job: DesignMergeJob }
type ExchangeAuthCodeRequest = {
  grant_type: 'authorization_code'
  code_verifier: string
  code: string
  client_id?: string | undefined
  client_secret?: string | undefined
  redirect_uri?: string | undefined
}
type ExchangeRefreshTokenRequest = {
  grant_type: 'refresh_token'
  client_id?: string | undefined
  client_secret?: string | undefined
  refresh_token: string
  scope?: string | undefined
}
type ExchangeClientCredentialsRequest = {
  grant_type: 'client_credentials'
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
}
type ExchangeAccessTokenRequest =
  | ExchangeAuthCodeRequest
  | ExchangeRefreshTokenRequest
  | ExchangeClientCredentialsRequest
type ExchangeAccessTokenResponse = {
  access_token: string
  refresh_token: string
  token_type: string
  expires_in: bigint
  scope?: string | undefined
}
type OauthError = { error: ErrorCode; error_description: string }
type IntrospectTokenRequest = {
  token: string
  client_id?: string | undefined
  client_secret?: string | undefined
}
type IntrospectTokenResponse = {
  active: boolean
  scope?: string | undefined
  client?: string | undefined
  exp?: bigint | undefined
  iat?: bigint | undefined
  nbf?: bigint | undefined
  jti?: string | undefined
  sub?: string | undefined
}
type RevokeTokensRequest = {
  token: string
  client_id?: string | undefined
  client_secret?: string | undefined
}
type RevokeTokensResponse = { [x: string]: unknown }
type JsonWebKeySet = { keys: JsonWebKey[] }
type UserInfoResponse = {
  sub: string
  name?: string | undefined
  given_name?: string | undefined
  family_name?: string | undefined
  email?: string | undefined
  email_verified?: boolean | undefined
}
type CreateDesignResizeJobRequest = { design_id: string; design_type: DesignTypeInput }
type DesignResizeStatus = 'in_progress' | 'success' | 'failed'
type TrialInformation = { uses_remaining: number; upgrade_url: string }
type DesignResizeJobResult = {
  design: DesignSummary
  trial_information?: TrialInformation | undefined
}
type DesignResizeErrorCode =
  | 'thumbnail_generation_error'
  | 'design_resize_error'
  | 'create_design_error'
  | 'trial_quota_exceeded'
type DesignResizeError = { code: DesignResizeErrorCode; message: string }
type DesignResizeJob = {
  id: string
  status: DesignResizeStatus
  result?: DesignResizeJobResult | undefined
  error?: DesignResizeError | undefined
}
type CreateDesignResizeJobResponse = { job: DesignResizeJob }
type GetDesignResizeJobResponse = { job: DesignResizeJob }
type UsersMeResponse = { team_user: TeamUserSummary }
type Capability =
  | 'analytics'
  | 'autofill'
  | 'background_removal'
  | 'brand_template'
  | 'design_generation'
  | 'export_png_transparency'
  | 'image_generation'
  | 'image_to_design_imports'
  | 'resize'
  | 'team_restricted_app'
type GetUserCapabilitiesResponse = { capabilities?: Capability[] | undefined }
type UserProfile = { display_name?: string | undefined }
type UserProfileResponse = { profile: UserProfile }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/designs/:designId/analytics': {
      $get:
        | {
            input: { param: { designId: string } }
            output: GetDesignAnalyticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/analytics/viewers': {
      $get:
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: GetDesignAnalyticsViewersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                link_id?: string | undefined
                first_viewed_after?: bigint | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/analytics/views-over-time': {
      $get:
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: GetDesignAnalyticsViewsOverTimeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                start_time?: bigint | undefined
                end_time?: bigint | undefined
                timezone?: string | undefined
                limit?: number | undefined
                continuation?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/analytics/page-views': {
      $post:
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: GetDesignAnalyticsPageViewsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { designId: string } } & { json: GetDesignAnalyticsPageViewsRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/analytics/links': {
      $get:
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: GetDesignAnalyticsLinksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { designId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/apps/:appId/jwks': {
      $get:
        | {
            input: { param: { appId: string } }
            output: GetAppJwksResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { appId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/assets/:assetId': {
      $delete:
        | { input: { param: { assetId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { assetId: string } }
            output: GetAssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { assetId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { assetId: string } } & { json: UpdateAssetRequest }
            output: UpdateAssetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: string } } & { json: UpdateAssetRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assetId: string } } & { json: UpdateAssetRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { assetId: string } } & { json: UpdateAssetRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/asset-uploads': {
      $post:
        | {
            input: { header: { 'Asset-Upload-Metadata': AssetUploadMetadata } } & { json: File }
            output: CreateAssetUploadJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Asset-Upload-Metadata': AssetUploadMetadata } } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/asset-uploads/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetAssetUploadJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/url-asset-uploads': {
      $post:
        | {
            input: { json: CreateUrlAssetUploadJobRequest }
            output: CreateUrlAssetUploadJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateUrlAssetUploadJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUrlAssetUploadJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUrlAssetUploadJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/url-asset-uploads/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetUrlAssetUploadJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/autofills': {
      $post:
        | {
            input: { json: CreateDesignAutofillJobRequest }
            output: CreateDesignAutofillJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDesignAutofillJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDesignAutofillJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDesignAutofillJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDesignAutofillJobRequest }
            output: FeatureQuotaExceededError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateDesignAutofillJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/autofills/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetDesignAutofillJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/brand-templates': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                limit?: number | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                dataset?: DatasetFilter | undefined
              }
            }
            output: ListBrandTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                limit?: number | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                dataset?: DatasetFilter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                limit?: number | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                dataset?: DatasetFilter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                limit?: number | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                dataset?: DatasetFilter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: PublishBrandTemplateRequest }
            output: PublishBrandTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublishBrandTemplateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PublishBrandTemplateRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PublishBrandTemplateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PublishBrandTemplateRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/brand-templates/:brandTemplateId': {
      $get:
        | {
            input: { param: { brandTemplateId: string } }
            output: GetBrandTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { brandTemplateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { brandTemplateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { brandTemplateId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/brand-templates/:brandTemplateId/dataset': {
      $get:
        | {
            input: { param: { brandTemplateId: string } }
            output: GetBrandTemplateDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { brandTemplateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { brandTemplateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { brandTemplateId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/comments': {
      $post:
        | {
            input: { json: CreateCommentRequest }
            output: CreateCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateCommentRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCommentRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateCommentRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateCommentRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/comments/:threadId/replies': {
      $get:
        | {
            input: { param: { designId: string; threadId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: ListRepliesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              query: { limit?: number | undefined; continuation?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { designId: string; threadId: string } } & {
              json: CreateReplyV2Request
            }
            output: CreateReplyV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              json: CreateReplyV2Request
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              json: CreateReplyV2Request
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              json: CreateReplyV2Request
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string; threadId: string } } & {
              json: CreateReplyV2Request
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/comments/:threadId': {
      $get:
        | {
            input: { param: { designId: string; threadId: string } }
            output: GetThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string; threadId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string; threadId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string; threadId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/comments/:threadId/replies/:replyId': {
      $get:
        | {
            input: { param: { designId: string; threadId: string; replyId: string } }
            output: GetReplyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string; threadId: string; replyId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string; threadId: string; replyId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string; threadId: string; replyId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/comments': {
      $post:
        | {
            input: { param: { designId: string } } & { json: CreateThreadRequest }
            output: CreateThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & { json: CreateThreadRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } } & { json: CreateThreadRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & { json: CreateThreadRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & { json: CreateThreadRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/connect/keys': {
      $get:
        | { input: {}; output: GetSigningPublicKeysResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/designs': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                limit?: number | undefined
              }
            }
            output: GetListDesignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                continuation?: string | undefined
                ownership?: OwnershipType | undefined
                sort_by?: SortByType | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateDesignRequest }
            output: CreateDesignResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateDesignRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateDesignRequest }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: CreateDesignRequest }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: CreateDesignRequest }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: CreateDesignRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/designs/:designId': {
      $get:
        | {
            input: { param: { designId: string } }
            output: GetDesignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/pages': {
      $get:
        | {
            input: { param: { designId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: GetDesignPagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { designId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/export-formats': {
      $get:
        | {
            input: { param: { designId: string } }
            output: GetDesignExportFormatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/designs/:designId/dataset': {
      $get:
        | {
            input: { param: { designId: string } }
            output: GetDesignDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/print-partner/designs': {
      $post:
        | {
            input: { json: CreatePrintPartnerDesignRequest }
            output: CreatePrintPartnerDesignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePrintPartnerDesignRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePrintPartnerDesignRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePrintPartnerDesignRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePrintPartnerDesignRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreatePrintPartnerDesignRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/print-partner/designs/:designId': {
      $get:
        | {
            input: { param: { designId: string } } & {
              query: {
                bleed?: number | undefined
                min_pages?: number | undefined
                max_pages?: number | undefined
              }
            }
            output: GetPrintPartnerDesignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                bleed?: number | undefined
                min_pages?: number | undefined
                max_pages?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                bleed?: number | undefined
                min_pages?: number | undefined
                max_pages?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { designId: string } } & {
              query: {
                bleed?: number | undefined
                min_pages?: number | undefined
                max_pages?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/generations': {
      $post:
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: CreateDesignGenerationJobResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDesignGenerationJobRequestV2 }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/generations/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetDesignGenerationJobResponseV2
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/imports': {
      $post:
        | {
            input: { header: { 'Import-Metadata': DesignImportMetadata } } & { json: File }
            output: CreateDesignImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Import-Metadata': DesignImportMetadata } } & { json: File }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/imports/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetDesignImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/url-imports': {
      $post:
        | {
            input: { json: CreateUrlImportJobRequest }
            output: CreateUrlImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateUrlImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUrlImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUrlImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/url-imports/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetUrlImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/image-to-design-imports': {
      $post:
        | {
            input: { json: CreateImageToDesignImportJobRequest }
            output: CreateImageToDesignImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateImageToDesignImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImageToDesignImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateImageToDesignImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateImageToDesignImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateImageToDesignImportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/image-to-design-imports/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetImageToDesignImportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/exports': {
      $post:
        | {
            input: { json: CreateDesignExportJobRequest }
            output: CreateDesignExportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/print-partner/exports': {
      $post:
        | {
            input: { json: CreatePrintPartnerDesignExportJobRequest }
            output: CreatePrintPartnerDesignExportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePrintPartnerDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePrintPartnerDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePrintPartnerDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePrintPartnerDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreatePrintPartnerDesignExportJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/exports/:exportId': {
      $get:
        | {
            input: { param: { exportId: string } }
            output: GetDesignExportJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { exportId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/folders/:folderId': {
      $delete:
        | { input: { param: { folderId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { folderId: string } }
            output: GetFolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folderId: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { folderId: string } } & { json: UpdateFolderRequest }
            output: UpdateFolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string } } & { json: UpdateFolderRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: string } } & { json: UpdateFolderRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folderId: string } } & { json: UpdateFolderRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folderId: string } } & { json: UpdateFolderRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/folders/:folderId/items': {
      $get:
        | {
            input: { param: { folderId: string } } & {
              query: {
                continuation?: string | undefined
                limit?: number | undefined
                item_types?: FolderItemType[] | undefined
                sort_by?: FolderItemSortBy | undefined
                pin_status?: FolderItemPinStatus | undefined
              }
            }
            output: ListFolderItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string } } & {
              query: {
                continuation?: string | undefined
                limit?: number | undefined
                item_types?: FolderItemType[] | undefined
                sort_by?: FolderItemSortBy | undefined
                pin_status?: FolderItemPinStatus | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { folderId: string } } & {
              query: {
                continuation?: string | undefined
                limit?: number | undefined
                item_types?: FolderItemType[] | undefined
                sort_by?: FolderItemSortBy | undefined
                pin_status?: FolderItemPinStatus | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { folderId: string } } & {
              query: {
                continuation?: string | undefined
                limit?: number | undefined
                item_types?: FolderItemType[] | undefined
                sort_by?: FolderItemSortBy | undefined
                pin_status?: FolderItemPinStatus | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folderId: string } } & {
              query: {
                continuation?: string | undefined
                limit?: number | undefined
                item_types?: FolderItemType[] | undefined
                sort_by?: FolderItemSortBy | undefined
                pin_status?: FolderItemPinStatus | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/folders/move': {
      $post:
        | { input: { json: MoveFolderItemRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: MoveFolderItemRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MoveFolderItemRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MoveFolderItemRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MoveFolderItemRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/folders': {
      $post:
        | {
            input: { json: CreateFolderRequest }
            output: CreateFolderResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateFolderRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateFolderRequest }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: CreateFolderRequest }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: CreateFolderRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/image-generations': {
      $post:
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: CreateImageGenerationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateImageGenerationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/image-generations/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetImageGenerationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/image-transformations': {
      $post:
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: CreateImageTransformationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateImageTransformationJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/image-transformations/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetImageTransformationJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/merges': {
      $post:
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: CreateDesignMergeJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateDesignMergeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/merges/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetDesignMergeJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/oauth/token': {
      $post:
        | {
            input: { json: ExchangeAccessTokenRequest } & { form: ExchangeAccessTokenRequest }
            output: ExchangeAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExchangeAccessTokenRequest } & { form: ExchangeAccessTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExchangeAccessTokenRequest } & { form: ExchangeAccessTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExchangeAccessTokenRequest } & { form: ExchangeAccessTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ExchangeAccessTokenRequest } & { form: ExchangeAccessTokenRequest }
            output: OauthError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/oauth/introspect': {
      $post:
        | {
            input: { json: IntrospectTokenRequest } & { form: IntrospectTokenRequest }
            output: IntrospectTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IntrospectTokenRequest } & { form: IntrospectTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IntrospectTokenRequest } & { form: IntrospectTokenRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IntrospectTokenRequest } & { form: IntrospectTokenRequest }
            output: OauthError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/oauth/revoke': {
      $post:
        | {
            input: { json: RevokeTokensRequest } & { form: RevokeTokensRequest }
            output: RevokeTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RevokeTokensRequest } & { form: RevokeTokensRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RevokeTokensRequest } & { form: RevokeTokensRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RevokeTokensRequest } & { form: RevokeTokensRequest }
            output: OauthError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/oidc/jwks': {
      $get:
        | { input: {}; output: JsonWebKeySet; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/oidc/userinfo': {
      $get:
        | { input: {}; output: UserInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/resizes': {
      $post:
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: CreateDesignResizeJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: FeatureQuotaExceededError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateDesignResizeJobRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/resizes/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: GetDesignResizeJobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { jobId: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/users/me': {
      $get:
        | { input: {}; output: UsersMeResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/users/me/capabilities': {
      $get:
        | { input: {}; output: GetUserCapabilitiesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/users/me/profile': {
      $get:
        | { input: {}; output: UserProfileResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
