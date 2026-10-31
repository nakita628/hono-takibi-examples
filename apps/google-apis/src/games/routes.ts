import { createRoute, z } from '@hono/zod-openapi'

const AchievementDefinitionSchema = z
  .object({
    achievementType: z
      .enum(['ACHIEVEMENT_TYPE_UNSPECIFIED', 'STANDARD', 'INCREMENTAL'])
      .exactOptional()
      .openapi({ description: 'The type of the achievement.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the achievement.' }),
    experiencePoints: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Experience points which will be earned when unlocking this achievement.',
      }),
    formattedTotalSteps: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total steps for an incremental achievement as a string.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the achievement.' }),
    initialState: z
      .enum(['INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED', 'HIDDEN', 'REVEALED', 'UNLOCKED'])
      .exactOptional()
      .openapi({ description: 'The initial state of the achievement.' }),
    isRevealedIconUrlDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the revealed icon image being returned is a default image, or is provided by the game.',
      }),
    isUnlockedIconUrlDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the unlocked icon image being returned is a default image, or is game-provided.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinition`.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the achievement.' }),
    revealedIconUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The image URL for the revealed achievement icon.' }),
    totalSteps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total steps for an incremental achievement.' }),
    unlockedIconUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The image URL for the unlocked achievement icon.' }),
  })
  .openapi({ description: 'An achievement definition object.', required: [] })
  .openapi('AchievementDefinition')

const AchievementDefinitionsListResponseSchema = z
  .object({
    items: z
      .array(AchievementDefinitionSchema)
      .exactOptional()
      .openapi({ description: 'The achievement definitions.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinitionsListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token corresponding to the next page of results.' }),
  })
  .openapi({ description: 'A list of achievement definition objects.', required: [] })
  .openapi('AchievementDefinitionsListResponse')

const AchievementIncrementResponseSchema = z
  .object({
    currentSteps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The current steps recorded for this incremental achievement.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementIncrementResponse`.',
      }),
    newlyUnlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the current steps for the achievement has reached the number of steps required to unlock.',
      }),
  })
  .openapi({ description: 'An achievement increment response', required: [] })
  .openapi('AchievementIncrementResponse')

const AchievementRevealResponseSchema = z
  .object({
    currentState: z
      .enum(['REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED', 'REVEALED', 'UNLOCKED'])
      .exactOptional()
      .openapi({
        description:
          'The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementRevealResponse`.',
      }),
  })
  .openapi({ description: 'An achievement reveal response', required: [] })
  .openapi('AchievementRevealResponse')

const AchievementSetStepsAtLeastResponseSchema = z
  .object({
    currentSteps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The current steps recorded for this incremental achievement.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementSetStepsAtLeastResponse`.',
      }),
    newlyUnlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the current steps for the achievement has reached the number of steps required to unlock.',
      }),
  })
  .openapi({ description: 'An achievement set steps at least response.', required: [] })
  .openapi('AchievementSetStepsAtLeastResponse')

const AchievementUnlockResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUnlockResponse`.',
      }),
    newlyUnlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).',
      }),
  })
  .openapi({ description: 'An achievement unlock response', required: [] })
  .openapi('AchievementUnlockResponse')

const GamesAchievementIncrementSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementIncrement`.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requestId associated with an increment to an achievement.' }),
    steps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of steps to be incremented.' }),
  })
  .openapi({ description: 'The payload to request to increment an achievement.', required: [] })
  .openapi('GamesAchievementIncrement')

const GamesAchievementSetStepsAtLeastSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`.',
      }),
    steps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum number of steps for the achievement to be set to.' }),
  })
  .openapi({ description: 'The payload to request to increment an achievement.', required: [] })
  .openapi('GamesAchievementSetStepsAtLeast')

const AchievementUpdateRequestSchema = z
  .object({
    achievementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The achievement this update is being applied to.' }),
    incrementPayload: GamesAchievementIncrementSchema.exactOptional().openapi({
      description:
        'The payload if an update of type `INCREMENT` was requested for the achievement.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateRequest`.',
      }),
    setStepsAtLeastPayload: GamesAchievementSetStepsAtLeastSchema.exactOptional().openapi({
      description:
        'The payload if an update of type `SET_STEPS_AT_LEAST` was requested for the achievement.',
    }),
    updateType: z
      .enum([
        'ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED',
        'REVEAL',
        'UNLOCK',
        'INCREMENT',
        'SET_STEPS_AT_LEAST',
      ])
      .exactOptional()
      .openapi({ description: 'The type of update being applied.' }),
  })
  .openapi({ description: 'A request to update an achievement.', required: [] })
  .openapi('AchievementUpdateRequest')

const AchievementUpdateMultipleRequestSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`.',
      }),
    updates: z
      .array(AchievementUpdateRequestSchema)
      .exactOptional()
      .openapi({ description: 'The individual achievement update requests.' }),
  })
  .openapi({ description: 'A list of achievement update requests.', required: [] })
  .openapi('AchievementUpdateMultipleRequest')

const AchievementUpdateResponseSchema = z
  .object({
    achievementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The achievement this update is was applied to.' }),
    currentState: z
      .enum(['UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED', 'HIDDEN', 'REVEALED', 'UNLOCKED'])
      .exactOptional()
      .openapi({ description: 'The current state of the achievement.' }),
    currentSteps: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The current steps recorded for this achievement if it is incremental.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateResponse`.',
      }),
    newlyUnlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).',
      }),
    updateOccurred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the requested updates actually affected the achievement.' }),
  })
  .openapi({ description: 'An updated achievement.', required: [] })
  .openapi('AchievementUpdateResponse')

const AchievementUpdateMultipleResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleResponse`.',
      }),
    updatedAchievements: z
      .array(AchievementUpdateResponseSchema)
      .exactOptional()
      .openapi({ description: 'The updated state of the achievements.' }),
  })
  .openapi({ description: 'Response message for UpdateMultipleAchievements rpc.', required: [] })
  .openapi('AchievementUpdateMultipleResponse')

const ImageAssetSchema = z
  .object({
    height: z.int32().exactOptional().openapi({ description: 'The height of the asset.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#imageAsset`.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the asset.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the asset.' }),
    width: z.int32().exactOptional().openapi({ description: 'The width of the asset.' }),
  })
  .openapi({ description: 'An image asset object.', required: [] })
  .openapi('ImageAsset')

const ApplicationCategorySchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationCategory`.',
      }),
    primary: z.string().exactOptional().openapi({ description: 'The primary category.' }),
    secondary: z.string().exactOptional().openapi({ description: 'The secondary category.' }),
  })
  .openapi({ description: 'An application category object.', required: [] })
  .openapi('ApplicationCategory')

const InstanceAndroidDetailsSchema = z
  .object({
    enablePiracyCheck: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag indicating whether the anti-piracy check is enabled.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceAndroidDetails`.',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Android package name which maps to Google Play URL.' }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates that this instance is the default for new installations.',
      }),
  })
  .openapi({ description: 'The Android instance details resource.', required: [] })
  .openapi('InstanceAndroidDetails')

const InstanceIosDetailsSchema = z
  .object({
    bundleIdentifier: z.string().exactOptional().openapi({ description: 'Bundle identifier.' }),
    itunesAppId: z.string().exactOptional().openapi({ description: 'iTunes App ID.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceIosDetails`.',
      }),
    preferredForIpad: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that this instance is the default for new installations on iPad devices.',
      }),
    preferredForIphone: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that this instance is the default for new installations on iPhone devices.',
      }),
    supportIpad: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate if this instance supports iPad.' }),
    supportIphone: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate if this instance supports iPhone.' }),
  })
  .openapi({ description: 'The iOS details resource.', required: [] })
  .openapi('InstanceIosDetails')

const InstanceWebDetailsSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceWebDetails`.',
      }),
    launchUrl: z.string().exactOptional().openapi({ description: 'Launch URL for the game.' }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates that this instance is the default for new installations.',
      }),
  })
  .openapi({ description: 'The Web details resource.', required: [] })
  .openapi('InstanceWebDetails')

const InstanceSchema = z
  .object({
    acquisitionUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI which shows where a user can acquire this instance.' }),
    androidInstance: InstanceAndroidDetailsSchema.exactOptional().openapi({
      description: 'Platform dependent details for Android.',
    }),
    iosInstance: InstanceIosDetailsSchema.exactOptional().openapi({
      description: 'Platform dependent details for iOS.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#instance`.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Localized display name.' }),
    platformType: z
      .enum(['PLATFORM_TYPE_UNSPECIFIED', 'ANDROID', 'IOS', 'WEB_APP'])
      .exactOptional()
      .openapi({ description: 'The platform type.' }),
    realtimePlay: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to show if this game instance supports realtime play.' }),
    turnBasedPlay: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to show if this game instance supports turn based play.' }),
    webInstance: InstanceWebDetailsSchema.exactOptional().openapi({
      description: 'Platform dependent details for Web.',
    }),
  })
  .openapi({ description: 'The Instance resource.', required: [] })
  .openapi('Instance')

const ApplicationSchema = z
  .object({
    achievement_count: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of achievements visible to the currently authenticated player.',
      }),
    assets: z
      .array(ImageAssetSchema)
      .exactOptional()
      .openapi({ description: 'The assets of the application.' }),
    author: z.string().exactOptional().openapi({ description: 'The author of the application.' }),
    category: ApplicationCategorySchema.exactOptional().openapi({
      description: 'The category of the application.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the application.' }),
    enabledFeatures: z
      .array(z.enum(['APPLICATION_FEATURE_UNSPECIFIED', 'SNAPSHOTS']))
      .exactOptional()
      .openapi({ description: 'A list of features that have been enabled for the application.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the application.' }),
    instances: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({ description: 'The instances of the application.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#application`.',
      }),
    lastUpdatedTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last updated timestamp of the application.' }),
    leaderboard_count: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of leaderboards visible to the currently authenticated player.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the application.' }),
    themeColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0").',
      }),
  })
  .openapi({ description: 'The Application resource.', required: [] })
  .openapi('Application')

const ApplicationPlayerIdSchema = z
  .object({
    applicationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The application that this player identifier is for.' }),
    playerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The player identifier for the application.' }),
  })
  .openapi({ description: 'Primary scoped player identifier for an application.', required: [] })
  .openapi('ApplicationPlayerId')

const ApplicationVerifyResponseSchema = z
  .object({
    alternate_player_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationVerifyResponse`.',
      }),
    player_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the player that was issued the auth token used in this request.',
      }),
  })
  .openapi({
    description: 'A third party application verification response resource.',
    required: [],
  })
  .openapi('ApplicationVerifyResponse')

const CategorySchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'The category name.' }),
    experiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'Experience points earned in this category.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#category`.',
      }),
  })
  .openapi({ description: 'Data related to individual game categories.', required: [] })
  .openapi('Category')

const CategoryListResponseSchema = z
  .object({
    items: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({ description: 'The list of categories with usage data.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#categoryListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token corresponding to the next page of results.' }),
  })
  .openapi({ description: 'A third party list metagame categories response.', required: [] })
  .openapi('CategoryListResponse')

const EndPointSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL suitable for loading in a web browser for the requested endpoint.',
      }),
  })
  .openapi({ description: 'Container for a URL end point of the requested type.', required: [] })
  .openapi('EndPoint')

const EventPeriodRangeSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodRange`.',
      }),
    periodEndMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).',
      }),
    periodStartMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).',
      }),
  })
  .openapi({ description: 'An event period time range.', required: [] })
  .openapi('EventPeriodRange')

const EventBatchRecordFailureSchema = z
  .object({
    failureCause: z
      .enum([
        'EVENT_FAILURE_CAUSE_UNSPECIFIED',
        'TOO_LARGE',
        'TIME_PERIOD_EXPIRED',
        'TIME_PERIOD_SHORT',
        'TIME_PERIOD_LONG',
        'ALREADY_UPDATED',
        'RECORD_RATE_HIGH',
      ])
      .exactOptional()
      .openapi({ description: 'The cause for the update failure.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventBatchRecordFailure`.',
      }),
    range: EventPeriodRangeSchema.exactOptional().openapi({
      description: 'The time range which was rejected; empty for a request-wide failure.',
    }),
  })
  .openapi({ description: 'A batch update failure resource.', required: [] })
  .openapi('EventBatchRecordFailure')

const EventChildSchema = z
  .object({
    childId: z.string().exactOptional().openapi({ description: 'The ID of the child event.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventChild`.',
      }),
  })
  .openapi({ description: 'An event child relationship resource.', required: [] })
  .openapi('EventChild')

const EventDefinitionSchema = z
  .object({
    childEvents: z
      .array(EventChildSchema)
      .exactOptional()
      .openapi({ description: 'A list of events that are a child of this event.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of what this event represents.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name to display for the event.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the event.' }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base URL for the image that represents the event.' }),
    isDefaultImageUrl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the icon image being returned is a default image, or is game-provided.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinition`.',
      }),
    visibility: z
      .enum(['EVENT_VISIBILITY_UNSPECIFIED', 'REVEALED', 'HIDDEN'])
      .exactOptional()
      .openapi({ description: 'The visibility of event being tracked in this definition.' }),
  })
  .openapi({ description: 'An event definition resource.', required: [] })
  .openapi('EventDefinition')

const EventDefinitionListResponseSchema = z
  .object({
    items: z
      .array(EventDefinitionSchema)
      .exactOptional()
      .openapi({ description: 'The event definitions.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinitionListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
  })
  .openapi({ description: 'A ListDefinitions response.', required: [] })
  .openapi('EventDefinitionListResponse')

const EventUpdateRequestSchema = z
  .object({
    definitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the event being modified in this update.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`.',
      }),
    updateCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of times this event occurred in this time period.' }),
  })
  .openapi({ description: 'An event period update resource.', required: [] })
  .openapi('EventUpdateRequest')

const EventPeriodUpdateSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodUpdate`.',
      }),
    timePeriod: EventPeriodRangeSchema.exactOptional().openapi({
      description: 'The time period being covered by this update.',
    }),
    updates: z
      .array(EventUpdateRequestSchema)
      .exactOptional()
      .openapi({ description: 'The updates being made for this time period.' }),
  })
  .openapi({ description: 'An event period update resource.', required: [] })
  .openapi('EventPeriodUpdate')

const EventRecordFailureSchema = z
  .object({
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the event that was not updated.' }),
    failureCause: z
      .enum(['EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED', 'NOT_FOUND', 'INVALID_UPDATE_VALUE'])
      .exactOptional()
      .openapi({ description: 'The cause for the update failure.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordFailure`.',
      }),
  })
  .openapi({ description: 'An event update failure resource.', required: [] })
  .openapi('EventRecordFailure')

const EventRecordRequestSchema = z
  .object({
    currentTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID used to identify this attempt to record events.' }),
    timePeriods: z
      .array(EventPeriodUpdateSchema)
      .exactOptional()
      .openapi({ description: 'A list of the time period updates being made in this request.' }),
  })
  .openapi({ description: 'An event period update resource.', required: [] })
  .openapi('EventRecordRequest')

const PlayerEventSchema = z
  .object({
    definitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the event definition.' }),
    formattedNumEvents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEvent`.',
      }),
    numEvents: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current number of times this event has occurred.' }),
    playerId: z.string().exactOptional().openapi({ description: 'The ID of the player.' }),
  })
  .openapi({ description: 'An event status resource.', required: [] })
  .openapi('PlayerEvent')

const EventUpdateResponseSchema = z
  .object({
    batchFailures: z
      .array(EventBatchRecordFailureSchema)
      .exactOptional()
      .openapi({ description: 'Any batch-wide failures which occurred applying updates.' }),
    eventFailures: z
      .array(EventRecordFailureSchema)
      .exactOptional()
      .openapi({ description: 'Any failures updating a particular event.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`.',
      }),
    playerEvents: z
      .array(PlayerEventSchema)
      .exactOptional()
      .openapi({ description: 'The current status of any updated events' }),
  })
  .openapi({ description: 'An event period update resource.', required: [] })
  .openapi('EventUpdateResponse')

const GetMultipleApplicationPlayerIdsResponseSchema = z
  .object({
    playerIds: z
      .array(ApplicationPlayerIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The requested applications along with the scoped ids for tha player, if that player has an id for the application. If not, the application is not included in the response.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Response message for GetMultipleApplicationPlayerIds rpc.',
    required: [],
  })
  .openapi('GetMultipleApplicationPlayerIdsResponse')

const LeaderboardSchema = z
  .object({
    iconUrl: z.string().exactOptional().openapi({ description: 'The icon for the leaderboard.' }),
    id: z.string().exactOptional().openapi({ description: 'The leaderboard ID.' }),
    isIconUrlDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the icon image being returned is a default image, or is game-provided.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboard`.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the leaderboard.' }),
    order: z
      .enum(['SCORE_ORDER_UNSPECIFIED', 'LARGER_IS_BETTER', 'SMALLER_IS_BETTER'])
      .exactOptional()
      .openapi({ description: 'How scores are ordered.' }),
  })
  .openapi({ description: 'The Leaderboard resource.', required: [] })
  .openapi('Leaderboard')

const PlayerLevelSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLevel`.',
      }),
    level: z.int32().exactOptional().openapi({ description: 'The level for the user.' }),
    maxExperiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum experience points for this level.' }),
    minExperiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'The minimum experience points for this level.' }),
  })
  .openapi({ description: "1P/3P metadata about a user's level.", required: [] })
  .openapi('PlayerLevel')

