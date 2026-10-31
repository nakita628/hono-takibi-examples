import { createRoute, z } from '@hono/zod-openapi'

const APIStatusAppVersionSchema = z
  .object({
    latest_app_version: z
      .int()
      .openapi({ description: 'Internal use - Latest application version available.' }),
    min_app_version: z
      .int()
      .openapi({
        description:
          'Internal use - Minimum application version required to correctly connect and process data.',
      }),
  })
  .openapi({ required: ['latest_app_version', 'min_app_version'] })
  .openapi('APIStatusAppVersion')

const APIStatusSchema = z
  .object({
    android: APIStatusAppVersionSchema,
    current_season: z.int().openapi({ description: 'Year of the current FRC season.' }),
    down_events: z
      .array(z.string())
      .openapi({
        description:
          'An array of strings containing event keys of any active events that are no longer updating.',
      }),
    ios: APIStatusAppVersionSchema,
    is_datafeed_down: z
      .boolean()
      .openapi({ description: 'True if the entire FMS API provided by FIRST is down.' }),
    max_season: z.int().openapi({ description: 'Maximum FRC season year for valid queries.' }),
  })
  .openapi({
    required: ['android', 'current_season', 'down_events', 'ios', 'is_datafeed_down', 'max_season'],
  })
  .openapi('APIStatus')

const AwardRecipientSchema = z
  .object({
    awardee: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the individual given the award. May be null.' }),
    team_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The TBA team key for the team that was given the award. May be null.',
      }),
  })
  .openapi({
    description:
      'An `Award_Recipient` object represents the team and/or person who received an award at an event.',
    required: [],
  })
  .openapi('AwardRecipient')

const AwardSchema = z
  .object({
    award_type: z
      .int()
      .openapi({
        description:
          'Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6',
      }),
    event_key: z
      .string()
      .openapi({ description: 'The event_key of the event the award was won at.' }),
    name: z
      .string()
      .openapi({
        description:
          'The name of the award as provided by FIRST. May vary for the same award type.',
      }),
    recipient_list: z
      .array(AwardRecipientSchema)
      .openapi({
        description:
          "A list of recipients of the award at the event. May have either a team_key or an awardee, both, or neither (in the case the award wasn't awarded at the event).",
      }),
    year: z.int().openapi({ description: 'The year this award was won.' }),
  })
  .openapi({ required: ['award_type', 'event_key', 'name', 'recipient_list', 'year'] })
  .openapi('Award')

const DistrictListSchema = z
  .object({
    abbreviation: z.string().openapi({ description: 'The short identifier for the district.' }),
    display_name: z.string().openapi({ description: 'The long name for the district.' }),
    key: z.string().openapi({ description: 'Key for this district, e.g. `2016ne`.' }),
    year: z.int().openapi({ description: 'Year this district participated.' }),
  })
  .openapi({ required: ['abbreviation', 'display_name', 'key', 'year'] })
  .openapi('DistrictList')

const DistrictRankingSchema = z
  .object({
    event_points: z
      .array(
        z
          .object({
            alliance_points: z
              .int()
              .openapi({ description: 'Points awarded for alliance selection.' }),
            award_points: z.int().openapi({ description: 'Points awarded for event awards.' }),
            district_cmp: z
              .boolean()
              .openapi({ description: '`true` if this event is a District Championship event.' }),
            elim_points: z
              .int()
              .openapi({ description: 'Points awarded for elimination match performance.' }),
            event_key: z.string().openapi({ description: 'TBA Event key for this event.' }),
            qual_points: z
              .int()
              .openapi({ description: 'Points awarded for qualification match performance.' }),
            total: z.int().openapi({ description: 'Total points awarded at this event.' }),
          })
          .openapi({
            required: [
              'alliance_points',
              'award_points',
              'district_cmp',
              'elim_points',
              'event_key',
              'qual_points',
              'total',
            ],
          }),
      )
      .exactOptional()
      .openapi({ description: 'List of events that contributed to the point total for the team.' }),
    point_total: z.int().openapi({ description: 'Total district points for the team.' }),
    rank: z.int().openapi({ description: 'Numerical rank of the team, 1 being top rank.' }),
    rookie_bonus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Any points added to a team as a result of the rookie bonus.' }),
    team_key: z.string().openapi({ description: 'TBA team key for the team.' }),
  })
  .openapi({
    description: 'Rank of a team in a district.',
    required: ['point_total', 'rank', 'team_key'],
  })
  .openapi('DistrictRanking')

const WLTRecordSchema = z
  .object({
    losses: z.int().openapi({ description: 'Number of losses.' }),
    ties: z.int().openapi({ description: 'Number of ties.' }),
    wins: z.int().openapi({ description: 'Number of wins.' }),
  })
  .openapi({
    description: 'A Win-Loss-Tie record for a team, or an alliance.',
    required: ['losses', 'ties', 'wins'],
  })
  .openapi('WLTRecord')

const EliminationAllianceSchema = z
  .object({
    backup: z
      .object({
        in: z
          .string()
          .exactOptional()
          .openapi({ description: 'Team key that was called in as the backup.' }),
        out: z
          .string()
          .exactOptional()
          .openapi({ description: 'Team key that was replaced by the backup team.' }),
      })
      .exactOptional()
      .openapi({ description: 'Backup team called in, may be null.', required: [] }),
    declines: z
      .array(z.string().openapi({ description: 'Team key that declined the alliance.' }))
      .exactOptional()
      .openapi({ description: 'List of teams that declined the alliance.' }),
    name: z.string().exactOptional().openapi({ description: 'Alliance name, may be null.' }),
    picks: z
      .array(z.string().openapi({ description: 'Team key picked for the alliance.' }))
      .openapi({
        description: 'List of team keys picked for the alliance. First pick is captain.',
      }),
    status: z
      .object({
        current_level_record: WLTRecordSchema.exactOptional(),
        level: z.string().exactOptional(),
        playoff_average: z.float64().exactOptional(),
        record: WLTRecordSchema.exactOptional(),
        status: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['picks'] })
  .openapi('EliminationAlliance')

const WebcastSchema = z
  .object({
    channel: z
      .string()
      .openapi({
        description:
          'Type specific channel information. May be the YouTube stream, or Twitch channel name. In the case of iframe types, contains HTML to embed the stream in an HTML iframe.',
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date for the webcast in `yyyy-mm-dd` format. May be null.' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        description: 'File identification as may be required for some types. May be null.',
      }),
    type: z
      .enum([
        'youtube',
        'twitch',
        'ustream',
        'iframe',
        'html5',
        'rtmp',
        'livestream',
        'direct_link',
        'mms',
        'justin',
        'stemtv',
        'dacast',
      ])
      .openapi({
        description: 'Type of webcast, typically descriptive of the streaming provider.',
      }),
  })
  .openapi({ required: ['channel', 'type'] })
  .openapi('Webcast')

const EventSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: "Address of the event's venue, if available." }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'City, town, village, etc. the event is located in.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country the event is located in.' }),
    district: DistrictListSchema.exactOptional(),
    division_keys: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An array of event keys for the divisions at this event.' }),
    end_date: z.iso.date().openapi({ description: 'Event end date in `yyyy-mm-dd` format.' }),
    event_code: z.string().openapi({ description: 'Event short code, as provided by FIRST.' }),
    event_type: z
      .int()
      .openapi({
        description:
          'Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2',
      }),
    event_type_string: z
      .string()
      .openapi({ description: 'Event Type, eg Regional, District, or Offseason.' }),
    first_event_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public facing event code used by FIRST (on frc-events.firstinspires.org, for example)',
      }),
    first_event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The FIRST internal Event ID, used to link to the event on the FRC webpage.',
      }),
    gmaps_place_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Google Maps Place ID for the event address.' }),
    gmaps_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'Link to address location on Google Maps.' }),
    key: z
      .string()
      .openapi({
        description:
          'TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.',
      }),
    lat: z.float64().exactOptional().openapi({ description: 'Latitude for the event address.' }),
    lng: z.float64().exactOptional().openapi({ description: 'Longitude for the event address.' }),
    location_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the location at the address for the event, eg. Blue Alliance High School.',
      }),
    name: z
      .string()
      .openapi({
        description:
          'Official name of event on record either provided by FIRST or organizers of offseason event.',
      }),
    parent_event_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The TBA Event key that represents the event's parent. Used to link back to the event from a division event. It is also the inverse relation of `divison_keys`.",
      }),
    playoff_type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Playoff Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/playoff_type.py#L4, or null.',
      }),
    playoff_type_string: z
      .string()
      .exactOptional()
      .openapi({ description: 'String representation of the `playoff_type`, or null.' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code from the event address.' }),
    short_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Same as `name` but doesn't include event specifiers, such as 'Regional' or 'District'. May be null.",
      }),
    start_date: z.iso.date().openapi({ description: 'Event start date in `yyyy-mm-dd` format.' }),
    state_prov: z
      .string()
      .exactOptional()
      .openapi({ description: 'State or Province the event is located in.' }),
    timezone: z.string().exactOptional().openapi({ description: 'Timezone name.' }),
    webcasts: z.array(WebcastSchema).exactOptional(),
    website: z.string().exactOptional().openapi({ description: "The event's website, if any." }),
    week: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Week of the event relative to the first official season event, zero-indexed. Only valid for Regionals, Districts, and District Championships. Null otherwise. (Eg. A season with a week 0 'preseason' event does not count, and week 1 events will show 0 here. Seasons with a week 0.5 regional event will show week 0 for those event(s) and week 1 for week 1 events and so on.)",
      }),
    year: z.int().openapi({ description: 'Year the event data is for.' }),
  })
  .openapi({
    required: [
      'end_date',
      'event_code',
      'event_type',
      'event_type_string',
      'key',
      'name',
      'start_date',
      'year',
    ],
  })
  .openapi('Event')

