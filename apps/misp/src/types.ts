type AnalystDataType = 'Note' | 'Opinion' | 'Relationship'
type UUID = string
type AnalystObjectType =
  | 'Attribute'
  | 'Event'
  | 'EventReport'
  | 'GalaxyCluster'
  | 'Galaxy'
  | 'Object'
  | 'Note'
  | 'Opinion'
  | 'Relationship'
  | 'Organisation'
  | 'SharingGroup'
type AnalystNoteNote = string
type AnalystNoteLanguage = string
type AnalystDataAuthors = string
type DistributionLevelId = '0' | '1' | '2' | '3' | '4' | '5'
type SharingGroupIntId = string | null
type SharingGroupUuidId = string | null
type SharingGroupId = SharingGroupIntId | SharingGroupUuidId
type IsLocked = boolean
type AnalystNote = {
  note?: AnalystNoteNote | undefined
  language?: AnalystNoteLanguage | undefined
  note_type_name?: 'Note' | undefined
  uuid?: UUID | undefined
  object_uuid?: UUID | undefined
  object_type?: AnalystObjectType | undefined
  authors?: AnalystDataAuthors | undefined
  org_uuid?: UUID | undefined
  orgc_uuid?: UUID | undefined
  created?: string | undefined
  modified?: string | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  locked?: IsLocked | undefined
}
type AnalystNoteOpinion = number
type AnalystOpinion = {
  comment?: AnalystNoteNote | undefined
  opinion?: AnalystNoteOpinion | undefined
  note_type_name?: 'Opinion' | undefined
  uuid?: UUID | undefined
  object_uuid?: UUID | undefined
  object_type?: AnalystObjectType | undefined
  authors?: AnalystDataAuthors | undefined
  org_uuid?: UUID | undefined
  orgc_uuid?: UUID | undefined
  created?: string | undefined
  modified?: string | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  locked?: IsLocked | undefined
}
type AnalystRelationship = {
  related_object_uuid?: UUID | undefined
  related_object_type?: AnalystObjectType | undefined
  relationship_type?: string | undefined
  note_type_name?: 'Relationship' | undefined
  uuid?: UUID | undefined
  object_uuid?: UUID | undefined
  object_type?: AnalystObjectType | undefined
  authors?: AnalystDataAuthors | undefined
  org_uuid?: UUID | undefined
  orgc_uuid?: UUID | undefined
  created?: string | undefined
  modified?: string | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  locked?: IsLocked | undefined
}
type UnauthorizedApiError = { name: string; message: string; url: string }
type ApiError = { name: string; message: string; url: string }
type AnalystDataID = string
type NotFoundApiError = { name: string; message: string; url: string }
type OrganisationName = string
type MinimalAnalystData = {
  Note?: { [x: string]: string } | undefined
  Opinion?: { [x: string]: string } | undefined
  Relationship?: { [x: string]: string } | undefined
}
type MinimalAnalystDataEmpty = { [x: string]: unknown }[]
type PageSearchFilter = number | null
type LimitSearchFilter = number | null
type AttributeValue = string
type AttributeType =
  | 'md5'
  | 'sha1'
  | 'sha256'
  | 'filename'
  | 'pdb'
  | 'filename|md5'
  | 'filename|sha1'
  | 'filename|sha256'
  | 'ip-src'
  | 'ip-dst'
  | 'hostname'
  | 'domain'
  | 'domain|ip'
  | 'email'
  | 'email-src'
  | 'eppn'
  | 'email-dst'
  | 'email-subject'
  | 'email-attachment'
  | 'email-body'
  | 'float'
  | 'git-commit-id'
  | 'url'
  | 'http-method'
  | 'user-agent'
  | 'ja3-fingerprint-md5'
  | 'jarm-fingerprint'
  | 'favicon-mmh3'
  | 'hassh-md5'
  | 'hasshserver-md5'
  | 'regkey'
  | 'regkey|value'
  | 'AS'
  | 'snort'
  | 'suricata'
  | 'bro'
  | 'zeek'
  | 'community-id'
  | 'pattern-in-file'
  | 'pattern-in-traffic'
  | 'pattern-in-memory'
  | 'pattern-filename'
  | 'pgp-public-key'
  | 'pgp-private-key'
  | 'yara'
  | 'stix2-pattern'
  | 'sigma'
  | 'gene'
  | 'kusto-query'
  | 'mime-type'
  | 'identity-card-number'
  | 'cookie'
  | 'vulnerability'
  | 'cpe'
  | 'weakness'
  | 'attachment'
  | 'malware-sample'
  | 'link'
  | 'comment'
  | 'text'
  | 'hex'
  | 'other'
  | 'named pipe'
  | 'mutex'
  | 'process-state'
  | 'target-user'
  | 'target-email'
  | 'target-machine'
  | 'target-org'
  | 'target-location'
  | 'target-external'
  | 'btc'
  | 'dash'
  | 'xmr'
  | 'iban'
  | 'bic'
  | 'bank-account-nr'
  | 'aba-rtn'
  | 'bin'
  | 'cc-number'
  | 'prtn'
  | 'phone-number'
  | 'threat-actor'
  | 'campaign-name'
  | 'campaign-id'
  | 'malware-type'
  | 'uri'
  | 'authentihash'
  | 'vhash'
  | 'ssdeep'
  | 'imphash'
  | 'telfhash'
  | 'pehash'
  | 'impfuzzy'
  | 'sha224'
  | 'sha384'
  | 'sha512'
  | 'sha512/224'
  | 'sha512/256'
  | 'sha3-224'
  | 'sha3-256'
  | 'sha3-384'
  | 'sha3-512'
  | 'tlsh'
  | 'cdhash'
  | 'filename|authentihash'
  | 'filename|vhash'
  | 'filename|ssdeep'
  | 'filename|imphash'
  | 'filename|impfuzzy'
  | 'filename|pehash'
  | 'filename|sha224'
  | 'filename|sha384'
  | 'filename|sha512'
  | 'filename|sha512/224'
  | 'filename|sha512/256'
  | 'filename|sha3-224'
  | 'filename|sha3-256'
  | 'filename|sha3-384'
  | 'filename|sha3-512'
  | 'filename|tlsh'
  | 'windows-scheduled-task'
  | 'windows-service-name'
  | 'windows-service-displayname'
  | 'whois-registrant-email'
  | 'whois-registrant-phone'
  | 'whois-registrant-name'
  | 'whois-registrant-org'
  | 'whois-registrar'
  | 'whois-creation-date'
  | 'x509-fingerprint-sha1'
  | 'x509-fingerprint-md5'
  | 'x509-fingerprint-sha256'
  | 'dns-soa-email'
  | 'size-in-bytes'
  | 'counter'
  | 'datetime'
  | 'port'
  | 'ip-dst|port'
  | 'ip-src|port'
  | 'hostname|port'
  | 'mac-address'
  | 'mac-eui-64'
  | 'email-dst-display-name'
  | 'email-src-display-name'
  | 'email-header'
  | 'email-reply-to'
  | 'email-x-mailer'
  | 'email-mime-boundary'
  | 'email-thread-index'
  | 'email-message-id'
  | 'github-username'
  | 'github-repository'
  | 'github-organisation'
  | 'jabber-id'
  | 'twitter-id'
  | 'dkim'
  | 'dkim-signature'
  | 'first-name'
  | 'middle-name'
  | 'last-name'
  | 'full-name'
  | 'date-of-birth'
  | 'place-of-birth'
  | 'gender'
  | 'passport-number'
  | 'passport-country'
  | 'passport-expiration'
  | 'redress-number'
  | 'nationality'
  | 'visa-number'
  | 'issue-date-of-the-visa'
  | 'primary-residence'
  | 'country-of-residence'
  | 'special-service-request'
  | 'frequent-flyer-number'
  | 'travel-details'
  | 'payment-details'
  | 'place-port-of-original-embarkation'
  | 'place-port-of-clearance'
  | 'place-port-of-onward-foreign-destination'
  | 'passenger-name-record-locator-number'
  | 'mobile-application-id'
  | 'chrome-extension-id'
  | 'edge-extension-id'
  | 'cortex'
  | 'boolean'
  | 'anonymised'
type AttributeCategory =
  | 'Internal reference'
  | 'Targeting data'
  | 'Antivirus detection'
  | 'Payload delivery'
  | 'Artifacts dropped'
  | 'Payload installation'
  | 'Persistence mechanism'
  | 'Network activity'
  | 'Payload type'
  | 'Attribution'
  | 'External analysis'
  | 'Financial fraud'
  | 'Support Tool'
  | 'Social network'
  | 'Person'
  | 'Other'
type OrganisationId = string
type TagsRestSearchFilter = string[] | null
type SearchAllRestSearchFilter = string
type DateRestSearchFilter = string | null
type LastRestSearchFilter = number | string
type EventId = string
type WithAttachmentsRestSearchFilter = boolean
type Timestamp = string
type PublishedFlag = boolean
type EnforceWarninglistRestSearchFilter = boolean | null
type ToIDSRestSearchFlag = boolean | null
type SoftDeletedFlagValuesToInclude = boolean
type ThreatLevelId = '1' | '2' | '3' | '4'
type SharingGroupIDRestSearchFilter = { [x: string]: unknown } | null
type DecayingModelRestSearchFilter = string
type DecayingModelScoreRestSearchFilter = string
type IncludeEventUUIDRestSearchFlag = boolean
type IncludeEventTagsRestSearchFlag = boolean
type IncludeProposalsRestSearchFlag = boolean
type RequestedAttributesRestSearchFilter = string[]
type IncludeContextRestSearchFlag = boolean | null
type HeaderlessRestSearchFlag = boolean | null
type IncludeWarninglistHitsRestSearchFlag = boolean | null
type AttackGalaxyRestSearchFilter = string | null
type ObjectRelationRestSearchFilter = string | null
type IncludeSightingDbRestSearchFlag = boolean | null
type IncludeCorrelationsRestSearchFlag = boolean | null
type DecayingModelParameters = {
  lifetime?: number | undefined
  decay_speed?: number | undefined
  threshold?: number | undefined
  default_base_score?: number | undefined
  base_score_config?: { [x: string]: unknown } | undefined
}
type IncludeDecayScoreRestSearchFlag = boolean
type IncludeFullModelRestSearchFlag = boolean
type ExcludeDecayedRestSearchFlag = boolean
type AttributesRestSearchReturnFormat =
  | 'json'
  | 'xml'
  | 'csv'
  | 'text'
  | 'stix'
  | 'stix2'
  | 'stix-json'
  | 'hashes'
  | 'cache'
  | 'count'
  | 'netfilter'
  | 'opendata'
  | 'openioc'
  | 'rpz'
  | 'snort'
  | 'suricata'
  | 'text'
  | 'yara'
  | 'yara-json'
