type TypeOverAdditionIncidents = ('league' | 'match' | 'player' | 'serie' | 'team' | 'tournament')[]
type IncidentModifiedAt = string
type VideogameID = 1 | 3 | 4 | 14 | 20 | 22 | 23 | 24 | 25 | 26
type VideogameSlug =
  | 'cod-mw'
  | 'cs-go'
  | 'dota-2'
  | 'fifa'
  | 'league-of-legends'
  | 'ow'
  | 'pubg'
  | 'r6-siege'
  | 'rl'
  | 'valorant'
type VideogameIDOrSlug = VideogameID | VideogameSlug
type VideogameOverAdditionIncidents = VideogameIDOrSlug[]
type IncidentChangeType = 'creation' | 'deletion' | 'update'
type LeagueID = number
type MatchID = number
type PlayerID = number
type SerieID = number
type TeamID = number
type TournamentID = number
type IncidentID = LeagueID | MatchID | PlayerID | SerieID | TeamID | TournamentID
type LeagueModifiedAt = string
type LeagueName = string
type SerieFullName = string
type SerieModifiedAt = string
type SerieSlug = string
type SerieYear = number
type BaseSerie = {
  begin_at: {}
  description: {}
  end_at: {}
  full_name: SerieFullName
  id: SerieID
  league_id: LeagueID
  modified_at: SerieModifiedAt
  name: {}
  season: {}
  slug: SerieSlug
  tier: {}
  winner_id: {}
  winner_type: {}
  year: SerieYear
}
type BaseSeries = BaseSerie[]
type LeagueSlug = string
type LeagueVideogameLoL = { current_version: {}; id: 1; name: 'LoL'; slug: 'league-of-legends' }
type LeagueVideogameCSGO = { current_version: {}; id: 3; name: 'CS:GO'; slug: 'cs-go' }
type LeagueVideogameDota2 = { current_version: {}; id: 4; name: 'Dota 2'; slug: 'dota-2' }
type LeagueVideogameOverwatch = { current_version: {}; id: 14; name: 'Overwatch'; slug: 'ow' }
type LeagueVideogamePUBG = { current_version: {}; id: 20; name: 'PUBG'; slug: 'pubg' }
type LeagueVideogameRocketLeague = {
  current_version: {}
  id: 22
  name: 'Rocket League'
  slug: 'rl'
}
type LeagueVideogameCodmw = { current_version: {}; id: 23; name: 'Call of Duty'; slug: 'cod-mw' }
type LeagueVideogameR6siege = {
  current_version: {}
  id: 24
  name: 'Rainbow 6 Siege'
  slug: 'r6-siege'
}
type LeagueVideogameFifa = { current_version: {}; id: 25; name: 'FIFA'; slug: 'fifa' }
type LeagueVideogameValorant = { current_version: {}; id: 26; name: 'Valorant'; slug: 'valorant' }
type LeagueVideogame =
  | LeagueVideogameLoL
  | LeagueVideogameCSGO
  | LeagueVideogameDota2
  | LeagueVideogameOverwatch
  | LeagueVideogamePUBG
  | LeagueVideogameRocketLeague
  | LeagueVideogameCodmw
  | LeagueVideogameR6siege
  | LeagueVideogameFifa
  | LeagueVideogameValorant
type League = {
  id: LeagueID
  image_url: {}
  modified_at: LeagueModifiedAt
  name: LeagueName
  series: BaseSeries
  slug: LeagueSlug
  url: {}
  videogame: LeagueVideogame
}
type IncidentOfTypeLeague = {
  change_type: IncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: League
  type: 'league'
}
type MatchDetailedStats = boolean
type MatchIsDraw = boolean
type MatchIsForfeit = boolean
type GameComplete = boolean
type GameDetailedStats = boolean
type GameIsFinished = boolean
type GameIsForfeit = boolean
type LoLGameID = number
type CSGOGameID = number
type OwGameID = number
type Dota2GameID = number
type PUBGGameID = number
type GameID = LoLGameID | CSGOGameID | OwGameID | Dota2GameID | PUBGGameID
type GamePosition = number
type GameStatus = 'finished' | 'not_played' | 'not_started' | 'running'
type GameWinner = { id: {}; type: {} }
type Game = {
  begin_at: {}
  complete: GameComplete
  detailed_stats: GameDetailedStats
  end_at: {}
  finished: GameIsFinished
  forfeit: GameIsForfeit
  id: GameID
  length: {}
  match_id: MatchID
  position: GamePosition
  status: GameStatus
  video_url: {}
  winner: GameWinner
  winner_type: {}
}
type Games = Game[]
type BaseLeague = {
  id: LeagueID
  image_url: {}
  modified_at: LeagueModifiedAt
  name: LeagueName
  slug: LeagueSlug
  url: {}
}
type MatchLiveIsSupported = boolean
type MatchLive = { opens_at: {}; supported: MatchLiveIsSupported; url: {} }
type MatchType = 'best_of' | 'custom' | 'first_to' | 'ow_best_of'
type MatchModifiedAt = string
type MatchName = string
type GameCount = number
type PlayerName = string
type BasePlayer = {
  birth_year: {}
  birthday: {}
  first_name: {}
  hometown: {}
  id: PlayerID
  image_url: {}
  last_name: {}
  name: PlayerName
  nationality: {}
  role: {}
  slug: {}
}
type TeamModifiedAt = string
type TeamName = string
type BaseTeam = {
  acronym: {}
  id: TeamID
  image_url: {}
  location: {}
  modified_at: TeamModifiedAt
  name: TeamName
  slug: {}
}
type BaseOpponent = BasePlayer | BaseTeam
type OpponentType = 'Player' | 'Team'
type Opponent = { opponent: BaseOpponent; type: OpponentType }
type Opponents = Opponent[]
type MatchScore = number
type MatchTeamResult = { score: MatchScore; team_id: TeamID }
type MatchPlayerResult = { player_id: PlayerID; score: MatchScore }
type MatchResult = MatchTeamResult | MatchPlayerResult
type MatchResults = MatchResult[]
type MatchStatus = 'canceled' | 'finished' | 'not_started' | 'postponed' | 'running'
type MatchLocalizedStream = { embed_url: {}; raw_url: {} }
type MatchLocalizedStreams = {
  english: MatchLocalizedStream
  official: MatchLocalizedStream
  russian: MatchLocalizedStream
}
type StreamLanguage =
  | 'aa'
  | 'ab'
  | 'ae'
  | 'af'
  | 'ak'
  | 'am'
  | 'an'
  | 'ar'
  | 'as'
  | 'av'
  | 'ay'
  | 'az'
  | 'ba'
  | 'be'
  | 'bg'
  | 'bh'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ce'
  | 'ch'
  | 'co'
  | 'cr'
  | 'cs'
  | 'cu'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de'
  | 'dv'
  | 'dz'
  | 'ee'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'ff'
  | 'fi'
  | 'fj'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'gv'
  | 'ha'
  | 'he'
  | 'hi'
  | 'ho'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'hz'
  | 'ia'
  | 'id'
  | 'ie'
  | 'ig'
  | 'ii'
  | 'ik'
  | 'io'
  | 'is'
  | 'it'
  | 'iu'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kg'
  | 'ki'
  | 'kj'
  | 'kk'
  | 'kl'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kr'
  | 'ks'
  | 'ku'
  | 'kv'
  | 'kw'
  | 'ky'
  | 'la'
  | 'lb'
  | 'lg'
  | 'li'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mg'
  | 'mh'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'na'
  | 'nb'
  | 'nd'
  | 'ne'
  | 'ng'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nr'
  | 'nv'
  | 'ny'
  | 'oc'
  | 'oj'
  | 'om'
  | 'or'
  | 'os'
  | 'pa'
  | 'pi'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sa'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'ss'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'ts'
  | 'tt'
  | 'tw'
  | 'ty'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'wo'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'za'
  | 'zh'
  | 'zu'
