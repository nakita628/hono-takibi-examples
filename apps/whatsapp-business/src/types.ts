type BusinessVerificationStatus = 'VERIFIED' | 'UNVERIFIED' | 'PENDING' | 'REJECTED'
type BusinessStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'PENDING_APPROVAL'
type ConnectedClientBusiness = {
  id: string
  name: string
  verification_status?: BusinessVerificationStatus | undefined
  business_status?: BusinessStatus | undefined
  created_time?: string | undefined
  updated_time?: string | undefined
}
type CursorPaging = {
  cursors?: { before?: string | undefined; after?: string | undefined } | undefined
  previous?: string | undefined
  next?: string | undefined
}
type ConnectedClientBusinessesResponse = {
  data?: ConnectedClientBusiness[] | undefined
  paging?: CursorPaging | undefined
}
type GraphAPIError = {
  error: {
    message: string
    type: string
    code: number
    error_subcode?: number | undefined
    fbtrace_id?: string | undefined
    is_transient?: boolean | undefined
    error_user_title?: string | undefined
    error_user_msg?: string | undefined
  }
}
type WhatsAppBusinessAccountConfigurablePermissionTask = 'MESSAGING'
type WhatsAppBusinessSolutionCreateRequest = {
  owner_permissions: WhatsAppBusinessAccountConfigurablePermissionTask[]
  partner_app_id: string
  partner_permissions: WhatsAppBusinessAccountConfigurablePermissionTask[]
  solution_name: string
}
type WhatsAppBusinessSolutionCreateResponse = { solution_id: string }
type WhatsAppBusinessSolutionApplicationRole = 'OWNER' | 'PARTNER'
type WhatsAppBusinessSolutionStatus = 'DRAFT' | 'INITIATED' | 'ACTIVE' | 'REJECTED' | 'DEACTIVATED'
type WhatsAppBusinessSolutionPendingStatus = 'PENDING_ACTIVATION' | 'PENDING_DEACTIVATION' | 'NONE'
type ApplicationNode = { id?: string | undefined; name?: string | undefined }
type WhatsAppBusinessAccountPermissionTask =
  | 'MANAGE'
  | 'DEVELOP'
  | 'MANAGE_TEMPLATES'
  | 'MANAGE_PHONE'
  | 'VIEW_COST'
  | 'MANAGE_EXTENSIONS'
  | 'VIEW_PHONE_ASSETS'
  | 'MANAGE_PHONE_ASSETS'
  | 'VIEW_TEMPLATES'
  | 'VIEW_INSIGHTS'
  | 'RECEIVE_INCOMING_MESSAGES'
  | 'MANAGE_BILLING'
  | 'MANAGE_USERS'
  | 'MESSAGING'
  | 'FULL_CONTROL'
type WhatsAppBusinessSolution = {
  id: string
  name: string
  status: WhatsAppBusinessSolutionStatus
  status_for_pending_request: WhatsAppBusinessSolutionPendingStatus
  owner_app?: ApplicationNode | undefined
  owner_permissions?: WhatsAppBusinessAccountPermissionTask[] | undefined
}
type WhatsAppBusinessSolutionsResponse = {
  data?: WhatsAppBusinessSolution[] | undefined
  paging?: CursorPaging | undefined
}
type AddPhoneNumbersRequest = { phone_number: string }
type AddPhoneNumbersResponse = { id: string }
type PhoneNumberVerificationStatus = 'VERIFIED' | 'PENDING' | 'FAILED' | 'EXPIRED'
type PhoneNumberAvailabilityStatus = 'AVAILABLE' | 'IN_USE' | 'RESERVED' | 'UNAVAILABLE'
type WhatsAppBusinessFeature =
  | 'MESSAGING'
  | 'BUSINESS_PROFILE'
  | 'WEBHOOKS'
  | 'TEMPLATES'
  | 'ANALYTICS'
  | 'COMMERCE'
  | 'FLOWS'
type PreVerifiedPhoneNumber = {
  id: string
  display_phone_number: string
  country_prefix?: number | undefined
  verification_status: PhoneNumberVerificationStatus
  availability_status?: PhoneNumberAvailabilityStatus | undefined
  created_time?: string | undefined
  last_updated?: string | undefined
  supported_features?: WhatsAppBusinessFeature[] | undefined
  country_code?: string | undefined
  region?: string | undefined
}
type PreVerifiedPhoneNumbersResponse = {
  data: PreVerifiedPhoneNumber[]
  paging?: CursorPaging | undefined
}
type AccountReviewStatus = 'APPROVED' | 'PENDING' | 'REJECTED' | 'RESTRICTED'
type OwnershipType = 'SELF_OWNED' | 'CLIENT_OWNED' | 'AGENCY_OWNED'
type SubscribedApp = { id?: string | undefined; name?: string | undefined }
type OnBehalfOfBusinessInfo = { id?: string | undefined; name?: string | undefined }
type BusinessSchedule = {
  day_of_week?:
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  open_time?: string | undefined
  close_time?: string | undefined
}
type DCCConfig = { enabled?: boolean | undefined; policy_url?: string | undefined }
type MessageTemplate = {
  id?: string | undefined
  name?: string | undefined
  status?: 'APPROVED' | 'PENDING' | 'REJECTED' | 'DISABLED' | undefined
}
type PhoneNumber = {
  id?: string | undefined
  display_phone_number?: string | undefined
  verified_name?: string | undefined
}
type WhatsAppBusinessAccount = {
  id: string
  name: string
  account_review_status?: AccountReviewStatus | undefined
  purchase_order_number?: string | undefined
  audiences?: string[] | undefined
  ownership_type?: OwnershipType | undefined
  subscribed_apps?: SubscribedApp[] | undefined
  business_verification_status?: BusinessVerificationStatus | undefined
  country?: string | undefined
  currency?: string | undefined
  timezone_id?: string | undefined
  on_behalf_of_business_info?: OnBehalfOfBusinessInfo | undefined
  schedules?: BusinessSchedule[] | undefined
  is_enabled_for_insights?: boolean | undefined
  dcc_config?: DCCConfig | undefined
  message_templates?: MessageTemplate[] | undefined
  phone_numbers?: PhoneNumber[] | undefined
}
type ClientWhatsAppBusinessAccountsResponse = {
  data?: WhatsAppBusinessAccount[] | undefined
  paging?: CursorPaging | undefined
}
type MMLiteOnboardingRequest = { request_id: string }
type WhatsAppBusinessType = 'ENTERPRISE' | 'SMB'
type WhatsAppBusinessAccountsConnection = {
  data: WhatsAppBusinessAccount[]
  paging?: CursorPaging | undefined
}
type PreVerifiedPhoneNumberShareRequest = { preverified_id: string; partner_business_id: string }
type PreVerifiedPhoneNumberShareResponse = { success: boolean }
type BlockedUser = { messaging_product?: string | undefined; wa_id?: string | undefined }
type PaginationCursors = { after?: string | undefined; before?: string | undefined }
type Paging = { cursors?: PaginationCursors | undefined }
type GetBlockedUsersData = { data?: BlockedUser[] | undefined; paging?: Paging | undefined }
type BlockedUserOperation = { input?: string | undefined; wa_id?: string | undefined }
type BlockUsersResult = { added_users?: BlockedUserOperation[] | undefined }
type BlockUsersData = {
  block_users?: BlockUsersResult | undefined
  messaging_product?: string | undefined
}
type UnblockUsersResult = { removed_users?: BlockedUserOperation[] | undefined }
type UnblockUsersData = {
  block_users?: UnblockUsersResult | undefined
  messaging_product?: string | undefined
}
type CallPermissionCheckResponsePayload = {
  messaging_product: string
  permission: {
    status: 'granted' | 'pending' | 'denied' | 'expired'
    expiration_time?: bigint | undefined
  }
  actions?:
    | {
        action_name: 'start_call' | 'send_call_permission_request'
        can_perform_action: boolean
        limits?:
          | {
              time_period: string
              current_usage: number
              max_allowed: number
              limit_expiration_time?: bigint | undefined
            }[]
          | undefined
      }[]
    | undefined
}
type ErrorObject = { message: string; type: string; code: number }
type ErrorResponse = { error: ErrorObject }
type CallRequestPayload = {
  messaging_product: string
  to: string
  action: 'connect' | 'pre_accept' | 'accept' | 'reject' | 'terminate'
  session?: { sdp_type: 'offer' | 'answer'; sdp: string } | undefined
  biz_opaque_callback_data?: string | undefined
}
type CallTerminateRequestPayload = {
  messaging_product: string
  call_id: string
  action: 'terminate'
}
type CallResponsePayload = {
  messaging_product?: string | undefined
  calls?: { id?: string | undefined }[] | undefined
}
type CallTerminateResponsePayload = { success?: boolean | undefined }
type PagingInfo = {
  cursors?: { before?: string | undefined; after?: string | undefined } | undefined
  previous?: string | undefined
  next?: string | undefined
}
type LanguageObject = { policy: 'deterministic'; code: string }
type TemplateComponent = {
  type: 'header' | 'body' | 'button'
  sub_type?: 'quick_reply' | 'url' | 'catalog' | undefined
  parameters?: unknown[] | undefined
  index?: string | undefined
}
type TemplateObject = {
  name: string
  language: LanguageObject
  components?: TemplateComponent[] | undefined
}
type MarketingMessageRequestPayload = {
  messaging_product: 'whatsapp'
  recipient_type: 'individual'
  to: string
  type: 'template'
  template: TemplateObject
  product_policy?: 'CLOUD_API_FALLBACK' | 'STRICT' | undefined
  message_activity_sharing?: boolean | undefined
}
type MessageStatus = 'accepted' | 'held_for_quality_assessment' | 'paused'
type MarketingMessageResponsePayload = {
  contacts?: { input?: string | undefined; wa_id?: string | undefined }[] | undefined
  messages?: { id?: string | undefined; message_status?: MessageStatus | undefined }[] | undefined
  messaging_product?: string | undefined
}
type MessageContext = { message_id?: string | undefined }
type TextMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'text'
  context?: MessageContext | undefined
  text: { body?: string | undefined; preview_url?: boolean | undefined }
}
type MediaObject = { id: string } | { link: string }
type AudioMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'audio'
  context?: MessageContext | undefined
  audio: MediaObject
}
type DocumentMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'document'
  context?: MessageContext | undefined
  document: MediaObject
}
type ImageMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'image'
  context?: MessageContext | undefined
  image: MediaObject
}
type LocationMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'location'
  context?: MessageContext | undefined
  location: {
    address?: string | undefined
    latitude?: string | undefined
    longitude?: string | undefined
    name?: string | undefined
  }
}
type VideoMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'video'
  context?: MessageContext | undefined
  video: MediaObject
}
type StickerMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'sticker'
  context?: MessageContext | undefined
  sticker: { id: string } | { link: string }
}
type ReactionMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'reaction'
  context?: MessageContext | undefined
  reaction: { emoji?: string | undefined; message_id?: string | undefined }
}
type HeaderObject = {
  type: 'text' | 'video' | 'image' | 'document'
  text?: string | undefined
  sub_text?: string | undefined
  document?: MediaObject | undefined
  image?: MediaObject | undefined
  video?: MediaObject | undefined
}
type BodyObject = { text: string }
type FooterObject = { text: string }
type SectionObject = {
  title?: string | undefined
  product_items?: { product_retailer_id: string }[] | undefined
  rows?: { id: string; title: string; description?: string | undefined }[] | undefined
}
type ActionObject =
  | { button: string; sections: SectionObject[] }
  | { buttons: { type: 'reply'; reply: { id: string; title: string } }[] }
  | {
      catalog_id: string
      product_retailer_id?: string | undefined
      sections?: SectionObject[] | undefined
    }
  | { name: 'catalog_message'; parameters: { thumbnail_product_retailer_id: string } }
  | { name: 'flow'; parameters: { [x: string]: unknown } | { [x: string]: unknown } }
  | { name: 'call_permission_request' }
