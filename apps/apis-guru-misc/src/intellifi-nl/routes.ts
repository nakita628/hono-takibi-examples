import { createRoute, z } from '@hono/zod-openapi'

const IdReadOnlySchema = z
  .string()
  .openapi({
    description: 'Unique identifier for resource.',
    example: '5b7d6cbd7503c445552a1664',
    readOnly: true,
  })
  .openapi('IdReadOnly')

const TimeCreatedSchema = z
  .string()
  .openapi({
    description:
      '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.',
    example: '2018-08-30T09:51:59.737Z',
    readOnly: true,
  })
  .openapi('TimeCreated')

const TimeEventSchema = z
  .string()
  .openapi({
    description:
      "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this event was generated on the device. This is the device's own timestamp. Could be different due to buffering and clock differences.",
    example: '2018-08-30T09:51:59.737Z',
    readOnly: true,
  })
  .openapi('TimeEvent')

const TimeExpireSchema = z
  .string()
  .openapi({
    description:
      '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource is going to be deleted.',
    example: '2018-08-30T09:51:59.737Z',
    readOnly: true,
  })
  .openapi('TimeExpire')

const EventTopicActionSchema = z
  .enum(['created', 'updated', 'deleted', 'disappeared', 'connection-rssi-changed'])
  .openapi({
    description:
      "Indicates the kind of event that was executed. In most cases it's a verb. I.e. 'connected', 'created' etc...",
    example: 'created',
  })
  .openapi('EventTopicAction')

const EventTopicArgumentSchema = z
  .any()
  .openapi({
    description:
      'Extra arguments may be added to a topic string, it depends on the `resource_type` and the `action` what extra arguments are added.',
    example: { foo: 'bar' },
  })
  .openapi('EventTopicArgument')

const EventTopicResourceTypeSchema = z
  .enum([
    'blobs',
    'items',
    'keys',
    'kvpairs',
    'locations',
    'presences',
    'services',
    'spots',
    'subscriptions',
    'users',
  ])
  .openapi({
    description:
      'The The available event topic resources types on the API. Is written in its plural form.',
    example: 'items',
  })
  .openapi('EventTopicResourceType')

const UrlSchema = z
  .string()
  .openapi({
    description: 'Url to the individual resource.',
    example: 'https://brain.intellifi.nl/api/foobar',
    readOnly: true,
  })
  .openapi('Url')

type EventType = {
  id?: z.infer<typeof IdReadOnlySchema>
  payload?: { [key: string]: unknown }
  time_created?: z.infer<typeof TimeCreatedSchema>
  time_event?: z.infer<typeof TimeEventSchema>
  time_expire?: z.infer<typeof TimeExpireSchema>
  topic?: {
    action?: z.infer<typeof EventTopicActionSchema>
    arguments?: z.infer<typeof EventTopicArgumentSchema>
    resource_id?: z.infer<typeof IdReadOnlySchema>
    resource_type?: z.infer<typeof EventTopicResourceTypeSchema>
    resource_url?: z.infer<typeof UrlSchema>
  }
  url?: z.infer<typeof UrlSchema>
}

const TimeLastAccessedSchema = z
  .string()
  .openapi({
    description:
      '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was last accessed.',
    example: '2018-08-30T09:51:59.737Z',
    readOnly: true,
  })
  .openapi('TimeLastAccessed')

const TimeUpdatedSchema = z
  .string()
  .openapi({
    description:
      '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.',
    example: '2018-08-30T09:51:59.737Z',
    readOnly: true,
  })
  .openapi('TimeUpdated')

const BlobSchema = z
  .object({
    blob_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique key to the blob', example: 'foobar' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Media type of the resource. Automatically detected when not given in a POST.',
        example: 'image/png',
      }),
    download_url: UrlSchema.exactOptional(),
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'Filename of the blob', example: 'Foo bar' }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Hash of the blob',
        example: '50df961c6c099f778fa50647572ef21f4ef416d52f7e00e311d7dbca1a735f6a',
        readOnly: true,
      }),
    id: IdReadOnlySchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_last_accessed: TimeLastAccessedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    upload_url: UrlSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: ['key'] })
  .openapi('Blob')

const BootCountSchema = z
  .int()
  .openapi({
    description:
      'Is increased with 1 when the service starts. Is never cleared (unless the database is adjusted).',
    example: 22,
    readOnly: true,
  })
  .openapi('BootCount')

const CodeHexSchema = z
  .string()
  .openapi({
    description:
      'String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.',
    example: 'deadbeef',
  })
  .openapi('CodeHex')

const ConfigSchema = z
  .object({})
  .openapi({
    description:
      'JSON object with possible settings. Refer to individual service documentation for a good overview.',
    example: { foo: 'bar' },
    readOnly: true,
  })
  .openapi('Config')

const ConfigRequestSchema = z
  .object({})
  .openapi({
    description:
      'Object containing the new configuration. This will be applied automatically when the values are valid.',
    example: { foo: 'bar' },
  })
  .openapi('ConfigRequest')

const CustomSchema = z
  .any()
  .nullable()
  .openapi({
    description:
      'The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...',
    example: { foo: 'bar' },
  })
  .openapi('Custom')

