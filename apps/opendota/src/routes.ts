import { createRoute, z } from '@hono/zod-openapi'

const BenchmarksResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    result: z
      .object({
        gold_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        xp_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        kills_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        deaths_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        assists_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        last_hits_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        denies_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        hero_damage_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        hero_healing_per_min: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.number().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        tower_damage: z
          .array(
            z
              .object({
                percentile: z.number().exactOptional().openapi({ description: 'percentile' }),
                value: z.int().exactOptional().openapi({ description: 'value' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'result', required: [] }),
  })
  .openapi({ title: 'BenchmarksResponse', required: [] })
  .openapi('BenchmarksResponse')

const DistributionsResponseSchema = z
  .object({
    ranks: z
      .object({
        rows: z
          .array(
            z
              .object({
                bin: z.int().exactOptional().openapi({ description: 'bin' }),
                bin_name: z.int().exactOptional().openapi({ description: 'bin_name' }),
                count: z.int().exactOptional().openapi({ description: 'count' }),
                cumulative_sum: z.int().exactOptional().openapi({ description: 'cumulative_sum' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'rows' }),
        sum: z
          .object({ count: z.int().exactOptional().openapi({ description: 'count' }) })
          .exactOptional()
          .openapi({ description: 'sum', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'ranks', required: [] }),
  })
  .openapi({ title: 'DistributionsResponse', required: [] })
  .openapi('DistributionsResponse')

const HeroDurationsResponseSchema = z
  .object({
    duration_bin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lower bound of number of seconds the match lasted' }),
    games_played: z.int().exactOptional().openapi({ description: 'Number of games played' }),
    wins: z.int().exactOptional().openapi({ description: 'Number of wins' }),
  })
  .openapi({ title: 'HeroDurationsResponse', required: [] })
  .openapi('HeroDurationsResponse')

const HeroItemPopularityResponseSchema = z
  .object({
    start_game_items: z
      .object({ item: z.int().exactOptional().openapi({ description: 'Number of item bought' }) })
      .exactOptional()
      .openapi({ description: 'Items bought before game started', required: [] }),
    early_game_items: z
      .object({ item: z.int().exactOptional().openapi({ description: 'Number of item bought' }) })
      .exactOptional()
      .openapi({
        description: 'Items bought in the first 10 min of the game, with cost at least 700',
        required: [],
      }),
    mid_game_items: z
      .object({ item: z.int().exactOptional().openapi({ description: 'Number of item bought' }) })
      .exactOptional()
      .openapi({
        description: 'Items bought between 10 and 25 min of the game, with cost at least 2000',
        required: [],
      }),
    late_game_items: z
      .object({ item: z.int().exactOptional().openapi({ description: 'Number of item bought' }) })
      .exactOptional()
      .openapi({
        description: 'Items bought at least 25 min after game started, with cost at least 4000',
        required: [],
      }),
  })
  .openapi({ title: 'HeroItemPopularityResponse', required: [] })
  .openapi('HeroItemPopularityResponse')

const HeroMatchupsResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    games_played: z.int().exactOptional().openapi({ description: 'Number of games played' }),
    wins: z.int().exactOptional().openapi({ description: 'Number of games won' }),
  })
  .openapi({ title: 'HeroMatchupsResponse', required: [] })
  .openapi('HeroMatchupsResponse')

const HeroObjectResponseSchema = z
  .object({
    id: z.int().openapi({ description: 'The ID value of the hero played' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dota hero command name', example: 'npc_dota_hero_antimage' }),
    localized_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hero name', example: 'Anti-Mage' }),
    primary_attr: z
      .string()
      .exactOptional()
      .openapi({ description: "Hero primary shorthand attribute name, e.g. 'agi'" }),
    attack_type: z
      .string()
      .exactOptional()
      .openapi({ description: "Hero attack type, either 'Melee' or 'Ranged'" }),
    roles: z
      .array(z.string().openapi({ description: "A hero's role in the game" }))
      .exactOptional(),
  })
  .openapi({ title: 'HeroObjectResponse', required: ['id'] })
  .openapi('HeroObjectResponse')

const HeroStatsResponseSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dota hero command name', example: 'npc_dota_hero_antimage' }),
    localized_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hero name', example: 'Anti-Mage' }),
    primary_attr: z.string().exactOptional().openapi({ description: 'primary_attr' }),
    attack_type: z.string().exactOptional().openapi({ description: 'attack_type' }),
    roles: z.array(z.string()).exactOptional().openapi({ description: 'roles' }),
    img: z.string().exactOptional().openapi({ description: 'img' }),
    icon: z.string().exactOptional().openapi({ description: 'icon' }),
    base_health: z.int().exactOptional().openapi({ description: 'base_health' }),
    base_health_regen: z.number().exactOptional().openapi({ description: 'base_health_regen' }),
    base_mana: z.int().exactOptional().openapi({ description: 'base_mana' }),
    base_mana_regen: z.int().exactOptional().openapi({ description: 'base_mana_regen' }),
    base_armor: z.int().exactOptional().openapi({ description: 'base_armor' }),
    base_mr: z.int().exactOptional().openapi({ description: 'base_mr' }),
    base_attack_min: z.int().exactOptional().openapi({ description: 'base_attack_min' }),
    base_attack_max: z.int().exactOptional().openapi({ description: 'base_attack_max' }),
    base_str: z.int().exactOptional().openapi({ description: 'base_str' }),
    base_agi: z.int().exactOptional().openapi({ description: 'base_agi' }),
    base_int: z.int().exactOptional().openapi({ description: 'base_int' }),
    str_gain: z.number().exactOptional().openapi({ description: 'str_gain' }),
    agi_gain: z.number().exactOptional().openapi({ description: 'agi_gain' }),
    int_gain: z.number().exactOptional().openapi({ description: 'int_gain' }),
    attack_range: z.int().exactOptional().openapi({ description: 'attack_range' }),
    projectile_speed: z.int().exactOptional().openapi({ description: 'projectile_speed' }),
    attack_rate: z.number().exactOptional().openapi({ description: 'attack_rate' }),
    base_attack_time: z.int().exactOptional().openapi({ description: 'base_attack_time' }),
    attack_point: z.number().exactOptional().openapi({ description: 'attack_point' }),
    move_speed: z.int().exactOptional().openapi({ description: 'move_speed' }),
    turn_rate: z.number().exactOptional().openapi({ description: 'turn_rate' }),
    cm_enabled: z.boolean().exactOptional().openapi({ description: 'cm_enabled' }),
    legs: z.int().exactOptional().openapi({ description: 'legs' }),
    day_vision: z.int().exactOptional().openapi({ description: 'day_vision' }),
    night_vision: z.int().exactOptional().openapi({ description: 'night_vision' }),
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    turbo_picks: z.int().exactOptional().openapi({ description: 'Picks in Turbo mode this month' }),
    turbo_wins: z.int().exactOptional().openapi({ description: 'Wins in Turbo mode this month' }),
    pro_ban: z.int().exactOptional().openapi({ description: 'pro_ban' }),
    pro_win: z.int().exactOptional().openapi({ description: 'pro_win' }),
    pro_pick: z.int().exactOptional().openapi({ description: 'pro_pick' }),
    '1_pick': z.int().exactOptional().openapi({ description: 'Herald picks' }),
    '1_win': z.int().exactOptional().openapi({ description: 'Herald wins' }),
    '2_pick': z.int().exactOptional().openapi({ description: 'Guardian picks' }),
    '2_win': z.int().exactOptional().openapi({ description: 'Guardian wins' }),
    '3_pick': z.int().exactOptional().openapi({ description: 'Crusader picks' }),
    '3_win': z.int().exactOptional().openapi({ description: 'Crusader wins' }),
    '4_pick': z.int().exactOptional().openapi({ description: 'Archon picks' }),
    '4_win': z.int().exactOptional().openapi({ description: 'Archon wins' }),
    '5_pick': z.int().exactOptional().openapi({ description: 'Legend picks' }),
    '5_win': z.int().exactOptional().openapi({ description: 'Legend wins' }),
    '6_pick': z.int().exactOptional().openapi({ description: 'Ancient picks' }),
    '6_win': z.int().exactOptional().openapi({ description: 'Ancient wins' }),
    '7_pick': z.int().exactOptional().openapi({ description: 'Divine picks' }),
    '7_win': z.int().exactOptional().openapi({ description: 'Divine wins' }),
    '8_pick': z.int().exactOptional().openapi({ description: 'Immortal picks' }),
    '8_win': z.int().exactOptional().openapi({ description: 'Immortal wins' }),
  })
  .openapi({ title: 'HeroStatsResponse', required: [] })
  .openapi('HeroStatsResponse')

const LeagueObjectResponseSchema = z
  .object({
    leagueid: z.int().exactOptional().openapi({ description: 'leagueid' }),
    ticket: z.string().exactOptional().openapi({ description: 'ticket' }),
    banner: z.string().exactOptional().openapi({ description: 'banner' }),
    tier: z.string().exactOptional().openapi({ description: 'tier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'League name', example: 'ASUS ROG DreamLeague Season 4' }),
  })
  .openapi({ title: 'LeagueObjectResponse', required: [] })
  .openapi('LeagueObjectResponse')

const MatchObjectResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    duration: z.int().exactOptional().openapi({ description: 'Duration of the game in seconds' }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    radiant_team_id: z.int().exactOptional().openapi({ description: "The Radiant's team_id" }),
    radiant_name: z.string().exactOptional().openapi({ description: "The Radiant's team name" }),
    dire_team_id: z.int().exactOptional().openapi({ description: "The Dire's team_id" }),
    dire_name: z.string().exactOptional().openapi({ description: "The Dire's team name" }),
    leagueid: z
      .int()
      .exactOptional()
      .openapi({ description: 'Identifier for the league the match took place in' }),
    league_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of league the match took place in' }),
    series_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Identifier for the series of the match' }),
    series_type: z.int().exactOptional().openapi({ description: 'Type of series the match was' }),
    radiant_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of kills the Radiant team had when the match ended' }),
    dire_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of kills the Dire team had when the match ended' }),
    radiant_win: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
    radiant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the team/player/hero was on Radiant' }),
  })
  .openapi({ title: 'MatchObjectResponse', required: [] })
  .openapi('MatchObjectResponse')

const MatchResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    barracks_status_dire: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Bitmask. An integer that represents a binary of which barracks are still standing. 63 would mean all barracks still stand at the end of the game.',
      }),
    barracks_status_radiant: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Bitmask. An integer that represents a binary of which barracks are still standing. 63 would mean all barracks still stand at the end of the game.',
      }),
    chat: z
      .array(
        z
          .object({
            time: z
              .int()
              .exactOptional()
              .openapi({ description: 'Time in seconds at which the message was said' }),
            unit: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the player who sent the message' }),
            key: z.string().exactOptional().openapi({ description: 'The message the player sent' }),
            slot: z.int().exactOptional().openapi({ description: 'slot' }),
            player_slot: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing information on the chat of the game' }),
    cluster: z.int().exactOptional().openapi({ description: 'cluster' }),
    cosmetics: z.record(z.string(), z.int()).exactOptional().openapi({ description: 'cosmetics' }),
    dire_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of kills the Dire team had when the match ended' }),
    draft_timings: z
      .array(
        z
          .object({
            order: z.int().exactOptional().openapi({ description: 'order' }),
            pick: z.boolean().exactOptional().openapi({ description: 'pick' }),
            active_team: z.int().exactOptional().openapi({ description: 'active_team' }),
            hero_id: z
              .int()
              .exactOptional()
              .openapi({ description: 'The ID value of the hero played' }),
            player_slot: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire',
              }),
            extra_time: z.int().exactOptional().openapi({ description: 'extra_time' }),
            total_time_taken: z.int().exactOptional().openapi({ description: 'total_time_taken' }),
          })
          .openapi({ description: 'draft_stage', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'draft_timings' }),
    duration: z.int().exactOptional().openapi({ description: 'Duration of the game in seconds' }),
    engine: z.int().exactOptional().openapi({ description: 'engine' }),
    first_blood_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time in seconds at which first blood occurred' }),
    game_mode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json',
      }),
    human_players: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of human players in the game' }),
    leagueid: z.int().exactOptional().openapi({ description: 'leagueid' }),
    lobby_type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json',
      }),
    match_seq_num: z.int().exactOptional().openapi({ description: 'match_seq_num' }),
    negative_votes: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of negative votes the replay received in the in-game client',
      }),
    objectives: z.array(z.object({})).exactOptional().openapi({ description: 'objectives' }),
    picks_bans: z
      .array(
        z
          .object({
            is_pick: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Boolean indicating whether the choice is a pick or a ban' }),
            hero_id: z
              .int()
              .exactOptional()
              .openapi({ description: 'The ID value of the hero played' }),
            team: z
              .int()
              .exactOptional()
              .openapi({ description: 'The team that picked or banned the hero' }),
            order: z.int().exactOptional().openapi({ description: 'The order of the pick or ban' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array containing information on the draft. Each item contains a boolean relating to whether the choice is a pick or a ban, the hero ID, the team the picked or banned it, and the order.',
      }),
    positive_votes: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of positive votes the replay received in the in-game client',
      }),
    radiant_gold_adv: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description:
          'Array of the Radiant gold advantage at each minute in the game. A negative number means that Radiant is behind, and thus it is their gold disadvantage. ',
      }),
    radiant_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of kills the Radiant team had when the match ended' }),
    radiant_win: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
    radiant_xp_adv: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description:
          'Array of the Radiant experience advantage at each minute in the game. A negative number means that Radiant is behind, and thus it is their experience disadvantage. ',
      }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    teamfights: z
      .array(z.object({}))
      .nullable()
      .exactOptional()
      .openapi({ description: 'teamfights' }),
    tower_status_dire: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Bitmask. An integer that represents a binary of which Dire towers are still standing.',
      }),
    tower_status_radiant: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Bitmask. An integer that represents a binary of which Radiant towers are still standing.',
      }),
    version: z
      .int()
      .exactOptional()
      .openapi({ description: 'Parse version, used internally by OpenDota' }),
    replay_salt: z.int().exactOptional().openapi({ description: 'replay_salt' }),
    series_id: z.int().exactOptional().openapi({ description: 'series_id' }),
    series_type: z.int().exactOptional().openapi({ description: 'series_type' }),
    radiant_team: z.object({}).exactOptional().openapi({ description: 'radiant_team' }),
    dire_team: z.object({}).exactOptional().openapi({ description: 'dire_team' }),
    league: z.object({}).exactOptional().openapi({ description: 'league' }),
    skill: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Skill bracket assigned by Valve (Normal, High, Very High)' }),
    players: z
      .array(
        z
          .object({
            match_id: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The ID number of the match assigned by Valve',
                example: 3703866531,
              }),
            player_slot: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire',
              }),
            ability_upgrades_arr: z
              .array(z.int())
              .exactOptional()
              .openapi({ description: 'An array describing how abilities were upgraded' }),
            ability_uses: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on how many times the played used their abilities',
              }),
            ability_targets: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on who the player used their abilities on',
              }),
            damage_targets: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on how and how much damage the player dealt to other heroes',
              }),
            account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
            actions: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on how many and what type of actions the player issued to their hero',
              }),
            additional_units: z
              .array(z.object({}))
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on additional units the player had under their control',
              }),
            assists: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of assists the player had' }),
            backpack_0: z.int().exactOptional().openapi({ description: 'Item in backpack slot 0' }),
            backpack_1: z.int().exactOptional().openapi({ description: 'Item in backpack slot 1' }),
            backpack_2: z.int().exactOptional().openapi({ description: 'Item in backpack slot 2' }),
            buyback_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds the buyback occurred' }),
                    slot: z.int().exactOptional().openapi({ description: 'slot' }),
                    player_slot: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Array containing information about buybacks' }),
            camps_stacked: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of camps stacked' }),
            camps_stacked_t: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description:
                  'Array containing number of camps stacked at different times of the match',
              }),
            connection_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Game time in seconds the event ocurred' }),
                    event: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Event that occurred' }),
                    player_slot: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  "Array containing information about the player's disconnections and reconnections",
              }),
            creeps_stacked: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of creeps stacked' }),
            damage: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information about damage dealt by the player to different units',
              }),
            damage_inflictor: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  "Object containing information about about the sources of this player's damage to heroes",
              }),
            damage_inflictor_received: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information about the sources of damage received by this player from heroes',
              }),
            damage_taken: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'Object containing information about from whom the player took damage',
              }),
            deaths: z.int().exactOptional().openapi({ description: 'Number of deaths' }),
            denies: z.int().exactOptional().openapi({ description: 'Number of denies' }),
            dn_t: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description: 'Array containing number of denies at different times of the match',
              }),
            gold: z.int().exactOptional().openapi({ description: 'Gold at the end of the game' }),
            gold_per_min: z
              .int()
              .exactOptional()
              .openapi({ description: 'Gold Per Minute obtained by this player' }),
            gold_reasons: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on how the player gainined gold over the course of the match',
              }),
            gold_spent: z
              .int()
              .exactOptional()
              .openapi({ description: 'How much gold the player spent' }),
            gold_t: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description: 'Array containing total gold at different times of the match',
              }),
            hero_damage: z.int().exactOptional().openapi({ description: 'Hero Damage Dealt' }),
            hero_damage_t: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description:
                  "Array containing cumulative damage dealt to enemy heroes at each minute of the match, taken from the game's own hero damage counter, the one hero_damage comes from, so the final value matches hero_damage up to the last minute boundary. Empty for replays without that counter",
              }),
            hero_healing: z.int().exactOptional().openapi({ description: 'Hero Healing Done' }),
            hero_healing_t: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description:
                  'Array containing cumulative healing done to other heroes at each minute of the match, as computed from the replay combat log. Follows the hero_healing scoreboard definition (self-healing excluded), so the final value matches hero_healing up to the last minute boundary',
              }),
            tower_damage_t: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description:
                  "Array containing cumulative damage dealt to towers at each minute of the match, taken from the game's own tower damage counter, the one tower_damage comes from, so the final value matches tower_damage up to the last minute boundary. Empty for replays without that counter",
              }),
            hero_hits: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on how many ticks of damages the hero inflicted with different spells and damage inflictors',
              }),
            hero_id: z
              .int()
              .exactOptional()
              .openapi({ description: 'The ID value of the hero played' }),
            item_0: z
              .int()
              .exactOptional()
              .openapi({ description: "Item in the player's first slot" }),
            item_1: z
              .int()
              .exactOptional()
              .openapi({ description: "Item in the player's second slot" }),
            item_2: z
              .int()
              .exactOptional()
              .openapi({ description: "Item in the player's third slot" }),
            item_3: z
              .int()
              .exactOptional()
              .openapi({ description: "Item in the player's fourth slot" }),
            item_4: z
              .int()
              .exactOptional()
              .openapi({ description: "Item in the player's fifth slot" }),
            item_5: z
              .int()
              .exactOptional()
              .openapi({ description: "Item in the player's sixth slot" }),
            item_uses: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information about how many times a player used items',
              }),
            kill_streaks: z
              .object({})
              .exactOptional()
              .openapi({
                description: "Object containing information about the player's killstreaks",
              }),
            killed: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'Object containing information about what units the player killed',
              }),
            killed_by: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'Object containing information about who killed the player',
              }),
            kills: z.int().exactOptional().openapi({ description: 'Number of kills' }),
            kills_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds the player killed the hero' }),
                    key: z.string().exactOptional().openapi({ description: 'Hero killed' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'Array containing information on which hero the player killed at what time',
              }),
            deaths_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds the player died' }),
                    key: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Name of the killing unit' }),
                    gold_lost: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Gold the player lost to this death. Sums to the negative gold_reasons bucket 1',
                      }),
                    gold_fed: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          "Gold the enemy team collected for this kill, split between the killer and the assisters. Sums to the enemy's gold_reasons bucket 12, and is larger than gold_lost because the bounty is not what the victim drops. 0 for deaths that pay no bounty, such as a suicide or a death with no enemy hero in range",
                      }),
                    gold_fed_shared: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Present and true when another death on the same side claimed the same payout, so one of the two entries carries all of it and the other carries 0. Their sum is still what that side fed, but neither number stands on its own',
                      }),
                    time_dead: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Seconds spent dead after this death. Absent if the match ended before the respawn',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  "Array containing information on the player's deaths: when they died, to whom, the gold lost, the gold the enemy collected and the time spent dead. Only present for matches parsed after the field was added",
              }),
            lane_pos: z
              .object({})
              .exactOptional()
              .openapi({ description: 'Object containing information on lane position' }),
            last_hits: z.int().exactOptional().openapi({ description: 'Number of last hits' }),
            leaver_status: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  "Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned",
              }),
            level: z.int().exactOptional().openapi({ description: 'Level at the end of the game' }),
            lh_t: z
              .array(z.int())
              .exactOptional()
              .openapi({ description: 'Array describing last hits at each minute in the game' }),
            life_state: z.object({}).exactOptional().openapi({ description: 'life_state' }),
            max_hero_hit: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object with information on the highest damage instance the player inflicted',
              }),
            multi_kills: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object with information on the number of the number of multikills the player had',
              }),
            obs: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object with information on where the player placed observer wards. The location takes the form (outer number, inner number) and are from ~64-192.',
              }),
            obs_left_log: z
              .array(z.object({}))
              .exactOptional()
              .openapi({ description: 'obs_left_log' }),
            obs_log: z
              .array(z.object({}))
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on when and where the player placed observer wards',
              }),
            obs_placed: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of observer wards placed' }),
            party_id: z.int().exactOptional().openapi({ description: 'party_id' }),
            permanent_buffs: z
              .array(z.object({}))
              .exactOptional()
              .openapi({
                description:
                  'Array describing permanent buffs the player had at the end of the game. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/permanent_buffs.json',
              }),
            hero_variant: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  '1-indexed facet, see https://github.com/odota/dotaconstants/blob/master/build/hero_abilities.json',
              }),
            pings: z.int().exactOptional().openapi({ description: 'Total number of pings' }),
            purchase: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'Object containing information on the items the player purchased',
              }),
            purchase_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds the item was bought' }),
                    key: z.string().exactOptional().openapi({ description: 'String item ID' }),
                    charges: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Integer amount of charges' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'Object containing information on when items were purchased',
              }),
            rune_pickups: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of runes picked up' }),
            runes: z
              .record(z.string(), z.int())
              .exactOptional()
              .openapi({
                description: 'Object with information about which runes the player picked up',
              }),
            runes_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds rune picked up' }),
                    key: z.int().exactOptional().openapi({ description: 'key' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Array with information on when runes were picked up' }),
            sen: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object with information on where sentries were placed. The location takes the form (outer number, inner number) and are from ~64-192.',
              }),
            sen_left_log: z
              .array(z.object({}))
              .exactOptional()
              .openapi({
                description:
                  'Array containing information on when and where the player placed sentries',
              }),
            sen_log: z
              .array(z.object({}))
              .exactOptional()
              .openapi({
                description:
                  'Array with information on when and where sentries were placed by the player',
              }),
            sen_placed: z
              .int()
              .exactOptional()
              .openapi({ description: 'How many sentries were placed by the player' }),
            stuns: z
              .number()
              .exactOptional()
              .openapi({ description: 'Total stun duration of all stuns by the player' }),
            times: z
              .array(z.int())
              .exactOptional()
              .openapi({
                description:
                  'Time in seconds corresponding to the time of entries of other arrays in the match.',
              }),
            tower_damage: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total tower damage done by the player' }),
            xp_per_min: z
              .int()
              .exactOptional()
              .openapi({ description: 'Experience Per Minute obtained by the player' }),
            xp_reasons: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  "Object containing information on the sources of this player's experience",
              }),
            xp_t: z
              .array(z.int())
              .exactOptional()
              .openapi({ description: 'Experience at each minute of the game' }),
            personaname: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: "Player's Steam name", example: '420 booty wizard' }),
            name: z.string().nullable().exactOptional().openapi({ description: 'name' }),
            last_login: z.iso
              .datetime({ offset: true })
              .nullable()
              .exactOptional()
              .openapi({ description: "Time of player's last login" }),
            radiant_win: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
            start_time: z
              .int()
              .exactOptional()
              .openapi({ description: 'The Unix timestamp at which the game started' }),
            duration: z
              .int()
              .exactOptional()
              .openapi({ description: 'Duration of the game in seconds' }),
            cluster: z.int().exactOptional().openapi({ description: 'cluster' }),
            lobby_type: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json',
              }),
            game_mode: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json',
              }),
            patch: z.int().exactOptional().openapi({ description: 'Patch ID, from dotaconstants' }),
            region: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Integer corresponding to the region the game was played on',
              }),
            isRadiant: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Boolean for whether or not the player is on Radiant' }),
            win: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Binary integer representing whether or not the player won',
              }),
            lose: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Binary integer representing whether or not the player lost',
              }),
            total_gold: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total gold at the end of the game' }),
            total_xp: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total experience at the end of the game' }),
            kills_per_min: z
              .number()
              .exactOptional()
              .openapi({ description: 'Number of kills per minute' }),
            kda: z.number().exactOptional().openapi({ description: 'kda' }),
            abandons: z.int().exactOptional().openapi({ description: 'abandons' }),
            neutral_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of neutral creeps killed' }),
            tower_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of tower kills the player had' }),
            courier_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of courier kills the player had' }),
            lane_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of lane creeps killed by the player' }),
            hero_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of heroes killed by the player' }),
            observer_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of observer wards killed by the player' }),
            sentry_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of sentry wards killed by the player' }),
            roshan_kills: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Total number of roshan kills (last hit on roshan) the player had',
              }),
            necronomicon_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of Necronomicon creeps killed by the player' }),
            ancient_kills: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of Ancient creeps killed by the player' }),
            buyback_count: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of buyback the player used' }),
            observer_uses: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of observer wards used' }),
            sentry_uses: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of sentry wards used' }),
            lane_efficiency: z.number().exactOptional().openapi({ description: 'lane_efficiency' }),
            lane_efficiency_pct: z
              .number()
              .exactOptional()
              .openapi({ description: 'lane_efficiency_pct' }),
            lane: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Integer referring to which lane the hero laned in' }),
            lane_role: z.int().nullable().exactOptional().openapi({ description: 'lane_role' }),
            is_roaming: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Boolean referring to whether or not the player roamed' }),
            position_est: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Estimated position (1-5) of the player within their team, from early farm priority and lane data. Only present on parsed matches',
              }),
            purchase_time: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'Object with information on when the player last purchased an item',
              }),
            first_purchase_time: z
              .object({})
              .exactOptional()
              .openapi({
                description: 'Object with information on when the player first puchased an item',
              }),
            item_win: z
              .object({})
              .exactOptional()
              .openapi({ description: 'Object with information on whether or not the item won' }),
            item_usage: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing binary integers the tell whether the item was purchased by the player (note: this is always 1)',
              }),
            purchase_tpscroll: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of TP scrolls purchased by the player' }),
            actions_per_min: z.int().exactOptional().openapi({ description: 'Actions per minute' }),
            life_state_dead: z.int().exactOptional().openapi({ description: 'life_state_dead' }),
            rank_tier: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The rank tier of the player. Tens place indicates rank, ones place indicates stars.',
              }),
            cosmetics: z
              .array(
                z
                  .object({
                    item_id: z.int().exactOptional(),
                    name: z.string().nullable().exactOptional().openapi({ description: 'name' }),
                    prefab: z.string().exactOptional(),
                    creation_date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                    image_inventory: z.string().nullable().exactOptional(),
                    image_path: z.string().nullable().exactOptional(),
                    item_description: z.string().nullable().exactOptional(),
                    item_name: z.string().exactOptional(),
                    item_rarity: z.string().nullable().exactOptional(),
                    item_type_name: z.string().nullable().exactOptional(),
                    used_by_heroes: z.string().nullable().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'cosmetics' }),
            benchmarks: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Object containing information on certain benchmarks like GPM, XPM, KDA, tower damage, etc',
              }),
            neutral_tokens_log: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds at which the token was dropped' }),
                    key: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Type of token dropped' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Object containing information on neutral tokens drops' }),
            neutral_item_history: z
              .array(
                z
                  .object({
                    time: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Time in seconds at which the item was crafted' }),
                    item_neutral: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Neutral item name' }),
                    item_neutral_enhancement: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Neutral enhancement name' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Object containing information on neutral item history' }),
          })
          .openapi({ description: 'player', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of information on individual players' }),
    patch: z.int().exactOptional().openapi({ description: 'Patch ID, from dotaconstants' }),
    region: z
      .int()
      .exactOptional()
      .openapi({ description: 'Integer corresponding to the region the game was played on' }),
    all_word_counts: z
      .object({})
      .exactOptional()
      .openapi({ description: "Word counts of the all chat messages in the player's games" }),
    my_word_counts: z
      .object({})
      .exactOptional()
      .openapi({ description: "Word counts of the player's all chat messages" }),
    throw: z
      .int()
      .exactOptional()
      .openapi({
        description: "Maximum gold advantage of the player's team if they lost the match",
      }),
    comeback: z
      .int()
      .exactOptional()
      .openapi({
        description: "Maximum gold disadvantage of the player's team if they won the match",
      }),
    loss: z
      .int()
      .exactOptional()
      .openapi({
        description: "Maximum gold disadvantage of the player's team if they lost the match",
      }),
    win: z
      .int()
      .exactOptional()
      .openapi({
        description: "Maximum gold advantage of the player's team if they won the match",
      }),
    replay_url: z.string().exactOptional().openapi({ description: 'replay_url' }),
    pauses: z
      .array(
        z
          .object({
            time: z
              .int()
              .exactOptional()
              .openapi({ description: 'Time in seconds at which pause started' }),
            duration: z.int().exactOptional().openapi({ description: 'The duration of the pause' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array containing information about pauses during the game. Each item contains the time and duration of the pause.',
      }),
  })
  .openapi({ title: 'MatchResponse', required: [] })
  .openapi('MatchResponse')

const MetadataResponseSchema = z
  .object({ banner: z.object({}).nullable().exactOptional().openapi({ description: 'banner' }) })
  .openapi({ title: 'MetadataResponse', required: [] })
  .openapi('MetadataResponse')

const ParsedMatchesResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
  })
  .openapi({ title: 'ParsedMatchesResponse', required: [] })
  .openapi('ParsedMatchesResponse')

const PlayerCountsResponseSchema = z
  .object({
    leaver_status: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned",
      }),
    game_mode: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json',
      }),
    lobby_type: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json',
      }),
    lane_role: z.object({}).exactOptional().openapi({ description: 'lane_role' }),
    region: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Integer corresponding to the region the game was played on' }),
    patch: z.object({}).exactOptional().openapi({ description: 'Patch ID, from dotaconstants' }),
  })
  .openapi({ title: 'PlayerCountsResponse', required: [] })
  .openapi('PlayerCountsResponse')

const PlayerHeroesResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    last_played: z.int().exactOptional().openapi({ description: 'last_played' }),
    games: z.int().exactOptional().openapi({ description: 'games' }),
    win: z.int().exactOptional().openapi({ description: 'win' }),
    with_games: z.int().exactOptional().openapi({ description: 'with_games' }),
    with_win: z.int().exactOptional().openapi({ description: 'with_win' }),
    against_games: z.int().exactOptional().openapi({ description: 'against_games' }),
    against_win: z.int().exactOptional().openapi({ description: 'against_win' }),
  })
  .openapi({ title: 'PlayerHeroesResponse', description: 'hero', required: [] })
  .openapi('PlayerHeroesResponse')

const PlayerMatchesResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    player_slot: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire' }),
    radiant_win: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
    duration: z.int().exactOptional().openapi({ description: 'Duration of the game in seconds' }),
    game_mode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json',
      }),
    lobby_type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json',
      }),
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    version: z.int().nullable().exactOptional().openapi({ description: 'version' }),
    kills: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total kills the player had at the end of the game' }),
    deaths: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total deaths the player had at the end of the game' }),
    assists: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total assists the player had at the end of the game' }),
    skill: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Skill bracket assigned by Valve (Normal, High, Very High)' }),
    average_rank: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Average rank of players with public match data' }),
    leaver_status: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned",
      }),
    party_size: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: "Size of the player's party" }),
    hero_variant: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '1-indexed facet, see https://github.com/odota/dotaconstants/blob/master/build/hero_abilities.json',
      }),
  })
  .openapi({
    title: 'PlayerMatchesResponse',
    description: 'Object containing information on the match',
    required: [],
  })
  .openapi('PlayerMatchesResponse')