const EventDistrictPointsSchema = z
  .object({
    points: z
      .record(
        z.string(),
        z
          .object({
            alliance_points: z
              .int()
              .openapi({ description: 'Points awarded for alliance selection' }),
            award_points: z.int().openapi({ description: 'Points awarded for event awards.' }),
            elim_points: z
              .int()
              .openapi({ description: 'Points awarded for elimination match performance.' }),
            qual_points: z
              .int()
              .openapi({ description: 'Points awarded for qualification match performance.' }),
            total: z.int().openapi({ description: 'Total points awarded at this event.' }),
          })
          .openapi({
            required: ['alliance_points', 'award_points', 'elim_points', 'qual_points', 'total'],
          }),
      )
      .openapi({
        description:
          'Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.',
      }),
    tiebreakers: z
      .record(
        z.string(),
        z
          .object({
            highest_qual_scores: z.array(z.int()).exactOptional(),
            qual_wins: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Tiebreaker values for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the tiebreaker elements as its value.',
      }),
  })
  .openapi({ required: ['points'] })
  .openapi('EventDistrictPoints')

const EventInsightsSchema = z
  .object({
    playoff: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Insights for the playoff round of an event' }),
    qual: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Inights for the qualification round of an event' }),
  })
  .openapi({
    description:
      'A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.',
    required: [],
  })
  .openapi('EventInsights')

const EventInsights_2016Schema = z
  .object({
    A_ChevalDeFrise: z
      .array(z.float32())
      .openapi({
        description:
          'For the Cheval De Frise - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    A_Portcullis: z
      .array(z.float32())
      .openapi({
        description:
          'For the Portcullis - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    B_Moat: z
      .array(z.float32())
      .openapi({
        description:
          'For the Moat - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    B_Ramparts: z
      .array(z.float32())
      .openapi({
        description:
          'For the Ramparts - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    C_Drawbridge: z
      .array(z.float32())
      .openapi({
        description:
          'For the Drawbridge - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    C_SallyPort: z
      .array(z.float32())
      .openapi({
        description:
          'For the Sally Port - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    D_RockWall: z
      .array(z.float32())
      .openapi({
        description:
          'For the Rock Wall - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    D_RoughTerrain: z
      .array(z.float32())
      .openapi({
        description:
          'For the Rough Terrain - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    LowBar: z
      .array(z.float32())
      .openapi({
        description:
          'For the Low Bar - An array with three values, number of times damaged, number of opportunities to damage, and percentage.',
      }),
    average_auto_score: z.float32().openapi({ description: 'Average autonomous score.' }),
    average_boulder_score: z.float32().openapi({ description: 'Average boulder score.' }),
    average_crossing_score: z.float32().openapi({ description: 'Average crossing score.' }),
    average_foul_score: z.float32().openapi({ description: 'Average foul score.' }),
    average_high_goals: z
      .float32()
      .openapi({ description: 'Average number of high goals scored.' }),
    average_low_goals: z.float32().openapi({ description: 'Average number of low goals scored.' }),
    average_score: z.float32().openapi({ description: 'Average total score.' }),
    average_tower_score: z.float32().openapi({ description: 'Average tower score.' }),
    average_win_margin: z.float32().openapi({ description: 'Average margin of victory.' }),
    average_win_score: z.float32().openapi({ description: 'Average winning score.' }),
    breaches: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times breached, number of opportunities to breach, and percentage.',
      }),
    captures: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times captured, number of opportunities to capture, and percentage.',
      }),
    challenges: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times challenged, number of opportunities to challenge, and percentage.',
      }),
    high_score: z
      .array(z.string())
      .openapi({
        description:
          'An array with three values, high score, match key from the match with the high score, and the name of the match.',
      }),
    scales: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times scaled, number of opportunities to scale, and percentage.',
      }),
  })
  .openapi({
    description: 'Insights for FIRST Stronghold qualification and elimination matches.',
    required: [
      'A_ChevalDeFrise',
      'A_Portcullis',
      'B_Moat',
      'B_Ramparts',
      'C_Drawbridge',
      'C_SallyPort',
      'D_RockWall',
      'D_RoughTerrain',
      'LowBar',
      'average_auto_score',
      'average_boulder_score',
      'average_crossing_score',
      'average_foul_score',
      'average_high_goals',
      'average_low_goals',
      'average_score',
      'average_tower_score',
      'average_win_margin',
      'average_win_score',
      'breaches',
      'captures',
      'challenges',
      'high_score',
      'scales',
    ],
  })
  .openapi('EventInsights_2016')

const EventInsights_2017Schema = z
  .object({
    average_foul_score: z.float32().openapi({ description: 'Average foul score.' }),
    average_fuel_points: z.float32().openapi({ description: 'Average fuel points scored.' }),
    average_fuel_points_auto: z
      .float32()
      .openapi({ description: 'Average fuel points scored during auto.' }),
    average_fuel_points_teleop: z
      .float32()
      .openapi({ description: 'Average fuel points scored during teleop.' }),
    average_high_goals: z
      .float32()
      .openapi({ description: 'Average points scored in the high goal.' }),
    average_high_goals_auto: z
      .float32()
      .openapi({ description: 'Average points scored in the high goal during auto.' }),
    average_high_goals_teleop: z
      .float32()
      .openapi({ description: 'Average points scored in the high goal during teleop.' }),
    average_low_goals: z
      .float32()
      .openapi({ description: 'Average points scored in the low goal.' }),
    average_low_goals_auto: z
      .float32()
      .openapi({ description: 'Average points scored in the low goal during auto.' }),
    average_low_goals_teleop: z
      .float32()
      .openapi({ description: 'Average points scored in the low goal during teleop.' }),
    average_mobility_points_auto: z
      .float32()
      .openapi({ description: 'Average mobility points scored during auto.' }),
    average_points_auto: z.float32().openapi({ description: 'Average points scored during auto.' }),
    average_points_teleop: z
      .float32()
      .openapi({ description: 'Average points scored during teleop.' }),
    average_rotor_points: z.float32().openapi({ description: 'Average rotor points scored.' }),
    average_rotor_points_auto: z
      .float32()
      .openapi({ description: 'Average rotor points scored during auto.' }),
    average_rotor_points_teleop: z
      .float32()
      .openapi({ description: 'Average rotor points scored during teleop.' }),
    average_score: z.float32().openapi({ description: 'Average score.' }),
    average_takeoff_points_teleop: z
      .float32()
      .openapi({ description: 'Average takeoff points scored during teleop.' }),
    average_win_margin: z.float32().openapi({ description: 'Average margin of victory.' }),
    average_win_score: z.float32().openapi({ description: 'Average winning score.' }),
    high_kpa: z
      .array(z.string())
      .openapi({
        description:
          'An array with three values, kPa scored, match key from the match with the high kPa, and the name of the match',
      }),
    high_score: z
      .array(z.string())
      .openapi({
        description:
          'An array with three values, high score, match key from the match with the high score, and the name of the match',
      }),
    kpa_achieved: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times kPa bonus achieved, number of opportunities to bonus, and percentage.',
      }),
    mobility_counts: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times mobility bonus achieved, number of opportunities to bonus, and percentage.',
      }),
    rotor_1_engaged: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times rotor 1 engaged, number of opportunities to engage, and percentage.',
      }),
    rotor_1_engaged_auto: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times rotor 1 engaged in auto, number of opportunities to engage in auto, and percentage.',
      }),
    rotor_2_engaged: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times rotor 2 engaged, number of opportunities to engage, and percentage.',
      }),
    rotor_2_engaged_auto: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times rotor 2 engaged in auto, number of opportunities to engage in auto, and percentage.',
      }),
    rotor_3_engaged: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times rotor 3 engaged, number of opportunities to engage, and percentage.',
      }),
    rotor_4_engaged: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times rotor 4 engaged, number of opportunities to engage, and percentage.',
      }),
    takeoff_counts: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times takeoff was counted, number of opportunities to takeoff, and percentage.',
      }),
    unicorn_matches: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a unicorn match (Win + kPa & Rotor Bonuses) occured, number of opportunities to have a unicorn match, and percentage.',
      }),
  })
  .openapi({
    description: 'Insights for FIRST STEAMWORKS qualification and elimination matches.',
    required: [
      'average_foul_score',
      'average_fuel_points',
      'average_fuel_points_auto',
      'average_fuel_points_teleop',
      'average_high_goals',
      'average_high_goals_auto',
      'average_high_goals_teleop',
      'average_low_goals',
      'average_low_goals_auto',
      'average_low_goals_teleop',
      'average_mobility_points_auto',
      'average_points_auto',
      'average_points_teleop',
      'average_rotor_points',
      'average_rotor_points_auto',
      'average_rotor_points_teleop',
      'average_score',
      'average_takeoff_points_teleop',
      'average_win_margin',
      'average_win_score',
      'high_kpa',
      'high_score',
      'kpa_achieved',
      'mobility_counts',
      'rotor_1_engaged',
      'rotor_1_engaged_auto',
      'rotor_2_engaged',
      'rotor_2_engaged_auto',
      'rotor_3_engaged',
      'rotor_4_engaged',
      'takeoff_counts',
      'unicorn_matches',
    ],
  })
  .openapi('EventInsights_2017')

