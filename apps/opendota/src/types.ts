type MatchResponse = {
  match_id?: number | undefined
  barracks_status_dire?: number | undefined
  barracks_status_radiant?: number | undefined
  chat?:
    | {
        time?: number | undefined
        unit?: string | undefined
        key?: string | undefined
        slot?: number | undefined
        player_slot?: (number | null) | undefined
      }[]
    | undefined
  cluster?: number | undefined
  cosmetics?: { [x: string]: number } | undefined
  dire_score?: number | undefined
  draft_timings?:
    | {
        order?: number | undefined
        pick?: boolean | undefined
        active_team?: number | undefined
        hero_id?: number | undefined
        player_slot?: (number | null) | undefined
        extra_time?: number | undefined
        total_time_taken?: number | undefined
      }[]
    | undefined
  duration?: number | undefined
  engine?: number | undefined
  first_blood_time?: number | undefined
  game_mode?: number | undefined
  human_players?: number | undefined
  leagueid?: number | undefined
  lobby_type?: number | undefined
  match_seq_num?: number | undefined
  negative_votes?: number | undefined
  objectives?: { [x: string]: unknown }[] | undefined
  picks_bans?:
    | {
        is_pick?: boolean | undefined
        hero_id?: number | undefined
        team?: number | undefined
        order?: number | undefined
      }[]
    | undefined
  positive_votes?: number | undefined
  radiant_gold_adv?: number[] | undefined
  radiant_score?: number | undefined
  radiant_win?: (boolean | null) | undefined
  radiant_xp_adv?: number[] | undefined
  start_time?: number | undefined
  teamfights?: ({ [x: string]: unknown }[] | null) | undefined
  tower_status_dire?: number | undefined
  tower_status_radiant?: number | undefined
  version?: number | undefined
  replay_salt?: number | undefined
  series_id?: number | undefined
  series_type?: number | undefined
  radiant_team?: { [x: string]: unknown } | undefined
  dire_team?: { [x: string]: unknown } | undefined
  league?: { [x: string]: unknown } | undefined
  skill?: (number | null) | undefined
  players?:
    | {
        match_id?: number | undefined
        player_slot?: (number | null) | undefined
        ability_upgrades_arr?: number[] | undefined
        ability_uses?: { [x: string]: unknown } | undefined
        ability_targets?: { [x: string]: unknown } | undefined
        damage_targets?: { [x: string]: unknown } | undefined
        account_id?: number | undefined
        actions?: { [x: string]: unknown } | undefined
        additional_units?: ({ [x: string]: unknown }[] | null) | undefined
        assists?: number | undefined
        backpack_0?: number | undefined
        backpack_1?: number | undefined
        backpack_2?: number | undefined
        buyback_log?:
          | {
              time?: number | undefined
              slot?: number | undefined
              player_slot?: (number | null) | undefined
            }[]
          | undefined
        camps_stacked?: number | undefined
        camps_stacked_t?: number[] | undefined
        connection_log?:
          | {
              time?: number | undefined
              event?: string | undefined
              player_slot?: (number | null) | undefined
            }[]
          | undefined
        creeps_stacked?: number | undefined
        damage?: { [x: string]: unknown } | undefined
        damage_inflictor?: { [x: string]: unknown } | undefined
        damage_inflictor_received?: { [x: string]: unknown } | undefined
        damage_taken?: { [x: string]: unknown } | undefined
        deaths?: number | undefined
        denies?: number | undefined
        dn_t?: number[] | undefined
        gold?: number | undefined
        gold_per_min?: number | undefined
        gold_reasons?: { [x: string]: unknown } | undefined
        gold_spent?: number | undefined
        gold_t?: number[] | undefined
        hero_damage?: number | undefined
        hero_damage_t?: number[] | undefined
        hero_healing?: number | undefined
        hero_healing_t?: number[] | undefined
        tower_damage_t?: number[] | undefined
        hero_hits?: { [x: string]: unknown } | undefined
        hero_id?: number | undefined
        item_0?: number | undefined
        item_1?: number | undefined
        item_2?: number | undefined
        item_3?: number | undefined
        item_4?: number | undefined
        item_5?: number | undefined
        item_uses?: { [x: string]: unknown } | undefined
        kill_streaks?: { [x: string]: unknown } | undefined
        killed?: { [x: string]: unknown } | undefined
        killed_by?: { [x: string]: unknown } | undefined
        kills?: number | undefined
        kills_log?: { time?: number | undefined; key?: string | undefined }[] | undefined
        assists_log?:
          | {
              time?: number | undefined
              key?: string | undefined
              ambiguous?: boolean | undefined
            }[]
          | undefined
        deaths_log?:
          | {
              time?: number | undefined
              key?: string | undefined
              gold_lost?: number | undefined
              gold_fed?: number | undefined
              gold_fed_shared?: boolean | undefined
              time_dead?: number | undefined
            }[]
          | undefined
        lane_pos?: { [x: string]: unknown } | undefined
        last_hits?: number | undefined
        leaver_status?: number | undefined
        level?: number | undefined
        lh_t?: number[] | undefined
        life_state?: { [x: string]: unknown } | undefined
        max_hero_hit?: { [x: string]: unknown } | undefined
        multi_kills?: { [x: string]: unknown } | undefined
        obs?: { [x: string]: unknown } | undefined
        obs_left_log?: { [x: string]: unknown }[] | undefined
        obs_log?: { [x: string]: unknown }[] | undefined
        obs_placed?: number | undefined
        party_id?: number | undefined
        permanent_buffs?: { [x: string]: unknown }[] | undefined
        hero_variant?: number | undefined
        pings?: number | undefined
        purchase?: { [x: string]: unknown } | undefined
        purchase_log?:
          | { time?: number | undefined; key?: string | undefined; charges?: number | undefined }[]
          | undefined
        rune_pickups?: number | undefined
        runes?: { [x: string]: number } | undefined
        runes_log?: { time?: number | undefined; key?: number | undefined }[] | undefined
        sen?: { [x: string]: unknown } | undefined
        sen_left_log?: { [x: string]: unknown }[] | undefined
        sen_log?: { [x: string]: unknown }[] | undefined
        sen_placed?: number | undefined
        stuns?: number | undefined
        times?: number[] | undefined
        tower_damage?: number | undefined
        xp_per_min?: number | undefined
        xp_reasons?: { [x: string]: unknown } | undefined
        xp_t?: number[] | undefined
        personaname?: (string | null) | undefined
        name?: (string | null) | undefined
        last_login?: (string | null) | undefined
        radiant_win?: (boolean | null) | undefined
        start_time?: number | undefined
        duration?: number | undefined
        cluster?: number | undefined
        lobby_type?: number | undefined
        game_mode?: number | undefined
        patch?: number | undefined
        region?: number | undefined
        isRadiant?: boolean | undefined
        win?: number | undefined
        lose?: number | undefined
        total_gold?: number | undefined
        total_xp?: number | undefined
        kills_per_min?: number | undefined
        kda?: number | undefined
        abandons?: number | undefined
        neutral_kills?: number | undefined
        tower_kills?: number | undefined
        courier_kills?: number | undefined
        lane_kills?: number | undefined
        hero_kills?: number | undefined
        observer_kills?: number | undefined
        sentry_kills?: number | undefined
        roshan_kills?: number | undefined
        necronomicon_kills?: number | undefined
        ancient_kills?: number | undefined
        buyback_count?: number | undefined
        observer_uses?: number | undefined
        sentry_uses?: number | undefined
        lane_efficiency?: number | undefined
        lane_efficiency_pct?: number | undefined
        lane?: (number | null) | undefined
        lane_role?: (number | null) | undefined
        is_roaming?: (boolean | null) | undefined
        position_est?: (number | null) | undefined
        purchase_time?: { [x: string]: unknown } | undefined
        first_purchase_time?: { [x: string]: unknown } | undefined
        item_win?: { [x: string]: unknown } | undefined
        item_usage?: { [x: string]: unknown } | undefined
        purchase_tpscroll?: number | undefined
        actions_per_min?: number | undefined
        life_state_dead?: number | undefined
        rank_tier?: number | undefined
        cosmetics?:
          | {
              item_id?: number | undefined
              name?: (string | null) | undefined
              prefab?: string | undefined
              creation_date?: (string | null) | undefined
              image_inventory?: (string | null) | undefined
              image_path?: (string | null) | undefined
              item_description?: (string | null) | undefined
              item_name?: string | undefined
              item_rarity?: (string | null) | undefined
              item_type_name?: (string | null) | undefined
              used_by_heroes?: (string | null) | undefined
            }[]
          | undefined
        benchmarks?: { [x: string]: unknown } | undefined
        neutral_tokens_log?: { time?: number | undefined; key?: string | undefined }[] | undefined
        neutral_item_history?:
          | {
              time?: number | undefined
              item_neutral?: string | undefined
              item_neutral_enhancement?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  patch?: number | undefined
  region?: number | undefined
  all_word_counts?: { [x: string]: unknown } | undefined
  my_word_counts?: { [x: string]: unknown } | undefined
  throw?: number | undefined
  comeback?: number | undefined
  loss?: number | undefined
  win?: number | undefined
  replay_url?: string | undefined
  pauses?: { time?: number | undefined; duration?: number | undefined }[] | undefined
}
type PlayersResponse = {
  rank_tier?: (number | null) | undefined
  leaderboard_rank?: (number | null) | undefined
  computed_mmr?: (number | null) | undefined
  computed_mmr_turbo?: (number | null) | undefined
  aliases?: { personaname?: string | undefined; name_since?: string | undefined }[] | undefined
  profile?:
    | {
        account_id?: number | undefined
        personaname?: (string | null) | undefined
        name?: (string | null) | undefined
        plus?: boolean | undefined
        cheese?: (number | null) | undefined
        steamid?: (string | null) | undefined
        avatar?: (string | null) | undefined
        avatarmedium?: (string | null) | undefined
        avatarfull?: (string | null) | undefined
        profileurl?: (string | null) | undefined
        last_login?: (string | null) | undefined
        loccountrycode?: (string | null) | undefined
        is_contributor?: boolean | undefined
        is_subscriber?: boolean | undefined
      }
    | undefined
}
type PlayerWinLossResponse = { win?: number | undefined; lose?: number | undefined }
type PlayerMatchesResponse = {
  match_id?: number | undefined
  player_slot?: (number | null) | undefined
  radiant_win?: (boolean | null) | undefined
  duration?: number | undefined
  game_mode?: number | undefined
  lobby_type?: number | undefined
  hero_id?: number | undefined
  start_time?: number | undefined
  version?: (number | null) | undefined
  kills?: number | undefined
  deaths?: number | undefined
  assists?: number | undefined
  skill?: (number | null) | undefined
  average_rank?: (number | null) | undefined
  leaver_status?: number | undefined
  party_size?: (number | null) | undefined
  hero_variant?: number | undefined
}
type PlayerHeroesResponse = {
  hero_id?: number | undefined
  last_played?: number | undefined
  games?: number | undefined
  win?: number | undefined
  with_games?: number | undefined
  with_win?: number | undefined
  against_games?: number | undefined
  against_win?: number | undefined
}
type PlayerPeersResponse = {
  account_id?: number | undefined
  last_played?: number | undefined
  win?: number | undefined
  games?: number | undefined
  with_win?: number | undefined
  with_games?: number | undefined
  against_win?: number | undefined
  against_games?: number | undefined
  with_gpm_sum?: number | undefined
  with_xpm_sum?: number | undefined
  personaname?: (string | null) | undefined
  name?: (string | null) | undefined
  is_contributor?: boolean | undefined
  is_subscriber?: boolean | undefined
  last_login?: (string | null) | undefined
  avatar?: (string | null) | undefined
  avatarfull?: (string | null) | undefined
}
type PlayerProsResponse = {
  account_id?: number | undefined
  name?: (string | null) | undefined
  country_code?: string | undefined
  fantasy_role?: number | undefined
  team_id?: number | undefined
  team_name?: (string | null) | undefined
  team_tag?: (string | null) | undefined
  is_locked?: boolean | undefined
  is_pro?: boolean | undefined
  locked_until?: (number | null) | undefined
  steamid?: (string | null) | undefined
  avatar?: (string | null) | undefined
  avatarmedium?: (string | null) | undefined
  avatarfull?: (string | null) | undefined
  profileurl?: (string | null) | undefined
  last_login?: (string | null) | undefined
  full_history_time?: (string | null) | undefined
  cheese?: (number | null) | undefined
  fh_unavailable?: (boolean | null) | undefined
  loccountrycode?: (string | null) | undefined
  last_played?: (number | null) | undefined
  win?: number | undefined
  games?: number | undefined
  with_win?: number | undefined
  with_games?: number | undefined
  against_win?: number | undefined
  against_games?: number | undefined
  with_gpm_sum?: (number | null) | undefined
  with_xpm_sum?: (number | null) | undefined
}
type PlayerTotalsResponse = {
  field?: string | undefined
  n?: number | undefined
  sum?: number | undefined
}
type PlayerCountsResponse = {
  leaver_status?: { [x: string]: unknown } | undefined
  game_mode?: { [x: string]: unknown } | undefined
  lobby_type?: { [x: string]: unknown } | undefined
  lane_role?: { [x: string]: unknown } | undefined
  region?: { [x: string]: unknown } | undefined
  patch?: { [x: string]: unknown } | undefined
}
type PlayerWardMapResponse = {
  obs?: { [x: string]: unknown } | undefined
  sen?: { [x: string]: unknown } | undefined
}
type PlayerWordCloudResponse = {
  my_word_counts?: { [x: string]: unknown } | undefined
  all_word_counts?: { [x: string]: unknown } | undefined
}
type PlayerRatingsResponse = {
  account_id?: number | undefined
  match_id?: number | undefined
  rank_tier?: number | undefined
  time?: number | undefined
}
type PlayerRankingsResponse = {
  hero_id?: number | undefined
  score?: number | undefined
  percent_rank?: number | undefined
  card?: number | undefined
}
type PlayerObjectResponse = {
  account_id?: number | undefined
  steamid?: string | undefined
  avatar?: string | undefined
  avatarmedium?: string | undefined
  avatarfull?: string | undefined
  profileurl?: string | undefined
  personaname?: (string | null) | undefined
  last_login?: string | undefined
  full_history_time?: string | undefined
  cheese?: number | undefined
  fh_unavailable?: boolean | undefined
  loccountrycode?: string | undefined
  name?: string | undefined
  country_code?: string | undefined
  fantasy_role?: number | undefined
  team_id?: number | undefined
  team_name?: (string | null) | undefined
  team_tag?: string | undefined
  is_locked?: boolean | undefined
  is_pro?: boolean | undefined
  locked_until?: number | undefined
  computed_mmr?: (number | null) | undefined
}
type MatchObjectResponse = {
  match_id?: number | undefined
  duration?: number | undefined
  start_time?: number | undefined
  radiant_team_id?: number | undefined
  radiant_name?: string | undefined
  dire_team_id?: number | undefined
  dire_name?: string | undefined
  leagueid?: number | undefined
  league_name?: string | undefined
  series_id?: number | undefined
  series_type?: number | undefined
  radiant_score?: number | undefined
  dire_score?: number | undefined
  radiant_win?: (boolean | null) | undefined
  radiant?: boolean | undefined
}
type PublicMatchesResponse = {
  match_id?: number | undefined
  match_seq_num?: number | undefined
  radiant_win?: (boolean | null) | undefined
  start_time?: number | undefined
  duration?: number | undefined
  lobby_type?: number | undefined
  game_mode?: number | undefined
  avg_rank_tier?: number | undefined
  num_rank_tier?: number | undefined
  cluster?: number | undefined
  radiant_team?: number[] | undefined
  dire_team?: number[] | undefined
}
type ParsedMatchesResponse = { match_id?: number | undefined }
type MetadataResponse = { banner?: ({ [x: string]: unknown } | null) | undefined }
type DistributionsResponse = {
  ranks?:
    | {
        rows?:
          | {
              bin?: number | undefined
              bin_name?: number | undefined
              count?: number | undefined
              cumulative_sum?: number | undefined
            }[]
          | undefined
        sum?: { count?: number | undefined } | undefined
      }
    | undefined
}
type SearchResponse = {
  account_id?: number | undefined
  avatarfull?: (string | null) | undefined
  personaname?: (string | null) | undefined
  last_match_time?: string | undefined
  similarity?: number | undefined
}
type RankingsResponse = {
  hero_id?: number | undefined
  rankings?:
    | {
        account_id?: number | undefined
        score?: number | undefined
        steamid?: (string | null) | undefined
        avatar?: (string | null) | undefined
        avatarmedium?: (string | null) | undefined
        avatarfull?: (string | null) | undefined
        profileurl?: (string | null) | undefined
        personaname?: (string | null) | undefined
        last_login?: (string | null) | undefined
        full_history_time?: string | undefined
        cheese?: (number | null) | undefined
        fh_unavailable?: (boolean | null) | undefined
        loccountrycode?: (string | null) | undefined
        rank_tier?: (number | null) | undefined
      }[]
    | undefined
}
type BenchmarksResponse = {
  hero_id?: number | undefined
  result?:
    | {
        gold_per_min?: { percentile?: number | undefined; value?: number | undefined }[] | undefined
        xp_per_min?: { percentile?: number | undefined; value?: number | undefined }[] | undefined
        kills_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        deaths_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        assists_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        last_hits_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        denies_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        hero_damage_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        hero_healing_per_min?:
          | { percentile?: number | undefined; value?: number | undefined }[]
          | undefined
        tower_damage?: { percentile?: number | undefined; value?: number | undefined }[] | undefined
      }
    | undefined
}
type HeroObjectResponse = {
  id: number
  name?: string | undefined
  localized_name?: string | undefined
  primary_attr?: string | undefined
  attack_type?: string | undefined
  roles?: string[] | undefined
}
type HeroStatsResponse = {
  id?: number | undefined
  name?: string | undefined
  localized_name?: string | undefined
  primary_attr?: string | undefined
  attack_type?: string | undefined
  roles?: string[] | undefined
  img?: string | undefined
  icon?: string | undefined
  base_health?: number | undefined
  base_health_regen?: number | undefined
  base_mana?: number | undefined
  base_mana_regen?: number | undefined
  base_armor?: number | undefined
  base_mr?: number | undefined
  base_attack_min?: number | undefined
  base_attack_max?: number | undefined
  base_str?: number | undefined
  base_agi?: number | undefined
  base_int?: number | undefined
  str_gain?: number | undefined
  agi_gain?: number | undefined
  int_gain?: number | undefined
  attack_range?: number | undefined
  projectile_speed?: number | undefined
  attack_rate?: number | undefined
  base_attack_time?: number | undefined
  attack_point?: number | undefined
  move_speed?: number | undefined
  turn_rate?: number | undefined
  cm_enabled?: boolean | undefined
  legs?: number | undefined
  day_vision?: number | undefined
  night_vision?: number | undefined
  hero_id?: number | undefined
  turbo_picks?: number | undefined
  turbo_wins?: number | undefined
  pro_ban?: number | undefined
  pro_win?: number | undefined
  pro_pick?: number | undefined
  '1_pick'?: number | undefined
  '1_win'?: number | undefined
  '2_pick'?: number | undefined
  '2_win'?: number | undefined
  '3_pick'?: number | undefined
  '3_win'?: number | undefined
  '4_pick'?: number | undefined
  '4_win'?: number | undefined
  '5_pick'?: number | undefined
  '5_win'?: number | undefined
  '6_pick'?: number | undefined
  '6_win'?: number | undefined
  '7_pick'?: number | undefined
  '7_win'?: number | undefined
  '8_pick'?: number | undefined
  '8_win'?: number | undefined
}
type HeroMatchupsResponse = {
  hero_id?: number | undefined
  games_played?: number | undefined
  wins?: number | undefined
}
type HeroDurationsResponse = {
  duration_bin?: string | undefined
  games_played?: number | undefined
  wins?: number | undefined
}
type HeroItemPopularityResponse = {
  start_game_items?: { item?: number | undefined } | undefined
  early_game_items?: { item?: number | undefined } | undefined
  mid_game_items?: { item?: number | undefined } | undefined
  late_game_items?: { item?: number | undefined } | undefined
}
type LeagueObjectResponse = {
  leagueid?: number | undefined
  ticket?: string | undefined
  banner?: string | undefined
  tier?: string | undefined
  name?: string | undefined
}
type TeamObjectResponse = {
  team_id?: number | undefined
  rating?: number | undefined
  wins?: number | undefined
  losses?: number | undefined
  last_match_time?: number | undefined
  name?: (string | null) | undefined
  tag?: string | undefined
}
type TeamMatchObjectResponse = {
  match_id?: number | undefined
  radiant?: boolean | undefined
  radiant_win?: (boolean | null) | undefined
  radiant_score?: number | undefined
  dire_score?: number | undefined
  duration?: number | undefined
  start_time?: number | undefined
  leagueid?: number | undefined
  league_name?: string | undefined
  cluster?: number | undefined
  opposing_team_id?: number | undefined
  opposing_team_name?: (string | null) | undefined
  opposing_team_logo?: string | undefined
}
type TeamPlayersResponse = {
  account_id?: number | undefined
  name?: (string | null) | undefined
  games_played?: number | undefined
  wins?: number | undefined
  is_current_team_member?: boolean | undefined
}
type TeamHeroesResponse = {
  hero_id?: number | undefined
  name?: string | undefined
  games_played?: number | undefined
  wins?: number | undefined
}
type RecordsResponse = {
  match_id?: number | undefined
  start_time?: number | undefined
  hero_id?: number | undefined
  score?: number | undefined
}
type ScenarioItemTimingsResponse = {
  hero_id?: number | undefined
  item?: string | undefined
  time?: number | undefined
  games?: string | undefined
  wins?: string | undefined
}
type ScenarioLaneRolesResponse = {
  hero_id?: number | undefined
  lane_role?: number | undefined
  time?: number | undefined
  games?: string | undefined
  wins?: string | undefined
}
type ScenarioMiscResponse = {
  scenario?: string | undefined
  is_radiant?: boolean | undefined
  region?: number | undefined
  games?: string | undefined
  wins?: string | undefined
}
type SchemaResponse = {
  table_name?: string | undefined
  column_name?: string | undefined
  data_type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/matches/:match_id': {
      $get: {
        input: { param: { match_id: number } }
        output: MatchResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id': {
      $get: {
        input: { param: { account_id: number } }
        output: PlayersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/wl': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerWinLossResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/recentMatches': {
      $get: {
        input: { param: { account_id: number } }
        output: { [x: string]: unknown }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/matches': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
            project?: string | undefined
          }
        }
        output: PlayerMatchesResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/heroes': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerHeroesResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/peers': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerPeersResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/pros': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerProsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/totals': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerTotalsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/counts': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerCountsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/histograms/:field': {
      $get: {
        input: { param: { account_id: number; field: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/wardmap': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerWardMapResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/wordcloud': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            win?: number | undefined
            patch?: number | undefined
            game_mode?: number | undefined
            lobby_type?: number | undefined
            region?: number | undefined
            date?: number | undefined
            lane_role?: number | undefined
            hero_id?: number | undefined
            is_radiant?: number | undefined
            included_account_id?: number | undefined
            excluded_account_id?: number | undefined
            with_hero_id?: number | undefined
            against_hero_id?: number | undefined
            significant?: number | undefined
            having?: number | undefined
            sort?: string | undefined
          }
        }
        output: PlayerWordCloudResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/ratings': {
      $get: {
        input: { param: { account_id: number } }
        output: PlayerRatingsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/rankings': {
      $get: {
        input: { param: { account_id: number } }
        output: PlayerRankingsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/players/:account_id/refresh': {
      $post: {
        input: { param: { account_id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/topPlayers': {
      $get: {
        input: { query: { turbo?: number | undefined } }
        output: PlayerObjectResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/proPlayers': {
      $get: { input: {}; output: PlayerObjectResponse[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/proMatches': {
      $get: {
        input: { query: { less_than_match_id?: number | undefined } }
        output: MatchObjectResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publicMatches': {
      $get: {
        input: {
          query: {
            less_than_match_id?: number | undefined
            min_rank?: number | undefined
            max_rank?: number | undefined
          }
        }
        output: PublicMatchesResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/parsedMatches': {
      $get: {
        input: { query: { less_than_match_id?: number | undefined } }
        output: ParsedMatchesResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/explorer': {
      $get: {
        input: { query: { sql?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/metadata': {
      $get: { input: {}; output: MetadataResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/distributions': {
      $get: { input: {}; output: DistributionsResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/search': {
      $get: {
        input: { query: { q: string } }
        output: SearchResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/rankings': {
      $get: {
        input: { query: { hero_id: string } }
        output: RankingsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/benchmarks': {
      $get: {
        input: {
          query: {
            hero_id: string
            bracket?: number | undefined
            role?: 'core' | 'support' | undefined
          }
        }
        output: BenchmarksResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/health': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/request/:jobId': {
      $get: {
        input: { param: { jobId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/request/:match_id': {
      $post: {
        input: { param: { match_id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/findMatches': {
      $get: {
        input: { query: { teamA?: number[] | undefined; teamB?: number[] | undefined } }
        output: { [x: string]: unknown }[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/heroes': {
      $get: { input: {}; output: HeroObjectResponse[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/heroStats': {
      $get: { input: {}; output: HeroStatsResponse[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/heroes/:hero_id/matches': {
      $get: {
        input: { param: { hero_id: number } }
        output: MatchObjectResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/heroes/:hero_id/matchups': {
      $get: {
        input: { param: { hero_id: number } }
        output: HeroMatchupsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/heroes/:hero_id/durations': {
      $get: {
        input: { param: { hero_id: number } }
        output: HeroDurationsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/heroes/:hero_id/players': {
      $get: {
        input: { param: { hero_id: number } }
        output: PlayerObjectResponse[][]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/heroes/:hero_id/itemPopularity': {
      $get: {
        input: { param: { hero_id: number } }
        output: HeroItemPopularityResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/leagues': {
      $get: { input: {}; output: LeagueObjectResponse[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/leagues/:league_id': {
      $get: {
        input: { param: { league_id: number } }
        output: LeagueObjectResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/leagues/:league_id/matches': {
      $get: {
        input: { param: { league_id: number } }
        output: MatchObjectResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/leagues/:league_id/matchIds': {
      $get: {
        input: { param: { league_id: number } }
        output: string[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/leagues/:league_id/teams': {
      $get: {
        input: { param: { league_id: number } }
        output: TeamObjectResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/teams': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: TeamObjectResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/teams/:team_id': {
      $get: {
        input: { param: { team_id: number } }
        output: TeamObjectResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/teams/:team_id/matches': {
      $get: {
        input: { param: { team_id: number } }
        output: TeamMatchObjectResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/teams/:team_id/players': {
      $get: {
        input: { param: { team_id: number } }
        output: TeamPlayersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/teams/:team_id/heroes': {
      $get: {
        input: { param: { team_id: number } }
        output: TeamHeroesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/records/:field': {
      $get: {
        input: { param: { field: string } }
        output: RecordsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/live': {
      $get: { input: {}; output: { [x: string]: unknown }[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/scenarios/itemTimings': {
      $get: {
        input: { query: { item?: string | undefined; hero_id?: number | undefined } }
        output: ScenarioItemTimingsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scenarios/laneRoles': {
      $get: {
        input: { query: { lane_role?: string | undefined; hero_id?: number | undefined } }
        output: ScenarioLaneRolesResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scenarios/misc': {
      $get: {
        input: { query: { scenario?: string | undefined } }
        output: ScenarioMiscResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/schema': { $get: { input: {}; output: SchemaResponse[]; outputFormat: 'text'; status: 200 } }
  } & {
    '/constants/:resource': {
      $get: {
        input: { param: { resource: string } }
        output:
          | { [x: string]: { [x: string]: unknown } }
          | ({ [x: string]: { [x: string]: unknown } } | number)[]
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