const PlayerObjectResponseSchema = z
  .object({
    account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
    steamid: z.string().exactOptional().openapi({ description: "Player's steam identifier" }),
    avatar: z
      .string()
      .exactOptional()
      .openapi({ description: 'Steam picture URL (small picture)' }),
    avatarmedium: z
      .string()
      .exactOptional()
      .openapi({ description: 'Steam picture URL (medium picture)' }),
    avatarfull: z
      .string()
      .exactOptional()
      .openapi({ description: 'Steam picture URL (full picture)' }),
    profileurl: z.string().exactOptional().openapi({ description: 'Steam profile URL' }),
    personaname: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Player's Steam name", example: '420 booty wizard' }),
    last_login: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time of last login to OpenDota' }),
    full_history_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "Date and time of last request to refresh player's match history" }),
    cheese: z
      .int()
      .exactOptional()
      .openapi({ description: 'Amount of dollars the player has donated to OpenDota' }),
    fh_unavailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether the refresh of player' match history failed" }),
    loccountrycode: z
      .string()
      .exactOptional()
      .openapi({ description: "Player's country identifier, e.g. US" }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Verified player name, e.g. 'Miracle-'" }),
    country_code: z.string().exactOptional().openapi({ description: "Player's country code" }),
    fantasy_role: z
      .int()
      .exactOptional()
      .openapi({ description: "Player's ingame role (core: 1 or support: 2)" }),
    team_id: z.int().exactOptional().openapi({ description: "Player's team identifier" }),
    team_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Team name', example: 'Newbee' }),
    team_tag: z
      .string()
      .exactOptional()
      .openapi({ description: "Player's team shorthand tag, e.g. 'EG'" }),
    is_locked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the roster lock is active' }),
    is_pro: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the player is professional or not' }),
    locked_until: z.int().exactOptional().openapi({ description: 'When the roster lock will end' }),
    computed_mmr: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Rating estimate based on ranked matches' }),
  })
  .openapi({ title: 'PlayerObjectResponse', required: [] })
  .openapi('PlayerObjectResponse')

