import { createRoute, z } from '@hono/zod-openapi'

const EventIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('EventId')

const OrganisationIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('OrganisationId')

const DistributionLevelIdSchema = z
  .enum(['0', '1', '2', '3', '4', '5'])
  .openapi({
    description:
      'Who will be able to see this event once it becomes published and eventually when it becomes pulled:\n  * `0` - Your organization only\n  * `1` - This community only\n  * `2` - Connected communities\n  * `3` - All communities\n  * `4` - Sharing group\n  * `5` - Inherit Event\n',
    example: '4',
  })
  .openapi('DistributionLevelId')

const EventInfoSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'logged source ip' })
  .openapi('EventInfo')

const UUIDSchema = z
  .uuid()
  .openapi({ example: 'c99506a6-1255-4b71-afa5-7b8ba48c3b1b' })
  .openapi('UUID')

const PublishedFlagSchema = z.boolean().default(false).openapi('PublishedFlag')

const AnalysisLevelIdSchema = z
  .enum(['0', '1', '2'])
  .openapi({
    description:
      'Represents the analysis maturity level.\n  * `0` - Initial\n  * `1` - Ongoing\n  * `2` - Complete\n',
  })
  .openapi('AnalysisLevelId')

const EventAttributeCountSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({ example: '321' })
  .openapi('EventAttributeCount')

const NullableTimestampSchema = z
  .string()
  .regex(/^\d+$|^$/)
  .nullable()
  .default('0')
  .openapi({ example: '1617875568' })
  .openapi('NullableTimestamp')

const SharingGroupIntIdSchema = z
  .string()
  .regex(/^\d+$|^$/)
  .max(10)
  .nullable()
  .openapi({ example: '1' })
  .openapi('SharingGroupIntId')

const SharingGroupUuidIdSchema = z.uuid().nullable().openapi('SharingGroupUuidId')

const SharingGroupIdSchema = z
  .xor([SharingGroupIntIdSchema, SharingGroupUuidIdSchema])
  .openapi('SharingGroupId')

const EventProposalEmailLockSchema = z.boolean().openapi('EventProposalEmailLock')

const IsLockedSchema = z.boolean().openapi('IsLocked')

const ThreatLevelIdSchema = z
  .enum(['1', '2', '3', '4'])
  .openapi({
    description:
      'Represents the threat level.\n  * `1` - High\n  * `2` - Medium\n  * `3` - Low\n  * `4` - Undefined\n',
  })
  .openapi('ThreatLevelId')

const TimestampSchema = z
  .string()
  .regex(/^\d+$/)
  .default('0')
  .openapi({ example: '1617875568' })
  .openapi('Timestamp')

const DisableCorrelationFlagSchema = z.boolean().default(false).openapi('DisableCorrelationFlag')

const ExtendsUUIDSchema = z
  .string()
  .max(36)
  .nullable()
  .openapi({ example: 'c99506a6-1255-4b71-afa5-7b8ba48c3b1b' })
  .openapi('ExtendsUUID')

const EventNoIdSchema = z
  .object({
    org_id: OrganisationIdSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    info: EventInfoSchema.exactOptional(),
    orgc_id: OrganisationIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    date: z.string().exactOptional().openapi({ example: '1991-01-15' }),
    published: PublishedFlagSchema.exactOptional(),
    analysis: AnalysisLevelIdSchema.exactOptional(),
    attribute_count: EventAttributeCountSchema.exactOptional(),
    timestamp: NullableTimestampSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    proposal_email_lock: EventProposalEmailLockSchema.exactOptional(),
    locked: IsLockedSchema.exactOptional(),
    threat_level_id: ThreatLevelIdSchema.exactOptional(),
    publish_timestamp: TimestampSchema.exactOptional(),
    sighting_timestamp: TimestampSchema.exactOptional(),
    disable_correlation: DisableCorrelationFlagSchema.exactOptional(),
    extends_uuid: ExtendsUUIDSchema.exactOptional(),
    event_creator_email: z.email().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventNoId')

const EventSchema = z
  .object({ id: EventIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(EventNoIdSchema)
  .openapi('Event')

const FeedIdSchema = z.string().regex(/^\d+$/).max(10).openapi({ example: '3' }).openapi('FeedId')

const FeedNameSchema = z
  .string()
  .max(255)
  .openapi({ example: 'CIRCL OSINT Feed' })
  .openapi('FeedName')

const FeedProviderSchema = z.string().openapi({ example: 'CIRCL' }).openapi('FeedProvider')

const FeedUrlSchema = z
  .string()
  .openapi({ example: 'https://www.circl.lu/doc/misp/feed-osint' })
  .openapi('FeedUrl')

const FeedRulesSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'Stringified JSON filter rules.',
    example: '{"tags":{"OR":[],"NOT":[]},"orgs":{"OR":[],"NOT":[]},"url_params":""}',
  })
  .openapi('FeedRules')

const FeedEnabledFlagSchema = z.boolean().openapi('FeedEnabledFlag')

const TagIdSchema = z.string().regex(/^\d+$/).max(10).openapi({ example: '12345' }).openapi('TagId')

const IsDefaultSchema = z.boolean().openapi('IsDefault')

const FeedSourceFormatSchema = z.enum(['1', 'csv', 'freetext', 'misp']).openapi('FeedSourceFormat')

const FeedFixedEventSchema = z
  .boolean()
  .openapi({ description: 'target_event option might be considered' })
  .openapi('FeedFixedEvent')

const FeedDeltaMergeFlagSchema = z
  .boolean()
  .openapi({ description: 'Merge attributes (only add new attribute, remove revoked attributes)' })
  .openapi('FeedDeltaMergeFlag')

const FeedOverrideIDSFlagSchema = z
  .boolean()
  .openapi({ description: 'The IDS flags will be set to Off for this feed' })
  .openapi('FeedOverrideIDSFlag')

const FeedSettingsSchema = z
  .string()
  .nullable()
  .openapi({
    example:
      '{"csv":{"value":"","delimiter":""},"common":{"excluderegex":""},"disable_correlation":"1"}',
  })
  .openapi('FeedSettings')

const FeedInputSourceSchema = z
  .enum(['local', 'network'])
  .openapi({
    description:
      'Specify whether the source (url field) is a directory (local) or a genuine url (network).',
  })
  .openapi('FeedInputSource')

const FeedDeleteLocalFileFlagSchema = z
  .boolean()
  .openapi({ description: 'The IDS flags will be set to Off for this feed' })
  .openapi('FeedDeleteLocalFileFlag')

const FeedLookupVisibleFlagSchema = z
  .boolean()
  .openapi({ description: 'The lookup will not be visible in the feed correlation' })
  .openapi('FeedLookupVisibleFlag')

const FeedHeadersSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'Headers to be passed with the requests. All separated by \n',
    example: 'X-Custom-Header-A: Foo\nX-Custom-Header-B: Bar\n',
  })
  .openapi('FeedHeaders')

const FeedCachingEnabledFlagSchema = z
  .boolean()
  .openapi({ description: 'The feed is cached' })
  .openapi('FeedCachingEnabledFlag')

const FeedForceToIDSFlagSchema = z
  .boolean()
  .openapi({ description: 'The IDS flags will be set to On for this feed' })
  .openapi('FeedForceToIDSFlag')

const FeedCacheTimestampSchema = z
  .union([TimestampSchema, z.boolean()])
  .nullable()
  .openapi('FeedCacheTimestamp')

