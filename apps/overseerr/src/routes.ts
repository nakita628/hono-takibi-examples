import { createRoute, z } from '@hono/zod-openapi'

type UserType = {
  id: number
  email: string
  username?: string
  plexToken?: string
  plexUsername?: string
  userType?: number
  permissions?: number
  avatar?: string
  createdAt: string
  updatedAt: string
  requestCount?: number
}

const MediaInfoSchema: z.ZodType<MediaInfoType> = z
  .lazy(() =>
    z
      .object({
        id: z.number().exactOptional().openapi({ readOnly: true }),
        tmdbId: z.number().exactOptional().openapi({ readOnly: true }),
        tvdbId: z.number().nullable().exactOptional().openapi({ readOnly: true }),
        status: z
          .number()
          .exactOptional()
          .openapi({
            example: 0,
            description:
              'Availability of the media. 1 = `UNKNOWN`, 2 = `PENDING`, 3 = `PROCESSING`, 4 = `PARTIALLY_AVAILABLE`, 5 = `AVAILABLE`, 6 = `DELETED`',
          }),
        requests: z.array(MediaRequestSchema).exactOptional().openapi({ readOnly: true }),
        createdAt: z
          .string()
          .exactOptional()
          .openapi({ example: '2020-09-12T10:00:27.000Z', readOnly: true }),
        updatedAt: z
          .string()
          .exactOptional()
          .openapi({ example: '2020-09-12T10:00:27.000Z', readOnly: true }),
      })
      .openapi({ required: [] }),
  )
  .openapi('MediaInfo')

const UserSchema: z.ZodType<UserType> = z
  .object({
    id: z.int().openapi({ example: 1, readOnly: true }),
    email: z.string().openapi({ example: 'hey@itsme.com', readOnly: true }),
    username: z.string().exactOptional(),
    plexToken: z.string().exactOptional().openapi({ readOnly: true }),
    plexUsername: z.string().exactOptional().openapi({ readOnly: true }),
    userType: z.int().exactOptional().openapi({ example: 1, readOnly: true }),
    permissions: z.number().exactOptional().openapi({ example: 0 }),
    avatar: z.string().exactOptional().openapi({ readOnly: true }),
    createdAt: z.string().openapi({ example: '2020-09-02T05:02:23.000Z', readOnly: true }),
    updatedAt: z.string().openapi({ example: '2020-09-02T05:02:23.000Z', readOnly: true }),
    requestCount: z.number().exactOptional().openapi({ example: 5, readOnly: true }),
  })
  .openapi({ required: ['id', 'email', 'createdAt', 'updatedAt'] })
  .openapi('User')

type MediaRequestType = {
  id: number
  status: number
  media?: z.infer<typeof MediaInfoSchema>
  createdAt?: string
  updatedAt?: string
  requestedBy?: z.infer<typeof UserSchema>
  modifiedBy?: z.infer<typeof UserSchema> | (string | null)
  is4k?: boolean
  serverId?: number
  profileId?: number
  rootFolder?: string
}

const MediaRequestSchema: z.ZodType<MediaRequestType> = z
  .lazy(() =>
    z
      .object({
        id: z.number().openapi({ example: 123, readOnly: true }),
        status: z
          .number()
          .openapi({
            example: 0,
            description: 'Status of the request. 1 = PENDING APPROVAL, 2 = APPROVED, 3 = DECLINED',
            readOnly: true,
          }),
        media: MediaInfoSchema.exactOptional(),
        createdAt: z
          .string()
          .exactOptional()
          .openapi({ example: '2020-09-12T10:00:27.000Z', readOnly: true }),
        updatedAt: z
          .string()
          .exactOptional()
          .openapi({ example: '2020-09-12T10:00:27.000Z', readOnly: true }),
        requestedBy: UserSchema.exactOptional(),
        modifiedBy: z.union([UserSchema, z.string().nullable()]).exactOptional(),
        is4k: z.boolean().exactOptional().openapi({ example: false }),
        serverId: z.number().exactOptional(),
        profileId: z.number().exactOptional(),
        rootFolder: z.string().exactOptional(),
      })
      .openapi({ required: ['id', 'status'] }),
  )
  .openapi('MediaRequest')

type MediaInfoType = {
  id?: number
  tmdbId?: number
  tvdbId?: number | null
  status?: number
  requests?: z.infer<typeof MediaRequestSchema>[]
  createdAt?: string
  updatedAt?: string
}

const UserSettingsSchema = z
  .object({
    locale: z.string().exactOptional(),
    region: z.string().exactOptional(),
    originalLanguage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSettings')

const MainSettingsSchema = z
  .object({
    apiKey: z.string().exactOptional().openapi({ readOnly: true }),
    appLanguage: z.string().exactOptional().openapi({ example: 'en' }),
    applicationTitle: z.string().exactOptional().openapi({ example: 'Overseerr' }),
    applicationUrl: z.string().exactOptional().openapi({ example: 'https://os.example.com' }),
    trustProxy: z.boolean().exactOptional().openapi({ example: true }),
    csrfProtection: z.boolean().exactOptional().openapi({ example: false }),
    hideAvailable: z.boolean().exactOptional().openapi({ example: false }),
    partialRequestsEnabled: z.boolean().exactOptional().openapi({ example: false }),
    localLogin: z.boolean().exactOptional().openapi({ example: true }),
    newPlexLogin: z.boolean().exactOptional().openapi({ example: true }),
    defaultPermissions: z.number().exactOptional().openapi({ example: 32 }),
  })
  .openapi({ required: [] })
  .openapi('MainSettings')

const PlexLibrarySchema = z
  .object({
    id: z.string(),
    name: z.string().openapi({ example: 'Movies' }),
    enabled: z.boolean().openapi({ example: false }),
  })
  .openapi({ required: ['id', 'name', 'enabled'] })
  .openapi('PlexLibrary')

const PlexSettingsSchema = z
  .object({
    name: z.string().openapi({ example: 'Main Server', readOnly: true }),
    machineId: z.string().openapi({ example: '1234123412341234', readOnly: true }),
    ip: z.string().openapi({ example: '127.0.0.1' }),
    port: z.number().openapi({ example: 32400 }),
    useSsl: z.boolean().nullable().exactOptional(),
    libraries: z.array(PlexLibrarySchema).exactOptional().openapi({ readOnly: true }),
    webAppUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://app.plex.tv/desktop' }),
  })
  .openapi({ required: ['name', 'machineId', 'ip', 'port'] })
  .openapi('PlexSettings')

const PlexConnectionSchema = z
  .object({
    protocol: z.string().openapi({ example: 'https' }),
    address: z.string().openapi({ example: '127.0.0.1' }),
    port: z.number().openapi({ example: 32400 }),
    uri: z
      .string()
      .openapi({ example: 'https://127-0-0-1.2ab6ce1a093d465e910def96cf4e4799.plex.direct:32400' }),
    local: z.boolean().openapi({ example: true }),
    status: z.number().exactOptional().openapi({ example: 200 }),
    message: z.string().exactOptional().openapi({ example: 'OK' }),
  })
  .openapi({ required: ['protocol', 'address', 'port', 'uri', 'local'] })
  .openapi('PlexConnection')

const PlexDeviceSchema = z
  .object({
    name: z.string().openapi({ example: 'My Plex Server' }),
    product: z.string().openapi({ example: 'Plex Media Server' }),
    productVersion: z.string().openapi({ example: '1.21' }),
    platform: z.string().openapi({ example: 'Linux' }),
    platformVersion: z
      .string()
      .exactOptional()
      .openapi({ example: 'default/linux/amd64/17.1/systemd' }),
    device: z.string().openapi({ example: 'PC' }),
    clientIdentifier: z.string().openapi({ example: '85a943ce-a0cc-4d2a-a4ec-f74f06e40feb' }),
    createdAt: z.string().openapi({ example: '2021-01-01T00:00:00.000Z' }),
    lastSeenAt: z.string().openapi({ example: '2021-01-01T00:00:00.000Z' }),
    provides: z.array(z.string().openapi({ example: 'server' })),
    owned: z.boolean().openapi({ example: true }),
    ownerID: z.string().exactOptional().openapi({ example: '12345' }),
    home: z.boolean().exactOptional().openapi({ example: true }),
    sourceTitle: z.string().exactOptional().openapi({ example: 'xyzabc' }),
    accessToken: z.string().exactOptional().openapi({ example: 'supersecretaccesstoken' }),
    publicAddress: z.string().exactOptional().openapi({ example: '127.0.0.1' }),
    httpsRequired: z.boolean().exactOptional().openapi({ example: true }),
    synced: z.boolean().exactOptional().openapi({ example: true }),
    relay: z.boolean().exactOptional().openapi({ example: true }),
    dnsRebindingProtection: z.boolean().exactOptional().openapi({ example: false }),
    natLoopbackSupported: z.boolean().exactOptional().openapi({ example: false }),
    publicAddressMatches: z.boolean().exactOptional().openapi({ example: false }),
    presence: z.boolean().exactOptional().openapi({ example: true }),
    connection: z.array(PlexConnectionSchema),
  })
  .openapi({
    required: [
      'name',
      'product',
      'productVersion',
      'platform',
      'device',
      'clientIdentifier',
      'createdAt',
      'lastSeenAt',
      'provides',
      'owned',
      'connection',
    ],
  })
  .openapi('PlexDevice')

const TautulliSettingsSchema = z
  .object({
    hostname: z.string().nullable().exactOptional().openapi({ example: 'tautulli.example.com' }),
    port: z.number().nullable().exactOptional().openapi({ example: 8181 }),
    useSsl: z.boolean().nullable().exactOptional(),
    apiKey: z.string().nullable().exactOptional(),
    externalUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TautulliSettings')

const RadarrSettingsSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 0, readOnly: true }),
    name: z.string().openapi({ example: 'Radarr Main' }),
    hostname: z.string().openapi({ example: '127.0.0.1' }),
    port: z.number().openapi({ example: 7878 }),
    apiKey: z.string().openapi({ example: 'exampleapikey' }),
    useSsl: z.boolean().openapi({ example: false }),
    baseUrl: z.string().exactOptional(),
    activeProfileId: z.number().openapi({ example: 1 }),
    activeProfileName: z.string().openapi({ example: '720p/1080p' }),
    activeDirectory: z.string().openapi({ example: '/movies' }),
    is4k: z.boolean().openapi({ example: false }),
    minimumAvailability: z.string().openapi({ example: 'In Cinema' }),
    isDefault: z.boolean().openapi({ example: false }),
    externalUrl: z.string().exactOptional().openapi({ example: 'http://radarr.example.com' }),
    syncEnabled: z.boolean().exactOptional().openapi({ example: false }),
    preventSearch: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({
    required: [
      'name',
      'hostname',
      'port',
      'apiKey',
      'useSsl',
      'activeProfileId',
      'activeProfileName',
      'activeDirectory',
      'is4k',
      'minimumAvailability',
      'isDefault',
    ],
  })
  .openapi('RadarrSettings')

const SonarrSettingsSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 0, readOnly: true }),
    name: z.string().openapi({ example: 'Sonarr Main' }),
    hostname: z.string().openapi({ example: '127.0.0.1' }),
    port: z.number().openapi({ example: 8989 }),
    apiKey: z.string().openapi({ example: 'exampleapikey' }),
    useSsl: z.boolean().openapi({ example: false }),
    baseUrl: z.string().exactOptional(),
    activeProfileId: z.number().openapi({ example: 1 }),
    activeProfileName: z.string().openapi({ example: '720p/1080p' }),
    activeDirectory: z.string().openapi({ example: '/tv/' }),
    activeLanguageProfileId: z.number().exactOptional().openapi({ example: 1 }),
    activeAnimeProfileId: z.number().nullable().exactOptional(),
    activeAnimeLanguageProfileId: z.number().nullable().exactOptional(),
    activeAnimeProfileName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '720p/1080p' }),
    activeAnimeDirectory: z.string().nullable().exactOptional(),
    is4k: z.boolean().openapi({ example: false }),
    enableSeasonFolders: z.boolean().openapi({ example: false }),
    isDefault: z.boolean().openapi({ example: false }),
    externalUrl: z.string().exactOptional().openapi({ example: 'http://radarr.example.com' }),
    syncEnabled: z.boolean().exactOptional().openapi({ example: false }),
    preventSearch: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({
    required: [
      'name',
      'hostname',
      'port',
      'apiKey',
      'useSsl',
      'activeProfileId',
      'activeProfileName',
      'activeDirectory',
      'is4k',
      'enableSeasonFolders',
      'isDefault',
    ],
  })
  .openapi('SonarrSettings')

const ServarrTagSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    label: z.string().exactOptional().openapi({ example: 'A Label' }),
  })
  .openapi({ required: [] })
  .openapi('ServarrTag')

const PublicSettingsSchema = z
  .object({ initialized: z.boolean().exactOptional().openapi({ example: false }) })
  .openapi({ required: [] })
  .openapi('PublicSettings')

const MovieResultSchema = z
  .object({
    id: z.number().openapi({ example: 1234 }),
    mediaType: z.string(),
    popularity: z.number().exactOptional().openapi({ example: 10 }),
    posterPath: z.string().exactOptional(),
    backdropPath: z.string().exactOptional(),
    voteCount: z.number().exactOptional(),
    voteAverage: z.number().exactOptional(),
    genreIds: z.array(z.number()).exactOptional(),
    overview: z.string().exactOptional().openapi({ example: 'Overview of the movie' }),
    originalLanguage: z.string().exactOptional().openapi({ example: 'en' }),
    title: z.string().openapi({ example: 'Movie Title' }),
    originalTitle: z.string().exactOptional().openapi({ example: 'Original Movie Title' }),
    releaseDate: z.string().exactOptional(),
    adult: z.boolean().exactOptional().openapi({ example: false }),
    video: z.boolean().exactOptional().openapi({ example: false }),
    mediaInfo: MediaInfoSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'mediaType', 'title'] })
  .openapi('MovieResult')

const TvResultSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1234 }),
    mediaType: z.string().exactOptional(),
    popularity: z.number().exactOptional().openapi({ example: 10 }),
    posterPath: z.string().exactOptional(),
    backdropPath: z.string().exactOptional(),
    voteCount: z.number().exactOptional(),
    voteAverage: z.number().exactOptional(),
    genreIds: z.array(z.number()).exactOptional(),
    overview: z.string().exactOptional().openapi({ example: 'Overview of the movie' }),
    originalLanguage: z.string().exactOptional().openapi({ example: 'en' }),
    name: z.string().exactOptional().openapi({ example: 'TV Show Name' }),
    originalName: z.string().exactOptional().openapi({ example: 'Original TV Show Name' }),
    originCountry: z.array(z.string()).exactOptional(),
    firstAirDate: z.string().exactOptional(),
    mediaInfo: MediaInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TvResult')

const PersonResultSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 12345 }),
    profilePath: z.string().exactOptional(),
    adult: z.boolean().exactOptional().openapi({ example: false }),
    mediaType: z.string().default('person').exactOptional(),
    knownFor: z.array(z.xor([MovieResultSchema, TvResultSchema])).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonResult')

const GenreSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    name: z.string().exactOptional().openapi({ example: 'Adventure' }),
  })
  .openapi({ required: [] })
  .openapi('Genre')

const CompanySchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    logo_path: z.string().nullable().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Company')

const ProductionCompanySchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    logoPath: z.string().nullable().exactOptional(),
    originCountry: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductionCompany')

const NetworkSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    logoPath: z.string().nullable().exactOptional(),
    originCountry: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Network')

const RelatedVideoSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://www.youtube.com/watch?v=9qhL2_UxXM0/' }),
    key: z.string().exactOptional().openapi({ example: '9qhL2_UxXM0' }),
    name: z.string().exactOptional().openapi({ example: 'Trailer for some movie (1978)' }),
    size: z.number().exactOptional().openapi({ example: 1080 }),
    type: z
      .enum([
        'Clip',
        'Teaser',
        'Trailer',
        'Featurette',
        'Opening Credits',
        'Behind the Scenes',
        'Bloopers',
      ])
      .exactOptional()
      .openapi({ example: 'Trailer' }),
    site: z.literal('YouTube').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedVideo')

const SpokenLanguageSchema = z
  .object({
    englishName: z.string().nullable().exactOptional().openapi({ example: 'English' }),
    iso_639_1: z.string().exactOptional().openapi({ example: 'en' }),
    name: z.string().exactOptional().openapi({ example: 'English' }),
  })
  .openapi({ required: [] })
  .openapi('SpokenLanguage')

const CastSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 123 }),
    castId: z.number().exactOptional().openapi({ example: 1 }),
    character: z.string().exactOptional().openapi({ example: 'Some Character Name' }),
    creditId: z.string().exactOptional(),
    gender: z.number().exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Some Persons Name' }),
    order: z.number().exactOptional(),
    profilePath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Cast')

const CrewSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 123 }),
    creditId: z.string().exactOptional(),
    gender: z.number().exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Some Persons Name' }),
    job: z.string().exactOptional(),
    department: z.string().exactOptional(),
    profilePath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Crew')