const PlayerPeersResponseSchema = z
  .object({
    account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
    last_played: z.int().exactOptional().openapi({ description: 'last_played' }),
    win: z.int().exactOptional().openapi({ description: 'win' }),
    games: z.int().exactOptional().openapi({ description: 'games' }),
    with_win: z.int().exactOptional().openapi({ description: 'with_win' }),
    with_games: z.int().exactOptional().openapi({ description: 'with_games' }),
    against_win: z.int().exactOptional().openapi({ description: 'against_win' }),
    against_games: z.int().exactOptional().openapi({ description: 'against_games' }),
    with_gpm_sum: z.int().exactOptional().openapi({ description: 'with_gpm_sum' }),
    with_xpm_sum: z.int().exactOptional().openapi({ description: 'with_xpm_sum' }),
    personaname: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Player's Steam name", example: '420 booty wizard' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'name' }),
    is_contributor: z.boolean().exactOptional().openapi({ description: 'is_contributor' }),
    is_subscriber: z.boolean().exactOptional().openapi({ description: 'is_subscriber' }),
    last_login: z.string().nullable().exactOptional().openapi({ description: 'last_login' }),
    avatar: z.string().nullable().exactOptional().openapi({ description: 'avatar' }),
    avatarfull: z.string().nullable().exactOptional().openapi({ description: 'avatarfull' }),
  })
  .openapi({ title: 'PlayerPeersResponse', required: [] })
  .openapi('PlayerPeersResponse')

const PlayerProsResponseSchema = z
  .object({
    account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'name' }),
    country_code: z.string().exactOptional().openapi({ description: 'country_code' }),
    fantasy_role: z.int().exactOptional().openapi({ description: 'fantasy_role' }),
    team_id: z.int().exactOptional().openapi({ description: 'team_id' }),
    team_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Team name', example: 'Newbee' }),
    team_tag: z.string().nullable().exactOptional().openapi({ description: 'team_tag' }),
    is_locked: z.boolean().exactOptional().openapi({ description: 'is_locked' }),
    is_pro: z.boolean().exactOptional().openapi({ description: 'is_pro' }),
    locked_until: z.int().nullable().exactOptional().openapi({ description: 'locked_until' }),
    steamid: z.string().nullable().exactOptional().openapi({ description: 'steamid' }),
    avatar: z.string().nullable().exactOptional().openapi({ description: 'avatar' }),
    avatarmedium: z.string().nullable().exactOptional().openapi({ description: 'avatarmedium' }),
    avatarfull: z.string().nullable().exactOptional().openapi({ description: 'avatarfull' }),
    profileurl: z.string().nullable().exactOptional().openapi({ description: 'profileurl' }),
    last_login: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'last_login' }),
    full_history_time: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'full_history_time' }),
    cheese: z.int().nullable().exactOptional().openapi({ description: 'cheese' }),
    fh_unavailable: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'fh_unavailable' }),
    loccountrycode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'loccountrycode' }),
    last_played: z.int().nullable().exactOptional().openapi({ description: 'last_played' }),
    win: z.int().exactOptional().openapi({ description: 'win' }),
    games: z.int().exactOptional().openapi({ description: 'games' }),
    with_win: z.int().exactOptional().openapi({ description: 'with_win' }),
    with_games: z.int().exactOptional().openapi({ description: 'with_games' }),
    against_win: z.int().exactOptional().openapi({ description: 'against_win' }),
    against_games: z.int().exactOptional().openapi({ description: 'against_games' }),
    with_gpm_sum: z.int().nullable().exactOptional().openapi({ description: 'with_gpm_sum' }),
    with_xpm_sum: z.int().nullable().exactOptional().openapi({ description: 'with_xpm_sum' }),
  })
  .openapi({ title: 'PlayerProsResponse', required: [] })
  .openapi('PlayerProsResponse')

const PlayerRankingsResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    score: z.number().exactOptional().openapi({ description: 'Hero score' }),
    percent_rank: z.number().exactOptional().openapi({ description: 'percent_rank' }),
    card: z.int().exactOptional().openapi({ description: 'numeric_rank' }),
  })
  .openapi({ title: 'PlayerRankingsResponse', required: [] })
  .openapi('PlayerRankingsResponse')

const PlayerRatingsResponseSchema = z
  .object({
    account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    rank_tier: z.int().exactOptional().openapi({ description: 'Rank tier/medal of the player' }),
    time: z.int().exactOptional().openapi({ description: 'time' }),
  })
  .openapi({ title: 'PlayerRatingsResponse', required: [] })
  .openapi('PlayerRatingsResponse')

const PlayerRecentMatchesResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    player_slot: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Which slot the player is in. 0-127 are Radiant, 128-255 are Dire' }),
    radiant_win: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
    duration: z.int().exactOptional().openapi({ description: 'Duration of the game in seconds' }),
    game_mode: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to game mode played. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/game_mode.json',
      }),
    lobby_type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer corresponding to lobby type of match. List of constants can be found here: https://github.com/odota/dotaconstants/blob/master/json/lobby_type.json',
      }),
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    version: z.int().nullable().exactOptional().openapi({ description: 'version' }),
    kills: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total kills the player had at the end of the match' }),
    deaths: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total deaths the player had at the end of the match' }),
    assists: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total assists the player had at the end of the match' }),
    skill: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Skill bracket assigned by Valve (Normal, High, Very High). If the skill is unknown, will return null.',
      }),
    average_rank: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Average rank of players with public match data' }),
    xp_per_min: z
      .int()
      .exactOptional()
      .openapi({ description: 'Experience Per Minute obtained by the player' }),
    gold_per_min: z
      .int()
      .exactOptional()
      .openapi({ description: 'Average gold per minute of the player' }),
    hero_damage: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total hero damage to enemy heroes' }),
    hero_healing: z.int().exactOptional().openapi({ description: 'Total healing of ally heroes' }),
    last_hits: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total last hits the player had at the end of the match' }),
    lane: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Integer corresponding to which lane the player laned in for the match',
      }),
    lane_role: z.int().nullable().exactOptional().openapi({ description: 'lane_role' }),
    is_roaming: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean describing whether or not the player roamed' }),
    cluster: z.int().exactOptional().openapi({ description: 'cluster' }),
    leaver_status: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Integer describing whether or not the player left the game. 0: didn't leave. 1: left safely. 2+: Abandoned",
      }),
    party_size: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Size of the players party. If not in a party, will return 1.' }),
    hero_variant: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '1-indexed facet, see https://github.com/odota/dotaconstants/blob/master/build/hero_abilities.json',
      }),
  })
  .openapi({ title: 'PlayerRecentMatchesResponse', description: 'match', required: [] })
  .openapi('PlayerRecentMatchesResponse')

const PlayersResponseSchema = z
  .object({
    rank_tier: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: "The player's Dota medal/rank" }),
    leaderboard_rank: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: "The player's rank on the Dota leaderboard (if Immortal)" }),
    computed_mmr: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Rating estimate based on ranked matches' }),
    computed_mmr_turbo: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Rating estimate based on turbo matches' }),
    aliases: z
      .array(
        z
          .object({
            personaname: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name used by the player' }),
            name_since: z
              .string()
              .exactOptional()
              .openapi({ description: 'The date the name was used since' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of names the player has used on Steam' }),
    profile: z
      .object({
        account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
        personaname: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "Player's Steam name", example: '420 booty wizard' }),
        name: z.string().nullable().exactOptional().openapi({ description: 'name' }),
        plus: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Boolean indicating status of current Dota Plus subscription' }),
        cheese: z.int().nullable().exactOptional().openapi({ description: 'cheese' }),
        steamid: z.string().nullable().exactOptional().openapi({ description: 'steamid' }),
        avatar: z.string().nullable().exactOptional().openapi({ description: 'avatar' }),
        avatarmedium: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'avatarmedium' }),
        avatarfull: z.string().nullable().exactOptional().openapi({ description: 'avatarfull' }),
        profileurl: z.string().nullable().exactOptional().openapi({ description: 'profileurl' }),
        last_login: z.string().nullable().exactOptional().openapi({ description: 'last_login' }),
        loccountrycode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'loccountrycode' }),
        is_contributor: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Boolean indicating if the user contributed to the development of OpenDota',
          }),
        is_subscriber: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({ description: 'Boolean indicating if the user subscribed to OpenDota' }),
      })
      .exactOptional()
      .openapi({ description: 'profile', required: [] }),
  })
  .openapi({ title: 'PlayerResponse', required: [] })
  .openapi('PlayersResponse')

const PlayerTotalsResponseSchema = z
  .object({
    field: z.string().exactOptional().openapi({ description: 'field' }),
    n: z.int().exactOptional().openapi({ description: 'number' }),
    sum: z.number().exactOptional().openapi({ description: 'sum' }),
  })
  .openapi({ title: 'PlayerTotalsResponse', required: [] })
  .openapi('PlayerTotalsResponse')

const PlayerWardMapResponseSchema = z
  .object({
    obs: z.object({}).exactOptional().openapi({ description: 'obs' }),
    sen: z.object({}).exactOptional().openapi({ description: 'sen' }),
  })
  .openapi({ title: 'PlayerWardMapResponse', required: [] })
  .openapi('PlayerWardMapResponse')

const PlayerWinLossResponseSchema = z
  .object({
    win: z.int().exactOptional().openapi({ description: 'Number of wins' }),
    lose: z.int().exactOptional().openapi({ description: 'Number of loses' }),
  })
  .openapi({ title: 'PlayerWinLossResponse', required: [] })
  .openapi('PlayerWinLossResponse')

const PlayerWordCloudResponseSchema = z
  .object({
    my_word_counts: z.object({}).exactOptional().openapi({ description: 'my_word_counts' }),
    all_word_counts: z.object({}).exactOptional().openapi({ description: 'all_word_counts' }),
  })
  .openapi({ title: 'PlayerWordCloudResponse', required: [] })
  .openapi('PlayerWordCloudResponse')

const PublicMatchesResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    match_seq_num: z.int().exactOptional().openapi({ description: 'match_seq_num' }),
    radiant_win: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    duration: z.int().exactOptional().openapi({ description: 'Duration of the game in seconds' }),
    lobby_type: z.int().exactOptional(),
    game_mode: z.int().exactOptional(),
    avg_rank_tier: z.int().exactOptional(),
    num_rank_tier: z.int().exactOptional(),
    cluster: z.int().exactOptional(),
    radiant_team: z.array(z.int()).exactOptional().openapi({ description: 'radiant_team' }),
    dire_team: z.array(z.int()).exactOptional().openapi({ description: 'dire_team' }),
  })
  .openapi({ title: 'PublicMatchesResponse', required: [] })
  .openapi('PublicMatchesResponse')

const RankingsResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    rankings: z
      .array(
        z
          .object({
            account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
            score: z.number().exactOptional().openapi({ description: 'Score' }),
            steamid: z.string().nullable().exactOptional().openapi({ description: 'steamid' }),
            avatar: z.string().nullable().exactOptional().openapi({ description: 'avatar' }),
            avatarmedium: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'avatarmedium' }),
            avatarfull: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'avatarfull' }),
            profileurl: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'profileurl' }),
            personaname: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: "Player's Steam name", example: '420 booty wizard' }),
            last_login: z.iso
              .datetime({ offset: true })
              .nullable()
              .exactOptional()
              .openapi({ description: 'last_login' }),
            full_history_time: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'full_history_time' }),
            cheese: z.int().nullable().exactOptional().openapi({ description: 'cheese' }),
            fh_unavailable: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ description: 'fh_unavailable' }),
            loccountrycode: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'loccountrycode' }),
            rank_tier: z.int().nullable().exactOptional().openapi({ description: 'rank_tier' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'rankings' }),
  })
  .openapi({ title: 'RankingsResponse', required: [] })
  .openapi('RankingsResponse')

const RecordsResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    score: z.int().exactOptional().openapi({ description: 'Record score' }),
  })
  .openapi({ title: 'RecordsResponse', required: [] })
  .openapi('RecordsResponse')

const ScenarioItemTimingsResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    item: z.string().exactOptional().openapi({ description: 'Purchased item' }),
    time: z
      .int()
      .exactOptional()
      .openapi({ description: 'Ingame time in seconds before the item was purchased' }),
    games: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of games where the hero bought this item before this time',
      }),
    wins: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of games won where the hero bought this item before this time',
      }),
  })
  .openapi({ title: 'ScenarioItemTimingsResponse', required: [] })
  .openapi('ScenarioItemTimingsResponse')

const ScenarioLaneRolesResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    lane_role: z.int().exactOptional().openapi({ description: "The hero's lane role" }),
    time: z.int().exactOptional().openapi({ description: 'Maximum game length in seconds' }),
    games: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of games where the hero played in this lane role' }),
    wins: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of games won where the hero played in this lane role' }),
  })
  .openapi({ title: 'ScenarioLaneRolesResponse', required: [] })
  .openapi('ScenarioLaneRolesResponse')

const ScenarioMiscResponseSchema = z
  .object({
    scenario: z
      .string()
      .exactOptional()
      .openapi({ description: "The scenario's name or description" }),
    is_radiant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant executed this scenario' }),
    region: z.int().exactOptional().openapi({ description: 'Region the game was played in' }),
    games: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of games where this scenario occurred' }),
    wins: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of games won where this scenario occured' }),
  })
  .openapi({ title: 'ScenarioMiscResponse', required: [] })
  .openapi('ScenarioMiscResponse')

const SchemaResponseSchema = z
  .object({
    table_name: z.string().exactOptional().openapi({ description: 'table_name' }),
    column_name: z.string().exactOptional().openapi({ description: 'column_name' }),
    data_type: z.string().exactOptional().openapi({ description: 'data_type' }),
  })
  .openapi({ title: 'SchemaResponse', required: [] })
  .openapi('SchemaResponse')

const SearchResponseSchema = z
  .object({
    account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
    avatarfull: z.string().nullable().exactOptional().openapi({ description: 'avatarfull' }),
    personaname: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Player's Steam name", example: '420 booty wizard' }),
    last_match_time: z
      .string()
      .exactOptional()
      .openapi({ description: 'last_match_time. May not be present or null.' }),
    similarity: z.number().exactOptional().openapi({ description: 'similarity' }),
  })
  .openapi({ title: 'SearchResponse', required: [] })
  .openapi('SearchResponse')

const TeamHeroesResponseSchema = z
  .object({
    hero_id: z.int().exactOptional().openapi({ description: 'The ID value of the hero played' }),
    name: z.string().exactOptional().openapi({ description: 'Hero name', example: 'Anti-Mage' }),
    games_played: z.int().exactOptional().openapi({ description: 'Number of games played' }),
    wins: z.int().exactOptional().openapi({ description: 'Number of wins' }),
  })
  .openapi({ title: 'TeamHeroesResponse', required: [] })
  .openapi('TeamHeroesResponse')

const TeamMatchObjectResponseSchema = z
  .object({
    match_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID number of the match assigned by Valve',
        example: 3703866531,
      }),
    radiant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the team/player/hero was on Radiant' }),
    radiant_win: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Boolean indicating whether Radiant won the match' }),
    radiant_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of kills the Radiant team had when the match ended' }),
    dire_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of kills the Dire team had when the match ended' }),
    duration: z.int().exactOptional().openapi({ description: 'Duration of the game in seconds' }),
    start_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp at which the game started' }),
    leagueid: z
      .int()
      .exactOptional()
      .openapi({ description: 'Identifier for the league the match took place in' }),
    league_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of league the match took place in' }),
    cluster: z.int().exactOptional().openapi({ description: 'cluster' }),
    opposing_team_id: z.int().exactOptional().openapi({ description: 'Opposing team identifier' }),
    opposing_team_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Opposing team name, e.g. 'Evil Geniuses'" }),
    opposing_team_logo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opposing team logo url' }),
  })
  .openapi({ title: 'TeamMatchObjectResponse', required: [] })
  .openapi('TeamMatchObjectResponse')