type InteractiveObject = {
  type:
    | 'button'
    | 'call_permission_request'
    | 'catalog_message'
    | 'list'
    | 'product'
    | 'product_list'
    | 'flow'
  header?: HeaderObject | undefined
  body?: BodyObject | undefined
  footer?: FooterObject | undefined
  action: ActionObject
}
type InteractiveMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'interactive'
  context?: MessageContext | undefined
  interactive: InteractiveObject
}
type TemplateMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'template'
  context?: MessageContext | undefined
  template: TemplateObject
}
type AddressObject = {
  city?: string | undefined
  country?: string | undefined
  country_code?: string | undefined
  state?: string | undefined
  street?: string | undefined
  type?: 'HOME' | 'WORK' | undefined
  zip?: string | undefined
}
type EmailObject = { email: string; type?: 'HOME' | 'WORK' | undefined }
type NameObject = {
  first_name?: string | undefined
  formatted_name?: string | undefined
  last_name?: string | undefined
  middle_name?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
}
type OrganizationObject = {
  company?: string | undefined
  department?: string | undefined
  title?: string | undefined
}
type PhoneObject = { phone: string; type?: 'HOME' | 'WORK' | undefined; wa_id?: string | undefined }
type UrlObject = { type?: 'HOME' | 'WORK' | undefined; url: string }
type ContactObject = {
  addresses?: AddressObject[] | undefined
  birthday?: string | undefined
  emails?: EmailObject[] | undefined
  name?: NameObject | undefined
  org?: OrganizationObject | undefined
  phones?: PhoneObject[] | undefined
  urls?: UrlObject[] | undefined
}
type ContactsMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'contacts'
  context?: MessageContext | undefined
  contacts: ContactObject[]
}
type Message =
  | TextMessage
  | AudioMessage
  | DocumentMessage
  | ImageMessage
  | LocationMessage
  | VideoMessage
  | StickerMessage
  | ReactionMessage
  | InteractiveMessage
  | TemplateMessage
  | ContactsMessage
type MessageResponsePayload = {
  contacts?: { input?: string | undefined; wa_id?: string | undefined }[] | undefined
  messages?: { id?: string | undefined; message_status?: MessageStatus | undefined }[] | undefined
  messaging_product?: string | undefined
}
type QrCodeDetails = {
  code: string
  prefilled_message: string
  deep_link_url: string
  creation_time?: number | undefined
  qr_image_url?: string | undefined
}
type QrCodeList = {
  data: QrCodeDetails[]
  paging?:
    | {
        cursors?: { before?: string | undefined; after?: string | undefined } | undefined
        previous?: string | undefined
        next?: string | undefined
      }
    | undefined
}
type CreateQrCodeRequest = {
  prefilled_message: string
  generate_qr_image?: 'PNG' | 'SVG' | undefined
}
type UpdateQrCodeRequest = { code: string; prefilled_message: string }
type QrCodeResponse = {
  code: string
  prefilled_message: string
  deep_link_url: string
  qr_image_url?: string | undefined
}
type DeleteQrCodeResponse = { success: boolean }
type EncryptedMessageRequest = { messaging_product: 'whatsapp'; encrypted_contents: string }
type EncryptedMessageResponse = { encrypted_contents: string }
type WhatsAppBusinessAppealStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED'
  | 'UNDER_REVIEW'
  | 'EXPIRED'
  | 'CANCELLED'
type OfficialBusinessAccountStatus = {
  id: string
  oba_status: WhatsAppBusinessAppealStatus
  status_message: string
}
type OfficialBusinessAccountUpdateRequest = {
  business_website_url: string
  primary_country_of_operation: string
  primary_language?: string | undefined
  parent_business_or_brand?: string | undefined
  supporting_links?: string[] | undefined
  additional_supporting_information?: string | undefined
}
type OfficialBusinessAccountUpdateResponse = {
  success: boolean
  message: string
  updated_status?: OfficialBusinessAccountStatus | undefined
  tracking_id?: string | undefined
}
type PhoneNumberInfo = {
  id?: string | undefined
  display_phone_number?: string | undefined
  verified_name?: string | undefined
  quality_rating?: 'GREEN' | 'YELLOW' | 'RED' | 'NA' | undefined
  code_verification_status?: 'VERIFIED' | 'UNVERIFIED' | undefined
  name_status?:
    | 'APPROVED'
    | 'AVAILABLE_WITHOUT_REVIEW'
    | 'DECLINED'
    | 'EXPIRED'
    | 'PENDING_REVIEW'
    | 'NONE'
    | undefined
}
type WhatsAppBusinessAccountToNumberStatus =
  | 'CONNECTED'
  | 'DISCONNECTED'
  | 'PENDING'
  | 'FLAGGED'
  | 'RESTRICTED'
  | 'RATE_LIMITED'
  | 'MESSAGING_LIMIT_TIER_0'
  | 'MESSAGING_LIMIT_TIER_1'
  | 'MESSAGING_LIMIT_TIER_2'
  | 'MESSAGING_LIMIT_TIER_3'
  | 'MESSAGING_LIMIT_TIER_4'
