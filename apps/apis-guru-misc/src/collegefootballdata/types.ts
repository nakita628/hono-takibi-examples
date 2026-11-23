type Week = {
  firstGameStart?: string | undefined
  lastGameStart?: string | undefined
  season?: number | undefined
  seasonType?: string | undefined
  week?: number | undefined
}
type Coach = {
  first_name?: string | undefined
  hire_date?: string | undefined
  last_name?: string | undefined
  seasons?:
    | {
        games?: number | undefined
        losses?: number | undefined
        postseason_rank?: number | undefined
        preseason_rank?: number | undefined
        school?: string | undefined
        sp_defense?: number | undefined
        sp_offense?: number | undefined
        sp_overall?: number | undefined
        srs?: number | undefined
        ties?: number | undefined
        wins?: number | undefined
        year?: string | undefined
      }[]
    | undefined
}
type Conference = {
  abbreviation?: string | undefined
  classification?: string | undefined
  id?: number | undefined
  name?: string | undefined
  short_name?: string | undefined
}
type DraftPick = {
  collegeAthleteId?: number | undefined
  collegeConference?: string | undefined
  collegeId?: number | undefined
  collegeTeam?: string | undefined
  height?: number | undefined
  hometownInfo?:
    | {
        city?: string | undefined
        country?: string | undefined
        countryFips?: number | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        state?: string | undefined
      }
    | undefined
  name?: string | undefined
  nflAthleteId?: number | undefined
  nflTeam?: string | undefined
  overall?: number | undefined
  pick?: number | undefined
  position?: string | undefined
  preDraftGrade?: number | undefined
  preDraftPositionRanking?: number | undefined
  preDraftRanking?: number | undefined
  round?: number | undefined
  weight?: number | undefined
  year?: number | undefined
}
type DraftPosition = { abbreviation?: string | undefined; name?: string | undefined }
type DraftTeam = {
  displayName?: string | undefined
  location?: string | undefined
  logo?: string | undefined
  nickname?: string | undefined
}
type Drive = {
  defense?: string | undefined
  defense_conference?: string | undefined
  drive_number?: number | undefined
  drive_result?: string | undefined
  end_defense_score?: number | undefined
  end_offense_score?: number | undefined
  end_period?: number | undefined
  end_time?: { minutes?: number | undefined; seconds?: number | undefined } | undefined
  end_yardline?: number | undefined
  end_yards_to_goal?: number | undefined
  game_id?: number | undefined
  id?: number | undefined
  is_home_offense?: boolean | undefined
  offense?: string | undefined
  offense_conference?: string | undefined
  plays?: number | undefined
  scoring?: boolean | undefined
  start_defense_score?: number | undefined
  start_offense_score?: number | undefined
  start_period?: number | undefined
  start_time?: { minutes?: number | undefined; seconds?: number | undefined } | undefined
  start_yardline?: number | undefined
  start_yards_to_goal?: number | undefined
  yards?: number | undefined
}
type BoxScore = {
  players?:
    | {
        ppa?:
          | {
              average?:
                | {
                    passing?: number | undefined
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    rushing?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              cumulative?:
                | {
                    passing?: number | undefined
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    rushing?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              player?: string | undefined
              position?: string | undefined
              team?: string | undefined
            }[]
          | undefined
        usage?:
          | {
              passing?: number | undefined
              player?: string | undefined
              position?: string | undefined
              quarter1?: number | undefined
              quarter2?: number | undefined
              quarter3?: number | undefined
              quarter4?: number | undefined
              rushing?: number | undefined
              team?: string | undefined
              total?: number | undefined
            }[]
          | undefined
      }
    | undefined
  teams?:
    | {
        cumulativePpa?:
          | {
              overall?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              passing?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              plays?: number | undefined
              rushing?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              team?: string | undefined
            }[]
          | undefined
        explosiveness?:
          | {
              overall?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              team?: string | undefined
            }[]
          | undefined
        fieldPosition?:
          | {
              averageStart?: number | undefined
              averageStartingPredictedPoints?: number | undefined
              team?: string | undefined
            }[]
          | undefined
        havoc?:
          | {
              db?: number | undefined
              frontSeven?: number | undefined
              team?: string | undefined
              total?: number | undefined
            }[]
          | undefined
        ppa?:
          | {
              overall?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              passing?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              plays?: number | undefined
              rushing?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              team?: string | undefined
            }[]
          | undefined
        rushing?:
          | {
              lineYards?: number | undefined
              lineYardsAverage?: number | undefined
              openFieldYards?: number | undefined
              openFieldYardsAverage?: number | undefined
              powerSuccess?: number | undefined
              secondLevelYards?: number | undefined
              secondLevelYardsAverage?: number | undefined
              stuffRate?: number | undefined
              team?: string | undefined
            }[]
          | undefined
        scoringOpportunities?:
          | {
              opportunities?: number | undefined
              points?: number | undefined
              pointsPerOpportunity?: number | undefined
              team?: string | undefined
            }[]
          | undefined
        successRates?:
          | {
              overall?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              passingDowns?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              standardDowns?:
                | {
                    quarter1?: number | undefined
                    quarter2?: number | undefined
                    quarter3?: number | undefined
                    quarter4?: number | undefined
                    total?: number | undefined
                  }
                | undefined
              team?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type Game = {
  attendance?: number | undefined
  away_conference?: string | undefined
  away_division?: string | undefined
  away_id?: number | undefined
  away_line_scores?: number[] | undefined
  away_points?: number | undefined
  away_post_win_prob?: number | undefined
  away_postgame_elo?: number | undefined
  away_pregame_elo?: number | undefined
  away_team?: string | undefined
  completed?: boolean | undefined
  conference_game?: boolean | undefined
  excitement_index?: number | undefined
  highlights?: string | undefined
  home_conference?: string | undefined
  home_division?: string | undefined
  home_id?: number | undefined
  home_line_scores?: number[] | undefined
  home_points?: number | undefined
  home_post_win_prob?: number | undefined
  home_postgame_elo?: number | undefined
  home_pregame_elo?: number | undefined
  home_team?: string | undefined
  id?: number | undefined
  neutral_site?: boolean | undefined
  notes?: string | undefined
  season?: number | undefined
  season_type?: string | undefined
  start_date?: string | undefined
  start_time_tbd?: boolean | undefined
  venue?: string | undefined
  venue_id?: number | undefined
  week?: number | undefined
}
type GameMedia = {
  awayConference?: string | undefined
  awayTeam?: string | undefined
  homeConference?: string | undefined
  homeTeam?: string | undefined
  id?: number | undefined
  isStartTimeTBD?: boolean | undefined
  mediaType?: string | undefined
  outlet?: string | undefined
  season?: number | undefined
  seasonType?: string | undefined
  startTime?: string | undefined
  week?: number | undefined
}
type PlayerGame = {
  id?: number | undefined
  teams?:
    | {
        categories?:
          | {
              name?: string | undefined
              types?:
                | {
                    athletes?:
                      | {
                          id?: number | undefined
                          name?: string | undefined
                          stat?: string | undefined
                        }[]
                      | undefined
                    name?: string | undefined
                  }[]
                | undefined
            }[]
          | undefined
        homeAway?: boolean | undefined
        points?: number | undefined
        school?: { conference?: string | undefined; name?: string | undefined } | undefined
      }[]
    | undefined
}
type TeamGame = {
  id?: number | undefined
  teams?:
    | {
        conference?: string | undefined
        homeAway?: string | undefined
        points?: number | undefined
        school?: string | undefined
        stats?: { category?: string | undefined; stat?: string | undefined }[] | undefined
      }[]
    | undefined
}
type GameWeather = {
  awayConference?: string | undefined
  awayTeam?: string | undefined
  dewPoint?: number | undefined
  gameIndoors?: boolean | undefined
  homeConference?: string | undefined
  homeTeam?: string | undefined
  humidity?: number | undefined
  id?: number | undefined
  precipitation?: number | undefined
  pressure?: number | undefined
  season?: number | undefined
  seasonType?: string | undefined
  snowfall?: number | undefined
  startTime?: string | undefined
  temperature?: number | undefined
  venue?: string | undefined
  venueId?: number | undefined
  weatherCondition?: string | undefined
  weatherConditionCode?: number | undefined
  week?: number | undefined
  windDirection?: number | undefined
  windSpeed?: number | undefined
}
type GameLines = {
  awayConference?: string | undefined
  awayScore?: number | undefined
  awayTeam?: string | undefined
  homeConference?: string | undefined
  homeScore?: number | undefined
  homeTeam?: string | undefined
  id?: number | undefined
  lines?:
    | {
        awayMoneyline?: number | undefined
        formattedSpread?: string | undefined
        homeMoneyline?: number | undefined
        overUnder?: number | undefined
        overUnderOpen?: number | undefined
        provider?: string | undefined
        spread?: number | undefined
        spreadOpen?: number | undefined
      }[]
    | undefined
  season?: number | undefined
  seasonType?: string | undefined
  startDate?: string | undefined
  week?: number | undefined
}
type LivePlayByPlay = {
  clock?: string | undefined
  distance?: number | undefined
  down?: number | undefined
  drives?:
    | {
        defense?: string | undefined
        defenseId?: number | undefined
        duration?: string | undefined
        endClock?: string | undefined
        endPeriod?: number | undefined
        endYardsToGoal?: number | undefined
        id?: number | undefined
        offense?: string | undefined
        offenseId?: number | undefined
        playCount?: number | undefined
        plays?:
          | {
              awayScore?: number | undefined
              clock?: string | undefined
              distance?: number | undefined
              down?: number | undefined
              downType?: string | undefined
              epa?: number | undefined
              garbageTime?: boolean | undefined
              homeScore?: number | undefined
              id?: number | undefined
              period?: number | undefined
              playText?: string | undefined
              playType?: string | undefined
              playTypeId?: number | undefined
              rushPass?: string | undefined
              success?: boolean | undefined
              team?: string | undefined
              teamId?: number | undefined
              wallclock?: string | undefined
              yardsGained?: number | undefined
              yardsToGoal?: number | undefined
            }[]
          | undefined
        scoringOpportunity?: boolean | undefined
        startClock?: string | undefined
        startPeriod?: number | undefined
        startYardsToGoal?: number | undefined
        yards?: number | undefined
      }[]
    | undefined
  id?: number | undefined
  period?: number | undefined
  possession?: string | undefined
  status?: string | undefined
  teams?:
    | {
        drives?: number | undefined
        epaPerPass?: number | undefined
        epaPerPlay?: number | undefined
        epaPerRush?: number | undefined
        explosiveness?: number | undefined
        homeAway?: string | undefined
        lineYards?: number | undefined
        lineYardsPerRush?: number | undefined
        openFieldYards?: number | undefined
        openFieldYardsPerRush?: number | undefined
        passingDownSuccessRate?: number | undefined
        passingEpa?: number | undefined
        plays?: number | undefined
        points?: number | undefined
        pointsPerOpportunity?: number | undefined
        rushingEpa?: number | undefined
        scoringOpportunities?: number | undefined
        secondLevelYards?: number | undefined
        secondLevelYardsPerRush?: number | undefined
        standardDownSuccessRate?: number | undefined
        successRate?: number | undefined
        team?: string | undefined
        teamId?: number | undefined
        totalEpa?: number | undefined
      }[]
    | undefined
  yardsToGoal?: number | undefined
}
type PlayWP = {
  away?: string | undefined
  awayId?: number | undefined
  awayScore?: number | undefined
  distance?: number | undefined
  down?: number | undefined
  gamesId?: number | undefined
  home?: string | undefined
  homeBall?: boolean | undefined
  homeId?: number | undefined
  homeScore?: number | undefined
  homeWinProb?: number | undefined
  playId?: number | undefined
  playNumber?: number | undefined
  playText?: string | undefined
  spread?: number | undefined
  timeRemaining?: number | undefined
  yardLine?: number | undefined
}
type PregameWP = {
  awayTeam?: string | undefined
  gameId?: number | undefined
  homeTeam?: string | undefined
  homeWinProb?: number | undefined
  season?: number | undefined
  seasonType?: string | undefined
  spread?: number | undefined
  week?: number | undefined
}
type PlayStatType = { id?: number | undefined; name?: string | undefined }
type PlayStat = {
  athleteId?: number | undefined
  athleteName?: string | undefined
  clock?: { minutes?: number | undefined; seconds?: number | undefined } | undefined
  conference?: string | undefined
  distance?: number | undefined
  down?: number | undefined
  driveId?: number | undefined
  gameId?: number | undefined
  opponent?: string | undefined
  opponentScore?: number | undefined
  period?: number | undefined
  playId?: number | undefined
  season?: number | undefined
  stat?: number | undefined
  statType?: string | undefined
  team?: string | undefined
  teamScore?: number | undefined
  week?: number | undefined
  yardsToGoal?: number | undefined
}
type PlayType = {
  abbreviation?: string | undefined
  id?: number | undefined
  text?: string | undefined
}
type PortalPlayer = {
  destination?: string | undefined
  eligibility?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  origin?: string | undefined
  position?: string | undefined
  rating?: number | undefined
  season?: number | undefined
  stars?: number | undefined
  transferDate?: string | undefined
}
type ReturningProduction = {
  conference?: string | undefined
  passingUsage?: number | undefined
  percentPPA?: number | undefined
  percentPassingPPA?: number | undefined
  percentReceivingPPA?: number | undefined
  percentRushingPPA?: number | undefined
  receivingUsage?: number | undefined
  rushingUsage?: number | undefined
  season?: number | undefined
  team?: string | undefined
  totalPPA?: number | undefined
  totalPassingPPA?: number | undefined
  totalReceivingPPA?: number | undefined
  totalRushingPPA?: number | undefined
  usage?: number | undefined
}
type PlayerSearchResult = {
  firstName?: string | undefined
  height?: number | undefined
  hometown?: string | undefined
  id?: number | undefined
  jersey?: number | undefined
  lastName?: string | undefined
  name?: string | undefined
  position?: string | undefined
  team?: string | undefined
  teamColor?: string | undefined
  teamColorSecondary?: string | undefined
  weight?: number | undefined
}
type PlayerUsage = {
  conference?: string | undefined
  id?: number | undefined
  name?: string | undefined
  position?: string | undefined
  season?: number | undefined
  team?: string | undefined
  usage?:
    | {
        firstDown?: number | undefined
        overall?: number | undefined
        pass?: number | undefined
        passingDowns?: number | undefined
        rush?: number | undefined
        secondDown?: number | undefined
        standardDowns?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
}
type Play = {
  away?: string | undefined
  clock?: { minutes?: number | undefined; seconds?: number | undefined } | undefined
  defense?: string | undefined
  defense_conference?: string | undefined
  defense_score?: number | undefined
  defense_timeouts?: number | undefined
  distance?: number | undefined
  down?: number | undefined
  drive_id?: number | undefined
  drive_number?: number | undefined
  game_id?: number | undefined
  home?: string | undefined
  id?: number | undefined
  offense?: string | undefined
  offense_conference?: string | undefined
  offense_score?: number | undefined
  offense_timeouts?: number | undefined
  period?: number | undefined
  play_number?: number | undefined
  play_text?: string | undefined
  play_type?: string | undefined
  ppa?: number | undefined
  scoring?: boolean | undefined
  wallclock?: string | undefined
  yard_line?: number | undefined
  yards_gained?: number | undefined
  yards_to_goal?: number | undefined
}
type GamePPA = {
  conference?: string | undefined
  defense?:
    | {
        firstDown?: number | undefined
        overall?: number | undefined
        passing?: number | undefined
        rushing?: number | undefined
        secondDown?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
  gameId?: number | undefined
  offense?:
    | {
        firstDown?: number | undefined
        overall?: number | undefined
        passing?: number | undefined
        rushing?: number | undefined
        secondDown?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
  opponent?: string | undefined
  season?: number | undefined
  team?: string | undefined
  week?: number | undefined
}
type PlayerGamePPA = {
  averagePPA?:
    | { all?: number | undefined; pass?: number | undefined; rush?: number | undefined }
    | undefined
  name?: string | undefined
  opponent?: string | undefined
  position?: string | undefined
  season?: number | undefined
  team?: string | undefined
  week?: number | undefined
}
type PlayerSeasonPPA = {
  averagePPA?:
    | {
        all?: number | undefined
        firstDown?: number | undefined
        pass?: number | undefined
        passingDowns?: number | undefined
        rush?: number | undefined
        secondDown?: number | undefined
        standardDowns?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
  conference?: string | undefined
  id?: number | undefined
  name?: string | undefined
  position?: string | undefined
  season?: number | undefined
  team?: string | undefined
  totalPPA?:
    | {
        all?: number | undefined
        firstDown?: number | undefined
        pass?: number | undefined
        passingDowns?: number | undefined
        rush?: number | undefined
        secondDown?: number | undefined
        standardDowns?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
}
type PredictedPoints = { predictedPoints?: number | undefined; yardLine?: number | undefined }
type TeamPPA = {
  conference?: string | undefined
  defense?:
    | {
        cumulative?:
          | {
              passing?: number | undefined
              rushing?: number | undefined
              total?: number | undefined
            }
          | undefined
        firstDown?: number | undefined
        overall?: number | undefined
        passing?: number | undefined
        rushing?: number | undefined
        secondDown?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
  offense?:
    | {
        cumulative?:
          | {
              passing?: number | undefined
              rushing?: number | undefined
              total?: number | undefined
            }
          | undefined
        firstDown?: number | undefined
        overall?: number | undefined
        passing?: number | undefined
        rushing?: number | undefined
        secondDown?: number | undefined
        thirdDown?: number | undefined
      }
    | undefined
  season?: number | undefined
  team?: string | undefined
}
type RankingWeek = {
  polls?:
    | {
        poll?: string | undefined
        ranks?:
          | {
              conference?: string | undefined
              firstPlaceVotes?: number | undefined
              points?: number | undefined
              rank?: number | undefined
              school?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  season?: number | undefined
  seasonType?: string | undefined
  week?: number | undefined
}
type TeamEloRating = {
  conference?: string | undefined
  elo?: number | undefined
  team?: string | undefined
  year?: number | undefined
}
type TeamSPRating = {
  conference?: string | undefined
  defense?:
    | {
        explosiveness?: number | undefined
        havoc?:
          | { db?: number | undefined; frontSeven?: number | undefined; total?: number | undefined }
          | undefined
        pasing?: number | undefined
        passingDowns?: number | undefined
        ranking?: number | undefined
        rating?: number | undefined
        rushing?: number | undefined
        standardDowns?: number | undefined
        success?: number | undefined
      }
    | undefined
  offense?:
    | {
        explosiveness?: number | undefined
        pace?: number | undefined
        passing?: number | undefined
        passingDowns?: number | undefined
        ranking?: number | undefined
        rating?: number | undefined
        runRate?: number | undefined
        rushing?: number | undefined
        standardDowns?: number | undefined
        success?: number | undefined
      }
    | undefined
  ranking?: number | undefined
  rating?: number | undefined
  secondOrderWins?: number | undefined
  sos?: number | undefined
  specialTeams?: { rating?: number | undefined } | undefined
  team?: string | undefined
  year?: number | undefined
}
type ConferenceSPRating = {
  conference?: string | undefined
  defense?:
    | {
        explosiveness?: number | undefined
        havoc?:
          | { db?: number | undefined; frontSeven?: number | undefined; total?: number | undefined }
          | undefined
        pasing?: number | undefined
        passingDowns?: number | undefined
        rating?: number | undefined
        rushing?: number | undefined
        standardDowns?: number | undefined
        success?: number | undefined
      }
    | undefined
  offense?:
    | {
        explosiveness?: number | undefined
        pace?: number | undefined
        passing?: number | undefined
        passingDowns?: number | undefined
        rating?: number | undefined
        runRate?: number | undefined
        rushing?: number | undefined
        standardDowns?: number | undefined
        success?: number | undefined
      }
    | undefined
  rating?: number | undefined
  secondOrderWins?: number | undefined
  sos?: number | undefined
  specialTeams?: { rating?: number | undefined } | undefined
  year?: number | undefined
}
type TeamSRSRating = {
  conference?: string | undefined
  division?: string | undefined
  ranking?: number | undefined
  rating?: number | undefined
  team?: string | undefined
  year?: number | undefined
}
type TeamRecord = {
  awayGames?:
    | {
        games?: number | undefined
        losses?: number | undefined
        ties?: number | undefined
        wins?: number | undefined
      }
    | undefined
  conference?: string | undefined
  conferenceGames?:
    | {
        games?: number | undefined
        losses?: number | undefined
        ties?: number | undefined
        wins?: number | undefined
      }
    | undefined
  division?: string | undefined
  expectedWins?: number | undefined
  homeGames?:
    | {
        games?: number | undefined
        losses?: number | undefined
        ties?: number | undefined
        wins?: number | undefined
      }
    | undefined
  team?: string | undefined
  total?:
    | {
        games?: number | undefined
        losses?: number | undefined
        ties?: number | undefined
        wins?: number | undefined
      }
    | undefined
  year?: number | undefined
}
type PositionGroupRecruitingRating = {
  averageRating?: number | undefined
  averageStars?: number | undefined
  commits?: number | undefined
  conference?: string | undefined
  positionGroup?: string | undefined
  team?: string | undefined
  totalRating?: number | undefined
}
type Recruit = {
  athleteId?: number | undefined
  city?: string | undefined
  committedTo?: string | undefined
  country?: string | undefined
  height?: number | undefined
  hometownInfo?:
    | {
        countyFips?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
      }
    | undefined
  id?: number | undefined
  name?: string | undefined
  position?: string | undefined
  ranking?: number | undefined
  rating?: number | undefined
  recruitType?: string | undefined
  school?: string | undefined
  stars?: number | undefined
  stateProvince?: string | undefined
  weight?: number | undefined
  year?: number | undefined
}
type TeamRecruitingRank = {
  points?: number | undefined
  rank?: number | undefined
  team?: string | undefined
  year?: number | undefined
}
type Player = {
  first_name?: string | undefined
  height?: number | undefined
  home_city?: string | undefined
  home_country?: string | undefined
  home_county_fips?: string | undefined
  home_latitude?: number | undefined
  home_longitude?: number | undefined
  home_state?: string | undefined
  id?: number | undefined
  jersey?: number | undefined
  last_name?: string | undefined
  position?: string | undefined
  recruit_ids?: number[] | undefined
  team?: string | undefined
  weight?: number | undefined
  year?: number | undefined
}
type ScoreboardGame = {
  awayTeam?:
    | {
        classification?: string | undefined
        conference?: string | undefined
        id?: number | undefined
        name?: string | undefined
        points?: number | undefined
      }
    | undefined
  betting?:
    | {
        awayMoneyline?: number | undefined
        homeMoneyline?: number | undefined
        overUnder?: number | undefined
        spread?: number | undefined
      }
    | undefined
  clock?: string | undefined
  conferenceGame?: boolean | undefined
  homeTeam?:
    | {
        classification?: string | undefined
        conference?: string | undefined
        id?: number | undefined
        name?: string | undefined
        points?: number | undefined
      }
    | undefined
  id?: number | undefined
  neutralSite?: boolean | undefined
  period?: number | undefined
  possession?: string | undefined
  situation?: string | undefined
  startDate?: string | undefined
  startTimeTBD?: boolean | undefined
  status?: string | undefined
  tv?: string | undefined
  venue?:
    | { city?: string | undefined; name?: string | undefined; state?: string | undefined }
    | undefined
  weather?:
    | {
        description?: string | undefined
        temperature?: number | undefined
        windDirection?: number | undefined
        windSpeed?: number | undefined
      }
    | undefined
}
type AdvancedGameStat = {
  defense?:
    | {
        drives?: number | undefined
        explosiveness?: number | undefined
        lineYards?: number | undefined
        lineYardsTotal?: number | undefined
        openFieldYards?: number | undefined
        openFieldYardsTotal?: number | undefined
        passingDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        passingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        plays?: number | undefined
        powerSuccess?: number | undefined
        ppa?: number | undefined
        rushingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        secondLevelYards?: number | undefined
        secondLevelYardsTotal?: number | undefined
        standardDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        stuffRate?: number | undefined
        successRate?: number | undefined
        totalPPA?: number | undefined
      }
    | undefined
  gameId?: number | undefined
  offense?:
    | {
        drives?: number | undefined
        explosiveness?: number | undefined
        lineYards?: number | undefined
        lineYardsTotal?: number | undefined
        openFieldYards?: number | undefined
        openFieldYardsTotal?: number | undefined
        passingDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        passingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        plays?: number | undefined
        powerSuccess?: number | undefined
        ppa?: number | undefined
        rushingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        secondLevelYards?: number | undefined
        secondLevelYardsTotal?: number | undefined
        standardDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        stuffRate?: number | undefined
        successRate?: number | undefined
        totalPPA?: number | undefined
      }
    | undefined
  opponent?: string | undefined
  season?: number | undefined
  team?: string | undefined
  week?: number | undefined
}
type PlayerSeasonStat = {
  category?: string | undefined
  conference?: string | undefined
  player?: string | undefined
  playerId?: number | undefined
  season?: number | undefined
  stat?: number | undefined
  statType?: string | undefined
  team?: string | undefined
}
type TeamSeasonStat = {
  conference?: string | undefined
  season?: number | undefined
  statName?: string | undefined
  statValue?: number | undefined
  team?: string | undefined
}
type AdvancedSeasonStat = {
  conference?: string | undefined
  defense?:
    | {
        drives?: number | undefined
        explosiveness?: number | undefined
        fieldPosition?:
          | { averagePredictedPoints?: number | undefined; averageStart?: number | undefined }
          | undefined
        havoc?:
          | { db?: number | undefined; frontSeven?: number | undefined; total?: number | undefined }
          | undefined
        lineYards?: number | undefined
        lineYardsTotal?: number | undefined
        openFieldYards?: number | undefined
        openFieldYardsTotal?: number | undefined
        passingDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        passingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        plays?: number | undefined
        pointsPerOpportunity?: number | undefined
        powerSuccess?: number | undefined
        ppa?: number | undefined
        rushingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        secondLevelYards?: number | undefined
        secondLevelYardsTotal?: number | undefined
        standardDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        stuffRate?: number | undefined
        successRate?: number | undefined
        totalOpportunies?: number | undefined
        totalPPA?: number | undefined
      }
    | undefined
  offense?:
    | {
        drives?: number | undefined
        explosiveness?: number | undefined
        fieldPosition?:
          | { averagePredictedPoints?: number | undefined; averageStart?: number | undefined }
          | undefined
        havoc?:
          | { db?: number | undefined; frontSeven?: number | undefined; total?: number | undefined }
          | undefined
        lineYards?: number | undefined
        lineYardsTotal?: number | undefined
        openFieldYards?: number | undefined
        openFieldYardsTotal?: number | undefined
        passingDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        passingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        plays?: number | undefined
        pointsPerOpportunity?: number | undefined
        powerSuccess?: number | undefined
        ppa?: number | undefined
        rushingPlays?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
              totalPPA?: number | undefined
            }
          | undefined
        secondLevelYards?: number | undefined
        secondLevelYardsTotal?: number | undefined
        standardDowns?:
          | {
              explosiveness?: number | undefined
              ppa?: number | undefined
              rate?: number | undefined
              successRate?: number | undefined
            }
          | undefined
        stuffRate?: number | undefined
        successRate?: number | undefined
        totalOpportunies?: number | undefined
        totalPPA?: number | undefined
      }
    | undefined
  season?: number | undefined
  team?: string | undefined
}
type TeamTalent = {
  school?: string | undefined
  talent?: number | undefined
  year?: number | undefined
}
type Team = {
  abbreviation?: string | undefined
  alt_color?: string | undefined
  alt_name_1?: string | undefined
  alt_name_2?: string | undefined
  alt_name_3?: string | undefined
  classification?: string | undefined
  color?: string | undefined
  conference?: string | undefined
  division?: string | undefined
  id?: number | undefined
  location?:
    | {
        capacity?: number | undefined
        city?: string | undefined
        country_code?: string | undefined
        dome?: boolean | undefined
        elevation?: number | undefined
        grass?: boolean | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        name?: string | undefined
        state?: string | undefined
        timezone?: string | undefined
        venue_id?: number | undefined
        year_constructed?: number | undefined
        zip?: string | undefined
      }
    | undefined
  logos?: string[] | undefined
  mascot?: string | undefined
  school?: string | undefined
  twitter?: string | undefined
}
type TeamMatchup = {
  endYear?: number | undefined
  games?:
    | {
        awayScore?: number | undefined
        awayTeam?: string | undefined
        date?: string | undefined
        homeScore?: number | undefined
        homeTeam?: string | undefined
        neutralSite?: boolean | undefined
        season?: number | undefined
        season_type?: string | undefined
        venue?: string | undefined
        week?: number | undefined
        winner?: string | undefined
      }[]
    | undefined
  startYear?: number | undefined
  team1?: string | undefined
  team1Wins?: number | undefined
  team2?: string | undefined
  team2Wins?: number | undefined
  ties?: number | undefined
}
type Venue = {
  capacity?: number | undefined
  city?: string | undefined
  country_code?: string | undefined
  dome?: boolean | undefined
  elevation?: number | undefined
  grass?: boolean | undefined
  id?: number | undefined
  location?: { x?: number | undefined; y?: number | undefined } | undefined
  name?: string | undefined
  state?: string | undefined
  timezone?: string | undefined
  year_constructed?: number | undefined
  zip?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/calendar': {
      $get:
        | { input: { query: { year: number } }; output: Week[]; outputFormat: 'json'; status: 200 }
        | { input: { query: { year: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/coaches': {
      $get: {
        input: {
          query: {
            firstName?: string | undefined
            lastName?: string | undefined
            team?: string | undefined
            year?: number | undefined
            minYear?: number | undefined
            maxYear?: number | undefined
          }
        }
        output: Coach[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/conferences': {
      $get:
        | { input: {}; output: Conference[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/draft/picks': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                nflTeam?: string | undefined
                college?: string | undefined
                conference?: string | undefined
                position?: string | undefined
              }
            }
            output: DraftPick[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                nflTeam?: string | undefined
                college?: string | undefined
                conference?: string | undefined
                position?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/draft/positions': {
      $get:
        | { input: {}; output: DraftPosition[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/draft/teams': {
      $get:
        | { input: {}; output: DraftTeam[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/drives': {
      $get: {
        input: {
          query: {
            seasonType?: string | undefined
            year: number
            week?: number | undefined
            team?: string | undefined
            offense?: string | undefined
            defense?: string | undefined
            conference?: string | undefined
            offenseConference?: string | undefined
            defenseConference?: string | undefined
            classification?: string | undefined
          }
        }
        output: Drive[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/game/box/advanced': {
      $get: {
        input: { query: { gameId: number } }
        output: BoxScore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games': {
      $get:
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                home?: string | undefined
                away?: string | undefined
                conference?: string | undefined
                division?: string | undefined
                id?: number | undefined
              }
            }
            output: Game[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                home?: string | undefined
                away?: string | undefined
                conference?: string | undefined
                division?: string | undefined
                id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/games/media': {
      $get:
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                mediaType?: string | undefined
                classification?: string | undefined
              }
            }
            output: GameMedia[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                mediaType?: string | undefined
                classification?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/games/players': {
      $get:
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                category?: string | undefined
                gameId?: number | undefined
              }
            }
            output: PlayerGame[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                category?: string | undefined
                gameId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/games/teams': {
      $get:
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                gameId?: number | undefined
                classification?: string | undefined
              }
            }
            output: TeamGame[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                gameId?: number | undefined
                classification?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/games/weather': {
      $get:
        | {
            input: {
              query: {
                gameId?: number | undefined
                year?: number | undefined
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                classification?: string | undefined
              }
            }
            output: GameWeather[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                gameId?: number | undefined
                year?: number | undefined
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                conference?: string | undefined
                classification?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/lines': {
      $get:
        | {
            input: {
              query: {
                gameId?: number | undefined
                year?: number | undefined
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                home?: string | undefined
                away?: string | undefined
                conference?: string | undefined
              }
            }
            output: GameLines[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                gameId?: number | undefined
                year?: number | undefined
                week?: number | undefined
                seasonType?: string | undefined
                team?: string | undefined
                home?: string | undefined
                away?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/live/plays': {
      $get: {
        input: { query: { id: number } }
        output: LivePlayByPlay
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/wp': {
      $get:
        | {
            input: { query: { gameId: number } }
            output: PlayWP[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { gameId: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/metrics/wp/pregame': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                seasonType?: string | undefined
              }
            }
            output: PregameWP[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                seasonType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/play/stat/types': {
      $get:
        | { input: {}; output: PlayStatType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/play/stats': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                gameId?: number | undefined
                athleteId?: number | undefined
                statTypeId?: number | undefined
                seasonType?: string | undefined
                conference?: string | undefined
              }
            }
            output: PlayStat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                gameId?: number | undefined
                athleteId?: number | undefined
                statTypeId?: number | undefined
                seasonType?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/play/types': { $get: { input: {}; output: PlayType[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/player/portal': {
      $get:
        | {
            input: { query: { year: number } }
            output: PortalPlayer[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { year: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/player/returning': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: ReturningProduction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/player/search': {
      $get:
        | {
            input: {
              query: {
                searchTerm: string
                position?: string | undefined
                team?: string | undefined
                year?: number | undefined
              }
            }
            output: PlayerSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchTerm: string
                position?: string | undefined
                team?: string | undefined
                year?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/player/usage': {
      $get:
        | {
            input: {
              query: {
                year: number
                team?: string | undefined
                conference?: string | undefined
                position?: string | undefined
                playerId?: number | undefined
                excludeGarbageTime?: boolean | undefined
              }
            }
            output: PlayerUsage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                team?: string | undefined
                conference?: string | undefined
                position?: string | undefined
                playerId?: number | undefined
                excludeGarbageTime?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/plays': {
      $get: {
        input: {
          query: {
            seasonType?: string | undefined
            year: number
            week: number
            team?: string | undefined
            offense?: string | undefined
            defense?: string | undefined
            conference?: string | undefined
            offenseConference?: string | undefined
            defenseConference?: string | undefined
            playType?: number | undefined
            classification?: string | undefined
          }
        }
        output: Play[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ppa/games': {
      $get:
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                excludeGarbageTime?: boolean | undefined
                seasonType?: string | undefined
              }
            }
            output: GamePPA[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                week?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                excludeGarbageTime?: boolean | undefined
                seasonType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ppa/players/games': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                position?: string | undefined
                playerId?: number | undefined
                threshold?: string | undefined
                excludeGarbageTime?: boolean | undefined
                seasonType?: string | undefined
              }
            }
            output: PlayerGamePPA[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                position?: string | undefined
                playerId?: number | undefined
                threshold?: string | undefined
                excludeGarbageTime?: boolean | undefined
                seasonType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ppa/players/season': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                position?: string | undefined
                playerId?: number | undefined
                threshold?: string | undefined
                excludeGarbageTime?: boolean | undefined
              }
            }
            output: PlayerSeasonPPA[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                position?: string | undefined
                playerId?: number | undefined
                threshold?: string | undefined
                excludeGarbageTime?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ppa/predicted': {
      $get:
        | {
            input: { query: { down: number; distance: number } }
            output: PredictedPoints[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { down: number; distance: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ppa/teams': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                excludeGarbageTime?: boolean | undefined
              }
            }
            output: TeamPPA[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                excludeGarbageTime?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/rankings': {
      $get:
        | {
            input: {
              query: { year: number; week?: number | undefined; seasonType?: string | undefined }
            }
            output: RankingWeek[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { year: number; week?: number | undefined; seasonType?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ratings/elo': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: TeamEloRating[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ratings/sp': {
      $get:
        | {
            input: { query: { year?: number | undefined; team?: string | undefined } }
            output: TeamSPRating[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { year?: number | undefined; team?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ratings/sp/conferences': {
      $get:
        | {
            input: { query: { year?: number | undefined; conference?: string | undefined } }
            output: ConferenceSPRating[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { year?: number | undefined; conference?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/ratings/srs': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: TeamSRSRating[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/records': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: TeamRecord[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/recruiting/groups': {
      $get:
        | {
            input: {
              query: {
                startYear?: number | undefined
                endYear?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: PositionGroupRecruitingRating[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startYear?: number | undefined
                endYear?: number | undefined
                team?: string | undefined
                conference?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/recruiting/players': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                classification?: string | undefined
                position?: string | undefined
                state?: string | undefined
                team?: string | undefined
              }
            }
            output: Recruit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                classification?: string | undefined
                position?: string | undefined
                state?: string | undefined
                team?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/recruiting/teams': {
      $get:
        | {
            input: { query: { year?: number | undefined; team?: string | undefined } }
            output: TeamRecruitingRank[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { year?: number | undefined; team?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/roster': {
      $get:
        | {
            input: { query: { team?: string | undefined; year?: number | undefined } }
            output: Player[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { team?: string | undefined; year?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/scoreboard': {
      $get:
        | {
            input: {
              query: { classification?: string | undefined; conference?: string | undefined }
            }
            output: ScoreboardGame[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { classification?: string | undefined; conference?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/stats/categories': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/stats/game/advanced': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                opponent?: string | undefined
                excludeGarbageTime?: boolean | undefined
                seasonType?: string | undefined
              }
            }
            output: AdvancedGameStat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                week?: number | undefined
                team?: string | undefined
                opponent?: string | undefined
                excludeGarbageTime?: boolean | undefined
                seasonType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/stats/player/season': {
      $get:
        | {
            input: {
              query: {
                year: number
                team?: string | undefined
                conference?: string | undefined
                startWeek?: number | undefined
                endWeek?: number | undefined
                seasonType?: string | undefined
                category?: string | undefined
              }
            }
            output: PlayerSeasonStat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year: number
                team?: string | undefined
                conference?: string | undefined
                startWeek?: number | undefined
                endWeek?: number | undefined
                seasonType?: string | undefined
                category?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/stats/season': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                startWeek?: number | undefined
                endWeek?: number | undefined
              }
            }
            output: TeamSeasonStat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                conference?: string | undefined
                startWeek?: number | undefined
                endWeek?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/stats/season/advanced': {
      $get:
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                excludeGarbageTime?: boolean | undefined
                startWeek?: number | undefined
                endWeek?: number | undefined
              }
            }
            output: AdvancedSeasonStat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                year?: number | undefined
                team?: string | undefined
                excludeGarbageTime?: boolean | undefined
                startWeek?: number | undefined
                endWeek?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/talent': {
      $get:
        | {
            input: { query: { year?: number | undefined } }
            output: TeamTalent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { year?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/teams': {
      $get:
        | {
            input: { query: { conference?: string | undefined } }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { conference?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/teams/fbs': {
      $get:
        | {
            input: { query: { year?: number | undefined } }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { year?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/teams/matchup': {
      $get:
        | {
            input: {
              query: {
                team1: string
                team2: string
                minYear?: number | undefined
                maxYear?: number | undefined
              }
            }
            output: TeamMatchup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team1: string
                team2: string
                minYear?: number | undefined
                maxYear?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/venues': {
      $get:
        | { input: {}; output: Venue[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
