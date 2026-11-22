type LocalizedString = {
  kind?: string | undefined
  locale?: string | undefined
  value?: string | undefined
}
type LocalizedStringBundle = {
  kind?: string | undefined
  translations?: LocalizedString[] | undefined
}
type AchievementConfigurationDetail = {
  description?: LocalizedStringBundle | undefined
  iconUrl?: string | undefined
  kind?: string | undefined
  name?: LocalizedStringBundle | undefined
  pointValue?: number | undefined
  sortRank?: number | undefined
}
type AchievementConfiguration = {
  achievementType?: 'ACHIEVEMENT_TYPE_UNSPECIFIED' | 'STANDARD' | 'INCREMENTAL' | undefined
  draft?: AchievementConfigurationDetail | undefined
  id?: string | undefined
  initialState?: 'INITIAL_STATE_UNSPECIFIED' | 'HIDDEN' | 'REVEALED' | undefined
  kind?: string | undefined
  published?: AchievementConfigurationDetail | undefined
  stepsToUnlock?: number | undefined
  token?: string | undefined
}
type AchievementConfigurationListResponse = {
  items?: AchievementConfiguration[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type GamesNumberAffixConfiguration = {
  few?: LocalizedStringBundle | undefined
  many?: LocalizedStringBundle | undefined
  one?: LocalizedStringBundle | undefined
  other?: LocalizedStringBundle | undefined
  two?: LocalizedStringBundle | undefined
  zero?: LocalizedStringBundle | undefined
}
type GamesNumberFormatConfiguration = {
  currencyCode?: string | undefined
  numDecimalPlaces?: number | undefined
  numberFormatType?:
    | 'NUMBER_FORMAT_TYPE_UNSPECIFIED'
    | 'NUMERIC'
    | 'TIME_DURATION'
    | 'CURRENCY'
    | undefined
  suffix?: GamesNumberAffixConfiguration | undefined
}
type LeaderboardConfigurationDetail = {
  iconUrl?: string | undefined
  kind?: string | undefined
  name?: LocalizedStringBundle | undefined
  scoreFormat?: GamesNumberFormatConfiguration | undefined
  sortRank?: number | undefined
}
type LeaderboardConfiguration = {
  draft?: LeaderboardConfigurationDetail | undefined
  id?: string | undefined
  kind?: string | undefined
  published?: LeaderboardConfigurationDetail | undefined
  scoreMax?: string | undefined
  scoreMin?: string | undefined
  scoreOrder?: 'SCORE_ORDER_UNSPECIFIED' | 'LARGER_IS_BETTER' | 'SMALLER_IS_BETTER' | undefined
  token?: string | undefined
}
type LeaderboardConfigurationListResponse = {
  items?: LeaderboardConfiguration[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/games/v1configuration/achievements/:achievementId': {
      $delete: {
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
      $get: {
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
        output: AchievementConfiguration
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: AchievementConfiguration }
        output: AchievementConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1configuration/applications/:applicationId/achievements': {
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
        output: AchievementConfigurationListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
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
        } & { json: AchievementConfiguration }
        output: AchievementConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1configuration/applications/:applicationId/leaderboards': {
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
        output: LeaderboardConfigurationListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
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
        } & { json: LeaderboardConfiguration }
        output: LeaderboardConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/v1configuration/leaderboards/:leaderboardId': {
      $delete: {
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
      $get: {
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
        output: LeaderboardConfiguration
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: LeaderboardConfiguration }
        output: LeaderboardConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
