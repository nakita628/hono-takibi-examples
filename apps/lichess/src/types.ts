type Flair = string
type Title = 'GM' | 'WGM' | 'IM' | 'WIM' | 'FM' | 'WFM' | 'NM' | 'CM' | 'WCM' | 'WNM' | 'LM' | 'BOT'
type Patron = boolean
type PatronColor = number
type TopUser = {
  id: string
  username: string
  perfs?: { [x: string]: { rating: number; progress: number } } | undefined
  title?: Title | undefined
  patron?: Patron | undefined
  patronColor?: PatronColor | undefined
  online?: boolean | undefined
}
type PerfTop10 = TopUser[]
type Top10s = {
  bullet: PerfTop10
  blitz: PerfTop10
  rapid: PerfTop10
  classical: PerfTop10
  ultraBullet: PerfTop10
  crazyhouse: PerfTop10
  chess960: PerfTop10
  kingOfTheHill: PerfTop10
  threeCheck: PerfTop10
  antichess: PerfTop10
  atomic: PerfTop10
  horde: PerfTop10
  racingKings: PerfTop10
}
type Leaderboard = { users: TopUser[] }
type Perf = {
  games: number
  rating: number
  rd: number
  prog: number
  prov?: boolean | undefined
  rank?: number | undefined
}
type PuzzleModePerf = { runs: number; score: number }
type Perfs = {
  chess960?: Perf | undefined
  atomic?: Perf | undefined
  racingKings?: Perf | undefined
  ultraBullet?: Perf | undefined
  blitz?: Perf | undefined
  kingOfTheHill?: Perf | undefined
  threeCheck?: Perf | undefined
  antichess?: Perf | undefined
  crazyhouse?: Perf | undefined
  bullet?: Perf | undefined
  correspondence?: Perf | undefined
  horde?: Perf | undefined
  puzzle?: Perf | undefined
  classical?: Perf | undefined
  rapid?: Perf | undefined
  storm?: PuzzleModePerf | undefined
  racer?: PuzzleModePerf | undefined
  streak?: PuzzleModePerf | undefined
}
type Profile = {
  flag?: string | undefined
  location?: string | undefined
  bio?: string | undefined
  realName?: string | undefined
  fideRating?: number | undefined
  uscfRating?: number | undefined
  ecfRating?: number | undefined
  cfcRating?: number | undefined
  rcfRating?: number | undefined
  dsbRating?: number | undefined
  links?: string | undefined
}
type PlayTime = { total: number; tv: number; human?: number | undefined }
type Count = {
  all: number
  rated: number
  ai?: number | undefined
  draw: number
  drawH?: number | undefined
  loss: number
  lossH?: number | undefined
  win: number
  winH?: number | undefined
  bookmark: number
  playing: number
  import: number
  me: number
}
type UserStreamer = {
  twitch?: { channel?: string | undefined } | undefined
  youtube?: { channel?: string | undefined } | undefined
}
type UserExtended = {
  id: string
  username: string
  perfs?: Perfs | undefined
  title?: Title | undefined
  flair?: Flair | undefined
  createdAt?: bigint | undefined
  disabled?: boolean | undefined
  tosViolation?: boolean | undefined
  profile?: Profile | undefined
  seenAt?: bigint | undefined
  playTime?: PlayTime | undefined
  patron?: Patron | undefined
  patronColor?: PatronColor | undefined
  verified?: boolean | undefined
  url: string
  playing?: string | undefined
  count?: Count | undefined
  streaming?: boolean | undefined
  streamer?: UserStreamer | undefined
  followable?: boolean | undefined
  following?: boolean | undefined
  blocking?: boolean | undefined
  fideId?: number | undefined
}
type PerfType =
  | 'ultraBullet'
  | 'bullet'
  | 'blitz'
  | 'rapid'
  | 'classical'
  | 'correspondence'
  | 'chess960'
  | 'crazyhouse'
  | 'antichess'
  | 'atomic'
  | 'horde'
  | 'kingOfTheHill'
  | 'racingKings'
  | 'threeCheck'
type RatingHistoryEntry = {
  name?: 'puzzle' | PerfType | undefined
  points?: number[][] | undefined
}
type RatingHistory = RatingHistoryEntry[]
type LightUser = {
  id: string
  name: string
  flair?: Flair | undefined
  title?: Title | undefined
  patron?: Patron | undefined
  patronColor?: PatronColor | undefined
}
type PerfStat = {
  user: { name: string }
  perf: {
    glicko?:
      | {
          rating?: number | undefined
          deviation?: number | undefined
          provisional?: boolean | undefined
        }
      | undefined
    nb?: number | undefined
    progress?: number | undefined
  }
  rank: number | null
  percentile: number
  stat: {
    highest?: { int: number; at: string; gameId: string } | undefined
    lowest?: { int: number; at: string; gameId: string } | undefined
    bestWins: { results: { opRating: number; opId: LightUser; at: string; gameId: string }[] }
    worstLosses: { results: { opRating: number; opId: LightUser; at: string; gameId: string }[] }
    count: {
      all: number
      rated: number
      win: number
      loss: number
      draw: number
      tour: number
      berserk: number
      opAvg: number
      seconds: number
      disconnects: number
    }
    resultStreak: {
      win: {
        cur: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
        max: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
      }
      loss: {
        cur: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
        max: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
      }
    }
    playStreak: {
      nb: {
        cur: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
        max: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
      }
      time: {
        cur: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
        max: {
          v: number
          from?: { at: string; gameId: string } | undefined
          to?: { at: string; gameId: string } | undefined
        }
      }
      lastDate?: string | undefined
    }
  }
}
type UserActivityScore = {
  win: number
  loss: number
  draw: number
  rp: { before: number; after: number }
}
type GameColor = 'white' | 'black'
type VariantKey =
  | 'standard'
  | 'chess960'
  | 'crazyhouse'
  | 'antichess'
  | 'atomic'
  | 'horde'
  | 'kingOfTheHill'
  | 'racingKings'
  | 'threeCheck'
  | 'fromPosition'
type UserActivityCorrespondenceGame = {
  id: string
  color: GameColor
  url: string
  variant?: VariantKey | undefined
  speed?: 'correspondence' | undefined
  perf?: 'correspondence' | undefined
  rated?: boolean | undefined
  opponent: { aiLevel: number } | { user: string; rating: number }
}
type UserActivityFollowList = { ids: string[]; nb?: number | undefined }
type UserActivity = {
  interval: { start: number; end: number }
  games?:
    | {
        chess960?: UserActivityScore | undefined
        atomic?: UserActivityScore | undefined
        racingKings?: UserActivityScore | undefined
        ultraBullet?: UserActivityScore | undefined
        blitz?: UserActivityScore | undefined
        kingOfTheHill?: UserActivityScore | undefined
        bullet?: UserActivityScore | undefined
        correspondence?: UserActivityScore | undefined
        horde?: UserActivityScore | undefined
        puzzle?: UserActivityScore | undefined
        classical?: UserActivityScore | undefined
        rapid?: UserActivityScore | undefined
      }
    | undefined
  puzzles?: { score?: UserActivityScore | undefined } | undefined
  storm?: PuzzleModePerf | undefined
  racer?: PuzzleModePerf | undefined
  streak?: PuzzleModePerf | undefined
  tournaments?:
    | {
        nb?: number | undefined
        best?:
          | {
              tournament: { id: string; name: string }
              nbGames: number
              score: number
              rank: number
              rankPercent: number
            }[]
          | undefined
      }
    | undefined
  practice?: { url: string; name: string; nbPositions: number }[] | undefined
  simuls?: string[] | undefined
  correspondenceMoves?: { nb: number; games: UserActivityCorrespondenceGame[] } | undefined
  correspondenceEnds?:
    | { correspondence: { score: UserActivityScore; games: UserActivityCorrespondenceGame[] } }
    | undefined
  follows?:
    | { in?: UserActivityFollowList | undefined; out?: UserActivityFollowList | undefined }
    | undefined
  studies?: { id: string; name: string }[] | undefined
  teams?: { url: string; name: string; flair?: Flair | undefined }[] | undefined
  posts?:
    | { topicUrl: string; topicName: string; posts: { url: string; text: string }[] }[]
    | undefined
  patron?: { months: number } | undefined
  stream?: boolean | undefined
}
type PuzzleAndGame = {
  game: {
    clock: string
    id: string
    perf: { key: PerfType; name: string }
    pgn: string
    players: {
      color: GameColor
      flair?: Flair | undefined
      id: string
      name: string
      patron?: Patron | undefined
      patronColor?: PatronColor | undefined
      rating: number
      title?: Title | undefined
    }[]
    rated: boolean
  }
  puzzle: {
    id: string
    initialPly: number
    plays: number
    rating: number
    fen?: string | undefined
    lastMove?: string | undefined
    solution: string[]
    themes: string[]
  }
}
type PuzzleGlicko = {
  rating?: number | undefined
  deviation?: number | undefined
  provisional?: boolean | undefined
}
type PuzzleBatchSelect = {
  puzzles?: PuzzleAndGame[] | undefined
  glicko?: PuzzleGlicko | undefined
}
type PuzzleBatchSolveRequest = {
  solutions?:
    | { id?: string | undefined; win?: boolean | undefined; rated?: boolean | undefined }[]
    | undefined
}
type PuzzleBatchSolveResponse = {
  puzzles?: PuzzleAndGame[] | undefined
  glicko?: PuzzleGlicko | undefined
  rounds?:
    | { id?: string | undefined; win?: boolean | undefined; ratingDiff?: number | undefined }[]
    | undefined
}
type PuzzleActivity = {
  date: number
  puzzle: {
    fen: string
    id: string
    lastMove: string
    plays: number
    rating: number
    solution: string[]
    themes: string[]
  }
  win: boolean
}
type PuzzleReplay = {
  replay: { days: number; theme: string; nb: number; remaining: string[] }
  angle: { key: string; name: string; desc: string }
}
type PuzzlePerformance = {
  firstWins: number
  nb: number
  performance: number
  puzzleRatingAvg: number
  replayWins: number
}
type PuzzleDashboard = {
  days: number
  global: PuzzlePerformance
  themes: { [x: string]: { results: PuzzlePerformance; theme: string } }
}
type PuzzleStormDashboard = {
  days: {
    _id: string
    combo: number
    errors: number
    highest: number
    moves: number
    runs: number
    score: number
    time: number
  }[]
  high: { allTime: number; day: number; month: number; week: number }
}
type PuzzleRacer = { id: string; url: string }
type PuzzleRaceResults = {
  id: string
  owner: string
  players: {
    name: string
    score: number
    id?: string | undefined
    flair?: string | undefined
    patron?: Patron | undefined
    patronColor?: PatronColor | undefined
  }[]
  puzzles: { id: string; fen: string; line: string; rating: number }[]
  finishesAt: number
  startsAt: number
}
type NotFound = { error: string }
type User = {
  id: string
  username: string
  perfs?: Perfs | undefined
  title?: Title | undefined
  flair?: Flair | undefined
  createdAt?: bigint | undefined
  disabled?: boolean | undefined
  tosViolation?: boolean | undefined
  profile?: Profile | undefined
  seenAt?: bigint | undefined
  playTime?: PlayTime | undefined
  patron?: Patron | undefined
  patronColor?: PatronColor | undefined
  verified?: boolean | undefined
}
type UserPreferences = {
  bgImg?: string | undefined
  is3d?: boolean | undefined
  theme?:
    | 'blue'
    | 'blue2'
    | 'blue3'
    | 'blue-marble'
    | 'canvas'
    | 'wood'
    | 'wood2'
    | 'wood3'
    | 'wood4'
    | 'maple'
    | 'maple2'
    | 'brown'
    | 'leather'
    | 'green'
    | 'marble'
    | 'green-plastic'
    | 'grey'
    | 'metal'
    | 'olive'
    | 'newspaper'
    | 'purple'
    | 'purple-diag'
    | 'pink'
    | 'ic'
    | undefined
  pieceSet?:
    | 'cburnett'
    | 'merida'
    | 'alpha'
    | 'pirouetti'
    | 'chessnut'
    | 'chess7'
    | 'reillycraig'
    | 'companion'
    | 'riohacha'
    | 'kosal'
    | 'leipzig'
    | 'fantasy'
    | 'spatial'
    | 'california'
    | 'pixel'
    | 'maestro'
    | 'fresca'
    | 'cardinal'
    | 'gioco'
    | 'tatiana'
    | 'staunty'
    | 'governor'
    | 'dubrovny'
    | 'icpieces'
    | 'shapes'
    | 'letter'
    | undefined
  theme3d?:
    | 'Black-White-Aluminium'
    | 'Brushed-Aluminium'
    | 'China-Blue'
    | 'China-Green'
    | 'China-Grey'
    | 'China-Scarlet'
    | 'Classic-Blue'
    | 'Gold-Silver'
    | 'Light-Wood'
    | 'Power-Coated'
    | 'Rosewood'
    | 'Marble'
    | 'Wax'
    | 'Jade'
    | 'Woodi'
    | undefined
  pieceSet3d?:
    | 'Basic'
    | 'Wood'
    | 'Metal'
    | 'RedVBlue'
    | 'ModernJade'
    | 'ModernWood'
    | 'Glass'
    | 'Trimmed'
    | 'Experimental'
    | 'Staunton'
    | 'CubesAndPi'
    | undefined
  soundSet?:
    | 'silent'
    | 'standard'
    | 'piano'
    | 'nes'
    | 'sfx'
    | 'futuristic'
    | 'robot'
    | 'music'
    | 'speech'
    | undefined
  blindfold?: number | undefined
  autoQueen?: number | undefined
  autoThreefold?: number | undefined
  takeback?: number | undefined
  moretime?: number | undefined
  clockTenths?: number | undefined
  clockBar?: boolean | undefined
  clockSound?: boolean | undefined
  premove?: boolean | undefined
  animation?: number | undefined
  pieceNotation?: number | undefined
  captured?: boolean | undefined
  follow?: boolean | undefined
  highlight?: boolean | undefined
  destination?: boolean | undefined
  coords?: number | undefined
  replay?: number | undefined
  challenge?: number | undefined
  message?: number | undefined
  submitMove?: number | undefined
  confirmResign?: number | undefined
  insightShare?: number | undefined
  keyboardMove?: number | undefined
  voiceMove?: boolean | undefined
  zen?: number | undefined
  ratings?: number | undefined
  moveEvent?: number | undefined
  rookCastle?: number | undefined
  flairs?: boolean | undefined
  sayGG?: 0 | 1 | 2 | undefined
}
type Ok = { ok: boolean }
type GamePgn = string
type Speed = 'ultraBullet' | 'bullet' | 'blitz' | 'rapid' | 'classical' | 'correspondence'
type GameStatusName =
  | 'created'
  | 'started'
  | 'aborted'
  | 'mate'
  | 'resign'
  | 'stalemate'
  | 'timeout'
  | 'draw'
  | 'outoftime'
  | 'cheat'
  | 'noStart'
  | 'unknownFinish'
  | 'insufficientMaterialClaim'
  | 'variantEnd'