type AttributeRestSearchFilter = {
  page?: PageSearchFilter | undefined
  limit?: LimitSearchFilter | undefined
  value?: AttributeValue | undefined
  value1?: AttributeValue | undefined
  value2?: AttributeValue | undefined
  type?: AttributeType | undefined
  category?: AttributeCategory | undefined
  org?: OrganisationId | OrganisationName | undefined
  tags?: TagsRestSearchFilter | undefined
  searchall?: SearchAllRestSearchFilter | undefined
  from?: DateRestSearchFilter | undefined
  to?: DateRestSearchFilter | undefined
  last?: LastRestSearchFilter | undefined
  eventid?: EventId | undefined
  withAttachments?: WithAttachmentsRestSearchFilter | undefined
  uuid?: UUID | undefined
  publish_timestamp?: Timestamp | undefined
  published?: PublishedFlag | undefined
  timestamp?: Timestamp | undefined
  attribute_timestamp?: Timestamp | undefined
  enforceWarninglist?: EnforceWarninglistRestSearchFilter | undefined
  to_ids?: ToIDSRestSearchFlag | undefined
  deleted?: SoftDeletedFlagValuesToInclude | undefined
  event_timestamp?: Timestamp | undefined
  threat_level_id?: ThreatLevelId | undefined
  eventinfo?: string | undefined
  sharinggroup?: SharingGroupIDRestSearchFilter | undefined
  decayingModel?: DecayingModelRestSearchFilter | undefined
  score?: DecayingModelScoreRestSearchFilter | undefined
  first_seen?: string | undefined
  last_seen?: string | undefined
  includeEventUuid?: IncludeEventUUIDRestSearchFlag | undefined
  includeEventTags?: IncludeEventTagsRestSearchFlag | undefined
  includeProposals?: IncludeProposalsRestSearchFlag | undefined
  requested_attributes?: RequestedAttributesRestSearchFilter | undefined
  includeContext?: IncludeContextRestSearchFlag | undefined
  headerless?: HeaderlessRestSearchFlag | undefined
  includeWarninglistHits?: IncludeWarninglistHitsRestSearchFlag | undefined
  attackGalaxy?: AttackGalaxyRestSearchFilter | undefined
  object_relation?: ObjectRelationRestSearchFilter | undefined
  includeSightings?: IncludeSightingDbRestSearchFlag | undefined
  includeCorrelations?: IncludeCorrelationsRestSearchFlag | undefined
  modelOverrides?: DecayingModelParameters | undefined
  includeDecayScore?: IncludeDecayScoreRestSearchFlag | undefined
  includeFullModel?: IncludeFullModelRestSearchFlag | undefined
  excludeDecayed?: ExcludeDecayedRestSearchFlag | undefined
  returnFormat?: AttributesRestSearchReturnFormat | undefined
}
type AttributeId = string
type ObjectId = string
type NullableObjectRelation = string | null
type ToIDS = boolean
type NullableTimestamp = string | null
type AttributeComment = string
type SoftDeletedFlag = boolean
type DisableCorrelationFlag = boolean
type NullableMicroTimestamp = string | null
type TagId = string
type TagName = string
type TagColour = string
type IsExportable = boolean
type UserId = string
type HideTagFlag = boolean
type TagNumericalValue = string | null
type IsGalaxy = boolean
type IsCustomGalaxy = boolean
type IsInherited = number
type Tag = {
  id?: TagId | undefined
  name?: TagName | undefined
  colour?: TagColour | undefined
  exportable?: IsExportable | undefined
  org_id?: OrganisationId | undefined
  user_id?: UserId | undefined
  hide_tag?: HideTagFlag | undefined
  numerical_value?: TagNumericalValue | undefined
  is_galaxy?: IsGalaxy | undefined
  is_custom_galaxy?: IsCustomGalaxy | undefined
  inherited?: IsInherited | undefined
}
type GalaxyId = string
type GalaxyName = string
type GalaxyType = string
type GalaxyDescription = string
type GalaxyVersion = string
type Icon = string
type GalaxyNamespace = string
type Galaxy = {
  id?: GalaxyId | undefined
  uuid?: UUID | undefined
  name?: GalaxyName | undefined
  type?: GalaxyType | undefined
  description?: GalaxyDescription | undefined
  version?: GalaxyVersion | undefined
  icon?: Icon | undefined
  namespace?: GalaxyNamespace | undefined
  kill_chain_order?: ({ [x: string]: unknown } | null) | undefined
}
type AttributeAttachment = string
type DecayingModel = { id?: string | undefined; name?: string | undefined }
type FullDecayingModel = {
  id?: string | undefined
  uuid?: UUID | undefined
  name?: string | undefined
  description?: string | undefined
  parameters?: DecayingModelParameters | undefined
  attribute_types?: AttributeType[] | undefined
  org_id?: OrganisationId | undefined
  enabled?: boolean | undefined
  all_orgs?: boolean | undefined
  ref?: string[] | undefined
  formula?: 'Polynomial' | undefined
  version?: string | undefined
  default?: boolean | undefined
  isEditable?: boolean | undefined
}
type DecayScore = {
  score?: number | undefined
  base_score?: number | undefined
  decayed?: boolean | undefined
  DecayingModel?: DecayingModel | FullDecayingModel | undefined
}
type DecayScoreList = DecayScore[]
type EventInfo = string
type AnalysisLevelId = '0' | '1' | '2'
type EventAttributeCount = string
type EventProposalEmailLock = boolean
type ExtendsUUID = string | null
type Event = {
  id?: EventId | undefined
  org_id?: OrganisationId | undefined
  distribution?: DistributionLevelId | undefined
  info?: EventInfo | undefined
  orgc_id?: OrganisationId | undefined
  uuid?: UUID | undefined
  date?: string | undefined
  published?: PublishedFlag | undefined
  analysis?: AnalysisLevelId | undefined
  attribute_count?: EventAttributeCount | undefined
  timestamp?: NullableTimestamp | undefined
  sharing_group_id?: SharingGroupId | undefined
  proposal_email_lock?: EventProposalEmailLock | undefined
  locked?: IsLocked | undefined
  threat_level_id?: ThreatLevelId | undefined
  publish_timestamp?: Timestamp | undefined
  sighting_timestamp?: Timestamp | undefined
  disable_correlation?: DisableCorrelationFlag | undefined
  extends_uuid?: ExtendsUUID | undefined
  event_creator_email?: string | undefined
}
type ObjectName = string
type ObjectMetaCategory = string
type ObjectDescription = string
type ObjectTemplateVersion = string
type Attribute = {
  id?: AttributeId | undefined
  event_id?: EventId | undefined
  object_id?: ObjectId | undefined
  object_relation?: NullableObjectRelation | undefined
  category?: AttributeCategory | undefined
  type?: AttributeType | undefined
  value?: AttributeValue | undefined
  to_ids?: ToIDS | undefined
  uuid?: UUID | undefined
  timestamp?: NullableTimestamp | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  comment?: AttributeComment | undefined
  deleted?: SoftDeletedFlag | undefined
  disable_correlation?: DisableCorrelationFlag | undefined
  first_seen?: NullableMicroTimestamp | string | undefined
  last_seen?: NullableMicroTimestamp | string | undefined
  Tag?: Tag[] | undefined
  Galaxy?: Galaxy[] | undefined
}
type Object = {
  id?: ObjectId | undefined
  name?: ObjectName | undefined
  'meta-category'?: ObjectMetaCategory | undefined
  description?: ObjectDescription | undefined
  template_uuid?: UUID | undefined
  template_version?: ObjectTemplateVersion | undefined
  event_id?: EventId | undefined
  uuid?: UUID | undefined
  timestamp?: Timestamp | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  comment?: string | undefined
  deleted?: boolean | undefined
  first_seen?: NullableMicroTimestamp | string | undefined
  last_seen?: NullableMicroTimestamp | string | undefined
  Attribute?: Attribute[] | undefined
}
type TagList = Tag[]
type AttributeRestSearchListItem = {
  id?: AttributeId | undefined
  event_id?: EventId | undefined
  object_id?: ObjectId | undefined
  object_relation?: NullableObjectRelation | undefined
  category?: AttributeCategory | undefined
  type?: AttributeType | undefined
  value?: AttributeValue | undefined
  to_ids?: ToIDS | undefined
  uuid?: UUID | undefined
  timestamp?: NullableTimestamp | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  comment?: AttributeComment | undefined
  deleted?: SoftDeletedFlag | undefined
  disable_correlation?: DisableCorrelationFlag | undefined
  first_seen?: NullableMicroTimestamp | string | undefined
  last_seen?: NullableMicroTimestamp | string | undefined
  Tag?: TagList | undefined
  Galaxy?: Galaxy[] | undefined
  data?: AttributeAttachment | undefined
  event_uuid?: UUID | undefined
  decay_score?: DecayScoreList | undefined
  Event?: Event | undefined
  Object?: Object | undefined
}
type AttributeRestSearchList = AttributeRestSearchListItem[]
type AttributeNoId = {
  event_id?: EventId | undefined
  object_id?: ObjectId | undefined
  object_relation?: NullableObjectRelation | undefined
  category?: AttributeCategory | undefined
  type?: AttributeType | undefined
  value?: AttributeValue | undefined
  to_ids?: ToIDS | undefined
  uuid?: UUID | undefined
  timestamp?: NullableTimestamp | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  comment?: AttributeComment | undefined
  deleted?: SoftDeletedFlag | undefined
  disable_correlation?: DisableCorrelationFlag | undefined
  first_seen?: NullableMicroTimestamp | string | undefined
  last_seen?: NullableMicroTimestamp | string | undefined
  Tag?: Tag[] | undefined
  Galaxy?: Galaxy[] | undefined
}
type AttributeList = Attribute[]
type AttributeStatisticsResponse = { [x: string]: unknown }
type DescribeAttributeTypesResponse = {
  sane_defaults?: { [x: string]: unknown } | undefined
  types?: AttributeType[] | undefined
  categories?: AttributeCategory[] | undefined
  category_type_mappings?: { [x: string]: unknown } | undefined
}
type EnrichModulesList = {
  reversedns?: boolean | undefined
  sigma_syntax_validator?: boolean | undefined
  ods_enrich?: boolean | undefined
  recordedfuture?: boolean | undefined
  eupi?: boolean | undefined
  docx_enrich?: boolean | undefined
  passivetotal?: boolean | undefined
  abuseipdb?: boolean | undefined
  ransomcoindb?: boolean | undefined
  domaintools?: boolean | undefined
  crowdstrike_falcon?: boolean | undefined
  google_safe_browsing?: boolean | undefined
  geoip_country?: boolean | undefined
  joesandbox_query?: boolean | undefined
  crowdsec?: boolean | undefined
  geoip_asn?: boolean | undefined
  rbl?: boolean | undefined
  yeti?: boolean | undefined
  ocr_enrich?: boolean | undefined
  onyphe?: boolean | undefined
  odt_enrich?: boolean | undefined
  socialscan?: boolean | undefined
  sophoslabs_intelix?: boolean | undefined
  mmdb_lookup?: boolean | undefined
  vmray_submit?: boolean | undefined
  trustar_enrich?: boolean | undefined
  ipinfo?: boolean | undefined
  backscatter_io?: boolean | undefined
  ipasn?: boolean | undefined
  urlscan?: boolean | undefined
  threatcrowd?: boolean | undefined
  html_to_markdown?: boolean | undefined
  yara_query?: boolean | undefined
  sigma_queries?: boolean | undefined
  xforceexchange?: boolean | undefined
  whois?: boolean | undefined
  pdf_enrich?: boolean | undefined
  threatfox?: boolean | undefined
  clamav?: boolean | undefined
  vmware_nsx?: boolean | undefined
  'sigmf-expand'?: boolean | undefined
  urlhaus?: boolean | undefined
  stix2_pattern_syntax_validator?: boolean | undefined
  censys_enrich?: boolean | undefined
  variotdbs?: boolean | undefined
  joesandbox_submit?: boolean | undefined
  virustotal_public?: boolean | undefined
  macaddress_io?: boolean | undefined
  mcafee_insights_enrich?: boolean | undefined
  countrycode?: boolean | undefined
  shodan?: boolean | undefined
  dnsdb_query?: boolean | undefined
  greynoise?: boolean | undefined
  xlsx_enrich?: boolean | undefined
  lastline_submit?: boolean | undefined
  assemblyline_submit?: boolean | undefined
  hashlookup?: boolean | undefined
  apivoid?: boolean | undefined
  lastline_query?: boolean | undefined
  eql?: boolean | undefined
  cuckoo_submit?: boolean | undefined
  hyasinsight?: boolean | undefined
  assemblyline_query?: boolean | undefined
  circl_passivedns?: boolean | undefined
  securitytrails?: boolean | undefined
  hashdd?: boolean | undefined
  geoip_city?: boolean | undefined
  qrcode?: boolean | undefined
  sourcecache?: boolean | undefined
  threatminer?: boolean | undefined
  cytomic_orion?: boolean | undefined
  iprep?: boolean | undefined
  qintel_qsentry?: boolean | undefined
  wiki?: boolean | undefined
  cve?: boolean | undefined
  btc_scam_check?: boolean | undefined
  whoisfreaks?: boolean | undefined
  google_search?: boolean | undefined
  malwarebazaar?: boolean | undefined
  intel471?: boolean | undefined
  btc_steroids?: boolean | undefined
  mwdb?: boolean | undefined
  dbl_spamhaus?: boolean | undefined
  onyphe_full?: boolean | undefined
  ipqs_fraud_and_risk_scoring?: boolean | undefined
  farsight_passivedns?: boolean | undefined
  cve_advanced?: boolean | undefined
  cpe?: boolean | undefined
  'passive-ssh'?: boolean | undefined
  vulners?: boolean | undefined
  yara_syntax_validator?: boolean | undefined
  jinja_template_rendering?: boolean | undefined
  virustotal?: boolean | undefined
  macvendors?: boolean | undefined
  vulndb?: boolean | undefined
  circl_passivessl?: boolean | undefined
  dns?: boolean | undefined
  otx?: boolean | undefined
  bgpranking?: boolean | undefined
  extract_url_components?: boolean | undefined
  'intelmq_eventdb.experimental'?: boolean | undefined
  apiosintds?: boolean | undefined
  pptx_enrich?: boolean | undefined
  hibp?: boolean | undefined
}
type CollectionType = 'campaign' | 'intrusion_set' | 'named_threat' | 'other' | 'research'
type CollectionDescription = string
type CollectionId = string
type CollectionAddEdit = {
  id?: CollectionId | undefined
  org_id?: OrganisationId | undefined
  orgc_id?: OrganisationId | undefined
  uuid?: UUID | undefined
  created?: string | undefined
  modified?: string | undefined
  user_id?: UserId | undefined
  type?: CollectionType | undefined
  name?: string | undefined
  description?: CollectionDescription | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
}
type BaseCollection = {
  type?: CollectionType | undefined
  name?: string | undefined
  description?: CollectionDescription | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
}
type ModelId = string
type CollectionElementId = string
type CollectionElementDescription = string
type CollectionElement = {
  id?: CollectionElementId | undefined
  uuid?: UUID | undefined
  collection_id?: CollectionId | undefined
  element_uuid?: UUID | undefined
  element_type?: 'Event' | 'GalaxyCluster' | undefined
  description?: CollectionElementDescription | undefined
}
type CollectionElementList = CollectionElement[]
type EventOrganisation = {
  id?: OrganisationId | undefined
  name?: OrganisationName | undefined
  uuid?: UUID | undefined
}
type CollectionFull = {
  CollectionElement?: CollectionElementList | undefined
  id?: CollectionId | undefined
  org_id?: OrganisationId | undefined
  orgc_id?: OrganisationId | undefined
  uuid?: UUID | undefined
  created?: string | undefined
  modified?: string | undefined
  Org?: EventOrganisation | undefined
  Orgc?: EventOrganisation | undefined
  type?: CollectionType | undefined
  name?: string | undefined
  description?: CollectionDescription | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
}
type CollectionFullNoElements = {
  id?: CollectionId | undefined
  org_id?: OrganisationId | undefined
  orgc_id?: OrganisationId | undefined
  uuid?: UUID | undefined
  created?: string | undefined
  modified?: string | undefined
  Org?: EventOrganisation | undefined
  Orgc?: EventOrganisation | undefined
  type?: CollectionType | undefined
  name?: string | undefined
  description?: CollectionDescription | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
}
type EventReportId = string
type EventReportName = string
type EventReportValue = string
type EventReport = {
  id?: EventReportId | undefined
  uuid?: UUID | undefined
  event_id?: EventId | undefined
  name?: EventReportName | undefined
  content?: EventReportValue | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  timestamp?: NullableTimestamp | undefined
  deleted?: SoftDeletedFlag | undefined
}
type EventReportNoId = {
  uuid?: UUID | undefined
  event_id?: EventId | undefined
  name?: EventReportName | undefined
  content?: EventReportValue | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  timestamp?: NullableTimestamp | undefined
  deleted?: SoftDeletedFlag | undefined
}
type MetadataRestSearchFilter = boolean | null
type ExcludeLocalTagsRestSearchFilter = boolean | null
type ExtendingRestSearchFlag = boolean
type ExtendedRestSearchFlag = boolean
type EventsRestSearchReturnFormat =
  | 'json'
  | 'xml'
  | 'csv'
  | 'text'
  | 'stix'
  | 'stix2'
  | 'stix-json'
  | 'attack'
  | 'attack-sightings'
  | 'cache'
  | 'count'
  | 'hashes'
  | 'netfilter'
  | 'opendata'
  | 'openioc'
  | 'rpz'
  | 'snort'
  | 'suricata'
  | 'yara'
  | 'yara-json'