type StreamIsMain = boolean
type StreamIsOfficial = boolean
type StreamURL = string
type Stream = {
  embed_url: {}
  language: StreamLanguage
  main: StreamIsMain
  official: StreamIsOfficial
  raw_url: StreamURL
}
type StreamsList = Stream[]
type TournamentLiveSupported = boolean
type TournamentModifiedAt = string
type TournamentName = string
type TournamentSlug = string
type BaseTournament = {
  begin_at: {}
  end_at: {}
  id: TournamentID
  league_id: LeagueID
  live_supported: TournamentLiveSupported
  modified_at: TournamentModifiedAt
  name: TournamentName
  prizepool: {}
  serie_id: SerieID
  slug: TournamentSlug
  winner_id: {}
  winner_type: {}
}
type CurrentVideogame =
  | { id: 1; name: 'LoL'; slug: 'league-of-legends' }
  | { id: 3; name: 'CS:GO'; slug: 'cs-go' }
  | { id: 4; name: 'Dota 2'; slug: 'dota-2' }
  | { id: 14; name: 'Overwatch'; slug: 'ow' }
  | { id: 20; name: 'PUBG'; slug: 'pubg' }
  | { id: 22; name: 'Rocket League'; slug: 'rl' }
  | { id: 23; name: 'Call of Duty'; slug: 'cod-mw' }
  | { id: 24; name: 'Rainbow 6 Siege'; slug: 'r6-siege' }
  | { id: 25; name: 'FIFA'; slug: 'fifa' }
  | { id: 26; name: 'Valorant'; slug: 'valorant' }
