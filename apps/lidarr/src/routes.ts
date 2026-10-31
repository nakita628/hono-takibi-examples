import { createRoute, z } from '@hono/zod-openapi'

const AlbumAddTypeSchema = z.enum(['automatic', 'manual']).openapi('AlbumAddType')

type AddAlbumOptionsType = {
  addType?: z.infer<typeof AlbumAddTypeSchema>
  searchForNewAlbum?: boolean
}

const MonitorTypesSchema = z
  .enum(['all', 'future', 'missing', 'existing', 'latest', 'first', 'none', 'unknown'])
  .openapi('MonitorTypes')

type AddArtistOptionsType = {
  monitor?: z.infer<typeof MonitorTypesSchema>
  albumsToMonitor?: string[] | null
  monitored?: boolean
  searchForMissingAlbums?: boolean
}

type MediumResourceType = {
  mediumNumber?: number
  mediumName?: string | null
  mediumFormat?: string | null
}

const MediumResourceSchema: z.ZodType<MediumResourceType> = z
  .strictObject({
    mediumNumber: z.int32().exactOptional(),
    mediumName: z.string().nullable().exactOptional(),
    mediumFormat: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediumResource')

type AlbumReleaseResourceType = {
  id?: number
  albumId?: number
  foreignReleaseId?: string | null
  title?: string | null
  status?: string | null
  duration?: number
  trackCount?: number
  media?: z.infer<typeof MediumResourceSchema>[] | null
  mediumCount?: number
  disambiguation?: string | null
  country?: string[] | null
  label?: string[] | null
  format?: string | null
  monitored?: boolean
}

type RatingsType = { votes?: number; value?: number }

const RatingsSchema: z.ZodType<RatingsType> = z
  .strictObject({ votes: z.int32().exactOptional(), value: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('Ratings')

const AlbumReleaseResourceSchema: z.ZodType<AlbumReleaseResourceType> = z
  .strictObject({
    id: z.int32().exactOptional(),
    albumId: z.int32().exactOptional(),
    foreignReleaseId: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
    duration: z.int32().exactOptional(),
    trackCount: z.int32().exactOptional(),
    media: z.array(MediumResourceSchema).nullable().exactOptional(),
    mediumCount: z.int32().exactOptional().openapi({ readOnly: true }),
    disambiguation: z.string().nullable().exactOptional(),
    country: z.array(z.string()).nullable().exactOptional(),
    label: z.array(z.string()).nullable().exactOptional(),
    format: z.string().nullable().exactOptional(),
    monitored: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumReleaseResource')

const ArtistResourceSchema: z.ZodType<ArtistResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        status: ArtistStatusTypeSchema.exactOptional(),
        ended: z.boolean().exactOptional().openapi({ readOnly: true }),
        artistName: z.string().nullable().exactOptional(),
        foreignArtistId: z.string().nullable().exactOptional(),
        mbId: z.string().nullable().exactOptional(),
        tadbId: z.int32().exactOptional(),
        discogsId: z.int32().exactOptional(),
        allMusicId: z.string().nullable().exactOptional(),
        overview: z.string().nullable().exactOptional(),
        artistType: z.string().nullable().exactOptional(),
        disambiguation: z.string().nullable().exactOptional(),
        links: z.array(LinksSchema).nullable().exactOptional(),
        nextAlbum: AlbumResourceSchema.exactOptional(),
        lastAlbum: AlbumResourceSchema.exactOptional(),
        images: z.array(MediaCoverSchema).nullable().exactOptional(),
        members: z.array(MemberSchema).nullable().exactOptional(),
        remotePoster: z.string().nullable().exactOptional(),
        path: z.string().nullable().exactOptional(),
        qualityProfileId: z.int32().exactOptional(),
        metadataProfileId: z.int32().exactOptional(),
        monitored: z.boolean().exactOptional(),
        monitorNewItems: NewItemMonitorTypesSchema.exactOptional(),
        rootFolderPath: z.string().nullable().exactOptional(),
        folder: z.string().nullable().exactOptional(),
        genres: z.array(z.string()).nullable().exactOptional(),
        cleanName: z.string().nullable().exactOptional(),
        sortName: z.string().nullable().exactOptional(),
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
        addOptions: AddArtistOptionsSchema.exactOptional(),
        ratings: RatingsSchema.exactOptional(),
        statistics: ArtistStatisticsResourceSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ArtistResource')

const MediaCoverTypesSchema = z
  .enum([
    'unknown',
    'poster',
    'banner',
    'fanart',
    'screenshot',
    'headshot',
    'cover',
    'disc',
    'logo',
    'clearlogo',
  ])
  .openapi('MediaCoverTypes')

type MediaCoverType = {
  url?: string | null
  coverType?: z.infer<typeof MediaCoverTypesSchema>
  extension?: string | null
  remoteUrl?: string | null
}

const MediaCoverSchema: z.ZodType<MediaCoverType> = z
  .strictObject({
    url: z.string().nullable().exactOptional(),
    coverType: MediaCoverTypesSchema.exactOptional(),
    extension: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    remoteUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaCover')

type LinksType = { url?: string | null; name?: string | null }

const LinksSchema: z.ZodType<LinksType> = z
  .strictObject({
    url: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Links')

type AlbumStatisticsResourceType = {
  trackFileCount?: number
  trackCount?: number
  totalTrackCount?: number
  sizeOnDisk?: bigint
  percentOfTracks?: number
}

const AlbumStatisticsResourceSchema: z.ZodType<AlbumStatisticsResourceType> = z
  .strictObject({
    trackFileCount: z.int32().exactOptional(),
    trackCount: z.int32().exactOptional(),
    totalTrackCount: z.int32().exactOptional(),
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
    percentOfTracks: z.float64().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('AlbumStatisticsResource')

const AddAlbumOptionsSchema: z.ZodType<AddAlbumOptionsType> = z
  .strictObject({
    addType: AlbumAddTypeSchema.exactOptional(),
    searchForNewAlbum: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddAlbumOptions')

type AlbumResourceType = {
  id?: number
  title?: string | null
  disambiguation?: string | null
  overview?: string | null
  artistId?: number
  foreignAlbumId?: string | null
  monitored?: boolean
  anyReleaseOk?: boolean
  profileId?: number
  duration?: number
  albumType?: string | null
  secondaryTypes?: string[] | null
  mediumCount?: number
  ratings?: z.infer<typeof RatingsSchema>
  releaseDate?: string | null
  releases?: z.infer<typeof AlbumReleaseResourceSchema>[] | null
  genres?: string[] | null
  media?: z.infer<typeof MediumResourceSchema>[] | null
  artist?: z.infer<typeof ArtistResourceSchema>
  images?: z.infer<typeof MediaCoverSchema>[] | null
  links?: z.infer<typeof LinksSchema>[] | null
  lastSearchTime?: string | null
  statistics?: z.infer<typeof AlbumStatisticsResourceSchema>
  addOptions?: z.infer<typeof AddAlbumOptionsSchema>
  remoteCover?: string | null
}

type ArtistStatusTypeType = 'continuing' | 'ended' | 'deleted'

const ArtistStatusTypeSchema: z.ZodType<ArtistStatusTypeType> = z
  .enum(['continuing', 'ended', 'deleted'])
  .openapi('ArtistStatusType')

const AlbumResourceSchema: z.ZodType<AlbumResourceType> = z
  .lazy(() =>
    z
      .strictObject({
        id: z.int32().exactOptional(),
        title: z.string().nullable().exactOptional(),
        disambiguation: z.string().nullable().exactOptional(),
        overview: z.string().nullable().exactOptional(),
        artistId: z.int32().exactOptional(),
        foreignAlbumId: z.string().nullable().exactOptional(),
        monitored: z.boolean().exactOptional(),
        anyReleaseOk: z.boolean().exactOptional(),
        profileId: z.int32().exactOptional(),
        duration: z.int32().exactOptional(),
        albumType: z.string().nullable().exactOptional(),
        secondaryTypes: z.array(z.string()).nullable().exactOptional(),
        mediumCount: z.int32().exactOptional().openapi({ readOnly: true }),
        ratings: RatingsSchema.exactOptional(),
        releaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        releases: z.array(AlbumReleaseResourceSchema).nullable().exactOptional(),
        genres: z.array(z.string()).nullable().exactOptional(),
        media: z.array(MediumResourceSchema).nullable().exactOptional(),
        artist: ArtistResourceSchema.exactOptional(),
        images: z.array(MediaCoverSchema).nullable().exactOptional(),
        links: z.array(LinksSchema).nullable().exactOptional(),
        lastSearchTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        statistics: AlbumStatisticsResourceSchema.exactOptional(),
        addOptions: AddAlbumOptionsSchema.exactOptional(),
        remoteCover: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('AlbumResource')

type MemberType = {
  name?: string | null
  instrument?: string | null
  images?: z.infer<typeof MediaCoverSchema>[] | null
}

const MemberSchema: z.ZodType<MemberType> = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    instrument: z.string().nullable().exactOptional(),
    images: z.array(MediaCoverSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Member')

type NewItemMonitorTypesType = 'all' | 'none' | 'new'

const NewItemMonitorTypesSchema: z.ZodType<NewItemMonitorTypesType> = z
  .enum(['all', 'none', 'new'])
  .openapi('NewItemMonitorTypes')

const AddArtistOptionsSchema: z.ZodType<AddArtistOptionsType> = z
  .strictObject({
    monitor: MonitorTypesSchema.exactOptional(),
    albumsToMonitor: z.array(z.string()).nullable().exactOptional(),
    monitored: z.boolean().exactOptional(),
    searchForMissingAlbums: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddArtistOptions')

type ArtistStatisticsResourceType = {
  albumCount?: number
  trackFileCount?: number
  trackCount?: number
  totalTrackCount?: number
  sizeOnDisk?: bigint
  percentOfTracks?: number
}

const ArtistStatisticsResourceSchema: z.ZodType<ArtistStatisticsResourceType> = z
  .strictObject({
    albumCount: z.int32().exactOptional(),
    trackFileCount: z.int32().exactOptional(),
    trackCount: z.int32().exactOptional(),
    totalTrackCount: z.int32().exactOptional(),
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
    percentOfTracks: z.float64().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ArtistStatisticsResource')

type ArtistResourceType = {
  id?: number
  status?: z.infer<typeof ArtistStatusTypeSchema>
  ended?: boolean
  artistName?: string | null
  foreignArtistId?: string | null
  mbId?: string | null
  tadbId?: number
  discogsId?: number
  allMusicId?: string | null
  overview?: string | null
  artistType?: string | null
  disambiguation?: string | null
  links?: z.infer<typeof LinksSchema>[] | null
  nextAlbum?: z.infer<typeof AlbumResourceSchema>
  lastAlbum?: z.infer<typeof AlbumResourceSchema>
  images?: z.infer<typeof MediaCoverSchema>[] | null
  members?: z.infer<typeof MemberSchema>[] | null
  remotePoster?: string | null
  path?: string | null
  qualityProfileId?: number
  metadataProfileId?: number
  monitored?: boolean
  monitorNewItems?: z.infer<typeof NewItemMonitorTypesSchema>
  rootFolderPath?: string | null
  folder?: string | null
  genres?: string[] | null
  cleanName?: string | null
  sortName?: string | null
  tags?: number[] | null
  added?: string
  addOptions?: z.infer<typeof AddArtistOptionsSchema>
  ratings?: z.infer<typeof RatingsSchema>
  statistics?: z.infer<typeof ArtistStatisticsResourceSchema>
}

const SelectOptionSchema = z
  .strictObject({
    value: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    hint: z.string().nullable().exactOptional(),
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
    value: z.any().nullable().exactOptional(),
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

const ImportListMonitorTypeSchema = z
  .enum(['none', 'specificAlbum', 'entireArtist'])
  .openapi('ImportListMonitorType')

const ImportListTypeSchema = z
  .enum(['program', 'spotify', 'lastFm', 'other', 'advanced'])
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
  enableAutomaticAdd?: boolean
  shouldMonitor?: z.infer<typeof ImportListMonitorTypeSchema>
  shouldMonitorExisting?: boolean
  shouldSearch?: boolean
  rootFolderPath?: string | null
  monitorNewItems?: z.infer<typeof NewItemMonitorTypesSchema>
  qualityProfileId?: number
  metadataProfileId?: number
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
  onReleaseImport?: boolean
  onUpgrade?: boolean
  onRename?: boolean
  onArtistAdd?: boolean
  onArtistDelete?: boolean
  onAlbumDelete?: boolean
  onHealthIssue?: boolean
  onHealthRestored?: boolean
  onDownloadFailure?: boolean
  onImportFailure?: boolean
  onTrackRetag?: boolean
  onApplicationUpdate?: boolean
  supportsOnGrab?: boolean
  supportsOnReleaseImport?: boolean
  supportsOnUpgrade?: boolean
  supportsOnRename?: boolean
  supportsOnArtistAdd?: boolean
  supportsOnArtistDelete?: boolean
  supportsOnAlbumDelete?: boolean
  supportsOnHealthIssue?: boolean
  supportsOnHealthRestored?: boolean
  includeHealthWarnings?: boolean
  supportsOnDownloadFailure?: boolean
  supportsOnImportFailure?: boolean
  supportsOnTrackRetag?: boolean
  supportsOnApplicationUpdate?: boolean
  testCommand?: string | null
}

const QualitySchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Quality')

type QualityProfileQualityItemResourceType = {
  id?: number
  name?: string | null
  quality?: z.infer<typeof QualitySchema>
  items?: QualityProfileQualityItemResourceType[] | null
  allowed?: boolean
}

const SortDirectionSchema = z.enum(['default', 'ascending', 'descending']).openapi('SortDirection')

const AlbumResourcePagingResourceSchema = z
  .strictObject({
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    sortKey: z.string().nullable().exactOptional(),
    sortDirection: SortDirectionSchema.exactOptional(),
    totalRecords: z.int32().exactOptional(),
    records: z.array(AlbumResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumResourcePagingResource')

const AlbumStudioArtistResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    monitored: z.boolean().nullable().exactOptional(),
    albums: z.array(AlbumResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumStudioArtistResource')

const MonitoringOptionsSchema = z
  .strictObject({
    monitor: MonitorTypesSchema.exactOptional(),
    albumsToMonitor: z.array(z.string()).nullable().exactOptional(),
    monitored: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitoringOptions')

const AlbumStudioResourceSchema = z
  .strictObject({
    artist: z.array(AlbumStudioArtistResourceSchema).nullable().exactOptional(),
    monitoringOptions: MonitoringOptionsSchema.exactOptional(),
    monitorNewItems: NewItemMonitorTypesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumStudioResource')

const AlbumsMonitoredResourceSchema = z
  .strictObject({
    albumIds: z.array(z.int32()).nullable().exactOptional(),
    monitored: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumsMonitoredResource')

const AllowFingerprintingSchema = z
  .enum(['never', 'newFiles', 'allFiles'])
  .openapi('AllowFingerprinting')

const ApplyTagsSchema = z.enum(['add', 'remove', 'replace']).openapi('ApplyTags')

const ArtistEditorResourceSchema = z
  .strictObject({
    artistIds: z.array(z.int32()).nullable().exactOptional(),
    monitored: z.boolean().nullable().exactOptional(),
    monitorNewItems: NewItemMonitorTypesSchema.exactOptional(),
    qualityProfileId: z.int32().nullable().exactOptional(),
    metadataProfileId: z.int32().nullable().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    tags: z.array(z.int32()).nullable().exactOptional(),
    applyTags: ApplyTagsSchema.exactOptional(),
    moveFiles: z.boolean().exactOptional(),
    deleteFiles: z.boolean().exactOptional(),
    addImportListExclusion: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistEditorResource')

const ArtistTitleInfoSchema = z
  .strictObject({
    title: z.string().nullable().exactOptional(),
    titleWithoutYear: z.string().nullable().exactOptional(),
    year: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistTitleInfo')

const AuthenticationRequiredTypeSchema = z
  .enum(['enabled', 'disabledForLocalAddresses'])
  .openapi('AuthenticationRequiredType')

const AuthenticationTypeSchema = z
  .enum(['none', 'basic', 'forms', 'external'])
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

const BlocklistBulkResourceSchema = z
  .strictObject({ ids: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BlocklistBulkResource')

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

const BlocklistResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    artistId: z.int32().exactOptional(),
    albumIds: z.array(z.int32()).nullable().exactOptional(),
    sourceTitle: z.string().nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    protocol: DownloadProtocolSchema.exactOptional(),
    indexer: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    artist: ArtistResourceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlocklistResource')

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

const CertificateValidationTypeSchema = z
  .enum(['enabled', 'disabledForLocalAddresses', 'disabled'])
  .openapi('CertificateValidationType')

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

const EntityHistoryEventTypeSchema = z
  .enum([
    'unknown',
    'grabbed',
    'artistFolderImported',
    'trackFileImported',
    'downloadFailed',
    'trackFileDeleted',
    'trackFileRenamed',
    'albumImportIncomplete',
    'downloadImported',
    'trackFileRetagged',
    'downloadIgnored',
  ])
  .openapi('EntityHistoryEventType')

const FileDateTypeSchema = z.enum(['none', 'albumReleaseDate']).openapi('FileDateType')

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

const MediaInfoResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    audioChannels: z.float64().exactOptional(),
    audioBitRate: z.string().nullable().exactOptional(),
    audioCodec: z.string().nullable().exactOptional(),
    audioBits: z.string().nullable().exactOptional(),
    audioSampleRate: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaInfoResource')

const IsoCountrySchema = z
  .strictObject({
    twoLetterCode: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IsoCountry')

const MediaInfoModelSchema = z
  .strictObject({
    audioFormat: z.string().nullable().exactOptional(),
    audioBitrate: z.int32().exactOptional(),
    audioChannels: z.int32().exactOptional(),
    audioBits: z.int32().exactOptional(),
    audioSampleRate: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaInfoModel')

const ParsedTrackInfoSchema = z
  .strictObject({
    title: z.string().nullable().exactOptional(),
    cleanTitle: z.string().nullable().exactOptional(),
    artistTitle: z.string().nullable().exactOptional(),
    albumTitle: z.string().nullable().exactOptional(),
    artistTitleInfo: ArtistTitleInfoSchema.exactOptional(),
    artistMBId: z.string().nullable().exactOptional(),
    albumMBId: z.string().nullable().exactOptional(),
    releaseMBId: z.string().nullable().exactOptional(),
    recordingMBId: z.string().nullable().exactOptional(),
    trackMBId: z.string().nullable().exactOptional(),
    discNumber: z.int32().exactOptional(),
    discCount: z.int32().exactOptional(),
    country: IsoCountrySchema.exactOptional(),
    year: z.int32().exactOptional(),
    label: z.string().nullable().exactOptional(),
    catalogNumber: z.string().nullable().exactOptional(),
    disambiguation: z.string().nullable().exactOptional(),
    duration: z.string().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    mediaInfo: MediaInfoModelSchema.exactOptional(),
    trackNumbers: z.array(z.int32()).nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    releaseHash: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParsedTrackInfo')

const TrackFileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    artistId: z.int32().exactOptional(),
    albumId: z.int32().exactOptional(),
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
    quality: QualityModelSchema.exactOptional(),
    qualityWeight: z.int32().exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    indexerFlags: z.int32().nullable().exactOptional(),
    mediaInfo: MediaInfoResourceSchema.exactOptional(),
    qualityCutoffNotMet: z.boolean().exactOptional(),
    audioTags: ParsedTrackInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackFileResource')

const TrackResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    artistId: z.int32().exactOptional(),
    foreignTrackId: z.string().nullable().exactOptional(),
    foreignRecordingId: z.string().nullable().exactOptional(),
    trackFileId: z.int32().exactOptional(),
    albumId: z.int32().exactOptional(),
    explicit: z.boolean().exactOptional(),
    absoluteTrackNumber: z.int32().exactOptional(),
    trackNumber: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    duration: z.int32().exactOptional(),
    trackFile: TrackFileResourceSchema.exactOptional(),
    mediumNumber: z.int32().exactOptional(),
    hasFile: z.boolean().exactOptional(),
    artist: ArtistResourceSchema.exactOptional(),
    ratings: RatingsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackResource')

const HistoryResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    albumId: z.int32().exactOptional(),
    artistId: z.int32().exactOptional(),
    trackId: z.int32().exactOptional(),
    sourceTitle: z.string().nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    qualityCutoffNotMet: z.boolean().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    eventType: EntityHistoryEventTypeSchema.exactOptional(),
    data: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    album: AlbumResourceSchema.exactOptional(),
    artist: ArtistResourceSchema.exactOptional(),
    track: TrackResourceSchema.exactOptional(),
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
    analyticsEnabled: z.boolean().exactOptional(),
    username: z.string().nullable().exactOptional(),
    password: z.string().nullable().exactOptional(),
    passwordConfirmation: z.string().nullable().exactOptional(),
    logLevel: z.string().nullable().exactOptional(),
    logSizeLimit: z.int32().exactOptional(),
    consoleLogLevel: z.string().nullable().exactOptional(),
    branch: z.string().nullable().exactOptional(),
    apiKey: z.string().nullable().exactOptional(),
    sslCertPath: z.string().nullable().exactOptional(),
    sslCertPassword: z.string().nullable().exactOptional(),
    urlBase: z.string().nullable().exactOptional(),
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
    enableAutomaticAdd: z.boolean().nullable().exactOptional(),
    rootFolderPath: z.string().nullable().exactOptional(),
    qualityProfileId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListBulkResource')

const ImportListExclusionResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    foreignId: z.string().nullable().exactOptional(),
    artistName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportListExclusionResource')

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
        enableAutomaticAdd: z.boolean().exactOptional(),
        shouldMonitor: ImportListMonitorTypeSchema.exactOptional(),
        shouldMonitorExisting: z.boolean().exactOptional(),
        shouldSearch: z.boolean().exactOptional(),
        rootFolderPath: z.string().nullable().exactOptional(),
        monitorNewItems: NewItemMonitorTypesSchema.exactOptional(),
        qualityProfileId: z.int32().exactOptional(),
        metadataProfileId: z.int32().exactOptional(),
        listType: ImportListTypeSchema.exactOptional(),
        listOrder: z.int32().exactOptional(),
        minRefreshInterval: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ImportListResource')

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

const LocalizationResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    strings: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalizationResource')

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

const RejectionTypeSchema = z.enum(['permanent', 'temporary']).openapi('RejectionType')

const RejectionSchema = z
  .strictObject({
    reason: z.string().nullable().exactOptional(),
    type: RejectionTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Rejection')

const ManualImportResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
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
    artist: ArtistResourceSchema.exactOptional(),
    album: AlbumResourceSchema.exactOptional(),
    albumReleaseId: z.int32().exactOptional(),
    tracks: z.array(TrackResourceSchema).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    qualityWeight: z.int32().exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    indexerFlags: z.int32().exactOptional(),
    rejections: z.array(RejectionSchema).nullable().exactOptional(),
    audioTags: ParsedTrackInfoSchema.exactOptional(),
    additionalFile: z.boolean().exactOptional(),
    replaceExistingFiles: z.boolean().exactOptional(),
    disableReleaseSwitching: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManualImportResource')

const ManualImportUpdateResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    artistId: z.int32().nullable().exactOptional(),
    albumId: z.int32().nullable().exactOptional(),
    albumReleaseId: z.int32().nullable().exactOptional(),
    tracks: z.array(TrackResourceSchema).nullable().exactOptional(),
    trackIds: z.array(z.int32()).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    indexerFlags: z.int32().exactOptional(),
    downloadId: z.string().nullable().exactOptional(),
    additionalFile: z.boolean().exactOptional(),
    replaceExistingFiles: z.boolean().exactOptional(),
    disableReleaseSwitching: z.boolean().exactOptional(),
    rejections: z.array(RejectionSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManualImportUpdateResource')

const ProperDownloadTypesSchema = z
  .enum(['preferAndUpgrade', 'doNotUpgrade', 'doNotPrefer'])
  .openapi('ProperDownloadTypes')

const RescanAfterRefreshTypeSchema = z
  .enum(['always', 'afterManual', 'never'])
  .openapi('RescanAfterRefreshType')

const MediaManagementConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    autoUnmonitorPreviouslyDownloadedTracks: z.boolean().exactOptional(),
    recycleBin: z.string().nullable().exactOptional(),
    recycleBinCleanupDays: z.int32().exactOptional(),
    downloadPropersAndRepacks: ProperDownloadTypesSchema.exactOptional(),
    createEmptyArtistFolders: z.boolean().exactOptional(),
    deleteEmptyFolders: z.boolean().exactOptional(),
    fileDate: FileDateTypeSchema.exactOptional(),
    watchLibraryForChanges: z.boolean().exactOptional(),
    rescanAfterRefresh: RescanAfterRefreshTypeSchema.exactOptional(),
    allowFingerprinting: AllowFingerprintingSchema.exactOptional(),
    setPermissionsLinux: z.boolean().exactOptional(),
    chmodFolder: z.string().nullable().exactOptional(),
    chownGroup: z.string().nullable().exactOptional(),
    skipFreeSpaceCheckWhenImporting: z.boolean().exactOptional(),
    minimumFreeSpaceWhenImporting: z.int32().exactOptional(),
    copyUsingHardlinks: z.boolean().exactOptional(),
    enableMediaInfo: z.boolean().exactOptional(),
    useScriptImport: z.boolean().exactOptional(),
    scriptImportPath: z.string().nullable().exactOptional(),
    importExtraFiles: z.boolean().exactOptional(),
    extraFileExtensions: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaManagementConfigResource')

const PrimaryAlbumTypeSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PrimaryAlbumType')

const ProfilePrimaryAlbumTypeItemResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    albumType: PrimaryAlbumTypeSchema.exactOptional(),
    allowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfilePrimaryAlbumTypeItemResource')

const SecondaryAlbumTypeSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('SecondaryAlbumType')

const ProfileSecondaryAlbumTypeItemResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    albumType: SecondaryAlbumTypeSchema.exactOptional(),
    allowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileSecondaryAlbumTypeItemResource')

const ReleaseStatusSchema = z
  .strictObject({ id: z.int32().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReleaseStatus')

const ProfileReleaseStatusItemResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    releaseStatus: ReleaseStatusSchema.exactOptional(),
    allowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileReleaseStatusItemResource')

const MetadataProfileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    primaryAlbumTypes: z
      .array(ProfilePrimaryAlbumTypeItemResourceSchema)
      .nullable()
      .exactOptional(),
    secondaryAlbumTypes: z
      .array(ProfileSecondaryAlbumTypeItemResourceSchema)
      .nullable()
      .exactOptional(),
    releaseStatuses: z.array(ProfileReleaseStatusItemResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataProfileResource')

const WriteAudioTagsTypeSchema = z
  .enum(['no', 'newFiles', 'allFiles', 'sync'])
  .openapi('WriteAudioTagsType')

const MetadataProviderConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    metadataSource: z.string().nullable().exactOptional(),
    writeAudioTags: WriteAudioTagsTypeSchema.exactOptional(),
    scrubAudioTags: z.boolean().exactOptional(),
    embedCoverArt: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataProviderConfigResource')

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

const NamingConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    renameTracks: z.boolean().exactOptional(),
    replaceIllegalCharacters: z.boolean().exactOptional(),
    colonReplacementFormat: z.int32().exactOptional(),
    standardTrackFormat: z.string().nullable().exactOptional(),
    multiDiscTrackFormat: z.string().nullable().exactOptional(),
    artistFolderFormat: z.string().nullable().exactOptional(),
    includeArtistName: z.boolean().exactOptional(),
    includeAlbumTitle: z.boolean().exactOptional(),
    includeQuality: z.boolean().exactOptional(),
    replaceSpaces: z.boolean().exactOptional(),
    separator: z.string().nullable().exactOptional(),
    numberStyle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NamingConfigResource')

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
        onReleaseImport: z.boolean().exactOptional(),
        onUpgrade: z.boolean().exactOptional(),
        onRename: z.boolean().exactOptional(),
        onArtistAdd: z.boolean().exactOptional(),
        onArtistDelete: z.boolean().exactOptional(),
        onAlbumDelete: z.boolean().exactOptional(),
        onHealthIssue: z.boolean().exactOptional(),
        onHealthRestored: z.boolean().exactOptional(),
        onDownloadFailure: z.boolean().exactOptional(),
        onImportFailure: z.boolean().exactOptional(),
        onTrackRetag: z.boolean().exactOptional(),
        onApplicationUpdate: z.boolean().exactOptional(),
        supportsOnGrab: z.boolean().exactOptional(),
        supportsOnReleaseImport: z.boolean().exactOptional(),
        supportsOnUpgrade: z.boolean().exactOptional(),
        supportsOnRename: z.boolean().exactOptional(),
        supportsOnArtistAdd: z.boolean().exactOptional(),
        supportsOnArtistDelete: z.boolean().exactOptional(),
        supportsOnAlbumDelete: z.boolean().exactOptional(),
        supportsOnHealthIssue: z.boolean().exactOptional(),
        supportsOnHealthRestored: z.boolean().exactOptional(),
        includeHealthWarnings: z.boolean().exactOptional(),
        supportsOnDownloadFailure: z.boolean().exactOptional(),
        supportsOnImportFailure: z.boolean().exactOptional(),
        supportsOnTrackRetag: z.boolean().exactOptional(),
        supportsOnApplicationUpdate: z.boolean().exactOptional(),
        testCommand: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('NotificationResource')

const ParsedAlbumInfoSchema = z
  .strictObject({
    releaseTitle: z.string().nullable().exactOptional(),
    albumTitle: z.string().nullable().exactOptional(),
    artistName: z.string().nullable().exactOptional(),
    albumType: z.string().nullable().exactOptional(),
    artistTitleInfo: ArtistTitleInfoSchema.exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    releaseDate: z.string().nullable().exactOptional(),
    discography: z.boolean().exactOptional(),
    discographyStart: z.int32().exactOptional(),
    discographyEnd: z.int32().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
    releaseHash: z.string().nullable().exactOptional(),
    releaseVersion: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParsedAlbumInfo')

const ParseResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    parsedAlbumInfo: ParsedAlbumInfoSchema.exactOptional(),
    artist: ArtistResourceSchema.exactOptional(),
    albums: z.array(AlbumResourceSchema).nullable().exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParseResource')

const PingResourceSchema = z
  .strictObject({ status: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PingResource')

const ProfileFormatItemResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    format: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    score: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileFormatItemResource')

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
    formatItems: z.array(ProfileFormatItemResourceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QualityProfileResource')

const QueueBulkResourceSchema = z
  .strictObject({ ids: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueueBulkResource')

const TrackedDownloadStatusSchema = z
  .enum(['ok', 'warning', 'error'])
  .openapi('TrackedDownloadStatus')

const TrackedDownloadStateSchema = z
  .enum([
    'downloading',
    'downloadFailed',
    'downloadFailedPending',
    'importBlocked',
    'importPending',
    'importing',
    'importFailed',
    'imported',
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
    artistId: z.int32().nullable().exactOptional(),
    albumId: z.int32().nullable().exactOptional(),
    artist: ArtistResourceSchema.exactOptional(),
    album: AlbumResourceSchema.exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    size: z.float64().exactOptional(),
    title: z.string().nullable().exactOptional(),
    sizeleft: z.float64().exactOptional(),
    timeleft: z.string().nullable().exactOptional(),
    estimatedCompletionTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    added: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
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
    trackFileCount: z.int32().exactOptional(),
    trackHasFileCount: z.int32().exactOptional(),
    downloadForced: z.boolean().exactOptional(),
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

const ReleaseProfileResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    enabled: z.boolean().exactOptional(),
    required: z.array(z.string()).nullable().exactOptional(),
    ignored: z.array(z.string()).nullable().exactOptional(),
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
    discography: z.boolean().exactOptional(),
    sceneSource: z.boolean().exactOptional(),
    airDate: z.string().nullable().exactOptional(),
    artistName: z.string().nullable().exactOptional(),
    albumTitle: z.string().nullable().exactOptional(),
    approved: z.boolean().exactOptional(),
    temporarilyRejected: z.boolean().exactOptional(),
    rejected: z.boolean().exactOptional(),
    rejections: z.array(z.string()).nullable().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).exactOptional(),
    commentUrl: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
    infoUrl: z.string().nullable().exactOptional(),
    downloadAllowed: z.boolean().exactOptional(),
    releaseWeight: z.int32().exactOptional(),
    customFormats: z.array(CustomFormatResourceSchema).nullable().exactOptional(),
    customFormatScore: z.int32().exactOptional(),
    magnetUrl: z.string().nullable().exactOptional(),
    infoHash: z.string().nullable().exactOptional(),
    seeders: z.int32().nullable().exactOptional(),
    leechers: z.int32().nullable().exactOptional(),
    protocol: DownloadProtocolSchema.exactOptional(),
    indexerFlags: z.int32().exactOptional(),
    artistId: z.int32().nullable().exactOptional(),
    albumId: z.int32().nullable().exactOptional(),
    downloadClientId: z.int32().nullable().exactOptional(),
    downloadClient: z.string().nullable().exactOptional(),
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

const RenameTrackResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    artistId: z.int32().exactOptional(),
    albumId: z.int32().exactOptional(),
    trackNumbers: z.array(z.int32()).nullable().exactOptional(),
    trackFileId: z.int32().exactOptional(),
    existingPath: z.string().nullable().exactOptional(),
    newPath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RenameTrackResource')

const TagDifferenceSchema = z
  .strictObject({
    field: z.string().nullable().exactOptional(),
    oldValue: z.string().nullable().exactOptional(),
    newValue: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagDifference')

const RetagTrackResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    artistId: z.int32().exactOptional(),
    albumId: z.int32().exactOptional(),
    trackNumbers: z.array(z.int32()).nullable().exactOptional(),
    trackFileId: z.int32().exactOptional(),
    path: z.string().nullable().exactOptional(),
    changes: z.array(TagDifferenceSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RetagTrackResource')

const RootFolderResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    defaultMetadataProfileId: z.int32().exactOptional(),
    defaultQualityProfileId: z.int32().exactOptional(),
    defaultMonitorOption: MonitorTypesSchema.exactOptional(),
    defaultNewItemMonitorOption: NewItemMonitorTypesSchema.exactOptional(),
    defaultTags: z
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
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('RootFolderResource')

const RuntimeModeSchema = z.enum(['console', 'service', 'tray']).openapi('RuntimeMode')

const SearchResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    foreignId: z.string().nullable().exactOptional(),
    artist: ArtistResourceSchema.exactOptional(),
    album: AlbumResourceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResource')

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

const TagDetailsResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    label: z.string().nullable().exactOptional(),
    delayProfileIds: z.array(z.int32()).nullable().exactOptional(),
    importListIds: z.array(z.int32()).nullable().exactOptional(),
    notificationIds: z.array(z.int32()).nullable().exactOptional(),
    restrictionIds: z.array(z.int32()).nullable().exactOptional(),
    indexerIds: z.array(z.int32()).nullable().exactOptional(),
    downloadClientIds: z.array(z.int32()).nullable().exactOptional(),
    autoTagIds: z.array(z.int32()).nullable().exactOptional(),
    artistIds: z.array(z.int32()).nullable().exactOptional(),
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

const TrackFileListResourceSchema = z
  .strictObject({
    trackFileIds: z.array(z.int32()).nullable().exactOptional(),
    quality: QualityModelSchema.exactOptional(),
    sceneName: z.string().nullable().exactOptional(),
    releaseGroup: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackFileListResource')

const UiConfigResourceSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    firstDayOfWeek: z.int32().exactOptional(),
    calendarWeekColumnHeader: z.string().nullable().exactOptional(),
    shortDateFormat: z.string().nullable().exactOptional(),
    longDateFormat: z.string().nullable().exactOptional(),
    timeFormat: z.string().nullable().exactOptional(),
    showRelativeDates: z.boolean().exactOptional(),
    enableColorImpairedMode: z.boolean().exactOptional(),
    uiLanguage: z.int32().exactOptional(),
    expandAlbumByDefault: z.boolean().exactOptional(),
    expandSingleByDefault: z.boolean().exactOptional(),
    expandEPByDefault: z.boolean().exactOptional(),
    expandBroadcastByDefault: z.boolean().exactOptional(),
    expandOtherByDefault: z.boolean().exactOptional(),
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

export const getApiV1AlbumRoute = createRoute({
  method: 'get',
  path: '/api/v1/album',
  tags: ['Album'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumIds: z
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
            name: 'albumIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      foreignAlbumId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'foreignAlbumId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeAllArtistAlbums: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAllArtistAlbums',
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
      content: {
        'text/plain': { schema: z.array(AlbumResourceSchema) },
        'application/json': { schema: z.array(AlbumResourceSchema) },
        'text/json': { schema: z.array(AlbumResourceSchema) },
      },
    },
  },
})

export const postApiV1AlbumRoute = createRoute({
  method: 'post',
  path: '/api/v1/album',
  tags: ['Album'],
  request: {
    body: {
      content: {
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
        'application/*+json': { schema: AlbumResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AlbumResourceSchema },
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
      },
    },
  },
})

export const getApiV1AlbumIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/album/{id}',
  tags: ['Album'],
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
      content: {
        'text/plain': { schema: AlbumResourceSchema },
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
      },
    },
  },
})

export const putApiV1AlbumIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/album/{id}',
  tags: ['Album'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
        'application/*+json': { schema: AlbumResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AlbumResourceSchema },
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
      },
    },
  },
})

export const deleteApiV1AlbumIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/album/{id}',
  tags: ['Album'],
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
      addImportListExclusion: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'addImportListExclusion',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiV1AlbumMonitorRoute = createRoute({
  method: 'put',
  path: '/api/v1/album/monitor',
  tags: ['Album'],
  request: {
    body: {
      content: {
        'application/json': { schema: AlbumsMonitoredResourceSchema },
        'text/json': { schema: AlbumsMonitoredResourceSchema },
        'application/*+json': { schema: AlbumsMonitoredResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1AlbumLookupRoute = createRoute({
  method: 'get',
  path: '/api/v1/album/lookup',
  tags: ['AlbumLookup'],
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
      content: { 'application/json': { schema: z.array(AlbumResourceSchema) } },
    },
  },
})

export const postApiV1AlbumstudioRoute = createRoute({
  method: 'post',
  path: '/api/v1/albumstudio',
  tags: ['AlbumStudio'],
  request: { body: { content: { 'application/json': { schema: AlbumStudioResourceSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const getApiRoute = createRoute({
  method: 'get',
  path: '/api',
  tags: ['ApiInfo'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ArtistIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/artist/{id}',
  tags: ['Artist'],
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
      content: {
        'text/plain': { schema: ArtistResourceSchema },
        'application/json': { schema: ArtistResourceSchema },
        'text/json': { schema: ArtistResourceSchema },
      },
    },
  },
})

export const putApiV1ArtistIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/artist/{id}',
  tags: ['Artist'],
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
    body: { content: { 'application/json': { schema: ArtistResourceSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArtistResourceSchema } } },
  },
})

export const deleteApiV1ArtistIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/artist/{id}',
  tags: ['Artist'],
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
      addImportListExclusion: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'addImportListExclusion',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ArtistRoute = createRoute({
  method: 'get',
  path: '/api/v1/artist',
  tags: ['Artist'],
  request: {
    query: z.object({
      mbId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'mbId',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ArtistResourceSchema) } },
    },
  },
})

export const postApiV1ArtistRoute = createRoute({
  method: 'post',
  path: '/api/v1/artist',
  tags: ['Artist'],
  request: { body: { content: { 'application/json': { schema: ArtistResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArtistResourceSchema } } },
  },
})

export const putApiV1ArtistEditorRoute = createRoute({
  method: 'put',
  path: '/api/v1/artist/editor',
  tags: ['ArtistEditor'],
  request: {
    body: {
      content: {
        'application/json': { schema: ArtistEditorResourceSchema },
        'text/json': { schema: ArtistEditorResourceSchema },
        'application/*+json': { schema: ArtistEditorResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiV1ArtistEditorRoute = createRoute({
  method: 'delete',
  path: '/api/v1/artist/editor',
  tags: ['ArtistEditor'],
  request: {
    body: {
      content: {
        'application/json': { schema: ArtistEditorResourceSchema },
        'text/json': { schema: ArtistEditorResourceSchema },
        'application/*+json': { schema: ArtistEditorResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ArtistLookupRoute = createRoute({
  method: 'get',
  path: '/api/v1/artist/lookup',
  tags: ['ArtistLookup'],
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
      content: { 'application/json': { schema: z.array(ArtistResourceSchema) } },
    },
  },
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
  responses: { 200: { description: 'OK' } },
})

export const getLogoutRoute = createRoute({
  method: 'get',
  path: '/logout',
  tags: ['Authentication'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1AutotaggingIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/autotagging/{id}',
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
      content: {
        'text/plain': { schema: AutoTaggingResourceSchema },
        'application/json': { schema: AutoTaggingResourceSchema },
        'text/json': { schema: AutoTaggingResourceSchema },
      },
    },
  },
})

export const putApiV1AutotaggingIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/autotagging/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AutoTaggingResourceSchema },
        'application/json': { schema: AutoTaggingResourceSchema },
        'text/json': { schema: AutoTaggingResourceSchema },
      },
    },
  },
})

export const deleteApiV1AutotaggingIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/autotagging/{id}',
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

export const getApiV1AutotaggingRoute = createRoute({
  method: 'get',
  path: '/api/v1/autotagging',
  tags: ['AutoTagging'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AutoTaggingResourceSchema) } },
    },
  },
})

export const postApiV1AutotaggingRoute = createRoute({
  method: 'post',
  path: '/api/v1/autotagging',
  tags: ['AutoTagging'],
  request: { body: { content: { 'application/json': { schema: AutoTaggingResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AutoTaggingResourceSchema },
        'application/json': { schema: AutoTaggingResourceSchema },
        'text/json': { schema: AutoTaggingResourceSchema },
      },
    },
  },
})

export const getApiV1AutotaggingSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/autotagging/schema',
  tags: ['AutoTagging'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1SystemBackupRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/backup',
  tags: ['Backup'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(BackupResourceSchema) },
        'application/json': { schema: z.array(BackupResourceSchema) },
        'text/json': { schema: z.array(BackupResourceSchema) },
      },
    },
  },
})

export const deleteApiV1SystemBackupIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/system/backup/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemBackupRestoreIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/backup/restore/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemBackupRestoreUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/backup/restore/upload',
  tags: ['Backup'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1BlocklistRoute = createRoute({
  method: 'get',
  path: '/api/v1/blocklist',
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
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BlocklistResourcePagingResourceSchema } },
    },
  },
})

export const deleteApiV1BlocklistIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/blocklist/{id}',
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

export const deleteApiV1BlocklistBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/blocklist/bulk',
  tags: ['Blocklist'],
  request: {
    body: {
      content: {
        'application/json': { schema: BlocklistBulkResourceSchema },
        'text/json': { schema: BlocklistBulkResourceSchema },
        'application/*+json': { schema: BlocklistBulkResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1CalendarRoute = createRoute({
  method: 'get',
  path: '/api/v1/calendar',
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
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
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
      content: { 'application/json': { schema: z.array(AlbumResourceSchema) } },
    },
  },
})

export const getApiV1CalendarIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/calendar/{id}',
  tags: ['Calendar'],
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
      content: {
        'text/plain': { schema: AlbumResourceSchema },
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
      },
    },
  },
})

export const getFeedV1CalendarLidarrIcsRoute = createRoute({
  method: 'get',
  path: '/feed/v1/calendar/lidarr.ics',
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
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1CommandIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/command/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CommandResourceSchema },
        'application/json': { schema: CommandResourceSchema },
        'text/json': { schema: CommandResourceSchema },
      },
    },
  },
})

export const deleteApiV1CommandIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/command/{id}',
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

export const getApiV1CommandRoute = createRoute({
  method: 'get',
  path: '/api/v1/command',
  tags: ['Command'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CommandResourceSchema) } },
    },
  },
})

export const postApiV1CommandRoute = createRoute({
  method: 'post',
  path: '/api/v1/command',
  tags: ['Command'],
  request: { body: { content: { 'application/json': { schema: CommandResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CommandResourceSchema } } },
  },
})

export const getApiV1CustomfilterIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/customfilter/{id}',
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
      content: {
        'text/plain': { schema: CustomFilterResourceSchema },
        'application/json': { schema: CustomFilterResourceSchema },
        'text/json': { schema: CustomFilterResourceSchema },
      },
    },
  },
})

export const putApiV1CustomfilterIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/customfilter/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CustomFilterResourceSchema },
        'application/json': { schema: CustomFilterResourceSchema },
        'text/json': { schema: CustomFilterResourceSchema },
      },
    },
  },
})

export const deleteApiV1CustomfilterIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/customfilter/{id}',
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

export const getApiV1CustomfilterRoute = createRoute({
  method: 'get',
  path: '/api/v1/customfilter',
  tags: ['CustomFilter'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFilterResourceSchema) } },
    },
  },
})

export const postApiV1CustomfilterRoute = createRoute({
  method: 'post',
  path: '/api/v1/customfilter',
  tags: ['CustomFilter'],
  request: { body: { content: { 'application/json': { schema: CustomFilterResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CustomFilterResourceSchema },
        'application/json': { schema: CustomFilterResourceSchema },
        'text/json': { schema: CustomFilterResourceSchema },
      },
    },
  },
})

export const getApiV1CustomformatIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/customformat/{id}',
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
      content: {
        'text/plain': { schema: CustomFormatResourceSchema },
        'application/json': { schema: CustomFormatResourceSchema },
        'text/json': { schema: CustomFormatResourceSchema },
      },
    },
  },
})

export const putApiV1CustomformatIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/customformat/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CustomFormatResourceSchema },
        'application/json': { schema: CustomFormatResourceSchema },
        'text/json': { schema: CustomFormatResourceSchema },
      },
    },
  },
})

export const deleteApiV1CustomformatIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/customformat/{id}',
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

export const getApiV1CustomformatRoute = createRoute({
  method: 'get',
  path: '/api/v1/customformat',
  tags: ['CustomFormat'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CustomFormatResourceSchema) } },
    },
  },
})

export const postApiV1CustomformatRoute = createRoute({
  method: 'post',
  path: '/api/v1/customformat',
  tags: ['CustomFormat'],
  request: { body: { content: { 'application/json': { schema: CustomFormatResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CustomFormatResourceSchema },
        'application/json': { schema: CustomFormatResourceSchema },
        'text/json': { schema: CustomFormatResourceSchema },
      },
    },
  },
})

export const putApiV1CustomformatBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/customformat/bulk',
  tags: ['CustomFormat'],
  request: {
    body: { content: { 'application/json': { schema: CustomFormatBulkResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CustomFormatResourceSchema } },
    },
  },
})

export const deleteApiV1CustomformatBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/customformat/bulk',
  tags: ['CustomFormat'],
  request: {
    body: { content: { 'application/json': { schema: CustomFormatBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1CustomformatSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/customformat/schema',
  tags: ['CustomFormat'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1WantedCutoffRoute = createRoute({
  method: 'get',
  path: '/api/v1/wanted/cutoff',
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
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
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
      content: { 'application/json': { schema: AlbumResourcePagingResourceSchema } },
    },
  },
})

export const getApiV1WantedCutoffIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/wanted/cutoff/{id}',
  tags: ['Cutoff'],
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
      content: {
        'text/plain': { schema: AlbumResourceSchema },
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
      },
    },
  },
})

export const getApiV1DelayprofileRoute = createRoute({
  method: 'get',
  path: '/api/v1/delayprofile',
  tags: ['DelayProfile'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(DelayProfileResourceSchema) },
        'application/json': { schema: z.array(DelayProfileResourceSchema) },
        'text/json': { schema: z.array(DelayProfileResourceSchema) },
      },
    },
  },
})

export const postApiV1DelayprofileRoute = createRoute({
  method: 'post',
  path: '/api/v1/delayprofile',
  tags: ['DelayProfile'],
  request: {
    body: {
      content: {
        'application/json': { schema: DelayProfileResourceSchema },
        'text/json': { schema: DelayProfileResourceSchema },
        'application/*+json': { schema: DelayProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: DelayProfileResourceSchema },
        'application/json': { schema: DelayProfileResourceSchema },
        'text/json': { schema: DelayProfileResourceSchema },
      },
    },
  },
})

export const getApiV1DelayprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/delayprofile/{id}',
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
      content: {
        'text/plain': { schema: DelayProfileResourceSchema },
        'application/json': { schema: DelayProfileResourceSchema },
        'text/json': { schema: DelayProfileResourceSchema },
      },
    },
  },
})

export const putApiV1DelayprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/delayprofile/{id}',
  tags: ['DelayProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: DelayProfileResourceSchema },
        'text/json': { schema: DelayProfileResourceSchema },
        'application/*+json': { schema: DelayProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: DelayProfileResourceSchema },
        'application/json': { schema: DelayProfileResourceSchema },
        'text/json': { schema: DelayProfileResourceSchema },
      },
    },
  },
})

