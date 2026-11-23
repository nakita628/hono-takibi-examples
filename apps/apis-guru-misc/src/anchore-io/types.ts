type Account = {
  created_at?: string | undefined
  email?: string | undefined
  last_updated?: string | undefined
  name: string
  state?: 'enabled' | 'disabled' | 'deleting' | undefined
  type?: 'user' | 'admin' | 'service' | undefined
}
type ApiErrorResponse = {
  code?: number | undefined
  detail?: { [x: string]: unknown } | undefined
  error_type?: string | undefined
  message?: string | undefined
}
type AccountList = Account[]
type AccountCreationRequest = { email?: string | undefined; name: string }
type AccountStatus = { state?: 'enabled' | 'disabled' | undefined }
type User = {
  created_at?: string | undefined
  last_updated?: string | undefined
  source?: string | undefined
  type?: 'native' | 'internal' | 'external' | undefined
  username: string
}
type UserCreationRequest = { password: string; username: string }
type AccessCredential = { created_at?: string | undefined; type: 'password'; value: string }
type CredentialList = AccessCredential[]
type AnalysisArchiveSummary = {
  last_updated?: string | undefined
  total_data_bytes?: number | undefined
  total_image_count?: number | undefined
  total_tag_count?: number | undefined
}
type AnalysisArchiveRulesSummary = { count?: number | undefined; last_updated?: string | undefined }
type ArchiveSummary = {
  images?: AnalysisArchiveSummary | undefined
  rules?: AnalysisArchiveRulesSummary | undefined
}
type TagEntry = {
  detected_at?: string | undefined
  pullstring?: string | undefined
  registry?: string | undefined
  repository?: string | undefined
  tag?: string | undefined
}
type ArchivedAnalysis = {
  analyzed_at?: string | undefined
  annotations?: { [x: string]: unknown } | undefined
  archive_size_bytes?: number | undefined
  created_at?: string | undefined
  imageDigest?: string | undefined
  image_detail?: TagEntry[] | undefined
  last_updated?: string | undefined
  parentDigest?: string | undefined
  status?: 'archiving' | 'archived' | 'deleting' | 'deleted' | undefined
}
type ArchivedAnalyses = ArchivedAnalysis[]
type ImageAnalysisReferences = string[]
type AnalysisArchiveAddResult = {
  detail?: string | undefined
  digest?: string | undefined
  status?: 'archived' | 'archiving' | 'error' | undefined
}
type AddAnalysisArchiveResult = AnalysisArchiveAddResult[]
type ImageSelector = {
  registry?: string | undefined
  repository?: string | undefined
  tag?: string | undefined
}
type AnalysisArchiveTransitionRuleExclude = {
  expiration_days?: number | undefined
  selector?: ImageSelector | undefined
}
type AnalysisArchiveTransitionRule = {
  analysis_age_days?: number | undefined
  created_at?: string | undefined
  exclude?: AnalysisArchiveTransitionRuleExclude | undefined
  last_updated?: string | undefined
  max_images_per_account?: number | undefined
  rule_id?: string | undefined
  selector?: ImageSelector | undefined
  system_global?: boolean | undefined
  tag_versions_newer?: number | undefined
  transition: 'archive' | 'delete'
}
type AnalysisArchiveRules = AnalysisArchiveTransitionRule[]
type EventDescription = {
  message?: string | undefined
  name?: string | undefined
  resource_type?: string | undefined
  type?: string | undefined
}
type EventSubcategory = {
  description?: string | undefined
  events?: EventDescription[] | undefined
  name?: string | undefined
}
type EventCategory = {
  category?: string | undefined
  description?: string | undefined
  subcategories?: EventSubcategory[] | undefined
}
type EventTypesList = EventCategory[]
type EventResponse = {
  created_at?: string | undefined
  event?:
    | {
        category?: string | undefined
        details?: { [x: string]: unknown } | undefined
        level?: string | undefined
        message?: string | undefined
        resource?:
          | { id?: string | undefined; type?: string | undefined; user_id?: string | undefined }
          | undefined
        source?:
          | {
              base_url?: string | undefined
              hostid?: string | undefined
              request_id?: string | undefined
              servicename?: string | undefined
            }
          | undefined
        timestamp?: string | undefined
        type?: string | undefined
      }
    | undefined
  generated_uuid?: string | undefined
}
type EventsList = {
  item_count?: number | undefined
  next_page?: boolean | undefined
  page?: number | undefined
  results?: EventResponse[] | undefined
}
type DeleteImageResponse = {
  detail?: string | undefined
  digest: string
  status: 'not_found' | 'deleting' | 'delete_failed'
}
type DeleteImageResponseList = DeleteImageResponse[]
type ImageContent = { [x: string]: unknown }
type ImageDetail = {
  created_at?: string | undefined
  dockerfile?: (string | null) | undefined
  fulldigest?: string | undefined
  fulltag?: string | undefined
  imageDigest?: string | undefined
  imageId?: string | undefined
  last_updated?: string | undefined
  registry?: string | undefined
  repo?: string | undefined
  userId?: string | undefined
}
type AnchoreImage = {
  analysis_status?: 'not_analyzed' | 'analyzing' | 'analyzed' | 'analysis_failed' | undefined
  annotations?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  imageDigest?: string | undefined
  image_content?: ImageContent | undefined
  image_detail?: ImageDetail[] | undefined
  image_status?: 'active' | 'inactive' | 'disabled' | undefined
  last_updated?: string | undefined
  record_version?: string | undefined
  userId?: string | undefined
}
type AnchoreImageList = AnchoreImage[]
type AnalysisArchiveSource = { digest: string } | null
type RegistryDigestSource = {
  creation_timestamp_override?: string | undefined
  dockerfile?: string | undefined
  pullstring: string
  tag: string
} | null
type ImportContentDigests = {
  dockerfile?: string | undefined
  image_config: string
  manifest: string
  packages: string
  parent_manifest?: string | undefined
}
type ImageImportManifest = {
  contents: ImportContentDigests
  digest: string
  local_image_id?: string | undefined
  operation_uuid: string
  parent_digest?: string | undefined
  tags: string[]
} | null
type RegistryTagSource = { dockerfile?: string | undefined; pullstring: string } | null
type ImageSource = {
  archive?: AnalysisArchiveSource | undefined
  digest?: RegistryDigestSource | undefined
  import?: ImageImportManifest | undefined
  tag?: RegistryTagSource | undefined
}
type ImageAnalysisRequest = {
  annotations?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  digest?: string | undefined
  dockerfile?: string | undefined
  image_type?: string | undefined
  source?: ImageSource | undefined
  tag?: string | undefined
}
type PolicyEvaluation = { [x: string]: unknown }
type PolicyEvaluationList = PolicyEvaluation[]
type ContentFilesResponse = {
  content?:
    | {
        filename?: string | undefined
        gid?: number | undefined
        linkdest?: (string | null) | undefined
        mode?: string | undefined
        sha256?: (string | null) | undefined
        size?: number | undefined
        type?: string | undefined
        uid?: number | undefined
      }[]
    | undefined
  content_type?: string | undefined
  imageDigest?: string | undefined
}
type ContentJAVAPackageResponse = {
  content?:
    | {
        cpes?: string[] | undefined
        'implementation-version'?: string | undefined
        location?: string | undefined
        'maven-version'?: string | undefined
        origin?: string | undefined
        package?: string | undefined
        'specification-version'?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  content_type?: string | undefined
  imageDigest?: string | undefined
}
type ContentPackageResponse = {
  content?:
    | {
        cpes?: string[] | undefined
        license?: string | undefined
        licenses?: string[] | undefined
        location?: string | undefined
        origin?: string | undefined
        package?: string | undefined
        size?: string | undefined
        type?: string | undefined
        version?: string | undefined
      }[]
    | undefined
  content_type?: string | undefined
  imageDigest?: string | undefined
}
type CVSSV2Scores = {
  base_score?: (number | null) | undefined
  exploitability_score?: (number | null) | undefined
  impact_score?: (number | null) | undefined
}
type CVSSV3Scores = {
  base_score?: (number | null) | undefined
  exploitability_score?: (number | null) | undefined
  impact_score?: (number | null) | undefined
}
type NvdDataObject = {
  cvss_v2?: CVSSV2Scores | undefined
  cvss_v3?: CVSSV3Scores | undefined
  id?: string | undefined
}
type NvdDataList = NvdDataObject[]
type VendorDataObject = {
  cvss_v2?: CVSSV2Scores | undefined
  cvss_v3?: CVSSV3Scores | undefined
  id?: string | undefined
}
type VendorDataList = VendorDataObject[]
type Vulnerability = {
  feed?: string | undefined
  feed_group?: string | undefined
  fix?: string | undefined
  nvd_data?: NvdDataList | undefined
  package?: string | undefined
  package_cpe?: string | undefined
  package_name?: string | undefined
  package_path?: string | undefined
  package_type?: string | undefined
  package_version?: string | undefined
  severity?: string | undefined
  url?: string | undefined
  vendor_data?: VendorDataList | undefined
  vuln?: string | undefined
  will_not_fix?: boolean | undefined
}
type VulnerabilityList = Vulnerability[]
type VulnerabilityResponse = {
  imageDigest?: string | undefined
  vulnerabilities?: VulnerabilityList | undefined
  vulnerability_type?: string | undefined
}
type RegexContentMatch = {
  lines?: number[] | undefined
  name?: string | undefined
  regex?: string | undefined
}
type FileContentSearchResult = {
  matches?: RegexContentMatch[] | undefined
  path?: string | undefined
}
type FileContentSearchList = FileContentSearchResult[]
type RetrievedFile = { b64_content?: string | undefined; path?: string | undefined }
type RetrievedFileList = RetrievedFile[]
type SecretSearchResult = { matches?: RegexContentMatch[] | undefined; path?: string | undefined }
type SecretSearchList = SecretSearchResult[]
type MalwareScan = {
  enabled?: boolean | undefined
  findings?: { path?: string | undefined; signature?: string | undefined }[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  scanner?: string | undefined
}
type ContentMalwareResponse = {
  content?: MalwareScan[] | undefined
  content_type?: string | undefined
  imageDigest?: string | undefined
}
type MetadataResponse = {
  imageDigest?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  metadata_type?: string | undefined
}
type ImageImportOperation = {
  created_at?: string | undefined
  expires_at?: string | undefined
  status?: 'pending' | 'queued' | 'processing' | 'complete' | 'failed' | 'expired' | undefined
  uuid?: string | undefined
}
type ImageImports = ImageImportOperation[]
type ImportContentDigestList = string[]
type ImageImportContentResponse = { created_at?: string | undefined; digest?: string | undefined }
type ImportPackageRelationship = {
  child: string
  metadata?: { [x: string]: unknown } | undefined
  parent: string
  type: string
}
type ImportPackageLocation = { layerID?: string | undefined; path: string }
type ImportPackage = {
  cpes: string[]
  foundBy?: string | undefined
  id?: string | undefined
  language: string
  licenses: string[]
  locations: ImportPackageLocation[]
  metadata?: { [x: string]: unknown } | undefined
  metadataType: string
  name: string
  purl?: string | undefined
  type: string
  version: string
}
type ImportDescriptor = { name: string; version: string }
type ImportDistribution = { idLike: string; name: string; version: string }
type ImportSchema = { url: string; version: string }
type ImportSource = { target: { [x: string]: unknown }; type: string }
type ImagePackageManifest = {
  artifactRelationships?: ImportPackageRelationship[] | undefined
  artifacts: ImportPackage[]
  descriptor?: ImportDescriptor | undefined
  distro: ImportDistribution
  schema?: ImportSchema | undefined
  source: ImportSource
}
type TokenResponse = { token: string }
type ImageRef = { type: 'tag' | 'digest' | 'id'; value: string }
type ImageSelectionRule = {
  id?: string | undefined
  image: ImageRef
  name: string
  registry: string
  repository: string
}
type MappingRule = {
  id?: string | undefined
  image: ImageRef
  name: string
  policy_id?: string | undefined
  policy_ids?: string[] | undefined
  registry: string
  repository: string
  whitelist_ids?: string[] | undefined
}
type PolicyRule = {
  action: 'GO' | 'STOP' | 'WARN'
  gate: string
  id?: string | undefined
  params?: { name: string; value: string }[] | undefined
  trigger: string
}
type Policy = {
  comment?: string | undefined
  id: string
  name?: string | undefined
  rules?: PolicyRule[] | undefined
  version: string
}
type WhitelistItem = {
  expires_on?: string | undefined
  gate: string
  id?: string | undefined
  trigger_id: string
}
type Whitelist = {
  comment?: string | undefined
  id: string
  items?: WhitelistItem[] | undefined
  name?: string | undefined
  version: string
}
type PolicyBundle = {
  blacklisted_images?: ImageSelectionRule[] | undefined
  comment?: string | undefined
  id: string
  mappings: MappingRule[]
  name?: string | undefined
  policies: Policy[]
  version: string
  whitelisted_images?: ImageSelectionRule[] | undefined
  whitelists?: Whitelist[] | undefined
}
type PolicyBundleRecord = {
  active?: boolean | undefined
  created_at?: string | undefined
  last_updated?: string | undefined
  policyId?: string | undefined
  policy_source?: string | undefined
  policybundle?: PolicyBundle | undefined
  userId?: string | undefined
}
type PolicyBundleList = PolicyBundleRecord[]
type ImageReference = {
  analyzed_at?: string | undefined
  digest?: string | undefined
  id?: string | undefined
  tag_history?: TagEntry[] | undefined
}
type PackageReference = {
  name?: string | undefined
  type?: string | undefined
  version?: (string | null) | undefined
  will_not_fix?: boolean | undefined
}
type ImageWithPackages = {
  image?: ImageReference | undefined
  packages?: PackageReference[] | undefined
}
type PaginatedImageList = {
  next_page?: string | undefined
  page?: string | undefined
  returned_count?: number | undefined
  images?: ImageWithPackages[] | undefined
}
type VulnerablePackageReference = {
  name?: string | undefined
  namespace?: string | undefined
  severity?: string | undefined
  type?: string | undefined
  version?: (string | null) | undefined
}
type VulnerableImage = {
  affected_packages?: VulnerablePackageReference[] | undefined
  image?: ImageReference | undefined
}
type PaginatedVulnerableImageList = {
  next_page?: string | undefined
  page?: string | undefined
  returned_count?: number | undefined
  images?: VulnerableImage[] | undefined
}
type VulnerabilityReference = {
  source?: string | undefined
  tags?: string[] | undefined
  url?: string | undefined
}
type StandaloneVulnerability = {
  affected_packages?: PackageReference[] | undefined
  description?: string | undefined
  id?: string | undefined
  link?: string | undefined
  namespace?: string | undefined
  nvd_data?: NvdDataList | undefined
  references?: VulnerabilityReference[] | undefined
  severity?: 'Unknown' | 'Negligible' | 'Low' | 'Medium' | 'High' | 'Critical' | undefined
  vendor_data?: VendorDataList | undefined
}
type PaginatedVulnerabilityList = {
  next_page?: string | undefined
  page?: string | undefined
  returned_count?: number | undefined
  vulnerabilities?: StandaloneVulnerability[] | undefined
}
type RegistryConfiguration = {
  created_at?: string | undefined
  last_upated?: string | undefined
  registry?: string | undefined
  registry_name?: string | undefined
  registry_type?: string | undefined
  registry_user?: string | undefined
  registry_verify?: boolean | undefined
  userId?: string | undefined
}
type RegistryConfigurationList = RegistryConfiguration[]
type RegistryConfigurationRequest = {
  registry?: string | undefined
  registry_name?: string | undefined
  registry_pass?: string | undefined
  registry_type?: string | undefined
  registry_user?: string | undefined
  registry_verify?: boolean | undefined
}
type Subscription = {
  active?: boolean | undefined
  subscription_id?: string | undefined
  subscription_key?: string | undefined
  subscription_type?: string | undefined
  subscription_value?: (string | null) | undefined
  userId?: string | undefined
}
type SubscriptionList = Subscription[]
type StatusResponse = {
  available?: boolean | undefined
  busy?: boolean | undefined
  db_version?: string | undefined
  detail?: { [x: string]: unknown } | undefined
  message?: string | undefined
  up?: boolean | undefined
  version?: string | undefined
}
type SubscriptionRequest = {
  subscription_key?: string | undefined
  subscription_type?: string | undefined
  subscription_value?: (string | null) | undefined
}
type SubscriptionUpdate = {
  active?: boolean | undefined
  subscription_value?: (string | null) | undefined
}
type AnchoreImageTagSummary = {
  analysis_status?: string | undefined
  analyzed_at?: number | undefined
  created_at?: number | undefined
  fulltag?: string | undefined
  imageDigest?: string | undefined
  imageId?: string | undefined
  image_status?: string | undefined
  parentDigest?: string | undefined
  tag_detected_at?: number | undefined
}
type AnchoreImageTagSummaryList = AnchoreImageTagSummary[]
type Service = {
  base_url?: string | undefined
  hostid?: string | undefined
  service_detail?: StatusResponse | undefined
  servicename?: string | undefined
  status?: boolean | undefined
  status_message?: string | undefined
  version?: string | undefined
}
type ServiceList = Service[]
type SystemStatusResponse = { service_states?: ServiceList | undefined }
type AnchoreErrorCode = { description?: string | undefined; name?: string | undefined }
type FeedGroupMetadata = {
  created_at?: string | undefined
  last_sync?: string | undefined
  name?: string | undefined
  record_count?: number | undefined
}
type FeedMetadata = {
  created_at?: string | undefined
  groups?: FeedGroupMetadata[] | undefined
  last_full_sync?: string | undefined
  name?: string | undefined
  updated_at?: string | undefined
}
type GroupSyncResult = {
  group?: string | undefined
  status?: 'success' | 'failure' | undefined
  total_time_seconds?: number | undefined
  updated_image_count?: number | undefined
  updated_record_count?: number | undefined
}
type FeedSyncResult = {
  feed?: string | undefined
  groups?: GroupSyncResult[] | undefined
  status?: 'success' | 'failure' | undefined
  total_time_seconds?: number | undefined
}
type FeedSyncResults = FeedSyncResult[]
type TriggerParamSpec = {
  description?: string | undefined
  example?: (string | null) | undefined
  name?: string | undefined
  required?: boolean | undefined
  state?: 'active' | 'deprecated' | 'eol' | undefined
  superceded_by?: (string | null) | undefined
  validator?: { [x: string]: unknown } | undefined
}
type TriggerSpec = {
  description?: string | undefined
  name?: string | undefined
  parameters?: TriggerParamSpec[] | undefined
  state?: 'active' | 'deprecated' | 'eol' | undefined
  superceded_by?: (string | null) | undefined
}
type GateSpec = {
  description?: string | undefined
  name?: string | undefined
  state?: 'active' | 'deprecated' | 'eol' | undefined
  superceded_by?: (string | null) | undefined
  triggers?: TriggerSpec[] | undefined
}
type ServiceVersion = {
  api?: { version?: string | undefined } | undefined
  db?: { schema_version?: string | undefined } | undefined
  service?: { version?: string | undefined } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: string; outputFormat: 'json'; status: 200 } } } & {
    '/account': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/accounts': {
      $get:
        | {
            input: { query: { state?: 'enabled' | 'disabled' | 'deleting' | undefined } }
            output: AccountList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { state?: 'enabled' | 'disabled' | 'deleting' | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AccountCreationRequest }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountCreationRequest }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: AccountCreationRequest }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:accountname': {
      $delete:
        | {
            input: { param: { accountname: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accountname: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { accountname: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountname: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:accountname/state': {
      $put:
        | {
            input: { param: { accountname: string } } & { json: AccountStatus }
            output: AccountStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountname: string } } & { json: AccountStatus }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountname: string } } & { json: AccountStatus }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:accountname/users': {
      $get:
        | {
            input: { param: { accountname: string } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountname: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post: {
        input: { param: { accountname: string } } & { json: UserCreationRequest }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountname/users/:username': {
      $delete:
        | {
            input: { param: { accountname: string; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accountname: string; username: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { accountname: string; username: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountname: string; username: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/:accountname/users/:username/credentials': {
      $delete:
        | {
            input: { param: { accountname: string; username: string } } & {
              query: { credential_type: 'password' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accountname: string; username: string } } & {
              query: { credential_type: 'password' }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accountname: string; username: string } } & {
              query: { credential_type: 'password' }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { accountname: string; username: string } }
            output: CredentialList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountname: string; username: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { accountname: string; username: string } } & { json: AccessCredential }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountname: string; username: string } } & { json: AccessCredential }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/archives': {
      $get:
        | { input: {}; output: ArchiveSummary; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/archives/images': {
      $get:
        | { input: {}; output: ArchivedAnalyses; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: ImageAnalysisReferences }
            output: AddAnalysisArchiveResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImageAnalysisReferences }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/archives/images/:imageDigest': {
      $delete:
        | {
            input: { param: { imageDigest: string } } & { query: { force?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & { query: { force?: boolean | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { imageDigest: string } }
            output: ArchivedAnalysis
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/archives/rules': {
      $get:
        | {
            input: { query: { system_global?: boolean | undefined } }
            output: AnalysisArchiveRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { system_global?: boolean | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AnalysisArchiveTransitionRule }
            output: AnalysisArchiveTransitionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnalysisArchiveTransitionRule }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/archives/rules/:ruleId': {
      $delete:
        | { input: { param: { ruleId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { ruleId: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { ruleId: string } }
            output: AnalysisArchiveTransitionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/event_types': {
      $get: { input: {}; output: EventTypesList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/events': {
      $delete:
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                level?: string | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                level?: string | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get: {
        input: {
          query: {
            source_servicename?: string | undefined
            source_hostid?: string | undefined
            event_type?: string | undefined
            resource_type?: string | undefined
            resource_id?: string | undefined
            level?: string | undefined
            since?: string | undefined
            before?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        } & { header: { 'x-anchore-account'?: string | undefined } }
        output: EventsList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/:eventId': {
      $delete: {
        input: { param: { eventId: string } } & {
          header: { 'x-anchore-account'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { eventId: string } } & {
          header: { 'x-anchore-account'?: string | undefined }
        }
        output: EventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/health': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/images': {
      $delete:
        | {
            input: { query: { imageDigests: string[]; force?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: DeleteImageResponseList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { imageDigests: string[]; force?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                history?: boolean | undefined
                fulltag?: string | undefined
                image_status?: 'all' | 'active' | 'deleting' | undefined
                analysis_status?:
                  | 'not_analyzed'
                  | 'analyzed'
                  | 'analyzing'
                  | 'analysis_failed'
                  | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: AnchoreImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                history?: boolean | undefined
                fulltag?: string | undefined
                image_status?: 'all' | 'active' | 'deleting' | undefined
                analysis_status?:
                  | 'not_analyzed'
                  | 'analyzed'
                  | 'analyzing'
                  | 'analysis_failed'
                  | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: { force?: boolean | undefined; autosubscribe?: boolean | undefined }
            } & { header: { 'x-anchore-account'?: string | undefined } } & {
              json: ImageAnalysisRequest
            }
            output: AnchoreImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { force?: boolean | undefined; autosubscribe?: boolean | undefined }
            } & { header: { 'x-anchore-account'?: string | undefined } } & {
              json: ImageAnalysisRequest
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId': {
      $delete:
        | {
            input: { param: { imageId: string } } & { query: { force?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: DeleteImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & { query: { force?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: AnchoreImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/check': {
      $get:
        | {
            input: { param: { imageId: string } } & {
              query: {
                policyId?: string | undefined
                tag: string
                detail?: boolean | undefined
                history?: boolean | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: PolicyEvaluationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & {
              query: {
                policyId?: string | undefined
                tag: string
                detail?: boolean | undefined
                history?: boolean | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/content': {
      $get:
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/content/files': {
      $get:
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/content/java': {
      $get:
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentJAVAPackageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/content/:ctype': {
      $get:
        | {
            input: { param: { imageId: string; ctype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentPackageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string; ctype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/vuln': {
      $get:
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ('all' | 'os' | 'non-os')[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/by_id/:imageId/vuln/:vtype': {
      $get:
        | {
            input: { param: { imageId: string; vtype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: VulnerabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string; vtype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest': {
      $delete: {
        input: { param: { imageDigest: string } } & { query: { force?: boolean | undefined } } & {
          header: { 'x-anchore-account'?: string | undefined }
        }
        output: DeleteImageResponse
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: AnchoreImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/artifacts/file_content_search': {
      $get:
        | {
            input: { param: { imageDigest: string } }
            output: FileContentSearchList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/images/:imageDigest/artifacts/retrieved_files': {
      $get:
        | {
            input: { param: { imageDigest: string } }
            output: RetrievedFileList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/images/:imageDigest/artifacts/secret_search': {
      $get:
        | {
            input: { param: { imageDigest: string } }
            output: SecretSearchList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/images/:imageDigest/check': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              query: {
                policyId?: string | undefined
                tag: string
                detail?: boolean | undefined
                history?: boolean | undefined
                interactive?: boolean | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: PolicyEvaluationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              query: {
                policyId?: string | undefined
                tag: string
                detail?: boolean | undefined
                history?: boolean | undefined
                interactive?: boolean | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/content': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/content/files': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/content/java': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentJAVAPackageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/content/malware': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentMalwareResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/content/:ctype': {
      $get:
        | {
            input: { param: { imageDigest: string; ctype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ContentPackageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string; ctype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/metadata': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/metadata/:mtype': {
      $get:
        | {
            input: { param: { imageDigest: string; mtype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: MetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string; mtype: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/sboms/native': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/vuln': {
      $get:
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ('all' | 'os' | 'non-os')[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/images/:imageDigest/vuln/:vtype': {
      $get:
        | {
            input: { param: { imageDigest: string; vtype: string } } & {
              query: { force_refresh?: boolean | undefined; vendor_only?: boolean | undefined }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: VulnerabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageDigest: string; vtype: string } } & {
              query: { force_refresh?: boolean | undefined; vendor_only?: boolean | undefined }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/import/images': {
      $post:
        | {
            input: { form: { archive_file: File } }
            output: AnchoreImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { archive_file: File } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/imports/images': {
      $get:
        | { input: {}; output: ImageImports; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: {}; output: ImageImportOperation; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/imports/images/:operation_id': {
      $delete:
        | {
            input: { param: { operation_id: string } }
            output: ImageImportOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { operation_id: string } }
            output: ImageImportOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/imports/images/:operation_id/dockerfile': {
      $get:
        | {
            input: { param: { operation_id: string } }
            output: ImportContentDigestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { operation_id: string } } & { json: string }
            output: ImageImportContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/imports/images/:operation_id/image_config': {
      $get:
        | {
            input: { param: { operation_id: string } }
            output: ImportContentDigestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { operation_id: string } } & { json: { [x: string]: unknown } }
            output: ImageImportContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/imports/images/:operation_id/manifest': {
      $get:
        | {
            input: { param: { operation_id: string } }
            output: ImportContentDigestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { operation_id: string } } & { json: { [x: string]: unknown } }
            output: ImageImportContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/imports/images/:operation_id/packages': {
      $get:
        | {
            input: { param: { operation_id: string } }
            output: ImportContentDigestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { operation_id: string } } & { json: ImagePackageManifest }
            output: ImageImportContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } } & { json: ImagePackageManifest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/imports/images/:operation_id/parent_manifest': {
      $get:
        | {
            input: { param: { operation_id: string } }
            output: ImportContentDigestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { operation_id: string } } & { json: { [x: string]: unknown } }
            output: ImageImportContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operation_id: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                grant_type?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                grant_type?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            }
            output: TokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                grant_type?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                grant_type?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/policies': {
      $get: {
        input: { query: { detail?: boolean | undefined } } & {
          header: { 'x-anchore-account'?: string | undefined }
        }
        output: PolicyBundleList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'x-anchore-account'?: string | undefined } } & { json: PolicyBundle }
            output: PolicyBundleRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-anchore-account'?: string | undefined } } & { json: PolicyBundle }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/policies/:policyId': {
      $delete:
        | {
            input: { param: { policyId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { policyId: string } } & { query: { detail?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: PolicyBundleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & { query: { detail?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { policyId: string } } & { query: { active?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            } & { json: PolicyBundleRecord }
            output: PolicyBundleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & { query: { active?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            } & { json: PolicyBundleRecord }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/query/images/by_package': {
      $get:
        | {
            input: {
              query: {
                name: string
                package_type?: string | undefined
                version?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: PaginatedImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                package_type?: string | undefined
                version?: string | undefined
                page?: string | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/query/images/by_vulnerability': {
      $get:
        | {
            input: {
              query: {
                vulnerability_id: string
                namespace?: string | undefined
                affected_package?: string | undefined
                severity?:
                  | 'Unknown'
                  | 'Negligible'
                  | 'Low'
                  | 'Medium'
                  | 'High'
                  | 'Critical'
                  | undefined
                vendor_only?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: PaginatedVulnerableImageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                vulnerability_id: string
                namespace?: string | undefined
                affected_package?: string | undefined
                severity?:
                  | 'Unknown'
                  | 'Negligible'
                  | 'Low'
                  | 'Medium'
                  | 'High'
                  | 'Critical'
                  | undefined
                vendor_only?: boolean | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/query/vulnerabilities': {
      $get:
        | {
            input: {
              query: {
                id: string[]
                affected_package?: string | undefined
                affected_package_version?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                namespace?: string[] | undefined
              }
            }
            output: PaginatedVulnerabilityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string[]
                affected_package?: string | undefined
                affected_package_version?: string | undefined
                page?: string | undefined
                limit?: number | undefined
                namespace?: string[] | undefined
              }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/registries': {
      $get: {
        input: { header: { 'x-anchore-account'?: string | undefined } }
        output: RegistryConfigurationList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { query: { validate?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            } & { json: RegistryConfigurationRequest }
            output: RegistryConfigurationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { validate?: boolean | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            } & { json: RegistryConfigurationRequest }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/registries/:registry': {
      $delete:
        | {
            input: { param: { registry: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { registry: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get: {
        input: { param: { registry: string } } & {
          header: { 'x-anchore-account'?: string | undefined }
        }
        output: RegistryConfigurationList
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { registry: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'x-anchore-account'?: string | undefined } } & {
              json: RegistryConfigurationRequest
            }
            output: RegistryConfigurationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { registry: string } } & {
              query: { validate?: boolean | undefined }
            } & { header: { 'x-anchore-account'?: string | undefined } } & {
              json: RegistryConfigurationRequest
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/repositories': {
      $post: {
        input: {
          query: {
            repository: string
            autosubscribe?: boolean | undefined
            dryrun?: boolean | undefined
          }
        } & { header: { 'x-anchore-account'?: string | undefined } }
        output: SubscriptionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/status': {
      $get:
        | { input: {}; output: StatusResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/subscriptions': {
      $get:
        | {
            input: {
              query: {
                subscription_key?: string | undefined
                subscription_type?: string | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: SubscriptionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                subscription_key?: string | undefined
                subscription_type?: string | undefined
              }
            } & { header: { 'x-anchore-account'?: string | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post: {
        input: { header: { 'x-anchore-account'?: string | undefined } } & {
          json: SubscriptionRequest
        }
        output: SubscriptionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscriptions/:subscriptionId': {
      $delete:
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: SubscriptionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put: {
        input: { param: { subscriptionId: string } } & {
          header: { 'x-anchore-account'?: string | undefined }
        } & { json: SubscriptionUpdate }
        output: SubscriptionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/summaries/imagetags': {
      $get:
        | {
            input: { query: { image_status?: ('all' | 'active' | 'deleting')[] | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: AnchoreImageTagSummaryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { image_status?: ('all' | 'active' | 'deleting')[] | undefined } } & {
              header: { 'x-anchore-account'?: string | undefined }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/system': {
      $get:
        | { input: {}; output: SystemStatusResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/system/error_codes': {
      $get: { input: {}; output: AnchoreErrorCode[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system/feeds': {
      $get:
        | { input: {}; output: FeedMetadata[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { query: { flush?: boolean | undefined; sync?: boolean | undefined } }
            output: FeedSyncResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { flush?: boolean | undefined; sync?: boolean | undefined } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/system/feeds/:feed': {
      $delete:
        | { input: { param: { feed: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { feed: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { feed: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { feed: string } } & { query: { enabled: boolean } }
            output: FeedMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: string } } & { query: { enabled: boolean } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: string } } & { query: { enabled: boolean } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/feeds/:feed/:group': {
      $delete:
        | {
            input: { param: { feed: string; group: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { feed: string; group: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: string; group: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { feed: string; group: string } } & { query: { enabled: boolean } }
            output: FeedMetadata[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: string; group: string } } & { query: { enabled: boolean } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: string; group: string } } & { query: { enabled: boolean } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/policy_spec': {
      $get: { input: {}; output: GateSpec[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system/services': {
      $get:
        | { input: {}; output: ServiceList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/system/services/:servicename': {
      $get:
        | {
            input: { param: { servicename: string } }
            output: ServiceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { servicename: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/system/services/:servicename/:hostid': {
      $delete:
        | {
            input: { param: { servicename: string; hostid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { servicename: string; hostid: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { servicename: string; hostid: string } }
            output: ServiceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { servicename: string; hostid: string } }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/system/webhooks/:webhook_type/test': {
      $post:
        | {
            input: { param: { webhook_type: string } } & {
              query: {
                notification_type?:
                  | 'tag_update'
                  | 'analysis_update'
                  | 'vuln_update'
                  | 'policy_eval'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { webhook_type: string } } & {
              query: {
                notification_type?:
                  | 'tag_update'
                  | 'analysis_update'
                  | 'vuln_update'
                  | 'policy_eval'
                  | undefined
              }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_type: string } } & {
              query: {
                notification_type?:
                  | 'tag_update'
                  | 'analysis_update'
                  | 'vuln_update'
                  | 'policy_eval'
                  | undefined
              }
            }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/credentials': {
      $get:
        | { input: {}; output: CredentialList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorResponse; outputFormat: 'json'; status: 500 }
      $post:
        | { input: { json: AccessCredential }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { json: AccessCredential }
            output: ApiErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/version': { $get: { input: {}; output: ServiceVersion; outputFormat: 'json'; status: 200 } }
  },
  '/'
>
export default routes