type FeedId = string
type FeedName = string
type FeedProvider = string
type FeedUrl = string
type FeedRules = string | null
type FeedEnabledFlag = boolean
type IsDefault = boolean
type FeedSourceFormat = '1' | 'csv' | 'freetext' | 'misp'
type FeedFixedEvent = boolean
type FeedDeltaMergeFlag = boolean
type FeedOverrideIDSFlag = boolean
type FeedSettings = string | null
type FeedInputSource = 'local' | 'network'
type FeedDeleteLocalFileFlag = boolean
type FeedLookupVisibleFlag = boolean
type FeedHeaders = string | null
type FeedCachingEnabledFlag = boolean
type FeedForceToIDSFlag = boolean
type FeedCacheTimestamp = Timestamp | boolean
type Feed = {
  id?: FeedId | undefined
  name?: FeedName | undefined
  provider?: FeedProvider | undefined
  url?: FeedUrl | undefined
  rules?: FeedRules | undefined
  enabled?: FeedEnabledFlag | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  tag_id?: TagId | undefined
  default?: IsDefault | undefined
  source_format?: FeedSourceFormat | undefined
  fixed_event?: FeedFixedEvent | undefined
  delta_merge?: FeedDeltaMergeFlag | undefined
  event_id?: EventId | undefined
  publish?: PublishedFlag | undefined
  override_ids?: FeedOverrideIDSFlag | undefined
  settings?: FeedSettings | undefined
  input_source?: FeedInputSource | undefined
  delete_local_file?: FeedDeleteLocalFileFlag | undefined
  lookup_visible?: FeedLookupVisibleFlag | undefined
  headers?: FeedHeaders | undefined
  caching_enabled?: FeedCachingEnabledFlag | undefined
  force_to_ids?: FeedForceToIDSFlag | undefined
  orgc_id?: OrganisationId | undefined
  cache_timestamp?: FeedCacheTimestamp | undefined
}
type ExtendedEvent = {
  id?: EventId | undefined
  org_id?: OrganisationId | undefined
  distribution?: DistributionLevelId | undefined
  info?: EventInfo | undefined
  orgc_id?: OrganisationId | undefined
  uuid?: UUID | undefined
  date?: string | undefined
  published?: PublishedFlag | undefined
  analysis?: AnalysisLevelId | undefined
  attribute_count?: EventAttributeCount | undefined
  timestamp?: NullableTimestamp | undefined
  sharing_group_id?: SharingGroupId | undefined
  proposal_email_lock?: EventProposalEmailLock | undefined
  locked?: IsLocked | undefined
  threat_level_id?: ThreatLevelId | undefined
  publish_timestamp?: Timestamp | undefined
  sighting_timestamp?: Timestamp | undefined
  disable_correlation?: DisableCorrelationFlag | undefined
  extends_uuid?: ExtendsUUID | undefined
  event_creator_email?: string | undefined
  Feed?: Feed | undefined
  Org?: EventOrganisation | undefined
  Orgc?: EventOrganisation | undefined
  Attribute?: AttributeList | undefined
  ShadowAttribute?: AttributeList | undefined
  RelatedEvent?: { Event?: ExtendedEvent | undefined }[] | undefined
  Galaxy?: Galaxy[] | undefined
  Object?: Object[] | undefined
  EventReport?: EventReport[] | undefined
  Tag?: TagList | undefined
}
type EventRestSearchList = {
  Event?:
    | {
        id: EventId
        org_id?: OrganisationId | undefined
        distribution?: DistributionLevelId | undefined
        info?: EventInfo | undefined
        orgc_id?: OrganisationId | undefined
        uuid: UUID
        date?: string | undefined
        published: PublishedFlag
        analysis?: AnalysisLevelId | undefined
        attribute_count?: EventAttributeCount | undefined
        timestamp: Timestamp
        sharing_group_id?: SharingGroupId | undefined
        proposal_email_lock?: EventProposalEmailLock | undefined
        locked?: IsLocked | undefined
        threat_level_id?: ThreatLevelId | undefined
        publish_timestamp?: Timestamp | undefined
        sighting_timestamp: Timestamp
        disable_correlation?: DisableCorrelationFlag | undefined
        extends_uuid?: ExtendsUUID | undefined
        event_creator_email?: string | undefined
        Feed?: Feed | undefined
        Org?: EventOrganisation | undefined
        Orgc?: EventOrganisation | undefined
        Attribute?: AttributeList | undefined
        ShadowAttribute?: AttributeList | undefined
        RelatedEvent?: { Event?: ExtendedEvent | undefined }[] | undefined
        Galaxy?: Galaxy[] | undefined
        Object?: Object[] | undefined
        EventReport?: EventReport[] | undefined
        Tag?: TagList | undefined
        orgc_uuid?: UUID | undefined
      }
    | undefined
}[]
type EventNoId = {
  org_id?: OrganisationId | undefined
  distribution?: DistributionLevelId | undefined
  info?: EventInfo | undefined
  orgc_id?: OrganisationId | undefined
  uuid?: UUID | undefined
  date?: string | undefined
  published?: PublishedFlag | undefined
  analysis?: AnalysisLevelId | undefined
  attribute_count?: EventAttributeCount | undefined
  timestamp?: NullableTimestamp | undefined
  sharing_group_id?: SharingGroupId | undefined
  proposal_email_lock?: EventProposalEmailLock | undefined
  locked?: IsLocked | undefined
  threat_level_id?: ThreatLevelId | undefined
  publish_timestamp?: Timestamp | undefined
  sighting_timestamp?: Timestamp | undefined
  disable_correlation?: DisableCorrelationFlag | undefined
  extends_uuid?: ExtendsUUID | undefined
  event_creator_email?: string | undefined
}
type EditedEvent = {
  Event?:
    | {
        id?: EventId | undefined
        org_id?: OrganisationId | undefined
        distribution?: DistributionLevelId | undefined
        info?: EventInfo | undefined
        orgc_id?: OrganisationId | undefined
        uuid?: UUID | undefined
        date?: string | undefined
        published?: PublishedFlag | undefined
        analysis?: AnalysisLevelId | undefined
        attribute_count?: EventAttributeCount | undefined
        timestamp?: NullableTimestamp | undefined
        sharing_group_id?: SharingGroupId | undefined
        proposal_email_lock?: EventProposalEmailLock | undefined
        locked?: IsLocked | undefined
        threat_level_id?: ThreatLevelId | undefined
        publish_timestamp?: Timestamp | undefined
        sighting_timestamp?: Timestamp | undefined
        disable_correlation?: DisableCorrelationFlag | undefined
        extends_uuid?: ExtendsUUID | undefined
        event_creator_email?: string | undefined
        Feed?: Feed | undefined
        Org?: EventOrganisation | undefined
        Orgc?: EventOrganisation | undefined
        Attribute?: AttributeList | undefined
        ShadowAttribute?: AttributeList | undefined
        RelatedEvent?: { Event?: ExtendedEvent | undefined }[] | undefined
        Galaxy?: Galaxy[] | undefined
        Object?: Object[] | undefined
        EventReport?: EventReport[] | undefined
        Tag?: Tag[] | undefined
      }
    | undefined
}
type ExtendedEventList = ExtendedEvent[]
type SortSearchField = string | null
type DirectionSearchField = 'asc' | 'desc'
type IsLocal = boolean
type GalaxyValueSearchFilter = string
type GalaxyClusterId = string
type GalaxyClusterType = string
type GalaxyClusterValue = string
type GalaxyClusterDescription = string
type GalaxyClusterSource = string
type GalaxyClusterAuthors = string[]
type GalaxyClusterVersion = string | null
type GalaxyElementId = string
type GalaxyElementKey = string
type GalaxyElementValue = string
type GalaxyElement = {
  id?: GalaxyElementId | undefined
  galaxy_cluster_id?: GalaxyClusterId | undefined
  key?: GalaxyElementKey | undefined
  value?: GalaxyElementValue | undefined
}
type GalaxyCluster = {
  id?: GalaxyClusterId | undefined
  uuid?: UUID | undefined
  collection_uuid?: UUID | undefined
  type?: GalaxyClusterType | undefined
  value?: GalaxyClusterValue | undefined
  tag_name?: TagName | undefined
  description?: GalaxyClusterDescription | undefined
  galaxy_id?: GalaxyId | undefined
  source?: GalaxyClusterSource | undefined
  authors?: GalaxyClusterAuthors | undefined
  version?: GalaxyClusterVersion | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  org_id?: OrganisationId | undefined
  orgc_id?: OrganisationId | undefined
  default?: IsDefault | undefined
  locked?: IsLocked | undefined
  extends_uuid?: ExtendsUUID | undefined
  extends_version?: GalaxyClusterVersion | undefined
  published?: PublishedFlag | undefined
  deleted?: SoftDeletedFlag | undefined
  GalaxyElement?: GalaxyElement[] | undefined
}
type ExtendedGalaxy = { Galaxy?: Galaxy | undefined; GalaxyCluster?: GalaxyCluster[] | undefined }
type GalaxyClusterNoIdWithGalaxy = {
  uuid?: UUID | undefined
  collection_uuid?: UUID | undefined
  type?: GalaxyClusterType | undefined
  value?: GalaxyClusterValue | undefined
  tag_name?: TagName | undefined
  description?: GalaxyClusterDescription | undefined
  galaxy_id?: GalaxyId | undefined
  source?: GalaxyClusterSource | undefined
  authors?: GalaxyClusterAuthors | undefined
  version?: GalaxyClusterVersion | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  org_id?: OrganisationId | undefined
  orgc_id?: OrganisationId | undefined
  default?: IsDefault | undefined
  locked?: IsLocked | undefined
  extends_uuid?: ExtendsUUID | undefined
  extends_version?: GalaxyClusterVersion | undefined
  published?: PublishedFlag | undefined
  deleted?: SoftDeletedFlag | undefined
  GalaxyElement?: GalaxyElement[] | undefined
  Galaxy?: { uuid?: UUID | undefined } | undefined
}
type ImportGalaxyClusterItem = { GalaxyCluster?: GalaxyClusterNoIdWithGalaxy | undefined }
type GalaxyMispFormat = {
  name?: GalaxyName | undefined
  type?: GalaxyType | undefined
  authors?: GalaxyClusterAuthors | undefined
  version?: boolean | GalaxyClusterVersion | undefined
  uuid?: UUID | undefined
  source?: GalaxyClusterSource | undefined
  values?:
    | {
        description?: GalaxyClusterDescription | undefined
        uuid?: UUID | undefined
        value?: GalaxyClusterValue | undefined
        extends_uuid?: ExtendsUUID | undefined
        extends_Version?: GalaxyClusterVersion | undefined
        meta?: { [x: string]: unknown } | undefined
      }[]
    | undefined
}
type TagCollectionId = string
type GalaxyClusterRelationList = GalaxyElement[]
type OrganisationType = string | null
type Organisation = {
  id?: OrganisationId | undefined
  name?: OrganisationName | undefined
  date_created?: string | undefined
  date_modified?: string | undefined
  description?: string | undefined
  type?: OrganisationType | undefined
  nationality?: string | undefined
  sector?: string | undefined
  created_by?: UserId | undefined
  uuid?: string | undefined
  contacts?: (string | null) | undefined
  local?: boolean | undefined
  restricted_to_domain?: string[] | undefined
  landingpage?: (string | null) | undefined
  user_count?: (string | null) | undefined
  created_by_email?: (string | null) | undefined
}
type ExtendedGalaxyCluster = {
  id?: GalaxyClusterId | undefined
  uuid?: UUID | undefined
  collection_uuid?: UUID | undefined
  type?: GalaxyClusterType | undefined
  value?: GalaxyClusterValue | undefined
  tag_name?: TagName | undefined
  description?: GalaxyClusterDescription | undefined
  galaxy_id?: GalaxyId | undefined
  source?: GalaxyClusterSource | undefined
  authors?: GalaxyClusterAuthors | undefined
  version?: GalaxyClusterVersion | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  org_id?: OrganisationId | undefined
  orgc_id?: OrganisationId | undefined
  default?: IsDefault | undefined
  locked?: IsLocked | undefined
  extends_uuid?: ExtendsUUID | undefined
  extends_version?: GalaxyClusterVersion | undefined
  published?: PublishedFlag | undefined
  deleted?: SoftDeletedFlag | undefined
  GalaxyElement?: GalaxyElement[] | undefined
  Galaxy?: Galaxy | undefined
  GalaxyClusterRelation?: GalaxyClusterRelationList | undefined
  Org?: Organisation | undefined
  Orgc?: Organisation | undefined
  tag_count?: number | undefined
  tag_id?: TagId | undefined
}
type ServerId = string
type RoleId = string
type UserNoId = {
  org_id?: OrganisationId | undefined
  server_id?: ServerId | undefined
  email?: string | undefined
  autoalert?: boolean | undefined
  authkey?: (string | null) | undefined
  invited_by?: UserId | undefined
  gpgkey?: (string | null) | undefined
  certif_public?: (string | null) | undefined
  nids_sid?: string | undefined
  termsaccepted?: boolean | undefined
  newsread?: Timestamp | undefined
  role_id?: RoleId | undefined
  change_pw?: '0' | '1' | undefined
  contactalert?: boolean | undefined
  disabled?: boolean | undefined
  expiration?: (string | null) | undefined
  current_login?: Timestamp | undefined
  last_login?: Timestamp | undefined
  force_logout?: boolean | undefined
  date_created?: Timestamp | undefined
  date_modified?: Timestamp | undefined
}
type User = {
  id?: UserId | undefined
  org_id?: OrganisationId | undefined
  server_id?: ServerId | undefined
  email?: string | undefined
  autoalert?: boolean | undefined
  authkey?: (string | null) | undefined
  invited_by?: UserId | undefined
  gpgkey?: (string | null) | undefined
  certif_public?: (string | null) | undefined
  nids_sid?: string | undefined
  termsaccepted?: boolean | undefined
  newsread?: Timestamp | undefined
  role_id?: RoleId | undefined
  change_pw?: '0' | '1' | undefined
  contactalert?: boolean | undefined
  disabled?: boolean | undefined
  expiration?: (string | null) | undefined
  current_login?: Timestamp | undefined
  last_login?: Timestamp | undefined
  force_logout?: boolean | undefined
  date_created?: Timestamp | undefined
  date_modified?: Timestamp | undefined
}
type RoleName = string
type Role = {
  id?: RoleId | undefined
  name?: RoleName | undefined
  perm_add?: boolean | undefined
  perm_modify?: boolean | undefined
  perm_modify_org?: boolean | undefined
  perm_publish?: boolean | undefined
  perm_delegate?: boolean | undefined
  perm_sync?: boolean | undefined
  perm_admin?: boolean | undefined
  perm_audit?: boolean | undefined
  perm_auth?: boolean | undefined
  perm_site_admin?: boolean | undefined
  perm_regexp_access?: boolean | undefined
  perm_tagger?: boolean | undefined
  perm_template?: boolean | undefined
  perm_sharing_group?: boolean | undefined
  perm_tag_editor?: boolean | undefined
  perm_sighting?: boolean | undefined
  perm_object_template?: boolean | undefined
  perm_publish_zmq?: boolean | undefined
  perm_publish_kafka?: boolean | undefined
  perm_decaying?: boolean | undefined
  perm_galaxy_editor?: boolean | undefined
  default_role?: boolean | undefined
  memory_limit?: (string | null) | undefined
  max_execution_time?: (string | null) | undefined
  restricted_to_site_admin?: boolean | undefined
  enforce_rate_limit?: boolean | undefined
  rate_limit_count?: string | undefined
  permission?: string | undefined
  permission_description?: string | undefined
}
type UserListItem = {
  User?: User | undefined
  Role?: Role | undefined
  Organisation?:
    | { id?: OrganisationId | undefined; name?: OrganisationName | undefined }
    | undefined
}
type UserList = UserListItem[]
type PublishAlertFilterUserSetting = { [x: string]: unknown }
type DashboardAccessUserSetting = boolean
type DashboardUserSetting = {
  widget?: string | undefined
  position?:
    | {
        x?: string | undefined
        y?: string | undefined
        width?: string | undefined
        height?: string | undefined
      }
    | undefined
}
type HomepageUserSetting = { path?: string | undefined }
type DefaultRestSearchParametersUserSetting = { [x: string]: unknown }
type TagNumericalValueOverrideUserSetting = { [x: string]: unknown }
type EventIndexHideColumnsUserSetting = string[]
type ViewUserSettings = {
  publish_alert_filter?: PublishAlertFilterUserSetting | undefined
  dashboard_access?: DashboardAccessUserSetting | undefined
  dashboard?: DashboardUserSetting[] | undefined
  homepage?: HomepageUserSetting | undefined
  default_restsearch_parameters?: DefaultRestSearchParametersUserSetting | undefined
  tag_numerical_value_override?: TagNumericalValueOverrideUserSetting | undefined
  event_index_hide_columns?: EventIndexHideColumnsUserSetting | undefined
}
type ExtendedUser = {
  id?: UserId | undefined
  org_id?: OrganisationId | undefined
  server_id?: ServerId | undefined
  email?: string | undefined
  autoalert?: boolean | undefined
  authkey?: (string | null) | undefined
  invited_by?: UserId | undefined
  gpgkey?: (string | null) | undefined
  certif_public?: (string | null) | undefined
  nids_sid?: string | undefined
  termsaccepted?: boolean | undefined
  newsread?: Timestamp | undefined
  role_id?: RoleId | undefined
  change_pw?: '0' | '1' | undefined
  contactalert?: boolean | undefined
  disabled?: boolean | undefined
  expiration?: (string | null) | undefined
  current_login?: Timestamp | undefined
  last_login?: Timestamp | undefined
  force_logout?: boolean | undefined
  date_created?: Timestamp | undefined
  date_modified?: Timestamp | undefined
  User?: User | undefined
  Role?: Role | undefined
  UserSetting?: ViewUserSettings | undefined
}
type NotFoundUserTotpDeleteError = { name: string; message: string; url: string }
type OrganisationNoId = {
  name?: OrganisationName | undefined
  date_created?: string | undefined
  date_modified?: string | undefined
  description?: string | undefined
  type?: OrganisationType | undefined
  nationality?: string | undefined
  sector?: string | undefined
  created_by?: UserId | undefined
  uuid?: string | undefined
  contacts?: (string | null) | undefined
  local?: boolean | undefined
  restricted_to_domain?: string[] | undefined
  landingpage?: (string | null) | undefined
  user_count?: (string | null) | undefined
  created_by_email?: (string | null) | undefined
}
type LogId = string
type LogTitle = string
type DateIntervalRestSearchFilter = DateRestSearchFilter[]
type ModelName =
  | 'AdminSetting'
  | 'Allowedlist'
  | 'AttachmentScan'
  | 'Attribute'
  | 'AttributeTag'
  | 'AuditLog'
  | 'AuthKey'
  | 'Bruteforce'
  | 'Cerebrate'
  | 'Community'
  | 'CorrelationExclusion'
  | 'Correlation'
  | 'Dashboard'
  | 'DecayingModelMapping'
  | 'DecayingModel'
  | 'EventBlocklist'
  | 'EventDelegation'
  | 'EventGraph'
  | 'EventLock'
  | 'Event'
  | 'EventReport'
  | 'EventTag'
  | 'FavouriteTag'
  | 'Feed'
  | 'FuzzyCorrelateSsdeep'
  | 'GalaxyClusterBlocklist'
  | 'GalaxyCluster'
  | 'GalaxyClusterRelation'
  | 'GalaxyClusterRelationTag'
  | 'GalaxyElement'
  | 'Galaxy'
  | 'Inbox'
  | 'Job'
  | 'Log'
  | 'MispObject'
  | 'Module'
  | 'News'
  | 'NoticelistEntry'
  | 'Noticelist'
  | 'NotificationLog'
  | 'ObjectReference'
  | 'ObjectRelationship'
  | 'ObjectTemplateElement'
  | 'ObjectTemplate'
  | 'Organisation'
  | 'OrgBlocklist'
  | 'Post'
  | 'Regexp'
  | 'RestClientHistory'
  | 'Role'
  | 'Server'
  | 'ShadowAttribute'
  | 'SharingGroupOrg'
  | 'SharingGroup'
  | 'SharingGroupServer'
  | 'SightingdbOrg'
  | 'Sightingdb'
  | 'Sighting'
  | 'TagCollection'
  | 'TagCollectionTag'
  | 'Tag'
  | 'Task'
  | 'TaxonomyEntry'
  | 'Taxonomy'
  | 'TaxonomyPredicate'
  | 'TemplateElementAttribute'
  | 'TemplateElementFile'
  | 'TemplateElement'
  | 'TemplateElementText'
  | 'Template'
  | 'TemplateTag'
  | 'Thread'
  | 'ThreatLevel'
  | 'User'
  | 'UserSetting'
  | 'WarninglistEntry'
  | 'Warninglist'
  | 'WarninglistType'
