type Empty = { [x: string]: unknown }
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
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type Binary = { name?: string | undefined; version?: string | undefined }
type LanguagePackageDependency = { package?: string | undefined; version?: string | undefined }
type FileLocation = { filePath?: string | undefined }
type Maintainer = { kind?: string | undefined; name?: string | undefined }
type PackageData = {
  architecture?: string | undefined
  binary?: Binary | undefined
  cpeUri?: string | undefined
  dependencyChain?: LanguagePackageDependency[] | undefined
  fileLocation?: FileLocation[] | undefined
  hashDigest?: string | undefined
  maintainer?: Maintainer | undefined
  os?: string | undefined
  osVersion?: string | undefined
  package?: string | undefined
  packageType?:
    | 'PACKAGE_TYPE_UNSPECIFIED'
    | 'OS'
    | 'MAVEN'
    | 'GO'
    | 'GO_STDLIB'
    | 'PYPI'
    | 'NPM'
    | undefined
  patchedCve?: string[] | undefined
  unused?: string | undefined
  version?: string | undefined
}
type AnalyzePackagesRequest = {
  packages?: PackageData[] | undefined
  resourceUri?: string | undefined
}
type Jwt = { compactJwt?: string | undefined }
type Signature = { publicKeyId?: string | undefined; signature?: string | undefined }
type AttestationOccurrence = {
  jwts?: Jwt[] | undefined
  serializedPayload?: string | undefined
  signatures?: Signature[] | undefined
}
type BuilderConfig = { id?: string | undefined }
type Completeness = {
  arguments?: boolean | undefined
  environment?: boolean | undefined
  materials?: boolean | undefined
}
type Metadata = {
  buildFinishedOn?: string | undefined
  buildInvocationId?: string | undefined
  buildStartedOn?: string | undefined
  completeness?: Completeness | undefined
  reproducible?: boolean | undefined
}
type Recipe = {
  arguments?: { [x: string]: { [x: string]: unknown } }[] | undefined
  definedInMaterial?: string | undefined
  entryPoint?: string | undefined
  environment?: { [x: string]: { [x: string]: unknown } }[] | undefined
  type?: string | undefined
}
type InTotoProvenance = {
  builderConfig?: BuilderConfig | undefined
  materials?: string[] | undefined
  metadata?: Metadata | undefined
  recipe?: Recipe | undefined
}
type SlsaBuilder = { id?: string | undefined }
type Material = { digest?: { [x: string]: string } | undefined; uri?: string | undefined }
type SlsaCompleteness = {
  arguments?: boolean | undefined
  environment?: boolean | undefined
  materials?: boolean | undefined
}
type SlsaMetadata = {
  buildFinishedOn?: string | undefined
  buildInvocationId?: string | undefined
  buildStartedOn?: string | undefined
  completeness?: SlsaCompleteness | undefined
  reproducible?: boolean | undefined
}
type SlsaRecipe = {
  arguments?: { [x: string]: { [x: string]: unknown } } | undefined
  definedInMaterial?: string | undefined
  entryPoint?: string | undefined
  environment?: { [x: string]: { [x: string]: unknown } } | undefined
  type?: string | undefined
}
type SlsaProvenance = {
  builder?: SlsaBuilder | undefined
  materials?: Material[] | undefined
  metadata?: SlsaMetadata | undefined
  recipe?: SlsaRecipe | undefined
}
type GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder = { id?: string | undefined }
type GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource = {
  digest?: { [x: string]: string } | undefined
  entryPoint?: string | undefined
  uri?: string | undefined
}
type GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation = {
  configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource | undefined
  environment?: { [x: string]: { [x: string]: unknown } } | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial = {
  digest?: { [x: string]: string } | undefined
  uri?: string | undefined
}
type GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness = {
  environment?: boolean | undefined
  materials?: boolean | undefined
  parameters?: boolean | undefined
}
type GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata = {
  buildFinishedOn?: string | undefined
  buildInvocationId?: string | undefined
  buildStartedOn?: string | undefined
  completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness | undefined
  reproducible?: boolean | undefined
}
type SlsaProvenanceZeroTwo = {
  buildConfig?: { [x: string]: { [x: string]: unknown } } | undefined
  buildType?: string | undefined
  builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder | undefined
  invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation | undefined
  materials?: GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[] | undefined
  metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata | undefined
}
type Subject = { digest?: { [x: string]: string } | undefined; name?: string | undefined }
type InTotoStatement = {
  _type?: string | undefined
  predicateType?: string | undefined
  provenance?: InTotoProvenance | undefined
  slsaProvenance?: SlsaProvenance | undefined
  slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo | undefined
  subject?: Subject[] | undefined
}
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
type Hash = { type?: string | undefined; value?: string | undefined }
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
type BuildOccurrence = {
  intotoProvenance?: InTotoProvenance | undefined
  intotoStatement?: InTotoStatement | undefined
  provenance?: BuildProvenance | undefined
  provenanceBytes?: string | undefined
}
type NonCompliantFile = {
  displayCommand?: string | undefined
  path?: string | undefined
  reason?: string | undefined
}
type ComplianceOccurrence = {
  nonComplianceReason?: string | undefined
  nonCompliantFiles?: NonCompliantFile[] | undefined
}
type DeploymentOccurrence = {
  address?: string | undefined
  config?: string | undefined
  deployTime?: string | undefined
  platform?: 'PLATFORM_UNSPECIFIED' | 'GKE' | 'FLEX' | 'CUSTOM' | undefined
  resourceUri?: string[] | undefined
  undeployTime?: string | undefined
  userEmail?: string | undefined
}
type AnalysisCompleted = { analysisType?: string[] | undefined }
type DiscoveryOccurrence = {
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
  archiveTime?: string | undefined
  continuousAnalysis?: 'CONTINUOUS_ANALYSIS_UNSPECIFIED' | 'ACTIVE' | 'INACTIVE' | undefined
  cpe?: string | undefined
  lastScanTime?: string | undefined
}
type EnvelopeSignature = { keyid?: string | undefined; sig?: string | undefined }
type Envelope = {
  payload?: string | undefined
  payloadType?: string | undefined
  signatures?: EnvelopeSignature[] | undefined
}
type DSSEAttestationOccurrence = {
  envelope?: Envelope | undefined
  statement?: InTotoStatement | undefined
}
type Fingerprint = {
  v1Name?: string | undefined
  v2Blob?: string[] | undefined
  v2Name?: string | undefined
}
type Layer = { arguments?: string | undefined; directive?: string | undefined }
type ImageOccurrence = {
  baseResourceUrl?: string | undefined
  distance?: number | undefined
  fingerprint?: Fingerprint | undefined
  layerInfo?: Layer[] | undefined
}
type License = { comments?: string | undefined; expression?: string | undefined }
type Version = {
  epoch?: number | undefined
  fullName?: string | undefined
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
type PackageOccurrence = {
  architecture?: 'ARCHITECTURE_UNSPECIFIED' | 'X86' | 'X64' | undefined
  cpeUri?: string | undefined
  license?: License | undefined
  location?: Location[] | undefined
  name?: string | undefined
  packageType?: string | undefined
  version?: Version | undefined
}
type UpgradeDistribution = {
  classification?: string | undefined
  cpeUri?: string | undefined
  cve?: string[] | undefined
  severity?: string | undefined
}
type Category = { categoryId?: string | undefined; name?: string | undefined }
type Identity = { revision?: number | undefined; updateId?: string | undefined }
type WindowsUpdate = {
  categories?: Category[] | undefined
  description?: string | undefined
  identity?: Identity | undefined
  kbArticleIds?: string[] | undefined
  lastPublishedTimestamp?: string | undefined
  supportUrl?: string | undefined
  title?: string | undefined
}
type UpgradeOccurrence = {
  distribution?: UpgradeDistribution | undefined
  package?: string | undefined
  parsedVersion?: Version | undefined
  windowsUpdate?: WindowsUpdate | undefined
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
type GrafeasV1FileLocation = { filePath?: string | undefined }
type PackageIssue = {
  affectedCpeUri?: string | undefined
  affectedPackage?: string | undefined
  affectedVersion?: Version | undefined
  effectiveSeverity?:
    | 'SEVERITY_UNSPECIFIED'
    | 'MINIMAL'
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'CRITICAL'
    | undefined
  fileLocation?: GrafeasV1FileLocation[] | undefined
  fixAvailable?: boolean | undefined
  fixedCpeUri?: string | undefined
  fixedPackage?: string | undefined
  fixedVersion?: Version | undefined
  packageType?: string | undefined
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
type VulnerabilityOccurrence = {
  cvssScore?: number | undefined
  cvssV2?: CVSS | undefined
  cvssVersion?: 'CVSS_VERSION_UNSPECIFIED' | 'CVSS_VERSION_2' | 'CVSS_VERSION_3' | undefined
  cvssv3?: CVSS | undefined
  effectiveSeverity?:
    | 'SEVERITY_UNSPECIFIED'
    | 'MINIMAL'
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'CRITICAL'
    | undefined
  fixAvailable?: boolean | undefined
  longDescription?: string | undefined
  packageIssue?: PackageIssue[] | undefined
  relatedUrls?: RelatedUrl[] | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'MINIMAL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | undefined
  shortDescription?: string | undefined
  type?: string | undefined
  vexAssessment?: VexAssessment | undefined
}
type Occurrence = {
  attestation?: AttestationOccurrence | undefined
  build?: BuildOccurrence | undefined
  compliance?: ComplianceOccurrence | undefined
  createTime?: string | undefined
  deployment?: DeploymentOccurrence | undefined
  discovery?: DiscoveryOccurrence | undefined
  dsseAttestation?: DSSEAttestationOccurrence | undefined
  envelope?: Envelope | undefined
  image?: ImageOccurrence | undefined
  kind?:
    | 'NOTE_KIND_UNSPECIFIED'
    | 'VULNERABILITY'
    | 'BUILD'
    | 'IMAGE'
    | 'PACKAGE'
    | 'DEPLOYMENT'
    | 'DISCOVERY'
    | 'ATTESTATION'
    | 'UPGRADE'
    | 'COMPLIANCE'
    | 'DSSE_ATTESTATION'
    | 'VULNERABILITY_ASSESSMENT'
    | undefined
  name?: string | undefined
  noteName?: string | undefined
  package?: PackageOccurrence | undefined
  remediation?: string | undefined
  resourceUri?: string | undefined
  updateTime?: string | undefined
  upgrade?: UpgradeOccurrence | undefined
  vulnerability?: VulnerabilityOccurrence | undefined
}
type ListVulnerabilitiesResponse = {
  nextPageToken?: string | undefined
  occurrences?: Occurrence[] | undefined
}
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
        output: Operation
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:wait': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            timeout?: string | undefined
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
    }
  } & {
    '/v1beta1/:parent/scans:analyzePackages': {
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
        } & { json: AnalyzePackagesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/vulnerabilities': {
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
        output: ListVulnerabilitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