const EventInsights_2018Schema = z
  .object({
    auto_quest_achieved: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times auto quest was completed, number of opportunities to complete the auto quest, and percentage.',
      }),
    average_boost_played: z
      .float32()
      .openapi({ description: 'Average number of boost power up scored (out of 3).' }),
    average_endgame_points: z.float32().openapi({ description: 'Average endgame points.' }),
    average_force_played: z
      .float32()
      .openapi({ description: 'Average number of force power up scored (out of 3).' }),
    average_foul_score: z.float32().openapi({ description: 'Average foul score.' }),
    average_points_auto: z.float32().openapi({ description: 'Average points scored during auto.' }),
    average_points_teleop: z
      .float32()
      .openapi({ description: 'Average points scored during teleop.' }),
    average_run_points_auto: z
      .float32()
      .openapi({ description: 'Average mobility points scored during auto.' }),
    average_scale_ownership_points: z
      .float32()
      .openapi({ description: 'Average scale ownership points scored.' }),
    average_scale_ownership_points_auto: z
      .float32()
      .openapi({ description: 'Average scale ownership points scored during auto.' }),
    average_scale_ownership_points_teleop: z
      .float32()
      .openapi({ description: 'Average scale ownership points scored during teleop.' }),
    average_score: z.float32().openapi({ description: 'Average score.' }),
    average_switch_ownership_points: z
      .float32()
      .openapi({ description: 'Average switch ownership points scored.' }),
    average_switch_ownership_points_auto: z
      .float32()
      .openapi({ description: 'Average switch ownership points scored during auto.' }),
    average_switch_ownership_points_teleop: z
      .float32()
      .openapi({ description: 'Average switch ownership points scored during teleop.' }),
    average_vault_points: z.float32().openapi({ description: 'Average value points scored.' }),
    average_win_margin: z.float32().openapi({ description: 'Average margin of victory.' }),
    average_win_score: z.float32().openapi({ description: 'Average winning score.' }),
    boost_played_counts: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a boost power up was played, number of opportunities to play a boost power up, and percentage.',
      }),
    climb_counts: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a climb occurred, number of opportunities to climb, and percentage.',
      }),
    face_the_boss_achieved: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times an alliance faced the boss, number of opportunities to face the boss, and percentage.',
      }),
    force_played_counts: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a force power up was played, number of opportunities to play a force power up, and percentage.',
      }),
    high_score: z
      .array(z.string())
      .openapi({
        description:
          'An array with three values, high score, match key from the match with the high score, and the name of the match',
      }),
    levitate_played_counts: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a levitate power up was played, number of opportunities to play a levitate power up, and percentage.',
      }),
    run_counts_auto: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a team scored mobility points in auto, number of opportunities to score mobility points in auto, and percentage.',
      }),
    scale_neutral_percentage: z
      .float32()
      .openapi({ description: 'Average scale neutral percentage.' }),
    scale_neutral_percentage_auto: z
      .float32()
      .openapi({ description: 'Average scale neutral percentage during auto.' }),
    scale_neutral_percentage_teleop: z
      .float32()
      .openapi({ description: 'Average scale neutral percentage during teleop.' }),
    switch_owned_counts_auto: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a switch was owned during auto, number of opportunities to own a switch during auto, and percentage.',
      }),
    unicorn_matches: z
      .array(z.float32())
      .openapi({
        description:
          'An array with three values, number of times a unicorn match (Win + Auto Quest + Face the Boss) occurred, number of opportunities to have a unicorn match, and percentage.',
      }),
    winning_opp_switch_denial_percentage_teleop: z
      .float32()
      .openapi({
        description:
          'Average opposing switch denail percentage for the winning alliance during teleop.',
      }),
    winning_own_switch_ownership_percentage: z
      .float32()
      .openapi({
        description: 'Average own switch ownership percentage for the winning alliance.',
      }),
    winning_own_switch_ownership_percentage_auto: z
      .float32()
      .openapi({
        description:
          'Average own switch ownership percentage for the winning alliance during auto.',
      }),
    winning_own_switch_ownership_percentage_teleop: z
      .float32()
      .openapi({
        description:
          'Average own switch ownership percentage for the winning alliance during teleop.',
      }),
    winning_scale_ownership_percentage: z
      .float32()
      .openapi({ description: 'Average scale ownership percentage for the winning alliance.' }),
    winning_scale_ownership_percentage_auto: z
      .float32()
      .openapi({
        description: 'Average scale ownership percentage for the winning alliance during auto.',
      }),
    winning_scale_ownership_percentage_teleop: z
      .float32()
      .openapi({
        description: 'Average scale ownership percentage for the winning alliance during teleop.',
      }),
  })
  .openapi({
    description: 'Insights for FIRST Power Up qualification and elimination matches.',
    required: [
      'auto_quest_achieved',
      'average_boost_played',
      'average_endgame_points',
      'average_force_played',
      'average_foul_score',
      'average_points_auto',
      'average_points_teleop',
      'average_run_points_auto',
      'average_scale_ownership_points',
      'average_scale_ownership_points_auto',
      'average_scale_ownership_points_teleop',
      'average_score',
      'average_switch_ownership_points',
      'average_switch_ownership_points_auto',
      'average_switch_ownership_points_teleop',
      'average_vault_points',
      'average_win_margin',
      'average_win_score',
      'boost_played_counts',
      'climb_counts',
      'face_the_boss_achieved',
      'force_played_counts',
      'high_score',
      'levitate_played_counts',
      'run_counts_auto',
      'scale_neutral_percentage',
      'scale_neutral_percentage_auto',
      'scale_neutral_percentage_teleop',
      'switch_owned_counts_auto',
      'unicorn_matches',
      'winning_opp_switch_denial_percentage_teleop',
      'winning_own_switch_ownership_percentage',
      'winning_own_switch_ownership_percentage_auto',
      'winning_own_switch_ownership_percentage_teleop',
      'winning_scale_ownership_percentage',
      'winning_scale_ownership_percentage_auto',
      'winning_scale_ownership_percentage_teleop',
    ],
  })
  .openapi('EventInsights_2018')

const EventOPRsSchema = z
  .object({
    ccwms: z
      .record(z.string(), z.float32().openapi({ description: 'CCWM for team.' }))
      .exactOptional()
      .openapi({
        description: 'A key-value pair with team key (eg `frc254`) as key and CCWM as value.',
      }),
    dprs: z
      .record(z.string(), z.float32().openapi({ description: 'DPR for team.' }))
      .exactOptional()
      .openapi({
        description: 'A key-value pair with team key (eg `frc254`) as key and DPR as value.',
      }),
    oprs: z
      .record(z.string(), z.float32().openapi({ description: 'OPR for team.' }))
      .exactOptional()
      .openapi({
        description: 'A key-value pair with team key (eg `frc254`) as key and OPR as value.',
      }),
  })
  .openapi({ description: 'OPR, DPR, and CCWM for teams at the event.', required: [] })
  .openapi('EventOPRs')

const EventPredictionsSchema = z
  .object({})
  .openapi({
    description:
      'JSON Object containing prediction information for the event. Contains year-specific information and is subject to change.',
  })
  .openapi('EventPredictions')

const EventRankingSchema = z
  .object({
    extra_stats_info: z
      .array(
        z
          .object({
            name: z
              .string()
              .openapi({ description: 'Name of the field used in the `extra_stats` array.' }),
            precision: z
              .number()
              .openapi({
                description:
                  'Integer expressing the number of digits of precision in the number provided in `sort_orders`.',
              }),
          })
          .openapi({ required: ['name', 'precision'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'List of special TBA-generated values provided in the `extra_stats` array for each item.',
      }),
    rankings: z
      .array(
        z
          .object({
            dq: z.int().openapi({ description: 'Number of times disqualified.' }),
            extra_stats: z
              .array(z.number())
              .exactOptional()
              .openapi({
                description: "Additional special data on the team's performance calculated by TBA.",
              }),
            matches_played: z
              .int()
              .openapi({ description: 'Number of matches played by this team.' }),
            qual_average: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The average match score during qualifications. Year specific. May be null if not relevant for a given year.',
              }),
            rank: z
              .int()
              .openapi({ description: "The team's rank at the event as provided by FIRST." }),
            record: WLTRecordSchema,
            sort_orders: z
              .array(z.number())
              .exactOptional()
              .openapi({
                description:
                  'Additional year-specific information, may be null. See parent `sort_order_info` for details.',
              }),
            team_key: z.string().openapi({ description: 'The team with this rank.' }),
          })
          .openapi({ required: ['dq', 'matches_played', 'rank', 'record', 'team_key'] }),
      )
      .openapi({ description: 'List of rankings at the event.' }),
    sort_order_info: z
      .array(
        z
          .object({
            name: z
              .string()
              .openapi({ description: 'Name of the field used in the `sort_order` array.' }),
            precision: z
              .int()
              .openapi({
                description:
                  'Integer expressing the number of digits of precision in the number provided in `sort_orders`.',
              }),
          })
          .openapi({ required: ['name', 'precision'] }),
      )
      .openapi({
        description:
          'List of year-specific values provided in the `sort_orders` array for each team.',
      }),
  })
  .openapi({ required: ['rankings', 'sort_order_info'] })
  .openapi('EventRanking')

const EventSimpleSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'City, town, village, etc. the event is located in.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country the event is located in.' }),
    district: DistrictListSchema.exactOptional(),
    end_date: z.iso.date().openapi({ description: 'Event end date in `yyyy-mm-dd` format.' }),
    event_code: z.string().openapi({ description: 'Event short code, as provided by FIRST.' }),
    event_type: z
      .int()
      .openapi({
        description:
          'Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2',
      }),
    key: z
      .string()
      .openapi({
        description:
          'TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.',
      }),
    name: z
      .string()
      .openapi({
        description:
          'Official name of event on record either provided by FIRST or organizers of offseason event.',
      }),
    start_date: z.iso.date().openapi({ description: 'Event start date in `yyyy-mm-dd` format.' }),
    state_prov: z
      .string()
      .exactOptional()
      .openapi({ description: 'State or Province the event is located in.' }),
    year: z.int().openapi({ description: 'Year the event data is for.' }),
  })
  .openapi({
    required: ['end_date', 'event_code', 'event_type', 'key', 'name', 'start_date', 'year'],
  })
  .openapi('EventSimple')

const MatchAllianceSchema = z
  .object({
    dq_team_keys: z
      .array(z.string().openapi({ description: 'Team key of a disqualified team.' }))
      .exactOptional()
      .openapi({ description: 'TBA team keys (eg `frc254`) of any disqualified teams.' }),
    score: z
      .int()
      .openapi({
        description: 'Score for this alliance. Will be null or -1 for an unplayed match.',
      }),
    surrogate_team_keys: z
      .array(z.string().openapi({ description: 'Team key of a surrogate team.' }))
      .exactOptional()
      .openapi({ description: 'TBA team keys (eg `frc254`) of any teams playing as a surrogate.' }),
    team_keys: z.array(
      z
        .string()
        .openapi({ description: 'TBA Team keys (eg `frc254`) for teams on this alliance.' }),
    ),
  })
  .openapi({ required: ['score', 'team_keys'] })
  .openapi('MatchAlliance')

