import { createRoute, z } from '@hono/zod-openapi'

const ExplicitDateComponentsSchema = z
  .object({
    calendarIdentifier: z.string().exactOptional(),
    day: z.int32().exactOptional(),
    era: z.int32().exactOptional(),
    hour: z.int32().exactOptional(),
    minute: z.int32().exactOptional(),
    month: z.int32().exactOptional(),
    nanosecond: z.int32().exactOptional(),
    second: z.int32().exactOptional(),
    timeZone: z.string().exactOptional(),
    year: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExplicitDateComponents')

type DateComponentsType =
  | string
  | string
  | string
  | string
  | z.infer<typeof ExplicitDateComponentsSchema>

const IntentSchema = z
  .object({ class: z.string(), identifier: z.string() })
  .openapi({
    discriminator: {
      mapping: {
        AddMediaIntent: '#/components/schemas/AddMediaIntent',
        PlayMediaIntent: '#/components/schemas/PlayMediaIntent',
        UpdateMediaAffinityIntent: '#/components/schemas/UpdateMediaAffinityIntent',
      },
      propertyName: 'class',
    },
    required: ['class', 'identifier'],
  })
  .openapi('Intent')

const MediaDestinationSchema = z
  .object({ mediaDestinationType: z.enum(['library', 'playlist']) })
  .openapi({
    discriminator: {
      mapping: {
        library: '#/components/schemas/MediaDestinationLibrary',
        playlist: '#/components/schemas/MediaDestinationPlaylist',
      },
      propertyName: 'mediaDestinationType',
    },
    required: ['mediaDestinationType'],
  })
  .openapi('MediaDestination')

const MediaItemTypeSchema = z
  .enum([
    'unknown',
    'song',
    'album',
    'artist',
    'genre',
    'playlist',
    'podcastShow',
    'podcastEpisode',
    'podcastPlaylist',
    'musicStation',
    'audioBook',
    'movie',
    'tvShow',
    'tvShowEpisode',
    'musicVideo',
    'podcastStation',
    'radioStation',
    'station',
    'music',
    'algorithmicRadioStation',
    'news',
  ])
  .openapi('MediaItemType')

const MediaItemSchema = z
  .object({
    artist: z.string().max(1000).exactOptional().openapi({ readOnly: true }),
    identifier: z.string().max(250),
    title: z.string().max(1000).exactOptional().openapi({ readOnly: true }),
    type: MediaItemTypeSchema,
  })
  .openapi({ required: ['type', 'identifier'] })
  .openapi('MediaItem')

const MediaReferenceSchema = z.enum(['unknown', 'currentlyPlaying', 'my']).openapi('MediaReference')

const DateComponentsSchema: z.ZodType<DateComponentsType> = z
  .lazy(() =>
    z
      .xor([
        z.string().regex(/[0-9]{4}/),
        z.string().regex(/[0-9]{4}-[0-9]{2}/),
        z.iso.date(),
        z.iso.datetime({ offset: true }),
        ExplicitDateComponentsSchema,
      ])
      .openapi({ example: '1980' }),
  )
  .openapi('DateComponents')

const DateComponentsRangeSchema = z
  .object({
    endDateComponents: DateComponentsSchema.exactOptional(),
    startDateComponents: DateComponentsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DateComponentsRange')

const MediaSortOrderSchema = z
  .enum([
    'unknown',
    'newest',
    'oldest',
    'best',
    'worst',
    'popular',
    'unpopular',
    'trending',
    'recommended',
  ])
  .openapi('MediaSortOrder')

const MediaSearchSchema = z
  .object({
    albumName: z.string().exactOptional(),
    artistName: z.string().exactOptional(),
    genreNames: z.array(z.string()).exactOptional(),
    mediaIdentifier: z.string().exactOptional(),
    mediaName: z.string().exactOptional(),
    mediaType: MediaItemTypeSchema.exactOptional(),
    moodNames: z.array(z.string()).exactOptional(),
    reference: MediaReferenceSchema.exactOptional(),
    releaseDate: DateComponentsRangeSchema.exactOptional(),
    sortOrder: MediaSortOrderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaSearch')

const AddMediaIntentSchema = IntentSchema.and(
  z
    .object({
      class: z.literal('AddMediaIntent'),
      mediaDestination: MediaDestinationSchema.exactOptional(),
      mediaItems: z.array(MediaItemSchema).exactOptional(),
      mediaSearch: MediaSearchSchema.exactOptional(),
    })
    .openapi({ required: ['class'] }),
)
  .openapi({ required: ['class'] })
  .openapi('AddMediaIntent')

const ServiceDebugReferenceSchema = z.url().max(2000).openapi('ServiceDebugReference')

const ExecutionMetricsSchema = z
  .object({
    completed: z.iso.datetime({ offset: true }).exactOptional(),
    duration: z.float32().exactOptional(),
    received: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExecutionMetrics')

const InvocationResponseSchema = z
  .object({
    debug: ServiceDebugReferenceSchema.exactOptional(),
    method: z.string(),
    metrics: ExecutionMetricsSchema.exactOptional(),
    result: z.object({}).nullable(),
  })
  .openapi({
    discriminator: {
      mapping: {
        'AddMediaIntentHandling.confirm':
          '#/components/schemas/AddMediaIntentHandlingConfirmInvocationResponse',
        'AddMediaIntentHandling.handle':
          '#/components/schemas/AddMediaIntentHandlingHandleInvocationResponse',
        'AddMediaIntentHandling.resolveMediaDestination':
          '#/components/schemas/AddMediaIntentHandlingResolveMediaDestinationInvocationResponse',
        'AddMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/AddMediaIntentHandlingResolveMediaItemsInvocationResponse',
        'PlayMediaIntentHandling.handle':
          '#/components/schemas/PlayMediaIntentHandlingHandleInvocationResponse',
        'PlayMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/PlayMediaIntentHandlingResolveMediaItemsInvocationResponse',
        'PlayMediaIntentHandling.resolvePlayShuffled':
          '#/components/schemas/PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse',
        'PlayMediaIntentHandling.resolvePlaybackQueueLocation':
          '#/components/schemas/PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse',
        'PlayMediaIntentHandling.resolvePlaybackRepeatMode':
          '#/components/schemas/PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse',
        'PlayMediaIntentHandling.resolveResumePlayback':
          '#/components/schemas/PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse',
        ProtocolException: '#/components/schemas/ProtocolExceptionInvocationResponse',
        'UpdateMediaAffinityIntentHandling.handle':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingHandleInvocationResponse',
        'UpdateMediaAffinityIntentHandling.resolveAffinityType':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse',
        'UpdateMediaAffinityIntentHandling.resolveMediaItems':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse',
      },
      propertyName: 'method',
    },
    required: ['method', 'result'],
  })
  .openapi('InvocationResponse')

const UserActivitySchema = z
  .object({
    activityType: z.string().max(250).openapi({ example: 'com.mediastreamingservice.playmedia' }),
    persistentIdentifier: z.string().max(250).exactOptional(),
    title: z.string().max(250).exactOptional(),
    userInfo: z.object({}).exactOptional().openapi({ title: 'UserActivityUserInfo' }),
    version: z
      .string()
      .regex(/[0-9]+\.[0-9]+\.[0-9]+/)
      .max(25),
  })
  .nullable()
  .openapi({ required: ['version', 'activityType'] })
  .openapi('UserActivity')

const IntentResponseSchema = z
  .object({ class: z.string(), userActivity: UserActivitySchema })
  .openapi({
    discriminator: {
      mapping: {
        AddMediaIntentResponse: '#/components/schemas/AddMediaIntentResponse',
        PlayMediaIntentResponse: '#/components/schemas/PlayMediaIntentResponse',
        UpdateMediaAffinityIntentResponse: '#/components/schemas/UpdateMediaAffinityIntentResponse',
      },
      propertyName: 'class',
    },
    required: ['class', 'userActivity'],
  })
  .openapi('IntentResponse')

const AddMediaIntentResponseCodeSchema = z
  .enum(['unspecified', 'ready', 'inProgress', 'success', 'failure', 'failureRequiringAppLaunch'])
  .openapi('AddMediaIntentResponseCode')

const AddMediaIntentResponseSchema = IntentResponseSchema.and(
  z
    .object({ class: z.literal('AddMediaIntentResponse'), code: AddMediaIntentResponseCodeSchema })
    .openapi({ required: ['class', 'code'] }),
)
  .openapi({ required: ['class', 'code'] })
  .openapi('AddMediaIntentResponse')

const AddMediaIntentHandlingConfirmInvocationResponseSchema = InvocationResponseSchema.and(
  z
    .object({
      method: z.literal('AddMediaIntentHandling.confirm'),
      result: z
        .object({ response: AddMediaIntentResponseSchema })
        .openapi({ required: ['response'] }),
    })
    .openapi({ required: ['method', 'result'] }),
)
  .openapi({ required: ['method', 'result'] })
  .openapi('AddMediaIntentHandlingConfirmInvocationResponse')

const AddMediaIntentHandlingHandleInvocationResponseSchema = InvocationResponseSchema.and(
  z
    .object({
      method: z.literal('AddMediaIntentHandling.handle'),
      result: z
        .object({ response: AddMediaIntentResponseSchema })
        .openapi({ required: ['response'] }),
    })
    .openapi({ required: ['method', 'result'] }),
)
  .openapi({ required: ['method', 'result'] })
  .openapi('AddMediaIntentHandlingHandleInvocationResponse')

const ConstraintsSchema = z
  .object({
    allowExplicitContent: z.boolean().default(true).exactOptional(),
    maximumQueueSegmentItemCount: z.uint32().min(50).max(1000).default(1000).exactOptional(),
    updateUserTasteProfile: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Constraints')

const ContentIdentifierSchema = z
  .string()
  .min(1)
  .max(1000)
  .openapi({ example: 'j15f8A3cuU0GG' })
  .openapi('ContentIdentifier')

const QueueIdentifierSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ example: 'u104823q8201' })
  .openapi('QueueIdentifier')

const PlayerContextSchema = z
  .object({
    activityIdentifier: z.string().max(250).exactOptional(),
    contentIdentifier: ContentIdentifierSchema.exactOptional(),
    offsetInMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10942 }),
    playbackSpeed: z.float64().default(1).exactOptional(),
    queueIdentifier: QueueIdentifierSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerContext')

const SessionSchema = z
  .object({
    constraints: ConstraintsSchema,
    deadline: z.iso.datetime({ offset: true }),
    identifier: z.string().min(1).max(128),
    playerContext: PlayerContextSchema.exactOptional(),
    requested: z.iso.datetime({ offset: true }),
    version: z.string().regex(/[0-9]+\.[0-9]+\.[0-9]+/),
  })
  .openapi({ required: ['version', 'identifier', 'constraints', 'deadline', 'requested'] })
  .openapi('Session')

const InvocationSchema = z
  .object({
    method: z.string(),
    params: z.object({}).nullable(),
    session: SessionSchema.exactOptional(),
  })
  .openapi({
    discriminator: {
      mapping: {
        'AddMediaIntentHandling.confirm': '#/components/schemas/AddMediaIntentHandlingInvocation',
        'AddMediaIntentHandling.handle': '#/components/schemas/AddMediaIntentHandlingInvocation',
        'AddMediaIntentHandling.resolveMediaDestination':
          '#/components/schemas/AddMediaIntentHandlingInvocation',
        'AddMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/AddMediaIntentHandlingInvocation',
        'PlayMediaIntentHandling.handle': '#/components/schemas/PlayMediaIntentHandlingInvocation',
        'PlayMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/PlayMediaIntentHandlingInvocation',
        'PlayMediaIntentHandling.resolvePlayShuffled':
          '#/components/schemas/PlayMediaIntentHandlingInvocation',
        'PlayMediaIntentHandling.resolvePlaybackQueueLocation':
          '#/components/schemas/PlayMediaIntentHandlingInvocation',
        'PlayMediaIntentHandling.resolvePlaybackRepeatMode':
          '#/components/schemas/PlayMediaIntentHandlingInvocation',
        'PlayMediaIntentHandling.resolveResumePlayback':
          '#/components/schemas/PlayMediaIntentHandlingInvocation',
        'UpdateMediaAffinityIntentHandling.handle':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingInvocation',
        'UpdateMediaAffinityIntentHandling.resolveAffinityType':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingInvocation',
        'UpdateMediaAffinityIntentHandling.resolveMediaItems':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingInvocation',
      },
      propertyName: 'method',
    },
    required: ['method', 'params'],
  })
  .openapi('Invocation')

const AddMediaIntentHandlingInvocationSchema = InvocationSchema.and(
  z
    .object({
      method: z.enum([
        'AddMediaIntentHandling.resolveMediaItems',
        'AddMediaIntentHandling.resolveMediaDestination',
        'AddMediaIntentHandling.confirm',
        'AddMediaIntentHandling.handle',
      ]),
      params: z.object({ intent: AddMediaIntentSchema }).openapi({ required: ['intent'] }),
    })
    .openapi({ required: ['method', 'params'] }),
)
  .openapi({
    discriminator: {
      mapping: {
        'AddMediaIntentHandling.confirm': '#/components/schemas/AddMediaIntentHandlingInvocation',
        'AddMediaIntentHandling.handle': '#/components/schemas/AddMediaIntentHandlingInvocation',
        'AddMediaIntentHandling.resolveMediaDestination':
          '#/components/schemas/AddMediaIntentHandlingInvocation',
        'AddMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/AddMediaIntentHandlingInvocation',
      },
      propertyName: 'method',
    },
    required: ['method', 'params'],
  })
  .openapi('AddMediaIntentHandlingInvocation')

const IntentResolutionResultSchema = z
  .object({
    class: z.string(),
    needsValue: z.object({}).exactOptional().openapi({ 'x-flow-exception': 'Failure' }),
    notRequired: z.object({}).exactOptional(),
    unsupported: z.object({}).exactOptional().openapi({ 'x-flow-exception': 'Failure' }),
  })
  .openapi({
    discriminator: {
      mapping: {
        AddMediaMediaItemResolutionResult: '#/components/schemas/AddMediaMediaItemResolutionResult',
        BooleanResolutionResult: '#/components/schemas/BooleanResolutionResult',
        MediaAffinityTypeResolutionResult: '#/components/schemas/MediaAffinityTypeResolutionResult',
        PlayMediaMediaItemResolutionResult:
          '#/components/schemas/PlayMediaMediaItemResolutionResult',
        PlaybackQueueLocationResolutionResult:
          '#/components/schemas/PlaybackQueueLocationResolutionResult',
        UpdateMediaAffinityMediaItemResolutionResult:
          '#/components/schemas/UpdateMediaAffinityMediaItemResolutionResult',
      },
      propertyName: 'class',
    },
    required: ['class'],
  })
  .openapi('IntentResolutionResult')

const AddMediaMediaItemUnsupportedReasonSchema = z
  .enum([
    'loginRequired',
    'subscriptionRequired',
    'unsupportedMediaType',
    'explicitContentSettings',
    'restrictedContent',
    'regionRestriction',
  ])
  .openapi('AddMediaMediaItemUnsupportedReason')

const AddMediaMediaItemResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('AddMediaMediaItemResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ mediaItemToConfirm: MediaItemSchema })
        .exactOptional()
        .openapi({ required: ['mediaItemToConfirm'], 'x-flow-exception': 'Requires Confirmation' }),
      disambiguation: z
        .object({ mediaItemsToDisambiguate: z.array(MediaItemSchema).min(2) })
        .exactOptional()
        .openapi({ required: ['mediaItemsToDisambiguate'] }),
      success: z
        .object({ resolvedMediaItem: MediaItemSchema })
        .exactOptional()
        .openapi({ required: ['resolvedMediaItem'] }),
      unsupported: z
        .object({ reason: AddMediaMediaItemUnsupportedReasonSchema.exactOptional() })
        .exactOptional()
        .openapi({ 'x-flow-exception': 'Unsupported', required: [] }),
    })
    .openapi({ required: [] }),
).openapi('AddMediaMediaItemResolutionResult')

const AddMediaIntentHandlingResolveMediaItemsInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('AddMediaIntentHandling.resolveMediaItems'),
        result: z
          .object({
            resolutionResult: z.array(AddMediaMediaItemResolutionResultSchema).exactOptional(),
          })
          .openapi({ required: ['response'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('AddMediaIntentHandlingResolveMediaItemsInvocationResponse')

const AddMediaMediaDestinationUnsupportedReasonSchema = z
  .enum(['playlistNameNotFound', 'playlistNotEditable'])
  .openapi('AddMediaMediaDestinationUnsupportedReason')

const AddMediaMediaDestinationResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('AddMediaMediaDestinationResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ mediaDestinationToConfirm: MediaDestinationSchema })
        .exactOptional()
        .openapi({
          required: ['mediaDestinationToConfirm'],
          'x-flow-exception': 'Requires Confirmation',
        }),
      disambiguation: z
        .object({ mediaDestinationsToDisambiguate: z.array(MediaDestinationSchema).min(2) })
        .exactOptional()
        .openapi({
          required: ['mediaDestinationsToDisambiguate'],
          'x-flow-exception': 'Requires Disambiguation',
        }),
      success: z
        .object({ resolvedMediaDestination: MediaDestinationSchema })
        .exactOptional()
        .openapi({ required: ['resolvedMediaDestination'] }),
      unsupported: z
        .object({ reason: AddMediaMediaDestinationUnsupportedReasonSchema.exactOptional() })
        .exactOptional()
        .openapi({ 'x-flow-exception': 'Unsupported', required: [] }),
    })
    .openapi({ required: [] }),
).openapi('AddMediaMediaDestinationResolutionResult')

const AddMediaIntentHandlingResolveMediaDestinationInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('AddMediaIntentHandling.resolveMediaDestination'),
        result: z
          .object({
            resolutionResult: AddMediaMediaDestinationResolutionResultSchema.exactOptional(),
          })
          .openapi({ required: ['response'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('AddMediaIntentHandlingResolveMediaDestinationInvocationResponse')

const ProtocolExceptionReasonSchema = z
  .enum([
    'unsupported',
    'unauthorized',
    'unexpected',
    'invalid',
    'unparseable',
    'deprecated',
    'internal',
    'complex',
    'busy',
  ])
  .openapi('ProtocolExceptionReason')

const ProtocolExceptionSchema = z
  .object({
    code: z
      .preprocess(
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
    methodIndex: z.uint32().exactOptional(),
    methodName: z.string().exactOptional(),
    reason: ProtocolExceptionReasonSchema,
    retryWithDelay: z.float32().default(-1).exactOptional(),
    trace: z.array(z.string().max(1000)).max(64).exactOptional(),
  })
  .openapi({ required: ['reason'] })
  .openapi('ProtocolException')

const ProtocolExceptionInvocationResponseSchema = InvocationResponseSchema.and(
  z
    .object({ exception: ProtocolExceptionSchema, method: z.literal('ProtocolException') })
    .openapi({ required: ['method', 'exception'] }),
)
  .openapi({ required: ['method', 'exception'] })
  .openapi('ProtocolExceptionInvocationResponse')

const AddMediaIntentHandlingInvocationResponseSchema = z
  .xor([
    AddMediaIntentHandlingResolveMediaItemsInvocationResponseSchema,
    AddMediaIntentHandlingResolveMediaDestinationInvocationResponseSchema,
    AddMediaIntentHandlingConfirmInvocationResponseSchema,
    AddMediaIntentHandlingHandleInvocationResponseSchema,
    ProtocolExceptionInvocationResponseSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        'AddMediaIntentHandling.confirm':
          '#/components/schemas/AddMediaIntentHandlingConfirmInvocationResponse',
        'AddMediaIntentHandling.handle':
          '#/components/schemas/AddMediaIntentHandlingHandleInvocationResponse',
        'AddMediaIntentHandling.resolveMediaDestination':
          '#/components/schemas/AddMediaIntentHandlingResolveMediaDestinationInvocationResponse',
        'AddMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/AddMediaIntentHandlingResolveMediaItemsInvocationResponse',
        ProtocolException: '#/components/schemas/ProtocolExceptionInvocationResponse',
      },
      propertyName: 'method',
    },
  })
  .openapi('AddMediaIntentHandlingInvocationResponse')

const BooleanResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('BooleanResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ valueToConfirm: z.boolean() })
        .exactOptional()
        .openapi({ required: ['valueToConfirm'], 'x-flow-exception': 'Requires Confirmation' }),
      success: z
        .object({ resolvedValue: z.boolean() })
        .exactOptional()
        .openapi({ required: ['resolvedValue'] }),
    })
    .openapi({ required: [] }),
).openapi('BooleanResolutionResult')

const ContentAttributesSchema = z
  .object({
    albumName: z.string().max(250).exactOptional().openapi({ example: 'Blood On the Tracks' }),
    artistName: z.string().max(1000).exactOptional().openapi({ example: 'Bob Dylan' }),
    artwork: z
      .object({ url: z.string().max(2000).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    composerName: z.string().max(250).exactOptional().openapi({ example: 'B. Dylan' }),
    durationInMillis: z
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
      .openapi({ type: 'integer', format: 'uint64' }),
    genreNames: z.array(z.string().max(250)).max(30).exactOptional(),
    name: z.string().max(250).exactOptional().openapi({ example: 'Tangled Up In Blue' }),
    trackNumber: z.uint32().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('ContentAttributes')

const ContentSchema = z
  .object({
    attributes: ContentAttributesSchema.exactOptional(),
    control: z.string().default('default').exactOptional().openapi({ example: 'song' }),
    identifier: ContentIdentifierSchema,
    isLive: z.boolean().exactOptional(),
    playIndex: z
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
      .openapi({ type: 'integer', format: 'uint64' }),
    url: z.string().max(2000).exactOptional(),
  })
  .openapi({ required: ['identifier'] })
  .openapi('Content')

const ExtensionEndpointConfigSchema = z
  .object({ hdr: z.object({}).exactOptional(), url: z.string().min(0).max(2000).exactOptional() })
  .openapi({ required: [] })
  .openapi('ExtensionEndpointConfig')

const ExtensionConfigSchema = z
  .object({
    hdr: z
      .object({})
      .exactOptional()
      .openapi({ example: { 'x-client-type': 'headless', 'x-service-affinity': 'cluster1' } }),
    intent: z
      .object({
        addMedia: ExtensionEndpointConfigSchema.and(
          z
            .object({
              opt: z.array(z.enum(['resolveMediaDestination', 'confirm'])).exactOptional(),
            })
            .openapi({ required: [] }),
        ).exactOptional(),
        hdr: z
          .object({})
          .exactOptional()
          .openapi({ example: { 'x-service-affinity': 'intent2' } }),
        playMedia: ExtensionEndpointConfigSchema.and(
          z
            .object({
              opt: z
                .array(
                  z.enum([
                    'resolvePlayShuffled',
                    'resolvePlaybackRepeatMode',
                    'resolvePlaybackQueueLocation',
                    'resolveResumePlayback',
                  ]),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        ),
        updateMediaAffinity: ExtensionEndpointConfigSchema.and(
          z
            .object({ opt: z.array(z.literal('resolveAffinityType')).exactOptional() })
            .openapi({ required: [] }),
        ).exactOptional(),
      })
      .openapi({ required: ['playMedia'] }),
    media: z
      .object({
        queues: z
          .object({
            hdr: z
              .object({})
              .exactOptional()
              .openapi({
                example: { 'x-content-min-ttl': 1200, 'x-media-catalog-region': 'en_US' },
              }),
            playMedia: z
              .object({
                hdr: z
                  .object({})
                  .exactOptional()
                  .openapi({ example: { 'x-headless-client': true } }),
                url: z.string().min(1).max(4000).default('/queues/playMedia').exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            updateActivity: z
              .object({
                hdr: z.object({}).exactOptional(),
                url: z.string().min(1).max(4000).default('/queues/updateActivity').exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: [] }),
    url: z.string().min(1).max(2000).exactOptional().openapi({ example: '/v2' }),
    version: z
      .string()
      .regex(/([0-9]+[.]){2}[0-9]+/)
      .openapi({ example: '1.0.0' }),
  })
  .openapi({ required: ['version', 'intent', 'media'] })
  .openapi('ExtensionConfig')

const ExtensionConfigTagSchema = z
  .string()
  .regex(/["][ -~]{1000}["]/)
  .max(1002)
  .openapi('ExtensionConfigTag')

const MediaAffinityTypeSchema = z.enum(['unknown', 'like', 'dislike']).openapi('MediaAffinityType')

const MediaAffinityTypeResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('MediaAffinityTypeResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ mediaAffinityTypeToConfirm: MediaAffinityTypeSchema })
        .exactOptional()
        .openapi({
          required: ['mediaAffinityTypeToConfirm'],
          'x-flow-exception': 'Requires Confirmation',
        }),
      success: z
        .object({ resolvedMediaAffinityType: MediaAffinityTypeSchema })
        .exactOptional()
        .openapi({ required: ['resolvedMediaAffinityType'] }),
    })
    .openapi({ required: [] }),
).openapi('MediaAffinityTypeResolutionResult')

const MediaDestinationLibrarySchema = MediaDestinationSchema.and(
  z
    .object({ mediaDestinationType: z.literal('library') })
    .openapi({ required: ['mediaDestinationType'] }),
)
  .openapi({ required: ['mediaDestinationType'] })
  .openapi('MediaDestinationLibrary')

const MediaDestinationPlaylistSchema = MediaDestinationSchema.and(
  z
    .object({
      mediaDestinationType: z.literal('playlist'),
      playlistName: z.string().min(1).max(1000),
    })
    .openapi({ required: ['mediaDestinationType', 'playlistName'] }),
)
  .openapi({ required: ['mediaDestinationType', 'playlistName'] })
  .openapi('MediaDestinationPlaylist')

const PlayMediaControlActivitySchema = z
  .object({
    playElapsed: z.uint32().min(5).exactOptional(),
    playElapsedInterval: z.uint32().min(5).exactOptional(),
    playPaused: z.uint32().min(5).max(60).default(5).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayMediaControlActivity')

const PlayMediaControlCommandSetSchema = z
  .object({
    bookmarkTrack: z.boolean().exactOptional(),
    dislikeTrack: z.boolean().exactOptional(),
    likeTrack: z.boolean().exactOptional(),
    nextTrack: z.boolean().exactOptional(),
    preferSkipBackward: z.boolean().exactOptional(),
    preferSkipForward: z.boolean().exactOptional(),
    previousTrack: z.boolean().exactOptional(),
    seekToPlaybackPosition: z.boolean().exactOptional(),
    skipBackward: z.boolean().exactOptional(),
    skipForward: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayMediaControlCommandSet')

const PlayMediaControlSchemeSchema = z
  .enum([
    'custom',
    'onDemand',
    'internetRadio',
    'liveStreaming',
    'audioBook',
    'podcast',
    'advertisement',
  ])
  .openapi('PlayMediaControlScheme')

const PlayMediaControlSchema = z
  .object({
    activity: PlayMediaControlActivitySchema.exactOptional(),
    commands: PlayMediaControlCommandSetSchema.exactOptional(),
    scheme: PlayMediaControlSchemeSchema,
  })
  .openapi({ required: ['scheme'] })
  .openapi('PlayMediaControl')

const PlaybackQueueLocationSchema = z
  .enum(['unknown', 'now', 'next', 'later'])
  .openapi('PlaybackQueueLocation')

const PlaybackRepeatModeSchema = z
  .enum(['unknown', 'none', 'all', 'one'])
  .openapi('PlaybackRepeatMode')

const PlayMediaIntentSchema = IntentSchema.and(
  z
    .object({
      class: z.literal('PlayMediaIntent').exactOptional(),
      mediaItems: z.array(MediaItemSchema).exactOptional(),
      mediaSearch: MediaSearchSchema.exactOptional(),
      playShuffled: z.boolean().exactOptional(),
      playbackQueueLocation: PlaybackQueueLocationSchema.exactOptional(),
      playbackRepeatMode: PlaybackRepeatModeSchema.exactOptional(),
      playbackSpeed: z.float64().exactOptional(),
      resumePlayback: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('PlayMediaIntent')

const PlayMediaIntentResponseCodeSchema = z
  .enum([
    'unspecified',
    'success',
    'failure',
    'failureRequiringAppLaunch',
    'failureUnknownMediaType',
    'failureNoUnplayedContent',
    'failureRestrictedContent',
  ])
  .openapi('PlayMediaIntentResponseCode')

const PlayMediaIntentResponseSchema = IntentResponseSchema.and(
  z
    .object({
      class: z.literal('PlayMediaIntentResponse'),
      code: PlayMediaIntentResponseCodeSchema,
    })
    .openapi({ required: ['class', 'code'] }),
)
  .openapi({ required: ['class', 'code'] })
  .openapi('PlayMediaIntentResponse')

const PlayMediaIntentHandlingHandleInvocationResponseSchema = InvocationResponseSchema.and(
  z
    .object({
      method: z.literal('PlayMediaIntentHandling.handle'),
      result: z
        .object({ response: PlayMediaIntentResponseSchema })
        .openapi({ required: ['response'] }),
    })
    .openapi({ required: ['method', 'result'] }),
)
  .openapi({ required: ['method', 'result'] })
  .openapi('PlayMediaIntentHandlingHandleInvocationResponse')

const PlayMediaIntentHandlingInvocationSchema = InvocationSchema.and(
  z
    .object({
      method: z.enum([
        'PlayMediaIntentHandling.resolveMediaItems',
        'PlayMediaIntentHandling.resolvePlayShuffled',
        'PlayMediaIntentHandling.resolvePlaybackQueueLocation',
        'PlayMediaIntentHandling.resolvePlaybackRepeatMode',
        'PlayMediaIntentHandling.resolveResumePlayback',
        'PlayMediaIntentHandling.handle',
      ]),
      params: z.object({ intent: PlayMediaIntentSchema }).openapi({ required: ['intent'] }),
    })
    .openapi({ required: ['params', 'method'] }),
)
  .openapi({ required: ['params', 'method'] })
  .openapi('PlayMediaIntentHandlingInvocation')

const PlayMediaMediaItemUnsupportedReasonSchema = z
  .enum([
    'loginRequired',
    'subscriptionRequired',
    'unsupportedMediaType',
    'explicitContentSettings',
    'restrictedContent',
    'regionRestriction',
  ])
  .openapi('PlayMediaMediaItemUnsupportedReason')

const PlayMediaMediaItemResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('PlayMediaMediaItemResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ mediaItemToConfirm: MediaItemSchema })
        .exactOptional()
        .openapi({ required: ['mediaItemToConfirm'], 'x-flow-exception': 'Requires Confirmation' }),
      disambiguation: z
        .object({ mediaItemsToDisambiguate: z.array(MediaItemSchema).min(2) })
        .exactOptional()
        .openapi({
          required: ['mediaItemsToDisambiguate'],
          'x-flow-exception': 'Requires Disambiguation',
        }),
      success: z
        .object({ resolvedMediaItem: MediaItemSchema })
        .exactOptional()
        .openapi({ required: ['resolvedMediaItem'] }),
      unsupported: z
        .object({ reason: PlayMediaMediaItemUnsupportedReasonSchema.exactOptional() })
        .exactOptional()
        .openapi({ 'x-flow-exception': 'Unsupported', required: [] }),
    })
    .openapi({ required: [] }),
).openapi('PlayMediaMediaItemResolutionResult')

const PlayMediaIntentHandlingResolveMediaItemsInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('PlayMediaIntentHandling.resolveMediaItems'),
        result: z
          .object({ resolutionResult: z.array(PlayMediaMediaItemResolutionResultSchema) })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('PlayMediaIntentHandlingResolveMediaItemsInvocationResponse')

const PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('PlayMediaIntentHandling.resolvePlayShuffled'),
        result: z
          .object({ resolutionResult: BooleanResolutionResultSchema })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse')

const PlaybackQueueLocationResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('PlaybackQueueLocationResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ playbackQueueLocationToConfirm: PlaybackQueueLocationSchema })
        .exactOptional()
        .openapi({
          required: ['playbackQueueLocationToConfirm'],
          'x-flow-exception': 'Requires Confirmation',
        }),
      success: z
        .object({ resolvedPlaybackQueueLocation: PlaybackQueueLocationSchema })
        .exactOptional()
        .openapi({ required: ['resolvedPlaybackQueueLocation'] }),
    })
    .openapi({ required: [] }),
).openapi('PlaybackQueueLocationResolutionResult')

const PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('PlayMediaIntentHandling.resolvePlaybackQueueLocation'),
        result: z
          .object({ resolutionResult: PlaybackQueueLocationResolutionResultSchema })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse')

const PlaybackRepeatModeResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('PlaybackRepeatModeResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ playbackRepeatModeToConfirm: PlaybackRepeatModeSchema })
        .exactOptional()
        .openapi({
          required: ['playbackRepeatModeToConfirm'],
          'x-flow-exception': 'Requires Confirmation',
        }),
      success: z
        .object({ resolvedPlaybackRepeatMode: PlaybackRepeatModeSchema })
        .exactOptional()
        .openapi({ required: ['resolvedPlaybackRepeatMode'] }),
    })
    .openapi({ required: [] }),
).openapi('PlaybackRepeatModeResolutionResult')

const PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('PlayMediaIntentHandling.resolvePlaybackRepeatMode'),
        result: z
          .object({ resolutionResult: PlaybackRepeatModeResolutionResultSchema })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse')

const PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('PlayMediaIntentHandling.resolveResumePlayback'),
        result: z
          .object({ resolutionResult: BooleanResolutionResultSchema })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse')

const PlayMediaIntentHandlingInvocationResponseSchema = z
  .xor([
    PlayMediaIntentHandlingResolveMediaItemsInvocationResponseSchema,
    PlayMediaIntentHandlingResolvePlayShuffledInvocationResponseSchema,
    PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponseSchema,
    PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponseSchema,
    PlayMediaIntentHandlingResolveResumePlaybackInvocationResponseSchema,
    PlayMediaIntentHandlingHandleInvocationResponseSchema,
    ProtocolExceptionInvocationResponseSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        'PlayMediaIntentHandling.handle':
          '#/components/schemas/PlayMediaIntentHandlingHandleInvocationResponse',
        'PlayMediaIntentHandling.resolveMediaItems':
          '#/components/schemas/PlayMediaIntentHandlingResolveMediaItemsInvocationResponse',
        'PlayMediaIntentHandling.resolvePlayShuffled':
          '#/components/schemas/PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse',
        'PlayMediaIntentHandling.resolvePlaybackQueueLocation':
          '#/components/schemas/PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse',
        'PlayMediaIntentHandling.resolvePlaybackRepeatMode':
          '#/components/schemas/PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse',
        'PlayMediaIntentHandling.resolveResumePlayback':
          '#/components/schemas/PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse',
        ProtocolException: '#/components/schemas/ProtocolExceptionInvocationResponse',
      },
      propertyName: 'method',
    },
  })
  .openapi('PlayMediaIntentHandlingInvocationResponse')

const PlayMediaRequestSchema = z
  .object({
    constraints: ConstraintsSchema,
    userActivity: UserActivitySchema,
    version: z.string().regex(/[0-9]+\.[0-9]+\.[0-9]+/),
  })
  .openapi({ required: ['version', 'userActivity', 'constraints'] })
  .openapi('PlayMediaRequest')

const QueueControlMappingSchema = z
  .object({ default: PlayMediaControlSchema })
  .catchall(PlayMediaControlSchema)
  .openapi({ required: ['default'] })
  .openapi('QueueControlMapping')

const QueueInsertPointerSchema = z
  .object({
    afterIdentifier: ContentIdentifierSchema.exactOptional(),
    replace: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueueInsertPointer')

const QueuePlayPointerSchema = z
  .object({
    contentIdentifier: ContentIdentifierSchema.exactOptional(),
    offsetInMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10942 }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('QueuePlayPointer')

const QueueSchema = z
  .object({
    content: z.array(ContentSchema).max(1000),
    contentItemsCount: z.uint32().nullable().exactOptional(),
    controls: QueueControlMappingSchema.exactOptional(),
    identifier: QueueIdentifierSchema,
    insertPointer: QueueInsertPointerSchema.exactOptional(),
    nextContentUrl: z.string().min(1).max(2000).nullable().exactOptional(),
    playPointer: QueuePlayPointerSchema.exactOptional(),
    prerollSeconds: z.float64().exactOptional(),
    previousContentUrl: z.string().min(1).max(2000).nullable().exactOptional(),
    skipsRemaining: z.uint32().nullable().exactOptional(),
    version: z
      .string()
      .regex(/[0-9]+\.[0-9]+\.[0-9]+/)
      .max(25),
  })
  .openapi({ required: ['version', 'identifier', 'content'] })
  .openapi('Queue')

const QueueActivityReportEventSchema = z
  .enum([
    'local.playing.elapsed',
    'local.playing.paused',
    'local.playing.continued',
    'local.playing.scrub',
    'local.playing.fastForward',
    'local.playing.fastRewind',
    'local.playing.transitioned.naturally',
    'local.playing.transitioned.skip_next',
    'local.playing.transitioned.skip_previous',
    'local.playing.transitioned.queue_replaced',
    'local.stopped.naturally',
    'local.stopped.skip_past_end',
    'local.command.like',
    'local.command.dislike',
    'local.command.bookmark',
  ])
  .openapi('QueueActivityReportEvent')

const UpdateActivityRequestSchema = z
  .object({
    constraints: ConstraintsSchema.exactOptional(),
    nowPlaying: PlayerContextSchema.exactOptional(),
    previouslyPlaying: PlayerContextSchema.exactOptional(),
    report: QueueActivityReportEventSchema,
    timestamp: z.iso.datetime({ offset: true }),
    userActivity: UserActivitySchema,
    version: z.string().regex(/[0-9]+\.[0-9]+\.[0-9]+/),
  })
  .openapi({ required: ['version', 'timestamp', 'report', 'userActivity'] })
  .openapi('UpdateActivityRequest')

const UpdateActivityResponseSchema = z
  .object({ queue: QueueSchema.exactOptional(), userActivity: UserActivitySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateActivityResponse')

const UpdateMediaAffinityIntentSchema = IntentSchema.and(
  z
    .object({
      affinityType: MediaAffinityTypeSchema.exactOptional(),
      class: z.literal('UpdateMediaAffinityIntent'),
      mediaItems: z.array(MediaItemSchema).exactOptional(),
      mediaSearch: MediaSearchSchema.exactOptional(),
    })
    .openapi({ required: ['class'] }),
)
  .openapi({ required: ['class'] })
  .openapi('UpdateMediaAffinityIntent')

const UpdateMediaAffinityIntentResponseCodeSchema = z
  .enum(['unspecified', 'inProgress', 'success', 'failure', 'failureRequiringAppLaunch'])
  .openapi('UpdateMediaAffinityIntentResponseCode')

const UpdateMediaAffinityIntentResponseSchema = IntentResponseSchema.and(
  z
    .object({
      class: z.literal('UpdateMediaAffinityIntentResponse'),
      code: UpdateMediaAffinityIntentResponseCodeSchema,
    })
    .openapi({ required: ['class', 'code'] }),
)
  .openapi({ required: ['class', 'code'] })
  .openapi('UpdateMediaAffinityIntentResponse')

const UpdateMediaAffinityIntentHandlingHandleInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('UpdateMediaAffinityIntentHandling.handle'),
        result: z
          .object({ response: UpdateMediaAffinityIntentResponseSchema })
          .openapi({ required: ['response'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('UpdateMediaAffinityIntentHandlingHandleInvocationResponse')

const UpdateMediaAffinityIntentHandlingInvocationSchema = InvocationSchema.and(
  z
    .object({
      method: z.enum([
        'UpdateMediaAffinityIntentHandling.resolveMediaItems',
        'UpdateMediaAffinityIntentHandling.resolveAffinityType',
        'UpdateMediaAffinityIntentHandling.handle',
      ]),
      params: z
        .object({ intent: UpdateMediaAffinityIntentSchema })
        .openapi({ required: ['intent'] }),
    })
    .openapi({ required: ['method', 'params'] }),
)
  .openapi({
    discriminator: {
      mapping: {
        'UpdateMediaAffinityIntentHandling.handle':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingInvocation',
        'UpdateMediaAffinityIntentHandling.resolveAffinityType':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingInvocation',
        'UpdateMediaAffinityIntentHandling.resolveMediaItems':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingInvocation',
      },
      propertyName: 'method',
    },
    required: ['method', 'params'],
  })
  .openapi('UpdateMediaAffinityIntentHandlingInvocation')

const UpdateMediaAffinityMediaItemUnsupportedReasonSchema = z
  .enum([
    'loginRequired',
    'subscriptionRequired',
    'unsupportedMediaType',
    'explicitContentSettings',
  ])
  .openapi('UpdateMediaAffinityMediaItemUnsupportedReason')

const UpdateMediaAffinityMediaItemResolutionResultSchema = IntentResolutionResultSchema.and(
  z
    .object({
      class: z.literal('UpdateMediaAffinityMediaItemResolutionResult').exactOptional(),
      confirmationRequired: z
        .object({ mediaItemToConfirm: MediaItemSchema })
        .exactOptional()
        .openapi({ required: ['mediaItemToConfirm'], 'x-flow-exception': 'Requires Confirmation' }),
      disambiguation: z
        .object({ mediaItemsToDisambiguate: z.array(MediaItemSchema).min(2) })
        .exactOptional()
        .openapi({ required: ['mediaItemsToDisambiguate'] }),
      success: z
        .object({ resolvedMediaItem: MediaItemSchema })
        .exactOptional()
        .openapi({ required: ['resolvedMediaItem'] }),
      unsupported: z
        .object({ reason: UpdateMediaAffinityMediaItemUnsupportedReasonSchema.exactOptional() })
        .exactOptional()
        .openapi({ 'x-flow-exception': 'Unsupported', required: [] }),
    })
    .openapi({ required: [] }),
).openapi('UpdateMediaAffinityMediaItemResolutionResult')

const UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('UpdateMediaAffinityIntentHandling.resolveMediaItems'),
        result: z
          .object({ resolutionResult: z.array(UpdateMediaAffinityMediaItemResolutionResultSchema) })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse')

const UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseSchema =
  InvocationResponseSchema.and(
    z
      .object({
        method: z.literal('UpdateMediaAffinityIntentHandling.resolveAffinityType'),
        result: z
          .object({ resolutionResult: MediaAffinityTypeResolutionResultSchema })
          .openapi({ required: ['resolutionResult'] }),
      })
      .openapi({ required: ['method', 'result'] }),
  )
    .openapi({ required: ['method', 'result'] })
    .openapi('UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse')

const UpdateMediaAffinityIntentHandlingInvocationResponseSchema = z
  .xor([
    UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponseSchema,
    UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponseSchema,
    UpdateMediaAffinityIntentHandlingHandleInvocationResponseSchema,
    ProtocolExceptionInvocationResponseSchema,
  ])
  .openapi({
    discriminator: {
      mapping: {
        ProtocolException: '#/components/schemas/ProtocolExceptionInvocationResponse',
        'UpdateMediaAffinityIntentHandling.handle':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingHandleInvocationResponse',
        'UpdateMediaAffinityIntentHandling.resolveAffinityType':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse',
        'UpdateMediaAffinityIntentHandling.resolveMediaItems':
          '#/components/schemas/UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse',
      },
      propertyName: 'method',
    },
  })
  .openapi('UpdateMediaAffinityIntentHandlingInvocationResponse')

export const getConfigurationRoute = createRoute({
  method: 'get',
  path: '/configuration',
  tags: ['config'],
  summary: 'Configuration Resource',
  operationId: 'extensionConfiguration',
  request: {
    headers: z.object({
      'x-applecloudextension-session-id': z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-session-id',
            required: true,
            schema: { maxLength: 128, minLength: 1, type: 'string' },
          },
        }),
      'x-applecloudextension-retry-count': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-retry-count',
            required: false,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'Request-Timeout': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .openapi({
          param: {
            in: 'header',
            name: 'Request-Timeout',
            required: true,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'User-Agent': z
        .string()
        .regex(/AppleCloudExtension\/([0-9]+\.[0-9]+\.[0-9]+) *.*/)
        .max(250)
        .openapi({
          param: {
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: {
              maxLength: 250,
              pattern: 'AppleCloudExtension/([0-9]+\\.[0-9]+\\.[0-9]+) *.*',
              type: 'string',
            },
          },
        }),
      'Accept-Language': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'If-None-Match': ExtensionConfigTagSchema.openapi({
        param: {
          in: 'header',
          name: 'If-None-Match',
          schema: { $ref: '#/components/schemas/ExtensionConfigTag' },
          required: false,
        },
      }).exactOptional(),
      'Cache-Control': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Cache-Control',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/jose': { schema: ExtensionConfigSchema } },
      headers: z.object({
        'Cache-Control': {
          required: true,
          example: 'max-age=1800, must-revalidate, private',
          schema: z.string().openapi({ example: 'max-age=1800, must-revalidate, private' }),
        },
        ETag: { required: true, schema: ExtensionConfigTagSchema },
        'x-applecloudextension-session-id': {
          schema: z
            .string()
            .min(1)
            .max(128)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: {
      description: '',
      headers: z.object({
        'Cache-Control': {
          required: true,
          example: 'max-age=1800, must-revalidate, private',
          schema: z.string().openapi({ example: 'max-age=1800, must-revalidate, private' }),
        },
        'x-applecloudextension-session-id': {
          schema: z
            .string()
            .min(1)
            .max(128)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postIntentAddMediaRoute = createRoute({
  method: 'post',
  path: '/intent/addMedia',
  tags: ['intent'],
  summary: 'addMedia',
  operationId: 'addMediaIntentHandling',
  request: {
    headers: z.object({
      'x-applecloudextension-session-id': z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-session-id',
            required: true,
            schema: { maxLength: 128, minLength: 1, type: 'string' },
          },
        }),
      'x-applecloudextension-retry-count': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-retry-count',
            required: false,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'Request-Timeout': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .openapi({
          param: {
            in: 'header',
            name: 'Request-Timeout',
            required: true,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'User-Agent': z
        .string()
        .regex(/AppleCloudExtension\/([0-9]+\.[0-9]+\.[0-9]+) *.*/)
        .max(250)
        .openapi({
          param: {
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: {
              maxLength: 250,
              pattern: 'AppleCloudExtension/([0-9]+\\.[0-9]+\\.[0-9]+) *.*',
              type: 'string',
            },
          },
        }),
      'Accept-Language': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(AddMediaIntentHandlingInvocationSchema) } },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.array(AddMediaIntentHandlingInvocationResponseSchema) },
      },
      headers: z.object({
        'x-applecloudextension-session-id': {
          schema: z
            .string()
            .min(1)
            .max(128)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postIntentPlayMediaRoute = createRoute({
  method: 'post',
  path: '/intent/playMedia',
  tags: ['intent'],
  summary: 'playMedia',
  operationId: 'playMediaIntentHandling',
  request: {
    headers: z.object({
      'x-applecloudextension-session-id': z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-session-id',
            required: true,
            schema: { maxLength: 128, minLength: 1, type: 'string' },
          },
        }),
      'x-applecloudextension-retry-count': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-retry-count',
            required: false,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'Request-Timeout': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .openapi({
          param: {
            in: 'header',
            name: 'Request-Timeout',
            required: true,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'User-Agent': z
        .string()
        .regex(/AppleCloudExtension\/([0-9]+\.[0-9]+\.[0-9]+) *.*/)
        .max(250)
        .openapi({
          param: {
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: {
              maxLength: 250,
              pattern: 'AppleCloudExtension/([0-9]+\\.[0-9]+\\.[0-9]+) *.*',
              type: 'string',
            },
          },
        }),
      'Accept-Language': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(PlayMediaIntentHandlingInvocationSchema) } },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.array(PlayMediaIntentHandlingInvocationResponseSchema) },
      },
      headers: z.object({
        'x-applecloudextension-session-id': {
          schema: z
            .string()
            .min(1)
            .max(128)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postIntentUpdateMediaAffinityRoute = createRoute({
  method: 'post',
  path: '/intent/updateMediaAffinity',
  tags: ['intent'],
  summary: 'updateMediaAffinity',
  operationId: 'updateMediaAffinityIntentHandling',
  request: {
    headers: z.object({
      'x-applecloudextension-session-id': z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-session-id',
            required: true,
            schema: { maxLength: 128, minLength: 1, type: 'string' },
          },
        }),
      'x-applecloudextension-retry-count': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-retry-count',
            required: false,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'Request-Timeout': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .openapi({
          param: {
            in: 'header',
            name: 'Request-Timeout',
            required: true,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'User-Agent': z
        .string()
        .regex(/AppleCloudExtension\/([0-9]+\.[0-9]+\.[0-9]+) *.*/)
        .max(250)
        .openapi({
          param: {
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: {
              maxLength: 250,
              pattern: 'AppleCloudExtension/([0-9]+\\.[0-9]+\\.[0-9]+) *.*',
              type: 'string',
            },
          },
        }),
      'Accept-Language': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.array(UpdateMediaAffinityIntentHandlingInvocationSchema) },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(UpdateMediaAffinityIntentHandlingInvocationResponseSchema),
        },
      },
      headers: z.object({
        'x-applecloudextension-session-id': {
          schema: z
            .string()
            .min(1)
            .max(128)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postQueuesPlayMediaRoute = createRoute({
  method: 'post',
  path: '/queues/playMedia',
  tags: ['queues'],
  summary: 'playMedia',
  operationId: 'playMediaOnQueue',
  request: {
    headers: z.object({
      'x-applecloudextension-session-id': z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-session-id',
            required: true,
            schema: { maxLength: 128, minLength: 1, type: 'string' },
          },
        }),
      'x-applecloudextension-retry-count': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-retry-count',
            required: false,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'User-Agent': z
        .string()
        .regex(/AppleCloudExtension\/([0-9]+\.[0-9]+\.[0-9]+) *.*/)
        .max(250)
        .openapi({
          param: {
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: {
              maxLength: 250,
              pattern: 'AppleCloudExtension/([0-9]+\\.[0-9]+\\.[0-9]+) *.*',
              type: 'string',
            },
          },
        }),
      'Accept-Language': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlayMediaRequestSchema } } },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: QueueSchema } } },
    204: { description: '' },
    401: { description: '' },
    410: { description: '' },
  },
})

export const postQueuesUpdateActivityRoute = createRoute({
  method: 'post',
  path: '/queues/updateActivity',
  tags: ['queues'],
  summary: 'updateActivity',
  operationId: 'updateActivityOnQueue',
  request: {
    headers: z.object({
      'x-applecloudextension-session-id': z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-session-id',
            required: true,
            schema: { maxLength: 128, minLength: 1, type: 'string' },
          },
        }),
      'x-applecloudextension-retry-count': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-applecloudextension-retry-count',
            required: false,
            schema: { format: 'uint32', minimum: 1, type: 'number' },
          },
        }),
      'User-Agent': z
        .string()
        .regex(/AppleCloudExtension\/([0-9]+\.[0-9]+\.[0-9]+) *.*/)
        .max(250)
        .openapi({
          param: {
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: {
              maxLength: 250,
              pattern: 'AppleCloudExtension/([0-9]+\\.[0-9]+\\.[0-9]+) *.*',
              type: 'string',
            },
          },
        }),
      'Accept-Language': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateActivityRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UpdateActivityResponseSchema } },
    },
    204: { description: '' },
    401: { description: '' },
    404: { description: '' },
    410: { description: '' },
  },
})