const FeedNoIdSchema = z
  .object({
    name: FeedNameSchema.exactOptional(),
    provider: FeedProviderSchema.exactOptional(),
    url: FeedUrlSchema.exactOptional(),
    rules: FeedRulesSchema.exactOptional(),
    enabled: FeedEnabledFlagSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    tag_id: TagIdSchema.exactOptional(),
    default: IsDefaultSchema.exactOptional(),
    source_format: FeedSourceFormatSchema.exactOptional(),
    fixed_event: FeedFixedEventSchema.exactOptional(),
    delta_merge: FeedDeltaMergeFlagSchema.exactOptional(),
    event_id: EventIdSchema.exactOptional(),
    publish: PublishedFlagSchema.exactOptional(),
    override_ids: FeedOverrideIDSFlagSchema.exactOptional(),
    settings: FeedSettingsSchema.exactOptional(),
    input_source: FeedInputSourceSchema.exactOptional(),
    delete_local_file: FeedDeleteLocalFileFlagSchema.exactOptional(),
    lookup_visible: FeedLookupVisibleFlagSchema.exactOptional(),
    headers: FeedHeadersSchema.exactOptional(),
    caching_enabled: FeedCachingEnabledFlagSchema.exactOptional(),
    force_to_ids: FeedForceToIDSFlagSchema.exactOptional(),
    orgc_id: OrganisationIdSchema.exactOptional(),
    cache_timestamp: FeedCacheTimestampSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FeedNoId')

const FeedSchema = z
  .object({ id: FeedIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(FeedNoIdSchema)
  .openapi('Feed')

const OrganisationNameSchema = z
  .string()
  .max(255)
  .openapi({ example: 'ORGNAME' })
  .openapi('OrganisationName')

const EventOrganisationSchema = z
  .object({
    id: OrganisationIdSchema.exactOptional(),
    name: OrganisationNameSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventOrganisation')

const AttributeIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('AttributeId')

const ObjectIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('ObjectId')

const NullableObjectRelationSchema = z
  .string()
  .max(255)
  .nullable()
  .openapi({ example: 'sensor' })
  .openapi('NullableObjectRelation')

const AttributeCategorySchema = z
  .enum([
    'Internal reference',
    'Targeting data',
    'Antivirus detection',
    'Payload delivery',
    'Artifacts dropped',
    'Payload installation',
    'Persistence mechanism',
    'Network activity',
    'Payload type',
    'Attribution',
    'External analysis',
    'Financial fraud',
    'Support Tool',
    'Social network',
    'Person',
    'Other',
  ])
  .openapi('AttributeCategory')

const AttributeTypeSchema = z
  .enum([
    'md5',
    'sha1',
    'sha256',
    'filename',
    'pdb',
    'filename|md5',
    'filename|sha1',
    'filename|sha256',
    'ip-src',
    'ip-dst',
    'hostname',
    'domain',
    'domain|ip',
    'email',
    'email-src',
    'eppn',
    'email-dst',
    'email-subject',
    'email-attachment',
    'email-body',
    'float',
    'git-commit-id',
    'url',
    'http-method',
    'user-agent',
    'ja3-fingerprint-md5',
    'jarm-fingerprint',
    'favicon-mmh3',
    'hassh-md5',
    'hasshserver-md5',
    'regkey',
    'regkey|value',
    'AS',
    'snort',
    'suricata',
    'bro',
    'zeek',
    'community-id',
    'pattern-in-file',
    'pattern-in-traffic',
    'pattern-in-memory',
    'pattern-filename',
    'pgp-public-key',
    'pgp-private-key',
    'yara',
    'stix2-pattern',
    'sigma',
    'gene',
    'kusto-query',
    'mime-type',
    'identity-card-number',
    'cookie',
    'vulnerability',
    'cpe',
    'weakness',
    'attachment',
    'malware-sample',
    'link',
    'comment',
    'text',
    'hex',
    'other',
    'named pipe',
    'mutex',
    'process-state',
    'target-user',
    'target-email',
    'target-machine',
    'target-org',
    'target-location',
    'target-external',
    'btc',
    'dash',
    'xmr',
    'iban',
    'bic',
    'bank-account-nr',
    'aba-rtn',
    'bin',
    'cc-number',
    'prtn',
    'phone-number',
    'threat-actor',
    'campaign-name',
    'campaign-id',
    'malware-type',
    'uri',
    'authentihash',
    'vhash',
    'ssdeep',
    'imphash',
    'telfhash',
    'pehash',
    'impfuzzy',
    'sha224',
    'sha384',
    'sha512',
    'sha512/224',
    'sha512/256',
    'sha3-224',
    'sha3-256',
    'sha3-384',
    'sha3-512',
    'tlsh',
    'cdhash',
    'filename|authentihash',
    'filename|vhash',
    'filename|ssdeep',
    'filename|imphash',
    'filename|impfuzzy',
    'filename|pehash',
    'filename|sha224',
    'filename|sha384',
    'filename|sha512',
    'filename|sha512/224',
    'filename|sha512/256',
    'filename|sha3-224',
    'filename|sha3-256',
    'filename|sha3-384',
    'filename|sha3-512',
    'filename|tlsh',
    'windows-scheduled-task',
    'windows-service-name',
    'windows-service-displayname',
    'whois-registrant-email',
    'whois-registrant-phone',
    'whois-registrant-name',
    'whois-registrant-org',
    'whois-registrar',
    'whois-creation-date',
    'x509-fingerprint-sha1',
    'x509-fingerprint-md5',
    'x509-fingerprint-sha256',
    'dns-soa-email',
    'size-in-bytes',
    'counter',
    'datetime',
    'port',
    'ip-dst|port',
    'ip-src|port',
    'hostname|port',
    'mac-address',
    'mac-eui-64',
    'email-dst-display-name',
    'email-src-display-name',
    'email-header',
    'email-reply-to',
    'email-x-mailer',
    'email-mime-boundary',
    'email-thread-index',
    'email-message-id',
    'github-username',
    'github-repository',
    'github-organisation',
    'jabber-id',
    'twitter-id',
    'dkim',
    'dkim-signature',
    'first-name',
    'middle-name',
    'last-name',
    'full-name',
    'date-of-birth',
    'place-of-birth',
    'gender',
    'passport-number',
    'passport-country',
    'passport-expiration',
    'redress-number',
    'nationality',
    'visa-number',
    'issue-date-of-the-visa',
    'primary-residence',
    'country-of-residence',
    'special-service-request',
    'frequent-flyer-number',
    'travel-details',
    'payment-details',
    'place-port-of-original-embarkation',
    'place-port-of-clearance',
    'place-port-of-onward-foreign-destination',
    'passenger-name-record-locator-number',
    'mobile-application-id',
    'chrome-extension-id',
    'edge-extension-id',
    'cortex',
    'boolean',
    'anonymised',
  ])
  .openapi('AttributeType')

const AttributeValueSchema = z
  .string()
  .max(131071)
  .openapi({ example: '127.0.0.1' })
  .openapi('AttributeValue')

const ToIDSSchema = z.boolean().default(true).openapi('ToIDS')

const AttributeCommentSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'logged source ip' })
  .openapi('AttributeComment')

const SoftDeletedFlagSchema = z.boolean().default(false).openapi('SoftDeletedFlag')

const NullableMicroTimestampSchema = z
  .string()
  .regex(/^\d+$|^$/)
  .nullable()
  .default(null)
  .openapi({ example: '1581984000000000' })
  .openapi('NullableMicroTimestamp')

const TagNameSchema = z.string().max(255).openapi({ example: 'tlp:white' }).openapi('TagName')

const TagColourSchema = z.string().max(7).openapi({ example: '#ffffff' }).openapi('TagColour')

const IsExportableSchema = z.boolean().default(true).openapi('IsExportable')

const UserIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('UserId')

const HideTagFlagSchema = z.boolean().default(false).openapi('HideTagFlag')

const TagNumericalValueSchema = z
  .string()
  .regex(/^\d+$/)
  .nullable()
  .openapi({ example: '12345' })
  .openapi('TagNumericalValue')

const IsGalaxySchema = z.boolean().default(true).openapi('IsGalaxy')

const IsCustomGalaxySchema = z.boolean().default(true).openapi('IsCustomGalaxy')

const IsInheritedSchema = z.int32().default(1).openapi('IsInherited')

const TagNoIdSchema = z
  .object({
    name: TagNameSchema.exactOptional(),
    colour: TagColourSchema.exactOptional(),
    exportable: IsExportableSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    user_id: UserIdSchema.exactOptional(),
    hide_tag: HideTagFlagSchema.exactOptional(),
    numerical_value: TagNumericalValueSchema.exactOptional(),
    is_galaxy: IsGalaxySchema.exactOptional(),
    is_custom_galaxy: IsCustomGalaxySchema.exactOptional(),
    inherited: IsInheritedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagNoId')

const TagSchema = z
  .object({ id: TagIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(TagNoIdSchema)
  .openapi({
    description:
      'A tag is a simple method to classify an event with a simple string. The tag name can be freely chosen. The tag name can be also chosen from a fixed machine-tag vocabulary called MISP taxonomies',
  })
  .openapi('Tag')

const GalaxyIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('GalaxyId')

const GalaxyNameSchema = z
  .string()
  .max(255)
  .openapi({ example: 'Ransomware' })
  .openapi('GalaxyName')

const GalaxyTypeSchema = z
  .string()
  .max(255)
  .openapi({ example: 'ransomware' })
  .openapi('GalaxyType')

const GalaxyDescriptionSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'Ransomware galaxy based on ...' })
  .openapi('GalaxyDescription')

const GalaxyVersionSchema = z.string().max(255).openapi({ example: '1' }).openapi('GalaxyVersion')

const IconSchema = z.string().max(255).openapi({ example: 'globe' }).openapi('Icon')

const GalaxyNamespaceSchema = z
  .string()
  .max(255)
  .openapi({ example: 'misp' })
  .openapi('GalaxyNamespace')

const GalaxySchema = z
  .object({
    id: GalaxyIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    name: GalaxyNameSchema.exactOptional(),
    type: GalaxyTypeSchema.exactOptional(),
    description: GalaxyDescriptionSchema.exactOptional(),
    version: GalaxyVersionSchema.exactOptional(),
    icon: IconSchema.exactOptional(),
    namespace: GalaxyNamespaceSchema.exactOptional(),
    kill_chain_order: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        example: {
          'fraud-tactics': [
            'Initiation',
            'Target Compromise',
            'Perform Fraud',
            'Obtain Fraudulent Assets',
            'Assets Transfer',
            'Monetisation',
          ],
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('Galaxy')

const AttributeNoIdSchema = z
  .object({
    event_id: EventIdSchema.exactOptional(),
    object_id: ObjectIdSchema.exactOptional(),
    object_relation: NullableObjectRelationSchema.exactOptional(),
    category: AttributeCategorySchema.exactOptional(),
    type: AttributeTypeSchema.exactOptional(),
    value: AttributeValueSchema.exactOptional(),
    to_ids: ToIDSSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    timestamp: NullableTimestampSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    comment: AttributeCommentSchema.exactOptional(),
    deleted: SoftDeletedFlagSchema.exactOptional(),
    disable_correlation: DisableCorrelationFlagSchema.exactOptional(),
    first_seen: z
      .xor([NullableMicroTimestampSchema, z.iso.datetime({ offset: true })])
      .exactOptional(),
    last_seen: z
      .xor([NullableMicroTimestampSchema, z.iso.datetime({ offset: true })])
      .exactOptional(),
    Tag: z.array(TagSchema).exactOptional(),
    Galaxy: z.array(GalaxySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeNoId')

const AttributeSchema = z
  .object({ id: AttributeIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(AttributeNoIdSchema)
  .openapi('Attribute')

const AttributeListSchema = z.array(AttributeSchema).openapi('AttributeList')

const ObjectNameSchema = z
  .string()
  .max(131071)
  .openapi({ example: 'ail-leak' })
  .openapi('ObjectName')

const ObjectMetaCategorySchema = z.string().openapi('ObjectMetaCategory')

const ObjectDescriptionSchema = z.string().openapi('ObjectDescription')

const ObjectTemplateVersionSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({ example: '1' })
  .openapi('ObjectTemplateVersion')

const ObjectSchema = z
  .object({
    id: ObjectIdSchema.exactOptional(),
    name: ObjectNameSchema.exactOptional(),
    'meta-category': ObjectMetaCategorySchema.exactOptional(),
    description: ObjectDescriptionSchema.exactOptional(),
    template_uuid: UUIDSchema.exactOptional(),
    template_version: ObjectTemplateVersionSchema.exactOptional(),
    event_id: EventIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    timestamp: TimestampSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    comment: z.string().exactOptional(),
    deleted: z.boolean().exactOptional(),
    first_seen: z
      .xor([NullableMicroTimestampSchema, z.iso.datetime({ offset: true })])
      .exactOptional(),
    last_seen: z
      .xor([NullableMicroTimestampSchema, z.iso.datetime({ offset: true })])
      .exactOptional(),
    Attribute: z.array(AttributeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Object')

const EventReportIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('EventReportId')

const EventReportNameSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'Report of the incident' })
  .openapi('EventReportName')

const EventReportValueSchema = z.string().openapi('EventReportValue')

const EventReportNoIdSchema = z
  .object({
    uuid: UUIDSchema.exactOptional(),
    event_id: EventIdSchema.exactOptional(),
    name: EventReportNameSchema.exactOptional(),
    content: EventReportValueSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    timestamp: NullableTimestampSchema.exactOptional(),
    deleted: SoftDeletedFlagSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventReportNoId')

const EventReportSchema = z
  .object({ id: EventReportIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(EventReportNoIdSchema)
  .openapi('EventReport')

const TagListSchema = z.array(TagSchema).openapi('TagList')

type ExtendedEventType = z.infer<typeof EventSchema> & {
  Feed?: z.infer<typeof FeedSchema>
  Org?: z.infer<typeof EventOrganisationSchema>
  Orgc?: z.infer<typeof EventOrganisationSchema>
  Attribute?: z.infer<typeof AttributeListSchema>
  ShadowAttribute?: z.infer<typeof AttributeListSchema>
  RelatedEvent?: { Event?: ExtendedEventType }[]
  Galaxy?: z.infer<typeof GalaxySchema>[]
  Object?: z.infer<typeof ObjectSchema>[]
  EventReport?: z.infer<typeof EventReportSchema>[]
  Tag?: z.infer<typeof TagListSchema>
}

const UserSettingIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('UserSettingId')

const UserSettingNameSchema = z
  .enum([
    'publish_alert_filter',
    'dashboard_access',
    'dashboard',
    'homepage',
    'default_restsearch_parameters',
    'tag_numerical_value_override',
    'event_index_hide_columns',
  ])
  .openapi('UserSettingName')

const DashboardUserSettingSchema = z
  .object({
    widget: z.string().exactOptional().openapi({ example: 'MispStatusWidget' }),
    position: z
      .object({
        x: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '0' }),
        y: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '0' }),
        width: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '2' }),
        height: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '2' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DashboardUserSetting')

const PublishAlertFilterUserSettingSchema = z
  .object({})
  .openapi({
    example: [
      {
        AND: [
          { NOT: [{ 'EventTag.name': ['%osint%'] }] },
          { OR: [{ 'Tag.name': ['tlp:green', 'tlp:amber', 'tlp:red', '%privint%'] }] },
        ],
      },
    ],
  })
  .openapi('PublishAlertFilterUserSetting')

const DashboardAccessUserSettingSchema = z.boolean().openapi('DashboardAccessUserSetting')

const HomepageUserSettingSchema = z
  .object({ path: z.string().exactOptional().openapi({ example: '/events/index' }) })
  .openapi({ required: [] })
  .openapi('HomepageUserSetting')

const DefaultRestSearchParametersUserSettingSchema = z
  .object({})
  .openapi({
    example: [
      {
        AND: [
          { NOT: [{ 'EventTag.name': ['%osint%'] }] },
          { OR: [{ 'Tag.name': ['tlp:green', 'tlp:amber', 'tlp:red', '%privint%'] }] },
        ],
      },
    ],
  })
  .openapi('DefaultRestSearchParametersUserSetting')

const TagNumericalValueOverrideUserSettingSchema = z
  .object({})
  .openapi({ example: [{ "false-positive:risk='medium'": 99 }] })
  .openapi('TagNumericalValueOverrideUserSetting')

const EventIndexHideColumnsUserSettingSchema = z
  .array(z.string().openapi({ example: 'clusters' }))
  .openapi('EventIndexHideColumnsUserSetting')

type UserSettingType = {
  id?: z.infer<typeof UserSettingIdSchema>
  setting?: z.infer<typeof UserSettingNameSchema>
  value?:
    | z.infer<typeof DashboardUserSettingSchema>
    | z.infer<typeof PublishAlertFilterUserSettingSchema>
    | z.infer<typeof DashboardAccessUserSettingSchema>
    | z.infer<typeof HomepageUserSettingSchema>
    | z.infer<typeof DefaultRestSearchParametersUserSettingSchema>
    | z.infer<typeof TagNumericalValueOverrideUserSettingSchema>
    | z.infer<typeof EventIndexHideColumnsUserSettingSchema>
  user_id?: z.infer<typeof UserIdSchema>
  timestamp?: z.infer<typeof TimestampSchema>
}

const SharingGroupNameSchema = z
  .string()
  .max(255)
  .openapi({ example: 'Banking Sharing Group' })
  .openapi('SharingGroupName')

const SharingGroupDescriptionSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'Banking Institutions of X Sharing Group' })
  .openapi('SharingGroupDescription')

const SharingGroupReleasabilitySchema = z.string().max(65535).openapi('SharingGroupReleasability')

const SlimSharingGroupNoIdSchema = z
  .object({
    uuid: UUIDSchema.exactOptional(),
    name: SharingGroupNameSchema.exactOptional(),
    description: SharingGroupDescriptionSchema.exactOptional(),
    releasability: SharingGroupReleasabilitySchema.exactOptional(),
    local: z.boolean().exactOptional(),
    active: z.boolean().exactOptional(),
    org_count: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '6' }),
  })
  .openapi({ required: [] })
  .openapi('SlimSharingGroupNoId')

type SharingGroupNoIdType = z.infer<typeof SlimSharingGroupNoIdSchema> & {
  organisation_uuid?: z.infer<typeof UUIDSchema>
  org_id?: z.infer<typeof OrganisationIdSchema>
  sync_user_id?: z.infer<typeof UserIdSchema>
  created?: string
  modified?: string
  roaming?: boolean
}

const AnalystDataIDSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('AnalystDataID')

const AnalystDataTypeSchema = z.enum(['Note', 'Opinion', 'Relationship']).openapi('AnalystDataType')

const AnalystObjectTypeSchema = z
  .enum([
    'Attribute',
    'Event',
    'EventReport',
    'GalaxyCluster',
    'Galaxy',
    'Object',
    'Note',
    'Opinion',
    'Relationship',
    'Organisation',
    'SharingGroup',
  ])
  .openapi('AnalystObjectType')

const AnalystDataAuthorsSchema = z
  .string()
  .openapi({ example: 'john.doe@admin.test' })
  .openapi('AnalystDataAuthors')

const AnalystNoteNoteSchema = z
  .string()
  .openapi({ example: 'Provide more context' })
  .openapi('AnalystNoteNote')

const AnalystNoteLanguageSchema = z
  .string()
  .openapi({ description: 'RFC5646 Language code', example: 'fr-BE' })
  .openapi('AnalystNoteLanguage')

const AnalystNoteOpinionSchema = z
  .int32()
  .min(0)
  .max(100)
  .openapi({
    description:
      'The opinion expressed on a scale from 0 to 100 where values < 50 are negatives, 50 is neutral and values > 50 are positives',
    example: 70,
  })
  .openapi('AnalystNoteOpinion')

const AnalystDataSchema = z
  .object({
    uuid: UUIDSchema.exactOptional(),
    object_uuid: UUIDSchema.exactOptional(),
    object_type: AnalystObjectTypeSchema.exactOptional(),
    authors: AnalystDataAuthorsSchema.exactOptional(),
    org_uuid: UUIDSchema.exactOptional(),
    orgc_uuid: UUIDSchema.exactOptional(),
    created: z.string().exactOptional().openapi({ example: '2024-03-19 11:10:24' }),
    modified: z.string().exactOptional().openapi({ example: '2024-03-19 11:10:24' }),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    locked: IsLockedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalystData')

const AnalystNoteSchema = z
  .object({
    note: AnalystNoteNoteSchema.exactOptional(),
    language: AnalystNoteLanguageSchema.exactOptional(),
    note_type_name: z.literal('Note').exactOptional(),
  })
  .openapi({ required: [] })
  .and(AnalystDataSchema)
  .openapi('AnalystNote')

const AnalystOpinionSchema = z
  .object({
    comment: AnalystNoteNoteSchema.exactOptional(),
    opinion: AnalystNoteOpinionSchema.exactOptional(),
    note_type_name: z.literal('Opinion').exactOptional(),
  })
  .openapi({ required: [] })
  .and(AnalystDataSchema)
  .openapi('AnalystOpinion')

const AnalystRelationshipSchema = z
  .object({
    related_object_uuid: UUIDSchema.exactOptional(),
    related_object_type: AnalystObjectTypeSchema.exactOptional(),
    relationship_type: z.string().exactOptional().openapi({ example: 'related-to' }),
    note_type_name: z.literal('Relationship').exactOptional(),
  })
  .openapi({ required: [] })
  .and(AnalystDataSchema)
  .openapi('AnalystRelationship')

const MinimalAnalystDataSchema = z
  .object({
    Note: z.record(z.string(), z.iso.datetime({ offset: true })).exactOptional(),
    Opinion: z.record(z.string(), z.iso.datetime({ offset: true })).exactOptional(),
    Relationship: z.record(z.string(), z.iso.datetime({ offset: true })).exactOptional(),
  })
  .openapi({
    description: 'Minimal Analyst Data (notes, opinions and relationships).',
    required: [],
  })
  .openapi('MinimalAnalystData')

const MinimalAnalystDataEmptySchema = z
  .array(z.object({}))
  .max(0)
  .openapi({ description: 'Minimal Analyst Data' })
  .openapi('MinimalAnalystDataEmpty')

const AttributeEventUUIDSchema = UUIDSchema.openapi('AttributeEventUUID')

const AttributeAttachmentSchema = z
  .string()
  .openapi({ description: 'base64 representation of the attachment' })
  .openapi('AttributeAttachment')

const DecayingModelSchema = z
  .object({
    id: z.string().regex(/^\d+$/).max(10).exactOptional().openapi({ example: '12345' }),
    name: z.string().max(255).exactOptional().openapi({ example: 'Phishing model' }),
  })
  .openapi({ required: [] })
  .openapi('DecayingModel')

const DecayingModelParametersSchema = z
  .object({
    lifetime: z.float32().exactOptional().openapi({ example: 3 }),
    decay_speed: z.float32().exactOptional().openapi({ example: 2.3 }),
    threshold: z.float32().exactOptional().openapi({ example: 30 }),
    default_base_score: z.float32().exactOptional().openapi({ example: 80 }),
    base_score_config: z
      .object({})
      .exactOptional()
      .openapi({
        example: {
          'estimative-language:confidence-in-analytic-judgment': 0.25,
          'estimative-language:likelihood-probability': 0.25,
          'phishing:psychological-acceptability': 0.25,
          'phishing:state': 0.2,
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('DecayingModelParameters')

const FullDecayingModelSchema = z
  .object({
    id: z.string().regex(/^\d+$/).max(10).exactOptional().openapi({ example: '12345' }),
    uuid: UUIDSchema.exactOptional(),
    name: z.string().max(255).exactOptional().openapi({ example: 'Phishing model' }),
    description: z
      .string()
      .max(65535)
      .exactOptional()
      .openapi({ example: 'Simple model to rapidly decay phishing website.' }),
    parameters: DecayingModelParametersSchema.exactOptional(),
    attribute_types: z.array(AttributeTypeSchema).exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    all_orgs: z.boolean().exactOptional(),
    ref: z
      .array(z.string().openapi({ example: 'https://arxiv.org/abs/1902.03914' }))
      .exactOptional(),
    formula: z.literal('Polynomial').exactOptional(),
    version: z.string().exactOptional().openapi({ example: '2' }),
    default: z.boolean().exactOptional(),
    isEditable: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'Present if the `includeFullModel` flag was set to *true* in the rest search request',
    required: [],
  })
  .openapi('FullDecayingModel')

const DecayScoreSchema = z
  .object({
    score: z.float32().exactOptional().openapi({ example: 10.5 }),
    base_score: z.float32().exactOptional().openapi({ example: 80 }),
    decayed: z.boolean().exactOptional(),
    DecayingModel: z.xor([DecayingModelSchema, FullDecayingModelSchema]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DecayScore')

const DecayScoreListSchema = z.array(DecayScoreSchema).openapi('DecayScoreList')

const ExtendedAttributeSchema = AttributeSchema.and(
  z
    .object({
      data: AttributeAttachmentSchema.exactOptional(),
      event_uuid: UUIDSchema.exactOptional(),
      decay_score: DecayScoreListSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ExtendedAttribute')

const AttributeRestSearchListItemSchema = ExtendedAttributeSchema.and(
  z
    .object({
      Event: EventSchema.exactOptional(),
      Object: ObjectSchema.exactOptional(),
      Tag: TagListSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('AttributeRestSearchListItem')

const AttributeRestSearchListSchema = z
  .array(AttributeRestSearchListItemSchema)
  .openapi('AttributeRestSearchList')

const AttributeStatisticsResponseSchema = z
  .object({})
  .openapi({
    description:
      'Dictionary of attribute types/categories showing the amount of occurrences/percentage.',
    example: [{ 'Antivirus detection': '10' }, { 'Artifacts dropped': '20' }],
  })
  .openapi('AttributeStatisticsResponse')

const DescribeAttributeTypesResponseSchema = z
  .object({
    sane_defaults: z
      .object({})
      .exactOptional()
      .openapi({
        example: {
          md5: { default_category: 'Payload delivery', to_ids: 1 },
          pdb: { default_category: 'Artifacts dropped', to_ids: 0 },
        },
      }),
    types: z.array(AttributeTypeSchema).exactOptional(),
    categories: z.array(AttributeCategorySchema).exactOptional(),
    category_type_mappings: z
      .object({})
      .exactOptional()
      .openapi({
        example: {
          'Internal reference': ['text', 'link', 'comment', 'other'],
          'Antivirus detection': ['link', 'comment', 'text', 'hex', 'other'],
        },
      }),
  })
  .openapi({
    description: 'Lists available attribute types, default categories and category-type mappings.',
    required: [],
  })
  .openapi('DescribeAttributeTypesResponse')

const PageSearchFilterSchema = z.int32().min(1).nullable().openapi('PageSearchFilter')

const LimitSearchFilterSchema = z
  .int32()
  .min(0)
  .nullable()
  .openapi({
    description:
      "Maximum number of results to be returned. Can't be greater than the one set for your role. 0 means maximum.",
  })
  .openapi('LimitSearchFilter')

const TagsRestSearchFilterSchema = z
  .array(z.string().openapi({ example: 'tlp:amber' }))
  .nullable()
  .openapi('TagsRestSearchFilter')

const SearchAllRestSearchFilterSchema = z
  .string()
  .openapi({
    description:
      'Search events by matching any tag names, event descriptions, attribute values or attribute comments',
    example: 'malware',
  })
  .openapi('SearchAllRestSearchFilter')

const DateRestSearchFilterSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'You can use any of the valid time related filters (examples: 7d, timestamps, [14d, 7d] for ranges, etc.)',
  })
  .openapi('DateRestSearchFilter')

const LastRestSearchFilterSchema = z
  .xor([z.int(), z.string()])
  .nullable()
  .openapi({
    description:
      'Events published within the last x amount of time, where x can be defined in days, hours, minutes (for example 5d or 12h or 30m), ISO 8601 datetime format or timestamp',
  })
  .openapi('LastRestSearchFilter')

const WithAttachmentsRestSearchFilterSchema = z
  .boolean()
  .default(false)
  .openapi({
    description:
      'Extends the response with the base64 representation of the attachment, if there is one',
  })
  .openapi('WithAttachmentsRestSearchFilter')

const EnforceWarninglistRestSearchFilterSchema = z
  .boolean()
  .nullable()
  .openapi({
    description: 'Should the warning list be enforced. Adds blocked field for matching attributes',
  })
  .openapi('EnforceWarninglistRestSearchFilter')

const ToIDSRestSearchFlagSchema = z.boolean().nullable().openapi('ToIDSRestSearchFlag')

const SoftDeletedFlagValuesToIncludeSchema = z
  .boolean()
  .default(false)
  .openapi({
    description:
      'Whether to include soft-deleted attributes. Default value 0. If set to 1, only deleted attributes will be returned. If set to [0,1], both deleted and non-deleted attributes will be returned.',
  })
  .openapi('SoftDeletedFlagValuesToInclude')

const SharingGroupIDRestSearchFilterSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (Array.isArray(val)) {
      {
        const Schema = z.string().openapi({ example: '1' })
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .nullable()
  .openapi({ description: 'Sharing group ID(s), either as single string or list of IDs' })
  .openapi('SharingGroupIDRestSearchFilter')

const DecayingModelRestSearchFilterSchema = z
  .string()
  .openapi({
    description: 'Specify the decaying model from which the decaying score should be calculated',
  })
  .openapi('DecayingModelRestSearchFilter')

const DecayingModelScoreRestSearchFilterSchema = z
  .string()
  .openapi({ description: 'An alias to override on-the-fly the threshold of the decaying model' })
  .openapi('DecayingModelScoreRestSearchFilter')

const IncludeEventUUIDRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include matching eventUuids in the response' })
  .openapi('IncludeEventUUIDRestSearchFlag')

const IncludeEventTagsRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include tags of matching events in the response' })
  .openapi('IncludeEventTagsRestSearchFlag')

const IncludeProposalsRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include proposals of matching events in the response' })
  .openapi('IncludeProposalsRestSearchFlag')

const RequestedAttributesRestSearchFilterSchema = z
  .array(z.string().openapi({ example: 'id' }))
  .openapi({ description: 'List of properties that will be selected in the CSV export' })
  .openapi('RequestedAttributesRestSearchFilter')

const IncludeContextRestSearchFlagSchema = z
  .boolean()
  .nullable()
  .openapi({ description: 'Adds events context fields in the CSV export' })
  .openapi('IncludeContextRestSearchFlag')

const HeaderlessRestSearchFlagSchema = z
  .boolean()
  .nullable()
  .openapi({ description: 'Removes header in the CSV export' })
  .openapi('HeaderlessRestSearchFlag')

const IncludeWarninglistHitsRestSearchFlagSchema = z
  .boolean()
  .nullable()
  .openapi('IncludeWarninglistHitsRestSearchFlag')

const AttackGalaxyRestSearchFilterSchema = z
  .string()
  .nullable()
  .openapi({ example: 'mitre-attack' })
  .openapi('AttackGalaxyRestSearchFilter')

const ObjectRelationRestSearchFilterSchema = z
  .string()
  .nullable()
  .openapi({ description: 'Filter by the attribute object relation value', example: 'filepath' })
  .openapi('ObjectRelationRestSearchFilter')

const IncludeSightingDbRestSearchFlagSchema = z
  .boolean()
  .nullable()
  .openapi({ description: 'Extend response with Sightings DB results if the module is enabled' })
  .openapi('IncludeSightingDbRestSearchFlag')

const IncludeCorrelationsRestSearchFlagSchema = z
  .boolean()
  .nullable()
  .openapi('IncludeCorrelationsRestSearchFlag')

const IncludeDecayScoreRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include all enabled decaying score' })
  .openapi('IncludeDecayScoreRestSearchFlag')

const IncludeFullModelRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include all model information of matching events in the response' })
  .openapi('IncludeFullModelRestSearchFlag')

const ExcludeDecayedRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Should the decayed elements by excluded' })
  .openapi('ExcludeDecayedRestSearchFlag')

const AttributesRestSearchReturnFormatSchema = z
  .enum([
    'json',
    'xml',
    'csv',
    'text',
    'stix',
    'stix2',
    'stix-json',
    'hashes',
    'cache',
    'count',
    'netfilter',
    'opendata',
    'openioc',
    'rpz',
    'snort',
    'suricata',
    'text',
    'yara',
    'yara-json',
  ])
  .openapi({ description: 'Format of the response payload' })
  .openapi('AttributesRestSearchReturnFormat')

const AttributeRestSearchFilterSchema = z
  .object({
    page: PageSearchFilterSchema.exactOptional(),
    limit: LimitSearchFilterSchema.exactOptional(),
    value: AttributeValueSchema.exactOptional(),
    value1: AttributeValueSchema.exactOptional(),
    value2: AttributeValueSchema.exactOptional(),
    type: AttributeTypeSchema.exactOptional(),
    category: AttributeCategorySchema.exactOptional(),
    org: z.xor([OrganisationIdSchema, OrganisationNameSchema]).exactOptional(),
    tags: TagsRestSearchFilterSchema.exactOptional(),
    searchall: SearchAllRestSearchFilterSchema.exactOptional(),
    from: DateRestSearchFilterSchema.exactOptional(),
    to: DateRestSearchFilterSchema.exactOptional(),
    last: LastRestSearchFilterSchema.exactOptional(),
    eventid: EventIdSchema.exactOptional(),
    withAttachments: WithAttachmentsRestSearchFilterSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    publish_timestamp: TimestampSchema.exactOptional(),
    published: PublishedFlagSchema.exactOptional(),
    timestamp: TimestampSchema.exactOptional(),
    attribute_timestamp: TimestampSchema.exactOptional(),
    enforceWarninglist: EnforceWarninglistRestSearchFilterSchema.exactOptional(),
    to_ids: ToIDSRestSearchFlagSchema.exactOptional(),
    deleted: SoftDeletedFlagValuesToIncludeSchema.exactOptional(),
    event_timestamp: TimestampSchema.exactOptional(),
    threat_level_id: ThreatLevelIdSchema.exactOptional(),
    eventinfo: z.string().exactOptional().openapi({ description: 'Quick event description' }),
    sharinggroup: SharingGroupIDRestSearchFilterSchema.exactOptional(),
    decayingModel: DecayingModelRestSearchFilterSchema.exactOptional(),
    score: DecayingModelScoreRestSearchFilterSchema.exactOptional(),
    first_seen: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Seen within the last x amount of time, where x can be defined in days, hours, minutes (for example 5d or 12h or 30m)',
      }),
    last_seen: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Seen within the last x amount of time, where x can be defined in days, hours, minutes (for example 5d or 12h or 30m)',
      }),
    includeEventUuid: IncludeEventUUIDRestSearchFlagSchema.exactOptional(),
    includeEventTags: IncludeEventTagsRestSearchFlagSchema.exactOptional(),
    includeProposals: IncludeProposalsRestSearchFlagSchema.exactOptional(),
    requested_attributes: RequestedAttributesRestSearchFilterSchema.exactOptional(),
    includeContext: IncludeContextRestSearchFlagSchema.exactOptional(),
    headerless: HeaderlessRestSearchFlagSchema.exactOptional(),
    includeWarninglistHits: IncludeWarninglistHitsRestSearchFlagSchema.exactOptional(),
    attackGalaxy: AttackGalaxyRestSearchFilterSchema.exactOptional(),
    object_relation: ObjectRelationRestSearchFilterSchema.exactOptional(),
    includeSightings: IncludeSightingDbRestSearchFlagSchema.exactOptional(),
    includeCorrelations: IncludeCorrelationsRestSearchFlagSchema.exactOptional(),
    modelOverrides: DecayingModelParametersSchema.exactOptional(),
    includeDecayScore: IncludeDecayScoreRestSearchFlagSchema.exactOptional(),
    includeFullModel: IncludeFullModelRestSearchFlagSchema.exactOptional(),
    excludeDecayed: ExcludeDecayedRestSearchFlagSchema.exactOptional(),
    returnFormat: AttributesRestSearchReturnFormatSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttributeRestSearchFilter')

const EventTagIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('EventTagId')

const IsLocalSchema = z.boolean().openapi('IsLocal')

const EventTagSchema = z
  .object({
    id: EventTagIdSchema.exactOptional(),
    event_id: EventIdSchema.exactOptional(),
    tag_id: TagIdSchema.exactOptional(),
    local: IsLocalSchema.exactOptional(),
    Tag: TagSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventTag')

const EventTagListSchema = z.array(EventTagSchema).openapi('EventTagList')

const ExtendedEventSchema: z.ZodType<ExtendedEventType> = z
  .lazy(() =>
    EventSchema.and(
      z
        .object({
          Feed: FeedSchema.exactOptional(),
          Org: EventOrganisationSchema.exactOptional(),
          Orgc: EventOrganisationSchema.exactOptional(),
          Attribute: AttributeListSchema.exactOptional(),
          ShadowAttribute: AttributeListSchema.exactOptional(),
          RelatedEvent: z
            .array(
              z.object({ Event: ExtendedEventSchema.exactOptional() }).openapi({ required: [] }),
            )
            .exactOptional(),
          Galaxy: z.array(GalaxySchema).exactOptional(),
          Object: z.array(ObjectSchema).exactOptional(),
          EventReport: z.array(EventReportSchema).exactOptional(),
          Tag: TagListSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('ExtendedEvent')

const EditedEventSchema = z
  .object({
    Event: ExtendedEventSchema.and(
      z
        .object({
          event_creator_email: z.email().exactOptional(),
          Galaxy: z.array(GalaxySchema).exactOptional(),
          Object: z.array(ObjectSchema).exactOptional(),
          EventReport: z.array(EventReportSchema).exactOptional(),
          Tag: z.array(TagSchema).exactOptional(),
        })
        .openapi({ required: [] }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EditedEvent')

const SlimEventSchema = z
  .object({
    id: EventIdSchema,
    timestamp: TimestampSchema,
    sighting_timestamp: TimestampSchema,
    published: PublishedFlagSchema,
    uuid: UUIDSchema,
    orgc_uuid: UUIDSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'timestamp', 'sighting_timestamp', 'published', 'uuid'] })
  .openapi('SlimEvent')

const EventListSchema = z.array(EventSchema).openapi('EventList')

const ExtendedEventListSchema = z.array(ExtendedEventSchema).openapi('ExtendedEventList')

const SlimEventListSchema = z.array(SlimEventSchema).openapi('SlimEventList')

const EventRestSearchListSchema = z
  .array(
    z
      .object({ Event: ExtendedEventSchema.and(SlimEventSchema).exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi('EventRestSearchList')

const ObjectRelationSchema = z
  .string()
  .max(255)
  .openapi({ example: 'sensor' })
  .openapi('ObjectRelation')

const ExtendedObjectSchema = ObjectSchema.and(
  z
    .object({
      Event: z
        .object({
          id: EventIdSchema.exactOptional(),
          info: EventInfoSchema.exactOptional(),
          org_id: OrganisationIdSchema.exactOptional(),
          orgc_id: OrganisationIdSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('ExtendedObject')

const ObjectTemplateIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('ObjectTemplateId')

const ObjectRestSearchListSchema = z
  .object({ Object: ObjectSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ObjectRestSearchList')

const IncludeAllTagsRestSearchFilterSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Include also exportable tags' })
  .openapi('IncludeAllTagsRestSearchFilter')

const AllowProposalBlockingRestSearchFlagSchema = z
  .boolean()
  .default(false)
  .openapi({
    description:
      'Allow blocking attributes from to_ids sensitive exports if a proposal has been made to it to remove the IDS flag',
  })
  .openapi('AllowProposalBlockingRestSearchFlag')

const MetadataRestSearchFilterSchema = z
  .boolean()
  .nullable()
  .openapi({
    description:
      'Will only return the metadata of the given query scope, contained data is omitted.',
  })
  .openapi('MetadataRestSearchFilter')

const ObjectsRestSearchReturnFormatSchema = z
  .literal('json')
  .openapi({ description: 'Format of the response payload' })
  .openapi('ObjectsRestSearchReturnFormat')

const ObjectRestSearchFilterSchema = z
  .object({
    page: PageSearchFilterSchema.exactOptional(),
    limit: LimitSearchFilterSchema.exactOptional(),
    quickFilter: SearchAllRestSearchFilterSchema.exactOptional(),
    searchall: SearchAllRestSearchFilterSchema.exactOptional(),
    timestamp: TimestampSchema.exactOptional(),
    object_name: ObjectNameSchema.exactOptional(),
    object_template_uuid: UUIDSchema.exactOptional(),
    object_template_version: ObjectTemplateVersionSchema.exactOptional(),
    eventid: EventIdSchema.exactOptional(),
    eventinfo: EventInfoSchema.exactOptional(),
    ignore: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If true matches both true and false values for `to_ids` and `published`',
      }),
    from: DateRestSearchFilterSchema.exactOptional(),
    to: DateRestSearchFilterSchema.exactOptional(),
    date: DateRestSearchFilterSchema.exactOptional(),
    tags: TagsRestSearchFilterSchema.exactOptional(),
    last: LastRestSearchFilterSchema.exactOptional(),
    event_timestamp: TimestampSchema.exactOptional(),
    publish_timestamp: TimestampSchema.exactOptional(),
    org: z.xor([OrganisationIdSchema, OrganisationNameSchema]).exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    value: AttributeValueSchema.exactOptional(),
    type: AttributeTypeSchema.exactOptional(),
    category: AttributeCategorySchema.exactOptional(),
    object_relation: ObjectRelationRestSearchFilterSchema.exactOptional(),
    attribute_timestamp: TimestampSchema.exactOptional(),
    first_seen: NullableMicroTimestampSchema.exactOptional(),
    last_seen: NullableMicroTimestampSchema.exactOptional(),
    comment: AttributeCommentSchema.exactOptional(),
    to_ids: ToIDSRestSearchFlagSchema.exactOptional(),
    published: PublishedFlagSchema.exactOptional(),
    deleted: SoftDeletedFlagSchema.exactOptional(),
    withAttachments: WithAttachmentsRestSearchFilterSchema.exactOptional(),
    enforceWarninglist: EnforceWarninglistRestSearchFilterSchema.exactOptional(),
    includeAllTags: IncludeAllTagsRestSearchFilterSchema.exactOptional(),
    includeEventUuid: IncludeEventUUIDRestSearchFlagSchema.exactOptional(),
    include_event_uuid: IncludeEventUUIDRestSearchFlagSchema.exactOptional(),
    includeEventTags: IncludeEventTagsRestSearchFlagSchema.exactOptional(),
    includeProposals: IncludeProposalsRestSearchFlagSchema.exactOptional(),
    includeWarninglistHits: IncludeWarninglistHitsRestSearchFlagSchema.exactOptional(),
    includeContext: IncludeContextRestSearchFlagSchema.exactOptional(),
    includeSightings: IncludeContextRestSearchFlagSchema.exactOptional(),
    includeSightingdb: IncludeSightingDbRestSearchFlagSchema.exactOptional(),
    includeCorrelations: IncludeCorrelationsRestSearchFlagSchema.exactOptional(),
    includeDecayScore: IncludeDecayScoreRestSearchFlagSchema.exactOptional(),
    includeFullModel: IncludeFullModelRestSearchFlagSchema.exactOptional(),
    allow_proposal_blocking: AllowProposalBlockingRestSearchFlagSchema.exactOptional(),
    metadata: MetadataRestSearchFilterSchema.exactOptional(),
    attackGalaxy: AttackGalaxyRestSearchFilterSchema.exactOptional(),
    excludeDecayed: ExcludeDecayedRestSearchFlagSchema.exactOptional(),
    decayingModel: DecayingModelRestSearchFilterSchema.exactOptional(),
    modelOverrides: DecayingModelParametersSchema.exactOptional(),
    score: DecayingModelScoreRestSearchFilterSchema.exactOptional(),
    returnFormat: ObjectsRestSearchReturnFormatSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ObjectRestSearchFilter')

const SightingIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('SightingId')

const SightingSchema = z
  .object({
    id: SightingIdSchema.exactOptional(),
    attribute_id: AttributeIdSchema.exactOptional(),
    event_id: EventIdSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    date_sighting: TimestampSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    source: z.string().exactOptional(),
    type: z.string().exactOptional(),
    attribute_uuid: UUIDSchema.exactOptional(),
    Organisation: z
      .object({
        id: OrganisationIdSchema.exactOptional(),
        uuid: UUIDSchema.exactOptional(),
        name: OrganisationNameSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Sighting')

const GalaxyClusterIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('GalaxyClusterId')

const GalaxyClusterValueSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'Brute Force - T1110' })
  .openapi('GalaxyClusterValue')

const GalaxyClusterTypeSchema = z
  .string()
  .max(255)
  .openapi({ example: 'mitre-enterprise-attack-attack-pattern' })
  .openapi('GalaxyClusterType')

const GalaxyClusterDescriptionSchema = z
  .string()
  .max(65535)
  .openapi({
    example:
      'Adversaries may use brute force techniques to attempt access to accounts when passwords are unknown or when password hashes are obtained...',
  })
  .openapi('GalaxyClusterDescription')

const GalaxyClusterSourceSchema = z
  .string()
  .max(255)
  .openapi({ example: 'https://github.com/mitre/cti' })
  .openapi('GalaxyClusterSource')

const GalaxyClusterAuthorsSchema = z
  .array(z.string().openapi({ example: 'MITRE' }))
  .openapi('GalaxyClusterAuthors')

const GalaxyClusterVersionSchema = z
  .string()
  .max(255)
  .nullable()
  .openapi({ example: '1' })
  .openapi('GalaxyClusterVersion')

const GalaxyElementIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('GalaxyElementId')

const GalaxyElementKeySchema = z
  .string()
  .max(255)
  .openapi({ example: 'categories' })
  .openapi('GalaxyElementKey')

const GalaxyElementValueSchema = z
  .string()
  .max(65535)
  .openapi({ example: 'Military' })
  .openapi('GalaxyElementValue')

const GalaxyElementSchema = z
  .object({
    id: GalaxyElementIdSchema.exactOptional(),
    galaxy_cluster_id: GalaxyClusterIdSchema.exactOptional(),
    key: GalaxyElementKeySchema.exactOptional(),
    value: GalaxyElementValueSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GalaxyElement')

const GalaxyElementListSchema = z.array(GalaxyElementSchema).openapi('GalaxyElementList')

const GalaxyClusterRelationListSchema = z
  .array(GalaxyElementSchema)
  .openapi('GalaxyClusterRelationList')

const GalaxyClusterNoIdSchema = z
  .object({
    uuid: UUIDSchema.exactOptional(),
    collection_uuid: UUIDSchema.exactOptional(),
    type: GalaxyClusterTypeSchema.exactOptional(),
    value: GalaxyClusterValueSchema.exactOptional(),
    tag_name: TagNameSchema.exactOptional(),
    description: GalaxyClusterDescriptionSchema.exactOptional(),
    galaxy_id: GalaxyIdSchema.exactOptional(),
    source: GalaxyClusterSourceSchema.exactOptional(),
    authors: GalaxyClusterAuthorsSchema.exactOptional(),
    version: GalaxyClusterVersionSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    orgc_id: OrganisationIdSchema.exactOptional(),
    default: IsDefaultSchema.exactOptional(),
    locked: IsLockedSchema.exactOptional(),
    extends_uuid: ExtendsUUIDSchema.exactOptional(),
    extends_version: GalaxyClusterVersionSchema.exactOptional(),
    published: PublishedFlagSchema.exactOptional(),
    deleted: SoftDeletedFlagSchema.exactOptional(),
    GalaxyElement: z.array(GalaxyElementSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GalaxyClusterNoId')

const GalaxyClusterNoIdWithGalaxySchema = GalaxyClusterNoIdSchema.and(
  z
    .object({
      Galaxy: z
        .object({ uuid: UUIDSchema.exactOptional() })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
).openapi('GalaxyClusterNoIdWithGalaxy')

const GalaxyClusterSchema = z
  .object({ id: GalaxyClusterIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(GalaxyClusterNoIdSchema)
  .openapi({
    description:
      'MISP galaxy is a simple method to express a large object called cluster that can be attached to MISP events or attributes.',
  })
  .openapi('GalaxyCluster')

const OrganisationTypeSchema = z
  .string()
  .max(255)
  .nullable()
  .openapi({ example: 'ADMIN' })
  .openapi('OrganisationType')

const OrganisationNoIdSchema = z
  .object({
    name: OrganisationNameSchema.exactOptional(),
    date_created: z.string().exactOptional().openapi({ example: '2021-06-14 14:29:19' }),
    date_modified: z.string().exactOptional().openapi({ example: '2021-06-14 14:29:19' }),
    description: z.string().exactOptional(),
    type: OrganisationTypeSchema.exactOptional(),
    nationality: z.string().exactOptional(),
    sector: z.string().exactOptional(),
    created_by: UserIdSchema.exactOptional(),
    uuid: z.string().exactOptional(),
    contacts: z.string().nullable().exactOptional(),
    local: z.boolean().exactOptional(),
    restricted_to_domain: z.array(z.hostname()).exactOptional(),
    landingpage: z.string().nullable().exactOptional(),
    user_count: z.string().regex(/^\d+$/).nullable().exactOptional().openapi({ example: '3' }),
    created_by_email: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganisationNoId')

const OrganisationSchema = z
  .object({ id: OrganisationIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(OrganisationNoIdSchema)
  .openapi('Organisation')

const ExtendedGalaxyClusterSchema = GalaxyClusterSchema.and(
  z
    .object({
      Galaxy: GalaxySchema.exactOptional(),
      GalaxyClusterRelation: GalaxyClusterRelationListSchema.exactOptional(),
      Org: OrganisationSchema.exactOptional(),
      Orgc: OrganisationSchema.exactOptional(),
      tag_count: z.int32().exactOptional(),
      tag_id: TagIdSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: "A galaxy cluster with all it's details." })
  .openapi('ExtendedGalaxyCluster')

const ExtendedGalaxySchema = z
  .object({
    Galaxy: GalaxySchema.exactOptional(),
    GalaxyCluster: z.array(GalaxyClusterSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi({ description: "A galaxy with it's galaxy cluster details." })
  .openapi('ExtendedGalaxy')

const GalaxyMispFormatSchema = z
  .object({
    name: GalaxyNameSchema.exactOptional(),
    type: GalaxyTypeSchema.exactOptional(),
    authors: GalaxyClusterAuthorsSchema.exactOptional(),
    version: z.xor([z.boolean(), GalaxyClusterVersionSchema]).exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    source: GalaxyClusterSourceSchema.exactOptional(),
    values: z
      .array(
        z
          .object({
            description: GalaxyClusterDescriptionSchema.exactOptional(),
            uuid: UUIDSchema.exactOptional(),
            value: GalaxyClusterValueSchema.exactOptional(),
            extends_uuid: ExtendsUUIDSchema.exactOptional(),
            extends_Version: GalaxyClusterVersionSchema.exactOptional(),
            meta: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Each Galaxy element associated to this cluster represents a key-value property.',
                example: [
                  { categories: 'botnet' },
                  { refs: 'http://example.com' },
                  { aliases: ['malware', 'win32', 'windows'] },
                  { topics: ['Windows', 'Malware'] },
                ],
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'Galaxy and clusters representation in misp-galaxy format.',
    required: [],
  })
  .openapi('GalaxyMispFormat')

const GalaxyValueSearchFilterSchema = z
  .string()
  .openapi({
    description:
      'Text search term to find a matching galaxy name, namespace, description, kill_chain_order or uuid.',
    example: 'botnet',
  })
  .openapi('GalaxyValueSearchFilter')

const ImportGalaxyClusterItemSchema = z
  .object({ GalaxyCluster: GalaxyClusterNoIdWithGalaxySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ImportGalaxyClusterItem')

const TagCollectionIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('TagCollectionId')

const TaxonomyIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('TaxonomyId')

const TaxonomyNamespaceSchema = z.string().openapi({ example: 'tlp' }).openapi('TaxonomyNamespace')

const TaxonomyDescriptionSchema = z
  .string()
  .openapi({
    example:
      'Disclosure is not limited.  Sources may use TLP:WHITE when information carries minimal or no foreseeable risk of misuse, in accordance with applicable rules and procedures for public release. Subject to standard copyright rules, TLP:WHITE information may be distributed without restriction.',
  })
  .openapi('TaxonomyDescription')

const TaxonomyVersionSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({ example: '5' })
  .openapi('TaxonomyVersion')

const TaxonomySchema = z
  .object({
    id: TaxonomyIdSchema.exactOptional(),
    namespace: TaxonomyNamespaceSchema.exactOptional(),
    description: TaxonomyDescriptionSchema.exactOptional(),
    version: TaxonomyVersionSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    exclusive: z.boolean().exactOptional(),
    required: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Taxonomy')

const TaxonomyPredicateIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('TaxonomyPredicateId')

const TaxonomyPredicateValueSchema = z
  .string()
  .openapi({ example: 'white' })
  .openapi('TaxonomyPredicateValue')

const TaxonomyPredicateExpandedSchema = z
  .string()
  .openapi({
    example: '(TLP:WHITE) Information can be shared publicly in accordance with the law.',
  })
  .openapi('TaxonomyPredicateExpanded')

const TaxonomyPredicateDescriptionSchema = z
  .string()
  .openapi({
    example:
      'Disclosure is not limited.  Sources may use TLP:WHITE when information carries minimal or no foreseeable risk of misuse, in accordance with applicable rules and procedures for public release. Subject to standard copyright rules, TLP:WHITE information may be distributed without restriction.',
  })
  .openapi('TaxonomyPredicateDescription')

const TaxonomyPredicateSchema = z
  .object({
    id: TaxonomyPredicateIdSchema.exactOptional(),
    taxonomy_id: TaxonomyIdSchema.exactOptional(),
    value: TaxonomyPredicateValueSchema.exactOptional(),
    expanded: TaxonomyPredicateExpandedSchema.exactOptional(),
    colour: z.string().exactOptional().openapi({ example: '#ffffff' }),
    description: TaxonomyPredicateDescriptionSchema.exactOptional(),
    exclusive: z.boolean().exactOptional(),
    numerical_value: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxonomyPredicate')

const ExtendedTagSchema = z
  .object({
    Tag: TagSchema.exactOptional(),
    Taxonomy: TaxonomySchema.exactOptional(),
    TaxonomyPredicate: TaxonomyPredicateSchema.exactOptional(),
    GalaxyCluster: GalaxyClusterSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtendedTag')

const TaxonomyPredicateExportSchema = z
  .object({
    value: TaxonomyPredicateValueSchema.exactOptional(),
    expanded: TaxonomyPredicateExpandedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxonomyPredicateExport')

const TaxonomyEntryExportSchema = z
  .object({
    value: z.string().exactOptional().openapi({ example: 'spam' }),
    expanded: z.string().exactOptional().openapi({ example: 'spam' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Spam or ‘unsolicited bulk e-mail’, meaning that the recipient has not granted verifiable permission for the message to be sent and that the message is sent as part of a larger collection of messages, all having identical content.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaxonomyEntryExport')

const TaxonomyValueExportSchema = z
  .object({
    predicate: TaxonomyPredicateValueSchema.exactOptional(),
    entry: z.array(TaxonomyEntryExportSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxonomyValueExport')

const TaxonomyEntrySchema = z
  .object({
    tag: TagNameSchema.exactOptional(),
    expanded: z.string().exactOptional(),
    description: z.string().exactOptional(),
    exclusive_predicate: z.boolean().exactOptional(),
    existing_tag: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaxonomyEntry')

const ServerIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('ServerId')

const RoleIdSchema = z.string().regex(/^\d+$/).max(10).openapi({ example: '3' }).openapi('RoleId')

const UserNoIdSchema = z
  .object({
    org_id: OrganisationIdSchema.exactOptional(),
    server_id: ServerIdSchema.exactOptional(),
    email: z.email().exactOptional(),
    autoalert: z.boolean().exactOptional(),
    authkey: z
      .string()
      .length(40)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'API auth key used for the API, only set if MISP setting `Security.advanced_authkeys` is set to `false`.',
        example: '894c8d095180c7ea28789092e96ca6424199aa4f',
      }),
    invited_by: UserIdSchema.exactOptional(),
    gpgkey: z.string().nullable().exactOptional(),
    certif_public: z.string().nullable().exactOptional(),
    nids_sid: z.string().regex(/^\d+$/).max(10).exactOptional().openapi({ example: '4000000' }),
    termsaccepted: z.boolean().exactOptional(),
    newsread: TimestampSchema.exactOptional(),
    role_id: RoleIdSchema.exactOptional(),
    change_pw: z
      .enum(['0', '1'])
      .exactOptional()
      .openapi({ description: 'Password change required.' }),
    contactalert: z.boolean().exactOptional(),
    disabled: z.boolean().exactOptional(),
    expiration: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    current_login: TimestampSchema.exactOptional(),
    last_login: TimestampSchema.exactOptional(),
    force_logout: z.boolean().exactOptional(),
    date_created: TimestampSchema.exactOptional(),
    date_modified: TimestampSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserNoId')

const ExtendedTaxonomyEntrySchema = UserNoIdSchema.and(
  z
    .object({ events: z.number().exactOptional(), attributes: z.number().exactOptional() })
    .openapi({ required: [] }),
).openapi('ExtendedTaxonomyEntry')

const UserSettingSchema: z.ZodType<UserSettingType> = z
  .lazy(() =>
    z
      .object({
        id: UserSettingIdSchema.exactOptional(),
        setting: UserSettingNameSchema.exactOptional(),
        value: z
          .union([
            DashboardUserSettingSchema,
            PublishAlertFilterUserSettingSchema,
            DashboardAccessUserSettingSchema,
            HomepageUserSettingSchema,
            DefaultRestSearchParametersUserSettingSchema,
            TagNumericalValueOverrideUserSettingSchema,
            EventIndexHideColumnsUserSettingSchema,
          ])
          .exactOptional(),
        user_id: UserIdSchema.exactOptional(),
        timestamp: TimestampSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('UserSetting')

const ViewUserSettingsSchema = z
  .object({
    publish_alert_filter: PublishAlertFilterUserSettingSchema.exactOptional(),
    dashboard_access: DashboardAccessUserSettingSchema.exactOptional(),
    dashboard: z.array(DashboardUserSettingSchema).exactOptional(),
    homepage: HomepageUserSettingSchema.exactOptional(),
    default_restsearch_parameters: DefaultRestSearchParametersUserSettingSchema.exactOptional(),
    tag_numerical_value_override: TagNumericalValueOverrideUserSettingSchema.exactOptional(),
    event_index_hide_columns: EventIndexHideColumnsUserSettingSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ViewUserSettings')

const UserSchema = z
  .object({ id: UserIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(UserNoIdSchema)
  .openapi('User')

const RoleNameSchema = z.string().max(255).openapi({ example: 'ORGNAME' }).openapi('RoleName')

const RoleSchema = z
  .object({
    id: RoleIdSchema.exactOptional(),
    name: RoleNameSchema.exactOptional(),
    perm_add: z.boolean().exactOptional(),
    perm_modify: z.boolean().exactOptional(),
    perm_modify_org: z.boolean().exactOptional(),
    perm_publish: z.boolean().exactOptional(),
    perm_delegate: z.boolean().exactOptional(),
    perm_sync: z.boolean().exactOptional(),
    perm_admin: z.boolean().exactOptional(),
    perm_audit: z.boolean().exactOptional(),
    perm_auth: z.boolean().exactOptional(),
    perm_site_admin: z.boolean().exactOptional(),
    perm_regexp_access: z.boolean().exactOptional(),
    perm_tagger: z.boolean().exactOptional(),
    perm_template: z.boolean().exactOptional(),
    perm_sharing_group: z.boolean().exactOptional(),
    perm_tag_editor: z.boolean().exactOptional(),
    perm_sighting: z.boolean().exactOptional(),
    perm_object_template: z.boolean().exactOptional(),
    perm_publish_zmq: z.boolean().exactOptional(),
    perm_publish_kafka: z.boolean().exactOptional(),
    perm_decaying: z.boolean().exactOptional(),
    perm_galaxy_editor: z.boolean().exactOptional(),
    default_role: z.boolean().exactOptional(),
    memory_limit: z
      .string()
      .regex(/^\d+$|^$/)
      .nullable()
      .exactOptional(),
    max_execution_time: z
      .string()
      .regex(/^\d+$|^$/)
      .nullable()
      .exactOptional(),
    restricted_to_site_admin: z.boolean().exactOptional(),
    enforce_rate_limit: z.boolean().exactOptional(),
    rate_limit_count: z.string().regex(/^\d+$/).exactOptional(),
    permission: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '3' }),
    permission_description: z.string().exactOptional().openapi({ example: 'publish' }),
  })
  .openapi({ required: [] })
  .openapi('Role')

const ExtendedUserSchema = UserSchema.and(
  z
    .object({
      User: UserSchema.exactOptional(),
      Role: RoleSchema.exactOptional(),
      UserSetting: ViewUserSettingsSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ExtendedUser')

const UserListItemSchema = z
  .object({
    User: UserSchema.exactOptional(),
    Role: RoleSchema.exactOptional(),
    Organisation: z
      .object({
        id: OrganisationIdSchema.exactOptional(),
        name: OrganisationNameSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UserListItem')

const UserListSchema = z.array(UserListItemSchema).openapi('UserList')

const OrganisationListItemSchema = z
  .object({ Organisation: OrganisationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('OrganisationListItem')

const OrganisationListSchema = z.array(OrganisationListItemSchema).openapi('OrganisationList')

const ServerNameSchema = z
  .string()
  .max(255)
  .openapi({ example: 'Phishing Server' })
  .openapi('ServerName')

const AuthKeyRawSchema = z
  .string()
  .length(40)
  .openapi({ example: '894c8d095180c7ea28789092e96ca6424199aa4f' })
  .openapi('AuthKeyRaw')

const ServerNoIdSchema = z
  .object({
    name: ServerNameSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ example: 'https://misppriv.circl.lu' }),
    authkey: AuthKeyRawSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    push: z.boolean().exactOptional(),
    pull: z.boolean().exactOptional(),
    push_sightings: z.boolean().exactOptional(),
    push_galaxy_clusters: z.boolean().exactOptional(),
    pull_galaxy_clusters: z.boolean().exactOptional(),
    lastpulledid: z
      .string()
      .regex(/^\d+$/)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ example: '12345' }),
    lastpushedid: z
      .string()
      .regex(/^\d+$/)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ example: '12345' }),
    organization: z.string().nullable().exactOptional(),
    remote_org_id: OrganisationIdSchema.exactOptional(),
    publish_without_email: z.boolean().exactOptional(),
    unpublish_event: z.boolean().exactOptional(),
    self_signed: z.boolean().exactOptional(),
    pull_rules: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Stringified JSON rules for pulling events from this server.',
        example: '{"tags":{"OR":[],"NOT":[]},"orgs":{"OR":[],"NOT":[]},"url_params":""}',
      }),
    push_rules: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Stringified JSON rules for pushing events from this server.',
        example: '{"tags":{"OR":[],"NOT":[]},"orgs":{"OR":[],"NOT":[]}}',
      }),
    cert_file: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Base64 encoded certificate' }),
    client_cert_file: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Base64 encoded client certificate' }),
    internal: z.boolean().exactOptional(),
    skip_proxy: z.boolean().exactOptional(),
    caching_enabled: z.boolean().exactOptional(),
    priority: z
      .string()
      .regex(/^\d+$/)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ example: '1' }),
    cache_timestamp: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServerNoId')

const ServerSchema = z
  .object({ id: ServerIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(ServerNoIdSchema)
  .openapi('Server')

const ServerListItemSchema = z
  .object({
    Server: ServerSchema.exactOptional(),
    Organisation: OrganisationSchema.exactOptional(),
    RemoteOrg: OrganisationSchema.exactOptional(),
    User: z.array(UserSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServerListItem')

const ServerListSchema = z.array(ServerListItemSchema).openapi('ServerList')

const PhpServerSettingSchema = z
  .object({
    explanation: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'The maximum duration that a script can run (does not affect the background workers). A too low number will break long running scripts like comprehensive API exports',
      }),
    recommended: z.union([z.int().openapi({ example: 300 }), z.string()]).exactOptional(),
    unit: z.string().exactOptional().openapi({ example: 'seconds' }),
    value: z.union([z.int32().openapi({ example: 300 }), z.string()]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PhpServerSetting')

const ServerPackageVersionSchema = z
  .object({
    version: z.string().exactOptional().openapi({ example: '1.2.0.11' }),
    expected: z.string().exactOptional().openapi({ example: '>1.2.0.9' }),
    status: z.int32().min(0).exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('ServerPackageVersion')

const DatabaseTableDiagnosticsSchema = z
  .object({
    used: z.string().exactOptional().openapi({ example: '207.63MB' }),
    reclaimable: z.string().exactOptional().openapi({ example: '5MB' }),
    table: z.string().exactOptional().openapi({ example: 'attributes' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseTableDiagnostics')

const MispSettingSchema = z
  .object({
    level: z.int().exactOptional().openapi({ example: 0 }),
    value: z.union([z.string(), z.boolean(), z.number()]).exactOptional(),
    errorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example:
          'The currently set baseurl does not match the URL through which you have accessed the page. Disregard this if you are accessing the page via an alternate URL (for example via IP address).',
      }),
    test: z
      .union([z.string().openapi({ example: 'testBaseURL' }), z.boolean()])
      .nullable()
      .exactOptional(),
    type: z.enum(['string', 'boolean', 'numeric']).exactOptional().openapi({ example: 'string' }),
    null: z.boolean().nullable().exactOptional(),
    subGroup: z.string().nullable().exactOptional().openapi({ example: 'Enrichment' }),
    cli_only: z.int().nullable().exactOptional().openapi({ example: 1 }),
    redacted: z.boolean().nullable().exactOptional(),
    optionsSource: z.object({}).nullable().exactOptional(),
    afterHook: z.string().nullable().exactOptional().openapi({ example: 'cleanCacheFiles' }),
    error: z.int().nullable().exactOptional().openapi({ example: 1 }),
    tab: z.string().exactOptional().openapi({ example: 'MISP' }),
    setting: z.string().exactOptional().openapi({ example: 'MISP.baseurl' }),
    options: z
      .union([z.object({}), z.string(), z.array(z.string()), z.array(z.object({}))])
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MispSetting')

const WorkerSchema = z
  .object({
    pid: z.int().exactOptional().openapi({ example: 1233 }),
    user: z.string().exactOptional().openapi({ example: 'www-data' }),
    alive: z.boolean().exactOptional(),
    correct_user: z.boolean().exactOptional(),
    ok: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Worker')

const WorkersStatusSchema = z
  .object({
    ok: z.boolean().exactOptional(),
    workers: z.array(WorkerSchema).exactOptional(),
    jobCount: z.int().nullable().exactOptional().openapi({ example: 0 }),
  })
  .openapi({ required: [] })
  .openapi('WorkersStatus')

const UpdateServerResultItemSchema = z
  .object({
    input: z
      .string()
      .exactOptional()
      .openapi({
        example: 'cd $(git rev-parse --show-toplevel) && git checkout app/composer.json 2>&1',
      }),
    output: z
      .array(z.string().openapi({ example: 'Updated 1 path from the index' }))
      .exactOptional(),
    status: z.int().exactOptional().openapi({ example: 0 }),
  })
  .openapi({ required: [] })
  .openapi('UpdateServerResultItem')

const WarninglistIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '3' })
  .openapi('WarninglistId')

const WarninglistEntrySchema = z
  .object({
    id: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '1234' }),
    value: z.string().exactOptional().openapi({ example: '10.128.0.0/24' }),
    warninglist_id: WarninglistIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WarninglistEntry')

const WarninglistSchema = z
  .object({
    id: WarninglistIdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'List of known domains to know external IP' }),
    type: z
      .enum(['cidr', 'hostname', 'substring', 'string', 'regex'])
      .exactOptional()
      .openapi({ example: 'cidr' }),
    description: z.string().exactOptional(),
    version: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '10' }),
    enabled: z.boolean().exactOptional(),
    warninglist_entry_count: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '1234' }),
    valid_attributes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'List of comma separated warninglist types.',
        example: 'domain, hostname, domain|ip, uri, url',
      }),
    WarninglistEntry: z.array(WarninglistEntrySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Warninglist')

const WarninglistsIdFilterSchema = z
  .union([WarninglistIdSchema, z.array(WarninglistIdSchema)])
  .openapi('WarninglistsIdFilter')

const WarninglistsNameFilterSchema = z
  .union([
    z.string().openapi({ example: '%search term%' }),
    z.array(z.string().openapi({ example: '%search term%' })),
  ])
  .openapi('WarninglistsNameFilter')

const NoticelistIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '3' })
  .openapi('NoticelistId')

const NoticelistEntrySchema = z
  .object({
    id: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '1234' }),
    noticelist_id: NoticelistIdSchema.exactOptional(),
    data: z
      .object({
        scope: z.array(z.string().openapi({ example: 'attribute' })).exactOptional(),
        field: z.array(z.string().openapi({ example: 'category' })).exactOptional(),
        value: z.array(z.string().openapi({ example: 'Person' })).exactOptional(),
        tags: z.array(TagNameSchema).exactOptional(),
        message: z
          .object({
            en: z
              .string()
              .exactOptional()
              .openapi({
                example:
                  'This attribute is likely to contain personal data and the data subject is likely to be directly identifiable.',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('NoticelistEntry')

const NoticelistSchema = z
  .object({
    id: NoticelistIdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'List of known domains to know external IP' }),
    type: z
      .enum(['cidr', 'hostname', 'substring', 'string', 'regex'])
      .exactOptional()
      .openapi({ example: 'cidr' }),
    description: z.string().exactOptional(),
    version: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '10' }),
    enabled: z.boolean().exactOptional(),
    warninglist_entry_count: z.string().regex(/^\d+$/).exactOptional().openapi({ example: '1234' }),
    valid_attributes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'List of comma separated warninglist types.',
        example: 'domain, hostname, domain|ip, uri, url',
      }),
    NoticelistEntry: z.array(NoticelistEntrySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Noticelist')

const SharingGroupServerIdSchema = z
  .string()
  .regex(/^\d+$|^$/)
  .max(10)
  .nullable()
  .openapi({ example: '1' })
  .openapi('SharingGroupServerId')

const SharingGroupOrganisationIdSchema = z
  .string()
  .regex(/^\d+$|^$/)
  .max(10)
  .nullable()
  .openapi({ example: '1' })
  .openapi('SharingGroupOrganisationId')

const SharingGroupBlueprintIdSchema = z
  .string()
  .regex(/^\d+$|^$/)
  .max(10)
  .nullable()
  .openapi({ example: '1' })
  .openapi('SharingGroupBlueprintId')

const SlimSharingGroupSchema = z
  .object({ id: SharingGroupIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(SlimSharingGroupNoIdSchema)
  .openapi('SlimSharingGroup')

const SharingGroupNoIdSchema: z.ZodType<SharingGroupNoIdType> = z
  .lazy(() =>
    SlimSharingGroupNoIdSchema.and(
      z
        .object({
          organisation_uuid: UUIDSchema.exactOptional(),
          org_id: OrganisationIdSchema.exactOptional(),
          sync_user_id: UserIdSchema.exactOptional(),
          created: z.iso.datetime({ offset: true }).exactOptional(),
          modified: z.iso.datetime({ offset: true }).exactOptional(),
          roaming: z.boolean().exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('SharingGroupNoId')

const SharingGroupSchema = z
  .object({ id: SharingGroupIdSchema.exactOptional() })
  .openapi({ required: [] })
  .and(SharingGroupNoIdSchema)
  .openapi('SharingGroup')

const SharingGroupOrganisationSchema = z
  .object({
    id: SharingGroupOrganisationIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    extend: z.boolean().exactOptional(),
    Organisation: z
      .object({
        id: OrganisationIdSchema.exactOptional(),
        name: OrganisationNameSchema.exactOptional(),
        uuid: UUIDSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SharingGroupOrganisation')

const SharingGroupServerSchema = z
  .object({
    all_orgs: z.boolean().exactOptional(),
    server_id: ServerIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    Server: z
      .object({ id: ServerIdSchema.exactOptional(), name: ServerNameSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SharingGroupServer')

const SharingGroupListItemSchema = z
  .object({
    SharingGroup: SlimSharingGroupSchema.exactOptional(),
    Organisation: z
      .object({
        id: OrganisationIdSchema.exactOptional(),
        name: OrganisationNameSchema.exactOptional(),
        uuid: UUIDSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    SharingGroupOrg: z.array(SharingGroupOrganisationSchema).exactOptional(),
    SharingGroupServer: z.array(SharingGroupServerSchema).exactOptional(),
    editable: z.boolean().exactOptional(),
    deletable: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SharingGroupListItem')

const SharingGroupBlueprintEditSchema = z
  .object({
    name: z.string().exactOptional(),
    rules: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String encoded JSON. Supported operands are OR, AND and NOT. Supported filters, as single values or list, are: org_id, org_uuid, org_name, org_nationality, org_sector, org_type, sharing_group_id and sharing_group_uuid.',
        example:
          '{"AND":{"OR":{"org_id":[1,2],"org_uuid":["3e0d3fc7-972a-4788-9161-cc250df116f9","26f07156-948c-4b7f-ac2c-921e29a319b4"],"org_name":"Example name","org_sector":"Example sector","org_type":"Example Type","sharing_group_id":5,"sharing_group_uuid":"bc8cd878-c22e-400b-892a-e204d5f1d4bd","org_nationality":["Example nationality 1","Example nationality 2"]},"NOT":{"org_nationality":["Example nationality a","Example nationality b"]}}}',
      }),
  })
  .openapi({ required: [] })
  .openapi('SharingGroupBlueprintEdit')

const SharingGroupBlueprintAddSchema = z
  .object({
    SharingGroupBlueprint: SharingGroupBlueprintEditSchema.and(
      z
        .object({ sharing_group_id: SharingGroupIntIdSchema.exactOptional() })
        .openapi({ required: [] }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SharingGroupBlueprintAdd')

const FullSharingGroupBlueprintSchema = z
  .object({
    id: SharingGroupBlueprintIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    name: z.string().exactOptional(),
    timestamp: TimestampSchema.exactOptional(),
    user_id: UserIdSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
    rules: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '{"AND":{"OR":{"org_id":[1,2],"org_uuid":["3e0d3fc7-972a-4788-9161-cc250df116f9","26f07156-948c-4b7f-ac2c-921e29a319b4"],"org_name":"Example name","org_sector":"Example sector","org_type":"Example Type","sharing_group_id":5,"sharing_group_uuid":"bc8cd878-c22e-400b-892a-e204d5f1d4bd","org_nationality":["Example nationality 1","Example nationality 2"]},"NOT":{"org_nationality":["Example nationality a","Example nationality b"]}}}',
      }),
  })
  .openapi({ required: [] })
  .openapi('FullSharingGroupBlueprint')

const LogActionTypeSchema = z
  .enum([
    'accept',
    'accept_delegation',
    'acceptRegistrations',
    'add',
    'admin_email',
    'attachTags',
    'auth',
    'auth_fail',
    'blocklisted',
    'captureRelations',
    'change_pw',
    'delete',
    'disable',
    'discard',
    'discardRegistrations',
    'edit',
    'email',
    'enable',
    'enrichment',
    'error',
    'export',
    'fetchEvent',
    'file_upload',
    'galaxy',
    'include_formula',
    'login',
    'login_fail',
    'logout',
    'merge',
    'pruneUpdateLogs',
    'publish',
    'publish_sightings',
    'publish alert',
    'pull',
    'purge_events',
    'push',
    'registration',
    'registration_error',
    'remove_dead_workers',
    'request',
    'request_delegation',
    'reset_auth_key',
    'send_mail',
    'security',
    'serverSettingsEdit',
    'tag',
    'undelete',
    'update',
    'update_database',
    'update_db_worker',
    'upgrade_24',
    'upload_sample',
    'version_warning',
    'warning',
    'wipe_default',
  ])
  .openapi('LogActionType')

const LogIdSchema = z.string().regex(/^\d+$/).max(10).openapi({ example: '12345' }).openapi('LogId')

const LogTitleSchema = z
  .string()
  .openapi({ example: 'Attribute (448272) from Event (1): Other/text foo' })
  .openapi('LogTitle')

const LogChangeSchema = z.string().openapi({ example: 'name () => (ORGNAME)' }).openapi('LogChange')

const LogDescriptionSchema = z
  .string()
  .openapi({ example: 'Organisation "ORGNAME" (1) added by User "SYSTEM" (0).' })
  .openapi('LogDescription')

const ModelNameSchema = z
  .enum([
    'AdminSetting',
    'Allowedlist',
    'AttachmentScan',
    'Attribute',
    'AttributeTag',
    'AuditLog',
    'AuthKey',
    'Bruteforce',
    'Cerebrate',
    'Community',
    'CorrelationExclusion',
    'Correlation',
    'Dashboard',
    'DecayingModelMapping',
    'DecayingModel',
    'EventBlocklist',
    'EventDelegation',
    'EventGraph',
    'EventLock',
    'Event',
    'EventReport',
    'EventTag',
    'FavouriteTag',
    'Feed',
    'FuzzyCorrelateSsdeep',
    'GalaxyClusterBlocklist',
    'GalaxyCluster',
    'GalaxyClusterRelation',
    'GalaxyClusterRelationTag',
    'GalaxyElement',
    'Galaxy',
    'Inbox',
    'Job',
    'Log',
    'MispObject',
    'Module',
    'News',
    'NoticelistEntry',
    'Noticelist',
    'NotificationLog',
    'ObjectReference',
    'ObjectRelationship',
    'ObjectTemplateElement',
    'ObjectTemplate',
    'Organisation',
    'OrgBlocklist',
    'Post',
    'Regexp',
    'RestClientHistory',
    'Role',
    'Server',
    'ShadowAttribute',
    'SharingGroupOrg',
    'SharingGroup',
    'SharingGroupServer',
    'SightingdbOrg',
    'Sightingdb',
    'Sighting',
    'TagCollection',
    'TagCollectionTag',
    'Tag',
    'Task',
    'TaxonomyEntry',
    'Taxonomy',
    'TaxonomyPredicate',
    'TemplateElementAttribute',
    'TemplateElementFile',
    'TemplateElement',
    'TemplateElementText',
    'Template',
    'TemplateTag',
    'Thread',
    'ThreatLevel',
    'User',
    'UserSetting',
    'WarninglistEntry',
    'Warninglist',
    'WarninglistType',
  ])
  .openapi('ModelName')

const ModelIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('ModelId')

const LogSchema = z
  .object({
    id: LogIdSchema.exactOptional(),
    title: LogTitleSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    model: ModelNameSchema.exactOptional(),
    model_id: ModelIdSchema.exactOptional(),
    action: LogActionTypeSchema.exactOptional(),
    user_id: UserIdSchema.exactOptional(),
    change: LogChangeSchema.exactOptional(),
    email: z.email().exactOptional(),
    org: OrganisationNameSchema.exactOptional(),
    description: LogDescriptionSchema.exactOptional(),
    ip: z.string().exactOptional().openapi({ example: '10.0.0.10' }),
  })
  .openapi({ required: [] })
  .openapi('Log')

const EnrichModulesListSchema = z
  .strictObject({
    reversedns: z.boolean().exactOptional(),
    sigma_syntax_validator: z.boolean().exactOptional(),
    ods_enrich: z.boolean().exactOptional(),
    recordedfuture: z.boolean().exactOptional(),
    eupi: z.boolean().exactOptional(),
    docx_enrich: z.boolean().exactOptional(),
    passivetotal: z.boolean().exactOptional(),
    abuseipdb: z.boolean().exactOptional(),
    ransomcoindb: z.boolean().exactOptional(),
    domaintools: z.boolean().exactOptional(),
    crowdstrike_falcon: z.boolean().exactOptional(),
    google_safe_browsing: z.boolean().exactOptional(),
    geoip_country: z.boolean().exactOptional(),
    joesandbox_query: z.boolean().exactOptional(),
    crowdsec: z.boolean().exactOptional(),
    geoip_asn: z.boolean().exactOptional(),
    rbl: z.boolean().exactOptional(),
    yeti: z.boolean().exactOptional(),
    ocr_enrich: z.boolean().exactOptional(),
    onyphe: z.boolean().exactOptional(),
    odt_enrich: z.boolean().exactOptional(),
    socialscan: z.boolean().exactOptional(),
    sophoslabs_intelix: z.boolean().exactOptional(),
    mmdb_lookup: z.boolean().exactOptional(),
    vmray_submit: z.boolean().exactOptional(),
    trustar_enrich: z.boolean().exactOptional(),
    ipinfo: z.boolean().exactOptional(),
    backscatter_io: z.boolean().exactOptional(),
    ipasn: z.boolean().exactOptional(),
    urlscan: z.boolean().exactOptional(),
    threatcrowd: z.boolean().exactOptional(),
    html_to_markdown: z.boolean().exactOptional(),
    yara_query: z.boolean().exactOptional(),
    sigma_queries: z.boolean().exactOptional(),
    xforceexchange: z.boolean().exactOptional(),
    whois: z.boolean().exactOptional(),
    pdf_enrich: z.boolean().exactOptional(),
    threatfox: z.boolean().exactOptional(),
    clamav: z.boolean().exactOptional(),
    vmware_nsx: z.boolean().exactOptional(),
    'sigmf-expand': z.boolean().exactOptional(),
    urlhaus: z.boolean().exactOptional(),
    stix2_pattern_syntax_validator: z.boolean().exactOptional(),
    censys_enrich: z.boolean().exactOptional(),
    variotdbs: z.boolean().exactOptional(),
    joesandbox_submit: z.boolean().exactOptional(),
    virustotal_public: z.boolean().exactOptional(),
    macaddress_io: z.boolean().exactOptional(),
    mcafee_insights_enrich: z.boolean().exactOptional(),
    countrycode: z.boolean().exactOptional(),
    shodan: z.boolean().exactOptional(),
    dnsdb_query: z.boolean().exactOptional(),
    greynoise: z.boolean().exactOptional(),
    xlsx_enrich: z.boolean().exactOptional(),
    lastline_submit: z.boolean().exactOptional(),
    assemblyline_submit: z.boolean().exactOptional(),
    hashlookup: z.boolean().exactOptional(),
    apivoid: z.boolean().exactOptional(),
    lastline_query: z.boolean().exactOptional(),
    eql: z.boolean().exactOptional(),
    cuckoo_submit: z.boolean().exactOptional(),
    hyasinsight: z.boolean().exactOptional(),
    assemblyline_query: z.boolean().exactOptional(),
    circl_passivedns: z.boolean().exactOptional(),
    securitytrails: z.boolean().exactOptional(),
    hashdd: z.boolean().exactOptional(),
    geoip_city: z.boolean().exactOptional(),
    qrcode: z.boolean().exactOptional(),
    sourcecache: z.boolean().exactOptional(),
    threatminer: z.boolean().exactOptional(),
    cytomic_orion: z.boolean().exactOptional(),
    iprep: z.boolean().exactOptional(),
    qintel_qsentry: z.boolean().exactOptional(),
    wiki: z.boolean().exactOptional(),
    cve: z.boolean().exactOptional(),
    btc_scam_check: z.boolean().exactOptional(),
    whoisfreaks: z.boolean().exactOptional(),
    google_search: z.boolean().exactOptional(),
    malwarebazaar: z.boolean().exactOptional(),
    intel471: z.boolean().exactOptional(),
    btc_steroids: z.boolean().exactOptional(),
    mwdb: z.boolean().exactOptional(),
    dbl_spamhaus: z.boolean().exactOptional(),
    onyphe_full: z.boolean().exactOptional(),
    ipqs_fraud_and_risk_scoring: z.boolean().exactOptional(),
    farsight_passivedns: z.boolean().exactOptional(),
    cve_advanced: z.boolean().exactOptional(),
    cpe: z.boolean().exactOptional(),
    'passive-ssh': z.boolean().exactOptional(),
    vulners: z.boolean().exactOptional(),
    yara_syntax_validator: z.boolean().exactOptional(),
    jinja_template_rendering: z.boolean().exactOptional(),
    virustotal: z.boolean().exactOptional(),
    macvendors: z.boolean().exactOptional(),
    vulndb: z.boolean().exactOptional(),
    circl_passivessl: z.boolean().exactOptional(),
    dns: z.boolean().exactOptional(),
    otx: z.boolean().exactOptional(),
    bgpranking: z.boolean().exactOptional(),
    extract_url_components: z.boolean().exactOptional(),
    'intelmq_eventdb.experimental': z.boolean().exactOptional(),
    apiosintds: z.boolean().exactOptional(),
    pptx_enrich: z.boolean().exactOptional(),
    hibp: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnrichModulesList')

const MicroTimestampSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({ example: '1581984000000000' })
  .openapi('MicroTimestamp')

const ExtendingRestSearchFlagSchema = z
  .boolean()
  .openapi({
    description:
      'Whether to include events that are extending another one. If set to 1, only events extending another will be returned. If set to 0, only events that are not extending another will be returned. Omit or [0,1] to disregard extension state.',
  })
  .openapi('ExtendingRestSearchFlag')

const ExtendedRestSearchFlagSchema = z
  .boolean()
  .openapi({
    description:
      'Whether to include events that are extended by another one. If set to 1, only events extended by another will be returned. If set to 0, only events that are not extended by another will be returned. Omit or [0,1] to disregard extension state.',
  })
  .openapi('ExtendedRestSearchFlag')

const LocalSchema = z
  .union([z.literal(0), z.literal(1)])
  .default(0)
  .openapi('Local')

const IsReadOnlySchema = z.boolean().openapi('IsReadOnly')

const SortSearchFieldSchema = z
  .string()
  .nullable()
  .openapi({ description: 'Field to be used to sort the result', example: 'timestamp' })
  .openapi('SortSearchField')

const DirectionSearchFieldSchema = z
  .enum(['asc', 'desc'])
  .nullable()
  .default('asc')
  .openapi({ description: 'Sort direction of the result' })
  .openapi('DirectionSearchField')

const DateIntervalRestSearchFilterSchema = z
  .array(DateRestSearchFilterSchema)
  .length(2)
  .openapi({ description: 'Interval described by two dates' })
  .openapi('DateIntervalRestSearchFilter')

const ExcludeLocalTagsRestSearchFilterSchema = z
  .boolean()
  .nullable()
  .openapi({ description: 'Exclude local tags from the export' })
  .openapi('ExcludeLocalTagsRestSearchFilter')

const ModelOverridesRestSearchFilterSchema = DecayingModelParametersSchema.openapi(
  'ModelOverridesRestSearchFilter',
)

const EventsRestSearchReturnFormatSchema = z
  .enum([
    'json',
    'xml',
    'csv',
    'text',
    'stix',
    'stix2',
    'stix-json',
    'attack',
    'attack-sightings',
    'cache',
    'count',
    'hashes',
    'netfilter',
    'opendata',
    'openioc',
    'rpz',
    'snort',
    'suricata',
    'yara',
    'yara-json',
  ])
  .openapi({ description: 'Format of the response payload' })
  .openapi('EventsRestSearchReturnFormat')

const AuthKeyIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('AuthKeyId')

const AuthKeySchema = z
  .object({
    id: AuthKeyIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    authkey_start: z.string().max(4).exactOptional(),
    authkey_end: z.string().max(4).exactOptional(),
    created: TimestampSchema.exactOptional(),
    expiration: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '1970-01-01 00:00:00' }),
    read_only: IsReadOnlySchema.exactOptional(),
    user_id: UserIdSchema.exactOptional(),
    comment: z.string().exactOptional(),
    allowed_ips: z
      .array(z.string().openapi({ description: 'IP address', example: '127.0.0.1' }))
      .nullable()
      .exactOptional(),
    last_used: NullableTimestampSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthKey')

const ApiErrorSchema = z
  .object({
    name: z.string(),
    message: z.string(),
    url: z.string().openapi({ example: '/attributes' }),
  })
  .openapi({ required: ['name', 'message', 'url'] })
  .openapi('ApiError')

const UnauthorizedApiErrorSchema = z
  .object({
    name: z
      .string()
      .openapi({
        example:
          'Authentication failed. Please make sure you pass the API key of an API enabled user along in the Authorization header.',
      }),
    message: z
      .string()
      .openapi({
        example:
          'Authentication failed. Please make sure you pass the API key of an API enabled user along in the Authorization header.',
      }),
    url: z.string().openapi({ example: '/attributes' }),
  })
  .openapi({ required: ['name', 'message', 'url'] })
  .openapi('UnauthorizedApiError')

const NotFoundApiErrorSchema = z
  .object({
    name: z.string().openapi({ example: 'Invalid attribute' }),
    message: z.string().openapi({ example: 'Invalid attribute' }),
    url: z.string().openapi({ example: '/attributes/1234' }),
  })
  .openapi({ required: ['name', 'message', 'url'] })
  .openapi('NotFoundApiError')

const NotFoundUserTotpDeleteErrorSchema = z
  .object({
    name: z.string().openapi({ example: 'Invalid user' }),
    message: z.string().openapi({ example: 'Invalid user' }),
    url: z.string().openapi({ example: '/users/totp_delete/1' }),
  })
  .openapi({ required: ['name', 'message', 'url'] })
  .openapi('NotFoundUserTotpDeleteError')

const CollectionIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('CollectionId')

const CollectionElementIdSchema = z
  .string()
  .regex(/^\d+$/)
  .max(10)
  .openapi({ example: '12345' })
  .openapi('CollectionElementId')

const CollectionTypeSchema = z
  .enum(['campaign', 'intrusion_set', 'named_threat', 'other', 'research'])
  .openapi('CollectionType')

const CollectionDescriptionSchema = z
  .string()
  .max(16777215)
  .openapi({ example: 'This is a dummy description, for a collection about Aiur.' })
  .openapi('CollectionDescription')

const BaseCollectionSchema = z
  .object({
    type: CollectionTypeSchema.exactOptional(),
    name: z.string().max(191).exactOptional().openapi({ example: 'APT Campaign Collection' }),
    description: CollectionDescriptionSchema.exactOptional(),
    distribution: DistributionLevelIdSchema.exactOptional(),
    sharing_group_id: SharingGroupIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BaseCollection')

const CollectionAddEditSchema = z
  .object({
    id: CollectionIdSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    orgc_id: OrganisationIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    created: z.string().exactOptional().openapi({ example: '2024-03-19 11:10:24' }),
    modified: z.string().exactOptional().openapi({ example: '2024-03-19 11:10:24' }),
    user_id: UserIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .and(BaseCollectionSchema)
  .openapi('CollectionAddEdit')

const CollectionFullNoElementsSchema = z
  .object({
    id: CollectionIdSchema.exactOptional(),
    org_id: OrganisationIdSchema.exactOptional(),
    orgc_id: OrganisationIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    created: z.string().exactOptional().openapi({ example: '2024-03-19 11:10:24' }),
    modified: z.string().exactOptional().openapi({ example: '2024-03-19 11:10:24' }),
    Org: EventOrganisationSchema.exactOptional(),
    Orgc: EventOrganisationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .and(BaseCollectionSchema)
  .openapi('CollectionFullNoElements')

const CollectionElementDescriptionSchema = z
  .string()
  .max(16777215)
  .openapi({ example: 'This is a dummy description, for a collection element.' })
  .openapi('CollectionElementDescription')

const CollectionElementSchema = z
  .object({
    id: CollectionElementIdSchema.exactOptional(),
    uuid: UUIDSchema.exactOptional(),
    collection_id: CollectionIdSchema.exactOptional(),
    element_uuid: UUIDSchema.exactOptional(),
    element_type: z.enum(['Event', 'GalaxyCluster']).exactOptional(),
    description: CollectionElementDescriptionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionElement')

const CollectionElementListSchema = z
  .array(CollectionElementSchema)
  .openapi('CollectionElementList')

const CollectionFullSchema = z
  .object({ CollectionElement: CollectionElementListSchema.exactOptional() })
  .openapi({ required: [] })
  .and(CollectionFullNoElementsSchema)
  .openapi('CollectionFull')

const AnalystDataResponseResponse = {
  description:
    'An analyst data. Could be a Note, Opinion or Relationship depending on the `analystType` parameter',
  content: {
    'application/json': {
      schema: z.xor([AnalystNoteSchema, AnalystOpinionSchema, AnalystRelationshipSchema]),
    },
  },
}

const DeleteAnalystDataResponseResponse = {
  description: 'Delete analyst data response',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z.string().exactOptional().openapi({ example: 'Analyst Note deleted.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AnalystDataListResponseResponse = {
  description: 'A list of Analyst Data',
  content: {
    'application/json': {
      schema: z.array(z.xor([AnalystNoteSchema, AnalystOpinionSchema, AnalystRelationshipSchema])),
    },
  },
}

const MinimalAnalystDataResponseResponse = {
  description:
    'An list of Analyst Data UUIDs are the keys and their timestamp are in date format. Example: `{` `uuid`: `YYYY-MM-DD HH:mm:ss` `}`.',
  content: {
    'application/json': {
      schema: z.xor([MinimalAnalystDataSchema, MinimalAnalystDataEmptySchema]),
    },
  },
}

const AttributeResponseResponse = {
  description: 'An attribute',
  content: {
    'application/json': {
      schema: z.object({ Attribute: AttributeSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const AttributeListResponseResponse = {
  description: 'A list of attributes',
  content: { 'application/json': { schema: AttributeListSchema } },
}

const DeleteAttributeResponseResponse = {
  description: 'Delete attribute response',
  content: {
    'application/json': {
      schema: z
        .object({ message: z.string().exactOptional().openapi({ example: 'Attribute deleted.' }) })
        .openapi({ required: [] }),
    },
  },
}

const AddAttributeTagResponseResponse = {
  description: 'Add attribute tag response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the tag was successfully added, `false` if it failed',
            }),
          success: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present if the tag was successfully added',
              example: 'Tag added.',
            }),
          check_publish: z.boolean().nullable().exactOptional(),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ example: 'Tag could not be added.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RemoveAttributeTagResponseResponse = {
  description: 'Remove attribute tag response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the tag was successfully removed, `false` if it failed',
            }),
          success: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present if the tag was successfully added',
              example: 'Tag removed.',
            }),
          check_publish: z.boolean().nullable().exactOptional(),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ example: 'Tag could not be added.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const XResultCountHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({ description: 'Result set count', param: { required: false } })

const XExportModuleUsedHeaderSchema = z
  .enum([
    'json',
    'xml',
    'csv',
    'text',
    'download',
    'stix',
    'stix2',
    'stix-json',
    'attack',
    'attack-sightings',
    'cache',
    'count',
    'hashes',
    'netfilter',
    'opendata',
    'openioc',
    'rpz',
    'snort',
    'suricata',
    'yara',
    'yara-json',
  ])
  .exactOptional()
  .openapi({ description: 'Export module used', param: { required: false } })

const XResponseFormatHeaderSchema = z
  .enum([
    'json',
    'xml',
    'csv',
    'text',
    'download',
    'stix',
    'stix2',
    'stix-json',
    'attack',
    'attack-sightings',
    'cache',
    'count',
    'hashes',
    'netfilter',
    'opendata',
    'openioc',
    'rpz',
    'snort',
    'suricata',
    'yara',
    'yara-json',
  ])
  .exactOptional()
  .openapi({ description: 'Response format', param: { required: false } })

const AttributesRestSearchResponseResponse = {
  description: 'Rest search attributes response',
  content: {
    'application/json': {
      schema: z
        .object({
          response: z
            .object({ Attribute: AttributeRestSearchListSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
  headers: z.object({
    'X-Result-Count': XResultCountHeaderSchema,
    'X-Export-Module-Used': XExportModuleUsedHeaderSchema,
    'X-Response-Format': XResponseFormatHeaderSchema,
  }),
}

const AttributeStatisticsResponseResponse = {
  description: 'Attribute statistics response',
  content: { 'application/json': { schema: AttributeStatisticsResponseSchema } },
}

const DescribeAttributeTypesResponseResponse = {
  description: 'Describe attribute categories and types response',
  content: { 'application/json': { schema: DescribeAttributeTypesResponseSchema } },
}

const EnrichAttributeResponseResponse = {
  description: 'Enrich attribute response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'Present and `true` if the attribute was successfully enriched.',
            }),
          success: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Status message of the operation.' }),
          name: z.string().exactOptional().openapi({ example: 'Job queued (job ID: 1).' }),
          message: z.string().exactOptional().openapi({ example: 'Job queued (job ID: 1).' }),
          url: z.string().exactOptional().openapi({ example: '/attributes/enrich/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddEventResponseResponse = {
  description: 'A freshly created event',
  content: { 'application/json': { schema: EditedEventSchema } },
}

const EditEventResponseResponse = {
  description: 'A freshly updated event',
  content: { 'application/json': { schema: EditedEventSchema } },
}

const DeleteEventResponseResponse = {
  description: 'Delete event response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the event was successfully deleted, `false` if it failed',
            }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: '`true` if the event was successfully deleted, `false` if it failed',
            }),
          name: z.string().exactOptional().openapi({ example: 'Event deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'Could not delete Event' }),
          url: z.string().exactOptional().openapi({ example: '/events/delete/1' }),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Only present if an error occurred when deleting the event',
              example: 'Event was not deleted.',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DeleteEventReportResponseResponse = {
  description: 'Delete event report response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the event was successfully deleted, `false` if it failed',
            }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: '`true` if the event was successfully deleted, `false` if it failed',
            }),
          name: z.string().exactOptional().openapi({ example: 'Event report 1 soft deleted.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Event Report 1 could not be soft deleted. Reasons: Errors' }),
          url: z.string().exactOptional().openapi({ example: '/eventReport/delete/1' }),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Only present if an error occurred when deleting the event',
              example: 'Event Report was not deleted.',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RestoreEventReportResponseResponse = {
  description: 'Restore Event Report response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the event was successfully deleted, `false` if it failed',
            }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: '`true` if the event was successfully deleted, `false` if it failed',
            }),
          name: z.string().exactOptional().openapi({ example: 'Event report 1 restored.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Event Report 1 could not be restored. Reasons: Errors' }),
          url: z.string().exactOptional().openapi({ example: '/eventReport/restore/1' }),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Only present if an error occurred when deleting the event',
              example: 'Event Report was not restored.',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const EventReportImportFromUrlResponseResponse = {
  description: 'Import from URL Event Report response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                '`true` if the event report was successfully created, `false` if it failed',
            }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                '`true` if the event report was successfully created, `false` if it failed',
            }),
          name: z.string().exactOptional().openapi({ example: 'Event report imported' }),
          message: z.string().exactOptional().openapi({ example: 'Report downloaded and created' }),
          url: z
            .string()
            .exactOptional()
            .openapi({ example: '/eventReport/importReportFromUrl/1' }),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Only present if an error occurred when deleting the event',
              example:
                'Could not fetch report from URL. Fetcher module not enabled or could not download the page',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddEventTagResponseResponse = {
  description: 'Add event tag response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the tag was successfully added, `false` if it failed',
            }),
          success: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present if the tag was successfully added',
              example: 'Tag added.',
            }),
          check_publish: z.boolean().nullable().exactOptional(),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ example: 'Tag could not be added.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RemoveEventTagResponseResponse = {
  description: 'Remove event tag response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: '`true` if the tag was successfully removed, `false` if it failed',
            }),
          success: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present if the tag was successfully added',
              example: 'Tag removed.',
            }),
          check_publish: z.boolean().nullable().exactOptional(),
          errors: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ example: 'Tag could not be added.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ExtendedEventListResponseResponse = {
  description: 'A list of events with extended properties',
  content: { 'application/json': { schema: ExtendedEventListSchema } },
  headers: z.object({ 'X-Result-Count': XResultCountHeaderSchema }),
}

const ExtendedEventResponseResponse = {
  description: 'An event with extended properties',
  content: {
    'application/json': {
      schema: z.object({ Event: ExtendedEventSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const EventsRestSearchResponseResponse = {
  description: 'Rest search events response',
  content: {
    'application/json': {
      schema: z
        .object({ response: EventRestSearchListSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
  headers: z.object({
    'X-Result-Count': XResultCountHeaderSchema,
    'X-Export-Module-Used': XExportModuleUsedHeaderSchema,
    'X-Response-Format': XResponseFormatHeaderSchema,
  }),
}

const PublishEventResponseResponse = {
  description: 'Publish event response',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().exactOptional().openapi({ example: 'Publish' }),
          message: z.string().exactOptional().openapi({ example: 'Job queued' }),
          url: z.string().exactOptional().openapi({ example: 'https://misp.local/events/alert/1' }),
          id: z.string().regex(/^\d+$/).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const UnpublishEventResponseResponse = {
  description: 'Unpublish event response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Event unpublished.' }),
          message: z.string().exactOptional().openapi({ example: 'Event unpublished.' }),
          url: z.string().exactOptional().openapi({ example: '/events/unpublish/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const EventReportResponseResponse = {
  description: 'An Event Report',
  content: {
    'application/json': {
      schema: z
        .object({ EventReport: EventReportSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const EventReportListResponseResponse = {
  description: 'Get a list of Event Report',
  content: {
    'application/json': {
      schema: z.array(
        z.object({ EventReport: EventReportSchema.exactOptional() }).openapi({ required: [] }),
      ),
    },
  },
}

const EnrichEventResponseResponse = {
  description: 'Enrich event response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Present and `true` if the event was successfully enriched.' }),
          success: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Status message of the operation.' }),
          name: z.string().exactOptional().openapi({ example: 'enrichEvent' }),
          message: z.string().exactOptional().openapi({ example: 'enrichEvent' }),
          url: z.string().exactOptional().openapi({ example: '/events/enrichEvent/1' }),
          data: z
            .string()
            .exactOptional()
            .openapi({ example: '#1 attributes have been created during the enrichment process.' }),
          id: z.string().exactOptional().openapi({ example: '1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GalaxyListResponseResponse = {
  description: 'A list of galaxies',
  content: {
    'application/json': {
      schema: z.array(z.object({ Galaxy: GalaxySchema.exactOptional() }).openapi({ required: [] })),
    },
  },
}

const ExtendedGalaxyResponseResponse = {
  description: 'A extended galaxy response',
  content: { 'application/json': { schema: ExtendedGalaxySchema } },
}

const UpdateGalaxiesResponseResponse = {
  description: 'Update galaxies response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present and `true` if the galaxies were successfully updated.',
            }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present and `true` if the galaxies were successfully updated.',
            }),
          name: z.string().exactOptional().openapi({ example: 'Galaxies updated.' }),
          message: z.string().exactOptional().openapi({ example: 'Galaxies updated.' }),
          url: z.string().exactOptional().openapi({ example: '/galaxies/update' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DeleteGalaxyResponseResponse = {
  description: 'Delete galaxy response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Present and `true` if the galaxy was successfully removed.' }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Present and `true` if the galaxy was successfully removed.' }),
          name: z.string().exactOptional().openapi({ example: 'Galaxy deleted' }),
          message: z.string().exactOptional().openapi({ example: 'Galaxy deleted' }),
          url: z.string().exactOptional().openapi({ example: '/galaxies/delete' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ImportGalaxyClusterResponseResponse = {
  description: 'Import galaxy cluster response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present and `true` if the galaxy was successfully imported.',
            }),
          success: z
            .boolean()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Present and `true` if the galaxy was successfully imported.',
            }),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: "'Galaxy clusters imported. 1 imported, 0 ignored, 0 failed." }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: "'Galaxy clusters imported. 1 imported, 0 ignored, 0 failed." }),
          url: z.string().exactOptional().openapi({ example: '/galaxies/import' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ExportGalaxyClustersResponseResponse = {
  description: 'Export galaxy clusters response',
  content: {
    'application/json': { schema: z.xor([z.array(GalaxyClusterSchema), GalaxyMispFormatSchema]) },
  },
}

const AttachGalaxyClusterResponseResponse = {
  description: 'Attach galaxy cluster response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'Present and `true` if the galaxy cluster was successfully attached.',
            }),
          success: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Status message of the operation.',
              example: 'Cluster attached.',
            }),
          check_publish: z.boolean().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const GalaxyClusterResponseResponse = {
  description: 'Galaxy cluster by ID response',
  content: {
    'application/json': {
      schema: z
        .object({ GalaxyCluster: GalaxyClusterSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const ExtendedGalaxyClusterResponseResponse = {
  description: 'Extended galaxy cluster by ID response',
  content: {
    'application/json': {
      schema: z
        .object({ GalaxyCluster: ExtendedGalaxyClusterSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const GalaxyClusterListResponseResponse = {
  description: 'Get galaxy clusters response',
  content: {
    'application/json': {
      schema: z.array(
        z.object({ GalaxyCluster: GalaxyClusterSchema.exactOptional() }).openapi({ required: [] }),
      ),
    },
  },
}

const PublishGalaxyClusterResponseResponse = {
  description: 'Publish galaxy cluster response',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Publish job queued. Job ID: 4e9d26c275a7b190fcab10029df8c6b6' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const UnpublishGalaxyClusterResponseResponse = {
  description: 'Unpublish galaxy cluster response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'GalaxyCluster unpublished' }),
          message: z.string().exactOptional().openapi({ example: 'GalaxyCluster unpublished' }),
          url: z.string().exactOptional().openapi({ example: '/galaxy_clusters/publish/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DeleteGalaxyClusterResponseResponse = {
  description: 'Delete galaxy cluster response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Galaxy cluster successfully soft deleted.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Galaxy cluster successfully soft deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/galaxy_clusters/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RestoreGalaxyClusterResponseResponse = {
  description: 'Restore galaxy cluster response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'GalaxyCluster restored' }),
          message: z.string().exactOptional().openapi({ example: 'GalaxyCluster restored' }),
          url: z.string().exactOptional().openapi({ example: '/galaxy_clusters/restore/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ResetUserPasswordResponseResponse = {
  description: 'Reset user password response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.string().exactOptional().openapi({ example: 'New credentials sent.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const UserResponseResponse = {
  description: 'User response',
  content: { 'application/json': { schema: UserSchema } },
}

const UserListResponseResponse = {
  description: 'User list response',
  content: { 'application/json': { schema: UserListSchema } },
}

const ExtendedUserResponseResponse = {
  description: 'Extended user response',
  content: { 'application/json': { schema: ExtendedUserSchema } },
}

const DeleteUserResponseResponse = {
  description: 'Delete user response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'User deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'User deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/admin/users/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DeleteUserTotpResponseResponse = {
  description: 'Delete user TOTP response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'User TOTP deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'User TOTP deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/users/totp_delete/1' }),
          id: z.string().exactOptional().openapi({ example: '1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OrganisationResponseResponse = {
  description: 'Organisation list response',
  content: { 'application/json': { schema: OrganisationSchema } },
}

const OrganisationListResponseResponse = {
  description: 'Organisation list response',
  content: { 'application/json': { schema: OrganisationListSchema } },
}

const DeleteOrganisationResponseResponse = {
  description: 'Delete organisation response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Organisation deleted' }),
          message: z.string().exactOptional().openapi({ example: 'Organisation deleted' }),
          url: z.string().exactOptional().openapi({ example: '/admin/organisations/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ServerResponseResponse = {
  description: 'Server response',
  content: {
    'application/json': {
      schema: z.object({ Server: ServerSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const ServerListResponseResponse = {
  description: 'Server list response',
  content: { 'application/json': { schema: ServerListSchema } },
}

const DeleteServerResponseResponse = {
  description: 'Delete server response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Server deleted' }),
          message: z.string().exactOptional().openapi({ example: 'Server deleted' }),
          url: z.string().exactOptional().openapi({ example: '/servers/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PullServerResponseResponse = {
  description: 'Pull server response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Pull queued for background execution. Job ID: 1' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Pull queued for background execution. Job ID: 1' }),
          url: z.string().exactOptional().openapi({ example: '/servers/pull/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PushServerResponseResponse = {
  description: 'Push server response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Push queued for background execution. Job ID: 1' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Push queued for background execution. Job ID: 1' }),
          url: z.string().exactOptional().openapi({ example: '/servers/push/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ServerVersionResponseResponse = {
  description: 'Server version',
  content: {
    'application/json': {
      schema: z
        .object({
          version: z.string().exactOptional().openapi({ example: '2.4.142' }),
          perm_sync: z.boolean().nullable().exactOptional(),
          perm_sighting: z.boolean().nullable().exactOptional(),
          perm_galaxy_editor: z.boolean().nullable().exactOptional(),
          request_encoding: z.array(z.enum(['gzip', 'br'])).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ServerPyMISPVersionResponseResponse = {
  description: 'Server PyMISP version',
  content: {
    'application/json': {
      schema: z
        .object({ version: z.string().exactOptional().openapi({ example: '2.4.142' }) })
        .openapi({ required: [] }),
    },
  },
}

const ServerSettingsResponseResponse = {
  description: 'Server settings and diagnostics',
  content: {
    'application/json': {
      schema: z
        .object({
          version: z
            .object({
              current: z.string().exactOptional().openapi({ example: 'v2.4.142' }),
              newest: z.string().exactOptional().openapi({ example: 'v2.4.142' }),
              upToDate: z.string().exactOptional().openapi({ example: 'same' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          phpSettings: z
            .object({
              max_execution_time: PhpServerSettingSchema.exactOptional(),
              memory_limit: PhpServerSettingSchema.exactOptional(),
              upload_max_filesize: PhpServerSettingSchema.exactOptional(),
              post_max_size: PhpServerSettingSchema.exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          gpgStatus: z.string().exactOptional().openapi({ example: 'FAIL: Failed to load GnuPG' }),
          proxyStatus: z
            .string()
            .exactOptional()
            .openapi({ example: 'not configured (so not tested)' }),
          zmqStatus: z.int().exactOptional().openapi({ example: 1 }),
          stix: z
            .object({
              operational: z.int().exactOptional().openapi({ example: 1 }),
              stix: ServerPackageVersionSchema.exactOptional(),
              cybox: ServerPackageVersionSchema.exactOptional(),
              mixbox: ServerPackageVersionSchema.exactOptional(),
              maec: ServerPackageVersionSchema.exactOptional(),
              stix2: ServerPackageVersionSchema.exactOptional(),
              pymisp: ServerPackageVersionSchema.exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          moduleStatus: z
            .object({
              Enrichment: z.int().exactOptional().openapi({ example: 1 }),
              Import: z.int().exactOptional().openapi({ example: 1 }),
              Export: z.int().exactOptional().openapi({ example: 1 }),
              Cortex: z.int().exactOptional().openapi({ example: 1 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          writeableDirs: z
            .object({})
            .exactOptional()
            .openapi({
              example: {
                '/tmp': 0,
                '/var/www/MISP/app/tmp': 0,
                '/var/www/MISP/app/files': 0,
                '/var/www/MISP/app/files/scripts/tmp': 0,
              },
            }),
          writeableFiles: z
            .object({})
            .exactOptional()
            .openapi({
              example: {
                '/var/www/MISP/app/Config/config.php': 0,
                '/var/www/MISP/.git/ORIG_HEAD': 2,
              },
            }),
          readableFiles: z
            .object({})
            .exactOptional()
            .openapi({ example: { '/var/www/MISP/app/files/scripts/stixtest.py': 0 } }),
          dbDiagnostics: z
            .object({})
            .exactOptional()
            .openapi({
              example: {
                admin_settings: {
                  table: 'admin_settings',
                  used: '0.03 MB',
                  reclaimable: '0 MB',
                  data_in_bytes: 16384,
                  index_in_bytes: 16384,
                  reclaimable_in_bytes: 0,
                },
              },
            }),
          dbSchemaDiagnostics: z
            .object({
              dataSource: z.string().exactOptional().openapi({ example: 'Database/Mysql' }),
              actual_db_version: z
                .string()
                .regex(/^\d+$/)
                .exactOptional()
                .openapi({ example: '68' }),
              checked_table_column: z
                .array(z.string().openapi({ example: 'column_name' }))
                .exactOptional(),
              diagnostic: z.object({}).exactOptional(),
              diagnostic_index: z
                .union([
                  z
                    .object({})
                    .openapi({
                      example: {
                        event_reports: {
                          event_id: {
                            message: 'Column `event_id` is indexed but should not',
                            sql: 'DROP INDEX `event_id` ON event_reports;',
                          },
                        },
                      },
                    }),
                  z.array(z.object({})).openapi({ example: [] }),
                ])
                .exactOptional(),
              expected_db_version: z
                .string()
                .regex(/^\d+$/)
                .exactOptional()
                .openapi({ example: '70' }),
              error: z.string().exactOptional(),
              update_locked: z.boolean().exactOptional(),
              remaining_lock_time: z.number().exactOptional().openapi({ example: 0 }),
              update_fail_number_reached: z.boolean().exactOptional(),
              indexes: z
                .object({})
                .exactOptional()
                .openapi({ example: { admin_settings: { id: true, setting: false } } }),
              columnPerTable: z
                .object({})
                .exactOptional()
                .openapi({ example: { admin_settings: ['id', 'setting', 'value'] } }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          redisInfo: z
            .object({})
            .exactOptional()
            .openapi({
              example: {
                extensionVersion: '5.1.1',
                connection: true,
                redis_version: '5.0.7',
                redis_git_sha1: 0,
                redis_git_dirty: 0,
                redis_build_id: '636cde3b5c7a3923',
                redis_mode: 'standalone',
                os: 'Linux 5.8.0-50-generic x86_64',
                arch_bits: 64,
                multiplexing_api: 'epoll',
                atomicvar_api: 'atomic-builtin',
                gcc_version: '9.2.1',
                process_id: 1051,
                run_id: 'f894944d92c978df93a18821fb5ebe30dfd0b257',
                tcp_port: 6379,
                uptime_in_seconds: 327116,
                uptime_in_days: 3,
                hz: 10,
                configured_hz: 10,
                lru_clock: 10365184,
                executable: '/usr/bin/redis-server',
                config_file: '/etc/redis/redis.conf',
                connected_clients: 18,
                client_recent_max_input_buffer: 2,
                client_recent_max_output_buffer: 0,
                blocked_clients: 0,
                used_memory: 1309488,
                used_memory_human: '1.25M',
                used_memory_rss: 5541888,
                used_memory_rss_human: '5.29M',
                used_memory_peak: 1410464,
                used_memory_peak_human: '1.35M',
                used_memory_peak_perc: '92.84%',
                used_memory_overhead: 1200800,
                used_memory_startup: 796232,
                used_memory_dataset: 108688,
                used_memory_dataset_perc: '21.18%',
                allocator_allocated: 1480176,
                allocator_active: 1896448,
                allocator_resident: 5890048,
                total_system_memory: 33406590976,
                total_system_memory_human: '31.11G',
                used_memory_lua: 41984,
                used_memory_lua_human: '41.00K',
                used_memory_scripts: 0,
                used_memory_scripts_human: '0B',
                number_of_cached_scripts: 0,
                maxmemory: 0,
                maxmemory_human: '0B',
                maxmemory_policy: 'noeviction',
                allocator_frag_ratio: 1.28,
                allocator_frag_bytes: 416272,
                allocator_rss_ratio: 3.11,
                allocator_rss_bytes: 3993600,
                rss_overhead_ratio: 0.94,
                rss_overhead_bytes: -348160,
                mem_fragmentation_ratio: 4.24,
                mem_fragmentation_bytes: 4233432,
                mem_not_counted_for_evict: 0,
                mem_replication_backlog: 0,
                mem_clients_slaves: 0,
                mem_clients_normal: 402912,
                mem_aof_buffer: 0,
                mem_allocator: 'jemalloc-5.2.1',
                active_defrag_running: 0,
                lazyfree_pending_objects: 0,
                loading: 0,
                rdb_changes_since_last_save: 0,
                rdb_bgsave_in_progress: 0,
                rdb_last_save_time: 1620977919,
                rdb_last_bgsave_status: 'ok',
                rdb_last_bgsave_time_sec: 0,
                rdb_current_bgsave_time_sec: -1,
                rdb_last_cow_size: 446464,
                aof_enabled: 0,
                aof_rewrite_in_progress: 0,
                aof_rewrite_scheduled: 0,
                aof_last_rewrite_time_sec: -1,
                aof_current_rewrite_time_sec: -1,
                aof_last_bgrewrite_status: 'ok',
                aof_last_write_status: 'ok',
                aof_last_cow_size: 0,
                total_connections_received: 289,
                total_commands_processed: 252747,
                instantaneous_ops_per_sec: 7,
                total_net_input_bytes: 12111506,
                total_net_output_bytes: 1232466,
                instantaneous_input_kbps: 0.36,
                instantaneous_output_kbps: 0.03,
                rejected_connections: 0,
                sync_full: 0,
                sync_partial_ok: 0,
                sync_partial_err: 0,
                expired_keys: 17,
                expired_stale_perc: 0,
                expired_time_cap_reached_count: 0,
                evicted_keys: 0,
                keyspace_hits: 70,
                keyspace_misses: 62805,
                pubsub_channels: 0,
                pubsub_patterns: 0,
                latest_fork_usec: 168,
                migrate_cached_sockets: 0,
                slave_expires_tracked_keys: 0,
                active_defrag_hits: 0,
                active_defrag_misses: 0,
                active_defrag_key_hits: 0,
                active_defrag_key_misses: 0,
                role: 'master',
                connected_slaves: 0,
                master_replid: 'd5e7afcf4fd1a31e539a4eadd5caf2a7da6d121c',
                master_replid2: 0,
                master_repl_offset: 0,
                second_repl_offset: -1,
                repl_backlog_active: 0,
                repl_backlog_size: 1048576,
                repl_backlog_first_byte_offset: 0,
                repl_backlog_histlen: 0,
                used_cpu_sys: 195.014281,
                used_cpu_user: 217.352183,
                used_cpu_sys_children: 0.050885,
                used_cpu_user_children: 0.076436,
                cluster_enabled: 0,
                db0: 'keys=15,expires=0,avg_ttl=0',
                db13: 'keys=12,expires=4,avg_ttl=21265731140',
              },
            }),
          finalSettings: z.array(MispSettingSchema).exactOptional(),
          extensions: z
            .object({
              cli: z
                .object({ phpversion: z.string().exactOptional().openapi({ example: '7.4.3' }) })
                .exactOptional()
                .openapi({ required: [] }),
              extensions: z
                .object({})
                .exactOptional()
                .openapi({
                  example: {
                    json: {
                      web_version: '7.4.3',
                      web_version_outdated: false,
                      cli_version: '7.4.3',
                      cli_version_outdated: false,
                      required: true,
                      info: null,
                    },
                  },
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          workers: z
            .object({
              cache: WorkersStatusSchema.exactOptional(),
              default: WorkersStatusSchema.exactOptional(),
              email: WorkersStatusSchema.exactOptional(),
              prio: WorkersStatusSchema.exactOptional(),
              update: WorkersStatusSchema.exactOptional(),
              scheduler: WorkersStatusSchema.exactOptional(),
              proc_accessible: z.boolean().exactOptional(),
              controls: z.boolean().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const StartWorkerResponseResponse = {
  description: 'Start worker response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Worker start signal sent' }),
          message: z.string().exactOptional().openapi({ example: 'Worker start signal sent' }),
          url: z.string().exactOptional().openapi({ example: '/servers/startWorker/email' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const StopWorkerResponseResponse = {
  description: 'Stop worker response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Worker stop signal sent' }),
          message: z.string().exactOptional().openapi({ example: 'Worker stop signal sent' }),
          url: z.string().exactOptional().openapi({ example: '/servers/startWorker/1234' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const KillAllWorkersResponseResponse = {
  description: 'Kill all workers response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Killing workers.' }),
          message: z.string().exactOptional().openapi({ example: 'Killing workers.' }),
          url: z.string().exactOptional().openapi({ example: '/servers/killAllWorkers' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RestartWorkersResponseResponse = {
  description: 'Restart workers response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Restarting workers.' }),
          message: z.string().exactOptional().openapi({ example: 'Restarting workers.' }),
          url: z.string().exactOptional().openapi({ example: '/servers/restartWorkers' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RestartDeadWorkersResponseResponse = {
  description: 'Restart dead workers response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Restarting workers.' }),
          message: z.string().exactOptional().openapi({ example: 'Restarting workers.' }),
          url: z.string().exactOptional().openapi({ example: '/servers/restartDeadWorkers' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetWorkersResponseResponse = {
  description: 'Stop worker response',
  content: {
    'application/json': {
      schema: z
        .object({
          cache: WorkersStatusSchema.exactOptional(),
          default: WorkersStatusSchema.exactOptional(),
          email: WorkersStatusSchema.exactOptional(),
          prio: WorkersStatusSchema.exactOptional(),
          update: WorkersStatusSchema.exactOptional(),
          scheduler: WorkersStatusSchema.exactOptional(),
          proc_accessible: z.boolean().exactOptional(),
          controls: z.boolean().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const UpdateServerResponseResponse = {
  description: 'Update server response',
  content: {
    'application/json': {
      schema: z
        .object({
          results: z
            .array(
              z.union([
                UpdateServerResultItemSchema,
                z.string().openapi({ example: 'Update failed, you are not on branch' }),
              ]),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const UpdateServerJSONResponseResponse = {
  description:
    'Update server JSON libraries response. Synchronous updates return the result for each updated library (a value of null indicates the library was up to date and not changed). Asynchronous updates (/servers/updateJSON/async:1) return the queued job information instead.',
  content: {
    'application/json': {
      schema: z.xor([
        z
          .object({
            Galaxy: z.object({}).nullable().exactOptional(),
            Noticelist: z.object({}).nullable().exactOptional(),
            Warninglist: z.object({}).nullable().exactOptional(),
            Taxonomy: z.object({}).nullable().exactOptional(),
            ObjectTemplate: z.object({}).nullable().exactOptional(),
            ObjectRelationship: z.object({}).nullable().exactOptional(),
          })
          .openapi({ required: [] }),
        z
          .object({
            message: z
              .string()
              .exactOptional()
              .openapi({ example: 'Server updateJSON job queued. Job ID: 181' }),
          })
          .openapi({ required: [] }),
      ]),
    },
  },
}

const CacheServerResponseResponse = {
  description: 'Cache server response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Server caching job initiated.' }),
          message: z.string().exactOptional().openapi({ example: 'Server caching job initiated.' }),
          url: z.string().exactOptional().openapi({ example: '/servers/cache' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const CreateSyncResponseResponse = {
  description: 'Create server sync',
  content: {
    'application/json': {
      schema: z
        .object({
          Server: z
            .object({
              url: z.string().exactOptional().openapi({ example: 'https://misppriv.circl.lu' }),
              uuid: UUIDSchema.exactOptional(),
              authkey: AuthKeyRawSchema.exactOptional(),
              Organisation: z
                .object({
                  name: OrganisationNameSchema.exactOptional(),
                  uuid: UUIDSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetInstanceUUIDResponseResponse = {
  description: 'Get instance UUID response',
  content: {
    'application/json': {
      schema: z.object({ uuid: UUIDSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const GetServerSettingResponseResponse = {
  description: 'Get setting response',
  content: { 'application/json': { schema: MispSettingSchema } },
}

const EditServerSettingResponseResponse = {
  description: 'Edit setting response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Field updated' }),
          message: z.string().exactOptional().openapi({ example: 'Field updated' }),
          url: z.string().exactOptional().openapi({ example: '/servers/serverSettingsEdit' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupResponseResponse = {
  description: 'Get sharing group response',
  content: {
    'application/json': {
      schema: z
        .object({
          SharingGroup: SharingGroupSchema.exactOptional(),
          Organisation: OrganisationSchema.exactOptional(),
          SharingGroupOrg: z.array(SharingGroupOrganisationSchema).exactOptional(),
          SharingGroupServer: z.array(SharingGroupServerSchema).exactOptional(),
          editable: z.boolean().exactOptional(),
          deletable: z.boolean().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupBlueprintResponseResponse = {
  description: 'Sharing group blueprint response',
  content: {
    'application/json': {
      schema: z
        .object({ SharingGroupBlueprint: FullSharingGroupBlueprintSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupBlueprintViewOrgsResponseResponse = {
  description: 'Sharing group blueprint viewOrgs response',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Organisation: z
              .object({
                id: OrganisationIdSchema.exactOptional(),
                uuid: UUIDSchema.exactOptional(),
                name: z.string().exactOptional().openapi({ example: 'Axiom' }),
                sector: z.string().exactOptional().openapi({ example: 'Esports' }),
                type: z.string().exactOptional().openapi({ example: 'Commercial' }),
                nationality: z.string().exactOptional().openapi({ example: 'South Korea' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SharingGroupBlueprintIndexResponseResponse = {
  description: 'Sharing group blueprint index response',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({ SharingGroupBlueprint: FullSharingGroupBlueprintSchema.exactOptional() })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SharingGroupBlueprintNotFoundResponseResponse = {
  description: 'Response when no valid sharing group blueprint was found',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().exactOptional().openapi({ example: 'Invalid SharingGroupBlueprint.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Invalid SharingGroupBlueprint.' }),
          url: z
            .string()
            .exactOptional()
            .openapi({ example: '/sharing_group_blueprints/<remaining_url_requested>' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupBlueprintDeletedResponseResponse = {
  description: 'Response when sharing group blueprint was deleted successfully',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional().openapi({ example: true }),
          success: z.boolean().exactOptional().openapi({ example: true }),
          name: z.string().exactOptional().openapi({ example: 'SharingGroupBlueprint deleted.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'SharingGroupBlueprint deleted.' }),
          url: z
            .string()
            .exactOptional()
            .openapi({ example: '/sharing_group_blueprints/<remaining_url_requested>' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupBlueprintDetachedResponseResponse = {
  description: 'Response when sharing group was detached from a blueprint successfully',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional().openapi({ example: true }),
          success: z.boolean().exactOptional().openapi({ example: true }),
          name: z.string().exactOptional().openapi({ example: 'Sharing group detached.' }),
          message: z.string().exactOptional().openapi({ example: 'Sharing group detached.' }),
          url: z
            .string()
            .exactOptional()
            .openapi({ example: '/sharing_group_blueprints/<remaining_url_requested>' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupBlueprintExecutedResponseResponse = {
  description: 'Response when sharing group blueprint was executed successfully',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional().openapi({ example: true }),
          success: z.boolean().exactOptional().openapi({ example: true }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              example:
                'Done, 1 sharing group blueprint(s) matched. Sharing group changes: Created: 0. Updated: 1. Failed to create: 0.',
            }),
          message: z
            .string()
            .exactOptional()
            .openapi({
              example:
                'Done, 1 sharing group blueprint(s) matched. Sharing group changes: Created: 0. Updated: 1. Failed to create: 0.',
            }),
          url: z
            .string()
            .exactOptional()
            .openapi({ example: '/sharing_group_blueprints/<remaining_url_requested>' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SharingGroupListResponseResponse = {
  description: 'Get sharing groups response',
  content: {
    'application/json': {
      schema: z
        .object({ response: z.array(SharingGroupListItemSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const DeleteSharingGroupResponseResponse = {
  description: 'Delete sharing group response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'SharingGroup deleted' }),
          message: z.string().exactOptional().openapi({ example: 'SharingGroup deleted' }),
          url: z.string().exactOptional().openapi({ example: '/sharing_groups/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddOrganisationToSharingGroupResponseResponse = {
  description: 'Add organisation to a sharing group response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Organisation added to the sharing group.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Organisation added to the sharing group.' }),
          url: z.string().exactOptional().openapi({ example: '/sharing_groups/addOrg' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RemoveOrganisationFromSharingGroupResponseResponse = {
  description: 'Remove organisation from a sharing group response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Organisation removed from the sharing group.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Organisation removed from the sharing group.' }),
          url: z.string().exactOptional().openapi({ example: '/sharing_groups/removeOrg' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddServerToSharingGroupResponseResponse = {
  description: 'Add server to a sharing group response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Server added to the sharing group.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Server added to the sharing group.' }),
          url: z.string().exactOptional().openapi({ example: '/sharing_groups/addServer' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RemoveServerFromSharingGroupResponseResponse = {
  description: 'Remove server from a sharing group response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Server removed from the sharing group.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Server removed from the sharing group.' }),
          url: z.string().exactOptional().openapi({ example: '/sharing_groups/removeServer' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const FeedListResponseResponse = {
  description: 'Get feeds response',
  content: {
    'application/json': {
      schema: z.array(z.object({ Feed: FeedSchema.exactOptional() }).openapi({ required: [] })),
    },
  },
}

const FeedResponseResponse = {
  description: 'Get feed response',
  content: {
    'application/json': {
      schema: z.object({ Feed: FeedSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const EnableFeedResponseResponse = {
  description: 'Enable feed response',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().exactOptional().openapi({ example: 'Feed enabled.' }),
          message: z.string().exactOptional().openapi({ example: 'Feed enabled.' }),
          url: z.string().exactOptional().openapi({ example: '/feeds/enable/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DisableFeedResponseResponse = {
  description: 'Disable feed response',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().exactOptional().openapi({ example: 'Feed disabled.' }),
          message: z.string().exactOptional().openapi({ example: 'Feed disabled.' }),
          url: z.string().exactOptional().openapi({ example: '/feeds/disable/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const CacheFeedsResponseResponse = {
  description: 'Cache feeds response',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().exactOptional().openapi({ example: 'Feed caching job initiated.' }),
          message: z.string().exactOptional().openapi({ example: 'Feed caching job initiated.' }),
          url: z.string().exactOptional().openapi({ example: '/feeds/cacheFeed' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const FetchFromFeedResponseResponse = {
  description: 'Fetch feed response',
  content: {
    'application/json': {
      schema: z
        .object({
          result: z
            .string()
            .exactOptional()
            .openapi({ example: 'Pull queued for background execution.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const FetchFromAllFeedsResponseResponse = {
  description: 'Fetch all feeds response',
  content: {
    'application/json': {
      schema: z
        .object({
          result: z
            .string()
            .exactOptional()
            .openapi({ example: 'Pull queued for background execution.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistListResponseResponse = {
  description: 'Get warninglists response',
  content: {
    'application/json': {
      schema: z
        .object({
          Warninglists: z
            .array(
              z
                .object({ Warninglist: WarninglistSchema.exactOptional() })
                .openapi({ required: [] }),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistToggleEnabledResponseResponse = {
  description: 'Toggle enable warninglists response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.string().exactOptional().openapi({ example: '1 warninglist(s) disabled' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistResponseResponse = {
  description: 'Get warninglists response',
  content: {
    'application/json': {
      schema: z
        .object({ Warninglist: WarninglistSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistMatchListResponseResponse = {
  description: 'List of values matching warninglists response',
  content: {
    'application/json': {
      schema: z
        .object({})
        .openapi({
          example: { '10.128.0.2': [{ id: '10', name: 'List of known Wikimedia address ranges' }] },
        }),
    },
  },
}

const UpdateWarninglistsResponseResponse = {
  description: 'List of values matching warninglists response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().nullable().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Successfully updated 1 warninglists.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Successfully updated 1 warninglists.' }),
          url: z.string().exactOptional().openapi({ example: '/warninglists/update' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const NoticelistListResponseResponse = {
  description: 'Get noticelists response',
  content: {
    'application/json': {
      schema: z.array(
        z.object({ Noticelist: NoticelistSchema.exactOptional() }).openapi({ required: [] }),
      ),
    },
  },
}

const NoticelistResponseResponse = {
  description: 'Get noticelist response',
  content: {
    'application/json': {
      schema: z.object({ Noticelist: NoticelistSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const NoticelistToggleEnableResponseResponse = {
  description: 'Toggle enable noticelist response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Noticelist enabled.' }),
          message: z.string().exactOptional().openapi({ example: 'Noticelist enabled.' }),
          url: z.string().exactOptional().openapi({ example: '/noticelists/toggleEnable/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const UpdateNoticelistsResponseResponse = {
  description: 'Toggle enable noticelist response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Successfully updated 1 noticelists.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Successfully updated 1 noticelists.' }),
          url: z.string().exactOptional().openapi({ example: '/noticelists/update' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ObjectResponseResponse = {
  description: 'Object response',
  content: {
    'application/json': {
      schema: z.object({ Object: ObjectSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const ExtendedObjectResponseResponse = {
  description: 'Extended object response',
  content: {
    'application/json': {
      schema: z.object({ Object: ExtendedObjectSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const DeleteObjectResponseResponse = {
  description: 'Delete object response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Object deleted' }),
          message: z.string().exactOptional().openapi({ example: 'Object deleted' }),
          url: z.string().exactOptional().openapi({ example: '/objects/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ObjectsRestSearchResponseResponse = {
  description: 'Rest search objects response',
  content: {
    'application/json': {
      schema: z
        .object({ response: z.array(ObjectRestSearchListSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
  headers: z.object({
    'X-Result-Count': XResultCountHeaderSchema,
    'X-Export-Module-Used': XExportModuleUsedHeaderSchema,
    'X-Response-Format': XResponseFormatHeaderSchema,
  }),
}

const SightingListResponseResponse = {
  description: 'Get sightings response',
  content: { 'application/json': { schema: z.array(SightingSchema) } },
}

const SightingResponseResponse = {
  description: 'Add sighting response',
  content: { 'application/json': { schema: SightingSchema } },
}

const DeleteSightingResponseResponse = {
  description: 'Delete sighting response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Sighting successfully deleted.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Sighting successfully deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/sightings/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const TagListResponseResponse = {
  description: 'Tag list response',
  content: {
    'application/json': {
      schema: z.object({ Tag: TagListSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const TagResponseResponse = {
  description: 'Tag response',
  content: { 'application/json': { schema: TagSchema } },
}

const DeleteTagResponseResponse = {
  description: 'Delete tag response',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z.string().exactOptional().openapi({ example: 'Tag deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'Tag deleted.' }),
          url: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://misppriv.circl.lu/tags/delete/1' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const EditTagResponseResponse = {
  description: 'Tag response',
  content: {
    'application/json': {
      schema: z.object({ Tag: TagSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const SearchTagResponseResponse = {
  description: 'Search tag response',
  content: { 'application/json': { schema: z.array(ExtendedTagSchema) } },
}

const GetLogsResponseResponse = {
  description: 'Get logs response',
  content: {
    'application/json': {
      schema: z.array(z.object({ Log: LogSchema.exactOptional() }).openapi({ required: [] })),
    },
  },
}

const GetAuthKeysResponseResponse = {
  description: 'Get auth keys response',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            AuthKey: AuthKeySchema.exactOptional(),
            User: z
              .object({ id: UserIdSchema.exactOptional(), email: z.email().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const AddAuthKeyResponseResponse = {
  description: 'Auth key response',
  content: {
    'application/json': {
      schema: z.object({ AuthKey: AuthKeySchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const AuthKeyResponseResponse = {
  description: 'Auth key response',
  content: {
    'application/json': {
      schema: z
        .object({
          AuthKey: AuthKeySchema.exactOptional(),
          User: z
            .object({
              id: UserIdSchema.exactOptional(),
              org_id: OrganisationIdSchema.nullable().exactOptional(),
              email: z.email().nullable().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DeleteAuthKeyResponseResponse = {
  description: 'Delete auth key response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'AuthKey deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'AuthKey deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/auth_keys/delete/1234' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetUserSettingsResponseResponse = {
  description: 'Get user settings response',
  content: {
    'application/json': {
      schema: z.array(
        z.object({ UserSetting: UserSettingSchema.exactOptional() }).openapi({ required: [] }),
      ),
    },
  },
}

const UserSettingResponseResponse = {
  description: 'Get user setting response',
  content: {
    'application/json': {
      schema: z
        .object({ UserSetting: UserSettingSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const DeleteUserSettingResponseResponse = {
  description: 'Delete user setting response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Setting deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'Setting deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/user_settings/delete/1234' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetTaxonomiesResponseResponse = {
  description: 'Get taxonomies response',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            Taxonomy: TaxonomySchema.exactOptional(),
            total_count: z
              .int()
              .exactOptional()
              .openapi({ description: 'Amount of related tags to this taxonomy.' }),
            current_count: z
              .int()
              .exactOptional()
              .openapi({ description: 'Amount of active related tags to this taxonomy.' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const TaxonomiesResponseResponse = {
  description: 'Get taxonomy response',
  content: {
    'application/json': {
      schema: z
        .object({
          Taxonomy: TaxonomySchema.exactOptional(),
          entries: z.array(TaxonomyEntrySchema).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const EnableTaxonomyResponseResponse = {
  description: 'Enable taxonomy response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Taxonomy enabled' }),
          message: z.string().exactOptional().openapi({ example: 'Taxonomy enabled' }),
          url: z.string().exactOptional().openapi({ example: '/taxonomies/enable/1234' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const DisableTaxonomyResponseResponse = {
  description: 'Disable taxonomy response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Taxonomy disabled' }),
          message: z.string().exactOptional().openapi({ example: 'Taxonomy disabled' }),
          url: z.string().exactOptional().openapi({ example: '/taxonomies/disabled/1234' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const UpdateTaxonomiesResponseResponse = {
  description: 'Update taxonomies response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ example: 'Successfully updated 120 taxonomy libraries.' }),
          message: z
            .string()
            .exactOptional()
            .openapi({ example: 'Successfully updated 120 taxonomy libraries.' }),
          url: z.string().exactOptional().openapi({ example: '/taxonomies/update' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetTaxonomyTagsResponseResponse = {
  description: 'Get taxonomy tags response',
  content: {
    'application/json': {
      schema: z
        .object({
          Taxonomy: TaxonomySchema.exactOptional(),
          entries: z.array(ExtendedTaxonomyEntrySchema).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ExportTaxonomyTagsResponseResponse = {
  description: 'Export taxonomy response',
  content: {
    'application/json': {
      schema: z
        .object({
          namespace: TaxonomyNamespaceSchema.exactOptional(),
          description: TaxonomyDescriptionSchema.exactOptional(),
          version: z.int().exactOptional(),
          exclusive: z.boolean().exactOptional(),
          predicates: z.array(TaxonomyPredicateExportSchema).exactOptional(),
          values: z.array(TaxonomyValueExportSchema).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ApiErrorResponseResponse = {
  description: 'Unexpected API error',
  content: { 'application/json': { schema: ApiErrorSchema } },
}

const NotFoundApiErrorResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundApiErrorSchema } },
}

const NotFoundUserTotpDeleteResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundUserTotpDeleteErrorSchema } },
}

const UnauthorizedApiErrorResponseResponse = {
  description:
    'Authentication failed. Please make sure you pass the API key of an API enabled user along in the Authorization header.',
  content: { 'application/json': { schema: UnauthorizedApiErrorSchema } },
}

const AddCollectionResponseResponse = {
  description: 'A collection',
  content: {
    'application/json': {
      schema: z
        .object({ Collection: CollectionAddEditSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const EditCollectionResponseResponse = {
  description: 'A collection',
  content: {
    'application/json': {
      schema: z
        .object({ Collection: CollectionAddEditSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const ViewCollectionResponseResponse = {
  description: 'A collection',
  content: {
    'application/json': {
      schema: z
        .object({ Collection: CollectionFullSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const CollectionListResponseResponse = {
  description: 'A list of collections',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({ Collection: CollectionFullNoElementsSchema.exactOptional() })
          .openapi({ required: [] }),
      ),
    },
  },
}

const DeleteCollectionResponseResponse = {
  description: 'Delete collection response',
  content: {
    'application/json': {
      schema: z
        .object({
          saved: z.boolean().exactOptional(),
          success: z.boolean().exactOptional(),
          name: z.string().exactOptional().openapi({ example: 'Collection deleted.' }),
          message: z.string().exactOptional().openapi({ example: 'Collection deleted.' }),
          url: z.string().exactOptional().openapi({ example: '/collections/delete/1' }),
          id: ModelIdSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const EventIdParameterParamsSchema = z
  .xor([EventIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'eventId',
      in: 'path',
      description: 'UUID or numeric ID of the event',
      required: true,
      schema: {
        oneOf: [{ $ref: '#/components/schemas/EventId' }, { $ref: '#/components/schemas/UUID' }],
      },
    },
  })

const AttributeIdParameterParamsSchema = z
  .xor([AttributeIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'attributeId',
      in: 'path',
      description: 'UUID or numeric ID of the attribute',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/AttributeId' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const TagIdParameterParamsSchema = TagIdSchema.openapi({
  param: {
    name: 'tagId',
    in: 'path',
    description: 'Numeric ID of the attribute',
    required: true,
    schema: { $ref: '#/components/schemas/TagId' },
  },
})

const LocalParameterParamsSchema = z.preprocess(
  ((read) => (val: unknown) => {
    const result = read.safeParse(val)
    return result.success ? result.data : val
  })(z.stringbool()),
  IsLocalSchema.openapi({
    param: {
      name: 'local',
      in: 'path',
      description: 'Whether the object should be attached locally or not to the target',
      required: true,
      schema: { $ref: '#/components/schemas/IsLocal' },
    },
  }),
)

const TagSearchTermParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'tagSearchTerm',
      in: 'path',
      description: 'Tag search term',
      required: true,
      schema: { type: 'string', example: '%tlp%' },
    },
    example: '%tlp%',
  })

const GalaxyIdParameterParamsSchema = z
  .xor([GalaxyIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'galaxyId',
      in: 'path',
      description: 'UUID or numeric ID of the galaxy',
      required: true,
      schema: {
        oneOf: [{ $ref: '#/components/schemas/GalaxyId' }, { $ref: '#/components/schemas/UUID' }],
      },
    },
  })

const GalaxyClusterIdParameterParamsSchema = z
  .xor([GalaxyClusterIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'galaxyClusterId',
      in: 'path',
      description: 'UUID or numeric ID of the galaxy cluster',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/GalaxyClusterId' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const UserIdParameterParamsSchema = UserIdSchema.openapi({
  param: {
    name: 'userId',
    in: 'path',
    description: 'Numeric ID of the user',
    required: true,
    schema: { $ref: '#/components/schemas/UserId' },
  },
})

const FirstTimeResetParameterParamsSchema = z
  .enum(['0', '1'])
  .openapi({
    param: {
      name: 'firstTimeReset',
      in: 'path',
      description: 'First time reset is set to `1` only  for new user registrations.',
      required: true,
      schema: { type: 'string', enum: ['0', '1'] },
    },
  })

const OrganisationIdParameterParamsSchema = z
  .xor([OrganisationIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'organisationId',
      in: 'path',
      description: 'UUID or numeric ID of the organisation',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/OrganisationId' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const ServerIdParameterParamsSchema = z
  .xor([ServerIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'serverId',
      in: 'path',
      description: 'UUID or numeric ID of the server',
      required: true,
      schema: {
        oneOf: [{ $ref: '#/components/schemas/ServerId' }, { $ref: '#/components/schemas/UUID' }],
      },
    },
  })

const PullTechniqueParameterParamsSchema = z
  .enum(['full', 'incremental', 'pull_relevant_clusters'])
  .openapi({
    param: {
      name: 'pullTechnique',
      in: 'path',
      description: 'Pull technique to be used for pulling events from this instance.',
      required: true,
      schema: { type: 'string', enum: ['full', 'incremental', 'pull_relevant_clusters'] },
    },
  })

const PushTechniqueParameterParamsSchema = z
  .enum(['full', 'incremental'])
  .openapi({
    param: {
      name: 'pushTechnique',
      in: 'path',
      description: 'Push technique to be used for pushing events to this instance.',
      required: true,
      schema: { type: 'string', enum: ['full', 'incremental'] },
    },
  })

const WorkerTypeParameterParamsSchema = z
  .enum(['default', 'email', 'scheduler', 'cache', 'prio', 'update'])
  .openapi({
    param: {
      name: 'workerType',
      in: 'path',
      description: 'Worker type.',
      required: true,
      schema: {
        type: 'string',
        enum: ['default', 'email', 'scheduler', 'cache', 'prio', 'update'],
      },
    },
  })

const WorkerPidParameterParamsSchema = z
  .string()
  .regex(/^\d+$/)
  .openapi({
    param: {
      name: 'workerPid',
      in: 'path',
      description: 'Worker PID.',
      required: true,
      schema: { type: 'string', pattern: '^\\d+$' },
    },
  })

const SettingNameParameterParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'settingName',
      in: 'path',
      description: 'Setting name.',
      required: true,
      schema: { type: 'string', example: 'MISP.background_jobs' },
    },
    example: 'MISP.background_jobs',
  })

const SharingGroupIdParameterParamsSchema = ((schema) =>
  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
  z.xor([
    ((schema) => z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
      SharingGroupIdSchema,
    ),
    UUIDSchema,
  ]),
).openapi({
  param: {
    name: 'sharingGroupId',
    in: 'path',
    description: 'UUID or numeric ID of the sharing group',
    required: true,
    schema: {
      oneOf: [
        { $ref: '#/components/schemas/SharingGroupId' },
        { $ref: '#/components/schemas/UUID' },
      ],
    },
  },
})

const SharingGroupBlueprintIdParameterParamsSchema = ((schema) =>
  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
  z.xor([
    ((schema) => z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
      SharingGroupIdSchema,
    ),
    UUIDSchema,
  ]),
).openapi({
  param: {
    name: 'sharingGroupBlueprintId',
    in: 'path',
    description: 'UUID or numeric ID of the sharing group blueprint',
    required: true,
    schema: {
      oneOf: [
        { $ref: '#/components/schemas/SharingGroupId' },
        { $ref: '#/components/schemas/UUID' },
      ],
    },
  },
})

const SharingGroupServerIdParameterParamsSchema = ((schema) =>
  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
  SharingGroupServerIdSchema.openapi({
    param: {
      name: 'sharingGroupServerId',
      in: 'path',
      description: 'UUID or numeric ID of the sharing group server',
      required: true,
      schema: { $ref: '#/components/schemas/SharingGroupServerId' },
    },
  }),
)

const FeedIdParameterParamsSchema = z
  .xor([FeedIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'feedId',
      in: 'path',
      description: 'UUID or numeric ID of the feed',
      required: true,
      schema: {
        oneOf: [{ $ref: '#/components/schemas/FeedId' }, { $ref: '#/components/schemas/UUID' }],
      },
    },
  })

const WarninglistIdParameterParamsSchema = WarninglistIdSchema.openapi({
  param: {
    name: 'warninglistId',
    in: 'path',
    description: 'Numeric ID of the warninglist',
    required: true,
    schema: { $ref: '#/components/schemas/WarninglistId' },
  },
})

const NoticelistIdParameterParamsSchema = NoticelistIdSchema.openapi({
  param: {
    name: 'noticelistId',
    in: 'path',
    description: 'Numeric ID of the noticelist',
    required: true,
    schema: { $ref: '#/components/schemas/NoticelistId' },
  },
})

const SightingIdParameterParamsSchema = SightingIdSchema.openapi({
  param: {
    name: 'sightingId',
    in: 'path',
    description: 'UUID or numeric ID of the sighting',
    required: true,
    schema: { $ref: '#/components/schemas/SightingId' },
  },
})

const CacheFeedsScopeParameterParamsSchema = z
  .enum(['all', 'csv', 'freetext'])
  .openapi({
    param: {
      name: 'cacheFeedsScope',
      in: 'path',
      description: 'Cache feeds strategy',
      required: true,
      schema: { type: 'string', enum: ['all', 'csv', 'freetext'] },
    },
  })

const AttachTargetIdParameterParamsSchema = z
  .union([EventIdSchema, AttributeIdSchema, TagCollectionIdSchema])
  .openapi({
    param: {
      name: 'attachTargetId',
      in: 'path',
      description: 'UUID or numeric ID of the target entity (Event, Attribute or TagCollection)',
      required: true,
      schema: {
        anyOf: [
          { $ref: '#/components/schemas/EventId' },
          { $ref: '#/components/schemas/AttributeId' },
          { $ref: '#/components/schemas/TagCollectionId' },
        ],
      },
    },
  })

const AttachTargetTypeParameterParamsSchema = z
  .enum(['event', 'attribute', 'tag_collection'])
  .openapi({
    param: {
      name: 'attachTargetType',
      in: 'path',
      description: 'Type of the target entity to attach to the galaxy cluster.',
      required: true,
      schema: { type: 'string', enum: ['event', 'attribute', 'tag_collection'] },
    },
  })

const AttributeStatisticsContextParameterParamsSchema = z
  .enum(['type', 'category'])
  .default('type')
  .openapi({
    param: {
      name: 'context',
      in: 'path',
      required: true,
      description: 'Context of the statistics.',
      schema: { type: 'string', default: 'type', enum: ['type', 'category'] },
    },
  })

const AttributeStatisticsPercentageParameterParamsSchema = z
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
    param: {
      name: 'percentage',
      in: 'path',
      required: true,
      description: '`0` to show attribute count, `1` for showing percentages',
      schema: { type: 'integer' },
    },
  })

const ObjectIdParameterParamsSchema = z
  .xor([ObjectIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'objectId',
      in: 'path',
      description: 'UUID or numeric ID of the object',
      required: true,
      schema: {
        oneOf: [{ $ref: '#/components/schemas/ObjectId' }, { $ref: '#/components/schemas/UUID' }],
      },
    },
  })

const HardDeleteParameterParamsSchema = z
  .enum(['0', '1'])
  .openapi({
    param: {
      name: 'hardDelete',
      in: 'path',
      description: '`1` for hard delete the entity, `0` for soft deletion.',
      required: true,
      schema: { type: 'string', enum: ['0', '1'] },
    },
  })

const ObjectTemplateIdParameterParamsSchema = z
  .xor([ObjectTemplateIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'objectTemplateId',
      in: 'path',
      description: 'UUID or numeric ID of the object template',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/ObjectTemplateId' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const AuthKeyIdParameterParamsSchema = z
  .xor([AuthKeyIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'authKeyId',
      in: 'path',
      description: 'UUID or numeric ID of the auth key',
      required: true,
      schema: {
        oneOf: [{ $ref: '#/components/schemas/AuthKeyId' }, { $ref: '#/components/schemas/UUID' }],
      },
    },
  })

const UserSettingIdParameterParamsSchema = UserSettingIdSchema.openapi({
  param: {
    name: 'userSettingId',
    in: 'path',
    description: 'UUID or numeric ID of the user setting',
    required: true,
    schema: { $ref: '#/components/schemas/UserSettingId' },
  },
})

const UserSettingNameParameterParamsSchema = UserSettingNameSchema.openapi({
  param: {
    name: 'userSettingName',
    in: 'path',
    description: 'Name of the user setting',
    required: true,
    schema: { $ref: '#/components/schemas/UserSettingName' },
  },
})

const TaxonomyIdParameterParamsSchema = TaxonomyIdSchema.openapi({
  param: {
    name: 'taxonomyId',
    in: 'path',
    description: 'Numeric ID of the taxonomy',
    required: true,
    schema: { $ref: '#/components/schemas/TaxonomyId' },
  },
})

const EventReportIdParameterParamsSchema = z
  .xor([EventReportIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'eventReportId',
      in: 'path',
      description: 'UUID or numeric ID of the event report',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/EventReportId' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const AnalystDataIdParameterParamsSchema = z
  .xor([AnalystDataIDSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'analystDataID',
      in: 'path',
      description: 'UUID or numeric ID of the Analyst data',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/AnalystDataID' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const AnalystDataTypeParameterParamsSchema = AnalystDataTypeSchema.openapi({
  param: {
    name: 'analystType',
    in: 'path',
    description: 'Type of the analyst data.',
    required: true,
    schema: { $ref: '#/components/schemas/AnalystDataType' },
  },
})

const AnalystDataObjectUUIDParameterParamsSchema = UUIDSchema.openapi({
  param: {
    name: 'analystObjectUUID',
    in: 'path',
    description: 'Object UUID that has an analyst data',
    required: true,
    schema: { $ref: '#/components/schemas/UUID' },
  },
})

const AnalystDataObjectTypeParameterParamsSchema = AnalystObjectTypeSchema.openapi({
  param: {
    name: 'analystObjectType',
    in: 'path',
    description: 'Object type that has an analyst data',
    required: true,
    schema: { $ref: '#/components/schemas/AnalystObjectType' },
  },
})

const CollectionIdParameterParamsSchema = z
  .xor([CollectionIdSchema, UUIDSchema])
  .openapi({
    param: {
      name: 'collectionId',
      in: 'path',
      description: 'UUID or numeric ID of the collection',
      required: true,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/CollectionId' },
          { $ref: '#/components/schemas/UUID' },
        ],
      },
    },
  })

const IndexMinimalAnalystDataRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          orgc_name: z
            .xor([OrganisationNameSchema, z.array(OrganisationNameSchema)])
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddAttributeRequestRequestBody = {
  content: { 'application/json': { schema: AttributeNoIdSchema } },
  required: true,
}

const AddCollectionRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({ uuid: UUIDSchema.exactOptional() })
        .openapi({ required: [] })
        .and(BaseCollectionSchema),
    },
  },
  required: true,
}

const EditAttributeRequestRequestBody = {
  content: { 'application/json': { schema: AttributeSchema } },
  required: true,
}

const RestSearchAttributesRequestRequestBody = {
  content: { 'application/json': { schema: AttributeRestSearchFilterSchema } },
  required: true,
}

const AddEventRequestRequestBody = {
  content: { 'application/json': { schema: EventNoIdSchema } },
  required: true,
}

const EditEventRequestRequestBody = {
  content: { 'application/json': { schema: EventNoIdSchema } },
  required: true,
}

const SearchCollectionsRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          'Collection.uuid': z.string().max(36).exactOptional().openapi({ example: 'c99506a6-%' }),
          'Collection.type': z.string().exactOptional().openapi({ example: 'campaign%' }),
          'Collection.name': z
            .string()
            .max(191)
            .exactOptional()
            .openapi({ example: 'APT Campaign%' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SearchEventRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          page: PageSearchFilterSchema.exactOptional(),
          limit: LimitSearchFilterSchema.exactOptional(),
          sort: SortSearchFieldSchema.exactOptional(),
          direction: DirectionSearchFieldSchema.exactOptional(),
          minimal: z
            .boolean()
            .nullable()
            .default(false)
            .exactOptional()
            .openapi({
              description:
                'Returns a minimal version of the event, only events with `attributeCount` > 0 will be returned',
            }),
          attribute: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Filter events matching the given string with attributes values',
              example: 'covert channel',
            }),
          eventid: EventIdSchema.exactOptional(),
          datefrom: z.iso
            .date()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Event creation date is greater or equal',
              example: '2021-03-05',
            }),
          dateuntil: z.iso
            .date()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Event creation date is less or equal',
              example: '2021-03-05',
            }),
          org: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Filter events by matching the creator organisation name',
              example: 'CIRCL',
            }),
          eventinfo: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Filter events by matching the event info text',
              example: 'Phishing campaign',
            }),
          tag: TagNameSchema.exactOptional(),
          tags: z
            .array(TagNameSchema)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Filter events by matching *any* of the event tags of a given list of tag names',
              example: ['tlp:amber', 'cycat:scope="exploit"'],
            }),
          distribution: DistributionLevelIdSchema.exactOptional(),
          sharinggroup: SharingGroupIdSchema.exactOptional(),
          analysis: AnalysisLevelIdSchema.exactOptional(),
          threatlevel: ThreatLevelIdSchema.exactOptional(),
          extending: ExtendingRestSearchFlagSchema.exactOptional(),
          extended: ExtendedRestSearchFlagSchema.exactOptional(),
          email: z
            .email()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'Filter events by matching the event creator user email',
              example: 'admin@admin.test',
            }),
          hasproposal: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Filter events by checking if it has attributes with change proposals. Possible values: `0`, `1`',
              example: '1',
            }),
          timestamp: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Event timestamp greater or equal', example: '1' }),
          publish_timestamp: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Event publish timestamp greater or equal', example: '1' }),
          searchDatefrom: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Filters on the date, anything newer than the given date in YYYY-MM-DD format is taken - non-negatable',
              example: '2020-01-20',
            }),
          searchDateuntil: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Filters on the date, anything older than the given date in YYYY-MM-DD format is taken - non-negatable',
              example: '2020-01-20',
            }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const RestSearchEventsRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          page: PageSearchFilterSchema.exactOptional(),
          limit: LimitSearchFilterSchema.exactOptional(),
          value: AttributeValueSchema.exactOptional(),
          type: AttributeTypeSchema.exactOptional(),
          category: AttributeCategorySchema.exactOptional(),
          org: z.xor([OrganisationIdSchema, OrganisationNameSchema]).exactOptional(),
          tags: TagsRestSearchFilterSchema.exactOptional(),
          event_tags: TagsRestSearchFilterSchema.exactOptional(),
          searchall: SearchAllRestSearchFilterSchema.exactOptional(),
          from: DateRestSearchFilterSchema.exactOptional(),
          to: DateRestSearchFilterSchema.exactOptional(),
          last: LastRestSearchFilterSchema.exactOptional(),
          eventid: EventIdSchema.exactOptional(),
          withAttachments: WithAttachmentsRestSearchFilterSchema.exactOptional(),
          sharinggroup: SharingGroupIDRestSearchFilterSchema.exactOptional(),
          metadata: MetadataRestSearchFilterSchema.exactOptional(),
          uuid: UUIDSchema.exactOptional(),
          publish_timestamp: TimestampSchema.exactOptional(),
          timestamp: TimestampSchema.exactOptional(),
          published: PublishedFlagSchema.exactOptional(),
          enforceWarninglist: EnforceWarninglistRestSearchFilterSchema.exactOptional(),
          sgReferenceOnly: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Will only return the sharing group ID' }),
          requested_attributes: RequestedAttributesRestSearchFilterSchema.exactOptional(),
          includeContext: IncludeContextRestSearchFlagSchema.exactOptional(),
          headerless: HeaderlessRestSearchFlagSchema.exactOptional(),
          includeWarninglistHits: IncludeWarninglistHitsRestSearchFlagSchema.exactOptional(),
          attackGalaxy: AttackGalaxyRestSearchFilterSchema.exactOptional(),
          to_ids: ToIDSSchema.exactOptional(),
          deleted: SoftDeletedFlagValuesToIncludeSchema.exactOptional(),
          excludeLocalTags: ExcludeLocalTagsRestSearchFilterSchema.exactOptional(),
          date: DateRestSearchFilterSchema.exactOptional(),
          includeSightingdb: IncludeSightingDbRestSearchFlagSchema.exactOptional(),
          tag: TagNameSchema.exactOptional(),
          object_relation: ObjectRelationRestSearchFilterSchema.exactOptional(),
          threat_level_id: ThreatLevelIdSchema.exactOptional(),
          extending: ExtendingRestSearchFlagSchema.exactOptional(),
          extended: ExtendedRestSearchFlagSchema.exactOptional(),
          returnFormat: EventsRestSearchReturnFormatSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const EnrichEventRequestRequestBody = {
  content: { 'application/json': { schema: EnrichModulesListSchema } },
  required: true,
}

const EnrichAttributeRequestRequestBody = {
  content: { 'application/json': { schema: EnrichModulesListSchema } },
  required: true,
}

const SearchGalaxyRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({ value: GalaxyValueSearchFilterSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const ImportGalaxyClusterRequestRequestBody = {
  content: { 'application/json': { schema: z.array(ImportGalaxyClusterItemSchema) } },
  required: true,
}

const ExportGalaxyClusterRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          Galaxy: z
            .object({
              default: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Include default galaxy clusters (`GalaxyCluster.default = true`). This flag is additive with `custom`. If both are true, both default and custom clusters are included. If neither is true, no clusters are returned.\n',
                }),
              custom: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Include custom galaxy clusters (`GalaxyCluster.default = false`). This flag is additive with `default`. If both are true, both default and custom clusters are included. If neither is true, no clusters are returned.\n',
                }),
              distribution: z
                .xor([DistributionLevelIdSchema, z.array(DistributionLevelIdSchema)])
                .exactOptional()
                .openapi({
                  description:
                    'Filter galaxy clusters by exact distribution level. May be provided as a single distribution ID or as a list of IDs. When a list is provided, clusters matching any of the given distribution levels are returned. This parameter is an exact metadata filter and does not perform access control.\n',
                }),
              format: z
                .enum(['default', 'misp-galaxy'])
                .exactOptional()
                .openapi({
                  description:
                    'Output format of the export. If set to `misp-galaxy`, the result set is returned in the canonical misp-galaxy format.\n',
                }),
              download: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, return the response as a downloadable JSON attachment. If false, return the response body inline.\n',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AttachGalaxyClusterRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          Galaxy: z
            .object({
              target_id: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Target galaxy cluster to attach.', example: 1235 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SearchGalaxyClustersRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          context: z.enum(['all', 'default', 'org', 'deleted']).exactOptional(),
          searchall: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Search galaxy clusters by matching any value, description, uuid or galaxy elements values.',
              example: 'botnet',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddGalaxyClusterRequestRequestBody = {
  content: { 'application/json': { schema: GalaxyClusterSchema } },
}

const EditGalaxyClusterRequestRequestBody = {
  content: { 'application/json': { schema: GalaxyClusterSchema } },
}

const AddUserRequestRequestBody = { content: { 'application/json': { schema: UserNoIdSchema } } }

const EditUserRequestRequestBody = { content: { 'application/json': { schema: UserSchema } } }

const AddOrganisationRequestRequestBody = {
  content: { 'application/json': { schema: OrganisationNoIdSchema } },
}

const EditOrganisationRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: OrganisationNameSchema.exactOptional(),
          type: OrganisationTypeSchema.exactOptional(),
          nationality: z.string().nullable().exactOptional(),
          sector: z.string().nullable().exactOptional(),
          contacts: z.string().nullable().exactOptional(),
          description: z.string().nullable().exactOptional(),
          local: z.boolean().nullable().exactOptional(),
          uuid: z.uuid().nullable().exactOptional(),
          restricted_to_domain: z.array(z.hostname()).nullable().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddServerRequestRequestBody = {
  content: { 'application/json': { schema: ServerNoIdSchema } },
}

const EditServerRequestRequestBody = { content: { 'application/json': { schema: ServerSchema } } }

const EditServerSettingRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          value: z.union([z.string(), z.boolean(), z.number(), z.object({})]).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ImportServerRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: ServerNameSchema.exactOptional(),
          url: z.string().exactOptional().openapi({ example: 'https://misppriv.circl.lu' }),
          uuid: UUIDSchema.exactOptional(),
          authkey: AuthKeyRawSchema.exactOptional(),
          Organisation: z
            .object({ name: OrganisationNameSchema.exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddSharingGroupRequestRequestBody = {
  content: { 'application/json': { schema: SharingGroupNoIdSchema } },
}

const EditSharingGroupRequestRequestBody = {
  content: { 'application/json': { schema: SharingGroupSchema } },
}

const AddSharingGroupBlueprintRequestRequestBody = {
  content: { 'application/json': { schema: SharingGroupBlueprintAddSchema } },
  required: true,
}

const EditSharingGroupBlueprintRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({ SharingGroupBlueprint: SharingGroupBlueprintEditSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const AddFeedRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: FeedNameSchema.exactOptional(),
          provider: FeedProviderSchema.exactOptional(),
          url: FeedUrlSchema.exactOptional(),
          rules: FeedRulesSchema.exactOptional(),
          enabled: FeedEnabledFlagSchema.exactOptional(),
          distribution: DistributionLevelIdSchema.exactOptional(),
          sharing_group_id: SharingGroupIdSchema.exactOptional(),
          tag_id: TagIdSchema.exactOptional(),
          source_format: FeedSourceFormatSchema.exactOptional(),
          fixed_event: FeedFixedEventSchema.exactOptional(),
          delta_merge: FeedDeltaMergeFlagSchema.exactOptional(),
          event_id: EventIdSchema.exactOptional(),
          publish: PublishedFlagSchema.exactOptional(),
          override_ids: FeedOverrideIDSFlagSchema.exactOptional(),
          input_source: FeedInputSourceSchema.exactOptional(),
          delete_local_file: FeedDeleteLocalFileFlagSchema.exactOptional(),
          lookup_visible: FeedLookupVisibleFlagSchema.exactOptional(),
          headers: FeedHeadersSchema.exactOptional(),
          caching_enabled: FeedCachingEnabledFlagSchema.exactOptional(),
          force_to_ids: FeedForceToIDSFlagSchema.exactOptional(),
          orgc_id: OrganisationIdSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const EditFeedRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          id: FeedIdSchema.exactOptional(),
          name: FeedNameSchema.exactOptional(),
          provider: FeedProviderSchema.exactOptional(),
          url: FeedUrlSchema.exactOptional(),
          rules: FeedRulesSchema.exactOptional(),
          enabled: FeedEnabledFlagSchema.exactOptional(),
          distribution: DistributionLevelIdSchema.exactOptional(),
          sharing_group_id: SharingGroupIdSchema.exactOptional(),
          tag_id: TagIdSchema.exactOptional(),
          source_format: FeedSourceFormatSchema.exactOptional(),
          fixed_event: FeedFixedEventSchema.exactOptional(),
          delta_merge: FeedDeltaMergeFlagSchema.exactOptional(),
          event_id: EventIdSchema.exactOptional(),
          publish: PublishedFlagSchema.exactOptional(),
          override_ids: FeedOverrideIDSFlagSchema.exactOptional(),
          input_source: FeedInputSourceSchema.exactOptional(),
          delete_local_file: FeedDeleteLocalFileFlagSchema.exactOptional(),
          lookup_visible: FeedLookupVisibleFlagSchema.exactOptional(),
          headers: FeedHeadersSchema.exactOptional(),
          caching_enabled: FeedCachingEnabledFlagSchema.exactOptional(),
          force_to_ids: FeedForceToIDSFlagSchema.exactOptional(),
          orgc_id: OrganisationIdSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistsSearchRequestRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          value: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'Search term to be used to match warninglists name, description or type.',
            }),
          enabled: z
            .preprocess(
              (val) => (val === 'null' ? null : val),
              z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .nullable(),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistsToggleEnableRequestRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          id: WarninglistsIdFilterSchema.exactOptional(),
          name: WarninglistsNameFilterSchema.exactOptional(),
          enabled: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const WarninglistCheckValuesRequestRequestBody = {
  content: {
    'application/json': { schema: z.array(z.string().openapi({ example: '10.128.0.2' })) },
  },
}

const ToggleEnableNoticelistRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          Noticelist: z
            .object({
              data: z
                .int()
                .exactOptional()
                .openapi({ description: 'Id of the noticelist to enable/disable.', example: 1 }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const RestSearchObjectsRequestRequestBody = {
  content: { 'application/json': { schema: ObjectRestSearchFilterSchema } },
  required: true,
}

const AddObjectRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          Attribute: z
            .array(
              z
                .object({
                  category: AttributeCategorySchema.exactOptional(),
                  value: AttributeValueSchema.exactOptional(),
                  to_ids: ToIDSSchema.exactOptional(),
                  disable_correlation: DisableCorrelationFlagSchema.exactOptional(),
                  distribution: DistributionLevelIdSchema.exactOptional(),
                  comment: AttributeCommentSchema.exactOptional(),
                  object_relation: ObjectRelationSchema.exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddSightingsRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          values: z.array(AttributeValueSchema).exactOptional(),
          timestamp: NullableTimestampSchema.exactOptional(),
          filters: AttributeRestSearchFilterSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddTagRequestRequestBody = { content: { 'application/json': { schema: TagNoIdSchema } } }

const EditTagRequestRequestBody = { content: { 'application/json': { schema: TagNoIdSchema } } }

const GetLogsRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          page: PageSearchFilterSchema.exactOptional(),
          limit: LimitSearchFilterSchema.exactOptional(),
          id: LogIdSchema.exactOptional(),
          title: LogTitleSchema.exactOptional(),
          created: z
            .xor([DateRestSearchFilterSchema, DateIntervalRestSearchFilterSchema])
            .exactOptional(),
          model: ModelNameSchema.exactOptional(),
          model_id: ModelIdSchema.exactOptional(),
          action: LogActionTypeSchema.exactOptional(),
          user_id: UserIdSchema.exactOptional(),
          change: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Text search for log change property',
              example: '%name () => (ORGNAME)%',
            }),
          email: z.email().exactOptional(),
          org: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Text search for log organisation name property',
              example: 'ORG_%',
            }),
          description: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Text search for log change property',
              example: '%updated by User%',
            }),
          ip: z
            .string()
            .exactOptional()
            .openapi({ description: 'Text search for log ip property' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetAuthKeyRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          page: PageSearchFilterSchema.exactOptional(),
          limit: LimitSearchFilterSchema.exactOptional(),
          id: AuthKeyIdSchema.exactOptional(),
          uuid: UUIDSchema.exactOptional(),
          authkey_start: z
            .string()
            .exactOptional()
            .openapi({ description: 'Search term matching the first 4 characters of the authkey' }),
          authkey_end: z
            .string()
            .exactOptional()
            .openapi({ description: 'Search term matching the last 4 characters of the authkey' }),
          created: DateRestSearchFilterSchema.exactOptional(),
          expiration: DateRestSearchFilterSchema.exactOptional(),
          read_only: IsReadOnlySchema.exactOptional(),
          user_id: UserIdSchema.exactOptional(),
          comment: z.string().exactOptional(),
          allowed_ips: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Stringified JSON array of the IP addresses.',
              example: '["127.0.0.1","127.0.0.2"]',
            }),
          last_used: DateRestSearchFilterSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const AddAuthKeyRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          uuid: UUIDSchema.exactOptional(),
          read_only: IsReadOnlySchema.exactOptional(),
          user_id: UserIdSchema.exactOptional(),
          comment: z.string().exactOptional(),
          allowed_ips: z
            .array(z.string().openapi({ description: 'IP address', example: '127.0.0.1' }))
            .nullable()
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const EditAuthKeyRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          read_only: IsReadOnlySchema.exactOptional(),
          comment: z.string().exactOptional(),
          allowed_ips: z
            .array(z.string().openapi({ description: 'IP address', example: '127.0.0.1' }))
            .nullable()
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const GetUserSettingRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          id: UserSettingIdSchema.exactOptional(),
          setting: UserSettingNameSchema.exactOptional(),
          user_id: UserIdSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const SetUserSettingRequestRequestBody = {
  content: {
    'application/json': {
      schema: z.union([
        DashboardUserSettingSchema,
        PublishAlertFilterUserSettingSchema,
        DashboardAccessUserSettingSchema,
        HomepageUserSettingSchema,
        DefaultRestSearchParametersUserSettingSchema,
        TagNumericalValueOverrideUserSettingSchema,
        EventIndexHideColumnsUserSettingSchema,
      ]),
    },
  },
}

const AddEventReportRequestRequestBody = {
  content: { 'application/json': { schema: EventReportNoIdSchema } },
  required: true,
}

const ImportFromURLEventReportRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          url: z
            .string()
            .exactOptional()
            .openapi({ example: 'https://domain.example/blogpost/123.pdf' }),
        })
        .openapi({ required: [] }),
    },
  },
  required: true,
}

const AddAnalystDataRequestRequestBody = {
  content: {
    'application/json': {
      schema: z.xor([AnalystNoteSchema, AnalystOpinionSchema, AnalystRelationshipSchema]),
    },
  },
  required: true,
}

const ApiKeyAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization',
  description:
    'The authentication of the automation is performed via a secure key available in the MISP UI interface. \nMake sure you keep that key secret as it gives access to the entire database! The [API](https://www.circl.lu/doc/misp/GLOSSARY.html#api) \nkey is available in the event actions menu under automation.\n\nThe authorization is performed by using the following header in the API requests:\n\n    Authorization: YOUR_API_KEY\n    \n> **NOTE**: Since version 2.2 the usage of the authentication key in the URL is deprecated. \n  Instead, pass the auth key in an Authorization header in the request. The legacy option of having the auth key \n  in the URL is temporarily still supported but not recommended.\n',
}

export const postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRoute = createRoute({
  method: 'post',
  path: '/analystData/add/{analystType}/{analystObjectUUID}/{analystObjectType}',
  tags: ['Analyst Data'],
  summary: 'Add analyst data',
  operationId: 'addAnalystData',
  request: {
    params: z.object({
      analystType: AnalystDataTypeParameterParamsSchema,
      analystObjectUUID: AnalystDataObjectUUIDParameterParamsSchema,
      analystObjectType: AnalystDataObjectTypeParameterParamsSchema,
    }),
    body: AddAnalystDataRequestRequestBody,
  },
  responses: {
    200: AnalystDataResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAnalystDataEditAnalystTypeAnalystDataIDRoute = createRoute({
  method: 'post',
  path: '/analystData/edit/{analystType}/{analystDataID}',
  tags: ['Analyst Data'],
  summary: 'Edit analyst data',
  operationId: 'editAnalystData',
  request: {
    params: z.object({
      analystType: AnalystDataTypeParameterParamsSchema,
      analystDataID: AnalystDataIdParameterParamsSchema,
    }),
    body: AddAnalystDataRequestRequestBody,
  },
  responses: {
    200: AnalystDataResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteAnalystDataDeleteAnalystTypeAnalystDataIDRoute = createRoute({
  method: 'delete',
  path: '/analystData/delete/{analystType}/{analystDataID}',
  tags: ['Analyst Data'],
  summary: 'Delete Analyst data',
  operationId: 'deleteAnalystData',
  request: {
    params: z.object({
      analystType: AnalystDataTypeParameterParamsSchema,
      analystDataID: AnalystDataIdParameterParamsSchema,
    }),
  },
  responses: {
    200: DeleteAnalystDataResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAnalystDataIndexAnalystTypeRoute = createRoute({
  method: 'get',
  path: '/analystData/index/{analystType}',
  tags: ['Analyst Data'],
  summary: 'List Analyst data',
  operationId: 'indexAnalystData',
  request: { params: z.object({ analystType: AnalystDataTypeParameterParamsSchema }) },
  responses: {
    200: AnalystDataListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAnalystDataViewAnalystTypeAnalystDataIDRoute = createRoute({
  method: 'get',
  path: '/analystData/view/{analystType}/{analystDataID}',
  tags: ['Analyst Data'],
  summary: 'Get Analyst Data by ID',
  operationId: 'getAnalystDataById',
  request: {
    params: z.object({
      analystType: AnalystDataTypeParameterParamsSchema,
      analystDataID: AnalystDataIdParameterParamsSchema,
    }),
  },
  responses: {
    200: AnalystDataResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAnalystDataIndexMinimalRoute = createRoute({
  method: 'post',
  path: '/analystData/indexMinimal',
  tags: ['Analyst Data'],
  summary: 'List minimal Analyst data',
  operationId: 'indexMinimalAnalystData',
  request: { body: IndexMinimalAnalystDataRequestRequestBody },
  responses: {
    200: MinimalAnalystDataResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAttributesRestSearchRoute = createRoute({
  method: 'post',
  path: '/attributes/restSearch',
  tags: ['Attributes'],
  summary: '[restSearch] Get a filtered and paginated list of attributes',
  description: '**This is the recommended endpoint for searching attributes.**\n',
  operationId: 'restSearchAttributes',
  request: { body: RestSearchAttributesRequestRequestBody },
  responses: {
    200: AttributesRestSearchResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAttributesAddEventIdRoute = createRoute({
  method: 'post',
  path: '/attributes/add/{eventId}',
  tags: ['Attributes'],
  summary: 'Add an attribute',
  operationId: 'addAttribute',
  request: {
    params: z.object({ eventId: EventIdParameterParamsSchema }),
    body: AddAttributeRequestRequestBody,
  },
  responses: {
    200: AttributeResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putAttributesEditAttributeIdRoute = createRoute({
  method: 'put',
  path: '/attributes/edit/{attributeId}',
  tags: ['Attributes'],
  summary: 'Edit an attribute',
  operationId: 'editAttribute',
  request: {
    params: z.object({ attributeId: AttributeIdParameterParamsSchema }),
    body: EditAttributeRequestRequestBody,
  },
  responses: {
    200: AttributeResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteAttributesDeleteAttributeIdRoute = createRoute({
  method: 'delete',
  path: '/attributes/delete/{attributeId}',
  tags: ['Attributes'],
  summary: 'Delete an attribute',
  operationId: 'deleteAttribute',
  request: { params: z.object({ attributeId: AttributeIdParameterParamsSchema }) },
  responses: {
    200: DeleteAttributeResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAttributesRestoreAttributeIdRoute = createRoute({
  method: 'post',
  path: '/attributes/restore/{attributeId}',
  tags: ['Attributes'],
  summary: 'Restore an attribute',
  operationId: 'restoreAttribute',
  request: { params: z.object({ attributeId: AttributeIdParameterParamsSchema }) },
  responses: {
    200: AttributeResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAttributesAddTagAttributeIdTagIdLocalLocalRoute = createRoute({
  method: 'post',
  path: '/attributes/addTag/{attributeId}/{tagId}/local:{local}',
  tags: ['Attributes'],
  summary: 'Add tag(s) to attribute(s)',
  description: 'Add one or multiple tags to one or multiple attributes',
  operationId: 'tagAttribute',
  request: {
    params: z.object({
      attributeId: z
        .string()
        .openapi({
          param: {
            name: 'attributeId',
            in: 'path',
            description: "Attribute ID or 'selected' to add tags to multiple attributes",
            required: true,
            schema: { type: 'string' },
          },
        }),
      tagId: z
        .string()
        .openapi({
          param: {
            name: 'tagId',
            in: 'path',
            description: 'Tag ID, tag name or tag collection ID (format collection_N)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      local: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .openapi({
          param: {
            name: 'local',
            in: 'path',
            description:
              'Whether to add tag as local tag (1) or global tag (0). Leave the other path params empty if you want to add local tags using the json request body params',
            required: true,
            schema: { type: 'integer', enum: [0, 1], default: 0 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attribute: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Attribute ID when path param id is not set',
                  example: '12',
                }),
              attribute_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description: "JSON encoded array of attribute IDs when id is 'selected'",
                  example: '["1","2"]',
                }),
              tag: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Tag ID/name or tag collection ID (format collection_N) when path param 'tagId' is not specified. This can also be a JSON encoded array of IDs/names and tag collection IDs to add multiple tags at once. Required if path param 'tagId' is not set",
                  example: '["tag","1","collection_1"]',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: AddAttributeTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAttributesRemoveTagAttributeIdTagIdRoute = createRoute({
  method: 'post',
  path: '/attributes/removeTag/{attributeId}/{tagId}',
  tags: ['Attributes'],
  summary: 'Remove a tag from an attribute',
  operationId: 'untagAttribute',
  request: {
    params: z.object({
      attributeId: AttributeIdParameterParamsSchema,
      tagId: TagIdParameterParamsSchema,
    }),
  },
  responses: {
    200: RemoveAttributeTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAttributesRoute = createRoute({
  method: 'get',
  path: '/attributes',
  tags: ['Attributes'],
  summary: 'Get a list of attributes',
  operationId: 'getAttributes',
  responses: {
    200: AttributeListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAttributesViewAttributeIdRoute = createRoute({
  method: 'get',
  path: '/attributes/view/{attributeId}',
  tags: ['Attributes'],
  summary: 'Get an attribute by ID',
  operationId: 'getAttributeById',
  request: { params: z.object({ attributeId: AttributeIdParameterParamsSchema }) },
  responses: {
    200: AttributeResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAttributesGetAttributeByB64ValueBase64ValueRoute = createRoute({
  method: 'get',
  path: '/attributes/getAttributeByB64Value/{base64Value}',
  tags: ['Attributes'],
  summary: 'Get attribute(s) by value',
  description:
    'Search for attributes by their value and return full attribute details including ID.\nThis endpoint allows efficient lookup of attributes directly in the database using indexed columns.\nThe attribute value must be base64 encoded in the URL path.\n\n**Example usage:**\n```bash\n# Encode the attribute value to base64\nVALUE="192.168.1.1"\nBASE64=$(echo -n "$VALUE" | base64 -w0)\n\n# Query the API\ncurl -H "Authorization: YOUR_API_KEY" \\\n     -H "Accept: application/json" \\\n     "https://misp.local/attributes/getid/${BASE64}"\n```\n',
  operationId: 'getAttributeByB64Value',
  request: {
    params: z.object({
      base64Value: z
        .string()
        .openapi({
          param: {
            name: 'base64Value',
            in: 'path',
            description:
              "Base64 encoded attribute value to search for (use `echo -n 'value' | base64 -w0`)",
            required: true,
            schema: { type: 'string', format: 'byte', example: 'MTkyLjE2OC4xLjE=' },
          },
          example: 'MTkyLjE2OC4xLjE=',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of matching attributes',
      content: { 'application/json': { schema: z.array(AttributeSchema) } },
    },
    403: UnauthorizedApiErrorResponseResponse,
    404: {
      description: 'Attribute not found or invalid base64 encoding',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    405: {
      description: 'Method not allowed - this endpoint is API only',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    default: ApiErrorResponseResponse,
  },
})

export const getAttributesAttributeStatisticsContextPercentageRoute = createRoute({
  method: 'get',
  path: '/attributes/attributeStatistics/{context}/{percentage}',
  tags: ['Attributes'],
  summary: 'Get the count of attributes per category',
  operationId: 'getAttributeStatistics',
  request: {
    params: z.object({
      context: AttributeStatisticsContextParameterParamsSchema,
      percentage: AttributeStatisticsPercentageParameterParamsSchema,
    }),
  },
  responses: {
    200: AttributeStatisticsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAttributesDescribeTypesRoute = createRoute({
  method: 'get',
  path: '/attributes/describeTypes',
  tags: ['Attributes'],
  summary: 'Get a list of the available attribute types',
  operationId: 'describeAttributeTypes',
  responses: {
    200: DescribeAttributeTypesResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAttributesEnrichAttributeIdRoute = createRoute({
  method: 'post',
  path: '/attributes/enrich/{attributeId}',
  tags: ['Attributes'],
  summary: 'Enrich an attribute with the given modules',
  operationId: 'enrichAttribute',
  request: {
    params: z.object({ attributeId: AttributeIdParameterParamsSchema }),
    body: EnrichAttributeRequestRequestBody,
  },
  responses: {
    200: EnrichAttributeResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postCollectionsAddRoute = createRoute({
  method: 'post',
  path: '/collections/add',
  tags: ['Collections'],
  summary: 'Add a collection',
  operationId: 'addCollection',
  request: { body: AddCollectionRequestRequestBody },
  responses: {
    200: AddCollectionResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postCollectionsEditCollectionIdRoute = createRoute({
  method: 'post',
  path: '/collections/edit/{collectionId}',
  tags: ['Collections'],
  summary: 'Edit a collection',
  operationId: 'editCollection',
  request: {
    params: z.object({ collectionId: CollectionIdParameterParamsSchema }),
    body: { content: { 'application/json': { schema: BaseCollectionSchema } }, required: true },
  },
  responses: {
    200: EditCollectionResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteCollectionsDeleteCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/collections/delete/{collectionId}',
  tags: ['Collections'],
  summary: 'Delete a collection',
  operationId: 'deleteCollection',
  request: { params: z.object({ collectionId: CollectionIdParameterParamsSchema }) },
  responses: {
    200: DeleteCollectionResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getCollectionsViewCollectionIdRoute = createRoute({
  method: 'get',
  path: '/collections/view/{collectionId}',
  tags: ['Collections'],
  summary: 'View a collection by ID',
  operationId: 'getCollectionById',
  request: { params: z.object({ collectionId: CollectionIdParameterParamsSchema }) },
  responses: {
    200: ViewCollectionResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postCollectionsIndexFilterRoute = createRoute({
  method: 'post',
  path: '/collections/index/{filter}',
  tags: ['Collections'],
  summary: 'Get a list of collections with optional filtering',
  operationId: 'getCollections',
  request: {
    params: z.object({
      filter: z
        .enum(['my_collections', 'org_collections'])
        .openapi({
          param: {
            name: 'filter',
            in: 'path',
            description: 'Optional filter for collections',
            required: true,
            schema: { type: 'string', enum: ['my_collections', 'org_collections'] },
          },
        }),
    }),
    body: SearchCollectionsRequestRequestBody,
  },
  responses: {
    200: CollectionListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getEventReportsViewEventReportIdRoute = createRoute({
  method: 'get',
  path: '/eventReports/view/{eventReportId}',
  tags: ['Event Report'],
  summary: 'Get event report by ID',
  operationId: 'viewEventReport',
  request: { params: z.object({ eventReportId: EventReportIdParameterParamsSchema }) },
  responses: {
    200: EventReportResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventReportsAddEventIdRoute = createRoute({
  method: 'post',
  path: '/eventReports/add/{eventId}',
  tags: ['Event Report'],
  summary: 'Add Event Report',
  operationId: 'addEventReport',
  request: {
    params: z.object({ eventId: EventIdParameterParamsSchema }),
    body: AddEventReportRequestRequestBody,
  },
  responses: {
    200: EventReportResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventReportsEditEventReportIdRoute = createRoute({
  method: 'post',
  path: '/eventReports/edit/{eventReportId}',
  tags: ['Event Report'],
  summary: 'Edit Event Report',
  operationId: 'editEventReport',
  request: { params: z.object({ eventReportId: EventReportIdParameterParamsSchema }) },
  responses: {
    200: EventReportResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventReportsDeleteEventReportIdRoute = createRoute({
  method: 'post',
  path: '/eventReports/delete/{eventReportId}',
  tags: ['Event Report'],
  summary: 'Delete Event Report',
  operationId: 'deleteEventReport',
  request: { params: z.object({ eventReportId: EventReportIdParameterParamsSchema }) },
  responses: {
    200: DeleteEventReportResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventReportsDeleteEventReportIdHardDeleteRoute = createRoute({
  method: 'post',
  path: '/eventReports/delete/{eventReportId}/{hardDelete}',
  tags: ['Event Report'],
  summary: 'Hard Delete Event Report',
  operationId: 'hardDeleteEventReport',
  request: {
    params: z.object({
      eventReportId: EventReportIdParameterParamsSchema,
      hardDelete: HardDeleteParameterParamsSchema,
    }),
  },
  responses: {
    200: DeleteEventReportResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventReportsRestoreEventReportIdRoute = createRoute({
  method: 'post',
  path: '/eventReports/restore/{eventReportId}',
  tags: ['Event Report'],
  summary: 'Restore Event Report',
  operationId: 'restoreEventReport',
  request: { params: z.object({ eventReportId: EventReportIdParameterParamsSchema }) },
  responses: {
    200: RestoreEventReportResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getEventReportsIndexRoute = createRoute({
  method: 'get',
  path: '/eventReports/index',
  tags: ['Event Report'],
  summary: 'Get event reports',
  operationId: 'indexEventReport',
  responses: {
    200: EventReportListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventReportsImportReportFromUrlEventIdRoute = createRoute({
  method: 'post',
  path: '/eventReports/importReportFromUrl/{eventId}',
  tags: ['Event Report'],
  summary: 'Import Report From URL',
  operationId: 'importFromURLEventReport',
  request: {
    params: z.object({ eventId: EventIdParameterParamsSchema }),
    body: ImportFromURLEventReportRequestRequestBody,
  },
  responses: {
    200: EventReportImportFromUrlResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsRestSearchRoute = createRoute({
  method: 'post',
  path: '/events/restSearch',
  tags: ['Events'],
  summary: '[restSearch] Get a filtered and paginated list of events',
  description: '**This is the recommended endpoint for searching events.**\n',
  operationId: 'restSearchEvents',
  request: { body: RestSearchEventsRequestRequestBody },
  responses: {
    200: EventsRestSearchResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsAddRoute = createRoute({
  method: 'post',
  path: '/events/add',
  tags: ['Events'],
  summary: 'Add event',
  operationId: 'addEvent',
  request: { body: AddEventRequestRequestBody },
  responses: {
    200: AddEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putEventsEditEventIdRoute = createRoute({
  method: 'put',
  path: '/events/edit/{eventId}',
  tags: ['Events'],
  summary: 'Edit event',
  operationId: 'editEvent',
  request: {
    params: z.object({ eventId: EventIdParameterParamsSchema }),
    body: EditEventRequestRequestBody,
  },
  responses: {
    200: EditEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteEventsDeleteEventIdRoute = createRoute({
  method: 'delete',
  path: '/events/delete/{eventId}',
  tags: ['Events'],
  summary: 'Delete event',
  operationId: 'deleteEvent',
  request: { params: z.object({ eventId: EventIdParameterParamsSchema }) },
  responses: {
    200: DeleteEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'Get a list of events',
  operationId: 'getEvents',
  responses: {
    200: ExtendedEventListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsIndexRoute = createRoute({
  method: 'post',
  path: '/events/index',
  tags: ['Events'],
  summary: 'Search events',
  operationId: 'searchEvents',
  request: { body: SearchEventRequestRequestBody },
  responses: {
    200: ExtendedEventListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getEventsViewEventIdRoute = createRoute({
  method: 'get',
  path: '/events/view/{eventId}',
  tags: ['Events'],
  summary: 'Get event by ID',
  operationId: 'getEventById',
  request: { params: z.object({ eventId: EventIdParameterParamsSchema }) },
  responses: {
    200: ExtendedEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsPublishEventIdRoute = createRoute({
  method: 'post',
  path: '/events/publish/{eventId}',
  tags: ['Events'],
  summary: 'Publish an event',
  operationId: 'publishEvent',
  request: { params: z.object({ eventId: EventIdParameterParamsSchema }) },
  responses: {
    200: PublishEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsUnpublishEventIdRoute = createRoute({
  method: 'post',
  path: '/events/unpublish/{eventId}',
  tags: ['Events'],
  summary: 'Unpublish an event',
  operationId: 'unpublishEvent',
  request: { params: z.object({ eventId: EventIdParameterParamsSchema }) },
  responses: {
    200: UnpublishEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsAddTagEventIdTagIdLocalLocalRoute = createRoute({
  method: 'post',
  path: '/events/addTag/{eventId}/{tagId}/local:{local}',
  tags: ['Events'],
  summary: 'Add event tag',
  operationId: 'tagEvent',
  request: {
    params: z.object({
      eventId: EventIdParameterParamsSchema,
      tagId: TagIdParameterParamsSchema,
      local: LocalParameterParamsSchema,
    }),
  },
  responses: {
    200: AddEventTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsRemoveTagEventIdTagIdRoute = createRoute({
  method: 'post',
  path: '/events/removeTag/{eventId}/{tagId}',
  tags: ['Events'],
  summary: 'Remove event tag',
  operationId: 'untagEvent',
  request: {
    params: z.object({ eventId: EventIdParameterParamsSchema, tagId: TagIdParameterParamsSchema }),
  },
  responses: {
    200: RemoveEventTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postEventsEnrichEventEventIdRoute = createRoute({
  method: 'post',
  path: '/events/enrichEvent/{eventId}',
  tags: ['Events'],
  summary: 'Enrich an event with the given modules',
  operationId: 'enrichEvent',
  request: {
    params: z.object({ eventId: EventIdParameterParamsSchema }),
    body: EnrichEventRequestRequestBody,
  },
  responses: {
    200: EnrichEventResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getGalaxiesRoute = createRoute({
  method: 'get',
  path: '/galaxies',
  tags: ['Galaxies'],
  summary: 'Get galaxies',
  operationId: 'getGalaxies',
  responses: {
    200: GalaxyListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxiesRoute = createRoute({
  method: 'post',
  path: '/galaxies',
  tags: ['Galaxies'],
  summary: 'Search galaxies',
  operationId: 'searchGalaxies',
  request: { body: SearchGalaxyRequestRequestBody },
  responses: {
    200: GalaxyListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getGalaxiesViewGalaxyIdRoute = createRoute({
  method: 'get',
  path: '/galaxies/view/{galaxyId}',
  tags: ['Galaxies'],
  summary: 'Get galaxy by ID',
  operationId: 'getGalaxyById',
  request: { params: z.object({ galaxyId: GalaxyIdParameterParamsSchema }) },
  responses: {
    200: ExtendedGalaxyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxiesUpdateRoute = createRoute({
  method: 'post',
  path: '/galaxies/update',
  tags: ['Galaxies'],
  summary: 'Force update the galaxies with the galaxy json definitions',
  operationId: 'updateGalaxies',
  responses: {
    200: UpdateGalaxiesResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteGalaxiesDeleteGalaxyIdRoute = createRoute({
  method: 'delete',
  path: '/galaxies/delete/{galaxyId}',
  tags: ['Galaxies'],
  summary: 'Delete a galaxy',
  operationId: 'deleteGalaxy',
  request: { params: z.object({ galaxyId: GalaxyIdParameterParamsSchema }) },
  responses: {
    200: DeleteGalaxyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxiesImportRoute = createRoute({
  method: 'post',
  path: '/galaxies/import',
  tags: ['Galaxies'],
  summary: 'Import a galaxy cluster',
  operationId: 'importGalaxyCluster',
  request: { body: ImportGalaxyClusterRequestRequestBody },
  responses: {
    200: ImportGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxiesExportGalaxyIdRoute = createRoute({
  method: 'post',
  path: '/galaxies/export/{galaxyId}',
  tags: ['Galaxies'],
  summary: 'Export galaxy clusters',
  operationId: 'exportGalaxyClusters',
  request: {
    params: z.object({ galaxyId: GalaxyIdParameterParamsSchema }),
    body: ExportGalaxyClusterRequestRequestBody,
  },
  responses: {
    200: ExportGalaxyClustersResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute = createRoute({
  method: 'post',
  path: '/galaxies/attachCluster/{attachTargetId}/{attachTargetType}/local:{local}',
  tags: ['Galaxies'],
  summary: 'Attach the galaxy cluster tag a given entity',
  operationId: 'attachGalaxyCluster',
  request: {
    params: z.object({
      attachTargetId: AttachTargetIdParameterParamsSchema,
      attachTargetType: AttachTargetTypeParameterParamsSchema,
      local: LocalParameterParamsSchema,
    }),
    body: AttachGalaxyClusterRequestRequestBody,
  },
  responses: {
    200: AttachGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxyClustersAddGalaxyIdRoute = createRoute({
  method: 'post',
  path: '/galaxy_clusters/add/{galaxyId}',
  tags: ['Galaxy Clusters'],
  summary: 'Add galaxy cluster',
  operationId: 'addGalaxyCluster',
  request: {
    params: z.object({ galaxyId: GalaxyIdParameterParamsSchema }),
    body: AddGalaxyClusterRequestRequestBody,
  },
  responses: {
    200: GalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putGalaxyClustersEditGalaxyClusterIdRoute = createRoute({
  method: 'put',
  path: '/galaxy_clusters/edit/{galaxyClusterId}',
  tags: ['Galaxy Clusters'],
  summary: 'Edit galaxy cluster',
  operationId: 'editGalaxyCluster',
  request: {
    params: z.object({ galaxyClusterId: GalaxyClusterIdParameterParamsSchema }),
    body: EditGalaxyClusterRequestRequestBody,
  },
  responses: {
    200: GalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getGalaxyClustersIndexGalaxyIdRoute = createRoute({
  method: 'get',
  path: '/galaxy_clusters/index/{galaxyId}',
  tags: ['Galaxy Clusters'],
  summary: 'Get galaxy clusters',
  operationId: 'getGalaxyClusters',
  request: { params: z.object({ galaxyId: GalaxyIdParameterParamsSchema }) },
  responses: {
    200: GalaxyClusterListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxyClustersIndexGalaxyIdRoute = createRoute({
  method: 'post',
  path: '/galaxy_clusters/index/{galaxyId}',
  tags: ['Galaxy Clusters'],
  summary: 'Search galaxy clusters',
  operationId: 'searchGalaxyClusters',
  request: {
    params: z.object({ galaxyId: GalaxyIdParameterParamsSchema }),
    body: SearchGalaxyClustersRequestRequestBody,
  },
  responses: {
    200: GalaxyClusterListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getGalaxyClustersViewGalaxyClusterIdRoute = createRoute({
  method: 'get',
  path: '/galaxy_clusters/view/{galaxyClusterId}',
  tags: ['Galaxy Clusters'],
  summary: 'Get galaxy cluster by ID',
  operationId: 'getGalaxyClusterById',
  request: { params: z.object({ galaxyClusterId: GalaxyClusterIdParameterParamsSchema }) },
  responses: {
    200: ExtendedGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxyClustersPublishGalaxyClusterIdRoute = createRoute({
  method: 'post',
  path: '/galaxy_clusters/publish/{galaxyClusterId}',
  tags: ['Galaxy Clusters'],
  summary: 'Publish galaxy cluster',
  operationId: 'publishGalaxyCluster',
  request: { params: z.object({ galaxyClusterId: GalaxyClusterIdParameterParamsSchema }) },
  responses: {
    200: PublishGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxyClustersUnpublishGalaxyClusterIdRoute = createRoute({
  method: 'post',
  path: '/galaxy_clusters/unpublish/{galaxyClusterId}',
  tags: ['Galaxy Clusters'],
  summary: 'Unpublish galaxy cluster',
  operationId: 'unpublishGalaxyCluster',
  request: { params: z.object({ galaxyClusterId: GalaxyClusterIdParameterParamsSchema }) },
  responses: {
    200: UnpublishGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxyClustersDeleteGalaxyClusterIdRoute = createRoute({
  method: 'post',
  path: '/galaxy_clusters/delete/{galaxyClusterId}',
  tags: ['Galaxy Clusters'],
  summary: 'Delete galaxy cluster',
  operationId: 'deleteGalaxyCluster',
  request: { params: z.object({ galaxyClusterId: GalaxyClusterIdParameterParamsSchema }) },
  responses: {
    200: DeleteGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postGalaxyClustersRestoreGalaxyClusterIdRoute = createRoute({
  method: 'post',
  path: '/galaxy_clusters/restore/{galaxyClusterId}',
  tags: ['Galaxy Clusters'],
  summary: 'Restore galaxy cluster',
  operationId: 'restoreGalaxyCluster',
  request: { params: z.object({ galaxyClusterId: GalaxyClusterIdParameterParamsSchema }) },
  responses: {
    200: RestoreGalaxyClusterResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postUsersInitiatePasswordResetUserIdFirstTimeResetRoute = createRoute({
  method: 'post',
  path: '/users/initiatePasswordReset/{userId}/{firstTimeReset}',
  tags: ['Users'],
  summary: 'Reset user password',
  operationId: 'resetUserPassword',
  request: {
    params: z.object({
      userId: UserIdParameterParamsSchema,
      firstTimeReset: FirstTimeResetParameterParamsSchema,
    }),
  },
  responses: {
    200: ResetUserPasswordResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAdminUsersAddRoute = createRoute({
  method: 'post',
  path: '/admin/users/add',
  tags: ['Users'],
  summary: 'Add user',
  operationId: 'addUser',
  request: { body: AddUserRequestRequestBody },
  responses: {
    200: UserResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putAdminUsersEditUserIdRoute = createRoute({
  method: 'put',
  path: '/admin/users/edit/{userId}',
  tags: ['Users'],
  summary: 'Edit user',
  operationId: 'editUser',
  request: {
    params: z.object({ userId: UserIdParameterParamsSchema }),
    body: EditUserRequestRequestBody,
  },
  responses: {
    200: UserResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteAdminUsersDeleteUserIdRoute = createRoute({
  method: 'delete',
  path: '/admin/users/delete/{userId}',
  tags: ['Users'],
  summary: 'Delete user',
  operationId: 'deleteUser',
  request: { params: z.object({ userId: UserIdParameterParamsSchema }) },
  responses: {
    200: DeleteUserResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAdminUsersRoute = createRoute({
  method: 'get',
  path: '/admin/users',
  tags: ['Users'],
  summary: 'Get users',
  operationId: 'getUsers',
  responses: {
    200: UserListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAdminUsersViewUserIdRoute = createRoute({
  method: 'get',
  path: '/admin/users/view/{userId}',
  tags: ['Users'],
  summary: 'Get user by ID',
  operationId: 'getUserById',
  request: { params: z.object({ userId: UserIdParameterParamsSchema }) },
  responses: {
    200: ExtendedUserResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteUsersTotpDeleteUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/totp_delete/{userId}',
  tags: ['Users'],
  summary: 'Delete user TOTP',
  operationId: 'deleteUserTotp',
  request: { params: z.object({ userId: UserIdParameterParamsSchema }) },
  responses: {
    200: DeleteUserTotpResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundUserTotpDeleteResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAdminOrganisationsAddRoute = createRoute({
  method: 'post',
  path: '/admin/organisations/add',
  tags: ['Organisations'],
  summary: 'Add organisation',
  operationId: 'addOrganisation',
  request: { body: AddOrganisationRequestRequestBody },
  responses: {
    200: OrganisationResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putAdminOrganisationsEditOrganisationIdRoute = createRoute({
  method: 'put',
  path: '/admin/organisations/edit/{organisationId}',
  tags: ['Organisations'],
  summary: 'Edit organisation',
  operationId: 'editOrganisation',
  request: {
    params: z.object({ organisationId: OrganisationIdParameterParamsSchema }),
    body: EditOrganisationRequestRequestBody,
  },
  responses: {
    200: OrganisationResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteAdminOrganisationsDeleteOrganisationIdRoute = createRoute({
  method: 'delete',
  path: '/admin/organisations/delete/{organisationId}',
  tags: ['Organisations'],
  summary: 'Delete organisation',
  operationId: 'deleteOrganisation',
  request: { params: z.object({ organisationId: OrganisationIdParameterParamsSchema }) },
  responses: {
    200: DeleteOrganisationResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAdminLogsRoute = createRoute({
  method: 'post',
  path: '/admin/logs',
  tags: ['Logs'],
  summary: 'Get instance logs',
  operationId: 'getLogs',
  request: { body: GetLogsRequestRequestBody },
  responses: {
    200: GetLogsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getOrganisationsRoute = createRoute({
  method: 'get',
  path: '/organisations',
  tags: ['Organisations'],
  summary: 'Get organisations',
  operationId: 'getOrganisations',
  responses: {
    200: OrganisationListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getOrganisationsViewOrganisationIdRoute = createRoute({
  method: 'get',
  path: '/organisations/view/{organisationId}',
  tags: ['Organisations'],
  summary: 'Get organisation by ID',
  operationId: 'getOrganisationById',
  request: { params: z.object({ organisationId: OrganisationIdParameterParamsSchema }) },
  responses: {
    200: OrganisationResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersAddRoute = createRoute({
  method: 'post',
  path: '/servers/add',
  tags: ['Servers'],
  summary: 'Add server',
  operationId: 'addServer',
  request: { body: AddServerRequestRequestBody },
  responses: {
    200: ServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putServersEditServerIdRoute = createRoute({
  method: 'put',
  path: '/servers/edit/{serverId}',
  tags: ['Servers'],
  summary: 'Edit server',
  operationId: 'editServer',
  request: {
    params: z.object({ serverId: ServerIdParameterParamsSchema }),
    body: EditServerRequestRequestBody,
  },
  responses: {
    200: ServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersDeleteServerIdRoute = createRoute({
  method: 'post',
  path: '/servers/delete/{serverId}',
  tags: ['Servers'],
  summary: 'Delete server',
  operationId: 'deleteServer',
  request: { params: z.object({ serverId: ServerIdParameterParamsSchema }) },
  responses: {
    200: DeleteServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersRoute = createRoute({
  method: 'get',
  path: '/servers',
  tags: ['Servers'],
  summary: 'Get servers',
  operationId: 'getServers',
  responses: {
    200: ServerListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersPullServerIdPullTechniqueRoute = createRoute({
  method: 'get',
  path: '/servers/pull/{serverId}/{pullTechnique}',
  tags: ['Servers'],
  summary: 'Pull server',
  operationId: 'pullServer',
  request: {
    params: z.object({
      serverId: ServerIdParameterParamsSchema,
      pullTechnique: PullTechniqueParameterParamsSchema,
    }),
  },
  responses: {
    200: PullServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersPushServerIdPushTechniqueRoute = createRoute({
  method: 'get',
  path: '/servers/push/{serverId}/{pushTechnique}',
  tags: ['Servers'],
  summary: 'Push server',
  operationId: 'pushServer',
  request: {
    params: z.object({
      serverId: ServerIdParameterParamsSchema,
      pushTechnique: PushTechniqueParameterParamsSchema,
    }),
  },
  responses: {
    200: PushServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersGetVersionRoute = createRoute({
  method: 'get',
  path: '/servers/getVersion',
  tags: ['Servers'],
  summary: 'Get current instance version',
  operationId: 'getServerVersion',
  responses: {
    200: ServerVersionResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersGetPyMISPVersionRoute = createRoute({
  method: 'get',
  path: '/servers/getPyMISPVersion',
  tags: ['Servers'],
  summary: 'Get current instance PyMISP version',
  operationId: 'getPyMISPVersion',
  responses: {
    200: ServerPyMISPVersionResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersServerSettingsRoute = createRoute({
  method: 'get',
  path: '/servers/serverSettings',
  tags: ['Servers'],
  summary: 'Get current instance settings and diagnostics',
  operationId: 'getServerSettings',
  responses: {
    200: ServerSettingsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersGetWorkersRoute = createRoute({
  method: 'get',
  path: '/servers/getWorkers',
  tags: ['Servers'],
  summary: 'Get workers',
  operationId: 'getWorkers',
  responses: {
    200: GetWorkersResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersStartWorkerWorkerTypeRoute = createRoute({
  method: 'post',
  path: '/servers/startWorker/{workerType}',
  tags: ['Servers'],
  summary: 'Start worker',
  operationId: 'startWorker',
  request: { params: z.object({ workerType: WorkerTypeParameterParamsSchema }) },
  responses: {
    200: StartWorkerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersStopWorkerWorkerPidRoute = createRoute({
  method: 'post',
  path: '/servers/stopWorker/{workerPid}',
  tags: ['Servers'],
  summary: 'Stop worker',
  operationId: 'stopWorker',
  request: { params: z.object({ workerPid: WorkerPidParameterParamsSchema }) },
  responses: {
    200: StopWorkerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersKillAllWorkersRoute = createRoute({
  method: 'post',
  path: '/servers/killAllWorkers',
  tags: ['Servers'],
  summary: 'Kill all workers',
  operationId: 'killAllWorkers',
  responses: {
    200: KillAllWorkersResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersRestartWorkersRoute = createRoute({
  method: 'post',
  path: '/servers/restartWorkers',
  tags: ['Servers'],
  summary: 'Restart workers',
  operationId: 'restartWorkers',
  responses: {
    200: RestartWorkersResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersRestartDeadWorkersRoute = createRoute({
  method: 'post',
  path: '/servers/restartDeadWorkers',
  tags: ['Servers'],
  summary: 'Restart dead workers',
  operationId: 'restartDeadWorkers',
  responses: {
    200: RestartDeadWorkersResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersUpdateRoute = createRoute({
  method: 'post',
  path: '/servers/update',
  tags: ['Servers'],
  summary: 'Update server',
  operationId: 'updateServer',
  responses: {
    200: UpdateServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersUpdateJSONRoute = createRoute({
  method: 'post',
  path: '/servers/updateJSON',
  tags: ['Servers'],
  summary:
    'Update server JSON libraries (galaxies, taxonomies, object templates, object relationships, noticelists, warninglists). For async updates, use the /servers/updateJSON/async:1 endpoint instead.',
  operationId: 'updateServerJSON',
  responses: {
    200: UpdateServerJSONResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersCacheRoute = createRoute({
  method: 'post',
  path: '/servers/cache',
  tags: ['Servers'],
  summary: 'Cache server',
  operationId: 'cacheServer',
  responses: {
    200: CacheServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersCreateSyncRoute = createRoute({
  method: 'post',
  path: '/servers/createSync',
  tags: ['Servers'],
  summary: 'Create sync',
  operationId: 'createSync',
  responses: {
    200: CreateSyncResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersGetInstanceUUIDRoute = createRoute({
  method: 'get',
  path: '/servers/getInstanceUUID',
  tags: ['Servers'],
  summary: 'Get instance UUID',
  operationId: 'getServerUuid',
  responses: {
    200: GetInstanceUUIDResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getServersGetSettingSettingNameRoute = createRoute({
  method: 'get',
  path: '/servers/getSetting/{settingName}',
  tags: ['Servers'],
  summary: 'Get server setting by name',
  operationId: 'getServerSetting',
  request: { params: z.object({ settingName: SettingNameParameterParamsSchema }) },
  responses: {
    200: GetServerSettingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersServerSettingsEditSettingNameRoute = createRoute({
  method: 'post',
  path: '/servers/serverSettingsEdit/{settingName}',
  tags: ['Servers'],
  summary: 'Edit server setting',
  operationId: 'editServerSetting',
  request: {
    params: z.object({ settingName: SettingNameParameterParamsSchema }),
    body: EditServerSettingRequestRequestBody,
  },
  responses: {
    200: EditServerSettingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postServersImportRoute = createRoute({
  method: 'post',
  path: '/servers/import',
  tags: ['Servers'],
  summary: 'Import server',
  operationId: 'importServer',
  request: { body: ImportServerRequestRequestBody },
  responses: {
    200: ServerResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupsAddRoute = createRoute({
  method: 'post',
  path: '/sharing_groups/add',
  tags: ['Sharing Groups'],
  summary: 'Add a sharing group',
  operationId: 'addSharingGroup',
  request: { body: AddSharingGroupRequestRequestBody },
  responses: {
    200: SharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupsEditSharingGroupIdRoute = createRoute({
  method: 'post',
  path: '/sharing_groups/edit/{sharingGroupId}',
  tags: ['Sharing Groups'],
  summary: 'Edit a sharing group',
  operationId: 'editSharingGroup',
  request: {
    params: z.object({ sharingGroupId: SharingGroupIdParameterParamsSchema }),
    body: EditSharingGroupRequestRequestBody,
  },
  responses: {
    200: SharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteSharingGroupsDeleteSharingGroupIdRoute = createRoute({
  method: 'delete',
  path: '/sharing_groups/delete/{sharingGroupId}',
  tags: ['Sharing Groups'],
  summary: 'Delete a sharing group',
  operationId: 'deleteSharingGroup',
  request: { params: z.object({ sharingGroupId: SharingGroupIdParameterParamsSchema }) },
  responses: {
    200: DeleteSharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getSharingGroupsRoute = createRoute({
  method: 'get',
  path: '/sharing_groups',
  tags: ['Sharing Groups'],
  summary: 'Get a list of sharing groups',
  operationId: 'getSharingGroup',
  responses: {
    200: SharingGroupListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getSharingGroupsViewSharingGroupIdRoute = createRoute({
  method: 'get',
  path: '/sharing_groups/view/{sharingGroupId}',
  tags: ['Sharing Groups'],
  summary: 'Get a sharing group by ID',
  operationId: 'getSharingGroupById',
  request: { params: z.object({ sharingGroupId: SharingGroupIdParameterParamsSchema }) },
  responses: {
    200: SharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupsAddOrgSharingGroupIdOrganisationIdRoute = createRoute({
  method: 'post',
  path: '/sharing_groups/addOrg/{sharingGroupId}/{organisationId}',
  tags: ['Sharing Groups'],
  summary: 'Add an organisation to a sharing group',
  operationId: 'addOrganisationToSharingGroup',
  request: {
    params: z.object({
      sharingGroupId: SharingGroupIdParameterParamsSchema,
      organisationId: OrganisationIdParameterParamsSchema,
    }),
  },
  responses: {
    200: AddOrganisationToSharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRoute = createRoute({
  method: 'post',
  path: '/sharing_groups/removeOrg/{sharingGroupId}/{organisationId}',
  tags: ['Sharing Groups'],
  summary: 'Remove an organisation from a sharing group',
  operationId: 'removeOrganisationFromSharingGroup',
  request: {
    params: z.object({
      sharingGroupId: SharingGroupIdParameterParamsSchema,
      organisationId: OrganisationIdParameterParamsSchema,
    }),
  },
  responses: {
    200: RemoveOrganisationFromSharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupsAddServerSharingGroupIdServerIdRoute = createRoute({
  method: 'post',
  path: '/sharing_groups/addServer/{sharingGroupId}/{serverId}',
  tags: ['Sharing Groups'],
  summary: 'Add a server to a sharing group',
  operationId: 'addServerToSharingGroup',
  request: {
    params: z.object({
      sharingGroupId: SharingGroupIdParameterParamsSchema,
      serverId: ServerIdParameterParamsSchema,
    }),
  },
  responses: {
    200: AddServerToSharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupsRemoveServerSharingGroupServerIdServerIdRoute = createRoute({
  method: 'post',
  path: '/sharing_groups/removeServer/{sharingGroupServerId}/{serverId}',
  tags: ['Sharing Groups'],
  summary: 'Remove a server from a sharing group',
  operationId: 'removeServerFromSharingGroup',
  request: {
    params: z.object({
      sharingGroupServerId: SharingGroupServerIdParameterParamsSchema,
      serverId: ServerIdParameterParamsSchema,
    }),
  },
  responses: {
    200: RemoveServerFromSharingGroupResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupBlueprintsAddRoute = createRoute({
  method: 'post',
  path: '/sharing_group_blueprints/add',
  tags: ['Sharing Group Blueprints'],
  summary: 'Add a sharing group blueprint',
  operationId: 'addSharingGroupBlueprint',
  request: { body: AddSharingGroupBlueprintRequestRequestBody },
  responses: { 200: SharingGroupBlueprintResponseResponse, default: ApiErrorResponseResponse },
})

export const deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRoute = createRoute({
  method: 'delete',
  path: '/sharing_group_blueprints/delete/{sharingGroupBlueprintId}',
  tags: ['Sharing Group Blueprints'],
  summary: 'Delete a sharing group blueprint',
  operationId: 'deleteSharingGroupBlueprint',
  request: {
    params: z.object({ sharingGroupBlueprintId: SharingGroupBlueprintIdParameterParamsSchema }),
  },
  responses: {
    200: SharingGroupBlueprintDeletedResponseResponse,
    404: SharingGroupBlueprintNotFoundResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRoute = createRoute({
  method: 'post',
  path: '/sharing_group_blueprints/detach/{sharingGroupBlueprintId}',
  tags: ['Sharing Group Blueprints'],
  summary: 'Detach the sharing group from a sharing group blueprint',
  operationId: 'detachSharingGroupBlueprint',
  request: {
    params: z.object({ sharingGroupBlueprintId: SharingGroupBlueprintIdParameterParamsSchema }),
  },
  responses: {
    200: SharingGroupBlueprintDetachedResponseResponse,
    404: SharingGroupBlueprintNotFoundResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupBlueprintsEditSharingGroupBlueprintIdRoute = createRoute({
  method: 'post',
  path: '/sharing_group_blueprints/edit/{sharingGroupBlueprintId}',
  tags: ['Sharing Group Blueprints'],
  summary: 'Edit a sharing group blueprint',
  operationId: 'editSharingGroupBlueprint',
  request: {
    params: z.object({ sharingGroupBlueprintId: SharingGroupBlueprintIdParameterParamsSchema }),
    body: EditSharingGroupBlueprintRequestRequestBody,
  },
  responses: {
    200: SharingGroupBlueprintResponseResponse,
    404: SharingGroupBlueprintNotFoundResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRoute = createRoute({
  method: 'post',
  path: '/sharing_group_blueprints/execute/{sharingGroupBlueprintId}',
  tags: ['Sharing Group Blueprints'],
  summary: 'Execute a sharing group blueprint, regenerating the sharing group',
  operationId: 'executeSharingGroupBlueprint',
  request: {
    params: z.object({ sharingGroupBlueprintId: SharingGroupBlueprintIdParameterParamsSchema }),
  },
  responses: {
    200: SharingGroupBlueprintExecutedResponseResponse,
    404: SharingGroupBlueprintNotFoundResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getSharingGroupBlueprintsIndexRoute = createRoute({
  method: 'get',
  path: '/sharing_group_blueprints/index',
  tags: ['Sharing Group Blueprints'],
  summary: 'View the list of sharing group blueprints',
  operationId: 'viewSharingGroupBlueprints',
  responses: { 200: SharingGroupBlueprintIndexResponseResponse, default: ApiErrorResponseResponse },
})

export const getSharingGroupBlueprintsViewSharingGroupBlueprintIdRoute = createRoute({
  method: 'get',
  path: '/sharing_group_blueprints/view/{sharingGroupBlueprintId}',
  tags: ['Sharing Group Blueprints'],
  summary: 'View a sharing group blueprint',
  operationId: 'viewSharingGroupBlueprint',
  request: {
    params: z.object({ sharingGroupBlueprintId: SharingGroupBlueprintIdParameterParamsSchema }),
  },
  responses: {
    200: SharingGroupBlueprintResponseResponse,
    404: SharingGroupBlueprintNotFoundResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRoute = createRoute({
  method: 'get',
  path: '/sharing_group_blueprints/viewOrgs/{sharingGroupBlueprintId}',
  tags: ['Sharing Group Blueprints'],
  summary: "View a sharing group blueprint's organisation filter result",
  description:
    'View the list of organisations that would become part of the sharing group, on execution of the blueprint. This allows you to check the results of the currently set filters in a blueprint.',
  operationId: 'viewOrgsSharingGroupBlueprint',
  request: {
    params: z.object({ sharingGroupBlueprintId: SharingGroupBlueprintIdParameterParamsSchema }),
  },
  responses: {
    200: SharingGroupBlueprintViewOrgsResponseResponse,
    404: SharingGroupBlueprintNotFoundResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getFeedsRoute = createRoute({
  method: 'get',
  path: '/feeds',
  tags: ['Feeds'],
  summary: 'Get a list of feeds',
  operationId: 'getFeeds',
  responses: {
    200: FeedListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getFeedsViewFeedIdRoute = createRoute({
  method: 'get',
  path: '/feeds/view/{feedId}',
  tags: ['Feeds'],
  summary: 'Get a feed by ID',
  operationId: 'getFeedById',
  request: { params: z.object({ feedId: FeedIdParameterParamsSchema }) },
  responses: {
    200: FeedResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postFeedsAddRoute = createRoute({
  method: 'post',
  path: '/feeds/add',
  tags: ['Feeds'],
  summary: 'Add a feed',
  operationId: 'addFeed',
  request: { body: AddFeedRequestRequestBody },
  responses: {
    200: FeedResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const putFeedsEditFeedIdRoute = createRoute({
  method: 'put',
  path: '/feeds/edit/{feedId}',
  tags: ['Feeds'],
  summary: 'Edit a feed',
  operationId: 'editFeed',
  request: {
    params: z.object({ feedId: FeedIdParameterParamsSchema }),
    body: EditFeedRequestRequestBody,
  },
  responses: {
    200: FeedResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postFeedsEnableFeedIdRoute = createRoute({
  method: 'post',
  path: '/feeds/enable/{feedId}',
  tags: ['Feeds'],
  summary: 'Enable feed',
  operationId: 'enableFeed',
  request: { params: z.object({ feedId: FeedIdParameterParamsSchema }) },
  responses: {
    200: EnableFeedResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postFeedsDisableFeedIdRoute = createRoute({
  method: 'post',
  path: '/feeds/disable/{feedId}',
  tags: ['Feeds'],
  summary: 'Disable feed',
  operationId: 'disableFeed',
  request: { params: z.object({ feedId: FeedIdParameterParamsSchema }) },
  responses: {
    200: DisableFeedResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postFeedsCacheFeedsCacheFeedsScopeRoute = createRoute({
  method: 'post',
  path: '/feeds/cacheFeeds/{cacheFeedsScope}',
  tags: ['Feeds'],
  summary: 'Cache feeds',
  operationId: 'cacheFeeds',
  request: { params: z.object({ cacheFeedsScope: CacheFeedsScopeParameterParamsSchema }) },
  responses: {
    200: CacheFeedsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postFeedsFetchFromFeedFeedIdRoute = createRoute({
  method: 'post',
  path: '/feeds/fetchFromFeed/{feedId}',
  tags: ['Feeds'],
  summary: 'Fetch from feed by ID',
  operationId: 'fetchFromFeed',
  request: { params: z.object({ feedId: FeedIdParameterParamsSchema }) },
  responses: {
    200: FetchFromFeedResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postFeedsFetchFromAllFeedsRoute = createRoute({
  method: 'post',
  path: '/feeds/fetchFromAllFeeds',
  tags: ['Feeds'],
  summary: 'Fetch from all feeds',
  operationId: 'fetchFromAllFeeds',
  responses: {
    200: FetchFromAllFeedsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getWarninglistsRoute = createRoute({
  method: 'get',
  path: '/warninglists',
  tags: ['Warninglists'],
  summary: 'Get a list of warninglists',
  operationId: 'getWarninglists',
  responses: {
    200: WarninglistListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postWarninglistsRoute = createRoute({
  method: 'post',
  path: '/warninglists',
  tags: ['Warninglists'],
  summary: 'Search warninglists',
  operationId: 'searchWarninglists',
  request: { body: WarninglistsSearchRequestRequestBody },
  responses: {
    200: WarninglistListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postWarninglistsToggleEnableRoute = createRoute({
  method: 'post',
  path: '/warninglists/toggleEnable',
  tags: ['Warninglists'],
  summary: 'Enable/disable warninglists',
  operationId: 'toggleEnableWarninglist',
  request: { body: WarninglistsToggleEnableRequestRequestBody },
  responses: {
    200: WarninglistToggleEnabledResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getWarninglistsViewWarninglistIdRoute = createRoute({
  method: 'get',
  path: '/warninglists/view/{warninglistId}',
  tags: ['Warninglists'],
  summary: 'Get warninglist by ID',
  operationId: 'getWarninglistById',
  request: { params: z.object({ warninglistId: WarninglistIdParameterParamsSchema }) },
  responses: {
    200: WarninglistResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postWarninglistsCheckValueRoute = createRoute({
  method: 'post',
  path: '/warninglists/checkValue',
  tags: ['Warninglists'],
  summary: 'Check if a list of values matches any warninglists',
  operationId: 'checkValueWarninglistsMatches',
  request: { body: WarninglistCheckValuesRequestRequestBody },
  responses: {
    200: WarninglistMatchListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postWarninglistsUpdateRoute = createRoute({
  method: 'post',
  path: '/warninglists/update',
  tags: ['Warninglists'],
  summary: 'Update warninglists',
  operationId: 'updateWarninglists',
  responses: {
    200: UpdateWarninglistsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getNoticelistsRoute = createRoute({
  method: 'get',
  path: '/noticelists',
  tags: ['Noticelists'],
  summary: 'Get a list of noticelists',
  operationId: 'getNoticelists',
  responses: {
    200: NoticelistListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getNoticelistsViewNoticelistIdRoute = createRoute({
  method: 'get',
  path: '/noticelists/view/{noticelistId}',
  tags: ['Noticelists'],
  summary: 'Get a noticelist by ID',
  operationId: 'getNoticelistById',
  request: { params: z.object({ noticelistId: NoticelistIdParameterParamsSchema }) },
  responses: {
    200: NoticelistResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postNoticelistsToggleEnableNoticelistIdRoute = createRoute({
  method: 'post',
  path: '/noticelists/toggleEnable/{noticelistId}',
  tags: ['Noticelists'],
  summary: 'Enable/disable noticelist',
  operationId: 'toggleEnableNoticelist',
  request: { params: z.object({ noticelistId: NoticelistIdParameterParamsSchema }) },
  responses: {
    200: NoticelistToggleEnableResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postNoticelistsUpdateRoute = createRoute({
  method: 'post',
  path: '/noticelists/update',
  tags: ['Noticelists'],
  summary: 'Update noticelists',
  operationId: 'updateNoticelists',
  responses: {
    200: UpdateNoticelistsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postObjectsRestsearchRoute = createRoute({
  method: 'post',
  path: '/objects/restsearch',
  tags: ['Objects'],
  summary: '[restSearch] Get a filtered and paginated list of objects',
  description: '**This is the recommended endpoint for searching objects.**\n',
  operationId: 'restSearchObjects',
  request: { body: RestSearchObjectsRequestRequestBody },
  responses: {
    200: ObjectsRestSearchResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postObjectsAddEventIdObjectTemplateIdRoute = createRoute({
  method: 'post',
  path: '/objects/add/{eventId}/{objectTemplateId}',
  tags: ['Objects'],
  summary: 'Add an object to an event',
  operationId: 'addObject',
  request: {
    params: z.object({
      eventId: EventIdParameterParamsSchema,
      objectTemplateId: ObjectTemplateIdParameterParamsSchema,
    }),
    body: AddObjectRequestRequestBody,
  },
  responses: {
    200: ObjectResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getObjectsViewObjectIdRoute = createRoute({
  method: 'get',
  path: '/objects/view/{objectId}',
  tags: ['Objects'],
  summary: 'Get object by ID',
  operationId: 'getObjectById',
  request: { params: z.object({ objectId: ObjectIdParameterParamsSchema }) },
  responses: {
    200: ExtendedObjectResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteObjectsDeleteObjectIdHardDeleteRoute = createRoute({
  method: 'delete',
  path: '/objects/delete/{objectId}/{hardDelete}',
  tags: ['Objects'],
  summary: 'Delete object',
  operationId: 'deleteObject',
  request: {
    params: z.object({
      objectId: ObjectIdParameterParamsSchema,
      hardDelete: HardDeleteParameterParamsSchema,
    }),
  },
  responses: {
    200: DeleteObjectResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getSightingsIndexEventIdRoute = createRoute({
  method: 'get',
  path: '/sightings/index/{eventId}',
  tags: ['Sightings'],
  summary: 'Get sightings by event ID',
  operationId: 'getSightingsByEventId',
  request: { params: z.object({ eventId: EventIdParameterParamsSchema }) },
  responses: {
    200: SightingListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSightingsAddRoute = createRoute({
  method: 'post',
  path: '/sightings/add',
  tags: ['Sightings'],
  summary: 'Add sightings of a list of values',
  operationId: 'addSightingByValue',
  request: { body: AddSightingsRequestRequestBody },
  responses: {
    200: SightingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSightingsAddAttributeIdRoute = createRoute({
  method: 'post',
  path: '/sightings/add/{attributeId}',
  tags: ['Sightings'],
  summary: 'Add sighting of an attribute',
  operationId: 'addSighting',
  request: { params: z.object({ attributeId: AttributeIdParameterParamsSchema }) },
  responses: {
    200: SightingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postSightingsDeleteSightingIdRoute = createRoute({
  method: 'post',
  path: '/sightings/delete/{sightingId}',
  tags: ['Sightings'],
  summary: 'Delete sighting',
  operationId: 'deleteSighting',
  request: { params: z.object({ sightingId: SightingIdParameterParamsSchema }) },
  responses: {
    200: DeleteSightingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Get tags',
  operationId: 'getTags',
  responses: {
    200: TagListResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTagsViewTagIdRoute = createRoute({
  method: 'get',
  path: '/tags/view/{tagId}',
  tags: ['Tags'],
  summary: 'Get tag by ID',
  operationId: 'getTagById',
  request: { params: z.object({ tagId: TagIdParameterParamsSchema }) },
  responses: {
    200: TagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postTagsAddRoute = createRoute({
  method: 'post',
  path: '/tags/add',
  tags: ['Tags'],
  summary: 'Add tag',
  operationId: 'addTag',
  request: { body: AddTagRequestRequestBody },
  responses: {
    200: TagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postTagsDeleteTagIdRoute = createRoute({
  method: 'post',
  path: '/tags/delete/{tagId}',
  tags: ['Tags'],
  summary: 'Delete tag',
  operationId: 'deleteTag',
  request: { params: z.object({ tagId: TagIdParameterParamsSchema }) },
  responses: {
    200: DeleteTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postTagsEditTagIdRoute = createRoute({
  method: 'post',
  path: '/tags/edit/{tagId}',
  tags: ['Tags'],
  summary: 'Edit tag',
  operationId: 'editTag',
  request: {
    params: z.object({ tagId: TagIdParameterParamsSchema }),
    body: EditTagRequestRequestBody,
  },
  responses: {
    200: EditTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTagsSearchTagSearchTermRoute = createRoute({
  method: 'get',
  path: '/tags/search/{tagSearchTerm}',
  tags: ['Tags'],
  summary: 'Search tag',
  operationId: 'searchTag',
  request: { params: z.object({ tagSearchTerm: TagSearchTermParameterParamsSchema }) },
  responses: {
    200: SearchTagResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAuthKeysRoute = createRoute({
  method: 'get',
  path: '/auth_keys',
  tags: ['AuthKeys'],
  summary: 'Get auth keys',
  operationId: 'getAuthKeys',
  responses: {
    200: GetAuthKeysResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAuthKeysRoute = createRoute({
  method: 'post',
  path: '/auth_keys',
  tags: ['AuthKeys'],
  summary: 'Search auth keys',
  operationId: 'searchAuthKeys',
  request: { body: GetAuthKeyRequestRequestBody },
  responses: {
    200: GetAuthKeysResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAuthKeysAddUserIdRoute = createRoute({
  method: 'post',
  path: '/auth_keys/add/{userId}',
  tags: ['AuthKeys'],
  summary: 'Add auth keys',
  operationId: 'addAuthKey',
  request: {
    params: z.object({ userId: UserIdParameterParamsSchema }),
    body: AddAuthKeyRequestRequestBody,
  },
  responses: {
    200: AddAuthKeyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getAuthKeysViewAuthKeyIdRoute = createRoute({
  method: 'get',
  path: '/auth_keys/view/{authKeyId}',
  tags: ['AuthKeys'],
  summary: 'View auth key',
  operationId: 'getAuthKeyById',
  request: { params: z.object({ authKeyId: AuthKeyIdParameterParamsSchema }) },
  responses: {
    200: AuthKeyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postAuthKeysEditAuthKeyIdRoute = createRoute({
  method: 'post',
  path: '/auth_keys/edit/{authKeyId}',
  tags: ['AuthKeys'],
  summary: 'Edit auth key',
  operationId: 'editAuthKey',
  request: {
    params: z.object({ authKeyId: AuthKeyIdParameterParamsSchema }),
    body: EditAuthKeyRequestRequestBody,
  },
  responses: {
    200: AuthKeyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteAuthKeysDeleteAuthKeyIdRoute = createRoute({
  method: 'delete',
  path: '/auth_keys/delete/{authKeyId}',
  tags: ['AuthKeys'],
  summary: 'Delete auth key',
  operationId: 'deleteAuthKey',
  request: { params: z.object({ authKeyId: AuthKeyIdParameterParamsSchema }) },
  responses: {
    200: DeleteAuthKeyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getUserSettingsRoute = createRoute({
  method: 'get',
  path: '/user_settings',
  tags: ['UserSettings'],
  summary: 'Get user settings',
  operationId: 'getUserSettings',
  responses: {
    200: GetUserSettingsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postUserSettingsRoute = createRoute({
  method: 'post',
  path: '/user_settings',
  tags: ['UserSettings'],
  summary: 'Search user settings',
  operationId: 'searchUserSettings',
  request: { body: GetUserSettingRequestRequestBody },
  responses: {
    200: GetUserSettingsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getUserSettingsViewUserSettingIdRoute = createRoute({
  method: 'get',
  path: '/user_settings/view/{userSettingId}',
  tags: ['UserSettings'],
  summary: 'Get user setting by id',
  operationId: 'getUserSettingById',
  request: { params: z.object({ userSettingId: UserSettingIdParameterParamsSchema }) },
  responses: {
    200: UserSettingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postUserSettingsSetSettingUserIdUserSettingNameRoute = createRoute({
  method: 'post',
  path: '/user_settings/setSetting/{userId}/{userSettingName}',
  tags: ['UserSettings'],
  summary: 'Set user setting',
  operationId: 'setUserSetting',
  request: {
    params: z.object({
      userId: UserIdParameterParamsSchema,
      userSettingName: UserSettingNameParameterParamsSchema,
    }),
    body: SetUserSettingRequestRequestBody,
  },
  responses: {
    200: UserSettingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getUserSettingsGetSettingUserIdUserSettingNameRoute = createRoute({
  method: 'get',
  path: '/user_settings/getSetting/{userId}/{userSettingName}',
  tags: ['UserSettings'],
  summary: 'Get user setting by id',
  operationId: 'getUserSettingByName',
  request: {
    params: z.object({
      userId: UserIdParameterParamsSchema,
      userSettingName: UserSettingNameParameterParamsSchema,
    }),
  },
  responses: {
    200: UserSettingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const deleteUserSettingsDeleteUserSettingIdRoute = createRoute({
  method: 'delete',
  path: '/user_settings/delete/{userSettingId}',
  tags: ['UserSettings'],
  summary: 'Delete user setting by id',
  operationId: 'deleteUserSettingById',
  request: { params: z.object({ userSettingId: UserSettingIdParameterParamsSchema }) },
  responses: {
    200: DeleteUserSettingResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTaxonomiesRoute = createRoute({
  method: 'get',
  path: '/taxonomies',
  tags: ['Taxonomies'],
  summary: 'Get taxonomies',
  operationId: 'getTaxonomies',
  responses: {
    200: GetTaxonomiesResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTaxonomiesViewTaxonomyIdRoute = createRoute({
  method: 'get',
  path: '/taxonomies/view/{taxonomyId}',
  tags: ['Taxonomies'],
  summary: 'Get a taxonomy by ID',
  operationId: 'getTaxonomyById',
  request: { params: z.object({ taxonomyId: TaxonomyIdParameterParamsSchema }) },
  responses: {
    200: TaxonomiesResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postTaxonomiesEnableTaxonomyIdRoute = createRoute({
  method: 'post',
  path: '/taxonomies/enable/{taxonomyId}',
  tags: ['Taxonomies'],
  summary: 'Enable taxonomy',
  operationId: 'enableTaxonomy',
  request: { params: z.object({ taxonomyId: TaxonomyIdParameterParamsSchema }) },
  responses: {
    200: EnableTaxonomyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postTaxonomiesDisableTaxonomyIdRoute = createRoute({
  method: 'post',
  path: '/taxonomies/disable/{taxonomyId}',
  tags: ['Taxonomies'],
  summary: 'Disable taxonomy',
  operationId: 'disableTaxonomy',
  request: { params: z.object({ taxonomyId: TaxonomyIdParameterParamsSchema }) },
  responses: {
    200: DisableTaxonomyResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const postTaxonomiesUpdateRoute = createRoute({
  method: 'post',
  path: '/taxonomies/update',
  tags: ['Taxonomies'],
  summary: 'Update taxonomies',
  operationId: 'updateTaxonomies',
  responses: {
    200: UpdateTaxonomiesResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTaxonomiesTaxonomyTagsTaxonomyIdRoute = createRoute({
  method: 'get',
  path: '/taxonomies/taxonomy_tags/{taxonomyId}',
  tags: ['Taxonomies'],
  summary: 'Get a taxonomy extended with tags used in events and attributes.',
  operationId: 'getTaxonomyTags',
  request: { params: z.object({ taxonomyId: TaxonomyIdParameterParamsSchema }) },
  responses: {
    200: GetTaxonomyTagsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})

export const getTaxonomiesExportTaxonomyIdRoute = createRoute({
  method: 'get',
  path: '/taxonomies/export/{taxonomyId}',
  tags: ['Taxonomies'],
  summary: 'Export taxonomy.',
  operationId: 'exportTaxonomy',
  request: { params: z.object({ taxonomyId: TaxonomyIdParameterParamsSchema }) },
  responses: {
    200: ExportTaxonomyTagsResponseResponse,
    403: UnauthorizedApiErrorResponseResponse,
    404: NotFoundApiErrorResponseResponse,
    default: ApiErrorResponseResponse,
  },
})