export const deleteApiV1DelayprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/delayprofile/{id}',
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

export const putApiV1DelayprofileReorderIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/delayprofile/reorder/{id}',
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
      afterId: z
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
            name: 'afterId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1DiskspaceRoute = createRoute({
  method: 'get',
  path: '/api/v1/diskspace',
  tags: ['DiskSpace'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DiskSpaceResourceSchema) } },
    },
  },
})

export const getApiV1DownloadclientIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/downloadclient/{id}',
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
      content: {
        'text/plain': { schema: DownloadClientResourceSchema },
        'application/json': { schema: DownloadClientResourceSchema },
        'text/json': { schema: DownloadClientResourceSchema },
      },
    },
  },
})

export const putApiV1DownloadclientIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/downloadclient/{id}',
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
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const deleteApiV1DownloadclientIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/downloadclient/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1DownloadclientRoute = createRoute({
  method: 'get',
  path: '/api/v1/downloadclient',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
  },
})

export const postApiV1DownloadclientRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient',
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
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const putApiV1DownloadclientBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/downloadclient/bulk',
  tags: ['DownloadClient'],
  request: {
    body: { content: { 'application/json': { schema: DownloadClientBulkResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientResourceSchema } },
    },
  },
})

export const deleteApiV1DownloadclientBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/downloadclient/bulk',
  tags: ['DownloadClient'],
  request: {
    body: { content: { 'application/json': { schema: DownloadClientBulkResourceSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1DownloadclientSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/downloadclient/schema',
  tags: ['DownloadClient'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(DownloadClientResourceSchema) } },
    },
  },
})