type GamePlayerUser = {
  user: LightUser
  rating: number
  ratingDiff?: number | undefined
  name?: string | undefined
  provisional?: boolean | undefined
  analysis?:
    | {
        inaccuracy: number
        mistake: number
        blunder: number
        acpl: number
        accuracy?: number | undefined
        phases?:
          | {
              opening?: number | undefined
              middlegame?: number | undefined
              endgame?: number | undefined
            }
          | undefined
      }
    | undefined
  team?: string | undefined
  berserk?: boolean | undefined
}
type GamePlayerAi = {
  aiLevel: number
  analysis?:
    | {
        inaccuracy: number
        mistake: number
        blunder: number
        acpl: number
        accuracy?: number | undefined
      }
    | undefined
}
type GamePlayers = { white: GamePlayerUser | GamePlayerAi; black: GamePlayerUser | GamePlayerAi }
type GameOpening = { eco: string; name: string; ply: number }
type GameMoveAnalysis = {
  eval?: number | undefined
  mate?: number | undefined
  best?: string | undefined
  variation?: string | undefined
  judgment?:
    | { name?: 'Inaccuracy' | 'Mistake' | 'Blunder' | undefined; comment?: string | undefined }
    | undefined
}
type GameJson = {
  id: string
  rated: boolean
  variant: VariantKey
  speed: Speed
  perf: string
  createdAt: bigint
  lastMoveAt: bigint
  status: GameStatusName
  source?: string | undefined
  players: GamePlayers
  initialFen?: string | undefined
  winner?: GameColor | undefined
  opening?: GameOpening | undefined
  moves?: string | undefined
  pgn?: string | undefined
  daysPerTurn?: number | undefined
  analysis?: GameMoveAnalysis[] | undefined
  arenaTour?: { id?: string | undefined; name?: string | undefined } | undefined
  swissTour?: { id?: string | undefined } | undefined
  clock?: { initial: number; increment: number; totalTime: number } | undefined
  clocks?: number[] | undefined
  division?: { middle?: number | undefined; end?: number | undefined } | undefined
}
type SpectatorGameChat = { lines: { text: string; user: string }[] }
type GameStatusId = 10 | 20 | 25 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 60
type GameStreamGame = {
  id: string
  rated?: boolean | undefined
  variant?: VariantKey | undefined
  speed?: Speed | undefined
  perf?: PerfType | undefined
  createdAt?: number | undefined
  status?: GameStatusId | undefined
  statusName?: GameStatusName | undefined
  clock?:
    | {
        initial?: number | undefined
        increment?: number | undefined
        totalTime?: number | undefined
      }
    | undefined
  players?:
    | {
        white?:
          | {
              userId?: string | undefined
              rating?: number | undefined
              provisional?: boolean | undefined
            }
          | undefined
        black?:
          | {
              userId?: string | undefined
              rating?: number | undefined
              provisional?: boolean | undefined
            }
          | undefined
      }
    | undefined
  winner?: GameColor | undefined
}
type GameStream = GameStreamGame[]
type GameSource =
  | 'lobby'
  | 'friend'
  | 'ai'
  | 'api'
  | 'tournament'
  | 'position'
  | 'import'
  | 'importlive'
  | 'simul'
  | 'relay'
  | 'pool'
  | 'arena'
  | 'swiss'
type GameStatus = { id: GameStatusId; name: GameStatusName }
type Variant = { key: VariantKey; name: string; short?: string | undefined }
type MoveStreamEntry =
  | {
      id: string
      variant?: Variant | undefined
      speed?: Speed | undefined
      perf?: PerfType | undefined
      rated?: boolean | undefined
      initialFen?: string | undefined
      fen?: string | undefined
      player?: GameColor | undefined
      turns?: number | undefined
      startedAtTurn?: number | undefined
      source?: GameSource | undefined
      status?: GameStatus | undefined
      createdAt?: number | undefined
      lastMove?: string | undefined
      players?: GamePlayers | undefined
    }
  | { fen: string; lm?: string | undefined; wc: number; bc: number }
type MoveStream = MoveStreamEntry[]
type TvGame = { user: LightUser; rating: number; gameId: string; color: GameColor }
type TvFeedFeatured = {
  t: 'featured'
  d: {
    id: string
    orientation: GameColor
    players: { color: GameColor; user: LightUser; rating: number; seconds: number }[]
    fen: string
  }
}
type TvFeedFen = { t: 'fen'; d: { fen: string; lm: string; wc: number; bc: number } }
type TvFeed = TvFeedFeatured | TvFeedFen
type Clock = { limit: number; increment: number }
type ArenaStatus = 10 | 20 | 30
type ArenaPerf = { key: PerfType; name: string; position: number; icon?: string | undefined }
type ArenaRatingObj = { perf?: PerfType | undefined; rating: number }
type ArenaPosition =
  | { eco: string; name: string; fen: string; url: string }
  | { name: 'Custom position'; fen: string }
