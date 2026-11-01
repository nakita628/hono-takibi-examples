import { createRoute, z } from '@hono/zod-openapi'

const FieldErrorSchema = z
  .object({ field: z.string().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldError')

const ErrorSchema = z
  .object({
    type: z.string().openapi({ example: 'https://api.homer/errors/invalid_argument' }),
    title: z.string().openapi({ example: 'Invalid argument' }),
    status: z.int().openapi({ example: 400 }),
    detail: z.string().exactOptional().openapi({ example: 'Field `from` must be <= `to`' }),
    errors: z.array(FieldErrorSchema).exactOptional(),
  })
  .openapi({ required: ['type', 'title', 'status'] })
  .openapi('Error')

const ErrorResponseSchema = z
  .object({ error: ErrorSchema })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const PaginationSchema = z
  .object({
    limit: z.int().exactOptional(),
    next_cursor: z.string().exactOptional(),
    prev_cursor: z.string().exactOptional(),
    total: z.int().exactOptional(),
    has_more: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const MetaSchema = z
  .object({
    request_id: z.string().exactOptional(),
    trace_id: z.string().exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Meta')

const IdResponseSchema = z
  .object({ data: z.string().exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('IdResponse')

const LoginRequestSchema = z
  .object({
    username: z.string().openapi({ example: 'admin' }),
    password: z
      .string()
      .openapi({
        description:
          'User password (not the default bootstrap password unless configured explicitly)',
        example: 'your-password',
      }),
  })
  .openapi({ required: ['username', 'password'] })
  .openapi('LoginRequest')

const LoginResponseSchema = z
  .object({
    data: z
      .object({
        token: z.string().exactOptional().openapi({ description: 'JWT token' }),
        scope: z
          .string()
          .exactOptional()
          .openapi({ example: 'b9f6q23a-0bde-41ce-cd36-da3dbc17ea12' }),
        user: z
          .object({ admin: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LoginResponse')

const OAuth2TokenExchangeSchema = z
  .object({ token: z.string().openapi({ example: 'token' }) })
  .openapi({ required: ['token'] })
  .openapi('OAuth2TokenExchange')

const AuthProvidersResponseSchema = z
  .object({
    data: z
      .object({
        internal: z
          .object({
            enable: z.boolean().exactOptional(),
            name: z.string().exactOptional(),
            position: z.int().exactOptional(),
            type: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        oauth2: z
          .array(
            z
              .object({
                enable: z.boolean().exactOptional(),
                name: z.string().exactOptional(),
                position: z.int().exactOptional(),
                provider_image: z.string().exactOptional(),
                provider_name: z.string().exactOptional(),
                type: z.string().exactOptional(),
                url: z.string().exactOptional(),
                auto_redirect: z.boolean().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .max(1)
          .exactOptional()
          .openapi({
            description:
              'At most one OAuth2 provider; coordinator config uses a single oauth2_provider object.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthProvidersResponse')

const UserCreateSchema = z
  .object({
    username: z.string(),
    partid: z.int().openapi({ example: 10 }),
    email: z.string(),
    password: z.string().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name (stored as users.full_name)' }),
    enabled: z.boolean().exactOptional(),
    firstname: z.string(),
    lastname: z.string(),
    department: z.string(),
    user_group: z.string(),
  })
  .openapi({
    required: ['username', 'partid', 'email', 'firstname', 'lastname', 'department', 'user_group'],
  })
  .openapi('UserCreate')

const UserPatchSchema = z
  .object({
    partid: z.int().exactOptional(),
    email: z.string().exactOptional(),
    password: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Display name (users.full_name)' }),
    enabled: z.boolean().exactOptional(),
    firstname: z.string().exactOptional(),
    lastname: z.string().exactOptional(),
    department: z.string().exactOptional(),
    user_group: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserPatch')

const UserSchema = z
  .object({
    guid: z.string().exactOptional().openapi({ example: 'e71771a2-1ea0-498f-8d27-391713e10664' }),
    username: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Display name' }),
    partid: z.int().exactOptional(),
    email: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    firstname: z.string().exactOptional(),
    lastname: z.string().exactOptional(),
    department: z.string().exactOptional(),
    user_group: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const UserResponseSchema = z
  .object({ data: UserSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UserResponse')

const UserListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(UserSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserListResponse')

const UserProfileSchema = z
  .object({
    guid: z.string().exactOptional(),
    username: z.string().exactOptional(),
    display_name: z.string().exactOptional(),
    avatar: z.string().exactOptional(),
    group: z.string().exactOptional(),
    admin: z.boolean().exactOptional(),
    external_auth: z.boolean().exactOptional(),
    external_profile: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserProfile')

const UserProfileResponseSchema = z
  .object({ data: UserProfileSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UserProfileResponse')

const DashboardElementSchema = z
  .object({
    cssclass: z.string().exactOptional(),
    href: z.string().exactOptional(),
    id: z.string().exactOptional(),
    owner: z.string().exactOptional(),
    name: z.string().exactOptional(),
    param: z.string().exactOptional(),
    shared: z.boolean().exactOptional(),
    type: z.int().exactOptional(),
    weight: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardElement')

const UserSettingSchema = z
  .object({
    category: z.string().exactOptional(),
    data: DashboardElementSchema.exactOptional(),
    guid: z.string().exactOptional(),
    id: z.int().exactOptional(),
    param: z.string().exactOptional(),
    partid: z.int().exactOptional(),
    user_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSetting')

const UserSettingUpsertSchema = z
  .object({ category: z.string().exactOptional(), param: z.string(), data: z.looseObject({}) })
  .openapi({ required: ['param', 'data'] })
  .openapi('UserSettingUpsert')

const UserSettingListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(UserSettingSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSettingListResponse')

const SearchObjectSchema = z
  .object({
    filter: z
      .object({
        proto_type: z
          .int()
          .exactOptional()
          .openapi({ description: 'Protocol type (e.g. 1 for SIP)' }),
        event_type: z
          .enum(['call', 'registration', 'rtp', 'rtcp', 'log'])
          .exactOptional()
          .openapi({ description: 'Transaction/event type' }),
        method: z.string().exactOptional(),
        call_id: z.string().exactOptional(),
        ruri_user: z.string().exactOptional(),
        from_user: z.string().exactOptional(),
        to_user: z.string().exactOptional(),
        user_agent: z.string().exactOptional(),
        src_ip: z.string().exactOptional(),
        dst_ip: z.string().exactOptional(),
        src_port: z.int().exactOptional(),
        dst_port: z.int().exactOptional(),
        capture_id: z.int().exactOptional(),
        node: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    param: z
      .object({
        transaction: z.looseObject({}).exactOptional(),
        limit: z.int().exactOptional().openapi({ example: 200 }),
        search: z.looseObject({}).exactOptional(),
        orlogic: z.boolean().exactOptional(),
        whitelist: z.array(z.string()).exactOptional(),
        location: z
          .object({ node: z.array(z.string()).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        timezone: z
          .object({ value: z.int().exactOptional(), name: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    timestamp: z
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix epoch milliseconds (UTC).',
          }),
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix epoch milliseconds (UTC).',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SearchObject')

const CallSearchRequestSchema = SearchObjectSchema.openapi('CallSearchRequest')

const TransactionSessionRequestSchema = z
  .object({
    session_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Session identifier to lookup messages/logs/QoS.' }),
    session_ids: z
      .array(z.string())
      .max(50)
      .exactOptional()
      .openapi({
        description: 'Multiple Call-IDs (OR filter; B2B leg matching where applicable).',
      }),
    proto_type: z.int().exactOptional().openapi({ description: 'HEP protocol type (default 1).' }),
    event_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Event type (call, registration, default).' }),
    timestamp: z
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
      .exactOptional()
      .openapi({ description: 'Optional millisecond UTC window (from/to).', required: [] }),
    whitelist: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'IPs to exclude from PCAP/text export only (legacy Homer 7 field name; not an allow-list). A row is omitted when src_ip or dst_ip equals any listed address. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.\n',
        example: ['10.0.0.1', '192.168.0.1'],
      }),
    correlate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'PCAP/text export only. When true, also export the call legs that the call flow correlates with the requested session id(s) (B2BUA / X-CID, via the enabled correlation script for the proto_type/event_type), instead of only the requested ids. Skipped for event_type "all"; falls back to the requested ids if correlation is unavailable or fails. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.\n',
      }),
  })
  .openapi({
    description:
      'Use session_id for one Call-ID, or session_ids (non-empty, max 50) for an OR filter across sessions. When session_ids is set it takes precedence over session_id. Supported on messages, qos, logs, callinfo, events, sub, hepsub, and export endpoints; responses include session_id on rows for grouping. For SIP call (proto_type=1, event_type=call), POST /transactions/callinfo returns one summary object per Call-ID (ringing_seconds, call_duration_seconds, codecs, UAC/UAS, setup delays, status, from_party, ruri_party, methods_distribution for the legacy methods chart, etc.).\n',
    required: [],
  })
  .openapi('TransactionSessionRequest')

const ProtocolHeaderSchema = z
  .object({
    dst_ip: z.string().exactOptional(),
    src_ip: z.string().exactOptional(),
    dst_port: z.int().exactOptional(),
    src_port: z.int().exactOptional(),
    protocol: z.int().exactOptional(),
    capture_id: z.int().exactOptional(),
    capture_pass: z.string().exactOptional(),
    payload_type: z.int().exactOptional(),
    time_seconds: z.int().exactOptional(),
    time_useconds: z.int().exactOptional(),
    protocol_family: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProtocolHeader')

const DataHeaderSchema = z
  .object({
    call_id: z.string().exactOptional(),
    method: z.string().exactOptional(),
    to_tag: z.string().exactOptional(),
    to_user: z.string().exactOptional(),
    from_tag: z.string().exactOptional(),
    pid_user: z.string().exactOptional(),
    auth_user: z.string().exactOptional(),
    from_user: z.string().exactOptional(),
    ruri_user: z.string().exactOptional(),
    user_agent: z.string().exactOptional(),
    ruri_domain: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataHeader')

const MessageSchema = z
  .object({
    id: z.int().exactOptional(),
    sid: z.string().exactOptional(),
    protocol_header: ProtocolHeaderSchema.exactOptional(),
    data_header: DataHeaderSchema.exactOptional(),
    raw: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Message')

const CallElementSchema = z
  .object({
    id: z.number().exactOptional(),
    sid: z.string().exactOptional(),
    dst_host: z.string().exactOptional(),
    src_host: z.string().exactOptional(),
    dst_id: z.string().exactOptional(),
    src_id: z.string().exactOptional(),
    src_ip: z.string().exactOptional(),
    dst_ip: z.string().exactOptional(),
    src_port: z.number().exactOptional(),
    dst_port: z.number().exactOptional(),
    alias_src: z.string().exactOptional(),
    alias_dst: z.string().exactOptional(),
    method: z.string().exactOptional(),
    method_text: z.string().exactOptional(),
    create_date: z
      .preprocess(
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
    protocol: z.number().exactOptional(),
    msg_color: z.string().exactOptional(),
    table: z.string().exactOptional(),
    ruri_user: z.string().exactOptional(),
    destination: z.int().exactOptional(),
    micro_ts: z
      .preprocess(
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
    storage_lake: z.string().exactOptional(),
    storage_volume: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CallElement')

const CallListResponseSchema = z
  .object({
    data: z
      .object({
        items: z.array(CallElementSchema).exactOptional(),
        keys: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CallListResponse')

const MessageResponseSchema = z
  .object({ data: MessageSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MessageResponse')

const MessageListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(MessageSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MessageListResponse')

const MessageDecodedSchema = z
  .object({ data: z.array(z.looseObject({})).exactOptional() })
  .openapi({ required: [] })
  .openapi('MessageDecoded')

const MessageDecodedResponseSchema = z
  .object({ data: MessageDecodedSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MessageDecodedResponse')

const SearchTransactionRtpSchema = z
  .object({
    id: z.number().exactOptional(),
    sid: z.string().exactOptional(),
    dst_ip: z.string().exactOptional(),
    src_ip: z.string().exactOptional(),
    dst_port: z.number().exactOptional(),
    src_port: z.number().exactOptional(),
    payload_type: z.int().exactOptional(),
    micro_ts: z
      .preprocess(
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
  .openapi('SearchTransactionRtp')

const SearchTransactionRtcpSchema = z
  .object({
    id: z.number().exactOptional(),
    sid: z.string().exactOptional(),
    dst_ip: z.string().exactOptional(),
    src_ip: z.string().exactOptional(),
    dst_port: z.number().exactOptional(),
    src_port: z.number().exactOptional(),
    payload_type: z.int().exactOptional(),
    micro_ts: z
      .preprocess(
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
  .openapi('SearchTransactionRtcp')

const SearchTransactionRtpListSchema = z
  .object({ data: z.array(SearchTransactionRtpSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SearchTransactionRtpList')

const SearchTransactionRtcpListSchema = z
  .object({ data: z.array(SearchTransactionRtcpSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SearchTransactionRtcpList')

const SearchTransactionQosSchema = z
  .object({
    rtcp: SearchTransactionRtcpListSchema.exactOptional(),
    rtp: SearchTransactionRtpListSchema.exactOptional(),
    vqrtcp: z
      .object({ data: z.array(z.looseObject({})).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SearchTransactionQos')

const SearchTransactionLogSchema = z
  .object({
    capture_id: z.string().exactOptional(),
    capture_pass: z.string().exactOptional(),
    correlation_id: z.string().exactOptional(),
    create_date: z.string().exactOptional(),
    dbnode: z.string().exactOptional(),
    dst_ip: z.string().exactOptional(),
    src_ip: z.string().exactOptional(),
    dst_port: z.number().exactOptional(),
    src_port: z.number().exactOptional(),
    id: z.number().exactOptional(),
    payload_type: z.int().exactOptional(),
    profile: z.string().exactOptional(),
    proto: z.string().exactOptional(),
    protocol: z.int().exactOptional(),
    protocol_family: z.int().exactOptional(),
    raw: z.string().exactOptional(),
    sid: z.string().exactOptional(),
    time_seconds: z.int().exactOptional(),
    time_useconds: z.int().exactOptional(),
    node: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchTransactionLog')

const QosResponseSchema = z
  .object({ data: SearchTransactionQosSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('QosResponse')

const LogListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(SearchTransactionLogSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogListResponse')

const ExportRequestSchema = z
  .object({ type: z.enum(['pcap', 'text']), query: z.looseObject({}) })
  .openapi({ required: ['type', 'query'] })
  .openapi('ExportRequest')

const ExportResponseSchema = z
  .object({
    data: z
      .object({ export_id: z.string().exactOptional(), status: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportResponse')

const ExportStatusResponseSchema = z
  .object({
    data: z
      .object({
        export_id: z.string().exactOptional(),
        status: z.string().exactOptional(),
        download_url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportStatusResponse')

const ImportResponseSchema = z
  .object({
    data: z
      .object({ inserted: z.int().exactOptional(), rejected: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportResponse')

const DashboardUpsertSchema = DashboardElementSchema.openapi('DashboardUpsert')

const DashboardResponseSchema = z
  .object({ data: DashboardElementSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DashboardResponse')

const DashboardListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(DashboardElementSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardListResponse')

const MappingSchemaSchema = z
  .object({
    guid: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    hepid: z.int().exactOptional(),
    hep_alias: z.string().exactOptional(),
    partid: z.int().exactOptional(),
    version: z.int().exactOptional(),
    retention: z.int().exactOptional(),
    partition_step: z.int().exactOptional(),
    create_index: z.looseObject({}).exactOptional(),
    create_table: z.string().exactOptional(),
    correlation_mapping: z.looseObject({}).exactOptional(),
    fields_mapping: z.looseObject({}).exactOptional(),
    fields_settings: z.looseObject({}).exactOptional(),
    schema_mapping: z.looseObject({}).exactOptional(),
    schema_settings: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MappingSchema')

const MappingUpsertSchema = MappingSchemaSchema.openapi('MappingUpsert')

const MappingResponseSchema = z
  .object({ data: MappingSchemaSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MappingResponse')

const MappingListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(MappingSchemaSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MappingListResponse')

const SmartSearchFieldSchema = z
  .object({
    category: z.string().exactOptional(),
    name: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SmartSearchField')

const MappingFieldsResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(SmartSearchFieldSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MappingFieldsResponse')

const HepsubSchemaSchema = z
  .object({
    guid: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    hepid: z.int().exactOptional(),
    hep_alias: z.string().exactOptional(),
    version: z.int().exactOptional(),
    mapping: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HepsubSchema')

const HepsubUpsertSchema = HepsubSchemaSchema.openapi('HepsubUpsert')

const HepsubResponseSchema = z
  .object({ data: HepsubSchemaSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('HepsubResponse')

const HepsubListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(HepsubSchemaSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HepsubListResponse')

const AliasStructSchema = z
  .object({
    id: z.int().exactOptional(),
    guid: z.string().exactOptional(),
    alias: z.string().exactOptional(),
    ip: z.string().exactOptional(),
    port: z.int().exactOptional(),
    mask: z.int().exactOptional(),
    capture_id: z.string().exactOptional(),
    status: z.boolean().exactOptional(),
    custom_image: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional image URL shown with this alias in the UI / enriched rows',
      }),
    tag1: z.string().exactOptional().openapi({ description: 'Free-form tag (e.g. device type)' }),
    tag2: z.string().exactOptional().openapi({ description: 'Free-form tag (e.g. OS)' }),
    tag3: z.string().exactOptional(),
    tag4: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AliasStruct')

const AliasUpsertSchema = AliasStructSchema.openapi('AliasUpsert')

const AliasListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(AliasStructSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AliasListResponse')

const AuthTokenItemSchema = z
  .object({
    guid: z.string().exactOptional(),
    creator_guid: z.string().exactOptional(),
    name: z.string().exactOptional(),
    user_object: z
      .object({
        username: z.string().exactOptional(),
        firstname: z.string().exactOptional(),
        lastname: z.string().exactOptional(),
        email: z.string().exactOptional(),
        user_group: z.string().exactOptional(),
        id: z.int().exactOptional(),
        partid: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    ip_address: z.string().exactOptional(),
    create_date: z.string().exactOptional(),
    lastusage_date: z.string().exactOptional(),
    expire_date: z.string().exactOptional(),
    usage_calls: z.int().exactOptional(),
    limit_calls: z.int().exactOptional(),
    active: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthTokenItem')

const AuthTokenCreateSchema = z
  .object({
    name: z.string().exactOptional(),
    expire_date: z.iso.datetime({ offset: true }).exactOptional(),
    limit_calls: z.int().exactOptional(),
    active: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthTokenCreate')

const AuthTokenUpdateSchema = AuthTokenCreateSchema.openapi('AuthTokenUpdate')

const AuthTokenCreateResponseSchema = z
  .object({
    data: z.object({ token: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthTokenCreateResponse')

const AuthTokenResponseSchema = z
  .object({ data: AuthTokenItemSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthTokenResponse')

const AuthTokenListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(AuthTokenItemSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthTokenListResponse')

const AgentSubSchema = z
  .object({
    uuid: z.string().exactOptional(),
    gid: z.int().exactOptional(),
    host: z.string().exactOptional(),
    port: z.int().exactOptional(),
    protocol: z.string().exactOptional(),
    path: z.string().exactOptional(),
    node: z.string().exactOptional(),
    type: z.string().exactOptional(),
    ttl: z.int().exactOptional(),
    create_date: z.string().exactOptional(),
    expire_date: z.string().exactOptional(),
    active: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentSub')

const AgentSubUpsertSchema = AgentSubSchema.openapi('AgentSubUpsert')

const AgentSubResponseSchema = z
  .object({ data: AgentSubSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AgentSubResponse')

const AgentSubListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(AgentSubSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentSubListResponse')

const AgentTypeListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentTypeListResponse')

const AgentSearchRequestSchema = z
  .object({ guid: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AgentSearchRequest')

const NodeSchema = z
  .object({
    arhive: z.boolean().exactOptional(),
    db_archive: z.string().exactOptional(),
    db_name: z.string().exactOptional(),
    host: z.string().exactOptional(),
    name: z.string().exactOptional(),
    node: z.string().exactOptional(),
    online: z.boolean().exactOptional(),
    primary: z.boolean().exactOptional(),
    table_prefix: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Node')

const NodeListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(NodeSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeListResponse')

const ModulesStatusResponseSchema = z
  .object({
    data: z
      .object({
        loki: z
          .object({
            enable: z.boolean().exactOptional(),
            template: z.string().exactOptional(),
            external_url: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModulesStatusResponse')

const StatisticQuerySchema = z
  .object({
    param: z
      .object({
        limit: z.int().exactOptional(),
        precision: z.int().exactOptional(),
        query: z
          .array(
            z
              .object({
                main: z.string().exactOptional(),
                database: z.string().exactOptional(),
                retention: z.string().exactOptional(),
                rawquery: z.string().exactOptional(),
                type: z.array(z.string()).exactOptional(),
                tag: z.array(z.string()).exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        bfrom: z.int().exactOptional(),
        total: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    timestamp: z
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix epoch milliseconds (UTC).',
          }),
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix epoch milliseconds (UTC).',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('StatisticQuery')

const StatisticResponseSchema = z
  .object({
    data: z.looseObject({}).exactOptional(),
    total: z.int().exactOptional(),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatisticResponse')

const StatisticDbResponseSchema = z
  .object({
    data: z.looseObject({}).exactOptional(),
    status: z.string().exactOptional(),
    total: z.int().exactOptional(),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatisticDbResponse')

const StatisticMeasurementsResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatisticMeasurementsResponse')

const StatisticMetricsResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatisticMetricsResponse')

const StatisticTagsResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatisticTagsResponse')

const LokiLabelsResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LokiLabelsResponse')

const LokiValuesResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LokiValuesResponse')

const LokiQuerySchema = z
  .object({
    param: z
      .object({
        limit: z.int().exactOptional(),
        search: z.string().exactOptional(),
        server: z.string().exactOptional(),
        timezone: z.looseObject({}).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    timestamp: z
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix epoch milliseconds (UTC).',
          }),
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Unix epoch milliseconds (UTC).',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('LokiQuery')

const LokiQueryResponseSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            custom_1: z.string().exactOptional(),
            custom_2: z.string().exactOptional(),
            id: z.int().exactOptional(),
            micro_ts: z
              .preprocess(
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
      .exactOptional(),
    total: z.int().exactOptional(),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LokiQueryResponse')

const GrafanaStatusResponseSchema = z
  .object({ data: z.looseObject({}).exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GrafanaStatusResponse')

const GrafanaFoldersResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(z.looseObject({})).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GrafanaFoldersResponse')

const GrafanaDashboardResponseSchema = z
  .object({ data: z.looseObject({}).exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GrafanaDashboardResponse')

const GlobalSettingUpsertSchema = z
  .object({
    guid: z.string().exactOptional(),
    partid: z.int().exactOptional(),
    category: z.string(),
    param: z.string().exactOptional(),
    data: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: ['category'] })
  .openapi('GlobalSettingUpsert')

const GlobalSettingSchema = z
  .object({
    id: z.int().exactOptional(),
    guid: z.string().exactOptional(),
    partid: z.int().exactOptional(),
    category: z.string().exactOptional(),
    param: z.string().exactOptional(),
    data: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlobalSetting')

const GlobalSettingListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(GlobalSettingSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlobalSettingListResponse')

const GlobalSettingResponseSchema = z
  .object({ data: GlobalSettingSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GlobalSettingResponse')

const HepScriptUpsertSchema = z
  .object({
    guid: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    hep_alias: z.string().exactOptional(),
    type: z.string().exactOptional(),
    hepid: z.int().exactOptional(),
    status: z.boolean().exactOptional(),
    script: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HepScriptUpsert')

const HepScriptSchema = z
  .object({
    id: z.int().exactOptional(),
    guid: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    hep_alias: z.string().exactOptional(),
    type: z.string().exactOptional(),
    hepid: z.int().exactOptional(),
    status: z.boolean().exactOptional(),
    script: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HepScript')

const HepScriptListResponseSchema = z
  .object({
    data: z
      .object({ items: z.array(HepScriptSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HepScriptListResponse')

const HepScriptResponseSchema = z
  .object({ data: HepScriptSchema.exactOptional(), meta: MetaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('HepScriptResponse')

const BadRequestResponse = {
  description: 'Bad request',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ForbiddenResponse = {
  description: 'Forbidden',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const NotFoundResponse = {
  description: 'Not found',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const ServerErrorResponse = {
  description: 'Server error',
  content: { 'application/json': { schema: ErrorResponseSchema } },
}

const UserIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'userId',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
    },
  })

const SessionIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'sessionId', in: 'path', required: true, schema: { type: 'string' } } })

const ProviderParamsSchema = z
  .string()
  .openapi({ param: { name: 'provider', in: 'path', required: true, schema: { type: 'string' } } })

const MessageIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'messageId', in: 'path', required: true, schema: { type: 'string' } } })

const ExportIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'exportId', in: 'path', required: true, schema: { type: 'string' } } })

const DashboardIdParamsSchema = z
  .string()
  .openapi({
    param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
  })

const MappingIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'mappingId', in: 'path', required: true, schema: { type: 'string' } } })

const HepsubIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'hepsubId', in: 'path', required: true, schema: { type: 'string' } } })

const AliasIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'aliasId', in: 'path', required: true, schema: { type: 'string' } } })

const AuthTokenIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'tokenId', in: 'path', required: true, schema: { type: 'string' } } })

const AgentSubIdParamsSchema = z
  .string()
  .openapi({
    param: { name: 'subscriptionId', in: 'path', required: true, schema: { type: 'string' } },
  })

const CategoryParamsSchema = z
  .string()
  .openapi({ param: { name: 'category', in: 'path', required: true, schema: { type: 'string' } } })

const FromParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64())
  .exactOptional()
  .openapi({
    param: {
      name: 'from',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int64' },
    },
  })

const ToParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64())
  .exactOptional()
  .openapi({
    param: {
      name: 'to',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int64' },
    },
  })

const PageLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'page[limit]',
      in: 'query',
      required: false,
      schema: { type: 'integer', minimum: 1, maximum: 1000 },
    },
  })

const PageCursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'page[cursor]', in: 'query', required: false, schema: { type: 'string' } },
  })

const SortParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      description: 'Sort, format: field or -field',
      schema: { type: 'string' },
    },
  })

const SearchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { name: 'search', in: 'query', required: false, schema: { type: 'string' } } })

const FilterTransactionIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'filter[transaction_id]',
      in: 'query',
      required: false,
      schema: { type: 'string' },
    },
  })

const FilterSrcIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[src_ip]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterDstIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[dst_ip]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterProtocolParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: { name: 'filter[protocol]', in: 'query', required: false, schema: { type: 'integer' } },
  })

const FilterMethodParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[method]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterUsernameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[username]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterEmailParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[email]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterUserGroupParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[user_group]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterEnabledParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: { name: 'filter[enabled]', in: 'query', required: false, schema: { type: 'boolean' } },
  })

const FilterAliasParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[alias]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[ip]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterCaptureIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[capture_id]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterMappingProfileParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[profile]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterHepIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: { name: 'filter[hepid]', in: 'query', required: false, schema: { type: 'integer' } },
  })

const FilterHepAliasParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[hep_alias]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterTokenNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[name]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterTokenActiveParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: { name: 'filter[active]', in: 'query', required: false, schema: { type: 'boolean' } },
  })

const FilterAgentTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[type]', in: 'query', required: false, schema: { type: 'string' } },
  })

const FilterAgentNodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'filter[node]', in: 'query', required: false, schema: { type: 'string' } },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      required: false,
      deprecated: true,
      schema: { type: 'integer', minimum: 1, maximum: 1000 },
    },
  })

const CursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      required: false,
      deprecated: true,
      schema: { type: 'string' },
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

const AuthTokenHeaderSecurityScheme = { type: 'apiKey', in: 'header', name: 'Auth-Token' }

export const postAuthSessionsRoute = createRoute({
  method: 'post',
  path: '/auth/sessions',
  tags: ['Auth'],
  summary: 'Create session (login)',
  operationId: 'authSessionCreate',
  request: {
    body: { content: { 'application/json': { schema: LoginRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Session created',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
  security: [],
})

export const deleteAuthSessionsSessionIdRoute = createRoute({
  method: 'delete',
  path: '/auth/sessions/{sessionId}',
  tags: ['Auth'],
  summary: 'Close session (logout)',
  operationId: 'authSessionDelete',
  request: { params: z.object({ sessionId: SessionIdParamsSchema }) },
  responses: {
    204: { description: 'Session closed' },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAuthProvidersRoute = createRoute({
  method: 'get',
  path: '/auth/providers',
  tags: ['Auth'],
  summary: 'List authentication providers',
  operationId: 'authProvidersList',
  responses: {
    200: {
      description: 'Providers list',
      content: { 'application/json': { schema: AuthProvidersResponseSchema } },
    },
    400: BadRequestResponse,
    500: ServerErrorResponse,
  },
  security: [],
})

export const getAuthOauth2ProviderRedirectRoute = createRoute({
  method: 'get',
  path: '/auth/oauth2/{provider}/redirect',
  tags: ['Auth'],
  summary: 'OAuth2 redirect',
  operationId: 'authOauth2Redirect',
  request: { params: z.object({ provider: ProviderParamsSchema }) },
  responses: {
    302: { description: 'Redirect to provider' },
    400: BadRequestResponse,
    500: ServerErrorResponse,
  },
  security: [],
})

export const getAuthOauth2ProviderCallbackRoute = createRoute({
  method: 'get',
  path: '/auth/oauth2/{provider}/callback',
  tags: ['Auth'],
  summary: 'OAuth2 callback',
  operationId: 'authOauth2Callback',
  request: { params: z.object({ provider: ProviderParamsSchema }) },
  responses: {
    302: { description: 'Redirect after callback' },
    400: BadRequestResponse,
    500: ServerErrorResponse,
  },
  security: [],
})

export const postAuthOauth2TokenRoute = createRoute({
  method: 'post',
  path: '/auth/oauth2/token',
  tags: ['Auth'],
  summary: 'Exchange one-time token for JWT',
  operationId: 'authOauth2TokenExchange',
  request: {
    body: {
      content: { 'application/json': { schema: OAuth2TokenExchangeSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Token issued',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
  security: [],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'List users',
  operationId: 'usersList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      search: SearchParamsSchema,
      'filter[username]': FilterUsernameParamsSchema,
      'filter[email]': FilterEmailParamsSchema,
      'filter[user_group]': FilterUserGroupParamsSchema,
      'filter[enabled]': FilterEnabledParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Users',
      content: { 'application/json': { schema: UserListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create user (admin)',
  operationId: 'usersCreate',
  request: {
    body: { content: { 'application/json': { schema: UserCreateSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'User created',
      content: { 'application/json': { schema: IdResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Get user',
  operationId: 'usersGet',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: { description: 'User', content: { 'application/json': { schema: UserResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Delete user (admin)',
  operationId: 'usersDelete',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const patchUsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Update user',
  operationId: 'usersUpdate',
  request: {
    params: z.object({ userId: UserIdParamsSchema }),
    body: { content: { 'application/json': { schema: UserPatchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'User updated',
      content: { 'application/json': { schema: IdResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Users'],
  summary: 'Current user profile',
  operationId: 'usersMe',
  responses: {
    200: {
      description: 'Profile',
      content: { 'application/json': { schema: UserProfileResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getMeSettingsRoute = createRoute({
  method: 'get',
  path: '/me/settings',
  tags: ['Settings'],
  summary: 'All user settings',
  operationId: 'userSettingsList',
  responses: {
    200: {
      description: 'Settings',
      content: { 'application/json': { schema: UserSettingListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const putMeSettingsCategoryRoute = createRoute({
  method: 'put',
  path: '/me/settings/{category}',
  tags: ['Settings'],
  summary: 'Create/update settings by category',
  operationId: 'userSettingsUpsert',
  request: {
    params: z.object({ category: CategoryParamsSchema }),
    body: { content: { 'application/json': { schema: UserSettingUpsertSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteMeSettingsCategoryRoute = createRoute({
  method: 'delete',
  path: '/me/settings/{category}',
  tags: ['Settings'],
  summary: 'Delete settings by category',
  operationId: 'userSettingsDelete',
  request: { params: z.object({ category: CategoryParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Transaction search (simple filters)',
  operationId: 'transactionsList',
  request: {
    query: z.object({
      from: FromParamsSchema,
      to: ToParamsSchema,
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      'filter[transaction_id]': FilterTransactionIdParamsSchema,
      'filter[src_ip]': FilterSrcIpParamsSchema,
      'filter[dst_ip]': FilterDstIpParamsSchema,
      'filter[protocol]': FilterProtocolParamsSchema,
      'filter[method]': FilterMethodParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Transactions list',
      content: {
        'application/json': {
          schema: CallListResponseSchema,
          example: {
            data: {
              items: [
                {
                  id: 123,
                  sid: 'abc-123',
                  src_ip: '127.0.0.1',
                  dst_ip: '127.0.0.1',
                  method: 'INVITE',
                  storage_lake: 'homer_lake_hot',
                  storage_volume: 'hot',
                },
              ],
              keys: ['id', 'sid', 'src_ip', 'dst_ip', 'method', 'storage_lake', 'storage_volume'],
            },
            meta: { pagination: { limit: 50, total: 1 } },
          },
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTransactionsSearchRoute = createRoute({
  method: 'post',
  path: '/transactions/search',
  tags: ['Transactions'],
  summary: 'Advanced transaction search',
  operationId: 'transactionsSearch',
  request: {
    body: { content: { 'application/json': { schema: SearchObjectSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Transactions list',
      content: { 'application/json': { schema: CallListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTransactionsMessagesRoute = createRoute({
  method: 'post',
  path: '/transactions/messages',
  tags: ['Transactions'],
  summary: 'Transaction messages',
  operationId: 'transactionMessagesList',
  request: {
    body: {
      content: { 'application/json': { schema: TransactionSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Messages',
      content: { 'application/json': { schema: MessageListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/messages/{messageId}',
  tags: ['Transactions'],
  summary: 'Message by ID',
  operationId: 'messagesGet',
  request: { params: z.object({ messageId: MessageIdParamsSchema }) },
  responses: {
    200: {
      description: 'Message',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getMessagesMessageIdDecodedRoute = createRoute({
  method: 'get',
  path: '/messages/{messageId}/decoded',
  tags: ['Transactions'],
  summary: 'Decoded message',
  operationId: 'messagesGetDecoded',
  request: { params: z.object({ messageId: MessageIdParamsSchema }) },
  responses: {
    200: {
      description: 'Decoded message',
      content: { 'application/json': { schema: MessageDecodedResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTransactionsQosRoute = createRoute({
  method: 'post',
  path: '/transactions/qos',
  tags: ['Transactions'],
  summary: 'Transaction QoS',
  operationId: 'transactionQosGet',
  request: {
    body: {
      content: { 'application/json': { schema: TransactionSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'QoS', content: { 'application/json': { schema: QosResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsRoute = createRoute({
  method: 'post',
  path: '/exports',
  tags: ['Exports'],
  summary: 'Create export (PCAP/TEXT)',
  operationId: 'exportsCreate',
  request: {
    body: { content: { 'application/json': { schema: ExportRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Export created',
      content: { 'application/json': { schema: ExportResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getExportsExportIdRoute = createRoute({
  method: 'get',
  path: '/exports/{exportId}',
  tags: ['Exports'],
  summary: 'Export status',
  operationId: 'exportsGet',
  request: { params: z.object({ exportId: ExportIdParamsSchema }) },
  responses: {
    200: {
      description: 'Status',
      content: { 'application/json': { schema: ExportStatusResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getExportsExportIdDownloadRoute = createRoute({
  method: 'get',
  path: '/exports/{exportId}/download',
  tags: ['Exports'],
  summary: 'Download export file',
  operationId: 'exportsDownload',
  request: { params: z.object({ exportId: ExportIdParamsSchema }) },
  responses: {
    200: {
      description: 'Export file (binary)',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postImportsPcapRoute = createRoute({
  method: 'post',
  path: '/imports/pcap',
  tags: ['Imports'],
  summary: 'Import PCAP',
  operationId: 'importsPcapCreate',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().openapi({ type: 'string', format: 'binary' }),
              override_to_current_time: z
                .enum(['true', 'false', '1', '0', 'on', 'off'])
                .exactOptional()
                .openapi({
                  description:
                    'When "true" / "1" / "on", packet timestamps are remapped so the first SIP frame is "now" and later frames keep the same deltas as in the capture.\n',
                }),
              force_sip_table: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. When set, every decoded SIP message is written to this logical DuckLake table instead of auto-routing by method. Values: call, registration, default; aliases: reg, register, hep_proto_1_call, 1_call, etc. Same as multipart field force_table.\n',
                  example: 'registration',
                }),
              force_table: z
                .string()
                .exactOptional()
                .openapi({ description: 'Alias of force_sip_table (same semantics).' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Import completed',
      content: { 'application/json': { schema: ImportResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getDashboardsRoute = createRoute({
  method: 'get',
  path: '/dashboards',
  tags: ['Dashboards'],
  summary: 'List dashboards',
  operationId: 'dashboardsList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Dashboards',
      content: { 'application/json': { schema: DashboardListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postDashboardsRoute = createRoute({
  method: 'post',
  path: '/dashboards',
  tags: ['Dashboards'],
  summary: 'Create dashboard',
  operationId: 'dashboardsCreate',
  request: {
    body: { content: { 'application/json': { schema: DashboardElementSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getDashboardsDashboardIdRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardId}',
  tags: ['Dashboards'],
  summary: 'Get dashboard',
  operationId: 'dashboardsGet',
  request: { params: z.object({ dashboardId: DashboardIdParamsSchema }) },
  responses: {
    200: {
      description: 'Dashboard',
      content: { 'application/json': { schema: DashboardResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putDashboardsDashboardIdRoute = createRoute({
  method: 'put',
  path: '/dashboards/{dashboardId}',
  tags: ['Dashboards'],
  summary: 'Update dashboard',
  operationId: 'dashboardsUpdate',
  request: {
    params: z.object({ dashboardId: DashboardIdParamsSchema }),
    body: { content: { 'application/json': { schema: DashboardElementSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteDashboardsDashboardIdRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardId}',
  tags: ['Dashboards'],
  summary: 'Delete dashboard',
  operationId: 'dashboardsDelete',
  request: { params: z.object({ dashboardId: DashboardIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMeDashboardsResetRoute = createRoute({
  method: 'post',
  path: '/me/dashboards/reset',
  tags: ['Dashboards'],
  summary: 'Reset user dashboards',
  operationId: 'dashboardsReset',
  responses: {
    200: {
      description: 'Reset',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getMappingsRoute = createRoute({
  method: 'get',
  path: '/mappings',
  tags: ['Mappings'],
  summary: 'List mappings',
  operationId: 'mappingsList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      'filter[profile]': FilterMappingProfileParamsSchema,
      'filter[hepid]': FilterHepIdParamsSchema,
      'filter[hep_alias]': FilterHepAliasParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Mappings',
      content: { 'application/json': { schema: MappingListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postMappingsRoute = createRoute({
  method: 'post',
  path: '/mappings',
  tags: ['Mappings'],
  summary: 'Create mapping (admin)',
  operationId: 'mappingsCreate',
  request: {
    body: { content: { 'application/json': { schema: MappingSchemaSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const getMappingsMappingIdRoute = createRoute({
  method: 'get',
  path: '/mappings/{mappingId}',
  tags: ['Mappings'],
  summary: 'Mapping by ID',
  operationId: 'mappingsGet',
  request: { params: z.object({ mappingId: MappingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Mapping',
      content: { 'application/json': { schema: MappingResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putMappingsMappingIdRoute = createRoute({
  method: 'put',
  path: '/mappings/{mappingId}',
  tags: ['Mappings'],
  summary: 'Update mapping (admin)',
  operationId: 'mappingsUpdate',
  request: {
    params: z.object({ mappingId: MappingIdParamsSchema }),
    body: { content: { 'application/json': { schema: MappingSchemaSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteMappingsMappingIdRoute = createRoute({
  method: 'delete',
  path: '/mappings/{mappingId}',
  tags: ['Mappings'],
  summary: 'Delete mapping (admin)',
  operationId: 'mappingsDelete',
  request: { params: z.object({ mappingId: MappingIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getMappingsFieldsRoute = createRoute({
  method: 'get',
  path: '/mappings/fields',
  tags: ['Mappings'],
  summary: 'Mapping fields by profile',
  operationId: 'mappingsFieldsList',
  request: {
    query: z.object({
      hepid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'hepid', in: 'query', required: true, schema: { type: 'integer' } },
        }),
      profile: z
        .string()
        .openapi({
          param: { name: 'profile', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Fields',
      content: { 'application/json': { schema: MappingFieldsResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getHepsubsRoute = createRoute({
  method: 'get',
  path: '/hepsubs',
  tags: ['Hepsub'],
  summary: 'List HEP subscriptions',
  operationId: 'hepsubsList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      'filter[profile]': FilterMappingProfileParamsSchema,
      'filter[hepid]': FilterHepIdParamsSchema,
      'filter[hep_alias]': FilterHepAliasParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'HEP subscriptions',
      content: { 'application/json': { schema: HepsubListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postHepsubsRoute = createRoute({
  method: 'post',
  path: '/hepsubs',
  tags: ['Hepsub'],
  summary: 'Create HEP subscription (admin)',
  operationId: 'hepsubsCreate',
  request: {
    body: { content: { 'application/json': { schema: HepsubSchemaSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const getHepsubsHepsubIdRoute = createRoute({
  method: 'get',
  path: '/hepsubs/{hepsubId}',
  tags: ['Hepsub'],
  summary: 'HEP subscription by ID',
  operationId: 'hepsubsGet',
  request: { params: z.object({ hepsubId: HepsubIdParamsSchema }) },
  responses: {
    200: {
      description: 'HEP subscription',
      content: { 'application/json': { schema: HepsubResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putHepsubsHepsubIdRoute = createRoute({
  method: 'put',
  path: '/hepsubs/{hepsubId}',
  tags: ['Hepsub'],
  summary: 'Update HEP subscription (admin)',
  operationId: 'hepsubsUpdate',
  request: {
    params: z.object({ hepsubId: HepsubIdParamsSchema }),
    body: { content: { 'application/json': { schema: HepsubSchemaSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteHepsubsHepsubIdRoute = createRoute({
  method: 'delete',
  path: '/hepsubs/{hepsubId}',
  tags: ['Hepsub'],
  summary: 'Delete HEP subscription (admin)',
  operationId: 'hepsubsDelete',
  request: { params: z.object({ hepsubId: HepsubIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAliasesRoute = createRoute({
  method: 'get',
  path: '/aliases',
  tags: ['Aliases'],
  summary: 'List aliases',
  operationId: 'aliasesList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      'filter[alias]': FilterAliasParamsSchema,
      'filter[ip]': FilterIpParamsSchema,
      'filter[capture_id]': FilterCaptureIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Aliases',
      content: { 'application/json': { schema: AliasListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postAliasesRoute = createRoute({
  method: 'post',
  path: '/aliases',
  tags: ['Aliases'],
  summary: 'Create alias (admin)',
  operationId: 'aliasesCreate',
  request: {
    body: { content: { 'application/json': { schema: AliasStructSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const putAliasesAliasIdRoute = createRoute({
  method: 'put',
  path: '/aliases/{aliasId}',
  tags: ['Aliases'],
  summary: 'Update alias (admin)',
  operationId: 'aliasesUpdate',
  request: {
    params: z.object({ aliasId: AliasIdParamsSchema }),
    body: { content: { 'application/json': { schema: AliasStructSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAliasesAliasIdRoute = createRoute({
  method: 'delete',
  path: '/aliases/{aliasId}',
  tags: ['Aliases'],
  summary: 'Delete alias (admin)',
  operationId: 'aliasesDelete',
  request: { params: z.object({ aliasId: AliasIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getIpaliasesRoute = createRoute({
  method: 'get',
  path: '/ipaliases',
  tags: ['Aliases'],
  summary: 'List IP aliases',
  operationId: 'ipaliasesList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'filter[alias]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter[alias]',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[ip]': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filter[ip]', in: 'query', schema: { type: 'string' }, required: false },
        }),
      'filter[capture_id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter[capture_id]',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of IP aliases',
      content: { 'application/json': { schema: AliasListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpaliasesRoute = createRoute({
  method: 'post',
  path: '/ipaliases',
  tags: ['Aliases'],
  summary: 'Create IP alias (admin)',
  operationId: 'ipaliasesCreate',
  request: {
    body: { content: { 'application/json': { schema: AliasStructSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const putIpaliasesAliasIdRoute = createRoute({
  method: 'put',
  path: '/ipaliases/{aliasId}',
  tags: ['Aliases'],
  summary: 'Update IP alias (admin)',
  operationId: 'ipaliasesUpdate',
  request: {
    params: z.object({ aliasId: AliasIdParamsSchema }),
    body: { content: { 'application/json': { schema: AliasStructSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteIpaliasesAliasIdRoute = createRoute({
  method: 'delete',
  path: '/ipaliases/{aliasId}',
  tags: ['Aliases'],
  summary: 'Delete IP alias (admin)',
  operationId: 'ipaliasesDelete',
  request: { params: z.object({ aliasId: AliasIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAdvancedRoute = createRoute({
  method: 'get',
  path: '/advanced',
  tags: ['Settings'],
  summary: 'List global settings',
  operationId: 'advancedList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'filter[category]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter[category]',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[param]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter[param]',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of global settings',
      content: { 'application/json': { schema: GlobalSettingListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postAdvancedRoute = createRoute({
  method: 'post',
  path: '/advanced',
  tags: ['Settings'],
  summary: 'Create global setting (admin)',
  operationId: 'advancedCreate',
  request: {
    body: {
      content: { 'application/json': { schema: GlobalSettingUpsertSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const getAdvancedGuidRoute = createRoute({
  method: 'get',
  path: '/advanced/{guid}',
  tags: ['Settings'],
  summary: 'Get global setting by GUID',
  operationId: 'advancedGet',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: { name: 'guid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Global setting',
      content: { 'application/json': { schema: GlobalSettingResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putAdvancedGuidRoute = createRoute({
  method: 'put',
  path: '/advanced/{guid}',
  tags: ['Settings'],
  summary: 'Update global setting (admin)',
  operationId: 'advancedUpdate',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: { name: 'guid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GlobalSettingUpsertSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAdvancedGuidRoute = createRoute({
  method: 'delete',
  path: '/advanced/{guid}',
  tags: ['Settings'],
  summary: 'Delete global setting (admin)',
  operationId: 'advancedDelete',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: { name: 'guid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getScriptsRoute = createRoute({
  method: 'get',
  path: '/scripts',
  tags: ['Settings'],
  summary: 'List HEP scripts',
  operationId: 'scriptsList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'filter[profile]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter[profile]',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[type]': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filter[type]', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of HEP scripts',
      content: { 'application/json': { schema: HepScriptListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postScriptsRoute = createRoute({
  method: 'post',
  path: '/scripts',
  tags: ['Settings'],
  summary: 'Create HEP script (admin)',
  operationId: 'scriptsCreate',
  request: {
    body: { content: { 'application/json': { schema: HepScriptUpsertSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const getScriptsScriptIdRoute = createRoute({
  method: 'get',
  path: '/scripts/{scriptId}',
  tags: ['Settings'],
  summary: 'Get HEP script by ID',
  operationId: 'scriptsGet',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: { name: 'scriptId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'HEP script',
      content: { 'application/json': { schema: HepScriptResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putScriptsScriptIdRoute = createRoute({
  method: 'put',
  path: '/scripts/{scriptId}',
  tags: ['Settings'],
  summary: 'Update HEP script (admin)',
  operationId: 'scriptsUpdate',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: { name: 'scriptId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: HepScriptUpsertSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteScriptsScriptIdRoute = createRoute({
  method: 'delete',
  path: '/scripts/{scriptId}',
  tags: ['Settings'],
  summary: 'Delete HEP script (admin)',
  operationId: 'scriptsDelete',
  request: {
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: { name: 'scriptId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getOpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/openapi.json',
  tags: ['System'],
  summary: 'Get OpenAPI specification',
  operationId: 'openapiSpec',
  responses: {
    200: {
      description: 'OpenAPI 3.0 specification in JSON format',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
  security: [],
})

export const getAuthTokensRoute = createRoute({
  method: 'get',
  path: '/auth-tokens',
  tags: ['Tokens'],
  summary: 'List auth tokens (admin)',
  operationId: 'authTokensList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      'filter[name]': FilterTokenNameParamsSchema,
      'filter[active]': FilterTokenActiveParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Tokens',
      content: { 'application/json': { schema: AuthTokenListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const postAuthTokensRoute = createRoute({
  method: 'post',
  path: '/auth-tokens',
  tags: ['Tokens'],
  summary: 'Create auth token (admin)',
  operationId: 'authTokensCreate',
  request: {
    body: { content: { 'application/json': { schema: AuthTokenCreateSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AuthTokenCreateResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: ServerErrorResponse,
  },
})

export const getAuthTokensTokenIdRoute = createRoute({
  method: 'get',
  path: '/auth-tokens/{tokenId}',
  tags: ['Tokens'],
  summary: 'Get auth token (admin)',
  operationId: 'authTokensGet',
  request: { params: z.object({ tokenId: AuthTokenIdParamsSchema }) },
  responses: {
    200: {
      description: 'Token',
      content: { 'application/json': { schema: AuthTokenResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putAuthTokensTokenIdRoute = createRoute({
  method: 'put',
  path: '/auth-tokens/{tokenId}',
  tags: ['Tokens'],
  summary: 'Update auth token (admin)',
  operationId: 'authTokensUpdate',
  request: {
    params: z.object({ tokenId: AuthTokenIdParamsSchema }),
    body: { content: { 'application/json': { schema: AuthTokenUpdateSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAuthTokensTokenIdRoute = createRoute({
  method: 'delete',
  path: '/auth-tokens/{tokenId}',
  tags: ['Tokens'],
  summary: 'Delete auth token (admin)',
  operationId: 'authTokensDelete',
  request: { params: z.object({ tokenId: AuthTokenIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAgentsSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/agents/subscriptions',
  tags: ['Agents'],
  summary: 'Agent subscriptions',
  operationId: 'agentSubscriptionsList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      'filter[type]': FilterAgentTypeParamsSchema,
      'filter[node]': FilterAgentNodeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Subscriptions',
      content: { 'application/json': { schema: AgentSubListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postAgentsSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/agents/subscriptions',
  tags: ['Agents'],
  summary: 'Create agent subscription (Auth-Token)',
  operationId: 'agentSubscriptionsCreate',
  request: {
    body: { content: { 'application/json': { schema: AgentSubSchema } }, required: true },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
  security: [{ authTokenHeader: [] }],
})

export const getAgentsSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/agents/subscriptions/{subscriptionId}',
  tags: ['Agents'],
  summary: 'Agent subscription by ID',
  operationId: 'agentSubscriptionsGet',
  request: { params: z.object({ subscriptionId: AgentSubIdParamsSchema }) },
  responses: {
    200: {
      description: 'Subscription',
      content: { 'application/json': { schema: AgentSubResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putAgentsSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'put',
  path: '/agents/subscriptions/{subscriptionId}',
  tags: ['Agents'],
  summary: 'Update agent subscription',
  operationId: 'agentSubscriptionsUpdate',
  request: {
    params: z.object({ subscriptionId: AgentSubIdParamsSchema }),
    body: { content: { 'application/json': { schema: AgentSubSchema } }, required: true },
  },
  responses: {
    200: { description: 'Updated', content: { 'application/json': { schema: IdResponseSchema } } },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAgentsSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/agents/subscriptions/{subscriptionId}',
  tags: ['Agents'],
  summary: 'Delete agent subscription',
  operationId: 'agentSubscriptionsDelete',
  request: { params: z.object({ subscriptionId: AgentSubIdParamsSchema }) },
  responses: {
    204: { description: 'Deleted' },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAgentsTypesRoute = createRoute({
  method: 'get',
  path: '/agents/types',
  tags: ['Agents'],
  summary: 'Agent types',
  operationId: 'agentTypesList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Types',
      content: { 'application/json': { schema: AgentTypeListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getAgentsTypesTypeRoute = createRoute({
  method: 'get',
  path: '/agents/types/{type}',
  tags: ['Agents'],
  summary: 'Agent subscriptions by type',
  operationId: 'agentTypesSubscriptionsList',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: { name: 'type', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Subscriptions',
      content: { 'application/json': { schema: AgentSubListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postAgentsSearchRoute = createRoute({
  method: 'post',
  path: '/agents/search',
  tags: ['Agents'],
  summary: 'Search subscriptions',
  operationId: 'agentSubscriptionsSearch',
  request: {
    body: { content: { 'application/json': { schema: AgentSearchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Result',
      content: { 'application/json': { schema: AgentSubListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getDbNodesRoute = createRoute({
  method: 'get',
  path: '/db/nodes',
  tags: ['System'],
  summary: 'DB nodes',
  operationId: 'dbNodesList',
  responses: {
    200: {
      description: 'Nodes',
      content: { 'application/json': { schema: NodeListResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getModulesRoute = createRoute({
  method: 'get',
  path: '/modules',
  tags: ['System'],
  summary: 'Modules status',
  operationId: 'modulesStatusGet',
  responses: {
    200: {
      description: 'Status',
      content: { 'application/json': { schema: ModulesStatusResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postStatisticsQueryRoute = createRoute({
  method: 'post',
  path: '/statistics/query',
  tags: ['Statistics'],
  summary: 'Statistics query',
  description:
    'Executes a read-only SQL query for Grafana-style statistics panels.\nEach `rawquery` in the request body is validated before execution (same\nrules as `POST /api/v4/query`): allowed statement types include SELECT,\nWITH, SHOW, DESCRIBE, EXPLAIN, PRAGMA; semicolons and DML/DDL are rejected.\n',
  operationId: 'statisticsQuery',
  request: {
    body: { content: { 'application/json': { schema: StatisticQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Response',
      content: { 'application/json': { schema: StatisticResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getStatisticsDatabasesRoute = createRoute({
  method: 'get',
  path: '/statistics/databases',
  tags: ['Statistics'],
  summary: 'Statistics databases',
  operationId: 'statisticsDatabasesList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Databases',
      content: { 'application/json': { schema: StatisticDbResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getStatisticsMeasurementsRoute = createRoute({
  method: 'get',
  path: '/statistics/measurements',
  tags: ['Statistics'],
  summary: 'Measurements by DB',
  operationId: 'statisticsMeasurementsList',
  request: {
    query: z.object({
      db: z
        .string()
        .openapi({
          param: { name: 'db', in: 'query', required: true, schema: { type: 'string' } },
        }),
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Measurements',
      content: { 'application/json': { schema: StatisticMeasurementsResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getStatisticsMetricsRoute = createRoute({
  method: 'get',
  path: '/statistics/metrics',
  tags: ['Statistics'],
  summary: 'Metrics by DB',
  operationId: 'statisticsMetricsList',
  request: {
    query: z.object({
      db: z
        .string()
        .openapi({
          param: { name: 'db', in: 'query', required: true, schema: { type: 'string' } },
        }),
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Metrics',
      content: { 'application/json': { schema: StatisticMetricsResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getStatisticsTagsRoute = createRoute({
  method: 'get',
  path: '/statistics/tags',
  tags: ['Statistics'],
  summary: 'Tags by DB',
  operationId: 'statisticsTagsList',
  request: {
    query: z.object({
      db: z
        .string()
        .openapi({
          param: { name: 'db', in: 'query', required: true, schema: { type: 'string' } },
        }),
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Tags',
      content: { 'application/json': { schema: StatisticTagsResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getLogsLokiLabelsRoute = createRoute({
  method: 'get',
  path: '/logs/loki/labels',
  tags: ['Logs'],
  summary: 'Loki labels',
  operationId: 'lokiLabelsList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Labels',
      content: { 'application/json': { schema: LokiLabelsResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getLogsLokiValuesRoute = createRoute({
  method: 'get',
  path: '/logs/loki/values',
  tags: ['Logs'],
  summary: 'Loki values',
  operationId: 'lokiValuesList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Values',
      content: { 'application/json': { schema: LokiValuesResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postLogsLokiQueryRoute = createRoute({
  method: 'post',
  path: '/logs/loki/query',
  tags: ['Logs'],
  summary: 'Loki query',
  operationId: 'lokiQuery',
  request: {
    body: { content: { 'application/json': { schema: LokiQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Response',
      content: { 'application/json': { schema: LokiQueryResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getIntegrationsGrafanaStatusRoute = createRoute({
  method: 'get',
  path: '/integrations/grafana/status',
  tags: ['Integrations'],
  summary: 'Grafana status',
  operationId: 'grafanaStatusGet',
  responses: {
    200: {
      description: 'Status',
      content: { 'application/json': { schema: GrafanaStatusResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getIntegrationsGrafanaFoldersRoute = createRoute({
  method: 'get',
  path: '/integrations/grafana/folders',
  tags: ['Integrations'],
  summary: 'Grafana folders',
  operationId: 'grafanaFoldersList',
  request: {
    query: z.object({
      'page[limit]': PageLimitParamsSchema,
      'page[cursor]': PageCursorParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Folders',
      content: { 'application/json': { schema: GrafanaFoldersResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const getIntegrationsGrafanaDashboardsUidRoute = createRoute({
  method: 'get',
  path: '/integrations/grafana/dashboards/{uid}',
  tags: ['Integrations'],
  summary: 'Grafana dashboard by UID',
  operationId: 'grafanaDashboardGet',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: { name: 'uid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard',
      content: { 'application/json': { schema: GrafanaDashboardResponseSchema } },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getStreamHepRoute = createRoute({
  method: 'get',
  path: '/stream/hep',
  tags: ['Stream'],
  summary: 'WebSocket HEP stream',
  operationId: 'hepStreamConnect',
  responses: {
    101: { description: 'Switching Protocols' },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})