type WhatsAppBusinessApiData = {
  pin?: string | undefined
  show_security_notifications?: boolean | undefined
  notify_user_change_number?: boolean | undefined
}
type WAAPIBusinessGlobalSearchStateStatus = 'VISIBLE' | 'HIDDEN'
type WebhookConfiguration = { override_callback_uri: string; verify_token?: string | undefined }
type PhoneNumberStatusUpdateRequest = {
  connection_status?: WhatsAppBusinessAccountToNumberStatus | undefined
  webhook_url?: string | undefined
  whatsapp_business_api_data?: WhatsAppBusinessApiData | undefined
  pin?: string | undefined
  search_visibility?: WAAPIBusinessGlobalSearchStateStatus | undefined
  webhook_configuration?: WebhookConfiguration | undefined
  new_display_name?: string | undefined
  username?: string | undefined
}
type ContactResponse = { input: string; wa_id?: string | undefined }
type MessageResponseItem = { id: string }
type MessageResponse = {
  messaging_product: 'whatsapp'
  contacts: ContactResponse[]
  messages: MessageResponseItem[]
}
type SuccessResponse = { success: boolean }
type DeregisterResponse = { success: boolean }
type WhatsAppMessageDeliveryStatus = 'SENT' | 'DELIVERED' | 'READ' | 'FAILED' | 'DELETED'
type WebhookUpdateState = 'PENDING' | 'DELIVERED' | 'FAILED' | 'RETRYING'
type MessageDeliveryStatusEvent = {
  id: string
  delivery_status: WhatsAppMessageDeliveryStatus
  webhook_update_state?: WebhookUpdateState | undefined
  timestamp: bigint
  application?: { id?: string | undefined } | undefined
  webhook_uri?: string | undefined
  error_description?: string | undefined
}
type PaginationInfo = {
  cursors?: { before?: string | undefined; after?: string | undefined } | undefined
  previous?: string | undefined
  next?: string | undefined
}
type WhatsAppMessageHistory = {
  id: string
  message_id: string
  events?:
    | { data?: MessageDeliveryStatusEvent[] | undefined; paging?: PaginationInfo | undefined }
    | undefined
}
type MessageHistoryResponse = {
  data?: WhatsAppMessageHistory[] | undefined
  paging?: PaginationInfo | undefined
}
type WhatsAppBusinessAccountBackup = { password?: string | undefined; data?: string | undefined }
type WhatsAppDataLocalizationRegion =
  | 'AE'
  | 'AU'
  | 'BH'
  | 'BR'
  | 'CA'
  | 'CH'
  | 'DE'
  | 'GB'
  | 'ID'
  | 'IN'
  | 'JP'
  | 'KR'
  | 'SG'
  | 'ZA'
type WhatsAppBusinessPhoneNumberRegistrationRequest = {
  messaging_product: 'whatsapp'
  pin: string
  backup?: WhatsAppBusinessAccountBackup | undefined
  data_localization_region?: WhatsAppDataLocalizationRegion | undefined
  meta_store_retention_minutes?: number | undefined
}
type WhatsAppBusinessPhoneNumberRegistrationResponse = { success: boolean }
type RequestCodeRequest = { code_method: 'SMS' | 'VOICE'; language: string }
type RequestCodeResponse = { success: boolean }
type CallHoursSettings = {
  status: 'enabled' | 'disabled'
  timezone?: string | undefined
  day_of_week_start?: string | undefined
}
type CallIconsSettings = { restrict_to_user_countries?: string[] | undefined }
type SipServerInfo = {
  app_id: string
  hostname: string
  port?: number | undefined
  password?: string | undefined
}
type SipSettingsResponse = { status: 'enabled' | 'disabled'; servers?: SipServerInfo[] | undefined }
type VideoSettingsResponse = { status: 'enabled' | 'disabled' }
type AudioSettingsResponse = { status?: 'enabled' | 'disabled' | undefined }
type CallingRestrictionsResponse = {
  restrictions?: { type?: string | undefined; expiration?: bigint | undefined }[] | undefined
}
type CallingSettingsResponse = {
  status: 'enabled' | 'disabled'
  call_icon_visibility: 'visible' | 'hidden'
  ip_addresses: { default: string[] }
  callback_permission_status: 'enabled' | 'disabled'
  srtp_key_exchange_protocol?: 'DTLS-SRTP' | 'SDES-SRTP' | undefined
  call_hours?: CallHoursSettings | undefined
  call_icons?: CallIconsSettings | undefined
  sip?: SipSettingsResponse | undefined
  video?: VideoSettingsResponse | undefined
  audio?: AudioSettingsResponse | undefined
  restrictions?: CallingRestrictionsResponse | undefined
}
type PayloadEncryptionSettingsResponse = {
  status: 'enabled' | 'disabled'
  client_encryption_key_fingerprint?: string | undefined
  cloud_encryption_key?: string | undefined
}
type StorageConfigurationSettingsResponse = {
  status: 'default' | 'in_country_storage_enabled'
  data_localization_region?: string | undefined
}
type PhoneNumberSettingsResponse = {
  calling: CallingSettingsResponse
  payload_encryption?: PayloadEncryptionSettingsResponse | undefined
  storage_configuration: StorageConfigurationSettingsResponse
}
type CallingSettings = {
  status: 'enabled' | 'disabled'
  call_icon_visibility?: 'visible' | 'hidden' | undefined
}
type CallingSettingsRequest = { calling: CallingSettings }
type UserIdentityChangeSettings = { enabled: boolean }
type UserIdentityChangeSettingsRequest = { user_identity_change: UserIdentityChangeSettings }
type PayloadEncryptionSettings = {
  status: 'enabled' | 'disabled'
  client_encryption_key?: string | undefined
}
type PayloadEncryptionSettingsRequest = { payload_encryption: PayloadEncryptionSettings }
type StorageConfigurationSettings = { enabled: boolean; region?: string | undefined }
type StorageConfigurationSettingsRequest = { storage_configuration: StorageConfigurationSettings }
type VerifyCodeRequest = { code: string }
type VerifyCodeResponse = { success: boolean; id?: string | undefined }
type BusinessPublicKeyVerificationStatus = 'VALID' | 'MISMATCH'
type WhatsAppBusinessEncryptionInfo = {
  business_public_key: string
  business_public_key_signature_status: BusinessPublicKeyVerificationStatus
}
type WhatsAppBusinessEncryptionUploadRequest = { business_public_key: string }
type WhatsAppBusinessEncryptionUploadResponse = { success: boolean }
type WhatsAppBusinessVertical =
  | 'OTHER'
  | 'AUTO'
  | 'BEAUTY'
  | 'APPAREL'
  | 'EDU'
  | 'ENTERTAIN'
  | 'EVENT_PLAN'
  | 'FINANCE'
  | 'GROCERY'
  | 'GOVT'
  | 'HOTEL'
  | 'HEALTH'
  | 'NONPROFIT'
  | 'PROF_SERVICES'
  | 'RETAIL'
  | 'TRAVEL'
  | 'RESTAURANT'
  | 'ALCOHOL'
  | 'ONLINE_GAMBLING'
  | 'PHYSICAL_GAMBLING'
  | 'OTC_DRUGS'
