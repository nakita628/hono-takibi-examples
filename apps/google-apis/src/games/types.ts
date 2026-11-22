type AchievementDefinition = {
  achievementType?: 'ACHIEVEMENT_TYPE_UNSPECIFIED' | 'STANDARD' | 'INCREMENTAL' | undefined
  description?: string | undefined
  experiencePoints?: string | undefined
  formattedTotalSteps?: string | undefined
  id?: string | undefined
  initialState?:
    | 'INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED'
    | 'HIDDEN'
    | 'REVEALED'
    | 'UNLOCKED'
    | undefined
  isRevealedIconUrlDefault?: boolean | undefined
  isUnlockedIconUrlDefault?: boolean | undefined
  kind?: string | undefined
  name?: string | undefined
  revealedIconUrl?: string | undefined
  totalSteps?: number | undefined
  unlockedIconUrl?: string | undefined
}
type AchievementDefinitionsListResponse = {
  items?: AchievementDefinition[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type GamesAchievementIncrement = {
  kind?: string | undefined
  requestId?: string | undefined
  steps?: number | undefined
}
type GamesAchievementSetStepsAtLeast = { kind?: string | undefined; steps?: number | undefined }
type AchievementUpdateRequest = {
  achievementId?: string | undefined
  incrementPayload?: GamesAchievementIncrement | undefined
  kind?: string | undefined
  setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast | undefined
  updateType?:
    | 'ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED'
    | 'REVEAL'
    | 'UNLOCK'
    | 'INCREMENT'
    | 'SET_STEPS_AT_LEAST'
    | undefined
}
type AchievementUpdateMultipleRequest = {
  kind?: string | undefined
  updates?: AchievementUpdateRequest[] | undefined
}
type AchievementUpdateResponse = {
  achievementId?: string | undefined
  currentState?:
    | 'UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED'
    | 'HIDDEN'
    | 'REVEALED'
    | 'UNLOCKED'
    | undefined
  currentSteps?: number | undefined
  kind?: string | undefined
  newlyUnlocked?: boolean | undefined
  updateOccurred?: boolean | undefined
}
type AchievementUpdateMultipleResponse = {
  kind?: string | undefined
  updatedAchievements?: AchievementUpdateResponse[] | undefined
}
type AchievementIncrementResponse = {
  currentSteps?: number | undefined
  kind?: string | undefined
  newlyUnlocked?: boolean | undefined
}
type AchievementRevealResponse = {
  currentState?: 'REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED' | 'REVEALED' | 'UNLOCKED' | undefined
  kind?: string | undefined
}
type AchievementSetStepsAtLeastResponse = {
  currentSteps?: number | undefined
  kind?: string | undefined
  newlyUnlocked?: boolean | undefined
}
type AchievementUnlockResponse = { kind?: string | undefined; newlyUnlocked?: boolean | undefined }
type EndPoint = { url?: string | undefined }
type ImageAsset = {
  height?: number | undefined
  kind?: string | undefined
  name?: string | undefined
  url?: string | undefined
  width?: number | undefined
}
type ApplicationCategory = {
  kind?: string | undefined
  primary?: string | undefined
  secondary?: string | undefined
}
type InstanceAndroidDetails = {
  enablePiracyCheck?: boolean | undefined
  kind?: string | undefined
  packageName?: string | undefined
  preferred?: boolean | undefined
}
type InstanceIosDetails = {
  bundleIdentifier?: string | undefined
  itunesAppId?: string | undefined
  kind?: string | undefined
  preferredForIpad?: boolean | undefined
  preferredForIphone?: boolean | undefined
  supportIpad?: boolean | undefined
  supportIphone?: boolean | undefined
}
type InstanceWebDetails = {
  kind?: string | undefined
  launchUrl?: string | undefined
  preferred?: boolean | undefined
}
type Instance = {
  acquisitionUri?: string | undefined
  androidInstance?: InstanceAndroidDetails | undefined
  iosInstance?: InstanceIosDetails | undefined
  kind?: string | undefined
  name?: string | undefined
  platformType?: 'PLATFORM_TYPE_UNSPECIFIED' | 'ANDROID' | 'IOS' | 'WEB_APP' | undefined
  realtimePlay?: boolean | undefined
  turnBasedPlay?: boolean | undefined
  webInstance?: InstanceWebDetails | undefined
}
type Application = {
  achievement_count?: number | undefined
  assets?: ImageAsset[] | undefined
  author?: string | undefined
  category?: ApplicationCategory | undefined
  description?: string | undefined
  enabledFeatures?: ('APPLICATION_FEATURE_UNSPECIFIED' | 'SNAPSHOTS')[] | undefined
  id?: string | undefined
  instances?: Instance[] | undefined
  kind?: string | undefined
  lastUpdatedTimestamp?: string | undefined
  leaderboard_count?: number | undefined
  name?: string | undefined
  themeColor?: string | undefined
}
type ApplicationVerifyResponse = {
  alternate_player_id?: string | undefined
  kind?: string | undefined
  player_id?: string | undefined
}
type EventChild = { childId?: string | undefined; kind?: string | undefined }
type EventDefinition = {
  childEvents?: EventChild[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  imageUrl?: string | undefined
  isDefaultImageUrl?: boolean | undefined
  kind?: string | undefined
  visibility?: 'EVENT_VISIBILITY_UNSPECIFIED' | 'REVEALED' | 'HIDDEN' | undefined
}
type EventDefinitionListResponse = {
  items?: EventDefinition[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type PlayerEvent = {
  definitionId?: string | undefined
  formattedNumEvents?: string | undefined
  kind?: string | undefined
  numEvents?: string | undefined
  playerId?: string | undefined
}
type PlayerEventListResponse = {
  items?: PlayerEvent[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type EventPeriodRange = {
  kind?: string | undefined
  periodEndMillis?: string | undefined
  periodStartMillis?: string | undefined
}
type EventUpdateRequest = {
  definitionId?: string | undefined
  kind?: string | undefined
  updateCount?: string | undefined
}
type EventPeriodUpdate = {
  kind?: string | undefined
  timePeriod?: EventPeriodRange | undefined
  updates?: EventUpdateRequest[] | undefined
}
type EventRecordRequest = {
  currentTimeMillis?: string | undefined
  kind?: string | undefined
  requestId?: string | undefined
  timePeriods?: EventPeriodUpdate[] | undefined
}
type EventBatchRecordFailure = {
  failureCause?:
    | 'EVENT_FAILURE_CAUSE_UNSPECIFIED'
    | 'TOO_LARGE'
    | 'TIME_PERIOD_EXPIRED'
    | 'TIME_PERIOD_SHORT'
    | 'TIME_PERIOD_LONG'
    | 'ALREADY_UPDATED'
    | 'RECORD_RATE_HIGH'
    | undefined
  kind?: string | undefined
  range?: EventPeriodRange | undefined
}
type EventRecordFailure = {
  eventId?: string | undefined
  failureCause?:
    | 'EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED'
    | 'NOT_FOUND'
    | 'INVALID_UPDATE_VALUE'
    | undefined
  kind?: string | undefined
}
type EventUpdateResponse = {
  batchFailures?: EventBatchRecordFailure[] | undefined
  eventFailures?: EventRecordFailure[] | undefined
  kind?: string | undefined
  playerEvents?: PlayerEvent[] | undefined
}
type Leaderboard = {
  iconUrl?: string | undefined
  id?: string | undefined
  isIconUrlDefault?: boolean | undefined
  kind?: string | undefined
  name?: string | undefined
  order?: 'SCORE_ORDER_UNSPECIFIED' | 'LARGER_IS_BETTER' | 'SMALLER_IS_BETTER' | undefined
}
type LeaderboardListResponse = {
  items?: Leaderboard[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ScoreSubmission = {
  kind?: string | undefined
  leaderboardId?: string | undefined
  score?: string | undefined
  scoreTag?: string | undefined
  signature?: string | undefined
}
type PlayerScoreSubmissionList = {
  kind?: string | undefined
  scores?: ScoreSubmission[] | undefined
}
type PlayerScore = {
  formattedScore?: string | undefined
  kind?: string | undefined
  score?: string | undefined
  scoreTag?: string | undefined
  timeSpan?: 'SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL_TIME' | 'WEEKLY' | 'DAILY' | undefined
}
type PlayerScoreResponse = {
  beatenScoreTimeSpans?:
    | ('SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL_TIME' | 'WEEKLY' | 'DAILY')[]
    | undefined
  formattedScore?: string | undefined
  kind?: string | undefined
  leaderboardId?: string | undefined
  scoreTag?: string | undefined
  unbeatenScores?: PlayerScore[] | undefined
}
type PlayerScoreListResponse = {
  kind?: string | undefined
  submittedScores?: PlayerScoreResponse[] | undefined
}
type PlayerLevel = {
  kind?: string | undefined
  level?: number | undefined
  maxExperiencePoints?: string | undefined
  minExperiencePoints?: string | undefined
}
type PlayerExperienceInfo = {
  currentExperiencePoints?: string | undefined
  currentLevel?: PlayerLevel | undefined
  kind?: string | undefined
  lastLevelUpTimestampMillis?: string | undefined
  nextLevel?: PlayerLevel | undefined
}
type ProfileSettings = {
  friendsListVisibility?:
    | 'FRIENDS_LIST_VISIBILITY_UNSPECIFIED'
    | 'VISIBLE'
    | 'REQUEST_REQUIRED'
    | 'UNAVAILABLE'
    | undefined
  kind?: string | undefined
  profileVisible?: boolean | undefined
}
type Player = {
  avatarImageUrl?: string | undefined
  bannerUrlLandscape?: string | undefined
  bannerUrlPortrait?: string | undefined
  displayName?: string | undefined
  experienceInfo?: PlayerExperienceInfo | undefined
  friendStatus?: 'FRIEND_STATUS_UNSPECIFIED' | 'NO_RELATIONSHIP' | 'FRIEND' | undefined
  gamePlayerId?: string | undefined
  kind?: string | undefined
  name?: { familyName?: string | undefined; givenName?: string | undefined } | undefined
  originalPlayerId?: string | undefined
  playerId?: string | undefined
  profileSettings?: ProfileSettings | undefined
  title?: string | undefined
}
type LeaderboardEntry = {
  formattedScore?: string | undefined
  formattedScoreRank?: string | undefined
  kind?: string | undefined
  player?: Player | undefined
  scoreRank?: string | undefined
  scoreTag?: string | undefined
  scoreValue?: string | undefined
  timeSpan?: 'SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL_TIME' | 'WEEKLY' | 'DAILY' | undefined
  writeTimestampMillis?: string | undefined
}
type LeaderboardScores = {
  items?: LeaderboardEntry[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  numScores?: string | undefined
  playerScore?: LeaderboardEntry | undefined
  prevPageToken?: string | undefined
}
type MetagameConfig = {
  currentVersion?: number | undefined
  kind?: string | undefined
  playerLevels?: PlayerLevel[] | undefined
}
type ApplicationPlayerId = { applicationId?: string | undefined; playerId?: string | undefined }
type GetMultipleApplicationPlayerIdsResponse = { playerIds?: ApplicationPlayerId[] | undefined }
type PlayerListResponse = {
  items?: Player[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ScopedPlayerIds = {
  developerPlayerKey?: string | undefined
  gamePlayerId?: string | undefined
}
type PlayerAchievement = {
  achievementState?: 'STATE_UNSPECIFIED' | 'HIDDEN' | 'REVEALED' | 'UNLOCKED' | undefined
  currentSteps?: number | undefined
  experiencePoints?: string | undefined
  formattedCurrentStepsString?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lastUpdatedTimestamp?: string | undefined
}
type PlayerAchievementListResponse = {
  items?: PlayerAchievement[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Category = {
  category?: string | undefined
  experiencePoints?: string | undefined
  kind?: string | undefined
}
type CategoryListResponse = {
  items?: Category[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type LeaderboardScoreRank = {
  formattedNumScores?: string | undefined
  formattedRank?: string | undefined
  kind?: string | undefined
  numScores?: string | undefined
  rank?: string | undefined
}
type PlayerLeaderboardScore = {
  friendsRank?: LeaderboardScoreRank | undefined
  kind?: string | undefined
  leaderboard_id?: string | undefined
  publicRank?: LeaderboardScoreRank | undefined
  scoreString?: string | undefined
  scoreTag?: string | undefined
  scoreValue?: string | undefined
  socialRank?: LeaderboardScoreRank | undefined
  timeSpan?: 'SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL_TIME' | 'WEEKLY' | 'DAILY' | undefined
  writeTimestamp?: string | undefined
}
type PlayerLeaderboardScoreListResponse = {
  items?: PlayerLeaderboardScore[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  player?: Player | undefined
}
type SnapshotImage = {
  height?: number | undefined
  kind?: string | undefined
  mime_type?: string | undefined
  url?: string | undefined
  width?: number | undefined
}
type Snapshot = {
  coverImage?: SnapshotImage | undefined
  description?: string | undefined
  driveId?: string | undefined
  durationMillis?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lastModifiedMillis?: string | undefined
  progressValue?: string | undefined
  title?: string | undefined
  type?: 'SNAPSHOT_TYPE_UNSPECIFIED' | 'SAVE_GAME' | undefined
  uniqueName?: string | undefined
}
type SnapshotListResponse = {
  items?: Snapshot[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type RevisionCheckResponse = {
  apiVersion?: string | undefined
  kind?: string | undefined
  revisionStatus?: 'REVISION_STATUS_UNSPECIFIED' | 'OK' | 'DEPRECATED' | 'INVALID' | undefined
}
type StatsResponse = {
  avg_session_length_minutes?: number | undefined
  churn_probability?: number | undefined
  days_since_last_played?: number | undefined
  high_spender_probability?: number | undefined
  kind?: string | undefined
  num_purchases?: number | undefined
  num_sessions?: number | undefined
  num_sessions_percentile?: number | undefined
  spend_percentile?: number | undefined
  spend_probability?: number | undefined
  total_spend_next_28_days?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/games/v1/achievements': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: AchievementDefinitionsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/achievements/updateMultiple': {
      $post: {
        input: {
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
        } & { json: AchievementUpdateMultipleRequest }
        output: AchievementUpdateMultipleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/achievements/:achievementId/increment': {
      $post: {
        input: { param: { achievementId: string } } & {
          query: {
            stepsToIncrement: number
            requestId?: string | undefined
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
        output: AchievementIncrementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/achievements/:achievementId/reveal': {
      $post: {
        input: { param: { achievementId: string } } & {
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
        output: AchievementRevealResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/achievements/:achievementId/setStepsAtLeast': {
      $post: {
        input: { param: { achievementId: string } } & {
          query: {
            steps: number
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
        output: AchievementSetStepsAtLeastResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/achievements/:achievementId/unlock': {
      $post: {
        input: { param: { achievementId: string } } & {
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
        output: AchievementUnlockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/applications/getEndPoint': {
      $post: {
        input: {
          query: {
            applicationId?: string | undefined
            endPointType?:
              | 'END_POINT_TYPE_UNSPECIFIED'
              | 'PROFILE_CREATION'
              | 'PROFILE_SETTINGS'
              | undefined
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
        output: EndPoint
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/applications/played': {
      $post: {
        input: {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/games/v1/applications/:applicationId': {
      $get: {
        input: { param: { applicationId: string } } & {
          query: {
            language?: string | undefined
            platformType?: 'PLATFORM_TYPE_UNSPECIFIED' | 'ANDROID' | 'IOS' | 'WEB_APP' | undefined
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
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/applications/:applicationId/verify': {
      $get: {
        input: { param: { applicationId: string } } & {
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
        output: ApplicationVerifyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/eventDefinitions': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: EventDefinitionListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/events': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: PlayerEventListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            language?: string | undefined
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
        } & { json: EventRecordRequest }
        output: EventUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/leaderboards': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: LeaderboardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/leaderboards/scores': {
      $post: {
        input: {
          query: {
            language?: string | undefined
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
        } & { json: PlayerScoreSubmissionList }
        output: PlayerScoreListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/leaderboards/:leaderboardId': {
      $get: {
        input: { param: { leaderboardId: string } } & {
          query: {
            language?: string | undefined
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
        output: Leaderboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/leaderboards/:leaderboardId/scores': {
      $post: {
        input: { param: { leaderboardId: string } } & {
          query: {
            score: string
            language?: string | undefined
            scoreTag?: string | undefined
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
        output: PlayerScoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/leaderboards/:leaderboardId/scores/:collection': {
      $get: {
        input: {
          param: {
            leaderboardId: string
            collection: 'SCORE_COLLECTION_UNSPECIFIED' | 'PUBLIC' | 'SOCIAL' | 'FRIENDS'
          }
        } & {
          query: {
            timeSpan: 'SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL_TIME' | 'WEEKLY' | 'DAILY'
            language?: string | undefined
            maxResults?: number | undefined
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
        output: LeaderboardScores
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/leaderboards/:leaderboardId/window/:collection': {
      $get: {
        input: {
          param: {
            leaderboardId: string
            collection: 'SCORE_COLLECTION_UNSPECIFIED' | 'PUBLIC' | 'SOCIAL' | 'FRIENDS'
          }
        } & {
          query: {
            timeSpan: 'SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL_TIME' | 'WEEKLY' | 'DAILY'
            language?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            resultsAbove?: number | undefined
            returnTopIfAbsent?: boolean | undefined
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
        output: LeaderboardScores
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/metagameConfig': {
      $get: {
        input: {
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
        output: MetagameConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/me/multipleApplicationPlayerIds': {
      $get: {
        input: {
          query: {
            applicationIds?: string[] | undefined
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
        output: GetMultipleApplicationPlayerIdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/me/players/:collection': {
      $get: {
        input: { param: { collection: 'CONNECTED' | 'VISIBLE' | 'FRIENDS_ALL' } } & {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: PlayerListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/me/scopedIds': {
      $get: {
        input: {
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
        output: ScopedPlayerIds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/:playerId': {
      $get: {
        input: { param: { playerId: string } } & {
          query: {
            language?: string | undefined
            playerIdConsistencyToken?: string | undefined
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
        output: Player
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/:playerId/achievements': {
      $get: {
        input: { param: { playerId: string } } & {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            state?: 'ALL' | 'HIDDEN' | 'REVEALED' | 'UNLOCKED' | undefined
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
        output: PlayerAchievementListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/:playerId/categories/:collection': {
      $get: {
        input: { param: { playerId: string; collection: 'COLLECTION_UNSPECIFIED' | 'ALL' } } & {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: CategoryListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/:playerId/leaderboards/:leaderboardId/scores/:timeSpan': {
      $get: {
        input: {
          param: {
            playerId: string
            leaderboardId: string
            timeSpan: 'SCORE_TIME_SPAN_UNSPECIFIED' | 'ALL' | 'ALL_TIME' | 'WEEKLY' | 'DAILY'
          }
        } & {
          query: {
            includeRankType?:
              | 'INCLUDE_RANK_TYPE_UNSPECIFIED'
              | 'ALL'
              | 'PUBLIC'
              | 'SOCIAL'
              | 'FRIENDS'
              | undefined
            language?: string | undefined
            maxResults?: number | undefined
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
        output: PlayerLeaderboardScoreListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/players/:playerId/snapshots': {
      $get: {
        input: { param: { playerId: string } } & {
          query: {
            language?: string | undefined
            maxResults?: number | undefined
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
        output: SnapshotListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/revisions/check': {
      $get: {
        input: {
          query: {
            clientRevision: string
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
        output: RevisionCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/snapshots/:snapshotId': {
      $get: {
        input: { param: { snapshotId: string } } & {
          query: {
            language?: string | undefined
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
        output: Snapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1/stats': {
      $get: {
        input: {
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
        output: StatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