const MatchSchema = z
  .object({
    actual_time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.',
      }),
    alliances: z
      .object({
        blue: MatchAllianceSchema.exactOptional(),
        red: MatchAllianceSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'A list of alliances, the teams on the alliances, and their score.',
        required: [],
      }),
    comp_level: z
      .enum(['qm', 'ef', 'qf', 'sf', 'f'])
      .openapi({ description: 'The competition level the match was played at.' }),
    event_key: z
      .string()
      .openapi({ description: 'Event key of the event the match was played at.' }),
    key: z
      .string()
      .openapi({
        description:
          'TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.',
      }),
    match_number: z
      .int()
      .openapi({ description: 'The match number of the match in the competition level.' }),
    post_result_time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted.',
      }),
    predicted_time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.',
      }),
    score_breakdown: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null.',
      }),
    set_number: z
      .int()
      .openapi({
        description:
          'The set number in a series of matches where more than one match is required in the match series.',
      }),
    time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.',
      }),
    videos: z
      .array(
        z
          .object({
            key: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique key representing this video' }),
            type: z
              .string()
              .exactOptional()
              .openapi({ description: "Can be one of 'youtube' or 'tba'" }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of video objects associated with this match.' }),
    winning_alliance: z
      .enum(['red', 'blue', ''])
      .exactOptional()
      .openapi({
        description:
          'The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.',
      }),
  })
  .openapi({ required: ['comp_level', 'event_key', 'key', 'match_number', 'set_number'] })
  .openapi('Match')

const MatchScoreBreakdown_2015AllianceSchema = z
  .object({
    adjust_points: z.int().exactOptional(),
    auto_points: z.int().exactOptional(),
    container_count_level1: z.int().exactOptional(),
    container_count_level2: z.int().exactOptional(),
    container_count_level3: z.int().exactOptional(),
    container_count_level4: z.int().exactOptional(),
    container_count_level5: z.int().exactOptional(),
    container_count_level6: z.int().exactOptional(),
    container_points: z.int().exactOptional(),
    container_set: z.boolean().exactOptional(),
    foul_count: z.int().exactOptional(),
    foul_points: z.int().exactOptional(),
    litter_count_container: z.int().exactOptional(),
    litter_count_landfill: z.int().exactOptional(),
    litter_count_unprocessed: z.int().exactOptional(),
    litter_points: z.int().exactOptional(),
    robot_set: z.boolean().exactOptional(),
    teleop_points: z.int().exactOptional(),
    total_points: z.int().exactOptional(),
    tote_count_far: z.int().exactOptional(),
    tote_count_near: z.int().exactOptional(),
    tote_points: z.int().exactOptional(),
    tote_set: z.boolean().exactOptional(),
    tote_stack: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2015Alliance')

const MatchScoreBreakdown_2015Schema = z
  .object({
    blue: MatchScoreBreakdown_2015AllianceSchema.exactOptional(),
    coopertition: z.enum(['None', 'Unknown', 'Stack']).exactOptional(),
    coopertition_points: z.int().exactOptional(),
    red: MatchScoreBreakdown_2015AllianceSchema.exactOptional(),
  })
  .openapi({
    description: 'See the 2015 FMS API documentation for a description of each value',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2015')

const MatchScoreBreakdown_2016AllianceSchema = z
  .object({
    adjustPoints: z.int().exactOptional(),
    autoBoulderPoints: z.int().exactOptional(),
    autoBouldersHigh: z.int().exactOptional(),
    autoBouldersLow: z.int().exactOptional(),
    autoCrossingPoints: z.int().exactOptional(),
    autoPoints: z.int().exactOptional(),
    autoReachPoints: z.int().exactOptional(),
    breachPoints: z.int().exactOptional(),
    capturePoints: z.int().exactOptional(),
    foulCount: z.int().exactOptional(),
    foulPoints: z.int().exactOptional(),
    position1crossings: z.int().exactOptional(),
    position2: z.string().exactOptional(),
    position2crossings: z.int().exactOptional(),
    position3: z.string().exactOptional(),
    position3crossings: z.int().exactOptional(),
    position4: z.string().exactOptional(),
    position4crossings: z.int().exactOptional(),
    position5: z.string().exactOptional(),
    position5crossings: z.int().exactOptional(),
    robot1Auto: z.enum(['Crossed', 'Reached', 'None']).exactOptional(),
    robot2Auto: z.enum(['Crossed', 'Reached', 'None']).exactOptional(),
    robot3Auto: z.enum(['Crossed', 'Reached', 'None']).exactOptional(),
    techFoulCount: z.int().exactOptional(),
    teleopBoulderPoints: z.int().exactOptional(),
    teleopBouldersHigh: z.int().exactOptional(),
    teleopBouldersLow: z.int().exactOptional(),
    teleopChallengePoints: z.int().exactOptional(),
    teleopCrossingPoints: z.int().exactOptional(),
    teleopDefensesBreached: z.boolean().exactOptional(),
    teleopPoints: z.int().exactOptional(),
    teleopScalePoints: z.int().exactOptional(),
    teleopTowerCaptured: z.int().exactOptional(),
    totalPoints: z.int().exactOptional(),
    towerEndStrength: z.int().exactOptional(),
    towerFaceA: z.string().exactOptional(),
    towerFaceB: z.string().exactOptional(),
    towerFaceC: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2016Alliance')

const MatchScoreBreakdown_2016Schema = z
  .object({
    blue: MatchScoreBreakdown_2016AllianceSchema.exactOptional(),
    red: MatchScoreBreakdown_2016AllianceSchema.exactOptional(),
  })
  .openapi({
    description: 'See the 2016 FMS API documentation for a description of each value.',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2016')

const MatchScoreBreakdown_2017AllianceSchema = z
  .object({
    adjustPoints: z.int().exactOptional(),
    autoFuelHigh: z.int().exactOptional(),
    autoFuelLow: z.int().exactOptional(),
    autoFuelPoints: z.int().exactOptional(),
    autoMobilityPoints: z.int().exactOptional(),
    autoPoints: z.int().exactOptional(),
    autoRotorPoints: z.int().exactOptional(),
    foulCount: z.int().exactOptional(),
    foulPoints: z.int().exactOptional(),
    kPaBonusPoints: z.int().exactOptional(),
    kPaRankingPointAchieved: z.boolean().exactOptional(),
    robot1Auto: z.enum(['Unknown', 'Mobility', 'None']).exactOptional(),
    robot2Auto: z.enum(['Unknown', 'Mobility', 'None']).exactOptional(),
    robot3Auto: z.enum(['Unknown', 'Mobility', 'None']).exactOptional(),
    rotor1Auto: z.boolean().exactOptional(),
    rotor1Engaged: z.boolean().exactOptional(),
    rotor2Auto: z.boolean().exactOptional(),
    rotor2Engaged: z.boolean().exactOptional(),
    rotor3Engaged: z.boolean().exactOptional(),
    rotor4Engaged: z.boolean().exactOptional(),
    rotorBonusPoints: z.int().exactOptional(),
    rotorRankingPointAchieved: z.boolean().exactOptional(),
    techFoulCount: z.int().exactOptional(),
    teleopFuelHigh: z.int().exactOptional(),
    teleopFuelLow: z.int().exactOptional(),
    teleopFuelPoints: z.int().exactOptional(),
    teleopPoints: z.int().exactOptional(),
    teleopRotorPoints: z.int().exactOptional(),
    teleopTakeoffPoints: z.int().exactOptional(),
    totalPoints: z.int().exactOptional(),
    touchpadFar: z.string().exactOptional(),
    touchpadMiddle: z.string().exactOptional(),
    touchpadNear: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2017Alliance')

const MatchScoreBreakdown_2017Schema = z
  .object({
    blue: MatchScoreBreakdown_2017AllianceSchema.exactOptional(),
    red: MatchScoreBreakdown_2017AllianceSchema.exactOptional(),
  })
  .openapi({
    description: 'See the 2017 FMS API documentation for a description of each value.',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2017')

const MatchScoreBreakdown_2018AllianceSchema = z
  .object({
    adjustPoints: z.int().exactOptional(),
    autoOwnershipPoints: z.int().exactOptional(),
    autoPoints: z.int().exactOptional(),
    autoQuestRankingPoint: z.boolean().exactOptional(),
    autoRobot1: z.string().exactOptional(),
    autoRobot2: z.string().exactOptional(),
    autoRobot3: z.string().exactOptional(),
    autoRunPoints: z.int().exactOptional(),
    autoScaleOwnershipSec: z.int().exactOptional(),
    autoSwitchAtZero: z.boolean().exactOptional(),
    autoSwitchOwnershipSec: z.int().exactOptional(),
    endgamePoints: z.int().exactOptional(),
    endgameRobot1: z.string().exactOptional(),
    endgameRobot2: z.string().exactOptional(),
    endgameRobot3: z.string().exactOptional(),
    faceTheBossRankingPoint: z.boolean().exactOptional(),
    foulCount: z.int().exactOptional(),
    foulPoints: z.int().exactOptional(),
    rp: z.int().exactOptional(),
    tba_gameData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Unofficial TBA-computed value of the FMS provided GameData given to the alliance teams at the start of the match. 3 Character String containing `L` and `R` only. The first character represents the near switch, the 2nd the scale, and the 3rd the far, opposing, switch from the alliance's perspective. An `L` in a position indicates the platform on the left will be lit for the alliance while an `R` will indicate the right platform will be lit for the alliance. See also [WPI Screen Steps](https://wpilib.screenstepslive.com/s/currentCS/m/getting_started/l/826278-2018-game-data-details).",
      }),
    techFoulCount: z.int().exactOptional(),
    teleopOwnershipPoints: z.int().exactOptional(),
    teleopPoints: z.int().exactOptional(),
    teleopScaleBoostSec: z.int().exactOptional(),
    teleopScaleForceSec: z.int().exactOptional(),
    teleopScaleOwnershipSec: z.int().exactOptional(),
    teleopSwitchBoostSec: z.int().exactOptional(),
    teleopSwitchForceSec: z.int().exactOptional(),
    teleopSwitchOwnershipSec: z.int().exactOptional(),
    totalPoints: z.int().exactOptional(),
    vaultBoostPlayed: z.int().exactOptional(),
    vaultBoostTotal: z.int().exactOptional(),
    vaultForcePlayed: z.int().exactOptional(),
    vaultForceTotal: z.int().exactOptional(),
    vaultLevitatePlayed: z.int().exactOptional(),
    vaultLevitateTotal: z.int().exactOptional(),
    vaultPoints: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2018Alliance')

const MatchScoreBreakdown_2018Schema = z
  .object({
    blue: MatchScoreBreakdown_2018AllianceSchema.exactOptional(),
    red: MatchScoreBreakdown_2018AllianceSchema.exactOptional(),
  })
  .openapi({
    description:
      'See the 2018 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2018')

const MatchScoreBreakdown_2019AllianceSchema = z
  .object({
    adjustPoints: z.int().exactOptional(),
    autoPoints: z.int().exactOptional(),
    bay1: z.string().exactOptional(),
    bay2: z.string().exactOptional(),
    bay3: z.string().exactOptional(),
    bay4: z.string().exactOptional(),
    bay5: z.string().exactOptional(),
    bay6: z.string().exactOptional(),
    bay7: z.string().exactOptional(),
    bay8: z.string().exactOptional(),
    cargoPoints: z.int().exactOptional(),
    completeRocketRankingPoint: z.boolean().exactOptional(),
    completedRocketFar: z.boolean().exactOptional(),
    completedRocketNear: z.boolean().exactOptional(),
    endgameRobot1: z.string().exactOptional(),
    endgameRobot2: z.string().exactOptional(),
    endgameRobot3: z.string().exactOptional(),
    foulCount: z.int().exactOptional(),
    foulPoints: z.int().exactOptional(),
    habClimbPoints: z.int().exactOptional(),
    habDockingRankingPoint: z.boolean().exactOptional(),
    habLineRobot1: z.string().exactOptional(),
    habLineRobot2: z.string().exactOptional(),
    habLineRobot3: z.string().exactOptional(),
    hatchPanelPoints: z.int().exactOptional(),
    lowLeftRocketFar: z.string().exactOptional(),
    lowLeftRocketNear: z.string().exactOptional(),
    lowRightRocketFar: z.string().exactOptional(),
    lowRightRocketNear: z.string().exactOptional(),
    midLeftRocketFar: z.string().exactOptional(),
    midLeftRocketNear: z.string().exactOptional(),
    midRightRocketFar: z.string().exactOptional(),
    midRightRocketNear: z.string().exactOptional(),
    preMatchBay1: z.string().exactOptional(),
    preMatchBay2: z.string().exactOptional(),
    preMatchBay3: z.string().exactOptional(),
    preMatchBay6: z.string().exactOptional(),
    preMatchBay7: z.string().exactOptional(),
    preMatchBay8: z.string().exactOptional(),
    preMatchLevelRobot1: z.string().exactOptional(),
    preMatchLevelRobot2: z.string().exactOptional(),
    preMatchLevelRobot3: z.string().exactOptional(),
    rp: z.int().exactOptional(),
    sandStormBonusPoints: z.int().exactOptional(),
    techFoulCount: z.int().exactOptional(),
    teleopPoints: z.int().exactOptional(),
    topLeftRocketFar: z.string().exactOptional(),
    topLeftRocketNear: z.string().exactOptional(),
    topRightRocketFar: z.string().exactOptional(),
    topRightRocketNear: z.string().exactOptional(),
    totalPoints: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2019Alliance')

const MatchScoreBreakdown_2019Schema = z
  .object({
    blue: MatchScoreBreakdown_2019AllianceSchema.exactOptional(),
    red: MatchScoreBreakdown_2019AllianceSchema.exactOptional(),
  })
  .openapi({
    description:
      'See the 2019 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2019')

const MatchScoreBreakdown_2020AllianceSchema = z
  .object({
    adjustPoints: z.int().exactOptional(),
    autoCellPoints: z.int().exactOptional(),
    autoCellsBottom: z.int().exactOptional(),
    autoCellsInner: z.int().exactOptional(),
    autoCellsOuter: z.int().exactOptional(),
    autoInitLinePoints: z.int().exactOptional(),
    autoPoints: z.int().exactOptional(),
    controlPanelPoints: z.int().exactOptional(),
    endgamePoints: z.int().exactOptional(),
    endgameRobot1: z.string().exactOptional(),
    endgameRobot2: z.string().exactOptional(),
    endgameRobot3: z.string().exactOptional(),
    endgameRungIsLevel: z.string().exactOptional(),
    foulCount: z.int().exactOptional(),
    foulPoints: z.int().exactOptional(),
    initLineRobot1: z.string().exactOptional(),
    initLineRobot2: z.string().exactOptional(),
    initLineRobot3: z.string().exactOptional(),
    rp: z.int().exactOptional(),
    shieldEnergizedRankingPoint: z.boolean().exactOptional(),
    shieldOperationalRankingPoint: z.boolean().exactOptional(),
    stage1Activated: z.boolean().exactOptional(),
    stage2Activated: z.boolean().exactOptional(),
    stage3Activated: z.boolean().exactOptional(),
    stage3TargetColor: z.string().exactOptional(),
    tba_numRobotsHanging: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Unofficial TBA-computed value that counts the number of robots who were hanging at the end of the match.',
      }),
    tba_shieldEnergizedRankingPointFromFoul: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Unofficial TBA-computed value that indicates whether the shieldEnergizedRankingPoint was earned normally or awarded due to a foul.',
      }),
    techFoulCount: z.int().exactOptional(),
    teleopCellPoints: z.int().exactOptional(),
    teleopCellsBottom: z.int().exactOptional(),
    teleopCellsInner: z.int().exactOptional(),
    teleopCellsOuter: z.int().exactOptional(),
    teleopPoints: z.int().exactOptional(),
    totalPoints: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2020Alliance')

const MatchScoreBreakdown_2020Schema = z
  .object({
    blue: MatchScoreBreakdown_2020AllianceSchema.exactOptional(),
    red: MatchScoreBreakdown_2020AllianceSchema.exactOptional(),
  })
  .openapi({
    description:
      'See the 2020 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#/reference/match-results/score-details',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2020')

const MatchScoreBreakdown_2022AllianceSchema = z
  .object({
    adjustPoints: z.int().exactOptional(),
    autoCargoLowerBlue: z.int().exactOptional(),
    autoCargoLowerFar: z.int().exactOptional(),
    autoCargoLowerNear: z.int().exactOptional(),
    autoCargoLowerRed: z.int().exactOptional(),
    autoCargoPoints: z.int().exactOptional(),
    autoCargoTotal: z.int().exactOptional(),
    autoCargoUpperBlue: z.int().exactOptional(),
    autoCargoUpperFar: z.int().exactOptional(),
    autoCargoUpperNear: z.int().exactOptional(),
    autoCargoUpperRed: z.int().exactOptional(),
    autoPoints: z.int().exactOptional(),
    autoTaxiPoints: z.int().exactOptional(),
    cargoBonusRankingPoint: z.boolean().exactOptional(),
    endgamePoints: z.int().exactOptional(),
    endgameRobot1: z.enum(['Traversal', 'High', 'Mid', 'Low', 'None']).exactOptional(),
    endgameRobot2: z.enum(['Traversal', 'High', 'Mid', 'Low', 'None']).exactOptional(),
    endgameRobot3: z.enum(['Traversal', 'High', 'Mid', 'Low', 'None']).exactOptional(),
    foulCount: z.int().exactOptional(),
    foulPoints: z.int().exactOptional(),
    hangarBonusRankingPoint: z.boolean().exactOptional(),
    matchCargoTotal: z.int().exactOptional(),
    quintetAchieved: z.boolean().exactOptional(),
    rp: z.int().exactOptional(),
    taxiRobot1: z.enum(['Yes', 'No']).exactOptional(),
    taxiRobot2: z.enum(['Yes', 'No']).exactOptional(),
    taxiRobot3: z.enum(['Yes', 'No']).exactOptional(),
    techFoulCount: z.int().exactOptional(),
    teleopCargoLowerBlue: z.int().exactOptional(),
    teleopCargoLowerFar: z.int().exactOptional(),
    teleopCargoLowerNear: z.int().exactOptional(),
    teleopCargoLowerRed: z.int().exactOptional(),
    teleopCargoPoints: z.int().exactOptional(),
    teleopCargoTotal: z.int().exactOptional(),
    teleopCargoUpperBlue: z.int().exactOptional(),
    teleopCargoUpperFar: z.int().exactOptional(),
    teleopCargoUpperNear: z.int().exactOptional(),
    teleopCargoUpperRed: z.int().exactOptional(),
    teleopPoints: z.int().exactOptional(),
    totalPoints: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchScoreBreakdown_2022Alliance')

const MatchScoreBreakdown_2022Schema = z
  .object({
    blue: MatchScoreBreakdown_2022AllianceSchema.exactOptional(),
    red: MatchScoreBreakdown_2022AllianceSchema.exactOptional(),
  })
  .openapi({
    description:
      'See the 2022 FMS API documentation for a description of each value. https://frc-api-docs.firstinspires.org',
    required: [],
  })
  .openapi('MatchScoreBreakdown_2022')

const MatchSimpleSchema = z
  .object({
    actual_time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.',
      }),
    alliances: z
      .object({
        blue: MatchAllianceSchema.exactOptional(),
        red: MatchAllianceSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'A list of alliances, the teams on the alliances, and their score.',
        required: [],
      }),
    comp_level: z
      .enum(['qm', 'ef', 'qf', 'sf', 'f'])
      .openapi({ description: 'The competition level the match was played at.' }),
    event_key: z
      .string()
      .openapi({ description: 'Event key of the event the match was played at.' }),
    key: z
      .string()
      .openapi({
        description:
          'TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may append the competition level if more than one match in required per set.',
      }),
    match_number: z
      .int()
      .openapi({ description: 'The match number of the match in the competition level.' }),
    predicted_time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.',
      }),
    set_number: z
      .int()
      .openapi({
        description:
          'The set number in a series of matches where more than one match is required in the match series.',
      }),
    time: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.',
      }),
    winning_alliance: z
      .enum(['red', 'blue', ''])
      .exactOptional()
      .openapi({
        description:
          'The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.',
      }),
  })
  .openapi({ required: ['comp_level', 'event_key', 'key', 'match_number', 'set_number'] })
  .openapi('MatchSimple')

const MatchTimeseries_2018Schema = z
  .object({
    blue_auto_quest: z
      .int()
      .exactOptional()
      .openapi({
        description: '1 if the blue alliance is credited with the AUTO QUEST, 0 if not.',
      }),
    blue_boost_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of POWER CUBES in the BOOST section of the blue alliance VAULT.',
      }),
    blue_boost_played: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Returns 1 if the blue alliance BOOST was played, or 0 if not played.',
      }),
    blue_current_powerup: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the current blue alliance POWER UP being played, or `null`.',
      }),
    blue_face_the_boss: z
      .int()
      .exactOptional()
      .openapi({
        description: '1 if the blue alliance is credited with FACING THE BOSS, 0 if not.',
      }),
    blue_force_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of POWER CUBES in the FORCE section of the blue alliance VAULT.',
      }),
    blue_force_played: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Returns 1 if the blue alliance FORCE was played, or 0 if not played.',
      }),
    blue_levitate_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of POWER CUBES in the LEVITATE section of the blue alliance VAULT.',
      }),
    blue_levitate_played: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Returns 1 if the blue alliance LEVITATE was played, or 0 if not played.',
      }),
    blue_powerup_time_remaining: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of seconds remaining in the blue alliance POWER UP time, or 0 if none is active.',
      }),
    blue_scale_owned: z
      .int()
      .exactOptional()
      .openapi({ description: '1 if the blue alliance owns the SCALE, 0 if not.' }),
    blue_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Current score for the blue alliance.' }),
    blue_switch_owned: z
      .int()
      .exactOptional()
      .openapi({ description: '1 if the blue alliance owns their SWITCH, 0 if not.' }),
    event_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.',
      }),
    match_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Match ID consisting of the level, match number, and set number, eg `qm45` or `f1m1`.',
      }),
    mode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Current mode of play, can be `pre_match`, `auto`, `telop`, or `post_match`.',
      }),
    play: z.int().exactOptional(),
    red_auto_quest: z
      .int()
      .exactOptional()
      .openapi({ description: '1 if the red alliance is credited with the AUTO QUEST, 0 if not.' }),
    red_boost_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of POWER CUBES in the BOOST section of the red alliance VAULT.',
      }),
    red_boost_played: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Returns 1 if the red alliance BOOST was played, or 0 if not played.',
      }),
    red_current_powerup: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the current red alliance POWER UP being played, or `null`.',
      }),
    red_face_the_boss: z
      .int()
      .exactOptional()
      .openapi({
        description: '1 if the red alliance is credited with FACING THE BOSS, 0 if not.',
      }),
    red_force_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of POWER CUBES in the FORCE section of the red alliance VAULT.',
      }),
    red_force_played: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Returns 1 if the red alliance FORCE was played, or 0 if not played.',
      }),
    red_levitate_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of POWER CUBES in the LEVITATE section of the red alliance VAULT.',
      }),
    red_levitate_played: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Returns 1 if the red alliance LEVITATE was played, or 0 if not played.',
      }),
    red_powerup_time_remaining: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of seconds remaining in the red alliance POWER UP time, or 0 if none is active.',
      }),
    red_scale_owned: z
      .int()
      .exactOptional()
      .openapi({ description: '1 if the red alliance owns the SCALE, 0 if not.' }),
    red_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Current score for the red alliance.' }),
    red_switch_owned: z
      .int()
      .exactOptional()
      .openapi({ description: '1 if the red alliance owns their SWITCH, 0 if not.' }),
    time_remaining: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Amount of time remaining in the match, only valid during `auto` and `teleop` modes.',
      }),
  })
  .openapi({
    description:
      'Timeseries data for the 2018 game *FIRST* POWER UP.\n*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.\n*WARNING:* This model is currently under active development and may change at any time, including in breaking ways.',
    required: [],
  })
  .openapi('MatchTimeseries_2018')