type WhatsAppBusinessProfile = {
  messaging_product: 'whatsapp'
  about?: string | undefined
  address?: string | undefined
  description?: string | undefined
  email?: string | undefined
  profile_picture_url?: string | undefined
  websites?: string[] | undefined
  vertical?: WhatsAppBusinessVertical | undefined
}
type WhatsAppBusinessProfileResponse = {
  data?: { business_profile?: WhatsAppBusinessProfile | undefined }[] | undefined
}
type WhatsAppBusinessProfileUpdateRequest = {
  messaging_product: 'whatsapp'
  about?: string | undefined
  address?: string | undefined
  description?: string | undefined
  email?: string | undefined
  profile_picture_handle?: string | undefined
  websites?: string[] | undefined
  vertical?: WhatsAppBusinessVertical | undefined
}
type WhatsAppBusinessProfileUpdateResponse = { success?: boolean | undefined }
type GrievanceOfficerDetails = {
  name?: string | undefined
  email?: string | undefined
  mobile_number?: string | undefined
  landline_number?: string | undefined
}
type CustomerCareDetails = {
  email?: string | undefined
  mobile_number?: string | undefined
  landline_number?: string | undefined
}
type BusinessComplianceInfo = {
  whatsapp_business_account_id: string
  messaging_product?: 'whatsapp' | undefined
  entity_name?: string | undefined
  entity_type?: string | undefined
  entity_type_custom?: string | undefined
  is_registered?: boolean | undefined
  grievance_officer_details?: GrievanceOfficerDetails | undefined
  customer_care_details?: CustomerCareDetails | undefined
}
type BusinessEntityType =
  | 'LIMITED_LIABILITY_PARTNERSHIP'
  | 'SOLE_PROPRIETORSHIP'
  | 'PARTNERSHIP'
  | 'PUBLIC_COMPANY'
  | 'PRIVATE_COMPANY'
  | 'OTHER'
type GrievanceOfficerUpdateDetails = {
  name: string
  email: string
  mobile_number?: string | undefined
  landline_number?: string | undefined
}
type CustomerCareUpdateDetails = {
  email: string
  mobile_number?: string | undefined
  landline_number?: string | undefined
}
type BusinessComplianceInfoUpdateRequest = {
  messaging_product: 'whatsapp'
  entity_name: string
  entity_type: BusinessEntityType
  entity_type_custom?: string | undefined
  is_registered?: boolean | undefined
  grievance_officer_details: GrievanceOfficerUpdateDetails
  customer_care_details: CustomerCareUpdateDetails
}
type Error = {
  code?: number | undefined
  message?: string | undefined
  title?: string | undefined
  error_data?: { details?: string | undefined } | undefined
}
type GroupInfo = {
  id?: string | undefined
  messaging_product?: string | undefined
  join_approval_mode?: 'approval_required' | 'auto_approve' | undefined
  subject?: string | undefined
  description?: string | undefined
  suspended?: boolean | undefined
  creation_timestamp?: number | undefined
  participants?: { wa_id?: string | undefined }[] | undefined
  total_participant_count?: number | undefined
}
type WhatsAppBusinessMessageDeliveryStatusOccurrence = {
  id: string
  delivery_status: WhatsAppMessageDeliveryStatus
  error_description?: string | undefined
  occurrence_timestamp: bigint
  status_timestamp?: bigint | undefined
  application?: ApplicationNode | undefined
}
type WhatsAppMessageHistoryEventsEdge = {
  cursor?: string | undefined
  node: WhatsAppBusinessMessageDeliveryStatusOccurrence
}
type MessageHistoryEventsResponse = {
  data?: WhatsAppMessageHistoryEventsEdge[] | undefined
  paging?: PaginationInfo | undefined
}
type WhatsAppBusinessAccountMigrationStatus = 'ACCEPTED' | 'COMPLETED' | 'INITIATED' | 'REJECTED'
type WhatsAppBusinessAccountMigrationIntent = {
  id: string
  status: WhatsAppBusinessAccountMigrationStatus
}
type PreVerifiedPhoneNumberValidation = {
  id?: string | undefined
  country_prefix?: number | undefined
  display_phone_number?: string | undefined
  error_msg?: string | undefined
  is_input_id_valid: boolean
}
type BusinessPartner = {
  id: string
  name: string
  created_time?: string | undefined
  updated_time?: string | undefined
  verification_status?: 'not_verified' | 'pending' | 'verified' | undefined
  primary_page?: string | undefined
  timezone_id?: number | undefined
  two_factor_type?: 'none' | 'admin_required' | undefined
}
type WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse = {
  data: BusinessPartner[]
  paging?: CursorPaging | undefined
}
type WhatsAppBusinessSolutionAccessToken = { access_token: string; expires_at: bigint }
type WhatsAppBusinessSolutionAcceptRequest = {
  partner_app_id: string
  log_session_id?: string | undefined
}
type WhatsAppBusinessSolutionPartnerStatus =
  | 'DRAFT'
  | 'INITIATED'
  | 'NOTIFICATION_SENT'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'DEACTIVATED'
type WhatsAppBusinessSolutionAcceptResponse = {
  solution_id: string
  partner_status: WhatsAppBusinessSolutionPartnerStatus
  success: boolean
  message?: string | undefined
  update_time?: string | undefined
}
type SolutionRejectRequest = {
  request_type: 'PARTNERSHIP_REQUEST' | 'DEACTIVATION_REQUEST'
  rejection_reason?: string | undefined
  partner_app_id?: string | undefined
}
type SolutionRejectResponse = {
  success: boolean
  solution_id: string
  rejected_request_type: 'PARTNERSHIP_REQUEST' | 'DEACTIVATION_REQUEST'
  rejection_timestamp?: string | undefined
  partner_app_id?: string | undefined
}
type WhatsAppBusinessSolutionDeactivationRequest = { reason?: string | undefined }
type WhatsAppBusinessSolutionDeactivationResponse = {
  success: boolean
  message: string
  request_id?: string | undefined
}
type WhatsAppBusinessAccountStatus = 'ACTIVE' | 'PENDING' | 'RESTRICTED' | 'DISABLED'
type WhatsAppBusinessAccountPermission =
  | 'MANAGE'
  | 'DEVELOP'
  | 'MANAGE_TEMPLATES'
  | 'MANAGE_PHONE'
  | 'VIEW_COST'
  | 'MANAGE_EXTENSIONS'
  | 'VIEW_PHONE_ASSETS'
  | 'MANAGE_PHONE_ASSETS'
  | 'VIEW_TEMPLATES'
  | 'VIEW_INSIGHTS'
  | 'RECEIVE_INCOMING_MESSAGES'
  | 'MANAGE_BILLING'
  | 'MANAGE_USERS'
  | 'MESSAGING'
  | 'FULL_CONTROL'
type AssignedWhatsAppBusinessAccount = {
  id: string
  name: string
  status: WhatsAppBusinessAccountStatus
  assignment_date?: string | undefined
  permissions?: WhatsAppBusinessAccountPermission[] | undefined
  business_id?: string | undefined
  phone_numbers?: PhoneNumberInfo[] | undefined
}
type AssignedAccountsResponse = {
  data: AssignedWhatsAppBusinessAccount[]
  paging?: PagingInfo | undefined
}
type WhatsAppAccountNumberStatus =
  | 'CONNECTED'
  | 'DISCONNECTED'
  | 'UNVERIFIED'
  | 'PENDING'
  | 'FLAGGED'
  | 'RESTRICTED'
type WhatsAppPhoneNumberQualityRating = 'GREEN' | 'YELLOW' | 'RED' | 'NA'
type WhatsAppCodeVerificationStatus = 'VERIFIED' | 'UNVERIFIED'
type WhatsAppDisplayNameStatus =
  | 'APPROVED'
  | 'AVAILABLE_WITHOUT_REVIEW'
  | 'DECLINED'
  | 'EXPIRED'
  | 'PENDING_REVIEW'
  | 'NONE'
