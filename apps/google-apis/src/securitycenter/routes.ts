import { createRoute, z } from '@hono/zod-openapi'

const GeolocationSchema = z
  .object({ regionCode: z.string().exactOptional().openapi({ description: 'A CLDR.' }) })
  .openapi({ description: 'Represents a geographical location for a given access.', required: [] })
  .openapi('Geolocation')

const ServiceAccountDelegationInfoSchema = z
  .object({
    principalEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of a Google account.' }),
    principalSubject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]`",
      }),
  })
  .openapi({
    description: 'Identity delegation history of an authenticated service account.',
    required: [],
  })
  .openapi('ServiceAccountDelegationInfo')

const AccessSchema = z
  .object({
    callerIp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Caller\'s IP address, such as "1.1.1.1".' }),
    callerIpGeo: GeolocationSchema.exactOptional().openapi({
      description: "The caller IP's geolocation, which identifies where the call came from.",
    }),
    methodName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The method that the service account called, e.g. "SetIamPolicy".' }),
    principalEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).',
      }),
    principalSubject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`.",
      }),
    serviceAccountDelegationInfo: z
      .array(ServiceAccountDelegationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.',
      }),
    serviceAccountKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". ',
      }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the API service that the service account made a call to, e.g. "iam.googleapis.com"',
      }),
    userAgentFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application.',
      }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username.',
      }),
  })
  .openapi({ description: 'Represents an access event.', required: [] })
  .openapi('Access')

const AccessReviewSchema = z
  .object({
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'Group is the API Group of the Resource. "*" means all.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name is the name of the resource being requested. Empty means all.',
      }),
    ns: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty).',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource is the optional resource type requested. "*" means all.' }),
    subresource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subresource is the optional subresource type.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Verb is a Kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy. "*" means all.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version is the API Version of the Resource. "*" means all.' }),
  })
  .openapi({
    description:
      'Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.',
    required: [],
  })
  .openapi('AccessReview')