export const postApiV1DownloadclientTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient/test',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1DownloadclientTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient/testall',
  tags: ['DownloadClient'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1DownloadclientActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/downloadclient/action/{name}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ConfigDownloadclientIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/downloadclient/{id}',
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
      content: {
        'text/plain': { schema: DownloadClientConfigResourceSchema },
        'application/json': { schema: DownloadClientConfigResourceSchema },
        'text/json': { schema: DownloadClientConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigDownloadclientIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/downloadclient/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: DownloadClientConfigResourceSchema },
        'application/json': { schema: DownloadClientConfigResourceSchema },
        'text/json': { schema: DownloadClientConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigDownloadclientRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/downloadclient',
  tags: ['DownloadClientConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DownloadClientConfigResourceSchema } },
    },
  },
})

export const getApiV1FilesystemRoute = createRoute({
  method: 'get',
  path: '/api/v1/filesystem',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1FilesystemTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/filesystem/type',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1FilesystemMediafilesRoute = createRoute({
  method: 'get',
  path: '/api/v1/filesystem/mediafiles',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1HealthRoute = createRoute({
  method: 'get',
  path: '/api/v1/health',
  tags: ['Health'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(HealthResourceSchema) } },
    },
  },
})

export const getApiV1HistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/history',
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
      includeArtist: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeAlbum: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAlbum',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeTrack: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTrack',
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
      albumId: z
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
            name: 'albumId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      downloadId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'downloadId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      artistIds: z
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
            name: 'artistIds',
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

