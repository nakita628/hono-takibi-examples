type ConsentList = { consents?: string[] | undefined }
type CheckDataAccessRequest = {
  consentList?: ConsentList | undefined
  dataId?: string | undefined
  requestAttributes?: { [x: string]: string } | undefined
  responseView?: 'RESPONSE_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
}
type ConsentEvaluation = {
  evaluationResult?:
    | 'EVALUATION_RESULT_UNSPECIFIED'
    | 'NOT_APPLICABLE'
    | 'NO_MATCHING_POLICY'
    | 'NO_SATISFIED_POLICY'
    | 'HAS_SATISFIED_POLICY'
    | undefined
}
type CheckDataAccessResponse = {
  consentDetails?: { [x: string]: ConsentEvaluation } | undefined
  consented?: boolean | undefined
}
type EvaluateUserConsentsRequest = {
  consentList?: ConsentList | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  requestAttributes?: { [x: string]: string } | undefined
  resourceAttributes?: { [x: string]: string } | undefined
  responseView?: 'RESPONSE_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
  userId?: string | undefined
}
type Result = {
  consentDetails?: { [x: string]: ConsentEvaluation } | undefined
  consented?: boolean | undefined
  dataId?: string | undefined
}
type EvaluateUserConsentsResponse = {
  nextPageToken?: string | undefined
  results?: Result[] | undefined
}
type GoogleCloudHealthcareV1beta1ConsentGcsDestination = { uriPrefix?: string | undefined }
type QueryAccessibleDataRequest = {
  gcsDestination?: GoogleCloudHealthcareV1beta1ConsentGcsDestination | undefined
  requestAttributes?: { [x: string]: string } | undefined
  resourceAttributes?: { [x: string]: string } | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Empty = { [x: string]: unknown }
type Segment = {
  fields?: { [x: string]: string } | undefined
  segmentId?: string | undefined
  setId?: string | undefined
}
type ParsedData = { segments?: Segment[] | undefined }
type PatientId = { type?: string | undefined; value?: string | undefined }
type SchematizedData = { data?: string | undefined; error?: string | undefined }
type Message = {
  createTime?: string | undefined
  data?: string | undefined
  labels?: { [x: string]: string } | undefined
  messageType?: string | undefined
  name?: string | undefined
  parsedData?: ParsedData | undefined
  patientIds?: PatientId[] | undefined
  schematizedData?: SchematizedData | undefined
  sendFacility?: string | undefined
  sendTime?: string | undefined
}
type HttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type ActivateConsentRequest = {
  consentArtifact?: string | undefined
  expireTime?: string | undefined
  ttl?: string | undefined
}
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Attribute = { attributeDefinitionId?: string | undefined; values?: string[] | undefined }
type GoogleCloudHealthcareV1beta1ConsentPolicy = {
  authorizationRule?: Expr | undefined
  resourceAttributes?: Attribute[] | undefined
}
type Consent = {
  consentArtifact?: string | undefined
  expireTime?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  policies?: GoogleCloudHealthcareV1beta1ConsentPolicy[] | undefined
  revisionCreateTime?: string | undefined
  revisionId?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'ARCHIVED' | 'REVOKED' | 'DRAFT' | 'REJECTED' | undefined
  ttl?: string | undefined
  userId?: string | undefined
}
type ArchiveUserDataMappingRequest = { [x: string]: unknown }
type ArchiveUserDataMappingResponse = { [x: string]: unknown }
type CancelOperationRequest = { [x: string]: unknown }
type ConfigureSearchRequest = {
  canonicalUrls?: string[] | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination = {
  force?: boolean | undefined
  schemaType?: 'SCHEMA_TYPE_UNSPECIFIED' | 'SIMPLE' | undefined
  tableUri?: string | undefined
  writeDisposition?:
    | 'WRITE_DISPOSITION_UNSPECIFIED'
    | 'WRITE_EMPTY'
    | 'WRITE_TRUNCATE'
    | 'WRITE_APPEND'
    | undefined
}
type FilterList = { infoTypes?: string[] | undefined }
type InfoTypeConfig = {
  evaluateList?: FilterList | undefined
  ignoreList?: FilterList | undefined
  strictMatching?: boolean | undefined
}
type EvaluateAnnotationStoreRequest = {
  bigqueryDestination?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination | undefined
  evalInfoTypeMapping?: { [x: string]: string } | undefined
  goldenInfoTypeMapping?: { [x: string]: string } | undefined
  goldenStore?: string | undefined
  infoTypeConfig?: InfoTypeConfig | undefined
}
type GcsDestination = {
  contentStructure?: 'CONTENT_STRUCTURE_UNSPECIFIED' | 'MESSAGE_JSON' | undefined
  messageView?:
    | 'MESSAGE_VIEW_UNSPECIFIED'
    | 'RAW_ONLY'
    | 'PARSED_ONLY'
    | 'FULL'
    | 'SCHEMATIZED_ONLY'
    | 'BASIC'
    | undefined
  uriPrefix?: string | undefined
}
type ExportMessagesRequest = {
  endTime?: string | undefined
  gcsDestination?: GcsDestination | undefined
  startTime?: string | undefined
}
type FhirStoreMetric = {
  count?: string | undefined
  resourceType?: string | undefined
  structuredStorageSizeBytes?: string | undefined
}
type FhirStoreMetrics = { metrics?: FhirStoreMetric[] | undefined; name?: string | undefined }
type GcsSource = { uri?: string | undefined }
type ImportMessagesRequest = { gcsSource?: GcsSource | undefined }
type ListConsentRevisionsResponse = {
  consents?: Consent[] | undefined
  nextPageToken?: string | undefined
}
type RejectConsentRequest = { consentArtifact?: string | undefined }
type RevokeConsentRequest = { consentArtifact?: string | undefined }
type AnalyzeEntitiesRequest = {
  documentContent?: string | undefined
  licensedVocabularies?:
    | ('LICENSED_VOCABULARY_UNSPECIFIED' | 'ICD10CM' | 'SNOMEDCT_US')[]
    | undefined
}
type Entity = {
  entityId?: string | undefined
  preferredTerm?: string | undefined
  vocabularyCodes?: string[] | undefined
}
type Feature = { confidence?: number | undefined; value?: string | undefined }
type LinkedEntity = { entityId?: string | undefined }
type TextSpan = { beginOffset?: number | undefined; content?: string | undefined }
type EntityMention = {
  certaintyAssessment?: Feature | undefined
  confidence?: number | undefined
  linkedEntities?: LinkedEntity[] | undefined
  mentionId?: string | undefined
  subject?: Feature | undefined
  temporalAssessment?: Feature | undefined
  text?: TextSpan | undefined
  type?: string | undefined
}
type EntityMentionRelationship = {
  confidence?: number | undefined
  objectId?: string | undefined
  subjectId?: string | undefined
}
type AnalyzeEntitiesResponse = {
  entities?: Entity[] | undefined
  entityMentions?: EntityMention[] | undefined
  relationships?: EntityMentionRelationship[] | undefined
}
type AnnotationStore = { labels?: { [x: string]: string } | undefined; name?: string | undefined }
type ListAnnotationStoresResponse = {
  annotationStores?: AnnotationStore[] | undefined
  nextPageToken?: string | undefined
}
type CloudHealthcareSource = { name?: string | undefined }
type AnnotationSource = { cloudHealthcareSource?: CloudHealthcareSource | undefined }
type Vertex = { x?: number | undefined; y?: number | undefined }
type BoundingPoly = { label?: string | undefined; vertices?: Vertex[] | undefined }
type ImageAnnotation = {
  boundingPolys?: BoundingPoly[] | undefined
  frameIndex?: number | undefined
}
type ResourceAnnotation = { label?: string | undefined }
type Finding = {
  end?: string | undefined
  infoType?: string | undefined
  quote?: string | undefined
  start?: string | undefined
}
type Detail = { findings?: Finding[] | undefined }
type SensitiveTextAnnotation = { details?: { [x: string]: Detail } | undefined }
type Annotation = {
  annotationSource?: AnnotationSource | undefined
  customData?: { [x: string]: string } | undefined
  imageAnnotation?: ImageAnnotation | undefined
  name?: string | undefined
  resourceAnnotation?: ResourceAnnotation | undefined
  textAnnotation?: SensitiveTextAnnotation | undefined
}
type ListAnnotationsResponse = {
  annotations?: Annotation[] | undefined
  nextPageToken?: string | undefined
}
type AttributeDefinition = {
  allowedValues?: string[] | undefined
  category?: 'CATEGORY_UNSPECIFIED' | 'RESOURCE' | 'REQUEST' | undefined
  consentDefaultValues?: string[] | undefined
  dataMappingDefaultValue?: string | undefined
  description?: string | undefined
  name?: string | undefined
}
type ListAttributeDefinitionsResponse = {
  attributeDefinitions?: AttributeDefinition[] | undefined
  nextPageToken?: string | undefined
}
type Image = { gcsUri?: string | undefined; rawBytes?: string | undefined }
type Signature = {
  image?: Image | undefined
  metadata?: { [x: string]: string } | undefined
  signatureTime?: string | undefined
  userId?: string | undefined
}
type ConsentArtifact = {
  consentContentScreenshots?: Image[] | undefined
  consentContentVersion?: string | undefined
  guardianSignature?: Signature | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  userId?: string | undefined
  userSignature?: Signature | undefined
  witnessSignature?: Signature | undefined
}
type ListConsentArtifactsResponse = {
  consentArtifacts?: ConsentArtifact[] | undefined
  nextPageToken?: string | undefined
}
type ConsentStore = {
  defaultConsentTtl?: string | undefined
  enableConsentCreateOnUpdate?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
}
type ListConsentStoresResponse = {
  consentStores?: ConsentStore[] | undefined
  nextPageToken?: string | undefined
}
type ListConsentsResponse = { consents?: Consent[] | undefined; nextPageToken?: string | undefined }
type Dataset = { name?: string | undefined; timeZone?: string | undefined }
type ListDatasetsResponse = { datasets?: Dataset[] | undefined; nextPageToken?: string | undefined }
type NotificationConfig = {
  pubsubTopic?: string | undefined
  sendForBulkImport?: boolean | undefined
}
type GoogleCloudHealthcareV1beta1DicomBigQueryDestination = {
  force?: boolean | undefined
  tableUri?: string | undefined
  writeDisposition?:
    | 'WRITE_DISPOSITION_UNSPECIFIED'
    | 'WRITE_EMPTY'
    | 'WRITE_TRUNCATE'
    | 'WRITE_APPEND'
    | undefined
}
type GoogleCloudHealthcareV1beta1DicomStreamConfig = {
  bigqueryDestination?: GoogleCloudHealthcareV1beta1DicomBigQueryDestination | undefined
}
type DicomStore = {
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  notificationConfig?: NotificationConfig | undefined
  streamConfigs?: GoogleCloudHealthcareV1beta1DicomStreamConfig[] | undefined
}
type ListDicomStoresResponse = {
  dicomStores?: DicomStore[] | undefined
  nextPageToken?: string | undefined
}
type SearchResourcesRequest = { resourceType?: string | undefined }
type FhirNotificationConfig = {
  pubsubTopic?: string | undefined
  sendFullResource?: boolean | undefined
}
type SearchParameter = { canonicalUrl?: string | undefined; parameter?: string | undefined }
type SearchConfig = { searchParameters?: SearchParameter[] | undefined }
type TimePartitioning = {
  expirationMs?: string | undefined
  type?: 'PARTITION_TYPE_UNSPECIFIED' | 'HOUR' | 'DAY' | 'MONTH' | 'YEAR' | undefined
}
type SchemaConfig = {
  lastUpdatedPartitionConfig?: TimePartitioning | undefined
  recursiveStructureDepth?: string | undefined
  schemaType?: 'SCHEMA_TYPE_UNSPECIFIED' | 'LOSSLESS' | 'ANALYTICS' | 'ANALYTICS_V2' | undefined
}
type GoogleCloudHealthcareV1beta1FhirBigQueryDestination = {
  datasetUri?: string | undefined
  force?: boolean | undefined
  schemaConfig?: SchemaConfig | undefined
  writeDisposition?:
    | 'WRITE_DISPOSITION_UNSPECIFIED'
    | 'WRITE_EMPTY'
    | 'WRITE_TRUNCATE'
    | 'WRITE_APPEND'
    | undefined
}
type AnnotationConfig = {
  annotationStoreName?: string | undefined
  storeQuote?: boolean | undefined
}
type TagFilterList = { tags?: string[] | undefined }
type DicomConfig = {
  filterProfile?:
    | 'TAG_FILTER_PROFILE_UNSPECIFIED'
    | 'MINIMAL_KEEP_LIST_PROFILE'
    | 'ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE'
    | 'KEEP_ALL_PROFILE'
    | 'DEIDENTIFY_TAG_CONTENTS'
    | undefined
  keepList?: TagFilterList | undefined
  removeList?: TagFilterList | undefined
  skipIdRedaction?: boolean | undefined
}
type ImageConfig = {
  additionalInfoTypes?: string[] | undefined
  excludeInfoTypes?: string[] | undefined
  textRedactionMode?:
    | 'TEXT_REDACTION_MODE_UNSPECIFIED'
    | 'REDACT_ALL_TEXT'
    | 'REDACT_SENSITIVE_TEXT'
    | 'REDACT_NO_TEXT'
    | 'REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS'
    | undefined
}
type CleanTextTag = { [x: string]: unknown }
type DeleteTag = { [x: string]: unknown }
type KeepTag = { [x: string]: unknown }
type RecurseTag = { [x: string]: unknown }
type RegenUidTag = { [x: string]: unknown }
type RemoveTag = { [x: string]: unknown }
type ResetTag = { [x: string]: unknown }
type Action = {
  cleanImageTag?: ImageConfig | undefined
  cleanTextTag?: CleanTextTag | undefined
  deleteTag?: DeleteTag | undefined
  keepTag?: KeepTag | undefined
  queries?: string[] | undefined
  recurseTag?: RecurseTag | undefined
  regenUidTag?: RegenUidTag | undefined
  removeTag?: RemoveTag | undefined
  resetTag?: ResetTag | undefined
}
type CleanDescriptorsOption = { [x: string]: unknown }
type Options = {
  cleanDescriptors?: CleanDescriptorsOption | undefined
  cleanImage?: ImageConfig | undefined
  primaryIds?: 'PRIMARY_IDS_OPTION_UNSPECIFIED' | 'KEEP' | 'REGEN' | undefined
}
type DicomTagConfig = {
  actions?: Action[] | undefined
  options?: Options | undefined
  profileType?:
    | 'PROFILE_TYPE_UNSPECIFIED'
    | 'MINIMAL_KEEP_LIST_PROFILE'
    | 'ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE'
    | 'KEEP_ALL_PROFILE'
    | 'DEIDENTIFY_TAG_CONTENTS'
    | undefined
}
type FieldMetadata = {
  action?:
    | 'ACTION_UNSPECIFIED'
    | 'TRANSFORM'
    | 'INSPECT_AND_TRANSFORM'
    | 'DO_NOT_TRANSFORM'
    | undefined
  paths?: string[] | undefined
}
type FhirConfig = {
  defaultKeepExtensions?: boolean | undefined
  fieldMetadataList?: FieldMetadata[] | undefined
}
type CharacterMaskField = { [x: string]: unknown }
type CleanTextField = { [x: string]: unknown }
type CryptoHashField = { [x: string]: unknown }
type DateShiftField = { [x: string]: unknown }
type KeepField = { [x: string]: unknown }
type RemoveField = { [x: string]: unknown }
type GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata = {
  characterMaskField?: CharacterMaskField | undefined
  cleanTextField?: CleanTextField | undefined
  cryptoHashField?: CryptoHashField | undefined
  dateShiftField?: DateShiftField | undefined
  keepField?: KeepField | undefined
  paths?: string[] | undefined
  removeField?: RemoveField | undefined
}
type CharacterMaskConfig = { maskingCharacter?: string | undefined }
type ContextualDeidConfig = { [x: string]: unknown }
type KmsWrappedCryptoKey = { cryptoKey?: string | undefined; wrappedKey?: string | undefined }
type CryptoHashConfig = {
  cryptoKey?: string | undefined
  kmsWrapped?: KmsWrappedCryptoKey | undefined
}
type DateShiftConfig = {
  cryptoKey?: string | undefined
  kmsWrapped?: KmsWrappedCryptoKey | undefined
}
type KeepExtensionsConfig = { [x: string]: unknown }
type GoogleCloudHealthcareV1beta1DeidentifyOptions = {
  characterMaskConfig?: CharacterMaskConfig | undefined
  contextualDeid?: ContextualDeidConfig | undefined
  cryptoHashConfig?: CryptoHashConfig | undefined
  dateShiftConfig?: DateShiftConfig | undefined
  keepExtensions?: KeepExtensionsConfig | undefined
}
type FhirFieldConfig = {
  fieldMetadataList?: GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata[] | undefined
  options?: GoogleCloudHealthcareV1beta1DeidentifyOptions | undefined
  profileType?: 'PROFILE_TYPE_UNSPECIFIED' | 'KEEP_ALL' | 'BASIC' | 'CLEAN_ALL' | undefined
}
type FhirOutput = { fhirStore?: string | undefined }
type DeidentifyOperationMetadata = { fhirOutput?: FhirOutput | undefined }
type RedactConfig = { [x: string]: unknown }
type ReplaceWithInfoTypeConfig = { [x: string]: unknown }
type InfoTypeTransformation = {
  characterMaskConfig?: CharacterMaskConfig | undefined
  cryptoHashConfig?: CryptoHashConfig | undefined
  dateShiftConfig?: DateShiftConfig | undefined
  infoTypes?: string[] | undefined
  redactConfig?: RedactConfig | undefined
  replaceWithInfoTypeConfig?: ReplaceWithInfoTypeConfig | undefined
}
type TextConfig = {
  additionalTransformations?: InfoTypeTransformation[] | undefined
  excludeInfoTypes?: string[] | undefined
  profileType?: 'PROFILE_TYPE_UNSPECIFIED' | 'EMPTY' | 'BASIC' | undefined
  transformations?: InfoTypeTransformation[] | undefined
}
type DeidentifyConfig = {
  annotation?: AnnotationConfig | undefined
  dicom?: DicomConfig | undefined
  dicomTagConfig?: DicomTagConfig | undefined
  fhir?: FhirConfig | undefined
  fhirFieldConfig?: FhirFieldConfig | undefined
  image?: ImageConfig | undefined
  operationMetadata?: DeidentifyOperationMetadata | undefined
  text?: TextConfig | undefined
}
type DeidentifiedStoreDestination = {
  config?: DeidentifyConfig | undefined
  store?: string | undefined
}
type StreamConfig = {
  bigqueryDestination?: GoogleCloudHealthcareV1beta1FhirBigQueryDestination | undefined
  deidentifiedStoreDestination?: DeidentifiedStoreDestination | undefined
  resourceTypes?: string[] | undefined
}
type ValidationConfig = {
  disableFhirpathValidation?: boolean | undefined
  disableProfileValidation?: boolean | undefined
  disableReferenceTypeValidation?: boolean | undefined
  disableRequiredFieldValidation?: boolean | undefined
  enabledImplementationGuides?: string[] | undefined
}
type FhirStore = {
  complexDataTypeReferenceParsing?:
    | 'COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED'
    | 'DISABLED'
    | 'ENABLED'
    | undefined
  defaultSearchHandlingStrict?: boolean | undefined
  disableReferentialIntegrity?: boolean | undefined
  disableResourceVersioning?: boolean | undefined
  enableUpdateCreate?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  notificationConfig?: NotificationConfig | undefined
  notificationConfigs?: FhirNotificationConfig[] | undefined
  searchConfig?: SearchConfig | undefined
  streamConfigs?: StreamConfig[] | undefined
  validationConfig?: ValidationConfig | undefined
  version?: 'VERSION_UNSPECIFIED' | 'DSTU2' | 'STU3' | 'R4' | undefined
}
type ListFhirStoresResponse = {
  fhirStores?: FhirStore[] | undefined
  nextPageToken?: string | undefined
}
type Hl7V2NotificationConfig = { filter?: string | undefined; pubsubTopic?: string | undefined }
type SchemaSegment = {
  maxOccurs?: number | undefined
  minOccurs?: number | undefined
  type?: string | undefined
}
type GroupOrSegment = { group?: SchemaGroup | undefined; segment?: SchemaSegment | undefined }
type SchemaGroup = {
  choice?: boolean | undefined
  maxOccurs?: number | undefined
  members?: GroupOrSegment[] | undefined
  minOccurs?: number | undefined
  name?: string | undefined
}
type VersionSource = { mshField?: string | undefined; value?: string | undefined }
type Hl7SchemaConfig = {
  messageSchemaConfigs?: { [x: string]: SchemaGroup } | undefined
  version?: VersionSource[] | undefined
}
type Field = {
  maxOccurs?: number | undefined
  minOccurs?: number | undefined
  name?: string | undefined
  table?: string | undefined
  type?: string | undefined
}
type Type = {
  fields?: Field[] | undefined
  name?: string | undefined
  primitive?: 'PRIMITIVE_UNSPECIFIED' | 'STRING' | 'VARIES' | 'UNESCAPED_STRING' | undefined
}
type Hl7TypesConfig = { type?: Type[] | undefined; version?: VersionSource[] | undefined }
type SchemaPackage = {
  ignoreMinOccurs?: boolean | undefined
  schemas?: Hl7SchemaConfig[] | undefined
  schematizedParsingType?:
    | 'SCHEMATIZED_PARSING_TYPE_UNSPECIFIED'
    | 'SOFT_FAIL'
    | 'HARD_FAIL'
    | undefined
  types?: Hl7TypesConfig[] | undefined
  unexpectedSegmentHandling?:
    | 'UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED'
    | 'FAIL'
    | 'SKIP'
    | 'PARSE'
    | undefined
}
type ParserConfig = {
  allowNullHeader?: boolean | undefined
  schema?: SchemaPackage | undefined
  segmentTerminator?: string | undefined
  version?: 'PARSER_VERSION_UNSPECIFIED' | 'V1' | 'V2' | 'V3' | undefined
}
type Hl7V2Store = {
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  notificationConfig?: NotificationConfig | undefined
  notificationConfigs?: Hl7V2NotificationConfig[] | undefined
  parserConfig?: ParserConfig | undefined
  rejectDuplicateMessage?: boolean | undefined
}
type ListHl7V2StoresResponse = {
  hl7V2Stores?: Hl7V2Store[] | undefined
  nextPageToken?: string | undefined
}
type ListMessagesResponse = {
  hl7V2Messages?: Message[] | undefined
  nextPageToken?: string | undefined
}
type CreateMessageRequest = { message?: Message | undefined }
type BatchGetMessagesResponse = { messages?: Message[] | undefined }
type IngestMessageRequest = { message?: Message | undefined }
type IngestMessageResponse = { hl7Ack?: string | undefined; message?: Message | undefined }
type UserDataMapping = {
  archiveTime?: string | undefined
  archived?: boolean | undefined
  dataId?: string | undefined
  name?: string | undefined
  resourceAttributes?: Attribute[] | undefined
  userId?: string | undefined
}
type ListUserDataMappingsResponse = {
  nextPageToken?: string | undefined
  userDataMappings?: UserDataMapping[] | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
type DeidentifyDatasetRequest = {
  config?: DeidentifyConfig | undefined
  destinationDataset?: string | undefined
  gcsConfigUri?: string | undefined
}
type Resources = { resources?: string[] | undefined }
type FhirFilter = { resources?: Resources | undefined }
type DeidentifyFhirStoreRequest = {
  config?: DeidentifyConfig | undefined
  destinationStore?: string | undefined
  gcsConfigUri?: string | undefined
  resourceFilter?: FhirFilter | undefined
  skipModifiedResources?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:consentStore:checkDataAccess': {
      $post: {
        input: { param: { consentStore: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CheckDataAccessRequest }
        output: CheckDataAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:consentStore:evaluateUserConsents': {
      $post: {
        input: { param: { consentStore: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: EvaluateUserConsentsRequest }
        output: EvaluateUserConsentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:consentStore:queryAccessibleData': {
      $post: {
        input: { param: { consentStore: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: QueryAccessibleDataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?:
              | 'MESSAGE_VIEW_UNSPECIFIED'
              | 'RAW_ONLY'
              | 'PARSED_ONLY'
              | 'FULL'
              | 'SCHEMATIZED_ONLY'
              | 'BASIC'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Message }
        output: Message
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/$everything': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            _count?: number | undefined
            _page_token?: string | undefined
            _since?: string | undefined
            _type?: string | undefined
            end?: string | undefined
            start?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/$purge': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/$translate': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            code?: string | undefined
            conceptMapVersion?: string | undefined
            system?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/_history': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            _at?: string | undefined
            _count?: number | undefined
            _page_token?: string | undefined
            _since?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/fhir/metadata': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:activate': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ActivateConsentRequest }
        output: Consent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:archive': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ArchiveUserDataMappingRequest }
        output: ArchiveUserDataMappingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:configureSearch': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConfigureSearchRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:deleteRevision': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:evaluate': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: EvaluateAnnotationStoreRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:export': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ExportMessagesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:getFHIRStoreMetrics': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: FhirStoreMetrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:import': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ImportMessagesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:listRevisions': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListConsentRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:reject': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RejectConsentRequest }
        output: Consent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:revoke': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RevokeConsentRequest }
        output: Consent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:nlpService:analyzeEntities': {
      $post: {
        input: { param: { nlpService: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AnalyzeEntitiesRequest }
        output: AnalyzeEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/annotationStores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListAnnotationStoresResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            annotationStoreId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AnnotationStore }
        output: AnnotationStore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/annotations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'ANNOTATION_VIEW_UNSPECIFIED'
              | 'ANNOTATION_VIEW_BASIC'
              | 'ANNOTATION_VIEW_FULL'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListAnnotationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Annotation }
        output: Annotation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/attributeDefinitions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListAttributeDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            attributeDefinitionId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AttributeDefinition }
        output: AttributeDefinition
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consentArtifacts': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListConsentArtifactsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConsentArtifact }
        output: ConsentArtifact
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consentStores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListConsentStoresResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            consentStoreId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ConsentStore }
        output: ConsentStore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consents': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListConsentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Consent }
        output: Consent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/datasets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            datasetId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Dataset }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/dicomStores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDicomStoresResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dicomStoreId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DicomStore }
        output: DicomStore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/dicomWeb/:dicomWebPath': {
      $delete: {
        input: { param: { parent: string; dicomWebPath: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { parent: string; dicomWebPath: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string; dicomWebPath: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/$references': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            _count?: number | undefined
            _page_token?: string | undefined
            _summary?: string | undefined
            _type?: string | undefined
            target?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/ConceptMap/$translate': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            code?: string | undefined
            conceptMapVersion?: string | undefined
            source?: string | undefined
            system?: string | undefined
            target?: string | undefined
            url?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/Observation/$lastn': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/_search': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SearchResourcesRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/:resourceType/_search': {
      $post: {
        input: { param: { parent: string; resourceType: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SearchResourcesRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/:type': {
      $delete: {
        input: { param: { parent: string; type: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { parent: string; type: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string; type: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { parent: string; type: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhir/:type/$validate': {
      $post: {
        input: { param: { parent: string; type: string } } & {
          query: {
            profile?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpBody }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/fhirStores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListFhirStoresResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            fhirStoreId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: FhirStore }
        output: FhirStore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/hl7V2Stores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListHl7V2StoresResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            hl7V2StoreId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Hl7V2Store }
        output: Hl7V2Store
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/messages': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'MESSAGE_VIEW_UNSPECIFIED'
              | 'RAW_ONLY'
              | 'PARSED_ONLY'
              | 'FULL'
              | 'SCHEMATIZED_ONLY'
              | 'BASIC'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListMessagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CreateMessageRequest }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/messages:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            ids?: string[] | undefined
            view?:
              | 'MESSAGE_VIEW_UNSPECIFIED'
              | 'RAW_ONLY'
              | 'PARSED_ONLY'
              | 'FULL'
              | 'SCHEMATIZED_ONLY'
              | 'BASIC'
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BatchGetMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/messages:ingest': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: IngestMessageRequest }
        output: IngestMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/userDataMappings': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListUserDataMappingsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UserDataMapping }
        output: UserDataMapping
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:sourceDataset:deidentify': {
      $post: {
        input: { param: { sourceDataset: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DeidentifyDatasetRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:sourceStore:deidentify': {
      $post: {
        input: { param: { sourceStore: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DeidentifyFhirStoreRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