type WhatsAppBusinessSandboxEligibility = 'LIVE' | 'SANDBOX'
type WhatsAppAccountNumber = {
  id: string
  display_phone_number: string
  verified_name?: string | undefined
  status: WhatsAppAccountNumberStatus
  quality_rating?: WhatsAppPhoneNumberQualityRating | undefined
  country_code?: string | undefined
  country_dial_code?: string | undefined
  code_verification_status?: WhatsAppCodeVerificationStatus | undefined
  name_status?: WhatsAppDisplayNameStatus | undefined
  messaging_limit_tier?:
    | 'TIER_50'
    | 'TIER_250'
    | 'TIER_1K'
    | 'TIER_10K'
    | 'TIER_100K'
    | 'TIER_UNLIMITED'
    | undefined
  account_mode?: WhatsAppBusinessSandboxEligibility | undefined
  certificate?: string | undefined
  is_official_business_account?: boolean | undefined
}
type BusinessNode = { id?: string | undefined; name?: string | undefined }
type AssignedUserType = 'BUSINESS_USER' | 'SYSTEM_USER' | 'PERSONAL_USER'
type AssignedUser = {
  id: string
  name: string
  business?: BusinessNode | undefined
  user_type?: AssignedUserType | undefined
}
type AssignedUsersSummary = { total_count?: number | undefined }
type AssignedUsersResponse = {
  data: AssignedUser[]
  paging?: CursorPaging | undefined
  summary?: AssignedUsersSummary | undefined
}
type BotCommand = { command_name: string; command_description: string }
type ConversationalAutomationRequest = {
  enable_welcome_message?: boolean | undefined
  prompts?: string[] | undefined
  commands?: BotCommand[] | undefined
}
type ConversationalAutomationResponse = { success: boolean }
type BusinessRequestStatus =
  | 'APPROVE'
  | 'DECLINE'
  | 'IN_PROGRESS'
  | 'EXPIRED'
  | 'PENDING'
  | 'CANCELED'
  | 'INVALID'
type BusinessOwnedObjectOnBehalfOfRequest = {
  id: string
  status: BusinessRequestStatus
  business_owned_object: string
  receiving_business?: BusinessNode | undefined
  requesting_business?: BusinessNode | undefined
}
type InProgressOnBehalfRequestResponse = {
  data: BusinessOwnedObjectOnBehalfOfRequest[]
  paging?: PaginationInfo | undefined
}
type OBOMobilityIntentNode = {
  id: string
  waba: WhatsAppBusinessAccount
  solution: WhatsAppBusinessSolution
  status?: 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'FAILED' | undefined
  created_time?: string | undefined
  updated_time?: string | undefined
}
type MobilityIntentType =
  | 'INITIATE_TRANSFER'
  | 'CONFIRM_TRANSFER'
  | 'CANCEL_TRANSFER'
  | 'REQUEST_HANDOVER'
  | 'APPROVE_HANDOVER'
  | 'REJECT_HANDOVER'
type OBOMobilityIntentRequest = {
  solution_id: string
  intent_type: MobilityIntentType
  target_solution_id?: string | undefined
  mobility_reason?: string | undefined
  scheduled_execution_time?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type OBOMobilityIntentResponse = {
  success: boolean
  mobility_intent_id: string
  status?:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'SCHEDULED'
    | 'IN_PROGRESS'
    | 'COMPLETED'
    | 'FAILED'
    | undefined
  estimated_completion_time?: string | undefined
  approval_required?: boolean | undefined
  next_steps?: string[] | undefined
}
type WhatsAppPhoneNumberStatus =
  | 'PENDING'
  | 'LINKED'
  | 'UNLINKED'
  | 'DELETED'
  | 'MIGRATED'
  | 'BANNED'
  | 'RESTRICTED'
type WhatsAppBusinessUnifiedCertStatus =
  | 'APPROVED'
  | 'NAME_PENDING_REVIEW'
  | 'NAME_NOT_APPROVED'
  | 'ACCOUNT_REVIEW_NOT_STARTED'
  | 'LIMITED_ACCESS'
type WhatsAppBusinessAccountHostPlatform = 'CLOUD_API' | 'ON_PREMISE' | 'NOT_APPLICABLE'
type WhatsAppBusinessAccountPhoneNumber = {
  id: string
  display_phone_number: string
  verified_name?: string | undefined
  status: WhatsAppPhoneNumberStatus
  quality_rating?: WhatsAppPhoneNumberQualityRating | undefined
  country_code?: string | undefined
  country_dial_code?: string | undefined
  code_verification_status?: WhatsAppCodeVerificationStatus | undefined
  unified_cert_status?: WhatsAppBusinessUnifiedCertStatus | undefined
  account_mode?: WhatsAppBusinessSandboxEligibility | undefined
  host_platform?: WhatsAppBusinessAccountHostPlatform | undefined
  messaging_limit_tier?:
    | 'TIER_50'
    | 'TIER_250'
    | 'TIER_1K'
    | 'TIER_10K'
    | 'TIER_100K'
    | 'TIER_UNLIMITED'
    | undefined
  is_official_business_account?: boolean | undefined
  username?: (string | null) | undefined
}
type WhatsAppBusinessAccountPhoneNumbersConnection = {
  data: WhatsAppBusinessAccountPhoneNumber[]
  paging?: CursorPaging | undefined
}
type PhoneNumberCreateRequest = {
  phone_number: string
  verified_name: string
  cc?: string | undefined
  migrate_phone_number?: boolean | undefined
  preverified_id?: string | undefined
}
type PhoneNumberCreateResponse = { id: string }
type WhatsAppScheduleStatus = 'ACTIVE' | 'INACTIVE' | 'PAUSED' | 'EXPIRED' | 'DRAFT'
type WhatsAppScheduleType =
  | 'BUSINESS_HOURS'
  | 'AUTOMATED_RESPONSE'
  | 'MESSAGE_CAMPAIGN'
  | 'MAINTENANCE_WINDOW'
  | 'CUSTOM'
type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
type RecurrencePattern = {
  frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | undefined
  interval?: number | undefined
  end_date?: string | undefined
}
type WhatsAppBusinessAccountSchedule = {
  id: string
  name: string
  status: WhatsAppScheduleStatus
  schedule_type: WhatsAppScheduleType
  description?: string | undefined
  start_time?: string | undefined
  end_time?: string | undefined
  timezone?: string | undefined
  days_of_week?: DayOfWeek[] | undefined
  created_time?: string | undefined
  updated_time?: string | undefined
  is_active?: boolean | undefined
  recurrence_pattern?: RecurrencePattern | undefined
}
type WhatsAppBusinessAccountSchedulesConnection = {
  data: WhatsAppBusinessAccountSchedule[]
  paging?: CursorPaging | undefined
}
type ScheduleCreateRequest = {
  name: string
  schedule_type: WhatsAppScheduleType
  description?: string | undefined
  start_time: string
  end_time: string
  timezone?: string | undefined
  days_of_week?: DayOfWeek[] | undefined
  is_active?: boolean | undefined
  recurrence_pattern?: RecurrencePattern | undefined
}
type ScheduleCreateResponse = { id: string }
type SetOBOMobilityIntentRequest = {
  waba_id: string
  solution_id?: string | undefined
  app_id?: string | undefined
  actor_id?: string | undefined
  client_mutation_id?: string | undefined
}
type SetOBOMobilityIntentResponse = {
  success: boolean
  intent_id?: string | undefined
  client_mutation_id?: string | undefined
  error_msg?: string | undefined
}
type SolutionMigrationIntent =
  | 'INITIATE_MIGRATION'
  | 'CANCEL_MIGRATION'
  | 'CONFIRM_MIGRATION'
  | 'SCHEDULE_MIGRATION'
type SetSolutionMigrationIntentRequest = {
  solution_id: string
  migration_intent: SolutionMigrationIntent
  target_solution_id?: string | undefined
  migration_reason?: string | undefined
  scheduled_migration_time?: string | undefined
}
type SetSolutionMigrationIntentResponse = {
  success: boolean
  migration_intent_id: string
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'SCHEDULED' | undefined
  estimated_completion_time?: string | undefined
}
type SolutionsList = { data: WhatsAppBusinessSolution[]; paging?: Paging | undefined }
type SubscribedAppsResponse = { data: SubscribedApp[] }
type SubscriptionRequest = {
  override_callback_uri?: string | undefined
  verify_token?: string | undefined
}
type SubscriptionResponse = { success: boolean; data?: SubscribedApp[] | undefined }
type ActivityType =
  | 'ACCOUNT_CREATED'
  | 'ACCOUNT_UPDATED'
  | 'ACCOUNT_DELETED'
  | 'PHONE_NUMBER_ADDED'
  | 'PHONE_NUMBER_REMOVED'
  | 'PHONE_NUMBER_VERIFIED'
  | 'USER_ADDED'
  | 'USER_REMOVED'
  | 'USER_ROLE_CHANGED'
  | 'PERMISSION_GRANTED'
  | 'PERMISSION_REVOKED'
  | 'TEMPLATE_CREATED'
  | 'TEMPLATE_UPDATED'
  | 'TEMPLATE_DELETED'
  | 'WEBHOOK_CONFIGURED'
  | 'API_ACCESS_GRANTED'
  | 'API_ACCESS_REVOKED'
  | 'BILLING_UPDATED'
  | 'COMPLIANCE_ACTION'
  | 'SECURITY_EVENT'
type ActorType = 'USER' | 'SYSTEM' | 'API' | 'ADMIN' | 'AUTOMATED_PROCESS'
type WhatsAppBusinessAccountActivity = {
  id: string
  activity_type: ActivityType
  timestamp: string
  actor_type: ActorType
  actor_id?: string | undefined
  actor_name?: string | undefined
  description?: string | undefined
  details?: { [x: string]: unknown } | undefined
  ip_address?: string | undefined
  user_agent?: string | undefined
}
type ActivityList = { data: WhatsAppBusinessAccountActivity[]; paging?: Paging | undefined }
type WhatsAppBusinessBotCommand = { command_name: string; command_description: string }
type WhatsAppBusinessBot = {
  id: string
  prompts?: string[] | undefined
  commands?: WhatsAppBusinessBotCommand[] | undefined
  enable_welcome_message?: boolean | undefined
}
type WhatsAppBusinessProfileNode = {
  id: string
  account_name?: string | undefined
  description?: string | undefined
  email?: string | undefined
  about?: string | undefined
  address?: string | undefined
  vertical?: WhatsAppBusinessVertical | undefined
  websites?: string[] | undefined
  profile_picture_url?: string | undefined
  profile_picture_handle?: string | undefined
  messaging_product?: 'whatsapp' | undefined
}
type Metadata = { display_phone_number: string; phone_number_id: string }
type ContactProfile = { profile: { name: string }; wa_id?: string | undefined }
type ContactSharingMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'contacts'
  context?: MessageContext | undefined
  contacts: ContactObject[]
}
type UnsupportedMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'unsupported' | 'unknown'
  context?: MessageContext | undefined
  errors: ErrorObject[]
}
type ButtonMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'button'
  context: { from: string; id: string }
  button: { payload: string; text: string }
}
type InteractiveMessageReply = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'interactive'
  context: { from: string; id: string }
  interactive: { type: 'list_reply' | 'button_reply' }
}
type OrderMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'order'
  context?: MessageContext | undefined
  order: {
    catalog_id: string
    text: string
    product_items: {
      product_retailer_id: string
      quantity: number
      item_price: number
      currency: string
    }[]
  }
}
type IncomingMessage =
  | TextMessage
  | ReactionMessage
  | AudioMessage
  | DocumentMessage
  | ImageMessage
  | StickerMessage
  | VideoMessage
  | LocationMessage
  | ContactSharingMessage
  | UnsupportedMessage
  | ButtonMessage
  | InteractiveMessageReply
  | OrderMessage