const CloudDlpDataProfileSchema = z
  .object({
    dataProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`.',
      }),
  })
  .openapi({
    description:
      'The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.',
    required: [],
  })
  .openapi('CloudDlpDataProfile')

const CloudDlpInspectionSchema = z
  .object({
    fullScan: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether Cloud DLP scanned the complete resource or a sampled subset.',
      }),
    infoType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [type of information](https://cloud.google.com/dlp/docs/infotypes-reference) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`.',
      }),
    infoTypeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of times Cloud DLP found this infoType within this job and resource.',
      }),
    inspectJob: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`.',
      }),
  })
  .openapi({
    description:
      'Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.',
    required: [],
  })
  .openapi('CloudDlpInspection')

const ComplianceSchema = z
  .object({
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Policies within the standard/benchmark e.g. A.12.4.1' }),
    standard: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Refers to industry wide standards or benchmarks e.g. "cis", "pci", "owasp", etc.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the standard/benchmark e.g. 1.1' }),
  })
  .openapi({
    description:
      'Contains compliance information about a security standard indicating unmet recommendations.',
    required: [],
  })
  .openapi('Compliance')

const ConfigSchema = z
  .object({
    moduleEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the module at its level of the resource hierarchy.',
      }),
    value: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'The configuration value for the module. The absence of this field implies its inheritance from the parent.',
      }),
  })
  .openapi({ description: 'Configuration of a module.', required: [] })
  .openapi('Config')

const ConnectionSchema = z
  .object({
    destinationIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Destination IP address. Not present for sockets that are listening and not connected.',
      }),
    destinationPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Destination port. Not present for sockets that are listening and not connected.',
      }),
    protocol: z
      .enum(['PROTOCOL_UNSPECIFIED', 'ICMP', 'TCP', 'UDP', 'GRE', 'ESP'])
      .exactOptional()
      .openapi({ description: 'IANA Internet Protocol Number such as TCP(6) and UDP(17).' }),
    sourceIp: z.string().exactOptional().openapi({ description: 'Source IP address.' }),
    sourcePort: z.int32().exactOptional().openapi({ description: 'Source port.' }),
  })
  .openapi({
    description: 'Contains information about the IP connection associated with the finding.',
    required: [],
  })
  .openapi('Connection')

const ContactSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address. For example, "`person123@company.com`".' }),
  })
  .openapi({ description: 'The email address of a contact.', required: [] })
  .openapi('Contact')

const ContactDetailsSchema = z
  .object({
    contacts: z.array(ContactSchema).exactOptional().openapi({ description: 'A list of contacts' }),
  })
  .openapi({ description: 'The details pertaining to specific contacts', required: [] })
  .openapi('ContactDetails')

const LabelSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Label name.' }),
    value: z.string().exactOptional().openapi({ description: 'Label value.' }),
  })
  .openapi({
    description:
      'Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().',
    required: [],
  })
  .openapi('Label')

const ContainerSchema = z
  .object({
    imageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional container image id, when provided by the container runtime. Uniquely identifies the container image launched using a container image digest.',
      }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'Container labels, as provided by the container runtime.' }),
    name: z.string().exactOptional().openapi({ description: 'Container name.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Container image URI provided when configuring a pod/container. May identify a container image version using mutable tags.',
      }),
  })
  .openapi({ description: 'Container associated with the finding.', required: [] })
  .openapi('Container')

const ContainerThreatDetectionSettingsSchema = z
  .object({
    modules: z
      .record(z.string(), ConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project.',
        readOnly: true,
      }),
    serviceEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Resource capturing the settings for the Container Threat Detection service.',
    required: [],
  })
  .openapi('ContainerThreatDetectionSettings')

const Cvssv3Schema = z
  .object({
    attackComplexity: z
      .enum(['ATTACK_COMPLEXITY_UNSPECIFIED', 'ATTACK_COMPLEXITY_LOW', 'ATTACK_COMPLEXITY_HIGH'])
      .exactOptional()
      .openapi({
        description:
          "This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.",
      }),
    attackVector: z
      .enum([
        'ATTACK_VECTOR_UNSPECIFIED',
        'ATTACK_VECTOR_NETWORK',
        'ATTACK_VECTOR_ADJACENT',
        'ATTACK_VECTOR_LOCAL',
        'ATTACK_VECTOR_PHYSICAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.',
      }),
    availabilityImpact: z
      .enum(['IMPACT_UNSPECIFIED', 'IMPACT_HIGH', 'IMPACT_LOW', 'IMPACT_NONE'])
      .exactOptional()
      .openapi({
        description:
          'This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.',
      }),
    baseScore: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The base score is a function of the base metric scores.' }),
    confidentialityImpact: z
      .enum(['IMPACT_UNSPECIFIED', 'IMPACT_HIGH', 'IMPACT_LOW', 'IMPACT_NONE'])
      .exactOptional()
      .openapi({
        description:
          'This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.',
      }),
    integrityImpact: z
      .enum(['IMPACT_UNSPECIFIED', 'IMPACT_HIGH', 'IMPACT_LOW', 'IMPACT_NONE'])
      .exactOptional()
      .openapi({
        description:
          'This metric measures the impact to integrity of a successfully exploited vulnerability.',
      }),
    privilegesRequired: z
      .enum([
        'PRIVILEGES_REQUIRED_UNSPECIFIED',
        'PRIVILEGES_REQUIRED_NONE',
        'PRIVILEGES_REQUIRED_LOW',
        'PRIVILEGES_REQUIRED_HIGH',
      ])
      .exactOptional()
      .openapi({
        description:
          'This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.',
      }),
    scope: z
      .enum(['SCOPE_UNSPECIFIED', 'SCOPE_UNCHANGED', 'SCOPE_CHANGED'])
      .exactOptional()
      .openapi({
        description:
          'The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.',
      }),
    userInteraction: z
      .enum(['USER_INTERACTION_UNSPECIFIED', 'USER_INTERACTION_NONE', 'USER_INTERACTION_REQUIRED'])
      .exactOptional()
      .openapi({
        description:
          'This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.',
      }),
  })
  .openapi({ description: 'Common Vulnerability Scoring System version 3.', required: [] })
  .openapi('Cvssv3')

const ReferenceSchema = z
  .object({
    source: z.string().exactOptional().openapi({ description: 'Source of the reference e.g. NVD' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.',
      }),
  })
  .openapi({ description: 'Additional Links', required: [] })
  .openapi('Reference')

const CveSchema = z
  .object({
    cvssv3: Cvssv3Schema.exactOptional().openapi({
      description:
        'Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the vulnerability. e.g. CVE-2021-34527' }),
    references: z
      .array(ReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527',
      }),
    upstreamFixAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether upstream fix is available for the CVE.' }),
  })
  .openapi({
    description:
      'CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org',
    required: [],
  })
  .openapi('Cve')

const DatabaseSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name of the database the user connected to.' }),
    grantees: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The target usernames/roles/groups of a SQL privilege grant (not an IAM policy change).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name of the database the user connected to, if it is supported by CAI. (https://google.aip.dev/122#full-resource-names)',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SQL statement associated with the relevant access.' }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The username used to connect to the DB. This may not necessarily be an IAM principal, and has no required format.',
      }),
  })
  .openapi({
    description:
      'Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.',
    required: [],
  })
  .openapi('Database')

const DetailsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the subscription has or will end.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the subscription has or will start.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'STANDARD', 'TRIAL', 'ALPHA', 'DEMO', 'PAY_AS_YOU_GO'])
      .exactOptional()
      .openapi({ description: 'The type of subscription' }),
  })
  .openapi({ description: 'Details of a subscription.', required: [] })
  .openapi('Details')

const DetectionSchema = z
  .object({
    binary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the binary associated with the memory hash signature detection.',
      }),
    percentPagesMatched: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The percentage of memory page hashes in the signature that were matched.',
      }),
  })
  .openapi({
    description: 'Memory hash detection contributing to the binary family match.',
    required: [],
  })
  .openapi('Detection')

const EnvironmentVariableSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Environment variable name as a JSON encoded string.' }),
    val: z
      .string()
      .exactOptional()
      .openapi({ description: 'Environment variable value as a JSON encoded string.' }),
  })
  .openapi({
    description:
      'EnvironmentVariable is a name-value pair to store environment variables for Process.',
    required: [],
  })
  .openapi('EnvironmentVariable')

const EventThreatDetectionSettingsSchema = z
  .object({
    modules: z
      .record(z.string(), ConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings',
      }),
    serviceEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Resource capturing the settings for the Event Threat Detection service.',
    required: [],
  })
  .openapi('EventThreatDetectionSettings')

const ExfilResourceSchema = z
  .object({
    components: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Subcomponents of the asset that is exfiltrated - these could be URIs used during exfiltration, table names, databases, filenames, etc. For example, multiple tables may be exfiltrated from the same CloudSQL instance, or multiple files from the same Cloud Storage bucket.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Resource's URI (https://google.aip.dev/122#full-resource-names)" }),
  })
  .openapi({ description: 'Resource that has been exfiltrated or exfiltrated_to.', required: [] })
  .openapi('ExfilResource')

const ExfiltrationSchema = z
  .object({
    sources: z
      .array(ExfilResourceSchema)
      .exactOptional()
      .openapi({
        description:
          'If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source.',
      }),
    targets: z
      .array(ExfilResourceSchema)
      .exactOptional()
      .openapi({
        description:
          'If there are multiple targets, each target would get a complete copy of the "joined" source data.',
      }),
  })
  .openapi({
    description:
      'Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.',
    required: [],
  })
  .openapi('Exfiltration')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const FileSchema = z
  .object({
    contents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix of the file contents as a JSON encoded string. (Currently only populated for Malicious Script Executed findings.)',
      }),
    hashedSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file.',
      }),
    partiallyHashed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True when the hash covers only a prefix of the file.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute path of the file as a JSON encoded string.' }),
    sha256: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file.',
      }),
    size: z.string().exactOptional().openapi({ description: 'Size of the file in bytes.' }),
  })
  .openapi({
    description:
      'File information about the related binary/library used by an executable, or the script used by a script interpreter',
    required: [],
  })
  .openapi('File')

const GoogleCloudSecuritycenterV1ExternalSystemSchema = z
  .object({
    assignees: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'References primary/secondary etc assignees in the external system.',
      }),
    externalSystemUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The most recent time when the corresponding finding's ticket/tracker was updated in the external system.",
      }),
    externalUid: z
      .string()
      .exactOptional()
      .openapi({
        description: "Identifier that's used to track the given finding in the external system.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Most recent status of the corresponding finding's ticket/tracker in the external system.",
      }),
  })
  .openapi({
    description: 'Representation of third party SIEM/SOAR fields within SCC.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1ExternalSystem')

const IamBindingSchema = z
  .object({
    action: z
      .enum(['ACTION_UNSPECIFIED', 'ADD', 'REMOVE'])
      .exactOptional()
      .openapi({ description: 'The action that was performed on a Binding.' }),
    member: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A single identity requesting access for a Cloud Platform resource, e.g. "foo@google.com".',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner".',
      }),
  })
  .openapi({
    description:
      "Represents a particular IAM binding, which captures a member's role addition, removal, or state.",
    required: [],
  })
  .openapi('IamBinding')

const MemoryHashSignatureSchema = z
  .object({
    binaryFamily: z.string().exactOptional().openapi({ description: 'The binary family.' }),
    detections: z
      .array(DetectionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of memory hash detections contributing to the binary family match.',
      }),
  })
  .openapi({ description: 'A signature corresponding to memory page hashes.', required: [] })
  .openapi('MemoryHashSignature')

const YaraRuleSignatureSchema = z
  .object({
    yaraRule: z.string().exactOptional().openapi({ description: 'The name of the YARA rule.' }),
  })
  .openapi({ description: 'A signature corresponding to a YARA rule.', required: [] })
  .openapi('YaraRuleSignature')

const ProcessSignatureSchema = z
  .object({
    memoryHashSignature: MemoryHashSignatureSchema.exactOptional().openapi({
      description: 'Signature indicating that a binary family was matched.',
    }),
    yaraRuleSignature: YaraRuleSignatureSchema.exactOptional().openapi({
      description: 'Signature indicating that a YARA rule was matched.',
    }),
  })
  .openapi({ description: 'Indicates what signature matched this process.', required: [] })
  .openapi('ProcessSignature')

const IndicatorSchema = z
  .object({
    domains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of domains associated to the Finding.' }),
    ipAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of IP addresses that are associated with the finding.' }),
    signatures: z
      .array(ProcessSignatureSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of matched signatures indicating that the given process is present in the environment.',
      }),
    uris: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of URIs associated to the Findings.' }),
  })
  .openapi({
    description:
      "Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).",
    required: [],
  })
  .openapi('Indicator')

const KernelRootkitSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Rootkit name when available.' }),
    unexpectedCodeModification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True when unexpected modifications of kernel code memory are present.',
      }),
    unexpectedFtraceHandler: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.',
      }),
    unexpectedInterruptHandler: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when interrupt handlers that are are not in the expected kernel or module code regions are present.',
      }),
    unexpectedKernelCodePages: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when kernel code pages that are not in the expected kernel or module code regions are present.',
      }),
    unexpectedKprobeHandler: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.',
      }),
    unexpectedProcessesInRunqueue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list.',
      }),
    unexpectedReadOnlyDataModification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when unexpected modifications of kernel read-only data memory are present.',
      }),
    unexpectedSystemCallHandler: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when system call handlers that are are not in the expected kernel or module code regions are present.',
      }),
  })
  .openapi({ description: 'Kernel mode rootkit signatures.', required: [] })
  .openapi('KernelRootkit')

const RoleSchema = z
  .object({
    kind: z
      .enum(['KIND_UNSPECIFIED', 'ROLE', 'CLUSTER_ROLE'])
      .exactOptional()
      .openapi({ description: 'Role type.' }),
    name: z.string().exactOptional().openapi({ description: 'Role name.' }),
    ns: z.string().exactOptional().openapi({ description: 'Role namespace.' }),
  })
  .openapi({ description: 'Kubernetes Role or ClusterRole.', required: [] })
  .openapi('Role')

const SubjectSchema = z
  .object({
    kind: z
      .enum(['AUTH_TYPE_UNSPECIFIED', 'USER', 'SERVICEACCOUNT', 'GROUP'])
      .exactOptional()
      .openapi({ description: 'Authentication type for subject.' }),
    name: z.string().exactOptional().openapi({ description: 'Name for subject.' }),
    ns: z.string().exactOptional().openapi({ description: 'Namespace for subject.' }),
  })
  .openapi({ description: 'Represents a Kubernetes Subject.', required: [] })
  .openapi('Subject')

const GoogleCloudSecuritycenterV1BindingSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name for binding.' }),
    ns: z.string().exactOptional().openapi({ description: 'Namespace for binding.' }),
    role: RoleSchema.exactOptional().openapi({
      description: 'The Role or ClusterRole referenced by the binding.',
    }),
    subjects: z
      .array(SubjectSchema)
      .exactOptional()
      .openapi({
        description:
          'Represents one or more subjects that are bound to the role. Not always available for PATCH requests.',
      }),
  })
  .openapi({
    description: 'Represents a Kubernetes RoleBinding or ClusterRoleBinding.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1Binding')

const NodeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full Resource name of the Compute Engine VM running the cluster node.',
      }),
  })
  .openapi({ description: 'Kubernetes Nodes associated with the finding.', required: [] })
  .openapi('Node')

const NodePoolSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Kubernetes Node pool name.' }),
    nodes: z
      .array(NodeSchema)
      .exactOptional()
      .openapi({ description: 'Nodes associated with the finding.' }),
  })
  .openapi({ description: 'Provides GKE Node Pool information.', required: [] })
  .openapi('NodePool')

const PodSchema = z
  .object({
    containers: z
      .array(ContainerSchema)
      .exactOptional()
      .openapi({ description: 'Pod containers associated with this finding, if any.' }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({
        description: 'Pod labels. For Kubernetes containers, these are applied to the container.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Kubernetes Pod name.' }),
    ns: z.string().exactOptional().openapi({ description: 'Kubernetes Pod namespace.' }),
  })
  .openapi({ description: 'Kubernetes Pod.', required: [] })
  .openapi('Pod')

const KubernetesSchema = z
  .object({
    accessReviews: z
      .array(AccessReviewSchema)
      .exactOptional()
      .openapi({
        description:
          'Provides information on any Kubernetes access reviews (i.e. privilege checks) relevant to the finding.',
      }),
    bindings: z
      .array(GoogleCloudSecuritycenterV1BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Provides Kubernetes role binding information for findings that involve RoleBindings or ClusterRoleBindings.',
      }),
    nodePools: z
      .array(NodePoolSchema)
      .exactOptional()
      .openapi({
        description:
          'GKE Node Pools associated with the finding. This field will contain NodePool information for each Node, when it is available.',
      }),
    nodes: z
      .array(NodeSchema)
      .exactOptional()
      .openapi({ description: 'Provides Kubernetes Node information.' }),
    pods: z
      .array(PodSchema)
      .exactOptional()
      .openapi({
        description:
          'Kubernetes Pods associated with the finding. This field will contain Pod records for each container that is owned by a Pod.',
      }),
    roles: z
      .array(RoleSchema)
      .exactOptional()
      .openapi({
        description:
          'Provides Kubernetes role information for findings that involve Roles or ClusterRoles.',
      }),
  })
  .openapi({ description: 'Kubernetes-related attributes.', required: [] })
  .openapi('Kubernetes')

const MitreAttackSchema = z
  .object({
    additionalTactics: z
      .array(
        z.enum([
          'TACTIC_UNSPECIFIED',
          'RECONNAISSANCE',
          'RESOURCE_DEVELOPMENT',
          'INITIAL_ACCESS',
          'EXECUTION',
          'PERSISTENCE',
          'PRIVILEGE_ESCALATION',
          'DEFENSE_EVASION',
          'CREDENTIAL_ACCESS',
          'DISCOVERY',
          'LATERAL_MOVEMENT',
          'COLLECTION',
          'COMMAND_AND_CONTROL',
          'EXFILTRATION',
          'IMPACT',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Additional MITRE ATT&CK tactics related to this finding, if any.' }),
    additionalTechniques: z
      .array(
        z.enum([
          'TECHNIQUE_UNSPECIFIED',
          'ACTIVE_SCANNING',
          'SCANNING_IP_BLOCKS',
          'INGRESS_TOOL_TRANSFER',
          'NATIVE_API',
          'SHARED_MODULES',
          'COMMAND_AND_SCRIPTING_INTERPRETER',
          'UNIX_SHELL',
          'RESOURCE_HIJACKING',
          'PROXY',
          'EXTERNAL_PROXY',
          'MULTI_HOP_PROXY',
          'DYNAMIC_RESOLUTION',
          'UNSECURED_CREDENTIALS',
          'VALID_ACCOUNTS',
          'LOCAL_ACCOUNTS',
          'CLOUD_ACCOUNTS',
          'NETWORK_DENIAL_OF_SERVICE',
          'PERMISSION_GROUPS_DISCOVERY',
          'CLOUD_GROUPS',
          'EXFILTRATION_OVER_WEB_SERVICE',
          'EXFILTRATION_TO_CLOUD_STORAGE',
          'ACCOUNT_MANIPULATION',
          'SSH_AUTHORIZED_KEYS',
          'CREATE_OR_MODIFY_SYSTEM_PROCESS',
          'STEAL_WEB_SESSION_COOKIE',
          'MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE',
          'EXPLOIT_PUBLIC_FACING_APPLICATION',
          'MODIFY_AUTHENTICATION_PROCESS',
          'DATA_DESTRUCTION',
          'DOMAIN_POLICY_MODIFICATION',
          'IMPAIR_DEFENSES',
          'NETWORK_SERVICE_DISCOVERY',
          'ACCESS_TOKEN_MANIPULATION',
          'ABUSE_ELEVATION_CONTROL_MECHANISM',
          'DEFAULT_ACCOUNTS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.',
      }),
    primaryTactic: z
      .enum([
        'TACTIC_UNSPECIFIED',
        'RECONNAISSANCE',
        'RESOURCE_DEVELOPMENT',
        'INITIAL_ACCESS',
        'EXECUTION',
        'PERSISTENCE',
        'PRIVILEGE_ESCALATION',
        'DEFENSE_EVASION',
        'CREDENTIAL_ACCESS',
        'DISCOVERY',
        'LATERAL_MOVEMENT',
        'COLLECTION',
        'COMMAND_AND_CONTROL',
        'EXFILTRATION',
        'IMPACT',
      ])
      .exactOptional()
      .openapi({
        description: 'The MITRE ATT&CK tactic most closely represented by this finding, if any.',
      }),
    primaryTechniques: z
      .array(
        z.enum([
          'TECHNIQUE_UNSPECIFIED',
          'ACTIVE_SCANNING',
          'SCANNING_IP_BLOCKS',
          'INGRESS_TOOL_TRANSFER',
          'NATIVE_API',
          'SHARED_MODULES',
          'COMMAND_AND_SCRIPTING_INTERPRETER',
          'UNIX_SHELL',
          'RESOURCE_HIJACKING',
          'PROXY',
          'EXTERNAL_PROXY',
          'MULTI_HOP_PROXY',
          'DYNAMIC_RESOLUTION',
          'UNSECURED_CREDENTIALS',
          'VALID_ACCOUNTS',
          'LOCAL_ACCOUNTS',
          'CLOUD_ACCOUNTS',
          'NETWORK_DENIAL_OF_SERVICE',
          'PERMISSION_GROUPS_DISCOVERY',
          'CLOUD_GROUPS',
          'EXFILTRATION_OVER_WEB_SERVICE',
          'EXFILTRATION_TO_CLOUD_STORAGE',
          'ACCOUNT_MANIPULATION',
          'SSH_AUTHORIZED_KEYS',
          'CREATE_OR_MODIFY_SYSTEM_PROCESS',
          'STEAL_WEB_SESSION_COOKIE',
          'MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE',
          'EXPLOIT_PUBLIC_FACING_APPLICATION',
          'MODIFY_AUTHENTICATION_PROCESS',
          'DATA_DESTRUCTION',
          'DOMAIN_POLICY_MODIFICATION',
          'IMPAIR_DEFENSES',
          'NETWORK_SERVICE_DISCOVERY',
          'ACCESS_TOKEN_MANIPULATION',
          'ABUSE_ELEVATION_CONTROL_MECHANISM',
          'DEFAULT_ACCOUNTS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The MITRE ATT&CK version referenced by the above fields. E.g. "8".',
      }),
  })
  .openapi({
    description:
      'MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org',
    required: [],
  })
  .openapi('MitreAttack')

const ProcessSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Process arguments as JSON encoded strings.' }),
    argumentsTruncated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if `args` is incomplete.' }),
    binary: FileSchema.exactOptional().openapi({
      description: 'File information for the process executable.',
    }),
    envVariables: z
      .array(EnvironmentVariableSchema)
      .exactOptional()
      .openapi({ description: 'Process environment variables.' }),
    envVariablesTruncated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if `env_variables` is incomplete.' }),
    libraries: z
      .array(FileSchema)
      .exactOptional()
      .openapi({ description: 'File information for libraries loaded by the process.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The process name visible in utilities like `top` and `ps`; it can be accessed via `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`.',
      }),
    parentPid: z.string().exactOptional().openapi({ description: 'The parent process id.' }),
    pid: z.string().exactOptional().openapi({ description: 'The process id.' }),
    script: FileSchema.exactOptional().openapi({
      description:
        'When the process represents the invocation of a script, `binary` provides information about the interpreter while `script` provides information about the script file provided to the interpreter.',
    }),
  })
  .openapi({ description: 'Represents an operating system process.', required: [] })
  .openapi('Process')

const SecurityMarksSchema = z
  .object({
    canonicalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks"',
      }),
    marks: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".',
      }),
  })
  .openapi({
    description:
      'User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.',
    required: [],
  })
  .openapi('SecurityMarks')

const VulnerabilitySchema = z
  .object({
    cve: CveSchema.exactOptional().openapi({
      description:
        'CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)',
    }),
  })
  .openapi({
    description: 'Refers to common vulnerability fields e.g. cve, cvss, cwe etc.',
    required: [],
  })
  .openapi('Vulnerability')

const FindingSchema = z
  .object({
    access: AccessSchema.exactOptional().openapi({
      description:
        'Access details associated with the finding, such as more information on the caller, which method was accessed, and from where.',
    }),
    canonicalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical name of the finding. It\'s either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"',
      }),
    cloudDlpDataProfile: CloudDlpDataProfileSchema.exactOptional().openapi({
      description: 'Cloud DLP data profile that is associated with the finding.',
    }),
    cloudDlpInspection: CloudDlpInspectionSchema.exactOptional().openapi({
      description:
        'Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding.',
    }),
    compliances: z
      .array(ComplianceSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains compliance information for security standards associated to the finding.',
      }),
    connections: z
      .array(ConnectionSchema)
      .exactOptional()
      .openapi({
        description: 'Contains information about the IP connection associated with the finding.',
      }),
    contacts: z
      .record(z.string(), ContactDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } }',
        readOnly: true,
      }),
    containers: z
      .array(ContainerSchema)
      .exactOptional()
      .openapi({
        description:
          'Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the finding was created in Security Command Center.',
      }),
    database: DatabaseSchema.exactOptional().openapi({
      description: 'Database associated with the finding.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains more details about the finding.' }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.',
      }),
    exfiltration: ExfiltrationSchema.exactOptional().openapi({
      description: 'Represents exfiltrations associated with the finding.',
    }),
    externalSystems: z
      .record(z.string(), GoogleCloudSecuritycenterV1ExternalSystemSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.',
        readOnly: true,
      }),
    externalUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.',
      }),
    files: z
      .array(FileSchema)
      .exactOptional()
      .openapi({ description: 'File associated with the finding.' }),
    findingClass: z
      .enum([
        'FINDING_CLASS_UNSPECIFIED',
        'THREAT',
        'VULNERABILITY',
        'MISCONFIGURATION',
        'OBSERVATION',
        'SCC_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'The class of the finding.' }),
    iamBindings: z
      .array(IamBindingSchema)
      .exactOptional()
      .openapi({ description: 'Represents IAM bindings associated with the finding.' }),
    indicator: IndicatorSchema.exactOptional().openapi({
      description:
        "Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).",
    }),
    kernelRootkit: KernelRootkitSchema.exactOptional().openapi({
      description: 'Signature of the kernel rootkit.',
    }),
    kubernetes: KubernetesSchema.exactOptional().openapi({
      description: 'Kubernetes resources associated with the finding.',
    }),
    mitreAttack: MitreAttackSchema.exactOptional().openapi({
      description:
        'MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org',
    }),
    moduleName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885',
      }),
    mute: z
      .enum(['MUTE_UNSPECIFIED', 'MUTED', 'UNMUTED', 'UNDEFINED'])
      .exactOptional()
      .openapi({
        description:
          "Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.",
      }),
    muteInitiator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding.',
      }),
    muteUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time this finding was muted or unmuted.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".',
      }),
    nextSteps: z.string().exactOptional().openapi({ description: 'Steps to address the finding.' }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"',
      }),
    parentDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics".',
        readOnly: true,
      }),
    processes: z
      .array(ProcessSchema)
      .exactOptional()
      .openapi({
        description: 'Represents operating system processes associated with the Finding.',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.',
      }),
    securityMarks: SecurityMarksSchema.exactOptional().openapi({
      description:
        'Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.',
      readOnly: true,
    }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'])
      .exactOptional()
      .openapi({
        description:
          'The severity of the finding. This field is managed by the source that writes the finding.',
      }),
    sourceProperties: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({ description: 'The state of the finding.' }),
    vulnerability: VulnerabilitySchema.exactOptional().openapi({
      description:
        'Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)',
    }),
  })
  .openapi({
    description:
      'Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.',
    required: [],
  })
  .openapi('Finding')

const FolderSchema = z
  .object({
    resourceFolder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name',
      }),
    resourceFolderDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user defined display name for this folder.' }),
  })
  .openapi({
    description: 'Message that contains the resource name and display name of a folder resource.',
    required: [],
  })
  .openapi('Folder')

const GoogleCloudSecuritycenterV1BigQueryExportSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.',
        readOnly: true,
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The dataset to write findings\' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the export (max of 1024 characters).' }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.',
      }),
    mostRecentEditor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.',
      }),
    principal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Configures how to deliver Findings to BigQuery Instance.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1BigQueryExport')

const GoogleCloudSecuritycenterV1BulkMuteFindingsResponseSchema = z
  .object({})
  .openapi({ description: 'The response to a BulkMute request. Contains the LRO information.' })
  .openapi('GoogleCloudSecuritycenterV1BulkMuteFindingsResponse')

const GoogleCloudSecuritycenterV1PropertySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the property for the custom output.' }),
    valueExpression: ExprSchema.exactOptional().openapi({
      description:
        'The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks.',
    }),
  })
  .openapi({
    description: 'An individual name-value pair that defines a custom source property.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1Property')

const GoogleCloudSecuritycenterV1CustomOutputSpecSchema = z
  .object({
    properties: z
      .array(GoogleCloudSecuritycenterV1PropertySchema)
      .exactOptional()
      .openapi({ description: 'A list of custom output properties to add to the finding.' }),
  })
  .openapi({
    description:
      'A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1CustomOutputSpec')

const GoogleCloudSecuritycenterV1ResourceSelectorSchema = z
  .object({
    resourceTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The resource types to run the detector on.' }),
  })
  .openapi({ description: 'Resource for selecting resource type.', required: [] })
  .openapi('GoogleCloudSecuritycenterV1ResourceSelector')

const GoogleCloudSecuritycenterV1CustomConfigSchema = z
  .object({
    customOutput: GoogleCloudSecuritycenterV1CustomOutputSpecSchema.exactOptional().openapi({
      description: 'Custom output properties.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks.',
      }),
    predicate: ExprSchema.exactOptional().openapi({
      description:
        'The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated.',
    }),
    recommendation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON.',
      }),
    resourceSelector: GoogleCloudSecuritycenterV1ResourceSelectorSchema.exactOptional().openapi({
      description:
        'The resource types that the custom module operates on. Each custom module can specify up to 5 resource types.',
    }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'])
      .exactOptional()
      .openapi({ description: 'The severity to assign to findings generated by the module.' }),
  })
  .openapi({
    description:
      'Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1CustomConfig')

const GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleSchema = z
  .object({
    customConfig: GoogleCloudSecuritycenterV1CustomConfigSchema.exactOptional().openapi({
      description: 'Output only. The user-specified configuration for the module.',
      readOnly: true,
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.',
        readOnly: true,
      }),
    enablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The effective state of enablement for the module at the given level of the hierarchy.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}"',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule')

const GoogleCloudSecuritycenterV1MuteConfigSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the mute config.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name to be displayed for the mute config.' }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:`',
      }),
    mostRecentEditor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field will be ignored if provided on config creation. Format "organizations/{organization}/muteConfigs/{mute_config}" "folders/{folder}/muteConfigs/{mute_config}" "projects/{project}/muteConfigs/{mute_config}"',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1MuteConfig')

