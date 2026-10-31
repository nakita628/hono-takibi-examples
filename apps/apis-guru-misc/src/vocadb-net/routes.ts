import { createRoute, z } from '@hono/zod-openapi'

const ArtistTypeSchema = z
  .enum([
    'Unknown',
    'Circle',
    'Label',
    'Producer',
    'Animator',
    'Illustrator',
    'Lyricist',
    'Vocaloid',
    'UTAU',
    'CeVIO',
    'OtherVoiceSynthesizer',
    'OtherVocalist',
    'OtherGroup',
    'OtherIndividual',
    'Utaite',
    'Band',
    'Vocalist',
    'Character',
    'SynthesizerV',
    'CoverArtist',
  ])
  .openapi('ArtistType')

const EntryStatusSchema = z.enum(['Draft', 'Finished', 'Approved', 'Locked']).openapi('EntryStatus')

const ArtistContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    artistType: ArtistTypeSchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    pictureMime: z.string().nullable().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    version: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistContract')

const ArtistCategoriesSchema = z
  .enum([
    'Nothing',
    'Vocalist',
    'Producer',
    'Animator',
    'Label',
    'Circle',
    'Other',
    'Band',
    'Illustrator',
    'Subject',
  ])
  .openapi('ArtistCategories')

const ArtistRolesSchema = z
  .enum([
    'Default',
    'Animator',
    'Arranger',
    'Composer',
    'Distributor',
    'Illustrator',
    'Instrumentalist',
    'Lyricist',
    'Mastering',
    'Publisher',
    'Vocalist',
    'VoiceManipulator',
    'Other',
    'Mixer',
    'Chorus',
    'Encoder',
    'VocalDataProvider',
  ])
  .openapi('ArtistRoles')