export const getApiV1HistorySinceRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/since',
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
      eventType: EntityHistoryEventTypeSchema.openapi({
        param: {
          name: 'eventType',
          in: 'query',
          schema: { $ref: '#/components/schemas/EntityHistoryEventType' },
          required: false,
        },
      }).exactOptional(),
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeAlbum: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAlbum',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeTrack: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTrack',
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

export const getApiV1HistoryArtistRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/artist',
  tags: ['History'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumId: z
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
            name: 'albumId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      eventType: EntityHistoryEventTypeSchema.openapi({
        param: {
          name: 'eventType',
          in: 'query',
          schema: { $ref: '#/components/schemas/EntityHistoryEventType' },
          required: false,
        },
      }).exactOptional(),
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeAlbum: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAlbum',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeTrack: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTrack',
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

export const postApiV1HistoryFailedIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/history/failed/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ConfigHostIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/host/{id}',
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
      content: {
        'text/plain': { schema: HostConfigResourceSchema },
        'application/json': { schema: HostConfigResourceSchema },
        'text/json': { schema: HostConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigHostIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/host/{id}',
  tags: ['HostConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: HostConfigResourceSchema },
        'text/json': { schema: HostConfigResourceSchema },
        'application/*+json': { schema: HostConfigResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: HostConfigResourceSchema },
        'application/json': { schema: HostConfigResourceSchema },
        'text/json': { schema: HostConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigHostRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/host',
  tags: ['HostConfig'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: HostConfigResourceSchema },
        'application/json': { schema: HostConfigResourceSchema },
        'text/json': { schema: HostConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ImportlistIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/importlist/{id}',
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
      content: {
        'text/plain': { schema: ImportListResourceSchema },
        'application/json': { schema: ImportListResourceSchema },
        'text/json': { schema: ImportListResourceSchema },
      },
    },
  },
})

export const putApiV1ImportlistIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/importlist/{id}',
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
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListResourceSchema } },
    },
  },
})

