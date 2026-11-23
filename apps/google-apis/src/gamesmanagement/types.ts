type AchievementResetResponse = {
  currentState?: string | undefined
  definitionId?: string | undefined
  kind?: string | undefined
  updateOccurred?: boolean | undefined
}
type AchievementResetAllResponse = {
  kind?: string | undefined
  results?: AchievementResetResponse[] | undefined
}
type AchievementResetMultipleForAllRequest = {
  achievement_ids?: string[] | undefined
  kind?: string | undefined
}
type GamesPlayerLevelResource = {
  level?: number | undefined
  maxExperiencePoints?: string | undefined
  minExperiencePoints?: string | undefined
}
type GamesPlayerExperienceInfoResource = {
  currentExperiencePoints?: string | undefined
  currentLevel?: GamesPlayerLevelResource | undefined
  lastLevelUpTimestampMillis?: string | undefined
  nextLevel?: GamesPlayerLevelResource | undefined
}
type ProfileSettings = { kind?: string | undefined; profileVisible?: boolean | undefined }
type Player = {
  avatarImageUrl?: string | undefined
  bannerUrlLandscape?: string | undefined
  bannerUrlPortrait?: string | undefined
  displayName?: string | undefined
  experienceInfo?: GamesPlayerExperienceInfoResource | undefined
  kind?: string | undefined
  name?: { familyName?: string | undefined; givenName?: string | undefined } | undefined
  originalPlayerId?: string | undefined
  playerId?: string | undefined
  profileSettings?: ProfileSettings | undefined
  title?: string | undefined
}
type HiddenPlayer = {
  hiddenTimeMillis?: string | undefined
  kind?: string | undefined
  player?: Player | undefined
}
type HiddenPlayerList = {
  items?: HiddenPlayer[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type EventsResetMultipleForAllRequest = {
  event_ids?: string[] | undefined
  kind?: string | undefined
}
type PlayerScoreResetResponse = {
  definitionId?: string | undefined
  kind?: string | undefined
  resetScoreTimeSpans?: string[] | undefined
}
type PlayerScoreResetAllResponse = {
  kind?: string | undefined
  results?: PlayerScoreResetResponse[] | undefined
}
type ScoresResetMultipleForAllRequest = {
  kind?: string | undefined
  leaderboard_ids?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/games/v1management/achievements/reset': {
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
        output: AchievementResetAllResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1management/achievements/resetAllForAllPlayers': {
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
    '/games/v1management/achievements/resetMultipleForAllPlayers': {
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
        } & { json: AchievementResetMultipleForAllRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/games/v1management/achievements/:achievementId/reset': {
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
        output: AchievementResetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1management/achievements/:achievementId/resetForAllPlayers': {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/games/v1management/applications/:applicationId/players/hidden': {
      $get: {
        input: { param: { applicationId: string } } & {
          query: {
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
        output: HiddenPlayerList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1management/applications/:applicationId/players/hidden/:playerId': {
      $delete: {
        input: { param: { applicationId: string; playerId: string } } & {
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
      $post: {
        input: { param: { applicationId: string; playerId: string } } & {
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
    '/games/v1management/events/reset': {
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
    '/games/v1management/events/resetAllForAllPlayers': {
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
    '/games/v1management/events/resetMultipleForAllPlayers': {
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
        } & { json: EventsResetMultipleForAllRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/games/v1management/events/:eventId/reset': {
      $post: {
        input: { param: { eventId: string } } & {
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
    '/games/v1management/events/:eventId/resetForAllPlayers': {
      $post: {
        input: { param: { eventId: string } } & {
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
    '/games/v1management/leaderboards/:leaderboardId/scores/reset': {
      $post: {
        input: { param: { leaderboardId: string } } & {
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
        output: PlayerScoreResetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1management/leaderboards/:leaderboardId/scores/resetForAllPlayers': {
      $post: {
        input: { param: { leaderboardId: string } } & {
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
    '/games/v1management/scores/reset': {
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
        output: PlayerScoreResetAllResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1management/scores/resetAllForAllPlayers': {
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
    '/games/v1management/scores/resetMultipleForAllPlayers': {
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
        } & { json: ScoresResetMultipleForAllRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