type LogActionType =
  | 'accept'
  | 'accept_delegation'
  | 'acceptRegistrations'
  | 'add'
  | 'admin_email'
  | 'attachTags'
  | 'auth'
  | 'auth_fail'
  | 'blocklisted'
  | 'captureRelations'
  | 'change_pw'
  | 'delete'
  | 'disable'
  | 'discard'
  | 'discardRegistrations'
  | 'edit'
  | 'email'
  | 'enable'
  | 'enrichment'
  | 'error'
  | 'export'
  | 'fetchEvent'
  | 'file_upload'
  | 'galaxy'
  | 'include_formula'
  | 'login'
  | 'login_fail'
  | 'logout'
  | 'merge'
  | 'pruneUpdateLogs'
  | 'publish'
  | 'publish_sightings'
  | 'publish alert'
  | 'pull'
  | 'purge_events'
  | 'push'
  | 'registration'
  | 'registration_error'
  | 'remove_dead_workers'
  | 'request'
  | 'request_delegation'
  | 'reset_auth_key'
  | 'send_mail'
  | 'security'
  | 'serverSettingsEdit'
  | 'tag'
  | 'undelete'
  | 'update'
  | 'update_database'
  | 'update_db_worker'
  | 'upgrade_24'
  | 'upload_sample'
  | 'version_warning'
  | 'warning'
  | 'wipe_default'
type LogChange = string
type LogDescription = string
type Log = {
  id?: LogId | undefined
  title?: LogTitle | undefined
  created?: string | undefined
  model?: ModelName | undefined
  model_id?: ModelId | undefined
  action?: LogActionType | undefined
  user_id?: UserId | undefined
  change?: LogChange | undefined
  email?: string | undefined
  org?: OrganisationName | undefined
  description?: LogDescription | undefined
  ip?: string | undefined
}
type OrganisationListItem = { Organisation?: Organisation | undefined }
type OrganisationList = OrganisationListItem[]
type ServerName = string
type AuthKeyRaw = string
type ServerNoId = {
  name?: ServerName | undefined
  url?: string | undefined
  authkey?: AuthKeyRaw | undefined
  org_id?: OrganisationId | undefined
  push?: boolean | undefined
  pull?: boolean | undefined
  push_sightings?: boolean | undefined
  push_galaxy_clusters?: boolean | undefined
  pull_galaxy_clusters?: boolean | undefined
  lastpulledid?: (string | null) | undefined
  lastpushedid?: (string | null) | undefined
  organization?: (string | null) | undefined
  remote_org_id?: OrganisationId | undefined
  publish_without_email?: boolean | undefined
  unpublish_event?: boolean | undefined
  self_signed?: boolean | undefined
  pull_rules?: string | undefined
  push_rules?: string | undefined
  cert_file?: (string | null) | undefined
  client_cert_file?: (string | null) | undefined
  internal?: boolean | undefined
  skip_proxy?: boolean | undefined
  caching_enabled?: boolean | undefined
  priority?: (string | null) | undefined
  cache_timestamp?: boolean | undefined
}
type Server = {
  id?: ServerId | undefined
  name?: ServerName | undefined
  url?: string | undefined
  authkey?: AuthKeyRaw | undefined
  org_id?: OrganisationId | undefined
  push?: boolean | undefined
  pull?: boolean | undefined
  push_sightings?: boolean | undefined
  push_galaxy_clusters?: boolean | undefined
  pull_galaxy_clusters?: boolean | undefined
  lastpulledid?: (string | null) | undefined
  lastpushedid?: (string | null) | undefined
  organization?: (string | null) | undefined
  remote_org_id?: OrganisationId | undefined
  publish_without_email?: boolean | undefined
  unpublish_event?: boolean | undefined
  self_signed?: boolean | undefined
  pull_rules?: string | undefined
  push_rules?: string | undefined
  cert_file?: (string | null) | undefined
  client_cert_file?: (string | null) | undefined
  internal?: boolean | undefined
  skip_proxy?: boolean | undefined
  caching_enabled?: boolean | undefined
  priority?: (string | null) | undefined
  cache_timestamp?: boolean | undefined
}
type ServerListItem = {
  Server?: Server | undefined
  Organisation?: Organisation | undefined
  RemoteOrg?: Organisation | undefined
  User?: User[] | undefined
}
type ServerList = ServerListItem[]
type PhpServerSetting = {
  explanation?: string | undefined
  recommended?: number | string | undefined
  unit?: string | undefined
  value?: number | string | undefined
}
type ServerPackageVersion = {
  version?: string | undefined
  expected?: string | undefined
  status?: number | undefined
}
type MispSetting = {
  level?: number | undefined
  value?: string | boolean | number | undefined
  errorMessage?: (string | null) | undefined
  test?: string | boolean | undefined
  type?: 'string' | 'boolean' | 'numeric' | undefined
  null?: (boolean | null) | undefined
  subGroup?: (string | null) | undefined
  cli_only?: (number | null) | undefined
  redacted?: (boolean | null) | undefined
  optionsSource?: ({ [x: string]: unknown } | null) | undefined
  afterHook?: (string | null) | undefined
  error?: (number | null) | undefined
  tab?: string | undefined
  setting?: string | undefined
  options?: { [x: string]: unknown } | string | string[] | { [x: string]: unknown }[] | undefined
}
type Worker = {
  pid?: number | undefined
  user?: string | undefined
  alive?: boolean | undefined
  correct_user?: boolean | undefined
  ok?: boolean | undefined
}
type WorkersStatus = {
  ok?: boolean | undefined
  workers?: Worker[] | undefined
  jobCount?: (number | null) | undefined
}
type UpdateServerResultItem = {
  input?: string | undefined
  output?: string[] | undefined
  status?: number | undefined
}
type SharingGroupName = string
type SharingGroupDescription = string
type SharingGroupReleasability = string
type SharingGroupNoId = {
  uuid?: UUID | undefined
  name?: SharingGroupName | undefined
  description?: SharingGroupDescription | undefined
  releasability?: SharingGroupReleasability | undefined
  local?: boolean | undefined
  active?: boolean | undefined
  org_count?: string | undefined
  organisation_uuid?: UUID | undefined
  org_id?: OrganisationId | undefined
  sync_user_id?: UserId | undefined
  created?: string | undefined
  modified?: string | undefined
  roaming?: boolean | undefined
}
type SharingGroup = {
  id?: SharingGroupId | undefined
  uuid?: UUID | undefined
  name?: SharingGroupName | undefined
  description?: SharingGroupDescription | undefined
  releasability?: SharingGroupReleasability | undefined
  local?: boolean | undefined
  active?: boolean | undefined
  org_count?: string | undefined
  organisation_uuid?: UUID | undefined
  org_id?: OrganisationId | undefined
  sync_user_id?: UserId | undefined
  created?: string | undefined
  modified?: string | undefined
  roaming?: boolean | undefined
}
type SharingGroupOrganisationId = string | null
type SharingGroupOrganisation = {
  id?: SharingGroupOrganisationId | undefined
  sharing_group_id?: SharingGroupId | undefined
  org_id?: OrganisationId | undefined
  extend?: boolean | undefined
  Organisation?:
    | {
        id?: OrganisationId | undefined
        name?: OrganisationName | undefined
        uuid?: UUID | undefined
      }
    | undefined
}
type SharingGroupServer = {
  all_orgs?: boolean | undefined
  server_id?: ServerId | undefined
  sharing_group_id?: SharingGroupId | undefined
  Server?: { id?: ServerId | undefined; name?: ServerName | undefined } | undefined
}
type SlimSharingGroup = {
  id?: SharingGroupId | undefined
  uuid?: UUID | undefined
  name?: SharingGroupName | undefined
  description?: SharingGroupDescription | undefined
  releasability?: SharingGroupReleasability | undefined
  local?: boolean | undefined
  active?: boolean | undefined
  org_count?: string | undefined
}
type SharingGroupListItem = {
  SharingGroup?: SlimSharingGroup | undefined
  Organisation?:
    | {
        id?: OrganisationId | undefined
        name?: OrganisationName | undefined
        uuid?: UUID | undefined
      }
    | undefined
  SharingGroupOrg?: SharingGroupOrganisation[] | undefined
  SharingGroupServer?: SharingGroupServer[] | undefined
  editable?: boolean | undefined
  deletable?: boolean | undefined
}
type SharingGroupServerId = string | null
type SharingGroupBlueprintAdd = {
  SharingGroupBlueprint?:
    | {
        name?: string | undefined
        rules?: string | undefined
        sharing_group_id?: SharingGroupIntId | undefined
      }
    | undefined
}
type SharingGroupBlueprintId = string | null
type FullSharingGroupBlueprint = {
  id?: SharingGroupBlueprintId | undefined
  uuid?: UUID | undefined
  name?: string | undefined
  timestamp?: Timestamp | undefined
  user_id?: UserId | undefined
  org_id?: OrganisationId | undefined
  sharing_group_id?: SharingGroupId | undefined
  rules?: string | undefined
}
type SharingGroupBlueprintEdit = { name?: string | undefined; rules?: string | undefined }
type WarninglistId = string
type WarninglistEntry = {
  id?: string | undefined
  value?: string | undefined
  warninglist_id?: WarninglistId | undefined
}
type Warninglist = {
  id?: WarninglistId | undefined
  name?: string | undefined
  type?: 'cidr' | 'hostname' | 'substring' | 'string' | 'regex' | undefined
  description?: string | undefined
  version?: string | undefined
  enabled?: boolean | undefined
  warninglist_entry_count?: string | undefined
  valid_attributes?: string | undefined
  WarninglistEntry?: WarninglistEntry[] | undefined
}
type WarninglistsIdFilter = WarninglistId | WarninglistId[]
type WarninglistsNameFilter = string | string[]
type NoticelistId = string
type NoticelistEntry = {
  id?: string | undefined
  noticelist_id?: NoticelistId | undefined
  data?:
    | {
        scope?: string[] | undefined
        field?: string[] | undefined
        value?: string[] | undefined
        tags?: TagName[] | undefined
        message?: { en?: string | undefined } | undefined
      }
    | undefined
}
type Noticelist = {
  id?: NoticelistId | undefined
  name?: string | undefined
  type?: 'cidr' | 'hostname' | 'substring' | 'string' | 'regex' | undefined
  description?: string | undefined
  version?: string | undefined
  enabled?: boolean | undefined
  warninglist_entry_count?: string | undefined
  valid_attributes?: string | undefined
  NoticelistEntry?: NoticelistEntry[] | undefined
}
type IncludeAllTagsRestSearchFilter = boolean
type AllowProposalBlockingRestSearchFlag = boolean
type ObjectsRestSearchReturnFormat = 'json'
type ObjectRestSearchFilter = {
  page?: PageSearchFilter | undefined
  limit?: LimitSearchFilter | undefined
  quickFilter?: SearchAllRestSearchFilter | undefined
  searchall?: SearchAllRestSearchFilter | undefined
  timestamp?: Timestamp | undefined
  object_name?: ObjectName | undefined
  object_template_uuid?: UUID | undefined
  object_template_version?: ObjectTemplateVersion | undefined
  eventid?: EventId | undefined
  eventinfo?: EventInfo | undefined
  ignore?: boolean | undefined
  from?: DateRestSearchFilter | undefined
  to?: DateRestSearchFilter | undefined
  date?: DateRestSearchFilter | undefined
  tags?: TagsRestSearchFilter | undefined
  last?: LastRestSearchFilter | undefined
  event_timestamp?: Timestamp | undefined
  publish_timestamp?: Timestamp | undefined
  org?: OrganisationId | OrganisationName | undefined
  uuid?: UUID | undefined
  value?: AttributeValue | undefined
  type?: AttributeType | undefined
  category?: AttributeCategory | undefined
  object_relation?: ObjectRelationRestSearchFilter | undefined
  attribute_timestamp?: Timestamp | undefined
  first_seen?: NullableMicroTimestamp | undefined
  last_seen?: NullableMicroTimestamp | undefined
  comment?: AttributeComment | undefined
  to_ids?: ToIDSRestSearchFlag | undefined
  published?: PublishedFlag | undefined
  deleted?: SoftDeletedFlag | undefined
  withAttachments?: WithAttachmentsRestSearchFilter | undefined
  enforceWarninglist?: EnforceWarninglistRestSearchFilter | undefined
  includeAllTags?: IncludeAllTagsRestSearchFilter | undefined
  includeEventUuid?: IncludeEventUUIDRestSearchFlag | undefined
  include_event_uuid?: IncludeEventUUIDRestSearchFlag | undefined
  includeEventTags?: IncludeEventTagsRestSearchFlag | undefined
  includeProposals?: IncludeProposalsRestSearchFlag | undefined
  includeWarninglistHits?: IncludeWarninglistHitsRestSearchFlag | undefined
  includeContext?: IncludeContextRestSearchFlag | undefined
  includeSightings?: IncludeContextRestSearchFlag | undefined
  includeSightingdb?: IncludeSightingDbRestSearchFlag | undefined
  includeCorrelations?: IncludeCorrelationsRestSearchFlag | undefined
  includeDecayScore?: IncludeDecayScoreRestSearchFlag | undefined
  includeFullModel?: IncludeFullModelRestSearchFlag | undefined
  allow_proposal_blocking?: AllowProposalBlockingRestSearchFlag | undefined
  metadata?: MetadataRestSearchFilter | undefined
  attackGalaxy?: AttackGalaxyRestSearchFilter | undefined
  excludeDecayed?: ExcludeDecayedRestSearchFlag | undefined
  decayingModel?: DecayingModelRestSearchFilter | undefined
  modelOverrides?: DecayingModelParameters | undefined
  score?: DecayingModelScoreRestSearchFilter | undefined
  returnFormat?: ObjectsRestSearchReturnFormat | undefined
}
type ObjectRestSearchList = { Object?: Object | undefined }
type ObjectTemplateId = string
type ObjectRelation = string
type ExtendedObject = {
  id?: ObjectId | undefined
  name?: ObjectName | undefined
  'meta-category'?: ObjectMetaCategory | undefined
  description?: ObjectDescription | undefined
  template_uuid?: UUID | undefined
  template_version?: ObjectTemplateVersion | undefined
  event_id?: EventId | undefined
  uuid?: UUID | undefined
  timestamp?: Timestamp | undefined
  distribution?: DistributionLevelId | undefined
  sharing_group_id?: SharingGroupId | undefined
  comment?: string | undefined
  deleted?: boolean | undefined
  first_seen?: NullableMicroTimestamp | string | undefined
  last_seen?: NullableMicroTimestamp | string | undefined
  Attribute?: Attribute[] | undefined
  Event?:
    | {
        id?: EventId | undefined
        info?: EventInfo | undefined
        org_id?: OrganisationId | undefined
        orgc_id?: OrganisationId | undefined
      }
    | undefined
}
type SightingId = string
type Sighting = {
  id?: SightingId | undefined
  attribute_id?: AttributeId | undefined
  event_id?: EventId | undefined
  org_id?: OrganisationId | undefined
  date_sighting?: Timestamp | undefined
  uuid?: UUID | undefined
  source?: string | undefined
  type?: string | undefined
  attribute_uuid?: UUID | undefined
  Organisation?:
    | {
        id?: OrganisationId | undefined
        uuid?: UUID | undefined
        name?: OrganisationName | undefined
      }
    | undefined
}
type TagNoId = {
  name?: TagName | undefined
  colour?: TagColour | undefined
  exportable?: IsExportable | undefined
  org_id?: OrganisationId | undefined
  user_id?: UserId | undefined
  hide_tag?: HideTagFlag | undefined
  numerical_value?: TagNumericalValue | undefined
  is_galaxy?: IsGalaxy | undefined
  is_custom_galaxy?: IsCustomGalaxy | undefined
  inherited?: IsInherited | undefined
}
type TaxonomyId = string
type TaxonomyNamespace = string
type TaxonomyDescription = string
type TaxonomyVersion = string
type Taxonomy = {
  id?: TaxonomyId | undefined
  namespace?: TaxonomyNamespace | undefined
  description?: TaxonomyDescription | undefined
  version?: TaxonomyVersion | undefined
  enabled?: boolean | undefined
  exclusive?: boolean | undefined
  required?: boolean | undefined
}
type TaxonomyPredicateId = string
type TaxonomyPredicateValue = string
type TaxonomyPredicateExpanded = string
type TaxonomyPredicateDescription = string
type TaxonomyPredicate = {
  id?: TaxonomyPredicateId | undefined
  taxonomy_id?: TaxonomyId | undefined
  value?: TaxonomyPredicateValue | undefined
  expanded?: TaxonomyPredicateExpanded | undefined
  colour?: string | undefined
  description?: TaxonomyPredicateDescription | undefined
  exclusive?: boolean | undefined
  numerical_value?: (number | null) | undefined
}
type ExtendedTag = {
  Tag?: Tag | undefined
  Taxonomy?: Taxonomy | undefined
  TaxonomyPredicate?: TaxonomyPredicate | undefined
  GalaxyCluster?: GalaxyCluster | undefined
}
type AuthKeyId = string
type IsReadOnly = boolean
type AuthKey = {
  id?: AuthKeyId | undefined
  uuid?: UUID | undefined
  authkey_start?: string | undefined
  authkey_end?: string | undefined
  created?: Timestamp | undefined
  expiration?: (string | null) | undefined
  read_only?: IsReadOnly | undefined
  user_id?: UserId | undefined
  comment?: string | undefined
  allowed_ips?: (string[] | null) | undefined
  last_used?: NullableTimestamp | undefined
}
type UserSettingId = string
type UserSettingName =
  | 'publish_alert_filter'
  | 'dashboard_access'
  | 'dashboard'
  | 'homepage'
  | 'default_restsearch_parameters'
  | 'tag_numerical_value_override'
  | 'event_index_hide_columns'