const PlayerExperienceInfoSchema = z
  .object({
    currentExperiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current number of experience points for the player.' }),
    currentLevel: PlayerLevelSchema.exactOptional().openapi({
      description: 'The current level of the player.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerExperienceInfo`.',
      }),
    lastLevelUpTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp when the player was leveled up, in millis since Unix epoch UTC.',
      }),
    nextLevel: PlayerLevelSchema.exactOptional().openapi({
      description:
        'The next level of the player. If the current level is the maximum level, this should be same as the current level.',
    }),
  })
  .openapi({ description: "1P/3P metadata about the player's experience.", required: [] })
  .openapi('PlayerExperienceInfo')

const ProfileSettingsSchema = z
  .object({
    friendsListVisibility: z
      .enum(['FRIENDS_LIST_VISIBILITY_UNSPECIFIED', 'VISIBLE', 'REQUEST_REQUIRED', 'UNAVAILABLE'])
      .exactOptional(),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#profileSettings`.',
      }),
    profileVisible: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether the player's profile is visible to the currently signed in player.",
      }),
  })
  .openapi({ description: 'Profile settings', required: [] })
  .openapi('ProfileSettings')

const PlayerSchema = z
  .object({
    avatarImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base URL for the image that represents the player.' }),
    bannerUrlLandscape: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to the landscape mode player banner image.' }),
    bannerUrlPortrait: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to the portrait mode player banner image.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name to display for the player.' }),
    experienceInfo: PlayerExperienceInfoSchema.exactOptional().openapi({
      description: 'An object to represent Play Game experience information for the player.',
    }),
    friendStatus: z
      .enum(['FRIEND_STATUS_UNSPECIFIED', 'NO_RELATIONSHIP', 'FRIEND'])
      .exactOptional()
      .openapi({
        description:
          'The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game.',
      }),
    gamePlayerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Per-application unique player identifier.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#player`',
      }),
    name: z
      .object({
        familyName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The family name of this player. In some places, this is known as the last name.',
          }),
        givenName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The given name of this player. In some places, this is known as the first name.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A representation of the individual components of the name.',
        required: [],
      }),
    originalPlayerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.',
      }),
    playerId: z.string().exactOptional().openapi({ description: 'The ID of the player.' }),
    profileSettings: ProfileSettingsSchema.exactOptional().openapi({
      description:
        "The player's profile settings. Controls whether or not the player's profile is visible to other players.",
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "The player's title rewarded for their game activities." }),
  })
  .openapi({ description: 'A Player resource.', required: [] })
  .openapi('Player')

const LeaderboardEntrySchema = z
  .object({
    formattedScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized string for the numerical value of this score.' }),
    formattedScoreRank: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The localized string for the rank of this score for this leaderboard.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardEntry`.',
      }),
    player: PlayerSchema.exactOptional().openapi({
      description: 'The player who holds this score.',
    }),
    scoreRank: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rank of this score for this leaderboard.' }),
    scoreTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.',
      }),
    scoreValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numerical value of this score.' }),
    timeSpan: z
      .enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'])
      .exactOptional()
      .openapi({ description: 'The time span of this high score.' }),
    writeTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.',
      }),
  })
  .openapi({ description: 'The Leaderboard Entry resource.', required: [] })
  .openapi('LeaderboardEntry')

const LeaderboardListResponseSchema = z
  .object({
    items: z.array(LeaderboardSchema).exactOptional().openapi({ description: 'The leaderboards.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token corresponding to the next page of results.' }),
  })
  .openapi({ description: 'A list of leaderboard objects.', required: [] })
  .openapi('LeaderboardListResponse')

const LeaderboardScoreRankSchema = z
  .object({
    formattedNumScores: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of scores in the leaderboard as a string.' }),
    formattedRank: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rank in the leaderboard as a string.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScoreRank`.',
      }),
    numScores: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of scores in the leaderboard.' }),
    rank: z.string().exactOptional().openapi({ description: 'The rank in the leaderboard.' }),
  })
  .openapi({ description: 'A score rank in a leaderboard.', required: [] })
  .openapi('LeaderboardScoreRank')

const LeaderboardScoresSchema = z
  .object({
    items: z
      .array(LeaderboardEntrySchema)
      .exactOptional()
      .openapi({ description: 'The scores in the leaderboard.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScores`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
    numScores: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of scores in the leaderboard.' }),
    playerScore: LeaderboardEntrySchema.exactOptional().openapi({
      description:
        "The score of the requesting player on the leaderboard. The player's score may appear both here and in the list of scores above. If you are viewing a public leaderboard and the player is not sharing their gameplay information publicly, the `scoreRank`and `formattedScoreRank` values will not be present.",
    }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the previous page of results.' }),
  })
  .openapi({ description: 'A ListScores response.', required: [] })
  .openapi('LeaderboardScores')

const MetagameConfigSchema = z
  .object({
    currentVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#metagameConfig`.',
      }),
    playerLevels: z
      .array(PlayerLevelSchema)
      .exactOptional()
      .openapi({ description: 'The list of player levels.' }),
  })
  .openapi({ description: 'The metagame config resource', required: [] })
  .openapi('MetagameConfig')

const PlayerAchievementSchema = z
  .object({
    achievementState: z
      .enum(['STATE_UNSPECIFIED', 'HIDDEN', 'REVEALED', 'UNLOCKED'])
      .exactOptional()
      .openapi({ description: 'The state of the achievement.' }),
    currentSteps: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The current steps for an incremental achievement.' }),
    experiencePoints: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.',
      }),
    formattedCurrentStepsString: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current steps for an incremental achievement as a string.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the achievement.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievement`.',
      }),
    lastUpdatedTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: "The timestamp of the last modification to this achievement's state.",
      }),
  })
  .openapi({ description: 'An achievement object.', required: [] })
  .openapi('PlayerAchievement')

const PlayerAchievementListResponseSchema = z
  .object({
    items: z
      .array(PlayerAchievementSchema)
      .exactOptional()
      .openapi({ description: 'The achievements.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievementListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token corresponding to the next page of results.' }),
  })
  .openapi({ description: 'A list of achievement objects.', required: [] })
  .openapi('PlayerAchievementListResponse')

const PlayerEventListResponseSchema = z
  .object({
    items: z
      .array(PlayerEventSchema)
      .exactOptional()
      .openapi({ description: 'The player events.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEventListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
  })
  .openapi({ description: 'A ListByPlayer response.', required: [] })
  .openapi('PlayerEventListResponse')

const PlayerLeaderboardScoreSchema = z
  .object({
    friendsRank: LeaderboardScoreRankSchema.exactOptional().openapi({
      description: 'The rank of the score in the friends collection for this leaderboard.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScore`.',
      }),
    leaderboard_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the leaderboard this score is in.' }),
    publicRank: LeaderboardScoreRankSchema.exactOptional().openapi({
      description:
        'The public rank of the score in this leaderboard. This object will not be present if the user is not sharing their scores publicly.',
    }),
    scoreString: z
      .string()
      .exactOptional()
      .openapi({ description: 'The formatted value of this score.' }),
    scoreTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.',
      }),
    scoreValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numerical value of this score.' }),
    socialRank: LeaderboardScoreRankSchema.exactOptional().openapi({
      description: 'The social rank of the score in this leaderboard.',
    }),
    timeSpan: z
      .enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'])
      .exactOptional()
      .openapi({ description: 'The time span of this score.' }),
    writeTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.',
      }),
  })
  .openapi({ description: 'A player leaderboard score object.', required: [] })
  .openapi('PlayerLeaderboardScore')