export const deleteApiV1ImportlistIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/importlist/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ImportlistRoute = createRoute({
  method: 'get',
  path: '/api/v1/importlist',
  tags: ['ImportList'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListResourceSchema) } },
    },
  },
})

export const postApiV1ImportlistRoute = createRoute({
  method: 'post',
  path: '/api/v1/importlist',
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
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListResourceSchema } },
    },
  },
})

export const putApiV1ImportlistBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/importlist/bulk',
  tags: ['ImportList'],
  request: { body: { content: { 'application/json': { schema: ImportListBulkResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportListResourceSchema } },
    },
  },
})

export const deleteApiV1ImportlistBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/importlist/bulk',
  tags: ['ImportList'],
  request: { body: { content: { 'application/json': { schema: ImportListBulkResourceSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ImportlistSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/importlist/schema',
  tags: ['ImportList'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ImportListResourceSchema) } },
    },
  },
})

export const postApiV1ImportlistTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/importlist/test',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1ImportlistTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/importlist/testall',
  tags: ['ImportList'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1ImportlistActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/importlist/action/{name}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ImportlistexclusionIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/importlistexclusion/{id}',
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
      content: {
        'text/plain': { schema: ImportListExclusionResourceSchema },
        'application/json': { schema: ImportListExclusionResourceSchema },
        'text/json': { schema: ImportListExclusionResourceSchema },
      },
    },
  },
})

