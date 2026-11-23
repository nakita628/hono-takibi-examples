type MainSettings = {
  apiKey?: string | undefined
  appLanguage?: string | undefined
  applicationTitle?: string | undefined
  applicationUrl?: string | undefined
  trustProxy?: boolean | undefined
  csrfProtection?: boolean | undefined
  hideAvailable?: boolean | undefined
  partialRequestsEnabled?: boolean | undefined
  localLogin?: boolean | undefined
  newPlexLogin?: boolean | undefined
  defaultPermissions?: number | undefined
}
type PlexLibrary = { id: string; name: string; enabled: boolean }
type PlexSettings = {
  name: string
  machineId: string
  ip: string
  port: number
  useSsl?: (boolean | null) | undefined
  libraries?: PlexLibrary[] | undefined
  webAppUrl?: (string | null) | undefined
}
type PlexConnection = {
  protocol: string
  address: string
  port: number
  uri: string
  local: boolean
  status?: number | undefined
  message?: string | undefined
}
type PlexDevice = {
  name: string
  product: string
  productVersion: string
  platform: string
  platformVersion?: string | undefined
  device: string
  clientIdentifier: string
  createdAt: string
  lastSeenAt: string
  provides: string[]
  owned: boolean
  ownerID?: string | undefined
  home?: boolean | undefined
  sourceTitle?: string | undefined
  accessToken?: string | undefined
  publicAddress?: string | undefined
  httpsRequired?: boolean | undefined
  synced?: boolean | undefined
  relay?: boolean | undefined
  dnsRebindingProtection?: boolean | undefined
  natLoopbackSupported?: boolean | undefined
  publicAddressMatches?: boolean | undefined
  presence?: boolean | undefined
  connection: PlexConnection[]
}
type TautulliSettings = {
  hostname?: (string | null) | undefined
  port?: (number | null) | undefined
  useSsl?: (boolean | null) | undefined
  apiKey?: (string | null) | undefined
  externalUrl?: (string | null) | undefined
}
type RadarrSettings = {
  id?: number | undefined
  name: string
  hostname: string
  port: number
  apiKey: string
  useSsl: boolean
  baseUrl?: string | undefined
  activeProfileId: number
  activeProfileName: string
  activeDirectory: string
  is4k: boolean
  minimumAvailability: string
  isDefault: boolean
  externalUrl?: string | undefined
  syncEnabled?: boolean | undefined
  preventSearch?: boolean | undefined
}
type ServiceProfile = { id?: number | undefined; name?: string | undefined }
type SonarrSettings = {
  id?: number | undefined
  name: string
  hostname: string
  port: number
  apiKey: string
  useSsl: boolean
  baseUrl?: string | undefined
  activeProfileId: number
  activeProfileName: string
  activeDirectory: string
  activeLanguageProfileId?: number | undefined
  activeAnimeProfileId?: (number | null) | undefined
  activeAnimeLanguageProfileId?: (number | null) | undefined
  activeAnimeProfileName?: (string | null) | undefined
  activeAnimeDirectory?: (string | null) | undefined
  is4k: boolean
  enableSeasonFolders: boolean
  isDefault: boolean
  externalUrl?: string | undefined
  syncEnabled?: boolean | undefined
  preventSearch?: boolean | undefined
}
type PublicSettings = { initialized?: boolean | undefined }
type Job = {
  id?: string | undefined
  type?: 'process' | 'command' | undefined
  interval?: 'short' | 'long' | 'fixed' | undefined
  name?: string | undefined
  nextExecutionTime?: string | undefined
  running?: boolean | undefined
}
type NotificationEmailSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?:
    | {
        emailFrom?: string | undefined
        senderName?: string | undefined
        smtpHost?: string | undefined
        smtpPort?: number | undefined
        secure?: boolean | undefined
        ignoreTls?: boolean | undefined
        requireTls?: boolean | undefined
        authUser?: (string | null) | undefined
        authPass?: (string | null) | undefined
        allowSelfSigned?: boolean | undefined
      }
    | undefined
}
type DiscordSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?:
    | {
        botUsername?: string | undefined
        botAvatarUrl?: string | undefined
        webhookUrl?: string | undefined
        enableMentions?: boolean | undefined
      }
    | undefined
}
type LunaSeaSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?: { webhookUrl?: string | undefined; profileName?: string | undefined } | undefined
}
type PushbulletSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?:
    | { accessToken?: string | undefined; channelTag?: (string | null) | undefined }
    | undefined
}
type PushoverSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?:
    | {
        accessToken?: string | undefined
        userToken?: string | undefined
        sound?: string | undefined
      }
    | undefined
}
type GotifySettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?: { url?: string | undefined; token?: string | undefined } | undefined
}
type SlackSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?: { webhookUrl?: string | undefined } | undefined
}
type TelegramSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?:
    | {
        botUsername?: string | undefined
        botAPI?: string | undefined
        chatId?: string | undefined
        sendSilently?: boolean | undefined
      }
    | undefined
}
type WebPushSettings = { enabled?: boolean | undefined; types?: number | undefined }
type WebhookSettings = {
  enabled?: boolean | undefined
  types?: number | undefined
  options?:
    | {
        webhookUrl?: string | undefined
        authHeader?: string | undefined
        jsonPayload?: string | undefined
      }
    | undefined
}
type DiscoverSlider = {
  id?: number | undefined
  type: number
  title: string | null
  isBuiltIn?: boolean | undefined
  enabled: boolean
  data: string | null
}
type User = {
  id: number
  email: string
  username?: string | undefined
  plexToken?: string | undefined
  plexUsername?: string | undefined
  userType?: number | undefined
  permissions?: number | undefined
  avatar?: string | undefined
  createdAt: string
  updatedAt: string
  requestCount?: number | undefined
}
type PageInfo = {
  page?: number | undefined
  pages?: number | undefined
  results?: number | undefined
}
type MediaInfo = {
  id?: number | undefined
  tmdbId?: number | undefined
  tvdbId?: (number | null) | undefined
  status?: number | undefined
  requests?: MediaRequest[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type MediaRequest = {
  id: number
  status: number
  media?: MediaInfo | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  requestedBy?: User | undefined
  modifiedBy?: User | (string | null) | undefined
  is4k?: boolean | undefined
  serverId?: number | undefined
  profileId?: number | undefined
  rootFolder?: string | undefined
}
type NotificationAgentTypes = {
  discord?: number | undefined
  email?: number | undefined
  pushbullet?: number | undefined
  pushover?: number | undefined
  slack?: number | undefined
  telegram?: number | undefined
  webhook?: number | undefined
  webpush?: number | undefined
}
type UserSettingsNotifications = {
  notificationTypes?: NotificationAgentTypes | undefined
  emailEnabled?: boolean | undefined
  pgpKey?: (string | null) | undefined
  discordEnabled?: boolean | undefined
  discordEnabledTypes?: (number | null) | undefined
  discordId?: (string | null) | undefined
  pushbulletAccessToken?: (string | null) | undefined
  pushoverApplicationToken?: (string | null) | undefined
  pushoverUserKey?: (string | null) | undefined
  pushoverSound?: (string | null) | undefined
  telegramEnabled?: boolean | undefined
  telegramBotUsername?: (string | null) | undefined
  telegramChatId?: (string | null) | undefined
  telegramSendSilently?: (boolean | null) | undefined
}
type MovieResult = {
  id: number
  mediaType: string
  popularity?: number | undefined
  posterPath?: string | undefined
  backdropPath?: string | undefined
  voteCount?: number | undefined
  voteAverage?: number | undefined
  genreIds?: number[] | undefined
  overview?: string | undefined
  originalLanguage?: string | undefined
  title: string
  originalTitle?: string | undefined
  releaseDate?: string | undefined
  adult?: boolean | undefined
  video?: boolean | undefined
  mediaInfo?: MediaInfo | undefined
}
type TvResult = {
  id?: number | undefined
  mediaType?: string | undefined
  popularity?: number | undefined
  posterPath?: string | undefined
  backdropPath?: string | undefined
  voteCount?: number | undefined
  voteAverage?: number | undefined
  genreIds?: number[] | undefined
  overview?: string | undefined
  originalLanguage?: string | undefined
  name?: string | undefined
  originalName?: string | undefined
  originCountry?: string[] | undefined
  firstAirDate?: string | undefined
  mediaInfo?: MediaInfo | undefined
}
type PersonResult = {
  id?: number | undefined
  profilePath?: string | undefined
  adult?: boolean | undefined
  mediaType?: string | undefined
  knownFor?: (MovieResult | TvResult)[] | undefined
}
type Keyword = { id?: number | undefined; name?: string | undefined }
type Company = {
  id?: number | undefined
  logo_path?: (string | null) | undefined
  name?: string | undefined
}
type Genre = { id?: number | undefined; name?: string | undefined }
type SpokenLanguage = {
  englishName?: (string | null) | undefined
  iso_639_1?: string | undefined
  name?: string | undefined
}
type ProductionCompany = {
  id?: number | undefined
  logoPath?: (string | null) | undefined
  originCountry?: string | undefined
  name?: string | undefined
}
type Network = {
  id?: number | undefined
  logoPath?: (string | null) | undefined
  originCountry?: string | undefined
  name?: string | undefined
}
type RelatedVideo = {
  url?: string | undefined
  key?: string | undefined
  name?: string | undefined
  size?: number | undefined
  type?:
    | 'Clip'
    | 'Teaser'
    | 'Trailer'
    | 'Featurette'
    | 'Opening Credits'
    | 'Behind the Scenes'
    | 'Bloopers'
    | undefined
  site?: 'YouTube' | undefined
}
type Cast = {
  id?: number | undefined
  castId?: number | undefined
  character?: string | undefined
  creditId?: string | undefined
  gender?: number | undefined
  name?: string | undefined
  order?: number | undefined
  profilePath?: (string | null) | undefined
}
type Crew = {
  id?: number | undefined
  creditId?: string | undefined
  gender?: number | undefined
  name?: string | undefined
  job?: string | undefined
  department?: string | undefined
  profilePath?: (string | null) | undefined
}
type ExternalIds = {
  facebookId?: (string | null) | undefined
  freebaseId?: (string | null) | undefined
  freebaseMid?: (string | null) | undefined
  imdbId?: (string | null) | undefined
  instagramId?: (string | null) | undefined
  tvdbId?: (number | null) | undefined
  tvrageId?: (number | null) | undefined
  twitterId?: (string | null) | undefined
}
type WatchProviderDetails = {
  displayPriority?: number | undefined
  logoPath?: string | undefined
  id?: number | undefined
  name?: string | undefined
}
type WatchProviders = {
  iso_3166_1?: string | undefined
  link?: string | undefined
  buy?: WatchProviderDetails[] | undefined
  flatrate?: { [x: string]: unknown } | undefined
}[]
type MovieDetails = {
  id?: number | undefined
  imdbId?: string | undefined
  adult?: boolean | undefined
  backdropPath?: string | undefined
  posterPath?: string | undefined
  budget?: number | undefined
  genres?: Genre[] | undefined
  homepage?: string | undefined
  relatedVideos?: RelatedVideo[] | undefined
  originalLanguage?: string | undefined
  originalTitle?: string | undefined
  overview?: string | undefined
  popularity?: number | undefined
  productionCompanies?: ProductionCompany[] | undefined
  productionCountries?: { iso_3166_1?: string | undefined; name?: string | undefined }[] | undefined
  releaseDate?: string | undefined
  releases?:
    | {
        results?:
          | {
              iso_3166_1?: string | undefined
              rating?: (string | null) | undefined
              release_dates?:
                | {
                    certification?: string | undefined
                    iso_639_1?: (string | null) | undefined
                    note?: (string | null) | undefined
                    release_date?: string | undefined
                    type?: number | undefined
                  }[]
                | undefined
            }[]
          | undefined
      }
    | undefined
  revenue?: (number | null) | undefined
  runtime?: number | undefined
  spokenLanguages?: SpokenLanguage[] | undefined
  status?: string | undefined
  tagline?: string | undefined
  title?: string | undefined
  video?: boolean | undefined
  voteAverage?: number | undefined
  voteCount?: number | undefined
  credits?: { cast?: Cast[] | undefined; crew?: Crew[] | undefined } | undefined
  collection?:
    | {
        id?: number | undefined
        name?: string | undefined
        posterPath?: string | undefined
        backdropPath?: string | undefined
      }
    | undefined
  externalIds?: ExternalIds | undefined
  mediaInfo?: MediaInfo | undefined
  watchProviders?: WatchProviders[] | undefined
}
type Episode = {
  id?: number | undefined
  name?: string | undefined
  airDate?: (string | null) | undefined
  episodeNumber?: number | undefined
  overview?: string | undefined
  productionCode?: string | undefined
  seasonNumber?: number | undefined
  showId?: number | undefined
  stillPath?: (string | null) | undefined
  voteAverage?: number | undefined
  voteCount?: number | undefined
}
type Season = {
  id?: number | undefined
  airDate?: (string | null) | undefined
  episodeCount?: number | undefined
  name?: string | undefined
  overview?: string | undefined
  posterPath?: string | undefined
  seasonNumber?: number | undefined
  episodes?: Episode[] | undefined
}
type TvDetails = {
  id?: number | undefined
  backdropPath?: string | undefined
  posterPath?: string | undefined
  contentRatings?:
    | { results?: { iso_3166_1?: string | undefined; rating?: string | undefined }[] | undefined }
    | undefined
  createdBy?:
    | {
        id?: number | undefined
        name?: string | undefined
        gender?: number | undefined
        profilePath?: (string | null) | undefined
      }[]
    | undefined
  episodeRunTime?: number[] | undefined
  firstAirDate?: string | undefined
  genres?: Genre[] | undefined
  homepage?: string | undefined
  inProduction?: boolean | undefined
  languages?: string[] | undefined
  lastAirDate?: string | undefined
  lastEpisodeToAir?: Episode | undefined
  name?: string | undefined
  nextEpisodeToAir?: Episode | undefined
  networks?: ProductionCompany[] | undefined
  numberOfEpisodes?: number | undefined
  numberOfSeason?: number | undefined
  originCountry?: string[] | undefined
  originalLanguage?: string | undefined
  originalName?: string | undefined
  overview?: string | undefined
  popularity?: number | undefined
  productionCompanies?: ProductionCompany[] | undefined
  productionCountries?: { iso_3166_1?: string | undefined; name?: string | undefined }[] | undefined
  spokenLanguages?: SpokenLanguage[] | undefined
  seasons?: Season[] | undefined
  status?: string | undefined
  tagline?: string | undefined
  type?: string | undefined
  voteAverage?: number | undefined
  voteCount?: number | undefined
  credits?: { cast?: Cast[] | undefined; crew?: Crew[] | undefined } | undefined
  externalIds?: ExternalIds | undefined
  keywords?: Keyword[] | undefined
  mediaInfo?: MediaInfo | undefined
  watchProviders?: WatchProviders[] | undefined
}
type PersonDetails = {
  id?: number | undefined
  name?: string | undefined
  deathday?: string | undefined
  knownForDepartment?: string | undefined
  alsoKnownAs?: string[] | undefined
  gender?: string | undefined
  biography?: string | undefined
  popularity?: string | undefined
  placeOfBirth?: string | undefined
  profilePath?: string | undefined
  adult?: boolean | undefined
  imdbId?: string | undefined
  homepage?: string | undefined
}
type CreditCast = {
  id?: number | undefined
  originalLanguage?: string | undefined
  episodeCount?: number | undefined
  overview?: string | undefined
  originCountry?: string[] | undefined
  originalName?: string | undefined
  voteCount?: number | undefined
  name?: string | undefined
  mediaType?: string | undefined
  popularity?: number | undefined
  creditId?: string | undefined
  backdropPath?: string | undefined
  firstAirDate?: string | undefined
  voteAverage?: number | undefined
  genreIds?: number[] | undefined
  posterPath?: string | undefined
  originalTitle?: string | undefined
  video?: boolean | undefined
  title?: string | undefined
  adult?: boolean | undefined
  releaseDate?: string | undefined
  character?: string | undefined
  mediaInfo?: MediaInfo | undefined
}
type CreditCrew = {
  id?: number | undefined
  originalLanguage?: string | undefined
  episodeCount?: number | undefined
  overview?: string | undefined
  originCountry?: string[] | undefined
  originalName?: string | undefined
  voteCount?: number | undefined
  name?: string | undefined
  mediaType?: string | undefined
  popularity?: number | undefined
  creditId?: string | undefined
  backdropPath?: string | undefined
  firstAirDate?: string | undefined
  voteAverage?: number | undefined
  genreIds?: number[] | undefined
  posterPath?: string | undefined
  originalTitle?: string | undefined
  video?: boolean | undefined
  title?: string | undefined
  adult?: boolean | undefined
  releaseDate?: string | undefined
  department?: string | undefined
  job?: string | undefined
  mediaInfo?: MediaInfo | undefined
}
type Collection = {
  id?: number | undefined
  name?: string | undefined
  overview?: string | undefined
  posterPath?: string | undefined
  backdropPath?: string | undefined
  parts?: MovieResult[] | undefined
}
type SonarrSeries = {
  title?: string | undefined
  sortTitle?: string | undefined
  seasonCount?: number | undefined
  status?: string | undefined
  overview?: string | undefined
  network?: string | undefined
  airTime?: string | undefined
  images?: { coverType?: string | undefined; url?: string | undefined }[] | undefined
  remotePoster?: string | undefined
  seasons?: { seasonNumber?: number | undefined; monitored?: boolean | undefined }[] | undefined
  year?: number | undefined
  path?: string | undefined
  profileId?: number | undefined
  languageProfileId?: number | undefined
  seasonFolder?: boolean | undefined
  monitored?: boolean | undefined
  useSceneNumbering?: boolean | undefined
  runtime?: number | undefined
  tvdbId?: number | undefined
  tvRageId?: number | undefined
  tvMazeId?: number | undefined
  firstAired?: string | undefined
  lastInfoSync?: (string | null) | undefined
  seriesType?: string | undefined
  cleanTitle?: string | undefined
  imdbId?: string | undefined
  titleSlug?: string | undefined
  certification?: string | undefined
  genres?: string[] | undefined
  tags?: string[] | undefined
  added?: string | undefined
  ratings?: { votes?: number | undefined; value?: number | undefined }[] | undefined
  qualityProfileId?: number | undefined
  id?: (number | null) | undefined
  rootFolderPath?: (string | null) | undefined
  addOptions?:
    | {
        ignoreEpisodesWithFiles?: (boolean | null) | undefined
        ignoreEpisodesWithoutFiles?: (boolean | null) | undefined
        searchForMissingEpisodes?: (boolean | null) | undefined
      }[]
    | undefined
}
type IssueComment = {
  id?: number | undefined
  user?: User | undefined
  message?: string | undefined
}
type Issue = {
  id?: number | undefined
  issueType?: number | undefined
  media?: MediaInfo | undefined
  createdBy?: User | undefined
  modifiedBy?: User | undefined
  comments?: IssueComment[] | undefined
}
type WatchProviderRegion = {
  iso_3166_1?: string | undefined
  english_name?: string | undefined
  native_name?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/status': {
      $get: {
        input: {}
        output: {
          version?: string | undefined
          commitTag?: string | undefined
          updateAvailable?: boolean | undefined
          commitsBehind?: number | undefined
          restartRequired?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/status/appdata': {
      $get: {
        input: {}
        output: { appData?: boolean | undefined; appDataPath?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/main': {
      $get: { input: {}; output: MainSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: MainSettings }
        output: MainSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/main/regenerate': {
      $post: { input: {}; output: MainSettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/plex': {
      $get: { input: {}; output: PlexSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: PlexSettings }
        output: PlexSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/plex/library': {
      $get: {
        input: {
          query: { sync?: (string | null) | undefined; enable?: (string | null) | undefined }
        }
        output: PlexLibrary[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/plex/sync': {
      $get: {
        input: {}
        output: {
          running?: boolean | undefined
          progress?: number | undefined
          total?: number | undefined
          currentLibrary?: PlexLibrary | undefined
          libraries?: PlexLibrary[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { cancel?: boolean | undefined; start?: boolean | undefined } }
        output: {
          running?: boolean | undefined
          progress?: number | undefined
          total?: number | undefined
          currentLibrary?: PlexLibrary | undefined
          libraries?: PlexLibrary[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/plex/devices/servers': {
      $get: { input: {}; output: PlexDevice[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/plex/users': {
      $get: {
        input: {}
        output: {
          id?: string | undefined
          title?: string | undefined
          username?: string | undefined
          email?: string | undefined
          thumb?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/tautulli': {
      $get: { input: {}; output: TautulliSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: TautulliSettings }
        output: TautulliSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/radarr': {
      $get: { input: {}; output: RadarrSettings[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: RadarrSettings }
        output: RadarrSettings
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/settings/radarr/test': {
      $post: {
        input: {
          json: {
            hostname: string
            port: number
            apiKey: string
            useSsl: boolean
            baseUrl?: string | undefined
          }
        }
        output: { profiles?: ServiceProfile[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/radarr/:radarrId': {
      $put: {
        input: { param: { radarrId: number } } & { json: RadarrSettings }
        output: RadarrSettings
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { radarrId: number } }
        output: RadarrSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/radarr/:radarrId/profiles': {
      $get: {
        input: { param: { radarrId: number } }
        output: ServiceProfile[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/sonarr': {
      $get: { input: {}; output: SonarrSettings[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SonarrSettings }
        output: SonarrSettings
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/settings/sonarr/test': {
      $post: {
        input: {
          json: {
            hostname: string
            port: number
            apiKey: string
            useSsl: boolean
            baseUrl?: string | undefined
          }
        }
        output: { profiles?: ServiceProfile[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/sonarr/:sonarrId': {
      $put: {
        input: { param: { sonarrId: number } } & { json: SonarrSettings }
        output: SonarrSettings
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { sonarrId: number } }
        output: SonarrSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/public': {
      $get: { input: {}; output: PublicSettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/initialize': {
      $post: { input: {}; output: PublicSettings; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/jobs': { $get: { input: {}; output: Job[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/settings/jobs/:jobId/run': {
      $post: { input: { param: { jobId: string } }; output: Job; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/jobs/:jobId/cancel': {
      $post: { input: { param: { jobId: string } }; output: Job; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/jobs/:jobId/schedule': {
      $post: {
        input: { param: { jobId: string } } & { json: { schedule?: string | undefined } }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/cache': {
      $get: {
        input: {}
        output: {
          imageCache?:
            | { tmdb?: { size?: number | undefined; imageCount?: number | undefined } | undefined }
            | undefined
          apiCaches?:
            | {
                id?: string | undefined
                name?: string | undefined
                stats?:
                  | {
                      hits?: number | undefined
                      misses?: number | undefined
                      keys?: number | undefined
                      ksize?: number | undefined
                      vsize?: number | undefined
                    }
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/cache/:cacheId/flush': {
      $post: {
        input: { param: { cacheId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/settings/logs': {
      $get: {
        input: {
          query: {
            take?: (number | null) | undefined
            skip?: (number | null) | undefined
            filter?: 'debug' | 'info' | 'warn' | 'error' | undefined
            search?: (string | null) | undefined
          }
        }
        output: {
          label?: string | undefined
          level?: string | undefined
          message?: string | undefined
          timestamp?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/email': {
      $get: { input: {}; output: NotificationEmailSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: NotificationEmailSettings }
        output: NotificationEmailSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/email/test': {
      $post: {
        input: { json: NotificationEmailSettings }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/settings/notifications/discord': {
      $get: { input: {}; output: DiscordSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: DiscordSettings }
        output: DiscordSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/discord/test': {
      $post: { input: { json: DiscordSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/lunasea': {
      $get: { input: {}; output: LunaSeaSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: LunaSeaSettings }
        output: LunaSeaSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/lunasea/test': {
      $post: { input: { json: LunaSeaSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/pushbullet': {
      $get: { input: {}; output: PushbulletSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: PushbulletSettings }
        output: PushbulletSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/pushbullet/test': {
      $post: { input: { json: PushbulletSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/pushover': {
      $get: { input: {}; output: PushoverSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: PushoverSettings }
        output: PushoverSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/pushover/test': {
      $post: { input: { json: PushoverSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/pushover/sounds': {
      $get: {
        input: { query: { token: string } }
        output: { name?: string | undefined; description?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/gotify': {
      $get: { input: {}; output: GotifySettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: GotifySettings }
        output: GotifySettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/gotify/test': {
      $post: { input: { json: GotifySettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/slack': {
      $get: { input: {}; output: SlackSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SlackSettings }
        output: SlackSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/slack/test': {
      $post: { input: { json: SlackSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/telegram': {
      $get: { input: {}; output: TelegramSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: TelegramSettings }
        output: TelegramSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/telegram/test': {
      $post: { input: { json: TelegramSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/webpush': {
      $get: { input: {}; output: WebPushSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: WebPushSettings }
        output: WebPushSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/webpush/test': {
      $post: { input: { json: WebPushSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/notifications/webhook': {
      $get: { input: {}; output: WebhookSettings; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: WebhookSettings }
        output: WebhookSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/notifications/webhook/test': {
      $post: { input: { json: WebhookSettings }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/discover': {
      $get: { input: {}; output: DiscoverSlider[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: DiscoverSlider[] }
        output: DiscoverSlider[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/discover/:sliderId': {
      $put: {
        input: { param: { sliderId: number } } & {
          json: { title?: string | undefined; type?: number | undefined; data?: string | undefined }
        }
        output: DiscoverSlider
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { sliderId: number } }
        output: DiscoverSlider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/discover/add': {
      $post: {
        input: {
          json: { title?: string | undefined; type?: number | undefined; data?: string | undefined }
        }
        output: DiscoverSlider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/discover/reset': {
      $get: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/settings/about': {
      $get: {
        input: {}
        output: {
          version?: string | undefined
          totalRequests?: number | undefined
          totalMediaItems?: number | undefined
          tz?: (string | null) | undefined
          appDataPath?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/auth/me': { $get: { input: {}; output: User; outputFormat: 'json'; status: 200 } } } & {
    '/auth/plex': {
      $post: {
        input: { json: { authToken: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/local': {
      $post: {
        input: { json: { email: string; password: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/logout': {
      $post: {
        input: {}
        output: { status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/reset-password': {
      $post: {
        input: { json: { email: string } }
        output: { status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/reset-password/:guid': {
      $post: {
        input: { param: { guid: string } } & { json: { password: string } }
        output: { status?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user': {
      $get: {
        input: {
          query: {
            take?: (number | null) | undefined
            skip?: (number | null) | undefined
            sort?: 'created' | 'updated' | 'requests' | 'displayname' | undefined
          }
        }
        output: { pageInfo?: PageInfo | undefined; results?: User[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            email?: string | undefined
            username?: string | undefined
            permissions?: number | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: { ids?: number[] | undefined; permissions?: number | undefined } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/import-from-plex': {
      $post: {
        input: { json: { plexIds?: string[] | undefined } }
        output: User[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/user/registerPushSubscription': {
      $post: {
        input: {
          json: { endpoint: string; auth: string; p256dh: string; userAgent?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/user/:userId/pushSubscriptions': {
      $get: {
        input: { param: { userId: number } }
        output: {
          endpoint?: string | undefined
          p256dh?: string | undefined
          auth?: string | undefined
          userAgent?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/pushSubscription/:endpoint': {
      $get: {
        input: { param: { userId: number; endpoint: string } }
        output: {
          endpoint?: string | undefined
          p256dh?: string | undefined
          auth?: string | undefined
          userAgent?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: number; endpoint: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/user/:userId': {
      $get: {
        input: { param: { userId: number } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: number } } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: number } }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/requests': {
      $get: {
        input: { param: { userId: number } } & {
          query: { take?: (number | null) | undefined; skip?: (number | null) | undefined }
        }
        output: { pageInfo?: PageInfo | undefined; results?: MediaRequest[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/quota': {
      $get: {
        input: { param: { userId: number } }
        output: {
          movie?:
            | {
                days?: number | undefined
                limit?: number | undefined
                used?: number | undefined
                remaining?: number | undefined
                restricted?: boolean | undefined
              }
            | undefined
          tv?:
            | {
                days?: number | undefined
                limit?: number | undefined
                used?: number | undefined
                remaining?: number | undefined
                restricted?: boolean | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/watchlist': {
      $get: {
        input: { param: { userId: number } } & { query: { page?: number | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?:
            | {
                tmdbId?: number | undefined
                ratingKey?: string | undefined
                type?: string | undefined
                title?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/settings/main': {
      $get: {
        input: { param: { userId: number } }
        output: { username?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: number } } & { json: { username?: (string | null) | undefined } }
        output: { username?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/settings/password': {
      $get: {
        input: { param: { userId: number } }
        output: { hasPassword?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: number } } & {
          json: { currentPassword?: (string | null) | undefined; newPassword: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/user/:userId/settings/notifications': {
      $get: {
        input: { param: { userId: number } }
        output: UserSettingsNotifications
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: number } } & { json: UserSettingsNotifications }
        output: UserSettingsNotifications
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/settings/permissions': {
      $get: {
        input: { param: { userId: number } }
        output: { permissions?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { userId: number } } & { json: { permissions: number } }
        output: { permissions?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/watch_data': {
      $get: {
        input: { param: { userId: number } }
        output: { recentlyWatched?: MediaInfo[] | undefined; playCount?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search': {
      $get: {
        input: {
          query: { query: string; page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: (MovieResult | TvResult | PersonResult)[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/keyword': {
      $get: {
        input: { query: { query: string; page?: number | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: Keyword[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/company': {
      $get: {
        input: { query: { query: string; page?: number | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: Company[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/movies': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            language?: string | undefined
            genre?: string | undefined
            studio?: number | undefined
            keywords?: string | undefined
            sortBy?: string | undefined
            primaryReleaseDateGte?: string | undefined
            primaryReleaseDateLte?: string | undefined
            withRuntimeGte?: number | undefined
            withRuntimeLte?: number | undefined
            voteAverageGte?: number | undefined
            voteAverageLte?: number | undefined
            voteCountGte?: number | undefined
            voteCountLte?: number | undefined
            watchRegion?: string | undefined
            watchProviders?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/movies/genre/:genreId': {
      $get: {
        input: { param: { genreId: string } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          genre?: Genre | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/movies/language/:language': {
      $get: {
        input: { param: { language: string } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          language?: SpokenLanguage | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/movies/studio/:studioId': {
      $get: {
        input: { param: { studioId: string } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          studio?: ProductionCompany | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/movies/upcoming': {
      $get: {
        input: { query: { page?: number | undefined; language?: string | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/tv': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            language?: string | undefined
            genre?: string | undefined
            network?: number | undefined
            keywords?: string | undefined
            sortBy?: string | undefined
            firstAirDateGte?: string | undefined
            firstAirDateLte?: string | undefined
            withRuntimeGte?: number | undefined
            withRuntimeLte?: number | undefined
            voteAverageGte?: number | undefined
            voteAverageLte?: number | undefined
            voteCountGte?: number | undefined
            voteCountLte?: number | undefined
            watchRegion?: string | undefined
            watchProviders?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/tv/language/:language': {
      $get: {
        input: { param: { language: string } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          language?: SpokenLanguage | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/tv/genre/:genreId': {
      $get: {
        input: { param: { genreId: string } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          genre?: Genre | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/tv/network/:networkId': {
      $get: {
        input: { param: { networkId: string } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          network?: Network | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/tv/upcoming': {
      $get: {
        input: { query: { page?: number | undefined; language?: string | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/trending': {
      $get: {
        input: { query: { page?: number | undefined; language?: string | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: (MovieResult | TvResult | PersonResult)[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/keyword/:keywordId/movies': {
      $get: {
        input: { param: { keywordId: number } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/genreslider/movie': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: {
          id?: number | undefined
          backdrops?: string[] | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/genreslider/tv': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: {
          id?: number | undefined
          backdrops?: string[] | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/discover/watchlist': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?:
            | {
                tmdbId?: number | undefined
                ratingKey?: string | undefined
                type?: string | undefined
                title?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/request': {
      $get: {
        input: {
          query: {
            take?: (number | null) | undefined
            skip?: (number | null) | undefined
            filter?:
              | 'all'
              | 'approved'
              | 'available'
              | 'pending'
              | 'processing'
              | 'unavailable'
              | 'failed'
              | 'deleted'
              | 'completed'
              | undefined
            sort?: 'added' | 'modified' | undefined
            requestedBy?: (number | null) | undefined
          }
        }
        output: { pageInfo?: PageInfo | undefined; results?: MediaRequest[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            mediaType: 'movie' | 'tv'
            mediaId: number
            tvdbId?: number | undefined
            seasons?: number[] | 'all' | undefined
            is4k?: boolean | undefined
            serverId?: number | undefined
            profileId?: number | undefined
            rootFolder?: string | undefined
            languageProfileId?: number | undefined
            userId?: (number | null) | undefined
          }
        }
        output: MediaRequest
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/request/count': {
      $get: {
        input: {}
        output: {
          total?: number | undefined
          movie?: number | undefined
          tv?: number | undefined
          pending?: number | undefined
          approved?: number | undefined
          declined?: number | undefined
          processing?: number | undefined
          available?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/request/:requestId': {
      $get: {
        input: { param: { requestId: string } }
        output: MediaRequest
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { requestId: string } } & {
          json: {
            mediaType: 'movie' | 'tv'
            seasons?: number[] | undefined
            is4k?: boolean | undefined
            serverId?: number | undefined
            profileId?: number | undefined
            rootFolder?: string | undefined
            languageProfileId?: number | undefined
            userId?: (number | null) | undefined
          }
        }
        output: MediaRequest
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { requestId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/request/:requestId/retry': {
      $post: {
        input: { param: { requestId: string } }
        output: MediaRequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/request/:requestId/:status': {
      $post: {
        input: { param: { requestId: string; status: 'approve' | 'decline' } }
        output: MediaRequest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/movie/:movieId': {
      $get: {
        input: { param: { movieId: number } } & { query: { language?: string | undefined } }
        output: MovieDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/movie/:movieId/recommendations': {
      $get: {
        input: { param: { movieId: number } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/movie/:movieId/similar': {
      $get: {
        input: { param: { movieId: number } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: MovieResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/movie/:movieId/ratings': {
      $get: {
        input: { param: { movieId: number } }
        output: {
          title?: string | undefined
          year?: number | undefined
          url?: string | undefined
          criticsScore?: number | undefined
          criticsRating?: 'Rotten' | 'Fresh' | 'Certified Fresh' | undefined
          audienceScore?: number | undefined
          audienceRating?: 'Spilled' | 'Upright' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/movie/:movieId/ratingscombined': {
      $get: {
        input: { param: { movieId: number } }
        output: {
          rt?:
            | {
                title?: string | undefined
                year?: number | undefined
                url?: string | undefined
                criticsScore?: number | undefined
                criticsRating?: 'Rotten' | 'Fresh' | 'Certified Fresh' | undefined
                audienceScore?: number | undefined
                audienceRating?: 'Spilled' | 'Upright' | undefined
              }
            | undefined
          imdb?:
            | {
                title?: string | undefined
                url?: string | undefined
                criticsScore?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tv/:tvId': {
      $get: {
        input: { param: { tvId: number } } & { query: { language?: string | undefined } }
        output: TvDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tv/:tvId/season/:seasonId': {
      $get: {
        input: { param: { tvId: number; seasonId: number } } & {
          query: { language?: string | undefined }
        }
        output: Season
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tv/:tvId/recommendations': {
      $get: {
        input: { param: { tvId: number } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tv/:tvId/similar': {
      $get: {
        input: { param: { tvId: number } } & {
          query: { page?: number | undefined; language?: string | undefined }
        }
        output: {
          page?: number | undefined
          totalPages?: number | undefined
          totalResults?: number | undefined
          results?: TvResult[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tv/:tvId/ratings': {
      $get: {
        input: { param: { tvId: number } }
        output: {
          title?: string | undefined
          year?: number | undefined
          url?: string | undefined
          criticsScore?: number | undefined
          criticsRating?: 'Rotten' | 'Fresh' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/person/:personId': {
      $get: {
        input: { param: { personId: number } } & { query: { language?: string | undefined } }
        output: PersonDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/person/:personId/combined_credits': {
      $get: {
        input: { param: { personId: number } } & { query: { language?: string | undefined } }
        output: {
          cast?: CreditCast[] | undefined
          crew?: CreditCrew[] | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media': {
      $get: {
        input: {
          query: {
            take?: (number | null) | undefined
            skip?: (number | null) | undefined
            filter?:
              | 'all'
              | 'available'
              | 'partial'
              | 'allavailable'
              | 'processing'
              | 'pending'
              | 'deleted'
              | undefined
            sort?: 'added' | 'modified' | 'mediaAdded' | undefined
          }
        }
        output: { pageInfo?: PageInfo | undefined; results?: MediaInfo[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media/:mediaId': {
      $delete: {
        input: { param: { mediaId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/media/:mediaId/:status': {
      $post: {
        input: {
          param: {
            mediaId: string
            status: 'available' | 'partial' | 'processing' | 'pending' | 'unknown' | 'deleted'
          }
        } & { json: { is4k?: boolean | undefined } }
        output: MediaInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media/:mediaId/watch_data': {
      $get: {
        input: { param: { mediaId: string } }
        output: {
          data?:
            | {
                playCount7Days?: number | undefined
                playCount30Days?: number | undefined
                playCount?: number | undefined
                users?: User[] | undefined
              }
            | undefined
          data4k?:
            | {
                playCount7Days?: number | undefined
                playCount30Days?: number | undefined
                playCount?: number | undefined
                users?: User[] | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/collection/:collectionId': {
      $get: {
        input: { param: { collectionId: number } } & { query: { language?: string | undefined } }
        output: Collection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service/radarr': {
      $get: { input: {}; output: RadarrSettings[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service/radarr/:radarrId': {
      $get: {
        input: { param: { radarrId: number } }
        output: { server?: RadarrSettings | undefined; profiles?: ServiceProfile | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service/sonarr': {
      $get: { input: {}; output: SonarrSettings[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service/sonarr/:sonarrId': {
      $get: {
        input: { param: { sonarrId: number } }
        output: { server?: SonarrSettings | undefined; profiles?: ServiceProfile | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service/sonarr/lookup/:tmdbId': {
      $get: {
        input: { param: { tmdbId: number } }
        output: SonarrSeries[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/regions': {
      $get: {
        input: {}
        output: { iso_3166_1?: string | undefined; english_name?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/languages': {
      $get: {
        input: {}
        output: {
          iso_639_1?: string | undefined
          english_name?: string | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studio/:studioId': {
      $get: {
        input: { param: { studioId: number } }
        output: ProductionCompany
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/network/:networkId': {
      $get: {
        input: { param: { networkId: number } }
        output: ProductionCompany
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/genres/movie': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: { id?: number | undefined; name?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/genres/tv': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: { id?: number | undefined; name?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/backdrops': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/issue': {
      $get: {
        input: {
          query: {
            take?: (number | null) | undefined
            skip?: (number | null) | undefined
            sort?: 'added' | 'modified' | undefined
            filter?: 'all' | 'open' | 'resolved' | undefined
            requestedBy?: (number | null) | undefined
          }
        }
        output: { pageInfo?: PageInfo | undefined; results?: Issue[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            issueType?: number | undefined
            message?: string | undefined
            mediaId?: number | undefined
          }
        }
        output: Issue
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/issue/count': {
      $get: {
        input: {}
        output: {
          total?: number | undefined
          video?: number | undefined
          audio?: number | undefined
          subtitles?: number | undefined
          others?: number | undefined
          open?: number | undefined
          closed?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/issue/:issueId': {
      $get: {
        input: { param: { issueId: number } }
        output: Issue
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { issueId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/issue/:issueId/comment': {
      $post: {
        input: { param: { issueId: number } } & { json: { message: string } }
        output: Issue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/issueComment/:commentId': {
      $get: {
        input: { param: { commentId: string } }
        output: IssueComment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { commentId: string } } & { json: { message?: string | undefined } }
        output: IssueComment
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { commentId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/issue/:issueId/:status': {
      $post: {
        input: { param: { issueId: string; status: 'open' | 'resolved' } }
        output: Issue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/keyword/:keywordId': {
      $get: {
        input: { param: { keywordId: number } }
        output: Keyword
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchproviders/regions': {
      $get: { input: {}; output: WatchProviderRegion[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/watchproviders/movies': {
      $get: {
        input: { query: { watchRegion: string } }
        output: WatchProviderDetails[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchproviders/tv': {
      $get: {
        input: { query: { watchRegion: string } }
        output: WatchProviderDetails[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