const PlayerLeaderboardScoreListResponseSchema = z
  .object({
    items: z
      .array(PlayerLeaderboardScoreSchema)
      .exactOptional()
      .openapi({ description: 'The leaderboard scores.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScoreListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
    player: PlayerSchema.exactOptional().openapi({
      description: 'The Player resources for the owner of this score.',
    }),
  })
  .openapi({ description: 'A list of player leaderboard scores.', required: [] })
  .openapi('PlayerLeaderboardScoreListResponse')

const PlayerListResponseSchema = z
  .object({
    items: z.array(PlayerSchema).exactOptional().openapi({ description: 'The players.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token corresponding to the next page of results.' }),
  })
  .openapi({ description: 'A third party player list response.', required: [] })
  .openapi('PlayerListResponse')

const PlayerScoreSchema = z
  .object({
    formattedScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'The formatted score for this player score.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScore`.',
      }),
    score: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numerical value for this player score.' }),
    scoreTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.',
      }),
    timeSpan: z
      .enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'])
      .exactOptional()
      .openapi({ description: 'The time span for this player score.' }),
  })
  .openapi({ description: 'A player score.', required: [] })
  .openapi('PlayerScore')

const PlayerScoreResponseSchema = z
  .object({
    beatenScoreTimeSpans: z
      .array(z.enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY']))
      .exactOptional()
      .openapi({
        description:
          'The time spans where the submitted score is better than the existing score for that time span.',
      }),
    formattedScore: z
      .string()
      .exactOptional()
      .openapi({ description: 'The formatted value of the submitted score.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreResponse`.',
      }),
    leaderboardId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The leaderboard ID that this score was submitted to.' }),
    scoreTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.',
      }),
    unbeatenScores: z
      .array(PlayerScoreSchema)
      .exactOptional()
      .openapi({
        description:
          "The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's `DAILY` score, but not better than the player's scores for the `WEEKLY` or `ALL_TIME` time spans.",
      }),
  })
  .openapi({ description: 'A list of leaderboard entry resources.', required: [] })
  .openapi('PlayerScoreResponse')

const PlayerScoreListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreListResponse`.',
      }),
    submittedScores: z
      .array(PlayerScoreResponseSchema)
      .exactOptional()
      .openapi({ description: 'The score submissions statuses.' }),
  })
  .openapi({ description: 'A list of score submission statuses.', required: [] })
  .openapi('PlayerScoreListResponse')

const ScoreSubmissionSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#scoreSubmission`.',
      }),
    leaderboardId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The leaderboard this score is being submitted to.' }),
    score: z.string().exactOptional().openapi({ description: 'The new score being submitted.' }),
    scoreTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.',
      }),
  })
  .openapi({ description: 'A request to submit a score to leaderboards.', required: [] })
  .openapi('ScoreSubmission')

const PlayerScoreSubmissionListSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`.',
      }),
    scores: z
      .array(ScoreSubmissionSchema)
      .exactOptional()
      .openapi({ description: 'The score submissions.' }),
  })
  .openapi({ description: 'A list of score submission requests.', required: [] })
  .openapi('PlayerScoreSubmissionList')

const RevisionCheckResponseSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the API this client revision should use when calling API methods.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`.',
      }),
    revisionStatus: z
      .enum(['REVISION_STATUS_UNSPECIFIED', 'OK', 'DEPRECATED', 'INVALID'])
      .exactOptional()
      .openapi({ description: 'The result of the revision check.' }),
  })
  .openapi({ description: 'A third party checking a revision response.', required: [] })
  .openapi('RevisionCheckResponse')

const ScopedPlayerIdsSchema = z
  .object({
    developerPlayerKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the player across all games of the given developer. Every player has the same developer_player_key in all games of one developer. Developer player key changes for the game if the game is transferred to another developer. Note that game_player_id will stay unchanged.',
      }),
    gamePlayerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Game-scoped player identifier. This is the same id that is returned in GetPlayer game_player_id field.',
      }),
  })
  .openapi({ description: 'Scoped player identifiers.', required: [] })
  .openapi('ScopedPlayerIds')

const SnapshotImageSchema = z
  .object({
    height: z.int32().exactOptional().openapi({ description: 'The height of the image.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotImage`.',
      }),
    mime_type: z.string().exactOptional().openapi({ description: 'The MIME type of the image.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the image. This URL may be invalidated at any time and should not be cached.',
      }),
    width: z.int32().exactOptional().openapi({ description: 'The width of the image.' }),
  })
  .openapi({ description: 'An image of a snapshot.', required: [] })
  .openapi('SnapshotImage')