export const putApiV1ImportlistexclusionIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/importlistexclusion/{id}',
  tags: ['ImportListExclusion'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: ImportListExclusionResourceSchema },
        'text/json': { schema: ImportListExclusionResourceSchema },
        'application/*+json': { schema: ImportListExclusionResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ImportListExclusionResourceSchema },
        'application/json': { schema: ImportListExclusionResourceSchema },
        'text/json': { schema: ImportListExclusionResourceSchema },
      },
    },
  },
})

export const deleteApiV1ImportlistexclusionIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/importlistexclusion/{id}',
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

export const getApiV1ImportlistexclusionRoute = createRoute({
  method: 'get',
  path: '/api/v1/importlistexclusion',
  tags: ['ImportListExclusion'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ImportListExclusionResourceSchema) },
        'application/json': { schema: z.array(ImportListExclusionResourceSchema) },
        'text/json': { schema: z.array(ImportListExclusionResourceSchema) },
      },
    },
  },
})

export const postApiV1ImportlistexclusionRoute = createRoute({
  method: 'post',
  path: '/api/v1/importlistexclusion',
  tags: ['ImportListExclusion'],
  request: {
    body: {
      content: {
        'application/json': { schema: ImportListExclusionResourceSchema },
        'text/json': { schema: ImportListExclusionResourceSchema },
        'application/*+json': { schema: ImportListExclusionResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ImportListExclusionResourceSchema },
        'application/json': { schema: ImportListExclusionResourceSchema },
        'text/json': { schema: ImportListExclusionResourceSchema },
      },
    },
  },
})

export const getApiV1IndexerIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: IndexerResourceSchema },
        'application/json': { schema: IndexerResourceSchema },
        'text/json': { schema: IndexerResourceSchema },
      },
    },
  },
})

export const putApiV1IndexerIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/indexer/{id}',
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
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const deleteApiV1IndexerIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/indexer/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
  },
})

export const postApiV1IndexerRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer',
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
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const putApiV1IndexerBulkRoute = createRoute({
  method: 'put',
  path: '/api/v1/indexer/bulk',
  tags: ['Indexer'],
  request: { body: { content: { 'application/json': { schema: IndexerBulkResourceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IndexerResourceSchema } } },
  },
})

export const deleteApiV1IndexerBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/indexer/bulk',
  tags: ['Indexer'],
  request: { body: { content: { 'application/json': { schema: IndexerBulkResourceSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1IndexerSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexer/schema',
  tags: ['Indexer'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IndexerResourceSchema) } },
    },
  },
})

export const postApiV1IndexerTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer/test',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1IndexerTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer/testall',
  tags: ['Indexer'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1IndexerActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/indexer/action/{name}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ConfigIndexerIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/indexer/{id}',
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
      content: {
        'text/plain': { schema: IndexerConfigResourceSchema },
        'application/json': { schema: IndexerConfigResourceSchema },
        'text/json': { schema: IndexerConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigIndexerIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/indexer/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: IndexerConfigResourceSchema },
        'application/json': { schema: IndexerConfigResourceSchema },
        'text/json': { schema: IndexerConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigIndexerRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/indexer',
  tags: ['IndexerConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IndexerConfigResourceSchema } },
    },
  },
})

export const getApiV1IndexerflagRoute = createRoute({
  method: 'get',
  path: '/api/v1/indexerflag',
  tags: ['IndexerFlag'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(IndexerFlagResourceSchema) },
        'application/json': { schema: z.array(IndexerFlagResourceSchema) },
        'text/json': { schema: z.array(IndexerFlagResourceSchema) },
      },
    },
  },
})

export const getApiV1LanguageIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/language/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: LanguageResourceSchema },
        'application/json': { schema: LanguageResourceSchema },
        'text/json': { schema: LanguageResourceSchema },
      },
    },
  },
})

export const getApiV1LanguageRoute = createRoute({
  method: 'get',
  path: '/api/v1/language',
  tags: ['Language'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LanguageResourceSchema) },
        'application/json': { schema: z.array(LanguageResourceSchema) },
        'text/json': { schema: z.array(LanguageResourceSchema) },
      },
    },
  },
})

export const getApiV1LocalizationRoute = createRoute({
  method: 'get',
  path: '/api/v1/localization',
  tags: ['Localization'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LocalizationResourceSchema } },
    },
  },
})

export const getApiV1LogRoute = createRoute({
  method: 'get',
  path: '/api/v1/log',
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

export const getApiV1LogFileRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file',
  tags: ['LogFile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LogFileResourceSchema) } },
    },
  },
})

export const getApiV1LogFileFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file/{filename}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ManualimportRoute = createRoute({
  method: 'get',
  path: '/api/v1/manualimport',
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
      artistId: z
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
            name: 'artistId',
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
      replaceExistingFiles: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'replaceExistingFiles',
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
      content: {
        'text/plain': { schema: z.array(ManualImportResourceSchema) },
        'application/json': { schema: z.array(ManualImportResourceSchema) },
        'text/json': { schema: z.array(ManualImportResourceSchema) },
      },
    },
  },
})

export const postApiV1ManualimportRoute = createRoute({
  method: 'post',
  path: '/api/v1/manualimport',
  tags: ['ManualImport'],
  request: {
    body: {
      content: {
        'application/json': { schema: z.array(ManualImportUpdateResourceSchema) },
        'text/json': { schema: z.array(ManualImportUpdateResourceSchema) },
        'application/*+json': { schema: z.array(ManualImportUpdateResourceSchema) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1MediacoverArtistArtistIdFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/mediacover/artist/{artistId}/{filename}',
  tags: ['MediaCover'],
  request: {
    params: z.object({
      artistId: z
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
            name: 'artistId',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1MediacoverAlbumAlbumIdFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/mediacover/album/{albumId}/{filename}',
  tags: ['MediaCover'],
  request: {
    params: z.object({
      albumId: z
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
            name: 'albumId',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ConfigMediamanagementIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/mediamanagement/{id}',
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
      content: {
        'text/plain': { schema: MediaManagementConfigResourceSchema },
        'application/json': { schema: MediaManagementConfigResourceSchema },
        'text/json': { schema: MediaManagementConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigMediamanagementIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/mediamanagement/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MediaManagementConfigResourceSchema },
        'application/json': { schema: MediaManagementConfigResourceSchema },
        'text/json': { schema: MediaManagementConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigMediamanagementRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/mediamanagement',
  tags: ['MediaManagementConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MediaManagementConfigResourceSchema } },
    },
  },
})

export const getApiV1MetadataIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/metadata/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataResourceSchema },
        'application/json': { schema: MetadataResourceSchema },
        'text/json': { schema: MetadataResourceSchema },
      },
    },
  },
})

export const putApiV1MetadataIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/metadata/{id}',
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
    200: { description: 'OK', content: { 'application/json': { schema: MetadataResourceSchema } } },
  },
})

export const deleteApiV1MetadataIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/metadata/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1MetadataRoute = createRoute({
  method: 'get',
  path: '/api/v1/metadata',
  tags: ['Metadata'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MetadataResourceSchema) } },
    },
  },
})

export const postApiV1MetadataRoute = createRoute({
  method: 'post',
  path: '/api/v1/metadata',
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
    200: { description: 'OK', content: { 'application/json': { schema: MetadataResourceSchema } } },
  },
})

export const getApiV1MetadataSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/metadata/schema',
  tags: ['Metadata'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MetadataResourceSchema) } },
    },
  },
})

export const postApiV1MetadataTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/metadata/test',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1MetadataTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/metadata/testall',
  tags: ['Metadata'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1MetadataActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/metadata/action/{name}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1MetadataprofileRoute = createRoute({
  method: 'get',
  path: '/api/v1/metadataprofile',
  tags: ['MetadataProfile'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(MetadataProfileResourceSchema) },
        'application/json': { schema: z.array(MetadataProfileResourceSchema) },
        'text/json': { schema: z.array(MetadataProfileResourceSchema) },
      },
    },
  },
})

export const postApiV1MetadataprofileRoute = createRoute({
  method: 'post',
  path: '/api/v1/metadataprofile',
  tags: ['MetadataProfile'],
  request: {
    body: {
      content: {
        'application/json': { schema: MetadataProfileResourceSchema },
        'text/json': { schema: MetadataProfileResourceSchema },
        'application/*+json': { schema: MetadataProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataProfileResourceSchema },
        'application/json': { schema: MetadataProfileResourceSchema },
        'text/json': { schema: MetadataProfileResourceSchema },
      },
    },
  },
})

export const getApiV1MetadataprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/metadataprofile/{id}',
  tags: ['MetadataProfile'],
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
      content: {
        'text/plain': { schema: MetadataProfileResourceSchema },
        'application/json': { schema: MetadataProfileResourceSchema },
        'text/json': { schema: MetadataProfileResourceSchema },
      },
    },
  },
})

export const putApiV1MetadataprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/metadataprofile/{id}',
  tags: ['MetadataProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: MetadataProfileResourceSchema },
        'text/json': { schema: MetadataProfileResourceSchema },
        'application/*+json': { schema: MetadataProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataProfileResourceSchema },
        'application/json': { schema: MetadataProfileResourceSchema },
        'text/json': { schema: MetadataProfileResourceSchema },
      },
    },
  },
})

export const deleteApiV1MetadataprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/metadataprofile/{id}',
  tags: ['MetadataProfile'],
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

export const getApiV1MetadataprofileSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/metadataprofile/schema',
  tags: ['MetadataProfileSchema'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataProfileResourceSchema },
        'application/json': { schema: MetadataProfileResourceSchema },
        'text/json': { schema: MetadataProfileResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigMetadataproviderIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/metadataprovider/{id}',
  tags: ['MetadataProviderConfig'],
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
      content: {
        'text/plain': { schema: MetadataProviderConfigResourceSchema },
        'application/json': { schema: MetadataProviderConfigResourceSchema },
        'text/json': { schema: MetadataProviderConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigMetadataproviderIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/metadataprovider/{id}',
  tags: ['MetadataProviderConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: MetadataProviderConfigResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataProviderConfigResourceSchema },
        'application/json': { schema: MetadataProviderConfigResourceSchema },
        'text/json': { schema: MetadataProviderConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigMetadataproviderRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/metadataprovider',
  tags: ['MetadataProviderConfig'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MetadataProviderConfigResourceSchema } },
    },
  },
})