type ArenaTournament = {
  id: string
  createdBy: string
  system: 'arena'
  minutes: number
  clock: Clock
  rated: boolean
  fullName: string
  nbPlayers: number
  variant: Variant
  startsAt: bigint
  finishesAt: bigint
  status: ArenaStatus
  perf: ArenaPerf
  secondsToStart?: number | undefined
  hasMaxRating?: boolean | undefined
  maxRating?: ArenaRatingObj | undefined
  minRating?: ArenaRatingObj | undefined
  minRatedGames?: { nb?: number | undefined } | undefined
  botsAllowed?: boolean | undefined
  minAccountAgeInDays?: number | undefined
  onlyTitled?: boolean | undefined
  teamMember?: string | undefined
  private?: boolean | undefined
  position?: ArenaPosition | undefined
  schedule?: { freq?: string | undefined; speed?: string | undefined } | undefined
  teamBattle?: { teams?: string[] | undefined; nbLeaders?: number | undefined } | undefined
  winner?: LightUser | undefined
}
type ArenaTournaments = {
  created: ArenaTournament[]
  started: ArenaTournament[]
  finished: ArenaTournament[]
}
type FromPositionFEN = string
type Verdict = { condition: string; verdict: string }
type Verdicts = { accepted: boolean; list: Verdict[] }
type ArenaSheet = { scores: string; fire?: boolean | undefined }
type ArenaTournamentFull = {
  id: string
  fullName: string
  rated?: boolean | undefined
  spotlight?: { headline?: string | undefined } | undefined
  berserkable?: boolean | undefined
  onlyTitled?: boolean | undefined
  clock: Clock
  minutes?: number | undefined
  createdBy?: string | undefined
  system?: string | undefined
  secondsToStart?: number | undefined
  secondsToFinish?: number | undefined
  isFinished?: boolean | undefined
  isRecentlyFinished?: boolean | undefined
  pairingsClosed?: boolean | undefined
  startsAt?: string | undefined
  nbPlayers: number
  verdicts?: Verdicts | undefined
  quote?: { text?: string | undefined; author?: string | undefined } | undefined
  greatPlayer?: { name?: string | undefined; url?: string | undefined } | undefined
  allowList?: string[] | undefined
  hasMaxRating?: boolean | undefined
  maxRating?: ArenaRatingObj | undefined
  minRating?: ArenaRatingObj | undefined
  minRatedGames?: { nb?: number | undefined } | undefined
  botsAllowed?: boolean | undefined
  minAccountAgeInDays?: number | undefined
  perf?: { icon: string; key: string; name: string } | undefined
  schedule?: { freq: string; speed: string } | undefined
  description?: string | undefined
  variant?: string | undefined
  duels?:
    | {
        id?: string | undefined
        p?: { n?: string | undefined; r?: number | undefined; k?: number | undefined }[] | undefined
      }[]
    | undefined
  standing?:
    | {
        page?: number | undefined
        players?:
          | {
              name?: string | undefined
              title?: Title | undefined
              patron?: Patron | undefined
              patronColor?: PatronColor | undefined
              flair?: Flair | undefined
              rank?: number | undefined
              rating?: number | undefined
              score?: number | undefined
              sheet?: ArenaSheet | undefined
              realName?: string | undefined
            }[]
          | undefined
      }
    | undefined
  featured?:
    | {
        id?: string | undefined
        fen?: string | undefined
        orientation?: string | undefined
        color?: string | undefined
        lastMove?: string | undefined
        white?:
          | {
              name?: string | undefined
              id?: string | undefined
              rank?: number | undefined
              rating?: number | undefined
            }
          | undefined
        black?:
          | {
              name?: string | undefined
              id?: string | undefined
              rank?: number | undefined
              rating?: number | undefined
            }
          | undefined
        c?: { white?: number | undefined; black?: number | undefined } | undefined
      }
    | undefined
  podium?:
    | {
        name?: string | undefined
        title?: Title | undefined
        patron?: Patron | undefined
        patronColor?: PatronColor | undefined
        flair?: Flair | undefined
        rank?: number | undefined
        rating?: number | undefined
        score?: number | undefined
        nb?:
          | { game?: number | undefined; berserk?: number | undefined; win?: number | undefined }
          | undefined
        performance?: number | undefined
      }[]
    | undefined
  stats?:
    | {
        games: number
        moves: number
        whiteWins: number
        blackWins: number
        draws: number
        berserks: number
        averageRating: number
      }
    | undefined
  myUsername?: string | undefined
}
type Error = { error: string }
type ArenaTournamentPlayer = {
  games: number
  score: number
  rank: number
  performance?: number | undefined
}
type ArenaTournamentPlayed = { tournament: ArenaTournament; player: ArenaTournamentPlayer }
type SwissFromPositionFEN = string
type SwissStatus = 'created' | 'started' | 'finished'
type SwissTournament = {
  id: string
  createdBy: string
  startsAt: string
  name: string
  clock: { limit: number; increment: number }
  variant: string
  round: number
  nbRounds: number
  nbPlayers: number
  nbOngoing: number
  status: SwissStatus
  stats?:
    | {
        games: number
        whiteWins: number
        blackWins: number
        draws: number
        byes: number
        absences: number
        averageRating: number
      }
    | undefined
  rated: boolean
  verdicts: Verdicts
  nextRound?: { at?: string | undefined; in?: number | undefined } | undefined
}
type SwissUnauthorisedEdit = { error?: string | undefined }
type StudyPgn = string
type StudyUserSelection = 'nobody' | 'owner' | 'contributor' | 'member' | 'everyone'
type StudyImportPgnChapters = {
  chapters?:
    | {
        id?: string | undefined
        name?: string | undefined
        players?: { name?: (string | null) | undefined; rating?: number | undefined }[] | undefined
        status?: string | undefined
      }[]
    | undefined
  error?: (string | null) | undefined
}
type StudyMetadata = { id: string; name: string; createdAt: bigint; updatedAt: bigint }
type FideTimeControl = 'standard' | 'rapid' | 'blitz'
type BroadcastTourInfo = {
  format?: string | undefined
  tc?: string | undefined
  fideTC?: FideTimeControl | undefined
  timeZone?: string | undefined
  location?: string | undefined
  players?: string | undefined
  website?: string | undefined
  standings?: string | undefined
  regulations?: string | undefined
}
type BroadcastTour = {
  id: string
  name: string
  slug: string
  createdAt: number
  dates?: bigint[] | undefined
  info?: BroadcastTourInfo | undefined
  tier?: number | undefined
  image?: string | undefined
  description?: string | undefined
  teamTable?: boolean | undefined
  showTeamScores?: boolean | undefined
  url: string
  communityOwner?: LightUser | undefined
}
type BroadcastCustomPoints = number
type BroadcastCustomPointsPerColor = { win: BroadcastCustomPoints; draw: BroadcastCustomPoints }
type BroadcastCustomScoring = {
  white: BroadcastCustomPointsPerColor
  black: BroadcastCustomPointsPerColor
}
type BroadcastRoundInfo = {
  id: string
  name: string
  slug: string
  createdAt?: bigint | undefined
  ongoing?: boolean | undefined
  startsAt?: bigint | undefined
  startsAfterPrevious?: boolean | undefined
  finishedAt?: bigint | undefined
  finished?: boolean | undefined
  url: string
  rated?: boolean | undefined
  customScoring?: BroadcastCustomScoring | undefined
}
type BroadcastPhotos = {
  [x: string]: { small: string; medium: string; credit?: string | undefined }
}
type BroadcastWithRounds = {
  tour: BroadcastTour
  group?: string | undefined
  rounds: BroadcastRoundInfo[]
  defaultRoundId?: string | undefined
  photos?: BroadcastPhotos | undefined
}
type BroadcastWithLastRound = {
  group?: string | undefined
  tour?: BroadcastTour | undefined
  round?: BroadcastRoundInfo | undefined
}
type BroadcastTop = {
  active?: BroadcastWithLastRound[] | undefined
  upcoming?: BroadcastWithLastRound[] | undefined
  past?:
    | {
        currentPage?: number | undefined
        maxPerPage?: number | undefined
        currentPageResults?: BroadcastWithLastRound[] | undefined
        previousPage?: (number | null) | undefined
        nextPage?: (number | null) | undefined
      }
    | undefined
}
type BroadcastByUser = { tour: BroadcastTour }
type BroadcastTiebreakExtendedCode =
  | 'AOB'
  | 'APPO'
  | 'APRO'
  | 'ARO'
  | 'ARO-C1'
  | 'ARO-C2'
  | 'ARO-M1'
  | 'ARO-M2'
  | 'BH'
  | 'BH-C1'
  | 'BH-C2'
  | 'BH-M1'
  | 'BH-M2'
  | 'BPG'
  | 'BWG'
  | 'DE'
  | 'FB'
  | 'FB-C1'
  | 'FB-C2'
  | 'FB-M1'
  | 'FB-M2'
  | 'KS'
  | 'PS'
  | 'PS-C1'
  | 'PS-C2'
  | 'PS-M1'
  | 'PS-M2'
  | 'PTP'
  | 'SB'
  | 'SB-C1'
  | 'SB-C2'
  | 'SB-M1'
  | 'SB-M2'
  | 'TPR'
  | 'WON'
type BroadcastForm = {
  name: string
  info?: BroadcastTourInfo | undefined
  markdown?: string | undefined
  showScores?: boolean | undefined
  showRatingDiffs?: boolean | undefined
  teamTable?: boolean | undefined
  visibility?: 'public' | 'unlisted' | 'private' | undefined
  players?: string | undefined
  teams?: string | undefined
  tier?: 3 | 4 | 5 | undefined
  tiebreaks?: BroadcastTiebreakExtendedCode[] | undefined
  grouping?:
    | {
        info?: { name?: string | undefined; tours?: string | undefined } | undefined
        scoreGroups?: string[] | undefined
      }
    | undefined
}
type BroadcastGroupTour = { id: string; name: string; active: boolean; live: boolean }
type BroadcastGroup = { id: string; slug: string; name: string; tours: BroadcastGroupTour[] }
type BroadcastWithRoundsAndFullGroup = {
  tour: BroadcastTour
  group?: BroadcastGroup | undefined
  rounds: BroadcastRoundInfo[]
  defaultRoundId?: string | undefined
  photos?: BroadcastPhotos | undefined
}
type BroadcastPlayerTiebreak = {
  extendedCode: BroadcastTiebreakExtendedCode
  description: string
  points: number
}
type BroadcastPlayerEntry = {
  name: string
  title?: Title | undefined
  rating?: number | undefined
  fideId?: number | undefined
  team?: string | undefined
  fed?: string | undefined
  score?: number | undefined
  played?: number | undefined
  ratingDiffs?:
    | { standard?: number | undefined; rapid?: number | undefined; blitz?: number | undefined }
    | undefined
  ratingsMap?:
    | { standard?: number | undefined; rapid?: number | undefined; blitz?: number | undefined }
    | undefined
  performances?:
    | { standard?: number | undefined; rapid?: number | undefined; blitz?: number | undefined }
    | undefined
  tiebreaks?: BroadcastPlayerTiebreak[] | undefined
  rank?: number | undefined
}
type BroadcastPlayerWithFed = {
  name: string
  title?: Title | undefined
  rating?: number | undefined
  fideId?: number | undefined
  team?: string | undefined
  fed?: string | undefined
}
type BroadcastPointStr = '1' | '1/2' | '0'
type BroadcastGameEntry = {
  round: string
  id: string
  opponent: BroadcastPlayerWithFed
  color: GameColor
  points?: BroadcastPointStr | undefined
  customPoints?: BroadcastCustomPoints | undefined
  ratingDiff?: number | undefined
  fideTC: FideTimeControl
  ongoing?: boolean | undefined
}
type BroadcastPlayerEntryWithFideAndGames = {
  name: string
  title?: Title | undefined
  rating?: number | undefined
  fideId?: number | undefined
  team?: string | undefined
  fed?: string | undefined
  score?: number | undefined
  played?: number | undefined
  ratingDiffs?:
    | { standard?: number | undefined; rapid?: number | undefined; blitz?: number | undefined }
    | undefined
  ratingsMap?:
    | { standard?: number | undefined; rapid?: number | undefined; blitz?: number | undefined }
    | undefined
  performances?:
    | { standard?: number | undefined; rapid?: number | undefined; blitz?: number | undefined }
    | undefined
  tiebreaks?: BroadcastPlayerTiebreak[] | undefined
  rank?: number | undefined
  fide?:
    | {
        year?: number | undefined
        ratings?:
          | {
              standard?: number | undefined
              rapid?: number | undefined
              blitz?: number | undefined
            }
          | undefined
      }
    | undefined
  games?: BroadcastGameEntry[] | undefined
}
type BroadcastTeamPOVMatchEntry = {
  roundId: string
  opponent: string
  mp?: number | undefined
  gp?: number | undefined
  points?: BroadcastPointStr | undefined
}
type BroadcastTeamLeaderboardEntry = {
  name: string
  mp: number
  gp: number
  averageRating?: number | undefined
  matches: BroadcastTeamPOVMatchEntry[]
  players: BroadcastPlayerEntry[]
}
type BroadcastRoundForm = {
  syncSource?: 'push' | 'url' | 'urls' | 'ids' | 'users' | undefined
  startsAt?: bigint | undefined
  startsAfterPrevious?: boolean | undefined
  delay?: number | undefined
  status?: 'new' | 'started' | 'finished' | undefined
  rated?: boolean | undefined
  customScoring?: BroadcastCustomScoring | undefined
  teamCustomScoring?: BroadcastCustomPointsPerColor | undefined
  period?: number | undefined
}
type BroadcastRoundStudyInfo = {
  writeable?: boolean | undefined
  features?:
    | { chat?: boolean | undefined; computer?: boolean | undefined; explorer?: boolean | undefined }
    | undefined
}
type BroadcastRoundNew = {
  round: BroadcastRoundInfo
  tour: BroadcastTour
  study: BroadcastRoundStudyInfo
}
type BroadcastRoundGame = {
  id: string
  name: string
  fen?: string | undefined
  players?:
    | {
        name?: string | undefined
        title?: Title | undefined
        rating?: number | undefined
        fideId?: number | undefined
        fed?: string | undefined
        clock?: number | undefined
      }[]
    | undefined
  lastMove?: string | undefined
  check?: '+' | '#' | undefined
  thinkTime?: number | undefined
  status?: '*' | '1-0' | '0-1' | '½-½' | undefined
}
type BroadcastRound = {
  round: BroadcastRoundInfo
  tour: BroadcastTour
  study: BroadcastRoundStudyInfo
  games: BroadcastRoundGame[]
  group?: BroadcastGroup | undefined
  isSubscribed?: boolean | undefined
  photos: BroadcastPhotos
}
type BroadcastPgnPushTags = { [x: string]: string }
type BroadcastPgnPush = {
  games: { tags: BroadcastPgnPushTags; moves?: number | undefined; error?: string | undefined }[]
}
type BroadcastPgn = string
type BroadcastMyRound = {
  round: BroadcastRoundInfo
  tour: BroadcastTour
  study: BroadcastRoundStudyInfo
}
type FIDEPlayerPhoto = { small: string; medium: string; credit?: string | undefined }
type FIDEPlayer = {
  id: number
  name: string
  title?: Title | undefined
  federation: string
  year?: (number | null) | undefined
  inactive?: number | undefined
  standard?: number | undefined
  rapid?: number | undefined
  blitz?: number | undefined
  gender?: 'M' | 'F' | undefined
  photo?: FIDEPlayerPhoto | undefined
}
type FIDEPlayerRatings = { standard: number[]; rapid: number[]; blitz: number[] }
type Simul = {
  id: string
  host: {
    id: string
    name: string
    flair?: Flair | undefined
    title?: Title | undefined
    patron?: Patron | undefined
    patronColor?: PatronColor | undefined
    rating?: number | undefined
    provisional?: boolean | undefined
    gameId?: string | undefined
    online?: boolean | undefined
  }
  name: string
  fullName: string
  variants: { key?: VariantKey | undefined; icon?: string | undefined; name?: string | undefined }[]
  isCreated: boolean
  isFinished: boolean
  isRunning: boolean
  text?: string | undefined
  estimatedStartAt?: number | undefined
  startedAt?: number | undefined
  finishedAt?: number | undefined
  nbApplicants: number
  nbPairings: number
}
type Team = {
  id: string
  name: string
  description?: string | undefined
  flair?: Flair | undefined
  leader?: LightUser | undefined
  leaders?: LightUser[] | undefined
  nbMembers?: number | undefined
  open?: boolean | undefined
  joined?: boolean | undefined
  requested?: boolean | undefined
}
type TeamPaginatorJson = {
  currentPage: number
  maxPerPage: number
  currentPageResults: Team[]
  previousPage: number | null
  nextPage: number | null
  nbResults: number
  nbPages: number
}
type ArenaStatusName = 'created' | 'started' | 'finished'
type TeamRequest = { teamId: string; userId: string; date: number; message?: string | undefined }
type TeamRequestWithUser = { request: TeamRequest; user: User }
type LightTeam = { id: string; name: string; flair?: Flair | undefined }
type TeamUpdate = {
  msg: { id: string; date: number; sender: LightUser; team?: LightTeam | undefined; text: string }
  seen: boolean
}
type TeamUpdatesPager = {
  currentPage: number
  maxPerPage: number
  currentPageResults: TeamUpdate[]
  previousPage: number | null
  nextPage: number | null
  nbResults: number
  nbPages: number
}
type TeamUpdatesByTeam = { team: LightTeam; last: number; unread: number }[]
type TeamUpdates = { updates: TeamUpdatesPager; byTeam: TeamUpdatesByTeam }
type TeamUpdatesOfTeam = {
  team: LightTeam
  subscribed: boolean
  updates: TeamUpdatesPager
  byTeam: TeamUpdatesByTeam
}
type Crosstable = { users: { [x: string]: number }; nbGames: number }
type LightUserOnline = {
  id: string
  name: string
  flair?: Flair | undefined
  title?: Title | undefined
  patron?: Patron | undefined
  patronColor?: PatronColor | undefined
  online?: boolean | undefined
}
type UserNote = {
  from?: LightUser | undefined
  to?: LightUser | undefined
  text?: string | undefined
  date?: bigint | undefined
}
type GameEventOpponent =
  | { id: string; username: string; rating: number; ratingDiff?: number | undefined }
  | { id: { [x: string]: unknown } | null; username: string; ai: number }