const GoogleCloudSecuritycenterV1ResourceSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name of the resource.' }),
    folders: z
      .array(FolderSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: "The full resource name of resource's parent." }),
    parentDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The human readable name of resource's parent." }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full resource name of project that the resource belongs to.' }),
    projectDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project ID that the resource belongs to.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full resource type of the resource.' }),
  })
  .openapi({ description: 'Information related to the Google Cloud resource.', required: [] })
  .openapi('GoogleCloudSecuritycenterV1Resource')

const GoogleCloudSecuritycenterV1NotificationMessageSchema = z
  .object({
    finding: FindingSchema.exactOptional().openapi({
      description: "If it's a Finding based notification config, this field will be populated.",
    }),
    notificationConfigName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the notification config that generated current notification.',
      }),
    resource: GoogleCloudSecuritycenterV1ResourceSchema.exactOptional().openapi({
      description: "The Cloud resource tied to this notification's Finding.",
    }),
  })
  .openapi({ description: "Cloud SCC's Notification", required: [] })
  .openapi('GoogleCloudSecuritycenterV1NotificationMessage')

const GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration between asset discovery run start and end' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'COMPLETED', 'SUPERSEDED', 'TERMINATED'])
      .exactOptional()
      .openapi({ description: 'The state of an asset discovery run.' }),
  })
  .openapi({ description: 'Response of asset discovery run', required: [] })
  .openapi('GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse')

const GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleSchema = z
  .object({
    ancestorModule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.',
        readOnly: true,
      }),
    customConfig: GoogleCloudSecuritycenterV1CustomConfigSchema.exactOptional().openapi({
      description: 'The user specified custom configuration for the module.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.',
      }),
    enablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'ENABLED', 'DISABLED', 'INHERITED'])
      .exactOptional()
      .openapi({ description: 'The enablement state of the custom module.' }),
    lastEditor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The editor that last updated the custom module.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the custom module was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule')

const GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponseSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration between asset discovery run start and end' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'COMPLETED', 'SUPERSEDED', 'TERMINATED'])
      .exactOptional()
      .openapi({ description: 'The state of an asset discovery run.' }),
  })
  .openapi({ description: 'Response of asset discovery run', required: [] })
  .openapi('GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse')

const GoogleCloudSecuritycenterV1p1beta1SecurityMarksSchema = z
  .object({
    canonicalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks"',
      }),
    marks: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".',
      }),
  })
  .openapi({
    description:
      'User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1p1beta1SecurityMarks')

const GoogleCloudSecuritycenterV1p1beta1FindingSchema = z
  .object({
    canonicalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical name of the finding. It\'s either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the finding was created in Security Command Center.',
      }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp.',
      }),
    externalUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.',
      }),
    securityMarks: GoogleCloudSecuritycenterV1p1beta1SecurityMarksSchema.exactOptional().openapi({
      description:
        'Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.',
      readOnly: true,
    }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'])
      .exactOptional()
      .openapi({
        description:
          'The severity of the finding. This field is managed by the source that writes the finding.',
      }),
    sourceProperties: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({ description: 'The state of the finding.' }),
  })
  .openapi({
    description:
      'Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1p1beta1Finding')

const GoogleCloudSecuritycenterV1p1beta1FolderSchema = z
  .object({
    resourceFolder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name',
      }),
    resourceFolderDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user defined display name for this folder.' }),
  })
  .openapi({
    description: 'Message that contains the resource name and display name of a folder resource.',
    required: [],
  })
  .openapi('GoogleCloudSecuritycenterV1p1beta1Folder')