const ExternalIdsSchema = z
  .object({
    facebookId: z.string().nullable().exactOptional(),
    freebaseId: z.string().nullable().exactOptional(),
    freebaseMid: z.string().nullable().exactOptional(),
    imdbId: z.string().nullable().exactOptional(),
    instagramId: z.string().nullable().exactOptional(),
    tvdbId: z.number().nullable().exactOptional(),
    tvrageId: z.number().nullable().exactOptional(),
    twitterId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalIds')

const WatchProviderDetailsSchema = z
  .object({
    displayPriority: z.number().exactOptional(),
    logoPath: z.string().exactOptional(),
    id: z.number().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WatchProviderDetails')

const WatchProvidersSchema = z
  .array(
    z
      .object({
        iso_3166_1: z.string().exactOptional(),
        link: z.string().exactOptional(),
        buy: z.array(WatchProviderDetailsSchema).exactOptional(),
        flatrate: z
          .unknown()
          .superRefine((val, ctx) => {
            if (Array.isArray(val)) {
              {
                const Schema = WatchProviderDetailsSchema
                for (let i = 0; i < val.length; i++) {
                  if (!Schema.safeParse(val[i]).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }
          })
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('WatchProviders')

const MovieDetailsSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 123, readOnly: true }),
    imdbId: z.string().exactOptional().openapi({ example: 'tt123' }),
    adult: z.boolean().exactOptional(),
    backdropPath: z.string().exactOptional(),
    posterPath: z.string().exactOptional(),
    budget: z.number().exactOptional().openapi({ example: 1000000 }),
    genres: z.array(GenreSchema).exactOptional(),
    homepage: z.string().exactOptional(),
    relatedVideos: z.array(RelatedVideoSchema).exactOptional(),
    originalLanguage: z.string().exactOptional(),
    originalTitle: z.string().exactOptional(),
    overview: z.string().exactOptional(),
    popularity: z.number().exactOptional(),
    productionCompanies: z.array(ProductionCompanySchema).exactOptional(),
    productionCountries: z
      .array(
        z
          .object({ iso_3166_1: z.string().exactOptional(), name: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    releaseDate: z.string().exactOptional(),
    releases: z
      .object({
        results: z
          .array(
            z
              .object({
                iso_3166_1: z.string().exactOptional().openapi({ example: 'US' }),
                rating: z.string().nullable().exactOptional(),
                release_dates: z
                  .array(
                    z
                      .object({
                        certification: z.string().exactOptional().openapi({ example: 'PG-13' }),
                        iso_639_1: z.string().nullable().exactOptional(),
                        note: z.string().nullable().exactOptional().openapi({ example: 'Blu ray' }),
                        release_date: z
                          .string()
                          .exactOptional()
                          .openapi({ example: '2017-07-12T00:00:00.000Z' }),
                        type: z.number().exactOptional().openapi({ example: 1 }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    revenue: z.number().nullable().exactOptional(),
    runtime: z.number().exactOptional(),
    spokenLanguages: z.array(SpokenLanguageSchema).exactOptional(),
    status: z.string().exactOptional(),
    tagline: z.string().exactOptional(),
    title: z.string().exactOptional(),
    video: z.boolean().exactOptional(),
    voteAverage: z.number().exactOptional(),
    voteCount: z.number().exactOptional(),
    credits: z
      .object({
        cast: z.array(CastSchema).exactOptional(),
        crew: z.array(CrewSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    collection: z
      .object({
        id: z.number().exactOptional().openapi({ example: 1 }),
        name: z.string().exactOptional().openapi({ example: 'A collection' }),
        posterPath: z.string().exactOptional(),
        backdropPath: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    externalIds: ExternalIdsSchema.exactOptional(),
    mediaInfo: MediaInfoSchema.exactOptional(),
    watchProviders: z.array(WatchProvidersSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieDetails')

const EpisodeSchema = z
  .object({
    id: z.number().exactOptional(),
    name: z.string().exactOptional(),
    airDate: z.string().nullable().exactOptional(),
    episodeNumber: z.number().exactOptional(),
    overview: z.string().exactOptional(),
    productionCode: z.string().exactOptional(),
    seasonNumber: z.number().exactOptional(),
    showId: z.number().exactOptional(),
    stillPath: z.string().nullable().exactOptional(),
    voteAverage: z.number().exactOptional(),
    voteCount: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Episode')

const SeasonSchema = z
  .object({
    id: z.number().exactOptional(),
    airDate: z.string().nullable().exactOptional(),
    episodeCount: z.number().exactOptional(),
    name: z.string().exactOptional(),
    overview: z.string().exactOptional(),
    posterPath: z.string().exactOptional(),
    seasonNumber: z.number().exactOptional(),
    episodes: z.array(EpisodeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const KeywordSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    name: z.string().exactOptional().openapi({ example: 'anime' }),
  })
  .openapi({ required: [] })
  .openapi('Keyword')

const TvDetailsSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 123 }),
    backdropPath: z.string().exactOptional(),
    posterPath: z.string().exactOptional(),
    contentRatings: z
      .object({
        results: z
          .array(
            z
              .object({
                iso_3166_1: z.string().exactOptional().openapi({ example: 'US' }),
                rating: z.string().exactOptional().openapi({ example: 'TV-14' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    createdBy: z
      .array(
        z
          .object({
            id: z.number().exactOptional(),
            name: z.string().exactOptional(),
            gender: z.number().exactOptional(),
            profilePath: z.string().nullable().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    episodeRunTime: z.array(z.number()).exactOptional(),
    firstAirDate: z.string().exactOptional(),
    genres: z.array(GenreSchema).exactOptional(),
    homepage: z.string().exactOptional(),
    inProduction: z.boolean().exactOptional(),
    languages: z.array(z.string()).exactOptional(),
    lastAirDate: z.string().exactOptional(),
    lastEpisodeToAir: EpisodeSchema.exactOptional(),
    name: z.string().exactOptional(),
    nextEpisodeToAir: EpisodeSchema.exactOptional(),
    networks: z.array(ProductionCompanySchema).exactOptional(),
    numberOfEpisodes: z.number().exactOptional(),
    numberOfSeason: z.number().exactOptional(),
    originCountry: z.array(z.string()).exactOptional(),
    originalLanguage: z.string().exactOptional(),
    originalName: z.string().exactOptional(),
    overview: z.string().exactOptional(),
    popularity: z.number().exactOptional(),
    productionCompanies: z.array(ProductionCompanySchema).exactOptional(),
    productionCountries: z
      .array(
        z
          .object({ iso_3166_1: z.string().exactOptional(), name: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    spokenLanguages: z.array(SpokenLanguageSchema).exactOptional(),
    seasons: z.array(SeasonSchema).exactOptional(),
    status: z.string().exactOptional(),
    tagline: z.string().exactOptional(),
    type: z.string().exactOptional(),
    voteAverage: z.number().exactOptional(),
    voteCount: z.number().exactOptional(),
    credits: z
      .object({
        cast: z.array(CastSchema).exactOptional(),
        crew: z.array(CrewSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    externalIds: ExternalIdsSchema.exactOptional(),
    keywords: z.array(KeywordSchema).exactOptional(),
    mediaInfo: MediaInfoSchema.exactOptional(),
    watchProviders: z.array(WatchProvidersSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TvDetails')

const ServiceProfileSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    name: z.string().exactOptional().openapi({ example: '720p/1080p' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceProfile')

const PageInfoSchema = z
  .object({
    page: z.number().exactOptional().openapi({ example: 1 }),
    pages: z.number().exactOptional().openapi({ example: 10 }),
    results: z.number().exactOptional().openapi({ example: 100 }),
  })
  .openapi({ required: [] })
  .openapi('PageInfo')

const DiscordSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({
        botUsername: z.string().exactOptional(),
        botAvatarUrl: z.string().exactOptional(),
        webhookUrl: z.string().exactOptional(),
        enableMentions: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DiscordSettings')

const SlackSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({ webhookUrl: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SlackSettings')

const WebPushSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('WebPushSettings')

const WebhookSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({
        webhookUrl: z.string().exactOptional(),
        authHeader: z.string().exactOptional(),
        jsonPayload: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('WebhookSettings')

const TelegramSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({
        botUsername: z.string().exactOptional(),
        botAPI: z.string().exactOptional(),
        chatId: z.string().exactOptional(),
        sendSilently: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TelegramSettings')

const PushbulletSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({
        accessToken: z.string().exactOptional(),
        channelTag: z.string().nullable().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PushbulletSettings')

const PushoverSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({
        accessToken: z.string().exactOptional(),
        userToken: z.string().exactOptional(),
        sound: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PushoverSettings')

const GotifySettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({ url: z.string().exactOptional(), token: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('GotifySettings')

const LunaSeaSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({ webhookUrl: z.string().exactOptional(), profileName: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('LunaSeaSettings')

const NotificationEmailSettingsSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ example: false }),
    types: z.number().exactOptional().openapi({ example: 2 }),
    options: z
      .object({
        emailFrom: z.string().exactOptional().openapi({ example: 'no-reply@example.com' }),
        senderName: z.string().exactOptional().openapi({ example: 'Overseerr' }),
        smtpHost: z.string().exactOptional().openapi({ example: '127.0.0.1' }),
        smtpPort: z.number().exactOptional().openapi({ example: 465 }),
        secure: z.boolean().exactOptional().openapi({ example: false }),
        ignoreTls: z.boolean().exactOptional().openapi({ example: false }),
        requireTls: z.boolean().exactOptional().openapi({ example: false }),
        authUser: z.string().nullable().exactOptional(),
        authPass: z.string().nullable().exactOptional(),
        allowSelfSigned: z.boolean().exactOptional().openapi({ example: false }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('NotificationEmailSettings')

const JobSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'job-name' }),
    type: z.enum(['process', 'command']).exactOptional(),
    interval: z.enum(['short', 'long', 'fixed']).exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'A Job Name' }),
    nextExecutionTime: z.string().exactOptional().openapi({ example: '2020-09-02T05:02:23.000Z' }),
    running: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('Job')

const PersonDetailsSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    name: z.string().exactOptional(),
    deathday: z.string().exactOptional(),
    knownForDepartment: z.string().exactOptional(),
    alsoKnownAs: z.array(z.string()).exactOptional(),
    gender: z.string().exactOptional(),
    biography: z.string().exactOptional(),
    popularity: z.string().exactOptional(),
    placeOfBirth: z.string().exactOptional(),
    profilePath: z.string().exactOptional(),
    adult: z.boolean().exactOptional(),
    imdbId: z.string().exactOptional(),
    homepage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonDetails')

const CreditCastSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    originalLanguage: z.string().exactOptional(),
    episodeCount: z.number().exactOptional(),
    overview: z.string().exactOptional(),
    originCountry: z.array(z.string()).exactOptional(),
    originalName: z.string().exactOptional(),
    voteCount: z.number().exactOptional(),
    name: z.string().exactOptional(),
    mediaType: z.string().exactOptional(),
    popularity: z.number().exactOptional(),
    creditId: z.string().exactOptional(),
    backdropPath: z.string().exactOptional(),
    firstAirDate: z.string().exactOptional(),
    voteAverage: z.number().exactOptional(),
    genreIds: z.array(z.number()).exactOptional(),
    posterPath: z.string().exactOptional(),
    originalTitle: z.string().exactOptional(),
    video: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    adult: z.boolean().exactOptional(),
    releaseDate: z.string().exactOptional(),
    character: z.string().exactOptional(),
    mediaInfo: MediaInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreditCast')

const CreditCrewSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    originalLanguage: z.string().exactOptional(),
    episodeCount: z.number().exactOptional(),
    overview: z.string().exactOptional(),
    originCountry: z.array(z.string()).exactOptional(),
    originalName: z.string().exactOptional(),
    voteCount: z.number().exactOptional(),
    name: z.string().exactOptional(),
    mediaType: z.string().exactOptional(),
    popularity: z.number().exactOptional(),
    creditId: z.string().exactOptional(),
    backdropPath: z.string().exactOptional(),
    firstAirDate: z.string().exactOptional(),
    voteAverage: z.number().exactOptional(),
    genreIds: z.array(z.number()).exactOptional(),
    posterPath: z.string().exactOptional(),
    originalTitle: z.string().exactOptional(),
    video: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
    adult: z.boolean().exactOptional(),
    releaseDate: z.string().exactOptional(),
    department: z.string().exactOptional(),
    job: z.string().exactOptional(),
    mediaInfo: MediaInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreditCrew')

const CollectionSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 123 }),
    name: z.string().exactOptional().openapi({ example: 'A Movie Collection' }),
    overview: z.string().exactOptional().openapi({ example: 'Overview of collection' }),
    posterPath: z.string().exactOptional(),
    backdropPath: z.string().exactOptional(),
    parts: z.array(MovieResultSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Collection')

const SonarrSeriesSchema = z
  .object({
    title: z.string().exactOptional().openapi({ example: 'COVID-25' }),
    sortTitle: z.string().exactOptional().openapi({ example: 'covid 25' }),
    seasonCount: z.number().exactOptional().openapi({ example: 1 }),
    status: z.string().exactOptional().openapi({ example: 'upcoming' }),
    overview: z
      .string()
      .exactOptional()
      .openapi({ example: 'The thread is picked up again by Marianne Schmidt which ...' }),
    network: z.string().exactOptional().openapi({ example: 'CBS' }),
    airTime: z.string().exactOptional().openapi({ example: '02:15' }),
    images: z
      .array(
        z
          .object({
            coverType: z.string().exactOptional().openapi({ example: 'banner' }),
            url: z
              .string()
              .exactOptional()
              .openapi({
                example:
                  '/sonarr/MediaCoverProxy/6467f05d9872726ad08cbf920e5fee4bf69198682260acab8eab5d3c2c958e92/5c8f116c6aa5c.jpg',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    remotePoster: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://artworks.thetvdb.com/banners/posters/5c8f116129983.jpg' }),
    seasons: z
      .array(
        z
          .object({
            seasonNumber: z.number().exactOptional().openapi({ example: 1 }),
            monitored: z.boolean().exactOptional().openapi({ example: true }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    year: z.number().exactOptional().openapi({ example: 2015 }),
    path: z.string().exactOptional(),
    profileId: z.number().exactOptional(),
    languageProfileId: z.number().exactOptional(),
    seasonFolder: z.boolean().exactOptional(),
    monitored: z.boolean().exactOptional(),
    useSceneNumbering: z.boolean().exactOptional(),
    runtime: z.number().exactOptional(),
    tvdbId: z.number().exactOptional().openapi({ example: 12345 }),
    tvRageId: z.number().exactOptional(),
    tvMazeId: z.number().exactOptional(),
    firstAired: z.string().exactOptional(),
    lastInfoSync: z.string().nullable().exactOptional(),
    seriesType: z.string().exactOptional(),
    cleanTitle: z.string().exactOptional(),
    imdbId: z.string().exactOptional(),
    titleSlug: z.string().exactOptional(),
    certification: z.string().exactOptional(),
    genres: z.array(z.string()).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    added: z.string().exactOptional(),
    ratings: z
      .array(
        z
          .object({ votes: z.number().exactOptional(), value: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    qualityProfileId: z.number().exactOptional(),
    id: z.number().nullable().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    addOptions: z
      .array(
        z
          .object({
            ignoreEpisodesWithFiles: z.boolean().nullable().exactOptional(),
            ignoreEpisodesWithoutFiles: z.boolean().nullable().exactOptional(),
            searchForMissingEpisodes: z.boolean().nullable().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SonarrSeries')

const NotificationAgentTypesSchema = z
  .object({
    discord: z.number().exactOptional(),
    email: z.number().exactOptional(),
    pushbullet: z.number().exactOptional(),
    pushover: z.number().exactOptional(),
    slack: z.number().exactOptional(),
    telegram: z.number().exactOptional(),
    webhook: z.number().exactOptional(),
    webpush: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationAgentTypes')

const UserSettingsNotificationsSchema = z
  .object({
    notificationTypes: NotificationAgentTypesSchema.exactOptional(),
    emailEnabled: z.boolean().exactOptional(),
    pgpKey: z.string().nullable().exactOptional(),
    discordEnabled: z.boolean().exactOptional(),
    discordEnabledTypes: z.number().nullable().exactOptional(),
    discordId: z.string().nullable().exactOptional(),
    pushbulletAccessToken: z.string().nullable().exactOptional(),
    pushoverApplicationToken: z.string().nullable().exactOptional(),
    pushoverUserKey: z.string().nullable().exactOptional(),
    pushoverSound: z.string().nullable().exactOptional(),
    telegramEnabled: z.boolean().exactOptional(),
    telegramBotUsername: z.string().nullable().exactOptional(),
    telegramChatId: z.string().nullable().exactOptional(),
    telegramSendSilently: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSettingsNotifications')

const IssueCommentSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    user: UserSchema.exactOptional(),
    message: z.string().exactOptional().openapi({ example: 'A comment' }),
  })
  .openapi({ required: [] })
  .openapi('IssueComment')

const IssueSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    issueType: z.number().exactOptional().openapi({ example: 1 }),
    media: MediaInfoSchema.exactOptional(),
    createdBy: UserSchema.exactOptional(),
    modifiedBy: UserSchema.exactOptional(),
    comments: z.array(IssueCommentSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Issue')

const DiscoverSliderSchema = z
  .object({
    id: z.number().exactOptional().openapi({ example: 1 }),
    type: z.number().openapi({ example: 1 }),
    title: z.string().nullable(),
    isBuiltIn: z.boolean().exactOptional(),
    enabled: z.boolean(),
    data: z.string().nullable().openapi({ example: '1234' }),
  })
  .openapi({ required: ['type', 'enabled', 'title', 'data'] })
  .openapi('DiscoverSlider')

const WatchProviderRegionSchema = z
  .object({
    iso_3166_1: z.string().exactOptional(),
    english_name: z.string().exactOptional(),
    native_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WatchProviderRegion')

const CookieAuthSecurityScheme = { type: 'apiKey', name: 'connect.sid', in: 'cookie' }

const ApiKeySecurityScheme = { type: 'apiKey', in: 'header', name: 'X-Api-Key' }

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['public'],
  summary: 'Get Overseerr status',
  description: 'Returns the current Overseerr status in a JSON object.',
  responses: {
    200: {
      description: 'Returned status',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.string().exactOptional().openapi({ example: '1.0.0' }),
              commitTag: z.string().exactOptional(),
              updateAvailable: z.boolean().exactOptional(),
              commitsBehind: z.number().exactOptional(),
              restartRequired: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [],
})

export const getStatusAppdataRoute = createRoute({
  method: 'get',
  path: '/status/appdata',
  tags: ['public'],
  summary: 'Get application data volume status',
  description:
    'For Docker installs, returns whether or not the volume mount was configured properly. Always returns true for non-Docker installs.',
  responses: {
    200: {
      description: 'Application data volume status and path',
      content: {
        'application/json': {
          schema: z
            .object({
              appData: z.boolean().exactOptional().openapi({ example: true }),
              appDataPath: z.string().exactOptional().openapi({ example: '/app/config' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [],
})

export const getSettingsMainRoute = createRoute({
  method: 'get',
  path: '/settings/main',
  tags: ['settings'],
  summary: 'Get main settings',
  description: 'Retrieves all main settings in a JSON object.',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MainSettingsSchema } } },
  },
})

export const postSettingsMainRoute = createRoute({
  method: 'post',
  path: '/settings/main',
  tags: ['settings'],
  summary: 'Update main settings',
  description: 'Updates main settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: MainSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: MainSettingsSchema } },
    },
  },
})

export const postSettingsMainRegenerateRoute = createRoute({
  method: 'post',
  path: '/settings/main/regenerate',
  tags: ['settings'],
  summary: 'Get main settings with newly-generated API key',
  description: 'Returns main settings in a JSON object, using the new API key.',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MainSettingsSchema } } },
  },
})

export const getSettingsPlexRoute = createRoute({
  method: 'get',
  path: '/settings/plex',
  tags: ['settings'],
  summary: 'Get Plex settings',
  description: 'Retrieves current Plex settings.',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PlexSettingsSchema } } },
  },
})

export const postSettingsPlexRoute = createRoute({
  method: 'post',
  path: '/settings/plex',
  tags: ['settings'],
  summary: 'Update Plex settings',
  description: 'Updates Plex settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: PlexSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were successfully updated',
      content: { 'application/json': { schema: PlexSettingsSchema } },
    },
  },
})

export const getSettingsPlexLibraryRoute = createRoute({
  method: 'get',
  path: '/settings/plex/library',
  tags: ['settings'],
  summary: 'Get Plex libraries',
  description: 'Returns a list of Plex libraries in a JSON array.',
  request: {
    query: z.object({
      sync: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sync',
            description: 'Syncs the current libraries with the current Plex server',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
      enable: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enable',
            explode: false,
            allowReserved: true,
            description:
              'Comma separated list of libraries to enable. Any libraries not passed will be disabled!',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Plex libraries returned',
      content: { 'application/json': { schema: z.array(PlexLibrarySchema) } },
    },
  },
})

export const getSettingsPlexSyncRoute = createRoute({
  method: 'get',
  path: '/settings/plex/sync',
  tags: ['settings'],
  summary: 'Get status of full Plex library scan',
  description: 'Returns scan progress in a JSON array.',
  responses: {
    200: {
      description: 'Status of Plex scan',
      content: {
        'application/json': {
          schema: z
            .object({
              running: z.boolean().exactOptional().openapi({ example: false }),
              progress: z.number().exactOptional().openapi({ example: 0 }),
              total: z.number().exactOptional().openapi({ example: 100 }),
              currentLibrary: PlexLibrarySchema.exactOptional(),
              libraries: z.array(PlexLibrarySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSettingsPlexSyncRoute = createRoute({
  method: 'post',
  path: '/settings/plex/sync',
  tags: ['settings'],
  summary: 'Start full Plex library scan',
  description: 'Runs a full Plex library scan and returns the progress in a JSON array.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cancel: z.boolean().exactOptional().openapi({ example: false }),
              start: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Status of Plex scan',
      content: {
        'application/json': {
          schema: z
            .object({
              running: z.boolean().exactOptional().openapi({ example: false }),
              progress: z.number().exactOptional().openapi({ example: 0 }),
              total: z.number().exactOptional().openapi({ example: 100 }),
              currentLibrary: PlexLibrarySchema.exactOptional(),
              libraries: z.array(PlexLibrarySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSettingsPlexDevicesServersRoute = createRoute({
  method: 'get',
  path: '/settings/plex/devices/servers',
  tags: ['settings'],
  summary: "Gets the user's available Plex servers",
  description: 'Returns a list of available Plex servers and their connectivity state',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(PlexDeviceSchema) } },
    },
  },
})

export const getSettingsPlexUsersRoute = createRoute({
  method: 'get',
  path: '/settings/plex/users',
  tags: ['settings', 'users'],
  summary: 'Get Plex users',
  description:
    'Returns a list of Plex users in a JSON array.\n\nRequires the `MANAGE_USERS` permission.\n',
  responses: {
    200: {
      description: 'Plex users',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.string().exactOptional(),
                title: z.string().exactOptional(),
                username: z.string().exactOptional(),
                email: z.string().exactOptional(),
                thumb: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getSettingsTautulliRoute = createRoute({
  method: 'get',
  path: '/settings/tautulli',
  tags: ['settings'],
  summary: 'Get Tautulli settings',
  description: 'Retrieves current Tautulli settings.',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TautulliSettingsSchema } } },
  },
})

export const postSettingsTautulliRoute = createRoute({
  method: 'post',
  path: '/settings/tautulli',
  tags: ['settings'],
  summary: 'Update Tautulli settings',
  description: 'Updates Tautulli settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: TautulliSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were successfully updated',
      content: { 'application/json': { schema: TautulliSettingsSchema } },
    },
  },
})

export const getSettingsRadarrRoute = createRoute({
  method: 'get',
  path: '/settings/radarr',
  tags: ['settings'],
  summary: 'Get Radarr settings',
  description: 'Returns all Radarr settings in a JSON array.',
  responses: {
    200: {
      description: 'Values were returned',
      content: { 'application/json': { schema: z.array(RadarrSettingsSchema) } },
    },
  },
})

export const postSettingsRadarrRoute = createRoute({
  method: 'post',
  path: '/settings/radarr',
  tags: ['settings'],
  summary: 'Create Radarr instance',
  description: 'Creates a new Radarr instance from the request body.',
  request: {
    body: { content: { 'application/json': { schema: RadarrSettingsSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'New Radarr instance created',
      content: { 'application/json': { schema: RadarrSettingsSchema } },
    },
  },
})

export const postSettingsRadarrTestRoute = createRoute({
  method: 'post',
  path: '/settings/radarr/test',
  tags: ['settings'],
  summary: 'Test Radarr configuration',
  description:
    'Tests if the Radarr configuration is valid. Returns profiles and root folders on success.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hostname: z.string().openapi({ example: '127.0.0.1' }),
              port: z.number().openapi({ example: 7878 }),
              apiKey: z.string().openapi({ example: 'yourapikey' }),
              useSsl: z.boolean().openapi({ example: false }),
              baseUrl: z.string().exactOptional(),
            })
            .openapi({ required: ['hostname', 'port', 'apiKey', 'useSsl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Succesfully connected to Radarr instance',
      content: {
        'application/json': {
          schema: z
            .object({ profiles: z.array(ServiceProfileSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSettingsRadarrRadarrIdRoute = createRoute({
  method: 'put',
  path: '/settings/radarr/{radarrId}',
  tags: ['settings'],
  summary: 'Update Radarr instance',
  description: 'Updates an existing Radarr instance with the provided values.',
  request: {
    params: z.object({
      radarrId: z
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
            in: 'path',
            name: 'radarrId',
            required: true,
            schema: { type: 'integer' },
            description: 'Radarr instance ID',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RadarrSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Radarr instance updated',
      content: { 'application/json': { schema: RadarrSettingsSchema } },
    },
  },
})

export const deleteSettingsRadarrRadarrIdRoute = createRoute({
  method: 'delete',
  path: '/settings/radarr/{radarrId}',
  tags: ['settings'],
  summary: 'Delete Radarr instance',
  description: 'Deletes an existing Radarr instance based on the radarrId parameter.',
  request: {
    params: z.object({
      radarrId: z
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
            in: 'path',
            name: 'radarrId',
            required: true,
            schema: { type: 'integer' },
            description: 'Radarr instance ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Radarr instance updated',
      content: { 'application/json': { schema: RadarrSettingsSchema } },
    },
  },
})

export const getSettingsRadarrRadarrIdProfilesRoute = createRoute({
  method: 'get',
  path: '/settings/radarr/{radarrId}/profiles',
  tags: ['settings'],
  summary: 'Get available Radarr profiles',
  description:
    'Returns a list of profiles available on the Radarr server instance in a JSON array.',
  request: {
    params: z.object({
      radarrId: z
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
            in: 'path',
            name: 'radarrId',
            required: true,
            schema: { type: 'integer' },
            description: 'Radarr instance ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned list of profiles',
      content: { 'application/json': { schema: z.array(ServiceProfileSchema) } },
    },
  },
})

export const getSettingsSonarrRoute = createRoute({
  method: 'get',
  path: '/settings/sonarr',
  tags: ['settings'],
  summary: 'Get Sonarr settings',
  description: 'Returns all Sonarr settings in a JSON array.',
  responses: {
    200: {
      description: 'Values were returned',
      content: { 'application/json': { schema: z.array(SonarrSettingsSchema) } },
    },
  },
})

export const postSettingsSonarrRoute = createRoute({
  method: 'post',
  path: '/settings/sonarr',
  tags: ['settings'],
  summary: 'Create Sonarr instance',
  description: 'Creates a new Sonarr instance from the request body.',
  request: {
    body: { content: { 'application/json': { schema: SonarrSettingsSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'New Sonarr instance created',
      content: { 'application/json': { schema: SonarrSettingsSchema } },
    },
  },
})

export const postSettingsSonarrTestRoute = createRoute({
  method: 'post',
  path: '/settings/sonarr/test',
  tags: ['settings'],
  summary: 'Test Sonarr configuration',
  description:
    'Tests if the Sonarr configuration is valid. Returns profiles and root folders on success.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hostname: z.string().openapi({ example: '127.0.0.1' }),
              port: z.number().openapi({ example: 8989 }),
              apiKey: z.string().openapi({ example: 'yourapikey' }),
              useSsl: z.boolean().openapi({ example: false }),
              baseUrl: z.string().exactOptional(),
            })
            .openapi({ required: ['hostname', 'port', 'apiKey', 'useSsl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Succesfully connected to Sonarr instance',
      content: {
        'application/json': {
          schema: z
            .object({ profiles: z.array(ServiceProfileSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSettingsSonarrSonarrIdRoute = createRoute({
  method: 'put',
  path: '/settings/sonarr/{sonarrId}',
  tags: ['settings'],
  summary: 'Update Sonarr instance',
  description: 'Updates an existing Sonarr instance with the provided values.',
  request: {
    params: z.object({
      sonarrId: z
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
            in: 'path',
            name: 'sonarrId',
            required: true,
            schema: { type: 'integer' },
            description: 'Sonarr instance ID',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SonarrSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Sonarr instance updated',
      content: { 'application/json': { schema: SonarrSettingsSchema } },
    },
  },
})

export const deleteSettingsSonarrSonarrIdRoute = createRoute({
  method: 'delete',
  path: '/settings/sonarr/{sonarrId}',
  tags: ['settings'],
  summary: 'Delete Sonarr instance',
  description: 'Deletes an existing Sonarr instance based on the sonarrId parameter.',
  request: {
    params: z.object({
      sonarrId: z
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
            in: 'path',
            name: 'sonarrId',
            required: true,
            schema: { type: 'integer' },
            description: 'Sonarr instance ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sonarr instance updated',
      content: { 'application/json': { schema: SonarrSettingsSchema } },
    },
  },
})

export const getSettingsPublicRoute = createRoute({
  method: 'get',
  path: '/settings/public',
  tags: ['settings'],
  summary: 'Get public settings',
  description:
    'Returns settings that are not protected or sensitive. Mainly used to determine if the application has been configured for the first time.',
  responses: {
    200: {
      description: 'Public settings returned',
      content: { 'application/json': { schema: PublicSettingsSchema } },
    },
  },
  security: [],
})

export const postSettingsInitializeRoute = createRoute({
  method: 'post',
  path: '/settings/initialize',
  tags: ['settings'],
  summary: 'Initialize application',
  description:
    'Sets the app as initialized, allowing the user to navigate to pages other than the setup page.',
  responses: {
    200: {
      description: 'Public settings returned',
      content: { 'application/json': { schema: PublicSettingsSchema } },
    },
  },
})

export const getSettingsJobsRoute = createRoute({
  method: 'get',
  path: '/settings/jobs',
  tags: ['settings'],
  summary: 'Get scheduled jobs',
  description:
    'Returns list of all scheduled jobs and details about their next execution time in a JSON array.',
  responses: {
    200: {
      description: 'Scheduled jobs returned',
      content: { 'application/json': { schema: z.array(JobSchema) } },
    },
  },
})

export const postSettingsJobsJobIdRunRoute = createRoute({
  method: 'post',
  path: '/settings/jobs/{jobId}/run',
  tags: ['settings'],
  summary: 'Invoke a specific job',
  description: 'Invokes a specific job to run. Will return the new job status in JSON format.',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'jobId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invoked job returned',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
})

export const postSettingsJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/settings/jobs/{jobId}/cancel',
  tags: ['settings'],
  summary: 'Cancel a specific job',
  description: 'Cancels a specific job. Will return the new job status in JSON format.',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'jobId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Canceled job returned',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
})

export const postSettingsJobsJobIdScheduleRoute = createRoute({
  method: 'post',
  path: '/settings/jobs/{jobId}/schedule',
  tags: ['settings'],
  summary: 'Modify job schedule',
  description:
    'Re-registers the job with the schedule specified. Will return the job in JSON format.',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'jobId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ schedule: z.string().exactOptional().openapi({ example: '0 */5 * * * *' }) })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Rescheduled job', content: { 'application/json': { schema: JobSchema } } },
  },
})

export const getSettingsCacheRoute = createRoute({
  method: 'get',
  path: '/settings/cache',
  tags: ['settings'],
  summary: 'Get a list of active caches',
  description: 'Retrieves a list of all active caches and their current stats.',
  responses: {
    200: {
      description: 'Caches returned',
      content: {
        'application/json': {
          schema: z
            .object({
              imageCache: z
                .object({
                  tmdb: z
                    .object({
                      size: z.number().exactOptional().openapi({ example: 123456 }),
                      imageCount: z.number().exactOptional().openapi({ example: 123 }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              apiCaches: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ example: 'cache-id' }),
                      name: z.string().exactOptional().openapi({ example: 'cache name' }),
                      stats: z
                        .object({
                          hits: z.number().exactOptional(),
                          misses: z.number().exactOptional(),
                          keys: z.number().exactOptional(),
                          ksize: z.number().exactOptional(),
                          vsize: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSettingsCacheCacheIdFlushRoute = createRoute({
  method: 'post',
  path: '/settings/cache/{cacheId}/flush',
  tags: ['settings'],
  summary: 'Flush a specific cache',
  description: 'Flushes all data from the cache ID provided',
  request: {
    params: z.object({
      cacheId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cacheId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Flushed cache' } },
})

export const getSettingsLogsRoute = createRoute({
  method: 'get',
  path: '/settings/logs',
  tags: ['settings'],
  summary: 'Returns logs',
  description: 'Returns list of all log items and details',
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'take',
            schema: { type: 'number', nullable: true, example: 25 },
            required: false,
          },
          example: 25,
        }),
      skip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skip',
            schema: { type: 'number', nullable: true, example: 0 },
            required: false,
          },
          example: 0,
        }),
      filter: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['debug', 'info', 'warn', 'error']).nullable(),
      )
        .default('debug')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            schema: {
              type: 'string',
              nullable: true,
              enum: ['debug', 'info', 'warn', 'error'],
              default: 'debug',
            },
            required: false,
          },
        }),
      search: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string', nullable: true, example: 'plex' },
            required: false,
          },
          example: 'plex',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Server log returned',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                label: z.string().exactOptional().openapi({ example: 'server' }),
                level: z.string().exactOptional().openapi({ example: 'info' }),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'Server ready on port 5055' }),
                timestamp: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '2020-12-15T16:20:00.069Z' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getSettingsNotificationsEmailRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/email',
  tags: ['settings'],
  summary: 'Get email notification settings',
  description: 'Returns current email notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned email settings',
      content: { 'application/json': { schema: NotificationEmailSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsEmailRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/email',
  tags: ['settings'],
  summary: 'Update email notification settings',
  description: 'Updates email notification settings with provided values',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationEmailSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: NotificationEmailSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsEmailTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/email/test',
  tags: ['settings'],
  summary: 'Test email settings',
  description: 'Sends a test notification to the email agent.',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationEmailSettingsSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsDiscordRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/discord',
  tags: ['settings'],
  summary: 'Get Discord notification settings',
  description: 'Returns current Discord notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned Discord settings',
      content: { 'application/json': { schema: DiscordSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsDiscordRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/discord',
  tags: ['settings'],
  summary: 'Update Discord notification settings',
  description: 'Updates Discord notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: DiscordSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: DiscordSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsDiscordTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/discord/test',
  tags: ['settings'],
  summary: 'Test Discord settings',
  description: 'Sends a test notification to the Discord agent.',
  request: {
    body: { content: { 'application/json': { schema: DiscordSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsLunaseaRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/lunasea',
  tags: ['settings'],
  summary: 'Get LunaSea notification settings',
  description: 'Returns current LunaSea notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned LunaSea settings',
      content: { 'application/json': { schema: LunaSeaSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsLunaseaRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/lunasea',
  tags: ['settings'],
  summary: 'Update LunaSea notification settings',
  description: 'Updates LunaSea notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: LunaSeaSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: LunaSeaSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsLunaseaTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/lunasea/test',
  tags: ['settings'],
  summary: 'Test LunaSea settings',
  description: 'Sends a test notification to the LunaSea agent.',
  request: {
    body: { content: { 'application/json': { schema: LunaSeaSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsPushbulletRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/pushbullet',
  tags: ['settings'],
  summary: 'Get Pushbullet notification settings',
  description: 'Returns current Pushbullet notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned Pushbullet settings',
      content: { 'application/json': { schema: PushbulletSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsPushbulletRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/pushbullet',
  tags: ['settings'],
  summary: 'Update Pushbullet notification settings',
  description: 'Update Pushbullet notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: PushbulletSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: PushbulletSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsPushbulletTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/pushbullet/test',
  tags: ['settings'],
  summary: 'Test Pushbullet settings',
  description: 'Sends a test notification to the Pushbullet agent.',
  request: {
    body: { content: { 'application/json': { schema: PushbulletSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsPushoverRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/pushover',
  tags: ['settings'],
  summary: 'Get Pushover notification settings',
  description: 'Returns current Pushover notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned Pushover settings',
      content: { 'application/json': { schema: PushoverSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsPushoverRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/pushover',
  tags: ['settings'],
  summary: 'Update Pushover notification settings',
  description: 'Update Pushover notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: PushoverSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: PushoverSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsPushoverTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/pushover/test',
  tags: ['settings'],
  summary: 'Test Pushover settings',
  description: 'Sends a test notification to the Pushover agent.',
  request: {
    body: { content: { 'application/json': { schema: PushoverSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsPushoverSoundsRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/pushover/sounds',
  tags: ['settings'],
  summary: 'Get Pushover sounds',
  description: 'Returns valid Pushover sound options in a JSON array.',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string', nullable: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned Pushover settings',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ name: z.string().exactOptional(), description: z.string().exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getSettingsNotificationsGotifyRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/gotify',
  tags: ['settings'],
  summary: 'Get Gotify notification settings',
  description: 'Returns current Gotify notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned Gotify settings',
      content: { 'application/json': { schema: GotifySettingsSchema } },
    },
  },
})

export const postSettingsNotificationsGotifyRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/gotify',
  tags: ['settings'],
  summary: 'Update Gotify notification settings',
  description: 'Update Gotify notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: GotifySettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: GotifySettingsSchema } },
    },
  },
})

export const postSettingsNotificationsGotifyTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/gotify/test',
  tags: ['settings'],
  summary: 'Test Gotify settings',
  description: 'Sends a test notification to the Gotify agent.',
  request: {
    body: { content: { 'application/json': { schema: GotifySettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsSlackRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/slack',
  tags: ['settings'],
  summary: 'Get Slack notification settings',
  description: 'Returns current Slack notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned slack settings',
      content: { 'application/json': { schema: SlackSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsSlackRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/slack',
  tags: ['settings'],
  summary: 'Update Slack notification settings',
  description: 'Updates Slack notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: SlackSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: SlackSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsSlackTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/slack/test',
  tags: ['settings'],
  summary: 'Test Slack settings',
  description: 'Sends a test notification to the Slack agent.',
  request: {
    body: { content: { 'application/json': { schema: SlackSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsTelegramRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/telegram',
  tags: ['settings'],
  summary: 'Get Telegram notification settings',
  description: 'Returns current Telegram notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned Telegram settings',
      content: { 'application/json': { schema: TelegramSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsTelegramRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/telegram',
  tags: ['settings'],
  summary: 'Update Telegram notification settings',
  description: 'Update Telegram notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: TelegramSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: TelegramSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsTelegramTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/telegram/test',
  tags: ['settings'],
  summary: 'Test Telegram settings',
  description: 'Sends a test notification to the Telegram agent.',
  request: {
    body: { content: { 'application/json': { schema: TelegramSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsWebpushRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/webpush',
  tags: ['settings'],
  summary: 'Get Web Push notification settings',
  description: 'Returns current Web Push notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned web push settings',
      content: { 'application/json': { schema: WebPushSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsWebpushRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/webpush',
  tags: ['settings'],
  summary: 'Update Web Push notification settings',
  description: 'Updates Web Push notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: WebPushSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: WebPushSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsWebpushTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/webpush/test',
  tags: ['settings'],
  summary: 'Test Web Push settings',
  description: 'Sends a test notification to the Web Push agent.',
  request: {
    body: { content: { 'application/json': { schema: WebPushSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsNotificationsWebhookRoute = createRoute({
  method: 'get',
  path: '/settings/notifications/webhook',
  tags: ['settings'],
  summary: 'Get webhook notification settings',
  description: 'Returns current webhook notification settings in a JSON object.',
  responses: {
    200: {
      description: 'Returned webhook settings',
      content: { 'application/json': { schema: WebhookSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsWebhookRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/webhook',
  tags: ['settings'],
  summary: 'Update webhook notification settings',
  description: 'Updates webhook notification settings with the provided values.',
  request: {
    body: { content: { 'application/json': { schema: WebhookSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Values were sucessfully updated',
      content: { 'application/json': { schema: WebhookSettingsSchema } },
    },
  },
})

export const postSettingsNotificationsWebhookTestRoute = createRoute({
  method: 'post',
  path: '/settings/notifications/webhook/test',
  tags: ['settings'],
  summary: 'Test webhook settings',
  description: 'Sends a test notification to the webhook agent.',
  request: {
    body: { content: { 'application/json': { schema: WebhookSettingsSchema } }, required: true },
  },
  responses: { 204: { description: 'Test notification attempted' } },
})

export const getSettingsDiscoverRoute = createRoute({
  method: 'get',
  path: '/settings/discover',
  tags: ['settings'],
  summary: 'Get all discover sliders',
  description: 'Returns all discovery sliders. Built-in and custom made.',
  responses: {
    200: {
      description: 'Returned all discovery sliders',
      content: { 'application/json': { schema: z.array(DiscoverSliderSchema) } },
    },
  },
})

export const postSettingsDiscoverRoute = createRoute({
  method: 'post',
  path: '/settings/discover',
  tags: ['settings'],
  summary: 'Batch update all sliders.',
  description:
    'Batch update all sliders at once. Should also be used for creation. Will only update sliders provided\nand will not delete any sliders not present in the request. If a slider is missing a required field,\nit will be ignored. Requires the `ADMIN` permission.\n',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(DiscoverSliderSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned all newly updated discovery sliders',
      content: { 'application/json': { schema: z.array(DiscoverSliderSchema) } },
    },
  },
})

export const putSettingsDiscoverSliderIdRoute = createRoute({
  method: 'put',
  path: '/settings/discover/{sliderId}',
  tags: ['settings'],
  summary: 'Update a single slider',
  description:
    'Updates a single slider and return the newly updated slider. Requires the `ADMIN` permission.\n',
  request: {
    params: z.object({
      sliderId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'sliderId', required: true, schema: { type: 'number' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ example: 'Slider Title' }),
              type: z.number().exactOptional().openapi({ example: 1 }),
              data: z.string().exactOptional().openapi({ example: '1' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns newly added discovery slider',
      content: { 'application/json': { schema: DiscoverSliderSchema } },
    },
  },
})

export const deleteSettingsDiscoverSliderIdRoute = createRoute({
  method: 'delete',
  path: '/settings/discover/{sliderId}',
  tags: ['settings'],
  summary: 'Delete slider by ID',
  description: 'Deletes the slider with the provided sliderId. Requires the `ADMIN` permission.',
  request: {
    params: z.object({
      sliderId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'sliderId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Slider successfully deleted',
      content: { 'application/json': { schema: DiscoverSliderSchema } },
    },
  },
})

export const postSettingsDiscoverAddRoute = createRoute({
  method: 'post',
  path: '/settings/discover/add',
  tags: ['settings'],
  summary: 'Add a new slider',
  description:
    'Add a single slider and return the newly created slider. Requires the `ADMIN` permission.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ example: 'New Slider' }),
              type: z.number().exactOptional().openapi({ example: 1 }),
              data: z.string().exactOptional().openapi({ example: '1' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns newly added discovery slider',
      content: { 'application/json': { schema: DiscoverSliderSchema } },
    },
  },
})

export const getSettingsDiscoverResetRoute = createRoute({
  method: 'get',
  path: '/settings/discover/reset',
  tags: ['settings'],
  summary: 'Reset all discover sliders',
  description:
    'Resets all discovery sliders to the default values. Requires the `ADMIN` permission.',
  responses: { 204: { description: 'All sliders reset to defaults' } },
})

export const getSettingsAboutRoute = createRoute({
  method: 'get',
  path: '/settings/about',
  tags: ['settings'],
  summary: 'Get server stats',
  description: 'Returns current server stats in a JSON object.',
  responses: {
    200: {
      description: 'Returned about settings',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z.string().exactOptional().openapi({ example: '1.0.0' }),
              totalRequests: z.number().exactOptional().openapi({ example: 100 }),
              totalMediaItems: z.number().exactOptional().openapi({ example: 100 }),
              tz: z.string().nullable().exactOptional().openapi({ example: 'Asia/Tokyo' }),
              appDataPath: z.string().exactOptional().openapi({ example: '/app/config' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAuthMeRoute = createRoute({
  method: 'get',
  path: '/auth/me',
  tags: ['auth', 'users'],
  summary: 'Get logged-in user',
  description: 'Returns the currently logged-in user.',
  responses: {
    200: {
      description: 'Object containing the logged-in user in JSON',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const postAuthPlexRoute = createRoute({
  method: 'post',
  path: '/auth/plex',
  tags: ['auth'],
  summary: 'Sign in using a Plex token',
  description:
    'Takes an `authToken` (Plex token) to log the user in. Generates a session cookie for use in further requests. If the user does not exist, and there are no other users, then a user will be created with full admin privileges. If a user logs in with access to the main Plex server, they will also have an account created, but without any permissions.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ authToken: z.string() }).openapi({ required: ['authToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [],
})

export const postAuthLocalRoute = createRoute({
  method: 'post',
  path: '/auth/local',
  tags: ['auth'],
  summary: 'Sign in using a local account',
  description:
    'Takes an `email` and a `password` to log the user in. Generates a session cookie for use in further requests.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ email: z.string(), password: z.string() })
            .openapi({ required: ['email', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
  security: [],
})

export const postAuthLogoutRoute = createRoute({
  method: 'post',
  path: '/auth/logout',
  tags: ['auth'],
  summary: 'Sign out and clear session cookie',
  description:
    'Completely clear the session cookie and associated values, effectively signing the user out.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ example: 'ok' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAuthResetPasswordRoute = createRoute({
  method: 'post',
  path: '/auth/reset-password',
  tags: ['users'],
  summary: 'Send a reset password email',
  description: 'Sends a reset password email to the email if the user exists',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ email: z.string() }).openapi({ required: ['email'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ example: 'ok' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [],
})

export const postAuthResetPasswordGuidRoute = createRoute({
  method: 'post',
  path: '/auth/reset-password/{guid}',
  tags: ['users'],
  summary: 'Reset the password for a user',
  description: 'Resets the password for a user if the given guid is connected to a user',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'guid',
            required: true,
            schema: { type: 'string', example: '9afef5a7-ec89-4d5f-9397-261e96970b50' },
          },
          example: '9afef5a7-ec89-4d5f-9397-261e96970b50',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ password: z.string() }).openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ example: 'ok' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [],
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['users'],
  summary: 'Get all users',
  description: 'Returns all users in a JSON object.',
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'take',
            schema: { type: 'number', nullable: true, example: 20 },
            required: false,
          },
          example: 20,
        }),
      skip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skip',
            schema: { type: 'number', nullable: true, example: 0 },
            required: false,
          },
          example: 0,
        }),
      sort: z
        .enum(['created', 'updated', 'requests', 'displayname'])
        .default('created')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: {
              type: 'string',
              enum: ['created', 'updated', 'requests', 'displayname'],
              default: 'created',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of all users',
      content: {
        'application/json': {
          schema: z
            .object({
              pageInfo: PageInfoSchema.exactOptional(),
              results: z.array(UserSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putUserRoute = createRoute({
  method: 'put',
  path: '/user',
  tags: ['users'],
  summary: 'Update batch of users',
  description:
    "Update users with given IDs with provided values in request `body.settings`. You cannot update users' Plex tokens through this request.\n\nRequires the `MANAGE_USERS` permission.\n",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ ids: z.array(z.int()).exactOptional(), permissions: z.int().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully updated user details',
      content: { 'application/json': { schema: z.array(UserSchema) } },
    },
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  tags: ['users'],
  summary: 'Create new user',
  description: 'Creates a new user. Requires the `MANAGE_USERS` permission.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ example: 'hey@itsme.com' }),
              username: z.string().exactOptional(),
              permissions: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The created user',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const postUserImportFromPlexRoute = createRoute({
  method: 'post',
  path: '/user/import-from-plex',
  tags: ['users'],
  summary: 'Import all users from Plex',
  description:
    'Fetches and imports users from the Plex server. If a list of Plex IDs is provided in the request body, only the specified users will be imported. Otherwise, all users will be imported.\n\nRequires the `MANAGE_USERS` permission.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ plexIds: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'A list of the newly created users',
      content: { 'application/json': { schema: z.array(UserSchema) } },
    },
  },
})

export const postUserRegisterPushSubscriptionRoute = createRoute({
  method: 'post',
  path: '/user/registerPushSubscription',
  tags: ['users'],
  summary: 'Register a web push /user/registerPushSubscription',
  description: 'Registers a web push subscription for the logged-in user',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z.string(),
              auth: z.string(),
              p256dh: z.string(),
              userAgent: z.string().exactOptional(),
            })
            .openapi({ required: ['endpoint', 'auth', 'p256dh'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Successfully registered push subscription' } },
})

export const getUserUserIdPushSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/pushSubscriptions',
  tags: ['users'],
  summary: 'Get all web push notification settings for a user',
  description: 'Returns all web push notification settings for a user in a JSON object.\n',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User web push notification settings in JSON',
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z.string().exactOptional(),
              p256dh: z.string().exactOptional(),
              auth: z.string().exactOptional(),
              userAgent: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdPushSubscriptionEndpointRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/pushSubscription/{endpoint}',
  tags: ['users'],
  summary: 'Get web push notification settings for a user',
  description: 'Returns web push notification settings for a user in a JSON object.\n',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
      endpoint: z
        .string()
        .openapi({
          param: { in: 'path', name: 'endpoint', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User web push notification settings in JSON',
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z.string().exactOptional(),
              p256dh: z.string().exactOptional(),
              auth: z.string().exactOptional(),
              userAgent: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteUserUserIdPushSubscriptionEndpointRoute = createRoute({
  method: 'delete',
  path: '/user/{userId}/pushSubscription/{endpoint}',
  tags: ['users'],
  summary: 'Delete user push subscription by key',
  description: 'Deletes the user push subscription with the provided key.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
      endpoint: z
        .string()
        .openapi({
          param: { in: 'path', name: 'endpoint', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successfully removed user push subscription' } },
})

export const getUserUserIdRoute = createRoute({
  method: 'get',
  path: '/user/{userId}',
  tags: ['users'],
  summary: 'Get user by ID',
  description: 'Retrieves user details in a JSON object. Requires the `MANAGE_USERS` permission.\n',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Users details in JSON',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const putUserUserIdRoute = createRoute({
  method: 'put',
  path: '/user/{userId}',
  tags: ['users'],
  summary: 'Update a user by user ID',
  description:
    "Update a user with the provided values. You cannot update a user's Plex token through this request.\n\nRequires the `MANAGE_USERS` permission.\n",
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully updated user details',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const deleteUserUserIdRoute = createRoute({
  method: 'delete',
  path: '/user/{userId}',
  tags: ['users'],
  summary: 'Delete user by ID',
  description: 'Deletes the user with the provided userId. Requires the `MANAGE_USERS` permission.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User successfully deleted',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const getUserUserIdRequestsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/requests',
  tags: ['users'],
  summary: 'Get requests for a specific user',
  description: "Retrieves a user's requests in a JSON object.\n",
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    query: z.object({
      take: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'take',
            schema: { type: 'number', nullable: true, example: 20 },
            required: false,
          },
          example: 20,
        }),
      skip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skip',
            schema: { type: 'number', nullable: true, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: "User's requests returned",
      content: {
        'application/json': {
          schema: z
            .object({
              pageInfo: PageInfoSchema.exactOptional(),
              results: z.array(MediaRequestSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdQuotaRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/quota',
  tags: ['users'],
  summary: 'Get quotas for a specific user',
  description:
    'Returns quota details for a user in a JSON object. Requires `MANAGE_USERS` permission if viewing other users.\n',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User quota details in JSON',
      content: {
        'application/json': {
          schema: z
            .object({
              movie: z
                .object({
                  days: z.number().exactOptional().openapi({ example: 7 }),
                  limit: z.number().exactOptional().openapi({ example: 10 }),
                  used: z.number().exactOptional().openapi({ example: 6 }),
                  remaining: z.number().exactOptional().openapi({ example: 4 }),
                  restricted: z.boolean().exactOptional().openapi({ example: false }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              tv: z
                .object({
                  days: z.number().exactOptional().openapi({ example: 7 }),
                  limit: z.number().exactOptional().openapi({ example: 10 }),
                  used: z.number().exactOptional().openapi({ example: 6 }),
                  remaining: z.number().exactOptional().openapi({ example: 4 }),
                  restricted: z.boolean().exactOptional().openapi({ example: false }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdWatchlistRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/watchlist',
  tags: ['users'],
  summary: 'Get the Plex watchlist for a specific user',
  description: "Retrieves a user's Plex Watchlist in a JSON object.\n",
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Watchlist data returned',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional(),
              totalPages: z.number().exactOptional(),
              totalResults: z.number().exactOptional(),
              results: z
                .array(
                  z
                    .object({
                      tmdbId: z.number().exactOptional().openapi({ example: 1 }),
                      ratingKey: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdSettingsMainRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/settings/main',
  tags: ['users'],
  summary: 'Get general settings for a user',
  description:
    'Returns general settings for a specific user. Requires `MANAGE_USERS` permission if viewing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User general settings returned',
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().exactOptional().openapi({ example: 'Mr User' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUserUserIdSettingsMainRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/settings/main',
  tags: ['users'],
  summary: 'Update general settings for a user',
  description:
    'Updates and returns general settings for a specific user. Requires `MANAGE_USERS` permission if editing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().nullable().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated user general settings returned',
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().exactOptional().openapi({ example: 'Mr User' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdSettingsPasswordRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/settings/password',
  tags: ['users'],
  summary: 'Get password page informatiom',
  description:
    'Returns important data for the password page to function correctly. Requires `MANAGE_USERS` permission if viewing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User password page information returned',
      content: {
        'application/json': {
          schema: z
            .object({ hasPassword: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUserUserIdSettingsPasswordRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/settings/password',
  tags: ['users'],
  summary: 'Update password for a user',
  description:
    "Updates a user's password. Requires `MANAGE_USERS` permission if editing other users.",
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentPassword: z.string().nullable().exactOptional(),
              newPassword: z.string(),
            })
            .openapi({ required: ['newPassword'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'User password updated' } },
})

export const getUserUserIdSettingsNotificationsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/settings/notifications',
  tags: ['users'],
  summary: 'Get notification settings for a user',
  description:
    'Returns notification settings for a specific user. Requires `MANAGE_USERS` permission if viewing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User notification settings returned',
      content: { 'application/json': { schema: UserSettingsNotificationsSchema } },
    },
  },
})

export const postUserUserIdSettingsNotificationsRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/settings/notifications',
  tags: ['users'],
  summary: 'Update notification settings for a user',
  description:
    'Updates and returns notification settings for a specific user. Requires `MANAGE_USERS` permission if editing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UserSettingsNotificationsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated user notification settings returned',
      content: { 'application/json': { schema: UserSettingsNotificationsSchema } },
    },
  },
})

export const getUserUserIdSettingsPermissionsRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/settings/permissions',
  tags: ['users'],
  summary: 'Get permission settings for a user',
  description:
    'Returns permission settings for a specific user. Requires `MANAGE_USERS` permission if viewing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User permission settings returned',
      content: {
        'application/json': {
          schema: z
            .object({ permissions: z.number().exactOptional().openapi({ example: 2 }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUserUserIdSettingsPermissionsRoute = createRoute({
  method: 'post',
  path: '/user/{userId}/settings/permissions',
  tags: ['users'],
  summary: 'Update permission settings for a user',
  description:
    'Updates and returns permission settings for a specific user. Requires `MANAGE_USERS` permission if editing other users.',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ permissions: z.number() }).openapi({ required: ['permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated user general settings returned',
      content: {
        'application/json': {
          schema: z
            .object({ permissions: z.number().exactOptional().openapi({ example: 2 }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdWatchDataRoute = createRoute({
  method: 'get',
  path: '/user/{userId}/watch_data',
  tags: ['users'],
  summary: 'Get watch data',
  description:
    'Returns play count, play duration, and recently watched media.\n\nRequires the `ADMIN` permission to fetch results for other users.\n',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Users',
      content: {
        'application/json': {
          schema: z
            .object({
              recentlyWatched: z.array(MediaInfoSchema).exactOptional(),
              playCount: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['search'],
  summary: 'Search for movies, TV shows, or people',
  description: 'Returns a list of movies, TV shows, or people a JSON object.',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string', example: 'Mulan' },
          },
          example: 'Mulan',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z
                .array(z.union([MovieResultSchema, TvResultSchema, PersonResultSchema]))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchKeywordRoute = createRoute({
  method: 'get',
  path: '/search/keyword',
  tags: ['search'],
  summary: 'Search for keywords',
  description: 'Returns a list of TMDB keywords matching the search query',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string', example: 'christmas' },
          },
          example: 'christmas',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(KeywordSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchCompanyRoute = createRoute({
  method: 'get',
  path: '/search/company',
  tags: ['search'],
  summary: 'Search for companies',
  description:
    'Returns a list of TMDB companies matching the search query. (Will not return origin country)',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string', example: 'Disney' },
          },
          example: 'Disney',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(CompanySchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverMoviesRoute = createRoute({
  method: 'get',
  path: '/discover/movies',
  tags: ['search'],
  summary: 'Discover movies',
  description: 'Returns a list of movies in a JSON object.',
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
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
      genre: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'genre',
            schema: { type: 'string', example: 18 },
            required: false,
          },
          example: 18,
        }),
      studio: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'studio',
            schema: { type: 'number', example: 1 },
            required: false,
          },
          example: 1,
        }),
      keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'keywords',
            schema: { type: 'string', example: '1,2' },
            required: false,
          },
          example: '1,2',
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sortBy',
            schema: { type: 'string', example: 'popularity.desc' },
            required: false,
          },
          example: 'popularity.desc',
        }),
      primaryReleaseDateGte: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'primaryReleaseDateGte',
            schema: { type: 'string', example: '2022-01-01' },
            required: false,
          },
          example: '2022-01-01',
        }),
      primaryReleaseDateLte: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'primaryReleaseDateLte',
            schema: { type: 'string', example: '2023-01-01' },
            required: false,
          },
          example: '2023-01-01',
        }),
      withRuntimeGte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'withRuntimeGte',
            schema: { type: 'number', example: 60 },
            required: false,
          },
          example: 60,
        }),
      withRuntimeLte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'withRuntimeLte',
            schema: { type: 'number', example: 120 },
            required: false,
          },
          example: 120,
        }),
      voteAverageGte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteAverageGte',
            schema: { type: 'number', example: 7 },
            required: false,
          },
          example: 7,
        }),
      voteAverageLte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteAverageLte',
            schema: { type: 'number', example: 10 },
            required: false,
          },
          example: 10,
        }),
      voteCountGte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteCountGte',
            schema: { type: 'number', example: 7 },
            required: false,
          },
          example: 7,
        }),
      voteCountLte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteCountLte',
            schema: { type: 'number', example: 10 },
            required: false,
          },
          example: 10,
        }),
      watchRegion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'watchRegion',
            schema: { type: 'string', example: 'US' },
            required: false,
          },
          example: 'US',
        }),
      watchProviders: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'watchProviders',
            schema: { type: 'string', example: '8|9' },
            required: false,
          },
          example: '8|9',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverMoviesGenreGenreIdRoute = createRoute({
  method: 'get',
  path: '/discover/movies/genre/{genreId}',
  tags: ['search'],
  summary: 'Discover movies by genre',
  description: 'Returns a list of movies based on the provided genre ID in a JSON object.',
  request: {
    params: z.object({
      genreId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'genreId',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              genre: GenreSchema.exactOptional(),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverMoviesLanguageLanguageRoute = createRoute({
  method: 'get',
  path: '/discover/movies/language/{language}',
  tags: ['search'],
  summary: 'Discover movies by original language',
  description:
    'Returns a list of movies based on the provided ISO 639-1 language code in a JSON object.',
  request: {
    params: z.object({
      language: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string', example: 'en' },
          },
          example: 'en',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              language: SpokenLanguageSchema.exactOptional(),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverMoviesStudioStudioIdRoute = createRoute({
  method: 'get',
  path: '/discover/movies/studio/{studioId}',
  tags: ['search'],
  summary: 'Discover movies by studio',
  description: 'Returns a list of movies based on the provided studio ID in a JSON object.',
  request: {
    params: z.object({
      studioId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'studioId',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              studio: ProductionCompanySchema.exactOptional(),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverMoviesUpcomingRoute = createRoute({
  method: 'get',
  path: '/discover/movies/upcoming',
  tags: ['search'],
  summary: 'Upcoming movies',
  description: 'Returns a list of movies in a JSON object.',
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
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverTvRoute = createRoute({
  method: 'get',
  path: '/discover/tv',
  tags: ['search'],
  summary: 'Discover TV shows',
  description: 'Returns a list of TV shows in a JSON object.',
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
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
      genre: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'genre',
            schema: { type: 'string', example: 18 },
            required: false,
          },
          example: 18,
        }),
      network: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'network',
            schema: { type: 'number', example: 1 },
            required: false,
          },
          example: 1,
        }),
      keywords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'keywords',
            schema: { type: 'string', example: '1,2' },
            required: false,
          },
          example: '1,2',
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sortBy',
            schema: { type: 'string', example: 'popularity.desc' },
            required: false,
          },
          example: 'popularity.desc',
        }),
      firstAirDateGte: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'firstAirDateGte',
            schema: { type: 'string', example: '2022-01-01' },
            required: false,
          },
          example: '2022-01-01',
        }),
      firstAirDateLte: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'firstAirDateLte',
            schema: { type: 'string', example: '2023-01-01' },
            required: false,
          },
          example: '2023-01-01',
        }),
      withRuntimeGte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'withRuntimeGte',
            schema: { type: 'number', example: 60 },
            required: false,
          },
          example: 60,
        }),
      withRuntimeLte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'withRuntimeLte',
            schema: { type: 'number', example: 120 },
            required: false,
          },
          example: 120,
        }),
      voteAverageGte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteAverageGte',
            schema: { type: 'number', example: 7 },
            required: false,
          },
          example: 7,
        }),
      voteAverageLte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteAverageLte',
            schema: { type: 'number', example: 10 },
            required: false,
          },
          example: 10,
        }),
      voteCountGte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteCountGte',
            schema: { type: 'number', example: 7 },
            required: false,
          },
          example: 7,
        }),
      voteCountLte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'voteCountLte',
            schema: { type: 'number', example: 10 },
            required: false,
          },
          example: 10,
        }),
      watchRegion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'watchRegion',
            schema: { type: 'string', example: 'US' },
            required: false,
          },
          example: 'US',
        }),
      watchProviders: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'watchProviders',
            schema: { type: 'string', example: '8|9' },
            required: false,
          },
          example: '8|9',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverTvLanguageLanguageRoute = createRoute({
  method: 'get',
  path: '/discover/tv/language/{language}',
  tags: ['search'],
  summary: 'Discover TV shows by original language',
  description:
    'Returns a list of TV shows based on the provided ISO 639-1 language code in a JSON object.',
  request: {
    params: z.object({
      language: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string', example: 'en' },
          },
          example: 'en',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              language: SpokenLanguageSchema.exactOptional(),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverTvGenreGenreIdRoute = createRoute({
  method: 'get',
  path: '/discover/tv/genre/{genreId}',
  tags: ['search'],
  summary: 'Discover TV shows by genre',
  description: 'Returns a list of TV shows based on the provided genre ID in a JSON object.',
  request: {
    params: z.object({
      genreId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'genreId',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              genre: GenreSchema.exactOptional(),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverTvNetworkNetworkIdRoute = createRoute({
  method: 'get',
  path: '/discover/tv/network/{networkId}',
  tags: ['search'],
  summary: 'Discover TV shows by network',
  description: 'Returns a list of TV shows based on the provided network ID in a JSON object.',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'networkId',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              network: NetworkSchema.exactOptional(),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverTvUpcomingRoute = createRoute({
  method: 'get',
  path: '/discover/tv/upcoming',
  tags: ['search'],
  summary: 'Discover Upcoming TV shows',
  description: 'Returns a list of upcoming TV shows in a JSON object.',
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
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverTrendingRoute = createRoute({
  method: 'get',
  path: '/discover/trending',
  tags: ['search'],
  summary: 'Trending movies and TV',
  description: 'Returns a list of movies and TV shows in a JSON object.',
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
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z
                .array(z.union([MovieResultSchema, TvResultSchema, PersonResultSchema]))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverKeywordKeywordIdMoviesRoute = createRoute({
  method: 'get',
  path: '/discover/keyword/{keywordId}/movies',
  tags: ['search'],
  summary: 'Get movies from keyword',
  description: 'Returns list of movies based on the provided keyword ID a JSON object.',
  request: {
    params: z.object({
      keywordId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'keywordId',
            required: true,
            schema: { type: 'number', example: 207317 },
          },
          example: 207317,
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of movies',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDiscoverGenresliderMovieRoute = createRoute({
  method: 'get',
  path: '/discover/genreslider/movie',
  tags: ['search'],
  summary: 'Get genre slider data for movies',
  description: 'Returns a list of genres with backdrops attached',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Genre slider data returned',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.number().exactOptional().openapi({ example: 1 }),
                backdrops: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional().openapi({ example: 'Genre Name' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getDiscoverGenresliderTvRoute = createRoute({
  method: 'get',
  path: '/discover/genreslider/tv',
  tags: ['search'],
  summary: 'Get genre slider data for TV series',
  description: 'Returns a list of genres with backdrops attached',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Genre slider data returned',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.number().exactOptional().openapi({ example: 1 }),
                backdrops: z.array(z.string()).exactOptional(),
                name: z.string().exactOptional().openapi({ example: 'Genre Name' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getDiscoverWatchlistRoute = createRoute({
  method: 'get',
  path: '/discover/watchlist',
  tags: ['search'],
  summary: 'Get the Plex watchlist.',
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
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Watchlist data returned',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional(),
              totalPages: z.number().exactOptional(),
              totalResults: z.number().exactOptional(),
              results: z
                .array(
                  z
                    .object({
                      tmdbId: z.number().exactOptional().openapi({ example: 1 }),
                      ratingKey: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRequestRoute = createRoute({
  method: 'get',
  path: '/request',
  tags: ['request'],
  summary: 'Get all requests',
  description:
    "Returns all requests if the user has the `ADMIN` or `MANAGE_REQUESTS` permissions. Otherwise, only the logged-in user's requests are returned.\n\nIf the `requestedBy` parameter is specified, only requests from that particular user ID will be returned.\n",
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'take',
            schema: { type: 'number', nullable: true, example: 20 },
            required: false,
          },
          example: 20,
        }),
      skip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skip',
            schema: { type: 'number', nullable: true, example: 0 },
            required: false,
          },
          example: 0,
        }),
      filter: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .enum([
            'all',
            'approved',
            'available',
            'pending',
            'processing',
            'unavailable',
            'failed',
            'deleted',
            'completed',
          ])
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            schema: {
              type: 'string',
              nullable: true,
              enum: [
                'all',
                'approved',
                'available',
                'pending',
                'processing',
                'unavailable',
                'failed',
                'deleted',
                'completed',
              ],
            },
            required: false,
          },
        }),
      sort: z
        .enum(['added', 'modified'])
        .default('added')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { type: 'string', enum: ['added', 'modified'], default: 'added' },
            required: false,
          },
        }),
      requestedBy: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'requestedBy',
            schema: { type: 'number', nullable: true, example: 1 },
            required: false,
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requests returned',
      content: {
        'application/json': {
          schema: z
            .object({
              pageInfo: PageInfoSchema.exactOptional(),
              results: z.array(MediaRequestSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postRequestRoute = createRoute({
  method: 'post',
  path: '/request',
  tags: ['request'],
  summary: 'Create new request',
  description:
    'Creates a new request with the provided media ID and type. The `REQUEST` permission is required.\n\nIf the user has the `ADMIN` or `AUTO_APPROVE` permissions, their request will be auomatically approved.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mediaType: z.enum(['movie', 'tv']).openapi({ example: 'movie' }),
              mediaId: z.number().openapi({ example: 123 }),
              tvdbId: z.number().exactOptional().openapi({ example: 123 }),
              seasons: z.xor([z.array(z.number().min(0)), z.literal('all')]).exactOptional(),
              is4k: z.boolean().exactOptional().openapi({ example: false }),
              serverId: z.number().exactOptional(),
              profileId: z.number().exactOptional(),
              rootFolder: z.string().exactOptional(),
              languageProfileId: z.number().exactOptional(),
              userId: z.number().nullable().exactOptional(),
            })
            .openapi({ required: ['mediaType', 'mediaId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Succesfully created the request',
      content: { 'application/json': { schema: MediaRequestSchema } },
    },
  },
})

export const getRequestCountRoute = createRoute({
  method: 'get',
  path: '/request/count',
  tags: ['request'],
  summary: 'Gets request counts',
  description: 'Returns the number of pending and approved requests.\n',
  responses: {
    200: {
      description: 'Request counts returned',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional(),
              movie: z.number().exactOptional(),
              tv: z.number().exactOptional(),
              pending: z.number().exactOptional(),
              approved: z.number().exactOptional(),
              declined: z.number().exactOptional(),
              processing: z.number().exactOptional(),
              available: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRequestRequestIdRoute = createRoute({
  method: 'get',
  path: '/request/{requestId}',
  tags: ['request'],
  summary: 'Get MediaRequest',
  description: 'Returns a specific MediaRequest in a JSON object.',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'requestId',
            description: 'Request ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Succesfully returns request',
      content: { 'application/json': { schema: MediaRequestSchema } },
    },
  },
})

export const putRequestRequestIdRoute = createRoute({
  method: 'put',
  path: '/request/{requestId}',
  tags: ['request'],
  summary: 'Update MediaRequest',
  description:
    'Updates a specific media request and returns the request in a JSON object. Requires the `MANAGE_REQUESTS` permission.',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'requestId',
            description: 'Request ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mediaType: z.enum(['movie', 'tv']),
              seasons: z.array(z.number().min(0)).exactOptional(),
              is4k: z.boolean().exactOptional().openapi({ example: false }),
              serverId: z.number().exactOptional(),
              profileId: z.number().exactOptional(),
              rootFolder: z.string().exactOptional(),
              languageProfileId: z.number().exactOptional(),
              userId: z.number().nullable().exactOptional(),
            })
            .openapi({ required: ['mediaType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Succesfully updated request',
      content: { 'application/json': { schema: MediaRequestSchema } },
    },
  },
})

export const deleteRequestRequestIdRoute = createRoute({
  method: 'delete',
  path: '/request/{requestId}',
  tags: ['request'],
  summary: 'Delete request',
  description:
    'Removes a request. If the user has the `MANAGE_REQUESTS` permission, any request can be removed. Otherwise, only pending requests can be removed.',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'requestId',
            description: 'Request ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Succesfully removed request' } },
})

export const postRequestRequestIdRetryRoute = createRoute({
  method: 'post',
  path: '/request/{requestId}/retry',
  tags: ['request'],
  summary: 'Retry failed request',
  description:
    'Retries a request by resending requests to Sonarr or Radarr.\n\nRequires the `MANAGE_REQUESTS` permission or `ADMIN`.\n',
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'requestId',
            description: 'Request ID',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retry triggered',
      content: { 'application/json': { schema: MediaRequestSchema } },
    },
  },
})

export const postRequestRequestIdStatusRoute = createRoute({
  method: 'post',
  path: '/request/{requestId}/{status}',
  tags: ['request'],
  summary: "Update a request's status",
  description:
    "Updates a request's status to approved or declined. Also returns the request in a JSON object.\n\nRequires the `MANAGE_REQUESTS` permission or `ADMIN`.\n",
  request: {
    params: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'requestId',
            description: 'Request ID',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
      status: z
        .enum(['approve', 'decline'])
        .openapi({
          param: {
            in: 'path',
            name: 'status',
            description: 'New status',
            required: true,
            schema: { type: 'string', enum: ['approve', 'decline'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request status changed',
      content: { 'application/json': { schema: MediaRequestSchema } },
    },
  },
})

export const getMovieMovieIdRoute = createRoute({
  method: 'get',
  path: '/movie/{movieId}',
  tags: ['movies'],
  summary: 'Get movie details',
  description: 'Returns full movie details in a JSON object.',
  request: {
    params: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'movieId',
            required: true,
            schema: { type: 'number', example: 337401 },
          },
          example: 337401,
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Movie details',
      content: { 'application/json': { schema: MovieDetailsSchema } },
    },
  },
})

export const getMovieMovieIdRecommendationsRoute = createRoute({
  method: 'get',
  path: '/movie/{movieId}/recommendations',
  tags: ['movies'],
  summary: 'Get recommended movies',
  description: 'Returns list of recommended movies based on provided movie ID in a JSON object.',
  request: {
    params: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'movieId',
            required: true,
            schema: { type: 'number', example: 337401 },
          },
          example: 337401,
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of movies',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMovieMovieIdSimilarRoute = createRoute({
  method: 'get',
  path: '/movie/{movieId}/similar',
  tags: ['movies'],
  summary: 'Get similar movies',
  description: 'Returns list of similar movies based on the provided movieId in a JSON object.',
  request: {
    params: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'movieId',
            required: true,
            schema: { type: 'number', example: 337401 },
          },
          example: 337401,
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of movies',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(MovieResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMovieMovieIdRatingsRoute = createRoute({
  method: 'get',
  path: '/movie/{movieId}/ratings',
  tags: ['movies'],
  summary: 'Get movie ratings',
  description: 'Returns ratings based on the provided movieId in a JSON object.',
  request: {
    params: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'movieId',
            required: true,
            schema: { type: 'number', example: 337401 },
          },
          example: 337401,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ratings returned',
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ example: 'Mulan' }),
              year: z.number().exactOptional().openapi({ example: 2020 }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'http://www.rottentomatoes.com/m/mulan_2020/' }),
              criticsScore: z.number().exactOptional().openapi({ example: 85 }),
              criticsRating: z.enum(['Rotten', 'Fresh', 'Certified Fresh']).exactOptional(),
              audienceScore: z.number().exactOptional().openapi({ example: 65 }),
              audienceRating: z.enum(['Spilled', 'Upright']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMovieMovieIdRatingscombinedRoute = createRoute({
  method: 'get',
  path: '/movie/{movieId}/ratingscombined',
  tags: ['movies'],
  summary: 'Get RT and IMDB movie ratings combined',
  description:
    'Returns ratings from RottenTomatoes and IMDB based on the provided movieId in a JSON object.',
  request: {
    params: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'movieId',
            required: true,
            schema: { type: 'number', example: 337401 },
          },
          example: 337401,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ratings returned',
      content: {
        'application/json': {
          schema: z
            .object({
              rt: z
                .object({
                  title: z.string().exactOptional().openapi({ example: 'Mulan' }),
                  year: z.number().exactOptional().openapi({ example: 2020 }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'http://www.rottentomatoes.com/m/mulan_2020/' }),
                  criticsScore: z.number().exactOptional().openapi({ example: 85 }),
                  criticsRating: z.enum(['Rotten', 'Fresh', 'Certified Fresh']).exactOptional(),
                  audienceScore: z.number().exactOptional().openapi({ example: 65 }),
                  audienceRating: z.enum(['Spilled', 'Upright']).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              imdb: z
                .object({
                  title: z.string().exactOptional().openapi({ example: 'I am Legend' }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'https://www.imdb.com/title/tt0480249' }),
                  criticsScore: z.number().exactOptional().openapi({ example: 6.5 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTvTvIdRoute = createRoute({
  method: 'get',
  path: '/tv/{tvId}',
  tags: ['tv'],
  summary: 'Get TV details',
  description: 'Returns full TV details in a JSON object.',
  request: {
    params: z.object({
      tvId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tvId',
            required: true,
            schema: { type: 'number', example: 76479 },
          },
          example: 76479,
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'TV details',
      content: { 'application/json': { schema: TvDetailsSchema } },
    },
  },
})

export const getTvTvIdSeasonSeasonIdRoute = createRoute({
  method: 'get',
  path: '/tv/{tvId}/season/{seasonId}',
  tags: ['tv'],
  summary: 'Get season details and episode list',
  description: 'Returns season details with a list of episodes in a JSON object.',
  request: {
    params: z.object({
      tvId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tvId',
            required: true,
            schema: { type: 'number', example: 76479 },
          },
          example: 76479,
        }),
      seasonId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'seasonId',
            required: true,
            schema: { type: 'number', example: 1 },
          },
          example: 1,
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: { description: 'TV details', content: { 'application/json': { schema: SeasonSchema } } },
  },
})

export const getTvTvIdRecommendationsRoute = createRoute({
  method: 'get',
  path: '/tv/{tvId}/recommendations',
  tags: ['tv'],
  summary: 'Get recommended TV series',
  description: 'Returns list of recommended TV series based on the provided tvId in a JSON object.',
  request: {
    params: z.object({
      tvId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tvId',
            required: true,
            schema: { type: 'number', example: 76479 },
          },
          example: 76479,
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of TV series',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTvTvIdSimilarRoute = createRoute({
  method: 'get',
  path: '/tv/{tvId}/similar',
  tags: ['tv'],
  summary: 'Get similar TV series',
  description: 'Returns list of similar TV series based on the provided tvId in a JSON object.',
  request: {
    params: z.object({
      tvId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tvId',
            required: true,
            schema: { type: 'number', example: 76479 },
          },
          example: 76479,
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { type: 'number', example: 1, default: 1 },
            required: false,
          },
          example: 1,
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of TV series',
      content: {
        'application/json': {
          schema: z
            .object({
              page: z.number().exactOptional().openapi({ example: 1 }),
              totalPages: z.number().exactOptional().openapi({ example: 20 }),
              totalResults: z.number().exactOptional().openapi({ example: 200 }),
              results: z.array(TvResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTvTvIdRatingsRoute = createRoute({
  method: 'get',
  path: '/tv/{tvId}/ratings',
  tags: ['tv'],
  summary: 'Get TV ratings',
  description: 'Returns ratings based on provided tvId in a JSON object.',
  request: {
    params: z.object({
      tvId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tvId',
            required: true,
            schema: { type: 'number', example: 76479 },
          },
          example: 76479,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ratings returned',
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.string().exactOptional().openapi({ example: 'The Boys' }),
              year: z.number().exactOptional().openapi({ example: 2019 }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: 'http://www.rottentomatoes.com/m/mulan_2020/' }),
              criticsScore: z.number().exactOptional().openapi({ example: 85 }),
              criticsRating: z.enum(['Rotten', 'Fresh']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPersonPersonIdRoute = createRoute({
  method: 'get',
  path: '/person/{personId}',
  tags: ['person'],
  summary: 'Get person details',
  description: 'Returns person details based on provided personId in a JSON object.',
  request: {
    params: z.object({
      personId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'personId',
            required: true,
            schema: { type: 'number', example: 287 },
          },
          example: 287,
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned person',
      content: { 'application/json': { schema: PersonDetailsSchema } },
    },
  },
})

export const getPersonPersonIdCombinedCreditsRoute = createRoute({
  method: 'get',
  path: '/person/{personId}/combined_credits',
  tags: ['person'],
  summary: 'Get combined credits',
  description:
    "Returns the person's combined credits based on the provided personId in a JSON object.",
  request: {
    params: z.object({
      personId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'personId',
            required: true,
            schema: { type: 'number', example: 287 },
          },
          example: 287,
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned combined credits',
      content: {
        'application/json': {
          schema: z
            .object({
              cast: z.array(CreditCastSchema).exactOptional(),
              crew: z.array(CreditCrewSchema).exactOptional(),
              id: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMediaRoute = createRoute({
  method: 'get',
  path: '/media',
  tags: ['media'],
  summary: 'Get media',
  description: 'Returns all media (can be filtered and limited) in a JSON object.',
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'take',
            schema: { type: 'number', nullable: true, example: 20 },
            required: false,
          },
          example: 20,
        }),
      skip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skip',
            schema: { type: 'number', nullable: true, example: 0 },
            required: false,
          },
          example: 0,
        }),
      filter: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .enum(['all', 'available', 'partial', 'allavailable', 'processing', 'pending', 'deleted'])
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            schema: {
              type: 'string',
              nullable: true,
              enum: [
                'all',
                'available',
                'partial',
                'allavailable',
                'processing',
                'pending',
                'deleted',
              ],
            },
            required: false,
          },
        }),
      sort: z
        .enum(['added', 'modified', 'mediaAdded'])
        .default('added')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { type: 'string', enum: ['added', 'modified', 'mediaAdded'], default: 'added' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned media',
      content: {
        'application/json': {
          schema: z
            .object({
              pageInfo: PageInfoSchema.exactOptional(),
              results: z.array(MediaInfoSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteMediaMediaIdRoute = createRoute({
  method: 'delete',
  path: '/media/{mediaId}',
  tags: ['media'],
  summary: 'Delete media item',
  description:
    'Removes a media item. The `MANAGE_REQUESTS` permission is required to perform this action.',
  request: {
    params: z.object({
      mediaId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mediaId',
            description: 'Media ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Succesfully removed media item' } },
})

export const postMediaMediaIdStatusRoute = createRoute({
  method: 'post',
  path: '/media/{mediaId}/{status}',
  tags: ['media'],
  summary: 'Update media status',
  description: "Updates a media item's status and returns the media in JSON format",
  request: {
    params: z.object({
      mediaId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mediaId',
            description: 'Media ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['available', 'partial', 'processing', 'pending', 'unknown', 'deleted'])
        .openapi({
          param: {
            in: 'path',
            name: 'status',
            description: 'New status',
            required: true,
            example: 'available',
            schema: {
              type: 'string',
              enum: ['available', 'partial', 'processing', 'pending', 'unknown', 'deleted'],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ is4k: z.boolean().exactOptional().openapi({ example: false }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returned media',
      content: { 'application/json': { schema: MediaInfoSchema } },
    },
  },
})

export const getMediaMediaIdWatchDataRoute = createRoute({
  method: 'get',
  path: '/media/{mediaId}/watch_data',
  tags: ['media'],
  summary: 'Get watch data',
  description:
    'Returns play count, play duration, and users who have watched the media.\n\nRequires the `ADMIN` permission.\n',
  request: {
    params: z.object({
      mediaId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mediaId',
            description: 'Media ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Users',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  playCount7Days: z.number().exactOptional(),
                  playCount30Days: z.number().exactOptional(),
                  playCount: z.number().exactOptional(),
                  users: z.array(UserSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              data4k: z
                .object({
                  playCount7Days: z.number().exactOptional(),
                  playCount30Days: z.number().exactOptional(),
                  playCount: z.number().exactOptional(),
                  users: z.array(UserSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCollectionCollectionIdRoute = createRoute({
  method: 'get',
  path: '/collection/{collectionId}',
  tags: ['collection'],
  summary: 'Get collection details',
  description: 'Returns full collection details in a JSON object.',
  request: {
    params: z.object({
      collectionId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { type: 'number', example: 537982 },
          },
          example: 537982,
        }),
    }),
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection details',
      content: { 'application/json': { schema: CollectionSchema } },
    },
  },
})

export const getServiceRadarrRoute = createRoute({
  method: 'get',
  path: '/service/radarr',
  tags: ['service'],
  summary: 'Get non-sensitive Radarr server list',
  description: 'Returns a list of Radarr server IDs and names in a JSON object.',
  responses: {
    200: {
      description: 'Request successful',
      content: { 'application/json': { schema: z.array(RadarrSettingsSchema) } },
    },
  },
})

export const getServiceRadarrRadarrIdRoute = createRoute({
  method: 'get',
  path: '/service/radarr/{radarrId}',
  tags: ['service'],
  summary: 'Get Radarr server quality profiles and root folders',
  description:
    "Returns a Radarr server's quality profile and root folder details in a JSON object.",
  request: {
    params: z.object({
      radarrId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'radarrId',
            required: true,
            schema: { type: 'number', example: 0 },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              server: RadarrSettingsSchema.exactOptional(),
              profiles: ServiceProfileSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getServiceSonarrRoute = createRoute({
  method: 'get',
  path: '/service/sonarr',
  tags: ['service'],
  summary: 'Get non-sensitive Sonarr server list',
  description: 'Returns a list of Sonarr server IDs and names in a JSON object.',
  responses: {
    200: {
      description: 'Request successful',
      content: { 'application/json': { schema: z.array(SonarrSettingsSchema) } },
    },
  },
})

export const getServiceSonarrSonarrIdRoute = createRoute({
  method: 'get',
  path: '/service/sonarr/{sonarrId}',
  tags: ['service'],
  summary: 'Get Sonarr server quality profiles and root folders',
  description:
    "Returns a Sonarr server's quality profile and root folder details in a JSON object.",
  request: {
    params: z.object({
      sonarrId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'sonarrId',
            required: true,
            schema: { type: 'number', example: 0 },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request successful',
      content: {
        'application/json': {
          schema: z
            .object({
              server: SonarrSettingsSchema.exactOptional(),
              profiles: ServiceProfileSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getServiceSonarrLookupTmdbIdRoute = createRoute({
  method: 'get',
  path: '/service/sonarr/lookup/{tmdbId}',
  tags: ['service'],
  summary: 'Get series from Sonarr',
  description: 'Returns a list of series returned by searching for the name in Sonarr.',
  request: {
    params: z.object({
      tmdbId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'tmdbId',
            required: true,
            schema: { type: 'number', example: 0 },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request successful',
      content: { 'application/json': { schema: z.array(SonarrSeriesSchema) } },
    },
  },
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['tmdb'],
  summary: 'Regions supported by TMDB',
  description: 'Returns a list of regions in a JSON object.',
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                iso_3166_1: z.string().exactOptional().openapi({ example: 'US' }),
                english_name: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'United States of America' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getLanguagesRoute = createRoute({
  method: 'get',
  path: '/languages',
  tags: ['tmdb'],
  summary: 'Languages supported by TMDB',
  description: 'Returns a list of languages in a JSON object.',
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                iso_639_1: z.string().exactOptional().openapi({ example: 'en' }),
                english_name: z.string().exactOptional().openapi({ example: 'English' }),
                name: z.string().exactOptional().openapi({ example: 'English' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getStudioStudioIdRoute = createRoute({
  method: 'get',
  path: '/studio/{studioId}',
  tags: ['tmdb'],
  summary: 'Get movie studio details',
  description: 'Returns movie studio details in a JSON object.',
  request: {
    params: z.object({
      studioId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'studioId',
            required: true,
            schema: { type: 'number', example: 2 },
          },
          example: 2,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Movie studio details',
      content: { 'application/json': { schema: ProductionCompanySchema } },
    },
  },
})

export const getNetworkNetworkIdRoute = createRoute({
  method: 'get',
  path: '/network/{networkId}',
  tags: ['tmdb'],
  summary: 'Get TV network details',
  description: 'Returns TV network details in a JSON object.',
  request: {
    params: z.object({
      networkId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'networkId',
            required: true,
            schema: { type: 'number', example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'TV network details',
      content: { 'application/json': { schema: ProductionCompanySchema } },
    },
  },
})

export const getGenresMovieRoute = createRoute({
  method: 'get',
  path: '/genres/movie',
  tags: ['tmdb'],
  summary: 'Get list of official TMDB movie genres',
  description: 'Returns a list of genres in a JSON array.',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.number().exactOptional().openapi({ example: 10751 }),
                name: z.string().exactOptional().openapi({ example: 'Family' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getGenresTvRoute = createRoute({
  method: 'get',
  path: '/genres/tv',
  tags: ['tmdb'],
  summary: 'Get list of official TMDB movie genres',
  description: 'Returns a list of genres in a JSON array.',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'language',
            schema: { type: 'string', example: 'en' },
            required: false,
          },
          example: 'en',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Results',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.number().exactOptional().openapi({ example: 18 }),
                name: z.string().exactOptional().openapi({ example: 'Drama' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getBackdropsRoute = createRoute({
  method: 'get',
  path: '/backdrops',
  tags: ['tmdb'],
  summary: 'Get backdrops of trending items',
  description: 'Returns a list of backdrop image paths in a JSON array.',
  responses: {
    200: {
      description: 'Results',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
  security: [],
})

export const getIssueRoute = createRoute({
  method: 'get',
  path: '/issue',
  tags: ['issue'],
  summary: 'Get all issues',
  description: 'Returns a list of issues in JSON format.\n',
  request: {
    query: z.object({
      take: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'take',
            schema: { type: 'number', nullable: true, example: 20 },
            required: false,
          },
          example: 20,
        }),
      skip: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'skip',
            schema: { type: 'number', nullable: true, example: 0 },
            required: false,
          },
          example: 0,
        }),
      sort: z
        .enum(['added', 'modified'])
        .default('added')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { type: 'string', enum: ['added', 'modified'], default: 'added' },
            required: false,
          },
        }),
      filter: z
        .enum(['all', 'open', 'resolved'])
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            schema: { type: 'string', enum: ['all', 'open', 'resolved'], default: 'open' },
            required: false,
          },
        }),
      requestedBy: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'requestedBy',
            schema: { type: 'number', nullable: true, example: 1 },
            required: false,
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Issues returned',
      content: {
        'application/json': {
          schema: z
            .object({
              pageInfo: PageInfoSchema.exactOptional(),
              results: z.array(IssueSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postIssueRoute = createRoute({
  method: 'post',
  path: '/issue',
  tags: ['issue'],
  summary: 'Create new issue',
  description: 'Creates a new issue\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              issueType: z.number().exactOptional(),
              message: z.string().exactOptional(),
              mediaId: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Succesfully created the issue',
      content: { 'application/json': { schema: IssueSchema } },
    },
  },
})

export const getIssueCountRoute = createRoute({
  method: 'get',
  path: '/issue/count',
  tags: ['issue'],
  summary: 'Gets issue counts',
  description:
    'Returns the number of open and closed issues, as well as the number of issues of each type.\n',
  responses: {
    200: {
      description: 'Issue counts returned',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional(),
              video: z.number().exactOptional(),
              audio: z.number().exactOptional(),
              subtitles: z.number().exactOptional(),
              others: z.number().exactOptional(),
              open: z.number().exactOptional(),
              closed: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getIssueIssueIdRoute = createRoute({
  method: 'get',
  path: '/issue/{issueId}',
  tags: ['issue'],
  summary: 'Get issue',
  description: 'Returns a single issue in JSON format.\n',
  request: {
    params: z.object({
      issueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'number', example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Issues returned',
      content: { 'application/json': { schema: IssueSchema } },
    },
  },
})

export const deleteIssueIssueIdRoute = createRoute({
  method: 'delete',
  path: '/issue/{issueId}',
  tags: ['issue'],
  summary: 'Delete issue',
  description:
    'Removes an issue. If the user has the `MANAGE_ISSUES` permission, any issue can be removed. Otherwise, only a users own issues can be removed.',
  request: {
    params: z.object({
      issueId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'issueId',
            description: 'Issue ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Succesfully removed issue' } },
})

export const postIssueIssueIdCommentRoute = createRoute({
  method: 'post',
  path: '/issue/{issueId}/comment',
  tags: ['issue'],
  summary: 'Create a comment',
  description: 'Creates a comment and returns associated issue in JSON format.\n',
  request: {
    params: z.object({
      issueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'number', example: 1 },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Issue returned with new comment',
      content: { 'application/json': { schema: IssueSchema } },
    },
  },
})

export const getIssueCommentCommentIdRoute = createRoute({
  method: 'get',
  path: '/issueComment/{commentId}',
  tags: ['issue'],
  summary: 'Get issue comment',
  description: 'Returns a single issue comment in JSON format.\n',
  request: {
    params: z.object({
      commentId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string', example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Comment returned',
      content: { 'application/json': { schema: IssueCommentSchema } },
    },
  },
})

export const putIssueCommentCommentIdRoute = createRoute({
  method: 'put',
  path: '/issueComment/{commentId}',
  tags: ['issue'],
  summary: 'Update issue comment',
  description: 'Updates and returns a single issue comment in JSON format.\n',
  request: {
    params: z.object({
      commentId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string', example: 1 },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Comment updated',
      content: { 'application/json': { schema: IssueCommentSchema } },
    },
  },
})

export const deleteIssueCommentCommentIdRoute = createRoute({
  method: 'delete',
  path: '/issueComment/{commentId}',
  tags: ['issue'],
  summary: 'Delete issue comment',
  description:
    'Deletes an issue comment. Only users with `MANAGE_ISSUES` or the user who created the comment can perform this action.\n',
  request: {
    params: z.object({
      commentId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'commentId',
            description: 'Issue Comment ID',
            required: true,
            example: '1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Succesfully removed issue comment' } },
})

export const postIssueIssueIdStatusRoute = createRoute({
  method: 'post',
  path: '/issue/{issueId}/{status}',
  tags: ['issue'],
  summary: "Update an issue's status",
  description:
    "Updates an issue's status to approved or declined. Also returns the issue in a JSON object.\n\nRequires the `MANAGE_ISSUES` permission or `ADMIN`.\n",
  request: {
    params: z.object({
      issueId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'issueId',
            description: 'Issue ID',
            required: true,
            schema: { type: 'string', example: '1' },
          },
          example: '1',
        }),
      status: z
        .enum(['open', 'resolved'])
        .openapi({
          param: {
            in: 'path',
            name: 'status',
            description: 'New status',
            required: true,
            schema: { type: 'string', enum: ['open', 'resolved'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Issue status changed',
      content: { 'application/json': { schema: IssueSchema } },
    },
  },
})

export const getKeywordKeywordIdRoute = createRoute({
  method: 'get',
  path: '/keyword/{keywordId}',
  tags: ['other'],
  summary: 'Get keyword',
  description: 'Returns a single keyword in JSON format.\n',
  request: {
    params: z.object({
      keywordId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'keywordId',
            required: true,
            schema: { type: 'number', example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Keyword returned',
      content: { 'application/json': { schema: KeywordSchema } },
    },
  },
})

export const getWatchprovidersRegionsRoute = createRoute({
  method: 'get',
  path: '/watchproviders/regions',
  tags: ['other'],
  summary: 'Get watch provider regions',
  description: 'Returns a list of all available watch provider regions.\n',
  responses: {
    200: {
      description: 'Watch provider regions returned',
      content: { 'application/json': { schema: z.array(WatchProviderRegionSchema) } },
    },
  },
})

export const getWatchprovidersMoviesRoute = createRoute({
  method: 'get',
  path: '/watchproviders/movies',
  tags: ['other'],
  summary: 'Get watch provider movies',
  description: 'Returns a list of all available watch providers for movies.\n',
  request: {
    query: z.object({
      watchRegion: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'watchRegion',
            required: true,
            schema: { type: 'string', example: 'US' },
          },
          example: 'US',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Watch providers for movies returned',
      content: { 'application/json': { schema: z.array(WatchProviderDetailsSchema) } },
    },
  },
})

export const getWatchprovidersTvRoute = createRoute({
  method: 'get',
  path: '/watchproviders/tv',
  tags: ['other'],
  summary: 'Get watch provider series',
  description: 'Returns a list of all available watch providers for series.\n',
  request: {
    query: z.object({
      watchRegion: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'watchRegion',
            required: true,
            schema: { type: 'string', example: 'US' },
          },
          example: 'US',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Watch providers for series returned',
      content: { 'application/json': { schema: z.array(WatchProviderDetailsSchema) } },
    },
  },
})