const MediaSchema = z
  .object({
    details: z
      .object({})
      .exactOptional()
      .openapi({ description: 'If required, a JSON dict of additional media information.' }),
    direct_url: z.string().exactOptional().openapi({ description: 'Direct URL to the media.' }),
    foreign_key: z
      .string()
      .openapi({ description: 'The key used to identify this media on the media site.' }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the media is of high quality.' }),
    type: z
      .enum([
        'youtube',
        'cdphotothread',
        'imgur',
        'facebook-profile',
        'youtube-channel',
        'twitter-profile',
        'github-profile',
        'instagram-profile',
        'periscope-profile',
        'grabcad',
        'instagram-image',
        'external-link',
        'avatar',
      ])
      .openapi({ description: 'String type of the media element.' }),
    view_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL that leads to the full web page for the media, if one exists.',
      }),
  })
  .openapi({
    description:
      'The `Media` object contains a reference for most any media associated with a team or event on TBA.',
    required: ['type', 'foreign_key'],
  })
  .openapi('Media')

const TeamSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be NULL, for future development.' }),
    city: z
      .string()
      .exactOptional()
      .openapi({
        description: 'City of team derived from parsing the address registered with FIRST.',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Country of team derived from parsing the address registered with FIRST.',
      }),
    gmaps_place_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be NULL, for future development.' }),
    gmaps_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'Will be NULL, for future development.' }),
    home_championship: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value.",
      }),
    key: z
      .string()
      .openapi({
        description:
          'TBA team key with the format `frcXXXX` with `XXXX` representing the team number.',
      }),
    lat: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Will be NULL, for future development.' }),
    lng: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Will be NULL, for future development.' }),
    location_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be NULL, for future development.' }),
    motto: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Team's motto as provided by FIRST. This field is deprecated and will return null - will be removed at end-of-season in 2019.",
      }),
    name: z.string().openapi({ description: 'Official long name registered with FIRST.' }),
    nickname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Team nickname provided by FIRST.' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code from the team address.' }),
    rookie_year: z
      .int()
      .exactOptional()
      .openapi({ description: 'First year the team officially competed.' }),
    school_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of team school or affilited group registered with FIRST.' }),
    state_prov: z
      .string()
      .exactOptional()
      .openapi({
        description: 'State of team derived from parsing the address registered with FIRST.',
      }),
    team_number: z.int().openapi({ description: 'Official team number issued by FIRST.' }),
    website: z
      .url()
      .exactOptional()
      .openapi({ description: 'Official website associated with the team.' }),
  })
  .openapi({ required: ['key', 'name', 'team_number'] })
  .openapi('Team')