const GoogleCloudSecuritycenterV1p1beta1ResourceSchema = z
  .object({
    folders: z
      .array(GoogleCloudSecuritycenterV1p1beta1FolderSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: "The full resource name of resource's parent." }),
    parentDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The human readable name of resource's parent." }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full resource name of project that the resource belongs to.' }),
    projectDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project id that the resource belongs to.' }),
  })
  .openapi({ description: 'Information related to the Google Cloud resource.', required: [] })
  .openapi('GoogleCloudSecuritycenterV1p1beta1Resource')

const GoogleCloudSecuritycenterV1p1beta1NotificationMessageSchema = z
  .object({
    finding: GoogleCloudSecuritycenterV1p1beta1FindingSchema.exactOptional().openapi({
      description: "If it's a Finding based notification config, this field will be populated.",
    }),
    notificationConfigName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the notification config that generated current notification.',
      }),
    resource: GoogleCloudSecuritycenterV1p1beta1ResourceSchema.exactOptional().openapi({
      description: 'The Cloud resource tied to the notification.',
    }),
  })
  .openapi({ description: "Security Command Center's Notification", required: [] })
  .openapi('GoogleCloudSecuritycenterV1p1beta1NotificationMessage')

const GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponseSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration between asset discovery run start and end' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'COMPLETED', 'SUPERSEDED', 'TERMINATED'])
      .exactOptional()
      .openapi({ description: 'The state of an asset discovery run.' }),
  })
  .openapi({ description: 'Response of asset discovery run', required: [] })
  .openapi('GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse')

const OnboardingStateSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the OnboardingState. Format: organizations/{organization}/onboardingState Format: folders/{folder}/onboardingState Format: projects/{project}/onboardingState',
      }),
    onboardingLevel: z
      .enum([
        'ONBOARDING_LEVEL_UNSPECIFIED',
        'ONBOARDING_LEVEL_PROJECT',
        'ONBOARDING_LEVEL_ORGANIZATION',
      ])
      .exactOptional()
      .openapi({
        description:
          "Describes the level a given organization, folder, or project is onboarded with SCC. If the resource wasn't onboarded, NOT_FOUND would have been thrown.",
      }),
  })
  .openapi({
    description: 'Resource capturing onboarding information for a given CRM resource.',
    required: [],
  })
  .openapi('OnboardingState')

const RapidVulnerabilityDetectionSettingsSchema = z
  .object({
    modules: z
      .record(z.string(), ConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings',
      }),
    serviceEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Resource capturing the settings for the Rapid Vulnerability Detection service.',
    required: [],
  })
  .openapi('RapidVulnerabilityDetectionSettings')

const SecurityCenterSettingsSchema = z
  .object({
    logSinkProject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings',
      }),
    onboardingTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp of when the customer organization was onboarded to SCC.',
        readOnly: true,
      }),
    orgServiceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The organization level service account to be used for security center components.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Resource capturing the settings for Security Center.', required: [] })
  .openapi('SecurityCenterSettings')