type VideogameVersionIsCurrent = boolean
type VideogameVersion = string
type Match = {
  begin_at: {}
  detailed_stats: MatchDetailedStats
  draw: MatchIsDraw
  end_at: {}
  forfeit: MatchIsForfeit
  game_advantage: {}
  games: Games
  id: MatchID
  league: BaseLeague
  league_id: LeagueID
  live: MatchLive
  live_embed_url: {}
  match_type: MatchType
  modified_at: MatchModifiedAt
  name: MatchName
  number_of_games: GameCount
  official_stream_url: {}
  opponents: Opponents
  original_scheduled_at: {}
  rescheduled: {}
  results: MatchResults
  scheduled_at: {}
  serie: BaseSerie
  serie_id: SerieID
  slug: {}
  status: MatchStatus
  streams: MatchLocalizedStreams
  streams_list: StreamsList
  tournament: BaseTournament
  tournament_id: TournamentID
  videogame: CurrentVideogame
  videogame_version: { current: VideogameVersionIsCurrent; name: VideogameVersion }
  winner: {}
  winner_id: {}
}
type IncidentOfTypeMatch = {
  change_type: IncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: Match
  type: 'match'
}
type Player = {
  birth_year?: {} | undefined
  birthday?: {} | undefined
  current_team: {
    acronym: {}
    id: TeamID
    image_url: {}
    location: {}
    modified_at: TeamModifiedAt
    name: TeamName
    slug: {}
  }
  current_videogame: {}
  first_name: {}
  hometown: {}
  id: PlayerID
  image_url: {}
  last_name: {}
  name: PlayerName
  nationality: {}
  role: {}
  slug: {}
}
type IncidentOfTypePlayer = {
  change_type: IncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: Player
  type: 'player'
}
type BaseTournaments = BaseTournament[]
type VideogameTitleID = number
type VideogameTitleName = string
type Serie = {
  begin_at: {}
  description: {}
  end_at: {}
  full_name: SerieFullName
  id: SerieID
  league: BaseLeague
  league_id: LeagueID
  modified_at: SerieModifiedAt
  name: {}
  season: {}
  slug: SerieSlug
  tier: {}
  tournaments: BaseTournaments
  videogame: CurrentVideogame
  videogame_title: { id: VideogameTitleID; name: VideogameTitleName; videogame_id: VideogameID }
  winner_id: {}
  winner_type: {}
  year: SerieYear
}
type IncidentOfTypeSerie = {
  change_type: IncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: Serie
  type: 'serie'
}
type BasePlayers = BasePlayer[]
type Team = {
  acronym: {}
  current_videogame: {}
  id: TeamID
  image_url: {}
  location: {}
  modified_at: TeamModifiedAt
  name: TeamName
  players: BasePlayers
  slug: {}
}
type IncidentOfTypeTeam = {
  change_type: IncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: Team
  type: 'team'
}
type TournamentRosterItem = { players: BasePlayers; team: BaseTeam }
type TournamentRosterItems = TournamentRosterItem[]
type BaseMatch = {
  begin_at: {}
  detailed_stats: MatchDetailedStats
  draw: MatchIsDraw
  end_at: {}
  forfeit: MatchIsForfeit
  game_advantage: {}
  id: MatchID
  live: MatchLive
  live_embed_url: {}
  match_type: MatchType
  modified_at: MatchModifiedAt
  name: MatchName
  number_of_games: GameCount
  official_stream_url: {}
  original_scheduled_at: {}
  rescheduled: {}
  scheduled_at: {}
  slug: {}
  status: MatchStatus
  streams: MatchLocalizedStreams
  streams_list: StreamsList
  tournament_id: TournamentID
  winner_id: {}
}
type BaseMatches = BaseMatch[]
type BaseTeams = BaseTeam[]
type Tournament = {
  begin_at: {}
  end_at: {}
  expected_roster: TournamentRosterItems
  id: TournamentID
  league: BaseLeague
  league_id: LeagueID
  live_supported: TournamentLiveSupported
  matches: BaseMatches
  modified_at: TournamentModifiedAt
  name: TournamentName
  prizepool: {}
  serie: BaseSerie
  serie_id: SerieID
  slug: TournamentSlug
  teams: BaseTeams
  videogame: CurrentVideogame
  winner_id: {}
  winner_type: {}
}
type IncidentOfTypeTournament = {
  change_type: IncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: Tournament
  type: 'tournament'
}
type NonDeletionIncident =
  | IncidentOfTypeLeague
  | IncidentOfTypeMatch
  | IncidentOfTypePlayer
  | IncidentOfTypeSerie
  | IncidentOfTypeTeam
  | IncidentOfTypeTournament
type AdditionIncidents = NonDeletionIncident[]
type TypeOverChangeIncidents = ('league' | 'match' | 'player' | 'serie' | 'team' | 'tournament')[]
type VideogameOverChangeIncidents = VideogameIDOrSlug[]
type DeletionIncidentChangeType = 'deletion'
type IncidentDeletedAt = string
type IncidentDeletionReasonReplaced = string
type IncidentDeletionReasonMerged = string
type IncidentDeletionReasonDeleted = 'Model deleted'
type IncidentDeletionReason =
  | IncidentDeletionReasonReplaced
  | IncidentDeletionReasonMerged
  | IncidentDeletionReasonDeleted
type DeletionObject = {
  deleted_at: IncidentDeletedAt
  reason: IncidentDeletionReason
  videogame_id: VideogameID
}
type IncidentType = 'league' | 'match' | 'player' | 'serie' | 'team' | 'tournament'
type DeletionIncident = {
  change_type: DeletionIncidentChangeType
  id: IncidentID
  modified_at: IncidentModifiedAt
  object: DeletionObject
  type: IncidentType
}
type Incident =
  | IncidentOfTypeLeague
  | IncidentOfTypeMatch
  | IncidentOfTypePlayer
  | IncidentOfTypeSerie
  | IncidentOfTypeTeam
  | IncidentOfTypeTournament
  | DeletionIncident