const SnapshotSchema = z
  .object({
    coverImage: SnapshotImageSchema.exactOptional().openapi({
      description: 'The cover image of this snapshot. May be absent if there is no image.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this snapshot.' }),
    driveId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.',
      }),
    durationMillis: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration associated with this snapshot, in millis.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the snapshot.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshot`.',
      }),
    lastModifiedMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp (in millis since Unix epoch) of the last modification to this snapshot.',
      }),
    progressValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The progress value (64-bit integer set by developer) associated with this snapshot.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of this snapshot.' }),
    type: z
      .enum(['SNAPSHOT_TYPE_UNSPECIFIED', 'SAVE_GAME'])
      .exactOptional()
      .openapi({ description: 'The type of this snapshot.' }),
    uniqueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique name provided when the snapshot was created.' }),
  })
  .openapi({ description: 'An snapshot object.', required: [] })
  .openapi('Snapshot')

const SnapshotListResponseSchema = z
  .object({
    items: z.array(SnapshotSchema).exactOptional().openapi({ description: 'The snapshots.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token corresponding to the next page of results. If there are no more results, the token is omitted.',
      }),
  })
  .openapi({ description: 'A third party list snapshots response.', required: [] })
  .openapi('SnapshotListResponse')

const StatsResponseSchema = z
  .object({
    avg_session_length_minutes: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information.',
      }),
    churn_probability: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information.',
      }),
    days_since_last_played: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.',
      }),
    high_spender_probability: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `games#statsResponse`.',
      }),
    num_purchases: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.',
      }),
    num_sessions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.',
      }),
    num_sessions_percentile: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.',
      }),
    spend_percentile: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.',
      }),
    spend_probability: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.',
      }),
    total_spend_next_28_days: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information.',
      }),
  })
  .openapi({ description: 'A third party stats resource.', required: [] })
  .openapi('StatsResponse')

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
        'https://www.googleapis.com/auth/drive.appdata':
          'See, create, and delete its own configuration data in your Google Drive',
        'https://www.googleapis.com/auth/games':
          'Create, edit, and delete your Google Play Games activity',
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
        'https://www.googleapis.com/auth/drive.appdata':
          'See, create, and delete its own configuration data in your Google Drive',
        'https://www.googleapis.com/auth/games':
          'Create, edit, and delete your Google Play Games activity',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getGamesV1AchievementsRoute = createRoute({
  method: 'get',
  path: '/games/v1/achievements',
  tags: ['achievementDefinitions'],
  description: 'Lists all the achievement definitions for your application.',
  operationId: 'games.achievementDefinitions.list',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementDefinitionsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1AchievementsUpdateMultipleRoute = createRoute({
  method: 'post',
  path: '/games/v1/achievements/updateMultiple',
  tags: ['achievements'],
  description: 'Updates multiple achievements for the currently authenticated player.',
  operationId: 'games.achievements.updateMultiple',
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
    body: { content: { 'application/json': { schema: AchievementUpdateMultipleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementUpdateMultipleResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1AchievementsAchievementIdIncrementRoute = createRoute({
  method: 'post',
  path: '/games/v1/achievements/{achievementId}/increment',
  tags: ['achievements'],
  description:
    'Increments the steps of the achievement with the given ID for the currently authenticated player.',
  operationId: 'games.achievements.increment',
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
      stepsToIncrement: z
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
            description: 'The number of steps to increment.',
            in: 'query',
            name: 'stepsToIncrement',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      achievementId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the achievement used by this method.',
            in: 'path',
            name: 'achievementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementIncrementResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1AchievementsAchievementIdRevealRoute = createRoute({
  method: 'post',
  path: '/games/v1/achievements/{achievementId}/reveal',
  tags: ['achievements'],
  description:
    'Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.',
  operationId: 'games.achievements.reveal',
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
      achievementId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the achievement used by this method.',
            in: 'path',
            name: 'achievementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementRevealResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1AchievementsAchievementIdSetStepsAtLeastRoute = createRoute({
  method: 'post',
  path: '/games/v1/achievements/{achievementId}/setStepsAtLeast',
  tags: ['achievements'],
  description:
    'Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.',
  operationId: 'games.achievements.setStepsAtLeast',
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
      steps: z
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
            description: 'The minimum value to set the steps to.',
            in: 'query',
            name: 'steps',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    params: z.object({
      achievementId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the achievement used by this method.',
            in: 'path',
            name: 'achievementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementSetStepsAtLeastResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1AchievementsAchievementIdUnlockRoute = createRoute({
  method: 'post',
  path: '/games/v1/achievements/{achievementId}/unlock',
  tags: ['achievements'],
  description: 'Unlocks this achievement for the currently authenticated player.',
  operationId: 'games.achievements.unlock',
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
      achievementId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the achievement used by this method.',
            in: 'path',
            name: 'achievementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementUnlockResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1ApplicationsGetEndPointRoute = createRoute({
  method: 'post',
  path: '/games/v1/applications/getEndPoint',
  tags: ['applications'],
  description: 'Returns a URL for the requested end point type.',
  operationId: 'games.applications.getEndPoint',
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
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The application ID from the Google Play developer console.',
            in: 'query',
            name: 'applicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endPointType: z
        .enum(['END_POINT_TYPE_UNSPECIFIED', 'PROFILE_CREATION', 'PROFILE_SETTINGS'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of endpoint being requested.',
            in: 'query',
            name: 'endPointType',
            schema: {
              enum: ['END_POINT_TYPE_UNSPECIFIED', 'PROFILE_CREATION', 'PROFILE_SETTINGS'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EndPointSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1ApplicationsPlayedRoute = createRoute({
  method: 'post',
  path: '/games/v1/applications/played',
  tags: ['applications'],
  description: 'Indicate that the currently authenticated user is playing your application.',
  operationId: 'games.applications.played',
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
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1ApplicationsApplicationIdRoute = createRoute({
  method: 'get',
  path: '/games/v1/applications/{applicationId}',
  tags: ['applications'],
  description:
    'Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.',
  operationId: 'games.applications.get',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      platformType: z
        .enum(['PLATFORM_TYPE_UNSPECIFIED', 'ANDROID', 'IOS', 'WEB_APP'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict application details returned to the specific platform.',
            in: 'query',
            name: 'platformType',
            schema: {
              enum: ['PLATFORM_TYPE_UNSPECIFIED', 'ANDROID', 'IOS', 'WEB_APP'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            description: 'The application ID from the Google Play developer console.',
            in: 'path',
            name: 'applicationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApplicationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1ApplicationsApplicationIdVerifyRoute = createRoute({
  method: 'get',
  path: '/games/v1/applications/{applicationId}/verify',
  tags: ['applications'],
  description:
    'Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.',
  operationId: 'games.applications.verify',
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
      applicationId: z
        .string()
        .openapi({
          param: {
            description: 'The application ID from the Google Play developer console.',
            in: 'path',
            name: 'applicationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApplicationVerifyResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1EventDefinitionsRoute = createRoute({
  method: 'get',
  path: '/games/v1/eventDefinitions',
  tags: ['events'],
  description: 'Returns a list of the event definitions in this application.',
  operationId: 'games.events.listDefinitions',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventDefinitionListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1EventsRoute = createRoute({
  method: 'get',
  path: '/games/v1/events',
  tags: ['events'],
  description:
    'Returns a list showing the current progress on events in this application for the currently authenticated user.',
  operationId: 'games.events.listByPlayer',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerEventListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1EventsRoute = createRoute({
  method: 'post',
  path: '/games/v1/events',
  tags: ['events'],
  description:
    'Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.',
  operationId: 'games.events.record',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventRecordRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventUpdateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1LeaderboardsRoute = createRoute({
  method: 'get',
  path: '/games/v1/leaderboards',
  tags: ['leaderboards'],
  description: 'Lists all the leaderboard metadata for your application.',
  operationId: 'games.leaderboards.list',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaderboardListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1LeaderboardsScoresRoute = createRoute({
  method: 'post',
  path: '/games/v1/leaderboards/scores',
  tags: ['scores'],
  description: 'Submits multiple scores to leaderboards.',
  operationId: 'games.scores.submitMultiple',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlayerScoreSubmissionListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerScoreListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1LeaderboardsLeaderboardIdRoute = createRoute({
  method: 'get',
  path: '/games/v1/leaderboards/{leaderboardId}',
  tags: ['leaderboards'],
  description: 'Retrieves the metadata of the leaderboard with the given ID.',
  operationId: 'games.leaderboards.get',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      leaderboardId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the leaderboard.',
            in: 'path',
            name: 'leaderboardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaderboardSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1LeaderboardsLeaderboardIdScoresRoute = createRoute({
  method: 'post',
  path: '/games/v1/leaderboards/{leaderboardId}/scores',
  tags: ['scores'],
  description: 'Submits a score to the specified leaderboard.',
  operationId: 'games.scores.submit',
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
      score: z
        .string()
        .openapi({
          param: {
            description:
              "The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.",
            in: 'query',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scoreTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.",
            in: 'query',
            name: 'scoreTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      leaderboardId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the leaderboard.',
            in: 'path',
            name: 'leaderboardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerScoreResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1LeaderboardsLeaderboardIdScoresCollectionRoute = createRoute({
  method: 'get',
  path: '/games/v1/leaderboards/{leaderboardId}/scores/{collection}',
  tags: ['scores'],
  description: 'Lists the scores in a leaderboard, starting from the top.',
  operationId: 'games.scores.list',
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
      timeSpan: z
        .enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'])
        .openapi({
          param: {
            description: "The time span for the scores and ranks you're requesting.",
            in: 'query',
            name: 'timeSpan',
            required: true,
            schema: {
              enum: ['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'],
              type: 'string',
            },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      leaderboardId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the leaderboard.',
            in: 'path',
            name: 'leaderboardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collection: z
        .enum(['SCORE_COLLECTION_UNSPECIFIED', 'PUBLIC', 'SOCIAL', 'FRIENDS'])
        .openapi({
          param: {
            description: "The collection of scores you're requesting.",
            in: 'path',
            name: 'collection',
            required: true,
            schema: {
              enum: ['SCORE_COLLECTION_UNSPECIFIED', 'PUBLIC', 'SOCIAL', 'FRIENDS'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaderboardScoresSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1LeaderboardsLeaderboardIdWindowCollectionRoute = createRoute({
  method: 'get',
  path: '/games/v1/leaderboards/{leaderboardId}/window/{collection}',
  tags: ['scores'],
  description: "Lists the scores in a leaderboard around (and including) a player's score.",
  operationId: 'games.scores.listWindow',
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
      timeSpan: z
        .enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'])
        .openapi({
          param: {
            description: "The time span for the scores and ranks you're requesting.",
            in: 'query',
            name: 'timeSpan',
            required: true,
            schema: {
              enum: ['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL_TIME', 'WEEKLY', 'DAILY'],
              type: 'string',
            },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resultsAbove: z
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
            description:
              "The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.",
            in: 'query',
            name: 'resultsAbove',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      returnTopIfAbsent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.',
            in: 'query',
            name: 'returnTopIfAbsent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      leaderboardId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the leaderboard.',
            in: 'path',
            name: 'leaderboardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collection: z
        .enum(['SCORE_COLLECTION_UNSPECIFIED', 'PUBLIC', 'SOCIAL', 'FRIENDS'])
        .openapi({
          param: {
            description: "The collection of scores you're requesting.",
            in: 'path',
            name: 'collection',
            required: true,
            schema: {
              enum: ['SCORE_COLLECTION_UNSPECIFIED', 'PUBLIC', 'SOCIAL', 'FRIENDS'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaderboardScoresSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1MetagameConfigRoute = createRoute({
  method: 'get',
  path: '/games/v1/metagameConfig',
  tags: ['metagame'],
  description: 'Return the metagame configuration data for the calling application.',
  operationId: 'games.metagame.getMetagameConfig',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MetagameConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersMeMultipleApplicationPlayerIdsRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/me/multipleApplicationPlayerIds',
  tags: ['players'],
  description:
    'Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.',
  operationId: 'games.players.getMultipleApplicationPlayerIds',
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
      applicationIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The application IDs from the Google Play developer console for the games to return scoped ids for.',
            explode: true,
            in: 'query',
            name: 'applicationIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetMultipleApplicationPlayerIdsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersMePlayersCollectionRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/me/players/{collection}',
  tags: ['players'],
  description: 'Get the collection of players for the currently authenticated user.',
  operationId: 'games.players.list',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      collection: z
        .enum(['CONNECTED', 'VISIBLE', 'FRIENDS_ALL'])
        .openapi({
          param: {
            description: 'Collection of players being retrieved',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { enum: ['CONNECTED', 'VISIBLE', 'FRIENDS_ALL'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersMeScopedIdsRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/me/scopedIds',
  tags: ['players'],
  description: 'Retrieves scoped player identifiers for currently authenticated user.',
  operationId: 'games.players.getScopedPlayerIds',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScopedPlayerIdsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersPlayerIdRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/{playerId}',
  tags: ['players'],
  description:
    'Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.',
  operationId: 'games.players.get',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      playerIdConsistencyToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Consistency token of the player id. The call returns a 'not found' result when the token is present and invalid. Empty value is ignored. See also GlobalPlayerIdConsistencyTokenProto",
            in: 'query',
            name: 'playerIdConsistencyToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      playerId: z
        .string()
        .openapi({
          param: {
            description:
              "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
            in: 'path',
            name: 'playerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersPlayerIdAchievementsRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/{playerId}/achievements',
  tags: ['achievements'],
  description:
    "Lists the progress for all your application's achievements for the currently authenticated player.",
  operationId: 'games.achievements.list',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .enum(['ALL', 'HIDDEN', 'REVEALED', 'UNLOCKED'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.",
            in: 'query',
            name: 'state',
            schema: { enum: ['ALL', 'HIDDEN', 'REVEALED', 'UNLOCKED'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      playerId: z
        .string()
        .openapi({
          param: {
            description:
              "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
            in: 'path',
            name: 'playerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerAchievementListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersPlayerIdCategoriesCollectionRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/{playerId}/categories/{collection}',
  tags: ['metagame'],
  description: 'List play data aggregated per category for the player corresponding to `playerId`.',
  operationId: 'games.metagame.listCategoriesByPlayer',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      playerId: z
        .string()
        .openapi({
          param: {
            description:
              "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
            in: 'path',
            name: 'playerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collection: z
        .enum(['COLLECTION_UNSPECIFIED', 'ALL'])
        .openapi({
          param: {
            description: 'The collection of categories for which data will be returned.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { enum: ['COLLECTION_UNSPECIFIED', 'ALL'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CategoryListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersPlayerIdLeaderboardsLeaderboardIdScoresTimeSpanRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}',
  tags: ['scores'],
  description:
    "Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.",
  operationId: 'games.scores.get',
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
      includeRankType: z
        .enum(['INCLUDE_RANK_TYPE_UNSPECIFIED', 'ALL', 'PUBLIC', 'SOCIAL', 'FRIENDS'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The types of ranks to return. If the parameter is omitted, no ranks will be returned.',
            in: 'query',
            name: 'includeRankType',
            schema: {
              enum: ['INCLUDE_RANK_TYPE_UNSPECIFIED', 'ALL', 'PUBLIC', 'SOCIAL', 'FRIENDS'],
              type: 'string',
            },
            required: false,
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      playerId: z
        .string()
        .openapi({
          param: {
            description:
              "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
            in: 'path',
            name: 'playerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      leaderboardId: z
        .string()
        .openapi({
          param: {
            description:
              "The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.",
            in: 'path',
            name: 'leaderboardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      timeSpan: z
        .enum(['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL', 'ALL_TIME', 'WEEKLY', 'DAILY'])
        .openapi({
          param: {
            description: "The time span for the scores and ranks you're requesting.",
            in: 'path',
            name: 'timeSpan',
            required: true,
            schema: {
              enum: ['SCORE_TIME_SPAN_UNSPECIFIED', 'ALL', 'ALL_TIME', 'WEEKLY', 'DAILY'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerLeaderboardScoreListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1PlayersPlayerIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/games/v1/players/{playerId}/snapshots',
  tags: ['snapshots'],
  description:
    'Retrieves a list of snapshots created by your application for the player corresponding to the player ID.',
  operationId: 'games.snapshots.list',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      playerId: z
        .string()
        .openapi({
          param: {
            description:
              "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
            in: 'path',
            name: 'playerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SnapshotListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1RevisionsCheckRoute = createRoute({
  method: 'get',
  path: '/games/v1/revisions/check',
  tags: ['revisions'],
  description: 'Checks whether the games client is out of date.',
  operationId: 'games.revisions.check',
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
      clientRevision: z
        .string()
        .openapi({
          param: {
            description:
              'The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App.',
            in: 'query',
            name: 'clientRevision',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RevisionCheckResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1SnapshotsSnapshotIdRoute = createRoute({
  method: 'get',
  path: '/games/v1/snapshots/{snapshotId}',
  tags: ['snapshots'],
  description: 'Retrieves the metadata for a given snapshot ID.',
  operationId: 'games.snapshots.get',
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
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred language to use for strings returned by this method.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      snapshotId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the snapshot.',
            in: 'path',
            name: 'snapshotId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1StatsRoute = createRoute({
  method: 'get',
  path: '/games/v1/stats',
  tags: ['stats'],
  description:
    'Returns engagement and spend statistics in this application for the currently authenticated user.',
  operationId: 'games.stats.get',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})