type IncomingMessageValueGeneral = {
  messaging_product: string
  metadata: Metadata
  contacts: ContactProfile[]
  messages: IncomingMessage[]
}
type SystemMessage = {
  messaging_product: string
  recipient_type: 'individual' | 'group'
  to: string
  type: 'system'
  context?: MessageContext | undefined
  system: {
    body: string
    wa_id?: string | undefined
    type: 'user_changed_number' | 'user_changed_user_id'
    user_id?: string | undefined
    parent_user_id?: string | undefined
    previous_user_id?: string | undefined
    previous_parent_user_id?: string | undefined
  }
}
type IncomingMessageValueSystem = {
  messaging_product: string
  metadata: Metadata
  messages: SystemMessage[]
}
type ConversationOrigin = { type?: string | undefined }
type Conversation = {
  id?: string | undefined
  expiration_timestamp?: string | undefined
  origin?: ConversationOrigin | undefined
}
type Pricing = {
  billable?: boolean | undefined
  pricing_model?: 'CBP' | 'PMP' | undefined
  category?: string | undefined
}
type ErrorData = { details?: string | undefined }
type StatusError = {
  code?: number | undefined
  title?: string | undefined
  message?: string | undefined
  error_data?: ErrorData | undefined
  href?: string | undefined
}
type Statuses = {
  id: string
  status: 'sent' | 'delivered' | 'read' | 'failed'
  timestamp: string
  recipient_id: string
  group_id?: string | undefined
  conversation?: Conversation | undefined
  pricing?: Pricing | undefined
  errors?: StatusError[] | undefined
}
type StatusMessageValue = { messaging_product: string; metadata: Metadata; statuses: Statuses[] }
type GroupParticipant = { input?: string | undefined; wa_id?: string | undefined }
type GroupProfilePicture = { mime_type?: string | undefined; sha256?: string | undefined }
type Groups = {
  timestamp: number
  group_id: string
  type:
    | 'group_create'
    | 'group_delete'
    | 'group_settings_update'
    | 'group_add_participants'
    | 'group_remove_participants'
  request_id: string
  subject?: string | undefined
  description?: string | undefined
  added_participants?: GroupParticipant[] | undefined
  removed_participants?: GroupParticipant[] | undefined
  profile_picture?: GroupProfilePicture | undefined
}
type GroupValue = { messaging_product: string; metadata: Metadata; groups: Groups[] }
type Change = {
  value: IncomingMessageValueGeneral | IncomingMessageValueSystem | StatusMessageValue | GroupValue
  field:
    | 'messages'
    | 'group_lifecycle_update'
    | 'group_settings_update'
    | 'group_participant_update'
}
type Entry = { id: string; changes: Change[] }
type WebhookPayload = { object: string; entry: Entry[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:Version/:Application-ID/connected_client_businesses': {
      $get:
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: ConnectedClientBusinessesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Application-ID/whatsapp_business_solution': {
      $post:
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: WhatsAppBusinessSolutionCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Application-ID/whatsapp_business_solutions': {
      $get:
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessSolutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Application-ID': string } } & {
              query: {
                role?: WhatsAppBusinessSolutionApplicationRole | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID/add_phone_numbers': {
      $post:
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: AddPhoneNumbersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: AddPhoneNumbersRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID': {
      $get: {
        input: { param: { Version: string; 'Business-ID': string } } & {
          query: { fields?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: {
          id?: string | undefined
          name?: string | undefined
          timezone_id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Business-ID/preverified_numbers': {
      $get:
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: PreVerifiedPhoneNumbersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                verification_status?: PhoneNumberVerificationStatus | undefined
                availability_status?: PhoneNumberAvailabilityStatus | undefined
                country_code?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID/client_whatsapp_business_accounts': {
      $get:
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: ClientWhatsAppBusinessAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                fields?: string | undefined
                business_type?: ('STANDARD' | 'PREMIUM' | 'ENTERPRISE')[] | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID/onboard_partners_to_mm_lite': {
      $post:
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: MMLiteOnboardingRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: { solution_id?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID/owned_whatsapp_business_accounts': {
      $get:
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessAccountsConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              query: {
                business_type?: WhatsAppBusinessType[] | undefined
                after?: string | undefined
                first?: number | undefined
                before?: string | undefined
                last?: number | undefined
                find?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID/share_preverified_numbers': {
      $post:
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: PreVerifiedPhoneNumberShareResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Business-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PreVerifiedPhoneNumberShareRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/block_users': {
      $get: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        }
        output: GetBlockedUsersData
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & {
          json: {
            block_users?: { user?: string | undefined }[] | undefined
            messaging_product?: string | undefined
          }
        }
        output: BlockUsersData
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & {
          json: {
            block_users?: { user?: string | undefined }[] | undefined
            messaging_product?: string | undefined
          }
        }
        output: UnblockUsersData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Phone-Number-ID/call_permissions': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { user_wa_id: string }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: CallPermissionCheckResponsePayload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { user_wa_id: string }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { user_wa_id: string }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { user_wa_id: string }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { user_wa_id: string }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/calls': {
      $post: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: CallRequestPayload | CallTerminateRequestPayload }
        output: CallResponsePayload | CallTerminateResponsePayload
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Phone-Number-ID/groups': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json: {
                messaging_product: 'whatsapp'
                subject: string
                description?: string | undefined
                join_approval_mode?: 'approval_required' | 'auto_approve' | undefined
              }
            }
            output: { messaging_product?: string | undefined; request_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json: {
                messaging_product: 'whatsapp'
                subject: string
                description?: string | undefined
                join_approval_mode?: 'approval_required' | 'auto_approve' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json: {
                messaging_product: 'whatsapp'
                subject: string
                description?: string | undefined
                join_approval_mode?: 'approval_required' | 'auto_approve' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json: {
                messaging_product: 'whatsapp'
                subject: string
                description?: string | undefined
                join_approval_mode?: 'approval_required' | 'auto_approve' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        }
        output: {
          data?:
            | {
                groups?:
                  | {
                      id?: string | undefined
                      subject?: string | undefined
                      created_at?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          paging?: PagingInfo | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Phone-Number-ID/marketing_messages': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: MarketingMessageRequestPayload }
            output: MarketingMessageResponsePayload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: MarketingMessageRequestPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: MarketingMessageRequestPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: MarketingMessageRequestPayload }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/media': {
      $post: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & { json: { file?: string | undefined; messaging_product?: string | undefined } } & {
          form: { file?: File | undefined; messaging_product?: string | undefined }
        }
        output: { id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Phone-Number-ID/messages': {
      $post: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: Message }
        output: MessageResponsePayload
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Phone-Number-ID/message_qrdls': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: QrCodeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                code?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: QrCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: CreateQrCodeRequest | UpdateQrCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/message_qrdls/:QR-Code-ID': {
      $get:
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: QrCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { query: { fields?: string | undefined } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: DeleteQrCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { Version: string; 'Phone-Number-ID': string; 'QR-Code-ID': string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/messages_encrypted': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: EncryptedMessageRequest }
            output: EncryptedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: EncryptedMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: EncryptedMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: EncryptedMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: EncryptedMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: EncryptedMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/official_business_account': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: OfficialBusinessAccountStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: OfficialBusinessAccountUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OfficialBusinessAccountUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: PhoneNumberInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: MessageResponse | SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberStatusUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/deregister': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: DeregisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/message_history': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: MessageHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: {
                message_id?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/register': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: WhatsAppBusinessPhoneNumberRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessPhoneNumberRegistrationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/request_code': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: RequestCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/settings': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { include_sip_credentials?: boolean | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: PhoneNumberSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { include_sip_credentials?: boolean | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { include_sip_credentials?: boolean | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json:
                | CallingSettingsRequest
                | UserIdentityChangeSettingsRequest
                | PayloadEncryptionSettingsRequest
                | StorageConfigurationSettingsRequest
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json:
                | CallingSettingsRequest
                | UserIdentityChangeSettingsRequest
                | PayloadEncryptionSettingsRequest
                | StorageConfigurationSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & {
              json:
                | CallingSettingsRequest
                | UserIdentityChangeSettingsRequest
                | PayloadEncryptionSettingsRequest
                | StorageConfigurationSettingsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/verify_code': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: VerifyCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/whatsapp_business_encryption': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: { data?: WhatsAppBusinessEncryptionInfo[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: WhatsAppBusinessEncryptionUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { form: WhatsAppBusinessEncryptionUploadRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/whatsapp_business_profile': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: WhatsAppBusinessProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: WhatsAppBusinessProfileUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: {
                'User-Agent'?: string | undefined
                Authorization: string
                'Content-Type':
                  | 'application/json'
                  | 'application/x-www-form-urlencoded'
                  | 'multipart/form-data'
              }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/whatsapp_commerce_settings': {
      $get: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: {
          data?:
            | {
                id?: string | undefined
                is_cart_enabled?: boolean | undefined
                is_catalog_visible?: boolean | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; 'Phone-Number-ID': string } } & {
          query: { is_cart_enabled?: string | undefined; is_catalog_visible?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Phone-Number-ID/business_compliance_info': {
      $get:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: { data?: BusinessComplianceInfo[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: BusinessComplianceInfoUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:group_id/invite_link': {
      $post: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: { messaging_product: 'whatsapp' } }
        output: { messaging_product?: string | undefined; invite_link?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: { messaging_product: 'whatsapp' } }
        output: { messaging_product?: string | undefined; success?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:group_id/join_requests': {
      $get: {
        input: { param: { Version: string; group_id: string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: {
          data?:
            | {
                join_request_id?: string | undefined
                wa_id?: string | undefined
                creation_timestamp?: number | undefined
              }[]
            | undefined
          paging?: PagingInfo | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: { messaging_product: 'whatsapp'; join_requests: string[] } }
        output: {
          messaging_product?: string | undefined
          approved_join_requests?: string[] | undefined
          failed_join_requests?:
            | { join_request_id?: string | undefined; errors?: Error[] | undefined }[]
            | undefined
          errors?: Error[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: { messaging_product: 'whatsapp'; join_requests: string[] } }
        output: {
          messaging_product?: string | undefined
          rejected_join_requests?: string[] | undefined
          failed_join_requests?:
            | { join_request_id?: string | undefined; errors?: Error[] | undefined }[]
            | undefined
          errors?: Error[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:group_id/participants': {
      $post: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: { messaging_product: 'whatsapp'; participants: { user: string }[] } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & { json: { messaging_product: 'whatsapp'; participants: { user: string }[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Version/:group_id': {
      $get: {
        input: { param: { Version: string; group_id: string } } & {
          query: { fields?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: GroupInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; group_id: string } } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        } & {
          json: {
            messaging_product: 'whatsapp'
            subject?: string | undefined
            description?: string | undefined
            profile_picture_file?: string | undefined
          }
        } & { form: { messaging_product?: 'whatsapp' | undefined; file?: File | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Version/:Media-ID': {
      $get: {
        input: { param: { Version: string; 'Media-ID': string } } & {
          query: { phone_number_id?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: {
          file_size?: string | undefined
          id?: string | undefined
          messaging_product?: string | undefined
          mime_type?: string | undefined
          sha256?: string | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; 'Media-ID': string } } & {
          query: { phone_number_id?: string | undefined }
        } & {
          header: {
            'User-Agent'?: string | undefined
            Authorization: string
            'Content-Type':
              | 'application/json'
              | 'application/x-www-form-urlencoded'
              | 'multipart/form-data'
          }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Media-URL': {
      $get: {
        input: { param: { Version: string; 'Media-URL': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Version/:Message-History-ID/events': {
      $get:
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: MessageHistoryEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Message-History-ID': string } } & {
              query: {
                status_filter?: WhatsAppMessageDeliveryStatus | undefined
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Migration-Intent-ID': {
      $get:
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessAccountMigrationIntent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Migration-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Pre-Verified-Phone-Number-ID': {
      $get:
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: PreVerifiedPhoneNumberValidation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Pre-Verified-Phone-Number-ID/partners': {
      $get:
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Pre-Verified-Phone-Number-ID/request_code': {
      $post:
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: RequestCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: RequestCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Pre-Verified-Phone-Number-ID/verify_code': {
      $post:
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: VerifyCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Pre-Verified-Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: VerifyCodeRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID/access_token': {
      $get:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessSolutionAccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { business_id: string }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID/accept_deactivation_request': {
      $post:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: WhatsAppBusinessSolution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { [x: string]: unknown }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID/accept': {
      $post:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: WhatsAppBusinessSolutionAcceptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionAcceptRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID': {
      $get:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessSolution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID/reject_deactivation_request': {
      $post:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: WhatsAppBusinessSolution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } } & {
              json: { reject_deactivation_request: boolean }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID/reject': {
      $post:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: SolutionRejectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SolutionRejectRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Solution-ID/send_deactivation_request': {
      $post:
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: WhatsAppBusinessSolutionDeactivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Solution-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessSolutionDeactivationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:User-ID/assigned_whatsapp_business_accounts': {
      $get:
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: AssignedAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'User-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WhatsApp-Account-Number-ID': {
      $get:
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppAccountNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Account-Number-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WhatsApp-Business-Account-ID/assigned_users': {
      $get:
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: AssignedUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              query: {
                business: string
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] } } & {
              form: { user: string; tasks: WhatsAppBusinessAccountPermissionTask[] }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Account-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { user: string } } & { form: { user: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Phone-Number-ID/conversational_automation': {
      $post:
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: ConversationalAutomationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'Phone-Number-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ConversationalAutomationRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:Business-ID/extendedcredits': {
      $get: {
        input: { param: { Version: string; 'Business-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: {
          data?: { id?: string | undefined; legal_entity_name?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:WABA-ID/flows': {
      $get: {
        input: { param: { Version: string; 'WABA-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: {
          data?:
            | {
                categories?: string[] | undefined
                id?: string | undefined
                name?: string | undefined
                status?: string | undefined
                validation_errors?: { [x: string]: unknown }[] | undefined
              }[]
            | undefined
          paging?:
            | { cursors?: { after?: string | undefined; before?: string | undefined } | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; 'WABA-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & {
          form: {
            categories?: string | undefined
            clone_flow_id?: string | undefined
            endpoint_uri?: string | undefined
            name?: string | undefined
          }
        }
        output: { id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:WABA-ID/migrate_flows': {
      $post: {
        input: { param: { Version: string; 'WABA-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & {
          form: { source_flow_names?: string | undefined; source_waba_id?: string | undefined }
        }
        output: {
          failed_flows?:
            | {
                error_code?: string | undefined
                error_message?: string | undefined
                source_name?: string | undefined
              }[]
            | undefined
          migrated_flows?:
            | {
                migrated_id?: string | undefined
                source_id?: string | undefined
                source_name?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Flow-ID': {
      $get: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          query: { fields?: string | undefined; date_format?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: {
          application?:
            | { id?: string | undefined; link?: string | undefined; name?: string | undefined }
            | undefined
          categories?: string[] | undefined
          data_api_version?: string | undefined
          data_channel_uri?: string | undefined
          health_status?:
            | {
                can_send_message?: string | undefined
                entities?:
                  | {
                      can_send_message?: string | undefined
                      entity_type?: string | undefined
                      errors?:
                        | {
                            error_code?: number | undefined
                            error_description?: string | undefined
                            possible_solution?: string | undefined
                          }[]
                        | undefined
                      id?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          id?: string | undefined
          json_version?: string | undefined
          metric?:
            | {
                data_points?:
                  | {
                      data?: { key?: string | undefined; value?: number | undefined }[] | undefined
                      timestamp?: string | undefined
                    }[]
                  | undefined
                granularity?: string | undefined
                name?: string | undefined
              }
            | undefined
          name?: string | undefined
          preview?:
            | { expires_at?: string | undefined; preview_url?: string | undefined }
            | undefined
          status?: string | undefined
          validation_errors?: { [x: string]: unknown }[] | undefined
          whatsapp_business_account?:
            | {
                business_type?: string | undefined
                id?: string | undefined
                message_template_namespace?: string | undefined
                name?: string | undefined
                timezone_id?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & {
          form: {
            categories?: string | undefined
            endpoint_uri?: string | undefined
            name?: string | undefined
          }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Flow-ID/assets': {
      $get: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & { form: { [x: string]: unknown } }
        output: {
          data?:
            | {
                asset_type?: string | undefined
                download_url?: string | undefined
                name?: string | undefined
              }[]
            | undefined
          paging?:
            | { cursors?: { after?: string | undefined; before?: string | undefined } | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & {
          form: {
            asset_type?: string | undefined
            file?: File | undefined
            name?: string | undefined
          }
        }
        output: {
          success?: boolean | undefined
          validation_errors?:
            | {
                column_end?: number | undefined
                column_start?: number | undefined
                error?: string | undefined
                error_type?: string | undefined
                line_end?: number | undefined
                line_start?: number | undefined
                message?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Flow-ID/publish': {
      $post: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:Flow-ID/deprecate': {
      $post: {
        input: { param: { Version: string; 'Flow-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:WABA-ID/in_progress_onbehalf_request': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: InProgressOnBehalfRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:OBO-Mobility-Intent-ID': {
      $get:
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: OBOMobilityIntentNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'OBO-Mobility-Intent-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/obo_mobility_intent': {
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: OBOMobilityIntentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: OBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/phone_numbers': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessAccountPhoneNumbersConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'creation_time.asc'
                  | 'creation_time.desc'
                  | 'last_onboarded_time.asc'
                  | 'last_onboarded_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: PhoneNumberCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: PhoneNumberCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/schedules': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessAccountSchedulesConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                filtering?: string | undefined
                sort?:
                  | 'created_time.asc'
                  | 'created_time.desc'
                  | 'updated_time.asc'
                  | 'updated_time.desc'
                  | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: ScheduleCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: ScheduleCreateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/set_obo_mobility_intent': {
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: SetOBOMobilityIntentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetOBOMobilityIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/set_solution_migration_intent': {
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: SetSolutionMigrationIntentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SetSolutionMigrationIntentRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/solutions': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: SolutionsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID/subscribed_apps': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: SubscribedAppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: SubscriptionRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:TEMPLATE_ID': {
      $get: {
        input: { param: { Version: string; TEMPLATE_ID: string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        }
        output: {
          category?: string | undefined
          components?:
            | {
                buttons?: { text?: string | undefined; type?: string | undefined }[] | undefined
                example?: { body_text?: string[][] | undefined } | undefined
                format?: string | undefined
                text?: string | undefined
                type?: string | undefined
              }[]
            | undefined
          id?: string | undefined
          language?: string | undefined
          name?: string | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; TEMPLATE_ID: string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & {
          json: {
            category?: string | undefined
            components?:
              | {
                  buttons?: { text?: string | undefined; type?: string | undefined }[] | undefined
                  example?: { body_text?: string[][] | undefined } | undefined
                  format?: string | undefined
                  text?: string | undefined
                  type?: string | undefined
                }[]
              | undefined
            language?: string | undefined
            name?: string | undefined
          }
        }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:WABA-ID/message_templates': {
      $get: {
        input: { param: { Version: string; 'WABA-ID': string } } & {
          query: { name?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: {
          data?:
            | {
                category?: string | undefined
                components?:
                  | {
                      buttons?:
                        | { text?: string | undefined; type?: string | undefined }[]
                        | undefined
                      example?: { body_text?: string[][] | undefined } | undefined
                      format?: string | undefined
                      text?: string | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                id?: string | undefined
                language?: string | undefined
                name?: string | undefined
                status?: string | undefined
              }[]
            | undefined
          paging?:
            | { cursors?: { after?: string | undefined; before?: string | undefined } | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { Version: string; 'WABA-ID': string } } & {
          header: { 'User-Agent'?: string | undefined; Authorization: string }
        } & {
          json: {
            category?: string | undefined
            components?:
              | {
                  buttons?:
                    | {
                        flow_action?: string | undefined
                        flow_id?: string | undefined
                        navigate_screen?: string | undefined
                        text?: string | undefined
                        type?: string | undefined
                      }[]
                    | undefined
                  text?: string | undefined
                  type?: string | undefined
                }[]
              | undefined
            language?: string | undefined
            name?: string | undefined
          }
        }
        output: {
          category?: string | undefined
          id?: string | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { Version: string; 'WABA-ID': string } } & {
          query: { name?: string | undefined; hsm_id?: string | undefined }
        } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:Version/:WABA-ID/activities': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: ActivityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: {
                fields?: string | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
                since?: string | undefined
                until?: string | undefined
                activity_type?: string | undefined
              }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-ID': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: { name?: string | undefined; timezone_id?: string | undefined } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WABA-Bot-ID': {
      $get:
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WABA-Bot-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/:Version/:WhatsApp-Business-Profile-ID': {
      $get:
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: WhatsAppBusinessProfileNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              query: { fields?: string | undefined }
            } & { header: { 'User-Agent'?: string | undefined; Authorization: string } }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: WhatsAppBusinessProfileUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { Version: string; 'WhatsApp-Business-Profile-ID': string } } & {
              header: { 'User-Agent'?: string | undefined; Authorization: string }
            } & { json: WhatsAppBusinessProfileUpdateRequest }
            output: GraphAPIError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/whatsapp/webhooks': {
      $post: { input: { json: WebhookPayload }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