type ChangeIncidents = Incident[]
type TypeOverDeletionIncidents = ('league' | 'match' | 'player' | 'serie' | 'team' | 'tournament')[]
type VideogameOverDeletionIncidents = VideogameIDOrSlug[]
type DeletionIncidents = DeletionIncident[]
type TypeOverIncidents = ('league' | 'match' | 'player' | 'serie' | 'team' | 'tournament')[]
type VideogameOverIncidents = VideogameIDOrSlug[]
type Incidents = Incident[]
type LeagueURL = string
type SearchOverLeagues = {
  name?: LeagueName | undefined
  slug?: LeagueSlug | undefined
  url?: LeagueURL | undefined
}
type SortOverLeagues = (
  | 'id'
  | '-id'
  | 'modified_at'
  | '-modified_at'
  | 'name'
  | '-name'
  | 'slug'
  | '-slug'
  | 'url'
  | '-url'
)[]
type RangeOverLeagues = {
  id?: LeagueID[] | undefined
  modified_at?: LeagueModifiedAt[] | undefined
  name?: LeagueName[] | undefined
  slug?: LeagueSlug[] | undefined
  url?: LeagueURL[] | undefined
}
type FilterOverLeagues = {
  id?: LeagueID[] | undefined
  modified_at?: LeagueModifiedAt[] | undefined
  name?: LeagueName[] | undefined
  slug?: LeagueSlug[] | undefined
  url?: LeagueURL[] | undefined
}
type Leagues = League[]
type LeagueIDOrSlug = LeagueID | LeagueSlug
type MatchBeginAt = string
type MatchEndAt = string
type TeamSlug = string
type TeamIDOrSlug = TeamID | TeamSlug
type MatchScheduledAt = string
type MatchSlug = string
type OpponentID = PlayerID | TeamID
type FilterOverMatches = {
  begin_at?: MatchBeginAt[] | undefined
  detailed_stats?: MatchDetailedStats | undefined
  draw?: MatchIsDraw | undefined
  end_at?: MatchEndAt[] | undefined
  finished?: boolean | undefined
  forfeit?: MatchIsForfeit | undefined
  future?: boolean | undefined
  id?: MatchID[] | undefined
  league_id?: LeagueID[] | undefined
  match_type?: MatchType[] | undefined
  modified_at?: MatchModifiedAt[] | undefined
  name?: MatchName[] | undefined
  not_started?: boolean | undefined
  number_of_games?: GameCount[] | undefined
  opponent_id?: TeamIDOrSlug[] | undefined
  past?: boolean | undefined
  running?: boolean | undefined
  scheduled_at?: MatchScheduledAt[] | undefined
  serie_id?: SerieID[] | undefined
  slug?: MatchSlug[] | undefined
  status?: MatchStatus[] | undefined
  tournament_id?: TournamentID[] | undefined
  unscheduled?: boolean | undefined
  videogame?: VideogameIDOrSlug[] | undefined
  winner_id?: OpponentID[] | undefined
}
type SearchOverMatches = {
  match_type?: MatchType | undefined
  name?: MatchName | undefined
  slug?: MatchSlug | undefined
  status?: MatchStatus | undefined
}
type SortOverMatches = (
  | 'begin_at'
  | '-begin_at'
  | 'detailed_stats'
  | '-detailed_stats'
  | 'draw'
  | '-draw'
  | 'end_at'
  | '-end_at'
  | 'forfeit'
  | '-forfeit'
  | 'id'
  | '-id'
  | 'match_type'
  | '-match_type'
  | 'modified_at'
  | '-modified_at'
  | 'name'
  | '-name'
  | 'number_of_games'
  | '-number_of_games'
  | 'scheduled_at'
  | '-scheduled_at'
  | 'slug'
  | '-slug'
  | 'status'
  | '-status'
  | 'tournament_id'
  | '-tournament_id'
  | 'winner_id'
  | '-winner_id'
)[]
type RangeOverMatches = {
  begin_at?: MatchBeginAt[] | undefined
  detailed_stats?: MatchDetailedStats[] | undefined
  draw?: MatchIsDraw[] | undefined
  end_at?: MatchEndAt[] | undefined
  forfeit?: MatchIsForfeit[] | undefined
  id?: MatchID[] | undefined
  match_type?: MatchType[] | undefined
  modified_at?: MatchModifiedAt[] | undefined
  name?: MatchName[] | undefined
  number_of_games?: GameCount[] | undefined
  scheduled_at?: MatchScheduledAt[] | undefined
  slug?: MatchSlug[] | undefined
  status?: MatchStatus[] | undefined
  tournament_id?: TournamentID[] | undefined
  winner_id?: OpponentID[] | undefined
}
type Matches = Match[]
type SerieBeginAt = string
type SerieDescription = string
type SerieEndAt = string
type SerieName = string
type SerieSeason = string
type SerieTier = string
type FilterOverSeries = {
  begin_at?: SerieBeginAt[] | undefined
  description?: SerieDescription[] | undefined
  end_at?: SerieEndAt[] | undefined
  id?: SerieID[] | undefined
  league_id?: LeagueID[] | undefined
  modified_at?: SerieModifiedAt[] | undefined
  name?: SerieName[] | undefined
  season?: SerieSeason[] | undefined
  slug?: SerieSlug[] | undefined
  tier?: SerieTier[] | undefined
  winner_id?: OpponentID[] | undefined
  winner_type?: OpponentType[] | undefined
  year?: SerieYear[] | undefined
}
type SearchOverSeries = {
  description?: SerieDescription | undefined
  name?: SerieName | undefined
  season?: SerieSeason | undefined
  slug?: SerieSlug | undefined
  tier?: SerieTier | undefined
  winner_type?: OpponentType | undefined
}
type SortOverSeries = (
  | 'begin_at'
  | '-begin_at'
  | 'description'
  | '-description'
  | 'end_at'
  | '-end_at'
  | 'id'
  | '-id'
  | 'league_id'
  | '-league_id'
  | 'modified_at'
  | '-modified_at'
  | 'name'
  | '-name'
  | 'season'
  | '-season'
  | 'slug'
  | '-slug'
  | 'tier'
  | '-tier'
  | 'winner_id'
  | '-winner_id'
  | 'winner_type'
  | '-winner_type'
  | 'year'
  | '-year'
)[]
type RangeOverSeries = {
  begin_at?: SerieBeginAt[] | undefined
  description?: SerieDescription[] | undefined
  end_at?: SerieEndAt[] | undefined
  id?: SerieID[] | undefined
  league_id?: LeagueID[] | undefined
  modified_at?: SerieModifiedAt[] | undefined
  name?: SerieName[] | undefined
  season?: SerieSeason[] | undefined
  slug?: SerieSlug[] | undefined
  tier?: SerieTier[] | undefined
  winner_id?: OpponentID[] | undefined
  winner_type?: OpponentType[] | undefined
  year?: SerieYear[] | undefined
}
type Series = Serie[]
type TournamentBeginAt = string
type TournamentEndAt = string
type TournamentPrizepool = string
type FilterOverShortTournaments = {
  begin_at?: TournamentBeginAt[] | undefined
  end_at?: TournamentEndAt[] | undefined
  id?: TournamentID[] | undefined
  live_supported?: TournamentLiveSupported | undefined
  modified_at?: TournamentModifiedAt[] | undefined
  name?: TournamentName[] | undefined
  prizepool?: TournamentPrizepool[] | undefined
  serie_id?: SerieID[] | undefined
  slug?: TournamentSlug[] | undefined
  winner_id?: OpponentID[] | undefined
  winner_type?: OpponentType[] | undefined
}
type SearchOverShortTournaments = {
  name?: TournamentName | undefined
  prizepool?: TournamentPrizepool | undefined
  slug?: TournamentSlug | undefined
  winner_type?: OpponentType | undefined
}
type SortOverShortTournaments = (
  | 'begin_at'
  | '-begin_at'
  | 'end_at'
  | '-end_at'
  | 'id'
  | '-id'
  | 'modified_at'
  | '-modified_at'
  | 'name'
  | '-name'
  | 'prizepool'
  | '-prizepool'
  | 'serie_id'
  | '-serie_id'
  | 'slug'
  | '-slug'
  | 'winner_id'
  | '-winner_id'
  | 'winner_type'
  | '-winner_type'
)[]
type RangeOverShortTournaments = {
  begin_at?: TournamentBeginAt[] | undefined
  end_at?: TournamentEndAt[] | undefined
  id?: TournamentID[] | undefined
  modified_at?: TournamentModifiedAt[] | undefined
  name?: TournamentName[] | undefined
  prizepool?: TournamentPrizepool[] | undefined
  serie_id?: SerieID[] | undefined
  slug?: TournamentSlug[] | undefined
  winner_id?: OpponentID[] | undefined
  winner_type?: OpponentType[] | undefined
}
type ShortTournament = {
  begin_at: {}
  end_at: {}
  id: TournamentID
  league: BaseLeague
  league_id: LeagueID
  live_supported: TournamentLiveSupported
  matches: BaseMatches
  modified_at: TournamentModifiedAt
  name: TournamentName
  prizepool: {}
  serie: BaseSerie
  serie_id: SerieID
  slug: TournamentSlug
  teams: BaseTeams
  videogame: CurrentVideogame
  winner_id: {}
  winner_type: {}
}
type ShortTournaments = ShortTournament[]
type LiveIsOpen = boolean
type LiveType = 'events' | 'frames'
type LiveUrl = string
type LiveEndpoint = {
  begin_at: {}
  expected_begin_at: {}
  last_active: {}
  match_id: MatchID
  open: LiveIsOpen
  type: LiveType
  url: LiveUrl
}
type LiveEndpoints = LiveEndpoint[]
type EventID = number
type EventIsActive = boolean
type Live = {
  endpoints: LiveEndpoints
  event: {
    begin_at: {}
    end_at: {}
    game: VideogameSlug
    id: EventID
    is_active: EventIsActive
    stream_url: {}
    tournament_id: TournamentID
  }
  match: Match
}
type Lives = Live[]
type MatchIDOrSlug = MatchID | MatchSlug
type OpponentTypeTeam = 'Team'
type Teams = Team[]
type MatchTeamOpponentsObject = { opponent_type: OpponentTypeTeam; opponents: Teams }
type OpponentTypePlayer = 'Player'
type MatchOpponentBasePlayer = {
  birth_year: {}
  birthday: {}
  current_videogame: CurrentVideogame
  first_name: {}
  hometown: {}
  id: PlayerID
  image_url: {}
  last_name: {}
  name: PlayerName
  nationality: {}
  role: {}
  slug: {}
}
type MatchOpponentBasePlayers = MatchOpponentBasePlayer[]
type MatchPlayerOpponentsObject = {
  opponent_type: OpponentTypePlayer
  opponents: MatchOpponentBasePlayers
}
type MatchOpponentsObject = MatchTeamOpponentsObject | MatchPlayerOpponentsObject
type PlayerBirthYear = number
type PlayerBirthday = string
type PlayerFirstName = string
type PlayerHometown = string
type PlayerLastName = string
type PlayerNationality = string
type PlayerRoleSlug = string
type PlayerSlug = string
type FilterOverPlayers = {
  birth_year?: PlayerBirthYear[] | undefined
  birthday?: PlayerBirthday[] | undefined
  first_name?: PlayerFirstName[] | undefined
  hometown?: PlayerHometown[] | undefined
  id?: PlayerID[] | undefined
  last_name?: PlayerLastName[] | undefined
  name?: PlayerName[] | undefined
  nationality?: PlayerNationality[] | undefined
  role?: PlayerRoleSlug[] | undefined
  slug?: PlayerSlug[] | undefined
  team_id?: TeamID[] | undefined
  videogame_id?: VideogameID[] | undefined
}
type SearchOverPlayers = {
  birthday?: PlayerBirthday | undefined
  first_name?: PlayerFirstName | undefined
  hometown?: PlayerHometown | undefined
  last_name?: PlayerLastName | undefined
  name?: PlayerName | undefined
  nationality?: PlayerNationality | undefined
  role?: PlayerRoleSlug | undefined
  slug?: PlayerSlug | undefined
}
type SortOverPlayers = (
  | 'birth_year'
  | '-birth_year'
  | 'birthday'
  | '-birthday'
  | 'first_name'
  | '-first_name'
  | 'hometown'
  | '-hometown'
  | 'id'
  | '-id'
  | 'last_name'
  | '-last_name'
  | 'name'
  | '-name'
  | 'nationality'
  | '-nationality'
  | 'role'
  | '-role'
  | 'slug'
  | '-slug'
  | 'videogame_id'
  | '-videogame_id'
  | 'team_id'
  | '-team_id'
)[]
type RangeOverPlayers = {
  birth_year?: PlayerBirthYear[] | undefined
  birthday?: PlayerBirthday[] | undefined
  first_name?: PlayerFirstName[] | undefined
  hometown?: PlayerHometown[] | undefined
  id?: PlayerID[] | undefined
  last_name?: PlayerLastName[] | undefined
  name?: PlayerName[] | undefined
  nationality?: PlayerNationality[] | undefined
  role?: PlayerRoleSlug[] | undefined
  slug?: PlayerSlug[] | undefined
}
type Players = Player[]
type PlayerIDOrSlug = PlayerID | PlayerSlug
type SerieIDOrSlug = SerieID | SerieSlug
type TeamAcronym = string
type TeamLocation = string
type FilterOverTeams = {
  acronym?: TeamAcronym[] | undefined
  id?: TeamID[] | undefined
  location?: TeamLocation[] | undefined
  modified_at?: TeamModifiedAt[] | undefined
  name?: TeamName[] | undefined
  slug?: TeamSlug[] | undefined
  videogame_id?: VideogameID[] | undefined
}
type SearchOverTeams = {
  acronym?: TeamAcronym | undefined
  location?: TeamLocation | undefined
  name?: TeamName | undefined
  slug?: TeamSlug | undefined
}
type SortOverTeams = (
  | 'acronym'
  | '-acronym'
  | 'id'
  | '-id'
  | 'location'
  | '-location'
  | 'modified_at'
  | '-modified_at'
  | 'name'
  | '-name'
  | 'slug'
  | '-slug'
  | 'videogame_id'
  | '-videogame_id'
)[]
type RangeOverTeams = {
  acronym?: TeamAcronym[] | undefined
  id?: TeamID[] | undefined
  location?: TeamLocation[] | undefined
  modified_at?: TeamModifiedAt[] | undefined
  name?: TeamName[] | undefined
  slug?: TeamSlug[] | undefined
}
type TournamentIDOrSlug = TournamentID | TournamentSlug
type MatchEmbedLiveVideoURLDeprecated = string
type MatchOfficialStreamURL = string
type MatchOriginalScheduledAt = string
type FilterOverBrackets = {
  begin_at?: MatchBeginAt[] | undefined
  detailed_stats?: MatchDetailedStats | undefined
  draw?: MatchIsDraw | undefined
  end_at?: MatchEndAt[] | undefined
  forfeit?: MatchIsForfeit | undefined
  game_advantage?: OpponentID[] | undefined
  id?: MatchID[] | undefined
  live_embed_url?: MatchEmbedLiveVideoURLDeprecated[] | undefined
  match_type?: MatchType[] | undefined
  modified_at?: MatchModifiedAt[] | undefined
  name?: MatchName[] | undefined
  number_of_games?: GameCount[] | undefined
  official_stream_url?: MatchOfficialStreamURL[] | undefined
  original_scheduled_at?: MatchOriginalScheduledAt[] | undefined
  scheduled_at?: MatchScheduledAt[] | undefined
  slug?: MatchSlug[] | undefined
  status?: MatchStatus[] | undefined
  tournament_id?: TournamentID[] | undefined
  winner_id?: OpponentID[] | undefined
}
type RangeOverBrackets = {
  begin_at?: MatchBeginAt[] | undefined
  detailed_stats?: MatchDetailedStats[] | undefined
  draw?: MatchIsDraw[] | undefined
  end_at?: MatchEndAt[] | undefined
  forfeit?: MatchIsForfeit[] | undefined
  game_advantage?: OpponentID[] | undefined
  id?: MatchID[] | undefined
  live_embed_url?: MatchEmbedLiveVideoURLDeprecated[] | undefined
  match_type?: MatchType[] | undefined
  modified_at?: MatchModifiedAt[] | undefined
  name?: MatchName[] | undefined
  number_of_games?: GameCount[] | undefined
  official_stream_url?: MatchOfficialStreamURL[] | undefined
  original_scheduled_at?: MatchOriginalScheduledAt[] | undefined
  scheduled_at?: MatchScheduledAt[] | undefined
  slug?: MatchSlug[] | undefined
  status?: MatchStatus[] | undefined
  tournament_id?: TournamentID[] | undefined
  winner_id?: OpponentID[] | undefined
}
type SortOverBrackets = (
  | 'begin_at'
  | '-begin_at'
  | 'detailed_stats'
  | '-detailed_stats'
  | 'draw'
  | '-draw'
  | 'end_at'
  | '-end_at'
  | 'forfeit'
  | '-forfeit'
  | 'game_advantage'
  | '-game_advantage'
  | 'id'
  | '-id'
  | 'live_embed_url'
  | '-live_embed_url'
  | 'match_type'
  | '-match_type'
  | 'modified_at'
  | '-modified_at'
  | 'name'
  | '-name'
  | 'number_of_games'
  | '-number_of_games'
  | 'official_stream_url'
  | '-official_stream_url'
  | 'original_scheduled_at'
  | '-original_scheduled_at'
  | 'scheduled_at'
  | '-scheduled_at'
  | 'slug'
  | '-slug'
  | 'status'
  | '-status'
  | 'tournament_id'
  | '-tournament_id'
  | 'winner_id'
  | '-winner_id'
)[]
type SearchOverBrackets = {
  live_embed_url?: MatchEmbedLiveVideoURLDeprecated | undefined
  match_type?: MatchType | undefined
  name?: MatchName | undefined
  official_stream_url?: MatchOfficialStreamURL | undefined
  slug?: MatchSlug | undefined
  status?: MatchStatus | undefined
}
type PreviousMatchType = 'loser' | 'winner'
type PreviousMatch = { match_id: MatchID; type: PreviousMatchType }
type PreviousMatches = PreviousMatch[]
type Bracket = {
  begin_at: {}
  detailed_stats: MatchDetailedStats
  draw: MatchIsDraw
  end_at: {}
  forfeit: MatchIsForfeit
  game_advantage: {}
  games: Games
  id: MatchID
  live: MatchLive
  live_embed_url: {}
  match_type: MatchType
  modified_at: MatchModifiedAt
  name: MatchName
  number_of_games: GameCount
  official_stream_url: {}
  opponents: Opponents
  original_scheduled_at: {}
  previous_matches: PreviousMatches
  scheduled_at: {}
  slug: {}
  status: MatchStatus
  streams: MatchLocalizedStreams
  streams_list: StreamsList
  tournament_id: TournamentID
  winner_id: {}
}
type Brackets = Bracket[]
type TournamentTeamRosters = { rosters: Teams; type: OpponentTypeTeam }
type TournamentPlayerRosters = { rosters: Players; type: OpponentTypePlayer }
type TournamentRosters = TournamentTeamRosters | TournamentPlayerRosters
type StandingRank = number
type BracketStanding = { last_match: BaseMatch; rank: StandingRank; team: BaseTeam }
type StandingLosses = number
type StandingTies = number
type MatchCount = number
type GroupStanding = {
  losses: StandingLosses
  rank: StandingRank
  team: BaseTeam
  ties?: StandingTies | undefined
  total: MatchCount
  wins: MatchCount
}
type Standing = BracketStanding | GroupStanding
type Standings = Standing[]
type VideogameLeague = {
  id: LeagueID
  image_url: {}
  modified_at: LeagueModifiedAt
  name: LeagueName
  series: BaseSeries
  slug: LeagueSlug
  url: {}
}
type VideogameLeagues = VideogameLeague[]
type VideogameLoL = {
  current_version: {}
  id: 1
  leagues: VideogameLeagues
  name: 'LoL'
  slug: 'league-of-legends'
}
type VideogameCSGO = {
  current_version: {}
  id: 3
  leagues: VideogameLeagues
  name: 'CS:GO'
  slug: 'cs-go'
}
type VideogameDota2 = {
  current_version: {}
  id: 4
  leagues: VideogameLeagues
  name: 'Dota 2'
  slug: 'dota-2'
}
type VideogameOverwatch = {
  current_version: {}
  id: 14
  leagues: VideogameLeagues
  name: 'Overwatch'
  slug: 'ow'
}
type VideogamePUBG = {
  current_version: {}
  id: 20
  leagues: VideogameLeagues
  name: 'PUBG'
  slug: 'pubg'
}
type VideogameRocketLeague = {
  current_version: {}
  id: 22
  leagues: VideogameLeagues
  name: 'Rocket League'
  slug: 'rl'
}
type VideogameCodmw = {
  current_version: {}
  id: 23
  leagues: VideogameLeagues
  name: 'Call of Duty'
  slug: 'cod-mw'
}
type VideogameR6siege = {
  current_version: {}
  id: 24
  leagues: VideogameLeagues
  name: 'Rainbow 6 Siege'
  slug: 'r6-siege'
}
type VideogameFifa = {
  current_version: {}
  id: 25
  leagues: VideogameLeagues
  name: 'FIFA'
  slug: 'fifa'
}
type VideogameValorant = {
  current_version: {}
  id: 26
  leagues: VideogameLeagues
  name: 'Valorant'
  slug: 'valorant'
}
type Videogame =
  | VideogameLoL
  | VideogameCSGO
  | VideogameDota2
  | VideogameOverwatch
  | VideogamePUBG
  | VideogameRocketLeague
  | VideogameCodmw
  | VideogameR6siege
  | VideogameFifa
  | VideogameValorant