const TeamEventStatusAllianceBackupSchema = z
  .object({
    in: z
      .string()
      .exactOptional()
      .openapi({ description: 'TBA key for the backup team called in.' }),
    out: z
      .string()
      .exactOptional()
      .openapi({ description: 'TBA key for the team replaced by the backup.' }),
  })
  .openapi({ description: 'Backup status, may be null.', required: [] })
  .openapi('TeamEventStatusAllianceBackup')

const TeamEventStatusAllianceSchema = z
  .object({
    backup: TeamEventStatusAllianceBackupSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Alliance name, may be null.' }),
    number: z.int().openapi({ description: 'Alliance number.' }),
    pick: z
      .int()
      .openapi({
        description:
          'Order the team was picked in the alliance from 0-2, with 0 being alliance captain.',
      }),
  })
  .openapi({ required: ['number', 'pick'] })
  .openapi('TeamEventStatusAlliance')

const TeamEventStatusPlayoffSchema = z
  .object({
    current_level_record: WLTRecordSchema.exactOptional(),
    level: z
      .enum(['qm', 'ef', 'qf', 'sf', 'f'])
      .exactOptional()
      .openapi({ description: 'The highest playoff level the team reached.' }),
    playoff_average: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The average match score during playoffs. Year specific. May be null if not relevant for a given year.',
      }),
    record: WLTRecordSchema.exactOptional(),
    status: z
      .enum(['won', 'eliminated', 'playing'])
      .exactOptional()
      .openapi({ description: 'Current competition status for the playoffs.' }),
  })
  .openapi({
    description:
      'Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.',
    required: [],
  })
  .openapi('TeamEventStatusPlayoff')

const TeamEventStatusRankSchema = z
  .object({
    num_teams: z.int().exactOptional().openapi({ description: 'Number of teams ranked.' }),
    ranking: z
      .object({
        dq: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of matches the team was disqualified for.' }),
        matches_played: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of matches played.' }),
        qual_average: z
          .float64()
          .exactOptional()
          .openapi({ description: 'For some years, average qualification score. Can be null.' }),
        rank: z.int().exactOptional().openapi({ description: 'Relative rank of this team.' }),
        record: WLTRecordSchema.exactOptional(),
        sort_orders: z
          .array(z.number())
          .exactOptional()
          .openapi({
            description:
              'Ordered list of values used to determine the rank. See the `sort_order_info` property for the name of each value.',
          }),
        team_key: z
          .string()
          .exactOptional()
          .openapi({ description: 'TBA team key for this rank.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    sort_order_info: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The descriptive name of the value used to sort the ranking.',
              }),
            precision: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The number of digits of precision used for this value, eg `2` would correspond to a value of `101.11` while `0` would correspond to `101`.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Ordered list of names corresponding to the elements of the `sort_orders` array.',
      }),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamEventStatusRank')

const TeamEventStatusSchema = z
  .object({
    alliance: TeamEventStatusAllianceSchema.exactOptional(),
    alliance_status_str: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An HTML formatted string suitable for display to the user containing the team's alliance pick status.",
      }),
    last_match_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'TBA match key for the last match the team played in at this event, or null.',
      }),
    next_match_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TBA match key for the next match the team is scheduled to play in at this event, or null.',
      }),
    overall_status_str: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An HTML formatted string suitable for display to the user containing the team's overall status summary of the event.",
      }),
    playoff: TeamEventStatusPlayoffSchema.exactOptional(),
    playoff_status_str: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An HTML formatter string suitable for display to the user containing the team's playoff status.",
      }),
    qual: TeamEventStatusRankSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamEventStatus')