const ArtistForAlbumForApiContractSchema = z
  .strictObject({
    artist: ArtistContractSchema.exactOptional(),
    categories: ArtistCategoriesSchema.exactOptional(),
    effectiveRoles: ArtistRolesSchema.exactOptional(),
    isSupport: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    roles: ArtistRolesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForAlbumForApiContract')

const ContentLanguageSelectionSchema = z
  .enum(['Unspecified', 'Japanese', 'Romaji', 'English'])
  .openapi('ContentLanguageSelection')

const DiscTypeSchema = z
  .enum([
    'Unknown',
    'Album',
    'Single',
    'EP',
    'SplitAlbum',
    'Compilation',
    'Video',
    'Artbook',
    'Game',
    'Fanmade',
    'Instrumental',
    'Other',
  ])
  .openapi('DiscType')

const DiscMediaTypeSchema = z.enum(['Audio', 'Video']).openapi('DiscMediaType')

const AlbumDiscPropertiesContractSchema = z
  .strictObject({
    discNumber: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    mediaType: DiscMediaTypeSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumDiscPropertiesContract')

const AlbumIdentifierContractSchema = z
  .strictObject({ value: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('AlbumIdentifierContract')

const EntryThumbForApiContractSchema = z
  .strictObject({
    mime: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    urlOriginal: z.string().nullable().exactOptional(),
    urlSmallThumb: z.string().nullable().exactOptional(),
    urlThumb: z.string().nullable().exactOptional(),
    urlTinyThumb: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntryThumbForApiContract')

const LocalizedStringContractSchema = z
  .strictObject({
    language: ContentLanguageSelectionSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalizedStringContract')

const PVExtendedMetadataSchema = z
  .strictObject({ json: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PVExtendedMetadata')

const PVTypeSchema = z.enum(['Original', 'Reprint', 'Other']).openapi('PVType')

const PVServiceSchema = z
  .enum([
    'NicoNicoDouga',
    'Youtube',
    'SoundCloud',
    'Vimeo',
    'Piapro',
    'Bilibili',
    'File',
    'LocalFile',
    'Creofuga',
    'Bandcamp',
  ])
  .openapi('PVService')

const PVContractSchema = z
  .strictObject({
    author: z.string().nullable().exactOptional(),
    createdBy: z.int32().nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    extendedMetadata: PVExtendedMetadataSchema.exactOptional(),
    id: z.int32().exactOptional(),
    length: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    pvId: z.string().nullable().exactOptional(),
    pvType: PVTypeSchema.exactOptional(),
    service: PVServiceSchema.exactOptional(),
    thumbUrl: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PVContract')

const OptionalDateTimeContractSchema = z
  .strictObject({
    day: z.int32().nullable().exactOptional(),
    formatted: z.string().nullable().exactOptional(),
    isEmpty: z.boolean().exactOptional(),
    month: z.int32().nullable().exactOptional(),
    year: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OptionalDateTimeContract')

const ArtistEventRolesSchema = z
  .enum([
    'Default',
    'Dancer',
    'DJ',
    'Instrumentalist',
    'Organizer',
    'Promoter',
    'VJ',
    'Vocalist',
    'VoiceManipulator',
    'OtherPerformer',
    'Other',
  ])
  .openapi('ArtistEventRoles')

const ArtistForEventContractSchema = z
  .strictObject({
    artist: ArtistContractSchema.exactOptional(),
    effectiveRoles: ArtistEventRolesSchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    roles: ArtistEventRolesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForEventContract')

const EventCategorySchema = z
  .enum([
    'Unspecified',
    'AlbumRelease',
    'Anniversary',
    'Club',
    'Concert',
    'Contest',
    'Convention',
    'Other',
    'Festival',
  ])
  .openapi('EventCategory')

const WebLinkCategorySchema = z
  .enum(['Official', 'Commercial', 'Reference', 'Other'])
  .openapi('WebLinkCategory')

const WebLinkContractSchema = z
  .strictObject({
    category: WebLinkCategorySchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    descriptionOrUrl: z.string().nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    id: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebLinkContract')

const ReleaseEventSeriesContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    category: EventCategorySchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    pictureMime: z.string().nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventSeriesContract')

const SongListFeaturedCategorySchema = z
  .enum(['Nothing', 'Concerts', 'VocaloidRanking', 'Pools', 'Other'])
  .openapi('SongListFeaturedCategory')

const SongListBaseContractSchema = z
  .strictObject({
    featuredCategory: SongListFeaturedCategorySchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongListBaseContract')

const TagBaseContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    categoryName: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagBaseContract')

const TagUsageForApiContractSchema = z
  .strictObject({ count: z.int32().exactOptional(), tag: TagBaseContractSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TagUsageForApiContract')

const OptionalGeoPointContractSchema = z
  .strictObject({
    formatted: z.string().nullable().exactOptional(),
    hasValue: z.boolean().exactOptional(),
    latitude: z.float64().nullable().exactOptional(),
    longitude: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OptionalGeoPointContract')

const VenueContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    address: z.string().nullable().exactOptional(),
    addressCountryCode: z.string().nullable().exactOptional(),
    coordinates: OptionalGeoPointContractSchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VenueContract')

const ReleaseEventContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    category: EventCategorySchema.exactOptional(),
    customName: z.boolean().exactOptional(),
    date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    hasVenueOrVenueName: z.boolean().exactOptional().openapi({ readOnly: true }),
    id: z.int32().exactOptional(),
    inheritedCategory: EventCategorySchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    pictureMime: z.string().nullable().exactOptional(),
    series: ReleaseEventSeriesContractSchema.exactOptional(),
    songList: SongListBaseContractSchema.exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
    venue: VenueContractSchema.exactOptional(),
    venueName: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventContract')

const WebLinkForApiContractSchema = z
  .strictObject({
    category: WebLinkCategorySchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    descriptionOrUrl: z.string().nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    id: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebLinkForApiContract')

const VenueForApiContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    address: z.string().nullable().exactOptional(),
    addressCountryCode: z.string().nullable().exactOptional(),
    coordinates: OptionalGeoPointContractSchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    events: z.array(ReleaseEventContractSchema).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VenueForApiContract')

const ReleaseEventForApiContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    artists: z.array(ArtistForEventContractSchema).nullable().exactOptional(),
    category: EventCategorySchema.exactOptional(),
    date: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
    pvs: z.array(PVContractSchema).nullable().exactOptional(),
    series: ReleaseEventSeriesContractSchema.exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    seriesNumber: z.int32().exactOptional(),
    seriesSuffix: z.string().nullable().exactOptional(),
    songList: SongListBaseContractSchema.exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    tags: z.array(TagUsageForApiContractSchema).nullable().exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
    venue: VenueForApiContractSchema.exactOptional(),
    venueName: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventForApiContract')

const SongVoteRatingSchema = z
  .enum(['Nothing', 'Dislike', 'Like', 'Favorite'])
  .openapi('SongVoteRating')

const AlbumContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    artistString: z.string().nullable().exactOptional(),
    coverPictureMime: z.string().nullable().exactOptional(),
    createDate: z.iso.datetime({ offset: true }).exactOptional(),
    deleted: z.boolean().exactOptional(),
    discType: DiscTypeSchema.exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    ratingAverage: z.float64().exactOptional(),
    ratingCount: z.int32().exactOptional(),
    releaseDate: OptionalDateTimeContractSchema.exactOptional(),
    releaseEvent: ReleaseEventForApiContractSchema.exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    version: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumContract')

const ArtistForSongContractSchema = z
  .strictObject({
    artist: ArtistContractSchema.exactOptional(),
    categories: ArtistCategoriesSchema.exactOptional(),
    effectiveRoles: ArtistRolesSchema.exactOptional(),
    id: z.int32().exactOptional(),
    isCustomName: z.boolean().exactOptional(),
    isSupport: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    roles: ArtistRolesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForSongContract')

const TranslationTypeSchema = z
  .enum(['Original', 'Romanized', 'Translation'])
  .openapi('TranslationType')

const LyricsForSongContractSchema = z
  .strictObject({
    cultureCode: z.string().nullable().default('').exactOptional(),
    id: z.int32().exactOptional(),
    source: z.string().nullable().default('').exactOptional(),
    translationType: TranslationTypeSchema.exactOptional(),
    url: z.string().nullable().default('').exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LyricsForSongContract')

const PVServicesSchema = z
  .enum([
    'Nothing',
    'NicoNicoDouga',
    'Youtube',
    'SoundCloud',
    'Vimeo',
    'Piapro',
    'Bilibili',
    'File',
    'LocalFile',
    'Creofuga',
    'Bandcamp',
  ])
  .openapi('PVServices')

const SongTypeSchema = z
  .enum([
    'Unspecified',
    'Original',
    'Remaster',
    'Remix',
    'Cover',
    'Arrangement',
    'Instrumental',
    'Mashup',
    'MusicPV',
    'DramaPV',
    'Live',
    'Illustration',
    'Other',
  ])
  .openapi('SongType')

const SongForApiContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    albums: z.array(AlbumContractSchema).nullable().exactOptional(),
    artistString: z.string().nullable().exactOptional(),
    artists: z.array(ArtistForSongContractSchema).nullable().exactOptional(),
    createDate: z.iso.datetime({ offset: true }).exactOptional(),
    defaultName: z.string().nullable().exactOptional(),
    defaultNameLanguage: ContentLanguageSelectionSchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    favoritedTimes: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    lengthSeconds: z.int32().exactOptional(),
    lyrics: z.array(LyricsForSongContractSchema).nullable().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    maxMilliBpm: z.int32().nullable().exactOptional(),
    mergedTo: z.int32().exactOptional(),
    minMilliBpm: z.int32().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
    originalVersionId: z.int32().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    pvServices: PVServicesSchema.exactOptional(),
    pvs: z.array(PVContractSchema).nullable().exactOptional(),
    ratingScore: z.int32().exactOptional(),
    releaseEvent: ReleaseEventForApiContractSchema.exactOptional(),
    songType: SongTypeSchema.exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    tags: z.array(TagUsageForApiContractSchema).nullable().exactOptional(),
    thumbUrl: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongForApiContract')

const SongInAlbumForApiContractSchema = z
  .strictObject({
    discNumber: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    rating: SongVoteRatingSchema.exactOptional(),
    song: SongForApiContractSchema.exactOptional(),
    trackNumber: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongInAlbumForApiContract')

type AlbumForApiContractType = {
  additionalNames?: string | null
  artistString?: string | null
  artists?: z.infer<typeof ArtistForAlbumForApiContractSchema>[] | null
  barcode?: string | null
  catalogNumber?: string | null
  createDate?: string
  defaultName?: string | null
  defaultNameLanguage?: z.infer<typeof ContentLanguageSelectionSchema>
  deleted?: boolean
  description?: string | null
  discType?: z.infer<typeof DiscTypeSchema>
  discs?: z.infer<typeof AlbumDiscPropertiesContractSchema>[] | null
  id?: number
  identifiers?: z.infer<typeof AlbumIdentifierContractSchema>[] | null
  mainPicture?: z.infer<typeof EntryThumbForApiContractSchema>
  mergedTo?: number
  name?: string | null
  names?: z.infer<typeof LocalizedStringContractSchema>[] | null
  pvs?: z.infer<typeof PVContractSchema>[] | null
  ratingAverage?: number
  ratingCount?: number
  releaseDate?: z.infer<typeof OptionalDateTimeContractSchema>
  releaseEvent?: z.infer<typeof ReleaseEventForApiContractSchema>
  status?: z.infer<typeof EntryStatusSchema>
  tags?: z.infer<typeof TagUsageForApiContractSchema>[] | null
  tracks?: z.infer<typeof SongInAlbumForApiContractSchema>[] | null
  version?: number
  webLinks?: z.infer<typeof WebLinkForApiContractSchema>[] | null
}

const ArtistLinkTypeSchema = z
  .enum(['CharacterDesigner', 'Group', 'Illustrator', 'Manager', 'VoiceProvider'])
  .openapi('ArtistLinkType')

const ArtistForArtistForApiContractSchema = z
  .strictObject({
    artist: ArtistContractSchema.exactOptional(),
    linkType: ArtistLinkTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForArtistForApiContract')

const AlbumForApiContractSchema: z.ZodType<AlbumForApiContractType> = z
  .lazy(() =>
    z
      .strictObject({
        additionalNames: z.string().nullable().exactOptional(),
        artistString: z.string().nullable().exactOptional(),
        artists: z.array(ArtistForAlbumForApiContractSchema).nullable().exactOptional(),
        barcode: z.string().nullable().exactOptional(),
        catalogNumber: z.string().nullable().exactOptional(),
        createDate: z.iso.datetime({ offset: true }).exactOptional(),
        defaultName: z.string().nullable().exactOptional(),
        defaultNameLanguage: ContentLanguageSelectionSchema.exactOptional(),
        deleted: z.boolean().exactOptional(),
        description: z.string().nullable().exactOptional(),
        discType: DiscTypeSchema.exactOptional(),
        discs: z.array(AlbumDiscPropertiesContractSchema).nullable().exactOptional(),
        id: z.int32().exactOptional(),
        identifiers: z.array(AlbumIdentifierContractSchema).nullable().exactOptional(),
        mainPicture: EntryThumbForApiContractSchema.exactOptional(),
        mergedTo: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
        pvs: z.array(PVContractSchema).nullable().exactOptional(),
        ratingAverage: z.float64().exactOptional(),
        ratingCount: z.int32().exactOptional(),
        releaseDate: OptionalDateTimeContractSchema.exactOptional(),
        releaseEvent: ReleaseEventForApiContractSchema.exactOptional(),
        status: EntryStatusSchema.exactOptional(),
        tags: z.array(TagUsageForApiContractSchema).nullable().exactOptional(),
        tracks: z.array(SongInAlbumForApiContractSchema).nullable().exactOptional(),
        version: z.int32().exactOptional(),
        webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('AlbumForApiContract')

const ArtistRelationsForApiSchema = z
  .strictObject({
    latestAlbums: z.array(AlbumForApiContractSchema).nullable().exactOptional(),
    latestEvents: z.array(ReleaseEventForApiContractSchema).nullable().exactOptional(),
    latestSongs: z.array(SongForApiContractSchema).nullable().exactOptional(),
    popularAlbums: z.array(AlbumForApiContractSchema).nullable().exactOptional(),
    popularSongs: z.array(SongForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistRelationsForApi')

type ArtistForApiContractType = {
  additionalNames?: string | null
  artistLinks?: z.infer<typeof ArtistForArtistForApiContractSchema>[] | null
  artistLinksReverse?: z.infer<typeof ArtistForArtistForApiContractSchema>[] | null
  artistType?: z.infer<typeof ArtistTypeSchema>
  baseVoicebank?: z.infer<typeof ArtistContractSchema>
  createDate?: string
  defaultName?: string | null
  defaultNameLanguage?: z.infer<typeof ContentLanguageSelectionSchema>
  deleted?: boolean
  description?: string | null
  id?: number
  mainPicture?: z.infer<typeof EntryThumbForApiContractSchema>
  mergedTo?: number
  name?: string | null
  names?: z.infer<typeof LocalizedStringContractSchema>[] | null
  pictureMime?: string | null
  relations?: z.infer<typeof ArtistRelationsForApiSchema>
  releaseDate?: string | null
  status?: z.infer<typeof EntryStatusSchema>
  tags?: z.infer<typeof TagUsageForApiContractSchema>[] | null
  version?: number
  webLinks?: z.infer<typeof WebLinkForApiContractSchema>[] | null
}

const UserGroupIdSchema = z
  .enum(['Nothing', 'Limited', 'Regular', 'Trusted', 'Moderator', 'Admin'])
  .openapi('UserGroupId')

const UserLanguageProficiencySchema = z
  .enum(['Nothing', 'Basics', 'Intermediate', 'Advanced', 'Native'])
  .openapi('UserLanguageProficiency')

const UserKnownLanguageContractSchema = z
  .strictObject({
    cultureCode: z.string().nullable().exactOptional(),
    proficiency: UserLanguageProficiencySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserKnownLanguageContract')

const OldUsernameContractSchema = z
  .strictObject({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    oldName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OldUsernameContract')

const UserForApiContractSchema = z
  .strictObject({
    active: z.boolean().exactOptional(),
    groupId: UserGroupIdSchema.exactOptional(),
    id: z.int32().exactOptional(),
    knownLanguages: z.array(UserKnownLanguageContractSchema).nullable().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    memberSince: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().nullable().exactOptional(),
    oldUsernames: z.array(OldUsernameContractSchema).nullable().exactOptional(),
    verifiedArtist: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserForApiContract')

const ArchivedObjectVersionForApiContractSchema = z
  .strictObject({
    agentName: z.string().nullable().exactOptional(),
    anythingChanged: z.boolean().exactOptional(),
    author: UserForApiContractSchema.exactOptional(),
    changedFields: z.array(z.string()).nullable().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    hidden: z.boolean().exactOptional(),
    id: z.int32().exactOptional(),
    isSnapshot: z.boolean().exactOptional(),
    notes: z.string().nullable().exactOptional(),
    reason: z.string().nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    version: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArchivedObjectVersionForApiContract')

const EntryEditEventSchema = z
  .enum(['Created', 'Updated', 'Deleted', 'Restored'])
  .openapi('EntryEditEvent')

const EntryTypeSchema = z
  .enum([
    'Undefined',
    'Album',
    'Artist',
    'DiscussionTopic',
    'PV',
    'ReleaseEvent',
    'ReleaseEventSeries',
    'Song',
    'SongList',
    'Tag',
    'User',
    'Venue',
  ])
  .openapi('EntryType')

const ArchivedWebLinkContractSchema = z
  .strictObject({
    category: WebLinkCategorySchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArchivedWebLinkContract')

const EntryForApiContractSchema = z
  .strictObject({
    activityDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    additionalNames: z.string().nullable().exactOptional(),
    artistString: z.string().nullable().exactOptional(),
    artistType: ArtistTypeSchema.exactOptional(),
    createDate: z.iso.datetime({ offset: true }).exactOptional(),
    defaultName: z.string().nullable().exactOptional(),
    defaultNameLanguage: ContentLanguageSelectionSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    discType: DiscTypeSchema.exactOptional(),
    entryType: EntryTypeSchema.exactOptional(),
    eventCategory: EventCategorySchema.exactOptional(),
    id: z.int32().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
    pvs: z.array(PVContractSchema).nullable().exactOptional(),
    releaseEventSeriesName: z.string().nullable().exactOptional(),
    songListFeaturedCategory: SongListFeaturedCategorySchema.exactOptional(),
    songType: SongTypeSchema.exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    tagCategoryName: z.string().nullable().exactOptional(),
    tags: z.array(TagUsageForApiContractSchema).nullable().exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(ArchivedWebLinkContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntryForApiContract')

const ActivityEntryForApiContractSchema = z
  .strictObject({
    archivedVersion: ArchivedObjectVersionForApiContractSchema.exactOptional(),
    author: UserForApiContractSchema.exactOptional(),
    createDate: z.iso.datetime({ offset: true }).exactOptional(),
    editEvent: EntryEditEventSchema.exactOptional(),
    entry: EntryForApiContractSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityEntryForApiContract')

const ActivityEntryForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(ActivityEntryForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityEntryForApiContractPartialFindResult')

const ActivityEntryOptionalFieldsSchema = z
  .enum(['None', 'ArchivedVersion', 'Entry'])
  .openapi('ActivityEntryOptionalFields')

const ActivityEntrySortRuleSchema = z
  .enum(['CreateDateDescending', 'CreateDate'])
  .openapi('ActivityEntrySortRule')

const AdvancedFilterTypeSchema = z
  .enum([
    'Nothing',
    'ArtistType',
    'WebLink',
    'HasUserAccount',
    'RootVoicebank',
    'VoiceProvider',
    'HasStoreLink',
    'HasTracks',
    'NoCoverPicture',
    'HasAlbum',
    'HasOriginalMedia',
    'HasMedia',
    'HasMultipleVoicebanks',
    'HasPublishDate',
    'Lyrics',
    'LyricsContent',
  ])
  .openapi('AdvancedFilterType')

const AdvancedSearchFilterParamsSchema = z
  .strictObject({
    filterType: AdvancedFilterTypeSchema.exactOptional(),
    negate: z.boolean().exactOptional(),
    param: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdvancedSearchFilterParams')

const AlbumForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(AlbumForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumForApiContractPartialFindResult')

const MediaTypeSchema = z.enum(['PhysicalDisc', 'DigitalDownload', 'Other']).openapi('MediaType')

const PurchaseStatusSchema = z
  .enum(['Nothing', 'Wishlisted', 'Ordered', 'Owned'])
  .openapi('PurchaseStatus')

const AlbumForUserForApiContractSchema = z
  .strictObject({
    album: AlbumForApiContractSchema.exactOptional(),
    mediaType: MediaTypeSchema.exactOptional(),
    purchaseStatus: PurchaseStatusSchema.exactOptional(),
    rating: z.int32().exactOptional(),
    user: UserForApiContractSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumForUserForApiContract')

const AlbumForUserForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(AlbumForUserForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumForUserForApiContractPartialFindResult')

const AlbumOptionalFieldsSchema = z
  .enum([
    'None',
    'AdditionalNames',
    'Artists',
    'Description',
    'Discs',
    'Identifiers',
    'MainPicture',
    'Names',
    'PVs',
    'ReleaseEvent',
    'Tags',
    'Tracks',
    'WebLinks',
  ])
  .openapi('AlbumOptionalFields')

const AlbumReviewContractSchema = z
  .strictObject({
    albumId: z.int32().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.int32().exactOptional(),
    languageCode: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    user: UserForApiContractSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlbumReviewContract')

const AlbumSortRuleSchema = z
  .enum([
    'None',
    'Name',
    'ReleaseDate',
    'ReleaseDateWithNulls',
    'AdditionDate',
    'RatingAverage',
    'RatingTotal',
    'NameThenReleaseDate',
    'CollectionCount',
  ])
  .openapi('AlbumSortRule')

const ArtistAlbumParticipationStatusSchema = z
  .enum(['Everything', 'OnlyMainAlbums', 'OnlyCollaborations'])
  .openapi('ArtistAlbumParticipationStatus')

const ArtistForApiContractSchema: z.ZodType<ArtistForApiContractType> = z
  .lazy(() =>
    z
      .strictObject({
        additionalNames: z.string().nullable().exactOptional(),
        artistLinks: z.array(ArtistForArtistForApiContractSchema).nullable().exactOptional(),
        artistLinksReverse: z.array(ArtistForArtistForApiContractSchema).nullable().exactOptional(),
        artistType: ArtistTypeSchema.exactOptional(),
        baseVoicebank: ArtistContractSchema.exactOptional(),
        createDate: z.iso.datetime({ offset: true }).exactOptional(),
        defaultName: z.string().nullable().exactOptional(),
        defaultNameLanguage: ContentLanguageSelectionSchema.exactOptional(),
        deleted: z.boolean().exactOptional(),
        description: z.string().nullable().exactOptional(),
        id: z.int32().exactOptional(),
        mainPicture: EntryThumbForApiContractSchema.exactOptional(),
        mergedTo: z.int32().exactOptional(),
        name: z.string().nullable().exactOptional(),
        names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
        pictureMime: z.string().nullable().exactOptional(),
        relations: ArtistRelationsForApiSchema.exactOptional(),
        releaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        status: EntryStatusSchema.exactOptional(),
        tags: z.array(TagUsageForApiContractSchema).nullable().exactOptional(),
        version: z.int32().exactOptional(),
        webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ArtistForApiContract')

const ArtistForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(ArtistForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForApiContractPartialFindResult')

const ArtistForUserForApiContractSchema = z
  .strictObject({
    artist: ArtistForApiContractSchema.exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForUserForApiContract')

const ArtistForUserForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(ArtistForUserForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArtistForUserForApiContractPartialFindResult')

const ArtistOptionalFieldsSchema = z
  .enum([
    'None',
    'AdditionalNames',
    'ArtistLinks',
    'ArtistLinksReverse',
    'BaseVoicebank',
    'Description',
    'MainPicture',
    'Names',
    'Tags',
    'WebLinks',
  ])
  .openapi('ArtistOptionalFields')

const ArtistRelationsFieldsSchema = z
  .enum([
    'None',
    'LatestAlbums',
    'LatestEvents',
    'LatestSongs',
    'PopularAlbums',
    'PopularSongs',
    'All',
  ])
  .openapi('ArtistRelationsFields')

const ArtistSortRuleSchema = z
  .enum([
    'None',
    'Name',
    'AdditionDate',
    'AdditionDateAsc',
    'ReleaseDate',
    'SongCount',
    'SongRating',
    'FollowerCount',
    'ArtistType',
  ])
  .openapi('ArtistSortRule')

const CommentForApiContractSchema = z
  .strictObject({
    author: UserForApiContractSchema.exactOptional(),
    authorName: z.string().nullable().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    entry: EntryForApiContractSchema.exactOptional(),
    id: z.int32().exactOptional(),
    message: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommentForApiContract')

const CommentForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(CommentForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommentForApiContractPartialFindResult')

const CommentOptionalFieldsSchema = z.enum(['None', 'Entry']).openapi('CommentOptionalFields')

const CommentSortRuleSchema = z
  .enum(['CreateDateDescending', 'CreateDate'])
  .openapi('CommentSortRule')

const ContentLanguagePreferenceSchema = z
  .enum(['Default', 'Japanese', 'Romaji', 'English'])
  .openapi('ContentLanguagePreference')

const UserReportTypeSchema = z
  .enum(['MaliciousIP', 'Spamming', 'RemovePermissions', 'Other'])
  .openapi('UserReportType')

const CreateReportModelSchema = z
  .strictObject({
    reason: z.string().nullable().exactOptional(),
    reportType: UserReportTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateReportModel')

const DiscussionFolderContractSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    lastTopicAuthor: UserForApiContractSchema.exactOptional(),
    lastTopicDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    topicCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiscussionFolderContract')

const DiscussionFolderOptionalFieldsSchema = z
  .enum(['None', 'LastTopic', 'TopicCount'])
  .openapi('DiscussionFolderOptionalFields')

const DiscussionTopicContractSchema = z
  .strictObject({
    author: UserForApiContractSchema.exactOptional(),
    commentCount: z.int32().exactOptional(),
    comments: z.array(CommentForApiContractSchema).nullable().exactOptional(),
    content: z.string().nullable().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    folderId: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    lastComment: CommentForApiContractSchema.exactOptional(),
    locked: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiscussionTopicContract')

const DiscussionTopicContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(DiscussionTopicContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiscussionTopicContractPartialFindResult')

const DiscussionTopicOptionalFieldsSchema = z
  .enum(['None', 'Comments', 'CommentCount', 'Content', 'LastComment', 'All'])
  .openapi('DiscussionTopicOptionalFields')

const DiscussionTopicSortRuleSchema = z
  .enum(['None', 'Name', 'DateCreated', 'LastCommentDate'])
  .openapi('DiscussionTopicSortRule')

const DistanceUnitSchema = z.enum(['Kilometers', 'Miles']).openapi('DistanceUnit')

const EnglishTranslatedStringContractSchema = z
  .strictObject({
    english: z.string().nullable().exactOptional(),
    original: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnglishTranslatedStringContract')

const EntryEditDataContractSchema = z
  .strictObject({
    time: z.iso.datetime({ offset: true }).exactOptional(),
    userId: z.int32().exactOptional(),
    userName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntryEditDataContract')

const EntryForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(EntryForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntryForApiContractPartialFindResult')

const EntryOptionalFieldsSchema = z
  .enum([
    'None',
    'AdditionalNames',
    'Description',
    'MainPicture',
    'Names',
    'PVs',
    'Tags',
    'WebLinks',
  ])
  .openapi('EntryOptionalFields')

const EntrySortRuleSchema = z
  .enum(['None', 'Name', 'AdditionDate', 'ActivityDate'])
  .openapi('EntrySortRule')

const EntryTypesSchema = z
  .enum([
    'Nothing',
    'Album',
    'Artist',
    'DiscussionTopic',
    'PV',
    'ReleaseEvent',
    'ReleaseEventSeries',
    'Song',
    'SongList',
    'Tag',
    'User',
    'Venue',
  ])
  .openapi('EntryTypes')

const EventReportTypeSchema = z
  .enum(['InvalidInfo', 'Duplicate', 'Inappropriate', 'Other'])
  .openapi('EventReportType')

const EventSortRuleSchema = z
  .enum(['None', 'Name', 'Date', 'AdditionDate', 'SeriesName', 'VenueName'])
  .openapi('EventSortRule')

const LocalizedStringWithIdContractSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    language: ContentLanguageSelectionSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalizedStringWithIdContract')

const LogicalGroupingSchema = z.enum(['And', 'Or']).openapi('LogicalGrouping')

const NameMatchModeSchema = z
  .enum(['Auto', 'Partial', 'StartsWith', 'Exact', 'Words'])
  .openapi('NameMatchMode')

const SongContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    artistString: z.string().nullable().exactOptional(),
    createDate: z.iso.datetime({ offset: true }).exactOptional(),
    deleted: z.boolean().exactOptional(),
    favoritedTimes: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    lengthSeconds: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    nicoId: z.string().nullable().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    pvServices: PVServicesSchema.exactOptional(),
    ratingScore: z.int32().exactOptional(),
    songType: SongTypeSchema.exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    thumbUrl: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongContract')

const PVForSongContractSchema = z
  .strictObject({
    author: z.string().nullable().exactOptional(),
    createdBy: z.int32().nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    extendedMetadata: PVExtendedMetadataSchema.exactOptional(),
    id: z.int32().exactOptional(),
    length: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    pvId: z.string().nullable().exactOptional(),
    pvType: PVTypeSchema.exactOptional(),
    service: PVServiceSchema.exactOptional(),
    song: SongContractSchema.exactOptional(),
    thumbUrl: z.string().nullable().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PVForSongContract')

const PVForSongContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(PVForSongContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PVForSongContractPartialFindResult')

const PurchaseStatusesSchema = z
  .enum(['Nothing', 'Wishlisted', 'Ordered', 'Owned', 'All'])
  .openapi('PurchaseStatuses')

const RatedSongForUserForApiContractSchema = z
  .strictObject({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    rating: SongVoteRatingSchema.exactOptional(),
    song: SongForApiContractSchema.exactOptional(),
    user: UserForApiContractSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RatedSongForUserForApiContract')

const RatedSongForUserForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(RatedSongForUserForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RatedSongForUserForApiContractPartialFindResult')

const RatedSongForUserSortRuleSchema = z
  .enum([
    'None',
    'Name',
    'AdditionDate',
    'PublishDate',
    'FavoritedTimes',
    'RatingScore',
    'RatingDate',
  ])
  .openapi('RatedSongForUserSortRule')

const RelatedSongsContractSchema = z
  .strictObject({
    artistMatches: z.array(SongForApiContractSchema).nullable().exactOptional(),
    likeMatches: z.array(SongForApiContractSchema).nullable().exactOptional(),
    tagMatches: z.array(SongForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedSongsContract')

const ReleaseEventForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(ReleaseEventForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventForApiContractPartialFindResult')

const ReleaseEventOptionalFieldsSchema = z
  .enum([
    'None',
    'AdditionalNames',
    'Artists',
    'Description',
    'MainPicture',
    'Names',
    'Series',
    'SongList',
    'Tags',
    'Venue',
    'WebLinks',
    'PVs',
  ])
  .openapi('ReleaseEventOptionalFields')

const ReleaseEventSeriesForApiContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    category: EventCategorySchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    events: z.array(ReleaseEventForApiContractSchema).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringContractSchema).nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventSeriesForApiContract')

const ReleaseEventSeriesForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(ReleaseEventSeriesForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventSeriesForApiContractPartialFindResult')

const ReleaseEventSeriesForEditForApiContractSchema = z
  .strictObject({
    category: EventCategorySchema.exactOptional(),
    defaultNameLanguage: ContentLanguageSelectionSchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringWithIdContractSchema).nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseEventSeriesForEditForApiContract')

const ReleaseEventSeriesOptionalFieldsSchema = z
  .enum(['None', 'AdditionalNames', 'Description', 'Events', 'MainPicture', 'Names', 'WebLinks'])
  .openapi('ReleaseEventSeriesOptionalFields')

const SongForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(SongForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongForApiContractPartialFindResult')

const SongInListEditContractSchema = z
  .strictObject({
    notes: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    song: SongForApiContractSchema.exactOptional(),
    songInListId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongInListEditContract')

const SongInListForApiContractSchema = z
  .strictObject({
    notes: z.string().nullable().exactOptional(),
    order: z.int32().exactOptional(),
    song: SongForApiContractSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongInListForApiContract')

const SongInListForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(SongInListForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongInListForApiContractPartialFindResult')

const SongListForApiContractSchema = z
  .strictObject({
    author: UserForApiContractSchema.exactOptional(),
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    eventDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    events: z.array(ReleaseEventForApiContractSchema).nullable().exactOptional(),
    featuredCategory: SongListFeaturedCategorySchema.exactOptional(),
    id: z.int32().exactOptional(),
    latestComments: z.array(CommentForApiContractSchema).nullable().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    tags: z.array(TagUsageForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongListForApiContract')

const SongListForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(SongListForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongListForApiContractPartialFindResult')

const SongListForEditForApiContractSchema = z
  .strictObject({
    deleted: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
    eventDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    featuredCategory: SongListFeaturedCategorySchema.exactOptional(),
    id: z.int32().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    songLinks: z.array(SongInListEditContractSchema).nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    updateNotes: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SongListForEditForApiContract')

const SongListOptionalFieldsSchema = z
  .enum(['None', 'Description', 'Events', 'MainPicture', 'Tags'])
  .openapi('SongListOptionalFields')

const SongListSortRuleSchema = z
  .enum(['None', 'Name', 'Date', 'CreateDate'])
  .openapi('SongListSortRule')

const SongOptionalFieldsSchema = z
  .enum([
    'None',
    'AdditionalNames',
    'Albums',
    'Artists',
    'Lyrics',
    'MainPicture',
    'Names',
    'PVs',
    'ReleaseEvent',
    'Tags',
    'ThumbUrl',
    'WebLinks',
    'Bpm',
  ])
  .openapi('SongOptionalFields')

const SongRatingContractSchema = z
  .strictObject({ rating: SongVoteRatingSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SongRatingContract')

const SongSortRuleSchema = z
  .enum([
    'None',
    'Name',
    'AdditionDate',
    'PublishDate',
    'FavoritedTimes',
    'RatingScore',
    'TagUsageCount',
    'SongType',
  ])
  .openapi('SongSortRule')

const SongVocalistSelectionSchema = z
  .enum(['Nothing', 'Vocaloid', 'UTAU', 'Other'])
  .openapi('SongVocalistSelection')

const SortDirectionSchema = z.enum(['Ascending', 'Descending']).openapi('SortDirection')

const TagForApiContractSchema = z
  .strictObject({
    additionalNames: z.string().nullable().exactOptional(),
    aliasedTo: TagBaseContractSchema.exactOptional(),
    categoryName: z.string().nullable().exactOptional(),
    createDate: z.iso.datetime({ offset: true }).exactOptional(),
    defaultNameLanguage: ContentLanguageSelectionSchema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    mainPicture: EntryThumbForApiContractSchema.exactOptional(),
    name: z.string().nullable().exactOptional(),
    names: z.array(LocalizedStringWithIdContractSchema).nullable().exactOptional(),
    parent: TagBaseContractSchema.exactOptional(),
    relatedTags: z.array(TagBaseContractSchema).nullable().exactOptional(),
    status: EntryStatusSchema.exactOptional(),
    targets: z.int32().exactOptional(),
    translatedDescription: EnglishTranslatedStringContractSchema.exactOptional(),
    urlSlug: z.string().nullable().exactOptional(),
    usageCount: z.int32().exactOptional(),
    version: z.int32().exactOptional(),
    webLinks: z.array(WebLinkForApiContractSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagForApiContract')

const TagForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(TagForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagForApiContractPartialFindResult')

const TagOptionalFieldsSchema = z
  .enum([
    'None',
    'AdditionalNames',
    'AliasedTo',
    'Description',
    'MainPicture',
    'Names',
    'Parent',
    'RelatedTags',
    'TranslatedDescription',
    'WebLinks',
  ])
  .openapi('TagOptionalFields')

const TagReportTypeSchema = z
  .enum(['InvalidInfo', 'Duplicate', 'Inappropriate', 'Other'])
  .openapi('TagReportType')

const TagSortRuleSchema = z
  .enum(['Nothing', 'Name', 'AdditionDate', 'UsageCount'])
  .openapi('TagSortRule')

const TagTargetTypesSchema = z
  .enum([
    'Nothing',
    'Album',
    'Artist',
    'AlbumArtist',
    'Event',
    'Song',
    'AlbumSong',
    'ArtistSong',
    'SongList',
    'All',
  ])
  .openapi('TagTargetTypes')

const TopSongsDateFilterTypeSchema = z
  .enum(['CreateDate', 'PublishDate', 'Popularity'])
  .openapi('TopSongsDateFilterType')

const UserEventRelationshipTypeSchema = z
  .enum(['Interested', 'Attending'])
  .openapi('UserEventRelationshipType')

const UserForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(UserForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserForApiContractPartialFindResult')

const UserInboxTypeSchema = z
  .enum(['Nothing', 'Received', 'Sent', 'Notifications'])
  .openapi('UserInboxType')

const UserMessageContractSchema = z
  .strictObject({
    body: z.string().nullable().exactOptional(),
    createdFormatted: z.string().nullable().exactOptional(),
    highPriority: z.boolean().exactOptional(),
    id: z.int32().exactOptional(),
    inbox: UserInboxTypeSchema.exactOptional(),
    read: z.boolean().exactOptional(),
    receiver: UserForApiContractSchema.exactOptional(),
    sender: UserForApiContractSchema.exactOptional(),
    subject: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserMessageContract')

const UserMessageContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(UserMessageContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserMessageContractPartialFindResult')

const UserOptionalFieldsSchema = z
  .enum(['None', 'KnownLanguages', 'MainPicture', 'OldUsernames'])
  .openapi('UserOptionalFields')

const UserSortRuleSchema = z.enum(['RegisterDate', 'Name', 'Group']).openapi('UserSortRule')

const VenueForApiContractPartialFindResultSchema = z
  .strictObject({
    items: z.array(VenueForApiContractSchema).nullable().exactOptional(),
    term: z.string().nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VenueForApiContractPartialFindResult')

const VenueOptionalFieldsSchema = z
  .enum(['None', 'AdditionalNames', 'Description', 'Events', 'Names', 'WebLinks'])
  .openapi('VenueOptionalFields')

const VenueReportTypeSchema = z
  .enum(['InvalidInfo', 'Duplicate', 'Inappropriate', 'Other'])
  .openapi('VenueReportType')

const VenueSortRuleSchema = z.enum(['None', 'Name', 'Distance']).openapi('VenueSortRule')

export const getApiActivityEntriesRoute = createRoute({
  method: 'get',
  path: '/api/activityEntries',
  tags: ['ActivityEntryApi'],
  request: {
    query: z.object({
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      userId: z
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
            in: 'query',
            name: 'userId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      editEvent: EntryEditEventSchema.openapi({
        param: {
          in: 'query',
          name: 'editEvent',
          schema: { $ref: '#/components/schemas/EntryEditEvent' },
          required: false,
        },
      }).exactOptional(),
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'entryType',
          schema: { $ref: '#/components/schemas/EntryType' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 50, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fields: ActivityEntryOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ActivityEntryOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      entryFields: EntryOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'entryFields',
          schema: { $ref: '#/components/schemas/EntryOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      sortRule: ActivityEntrySortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sortRule',
          schema: { $ref: '#/components/schemas/ActivityEntrySortRule' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ActivityEntryForApiContractPartialFindResultSchema },
        'text/json': { schema: ActivityEntryForApiContractPartialFindResultSchema },
        'text/plain': { schema: ActivityEntryForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiAlbumsRoute = createRoute({
  method: 'get',
  path: '/api/albums',
  tags: ['AlbumApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      discTypes: DiscTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'discTypes',
          schema: { $ref: '#/components/schemas/DiscType' },
          required: false,
        },
      }).exactOptional(),
      'tagName[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tagName[]',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      'artistId[]': z
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
            in: 'query',
            name: 'artistId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      artistParticipationStatus: ArtistAlbumParticipationStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'artistParticipationStatus',
          schema: { $ref: '#/components/schemas/ArtistAlbumParticipationStatus' },
          required: false,
        },
      }).exactOptional(),
      childVoicebanks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childVoicebanks',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      includeMembers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeMembers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      barcode: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'barcode', schema: { type: 'string' }, required: false },
        }),
      status: EntryStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/EntryStatus' },
          required: false,
        },
      }).exactOptional(),
      releaseDateAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'releaseDateAfter',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      releaseDateBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'releaseDateBefore',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      advancedFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .strictObject({
                filterType: AdvancedFilterTypeSchema.exactOptional(),
                negate: z.stringbool().exactOptional(),
                param: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'advancedFilters',
            schema: {
              items: {
                additionalProperties: false,
                properties: {
                  filterType: { $ref: '#/components/schemas/AdvancedFilterType' },
                  negate: { type: 'boolean' },
                  param: { nullable: true, type: 'string' },
                },
                type: 'object',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: AlbumSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/AlbumSortRule' },
          required: false,
        },
      }).exactOptional(),
      preferAccurateMatches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'preferAccurateMatches',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      deleted: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'deleted',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: AlbumOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/AlbumOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlbumForApiContractPartialFindResultSchema },
        'text/json': { schema: AlbumForApiContractPartialFindResultSchema },
        'text/plain': { schema: AlbumForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiAlbumsCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/albums/comments/{commentId}',
  tags: ['AlbumApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiAlbumsCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/albums/comments/{commentId}',
  tags: ['AlbumApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiAlbumsNamesRoute = createRoute({
  method: 'get',
  path: '/api/albums/names',
  tags: ['AlbumApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiAlbumsNewRoute = createRoute({
  method: 'get',
  path: '/api/albums/new',
  tags: ['AlbumApi'],
  request: {
    query: z.object({
      languagePreference: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'languagePreference',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      fields: AlbumOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/AlbumOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlbumForApiContractSchema) },
        'text/json': { schema: z.array(AlbumForApiContractSchema) },
        'text/plain': { schema: z.array(AlbumForApiContractSchema) },
      },
    },
  },
})

export const getApiAlbumsTopRoute = createRoute({
  method: 'get',
  path: '/api/albums/top',
  tags: ['AlbumApi'],
  request: {
    query: z.object({
      'ignoreIds[]': z
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
            in: 'query',
            name: 'ignoreIds[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      languagePreference: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'languagePreference',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      fields: AlbumOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/AlbumOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlbumForApiContractSchema) },
        'text/json': { schema: z.array(AlbumForApiContractSchema) },
        'text/plain': { schema: z.array(AlbumForApiContractSchema) },
      },
    },
  },
})

export const getApiAlbumsIdRoute = createRoute({
  method: 'get',
  path: '/api/albums/{id}',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: AlbumOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/AlbumOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      songFields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'songFields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlbumForApiContractSchema },
        'text/json': { schema: AlbumForApiContractSchema },
        'text/plain': { schema: AlbumForApiContractSchema },
      },
    },
  },
})

export const deleteApiAlbumsIdRoute = createRoute({
  method: 'delete',
  path: '/api/albums/{id}',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiAlbumsIdCommentsRoute = createRoute({
  method: 'get',
  path: '/api/albums/{id}/comments',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(CommentForApiContractSchema) },
        'text/json': { schema: z.array(CommentForApiContractSchema) },
        'text/plain': { schema: z.array(CommentForApiContractSchema) },
      },
    },
  },
})

export const postApiAlbumsIdCommentsRoute = createRoute({
  method: 'post',
  path: '/api/albums/{id}/comments',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const getApiAlbumsIdReviewsRoute = createRoute({
  method: 'get',
  path: '/api/albums/{id}/reviews',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'languageCode', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlbumReviewContractSchema) },
        'text/json': { schema: z.array(AlbumReviewContractSchema) },
        'text/plain': { schema: z.array(AlbumReviewContractSchema) },
      },
    },
  },
})

export const postApiAlbumsIdReviewsRoute = createRoute({
  method: 'post',
  path: '/api/albums/{id}/reviews',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: AlbumReviewContractSchema },
        'application/json': { schema: AlbumReviewContractSchema },
        'application/json-patch+json': { schema: AlbumReviewContractSchema },
        'text/json': { schema: AlbumReviewContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlbumReviewContractSchema },
        'text/json': { schema: AlbumReviewContractSchema },
        'text/plain': { schema: AlbumReviewContractSchema },
      },
    },
  },
})

export const deleteApiAlbumsIdReviewsReviewIdRoute = createRoute({
  method: 'delete',
  path: '/api/albums/{id}/reviews/{reviewId}',
  tags: ['AlbumApi'],
  request: {
    params: z.object({
      reviewId: z
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
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiAlbumsIdTracksRoute = createRoute({
  method: 'get',
  path: '/api/albums/{id}/tracks',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SongInAlbumForApiContractSchema) },
        'text/json': { schema: z.array(SongInAlbumForApiContractSchema) },
        'text/plain': { schema: z.array(SongInAlbumForApiContractSchema) },
      },
    },
  },
})

export const getApiAlbumsIdTracksFieldsRoute = createRoute({
  method: 'get',
  path: '/api/albums/{id}/tracks/fields',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'field[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'field[]',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      discNumber: z
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
            in: 'query',
            name: 'discNumber',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.record(z.string(), z.string())) },
        'text/json': { schema: z.array(z.record(z.string(), z.string())) },
        'text/plain': { schema: z.array(z.record(z.string(), z.string())) },
      },
    },
  },
})

export const getApiAlbumsIdUserCollectionsRoute = createRoute({
  method: 'get',
  path: '/api/albums/{id}/user-collections',
  tags: ['AlbumApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      languagePreference: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'languagePreference',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlbumForUserForApiContractSchema) },
        'text/json': { schema: z.array(AlbumForUserForApiContractSchema) },
        'text/plain': { schema: z.array(AlbumForUserForApiContractSchema) },
      },
    },
  },
})

export const getApiArtistsRoute = createRoute({
  method: 'get',
  path: '/api/artists',
  tags: ['ArtistApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      artistTypes: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'artistTypes', schema: { type: 'string' }, required: false },
        }),
      allowBaseVoicebanks: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allowBaseVoicebanks',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      'tagName[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tagName[]',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      followedByUserId: z
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
            in: 'query',
            name: 'followedByUserId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      status: EntryStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/EntryStatus' },
          required: false,
        },
      }).exactOptional(),
      advancedFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .strictObject({
                filterType: AdvancedFilterTypeSchema.exactOptional(),
                negate: z.stringbool().exactOptional(),
                param: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'advancedFilters',
            schema: {
              items: {
                additionalProperties: false,
                properties: {
                  filterType: { $ref: '#/components/schemas/AdvancedFilterType' },
                  negate: { type: 'boolean' },
                  param: { nullable: true, type: 'string' },
                },
                type: 'object',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: ArtistSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/ArtistSortRule' },
          required: false,
        },
      }).exactOptional(),
      preferAccurateMatches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'preferAccurateMatches',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: ArtistOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ArtistOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ArtistForApiContractPartialFindResultSchema },
        'text/json': { schema: ArtistForApiContractPartialFindResultSchema },
        'text/plain': { schema: ArtistForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiArtistsCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/artists/comments/{commentId}',
  tags: ['ArtistApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiArtistsCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/artists/comments/{commentId}',
  tags: ['ArtistApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiArtistsNamesRoute = createRoute({
  method: 'get',
  path: '/api/artists/names',
  tags: ['ArtistApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiArtistsIdRoute = createRoute({
  method: 'get',
  path: '/api/artists/{id}',
  tags: ['ArtistApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: ArtistOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ArtistOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      relations: ArtistRelationsFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'relations',
          schema: { $ref: '#/components/schemas/ArtistRelationsFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ArtistForApiContractSchema },
        'text/json': { schema: ArtistForApiContractSchema },
        'text/plain': { schema: ArtistForApiContractSchema },
      },
    },
  },
})

export const deleteApiArtistsIdRoute = createRoute({
  method: 'delete',
  path: '/api/artists/{id}',
  tags: ['ArtistApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiArtistsIdCommentsRoute = createRoute({
  method: 'get',
  path: '/api/artists/{id}/comments',
  tags: ['ArtistApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(CommentForApiContractSchema) },
        'text/json': { schema: z.array(CommentForApiContractSchema) },
        'text/plain': { schema: z.array(CommentForApiContractSchema) },
      },
    },
  },
})

export const postApiArtistsIdCommentsRoute = createRoute({
  method: 'post',
  path: '/api/artists/{id}/comments',
  tags: ['ArtistApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const getApiCommentsRoute = createRoute({
  method: 'get',
  path: '/api/comments',
  tags: ['CommentApi'],
  request: {
    query: z.object({
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      userId: z
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
            in: 'query',
            name: 'userId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'entryType',
          schema: { $ref: '#/components/schemas/EntryType' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 50, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fields: CommentOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/CommentOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      entryFields: EntryOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'entryFields',
          schema: { $ref: '#/components/schemas/EntryOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      sortRule: CommentSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sortRule',
          schema: { $ref: '#/components/schemas/CommentSortRule' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/plain': { schema: CommentForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiCommentsEntryTypeCommentsRoute = createRoute({
  method: 'get',
  path: '/api/comments/{entryType}-comments',
  tags: ['CommentApi'],
  request: {
    params: z.object({
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'path',
          name: 'entryType',
          required: true,
          schema: { $ref: '#/components/schemas/EntryType' },
        },
      }),
    }),
    query: z.object({
      entryId: z
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
            in: 'query',
            name: 'entryId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/plain': { schema: CommentForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiCommentsEntryTypeCommentsRoute = createRoute({
  method: 'post',
  path: '/api/comments/{entryType}-comments',
  tags: ['CommentApi'],
  request: {
    params: z.object({
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'path',
          name: 'entryType',
          required: true,
          schema: { $ref: '#/components/schemas/EntryType' },
        },
      }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const postApiCommentsEntryTypeCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/comments/{entryType}-comments/{commentId}',
  tags: ['CommentApi'],
  request: {
    params: z.object({
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'path',
          name: 'entryType',
          required: true,
          schema: { $ref: '#/components/schemas/EntryType' },
        },
      }),
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiCommentsEntryTypeCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/comments/{entryType}-comments/{commentId}',
  tags: ['CommentApi'],
  request: {
    params: z.object({
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'path',
          name: 'entryType',
          required: true,
          schema: { $ref: '#/components/schemas/EntryType' },
        },
      }),
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiDiscussionsCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/discussions/comments/{commentId}',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiDiscussionsCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/discussions/comments/{commentId}',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiDiscussionsFoldersRoute = createRoute({
  method: 'get',
  path: '/api/discussions/folders',
  tags: ['DiscussionApi'],
  request: {
    query: z.object({
      fields: DiscussionFolderOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/DiscussionFolderOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(DiscussionFolderContractSchema) },
        'text/json': { schema: z.array(DiscussionFolderContractSchema) },
        'text/plain': { schema: z.array(DiscussionFolderContractSchema) },
      },
    },
  },
})

export const postApiDiscussionsFoldersRoute = createRoute({
  method: 'post',
  path: '/api/discussions/folders',
  tags: ['DiscussionApi'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: DiscussionFolderContractSchema },
        'application/json': { schema: DiscussionFolderContractSchema },
        'application/json-patch+json': { schema: DiscussionFolderContractSchema },
        'text/json': { schema: DiscussionFolderContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DiscussionFolderContractSchema },
        'text/json': { schema: DiscussionFolderContractSchema },
        'text/plain': { schema: DiscussionFolderContractSchema },
      },
    },
  },
})

export const getApiDiscussionsFoldersFolderIdTopicsRoute = createRoute({
  method: 'get',
  path: '/api/discussions/folders/{folderId}/topics',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      folderId: z
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
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: DiscussionTopicOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/DiscussionTopicOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(DiscussionTopicContractSchema) },
        'text/json': { schema: z.array(DiscussionTopicContractSchema) },
        'text/plain': { schema: z.array(DiscussionTopicContractSchema) },
      },
    },
  },
  deprecated: true,
})

export const postApiDiscussionsFoldersFolderIdTopicsRoute = createRoute({
  method: 'post',
  path: '/api/discussions/folders/{folderId}/topics',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      folderId: z
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
            in: 'path',
            name: 'folderId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: DiscussionTopicContractSchema },
        'application/json': { schema: DiscussionTopicContractSchema },
        'application/json-patch+json': { schema: DiscussionTopicContractSchema },
        'text/json': { schema: DiscussionTopicContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DiscussionTopicContractSchema },
        'text/json': { schema: DiscussionTopicContractSchema },
        'text/plain': { schema: DiscussionTopicContractSchema },
      },
    },
  },
})

export const getApiDiscussionsTopicsRoute = createRoute({
  method: 'get',
  path: '/api/discussions/topics',
  tags: ['DiscussionApi'],
  request: {
    query: z.object({
      folderId: z
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
            in: 'query',
            name: 'folderId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: DiscussionTopicSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/DiscussionTopicSortRule' },
          required: false,
        },
      }).exactOptional(),
      fields: DiscussionTopicOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/DiscussionTopicOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DiscussionTopicContractPartialFindResultSchema },
        'text/json': { schema: DiscussionTopicContractPartialFindResultSchema },
        'text/plain': { schema: DiscussionTopicContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiDiscussionsTopicsTopicIdRoute = createRoute({
  method: 'get',
  path: '/api/discussions/topics/{topicId}',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      topicId: z
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
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: DiscussionTopicOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/DiscussionTopicOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DiscussionTopicContractSchema },
        'text/json': { schema: DiscussionTopicContractSchema },
        'text/plain': { schema: DiscussionTopicContractSchema },
      },
    },
  },
})

export const postApiDiscussionsTopicsTopicIdRoute = createRoute({
  method: 'post',
  path: '/api/discussions/topics/{topicId}',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      topicId: z
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
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: DiscussionTopicContractSchema },
        'application/json': { schema: DiscussionTopicContractSchema },
        'application/json-patch+json': { schema: DiscussionTopicContractSchema },
        'text/json': { schema: DiscussionTopicContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiDiscussionsTopicsTopicIdRoute = createRoute({
  method: 'delete',
  path: '/api/discussions/topics/{topicId}',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      topicId: z
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
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiDiscussionsTopicsTopicIdCommentsRoute = createRoute({
  method: 'post',
  path: '/api/discussions/topics/{topicId}/comments',
  tags: ['DiscussionApi'],
  request: {
    params: z.object({
      topicId: z
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
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const getApiEntriesRoute = createRoute({
  method: 'get',
  path: '/api/entries',
  tags: ['EntryApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      'tagName[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tagName[]',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      entryTypes: EntryTypesSchema.openapi({
        param: {
          in: 'query',
          name: 'entryTypes',
          schema: { $ref: '#/components/schemas/EntryTypes' },
          required: false,
        },
      }).exactOptional(),
      status: EntryStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/EntryStatus' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: EntrySortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/EntrySortRule' },
          required: false,
        },
      }).exactOptional(),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: EntryOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/EntryOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EntryForApiContractPartialFindResultSchema },
        'text/json': { schema: EntryForApiContractPartialFindResultSchema },
        'text/plain': { schema: EntryForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiEntriesNamesRoute = createRoute({
  method: 'get',
  path: '/api/entries/names',
  tags: ['EntryApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiEntryTypesEntryTypeSubTypeTagRoute = createRoute({
  method: 'get',
  path: '/api/entry-types/{entryType}/{subType}/tag',
  tags: ['EntryTypesApi'],
  request: {
    params: z.object({
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'path',
          name: 'entryType',
          required: true,
          schema: { $ref: '#/components/schemas/EntryType' },
        },
      }),
      subType: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subType', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      fields: TagOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/TagOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TagForApiContractSchema },
        'text/json': { schema: TagForApiContractSchema },
        'text/plain': { schema: TagForApiContractSchema },
      },
    },
  },
})

export const getApiPvsForSongsRoute = createRoute({
  method: 'get',
  path: '/api/pvs/for-songs',
  tags: ['PVApi'],
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'author', schema: { type: 'string' }, required: false },
        }),
      service: PVServiceSchema.openapi({
        param: {
          in: 'query',
          name: 'service',
          schema: { $ref: '#/components/schemas/PVService' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PVForSongContractPartialFindResultSchema },
        'text/json': { schema: PVForSongContractPartialFindResultSchema },
        'text/plain': { schema: PVForSongContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiReleaseEventSeriesRoute = createRoute({
  method: 'get',
  path: '/api/releaseEventSeries',
  tags: ['ReleaseEventSeriesApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      fields: ReleaseEventSeriesOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ReleaseEventSeriesOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ReleaseEventSeriesForApiContractPartialFindResultSchema },
        'text/json': { schema: ReleaseEventSeriesForApiContractPartialFindResultSchema },
        'text/plain': { schema: ReleaseEventSeriesForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiReleaseEventSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/releaseEventSeries/{id}',
  tags: ['ReleaseEventSeriesApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: ReleaseEventSeriesOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ReleaseEventSeriesOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ReleaseEventSeriesForApiContractSchema },
        'text/json': { schema: ReleaseEventSeriesForApiContractSchema },
        'text/plain': { schema: ReleaseEventSeriesForApiContractSchema },
      },
    },
  },
})

export const deleteApiReleaseEventSeriesIdRoute = createRoute({
  method: 'delete',
  path: '/api/releaseEventSeries/{id}',
  tags: ['ReleaseEventSeriesApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      hardDelete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hardDelete',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiReleaseEventSeriesIdForEditRoute = createRoute({
  method: 'get',
  path: '/api/releaseEventSeries/{id}/for-edit',
  tags: ['ReleaseEventSeriesApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ReleaseEventSeriesForEditForApiContractSchema },
        'text/json': { schema: ReleaseEventSeriesForEditForApiContractSchema },
        'text/plain': { schema: ReleaseEventSeriesForEditForApiContractSchema },
      },
    },
  },
})

export const getApiReleaseEventsRoute = createRoute({
  method: 'get',
  path: '/api/releaseEvents',
  tags: ['ReleaseEventApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      seriesId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'seriesId',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      afterDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      beforeDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      category: EventCategorySchema.openapi({
        param: {
          in: 'query',
          name: 'category',
          schema: { $ref: '#/components/schemas/EventCategory' },
          required: false,
        },
      }).exactOptional(),
      userCollectionId: z
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
            in: 'query',
            name: 'userCollectionId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      'artistId[]': z
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
            in: 'query',
            name: 'artistId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childVoicebanks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childVoicebanks',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      includeMembers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeMembers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      status: EntryStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/EntryStatus' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: EventSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/EventSortRule' },
          required: false,
        },
      }).exactOptional(),
      fields: ReleaseEventOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ReleaseEventOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      sortDirection: SortDirectionSchema.openapi({
        param: {
          in: 'query',
          name: 'sortDirection',
          schema: { $ref: '#/components/schemas/SortDirection' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ReleaseEventForApiContractPartialFindResultSchema },
        'text/json': { schema: ReleaseEventForApiContractPartialFindResultSchema },
        'text/plain': { schema: ReleaseEventForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiReleaseEventsNamesRoute = createRoute({
  method: 'get',
  path: '/api/releaseEvents/names',
  tags: ['ReleaseEventApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiReleaseEventsEventIdAlbumsRoute = createRoute({
  method: 'get',
  path: '/api/releaseEvents/{eventId}/albums',
  tags: ['ReleaseEventApi'],
  request: {
    params: z.object({
      eventId: z
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
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: AlbumOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/AlbumOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(AlbumForApiContractSchema) },
        'text/json': { schema: z.array(AlbumForApiContractSchema) },
        'text/plain': { schema: z.array(AlbumForApiContractSchema) },
      },
    },
  },
})

export const getApiReleaseEventsEventIdPublishedSongsRoute = createRoute({
  method: 'get',
  path: '/api/releaseEvents/{eventId}/published-songs',
  tags: ['ReleaseEventApi'],
  request: {
    params: z.object({
      eventId: z
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
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SongForApiContractSchema) },
        'text/json': { schema: z.array(SongForApiContractSchema) },
        'text/plain': { schema: z.array(SongForApiContractSchema) },
      },
    },
  },
})

export const postApiReleaseEventsEventIdReportsRoute = createRoute({
  method: 'post',
  path: '/api/releaseEvents/{eventId}/reports',
  tags: ['ReleaseEventApi'],
  request: {
    params: z.object({
      eventId: z
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
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      reportType: EventReportTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'reportType',
          schema: { $ref: '#/components/schemas/EventReportType' },
          required: false,
        },
      }).exactOptional(),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'notes', schema: { type: 'string' }, required: false },
        }),
      versionNumber: z
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
            in: 'query',
            name: 'versionNumber',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiReleaseEventsIdRoute = createRoute({
  method: 'get',
  path: '/api/releaseEvents/{id}',
  tags: ['ReleaseEventApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: ReleaseEventOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ReleaseEventOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ReleaseEventForApiContractSchema },
        'text/json': { schema: ReleaseEventForApiContractSchema },
        'text/plain': { schema: ReleaseEventForApiContractSchema },
      },
    },
  },
})

export const deleteApiReleaseEventsIdRoute = createRoute({
  method: 'delete',
  path: '/api/releaseEvents/{id}',
  tags: ['ReleaseEventApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      hardDelete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hardDelete',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiResourcesCultureCodeRoute = createRoute({
  method: 'get',
  path: '/api/resources/{cultureCode}',
  tags: ['ResourcesApi'],
  request: {
    params: z.object({
      cultureCode: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cultureCode', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'setNames[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'setNames[]',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.record(z.string(), z.record(z.string(), z.string())) },
        'text/json': { schema: z.record(z.string(), z.record(z.string(), z.string())) },
        'text/plain': { schema: z.record(z.string(), z.record(z.string(), z.string())) },
      },
    },
  },
})

export const postApiSongListsRoute = createRoute({
  method: 'post',
  path: '/api/songLists',
  tags: ['SongListApi'],
  request: {
    body: {
      content: {
        'application/*+json': { schema: SongListForEditForApiContractSchema },
        'application/json': { schema: SongListForEditForApiContractSchema },
        'application/json-patch+json': { schema: SongListForEditForApiContractSchema },
        'text/json': { schema: SongListForEditForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
        'text/plain': { schema: z.int32() },
      },
    },
  },
})

export const postApiSongListsCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/songLists/comments/{commentId}',
  tags: ['SongListApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiSongListsCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/songLists/comments/{commentId}',
  tags: ['SongListApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiSongListsFeaturedRoute = createRoute({
  method: 'get',
  path: '/api/songLists/featured',
  tags: ['SongListApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      featuredCategory: SongListFeaturedCategorySchema.openapi({
        param: {
          in: 'query',
          name: 'featuredCategory',
          schema: { $ref: '#/components/schemas/SongListFeaturedCategory' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: SongListSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/SongListSortRule' },
          required: false,
        },
      }).exactOptional(),
      fields: SongListOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongListOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongListForApiContractPartialFindResultSchema },
        'text/json': { schema: SongListForApiContractPartialFindResultSchema },
        'text/plain': { schema: SongListForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiSongListsFeaturedNamesRoute = createRoute({
  method: 'get',
  path: '/api/songLists/featured/names',
  tags: ['SongListApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      featuredCategory: SongListFeaturedCategorySchema.openapi({
        param: {
          in: 'query',
          name: 'featuredCategory',
          schema: { $ref: '#/components/schemas/SongListFeaturedCategory' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const deleteApiSongListsIdRoute = createRoute({
  method: 'delete',
  path: '/api/songLists/{id}',
  tags: ['SongListApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      hardDelete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hardDelete',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiSongListsListIdCommentsRoute = createRoute({
  method: 'get',
  path: '/api/songLists/{listId}/comments',
  tags: ['SongListApi'],
  request: {
    params: z.object({
      listId: z
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
            in: 'path',
            name: 'listId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/plain': { schema: CommentForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiSongListsListIdCommentsRoute = createRoute({
  method: 'post',
  path: '/api/songLists/{listId}/comments',
  tags: ['SongListApi'],
  request: {
    params: z.object({
      listId: z
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
            in: 'path',
            name: 'listId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const getApiSongListsListIdSongsRoute = createRoute({
  method: 'get',
  path: '/api/songLists/{listId}/songs',
  tags: ['SongListApi'],
  request: {
    params: z.object({
      listId: z
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
            in: 'path',
            name: 'listId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      songTypes: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'songTypes', schema: { type: 'string' }, required: false },
        }),
      pvServices: PVServicesSchema.openapi({
        param: {
          in: 'query',
          name: 'pvServices',
          schema: { $ref: '#/components/schemas/PVServices' },
          required: false,
        },
      }).exactOptional(),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      'artistId[]': z
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
            in: 'query',
            name: 'artistId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childVoicebanks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childVoicebanks',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      advancedFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .strictObject({
                filterType: AdvancedFilterTypeSchema.exactOptional(),
                negate: z.stringbool().exactOptional(),
                param: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'advancedFilters',
            schema: {
              items: {
                additionalProperties: false,
                properties: {
                  filterType: { $ref: '#/components/schemas/AdvancedFilterType' },
                  negate: { type: 'boolean' },
                  param: { nullable: true, type: 'string' },
                },
                type: 'object',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: SongSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/SongSortRule' },
          required: false,
        },
      }).exactOptional(),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongInListForApiContractPartialFindResultSchema },
        'text/json': { schema: SongInListForApiContractPartialFindResultSchema },
        'text/plain': { schema: SongInListForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiSongsRoute = createRoute({
  method: 'get',
  path: '/api/songs',
  tags: ['SongApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      songTypes: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'songTypes', schema: { type: 'string' }, required: false },
        }),
      afterDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      beforeDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'tagName[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tagName[]',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      unifyTypesAndTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unifyTypesAndTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      'artistId[]': z
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
            in: 'query',
            name: 'artistId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      artistParticipationStatus: ArtistAlbumParticipationStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'artistParticipationStatus',
          schema: { $ref: '#/components/schemas/ArtistAlbumParticipationStatus' },
          required: false,
        },
      }).exactOptional(),
      childVoicebanks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childVoicebanks',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      includeMembers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeMembers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      onlyWithPvs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'onlyWithPvs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      pvServices: PVServicesSchema.openapi({
        param: {
          in: 'query',
          name: 'pvServices',
          schema: { $ref: '#/components/schemas/PVServices' },
          required: false,
        },
      }).exactOptional(),
      since: z
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
            in: 'query',
            name: 'since',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      minScore: z
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
            in: 'query',
            name: 'minScore',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      userCollectionId: z
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
            in: 'query',
            name: 'userCollectionId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      releaseEventId: z
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
            in: 'query',
            name: 'releaseEventId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      parentSongId: z
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
            in: 'query',
            name: 'parentSongId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      status: EntryStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/EntryStatus' },
          required: false,
        },
      }).exactOptional(),
      advancedFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .strictObject({
                filterType: AdvancedFilterTypeSchema.exactOptional(),
                negate: z.stringbool().exactOptional(),
                param: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'advancedFilters',
            schema: {
              items: {
                additionalProperties: false,
                properties: {
                  filterType: { $ref: '#/components/schemas/AdvancedFilterType' },
                  negate: { type: 'boolean' },
                  param: { nullable: true, type: 'string' },
                },
                type: 'object',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: SongSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/SongSortRule' },
          required: false,
        },
      }).exactOptional(),
      preferAccurateMatches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'preferAccurateMatches',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      minMilliBpm: z
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
            in: 'query',
            name: 'minMilliBpm',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxMilliBpm: z
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
            in: 'query',
            name: 'maxMilliBpm',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      minLength: z
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
            in: 'query',
            name: 'minLength',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxLength: z
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
            in: 'query',
            name: 'maxLength',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongForApiContractPartialFindResultSchema },
        'text/json': { schema: SongForApiContractPartialFindResultSchema },
        'text/plain': { schema: SongForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiSongsByPvRoute = createRoute({
  method: 'get',
  path: '/api/songs/byPv',
  tags: ['SongApi'],
  request: {
    query: z.object({
      pvService: PVServiceSchema.openapi({
        param: {
          in: 'query',
          name: 'pvService',
          schema: { $ref: '#/components/schemas/PVService' },
          required: false,
        },
      }).exactOptional(),
      pvId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pvId', schema: { type: 'string' }, required: false },
        }),
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongForApiContractSchema },
        'text/json': { schema: SongForApiContractSchema },
        'text/plain': { schema: SongForApiContractSchema },
      },
    },
  },
})

export const postApiSongsCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/songs/comments/{commentId}',
  tags: ['SongApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiSongsCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/songs/comments/{commentId}',
  tags: ['SongApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiSongsHighlightedRoute = createRoute({
  method: 'get',
  path: '/api/songs/highlighted',
  tags: ['SongApi'],
  request: {
    query: z.object({
      languagePreference: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'languagePreference',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SongForApiContractSchema) },
        'text/json': { schema: z.array(SongForApiContractSchema) },
        'text/plain': { schema: z.array(SongForApiContractSchema) },
      },
    },
  },
})

export const getApiSongsLyricsLyricsIdRoute = createRoute({
  method: 'get',
  path: '/api/songs/lyrics/{lyricsId}',
  tags: ['SongApi'],
  request: {
    params: z.object({
      lyricsId: z
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
            in: 'path',
            name: 'lyricsId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LyricsForSongContractSchema },
        'text/json': { schema: LyricsForSongContractSchema },
        'text/plain': { schema: LyricsForSongContractSchema },
      },
    },
  },
})

export const getApiSongsNamesRoute = createRoute({
  method: 'get',
  path: '/api/songs/names',
  tags: ['SongApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiSongsTopRatedRoute = createRoute({
  method: 'get',
  path: '/api/songs/top-rated',
  tags: ['SongApi'],
  request: {
    query: z.object({
      durationHours: z
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
            in: 'query',
            name: 'durationHours',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      filterBy: TopSongsDateFilterTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'filterBy',
          schema: { $ref: '#/components/schemas/TopSongsDateFilterType' },
          required: false,
        },
      }).exactOptional(),
      vocalist: SongVocalistSelectionSchema.openapi({
        param: {
          in: 'query',
          name: 'vocalist',
          schema: { $ref: '#/components/schemas/SongVocalistSelection' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 25, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      languagePreference: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'languagePreference',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SongForApiContractSchema) },
        'text/json': { schema: z.array(SongForApiContractSchema) },
        'text/plain': { schema: z.array(SongForApiContractSchema) },
      },
    },
  },
})

export const getApiSongsIdRoute = createRoute({
  method: 'get',
  path: '/api/songs/{id}',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongForApiContractSchema },
        'text/json': { schema: SongForApiContractSchema },
        'text/plain': { schema: SongForApiContractSchema },
      },
    },
  },
})

export const deleteApiSongsIdRoute = createRoute({
  method: 'delete',
  path: '/api/songs/{id}',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiSongsIdCommentsRoute = createRoute({
  method: 'get',
  path: '/api/songs/{id}/comments',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(CommentForApiContractSchema) },
        'text/json': { schema: z.array(CommentForApiContractSchema) },
        'text/plain': { schema: z.array(CommentForApiContractSchema) },
      },
    },
  },
})

export const postApiSongsIdCommentsRoute = createRoute({
  method: 'post',
  path: '/api/songs/{id}/comments',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const getApiSongsIdDerivedRoute = createRoute({
  method: 'get',
  path: '/api/songs/{id}/derived',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SongForApiContractSchema) },
        'text/json': { schema: z.array(SongForApiContractSchema) },
        'text/plain': { schema: z.array(SongForApiContractSchema) },
      },
    },
  },
})

export const getApiSongsIdRatingsRoute = createRoute({
  method: 'get',
  path: '/api/songs/{id}/ratings',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      userFields: UserOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'userFields',
          schema: { $ref: '#/components/schemas/UserOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(RatedSongForUserForApiContractSchema) },
        'text/json': { schema: z.array(RatedSongForUserForApiContractSchema) },
        'text/plain': { schema: z.array(RatedSongForUserForApiContractSchema) },
      },
    },
  },
})

export const postApiSongsIdRatingsRoute = createRoute({
  method: 'post',
  path: '/api/songs/{id}/ratings',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: SongRatingContractSchema },
        'application/json': { schema: SongRatingContractSchema },
        'application/json-patch+json': { schema: SongRatingContractSchema },
        'text/json': { schema: SongRatingContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiSongsIdRelatedRoute = createRoute({
  method: 'get',
  path: '/api/songs/{id}/related',
  tags: ['SongApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: RelatedSongsContractSchema },
        'text/json': { schema: RelatedSongsContractSchema },
        'text/plain': { schema: RelatedSongsContractSchema },
      },
    },
  },
})

export const getApiTagsRoute = createRoute({
  method: 'get',
  path: '/api/tags',
  tags: ['TagApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      allowChildren: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allowChildren',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      categoryName: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'categoryName',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      sort: TagSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/TagSortRule' },
          required: false,
        },
      }).exactOptional(),
      preferAccurateMatches: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'preferAccurateMatches',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fields: TagOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/TagOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      target: TagTargetTypesSchema.openapi({
        param: {
          in: 'query',
          name: 'target',
          schema: { $ref: '#/components/schemas/TagTargetTypes' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TagForApiContractPartialFindResultSchema },
        'text/json': { schema: TagForApiContractPartialFindResultSchema },
        'text/plain': { schema: TagForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiTagsRoute = createRoute({
  method: 'post',
  path: '/api/tags',
  tags: ['TagApi'],
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TagBaseContractSchema },
        'text/json': { schema: TagBaseContractSchema },
        'text/plain': { schema: TagBaseContractSchema },
      },
    },
  },
})

export const getApiTagsByNameNameRoute = createRoute({
  method: 'get',
  path: '/api/tags/byName/{name}',
  tags: ['TagApi'],
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      fields: TagOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/TagOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TagForApiContractSchema },
        'text/json': { schema: TagForApiContractSchema },
        'text/plain': { schema: TagForApiContractSchema },
      },
    },
  },
  deprecated: true,
})

export const getApiTagsCategoryNamesRoute = createRoute({
  method: 'get',
  path: '/api/tags/categoryNames',
  tags: ['TagApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const postApiTagsCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/tags/comments/{commentId}',
  tags: ['TagApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiTagsCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/tags/comments/{commentId}',
  tags: ['TagApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiTagsNamesRoute = createRoute({
  method: 'get',
  path: '/api/tags/names',
  tags: ['TagApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      allowAliases: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allowAliases',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiTagsTopRoute = createRoute({
  method: 'get',
  path: '/api/tags/top',
  tags: ['TagApi'],
  request: {
    query: z.object({
      categoryName: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'categoryName', schema: { type: 'string' }, required: false },
        }),
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'entryType',
          schema: { $ref: '#/components/schemas/EntryType' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'maxResults',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(TagBaseContractSchema) },
        'text/json': { schema: z.array(TagBaseContractSchema) },
        'text/plain': { schema: z.array(TagBaseContractSchema) },
      },
    },
  },
})

export const getApiTagsIdRoute = createRoute({
  method: 'get',
  path: '/api/tags/{id}',
  tags: ['TagApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: TagOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/TagOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TagForApiContractSchema },
        'text/json': { schema: TagForApiContractSchema },
        'text/plain': { schema: TagForApiContractSchema },
      },
    },
  },
})

export const deleteApiTagsIdRoute = createRoute({
  method: 'delete',
  path: '/api/tags/{id}',
  tags: ['TagApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      hardDelete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hardDelete',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiTagsTagIdChildrenRoute = createRoute({
  method: 'get',
  path: '/api/tags/{tagId}/children',
  tags: ['TagApi'],
  request: {
    params: z.object({
      tagId: z
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
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: TagOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/TagOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(TagForApiContractSchema) },
        'text/json': { schema: z.array(TagForApiContractSchema) },
        'text/plain': { schema: z.array(TagForApiContractSchema) },
      },
    },
  },
})

export const getApiTagsTagIdCommentsRoute = createRoute({
  method: 'get',
  path: '/api/tags/{tagId}/comments',
  tags: ['TagApi'],
  request: {
    params: z.object({
      tagId: z
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
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/plain': { schema: CommentForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiTagsTagIdCommentsRoute = createRoute({
  method: 'post',
  path: '/api/tags/{tagId}/comments',
  tags: ['TagApi'],
  request: {
    params: z.object({
      tagId: z
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
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const postApiTagsTagIdReportsRoute = createRoute({
  method: 'post',
  path: '/api/tags/{tagId}/reports',
  tags: ['TagApi'],
  request: {
    params: z.object({
      tagId: z
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
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      reportType: TagReportTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'reportType',
          schema: { $ref: '#/components/schemas/TagReportType' },
          required: false,
        },
      }).exactOptional(),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'notes', schema: { type: 'string' }, required: false },
        }),
      versionNumber: z
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
            in: 'query',
            name: 'versionNumber',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiUsersRoute = createRoute({
  method: 'get',
  path: '/api/users',
  tags: ['UserApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      groups: UserGroupIdSchema.openapi({
        param: {
          in: 'query',
          name: 'groups',
          schema: { $ref: '#/components/schemas/UserGroupId' },
          required: false,
        },
      }).exactOptional(),
      joinDateAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'joinDateAfter',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      joinDateBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'joinDateBefore',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: UserSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/UserSortRule' },
          required: false,
        },
      }).exactOptional(),
      includeDisabled: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeDisabled',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      onlyVerified: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'onlyVerified',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      knowsLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'knowsLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: UserOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/UserOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserForApiContractPartialFindResultSchema },
        'text/json': { schema: UserForApiContractPartialFindResultSchema },
        'text/plain': { schema: UserForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiUsersCurrentRoute = createRoute({
  method: 'get',
  path: '/api/users/current',
  tags: ['UserApi'],
  request: {
    query: z.object({
      fields: UserOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/UserOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserForApiContractSchema },
        'text/json': { schema: UserForApiContractSchema },
        'text/plain': { schema: UserForApiContractSchema },
      },
    },
  },
})

export const getApiUsersCurrentAlbumCollectionStatusesAlbumIdRoute = createRoute({
  method: 'get',
  path: '/api/users/current/album-collection-statuses/{albumId}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'albumId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlbumForUserForApiContractSchema },
        'text/json': { schema: AlbumForUserForApiContractSchema },
        'text/plain': { schema: AlbumForUserForApiContractSchema },
      },
    },
  },
})

export const postApiUsersCurrentAlbumsAlbumIdRoute = createRoute({
  method: 'post',
  path: '/api/users/current/albums/{albumId}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'albumId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      collectionStatus: PurchaseStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'collectionStatus',
          schema: { $ref: '#/components/schemas/PurchaseStatus' },
          required: false,
        },
      }).exactOptional(),
      mediaType: MediaTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'mediaType',
          schema: { $ref: '#/components/schemas/MediaType' },
          required: false,
        },
      }).exactOptional(),
      rating: z
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
            in: 'query',
            name: 'rating',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
  },
})

export const getApiUsersCurrentFollowedArtistsArtistIdRoute = createRoute({
  method: 'get',
  path: '/api/users/current/followedArtists/{artistId}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'artistId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ArtistForUserForApiContractSchema },
        'text/json': { schema: ArtistForUserForApiContractSchema },
        'text/plain': { schema: ArtistForUserForApiContractSchema },
      },
    },
  },
})

export const postApiUsersCurrentFollowedTagsTagIdRoute = createRoute({
  method: 'post',
  path: '/api/users/current/followedTags/{tagId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      tagId: z
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
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiUsersCurrentFollowedTagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/api/users/current/followedTags/{tagId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      tagId: z
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
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiUsersCurrentRatedSongsSongIdRoute = createRoute({
  method: 'get',
  path: '/api/users/current/ratedSongs/{songId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      songId: z
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
            in: 'path',
            name: 'songId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongVoteRatingSchema },
        'text/json': { schema: SongVoteRatingSchema },
        'text/plain': { schema: SongVoteRatingSchema },
      },
    },
  },
})

export const postApiUsersCurrentRefreshEntryEditRoute = createRoute({
  method: 'post',
  path: '/api/users/current/refreshEntryEdit',
  tags: ['UserApi'],
  request: {
    query: z.object({
      entryType: EntryTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'entryType',
          schema: { $ref: '#/components/schemas/EntryType' },
          required: false,
        },
      }).exactOptional(),
      entryId: z
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
            in: 'query',
            name: 'entryId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: EntryEditDataContractSchema },
        'text/json': { schema: EntryEditDataContractSchema },
        'text/plain': { schema: EntryEditDataContractSchema },
      },
    },
  },
})

export const postApiUsersCurrentSongTagsSongIdRoute = createRoute({
  method: 'post',
  path: '/api/users/current/songTags/{songId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      songId: z
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
            in: 'path',
            name: 'songId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiUsersMessagesMessageIdRoute = createRoute({
  method: 'get',
  path: '/api/users/messages/{messageId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      messageId: z
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
            in: 'path',
            name: 'messageId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserMessageContractSchema },
        'text/json': { schema: UserMessageContractSchema },
        'text/plain': { schema: UserMessageContractSchema },
      },
    },
  },
})

export const getApiUsersNamesRoute = createRoute({
  method: 'get',
  path: '/api/users/names',
  tags: ['UserApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      includeDisabled: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeDisabled',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/plain': { schema: z.array(z.string()) },
      },
    },
  },
})

export const postApiUsersProfileCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/users/profileComments/{commentId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteApiUsersProfileCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/users/profileComments/{commentId}',
  tags: ['UserApi'],
  request: {
    params: z.object({
      commentId: z
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
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiUsersIdRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      fields: UserOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/UserOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserForApiContractSchema },
        'text/json': { schema: UserForApiContractSchema },
        'text/plain': { schema: UserForApiContractSchema },
      },
    },
  },
})

export const getApiUsersIdAlbumCollectionStatusesAlbumIdRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/album-collection-statuses/{albumId}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
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
        .openapi({
          param: {
            in: 'path',
            name: 'albumId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlbumForUserForApiContractSchema },
        'text/json': { schema: AlbumForUserForApiContractSchema },
        'text/plain': { schema: AlbumForUserForApiContractSchema },
      },
    },
  },
})

export const getApiUsersIdAlbumsRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/albums',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      tagId: z
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
            in: 'query',
            name: 'tagId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'tag', schema: { type: 'string' }, required: false },
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
            in: 'query',
            name: 'artistId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      purchaseStatuses: PurchaseStatusesSchema.openapi({
        param: {
          in: 'query',
          name: 'purchaseStatuses',
          schema: { $ref: '#/components/schemas/PurchaseStatuses' },
          required: false,
        },
      }).exactOptional(),
      releaseEventId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'releaseEventId',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      albumTypes: DiscTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'albumTypes',
          schema: { $ref: '#/components/schemas/DiscType' },
          required: false,
        },
      }).exactOptional(),
      advancedFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .strictObject({
                filterType: AdvancedFilterTypeSchema.exactOptional(),
                negate: z.stringbool().exactOptional(),
                param: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'advancedFilters',
            schema: {
              items: {
                additionalProperties: false,
                properties: {
                  filterType: { $ref: '#/components/schemas/AdvancedFilterType' },
                  negate: { type: 'boolean' },
                  param: { nullable: true, type: 'string' },
                },
                type: 'object',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: AlbumSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/AlbumSortRule' },
          required: false,
        },
      }).exactOptional(),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: AlbumOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/AlbumOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      mediaType: MediaTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'mediaType',
          schema: { $ref: '#/components/schemas/MediaType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AlbumForUserForApiContractPartialFindResultSchema },
        'text/json': { schema: AlbumForUserForApiContractPartialFindResultSchema },
        'text/plain': { schema: AlbumForUserForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiUsersIdEventsRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/events',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      relationshipType: UserEventRelationshipTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'relationshipType',
          schema: { $ref: '#/components/schemas/UserEventRelationshipType' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(ReleaseEventForApiContractSchema) },
        'text/json': { schema: z.array(ReleaseEventForApiContractSchema) },
        'text/plain': { schema: z.array(ReleaseEventForApiContractSchema) },
      },
    },
  },
})

export const getApiUsersIdFollowedArtistsRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/followedArtists',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      artistType: ArtistTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'artistType',
          schema: { $ref: '#/components/schemas/ArtistType' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: ArtistSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/ArtistSortRule' },
          required: false,
        },
      }).exactOptional(),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: ArtistOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/ArtistOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ArtistForUserForApiContractPartialFindResultSchema },
        'text/json': { schema: ArtistForUserForApiContractPartialFindResultSchema },
        'text/plain': { schema: ArtistForUserForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiUsersIdFollowedArtistsArtistIdRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/followedArtists/{artistId}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
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
        .openapi({
          param: {
            in: 'path',
            name: 'artistId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ArtistForUserForApiContractSchema },
        'text/json': { schema: ArtistForUserForApiContractSchema },
        'text/plain': { schema: ArtistForUserForApiContractSchema },
      },
    },
  },
})

export const getApiUsersIdMessagesRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/messages',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      inbox: UserInboxTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'inbox',
          schema: { $ref: '#/components/schemas/UserInboxType' },
          required: false,
        },
      }).exactOptional(),
      unread: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unread',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      anotherUserId: z
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
            in: 'query',
            name: 'anotherUserId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserMessageContractPartialFindResultSchema },
        'text/json': { schema: UserMessageContractPartialFindResultSchema },
        'text/plain': { schema: UserMessageContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiUsersIdMessagesRoute = createRoute({
  method: 'post',
  path: '/api/users/{id}/messages',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UserMessageContractSchema },
        'application/json': { schema: UserMessageContractSchema },
        'application/json-patch+json': { schema: UserMessageContractSchema },
        'text/json': { schema: UserMessageContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UserMessageContractSchema },
        'text/json': { schema: UserMessageContractSchema },
        'text/plain': { schema: UserMessageContractSchema },
      },
    },
  },
})

export const deleteApiUsersIdMessagesRoute = createRoute({
  method: 'delete',
  path: '/api/users/{id}/messages',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      messageId: z
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
            in: 'query',
            name: 'messageId',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiUsersIdProfileCommentsRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/profileComments',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/json': { schema: CommentForApiContractPartialFindResultSchema },
        'text/plain': { schema: CommentForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const postApiUsersIdProfileCommentsRoute = createRoute({
  method: 'post',
  path: '/api/users/{id}/profileComments',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CommentForApiContractSchema },
        'application/json': { schema: CommentForApiContractSchema },
        'application/json-patch+json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: CommentForApiContractSchema },
        'text/json': { schema: CommentForApiContractSchema },
        'text/plain': { schema: CommentForApiContractSchema },
      },
    },
  },
})

export const getApiUsersIdRatedSongsRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/ratedSongs',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      tagName: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'tagName', schema: { type: 'string' }, required: false },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      'artistId[]': z
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
            in: 'query',
            name: 'artistId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childVoicebanks: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childVoicebanks',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      artistGrouping: LogicalGroupingSchema.openapi({
        param: {
          in: 'query',
          name: 'artistGrouping',
          schema: { $ref: '#/components/schemas/LogicalGrouping' },
          required: false,
        },
      }).exactOptional(),
      rating: SongVoteRatingSchema.openapi({
        param: {
          in: 'query',
          name: 'rating',
          schema: { $ref: '#/components/schemas/SongVoteRating' },
          required: false,
        },
      }).exactOptional(),
      songListId: z
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
            in: 'query',
            name: 'songListId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      groupByRating: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'groupByRating',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      pvServices: PVServicesSchema.openapi({
        param: {
          in: 'query',
          name: 'pvServices',
          schema: { $ref: '#/components/schemas/PVServices' },
          required: false,
        },
      }).exactOptional(),
      advancedFilters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .strictObject({
                filterType: AdvancedFilterTypeSchema.exactOptional(),
                negate: z.stringbool().exactOptional(),
                param: z.string().nullable().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'advancedFilters',
            schema: {
              items: {
                additionalProperties: false,
                properties: {
                  filterType: { $ref: '#/components/schemas/AdvancedFilterType' },
                  negate: { type: 'boolean' },
                  param: { nullable: true, type: 'string' },
                },
                type: 'object',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: RatedSongForUserSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/RatedSongForUserSortRule' },
          required: false,
        },
      }).exactOptional(),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      fields: SongOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: RatedSongForUserForApiContractPartialFindResultSchema },
        'text/json': { schema: RatedSongForUserForApiContractPartialFindResultSchema },
        'text/plain': { schema: RatedSongForUserForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiUsersIdRatedSongsSongIdRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/ratedSongs/{songId}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      songId: z
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
            in: 'path',
            name: 'songId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongVoteRatingSchema },
        'text/json': { schema: SongVoteRatingSchema },
        'text/plain': { schema: SongVoteRatingSchema },
      },
    },
  },
})

export const postApiUsersIdReportsRoute = createRoute({
  method: 'post',
  path: '/api/users/{id}/reports',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: CreateReportModelSchema },
        'application/json': { schema: CreateReportModelSchema },
        'application/json-patch+json': { schema: CreateReportModelSchema },
        'text/json': { schema: CreateReportModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
        'text/plain': { schema: z.boolean() },
      },
    },
  },
})

export const postApiUsersIdSettingsSettingNameRoute = createRoute({
  method: 'post',
  path: '/api/users/{id}/settings/{settingName}',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      settingName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'settingName', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: z.string() },
        'application/json': { schema: z.string() },
        'application/json-patch+json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
})

export const getApiUsersIdSongListsRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}/songLists',
  tags: ['UserApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      'tagId[]': z
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
            in: 'query',
            name: 'tagId[]',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      childTags: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'childTags',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      sort: SongListSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sort',
          schema: { $ref: '#/components/schemas/SongListSortRule' },
          required: false,
        },
      }).exactOptional(),
      fields: SongListOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/SongListOptionalFields' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SongListForApiContractPartialFindResultSchema },
        'text/json': { schema: SongListForApiContractPartialFindResultSchema },
        'text/plain': { schema: SongListForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const getApiVenuesRoute = createRoute({
  method: 'get',
  path: '/api/venues',
  tags: ['VenueApi'],
  request: {
    query: z.object({
      query: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      fields: VenueOptionalFieldsSchema.openapi({
        param: {
          in: 'query',
          name: 'fields',
          schema: { $ref: '#/components/schemas/VenueOptionalFields' },
          required: false,
        },
      }).exactOptional(),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      maxResults: z
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
            in: 'query',
            name: 'maxResults',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      getTotalCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'getTotalCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      nameMatchMode: NameMatchModeSchema.openapi({
        param: {
          in: 'query',
          name: 'nameMatchMode',
          schema: { $ref: '#/components/schemas/NameMatchMode' },
          required: false,
        },
      }).exactOptional(),
      lang: ContentLanguagePreferenceSchema.openapi({
        param: {
          in: 'query',
          name: 'lang',
          schema: { $ref: '#/components/schemas/ContentLanguagePreference' },
          required: false,
        },
      }).exactOptional(),
      sortRule: VenueSortRuleSchema.openapi({
        param: {
          in: 'query',
          name: 'sortRule',
          schema: { $ref: '#/components/schemas/VenueSortRule' },
          required: false,
        },
      }).exactOptional(),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'latitude',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'longitude',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      distanceUnit: DistanceUnitSchema.openapi({
        param: {
          in: 'query',
          name: 'distanceUnit',
          schema: { $ref: '#/components/schemas/DistanceUnit' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: VenueForApiContractPartialFindResultSchema },
        'text/json': { schema: VenueForApiContractPartialFindResultSchema },
        'text/plain': { schema: VenueForApiContractPartialFindResultSchema },
      },
    },
  },
})

export const deleteApiVenuesIdRoute = createRoute({
  method: 'delete',
  path: '/api/venues/{id}',
  tags: ['VenueApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      notes: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'notes',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
      hardDelete: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hardDelete',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postApiVenuesIdReportsRoute = createRoute({
  method: 'post',
  path: '/api/venues/{id}/reports',
  tags: ['VenueApi'],
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      reportType: VenueReportTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'reportType',
          schema: { $ref: '#/components/schemas/VenueReportType' },
          required: false,
        },
      }).exactOptional(),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'notes', schema: { type: 'string' }, required: false },
        }),
      versionNumber: z
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
            in: 'query',
            name: 'versionNumber',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})