export const getApiV1WantedMissingRoute = createRoute({
  method: 'get',
  path: '/api/v1/wanted/missing',
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
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
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
      content: { 'application/json': { schema: AlbumResourcePagingResourceSchema } },
    },
  },
})

export const getApiV1WantedMissingIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/wanted/missing/{id}',
  tags: ['Missing'],
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
      content: {
        'text/plain': { schema: AlbumResourceSchema },
        'application/json': { schema: AlbumResourceSchema },
        'text/json': { schema: AlbumResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigNamingIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/naming/{id}',
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
      content: {
        'text/plain': { schema: NamingConfigResourceSchema },
        'application/json': { schema: NamingConfigResourceSchema },
        'text/json': { schema: NamingConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigNamingIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/naming/{id}',
  tags: ['NamingConfig'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: NamingConfigResourceSchema },
        'text/json': { schema: NamingConfigResourceSchema },
        'application/*+json': { schema: NamingConfigResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: NamingConfigResourceSchema },
        'application/json': { schema: NamingConfigResourceSchema },
        'text/json': { schema: NamingConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigNamingRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/naming',
  tags: ['NamingConfig'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: NamingConfigResourceSchema },
        'application/json': { schema: NamingConfigResourceSchema },
        'text/json': { schema: NamingConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigNamingExamplesRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/naming/examples',
  tags: ['NamingConfig'],
  request: {
    query: z.object({
      renameTracks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'renameTracks',
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
      colonReplacementFormat: z
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
            name: 'colonReplacementFormat',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      standardTrackFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'standardTrackFormat',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      multiDiscTrackFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'multiDiscTrackFormat',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      artistFolderFormat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'artistFolderFormat',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeArtistName: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtistName',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeAlbumTitle: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAlbumTitle',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeQuality: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeQuality',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      replaceSpaces: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'replaceSpaces',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      separator: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'separator', in: 'query', schema: { type: 'string' }, required: false },
        }),
      numberStyle: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'numberStyle', in: 'query', schema: { type: 'string' }, required: false },
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1NotificationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/notification/{id}',
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
      content: {
        'text/plain': { schema: NotificationResourceSchema },
        'application/json': { schema: NotificationResourceSchema },
        'text/json': { schema: NotificationResourceSchema },
      },
    },
  },
})

export const putApiV1NotificationIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/notification/{id}',
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
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
  },
})

export const deleteApiV1NotificationIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/notification/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1NotificationRoute = createRoute({
  method: 'get',
  path: '/api/v1/notification',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationResourceSchema) } },
    },
  },
})

export const postApiV1NotificationRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification',
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
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NotificationResourceSchema } },
    },
  },
})

export const getApiV1NotificationSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/notification/schema',
  tags: ['Notification'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationResourceSchema) } },
    },
  },
})

export const postApiV1NotificationTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification/test',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1NotificationTestallRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification/testall',
  tags: ['Notification'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1NotificationActionNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/notification/action/{name}',
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
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ParseRoute = createRoute({
  method: 'get',
  path: '/api/v1/parse',
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
  },
})

export const headPingRoute = createRoute({
  method: 'head',
  path: '/ping',
  tags: ['Ping'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PingResourceSchema } } },
  },
})

export const getApiV1QualitydefinitionIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/qualitydefinition/{id}',
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
      content: {
        'text/plain': { schema: QualityDefinitionResourceSchema },
        'application/json': { schema: QualityDefinitionResourceSchema },
        'text/json': { schema: QualityDefinitionResourceSchema },
      },
    },
  },
})

export const putApiV1QualitydefinitionIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/qualitydefinition/{id}',
  tags: ['QualityDefinition'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: QualityDefinitionResourceSchema },
        'text/json': { schema: QualityDefinitionResourceSchema },
        'application/*+json': { schema: QualityDefinitionResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: QualityDefinitionResourceSchema },
        'application/json': { schema: QualityDefinitionResourceSchema },
        'text/json': { schema: QualityDefinitionResourceSchema },
      },
    },
  },
})

export const getApiV1QualitydefinitionRoute = createRoute({
  method: 'get',
  path: '/api/v1/qualitydefinition',
  tags: ['QualityDefinition'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(QualityDefinitionResourceSchema) },
        'application/json': { schema: z.array(QualityDefinitionResourceSchema) },
        'text/json': { schema: z.array(QualityDefinitionResourceSchema) },
      },
    },
  },
})

export const putApiV1QualitydefinitionUpdateRoute = createRoute({
  method: 'put',
  path: '/api/v1/qualitydefinition/update',
  tags: ['QualityDefinition'],
  request: {
    body: {
      content: {
        'application/json': { schema: z.array(QualityDefinitionResourceSchema) },
        'text/json': { schema: z.array(QualityDefinitionResourceSchema) },
        'application/*+json': { schema: z.array(QualityDefinitionResourceSchema) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1QualityprofileRoute = createRoute({
  method: 'get',
  path: '/api/v1/qualityprofile',
  tags: ['QualityProfile'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(QualityProfileResourceSchema) },
        'application/json': { schema: z.array(QualityProfileResourceSchema) },
        'text/json': { schema: z.array(QualityProfileResourceSchema) },
      },
    },
  },
})

export const postApiV1QualityprofileRoute = createRoute({
  method: 'post',
  path: '/api/v1/qualityprofile',
  tags: ['QualityProfile'],
  request: {
    body: {
      content: {
        'application/json': { schema: QualityProfileResourceSchema },
        'text/json': { schema: QualityProfileResourceSchema },
        'application/*+json': { schema: QualityProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: QualityProfileResourceSchema },
        'application/json': { schema: QualityProfileResourceSchema },
        'text/json': { schema: QualityProfileResourceSchema },
      },
    },
  },
})

export const getApiV1QualityprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/qualityprofile/{id}',
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
      content: {
        'text/plain': { schema: QualityProfileResourceSchema },
        'application/json': { schema: QualityProfileResourceSchema },
        'text/json': { schema: QualityProfileResourceSchema },
      },
    },
  },
})

export const putApiV1QualityprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/qualityprofile/{id}',
  tags: ['QualityProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: QualityProfileResourceSchema },
        'text/json': { schema: QualityProfileResourceSchema },
        'application/*+json': { schema: QualityProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: QualityProfileResourceSchema },
        'application/json': { schema: QualityProfileResourceSchema },
        'text/json': { schema: QualityProfileResourceSchema },
      },
    },
  },
})

export const deleteApiV1QualityprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/qualityprofile/{id}',
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

export const getApiV1QualityprofileSchemaRoute = createRoute({
  method: 'get',
  path: '/api/v1/qualityprofile/schema',
  tags: ['QualityProfileSchema'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: QualityProfileResourceSchema },
        'application/json': { schema: QualityProfileResourceSchema },
        'text/json': { schema: QualityProfileResourceSchema },
      },
    },
  },
})

export const deleteApiV1QueueIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/queue/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const deleteApiV1QueueBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/queue/bulk',
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
    body: {
      content: {
        'application/json': { schema: QueueBulkResourceSchema },
        'text/json': { schema: QueueBulkResourceSchema },
        'application/*+json': { schema: QueueBulkResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1QueueRoute = createRoute({
  method: 'get',
  path: '/api/v1/queue',
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
      includeUnknownArtistItems: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeUnknownArtistItems',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeAlbum: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAlbum',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      artistIds: z
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
            name: 'artistIds',
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
      content: { 'application/json': { schema: QueueResourcePagingResourceSchema } },
    },
  },
})

export const postApiV1QueueGrabIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/queue/grab/{id}',
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
  responses: { 200: { description: 'OK' } },
})

export const postApiV1QueueGrabBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/queue/grab/bulk',
  tags: ['QueueAction'],
  request: { body: { content: { 'application/json': { schema: QueueBulkResourceSchema } } } },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1QueueDetailsRoute = createRoute({
  method: 'get',
  path: '/api/v1/queue/details',
  tags: ['QueueDetails'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumIds: z
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
            name: 'albumIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      includeArtist: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeArtist',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeAlbum: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAlbum',
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
      content: { 'application/json': { schema: z.array(QueueResourceSchema) } },
    },
  },
})

export const getApiV1QueueStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/queue/status',
  tags: ['QueueStatus'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: QueueStatusResourceSchema } },
    },
  },
})

export const getApiV1ReleaseRoute = createRoute({
  method: 'get',
  path: '/api/v1/release',
  tags: ['Release'],
  request: {
    query: z.object({
      albumId: z
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
            name: 'albumId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      artistId: z
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
            name: 'artistId',
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
      content: {
        'text/plain': { schema: z.array(ReleaseResourceSchema) },
        'application/json': { schema: z.array(ReleaseResourceSchema) },
        'text/json': { schema: z.array(ReleaseResourceSchema) },
      },
    },
  },
})

export const postApiV1ReleaseRoute = createRoute({
  method: 'post',
  path: '/api/v1/release',
  tags: ['Release'],
  request: {
    body: {
      content: {
        'application/json': { schema: ReleaseResourceSchema },
        'text/json': { schema: ReleaseResourceSchema },
        'application/*+json': { schema: ReleaseResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReleaseResourceSchema },
        'application/json': { schema: ReleaseResourceSchema },
        'text/json': { schema: ReleaseResourceSchema },
      },
    },
  },
})

export const getApiV1ReleaseprofileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/releaseprofile/{id}',
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
      content: {
        'text/plain': { schema: ReleaseProfileResourceSchema },
        'application/json': { schema: ReleaseProfileResourceSchema },
        'text/json': { schema: ReleaseProfileResourceSchema },
      },
    },
  },
})

export const putApiV1ReleaseprofileIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/releaseprofile/{id}',
  tags: ['ReleaseProfile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: ReleaseProfileResourceSchema },
        'text/json': { schema: ReleaseProfileResourceSchema },
        'application/*+json': { schema: ReleaseProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReleaseProfileResourceSchema },
        'application/json': { schema: ReleaseProfileResourceSchema },
        'text/json': { schema: ReleaseProfileResourceSchema },
      },
    },
  },
})

export const deleteApiV1ReleaseprofileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/releaseprofile/{id}',
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

export const getApiV1ReleaseprofileRoute = createRoute({
  method: 'get',
  path: '/api/v1/releaseprofile',
  tags: ['ReleaseProfile'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ReleaseProfileResourceSchema) },
        'application/json': { schema: z.array(ReleaseProfileResourceSchema) },
        'text/json': { schema: z.array(ReleaseProfileResourceSchema) },
      },
    },
  },
})