const TeamRobotSchema = z
  .object({
    key: z.string().openapi({ description: 'Internal TBA identifier for this robot.' }),
    robot_name: z.string().openapi({ description: 'Name of the robot as provided by the team.' }),
    team_key: z.string().openapi({ description: 'TBA team key for this robot.' }),
    year: z.int().openapi({ description: 'Year this robot competed in.' }),
  })
  .openapi({ required: ['key', 'robot_name', 'team_key', 'year'] })
  .openapi('TeamRobot')

const TeamSimpleSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({
        description: 'City of team derived from parsing the address registered with FIRST.',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Country of team derived from parsing the address registered with FIRST.',
      }),
    key: z
      .string()
      .openapi({
        description:
          'TBA team key with the format `frcXXXX` with `XXXX` representing the team number.',
      }),
    name: z.string().openapi({ description: 'Official long name registered with FIRST.' }),
    nickname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Team nickname provided by FIRST.' }),
    state_prov: z
      .string()
      .exactOptional()
      .openapi({
        description: 'State of team derived from parsing the address registered with FIRST.',
      }),
    team_number: z.int().openapi({ description: 'Official team number issued by FIRST.' }),
  })
  .openapi({ required: ['key', 'name', 'team_number'] })
  .openapi('TeamSimple')

const ZebraTeamSchema = z
  .object({
    team_key: z
      .string()
      .openapi({
        description: 'The TBA team key for the Zebra MotionWorks data.',
        example: 'frc7332',
      }),
    xs: z
      .array(z.float64().openapi({ example: [2.73, 2.7, null] }))
      .openapi({
        description:
          'A list containing doubles and nulls representing a teams X position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.',
      }),
    ys: z
      .array(z.float64().openapi({ example: [2.73, 2.7, null] }))
      .openapi({
        description:
          'A list containing doubles and nulls representing a teams Y position in feet at the corresponding timestamp. A null value represents no tracking data for a given timestamp.',
      }),
  })
  .openapi({ required: ['team_key', 'xs', 'ys'] })
  .openapi('ZebraTeam')

const ZebraSchema = z
  .object({
    alliances: z
      .object({
        blue: z
          .array(ZebraTeamSchema)
          .exactOptional()
          .openapi({ description: 'Zebra data for teams on the blue alliance' }),
        red: z
          .array(ZebraTeamSchema)
          .exactOptional()
          .openapi({ description: 'Zebra MotionWorks data for teams on the red alliance' }),
      })
      .openapi({ required: [] }),
    key: z
      .string()
      .openapi({
        description:
          'TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.',
      }),
    times: z
      .array(z.float64().openapi({ example: [0, 0.1, 0.2] }))
      .openapi({
        description:
          'A list of relative timestamps for each data point. Each timestamp will correspond to the X and Y value at the same index in a team xs and ys arrays. `times`, all teams `xs` and all teams `ys` are guarenteed to be the same length.',
      }),
  })
  .openapi({ required: ['key', 'times', 'alliances'] })
  .openapi('Zebra')

const NotModifiedResponse = { description: 'Not Modified - Use Local Cached Value' }

const UnauthorizedResponse = { description: '' }

const IfNoneMatchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Value of the `ETag` header in the most recently cached response by the client.',
      in: 'header',
      name: 'If-None-Match',
      schema: { type: 'string' },
      required: false,
    },
  })

const DistrictKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'TBA District Key, eg `2016fim`',
      in: 'path',
      name: 'district_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const EventKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'TBA Event Key, eg `2016nytr`',
      in: 'path',
      name: 'event_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const MatchKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'TBA Match Key, eg `2016nytr_qm1`',
      in: 'path',
      name: 'match_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const MediaTagParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Media Tag which describes the Media.',
      in: 'path',
      name: 'media_tag',
      required: true,
      schema: { type: 'string' },
    },
  })

const PageNumParamsSchema = z
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
      description: 'Page number of results to return, zero-indexed',
      in: 'path',
      name: 'page_num',
      required: true,
      schema: { type: 'integer' },
    },
  })

const TeamKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'TBA Team Key, eg `frc254`',
      in: 'path',
      name: 'team_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const YearParamsSchema = z
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
      description: 'Competition Year (or Season). Must be 4 digits.',
      in: 'path',
      name: 'year',
      required: true,
      schema: { type: 'integer' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'Your TBA v3 API Key can be obtained from your [Account Page](/account) on the TBA website.',
  in: 'header',
  name: 'X-TBA-Auth-Key',
  type: 'apiKey',
}

export const getDistrictDistrictKeyEventsRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/events',
  tags: ['district', 'event', 'list'],
  description: 'Gets a list of events in the given district.',
  operationId: 'getDistrictEvents',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ district_key: DistrictKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictDistrictKeyEventsKeysRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/events/keys',
  tags: ['district', 'event', 'list'],
  description: 'Gets a list of event keys for events in the given district.',
  operationId: 'getDistrictEventsKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ district_key: DistrictKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Event Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictDistrictKeyEventsSimpleRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/events/simple',
  tags: ['district', 'event', 'list'],
  description: 'Gets a short-form list of events in the given district.',
  operationId: 'getDistrictEventsSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({
      district_key: z
        .string()
        .openapi({
          param: {
            description: 'TBA District Key, eg `2016fim`',
            in: 'path',
            name: 'district_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictDistrictKeyRankingsRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/rankings',
  tags: ['district', 'team', 'list'],
  description: 'Gets a list of team district rankings for the given district.',
  operationId: 'getDistrictRankings',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ district_key: DistrictKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(DistrictRankingSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictDistrictKeyTeamsRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/teams',
  tags: ['district', 'team', 'list'],
  description: 'Gets a list of `Team` objects that competed in events in the given district.',
  operationId: 'getDistrictTeams',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ district_key: DistrictKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictDistrictKeyTeamsKeysRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/teams/keys',
  tags: ['district', 'team', 'list'],
  description: 'Gets a list of `Team` objects that competed in events in the given district.',
  operationId: 'getDistrictTeamsKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ district_key: DistrictKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Team Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictDistrictKeyTeamsSimpleRoute = createRoute({
  method: 'get',
  path: '/district/{district_key}/teams/simple',
  tags: ['district', 'team', 'list'],
  description:
    'Gets a short-form list of `Team` objects that competed in events in the given district.',
  operationId: 'getDistrictTeamsSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ district_key: DistrictKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getDistrictsYearRoute = createRoute({
  method: 'get',
  path: '/districts/{year}',
  tags: ['district'],
  description: 'Gets a list of districts and their corresponding district key, for the given year.',
  operationId: 'getDistrictsByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(DistrictListSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}',
  tags: ['event'],
  description: 'Gets an Event.',
  operationId: 'getEvent',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyAlliancesRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/alliances',
  tags: ['event'],
  description: 'Gets a list of Elimination Alliances for the given Event.',
  operationId: 'getEventAlliances',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EliminationAllianceSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyAwardsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/awards',
  tags: ['event'],
  description: 'Gets a list of awards from the given event.',
  operationId: 'getEventAwards',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(AwardSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyDistrictPointsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/district_points',
  tags: ['event', 'district'],
  description: 'Gets a list of team rankings for the Event.',
  operationId: 'getEventDistrictPoints',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventDistrictPointsSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyInsightsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/insights',
  tags: ['event'],
  description: 'Gets a set of Event-specific insights for the given Event.',
  operationId: 'getEventInsights',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventInsightsSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyMatchesRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/matches',
  tags: ['event', 'match'],
  description: 'Gets a list of matches for the given event.',
  operationId: 'getEventMatches',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MatchSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyMatchesKeysRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/matches/keys',
  tags: ['event', 'match'],
  description: 'Gets a list of match keys for the given event.',
  operationId: 'getEventMatchesKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Match Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyMatchesSimpleRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/matches/simple',
  tags: ['event', 'match'],
  description: 'Gets a short-form list of matches for the given event.',
  operationId: 'getEventMatchesSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MatchSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyMatchesTimeseriesRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/matches/timeseries',
  tags: ['event', 'match'],
  description:
    'Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.\n*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.\n*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.',
  operationId: 'getEventMatchTimeseries',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: z.array(z.string().openapi({ description: 'Match Key' })) },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyOprsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/oprs',
  tags: ['event'],
  description: 'Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.',
  operationId: 'getEventOPRs',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventOPRsSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyPredictionsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/predictions',
  tags: ['event'],
  description:
    'Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.',
  operationId: 'getEventPredictions',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventPredictionsSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyRankingsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/rankings',
  tags: ['event'],
  description: 'Gets a list of team rankings for the Event.',
  operationId: 'getEventRankings',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventRankingSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeySimpleRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/simple',
  tags: ['event'],
  description: 'Gets a short-form Event.',
  operationId: 'getEventSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventSimpleSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyTeamsRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/teams',
  tags: ['event', 'team', 'list'],
  description: 'Gets a list of `Team` objects that competed in the given event.',
  operationId: 'getEventTeams',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyTeamsKeysRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/teams/keys',
  tags: ['event', 'team', 'list'],
  description: 'Gets a list of `Team` keys that competed in the given event.',
  operationId: 'getEventTeamsKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Team Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyTeamsSimpleRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/teams/simple',
  tags: ['event', 'team', 'list'],
  description: 'Gets a short-form list of `Team` objects that competed in the given event.',
  operationId: 'getEventTeamsSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventEventKeyTeamsStatusesRoute = createRoute({
  method: 'get',
  path: '/event/{event_key}/teams/statuses',
  tags: ['event', 'team', 'list'],
  description:
    'Gets a key-value list of the event statuses for teams competing at the given event.',
  operationId: 'getEventTeamsStatuses',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), TeamEventStatusSchema)
            .openapi({
              description:
                'A key-value pair of `Team_Event_Status` objects with the event key as the key.',
            }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventsYearRoute = createRoute({
  method: 'get',
  path: '/events/{year}',
  tags: ['event', 'list'],
  description: 'Gets a list of events in the given year.',
  operationId: 'getEventsByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventsYearKeysRoute = createRoute({
  method: 'get',
  path: '/events/{year}/keys',
  tags: ['event', 'list'],
  description: 'Gets a list of event keys in the given year.',
  operationId: 'getEventsByYearKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Event Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEventsYearSimpleRoute = createRoute({
  method: 'get',
  path: '/events/{year}/simple',
  tags: ['event', 'list'],
  description: 'Gets a short-form list of events in the given year.',
  operationId: 'getEventsByYearSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getMatchMatchKeyRoute = createRoute({
  method: 'get',
  path: '/match/{match_key}',
  tags: ['match'],
  description: 'Gets a `Match` object for the given match key.',
  operationId: 'getMatch',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ match_key: MatchKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatchSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getMatchMatchKeySimpleRoute = createRoute({
  method: 'get',
  path: '/match/{match_key}/simple',
  tags: ['match'],
  description: 'Gets a short-form `Match` object for the given match key.',
  operationId: 'getMatchSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ match_key: MatchKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MatchSimpleSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getMatchMatchKeyTimeseriesRoute = createRoute({
  method: 'get',
  path: '/match/{match_key}/timeseries',
  tags: ['match'],
  description:
    'Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.\n*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.\n*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.',
  operationId: 'getMatchTimeseries',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ match_key: MatchKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(z.object({})) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getMatchMatchKeyZebraMotionworksRoute = createRoute({
  method: 'get',
  path: '/match/{match_key}/zebra_motionworks',
  tags: ['match'],
  description: 'Gets Zebra MotionWorks data for a Match for the given match key.',
  operationId: 'getMatchZebra',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ match_key: MatchKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ZebraSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['TBA'],
  description: 'Returns API status, and TBA status information.',
  operationId: 'getStatus',
  request: { headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: APIStatusSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}',
  tags: ['team'],
  description: 'Gets a `Team` object for the team referenced by the given key.',
  operationId: 'getTeam',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyAwardsRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/awards',
  tags: ['team'],
  description: 'Gets a list of awards the given team has won.',
  operationId: 'getTeamAwards',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(AwardSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyAwardsYearRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/awards/{year}',
  tags: ['team'],
  description: 'Gets a list of awards the given team has won in a given year.',
  operationId: 'getTeamAwardsByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(AwardSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyDistrictsRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/districts',
  tags: ['team', 'district'],
  description:
    'Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.',
  operationId: 'getTeamDistricts',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(DistrictListSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventEventKeyAwardsRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/event/{event_key}/awards',
  tags: ['team', 'event'],
  description: 'Gets a list of awards the given team won at the given event.',
  operationId: 'getTeamEventAwards',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(AwardSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventEventKeyMatchesRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/event/{event_key}/matches',
  tags: ['team', 'event', 'match'],
  description: 'Gets a list of matches for the given team and event.',
  operationId: 'getTeamEventMatches',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MatchSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventEventKeyMatchesKeysRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/event/{event_key}/matches/keys',
  tags: ['team', 'event', 'match'],
  description: 'Gets a list of match keys for matches for the given team and event.',
  operationId: 'getTeamEventMatchesKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Match Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventEventKeyMatchesSimpleRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/event/{event_key}/matches/simple',
  tags: ['team', 'event', 'match'],
  description: 'Gets a short-form list of matches for the given team and event.',
  operationId: 'getTeamEventMatchesSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MatchSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventEventKeyStatusRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/event/{event_key}/status',
  tags: ['team', 'event'],
  description: 'Gets the competition rank and status of the team at the given event.',
  operationId: 'getTeamEventStatus',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, event_key: EventKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamEventStatusSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events',
  tags: ['team', 'event'],
  description: 'Gets a list of all events this team has competed at.',
  operationId: 'getTeamEvents',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsKeysRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events/keys',
  tags: ['team', 'event'],
  description: 'Gets a list of the event keys for all events this team has competed at.',
  operationId: 'getTeamEventsKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Event Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsSimpleRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events/simple',
  tags: ['team', 'event'],
  description: 'Gets a short-form list of all events this team has competed at.',
  operationId: 'getTeamEventsSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsYearRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events/{year}',
  tags: ['team', 'event'],
  description: 'Gets a list of events this team has competed at in the given year.',
  operationId: 'getTeamEventsByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsYearKeysRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events/{year}/keys',
  tags: ['team', 'event'],
  description:
    'Gets a list of the event keys for events this team has competed at in the given year.',
  operationId: 'getTeamEventsByYearKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Event Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsYearSimpleRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events/{year}/simple',
  tags: ['team', 'event'],
  description: 'Gets a short-form list of events this team has competed at in the given year.',
  operationId: 'getTeamEventsByYearSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(EventSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyEventsYearStatusesRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/events/{year}/statuses',
  tags: ['list', 'team', 'event'],
  description:
    'Gets a key-value list of the event statuses for events this team has competed at in the given year.',
  operationId: 'getTeamEventsStatusesByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), TeamEventStatusSchema)
            .openapi({
              description:
                'A key-value pair of `Team_Event_Status` objects with the event key as the key.',
            }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyMatchesYearRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/matches/{year}',
  tags: ['team', 'match'],
  description: 'Gets a list of matches for the given team and year.',
  operationId: 'getTeamMatchesByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MatchSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyMatchesYearKeysRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/matches/{year}/keys',
  tags: ['team', 'match'],
  description: 'Gets a list of match keys for matches for the given team and year.',
  operationId: 'getTeamMatchesByYearKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Match Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyMatchesYearSimpleRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/matches/{year}/simple',
  tags: ['team', 'match'],
  description: 'Gets a short-form list of matches for the given team and year.',
  operationId: 'getTeamMatchesByYearSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MatchSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyMediaTagMediaTagRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/media/tag/{media_tag}',
  tags: ['team'],
  description: 'Gets a list of Media (videos / pictures) for the given team and tag.',
  operationId: 'getTeamMediaByTag',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, media_tag: MediaTagParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MediaSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyMediaTagMediaTagYearRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/media/tag/{media_tag}/{year}',
  tags: ['team'],
  description: 'Gets a list of Media (videos / pictures) for the given team, tag and year.',
  operationId: 'getTeamMediaByTagYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({
      team_key: TeamKeyParamsSchema,
      media_tag: MediaTagParamsSchema,
      year: YearParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MediaSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyMediaYearRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/media/{year}',
  tags: ['team'],
  description: 'Gets a list of Media (videos / pictures) for the given team and year.',
  operationId: 'getTeamMediaByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema, year: YearParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MediaSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyRobotsRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/robots',
  tags: ['team'],
  description:
    'Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.',
  operationId: 'getTeamRobots',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamRobotSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeySimpleRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/simple',
  tags: ['team'],
  description: 'Gets a `Team_Simple` object for the team referenced by the given key.',
  operationId: 'getTeamSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamSimpleSchema } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeySocialMediaRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/social_media',
  tags: ['team'],
  description: 'Gets a list of Media (social media) for the given team.',
  operationId: 'getTeamSocialMedia',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(MediaSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamTeamKeyYearsParticipatedRoute = createRoute({
  method: 'get',
  path: '/team/{team_key}/years_participated',
  tags: ['team'],
  description: 'Gets a list of years in which the team participated in at least one competition.',
  operationId: 'getTeamYearsParticipated',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ team_key: TeamKeyParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(z.int()) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamsPageNumRoute = createRoute({
  method: 'get',
  path: '/teams/{page_num}',
  tags: ['team', 'list'],
  description: 'Gets a list of `Team` objects, paginated in groups of 500.',
  operationId: 'getTeams',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ page_num: PageNumParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamsPageNumKeysRoute = createRoute({
  method: 'get',
  path: '/teams/{page_num}/keys',
  tags: ['team', 'list'],
  description:
    'Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)',
  operationId: 'getTeamsKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ page_num: PageNumParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(z.string()) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamsPageNumSimpleRoute = createRoute({
  method: 'get',
  path: '/teams/{page_num}/simple',
  tags: ['team', 'list'],
  description: 'Gets a list of short form `Team_Simple` objects, paginated in groups of 500.',
  operationId: 'getTeamsSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ page_num: PageNumParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamsYearPageNumRoute = createRoute({
  method: 'get',
  path: '/teams/{year}/{page_num}',
  tags: ['team', 'list'],
  description:
    'Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.',
  operationId: 'getTeamsByYear',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema, page_num: PageNumParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamsYearPageNumKeysRoute = createRoute({
  method: 'get',
  path: '/teams/{year}/{page_num}/keys',
  tags: ['team', 'list'],
  description: 'Gets a list Team Keys that competed in the given year, paginated in groups of 500.',
  operationId: 'getTeamsByYearKeys',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema, page_num: PageNumParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'Array of Team Keys' }),
        },
      },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})

export const getTeamsYearPageNumSimpleRoute = createRoute({
  method: 'get',
  path: '/teams/{year}/{page_num}/simple',
  tags: ['team', 'list'],
  description:
    'Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.',
  operationId: 'getTeamsByYearSimple',
  request: {
    headers: z.object({ 'If-None-Match': IfNoneMatchParamsSchema }),
    params: z.object({ year: YearParamsSchema, page_num: PageNumParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(TeamSimpleSchema) } },
      headers: z.object({
        'Cache-Control': {
          description:
            'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The `Cache-Control` header, in particular the `max-age` value, contains the number of seconds the result should be considered valid for. During this time subsequent calls should return from the local cache directly.',
              param: { required: false },
            }),
        },
        ETag: {
          description:
            'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Specifies the version of the most recent response. Used by clients in the `If-None-Match` request header.',
              param: { required: false },
            }),
        },
      }),
    },
    304: NotModifiedResponse,
    401: UnauthorizedResponse,
  },
  security: [{ apiKey: [] }],
})