const SecurityHealthAnalyticsSettingsSchema = z
  .object({
    modules: z
      .record(z.string(), ConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The service account used by Security Health Analytics detectors.',
        readOnly: true,
      }),
    serviceEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Resource capturing the settings for the Security Health Analytics service.',
    required: [],
  })
  .openapi('SecurityHealthAnalyticsSettings')

const SubscriptionSchema = z
  .object({
    details: DetailsSchema.exactOptional().openapi({
      description:
        'The details of the most recent active subscription. If there has never been a subscription this will be empty.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the subscription. Format: organizations/{organization}/subscription',
      }),
    tier: z
      .enum(['TIER_UNSPECIFIED', 'STANDARD', 'PREMIUM'])
      .exactOptional()
      .openapi({
        description: 'The tier of SCC features this organization currently has access to.',
      }),
  })
  .openapi({
    description: "Resource capturing the state of an organization's subscription.",
    required: [],
  })
  .openapi('Subscription')

const VirtualMachineThreatDetectionSettingsSchema = z
  .object({
    modules: z
      .record(z.string(), ConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The service account used by Virtual Machine Threat Detection detectors.',
        readOnly: true,
      }),
    serviceEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Resource capturing the settings for the Virtual Machine Threat Detection service.',
    required: [],
  })
  .openapi('VirtualMachineThreatDetectionSettings')

const WebSecurityScannerSettingsSchema = z
  .object({
    modules: z
      .record(z.string(), ConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings',
      }),
    serviceEnablementState: z
      .enum(['ENABLEMENT_STATE_UNSPECIFIED', 'INHERITED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Resource capturing the settings for the Web Security Scanner service.',
    required: [],
  })
  .openapi('WebSecurityScannerSettings')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta2NameRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description:
    'Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.',
  operationId: 'securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerThreatDetectionSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta2NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description: 'Update the ContainerThreatDetectionSettings resource.',
  operationId: 'securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContainerThreatDetectionSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContainerThreatDetectionSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta2NameCalculateRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{name}:calculate',
  tags: ['projects'],
  description:
    'Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.',
  operationId: 'securitycenter.projects.webSecurityScannerSettings.calculate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebSecurityScannerSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