const EventSchema: z.ZodType<EventType> = z
  .lazy(() =>
    z
      .object({
        id: IdReadOnlySchema.exactOptional(),
        payload: z
          .any()
          .exactOptional()
          .openapi({
            description: 'An object containing the payload, if any, of the event.',
            example: { foo: 'bar' },
          }),
        time_created: TimeCreatedSchema.exactOptional(),
        time_event: TimeEventSchema.exactOptional(),
        time_expire: TimeExpireSchema.exactOptional(),
        topic: z
          .object({
            action: EventTopicActionSchema.exactOptional(),
            arguments: EventTopicArgumentSchema.exactOptional(),
            resource_id: IdReadOnlySchema.exactOptional(),
            resource_type: EventTopicResourceTypeSchema.exactOptional(),
            resource_url: UrlSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        url: UrlSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Event')

const GeoCoordsSchema = z
  .object({
    lat: z.number().exactOptional().openapi({ description: 'Latitude angle in degrees' }),
    lng: z.number().exactOptional().openapi({ description: 'Longitude angle in degrees' }),
    time_updated: TimeUpdatedSchema.exactOptional(),
  })
  .openapi({
    description:
      'Last known geolocation estimate of this object. Not guaranteed to be included in response.',
    required: [],
  })
  .openapi('GeoCoords')

const GeoCoordsReadOnlySchema = z
  .object({
    lat: z
      .number()
      .exactOptional()
      .openapi({ description: 'Latitude angle in degrees', readOnly: true }),
    lng: z
      .number()
      .exactOptional()
      .openapi({ description: 'Longitude angle in degrees', readOnly: true }),
    time_updated: TimeUpdatedSchema.exactOptional(),
  })
  .openapi({
    description:
      'Last known geolocation estimate of this object. Not guaranteed to be included in response.',
    readOnly: true,
    required: [],
  })
  .openapi('GeoCoordsReadOnly')

const IdSchema = z
  .string()
  .openapi({ description: 'Unique identifier for resource.', example: '5b7d6cbd7503c445552a1664' })
  .openapi('Id')

const IsOnlineSchema = z
  .boolean()
  .openapi({
    description: 'Whether or not this resource is actively connected to the Brain.',
    example: true,
    readOnly: true,
  })
  .openapi('IsOnline')

const LabelSchema = z
  .string()
  .openapi({
    description:
      'A name or a label for this resource. This is used in the user interface, may be empty.',
    example: 'Foo Bar',
  })
  .openapi('Label')

const LocationRequestSchema = z
  .string()
  .openapi({
    description:
      'Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.',
    example: '5b7d6cbd7503c445552a1664',
  })
  .openapi('LocationRequest')

const MetadataSchema = z
  .object({})
  .openapi({
    description:
      'Object of searchable metadata for this resource. Can be freely used to store metadata properties.',
    example: { foo: 'bar' },
  })
  .openapi('Metadata')

const ItemUpdateSchema = z
  .object({
    config_request: ConfigRequestSchema.exactOptional(),
    custom: CustomSchema.exactOptional(),
    label: LabelSchema.exactOptional(),
    location_request: LocationRequestSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ItemUpdate')

const MoveCountSchema = z
  .int()
  .openapi({
    description:
      "How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.",
    example: 4523,
    readOnly: true,
  })
  .openapi('MoveCount')

const ItemProtocolSchema = z
  .enum(['altbeacon', 'uniwear', 'nfc', 'generic', 'eddystone', 'epcgen2', 'ibeacon', 'nanoble'])
  .openapi({
    description: 'Type of protocol that was used to decode this item.',
    example: 'epcgen2',
  })
  .openapi('ItemProtocol')

const ListOfSetIdsSchema = z
  .array(IdReadOnlySchema)
  .openapi({ description: 'List of set ids', readOnly: true })
  .openapi('ListOfSetIds')

const TechnologySchema = z
  .enum(['bluetooth', 'optical', 'rfid'])
  .openapi({
    description: 'Type of technology that was used to detect this item.',
    example: 'rfid',
  })
  .openapi('Technology')

const TimeMovedSchema = z
  .string()
  .openapi({
    description:
      'Last time this item moved. This is the last time that the location for this item was changed.',
    example: '2018-08-30T09:51:59.737Z',
    readOnly: true,
  })
  .openapi('TimeMoved')

const ItemTypeSchema = z
  .enum(['barcode', 'bluetitan', 'gbtag', 'relay', 'smarttag', 'tag'])
  .openapi({ description: 'Type of item.', example: 'tag' })
  .openapi('ItemType')

const LocationSchema = z
  .object({
    custom: CustomSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    label: LabelSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('Location')

const ItemSchema = ItemUpdateSchema.and(
  z
    .object({
      code_hex: CodeHexSchema.exactOptional(),
      geo_coords: GeoCoordsReadOnlySchema.exactOptional(),
      id: IdReadOnlySchema.exactOptional(),
      is_present: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            "Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.",
          example: true,
          readOnly: true,
        }),
      move_count: MoveCountSchema.exactOptional(),
      protocol: ItemProtocolSchema.exactOptional(),
      sets: ListOfSetIdsSchema.exactOptional(),
      technology: TechnologySchema.exactOptional(),
      time_created: TimeCreatedSchema.exactOptional(),
      time_last_present: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Last time the item was present.',
          example: '2018-08-30T09:51:59.737Z',
          readOnly: true,
        }),
      time_moved: TimeMovedSchema.exactOptional(),
      time_updated: TimeUpdatedSchema.exactOptional(),
      type: ItemTypeSchema.exactOptional(),
      url: UrlSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .and(
    z.xor([
      z
        .object({
          location: LocationSchema.exactOptional().openapi({
            description:
              "Reference to the location resource where the item is located. Or, if the item is out of reach, the last known location. Only returned when populate is set to 'location'",
          }),
        })
        .openapi({ required: [] }),
      z.object({ location_id: IdReadOnlySchema.exactOptional() }).openapi({ required: [] }),
      z.object({ location_url: UrlSchema.exactOptional() }).openapi({ required: [] }),
    ]),
  )
  .openapi('Item')

const ItemListSchema = z
  .object({
    custom: CustomSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    label: LabelSchema.exactOptional(),
    list: UrlSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    sha1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The sha1 checksum of the list. This will change when the list is mutated.',
        readOnly: true,
      }),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total amount of items in this set', example: 2, readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ItemList')

const KeySchema = z
  .object({
    id: IdReadOnlySchema.exactOptional(),
    is_read_only: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this key can only read and not write.' }),
    label: z.string().exactOptional().openapi({ description: 'Custom label for this API key.' }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secret token for authentication.',
        example: '59cb1e86-a08d-44c9-9b37-c27f4ccd97f4',
        readOnly: true,
      }),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Key')

const KeyValuePairUpdateSchema = z
  .object({
    kv_value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value of the key value pair.', example: 'all the bars' }),
  })
  .openapi({ required: [] })
  .openapi('KeyValuePairUpdate')

const KeyValuePairSchema = KeyValuePairUpdateSchema.and(
  z
    .object({
      id: IdReadOnlySchema.exactOptional(),
      kv_key: z
        .string()
        .exactOptional()
        .openapi({ description: 'Unique identifier for the value.', example: 'foo' }),
      kv_value: z
        .any()
        .nullable()
        .exactOptional()
        .openapi({ description: 'The value of the key value pair.', example: 'all the bars' }),
      time_created: TimeCreatedSchema.exactOptional(),
      time_updated: TimeUpdatedSchema.exactOptional(),
      url: UrlSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('KeyValuePair')

const ListOfItemIdsSchema = z
  .array(IdReadOnlySchema)
  .openapi({ description: 'List of item ids' })
  .openapi('ListOfItemIds')

const RuleEnabledSchema = z
  .boolean()
  .openapi({
    description: 'Whether this rule should be in effect (`true`) or on hold (`false`).',
    example: true,
  })
  .openapi('RuleEnabled')

const LocationRuleParametersSchema = z
  .object({})
  .openapi({
    description:
      'Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.',
  })
  .openapi('LocationRuleParameters')

const LocationRuleTypeSchema = z
  .enum(['allow', 'disallow', 'disappeared', 'debounce'])
  .openapi({
    description:
      'The type of location rule to be applied.\nAllow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).\nDisallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).\nDisappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.\nDebounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.\n',
  })
  .openapi('LocationRuleType')

const LocationRuleSchema = z
  .object({
    conditions: z
      .union([
        z.xor([
          z
            .object({
              from_location: LocationSchema.exactOptional().openapi({
                description: 'Rule applies to moves at or away from this location.',
              }),
            })
            .openapi({ required: [] }),
          z
            .object({ from_location_id: IdReadOnlySchema.exactOptional() })
            .openapi({ required: [] }),
          z.object({ from_location_url: UrlSchema.exactOptional() }).openapi({ required: [] }),
        ]),
        z.xor([
          z
            .object({
              to_location: LocationSchema.exactOptional().openapi({
                description: 'Rule applies to moves towards this location.',
              }),
            })
            .openapi({ required: [] }),
          z.object({ to_location_id: IdReadOnlySchema.exactOptional() }).openapi({ required: [] }),
          z.object({ to_location_url: UrlSchema.exactOptional() }).openapi({ required: [] }),
        ]),
      ])
      .exactOptional()
      .openapi({
        description:
          'Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.',
      }),
    enabled: RuleEnabledSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    label: LabelSchema.exactOptional(),
    parameters: LocationRuleParametersSchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    type: LocationRuleTypeSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationRule')

const LocationRuleUpdateSchema = z
  .object({
    conditions: z
      .object({ from_location: IdSchema.exactOptional(), to_location: IdSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.',
        required: [],
      }),
    enabled: RuleEnabledSchema.exactOptional(),
    label: LabelSchema.exactOptional(),
    parameters: LocationRuleParametersSchema.exactOptional(),
    type: LocationRuleTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocationRuleUpdate')

const NameSchema = z
  .string()
  .openapi({
    description: 'Human readable name for the resource.',
    example: 'Foo Bar',
    readOnly: true,
  })
  .openapi('Name')

const ProximitySchema = z
  .enum(['far', 'near', 'immediate'])
  .openapi({
    description:
      "Strongest proximity of all 'child' presences. This is a rough estimate on the distance from the item to the receiver.",
    example: 'immediate',
  })
  .openapi('Proximity')

const PresenceSchema = z
  .object({
    id: IdReadOnlySchema.exactOptional(),
    item: ItemSchema.exactOptional(),
    item_id: IdReadOnlySchema.exactOptional(),
    item_url: UrlSchema.exactOptional(),
    location: LocationSchema.exactOptional(),
    location_id: IdReadOnlySchema.exactOptional(),
    location_url: UrlSchema.exactOptional(),
    proximity: ProximitySchema.exactOptional(),
    technology: TechnologySchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Presence')

const RequestCounterSchema = z
  .int()
  .openapi({
    description: 'The total number of HTTP requests that this resource has done.',
    example: 73807,
    readOnly: true,
  })
  .openapi('RequestCounter')

const ResponseDefaultResourceSchema = z
  .object({
    resource: z
      .object({ id: IdReadOnlySchema.exactOptional(), url: UrlSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    status: z.int().exactOptional().openapi({ description: 'Status code', example: 200 }),
  })
  .openapi({ required: [] })
  .openapi('ResponseDefaultResource')

const ResponseEnvelopeSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of items in the response (as set in the query or by default).',
        example: 293401,
      }),
    count_current: z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum number of items available to return.', example: 100 }),
    is_limited: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Becomes false when the number of results is smaller than limit.',
        example: true,
      }),
    next_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL to the next page of items. ( null if none)',
        example: 'https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399',
      }),
    query_duration_ms: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Amount of time, in milliseconds, the request needed to complete.',
        example: 42,
      }),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseEnvelope')

const ResponseListResourceSchema = z
  .object({
    status: z.int().exactOptional().openapi({ description: 'Status code', example: 200 }),
    total: z.int().exactOptional().openapi({ description: 'Total items in the list', example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('ResponseListResource')

const RestartRequestSchema = z
  .boolean()
  .openapi({
    description: 'Set this to `true` to send a reset request for the specific resource.',
    example: true,
  })
  .openapi('RestartRequest')

const SensesSchema = z
  .object({})
  .openapi({
    description:
      'Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.',
    example: { foo: 'bar' },
    readOnly: true,
  })
  .openapi('Senses')

const SensesRequestSchema = z
  .object({})
  .openapi({
    description:
      'Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.',
    example: { foo: 'bar' },
  })
  .openapi('SensesRequest')

const SerialNumberSchema = z
  .int()
  .openapi({
    description:
      "This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.",
    example: 1337,
    readOnly: true,
  })
  .openapi('SerialNumber')

const VersionSchema = z
  .string()
  .openapi({
    description: 'Current running version of the resource.',
    example: '1.2.3',
    readOnly: true,
  })
  .openapi('Version')

const ServiceSchema = z
  .object({
    boot_count: BootCountSchema.exactOptional(),
    config: ConfigSchema.exactOptional(),
    config_request: ConfigRequestSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    name: NameSchema.exactOptional(),
    restart_request: RestartRequestSchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
    version: VersionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Service')

const SpotBaseSchema = z
  .object({
    antenna_report_locations: z
      .array(
        z
          .object({
            antenna_number: z
              .int()
              .exactOptional()
              .openapi({ description: 'Antenna number', example: 1 }),
            report_location: LocationSchema.exactOptional(),
            report_location_id: IdReadOnlySchema.exactOptional(),
            report_location_url: UrlSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'You may configure this field to an object which couples individual antenna ports to locations.',
      }),
    config: ConfigSchema.exactOptional(),
    config_request: ConfigRequestSchema.exactOptional(),
    geo_coords: GeoCoordsSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    is_online: IsOnlineSchema.exactOptional(),
    request_counter: RequestCounterSchema.exactOptional(),
    senses: SensesSchema.exactOptional(),
    senses_request: SensesRequestSchema.exactOptional(),
    serial_number: SerialNumberSchema.exactOptional(),
    status: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'An object with specific information about the spot, directly send by the spot itself when the connection is created.',
        example: { foo: 'bar' },
        readOnly: true,
      }),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpotBase')

const SpotGetSchema = SpotBaseSchema.and(
  z.xor([
    z.object({ report_location: LocationSchema.exactOptional() }).openapi({ required: [] }),
    z.object({ report_location_id: IdReadOnlySchema.exactOptional() }).openapi({ required: [] }),
    z.object({ report_location_url: UrlSchema.exactOptional() }).openapi({ required: [] }),
  ]),
).openapi('SpotGet')

const SpotListSchema = z
  .object({
    custom: CustomSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    label: LabelSchema.exactOptional(),
    list: UrlSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total amount of spots in this set', example: 2, readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('SpotList')

const SpotSetBaseSchema = z
  .object({
    created_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.",
        readOnly: true,
      }),
    id: IdReadOnlySchema.exactOptional(),
    setid: z
      .int()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Spot set unique identifier. Must be unique within a single device',
      }),
    spot_id: IdReadOnlySchema.exactOptional(),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpotSetBase')

const SpotSetTypeAnySchema = z
  .object({
    type: z
      .literal('any')
      .exactOptional()
      .openapi({ description: 'Spot set type `any`; A wildcard that matches all type of items' }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeAny')

const SpotSetTypeAreacodeSchema = z
  .object({
    area_code: z.int32().min(1).exactOptional().openapi({ description: 'Area Code' }),
    type: z
      .literal('areacode')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `areacode`; Matches Item with the same Area Code as specified by this set',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeAreacode')

const SpotSetTypeCodelengthSchema = z
  .object({
    length_bits: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The length of the item code in bits' }),
    type: z
      .literal('codelength')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `codelength`; Matches all Item codes that have the exact same length in bits as specified by this value',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeCodelength')

const SpotSetTypeCodemaskSchema = z
  .object({
    code: z.string().min(2).max(84).exactOptional().openapi({ description: 'Item code' }),
    mask: z
      .string()
      .min(2)
      .max(84)
      .exactOptional()
      .openapi({ description: 'Mask which part of the code should match.' }),
    type: z
      .literal('codemask')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `codemask`; Matches all Items that return true as a result of using the following equation ((Item.code & Item.mask) == (Set.code & Set.mask)).',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeCodemask')

const SpotSetTypeCoderangeSchema = z
  .object({
    end: z
      .string()
      .min(2)
      .max(84)
      .exactOptional()
      .openapi({ description: 'End of the code range' }),
    start: z
      .string()
      .min(2)
      .max(84)
      .exactOptional()
      .openapi({ description: 'Start of the code range' }),
    type: z
      .literal('coderange')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `coderange`; Matches all Items codes if within specified range as specified by this set',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeCoderange')

const SpotSetTypeExtendedSchema = z
  .object({
    key: z
      .string()
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({ description: 'Extended data property key' }),
    operator: z
      .enum(['gt', 'gte', 'eq', 'in', 'ne', 'lt', 'lte', 'starts', 'ends'])
      .exactOptional()
      .openapi({ description: 'Operator' }),
    type: z
      .literal('extended')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set',
      }),
    value: z
      .xor([
        z.string().min(2).max(100),
        z.string().min(1).max(100),
        z.float32(),
        z.int32(),
        z.boolean(),
      ])
      .exactOptional()
      .openapi({ description: 'Extended data property value.' }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeExtended')

const SpotSetTypeListSchema = z
  .object({
    itemlist_id: IdSchema.exactOptional(),
    limit: z
      .int32()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'Number, list limit, default `1000` if not specified.' }),
    mutation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last mutation that was synchronized to the device. This is used for internal synchronization between the device and the server.',
        readOnly: true,
      }),
    restrictions: z
      .object({
        allow_server_edit: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Server can change this set.' }),
        allow_spot_edit: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Spots can change set, differences from the brain server will be merged with the device',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Restrict changes spot and brain.', required: [] }),
    sha1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The sha1 checksum of the list. This will change when the list is mutated.',
        readOnly: true,
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total amount of items in this set', example: 2, readOnly: true }),
    type: z
      .literal('list')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `list`; List of items. Matches this set if Item is part of this list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeList')

const SpotSetTypeProtocolSchema = z
  .object({
    item_protocol: ItemProtocolSchema.exactOptional(),
    type: z
      .literal('protocol')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `protocol`; Matches Items with the same Protocol as specified by this set.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeProtocol')

const SpotSetTypeTechnologySchema = z
  .object({
    item_technology: TechnologySchema.exactOptional(),
    type: z
      .literal('technology')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `technology`; Matches Items with the same Technology as specified by this set.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeTechnology')

const SpotSetTypeTypeSchema = z
  .object({
    item_type: ItemTypeSchema.exactOptional(),
    type: z
      .literal('type')
      .exactOptional()
      .openapi({
        description:
          'Spot set type `type`; Matches Items with the same Type as specified by this set.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetTypeType')

const SpotSetSchema = SpotSetBaseSchema.and(
  z.xor([
    SpotSetTypeAnySchema,
    SpotSetTypeAreacodeSchema,
    SpotSetTypeCodelengthSchema,
    SpotSetTypeCodemaskSchema,
    SpotSetTypeCoderangeSchema,
    SpotSetTypeExtendedSchema,
    SpotSetTypeListSchema,
    SpotSetTypeProtocolSchema,
    SpotSetTypeTechnologySchema,
    SpotSetTypeTypeSchema,
  ]),
).openapi('SpotSet')

const SpotSetCreateSchema = SpotSetBaseSchema.and(
  z.xor([
    SpotSetTypeAreacodeSchema,
    SpotSetTypeCodelengthSchema,
    SpotSetTypeCodemaskSchema,
    SpotSetTypeCoderangeSchema,
    SpotSetTypeExtendedSchema,
    SpotSetTypeListSchema,
    SpotSetTypeProtocolSchema,
    SpotSetTypeTechnologySchema,
    SpotSetTypeTypeSchema,
  ]),
).openapi('SpotSetCreate')

const SpotSetUpdateSchema = z
  .object({
    delete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Request to delete a set. Remove request needs to be synchronized to the device, so it may take some time before the resource is being removed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpotSetUpdate')

const SpotUpdateSchema = SpotBaseSchema.and(
  z.object({ report_location: IdSchema.exactOptional() }).openapi({ required: [] }),
).openapi('SpotUpdate')

const SubscriptionSchema = z
  .object({
    custom: CustomSchema.exactOptional(),
    database_hold_time_h: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.',
        example: 2,
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Additional field to add some notes about this subscription.',
        example: 'Item events',
      }),
    events_url: UrlSchema.exactOptional(),
    id: IdReadOnlySchema.exactOptional(),
    populate_events: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.',
      }),
    target_delivery_last_failure: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'If `target_url` is set or has been set before, and delivery to the target URL failed at least once, this contains debugging information about the nature of the most recent failure.',
        readOnly: true,
      }),
    target_delivery_status: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'If `target_url` is set, `target_delivery_status.ok` will be `true` or `false` depending on whether events are being succesfully delivered. `target_delivery_status.since` indicates when t his status last changed.',
        readOnly: true,
      }),
    target_retry: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.',
      }),
    target_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).",
      }),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeUpdatedSchema.exactOptional(),
    topic_filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information',
        example: 'items/#',
      }),
    url: UrlSchema.exactOptional(),
    verify_target_certificate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the `target_url` endpoint TLS certificate is verified to be valid.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Subscription')

const UserSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address', example: 'user@intellifi.nl' }),
    first_name: z.string().exactOptional().openapi({ description: 'First name', example: 'Foo' }),
    id: IdReadOnlySchema.exactOptional(),
    is_admin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this is an administrator.' }),
    is_locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether or not this user is locked and can't change the password.",
      }),
    last_name: z.string().exactOptional().openapi({ description: 'Last name', example: 'Bar' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Password of the user', example: 'password1', writeOnly: true }),
    time_created: TimeCreatedSchema.exactOptional(),
    time_updated: TimeCreatedSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const _200OkDeleteResponse = {
  description: 'A JSON object containing the deleted resource',
  content: { 'application/json': { schema: ResponseDefaultResourceSchema } },
}

const _200OkDeleteListResponse = {
  description: 'A JSON object containing the status and the total amount of items in the list',
  content: { 'application/json': { schema: ResponseListResourceSchema } },
}

const _200OkPutResponse = {
  description: 'A JSON object containing the modified resource',
  content: { 'application/json': { schema: ResponseDefaultResourceSchema } },
}

const OkPostResponse = {
  description: 'A JSON object containing the newly added resource',
  content: { 'application/json': { schema: ResponseDefaultResourceSchema } },
}

const OkPostListResponse = {
  description:
    'A JSON object containing the status and the total amount of items in the newly added list',
  content: { 'application/json': { schema: ResponseListResourceSchema } },
}

const AfterParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.',
      example: '2016-01-27T08:38:55.255Z',
      in: 'query',
      name: 'after',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const AfterCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits directly on `code_hex`. Marks the start of a range, optionally use `before_code` to set the end. Result output excludes the given `code_hex` value.',
      example: 'e20000000000000000000000',
      in: 'query',
      name: 'after_code',
      schema: { type: 'string' },
      required: false,
    },
  })

const AfterIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.',
      example: '56a88364e783152127d15340',
      in: 'query',
      name: 'after_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const BeforeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.',
      example: '2016-01-27T08:38:55.255Z',
      in: 'query',
      name: 'before',
      schema: { format: 'dateTime', type: 'string' },
      required: false,
    },
  })

const BeforeCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits directly on `code_hex`. Marks the end of a range, optionally use `after_code` to set the start. Result output excludes the given `code_hex` value.',
      example: 'e20000000000000000001fff',
      in: 'query',
      name: 'before_code',
      schema: { type: 'string' },
      required: false,
    },
  })

const BeforeIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.',
      example: '56a88364e783152127d15340',
      in: 'query',
      name: 'before_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const CodeHexParamsSchema = CodeHexSchema.openapi({
  param: {
    description:
      'Filter based on the hexadecimal string representation of the item. Supports wildcards: `*`.',
    examples: {
      $: { value: '*42*' },
      'multi-wildcard': {
        summary:
          'Returns resources whose `code_hex` contains value like `e20055550000000000001fff`.',
        value: '*5555*',
      },
      simple: {
        summary: 'Returns resources whose `code_hex` is equal to value.',
        value: 'e20000000000000000001fff',
      },
      wildcard: {
        summary:
          'Returns resources whose `code_hex` ends in value like `e20000000000000000004444`.',
        value: '*4444',
      },
    },
    in: 'query',
    name: 'code_hex',
    schema: { $ref: '#/components/schemas/CodeHex' },
    required: false,
  },
}).exactOptional()

const FromParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.',
      example: '2016-01-27T08:38:55.255Z',
      in: 'query',
      name: 'from',
      schema: { format: 'dateTime', type: 'string' },
      required: false,
    },
  })

const FromCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `code_hex`. Marks the start of a range, optionally use `until_code` to set the end. Result output includes the given `code_hex` value.',
      example: 'e20000000000000000000000',
      in: 'query',
      name: 'from_code',
      schema: { type: 'string' },
      required: false,
    },
  })

const FromIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.',
      example: '56a88364e783152127d15340',
      in: 'query',
      name: 'from_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const IdParamsSchema = IdReadOnlySchema.openapi({
  param: {
    description: 'Unique identifier',
    example: '5b8d0b717503c445552a1865',
    in: 'query',
    name: 'id',
    schema: { $ref: '#/components/schemas/IdReadOnly' },
    required: false,
  },
}).exactOptional()

const IdOnlyParamsSchema = z
  .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      allowEmptyValue: true,
      description:
        'Removes `url` fields from output and shows `_id` instead of `_url` in references.',
      in: 'query',
      name: 'id_only',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const IsOnlineParamsSchema = z
  .preprocess(
    ((read) => (val: unknown) => {
      const result = read.safeParse(val)
      return result.success ? result.data : val
    })(z.stringbool()),
    IsOnlineSchema.openapi({
      param: {
        description: 'Filter based on the online status.',
        example: true,
        in: 'query',
        name: 'is_online',
        schema: { $ref: '#/components/schemas/IsOnline' },
        required: false,
      },
    }),
  )
  .exactOptional()

const IsPresentParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Only show items which are present of not.',
      example: true,
      in: 'query',
      name: 'is_present',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const ItemParamsSchema = IdReadOnlySchema.openapi({
  param: {
    description: 'Filter based on the item',
    in: 'query',
    name: 'item',
    schema: { $ref: '#/components/schemas/IdReadOnly' },
    required: false,
  },
}).exactOptional()

const LabelParamsSchema = LabelSchema.openapi({
  param: {
    description: 'Filter based on the label value. Supports wildcards: `*`',
    example: '*foo*',
    in: 'query',
    name: 'label',
    schema: { $ref: '#/components/schemas/Label' },
    required: false,
  },
}).exactOptional()

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.',
      example: 5,
      in: 'query',
      name: 'limit',
      schema: { default: 100, type: 'integer' },
      required: false,
    },
  })