type UserSetting = {
  id?: UserSettingId | undefined
  setting?: UserSettingName | undefined
  value?:
    | DashboardUserSetting
    | PublishAlertFilterUserSetting
    | DashboardAccessUserSetting
    | HomepageUserSetting
    | DefaultRestSearchParametersUserSetting
    | TagNumericalValueOverrideUserSetting
    | EventIndexHideColumnsUserSetting
    | undefined
  user_id?: UserId | undefined
  timestamp?: Timestamp | undefined
}
type TaxonomyEntry = {
  tag?: TagName | undefined
  expanded?: string | undefined
  description?: string | undefined
  exclusive_predicate?: boolean | undefined
  existing_tag?: boolean | undefined
}
type ExtendedTaxonomyEntry = {
  org_id?: OrganisationId | undefined
  server_id?: ServerId | undefined
  email?: string | undefined
  autoalert?: boolean | undefined
  authkey?: (string | null) | undefined
  invited_by?: UserId | undefined
  gpgkey?: (string | null) | undefined
  certif_public?: (string | null) | undefined
  nids_sid?: string | undefined
  termsaccepted?: boolean | undefined
  newsread?: Timestamp | undefined
  role_id?: RoleId | undefined
  change_pw?: '0' | '1' | undefined
  contactalert?: boolean | undefined
  disabled?: boolean | undefined
  expiration?: (string | null) | undefined
  current_login?: Timestamp | undefined
  last_login?: Timestamp | undefined
  force_logout?: boolean | undefined
  date_created?: Timestamp | undefined
  date_modified?: Timestamp | undefined
  events?: number | undefined
  attributes?: number | undefined
}
type TaxonomyPredicateExport = {
  value?: TaxonomyPredicateValue | undefined
  expanded?: TaxonomyPredicateExpanded | undefined
}
type TaxonomyEntryExport = {
  value?: string | undefined
  expanded?: string | undefined
  description?: string | undefined
}
type TaxonomyValueExport = {
  predicate?: TaxonomyPredicateValue | undefined
  entry?: TaxonomyEntryExport[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analystData/add/:analystType/:analystObjectUUID/:analystObjectType': {
      $post:
        | {
            input: {
              param: {
                analystType: AnalystDataType
                analystObjectUUID: UUID
                analystObjectType: AnalystObjectType
              }
            } & { json: AnalystNote | AnalystOpinion | AnalystRelationship }
            output: AnalystNote | AnalystOpinion | AnalystRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                analystType: AnalystDataType
                analystObjectUUID: UUID
                analystObjectType: AnalystObjectType
              }
            } & { json: AnalystNote | AnalystOpinion | AnalystRelationship }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                analystType: AnalystDataType
                analystObjectUUID: UUID
                analystObjectType: AnalystObjectType
              }
            } & { json: AnalystNote | AnalystOpinion | AnalystRelationship }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analystData/edit/:analystType/:analystDataID': {
      $post:
        | {
            input: {
              param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID }
            } & { json: AnalystNote | AnalystOpinion | AnalystRelationship }
            output: AnalystNote | AnalystOpinion | AnalystRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID }
            } & { json: AnalystNote | AnalystOpinion | AnalystRelationship }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID }
            } & { json: AnalystNote | AnalystOpinion | AnalystRelationship }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analystData/delete/:analystType/:analystDataID': {
      $delete:
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analystData/index/:analystType': {
      $get:
        | {
            input: { param: { analystType: AnalystDataType } }
            output: (AnalystNote | AnalystOpinion | AnalystRelationship)[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { analystType: AnalystDataType } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { analystType: AnalystDataType } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { analystType: AnalystDataType } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analystData/view/:analystType/:analystDataID': {
      $get:
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: AnalystNote | AnalystOpinion | AnalystRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { analystType: AnalystDataType; analystDataID: AnalystDataID | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analystData/indexMinimal': {
      $post:
        | {
            input: { json: { orgc_name?: OrganisationName | OrganisationName[] | undefined } }
            output: MinimalAnalystData | MinimalAnalystDataEmpty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { orgc_name?: OrganisationName | OrganisationName[] | undefined } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { orgc_name?: OrganisationName | OrganisationName[] | undefined } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { orgc_name?: OrganisationName | OrganisationName[] | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/restSearch': {
      $post:
        | {
            input: { json: AttributeRestSearchFilter }
            output: { response?: { Attribute?: AttributeRestSearchList | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AttributeRestSearchFilter }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AttributeRestSearchFilter }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/add/:eventId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID } } & { json: AttributeNoId }
            output: { Attribute?: Attribute | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: AttributeNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: AttributeNoId }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/edit/:attributeId': {
      $put:
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: Attribute }
            output: { Attribute?: Attribute | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: Attribute }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: Attribute }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: Attribute }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/delete/:attributeId': {
      $delete:
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/restore/:attributeId': {
      $post:
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: { Attribute?: Attribute | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/addTag/:attributeId/:tagId/local:{local}': {
      $post:
        | {
            input: { param: { attributeId: string; tagId: string; local: 0 | 1 } } & {
              json: {
                attribute?: string | undefined
                attribute_ids?: string | undefined
                tag?: string | undefined
              }
            }
            output: {
              saved?: boolean | undefined
              success?: (string | null) | undefined
              check_publish?: (boolean | null) | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: string; tagId: string; local: 0 | 1 } } & {
              json: {
                attribute?: string | undefined
                attribute_ids?: string | undefined
                tag?: string | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: string; tagId: string; local: 0 | 1 } } & {
              json: {
                attribute?: string | undefined
                attribute_ids?: string | undefined
                tag?: string | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attributeId: string; tagId: string; local: 0 | 1 } } & {
              json: {
                attribute?: string | undefined
                attribute_ids?: string | undefined
                tag?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/removeTag/:attributeId/:tagId': {
      $post:
        | {
            input: { param: { attributeId: AttributeId | UUID; tagId: TagId } }
            output: {
              saved?: boolean | undefined
              success?: (string | null) | undefined
              check_publish?: (boolean | null) | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID; tagId: TagId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID; tagId: TagId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attributeId: AttributeId | UUID; tagId: TagId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes': {
      $get:
        | { input: {}; output: AttributeList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/attributes/view/:attributeId': {
      $get:
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: { Attribute?: Attribute | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/getAttributeByB64Value/:base64Value': {
      $get:
        | {
            input: { param: { base64Value: string } }
            output: Attribute[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { base64Value: string } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { base64Value: string } }
            output: ApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { base64Value: string } }
            output: ApiError
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { base64Value: string } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/attributeStatistics/:context/:percentage': {
      $get:
        | {
            input: { param: { context: 'type' | 'category'; percentage: number } }
            output: AttributeStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { context: 'type' | 'category'; percentage: number } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { context: 'type' | 'category'; percentage: number } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/attributes/describeTypes': {
      $get:
        | { input: {}; output: DescribeAttributeTypesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/attributes/enrich/:attributeId': {
      $post:
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: EnrichModulesList }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: EnrichModulesList }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } } & { json: EnrichModulesList }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/add': {
      $post:
        | {
            input: {
              json: {
                uuid?: UUID | undefined
                type?: CollectionType | undefined
                name?: string | undefined
                description?: CollectionDescription | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
              }
            }
            output: { Collection?: CollectionAddEdit | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                uuid?: UUID | undefined
                type?: CollectionType | undefined
                name?: string | undefined
                description?: CollectionDescription | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                uuid?: UUID | undefined
                type?: CollectionType | undefined
                name?: string | undefined
                description?: CollectionDescription | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/edit/:collectionId': {
      $post:
        | {
            input: { param: { collectionId: CollectionId | UUID } } & { json: BaseCollection }
            output: { Collection?: CollectionAddEdit | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } } & { json: BaseCollection }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } } & { json: BaseCollection }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } } & { json: BaseCollection }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/delete/:collectionId': {
      $delete:
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              id?: ModelId | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/view/:collectionId': {
      $get:
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: { Collection?: CollectionFull | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collectionId: CollectionId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/index/:filter': {
      $post:
        | {
            input: { param: { filter: 'my_collections' | 'org_collections' } } & {
              json: {
                'Collection.uuid'?: string | undefined
                'Collection.type'?: string | undefined
                'Collection.name'?: string | undefined
              }
            }
            output: { Collection?: CollectionFullNoElements | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { filter: 'my_collections' | 'org_collections' } } & {
              json: {
                'Collection.uuid'?: string | undefined
                'Collection.type'?: string | undefined
                'Collection.name'?: string | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { filter: 'my_collections' | 'org_collections' } } & {
              json: {
                'Collection.uuid'?: string | undefined
                'Collection.type'?: string | undefined
                'Collection.name'?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/view/:eventReportId': {
      $get:
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: { EventReport?: EventReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/add/:eventId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EventReportNoId }
            output: { EventReport?: EventReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EventReportNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EventReportNoId }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/edit/:eventReportId': {
      $post:
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: { EventReport?: EventReport | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/delete/:eventReportId': {
      $post:
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/delete/:eventReportId/:hardDelete': {
      $post:
        | {
            input: { param: { eventReportId: EventReportId | UUID; hardDelete: '0' | '1' } }
            output: {
              saved?: boolean | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID; hardDelete: '0' | '1' } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID; hardDelete: '0' | '1' } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/restore/:eventReportId': {
      $post:
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventReportId: EventReportId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/eventReports/index': {
      $get:
        | {
            input: {}
            output: { EventReport?: EventReport | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/eventReports/importReportFromUrl/:eventId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID } } & { json: { url?: string | undefined } }
            output: {
              saved?: boolean | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: { url?: string | undefined } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: { url?: string | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/restSearch': {
      $post:
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                value?: AttributeValue | undefined
                type?: AttributeType | undefined
                category?: AttributeCategory | undefined
                org?: OrganisationId | OrganisationName | undefined
                tags?: TagsRestSearchFilter | undefined
                event_tags?: TagsRestSearchFilter | undefined
                searchall?: SearchAllRestSearchFilter | undefined
                from?: DateRestSearchFilter | undefined
                to?: DateRestSearchFilter | undefined
                last?: LastRestSearchFilter | undefined
                eventid?: EventId | undefined
                withAttachments?: WithAttachmentsRestSearchFilter | undefined
                sharinggroup?: SharingGroupIDRestSearchFilter | undefined
                metadata?: MetadataRestSearchFilter | undefined
                uuid?: UUID | undefined
                publish_timestamp?: Timestamp | undefined
                timestamp?: Timestamp | undefined
                published?: PublishedFlag | undefined
                enforceWarninglist?: EnforceWarninglistRestSearchFilter | undefined
                sgReferenceOnly?: boolean | undefined
                requested_attributes?: RequestedAttributesRestSearchFilter | undefined
                includeContext?: IncludeContextRestSearchFlag | undefined
                headerless?: HeaderlessRestSearchFlag | undefined
                includeWarninglistHits?: IncludeWarninglistHitsRestSearchFlag | undefined
                attackGalaxy?: AttackGalaxyRestSearchFilter | undefined
                to_ids?: ToIDS | undefined
                deleted?: SoftDeletedFlagValuesToInclude | undefined
                excludeLocalTags?: ExcludeLocalTagsRestSearchFilter | undefined
                date?: DateRestSearchFilter | undefined
                includeSightingdb?: IncludeSightingDbRestSearchFlag | undefined
                tag?: TagName | undefined
                object_relation?: ObjectRelationRestSearchFilter | undefined
                threat_level_id?: ThreatLevelId | undefined
                extending?: ExtendingRestSearchFlag | undefined
                extended?: ExtendedRestSearchFlag | undefined
                returnFormat?: EventsRestSearchReturnFormat | undefined
              }
            }
            output: { response?: EventRestSearchList | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                value?: AttributeValue | undefined
                type?: AttributeType | undefined
                category?: AttributeCategory | undefined
                org?: OrganisationId | OrganisationName | undefined
                tags?: TagsRestSearchFilter | undefined
                event_tags?: TagsRestSearchFilter | undefined
                searchall?: SearchAllRestSearchFilter | undefined
                from?: DateRestSearchFilter | undefined
                to?: DateRestSearchFilter | undefined
                last?: LastRestSearchFilter | undefined
                eventid?: EventId | undefined
                withAttachments?: WithAttachmentsRestSearchFilter | undefined
                sharinggroup?: SharingGroupIDRestSearchFilter | undefined
                metadata?: MetadataRestSearchFilter | undefined
                uuid?: UUID | undefined
                publish_timestamp?: Timestamp | undefined
                timestamp?: Timestamp | undefined
                published?: PublishedFlag | undefined
                enforceWarninglist?: EnforceWarninglistRestSearchFilter | undefined
                sgReferenceOnly?: boolean | undefined
                requested_attributes?: RequestedAttributesRestSearchFilter | undefined
                includeContext?: IncludeContextRestSearchFlag | undefined
                headerless?: HeaderlessRestSearchFlag | undefined
                includeWarninglistHits?: IncludeWarninglistHitsRestSearchFlag | undefined
                attackGalaxy?: AttackGalaxyRestSearchFilter | undefined
                to_ids?: ToIDS | undefined
                deleted?: SoftDeletedFlagValuesToInclude | undefined
                excludeLocalTags?: ExcludeLocalTagsRestSearchFilter | undefined
                date?: DateRestSearchFilter | undefined
                includeSightingdb?: IncludeSightingDbRestSearchFlag | undefined
                tag?: TagName | undefined
                object_relation?: ObjectRelationRestSearchFilter | undefined
                threat_level_id?: ThreatLevelId | undefined
                extending?: ExtendingRestSearchFlag | undefined
                extended?: ExtendedRestSearchFlag | undefined
                returnFormat?: EventsRestSearchReturnFormat | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                value?: AttributeValue | undefined
                type?: AttributeType | undefined
                category?: AttributeCategory | undefined
                org?: OrganisationId | OrganisationName | undefined
                tags?: TagsRestSearchFilter | undefined
                event_tags?: TagsRestSearchFilter | undefined
                searchall?: SearchAllRestSearchFilter | undefined
                from?: DateRestSearchFilter | undefined
                to?: DateRestSearchFilter | undefined
                last?: LastRestSearchFilter | undefined
                eventid?: EventId | undefined
                withAttachments?: WithAttachmentsRestSearchFilter | undefined
                sharinggroup?: SharingGroupIDRestSearchFilter | undefined
                metadata?: MetadataRestSearchFilter | undefined
                uuid?: UUID | undefined
                publish_timestamp?: Timestamp | undefined
                timestamp?: Timestamp | undefined
                published?: PublishedFlag | undefined
                enforceWarninglist?: EnforceWarninglistRestSearchFilter | undefined
                sgReferenceOnly?: boolean | undefined
                requested_attributes?: RequestedAttributesRestSearchFilter | undefined
                includeContext?: IncludeContextRestSearchFlag | undefined
                headerless?: HeaderlessRestSearchFlag | undefined
                includeWarninglistHits?: IncludeWarninglistHitsRestSearchFlag | undefined
                attackGalaxy?: AttackGalaxyRestSearchFilter | undefined
                to_ids?: ToIDS | undefined
                deleted?: SoftDeletedFlagValuesToInclude | undefined
                excludeLocalTags?: ExcludeLocalTagsRestSearchFilter | undefined
                date?: DateRestSearchFilter | undefined
                includeSightingdb?: IncludeSightingDbRestSearchFlag | undefined
                tag?: TagName | undefined
                object_relation?: ObjectRelationRestSearchFilter | undefined
                threat_level_id?: ThreatLevelId | undefined
                extending?: ExtendingRestSearchFlag | undefined
                extended?: ExtendedRestSearchFlag | undefined
                returnFormat?: EventsRestSearchReturnFormat | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/add': {
      $post:
        | { input: { json: EventNoId }; output: EditedEvent; outputFormat: 'json'; status: 200 }
        | {
            input: { json: EventNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: EventNoId }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/events/edit/:eventId': {
      $put:
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EventNoId }
            output: EditedEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EventNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EventNoId }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/delete/:eventId': {
      $delete:
        | {
            input: { param: { eventId: EventId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events': {
      $get:
        | { input: {}; output: ExtendedEventList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/events/index': {
      $post:
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                sort?: SortSearchField | undefined
                direction?: DirectionSearchField | undefined
                minimal?: (boolean | null) | undefined
                attribute?: (string | null) | undefined
                eventid?: EventId | undefined
                datefrom?: (string | null) | undefined
                dateuntil?: (string | null) | undefined
                org?: (string | null) | undefined
                eventinfo?: (string | null) | undefined
                tag?: TagName | undefined
                tags?: (TagName[] | null) | undefined
                distribution?: DistributionLevelId | undefined
                sharinggroup?: SharingGroupId | undefined
                analysis?: AnalysisLevelId | undefined
                threatlevel?: ThreatLevelId | undefined
                extending?: ExtendingRestSearchFlag | undefined
                extended?: ExtendedRestSearchFlag | undefined
                email?: (string | null) | undefined
                hasproposal?: (string | null) | undefined
                timestamp?: (string | null) | undefined
                publish_timestamp?: (string | null) | undefined
                searchDatefrom?: (string | null) | undefined
                searchDateuntil?: (string | null) | undefined
              }
            }
            output: ExtendedEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                sort?: SortSearchField | undefined
                direction?: DirectionSearchField | undefined
                minimal?: (boolean | null) | undefined
                attribute?: (string | null) | undefined
                eventid?: EventId | undefined
                datefrom?: (string | null) | undefined
                dateuntil?: (string | null) | undefined
                org?: (string | null) | undefined
                eventinfo?: (string | null) | undefined
                tag?: TagName | undefined
                tags?: (TagName[] | null) | undefined
                distribution?: DistributionLevelId | undefined
                sharinggroup?: SharingGroupId | undefined
                analysis?: AnalysisLevelId | undefined
                threatlevel?: ThreatLevelId | undefined
                extending?: ExtendingRestSearchFlag | undefined
                extended?: ExtendedRestSearchFlag | undefined
                email?: (string | null) | undefined
                hasproposal?: (string | null) | undefined
                timestamp?: (string | null) | undefined
                publish_timestamp?: (string | null) | undefined
                searchDatefrom?: (string | null) | undefined
                searchDateuntil?: (string | null) | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                sort?: SortSearchField | undefined
                direction?: DirectionSearchField | undefined
                minimal?: (boolean | null) | undefined
                attribute?: (string | null) | undefined
                eventid?: EventId | undefined
                datefrom?: (string | null) | undefined
                dateuntil?: (string | null) | undefined
                org?: (string | null) | undefined
                eventinfo?: (string | null) | undefined
                tag?: TagName | undefined
                tags?: (TagName[] | null) | undefined
                distribution?: DistributionLevelId | undefined
                sharinggroup?: SharingGroupId | undefined
                analysis?: AnalysisLevelId | undefined
                threatlevel?: ThreatLevelId | undefined
                extending?: ExtendingRestSearchFlag | undefined
                extended?: ExtendedRestSearchFlag | undefined
                email?: (string | null) | undefined
                hasproposal?: (string | null) | undefined
                timestamp?: (string | null) | undefined
                publish_timestamp?: (string | null) | undefined
                searchDatefrom?: (string | null) | undefined
                searchDateuntil?: (string | null) | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/view/:eventId': {
      $get:
        | {
            input: { param: { eventId: EventId | UUID } }
            output: { Event?: ExtendedEvent | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/publish/:eventId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/unpublish/:eventId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/addTag/:eventId/:tagId/local:{local}': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID; tagId: TagId; local: IsLocal } }
            output: {
              saved?: boolean | undefined
              success?: (string | null) | undefined
              check_publish?: (boolean | null) | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID; tagId: TagId; local: IsLocal } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID; tagId: TagId; local: IsLocal } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/removeTag/:eventId/:tagId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID; tagId: TagId } }
            output: {
              saved?: boolean | undefined
              success?: (string | null) | undefined
              check_publish?: (boolean | null) | undefined
              errors?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID; tagId: TagId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID; tagId: TagId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/events/enrichEvent/:eventId': {
      $post:
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EnrichModulesList }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              data?: string | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EnrichModulesList }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } } & { json: EnrichModulesList }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxies': {
      $get:
        | {
            input: {}
            output: { Galaxy?: Galaxy | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: { value?: GalaxyValueSearchFilter | undefined } }
            output: { Galaxy?: Galaxy | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: GalaxyValueSearchFilter | undefined } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { value?: GalaxyValueSearchFilter | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxies/view/:galaxyId': {
      $get:
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: ExtendedGalaxy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxies/update': {
      $post:
        | {
            input: {}
            output: {
              saved?: (boolean | null) | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/galaxies/delete/:galaxyId': {
      $delete:
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: {
              saved?: (boolean | null) | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxies/import': {
      $post:
        | {
            input: { json: ImportGalaxyClusterItem[] }
            output: {
              saved?: (boolean | null) | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImportGalaxyClusterItem[] }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ImportGalaxyClusterItem[] }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ImportGalaxyClusterItem[] }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxies/export/:galaxyId': {
      $post:
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                Galaxy?:
                  | {
                      default?: boolean | undefined
                      custom?: boolean | undefined
                      distribution?: DistributionLevelId | DistributionLevelId[] | undefined
                      format?: 'default' | 'misp-galaxy' | undefined
                      download?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: GalaxyCluster[] | GalaxyMispFormat
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                Galaxy?:
                  | {
                      default?: boolean | undefined
                      custom?: boolean | undefined
                      distribution?: DistributionLevelId | DistributionLevelId[] | undefined
                      format?: 'default' | 'misp-galaxy' | undefined
                      download?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                Galaxy?:
                  | {
                      default?: boolean | undefined
                      custom?: boolean | undefined
                      distribution?: DistributionLevelId | DistributionLevelId[] | undefined
                      format?: 'default' | 'misp-galaxy' | undefined
                      download?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                Galaxy?:
                  | {
                      default?: boolean | undefined
                      custom?: boolean | undefined
                      distribution?: DistributionLevelId | DistributionLevelId[] | undefined
                      format?: 'default' | 'misp-galaxy' | undefined
                      download?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxies/attachCluster/:attachTargetId/:attachTargetType/local:{local}': {
      $post:
        | {
            input: {
              param: {
                attachTargetId: EventId | AttributeId | TagCollectionId
                attachTargetType: 'event' | 'attribute' | 'tag_collection'
                local: IsLocal
              }
            } & { json: { Galaxy?: { target_id?: number | undefined } | undefined } }
            output: {
              saved?: boolean | undefined
              success?: string | undefined
              check_publish?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                attachTargetId: EventId | AttributeId | TagCollectionId
                attachTargetType: 'event' | 'attribute' | 'tag_collection'
                local: IsLocal
              }
            } & { json: { Galaxy?: { target_id?: number | undefined } | undefined } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                attachTargetId: EventId | AttributeId | TagCollectionId
                attachTargetType: 'event' | 'attribute' | 'tag_collection'
                local: IsLocal
              }
            } & { json: { Galaxy?: { target_id?: number | undefined } | undefined } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                attachTargetId: EventId | AttributeId | TagCollectionId
                attachTargetType: 'event' | 'attribute' | 'tag_collection'
                local: IsLocal
              }
            } & { json: { Galaxy?: { target_id?: number | undefined } | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/add/:galaxyId': {
      $post:
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & { json: GalaxyCluster }
            output: { GalaxyCluster?: GalaxyCluster | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & { json: GalaxyCluster }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & { json: GalaxyCluster }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & { json: GalaxyCluster }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/edit/:galaxyClusterId': {
      $put:
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } } & { json: GalaxyCluster }
            output: { GalaxyCluster?: GalaxyCluster | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } } & { json: GalaxyCluster }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } } & { json: GalaxyCluster }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } } & { json: GalaxyCluster }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/index/:galaxyId': {
      $get:
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: { GalaxyCluster?: GalaxyCluster | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                context?: 'all' | 'default' | 'org' | 'deleted' | undefined
                searchall?: string | undefined
              }
            }
            output: { GalaxyCluster?: GalaxyCluster | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                context?: 'all' | 'default' | 'org' | 'deleted' | undefined
                searchall?: string | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                context?: 'all' | 'default' | 'org' | 'deleted' | undefined
                searchall?: string | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyId: GalaxyId | UUID } } & {
              json: {
                context?: 'all' | 'default' | 'org' | 'deleted' | undefined
                searchall?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/view/:galaxyClusterId': {
      $get:
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: { GalaxyCluster?: ExtendedGalaxyCluster | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/publish/:galaxyClusterId': {
      $post:
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/unpublish/:galaxyClusterId': {
      $post:
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/delete/:galaxyClusterId': {
      $post:
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/galaxy_clusters/restore/:galaxyClusterId': {
      $post:
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { galaxyClusterId: GalaxyClusterId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/initiatePasswordReset/:userId/:firstTimeReset': {
      $post:
        | {
            input: { param: { userId: UserId; firstTimeReset: '0' | '1' } }
            output: { saved?: boolean | undefined; success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId; firstTimeReset: '0' | '1' } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId; firstTimeReset: '0' | '1' } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId; firstTimeReset: '0' | '1' } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/users/add': {
      $post:
        | { input: { json: UserNoId }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { json: UserNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: UserNoId }; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: { json: UserNoId }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/users/edit/:userId': {
      $put:
        | {
            input: { param: { userId: UserId } } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId } } & { json: User }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId } } & { json: User }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId } } & { json: User }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/users/delete/:userId': {
      $delete:
        | {
            input: { param: { userId: UserId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/users': {
      $get:
        | { input: {}; output: UserList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/users/view/:userId': {
      $get:
        | {
            input: { param: { userId: UserId } }
            output: ExtendedUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/totp_delete/:userId': {
      $delete:
        | {
            input: { param: { userId: UserId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId } }
            output: NotFoundUserTotpDeleteError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/organisations/add': {
      $post:
        | {
            input: { json: OrganisationNoId }
            output: Organisation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganisationNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrganisationNoId }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: OrganisationNoId }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/organisations/edit/:organisationId': {
      $put:
        | {
            input: { param: { organisationId: OrganisationId | UUID } } & {
              json: {
                name?: OrganisationName | undefined
                type?: OrganisationType | undefined
                nationality?: (string | null) | undefined
                sector?: (string | null) | undefined
                contacts?: (string | null) | undefined
                description?: (string | null) | undefined
                local?: (boolean | null) | undefined
                uuid?: (string | null) | undefined
                restricted_to_domain?: (string[] | null) | undefined
              }
            }
            output: Organisation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } } & {
              json: {
                name?: OrganisationName | undefined
                type?: OrganisationType | undefined
                nationality?: (string | null) | undefined
                sector?: (string | null) | undefined
                contacts?: (string | null) | undefined
                description?: (string | null) | undefined
                local?: (boolean | null) | undefined
                uuid?: (string | null) | undefined
                restricted_to_domain?: (string[] | null) | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } } & {
              json: {
                name?: OrganisationName | undefined
                type?: OrganisationType | undefined
                nationality?: (string | null) | undefined
                sector?: (string | null) | undefined
                contacts?: (string | null) | undefined
                description?: (string | null) | undefined
                local?: (boolean | null) | undefined
                uuid?: (string | null) | undefined
                restricted_to_domain?: (string[] | null) | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } } & {
              json: {
                name?: OrganisationName | undefined
                type?: OrganisationType | undefined
                nationality?: (string | null) | undefined
                sector?: (string | null) | undefined
                contacts?: (string | null) | undefined
                description?: (string | null) | undefined
                local?: (boolean | null) | undefined
                uuid?: (string | null) | undefined
                restricted_to_domain?: (string[] | null) | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/organisations/delete/:organisationId': {
      $delete:
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/logs': {
      $post:
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: LogId | undefined
                title?: LogTitle | undefined
                created?: DateRestSearchFilter | DateIntervalRestSearchFilter | undefined
                model?: ModelName | undefined
                model_id?: ModelId | undefined
                action?: LogActionType | undefined
                user_id?: UserId | undefined
                change?: string | undefined
                email?: string | undefined
                org?: string | undefined
                description?: string | undefined
                ip?: string | undefined
              }
            }
            output: { Log?: Log | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: LogId | undefined
                title?: LogTitle | undefined
                created?: DateRestSearchFilter | DateIntervalRestSearchFilter | undefined
                model?: ModelName | undefined
                model_id?: ModelId | undefined
                action?: LogActionType | undefined
                user_id?: UserId | undefined
                change?: string | undefined
                email?: string | undefined
                org?: string | undefined
                description?: string | undefined
                ip?: string | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: LogId | undefined
                title?: LogTitle | undefined
                created?: DateRestSearchFilter | DateIntervalRestSearchFilter | undefined
                model?: ModelName | undefined
                model_id?: ModelId | undefined
                action?: LogActionType | undefined
                user_id?: UserId | undefined
                change?: string | undefined
                email?: string | undefined
                org?: string | undefined
                description?: string | undefined
                ip?: string | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: LogId | undefined
                title?: LogTitle | undefined
                created?: DateRestSearchFilter | DateIntervalRestSearchFilter | undefined
                model?: ModelName | undefined
                model_id?: ModelId | undefined
                action?: LogActionType | undefined
                user_id?: UserId | undefined
                change?: string | undefined
                email?: string | undefined
                org?: string | undefined
                description?: string | undefined
                ip?: string | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organisations': {
      $get:
        | { input: {}; output: OrganisationList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organisations/view/:organisationId': {
      $get:
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: Organisation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organisationId: OrganisationId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/add': {
      $post:
        | {
            input: { json: ServerNoId }
            output: { Server?: Server | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ServerNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ServerNoId }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: ServerNoId }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/edit/:serverId': {
      $put:
        | {
            input: { param: { serverId: ServerId | UUID } } & { json: Server }
            output: { Server?: Server | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serverId: ServerId | UUID } } & { json: Server }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serverId: ServerId | UUID } } & { json: Server }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serverId: ServerId | UUID } } & { json: Server }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/delete/:serverId': {
      $post:
        | {
            input: { param: { serverId: ServerId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serverId: ServerId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serverId: ServerId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serverId: ServerId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers': {
      $get:
        | { input: {}; output: ServerList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/pull/:serverId/:pullTechnique': {
      $get:
        | {
            input: {
              param: {
                serverId: ServerId | UUID
                pullTechnique: 'full' | 'incremental' | 'pull_relevant_clusters'
              }
            }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                serverId: ServerId | UUID
                pullTechnique: 'full' | 'incremental' | 'pull_relevant_clusters'
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                serverId: ServerId | UUID
                pullTechnique: 'full' | 'incremental' | 'pull_relevant_clusters'
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                serverId: ServerId | UUID
                pullTechnique: 'full' | 'incremental' | 'pull_relevant_clusters'
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/push/:serverId/:pushTechnique': {
      $get:
        | {
            input: { param: { serverId: ServerId | UUID; pushTechnique: 'full' | 'incremental' } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serverId: ServerId | UUID; pushTechnique: 'full' | 'incremental' } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serverId: ServerId | UUID; pushTechnique: 'full' | 'incremental' } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serverId: ServerId | UUID; pushTechnique: 'full' | 'incremental' } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/getVersion': {
      $get:
        | {
            input: {}
            output: {
              version?: string | undefined
              perm_sync?: (boolean | null) | undefined
              perm_sighting?: (boolean | null) | undefined
              perm_galaxy_editor?: (boolean | null) | undefined
              request_encoding?: ('gzip' | 'br')[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/getPyMISPVersion': {
      $get:
        | { input: {}; output: { version?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/serverSettings': {
      $get:
        | {
            input: {}
            output: {
              version?:
                | {
                    current?: string | undefined
                    newest?: string | undefined
                    upToDate?: string | undefined
                  }
                | undefined
              phpSettings?:
                | {
                    max_execution_time?: PhpServerSetting | undefined
                    memory_limit?: PhpServerSetting | undefined
                    upload_max_filesize?: PhpServerSetting | undefined
                    post_max_size?: PhpServerSetting | undefined
                  }
                | undefined
              gpgStatus?: string | undefined
              proxyStatus?: string | undefined
              zmqStatus?: number | undefined
              stix?:
                | {
                    operational?: number | undefined
                    stix?: ServerPackageVersion | undefined
                    cybox?: ServerPackageVersion | undefined
                    mixbox?: ServerPackageVersion | undefined
                    maec?: ServerPackageVersion | undefined
                    stix2?: ServerPackageVersion | undefined
                    pymisp?: ServerPackageVersion | undefined
                  }
                | undefined
              moduleStatus?:
                | {
                    Enrichment?: number | undefined
                    Import?: number | undefined
                    Export?: number | undefined
                    Cortex?: number | undefined
                  }
                | undefined
              writeableDirs?: { [x: string]: unknown } | undefined
              writeableFiles?: { [x: string]: unknown } | undefined
              readableFiles?: { [x: string]: unknown } | undefined
              dbDiagnostics?: { [x: string]: unknown } | undefined
              dbSchemaDiagnostics?:
                | {
                    dataSource?: string | undefined
                    actual_db_version?: string | undefined
                    checked_table_column?: string[] | undefined
                    diagnostic?: { [x: string]: unknown } | undefined
                    diagnostic_index?:
                      | { [x: string]: unknown }
                      | { [x: string]: unknown }[]
                      | undefined
                    expected_db_version?: string | undefined
                    error?: string | undefined
                    update_locked?: boolean | undefined
                    remaining_lock_time?: number | undefined
                    update_fail_number_reached?: boolean | undefined
                    indexes?: { [x: string]: unknown } | undefined
                    columnPerTable?: { [x: string]: unknown } | undefined
                  }
                | undefined
              redisInfo?: { [x: string]: unknown } | undefined
              finalSettings?: MispSetting[] | undefined
              extensions?:
                | {
                    cli?: { phpversion?: string | undefined } | undefined
                    extensions?: { [x: string]: unknown } | undefined
                  }
                | undefined
              workers?:
                | {
                    cache?: WorkersStatus | undefined
                    default?: WorkersStatus | undefined
                    email?: WorkersStatus | undefined
                    prio?: WorkersStatus | undefined
                    update?: WorkersStatus | undefined
                    scheduler?: WorkersStatus | undefined
                    proc_accessible?: boolean | undefined
                    controls?: boolean | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/getWorkers': {
      $get:
        | {
            input: {}
            output: {
              cache?: WorkersStatus | undefined
              default?: WorkersStatus | undefined
              email?: WorkersStatus | undefined
              prio?: WorkersStatus | undefined
              update?: WorkersStatus | undefined
              scheduler?: WorkersStatus | undefined
              proc_accessible?: boolean | undefined
              controls?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/startWorker/:workerType': {
      $post:
        | {
            input: {
              param: { workerType: 'default' | 'email' | 'scheduler' | 'cache' | 'prio' | 'update' }
            }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { workerType: 'default' | 'email' | 'scheduler' | 'cache' | 'prio' | 'update' }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { workerType: 'default' | 'email' | 'scheduler' | 'cache' | 'prio' | 'update' }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { workerType: 'default' | 'email' | 'scheduler' | 'cache' | 'prio' | 'update' }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/stopWorker/:workerPid': {
      $post:
        | {
            input: { param: { workerPid: string } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workerPid: string } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workerPid: string } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workerPid: string } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/killAllWorkers': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/restartWorkers': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/restartDeadWorkers': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/update': {
      $post:
        | {
            input: {}
            output: { results?: (UpdateServerResultItem | string)[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/updateJSON': {
      $post:
        | {
            input: {}
            output:
              | {
                  Galaxy?: ({ [x: string]: unknown } | null) | undefined
                  Noticelist?: ({ [x: string]: unknown } | null) | undefined
                  Warninglist?: ({ [x: string]: unknown } | null) | undefined
                  Taxonomy?: ({ [x: string]: unknown } | null) | undefined
                  ObjectTemplate?: ({ [x: string]: unknown } | null) | undefined
                  ObjectRelationship?: ({ [x: string]: unknown } | null) | undefined
                }
              | { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/cache': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/createSync': {
      $post:
        | {
            input: {}
            output: {
              Server?:
                | {
                    url?: string | undefined
                    uuid?: UUID | undefined
                    authkey?: AuthKeyRaw | undefined
                    Organisation?:
                      | { name?: OrganisationName | undefined; uuid?: UUID | undefined }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/getInstanceUUID': {
      $get:
        | { input: {}; output: { uuid?: UUID | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/servers/getSetting/:settingName': {
      $get:
        | {
            input: { param: { settingName: string } }
            output: MispSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingName: string } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { settingName: string } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { settingName: string } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/serverSettingsEdit/:settingName': {
      $post:
        | {
            input: { param: { settingName: string } } & {
              json: { value?: string | boolean | number | { [x: string]: unknown } | undefined }
            }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settingName: string } } & {
              json: { value?: string | boolean | number | { [x: string]: unknown } | undefined }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { settingName: string } } & {
              json: { value?: string | boolean | number | { [x: string]: unknown } | undefined }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { settingName: string } } & {
              json: { value?: string | boolean | number | { [x: string]: unknown } | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/servers/import': {
      $post:
        | {
            input: {
              json: {
                name?: ServerName | undefined
                url?: string | undefined
                uuid?: UUID | undefined
                authkey?: AuthKeyRaw | undefined
                Organisation?: { name?: OrganisationName | undefined } | undefined
              }
            }
            output: { Server?: Server | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: ServerName | undefined
                url?: string | undefined
                uuid?: UUID | undefined
                authkey?: AuthKeyRaw | undefined
                Organisation?: { name?: OrganisationName | undefined } | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name?: ServerName | undefined
                url?: string | undefined
                uuid?: UUID | undefined
                authkey?: AuthKeyRaw | undefined
                Organisation?: { name?: OrganisationName | undefined } | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name?: ServerName | undefined
                url?: string | undefined
                uuid?: UUID | undefined
                authkey?: AuthKeyRaw | undefined
                Organisation?: { name?: OrganisationName | undefined } | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups/add': {
      $post:
        | {
            input: { json: SharingGroupNoId }
            output: {
              SharingGroup?: SharingGroup | undefined
              Organisation?: Organisation | undefined
              SharingGroupOrg?: SharingGroupOrganisation[] | undefined
              SharingGroupServer?: SharingGroupServer[] | undefined
              editable?: boolean | undefined
              deletable?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SharingGroupNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SharingGroupNoId }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: SharingGroupNoId }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sharing_groups/edit/:sharingGroupId': {
      $post:
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } } & { json: SharingGroup }
            output: {
              SharingGroup?: SharingGroup | undefined
              Organisation?: Organisation | undefined
              SharingGroupOrg?: SharingGroupOrganisation[] | undefined
              SharingGroupServer?: SharingGroupServer[] | undefined
              editable?: boolean | undefined
              deletable?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } } & { json: SharingGroup }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } } & { json: SharingGroup }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } } & { json: SharingGroup }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups/delete/:sharingGroupId': {
      $delete:
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups': {
      $get:
        | {
            input: {}
            output: { response?: SharingGroupListItem[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sharing_groups/view/:sharingGroupId': {
      $get:
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: {
              SharingGroup?: SharingGroup | undefined
              Organisation?: Organisation | undefined
              SharingGroupOrg?: SharingGroupOrganisation[] | undefined
              SharingGroupServer?: SharingGroupServer[] | undefined
              editable?: boolean | undefined
              deletable?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups/addOrg/:sharingGroupId/:organisationId': {
      $post:
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups/removeOrg/:sharingGroupId/:organisationId': {
      $post:
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                sharingGroupId: SharingGroupId | UUID
                organisationId: OrganisationId | UUID
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups/addServer/:sharingGroupId/:serverId': {
      $post:
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID; serverId: ServerId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID; serverId: ServerId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID; serverId: ServerId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupId: SharingGroupId | UUID; serverId: ServerId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_groups/removeServer/:sharingGroupServerId/:serverId': {
      $post:
        | {
            input: {
              param: { sharingGroupServerId: SharingGroupServerId; serverId: ServerId | UUID }
            }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { sharingGroupServerId: SharingGroupServerId; serverId: ServerId | UUID }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { sharingGroupServerId: SharingGroupServerId; serverId: ServerId | UUID }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { sharingGroupServerId: SharingGroupServerId; serverId: ServerId | UUID }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/add': {
      $post:
        | {
            input: { json: SharingGroupBlueprintAdd }
            output: { SharingGroupBlueprint?: FullSharingGroupBlueprint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SharingGroupBlueprintAdd }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/delete/:sharingGroupBlueprintId': {
      $delete:
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/detach/:sharingGroupBlueprintId': {
      $post:
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/edit/:sharingGroupBlueprintId': {
      $post:
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } } & {
              json: { SharingGroupBlueprint?: SharingGroupBlueprintEdit | undefined }
            }
            output: { SharingGroupBlueprint?: FullSharingGroupBlueprint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } } & {
              json: { SharingGroupBlueprint?: SharingGroupBlueprintEdit | undefined }
            }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } } & {
              json: { SharingGroupBlueprint?: SharingGroupBlueprintEdit | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/execute/:sharingGroupBlueprintId': {
      $post:
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/index': {
      $get:
        | {
            input: {}
            output: { SharingGroupBlueprint?: FullSharingGroupBlueprint | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sharing_group_blueprints/view/:sharingGroupBlueprintId': {
      $get:
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: { SharingGroupBlueprint?: FullSharingGroupBlueprint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sharing_group_blueprints/viewOrgs/:sharingGroupBlueprintId': {
      $get:
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              Organisation?:
                | {
                    id?: OrganisationId | undefined
                    uuid?: UUID | undefined
                    name?: string | undefined
                    sector?: string | undefined
                    type?: string | undefined
                    nationality?: string | undefined
                  }
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sharingGroupBlueprintId: SharingGroupId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds': {
      $get:
        | { input: {}; output: { Feed?: Feed | undefined }[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/feeds/view/:feedId': {
      $get:
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: { Feed?: Feed | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/add': {
      $post:
        | {
            input: {
              json: {
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: { Feed?: Feed | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/edit/:feedId': {
      $put:
        | {
            input: { param: { feedId: FeedId | UUID } } & {
              json: {
                id?: FeedId | undefined
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: { Feed?: Feed | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feedId: FeedId | UUID } } & {
              json: {
                id?: FeedId | undefined
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { feedId: FeedId | UUID } } & {
              json: {
                id?: FeedId | undefined
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { feedId: FeedId | UUID } } & {
              json: {
                id?: FeedId | undefined
                name?: FeedName | undefined
                provider?: FeedProvider | undefined
                url?: FeedUrl | undefined
                rules?: FeedRules | undefined
                enabled?: FeedEnabledFlag | undefined
                distribution?: DistributionLevelId | undefined
                sharing_group_id?: SharingGroupId | undefined
                tag_id?: TagId | undefined
                source_format?: FeedSourceFormat | undefined
                fixed_event?: FeedFixedEvent | undefined
                delta_merge?: FeedDeltaMergeFlag | undefined
                event_id?: EventId | undefined
                publish?: PublishedFlag | undefined
                override_ids?: FeedOverrideIDSFlag | undefined
                input_source?: FeedInputSource | undefined
                delete_local_file?: FeedDeleteLocalFileFlag | undefined
                lookup_visible?: FeedLookupVisibleFlag | undefined
                headers?: FeedHeaders | undefined
                caching_enabled?: FeedCachingEnabledFlag | undefined
                force_to_ids?: FeedForceToIDSFlag | undefined
                orgc_id?: OrganisationId | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/enable/:feedId': {
      $post:
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/disable/:feedId': {
      $post:
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/cacheFeeds/:cacheFeedsScope': {
      $post:
        | {
            input: { param: { cacheFeedsScope: 'all' | 'csv' | 'freetext' } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cacheFeedsScope: 'all' | 'csv' | 'freetext' } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cacheFeedsScope: 'all' | 'csv' | 'freetext' } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cacheFeedsScope: 'all' | 'csv' | 'freetext' } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/fetchFromFeed/:feedId': {
      $post:
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: { result?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { feedId: FeedId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/feeds/fetchFromAllFeeds': {
      $post:
        | { input: {}; output: { result?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/warninglists': {
      $get:
        | {
            input: {}
            output: { Warninglists?: { Warninglist?: Warninglist | undefined }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            } & {
              form: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            }
            output: { Warninglists?: { Warninglist?: Warninglist | undefined }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            } & {
              form: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            } & {
              form: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            } & {
              form: { value?: (string | null) | undefined; enabled?: (boolean | null) | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/warninglists/toggleEnable': {
      $post:
        | {
            input: {
              json: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            } & {
              form: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            }
            output: { saved?: boolean | undefined; success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            } & {
              form: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            } & {
              form: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            } & {
              form: {
                id?: WarninglistsIdFilter | undefined
                name?: WarninglistsNameFilter | undefined
                enabled?: boolean | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/warninglists/view/:warninglistId': {
      $get:
        | {
            input: { param: { warninglistId: WarninglistId } }
            output: { Warninglist?: Warninglist | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { warninglistId: WarninglistId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { warninglistId: WarninglistId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { warninglistId: WarninglistId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/warninglists/checkValue': {
      $post:
        | {
            input: { json: string[] }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: string[] }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: string[] }; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: { json: string[] }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/warninglists/update': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: (boolean | null) | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/noticelists': {
      $get:
        | {
            input: {}
            output: { Noticelist?: Noticelist | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/noticelists/view/:noticelistId': {
      $get:
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: { Noticelist?: Noticelist | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/noticelists/toggleEnable/:noticelistId': {
      $post:
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { noticelistId: NoticelistId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/noticelists/update': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/objects/restsearch': {
      $post:
        | {
            input: { json: ObjectRestSearchFilter }
            output: { response?: ObjectRestSearchList[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ObjectRestSearchFilter }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ObjectRestSearchFilter }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/objects/add/:eventId/:objectTemplateId': {
      $post:
        | {
            input: {
              param: { eventId: EventId | UUID; objectTemplateId: ObjectTemplateId | UUID }
            } & {
              json: {
                Attribute?:
                  | {
                      category?: AttributeCategory | undefined
                      value?: AttributeValue | undefined
                      to_ids?: ToIDS | undefined
                      disable_correlation?: DisableCorrelationFlag | undefined
                      distribution?: DistributionLevelId | undefined
                      comment?: AttributeComment | undefined
                      object_relation?: ObjectRelation | undefined
                    }[]
                  | undefined
              }
            }
            output: { Object?: Object | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { eventId: EventId | UUID; objectTemplateId: ObjectTemplateId | UUID }
            } & {
              json: {
                Attribute?:
                  | {
                      category?: AttributeCategory | undefined
                      value?: AttributeValue | undefined
                      to_ids?: ToIDS | undefined
                      disable_correlation?: DisableCorrelationFlag | undefined
                      distribution?: DistributionLevelId | undefined
                      comment?: AttributeComment | undefined
                      object_relation?: ObjectRelation | undefined
                    }[]
                  | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { eventId: EventId | UUID; objectTemplateId: ObjectTemplateId | UUID }
            } & {
              json: {
                Attribute?:
                  | {
                      category?: AttributeCategory | undefined
                      value?: AttributeValue | undefined
                      to_ids?: ToIDS | undefined
                      disable_correlation?: DisableCorrelationFlag | undefined
                      distribution?: DistributionLevelId | undefined
                      comment?: AttributeComment | undefined
                      object_relation?: ObjectRelation | undefined
                    }[]
                  | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { eventId: EventId | UUID; objectTemplateId: ObjectTemplateId | UUID }
            } & {
              json: {
                Attribute?:
                  | {
                      category?: AttributeCategory | undefined
                      value?: AttributeValue | undefined
                      to_ids?: ToIDS | undefined
                      disable_correlation?: DisableCorrelationFlag | undefined
                      distribution?: DistributionLevelId | undefined
                      comment?: AttributeComment | undefined
                      object_relation?: ObjectRelation | undefined
                    }[]
                  | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/objects/view/:objectId': {
      $get:
        | {
            input: { param: { objectId: ObjectId | UUID } }
            output: { Object?: ExtendedObject | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: ObjectId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { objectId: ObjectId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { objectId: ObjectId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/objects/delete/:objectId/:hardDelete': {
      $delete:
        | {
            input: { param: { objectId: ObjectId | UUID; hardDelete: '0' | '1' } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: ObjectId | UUID; hardDelete: '0' | '1' } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { objectId: ObjectId | UUID; hardDelete: '0' | '1' } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { objectId: ObjectId | UUID; hardDelete: '0' | '1' } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sightings/index/:eventId': {
      $get:
        | {
            input: { param: { eventId: EventId | UUID } }
            output: Sighting[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eventId: EventId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sightings/add': {
      $post:
        | {
            input: {
              json: {
                values?: AttributeValue[] | undefined
                timestamp?: NullableTimestamp | undefined
                filters?: AttributeRestSearchFilter | undefined
              }
            }
            output: Sighting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                values?: AttributeValue[] | undefined
                timestamp?: NullableTimestamp | undefined
                filters?: AttributeRestSearchFilter | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                values?: AttributeValue[] | undefined
                timestamp?: NullableTimestamp | undefined
                filters?: AttributeRestSearchFilter | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                values?: AttributeValue[] | undefined
                timestamp?: NullableTimestamp | undefined
                filters?: AttributeRestSearchFilter | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sightings/add/:attributeId': {
      $post:
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: Sighting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attributeId: AttributeId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sightings/delete/:sightingId': {
      $post:
        | {
            input: { param: { sightingId: SightingId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sightingId: SightingId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sightingId: SightingId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sightingId: SightingId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tags': {
      $get:
        | { input: {}; output: { Tag?: TagList | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tags/view/:tagId': {
      $get:
        | { input: { param: { tagId: TagId } }; output: Tag; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { tagId: TagId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tagId: TagId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tagId: TagId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tags/add': {
      $post:
        | { input: { json: TagNoId }; output: Tag; outputFormat: 'json'; status: 200 }
        | {
            input: { json: TagNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: TagNoId }; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: { json: TagNoId }; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tags/delete/:tagId': {
      $post:
        | {
            input: { param: { tagId: TagId } }
            output: {
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: TagId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tagId: TagId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tagId: TagId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tags/edit/:tagId': {
      $post:
        | {
            input: { param: { tagId: TagId } } & { json: TagNoId }
            output: { Tag?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: TagId } } & { json: TagNoId }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tagId: TagId } } & { json: TagNoId }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tagId: TagId } } & { json: TagNoId }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tags/search/:tagSearchTerm': {
      $get:
        | {
            input: { param: { tagSearchTerm: string } }
            output: ExtendedTag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagSearchTerm: string } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tagSearchTerm: string } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tagSearchTerm: string } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth_keys': {
      $get:
        | {
            input: {}
            output: {
              AuthKey?: AuthKey | undefined
              User?: { id?: UserId | undefined; email?: string | undefined } | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: AuthKeyId | undefined
                uuid?: UUID | undefined
                authkey_start?: string | undefined
                authkey_end?: string | undefined
                created?: DateRestSearchFilter | undefined
                expiration?: DateRestSearchFilter | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: string | undefined
                last_used?: DateRestSearchFilter | undefined
              }
            }
            output: {
              AuthKey?: AuthKey | undefined
              User?: { id?: UserId | undefined; email?: string | undefined } | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: AuthKeyId | undefined
                uuid?: UUID | undefined
                authkey_start?: string | undefined
                authkey_end?: string | undefined
                created?: DateRestSearchFilter | undefined
                expiration?: DateRestSearchFilter | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: string | undefined
                last_used?: DateRestSearchFilter | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: AuthKeyId | undefined
                uuid?: UUID | undefined
                authkey_start?: string | undefined
                authkey_end?: string | undefined
                created?: DateRestSearchFilter | undefined
                expiration?: DateRestSearchFilter | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: string | undefined
                last_used?: DateRestSearchFilter | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                page?: PageSearchFilter | undefined
                limit?: LimitSearchFilter | undefined
                id?: AuthKeyId | undefined
                uuid?: UUID | undefined
                authkey_start?: string | undefined
                authkey_end?: string | undefined
                created?: DateRestSearchFilter | undefined
                expiration?: DateRestSearchFilter | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: string | undefined
                last_used?: DateRestSearchFilter | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth_keys/add/:userId': {
      $post:
        | {
            input: { param: { userId: UserId } } & {
              json: {
                uuid?: UUID | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: { AuthKey?: AuthKey | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId } } & {
              json: {
                uuid?: UUID | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId } } & {
              json: {
                uuid?: UUID | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId } } & {
              json: {
                uuid?: UUID | undefined
                read_only?: IsReadOnly | undefined
                user_id?: UserId | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth_keys/view/:authKeyId': {
      $get:
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: {
              AuthKey?: AuthKey | undefined
              User?:
                | {
                    id?: UserId | undefined
                    org_id?: {} | undefined
                    email?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth_keys/edit/:authKeyId': {
      $post:
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } } & {
              json: {
                read_only?: IsReadOnly | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: {
              AuthKey?: AuthKey | undefined
              User?:
                | {
                    id?: UserId | undefined
                    org_id?: {} | undefined
                    email?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } } & {
              json: {
                read_only?: IsReadOnly | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } } & {
              json: {
                read_only?: IsReadOnly | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } } & {
              json: {
                read_only?: IsReadOnly | undefined
                comment?: string | undefined
                allowed_ips?: (string[] | null) | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth_keys/delete/:authKeyId': {
      $delete:
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { authKeyId: AuthKeyId | UUID } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user_settings': {
      $get:
        | {
            input: {}
            output: { UserSetting?: UserSetting | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: {
                id?: UserSettingId | undefined
                setting?: UserSettingName | undefined
                user_id?: UserId | undefined
              }
            }
            output: { UserSetting?: UserSetting | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: UserSettingId | undefined
                setting?: UserSettingName | undefined
                user_id?: UserId | undefined
              }
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                id?: UserSettingId | undefined
                setting?: UserSettingName | undefined
                user_id?: UserId | undefined
              }
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                id?: UserSettingId | undefined
                setting?: UserSettingName | undefined
                user_id?: UserId | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user_settings/view/:userSettingId': {
      $get:
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: { UserSetting?: UserSetting | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user_settings/setSetting/:userId/:userSettingName': {
      $post:
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } } & {
              json:
                | DashboardUserSetting
                | PublishAlertFilterUserSetting
                | DashboardAccessUserSetting
                | HomepageUserSetting
                | DefaultRestSearchParametersUserSetting
                | TagNumericalValueOverrideUserSetting
                | EventIndexHideColumnsUserSetting
            }
            output: { UserSetting?: UserSetting | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } } & {
              json:
                | DashboardUserSetting
                | PublishAlertFilterUserSetting
                | DashboardAccessUserSetting
                | HomepageUserSetting
                | DefaultRestSearchParametersUserSetting
                | TagNumericalValueOverrideUserSetting
                | EventIndexHideColumnsUserSetting
            }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } } & {
              json:
                | DashboardUserSetting
                | PublishAlertFilterUserSetting
                | DashboardAccessUserSetting
                | HomepageUserSetting
                | DefaultRestSearchParametersUserSetting
                | TagNumericalValueOverrideUserSetting
                | EventIndexHideColumnsUserSetting
            }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } } & {
              json:
                | DashboardUserSetting
                | PublishAlertFilterUserSetting
                | DashboardAccessUserSetting
                | HomepageUserSetting
                | DefaultRestSearchParametersUserSetting
                | TagNumericalValueOverrideUserSetting
                | EventIndexHideColumnsUserSetting
            }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user_settings/getSetting/:userId/:userSettingName': {
      $get:
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } }
            output: { UserSetting?: UserSetting | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: UserId; userSettingName: UserSettingName } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user_settings/delete/:userSettingId': {
      $delete:
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userSettingId: UserSettingId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/taxonomies': {
      $get:
        | {
            input: {}
            output: {
              Taxonomy?: Taxonomy | undefined
              total_count?: number | undefined
              current_count?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/taxonomies/view/:taxonomyId': {
      $get:
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: { Taxonomy?: Taxonomy | undefined; entries?: TaxonomyEntry[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/taxonomies/enable/:taxonomyId': {
      $post:
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/taxonomies/disable/:taxonomyId': {
      $post:
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/taxonomies/update': {
      $post:
        | {
            input: {}
            output: {
              saved?: boolean | undefined
              success?: boolean | undefined
              name?: string | undefined
              message?: string | undefined
              url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedApiError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundApiError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ApiError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/taxonomies/taxonomy_tags/:taxonomyId': {
      $get:
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: {
              Taxonomy?: Taxonomy | undefined
              entries?: ExtendedTaxonomyEntry[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/taxonomies/export/:taxonomyId': {
      $get:
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: {
              namespace?: TaxonomyNamespace | undefined
              description?: TaxonomyDescription | undefined
              version?: number | undefined
              exclusive?: boolean | undefined
              predicates?: TaxonomyPredicateExport[] | undefined
              values?: TaxonomyValueExport[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: UnauthorizedApiError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: NotFoundApiError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taxonomyId: TaxonomyId } }
            output: ApiError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