export const postApiV1ReleaseprofileRoute = createRoute({
  method: 'post',
  path: '/api/v1/releaseprofile',
  tags: ['ReleaseProfile'],
  request: {
    body: {
      content: {
        'application/json': { schema: ReleaseProfileResourceSchema },
        'text/json': { schema: ReleaseProfileResourceSchema },
        'application/*+json': { schema: ReleaseProfileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReleaseProfileResourceSchema },
        'application/json': { schema: ReleaseProfileResourceSchema },
        'text/json': { schema: ReleaseProfileResourceSchema },
      },
    },
  },
})

export const postApiV1ReleasePushRoute = createRoute({
  method: 'post',
  path: '/api/v1/release/push',
  tags: ['ReleasePush'],
  request: { body: { content: { 'application/json': { schema: ReleaseResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReleaseResourceSchema },
        'application/json': { schema: ReleaseResourceSchema },
        'text/json': { schema: ReleaseResourceSchema },
      },
    },
  },
})

export const getApiV1RemotepathmappingIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/remotepathmapping/{id}',
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
      content: {
        'text/plain': { schema: RemotePathMappingResourceSchema },
        'application/json': { schema: RemotePathMappingResourceSchema },
        'text/json': { schema: RemotePathMappingResourceSchema },
      },
    },
  },
})

export const putApiV1RemotepathmappingIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/remotepathmapping/{id}',
  tags: ['RemotePathMapping'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: RemotePathMappingResourceSchema },
        'text/json': { schema: RemotePathMappingResourceSchema },
        'application/*+json': { schema: RemotePathMappingResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: RemotePathMappingResourceSchema },
        'application/json': { schema: RemotePathMappingResourceSchema },
        'text/json': { schema: RemotePathMappingResourceSchema },
      },
    },
  },
})

export const deleteApiV1RemotepathmappingIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/remotepathmapping/{id}',
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

export const getApiV1RemotepathmappingRoute = createRoute({
  method: 'get',
  path: '/api/v1/remotepathmapping',
  tags: ['RemotePathMapping'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RemotePathMappingResourceSchema) } },
    },
  },
})

export const postApiV1RemotepathmappingRoute = createRoute({
  method: 'post',
  path: '/api/v1/remotepathmapping',
  tags: ['RemotePathMapping'],
  request: {
    body: { content: { 'application/json': { schema: RemotePathMappingResourceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: RemotePathMappingResourceSchema },
        'application/json': { schema: RemotePathMappingResourceSchema },
        'text/json': { schema: RemotePathMappingResourceSchema },
      },
    },
  },
})

export const getApiV1RenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/rename',
  tags: ['RenameTrack'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumId: z
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
            name: 'albumId',
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
      content: {
        'text/plain': { schema: z.array(RenameTrackResourceSchema) },
        'application/json': { schema: z.array(RenameTrackResourceSchema) },
        'text/json': { schema: z.array(RenameTrackResourceSchema) },
      },
    },
  },
})

export const getApiV1RetagRoute = createRoute({
  method: 'get',
  path: '/api/v1/retag',
  tags: ['RetagTrack'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumId: z
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
            name: 'albumId',
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
      content: {
        'text/plain': { schema: z.array(RetagTrackResourceSchema) },
        'application/json': { schema: z.array(RetagTrackResourceSchema) },
        'text/json': { schema: z.array(RetagTrackResourceSchema) },
      },
    },
  },
})

export const getApiV1RootfolderIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/rootfolder/{id}',
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
      content: {
        'text/plain': { schema: RootFolderResourceSchema },
        'application/json': { schema: RootFolderResourceSchema },
        'text/json': { schema: RootFolderResourceSchema },
      },
    },
  },
})

export const putApiV1RootfolderIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/rootfolder/{id}',
  tags: ['RootFolder'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: RootFolderResourceSchema },
        'text/json': { schema: RootFolderResourceSchema },
        'application/*+json': { schema: RootFolderResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: RootFolderResourceSchema },
        'application/json': { schema: RootFolderResourceSchema },
        'text/json': { schema: RootFolderResourceSchema },
      },
    },
  },
})

export const deleteApiV1RootfolderIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/rootfolder/{id}',
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

export const getApiV1RootfolderRoute = createRoute({
  method: 'get',
  path: '/api/v1/rootfolder',
  tags: ['RootFolder'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RootFolderResourceSchema) } },
    },
  },
})

export const postApiV1RootfolderRoute = createRoute({
  method: 'post',
  path: '/api/v1/rootfolder',
  tags: ['RootFolder'],
  request: { body: { content: { 'application/json': { schema: RootFolderResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: RootFolderResourceSchema },
        'application/json': { schema: RootFolderResourceSchema },
        'text/json': { schema: RootFolderResourceSchema },
      },
    },
  },
})

export const getApiV1SearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/search',
  tags: ['Search'],
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
      content: { 'application/json': { schema: z.array(SearchResourceSchema) } },
    },
  },
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

export const getApiV1SystemStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/status',
  tags: ['System'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SystemResourceSchema } } },
  },
})

export const getApiV1SystemRoutesRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/routes',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1SystemRoutesDuplicateRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/routes/duplicate',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemShutdownRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/shutdown',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const postApiV1SystemRestartRoute = createRoute({
  method: 'post',
  path: '/api/v1/system/restart',
  tags: ['System'],
  responses: { 200: { description: 'OK' } },
})

export const getApiV1TagIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: TagResourceSchema },
        'application/json': { schema: TagResourceSchema },
        'text/json': { schema: TagResourceSchema },
      },
    },
  },
})

export const putApiV1TagIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/tag/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: TagResourceSchema },
        'application/json': { schema: TagResourceSchema },
        'text/json': { schema: TagResourceSchema },
      },
    },
  },
})

export const deleteApiV1TagIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tag/{id}',
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

export const getApiV1TagRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag',
  tags: ['Tag'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TagResourceSchema) } },
    },
  },
})

export const postApiV1TagRoute = createRoute({
  method: 'post',
  path: '/api/v1/tag',
  tags: ['Tag'],
  request: { body: { content: { 'application/json': { schema: TagResourceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: TagResourceSchema },
        'application/json': { schema: TagResourceSchema },
        'text/json': { schema: TagResourceSchema },
      },
    },
  },
})

export const getApiV1TagDetailIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/detail/{id}',
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
      content: {
        'text/plain': { schema: TagDetailsResourceSchema },
        'application/json': { schema: TagDetailsResourceSchema },
        'text/json': { schema: TagDetailsResourceSchema },
      },
    },
  },
})

export const getApiV1TagDetailRoute = createRoute({
  method: 'get',
  path: '/api/v1/tag/detail',
  tags: ['TagDetails'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(TagDetailsResourceSchema) } },
    },
  },
})

export const getApiV1SystemTaskRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/task',
  tags: ['Task'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(TaskResourceSchema) },
        'application/json': { schema: z.array(TaskResourceSchema) },
        'text/json': { schema: z.array(TaskResourceSchema) },
      },
    },
  },
})

export const getApiV1SystemTaskIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/system/task/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: TaskResourceSchema },
        'application/json': { schema: TaskResourceSchema },
        'text/json': { schema: TaskResourceSchema },
      },
    },
  },
})

export const getApiV1TrackRoute = createRoute({
  method: 'get',
  path: '/api/v1/track',
  tags: ['Track'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumId: z
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
            name: 'albumId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      albumReleaseId: z
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
            name: 'albumReleaseId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      trackIds: z
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
            name: 'trackIds',
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
      content: {
        'text/plain': { schema: z.array(TrackResourceSchema) },
        'application/json': { schema: z.array(TrackResourceSchema) },
        'text/json': { schema: z.array(TrackResourceSchema) },
      },
    },
  },
})

export const getApiV1TrackIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/track/{id}',
  tags: ['Track'],
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
      content: {
        'text/plain': { schema: TrackResourceSchema },
        'application/json': { schema: TrackResourceSchema },
        'text/json': { schema: TrackResourceSchema },
      },
    },
  },
})

export const getApiV1TrackfileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/trackfile/{id}',
  tags: ['TrackFile'],
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
      content: {
        'text/plain': { schema: TrackFileResourceSchema },
        'application/json': { schema: TrackFileResourceSchema },
        'text/json': { schema: TrackFileResourceSchema },
      },
    },
  },
})

export const putApiV1TrackfileIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/trackfile/{id}',
  tags: ['TrackFile'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: TrackFileResourceSchema },
        'text/json': { schema: TrackFileResourceSchema },
        'application/*+json': { schema: TrackFileResourceSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: TrackFileResourceSchema },
        'application/json': { schema: TrackFileResourceSchema },
        'text/json': { schema: TrackFileResourceSchema },
      },
    },
  },
})

export const deleteApiV1TrackfileIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/trackfile/{id}',
  tags: ['TrackFile'],
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

export const getApiV1TrackfileRoute = createRoute({
  method: 'get',
  path: '/api/v1/trackfile',
  tags: ['TrackFile'],
  request: {
    query: z.object({
      artistId: z
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
            name: 'artistId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      trackFileIds: z
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
            name: 'trackFileIds',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      albumId: z
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
            name: 'albumId',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      unmapped: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'unmapped', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(TrackFileResourceSchema) },
        'application/json': { schema: z.array(TrackFileResourceSchema) },
        'text/json': { schema: z.array(TrackFileResourceSchema) },
      },
    },
  },
})

export const putApiV1TrackfileEditorRoute = createRoute({
  method: 'put',
  path: '/api/v1/trackfile/editor',
  tags: ['TrackFile'],
  request: {
    body: {
      content: {
        'application/json': { schema: TrackFileListResourceSchema },
        'text/json': { schema: TrackFileListResourceSchema },
        'application/*+json': { schema: TrackFileListResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiV1TrackfileBulkRoute = createRoute({
  method: 'delete',
  path: '/api/v1/trackfile/bulk',
  tags: ['TrackFile'],
  request: {
    body: {
      content: {
        'application/json': { schema: TrackFileListResourceSchema },
        'text/json': { schema: TrackFileListResourceSchema },
        'application/*+json': { schema: TrackFileListResourceSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV1ConfigUiIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/ui/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UiConfigResourceSchema },
        'application/json': { schema: UiConfigResourceSchema },
        'text/json': { schema: UiConfigResourceSchema },
      },
    },
  },
})

export const putApiV1ConfigUiIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/ui/{id}',
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
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UiConfigResourceSchema },
        'application/json': { schema: UiConfigResourceSchema },
        'text/json': { schema: UiConfigResourceSchema },
      },
    },
  },
})

export const getApiV1ConfigUiRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/ui',
  tags: ['UiConfig'],
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UiConfigResourceSchema } } },
  },
})

export const getApiV1UpdateRoute = createRoute({
  method: 'get',
  path: '/api/v1/update',
  tags: ['Update'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UpdateResourceSchema) } },
    },
  },
})

export const getApiV1LogFileUpdateRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file/update',
  tags: ['UpdateLogFile'],
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(LogFileResourceSchema) } },
    },
  },
})

export const getApiV1LogFileUpdateFilenameRoute = createRoute({
  method: 'get',
  path: '/api/v1/log/file/update/{filename}',
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
  responses: { 200: { description: 'OK' } },
})
