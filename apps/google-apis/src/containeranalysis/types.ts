type Empty = { [x: string]: unknown }
type Signature = { publicKeyId?: string | undefined; signature?: string | undefined }
type GenericSignedAttestation = {
  contentType?: 'CONTENT_TYPE_UNSPECIFIED' | 'SIMPLE_SIGNING_JSON' | undefined
  serializedPayload?: string | undefined
  signatures?: Signature[] | undefined
}
type PgpSignedAttestation = {
  contentType?: 'CONTENT_TYPE_UNSPECIFIED' | 'SIMPLE_SIGNING_JSON' | undefined
  pgpKeyId?: string | undefined
  signature?: string | undefined
}
type Attestation = {
  genericSignedAttestation?: GenericSignedAttestation | undefined
  pgpSignedAttestation?: PgpSignedAttestation | undefined
}
type Details = { attestation?: Attestation | undefined }
type Artifact = {
  checksum?: string | undefined
  id?: string | undefined
  names?: string[] | undefined
}
type Command = {
  args?: string[] | undefined
  dir?: string | undefined
  env?: string[] | undefined
  id?: string | undefined
  name?: string | undefined
  waitFor?: string[] | undefined
}
type AliasContext = {
  kind?: 'KIND_UNSPECIFIED' | 'FIXED' | 'MOVABLE' | 'OTHER' | undefined
  name?: string | undefined
}
type ProjectRepoId = { projectId?: string | undefined; repoName?: string | undefined }
type RepoId = { projectRepoId?: ProjectRepoId | undefined; uid?: string | undefined }
type CloudRepoSourceContext = {
  aliasContext?: AliasContext | undefined
  repoId?: RepoId | undefined
  revisionId?: string | undefined
}
type GerritSourceContext = {
  aliasContext?: AliasContext | undefined
  gerritProject?: string | undefined
  hostUri?: string | undefined
  revisionId?: string | undefined
}
type GitSourceContext = { revisionId?: string | undefined; url?: string | undefined }
type SourceContext = {
  cloudRepo?: CloudRepoSourceContext | undefined
  gerrit?: GerritSourceContext | undefined
  git?: GitSourceContext | undefined
  labels?: { [x: string]: string } | undefined
}
type Hash = {
  type?: 'HASH_TYPE_UNSPECIFIED' | 'SHA256' | 'GO_MODULE_H1' | 'SHA512' | undefined
  value?: string | undefined
}
type FileHashes = { fileHash?: Hash[] | undefined }
type Source = {
  additionalContexts?: SourceContext[] | undefined
  artifactStorageSourceUri?: string | undefined
  context?: SourceContext | undefined
  fileHashes?: { [x: string]: FileHashes } | undefined
}
type BuildProvenance = {
  buildOptions?: { [x: string]: string } | undefined
  builderVersion?: string | undefined
  builtArtifacts?: Artifact[] | undefined
  commands?: Command[] | undefined
  createTime?: string | undefined
  creator?: string | undefined
  endTime?: string | undefined
  id?: string | undefined
  logsUri?: string | undefined
  projectId?: string | undefined
  sourceProvenance?: Source | undefined
  startTime?: string | undefined
  triggerId?: string | undefined
}
type GrafeasV1beta1BuildDetails = {
  provenance?: BuildProvenance | undefined
  provenanceBytes?: string | undefined
}
type Deployment = {
  address?: string | undefined
  config?: string | undefined
  deployTime?: string | undefined
  platform?: 'PLATFORM_UNSPECIFIED' | 'GKE' | 'FLEX' | 'CUSTOM' | undefined
  resourceUri?: string[] | undefined
  undeployTime?: string | undefined
  userEmail?: string | undefined
}
type GrafeasV1beta1DeploymentDetails = { deployment?: Deployment | undefined }
type Fingerprint = {
  v1Name?: string | undefined
  v2Blob?: string[] | undefined
  v2Name?: string | undefined
}
type Layer = {
  arguments?: string | undefined
  directive?:
    | 'DIRECTIVE_UNSPECIFIED'
    | 'MAINTAINER'
    | 'RUN'
    | 'CMD'
    | 'LABEL'
    | 'EXPOSE'
    | 'ENV'
    | 'ADD'
    | 'COPY'
    | 'ENTRYPOINT'
    | 'VOLUME'
    | 'USER'
    | 'WORKDIR'
    | 'ARG'
    | 'ONBUILD'
    | 'STOPSIGNAL'
    | 'HEALTHCHECK'
    | 'SHELL'
    | undefined
}
type Derived = {
  baseResourceUrl?: string | undefined
  distance?: number | undefined
  fingerprint?: Fingerprint | undefined
  layerInfo?: Layer[] | undefined
}
type GrafeasV1beta1ImageDetails = { derivedImage?: Derived | undefined }
type AnalysisCompleted = { analysisType?: string[] | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Discovered = {
  analysisCompleted?: AnalysisCompleted | undefined
  analysisError?: Status[] | undefined
  analysisStatus?:
    | 'ANALYSIS_STATUS_UNSPECIFIED'
    | 'PENDING'
    | 'SCANNING'
    | 'FINISHED_SUCCESS'
    | 'COMPLETE'
    | 'FINISHED_FAILED'
    | 'FINISHED_UNSUPPORTED'
    | undefined
  analysisStatusError?: Status | undefined
  continuousAnalysis?: 'CONTINUOUS_ANALYSIS_UNSPECIFIED' | 'ACTIVE' | 'INACTIVE' | undefined
  lastAnalysisTime?: string | undefined
}
type GrafeasV1beta1DiscoveryDetails = { discovered?: Discovered | undefined }
type EnvelopeSignature = { keyid?: string | undefined; sig?: string | undefined }
type Envelope = {
  payload?: string | undefined
  payloadType?: string | undefined
  signatures?: EnvelopeSignature[] | undefined
}
type License = { comments?: string | undefined; expression?: string | undefined }
type Version = {
  epoch?: number | undefined
  inclusive?: boolean | undefined
  kind?: 'VERSION_KIND_UNSPECIFIED' | 'NORMAL' | 'MINIMUM' | 'MAXIMUM' | undefined
  name?: string | undefined
  revision?: string | undefined
}
type Location = {
  cpeUri?: string | undefined
  path?: string | undefined
  version?: Version | undefined
}
type Installation = {
  architecture?: 'ARCHITECTURE_UNSPECIFIED' | 'X86' | 'X64' | undefined
  cpeUri?: string | undefined
  license?: License | undefined
  location?: Location[] | undefined
  name?: string | undefined
  packageType?: string | undefined
  version?: Version | undefined
}
type GrafeasV1beta1PackageDetails = { installation?: Installation | undefined }
type GrafeasV1beta1IntotoSignature = { keyid?: string | undefined; sig?: string | undefined }
type ByProducts = { customValues?: { [x: string]: string } | undefined }
type Environment = { customValues?: { [x: string]: string } | undefined }
type ArtifactHashes = { sha256?: string | undefined }
type GrafeasV1beta1IntotoArtifact = {
  hashes?: ArtifactHashes | undefined
  resourceUri?: string | undefined
}
type Link = {
  byproducts?: ByProducts | undefined
  command?: string[] | undefined
  environment?: Environment | undefined
  materials?: GrafeasV1beta1IntotoArtifact[] | undefined
  products?: GrafeasV1beta1IntotoArtifact[] | undefined
}
type GrafeasV1beta1IntotoDetails = {
  signatures?: GrafeasV1beta1IntotoSignature[] | undefined
  signed?: Link | undefined
}
type Resource = {
  contentHash?: Hash | undefined
  name?: string | undefined
  uri?: string | undefined
}
type DocumentOccurrence = {
  createTime?: string | undefined
  creatorComment?: string | undefined
  creators?: string[] | undefined
  documentComment?: string | undefined
  externalDocumentRefs?: string[] | undefined
  id?: string | undefined
  licenseListVersion?: string | undefined
  namespace?: string | undefined
  title?: string | undefined
}
type SbomReferenceIntotoPredicate = {
  digest?: { [x: string]: string } | undefined
  location?: string | undefined
  mimeType?: string | undefined
  referrerId?: string | undefined
}
type Subject = { digest?: { [x: string]: string } | undefined; name?: string | undefined }
type SbomReferenceIntotoPayload = {
  _type?: string | undefined
  predicate?: SbomReferenceIntotoPredicate | undefined
  predicateType?: string | undefined
  subject?: Subject[] | undefined
}
type SBOMReferenceOccurrence = {
  payload?: SbomReferenceIntotoPayload | undefined
  payloadType?: string | undefined
  signatures?: EnvelopeSignature[] | undefined
}
type FileOccurrence = {
  attributions?: string[] | undefined
  comment?: string | undefined
  contributors?: string[] | undefined
  copyright?: string | undefined
  filesLicenseInfo?: string[] | undefined
  id?: string | undefined
  licenseConcluded?: License | undefined
  notice?: string | undefined
}
type PackageInfoOccurrence = {
  comment?: string | undefined
  filename?: string | undefined
  homePage?: string | undefined
  id?: string | undefined
  licenseConcluded?: License | undefined
  packageType?: string | undefined
  sourceInfo?: string | undefined
  summaryDescription?: string | undefined
  title?: string | undefined
  version?: string | undefined
}
type RelationshipOccurrence = {
  comment?: string | undefined
  source?: string | undefined
  target?: string | undefined
  type?:
    | 'RELATIONSHIP_TYPE_UNSPECIFIED'
    | 'DESCRIBES'
    | 'DESCRIBED_BY'
    | 'CONTAINS'
    | 'CONTAINED_BY'
    | 'DEPENDS_ON'
    | 'DEPENDENCY_OF'
    | 'DEPENDENCY_MANIFEST_OF'
    | 'BUILD_DEPENDENCY_OF'
    | 'DEV_DEPENDENCY_OF'
    | 'OPTIONAL_DEPENDENCY_OF'
    | 'PROVIDED_DEPENDENCY_OF'
    | 'TEST_DEPENDENCY_OF'
    | 'RUNTIME_DEPENDENCY_OF'
    | 'EXAMPLE_OF'
    | 'GENERATES'
    | 'GENERATED_FROM'
    | 'ANCESTOR_OF'
    | 'DESCENDANT_OF'
    | 'VARIANT_OF'
    | 'DISTRIBUTION_ARTIFACT'
    | 'PATCH_FOR'
    | 'PATCH_APPLIED'
    | 'COPY_OF'
    | 'FILE_ADDED'
    | 'FILE_DELETED'
    | 'FILE_MODIFIED'
    | 'EXPANDED_FROM_ARCHIVE'
    | 'DYNAMIC_LINK'
    | 'STATIC_LINK'
    | 'DATA_FILE_OF'
    | 'TEST_CASE_OF'
    | 'BUILD_TOOL_OF'
    | 'DEV_TOOL_OF'
    | 'TEST_OF'
    | 'TEST_TOOL_OF'
    | 'DOCUMENTATION_OF'
    | 'OPTIONAL_COMPONENT_OF'
    | 'METAFILE_OF'
    | 'PACKAGE_OF'
    | 'AMENDS'
    | 'PREREQUISITE_FOR'
    | 'HAS_PREREQUISITE'
    | 'OTHER'
    | undefined
}
type CVSS = {
  attackComplexity?:
    | 'ATTACK_COMPLEXITY_UNSPECIFIED'
    | 'ATTACK_COMPLEXITY_LOW'
    | 'ATTACK_COMPLEXITY_HIGH'
    | 'ATTACK_COMPLEXITY_MEDIUM'
    | undefined
  attackVector?:
    | 'ATTACK_VECTOR_UNSPECIFIED'
    | 'ATTACK_VECTOR_NETWORK'
    | 'ATTACK_VECTOR_ADJACENT'
    | 'ATTACK_VECTOR_LOCAL'
    | 'ATTACK_VECTOR_PHYSICAL'
    | undefined
  authentication?:
    | 'AUTHENTICATION_UNSPECIFIED'
    | 'AUTHENTICATION_MULTIPLE'
    | 'AUTHENTICATION_SINGLE'
    | 'AUTHENTICATION_NONE'
    | undefined
  availabilityImpact?:
    | 'IMPACT_UNSPECIFIED'
    | 'IMPACT_HIGH'
    | 'IMPACT_LOW'
    | 'IMPACT_NONE'
    | 'IMPACT_PARTIAL'
    | 'IMPACT_COMPLETE'
    | undefined
  baseScore?: number | undefined
  confidentialityImpact?:
    | 'IMPACT_UNSPECIFIED'
    | 'IMPACT_HIGH'
    | 'IMPACT_LOW'
    | 'IMPACT_NONE'
    | 'IMPACT_PARTIAL'
    | 'IMPACT_COMPLETE'
    | undefined
  exploitabilityScore?: number | undefined
  impactScore?: number | undefined
  integrityImpact?:
    | 'IMPACT_UNSPECIFIED'
    | 'IMPACT_HIGH'
    | 'IMPACT_LOW'
    | 'IMPACT_NONE'
    | 'IMPACT_PARTIAL'
    | 'IMPACT_COMPLETE'
    | undefined
  privilegesRequired?:
    | 'PRIVILEGES_REQUIRED_UNSPECIFIED'
    | 'PRIVILEGES_REQUIRED_NONE'
    | 'PRIVILEGES_REQUIRED_LOW'
    | 'PRIVILEGES_REQUIRED_HIGH'
    | undefined
  scope?: 'SCOPE_UNSPECIFIED' | 'SCOPE_UNCHANGED' | 'SCOPE_CHANGED' | undefined
  userInteraction?:
    | 'USER_INTERACTION_UNSPECIFIED'
    | 'USER_INTERACTION_NONE'
    | 'USER_INTERACTION_REQUIRED'
    | undefined
}
type VulnerabilityLocation = {
  cpeUri?: string | undefined
  package?: string | undefined
  version?: Version | undefined
}
type PackageIssue = {
  affectedLocation?: VulnerabilityLocation | undefined
  effectiveSeverity?:
    | 'SEVERITY_UNSPECIFIED'
    | 'MINIMAL'
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'CRITICAL'
    | undefined
  fixedLocation?: VulnerabilityLocation | undefined
  packageType?: string | undefined
  severityName?: string | undefined
}
type RelatedUrl = { label?: string | undefined; url?: string | undefined }
type Justification = {
  details?: string | undefined
  justificationType?:
    | 'JUSTIFICATION_TYPE_UNSPECIFIED'
    | 'COMPONENT_NOT_PRESENT'
    | 'VULNERABLE_CODE_NOT_PRESENT'
    | 'VULNERABLE_CODE_NOT_IN_EXECUTE_PATH'
    | 'VULNERABLE_CODE_CANNOT_BE_CONTROLLED_BY_ADVERSARY'
    | 'INLINE_MITIGATIONS_ALREADY_EXIST'
    | undefined
}
type Remediation = {
  details?: string | undefined
  remediationType?:
    | 'REMEDIATION_TYPE_UNSPECIFIED'
    | 'MITIGATION'
    | 'NO_FIX_PLANNED'
    | 'NONE_AVAILABLE'
    | 'VENDOR_FIX'
    | 'WORKAROUND'
    | undefined
  remediationUri?: RelatedUrl | undefined
}
type VexAssessment = {
  cve?: string | undefined
  impacts?: string[] | undefined
  justification?: Justification | undefined
  noteName?: string | undefined
  relatedUris?: RelatedUrl[] | undefined
  remediations?: Remediation[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'AFFECTED'
    | 'NOT_AFFECTED'
    | 'FIXED'
    | 'UNDER_INVESTIGATION'
    | undefined
}
type GrafeasV1beta1VulnerabilityDetails = {
  cvssScore?: number | undefined
  cvssV2?: CVSS | undefined
  cvssV3?: CVSS | undefined
  cvssVersion?: 'CVSS_VERSION_UNSPECIFIED' | 'CVSS_VERSION_2' | 'CVSS_VERSION_3' | undefined
  effectiveSeverity?:
    | 'SEVERITY_UNSPECIFIED'
    | 'MINIMAL'
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'CRITICAL'
    | undefined
  longDescription?: string | undefined
  packageIssue?: PackageIssue[] | undefined
  relatedUrls?: RelatedUrl[] | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'MINIMAL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | undefined
  shortDescription?: string | undefined
  type?: string | undefined
  vexAssessment?: VexAssessment | undefined
}
type Occurrence = {
  attestation?: Details | undefined
  build?: GrafeasV1beta1BuildDetails | undefined
  createTime?: string | undefined
  deployment?: GrafeasV1beta1DeploymentDetails | undefined
  derivedImage?: GrafeasV1beta1ImageDetails | undefined
  discovered?: GrafeasV1beta1DiscoveryDetails | undefined
  envelope?: Envelope | undefined
  installation?: GrafeasV1beta1PackageDetails | undefined
  intoto?: GrafeasV1beta1IntotoDetails | undefined
  kind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'INTOTO'
    | 'SBOM'
    | 'SPDX_PACKAGE'
    | 'SPDX_FILE'
    | 'SPDX_RELATIONSHIP'
    | 'VULNERABILITY_ASSESSMENT'
    | 'SBOM_REFERENCE'
    | undefined
  name?: string | undefined
  noteName?: string | undefined
  remediation?: string | undefined
  resource?: Resource | undefined
  sbom?: DocumentOccurrence | undefined
  sbomReference?: SBOMReferenceOccurrence | undefined
  spdxFile?: FileOccurrence | undefined
  spdxPackage?: PackageInfoOccurrence | undefined
  spdxRelationship?: RelationshipOccurrence | undefined
  updateTime?: string | undefined
  vulnerability?: GrafeasV1beta1VulnerabilityDetails | undefined
}
type Hint = { humanReadableName?: string | undefined }
type Authority = { hint?: Hint | undefined }
type Basis = { fingerprint?: Fingerprint | undefined; resourceUrl?: string | undefined }
type BuildSignature = {
  keyId?: string | undefined
  keyType?: 'KEY_TYPE_UNSPECIFIED' | 'PGP_ASCII_ARMORED' | 'PKIX_PEM' | undefined
  publicKey?: string | undefined
  signature?: string | undefined
}
type Build = { builderVersion?: string | undefined; signature?: BuildSignature | undefined }
type Deployable = { resourceUri?: string[] | undefined }
type Discovery = {
  analysisKind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'INTOTO'
    | 'SBOM'
    | 'SPDX_PACKAGE'
    | 'SPDX_FILE'
    | 'SPDX_RELATIONSHIP'
    | 'VULNERABILITY_ASSESSMENT'
    | 'SBOM_REFERENCE'
    | undefined
}
type ArtifactRule = { artifactRule?: string[] | undefined }
type SigningKey = {
  keyId?: string | undefined
  keyScheme?: string | undefined
  keyType?: string | undefined
  publicKeyValue?: string | undefined
}
type InToto = {
  expectedCommand?: string[] | undefined
  expectedMaterials?: ArtifactRule[] | undefined
  expectedProducts?: ArtifactRule[] | undefined
  signingKeys?: SigningKey[] | undefined
  stepName?: string | undefined
  threshold?: string | undefined
}
type Digest = { algo?: string | undefined; digestBytes?: string | undefined }
type Distribution = {
  architecture?: 'ARCHITECTURE_UNSPECIFIED' | 'X86' | 'X64' | undefined
  cpeUri?: string | undefined
  description?: string | undefined
  latestVersion?: Version | undefined
  maintainer?: string | undefined
  url?: string | undefined
}
type Package = {
  architecture?: 'ARCHITECTURE_UNSPECIFIED' | 'X86' | 'X64' | undefined
  cpeUri?: string | undefined
  description?: string | undefined
  digest?: Digest[] | undefined
  distribution?: Distribution[] | undefined
  license?: License | undefined
  maintainer?: string | undefined
  name?: string | undefined
  packageType?: string | undefined
  url?: string | undefined
  version?: Version | undefined
}
type DocumentNote = { dataLicence?: string | undefined; spdxVersion?: string | undefined }
type SBOMReferenceNote = { format?: string | undefined; version?: string | undefined }
type FileNote = {
  checksum?: string[] | undefined
  fileType?:
    | 'FILE_TYPE_UNSPECIFIED'
    | 'SOURCE'
    | 'BINARY'
    | 'ARCHIVE'
    | 'APPLICATION'
    | 'AUDIO'
    | 'IMAGE'
    | 'TEXT'
    | 'VIDEO'
    | 'DOCUMENTATION'
    | 'SPDX'
    | 'OTHER'
    | undefined
  title?: string | undefined
}
type ExternalRef = {
  category?:
    | 'CATEGORY_UNSPECIFIED'
    | 'SECURITY'
    | 'PACKAGE_MANAGER'
    | 'PERSISTENT_ID'
    | 'OTHER'
    | undefined
  comment?: string | undefined
  locator?: string | undefined
  type?: string | undefined
}
type PackageInfoNote = {
  analyzed?: boolean | undefined
  attribution?: string | undefined
  checksum?: string | undefined
  copyright?: string | undefined
  detailedDescription?: string | undefined
  downloadLocation?: string | undefined
  externalRefs?: ExternalRef[] | undefined
  filesLicenseInfo?: string[] | undefined
  homePage?: string | undefined
  licenseDeclared?: License | undefined
  originator?: string | undefined
  packageType?: string | undefined
  summaryDescription?: string | undefined
  supplier?: string | undefined
  title?: string | undefined
  verificationCode?: string | undefined
  version?: string | undefined
}
type RelationshipNote = {
  type?:
    | 'RELATIONSHIP_TYPE_UNSPECIFIED'
    | 'DESCRIBES'
    | 'DESCRIBED_BY'
    | 'CONTAINS'
    | 'CONTAINED_BY'
    | 'DEPENDS_ON'
    | 'DEPENDENCY_OF'
    | 'DEPENDENCY_MANIFEST_OF'
    | 'BUILD_DEPENDENCY_OF'
    | 'DEV_DEPENDENCY_OF'
    | 'OPTIONAL_DEPENDENCY_OF'
    | 'PROVIDED_DEPENDENCY_OF'
    | 'TEST_DEPENDENCY_OF'
    | 'RUNTIME_DEPENDENCY_OF'
    | 'EXAMPLE_OF'
    | 'GENERATES'
    | 'GENERATED_FROM'
    | 'ANCESTOR_OF'
    | 'DESCENDANT_OF'
    | 'VARIANT_OF'
    | 'DISTRIBUTION_ARTIFACT'
    | 'PATCH_FOR'
    | 'PATCH_APPLIED'
    | 'COPY_OF'
    | 'FILE_ADDED'
    | 'FILE_DELETED'
    | 'FILE_MODIFIED'
    | 'EXPANDED_FROM_ARCHIVE'
    | 'DYNAMIC_LINK'
    | 'STATIC_LINK'
    | 'DATA_FILE_OF'
    | 'TEST_CASE_OF'
    | 'BUILD_TOOL_OF'
    | 'DEV_TOOL_OF'
    | 'TEST_OF'
    | 'TEST_TOOL_OF'
    | 'DOCUMENTATION_OF'
    | 'OPTIONAL_COMPONENT_OF'
    | 'METAFILE_OF'
    | 'PACKAGE_OF'
    | 'AMENDS'
    | 'PREREQUISITE_FOR'
    | 'HAS_PREREQUISITE'
    | 'OTHER'
    | undefined
}
type CVSSv3 = {
  attackComplexity?:
    | 'ATTACK_COMPLEXITY_UNSPECIFIED'
    | 'ATTACK_COMPLEXITY_LOW'
    | 'ATTACK_COMPLEXITY_HIGH'
    | undefined
  attackVector?:
    | 'ATTACK_VECTOR_UNSPECIFIED'
    | 'ATTACK_VECTOR_NETWORK'
    | 'ATTACK_VECTOR_ADJACENT'
    | 'ATTACK_VECTOR_LOCAL'
    | 'ATTACK_VECTOR_PHYSICAL'
    | undefined
  availabilityImpact?:
    | 'IMPACT_UNSPECIFIED'
    | 'IMPACT_HIGH'
    | 'IMPACT_LOW'
    | 'IMPACT_NONE'
    | undefined
  baseScore?: number | undefined
  confidentialityImpact?:
    | 'IMPACT_UNSPECIFIED'
    | 'IMPACT_HIGH'
    | 'IMPACT_LOW'
    | 'IMPACT_NONE'
    | undefined
  exploitabilityScore?: number | undefined
  impactScore?: number | undefined
  integrityImpact?: 'IMPACT_UNSPECIFIED' | 'IMPACT_HIGH' | 'IMPACT_LOW' | 'IMPACT_NONE' | undefined
  privilegesRequired?:
    | 'PRIVILEGES_REQUIRED_UNSPECIFIED'
    | 'PRIVILEGES_REQUIRED_NONE'
    | 'PRIVILEGES_REQUIRED_LOW'
    | 'PRIVILEGES_REQUIRED_HIGH'
    | undefined
  scope?: 'SCOPE_UNSPECIFIED' | 'SCOPE_UNCHANGED' | 'SCOPE_CHANGED' | undefined
  userInteraction?:
    | 'USER_INTERACTION_UNSPECIFIED'
    | 'USER_INTERACTION_NONE'
    | 'USER_INTERACTION_REQUIRED'
    | undefined
}
type Detail = {
  cpeUri?: string | undefined
  description?: string | undefined
  fixedLocation?: VulnerabilityLocation | undefined
  isObsolete?: boolean | undefined
  maxAffectedVersion?: Version | undefined
  minAffectedVersion?: Version | undefined
  package?: string | undefined
  packageType?: string | undefined
  severityName?: string | undefined
  source?: string | undefined
  sourceUpdateTime?: string | undefined
  vendor?: string | undefined
}
type KnowledgeBase = { name?: string | undefined; url?: string | undefined }
type WindowsDetail = {
  cpeUri?: string | undefined
  description?: string | undefined
  fixingKbs?: KnowledgeBase[] | undefined
  name?: string | undefined
}
type Vulnerability = {
  cvssScore?: number | undefined
  cvssV2?: CVSS | undefined
  cvssV3?: CVSSv3 | undefined
  cvssVersion?: 'CVSS_VERSION_UNSPECIFIED' | 'CVSS_VERSION_2' | 'CVSS_VERSION_3' | undefined
  cwe?: string[] | undefined
  details?: Detail[] | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'MINIMAL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | undefined
  sourceUpdateTime?: string | undefined
  windowsDetails?: WindowsDetail[] | undefined
}
type Assessment = {
  cve?: string | undefined
  impacts?: string[] | undefined
  justification?: Justification | undefined
  longDescription?: string | undefined
  relatedUris?: RelatedUrl[] | undefined
  remediations?: Remediation[] | undefined
  shortDescription?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'AFFECTED'
    | 'NOT_AFFECTED'
    | 'FIXED'
    | 'UNDER_INVESTIGATION'
    | undefined
}
type Product = {
  genericUri?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type Publisher = {
  issuingAuthority?: string | undefined
  name?: string | undefined
  publisherNamespace?: string | undefined
}
type VulnerabilityAssessmentNote = {
  assessment?: Assessment | undefined
  languageCode?: string | undefined
  longDescription?: string | undefined
  product?: Product | undefined
  publisher?: Publisher | undefined
  shortDescription?: string | undefined
  title?: string | undefined
}
type Note = {
  attestationAuthority?: Authority | undefined
  baseImage?: Basis | undefined
  build?: Build | undefined
  createTime?: string | undefined
  deployable?: Deployable | undefined
  discovery?: Discovery | undefined
  expirationTime?: string | undefined
  intoto?: InToto | undefined
  kind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'INTOTO'
    | 'SBOM'
    | 'SPDX_PACKAGE'
    | 'SPDX_FILE'
    | 'SPDX_RELATIONSHIP'
    | 'VULNERABILITY_ASSESSMENT'
    | 'SBOM_REFERENCE'
    | undefined
  longDescription?: string | undefined
  name?: string | undefined
  package?: Package | undefined
  relatedNoteNames?: string[] | undefined
  relatedUrl?: RelatedUrl[] | undefined
  sbom?: DocumentNote | undefined
  sbomReference?: SBOMReferenceNote | undefined
  shortDescription?: string | undefined
  spdxFile?: FileNote | undefined
  spdxPackage?: PackageInfoNote | undefined
  spdxRelationship?: RelationshipNote | undefined
  updateTime?: string | undefined
  vulnerability?: Vulnerability | undefined
  vulnerabilityAssessment?: VulnerabilityAssessmentNote | undefined
}
type ListNoteOccurrencesResponse = {
  nextPageToken?: string | undefined
  occurrences?: Occurrence[] | undefined
}
type ListNotesResponse = { nextPageToken?: string | undefined; notes?: Note[] | undefined }
type BatchCreateNotesRequest = { notes?: { [x: string]: Note } | undefined }
type BatchCreateNotesResponse = { notes?: Note[] | undefined }
type ListOccurrencesResponse = {
  nextPageToken?: string | undefined
  occurrences?: Occurrence[] | undefined
}
type BatchCreateOccurrencesRequest = { occurrences?: Occurrence[] | undefined }
type BatchCreateOccurrencesResponse = { occurrences?: Occurrence[] | undefined }
type FixableTotalByDigest = {
  fixableCount?: string | undefined
  resource?: Resource | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'MINIMAL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | undefined
  totalCount?: string | undefined
}
type VulnerabilityOccurrencesSummary = { counts?: FixableTotalByDigest[] | undefined }
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: Occurrence
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
        } & { json: Occurrence }
        output: Occurrence
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/notes': {
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
        output: Note
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/occurrences': {
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
        output: ListNoteOccurrencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/notes': {
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
        output: ListNotesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            noteId?: string | undefined
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
        } & { json: Note }
        output: Note
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/notes:batchCreate': {
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
        } & { json: BatchCreateNotesRequest }
        output: BatchCreateNotesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/occurrences': {
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
        output: ListOccurrencesResponse
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
        } & { json: Occurrence }
        output: Occurrence
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/occurrences:batchCreate': {
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
        } & { json: BatchCreateOccurrencesRequest }
        output: BatchCreateOccurrencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/occurrences:vulnerabilitySummary': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: VulnerabilityOccurrencesSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
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
        } & { json: GetIamPolicyRequest }
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
  },
  '/'
>
export default routes