type Videogames = Videogame[]
type FilterOverShortVideogameVersions = {
  current?: VideogameVersionIsCurrent | undefined
  name?: VideogameVersion[] | undefined
}
type RangeOverShortVideogameVersions = {
  current?: VideogameVersionIsCurrent[] | undefined
  name?: VideogameVersion[] | undefined
}
type SortOverShortVideogameVersions = ('current' | '-current' | 'name' | '-name')[]
type SearchOverShortVideogameVersions = { name?: VideogameVersion | undefined }
type ShortVideogameVersion = { current: VideogameVersionIsCurrent; name: VideogameVersion }
type ShortVideogameVersions = ShortVideogameVersion[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/additions': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverAdditionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverAdditionIncidents | undefined
              }
            }
            output: AdditionIncidents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverAdditionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverAdditionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverAdditionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverAdditionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverAdditionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverAdditionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverAdditionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverAdditionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverAdditionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverAdditionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/changes': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverChangeIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverChangeIncidents | undefined
              }
            }
            output: ChangeIncidents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverChangeIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverChangeIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverChangeIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverChangeIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverChangeIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverChangeIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverChangeIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverChangeIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverChangeIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverChangeIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/deletions': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverDeletionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverDeletionIncidents | undefined
              }
            }
            output: DeletionIncidents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverDeletionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverDeletionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverDeletionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverDeletionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverDeletionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverDeletionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverDeletionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverDeletionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverDeletionIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverDeletionIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/incidents': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverIncidents | undefined
              }
            }
            output: Incidents
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
                type?: TypeOverIncidents | undefined
                since?: IncidentModifiedAt | undefined
                videogame?: VideogameOverIncidents | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues': {
      $get:
        | {
            input: {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Leagues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } }
            output: League
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug/matches': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug/matches/past': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug/matches/running': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug/matches/upcoming': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug/series': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/leagues/:league_id_or_slug/tournaments': {
      $get:
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { league_id_or_slug: LeagueIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/lives': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Lives
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/matches': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/matches/past': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/matches/running': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/matches/upcoming': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/matches/:match_id_or_slug': {
      $get:
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: Match
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/matches/:match_id_or_slug/opponents': {
      $get:
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: MatchOpponentsObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { match_id_or_slug: MatchIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/players': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Players
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/players/:player_id_or_slug': {
      $get:
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } }
            output: Player
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/players/:player_id_or_slug/matches': {
      $get:
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { player_id_or_slug: PlayerIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/past': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/running': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/upcoming': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug': {
      $get:
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } }
            output: Serie
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug/matches': {
      $get:
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug/matches/past': {
      $get:
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug/matches/running': {
      $get:
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug/matches/upcoming': {
      $get:
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug/players': {
      $get:
        | {
            input: { param: { serie_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Players
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/series/:serie_id_or_slug/tournaments': {
      $get:
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serie_id_or_slug: SerieIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/teams': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Teams
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/teams/:team_id_or_slug': {
      $get:
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/teams/:team_id_or_slug/leagues': {
      $get:
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Leagues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/teams/:team_id_or_slug/matches': {
      $get:
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/teams/:team_id_or_slug/series': {
      $get:
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/teams/:team_id_or_slug/tournaments': {
      $get:
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_id_or_slug: TeamIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/past': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/running': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/upcoming': {
      $get:
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: FilterOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: Tournament
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug/brackets': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverBrackets | undefined
                range?: RangeOverBrackets | undefined
                sort?: SortOverBrackets | undefined
                search?: SearchOverBrackets | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Brackets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverBrackets | undefined
                range?: RangeOverBrackets | undefined
                sort?: SortOverBrackets | undefined
                search?: SearchOverBrackets | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverBrackets | undefined
                range?: RangeOverBrackets | undefined
                sort?: SortOverBrackets | undefined
                search?: SearchOverBrackets | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverBrackets | undefined
                range?: RangeOverBrackets | undefined
                sort?: SortOverBrackets | undefined
                search?: SearchOverBrackets | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverBrackets | undefined
                range?: RangeOverBrackets | undefined
                sort?: SortOverBrackets | undefined
                search?: SearchOverBrackets | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverBrackets | undefined
                range?: RangeOverBrackets | undefined
                sort?: SortOverBrackets | undefined
                search?: SearchOverBrackets | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug/matches': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Matches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverMatches | undefined
                search?: SearchOverMatches | undefined
                sort?: SortOverMatches | undefined
                range?: RangeOverMatches | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug/players': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Players
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: string } } & {
              query: {
                filter?: FilterOverPlayers | undefined
                search?: SearchOverPlayers | undefined
                sort?: SortOverPlayers | undefined
                range?: RangeOverPlayers | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug/rosters': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: TournamentRosters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug/standings': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Standings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/tournaments/:tournament_id_or_slug/teams': {
      $get:
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Teams
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tournament_id_or_slug: TournamentIDOrSlug } } & {
              query: {
                filter?: FilterOverTeams | undefined
                search?: SearchOverTeams | undefined
                sort?: SortOverTeams | undefined
                range?: RangeOverTeams | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/videogames': {
      $get:
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Videogames
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/videogames/:videogame_id_or_slug': {
      $get:
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } }
            output: Videogame
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/videogames/:videogame_id_or_slug/leagues': {
      $get:
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Leagues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                search?: SearchOverLeagues | undefined
                sort?: SortOverLeagues | undefined
                range?: RangeOverLeagues | undefined
                filter?: FilterOverLeagues | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/videogames/:videogame_id_or_slug/series': {
      $get:
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverSeries | undefined
                search?: SearchOverSeries | undefined
                sort?: SortOverSeries | undefined
                range?: RangeOverSeries | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/videogames/:videogame_id_or_slug/tournaments': {
      $get:
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortTournaments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortTournaments | undefined
                range?: RangeOverShortTournaments | undefined
                sort?: SortOverShortTournaments | undefined
                search?: SearchOverShortTournaments | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/videogames/:videogame_id_or_slug/versions': {
      $get:
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortVideogameVersions | undefined
                range?: RangeOverShortVideogameVersions | undefined
                sort?: SortOverShortVideogameVersions | undefined
                search?: SearchOverShortVideogameVersions | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ShortVideogameVersions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortVideogameVersions | undefined
                range?: RangeOverShortVideogameVersions | undefined
                sort?: SortOverShortVideogameVersions | undefined
                search?: SearchOverShortVideogameVersions | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortVideogameVersions | undefined
                range?: RangeOverShortVideogameVersions | undefined
                sort?: SortOverShortVideogameVersions | undefined
                search?: SearchOverShortVideogameVersions | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortVideogameVersions | undefined
                range?: RangeOverShortVideogameVersions | undefined
                sort?: SortOverShortVideogameVersions | undefined
                search?: SearchOverShortVideogameVersions | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortVideogameVersions | undefined
                range?: RangeOverShortVideogameVersions | undefined
                sort?: SortOverShortVideogameVersions | undefined
                search?: SearchOverShortVideogameVersions | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { videogame_id_or_slug: VideogameIDOrSlug } } & {
              query: {
                filter?: FilterOverShortVideogameVersions | undefined
                range?: RangeOverShortVideogameVersions | undefined
                sort?: SortOverShortVideogameVersions | undefined
                search?: SearchOverShortVideogameVersions | undefined
                page?:
                  | number
                  | { number?: number | undefined; size?: number | undefined }
                  | undefined
                per_page?: number | undefined
              }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
