type Error = {
  code?: string | undefined
  help?: string | undefined
  http_code?: number | undefined
  message?: string | undefined
}
type Href = { href?: string | undefined }
type BlogArticleLinks = {
  self?: Href | undefined
  android?: Href | undefined
  header_image?: Href | undefined
  ios?: Href | undefined
  web?: Href | undefined
}
type BlogArticle = {
  announcement_type?: 'article' | 'case' | 'famous-translators' | 'sales' | undefined
  author?: string | undefined
  content?: string | undefined
  created_at?: string | undefined
  excerpt?: string | undefined
  id?: bigint | undefined
  language?: string | undefined
  links?: BlogArticleLinks | undefined
  slug?: string | undefined
  title?: string | undefined
  topic?: string | undefined
}
type PagingLinksMeta = {
  self?: Href | undefined
  next?: string | undefined
  previous?: string | undefined
}
type PagingMeta = {
  paging?:
    | {
        count?: bigint | undefined
        links?: PagingLinksMeta | undefined
        page?: bigint | undefined
        per_page?: bigint | undefined
        total_count?: bigint | undefined
      }
    | undefined
}
type BlogArticleList = { articles?: BlogArticle[] | undefined; meta?: PagingMeta | undefined }
type OperationStatusEnum = 'success' | 'error'
type OperationStatus = { status?: OperationStatusEnum | undefined }
type Monetary = { amount?: number | undefined; currency?: string | undefined }
type LanguageScore = number
type BillingAddress = {
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  street?: string | undefined
  zip?: string | undefined
  name?: string | undefined
}
type LanguagePair = { source_language?: string | undefined; target_language?: string | undefined }
type UserLinks = {
  self?: Href | undefined
  login_as?: Href | undefined
  projects?: Href | undefined
  responsivity?: Href | undefined
  stats?: Href | undefined
}
type Address = {
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  street?: string | undefined
  zip?: string | undefined
}
type SocialMedia = {
  facebook_url?: string | undefined
  linkedIn_url?: string | undefined
  twitter_url?: string | undefined
}
type UserGroup = {
  corporate_id?: bigint | undefined
  id?: bigint | undefined
  name?: string | undefined
  permissions?: string[] | undefined
}
type ProfileSurvey = {
  current_services?: string | undefined
  daily_proofreading_capacity?: string | undefined
  daily_translation_capacity?: string | undefined
  dtp_software?: string | undefined
  experience?: string | undefined
  is_certified_translator?: string | undefined
  is_sworn_translator?: string | undefined
  memoq?: string | undefined
  memsource?: string | undefined
  omegat?: string | undefined
  proofreader_experience?: string | undefined
  provides_creative_writing_service?: string | undefined
  provides_postedit_service?: string | undefined
  reference?: string | undefined
  sdl_trados?: string | undefined
  skype_id?: string | undefined
  smartcat?: string | undefined
  smartling?: string | undefined
  software?: string | undefined
  specialization?: string | undefined
  subtitle_edit?: string | undefined
  subtitle_workshop?: string | undefined
  translator_association?: string | undefined
  transsuite_2000?: string | undefined
  vendor_profile_lsp?: string | undefined
  wordbee?: string | undefined
  wordfast?: string | undefined
  work_type?: string | undefined
  work_with?: string | undefined
  working_as?: string | undefined
  working_timezone?: string | undefined
  xbench?: string | undefined
  xtm?: string | undefined
}
type Tag = string
type User = {
  billing?: BillingAddress | undefined
  birthday?: string | undefined
  can_work_manual_files?: boolean | undefined
  city?: string | undefined
  client?:
    | {
        corporate?:
          | {
              email?: string | undefined
              id?: bigint | undefined
              logo?: string | undefined
              name?: string | undefined
              phone_number?: string | undefined
            }
          | undefined
        nps?: number | undefined
        subjects?: { [x: string]: bigint } | undefined
      }
    | undefined
  corporate_id?: bigint | undefined
  country?: string | undefined
  created_at?: bigint | undefined
  do_not_contact?: boolean | undefined
  email?: string | undefined
  first_name?: string | undefined
  has_pwd?: boolean | undefined
  id?: bigint | undefined
  is_client?: boolean | undefined
  is_developer?: boolean | undefined
  is_proofreader?: boolean | undefined
  is_prospect?: boolean | undefined
  is_sales_person?: boolean | undefined
  is_vendor?: boolean | undefined
  language_pairs?: LanguagePair[] | undefined
  last_name?: string | undefined
  last_seen_online_at?: bigint | undefined
  links?: UserLinks | undefined
  locale?: string | undefined
  mailing?: Address | undefined
  name?: string | undefined
  native_language?: string | undefined
  nps?: number | undefined
  phone_number?: string | undefined
  profile_picture_path?: string | undefined
  social_media?: SocialMedia | undefined
  state?: string | undefined
  status?: string | undefined
  street?: string | undefined
  timezone?: string | undefined
  tms_user_name?: string | undefined
  user_groups?: UserGroup[] | undefined
  vendor?:
    | {
        can_work_manual_files?: boolean | undefined
        email_open_rate?: number | undefined
        is_frozen?: boolean | undefined
        is_proofreader?: boolean | undefined
        language_pairs?: LanguagePair[] | undefined
        native_language?: string | undefined
        pam_tqs?: number | undefined
        paypal_email?: string | undefined
        profile_survey?: ProfileSurvey | undefined
        require_1099?: boolean | undefined
        tags?: Tag[] | undefined
        tms_user_name?: string | undefined
        vendor_type?: string | undefined
      }
    | undefined
  zip_code?: string | undefined
}
type ProjectLinks = {
  self?: Href | undefined
  documents?: Href | undefined
  glossaries?: Href | undefined
  payment?: Href | undefined
  'quote-pdf'?: Href | undefined
  styleguides?: Href | undefined
}
type VendorProjectPair = {
  currency?: string | undefined
  is_proofreader?: boolean | undefined
  proofreader?: User | undefined
  proofreading_rate?: number | undefined
  source_language?: string | undefined
  target_language?: string | undefined
  translation_rate?: number | undefined
}
type VendorProjectRole = 'translator' | 'proofreader' | 'both'
type ProjectSource = 'api' | 'web'
type ProjectStatus = 'pending' | 'started' | 'completed' | 'translated' | 'proofread'
type Project = {
  average_scores?: { [x: string]: LanguageScore } | undefined
  budget_code?: string | undefined
  callback_url?: string | undefined
  can_pam_manage?: boolean | undefined
  client?: User | undefined
  cm_id?: bigint | undefined
  completed_on?: string | undefined
  continuous_project_type?: string | undefined
  created_at?: bigint | undefined
  custom?: { [x: string]: unknown } | undefined
  delivery_at?: bigint | undefined
  errors?: Error[] | undefined
  id?: bigint | undefined
  is_api_project?: boolean | undefined
  is_certified?: boolean | undefined
  is_continuous?: boolean | undefined
  is_manual?: boolean | undefined
  links?: ProjectLinks | undefined
  pairs?: VendorProjectPair[] | undefined
  pivoted_projects?: bigint[] | undefined
  price?:
    | {
        amount?: number | undefined
        base_amount?: number | undefined
        base_currency?: string | undefined
        currency?: string | undefined
        usd_amount?: number | undefined
      }
    | undefined
  price_without_discount?:
    | {
        amount?: number | undefined
        base_amount?: number | undefined
        base_currency?: string | undefined
        currency?: string | undefined
        usd_amount?: number | undefined
      }
    | undefined
  role?: VendorProjectRole | undefined
  should_send_client_survey?: boolean | undefined
  source?: ProjectSource | undefined
  source_language?: string | undefined
  status?: ProjectStatus | undefined
  subjects?: string[] | undefined
  target_languages?: string[] | undefined
  tms_name?: string | undefined
  valid_until?: bigint | undefined
  vendor_word_count?: bigint | undefined
  word_count?: bigint | undefined
  word_count_analysis?:
    | {
        base?: number | undefined
        duplicate?: number | undefined
        exclusion?: number | undefined
        final?: number | undefined
        tm?: number | undefined
      }
    | undefined
}
type Commission = {
  amount?: Monetary | undefined
  date?: string | undefined
  project?: Project | undefined
  status?: 'completed' | 'unclaimed' | 'failed' | 'sent' | 'waiting' | 'waiting_invoice' | undefined
}
type CommissionList = { commissions?: Commission[] | undefined; meta?: PagingMeta | undefined }
type ReportFilter = {
  budget_code?: string | undefined
  date_from?: string | undefined
  date_to?: string | undefined
  source_languages?: string[] | undefined
  target_languages?: string[] | undefined
  users?: bigint[] | undefined
}
type ContinuousProjectLinks = {
  self?: Href | undefined
  editors?: { [x: string]: Href } | undefined
}
type Subscription = {
  downgrade?: string[] | undefined
  payment_method?: number | undefined
  period_end?: string | undefined
  plan_id?: string | undefined
  plan_name?: string | undefined
  price?: string | undefined
  products?: { [x: string]: unknown }[] | undefined
  schedule_name?: string | undefined
  schedule_start?: string | undefined
  subscription_id?: string | undefined
  upgrade?: string[] | undefined
  withTrial?: { [x: string]: unknown } | undefined
}
type ContinuousProject = {
  analytics_enabled?: boolean | undefined
  auto_start_postedit?: boolean | undefined
  created_at?: string | undefined
  id?: bigint | undefined
  is_enabled?: boolean | undefined
  last_activity_at?: string | undefined
  links?: ContinuousProjectLinks | undefined
  mt_enabled?: boolean | undefined
  mt_engine?: string | undefined
  name?: string | undefined
  postedit_enabled?: boolean | undefined
  source_language?: string | undefined
  status?: string | undefined
  subscription?: Subscription | undefined
  target_languages?: string[] | undefined
  type?: string | undefined
  word_count?: bigint | undefined
}
type ContinuousProjectsList = {
  meta?: PagingMeta | undefined
  projects?: ContinuousProject[] | undefined
}
type ContinuousProjectLanguage = { code?: string | undefined; is_enabled?: boolean | undefined }
type ContinuousProjectUpdateContent = {
  analytics_enabled?: boolean | undefined
  auto_start_postedit?: boolean | undefined
  is_enabled?: boolean | undefined
  languages?: ContinuousProjectLanguage[] | undefined
  mt_enabled?: boolean | undefined
  name?: string | undefined
  postedit_enabled?: boolean | undefined
}
type AnalyticsToken = { jwt?: string | undefined }
type AnalyticsCollection = {
  anonymousId?: string | undefined
  properties?: { [x: string]: string } | undefined
  sessionId?: string | undefined
  type?: string | undefined
  userId?: string | undefined
}
type GetQuotesForDocumentsBody = { files?: bigint[] | undefined }
type ProjectList = { meta?: PagingMeta | undefined; projects?: Project[] | undefined }
type GetQuotesForLanguagesBody = { languages?: string[] | undefined }
type FileAsData = { data?: string | undefined; name?: string | undefined }
type InstantTranslationFilter = {
  skipMt?: string[] | undefined
  skipPostEdit?: string[] | undefined
}
type InstantTranslationRequest = {
  contents?: string[] | undefined
  documents?: FileAsData[] | undefined
  filters?: InstantTranslationFilter | undefined
  meta?: { [x: string]: unknown } | undefined
}
type InstantContentsTranslationResult = { results?: { [x: string]: string } | undefined }
type InstantFilesTranslationResult = { results?: { [x: string]: string } | undefined }
type InstantTranslationResult = InstantContentsTranslationResult | InstantFilesTranslationResult
type DocumentLinks = {
  self?: Href | undefined
  admins?: { [x: string]: Href } | undefined
  download?: Href | undefined
  editors?: { [x: string]: Href } | undefined
  'preview-box'?: Href | undefined
  'preview-pdf'?: Href | undefined
  'preview-pdf-viewer'?: Href | undefined
  progress?: Href | undefined
  project?: Href | undefined
  strings?: Href | undefined
  thumbnail?: Href | undefined
}
type ContinuousProjectDocument = {
  billed_word_count?: bigint | undefined
  id?: string | undefined
  links?: DocumentLinks | undefined
  name?: string | undefined
  post_edit_enabled?: boolean | undefined
  project_id?: string | undefined
  source_language?: string | undefined
  target_languages?: string[] | undefined
  word_count?: bigint | undefined
}
type ContinuousProjectDocumentList = {
  documents?: ContinuousProjectDocument[] | undefined
  meta?: PagingMeta | undefined
}
type AddOrUpdateDocumentRequest = { document?: FileAsData | undefined }
type ContinuousProjectDocumentProgressBody = {
  documentName?: string | undefined
  filterByLanguage?: string | undefined
}
type ProgressSub = {
  proofreading?: number | undefined
  total?: number | undefined
  translation?: number | undefined
  word_count?: bigint | undefined
}
type ProgressLink = { self?: Href | undefined; project?: Href | undefined }
type Progress = {
  languages?: { [x: string]: ProgressSub } | undefined
  links?: ProgressLink | undefined
  project_status?: ProjectStatus | undefined
  proofreading?: number | undefined
  total?: number | undefined
  translation?: number | undefined
  word_count?: bigint | undefined
}
type ContinuousProjectDocumentStringsBody = { documentName?: string | undefined }
type StringTranslationState = 'Approved' | 'Translated'
type StringTranslation = {
  content?: string | undefined
  id?: string | undefined
  state?: StringTranslationState | undefined
}
type StringWithTranslations = {
  content?: string | undefined
  file_id?: bigint | undefined
  id?: string | undefined
  translations?: { [x: string]: StringTranslation } | undefined
}
type StringList = {
  meta?: PagingMeta | undefined
  translations?: StringWithTranslations[] | undefined
}
type InvoiceLinks = {
  self?: Href | undefined
  corporate?: Href | undefined
  html?: Href | undefined
  json?: Href | undefined
  pdf?: Href | undefined
  project?: Href | undefined
  view?: Href | undefined
}
type Invoice = {
  amount?: number | undefined
  base_amount?: number | undefined
  base_currency?: string | undefined
  billing?: BillingAddress | undefined
  currency?: string | undefined
  id?: bigint | undefined
  invoice_no?: bigint | undefined
  invoiced_at?: string | undefined
  links?: InvoiceLinks | undefined
  status?: string | undefined
}
type ContinuousProjectInvoices = { invoices?: Invoice[] | undefined }
type ContinuousProjectCosts = {
  mt?: Monetary | undefined
  post_edit?: Monetary | undefined
  saved?: Monetary | undefined
  total?: Monetary | undefined
}
type ContinuousProjectWordCounts = {
  mt?: bigint | undefined
  post_edit?: bigint | undefined
  total?: bigint | undefined
}
type ContinuousProjectProgress = {
  costs?: ContinuousProjectCosts | undefined
  progress?: Progress | undefined
  word_counts?: ContinuousProjectWordCounts | undefined
}
type ContinuousProjectCachedStrings = { [x: string]: string }
type ContinuousProjectLanguageCache = {
  mt?: ContinuousProjectCachedStrings | undefined
  nonparsed?: ContinuousProjectCachedStrings | undefined
  tm?: ContinuousProjectCachedStrings | undefined
}
type ContinuousProjectCache = {
  meta?: PagingMeta | undefined
  translations?: { [x: string]: ContinuousProjectLanguageCache } | undefined
}
type ActiveWidget = {
  allow_hash_in_url?: boolean | undefined
  allow_query_in_url?: boolean | undefined
  auto_detect_source_language?: boolean | undefined
  created_at?: string | undefined
  elements?: string | undefined
  follow_user?: boolean | undefined
  force_cache_refresh_interval?: boolean | undefined
  id?: bigint | undefined
  language_mappings?: string | undefined
  live?: boolean | undefined
  modify_links?: boolean | undefined
  name?: string | undefined
  optimize_per_page?: boolean | undefined
  pages?: string | undefined
  path_regex?: string | undefined
  position?: string | undefined
  query_name?: string | undefined
  reboot_on_url_change?: boolean | undefined
  restricted_domains?: string | undefined
  sections?: string | undefined
  test_mode?: boolean | undefined
  theme?: string | undefined
  token?: string | undefined
  url_change_mode?: string | undefined
  url_mode?: string | undefined
  use_cache?: boolean | undefined
  use_dummy_translations?: boolean | undefined
  variables?: string | undefined
}
type ActiveWidgetList = { meta?: PagingMeta | undefined; widgets?: ActiveWidget[] | undefined }
type CorporateAccount = {
  billing?: BillingAddress | undefined
  domain?: string | undefined
  email?: string | undefined
  id?: bigint | undefined
  logo?: string | undefined
  name?: string | undefined
  web_site?: string | undefined
}
type Permission = string
type PermissionList = { meta?: PagingMeta | undefined; permissions?: Permission[] | undefined }
type UserGroupList = { meta?: PagingMeta | undefined; user_groups?: UserGroup[] | undefined }
type UserList = { meta?: PagingMeta | undefined; users?: User[] | undefined }
type UserUpdateContent = {
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  street?: string | undefined
  zip?: string | undefined
  birthday?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  id?: bigint | undefined
  last_name?: string | undefined
  notifications?:
    | { phone_number?: string | undefined; sms_enabled?: boolean | undefined }
    | undefined
  notify?: boolean | undefined
  paypal_email?: string | undefined
  require_1099?: boolean | undefined
  user_groups?: bigint[] | undefined
}
type ListOrderType = 'asc' | 'desc'
type ManualFile = {
  driveFileId?: bigint | undefined
  isProofread?: boolean | undefined
  isTranslated?: boolean | undefined
  language?: string | undefined
  proofreadingFileId?: bigint | undefined
  translationFileId?: bigint | undefined
}
type Document = {
  file_type?: string | undefined
  has_custom_package?: boolean | undefined
  id?: bigint | undefined
  links?: DocumentLinks | undefined
  manual_files?: ManualFile[] | undefined
  name?: string | undefined
  project_id?: bigint | undefined
  review_in_manual_editor?: boolean | undefined
  scheme?: { [x: string]: unknown } | undefined
  search_score?: number | undefined
  source_language?: string | undefined
  subject?: string | undefined
  target_languages?: string[] | undefined
  uploaded_at?: bigint | undefined
  word_count?: bigint | undefined
}
type DocumentList = { documents?: Document[] | undefined; meta?: PagingMeta | undefined }
type DocumentSubjects = { name?: string | undefined }
type RegeneratePreviewResponse = { link?: Href | undefined; source?: string | undefined }
type UseAsDraftPayload = {
  fromFileId?: number | undefined
  fromManualTranslationFileId?: number | undefined
  toManualTranslationFileId?: number | undefined
}
type UseAsRegularPayload = {
  allowOriginalFilePreview?: boolean | undefined
  allowReviewInManualEditor?: boolean | undefined
  disableInvitations?: boolean | undefined
  fromManualTranslationFileId?: number | undefined
  hideNumbers?: boolean | undefined
  recreate?: boolean | undefined
}
type EarningWithTQS = {
  amount?: number | undefined
  currency?: string | undefined
  due_date?: string | undefined
  status?: 'paid' | 'pending' | 'failed' | undefined
  words?: bigint | undefined
  words_approved?: bigint | undefined
  words_translated?: bigint | undefined
  is_above_average?: boolean | undefined
  score?: number | undefined
  strings_edited?: bigint | undefined
  strings_translated?: bigint | undefined
  project_id?: bigint | undefined
}
type Earnings = {
  completed?: EarningWithTQS[] | undefined
  ongoing?: EarningWithTQS[] | undefined
  total?: number | undefined
}
type AccountGlossaryUploadRequest = { glossary: File }
type IntegrationsToken = { token?: string | undefined }
type FileNeedsVendor = {
  fileId?: bigint | undefined
  guid?: string | undefined
  projectId?: bigint | undefined
  reason?: string | undefined
  targetLanguage?: string[] | undefined
  taskType?: string[] | undefined
}
type VendorWithNeeds = { matchedNeeds?: FileNeedsVendor[] | undefined; userId?: bigint | undefined }
type VendorInvitationList = { vendors?: VendorWithNeeds[] | undefined }
type Language = { code?: string | undefined; name?: string | undefined }
type LocationUpdateContent = { lat: number; lon: number; timestamp?: number | undefined }
type DeliveryPredictionPayload = { projectId?: bigint | undefined }
type DeliveryPredictionInLanguage = {
  language?: string | undefined
  late?: boolean | undefined
  probability?: number | undefined
}
type DeliveryPredictionResponse = { result?: DeliveryPredictionInLanguage[] | undefined }
type NotificationSubscription = {
  device?:
    | 'iOS'
    | 'Android'
    | 'Chrome'
    | 'Firefox'
    | 'Safari'
    | 'Edge'
    | 'Amazon'
    | 'WindowsPhone'
    | 'Windows'
    | 'MacOS'
    | undefined
  endpoint?: string | undefined
  type?: 'OneSignal' | undefined
}
type PamMessage = {
  message?: string | undefined
  recipients?: string[] | undefined
  slots?: string[] | undefined
  thread_id?: string | undefined
  thread_key?: string | undefined
}
type ProofreaderWithLanguage = {
  full_name?: string | undefined
  id?: number | undefined
  language?: string | undefined
  vendor_link?: string | undefined
}
type ClientProfile = {
  account_creation_date?: string | undefined
  client_project_count?: number | undefined
  corporate?: string | undefined
  corporate_id?: number | undefined
  corporate_user_count?: number | undefined
  frequent_file_extension?: string | undefined
  frequent_language_pairs?: string[] | undefined
  full_name?: string | undefined
  growth?: boolean | undefined
  is_complex?: boolean | undefined
  last_12_months_spending?: number | undefined
  last_project?: number | undefined
  last_project_time?: string | undefined
  last_proofreaders?: ProofreaderWithLanguage[] | undefined
  notes?: string[] | undefined
  nps?:
    | {
        average?:
          | { completed_surveys_count?: number | undefined; score?: number | undefined }
          | undefined
        last?: { completion_date?: string | undefined; score?: number | undefined } | undefined
      }
    | undefined
  user_rank_in_project_count?: number | undefined
  user_rank_in_spending?: number | undefined
}
type InvitedVendor = {
  action?: string | undefined
  email_open_rate?: number | undefined
  is_entered?: boolean | undefined
  is_get_paid?: boolean | undefined
  is_worked?: boolean | undefined
  is_worked_in_any_project?: boolean | undefined
  last_project_date?: string | undefined
  project_status_when_interacted?: number | undefined
  registration_date?: string | undefined
  responsiveness?: number | undefined
  user_id?: number | undefined
  vendor_id?: number | undefined
  vendor_name?: string | undefined
  vendor_type?: string | undefined
}
type InvitedVendorsByLanguage = {
  invited_vendors?: InvitedVendor[] | undefined
  target_language?: string | undefined
}
type ProjectCompletionReport = {
  admin_user_id?: number | undefined
  completion_report_data?: InvitedVendorsByLanguage[] | undefined
  id?: number | undefined
  quote_id?: number | undefined
}
type PasswordUpdateContent = { password?: string | undefined }
type CreditCard = {
  bin?: string | undefined
  id?: bigint | undefined
  is_default?: boolean | undefined
  payment_code?: string | undefined
}
type PaymentInfo = {
  billing?: BillingAddress | undefined
  card?: CreditCard | undefined
  cards?: CreditCard[] | undefined
  corporate?:
    | {
        allow_api_invoicing?: boolean | undefined
        allow_payment_code?: boolean | undefined
        auto_charge?: boolean | undefined
        billing?: BillingAddress | undefined
        card?: CreditCard | undefined
        contact_email_address?: string | undefined
        payment_code?: string | undefined
      }
    | undefined
  shared_card?: CreditCard | undefined
}
type UpdatePaymentInfo = {
  city?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  street?: string | undefined
  zip?: string | undefined
  bin?: string | undefined
  save_as_corporate_primary?: boolean | undefined
  share_with_corporate_users?: boolean | undefined
  stripeToken?: string | undefined
}
type ProfilePictureUpload = { profile_picture: File }
type NewProject = {
  callback_url?: string | undefined
  coupon_code?: string | undefined
  custom?: string[] | undefined
  'documents[]'?: File | undefined
  'glossaries[]'?: File | undefined
  source_language?: string | undefined
  'styleguides[]'?: File | undefined
  'target_languages[]'?: string[] | undefined
}
type ProjectId = { 'internal-id'?: bigint | undefined; 'public-id'?: bigint | undefined }
type ProjectUpdate = {
  callback_url?: string | undefined
  coupon_code?: string | undefined
  custom?: string[] | undefined
  source_language?: string | undefined
  'target_languages[]'?: string[] | undefined
}
type CM = { user_id?: bigint | undefined }
type CallbackResult = {
  data?: Project | undefined
  result?: string | undefined
  type?: ProjectStatus | undefined
  url?: string | undefined
}
type CancelProjectRequest = { reason?: string | undefined }
type ProjectPayment = {
  bin?: string | undefined
  budget_code?: string | undefined
  card_id?: bigint | undefined
  payment_code?: string | undefined
  payment_method?: 'corporate' | 'client' | 'app' | 'credit' | 'corporate_card' | undefined
  stripe_token?: string | undefined
}
type ProjectLaunchResponseEnum = 'started'
type ProjectLaunchResponse = { status?: ProjectLaunchResponseEnum | undefined }
type PackageStatusEnum = 'started' | 'packaging' | 'completed'
type PackageStatus = { status?: PackageStatusEnum | undefined }
type Package = { status?: PackageStatusEnum | undefined; key?: string | undefined }
type ReportContent = { activity_type?: string | undefined; message?: string | undefined }
type SalesActivityType = 'EMAIL' | 'NOTE' | 'INCOMING_EMAIL' | 'TASK'
type SalesActivity = {
  body?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  type?: string | undefined
}
type SalesActivities = { activities?: SalesActivity[] | undefined }
type NewSalesActivity = {
  subject?: string | undefined
  timestamp?: bigint | undefined
  type?: string | undefined
}
type Webhook = { callback_url?: string | undefined }
type ActivityLinks = {
  self?: Href | undefined
  comments?: Href | undefined
  project?: Href | undefined
}
type Activity = {
  activity_at?: bigint | undefined
  id?: bigint | undefined
  links?: ActivityLinks | undefined
  source_text?: string | undefined
  target_text?: string | undefined
  translator?: bigint | undefined
  type?: 'translated' | 'proofread' | undefined
}
type ActivityList = { activities?: Activity[] | undefined; meta?: PagingMeta | undefined }
type CommentLinks = {
  self?: Href | undefined
  activity?: Href | undefined
  project?: Href | undefined
}
type Comment = {
  comment: string
  commented_at?: bigint | undefined
  id?: bigint | undefined
  links?: CommentLinks | undefined
}
type CommentList = { activities?: Comment[] | undefined; meta?: PagingMeta | undefined }
type LinkedSourceDocument = {
  name?: string | undefined
  size?: bigint | undefined
  source?: 'dropbox' | 'googledrive' | 'icloud' | undefined
  url?: string | undefined
}
type DocumentUpdates = {
  'documents[]'?: File[] | undefined
  'schemes[]'?: string | undefined
  'source-links[]'?: LinkedSourceDocument[] | undefined
}
type DocumentUploadRequest = {
  documents?: File | undefined
  schemes?: string | undefined
  'source-link'?: LinkedSourceDocument | undefined
}
type Glossary = {
  id?: bigint | undefined
  links?: DocumentLinks | undefined
  name?: string | undefined
  uploaded_at?: bigint | undefined
}
type GlossaryList = { glossaries?: Glossary[] | undefined; meta?: PagingMeta | undefined }
type GlossaryUploadRequest = { glossaries: File }
type AsyncOperationStatusEnum = 'sent' | 'started' | 'completed' | 'failed'
type AsyncOperationStatus = {
  duration?: bigint | undefined
  key?: string | undefined
  message?: { [x: string]: unknown } | undefined
  status?: AsyncOperationStatusEnum | undefined
}
type StyleGuide = {
  id?: bigint | undefined
  links?: DocumentLinks | undefined
  name?: string | undefined
  uploaded_at?: bigint | undefined
}
type StyleGuideList = { meta?: PagingMeta | undefined; styleguides?: StyleGuide[] | undefined }
type StyleGuideUploadRequest = { styleguides: File }
type FilterDates = { date_from?: string | undefined; date_to?: string | undefined }
type SimpleModel = { id?: bigint | undefined; name?: string | undefined }
type FilterContents = {
  budget_codes?: string[] | undefined
  categories?: string[] | undefined
  clients?: SimpleModel[] | undefined
  documents?: SimpleModel[] | undefined
  projects?: SimpleModel[] | undefined
  severities?: string[] | undefined
  source_languages?: string[] | undefined
  subjects?: string[] | undefined
  target_languages?: string[] | undefined
  vendors?: SimpleModel[] | undefined
}
type LanguagePairsReport = {
  meta?: PagingMeta | undefined
  report?:
    | {
        language_pair?:
          | { source_language?: string | undefined; target_language?: string | undefined }
          | undefined
        spending?: number | undefined
        word_count?: bigint | undefined
      }[]
    | undefined
}
type QaFilter = {
  budget_codes?: string[] | undefined
  categories?: string[] | undefined
  clients?: number[] | undefined
  date_from?: string | undefined
  date_to?: string | undefined
  documents?: number[] | undefined
  projects?: number[] | undefined
  severities?: string[] | undefined
  source_languages?: string[] | undefined
  subjects?: string[] | undefined
  target_languages?: string[] | undefined
  vendors?: number[] | undefined
}
type QaEntry = {
  category?: string | undefined
  comment?: string | undefined
  docId?: string | undefined
  editorLink?: string | undefined
  end?: bigint | undefined
  inSource?: boolean | undefined
  isCurrent?: boolean | undefined
  module?: string | undefined
  projectId?: SimpleModel | undefined
  severity?: string | undefined
  source?: string | undefined
  sourceLanguage?: SimpleModel | undefined
  start?: bigint | undefined
  state?: string | undefined
  targetLanguage?: SimpleModel | undefined
  translation?: string | undefined
  uniqueKey?: string | undefined
  vendor?: SimpleModel | undefined
}
type QaWarnings = { report?: QaEntry[] | undefined }
type UsersReport = {
  meta?: PagingMeta | undefined
  report?:
    | {
        currency?: string | undefined
        spending?: number | undefined
        user?: User | undefined
        word_count?: bigint | undefined
      }[]
    | undefined
}
type Responsivity = {
  invited?: bigint | undefined
  month?: string | undefined
  notEntered?: bigint | undefined
  onlyEntered?: bigint | undefined
  score?: number | undefined
  week?: string | undefined
  worked?: bigint | undefined
}
type ResponsivityList = {
  links?: { self?: Href | undefined } | undefined
  responsivity?: Responsivity[] | undefined
}
type DocumentInSearch = {
  file_type?: string | undefined
  has_custom_package?: boolean | undefined
  id?: bigint | undefined
  links?: DocumentLinks | undefined
  manual_files?: ManualFile[] | undefined
  name?: string | undefined
  project_id?: bigint | undefined
  review_in_manual_editor?: boolean | undefined
  scheme?: { [x: string]: unknown } | undefined
  search_score?: number | undefined
  source_language?: string | undefined
  subject?: string | undefined
  target_languages?: string[] | undefined
  uploaded_at?: bigint | undefined
  word_count?: bigint | undefined
  search_result_reason?: string | undefined
}
type ProjectInSearch = {
  average_scores?: { [x: string]: LanguageScore } | undefined
  budget_code?: string | undefined
  callback_url?: string | undefined
  can_pam_manage?: boolean | undefined
  client?: User | undefined
  cm_id?: bigint | undefined
  completed_on?: string | undefined
  continuous_project_type?: string | undefined
  created_at?: bigint | undefined
  custom?: { [x: string]: unknown } | undefined
  delivery_at?: bigint | undefined
  errors?: Error[] | undefined
  id?: bigint | undefined
  is_api_project?: boolean | undefined
  is_certified?: boolean | undefined
  is_continuous?: boolean | undefined
  is_manual?: boolean | undefined
  links?: ProjectLinks | undefined
  pairs?: VendorProjectPair[] | undefined
  pivoted_projects?: bigint[] | undefined
  price?:
    | {
        amount?: number | undefined
        base_amount?: number | undefined
        base_currency?: string | undefined
        currency?: string | undefined
        usd_amount?: number | undefined
      }
    | undefined
  price_without_discount?:
    | {
        amount?: number | undefined
        base_amount?: number | undefined
        base_currency?: string | undefined
        currency?: string | undefined
        usd_amount?: number | undefined
      }
    | undefined
  role?: VendorProjectRole | undefined
  should_send_client_survey?: boolean | undefined
  source?: ProjectSource | undefined
  source_language?: string | undefined
  status?: ProjectStatus | undefined
  subjects?: string[] | undefined
  target_languages?: string[] | undefined
  tms_name?: string | undefined
  valid_until?: bigint | undefined
  vendor_word_count?: bigint | undefined
  word_count?: bigint | undefined
  word_count_analysis?:
    | {
        base?: number | undefined
        duplicate?: number | undefined
        exclusion?: number | undefined
        final?: number | undefined
        tm?: number | undefined
      }
    | undefined
  search_result_reason?: string | undefined
}
type StringInSearch = {
  file_id?: bigint | undefined
  internal_project_id?: bigint | undefined
  last_updated?: string | undefined
  project_id?: bigint | undefined
  search_score?: number | undefined
  source?: string | undefined
  status?: StringTranslationState | undefined
  string_id?: bigint | undefined
  target?: string | undefined
  targets?: string[] | undefined
  tm_name?: string | undefined
  type?: 'LOCAL_PROJECT' | 'IMPORTED_TM' | undefined
}
type SearchEverywhereResult = {
  meta?: PagingMeta | undefined
  result?:
    | {
        documents?: DocumentInSearch[] | undefined
        projects?: ProjectInSearch[] | undefined
        strings?: StringInSearch[] | undefined
      }
    | undefined
}
type ClientStats = {
  document_count?: bigint | undefined
  nps?: number | undefined
  started_project_count?: bigint | undefined
  total_discounted?: Monetary | undefined
  total_project_count?: bigint | undefined
  total_spending?: number | undefined
  translator_count?: bigint | undefined
}
type VendorEarningStats = { total?: number | undefined }
type VendorProjectStats = {
  invited?: bigint | undefined
  total?: bigint | undefined
  worked?: bigint | undefined
}
type VendorWordStats = { approved?: bigint | undefined; translated?: bigint | undefined }
type VendorStats = {
  earnings?: VendorEarningStats | undefined
  projects?: VendorProjectStats | undefined
  words?: VendorWordStats | undefined
}
type Stats = { client?: ClientStats | undefined; vendor?: VendorStats | undefined }
type CommissionStats = {
  balance?: Monetary | undefined
  paid?: Monetary | undefined
  quote_total?: Monetary | undefined
  total?: Monetary | undefined
}
type PopularLanguagePairs = { pairs?: LanguagePair[] | undefined }
type ClientProjectStat = {
  languages?: string[] | undefined
  month?: string | undefined
  number_of_projects?: bigint | undefined
  total_spending?: number | undefined
  week?: string | undefined
}
type ClientProjectStats = { stats?: ClientProjectStat[] | undefined }
type LanguageStringStat = {
  project_string_count?: bigint | undefined
  source_language?: string | undefined
  tm_string_count?: bigint | undefined
}
type ClientStringStats = {
  language_counts?: LanguageStringStat[] | undefined
  total_project_strings_count?: bigint | undefined
  total_tm_strings_count?: bigint | undefined
}
type ClientStringTranslation = {
  content?: string | undefined
  last_changed?: string | undefined
  resource?: string | undefined
  resource_id?: string | undefined
  state?: 'Translated' | 'Approved' | undefined
  target_language?: string | undefined
}
type ClientStringWithTranslations = {
  content?: string | undefined
  language?: string | undefined
  last_changed?: string | undefined
  translations?: ClientStringTranslation[] | undefined
}
type ClientStrings = {
  meta?: PagingMeta | undefined
  strings?: ClientStringWithTranslations[] | undefined
}
type DeprecatedStringTranslationContent = {
  contents?: string[] | undefined
  source_language?: string | undefined
  target_languages?: string[] | undefined
}
type MachineTranslatedStrings = {
  cost?: Monetary | undefined
  strings?: ClientStringWithTranslations[] | undefined
}
type TranslationMemoryUnit = {
  sourceLanguage?: string | undefined
  sourceText?: string | undefined
  targetLanguage?: string | undefined
  targetText?: string | undefined
}
type AccountStyleGuideUploadRequest = { styleguide: File }
type SurveyQuestion = {
  answers?: SimpleModel[] | undefined
  question?:
    | {
        enabled?: boolean | undefined
        format?: string | undefined
        id?: bigint | undefined
        question?: string | undefined
        text?: string | undefined
      }
    | undefined
  question_answers?: SimpleModel[] | undefined
}
type SurveyQuestions = SurveyQuestion[]
type SurveyAnswer = {
  answer?: string | undefined
  project_id?: bigint | undefined
  question_answer_id?: bigint | undefined
  question_id?: bigint | undefined
  user_id?: bigint | undefined
}
type SurveyAnswers = { answers?: SurveyAnswer[] | undefined }
type TokenRequest = {
  grant_type: string
  password?: string | undefined
  refresh_token?: string | undefined
  scope: string
  user_id?: bigint | undefined
  username?: string | undefined
}
type Token = {
  access_token?: string | undefined
  expires_in?: bigint | undefined
  refresh_token?: string | undefined
  scope?: string | undefined
  token_type?: string | undefined
  user_id?: bigint | undefined
}
type TokenError = {
  code?: string | undefined
  help?: string | undefined
  http_code?: number | undefined
  message?: string | undefined
  account_status?:
    | 'registered'
    | 'email_confirmed'
    | 'deleted'
    | 'suspended'
    | 'rejected'
    | 'approved'
    | 'resume'
    | 'webinar'
    | 'course'
    | undefined
}
type AvailableVendorsFilter = {
  corporateId?: number | undefined
  manualWorkPermission?: boolean | undefined
  sourceLanguage?: string | undefined
  targetLanguages?: string[] | undefined
  types?: ('translator' | 'proofreader' | 'both')[] | undefined
}
type FilterVendorRequest = {
  clients?: number[] | undefined
  communication_channel?: string[] | undefined
  corporate_ids_for_auth?: number[] | undefined
  corporates?: number[] | undefined
  country?: string[] | undefined
  created_at?: string | undefined
  current_services?: string[] | undefined
  daily_proofreading_capacity?: number | undefined
  daily_translation_capacity?: number | undefined
  destination_languages?: number[] | undefined
  dtp_software?: string[] | undefined
  email_address?: string | undefined
  experience?: string[] | undefined
  first_name?: string | undefined
  id?: number[] | undefined
  is_certified_translator?: boolean | undefined
  is_sworn_translator?: boolean | undefined
  language_pairs?: number[][] | undefined
  last_name?: string | undefined
  last_online?: string | undefined
  last_worked?: string | undefined
  memoq?: number | undefined
  memsource?: number | undefined
  min_tqs?: number | undefined
  omegat?: number | undefined
  project_count?: number | undefined
  proofreader_experience?: number | undefined
  provides_creative_writing_service?: boolean | undefined
  provides_postedit_service?: boolean | undefined
  quote_file_subjects?: string[] | undefined
  reference?: string | undefined
  sdl_trados?: number | undefined
  search?: string | undefined
  skype_id?: string | undefined
  smartcat?: number | undefined
  smartling?: number | undefined
  source_languages?: number[] | undefined
  specialization?: string[] | undefined
  status?: string[] | undefined
  subtitle_edit?: number | undefined
  subtitle_workshop?: number | undefined
  translator_association?: string | undefined
  transsuite_2000?: number | undefined
  user_working_timezone?: string[] | undefined
  vendor_profile_lsp?: string | undefined
  vendor_tags?: string[] | undefined
  vendor_type?: string[] | undefined
  vendor_working_timezone?: string[] | undefined
  word_count?: number | undefined
  wordbee?: number | undefined
  wordfast?: number | undefined
  work_type?: string | undefined
  work_with?: string | undefined
  working_as?: string[] | undefined
  xbench?: number | undefined
  xtm?: number | undefined
}
type Email = { email?: string | undefined }
type VendorTag = { color?: string | undefined; name?: string | undefined }
type SuspendUserRequest = { reason?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/async/download': {
      $get:
        | {
            input: { query: { async_request_key: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { async_request_key: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/blogs': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            fallback?: boolean | undefined
            page?: bigint | undefined
            per_page?: bigint | undefined
          }
        }
        output: BlogArticleList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cache/:key': {
      $delete: {
        input: { param: { key: string } }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/commissions': {
      $get:
        | { input: {}; output: CommissionList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: ReportFilter }
            output: CommissionList
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ReportFilter }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/continuous_projects': {
      $get: {
        input: { query: { type?: 'active' | undefined } }
        output: ContinuousProjectsList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ContinuousProject }
        output: ContinuousProject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: ContinuousProject
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: ContinuousProjectUpdateContent }
            output: ContinuousProject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ContinuousProjectUpdateContent }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:id/analytics-token': {
      $get: {
        input: { param: { id: bigint } }
        output: AnalyticsToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:id/collect-analytics': {
      $post: {
        input: { param: { id: bigint } } & { json: AnalyticsCollection }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:id/complete': {
      $post: {
        input: { param: { id: bigint } }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:id/documents/quote': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForDocumentsBody }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForDocumentsBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForDocumentsBody }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForDocumentsBody }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForDocumentsBody }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/continuous_projects/:id/documents/:documentId/complete': {
      $post:
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:id/documents/:documentId/quote': {
      $post:
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/continuous_projects/:id/languages/quote': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForLanguagesBody }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForLanguagesBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForLanguagesBody }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForLanguagesBody }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint } } & { json: GetQuotesForLanguagesBody }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/continuous_projects/:id/languages/:targetLanguage/complete': {
      $post: {
        input: { param: { id: bigint; targetLanguage: string } }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:id/languages/:targetLanguage/quote': {
      $post:
        | {
            input: { param: { id: bigint; targetLanguage: string } }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; targetLanguage: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint; targetLanguage: string } }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: bigint; targetLanguage: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: bigint; targetLanguage: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/continuous_projects/:id/subscription': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:id/subscription/payment': {
      $put:
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: Subscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:id/translate/:targetLanguage': {
      $post: {
        input: { param: { id: bigint; targetLanguage: string } } & {
          json: InstantTranslationRequest
        }
        output: InstantTranslationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/documents': {
      $get:
        | {
            input: { param: { projectId: bigint } } & {
              query: { filterByLanguage?: string | undefined }
            }
            output: ContinuousProjectDocumentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { filterByLanguage?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post: {
        input: { param: { projectId: bigint } } & { json: AddOrUpdateDocumentRequest }
        output: ContinuousProjectDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/documents/progress': {
      $post:
        | {
            input: { param: { projectId: bigint } } & {
              json: ContinuousProjectDocumentProgressBody
            }
            output: Progress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              json: ContinuousProjectDocumentProgressBody
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:projectId/documents/strings': {
      $post: {
        input: { param: { projectId: bigint } } & { json: ContinuousProjectDocumentStringsBody }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/documents/:documentId': {
      $get:
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: ContinuousProjectDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post: {
        input: { param: { projectId: bigint; documentId: bigint } } & {
          json: AddOrUpdateDocumentRequest
        }
        output: ContinuousProjectDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/documents/:documentId/progress': {
      $get:
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              query: { filterByLanguage?: string | undefined }
            }
            output: Progress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              query: { filterByLanguage?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:projectId/documents/:documentId/strings': {
      $get: {
        input: { param: { projectId: bigint; documentId: bigint } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/invoices': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: ContinuousProjectInvoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:projectId/progress': {
      $get:
        | {
            input: { param: { projectId: bigint } } & {
              query: { filterByLanguage?: string | undefined }
            }
            output: ContinuousProjectProgress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { filterByLanguage?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:projectId/strings': {
      $get: {
        input: { param: { projectId: bigint } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/strings/cached': {
      $delete: {
        input: { param: { projectId: bigint } } & {
          query: { locale?: string | undefined; file_id?: bigint | undefined }
        }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectId: bigint } } & { query: { flatten?: boolean | undefined } }
        output: ContinuousProjectCache
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/strings/recache-tms': {
      $post: {
        input: { param: { projectId: bigint } } & {
          query: { locale?: string | undefined; file_id?: bigint | undefined }
        }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/continuous_projects/:projectId/widgets': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: ActiveWidgetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint } } & { json: ActiveWidget }
            output: ActiveWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & { json: ActiveWidget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:projectId/widgets/:widgetId': {
      $delete:
        | {
            input: { param: { projectId: bigint; widgetId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; widgetId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { projectId: bigint; widgetId: bigint } }
            output: ActiveWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; widgetId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint; widgetId: bigint } } & { json: ActiveWidget }
            output: ActiveWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; widgetId: bigint } } & { json: ActiveWidget }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/continuous_projects/:projectId/widgets/:widgetId/reset-token': {
      $post:
        | {
            input: { param: { projectId: bigint; widgetId: bigint } }
            output: ActiveWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; widgetId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/corporate': {
      $get: { input: {}; output: CorporateAccount; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/corporate/permissions': {
      $get: { input: {}; output: PermissionList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/corporate/user-groups': {
      $get: { input: {}; output: UserGroupList; outputFormat: 'json'; status: 200 }
      $post: { input: { json: UserGroup }; output: UserGroup; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/corporate/users': {
      $get: { input: {}; output: UserList; outputFormat: 'json'; status: 200 }
      $post: { input: { json: UserUpdateContent }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/corporates/all': {
      $get: { input: {}; output: CorporateAccount[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/corporates/:corporateId': {
      $get: {
        input: { param: { corporateId: bigint } }
        output: CorporateAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/corporates/:corporateId/permissions': {
      $get: {
        input: { param: { corporateId: bigint } }
        output: PermissionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/corporates/:corporateId/user-groups': {
      $get: {
        input: { param: { corporateId: bigint } }
        output: UserGroupList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { corporateId: bigint } } & { json: UserGroup }
        output: UserGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/corporates/:corporateId/users': {
      $get: {
        input: { param: { corporateId: bigint } }
        output: UserList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/delete-account': {
      $delete:
        | { input: {}; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/documents': {
      $get: {
        input: {
          query: {
            recent?: boolean | undefined
            search?: string | undefined
            type_filter?:
              | 'ALL'
              | 'TEXT_DOCUMENTS'
              | 'PRESENTATIONS'
              | 'SPREADSHEETS'
              | 'PDFS'
              | 'IMAGES'
              | 'SUBTITLES'
              | 'DESIGNS'
              | 'LOCALIZATION'
              | 'WEB'
              | 'STYLE_GUIDES'
              | 'GLOSSARIES'
              | undefined
            language_code?: string | undefined
            page?: bigint | undefined
            per_page?: bigint | undefined
            order_by?: 'id' | 'updated_at' | 'created_at' | 'name' | undefined
            order_type?: ListOrderType | undefined
            'with[]'?: ('preview' | 'editors')[] | undefined
          }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/documents/subjects': {
      $get: { input: {}; output: DocumentSubjects[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/documents/:documentId': {
      $get: {
        input: { param: { documentId: string } }
        output: ContinuousProjectDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/documents/:documentId/progress': {
      $get:
        | {
            input: { param: { documentId: number } }
            output: Progress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { documentId: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/documents/:documentId/regenerate_preview': {
      $post: {
        input: { param: { documentId: bigint } }
        output: RegeneratePreviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/documents/:documentId/similars': {
      $get: {
        input: { param: { documentId: bigint } } & {
          query: { per_page?: bigint | undefined; 'with[]'?: ('preview' | 'editors')[] | undefined }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/documents/:documentId/use_as_draft': {
      $post: {
        input: { param: { documentId: bigint } } & { json: UseAsDraftPayload }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/documents/:documentId/use_as_regular': {
      $post: {
        input: { param: { documentId: bigint } } & { json: UseAsRegularPayload }
        output: OperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/downgrade-proofreader': {
      $post:
        | { input: {}; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/earnings': {
      $get:
        | { input: {}; output: Earnings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/formats': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/freeze-account': {
      $post:
        | { input: {}; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/glossary': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: AccountGlossaryUploadRequest } & { form: AccountGlossaryUploadRequest }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountGlossaryUploadRequest } & { form: AccountGlossaryUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountGlossaryUploadRequest } & { form: AccountGlossaryUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/integrations/token': {
      $get:
        | { input: {}; output: IntegrationsToken; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/invitation/vendors': {
      $post:
        | {
            input: { json: FileNeedsVendor[] }
            output: VendorInvitationList
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FileNeedsVendor[] }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: FileNeedsVendor[] }; output: Error; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/languages': { $get: { input: {}; output: Language[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/location': {
      $post:
        | {
            input: { json: LocationUpdateContent }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LocationUpdateContent }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/make-proofreader': {
      $post:
        | { input: {}; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | { input: { json: UserUpdateContent }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: UserUpdateContent }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: UserUpdateContent }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/ml/delivery-prediction': {
      $post:
        | {
            input: { json: DeliveryPredictionPayload }
            output: DeliveryPredictionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeliveryPredictionPayload }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeliveryPredictionPayload }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/notifications/subscribe': {
      $post:
        | {
            input: { json: NotificationSubscription }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/notifications/unsubscribe': {
      $post:
        | {
            input: { json: NotificationSubscription }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/pam/chat': {
      $post:
        | {
            input: { json: PamMessage }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PamMessage }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/pam/profiles/client/:clientId': {
      $get:
        | {
            input: { param: { clientId: bigint } }
            output: ClientProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/pam/projects/:projectId/completion-report': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: ProjectCompletionReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/password': {
      $post:
        | {
            input: { json: PasswordUpdateContent }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordUpdateContent }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payment': {
      $get:
        | { input: {}; output: PaymentInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: UpdatePaymentInfo }
            output: PaymentInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: UpdatePaymentInfo }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/payment/reset-corporate-payment-code': {
      $post:
        | { input: {}; output: CreditCard; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/payment/toggle-corporate-auto-charge': {
      $post:
        | { input: {}; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/payment/:cardId': {
      $get:
        | {
            input: { param: { cardId: bigint } }
            output: CreditCard
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { cardId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/payment/:cardId/delete': {
      $delete:
        | {
            input: { param: { cardId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { cardId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/payment/:cardId/reset-payment-code': {
      $post:
        | {
            input: { param: { cardId: bigint } }
            output: CreditCard
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { cardId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/permissions': {
      $get: { input: {}; output: PermissionList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/profile-picture': {
      $post:
        | {
            input: { json: ProfilePictureUpload } & { form: ProfilePictureUpload }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProfilePictureUpload } & { form: ProfilePictureUpload }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProfilePictureUpload } & { form: ProfilePictureUpload }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects': {
      $get: {
        input: {
          query: {
            page?: bigint | undefined
            per_page?: bigint | undefined
            'status[]'?: ProjectStatus[] | undefined
            with_pending?: boolean | undefined
            with_started?: boolean | undefined
            with_completed?: boolean | undefined
            order_by?: 'id' | 'status' | 'delivery' | 'price' | undefined
            order_type?: ListOrderType | undefined
            'with[]'?: ('client' | 'vendor')[] | undefined
          }
        }
        output: ProjectList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: NewProject } & { form: NewProject }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NewProject } & { form: NewProject }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NewProject } & { form: NewProject }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: NewProject } & { form: NewProject }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: NewProject } & { form: NewProject }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/from-internal-id/:projectId': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: ProjectId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/vendor': {
      $get:
        | {
            input: {
              query: {
                joined?: boolean | undefined
                completed?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                joined?: boolean | undefined
                completed?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/projects/:id': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { 'with[]'?: ('client' | 'vendor' | 'score')[] | undefined }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { 'with[]'?: ('client' | 'vendor' | 'score')[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: ProjectUpdate } & { form: ProjectUpdate }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectUpdate } & { form: ProjectUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectUpdate } & { form: ProjectUpdate }
            output: Error
            outputFormat: 'json'
            status: 406
          }
    }
  } & {
    '/projects/:id/assign-cm': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: CM }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CM }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/callback/:actionType': {
      $get:
        | {
            input: { param: { id: bigint; actionType: 'translated' | 'proofread' | 'completed' } }
            output: CallbackResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; actionType: 'translated' | 'proofread' | 'completed' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/cancel': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: CancelProjectRequest }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: CancelProjectRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/deliver': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/download': {
      $get:
        | { input: { param: { id: bigint } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 402 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/download/:language': {
      $get:
        | {
            input: { param: { id: bigint; language: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint; language: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: bigint; language: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/email-quote': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/invoice': {
      $get:
        | { input: { param: { id: bigint } }; output: Invoice; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/invoice.html': {
      $get:
        | { input: { param: { id: bigint } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/invoice.pdf': {
      $get:
        | { input: { param: { id: bigint } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/launch': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: ProjectPayment }
            output: ProjectLaunchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectPayment }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectPayment }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: ProjectPayment }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/package': {
      $post:
        | {
            input: { param: { id: bigint } } & { query: { async?: bigint | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { async?: bigint | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: bigint } } & { query: { async?: bigint | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/package/check': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { key?: string | undefined } }
            output: PackageStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: bigint } } & { query: { key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/package/:language': {
      $post:
        | {
            input: { param: { id: bigint; language: string } } & {
              query: { async?: bigint | undefined }
            }
            output: Package
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; language: string } } & {
              query: { async?: bigint | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint; language: string } } & {
              query: { async?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: bigint; language: string } } & {
              query: { async?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/progress': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { raw?: boolean | undefined } }
            output: Progress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { raw?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: bigint } } & { query: { raw?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/recreate': {
      $post:
        | {
            input: { param: { id: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/reports': {
      $post:
        | {
            input: { param: { id: bigint } } & { json: ReportContent }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: ReportContent }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: ReportContent }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/sales/activities': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: { excludeOwner?: string | undefined; type?: SalesActivityType | undefined }
            }
            output: SalesActivities
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: { excludeOwner?: string | undefined; type?: SalesActivityType | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: bigint } } & { json: NewSalesActivity } & {
              form: NewSalesActivity
            }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: NewSalesActivity } & {
              form: NewSalesActivity
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/projects/:id/webhooks': {
      $delete:
        | {
            input: { param: { id: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | { input: { param: { id: bigint } }; output: Project; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: bigint } } & { json: Webhook }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Webhook }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: bigint } } & { json: Webhook }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Webhook }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/activities': {
      $get:
        | {
            input: { param: { projectId: bigint } } & {
              query: { page?: bigint | undefined; per_page?: bigint | undefined }
            }
            output: ActivityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { page?: bigint | undefined; per_page?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/activities/:activityId': {
      $get:
        | {
            input: { param: { projectId: bigint; activityId: bigint } }
            output: Activity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; activityId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint; activityId: bigint } } & { json: Comment } & {
              form: Comment
            }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; activityId: bigint } } & { json: Comment } & {
              form: Comment
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/activities/:activityId/comments': {
      $get:
        | {
            input: { param: { projectId: bigint; activityId: bigint } }
            output: CommentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; activityId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/comments': {
      $get:
        | {
            input: { param: { projectId: bigint } } & {
              query: { page?: bigint | undefined; per_page?: bigint | undefined }
            }
            output: CommentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { page?: bigint | undefined; per_page?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/documents': {
      $get:
        | {
            input: { param: { projectId: bigint } } & {
              query: { 'with[]'?: ('preview' | 'editors')[] | undefined }
            }
            output: DocumentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { 'with[]'?: ('preview' | 'editors')[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint } } & { json: DocumentUpdates } & {
              form: DocumentUpdates
            }
            output: DocumentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & { json: DocumentUpdates } & {
              form: DocumentUpdates
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: bigint } } & { json: DocumentUpdates } & {
              form: DocumentUpdates
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint } } & { json: DocumentUpdates } & {
              form: DocumentUpdates
            }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectId: bigint } } & { json: DocumentUpdates } & {
              form: DocumentUpdates
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { projectId: bigint } } & { json: DocumentUpdates } & {
              form: DocumentUpdates
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/projects/:projectId/documents/:documentId': {
      $delete:
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              query: { 'with[]'?: ('preview' | 'editors')[] | undefined }
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              query: { 'with[]'?: ('preview' | 'editors')[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              json: DocumentUploadRequest
            } & { form: DocumentUploadRequest }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              json: DocumentUploadRequest
            } & { form: DocumentUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              json: DocumentUploadRequest
            } & { form: DocumentUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              json: DocumentUploadRequest
            } & { form: DocumentUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              json: DocumentUploadRequest
            } & { form: DocumentUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } } & {
              json: DocumentUploadRequest
            } & { form: DocumentUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/projects/:projectId/documents/:documentId/download': {
      $get:
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/documents/:documentId/translations': {
      $get: {
        input: { param: { projectId: bigint; documentId: bigint } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/documents/:documentId/translations/download/:language': {
      $get:
        | {
            input: { param: { projectId: bigint; documentId: bigint; language: string } } & {
              query: { certified?: boolean | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; documentId: bigint; language: string } } & {
              query: { certified?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/documents/:documentId/translations/:language': {
      $get: {
        input: { param: { projectId: bigint; documentId: bigint; language: string } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/glossaries': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: GlossaryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint } } & { json: GlossaryUploadRequest } & {
              form: GlossaryUploadRequest
            }
            output: Glossary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & { json: GlossaryUploadRequest } & {
              form: GlossaryUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: bigint } } & { json: GlossaryUploadRequest } & {
              form: GlossaryUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint } } & { json: GlossaryUploadRequest } & {
              form: GlossaryUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectId: bigint } } & { json: GlossaryUploadRequest } & {
              form: GlossaryUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { projectId: bigint } } & { json: GlossaryUploadRequest } & {
              form: GlossaryUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/projects/:projectId/glossaries/:glossaryId': {
      $delete:
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: Glossary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } } & {
              json: GlossaryUploadRequest
            } & { form: GlossaryUploadRequest }
            output: Glossary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } } & {
              json: GlossaryUploadRequest
            } & { form: GlossaryUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } } & {
              json: GlossaryUploadRequest
            } & { form: GlossaryUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } } & {
              json: GlossaryUploadRequest
            } & { form: GlossaryUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } } & {
              json: GlossaryUploadRequest
            } & { form: GlossaryUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/projects/:projectId/glossaries/:glossaryId/download': {
      $get:
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; glossaryId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/strings': {
      $get: {
        input: { param: { projectId: bigint } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/strings/package': {
      $post:
        | {
            input: { param: { projectId: bigint } } & {
              query: { async?: bigint | undefined; format?: string | undefined }
            }
            output: AsyncOperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { async?: bigint | undefined; format?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/strings/package/status': {
      $get: {
        input: { param: { projectId: bigint } } & { query: { async_request_key: string } }
        output: AsyncOperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/strings/:languageCode/package': {
      $post:
        | {
            input: { param: { projectId: bigint; languageCode: string } } & {
              query: { async?: bigint | undefined; format?: string | undefined }
            }
            output: AsyncOperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; languageCode: string } } & {
              query: { async?: bigint | undefined; format?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/projects/:projectId/strings/:languageCode/package/status': {
      $get: {
        input: { param: { projectId: bigint; languageCode: string } } & {
          query: { async_request_key: string }
        }
        output: AsyncOperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/strings/:language': {
      $get: {
        input: { param: { projectId: bigint; language: string } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/styleguides': {
      $get:
        | {
            input: { param: { projectId: bigint } } & {
              query: { 'with[]'?: 'preview'[] | undefined }
            }
            output: StyleGuideList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & {
              query: { 'with[]'?: 'preview'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectId: bigint } } & { json: StyleGuideUploadRequest } & {
              form: StyleGuideUploadRequest
            }
            output: StyleGuideList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } } & { json: StyleGuideUploadRequest } & {
              form: StyleGuideUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: bigint } } & { json: StyleGuideUploadRequest } & {
              form: StyleGuideUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint } } & { json: StyleGuideUploadRequest } & {
              form: StyleGuideUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectId: bigint } } & { json: StyleGuideUploadRequest } & {
              form: StyleGuideUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/projects/:projectId/styleguides/:styleGuideId': {
      $delete:
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              query: { 'with[]'?: 'preview'[] | undefined }
            }
            output: StyleGuide
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              query: { 'with[]'?: 'preview'[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              json: StyleGuideUploadRequest
            } & { form: StyleGuideUploadRequest }
            output: StyleGuide
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              json: StyleGuideUploadRequest
            } & { form: StyleGuideUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              json: StyleGuideUploadRequest
            } & { form: StyleGuideUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              json: StyleGuideUploadRequest
            } & { form: StyleGuideUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } } & {
              json: StyleGuideUploadRequest
            } & { form: StyleGuideUploadRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/projects/:projectId/styleguides/:styleGuideId/download': {
      $get:
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint; styleGuideId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:projectId/translations': {
      $get: {
        input: { param: { projectId: bigint } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/translations/:language': {
      $get: {
        input: { param: { projectId: bigint; language: string } }
        output: StringList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/vendors': {
      $get:
        | {
            input: { param: { projectId: bigint } }
            output: UserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { projectId: bigint } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/reports/filter': {
      $post:
        | {
            input: { json: FilterDates }
            output: FilterContents
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FilterDates }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/reports/language-pairs': {
      $post:
        | {
            input: { json: ReportFilter }
            output: LanguagePairsReport
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ReportFilter }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/reports/projects': {
      $post:
        | { input: { json: ReportFilter }; output: ProjectList; outputFormat: 'json'; status: 200 }
        | { input: { json: ReportFilter }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/reports/qa': {
      $post:
        | { input: { json: QaFilter }; output: QaWarnings; outputFormat: 'json'; status: 200 }
        | { input: { json: QaFilter }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/reports/users': {
      $post:
        | { input: { json: ReportFilter }; output: UsersReport; outputFormat: 'json'; status: 200 }
        | { input: { json: ReportFilter }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/resend-email-confirmation': {
      $post: {
        input: {}
        output: { status?: 'success' | 'already_confirmed' | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/responsivity': {
      $get:
        | {
            input: { query: { period?: 'monthly' | 'weekly' | undefined } }
            output: ResponsivityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { period?: 'monthly' | 'weekly' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { period?: 'monthly' | 'weekly' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/search': {
      $get: {
        input: {
          query: {
            query: string
            'include[]'?: ('projects' | 'documents' | 'strings')[] | undefined
            page?: bigint | undefined
            per_page?: bigint | undefined
          }
        }
        output: SearchEverywhereResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/documents/reindex': {
      $post: { input: {}; output: AsyncOperationStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/search/documents/reindex/status': {
      $get: {
        input: { query: { async_request_key: string } }
        output: AsyncOperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stats': {
      $get:
        | { input: {}; output: Stats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/stats/commissions': {
      $get:
        | { input: {}; output: CommissionStats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: ReportFilter }
            output: CommissionStats
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ReportFilter }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/stats/popular-pairs': {
      $get:
        | { input: {}; output: PopularLanguagePairs; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/stats/projects': {
      $get:
        | { input: {}; output: ClientProjectStats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/stats/strings': {
      $get:
        | { input: {}; output: ClientStringStats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/strings': {
      $get: {
        input: { query: { source_language?: string | undefined; page?: bigint | undefined } }
        output: ClientStrings
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: DeprecatedStringTranslationContent }
        output: MachineTranslatedStrings
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { json: TranslationMemoryUnit }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TranslationMemoryUnit }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TranslationMemoryUnit }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TranslationMemoryUnit }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/strings/:languageCode/package': {
      $post:
        | {
            input: { param: { languageCode: string } } & {
              query: { async?: bigint | undefined; email?: bigint | undefined }
            }
            output: AsyncOperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { languageCode: string } } & {
              query: { async?: bigint | undefined; email?: bigint | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/strings/:languageCode/package/status': {
      $get: {
        input: { param: { languageCode: string } } & { query: { async_request_key: string } }
        output: AsyncOperationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/styleguide': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: AccountStyleGuideUploadRequest } & {
              form: AccountStyleGuideUploadRequest
            }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountStyleGuideUploadRequest } & {
              form: AccountStyleGuideUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountStyleGuideUploadRequest } & {
              form: AccountStyleGuideUploadRequest
            }
            output: Error
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/surveys/:scope/:type': {
      $get:
        | {
            input: { param: { scope: string; type: string } } & {
              query: { attach_answers_for_project?: bigint | undefined }
            }
            output: SurveyQuestions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string; type: string } } & {
              query: { attach_answers_for_project?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { scope: string; type: string } } & { json: SurveyAnswers }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scope: string; type: string } } & { json: SurveyAnswers }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & { '/swagger': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/token': {
      $post:
        | {
            input: { json: TokenRequest } & { form: TokenRequest }
            output: Token
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenRequest } & { form: TokenRequest }
            output: TokenError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/unfreeze-account': {
      $post:
        | { input: {}; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 304 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user-groups': {
      $get: { input: {}; output: UserGroupList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users': {
      $get: {
        input: {
          query: {
            page?: bigint | undefined
            per_page?: bigint | undefined
            user_type?: 'vendor' | 'all' | undefined
            search?: string | undefined
            email?: string | undefined
          }
        }
        output: UserList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { notify?: boolean | undefined } } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/available-vendors': {
      $post: {
        input: { query: { 'with[]'?: 'user'[] | undefined } } & { json: AvailableVendorsFilter }
        output: UserList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/filter': {
      $post: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | undefined
            order_by?: string | undefined
            order?: string | undefined
          }
        } & { json: FilterVendorRequest }
        output: UserList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/send-password-reminder': {
      $post:
        | { input: { json: Email }; output: OperationStatus; outputFormat: 'json'; status: 200 }
        | { input: { json: Email }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/users/tags': { $get: { input: {}; output: VendorTag[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/:userId': {
      $get:
        | { input: { param: { userId: bigint } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { userId: bigint } } & { json: UserUpdateContent }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: UserUpdateContent }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/approve': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/delete-account': {
      $delete:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/documents': {
      $get: {
        input: { param: { userId: bigint } } & {
          query: {
            recent?: boolean | undefined
            search?: string | undefined
            type_filter?:
              | 'ALL'
              | 'TEXT_DOCUMENTS'
              | 'PRESENTATIONS'
              | 'SPREADSHEETS'
              | 'PDFS'
              | 'IMAGES'
              | 'SUBTITLES'
              | 'DESIGNS'
              | 'LOCALIZATION'
              | 'WEB'
              | 'STYLE_GUIDES'
              | 'GLOSSARIES'
              | undefined
            language_code?: string | undefined
            page?: bigint | undefined
            per_page?: bigint | undefined
            order_by?: 'id' | 'updated_at' | 'created_at' | 'name' | undefined
            order_type?: ListOrderType | undefined
          }
        }
        output: DocumentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/downgrade-proofreader': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 304 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/:userId/earnings': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: Earnings
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/freeze-account': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 304 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/make-proofreader': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 304 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/:userId/notifications/subscribe': {
      $post:
        | {
            input: { param: { userId: bigint } } & { json: NotificationSubscription }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: bigint } } & { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/notifications/unsubscribe': {
      $post:
        | {
            input: { param: { userId: bigint } } & { json: NotificationSubscription }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: bigint } } & { json: NotificationSubscription }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/payment': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: PaymentInfo
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { userId: bigint } } & { json: PaymentInfo }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: PaymentInfo }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/permissions': {
      $get: {
        input: { param: { userId: bigint } }
        output: PermissionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:userId/profile-picture': {
      $post:
        | {
            input: { param: { userId: bigint } } & { json: ProfilePictureUpload } & {
              form: ProfilePictureUpload
            }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: ProfilePictureUpload } & {
              form: ProfilePictureUpload
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: bigint } } & { json: ProfilePictureUpload } & {
              form: ProfilePictureUpload
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/projects/vendor': {
      $get:
        | {
            input: { param: { userId: bigint } } & {
              query: {
                joined?: boolean | undefined
                completed?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & {
              query: {
                joined?: boolean | undefined
                completed?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/:userId/reject': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/resend-email-confirmation': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: { status?: 'success' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } }
            output: { status?: 'already_confirmed' | undefined }
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/responsivity': {
      $get:
        | {
            input: { param: { userId: bigint } } & {
              query: { period?: 'monthly' | 'weekly' | undefined }
            }
            output: ResponsivityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { period?: 'monthly' | 'weekly' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { period?: 'monthly' | 'weekly' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/stats': {
      $get:
        | { input: { param: { userId: bigint } }; output: Stats; outputFormat: 'json'; status: 200 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/stats/popular-pairs': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: PopularLanguagePairs
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/stats/projects': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: ClientProjectStats
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/suspend': {
      $post:
        | {
            input: { param: { userId: bigint } } & { json: SuspendUserRequest }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: SuspendUserRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:userId/unfreeze-account': {
      $post:
        | {
            input: { param: { userId: bigint } }
            output: OperationStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 304 }
        | { input: { param: { userId: bigint } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/:userId/user-groups': {
      $get: {
        input: { param: { userId: bigint } }
        output: UserGroupList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { userId: bigint } } & { json: ActiveWidget }
            output: UserGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & { json: ActiveWidget }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