const LocationParamsSchema = IdReadOnlySchema.openapi({
  param: {
    description: 'Filter based on the location',
    in: 'query',
    name: 'location',
    schema: { $ref: '#/components/schemas/IdReadOnly' },
    required: false,
  },
}).exactOptional()

const LocationRuleTypeParamsSchema = LocationRuleTypeSchema.openapi({
  param: {
    description: 'Filter based on the type of location rule.',
    in: 'query',
    name: 'type',
    schema: { $ref: '#/components/schemas/LocationRuleType' },
    required: false,
  },
}).exactOptional()

const MetadataParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`',
      in: 'query',
      name: 'metadata',
      schema: { type: 'string' },
      required: false,
    },
  })

const MoveCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    MoveCountSchema.openapi({
      param: {
        description: 'Filter based on move count',
        example: 5342,
        in: 'query',
        name: 'move_count',
        schema: { $ref: '#/components/schemas/MoveCount' },
        required: false,
      },
    }),
  )
  .exactOptional()

const NameParamsSchema = NameSchema.openapi({
  param: {
    description: 'Filter based on the name of the resource. Supports wildcards: `*`',
    examples: {
      'multi-wildcard': {
        summary: 'Returns resources whose `name` contains `foo` like `barfoobar`.',
        value: '*foo*',
      },
      simple: { summary: 'Returns resources whose `name` is equal to `foo`.', value: 'foo' },
      wildcard: {
        summary: 'Returns resources whose `name` ends in `foo` like `barfoo`.',
        value: '*foo',
      },
    },
    in: 'query',
    name: 'name',
    schema: { $ref: '#/components/schemas/Name' },
    required: false,
  },
}).exactOptional()

const PathIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier',
      example: '5b8d0b717503c445552a1865',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const PopulateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.',
      example: 'location,item',
      in: 'query',
      name: 'populate',
      schema: { type: 'string' },
      required: false,
    },
  })

const ProtocolParamsSchema = ItemProtocolSchema.openapi({
  param: {
    description: 'Filter based on the detected protocol of an item.',
    example: 'epcgen2',
    in: 'query',
    name: 'protocol',
    schema: { $ref: '#/components/schemas/ItemProtocol' },
    required: false,
  },
}).exactOptional()

const ProximityParamsSchema = ProximitySchema.openapi({
  param: {
    description: 'Filter based on the proximity.',
    example: 'immediate',
    in: 'query',
    name: 'proximity',
    schema: { $ref: '#/components/schemas/Proximity' },
    required: false,
  },
}).exactOptional()

const RequestCounterParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    RequestCounterSchema.openapi({
      param: {
        description: 'Filter based on the amount of request made',
        example: 1234,
        in: 'query',
        name: 'request_counter',
        schema: { $ref: '#/components/schemas/RequestCounter' },
        required: false,
      },
    }),
  )
  .exactOptional()

const ResultsOnlyParamsSchema = z
  .preprocess((val) => (val === '' ? undefined : val), z.stringbool().default(false))
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      allowEmptyValue: true,
      description:
        'Removes response envelope with information about query, only sends back a JSON array with the applicable resources.',
      in: 'query',
      name: 'results_only',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const RuleEnabledParamsSchema = z
  .preprocess(
    ((read) => (val: unknown) => {
      const result = read.safeParse(val)
      return result.success ? result.data : val
    })(z.stringbool()),
    RuleEnabledSchema.openapi({
      param: {
        description: 'Filter based on the `enabled` property.',
        in: 'query',
        name: 'enabled',
        schema: { $ref: '#/components/schemas/RuleEnabled' },
        required: false,
      },
    }),
  )
  .exactOptional()

const SelectParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.',
      examples: {
        mix: {
          summary:
            'Select `type`, and `label` from the populated resource `location`. Note use together with `populate=location` to expand a `location` reference into an actual resource, and allows the query to work on populated resources.',
          value: 'type,location.label',
        },
        populated: {
          summary:
            'Select `label` and `metadata` from the populated resource `location`. Note use together with `populate=location` to expand a `location` reference into an actual resource, and allows the query to work on populated resources.',
          value: 'location.label,location.metadata',
        },
        simple: { summary: 'Select `type` and `technology`.', value: 'type,technology' },
      },
      in: 'query',
      name: 'select',
      schema: { type: 'string' },
      required: false,
    },
  })

const SerialNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    SerialNumberSchema.openapi({
      param: {
        description: 'Filter based on the serial number.',
        example: 1337,
        in: 'query',
        name: 'serial_number',
        schema: { $ref: '#/components/schemas/SerialNumber' },
        required: false,
      },
    }),
  )
  .exactOptional()

const SetsParamsSchema = IdReadOnlySchema.openapi({
  param: {
    description: 'Filter based on the set the resource is in.',
    example: '5b8d0b717503c445552a1865',
    in: 'query',
    name: 'sets',
    schema: { $ref: '#/components/schemas/IdReadOnly' },
    required: false,
  },
}).exactOptional()

const SortParamsSchema = z
  .string()
  .default('-id')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).',
      example: '-move_count,technology',
      in: 'query',
      name: 'sort',
      schema: { default: '-id', type: 'string' },
      required: false,
    },
  })

const TechnologyParamsSchema = TechnologySchema.openapi({
  param: {
    description: 'Filter based on the detected technology of an item.',
    example: 'rfid',
    in: 'query',
    name: 'technology',
    schema: { $ref: '#/components/schemas/Technology' },
    required: false,
  },
}).exactOptional()

const TextParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.',
      example: 'penguin',
      in: 'query',
      name: 'text',
      schema: { type: 'string' },
      required: false,
    },
  })

const TimeCreatedParamsSchema = TimeCreatedSchema.openapi({
  param: {
    description: 'Filter on the time the resource was created.',
    example: '2018-08-30T09:51:59.737Z',
    in: 'query',
    name: 'time_created',
    schema: { $ref: '#/components/schemas/TimeCreated' },
    required: false,
  },
}).exactOptional()

const TimeEventParamsSchema = TimeExpireSchema.openapi({
  param: {
    description: 'Filter on the time the event was generated on the device.',
    example: '2018-08-30T09:51:59.737Z',
    in: 'query',
    name: 'time_event',
    schema: { $ref: '#/components/schemas/TimeExpire' },
    required: false,
  },
}).exactOptional()

const TimeExpireParamsSchema = TimeExpireSchema.openapi({
  param: {
    description: 'Filter on the time the event will expire.',
    example: '2018-08-30T09:51:59.737Z',
    in: 'query',
    name: 'time_expire',
    schema: { $ref: '#/components/schemas/TimeExpire' },
    required: false,
  },
}).exactOptional()

const TimeLastPresentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter based on the time last present',
      example: '2018-09-03T10:23:46.596Z',
      in: 'query',
      name: 'time_last_present',
      schema: { type: 'string' },
      required: false,
    },
  })

const TimeMovedParamsSchema = TimeMovedSchema.openapi({
  param: {
    description: 'Filter based on time last moved',
    example: '2018-08-30T09:51:59.737Z',
    in: 'query',
    name: 'time_moved',
    schema: { $ref: '#/components/schemas/TimeMoved' },
    required: false,
  },
}).exactOptional()

const TimeUpdatedParamsSchema = TimeUpdatedSchema.openapi({
  param: {
    description: 'Filter on the time the resource was last updated',
    example: '2018-08-30T09:51:59.737Z',
    in: 'query',
    name: 'time_updated',
    schema: { $ref: '#/components/schemas/TimeUpdated' },
    required: false,
  },
}).exactOptional()

const TimeoutSParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.',
      example: 60,
      in: 'query',
      name: 'timeout_s',
      schema: { type: 'number' },
      required: false,
    },
  })

const TopicActionParamsSchema = EventTopicActionSchema.openapi({
  param: {
    description: 'Filter on the topic action',
    example: 'created',
    in: 'query',
    name: 'topic.action',
    schema: { $ref: '#/components/schemas/EventTopicAction' },
    required: false,
  },
}).exactOptional()

const TopicResourceParamsSchema = IdReadOnlySchema.openapi({
  param: {
    description: 'Filter on the topic resource id',
    example: '5b7d6cbd7503c445552a1664',
    in: 'query',
    name: 'topic.resource',
    schema: { $ref: '#/components/schemas/IdReadOnly' },
    required: false,
  },
}).exactOptional()

const TopicResourceTypeParamsSchema = EventTopicResourceTypeSchema.openapi({
  param: {
    description: 'Filter on the topic resource type',
    example: 'items',
    in: 'query',
    name: 'topic.resource_type',
    schema: { $ref: '#/components/schemas/EventTopicResourceType' },
    required: false,
  },
}).exactOptional()

const TypeParamsSchema = ItemTypeSchema.openapi({
  param: {
    description: 'Filter based on the type of an item.',
    example: 'tag',
    in: 'query',
    name: 'type',
    schema: { $ref: '#/components/schemas/ItemType' },
    required: false,
  },
}).exactOptional()

const UntilParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.',
      example: '2016-01-27T08:38:55.255Z',
      in: 'query',
      name: 'until',
      schema: { format: 'dateTime', type: 'string' },
      required: false,
    },
  })

const UntilCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `code_hex`. Marks the end of a range, optionally use `from_code` to set the start. Result output includes the given `code_hex` value.',
      example: 'e20000000000000000001ffff',
      in: 'query',
      name: 'until_code',
      schema: { type: 'string' },
      required: false,
    },
  })

const UntilIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.',
      example: '56a88364e783152127d15340',
      in: 'query',
      name: 'until_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const ItemListRequestBody = {
  description: 'A JSON object containing item list information',
  content: { 'application/json': { schema: ItemListSchema } },
  required: true,
}

const KeyRequestBody = {
  description: 'A JSON object containing key information',
  content: { 'application/json': { schema: KeySchema } },
  required: true,
}

const LocationRequestBody = {
  description: 'A JSON object containing location information',
  content: { 'application/json': { schema: LocationSchema } },
  required: true,
}

const SpotListRequestBody = {
  description: 'A JSON object containing spot list information',
  content: { 'application/json': { schema: SpotListSchema } },
  required: true,
}

const SpotSetRequestBody = {
  description: 'A JSON object containing spot set information',
  content: { 'application/json': { schema: SpotSetCreateSchema } },
  required: true,
}

const SubscriptionRequestBody = {
  description: 'A JSON object containing sibscription information',
  content: { 'application/json': { schema: SubscriptionSchema } },
  required: true,
}

const UserRequestBody = {
  description: 'A JSON object containing user information',
  content: { 'application/json': { schema: UserSchema } },
  required: true,
}

const CookieSidSecurityScheme = {
  description:
    "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
  in: 'cookie',
  name: 'brain.sid',
  type: 'apiKey',
}

const HeaderApiKeySecurityScheme = {
  description:
    'Applications are required to provide an API key with every HTTP request\nto the Web API.\n',
  in: 'header',
  name: 'X-Api-Key',
  type: 'apiKey',
}

const QueryApiKeySecurityScheme = {
  description:
    'Applications are required to provide an API key with every HTTP request\nto the Web API.\n',
  in: 'query',
  name: 'key',
  type: 'apiKey',
}

export const getAuthinfoRoute = createRoute({
  method: 'get',
  path: '/authinfo',
  tags: ['authinfo'],
  summary: 'Authentication information',
  operationId: 'getAuthinfo',
  responses: {
    200: {
      description: 'A JSON object containing the authentication information',
      content: {
        'application/json': {
          schema: z
            .object({
              api_key_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference to the static API key (/api/keys) used to authenticate this request (when auth_method=static_api_key)',
                  example: '5b7d6cbd7503c445552a1664',
                }),
              auth_method: z
                .enum(['user_session', 'internal', 'static_api_key'])
                .exactOptional()
                .openapi({ description: 'What kind of authentication was used' }),
              authenticated: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not you are authenticated' }),
              permissions: z
                .object({
                  mutate: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether or not this session can mutate resources' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              url: UrlSchema.exactOptional(),
              user_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Reference to the user account (/api/users) used to authenticate this request (when auth_method=user_session)',
                  example: '5b7d6cbd7503c445552a1664',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getBlobsRoute = createRoute({
  method: 'get',
  path: '/blobs',
  tags: ['blobs'],
  summary: 'Get all binary large objects (blob)',
  operationId: 'getBlobs',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the hash of the blob.',
            in: 'query',
            name: 'hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      blob_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the unique blob_key',
            in: 'query',
            name: 'blob_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      content_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the content type of the blob.',
            in: 'query',
            name: 'content_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the filename of the blob.',
            in: 'query',
            name: 'filename',
            schema: { type: 'string' },
            required: false,
          },
        }),
      time_last_accessed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the last time the blob was accessed',
            in: 'query',
            name: 'time_last_accessed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of blobs',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(BlobSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postBlobsRoute = createRoute({
  method: 'post',
  path: '/blobs',
  tags: ['blobs'],
  summary: 'Create binary large object (blob) metadata',
  operationId: 'addBlob',
  request: {
    body: {
      description: 'A JSON object containing blob information',
      content: { 'application/json': { schema: BlobSchema } },
      required: true,
    },
  },
  responses: { 201: OkPostResponse },
})

export const getBlobsIdRoute = createRoute({
  method: 'get',
  path: '/blobs/{id}',
  tags: ['blobs'],
  summary: 'Get binary large object (blob)',
  operationId: 'getBlobMetadataById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the blob',
      content: { 'application/json': { schema: BlobSchema } },
    },
  },
})

export const deleteBlobsIdRoute = createRoute({
  method: 'delete',
  path: '/blobs/{id}',
  tags: ['blobs'],
  summary: 'Delete binary large object (blob)',
  operationId: 'deleteBlob',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getBlobsIdDownloadFilenameRoute = createRoute({
  method: 'get',
  path: '/blobs/{id}/download/{filename}',
  tags: ['blobs'],
  summary: 'Download a binary large object (blob)',
  operationId: 'getBlobById',
  request: {
    params: z.object({
      id: PathIdParamsSchema,
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Filename of the blob.',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The stored binary blob',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const postBlobsIdUploadRoute = createRoute({
  method: 'post',
  path: '/blobs/{id}/upload',
  tags: ['blobs'],
  summary: 'Create binary large object (blob)',
  operationId: 'uploadBlobById',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Upload was successful' } },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['events'],
  summary: 'Get all events',
  operationId: 'getEvents',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      'topic.resource_type': TopicResourceTypeParamsSchema,
      'topic.action': TopicActionParamsSchema,
      'topic.resource': TopicResourceParamsSchema,
      time_event: TimeEventParamsSchema,
      time_expire: TimeExpireParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of events',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(EventSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getEventsIdRoute = createRoute({
  method: 'get',
  path: '/events/{id}',
  tags: ['events'],
  summary: 'Get event',
  operationId: 'getEventById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the event',
      content: { 'application/json': { schema: EventSchema } },
    },
  },
})

export const getItemsRoute = createRoute({
  method: 'get',
  path: '/items',
  tags: ['items'],
  summary: 'Get all items',
  operationId: 'getItems',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      after_code: AfterCodeParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      before_code: BeforeCodeParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      from_code: FromCodeParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      until_code: UntilCodeParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      code_hex: CodeHexParamsSchema,
      is_present: IsPresentParamsSchema,
      label: LabelParamsSchema,
      location: LocationParamsSchema,
      metadata: MetadataParamsSchema,
      move_count: MoveCountParamsSchema,
      protocol: ProtocolParamsSchema,
      sets: SetsParamsSchema,
      technology: TechnologyParamsSchema,
      text: TextParamsSchema,
      time_last_present: TimeLastPresentParamsSchema,
      time_moved: TimeMovedParamsSchema,
      type: TypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of items',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(ItemSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postItemsRoute = createRoute({
  method: 'post',
  path: '/items',
  tags: ['items'],
  summary: 'Create item',
  operationId: 'addItem',
  request: {
    body: {
      description: 'A JSON object containing item information',
      content: { 'application/json': { schema: ItemSchema } },
      required: true,
    },
  },
  responses: { 200: OkPostResponse },
})

export const getItemsIdRoute = createRoute({
  method: 'get',
  path: '/items/{id}',
  tags: ['items'],
  summary: 'Get item',
  operationId: 'getItemById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the items',
      content: { 'application/json': { schema: ItemSchema } },
    },
  },
})

export const putItemsIdRoute = createRoute({
  method: 'put',
  path: '/items/{id}',
  tags: ['items'],
  summary: 'Update existing item',
  operationId: 'updateItem',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON object containing item information',
      content: { 'application/json': { schema: ItemUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const deleteItemsIdRoute = createRoute({
  method: 'delete',
  path: '/items/{id}',
  tags: ['items'],
  summary: 'Delete item',
  operationId: 'deleteItem',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getKeysRoute = createRoute({
  method: 'get',
  path: '/keys',
  tags: ['keys'],
  summary: 'Get all keys',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'getKeys',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the secret token.',
            in: 'query',
            name: 'secret',
            schema: { type: 'string' },
            required: false,
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the label.',
            in: 'query',
            name: 'label',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_read_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on read only status.',
            in: 'query',
            name: 'is_read_only',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of keys',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(KeySchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
  security: [{ CookieSid: [] }],
})

export const postKeysRoute = createRoute({
  method: 'post',
  path: '/keys',
  tags: ['keys'],
  summary: 'Create key',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'addKey',
  request: { body: KeyRequestBody },
  responses: { 201: OkPostResponse },
  security: [{ CookieSid: [] }],
})

export const getKeysIdRoute = createRoute({
  method: 'get',
  path: '/keys/{id}',
  tags: ['keys'],
  summary: 'Get key',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'getKeyById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the key',
      content: { 'application/json': { schema: KeySchema } },
    },
  },
  security: [{ CookieSid: [] }],
})

export const putKeysIdRoute = createRoute({
  method: 'put',
  path: '/keys/{id}',
  tags: ['keys'],
  summary: 'Update existing key',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'updateKey',
  request: { params: z.object({ id: PathIdParamsSchema }), body: KeyRequestBody },
  responses: { 200: _200OkPutResponse },
  security: [{ CookieSid: [] }],
})

export const deleteKeysIdRoute = createRoute({
  method: 'delete',
  path: '/keys/{id}',
  tags: ['keys'],
  summary: 'Delete key',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'deleteKey',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
  security: [{ CookieSid: [] }],
})

export const getKvpairsRoute = createRoute({
  method: 'get',
  path: '/kvpairs',
  tags: ['kvpairs'],
  summary: 'Get all key-value pairs',
  operationId: 'getKvPairs',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      kv_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the key-value pair key value.',
            in: 'query',
            name: 'kv_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of key-value pairs',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(KeyValuePairSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postKvpairsRoute = createRoute({
  method: 'post',
  path: '/kvpairs',
  tags: ['kvpairs'],
  summary: 'Create key-value pair',
  operationId: 'addKvPairs',
  request: {
    body: {
      description: 'A JSON object containing Key-value information',
      content: { 'application/json': { schema: KeyValuePairSchema } },
      required: true,
    },
  },
  responses: { 201: OkPostResponse },
})

export const getKvpairsIdRoute = createRoute({
  method: 'get',
  path: '/kvpairs/{id}',
  tags: ['kvpairs'],
  summary: 'Get key-value pair',
  operationId: 'getKvPairsById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the subscription',
      content: { 'application/json': { schema: KeyValuePairSchema } },
    },
  },
})

export const putKvpairsIdRoute = createRoute({
  method: 'put',
  path: '/kvpairs/{id}',
  tags: ['kvpairs'],
  summary: 'Update existing Key-value pair',
  operationId: 'updateKvPair',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON object containing Key-value information',
      content: { 'application/json': { schema: KeyValuePairUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const deleteKvpairsIdRoute = createRoute({
  method: 'delete',
  path: '/kvpairs/{id}',
  tags: ['kvpairs'],
  summary: 'Delete key-value pair',
  operationId: 'deleteKvPair',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getLocationrulesRoute = createRoute({
  method: 'get',
  path: '/locationrules',
  tags: ['locationrules'],
  summary: 'Get all location rules',
  operationId: 'getLocationRules',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      label: LabelParamsSchema,
      type: LocationRuleTypeParamsSchema,
      enabled: RuleEnabledParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of location rules',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(LocationRuleSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postLocationrulesRoute = createRoute({
  method: 'post',
  path: '/locationrules',
  tags: ['locationrules'],
  summary: 'Create location rule',
  operationId: 'addLocationRule',
  request: {
    body: {
      description: 'A JSON object containing the location rule',
      content: { 'application/json': { schema: LocationRuleUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: OkPostResponse },
})

export const getLocationrulesIdRoute = createRoute({
  method: 'get',
  path: '/locationrules/{id}',
  tags: ['locationrules'],
  summary: 'Get location rule',
  operationId: 'getLocationRuleById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the location rule',
      content: { 'application/json': { schema: LocationRuleSchema } },
    },
  },
})

export const putLocationrulesIdRoute = createRoute({
  method: 'put',
  path: '/locationrules/{id}',
  tags: ['locationrules'],
  summary: 'Update existing location rule',
  operationId: 'updateLocationRule',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON object containing new properties',
      content: { 'application/json': { schema: LocationRuleUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const deleteLocationrulesIdRoute = createRoute({
  method: 'delete',
  path: '/locationrules/{id}',
  tags: ['locationrules'],
  summary: 'Delete location rule',
  operationId: 'deleteLocationRule',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getLocationsRoute = createRoute({
  method: 'get',
  path: '/locations',
  tags: ['locations'],
  summary: 'Get all locations',
  operationId: 'getLocations',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      label: LabelParamsSchema,
      metadata: MetadataParamsSchema,
      text: TextParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of locations',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(LocationSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postLocationsRoute = createRoute({
  method: 'post',
  path: '/locations',
  tags: ['locations'],
  summary: 'Create location',
  operationId: 'addLocation',
  request: { body: LocationRequestBody },
  responses: { 201: OkPostResponse },
})

export const getLocationsIdRoute = createRoute({
  method: 'get',
  path: '/locations/{id}',
  tags: ['locations'],
  summary: 'Get location',
  operationId: 'getLocationById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the location',
      content: { 'application/json': { schema: LocationSchema } },
    },
  },
})

export const putLocationsIdRoute = createRoute({
  method: 'put',
  path: '/locations/{id}',
  tags: ['locations'],
  summary: 'Update existing location',
  operationId: 'updateLocation',
  request: { params: z.object({ id: PathIdParamsSchema }), body: LocationRequestBody },
  responses: { 200: _200OkPutResponse },
})

export const deleteLocationsIdRoute = createRoute({
  method: 'delete',
  path: '/locations/{id}',
  tags: ['locations'],
  summary: 'Delete location',
  operationId: 'deleteLocation',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getPresencesRoute = createRoute({
  method: 'get',
  path: '/presences',
  tags: ['presences'],
  summary: 'Get all presences',
  operationId: 'getPresences',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      item: ItemParamsSchema,
      location: LocationParamsSchema,
      proximity: ProximityParamsSchema,
      technology: TechnologyParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of presences',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(PresenceSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getPresencesIdRoute = createRoute({
  method: 'get',
  path: '/presences/{id}',
  tags: ['presences'],
  summary: 'Get presence',
  operationId: 'getPresenceById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the presence',
      content: { 'application/json': { schema: PresenceSchema } },
    },
  },
})

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  tags: ['services'],
  summary: 'Get all services',
  operationId: 'getServices',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      name: NameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of services',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(ServiceSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getServicesIdRoute = createRoute({
  method: 'get',
  path: '/services/{id}',
  tags: ['services'],
  summary: 'Get service',
  operationId: 'getServiceById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the service',
      content: { 'application/json': { schema: ServiceSchema } },
    },
  },
})

export const putServicesIdRoute = createRoute({
  method: 'put',
  path: '/services/{id}',
  tags: ['services'],
  summary: 'Update existing service',
  operationId: 'updateService',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON object containing service information',
      content: { 'application/json': { schema: ServiceSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const getSetsItemlistsRoute = createRoute({
  method: 'get',
  path: '/sets/itemlists',
  tags: ['sets'],
  summary: 'Get all item lists',
  operationId: 'getItemLists',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      label: LabelParamsSchema,
      metadata: MetadataParamsSchema,
      text: TextParamsSchema,
      total: z
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
          param: {
            description: 'Filter based on the total amount of items in the list',
            example: 2,
            in: 'query',
            name: 'total',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sha1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The sha1 checksum of the list. This will change when the list is mutated.',
            example: '92cfceb39d57d914ed8b14d0e37643de0797ae56',
            in: 'query',
            name: 'sha1',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of item lists',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(ItemListSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postSetsItemlistsRoute = createRoute({
  method: 'post',
  path: '/sets/itemlists',
  tags: ['sets'],
  summary: 'Create item list',
  operationId: 'addItemList',
  request: { body: ItemListRequestBody },
  responses: { 201: OkPostResponse },
})

export const getSetsItemlistsIdRoute = createRoute({
  method: 'get',
  path: '/sets/itemlists/{id}',
  tags: ['sets'],
  summary: 'Get item list',
  operationId: 'getItemListById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the item list',
      content: { 'application/json': { schema: ItemListSchema } },
    },
  },
})

export const putSetsItemlistsIdRoute = createRoute({
  method: 'put',
  path: '/sets/itemlists/{id}',
  tags: ['sets'],
  summary: 'Update existing item list',
  operationId: 'updateItemList',
  request: { params: z.object({ id: PathIdParamsSchema }), body: ItemListRequestBody },
  responses: { 200: _200OkPutResponse },
})

export const deleteSetsItemlistsIdRoute = createRoute({
  method: 'delete',
  path: '/sets/itemlists/{id}',
  tags: ['sets'],
  summary: 'Delete item list',
  operationId: 'deleteItemSet',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getSetsItemlistsIdIdsRoute = createRoute({
  method: 'get',
  path: '/sets/itemlists/{id}/ids',
  tags: ['sets'],
  summary: 'Get item ids for this list',
  operationId: 'getItemListIdsById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'An array object containing the item ids for this list',
      content: { 'application/json': { schema: ListOfItemIdsSchema } },
    },
  },
})

export const postSetsItemlistsIdIdsRoute = createRoute({
  method: 'post',
  path: '/sets/itemlists/{id}/ids',
  tags: ['sets'],
  summary: 'Add items to an existing list',
  operationId: 'addItemIdsList',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON array containing item ids',
      content: { 'application/json': { schema: ListOfItemIdsSchema } },
      required: true,
    },
  },
  responses: { 200: OkPostListResponse },
})

export const deleteSetsItemlistsIdIdsItemIdRoute = createRoute({
  method: 'delete',
  path: '/sets/itemlists/{id}/ids/{itemId}',
  tags: ['sets'],
  summary: 'Delete item from list',
  operationId: 'deleteItemIdFromItemList',
  request: {
    params: z.object({
      id: PathIdParamsSchema,
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'Item ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: _200OkDeleteListResponse },
})

export const getSetsSpotlistsRoute = createRoute({
  method: 'get',
  path: '/sets/spotlists',
  tags: ['sets'],
  summary: 'Get all spot lists',
  operationId: 'getSpotLists',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      label: LabelParamsSchema,
      metadata: MetadataParamsSchema,
      text: TextParamsSchema,
      total: z
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
          param: {
            description: 'Filter based on the total amount of spots in the list',
            example: 2,
            in: 'query',
            name: 'total',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of spot lists',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(SpotListSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postSetsSpotlistsRoute = createRoute({
  method: 'post',
  path: '/sets/spotlists',
  tags: ['sets'],
  summary: 'Create spot list',
  operationId: 'addSpotList',
  request: { body: ItemListRequestBody },
  responses: { 201: OkPostResponse },
})

export const getSetsSpotlistsIdRoute = createRoute({
  method: 'get',
  path: '/sets/spotlists/{id}',
  tags: ['sets'],
  summary: 'Info for a specific spot list',
  operationId: 'getSpotListById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the spot list',
      content: { 'application/json': { schema: SpotListSchema } },
    },
  },
})

export const putSetsSpotlistsIdRoute = createRoute({
  method: 'put',
  path: '/sets/spotlists/{id}',
  tags: ['sets'],
  summary: 'Update existing spot list',
  operationId: 'updateSpotList',
  request: { params: z.object({ id: PathIdParamsSchema }), body: SpotListRequestBody },
  responses: { 200: _200OkPutResponse },
})

export const deleteSetsSpotlistsIdRoute = createRoute({
  method: 'delete',
  path: '/sets/spotlists/{id}',
  tags: ['sets'],
  summary: 'Delete spot list',
  operationId: 'deleteSpotList',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getSetsSpotlistsIdIdsRoute = createRoute({
  method: 'get',
  path: '/sets/spotlists/{id}/ids',
  tags: ['sets'],
  summary: 'Get spot ids for this list',
  operationId: 'getSpotListIdsById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'An array object containing the item ids for this list',
      content: { 'application/json': { schema: ListOfItemIdsSchema } },
    },
  },
})

export const postSetsSpotlistsIdIdsRoute = createRoute({
  method: 'post',
  path: '/sets/spotlists/{id}/ids',
  tags: ['sets'],
  summary: 'Add spots to an existing list',
  operationId: 'addItemIdsSpotList',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON array containing spot ids',
      content: { 'application/json': { schema: ListOfItemIdsSchema } },
      required: true,
    },
  },
  responses: { 200: OkPostListResponse },
})

export const deleteSetsSpotlistsIdIdsItemIdRoute = createRoute({
  method: 'delete',
  path: '/sets/spotlists/{id}/ids/{itemId}',
  tags: ['sets'],
  summary: 'Delete spot from list',
  operationId: 'deleteItemIdFromSpotList',
  request: {
    params: z.object({
      id: PathIdParamsSchema,
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'Item ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: _200OkDeleteListResponse },
})

export const getSpotsRoute = createRoute({
  method: 'get',
  path: '/spots',
  tags: ['spots'],
  summary: 'Get all spots',
  operationId: 'getSpots',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      is_online: IsOnlineParamsSchema,
      request_counter: RequestCounterParamsSchema,
      serial_number: SerialNumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of spots',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(SpotGetSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getSpotsIdRoute = createRoute({
  method: 'get',
  path: '/spots/{id}',
  tags: ['spots'],
  summary: 'Get spot',
  operationId: 'getSpotById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the spot',
      content: { 'application/json': { schema: SpotGetSchema } },
    },
  },
})

export const putSpotsIdRoute = createRoute({
  method: 'put',
  path: '/spots/{id}',
  tags: ['spots'],
  summary: 'Update existing spot',
  operationId: 'updateSpot',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON object containing spot information',
      content: { 'application/json': { schema: SpotUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const getSpotsIdSetsRoute = createRoute({
  method: 'get',
  path: '/spots/{id}/sets',
  tags: ['spots'],
  summary: 'Get spotsets',
  operationId: 'getSpotSetsById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the spotset',
      content: { 'application/json': { schema: SpotSetSchema } },
    },
  },
})

export const postSpotsIdSetsRoute = createRoute({
  method: 'post',
  path: '/spots/{id}/sets',
  tags: ['spots'],
  summary: 'Create spotset',
  operationId: 'addSpotSet',
  request: { params: z.object({ id: PathIdParamsSchema }), body: SpotSetRequestBody },
  responses: { 201: OkPostResponse },
})

export const getSpotsIdSetsSetIdRoute = createRoute({
  method: 'get',
  path: '/spots/{id}/sets/{setId}',
  tags: ['spots'],
  summary: 'Get spotset',
  operationId: 'getSpotSetById',
  request: {
    params: z.object({
      id: PathIdParamsSchema,
      setId: z
        .string()
        .openapi({
          param: {
            description: 'Unique spot set identifier',
            example: '5b8d0b717503c445552a1865',
            in: 'path',
            name: 'setId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing the spotset',
      content: { 'application/json': { schema: SpotSetSchema } },
    },
  },
})

export const putSpotsIdSetsSetIdRoute = createRoute({
  method: 'put',
  path: '/spots/{id}/sets/{setId}',
  tags: ['spots'],
  summary: 'Update existing spotset',
  operationId: 'updateSpotSet',
  request: {
    params: z.object({
      id: PathIdParamsSchema,
      setId: z
        .string()
        .openapi({
          param: {
            description: 'Unique spot set identifier',
            example: '5b8d0b717503c445552a1865',
            in: 'path',
            name: 'setId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A JSON object containing spotset information',
      content: { 'application/json': { schema: SpotSetUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const getSpotsetsRoute = createRoute({
  method: 'get',
  path: '/spotsets',
  tags: ['spotsets'],
  summary: 'Get spotsets',
  responses: {
    200: {
      description: 'A JSON object containing the spotset',
      content: { 'application/json': { schema: SpotSetSchema } },
    },
  },
})

export const postSpotsetsRoute = createRoute({
  method: 'post',
  path: '/spotsets',
  tags: ['spotsets'],
  summary: 'Create spotset',
  request: { body: SpotSetRequestBody },
  responses: { 201: OkPostResponse },
})

export const getSpotsetsIdRoute = createRoute({
  method: 'get',
  path: '/spotsets/{id}',
  tags: ['spotsets'],
  summary: 'Get spotset',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the spotset',
      content: { 'application/json': { schema: SpotSetSchema } },
    },
  },
})

export const putSpotsetsIdRoute = createRoute({
  method: 'put',
  path: '/spotsets/{id}',
  tags: ['spotsets'],
  summary: 'Update existing spotset',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    body: {
      description: 'A JSON object containing spotset information',
      content: { 'application/json': { schema: SpotSetUpdateSchema } },
      required: true,
    },
  },
  responses: { 200: _200OkPutResponse },
})

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['subscriptions'],
  summary: 'Get all subscriptions',
  operationId: 'getSubscriptions',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      topic_filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter on the topic filter. Make sure to use [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in the query parameter.',
            in: 'query',
            name: 'topic_filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on the description.',
            in: 'query',
            name: 'description',
            schema: { type: 'string' },
            required: false,
          },
        }),
      database_hold_time_h: z
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
          param: {
            description: 'Filter based on the number of hours events are retained in the database.',
            in: 'query',
            name: 'database_hold_time_h',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      populate_events: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter based on subscriptions that populate the events',
            in: 'query',
            name: 'populate_events',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      verify_target_certificate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the verification of the target certificate.',
            in: 'query',
            name: 'verify_target_certificate',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of subscriptions',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z
              .object({ results: z.array(SubscriptionSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/subscriptions',
  tags: ['subscriptions'],
  summary: 'Create subscription',
  operationId: 'addSubscription',
  request: { body: SubscriptionRequestBody },
  responses: { 201: OkPostResponse },
})

export const getSubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Get subscription',
  operationId: 'getSubscriptionById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the subscription',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
})

export const putSubscriptionsIdRoute = createRoute({
  method: 'put',
  path: '/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Update existing subscription',
  operationId: 'updateSubscription',
  request: { params: z.object({ id: PathIdParamsSchema }), body: SubscriptionRequestBody },
  responses: { 200: _200OkPutResponse },
})

export const deleteSubscriptionsIdRoute = createRoute({
  method: 'delete',
  path: '/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Delete subscription',
  operationId: 'deleteSubscription',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
})

export const getSubscriptionsIdEventsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{id}/events',
  tags: ['subscriptions'],
  summary: 'Get subscription events',
  operationId: 'getEventsForSubscriptionById',
  request: {
    params: z.object({ id: PathIdParamsSchema }),
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      'topic.resource_type': TopicResourceTypeParamsSchema,
      'topic.action': TopicActionParamsSchema,
      'topic.resource': TopicResourceParamsSchema,
      time_event: TimeEventParamsSchema,
      time_expire: TimeExpireParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing the events for a specific subscription',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(EventSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users'],
  summary: 'Get all users',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'getUsers',
  request: {
    query: z.object({
      after: AfterParamsSchema,
      after_id: AfterIdParamsSchema,
      before: BeforeParamsSchema,
      before_id: BeforeIdParamsSchema,
      from: FromParamsSchema,
      from_id: FromIdParamsSchema,
      id_only: IdOnlyParamsSchema,
      limit: LimitParamsSchema,
      populate: PopulateParamsSchema,
      results_only: ResultsOnlyParamsSchema,
      select: SelectParamsSchema,
      sort: SortParamsSchema,
      until: UntilParamsSchema,
      until_id: UntilIdParamsSchema,
      timeout_s: TimeoutSParamsSchema,
      id: IdParamsSchema,
      time_created: TimeCreatedParamsSchema,
      time_updated: TimeUpdatedParamsSchema,
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the email address.',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the first name.',
            in: 'query',
            name: 'first_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the last name.',
            in: 'query',
            name: 'last_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_admin: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the administrator status.',
            in: 'query',
            name: 'is_admin',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      is_locked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on the locked status.',
            in: 'query',
            name: 'is_locked',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object containing a list of users',
      content: {
        'application/json': {
          schema: ResponseEnvelopeSchema.and(
            z.object({ results: z.array(UserSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
  security: [{ CookieSid: [] }],
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['users'],
  summary: 'Create user',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'addUser',
  request: { body: UserRequestBody },
  responses: { 201: OkPostResponse },
  security: [{ CookieSid: [] }],
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['users'],
  summary: 'Get user',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'getUserById',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: {
    200: {
      description: 'A JSON object containing the user',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [{ CookieSid: [] }],
})

export const putUsersIdRoute = createRoute({
  method: 'put',
  path: '/users/{id}',
  tags: ['users'],
  summary: 'Update existing user',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'updateUser',
  request: { params: z.object({ id: PathIdParamsSchema }), body: UserRequestBody },
  responses: { 200: _200OkPutResponse },
  security: [{ CookieSid: [] }],
})

export const deleteUsersIdRoute = createRoute({
  method: 'delete',
  path: '/users/{id}',
  tags: ['users'],
  summary: 'Delete user',
  description: 'Can only be used by an **administrative** user.',
  operationId: 'deleteUser',
  request: { params: z.object({ id: PathIdParamsSchema }) },
  responses: { 200: _200OkDeleteResponse },
  security: [{ CookieSid: [] }],
})
