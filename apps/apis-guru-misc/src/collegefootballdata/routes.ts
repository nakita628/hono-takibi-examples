import { createRoute, z } from '@hono/zod-openapi'

const AdvancedGameStatSchema = z
  .object({
    defense: z
      .object({
        drives: z.int().exactOptional(),
        explosiveness: z.number().exactOptional(),
        lineYards: z.number().exactOptional(),
        lineYardsTotal: z.number().exactOptional(),
        openFieldYards: z.number().exactOptional(),
        openFieldYardsTotal: z.int().exactOptional(),
        passingDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        passingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        plays: z.int().exactOptional(),
        powerSuccess: z.number().exactOptional(),
        ppa: z.number().exactOptional(),
        rushingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        secondLevelYards: z.number().exactOptional(),
        secondLevelYardsTotal: z.int().exactOptional(),
        standardDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        stuffRate: z.number().exactOptional(),
        successRate: z.number().exactOptional(),
        totalPPA: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    gameId: z.int().exactOptional(),
    offense: z
      .object({
        drives: z.int().exactOptional(),
        explosiveness: z.number().exactOptional(),
        lineYards: z.number().exactOptional(),
        lineYardsTotal: z.number().exactOptional(),
        openFieldYards: z.number().exactOptional(),
        openFieldYardsTotal: z.int().exactOptional(),
        passingDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        passingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        plays: z.int().exactOptional(),
        powerSuccess: z.number().exactOptional(),
        ppa: z.number().exactOptional(),
        rushingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        secondLevelYards: z.number().exactOptional(),
        secondLevelYardsTotal: z.int().exactOptional(),
        standardDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        stuffRate: z.number().exactOptional(),
        successRate: z.number().exactOptional(),
        totalPPA: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    opponent: z.string().exactOptional(),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdvancedGameStat')

const AdvancedSeasonStatSchema = z
  .object({
    conference: z.string().exactOptional(),
    defense: z
      .object({
        drives: z.int().exactOptional(),
        explosiveness: z.number().exactOptional(),
        fieldPosition: z
          .object({
            averagePredictedPoints: z.number().exactOptional(),
            averageStart: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        havoc: z
          .object({
            db: z.number().exactOptional(),
            frontSeven: z.number().exactOptional(),
            total: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        lineYards: z.number().exactOptional(),
        lineYardsTotal: z.number().exactOptional(),
        openFieldYards: z.number().exactOptional(),
        openFieldYardsTotal: z.int().exactOptional(),
        passingDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        passingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        plays: z.int().exactOptional(),
        pointsPerOpportunity: z.number().exactOptional(),
        powerSuccess: z.number().exactOptional(),
        ppa: z.number().exactOptional(),
        rushingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        secondLevelYards: z.number().exactOptional(),
        secondLevelYardsTotal: z.int().exactOptional(),
        standardDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        stuffRate: z.number().exactOptional(),
        successRate: z.number().exactOptional(),
        totalOpportunies: z.int().exactOptional(),
        totalPPA: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    offense: z
      .object({
        drives: z.int().exactOptional(),
        explosiveness: z.number().exactOptional(),
        fieldPosition: z
          .object({
            averagePredictedPoints: z.number().exactOptional(),
            averageStart: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        havoc: z
          .object({
            db: z.number().exactOptional(),
            frontSeven: z.number().exactOptional(),
            total: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        lineYards: z.number().exactOptional(),
        lineYardsTotal: z.number().exactOptional(),
        openFieldYards: z.number().exactOptional(),
        openFieldYardsTotal: z.int().exactOptional(),
        passingDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        passingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        plays: z.int().exactOptional(),
        pointsPerOpportunity: z.number().exactOptional(),
        powerSuccess: z.number().exactOptional(),
        ppa: z.number().exactOptional(),
        rushingPlays: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            totalPPA: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        secondLevelYards: z.number().exactOptional(),
        secondLevelYardsTotal: z.int().exactOptional(),
        standardDowns: z
          .object({
            explosiveness: z.number().exactOptional(),
            ppa: z.number().exactOptional(),
            rate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        stuffRate: z.number().exactOptional(),
        successRate: z.number().exactOptional(),
        totalOpportunies: z.int().exactOptional(),
        totalPPA: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdvancedSeasonStat')

const BoxScoreSchema = z
  .object({
    players: z
      .object({
        ppa: z
          .array(
            z
              .object({
                average: z
                  .object({
                    passing: z.number().exactOptional(),
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    rushing: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                cumulative: z
                  .object({
                    passing: z.number().exactOptional(),
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    rushing: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                player: z.string().exactOptional(),
                position: z.string().exactOptional(),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        usage: z
          .array(
            z
              .object({
                passing: z.number().exactOptional(),
                player: z.string().exactOptional(),
                position: z.string().exactOptional(),
                quarter1: z.number().exactOptional(),
                quarter2: z.number().exactOptional(),
                quarter3: z.number().exactOptional(),
                quarter4: z.number().exactOptional(),
                rushing: z.number().exactOptional(),
                team: z.string().exactOptional(),
                total: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    teams: z
      .object({
        cumulativePpa: z
          .array(
            z
              .object({
                overall: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                passing: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                plays: z.number().exactOptional(),
                rushing: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        explosiveness: z
          .array(
            z
              .object({
                overall: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        fieldPosition: z
          .array(
            z
              .object({
                averageStart: z.number().exactOptional(),
                averageStartingPredictedPoints: z.number().exactOptional(),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        havoc: z
          .array(
            z
              .object({
                db: z.number().exactOptional(),
                frontSeven: z.number().exactOptional(),
                team: z.string().exactOptional(),
                total: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        ppa: z
          .array(
            z
              .object({
                overall: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                passing: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                plays: z.number().exactOptional(),
                rushing: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        rushing: z
          .array(
            z
              .object({
                lineYards: z.number().exactOptional(),
                lineYardsAverage: z.number().exactOptional(),
                openFieldYards: z.int().exactOptional(),
                openFieldYardsAverage: z.number().exactOptional(),
                powerSuccess: z.number().exactOptional(),
                secondLevelYards: z.int().exactOptional(),
                secondLevelYardsAverage: z.number().exactOptional(),
                stuffRate: z.number().exactOptional(),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        scoringOpportunities: z
          .array(
            z
              .object({
                opportunities: z.int().exactOptional(),
                points: z.int().exactOptional(),
                pointsPerOpportunity: z.number().exactOptional(),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        successRates: z
          .array(
            z
              .object({
                overall: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                passingDowns: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                standardDowns: z
                  .object({
                    quarter1: z.number().exactOptional(),
                    quarter2: z.number().exactOptional(),
                    quarter3: z.number().exactOptional(),
                    quarter4: z.number().exactOptional(),
                    total: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                team: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('BoxScore')

const CoachSchema = z
  .object({
    first_name: z.string().exactOptional(),
    hire_date: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    seasons: z
      .array(
        z
          .object({
            games: z.int().exactOptional(),
            losses: z.int().exactOptional(),
            postseason_rank: z
              .int()
              .exactOptional()
              .openapi({ description: 'Final ranking in the AP poll' }),
            preseason_rank: z
              .int()
              .exactOptional()
              .openapi({ description: 'Rank in the AP preseason poll' }),
            school: z.string().exactOptional(),
            sp_defense: z
              .number()
              .exactOptional()
              .openapi({ description: 'Final SP+ defensive rating' }),
            sp_offense: z
              .number()
              .exactOptional()
              .openapi({ description: 'Final SP+ offensive rating' }),
            sp_overall: z
              .number()
              .exactOptional()
              .openapi({ description: 'Final overall SP+ rating' }),
            srs: z.number().exactOptional().openapi({ description: 'Final SRS rankings' }),
            ties: z.int().exactOptional(),
            wins: z.int().exactOptional(),
            year: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Coach')

const ConferenceSchema = z
  .object({
    abbreviation: z.string().exactOptional(),
    classification: z.string().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    short_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Conference')

const ConferenceSPRatingSchema = z
  .object({
    conference: z.string().exactOptional(),
    defense: z
      .object({
        explosiveness: z.number().exactOptional(),
        havoc: z
          .object({
            db: z.number().exactOptional(),
            frontSeven: z.number().exactOptional(),
            total: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        pasing: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        rating: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        success: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    offense: z
      .object({
        explosiveness: z.number().exactOptional(),
        pace: z.number().exactOptional(),
        passing: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        rating: z.number().exactOptional(),
        runRate: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        success: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    rating: z.number().exactOptional(),
    secondOrderWins: z.number().exactOptional(),
    sos: z.number().exactOptional(),
    specialTeams: z
      .object({ rating: z.number().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConferenceSPRating')

const DraftPickSchema = z
  .object({
    collegeAthleteId: z.int().exactOptional(),
    collegeConference: z.string().exactOptional(),
    collegeId: z.int().exactOptional(),
    collegeTeam: z.string().exactOptional(),
    height: z.int().exactOptional(),
    hometownInfo: z
      .object({
        city: z.string().exactOptional(),
        country: z.string().exactOptional(),
        countryFips: z.int().exactOptional(),
        latitude: z.number().exactOptional(),
        longitude: z.number().exactOptional(),
        state: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    nflAthleteId: z.int().exactOptional(),
    nflTeam: z.string().exactOptional(),
    overall: z.int().exactOptional(),
    pick: z.int().exactOptional(),
    position: z.string().exactOptional(),
    preDraftGrade: z.int().exactOptional(),
    preDraftPositionRanking: z.int().exactOptional(),
    preDraftRanking: z.int().exactOptional(),
    round: z.int().exactOptional(),
    weight: z.int().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DraftPick')

const DraftPositionSchema = z
  .object({ abbreviation: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DraftPosition')

const DraftTeamSchema = z
  .object({
    displayName: z.string().exactOptional(),
    location: z.string().exactOptional(),
    logo: z.string().exactOptional(),
    nickname: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DraftTeam')

const DriveSchema = z
  .object({
    defense: z.string().exactOptional(),
    defense_conference: z.string().exactOptional(),
    drive_number: z.int().exactOptional(),
    drive_result: z.string().exactOptional(),
    end_defense_score: z.int().exactOptional(),
    end_offense_score: z.int().exactOptional(),
    end_period: z.int().exactOptional(),
    end_time: z
      .object({ minutes: z.int().exactOptional(), seconds: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    end_yardline: z.int().exactOptional(),
    end_yards_to_goal: z.int().exactOptional(),
    game_id: z.int().exactOptional(),
    id: z.int().exactOptional(),
    is_home_offense: z.boolean().exactOptional(),
    offense: z.string().exactOptional(),
    offense_conference: z.string().exactOptional(),
    plays: z.int().exactOptional(),
    scoring: z.boolean().exactOptional(),
    start_defense_score: z.int().exactOptional(),
    start_offense_score: z.int().exactOptional(),
    start_period: z.int().exactOptional(),
    start_time: z
      .object({ minutes: z.int().exactOptional(), seconds: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    start_yardline: z.int().exactOptional(),
    start_yards_to_goal: z.int().exactOptional(),
    yards: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Drive')

const GameSchema = z
  .object({
    attendance: z.int().exactOptional(),
    away_conference: z.string().exactOptional(),
    away_division: z.string().exactOptional(),
    away_id: z.int().exactOptional(),
    away_line_scores: z.array(z.int()).exactOptional(),
    away_points: z.int().exactOptional(),
    away_post_win_prob: z.number().exactOptional(),
    away_postgame_elo: z.int().exactOptional(),
    away_pregame_elo: z.int().exactOptional(),
    away_team: z.string().exactOptional(),
    completed: z.boolean().exactOptional(),
    conference_game: z.boolean().exactOptional(),
    excitement_index: z.number().exactOptional(),
    highlights: z.string().exactOptional(),
    home_conference: z.string().exactOptional(),
    home_division: z.string().exactOptional(),
    home_id: z.int().exactOptional(),
    home_line_scores: z.array(z.int()).exactOptional(),
    home_points: z.int().exactOptional(),
    home_post_win_prob: z.number().exactOptional(),
    home_postgame_elo: z.int().exactOptional(),
    home_pregame_elo: z.int().exactOptional(),
    home_team: z.string().exactOptional(),
    id: z.int().exactOptional(),
    neutral_site: z.boolean().exactOptional(),
    notes: z.string().exactOptional(),
    season: z.int().exactOptional(),
    season_type: z.string().exactOptional(),
    start_date: z.string().exactOptional(),
    start_time_tbd: z.boolean().exactOptional(),
    venue: z.string().exactOptional(),
    venue_id: z.int().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const GameLinesSchema = z
  .object({
    awayConference: z.string().exactOptional(),
    awayScore: z.int().exactOptional(),
    awayTeam: z.string().exactOptional(),
    homeConference: z.string().exactOptional(),
    homeScore: z.int().exactOptional(),
    homeTeam: z.string().exactOptional(),
    id: z.int().exactOptional(),
    lines: z
      .array(
        z
          .object({
            awayMoneyline: z.number().exactOptional(),
            formattedSpread: z.string().exactOptional(),
            homeMoneyline: z.number().exactOptional(),
            overUnder: z.number().exactOptional(),
            overUnderOpen: z.number().exactOptional(),
            provider: z.string().exactOptional(),
            spread: z.number().exactOptional(),
            spreadOpen: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    season: z.int().exactOptional(),
    seasonType: z.string().exactOptional(),
    startDate: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GameLines')

const GameMediaSchema = z
  .object({
    awayConference: z.string().exactOptional(),
    awayTeam: z.string().exactOptional(),
    homeConference: z.string().exactOptional(),
    homeTeam: z.string().exactOptional(),
    id: z.int().exactOptional(),
    isStartTimeTBD: z.boolean().exactOptional(),
    mediaType: z.string().exactOptional(),
    outlet: z.string().exactOptional(),
    season: z.int().exactOptional(),
    seasonType: z.string().exactOptional(),
    startTime: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GameMedia')

const GamePPASchema = z
  .object({
    conference: z.string().exactOptional(),
    defense: z
      .object({
        firstDown: z.number().exactOptional(),
        overall: z.number().exactOptional(),
        passing: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    gameId: z.int().exactOptional(),
    offense: z
      .object({
        firstDown: z.number().exactOptional(),
        overall: z.number().exactOptional(),
        passing: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    opponent: z.string().exactOptional(),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GamePPA')

const GameWeatherSchema = z
  .object({
    awayConference: z.string().exactOptional(),
    awayTeam: z.string().exactOptional(),
    dewPoint: z.number().exactOptional(),
    gameIndoors: z.boolean().exactOptional(),
    homeConference: z.string().exactOptional(),
    homeTeam: z.string().exactOptional(),
    humidity: z.number().exactOptional(),
    id: z.int().exactOptional(),
    precipitation: z.number().exactOptional(),
    pressure: z.number().exactOptional(),
    season: z.int().exactOptional(),
    seasonType: z.string().exactOptional(),
    snowfall: z.number().exactOptional(),
    startTime: z.string().exactOptional(),
    temperature: z.number().exactOptional(),
    venue: z.string().exactOptional(),
    venueId: z.int().exactOptional(),
    weatherCondition: z.string().exactOptional(),
    weatherConditionCode: z.int().exactOptional(),
    week: z.int().exactOptional(),
    windDirection: z.number().exactOptional(),
    windSpeed: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GameWeather')

const LivePlayByPlaySchema = z
  .object({
    clock: z.string().exactOptional(),
    distance: z.int().exactOptional(),
    down: z.int().exactOptional(),
    drives: z
      .array(
        z
          .object({
            defense: z.string().exactOptional(),
            defenseId: z.int().exactOptional(),
            duration: z.string().exactOptional(),
            endClock: z.string().exactOptional(),
            endPeriod: z.int().exactOptional(),
            endYardsToGoal: z.int().exactOptional(),
            id: z.int().exactOptional(),
            offense: z.string().exactOptional(),
            offenseId: z.int().exactOptional(),
            playCount: z.int().exactOptional(),
            plays: z
              .array(
                z
                  .object({
                    awayScore: z.int().exactOptional(),
                    clock: z.string().exactOptional(),
                    distance: z.int().exactOptional(),
                    down: z.int().exactOptional(),
                    downType: z.string().exactOptional(),
                    epa: z.number().exactOptional(),
                    garbageTime: z.boolean().exactOptional(),
                    homeScore: z.int().exactOptional(),
                    id: z.int().exactOptional(),
                    period: z.int().exactOptional(),
                    playText: z.string().exactOptional(),
                    playType: z.string().exactOptional(),
                    playTypeId: z.int().exactOptional(),
                    rushPass: z.string().exactOptional(),
                    success: z.boolean().exactOptional(),
                    team: z.string().exactOptional(),
                    teamId: z.int().exactOptional(),
                    wallclock: z.string().exactOptional(),
                    yardsGained: z.int().exactOptional(),
                    yardsToGoal: z.int().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            scoringOpportunity: z.boolean().exactOptional(),
            startClock: z.string().exactOptional(),
            startPeriod: z.int().exactOptional(),
            startYardsToGoal: z.int().exactOptional(),
            yards: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    id: z.int().exactOptional(),
    period: z.int().exactOptional(),
    possession: z.string().exactOptional(),
    status: z.string().exactOptional(),
    teams: z
      .array(
        z
          .object({
            drives: z.int().exactOptional(),
            epaPerPass: z.number().exactOptional(),
            epaPerPlay: z.number().exactOptional(),
            epaPerRush: z.number().exactOptional(),
            explosiveness: z.number().exactOptional(),
            homeAway: z.string().exactOptional(),
            lineYards: z.int().exactOptional(),
            lineYardsPerRush: z.number().exactOptional(),
            openFieldYards: z.int().exactOptional(),
            openFieldYardsPerRush: z.number().exactOptional(),
            passingDownSuccessRate: z.number().exactOptional(),
            passingEpa: z.number().exactOptional(),
            plays: z.int().exactOptional(),
            points: z.int().exactOptional(),
            pointsPerOpportunity: z.number().exactOptional(),
            rushingEpa: z.number().exactOptional(),
            scoringOpportunities: z.int().exactOptional(),
            secondLevelYards: z.int().exactOptional(),
            secondLevelYardsPerRush: z.number().exactOptional(),
            standardDownSuccessRate: z.number().exactOptional(),
            successRate: z.number().exactOptional(),
            team: z.string().exactOptional(),
            teamId: z.int().exactOptional(),
            totalEpa: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    yardsToGoal: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LivePlayByPlay')

const PlaySchema = z
  .object({
    away: z.string().exactOptional(),
    clock: z
      .object({ minutes: z.int().exactOptional(), seconds: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    defense: z.string().exactOptional(),
    defense_conference: z.string().exactOptional(),
    defense_score: z.int().exactOptional(),
    defense_timeouts: z.int().exactOptional(),
    distance: z.int().exactOptional(),
    down: z.int().exactOptional(),
    drive_id: z.int().exactOptional(),
    drive_number: z.int().exactOptional(),
    game_id: z.int().exactOptional(),
    home: z.string().exactOptional(),
    id: z.int().exactOptional(),
    offense: z.string().exactOptional(),
    offense_conference: z.string().exactOptional(),
    offense_score: z.int().exactOptional(),
    offense_timeouts: z.int().exactOptional(),
    period: z.int().exactOptional(),
    play_number: z.int().exactOptional(),
    play_text: z.string().exactOptional(),
    play_type: z.string().exactOptional(),
    ppa: z.number().exactOptional(),
    scoring: z.boolean().exactOptional(),
    wallclock: z.string().exactOptional(),
    yard_line: z.int().exactOptional(),
    yards_gained: z.int().exactOptional(),
    yards_to_goal: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Play')

const PlayStatSchema = z
  .object({
    athleteId: z.int().exactOptional(),
    athleteName: z.string().exactOptional(),
    clock: z
      .object({ minutes: z.int().exactOptional(), seconds: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    conference: z.string().exactOptional(),
    distance: z.int().exactOptional(),
    down: z.int().exactOptional(),
    driveId: z.int().exactOptional(),
    gameId: z.int().exactOptional(),
    opponent: z.string().exactOptional(),
    opponentScore: z.int().exactOptional(),
    period: z.int().exactOptional(),
    playId: z.int().exactOptional(),
    season: z.int().exactOptional(),
    stat: z.int().exactOptional(),
    statType: z.string().exactOptional(),
    team: z.string().exactOptional(),
    teamScore: z.int().exactOptional(),
    week: z.int().exactOptional(),
    yardsToGoal: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayStat')

const PlayStatTypeSchema = z
  .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PlayStatType')

const PlayTypeSchema = z
  .object({
    abbreviation: z.string().exactOptional(),
    id: z.int().exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayType')

const PlayWPSchema = z
  .object({
    away: z.string().exactOptional(),
    awayId: z.int().exactOptional(),
    awayScore: z.int().exactOptional(),
    distance: z.int().exactOptional(),
    down: z.int().exactOptional(),
    gamesId: z.int().exactOptional(),
    home: z.string().exactOptional(),
    homeBall: z.boolean().exactOptional(),
    homeId: z.int().exactOptional(),
    homeScore: z.int().exactOptional(),
    homeWinProb: z.number().exactOptional(),
    playId: z.int().exactOptional(),
    playNumber: z.int().exactOptional(),
    playText: z.string().exactOptional(),
    spread: z.number().exactOptional(),
    timeRemaining: z.int().exactOptional(),
    yardLine: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayWP')

const PlayerSchema = z
  .object({
    first_name: z.string().exactOptional(),
    height: z.int().exactOptional(),
    home_city: z.string().exactOptional(),
    home_country: z.string().exactOptional(),
    home_county_fips: z.string().exactOptional(),
    home_latitude: z.number().exactOptional(),
    home_longitude: z.number().exactOptional(),
    home_state: z.string().exactOptional(),
    id: z.int().exactOptional(),
    jersey: z.int().exactOptional(),
    last_name: z.string().exactOptional(),
    position: z.string().exactOptional(),
    recruit_ids: z.array(z.int()).exactOptional(),
    team: z.string().exactOptional(),
    weight: z.int().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const PlayerGameSchema = z
  .object({
    id: z.int().exactOptional(),
    teams: z
      .array(
        z
          .object({
            categories: z
              .array(
                z
                  .object({
                    name: z.string().exactOptional(),
                    types: z
                      .array(
                        z
                          .object({
                            athletes: z
                              .array(
                                z
                                  .object({
                                    id: z.int().exactOptional(),
                                    name: z.string().exactOptional(),
                                    stat: z.string().exactOptional(),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional(),
                            name: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            homeAway: z.boolean().exactOptional(),
            points: z.int().exactOptional(),
            school: z
              .object({ conference: z.string().exactOptional(), name: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGame')

const PlayerGamePPASchema = z
  .object({
    averagePPA: z
      .object({
        all: z.number().exactOptional(),
        pass: z.number().exactOptional(),
        rush: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    opponent: z.string().exactOptional(),
    position: z.string().exactOptional(),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGamePPA')

const PlayerSearchResultSchema = z
  .object({
    firstName: z.string().exactOptional(),
    height: z.int().exactOptional(),
    hometown: z.string().exactOptional(),
    id: z.int().exactOptional(),
    jersey: z.int().exactOptional(),
    lastName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    position: z.string().exactOptional(),
    team: z.string().exactOptional(),
    teamColor: z.string().exactOptional(),
    teamColorSecondary: z.string().exactOptional(),
    weight: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSearchResult')

const PlayerSeasonPPASchema = z
  .object({
    averagePPA: z
      .object({
        all: z.number().exactOptional(),
        firstDown: z.number().exactOptional(),
        pass: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        rush: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    conference: z.string().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    position: z.string().exactOptional(),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
    totalPPA: z
      .object({
        all: z.number().exactOptional(),
        firstDown: z.number().exactOptional(),
        pass: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        rush: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonPPA')

const PlayerSeasonStatSchema = z
  .object({
    category: z.string().exactOptional(),
    conference: z.string().exactOptional(),
    player: z.string().exactOptional(),
    playerId: z.int().exactOptional(),
    season: z.int().exactOptional(),
    stat: z.number().exactOptional(),
    statType: z.string().exactOptional(),
    team: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonStat')

const PlayerUsageSchema = z
  .object({
    conference: z.string().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    position: z.string().exactOptional(),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
    usage: z
      .object({
        firstDown: z.number().exactOptional(),
        overall: z.number().exactOptional(),
        pass: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        rush: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PlayerUsage')

const PortalPlayerSchema = z
  .object({
    destination: z.string().exactOptional(),
    eligibility: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    origin: z.string().exactOptional(),
    position: z.string().exactOptional(),
    rating: z.number().exactOptional(),
    season: z.int().exactOptional(),
    stars: z.int().exactOptional(),
    transferDate: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortalPlayer')

const PositionGroupRecruitingRatingSchema = z
  .object({
    averageRating: z.number().exactOptional(),
    averageStars: z.number().exactOptional(),
    commits: z.number().exactOptional(),
    conference: z.string().exactOptional(),
    positionGroup: z.string().exactOptional(),
    team: z.string().exactOptional(),
    totalRating: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PositionGroupRecruitingRating')

const PredictedPointsSchema = z
  .object({ predictedPoints: z.number().exactOptional(), yardLine: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('PredictedPoints')

const PregameWPSchema = z
  .object({
    awayTeam: z.string().exactOptional(),
    gameId: z.int().exactOptional(),
    homeTeam: z.string().exactOptional(),
    homeWinProb: z.number().exactOptional(),
    season: z.int().exactOptional(),
    seasonType: z.string().exactOptional(),
    spread: z.number().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PregameWP')

const RankingWeekSchema = z
  .object({
    polls: z
      .array(
        z
          .object({
            poll: z.string().exactOptional(),
            ranks: z
              .array(
                z
                  .object({
                    conference: z.string().exactOptional(),
                    firstPlaceVotes: z.int().exactOptional(),
                    points: z.int().exactOptional(),
                    rank: z.int().exactOptional(),
                    school: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    season: z.int().exactOptional(),
    seasonType: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RankingWeek')

const RecruitSchema = z
  .object({
    athleteId: z.int().exactOptional(),
    city: z.string().exactOptional(),
    committedTo: z.string().exactOptional(),
    country: z.string().exactOptional(),
    height: z.number().exactOptional(),
    hometownInfo: z
      .object({
        countyFips: z.string().exactOptional(),
        latitude: z.number().exactOptional(),
        longitude: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    position: z.string().exactOptional(),
    ranking: z.int().exactOptional(),
    rating: z.number().exactOptional(),
    recruitType: z.string().exactOptional(),
    school: z.string().exactOptional(),
    stars: z.int().exactOptional(),
    stateProvince: z.string().exactOptional(),
    weight: z.int().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Recruit')

const ReturningProductionSchema = z
  .object({
    conference: z.string().exactOptional(),
    passingUsage: z.number().exactOptional(),
    percentPPA: z.number().exactOptional(),
    percentPassingPPA: z.number().exactOptional(),
    percentReceivingPPA: z.number().exactOptional(),
    percentRushingPPA: z.number().exactOptional(),
    receivingUsage: z.number().exactOptional(),
    rushingUsage: z.number().exactOptional(),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
    totalPPA: z.number().exactOptional(),
    totalPassingPPA: z.number().exactOptional(),
    totalReceivingPPA: z.number().exactOptional(),
    totalRushingPPA: z.number().exactOptional(),
    usage: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReturningProduction')

const ScoreboardGameSchema = z
  .object({
    awayTeam: z
      .object({
        classification: z.string().exactOptional(),
        conference: z.string().exactOptional(),
        id: z.int().exactOptional(),
        name: z.string().exactOptional(),
        points: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    betting: z
      .object({
        awayMoneyline: z.int().exactOptional(),
        homeMoneyline: z.int().exactOptional(),
        overUnder: z.number().exactOptional(),
        spread: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    clock: z.string().exactOptional(),
    conferenceGame: z.boolean().exactOptional(),
    homeTeam: z
      .object({
        classification: z.string().exactOptional(),
        conference: z.string().exactOptional(),
        id: z.int().exactOptional(),
        name: z.string().exactOptional(),
        points: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z.int().exactOptional(),
    neutralSite: z.boolean().exactOptional(),
    period: z.int().exactOptional(),
    possession: z.string().exactOptional(),
    situation: z.string().exactOptional(),
    startDate: z.string().exactOptional(),
    startTimeTBD: z.boolean().exactOptional(),
    status: z.string().exactOptional(),
    tv: z.string().exactOptional(),
    venue: z
      .object({
        city: z.string().exactOptional(),
        name: z.string().exactOptional(),
        state: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    weather: z
      .object({
        description: z.string().exactOptional(),
        temperature: z.number().exactOptional(),
        windDirection: z.number().exactOptional(),
        windSpeed: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ScoreboardGame')

const TeamSchema = z
  .object({
    abbreviation: z.string().exactOptional(),
    alt_color: z.string().exactOptional(),
    alt_name_1: z.string().exactOptional(),
    alt_name_2: z.string().exactOptional(),
    alt_name_3: z.string().exactOptional(),
    classification: z.string().exactOptional(),
    color: z.string().exactOptional(),
    conference: z.string().exactOptional(),
    division: z.string().exactOptional(),
    id: z.int().exactOptional(),
    location: z
      .object({
        capacity: z.number().exactOptional(),
        city: z.string().exactOptional(),
        country_code: z.string().exactOptional(),
        dome: z.boolean().exactOptional(),
        elevation: z.number().exactOptional(),
        grass: z.boolean().exactOptional(),
        latitude: z.number().exactOptional(),
        longitude: z.number().exactOptional(),
        name: z.string().exactOptional(),
        state: z.string().exactOptional(),
        timezone: z.string().exactOptional(),
        venue_id: z.int().exactOptional(),
        year_constructed: z.number().exactOptional(),
        zip: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    logos: z.array(z.string()).exactOptional(),
    mascot: z.string().exactOptional(),
    school: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const TeamEloRatingSchema = z
  .object({
    conference: z.string().exactOptional(),
    elo: z.number().exactOptional(),
    team: z.string().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamEloRating')

const TeamGameSchema = z
  .object({
    id: z.int().exactOptional(),
    teams: z
      .array(
        z
          .object({
            conference: z.string().exactOptional(),
            homeAway: z.string().exactOptional(),
            points: z.int().exactOptional(),
            school: z.string().exactOptional(),
            stats: z
              .array(
                z
                  .object({
                    category: z.string().exactOptional(),
                    stat: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const TeamMatchupSchema = z
  .object({
    endYear: z.int().exactOptional(),
    games: z
      .array(
        z
          .object({
            awayScore: z.int().exactOptional(),
            awayTeam: z.string().exactOptional(),
            date: z.string().exactOptional(),
            homeScore: z.int().exactOptional(),
            homeTeam: z.string().exactOptional(),
            neutralSite: z.boolean().exactOptional(),
            season: z.int().exactOptional(),
            season_type: z.string().exactOptional(),
            venue: z.string().exactOptional(),
            week: z.int().exactOptional(),
            winner: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    startYear: z.int().exactOptional(),
    team1: z.string().exactOptional(),
    team1Wins: z.int().exactOptional(),
    team2: z.string().exactOptional(),
    team2Wins: z.int().exactOptional(),
    ties: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamMatchup')

const TeamPPASchema = z
  .object({
    conference: z.string().exactOptional(),
    defense: z
      .object({
        cumulative: z
          .object({
            passing: z.number().exactOptional(),
            rushing: z.number().exactOptional(),
            total: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        firstDown: z.number().exactOptional(),
        overall: z.number().exactOptional(),
        passing: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    offense: z
      .object({
        cumulative: z
          .object({
            passing: z.number().exactOptional(),
            rushing: z.number().exactOptional(),
            total: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        firstDown: z.number().exactOptional(),
        overall: z.number().exactOptional(),
        passing: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        secondDown: z.number().exactOptional(),
        thirdDown: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    season: z.int().exactOptional(),
    team: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamPPA')

const TeamRecordSchema = z
  .object({
    awayGames: z
      .object({
        games: z.int().exactOptional(),
        losses: z.int().exactOptional(),
        ties: z.int().exactOptional(),
        wins: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    conference: z.string().exactOptional(),
    conferenceGames: z
      .object({
        games: z.int().exactOptional(),
        losses: z.int().exactOptional(),
        ties: z.int().exactOptional(),
        wins: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    division: z.string().exactOptional(),
    expectedWins: z.number().exactOptional(),
    homeGames: z
      .object({
        games: z.int().exactOptional(),
        losses: z.int().exactOptional(),
        ties: z.int().exactOptional(),
        wins: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    team: z.string().exactOptional(),
    total: z
      .object({
        games: z.int().exactOptional(),
        losses: z.int().exactOptional(),
        ties: z.int().exactOptional(),
        wins: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamRecord')

const TeamRecruitingRankSchema = z
  .object({
    points: z.number().exactOptional(),
    rank: z.int().exactOptional(),
    team: z.string().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamRecruitingRank')

const TeamSPRatingSchema = z
  .object({
    conference: z.string().exactOptional(),
    defense: z
      .object({
        explosiveness: z.number().exactOptional(),
        havoc: z
          .object({
            db: z.number().exactOptional(),
            frontSeven: z.number().exactOptional(),
            total: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        pasing: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        ranking: z.number().exactOptional(),
        rating: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        success: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    offense: z
      .object({
        explosiveness: z.number().exactOptional(),
        pace: z.number().exactOptional(),
        passing: z.number().exactOptional(),
        passingDowns: z.number().exactOptional(),
        ranking: z.number().exactOptional(),
        rating: z.number().exactOptional(),
        runRate: z.number().exactOptional(),
        rushing: z.number().exactOptional(),
        standardDowns: z.number().exactOptional(),
        success: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    ranking: z.number().exactOptional(),
    rating: z.number().exactOptional(),
    secondOrderWins: z.number().exactOptional(),
    sos: z.number().exactOptional(),
    specialTeams: z
      .object({ rating: z.number().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    team: z.string().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSPRating')

const TeamSRSRatingSchema = z
  .object({
    conference: z.string().exactOptional(),
    division: z.string().exactOptional(),
    ranking: z.number().exactOptional(),
    rating: z.number().exactOptional(),
    team: z.string().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSRSRating')

const TeamSeasonSchema = z
  .object({
    games: z.int().exactOptional(),
    losses: z.int().exactOptional(),
    postseason_rank: z
      .int()
      .exactOptional()
      .openapi({ description: 'Final ranking in the AP poll' }),
    preseason_rank: z
      .int()
      .exactOptional()
      .openapi({ description: 'Rank in the AP preseason poll' }),
    school: z.string().exactOptional(),
    sp_defense: z.number().exactOptional().openapi({ description: 'Final SP+ defensive rating' }),
    sp_offense: z.number().exactOptional().openapi({ description: 'Final SP+ offensive rating' }),
    sp_overall: z.number().exactOptional().openapi({ description: 'Final overall SP+ rating' }),
    srs: z.number().exactOptional().openapi({ description: 'Final SRS rankings' }),
    ties: z.int().exactOptional(),
    wins: z.int().exactOptional(),
    year: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSeason')

const TeamSeasonStatSchema = z
  .object({
    conference: z.string().exactOptional(),
    season: z.int().exactOptional(),
    statName: z.string().exactOptional(),
    statValue: z.int().exactOptional(),
    team: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSeasonStat')

const TeamTalentSchema = z
  .object({
    school: z.string().exactOptional(),
    talent: z.number().exactOptional(),
    year: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamTalent')

const VenueSchema = z
  .object({
    capacity: z.int().exactOptional(),
    city: z.string().exactOptional(),
    country_code: z.string().exactOptional(),
    dome: z.boolean().exactOptional(),
    elevation: z.number().exactOptional(),
    grass: z.boolean().exactOptional(),
    id: z.int().exactOptional(),
    location: z
      .object({ x: z.number().exactOptional(), y: z.number().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    state: z.string().exactOptional(),
    timezone: z.string().exactOptional(),
    year_constructed: z.int().exactOptional(),
    zip: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Venue')

const WeekSchema = z
  .object({
    firstGameStart: z.string().exactOptional(),
    lastGameStart: z.string().exactOptional(),
    season: z.int().exactOptional(),
    seasonType: z.string().exactOptional(),
    week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Week')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getCalendarRoute = createRoute({
  method: 'get',
  path: '/calendar',
  tags: ['games'],
  summary: 'Season calendar',
  description: 'Get calendar of weeks by season',
  operationId: 'getCalendar',
  request: {
    query: z.object({
      year: z
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
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(WeekSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getCoachesRoute = createRoute({
  method: 'get',
  path: '/coaches',
  tags: ['coaches'],
  summary: 'Coaching records and history',
  description: 'Coaching history',
  operationId: 'getCoaches',
  request: {
    query: z.object({
      firstName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'First name filter',
            in: 'query',
            name: 'firstName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lastName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Last name filter',
            in: 'query',
            name: 'lastName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team name filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
      minYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum year filter (inclusive)',
            in: 'query',
            name: 'minYear',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
      maxYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year filter (inclusive)',
            in: 'query',
            name: 'maxYear',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(CoachSchema) } },
    },
  },
})

export const getConferencesRoute = createRoute({
  method: 'get',
  path: '/conferences',
  tags: ['conferences'],
  summary: 'Conferences',
  description: 'Get conference list',
  operationId: 'getConferences',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(ConferenceSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getDraftPicksRoute = createRoute({
  method: 'get',
  path: '/draft/picks',
  tags: ['draft'],
  summary: 'List of NFL Draft picks',
  description: 'List of NFL Draft picks',
  operationId: 'getDraftPicks',
  request: {
    query: z.object({
      year: z
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
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      nflTeam: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'NFL team filter',
            in: 'query',
            name: 'nflTeam',
            required: false,
            schema: { type: 'string' },
          },
        }),
      college: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Player college filter',
            in: 'query',
            name: 'college',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'College confrence abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'NFL position filter',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(DraftPickSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getDraftPositionsRoute = createRoute({
  method: 'get',
  path: '/draft/positions',
  tags: ['draft'],
  summary: 'List of NFL positions',
  description: 'List of NFL positions',
  operationId: 'getNFLPositions',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(DraftPositionSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getDraftTeamsRoute = createRoute({
  method: 'get',
  path: '/draft/teams',
  tags: ['draft'],
  summary: 'List of NFL teams',
  description: 'List of NFL teams',
  operationId: 'getNFLTeams',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(DraftTeamSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getDrivesRoute = createRoute({
  method: 'get',
  path: '/drives',
  tags: ['drives'],
  summary: 'Drive data and results',
  description: 'Get game drives',
  operationId: 'getDrives',
  request: {
    query: z.object({
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offense: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offensive team filter',
            in: 'query',
            name: 'offense',
            required: false,
            schema: { type: 'string' },
          },
        }),
      defense: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defensive team filter',
            in: 'query',
            name: 'defense',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offenseConference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offensive conference filter',
            in: 'query',
            name: 'offenseConference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      defenseConference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defensive conference filter',
            in: 'query',
            name: 'defenseConference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Division classification filter (fbs/fcs/ii/iii)',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(DriveSchema) } },
    },
  },
})

export const getGameBoxAdvancedRoute = createRoute({
  method: 'get',
  path: '/game/box/advanced',
  tags: ['games'],
  summary: 'Advanced box scores',
  description: 'Get advanced box score data',
  operationId: 'getAdvancedBoxScore',
  request: {
    query: z.object({
      gameId: z
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
            description: 'Game id parameters',
            in: 'query',
            name: 'gameId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BoxScoreSchema } },
    },
  },
})

export const getGamesRoute = createRoute({
  method: 'get',
  path: '/games',
  tags: ['games'],
  summary: 'Games and results',
  description: 'Get game results',
  operationId: 'getGames',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .openapi({
          param: {
            description: 'Year/season filter for games',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      home: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Home team filter',
            in: 'query',
            name: 'home',
            required: false,
            schema: { type: 'string' },
          },
        }),
      away: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Away team filter',
            in: 'query',
            name: 'away',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      division: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Division classification filter (fbs/fcs/ii/iii)',
            in: 'query',
            name: 'division',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
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
            description: 'id filter for querying a single game',
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(GameSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getGamesMediaRoute = createRoute({
  method: 'get',
  path: '/games/media',
  tags: ['games'],
  summary: 'Game media information and schedules',
  description: 'Game media information (TV, radio, etc)',
  operationId: 'getGameMedia',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular, postseason, or both)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mediaType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Media type filter (tv, radio, web, ppv, or mobile)',
            in: 'query',
            name: 'mediaType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Division classification filter (fbs/fcs/ii/iii)',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(GameMediaSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getGamesPlayersRoute = createRoute({
  method: 'get',
  path: '/games/players',
  tags: ['games'],
  summary: 'Player game stats',
  description: 'Player stats broken down by game',
  operationId: 'getPlayerGameStats',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .openapi({
          param: {
            description: 'Year/season filter for games',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category filter (e.g defensive)',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      gameId: z
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
            description: 'Game id filter',
            in: 'query',
            name: 'gameId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getGamesTeamsRoute = createRoute({
  method: 'get',
  path: '/games/teams',
  tags: ['games'],
  summary: 'Team game stats',
  description: 'Team stats broken down by game',
  operationId: 'getTeamGameStats',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .openapi({
          param: {
            description: 'Year/season filter for games',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      gameId: z
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
            description: 'Game id filter',
            in: 'query',
            name: 'gameId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Division classification filter (fbs/fcs/ii/iii)',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamGameSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getGamesWeatherRoute = createRoute({
  method: 'get',
  path: '/games/weather',
  tags: ['games'],
  summary: 'Game weather information (Patreon only)',
  description: 'Weather information for the hour of kickoff',
  operationId: 'getGameWeather',
  request: {
    query: z.object({
      gameId: z
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
            description: 'Game id filter (required if no year)',
            in: 'query',
            name: 'gameId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter (required if no game id)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular, postseason, or both)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Division classification filter (fbs/fcs/ii/iii)',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(GameWeatherSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getLinesRoute = createRoute({
  method: 'get',
  path: '/lines',
  tags: ['betting'],
  summary: 'Betting lines',
  description: 'Closing betting lines',
  operationId: 'getLines',
  request: {
    query: z.object({
      gameId: z
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
            description: 'Game id filter',
            in: 'query',
            name: 'gameId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2013),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year/season filter for games',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2013, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      home: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Home team filter',
            in: 'query',
            name: 'home',
            required: false,
            schema: { type: 'string' },
          },
        }),
      away: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Away team filter',
            in: 'query',
            name: 'away',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(GameLinesSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getLivePlaysRoute = createRoute({
  method: 'get',
  path: '/live/plays',
  tags: ['plays'],
  summary: 'Live metrics and PBP (Patreon only)',
  description: 'Get live metrics and PBP',
  operationId: 'getLivePlays',
  request: {
    query: z.object({
      id: z
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
            description: 'Game id',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: LivePlayByPlaySchema } },
    },
  },
})

export const getMetricsWpRoute = createRoute({
  method: 'get',
  path: '/metrics/wp',
  tags: ['metrics'],
  summary: 'Win probability chart data',
  description: 'Win probability data',
  operationId: 'getWinProbabilityData',
  request: {
    query: z.object({
      gameId: z
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
            description: 'Game id filter',
            in: 'query',
            name: 'gameId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayWPSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getMetricsWpPregameRoute = createRoute({
  method: 'get',
  path: '/metrics/wp/pregame',
  tags: ['metrics'],
  summary: 'Pregame win probability data',
  description: 'Pregame win probabilities',
  operationId: 'getPregameWinProbabilities',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      seasonType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'regular or postseason',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PregameWPSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlayStatTypesRoute = createRoute({
  method: 'get',
  path: '/play/stat/types',
  tags: ['plays'],
  summary: 'Types of player play stats',
  description: 'Type of play stats',
  operationId: 'getPlayStatTypes',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayStatTypeSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlayStatsRoute = createRoute({
  method: 'get',
  path: '/play/stats',
  tags: ['plays'],
  summary: 'Play stats by play',
  description: 'Gets player stats associated by play (limit 1000)',
  operationId: 'getPlayStats',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2013),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2013, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      gameId: z
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
            description: 'gameId filter (from /games endpoint)',
            in: 'query',
            name: 'gameId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      athleteId: z
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
            description: 'athleteId filter (from /roster endpoint)',
            in: 'query',
            name: 'athleteId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      statTypeId: z
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
            description: 'statTypeId filter (from /play/stat/types endpoint)',
            in: 'query',
            name: 'statTypeId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'regular, postseason, or both',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayStatSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlayTypesRoute = createRoute({
  method: 'get',
  path: '/play/types',
  tags: ['plays'],
  summary: 'Play types',
  description: 'Types of plays',
  operationId: 'getPlayTypes',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayTypeSchema) } },
    },
  },
})

export const getPlayerPortalRoute = createRoute({
  method: 'get',
  path: '/player/portal',
  tags: ['players'],
  summary: 'Transfer portal by season',
  description: 'Transfer portal by season',
  operationId: 'getTransferPortal',
  request: {
    query: z.object({
      year: z
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
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PortalPlayerSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlayerReturningRoute = createRoute({
  method: 'get',
  path: '/player/returning',
  tags: ['players'],
  summary: 'Team returning production metrics',
  description: 'Returning production metrics',
  operationId: 'getReturningProduction',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2014),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2014, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(ReturningProductionSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlayerSearchRoute = createRoute({
  method: 'get',
  path: '/player/search',
  tags: ['players'],
  summary: 'Search for player information',
  description: 'Search for players',
  operationId: 'playerSearch',
  request: {
    query: z.object({
      searchTerm: z
        .string()
        .openapi({
          param: {
            description: 'Term to search on',
            in: 'query',
            name: 'searchTerm',
            required: true,
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Position abbreviation filter',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerSearchResultSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlayerUsageRoute = createRoute({
  method: 'get',
  path: '/player/usage',
  tags: ['players'],
  summary: 'Player usage metrics broken down by season',
  description: 'Player usage metrics by season',
  operationId: 'getPlayerUsage',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2013),
        )
        .default(2022)
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { default: 2022, minimum: 2013, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Position abbreviation filter',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'string' },
          },
        }),
      playerId: z
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
            description: 'Player id filter',
            in: 'query',
            name: 'playerId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerUsageSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPlaysRoute = createRoute({
  method: 'get',
  path: '/plays',
  tags: ['plays'],
  summary: 'Play by play data',
  description: 'Get play data and results',
  operationId: 'getPlays',
  request: {
    query: z.object({
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .openapi({
          param: {
            description: 'Week filter (required if team, offense, or defense, not specified)',
            in: 'query',
            name: 'week',
            required: true,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offense: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offensive team filter',
            in: 'query',
            name: 'offense',
            required: false,
            schema: { type: 'string' },
          },
        }),
      defense: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defensive team filter',
            in: 'query',
            name: 'defense',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offenseConference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offensive conference filter',
            in: 'query',
            name: 'offenseConference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      defenseConference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defensive conference filter',
            in: 'query',
            name: 'defenseConference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      playType: z
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
            description: 'Play type filter',
            in: 'query',
            name: 'playType',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Division classification filter (fbs/fcs/ii/iii)',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlaySchema) } },
    },
  },
})

export const getPpaGamesRoute = createRoute({
  method: 'get',
  path: '/ppa/games',
  tags: ['metrics'],
  summary: 'Team Predicated Points Added (PPA/EPA) by game',
  description: 'Predicted Points Added (PPA) by game',
  operationId: 'getGamePPA',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(GamePPASchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPpaPlayersGamesRoute = createRoute({
  method: 'get',
  path: '/ppa/players/games',
  tags: ['metrics'],
  summary: 'Player Predicated Points Added (PPA/EPA) broken down by game',
  description: 'Predicted Points Added (PPA) by player game',
  operationId: 'getPlayerGamePPA',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2013),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2013, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Position abbreviation filter',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'string' },
          },
        }),
      playerId: z
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
            description: 'Player id filter',
            in: 'query',
            name: 'playerId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      threshold: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum play threshold filter',
            in: 'query',
            name: 'threshold',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerGamePPASchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPpaPlayersSeasonRoute = createRoute({
  method: 'get',
  path: '/ppa/players/season',
  tags: ['metrics'],
  summary: 'Player Predicated Points Added (PPA/EPA) broken down by season',
  description: 'Predicted Points Added (PPA) by player season',
  operationId: 'getPlayerSeasonPPA',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2013),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2013, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Position abbreviation filter',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'string' },
          },
        }),
      playerId: z
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
            description: 'Player id filter',
            in: 'query',
            name: 'playerId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      threshold: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum play threshold filter',
            in: 'query',
            name: 'threshold',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerSeasonPPASchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPpaPredictedRoute = createRoute({
  method: 'get',
  path: '/ppa/predicted',
  tags: ['metrics'],
  summary: 'Predicted Points (i.e. Expected Points or EP)',
  description: 'Predicted Points',
  operationId: 'getPredictedPoints',
  request: {
    query: z.object({
      down: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(4),
        )
        .openapi({
          param: {
            description: 'Down filter',
            in: 'query',
            name: 'down',
            required: true,
            schema: { maximum: 4, minimum: 1, type: 'integer' },
          },
        }),
      distance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(99),
        )
        .openapi({
          param: {
            description: 'Distance filter',
            in: 'query',
            name: 'distance',
            required: true,
            schema: { maximum: 99, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PredictedPointsSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getPpaTeamsRoute = createRoute({
  method: 'get',
  path: '/ppa/teams',
  tags: ['metrics'],
  summary: 'Predicted Points Added (PPA/EPA) data by team',
  description: 'Predicted Points Added (PPA)',
  operationId: 'getTeamPPA',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter (required if team not specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter (required if year not specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamPPASchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRankingsRoute = createRoute({
  method: 'get',
  path: '/rankings',
  tags: ['rankings'],
  summary: 'Historical polls and rankings',
  description: 'Poll rankings',
  operationId: 'getRankings',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1936),
        )
        .openapi({
          param: {
            description: 'Year/season filter for games',
            in: 'query',
            name: 'year',
            required: true,
            schema: { minimum: 1936, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .default('regular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular or postseason)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { default: 'regular', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(RankingWeekSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRatingsEloRoute = createRoute({
  method: 'get',
  path: '/ratings/elo',
  tags: ['ratings'],
  summary: 'Historical Elo ratings',
  description: 'Elo rating data',
  operationId: 'getEloRatings',
  request: {
    query: z.object({
      year: z
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
            description: 'Season filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      week: z
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
            description: 'Maximum week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamEloRatingSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRatingsSpRoute = createRoute({
  method: 'get',
  path: '/ratings/sp',
  tags: ['ratings'],
  summary: 'Historical SP+ ratings',
  description: 'SP+ rating data',
  operationId: 'getSPRatings',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1970),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Season filter (required if team not specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 1970, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter (required if year not specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamSPRatingSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRatingsSpConferencesRoute = createRoute({
  method: 'get',
  path: '/ratings/sp/conferences',
  tags: ['ratings'],
  summary: 'Historical SP+ ratings by conference',
  description: 'Get average SP+ historical rating data by conference',
  operationId: 'getConferenceSPRatings',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1970),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Season filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 1970, type: 'integer' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(ConferenceSPRatingSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRatingsSrsRoute = createRoute({
  method: 'get',
  path: '/ratings/srs',
  tags: ['ratings'],
  summary: 'Historical SRS ratings',
  description: 'SRS rating data (requires either a year or team specified)',
  operationId: 'getSRSRatings',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1897),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Season filter (required if team not specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 1897, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter (required if year not specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamSRSRatingSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRecordsRoute = createRoute({
  method: 'get',
  path: '/records',
  tags: ['games'],
  summary: 'Team records',
  description: 'Get team records by year',
  operationId: 'getTeamRecords',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamRecordSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRecruitingGroupsRoute = createRoute({
  method: 'get',
  path: '/recruiting/groups',
  tags: ['recruiting'],
  summary: 'Recruit position group ratings',
  description: 'Gets a list of aggregated statistics by team and position grouping',
  operationId: 'getRecruitingGroups',
  request: {
    query: z.object({
      startYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting year',
            in: 'query',
            name: 'startYear',
            required: false,
            schema: { minimum: 2000, type: 'integer' },
          },
        }),
      endYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Ending year',
            in: 'query',
            name: 'endYear',
            required: false,
            schema: { minimum: 2000, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'conference filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PositionGroupRecruitingRatingSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRecruitingPlayersRoute = createRoute({
  method: 'get',
  path: '/recruiting/players',
  tags: ['recruiting'],
  summary: 'Player recruiting ratings and rankings',
  description:
    'Get player recruiting rankings and data. Requires either a year or team to be specified.',
  operationId: 'getRecruitingPlayers',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Recruiting class year (required if team no specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2000, type: 'integer' },
          },
        }),
      classification: z
        .string()
        .default('HighSchool')
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of recruit (HighSchool, JUCO, PrepSchool)',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { default: 'HighSchool', type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Position abbreviation filter',
            in: 'query',
            name: 'position',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State or province abbreviation filter',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Committed team filter (required if year not specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(RecruitSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRecruitingTeamsRoute = createRoute({
  method: 'get',
  path: '/recruiting/teams',
  tags: ['recruiting'],
  summary: 'Team recruiting rankings and ratings',
  description: 'Team recruiting rankings',
  operationId: 'getRecruitingTeams',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Recruiting class year',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2000, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamRecruitingRankSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getRosterRoute = createRoute({
  method: 'get',
  path: '/roster',
  tags: ['teams'],
  summary: 'Team rosters',
  description: 'Roster data',
  operationId: 'getRoster',
  request: {
    query: z.object({
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team name',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2009),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Season year',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2009, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getScoreboardRoute = createRoute({
  method: 'get',
  path: '/scoreboard',
  tags: ['games'],
  summary: 'Live game results (Patreon only)',
  description: 'Get live game results',
  operationId: 'getScoreboard',
  request: {
    query: z.object({
      classification: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.',
            in: 'query',
            name: 'classification',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter.',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(ScoreboardGameSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getStatsCategoriesRoute = createRoute({
  method: 'get',
  path: '/stats/categories',
  tags: ['stats'],
  summary: 'Team stat categories',
  description: 'Stat category list',
  operationId: 'getStatCategories',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getStatsGameAdvancedRoute = createRoute({
  method: 'get',
  path: '/stats/game/advanced',
  tags: ['stats'],
  summary: 'Advanced team metrics by game',
  description: 'Advanced team game stats',
  operationId: 'getAdvancedTeamGameStats',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter (required if no team specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      week: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Week filter',
            in: 'query',
            name: 'week',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter (required if no year specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      opponent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Opponent filter',
            in: 'query',
            name: 'opponent',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      seasonType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular, postseason, or both)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(AdvancedGameStatSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getStatsPlayerSeasonRoute = createRoute({
  method: 'get',
  path: '/stats/player/season',
  tags: ['players'],
  summary: 'Player stats by season',
  description: 'Season player stats',
  operationId: 'getPlayerSeasonStats',
  request: {
    query: z.object({
      year: z
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
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      startWeek: z
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
            description: 'Start week filter',
            in: 'query',
            name: 'startWeek',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      endWeek: z
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
            description: 'Start week filter',
            in: 'query',
            name: 'endWeek',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      seasonType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Season type filter (regular, postseason, or both)',
            in: 'query',
            name: 'seasonType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Stat category filter (e.g. passing)',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(PlayerSeasonStatSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/stats/season',
  tags: ['stats'],
  summary: 'Team statistics by season',
  description: 'Team season stats',
  operationId: 'getTeamSeasonStats',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter (required if no team specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter (required if no year specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
      startWeek: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting week filter',
            in: 'query',
            name: 'startWeek',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      endWeek: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting week filter',
            in: 'query',
            name: 'endWeek',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamSeasonStatSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getStatsSeasonAdvancedRoute = createRoute({
  method: 'get',
  path: '/stats/season/advanced',
  tags: ['stats'],
  summary: 'Advanced team metrics by season',
  description: 'Advanced team season stats',
  operationId: 'getAdvancedTeamSeasonStats',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2001),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter (required if no team specified)',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2001, type: 'integer' },
          },
        }),
      team: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Team filter (required if no year specified)',
            in: 'query',
            name: 'team',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludeGarbageTime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to remove garbage time plays from calculations',
            in: 'query',
            name: 'excludeGarbageTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      startWeek: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting week filter',
            in: 'query',
            name: 'startWeek',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
      endWeek: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(16),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting week filter',
            in: 'query',
            name: 'endWeek',
            required: false,
            schema: { maximum: 16, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(AdvancedSeasonStatSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getTalentRoute = createRoute({
  method: 'get',
  path: '/talent',
  tags: ['teams'],
  summary: 'Team talent composite rankings',
  description: 'Team talent composite',
  operationId: 'getTalent',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2015),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 2015, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamTalentSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getTeamsRoute = createRoute({
  method: 'get',
  path: '/teams',
  tags: ['teams'],
  summary: 'Team information',
  description: 'Get team information',
  operationId: 'getTeams',
  request: {
    query: z.object({
      conference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Conference abbreviation filter',
            in: 'query',
            name: 'conference',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getTeamsFbsRoute = createRoute({
  method: 'get',
  path: '/teams/fbs',
  tags: ['teams'],
  summary: 'FBS team list',
  description: 'Information on major division teams',
  operationId: 'getFbsTeams',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Year filter',
            in: 'query',
            name: 'year',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TeamSchema) } },
    },
    400: { description: 'error' },
  },
})

export const getTeamsMatchupRoute = createRoute({
  method: 'get',
  path: '/teams/matchup',
  tags: ['teams'],
  summary: 'Team matchup history',
  description: 'Matchup history',
  operationId: 'getTeamMatchup',
  request: {
    query: z.object({
      team1: z
        .string()
        .openapi({
          param: {
            description: 'First team',
            in: 'query',
            name: 'team1',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team2: z
        .string()
        .openapi({
          param: {
            description: 'Second team',
            in: 'query',
            name: 'team2',
            required: true,
            schema: { type: 'string' },
          },
        }),
      minYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum year',
            in: 'query',
            name: 'minYear',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
      maxYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1869),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year',
            in: 'query',
            name: 'maxYear',
            required: false,
            schema: { minimum: 1869, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TeamMatchupSchema } },
    },
    400: { description: 'error' },
  },
})

export const getVenuesRoute = createRoute({
  method: 'get',
  path: '/venues',
  tags: ['venues'],
  summary: 'Arena and venue information',
  description: 'Venues',
  operationId: 'getVenues',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(VenueSchema) } },
    },
    400: { description: 'error' },
  },
})