const TeamObjectResponseSchema = z
  .object({
    team_id: z.int().exactOptional().openapi({ description: "Team's identifier" }),
    rating: z.number().exactOptional().openapi({ description: 'The Elo rating of the team' }),
    wins: z.int().exactOptional().openapi({ description: 'The number of games won by this team' }),
    losses: z.int().exactOptional().openapi({ description: 'The number of losses by this team' }),
    last_match_time: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Unix timestamp of the last match played by this team' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Team name', example: 'Newbee' }),
    tag: z.string().exactOptional().openapi({ description: 'The team tag/abbreviation' }),
  })
  .openapi({ title: 'TeamObjectResponse', required: [] })
  .openapi('TeamObjectResponse')

const TeamPlayersResponseSchema = z
  .object({
    account_id: z.int().exactOptional().openapi({ description: 'The player account ID' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'name' }),
    games_played: z.int().exactOptional().openapi({ description: 'Number of games played' }),
    wins: z.int().exactOptional().openapi({ description: 'Number of wins' }),
    is_current_team_member: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If this player is on the current roster' }),
  })
  .openapi({ title: 'TeamPlayersResponse', required: [] })
  .openapi('TeamPlayersResponse')

const HeroIdPathParamParamsSchema = z
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
      name: 'hero_id',
      in: 'path',
      description: 'Hero ID',
      required: true,
      schema: { type: 'integer' },
    },
  })

const LeagueIdPathParamParamsSchema = z
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
      name: 'league_id',
      in: 'path',
      description: 'League ID',
      required: true,
      schema: { type: 'integer' },
    },
  })

const MatchIdParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({ param: { name: 'match_id', in: 'path', required: true, schema: { type: 'integer' } } })

const LessThanMatchIdParamParamsSchema = z
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
      name: 'less_than_match_id',
      in: 'query',
      description: 'Get matches with a match ID lower than this value',
      required: false,
      schema: { type: 'integer' },
    },
  })

const MinRankParamParamsSchema = z
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
      name: 'min_rank',
      in: 'query',
      description:
        'Minimum rank for the matches. Ranks are represented by integers (10-15: Herald, 20-25: Guardian, 30-35: Crusader, 40-45: Archon, 50-55: Legend, 60-65: Ancient, 70-75: Divine, 80: Immortal). Each increment represents an additional star.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const MaxRankParamParamsSchema = z
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
      name: 'max_rank',
      in: 'query',
      description:
        'Maximum rank for the matches. Ranks are represented by integers (10-15: Herald, 20-25: Guardian, 30-35: Crusader, 40-45: Archon, 50-55: Legend, 60-65: Ancient, 70-75: Divine, 80: Immortal). Each increment represents an additional star.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const AccountIdParamParamsSchema = z
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
      name: 'account_id',
      in: 'path',
      description: 'Steam32 account ID',
      required: true,
      schema: { type: 'integer' },
    },
  })

const FieldParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'field',
      in: 'path',
      description: 'Field to aggregate on',
      required: true,
      schema: { type: 'string' },
    },
  })

const ProjectParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'project',
      in: 'query',
      description: 'Fields to project (array)',
      required: false,
      schema: { type: 'string' },
    },
  })

const LimitParamParamsSchema = z
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
      name: 'limit',
      in: 'query',
      description: 'Number of matches to limit to',
      required: false,
      schema: { type: 'integer' },
    },
  })

const OffsetParamParamsSchema = z
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
      name: 'offset',
      in: 'query',
      description: 'Number of matches to offset start by',
      required: false,
      schema: { type: 'integer' },
    },
  })

const WinParamParamsSchema = z
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
      name: 'win',
      in: 'query',
      description: 'Whether the player won',
      required: false,
      schema: { type: 'integer' },
    },
  })

const PatchParamParamsSchema = z
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
      name: 'patch',
      in: 'query',
      description: 'Patch ID, from dotaconstants',
      required: false,
      schema: { type: 'integer' },
    },
  })

const GameModeParamParamsSchema = z
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
      name: 'game_mode',
      in: 'query',
      description: 'Game Mode ID',
      required: false,
      schema: { type: 'integer' },
    },
  })

const LobbyTypeParamParamsSchema = z
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
      name: 'lobby_type',
      in: 'query',
      description: 'Lobby type ID',
      required: false,
      schema: { type: 'integer' },
    },
  })

const RegionParamParamsSchema = z
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
      name: 'region',
      in: 'query',
      description: 'Region ID',
      required: false,
      schema: { type: 'integer' },
    },
  })

const DateParamParamsSchema = z
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
      name: 'date',
      in: 'query',
      description: 'Days previous',
      required: false,
      schema: { type: 'integer' },
    },
  })

const LaneRoleParamParamsSchema = z
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
      name: 'lane_role',
      in: 'query',
      description: 'Lane Role ID',
      required: false,
      schema: { type: 'integer' },
    },
  })

const HeroIdParamParamsSchema = z
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
      name: 'hero_id',
      in: 'query',
      description: 'Hero ID',
      required: false,
      schema: { type: 'integer' },
    },
  })

const IsRadiantParamParamsSchema = z
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
      name: 'is_radiant',
      in: 'query',
      description: 'Whether the player was radiant',
      required: false,
      schema: { type: 'integer' },
    },
  })

const IncludedAccountIdParamParamsSchema = z
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
      name: 'included_account_id',
      in: 'query',
      description: 'Account IDs in the match (array)',
      required: false,
      schema: { type: 'integer' },
    },
  })

const ExcludedAccountIdParamParamsSchema = z
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
      name: 'excluded_account_id',
      in: 'query',
      description: 'Account IDs not in the match (array)',
      required: false,
      schema: { type: 'integer' },
    },
  })

const WithHeroIdParamParamsSchema = z
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
      name: 'with_hero_id',
      in: 'query',
      description: "Hero IDs on the player's team (array)",
      required: false,
      schema: { type: 'integer' },
    },
  })

const AgainstHeroIdParamParamsSchema = z
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
      name: 'against_hero_id',
      in: 'query',
      description: "Hero IDs against the player's team (array)",
      required: false,
      schema: { type: 'integer' },
    },
  })

const SignificantParamParamsSchema = z
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
      name: 'significant',
      in: 'query',
      description:
        'Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.',
      required: false,
      schema: { type: 'integer' },
    },
  })

const HavingParamParamsSchema = z
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
      name: 'having',
      in: 'query',
      description: 'The minimum number of games played, for filtering hero stats',
      required: false,
      schema: { type: 'integer' },
    },
  })

const SortParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description: 'The field to return matches sorted by in descending order',
      required: false,
      schema: { type: 'string' },
    },
  })

const ScenarioParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'scenario',
      in: 'query',
      description: 'Name of the scenario (see teamScenariosQueryParams)',
      required: false,
      schema: { type: 'string' },
    },
  })

const TeamIdPathParamParamsSchema = z
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
      name: 'team_id',
      in: 'path',
      description: 'Team ID',
      required: true,
      schema: { type: 'integer' },
    },
  })

const ApiKeySecurityScheme = {
  type: 'apiKey',
  name: 'api_key',
  description:
    'Use an API key to remove monthly call limits and to receive higher rate limits. [Learn more and get your API key](https://www.opendota.com/api-keys).\n        Usage example: https://api.opendota.com/api/matches/271145478?api_key=YOUR-API-KEY\n        \n        API key can also be sent using the authorization header "Authorization: Bearer YOUR-API-KEY"\n        ',
  in: 'query',
}

export const getMatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/matches/{match_id}',
  tags: ['matches'],
  summary: 'GET /matches/{match_id}',
  description: 'Match data',
  operationId: 'get_matches_by_match_id',
  request: { params: z.object({ match_id: MatchIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: MatchResponseSchema } },
    },
  },
})

export const getPlayersAccountIdRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}',
  tags: ['players'],
  summary: 'GET /players/{account_id}',
  description: 'Player data',
  operationId: 'get_players_by_account_id',
  request: { params: z.object({ account_id: AccountIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: PlayersResponseSchema } },
    },
  },
})

export const getPlayersAccountIdWlRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/wl',
  tags: ['players'],
  summary: 'GET /players/{account_id}/wl',
  description: 'Win/Loss count',
  operationId: 'get_players_by_account_id_select_wl',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: PlayerWinLossResponseSchema } },
    },
  },
})

export const getPlayersAccountIdRecentMatchesRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/recentMatches',
  tags: ['players'],
  summary: 'GET /players/{account_id}/recentMatches',
  description: 'Recent matches played (limited number of results)',
  operationId: 'get_players_by_account_id_select_recent_matches',
  request: { params: z.object({ account_id: AccountIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(z.object({})) } },
    },
  },
})

export const getPlayersAccountIdMatchesRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/matches',
  tags: ['players'],
  summary: 'GET /players/{account_id}/matches',
  description: 'Matches played (full history, and supports column selection)',
  operationId: 'get_players_by_account_id_select_matches',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
      project: ProjectParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerMatchesResponseSchema) },
      },
    },
  },
})

export const getPlayersAccountIdHeroesRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/heroes',
  tags: ['players'],
  summary: 'GET /players/{account_id}/heroes',
  description: 'Heroes played',
  operationId: 'get_players_by_account_id_select_heroes',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerHeroesResponseSchema) },
      },
    },
  },
})

export const getPlayersAccountIdPeersRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/peers',
  tags: ['players'],
  summary: 'GET /players/{account_id}/peers',
  description: 'Players played with',
  operationId: 'get_players_by_account_id_select_peers',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerPeersResponseSchema) },
      },
    },
  },
})

export const getPlayersAccountIdProsRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/pros',
  tags: ['players'],
  summary: 'GET /players/{account_id}/pros',
  description: 'Pro players played with',
  operationId: 'get_players_by_account_id_select_pros',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(PlayerProsResponseSchema) } },
    },
  },
})

export const getPlayersAccountIdTotalsRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/totals',
  tags: ['players'],
  summary: 'GET /players/{account_id}/totals',
  description: 'Totals in stats',
  operationId: 'get_players_by_account_id_select_totals',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerTotalsResponseSchema) },
      },
    },
  },
})

export const getPlayersAccountIdCountsRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/counts',
  tags: ['players'],
  summary: 'GET /players/{account_id}/counts',
  description: 'Counts in categories',
  operationId: 'get_players_by_account_id_select_counts',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: PlayerCountsResponseSchema } },
    },
  },
})

export const getPlayersAccountIdHistogramsFieldRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/histograms/{field}',
  tags: ['players'],
  summary: 'GET /players/{account_id}/histograms',
  description: 'Distribution of matches in a single stat',
  operationId: 'get_players_by_account_id_histograms_by_field',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema, field: FieldParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.object({}).openapi({ title: 'PlayerHistogramsResponse' })),
        },
      },
    },
  },
})

export const getPlayersAccountIdWardmapRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/wardmap',
  tags: ['players'],
  summary: 'GET /players/{account_id}/wardmap',
  description: 'Wards placed in matches played',
  operationId: 'get_players_by_account_id_select_wardmap',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: PlayerWardMapResponseSchema } },
    },
  },
})

export const getPlayersAccountIdWordcloudRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/wordcloud',
  tags: ['players'],
  summary: 'GET /players/{account_id}/wordcloud',
  description: 'Words said/read in matches played',
  operationId: 'get_players_by_account_id_select_wordcloud',
  request: {
    params: z.object({ account_id: AccountIdParamParamsSchema }),
    query: z.object({
      limit: LimitParamParamsSchema,
      offset: OffsetParamParamsSchema,
      win: WinParamParamsSchema,
      patch: PatchParamParamsSchema,
      game_mode: GameModeParamParamsSchema,
      lobby_type: LobbyTypeParamParamsSchema,
      region: RegionParamParamsSchema,
      date: DateParamParamsSchema,
      lane_role: LaneRoleParamParamsSchema,
      hero_id: HeroIdParamParamsSchema,
      is_radiant: IsRadiantParamParamsSchema,
      included_account_id: IncludedAccountIdParamParamsSchema,
      excluded_account_id: ExcludedAccountIdParamParamsSchema,
      with_hero_id: WithHeroIdParamParamsSchema,
      against_hero_id: AgainstHeroIdParamParamsSchema,
      significant: SignificantParamParamsSchema,
      having: HavingParamParamsSchema,
      sort: SortParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: PlayerWordCloudResponseSchema } },
    },
  },
})

export const getPlayersAccountIdRatingsRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/ratings',
  tags: ['players'],
  summary: 'GET /players/{account_id}/ratings',
  description: 'Returns a history of the player rank tier/medal changes (replaces MMR)',
  operationId: 'get_players_by_account_id_select_ratings',
  request: { params: z.object({ account_id: AccountIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerRatingsResponseSchema) },
      },
    },
  },
})

export const getPlayersAccountIdRankingsRoute = createRoute({
  method: 'get',
  path: '/players/{account_id}/rankings',
  tags: ['players'],
  summary: 'GET /players/{account_id}/rankings',
  description: 'Player hero rankings',
  operationId: 'get_players_by_account_id_select_rankings',
  request: { params: z.object({ account_id: AccountIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerRankingsResponseSchema) },
      },
    },
  },
})

export const postPlayersAccountIdRefreshRoute = createRoute({
  method: 'post',
  path: '/players/{account_id}/refresh',
  tags: ['players'],
  summary: 'POST /players/{account_id}/refresh',
  description: 'Refresh player match history (up to 500), medal (rank), and profile name',
  operationId: 'post_refresh',
  request: { params: z.object({ account_id: AccountIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.any() } },
    },
  },
})

export const getTopPlayersRoute = createRoute({
  method: 'get',
  path: '/topPlayers',
  tags: ['top players'],
  summary: 'GET /topPlayers',
  description: 'Get list of highly ranked players',
  operationId: 'get_top_players',
  request: {
    query: z.object({
      turbo: z
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
            name: 'turbo',
            in: 'query',
            description: 'Get ratings based on turbo matches',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerObjectResponseSchema) },
      },
    },
  },
})

export const getProPlayersRoute = createRoute({
  method: 'get',
  path: '/proPlayers',
  tags: ['pro players'],
  summary: 'GET /proPlayers',
  description: 'Get list of pro players',
  operationId: 'get_pro_players',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PlayerObjectResponseSchema) },
      },
    },
  },
})

export const getProMatchesRoute = createRoute({
  method: 'get',
  path: '/proMatches',
  tags: ['pro matches'],
  summary: 'GET /proMatches',
  description: 'Get list of pro matches',
  operationId: 'get_pro_matches',
  request: { query: z.object({ less_than_match_id: LessThanMatchIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(MatchObjectResponseSchema) },
      },
    },
  },
})

export const getPublicMatchesRoute = createRoute({
  method: 'get',
  path: '/publicMatches',
  tags: ['public matches'],
  summary: 'GET /publicMatches',
  description: 'Get list of randomly sampled public matches',
  operationId: 'get_public_matches',
  request: {
    query: z.object({
      less_than_match_id: LessThanMatchIdParamParamsSchema,
      min_rank: MinRankParamParamsSchema,
      max_rank: MaxRankParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(PublicMatchesResponseSchema) },
      },
    },
  },
})

export const getParsedMatchesRoute = createRoute({
  method: 'get',
  path: '/parsedMatches',
  tags: ['parsed matches'],
  summary: 'GET /parsedMatches',
  description: 'Get list of parsed match IDs',
  operationId: 'get_parsed_matches',
  request: { query: z.object({ less_than_match_id: LessThanMatchIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(ParsedMatchesResponseSchema) },
      },
    },
  },
})

export const getExplorerRoute = createRoute({
  method: 'get',
  path: '/explorer',
  tags: ['explorer'],
  summary: 'GET /explorer',
  description: 'Submit arbitrary SQL queries to the database',
  operationId: 'get_explorer',
  request: {
    query: z.object({
      sql: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sql',
            in: 'query',
            description: 'The PostgreSQL query as percent-encoded string.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.object({}).openapi({ title: 'ExplorerResponse' }),
        },
      },
    },
  },
})

export const getMetadataRoute = createRoute({
  method: 'get',
  path: '/metadata',
  tags: ['metadata'],
  summary: 'GET /metadata',
  description: 'Site metadata',
  operationId: 'get_metadata',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: MetadataResponseSchema } },
    },
  },
})

export const getDistributionsRoute = createRoute({
  method: 'get',
  path: '/distributions',
  tags: ['distributions'],
  summary: 'GET /distributions',
  description: 'Distributions of MMR data by bracket and country',
  operationId: 'get_distributions',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: DistributionsResponseSchema } },
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['search'],
  summary: 'GET /search',
  description: 'Search players by personaname.',
  operationId: 'get_search',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description: 'Search string',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(SearchResponseSchema) } },
    },
  },
})

export const getRankingsRoute = createRoute({
  method: 'get',
  path: '/rankings',
  tags: ['rankings'],
  summary: 'GET /rankings',
  description: 'Top players by hero',
  operationId: 'get_rankings',
  request: {
    query: z.object({
      hero_id: z
        .string()
        .openapi({
          param: {
            name: 'hero_id',
            in: 'query',
            description: 'Hero ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: RankingsResponseSchema } },
    },
  },
})

export const getBenchmarksRoute = createRoute({
  method: 'get',
  path: '/benchmarks',
  tags: ['benchmarks'],
  summary: 'GET /benchmarks',
  description: 'Benchmarks of average stat values for a hero',
  operationId: 'get_benchmarks',
  request: {
    query: z.object({
      hero_id: z
        .string()
        .openapi({
          param: {
            name: 'hero_id',
            in: 'query',
            description: 'Hero ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bracket: z
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
            name: 'bracket',
            in: 'query',
            description:
              'Rank bracket from 1 (Herald) to 8 (Immortal) to benchmark against. Omit for matches of all ranks',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      role: z
        .enum(['core', 'support'])
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description:
              'Benchmark against cores or supports only, estimated from farm within each team. Can be combined with bracket. Omit for all roles',
            required: false,
            schema: { type: 'string', enum: ['core', 'support'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: BenchmarksResponseSchema } },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  summary: 'GET /health',
  description: 'Get service health data',
  operationId: 'get_health',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.object({}).openapi({ title: 'HealthResponse' }),
        },
      },
    },
  },
})

export const getRequestJobIdRoute = createRoute({
  method: 'get',
  path: '/request/{jobId}',
  tags: ['request'],
  summary: 'GET /request/{jobId}',
  description: 'Get parse request state',
  operationId: 'get_request_by_job_id',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'The job ID to query.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.object({}).openapi({ title: 'RequestJobResponse' }),
        },
      },
    },
  },
})

export const postRequestMatchIdRoute = createRoute({
  method: 'post',
  path: '/request/{match_id}',
  tags: ['request'],
  summary: 'POST /request/{match_id}',
  description:
    'Submit a new parse request. This call counts as 10 calls for rate limit (but not billing) purposes.',
  operationId: 'post_request_by_job_id',
  request: { params: z.object({ match_id: MatchIdParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.object({}).openapi({ title: 'RequestMatchResponse' }),
        },
      },
    },
  },
})

export const getFindMatchesRoute = createRoute({
  method: 'get',
  path: '/findMatches',
  tags: ['findMatches'],
  summary: 'GET /',
  description: 'Finds recent matches by heroes played',
  operationId: 'get_find_matches',
  request: {
    query: z.object({
      teamA: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teamA',
            in: 'query',
            description: 'Hero IDs on first team (array)',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'integer' } },
          },
        }),
      teamB: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'teamB',
            in: 'query',
            description: 'Hero IDs on second team (array)',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'integer' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.object({})).openapi({ title: 'FindMatchesResponse' }),
        },
      },
    },
  },
})

