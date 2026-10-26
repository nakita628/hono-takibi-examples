import { createRoute, z } from '@hono/zod-openapi'

const SecretSchema = z
  .string()
  .openapi({ title: 'Secret special type for storing secrets.' })
  .openapi('Secret')

const AuthorizationSchema = z
  .object({
    credentials: SecretSchema.exactOptional(),
    credentials_file: z.string().exactOptional(),
    credentials_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CredentialsRef is the name of the secret within the secret manager to use as credentials.',
      }),
    type: z.string().exactOptional(),
  })
  .openapi({ title: 'Authorization contains HTTP authorization credentials.', required: [] })
  .openapi('Authorization')

const BasicAuthSchema = z
  .object({
    password: SecretSchema.exactOptional(),
    password_file: z.string().exactOptional(),
    password_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PasswordRef is the name of the secret within the secret manager to use as the password.',
      }),
    username: z.string().exactOptional(),
    username_file: z.string().exactOptional(),
    username_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UsernameRef is the name of the secret within the secret manager to use as the username.',
      }),
  })
  .openapi({ title: 'BasicAuth contains basic HTTP authentication credentials.', required: [] })
  .openapi('BasicAuth')

const HeaderSchema = z
  .object({
    files: z.array(z.string()).exactOptional(),
    secrets: z.array(SecretSchema).exactOptional(),
    values: z.array(z.string()).exactOptional(),
  })
  .openapi({ title: 'Header represents the configuration for a single HTTP header.', required: [] })
  .openapi('Header')

const HeadersSchema = z
  .object({ Headers: z.record(z.string(), HeaderSchema).exactOptional() })
  .openapi({ title: 'Headers represents the configuration for HTTP headers.', required: [] })
  .openapi('Headers')

const TLSVersionSchema = z.int().openapi('TLSVersion')

const TLSConfigSchema = z
  .object({
    ca: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text of the CA cert to use for the targets.' }),
    ca_file: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CA cert to use for the targets.' }),
    ca_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CARef is the name of the secret within the secret manager to use as the CA cert for the\ntargets.',
      }),
    cert: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text of the client cert file for the targets.' }),
    cert_file: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client cert file for the targets.' }),
    cert_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CertRef is the name of the secret within the secret manager to use as the client cert for\nthe targets.',
      }),
    insecure_skip_verify: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disable target certificate validation.' }),
    key: SecretSchema.exactOptional(),
    key_file: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client key file for the targets.' }),
    key_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'KeyRef is the name of the secret within the secret manager to use as the client key for\nthe targets.',
      }),
    max_version: TLSVersionSchema.exactOptional(),
    min_version: TLSVersionSchema.exactOptional(),
    server_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to verify the hostname for the targets.' }),
  })
  .openapi({ title: 'TLSConfig configures the options for TLS connections.', required: [] })
  .openapi('TLSConfig')

const ProxyHeaderSchema = z.record(z.string(), z.array(SecretSchema)).openapi('ProxyHeader')

const URLSchema = z.url().openapi('URL')

const OAuth2Schema = z
  .object({
    TLSConfig: TLSConfigSchema.exactOptional(),
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Audience optionally specifies the intended audience of the\nrequest.  If empty, the value of TokenURL is used as the\nintended audience. Only used if\nGrantType is set to "urn:ietf:params:oauth:grant-type:jwt-bearer".',
      }),
    claims: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Claims is a map of claims to be added to the JWT token. Only used if\nGrantType is set to "urn:ietf:params:oauth:grant-type:jwt-bearer".',
      }),
    client_certificate_key: SecretSchema.exactOptional(),
    client_certificate_key_file: z.string().exactOptional(),
    client_certificate_key_id: z.string().exactOptional(),
    client_certificate_key_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ClientCertificateKeyRef is the name of the secret within the secret manager to use as the client\nsecret.',
      }),
    client_id: z.string().exactOptional(),
    client_secret: SecretSchema.exactOptional(),
    client_secret_file: z.string().exactOptional(),
    client_secret_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ClientSecretRef is the name of the secret within the secret manager to use as the client\nsecret.',
      }),
    endpoint_params: z.record(z.string(), z.string()).exactOptional(),
    grant_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GrantType is the OAuth2 grant type to use. It can be one of\n"client_credentials" or "urn:ietf:params:oauth:grant-type:jwt-bearer" (RFC 7523).\nDefault value is "client_credentials"',
      }),
    iss: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Iss is the OAuth client identifier used when communicating with\nthe configured OAuth provider. Default value is client_id. Only used if\nGrantType is set to "urn:ietf:params:oauth:grant-type:jwt-bearer".',
      }),
    no_proxy: z
      .string()
      .exactOptional()
      .openapi({ description: 'NoProxy contains addresses that should not use a proxy.' }),
    proxy_connect_header: ProxyHeaderSchema.exactOptional(),
    proxy_from_environment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'ProxyFromEnvironment makes use of net/http ProxyFromEnvironment function\nto determine proxies.',
      }),
    proxy_url: URLSchema.exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    signature_algorithm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SignatureAlgorithm is the RSA algorithm used to sign JWT token. Only used if\nGrantType is set to "urn:ietf:params:oauth:grant-type:jwt-bearer".\nDefault value is RS256 and valid values RS256, RS384, RS512',
      }),
    token_url: z.string().exactOptional(),
  })
  .openapi({ title: 'OAuth2 is the oauth2 client configuration.', required: [] })
  .openapi('OAuth2')

const HTTPClientConfigSchema = z
  .object({
    authorization: AuthorizationSchema.exactOptional(),
    basic_auth: BasicAuthSchema.exactOptional(),
    bearer_token: SecretSchema.exactOptional(),
    bearer_token_file: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bearer token file for the targets. Deprecated in favour of\nAuthorization.CredentialsFile.',
      }),
    enable_http2: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'EnableHTTP2 specifies whether the client should configure HTTP2.\nThe omitempty flag is not set, because it would be hidden from the\nmarshalled configuration when set to false.',
      }),
    follow_redirects: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'FollowRedirects specifies whether the client should follow HTTP 3xx redirects.\nThe omitempty flag is not set, because it would be hidden from the\nmarshalled configuration when set to false.',
      }),
    http_headers: HeadersSchema.exactOptional(),
    no_proxy: z
      .string()
      .exactOptional()
      .openapi({ description: 'NoProxy contains addresses that should not use a proxy.' }),
    oauth2: OAuth2Schema.exactOptional(),
    proxy_connect_header: ProxyHeaderSchema.exactOptional(),
    proxy_from_environment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'ProxyFromEnvironment makes use of net/http ProxyFromEnvironment function\nto determine proxies.',
      }),
    proxy_url: URLSchema.exactOptional(),
    tls_config: TLSConfigSchema.exactOptional(),
  })
  .openapi({ title: 'HTTPClientConfig configures an HTTP client.', required: [] })
  .openapi('HTTPClientConfig')

const DurationSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description:
      'A Duration represents the elapsed time between two instants\nas an int64 nanosecond count. The representation limits the\nlargest representable duration to approximately 290 years.',
  })
  .openapi('Duration')

const HostPortSchema = z
  .object({ Host: z.string().exactOptional(), Port: z.string().exactOptional() })
  .openapi({ title: 'HostPort represents a "host:port" network address.', required: [] })
  .openapi('HostPort')

const GlobalConfigSchema = z
  .object({
    http_config: HTTPClientConfigSchema.exactOptional(),
    jira_api_url: URLSchema.exactOptional(),
    opsgenie_api_key: SecretSchema.exactOptional(),
    opsgenie_api_key_file: z.string().exactOptional(),
    opsgenie_api_url: URLSchema.exactOptional(),
    pagerduty_url: URLSchema.exactOptional(),
    resolve_timeout: DurationSchema.exactOptional(),
    slack_api_url: URLSchema.exactOptional(),
    slack_api_url_file: z.string().exactOptional(),
    smtp_auth_identity: z.string().exactOptional(),
    smtp_auth_password: SecretSchema.exactOptional(),
    smtp_auth_password_file: z.string().exactOptional(),
    smtp_auth_secret: SecretSchema.exactOptional(),
    smtp_auth_username: z.string().exactOptional(),
    smtp_from: z.string().exactOptional(),
    smtp_hello: z.string().exactOptional(),
    smtp_require_tls: z.boolean().exactOptional(),
    smtp_smarthost: HostPortSchema.exactOptional(),
    smtp_tls_config: TLSConfigSchema.exactOptional(),
    telegram_api_url: URLSchema.exactOptional(),
    victorops_api_key: SecretSchema.exactOptional(),
    victorops_api_key_file: z.string().exactOptional(),
    victorops_api_url: URLSchema.exactOptional(),
    webex_api_url: URLSchema.exactOptional(),
    wechat_api_corp_id: z.string().exactOptional(),
    wechat_api_secret: SecretSchema.exactOptional(),
    wechat_api_url: URLSchema.exactOptional(),
  })
  .openapi({
    description:
      'GlobalConfig defines configuration parameters that are valid globally\nunless overwritten.',
    required: [],
  })
  .openapi('GlobalConfig')

const MatchRegexpsSchema = z
  .record(z.string(), z.string())
  .openapi({ title: 'MatchRegexps represents a map of Regexp.' })
  .openapi('MatchRegexps')

const MatchTypeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    title: 'MatchType is an enum for label matching types.',
  })
  .openapi('MatchType')

const MatcherSchema = z
  .object({
    Name: z.string().exactOptional(),
    Type: MatchTypeSchema.exactOptional(),
    Value: z.string().exactOptional(),
  })
  .openapi({ title: 'Matcher models the matching of a label.', required: [] })
  .openapi('Matcher')

const MatchersSchema = z
  .array(MatcherSchema)
  .openapi({
    description:
      'Matchers is a slice of Matchers that is sortable, implements Stringer, and\nprovides a Matches method to match a LabelSet against all Matchers in the\nslice. Note that some users of Matchers might require it to be sorted.',
  })
  .openapi('Matchers')

const InhibitRuleSchema = z
  .object({
    equal: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of labels that must be equal between the source and target alert\nfor them to be a match.',
      }),
    source_match: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'SourceMatch defines a set of labels that have to equal the given\nvalue for source alerts. Deprecated. Remove before v1.0 release.',
      }),
    source_match_re: MatchRegexpsSchema.exactOptional(),
    source_matchers: MatchersSchema.exactOptional(),
    target_match: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'TargetMatch defines a set of labels that have to equal the given\nvalue for target alerts. Deprecated. Remove before v1.0 release.',
      }),
    target_match_re: MatchRegexpsSchema.exactOptional(),
    target_matchers: MatchersSchema.exactOptional(),
  })
  .openapi({
    description:
      'InhibitRule defines an inhibition rule that mutes alerts that match the\ntarget labels if an alert matching the source labels exists.\nBoth alerts have to have a set of labels being equal.',
    required: [],
  })
  .openapi('InhibitRule')

const TimeIntervalSchema: z.ZodType<TimeIntervalType> = z
  .lazy(() =>
    z
      .object({
        name: z.string().exactOptional(),
        time_intervals: z.array(TimeIntervalSchema).exactOptional(),
      })
      .openapi({
        title:
          'TimeInterval represents a named set of time intervals for which a route should be muted.',
        required: [],
      }),
  )
  .openapi('TimeInterval')

const MuteTimeIntervalSchema = z
  .object({
    name: z.string().exactOptional(),
    time_intervals: z.array(TimeIntervalSchema).exactOptional(),
  })
  .openapi({
    title:
      'MuteTimeInterval represents a named set of time intervals for which a route should be muted.',
    required: [],
  })
  .openapi('MuteTimeInterval')

const RouteSchema: z.ZodType<RouteType> = z
  .lazy(() =>
    z
      .object({
        active_time_intervals: z.array(z.string()).exactOptional(),
        continue: z.boolean().exactOptional(),
        group_by: z.array(z.string()).exactOptional(),
        group_interval: z.string().exactOptional(),
        group_wait: z.string().exactOptional(),
        match: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'Deprecated. Remove before v1.0 release.' }),
        match_re: MatchRegexpsSchema.exactOptional(),
        matchers: MatchersSchema.exactOptional(),
        mute_time_intervals: z.array(z.string()).exactOptional(),
        object_matchers: ObjectMatchersSchema.exactOptional(),
        provenance: ProvenanceSchema.exactOptional(),
        receiver: z.string().exactOptional(),
        repeat_interval: z.string().exactOptional(),
        routes: z.array(RouteSchema).exactOptional(),
      })
      .openapi({
        description:
          'A Route is a node that contains definitions of how to handle alerts. This is modified\nfrom the upstream alertmanager in that it adds the ObjectMatchers property.',
        required: [],
      }),
  )
  .openapi('Route')

type ConfigType = {
  global?: z.infer<typeof GlobalConfigSchema>
  inhibit_rules?: z.infer<typeof InhibitRuleSchema>[]
  mute_time_intervals?: z.infer<typeof MuteTimeIntervalSchema>[]
  route?: z.infer<typeof RouteSchema>
  templates?: string[]
  time_intervals?: z.infer<typeof TimeIntervalSchema>[]
}

const ExplorePanelsStateSchema = z
  .any()
  .openapi({
    description:
      'This is an object constructed with the keys as the values of the enum VisType and the value being a bag of properties',
  })
  .openapi('ExplorePanelsState')

const TimeRangeSchema = z
  .object({
    from: z.iso.datetime({ offset: true }).exactOptional(),
    to: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ description: 'Redefining this to avoid an import cycle', required: [] })
  .openapi('TimeRange')

const SupportedTransformationTypesSchema = z.string().openapi('SupportedTransformationTypes')

const LinkTransformationConfigSchema = z
  .object({
    expression: z.string().exactOptional(),
    field: z.string().exactOptional(),
    mapValue: z.string().exactOptional(),
    type: SupportedTransformationTypesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LinkTransformationConfig')

const InternalDataLinkSchema = z
  .object({
    datasourceName: z.string().exactOptional(),
    datasourceUid: z.string().exactOptional(),
    panelsState: ExplorePanelsStateSchema.exactOptional(),
    query: z.any().exactOptional(),
    timeRange: TimeRangeSchema.exactOptional(),
    transformations: z.array(LinkTransformationConfigSchema).exactOptional(),
  })
  .openapi({
    description:
      'InternalDataLink definition to allow Explore links to be constructed in the backend',
    required: [],
  })
  .openapi('InternalDataLink')

type DataLinkType = {
  internal?: z.infer<typeof InternalDataLinkSchema>
  targetBlank?: boolean
  title?: string
  url?: string
}

const MetadataSchema = z
  .record(z.string(), z.boolean())
  .openapi({
    description:
      'Metadata contains user accesses for a given resource\nEx: map[string]bool{"create":true, "delete": true}',
  })
  .openapi('Metadata')

const ManagerKindSchema = z
  .string()
  .openapi({
    description: 'It can be a user or a tool or a generic API client.',
    title: 'ManagerKind is the type of manager, which is responsible for managing the resource.',
  })
  .openapi('ManagerKind')

type FolderType = {
  accessControl?: z.infer<typeof MetadataSchema>
  canAdmin?: boolean
  canDelete?: boolean
  canEdit?: boolean
  canSave?: boolean
  created?: string
  createdBy?: string
  hasAcl?: boolean
  id?: bigint
  managedBy?: z.infer<typeof ManagerKindSchema>
  orgId?: bigint
  parentUid?: string
  parents?: FolderType[]
  title?: string
  uid?: string
  updated?: string
  updatedBy?: string
  url?: string
  version?: bigint
}

const ObjectMatcherSchema = z
  .array(z.string())
  .openapi({ title: 'ObjectMatcher is a matcher that can be used to filter alerts.' })
  .openapi('ObjectMatcher')

const ObjectMatchersSchema = z
  .array(ObjectMatcherSchema)
  .openapi({ title: 'ObjectMatchers is a list of matchers that can be used to filter alerts.' })
  .openapi('ObjectMatchers')

const ProvenanceSchema = z.string().openapi('Provenance')

type RouteType = {
  active_time_intervals?: string[]
  continue?: boolean
  group_by?: string[]
  group_interval?: string
  group_wait?: string
  match?: { [key: string]: string }
  match_re?: z.infer<typeof MatchRegexpsSchema>
  matchers?: z.infer<typeof MatchersSchema>
  mute_time_intervals?: string[]
  object_matchers?: z.infer<typeof ObjectMatchersSchema>
  provenance?: z.infer<typeof ProvenanceSchema>
  receiver?: string
  repeat_interval?: string
  routes?: RouteType[]
}

type RouteExportType = {
  active_time_intervals?: string[]
  continue?: boolean
  group_by?: string[]
  group_interval?: string
  group_wait?: string
  match?: { [key: string]: string }
  match_re?: z.infer<typeof MatchRegexpsSchema>
  matchers?: z.infer<typeof MatchersSchema>
  mute_time_intervals?: string[]
  object_matchers?: z.infer<typeof ObjectMatchersSchema>
  receiver?: string
  repeat_interval?: string
  routes?: RouteExportType[]
}

type TimeIntervalType = { name?: string; time_intervals?: TimeIntervalType[] }

const AccessControlStatusSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccessControlStatus')

const AckSchema = z.object({}).openapi('Ack')

const FailedUserSchema = z
  .object({ Error: z.string().exactOptional(), Login: z.string().exactOptional() })
  .openapi({ description: 'FailedUser holds the information of an user that failed', required: [] })
  .openapi('FailedUser')

const SyncResultSchema = z
  .object({
    Elapsed: DurationSchema.exactOptional(),
    FailedUsers: z.array(FailedUserSchema).exactOptional(),
    MissingUserIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    Started: z.iso.datetime({ offset: true }).exactOptional(),
    UpdatedUserIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({
    title:
      'SyncResult holds the result of a sync with LDAP. This gives us information on which users were updated and how.',
    required: [],
  })
  .openapi('SyncResult')

const ActiveSyncStatusDTOSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    nextSync: z.iso.datetime({ offset: true }).exactOptional(),
    prevSync: SyncResultSchema.exactOptional(),
    schedule: z.string().exactOptional(),
  })
  .openapi({
    description: 'ActiveSyncStatusDTO holds the information for LDAP background Sync',
    required: [],
  })
  .openapi('ActiveSyncStatusDTO')

const ActiveUserStatsSchema = z
  .object({
    active_admins_and_editors: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    active_anonymous_devices: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    active_users: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    active_viewers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('ActiveUserStats')

const DsAccessSchema = z.string().openapi('DsAccess')

const JsonSchema = z.object({}).openapi('Json')

const AddDataSourceCommandSchema = z
  .object({
    access: DsAccessSchema.exactOptional(),
    basicAuth: z.boolean().exactOptional(),
    basicAuthUser: z.string().exactOptional(),
    database: z.string().exactOptional(),
    isDefault: z.boolean().exactOptional(),
    jsonData: JsonSchema.exactOptional(),
    name: z.string().exactOptional(),
    secureJsonData: z.record(z.string(), z.string()).exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    url: z.string().exactOptional(),
    user: z.string().exactOptional(),
    withCredentials: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Also acts as api DTO', required: [] })
  .openapi('AddDataSourceCommand')

const AddInviteFormSchema = z
  .object({
    loginOrEmail: z.string().exactOptional(),
    name: z.string().exactOptional(),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
    sendEmail: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddInviteForm')

const AddOrgUserCommandSchema = z
  .object({
    loginOrEmail: z.string().exactOptional(),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddOrgUserCommand')

const AddServiceAccountTokenCommandSchema = z
  .object({
    name: z.string().exactOptional(),
    secondsToLive: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AddServiceAccountTokenCommand')

const AddTeamMemberCommandSchema = z
  .object({
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['userId'] })
  .openapi('AddTeamMemberCommand')

const AddTeamRoleCommandSchema = z
  .object({ roleUid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AddTeamRoleCommand')

const AddUserRoleCommandSchema = z
  .object({ global: z.boolean().exactOptional(), roleUid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AddUserRoleCommand')

const AddressSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    state: z.string().exactOptional(),
    zipCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Address')

const PasswordSchema = z.string().openapi('Password')

const AdminCreateUserFormSchema = z
  .object({
    email: z.string().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    password: PasswordSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminCreateUserForm')

const AdminCreateUserResponseSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminCreateUserResponse')

const AdminStatsSchema = z
  .object({
    activeAdmins: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    activeDevices: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    activeEditors: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    activeSessions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    activeUsers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    activeViewers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    admins: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    alerts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dailyActiveAdmins: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dailyActiveEditors: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dailyActiveSessions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dailyActiveUsers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dailyActiveViewers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboards: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    datasources: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    editors: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    monthlyActiveUsers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    orgs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    playlists: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    snapshots: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stars: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tags: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    users: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    viewers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AdminStats')

const AdminUpdateUserPasswordFormSchema = z
  .object({ password: PasswordSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AdminUpdateUserPasswordForm')

const AdminUpdateUserPermissionsFormSchema = z
  .object({ isGrafanaAdmin: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('AdminUpdateUserPermissionsForm')

const LabelsSchema = z
  .object({})
  .openapi({
    description:
      'Each name and value is preceded by its length, encoded as a single byte\nfor size 0-254, or the following 3 bytes little-endian, if the first byte is 255.\nMaximum length allowed is 2^24 or 16MB.\nNames are in order.',
    title: 'Labels is implemented by a single flat string holding name/value pairs.',
  })
  .openapi('Labels')

const AlertSchema = z
  .object({
    activeAt: z.iso.datetime({ offset: true }).exactOptional(),
    annotations: LabelsSchema,
    labels: LabelsSchema,
    state: z.string(),
    value: z.string(),
  })
  .openapi({
    required: ['labels', 'annotations', 'state', 'value'],
    title: 'Alert has info for an alert.',
  })
  .openapi('Alert')

const AlertDiscoverySchema = z
  .object({ alerts: z.array(AlertSchema) })
  .openapi({ required: ['alerts'], title: 'AlertDiscovery has info for all active alerts.' })
  .openapi('AlertDiscovery')

const AlertInstancesResponseSchema = z
  .object({
    instances: z
      .array(z.array(z.int()))
      .exactOptional()
      .openapi({
        description:
          'Instances is an array of arrow encoded dataframes\neach frame has a single row, and a column for each instance (alert identified by unique labels) with a boolean value (firing/not firing)',
      }),
  })
  .openapi({ required: [] })
  .openapi('AlertInstancesResponse')

const AlertManagerSchema = z
  .object({ url: z.string().exactOptional() })
  .openapi({ title: 'AlertManager models a configured Alert Manager.', required: [] })
  .openapi('AlertManager')

const AlertManagerNotReadySchema = z.object({}).openapi('AlertManagerNotReady')

const AlertManagersResultSchema = z
  .object({
    activeAlertManagers: z.array(AlertManagerSchema).exactOptional(),
    droppedAlertManagers: z.array(AlertManagerSchema).exactOptional(),
  })
  .openapi({
    title: 'AlertManagersResult contains the result from querying the alertmanagers endpoint.',
    required: [],
  })
  .openapi('AlertManagersResult')

const RelativeTimeRangeSchema = z
  .object({ from: DurationSchema.exactOptional(), to: DurationSchema.exactOptional() })
  .openapi({
    description: 'RelativeTimeRange is the per query start and end time\nfor requests.',
    required: [],
  })
  .openapi('RelativeTimeRange')

const AlertQuerySchema = z
  .object({
    datasourceUid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Grafana data source unique identifier; it should be '__expr__' for a Server Side Expression operation.",
      }),
    model: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'JSON is the raw JSON query and includes the above properties as well as custom properties.',
      }),
    queryType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'QueryType is an optional identifier for the type of query.\nIt can be used to distinguish different types of queries.',
      }),
    refId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'RefID is the unique identifier of the query, set by the frontend call.',
      }),
    relativeTimeRange: RelativeTimeRangeSchema.exactOptional(),
  })
  .openapi({
    title: 'AlertQuery represents a single query associated with an alert definition.',
    required: [],
  })
  .openapi('AlertQuery')

const RelativeTimeRangeExportSchema = z
  .object({
    from: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    to: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('RelativeTimeRangeExport')

const AlertQueryExportSchema = z
  .object({
    datasourceUid: z.string().exactOptional(),
    model: z.record(z.string(), z.any()).exactOptional(),
    queryType: z.string().exactOptional(),
    refId: z.string().exactOptional(),
    relativeTimeRange: RelativeTimeRangeExportSchema.exactOptional(),
  })
  .openapi({
    title: 'AlertQueryExport is the provisioned export of models.AlertQuery.',
    required: [],
  })
  .openapi('AlertQueryExport')

const ErrorTypeSchema = z
  .string()
  .openapi({ title: 'ErrorType models the different API error types.' })
  .openapi('ErrorType')

const AlertResponseSchema = z
  .object({
    data: AlertDiscoverySchema.exactOptional(),
    error: z.string().exactOptional(),
    errorType: ErrorTypeSchema.exactOptional(),
    status: z.string(),
  })
  .openapi({ required: ['status'] })
  .openapi('AlertResponse')

const AlertRuleEditorSettingsSchema = z
  .object({
    simplified_notifications_section: z.boolean().exactOptional(),
    simplified_query_and_expressions_section: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertRuleEditorSettings')

const AlertRuleNotificationSettingsExportSchema = z
  .object({
    active_time_intervals: z.array(z.string()).exactOptional(),
    group_by: z.array(z.string()).exactOptional(),
    group_interval: z.string().exactOptional(),
    group_wait: z.string().exactOptional(),
    mute_time_intervals: z.array(z.string()).exactOptional(),
    receiver: z.string().exactOptional(),
    repeat_interval: z.string().exactOptional(),
  })
  .openapi({
    title:
      'AlertRuleNotificationSettingsExport is the provisioned export of models.NotificationSettings.',
    required: [],
  })
  .openapi('AlertRuleNotificationSettingsExport')

const AlertRuleRecordExportSchema = z
  .object({
    from: z.string().exactOptional(),
    metric: z.string().exactOptional(),
    targetDatasourceUid: z.string().exactOptional(),
  })
  .openapi({ title: 'Record is the provisioned export of models.Record.', required: [] })
  .openapi('AlertRuleRecordExport')

const AlertRuleExportSchema = z
  .object({
    annotations: z.record(z.string(), z.string()).exactOptional(),
    condition: z.string().exactOptional(),
    dashboardUid: z.string().exactOptional(),
    data: z.array(AlertQueryExportSchema).exactOptional(),
    execErrState: z.enum(['OK', 'Alerting', 'Error']).exactOptional(),
    for: DurationSchema.exactOptional(),
    isPaused: z.boolean().exactOptional(),
    keepFiringFor: DurationSchema.exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    missing_series_evals_to_resolve: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    noDataState: z.enum(['Alerting', 'NoData', 'OK']).exactOptional(),
    notification_settings: AlertRuleNotificationSettingsExportSchema.exactOptional(),
    panelId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    record: AlertRuleRecordExportSchema.exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({
    title: 'AlertRuleExport is the provisioned file export of models.AlertRule.',
    required: [],
  })
  .openapi('AlertRuleExport')

const AlertRuleNotificationSettingsSchema = z
  .object({
    active_time_intervals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Override the times when notifications should not be muted. These must match the name of a mute time interval defined\nin the alertmanager configuration time_intervals section. All notifications will be suppressed unless they are sent\nat the time that matches any interval.',
        example: ['maintenance'],
      }),
    group_by: z
      .array(z.string())
      .default(['alertname', 'grafana_folder'])
      .exactOptional()
      .openapi({
        description:
          "Override the labels by which incoming alerts are grouped together. For example, multiple alerts coming in for\ncluster=A and alertname=LatencyHigh would be batched into a single group. To aggregate by all possible labels\nuse the special value '...' as the sole label name.\nThis effectively disables aggregation entirely, passing through all alerts as-is. This is unlikely to be what\nyou want, unless you have a very low alert volume or your upstream notification system performs its own grouping.\nMust include 'alertname' and 'grafana_folder' if not using '...'.",
        example: ['alertname', 'grafana_folder', 'cluster'],
      }),
    group_interval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Override how long to wait before sending a notification about new alerts that are added to a group of alerts for\nwhich an initial notification has already been sent. (Usually ~5m or more.)',
        example: '5m',
      }),
    group_wait: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Override how long to initially wait to send a notification for a group of alerts. Allows to wait for an\ninhibiting alert to arrive or collect more initial alerts for the same group. (Usually ~0s to few minutes.)',
        example: '30s',
      }),
    mute_time_intervals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Override the times when notifications should be muted. These must match the name of a mute time interval defined\nin the alertmanager configuration time_intervals section. When muted it will not send any notifications, but\notherwise acts normally.',
        example: ['maintenance'],
      }),
    policy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the notification policy to route alerts through.\nMutually exclusive with all other fields, cannot be used with contact point routing via the "receiver" field.',
        example: '"Alerting Team"',
      }),
    receiver: z
      .string()
      .openapi({
        description: 'Name of the receiver to send notifications to.',
        example: 'grafana-default-email',
      }),
    repeat_interval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Override how long to wait before sending a notification again if it has already been sent successfully for an\nalert. (Usually ~3h or more).\nNote that this parameter is implicitly bound by Alertmanager's `--data.retention` configuration flag.\nNotifications will be resent after either repeat_interval or the data retention period have passed, whichever\noccurs first. `repeat_interval` should not be less than `group_interval`.",
        example: '4h',
      }),
  })
  .openapi({ required: ['receiver'] })
  .openapi('AlertRuleNotificationSettings')

const RecordSchema = z
  .object({
    from: z
      .string()
      .openapi({
        description: 'Which expression node should be used as the input for the recorded metric.',
        example: 'A',
      }),
    metric: z
      .string()
      .openapi({ description: 'Name of the recorded metric.', example: 'grafana_alerts_ratio' }),
    target_datasource_uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Which data source should be used to write the output of the recording rule, specified by UID.',
        example: 'my-prom',
      }),
  })
  .openapi({ required: ['metric', 'from'] })
  .openapi('Record')

const ProvisionedAlertRuleSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ example: { runbook_url: 'https://supercoolrunbook.com/page/13' } }),
    condition: z.string().openapi({ example: 'A' }),
    data: z
      .array(AlertQuerySchema)
      .openapi({
        example: [
          {
            datasourceUid: '__expr__',
            model: {
              conditions: [
                {
                  evaluator: { params: [0, 0], type: 'gt' },
                  operator: { type: 'and' },
                  query: { params: [] },
                  reducer: { params: [], type: 'avg' },
                  type: 'query',
                },
              ],
              datasource: { type: '__expr__', uid: '__expr__' },
              expression: '1 == 1',
              hide: false,
              intervalMs: 1000,
              maxDataPoints: 43200,
              refId: 'A',
              type: 'math',
            },
            queryType: '',
            refId: 'A',
            relativeTimeRange: { from: 0, to: 0 },
          },
        ],
      }),
    execErrState: z.enum(['OK', 'Alerting', 'Error']),
    folderUID: z.string().openapi({ example: 'project_x' }),
    for: z.iso.duration(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isPaused: z.boolean().exactOptional().openapi({ example: false }),
    keep_firing_for: z.iso.duration().exactOptional(),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ example: { team: 'sre-team-1' } }),
    missingSeriesEvalsToResolve: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
    noDataState: z.enum(['Alerting', 'NoData', 'OK']),
    notification_settings: AlertRuleNotificationSettingsSchema.exactOptional(),
    orgID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    provenance: ProvenanceSchema.exactOptional(),
    record: RecordSchema.exactOptional(),
    ruleGroup: z.string().min(1).max(190).openapi({ example: 'eval_group_1' }),
    title: z.string().min(1).max(190).openapi({ example: 'Always firing' }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9-_]+$/)
      .min(1)
      .max(40)
      .exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'orgID',
      'folderUID',
      'ruleGroup',
      'title',
      'condition',
      'data',
      'noDataState',
      'execErrState',
      'for',
    ],
  })
  .openapi('ProvisionedAlertRule')

const AlertRuleGroupSchema = z
  .object({
    folderUid: z.string().exactOptional(),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    rules: z.array(ProvisionedAlertRuleSchema).exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertRuleGroup')

const AlertRuleGroupExportSchema = z
  .object({
    folder: z.string().exactOptional(),
    interval: DurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    rules: z.array(AlertRuleExportSchema).exactOptional(),
  })
  .openapi({
    title: 'AlertRuleGroupExport is the provisioned file export of AlertRuleGroupV1.',
    required: [],
  })
  .openapi('AlertRuleGroupExport')

const AlertRuleGroupMetadataSchema = z
  .object({
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AlertRuleGroupMetadata')

const AlertRuleMetadataSchema = z
  .object({ editor_settings: AlertRuleEditorSettingsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AlertRuleMetadata')

const RawMessageSchema = z.object({}).openapi('RawMessage')

const ReceiverExportSchema = z
  .object({
    disableResolveMessage: z.boolean().exactOptional(),
    settings: RawMessageSchema.exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({
    title: 'ReceiverExport is the provisioned file export of alerting.ReceiverV1.',
    required: [],
  })
  .openapi('ReceiverExport')

const ContactPointExportSchema = z
  .object({
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    receivers: z.array(ReceiverExportSchema).exactOptional(),
  })
  .openapi({
    title: 'ContactPointExport is the provisioned file export of alerting.ContactPointV1.',
    required: [],
  })
  .openapi('ContactPointExport')

const MuteTimeIntervalExportSchema = z
  .object({
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    time_intervals: z.array(TimeIntervalSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MuteTimeIntervalExport')

const RouteExportSchema: z.ZodType<RouteExportType> = z
  .lazy(() =>
    z
      .object({
        active_time_intervals: z.array(z.string()).exactOptional(),
        continue: z.boolean().exactOptional(),
        group_by: z.array(z.string()).exactOptional(),
        group_interval: z.string().exactOptional(),
        group_wait: z.string().exactOptional(),
        match: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'Deprecated. Remove before v1.0 release.' }),
        match_re: MatchRegexpsSchema.exactOptional(),
        matchers: MatchersSchema.exactOptional(),
        mute_time_intervals: z.array(z.string()).exactOptional(),
        object_matchers: ObjectMatchersSchema.exactOptional(),
        receiver: z.string().exactOptional(),
        repeat_interval: z.string().exactOptional(),
        routes: z.array(RouteExportSchema).exactOptional(),
      })
      .openapi({
        description:
          "RouteExport is the provisioned file export of definitions.Route. This is needed to hide fields that aren't useable in\nprovisioning file format. An alternative would be to define a custom MarshalJSON and MarshalYAML that excludes them.",
        required: [],
      }),
  )
  .openapi('RouteExport')

const NotificationPolicyExportSchema = z
  .object({
    active_time_intervals: z.array(z.string()).exactOptional(),
    continue: z.boolean().exactOptional(),
    group_by: z.array(z.string()).exactOptional(),
    group_interval: z.string().exactOptional(),
    group_wait: z.string().exactOptional(),
    match: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Deprecated. Remove before v1.0 release.' }),
    match_re: MatchRegexpsSchema.exactOptional(),
    matchers: MatchersSchema.exactOptional(),
    mute_time_intervals: z.array(z.string()).exactOptional(),
    object_matchers: ObjectMatchersSchema.exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    receiver: z.string().exactOptional(),
    repeat_interval: z.string().exactOptional(),
    routes: z.array(RouteExportSchema).exactOptional(),
  })
  .openapi({
    title:
      'NotificationPolicyExport is the provisioned file export of alerting.NotificiationPolicyV1.',
    required: [],
  })
  .openapi('NotificationPolicyExport')

const AlertingFileExportSchema = z
  .object({
    apiVersion: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    contactPoints: z.array(ContactPointExportSchema).exactOptional(),
    groups: z.array(AlertRuleGroupExportSchema).exactOptional(),
    muteTimes: z.array(MuteTimeIntervalExportSchema).exactOptional(),
    policies: z.array(NotificationPolicyExportSchema).exactOptional(),
  })
  .openapi({ title: 'AlertingFileExport is the full provisioned file export.', required: [] })
  .openapi('AlertingFileExport')

const AlertingRuleSchema = z
  .object({
    activeAt: z.iso.datetime({ offset: true }),
    alerts: z.array(AlertSchema).exactOptional(),
    annotations: LabelsSchema,
    duration: z.float64().exactOptional(),
    evaluationTime: z.float64().exactOptional(),
    folderUid: z.string().exactOptional(),
    health: z.string(),
    isPaused: z.boolean().exactOptional(),
    keepFiringFor: z.float64().exactOptional(),
    labels: LabelsSchema.exactOptional(),
    lastError: z.string().exactOptional(),
    lastEvaluation: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string(),
    notificationSettings: AlertRuleNotificationSettingsSchema.exactOptional(),
    provenance: ProvenanceSchema.exactOptional(),
    queriedDatasourceUIDs: z.array(z.string()).exactOptional(),
    query: z.string(),
    state: z.string().openapi({ description: 'State can be "pending", "firing", "inactive".' }),
    totals: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    totalsFiltered: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    type: z.string(),
    uid: z.string().exactOptional(),
  })
  .openapi({
    description: 'adapted from cortex',
    required: ['name', 'query', 'health', 'type', 'state', 'annotations', 'activeAt'],
  })
  .openapi('AlertingRule')

const AlertingStatusSchema = z
  .object({
    alertmanagersChoice: z.enum(['all', 'internal', 'external']).exactOptional(),
    numExternalAlertmanagers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AlertingStatus')

const AlertmanagerUserConfigSchema = z
  .object({
    alertmanager_config: z
      .string()
      .exactOptional()
      .openapi({ description: 'Configuration for Alertmanager in YAML format.\nin: body' }),
    template_files: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertmanagerUserConfig')

const AnnotationSchema = z
  .object({
    alertId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    alertName: z.string().exactOptional(),
    avatarUrl: z.string().exactOptional(),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: Use DashboardUID and OrgID instead',
        'x-deprecated': true,
      }),
    dashboardUID: z.string().exactOptional(),
    data: JsonSchema.exactOptional(),
    email: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    login: z.string().exactOptional(),
    newState: z.string().exactOptional(),
    panelId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    prevState: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    text: z.string().exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timeEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    updated: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userUID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Annotation')

const AnnotationActionsSchema = z
  .object({
    canAdd: z.boolean().exactOptional(),
    canDelete: z.boolean().exactOptional(),
    canEdit: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationActions')

const DataSourceRefSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'The plugin type-id' }),
    uid: z.string().exactOptional().openapi({ description: 'Specific datasource instance' }),
  })
  .openapi({ description: 'Ref to a DataSource instance', required: [] })
  .openapi('DataSourceRef')

const AnnotationPanelFilterSchema = z
  .object({
    exclude: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should the specified panels be included or excluded' }),
    ids: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'Panel IDs that should be included or excluded' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationPanelFilter')

const AnnotationTargetSchema = z
  .object({
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Only required/valid for the grafana datasource...\nbut code+tests is already depending on it so hard to change',
      }),
    matchAny: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Only required/valid for the grafana datasource...\nbut code+tests is already depending on it so hard to change',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only required/valid for the grafana datasource...\nbut code+tests is already depending on it so hard to change',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only required/valid for the grafana datasource...\nbut code+tests is already depending on it so hard to change',
      }),
  })
  .openapi({
    description:
      'TODO: this should be a regular DataQuery that depends on the selected dashboard\nthese match the properties of the "grafana" datasouce that is default in most dashboards',
    required: [],
  })
  .openapi('AnnotationTarget')

const AnnotationQuerySchema = z
  .object({
    builtIn: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Set to 1 for the standard annotation query all dashboards have by default.',
      }),
    datasource: DataSourceRefSchema.exactOptional(),
    enable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When enabled the annotation query is issued with every dashboard refresh',
      }),
    filter: AnnotationPanelFilterSchema.exactOptional(),
    hide: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Annotation queries can be toggled on or off at the top of the dashboard.\nWhen hide is true, the toggle is not shown in the dashboard.',
      }),
    iconColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Color to use for the annotation event markers' }),
    name: z.string().exactOptional().openapi({ description: 'Name of annotation.' }),
    placement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Placement can be used to display the annotation query somewhere else on the dashboard other than the default location.',
      }),
    target: AnnotationTargetSchema.exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TODO -- this should not exist here, it is based on the --grafana-- datasource',
      }),
  })
  .openapi({
    description: 'TODO docs\nFROM: AnnotationQuery in grafana-data/src/types/annotations.ts',
    required: [],
  })
  .openapi('AnnotationQuery')

const AnnotationEventSchema = z
  .object({
    color: z.string().exactOptional(),
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboardUID: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isRegion: z.boolean().exactOptional(),
    panelId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    source: AnnotationQuerySchema.exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    text: z.string().exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timeEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationEvent')

const AnnotationPermissionSchema = z
  .object({ dashboard: AnnotationActionsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AnnotationPermission')

const ApiRuleNodeSchema = z
  .object({
    alert: z.string().exactOptional(),
    annotations: z.record(z.string(), z.string()).exactOptional(),
    expr: z.string().exactOptional(),
    for: z.string().exactOptional(),
    keep_firing_for: z.string().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    record: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiRuleNode')

const AssignmentsSchema = z
  .object({
    builtInRoles: z.boolean().exactOptional(),
    serviceAccounts: z.boolean().exactOptional(),
    teams: z.boolean().exactOptional(),
    users: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Assignments')

const ObjectIdentifierSchema = z
  .array(
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  )
  .openapi({ title: 'An ObjectIdentifier represents an ASN.1 OBJECT IDENTIFIER.' })
  .openapi('ObjectIdentifier')

const AttributeTypeAndValueSchema = z
  .object({ Type: ObjectIdentifierSchema.exactOptional(), Value: z.any().exactOptional() })
  .openapi({
    description:
      'When parsed as part of a pkix.Name structure in a crypto/x509 type,\nthe Value will be\n\n- a string if the ASN.1 type is PrintableString, IA5String,\nNumericString, BMPString, T61String, or UTF8String;\n- an int64 if the ASN.1 type is INTEGER;\n- an asn1.BitString if the ASN.1 type is BIT STRING;\n- a []byte if the ASN.1 type is OCTET STRING;\n- an asn1.ObjectIdentifier if the ASN.1 type is OBJECT IDENTIFIER;\n- a time.Time if the ASN.1 type is UTCTIME or GENERALIZEDTIME;\n- a bool if the ASN.1 type is BOOLEAN;\n- nil if the ASN.1 type is NULL;\n- an asn1.RawValue otherwise.',
    title:
      'AttributeTypeAndValue mirrors the ASN.1 structure of the same name in\nRFC 5280, Section 4.1.2.4.',
    required: [],
  })
  .openapi('AttributeTypeAndValue')

const BacktestConfigSchema = z
  .object({
    condition: z.string().exactOptional(),
    data: z.array(AlertQuerySchema).exactOptional(),
    exec_err_state: z.enum(['OK', 'Alerting', 'Error']).exactOptional(),
    for: z.string().exactOptional(),
    from: z.iso.datetime({ offset: true }).exactOptional(),
    interval: DurationSchema.exactOptional(),
    keep_firing_for: z.string().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    missing_series_evals_to_resolve: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    namespace_uid: z.string().exactOptional(),
    no_data_state: z.enum(['Alerting', 'NoData', 'OK']).exactOptional(),
    rule_group: z.string().exactOptional(),
    title: z.string().exactOptional(),
    to: z.iso.datetime({ offset: true }).exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BacktestConfig')

const DataLinkSchema: z.ZodType<DataLinkType> = z
  .lazy(() =>
    z
      .object({
        internal: InternalDataLinkSchema.exactOptional(),
        targetBlank: z.boolean().exactOptional(),
        title: z.string().exactOptional(),
        url: z.string().exactOptional(),
      })
      .openapi({ description: 'DataLink define what', required: [] }),
  )
  .openapi('DataLink')

const ValueMappingSchema = z
  .object({})
  .openapi({ description: 'ValueMapping allows mapping input values to text and color' })
  .openapi('ValueMapping')

const ValueMappingsSchema = z.array(ValueMappingSchema).openapi('ValueMappings')

const ConfFloat64Schema = z
  .float64()
  .openapi({
    description: 'ConfFloat64 is a float64. It Marshals float64 values of NaN of Inf\nto null.',
  })
  .openapi('ConfFloat64')

const ThresholdsModeSchema = z
  .string()
  .openapi({ description: 'ThresholdsMode absolute or percentage' })
  .openapi('ThresholdsMode')

const ThresholdSchema = z
  .object({
    color: z.string().exactOptional(),
    state: z.string().exactOptional(),
    value: ConfFloat64Schema.exactOptional(),
  })
  .openapi({ description: 'Threshold a single step on the threshold list', required: [] })
  .openapi('Threshold')

const ThresholdsConfigSchema = z
  .object({
    mode: ThresholdsModeSchema.exactOptional(),
    steps: z
      .array(ThresholdSchema)
      .exactOptional()
      .openapi({ description: "Must be sorted by 'value', first value is always -Infinity" }),
  })
  .openapi({ description: 'ThresholdsConfig setup thresholds', required: [] })
  .openapi('ThresholdsConfig')

const EnumFieldConfigSchema = z
  .object({
    color: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Color is the color value for a given index (empty is undefined)' }),
    description: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Description of the enum state' }),
    icon: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Icon supports setting an icon for a given index value' }),
    text: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Value is the string display value for a given index' }),
  })
  .openapi({
    description: 'Enum field config\nVector values are used as lookup keys into the enum fields',
    required: [],
  })
  .openapi('EnumFieldConfig')

const FieldTypeConfigSchema = z
  .object({ enum: EnumFieldConfigSchema.exactOptional() })
  .openapi({
    description: 'FieldTypeConfig has type specific configs, only one should be active at a time',
    required: [],
  })
  .openapi('FieldTypeConfig')

const FieldConfigSchema = z
  .object({
    color: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Map values to a display color\nNOTE: this interface is under development in the frontend... so simple map for now',
      }),
    custom: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Panel Specific Values' }),
    decimals: z.int().exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description is human readable field metadata' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DisplayName overrides Grafana default naming, should not be used from a data source',
      }),
    displayNameFromDS: z
      .string()
      .exactOptional()
      .openapi({ description: 'DisplayNameFromDS overrides Grafana default naming strategy.' }),
    filterable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Filterable indicates if the Field's data can be filtered by additional calls.",
      }),
    interval: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Interval indicates the expected regular step between values in the series.\nWhen an interval exists, consumers can identify "missing" values when the expected value is not present.\nThe grafana timeseries visualization will render disconnected values when missing values are found it the time field.\nThe interval uses the same units as the values.  For time.Time, this is defined in milliseconds.',
      }),
    links: z
      .array(DataLinkSchema)
      .exactOptional()
      .openapi({ description: 'The behavior when clicking on a result' }),
    mappings: ValueMappingsSchema.exactOptional(),
    max: ConfFloat64Schema.exactOptional(),
    min: ConfFloat64Schema.exactOptional(),
    noValue: z.string().exactOptional().openapi({ description: 'Alternative to empty string' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path is an explicit path to the field in the datasource. When the frame meta includes a path,\nthis will default to `${frame.meta.path}/${field.name}\n\nWhen defined, this value can be used as an identifier within the datasource scope, and\nmay be used as an identifier to update values in a subsequent request',
      }),
    thresholds: ThresholdsConfigSchema.exactOptional(),
    type: FieldTypeConfigSchema.exactOptional(),
    unit: z.string().exactOptional().openapi({ description: 'Numeric Options' }),
    writeable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Writeable indicates that the datasource knows how to update this value',
      }),
  })
  .openapi({ title: 'FieldConfig represents the display properties for a Field.', required: [] })
  .openapi('FieldConfig')

const FrameLabelsSchema = z
  .record(z.string(), z.string())
  .openapi({
    description:
      'Labels are used to add metadata to an object.  The JSON will always be sorted keys',
  })
  .openapi('FrameLabels')

const FieldSchema = z
  .object({
    config: FieldConfigSchema.exactOptional(),
    labels: FrameLabelsSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name is default identifier of the field. The name does not have to be unique, but the combination\nof name and Labels should be unique for proper behavior in all situations.',
      }),
  })
  .openapi({
    description:
      'A Field is essentially a slice of various types with extra properties and methods.\nSee NewField() for supported types.\n\nThe slice data in the Field is a not exported, so methods on the Field are used to to manipulate its data.',
    title: 'Field represents a typed column of data within a Frame.',
    required: [],
  })
  .openapi('Field')

const DataTopicSchema = z
  .string()
  .openapi({ title: 'DataTopic is used to identify which topic the frame should be assigned to.' })
  .openapi('DataTopic')

const InspectTypeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    title: 'InspectType is a type for the Inspect property of a Notice.',
  })
  .openapi('InspectType')

const NoticeSeveritySchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    title: 'NoticeSeverity is a type for the Severity property of a Notice.',
  })
  .openapi('NoticeSeverity')

const NoticeSchema = z
  .object({
    inspect: InspectTypeSchema.exactOptional(),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Link is an optional link for display in the user interface and can be an\nabsolute URL or a path relative to Grafana's root url.",
      }),
    severity: NoticeSeveritySchema.exactOptional(),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text is freeform descriptive text for the notice.' }),
  })
  .openapi({
    title: "Notice provides a structure for presenting notifications in Grafana's user interface.",
    required: [],
  })
  .openapi('Notice')

const VisTypeSchema = z
  .string()
  .openapi({ title: 'VisType is used to indicate how the data should be visualized in explore.' })
  .openapi('VisType')

const QueryStatSchema = z
  .object({
    color: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Map values to a display color\nNOTE: this interface is under development in the frontend... so simple map for now',
      }),
    custom: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Panel Specific Values' }),
    decimals: z.int().exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description is human readable field metadata' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DisplayName overrides Grafana default naming, should not be used from a data source',
      }),
    displayNameFromDS: z
      .string()
      .exactOptional()
      .openapi({ description: 'DisplayNameFromDS overrides Grafana default naming strategy.' }),
    filterable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Filterable indicates if the Field's data can be filtered by additional calls.",
      }),
    interval: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Interval indicates the expected regular step between values in the series.\nWhen an interval exists, consumers can identify "missing" values when the expected value is not present.\nThe grafana timeseries visualization will render disconnected values when missing values are found it the time field.\nThe interval uses the same units as the values.  For time.Time, this is defined in milliseconds.',
      }),
    links: z
      .array(DataLinkSchema)
      .exactOptional()
      .openapi({ description: 'The behavior when clicking on a result' }),
    mappings: ValueMappingsSchema.exactOptional(),
    max: ConfFloat64Schema.exactOptional(),
    min: ConfFloat64Schema.exactOptional(),
    noValue: z.string().exactOptional().openapi({ description: 'Alternative to empty string' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path is an explicit path to the field in the datasource. When the frame meta includes a path,\nthis will default to `${frame.meta.path}/${field.name}\n\nWhen defined, this value can be used as an identifier within the datasource scope, and\nmay be used as an identifier to update values in a subsequent request',
      }),
    thresholds: ThresholdsConfigSchema.exactOptional(),
    type: FieldTypeConfigSchema.exactOptional(),
    unit: z.string().exactOptional().openapi({ description: 'Numeric Options' }),
    value: z.float64().exactOptional(),
    writeable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Writeable indicates that the datasource knows how to update this value',
      }),
  })
  .openapi({
    description:
      "The embedded FieldConfig's display name must be set.\nIt corresponds to the QueryResultMetaStat on the frontend (https://github.com/grafana/grafana/blob/master/packages/grafana-data/src/types/data.ts#L53).",
    title:
      'QueryStat is used for storing arbitrary statistics metadata related to a query and its result, e.g. total request time, data processing time.',
    required: [],
  })
  .openapi('QueryStat')

const FrameTypeSchema = z
  .string()
  .openapi({
    description:
      "A FrameType string, when present in a frame's metadata, asserts that the\nframe's structure conforms to the FrameType's specification.\nThis property is currently optional, so FrameType may be FrameTypeUnknown even if the properties of\nthe Frame correspond to a defined FrameType.",
  })
  .openapi('FrameType')

const FrameTypeVersionSchema = z
  .array(
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({ type: 'integer', format: 'uint64' }),
  )
  .openapi({ title: 'FrameType is a 2 number version (Major / Minor).' })
  .openapi('FrameTypeVersion')

const FrameMetaSchema = z
  .object({
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Channel is the path to a stream in grafana live that has real-time updates for this data.',
      }),
    custom: z.any().exactOptional().openapi({ description: 'Custom datasource specific values.' }),
    dataTopic: DataTopicSchema.exactOptional(),
    executedQueryString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ExecutedQueryString is the raw query sent to the underlying system. All macros and templating\nhave been applied.  When metadata contains this value, it will be shown in the query inspector.',
      }),
    notices: z
      .array(NoticeSchema)
      .exactOptional()
      .openapi({
        description:
          'Notices provide additional information about the data in the Frame that\nGrafana can display to the user in the user interface.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path is a browsable path on the datasource.' }),
    pathSeparator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "PathSeparator defines the separator pattern to decode a hierarchy. The default separator is '/'.",
      }),
    preferredVisualisationPluginId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PreferredVisualizationPluginId sets the panel plugin id to use to render the data when using Explore. If\nthe plugin cannot be found will fall back to PreferredVisualization.',
      }),
    preferredVisualisationType: VisTypeSchema.exactOptional(),
    stats: z
      .array(QueryStatSchema)
      .exactOptional()
      .openapi({ description: 'Stats is an array of query result statistics.' }),
    type: FrameTypeSchema.exactOptional(),
    typeVersion: FrameTypeVersionSchema.exactOptional(),
    uniqueRowIdFields: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          "Array of field indices which values create a unique id for each row. Ideally this should be globally unique ID\nbut that isn't guarantied. Should help with keeping track and deduplicating rows in visualizations, especially\nwith streaming data with frequent updates.",
        example: 'TraceID in Tempo, table name + primary key in SQL',
      }),
  })
  .openapi({
    description:
      'https://github.com/grafana/grafana/blob/master/packages/grafana-data/src/types/data.ts#L11\nNOTE -- in javascript this can accept any `[key: string]: any;` however\nthis interface only exposes the values we want to be exposed',
    title: 'FrameMeta matches:',
    required: [],
  })
  .openapi('FrameMeta')

const FrameSchema = z
  .object({
    Fields: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Fields are the columns of a frame.\nAll Fields must be of the same the length when marshalling the Frame for transmission.\nThere should be no `nil` entries in the Fields slice (making them pointers was a mistake).',
      }),
    Meta: FrameMetaSchema.exactOptional(),
    Name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name is used in some Grafana visualizations.' }),
    RefID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'RefID is a property that can be set to match a Frame to its originating query.',
      }),
  })
  .openapi({
    description:
      'Each Field is well typed by its FieldType and supports optional Labels.\n\nA Frame is a general data container for Grafana. A Frame can be table data\nor time series data depending on its content and field types.',
    title: 'Frame is a columnar data structure where each column is a Field.',
    required: [],
  })
  .openapi('Frame')

const BacktestResultSchema = FrameSchema.openapi('BacktestResult')

const CacheConfigSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    dataSourceID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Fields that can be set by the API caller - read/write',
      }),
    dataSourceUID: z.string().exactOptional(),
    defaultTTLMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "These are returned by the HTTP API, but are managed internally - read-only\nNote: 'created' and 'updated' are special properties managed automatically by xorm, but we are setting them manually",
      }),
    enabled: z.boolean().exactOptional(),
    ttlQueriesMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'TTL MS, or "time to live", is how long a cached item will stay in the cache before it is removed (in milliseconds)',
      }),
    ttlResourcesMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    useDefaultTTL: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If UseDefaultTTL is enabled, then the TTLQueriesMS and TTLResourcesMS in this object is always sent as the default TTL located in grafana.ini',
      }),
  })
  .openapi({
    description:
      'Config defines the internal representation of a cache configuration, including fields not set by the API caller',
    required: [],
  })
  .openapi('CacheConfig')

const CacheConfigResponseSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    dataSourceID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Fields that can be set by the API caller - read/write',
      }),
    dataSourceUID: z.string().exactOptional(),
    defaultTTLMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "These are returned by the HTTP API, but are managed internally - read-only\nNote: 'created' and 'updated' are special properties managed automatically by xorm, but we are setting them manually",
      }),
    enabled: z.boolean().exactOptional(),
    message: z.string().exactOptional(),
    ttlQueriesMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'TTL MS, or "time to live", is how long a cached item will stay in the cache before it is removed (in milliseconds)',
      }),
    ttlResourcesMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    useDefaultTTL: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If UseDefaultTTL is enabled, then the TTLQueriesMS and TTLResourcesMS in this object is always sent as the default TTL located in grafana.ini',
      }),
  })
  .openapi({ required: [] })
  .openapi('CacheConfigResponse')

const CacheConfigSetterSchema = z
  .object({
    dataSourceID: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dataSourceUID: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    ttlQueriesMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'TTL MS, or "time to live", is how long a cached item will stay in the cache before it is removed (in milliseconds)',
      }),
    ttlResourcesMs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    useDefaultTTL: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If UseDefaultTTL is enabled, then the TTLQueriesMS and TTLResourcesMS in this object is always sent as the default TTL located in grafana.ini',
      }),
  })
  .openapi({
    description:
      'ConfigSetter defines the cache parameters that users can configure per datasource\nThis is only intended to be consumed by the SetCache HTTP Handler',
    required: [],
  })
  .openapi('CacheConfigSetter')

const CalculateDiffTargetSchema = z
  .object({
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    unsavedDashboard: JsonSchema.exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('CalculateDiffTarget')

const IPMaskSchema = z
  .array(z.int())
  .openapi({
    description: 'See type [IPNet] and func [ParseCIDR] for details.',
    title:
      'An IPMask is a bitmask that can be used to manipulate\nIP addresses for IP addressing and routing.',
  })
  .openapi('IPMask')

const IPNetSchema = z
  .object({ IP: z.string().exactOptional(), Mask: IPMaskSchema.exactOptional() })
  .openapi({ title: 'An IPNet represents an IP network.', required: [] })
  .openapi('IPNet')

const ExtKeyUsageSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description: 'Each of the ExtKeyUsage* constants define a unique action.',
    title: 'ExtKeyUsage represents an extended set of actions that are valid for a given key.',
  })
  .openapi('ExtKeyUsage')

const ExtensionSchema = z
  .object({
    Critical: z.boolean().exactOptional(),
    Id: ObjectIdentifierSchema.exactOptional(),
    Value: z.array(z.int()).exactOptional(),
  })
  .openapi({
    description:
      'Extension represents the ASN.1 structure of the same name. See RFC\n5280, section 4.2.',
    required: [],
  })
  .openapi('Extension')

const NameSchema = z
  .object({
    CommonName: z.string().exactOptional(),
    Country: z.array(z.string()).exactOptional(),
    ExtraNames: z
      .array(AttributeTypeAndValueSchema)
      .exactOptional()
      .openapi({
        description:
          'ExtraNames contains attributes to be copied, raw, into any marshaled\ndistinguished names. Values override any attributes with the same OID.\nThe ExtraNames field is not populated when parsing, see Names.',
      }),
    Locality: z.array(z.string()).exactOptional(),
    Names: z
      .array(AttributeTypeAndValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Names contains all parsed attributes. When parsing distinguished names,\nthis can be used to extract non-standard attributes that are not parsed\nby this package. When marshaling to RDNSequences, the Names field is\nignored, see ExtraNames.',
      }),
    Organization: z.array(z.string()).exactOptional(),
    OrganizationalUnit: z.array(z.string()).exactOptional(),
    PostalCode: z.array(z.string()).exactOptional(),
    Province: z.array(z.string()).exactOptional(),
    SerialNumber: z.string().exactOptional(),
    StreetAddress: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description:
      'Name represents an X.509 distinguished name. This only includes the common\nelements of a DN. Note that Name is only an approximation of the X.509\nstructure. If an accurate representation is needed, asn1.Unmarshal the raw\nsubject or issuer as an [RDNSequence].',
    required: [],
  })
  .openapi('Name')

const KeyUsageSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description:
      "KeyUsage represents the set of actions that are valid for a given key. It's\na bitmap of the KeyUsage* constants.",
  })
  .openapi('KeyUsage')

const PolicyMappingSchema = z
  .object({
    IssuerDomainPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IssuerDomainPolicy contains a policy OID the issuing certificate considers\nequivalent to SubjectDomainPolicy in the subject certificate.',
      }),
    SubjectDomainPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SubjectDomainPolicy contains a OID the issuing certificate considers\nequivalent to IssuerDomainPolicy in the subject certificate.',
      }),
  })
  .openapi({
    title: 'PolicyMapping represents a policy mapping entry in the policyMappings extension.',
    required: [],
  })
  .openapi('PolicyMapping')

const PublicKeyAlgorithmSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('PublicKeyAlgorithm')

const SignatureAlgorithmSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('SignatureAlgorithm')

const CertificateSchema = z
  .object({
    AuthorityKeyId: z.array(z.int()).exactOptional(),
    BasicConstraintsValid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'BasicConstraintsValid indicates whether IsCA, MaxPathLen,\nand MaxPathLenZero are valid.',
      }),
    CRLDistributionPoints: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'CRL Distribution Points' }),
    DNSNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Subject Alternate Name values. (Note that these values may not be valid\nif invalid values were contained within a parsed certificate. For\nexample, an element of DNSNames may not be a valid DNS domain name.)',
      }),
    EmailAddresses: z.array(z.string()).exactOptional(),
    ExcludedDNSDomains: z.array(z.string()).exactOptional(),
    ExcludedEmailAddresses: z.array(z.string()).exactOptional(),
    ExcludedIPRanges: z.array(IPNetSchema).exactOptional(),
    ExcludedURIDomains: z.array(z.string()).exactOptional(),
    ExtKeyUsage: z.array(ExtKeyUsageSchema).exactOptional(),
    Extensions: z
      .array(ExtensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Extensions contains raw X.509 extensions. When parsing certificates,\nthis can be used to extract non-critical extensions that are not\nparsed by this package. When marshaling certificates, the Extensions\nfield is ignored, see ExtraExtensions.',
      }),
    ExtraExtensions: z
      .array(ExtensionSchema)
      .exactOptional()
      .openapi({
        description:
          'ExtraExtensions contains extensions to be copied, raw, into any\nmarshaled certificates. Values override any extensions that would\notherwise be produced based on the other fields. The ExtraExtensions\nfield is not populated when parsing certificates, see Extensions.',
      }),
    IPAddresses: z.array(z.string()).exactOptional(),
    InhibitAnyPolicy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'InhibitAnyPolicy and InhibitAnyPolicyZero indicate the presence and value\nof the inhibitAnyPolicy extension.\n\nThe value of InhibitAnyPolicy indicates the number of additional\ncertificates in the path after this certificate that may use the\nanyPolicy policy OID to indicate a match with any other policy.\n\nWhen parsing a certificate, a positive non-zero InhibitAnyPolicy means\nthat the field was specified, -1 means it was unset, and\nInhibitAnyPolicyZero being true mean that the field was explicitly set to\nzero. The case of InhibitAnyPolicy==0 with InhibitAnyPolicyZero==false\nshould be treated equivalent to -1 (unset).',
      }),
    InhibitAnyPolicyZero: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'InhibitAnyPolicyZero indicates that InhibitAnyPolicy==0 should be\ninterpreted as an actual maximum path length of zero. Otherwise, that\ncombination is interpreted as InhibitAnyPolicy not being set.',
      }),
    InhibitPolicyMapping: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'InhibitPolicyMapping and InhibitPolicyMappingZero indicate the presence\nand value of the inhibitPolicyMapping field of the policyConstraints\nextension.\n\nThe value of InhibitPolicyMapping indicates the number of additional\ncertificates in the path after this certificate that may use policy\nmapping.\n\nWhen parsing a certificate, a positive non-zero InhibitPolicyMapping\nmeans that the field was specified, -1 means it was unset, and\nInhibitPolicyMappingZero being true mean that the field was explicitly\nset to zero. The case of InhibitPolicyMapping==0 with\nInhibitPolicyMappingZero==false should be treated equivalent to -1\n(unset).',
      }),
    InhibitPolicyMappingZero: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'InhibitPolicyMappingZero indicates that InhibitPolicyMapping==0 should be\ninterpreted as an actual maximum path length of zero. Otherwise, that\ncombination is interpreted as InhibitAnyPolicy not being set.',
      }),
    IsCA: z.boolean().exactOptional(),
    Issuer: NameSchema.exactOptional(),
    IssuingCertificateURL: z.array(z.string()).exactOptional(),
    KeyUsage: KeyUsageSchema.exactOptional(),
    MaxPathLen: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'MaxPathLen and MaxPathLenZero indicate the presence and\nvalue of the BasicConstraints\' "pathLenConstraint".\n\nWhen parsing a certificate, a positive non-zero MaxPathLen\nmeans that the field was specified, -1 means it was unset,\nand MaxPathLenZero being true mean that the field was\nexplicitly set to zero. The case of MaxPathLen==0 with MaxPathLenZero==false\nshould be treated equivalent to -1 (unset).\n\nWhen generating a certificate, an unset pathLenConstraint\ncan be requested with either MaxPathLen == -1 or using the\nzero value for both MaxPathLen and MaxPathLenZero.',
      }),
    MaxPathLenZero: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'MaxPathLenZero indicates that BasicConstraintsValid==true\nand MaxPathLen==0 should be interpreted as an actual\nmaximum path length of zero. Otherwise, that combination is\ninterpreted as MaxPathLen not being set.',
      }),
    NotAfter: z.iso.datetime({ offset: true }).exactOptional(),
    NotBefore: z.iso.datetime({ offset: true }).exactOptional(),
    OCSPServer: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'RFC 5280, 4.2.2.1 (Authority Information Access)' }),
    PermittedDNSDomains: z.array(z.string()).exactOptional(),
    PermittedDNSDomainsCritical: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Name constraints' }),
    PermittedEmailAddresses: z.array(z.string()).exactOptional(),
    PermittedIPRanges: z.array(IPNetSchema).exactOptional(),
    PermittedURIDomains: z.array(z.string()).exactOptional(),
    Policies: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Policies contains all policy identifiers included in the certificate.\nSee CreateCertificate for context about how this field and the PolicyIdentifiers field\ninteract.\nIn Go 1.22, encoding/gob cannot handle and ignores this field.',
      }),
    PolicyIdentifiers: z
      .array(ObjectIdentifierSchema)
      .exactOptional()
      .openapi({
        description:
          'PolicyIdentifiers contains asn1.ObjectIdentifiers, the components\nof which are limited to int32. If a certificate contains a policy which\ncannot be represented by asn1.ObjectIdentifier, it will not be included in\nPolicyIdentifiers, but will be present in Policies, which contains all parsed\npolicy OIDs.\nSee CreateCertificate for context about how this field and the Policies field\ninteract.',
      }),
    PolicyMappings: z
      .array(PolicyMappingSchema)
      .exactOptional()
      .openapi({
        description:
          'PolicyMappings contains a list of policy mappings included in the certificate.',
      }),
    PublicKey: z.any().exactOptional(),
    PublicKeyAlgorithm: PublicKeyAlgorithmSchema.exactOptional(),
    Raw: z.array(z.int()).exactOptional(),
    RawIssuer: z.array(z.int()).exactOptional(),
    RawSignatureAlgorithm: z.array(z.int()).exactOptional(),
    RawSubject: z.array(z.int()).exactOptional(),
    RawSubjectPublicKeyInfo: z.array(z.int()).exactOptional(),
    RawTBSCertificate: z.array(z.int()).exactOptional(),
    RequireExplicitPolicy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'RequireExplicitPolicy and RequireExplicitPolicyZero indicate the presence\nand value of the requireExplicitPolicy field of the policyConstraints\nextension.\n\nThe value of RequireExplicitPolicy indicates the number of additional\ncertificates in the path after this certificate before an explicit policy\nis required for the rest of the path. When an explicit policy is required,\neach subsequent certificate in the path must contain a required policy OID,\nor a policy OID which has been declared as equivalent through the policy\nmapping extension.\n\nWhen parsing a certificate, a positive non-zero RequireExplicitPolicy\nmeans that the field was specified, -1 means it was unset, and\nRequireExplicitPolicyZero being true mean that the field was explicitly\nset to zero. The case of RequireExplicitPolicy==0 with\nRequireExplicitPolicyZero==false should be treated equivalent to -1\n(unset).',
      }),
    RequireExplicitPolicyZero: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'RequireExplicitPolicyZero indicates that RequireExplicitPolicy==0 should be\ninterpreted as an actual maximum path length of zero. Otherwise, that\ncombination is interpreted as InhibitAnyPolicy not being set.',
      }),
    SerialNumber: z.int().exactOptional(),
    Signature: z.array(z.int()).exactOptional(),
    SignatureAlgorithm: SignatureAlgorithmSchema.exactOptional(),
    Subject: NameSchema.exactOptional(),
    SubjectKeyId: z.array(z.int()).exactOptional(),
    URIs: z.array(URLSchema).exactOptional(),
    UnhandledCriticalExtensions: z
      .array(ObjectIdentifierSchema)
      .exactOptional()
      .openapi({
        description:
          'UnhandledCriticalExtensions contains a list of extension IDs that\nwere not (fully) processed when parsing. Verify will fail if this\nslice is non-empty, unless verification is delegated to an OS\nlibrary which understands all the critical extensions.\n\nUsers can access these extensions using Extensions and can remove\nelements from this slice if they believe that they have been\nhandled.',
      }),
    UnknownExtKeyUsage: z.array(ObjectIdentifierSchema).exactOptional(),
    Version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ title: 'A Certificate represents an X.509 certificate.', required: [] })
  .openapi('Certificate')

const ChangeUserPasswordCommandSchema = z
  .object({
    newPassword: PasswordSchema.exactOptional(),
    oldPassword: PasswordSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChangeUserPasswordCommand')

const MigrateDataResponseListDTOSchema = z
  .object({ uid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MigrateDataResponseListDTO')

const CloudMigrationRunListDTOSchema = z
  .object({ runs: z.array(MigrateDataResponseListDTOSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CloudMigrationRunListDTO')

const CloudMigrationSessionResponseDTOSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    slug: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CloudMigrationSessionResponseDTO')

const CloudMigrationSessionListResponseDTOSchema = z
  .object({ sessions: z.array(CloudMigrationSessionResponseDTOSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CloudMigrationSessionListResponseDTO')

const CloudMigrationSessionRequestDTOSchema = z
  .object({ authToken: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CloudMigrationSessionRequestDTO')

const ConfigSchema: z.ZodType<ConfigType> = z
  .lazy(() =>
    z
      .object({
        global: GlobalConfigSchema.exactOptional(),
        inhibit_rules: z.array(InhibitRuleSchema).exactOptional(),
        mute_time_intervals: z
          .array(MuteTimeIntervalSchema)
          .exactOptional()
          .openapi({
            description:
              'MuteTimeIntervals is deprecated and will be removed before Alertmanager 1.0.',
          }),
        route: RouteSchema.exactOptional(),
        templates: z.array(z.string()).exactOptional(),
        time_intervals: z.array(TimeIntervalSchema).exactOptional(),
      })
      .openapi({
        title: "Config is the top-level configuration for Alertmanager's config files.",
        required: [],
      }),
  )
  .openapi('Config')

const EmbeddedContactPointSchema = z
  .object({
    disableResolveMessage: z.boolean().exactOptional().openapi({ example: false }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name is used as grouping key in the UI. Contact points with the\nsame name will be grouped in the UI.',
        example: 'webhook_1',
      }),
    provenance: z.string().exactOptional().openapi({ readOnly: true }),
    settings: JsonSchema,
    type: z
      .enum([
        'alertmanager',
        'dingding',
        'discord',
        'email',
        'googlechat',
        'kafka',
        'line',
        'opsgenie',
        'pagerduty',
        'pushover',
        'sensugo',
        'slack',
        'teams',
        'telegram',
        'threema',
        'victorops',
        'webhook',
        'wecom',
      ])
      .openapi({ example: 'webhook' }),
    uid: z
      .string()
      .regex(/^[a-zA-Z0-9\-\_]+$/)
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'UID is the unique identifier of the contact point. The UID can be\nset by the user.',
        example: 'my_external_reference',
      }),
  })
  .openapi({
    description:
      'EmbeddedContactPoint is the contact point type that is used\nby grafanas embedded alertmanager implementation.',
    required: ['type', 'settings'],
  })
  .openapi('EmbeddedContactPoint')

const ContactPointsSchema = z.array(EmbeddedContactPointSchema).openapi('ContactPoints')

const RenameResourcesSchema = z
  .object({
    receivers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Receivers maps old receiver names to new receiver names' }),
    time_intervals: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'TimeIntervals maps old time interval names to new time interval names',
      }),
  })
  .openapi({
    description: 'RenameResources describes which resources were renamed to avoid conflicts',
    required: [],
  })
  .openapi('RenameResources')

const MergeStatsSchema = z
  .object({
    added_inhibition_rules: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'AddedInhibitionRules contains the names of inhibition rules added',
      }),
    added_receivers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'AddedReceivers contains the names of receivers added (post-rename if renamed)',
      }),
    added_route: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'AddedRoute is the identifier of the routing sub-tree added to the configuration',
      }),
    added_templates: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'AddedTemplates contains the names of templates added' }),
    added_time_intervals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'AddedTimeIntervals contains the names of time intervals added (post-rename if renamed)',
      }),
  })
  .openapi({
    title: 'MergeStats describes which resources were added during configuration merge.',
    required: [],
  })
  .openapi('MergeStats')

const ConvertAlertmanagerResponseSchema = z
  .object({
    error: z.string().exactOptional(),
    errorType: z.string().exactOptional(),
    rename_resources: RenameResourcesSchema.exactOptional(),
    stats: MergeStatsSchema.exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConvertAlertmanagerResponse')

const ConvertPrometheusResponseSchema = z
  .object({
    error: z.string().exactOptional(),
    errorType: z.string().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConvertPrometheusResponse')

const TransformationSchema = z
  .object({
    expression: z.string().exactOptional(),
    field: z.string().exactOptional(),
    mapValue: z.string().exactOptional(),
    type: z.enum(['regex', 'logfmt']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Transformation')

const TransformationsSchema = z.array(TransformationSchema).openapi('Transformations')

const CorrelationTypeSchema = z
  .string()
  .openapi({
    description:
      'the type of correlation, either query for containing query information, or external for containing an external URL',
  })
  .openapi('CorrelationType')

const CorrelationConfigSchema = z
  .object({
    field: z
      .string()
      .openapi({ description: 'Field used to attach the correlation link', example: 'message' }),
    target: z
      .record(z.string(), z.any())
      .openapi({ description: 'Target data query', example: { prop1: 'value1', prop2: 'value' } }),
    transformations: TransformationsSchema.exactOptional(),
    type: CorrelationTypeSchema.exactOptional(),
  })
  .openapi({ required: ['field', 'target'] })
  .openapi('CorrelationConfig')

const CorrelationSchema = z
  .object({
    config: CorrelationConfigSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the correlation', example: 'Logs to Traces' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label identifying the correlation', example: 'My Label' }),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'OrgID of the data source the correlation originates from',
        example: 1,
      }),
    provisioned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Provisioned True if the correlation was created during provisioning',
      }),
    sourceUID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UID of the data source the correlation originates from',
        example: 'd0oxYRg4z',
      }),
    targetUID: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UID of the data source the correlation points to',
        example: 'PE1C5CBDA0504A6A3',
      }),
    type: CorrelationTypeSchema.exactOptional(),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the correlation', example: '50xhMlg9k' }),
  })
  .openapi({ description: 'Correlation is the model for correlations definitions', required: [] })
  .openapi('Correlation')

const CorrelationConfigUpdateDTOSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field used to attach the correlation link', example: 'message' }),
    target: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Target data query', example: { prop1: 'value1', prop2: 'value' } }),
    transformations: z
      .array(TransformationSchema)
      .exactOptional()
      .openapi({
        description: 'Source data transformations',
        example: [
          { type: 'logfmt' },
          { expression: '(Superman|Batman)', type: 'regex', variable: 'name' },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('CorrelationConfigUpdateDTO')

const CounterResetHintSchema = z
  .int()
  .openapi({
    description:
      'or alternatively that we are dealing with a gauge histogram, where counter resets do not apply.',
    title: 'CounterResetHint contains the known information about a counter reset,',
  })
  .openapi('CounterResetHint')

const CreateAccessTokenResponseDTOSchema = z
  .object({ token: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateAccessTokenResponseDTO')

const CreateCorrelationCommandSchema = z
  .object({
    config: CorrelationConfigSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of the correlation',
        example: 'Logs to Traces',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional label identifying the correlation', example: 'My label' }),
    provisioned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if correlation was created with provisioning. This makes it read-only.',
      }),
    targetUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target data source UID to which the correlation is created. required if type = query',
        example: 'PE1C5CBDA0504A6A3',
      }),
    type: CorrelationTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'CreateCorrelationCommand is the command for creating a correlation',
    required: [],
  })
  .openapi('CreateCorrelationCommand')

const CreateCorrelationResponseBodySchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'Correlation created' }),
    result: CorrelationSchema.exactOptional(),
  })
  .openapi({
    description: 'CreateCorrelationResponse is the response struct for CreateCorrelationCommand',
    required: [],
  })
  .openapi('CreateCorrelationResponseBody')

const UnstructuredSchema = z
  .object({
    Object: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Object is a JSON compatible map with string, float, int, bool, []any,\nor map[string]any children.',
      }),
  })
  .openapi({
    description:
      'Unstructured allows objects that do not have Golang structs registered to be manipulated\ngenerically.',
    required: [],
  })
  .openapi('Unstructured')

const CreateDashboardSnapshotCommandSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    dashboard: UnstructuredSchema,
    deleteKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique key used to delete the snapshot. It is different from the `key` so that only the creator can delete the snapshot. Required if `external` is `true`.',
      }),
    expires: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'When the snapshot should expire in seconds in seconds. Default is never to expire.',
      }),
    external: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'these are passed when storing an external snapshot ref\nSave the snapshot on an external server rather than locally.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Define the unique key. Required if `external` is `true`.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z.string().exactOptional().openapi({ description: 'Snapshot name' }),
  })
  .openapi({ required: ['dashboard'] })
  .openapi('CreateDashboardSnapshotCommand')

const CreateFolderCommandSchema = z
  .object({
    description: z.string().exactOptional(),
    parentUid: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({
    description:
      'CreateFolderCommand captures the information required by the folder service\nto create a folder.',
    required: [],
  })
  .openapi('CreateFolderCommand')

const CreateLibraryElementCommandSchema = z
  .object({
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'ID of the folder where the library element is stored.\n\nDeprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'UID of the folder where the library element is stored.' }),
    kind: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.literal(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [1],
        description:
          'Kind of element to create, Use 1 for library panels or 2 for c.\nDescription:\n- 1 - library panels',
      }),
    model: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The JSON model for the library element.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the library element.' }),
    uid: z.string().exactOptional(),
  })
  .openapi({
    description: 'CreateLibraryElementCommand is the command for adding a LibraryElement',
    required: [],
  })
  .openapi('CreateLibraryElementCommand')

const ReportDashboardIDSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportDashboardID')

const ReportTimeRangeSchema = z
  .object({ from: z.string().exactOptional(), to: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportTimeRange')

const ReportDashboardSchema = z
  .object({
    dashboard: ReportDashboardIDSchema.exactOptional(),
    reportVariables: z.any().exactOptional(),
    timeRange: ReportTimeRangeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportDashboard')

const TypeSchema = z.string().openapi('Type')

const ReportOptionsSchema = z
  .object({
    csvEncoding: z.string().exactOptional(),
    layout: z.string().exactOptional(),
    orientation: z.string().exactOptional(),
    pdfCombineOneFile: z.boolean().exactOptional(),
    pdfShowTemplateVariables: z.boolean().exactOptional(),
    timeRange: ReportTimeRangeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportOptions')

const ReportScheduleSchema = z
  .object({
    dayOfMonth: z.string().exactOptional(),
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    frequency: z.string().exactOptional(),
    intervalAmount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    intervalFrequency: z.string().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
    timeZone: z.string().exactOptional(),
    workdaysOnly: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportSchedule')

const StateSchema = z.string().openapi('State')

const ReportURLItemSchema = z
  .object({ title: z.string().exactOptional(), url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportURLItem')

const CreateOrUpdateReportSchema = z
  .object({
    dashboards: z.array(ReportDashboardSchema).exactOptional(),
    enableCsv: z.boolean().exactOptional(),
    enableDashboardUrl: z.boolean().exactOptional(),
    formats: z.array(TypeSchema).exactOptional(),
    message: z.string().exactOptional(),
    name: z.string().exactOptional(),
    options: ReportOptionsSchema.exactOptional(),
    recipients: z.string().exactOptional(),
    replyTo: z.string().exactOptional(),
    scaleFactor: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    schedule: ReportScheduleSchema.exactOptional(),
    state: StateSchema.exactOptional(),
    subject: z.string().exactOptional(),
    urls: z.array(ReportURLItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOrUpdateReport')

const CreateOrgCommandSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateOrgCommand')

const PlaylistItemSchema = z
  .object({
    Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    PlaylistId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    order: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    title: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlaylistItem')

const CreatePlaylistCommandSchema = z
  .object({
    interval: z.string().exactOptional(),
    items: z.array(PlaylistItemSchema).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePlaylistCommand')

const CreateQueryInQueryHistoryCommandSchema = z
  .object({
    datasourceUid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UID of the data source for which are queries stored.',
        example: 'PE1C5CBDA0504A6A3',
      }),
    queries: JsonSchema,
  })
  .openapi({
    description: 'CreateQueryInQueryHistoryCommand is the command for adding query history',
    required: ['queries'],
  })
  .openapi('CreateQueryInQueryHistoryCommand')

const PermissionSchema = z
  .object({
    action: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    scope: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ description: 'Permission is the model for access control permissions', required: [] })
  .openapi('Permission')

const CreateRoleFormSchema = z
  .object({
    description: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    global: z.boolean().exactOptional(),
    group: z.string().exactOptional(),
    hidden: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    permissions: z.array(PermissionSchema).exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRoleForm')

const CreateServiceAccountFormSchema = z
  .object({
    isDisabled: z.boolean().exactOptional().openapi({ example: false }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
    role: z
      .enum(['None', 'Viewer', 'Editor', 'Admin'])
      .exactOptional()
      .openapi({ example: 'Admin' }),
  })
  .openapi({ required: [] })
  .openapi('CreateServiceAccountForm')

const CreateSnapshotRequestDTOSchema = z
  .object({
    resourceTypes: z
      .array(
        z.enum([
          'DASHBOARD',
          'DATASOURCE',
          'FOLDER',
          'LIBRARY_ELEMENT',
          'ALERT_RULE',
          'ALERT_RULE_GROUP',
          'CONTACT_POINT',
          'NOTIFICATION_POLICY',
          'NOTIFICATION_TEMPLATE',
          'MUTE_TIMING',
          'PLUGIN',
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSnapshotRequestDTO')

const CreateSnapshotResponseDTOSchema = z
  .object({ uid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateSnapshotResponseDTO')

const CreateTeamCommandSchema = z
  .object({ email: z.string().exactOptional(), name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('CreateTeamCommand')

const DashboardaccessPermissionTypeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('DashboardaccessPermissionType')

const DashboardACLInfoDTOSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z.string().exactOptional(),
    inherited: z.boolean().exactOptional(),
    isFolder: z.boolean().exactOptional(),
    permission: DashboardaccessPermissionTypeSchema.exactOptional(),
    permissionName: z.string().exactOptional(),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
    slug: z.string().exactOptional(),
    team: z.string().exactOptional(),
    teamAvatarUrl: z.string().exactOptional(),
    teamEmail: z.string().exactOptional(),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamUid: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    url: z.string().exactOptional(),
    userAvatarUrl: z.string().exactOptional(),
    userEmail: z.string().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userLogin: z.string().exactOptional(),
    userUid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardACLInfoDTO')

const DashboardACLUpdateItemSchema = z
  .object({
    permission: DashboardaccessPermissionTypeSchema.exactOptional(),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardACLUpdateItem')

const DashboardCreateCommandSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    dashboard: UnstructuredSchema,
    expires: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'When the snapshot should expire in seconds in seconds. Default is never to expire.',
      }),
    external: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'these are passed when storing an external snapshot ref\nSave the snapshot on an external server rather than locally.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z.string().exactOptional().openapi({ description: 'Snapshot name' }),
  })
  .openapi({
    description: 'These are the values expected to be sent from an end user',
    required: ['dashboard'],
  })
  .openapi('DashboardCreateCommand')

const DashboardMetaSchema = z
  .object({
    annotationsPermissions: AnnotationPermissionSchema.exactOptional(),
    apiVersion: z.string().exactOptional(),
    canAdmin: z.boolean().exactOptional(),
    canDelete: z.boolean().exactOptional(),
    canEdit: z.boolean().exactOptional(),
    canSave: z.boolean().exactOptional(),
    canStar: z.boolean().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdBy: z.string().exactOptional(),
    expires: z.iso.datetime({ offset: true }).exactOptional(),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderTitle: z.string().exactOptional(),
    folderUid: z.string().exactOptional(),
    folderUrl: z.string().exactOptional(),
    hasAcl: z.boolean().exactOptional(),
    isFolder: z.boolean().exactOptional(),
    isSnapshot: z.boolean().exactOptional(),
    provisioned: z.boolean().exactOptional(),
    provisionedExternalId: z.string().exactOptional(),
    publicDashboardEnabled: z.boolean().exactOptional(),
    slug: z.string().exactOptional(),
    type: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    updatedBy: z.string().exactOptional(),
    url: z.string().exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardMeta')

const DashboardFullWithMetaSchema = z
  .object({ dashboard: JsonSchema.exactOptional(), meta: DashboardMetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DashboardFullWithMeta')

const DashboardSnapshotDTOSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    expires: z.iso.datetime({ offset: true }).exactOptional(),
    external: z.boolean().exactOptional(),
    externalUrl: z.string().exactOptional(),
    key: z.string().exactOptional(),
    name: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ description: 'DashboardSnapshotDTO without dashboard map', required: [] })
  .openapi('DashboardSnapshotDTO')

const DashboardTagCloudItemSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    term: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardTagCloudItem')

const DashboardVersionMetaSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdBy: z.string().exactOptional(),
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    data: JsonSchema.exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string().exactOptional(),
    parentVersion: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    restoredFrom: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    uid: z.string().exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description:
      'DashboardVersionMeta extends the DashboardVersionDTO with the names\nassociated with the UserIds, overriding the field with the same name from\nthe DashboardVersionDTO model.',
    required: [],
  })
  .openapi('DashboardVersionMeta')

const DashboardVersionResponseMetaSchema = z
  .object({
    continueToken: z.string().exactOptional(),
    versions: z.array(DashboardVersionMetaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardVersionResponseMeta')

const SourceSchema = z
  .string()
  .openapi({ title: 'Source type defines the status source.' })
  .openapi('Source')

const FramesSchema = z
  .array(FrameSchema)
  .openapi({
    description:
      'It is the main data container within a backend.DataResponse.\nThere should be no `nil` entries in the Frames slice (making them pointers was a mistake).',
    title: 'Frames is a slice of Frame pointers.',
  })
  .openapi('Frames')

const StatusSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('Status')

const DataResponseSchema = z
  .object({
    Error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error is a property to be set if the corresponding DataQuery has an error.',
      }),
    ErrorSource: SourceSchema.exactOptional(),
    Frames: FramesSchema.exactOptional(),
    Status: StatusSchema.exactOptional(),
  })
  .openapi({
    description:
      'A map of RefIDs (unique query identifiers) to this type makes up the Responses property of a QueryDataResponse.\nThe Error property is used to allow for partial success responses from the containing QueryDataResponse.',
    title: 'DataResponse contains the results from a DataQuery.',
    required: [],
  })
  .openapi('DataResponse')

const DataSourceSchema = z
  .object({
    access: DsAccessSchema.exactOptional(),
    accessControl: MetadataSchema.exactOptional(),
    basicAuth: z.boolean().exactOptional(),
    basicAuthUser: z.string().exactOptional(),
    database: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDefault: z.boolean().exactOptional(),
    jsonData: JsonSchema.exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    readOnly: z.boolean().exactOptional(),
    secureJsonFields: z.record(z.string(), z.boolean()).exactOptional(),
    type: z.string().exactOptional(),
    typeLogoUrl: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    url: z.string().exactOptional(),
    user: z.string().exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    withCredentials: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataSource')

const DataSourceListItemDTOSchema = z
  .object({
    access: DsAccessSchema.exactOptional(),
    basicAuth: z.boolean().exactOptional(),
    database: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDefault: z.boolean().exactOptional(),
    jsonData: JsonSchema.exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    readOnly: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
    typeLogoUrl: z.string().exactOptional(),
    typeName: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    url: z.string().exactOptional(),
    user: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataSourceListItemDTO')

const DataSourceListSchema = z.array(DataSourceListItemDTOSchema).openapi('DataSourceList')

const DeleteCorrelationResponseBodySchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Correlation deleted' }) })
  .openapi({ required: [] })
  .openapi('DeleteCorrelationResponseBody')

const DeleteTokenCommandSchema = z
  .object({ instance: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteTokenCommand')

const DescendantCountsSchema = z
  .record(
    z.string(),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  )
  .openapi('DescendantCounts')

const DescriptionSchema = z
  .object({
    assignments: AssignmentsSchema.exactOptional(),
    permissions: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Description')

const DeviceSearchHitDTOSchema = z
  .object({
    clientIp: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    deviceId: z.string().exactOptional(),
    lastSeenAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    userAgent: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceSearchHitDTO')

const DiscordConfigSchema = z
  .object({
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    webhook_url: URLSchema.exactOptional(),
    webhook_url_file: z.string().exactOptional(),
  })
  .openapi({ title: 'DiscordConfig configures notifications via Discord.', required: [] })
  .openapi('DiscordConfig')

const DiscoveryBaseSchema = z
  .object({
    error: z.string().exactOptional(),
    errorType: ErrorTypeSchema.exactOptional(),
    status: z.string(),
  })
  .openapi({ required: ['status'] })
  .openapi('DiscoveryBase')

const DsPermissionTypeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description:
      'Datasource permission\nDescription:\n- `0` - No Access\n- `1` - Query\n- `2` - Edit',
  })
  .openapi('DsPermissionType')

const EmailConfigSchema = z
  .object({
    auth_identity: z.string().exactOptional(),
    auth_password: SecretSchema.exactOptional(),
    auth_password_file: z.string().exactOptional(),
    auth_secret: SecretSchema.exactOptional(),
    auth_username: z.string().exactOptional(),
    from: z.string().exactOptional(),
    headers: z.record(z.string(), z.string()).exactOptional(),
    hello: z.string().exactOptional(),
    html: z.string().exactOptional(),
    require_tls: z.boolean().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    smarthost: HostPortSchema.exactOptional(),
    text: z.string().exactOptional(),
    tls_config: TLSConfigSchema.exactOptional(),
    to: z.string().exactOptional().openapi({ description: 'Email address to notify.' }),
  })
  .openapi({ title: 'EmailConfig configures notifications via mail.', required: [] })
  .openapi('EmailConfig')

const EmailDTOSchema = z
  .object({ recipient: z.string().exactOptional(), uid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EmailDTO')

const ErrorResponseBodySchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error An optional detailed description of the actual error. Only included if running in developer mode.',
      }),
    message: z.string().openapi({ description: 'a human readable version of the error' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status An optional status to denote the cause of the error.\n\nFor example, a 412 Precondition Failed error may include additional information of why that error happened.',
      }),
  })
  .openapi({ required: ['message'] })
  .openapi('ErrorResponseBody')

const EvalAlertConditionCommandSchema = z
  .object({
    condition: z.string().exactOptional(),
    data: z.array(AlertQuerySchema).exactOptional(),
    now: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description: 'EvalAlertConditionCommand is the command for evaluating a condition',
    required: [],
  })
  .openapi('EvalAlertConditionCommand')

const EvalQueriesPayloadSchema = z
  .object({
    condition: z.string().exactOptional(),
    data: z.array(AlertQuerySchema).exactOptional(),
    now: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EvalQueriesPayload')

const EvalQueriesResponseSchema = z.object({}).openapi('EvalQueriesResponse')

const PostableGrafanaReceiverSchema = z
  .object({
    disableResolveMessage: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    secureSettings: z.record(z.string(), z.string()).exactOptional(),
    settings: RawMessageSchema.exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostableGrafanaReceiver')

const OpsGenieConfigResponderSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'One of those 3 should be filled.' }),
    name: z.string().exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'team, user, escalation, schedule etc.' }),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpsGenieConfigResponder')

const OpsGenieConfigSchema = z
  .object({
    actions: z.string().exactOptional(),
    api_key: SecretSchema.exactOptional(),
    api_key_file: z.string().exactOptional(),
    api_url: URLSchema.exactOptional(),
    description: z.string().exactOptional(),
    details: z.record(z.string(), z.string()).exactOptional(),
    entity: z.string().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    note: z.string().exactOptional(),
    priority: z.string().exactOptional(),
    responders: z.array(OpsGenieConfigResponderSchema).exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    source: z.string().exactOptional(),
    tags: z.string().exactOptional(),
    update_alerts: z.boolean().exactOptional(),
  })
  .openapi({ title: 'OpsGenieConfig configures notifications via OpsGenie.', required: [] })
  .openapi('OpsGenieConfig')

const PagerdutyImageSchema = z
  .object({
    alt: z.string().exactOptional(),
    href: z.string().exactOptional(),
    src: z.string().exactOptional(),
  })
  .openapi({ title: 'PagerdutyImage is an image.', required: [] })
  .openapi('PagerdutyImage')

const PagerdutyLinkSchema = z
  .object({ href: z.string().exactOptional(), text: z.string().exactOptional() })
  .openapi({ title: 'PagerdutyLink is a link.', required: [] })
  .openapi('PagerdutyLink')

const PagerdutyConfigSchema = z
  .object({
    class: z.string().exactOptional(),
    client: z.string().exactOptional(),
    client_url: z.string().exactOptional(),
    component: z.string().exactOptional(),
    description: z.string().exactOptional(),
    details: z.record(z.string(), z.string()).exactOptional(),
    group: z.string().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    images: z.array(PagerdutyImageSchema).exactOptional(),
    links: z.array(PagerdutyLinkSchema).exactOptional(),
    routing_key: SecretSchema.exactOptional(),
    routing_key_file: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    service_key: SecretSchema.exactOptional(),
    service_key_file: z.string().exactOptional(),
    severity: z.string().exactOptional(),
    source: z.string().exactOptional(),
    url: URLSchema.exactOptional(),
  })
  .openapi({ title: 'PagerdutyConfig configures notifications via PagerDuty.', required: [] })
  .openapi('PagerdutyConfig')

const PushoverConfigSchema = z
  .object({
    device: z.string().exactOptional(),
    expire: z.string().exactOptional(),
    html: z.boolean().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    priority: z.string().exactOptional(),
    retry: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    sound: z.string().exactOptional(),
    title: z.string().exactOptional(),
    token: SecretSchema.exactOptional(),
    token_file: z.string().exactOptional(),
    ttl: z.string().exactOptional(),
    url: z.string().exactOptional(),
    url_title: z.string().exactOptional(),
    user_key: SecretSchema.exactOptional(),
    user_key_file: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PushoverConfig')

const SlackConfirmationFieldSchema = z
  .object({
    dismiss_text: z.string().exactOptional(),
    ok_text: z.string().exactOptional(),
    text: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({
    description:
      'SlackConfirmationField protect users from destructive actions or particularly distinguished decisions\nby asking them to confirm their button click one more time.\nSee https://api.slack.com/docs/interactive-message-field-guide#confirmation_fields for more information.',
    required: [],
  })
  .openapi('SlackConfirmationField')

const SlackActionSchema = z
  .object({
    confirm: SlackConfirmationFieldSchema.exactOptional(),
    name: z.string().exactOptional(),
    style: z.string().exactOptional(),
    text: z.string().exactOptional(),
    type: z.string().exactOptional(),
    url: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({
    description:
      'See https://api.slack.com/docs/message-attachments#action_fields and https://api.slack.com/docs/message-buttons\nfor more information.',
    title: 'SlackAction configures a single Slack action that is sent with each notification.',
    required: [],
  })
  .openapi('SlackAction')

const SlackFieldSchema = z
  .object({
    short: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Each field must contain a title, value, and optionally, a boolean value to indicate if the field\nis short enough to be displayed next to other fields designated as short.\nSee https://api.slack.com/docs/message-attachments#fields for more information.',
    title: 'SlackField configures a single Slack field that is sent with each notification.',
    required: [],
  })
  .openapi('SlackField')

const SlackConfigSchema = z
  .object({
    actions: z.array(SlackActionSchema).exactOptional(),
    api_url: URLSchema.exactOptional(),
    api_url_file: z.string().exactOptional(),
    callback_id: z.string().exactOptional(),
    channel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Slack channel override, (like #other-channel or @username).' }),
    color: z.string().exactOptional(),
    fallback: z.string().exactOptional(),
    fields: z.array(SlackFieldSchema).exactOptional(),
    footer: z.string().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    icon_emoji: z.string().exactOptional(),
    icon_url: z.string().exactOptional(),
    image_url: z.string().exactOptional(),
    link_names: z.boolean().exactOptional(),
    mrkdwn_in: z.array(z.string()).exactOptional(),
    pretext: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    short_fields: z.boolean().exactOptional(),
    text: z.string().exactOptional(),
    thumb_url: z.string().exactOptional(),
    title: z.string().exactOptional(),
    title_link: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ title: 'SlackConfig configures notifications via Slack.', required: [] })
  .openapi('SlackConfig')

const VictorOpsConfigSchema = z
  .object({
    api_key: SecretSchema.exactOptional(),
    api_key_file: z.string().exactOptional(),
    api_url: URLSchema.exactOptional(),
    custom_fields: z.record(z.string(), z.string()).exactOptional(),
    entity_display_name: z.string().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message_type: z.string().exactOptional(),
    monitoring_tool: z.string().exactOptional(),
    routing_key: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    state_message: z.string().exactOptional(),
  })
  .openapi({ title: 'VictorOpsConfig configures notifications via VictorOps.', required: [] })
  .openapi('VictorOpsConfig')

const WebhookConfigSchema = z
  .object({
    http_config: HTTPClientConfigSchema.exactOptional(),
    max_alerts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'uint64',
        description:
          'MaxAlerts is the maximum number of alerts to be sent per webhook message.\nAlerts exceeding this threshold will be truncated. Setting this to 0\nallows an unlimited number of alerts.',
      }),
    send_resolved: z.boolean().exactOptional(),
    timeout: DurationSchema.exactOptional(),
    url: URLSchema.exactOptional(),
    url_file: z.string().exactOptional(),
  })
  .openapi({ title: 'WebhookConfig configures notifications via a generic webhook.', required: [] })
  .openapi('WebhookConfig')

const WechatConfigSchema = z
  .object({
    agent_id: z.string().exactOptional(),
    api_secret: SecretSchema.exactOptional(),
    api_url: URLSchema.exactOptional(),
    corp_id: z.string().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    message_type: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    to_party: z.string().exactOptional(),
    to_tag: z.string().exactOptional(),
    to_user: z.string().exactOptional(),
  })
  .openapi({ title: 'WechatConfig configures notifications via Wechat.', required: [] })
  .openapi('WechatConfig')

const ExtendedReceiverSchema = z
  .object({
    email_configs: EmailConfigSchema.exactOptional(),
    grafana_managed_receiver: PostableGrafanaReceiverSchema.exactOptional(),
    opsgenie_configs: OpsGenieConfigSchema.exactOptional(),
    pagerduty_configs: PagerdutyConfigSchema.exactOptional(),
    pushover_configs: PushoverConfigSchema.exactOptional(),
    slack_configs: SlackConfigSchema.exactOptional(),
    victorops_configs: VictorOpsConfigSchema.exactOptional(),
    webhook_configs: WebhookConfigSchema.exactOptional(),
    wechat_configs: WechatConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtendedReceiver')

const ExternalAlertmanagerConfigSchema = z
  .object({
    alertmanager_config: ConfigSchema.exactOptional(),
    template_files: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalAlertmanagerConfig')

const PeerStatusSchema = z
  .object({
    address: z.string().openapi({ description: 'address' }),
    name: z.string().openapi({ description: 'name' }),
  })
  .openapi({ description: 'PeerStatus peer status', required: ['address', 'name'] })
  .openapi('PeerStatus')

const ClusterStatusSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'name' }),
    peers: z.array(PeerStatusSchema).exactOptional().openapi({ description: 'peers' }),
    status: z.literal('[ready settling disabled]').openapi({ description: 'status' }),
  })
  .openapi({ description: 'ClusterStatus cluster status', required: ['status'] })
  .openapi('ClusterStatus')

const VersionInfoSchema = z
  .object({
    branch: z.string().openapi({ description: 'branch' }),
    buildDate: z.string().openapi({ description: 'build date' }),
    buildUser: z.string().openapi({ description: 'build user' }),
    goVersion: z.string().openapi({ description: 'go version' }),
    revision: z.string().openapi({ description: 'revision' }),
    version: z.string().openapi({ description: 'version' }),
  })
  .openapi({
    description: 'VersionInfo version info',
    required: ['branch', 'buildDate', 'buildUser', 'goVersion', 'revision', 'version'],
  })
  .openapi('VersionInfo')

const ExternalAlertmanagerStatusSchema = z
  .object({
    cluster: ClusterStatusSchema,
    config: ConfigSchema,
    uptime: z.string().openapi({ description: 'uptime' }),
    versionInfo: VersionInfoSchema,
  })
  .openapi({ required: ['cluster', 'config', 'uptime', 'versionInfo'] })
  .openapi('ExternalAlertmanagerStatus')

const ExtraConfigurationSchema = z
  .object({
    alertmanager_config: z.string().exactOptional(),
    identifier: z.string().exactOptional(),
    managed_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ManagedBy is "manual" or "auto-sync", computed server-side so callers don\'t need configs:get\nto tell the two apart.',
      }),
    template_files: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtraConfiguration')

const ResponseDetailsSchema = z
  .object({ msg: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResponseDetails')

const FailureSchema = ResponseDetailsSchema.openapi('Failure')

const TagsDTOSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tag: z.string().exactOptional(),
  })
  .openapi({ title: 'TagsDTO is the frontend DTO for Tag.', required: [] })
  .openapi('TagsDTO')

const FindTagsResultSchema = z
  .object({ tags: z.array(TagsDTOSchema).exactOptional() })
  .openapi({ title: 'FindTagsResult is the result of a tags search.', required: [] })
  .openapi('FindTagsResult')

const SpanSchema = z
  .object({
    Length: z.uint32().exactOptional().openapi({ description: 'Length of the span.' }),
    Offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Gap to previous span (always positive), or starting index for the 1st\nspan (which can be negative).',
      }),
  })
  .openapi({ title: 'A Span defines a continuous sequence of buckets.', required: [] })
  .openapi('Span')

const FloatHistogramSchema = z
  .object({
    Count: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total number of observations. Must be zero or positive.' }),
    CounterResetHint: CounterResetHintSchema.exactOptional(),
    CustomValues: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'Holds the custom (usually upper) bounds for bucket definitions, otherwise nil.\nThis slice is interned, to be treated as immutable and copied by reference.\nThese numbers should be strictly increasing. This field is only used when the\nschema is for custom buckets, and the ZeroThreshold, ZeroCount, NegativeSpans\nand NegativeBuckets fields are not used in that case.',
      }),
    PositiveBuckets: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'Observation counts in buckets. Each represents an absolute count and\nmust be zero or positive.',
      }),
    PositiveSpans: z
      .array(SpanSchema)
      .exactOptional()
      .openapi({ description: 'Spans for positive and negative buckets (see Span below).' }),
    Schema: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Currently valid schema numbers are -4 <= n <= 8 for exponential buckets.\nThey are all for base-2 bucket schemas, where 1 is a bucket boundary in\neach case, and then each power of two is divided into 2^n logarithmic buckets.\nOr in other words, each bucket boundary is the previous boundary times\n2^(2^-n). Another valid schema number is -53 for custom buckets, defined by\nthe CustomValues field.',
      }),
    Sum: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Sum of observations. This is also used as the stale marker.' }),
    ZeroCount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Observations falling into the zero bucket. Must be zero or positive.',
      }),
    ZeroThreshold: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Width of the zero bucket.' }),
  })
  .openapi({
    description:
      'A FloatHistogram is needed by PromQL to handle operations that might result\nin fractional counts. Since the counts in a histogram are unlikely to be too\nlarge to be represented precisely by a float64, a FloatHistogram can also be\nused to represent a histogram with integer counts and thus serves as a more\ngeneralized representation.',
    title:
      'FloatHistogram is similar to Histogram but uses float64 for all\ncounts. Additionally, bucket counts are absolute and not deltas.',
    required: [],
  })
  .openapi('FloatHistogram')

const FolderSchema: z.ZodType<FolderType> = z
  .lazy(() =>
    z
      .object({
        accessControl: MetadataSchema.exactOptional(),
        canAdmin: z.boolean().exactOptional(),
        canDelete: z.boolean().exactOptional(),
        canEdit: z.boolean().exactOptional(),
        canSave: z.boolean().exactOptional(),
        created: z.iso.datetime({ offset: true }).exactOptional(),
        createdBy: z.string().exactOptional(),
        hasAcl: z.boolean().exactOptional(),
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Deprecated: use UID instead',
            'x-deprecated': true,
          }),
        managedBy: ManagerKindSchema.exactOptional(),
        orgId: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        parentUid: z
          .string()
          .exactOptional()
          .openapi({ description: 'only used if nested folders are enabled' }),
        parents: z
          .array(FolderSchema)
          .exactOptional()
          .openapi({ description: 'the parent folders starting from the root going down' }),
        title: z.string().exactOptional(),
        uid: z.string().exactOptional(),
        updated: z.iso.datetime({ offset: true }).exactOptional(),
        updatedBy: z.string().exactOptional(),
        url: z.string().exactOptional(),
        version: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Folder')

const FolderSearchHitSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    managedBy: ManagerKindSchema.exactOptional(),
    parentUid: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FolderSearchHit')

const FooterItemSchema = z
  .object({
    color: z.string().exactOptional(),
    fontSize: z.string().exactOptional(),
    fontStyle: z.string().exactOptional(),
    fontWeight: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FooterItem')

const PublicErrorSchema = z
  .object({
    extra: z.record(z.string(), z.any()).exactOptional(),
    message: z.string().exactOptional(),
    messageId: z.string().exactOptional(),
    statusCode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description:
      'PublicError is derived from Error and only contains information\navailable to the end user.',
    required: [],
  })
  .openapi('PublicError')

const ForbiddenErrorSchema = z
  .object({ body: PublicErrorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ForbiddenError')

const GetAccessTokenResponseDTOSchema = z
  .object({
    createdAt: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    expiresAt: z.string().exactOptional(),
    firstUsedAt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lastUsedAt: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccessTokenResponseDTO')

const GetAnnotationTagsResponseSchema = z
  .object({ result: FindTagsResultSchema.exactOptional() })
  .openapi({
    title: 'GetAnnotationTagsResponse is a response struct for FindTagsResult.',
    required: [],
  })
  .openapi('GetAnnotationTagsResponse')

const GetHomeDashboardResponseSchema = z
  .object({ dashboard: JsonSchema.exactOptional(), meta: DashboardMetaSchema.exactOptional() })
  .openapi({ required: [] })
  .and(z.object({ redirectUri: z.string().exactOptional() }).openapi({ required: [] }))
  .openapi({ title: 'Get home dashboard response.' })
  .openapi('GetHomeDashboardResponse')

const MigrateDataResponseItemDTOSchema = z
  .object({
    errorCode: z
      .enum([
        'ALERT_RULES_QUOTA_REACHED',
        'ALERT_RULES_GROUP_QUOTA_REACHED',
        'DATASOURCE_NAME_CONFLICT',
        'DATASOURCE_INVALID_URL',
        'DATASOURCE_ALREADY_MANAGED',
        'FOLDER_NAME_CONFLICT',
        'DASHBOARD_ALREADY_MANAGED',
        'LIBRARY_ELEMENT_NAME_CONFLICT',
        'UNSUPPORTED_DATA_TYPE',
        'RESOURCE_CONFLICT',
        'UNEXPECTED_STATUS_CODE',
        'INTERNAL_SERVICE_ERROR',
        'GENERIC_ERROR',
      ])
      .exactOptional(),
    message: z.string().exactOptional(),
    name: z.string().exactOptional(),
    parentName: z.string().exactOptional(),
    refId: z.string(),
    status: z.enum(['OK', 'WARNING', 'ERROR', 'PENDING', 'UNKNOWN']),
    type: z.enum([
      'DASHBOARD',
      'DATASOURCE',
      'FOLDER',
      'LIBRARY_ELEMENT',
      'ALERT_RULE',
      'ALERT_RULE_GROUP',
      'CONTACT_POINT',
      'NOTIFICATION_POLICY',
      'NOTIFICATION_TEMPLATE',
      'MUTE_TIMING',
      'PLUGIN',
    ]),
  })
  .openapi({ required: ['type', 'refId', 'status'] })
  .openapi('MigrateDataResponseItemDTO')

const SnapshotResourceStatsSchema = z
  .object({
    statuses: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    types: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SnapshotResourceStats')

const GetSnapshotResponseDTOSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    finished: z.iso.datetime({ offset: true }).exactOptional(),
    results: z.array(MigrateDataResponseItemDTOSchema).exactOptional(),
    sessionUid: z.string().exactOptional(),
    stats: SnapshotResourceStatsSchema.exactOptional(),
    status: z
      .enum([
        'INITIALIZING',
        'CREATING',
        'PENDING_UPLOAD',
        'UPLOADING',
        'PENDING_PROCESSING',
        'PROCESSING',
        'FINISHED',
        'CANCELED',
        'ERROR',
        'UNKNOWN',
      ])
      .exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSnapshotResponseDTO')

const GettableAlertmanagersSchema = z
  .object({ data: AlertManagersResultSchema.exactOptional(), status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GettableAlertmanagers')

const GettableGrafanaReceiverSchema = z
  .object({
    disableResolveMessage: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    provenance: ProvenanceSchema.exactOptional(),
    secureFields: z.record(z.string(), z.boolean()).exactOptional(),
    settings: RawMessageSchema.exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableGrafanaReceiver')

const JiraConfigSchema = z
  .object({
    api_url: URLSchema.exactOptional(),
    custom_fields: z.record(z.string(), z.any()).exactOptional(),
    description: z.string().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    issue_type: z.string().exactOptional(),
    labels: z.array(z.string()).exactOptional(),
    priority: z.string().exactOptional(),
    project: z.string().exactOptional(),
    reopen_duration: DurationSchema.exactOptional(),
    reopen_transition: z.string().exactOptional(),
    resolve_transition: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    summary: z.string().exactOptional(),
    wont_fix_resolution: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JiraConfig')

const MSTeamsConfigSchema = z
  .object({
    http_config: HTTPClientConfigSchema.exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    summary: z.string().exactOptional(),
    text: z.string().exactOptional(),
    title: z.string().exactOptional(),
    webhook_url: URLSchema.exactOptional(),
    webhook_url_file: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MSTeamsConfig')

const MSTeamsV2ConfigSchema = z
  .object({
    http_config: HTTPClientConfigSchema.exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    text: z.string().exactOptional(),
    title: z.string().exactOptional(),
    webhook_url: URLSchema.exactOptional(),
    webhook_url_file: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MSTeamsV2Config')

const SigV4ConfigSchema = z
  .object({
    AccessKey: z.string().exactOptional(),
    Profile: z.string().exactOptional(),
    Region: z.string().exactOptional(),
    RoleARN: z.string().exactOptional(),
    SecretKey: SecretSchema.exactOptional(),
  })
  .openapi({
    description:
      "SigV4Config is the configuration for signing remote write requests with\nAWS's SigV4 verification process. Empty values will be retrieved using the\nAWS default credentials chain.",
    required: [],
  })
  .openapi('SigV4Config')

const SNSConfigSchema = z
  .object({
    api_url: z.string().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    phone_number: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    sigv4: SigV4ConfigSchema.exactOptional(),
    subject: z.string().exactOptional(),
    target_arn: z.string().exactOptional(),
    topic_arn: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SNSConfig')

const TelegramConfigSchema = z
  .object({
    api_url: URLSchema.exactOptional(),
    chat: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    disable_notifications: z.boolean().exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    parse_mode: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
    token: SecretSchema.exactOptional(),
    token_file: z.string().exactOptional(),
  })
  .openapi({ title: 'TelegramConfig configures notifications via Telegram.', required: [] })
  .openapi('TelegramConfig')

const WebexConfigSchema = z
  .object({
    api_url: URLSchema.exactOptional(),
    http_config: HTTPClientConfigSchema.exactOptional(),
    message: z.string().exactOptional(),
    room_id: z.string().exactOptional(),
    send_resolved: z.boolean().exactOptional(),
  })
  .openapi({ title: 'WebexConfig configures notifications via Webex.', required: [] })
  .openapi('WebexConfig')

const GettableApiReceiverSchema = z
  .object({
    discord_configs: z.array(DiscordConfigSchema).exactOptional(),
    email_configs: z.array(EmailConfigSchema).exactOptional(),
    grafana_managed_receiver_configs: z.array(GettableGrafanaReceiverSchema).exactOptional(),
    jira_configs: z.array(JiraConfigSchema).exactOptional(),
    msteams_configs: z.array(MSTeamsConfigSchema).exactOptional(),
    msteamsv2_configs: z.array(MSTeamsV2ConfigSchema).exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for this receiver.' }),
    opsgenie_configs: z.array(OpsGenieConfigSchema).exactOptional(),
    pagerduty_configs: z.array(PagerdutyConfigSchema).exactOptional(),
    pushover_configs: z.array(PushoverConfigSchema).exactOptional(),
    slack_configs: z.array(SlackConfigSchema).exactOptional(),
    sns_configs: z.array(SNSConfigSchema).exactOptional(),
    telegram_configs: z.array(TelegramConfigSchema).exactOptional(),
    victorops_configs: z.array(VictorOpsConfigSchema).exactOptional(),
    webex_configs: z.array(WebexConfigSchema).exactOptional(),
    webhook_configs: z.array(WebhookConfigSchema).exactOptional(),
    wechat_configs: z.array(WechatConfigSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableApiReceiver')

const GettableApiAlertingConfigSchema = z
  .object({
    global: GlobalConfigSchema.exactOptional(),
    inhibit_rules: z.array(InhibitRuleSchema).exactOptional(),
    muteTimeProvenances: z.record(z.string(), ProvenanceSchema).exactOptional(),
    mute_time_intervals: z
      .array(MuteTimeIntervalSchema)
      .exactOptional()
      .openapi({
        description: 'MuteTimeIntervals is deprecated and will be removed before Alertmanager 1.0.',
      }),
    receivers: z
      .array(GettableApiReceiverSchema)
      .exactOptional()
      .openapi({ description: 'Override with our superset receiver type' }),
    route: RouteSchema.exactOptional(),
    templates: z.array(z.string()).exactOptional(),
    time_intervals: z.array(TimeIntervalSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableApiAlertingConfig')

const UserInfoSchema = z
  .object({ name: z.string().exactOptional(), uid: z.string().exactOptional() })
  .openapi({
    title:
      'UserInfo represents user-related information, including a unique identifier and a name.',
    required: [],
  })
  .openapi('UserInfo')

const GettableGrafanaRuleSchema = z
  .object({
    condition: z.string().exactOptional(),
    data: z.array(AlertQuerySchema).exactOptional(),
    exec_err_state: z.enum(['OK', 'Alerting', 'Error']).exactOptional(),
    guid: z.string().exactOptional(),
    intervalSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    is_paused: z.boolean().exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field is only populated when listing alert rule versions.' }),
    metadata: AlertRuleMetadataSchema.exactOptional(),
    missing_series_evals_to_resolve: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    namespace_uid: z.string().exactOptional(),
    no_data_state: z.enum(['Alerting', 'NoData', 'OK']).exactOptional(),
    notification_settings: AlertRuleNotificationSettingsSchema.exactOptional(),
    provenance: ProvenanceSchema.exactOptional(),
    record: RecordSchema.exactOptional(),
    rule_group: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    updated_by: UserInfoSchema.exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('GettableGrafanaRule')

const GettableExtendedRuleNodeSchema = z
  .object({
    alert: z.string().exactOptional(),
    annotations: z.record(z.string(), z.string()).exactOptional(),
    expr: z.string().exactOptional(),
    for: z.string().exactOptional(),
    grafana_alert: GettableGrafanaRuleSchema.exactOptional(),
    keep_firing_for: z.string().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    record: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableExtendedRuleNode')

const GettableGrafanaReceiversSchema = z
  .object({
    grafana_managed_receiver_configs: z.array(GettableGrafanaReceiverSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableGrafanaReceivers')

const GettableHistoricUserConfigSchema = z
  .object({
    alertmanager_config: GettableApiAlertingConfigSchema.exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    last_applied: z.string().exactOptional(),
    template_file_provenances: z.record(z.string(), ProvenanceSchema).exactOptional(),
    template_files: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableHistoricUserConfig')

const GettableNGalertConfigSchema = z
  .object({
    alertmanagersChoice: z.enum(['all', 'internal', 'external']).exactOptional(),
    external_alertmanager_uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ExternalAlertmanagerUID is the UID of the Mimir/Cortex Alertmanager datasource being\nsynced, or empty if sync is not configured for this org.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GettableNGalertConfig')

const RemoteWriteConfigSchema = z
  .object({ url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RemoteWriteConfig')

const GettableRuleGroupConfigSchema = z
  .object({
    align_evaluation_time_on_interval: z.boolean().exactOptional(),
    evaluation_delay: z.string().exactOptional(),
    interval: DurationSchema.exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    query_offset: z.string().exactOptional(),
    remote_write: z.array(RemoteWriteConfigSchema).exactOptional(),
    rules: z.array(GettableExtendedRuleNodeSchema).exactOptional(),
    source_tenants: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableRuleGroupConfig')

const GettableRuleVersionsSchema = z
  .array(GettableExtendedRuleNodeSchema)
  .openapi('GettableRuleVersions')

const PostableApiReceiverSchema = z
  .object({
    grafana_managed_receiver_configs: z.array(PostableGrafanaReceiverSchema).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: 'nolint:revive', required: [] })
  .openapi('PostableApiReceiver')

const PostableApiAlertingConfigSchema = z
  .object({
    global: GlobalConfigSchema.exactOptional(),
    inhibit_rules: z.array(InhibitRuleSchema).exactOptional(),
    mute_time_intervals: z
      .array(MuteTimeIntervalSchema)
      .exactOptional()
      .openapi({
        description: 'MuteTimeIntervals is deprecated and will be removed before Alertmanager 1.0.',
      }),
    receivers: z
      .array(PostableApiReceiverSchema)
      .exactOptional()
      .openapi({ description: 'Override with our superset receiver type' }),
    route: RouteSchema.exactOptional(),
    templates: z.array(z.string()).exactOptional(),
    time_intervals: z.array(TimeIntervalSchema).exactOptional(),
  })
  .openapi({ description: 'nolint:revive', required: [] })
  .openapi('PostableApiAlertingConfig')

const GettableStatusSchema = z
  .object({
    cluster: ClusterStatusSchema,
    config: PostableApiAlertingConfigSchema,
    uptime: z.string().openapi({ description: 'uptime' }),
    versionInfo: VersionInfoSchema,
  })
  .openapi({ required: ['cluster', 'config', 'uptime', 'versionInfo'] })
  .openapi('GettableStatus')

const GettableUserConfigSchema = z
  .object({
    alertmanager_config: GettableApiAlertingConfigSchema.exactOptional(),
    extra_config: z.array(ExtraConfigurationSchema).exactOptional(),
    template_file_provenances: z.record(z.string(), ProvenanceSchema).exactOptional(),
    template_files: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GettableUserConfig')

const GoneSchema = z.object({}).openapi('Gone')

const HitTypeSchema = z.string().openapi('HitType')

const HitSchema = z
  .object({
    description: z.string().exactOptional(),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    folderTitle: z.string().exactOptional(),
    folderUid: z.string().exactOptional(),
    folderUrl: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDeleted: z.boolean().exactOptional(),
    isStarred: z.boolean().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    permanentlyDeleteDate: z.iso.datetime({ offset: true }).exactOptional(),
    slug: z.string().exactOptional(),
    sortMeta: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    sortMetaName: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    title: z.string().exactOptional(),
    type: HitTypeSchema.exactOptional(),
    uid: z.string().exactOptional(),
    uri: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Hit')

const HitListSchema = z.array(HitSchema).openapi('HitList')

const ImportDashboardInputSchema = z
  .object({
    name: z.string().exactOptional(),
    pluginId: z.string().exactOptional(),
    type: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({
    title: 'ImportDashboardInput definition of input parameters when importing a dashboard.',
    required: [],
  })
  .openapi('ImportDashboardInput')

const ImportDashboardRequestSchema = z
  .object({
    dashboard: JsonSchema.exactOptional(),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z.string().exactOptional(),
    inputs: z.array(ImportDashboardInputSchema).exactOptional(),
    overwrite: z.boolean().exactOptional(),
    path: z.string().exactOptional(),
    pluginId: z.string().exactOptional(),
  })
  .openapi({
    title: 'ImportDashboardRequest request object for importing a dashboard.',
    required: [],
  })
  .openapi('ImportDashboardRequest')

const ImportDashboardResponseSchema = z
  .object({
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    description: z.string().exactOptional(),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z.string().exactOptional(),
    imported: z.boolean().exactOptional(),
    importedRevision: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    importedUri: z.string().exactOptional(),
    importedUrl: z.string().exactOptional(),
    path: z.string().exactOptional(),
    pluginId: z.string().exactOptional(),
    removed: z.boolean().exactOptional(),
    revision: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({
    title: 'ImportDashboardResponse response object returned when importing a dashboard.',
    required: [],
  })
  .openapi('ImportDashboardResponse')

const IntegrationStatusSchema = z
  .object({
    lastNotifyAttempt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A timestamp indicating the last attempt to deliver a notification regardless of the outcome.\nFormat: date-time',
      }),
    lastNotifyAttemptDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration of the last attempt to deliver a notification in humanized format (`1s` or `15ms`, etc).',
      }),
    lastNotifyAttemptError: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error string for the last attempt to deliver a notification. Empty if the last attempt was successful.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the integration.' }),
    sendResolved: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the integration is configured to send resolved notifications.',
      }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationStatus')

const JSONWebKeySchema = z
  .object({
    Algorithm: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key algorithm, parsed from `alg` header.' }),
    CertificateThumbprintSHA1: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'X.509 certificate thumbprint (SHA-1), parsed from `x5t` header.' }),
    CertificateThumbprintSHA256: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description: 'X.509 certificate thumbprint (SHA-256), parsed from `x5t#S256` header.',
      }),
    Certificates: z
      .array(CertificateSchema)
      .exactOptional()
      .openapi({ description: 'X.509 certificate chain, parsed from `x5c` header.' }),
    CertificatesURL: URLSchema.exactOptional(),
    Key: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Key is the Go in-memory representation of this key. It must have one\nof these types:\n- ed25519.PublicKey\n- ed25519.PrivateKey\n- *ecdsa.PublicKey\n- *ecdsa.PrivateKey\n- *rsa.PublicKey\n- *rsa.PrivateKey\n- []byte (a symmetric key)\n\nWhen marshaling this JSONWebKey into JSON, the "kty" header parameter\nwill be automatically set based on the type of this field.',
      }),
    KeyID: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key identifier, parsed from `kid` header.' }),
    Use: z.string().exactOptional().openapi({ description: 'Key use, parsed from `use` header.' }),
  })
  .openapi({
    description:
      'JSONWebKey represents a public or private key in JWK format. It can be\nmarshaled into JSON and unmarshaled from JSON.',
    required: [],
  })
  .openapi('JSONWebKey')

const LibraryElementDTOMetaUserSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LibraryElementDTOMetaUser')

const LibraryElementDTOMetaSchema = z
  .object({
    connectedDashboards: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdBy: LibraryElementDTOMetaUserSchema.exactOptional(),
    folderName: z.string().exactOptional(),
    folderUid: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    updatedBy: LibraryElementDTOMetaUserSchema.exactOptional(),
  })
  .openapi({
    title: 'LibraryElementDTOMeta is the meta information for LibraryElementDTO.',
    required: [],
  })
  .openapi('LibraryElementDTOMeta')

const LibraryElementDTOSchema = z
  .object({
    description: z.string().exactOptional(),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    kind: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    meta: LibraryElementDTOMetaSchema.exactOptional(),
    model: z.any().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    schemaVersion: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ title: 'LibraryElementDTO is the frontend DTO for entities.', required: [] })
  .openapi('LibraryElementDTO')

const LibraryElementArrayResponseSchema = z
  .object({ result: z.array(LibraryElementDTOSchema).exactOptional() })
  .openapi({
    title: 'LibraryElementArrayResponse is a response struct for an array of LibraryElementDTO.',
    required: [],
  })
  .openapi('LibraryElementArrayResponse')

const LibraryElementConnectionDTOSchema = z
  .object({
    connectionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    connectionUid: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdBy: LibraryElementDTOMetaUserSchema.exactOptional(),
    elementId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: this field will be removed in the future',
        'x-deprecated': true,
      }),
    kind: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    title: 'LibraryElementConnectionDTO is the frontend DTO for element connections.',
    required: [],
  })
  .openapi('LibraryElementConnectionDTO')

const LibraryElementConnectionsResponseSchema = z
  .object({ result: z.array(LibraryElementConnectionDTOSchema).exactOptional() })
  .openapi({
    title:
      'LibraryElementConnectionsResponse is a response struct for an array of LibraryElementConnectionDTO.',
    required: [],
  })
  .openapi('LibraryElementConnectionsResponse')

const LibraryElementResponseSchema = z
  .object({ result: LibraryElementDTOSchema.exactOptional() })
  .openapi({
    title: 'LibraryElementResponse is a response struct for LibraryElementDTO.',
    required: [],
  })
  .openapi('LibraryElementResponse')

const LibraryElementSearchResultSchema = z
  .object({
    elements: z.array(LibraryElementDTOSchema).exactOptional(),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ title: 'LibraryElementSearchResult is the search result for entities.', required: [] })
  .openapi('LibraryElementSearchResult')

const LibraryElementSearchResponseSchema = z
  .object({ result: LibraryElementSearchResultSchema.exactOptional() })
  .openapi({
    title: 'LibraryElementSearchResponse is a response struct for LibraryElementSearchResult.',
    required: [],
  })
  .openapi('LibraryElementSearchResponse')

const MassDeleteAnnotationsCmdSchema = z
  .object({
    annotationId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboardUID: z.string().exactOptional(),
    panelId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('MassDeleteAnnotationsCmd')

const MetricRequestSchema = z
  .object({
    debug: z.boolean().exactOptional(),
    from: z
      .string()
      .openapi({
        description:
          'From Start time in epoch timestamps in milliseconds or relative using Grafana time units.',
        example: 'now-1h',
      }),
    queries: z
      .array(JsonSchema)
      .openapi({
        description:
          'queries.refId – Specifies an identifier of the query. Is optional and default to “A”.\nqueries.datasourceId – Specifies the data source to be queried. Each query in the request must have an unique datasourceId.\nqueries.maxDataPoints - Species maximum amount of data points that dashboard panel can render. Is optional and default to 100.\nqueries.intervalMs - Specifies the time interval in milliseconds of time series. Is optional and defaults to 1000.',
        example: [
          {
            datasource: { uid: 'PD8C576611E62080A' },
            format: 'table',
            intervalMs: 86400000,
            maxDataPoints: 1092,
            rawSql: 'SELECT 1 as valueOne, 2 as valueTwo',
            refId: 'A',
          },
        ],
      }),
    to: z
      .string()
      .openapi({
        description:
          'To End time in epoch timestamps in milliseconds or relative using Grafana time units.',
        example: 'now',
      }),
  })
  .openapi({ required: ['from', 'to', 'queries'] })
  .openapi('MetricRequest')

const MigrateDataResponseDTOSchema = z
  .object({
    items: z.array(MigrateDataResponseItemDTOSchema).exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MigrateDataResponseDTO')

const MoveFolderCommandSchema = z
  .object({ parentUid: z.string().exactOptional() })
  .openapi({
    description:
      'MoveFolderCommand captures the information required by the folder service\nto move a folder.',
    required: [],
  })
  .openapi('MoveFolderCommand')

const MultiStatusSchema = z.object({}).openapi('MultiStatus')

const MuteTimingsSchema = z.array(MuteTimeIntervalSchema).openapi('MuteTimings')

const NamespaceConfigResponseSchema = z
  .record(z.string(), z.array(GettableRuleGroupConfigSchema))
  .openapi('NamespaceConfigResponse')

const NavbarPreferenceSchema = z
  .object({ bookmarkUrls: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('NavbarPreference')

const NewApiKeyResultSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    key: z
      .string()
      .exactOptional()
      .openapi({ example: 'glsa_iNValIdinValiDinvalidinvalidinva_5b582697' }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
  })
  .openapi({ required: [] })
  .openapi('NewApiKeyResult')

const NotFoundSchema = z.object({}).openapi('NotFound')

const NotificationTemplateSchema = z
  .object({
    name: z.string().exactOptional(),
    provenance: ProvenanceSchema.exactOptional(),
    template: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationTemplate')

const NotificationTemplateContentSchema = z
  .object({ template: z.string().exactOptional(), version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NotificationTemplateContent')

const NotificationTemplatesSchema = z
  .array(NotificationTemplateSchema)
  .openapi('NotificationTemplates')

const NotifierConfigSchema = z
  .object({ send_resolved: z.boolean().exactOptional() })
  .openapi({
    title: 'NotifierConfig contains base options common across all notifier configurations.',
    required: [],
  })
  .openapi('NotifierConfig')

const OrgDTOSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrgDTO')

const OrgDetailsDTOSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrgDetailsDTO')

const OrgUserDTOSchema = z
  .object({
    accessControl: z.record(z.string(), z.boolean()).exactOptional(),
    authLabels: z.array(z.string()).exactOptional(),
    avatarUrl: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    isDisabled: z.boolean().exactOptional(),
    isExternallySynced: z.boolean().exactOptional(),
    isProvisioned: z.boolean().exactOptional(),
    lastSeenAt: z.iso.datetime({ offset: true }).exactOptional(),
    lastSeenAtAge: z.string().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    role: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('OrgUserDTO')

const PatchAnnotationsCmdSchema = z
  .object({
    data: JsonSchema.exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tags: z.array(z.string()).exactOptional(),
    text: z.string().exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timeEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PatchAnnotationsCmd')

const PatchLibraryElementCommandSchema = z
  .object({
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'ID of the folder where the library element is stored.\n\nDeprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'UID of the folder where the library element is stored.' }),
    kind: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.literal(1n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [1],
        description:
          'Kind of element to create, Use 1 for library panels or 2 for c.\nDescription:\n- 1 - library panels',
      }),
    model: z
      .any()
      .exactOptional()
      .openapi({ description: 'The JSON model for the library element.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the library element.' }),
    uid: z.string().exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Version of the library element you are updating.',
      }),
  })
  .openapi({
    description: 'PatchLibraryElementCommand is the command for patching a LibraryElement',
    required: [],
  })
  .openapi('PatchLibraryElementCommand')

const QueryHistoryPreferenceSchema = z
  .object({ homeTab: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryHistoryPreference')

const PatchPrefsCmdSchema = z
  .object({
    homeDashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'The numerical :id of a favorited dashboard\nDeprecated: Use HomeDashboardUID instead',
      }),
    homeDashboardUID: z.string().exactOptional(),
    language: z.string().exactOptional(),
    navbar: NavbarPreferenceSchema.exactOptional(),
    queryHistory: QueryHistoryPreferenceSchema.exactOptional(),
    theme: z.enum(['light', 'dark']).exactOptional(),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Any IANA timezone string (e.g. America/New_York), 'utc', 'browser', or empty string",
      }),
    weekStart: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatchPrefsCmd')

const PatchQueryCommentInQueryHistoryCommandSchema = z
  .object({ comment: z.string().exactOptional().openapi({ description: 'Updated comment' }) })
  .openapi({
    description:
      'PatchQueryCommentInQueryHistoryCommand is the command for updating comment for query in query history',
    required: [],
  })
  .openapi('PatchQueryCommentInQueryHistoryCommand')

const PermissionDeniedSchema = z.object({}).openapi('PermissionDenied')

const PlaylistSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    interval: z.string().exactOptional(),
    name: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ description: 'Playlist model', required: [] })
  .openapi('Playlist')

const PlaylistItemDTOSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title is an unused property -- it will be removed in the future' }),
    type: z.string().exactOptional().openapi({ description: 'Type of the item.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value depends on type and describes the playlist item.\n\n- dashboard_by_id: The value is an internal numerical identifier set by Grafana. This\nis not portable as the numerical identifier is non-deterministic between different instances.\nWill be replaced by dashboard_by_uid in the future. (deprecated)\n- dashboard_by_tag: The value is a tag which is set on any number of dashboards. All\ndashboards behind the tag will be added to the playlist.\n- dashboard_by_uid: The value is the dashboard UID',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistItemDTO')

const PlaylistDTOSchema = z
  .object({
    interval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interval sets the time between switching views in a playlist.' }),
    items: z
      .array(PlaylistItemDTOSchema)
      .exactOptional()
      .openapi({ description: 'The ordered list of items that the playlist will iterate over.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the playlist.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique playlist identifier. Generated on creation, either by the\ncreator of the playlist of by the application.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistDTO')

const PlaylistDashboardSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    order: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uri: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlaylistDashboard')

const PlaylistDashboardsSliceSchema = z
  .array(PlaylistDashboardSchema)
  .openapi('PlaylistDashboardsSlice')

const PlaylistsSchema = z.array(PlaylistSchema).openapi('Playlists')

const PostAnnotationsCmdSchema = z
  .object({
    dashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboardUID: z.string().exactOptional(),
    data: JsonSchema.exactOptional(),
    panelId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tags: z.array(z.string()).exactOptional(),
    text: z.string(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timeEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['text'] })
  .openapi('PostAnnotationsCmd')

const PostGraphiteAnnotationsCmdSchema = z
  .object({
    data: z.string().exactOptional(),
    tags: z.any().exactOptional(),
    what: z.string().exactOptional(),
    when: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PostGraphiteAnnotationsCmd')

const PostableGrafanaRuleSchema = z
  .object({
    condition: z.string().exactOptional(),
    data: z.array(AlertQuerySchema).exactOptional(),
    exec_err_state: z.enum(['OK', 'Alerting', 'Error']).exactOptional(),
    is_paused: z.boolean().exactOptional(),
    metadata: AlertRuleMetadataSchema.exactOptional(),
    missing_series_evals_to_resolve: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Number of consecutive evaluation intervals with no data for a dimension must pass\nbefore the alert state is considered stale and automatically resolved.\nIf set to 0, the value is reset to the default.',
        example: 3,
      }),
    no_data_state: z.enum(['Alerting', 'NoData', 'OK']).exactOptional(),
    notification_settings: AlertRuleNotificationSettingsSchema.exactOptional(),
    record: RecordSchema.exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostableGrafanaRule')

const PostableExtendedRuleNodeSchema = z
  .object({
    alert: z.string().exactOptional(),
    annotations: z.record(z.string(), z.string()).exactOptional(),
    expr: z.string().exactOptional(),
    for: z.string().exactOptional(),
    grafana_alert: PostableGrafanaRuleSchema.exactOptional(),
    keep_firing_for: z.string().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    record: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostableExtendedRuleNode')

const PostableExtendedRuleNodeExtendedSchema = z
  .object({
    folderTitle: z.string().exactOptional().openapi({ example: 'project_x' }),
    folderUid: z.string().exactOptional().openapi({ example: 'okrd3I0Vz' }),
    rule: PostableExtendedRuleNodeSchema,
    ruleGroup: z.string().exactOptional().openapi({ example: 'eval_group_1' }),
  })
  .openapi({ required: ['rule'] })
  .openapi('PostableExtendedRuleNodeExtended')

const PostableGrafanaReceiversSchema = z
  .object({
    grafana_managed_receiver_configs: z.array(PostableGrafanaReceiverSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostableGrafanaReceivers')

const PostableNGalertConfigSchema = z
  .object({
    alertmanagersChoice: z.enum(['all', 'internal', 'external']).exactOptional(),
    external_alertmanager_uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ExternalAlertmanagerUID is the UID of the Mimir/Cortex Alertmanager datasource to sync\nconfiguration from. Empty string disables sync for this org.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PostableNGalertConfig')

const PostableRuleGroupConfigSchema = z
  .object({
    align_evaluation_time_on_interval: z.boolean().exactOptional(),
    evaluation_delay: z.string().exactOptional(),
    interval: DurationSchema.exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    query_offset: z.string().exactOptional(),
    remote_write: z.array(RemoteWriteConfigSchema).exactOptional(),
    rules: z.array(PostableExtendedRuleNodeSchema).exactOptional(),
    source_tenants: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostableRuleGroupConfig')

const PreferencesNavbarPreferenceSchema = z
  .object({ bookmarkUrls: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('PreferencesNavbarPreference')

const PreferencesQueryHistoryPreferenceSchema = z
  .object({
    homeTab: z
      .string()
      .exactOptional()
      .openapi({ description: "one of: '' | 'query' | 'starred';" }),
  })
  .openapi({ required: [] })
  .openapi('PreferencesQueryHistoryPreference')

const PreferencesSpecSchema = z
  .object({
    homeDashboardUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UID for the home dashboard. The reserved value "global-home" is not a\ndashboard UID: it selects the instance default home (home_page, the\nconfigured home dashboard file, or the built-in home page) instead of\nfalling through to lower-precedence preferences.',
      }),
    homeURL: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Explicit home URL (NOTE: this can only be modified in the system settings)',
      }),
    language: z.string().exactOptional().openapi({ description: 'Selected language' }),
    navbar: PreferencesNavbarPreferenceSchema.exactOptional(),
    queryHistory: PreferencesQueryHistoryPreferenceSchema.exactOptional(),
    theme: z.string().exactOptional().openapi({ description: 'user interface theme' }),
    timezone: z.string().exactOptional().openapi({ description: 'The timezone selection' }),
    weekStart: z
      .string()
      .exactOptional()
      .openapi({ description: 'day of the week (sunday, monday, etc)' }),
  })
  .openapi({ required: [] })
  .openapi('PreferencesSpec')

const PrometheusRuleSchema = z
  .object({
    alert: z.string().exactOptional(),
    annotations: z.record(z.string(), z.string()).exactOptional(),
    expr: z.string().exactOptional(),
    for: z.string().exactOptional(),
    keep_firing_for: z.string().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    record: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrometheusRule')

const PrometheusRuleGroupSchema = z
  .object({
    interval: DurationSchema.exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    query_offset: z.string().exactOptional(),
    rules: z.array(PrometheusRuleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrometheusRuleGroup')

const PrometheusNamespaceSchema = z
  .object({
    Body: z
      .record(z.string(), z.array(PrometheusRuleGroupSchema))
      .exactOptional()
      .openapi({ description: 'in: body' }),
  })
  .openapi({ required: [] })
  .openapi('PrometheusNamespace')

const PrometheusRemoteWriteTargetJSONSchema = z
  .object({
    data_source_uid: z.string().exactOptional(),
    id: z.string().exactOptional(),
    remote_write_path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PrometheusRemoteWriteTargetJSON')

const ProvisionedAlertRulesSchema = z
  .array(ProvisionedAlertRuleSchema)
  .openapi('ProvisionedAlertRules')

const ProxyConfigSchema = z
  .object({
    no_proxy: z
      .string()
      .exactOptional()
      .openapi({ description: 'NoProxy contains addresses that should not use a proxy.' }),
    proxy_connect_header: ProxyHeaderSchema.exactOptional(),
    proxy_from_environment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'ProxyFromEnvironment makes use of net/http ProxyFromEnvironment function\nto determine proxies.',
      }),
    proxy_url: URLSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProxyConfig')

const ShareTypeSchema = z.string().openapi('ShareType')

const PublicDashboardSchema = z
  .object({
    accessToken: z.string().exactOptional(),
    annotationsEnabled: z.boolean().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    createdBy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    dashboardUid: z.string().exactOptional(),
    isEnabled: z.boolean().exactOptional(),
    recipients: z.array(EmailDTOSchema).exactOptional(),
    share: ShareTypeSchema.exactOptional(),
    timeSelectionEnabled: z.boolean().exactOptional(),
    uid: z.string().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedBy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PublicDashboard')

const PublicDashboardDTOSchema = z
  .object({
    accessToken: z.string().exactOptional(),
    annotationsEnabled: z.boolean().exactOptional(),
    isEnabled: z.boolean().exactOptional(),
    share: ShareTypeSchema.exactOptional(),
    timeSelectionEnabled: z.boolean().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicDashboardDTO')

const PublicDashboardListResponseSchema = z
  .object({
    accessToken: z.string().exactOptional(),
    dashboardUid: z.string().exactOptional(),
    isEnabled: z.boolean().exactOptional(),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicDashboardListResponse')

const PublicDashboardListResponseWithPaginationSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    publicDashboards: z.array(PublicDashboardListResponseSchema).exactOptional(),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PublicDashboardListResponseWithPagination')

const ResponsesSchema = z
  .record(z.string(), DataResponseSchema)
  .openapi({
    description:
      "The QueryData method the QueryDataHandler method will set the RefId\nproperty on the DataResponses' frames based on these RefIDs.",
    title: 'Responses is a map of RefIDs (Unique Query ID) to DataResponses.',
  })
  .openapi('Responses')

const QueryDataResponseSchema = z
  .object({ results: ResponsesSchema.exactOptional() })
  .openapi({
    description: 'It is the return type of a QueryData call.',
    title: 'QueryDataResponse contains the results from a QueryDataRequest.',
    required: [],
  })
  .openapi('QueryDataResponse')

const QueryHistoryDTOSchema = z
  .object({
    comment: z.string().exactOptional(),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    createdBy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    datasourceUid: z.string().exactOptional(),
    queries: JsonSchema.exactOptional(),
    starred: z.boolean().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryHistoryDTO')

const QueryHistoryDeleteQueryResponseSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string().exactOptional(),
  })
  .openapi({
    description:
      'QueryHistoryDeleteQueryResponse is the response struct for deleting a query from query history',
    required: [],
  })
  .openapi('QueryHistoryDeleteQueryResponse')

const QueryHistoryResponseSchema = z
  .object({ result: QueryHistoryDTOSchema.exactOptional() })
  .openapi({
    description: 'QueryHistoryResponse is a response struct for QueryHistoryDTO',
    required: [],
  })
  .openapi('QueryHistoryResponse')

const QueryHistorySearchResultSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    queryHistory: z.array(QueryHistoryDTOSchema).exactOptional(),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('QueryHistorySearchResult')

const QueryHistorySearchResponseSchema = z
  .object({ result: QueryHistorySearchResultSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryHistorySearchResponse')

const QuotaDTOSchema = z
  .object({
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    org_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    target: z.string().exactOptional(),
    used: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    user_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('QuotaDTO')

const ReceiverSchema = z
  .object({
    discord_configs: z.array(DiscordConfigSchema).exactOptional(),
    email_configs: z.array(EmailConfigSchema).exactOptional(),
    jira_configs: z.array(JiraConfigSchema).exactOptional(),
    msteams_configs: z.array(MSTeamsConfigSchema).exactOptional(),
    msteamsv2_configs: z.array(MSTeamsV2ConfigSchema).exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for this receiver.' }),
    opsgenie_configs: z.array(OpsGenieConfigSchema).exactOptional(),
    pagerduty_configs: z.array(PagerdutyConfigSchema).exactOptional(),
    pushover_configs: z.array(PushoverConfigSchema).exactOptional(),
    slack_configs: z.array(SlackConfigSchema).exactOptional(),
    sns_configs: z.array(SNSConfigSchema).exactOptional(),
    telegram_configs: z.array(TelegramConfigSchema).exactOptional(),
    victorops_configs: z.array(VictorOpsConfigSchema).exactOptional(),
    webex_configs: z.array(WebexConfigSchema).exactOptional(),
    webhook_configs: z.array(WebhookConfigSchema).exactOptional(),
    wechat_configs: z.array(WechatConfigSchema).exactOptional(),
  })
  .openapi({
    title: 'Receiver configuration provides configuration on how to contact a receiver.',
    required: [],
  })
  .openapi('Receiver')

const ReceiverStatusSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the receiver is used in a route or not.' }),
    integrations: z
      .array(IntegrationStatusSchema)
      .exactOptional()
      .openapi({ description: 'Integrations configured for this receiver.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the receiver.' }),
  })
  .openapi({ required: [] })
  .openapi('ReceiverStatus')

const RecordingRuleJSONSchema = z
  .object({
    active: z.boolean().exactOptional(),
    count: z.boolean().exactOptional(),
    description: z.string().exactOptional(),
    dest_data_source_uid: z.string().exactOptional(),
    id: z.string().exactOptional(),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    prom_name: z.string().exactOptional(),
    queries: z.array(z.record(z.string(), z.any())).exactOptional(),
    range: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    target_ref_id: z.string().exactOptional(),
  })
  .openapi({
    description: 'RecordingRuleJSON is the external representation of a recording rule',
    required: [],
  })
  .openapi('RecordingRuleJSON')

const ReportSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    dashboards: z.array(ReportDashboardSchema).exactOptional(),
    enableCsv: z.boolean().exactOptional(),
    enableDashboardUrl: z.boolean().exactOptional(),
    formats: z.array(TypeSchema).exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string().exactOptional(),
    name: z.string().exactOptional(),
    options: ReportOptionsSchema.exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recipients: z.string().exactOptional(),
    replyTo: z.string().exactOptional(),
    scaleFactor: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    schedule: ReportScheduleSchema.exactOptional(),
    state: StateSchema.exactOptional(),
    subject: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    updated: z.iso.datetime({ offset: true }).exactOptional(),
    urls: z.array(ReportURLItemSchema).exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Report')

const ReportBrandingOptionsSchema = z
  .object({
    emailFooterLink: z.string().exactOptional(),
    emailFooterMode: z.string().exactOptional(),
    emailFooterText: z.string().exactOptional(),
    emailLogoUrl: z.string().exactOptional(),
    reportLogoUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportBrandingOptions')

const ReportEmailSchema = z
  .object({
    emails: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comma-separated list of emails to which to send the report to.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numeric ID of the report. Can send either ID or UID. If both are present, UID takes precedence.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UID of the report. Can send either ID or UID. If both are present, UID takes precedence.',
      }),
    useEmailsFromReport: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Send the report to the emails specified in the report. Required if emails is not present.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReportEmail')

const ReportSettingsSchema = z
  .object({
    branding: ReportBrandingOptionsSchema.exactOptional(),
    embeddedImageTheme: z.string().exactOptional(),
    footerFontFamily: z.string().exactOptional(),
    footerItems: z.array(FooterItemSchema).exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    pdfDashboardTitleEnabled: z.boolean().exactOptional(),
    pdfHeaderEnabled: z.boolean().exactOptional(),
    pdfTheme: z.string().exactOptional(),
    pdfTimeRangeEnabled: z.boolean().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('ReportSettings')

const ResourceDependencyDTOSchema = z
  .object({
    dependencies: z
      .array(
        z.enum([
          'DASHBOARD',
          'DATASOURCE',
          'FOLDER',
          'LIBRARY_ELEMENT',
          'ALERT_RULE',
          'ALERT_RULE_GROUP',
          'CONTACT_POINT',
          'NOTIFICATION_POLICY',
          'NOTIFICATION_TEMPLATE',
          'MUTE_TIMING',
          'PLUGIN',
        ]),
      )
      .exactOptional(),
    resourceType: z
      .enum([
        'DASHBOARD',
        'DATASOURCE',
        'FOLDER',
        'LIBRARY_ELEMENT',
        'ALERT_RULE',
        'ALERT_RULE_GROUP',
        'CONTACT_POINT',
        'NOTIFICATION_POLICY',
        'NOTIFICATION_TEMPLATE',
        'MUTE_TIMING',
        'PLUGIN',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceDependencyDTO')

const ResourceDependenciesResponseDTOSchema = z
  .object({ resourceDependencies: z.array(ResourceDependencyDTOSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ResourceDependenciesResponseDTO')

const RestoreDashboardVersionCommandSchema = z
  .object({
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('RestoreDashboardVersionCommand')

const RestoreDeletedDashboardCommandSchema = z
  .object({ folderUid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RestoreDeletedDashboardCommand')

const RevokeAuthTokenCmdSchema = z
  .object({
    authTokenId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('RevokeAuthTokenCmd')

const RoleAssignmentsDTOSchema = z
  .object({
    role_uid: z.string().exactOptional(),
    service_accounts: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    teams: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    users: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoleAssignmentsDTO')

const RoleDTOSchema = z
  .object({
    created: z.iso.datetime({ offset: true }),
    delegatable: z.boolean().exactOptional(),
    description: z.string(),
    displayName: z.string(),
    global: z.boolean().exactOptional(),
    group: z.string(),
    hidden: z.boolean().exactOptional(),
    mapped: z.boolean().exactOptional(),
    name: z.string(),
    permissions: z.array(PermissionSchema).exactOptional(),
    uid: z.string(),
    updated: z.iso.datetime({ offset: true }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: [
      'version',
      'uid',
      'name',
      'displayName',
      'description',
      'group',
      'updated',
      'created',
    ],
  })
  .openapi('RoleDTO')

const RolesSearchQuerySchema = z
  .object({
    includeHidden: z.boolean().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    userIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RolesSearchQuery')

const RuleSchema = z
  .object({
    evaluationTime: z.float64().exactOptional(),
    folderUid: z.string().exactOptional(),
    health: z.string(),
    isPaused: z.boolean().exactOptional(),
    labels: LabelsSchema.exactOptional(),
    lastError: z.string().exactOptional(),
    lastEvaluation: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string(),
    notificationSettings: AlertRuleNotificationSettingsSchema.exactOptional(),
    provenance: ProvenanceSchema.exactOptional(),
    query: z.string(),
    type: z.string(),
    uid: z.string().exactOptional(),
  })
  .openapi({ description: 'adapted from cortex', required: ['name', 'query', 'health', 'type'] })
  .openapi('Rule')

const RuleGroupSchema = z
  .object({
    evaluationTime: z.float64().exactOptional(),
    file: z.string(),
    folderUid: z.string(),
    interval: z.float64(),
    lastEvaluation: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string(),
    rules: z
      .array(AlertingRuleSchema)
      .openapi({
        description:
          'In order to preserve rule ordering, while exposing type (alerting or recording)\nspecific properties, both alerting and recording rules are exposed in the\nsame array.',
      }),
    totals: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['name', 'file', 'folderUid', 'rules', 'interval'] })
  .openapi('RuleGroup')

const RuleDiscoverySchema = z
  .object({
    groupNextToken: z.string().exactOptional(),
    groups: z.array(RuleGroupSchema),
    totals: z
      .record(
        z.string(),
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['groups'] })
  .openapi('RuleDiscovery')

const RuleGroupConfigResponseSchema = z
  .object({
    align_evaluation_time_on_interval: z.boolean().exactOptional(),
    evaluation_delay: z.string().exactOptional(),
    interval: DurationSchema.exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    query_offset: z.string().exactOptional(),
    remote_write: z.array(RemoteWriteConfigSchema).exactOptional(),
    rules: z.array(GettableExtendedRuleNodeSchema).exactOptional(),
    source_tenants: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuleGroupConfigResponse')

const RuleResponseSchema = z
  .object({
    data: RuleDiscoverySchema.exactOptional(),
    error: z.string().exactOptional(),
    errorType: ErrorTypeSchema.exactOptional(),
    status: z.string(),
  })
  .openapi({ required: ['status'] })
  .openapi('RuleResponse')

const SampleSchema = z
  .object({
    DropName: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'DropName is used to indicate whether the __name__ label should be dropped\nas part of the query evaluation.',
      }),
    F: z.float64().exactOptional(),
    H: FloatHistogramSchema.exactOptional(),
    Metric: LabelsSchema.exactOptional(),
    T: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description:
      'Sample is a single sample belonging to a metric. It represents either a float\nsample or a histogram sample. If H is nil, it is a float sample. Otherwise,\nit is a histogram sample.',
    required: [],
  })
  .openapi('Sample')

const SaveDashboardCommandSchema = z
  .object({
    UpdatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    dashboard: JsonSchema.exactOptional(),
    folderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Deprecated: use FolderUID instead',
        'x-deprecated': true,
      }),
    folderUid: z.string().exactOptional(),
    isFolder: z.boolean().exactOptional(),
    message: z.string().exactOptional(),
    overwrite: z.boolean().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SaveDashboardCommand')

const SearchDeviceQueryResultSchema = z
  .object({
    devices: z.array(DeviceSearchHitDTOSchema).exactOptional(),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SearchDeviceQueryResult')

const ServiceAccountDTOSchema = z
  .object({
    accessControl: z
      .record(z.string(), z.boolean())
      .exactOptional()
      .openapi({
        example: {
          'serviceaccounts:delete': true,
          'serviceaccounts:read': true,
          'serviceaccounts:write': true,
        },
      }),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({ example: '/avatar/85ec38023d90823d3e5b43ef35646af9' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDisabled: z.boolean().exactOptional().openapi({ example: false }),
    isExternal: z.boolean().exactOptional().openapi({ example: false }),
    login: z.string().exactOptional().openapi({ example: 'sa-grafana' }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    role: z.string().exactOptional().openapi({ example: 'Viewer' }),
    tokens: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    uid: z.string().exactOptional().openapi({ example: 'fe1xejlha91xce' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceAccountDTO')

const SearchOrgServiceAccountsResultSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    serviceAccounts: z.array(ServiceAccountDTOSchema).exactOptional(),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'It can be used for pagination of the user list\nE.g. if totalCount is equal to 100 users and\nthe perpage parameter is set to 10 then there are 10 pages of users.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchOrgServiceAccountsResult')

const SearchOrgUsersQueryResultSchema = z
  .object({
    orgUsers: z.array(OrgUserDTOSchema).exactOptional(),
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SearchOrgUsersQueryResult')

const TeamGroupDTOSchema = z
  .object({
    groupId: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamUid: z.string().exactOptional(),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated: always empty; no per-entry id.', 'x-deprecated': true }),
  })
  .openapi({ required: [] })
  .openapi('TeamGroupDTO')

const SearchTeamGroupsQueryResultSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamGroups: z.array(TeamGroupDTOSchema).exactOptional(),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SearchTeamGroupsQueryResult')

const TeamPermissionTypeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('TeamPermissionType')

const TeamDTOSchema = z
  .object({
    accessControl: z.record(z.string(), z.boolean()).exactOptional(),
    avatarUrl: z.string().exactOptional(),
    email: z.string().exactOptional(),
    externalUID: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '@deprecated Use UID instead' }),
    isProvisioned: z.boolean(),
    memberCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    permission: TeamPermissionTypeSchema.exactOptional(),
    uid: z.string(),
  })
  .openapi({ required: ['id', 'uid', 'orgId', 'name', 'isProvisioned', 'memberCount'] })
  .openapi('TeamDTO')

const SearchTeamQueryResultSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teams: z.array(TeamDTOSchema).exactOptional(),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SearchTeamQueryResult')

const UserSearchHitDTOSchema = z
  .object({
    accessControl: z.record(z.string(), z.boolean()).exactOptional(),
    authLabels: z.array(z.string()).exactOptional(),
    avatarUrl: z.string().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isAdmin: z.boolean().exactOptional(),
    isDisabled: z.boolean().exactOptional(),
    isProvisioned: z.boolean().exactOptional(),
    lastSeenAt: z.iso.datetime({ offset: true }).exactOptional(),
    lastSeenAtAge: z.string().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    role: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSearchHitDTO')

const SearchUserQueryResultSchema = z
  .object({
    page: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    perPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    users: z.array(UserSearchHitDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchUserQueryResult')

const SecretURLSchema = URLSchema.openapi('SecretURL')

const ServiceAccountProfileDTOSchema = z
  .object({
    accessControl: z.record(z.string(), z.boolean()).exactOptional(),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({ example: '/avatar/8ea890a677d6a223c591a1beea6ea9d2' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-21T14:35:33Z' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 2 }),
    isDisabled: z.boolean().exactOptional().openapi({ example: false }),
    isExternal: z.boolean().exactOptional().openapi({ example: false }),
    login: z.string().exactOptional().openapi({ example: 'sa-grafana' }),
    name: z.string().exactOptional().openapi({ example: 'test' }),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    requiredBy: z.string().exactOptional().openapi({ example: 'grafana-app' }),
    role: z.string().exactOptional().openapi({ example: 'Editor' }),
    teams: z.array(z.string()).exactOptional().openapi({ example: [] }),
    tokens: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    uid: z.string().exactOptional().openapi({ example: 'fe1xejlha91xce' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-21T14:35:33Z' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceAccountProfileDTO')

const SetResourcePermissionCommandSchema = z
  .object({
    builtInRole: z.string().exactOptional(),
    permission: z.string().exactOptional(),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SetResourcePermissionCommand')

const SetRoleAssignmentsCommandSchema = z
  .object({
    service_accounts: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    teams: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    users: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetRoleAssignmentsCommand')

const SetTeamMembershipsCommandSchema = z
  .object({
    admins: z.array(z.string()).exactOptional(),
    members: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetTeamMembershipsCommand')

const SetTeamRolesCommandSchema = z
  .object({
    includeHidden: z.boolean().exactOptional(),
    roleUids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetTeamRolesCommand')

const SetUserRolesCommandSchema = z
  .object({
    global: z.boolean().exactOptional(),
    includeHidden: z.boolean().exactOptional(),
    roleUids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetUserRolesCommand')

const SettingsBagSchema = z
  .record(z.string(), z.record(z.string(), z.string()))
  .openapi('SettingsBag')

const SilenceMetadataSchema = z
  .object({
    folder_uid: z.string().exactOptional(),
    rule_title: z.string().exactOptional(),
    rule_uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SilenceMetadata')

const SmtpNotEnabledSchema = ResponseDetailsSchema.openapi('SmtpNotEnabled')

const SnapshotDTOSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    finished: z.iso.datetime({ offset: true }).exactOptional(),
    sessionUid: z.string().exactOptional(),
    status: z
      .enum([
        'INITIALIZING',
        'CREATING',
        'PENDING_UPLOAD',
        'UPLOADING',
        'PENDING_PROCESSING',
        'PROCESSING',
        'FINISHED',
        'CANCELED',
        'ERROR',
        'UNKNOWN',
      ])
      .exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ description: 'Base snapshot without results', required: [] })
  .openapi('SnapshotDTO')

const SnapshotListResponseDTOSchema = z
  .object({ snapshots: z.array(SnapshotDTOSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SnapshotListResponseDTO')

const SuccessSchema = ResponseDetailsSchema.openapi('Success')

const SuccessResponseBodySchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SuccessResponseBody')

const TeamGroupMappingSchema = z
  .object({ groupId: z.string().exactOptional() })
  .openapi({ description: '---------------------', required: [] })
  .openapi('TeamGroupMapping')

const TeamLBACRuleSchema = z
  .object({
    rules: z.array(z.string()).exactOptional(),
    teamId: z.string().exactOptional(),
    teamUid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamLBACRule')

const TeamLBACRulesSchema = z
  .object({ rules: z.array(TeamLBACRuleSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TeamLBACRules')

const TeamMemberDTOSchema = z
  .object({
    auth_module: z.string().exactOptional(),
    avatarUrl: z.string().exactOptional(),
    email: z.string().exactOptional(),
    labels: z.array(z.string()).exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    permission: TeamPermissionTypeSchema.exactOptional(),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamUID: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userUID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamMemberDTO')

const TempUserStatusSchema = z.string().openapi('TempUserStatus')

const TempUserDTOSchema = z
  .object({
    code: z.string().exactOptional(),
    createdOn: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    emailSent: z.boolean().exactOptional(),
    emailSentOn: z.iso.datetime({ offset: true }).exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    invitedByEmail: z.string().exactOptional(),
    invitedByLogin: z.string().exactOptional(),
    invitedByName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
    status: TempUserStatusSchema.exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TempUserDTO')

const TemplateKindSchema = z.string().openapi('TemplateKind')

const TestRulePayloadSchema = z
  .object({
    expr: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '(node_filesystem_avail_bytes{fstype!="",job="integrations/node_exporter"} node_filesystem_size_bytes{fstype!="",job="integrations/node_exporter"} * 100 < 5 and node_filesystem_readonly{fstype!="",job="integrations/node_exporter"} == 0)',
      }),
    grafana_condition: EvalAlertConditionCommandSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestRulePayload')

const VectorSchema = z
  .array(SampleSchema)
  .openapi({
    description:
      'Vector is basically only an alias for []Sample, but the contract is that\nin a Vector, all Samples have the same timestamp.',
  })
  .openapi('Vector')

const TestRuleResponseSchema = z
  .object({
    alerts: VectorSchema.exactOptional(),
    grafana_alert_instances: AlertInstancesResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestRuleResponse')

const LabelSetSchema = z
  .record(z.string(), z.string())
  .openapi({ description: 'LabelSet label set' })
  .openapi('LabelSet')

const PostableAlertSchema = z
  .object({
    annotations: LabelSetSchema.exactOptional(),
    endsAt: z.string().exactOptional().openapi({ description: 'ends at\nFormat: date-time' }),
    generatorURL: z.string().exactOptional().openapi({ description: 'generator URL\nFormat: uri' }),
    labels: LabelSetSchema,
    startsAt: z.string().exactOptional().openapi({ description: 'starts at\nFormat: date-time' }),
  })
  .openapi({ description: 'PostableAlert postable alert', required: ['labels'] })
  .openapi('PostableAlert')

const TestTemplatesConfigBodyParamsSchema = z
  .object({
    alerts: z
      .array(PostableAlertSchema)
      .exactOptional()
      .openapi({ description: 'Alerts to use as data when testing the template.' }),
    kind: TemplateKindSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name of the template file.' }),
    template: z.string().exactOptional().openapi({ description: 'Template string to test.' }),
  })
  .openapi({ required: [] })
  .openapi('TestTemplatesConfigBodyParams')

const TestTemplatesErrorResultSchema = z
  .object({
    kind: z
      .enum(['invalid_template', 'execution_error'])
      .exactOptional()
      .openapi({ description: 'Kind of template error that occurred.' }),
    message: z.string().exactOptional().openapi({ description: 'Error message.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the associated template for this error. Will be empty if the Kind is "invalid_template".',
      }),
  })
  .openapi({ required: [] })
  .openapi('TestTemplatesErrorResult')

const TestTemplatesResultSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the associated template definition for this result.' }),
    scope: z
      .enum(['.', '.Alerts', '.Alert'])
      .exactOptional()
      .openapi({
        description:
          'Scope that was successfully used to interpolate the template. If the root scope "." fails, more specific\nscopes will be tried, such as ".Alerts\', or ".Alert".',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interpolated value of the template.' }),
  })
  .openapi({ required: [] })
  .openapi('TestTemplatesResult')

const TestTemplatesResultsSchema = z
  .object({
    errors: z.array(TestTemplatesErrorResultSchema).exactOptional(),
    results: z.array(TestTemplatesResultSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestTemplatesResults')

const TimeIntervalTimeRangeSchema = z
  .object({ end_time: z.string().exactOptional(), start_time: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TimeIntervalTimeRange')

const TimeIntervalItemSchema = z
  .object({
    days_of_month: z.array(z.string()).exactOptional(),
    location: z.string().exactOptional(),
    months: z.array(z.string()).exactOptional(),
    times: z.array(TimeIntervalTimeRangeSchema).exactOptional(),
    weekdays: z.array(z.string()).exactOptional(),
    years: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeIntervalItem')

const TokenStatusSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('TokenStatus')

const TokenSchema = z
  .object({
    account: z.string().exactOptional(),
    anonymousRatio: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    company: z.string().exactOptional(),
    details_url: z.string().exactOptional(),
    exp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    iat: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    included_users: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    iss: z.string().exactOptional(),
    jti: z.string().exactOptional(),
    lexp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    lic_exp_warn_days: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    lid: z.string().exactOptional(),
    limit_by: z.string().exactOptional(),
    max_concurrent_user_sessions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    nbf: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    prod: z.array(z.string()).exactOptional(),
    slug: z.string().exactOptional(),
    status: TokenStatusSchema.exactOptional(),
    sub: z.string().exactOptional(),
    tok_exp_warn_days: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    trial: z.boolean().exactOptional(),
    trial_exp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    update_days: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    usage_billing: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Token')

const TokenDTOSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-23T10:31:02Z' }),
    expiration: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-23T10:31:02Z' }),
    hasExpired: z.boolean().exactOptional().openapi({ example: false }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    isRevoked: z.boolean().exactOptional().openapi({ example: false }),
    lastUsedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-23T10:31:02Z' }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
    secondsUntilExpiration: z.float64().exactOptional().openapi({ example: 0 }),
  })
  .openapi({ required: [] })
  .openapi('TokenDTO')

const TypeMetaSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
  })
  .openapi({
    description:
      'TypeMeta describes an individual object in an API response or request\nwith strings representing the type of the object and its API schema version.\nStructures that are versioned or persisted should inline TypeMeta.',
    required: [],
  })
  .openapi('TypeMeta')

const UpdateAnnotationsCmdSchema = z
  .object({
    data: JsonSchema.exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tags: z.array(z.string()).exactOptional(),
    text: z.string().exactOptional(),
    time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    timeEnd: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAnnotationsCmd')

const UpdateCorrelationCommandSchema = z
  .object({
    config: CorrelationConfigUpdateDTOSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of the correlation',
        example: 'Logs to Traces',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional label identifying the correlation', example: 'My label' }),
    type: CorrelationTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'UpdateCorrelationCommand is the command for updating a correlation',
    required: [],
  })
  .openapi('UpdateCorrelationCommand')

const UpdateCorrelationResponseBodySchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'Correlation updated' }),
    result: CorrelationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCorrelationResponseBody')

const UpdateDashboardACLCommandSchema = z
  .object({ items: z.array(DashboardACLUpdateItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateDashboardACLCommand')

const UpdateDataSourceCommandSchema = z
  .object({
    access: DsAccessSchema.exactOptional(),
    basicAuth: z.boolean().exactOptional(),
    basicAuthUser: z.string().exactOptional(),
    database: z.string().exactOptional(),
    isDefault: z.boolean().exactOptional(),
    jsonData: JsonSchema.exactOptional(),
    name: z.string().exactOptional(),
    secureJsonData: z.record(z.string(), z.string()).exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    url: z.string().exactOptional(),
    user: z.string().exactOptional(),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The previous version -- used for optimistic locking',
      }),
    withCredentials: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Also acts as api DTO', required: [] })
  .openapi('UpdateDataSourceCommand')

const UpdateFolderCommandSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "NewDescription it's an optional parameter used for overriding the existing folder description",
      }),
    overwrite: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Overwrite only used by the legacy folder implementation' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "NewTitle it's an optional parameter used for overriding the existing folder title",
      }),
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Version only used by the legacy folder implementation',
      }),
  })
  .openapi({
    description:
      "UpdateFolderCommand captures the information required by the folder service\nto update a folder. Use Move to update a folder's parent folder.",
    required: [],
  })
  .openapi('UpdateFolderCommand')

const UpdateNamespaceRulesRequestSchema = z
  .object({ is_paused: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateNamespaceRulesRequest')

const UpdateNamespaceRulesResponseSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateNamespaceRulesResponse')

const UpdateOrgAddressFormSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    state: z.string().exactOptional(),
    zipcode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateOrgAddressForm')

const UpdateOrgFormSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateOrgForm')

const UpdateOrgUserCommandSchema = z
  .object({ role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateOrgUserCommand')

const UpdatePlaylistCommandSchema = z
  .object({
    interval: z.string().exactOptional(),
    items: z.array(PlaylistItemSchema).exactOptional(),
    name: z.string().exactOptional(),
    uid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePlaylistCommand')

const UpdatePrefsCmdSchema = z
  .object({
    homeDashboardId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'The numerical :id of a favorited dashboard\nDeprecated: Use HomeDashboardUID instead',
      }),
    homeDashboardUID: z.string().exactOptional(),
    language: z.string().exactOptional(),
    navbar: NavbarPreferenceSchema.exactOptional(),
    queryHistory: QueryHistoryPreferenceSchema.exactOptional(),
    theme: z.enum(['light', 'dark', 'system']).exactOptional(),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Any IANA timezone string (e.g. America/New_York), 'utc', 'browser', or empty string",
      }),
    weekStart: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdatePrefsCmd')

const UpdateQuotaCmdSchema = z
  .object({
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    target: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateQuotaCmd')

const UpdateRoleCommandSchema = z
  .object({
    description: z.string(),
    displayName: z.string(),
    global: z.boolean().exactOptional(),
    group: z.string(),
    hidden: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    permissions: z.array(PermissionSchema).exactOptional(),
  })
  .openapi({ required: ['displayName', 'description', 'group'] })
  .openapi('UpdateRoleCommand')

const UpdateRuleGroupResponseSchema = z
  .object({
    created: z.array(z.string()).exactOptional(),
    deleted: z.array(z.string()).exactOptional(),
    message: z.string().exactOptional(),
    updated: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRuleGroupResponse')

const UpdateServiceAccountFormSchema = z
  .object({
    isDisabled: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
    serviceAccountId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateServiceAccountForm')

const UpdateTeamCommandSchema = z
  .object({ email: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateTeamCommand')

const UpdateTeamLBACCommandSchema = z
  .object({ rules: z.array(TeamLBACRuleSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateTeamLBACCommand')

const UpdateTeamMemberCommandSchema = z
  .object({ permission: TeamPermissionTypeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateTeamMemberCommand')

const UpdateUserCommandSchema = z
  .object({
    email: z.string().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    theme: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserCommand')

const UserLookupDTOSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    login: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('UserLookupDTO')

const UserOrgDTOSchema = z
  .object({
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    role: z.enum(['None', 'Viewer', 'Editor', 'Admin']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserOrgDTO')

const UserProfileDTOSchema = z
  .object({
    accessControl: z.record(z.string(), z.boolean()).exactOptional(),
    authLabels: z.array(z.string()).exactOptional(),
    avatarUrl: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDisabled: z.boolean().exactOptional(),
    isExternal: z.boolean().exactOptional(),
    isExternallySynced: z.boolean().exactOptional(),
    isGrafanaAdmin: z.boolean().exactOptional(),
    isGrafanaAdminExternallySynced: z.boolean().exactOptional(),
    isProvisioned: z.boolean().exactOptional(),
    login: z.string().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    theme: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserProfileDTO')

const UserTokenSchema = z
  .object({
    AuthToken: z.string().exactOptional(),
    AuthTokenSeen: z.boolean().exactOptional(),
    ClientIp: z.string().exactOptional(),
    CreatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ExternalSessionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    PrevAuthToken: z.string().exactOptional(),
    RevokedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    RotatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    SeenAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    UnhashedToken: z.string().exactOptional(),
    UpdatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    UserAgent: z.string().exactOptional(),
    UserId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'UserToken represents a user token', required: [] })
  .openapi('UserToken')

const UserinfoSchema = z
  .object({})
  .openapi({
    description:
      'The Userinfo type is an immutable encapsulation of username and\npassword details for a [URL]. An existing Userinfo value is guaranteed\nto have a username set (potentially empty, as allowed by RFC 2396),\nand optionally a password.',
  })
  .openapi('Userinfo')

const ValidationErrorSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'error message' }) })
  .openapi({ required: [] })
  .openapi('ValidationError')

const Alert2Schema = z
  .object({
    generatorURL: z.string().exactOptional().openapi({ description: 'generator URL\nFormat: uri' }),
    labels: LabelSetSchema,
  })
  .openapi({ description: 'Alert alert', required: ['labels'] })
  .openapi('Alert2')

const Receiver2Schema = z
  .object({ name: z.string().openapi({ description: 'name' }) })
  .openapi({ description: 'Receiver receiver', required: ['name'] })
  .openapi('Receiver2')

const AlertStatusSchema = z
  .object({
    inhibitedBy: z.array(z.string()).openapi({ description: 'inhibited by' }),
    silencedBy: z.array(z.string()).openapi({ description: 'silenced by' }),
    state: z.literal('[unprocessed active suppressed]').openapi({ description: 'state' }),
  })
  .openapi({
    description: 'AlertStatus alert status',
    required: ['inhibitedBy', 'silencedBy', 'state'],
  })
  .openapi('AlertStatus')

const GettableAlertSchema = z
  .object({
    annotations: LabelSetSchema,
    endsAt: z.string().openapi({ description: 'ends at' }),
    fingerprint: z.string().openapi({ description: 'fingerprint' }),
    generatorURL: z.string().exactOptional().openapi({ description: 'generator URL\nFormat: uri' }),
    labels: LabelSetSchema,
    receivers: z.array(Receiver2Schema).openapi({ description: 'receivers' }),
    startsAt: z.string().openapi({ description: 'starts at' }),
    status: AlertStatusSchema,
    updatedAt: z.string().openapi({ description: 'updated at' }),
  })
  .openapi({
    description: 'GettableAlert gettable alert',
    required: [
      'labels',
      'annotations',
      'endsAt',
      'fingerprint',
      'receivers',
      'startsAt',
      'status',
      'updatedAt',
    ],
  })
  .openapi('GettableAlert')

const AlertGroupSchema = z
  .object({
    alerts: z.array(GettableAlertSchema).openapi({ description: 'alerts' }),
    labels: LabelSetSchema,
    receiver: Receiver2Schema,
  })
  .openapi({ description: 'AlertGroup alert group', required: ['alerts', 'labels', 'receiver'] })
  .openapi('AlertGroup')

const AlertGroupsSchema = z
  .array(AlertGroupSchema)
  .openapi({ description: 'AlertGroups alert groups' })
  .openapi('AlertGroups')

const AlertmanagerConfigSchema = z
  .object({ original: z.string().openapi({ description: 'original' }) })
  .openapi({ description: 'AlertmanagerConfig alertmanager config', required: ['original'] })
  .openapi('AlertmanagerConfig')

const AlertmanagerStatusSchema = z
  .object({
    cluster: ClusterStatusSchema,
    config: AlertmanagerConfigSchema,
    uptime: z.string().openapi({ description: 'uptime' }),
    versionInfo: VersionInfoSchema,
  })
  .openapi({
    description: 'AlertmanagerStatus alertmanager status',
    required: ['cluster', 'config', 'uptime', 'versionInfo'],
  })
  .openapi('AlertmanagerStatus')

const DeviceDTOSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    clientIp: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    deviceId: z.string().exactOptional(),
    lastSeenAt: z.string().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    userAgent: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceDTO')

const GettableAlertsSchema = z
  .array(GettableAlertSchema)
  .openapi({ description: 'GettableAlerts gettable alerts' })
  .openapi('GettableAlerts')

const Matcher2Schema = z
  .object({
    isEqual: z.boolean().exactOptional().openapi({ description: 'is equal' }),
    isRegex: z.boolean().openapi({ description: 'is regex' }),
    name: z.string().openapi({ description: 'name' }),
    value: z.string().openapi({ description: 'value' }),
  })
  .openapi({ description: 'Matcher matcher', required: ['isRegex', 'name', 'value'] })
  .openapi('Matcher2')

const Matchers2Schema = z
  .array(Matcher2Schema)
  .openapi({ description: 'Matchers matchers' })
  .openapi('Matchers2')

const SilenceStatusSchema = z
  .object({ state: z.literal('[expired active pending]').openapi({ description: 'state' }) })
  .openapi({ description: 'SilenceStatus silence status', required: ['state'] })
  .openapi('SilenceStatus')

const GettableGrafanaSilenceSchema = z
  .object({
    accessControl: z
      .record(z.string(), z.boolean())
      .exactOptional()
      .openapi({ example: { create: false, read: true, write: false } }),
    comment: z.string().openapi({ description: 'comment' }),
    createdBy: z.string().openapi({ description: 'created by' }),
    endsAt: z.string().openapi({ description: 'ends at' }),
    id: z.string().openapi({ description: 'id' }),
    matchers: Matchers2Schema,
    metadata: SilenceMetadataSchema.exactOptional(),
    startsAt: z.string().openapi({ description: 'starts at' }),
    status: SilenceStatusSchema,
    updatedAt: z.string().openapi({ description: 'updated at' }),
  })
  .openapi({
    required: [
      'comment',
      'createdBy',
      'endsAt',
      'matchers',
      'startsAt',
      'id',
      'status',
      'updatedAt',
    ],
  })
  .openapi('GettableGrafanaSilence')

const GettableGrafanaSilencesSchema = z
  .array(GettableGrafanaSilenceSchema)
  .openapi('GettableGrafanaSilences')

const GettableSilenceSchema = z
  .object({
    comment: z.string().openapi({ description: 'comment' }),
    createdBy: z.string().openapi({ description: 'created by' }),
    endsAt: z.string().openapi({ description: 'ends at' }),
    id: z.string().openapi({ description: 'id' }),
    matchers: Matchers2Schema,
    startsAt: z.string().openapi({ description: 'starts at' }),
    status: SilenceStatusSchema,
    updatedAt: z.string().openapi({ description: 'updated at' }),
  })
  .openapi({
    description: 'GettableSilence gettable silence',
    required: [
      'comment',
      'createdBy',
      'endsAt',
      'matchers',
      'startsAt',
      'id',
      'status',
      'updatedAt',
    ],
  })
  .openapi('GettableSilence')

const GettableSilencesSchema = z
  .array(GettableSilenceSchema)
  .openapi({ description: 'GettableSilences gettable silences' })
  .openapi('GettableSilences')

const HealthResponseSchema = z
  .object({
    apiserver: z.string().exactOptional(),
    commit: z.string().exactOptional(),
    database: z.string().exactOptional(),
    enterpriseCommit: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HealthResponse')

const PostSilencesOKBodySchema = z
  .object({ silenceID: z.string().exactOptional().openapi({ description: 'silence ID' }) })
  .openapi({ required: [] })
  .openapi('PostSilencesOKBody')

const PostableAlertsSchema = z
  .array(PostableAlertSchema)
  .openapi({ description: 'PostableAlerts postable alerts' })
  .openapi('PostableAlerts')

const PostableSilenceSchema = z
  .object({
    comment: z.string().openapi({ description: 'comment' }),
    createdBy: z.string().openapi({ description: 'created by' }),
    endsAt: z.string().openapi({ description: 'ends at' }),
    id: z.string().exactOptional().openapi({ description: 'id' }),
    matchers: Matchers2Schema,
    startsAt: z.string().openapi({ description: 'starts at' }),
  })
  .openapi({
    description: 'PostableSilence postable silence',
    required: ['comment', 'createdBy', 'endsAt', 'matchers', 'startsAt'],
  })
  .openapi('PostableSilence')

const PublicError2Schema = z
  .object({
    extra: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Extra Additional information about the error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message A human readable message' }),
    messageId: z.string().openapi({ description: 'MessageID A unique identifier for the error' }),
    statusCode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'StatusCode The HTTP status code returned',
      }),
  })
  .openapi({
    description:
      'PublicError is derived from Error and only contains information\navailable to the end user.',
    required: ['statusCode', 'messageId'],
  })
  .openapi('PublicError2')

const ResourcePermissionDTOSchema = z
  .object({
    actions: z.array(z.string()).exactOptional(),
    builtInRole: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isInherited: z.boolean().exactOptional(),
    isManaged: z.boolean().exactOptional(),
    isServiceAccount: z.boolean().exactOptional(),
    permission: z.string().exactOptional(),
    roleName: z.string().exactOptional(),
    team: z.string().exactOptional(),
    teamAvatarUrl: z.string().exactOptional(),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    teamUid: z.string().exactOptional(),
    userAvatarUrl: z.string().exactOptional(),
    userId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userLogin: z.string().exactOptional(),
    userUid: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourcePermissionDTO')

const SetPermissionCommandSchema = z
  .object({ permission: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SetPermissionCommand')

const SetPermissionsCommandSchema = z
  .object({ permissions: z.array(SetResourcePermissionCommandSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SetPermissionsCommand')

const SilenceSchema = z
  .object({
    comment: z.string().openapi({ description: 'comment' }),
    createdBy: z.string().openapi({ description: 'created by' }),
    endsAt: z.string().openapi({ description: 'ends at' }),
    matchers: Matchers2Schema,
    startsAt: z.string().openapi({ description: 'starts at' }),
  })
  .openapi({
    description: 'Silence silence',
    required: ['comment', 'createdBy', 'endsAt', 'matchers', 'startsAt'],
  })
  .openapi('Silence')

const GettableHistoricUserConfigsResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(GettableHistoricUserConfigSchema) } },
}

const SMTPNotEnabledErrorResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const StateHistoryResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: FrameSchema } },
}

const TestGrafanaRuleResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(PostableAlertSchema) } },
}

const AcceptedResponseResponse = {
  description: 'AcceptedResponse',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const AdminCreateUserResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: AdminCreateUserResponseSchema } },
}

const AdminGetSettingsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SettingsBagSchema } },
}

const AdminGetStatsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: AdminStatsSchema } },
}

const AdminGetUserAuthTokensResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(UserTokenSchema) } },
}

const BadRequestErrorResponse = {
  description:
    'BadRequestError is returned when the request is invalid and it cannot be processed.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const BadRequestPublicErrorResponse = {
  description:
    'BadRequestPublicError is returned when the request is invalid and it cannot be processed.',
  content: { 'application/json': { schema: PublicError2Schema } },
}

const CalculateDashboardDiffResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(z.int()) } },
}

const CloudMigrationCreateTokenResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CreateAccessTokenResponseDTOSchema } },
}

const CloudMigrationDeleteTokenResponseResponse = { description: '(empty)' }

const CloudMigrationGetTokenResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: GetAccessTokenResponseDTOSchema } },
}

const CloudMigrationRunListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CloudMigrationRunListDTOSchema } },
}

const CloudMigrationRunResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: MigrateDataResponseDTOSchema } },
}

const CloudMigrationSessionListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CloudMigrationSessionListResponseDTOSchema } },
}

const CloudMigrationSessionResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CloudMigrationSessionResponseDTOSchema } },
}

const ConflictErrorResponse = {
  description: 'ConflictError',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const ContentResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(z.int()) } },
}

const CreateCorrelationResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CreateCorrelationResponseBodySchema } },
}

const CreateDashboardSnapshotResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          deleteKey: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Unique key used to delete the snapshot. It is different from the key so that only the creator can delete the snapshot.',
            }),
          deleteUrl: z.string().exactOptional(),
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64', description: 'Snapshot id' }),
          key: z.string().exactOptional().openapi({ description: 'Unique key' }),
          url: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const CreateOrUpdateDatasourceResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          datasource: DataSourceSchema,
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID Identifier of the new data source.',
              example: 65,
            }),
          message: z
            .string()
            .openapi({
              description: 'Message Message of the deleted dashboard.',
              example: 'Data source added',
            }),
          name: z
            .string()
            .openapi({ description: 'Name of the new data source.', example: 'My Data source' }),
        })
        .openapi({ required: ['id', 'name', 'message', 'datasource'] }),
    },
  },
}

const CreateOrgResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z
            .string()
            .openapi({
              description: 'Message Message of the created org.',
              example: 'Data source added',
            }),
          orgId: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID Identifier of the created org.',
              example: 65,
            }),
        })
        .openapi({ required: ['orgId', 'message'] }),
    },
  },
}

const CreatePlaylistResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PlaylistSchema } },
}

const CreatePublicDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PublicDashboardSchema } },
}

const CreateReportResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          message: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const CreateRoleResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: RoleDTOSchema } },
}

const CreateServiceAccountResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ServiceAccountDTOSchema } },
}

const CreateSnapshotResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CreateSnapshotResponseDTOSchema } },
}

const CreateTeamResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z.string().exactOptional(),
          teamId: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          uid: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const CreateTokenResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: NewApiKeyResultSchema } },
}

const DashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DashboardFullWithMetaSchema } },
}

const DashboardVersionResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DashboardVersionMetaSchema } },
}

const DashboardVersionsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DashboardVersionResponseMetaSchema } },
}

const DeleteCorrelationResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DeleteCorrelationResponseBodySchema } },
}

const DeleteDashboardResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z
            .string()
            .openapi({
              description: 'Message Message of the deleted dashboard.',
              example: 'Dashboard My Dashboard deleted',
            }),
          title: z
            .string()
            .openapi({
              description: 'Title Title of the deleted dashboard.',
              example: 'My Dashboard',
            }),
          uid: z
            .string()
            .openapi({ description: 'UID Identifier of the deleted dashboard.', example: '65' }),
        })
        .openapi({ required: ['uid', 'title', 'message'] }),
    },
  },
}

const DeleteDataSourceByNameResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID Identifier of the deleted data source.',
              example: 65,
            }),
          message: z
            .string()
            .openapi({
              description: 'Message Message of the deleted dashboard.',
              example: 'Dashboard My Dashboard deleted',
            }),
        })
        .openapi({ required: ['id', 'message'] }),
    },
  },
}

const DeleteFolderResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID Identifier of the deleted folder.',
              example: 65,
            }),
          message: z
            .string()
            .openapi({
              description: 'Message Message of the deleted folder.',
              example: 'Folder My Folder deleted',
            }),
          title: z
            .string()
            .openapi({ description: 'Title of the deleted folder.', example: 'My Folder' }),
        })
        .openapi({ required: ['id', 'title', 'message'] }),
    },
  },
}

const DevicesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(DeviceDTOSchema) } },
}

const DevicesSearchResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SearchDeviceQueryResultSchema } },
}

const FolderResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: FolderSchema } },
}

const ForbiddenErrorResponse = {
  description:
    'ForbiddenError is returned if the user/token has insufficient permissions to access the requested resource.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const ForbiddenPublicErrorResponse = {
  description:
    'ForbiddenPublicError is returned if the user/token has insufficient permissions to access the requested resource.',
  content: { 'application/json': { schema: PublicError2Schema } },
}

const GenericErrorResponse = {
  description:
    'A GenericError is the default error message that is generated.\nFor certain status codes there are more appropriate error structures.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const GetAccessControlStatusResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: AccessControlStatusSchema } },
}

const GetAllRolesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(RoleDTOSchema) } },
}

const GetAnnotationByIDResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: AnnotationSchema } },
}

const GetAnnotationTagsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: GetAnnotationTagsResponseSchema } },
}

const GetAnnotationsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(AnnotationSchema) } },
}

const GetCorrelationResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: CorrelationSchema } },
}

const GetCorrelationsBySourceUIDResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(CorrelationSchema) } },
}

const GetCorrelationsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(CorrelationSchema) } },
}

const GetCurrentOrgResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: OrgDetailsDTOSchema } },
}

const GetDashboardPermissionsListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(DashboardACLInfoDTOSchema) } },
}

const GetDashboardSnapshotResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DashboardFullWithMetaSchema } },
}

const GetDashboardsTagsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(DashboardTagCloudItemSchema) } },
}

const GetDataSourceIDResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID Identifier of the data source.',
              example: 65,
            }),
        })
        .openapi({ required: ['id'] }),
    },
  },
}

const GetDataSourceResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DataSourceSchema } },
}

const GetDataSourcesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DataSourceListSchema } },
}

const GetFolderDescendantCountsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DescendantCountsSchema } },
}

const GetFolderPermissionListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(DashboardACLInfoDTOSchema) } },
}

const GetFoldersResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(FolderSearchHitSchema) } },
}

const GetHomeDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: GetHomeDashboardResponseSchema } },
}

const GetLibraryElementArrayResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: LibraryElementArrayResponseSchema } },
}

const GetLibraryElementConnectionsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: LibraryElementConnectionsResponseSchema } },
}

const GetLibraryElementResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: LibraryElementResponseSchema } },
}

const GetLibraryElementsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: LibraryElementSearchResponseSchema } },
}

const GetLicenseTokenResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: TokenSchema } },
}

const GetOrgByIDResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: OrgDetailsDTOSchema } },
}

const GetOrgByNameResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: OrgDetailsDTOSchema } },
}

const GetOrgUsersForCurrentOrgLookupResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(UserLookupDTOSchema) } },
}

const GetOrgUsersForCurrentOrgResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(OrgUserDTOSchema) } },
}

const GetOrgUsersResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(OrgUserDTOSchema) } },
}

const GetPendingOrgInvitesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(TempUserDTOSchema) } },
}

const GetPlaylistDashboardsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PlaylistDashboardsSliceSchema } },
}

const GetPlaylistItemsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(PlaylistItemDTOSchema) } },
}

const GetPlaylistResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PlaylistDTOSchema } },
}

const GetPreferencesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PreferencesSpecSchema } },
}

const GetPublicAnnotationsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(AnnotationEventSchema) } },
}

const GetPublicDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PublicDashboardSchema } },
}

const GetQueryHistoryDeleteQueryResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: QueryHistoryDeleteQueryResponseSchema } },
}

const GetQueryHistoryResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: QueryHistoryResponseSchema } },
}

const GetQueryHistorySearchResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: QueryHistorySearchResponseSchema } },
}

const GetQuotaResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(QuotaDTOSchema) } },
}

const GetReportResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ReportSchema } },
}

const GetReportSettingsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ReportSettingsSchema } },
}

const GetReportsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(ReportSchema) } },
}

const GetResourcePermissionsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(ResourcePermissionDTOSchema) } },
}

const GetRoleAssignmentsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: RoleAssignmentsDTOSchema } },
}

const GetRoleResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: RoleDTOSchema } },
}

const GetSSOSettingsResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z.string().exactOptional(),
          provider: z.string().exactOptional(),
          settings: z.record(z.string(), z.any()).exactOptional(),
          source: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetSharingOptionsResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          externalEnabled: z.boolean().exactOptional(),
          externalSnapshotName: z.string().exactOptional(),
          externalSnapshotURL: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetSignedInUserOrgListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(UserOrgDTOSchema) } },
}

const GetSignedInUserTeamListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(TeamDTOSchema) } },
}

const GetSnapshotResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: GetSnapshotResponseDTOSchema } },
}

const GetStatusResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.boolean() } },
}

const GetSyncStatusResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ActiveSyncStatusDTOSchema } },
}

const GetTeamByIDResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: TeamDTOSchema } },
}

const GetTeamGroupsApiResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(TeamGroupDTOSchema) } },
}

const GetTeamLBACRulesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: TeamLBACRulesSchema } },
}

const GetTeamMembersResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(TeamMemberDTOSchema) } },
}

const GetUserAuthTokensResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(UserTokenSchema) } },
}

const GetUserOrgListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(UserOrgDTOSchema) } },
}

const GetUserTeamsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(TeamDTOSchema) } },
}

const GoneErrorResponse = {
  description: 'GoneError is returned when the requested endpoint was removed.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const ImportDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ImportDashboardResponseSchema } },
}

const InternalServerErrorResponse = {
  description: 'InternalServerError is a general error indicating something went wrong internally.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const InternalServerPublicErrorResponse = {
  description:
    'InternalServerPublicError is a general error indicating something went wrong internally.',
  content: { 'application/json': { schema: PublicError2Schema } },
}

const InterpolateDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.any() } },
}

const JwksResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({ keys: z.array(JSONWebKeySchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const ListBuiltinRolesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.record(z.string(), z.array(RoleDTOSchema)) } },
}

const ListPublicDashboardsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PublicDashboardListResponseWithPaginationSchema } },
}

const ListRecordingRulesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(RecordingRuleJSONSchema) } },
}

const ListRolesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(RoleDTOSchema) } },
}

const ListSSOSettingsResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            id: z.string().exactOptional(),
            provider: z.string().exactOptional(),
            settings: z.record(z.string(), z.any()).exactOptional(),
            source: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const ListSortOptionsResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          description: z.string().exactOptional(),
          displayName: z.string().exactOptional(),
          meta: z.string().exactOptional(),
          name: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ListTeamsRolesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.record(z.string(), z.array(RoleDTOSchema)) } },
}

const ListTokensResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(TokenDTOSchema) } },
}

const ListUsersRolesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.record(z.string(), z.array(RoleDTOSchema)) } },
}

const NoContentResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.object({}) } },
}

const NotAcceptableErrorResponse = {
  description:
    'NotAcceptableError is returned when the server cannot produce a response matching the accepted formats.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const NotFoundErrorResponse = {
  description: 'NotFoundError is returned when the requested resource was not found.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const NotFoundPublicErrorResponse = {
  description: 'NotFoundPublicError is returned when the requested resource was not found.',
  content: { 'application/json': { schema: PublicError2Schema } },
}

const OkResponseResponse = {
  description: 'An OKResponse is returned if the request was successful.',
  content: { 'application/json': { schema: SuccessResponseBodySchema } },
}

const PostAnnotationResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID Identifier of the created annotation.',
              example: 65,
            }),
          message: z
            .string()
            .openapi({ description: 'Message Message of the created annotation.' }),
        })
        .openapi({ required: ['id', 'message'] }),
    },
  },
}

const PostDashboardResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          folderUid: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'FolderUID The unique identifier (uid) of the folder the dashboard belongs to.',
            }),
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'ID The unique identifier (id) of the created/updated dashboard.',
              example: 1,
            }),
          status: z
            .string()
            .openapi({ description: 'Status status of the response.', example: 'success' }),
          title: z
            .string()
            .openapi({ description: 'Slug The slug of the dashboard.', example: 'my-dashboard' }),
          uid: z
            .string()
            .openapi({
              description: 'UID The unique identifier (uid) of the created/updated dashboard.',
              example: 'nHz3SXiiz',
            }),
          url: z
            .string()
            .openapi({
              description: 'URL The relative URL for accessing the created/updated dashboard.',
              example: '/d/nHz3SXiiz/my-dashboard',
            }),
          version: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'Version The version of the dashboard.',
              example: 2,
            }),
        })
        .openapi({ required: ['status', 'title', 'version', 'id', 'uid', 'url'] }),
    },
  },
}

const PostRenewLicenseTokenResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.boolean() } },
}

const PreconditionFailedErrorResponse = {
  description: 'PreconditionFailedError',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const PublicErrorResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PublicError2Schema } },
}

const QueryMetricsWithExpressionsResponsResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: QueryDataResponseSchema } },
}

const QueryPublicDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: QueryDataResponseSchema } },
}

const ReceiversResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(ReceiverStatusSchema) } },
}

const RecordingRuleResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: RecordingRuleJSONSchema } },
}

const RecordingRuleWriteTargetResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PrometheusRemoteWriteTargetJSONSchema } },
}

const RefreshLicenseStatsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ActiveUserStatsSchema } },
}

const ResourceDependenciesResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ResourceDependenciesResponseDTOSchema } },
}

const ResourcePermissionsDescriptionResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DescriptionSchema } },
}

const RetrieveServiceAccountResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: ServiceAccountDTOSchema } },
}

const SearchDashboardSnapshotsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(DashboardSnapshotDTOSchema) } },
}

const SearchOrgServiceAccountsWithPagingResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SearchOrgServiceAccountsResultSchema } },
}

const SearchOrgUsersResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SearchOrgUsersQueryResultSchema } },
}

const SearchOrgsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(OrgDTOSchema) } },
}

const SearchPlaylistsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PlaylistsSchema } },
}

const SearchResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: HitListSchema } },
}

const SearchTeamGroupsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(SearchTeamGroupsQueryResultSchema) } },
}

const SearchTeamsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SearchTeamQueryResultSchema } },
}

const SearchUsersResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: z.array(UserSearchHitDTOSchema) } },
}

const SearchUsersWithPagingResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SearchUserQueryResultSchema } },
}

const SetRoleAssignmentsResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: RoleAssignmentsDTOSchema } },
}

const SnapshotListResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: SnapshotListResponseDTOSchema } },
}

const StatusMovedPermanentlyResponse = {
  description: 'StatusMovedPermanently',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const UnauthorisedErrorResponse = {
  description: 'UnauthorizedError is returned when the request is not authenticated.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const UnauthorisedPublicErrorResponse = {
  description: 'UnauthorisedPublicError is returned when the request is not authenticated.',
  content: { 'application/json': { schema: PublicError2Schema } },
}

const UnprocessableEntityErrorResponse = {
  description: 'UnprocessableEntityError',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const UpdateCorrelationResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: UpdateCorrelationResponseBodySchema } },
}

const UpdatePlaylistResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PlaylistDTOSchema } },
}

const UpdatePublicDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: PublicDashboardSchema } },
}

const UpdateServiceAccountResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          message: z.string().exactOptional(),
          name: z.string().exactOptional(),
          serviceaccount: ServiceAccountProfileDTOSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const UpdateTeamLBACRulesResponseResponse = {
  description: '(empty)',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          message: z.string().exactOptional(),
          name: z.string().exactOptional(),
          rules: z.array(TeamLBACRuleSchema).exactOptional(),
          uid: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const UserResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: UserProfileDTOSchema } },
}

const ViewPublicDashboardResponseResponse = {
  description: '(empty)',
  content: { 'application/json': { schema: DashboardFullWithMetaSchema } },
}

const ApiKeySecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

const BasicSecurityScheme = { scheme: 'basic', type: 'http' }

export const getAccessControlRolesRoute = createRoute({
  method: 'get',
  path: '/access-control/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Get all roles.',
  description:
    'Gets all existing roles. The response contains all global and organization local roles, for the organization which user is signed in.\n\nYou need to have a permission with action `roles:read` and scope `roles:*`.\n\nThe `delegatable` flag reduces the set of roles to only those for which the signed-in user has permissions to assign.',
  operationId: 'listRoles',
  request: {
    query: z.object({
      delegatable: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'delegatable', schema: { type: 'boolean' }, required: false },
        }),
      includeHidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeHidden',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      targetOrgId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'targetOrgId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: ListRolesResponseResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlRolesRoute = createRoute({
  method: 'post',
  path: '/access-control/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Create a new custom role.',
  description:
    'Creates a new custom role and maps given permissions to that role. Note that roles with the same prefix as Fixed Roles can’t be created.\n\nYou need to have a permission with action `roles:write` and scope `permissions:type:delegate`. `permissions:type:delegate` scope ensures that users can only create custom roles with the same, or a subset of permissions which the user has.\nFor example, if a user does not have required permissions for creating users, they won’t be able to create a custom role which allows to do that. This is done to prevent escalation of privileges.',
  operationId: 'createRole',
  request: {
    body: { content: { 'application/json': { schema: CreateRoleFormSchema } }, required: true },
  },
  responses: {
    201: CreateRoleResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlRolesRoleUIDRoute = createRoute({
  method: 'get',
  path: '/access-control/roles/{roleUID}',
  tags: ['access_control', 'enterprise'],
  summary: 'Get a role.',
  description:
    'Get a role for the given UID.\n\nYou need to have a permission with action `roles:read` and scope `roles:*`.',
  operationId: 'getRole',
  request: {
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetRoleResponseResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putAccessControlRolesRoleUIDRoute = createRoute({
  method: 'put',
  path: '/access-control/roles/{roleUID}',
  tags: ['access_control', 'enterprise'],
  summary: 'Update a custom role.',
  description:
    'You need to have a permission with action `roles:write` and scope `permissions:type:delegate`. `permissions:type:delegate` scope ensures that users can only update custom roles with permissions which the user has.',
  operationId: 'updateRole',
  request: {
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateRoleCommandSchema } }, required: true },
  },
  responses: {
    200: GetRoleResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteAccessControlRolesRoleUIDRoute = createRoute({
  method: 'delete',
  path: '/access-control/roles/{roleUID}',
  tags: ['access_control', 'enterprise'],
  summary: 'Delete a custom role.',
  description:
    'Delete a role with the given UID, and it’s permissions. If the role is assigned to a built-in role, the deletion operation will fail, unless force query param is set to true, and in that case all assignments will also be deleted.\n\nYou need to have a permission with action `roles:delete` and scope `permissions:type:delegate`.',
  operationId: 'deleteRole',
  request: {
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', schema: { type: 'boolean' }, required: false },
        }),
      global: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'global', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlRolesRoleUIDAssignmentsRoute = createRoute({
  method: 'get',
  path: '/access-control/roles/{roleUID}/assignments',
  tags: ['access_control', 'enterprise'],
  summary: 'Get role assignments.',
  description:
    'Get role assignments for the role with the given UID.\nDoes not include role assignments mapped through group attribute sync.\n\nYou need to have a permission with action `teams.roles:list` and scope `teams:id:*` and `users.roles:list` and scope `users:id:*`.',
  operationId: 'getRoleAssignments',
  request: {
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetRoleAssignmentsResponseResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putAccessControlRolesRoleUIDAssignmentsRoute = createRoute({
  method: 'put',
  path: '/access-control/roles/{roleUID}/assignments',
  tags: ['access_control', 'enterprise'],
  summary: 'Set role assignments.',
  description:
    'Set role assignments for the role with the given UID.\n\nYou need to have a permission with action `teams.roles:add` and `teams.roles:remove` and scope `permissions:type:delegate`, and `users.roles:add` and `users.roles:remove` and scope `permissions:type:delegate`.',
  operationId: 'setRoleAssignments',
  request: {
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetRoleAssignmentsCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: SetRoleAssignmentsResponseResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlStatusRoute = createRoute({
  method: 'get',
  path: '/access-control/status',
  tags: ['access_control', 'enterprise'],
  summary: 'Get status.',
  description:
    'Returns an indicator to check if fine-grained access control is enabled or not.\n\nYou need to have a permission with action `status:accesscontrol` and scope `services:accesscontrol`.',
  operationId: 'getAccessControlStatus',
  responses: {
    200: GetAccessControlStatusResponseResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlTeamsRolesSearchRoute = createRoute({
  method: 'post',
  path: '/access-control/teams/roles/search',
  tags: ['access_control', 'enterprise'],
  summary: 'List roles assigned to multiple teams.',
  description:
    'Lists the roles that have been directly assigned to the given teams.\n\nYou need to have a permission with action `teams.roles:read` and scope `teams:id:*`.',
  operationId: 'listTeamsRoles',
  request: {
    body: { content: { 'application/json': { schema: RolesSearchQuerySchema } }, required: true },
  },
  responses: {
    200: ListTeamsRolesResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlTeamsTeamIdRolesRoute = createRoute({
  method: 'get',
  path: '/access-control/teams/{teamId}/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Get team roles.',
  description:
    'You need to have a permission with action `teams.roles:read` and scope `teams:id:<team ID>`.',
  operationId: 'listTeamRoles',
  request: {
    params: z.object({
      teamId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      targetOrgId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'targetOrgId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putAccessControlTeamsTeamIdRolesRoute = createRoute({
  method: 'put',
  path: '/access-control/teams/{teamId}/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Update team role.',
  description:
    'You need to have a permission with action `teams.roles:add` and `teams.roles:remove` and scope `permissions:type:delegate` for each. The delegate scope is required for permissions on roles being added.',
  operationId: 'setTeamRoles',
  request: {
    params: z.object({
      teamId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      targetOrgId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'targetOrgId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetTeamRolesCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlTeamsTeamIdRolesRoute = createRoute({
  method: 'post',
  path: '/access-control/teams/{teamId}/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Add team role.',
  description:
    'You need to have a permission with action `teams.roles:add` and scope `permissions:type:delegate`.',
  operationId: 'addTeamRole',
  request: {
    params: z.object({
      teamId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddTeamRoleCommandSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteAccessControlTeamsTeamIdRolesRoleUIDRoute = createRoute({
  method: 'delete',
  path: '/access-control/teams/{teamId}/roles/{roleUID}',
  tags: ['access_control', 'enterprise'],
  summary: 'Remove team role.',
  description:
    'You need to have a permission with action `teams.roles:remove` and scope `permissions:type:delegate`.',
  operationId: 'removeTeamRole',
  request: {
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
      teamId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlUsersRolesSearchRoute = createRoute({
  method: 'post',
  path: '/access-control/users/roles/search',
  tags: ['access_control', 'enterprise'],
  summary: 'List roles assigned to multiple users.',
  description:
    'Lists the roles that have been directly assigned to the given users. The list does not include built-in roles (Viewer, Editor, Admin or Grafana Admin), and it does not include roles that have been inherited from a team.\n\nYou need to have a permission with action `users.roles:read` and scope `users:id:*`.',
  operationId: 'listUsersRoles',
  request: {
    body: { content: { 'application/json': { schema: RolesSearchQuerySchema } }, required: true },
  },
  responses: {
    200: ListUsersRolesResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlUsersUserIdRolesRoute = createRoute({
  method: 'get',
  path: '/access-control/users/{userId}/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'List roles assigned to a user.',
  description:
    'Lists the roles that have been directly assigned to a given user. The list does not include built-in roles (Viewer, Editor, Admin or Grafana Admin), and it does not include roles that have been inherited from a team.\n\nYou need to have a permission with action `users.roles:read` and scope `users:id:<user ID>`.',
  operationId: 'listUserRoles',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeHidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeHidden',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      targetOrgId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'targetOrgId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetAllRolesResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putAccessControlUsersUserIdRolesRoute = createRoute({
  method: 'put',
  path: '/access-control/users/{userId}/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Set user role assignments.',
  description:
    'Update the user’s role assignments to match the provided set of UIDs. This will remove any assigned roles that aren’t in the request and add roles that are in the set but are not already assigned to the user.\nRoles mapped through group attribute sync are not impacted.\nIf you want to add or remove a single role, consider using Add a user role assignment or Remove a user role assignment instead.\n\nYou need to have a permission with action `users.roles:add` and `users.roles:remove` and scope `permissions:type:delegate` for each. The delegate scope is required for permissions on roles being added.',
  operationId: 'setUserRoles',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      targetOrgId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'targetOrgId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetUserRolesCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlUsersUserIdRolesRoute = createRoute({
  method: 'post',
  path: '/access-control/users/{userId}/roles',
  tags: ['access_control', 'enterprise'],
  summary: 'Add a user role assignment.',
  description:
    'Assign a role to a specific user. For bulk updates consider Set user role assignments.\n\nYou need to have a permission with action `users.roles:add` and scope `permissions:type:delegate`. `permissions:type:delegate` scope ensures that users can only assign roles which have same, or a subset of permissions which the user has. For example, if a user does not have required permissions for creating users, they won’t be able to assign a role which will allow to do that. This is done to prevent escalation of privileges.',
  operationId: 'addUserRole',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddUserRoleCommandSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteAccessControlUsersUserIdRolesRoleUIDRoute = createRoute({
  method: 'delete',
  path: '/access-control/users/{userId}/roles/{roleUID}',
  tags: ['access_control', 'enterprise'],
  summary: 'Remove a user role assignment.',
  description:
    'Revoke a role from a user. For bulk updates consider Set user role assignments.\n\nYou need to have a permission with action `users.roles:remove` and scope `permissions:type:delegate`.',
  operationId: 'removeUserRole',
  request: {
    query: z.object({
      global: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating if the assignment is global or not. If set to false, the default org ID of the authenticated user will be used from the request to remove assignment.',
            in: 'query',
            name: 'global',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      roleUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'roleUID', required: true, schema: { type: 'string' } },
        }),
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlResourceDescriptionRoute = createRoute({
  method: 'get',
  path: '/access-control/{resource}/description',
  tags: ['access_control'],
  summary: "Get a description of a resource's access control properties.",
  operationId: 'getResourceDescription',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: ResourcePermissionsDescriptionResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAccessControlResourceResourceIDRoute = createRoute({
  method: 'get',
  path: '/access-control/{resource}/{resourceID}',
  tags: ['access_control'],
  summary: 'Get permissions for a resource.',
  operationId: 'getResourcePermissions',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
      resourceID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resourceID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetResourcePermissionsResponseResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlResourceResourceIDRoute = createRoute({
  method: 'post',
  path: '/access-control/{resource}/{resourceID}',
  tags: ['access_control'],
  summary: 'Set resource permissions.',
  description:
    'Assigns permissions for a resource by a given type (`:resource`) and `:resourceID` to one or many\nassignment types. Allowed resources are `datasources`, `teams`, `dashboards`, `folders`, and `serviceaccounts`.\nRefer to the `/access-control/{resource}/description` endpoint for allowed Permissions.',
  operationId: 'setResourcePermissions',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
      resourceID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resourceID', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetPermissionsCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRoute = createRoute({
  method: 'post',
  path: '/access-control/{resource}/{resourceID}/builtInRoles/{builtInRole}',
  tags: ['access_control'],
  summary: 'Set resource permissions for a built-in role.',
  description:
    'Assigns permissions for a resource by a given type (`:resource`) and `:resourceID` to a built-in role.\nAllowed resources are `datasources`, `teams`, `dashboards`, `folders`, and `serviceaccounts`.\nRefer to the `/access-control/{resource}/description` endpoint for allowed Permissions.',
  operationId: 'setResourcePermissionsForBuiltInRole',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
      resourceID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resourceID', required: true, schema: { type: 'string' } },
        }),
      builtInRole: z
        .string()
        .openapi({
          param: { in: 'path', name: 'builtInRole', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetPermissionCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlResourceResourceIDTeamsTeamIDRoute = createRoute({
  method: 'post',
  path: '/access-control/{resource}/{resourceID}/teams/{teamID}',
  tags: ['access_control'],
  summary: 'Set resource permissions for a team.',
  description:
    'Assigns permissions for a resource by a given type (`:resource`) and `:resourceID` to a team.\nAllowed resources are `datasources`, `teams`, `dashboards`, `folders`, and `serviceaccounts`.\nRefer to the `/access-control/{resource}/description` endpoint for allowed Permissions.',
  operationId: 'setResourcePermissionsForTeam',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
      resourceID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resourceID', required: true, schema: { type: 'string' } },
        }),
      teamID: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'teamID',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetPermissionCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAccessControlResourceResourceIDUsersUserIDRoute = createRoute({
  method: 'post',
  path: '/access-control/{resource}/{resourceID}/users/{userID}',
  tags: ['access_control'],
  summary: 'Set resource permissions for a user.',
  description:
    'Assigns permissions for a resource by a given type (`:resource`) and `:resourceID` to a user or a service account.\nAllowed resources are `datasources`, `teams`, `dashboards`, `folders`, and `serviceaccounts`.\nRefer to the `/access-control/{resource}/description` endpoint for allowed Permissions.',
  operationId: 'setResourcePermissionsForUser',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
      resourceID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resourceID', required: true, schema: { type: 'string' } },
        }),
      userID: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'userID',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetPermissionCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAdminLdapSyncStatusRoute = createRoute({
  method: 'get',
  path: '/admin/ldap-sync-status',
  tags: ['admin_ldap', 'enterprise'],
  summary: 'Returns the current state of the LDAP background sync integration.',
  description: 'You need to have a permission with action `ldap.status:read`.',
  operationId: 'getSyncStatus',
  responses: {
    200: GetSyncStatusResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAdminLdapReloadRoute = createRoute({
  method: 'post',
  path: '/admin/ldap/reload',
  tags: ['admin_ldap'],
  summary: 'Reloads the LDAP configuration.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.config:reload`.',
  operationId: 'reloadLDAPCfg',
  responses: { 410: GoneErrorResponse },
  security: [{ basic: [] }],
})

export const getAdminLdapStatusRoute = createRoute({
  method: 'get',
  path: '/admin/ldap/status',
  tags: ['admin_ldap'],
  summary:
    "Attempts to connect to all the configured LDAP servers and returns information on whenever they're available or not.",
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.status:read`.',
  operationId: 'getLDAPStatus',
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminLdapSyncUserIdRoute = createRoute({
  method: 'post',
  path: '/admin/ldap/sync/{user_id}',
  tags: ['admin_ldap'],
  summary: 'Enables a single Grafana user to be synchronized against LDAP.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.user:sync`.',
  operationId: 'postSyncUserWithLDAP',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getAdminLdapUserNameRoute = createRoute({
  method: 'get',
  path: '/admin/ldap/{user_name}',
  tags: ['admin_ldap'],
  summary:
    'Finds an user based on a username in LDAP. This helps illustrate how would the particular user be mapped in Grafana when synced.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `ldap.user:read`.',
  operationId: 'getUserFromLDAP',
  request: {
    params: z.object({
      user_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'user_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminProvisioningAccessControlReloadRoute = createRoute({
  method: 'post',
  path: '/admin/provisioning/access-control/reload',
  tags: ['admin_provisioning', 'access_control', 'enterprise'],
  summary:
    'You need to have a permission with action `provisioning:reload` with scope `provisioners:accesscontrol`.',
  operationId: 'adminProvisioningReloadAccessControl',
  responses: {
    202: AcceptedResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postAdminProvisioningDashboardsReloadRoute = createRoute({
  method: 'post',
  path: '/admin/provisioning/dashboards/reload',
  tags: ['admin_provisioning'],
  summary: 'Reload dashboard provisioning configurations.',
  description:
    'Reloads the provisioning config files for dashboards again. It won’t return until the new provisioned entities are already stored in the database. In case of dashboards, it will stop polling for changes in dashboard files and then restart it with new configurations after returning.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `provisioning:reload` and scope `provisioners:dashboards`.',
  operationId: 'adminProvisioningReloadDashboards',
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminProvisioningDatasourcesReloadRoute = createRoute({
  method: 'post',
  path: '/admin/provisioning/datasources/reload',
  tags: ['admin_provisioning'],
  summary: 'Reload datasource provisioning configurations.',
  description:
    'Reloads the provisioning config files for datasources again. It won’t return until the new provisioned entities are already stored in the database. In case of dashboards, it will stop polling for changes in dashboard files and then restart it with new configurations after returning.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `provisioning:reload` and scope `provisioners:datasources`.',
  operationId: 'adminProvisioningReloadDatasources',
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminProvisioningPluginsReloadRoute = createRoute({
  method: 'post',
  path: '/admin/provisioning/plugins/reload',
  tags: ['admin_provisioning'],
  summary: 'Reload plugin provisioning configurations.',
  description:
    'Reloads the provisioning config files for plugins again. It won’t return until the new provisioned entities are already stored in the database. In case of dashboards, it will stop polling for changes in dashboard files and then restart it with new configurations after returning.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `provisioning:reload` and scope `provisioners:plugin`.',
  operationId: 'adminProvisioningReloadPlugins',
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getAdminSettingsRoute = createRoute({
  method: 'get',
  path: '/admin/settings',
  tags: ['admin'],
  summary: 'Fetch settings.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `settings:read` and scopes: `settings:*`, `settings:auth.saml:` and `settings:auth.saml:enabled` (property level).',
  operationId: 'adminGetSettings',
  responses: {
    200: AdminGetSettingsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getAdminStatsRoute = createRoute({
  method: 'get',
  path: '/admin/stats',
  tags: ['admin'],
  summary: 'Fetch Grafana Stats.',
  description:
    'Only works with Basic Authentication (username and password). See introduction for an explanation.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `server:stats:read`.',
  operationId: 'adminGetStats',
  responses: {
    200: AdminGetStatsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAdminUsersRoute = createRoute({
  method: 'post',
  path: '/admin/users',
  tags: ['admin_users'],
  summary: 'Create new user.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users:create`.\nNote that OrgId is an optional parameter that can be used to assign a new user to a different organization when `auto_assign_org` is set to `true`.',
  operationId: 'adminCreateUser',
  request: {
    body: {
      content: { 'application/json': { schema: AdminCreateUserFormSchema } },
      required: true,
    },
  },
  responses: {
    200: AdminCreateUserResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    412: PreconditionFailedErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const deleteAdminUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/admin/users/{user_id}',
  tags: ['admin_users'],
  summary: 'Delete global User.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users:delete` and scope `global.users:*`.',
  operationId: 'adminDeleteUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getAdminUsersUserIdAuthTokensRoute = createRoute({
  method: 'get',
  path: '/admin/users/{user_id}/auth-tokens',
  tags: ['admin_users'],
  summary:
    'Return a list of all auth tokens (devices) that the user currently have logged in from.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.authtoken:list` and scope `global.users:*`.',
  operationId: 'adminGetUserAuthTokens',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: AdminGetUserAuthTokensResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminUsersUserIdDisableRoute = createRoute({
  method: 'post',
  path: '/admin/users/{user_id}/disable',
  tags: ['admin_users'],
  summary: 'Disable user.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users:disable` and scope `global.users:1` (userIDScope).',
  operationId: 'adminDisableUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminUsersUserIdEnableRoute = createRoute({
  method: 'post',
  path: '/admin/users/{user_id}/enable',
  tags: ['admin_users'],
  summary: 'Enable user.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users:enable` and scope `global.users:1` (userIDScope).',
  operationId: 'adminEnableUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminUsersUserIdLogoutRoute = createRoute({
  method: 'post',
  path: '/admin/users/{user_id}/logout',
  tags: ['admin_users'],
  summary:
    'Logout user revokes all auth tokens (devices) for the user. User of issued auth tokens (devices) will no longer be logged in and will be required to authenticate again upon next activity.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.logout` and scope `global.users:*`.',
  operationId: 'adminLogoutUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const putAdminUsersUserIdPasswordRoute = createRoute({
  method: 'put',
  path: '/admin/users/{user_id}/password',
  tags: ['admin_users'],
  summary: 'Set password for user.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.password:update` and scope `global.users:*`.',
  operationId: 'adminUpdateUserPassword',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminUpdateUserPasswordFormSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const putAdminUsersUserIdPermissionsRoute = createRoute({
  method: 'put',
  path: '/admin/users/{user_id}/permissions',
  tags: ['admin_users'],
  summary: 'Set permissions for user.',
  description:
    'Only works with Basic Authentication (username and password). See introduction for an explanation.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.permissions:update` and scope `global.users:*`.',
  operationId: 'adminUpdateUserPermissions',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AdminUpdateUserPermissionsFormSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAdminUsersUserIdQuotasRoute = createRoute({
  method: 'get',
  path: '/admin/users/{user_id}/quotas',
  tags: ['quota', 'admin_users'],
  summary: 'Fetch user quota.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.quotas:list` and scope `global.users:1` (userIDScope).',
  operationId: 'getUserQuota',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetQuotaResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const putAdminUsersUserIdQuotasQuotaTargetRoute = createRoute({
  method: 'put',
  path: '/admin/users/{user_id}/quotas/{quota_target}',
  tags: ['quota', 'admin_users'],
  summary: 'Update user quota.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.quotas:update` and scope `global.users:1` (userIDScope).',
  operationId: 'updateUserQuota',
  request: {
    params: z.object({
      quota_target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'quota_target', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateQuotaCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postAdminUsersUserIdRevokeAuthTokenRoute = createRoute({
  method: 'post',
  path: '/admin/users/{user_id}/revoke-auth-token',
  tags: ['admin_users'],
  summary: 'Revoke auth token for user.',
  description:
    'Revokes the given auth token (device) for the user. User of issued auth token (device) will no longer be logged in and will be required to authenticate again upon next activity.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `users.authtoken:update` and scope `global.users:*`.',
  operationId: 'adminRevokeUserAuthToken',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RevokeAuthTokenCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getAnnotationsRoute = createRoute({
  method: 'get',
  path: '/annotations',
  tags: ['annotations'],
  summary: 'Find Annotations.',
  description:
    'Starting in Grafana v6.4 regions annotations are now returned in one entity that now includes the timeEnd property.',
  operationId: 'getAnnotations',
  request: {
    query: z.object({
      from: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Find annotations created after specific epoch datetime in milliseconds.',
            in: 'query',
            name: 'from',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      to: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Find annotations created before specific epoch datetime in milliseconds.',
            in: 'query',
            name: 'to',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit response to annotations created by specific user.',
            in: 'query',
            name: 'userId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      userUID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit response to annotations created by a specific user, identified by UID.',
            in: 'query',
            name: 'userUID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      alertId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Find annotations for a specified alert rule by its ID.\ndeprecated: AlertID is deprecated and will be removed in future versions. Please use AlertUID instead.',
            in: 'query',
            name: 'alertId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      alertUID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find annotations for a specified alert rule by its UID.',
            in: 'query',
            name: 'alertUID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dashboardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Find annotations that are scoped to a specific dashboard',
            in: 'query',
            name: 'dashboardId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      dashboardUID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find annotations that are scoped to a specific dashboard',
            in: 'query',
            name: 'dashboardUID',
            schema: { type: 'string' },
            required: false,
          },
        }),
      panelId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Find annotations that are scoped to a specific panel',
            in: 'query',
            name: 'panelId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Max limit for results returned.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Use this to filter organization annotations. Organization annotations are annotations from an annotation data source that are not connected specifically to a dashboard or panel. You can filter by multiple tags.',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      type: z
        .enum(['alert', 'annotation'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return alerts or user created annotations\nDescription:\n- `alert`\n- `annotation`',
            in: 'query',
            name: 'type',
            schema: { enum: ['alert', 'annotation'], type: 'string' },
            required: false,
          },
        }),
      matchAny: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Match any or all tags',
            in: 'query',
            name: 'matchAny',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetAnnotationsResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAnnotationsRoute = createRoute({
  method: 'post',
  path: '/annotations',
  tags: ['annotations'],
  summary: 'Create Annotation.',
  description:
    'Creates an annotation in the Grafana database. The dashboardId and panelId fields are optional. If they are not specified then an organization annotation is created and can be queried in any dashboard that adds the Grafana annotations data source. When creating a region annotation include the timeEnd property.\nThe format for `time` and `timeEnd` should be epoch numbers in millisecond resolution.\nThe response for this HTTP request is slightly different in versions prior to v6.4. In prior versions you would also get an endId if you where creating a region. But in 6.4 regions are represented using a single event with time and timeEnd properties.',
  operationId: 'postAnnotation',
  request: {
    body: { content: { 'application/json': { schema: PostAnnotationsCmdSchema } }, required: true },
  },
  responses: {
    200: PostAnnotationResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAnnotationsGraphiteRoute = createRoute({
  method: 'post',
  path: '/annotations/graphite',
  tags: ['annotations'],
  summary: 'Create Annotation in Graphite format.',
  description:
    'Creates an annotation by using Graphite-compatible event format. The `when` and `data` fields are optional. If `when` is not specified then the current time will be used as annotation’s timestamp. The `tags` field can also be in prior to Graphite `0.10.0` format (string with multiple tags being separated by a space).',
  operationId: 'postGraphiteAnnotation',
  request: {
    body: {
      content: { 'application/json': { schema: PostGraphiteAnnotationsCmdSchema } },
      required: true,
    },
  },
  responses: {
    200: PostAnnotationResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postAnnotationsMassDeleteRoute = createRoute({
  method: 'post',
  path: '/annotations/mass-delete',
  tags: ['annotations'],
  summary: 'Delete multiple annotations.',
  operationId: 'massDeleteAnnotations',
  request: {
    body: {
      content: { 'application/json': { schema: MassDeleteAnnotationsCmdSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAnnotationsTagsRoute = createRoute({
  method: 'get',
  path: '/annotations/tags',
  tags: ['annotations'],
  summary: 'Find Annotations Tags.',
  description: 'Find all the event tags created in the annotations.',
  operationId: 'getAnnotationTags',
  request: {
    query: z.object({
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag is a string that you can use to filter tags.',
            in: 'query',
            name: 'tag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .string()
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Max limit for results returned.',
            in: 'query',
            name: 'limit',
            schema: { default: '100', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetAnnotationTagsResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAnnotationsAnnotationIdRoute = createRoute({
  method: 'get',
  path: '/annotations/{annotation_id}',
  tags: ['annotations'],
  summary: 'Get Annotation by ID.',
  operationId: 'getAnnotationByID',
  request: {
    params: z.object({
      annotation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'annotation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetAnnotationByIDResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putAnnotationsAnnotationIdRoute = createRoute({
  method: 'put',
  path: '/annotations/{annotation_id}',
  tags: ['annotations'],
  summary: 'Update Annotation.',
  description:
    'Updates all properties of an annotation that matches the specified id. To only update certain property, consider using the Patch Annotation operation.',
  operationId: 'updateAnnotation',
  request: {
    params: z.object({
      annotation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'annotation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAnnotationsCmdSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteAnnotationsAnnotationIdRoute = createRoute({
  method: 'delete',
  path: '/annotations/{annotation_id}',
  tags: ['annotations'],
  summary: 'Delete Annotation By ID.',
  description: 'Deletes the annotation that matches the specified ID.',
  operationId: 'deleteAnnotationByID',
  request: {
    params: z.object({
      annotation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'annotation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchAnnotationsAnnotationIdRoute = createRoute({
  method: 'patch',
  path: '/annotations/{annotation_id}',
  tags: ['annotations'],
  summary: 'Patch Annotation.',
  description:
    'Updates one or more properties of an annotation that matches the specified ID.\nThis operation currently supports updating of the `text`, `tags`, `time` and `timeEnd` properties.\nThis is available in Grafana 6.0.0-beta2 and above.',
  operationId: 'patchAnnotation',
  request: {
    params: z.object({
      annotation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'annotation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchAnnotationsCmdSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAnonymousDevicesRoute = createRoute({
  method: 'get',
  path: '/anonymous/devices',
  tags: ['devices'],
  summary: 'Lists all devices within the last 30 days',
  operationId: 'listDevices',
  responses: {
    200: DevicesResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getAnonymousSearchRoute = createRoute({
  method: 'get',
  path: '/anonymous/search',
  tags: ['devices'],
  summary: 'Lists all devices within the last 30 days',
  operationId: 'SearchDevices',
  responses: {
    200: DevicesSearchResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getCloudmigrationMigrationRoute = createRoute({
  method: 'get',
  path: '/cloudmigration/migration',
  tags: ['migrations'],
  summary: 'Get a list of all cloud migration sessions that have been created.',
  operationId: 'getSessionList',
  responses: {
    200: CloudMigrationSessionListResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCloudmigrationMigrationRoute = createRoute({
  method: 'post',
  path: '/cloudmigration/migration',
  tags: ['migrations'],
  summary: 'Create a migration session.',
  operationId: 'createSession',
  request: {
    body: {
      content: { 'application/json': { schema: CloudMigrationSessionRequestDTOSchema } },
      required: true,
    },
  },
  responses: {
    200: CloudMigrationSessionResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getCloudmigrationMigrationUidRoute = createRoute({
  method: 'get',
  path: '/cloudmigration/migration/{uid}',
  tags: ['migrations'],
  summary: 'Get a cloud migration session by its uid.',
  operationId: 'getSession',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a migration session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: CloudMigrationSessionResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteCloudmigrationMigrationUidRoute = createRoute({
  method: 'delete',
  path: '/cloudmigration/migration/{uid}',
  tags: ['migrations'],
  summary: 'Delete a migration session by its uid.',
  operationId: 'deleteSession',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a migration session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCloudmigrationMigrationUidSnapshotRoute = createRoute({
  method: 'post',
  path: '/cloudmigration/migration/{uid}/snapshot',
  tags: ['migrations'],
  summary: 'Trigger the creation of an instance snapshot associated with the provided session.',
  description: 'If the snapshot initialization is successful, the snapshot uid is returned.',
  operationId: 'createSnapshot',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSnapshotRequestDTOSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateSnapshotResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getCloudmigrationMigrationUidSnapshotSnapshotUidRoute = createRoute({
  method: 'get',
  path: '/cloudmigration/migration/{uid}/snapshot/{snapshotUid}',
  tags: ['migrations'],
  summary:
    'Get metadata about a snapshot, including where it is in its processing and final results.',
  operationId: 'getSnapshot',
  request: {
    query: z.object({
      resultPage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'ResultPage is used for pagination with ResultLimit',
            in: 'query',
            name: 'resultPage',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      resultLimit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max limit for snapshot results returned.',
            in: 'query',
            name: 'resultLimit',
            schema: { default: 100, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      resultSortColumn: z
        .string()
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            description:
              'ResultSortColumn can be used to override the default system sort. Valid values are "name", "resource_type", and "status".',
            in: 'query',
            name: 'resultSortColumn',
            schema: { default: 'default', type: 'string' },
            required: false,
          },
        }),
      resultSortOrder: z
        .string()
        .default('ASC')
        .exactOptional()
        .openapi({
          param: {
            description:
              'ResultSortOrder is used with ResultSortColumn. Valid values are ASC and DESC.',
            in: 'query',
            name: 'resultSortOrder',
            schema: { default: 'ASC', type: 'string' },
            required: false,
          },
        }),
      errorsOnly: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'ErrorsOnly is used to only return resources with error statuses',
            in: 'query',
            name: 'errorsOnly',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'Session UID of a session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotUid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a snapshot',
            in: 'path',
            name: 'snapshotUid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetSnapshotResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRoute = createRoute({
  method: 'post',
  path: '/cloudmigration/migration/{uid}/snapshot/{snapshotUid}/cancel',
  tags: ['migrations'],
  summary: 'Cancel a snapshot, wherever it is in its processing chain.',
  description: 'TODO: Implement',
  operationId: 'cancelSnapshot',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'Session UID of a session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotUid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a snapshot',
            in: 'path',
            name: 'snapshotUid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '(empty)' },
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRoute = createRoute({
  method: 'post',
  path: '/cloudmigration/migration/{uid}/snapshot/{snapshotUid}/upload',
  tags: ['migrations'],
  summary: 'Upload a snapshot to the Grafana Migration Service for processing.',
  operationId: 'uploadSnapshot',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'Session UID of a session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotUid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a snapshot',
            in: 'path',
            name: 'snapshotUid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '(empty)' },
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getCloudmigrationMigrationUidSnapshotsRoute = createRoute({
  method: 'get',
  path: '/cloudmigration/migration/{uid}/snapshots',
  tags: ['migrations'],
  summary: 'Get a list of snapshots for a session.',
  operationId: 'getShapshotList',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page is used for pagination with limit',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max limit for results returned.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort with value latest to return results sorted in descending order.',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'Session UID of a session',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: SnapshotListResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getCloudmigrationResourcesDependenciesRoute = createRoute({
  method: 'get',
  path: '/cloudmigration/resources/dependencies',
  tags: ['migrations'],
  summary: 'Get the resource dependencies graph for the current set of migratable resources.',
  operationId: 'getResourceDependencies',
  responses: { 200: ResourceDependenciesResponseResponse },
})

export const getCloudmigrationTokenRoute = createRoute({
  method: 'get',
  path: '/cloudmigration/token',
  tags: ['migrations'],
  summary: 'Fetch the cloud migration token if it exists.',
  operationId: 'getCloudMigrationToken',
  responses: {
    200: CloudMigrationGetTokenResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postCloudmigrationTokenRoute = createRoute({
  method: 'post',
  path: '/cloudmigration/token',
  tags: ['migrations'],
  summary: 'Create gcom access token.',
  operationId: 'createCloudMigrationToken',
  responses: {
    200: CloudMigrationCreateTokenResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteCloudmigrationTokenUidRoute = createRoute({
  method: 'delete',
  path: '/cloudmigration/token/{uid}',
  tags: ['migrations'],
  summary: 'Deletes a cloud migration token.',
  operationId: 'deleteCloudMigrationToken',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'UID of a cloud migration token',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: CloudMigrationDeleteTokenResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getConvertApiPromRulesRoute = createRoute({
  method: 'get',
  path: '/convert/api/prom/rules',
  tags: ['convert_prometheus'],
  summary:
    'Gets all Grafana-managed alert rules that were imported from Prometheus-compatible sources, grouped by namespace.',
  operationId: 'RouteConvertPrometheusCortexGetRules',
  responses: {
    200: {
      description: 'PrometheusNamespace',
      content: { 'application/yaml': { schema: PrometheusNamespaceSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/yaml': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/yaml': { schema: NotFoundSchema } } },
  },
})

export const postConvertApiPromRulesRoute = createRoute({
  method: 'post',
  path: '/convert/api/prom/rules',
  tags: ['convert_prometheus'],
  summary: 'Converts the submitted rule groups into Grafana-Managed Rules.',
  operationId: 'RouteConvertPrometheusCortexPostRuleGroups',
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const getConvertApiPromRulesNamespaceTitleRoute = createRoute({
  method: 'get',
  path: '/convert/api/prom/rules/{NamespaceTitle}',
  tags: ['convert_prometheus'],
  summary:
    'Gets Grafana-managed alert rules that were imported from Prometheus-compatible sources for a specified namespace (folder).',
  operationId: 'RouteConvertPrometheusCortexGetNamespace',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PrometheusNamespace',
      content: { 'application/yaml': { schema: PrometheusNamespaceSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/yaml': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/yaml': { schema: NotFoundSchema } } },
  },
})

export const postConvertApiPromRulesNamespaceTitleRoute = createRoute({
  method: 'post',
  path: '/convert/api/prom/rules/{NamespaceTitle}',
  tags: ['convert_prometheus'],
  summary:
    'Converts a Prometheus rule group into a Grafana rule group and creates or updates it within the specified namespace.',
  description:
    'If the group already exists and was not imported from a Prometheus-compatible source initially,\nit will not be replaced and an error will be returned.',
  operationId: 'RouteConvertPrometheusCortexPostRuleGroup',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-grafana-alerting-datasource-uid': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-datasource-uid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-grafana-alerting-recording-rules-paused': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-recording-rules-paused',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'x-grafana-alerting-alert-rules-paused': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-alert-rules-paused',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'x-grafana-alerting-target-datasource-uid': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-target-datasource-uid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-grafana-alerting-folder-uid': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-folder-uid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-grafana-alerting-notification-settings': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-notification-settings',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/yaml': { schema: PrometheusRuleGroupSchema } } },
  },
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const deleteConvertApiPromRulesNamespaceTitleRoute = createRoute({
  method: 'delete',
  path: '/convert/api/prom/rules/{NamespaceTitle}',
  tags: ['convert_prometheus'],
  summary:
    'Deletes all rule groups that were imported from Prometheus-compatible sources within the specified namespace.',
  operationId: 'RouteConvertPrometheusCortexDeleteNamespace',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const getConvertApiPromRulesNamespaceTitleGroupRoute = createRoute({
  method: 'get',
  path: '/convert/api/prom/rules/{NamespaceTitle}/{Group}',
  tags: ['convert_prometheus'],
  summary:
    'Gets a single rule group in Prometheus-compatible format if it was imported from a Prometheus-compatible source.',
  operationId: 'RouteConvertPrometheusCortexGetRuleGroup',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PrometheusRuleGroup',
      content: { 'application/yaml': { schema: PrometheusRuleGroupSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/yaml': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/yaml': { schema: NotFoundSchema } } },
  },
})

export const deleteConvertApiPromRulesNamespaceTitleGroupRoute = createRoute({
  method: 'delete',
  path: '/convert/api/prom/rules/{NamespaceTitle}/{Group}',
  tags: ['convert_prometheus'],
  summary: 'Deletes a specific rule group if it was imported from a Prometheus-compatible source.',
  operationId: 'RouteConvertPrometheusCortexDeleteRuleGroup',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const getConvertPrometheusConfigV1RulesRoute = createRoute({
  method: 'get',
  path: '/convert/prometheus/config/v1/rules',
  tags: ['convert_prometheus'],
  summary:
    'Gets all Grafana-managed alert rules that were imported from Prometheus-compatible sources, grouped by namespace.',
  operationId: 'RouteConvertPrometheusGetRules',
  responses: {
    200: {
      description: 'PrometheusNamespace',
      content: { 'application/yaml': { schema: PrometheusNamespaceSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/yaml': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/yaml': { schema: NotFoundSchema } } },
  },
})

export const postConvertPrometheusConfigV1RulesRoute = createRoute({
  method: 'post',
  path: '/convert/prometheus/config/v1/rules',
  tags: ['convert_prometheus'],
  summary: 'Converts the submitted rule groups into Grafana-Managed Rules.',
  operationId: 'RouteConvertPrometheusPostRuleGroups',
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const getConvertPrometheusConfigV1RulesNamespaceTitleRoute = createRoute({
  method: 'get',
  path: '/convert/prometheus/config/v1/rules/{NamespaceTitle}',
  tags: ['convert_prometheus'],
  summary:
    'Gets Grafana-managed alert rules that were imported from Prometheus-compatible sources for a specified namespace (folder).',
  operationId: 'RouteConvertPrometheusGetNamespace',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PrometheusNamespace',
      content: { 'application/yaml': { schema: PrometheusNamespaceSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/yaml': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/yaml': { schema: NotFoundSchema } } },
  },
})

export const postConvertPrometheusConfigV1RulesNamespaceTitleRoute = createRoute({
  method: 'post',
  path: '/convert/prometheus/config/v1/rules/{NamespaceTitle}',
  tags: ['convert_prometheus'],
  summary:
    'Converts a Prometheus rule group into a Grafana rule group and creates or updates it within the specified namespace.',
  description:
    'If the group already exists and was not imported from a Prometheus-compatible source initially,\nit will not be replaced and an error will be returned.',
  operationId: 'RouteConvertPrometheusPostRuleGroup',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-grafana-alerting-datasource-uid': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-datasource-uid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-grafana-alerting-recording-rules-paused': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-recording-rules-paused',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'x-grafana-alerting-alert-rules-paused': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-alert-rules-paused',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'x-grafana-alerting-target-datasource-uid': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-target-datasource-uid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-grafana-alerting-folder-uid': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-folder-uid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-grafana-alerting-notification-settings': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-grafana-alerting-notification-settings',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/yaml': { schema: PrometheusRuleGroupSchema } } },
  },
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const deleteConvertPrometheusConfigV1RulesNamespaceTitleRoute = createRoute({
  method: 'delete',
  path: '/convert/prometheus/config/v1/rules/{NamespaceTitle}',
  tags: ['convert_prometheus'],
  summary:
    'Deletes all rule groups that were imported from Prometheus-compatible sources within the specified namespace.',
  operationId: 'RouteConvertPrometheusDeleteNamespace',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const getConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute = createRoute({
  method: 'get',
  path: '/convert/prometheus/config/v1/rules/{NamespaceTitle}/{Group}',
  tags: ['convert_prometheus'],
  summary:
    'Gets a single rule group in Prometheus-compatible format if it was imported from a Prometheus-compatible source.',
  operationId: 'RouteConvertPrometheusGetRuleGroup',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PrometheusRuleGroup',
      content: { 'application/yaml': { schema: PrometheusRuleGroupSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/yaml': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/yaml': { schema: NotFoundSchema } } },
  },
})

export const deleteConvertPrometheusConfigV1RulesNamespaceTitleGroupRoute = createRoute({
  method: 'delete',
  path: '/convert/prometheus/config/v1/rules/{NamespaceTitle}/{Group}',
  tags: ['convert_prometheus'],
  summary: 'Deletes a specific rule group if it was imported from a Prometheus-compatible source.',
  operationId: 'RouteConvertPrometheusDeleteRuleGroup',
  request: {
    params: z.object({
      NamespaceTitle: z
        .string()
        .openapi({
          param: { in: 'path', name: 'NamespaceTitle', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: {
      description: 'ConvertPrometheusResponse',
      content: { 'application/json': { schema: ConvertPrometheusResponseSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
})

export const getDashboardSnapshotsRoute = createRoute({
  method: 'get',
  path: '/dashboard/snapshots',
  tags: ['dashboards', 'snapshots'],
  summary: 'List snapshots.',
  operationId: 'searchDashboardSnapshots',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search Query',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1000n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned results',
            in: 'query',
            name: 'limit',
            schema: { default: 1000, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: SearchDashboardSnapshotsResponseResponse, 500: InternalServerErrorResponse },
})

export const postDashboardsDbRoute = createRoute({
  method: 'post',
  path: '/dashboards/db',
  tags: ['dashboards'],
  summary: 'Create / Update dashboard',
  description:
    'Creates a new dashboard or updates an existing dashboard.\nNote: This endpoint is not intended for creating folders, use `POST /api/folders` for that.\n\nUse: /apis/dashboard.grafana.app/v1/namespaces/{ns}/dashboards',
  operationId: 'postDashboard',
  request: {
    body: {
      content: { 'application/json': { schema: SaveDashboardCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: PostDashboardResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    412: PreconditionFailedErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDashboardsHomeRoute = createRoute({
  method: 'get',
  path: '/dashboards/home',
  tags: ['dashboards'],
  description:
    'NOTE: the home dashboard is configured in preferences.  This API will be removed in G13',
  operationId: 'getHomeDashboard',
  responses: {
    200: GetHomeDashboardResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postDashboardsImportRoute = createRoute({
  method: 'post',
  path: '/dashboards/import',
  tags: ['dashboards'],
  summary: 'Import dashboard.',
  operationId: 'importDashboard',
  request: {
    body: {
      content: { 'application/json': { schema: ImportDashboardRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: ImportDashboardResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    412: PreconditionFailedErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postDashboardsInterpolateRoute = createRoute({
  method: 'post',
  path: '/dashboards/interpolate',
  tags: ['dashboards'],
  summary:
    'Interpolate dashboard. This is an experimental endpoint under dashboardLibrary or suggestedDashboards feature flags and is subject to change.',
  operationId: 'interpolateDashboard',
  responses: {
    200: InterpolateDashboardResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDashboardsPublicDashboardsRoute = createRoute({
  method: 'get',
  path: '/dashboards/public-dashboards',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Get list of public dashboards',
  operationId: 'listPublicDashboards',
  responses: {
    200: ListPublicDashboardsResponseResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const getDashboardsTagsRoute = createRoute({
  method: 'get',
  path: '/dashboards/tags',
  tags: ['dashboards'],
  summary: 'Get all dashboards tags of an organization.',
  operationId: 'getDashboardTags',
  responses: {
    200: GetDashboardsTagsResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDashboardsUidDashboardUidPublicDashboardsRoute = createRoute({
  method: 'get',
  path: '/dashboards/uid/{dashboardUid}/public-dashboards',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Get public dashboard by dashboardUid',
  operationId: 'getPublicDashboard',
  request: {
    params: z.object({
      dashboardUid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dashboardUid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetPublicDashboardResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    404: NotFoundPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const postDashboardsUidDashboardUidPublicDashboardsRoute = createRoute({
  method: 'post',
  path: '/dashboards/uid/{dashboardUid}/public-dashboards',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Create public dashboard for a dashboard',
  operationId: 'createPublicDashboard',
  request: {
    params: z.object({
      dashboardUid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dashboardUid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PublicDashboardDTOSchema } }, required: true },
  },
  responses: {
    200: CreatePublicDashboardResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const deleteDashboardsUidDashboardUidPublicDashboardsUidRoute = createRoute({
  method: 'delete',
  path: '/dashboards/uid/{dashboardUid}/public-dashboards/{uid}',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Delete public dashboard for a dashboard',
  operationId: 'deletePublicDashboard',
  request: {
    params: z.object({
      dashboardUid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dashboardUid', required: true, schema: { type: 'string' } },
        }),
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const patchDashboardsUidDashboardUidPublicDashboardsUidRoute = createRoute({
  method: 'patch',
  path: '/dashboards/uid/{dashboardUid}/public-dashboards/{uid}',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Update public dashboard for a dashboard',
  operationId: 'updatePublicDashboard',
  request: {
    params: z.object({
      dashboardUid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dashboardUid', required: true, schema: { type: 'string' } },
        }),
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PublicDashboardDTOSchema } }, required: true },
  },
  responses: {
    200: UpdatePublicDashboardResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const getDashboardsUidUidRoute = createRoute({
  method: 'get',
  path: '/dashboards/uid/{uid}',
  tags: ['dashboards'],
  summary: 'Get dashboard by uid.',
  description:
    'Optional query parameter `apiVersion` selects the Kubernetes API version used to load the dashboard first\n(for example `v1beta1`). If that request fails, the default version is used instead. When omitted, only the default is used.\n\nWill return the dashboard given the dashboard unique identifier (uid).\n\nUse: /apis/dashboard.grafana.app/v1/namespaces/{ns}/dashboards/{uid}',
  operationId: 'getDashboardByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: DashboardResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    406: NotAcceptableErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const deleteDashboardsUidUidRoute = createRoute({
  method: 'delete',
  path: '/dashboards/uid/{uid}',
  tags: ['dashboards'],
  summary: 'Delete dashboard by uid.',
  description:
    'Will delete the dashboard given the specified unique identifier (uid).\n\nUse: /apis/dashboard.grafana.app/v1/namespaces/{ns}/dashboards/{uid}',
  operationId: 'deleteDashboardByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: DeleteDashboardResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDashboardsUidUidPermissionsRoute = createRoute({
  method: 'get',
  path: '/dashboards/uid/{uid}/permissions',
  tags: ['dashboards', 'permissions'],
  summary: 'Gets all existing permissions for the given dashboard.',
  description: 'Use: /apis/dashboard.grafana.app/v1/namespaces/{ns}/dashboards/{uid}/access',
  operationId: 'getDashboardPermissionsListByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetDashboardPermissionsListResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postDashboardsUidUidPermissionsRoute = createRoute({
  method: 'post',
  path: '/dashboards/uid/{uid}/permissions',
  tags: ['dashboards', 'permissions'],
  summary: 'Updates permissions for a dashboard.',
  description:
    'This operation will remove existing permissions if they’re not included in the request.',
  operationId: 'updateDashboardPermissionsByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'The dashboard UID',
            in: 'path',
            name: 'uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDashboardACLCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postDashboardsUidUidRestoreRoute = createRoute({
  method: 'post',
  path: '/dashboards/uid/{uid}/restore',
  tags: ['dashboards', 'versions'],
  summary: 'Restore a dashboard to a given dashboard version using UID.',
  description:
    'This API will be removed when /apis/dashboard.grafana.app/v1 is released.\nYou can restore a dashboard by reading it from history, then creating it again.',
  operationId: 'restoreDashboardVersionByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RestoreDashboardVersionCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: PostDashboardResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDashboardsUidUidVersionsRoute = createRoute({
  method: 'get',
  path: '/dashboards/uid/{uid}/versions',
  tags: ['dashboards', 'versions'],
  summary: 'Gets all existing versions for the dashboard using UID.',
  operationId: 'getDashboardVersionsByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Version to start from when returning queries',
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: DashboardVersionsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDashboardsUidUidVersionsDashboardVersionIDRoute = createRoute({
  method: 'get',
  path: '/dashboards/uid/{uid}/versions/{DashboardVersionID}',
  tags: ['dashboards', 'versions'],
  summary: 'Get a specific dashboard version using UID.',
  operationId: 'getDashboardVersionByUID',
  request: {
    params: z.object({
      DashboardVersionID: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'DashboardVersionID',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: DashboardVersionResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDatasourcesRoute = createRoute({
  method: 'get',
  path: '/datasources',
  tags: ['datasources'],
  summary: 'Get all data sources.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:read` and scope: `datasources:*`.',
  operationId: 'getDataSources',
  responses: {
    200: GetDataSourcesResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesRoute = createRoute({
  method: 'post',
  path: '/datasources',
  tags: ['datasources'],
  summary: 'Create a data source.',
  description:
    'By defining `password` and `basicAuthPassword` under secureJsonData property\nGrafana encrypts them securely as an encrypted blob in the database.\nThe response then lists the encrypted fields under secureJsonFields.\n\nIf you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:create`',
  operationId: 'addDataSource',
  request: {
    body: {
      content: { 'application/json': { schema: AddDataSourceCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateOrUpdateDatasourceResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesCorrelationsRoute = createRoute({
  method: 'get',
  path: '/datasources/correlations',
  tags: ['datasources', 'correlations'],
  summary: 'Gets all correlations.',
  operationId: 'getCorrelations',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().max(1000n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the maximum number of correlations to return per page',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int64', maximum: 1000, type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page index for starting fetching correlations',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      sourceUID: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Source datasource UID filter to be applied to correlations',
            explode: true,
            in: 'query',
            name: 'sourceUID',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetCorrelationsResponseResponse,
    401: UnauthorisedErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesIdNameRoute = createRoute({
  method: 'get',
  path: '/datasources/id/{name}',
  tags: ['datasources'],
  summary: 'Get data source Id by Name. This function will be removed in the future.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:read` and scopes: `datasources:*`, `datasources:name:*` and `datasources:name:test_datasource` (single data source).',
  operationId: 'getDataSourceIdByName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetDataSourceIDResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDatasourcesNameNameRoute = createRoute({
  method: 'get',
  path: '/datasources/name/{name}',
  tags: ['datasources'],
  summary: 'Get a single data source by Name.  This function will be removed in the future.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:read` and scopes: `datasources:*`, `datasources:name:*` and `datasources:name:test_datasource` (single data source).',
  operationId: 'getDataSourceByName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetDataSourceResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const deleteDatasourcesNameNameRoute = createRoute({
  method: 'delete',
  path: '/datasources/name/{name}',
  tags: ['datasources'],
  summary: 'Delete an existing data source by name. This function will be removed in the future.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:delete` and scopes: `datasources:*`, `datasources:name:*` and `datasources:name:test_datasource` (single data source).',
  operationId: 'deleteDataSourceByName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: DeleteDataSourceByNameResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getDatasourcesProxyUidUidDatasourceProxyRouteRoute = createRoute({
  method: 'get',
  path: '/datasources/proxy/uid/{uid}/{datasource_proxy_route}',
  tags: ['datasources'],
  summary: 'Data source proxy GET calls.',
  description: 'Proxies all calls to the actual data source.',
  operationId: 'datasourceProxyGETByUIDcalls',
  request: {
    params: z.object({
      datasource_proxy_route: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_proxy_route',
            required: true,
            schema: { type: 'string' },
          },
        }),
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '(empty)' },
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesProxyUidUidDatasourceProxyRouteRoute = createRoute({
  method: 'post',
  path: '/datasources/proxy/uid/{uid}/{datasource_proxy_route}',
  tags: ['datasources'],
  summary: 'Data source proxy POST calls.',
  description:
    'Proxies all calls to the actual data source. The data source should support POST methods for the specific path and role as defined',
  operationId: 'datasourceProxyPOSTByUIDcalls',
  request: {
    params: z.object({
      datasource_proxy_route: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_proxy_route',
            required: true,
            schema: { type: 'string' },
          },
        }),
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.any() } }, required: true },
  },
  responses: {
    201: { description: '(empty)' },
    202: { description: '(empty)' },
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteDatasourcesProxyUidUidDatasourceProxyRouteRoute = createRoute({
  method: 'delete',
  path: '/datasources/proxy/uid/{uid}/{datasource_proxy_route}',
  tags: ['datasources'],
  summary: 'Data source proxy DELETE calls.',
  description: 'Proxies all calls to the actual data source.',
  operationId: 'datasourceProxyDELETEByUIDcalls',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
      datasource_proxy_route: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_proxy_route',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: '(empty)' },
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesUidSourceUIDCorrelationsRoute = createRoute({
  method: 'get',
  path: '/datasources/uid/{sourceUID}/correlations',
  tags: ['datasources', 'correlations'],
  summary: 'Gets all correlations originating from the given data source.',
  operationId: 'getCorrelationsBySourceUID',
  request: {
    params: z.object({
      sourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetCorrelationsBySourceUIDResponseResponse,
    401: UnauthorisedErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesUidSourceUIDCorrelationsRoute = createRoute({
  method: 'post',
  path: '/datasources/uid/{sourceUID}/correlations',
  tags: ['datasources', 'correlations'],
  summary: 'Add correlation.',
  operationId: 'createCorrelation',
  request: {
    params: z.object({
      sourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCorrelationCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateCorrelationResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute = createRoute({
  method: 'get',
  path: '/datasources/uid/{sourceUID}/correlations/{correlationUID}',
  tags: ['datasources', 'correlations'],
  summary: 'Gets a correlation.',
  operationId: 'getCorrelation',
  request: {
    params: z.object({
      sourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sourceUID', required: true, schema: { type: 'string' } },
        }),
      correlationUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'correlationUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetCorrelationResponseResponse,
    401: UnauthorisedErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute = createRoute({
  method: 'patch',
  path: '/datasources/uid/{sourceUID}/correlations/{correlationUID}',
  tags: ['datasources', 'correlations'],
  summary: 'Updates a correlation.',
  operationId: 'updateCorrelation',
  request: {
    params: z.object({
      sourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sourceUID', required: true, schema: { type: 'string' } },
        }),
      correlationUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'correlationUID', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateCorrelationCommandSchema } } },
  },
  responses: {
    200: UpdateCorrelationResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesUidUidRoute = createRoute({
  method: 'get',
  path: '/datasources/uid/{uid}',
  tags: ['datasources'],
  summary: 'Get a single data source by UID.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:read` and scopes: `datasources:*`, `datasources:uid:*` and `datasources:uid:kLtEtcRGk` (single data source).',
  operationId: 'getDataSourceByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetDataSourceResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putDatasourcesUidUidRoute = createRoute({
  method: 'put',
  path: '/datasources/uid/{uid}',
  tags: ['datasources'],
  summary: 'Update an existing data source.',
  description:
    'Similar to creating a data source, `password` and `basicAuthPassword` should be defined under\nsecureJsonData in order to be stored securely as an encrypted blob in the database. Then, the\nencrypted fields are listed under secureJsonFields section in the response.\n\nIf you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:write` and scopes: `datasources:*`, `datasources:uid:*` and `datasources:uid:1` (single data source).',
  operationId: 'updateDataSourceByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDataSourceCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateOrUpdateDatasourceResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteDatasourcesUidUidRoute = createRoute({
  method: 'delete',
  path: '/datasources/uid/{uid}',
  tags: ['datasources'],
  summary: 'Delete an existing data source by UID.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:delete` and scopes: `datasources:*`, `datasources:uid:*` and `datasources:uid:kLtEtcRGk` (single data source).',
  operationId: 'deleteDataSourceByUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteDatasourcesUidUidCorrelationsCorrelationUIDRoute = createRoute({
  method: 'delete',
  path: '/datasources/uid/{uid}/correlations/{correlationUID}',
  tags: ['datasources', 'correlations'],
  summary: 'Delete a correlation.',
  operationId: 'deleteCorrelation',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
      correlationUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'correlationUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: DeleteCorrelationResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesUidUidHealthRoute = createRoute({
  method: 'get',
  path: '/datasources/uid/{uid}/health',
  tags: ['datasources', 'health'],
  summary: 'Sends a health check request to the plugin datasource identified by the UID.',
  operationId: 'checkDatasourceHealthWithUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesUidUidLbacTeamsRoute = createRoute({
  method: 'get',
  path: '/datasources/uid/{uid}/lbac/teams',
  tags: ['enterprise'],
  summary: 'Retrieves LBAC rules for a team.',
  operationId: 'getTeamLBACRulesApi',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetTeamLBACRulesResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putDatasourcesUidUidLbacTeamsRoute = createRoute({
  method: 'put',
  path: '/datasources/uid/{uid}/lbac/teams',
  tags: ['enterprise'],
  summary: 'Updates LBAC rules for a team.',
  operationId: 'updateTeamLBACRulesApi',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTeamLBACCommandSchema } } },
  },
  responses: {
    200: UpdateTeamLBACRulesResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesUidUidResourcesDatasourceProxyRouteRoute = createRoute({
  method: 'get',
  path: '/datasources/uid/{uid}/resources/{datasource_proxy_route}',
  tags: ['datasources'],
  summary: 'Fetch data source resources.',
  operationId: 'callDatasourceResourceWithUID',
  request: {
    params: z.object({
      datasource_proxy_route: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datasource_proxy_route',
            required: true,
            schema: { type: 'string' },
          },
        }),
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getDatasourcesDataSourceUIDCacheRoute = createRoute({
  method: 'get',
  path: '/datasources/{dataSourceUID}/cache',
  tags: ['enterprise'],
  description: 'get cache config for a single data source',
  operationId: 'getDataSourceCacheConfig',
  request: {
    params: z.object({
      dataSourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataSourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      dataSourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional datasource type used to disambiguate datasource UID lookups.',
            in: 'query',
            name: 'dataSourceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CacheConfigResponseSchema } },
    },
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesDataSourceUIDCacheRoute = createRoute({
  method: 'post',
  path: '/datasources/{dataSourceUID}/cache',
  tags: ['enterprise'],
  description: 'set cache config for a single data source',
  operationId: 'setDataSourceCacheConfig',
  request: {
    params: z.object({
      dataSourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataSourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      dataSourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional datasource type used to disambiguate datasource UID lookups.',
            in: 'query',
            name: 'dataSourceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CacheConfigSetterSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CacheConfigResponseSchema } },
    },
    400: BadRequestErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesDataSourceUIDCacheCleanRoute = createRoute({
  method: 'post',
  path: '/datasources/{dataSourceUID}/cache/clean',
  tags: ['enterprise'],
  description: 'clean cache for a single data source',
  operationId: 'cleanDataSourceCache',
  request: {
    params: z.object({
      dataSourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataSourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CacheConfigResponseSchema } },
    },
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesDataSourceUIDCacheDisableRoute = createRoute({
  method: 'post',
  path: '/datasources/{dataSourceUID}/cache/disable',
  tags: ['enterprise'],
  description: 'disable cache for a single data source',
  operationId: 'disableDataSourceCache',
  request: {
    params: z.object({
      dataSourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataSourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      dataSourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional datasource type used to disambiguate datasource UID lookups.',
            in: 'query',
            name: 'dataSourceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CacheConfigResponseSchema } },
    },
    500: InternalServerErrorResponse,
  },
})

export const postDatasourcesDataSourceUIDCacheEnableRoute = createRoute({
  method: 'post',
  path: '/datasources/{dataSourceUID}/cache/enable',
  tags: ['enterprise'],
  description: 'enable cache for a single data source',
  operationId: 'enableDataSourceCache',
  request: {
    params: z.object({
      dataSourceUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dataSourceUID', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      dataSourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional datasource type used to disambiguate datasource UID lookups.',
            in: 'query',
            name: 'dataSourceType',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CacheConfigResponseSchema } },
    },
    500: InternalServerErrorResponse,
  },
})

export const postDsQueryRoute = createRoute({
  method: 'post',
  path: '/ds/query',
  tags: ['datasources'],
  summary: 'DataSource query metrics with expressions.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `datasources:query`.',
  operationId: 'queryMetricsWithExpressions',
  request: {
    body: { content: { 'application/json': { schema: MetricRequestSchema } }, required: true },
  },
  responses: {
    200: QueryMetricsWithExpressionsResponsResponse,
    207: QueryMetricsWithExpressionsResponsResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getFoldersRoute = createRoute({
  method: 'get',
  path: '/folders',
  tags: ['folders'],
  summary: 'Get all folders.',
  description:
    'It returns all folders that the authenticated user has permission to view.\nIf nested folders are enabled, it expects an additional query parameter with the parent folder UID\nand returns the immediate subfolders that the authenticated user has permission to view.\nIf the parameter is not supplied then it returns immediate subfolders under the root\nthat the authenticated user has permission to view.\n\nUse: /apis/folder.grafana.app/v1/namespaces/{ns}/folders',
  operationId: 'getFolders',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1000n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the maximum number of folders to return',
            in: 'query',
            name: 'limit',
            schema: { default: 1000, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page index for starting fetching folders',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      parentUid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The parent folder UID',
            in: 'query',
            name: 'parentUid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      permission: z
        .enum(['Edit', 'View'])
        .default('View')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to `Edit` to return folders that the user can edit',
            in: 'query',
            name: 'permission',
            schema: { default: 'View', enum: ['Edit', 'View'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetFoldersResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postFoldersRoute = createRoute({
  method: 'post',
  path: '/folders',
  tags: ['folders'],
  summary: 'Create folder.',
  description:
    'If nested folders are enabled then it additionally expects the parent folder UID.\n\nUse: /apis/folder.grafana.app/v1/namespaces/{ns}/folders/{folder_uid}',
  operationId: 'createFolder',
  request: {
    body: {
      content: { 'application/json': { schema: CreateFolderCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: FolderResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getFoldersFolderUidRoute = createRoute({
  method: 'get',
  path: '/folders/{folder_uid}',
  tags: ['folders'],
  summary: 'Get folder by uid.',
  description: 'Use: /apis/folder.grafana.app/v1/namespaces/{ns}/folders/{folder_uid}',
  operationId: 'getFolderByUID',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: FolderResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const putFoldersFolderUidRoute = createRoute({
  method: 'put',
  path: '/folders/{folder_uid}',
  tags: ['folders'],
  summary: 'Update folder.',
  description: 'Use: /apis/folder.grafana.app/v1/namespaces/{ns}/folders/{folder_uid}',
  operationId: 'updateFolder',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description:
        'To change the unique identifier (uid), provide another one.\nTo overwrite an existing folder with newer version, set `overwrite` to `true`.\nProvide the current version to safelly update the folder: if the provided version differs from the stored one the request will fail, unless `overwrite` is `true`.',
      content: { 'application/json': { schema: UpdateFolderCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: FolderResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const deleteFoldersFolderUidRoute = createRoute({
  method: 'delete',
  path: '/folders/{folder_uid}',
  tags: ['folders'],
  summary: 'Delete folder.',
  description:
    'Deletes an existing folder identified by UID along with all dashboards (and their alerts) stored in the folder. This operation cannot be reverted.\nIf nested folders are enabled then it also deletes all the subfolders.\n\nUse: /apis/folder.grafana.app/v1/namespaces/{ns}/folders/{folder_uid}',
  operationId: 'deleteFolder',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      forceDeleteRules: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true` any Grafana 8 Alerts under this folder will be deleted.\nSet to `false` so that the request will fail if the folder contains any Grafana 8 Alerts.',
            in: 'query',
            name: 'forceDeleteRules',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: DeleteFolderResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getFoldersFolderUidCountsRoute = createRoute({
  method: 'get',
  path: '/folders/{folder_uid}/counts',
  tags: ['folders'],
  summary:
    'Gets the count of each descendant of a folder by kind. The folder is identified by UID.',
  description: 'Use: /apis/folder.grafana.app/v1/namespaces/{ns}/folders/{folder_uid}',
  operationId: 'getFolderDescendantCounts',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetFolderDescendantCountsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postFoldersFolderUidMoveRoute = createRoute({
  method: 'post',
  path: '/folders/{folder_uid}/move',
  tags: ['folders'],
  summary: 'Move folder.',
  description:
    'Use: /apis/folder.grafana.app/v1/namespaces/{ns}/folders/{folder_uid},\nChanging the parent folder annotation',
  operationId: 'moveFolder',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MoveFolderCommandSchema } }, required: true },
  },
  responses: {
    200: FolderResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getFoldersFolderUidPermissionsRoute = createRoute({
  method: 'get',
  path: '/folders/{folder_uid}/permissions',
  tags: ['folders', 'permissions'],
  summary: 'Gets all existing permissions for the folder with the given `uid`.',
  operationId: 'getFolderPermissionList',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetFolderPermissionListResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postFoldersFolderUidPermissionsRoute = createRoute({
  method: 'post',
  path: '/folders/{folder_uid}/permissions',
  tags: ['folders', 'permissions'],
  summary:
    'Updates permissions for a folder. This operation will remove existing permissions if they’re not included in the request.',
  operationId: 'updateFolderPermissions',
  request: {
    params: z.object({
      folder_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'folder_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDashboardACLCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  description:
    "apiHealthHandler will return ok if Grafana's web server is running and it\ncan access the database. If the database cannot be accessed it will return\nhttp status code 503.",
  operationId: 'getHealth',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: HealthResponseSchema } } },
    503: InternalServerErrorResponse,
  },
})

export const getLibraryElementsRoute = createRoute({
  method: 'get',
  path: '/library-elements',
  tags: ['library_elements'],
  summary: 'Get all library elements.',
  description:
    'Returns a list of all library elements the authenticated user has permission to view.\nUse the `perPage` query parameter to control the maximum number of library elements returned; the default limit is `100`.\nYou can also use the `page` query parameter to fetch library elements from any page other than the first one.',
  operationId: 'getLibraryElements',
  request: {
    query: z.object({
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Part of the name or description searched for.',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      kind: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.literal(1n))
        .exactOptional()
        .openapi({
          param: {
            description: 'Kind of element to search for.\nDescription:\n- 1 - library panels',
            in: 'query',
            name: 'kind',
            schema: { enum: [1], format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      sortDirection: z
        .enum(['alpha-asc', 'alpha-desc'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort order of elements.\nDescription:\n- alpha-asc: ascending\n- alpha-desc: descending',
            in: 'query',
            name: 'sortDirection',
            schema: { enum: ['alpha-asc', 'alpha-desc'], type: 'string' },
            required: false,
          },
        }),
      typeFilter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of types to filter the elements by',
            in: 'query',
            name: 'typeFilter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      excludeUid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Element UID to exclude from search results.',
            in: 'query',
            name: 'excludeUid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      folderFilter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma separated list of folder ID(s) to filter the elements by.\nDeprecated: Use FolderFilterUIDs instead.',
            in: 'query',
            name: 'folderFilter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      folderFilterUIDs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of folder UID(s) to filter the elements by.',
            in: 'query',
            name: 'folderFilterUIDs',
            schema: { type: 'string' },
            required: false,
          },
        }),
      perPage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results per page.',
            in: 'query',
            name: 'perPage',
            schema: { default: 100, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page for a set of records, given that only perPage records are returned at a time. Numbering starts at 1.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryElementsResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postLibraryElementsRoute = createRoute({
  method: 'post',
  path: '/library-elements',
  tags: ['library_elements'],
  summary: 'Create library element.',
  description: 'Creates a new library element.',
  operationId: 'createLibraryElement',
  request: {
    body: {
      content: { 'application/json': { schema: CreateLibraryElementCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: GetLibraryElementResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getLibraryElementsNameLibraryElementNameRoute = createRoute({
  method: 'get',
  path: '/library-elements/name/{library_element_name}',
  tags: ['library_elements'],
  summary: 'Get library element by name.',
  description: 'Returns a library element with the given name.',
  operationId: 'getLibraryElementByName',
  request: {
    params: z.object({
      library_element_name: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'library_element_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryElementArrayResponseResponse,
    401: UnauthorisedErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getLibraryElementsLibraryElementUidRoute = createRoute({
  method: 'get',
  path: '/library-elements/{library_element_uid}',
  tags: ['library_elements'],
  summary: 'Get library element by UID.',
  description: 'Returns a library element with the given UID.',
  operationId: 'getLibraryElementByUID',
  request: {
    params: z.object({
      library_element_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'library_element_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryElementResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteLibraryElementsLibraryElementUidRoute = createRoute({
  method: 'delete',
  path: '/library-elements/{library_element_uid}',
  tags: ['library_elements'],
  summary: 'Delete library element.',
  description:
    'Deletes an existing library element as specified by the UID. This operation cannot be reverted.\nYou cannot delete a library element that is connected. This operation cannot be reverted.',
  operationId: 'deleteLibraryElementByUID',
  request: {
    params: z.object({
      library_element_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'library_element_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchLibraryElementsLibraryElementUidRoute = createRoute({
  method: 'patch',
  path: '/library-elements/{library_element_uid}',
  tags: ['library_elements'],
  summary: 'Update library element.',
  description: 'Updates an existing library element identified by uid.',
  operationId: 'updateLibraryElement',
  request: {
    params: z.object({
      library_element_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'library_element_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchLibraryElementCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: GetLibraryElementResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    412: PreconditionFailedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getLibraryElementsLibraryElementUidConnectionsIndexRoute = createRoute({
  method: 'get',
  path: '/library-elements/{library_element_uid}/connections/',
  tags: ['library_elements'],
  summary: 'Get library element connections.',
  description: 'Returns a list of connections for a library element based on the UID specified.',
  operationId: 'getLibraryElementConnections',
  request: {
    params: z.object({
      library_element_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'library_element_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetLibraryElementConnectionsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getLicensingCheckRoute = createRoute({
  method: 'get',
  path: '/licensing/check',
  tags: ['licensing', 'enterprise'],
  summary: 'Check license availability.',
  operationId: 'getStatus',
  responses: { 200: GetStatusResponseResponse },
})

export const getLicensingCustomPermissionsRoute = createRoute({
  method: 'get',
  path: '/licensing/custom-permissions',
  tags: ['licensing', 'enterprise'],
  summary: 'Get custom permissions report.',
  description:
    'You need to have a permission with action `licensing.reports:read`.\n\nDeprecated. There is currently no replacement for this endpoint. Please reach out to Grafana support if you rely on this endpoint.',
  operationId: 'getCustomPermissionsReport',
  responses: { 500: InternalServerErrorResponse },
  deprecated: true,
})

export const getLicensingCustomPermissionsCsvRoute = createRoute({
  method: 'get',
  path: '/licensing/custom-permissions-csv',
  tags: ['licensing', 'enterprise'],
  summary: 'Get custom permissions report in CSV format.',
  description:
    'You need to have a permission with action `licensing.reports:read`.\n\nDeprecated. There is currently no replacement for this endpoint. Please reach out to Grafana support if you rely on this endpoint.',
  operationId: 'getCustomPermissionsCSV',
  responses: { 500: InternalServerErrorResponse },
  deprecated: true,
})

export const getLicensingRefreshStatsRoute = createRoute({
  method: 'get',
  path: '/licensing/refresh-stats',
  tags: ['licensing', 'enterprise'],
  summary: 'Refresh license stats.',
  description: 'You need to have a permission with action `licensing:read`.',
  operationId: 'refreshLicenseStats',
  responses: { 200: RefreshLicenseStatsResponseResponse, 500: InternalServerErrorResponse },
})

export const getLicensingTokenRoute = createRoute({
  method: 'get',
  path: '/licensing/token',
  tags: ['licensing', 'enterprise'],
  summary: 'Get license token.',
  description: 'You need to have a permission with action `licensing:read`.',
  operationId: 'getLicenseToken',
  responses: { 200: GetLicenseTokenResponseResponse },
})

export const postLicensingTokenRoute = createRoute({
  method: 'post',
  path: '/licensing/token',
  tags: ['licensing', 'enterprise'],
  summary: 'Create license token.',
  description: 'You need to have a permission with action `licensing:write`.',
  operationId: 'postLicenseToken',
  request: {
    body: { content: { 'application/json': { schema: DeleteTokenCommandSchema } }, required: true },
  },
  responses: { 200: GetLicenseTokenResponseResponse, 400: BadRequestErrorResponse },
})

export const deleteLicensingTokenRoute = createRoute({
  method: 'delete',
  path: '/licensing/token',
  tags: ['licensing', 'enterprise'],
  summary: 'Remove license from database.',
  description:
    'Removes the license stored in the Grafana database. Available in Grafana Enterprise v7.4+.\n\nYou need to have a permission with action `licensing:delete`.',
  operationId: 'deleteLicenseToken',
  request: {
    body: { content: { 'application/json': { schema: DeleteTokenCommandSchema } }, required: true },
  },
  responses: {
    202: AcceptedResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postLicensingTokenRenewRoute = createRoute({
  method: 'post',
  path: '/licensing/token/renew',
  tags: ['licensing', 'enterprise'],
  summary: 'Manually force license refresh.',
  description:
    'Manually ask license issuer for a new token. Available in Grafana Enterprise v7.4+.\n\nYou need to have a permission with action `licensing:write`.',
  operationId: 'postRenewLicenseToken',
  request: { body: { content: { 'application/json': { schema: z.object({}) } }, required: true } },
  responses: {
    200: PostRenewLicenseTokenResponseResponse,
    401: UnauthorisedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getLogoutSamlRoute = createRoute({
  method: 'get',
  path: '/logout/saml',
  tags: ['saml', 'enterprise'],
  summary: 'GetLogout initiates single logout process.',
  operationId: 'getSAMLLogout',
  responses: {
    302: { description: '(empty)' },
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgRoute = createRoute({
  method: 'get',
  path: '/org',
  tags: ['org'],
  summary: 'Get current Organization.',
  operationId: 'getCurrentOrg',
  responses: {
    200: GetCurrentOrgResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putOrgRoute = createRoute({
  method: 'put',
  path: '/org',
  tags: ['org'],
  summary: 'Update current Organization.',
  operationId: 'updateCurrentOrg',
  request: {
    body: { content: { 'application/json': { schema: UpdateOrgFormSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putOrgAddressRoute = createRoute({
  method: 'put',
  path: '/org/address',
  tags: ['org'],
  summary: "Update current Organization's address.",
  operationId: 'updateCurrentOrgAddress',
  request: {
    body: {
      content: { 'application/json': { schema: UpdateOrgAddressFormSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgInvitesRoute = createRoute({
  method: 'get',
  path: '/org/invites',
  tags: ['org', 'invites'],
  summary: 'Get pending invites.',
  operationId: 'getPendingOrgInvites',
  responses: {
    200: GetPendingOrgInvitesResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postOrgInvitesRoute = createRoute({
  method: 'post',
  path: '/org/invites',
  tags: ['org', 'invites'],
  summary: 'Add invite.',
  operationId: 'addOrgInvite',
  request: {
    body: { content: { 'application/json': { schema: AddInviteFormSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    412: SMTPNotEnabledErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteOrgInvitesInvitationCodeRevokeRoute = createRoute({
  method: 'delete',
  path: '/org/invites/{invitation_code}/revoke',
  tags: ['org', 'invites'],
  summary: 'Revoke invite.',
  operationId: 'revokeInvite',
  request: {
    params: z.object({
      invitation_code: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'invitation_code',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgPreferencesRoute = createRoute({
  method: 'get',
  path: '/org/preferences',
  tags: ['org', 'preferences'],
  summary: 'Get Current Org Prefs.',
  description: 'Use /apis/preferences.grafana.app/v1/namespaces/{namespace}/preferences/namespace',
  operationId: 'getOrgPreferences',
  responses: {
    200: GetPreferencesResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const putOrgPreferencesRoute = createRoute({
  method: 'put',
  path: '/org/preferences',
  tags: ['org', 'preferences'],
  summary: 'Update Current Org Prefs.',
  description: 'Use /apis/preferences.grafana.app/v1/namespaces/{namespace}/preferences/namespace',
  operationId: 'updateOrgPreferences',
  request: {
    body: { content: { 'application/json': { schema: UpdatePrefsCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const patchOrgPreferencesRoute = createRoute({
  method: 'patch',
  path: '/org/preferences',
  tags: ['org', 'preferences'],
  summary: 'Patch Current Org Prefs.',
  description: 'Use /apis/preferences.grafana.app/v1/namespaces/{namespace}/preferences/namespace',
  operationId: 'patchOrgPreferences',
  request: {
    body: { content: { 'application/json': { schema: PatchPrefsCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getOrgQuotasRoute = createRoute({
  method: 'get',
  path: '/org/quotas',
  tags: ['quota', 'org'],
  summary: 'Fetch Organization quota.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:read` and scope `org:id:1` (orgIDScope).',
  operationId: 'getCurrentOrgQuota',
  responses: {
    200: GetQuotaResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgUsersRoute = createRoute({
  method: 'get',
  path: '/org/users',
  tags: ['org'],
  summary: 'Get all users within the current organization.',
  description:
    'Returns all org users within the current organization. Accessible to users with org admin role.\nIf you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:read` with scope `users:*`.',
  operationId: 'getOrgUsersForCurrentOrg',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetOrgUsersForCurrentOrgResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postOrgUsersRoute = createRoute({
  method: 'post',
  path: '/org/users',
  tags: ['org'],
  summary: 'Add a new user to the current organization.',
  description:
    'Adds a global user to the current organization.\n\nIf you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:add` with scope `users:*`.',
  operationId: 'addOrgUserToCurrentOrg',
  request: {
    body: { content: { 'application/json': { schema: AddOrgUserCommandSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgUsersLookupRoute = createRoute({
  method: 'get',
  path: '/org/users/lookup',
  tags: ['org'],
  summary: 'Get all users within the current organization (lookup)',
  description:
    'Returns all org users within the current organization, but with less detailed information.\nAccessible to users with org admin role, admin in any folder or admin of any team.\nMainly used by Grafana UI for providing list of users when adding team members and when editing folder/dashboard permissions.',
  operationId: 'getOrgUsersForCurrentOrgLookup',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetOrgUsersForCurrentOrgLookupResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteOrgUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/org/users/{user_id}',
  tags: ['org'],
  summary: 'Delete user in current organization.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:remove` with scope `users:*`.',
  operationId: 'removeOrgUserForCurrentOrg',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchOrgUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/org/users/{user_id}',
  tags: ['org'],
  summary: 'Updates the given user.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users.role:update` with scope `users:*`.',
  operationId: 'updateOrgUserForCurrentOrg',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrgUserCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgsRoute = createRoute({
  method: 'get',
  path: '/orgs',
  tags: ['orgs'],
  summary: 'Search all Organizations.',
  operationId: 'searchOrgs',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      perpage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1000n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of items per page\nThe totalCount field in the response can be used for pagination list E.g. if totalCount is equal to 100 teams and the perpage parameter is set to 10 then there are 10 pages of teams.',
            in: 'query',
            name: 'perpage',
            schema: { default: 1000, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set it will return results where the query value is contained in the name field. Query values with spaces need to be URL encoded.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: SearchOrgsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postOrgsRoute = createRoute({
  method: 'post',
  path: '/orgs',
  tags: ['orgs'],
  summary: 'Create Organization.',
  description:
    'Only works if [users.allow_org_create](https://grafana.com/docs/grafana/latest/administration/configuration/#allow_org_create) is set.',
  operationId: 'createOrg',
  request: {
    body: { content: { 'application/json': { schema: CreateOrgCommandSchema } }, required: true },
  },
  responses: {
    200: CreateOrgResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgsNameOrgNameRoute = createRoute({
  method: 'get',
  path: '/orgs/name/{org_name}',
  tags: ['orgs'],
  summary: 'Get Organization by Name.',
  operationId: 'getOrgByName',
  request: {
    params: z.object({
      org_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'org_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetOrgByNameResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getOrgsOrgIdRoute = createRoute({
  method: 'get',
  path: '/orgs/{org_id}',
  tags: ['orgs'],
  summary: 'Get Organization by ID.',
  operationId: 'getOrgByID',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetOrgByIDResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const putOrgsOrgIdRoute = createRoute({
  method: 'put',
  path: '/orgs/{org_id}',
  tags: ['orgs'],
  summary: 'Update Organization.',
  operationId: 'updateOrg',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateOrgFormSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const deleteOrgsOrgIdRoute = createRoute({
  method: 'delete',
  path: '/orgs/{org_id}',
  tags: ['orgs'],
  summary: 'Delete Organization.',
  operationId: 'deleteOrgByID',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const putOrgsOrgIdAddressRoute = createRoute({
  method: 'put',
  path: '/orgs/{org_id}/address',
  tags: ['orgs'],
  summary: "Update Organization's address.",
  operationId: 'updateOrgAddress',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrgAddressFormSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgsOrgIdQuotasRoute = createRoute({
  method: 'get',
  path: '/orgs/{org_id}/quotas',
  tags: ['quota', 'orgs'],
  summary: 'Fetch Organization quota.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:read` and scope `org:id:1` (orgIDScope).',
  operationId: 'getOrgQuota',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetQuotaResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putOrgsOrgIdQuotasQuotaTargetRoute = createRoute({
  method: 'put',
  path: '/orgs/{org_id}/quotas/{quota_target}',
  tags: ['quota', 'orgs'],
  summary: 'Update user quota.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled, you need to have a permission with action `orgs.quotas:write` and scope `org:id:1` (orgIDScope).',
  operationId: 'updateOrgQuota',
  request: {
    params: z.object({
      quota_target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'quota_target', required: true, schema: { type: 'string' } },
        }),
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateQuotaCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getOrgsOrgIdUsersRoute = createRoute({
  method: 'get',
  path: '/orgs/{org_id}/users',
  tags: ['orgs'],
  summary: 'Get Users in Organization.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:read` with scope `users:*`.',
  operationId: 'getOrgUsers',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetOrgUsersResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const postOrgsOrgIdUsersRoute = createRoute({
  method: 'post',
  path: '/orgs/{org_id}/users',
  tags: ['orgs'],
  summary: 'Add a new user to the current organization.',
  description:
    'Adds a global user to the current organization.\n\nIf you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:add` with scope `users:*`.',
  operationId: 'addOrgUser',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddOrgUserCommandSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getOrgsOrgIdUsersSearchRoute = createRoute({
  method: 'get',
  path: '/orgs/{org_id}/users/search',
  tags: ['orgs'],
  summary: 'Search Users in Organization.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:read` with scope `users:*`.',
  operationId: 'searchOrgUsers',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: SearchOrgUsersResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const deleteOrgsOrgIdUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/orgs/{org_id}/users/{user_id}',
  tags: ['orgs'],
  summary: 'Delete user in current organization.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users:remove` with scope `users:*`.',
  operationId: 'removeOrgUser',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchOrgsOrgIdUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/orgs/{org_id}/users/{user_id}',
  tags: ['orgs'],
  summary: 'Update Users in Organization.',
  description:
    'If you are running Grafana Enterprise and have Fine-grained access control enabled\nyou need to have a permission with action: `org.users.role:update` with scope `users:*`.',
  operationId: 'updateOrgUser',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrgUserCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getPlaylistsRoute = createRoute({
  method: 'get',
  path: '/playlists',
  tags: ['playlists'],
  summary: 'Get playlists.',
  description: 'Please refer to [new API](?api=playlist.grafana.app-v1).',
  operationId: 'searchPlaylists',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: SearchPlaylistsResponseResponse, 500: InternalServerErrorResponse },
  deprecated: true,
})

export const postPlaylistsRoute = createRoute({
  method: 'post',
  path: '/playlists',
  tags: ['playlists'],
  summary: 'Create playlist.',
  description: 'Please refer to [new API](?api=playlist.grafana.app-v1).',
  operationId: 'createPlaylist',
  request: {
    body: {
      content: { 'application/json': { schema: CreatePlaylistCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: CreatePlaylistResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getPlaylistsUidRoute = createRoute({
  method: 'get',
  path: '/playlists/{uid}',
  tags: ['playlists'],
  summary: 'Get playlist.',
  description: 'Please refer to [new API](?api=playlist.grafana.app-v1).',
  operationId: 'getPlaylist',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetPlaylistResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const putPlaylistsUidRoute = createRoute({
  method: 'put',
  path: '/playlists/{uid}',
  tags: ['playlists'],
  summary: 'Update playlist.',
  description: 'Please refer to [new API](?api=playlist.grafana.app-v1).',
  operationId: 'updatePlaylist',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePlaylistCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdatePlaylistResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const deletePlaylistsUidRoute = createRoute({
  method: 'delete',
  path: '/playlists/{uid}',
  tags: ['playlists'],
  summary: 'Delete playlist.',
  description: 'Please refer to [new API](?api=playlist.grafana.app-v1).',
  operationId: 'deletePlaylist',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getPlaylistsUidItemsRoute = createRoute({
  method: 'get',
  path: '/playlists/{uid}/items',
  tags: ['playlists'],
  summary: 'Get playlist items.',
  description:
    'Please refer to [new API](?api=playlist.grafana.app-v1) instead (items are included in the playlist spec).',
  operationId: 'getPlaylistItems',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetPlaylistItemsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getPublicDashboardsAccessTokenRoute = createRoute({
  method: 'get',
  path: '/public/dashboards/{accessToken}',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Get public dashboard for view',
  operationId: 'viewPublicDashboard',
  request: {
    params: z.object({
      accessToken: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accessToken', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: ViewPublicDashboardResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    404: NotFoundPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const getPublicDashboardsAccessTokenAnnotationsRoute = createRoute({
  method: 'get',
  path: '/public/dashboards/{accessToken}/annotations',
  tags: ['dashboards', 'annotations', 'dashboard_public'],
  description: 'Get annotations for a public dashboard',
  operationId: 'getPublicAnnotations',
  request: {
    params: z.object({
      accessToken: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accessToken', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetPublicAnnotationsResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    404: NotFoundPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute = createRoute({
  method: 'post',
  path: '/public/dashboards/{accessToken}/panels/{panelId}/query',
  tags: ['dashboards', 'dashboard_public'],
  description: 'Get results for a given panel on a public dashboard',
  operationId: 'queryPublicDashboard',
  request: {
    params: z.object({
      accessToken: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accessToken', required: true, schema: { type: 'string' } },
        }),
      panelId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'panelId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: QueryPublicDashboardResponseResponse,
    400: BadRequestPublicErrorResponse,
    401: UnauthorisedPublicErrorResponse,
    403: ForbiddenPublicErrorResponse,
    404: NotFoundPublicErrorResponse,
    500: InternalServerPublicErrorResponse,
  },
})

export const getQueryHistoryRoute = createRoute({
  method: 'get',
  path: '/query-history',
  tags: ['query_history'],
  summary: 'Query history search.',
  description:
    'Returns a list of queries in the query history that matches the search criteria.\nQuery history search supports pagination. Use the `limit` parameter to control the maximum number of queries returned; the default limit is 100.\nYou can also use the `page` query parameter to fetch queries from any page other than the first one.',
  operationId: 'searchQueries',
  request: {
    query: z.object({
      datasourceUid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of data source UIDs to search for',
            explode: true,
            in: 'query',
            name: 'datasourceUid',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text inside query or comments that is searched for',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onlyStarred: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag indicating if only starred queries should be returned',
            in: 'query',
            name: 'onlyStarred',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      sort: z
        .enum(['time-desc', 'time-asc'])
        .default('time-desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort method',
            in: 'query',
            name: 'sort',
            schema: { default: 'time-desc', enum: ['time-desc', 'time-asc'], type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Use this parameter to access hits beyond limit. Numbering starts at 1. limit param acts as page size.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned results',
            in: 'query',
            name: 'limit',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      from: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'From range for the query history search',
            in: 'query',
            name: 'from',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      to: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'To range for the query history search',
            in: 'query',
            name: 'to',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetQueryHistorySearchResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postQueryHistoryRoute = createRoute({
  method: 'post',
  path: '/query-history',
  tags: ['query_history'],
  summary: 'Add query to query history.',
  description: 'Adds new query to query history.',
  operationId: 'createQuery',
  request: {
    body: {
      content: { 'application/json': { schema: CreateQueryInQueryHistoryCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: GetQueryHistoryResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postQueryHistoryStarQueryHistoryUidRoute = createRoute({
  method: 'post',
  path: '/query-history/star/{query_history_uid}',
  tags: ['query_history'],
  summary: 'Add star to query in query history.',
  description: 'Adds star to query in query history as specified by the UID.',
  operationId: 'starQuery',
  request: {
    params: z.object({
      query_history_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'query_history_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetQueryHistoryResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteQueryHistoryStarQueryHistoryUidRoute = createRoute({
  method: 'delete',
  path: '/query-history/star/{query_history_uid}',
  tags: ['query_history'],
  summary: 'Remove star to query in query history.',
  description: 'Removes star from query in query history as specified by the UID.',
  operationId: 'unstarQuery',
  request: {
    params: z.object({
      query_history_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'query_history_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetQueryHistoryResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteQueryHistoryQueryHistoryUidRoute = createRoute({
  method: 'delete',
  path: '/query-history/{query_history_uid}',
  tags: ['query_history'],
  summary: 'Delete query in query history.',
  description:
    'Deletes an existing query in query history as specified by the UID. This operation cannot be reverted.',
  operationId: 'deleteQuery',
  request: {
    params: z.object({
      query_history_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'query_history_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: GetQueryHistoryDeleteQueryResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchQueryHistoryQueryHistoryUidRoute = createRoute({
  method: 'patch',
  path: '/query-history/{query_history_uid}',
  tags: ['query_history'],
  summary: 'Update comment for query in query history.',
  description: 'Updates comment for query in query history as specified by the UID.',
  operationId: 'patchQueryComment',
  request: {
    params: z.object({
      query_history_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'query_history_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchQueryCommentInQueryHistoryCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: GetQueryHistoryResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getRecordingRulesRoute = createRoute({
  method: 'get',
  path: '/recording-rules',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Lists all rules in the database: active or deleted.',
  operationId: 'listRecordingRules',
  responses: {
    200: ListRecordingRulesResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putRecordingRulesRoute = createRoute({
  method: 'put',
  path: '/recording-rules',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Update the active status of a rule.',
  operationId: 'updateRecordingRule',
  request: {
    body: { content: { 'application/json': { schema: RecordingRuleJSONSchema } }, required: true },
  },
  responses: {
    200: RecordingRuleResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postRecordingRulesRoute = createRoute({
  method: 'post',
  path: '/recording-rules',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Create a recording rule that is then registered and started.',
  operationId: 'createRecordingRule',
  request: {
    body: { content: { 'application/json': { schema: RecordingRuleJSONSchema } }, required: true },
  },
  responses: {
    200: RecordingRuleResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postRecordingRulesTestRoute = createRoute({
  method: 'post',
  path: '/recording-rules/test',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Test a recording rule.',
  operationId: 'testCreateRecordingRule',
  request: {
    body: { content: { 'application/json': { schema: RecordingRuleJSONSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getRecordingRulesWriterRoute = createRoute({
  method: 'get',
  path: '/recording-rules/writer',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Return the prometheus remote write target.',
  operationId: 'getRecordingRuleWriteTarget',
  responses: {
    200: RecordingRuleWriteTargetResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postRecordingRulesWriterRoute = createRoute({
  method: 'post',
  path: '/recording-rules/writer',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Create a remote write target.',
  description: 'It returns a 422 if there is not an existing prometheus data source configured.',
  operationId: 'createRecordingRuleWriteTarget',
  request: {
    body: {
      content: { 'application/json': { schema: PrometheusRemoteWriteTargetJSONSchema } },
      required: true,
    },
  },
  responses: {
    200: RecordingRuleWriteTargetResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteRecordingRulesWriterRoute = createRoute({
  method: 'delete',
  path: '/recording-rules/writer',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Delete the remote write target.',
  operationId: 'deleteRecordingRuleWriteTarget',
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteRecordingRulesRecordingRuleIDRoute = createRoute({
  method: 'delete',
  path: '/recording-rules/{recordingRuleID}',
  tags: ['recording_rules', 'enterprise'],
  summary: 'Delete removes the rule from the registry and stops it.',
  operationId: 'deleteRecordingRule',
  request: {
    params: z.object({
      recordingRuleID: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'recordingRuleID',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsRoute = createRoute({
  method: 'get',
  path: '/reports',
  tags: ['reports', 'enterprise'],
  summary: 'List reports.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports:read` with scope `reports:*`.',
  operationId: 'getReports',
  responses: {
    200: GetReportsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postReportsRoute = createRoute({
  method: 'post',
  path: '/reports',
  tags: ['reports', 'enterprise'],
  summary: 'Create a report.',
  description:
    'Available to org admins only and with a valid license.\n\nYou need to have a permission with action `reports.admin:create`.',
  operationId: 'createReport',
  request: {
    body: {
      content: { 'application/json': { schema: CreateOrUpdateReportSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateReportResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsDashboardsUidRoute = createRoute({
  method: 'get',
  path: '/reports/dashboards/{uid}',
  tags: ['reports', 'enterprise'],
  summary: 'List reports by dashboard uid.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports:read` with scope `reports:*`.',
  operationId: 'getReportsByDashboardUID',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetReportsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postReportsEmailRoute = createRoute({
  method: 'post',
  path: '/reports/email',
  tags: ['reports', 'enterprise'],
  summary: 'Send a report.',
  description:
    'Generate and send a report. This API waits for the report to be generated before returning. We recommend that you set the client’s timeout to at least 60 seconds. Available to org admins only and with a valid license.\n\nOnly available in Grafana Enterprise v7.0+.\nThis API endpoint is experimental and may be deprecated in a future release. On deprecation, a migration strategy will be provided and the endpoint will remain functional until the next major release of Grafana.\n\nYou need to have a permission with action `reports:send`.',
  operationId: 'sendReport',
  request: {
    body: { content: { 'application/json': { schema: ReportEmailSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsImagesImageRoute = createRoute({
  method: 'get',
  path: '/reports/images/:image',
  tags: ['reports', 'enterprise'],
  summary: 'Get custom branding report image.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports.settings:read`.',
  operationId: 'getSettingsImage',
  responses: {
    200: ContentResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsRenderCsvsRoute = createRoute({
  method: 'get',
  path: '/reports/render/csvs',
  tags: ['reports', 'enterprise'],
  summary: 'Download a CSV report.',
  description: 'Available to all users and with a valid license.',
  operationId: 'renderReportCSVs',
  request: {
    query: z.object({
      dashboards: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'dashboards', schema: { type: 'string' }, required: false },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'title', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: ContentResponseResponse,
    204: NoContentResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsRenderPdfsRoute = createRoute({
  method: 'get',
  path: '/reports/render/pdfs',
  tags: ['reports', 'enterprise'],
  summary: 'Render report for multiple dashboards.',
  description: 'Available to all users and with a valid license.',
  operationId: 'renderReportPDFs',
  request: {
    query: z.object({
      dashboards: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'dashboards', schema: { type: 'string' }, required: false },
        }),
      orientation: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'orientation', schema: { type: 'string' }, required: false },
        }),
      layout: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'layout', schema: { type: 'string' }, required: false },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'title', schema: { type: 'string' }, required: false },
        }),
      scaleFactor: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'scaleFactor', schema: { type: 'string' }, required: false },
        }),
      includeTables: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeTables',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: ContentResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsSettingsRoute = createRoute({
  method: 'get',
  path: '/reports/settings',
  tags: ['reports', 'enterprise'],
  summary: 'Get report settings.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports.settings:read`x.',
  operationId: 'getReportSettings',
  responses: {
    200: GetReportSettingsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postReportsSettingsRoute = createRoute({
  method: 'post',
  path: '/reports/settings',
  tags: ['reports', 'enterprise'],
  summary: 'Save settings.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports.settings:write`xx.',
  operationId: 'saveReportSettings',
  request: {
    body: { content: { 'application/json': { schema: ReportSettingsSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postReportsTestEmailRoute = createRoute({
  method: 'post',
  path: '/reports/test-email',
  tags: ['reports', 'enterprise'],
  summary: 'Send test report via email.',
  description:
    'Available to org admins only and with a valid license.\n\nYou need to have a permission with action `reports:send`.',
  operationId: 'sendTestEmail',
  request: {
    body: {
      content: { 'application/json': { schema: CreateOrUpdateReportSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getReportsIdRoute = createRoute({
  method: 'get',
  path: '/reports/{id}',
  tags: ['reports', 'enterprise'],
  summary: 'Get a report.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports:read` with scope `reports:id:<report ID>`.\n\nRequesting reports using the internal id will stop workgin in the future\nUse the reporting apiserver to manage reports.  See: /apis/reporting.grafana.app/',
  operationId: 'getReport',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetReportResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const putReportsIdRoute = createRoute({
  method: 'put',
  path: '/reports/{id}',
  tags: ['reports', 'enterprise'],
  summary: 'Update a report.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports.admin:write` with scope `reports:id:<report ID>`.\n\nRequesting reports using the internal id will stop workgin in the future\nUse the reporting apiserver to manage reports.  See: /apis/reporting.grafana.app/',
  operationId: 'updateReport',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrUpdateReportSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const deleteReportsIdRoute = createRoute({
  method: 'delete',
  path: '/reports/{id}',
  tags: ['reports', 'enterprise'],
  summary: 'Delete a report.',
  description:
    'Available to org admins only and with a valid or expired license.\n\nYou need to have a permission with action `reports.delete` with scope `reports:id:<report ID>`.\n\nRequesting reports using the internal id will stop workgin in the future\nUse the reporting apiserver to manage reports.  See: /apis/reporting.grafana.app/',
  operationId: 'deleteReport',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const postSamlAcsRoute = createRoute({
  method: 'post',
  path: '/saml/acs',
  tags: ['saml', 'enterprise'],
  summary: 'It performs Assertion Consumer Service (ACS).',
  operationId: 'postACS',
  request: {
    query: z.object({
      RelayState: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'RelayState', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    302: { description: '(empty)' },
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSamlMetadataRoute = createRoute({
  method: 'get',
  path: '/saml/metadata',
  tags: ['saml', 'enterprise'],
  summary: "It exposes the SP (Grafana's) metadata for the IdP's consumption.",
  operationId: 'getMetadata',
  responses: { 200: ContentResponseResponse },
})

export const getSamlSloRoute = createRoute({
  method: 'get',
  path: '/saml/slo',
  tags: ['saml', 'enterprise'],
  summary: 'It performs Single Logout (SLO) callback.',
  description:
    'There might be two possible requests:\n1. Logout response (callback) when Grafana initiates single logout and IdP returns response to logout request.\n2. Logout request when another SP initiates single logout and IdP sends logout request to the Grafana,\nor in case of IdP-initiated logout.',
  operationId: 'getSLO',
  responses: {
    302: { description: '(empty)' },
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postSamlSloRoute = createRoute({
  method: 'post',
  path: '/saml/slo',
  tags: ['saml', 'enterprise'],
  summary: 'It performs Single Logout (SLO) callback.',
  description:
    'There might be two possible requests:\n1. Logout response (callback) when Grafana initiates single logout and IdP returns response to logout request.\n2. Logout request when another SP initiates single logout and IdP sends logout request to the Grafana,\nor in case of IdP-initiated logout.',
  operationId: 'postSLO',
  request: {
    query: z.object({
      SAMLRequest: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'SAMLRequest', schema: { type: 'string' }, required: false },
        }),
      SAMLResponse: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'SAMLResponse', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    302: { description: '(empty)' },
    400: BadRequestErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['search'],
  operationId: 'search',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search Query',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of tags to search for',
            explode: true,
            in: 'query',
            name: 'tag',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      type: z
        .enum(['dash-folder', 'dash-db'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Type to search for, dash-folder or dash-db\nDescription:\n- `dash-folder` - Search for folder\n- `dash-db` - Seatch for dashboard',
            in: 'query',
            name: 'type',
            schema: { enum: ['dash-folder', 'dash-db'], type: 'string' },
            required: false,
          },
        }),
      dashboardIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of dashboard id’s to search for\nThis is deprecated: users should use the `dashboardUIDs` query parameter instead',
            in: 'query',
            name: 'dashboardIds',
            schema: { items: { format: 'int64', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      dashboardUIDs: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of dashboard uid’s to search for',
            in: 'query',
            name: 'dashboardUIDs',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      folderIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .preprocess((val) => {
                if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                  return val
                if (/^-?\d+$/.test(val)) return BigInt(val)
                const num = Number(val)
                return Number.isSafeInteger(num) ? BigInt(num) : val
              }, z.int64())
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "List of folder id’s to search in for dashboards\nIf it's `0` then it will query for the top level folders\nThis is deprecated: users should use the `folderUIDs` query parameter instead\n\nDeprecated: use FolderUIDs instead",
            in: 'query',
            name: 'folderIds',
            schema: { items: { format: 'int64', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      folderUIDs: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "List of folder UID’s to search in for dashboards\nIf it's an empty string then it will query for the top level folders",
            in: 'query',
            name: 'folderUIDs',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      starred: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag indicating if only starred Dashboards should be returned',
            in: 'query',
            name: 'starred',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of returned results (max 5000)',
            in: 'query',
            name: 'limit',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'Use this parameter to access hits beyond limit. Numbering starts at 1. limit param acts as page size. Only available in Grafana v6.2+.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      permission: z
        .enum(['Edit', 'View'])
        .default('View')
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to `Edit` to return dashboards/folders that the user can edit',
            in: 'query',
            name: 'permission',
            schema: { default: 'View', enum: ['Edit', 'View'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['alpha-asc', 'alpha-desc'])
        .default('alpha-asc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort method; for listing all the possible sort methods use the search sorting endpoint.',
            in: 'query',
            name: 'sort',
            schema: { default: 'alpha-asc', enum: ['alpha-asc', 'alpha-desc'], type: 'string' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag indicating if only soft deleted Dashboards should be returned',
            in: 'query',
            name: 'deleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: SearchResponseResponse,
    401: UnauthorisedErrorResponse,
    422: UnprocessableEntityErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSearchSortingRoute = createRoute({
  method: 'get',
  path: '/search/sorting',
  tags: ['search'],
  summary: 'List search sorting options.',
  operationId: 'listSortOptions',
  responses: { 200: ListSortOptionsResponseResponse, 401: UnauthorisedErrorResponse },
})

export const postServiceaccountsRoute = createRoute({
  method: 'post',
  path: '/serviceaccounts',
  tags: ['service_accounts'],
  summary: 'Create service account',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:write` scope: `serviceaccounts:*`\n\nRequires basic authentication and that the authenticated user is a Grafana Admin.',
  operationId: 'createServiceAccount',
  request: {
    body: { content: { 'application/json': { schema: CreateServiceAccountFormSchema } } },
  },
  responses: {
    201: CreateServiceAccountResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getServiceaccountsSearchRoute = createRoute({
  method: 'get',
  path: '/serviceaccounts/search',
  tags: ['service_accounts'],
  summary: 'Search service accounts with paging',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:read` scope: `serviceaccounts:*`',
  operationId: 'searchOrgServiceAccountsWithPaging',
  request: {
    query: z.object({
      Disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Disabled', schema: { type: 'boolean' }, required: false },
        }),
      expiredTokens: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expiredTokens',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'It will return results where the query value is contained in one of the name.\nQuery values with spaces need to be URL encoded.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      perpage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The default value is 1000.',
            in: 'query',
            name: 'perpage',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'The default value is 1.',
            in: 'query',
            name: 'page',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: SearchOrgServiceAccountsWithPagingResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getServiceaccountsServiceAccountIdRoute = createRoute({
  method: 'get',
  path: '/serviceaccounts/{serviceAccountId}',
  tags: ['service_accounts'],
  summary: 'Get single serviceaccount by Id',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:read` scope: `serviceaccounts:id:1` (single service account)',
  operationId: 'retrieveServiceAccount',
  request: {
    params: z.object({
      serviceAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: RetrieveServiceAccountResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteServiceaccountsServiceAccountIdRoute = createRoute({
  method: 'delete',
  path: '/serviceaccounts/{serviceAccountId}',
  tags: ['service_accounts'],
  summary: 'Delete service account',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:delete` scope: `serviceaccounts:id:1` (single service account)',
  operationId: 'deleteServiceAccount',
  request: {
    params: z.object({
      serviceAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchServiceaccountsServiceAccountIdRoute = createRoute({
  method: 'patch',
  path: '/serviceaccounts/{serviceAccountId}',
  tags: ['service_accounts'],
  summary: 'Update service account',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:write` scope: `serviceaccounts:id:1` (single service account)',
  operationId: 'updateServiceAccount',
  request: {
    params: z.object({
      serviceAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateServiceAccountFormSchema } } },
  },
  responses: {
    200: UpdateServiceAccountResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getServiceaccountsServiceAccountIdTokensRoute = createRoute({
  method: 'get',
  path: '/serviceaccounts/{serviceAccountId}/tokens',
  tags: ['service_accounts'],
  summary: 'Get service account tokens',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:read` scope: `global:serviceaccounts:id:1` (single service account)\n\nRequires basic authentication and that the authenticated user is a Grafana Admin.',
  operationId: 'listTokens',
  request: {
    params: z.object({
      serviceAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: ListTokensResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postServiceaccountsServiceAccountIdTokensRoute = createRoute({
  method: 'post',
  path: '/serviceaccounts/{serviceAccountId}/tokens',
  tags: ['service_accounts'],
  summary: 'CreateNewToken adds a token to a service account',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:write` scope: `serviceaccounts:id:1` (single service account)',
  operationId: 'createToken',
  request: {
    params: z.object({
      serviceAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddServiceAccountTokenCommandSchema } } },
  },
  responses: {
    200: CreateTokenResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteServiceaccountsServiceAccountIdTokensTokenIdRoute = createRoute({
  method: 'delete',
  path: '/serviceaccounts/{serviceAccountId}/tokens/{tokenId}',
  tags: ['service_accounts'],
  summary: 'DeleteToken deletes service account tokens',
  description:
    'Required permissions (See note in the [introduction](https://grafana.com/docs/grafana/latest/developers/http_api/serviceaccount/#service-account-api) for an explanation):\naction: `serviceaccounts:write` scope: `serviceaccounts:id:1` (single service account)\n\nRequires basic authentication and that the authenticated user is a Grafana Admin.',
  operationId: 'deleteToken',
  request: {
    params: z.object({
      tokenId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'tokenId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      serviceAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSigningKeysKeysRoute = createRoute({
  method: 'get',
  path: '/signing-keys/keys',
  tags: ['signing_keys'],
  summary:
    'Get JSON Web Key Set (JWKS) with all the keys that can be used to verify tokens (public keys)',
  description: 'Required permissions\nNone',
  operationId: 'retrieveJWKS',
  responses: { 200: JwksResponseResponse, 500: InternalServerErrorResponse },
})

export const getSnapshotSharedOptionsRoute = createRoute({
  method: 'get',
  path: '/snapshot/shared-options',
  tags: ['snapshots'],
  summary: 'Get snapshot sharing settings.',
  operationId: 'getSharingOptions',
  responses: { 200: GetSharingOptionsResponseResponse, 401: UnauthorisedErrorResponse },
})

export const postSnapshotsRoute = createRoute({
  method: 'post',
  path: '/snapshots',
  tags: ['dashboards', 'snapshots'],
  summary:
    'When creating a snapshot using the API, you have to provide the full dashboard payload including the snapshot data. This endpoint is designed for the Grafana UI.',
  description: 'Snapshot public mode should be enabled or authentication is required.',
  operationId: 'createDashboardSnapshot',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDashboardSnapshotCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateDashboardSnapshotResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSnapshotsDeleteDeleteKeyRoute = createRoute({
  method: 'get',
  path: '/snapshots-delete/{deleteKey}',
  tags: ['dashboards', 'snapshots'],
  summary: 'Delete Snapshot by deleteKey.',
  description: 'Snapshot public mode should be enabled or authentication is required.',
  operationId: 'deleteDashboardSnapshotByDeleteKey',
  request: {
    params: z.object({
      deleteKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deleteKey', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getSnapshotsKeyRoute = createRoute({
  method: 'get',
  path: '/snapshots/{key}',
  tags: ['dashboards', 'snapshots'],
  summary: 'Get Snapshot by Key.',
  operationId: 'getDashboardSnapshot',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetDashboardSnapshotResponseResponse,
    400: BadRequestErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteSnapshotsKeyRoute = createRoute({
  method: 'delete',
  path: '/snapshots/{key}',
  tags: ['dashboards', 'snapshots'],
  summary: 'Delete Snapshot by Key.',
  operationId: 'deleteDashboardSnapshot',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsRoute = createRoute({
  method: 'post',
  path: '/teams',
  tags: ['teams'],
  summary: 'Add Team.',
  operationId: 'createTeam',
  request: {
    body: { content: { 'application/json': { schema: CreateTeamCommandSchema } }, required: true },
  },
  responses: {
    200: CreateTeamResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsSearchRoute = createRoute({
  method: 'get',
  path: '/teams/search',
  tags: ['teams'],
  summary: 'Team Search With Paging.',
  operationId: 'searchTeams',
  request: {
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      perpage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1000n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of items per page\nThe totalCount field in the response can be used for pagination list E.g. if totalCount is equal to 100 teams and the perpage parameter is set to 10 then there are 10 pages of teams.',
            in: 'query',
            name: 'perpage',
            schema: { default: 1000, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set it will return results where the query value is contained in the name field. Query values with spaces need to be URL encoded.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      accesscontrol: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'accesscontrol',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'sort', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: SearchTeamsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamIdGroupsRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/groups',
  tags: ['sync_team_groups', 'enterprise'],
  summary: 'Get External Groups.',
  operationId: 'getTeamGroupsApi',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'teamId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetTeamGroupsApiResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsTeamIdGroupsRoute = createRoute({
  method: 'post',
  path: '/teams/{teamId}/groups',
  tags: ['sync_team_groups', 'enterprise'],
  summary: 'Add External Group.',
  operationId: 'addTeamGroupApi',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'teamId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: TeamGroupMappingSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteTeamsTeamIdGroupsRoute = createRoute({
  method: 'delete',
  path: '/teams/{teamId}/groups',
  tags: ['sync_team_groups', 'enterprise'],
  summary: 'Remove External Group.',
  operationId: 'removeTeamGroupApiQuery',
  request: {
    query: z.object({
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupId', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'teamId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamIdGroupsSearchRoute = createRoute({
  method: 'get',
  path: '/teams/{teamId}/groups/search',
  tags: ['sync_team_groups', 'enterprise'],
  summary: 'Search for team groups with optional filtering and pagination.',
  operationId: 'searchTeamGroups',
  request: {
    params: z.object({
      teamId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      perpage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1000n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of items per page',
            in: 'query',
            name: 'perpage',
            schema: { default: 1000, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set it will return results where the query value is contained in the name field. Query values with spaces need to be URL encoded.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by exact name match',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: SearchTeamGroupsResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}',
  tags: ['teams'],
  summary: 'Get Team By ID.',
  operationId: 'getTeamByID',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      accesscontrol: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'accesscontrol',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: GetTeamByIDResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTeamsTeamIdRoute = createRoute({
  method: 'put',
  path: '/teams/{team_id}',
  tags: ['teams'],
  summary: 'Update Team.',
  operationId: 'updateTeam',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTeamCommandSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteTeamsTeamIdRoute = createRoute({
  method: 'delete',
  path: '/teams/{team_id}',
  tags: ['teams'],
  summary: 'Delete Team By ID.',
  operationId: 'deleteTeamByID',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamIdMembersRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}/members',
  tags: ['teams'],
  summary: 'Get Team Members.',
  operationId: 'getTeamMembers',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetTeamMembersResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTeamsTeamIdMembersRoute = createRoute({
  method: 'put',
  path: '/teams/{team_id}/members',
  tags: ['teams'],
  summary: 'Set team memberships.',
  description:
    'Takes user emails, and updates team members and admins to the provided lists of users.\nAny current team members and admins not in the provided lists will be removed.',
  operationId: 'setTeamMemberships',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetTeamMembershipsCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTeamsTeamIdMembersRoute = createRoute({
  method: 'post',
  path: '/teams/{team_id}/members',
  tags: ['teams'],
  summary: 'Add Team Member.',
  operationId: 'addTeamMember',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddTeamMemberCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTeamsTeamIdMembersUserIdRoute = createRoute({
  method: 'put',
  path: '/teams/{team_id}/members/{user_id}',
  tags: ['teams'],
  summary: 'Update Team Member.',
  operationId: 'updateTeamMember',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTeamMemberCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteTeamsTeamIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/teams/{team_id}/members/{user_id}',
  tags: ['teams'],
  summary: 'Remove Member From Team.',
  operationId: 'removeTeamMember',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getTeamsTeamIdPreferencesRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}/preferences',
  tags: ['teams', 'preferences'],
  summary: 'Get Team Preferences.',
  operationId: 'getTeamPreferences',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetPreferencesResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTeamsTeamIdPreferencesRoute = createRoute({
  method: 'put',
  path: '/teams/{team_id}/preferences',
  tags: ['teams', 'preferences'],
  summary: 'Update Team Preferences.',
  operationId: 'updateTeamPreferences',
  request: {
    params: z.object({
      team_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'team_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdatePrefsCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['signed_in_user'],
  description: 'Get (current authenticated user)',
  operationId: 'getSignedInUser',
  responses: {
    200: UserResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putUserRoute = createRoute({
  method: 'put',
  path: '/user',
  tags: ['signed_in_user'],
  summary: 'Update signed in User.',
  operationId: 'updateSignedInUser',
  request: {
    body: {
      description: 'To change the email, name, login, theme, provide another one.',
      content: { 'application/json': { schema: UpdateUserCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUserAuthTokensRoute = createRoute({
  method: 'get',
  path: '/user/auth-tokens',
  tags: ['signed_in_user'],
  summary: 'Auth tokens of the actual User.',
  description:
    'Return a list of all auth tokens (devices) that the actual user currently have logged in from.',
  operationId: 'getUserAuthTokens',
  responses: {
    200: GetUserAuthTokensResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUserEmailUpdateRoute = createRoute({
  method: 'get',
  path: '/user/email/update',
  tags: ['user'],
  summary: 'Update user email.',
  description: 'Update the email of user given a verification code.',
  operationId: 'updateUserEmail',
  responses: { 302: OkResponseResponse },
})

export const getUserOrgsRoute = createRoute({
  method: 'get',
  path: '/user/orgs',
  tags: ['signed_in_user'],
  summary: 'Organizations of the actual User.',
  description: 'Return a list of all organizations of the current user.',
  operationId: 'getSignedInUserOrgList',
  responses: {
    200: GetSignedInUserOrgListResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const putUserPasswordRoute = createRoute({
  method: 'put',
  path: '/user/password',
  tags: ['signed_in_user'],
  summary: 'Change Password.',
  description: 'Changes the password for the user.',
  operationId: 'changeUserPassword',
  request: {
    body: {
      description: 'To change the email, name, login, theme, provide another one.',
      content: { 'application/json': { schema: ChangeUserPasswordCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  security: [{ basic: [] }],
})

export const getUserPreferencesRoute = createRoute({
  method: 'get',
  path: '/user/preferences',
  tags: ['signed_in_user', 'preferences'],
  summary: 'Get user preferences.',
  description: 'Use /apis/preferences.grafana.app/v1/namespaces/{namespace}/preferences/user-{uid}',
  operationId: 'getUserPreferences',
  responses: {
    200: GetPreferencesResponseResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const putUserPreferencesRoute = createRoute({
  method: 'put',
  path: '/user/preferences',
  tags: ['signed_in_user', 'preferences'],
  summary: 'Update user preferences.',
  description:
    'Use /apis/preferences.grafana.app/v1/namespaces/{namespace}/preferences/user-{uid}\n\n\nOmitting a key (`theme`, `homeDashboardUID`, `timezone`) will cause the current value to be replaced with the system default value.',
  operationId: 'updateUserPreferences',
  request: {
    body: { content: { 'application/json': { schema: UpdatePrefsCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const patchUserPreferencesRoute = createRoute({
  method: 'patch',
  path: '/user/preferences',
  tags: ['signed_in_user', 'preferences'],
  summary: 'Patch user preferences.',
  description: 'Use /apis/preferences.grafana.app/v1/namespaces/{namespace}/preferences/user-{uid}',
  operationId: 'patchUserPreferences',
  request: {
    body: { content: { 'application/json': { schema: PatchPrefsCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getUserQuotasRoute = createRoute({
  method: 'get',
  path: '/user/quotas',
  tags: ['quota', 'signed_in_user'],
  summary: 'Fetch user quota.',
  operationId: 'getUserQuotas',
  responses: {
    200: GetQuotaResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postUserRevokeAuthTokenRoute = createRoute({
  method: 'post',
  path: '/user/revoke-auth-token',
  tags: ['signed_in_user'],
  summary: 'Revoke an auth token of the actual User.',
  description:
    'Revokes the given auth token (device) for the actual user. User of issued auth token (device) will no longer be logged in and will be required to authenticate again upon next activity.',
  operationId: 'revokeUserAuthToken',
  request: {
    body: { content: { 'application/json': { schema: RevokeAuthTokenCmdSchema } }, required: true },
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postUserStarsDashboardUidDashboardUidRoute = createRoute({
  method: 'post',
  path: '/user/stars/dashboard/uid/{dashboard_uid}',
  tags: ['signed_in_user'],
  summary: 'Star a dashboard.',
  description:
    'Stars the given Dashboard for the actual user.\n\nUse: PUT /apis/collections.grafana.app/v1alpha1/namespaces/{namespace}/stars/{name}/update/{group}/{kind}/{id}',
  operationId: 'starDashboardByUID',
  request: {
    params: z.object({
      dashboard_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dashboard_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const deleteUserStarsDashboardUidDashboardUidRoute = createRoute({
  method: 'delete',
  path: '/user/stars/dashboard/uid/{dashboard_uid}',
  tags: ['signed_in_user'],
  summary: 'Unstar a dashboard.',
  description:
    'Deletes the starring of the given Dashboard for the actual user.\n\nUse: DELETE /apis/collections.grafana.app/v1alpha1/namespaces/{namespace}/stars/{name}/update/{group}/{kind}/{id}',
  operationId: 'unstarDashboardByUID',
  request: {
    params: z.object({
      dashboard_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dashboard_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
  deprecated: true,
})

export const getUserTeamsRoute = createRoute({
  method: 'get',
  path: '/user/teams',
  tags: ['signed_in_user'],
  summary: 'Teams that the actual User is member of.',
  description: 'Return a list of all teams that the current user is member of.',
  operationId: 'getSignedInUserTeamList',
  responses: {
    200: GetSignedInUserTeamListResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postUserUsingOrgIdRoute = createRoute({
  method: 'post',
  path: '/user/using/{org_id}',
  tags: ['signed_in_user'],
  summary: 'Switch user context for signed in user.',
  description: 'Switch user context to the given organization.',
  operationId: 'userSetUsingOrg',
  request: {
    params: z.object({
      org_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'org_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users'],
  summary: 'Get users.',
  description:
    'Returns all users that the authenticated user has permission to view, admin permission required.',
  operationId: 'searchUsers',
  request: {
    query: z.object({
      perpage: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1000n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the maximum number of users to return per page',
            in: 'query',
            name: 'perpage',
            schema: { default: 1000, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page index for starting fetching users',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: SearchUsersResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersLookupRoute = createRoute({
  method: 'get',
  path: '/users/lookup',
  tags: ['users'],
  summary: 'Get user by login or email.',
  operationId: 'getUserByLoginOrEmail',
  request: {
    query: z.object({
      loginOrEmail: z
        .string()
        .openapi({
          param: {
            description: 'loginOrEmail of the user',
            in: 'query',
            name: 'loginOrEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: UserResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersSearchRoute = createRoute({
  method: 'get',
  path: '/users/search',
  tags: ['users'],
  summary: 'Get users with paging.',
  operationId: 'searchUsersWithPaging',
  responses: {
    200: SearchUsersWithPagingResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Get user by id.',
  operationId: 'getUserByID',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: UserResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Update user.',
  description: 'Update the user identified by id.',
  operationId: 'updateUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'To change the email, name, login, theme, provide another one.',
      content: { 'application/json': { schema: UpdateUserCommandSchema } },
      required: true,
    },
  },
  responses: {
    200: OkResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    409: ConflictErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserIdOrgsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/orgs',
  tags: ['users'],
  summary: 'Get organizations for user.',
  description: 'Get organizations for user identified by id.',
  operationId: 'getUserOrgList',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetUserOrgListResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getUsersUserIdTeamsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/teams',
  tags: ['users'],
  summary: 'Get teams for user.',
  description: 'Get teams for user identified by id.',
  operationId: 'getUserTeams',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: GetUserTeamsResponseResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const getV1ProvisioningAlertRulesRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/alert-rules',
  tags: ['provisioning'],
  summary: 'Get all the alert rules.',
  operationId: 'RouteGetAlertRules',
  responses: {
    200: {
      description: 'ProvisionedAlertRules',
      content: { 'application/json': { schema: ProvisionedAlertRulesSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const postV1ProvisioningAlertRulesRoute = createRoute({
  method: 'post',
  path: '/v1/provisioning/alert-rules',
  tags: ['provisioning'],
  summary: 'Create a new alert rule.',
  operationId: 'RoutePostAlertRule',
  request: {
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProvisionedAlertRuleSchema } } },
  },
  responses: {
    201: {
      description: 'ProvisionedAlertRule',
      content: { 'application/json': { schema: ProvisionedAlertRuleSchema } },
    },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningAlertRulesExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/alert-rules/export',
  tags: ['provisioning'],
  summary: 'Export all alert rules in provisioning file format.',
  operationId: 'RouteGetAlertRulesExport',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to initiate a download of the file or not.',
            in: 'query',
            name: 'download',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .enum(['yaml', 'json', 'hcl'])
        .default('yaml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the downloaded file. Supported yaml, json or hcl. Accept header can also be used, but the query parameter will take precedence.',
            in: 'query',
            name: 'format',
            schema: { default: 'yaml', enum: ['yaml', 'json', 'hcl'], type: 'string' },
            required: false,
          },
        }),
      folderUid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'UIDs of folders from which to export rules',
            in: 'query',
            name: 'folderUid',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of group of rules to export. Must be specified only together with a single folder UID',
            in: 'query',
            name: 'group',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ruleUid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'UID of alert rule to export. If specified, parameters folderUid and group must be empty.',
            in: 'query',
            name: 'ruleUid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'ForbiddenError',
      content: {
        'application/json': { schema: ForbiddenErrorSchema },
        'application/terraform+hcl': { schema: ForbiddenErrorSchema },
        'application/yaml': { schema: ForbiddenErrorSchema },
        'text/hcl': { schema: ForbiddenErrorSchema },
        'text/yaml': { schema: ForbiddenErrorSchema },
      },
    },
    404: { description: ' Not found.' },
  },
})

export const getV1ProvisioningAlertRulesUIDRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/alert-rules/{UID}',
  tags: ['provisioning'],
  summary: 'Get a specific alert rule by UID.',
  operationId: 'RouteGetAlertRule',
  request: {
    params: z.object({
      UID: z
        .string()
        .openapi({
          param: {
            description: 'Alert rule UID',
            in: 'path',
            name: 'UID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ProvisionedAlertRule',
      content: { 'application/json': { schema: ProvisionedAlertRuleSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    404: { description: ' Not found.' },
  },
  deprecated: true,
})

export const putV1ProvisioningAlertRulesUIDRoute = createRoute({
  method: 'put',
  path: '/v1/provisioning/alert-rules/{UID}',
  tags: ['provisioning'],
  summary: 'Update an existing alert rule.',
  operationId: 'RoutePutAlertRule',
  request: {
    params: z.object({
      UID: z
        .string()
        .openapi({
          param: {
            description: 'Alert rule UID',
            in: 'path',
            name: 'UID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProvisionedAlertRuleSchema } } },
  },
  responses: {
    200: {
      description: 'ProvisionedAlertRule',
      content: { 'application/json': { schema: ProvisionedAlertRuleSchema } },
    },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteV1ProvisioningAlertRulesUIDRoute = createRoute({
  method: 'delete',
  path: '/v1/provisioning/alert-rules/{UID}',
  tags: ['provisioning'],
  summary: 'Delete a specific alert rule by UID.',
  operationId: 'RouteDeleteAlertRule',
  request: {
    params: z.object({
      UID: z
        .string()
        .openapi({
          param: {
            description: 'Alert rule UID',
            in: 'path',
            name: 'UID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: ' The alert rule was deleted successfully.' },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningAlertRulesUIDExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/alert-rules/{UID}/export',
  tags: ['provisioning'],
  summary: 'Export an alert rule in provisioning file format.',
  operationId: 'RouteGetAlertRuleExport',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to initiate a download of the file or not.',
            in: 'query',
            name: 'download',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .enum(['yaml', 'json', 'hcl'])
        .default('yaml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the downloaded file. Supported yaml, json or hcl. Accept header can also be used, but the query parameter will take precedence.',
            in: 'query',
            name: 'format',
            schema: { default: 'yaml', enum: ['yaml', 'json', 'hcl'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      UID: z
        .string()
        .openapi({
          param: {
            description: 'Alert rule UID',
            in: 'path',
            name: 'UID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'ForbiddenError',
      content: {
        'application/json': { schema: ForbiddenErrorSchema },
        'application/terraform+hcl': { schema: ForbiddenErrorSchema },
        'application/yaml': { schema: ForbiddenErrorSchema },
        'text/hcl': { schema: ForbiddenErrorSchema },
        'text/yaml': { schema: ForbiddenErrorSchema },
      },
    },
    404: { description: ' Not found.' },
  },
})

export const getV1ProvisioningContactPointsRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/contact-points',
  tags: ['provisioning'],
  summary: 'Get all the contact points.',
  operationId: 'RouteGetContactpoints',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ContactPoints',
      content: { 'application/json': { schema: ContactPointsSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const postV1ProvisioningContactPointsRoute = createRoute({
  method: 'post',
  path: '/v1/provisioning/contact-points',
  tags: ['provisioning'],
  summary: 'Create a contact point.',
  operationId: 'RoutePostContactpoints',
  request: {
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmbeddedContactPointSchema } } },
  },
  responses: {
    202: {
      description: 'EmbeddedContactPoint',
      content: { 'application/json': { schema: EmbeddedContactPointSchema } },
    },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningContactPointsExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/contact-points/export',
  tags: ['provisioning'],
  summary: 'Export all contact points in provisioning file format.',
  operationId: 'RouteGetContactpointsExport',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to initiate a download of the file or not.',
            in: 'query',
            name: 'download',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .enum(['yaml', 'json', 'hcl'])
        .default('yaml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the downloaded file. Supported yaml, json or hcl. Accept header can also be used, but the query parameter will take precedence.',
            in: 'query',
            name: 'format',
            schema: { default: 'yaml', enum: ['yaml', 'json', 'hcl'], type: 'string' },
            required: false,
          },
        }),
      decrypt: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether any contained secure settings should be decrypted or left redacted. Redacted settings will contain RedactedValue instead. Currently, only org admin can view decrypted secure settings.',
            in: 'query',
            name: 'decrypt',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': { schema: PermissionDeniedSchema },
        'application/terraform+hcl': { schema: PermissionDeniedSchema },
        'application/yaml': { schema: PermissionDeniedSchema },
        'text/hcl': { schema: PermissionDeniedSchema },
        'text/yaml': { schema: PermissionDeniedSchema },
      },
    },
  },
})

export const putV1ProvisioningContactPointsUIDRoute = createRoute({
  method: 'put',
  path: '/v1/provisioning/contact-points/{UID}',
  tags: ['provisioning'],
  summary: 'Update an existing contact point.',
  operationId: 'RoutePutContactpoint',
  request: {
    params: z.object({
      UID: z
        .string()
        .openapi({
          param: {
            description: 'UID is the contact point unique identifier',
            in: 'path',
            name: 'UID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmbeddedContactPointSchema } } },
  },
  responses: {
    202: { description: 'Ack', content: { 'application/json': { schema: AckSchema } } },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteV1ProvisioningContactPointsUIDRoute = createRoute({
  method: 'delete',
  path: '/v1/provisioning/contact-points/{UID}',
  tags: ['provisioning'],
  summary: 'Delete a contact point.',
  operationId: 'RouteDeleteContactpoints',
  request: {
    params: z.object({
      UID: z
        .string()
        .openapi({
          param: {
            description: 'UID is the contact point unique identifier',
            in: 'path',
            name: 'UID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: ' The contact point was deleted successfully.' },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/folder/{FolderUID}/rule-groups/{Group}',
  tags: ['provisioning'],
  summary: 'Get a rule group.',
  operationId: 'RouteGetAlertRuleGroup',
  request: {
    params: z.object({
      FolderUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'FolderUID', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AlertRuleGroup',
      content: { 'application/json': { schema: AlertRuleGroupSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    404: { description: ' Not found.' },
  },
  deprecated: true,
})

export const putV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute = createRoute({
  method: 'put',
  path: '/v1/provisioning/folder/{FolderUID}/rule-groups/{Group}',
  tags: ['provisioning'],
  summary: 'Create or update alert rule group.',
  operationId: 'RoutePutAlertRuleGroup',
  request: {
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      FolderUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'FolderUID', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: AlertRuleGroupSchema } } },
  },
  responses: {
    200: {
      description: 'AlertRuleGroup',
      content: { 'application/json': { schema: AlertRuleGroupSchema } },
    },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteV1ProvisioningFolderFolderUIDRuleGroupsGroupRoute = createRoute({
  method: 'delete',
  path: '/v1/provisioning/folder/{FolderUID}/rule-groups/{Group}',
  tags: ['provisioning'],
  description: 'Delete rule group',
  operationId: 'RouteDeleteAlertRuleGroup',
  request: {
    params: z.object({
      FolderUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'FolderUID', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: ' The alert rule group was deleted successfully.' },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    404: { description: 'NotFound', content: { 'application/json': { schema: NotFoundSchema } } },
  },
  deprecated: true,
})

export const getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/folder/{FolderUID}/rule-groups/{Group}/export',
  tags: ['provisioning'],
  summary: 'Export an alert rule group in provisioning file format.',
  operationId: 'RouteGetAlertRuleGroupExport',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to initiate a download of the file or not.',
            in: 'query',
            name: 'download',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .enum(['yaml', 'json', 'hcl'])
        .default('yaml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the downloaded file. Supported yaml, json or hcl. Accept header can also be used, but the query parameter will take precedence.',
            in: 'query',
            name: 'format',
            schema: { default: 'yaml', enum: ['yaml', 'json', 'hcl'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      FolderUID: z
        .string()
        .openapi({
          param: { in: 'path', name: 'FolderUID', required: true, schema: { type: 'string' } },
        }),
      Group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'Group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'ForbiddenError',
      content: {
        'application/json': { schema: ForbiddenErrorSchema },
        'application/terraform+hcl': { schema: ForbiddenErrorSchema },
        'application/yaml': { schema: ForbiddenErrorSchema },
        'text/hcl': { schema: ForbiddenErrorSchema },
        'text/yaml': { schema: ForbiddenErrorSchema },
      },
    },
    404: { description: ' Not found.' },
  },
})

export const getV1ProvisioningMuteTimingsRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/mute-timings',
  tags: ['provisioning'],
  summary: 'Get all the mute timings.',
  operationId: 'RouteGetMuteTimings',
  responses: {
    200: {
      description: 'MuteTimings',
      content: { 'application/json': { schema: MuteTimingsSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const postV1ProvisioningMuteTimingsRoute = createRoute({
  method: 'post',
  path: '/v1/provisioning/mute-timings',
  tags: ['provisioning'],
  summary: 'Create a new mute timing.',
  operationId: 'RoutePostMuteTiming',
  request: {
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MuteTimeIntervalSchema } } },
  },
  responses: {
    201: {
      description: 'MuteTimeInterval',
      content: { 'application/json': { schema: MuteTimeIntervalSchema } },
    },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningMuteTimingsExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/mute-timings/export',
  tags: ['provisioning'],
  summary: 'Export all mute timings in provisioning format.',
  operationId: 'RouteExportMuteTimings',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to initiate a download of the file or not.',
            in: 'query',
            name: 'download',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .enum(['yaml', 'json', 'hcl'])
        .default('yaml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the downloaded file. Supported yaml, json or hcl. Accept header can also be used, but the query parameter will take precedence.',
            in: 'query',
            name: 'format',
            schema: { default: 'yaml', enum: ['yaml', 'json', 'hcl'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': { schema: PermissionDeniedSchema },
        'application/terraform+hcl': { schema: PermissionDeniedSchema },
        'application/yaml': { schema: PermissionDeniedSchema },
        'text/hcl': { schema: PermissionDeniedSchema },
        'text/yaml': { schema: PermissionDeniedSchema },
      },
    },
  },
})

export const getV1ProvisioningMuteTimingsNameRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/mute-timings/{name}',
  tags: ['provisioning'],
  summary: 'Get a mute timing.',
  operationId: 'RouteGetMuteTiming',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Mute timing name',
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
      description: 'MuteTimeInterval',
      content: { 'application/json': { schema: MuteTimeIntervalSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    404: { description: ' Not found.' },
  },
  deprecated: true,
})

export const putV1ProvisioningMuteTimingsNameRoute = createRoute({
  method: 'put',
  path: '/v1/provisioning/mute-timings/{name}',
  tags: ['provisioning'],
  summary: 'Replace an existing mute timing.',
  operationId: 'RoutePutMuteTiming',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Mute timing name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MuteTimeIntervalSchema } } },
  },
  responses: {
    202: {
      description: 'MuteTimeInterval',
      content: { 'application/json': { schema: MuteTimeIntervalSchema } },
    },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteV1ProvisioningMuteTimingsNameRoute = createRoute({
  method: 'delete',
  path: '/v1/provisioning/mute-timings/{name}',
  tags: ['provisioning'],
  summary: 'Delete a mute timing.',
  operationId: 'RouteDeleteMuteTiming',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Mute timing name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Version of mute timing to use for optimistic concurrency. Leave empty to disable validation',
            in: 'query',
            name: 'version',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: ' The mute timing was deleted successfully.' },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningMuteTimingsNameExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/mute-timings/{name}/export',
  tags: ['provisioning'],
  summary: 'Export a mute timing in provisioning format.',
  operationId: 'RouteExportMuteTiming',
  request: {
    query: z.object({
      download: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to initiate a download of the file or not.',
            in: 'query',
            name: 'download',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      format: z
        .enum(['yaml', 'json', 'hcl'])
        .default('yaml')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Format of the downloaded file. Supported yaml, json or hcl. Accept header can also be used, but the query parameter will take precedence.',
            in: 'query',
            name: 'format',
            schema: { default: 'yaml', enum: ['yaml', 'json', 'hcl'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Mute timing name',
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
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': { schema: PermissionDeniedSchema },
        'application/terraform+hcl': { schema: PermissionDeniedSchema },
        'application/yaml': { schema: PermissionDeniedSchema },
        'text/hcl': { schema: PermissionDeniedSchema },
        'text/yaml': { schema: PermissionDeniedSchema },
      },
    },
  },
})

export const getV1ProvisioningPoliciesRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/policies',
  tags: ['provisioning'],
  summary: 'Get the notification policy tree.',
  operationId: 'RouteGetPolicyTree',
  responses: {
    200: { description: 'Route', content: { 'application/json': { schema: RouteSchema } } },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const putV1ProvisioningPoliciesRoute = createRoute({
  method: 'put',
  path: '/v1/provisioning/policies',
  tags: ['provisioning'],
  summary: 'Sets the notification policy tree.',
  operationId: 'RoutePutPolicyTree',
  request: {
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The new notification routing tree to use',
      content: { 'application/json': { schema: RouteSchema } },
    },
  },
  responses: {
    202: { description: 'Ack', content: { 'application/json': { schema: AckSchema } } },
    400: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteV1ProvisioningPoliciesRoute = createRoute({
  method: 'delete',
  path: '/v1/provisioning/policies',
  tags: ['provisioning'],
  summary: 'Clears the notification policy tree.',
  operationId: 'RouteResetPolicyTree',
  responses: {
    202: { description: 'Ack', content: { 'application/json': { schema: AckSchema } } },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningPoliciesExportRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/policies/export',
  tags: ['provisioning'],
  summary: 'Export the notification policy tree in provisioning file format.',
  operationId: 'RouteGetPolicyTreeExport',
  responses: {
    200: {
      description: 'AlertingFileExport',
      content: {
        'application/json': { schema: AlertingFileExportSchema },
        'application/terraform+hcl': { schema: AlertingFileExportSchema },
        'application/yaml': { schema: AlertingFileExportSchema },
        'text/hcl': { schema: AlertingFileExportSchema },
        'text/yaml': { schema: AlertingFileExportSchema },
      },
    },
    403: {
      description: 'ForbiddenError',
      content: {
        'application/json': { schema: ForbiddenErrorSchema },
        'application/terraform+hcl': { schema: ForbiddenErrorSchema },
        'application/yaml': { schema: ForbiddenErrorSchema },
        'text/hcl': { schema: ForbiddenErrorSchema },
        'text/yaml': { schema: ForbiddenErrorSchema },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': { schema: NotFoundSchema },
        'application/terraform+hcl': { schema: NotFoundSchema },
        'application/yaml': { schema: NotFoundSchema },
        'text/hcl': { schema: NotFoundSchema },
        'text/yaml': { schema: NotFoundSchema },
      },
    },
  },
})

export const getV1ProvisioningTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/templates',
  tags: ['provisioning'],
  summary: 'Get all notification template groups.',
  operationId: 'RouteGetTemplates',
  responses: {
    200: {
      description: 'NotificationTemplates',
      content: { 'application/json': { schema: NotificationTemplatesSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1ProvisioningTemplatesNameRoute = createRoute({
  method: 'get',
  path: '/v1/provisioning/templates/{name}',
  tags: ['provisioning'],
  summary: 'Get a notification template group.',
  operationId: 'RouteGetTemplate',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Template group name',
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
      description: 'NotificationTemplate',
      content: { 'application/json': { schema: NotificationTemplateSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    404: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const putV1ProvisioningTemplatesNameRoute = createRoute({
  method: 'put',
  path: '/v1/provisioning/templates/{name}',
  tags: ['provisioning'],
  summary: 'Updates an existing notification template group.',
  operationId: 'RoutePutTemplate',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Template group name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Disable-Provenance': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Disable-Provenance',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationTemplateContentSchema } } },
  },
  responses: {
    202: {
      description: 'NotificationTemplate',
      content: { 'application/json': { schema: NotificationTemplateSchema } },
    },
    400: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const deleteV1ProvisioningTemplatesNameRoute = createRoute({
  method: 'delete',
  path: '/v1/provisioning/templates/{name}',
  tags: ['provisioning'],
  summary: 'Delete a notification template group.',
  operationId: 'RouteDeleteTemplate',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Template group name',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Version of template to use for optimistic concurrency. Leave empty to disable validation',
            in: 'query',
            name: 'version',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: ' The template was deleted successfully.' },
    403: {
      description: 'ForbiddenError',
      content: { 'application/json': { schema: ForbiddenErrorSchema } },
    },
    409: {
      description: 'PublicError',
      content: { 'application/json': { schema: PublicErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1SsoSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/sso-settings',
  tags: ['sso_settings'],
  summary: 'List all SSO Settings entries',
  description:
    'You need to have a permission with action `settings:read` with scope `settings:auth.<provider>:*`.',
  operationId: 'listAllProvidersSettings',
  responses: {
    200: ListSSOSettingsResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getV1SsoSettingsKeyRoute = createRoute({
  method: 'get',
  path: '/v1/sso-settings/{key}',
  tags: ['sso_settings'],
  summary: 'Get an SSO Settings entry by Key',
  description:
    'You need to have a permission with action `settings:read` with scope `settings:auth.<provider>:*`.',
  operationId: 'getProviderSettings',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: GetSSOSettingsResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const putV1SsoSettingsKeyRoute = createRoute({
  method: 'put',
  path: '/v1/sso-settings/{key}',
  tags: ['sso_settings'],
  summary: 'Update SSO Settings',
  description:
    'Inserts or updates the SSO Settings for a provider.\n\nYou need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.',
  operationId: 'updateProviderSettings',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              provider: z.string().exactOptional(),
              settings: z.record(z.string(), z.any()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const deleteV1SsoSettingsKeyRoute = createRoute({
  method: 'delete',
  path: '/v1/sso-settings/{key}',
  tags: ['sso_settings'],
  summary: 'Remove SSO Settings',
  description:
    'Removes the SSO Settings for a provider.\n\nYou need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.',
  operationId: 'removeProviderSettings',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const patchV1SsoSettingsKeyRoute = createRoute({
  method: 'patch',
  path: '/v1/sso-settings/{key}',
  tags: ['sso_settings'],
  summary: 'Patch SSO Settings',
  description:
    'Partially updates the SSO Settings for a provider. Only provided fields are updated.\n\nYou need to have a permission with action `settings:write` and scope `settings:auth.<provider>:*`.',
  operationId: 'patchProviderSettings',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ settings: z.record(z.string(), z.any()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: OkResponseResponse,
    400: BadRequestErrorResponse,
    401: UnauthorisedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})
