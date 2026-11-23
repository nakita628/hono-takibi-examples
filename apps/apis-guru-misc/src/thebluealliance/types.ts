type DistrictList = { abbreviation: string; display_name: string; key: string; year: number }
type Webcast = {
  channel: string
  date?: string | undefined
  file?: string | undefined
  type:
    | 'youtube'
    | 'twitch'
    | 'ustream'
    | 'iframe'
    | 'html5'
    | 'rtmp'
    | 'livestream'
    | 'direct_link'
    | 'mms'
    | 'justin'
    | 'stemtv'
    | 'dacast'
}
type Event = {
  address?: string | undefined
  city?: string | undefined
  country?: string | undefined
  district?: DistrictList | undefined
  division_keys?: string[] | undefined
  end_date: string
  event_code: string
  event_type: number
  event_type_string: string
  first_event_code?: string | undefined
  first_event_id?: string | undefined
  gmaps_place_id?: string | undefined
  gmaps_url?: string | undefined
  key: string
  lat?: number | undefined
  lng?: number | undefined
  location_name?: string | undefined
  name: string
  parent_event_key?: string | undefined
  playoff_type?: number | undefined
  playoff_type_string?: string | undefined
  postal_code?: string | undefined
  short_name?: string | undefined
  start_date: string
  state_prov?: string | undefined
  timezone?: string | undefined
  webcasts?: Webcast[] | undefined
  website?: string | undefined
  week?: number | undefined
  year: number
}
type EventSimple = {
  city?: string | undefined
  country?: string | undefined
  district?: DistrictList | undefined
  end_date: string
  event_code: string
  event_type: number
  key: string
  name: string
  start_date: string
  state_prov?: string | undefined
  year: number
}
type DistrictRanking = {
  event_points?:
    | {
        alliance_points: number
        award_points: number
        district_cmp: boolean
        elim_points: number
        event_key: string
        qual_points: number
        total: number
      }[]
    | undefined
  point_total: number
  rank: number
  rookie_bonus?: number | undefined
  team_key: string
}
type Team = {
  address?: string | undefined
  city?: string | undefined
  country?: string | undefined
  gmaps_place_id?: string | undefined
  gmaps_url?: string | undefined
  home_championship?: { [x: string]: unknown } | undefined
  key: string
  lat?: number | undefined
  lng?: number | undefined
  location_name?: string | undefined
  motto?: string | undefined
  name: string
  nickname?: string | undefined
  postal_code?: string | undefined
  rookie_year?: number | undefined
  school_name?: string | undefined
  state_prov?: string | undefined
  team_number: number
  website?: string | undefined
}
type TeamSimple = {
  city?: string | undefined
  country?: string | undefined
  key: string
  name: string
  nickname?: string | undefined
  state_prov?: string | undefined
  team_number: number
}
type WLTRecord = { losses: number; ties: number; wins: number }
type EliminationAlliance = {
  backup?: { in?: string | undefined; out?: string | undefined } | undefined
  declines?: string[] | undefined
  name?: string | undefined
  picks: string[]
  status?:
    | {
        current_level_record?: WLTRecord | undefined
        level?: string | undefined
        playoff_average?: number | undefined
        record?: WLTRecord | undefined
        status?: string | undefined
      }
    | undefined
}
type AwardRecipient = { awardee?: string | undefined; team_key?: string | undefined }
type Award = {
  award_type: number
  event_key: string
  name: string
  recipient_list: AwardRecipient[]
  year: number
}
type EventDistrictPoints = {
  points: {
    [x: string]: {
      alliance_points: number
      award_points: number
      elim_points: number
      qual_points: number
      total: number
    }
  }
  tiebreakers?:
    | {
        [x: string]: { highest_qual_scores?: number[] | undefined; qual_wins?: number | undefined }
      }
    | undefined
}
type EventInsights = {
  playoff?: { [x: string]: unknown } | undefined
  qual?: { [x: string]: unknown } | undefined
}
type MatchAlliance = {
  dq_team_keys?: string[] | undefined
  score: number
  surrogate_team_keys?: string[] | undefined
  team_keys: string[]
}
type Match = {
  actual_time?: bigint | undefined
  alliances?: { blue?: MatchAlliance | undefined; red?: MatchAlliance | undefined } | undefined
  comp_level: 'qm' | 'ef' | 'qf' | 'sf' | 'f'
  event_key: string
  key: string
  match_number: number
  post_result_time?: bigint | undefined
  predicted_time?: bigint | undefined
  score_breakdown?: { [x: string]: unknown } | undefined
  set_number: number
  time?: bigint | undefined
  videos?: { key?: string | undefined; type?: string | undefined }[] | undefined
  winning_alliance?: 'red' | 'blue' | '' | undefined
}
type MatchSimple = {
  actual_time?: bigint | undefined
  alliances?: { blue?: MatchAlliance | undefined; red?: MatchAlliance | undefined } | undefined
  comp_level: 'qm' | 'ef' | 'qf' | 'sf' | 'f'
  event_key: string
  key: string
  match_number: number
  predicted_time?: bigint | undefined
  set_number: number
  time?: bigint | undefined
  winning_alliance?: 'red' | 'blue' | '' | undefined
}
type EventOPRs = {
  ccwms?: { [x: string]: number } | undefined
  dprs?: { [x: string]: number } | undefined
  oprs?: { [x: string]: number } | undefined
}
type EventPredictions = { [x: string]: unknown }
type EventRanking = {
  extra_stats_info?: { name: string; precision: number }[] | undefined
  rankings: {
    dq: number
    extra_stats?: number[] | undefined
    matches_played: number
    qual_average?: number | undefined
    rank: number
    record: WLTRecord
    sort_orders?: number[] | undefined
    team_key: string
  }[]
  sort_order_info: { name: string; precision: number }[]
}
type TeamEventStatusAllianceBackup = { in?: string | undefined; out?: string | undefined }
type TeamEventStatusAlliance = {
  backup?: TeamEventStatusAllianceBackup | undefined
  name?: string | undefined
  number: number
  pick: number
}
type TeamEventStatusPlayoff = {
  current_level_record?: WLTRecord | undefined
  level?: 'qm' | 'ef' | 'qf' | 'sf' | 'f' | undefined
  playoff_average?: number | undefined
  record?: WLTRecord | undefined
  status?: 'won' | 'eliminated' | 'playing' | undefined
}
type TeamEventStatusRank = {
  num_teams?: number | undefined
  ranking?:
    | {
        dq?: number | undefined
        matches_played?: number | undefined
        qual_average?: number | undefined
        rank?: number | undefined
        record?: WLTRecord | undefined
        sort_orders?: number[] | undefined
        team_key?: string | undefined
      }
    | undefined
  sort_order_info?: { name?: string | undefined; precision?: number | undefined }[] | undefined
  status?: string | undefined
}
type TeamEventStatus = {
  alliance?: TeamEventStatusAlliance | undefined
  alliance_status_str?: string | undefined
  last_match_key?: string | undefined
  next_match_key?: string | undefined
  overall_status_str?: string | undefined
  playoff?: TeamEventStatusPlayoff | undefined
  playoff_status_str?: string | undefined
  qual?: TeamEventStatusRank | undefined
}
type ZebraTeam = { team_key: string; xs: number[]; ys: number[] }
type Zebra = {
  alliances: { blue?: ZebraTeam[] | undefined; red?: ZebraTeam[] | undefined }
  key: string
  times: number[]
}
type APIStatusAppVersion = { latest_app_version: number; min_app_version: number }
type APIStatus = {
  android: APIStatusAppVersion
  current_season: number
  down_events: string[]
  ios: APIStatusAppVersion
  is_datafeed_down: boolean
  max_season: number
}
type Media = {
  details?: { [x: string]: unknown } | undefined
  direct_url?: string | undefined
  foreign_key: string
  preferred?: boolean | undefined
  type:
    | 'youtube'
    | 'cdphotothread'
    | 'imgur'
    | 'facebook-profile'
    | 'youtube-channel'
    | 'twitter-profile'
    | 'github-profile'
    | 'instagram-profile'
    | 'periscope-profile'
    | 'grabcad'
    | 'instagram-image'
    | 'external-link'
    | 'avatar'
  view_url?: string | undefined
}
type TeamRobot = { key: string; robot_name: string; team_key: string; year: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/district/:district_key/events': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/district/:district_key/events/keys': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/district/:district_key/events/simple': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/district/:district_key/rankings': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: DistrictRanking[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/district/:district_key/teams': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/district/:district_key/teams/keys': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/district/:district_key/teams/simple': {
      $get:
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { district_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/districts/:year': {
      $get:
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: DistrictList[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/alliances': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EliminationAlliance[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/awards': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Award[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/district_points': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventDistrictPoints
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/insights': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventInsights
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/matches': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Match[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/matches/keys': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/matches/simple': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: MatchSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/matches/timeseries': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/oprs': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventOPRs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/predictions': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventPredictions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/rankings': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventRanking
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/simple': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventSimple
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/teams': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/teams/keys': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/teams/simple': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/event/:event_key/teams/statuses': {
      $get:
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: { [x: string]: TeamEventStatus }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/events/:year': {
      $get:
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/events/:year/keys': {
      $get:
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/events/:year/simple': {
      $get:
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/match/:match_key': {
      $get:
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Match
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/match/:match_key/simple': {
      $get:
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: MatchSimple
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/match/:match_key/timeseries': {
      $get:
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/match/:match_key/zebra_motionworks': {
      $get:
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Zebra
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { match_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/status': {
      $get:
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: APIStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { header: { 'If-None-Match'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/awards': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Award[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/awards/:year': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Award[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/districts': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: DistrictList[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/event/:event_key/awards': {
      $get:
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Award[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/event/:event_key/matches': {
      $get:
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Match[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/event/:event_key/matches/keys': {
      $get:
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/event/:event_key/matches/simple': {
      $get:
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Match[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/event/:event_key/status': {
      $get:
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamEventStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; event_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events/keys': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events/simple': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events/:year': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events/:year/keys': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events/:year/simple': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: EventSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/events/:year/statuses': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: { [x: string]: TeamEventStatus }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/matches/:year': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Match[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/matches/:year/keys': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/matches/:year/simple': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: MatchSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/media/tag/:media_tag': {
      $get:
        | {
            input: { param: { team_key: string; media_tag: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Media[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; media_tag: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; media_tag: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/media/tag/:media_tag/:year': {
      $get:
        | {
            input: { param: { team_key: string; media_tag: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Media[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; media_tag: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; media_tag: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/media/:year': {
      $get:
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Media[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string; year: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/robots': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamRobot[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/simple': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamSimple
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/social_media': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Media[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/team/:team_key/years_participated': {
      $get:
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { team_key: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/:page_num': {
      $get:
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/:page_num/keys': {
      $get:
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/:page_num/simple': {
      $get:
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/:year/:page_num': {
      $get:
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/:year/:page_num/keys': {
      $get:
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/teams/:year/:page_num/simple': {
      $get:
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: TeamSimple[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { year: number; page_num: number } } & {
              header: { 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