type GameCompat = { bot?: boolean | undefined; board?: boolean | undefined }
type GameEventInfo = {
  fullId: string
  gameId: string
  fen?: string | undefined
  color?: GameColor | undefined
  lastMove?: string | undefined
  source?: GameSource | undefined
  status?: GameStatus | undefined
  variant?: Variant | undefined
  speed?: Speed | undefined
  perf?: string | undefined
  rating?: number | undefined
  rated?: boolean | undefined
  hasMoved?: boolean | undefined
  opponent?: GameEventOpponent | undefined
  isMyTurn?: boolean | undefined
  secondsLeft?: number | undefined
  winner?: GameColor | undefined
  ratingDiff?: number | undefined
  compat?: GameCompat | undefined
  id?: string | undefined
  tournamentId?: string | undefined
}
type GameStartEvent = { type: 'gameStart'; game: GameEventInfo }
type GameFinishEvent = { type: 'gameFinish'; game: GameEventInfo }
type ChallengeStatus = 'created' | 'offline' | 'canceled' | 'declined' | 'accepted'
type ChallengeUser = {
  id: string
  name: string
  rating?: number | undefined
  title?: Title | undefined
  flair?: Flair | undefined
  patron?: Patron | undefined
  patronColor?: PatronColor | undefined
  provisional?: boolean | undefined
  online?: boolean | undefined
  lag?: number | undefined
}
type TimeControl =
  | {
      type: 'clock'
      limit?: number | undefined
      increment?: number | undefined
      show?: string | undefined
    }
  | { type: 'correspondence'; daysPerTurn?: number | undefined }
  | { type: 'unlimited' }
type ChallengeColor = 'white' | 'black' | 'random'
type ChallengeJson = {
  id: string
  url: string
  status: ChallengeStatus
  challenger: ChallengeUser
  destUser: ChallengeUser | ({ [x: string]: unknown } | null)
  variant: Variant
  rated: boolean
  speed: Speed
  timeControl: TimeControl
  color: ChallengeColor
  finalColor?: GameColor | undefined
  perf: { icon: string; name: string }
  direction?: 'in' | 'out' | undefined
  initialFen?: string | undefined
  rematchOf?: string | undefined
}
type ChallengeEvent = {
  type: 'challenge'
  challenge: ChallengeJson
  compat?: GameCompat | undefined
}
type ChallengeCanceledEvent = { type: 'challengeCanceled'; challenge: ChallengeJson }
type ChallengeDeclinedJson = {
  id: string
  url: string
  status: ChallengeStatus
  challenger: ChallengeUser
  destUser: ChallengeUser | ({ [x: string]: unknown } | null)
  variant: Variant
  rated: boolean
  speed: Speed
  timeControl: TimeControl
  color: ChallengeColor
  finalColor?: GameColor | undefined
  perf: { icon: string; name: string }
  direction?: 'in' | 'out' | undefined
  initialFen?: string | undefined
  rematchOf?: string | undefined
  declineReason: string
  declineReasonKey:
    | 'generic'
    | 'later'
    | 'toofast'
    | 'tooslow'
    | 'timecontrol'
    | 'rated'
    | 'casual'
    | 'standard'
    | 'variant'
    | 'nobot'
    | 'onlybot'
}
type ChallengeDeclinedEvent = { type: 'challengeDeclined'; challenge: ChallengeDeclinedJson }
type GameEventPlayer = {
  aiLevel?: number | undefined
  id: string
  name: string
  title?: Title | ({ [x: string]: unknown } | null) | undefined
  rating?: number | undefined
  ratingDiff?: number | undefined
  provisional?: boolean | undefined
}
type GameStateEvent = {
  type: 'gameState'
  moves: string
  wtime: number
  btime: number
  winc: number
  binc: number
  status: GameStatusName
  winner?: GameColor | undefined
  wdraw?: boolean | undefined
  bdraw?: boolean | undefined
  wtakeback?: boolean | undefined
  btakeback?: boolean | undefined
  expiration?: { idleMillis: number; millisToMove: number } | undefined
}
type GameFullEvent = {
  type: 'gameFull'
  id: string
  variant: Variant
  clock?: { initial?: bigint | undefined; increment?: bigint | undefined } | undefined
  speed: Speed
  perf: { name?: string | undefined }
  rated: boolean
  createdAt: bigint
  white: GameEventPlayer
  black: GameEventPlayer
  initialFen: string
  state: GameStateEvent
  daysPerTurn?: number | undefined
  tournamentId?: string | undefined
}
type ChatLineEvent = {
  type: 'chatLine'
  room: 'player' | 'spectator'
  username: string
  text: string
}
type OpponentGoneEvent = {
  type: 'opponentGone'
  gone: boolean
  claimWinInSeconds?: number | undefined
}
type PlayerGameChat = { text: string; user: string }[]
type ChallengeOpenJson = {
  id: string
  url: string
  status: ChallengeStatus
  challenger: { [x: string]: unknown } | null
  destUser: { [x: string]: unknown } | null
  variant: Variant
  rated: boolean
  speed: Speed
  timeControl: TimeControl
  color: ChallengeColor
  finalColor?: GameColor | undefined
  perf: { icon?: string | undefined; name?: string | undefined }
  initialFen?: string | undefined
  urlWhite: string
  urlBlack: string
  open: { userIds?: string[] | undefined }
}
type BulkPairing = {
  id: string
  games: { id?: string | undefined; black?: string | undefined; white?: string | undefined }[]
  variant: VariantKey
  clock: Clock
  pairAt: number
  pairedAt: number | null
  rated: boolean
  startClocksAt: number | null
  scheduledAt: number
}
type CloudEval = {
  depth: number
  fen: string
  knodes: number
  pvs: ({ cp: number; moves: string } | { mate: number; moves: string })[]
}
type UciVariant =
  | 'chess'
  | 'crazyhouse'
  | 'antichess'
  | 'atomic'
  | 'horde'
  | 'kingofthehill'
  | 'racingkings'
  | '3check'
type ExternalEngine = {
  id: string
  name: string
  clientSecret: string
  userId: string
  maxThreads: number
  maxHash: number
  variants: UciVariant[]
  providerData?: (string | null) | undefined
}
type ExternalEngineRegistration = {
  name: string
  maxThreads: number
  maxHash: number
  variants?: UciVariant[] | undefined
  providerSecret: string
  providerData?: string | undefined
}
type ExternalEngineWork =
  | {
      movetime: number
      sessionId: string
      threads: number
      hash: number
      multiPv: number
      variant: UciVariant
      initialFen: string
      moves: string[]
    }
  | {
      depth: number
      sessionId: string
      threads: number
      hash: number
      multiPv: number
      variant: UciVariant
      initialFen: string
      moves: string[]
    }
  | {
      nodes: number
      sessionId: string
      threads: number
      hash: number
      multiPv: number
      variant: UciVariant
      initialFen: string
      moves: string[]
    }
