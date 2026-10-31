import { createRoute, z } from '@hono/zod-openapi'

const SelectOptionSchema = z
  .strictObject({
    value: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    hint: z.string().nullable().exactOptional(),
    dividerAfter: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectOption')

const PrivacyLevelSchema = z
  .enum(['normal', 'password', 'apiKey', 'userName'])
  .openapi('PrivacyLevel')

const FieldSchema = z
  .strictObject({
    order: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    label: z.string().nullable().exactOptional(),
    unit: z.string().nullable().exactOptional(),
    helpText: z.string().nullable().exactOptional(),
    helpTextWarning: z.string().nullable().exactOptional(),
    helpLink: z.string().nullable().exactOptional(),
    value: z.any().exactOptional(),
    type: z.string().nullable().exactOptional(),
    advanced: z.boolean().exactOptional(),
    selectOptions: z.array(SelectOptionSchema).nullable().exactOptional(),
    selectOptionsProviderAction: z.string().nullable().exactOptional(),
    section: z.string().nullable().exactOptional(),
    hidden: z.string().nullable().exactOptional(),
    privacy: PrivacyLevelSchema.exactOptional(),
    placeholder: z.string().nullable().exactOptional(),
    isFloat: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Field')

type CustomFormatSpecificationSchemaType = {
  id?: number
  name?: string | null
  implementation?: string | null
  implementationName?: string | null
  infoLink?: string | null
  negate?: boolean
  required?: boolean
  fields?: z.infer<typeof FieldSchema>[] | null
  presets?: CustomFormatSpecificationSchemaType[] | null
}

const ProviderMessageTypeSchema = z
  .enum(['info', 'warning', 'error'])
  .openapi('ProviderMessageType')

const ProviderMessageSchema = z
  .strictObject({
    message: z.string().nullable().exactOptional(),
    type: ProviderMessageTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderMessage')

const DownloadProtocolSchema = z.enum(['unknown', 'usenet', 'torrent']).openapi('DownloadProtocol')

type DownloadClientResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: DownloadClientResourceType[] | null
  enable?: boolean
  protocol?: z.infer<typeof DownloadProtocolSchema>
  priority?: number
  removeCompletedDownloads?: boolean
  removeFailedDownloads?: boolean
}

type ImportListExclusionResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: ImportListExclusionResourceType[] | null
  tmdbId?: number
  movieTitle?: string | null
  movieYear?: number
}

const MonitorTypesSchema = z
  .enum(['movieOnly', 'movieAndCollection', 'none'])
  .openapi('MonitorTypes')

const MovieStatusTypeSchema = z
  .enum(['tba', 'announced', 'inCinemas', 'released', 'deleted'])
  .openapi('MovieStatusType')

const ImportListTypeSchema = z
  .enum(['program', 'tmdb', 'trakt', 'plex', 'simkl', 'other', 'advanced'])
  .openapi('ImportListType')

type ImportListResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: ImportListResourceType[] | null
  enabled?: boolean
  enableAuto?: boolean
  monitor?: z.infer<typeof MonitorTypesSchema>
  rootFolderPath?: string | null
  qualityProfileId?: number
  searchOnAdd?: boolean
  minimumAvailability?: z.infer<typeof MovieStatusTypeSchema>
  listType?: z.infer<typeof ImportListTypeSchema>
  listOrder?: number
  minRefreshInterval?: string
}

type IndexerResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: IndexerResourceType[] | null
  enableRss?: boolean
  enableAutomaticSearch?: boolean
  enableInteractiveSearch?: boolean
  supportsRss?: boolean
  supportsSearch?: boolean
  protocol?: z.infer<typeof DownloadProtocolSchema>
  priority?: number
  downloadClientId?: number
}

type MetadataResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: MetadataResourceType[] | null
  enable?: boolean
}

type NotificationResourceType = {
  id?: number
  name?: string | null
  fields?: z.infer<typeof FieldSchema>[] | null
  implementationName?: string | null
  implementation?: string | null
  configContract?: string | null
  infoLink?: string | null
  message?: z.infer<typeof ProviderMessageSchema>
  tags?: number[] | null
  presets?: NotificationResourceType[] | null
  link?: string | null
  onGrab?: boolean
  onDownload?: boolean
  onUpgrade?: boolean
  onRename?: boolean
  onMovieAdded?: boolean
  onMovieDelete?: boolean
  onMovieFileDelete?: boolean
  onMovieFileDeleteForUpgrade?: boolean
  onHealthIssue?: boolean
  includeHealthWarnings?: boolean
  onHealthRestored?: boolean
  onApplicationUpdate?: boolean
  onManualInteractionRequired?: boolean
  supportsOnGrab?: boolean
  supportsOnDownload?: boolean
  supportsOnUpgrade?: boolean
  supportsOnRename?: boolean
  supportsOnMovieAdded?: boolean
  supportsOnMovieDelete?: boolean
  supportsOnMovieFileDelete?: boolean
  supportsOnMovieFileDeleteForUpgrade?: boolean
  supportsOnHealthIssue?: boolean
  supportsOnHealthRestored?: boolean
  supportsOnApplicationUpdate?: boolean
  supportsOnManualInteractionRequired?: boolean
  testCommand?: string | null
}

const QualitySourceSchema = z
  .enum([
    'unknown',
    'cam',
    'telesync',
    'telecine',
    'workprint',
    'dvd',
    'tv',
    'webdl',
    'webrip',
    'bluray',
  ])
  .openapi('QualitySource')

const ModifierSchema = z
  .enum(['none', 'regional', 'screener', 'rawhd', 'brdisk', 'remux'])
  .openapi('Modifier')

const QualitySchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    source: QualitySourceSchema.exactOptional(),
    resolution: z.int32().exactOptional(),
    modifier: ModifierSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Quality')

type QualityProfileQualityItemResourceType = {
  id?: number
  name?: string | null
  quality?: z.infer<typeof QualitySchema>
  items?: QualityProfileQualityItemResourceType[] | null
  allowed?: boolean
}

const AddMovieMethodSchema = z.enum(['manual', 'list', 'collection']).openapi('AddMovieMethod')

const AddMovieOptionsSchema = z
  .strictObject({
    ignoreEpisodesWithFiles: z.boolean().exactOptional(),
    ignoreEpisodesWithoutFiles: z.boolean().exactOptional(),
    monitor: MonitorTypesSchema.exactOptional(),
    searchForMovie: z.boolean().exactOptional(),
    addMethod: AddMovieMethodSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddMovieOptions')

const SourceTypeSchema = z.enum(['tmdb', 'mappings', 'user', 'indexer']).openapi('SourceType')

const AlternativeTitleSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    sourceType: SourceTypeSchema.exactOptional(),
    movieMetadataId: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlternativeTitle')

const AlternativeTitleResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    sourceType: SourceTypeSchema.exactOptional(),
    movieMetadataId: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlternativeTitleResource')

const ApiInfoResourceSchema = z
  .strictObject({
    current: z.string().nullable().exactOptional(),
    deprecated: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiInfoResource')

const ApplyTagsSchema = z.enum(['add', 'remove', 'replace']).openapi('ApplyTags')

const AuthenticationRequiredTypeSchema = z
  .enum(['enabled', 'disabledForLocalAddresses', 'disabledForLocalhost'])
  .openapi('AuthenticationRequiredType')

const AuthenticationTypeSchema = z
  .enum(['none', 'basic', 'forms', 'external', 'oidc'])
  .openapi('AuthenticationType')

const AutoTaggingSpecificationSchemaSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    implementation: z.string().nullable().exactOptional(),
    implementationName: z.string().nullable().exactOptional(),
    negate: z.boolean().exactOptional(),
    required: z.boolean().exactOptional(),
    fields: z.array(FieldSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AutoTaggingSpecificationSchema')

const AutoTaggingResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    removeTagsAutomatically: z.boolean().exactOptional(),
    tags: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
    specifications: z.array(AutoTaggingSpecificationSchemaSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AutoTaggingResource')

const BackupTypeSchema = z.enum(['scheduled', 'manual', 'update']).openapi('BackupType')

const BackupResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    type: BackupTypeSchema.exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    time: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BackupResource')

const BackupRestoreErrorResourceSchema = z
  .strictObject({ error: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BackupRestoreErrorResource')

const BackupRestoreResourceSchema = z
  .strictObject({ restartRequired: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('BackupRestoreResource')

const BlocklistBulkResourceSchema = z
  .strictObject({ ids: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BlocklistBulkResource')

const LanguageSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Language')

const RevisionSchema = z
  .strictObject({
    version: z.int32().exactOptional(),
    real: z.int32().exactOptional(),
    isRepack: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Revision')

const QualityModelSchema = z
  .strictObject({
    quality: QualitySchema.exactOptional(),
    revision: RevisionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QualityModel')

const CustomFormatSpecificationSchemaSchema: z.ZodType<CustomFormatSpecificationSchemaType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        negate: z.boolean().exactOptional(),
        required: z.boolean().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        presets: z.array(CustomFormatSpecificationSchemaSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('CustomFormatSpecificationSchema')

const CustomFormatResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    includeCustomFormatWhenRenaming: z.boolean().nullable().exactOptional(),
    specifications: z.array(CustomFormatSpecificationSchemaSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFormatResource')

const MediaCoverTypesSchema = z
  .enum(['unknown', 'poster', 'banner', 'fanart', 'screenshot', 'headshot', 'clearlogo'])
  .openapi('MediaCoverTypes')

const MediaCoverSchema = z
  .strictObject({
    coverType: MediaCoverTypesSchema.exactOptional(),
    url: z.string().nullable().exactOptional(),
    remoteUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaCover')

const RatingTypeSchema = z.enum(['user', 'critic']).openapi('RatingType')

const RatingChildSchema = z
  .strictObject({
    votes: z.int32().exactOptional(),
    value: z.float64().exactOptional(),
    type: RatingTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RatingChild')

const RatingsSchema = z
  .strictObject({
    imdb: RatingChildSchema.exactOptional(),
    tmdb: RatingChildSchema.exactOptional(),
    metacritic: RatingChildSchema.exactOptional(),
    rottenTomatoes: RatingChildSchema.exactOptional(),
    trakt: RatingChildSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Ratings')

const MediaInfoResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    audioBitrate: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    audioChannels: z.float64().exactOptional(),
    audioCodec: z.string().nullable().exactOptional(),
    audioLanguages: z.string().nullable().exactOptional(),
    audioStreamCount: z.int32().exactOptional(),
    videoBitDepth: z.int32().exactOptional(),
    videoBitrate: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    videoCodec: z.string().nullable().exactOptional(),
    videoFps: z.float64().exactOptional(),
    videoDynamicRange: z.string().nullable().exactOptional(),
    videoDynamicRangeType: z.string().nullable().exactOptional(),
    resolution: z.string().nullable().exactOptional(),
    runTime: z.string().nullable().exactOptional(),
    scanType: z.string().nullable().exactOptional(),
    subtitles: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaInfoResource')

const MovieFileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieId: z.int32().exactOptional(),
    relativePath: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    dateAdded: z.iso.datetime({ offset: true }).exactOptional(),
    sceneName: z.string().nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    edition: z.string().nullable().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().nullable().exactOptional(),
    indexerFlags: z.int32().nullable().exactOptional(),
    mediaInfo: MediaInfoResourceSchema.exactOptional(),
    originalFilePath: z.string().nullable().exactOptional(),
    qualityCutoffNotMet: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieFileResource')

const MovieCollectionResourceSchema = z
  .strictObject({ title: z.string().nullable().exactOptional(), tmdbId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('MovieCollectionResource')

const MovieStatisticsResourceSchema = z
  .strictObject({
    movieFileCount: z.int32().exactOptional(),
    sizeOnDisk: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    releaseGroups: z.array(z.string()).nullable().exactOptional(),
    movieFileQualities: z.array(QualitySchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieStatisticsResource')

const MovieResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    originalTitle: z.string().nullable().exactOptional(),
    originalLanguage: LanguageSchema.exactOptional(),
    alternateTitles: z.array(AlternativeTitleResourceSchema).nullable().exactOptional(),
    secondaryYear: z.int32().nullable().exactOptional(),
    secondaryYearSourceId: z.int32().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    sizeOnDisk: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    status: MovieStatusTypeSchema.exactOptional(),
    overview: z.string().nullable().exactOptional(),
    inCinemas: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    physicalRelease: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    digitalRelease: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    physicalReleaseNote: z.string().nullable().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
    remotePoster: z.string().nullable().exactOptional(),
    year: z.int32().exactOptional(),
    youTubeTrailerId: z.string().nullable().exactOptional(),
    studio: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    qualityProfileId: z.int32().exactOptional(),
    hasFile: z.boolean().nullable().exactOptional(),
    movieFileId: z.int32().exactOptional(),
    monitored: z.boolean().exactOptional(),
    minimumAvailability: MovieStatusTypeSchema.exactOptional(),
    isAvailable: z.boolean().exactOptional(),
    folderName: z.string().nullable().exactOptional(),
    runtime: z.int32().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
    imdbId: z.string().nullable().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    titleSlug: z.string().nullable().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    folder: z.string().nullable().exactOptional(),
    certification: z.string().nullable().exactOptional(),
    genres: z.array(z.string()).nullable().exactOptional(),
    keywords: z.array(z.string()).nullable().exactOptional(),
    tags: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
    added: z.iso.datetime({ offset: true }).exactOptional(),
    addOptions: AddMovieOptionsSchema.exactOptional(),
    ratings: RatingsSchema.exactOptional(),
    movieFile: MovieFileResourceSchema.exactOptional(),
    collection: MovieCollectionResourceSchema.exactOptional(),
    popularity: z.float32().exactOptional(),
    lastSearchTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    statistics: MovieStatisticsResourceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieResource')

const BlocklistResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieId: z.int32().exactOptional(),
    sourceTitle: z.string().nullable().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    protocol: DownloadProtocolSchema.exactOptional(),
    indexer: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    movie: MovieResourceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlocklistResource')

const SortDirectionSchema = z.enum(['default', 'ascending', 'descending']).openapi('SortDirection')

const BlocklistResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(BlocklistResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlocklistResourcePagingResource')

const CalendarReleaseTypeSchema = z
  .enum(['cinemaRelease', 'digitalRelease', 'physicalRelease'])
  .openapi('CalendarReleaseType')

const CertificateValidationTypeSchema = z
  .enum(['enabled', 'disabledForLocalAddresses', 'disabled'])
  .openapi('CertificateValidationType')

const CollectionMovieResourceSchema = z
  .strictObject({
    tmdbId: z.int32().exactOptional(),
    imdbId: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    status: MovieStatusTypeSchema.exactOptional(),
    overview: z.string().nullable().exactOptional(),
    runtime: z.int32().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    year: z.int32().exactOptional(),
    ratings: RatingsSchema.exactOptional(),
    genres: z.array(z.string()).nullable().exactOptional(),
    folder: z.string().nullable().exactOptional(),
    isExisting: z.boolean().exactOptional(),
    isExcluded: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionMovieResource')

const CollectionResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    overview: z.string().nullable().exactOptional(),
    monitored: z.boolean().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    qualityProfileId: z.int32().exactOptional(),
    searchOnAdd: z.boolean().exactOptional(),
    minimumAvailability: MovieStatusTypeSchema.exactOptional(),
    movies: z.array(CollectionMovieResourceSchema).nullable().exactOptional(),
    missingMovies: z.int32().exactOptional(),
    tags: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionResource')

const CollectionUpdateResourceSchema = z
  .strictObject({
    collectionIds: z.array(z.int32()).nullable().exactOptional(),
    monitored: z.boolean().nullable().exactOptional(),
    monitorMovies: z.boolean().nullable().exactOptional(),
    searchOnAdd: z.boolean().nullable().exactOptional(),
    qualityProfileId: z.int32().nullable().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    minimumAvailability: MovieStatusTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionUpdateResource')

const ColonReplacementFormatSchema = z
  .enum(['delete', 'dash', 'spaceDash', 'spaceDashSpace', 'smart'])
  .openapi('ColonReplacementFormat')

const CommandTriggerSchema = z
  .enum(['unspecified', 'manual', 'scheduled'])
  .openapi('CommandTrigger')

const CommandSchema = z
  .strictObject({
    sendUpdatesToClient: z.boolean().exactOptional(),
    updateScheduledTask: z.boolean().exactOptional().openapi({ readOnly: true }),
    completionMessage: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    requiresDiskAccess: z.boolean().exactOptional().openapi({ readOnly: true }),
    isExclusive: z.boolean().exactOptional().openapi({ readOnly: true }),
    isTypeExclusive: z.boolean().exactOptional().openapi({ readOnly: true }),
    isLongRunning: z.boolean().exactOptional().openapi({ readOnly: true }),
    name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    lastExecutionTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastStartTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    trigger: CommandTriggerSchema.exactOptional(),
    suppressMessages: z.boolean().exactOptional(),
    clientUserAgent: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Command')

const CommandPrioritySchema = z.enum(['normal', 'high', 'low']).openapi('CommandPriority')

const CommandStatusSchema = z
  .enum(['queued', 'started', 'completed', 'failed', 'aborted', 'cancelled', 'orphaned'])
  .openapi('CommandStatus')

const CommandResultSchema = z
  .enum(['unknown', 'successful', 'unsuccessful'])
  .openapi('CommandResult')

const CommandResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    commandName: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    body: CommandSchema.exactOptional(),
    priority: CommandPrioritySchema.exactOptional(),
    status: CommandStatusSchema.exactOptional(),
    result: CommandResultSchema.exactOptional(),
    queued: z.iso.datetime({ offset: true }).exactOptional(),
    started: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    ended: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    duration: z.string().nullable().exactOptional(),
    exception: z.string().nullable().exactOptional(),
    trigger: CommandTriggerSchema.exactOptional(),
    clientUserAgent: z.string().nullable().exactOptional(),
    stateChangeTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    sendUpdatesToClient: z.boolean().exactOptional(),
    updateScheduledTask: z.boolean().exactOptional(),
    lastExecutionTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommandResource')

const CreditTypeSchema = z.enum(['cast', 'crew']).openapi('CreditType')

const CreditResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    personName: z.string().nullable().exactOptional(),
    creditTmdbId: z.string().nullable().exactOptional(),
    personTmdbId: z.int32().exactOptional(),
    movieMetadataId: z.int32().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    department: z.string().nullable().exactOptional(),
    job: z.string().nullable().exactOptional(),
    character: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    type: CreditTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreditResource')

const CustomFilterResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    type: z.string().nullable().exactOptional(),
    label: z.string().nullable().exactOptional(),
    filters: z.array(z.record(z.string(), z.any())).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFilterResource')

const CustomFormatBulkResourceSchema = z
  .strictObject({
    ids: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
    includeCustomFormatWhenRenaming: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomFormatBulkResource')

const DatabaseTypeSchema = z.enum(['sqLite', 'postgreSQL']).openapi('DatabaseType')

const DelayProfileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    enableUsenet: z.boolean().exactOptional(),
    enableTorrent: z.boolean().exactOptional(),
    preferredProtocol: DownloadProtocolSchema.exactOptional(),
    usenetDelay: z.int32().exactOptional(),
    torrentDelay: z.int32().exactOptional(),
    bypassIfHighestQuality: z.boolean().exactOptional(),
    bypassIfAboveCustomFormatScore: z.boolean().exactOptional(),
    minimumCustomFormatScore: z.int32().exactOptional(),
    order: z.int32().exactOptional(),
    tags: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DelayProfileResource')

const DiskSpaceResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
    label: z.string().nullable().exactOptional(),
    freeSpace: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    totalSpace: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('DiskSpaceResource')

const DownloadClientBulkResourceSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    enable: z.boolean().nullable().exactOptional(),
    priority: z.int32().nullable().exactOptional(),
    removeCompletedDownloads: z.boolean().nullable().exactOptional(),
    removeFailedDownloads: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadClientBulkResource')

const DownloadClientConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    downloadClientWorkingFolders: z.string().nullable().exactOptional(),
    enableCompletedDownloadHandling: z.boolean().exactOptional(),
    checkForFinishedDownloadInterval: z.int32().exactOptional(),
    autoRedownloadFailed: z.boolean().exactOptional(),
    autoRedownloadFailedFromInteractiveSearch: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadClientConfigResource')

const DownloadClientResourceSchema: z.ZodType<DownloadClientResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(DownloadClientResourceSchema).nullable().exactOptional(),
        enable: z.boolean().exactOptional(),
        protocol: DownloadProtocolSchema.exactOptional(),
        priority: z.int32().exactOptional(),
        removeCompletedDownloads: z.boolean().exactOptional(),
        removeFailedDownloads: z.boolean().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('DownloadClientResource')

const ExtraFileTypeSchema = z.enum(['subtitle', 'metadata', 'other']).openapi('ExtraFileType')

const ExtraFileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieId: z.int32().exactOptional(),
    movieFileId: z.int32().nullable().exactOptional(),
    relativePath: z.string().nullable().exactOptional(),
    extension: z.string().nullable().exactOptional(),
    languageTags: z.array(z.string()).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: ExtraFileTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtraFileResource')

const FileDateTypeSchema = z.enum(['none', 'cinemas', 'release']).openapi('FileDateType')

const FileSystemEntityTypeSchema = z
  .enum(['parent', 'drive', 'folder', 'file'])
  .openapi('FileSystemEntityType')

const FileSystemMediaFileResourceSchema = z
  .strictObject({
    path: z.string().nullable().exactOptional(),
    relativePath: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileSystemMediaFileResource')

const FileSystemModelSchema = z
  .strictObject({
    type: FileSystemEntityTypeSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    extension: z.string().nullable().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    lastModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileSystemModel')

const FileSystemResultSchema = z
  .strictObject({
    parent: z.string().nullable().exactOptional(),
    directories: z.array(FileSystemModelSchema).nullable().exactOptional(),
    files: z.array(FileSystemModelSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileSystemResult')

const FileSystemTypeResourceSchema = z
  .strictObject({ type: FileSystemEntityTypeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FileSystemTypeResource')

const HealthCheckResultSchema = z
  .enum(['ok', 'notice', 'warning', 'error'])
  .openapi('HealthCheckResult')

const HealthResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    source: z.string().nullable().exactOptional(),
    type: HealthCheckResultSchema.exactOptional(),
    message: z.string().nullable().exactOptional(),
    wikiUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HealthResource')

const MovieHistoryEventTypeSchema = z
  .enum([
    'unknown',
    'grabbed',
    'downloadFolderImported',
    'downloadFailed',
    'movieFileDeleted',
    'movieFolderImported',
    'movieFileRenamed',
    'downloadIgnored',
  ])
  .openapi('MovieHistoryEventType')

const HistoryResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieId: z.int32().exactOptional(),
    sourceTitle: z.string().nullable().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    qualityCutoffNotMet: z.boolean().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    eventType: MovieHistoryEventTypeSchema.exactOptional(),
    data: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    movie: MovieResourceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryResource')

const HistoryResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(HistoryResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryResourcePagingResource')

const UpdateMechanismSchema = z
  .enum(['builtIn', 'script', 'external', 'apt', 'docker'])
  .openapi('UpdateMechanism')

const ProxyTypeSchema = z.enum(['http', 'socks4', 'socks5']).openapi('ProxyType')

const HostConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    bindAddress: z.string().nullable().exactOptional(),
    port: z.int32().exactOptional(),
    sslPort: z.int32().exactOptional(),
    enableSsl: z.boolean().exactOptional(),
    launchBrowser: z.boolean().exactOptional(),
    authenticationMethod: AuthenticationTypeSchema.exactOptional(),
    authenticationRequired: AuthenticationRequiredTypeSchema.exactOptional(),
    allowedHosts: z.string().nullable().exactOptional(),
    analyticsEnabled: z.boolean().exactOptional(),
    username: z.string().nullable().exactOptional(),
    password: z.string().nullable().exactOptional(),
    passwordConfirmation: z.string().nullable().exactOptional(),
    oidcAuthority: z.string().nullable().exactOptional(),
    oidcClientId: z.string().nullable().exactOptional(),
    oidcClientSecret: z.string().nullable().exactOptional(),
    oidcUserIdentifier: z.string().nullable().exactOptional(),
    oidcScopes: z.string().nullable().exactOptional(),
    logLevel: z.string().nullable().exactOptional(),
    logSizeLimit: z.int32().exactOptional(),
    consoleLogLevel: z.string().nullable().exactOptional(),
    branch: z.string().nullable().exactOptional(),
    apiKey: z.string().nullable().exactOptional(),
    sslCertPath: z.string().nullable().exactOptional(),
    sslKeyPath: z.string().nullable().exactOptional(),
    sslCertPassword: z.string().nullable().exactOptional(),
    urlBase: z.string().nullable().exactOptional(),
    trustedNetworks: z.string().nullable().exactOptional(),
    instanceName: z.string().nullable().exactOptional(),
    applicationUrl: z.string().nullable().exactOptional(),
    updateAutomatically: z.boolean().exactOptional(),
    updateMechanism: UpdateMechanismSchema.exactOptional(),
    updateScriptPath: z.string().nullable().exactOptional(),
    proxyEnabled: z.boolean().exactOptional(),
    proxyType: ProxyTypeSchema.exactOptional(),
    proxyHostname: z.string().nullable().exactOptional(),
    proxyPort: z.int32().exactOptional(),
    proxyUsername: z.string().nullable().exactOptional(),
    proxyPassword: z.string().nullable().exactOptional(),
    proxyBypassFilter: z.string().nullable().exactOptional(),
    proxyBypassLocalAddresses: z.boolean().exactOptional(),
    certificateValidation: CertificateValidationTypeSchema.exactOptional(),
    backupFolder: z.string().nullable().exactOptional(),
    backupInterval: z.int32().exactOptional(),
    backupRetention: z.int32().exactOptional(),
    trustCgnatIpAddresses: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HostConfigResource')

const ImportListBulkResourceSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    enabled: z.boolean().nullable().exactOptional(),
    enableAuto: z.boolean().nullable().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    qualityProfileId: z.int32().nullable().exactOptional(),
    minimumAvailability: MovieStatusTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListBulkResource')

const ImportListConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    listSyncLevel: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListConfigResource')

const ImportListExclusionBulkResourceSchema = z
  .strictObject({
    ids: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListExclusionBulkResource')

const ImportListExclusionResourceSchema: z.ZodType<ImportListExclusionResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(ImportListExclusionResourceSchema).nullable().exactOptional(),
        tmdbId: z.int32().exactOptional(),
        movieTitle: z.string().nullable().exactOptional(),
        movieYear: z.int32().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ImportListExclusionResource')

const ImportListExclusionResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(ImportListExclusionResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListExclusionResourcePagingResource')

const MovieTranslationSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieMetadataId: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
    overview: z.string().nullable().exactOptional(),
    language: LanguageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieTranslation')

const MovieMetadataSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    genres: z.array(z.string()).nullable().exactOptional(),
    keywords: z.array(z.string()).nullable().exactOptional(),
    inCinemas: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    physicalRelease: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    digitalRelease: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    certification: z.string().nullable().exactOptional(),
    year: z.int32().exactOptional(),
    ratings: RatingsSchema.exactOptional(),
    collectionTmdbId: z.int32().exactOptional(),
    collectionTitle: z.string().nullable().exactOptional(),
    lastInfoSync: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    runtime: z.int32().exactOptional(),
    website: z.string().nullable().exactOptional(),
    imdbId: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    status: MovieStatusTypeSchema.exactOptional(),
    overview: z.string().nullable().exactOptional(),
    alternativeTitles: z.array(AlternativeTitleSchema).nullable().exactOptional(),
    translations: z.array(MovieTranslationSchema).nullable().exactOptional(),
    secondaryYear: z.int32().nullable().exactOptional(),
    youTubeTrailerId: z.string().nullable().exactOptional(),
    studio: z.string().nullable().exactOptional(),
    originalTitle: z.string().nullable().exactOptional(),
    cleanOriginalTitle: z.string().nullable().exactOptional(),
    originalLanguage: LanguageSchema.exactOptional(),
    recommendations: z.array(z.int32()).nullable().exactOptional(),
    popularity: z.float32().exactOptional(),
    isRecentMovie: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('MovieMetadata')

const MovieCollectionSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    overview: z.string().nullable().exactOptional(),
    monitored: z.boolean().exactOptional(),
    qualityProfileId: z.int32().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    searchOnAdd: z.boolean().exactOptional(),
    minimumAvailability: MovieStatusTypeSchema.exactOptional(),
    lastInfoSync: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    added: z.iso.datetime({ offset: true }).exactOptional(),
    movies: z.array(MovieMetadataSchema).nullable().exactOptional(),
    tags: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieCollection')

const ImportListMoviesResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    sortTitle: z.string().nullable().exactOptional(),
    originalLanguage: LanguageSchema.exactOptional(),
    status: MovieStatusTypeSchema.exactOptional(),
    overview: z.string().nullable().exactOptional(),
    inCinemas: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    physicalRelease: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    digitalRelease: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
    website: z.string().nullable().exactOptional(),
    remotePoster: z.string().nullable().exactOptional(),
    year: z.int32().exactOptional(),
    youTubeTrailerId: z.string().nullable().exactOptional(),
    studio: z.string().nullable().exactOptional(),
    runtime: z.int32().exactOptional(),
    imdbId: z.string().nullable().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    folder: z.string().nullable().exactOptional(),
    certification: z.string().nullable().exactOptional(),
    popularity: z.float32().exactOptional(),
    genres: z.array(z.string()).nullable().exactOptional(),
    ratings: RatingsSchema.exactOptional(),
    collection: MovieCollectionSchema.exactOptional(),
    isExcluded: z.boolean().exactOptional(),
    isExisting: z.boolean().exactOptional(),
    isTrending: z.boolean().exactOptional(),
    isPopular: z.boolean().exactOptional(),
    isRecommendation: z.boolean().exactOptional(),
    lists: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListMoviesResource')

const ImportListResourceSchema: z.ZodType<ImportListResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(ImportListResourceSchema).nullable().exactOptional(),
        enabled: z.boolean().exactOptional(),
        enableAuto: z.boolean().exactOptional(),
        monitor: MonitorTypesSchema.exactOptional(),
        rootFolderPath: z.string().nullable().exactOptional(),
        qualityProfileId: z.int32().exactOptional(),
        searchOnAdd: z.boolean().exactOptional(),
        minimumAvailability: MovieStatusTypeSchema.exactOptional(),
        listType: ImportListTypeSchema.exactOptional(),
        listOrder: z.int32().exactOptional(),
        minRefreshInterval: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ImportListResource')

const RejectionTypeSchema = z.enum(['permanent', 'temporary']).openapi('RejectionType')

const ImportRejectionResourceSchema = z
  .strictObject({
    reason: z.string().nullable().exactOptional(),
    type: RejectionTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportRejectionResource')

const IndexerBulkResourceSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    enableRss: z.boolean().nullable().exactOptional(),
    enableAutomaticSearch: z.boolean().nullable().exactOptional(),
    enableInteractiveSearch: z.boolean().nullable().exactOptional(),
    priority: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerBulkResource')

const IndexerConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    minimumAge: z.int32().exactOptional(),
    maximumSize: z.int32().exactOptional(),
    retention: z.int32().exactOptional(),
    rssSyncInterval: z.int32().exactOptional(),
    preferIndexerFlags: z.boolean().exactOptional(),
    availabilityDelay: z.int32().exactOptional(),
    allowHardcodedSubs: z.boolean().exactOptional(),
    whitelistedHardcodedSubs: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndexerConfigResource')

const IndexerFlagResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    nameLower: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IndexerFlagResource')

const IndexerResourceSchema: z.ZodType<IndexerResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(IndexerResourceSchema).nullable().exactOptional(),
        enableRss: z.boolean().exactOptional(),
        enableAutomaticSearch: z.boolean().exactOptional(),
        enableInteractiveSearch: z.boolean().exactOptional(),
        supportsRss: z.boolean().exactOptional(),
        supportsSearch: z.boolean().exactOptional(),
        protocol: DownloadProtocolSchema.exactOptional(),
        priority: z.int32().exactOptional(),
        downloadClientId: z.int32().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('IndexerResource')

const LanguageResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    nameLower: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('LanguageResource')

const LocalizationLanguageResourceSchema = z
  .strictObject({ identifier: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalizationLanguageResource')

const LogFileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    filename: z.string().nullable().exactOptional(),
    lastWriteTime: z.iso.datetime({ offset: true }).exactOptional(),
    contentsUrl: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogFileResource')

const LogResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    time: z.iso.datetime({ offset: true }).exactOptional(),
    exception: z.string().nullable().exactOptional(),
    exceptionType: z.string().nullable().exactOptional(),
    level: z.string().nullable().exactOptional(),
    logger: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    method: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogResource')

const LogResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(LogResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogResourcePagingResource')

const ManualImportReprocessResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
    movieId: z.int32().exactOptional(),
    movie: MovieResourceSchema.exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    indexerFlags: z.int32().exactOptional(),
    rejections: z.array(ImportRejectionResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManualImportReprocessResource')

const ManualImportResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
    relativePath: z.string().nullable().exactOptional(),
    folderName: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    movie: MovieResourceSchema.exactOptional(),
    movieFileId: z.int32().nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    qualityWeight: z.int32().exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    indexerFlags: z.int32().exactOptional(),
    rejections: z.array(ImportRejectionResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManualImportResource')

const ProperDownloadTypesSchema = z
  .enum(['preferAndUpgrade', 'doNotUpgrade', 'doNotPrefer'])
  .openapi('ProperDownloadTypes')

const RescanAfterRefreshTypeSchema = z
  .enum(['always', 'afterManual', 'never'])
  .openapi('RescanAfterRefreshType')

const MediaManagementConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    autoUnmonitorPreviouslyDownloadedMovies: z.boolean().exactOptional(),
    recycleBin: z.string().nullable().exactOptional(),
    recycleBinCleanupDays: z.int32().exactOptional(),
    downloadPropersAndRepacks: ProperDownloadTypesSchema.exactOptional(),
    createEmptyMovieFolders: z.boolean().exactOptional(),
    deleteEmptyFolders: z.boolean().exactOptional(),
    fileDate: FileDateTypeSchema.exactOptional(),
    rescanAfterRefresh: RescanAfterRefreshTypeSchema.exactOptional(),
    autoRenameFolders: z.boolean().exactOptional(),
    pathsDefaultStatic: z.boolean().exactOptional(),
    setPermissionsLinux: z.boolean().exactOptional(),
    chmodFolder: z.string().nullable().exactOptional(),
    chownGroup: z.string().nullable().exactOptional(),
    skipFreeSpaceCheckWhenImporting: z.boolean().exactOptional(),
    minimumFreeSpaceWhenImporting: z.int32().exactOptional(),
    copyUsingHardlinks: z.boolean().exactOptional(),
    useScriptImport: z.boolean().exactOptional(),
    scriptImportPath: z.string().nullable().exactOptional(),
    importExtraFiles: z.boolean().exactOptional(),
    extraFileExtensions: z.string().nullable().exactOptional(),
    enableMediaInfo: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaManagementConfigResource')

const TMDbCountryCodeSchema = z
  .enum(['au', 'br', 'ca', 'fr', 'de', 'gb', 'in', 'ie', 'it', 'nz', 'ro', 'es', 'us'])
  .openapi('TMDbCountryCode')

const MetadataConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    certificationCountry: TMDbCountryCodeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataConfigResource')

const MetadataResourceSchema: z.ZodType<MetadataResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(MetadataResourceSchema).nullable().exactOptional(),
        enable: z.boolean().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('MetadataResource')

const MovieEditorResourceSchema = z
  .strictObject({
    movieIds: z.array(z.int32()).nullable().exactOptional(),
    monitored: z.boolean().nullable().exactOptional(),
    qualityProfileId: z.int32().nullable().exactOptional(),
    minimumAvailability: MovieStatusTypeSchema.exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    moveFiles: z.boolean().exactOptional(),
    deleteFiles: z.boolean().exactOptional(),
    addImportExclusion: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieEditorResource')

const MovieFileListResourceSchema = z
  .strictObject({
    movieFileIds: z.array(z.int32()).nullable().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    edition: z.string().nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    sceneName: z.string().nullable().exactOptional(),
    indexerFlags: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieFileListResource')

const MovieFolderResourceSchema = z
  .strictObject({ folder: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('MovieFolderResource')

const MovieResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(MovieResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MovieResourcePagingResource')

const MovieRuntimeFormatTypeSchema = z
  .enum(['hoursMinutes', 'minutes'])
  .openapi('MovieRuntimeFormatType')

const NamingConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    renameMovies: z.boolean().exactOptional(),
    replaceIllegalCharacters: z.boolean().exactOptional(),
    colonReplacementFormat: ColonReplacementFormatSchema.exactOptional(),
    standardMovieFormat: z.string().nullable().exactOptional(),
    movieFolderFormat: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NamingConfigResource')

const NamingExampleResourceSchema = z
  .strictObject({
    movieExample: z.string().nullable().exactOptional(),
    movieFolderExample: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NamingExampleResource')

const NotificationResourceSchema: z.ZodType<NotificationResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        fields: z.array(FieldSchema).nullable().exactOptional(),
        implementationName: z.string().nullable().exactOptional(),
        implementation: z.string().nullable().exactOptional(),
        configContract: z.string().nullable().exactOptional(),
        infoLink: z.string().nullable().exactOptional(),
        message: ProviderMessageSchema.exactOptional(),
        tags: z
          .array(z.int32())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .nullable()
          .exactOptional(),
        presets: z.array(NotificationResourceSchema).nullable().exactOptional(),
        link: z.string().nullable().exactOptional(),
        onGrab: z.boolean().exactOptional(),
        onDownload: z.boolean().exactOptional(),
        onUpgrade: z.boolean().exactOptional(),
        onRename: z.boolean().exactOptional(),
        onMovieAdded: z.boolean().exactOptional(),
        onMovieDelete: z.boolean().exactOptional(),
        onMovieFileDelete: z.boolean().exactOptional(),
        onMovieFileDeleteForUpgrade: z.boolean().exactOptional(),
        onHealthIssue: z.boolean().exactOptional(),
        includeHealthWarnings: z.boolean().exactOptional(),
        onHealthRestored: z.boolean().exactOptional(),
        onApplicationUpdate: z.boolean().exactOptional(),
        onManualInteractionRequired: z.boolean().exactOptional(),
        supportsOnGrab: z.boolean().exactOptional(),
        supportsOnDownload: z.boolean().exactOptional(),
        supportsOnUpgrade: z.boolean().exactOptional(),
        supportsOnRename: z.boolean().exactOptional(),
        supportsOnMovieAdded: z.boolean().exactOptional(),
        supportsOnMovieDelete: z.boolean().exactOptional(),
        supportsOnMovieFileDelete: z.boolean().exactOptional(),
        supportsOnMovieFileDeleteForUpgrade: z.boolean().exactOptional(),
        supportsOnHealthIssue: z.boolean().exactOptional(),
        supportsOnHealthRestored: z.boolean().exactOptional(),
        supportsOnApplicationUpdate: z.boolean().exactOptional(),
        supportsOnManualInteractionRequired: z.boolean().exactOptional(),
        testCommand: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('NotificationResource')

const ParsedMovieInfoSchema = z
  .strictObject({
    movieTitles: z.array(z.string()).nullable().exactOptional(),
    originalTitle: z.string().nullable().exactOptional(),
    releaseTitle: z.string().nullable().exactOptional(),
    simpleReleaseTitle: z.string().nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    releaseHash: z.string().nullable().exactOptional(),
    edition: z.string().nullable().exactOptional(),
    year: z.int32().exactOptional(),
    imdbId: z.string().nullable().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    hardcodedSubs: z.string().nullable().exactOptional(),
    movieTitle: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    primaryMovieTitle: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ParsedMovieInfo')

const ParseResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    parsedMovieInfo: ParsedMovieInfoSchema.exactOptional(),
    movie: MovieResourceSchema.exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParseResource')

const PingResourceSchema = z
  .strictObject({ status: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PingResource')

const ProblemDetailsSchema = z
  .object({
    type: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    detail: z.string().nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
  })
  .catchall(z.any())
  .openapi('ProblemDetails')

const ProfileFormatItemResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    format: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    score: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileFormatItemResource')

const SeveritySchema = z.enum(['error', 'warning', 'info']).openapi('Severity')

const ValidationFailureSchema = z
  .strictObject({
    propertyName: z.string().nullable().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    attemptedValue: z.any().exactOptional(),
    customState: z.any().exactOptional(),
    severity: SeveritySchema.exactOptional(),
    errorCode: z.string().nullable().exactOptional(),
    formattedMessageArguments: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true }),
    formattedMessagePlaceholderValues: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidationFailure')

const ProviderTestAllResultSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    isValid: z.boolean().exactOptional().openapi({ readOnly: true }),
    validationFailures: z.array(ValidationFailureSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderTestAllResult')

const QualityDefinitionLimitsResourceSchema = z
  .strictObject({ min: z.int32().exactOptional(), max: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('QualityDefinitionLimitsResource')

const QualityDefinitionResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    quality: QualitySchema.exactOptional(),
    title: z.string().nullable().exactOptional(),
    weight: z.int32().exactOptional(),
    minSize: z.float64().nullable().exactOptional(),
    maxSize: z.float64().nullable().exactOptional(),
    preferredSize: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QualityDefinitionResource')

const QualityProfileQualityItemResourceSchema: z.ZodType<QualityProfileQualityItemResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        quality: QualitySchema.exactOptional(),
        items: z.array(QualityProfileQualityItemResourceSchema).nullable().exactOptional(),
        allowed: z.boolean().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('QualityProfileQualityItemResource')

const QualityProfileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    upgradeAllowed: z.boolean().exactOptional(),
    cutoff: z.int32().exactOptional(),
    items: z.array(QualityProfileQualityItemResourceSchema).nullable().exactOptional(),
    minFormatScore: z.int32().exactOptional(),
    cutoffFormatScore: z.int32().exactOptional(),
    minUpgradeFormatScore: z.int32().exactOptional(),
    formatItems: z.array(ProfileFormatItemResourceSchema).nullable().exactOptional(),
    language: LanguageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QualityProfileResource')

const QueueBulkResourceSchema = z
  .strictObject({ ids: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueueBulkResource')

const QueueStatusSchema = z
  .enum([
    'unknown',
    'queued',
    'paused',
    'downloading',
    'completed',
    'failed',
    'warning',
    'delay',
    'downloadClientUnavailable',
    'fallback',
  ])
  .openapi('QueueStatus')

const TrackedDownloadStatusSchema = z
  .enum(['ok', 'warning', 'error'])
  .openapi('TrackedDownloadStatus')

const TrackedDownloadStateSchema = z
  .enum([
    'downloading',
    'importBlocked',
    'importPending',
    'importing',
    'imported',
    'failedPending',
    'failed',
    'ignored',
  ])
  .openapi('TrackedDownloadState')

const TrackedDownloadStatusMessageSchema = z
  .strictObject({
    title: z.string().nullable().exactOptional(),
    messages: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackedDownloadStatusMessage')

const QueueResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieId: z.int32().nullable().exactOptional(),
    movie: MovieResourceSchema.exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    size: z.float64().exactOptional(),
    title: z.string().nullable().exactOptional(),
    estimatedCompletionTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    added: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    status: QueueStatusSchema.exactOptional(),
    trackedDownloadStatus: TrackedDownloadStatusSchema.exactOptional(),
    trackedDownloadState: TrackedDownloadStateSchema.exactOptional(),
    statusMessages: z.array(TrackedDownloadStatusMessageSchema).nullable().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    protocol: DownloadProtocolSchema.exactOptional(),
    downloadClient: z.string().nullable().exactOptional(),
    downloadClientHasPostImportCategory: z.boolean().exactOptional(),
    indexer: z.string().nullable().exactOptional(),
    outputPath: z.string().nullable().exactOptional(),
    sizeleft: z.float64().exactOptional().openapi({ deprecated: true }),
    timeleft: z.string().nullable().exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('QueueResource')

const QueueResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(QueueResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueueResourcePagingResource')

const QueueStatusResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
    count: z.int32().exactOptional(),
    unknownCount: z.int32().exactOptional(),
    errors: z.boolean().exactOptional(),
    warnings: z.boolean().exactOptional(),
    unknownErrors: z.boolean().exactOptional(),
    unknownWarnings: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueueStatusResource')

const ReleaseHistoryResourceSchema = z
  .strictObject({
    grabbed: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    failed: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseHistoryResource')

const ReleaseProfileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
    required: z.any().exactOptional(),
    ignored: z.any().exactOptional(),
    indexerId: z.int32().exactOptional(),
    tags: z
      .array(z.int32())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseProfileResource')

const ReleaseResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    guid: z.string().nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    history: ReleaseHistoryResourceSchema.exactOptional(),
    qualityWeight: z.int32().exactOptional(),
    age: z.int32().exactOptional(),
    ageHours: z.float64().exactOptional(),
    ageMinutes: z.float64().exactOptional(),
    size: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    indexerId: z.int32().exactOptional(),
    indexer: z.string().nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    subGroup: z.string().nullable().exactOptional(),
    releaseHash: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    sceneSource: z.boolean().exactOptional(),
    movieTitles: z.array(z.string()).nullable().exactOptional(),
    languages: z.array(LanguageSchema).nullable().exactOptional(),
    mappedMovieId: z.int32().nullable().exactOptional(),
    approved: z.boolean().exactOptional(),
    temporarilyRejected: z.boolean().exactOptional(),
    rejected: z.boolean().exactOptional(),
    tmdbId: z.int32().exactOptional(),
    imdbId: z.int32().exactOptional(),
    rejections: z.array(z.string()).nullable().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).exactOptional(),
    commentUrl: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
    infoUrl: z.string().nullable().exactOptional(),
    movieRequested: z.boolean().exactOptional(),
    downloadAllowed: z.boolean().exactOptional(),
    releaseWeight: z.int32().exactOptional(),
    edition: z.string().nullable().exactOptional(),
    magnetUrl: z.string().nullable().exactOptional(),
    infoHash: z.string().nullable().exactOptional(),
    seeders: z.int32().nullable().exactOptional(),
    leechers: z.int32().nullable().exactOptional(),
    protocol: DownloadProtocolSchema.exactOptional(),
    indexerFlags: z.any().exactOptional(),
    movieId: z.int32().nullable().exactOptional(),
    downloadClientId: z.int32().nullable().exactOptional(),
    downloadClient: z.string().nullable().exactOptional(),
    shouldOverride: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseResource')

const RemotePathMappingResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    host: z.string().nullable().exactOptional(),
    remotePath: z.string().nullable().exactOptional(),
    localPath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemotePathMappingResource')

const RenameMovieResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    movieId: z.int32().exactOptional(),
    movieFileId: z.int32().exactOptional(),
    existingPath: z.string().nullable().exactOptional(),
    newPath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RenameMovieResource')

const UnmappedFolderSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    relativePath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnmappedFolder')

const RootFolderResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
    accessible: z.boolean().exactOptional(),
    freeSpace: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    unmappedFolders: z.array(UnmappedFolderSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RootFolderResource')

const RuntimeModeSchema = z.enum(['console', 'service', 'tray']).openapi('RuntimeMode')

const SystemResourceSchema = z
  .strictObject({
    appName: z.string().nullable().exactOptional(),
    instanceName: z.string().nullable().exactOptional(),
    version: z.string().nullable().exactOptional(),
    buildTime: z.iso.datetime({ offset: true }).exactOptional(),
    isDebug: z.boolean().exactOptional(),
    isProduction: z.boolean().exactOptional(),
    isAdmin: z.boolean().exactOptional(),
    isUserInteractive: z.boolean().exactOptional(),
    startupPath: z.string().nullable().exactOptional(),
    appData: z.string().nullable().exactOptional(),
    osName: z.string().nullable().exactOptional(),
    osVersion: z.string().nullable().exactOptional(),
    isNetCore: z.boolean().exactOptional(),
    isLinux: z.boolean().exactOptional(),
    isOsx: z.boolean().exactOptional(),
    isWindows: z.boolean().exactOptional(),
    isDocker: z.boolean().exactOptional(),
    isContainerized: z.boolean().exactOptional(),
    mode: RuntimeModeSchema.exactOptional(),
    branch: z.string().nullable().exactOptional(),
    databaseType: DatabaseTypeSchema.exactOptional(),
    databaseVersion: z.string().nullable().exactOptional(),
    authentication: AuthenticationTypeSchema.exactOptional(),
    migrationVersion: z.int32().exactOptional(),
    urlBase: z.string().nullable().exactOptional(),
    runtimeVersion: z.string().nullable().exactOptional(),
    runtimeName: z.string().nullable().exactOptional(),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
    packageVersion: z.string().nullable().exactOptional(),
    packageAuthor: z.string().nullable().exactOptional(),
    packageUpdateMechanism: UpdateMechanismSchema.exactOptional(),
    packageUpdateMechanismMessage: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemResource')

const SystemRestartResourceSchema = z
  .strictObject({ restarting: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('SystemRestartResource')

const SystemShutdownResourceSchema = z
  .strictObject({ shuttingDown: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('SystemShutdownResource')

const TagDetailsResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    label: z.string().nullable().exactOptional(),
    delayProfileIds: z.array(z.int32()).nullable().exactOptional(),
    importListIds: z.array(z.int32()).nullable().exactOptional(),
    notificationIds: z.array(z.int32()).nullable().exactOptional(),
    releaseProfileIds: z.array(z.int32()).nullable().exactOptional(),
    indexerIds: z.array(z.int32()).nullable().exactOptional(),
    downloadClientIds: z.array(z.int32()).nullable().exactOptional(),
    autoTagIds: z.array(z.int32()).nullable().exactOptional(),
    movieIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagDetailsResource')

const TagResourceSchema = z
  .strictObject({ id: z.int32().exactOptional(), label: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('TagResource')

const TaskResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    taskName: z.string().nullable().exactOptional(),
    interval: z.int32().exactOptional(),
    lastExecution: z.iso.datetime({ offset: true }).exactOptional(),
    lastStartTime: z.iso.datetime({ offset: true }).exactOptional(),
    nextExecution: z.iso.datetime({ offset: true }).exactOptional(),
    lastDuration: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TaskResource')

const UiConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    firstDayOfWeek: z.int32().exactOptional(),
    calendarWeekColumnHeader: z.string().nullable().exactOptional(),
    movieRuntimeFormat: MovieRuntimeFormatTypeSchema.exactOptional(),
    shortDateFormat: z.string().nullable().exactOptional(),
    longDateFormat: z.string().nullable().exactOptional(),
    timeFormat: z.string().nullable().exactOptional(),
    showRelativeDates: z.boolean().exactOptional(),
    enableColorImpairedMode: z.boolean().exactOptional(),
    movieInfoLanguage: z.int32().exactOptional(),
    uiLanguage: z.int32().exactOptional(),
    theme: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UiConfigResource')

const UpdateChangesSchema = z
  .strictObject({
    new: z.array(z.string()).nullable().exactOptional(),
    fixed: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChanges')

const UpdateResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    version: z.string().nullable().exactOptional(),
    branch: z.string().nullable().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
    installed: z.boolean().exactOptional(),
    installedOn: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    installable: z.boolean().exactOptional(),
    latest: z.boolean().exactOptional(),
    changes: UpdateChangesSchema.exactOptional(),
    hash: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResource')

const XApiKeySecurityScheme = {
  type: 'apiKey',
  description: 'Apikey passed as header',
  name: 'X-Api-Key',
  in: 'header',
}

const ApikeySecurityScheme = {
  type: 'apiKey',
  description: 'Apikey passed as query parameter',
  name: 'apikey',
  in: 'query',
}

export const getApiV3AlttitleRoute = createRoute({
  method: 'get',
  path: '/api/v3/alttitle',
  tags: ['AlternativeTitle'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      movieMetadataId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieMetadataId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AlternativeTitleResourceSchema) } },
    },
  },
})

export const getApiV3AlttitleIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/alttitle/{id}',
  tags: ['AlternativeTitle'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AlternativeTitleResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiRoute = createRoute({
  method: 'get',
  path: '/api',
  tags: ['ApiInfo'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiInfoResourceSchema } } },
  },
})

export const getLoginSsoRoute = createRoute({
  method: 'get',
  path: '/login/sso',
  tags: ['Authentication'],
  request: {
    query: z.object({
      returnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'returnUrl', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 302: { description: 'Found' } },
})

export const getLoginRoute = createRoute({
  method: 'get',
  path: '/login',
  tags: ['StaticResource'],
  responses: { 200: { description: 'OK' } },
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['Authentication'],
  request: {
    query: z.object({
      returnUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'returnUrl', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              username: z.string().exactOptional(),
              password: z.string().exactOptional(),
              rememberMe: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          encoding: { username: {}, password: {}, rememberMe: {} },
        },
      },
    },
  },
  responses: {
    302: { description: 'Found' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
})

export const getLogoutRoute = createRoute({
  method: 'get',
  path: '/logout',
  tags: ['Authentication'],
  responses: { 302: { description: 'Found' } },
})

export const getApiV3AutotaggingRoute = createRoute({
  method: 'get',
  path: '/api/v3/autotagging',
  tags: ['AutoTagging'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AutoTaggingResourceSchema) } },
    },
  },
})

export const postApiV3AutotaggingRoute = createRoute({
  method: 'post',
  path: '/api/v3/autotagging',
  tags: ['AutoTagging'],
  request: { body: { content: { 'application/json': { schema: AutoTaggingResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: AutoTaggingResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3AutotaggingIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/autotagging/{id}',
  tags: ['AutoTagging'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AutoTaggingResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3AutotaggingIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/autotagging/{id}',
  tags: ['AutoTagging'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: AutoTaggingResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: AutoTaggingResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3AutotaggingIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/autotagging/{id}',
  tags: ['AutoTagging'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3AutotaggingSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/autotagging/schema',
  tags: ['AutoTagging'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AutoTaggingSpecificationSchemaSchema) } },
    },
  },
})

export const getApiV3SystemBackupRoute = createRoute({
  method: 'get',
  path: '/api/v3/system/backup',
  tags: ['Backup'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(BackupResourceSchema) } },
    },
  },
})

export const deleteApiV3SystemBackupIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/system/backup/{id}',
  tags: ['Backup'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any() } } },
    404: { description: 'Not Found' },
  },
})

export const postApiV3SystemBackupRestoreIdRoute = createRoute({
  method: 'post',
  path: '/api/v3/system/backup/restore/{id}',
  tags: ['Backup'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BackupRestoreResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const postApiV3SystemBackupRestoreUploadRoute = createRoute({
  method: 'post',
  path: '/api/v3/system/backup/restore/upload',
  tags: ['Backup'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BackupRestoreResourceSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BackupRestoreErrorResourceSchema } },
    },
  },
})

export const getApiV3BlocklistRoute = createRoute({
  method: 'get',
  path: '/api/v3/blocklist',
  tags: ['Blocklist'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      movieIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      protocols: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(DownloadProtocolSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'protocols',
            in: 'query',
            schema: { type: 'array', items: { $ref: '#/components/schemas/DownloadProtocol' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BlocklistResourcePagingResourceSchema } },
    },
  },
})

export const getApiV3BlocklistMovieRoute = createRoute({
  method: 'get',
  path: '/api/v3/blocklist/movie',
  tags: ['Blocklist'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(BlocklistResourceSchema) } },
    },
  },
})

export const deleteApiV3BlocklistIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/blocklist/{id}',
  tags: ['Blocklist'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiV3BlocklistBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/blocklist/bulk',
  tags: ['Blocklist'],
  request: { body: { content: { 'application/json': { schema: BlocklistBulkResourceSchema } } } },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3CalendarRoute = createRoute({
  method: 'get',
  path: '/api/v3/calendar',
  tags: ['Calendar'],
  request: {
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      unmonitored: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'unmonitored',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      tags: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieResourceSchema) } },
    },
  },
})

export const getFeedV3CalendarRadarrIcsRoute = createRoute({
  method: 'get',
  path: '/feed/v3/calendar/radarr.ics',
  tags: ['CalendarFeed'],
  request: {
    query: z.object({
      pastDays: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(7)
        .exactOptional()
        .openapi({
          param: {
            name: 'pastDays',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 7 },
            required: false,
          },
        }),
      futureDays: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(28)
        .exactOptional()
        .openapi({
          param: {
            name: 'futureDays',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 28 },
            required: false,
          },
        }),
      tags: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
      unmonitored: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'unmonitored',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      releaseTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CalendarReleaseTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'releaseTypes',
            in: 'query',
            schema: { type: 'array', items: { $ref: '#/components/schemas/CalendarReleaseType' } },
            required: false,
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getApiV3CollectionRoute = createRoute({
  method: 'get',
  path: '/api/v3/collection',
  tags: ['Collection'],
  request: {
    query: z.object({
      tmdbId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tmdbId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CollectionResourceSchema) } },
    },
  },
})

export const putApiV3CollectionRoute = createRoute({
  method: 'put',
  path: '/api/v3/collection',
  tags: ['Collection'],
  request: {
    body: { content: { 'application/json': { schema: CollectionUpdateResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CollectionResourceSchema) } },
    },
  },
})

export const getApiV3CollectionIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/collection/{id}',
  tags: ['Collection'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CollectionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3CollectionIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/collection/{id}',
  tags: ['Collection'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: CollectionResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: CollectionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3CommandRoute = createRoute({
  method: 'get',
  path: '/api/v3/command',
  tags: ['Command'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CommandResourceSchema) } },
    },
  },
})

export const postApiV3CommandRoute = createRoute({
  method: 'post',
  path: '/api/v3/command',
  tags: ['Command'],
  request: { body: { content: { 'application/json': { schema: CommandResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CommandResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3CommandIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/command/{id}',
  tags: ['Command'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CommandResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3CommandIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/command/{id}',
  tags: ['Command'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3CreditRoute = createRoute({
  method: 'get',
  path: '/api/v3/credit',
  tags: ['Credit'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      movieMetadataId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieMetadataId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CreditResourceSchema) } },
    },
  },
})

export const getApiV3CreditIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/credit/{id}',
  tags: ['Credit'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CreditResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3CustomfilterRoute = createRoute({
  method: 'get',
  path: '/api/v3/customfilter',
  tags: ['CustomFilter'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFilterResourceSchema) } },
    },
  },
})

export const postApiV3CustomfilterRoute = createRoute({
  method: 'post',
  path: '/api/v3/customfilter',
  tags: ['CustomFilter'],
  request: { body: { content: { 'application/json': { schema: CustomFilterResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CustomFilterResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3CustomfilterIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/customfilter/{id}',
  tags: ['CustomFilter'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomFilterResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3CustomfilterIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/customfilter/{id}',
  tags: ['CustomFilter'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: CustomFilterResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: CustomFilterResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3CustomfilterIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/customfilter/{id}',
  tags: ['CustomFilter'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3CustomformatRoute = createRoute({
  method: 'get',
  path: '/api/v3/customformat',
  tags: ['CustomFormat'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFormatResourceSchema) } },
    },
  },
})

export const postApiV3CustomformatRoute = createRoute({
  method: 'post',
  path: '/api/v3/customformat',
  tags: ['CustomFormat'],
  request: { body: { content: { 'application/json': { schema: CustomFormatResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CustomFormatResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3CustomformatIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/customformat/{id}',
  tags: ['CustomFormat'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomFormatResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3CustomformatIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/customformat/{id}',
  tags: ['CustomFormat'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: CustomFormatResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: CustomFormatResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3CustomformatIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/customformat/{id}',
  tags: ['CustomFormat'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiV3CustomformatBulkRoute = createRoute({
  method: 'put',
  path: '/api/v3/customformat/bulk',
  tags: ['CustomFormat'],
  request: {
    body: { content: { 'application/json': { schema: CustomFormatBulkResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFormatResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const deleteApiV3CustomformatBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/customformat/bulk',
  tags: ['CustomFormat'],
  request: {
    body: { content: { 'application/json': { schema: CustomFormatBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3CustomformatSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/customformat/schema',
  tags: ['CustomFormat'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFormatSpecificationSchemaSchema) } },
    },
  },
})

export const getApiV3WantedCutoffRoute = createRoute({
  method: 'get',
  path: '/api/v3/wanted/cutoff',
  tags: ['Cutoff'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      monitored: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'monitored',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieResourcePagingResourceSchema } },
    },
  },
})

export const getApiV3DelayprofileRoute = createRoute({
  method: 'get',
  path: '/api/v3/delayprofile',
  tags: ['DelayProfile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DelayProfileResourceSchema) } },
    },
  },
})

export const postApiV3DelayprofileRoute = createRoute({
  method: 'post',
  path: '/api/v3/delayprofile',
  tags: ['DelayProfile'],
  request: { body: { content: { 'application/json': { schema: DelayProfileResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DelayProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3DelayprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/delayprofile/{id}',
  tags: ['DelayProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DelayProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3DelayprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/delayprofile/{id}',
  tags: ['DelayProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: DelayProfileResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: DelayProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3DelayprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/delayprofile/{id}',
  tags: ['DelayProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiV3DelayprofileReorderIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/delayprofile/reorder/{id}',
  tags: ['DelayProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DelayProfileResourceSchema) } },
    },
  },
})

export const getApiV3DiskspaceRoute = createRoute({
  method: 'get',
  path: '/api/v3/diskspace',
  tags: ['DiskSpace'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DiskSpaceResourceSchema) } },
    },
  },
})

export const getApiV3DownloadclientRoute = createRoute({
  method: 'get',
  path: '/api/v3/downloadclient',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
  },
})

export const postApiV3DownloadclientRoute = createRoute({
  method: 'post',
  path: '/api/v3/downloadclient',
  tags: ['DownloadClient'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3DownloadclientIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/downloadclient/{id}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3DownloadclientIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/downloadclient/{id}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3DownloadclientIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/downloadclient/{id}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const putApiV3DownloadclientBulkRoute = createRoute({
  method: 'put',
  path: '/api/v3/downloadclient/bulk',
  tags: ['DownloadClient'],
  request: {
    body: { content: { 'application/json': { schema: DownloadClientBulkResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const deleteApiV3DownloadclientBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/downloadclient/bulk',
  tags: ['DownloadClient'],
  request: {
    body: { content: { 'application/json': { schema: DownloadClientBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3DownloadclientSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/downloadclient/schema',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
  },
})

export const postApiV3DownloadclientTestRoute = createRoute({
  method: 'post',
  path: '/api/v3/downloadclient/test',
  tags: ['DownloadClient'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV3DownloadclientTestallRoute = createRoute({
  method: 'post',
  path: '/api/v3/downloadclient/testall',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
  },
})

export const postApiV3DownloadclientActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v3/downloadclient/action/{name}',
  tags: ['DownloadClient'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientResourceSchema } } },
  },
  responses: { 400: { description: 'Bad Request' } },
})

export const getApiV3ConfigDownloadclientRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/downloadclient',
  tags: ['DownloadClientConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigDownloadclientIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/downloadclient/{id}',
  tags: ['DownloadClientConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigDownloadclientIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/downloadclient/{id}',
  tags: ['DownloadClientConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: DownloadClientConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ExtrafileRoute = createRoute({
  method: 'get',
  path: '/api/v3/extrafile',
  tags: ['ExtraFile'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ExtraFileResourceSchema) } },
    },
  },
})

export const getApiV3FilesystemRoute = createRoute({
  method: 'get',
  path: '/api/v3/filesystem',
  tags: ['FileSystem'],
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', in: 'query', schema: { type: 'string' }, required: false },
        }),
      includeFiles: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeFiles',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      allowFoldersWithoutTrailingSlashes: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'allowFoldersWithoutTrailingSlashes',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FileSystemResultSchema } } },
  },
})

export const getApiV3FilesystemTypeRoute = createRoute({
  method: 'get',
  path: '/api/v3/filesystem/type',
  tags: ['FileSystem'],
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FileSystemTypeResourceSchema } },
    },
  },
})

export const getApiV3FilesystemMediafilesRoute = createRoute({
  method: 'get',
  path: '/api/v3/filesystem/mediafiles',
  tags: ['FileSystem'],
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(FileSystemMediaFileResourceSchema) } },
    },
  },
})

export const getApiV3HealthRoute = createRoute({
  method: 'get',
  path: '/api/v3/health',
  tags: ['Health'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HealthResourceSchema) } },
    },
  },
})

export const getApiV3HistoryRoute = createRoute({
  method: 'get',
  path: '/api/v3/history',
  tags: ['History'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      includeMovie: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeMovie',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      eventType: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'eventType',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      downloadId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'downloadId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      movieIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      languages: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'languages',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      quality: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HistoryResourcePagingResourceSchema } },
    },
  },
})

export const getApiV3HistorySinceRoute = createRoute({
  method: 'get',
  path: '/api/v3/history/since',
  tags: ['History'],
  request: {
    query: z.object({
      date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      eventType: MovieHistoryEventTypeSchema.openapi({
        param: {
          name: 'eventType',
          in: 'query',
          schema: { $ref: '#/components/schemas/MovieHistoryEventType' },
          required: false,
        },
      }).exactOptional(),
      includeMovie: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeMovie',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HistoryResourceSchema) } },
    },
  },
})

export const getApiV3HistoryMovieRoute = createRoute({
  method: 'get',
  path: '/api/v3/history/movie',
  tags: ['History'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      eventType: MovieHistoryEventTypeSchema.openapi({
        param: {
          name: 'eventType',
          in: 'query',
          schema: { $ref: '#/components/schemas/MovieHistoryEventType' },
          required: false,
        },
      }).exactOptional(),
      includeMovie: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeMovie',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HistoryResourceSchema) } },
    },
  },
})

export const postApiV3HistoryFailedIdRoute = createRoute({
  method: 'post',
  path: '/api/v3/history/failed/{id}',
  tags: ['History'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3ConfigHostRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/host',
  tags: ['HostConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HostConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigHostIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/host/{id}',
  tags: ['HostConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: HostConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigHostIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/host/{id}',
  tags: ['HostConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: HostConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: HostConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ImportlistRoute = createRoute({
  method: 'get',
  path: '/api/v3/importlist',
  tags: ['ImportList'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListResourceSchema) } },
    },
  },
})

export const postApiV3ImportlistRoute = createRoute({
  method: 'post',
  path: '/api/v3/importlist',
  tags: ['ImportList'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportListResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ImportListResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ImportlistIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/importlist/{id}',
  tags: ['ImportList'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ImportlistIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/importlist/{id}',
  tags: ['ImportList'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportListResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ImportListResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3ImportlistIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/importlist/{id}',
  tags: ['ImportList'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const putApiV3ImportlistBulkRoute = createRoute({
  method: 'put',
  path: '/api/v3/importlist/bulk',
  tags: ['ImportList'],
  request: { body: { content: { 'application/json': { schema: ImportListBulkResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const deleteApiV3ImportlistBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/importlist/bulk',
  tags: ['ImportList'],
  request: { body: { content: { 'application/json': { schema: ImportListBulkResourceSchema } } } },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3ImportlistSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/importlist/schema',
  tags: ['ImportList'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListResourceSchema) } },
    },
  },
})

export const postApiV3ImportlistTestRoute = createRoute({
  method: 'post',
  path: '/api/v3/importlist/test',
  tags: ['ImportList'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportListResourceSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV3ImportlistTestallRoute = createRoute({
  method: 'post',
  path: '/api/v3/importlist/testall',
  tags: ['ImportList'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
  },
})

export const postApiV3ImportlistActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v3/importlist/action/{name}',
  tags: ['ImportList'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportListResourceSchema } } },
  },
  responses: { 400: { description: 'Bad Request' } },
})

export const getApiV3ConfigImportlistRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/importlist',
  tags: ['ImportListConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigImportlistIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/importlist/{id}',
  tags: ['ImportListConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigImportlistIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/importlist/{id}',
  tags: ['ImportListConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ImportListConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ImportListConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ExclusionsRoute = createRoute({
  method: 'get',
  path: '/api/v3/exclusions',
  tags: ['ImportListExclusion'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListExclusionResourceSchema) } },
    },
  },
  deprecated: true,
})

export const postApiV3ExclusionsRoute = createRoute({
  method: 'post',
  path: '/api/v3/exclusions',
  tags: ['ImportListExclusion'],
  request: {
    body: { content: { 'application/json': { schema: ImportListExclusionResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ImportListExclusionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ExclusionsPagedRoute = createRoute({
  method: 'get',
  path: '/api/v3/exclusions/paged',
  tags: ['ImportListExclusion'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListExclusionResourcePagingResourceSchema } },
    },
  },
})

export const getApiV3ExclusionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/exclusions/{id}',
  tags: ['ImportListExclusion'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListExclusionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ExclusionsIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/exclusions/{id}',
  tags: ['ImportListExclusion'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ImportListExclusionResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ImportListExclusionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3ExclusionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/exclusions/{id}',
  tags: ['ImportListExclusion'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV3ExclusionsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v3/exclusions/bulk',
  tags: ['ImportListExclusion'],
  request: {
    body: {
      content: { 'application/json': { schema: z.array(ImportListExclusionResourceSchema) } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListExclusionResourceSchema) } },
    },
  },
})

export const deleteApiV3ExclusionsBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/exclusions/bulk',
  tags: ['ImportListExclusion'],
  request: {
    body: { content: { 'application/json': { schema: ImportListExclusionBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3ImportlistMovieRoute = createRoute({
  method: 'get',
  path: '/api/v3/importlist/movie',
  tags: ['ImportListMovies'],
  request: {
    query: z.object({
      includeRecommendations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeRecommendations',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeTrending: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTrending',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includePopular: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includePopular',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListMoviesResourceSchema) } },
    },
  },
})

export const postApiV3ImportlistMovieRoute = createRoute({
  method: 'post',
  path: '/api/v3/importlist/movie',
  tags: ['ImportListMovies'],
  request: { body: { content: { 'application/json': { schema: z.array(MovieResourceSchema) } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieResourceSchema) } },
    },
  },
})

export const getApiV3IndexerRoute = createRoute({
  method: 'get',
  path: '/api/v3/indexer',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
  },
})

export const postApiV3IndexerRoute = createRoute({
  method: 'post',
  path: '/api/v3/indexer',
  tags: ['Indexer'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: IndexerResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3IndexerIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/indexer/{id}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const putApiV3IndexerIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/indexer/{id}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: IndexerResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3IndexerIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/indexer/{id}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const putApiV3IndexerBulkRoute = createRoute({
  method: 'put',
  path: '/api/v3/indexer/bulk',
  tags: ['Indexer'],
  request: { body: { content: { 'application/json': { schema: IndexerBulkResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const deleteApiV3IndexerBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/indexer/bulk',
  tags: ['Indexer'],
  request: { body: { content: { 'application/json': { schema: IndexerBulkResourceSchema } } } },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3IndexerSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/indexer/schema',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
  },
})

export const postApiV3IndexerTestRoute = createRoute({
  method: 'post',
  path: '/api/v3/indexer/test',
  tags: ['Indexer'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV3IndexerTestallRoute = createRoute({
  method: 'post',
  path: '/api/v3/indexer/testall',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
  },
})

export const postApiV3IndexerActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v3/indexer/action/{name}',
  tags: ['Indexer'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
  responses: { 400: { description: 'Bad Request' } },
})

export const getApiV3ConfigIndexerRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/indexer',
  tags: ['IndexerConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigIndexerIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/indexer/{id}',
  tags: ['IndexerConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigIndexerIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/indexer/{id}',
  tags: ['IndexerConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: IndexerConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: IndexerConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3IndexerflagRoute = createRoute({
  method: 'get',
  path: '/api/v3/indexerflag',
  tags: ['IndexerFlag'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerFlagResourceSchema) } },
    },
  },
})

export const getApiV3LanguageRoute = createRoute({
  method: 'get',
  path: '/api/v3/language',
  tags: ['Language'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LanguageResourceSchema) } },
    },
  },
})

export const getApiV3LanguageIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/language/{id}',
  tags: ['Language'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LanguageResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3LocalizationRoute = createRoute({
  method: 'get',
  path: '/api/v3/localization',
  tags: ['Localization'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV3LocalizationLanguageRoute = createRoute({
  method: 'get',
  path: '/api/v3/localization/language',
  tags: ['Localization'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LocalizationLanguageResourceSchema } },
    },
  },
})

export const getApiV3LogRoute = createRoute({
  method: 'get',
  path: '/api/v3/log',
  tags: ['Log'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      level: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'level', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LogResourcePagingResourceSchema } },
    },
  },
})

export const getApiV3LogFileRoute = createRoute({
  method: 'get',
  path: '/api/v3/log/file',
  tags: ['LogFile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LogFileResourceSchema) } },
    },
  },
})

export const getApiV3LogFileFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v3/log/file/{filename}',
  tags: ['LogFile'],
  request: {
    params: z.object({
      filename: z
        .string()
        .regex(/[-.a-zA-Z0-9]+?\.txt/)
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            schema: { pattern: '[-.a-zA-Z0-9]+?\\.txt', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ManualimportRoute = createRoute({
  method: 'get',
  path: '/api/v3/manualimport',
  tags: ['ManualImport'],
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'folder', in: 'query', schema: { type: 'string' }, required: false },
        }),
      downloadId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'downloadId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      filterExistingFiles: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'filterExistingFiles',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ManualImportResourceSchema) } },
    },
  },
})

export const postApiV3ManualimportRoute = createRoute({
  method: 'post',
  path: '/api/v3/manualimport',
  tags: ['ManualImport'],
  request: {
    body: {
      content: { 'application/json': { schema: z.array(ManualImportReprocessResourceSchema) } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ManualImportReprocessResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiV3MediacoverMovieIdFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v3/mediacover/{movieId}/{filename}',
  tags: ['MediaCover'],
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
          z.int32(),
        )
        .openapi({
          param: {
            name: 'movieId',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      filename: z
        .string()
        .regex(/(.+)\.(jpg|png|gif)/)
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            schema: { pattern: '(.+)\\.(jpg|png|gif)', type: 'string' },
          },
        }),
    }),
  },
  responses: { 404: { description: 'Not Found' } },
})

export const getApiV3ConfigMediamanagementRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/mediamanagement',
  tags: ['MediaManagementConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MediaManagementConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigMediamanagementIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/mediamanagement/{id}',
  tags: ['MediaManagementConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MediaManagementConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigMediamanagementIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/mediamanagement/{id}',
  tags: ['MediaManagementConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: MediaManagementConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: MediaManagementConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3MetadataRoute = createRoute({
  method: 'get',
  path: '/api/v3/metadata',
  tags: ['Metadata'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MetadataResourceSchema) } },
    },
  },
})

export const postApiV3MetadataRoute = createRoute({
  method: 'post',
  path: '/api/v3/metadata',
  tags: ['Metadata'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: MetadataResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3MetadataIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/metadata/{id}',
  tags: ['Metadata'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MetadataResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const putApiV3MetadataIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/metadata/{id}',
  tags: ['Metadata'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: MetadataResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3MetadataIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/metadata/{id}',
  tags: ['Metadata'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3MetadataSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/metadata/schema',
  tags: ['Metadata'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MetadataResourceSchema) } },
    },
  },
})

export const postApiV3MetadataTestRoute = createRoute({
  method: 'post',
  path: '/api/v3/metadata/test',
  tags: ['Metadata'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataResourceSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV3MetadataTestallRoute = createRoute({
  method: 'post',
  path: '/api/v3/metadata/testall',
  tags: ['Metadata'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
  },
})

export const postApiV3MetadataActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v3/metadata/action/{name}',
  tags: ['Metadata'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataResourceSchema } } },
  },
  responses: { 400: { description: 'Bad Request' } },
})

export const getApiV3ConfigMetadataRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/metadata',
  tags: ['MetadataConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MetadataConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigMetadataIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/metadata/{id}',
  tags: ['MetadataConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MetadataConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigMetadataIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/metadata/{id}',
  tags: ['MetadataConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: MetadataConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: MetadataConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3WantedMissingRoute = createRoute({
  method: 'get',
  path: '/api/v3/wanted/missing',
  tags: ['Missing'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      monitored: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'monitored',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieResourcePagingResourceSchema } },
    },
  },
})

export const getApiV3MovieRoute = createRoute({
  method: 'get',
  path: '/api/v3/movie',
  tags: ['Movie'],
  request: {
    query: z.object({
      tmdbId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tmdbId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      excludeLocalCovers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeLocalCovers',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      languageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'languageId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieResourceSchema) } },
    },
  },
})

export const postApiV3MovieRoute = createRoute({
  method: 'post',
  path: '/api/v3/movie',
  tags: ['Movie'],
  request: { body: { content: { 'application/json': { schema: MovieResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: MovieResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3MovieIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/movie/{id}',
  tags: ['Movie'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MovieResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const putApiV3MovieIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/movie/{id}',
  tags: ['Movie'],
  request: {
    query: z.object({
      moveFiles: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'moveFiles',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: MovieResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: MovieResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3MovieIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/movie/{id}',
  tags: ['Movie'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      deleteFiles: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'deleteFiles',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      addImportExclusion: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'addImportExclusion',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiV3MovieEditorRoute = createRoute({
  method: 'put',
  path: '/api/v3/movie/editor',
  tags: ['MovieEditor'],
  request: { body: { content: { 'application/json': { schema: MovieEditorResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const deleteApiV3MovieEditorRoute = createRoute({
  method: 'delete',
  path: '/api/v3/movie/editor',
  tags: ['MovieEditor'],
  request: { body: { content: { 'application/json': { schema: MovieEditorResourceSchema } } } },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3MoviefileRoute = createRoute({
  method: 'get',
  path: '/api/v3/moviefile',
  tags: ['MovieFile'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      movieFileIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieFileIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieFileResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiV3MoviefileIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/moviefile/{id}',
  tags: ['MovieFile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieFileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3MoviefileIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/moviefile/{id}',
  tags: ['MovieFile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: MovieFileResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: MovieFileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3MoviefileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/moviefile/{id}',
  tags: ['MovieFile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' }, 404: { description: 'Not Found' } },
})

export const putApiV3MoviefileEditorRoute = createRoute({
  method: 'put',
  path: '/api/v3/moviefile/editor',
  tags: ['MovieFile'],
  request: { body: { content: { 'application/json': { schema: MovieFileListResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieFileResourceSchema) } },
    },
  },
  deprecated: true,
})

export const putApiV3MoviefileBulkRoute = createRoute({
  method: 'put',
  path: '/api/v3/moviefile/bulk',
  tags: ['MovieFile'],
  request: {
    body: { content: { 'application/json': { schema: z.array(MovieFileResourceSchema) } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieFileResourceSchema) } },
    },
  },
})

export const deleteApiV3MoviefileBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/moviefile/bulk',
  tags: ['MovieFile'],
  request: { body: { content: { 'application/json': { schema: MovieFileListResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any() } } },
    400: { description: 'Bad Request' },
  },
})

export const getApiV3MovieIdFolderRoute = createRoute({
  method: 'get',
  path: '/api/v3/movie/{id}/folder',
  tags: ['MovieFolder'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MovieFolderResourceSchema } },
    },
  },
})

export const postApiV3MovieImportRoute = createRoute({
  method: 'post',
  path: '/api/v3/movie/import',
  tags: ['MovieImport'],
  request: { body: { content: { 'application/json': { schema: z.array(MovieResourceSchema) } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieResourceSchema) } },
    },
  },
})

export const getApiV3MovieLookupTmdbRoute = createRoute({
  method: 'get',
  path: '/api/v3/movie/lookup/tmdb',
  tags: ['MovieLookup'],
  request: {
    query: z.object({
      tmdbId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tmdbId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MovieResourceSchema } } },
  },
})

export const getApiV3MovieLookupImdbRoute = createRoute({
  method: 'get',
  path: '/api/v3/movie/lookup/imdb',
  tags: ['MovieLookup'],
  request: {
    query: z.object({
      imdbId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'imdbId', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MovieResourceSchema } } },
  },
})

export const getApiV3MovieLookupRoute = createRoute({
  method: 'get',
  path: '/api/v3/movie/lookup',
  tags: ['MovieLookup'],
  request: {
    query: z.object({
      term: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'term', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MovieResourceSchema) } },
    },
  },
})

export const getApiV3ConfigNamingRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/naming',
  tags: ['NamingConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NamingConfigResourceSchema } },
    },
  },
})

export const getApiV3ConfigNamingIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/naming/{id}',
  tags: ['NamingConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NamingConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigNamingIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/naming/{id}',
  tags: ['NamingConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: NamingConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: NamingConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ConfigNamingExamplesRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/naming/examples',
  tags: ['NamingConfig'],
  request: {
    query: z.object({
      renameMovies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'renameMovies',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      replaceIllegalCharacters: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'replaceIllegalCharacters',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      colonReplacementFormat: ColonReplacementFormatSchema.openapi({
        param: {
          name: 'colonReplacementFormat',
          in: 'query',
          schema: { $ref: '#/components/schemas/ColonReplacementFormat' },
          required: false,
        },
      }).exactOptional(),
      standardMovieFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'standardMovieFormat',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      movieFolderFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'movieFolderFormat',
            in: 'query',
            schema: { type: 'string' },
            required: false,
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      resourceName: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resourceName', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NamingExampleResourceSchema } },
    },
  },
})

export const getApiV3NotificationRoute = createRoute({
  method: 'get',
  path: '/api/v3/notification',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationResourceSchema) } },
    },
  },
})

export const postApiV3NotificationRoute = createRoute({
  method: 'post',
  path: '/api/v3/notification',
  tags: ['Notification'],
  request: {
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3NotificationIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/notification/{id}',
  tags: ['Notification'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3NotificationIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/notification/{id}',
  tags: ['Notification'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      forceSave: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceSave',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3NotificationIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/notification/{id}',
  tags: ['Notification'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3NotificationSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/notification/schema',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationResourceSchema) } },
    },
  },
})

export const postApiV3NotificationTestRoute = createRoute({
  method: 'post',
  path: '/api/v3/notification/test',
  tags: ['Notification'],
  request: {
    query: z.object({
      forceTest: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceTest',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postApiV3NotificationTestallRoute = createRoute({
  method: 'post',
  path: '/api/v3/notification/testall',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ProviderTestAllResultSchema) } },
    },
  },
})

export const postApiV3NotificationActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v3/notification/action/{name}',
  tags: ['Notification'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationResourceSchema } } },
  },
  responses: { 400: { description: 'Bad Request' } },
})

export const getApiV3ParseRoute = createRoute({
  method: 'get',
  path: '/api/v3/parse',
  tags: ['Parse'],
  request: {
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ParseResourceSchema } } },
  },
})

export const getPingRoute = createRoute({
  method: 'get',
  path: '/ping',
  tags: ['Ping'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PingResourceSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: PingResourceSchema } },
    },
  },
})

export const headPingRoute = createRoute({
  method: 'head',
  path: '/ping',
  tags: ['Ping'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PingResourceSchema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: PingResourceSchema } },
    },
  },
})

export const getApiV3QualitydefinitionIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/qualitydefinition/{id}',
  tags: ['QualityDefinition'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QualityDefinitionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3QualitydefinitionIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/qualitydefinition/{id}',
  tags: ['QualityDefinition'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: QualityDefinitionResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: QualityDefinitionResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3QualitydefinitionRoute = createRoute({
  method: 'get',
  path: '/api/v3/qualitydefinition',
  tags: ['QualityDefinition'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(QualityDefinitionResourceSchema) } },
    },
  },
})

export const putApiV3QualitydefinitionUpdateRoute = createRoute({
  method: 'put',
  path: '/api/v3/qualitydefinition/update',
  tags: ['QualityDefinition'],
  request: {
    body: { content: { 'application/json': { schema: z.array(QualityDefinitionResourceSchema) } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(QualityDefinitionResourceSchema) } },
    },
  },
})

export const getApiV3QualitydefinitionLimitsRoute = createRoute({
  method: 'get',
  path: '/api/v3/qualitydefinition/limits',
  tags: ['QualityDefinition'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QualityDefinitionLimitsResourceSchema } },
    },
  },
})

export const getApiV3QualityprofileRoute = createRoute({
  method: 'get',
  path: '/api/v3/qualityprofile',
  tags: ['QualityProfile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(QualityProfileResourceSchema) } },
    },
  },
})

export const postApiV3QualityprofileRoute = createRoute({
  method: 'post',
  path: '/api/v3/qualityprofile',
  tags: ['QualityProfile'],
  request: { body: { content: { 'application/json': { schema: QualityProfileResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: QualityProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3QualityprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/qualityprofile/{id}',
  tags: ['QualityProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QualityProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3QualityprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/qualityprofile/{id}',
  tags: ['QualityProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: QualityProfileResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: QualityProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3QualityprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/qualityprofile/{id}',
  tags: ['QualityProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3QualityprofileSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v3/qualityprofile/schema',
  tags: ['QualityProfileSchema'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QualityProfileResourceSchema } },
    },
  },
})

export const deleteApiV3QueueIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/queue/{id}',
  tags: ['Queue'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      removeFromClient: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'removeFromClient',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      blocklist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'blocklist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      skipRedownload: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'skipRedownload',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      changeCategory: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'changeCategory',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' }, 404: { description: 'Not Found' } },
})

export const deleteApiV3QueueBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v3/queue/bulk',
  tags: ['Queue'],
  request: {
    query: z.object({
      removeFromClient: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'removeFromClient',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      blocklist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'blocklist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      skipRedownload: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'skipRedownload',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      changeCategory: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'changeCategory',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueueBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})

export const getApiV3QueueRoute = createRoute({
  method: 'get',
  path: '/api/v3/queue',
  tags: ['Queue'],
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
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sortKey: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sortKey', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          name: 'sortDirection',
          in: 'query',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
      includeUnknownMovieItems: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeUnknownMovieItems',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeMovie: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeMovie',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      movieIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      protocol: DownloadProtocolSchema.openapi({
        param: {
          name: 'protocol',
          in: 'query',
          schema: { $ref: '#/components/schemas/DownloadProtocol' },
          required: false,
        },
      }).exactOptional(),
      languages: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'languages',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      quality: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'quality',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(QueueStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: { type: 'array', items: { $ref: '#/components/schemas/QueueStatus' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QueueResourcePagingResourceSchema } },
    },
  },
})

export const postApiV3QueueGrabIdRoute = createRoute({
  method: 'post',
  path: '/api/v3/queue/grab/{id}',
  tags: ['QueueAction'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any() } } },
    404: { description: 'Not Found' },
  },
})

export const postApiV3QueueGrabBulkRoute = createRoute({
  method: 'post',
  path: '/api/v3/queue/grab/bulk',
  tags: ['QueueAction'],
  request: { body: { content: { 'application/json': { schema: QueueBulkResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any() } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3QueueDetailsRoute = createRoute({
  method: 'get',
  path: '/api/v3/queue/details',
  tags: ['QueueDetails'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      includeMovie: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeMovie',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(QueueResourceSchema) } },
    },
  },
})

export const getApiV3QueueStatusRoute = createRoute({
  method: 'get',
  path: '/api/v3/queue/status',
  tags: ['QueueStatus'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QueueStatusResourceSchema } },
    },
  },
})

export const getApiV3ReleaseRoute = createRoute({
  method: 'get',
  path: '/api/v3/release',
  tags: ['Release'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ReleaseResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const postApiV3ReleaseRoute = createRoute({
  method: 'post',
  path: '/api/v3/release',
  tags: ['Release'],
  request: { body: { content: { 'application/json': { schema: ReleaseResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReleaseResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ReleaseprofileRoute = createRoute({
  method: 'get',
  path: '/api/v3/releaseprofile',
  tags: ['ReleaseProfile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ReleaseProfileResourceSchema) } },
    },
  },
})

export const postApiV3ReleaseprofileRoute = createRoute({
  method: 'post',
  path: '/api/v3/releaseprofile',
  tags: ['ReleaseProfile'],
  request: { body: { content: { 'application/json': { schema: ReleaseProfileResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ReleaseProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ReleaseprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/releaseprofile/{id}',
  tags: ['ReleaseProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ReleaseProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ReleaseprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/releaseprofile/{id}',
  tags: ['ReleaseProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ReleaseProfileResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ReleaseProfileResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3ReleaseprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/releaseprofile/{id}',
  tags: ['ReleaseProfile'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiV3ReleasePushRoute = createRoute({
  method: 'post',
  path: '/api/v3/release/push',
  tags: ['ReleasePush'],
  request: { body: { content: { 'application/json': { schema: ReleaseResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ReleaseResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiV3RemotepathmappingRoute = createRoute({
  method: 'get',
  path: '/api/v3/remotepathmapping',
  tags: ['RemotePathMapping'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RemotePathMappingResourceSchema) } },
    },
  },
})

export const postApiV3RemotepathmappingRoute = createRoute({
  method: 'post',
  path: '/api/v3/remotepathmapping',
  tags: ['RemotePathMapping'],
  request: {
    body: { content: { 'application/json': { schema: RemotePathMappingResourceSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: RemotePathMappingResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3RemotepathmappingIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/remotepathmapping/{id}',
  tags: ['RemotePathMapping'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemotePathMappingResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const putApiV3RemotepathmappingIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/remotepathmapping/{id}',
  tags: ['RemotePathMapping'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: RemotePathMappingResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemotePathMappingResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3RemotepathmappingIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/remotepathmapping/{id}',
  tags: ['RemotePathMapping'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3RenameRoute = createRoute({
  method: 'get',
  path: '/api/v3/rename',
  tags: ['RenameMovie'],
  request: {
    query: z.object({
      movieId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'movieId',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RenameMovieResourceSchema) } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getApiV3RootfolderRoute = createRoute({
  method: 'get',
  path: '/api/v3/rootfolder',
  tags: ['RootFolder'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RootFolderResourceSchema) } },
    },
  },
})

export const postApiV3RootfolderRoute = createRoute({
  method: 'post',
  path: '/api/v3/rootfolder',
  tags: ['RootFolder'],
  request: { body: { content: { 'application/json': { schema: RootFolderResourceSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: RootFolderResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3RootfolderIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/rootfolder/{id}',
  tags: ['RootFolder'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RootFolderResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3RootfolderIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/rootfolder/{id}',
  tags: ['RootFolder'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getLoggedoutRoute = createRoute({
  method: 'get',
  path: '/loggedout',
  tags: ['StaticResource'],
  responses: { 200: { description: 'OK' } },
})

export const getContentPathRoute = createRoute({
  method: 'get',
  path: '/content/{path}',
  tags: ['StaticResource'],
  request: {
    params: z.object({
      path: z
        .string()
        .regex(/^(?!api\/).*/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            required: true,
            schema: { pattern: '^(?!api/).*', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['StaticResource'],
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getPathRoute = createRoute({
  method: 'get',
  path: '/{path}',
  tags: ['StaticResource'],
  request: {
    params: z.object({
      path: z
        .string()
        .regex(/^(?!(api|feed)\/).*/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            required: true,
            schema: { pattern: '^(?!(api|feed)/).*', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3SystemStatusRoute = createRoute({
  method: 'get',
  path: '/api/v3/system/status',
  tags: ['System'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SystemResourceSchema } } },
  },
})

export const getApiV3SystemRoutesRoute = createRoute({
  method: 'get',
  path: '/api/v3/system/routes',
  tags: ['System'],
  responses: { 200: { description: 'OK', content: { 'text/plain': { schema: z.string() } } } },
})

export const getApiV3SystemRoutesDuplicateRoute = createRoute({
  method: 'get',
  path: '/api/v3/system/routes/duplicate',
  tags: ['System'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.array(z.string())) } },
    },
  },
})

export const postApiV3SystemShutdownRoute = createRoute({
  method: 'post',
  path: '/api/v3/system/shutdown',
  tags: ['System'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SystemShutdownResourceSchema } },
    },
  },
})

export const postApiV3SystemRestartRoute = createRoute({
  method: 'post',
  path: '/api/v3/system/restart',
  tags: ['System'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SystemRestartResourceSchema } },
    },
  },
})

export const getApiV3TagRoute = createRoute({
  method: 'get',
  path: '/api/v3/tag',
  tags: ['Tag'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TagResourceSchema) } },
    },
  },
})

export const postApiV3TagRoute = createRoute({
  method: 'post',
  path: '/api/v3/tag',
  tags: ['Tag'],
  request: { body: { content: { 'application/json': { schema: TagResourceSchema } } } },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: TagResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3TagIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/tag/{id}',
  tags: ['Tag'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TagResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const putApiV3TagIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/tag/{id}',
  tags: ['Tag'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: TagResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: TagResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const deleteApiV3TagIdRoute = createRoute({
  method: 'delete',
  path: '/api/v3/tag/{id}',
  tags: ['Tag'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV3TagDetailRoute = createRoute({
  method: 'get',
  path: '/api/v3/tag/detail',
  tags: ['TagDetails'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TagDetailsResourceSchema) } },
    },
  },
})

export const getApiV3TagDetailIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/tag/detail/{id}',
  tags: ['TagDetails'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TagDetailsResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3SystemTaskRoute = createRoute({
  method: 'get',
  path: '/api/v3/system/task',
  tags: ['Task'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TaskResourceSchema) } },
    },
  },
})

export const getApiV3SystemTaskIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/system/task/{id}',
  tags: ['Task'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TaskResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ConfigUiIdRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/ui/{id}',
  tags: ['UiConfig'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UiConfigResourceSchema } } },
    404: { description: 'Not Found' },
  },
})

export const putApiV3ConfigUiIdRoute = createRoute({
  method: 'put',
  path: '/api/v3/config/ui/{id}',
  tags: ['UiConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: UiConfigResourceSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiV3ConfigUiRoute = createRoute({
  method: 'get',
  path: '/api/v3/config/ui',
  tags: ['UiConfig'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
})

export const getApiV3UpdateRoute = createRoute({
  method: 'get',
  path: '/api/v3/update',
  tags: ['Update'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UpdateResourceSchema) } },
    },
  },
})

export const getApiV3LogFileUpdateRoute = createRoute({
  method: 'get',
  path: '/api/v3/log/file/update',
  tags: ['UpdateLogFile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LogFileResourceSchema) } },
    },
  },
})

export const getApiV3LogFileUpdateFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v3/log/file/update/{filename}',
  tags: ['UpdateLogFile'],
  request: {
    params: z.object({
      filename: z
        .string()
        .regex(/[-.a-zA-Z0-9]+?\.txt/)
        .openapi({
          param: {
            name: 'filename',
            in: 'path',
            required: true,
            schema: { pattern: '[-.a-zA-Z0-9]+?\\.txt', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found' },
  },
})