export const getHeroesRoute = createRoute({
  method: 'get',
  path: '/heroes',
  tags: ['heroes'],
  summary: 'GET /heroes',
  description: 'Get hero data',
  operationId: 'get_heroes',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(HeroObjectResponseSchema) } },
    },
  },
})

export const getHeroStatsRoute = createRoute({
  method: 'get',
  path: '/heroStats',
  tags: ['hero stats'],
  summary: 'GET /heroStats',
  description: 'Get stats about hero performance in recent matches',
  operationId: 'get_hero_stats',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(HeroStatsResponseSchema) } },
    },
  },
})

export const getHeroesHeroIdMatchesRoute = createRoute({
  method: 'get',
  path: '/heroes/{hero_id}/matches',
  tags: ['heroes'],
  summary: 'GET /heroes/{hero_id}/matches',
  description: 'Get recent matches with a hero',
  operationId: 'get_heroes_by_hero_id_select_matches',
  request: { params: z.object({ hero_id: HeroIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(MatchObjectResponseSchema) },
      },
    },
  },
})

export const getHeroesHeroIdMatchupsRoute = createRoute({
  method: 'get',
  path: '/heroes/{hero_id}/matchups',
  tags: ['heroes'],
  summary: 'GET /heroes/{hero_id}/matchups',
  description: 'Get results against other heroes for a hero',
  operationId: 'get_heroes_by_hero_id_select_matchups',
  request: { params: z.object({ hero_id: HeroIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(HeroMatchupsResponseSchema) },
      },
    },
  },
})

export const getHeroesHeroIdDurationsRoute = createRoute({
  method: 'get',
  path: '/heroes/{hero_id}/durations',
  tags: ['heroes'],
  summary: 'GET /heroes/{hero_id}/durations',
  description: 'Get hero performance over a range of match durations',
  operationId: 'get_heroes_by_hero_id_select_durations',
  request: { params: z.object({ hero_id: HeroIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(HeroDurationsResponseSchema) },
      },
    },
  },
})

export const getHeroesHeroIdPlayersRoute = createRoute({
  method: 'get',
  path: '/heroes/{hero_id}/players',
  tags: ['heroes'],
  summary: 'GET /heroes/{hero_id}/players',
  description: 'Get players who have played this hero',
  operationId: 'get_heroes_by_hero_id_select_players',
  request: { params: z.object({ hero_id: HeroIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(z.array(PlayerObjectResponseSchema)) },
      },
    },
  },
})

export const getHeroesHeroIdItemPopularityRoute = createRoute({
  method: 'get',
  path: '/heroes/{hero_id}/itemPopularity',
  tags: ['heroes'],
  summary: 'GET /heroes/{hero_id}/itemPopularity',
  description:
    'Get item popularity of hero categoried by start, early, mid and late game, analyzed from professional games',
  operationId: 'get_heroes_by_hero_id_select_item_popularity',
  request: { params: z.object({ hero_id: HeroIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: HeroItemPopularityResponseSchema } },
    },
  },
})

export const getLeaguesRoute = createRoute({
  method: 'get',
  path: '/leagues',
  tags: ['leagues'],
  summary: 'GET /leagues',
  description: 'Get league data',
  operationId: 'get_leagues',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(LeagueObjectResponseSchema) },
      },
    },
  },
})

export const getLeaguesLeagueIdRoute = createRoute({
  method: 'get',
  path: '/leagues/{league_id}',
  tags: ['leagues'],
  summary: 'GET /leagues/{league_id}',
  description: 'Get data for a league',
  operationId: 'get_leagues_by_league_id',
  request: { params: z.object({ league_id: LeagueIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(LeagueObjectResponseSchema) },
      },
    },
  },
})

export const getLeaguesLeagueIdMatchesRoute = createRoute({
  method: 'get',
  path: '/leagues/{league_id}/matches',
  tags: ['leagues'],
  summary: 'GET /leagues/{league_id}/matches',
  description: 'Get matches for a league (excluding amateur leagues)',
  operationId: 'get_leagues_by_league_id_select_matches',
  request: { params: z.object({ league_id: LeagueIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: MatchObjectResponseSchema } },
    },
  },
})

export const getLeaguesLeagueIdMatchIdsRoute = createRoute({
  method: 'get',
  path: '/leagues/{league_id}/matchIds',
  tags: ['leagues'],
  summary: 'GET /leagues/{league_id}/matchIds',
  description: 'Get match IDs for a league (including amateur leagues)',
  operationId: 'get_leagues_by_league_id_select_match_ids',
  request: { params: z.object({ league_id: LeagueIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(z.string()) } },
    },
  },
})

export const getLeaguesLeagueIdTeamsRoute = createRoute({
  method: 'get',
  path: '/leagues/{league_id}/teams',
  tags: ['leagues'],
  summary: 'GET /leagues/{league_id}/teams',
  description: 'Get teams for a league',
  operationId: 'get_leagues_by_league_id_select_teams',
  request: { params: z.object({ league_id: LeagueIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: TeamObjectResponseSchema } },
    },
  },
})

export const getTeamsRoute = createRoute({
  method: 'get',
  path: '/teams',
  tags: ['teams'],
  summary: 'GET /teams',
  description: 'Get team data',
  operationId: 'get_teams',
  request: {
    query: z.object({
      page: z
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
            name: 'page',
            in: 'query',
            description: 'Page number, zero indexed. Each page returns up to 1000 entries.',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(TeamObjectResponseSchema) } },
    },
  },
})

export const getTeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}',
  tags: ['teams'],
  summary: 'GET /teams/{team_id}',
  description: 'Get data for a team',
  operationId: 'get_teams_by_team_id',
  request: { params: z.object({ team_id: TeamIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: TeamObjectResponseSchema } },
    },
  },
})

export const getTeamsTeamIdMatchesRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}/matches',
  tags: ['teams'],
  summary: 'GET /teams/{team_id}/matches',
  description: 'Get matches for a team',
  operationId: 'get_teams_by_team_id_select_matches',
  request: { params: z.object({ team_id: TeamIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: TeamMatchObjectResponseSchema } },
    },
  },
})

export const getTeamsTeamIdPlayersRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}/players',
  tags: ['teams'],
  summary: 'GET /teams/{team_id}/players',
  description: 'Get players who have played for a team',
  operationId: 'get_teams_by_team_id_select_players',
  request: { params: z.object({ team_id: TeamIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: TeamPlayersResponseSchema } },
    },
  },
})

export const getTeamsTeamIdHeroesRoute = createRoute({
  method: 'get',
  path: '/teams/{team_id}/heroes',
  tags: ['teams'],
  summary: 'GET /teams/{team_id}/heroes',
  description: 'Get heroes for a team',
  operationId: 'get_teams_by_team_id_select_heroes',
  request: { params: z.object({ team_id: TeamIdPathParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: TeamHeroesResponseSchema } },
    },
  },
})

export const getRecordsFieldRoute = createRoute({
  method: 'get',
  path: '/records/{field}',
  tags: ['records'],
  summary: 'GET /records/{field}',
  description: 'Get top performances in a stat',
  operationId: 'get_records_by_field',
  request: {
    params: z.object({
      field: z
        .string()
        .openapi({
          param: {
            name: 'field',
            in: 'path',
            description: 'Field name to query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(RecordsResponseSchema) } },
    },
  },
})

export const getLiveRoute = createRoute({
  method: 'get',
  path: '/live',
  tags: ['live'],
  summary: 'GET /live',
  description: 'Get top currently ongoing live games',
  operationId: 'get_live',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(z.object({}).openapi({ title: 'LiveResponse' })),
        },
      },
    },
  },
})

export const getScenariosItemTimingsRoute = createRoute({
  method: 'get',
  path: '/scenarios/itemTimings',
  tags: ['scenarios'],
  summary: 'GET /scenarios/itemTimings',
  description:
    'Win rates for certain item timings on a hero for items that cost at least 1400 gold',
  operationId: 'get_scenarios_item_timings',
  request: {
    query: z.object({
      item: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'item',
            in: 'query',
            description: 'Filter by item name e.g. "spirit_vessel"',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hero_id: HeroIdParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(ScenarioItemTimingsResponseSchema) },
      },
    },
  },
})

export const getScenariosLaneRolesRoute = createRoute({
  method: 'get',
  path: '/scenarios/laneRoles',
  tags: ['scenarios'],
  summary: 'GET /scenarios/laneRoles',
  description: 'Win rates for heroes in certain lane roles',
  operationId: 'get_scenarios_lane_roles',
  request: {
    query: z.object({
      lane_role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'lane_role',
            in: 'query',
            description: 'Filter by lane role 1-4 (Safe, Mid, Off, Jungle)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hero_id: HeroIdParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(ScenarioLaneRolesResponseSchema) },
      },
    },
  },
})

export const getScenariosMiscRoute = createRoute({
  method: 'get',
  path: '/scenarios/misc',
  tags: ['scenarios'],
  summary: 'GET /scenarios/misc',
  description: 'Miscellaneous team scenarios',
  operationId: 'get_scenarios_misc',
  request: { query: z.object({ scenario: ScenarioParamParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': { schema: z.array(ScenarioMiscResponseSchema) },
      },
    },
  },
})

export const getSchemaRoute = createRoute({
  method: 'get',
  path: '/schema',
  tags: ['schema'],
  summary: 'GET /schema',
  description: 'Get database schema',
  operationId: 'get_schema',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json; charset=utf-8': { schema: z.array(SchemaResponseSchema) } },
    },
  },
})

export const getConstantsResourceRoute = createRoute({
  method: 'get',
  path: '/constants/{resource}',
  tags: ['constants'],
  summary: 'GET /constants',
  description: 'Get static game data mirrored from the dotaconstants repository.',
  operationId: 'get_constants_by_resource',
  request: {
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            name: 'resource',
            in: 'path',
            description:
              'Resource name e.g. `heroes`. [List of resources](https://github.com/odota/dotaconstants/tree/master/build)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .xor([
              z.record(z.string(), z.any().openapi({ title: 'ConstantResourceResponse' })),
              z.array(
                z.xor([
                  z.record(z.string(), z.any().openapi({ title: 'ConstantResourceResponse' })),
                  z.int(),
                ]),
              ),
            ])
            .nullable(),
        },
      },
    },
  },
})