type OAuthError = { error: string; error_description?: string | undefined }
type OpeningExplorerOpening = { eco: string; name: string }
type OpeningExplorerGamePlayer = { name: string; title?: string | undefined; rating: number }
type OpeningExplorerMastersGame = {
  id: string
  winner: GameColor | ({ [x: string]: unknown } | null)
  white: OpeningExplorerGamePlayer
  black: OpeningExplorerGamePlayer
  year: number
  month: string | null
}
type OpeningExplorerMasters = {
  opening: OpeningExplorerOpening | ({ [x: string]: unknown } | null)
  white: number
  draws: number
  black: number
  moves: {
    uci: string
    san: string
    averageRating: number
    white: number
    draws: number
    black: number
    game: OpeningExplorerMastersGame | ({ [x: string]: unknown } | null)
    opening: OpeningExplorerOpening | ({ [x: string]: unknown } | null)
  }[]
  topGames: {
    uci: string
    id: string
    winner: GameColor | ({ [x: string]: unknown } | null)
    white: OpeningExplorerGamePlayer
    black: OpeningExplorerGamePlayer
    year: number
    month: string | null
  }[]
}
type OpeningExplorerLichessGame = {
  id: string
  winner: GameColor | ({ [x: string]: unknown } | null)
  speed?: Speed | undefined
  mode: 'rated' | 'casual'
  white: OpeningExplorerGamePlayer
  black: OpeningExplorerGamePlayer
  year: number
  month: string
}
type OpeningExplorerLichess = {
  opening: OpeningExplorerOpening | ({ [x: string]: unknown } | null)
  white: number
  draws: number
  black: number
  moves: {
    uci: string
    san: string
    averageRating: number
    white: number
    draws: number
    black: number
    game: OpeningExplorerLichessGame | ({ [x: string]: unknown } | null)
    opening: OpeningExplorerOpening | ({ [x: string]: unknown } | null)
  }[]
  topGames: {
    uci: string
    id: string
    winner: GameColor | ({ [x: string]: unknown } | null)
    speed?: Speed | undefined
    mode: 'rated' | 'casual'
    white: OpeningExplorerGamePlayer
    black: OpeningExplorerGamePlayer
    year: number
    month: string
  }[]
  recentGames: {
    uci: string
    id: string
    winner: GameColor | ({ [x: string]: unknown } | null)
    speed?: Speed | undefined
    mode: 'rated' | 'casual'
    white: OpeningExplorerGamePlayer
    black: OpeningExplorerGamePlayer
    year: number
    month: string
  }[]
  history?: { month: string; white: number; draws: number; black: number }[] | undefined
}
type OpeningExplorerPlayerGame = {
  id: string
  winner: GameColor | ({ [x: string]: unknown } | null)
  speed: Speed
  mode: 'rated' | 'casual'
  white: OpeningExplorerGamePlayer
  black: OpeningExplorerGamePlayer
  year: number
  month: string
}
type OpeningExplorerPlayer = {
  opening: OpeningExplorerOpening | ({ [x: string]: unknown } | null)
  queuePosition: number
  white: number
  draws: number
  black: number
  moves: {
    uci: string
    san: string
    averageOpponentRating: number
    performance: number
    white: number
    draws: number
    black: number
    game: OpeningExplorerPlayerGame | ({ [x: string]: unknown } | null)
    opening: OpeningExplorerOpening | ({ [x: string]: unknown } | null)
  }[]
  recentGames: {
    uci: string
    id: string
    winner: GameColor | ({ [x: string]: unknown } | null)
    speed: Speed
    mode: 'rated' | 'casual'
    white: OpeningExplorerGamePlayer
    black: OpeningExplorerGamePlayer
    year: number
    month: string
  }[]
}
type TablebaseMove = {
  uci: string
  san: string
  category:
    | 'loss'
    | 'unknown'
    | 'syzygy-loss'
    | 'maybe-loss'
    | 'blessed-loss'
    | 'draw'
    | 'cursed-win'
    | 'maybe-win'
    | 'syzygy-win'
    | 'win'
  dtz?: (number | null) | undefined
  precise_dtz?: (number | null) | undefined
  dtc?: (number | null) | undefined
  dtm?: (number | null) | undefined
  dtw?: (number | null) | undefined
  zeroing?: boolean | undefined
  conversion?: boolean | undefined
  checkmate?: boolean | undefined
  stalemate?: boolean | undefined
  variant_win?: boolean | undefined
  variant_loss?: boolean | undefined
  insufficient_material?: boolean | undefined
}
type TablebaseJson = {
  category:
    | 'win'
    | 'unknown'
    | 'syzygy-win'
    | 'maybe-win'
    | 'cursed-win'
    | 'draw'
    | 'blessed-loss'
    | 'maybe-loss'
    | 'syzygy-loss'
    | 'loss'
  dtz?: (number | null) | undefined
  precise_dtz?: (number | null) | undefined
  dtc?: (number | null) | undefined
  dtm?: (number | null) | undefined
  dtw?: (number | null) | undefined
  checkmate?: boolean | undefined
  stalemate?: boolean | undefined
  variant_win?: boolean | undefined
  variant_loss?: boolean | undefined
  insufficient_material?: boolean | undefined
  moves: TablebaseMove[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/users/status': {
      $get: {
        input: {
          query: {
            ids: string
            withSignal?: boolean | undefined
            withGameIds?: boolean | undefined
            withGameMetas?: boolean | undefined
          }
        }
        output: {
          id: string
          name: string
          flair?: Flair | undefined
          title?: Title | undefined
          online?: boolean | undefined
          playing?: boolean | undefined
          streaming?: boolean | undefined
          patron?: Patron | undefined
          patronColor?: PatronColor | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/player': { $get: { input: {}; output: Top10s; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/player/top/:nb/:perfType': {
      $get: {
        input: {
          param: {
            nb: number
            perfType:
              | 'ultraBullet'
              | 'bullet'
              | 'blitz'
              | 'rapid'
              | 'classical'
              | 'chess960'
              | 'crazyhouse'
              | 'antichess'
              | 'atomic'
              | 'horde'
              | 'kingOfTheHill'
              | 'racingKings'
              | 'threeCheck'
          }
        }
        output: Leaderboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username': {
      $get: {
        input: { param: { username: string } } & {
          query: {
            trophies?: boolean | undefined
            profile?: boolean | undefined
            rank?: boolean | undefined
            fideId?: boolean | undefined
          }
        }
        output: UserExtended
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username/rating-history': {
      $get: {
        input: { param: { username: string } }
        output: RatingHistory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username/perf/:perf': {
      $get: {
        input: { param: { username: string; perf: PerfType } }
        output: PerfStat
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username/activity': {
      $get: {
        input: { param: { username: string } }
        output: UserActivity[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/puzzle/daily': {
      $get: { input: {}; output: PuzzleAndGame; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/puzzle/:id': {
      $get: {
        input: { param: { id: string } }
        output: PuzzleAndGame
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/puzzle/next': {
      $get: {
        input: {
          query: {
            angle?: string | undefined
            difficulty?: 'easiest' | 'easier' | 'normal' | 'harder' | 'hardest' | undefined
            color?: 'white' | 'black' | undefined
          }
        }
        output: PuzzleAndGame
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/puzzle/batch/:angle': {
      $get: {
        input: { param: { angle: string } } & {
          query: {
            difficulty?: 'easiest' | 'easier' | 'normal' | 'harder' | 'hardest' | undefined
            nb?: number | undefined
            color?: 'white' | 'black' | undefined
          }
        }
        output: PuzzleBatchSelect
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { angle: string } } & { query: { nb?: number | undefined } } & {
          json: PuzzleBatchSolveRequest
        }
        output: PuzzleBatchSolveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/puzzle/activity': {
      $get: {
        input: {
          query: {
            max?: number | undefined
            before?: number | undefined
            since?: number | undefined
          }
        }
        output: PuzzleActivity
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/puzzle/replay/:days/:theme': {
      $get:
        | {
            input: { param: { days: number; theme: string } }
            output: PuzzleReplay
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { days: number; theme: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/puzzle/dashboard/:days': {
      $get: {
        input: { param: { days: number } }
        output: PuzzleDashboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storm/dashboard/:username': {
      $get: {
        input: { param: { username: string } } & { query: { days?: number | undefined } }
        output: PuzzleStormDashboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/racer': { $post: { input: {}; output: PuzzleRacer; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/racer/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PuzzleRaceResults
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/users': {
      $post: {
        input: { query: { profile?: boolean | undefined; rank?: boolean | undefined } } & {
          json: string
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/account': { $get: { input: {}; output: UserExtended; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/account/email': {
      $get: { input: {}; output: { email?: string | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/account/preferences': {
      $get: {
        input: {}
        output: { prefs?: UserPreferences | undefined; language?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/account/kid': {
      $get: { input: {}; output: { kid?: boolean | undefined }; outputFormat: 'json'; status: 200 }
      $post: { input: { query: { v: boolean } }; output: Ok; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/game/export/:gameId': {
      $get: {
        input: { param: { gameId: string } } & {
          query: {
            moves?: boolean | undefined
            pgnInJson?: boolean | undefined
            tags?: boolean | undefined
            clocks?: boolean | undefined
            evals?: boolean | undefined
            accuracy?: boolean | undefined
            opening?: boolean | undefined
            division?: boolean | undefined
            literate?: boolean | undefined
            withBookmarked?: boolean | undefined
          }
        } & { header: { Accept?: 'application/x-chess-pgn' | 'application/json' | undefined } }
        output: GamePgn | GameJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/game/:gameId/chat': {
      $get: {
        input: { param: { gameId: string } }
        output: SpectatorGameChat
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username/current-game': {
      $get: {
        input: { param: { username: string } } & {
          query: {
            moves?: boolean | undefined
            pgnInJson?: boolean | undefined
            tags?: boolean | undefined
            clocks?: boolean | undefined
            evals?: boolean | undefined
            accuracy?: boolean | undefined
            opening?: boolean | undefined
            division?: boolean | undefined
            literate?: boolean | undefined
          }
        } & { header: { Accept?: 'application/x-chess-pgn' | 'application/json' | undefined } }
        output: GamePgn | GameJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/games/user/:username': {
      $get: {
        input: { param: { username: string } } & {
          query: {
            since?: number | undefined
            until?: number | undefined
            max?: number | undefined
            vs?: string | undefined
            rated?: boolean | undefined
            perfType?: PerfType | undefined
            color?: 'white' | 'black' | undefined
            analysed?: boolean | undefined
            moves?: boolean | undefined
            pgnInJson?: boolean | undefined
            tags?: boolean | undefined
            clocks?: boolean | undefined
            evals?: boolean | undefined
            accuracy?: boolean | undefined
            opening?: boolean | undefined
            division?: boolean | undefined
            ongoing?: boolean | undefined
            finished?: boolean | undefined
            literate?: boolean | undefined
            lastFen?: boolean | undefined
            withBookmarked?: boolean | undefined
            sort?: 'dateAsc' | 'dateDesc' | undefined
          }
        } & { header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined } }
        output: GamePgn | GameJson
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/games/export/_ids': {
      $post: {
        input: {
          query: {
            moves?: boolean | undefined
            pgnInJson?: boolean | undefined
            tags?: boolean | undefined
            clocks?: boolean | undefined
            evals?: boolean | undefined
            accuracy?: boolean | undefined
            opening?: boolean | undefined
            division?: boolean | undefined
            literate?: boolean | undefined
          }
        } & {
          header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
        } & { json: string }
        output: GamePgn | GameJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/stream/games-by-users': {
      $post: {
        input: { query: { withCurrentGames?: boolean | undefined } } & { json: string }
        output: GameStream
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/stream/games/:streamId': {
      $post: {
        input: { param: { streamId: string } } & { json: string }
        output: GameStream
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/stream/games/:streamId/add': {
      $post: {
        input: { param: { streamId: string } } & { json: string }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/account/playing': {
      $get: {
        input: { query: { nb?: number | undefined } }
        output: {
          nbMyTurn: number
          nowPlaying: {
            fullId: string
            gameId: string
            fen: string
            color: GameColor
            lastMove: string
            source: GameSource
            status?: GameStatus | undefined
            variant: Variant
            speed: Speed
            perf: PerfType
            rated: boolean
            rating: number
            hasMoved: boolean
            opponent:
              | {
                  id: string
                  username: string
                  rating?: number | undefined
                  ratingDiff?: number | undefined
                }
              | { id: { [x: string]: unknown } | null; username: string }
              | { id: { [x: string]: unknown } | null; username: string; ai: number }
            isMyTurn: boolean
            secondsLeft: number
            tournamentId?: string | undefined
            swissId?: string | undefined
            winner?: GameColor | undefined
            ratingDiff?: number | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/stream/game/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MoveStream
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/import': {
      $post: {
        input: { json: { pgn?: string | undefined } } & { form: { pgn?: string | undefined } }
        output: { id?: string | undefined; url?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/games/export/imports': {
      $get: { input: {}; output: GamePgn; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/games/export/bookmarks': {
      $get: {
        input: {
          query: {
            since?: number | undefined
            until?: number | undefined
            max?: number | undefined
            moves?: boolean | undefined
            pgnInJson?: boolean | undefined
            tags?: boolean | undefined
            clocks?: boolean | undefined
            evals?: boolean | undefined
            accuracy?: boolean | undefined
            opening?: boolean | undefined
            division?: boolean | undefined
            literate?: boolean | undefined
            lastFen?: boolean | undefined
            sort?: 'dateAsc' | 'dateDesc' | undefined
          }
        } & { header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined } }
        output: GamePgn | GameJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bookmark/:gameId': {
      $post: {
        input: { param: { gameId: string } } & { query: { v?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/version': {
      $get: {
        input: {}
        output: { server: { date: string; commit: string } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tv/channels': {
      $get: {
        input: {}
        output: {
          bot: TvGame
          blitz: TvGame
          racingKings: TvGame
          ultraBullet: TvGame
          bullet: TvGame
          classical: TvGame
          threeCheck: TvGame
          antichess: TvGame
          computer: TvGame
          horde: TvGame
          rapid: TvGame
          atomic: TvGame
          crazyhouse: TvGame
          chess960: TvGame
          kingOfTheHill: TvGame
          best: TvGame
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tv/feed': { $get: { input: {}; output: TvFeed; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/tv/:channel/feed': {
      $get: {
        input: { param: { channel: string } }
        output: TvFeed
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/tv/:channel': {
      $get:
        | {
            input: { param: { channel: string } } & {
              query: {
                nb?: number | undefined
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                opening?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GamePgn
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel: string } } & {
              query: {
                nb?: number | undefined
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                opening?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GameJson
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tournament': {
      $get: { input: {}; output: ArenaTournaments; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                teamBattleByTeam?: string | undefined
                'conditions.teamMember.teamId'?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            } & {
              form: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                teamBattleByTeam?: string | undefined
                'conditions.teamMember.teamId'?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            }
            output: ArenaTournamentFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                teamBattleByTeam?: string | undefined
                'conditions.teamMember.teamId'?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            } & {
              form: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                teamBattleByTeam?: string | undefined
                'conditions.teamMember.teamId'?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/tournament/:id': {
      $get: {
        input: { param: { id: string } } & { query: { page?: number | undefined } }
        output: ArenaTournamentFull
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            } & {
              form: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            }
            output: ArenaTournamentFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            } & {
              form: {
                name?: string | undefined
                clockTime:
                  | 0
                  | 0.25
                  | 0.5
                  | 0.75
                  | 1
                  | 1.5
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                clockIncrement:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 10
                  | 15
                  | 20
                  | 25
                  | 30
                  | 40
                  | 50
                  | 60
                minutes:
                  | 20
                  | 25
                  | 30
                  | 35
                  | 40
                  | 45
                  | 50
                  | 55
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100
                  | 110
                  | 120
                  | 150
                  | 180
                  | 210
                  | 240
                  | 270
                  | 300
                  | 330
                  | 360
                  | 420
                  | 480
                  | 540
                  | 600
                  | 720
                waitMinutes?: 1 | 2 | 3 | 5 | 10 | 15 | 20 | 30 | 45 | 60 | undefined
                startDate?: bigint | undefined
                variant?: VariantKey | undefined
                rated?: boolean | undefined
                position?: FromPositionFEN | undefined
                berserkable?: boolean | undefined
                streakable?: boolean | undefined
                hasChat?: boolean | undefined
                description?: string | undefined
                password?: string | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?:
                  | 0
                  | 5
                  | 10
                  | 15
                  | 20
                  | 30
                  | 40
                  | 50
                  | 75
                  | 100
                  | 150
                  | 200
                  | undefined
                'conditions.allowList'?: string | undefined
                'conditions.bots'?: boolean | undefined
                'conditions.accountAge'?:
                  | 1
                  | 3
                  | 7
                  | 14
                  | 30
                  | 60
                  | 90
                  | 180
                  | 365
                  | 730
                  | 1095
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/tournament/:id/join': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                password?: string | undefined
                team?: string | undefined
                pairMeAsap?: boolean | undefined
              }
            } & {
              form: {
                password?: string | undefined
                team?: string | undefined
                pairMeAsap?: boolean | undefined
              }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                password?: string | undefined
                team?: string | undefined
                pairMeAsap?: boolean | undefined
              }
            } & {
              form: {
                password?: string | undefined
                team?: string | undefined
                pairMeAsap?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/tournament/:id/withdraw': {
      $post:
        | { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/tournament/:id/terminate': {
      $post:
        | { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/tournament/team-battle/:id': {
      $post:
        | {
            input: { param: { id: string } } & { json: { teams: string; nbLeaders: number } } & {
              form: { teams: string; nbLeaders: number }
            }
            output: ArenaTournamentFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { teams: string; nbLeaders: number } } & {
              form: { teams: string; nbLeaders: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/tournament/:id/games': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                player?: string | undefined
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                evals?: boolean | undefined
                accuracy?: boolean | undefined
                opening?: boolean | undefined
                division?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GamePgn
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                player?: string | undefined
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                evals?: boolean | undefined
                accuracy?: boolean | undefined
                opening?: boolean | undefined
                division?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GameJson
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tournament/:id/results': {
      $get: {
        input: { param: { id: string } } & {
          query: { nb?: number | undefined; sheet?: boolean | undefined }
        }
        output: {
          rank: number
          score: number
          rating: number
          username: string
          performance: number
          title?: Title | undefined
          team?: string | undefined
          flair?: Flair | undefined
          patronColor?: PatronColor | undefined
          sheet?: ArenaSheet | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/tournament/:id/teams': {
      $get: {
        input: { param: { id: string } }
        output: {
          id: string
          teams: {
            rank: number
            id: string
            score: number
            players: { user: LightUser; score?: number | undefined }[]
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username/tournament/created': {
      $get: {
        input: { param: { username: string } } & {
          query: { nb?: number | undefined; status?: 10 | 20 | 30 | undefined }
        }
        output: ArenaTournament
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/user/:username/tournament/played': {
      $get: {
        input: { param: { username: string } } & {
          query: { nb?: number | undefined; performance?: boolean | undefined }
        }
        output: ArenaTournamentPlayed
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/swiss/new/:teamId': {
      $post:
        | {
            input: { param: { teamId: string } } & {
              json: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            }
            output: SwissTournament
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & {
              json: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/swiss/:id': {
      $get: {
        input: { param: { id: string } }
        output: SwissTournament
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/swiss/:id/edit': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            }
            output: SwissTournament
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            } & {
              form: {
                name?: string | undefined
                'clock.limit':
                  | 0
                  | 15
                  | 30
                  | 45
                  | 60
                  | 90
                  | 120
                  | 180
                  | 240
                  | 300
                  | 360
                  | 420
                  | 480
                  | 600
                  | 900
                  | 1200
                  | 1500
                  | 1800
                  | 2400
                  | 3000
                  | 3600
                  | 4200
                  | 4800
                  | 5400
                  | 6000
                  | 6600
                  | 7200
                  | 7800
                  | 8400
                  | 9000
                  | 9600
                  | 10200
                  | 10800
                'clock.increment': number
                nbRounds: number
                startsAt?: bigint | undefined
                roundInterval?:
                  | -1
                  | 5
                  | 10
                  | 20
                  | 30
                  | 45
                  | 60
                  | 120
                  | 180
                  | 300
                  | 600
                  | 900
                  | 1200
                  | 1800
                  | 2700
                  | 3600
                  | 86400
                  | 172800
                  | 604800
                  | 99999999
                  | undefined
                variant?: VariantKey | undefined
                position?: SwissFromPositionFEN | undefined
                description?: string | undefined
                rated?: boolean | undefined
                password?: string | undefined
                forbiddenPairings?: string | undefined
                manualPairings?: string | undefined
                chatFor?: 0 | 10 | 20 | 30 | undefined
                'conditions.minRating.rating'?:
                  | 1000
                  | 1100
                  | 1200
                  | 1300
                  | 1400
                  | 1500
                  | 1600
                  | 1700
                  | 1800
                  | 1900
                  | 2000
                  | 2100
                  | 2200
                  | 2300
                  | 2400
                  | 2500
                  | 2600
                  | undefined
                'conditions.maxRating.rating'?:
                  | 2200
                  | 2100
                  | 2000
                  | 1900
                  | 1800
                  | 1700
                  | 1600
                  | 1500
                  | 1400
                  | 1300
                  | 1200
                  | 1100
                  | 1000
                  | 900
                  | 800
                  | undefined
                'conditions.nbRatedGame.nb'?: number | undefined
                'conditions.playYourGames'?: boolean | undefined
                'conditions.allowList'?: string | undefined
              }
            }
            output: SwissUnauthorisedEdit
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/swiss/:id/schedule-next-round': {
      $post:
        | {
            input: { param: { id: string } } & { json: { date?: bigint | undefined } } & {
              form: { date?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: { date?: bigint | undefined } } & {
              form: { date?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { date?: bigint | undefined } } & {
              form: { date?: bigint | undefined }
            }
            output: SwissUnauthorisedEdit
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/swiss/:id/join': {
      $post:
        | {
            input: { param: { id: string } } & { json: { password?: string | undefined } } & {
              form: { password?: string | undefined }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { password?: string | undefined } } & {
              form: { password?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/swiss/:id/withdraw': {
      $post: { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/swiss/:id/terminate': {
      $post:
        | { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/swiss/:id.trf': {
      $get: { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/swiss/:id/games': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                player?: string | undefined
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                evals?: boolean | undefined
                accuracy?: boolean | undefined
                opening?: boolean | undefined
                division?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GamePgn
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                player?: string | undefined
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                evals?: boolean | undefined
                accuracy?: boolean | undefined
                opening?: boolean | undefined
                division?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GameJson
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/swiss/:id/results': {
      $get: {
        input: { param: { id: string } } & { query: { nb?: number | undefined } }
        output: {
          absent?: boolean | undefined
          rank: number
          points: number
          tieBreak: number
          rating: number
          username: string
          title?: Title | undefined
          performance: number
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId/swiss': {
      $get: {
        input: { param: { teamId: string } } & {
          query: {
            max?: number | undefined
            status?: SwissStatus | undefined
            createdBy?: string | undefined
            name?: string | undefined
          }
        }
        output: SwissTournament
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/study/:studyId/:chapterId.pgn': {
      $get: {
        input: { param: { studyId: string; chapterId: string } } & {
          query: {
            clocks?: boolean | undefined
            comments?: boolean | undefined
            variations?: boolean | undefined
            orientation?: boolean | undefined
          }
        }
        output: StudyPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/study/:studyId.pgn': {
      $get: {
        input: { param: { studyId: string } } & {
          query: {
            clocks?: boolean | undefined
            comments?: boolean | undefined
            variations?: boolean | undefined
            orientation?: boolean | undefined
          }
        }
        output: StudyPgn
        outputFormat: 'text'
        status: 200
      }
      $head: {
        input: { param: { studyId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/study': {
      $post:
        | {
            input: {
              json: {
                name: string
                visibility: 'public' | 'unlisted' | 'private'
                flair?: Flair | undefined
                computer: StudyUserSelection
                explorer: StudyUserSelection
                cloneable: StudyUserSelection
                shareable: StudyUserSelection
                chat: StudyUserSelection
                sticky?: boolean | undefined
                description?: boolean | undefined
              }
            } & {
              form: {
                name: string
                visibility: 'public' | 'unlisted' | 'private'
                flair?: Flair | undefined
                computer: StudyUserSelection
                explorer: StudyUserSelection
                cloneable: StudyUserSelection
                shareable: StudyUserSelection
                chat: StudyUserSelection
                sticky?: boolean | undefined
                description?: boolean | undefined
              }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                visibility: 'public' | 'unlisted' | 'private'
                flair?: Flair | undefined
                computer: StudyUserSelection
                explorer: StudyUserSelection
                cloneable: StudyUserSelection
                shareable: StudyUserSelection
                chat: StudyUserSelection
                sticky?: boolean | undefined
                description?: boolean | undefined
              }
            } & {
              form: {
                name: string
                visibility: 'public' | 'unlisted' | 'private'
                flair?: Flair | undefined
                computer: StudyUserSelection
                explorer: StudyUserSelection
                cloneable: StudyUserSelection
                shareable: StudyUserSelection
                chat: StudyUserSelection
                sticky?: boolean | undefined
                description?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/study/:studyId/import-pgn': {
      $post:
        | {
            input: { param: { studyId: string } } & {
              json: {
                pgn: string
                name?: string | undefined
                orientation?: 'white' | 'black' | undefined
                variant?: VariantKey | undefined
                mode?: 'practice' | 'conceal' | 'gamebook' | undefined
              }
            } & {
              form: {
                pgn: string
                name?: string | undefined
                orientation?: 'white' | 'black' | undefined
                variant?: VariantKey | undefined
                mode?: 'practice' | 'conceal' | 'gamebook' | undefined
              }
            }
            output: StudyImportPgnChapters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { studyId: string } } & {
              json: {
                pgn: string
                name?: string | undefined
                orientation?: 'white' | 'black' | undefined
                variant?: VariantKey | undefined
                mode?: 'practice' | 'conceal' | 'gamebook' | undefined
              }
            } & {
              form: {
                pgn: string
                name?: string | undefined
                orientation?: 'white' | 'black' | undefined
                variant?: VariantKey | undefined
                mode?: 'practice' | 'conceal' | 'gamebook' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/study/:studyId/:chapterId/tags': {
      $post:
        | {
            input: { param: { studyId: string; chapterId: string } } & { json: { pgn: string } } & {
              form: { pgn: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { studyId: string; chapterId: string } } & { json: { pgn: string } } & {
              form: { pgn: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/study/:studyId/:chapterId/moves': {
      $post:
        | {
            input: { param: { studyId: string; chapterId: string } } & { json: { pgn: string } } & {
              form: { pgn: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { studyId: string; chapterId: string } } & { json: { pgn: string } } & {
              form: { pgn: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/study/by/:username/export.pgn': {
      $get: {
        input: { param: { username: string } } & {
          query: {
            clocks?: boolean | undefined
            comments?: boolean | undefined
            variations?: boolean | undefined
            orientation?: boolean | undefined
          }
        }
        output: StudyPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/study/by/:username': {
      $get: {
        input: { param: { username: string } }
        output: StudyMetadata
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/study/:studyId/:chapterId': {
      $delete: {
        input: { param: { studyId: string; chapterId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/broadcast': {
      $get: {
        input: {
          query: { nb?: number | undefined; html?: boolean | undefined; live?: boolean | undefined }
        }
        output: BroadcastWithRounds
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/broadcast/top': {
      $get: {
        input: { query: { page?: number | undefined; html?: boolean | undefined } }
        output: BroadcastTop
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/broadcast/by/:username': {
      $get: {
        input: { param: { username: string } } & {
          query: { page?: number | undefined; html?: boolean | undefined }
        }
        output: {
          currentPage: number
          maxPerPage: number
          currentPageResults: BroadcastByUser[]
          nbResults: number
          previousPage: number | null
          nextPage: number | null
          nbPages: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/broadcast/search': {
      $get: {
        input: { query: { page?: number | undefined; q?: string | undefined } }
        output: {
          currentPage: number
          maxPerPage: number
          currentPageResults: BroadcastWithLastRound[]
          previousPage: number | null
          nextPage: number | null
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcast/new': {
      $post:
        | {
            input: { json: BroadcastForm } & { form: BroadcastForm }
            output: BroadcastWithRounds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BroadcastForm } & { form: BroadcastForm }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/broadcast/:broadcastTournamentId': {
      $get: {
        input: { param: { broadcastTournamentId: string } }
        output: BroadcastWithRoundsAndFullGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcast/:broadcastTournamentId/players': {
      $get: {
        input: { param: { broadcastTournamentId: string } }
        output: BroadcastPlayerEntry[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcast/:broadcastTournamentId/players/:playerId': {
      $get:
        | {
            input: { param: { broadcastTournamentId: string; playerId: string } }
            output: BroadcastPlayerEntryWithFideAndGames
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { broadcastTournamentId: string; playerId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/broadcast/:broadcastTournamentId/teams/standings': {
      $get:
        | {
            input: { param: { broadcastTournamentId: string } }
            output: BroadcastTeamLeaderboardEntry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { broadcastTournamentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/broadcast/:broadcastTournamentId/edit': {
      $post:
        | {
            input: { param: { broadcastTournamentId: string } } & { json: BroadcastForm } & {
              form: BroadcastForm
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { broadcastTournamentId: string } } & { json: BroadcastForm } & {
              form: BroadcastForm
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/broadcast/:broadcastTournamentId/new': {
      $post:
        | {
            input: { param: { broadcastTournamentId: string } } & { json: BroadcastRoundForm } & {
              form: BroadcastRoundForm
            }
            output: BroadcastRoundNew
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { broadcastTournamentId: string } } & { json: BroadcastRoundForm } & {
              form: BroadcastRoundForm
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/broadcast/:broadcastTournamentSlug/:broadcastRoundSlug/:broadcastRoundId': {
      $get: {
        input: {
          param: {
            broadcastTournamentSlug: string
            broadcastRoundSlug: string
            broadcastRoundId: string
          }
        }
        output: BroadcastRound
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcast/round/:broadcastRoundId/edit': {
      $post:
        | {
            input: { param: { broadcastRoundId: string } } & {
              query: { patch?: boolean | undefined }
            } & { json: BroadcastRoundForm } & { form: BroadcastRoundForm }
            output: BroadcastRound
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { broadcastRoundId: string } } & {
              query: { patch?: boolean | undefined }
            } & { json: BroadcastRoundForm } & { form: BroadcastRoundForm }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/broadcast/round/:broadcastRoundId/reset': {
      $post: {
        input: { param: { broadcastRoundId: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/broadcast/round/:broadcastRoundId/push': {
      $post:
        | {
            input: { param: { broadcastRoundId: string } } & { json: string }
            output: BroadcastPgnPush
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { broadcastRoundId: string } } & { json: string }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/stream/broadcast/round/:broadcastRoundId.pgn': {
      $get: {
        input: { param: { broadcastRoundId: string } } & {
          query: { clocks?: boolean | undefined; comments?: boolean | undefined }
        }
        output: BroadcastPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/stream/broadcast/tour/:broadcastTourId.pgn': {
      $get: {
        input: { param: { broadcastTourId: string } } & {
          query: { clocks?: boolean | undefined; comments?: boolean | undefined }
        }
        output: BroadcastPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/stream/broadcast/group/:broadcastGroupId.pgn': {
      $get: {
        input: { param: { broadcastGroupId: string } } & {
          query: { clocks?: boolean | undefined; comments?: boolean | undefined }
        }
        output: BroadcastPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/broadcast/round/:broadcastRoundId.pgn': {
      $get: {
        input: { param: { broadcastRoundId: string } } & {
          query: { clocks?: boolean | undefined; comments?: boolean | undefined }
        }
        output: BroadcastPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/broadcast/:broadcastTournamentId.pgn': {
      $get: {
        input: { param: { broadcastTournamentId: string } } & {
          query: { clocks?: boolean | undefined; comments?: boolean | undefined }
        }
        output: BroadcastPgn
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/broadcast/my-rounds': {
      $get: {
        input: { query: { nb?: number | undefined } }
        output: BroadcastMyRound
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/fide/player/:playerId': {
      $get: {
        input: { param: { playerId: number } }
        output: FIDEPlayer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/fide/player/:playerId/ratings': {
      $get: {
        input: { param: { playerId: number } }
        output: FIDEPlayerRatings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/fide/player': {
      $get: {
        input: { query: { q: string } }
        output: FIDEPlayer[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/simul': {
      $get: {
        input: {}
        output: {
          pending?: Simul[] | undefined
          created?: Simul[] | undefined
          started?: Simul[] | undefined
          finished?: Simul[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId': {
      $get: {
        input: { param: { teamId: string } }
        output: Team
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/all': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: TeamPaginatorJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/of/:username': {
      $get: {
        input: { param: { username: string } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/search': {
      $get: {
        input: { query: { text?: string | undefined; page?: number | undefined } }
        output: TeamPaginatorJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId/users': {
      $get: {
        input: { param: { teamId: string } } & { query: { full?: boolean | undefined } }
        output: {
          joinedTeamAt?: bigint | undefined
          id: string
          name: string
          flair?: Flair | undefined
          title?: Title | undefined
          patron?: Patron | undefined
          patronColor?: PatronColor | undefined
          url?: string | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId/arena': {
      $get: {
        input: { param: { teamId: string } } & {
          query: {
            max?: number | undefined
            status?: ArenaStatusName | undefined
            createdBy?: string | undefined
            name?: string | undefined
          }
        }
        output: ArenaTournament
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/team/:teamId/join': {
      $post: {
        input: { param: { teamId: string } } & {
          json: { message?: string | undefined; password?: string | undefined }
        } & { form: { message?: string | undefined; password?: string | undefined } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/team/:teamId/quit': {
      $post: { input: { param: { teamId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/team/:teamId/requests': {
      $get: {
        input: { param: { teamId: string } } & { query: { declined?: boolean | undefined } }
        output: TeamRequestWithUser[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId/request/:userId/accept': {
      $post: {
        input: { param: { teamId: string; userId: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId/request/:userId/decline': {
      $post: {
        input: { param: { teamId: string; userId: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/team/:teamId/kick/:userId': {
      $post: {
        input: { param: { teamId: string; userId: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/team/updates': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: TeamUpdates
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/team/updates/:teamId': {
      $get: {
        input: { param: { teamId: string } } & { query: { page?: number | undefined } }
        output: TeamUpdatesOfTeam
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/team/:teamId/pm-all': {
      $post:
        | {
            input: { param: { teamId: string } } & { json: { message?: string | undefined } } & {
              form: { message?: string | undefined }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamId: string } } & { json: { message?: string | undefined } } & {
              form: { message?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/streamer/live': {
      $get: {
        input: {}
        output: {
          id: string
          name: string
          flair?: Flair | undefined
          title?: Title | undefined
          patron?: Patron | undefined
          patronColor?: PatronColor | undefined
          stream?:
            | {
                service?: 'twitch' | 'youtube' | undefined
                status?: string | undefined
                lang?: string | undefined
              }
            | undefined
          streamer?:
            | {
                name?: string | undefined
                headline?: string | undefined
                description?: string | undefined
                twitch?: string | undefined
                youtube?: string | undefined
                image?: string | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/crosstable/:user1/:user2': {
      $get: {
        input: { param: { user1: string; user2: string } } & {
          query: { matchup?: boolean | undefined }
        }
        output: Crosstable
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/player/autocomplete': {
      $get: {
        input: {
          query: {
            term: string
            exists?: boolean | undefined
            object?: boolean | undefined
            names?: boolean | undefined
            friend?: boolean | undefined
            team?: string | undefined
            tour?: string | undefined
            swiss?: string | undefined
            teacher?: boolean | undefined
          }
        }
        output: string[] | { result?: LightUserOnline[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/:username/note': {
      $post: {
        input: { param: { username: string } } & { json: { text: string } } & {
          form: { text: string }
        }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { username: string } }
        output: UserNote[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rel/following': {
      $get: { input: {}; output: UserExtended; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/rel/follow/:username': {
      $post: {
        input: { param: { username: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rel/unfollow/:username': {
      $post: {
        input: { param: { username: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rel/block/:username': {
      $post: {
        input: { param: { username: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rel/unblock/:username': {
      $post: {
        input: { param: { username: string } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/stream/event': {
      $get: {
        input: {}
        output:
          | GameStartEvent
          | GameFinishEvent
          | ChallengeEvent
          | ChallengeCanceledEvent
          | ChallengeDeclinedEvent
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/board/seek': {
      $post:
        | {
            input: {
              json: {
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                ratingRange?: string | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                ratingRange?: string | undefined
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                ratingRange?: string | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                ratingRange?: string | undefined
              }
            }
            output: ''
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                ratingRange?: string | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                ratingRange?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/board/game/stream/:gameId': {
      $get:
        | {
            input: { param: { gameId: string } }
            output: GameFullEvent | GameStateEvent | ChatLineEvent | OpponentGoneEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { gameId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/board/game/:gameId/move/:move': {
      $post:
        | {
            input: { param: { gameId: string; move: string } } & {
              query: { offeringDraw?: boolean | undefined }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string; move: string } } & {
              query: { offeringDraw?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/board/game/:gameId/chat': {
      $post:
        | {
            input: { param: { gameId: string } } & {
              json: { room: 'player' | 'spectator'; text: string }
            } & { form: { room: 'player' | 'spectator'; text: string } }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string } } & {
              json: { room: 'player' | 'spectator'; text: string }
            } & { form: { room: 'player' | 'spectator'; text: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $get: {
        input: { param: { gameId: string } }
        output: PlayerGameChat
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/board/game/:gameId/abort': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/board/game/:gameId/resign': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/board/game/:gameId/draw/:accept': {
      $post:
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/board/game/:gameId/takeback/:accept': {
      $post:
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/board/game/:gameId/claim-victory': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/board/game/:gameId/claim-draw': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/board/game/:gameId/berserk': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/bot/online': {
      $get: {
        input: { query: { nb?: number | undefined } }
        output: User
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/bot/account/upgrade': {
      $post:
        | { input: {}; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/bot/game/stream/:gameId': {
      $get:
        | {
            input: { param: { gameId: string } }
            output: GameFullEvent | GameStateEvent | ChatLineEvent | OpponentGoneEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { gameId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/bot/game/:gameId/move/:move': {
      $post:
        | {
            input: { param: { gameId: string; move: string } } & {
              query: { offeringDraw?: boolean | undefined }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string; move: string } } & {
              query: { offeringDraw?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/bot/game/:gameId/chat': {
      $post:
        | {
            input: { param: { gameId: string } } & {
              json: { room: 'player' | 'spectator'; text: string }
            } & { form: { room: 'player' | 'spectator'; text: string } }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string } } & {
              json: { room: 'player' | 'spectator'; text: string }
            } & { form: { room: 'player' | 'spectator'; text: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $get: {
        input: { param: { gameId: string } }
        output: PlayerGameChat
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/bot/game/:gameId/abort': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/bot/game/:gameId/resign': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/bot/game/:gameId/draw/:accept': {
      $post:
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/bot/game/:gameId/takeback/:accept': {
      $post:
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gameId: string; accept: boolean | 'yes' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/bot/game/:gameId/claim-victory': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/bot/game/:gameId/claim-draw': {
      $post:
        | { input: { param: { gameId: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { gameId: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/challenge': {
      $get: {
        input: {}
        output: { in?: ChallengeJson[] | undefined; out?: ChallengeJson[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/challenge/:username': {
      $post:
        | {
            input: { param: { username: string } } & {
              json: {
                rated?: boolean | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                keepAliveStream?: boolean | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                keepAliveStream?: boolean | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            }
            output: ChallengeJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              json: {
                rated?: boolean | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                keepAliveStream?: boolean | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                keepAliveStream?: boolean | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/challenge/:challengeId/show': {
      $get: {
        input: { param: { challengeId: string } }
        output: ChallengeJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/challenge/:challengeId/accept': {
      $post:
        | {
            input: { param: { challengeId: string } } & {
              query: { color?: 'white' | 'black' | undefined }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { challengeId: string } } & {
              query: { color?: 'white' | 'black' | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/challenge/:challengeId/decline': {
      $post:
        | {
            input: { param: { challengeId: string } } & {
              json: {
                reason?:
                  | 'generic'
                  | 'later'
                  | 'tooFast'
                  | 'tooSlow'
                  | 'timeControl'
                  | 'rated'
                  | 'casual'
                  | 'standard'
                  | 'variant'
                  | 'noBot'
                  | 'onlyBot'
                  | undefined
              }
            } & {
              form: {
                reason?:
                  | 'generic'
                  | 'later'
                  | 'tooFast'
                  | 'tooSlow'
                  | 'timeControl'
                  | 'rated'
                  | 'casual'
                  | 'standard'
                  | 'variant'
                  | 'noBot'
                  | 'onlyBot'
                  | undefined
              }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { challengeId: string } } & {
              json: {
                reason?:
                  | 'generic'
                  | 'later'
                  | 'tooFast'
                  | 'tooSlow'
                  | 'timeControl'
                  | 'rated'
                  | 'casual'
                  | 'standard'
                  | 'variant'
                  | 'noBot'
                  | 'onlyBot'
                  | undefined
              }
            } & {
              form: {
                reason?:
                  | 'generic'
                  | 'later'
                  | 'tooFast'
                  | 'tooSlow'
                  | 'timeControl'
                  | 'rated'
                  | 'casual'
                  | 'standard'
                  | 'variant'
                  | 'noBot'
                  | 'onlyBot'
                  | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/challenge/:challengeId/cancel': {
      $post:
        | {
            input: { param: { challengeId: string } } & {
              query: { opponentToken?: string | undefined }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { challengeId: string } } & {
              query: { opponentToken?: string | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/challenge/ai': {
      $post:
        | {
            input: {
              json: {
                level: number
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
              }
            } & {
              form: {
                level: number
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
              }
            }
            output: {
              id?: string | undefined
              variant?: Variant | undefined
              speed?: Speed | undefined
              perf?: PerfType | undefined
              rated?: boolean | undefined
              fen?: string | undefined
              turns?: number | undefined
              source?: GameSource | undefined
              status?: GameStatus | undefined
              createdAt?: bigint | undefined
              player?: GameColor | undefined
              fullId?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                level: number
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
              }
            } & {
              form: {
                level: number
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                color?: ChallengeColor | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/challenge/open': {
      $post:
        | {
            input: {
              json: {
                rated?: boolean | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                name?: string | undefined
                rules?:
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | 'noAbort'
                  | undefined
                users?: string | undefined
                expiresAt?: bigint | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                name?: string | undefined
                rules?:
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | 'noAbort'
                  | undefined
                users?: string | undefined
                expiresAt?: bigint | undefined
              }
            }
            output: ChallengeOpenJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                rated?: boolean | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                name?: string | undefined
                rules?:
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | 'noAbort'
                  | undefined
                users?: string | undefined
                expiresAt?: bigint | undefined
              }
            } & {
              form: {
                rated?: boolean | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                name?: string | undefined
                rules?:
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | 'noAbort'
                  | undefined
                users?: string | undefined
                expiresAt?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/challenge/:gameId/start-clocks': {
      $post: {
        input: { param: { gameId: string } } & {
          query: { token1: string; token2?: string | undefined }
        }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/bulk-pairing': {
      $get: { input: {}; output: { bulks: BulkPairing[] }; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: {
                players?: string | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                pairAt?: bigint | undefined
                startClocksAt?: bigint | undefined
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                message?: string | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            } & {
              form: {
                players?: string | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                pairAt?: bigint | undefined
                startClocksAt?: bigint | undefined
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                message?: string | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            }
            output: BulkPairing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                players?: string | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                pairAt?: bigint | undefined
                startClocksAt?: bigint | undefined
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                message?: string | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            } & {
              form: {
                players?: string | undefined
                'clock.limit'?: number | undefined
                'clock.increment'?: number | undefined
                days?: 1 | 2 | 3 | 5 | 7 | 10 | 14 | undefined
                pairAt?: bigint | undefined
                startClocksAt?: bigint | undefined
                rated?: boolean | undefined
                variant?: VariantKey | undefined
                fen?: FromPositionFEN | undefined
                message?: string | undefined
                rules?:
                  | 'noAbort'
                  | 'noRematch'
                  | 'noGiveTime'
                  | 'noClaimWin'
                  | 'noEarlyDraw'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/bulk-pairing/:id/start-clocks': {
      $post:
        | { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/bulk-pairing/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BulkPairing
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/bulk-pairing/:id/games': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                evals?: boolean | undefined
                accuracy?: boolean | undefined
                opening?: boolean | undefined
                division?: boolean | undefined
                literate?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GamePgn
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                moves?: boolean | undefined
                pgnInJson?: boolean | undefined
                tags?: boolean | undefined
                clocks?: boolean | undefined
                evals?: boolean | undefined
                accuracy?: boolean | undefined
                opening?: boolean | undefined
                division?: boolean | undefined
                literate?: boolean | undefined
              }
            } & {
              header: { Accept?: 'application/x-chess-pgn' | 'application/x-ndjson' | undefined }
            }
            output: GameJson
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/round/:gameId/add-time/:seconds': {
      $post: {
        input: { param: { gameId: string; seconds: number } }
        output: Ok
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/token/admin-challenge': {
      $post:
        | {
            input: { json: { users: string; description: string } } & {
              form: { users: string; description: string }
            }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { users: string; description: string } } & {
              form: { users: string; description: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/inbox/:username': {
      $post:
        | {
            input: { param: { username: string } } & { json: { text: string } } & {
              form: { text: string }
            }
            output: Ok
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: { text: string } } & {
              form: { text: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/cloud-eval': {
      $get:
        | {
            input: {
              query: { fen: string; multiPv?: number | undefined; variant?: VariantKey | undefined }
            }
            output: CloudEval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { fen: string; multiPv?: number | undefined; variant?: VariantKey | undefined }
            }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/external-engine': {
      $get: { input: {}; output: ExternalEngine[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: ExternalEngineRegistration }
        output: ExternalEngine
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/external-engine/:id': {
      $get: {
        input: { param: { id: string } }
        output: ExternalEngine
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ExternalEngineRegistration }
        output: ExternalEngine
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: Ok; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/external-engine/:id/analyse': {
      $post: {
        input: { param: { id: string } } & {
          json: { clientSecret: string; work: ExternalEngineWork }
        }
        output: {
          time: number
          depth: number
          nodes: number
          pvs: {
            depth: number
            cp?: number | undefined
            mate?: number | undefined
            moves: string[]
          }[]
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/external-engine/work': {
      $post:
        | {
            input: { json: { providerSecret: string } }
            output: { id: string; work: ExternalEngineWork; engine: ExternalEngine }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { providerSecret: string } }
            output: {}
            outputFormat: string
            status: 204
          }
    }
  } & {
    '/api/external-engine/work/:id': {
      $post: {
        input: { param: { id: string } } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth': {
      $get: {
        input: {
          query: {
            response_type: 'code'
            client_id: string
            redirect_uri: string
            code_challenge_method: 'S256'
            code_challenge: string
            scope?: string | undefined
            username?: string | undefined
            state?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/token': {
      $post:
        | {
            input: {
              json: {
                grant_type?: 'authorization_code' | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
              }
            } & {
              form: {
                grant_type?: 'authorization_code' | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
              }
            }
            output: { token_type: string; access_token: string; expires_in: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                grant_type?: 'authorization_code' | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
              }
            } & {
              form: {
                grant_type?: 'authorization_code' | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
              }
            }
            output: OAuthError
            outputFormat: 'json'
            status: 400
          }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/token/test': {
      $post: {
        input: { json: string }
        output: {
          [x: string]:
            | {
                userId?: string | undefined
                scopes?: string | undefined
                expires?: (number | null) | undefined
              }
            | ({ [x: string]: unknown } | null)
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/masters': {
      $get:
        | {
            input: {
              query: {
                fen?: string | undefined
                play?: string | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                topGames?: number | undefined
              }
            }
            output: OpeningExplorerMasters
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fen?: string | undefined
                play?: string | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                topGames?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/lichess': {
      $get:
        | {
            input: {
              query: {
                variant?: VariantKey | undefined
                fen?: string | undefined
                play?: string | undefined
                speeds?: Speed[] | undefined
                ratings?: (0 | 1000 | 1200 | 1400 | 1600 | 1800 | 2000 | 2200 | 2500)[] | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                topGames?: number | undefined
                recentGames?: number | undefined
                history?: boolean | undefined
              }
            }
            output: OpeningExplorerLichess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                variant?: VariantKey | undefined
                fen?: string | undefined
                play?: string | undefined
                speeds?: Speed[] | undefined
                ratings?: (0 | 1000 | 1200 | 1400 | 1600 | 1800 | 2000 | 2200 | 2500)[] | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                topGames?: number | undefined
                recentGames?: number | undefined
                history?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/player': {
      $get:
        | {
            input: {
              query: {
                player: string
                color: 'white' | 'black'
                variant?: VariantKey | undefined
                fen?: string | undefined
                play?: string | undefined
                speeds?: Speed[] | undefined
                modes?: ('casual' | 'rated')[] | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                recentGames?: number | undefined
              }
            }
            output: OpeningExplorerPlayer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                player: string
                color: 'white' | 'black'
                variant?: VariantKey | undefined
                fen?: string | undefined
                play?: string | undefined
                speeds?: Speed[] | undefined
                modes?: ('casual' | 'rated')[] | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                recentGames?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                player: string
                color: 'white' | 'black'
                variant?: VariantKey | undefined
                fen?: string | undefined
                play?: string | undefined
                speeds?: Speed[] | undefined
                modes?: ('casual' | 'rated')[] | undefined
                since?: string | undefined
                until?: string | undefined
                moves?: number | undefined
                recentGames?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/masters/pgn/:gameId': {
      $get:
        | {
            input: { param: { gameId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { gameId: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/standard': {
      $get: {
        input: { query: { fen: string; dtc?: 'never' | 'auxiliary' | 'always' | undefined } }
        output: TablebaseJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/atomic': {
      $get: {
        input: { query: { fen: string } }
        output: TablebaseJson
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/antichess': {
      $get: {
        input: { query: { fen: string } }
        output: TablebaseJson
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
