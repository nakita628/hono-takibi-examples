import { createRoute, z } from '@hono/zod-openapi'

type ALMediaTitleType = {
  englishTitle?: string | null
  romajiTitle?: string | null
  nativeTitle?: string | null
  preferredTitle?: string | null
}

type AgeRatingType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1

type BookChapterItemType = {
  title?: string | null
  part?: string | null
  page?: number
  children?: BookChapterItemType[] | null
}

type ScrobbleProviderType = 0 | 1 | 2 | 4 | 5 | 6

const ScrobbleProviderSchema: z.ZodType<ScrobbleProviderType> = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(5), z.literal(6)])
  .openapi({
    description:
      'Members:\n- `0` — Kavita\n- `1` — AniList\n- `2` — Mal\n- `4` — Cbr\n- `5` — Hardcover\n- `6` — MangaBaka',
    'x-enum-varnames': ['Kavita', 'AniList', 'Mal', 'Cbr', 'Hardcover', 'MangaBaka'],
    'x-enum-descriptions': ['Kavita', 'AniList', 'Mal', 'Cbr', 'Hardcover', 'MangaBaka'],
  })
  .openapi('ScrobbleProvider')

const RatingAuthoritySchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — User\n- `1` — Critic',
    'x-enum-varnames': ['User', 'Critic'],
    'x-enum-descriptions': ['User', 'Critic'],
  })
  .openapi('RatingAuthority')

const UserReviewDtoSchema = z
  .strictObject({
    tagline: z.string().nullable().exactOptional(),
    body: z.string().nullable().exactOptional(),
    bodyJustText: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    userId: z.int32().exactOptional(),
    totalVotes: z.int32().exactOptional(),
    rating: z.float32().exactOptional(),
    rawBody: z.string().nullable().exactOptional(),
    score: z.int32().exactOptional(),
    siteUrl: z.string().nullable().exactOptional(),
    isExternal: z.boolean().exactOptional(),
    provider: ScrobbleProviderSchema.exactOptional(),
    authority: RatingAuthoritySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserReviewDto')

type ExternalChapterDtoType = {
  title?: string | null
  issueNumber?: string | null
  criticRating?: number | null
  userRating?: number | null
  summary?: string | null
  writers?: string[] | null
  artists?: string[] | null
  releaseDate?: string | null
  publisher?: string | null
  coverImageUrl?: string | null
  issueUrl?: string | null
  hardcoverId?: number | null
  mangaBakaWorkId?: string | null
  criticReviews?: z.infer<typeof UserReviewDtoSchema>[] | null
  userReviews?: z.infer<typeof UserReviewDtoSchema>[] | null
}

const EditionEntryTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Chapter\n- `1` — Volume\n- `2` — Other',
    'x-enum-varnames': ['Chapter', 'Volume', 'Other'],
    'x-enum-descriptions': ['Chapter', 'Volume', 'Other'],
  })
  .openapi('EditionEntryType')

type ExternalEditionDtoType = {
  id: string | null
  title: string | null
  format: string | null
  language?: string | null
  publisher?: string | null
  type?: z.infer<typeof EditionEntryTypeSchema>
  mainCount?: number
  totalCount?: number
}

const ALMediaTitleSchema: z.ZodType<ALMediaTitleType> = z
  .strictObject({
    englishTitle: z.string().nullable().exactOptional(),
    romajiTitle: z.string().nullable().exactOptional(),
    nativeTitle: z.string().nullable().exactOptional(),
    preferredTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ALMediaTitle')

type LocalizedTitleDtoType = { title?: string | null; isPrimary?: boolean; isOfficial?: boolean }

const LocalizedTitleDtoSchema: z.ZodType<LocalizedTitleDtoType> = z
  .strictObject({
    title: z.string().nullable().exactOptional(),
    isPrimary: z.boolean().exactOptional(),
    isOfficial: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalizedTitleDto')

type PlusMediaFormatType = 1 | 2 | 3 | 4 | 5

const PlusMediaFormatSchema: z.ZodType<PlusMediaFormatType> = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `1` — Manga\n- `2` — Comic\n- `3` — LightNovel\n- `4` — Book\n- `5` — Unknown',
    'x-enum-varnames': ['Manga', 'Comic', 'LightNovel', 'Book', 'Unknown'],
    'x-enum-descriptions': ['Manga', 'Comic', 'LightNovel', 'Book', 'Unknown'],
  })
  .openapi('PlusMediaFormat')

type SeriesStaffDtoType = {
  name: string | null
  firstName?: string | null
  lastName?: string | null
  url: string | null
  role: string | null
  imageUrl?: string | null
  gender?: string | null
  description?: string | null
}

const SeriesStaffDtoSchema: z.ZodType<SeriesStaffDtoType> = z
  .strictObject({
    name: z.string().nullable(),
    firstName: z.string().nullable().exactOptional(),
    lastName: z.string().nullable().exactOptional(),
    url: z.string().nullable(),
    role: z.string().nullable(),
    imageUrl: z.string().nullable().exactOptional(),
    gender: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['name', 'role', 'url'] })
  .openapi('SeriesStaffDto')

const TagWeightSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `1` — Core\n- `2` — Defining\n- `3` — Recurrent\n- `4` — Incidental\n- `5` — Unweighted',
    'x-enum-varnames': ['Core', 'Defining', 'Recurrent', 'Incidental', 'Unweighted'],
    'x-enum-descriptions': ['Core', 'Defining', 'Recurrent', 'Incidental', 'Unweighted'],
  })
  .openapi('TagWeight')

type MetadataTagDtoType = {
  name?: string | null
  description?: string | null
  rank?: number | null
  isGeneralSpoiler?: boolean
  isMediaSpoiler?: boolean
  isAdult?: boolean
  tagWeight?: z.infer<typeof TagWeightSchema>
}

const MetadataTagDtoSchema: z.ZodType<MetadataTagDtoType> = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    rank: z.int32().nullable().exactOptional().openapi({ readOnly: true }),
    isGeneralSpoiler: z.boolean().exactOptional().openapi({ readOnly: true }),
    isMediaSpoiler: z.boolean().exactOptional().openapi({ readOnly: true }),
    isAdult: z.boolean().exactOptional().openapi({ readOnly: true }),
    tagWeight: TagWeightSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataTagDto')

const AgeRatingSchema: z.ZodType<AgeRatingType> = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(-1),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Unknown\n- `1` — Rating Pending (RatingPending)\n- `2` — Early Childhood (EarlyChildhood)\n- `3` — Everyone\n- `4` — G\n- `5` — Everyone 10+ (Everyone10Plus)\n- `6` — PG\n- `7` — Kids to Adults (KidsToAdults)\n- `8` — Teen\n- `9` — MA15+ (Mature15Plus)\n- `10` — Mature 17+ (Mature17Plus)\n- `11` — M (Mature)\n- `12` — R18+ (R18Plus)\n- `13` — Adults Only 18+ (AdultsOnly)\n- `14` — X18+ (X18Plus)\n- `-1` — Not Applicable (NotApplicable)',
    'x-enum-varnames': [
      'Unknown',
      'RatingPending',
      'EarlyChildhood',
      'Everyone',
      'G',
      'Everyone10Plus',
      'PG',
      'KidsToAdults',
      'Teen',
      'Mature15Plus',
      'Mature17Plus',
      'Mature',
      'R18Plus',
      'AdultsOnly',
      'X18Plus',
      'NotApplicable',
    ],
    'x-enum-descriptions': [
      'Unknown',
      'Rating Pending',
      'Early Childhood',
      'Everyone',
      'G',
      'Everyone 10+',
      'PG',
      'Kids to Adults',
      'Teen',
      'MA15+',
      'Mature 17+',
      'M',
      'R18+',
      'Adults Only 18+',
      'X18+',
      'Not Applicable',
    ],
  })
  .openapi('AgeRating')

const SeriesRelationshipSchema: z.ZodType<SeriesRelationshipType> = z
  .lazy(() =>
    z
      .strictObject({
        aniListId: z.int32().exactOptional(),
        malId: z.int32().nullable().exactOptional(),
        mangabakaId: z.int32().nullable().exactOptional(),
        seriesName: ALMediaTitleSchema.exactOptional(),
        relation: RelationKindSchema.exactOptional(),
        provider: ScrobbleProviderSchema.exactOptional(),
        format: PlusMediaFormatSchema.exactOptional(),
        series: ExternalSeriesDetailDtoSchema.exactOptional(),
        metadataProvider: MetadataProviderSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('SeriesRelationship')

const CharacterRoleSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Main\n- `1` — Supporting\n- `2` — Background',
    'x-enum-varnames': ['Main', 'Supporting', 'Background'],
    'x-enum-descriptions': ['Main', 'Supporting', 'Background'],
  })
  .openapi('CharacterRole')

type SeriesCharacterType = {
  name?: string | null
  description: string | null
  url: string | null
  imageUrl?: string | null
  role?: z.infer<typeof CharacterRoleSchema>
}

const SeriesCharacterSchema: z.ZodType<SeriesCharacterType> = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    description: z.string().nullable(),
    url: z.string().nullable(),
    imageUrl: z.string().nullable().exactOptional(),
    role: CharacterRoleSchema.exactOptional(),
  })
  .openapi({ required: ['description', 'url'] })
  .openapi('SeriesCharacter')

type RatingDtoType = {
  averageScore?: number
  favoriteCount?: number
  provider?: z.infer<typeof ScrobbleProviderSchema>
  authority?: z.infer<typeof RatingAuthoritySchema>
  providerUrl?: string | null
}

const RatingDtoSchema: z.ZodType<RatingDtoType> = z
  .strictObject({
    averageScore: z.int32().exactOptional(),
    favoriteCount: z.int32().exactOptional().openapi({ deprecated: true }),
    provider: ScrobbleProviderSchema.exactOptional(),
    authority: RatingAuthoritySchema.exactOptional(),
    providerUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RatingDto')

const ExternalChapterDtoSchema: z.ZodType<ExternalChapterDtoType> = z
  .strictObject({
    title: z.string().nullable().exactOptional(),
    issueNumber: z.string().nullable().exactOptional(),
    criticRating: z.float64().nullable().exactOptional(),
    userRating: z.float64().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    writers: z.array(z.string()).nullable().exactOptional(),
    artists: z.array(z.string()).nullable().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    publisher: z.string().nullable().exactOptional(),
    coverImageUrl: z.string().nullable().exactOptional(),
    issueUrl: z.string().nullable().exactOptional(),
    hardcoverId: z.int32().nullable().exactOptional(),
    mangaBakaWorkId: z.string().nullable().exactOptional(),
    criticReviews: z.array(UserReviewDtoSchema).nullable().exactOptional(),
    userReviews: z.array(UserReviewDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalChapterDto')

const ExternalEditionDtoSchema: z.ZodType<ExternalEditionDtoType> = z
  .strictObject({
    id: z.string().nullable(),
    title: z.string().nullable(),
    format: z.string().nullable(),
    language: z.string().nullable().exactOptional(),
    publisher: z.string().nullable().exactOptional(),
    type: EditionEntryTypeSchema.exactOptional(),
    mainCount: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: ['format', 'id', 'title'] })
  .openapi('ExternalEditionDto')

type ExternalSeriesDetailDtoType = {
  name?: string | null
  titles?: z.infer<typeof ALMediaTitleSchema>
  localizedTitles?: { [key: string]: z.infer<typeof LocalizedTitleDtoSchema>[] } | null
  aniListId?: number | null
  malId?: bigint | null
  cbrId?: number | null
  hardcoverId?: number | null
  isStandAlone?: boolean
  mangabakaId?: number | null
  synonyms?: string[] | null
  plusMediaFormat?: z.infer<typeof PlusMediaFormatSchema>
  siteUrl?: string | null
  coverUrl?: string | null
  genres?: string[] | null
  staff?: z.infer<typeof SeriesStaffDtoSchema>[] | null
  tags?: z.infer<typeof MetadataTagDtoSchema>[] | null
  summary?: string | null
  ageRating?: z.infer<typeof AgeRatingSchema>
  ageRatingRaw?: string | null
  provider?: z.infer<typeof ScrobbleProviderSchema>
  startDate?: string | null
  endDate?: string | null
  averageScore?: number
  chapters?: number
  volumes?: number
  relations?: z.infer<typeof SeriesRelationshipSchema>[] | null
  characters?: z.infer<typeof SeriesCharacterSchema>[] | null
  ratings?: z.infer<typeof RatingDtoSchema>[] | null
  publisher?: string | null
  chapterDtos?: z.infer<typeof ExternalChapterDtoSchema>[] | null
  editions?: z.infer<typeof ExternalEditionDtoSchema>[] | null
}

type MetadataProviderType = 2 | 3 | 4

type RelationKindType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 16

const RelationKindSchema: z.ZodType<RelationKindType> = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(16),
  ])
  .openapi({
    description:
      'Members:\n- `1` — Prequel\n- `2` — Sequel\n- `3` — Spin Off (SpinOff)\n- `4` — Adaptation\n- `5` — Side Story (SideStory)\n- `6` — Character\n- `7` — Contains\n- `8` — Other\n- `9` — Alternative Setting (AlternativeSetting)\n- `10` — Alternative Version (AlternativeVersion)\n- `11` — Doujinshi\n- `12` — Parent\n- `13` — Edition\n- `14` — Annual\n- `16` — Cameo',
    'x-enum-varnames': [
      'Prequel',
      'Sequel',
      'SpinOff',
      'Adaptation',
      'SideStory',
      'Character',
      'Contains',
      'Other',
      'AlternativeSetting',
      'AlternativeVersion',
      'Doujinshi',
      'Parent',
      'Edition',
      'Annual',
      'Cameo',
    ],
    'x-enum-descriptions': [
      'Prequel',
      'Sequel',
      'Spin Off',
      'Adaptation',
      'Side Story',
      'Character',
      'Contains',
      'Other',
      'Alternative Setting',
      'Alternative Version',
      'Doujinshi',
      'Parent',
      'Edition',
      'Annual',
      'Cameo',
    ],
  })
  .openapi('RelationKind')

const ExternalSeriesDetailDtoSchema: z.ZodType<ExternalSeriesDetailDtoType> = z
  .lazy(() =>
    z
      .strictObject({
        name: z.string().nullable().exactOptional(),
        titles: ALMediaTitleSchema.exactOptional(),
        localizedTitles: z
          .record(z.string(), z.array(LocalizedTitleDtoSchema))
          .nullable()
          .exactOptional(),
        aniListId: z.int32().nullable().exactOptional(),
        malId: z
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
        cbrId: z.int32().nullable().exactOptional(),
        hardcoverId: z.int32().nullable().exactOptional(),
        isStandAlone: z.boolean().exactOptional(),
        mangabakaId: z.int32().nullable().exactOptional(),
        synonyms: z.array(z.string()).nullable().exactOptional(),
        plusMediaFormat: PlusMediaFormatSchema.exactOptional(),
        siteUrl: z.string().nullable().exactOptional(),
        coverUrl: z.string().nullable().exactOptional(),
        genres: z.array(z.string()).nullable().exactOptional(),
        staff: z.array(SeriesStaffDtoSchema).nullable().exactOptional(),
        tags: z.array(MetadataTagDtoSchema).nullable().exactOptional(),
        summary: z.string().nullable().exactOptional(),
        ageRating: AgeRatingSchema.exactOptional(),
        ageRatingRaw: z.string().nullable().exactOptional(),
        provider: ScrobbleProviderSchema.exactOptional(),
        startDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        endDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        averageScore: z.int32().exactOptional(),
        chapters: z.int32().exactOptional(),
        volumes: z.int32().exactOptional(),
        relations: z.array(SeriesRelationshipSchema).nullable().exactOptional(),
        characters: z.array(SeriesCharacterSchema).nullable().exactOptional(),
        ratings: z.array(RatingDtoSchema).nullable().exactOptional(),
        publisher: z.string().nullable().exactOptional(),
        chapterDtos: z.array(ExternalChapterDtoSchema).nullable().exactOptional(),
        editions: z.array(ExternalEditionDtoSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ExternalSeriesDetailDto')

const MetadataProviderSchema: z.ZodType<MetadataProviderType> = z
  .union([z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description: 'Members:\n- `2` — Hardcover\n- `3` — Mangabaka\n- `4` — ComicBookRoundup',
    'x-enum-varnames': ['Hardcover', 'Mangabaka', 'ComicBookRoundup'],
    'x-enum-descriptions': ['Hardcover', 'Mangabaka', 'ComicBookRoundup'],
  })
  .openapi('MetadataProvider')

type SeriesRelationshipType = {
  aniListId?: number
  malId?: number | null
  mangabakaId?: number | null
  seriesName?: z.infer<typeof ALMediaTitleSchema>
  relation?: z.infer<typeof RelationKindSchema>
  provider?: z.infer<typeof ScrobbleProviderSchema>
  format?: z.infer<typeof PlusMediaFormatSchema>
  series?: z.infer<typeof ExternalSeriesDetailDtoSchema>
  metadataProvider?: z.infer<typeof MetadataProviderSchema>
}

const MessageEventPrioritySchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Silent\n- `1` — Activity\n- `2` — Info\n- `3` — Action\n- `4` — Error',
    'x-enum-varnames': ['Silent', 'Activity', 'Info', 'Action', 'Error'],
    'x-enum-descriptions': ['Silent', 'Activity', 'Info', 'Action', 'Error'],
  })
  .openapi('MessageEventPriority')

const SignalRMessageDtoSchema = z
  .strictObject({
    body: z.any().exactOptional(),
    name: z.string().nullable(),
    title: z.string().nullable().exactOptional(),
    subTitle: z.string().nullable().exactOptional(),
    eventType: z.string().nullable().exactOptional(),
    progress: z.string().nullable().exactOptional(),
    eventTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    priority: MessageEventPrioritySchema.exactOptional(),
    code: z.string().nullable().exactOptional(),
    correlationId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('SignalRMessageDto')

const ScheduledScanDtoSchema = z
  .strictObject({
    jobId: z.string().nullable(),
    libraryId: z.int32().nullable().exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    runAtUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['jobId'] })
  .openapi('ScheduledScanDto')

const ScheduledFolderScanDtoSchema = z
  .strictObject({
    libraryId: z.int32().nullable().exactOptional(),
    fromFolderWatcher: z.boolean().exactOptional(),
    runAtUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    folders: z.array(z.string()).nullable(),
    folderCount: z.int32().exactOptional(),
  })
  .openapi({ required: ['folders'] })
  .openapi('ScheduledFolderScanDto')

const UpcomingTaskDtoSchema = z
  .strictObject({
    taskId: z.string().nullable(),
    cron: z.string().nullable(),
    nextRunUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['cron', 'taskId'] })
  .openapi('UpcomingTaskDto')

const MediaErrorReasonSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Unknown\n- `1` — Parse Failed (ParseFailed)\n- `2` — No Series Name (NoSeriesName)\n- `3` — Unreadable Archive (UnreadableArchive)\n- `5` — Corrupt Epub (CorruptEpub)\n- `6` — No Pages (NoPages)\n- `7` — Cover Failed (CoverFailed)\n- `8` — Word Count Failed (WordCountFailed)\n- `9` — I/O Error (IoError)\n- `10` — Metadata Unreadable (MetadataUnreadable)\n- `11` — Epub Not Strict (EpubNotStrict)\n- `12` — Ambiguous Series (AmbiguousSeries)',
    'x-enum-varnames': [
      'Unknown',
      'ParseFailed',
      'NoSeriesName',
      'UnreadableArchive',
      'CorruptEpub',
      'NoPages',
      'CoverFailed',
      'WordCountFailed',
      'IoError',
      'MetadataUnreadable',
      'EpubNotStrict',
      'AmbiguousSeries',
    ],
    'x-enum-descriptions': [
      'Unknown',
      'Parse Failed',
      'No Series Name',
      'Unreadable Archive',
      'Corrupt Epub',
      'No Pages',
      'Cover Failed',
      'Word Count Failed',
      'I/O Error',
      'Metadata Unreadable',
      'Epub Not Strict',
      'Ambiguous Series',
    ],
  })
  .openapi('MediaErrorReason')

const ScanIssueSummaryItemDtoSchema = z
  .strictObject({
    filePath: z.string().nullable().exactOptional(),
    reason: MediaErrorReasonSchema.exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScanIssueSummaryItemDto')

const LibraryScanEndedEventBodyDtoSchema = z
  .strictObject({
    libraryId: z.int32().exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    seriesAdded: z.int32().exactOptional(),
    seriesRemoved: z.int32().exactOptional(),
    seriesFailed: z.int32().exactOptional(),
    chaptersAdded: z.int32().exactOptional(),
    chaptersUpdated: z.int32().exactOptional(),
    chaptersRemoved: z.int32().exactOptional(),
    problemFiles: z.int32().exactOptional(),
    newProblemFiles: z.int32().exactOptional(),
    recentProblemFiles: z.array(ScanIssueSummaryItemDtoSchema).nullable().exactOptional(),
    endsJob: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LibraryScanEndedEventBodyDto')

const RecentJobDtoSchema = z
  .strictObject({
    correlationId: z.string().nullable(),
    startedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    endedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    steps: z.array(SignalRMessageDtoSchema).nullable().exactOptional(),
    completed: z.boolean().exactOptional(),
    scanSummaries: z.array(LibraryScanEndedEventBodyDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: ['correlationId'] })
  .openapi('RecentJobDto')

const ActivitySnapshotDtoSchema = z
  .strictObject({
    bootId: z.uuid().exactOptional(),
    startedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    running: z.array(SignalRMessageDtoSchema).nullable().exactOptional(),
    scheduled: z.array(ScheduledScanDtoSchema).nullable().exactOptional(),
    scheduledTotal: z.int32().exactOptional(),
    scheduledFolderScans: z.array(ScheduledFolderScanDtoSchema).nullable().exactOptional(),
    upcoming: z.array(UpcomingTaskDtoSchema).nullable().exactOptional(),
    recentJobs: z.array(RecentJobDtoSchema).nullable().exactOptional(),
    recentEntries: z.array(SignalRMessageDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivitySnapshotDto')

const AgeRatingDtoSchema = z
  .strictObject({ value: AgeRatingSchema.exactOptional(), title: z.string().nullable() })
  .openapi({ required: ['title'] })
  .openapi('AgeRatingDto')

const AgeRestrictionDtoSchema = z
  .strictObject({ ageRating: AgeRatingSchema, includeUnknowns: z.boolean() })
  .openapi({ required: ['ageRating', 'includeUnknowns'] })
  .openapi('AgeRestrictionDto')

const AnnotationDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    xPath: z.string().nullable(),
    endingXPath: z.string().nullable().exactOptional(),
    selectedText: z.string().nullable().exactOptional(),
    comment: z.string().nullable().exactOptional(),
    commentHtml: z.string().nullable().exactOptional(),
    commentPlainText: z.string().nullable().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    context: z.string().nullable().exactOptional(),
    highlightCount: z.int32().exactOptional(),
    containsSpoiler: z.boolean().exactOptional(),
    pageNumber: z.int32().exactOptional(),
    selectedSlotIndex: z.int32().exactOptional(),
    likes: z.array(z.int32()).nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    chapterId: z.int32(),
    volumeId: z.int32(),
    seriesId: z.int32(),
    libraryId: z.int32(),
    ownerUserId: z.int32(),
    ownerUsername: z.string().nullable().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['chapterId', 'libraryId', 'ownerUserId', 'seriesId', 'volumeId', 'xPath'] })
  .openapi('AnnotationDto')

const FilterComparisonSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Equal\n- `1` — GreaterThan\n- `2` — GreaterThanEqual\n- `3` — LessThan\n- `4` — LessThanEqual\n- `5` — Contains\n- `6` — MustContains\n- `7` — Matches\n- `8` — NotContains\n- `9` — NotEqual\n- `10` — BeginsWith\n- `11` — EndsWith\n- `12` — IsBefore\n- `13` — IsAfter\n- `14` — IsInLast\n- `15` — IsNotInLast\n- `16` — IsEmpty\n- `17` — IsNotEmpty',
    'x-enum-varnames': [
      'Equal',
      'GreaterThan',
      'GreaterThanEqual',
      'LessThan',
      'LessThanEqual',
      'Contains',
      'MustContains',
      'Matches',
      'NotContains',
      'NotEqual',
      'BeginsWith',
      'EndsWith',
      'IsBefore',
      'IsAfter',
      'IsInLast',
      'IsNotInLast',
      'IsEmpty',
      'IsNotEmpty',
    ],
    'x-enum-descriptions': [
      'Equal',
      'GreaterThan',
      'GreaterThanEqual',
      'LessThan',
      'LessThanEqual',
      'Contains',
      'MustContains',
      'Matches',
      'NotContains',
      'NotEqual',
      'BeginsWith',
      'EndsWith',
      'IsBefore',
      'IsAfter',
      'IsInLast',
      'IsNotInLast',
      'IsEmpty',
      'IsNotEmpty',
    ],
  })
  .openapi('FilterComparison')

const AnnotationFilterFieldSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
  ])
  .openapi({
    description:
      'Members:\n- `1` — Owner\n- `2` — Library\n- `3` — Spoiler\n- `4` — HighlightSlot\n- `5` — Selection\n- `6` — Comment\n- `7` — Series\n- `8` — Likes\n- `9` — LikedBy',
    'x-enum-varnames': [
      'Owner',
      'Library',
      'Spoiler',
      'HighlightSlot',
      'Selection',
      'Comment',
      'Series',
      'Likes',
      'LikedBy',
    ],
    'x-enum-descriptions': [
      'Owner',
      'Library',
      'Spoiler',
      'HighlightSlot',
      'Selection',
      'Comment',
      'Series',
      'Likes',
      'LikedBy',
    ],
  })
  .openapi('AnnotationFilterField')

const AnnotationFilterStatementDtoSchema = z
  .strictObject({
    comparison: FilterComparisonSchema.exactOptional(),
    field: AnnotationFilterFieldSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationFilterStatementDto')

const FilterCombinationSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Or\n- `1` — And',
    'x-enum-varnames': ['Or', 'And'],
    'x-enum-descriptions': ['Or', 'And'],
  })
  .openapi('FilterCombination')

const AnnotationSortFieldSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description: 'Members:\n- `1` — Owner\n- `2` — Created\n- `3` — LastModified\n- `4` — Color',
    'x-enum-varnames': ['Owner', 'Created', 'LastModified', 'Color'],
    'x-enum-descriptions': ['Owner', 'Created', 'LastModified', 'Color'],
  })
  .openapi('AnnotationSortField')

const AnnotationSortOptionDtoSchema = z
  .strictObject({
    sortField: AnnotationSortFieldSchema.exactOptional(),
    isAscending: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationSortOptionDto')

const FilterEntityTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description:
      'Members:\n- `0` — Series\n- `1` — Reading List (ReadingList)\n- `2` — Person\n- `3` — Annotation',
    'x-enum-varnames': ['Series', 'ReadingList', 'Person', 'Annotation'],
    'x-enum-descriptions': ['Series', 'Reading List', 'Person', 'Annotation'],
  })
  .openapi('FilterEntityType')

const AnnotationFilterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    statements: z.array(AnnotationFilterStatementDtoSchema).nullable().exactOptional(),
    combination: FilterCombinationSchema.exactOptional(),
    sortOptions: AnnotationSortOptionDtoSchema.exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
    limitTo: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationFilterDto')

const KavitaPlusApiNameSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ])
  .openapi({
    description:
      'Members:\n- `1` — CoverRequests\n- `2` — MetadataSync\n- `3` — SeriesMatched\n- `4` — Scrobbles\n- `5` — MalStackImport\n- `6` — WantToRead\n- `7` — Recommendations\n- `8` — Reviews',
    'x-enum-varnames': [
      'CoverRequests',
      'MetadataSync',
      'SeriesMatched',
      'Scrobbles',
      'MalStackImport',
      'WantToRead',
      'Recommendations',
      'Reviews',
    ],
    'x-enum-descriptions': [
      'CoverRequests',
      'MetadataSync',
      'SeriesMatched',
      'Scrobbles',
      'MalStackImport',
      'WantToRead',
      'Recommendations',
      'Reviews',
    ],
  })
  .openapi('KavitaPlusApiName')

const DailyBucketDtoSchema = z
  .strictObject({
    date: z.iso.date().exactOptional(),
    count: z
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
  .openapi('DailyBucketDto')

const ApiUsageDtoSchema = z
  .strictObject({
    apiName: KavitaPlusApiNameSchema.exactOptional(),
    lifetimeCount: z
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
    last30DaysCount: z
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
    dailyBuckets: z.array(DailyBucketDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiUsageDto')

const AppUserCollectionDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    promoted: z.boolean().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    itemCount: z.int32().exactOptional(),
    owner: z.string().nullable().exactOptional(),
    lastSyncUtc: z.iso.datetime({ offset: true }).exactOptional(),
    source: ScrobbleProviderSchema.exactOptional(),
    sourceUrl: z.string().nullable().exactOptional(),
    totalSourceCount: z.int32().exactOptional(),
    missingSeriesFromSource: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppUserCollectionDto')

const AppUserOpdsPreferencesSchema = z
  .strictObject({
    embedProgressIndicator: z.boolean().exactOptional(),
    includeContinueFrom: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppUserOpdsPreferences')

const AppUserSocialPreferencesSchema = z
  .strictObject({
    shareReviews: z.boolean().exactOptional(),
    shareAnnotations: z.boolean().exactOptional(),
    viewOtherAnnotations: z.boolean().exactOptional(),
    socialLibraries: z.array(z.int32()).nullable().exactOptional(),
    socialMaxAgeRating: AgeRatingSchema.exactOptional(),
    socialIncludeUnknowns: z.boolean().exactOptional(),
    shareProfile: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppUserSocialPreferences')

const AuditLogMatchExternalIdsParamsDtoSchema = z
  .strictObject({
    aniListId: z.int32().exactOptional(),
    malId: z
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
    mangaBakaId: z
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
    mangaBakaEditionId: z.string().nullable().exactOptional(),
    cbrId: z.int32().exactOptional(),
    hardcoverId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuditLogMatchExternalIdsParamsDto')

const AuditStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Success\n- `1` — Failure\n- `2` — Info',
    'x-enum-varnames': ['Success', 'Failure', 'Info'],
    'x-enum-descriptions': ['Success', 'Failure', 'Info'],
  })
  .openapi('AuditStatus')

const AuditSubjectTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `0` — Series\n- `1` — Person\n- `2` — Collection\n- `3` — Chapter\n- `4` — Global\n- `5` — Volume',
    'x-enum-varnames': ['Series', 'Person', 'Collection', 'Chapter', 'Global', 'Volume'],
    'x-enum-descriptions': ['Series', 'Person', 'Collection', 'Chapter', 'Global', 'Volume'],
  })
  .openapi('AuditSubjectType')

const AuthKeyProviderSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — User\n- `1` — System',
    'x-enum-varnames': ['User', 'System'],
    'x-enum-descriptions': ['User', 'System'],
  })
  .openapi('AuthKeyProvider')

const AuthKeyDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    key: z.string().nullable(),
    name: z.string().nullable(),
    createdAtUtc: z.iso.datetime({ offset: true }).exactOptional(),
    expiresAtUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastAccessedAtUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    provider: AuthKeyProviderSchema.exactOptional(),
  })
  .openapi({ required: ['key', 'name'] })
  .openapi('AuthKeyDto')

const AuthKeyExpiresAtDtoSchema = z
  .strictObject({ expiresAt: z.iso.datetime({ offset: true }).nullable() })
  .openapi({ required: ['expiresAt'] })
  .openapi('AuthKeyExpiresAtDto')

const AuthenticationTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `0` — Unknown\n- `1` — JWT\n- `2` — AuthKey\n- `3` — OIDC',
    'x-enum-varnames': ['Unknown', 'JWT', 'AuthKey', 'OIDC'],
    'x-enum-descriptions': ['Unknown', 'JWT', 'AuthKey', 'OIDC'],
  })
  .openapi('AuthenticationType')

const AuthorChapterDtoSchema = z
  .strictObject({
    libraryId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorChapterDto')

const AuthorityValidationDtoSchema = z
  .strictObject({ authority: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthorityValidationDto')

const AuthorityValidationResultSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Success\n- `1` — InvalidAuthority\n- `2` — Failure\n- `3` — NotApplicable\n- `4` — MissingHttps',
    'x-enum-varnames': ['Success', 'InvalidAuthority', 'Failure', 'NotApplicable', 'MissingHttps'],
    'x-enum-descriptions': [
      'Success',
      'InvalidAuthority',
      'Failure',
      'NotApplicable',
      'MissingHttps',
    ],
  })
  .openapi('AuthorityValidationResult')

const BookChapterItemSchema: z.ZodType<BookChapterItemType> = z
  .lazy(() =>
    z
      .strictObject({
        title: z.string().nullable().exactOptional(),
        part: z.string().nullable().exactOptional(),
        page: z.int32().exactOptional(),
        children: z.array(BookChapterItemSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('BookChapterItem')

const MangaFormatSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Image\n- `1` — Archive\n- `2` — Unknown\n- `3` — EPUB (Epub)\n- `4` — PDF (Pdf)',
    'x-enum-varnames': ['Image', 'Archive', 'Unknown', 'Epub', 'Pdf'],
    'x-enum-descriptions': ['Image', 'Archive', 'Unknown', 'EPUB', 'PDF'],
  })
  .openapi('MangaFormat')

const BookInfoDtoSchema = z
  .strictObject({
    bookTitle: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    seriesFormat: MangaFormatSchema.exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    chapterNumber: z.string().nullable().exactOptional(),
    volumeNumber: z.string().nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    pages: z.int32().exactOptional(),
    isSpecial: z.boolean().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookInfoDto')

const BookPageLayoutModeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description:
      'Members:\n- `0` — Default\n- `1` — 1 Column (Column1)\n- `2` — 2 Column (Column2)',
    'x-enum-varnames': ['Default', 'Column1', 'Column2'],
    'x-enum-descriptions': ['Default', '1 Column', '2 Column'],
  })
  .openapi('BookPageLayoutMode')

const SeriesDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    originalName: z.string().nullable().exactOptional(),
    localizedName: z.string().nullable().exactOptional(),
    sortName: z.string().nullable().exactOptional(),
    pages: z.int32().exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    lastChapterAdded: z.iso.datetime({ offset: true }).exactOptional(),
    lastChapterAddedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    userRating: z.float32().exactOptional(),
    hasUserRated: z.boolean().exactOptional(),
    totalReads: z.int32().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    latestReadDate: z.iso.datetime({ offset: true }).exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    sortNameLocked: z.boolean().exactOptional(),
    localizedNameLocked: z.boolean().exactOptional(),
    nameLocked: z.boolean().exactOptional(),
    wordCount: z
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
    libraryId: z.int32().exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    minHoursToRead: z.int32().exactOptional(),
    maxHoursToRead: z.int32().exactOptional(),
    avgHoursToRead: z.float32().exactOptional(),
    folderPath: z.string().nullable().exactOptional(),
    lowestFolderPath: z.string().nullable().exactOptional(),
    lastFolderScanned: z.iso.datetime({ offset: true }).exactOptional(),
    dontMatch: z.boolean().exactOptional(),
    isBlacklisted: z.boolean().exactOptional(),
    isStandAlone: z.boolean().exactOptional(),
    metadataProviderOverride: MetadataProviderSchema.exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().exactOptional(),
    mangaBakaEditionId: z.string().nullable().exactOptional(),
    cbrId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesDto')

const BookmarkDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    page: z.int32(),
    volumeId: z.int32(),
    seriesId: z.int32(),
    chapterId: z.int32(),
    imageOffset: z.int32().exactOptional(),
    xPath: z.string().nullable().exactOptional(),
    series: SeriesDtoSchema.exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['chapterId', 'page', 'seriesId', 'volumeId'] })
  .openapi('BookmarkDto')

const LibraryTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `0` — Manga\n- `1` — Comic (Flexible) (Comic)\n- `2` — Book\n- `3` — Image\n- `4` — Light Novel (LightNovel)\n- `5` — Comic (ComicVine)',
    'x-enum-varnames': ['Manga', 'Comic', 'Book', 'Image', 'LightNovel', 'ComicVine'],
    'x-enum-descriptions': ['Manga', 'Comic (Flexible)', 'Book', 'Image', 'Light Novel', 'Comic'],
  })
  .openapi('LibraryType')

const FileDimensionDtoSchema = z
  .strictObject({
    width: z.int32().exactOptional(),
    height: z.int32().exactOptional(),
    pageNumber: z.int32().exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    isWide: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileDimensionDto')

const BookmarkInfoDtoSchema = z
  .strictObject({
    seriesName: z.string().nullable().exactOptional(),
    seriesFormat: MangaFormatSchema.exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    pages: z.int32().exactOptional(),
    pageDimensions: z.array(FileDimensionDtoSchema).nullable().exactOptional(),
    doublePairs: z.record(z.string(), z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookmarkInfoDto')

const BookmarkSearchResultDtoSchema = z
  .strictObject({
    libraryId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    localizedSeriesName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookmarkSearchResultDto')

const BreakPointSchema = z
  .union([z.literal(0), z.literal(768), z.literal(1280), z.literal(1440)])
  .openapi({
    description: 'Members:\n- `0` — Never\n- `768` — Mobile\n- `1280` — Tablet\n- `1440` — Desktop',
    'x-enum-varnames': ['Never', 'Mobile', 'Tablet', 'Desktop'],
    'x-enum-descriptions': ['Never', 'Mobile', 'Tablet', 'Desktop'],
  })
  .openapi('BreakPoint')

const BrowseGenreDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable(),
    seriesCount: z.int32().exactOptional(),
    chapterCount: z.int32().exactOptional(),
  })
  .openapi({ required: ['title'] })
  .openapi('BrowseGenreDto')

const PersonRoleSchema = z
  .union([
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
  ])
  .openapi({
    description:
      'Members:\n- `3` — Writer\n- `4` — Penciller\n- `5` — Inker\n- `6` — Colorist\n- `7` — Letterer\n- `8` — CoverArtist\n- `9` — Editor\n- `10` — Publisher\n- `11` — Character\n- `12` — Translator\n- `13` — Imprint\n- `14` — Team\n- `15` — Location',
    'x-enum-varnames': [
      'Writer',
      'Penciller',
      'Inker',
      'Colorist',
      'Letterer',
      'CoverArtist',
      'Editor',
      'Publisher',
      'Character',
      'Translator',
      'Imprint',
      'Team',
      'Location',
    ],
    'x-enum-descriptions': [
      'Writer',
      'Penciller',
      'Inker',
      'Colorist',
      'Letterer',
      'CoverArtist',
      'Editor',
      'Publisher',
      'Character',
      'Translator',
      'Imprint',
      'Team',
      'Location',
    ],
  })
  .openapi('PersonRole')

const BrowsePersonDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable(),
    coverImageLocked: z.boolean().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    aliases: z.array(z.string()).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    asin: z.string().nullable().exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.string().nullable().exactOptional(),
    webLinks: z.array(z.string()).nullable().exactOptional(),
    roles: z.array(PersonRoleSchema).nullable().exactOptional(),
    seriesCount: z.int32().exactOptional(),
    chapterCount: z.int32().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('BrowsePersonDto')

const BrowseTagDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable(),
    seriesCount: z.int32().exactOptional(),
    chapterCount: z.int32().exactOptional(),
  })
  .openapi({ required: ['title'] })
  .openapi('BrowseTagDto')

const BulkActionDtoSchema = z
  .strictObject({
    ids: z.array(z.int32()).nullable().exactOptional(),
    force: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BulkActionDto')

const BulkChapterSizeRequestSchema = z
  .strictObject({ chapterIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BulkChapterSizeRequest')

const BulkReadingListSizeRequestSchema = z
  .strictObject({ readingListIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BulkReadingListSizeRequest')

const BulkRemoveBookmarkForSeriesDtoSchema = z
  .strictObject({ seriesIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BulkRemoveBookmarkForSeriesDto')

const BulkSeriesSizeRequestSchema = z
  .strictObject({ seriesIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BulkSeriesSizeRequest')

const BulkSetSeriesProfilesSchema = z
  .strictObject({
    profileIds: z.array(z.int32()).nullable().exactOptional(),
    seriesIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BulkSetSeriesProfiles')

const BulkUpdateSideNavStreamVisibilityDtoSchema = z
  .strictObject({ ids: z.array(z.int32()).nullable(), visibility: z.boolean() })
  .openapi({ required: ['ids', 'visibility'] })
  .openapi('BulkUpdateSideNavStreamVisibilityDto')

const BulkVolumeSizeRequestSchema = z
  .strictObject({ volumeIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('BulkVolumeSizeRequest')

const CancelKavitaPlusLicenseDtoSchema = z
  .strictObject({ email: z.string().nullable(), comment: z.string().nullable().exactOptional() })
  .openapi({ required: ['email'] })
  .openapi('CancelKavitaPlusLicenseDto')

const CblImportReasonSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Chapter missing (ChapterMissing)\n- `1` — Volume missing (VolumeMissing)\n- `2` — Series missing (SeriesMissing)\n- `3` — Name Conflict (NameConflict)\n- `4` — All Series Missing (AllSeriesMissing)\n- `5` — Empty File (EmptyFile)\n- `6` — Series Collision (SeriesCollision)\n- `7` — All Chapters Missing (AllChapterMissing)\n- `8` — Success\n- `9` — Invalid File (InvalidFile)',
    'x-enum-varnames': [
      'ChapterMissing',
      'VolumeMissing',
      'SeriesMissing',
      'NameConflict',
      'AllSeriesMissing',
      'EmptyFile',
      'SeriesCollision',
      'AllChapterMissing',
      'Success',
      'InvalidFile',
    ],
    'x-enum-descriptions': [
      'Chapter missing',
      'Volume missing',
      'Series missing',
      'Name Conflict',
      'All Series Missing',
      'Empty File',
      'Series Collision',
      'All Chapters Missing',
      'Success',
      'Invalid File',
    ],
  })
  .openapi('CblImportReason')

const CblMatchTierSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(-1),
  ])
  .openapi({
    description:
      'Members:\n- `0` — RemapRule\n- `1` — ExternalId\n- `2` — ExactName\n- `3` — ComicVineNaming\n- `4` — ArticleStripped\n- `5` — ReprintStripped\n- `6` — AlternateSeries\n- `7` — UserDecision\n- `-1` — Unmatched',
    'x-enum-varnames': [
      'RemapRule',
      'ExternalId',
      'ExactName',
      'ComicVineNaming',
      'ArticleStripped',
      'ReprintStripped',
      'AlternateSeries',
      'UserDecision',
      'Unmatched',
    ],
    'x-enum-descriptions': [
      'RemapRule',
      'ExternalId',
      'ExactName',
      'ComicVineNaming',
      'ArticleStripped',
      'ReprintStripped',
      'AlternateSeries',
      'UserDecision',
      'Unmatched',
    ],
  })
  .openapi('CblMatchTier')

const CblSeriesCandidateSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblSeriesCandidate')

const CblBookResultSchema = z
  .strictObject({
    order: z.int32().exactOptional(),
    series: z.string().nullable().exactOptional(),
    volume: z.string().nullable().exactOptional(),
    number: z.string().nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    readingListName: z.string().nullable().exactOptional(),
    reason: CblImportReasonSchema.exactOptional(),
    matchTier: CblMatchTierSchema.exactOptional(),
    chapterId: z.int32().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    matchedSeriesName: z.string().nullable().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    chapterNumber: z.string().nullable().exactOptional(),
    candidates: z.array(CblSeriesCandidateSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblBookResult')

const CblItemDecisionSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    chapterId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblItemDecision')

const CblImportDecisionsSchema = z
  .strictObject({
    itemResolutions: z.record(z.string(), CblItemDecisionSchema).nullable().exactOptional(),
    saveAsRemapRules: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblImportDecisions')

const ReadingListProviderSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — File (None)\n- `1` — File\n- `2` — Url',
    'x-enum-varnames': ['None', 'File', 'Url'],
    'x-enum-descriptions': ['File', 'File', 'Url'],
  })
  .openapi('ReadingListProvider')

const CblFinalizeRequestDtoSchema = z
  .strictObject({
    fileName: z.string().nullable().exactOptional(),
    decisions: CblImportDecisionsSchema.exactOptional(),
    provider: ReadingListProviderSchema.exactOptional(),
    repoPath: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
    sha: z.string().nullable().exactOptional(),
    promote: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblFinalizeRequestDto')

const CblImportResultSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Fail\n- `1` — Partial\n- `2` — Success',
    'x-enum-varnames': ['Fail', 'Partial', 'Success'],
    'x-enum-descriptions': ['Fail', 'Partial', 'Success'],
  })
  .openapi('CblImportResult')

const CblImportSummaryDtoSchema = z
  .strictObject({
    cblName: z.string().nullable().exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    results: z.array(CblBookResultSchema).nullable().exactOptional(),
    success: CblImportResultSchema.exactOptional(),
    successfulInserts: z.array(CblBookResultSchema).nullable().exactOptional(),
    isUpdate: z.boolean().exactOptional(),
    readingListId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblImportSummaryDto')

const CblReValidateRequestDtoSchema = z
  .strictObject({ fileName: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CblReValidateRequestDto')

const CblRemapRuleKindSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Series\n- `1` — Volume\n- `2` — Chapter',
    'x-enum-varnames': ['Series', 'Volume', 'Chapter'],
    'x-enum-descriptions': ['Series', 'Volume', 'Chapter'],
  })
  .openapi('CblRemapRuleKind')

const CblRepoItemDtoSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    isDirectory: z.boolean().exactOptional(),
    sha: z.string().nullable().exactOptional(),
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
    downloadUrl: z.string().nullable().exactOptional(),
    existingReadingListId: z.int32().nullable().exactOptional(),
    alreadySynced: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('CblRepoItemDto')

const GithubRateLimitDtoSchema = z
  .strictObject({
    remaining: z.int32().nullable().exactOptional(),
    limit: z.int32().nullable().exactOptional(),
    resetsAtUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    isLow: z.boolean().exactOptional().openapi({ readOnly: true }),
    isExhausted: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('GithubRateLimitDto')

const CblRepoBrowseResultDtoSchema = z
  .strictObject({
    items: z.array(CblRepoItemDtoSchema).nullable().exactOptional(),
    rateLimit: GithubRateLimitDtoSchema.exactOptional(),
    fromCache: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblRepoBrowseResultDto')

const CblRepoImportRequestDtoSchema = z
  .strictObject({ items: z.array(CblRepoItemDtoSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CblRepoImportRequestDto')

const CblSavedFileDtoSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    provider: ReadingListProviderSchema.exactOptional(),
    repoPath: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
    sha: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CblSavedFileDto')

const ChangeEmailOnLicenseDtoSchema = z
  .strictObject({ oldEmail: z.string().nullable(), newEmail: z.string().nullable() })
  .openapi({ required: ['newEmail', 'oldEmail'] })
  .openapi('ChangeEmailOnLicenseDto')

const ChapterDetailPlusDtoSchema = z
  .strictObject({
    rating: z.float32().exactOptional(),
    hasBeenRated: z.boolean().exactOptional(),
    reviews: z.array(UserReviewDtoSchema).nullable().exactOptional(),
    ratings: z.array(RatingDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChapterDetailPlusDto')

const MangaFileDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    filePath: z.string().nullable().exactOptional(),
    pages: z.int32().exactOptional(),
    bytes: z
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
    format: MangaFormatSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    extension: z.string().nullable().exactOptional(),
    koreaderHash: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MangaFileDto')

const PersonDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable(),
    coverImageLocked: z.boolean().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    aliases: z.array(z.string()).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    asin: z.string().nullable().exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.string().nullable().exactOptional(),
    webLinks: z.array(z.string()).nullable().exactOptional(),
    roles: z.array(PersonRoleSchema).nullable().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('PersonDto')

const GenreTagDtoSchema = z
  .strictObject({ id: z.int32().exactOptional(), title: z.string().nullable() })
  .openapi({ required: ['title'] })
  .openapi('GenreTagDto')

const TagDtoSchema = z
  .strictObject({ id: z.int32().exactOptional(), title: z.string().nullable() })
  .openapi({ required: ['title'] })
  .openapi('TagDto')

const PublicationStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Ongoing (OnGoing)\n- `1` — Hiatus\n- `2` — Completed\n- `3` — Cancelled\n- `4` — Ended',
    'x-enum-varnames': ['OnGoing', 'Hiatus', 'Completed', 'Cancelled', 'Ended'],
    'x-enum-descriptions': ['Ongoing', 'Hiatus', 'Completed', 'Cancelled', 'Ended'],
  })
  .openapi('PublicationStatus')

const ChapterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    range: z.string().nullable().exactOptional(),
    number: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    minNumber: z.float32().exactOptional(),
    maxNumber: z.float32().exactOptional(),
    sortOrder: z.float32().exactOptional(),
    pages: z.int32().exactOptional(),
    isSpecial: z.boolean().exactOptional(),
    title: z.string().nullable().exactOptional(),
    files: z.array(MangaFileDtoSchema).nullable().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    totalReads: z.int32().exactOptional(),
    lastReadingProgressUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastReadingProgress: z.iso.datetime({ offset: true }).exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    volumeId: z.int32().exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    titleName: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    wordCount: z
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
    volumeTitle: z.string().nullable().exactOptional(),
    minHoursToRead: z.int32().exactOptional(),
    maxHoursToRead: z.int32().exactOptional(),
    avgHoursToRead: z.float32().exactOptional(),
    webLinks: z.string().nullable().exactOptional(),
    isbn: z.string().nullable().exactOptional(),
    writers: z.array(PersonDtoSchema).nullable().exactOptional(),
    coverArtists: z.array(PersonDtoSchema).nullable().exactOptional(),
    publishers: z.array(PersonDtoSchema).nullable().exactOptional(),
    characters: z.array(PersonDtoSchema).nullable().exactOptional(),
    pencillers: z.array(PersonDtoSchema).nullable().exactOptional(),
    inkers: z.array(PersonDtoSchema).nullable().exactOptional(),
    imprints: z.array(PersonDtoSchema).nullable().exactOptional(),
    colorists: z.array(PersonDtoSchema).nullable().exactOptional(),
    letterers: z.array(PersonDtoSchema).nullable().exactOptional(),
    editors: z.array(PersonDtoSchema).nullable().exactOptional(),
    translators: z.array(PersonDtoSchema).nullable().exactOptional(),
    teams: z.array(PersonDtoSchema).nullable().exactOptional(),
    locations: z.array(PersonDtoSchema).nullable().exactOptional(),
    genres: z.array(GenreTagDtoSchema).nullable().exactOptional(),
    tags: z.array(TagDtoSchema).nullable().exactOptional(),
    publicationStatus: PublicationStatusSchema.exactOptional(),
    language: z.string().nullable().exactOptional(),
    count: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
    languageLocked: z.boolean().exactOptional(),
    summaryLocked: z.boolean().exactOptional(),
    ageRatingLocked: z.boolean().exactOptional(),
    publicationStatusLocked: z.boolean().exactOptional(),
    genresLocked: z.boolean().exactOptional(),
    tagsLocked: z.boolean().exactOptional(),
    writerLocked: z.boolean().exactOptional(),
    characterLocked: z.boolean().exactOptional(),
    coloristLocked: z.boolean().exactOptional(),
    editorLocked: z.boolean().exactOptional(),
    inkerLocked: z.boolean().exactOptional(),
    imprintLocked: z.boolean().exactOptional(),
    lettererLocked: z.boolean().exactOptional(),
    pencillerLocked: z.boolean().exactOptional(),
    publisherLocked: z.boolean().exactOptional(),
    translatorLocked: z.boolean().exactOptional(),
    teamLocked: z.boolean().exactOptional(),
    locationLocked: z.boolean().exactOptional(),
    coverArtistLocked: z.boolean().exactOptional(),
    releaseDateLocked: z.boolean().exactOptional(),
    titleNameLocked: z.boolean().exactOptional(),
    sortOrderLocked: z.boolean().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().exactOptional(),
    cbrId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChapterDto')

const ChapterInfoDtoSchema = z
  .strictObject({
    chapterNumber: z.string().nullable().exactOptional(),
    volumeNumber: z.string().nullable().exactOptional(),
    volumeId: z.int32().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    seriesFormat: MangaFormatSchema.exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    pages: z.int32().exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    isSpecial: z.boolean().exactOptional(),
    subtitle: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    seriesTotalPages: z.int32().exactOptional(),
    seriesTotalPagesRead: z.int32().exactOptional(),
    seriesPublicationStatus: PublicationStatusSchema.exactOptional(),
    pageDimensions: z.array(FileDimensionDtoSchema).nullable().exactOptional(),
    doublePairs: z.record(z.string(), z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChapterInfoDto')

const CheckForFilesInFolderRootsDtoSchema = z
  .strictObject({ roots: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CheckForFilesInFolderRootsDto')

const ClientDeviceTypeSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Unknown\n- `1` — Web Browser (WebBrowser)\n- `2` — Web App (WebApp)\n- `3` — KOReader (KoReader)\n- `4` — Panels\n- `5` — Librera\n- `6` — OPDS Client (OpdsClient)',
    'x-enum-varnames': [
      'Unknown',
      'WebBrowser',
      'WebApp',
      'KoReader',
      'Panels',
      'Librera',
      'OpdsClient',
    ],
    'x-enum-descriptions': [
      'Unknown',
      'Web Browser',
      'Web App',
      'KOReader',
      'Panels',
      'Librera',
      'OPDS Client',
    ],
  })
  .openapi('ClientDeviceType')

const ClientDevicePlatformSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `0` — Unknown\n- `1` — Windows\n- `2` — macOS (MacOs)\n- `3` — IOs (Ios)\n- `4` — Linux\n- `5` — Android',
    'x-enum-varnames': ['Unknown', 'Windows', 'MacOs', 'Ios', 'Linux', 'Android'],
    'x-enum-descriptions': ['Unknown', 'Windows', 'macOS', 'IOs', 'Linux', 'Android'],
  })
  .openapi('ClientDevicePlatform')

const ClientInfoDtoSchema = z
  .strictObject({
    userAgent: z.string().nullable().exactOptional(),
    ipAddress: z.string().nullable().exactOptional(),
    authType: AuthenticationTypeSchema.exactOptional(),
    clientType: ClientDeviceTypeSchema.exactOptional(),
    appVersion: z.string().nullable().exactOptional(),
    browser: z.string().nullable().exactOptional(),
    browserVersion: z.string().nullable().exactOptional(),
    platform: ClientDevicePlatformSchema.exactOptional(),
    deviceType: z.string().nullable().exactOptional(),
    screenWidth: z.int32().nullable().exactOptional(),
    screenHeight: z.int32().nullable().exactOptional(),
    orientation: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientInfoDto')

const ClientDeviceDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    friendlyName: z.string().nullable().exactOptional(),
    uiFingerprint: z.string().nullable().exactOptional(),
    currentClientInfo: ClientInfoDtoSchema.exactOptional(),
    firstSeenUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastSeenUtc: z.iso.datetime({ offset: true }).exactOptional(),
    ownerUsername: z.string().nullable().exactOptional(),
    ownerUserId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientDeviceDto')

const ClientDeviceTypeStatCountSchema = z
  .strictObject({
    value: ClientDeviceTypeSchema.exactOptional(),
    count: z
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
  .openapi('ClientDeviceTypeStatCount')

const CollectionTagBulkAddDtoSchema = z
  .strictObject({
    collectionTagId: z.int32().exactOptional(),
    collectionTagTitle: z.string().nullable().exactOptional(),
    seriesIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectionTagBulkAddDto')

const ColorScapeDtoSchema = z
  .strictObject({
    primary: z.string().nullable().exactOptional(),
    secondary: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ColorScapeDto')

const ConfirmEmailDtoSchema = z
  .strictObject({
    email: z.string().min(1),
    token: z.string().min(1),
    password: z.string().min(6).max(256),
    username: z.string().min(1),
  })
  .openapi({ required: ['email', 'password', 'token', 'username'] })
  .openapi('ConfirmEmailDto')

const ConfirmEmailUpdateDtoSchema = z
  .strictObject({ email: z.string().min(1), token: z.string().min(1) })
  .openapi({ required: ['email', 'token'] })
  .openapi('ConfirmEmailUpdateDto')

const ConfirmMigrationEmailDtoSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    token: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfirmMigrationEmailDto')

const ConfirmPasswordResetDtoSchema = z
  .strictObject({
    email: z.string().min(1),
    token: z.string().min(1),
    password: z.string().min(6).max(256),
  })
  .openapi({ required: ['email', 'password', 'token'] })
  .openapi('ConfirmPasswordResetDto')

const ConflictResolutionSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Manual\n- `1` — Keep\n- `2` — Replace',
    'x-enum-varnames': ['Manual', 'Keep', 'Replace'],
    'x-enum-descriptions': ['Manual', 'Keep', 'Replace'],
  })
  .openapi('ConflictResolution')

const CopySettingsFromLibraryDtoSchema = z
  .strictObject({
    sourceLibraryId: z.int32().exactOptional(),
    targetLibraryIds: z.array(z.int32()).nullable().exactOptional(),
    includeType: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CopySettingsFromLibraryDto')

const CoverImageSizeSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description: 'Members:\n- `1` — Default\n- `2` — Medium\n- `3` — Large\n- `4` — XLarge',
    'x-enum-varnames': ['Default', 'Medium', 'Large', 'XLarge'],
    'x-enum-descriptions': ['Default', 'Medium', 'Large', 'XLarge'],
  })
  .openapi('CoverImageSize')

const EmailDevicePlatformSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `0` — Custom\n- `1` — PocketBook\n- `2` — Kindle\n- `3` — Kobo',
    'x-enum-varnames': ['Custom', 'PocketBook', 'Kindle', 'Kobo'],
    'x-enum-descriptions': ['Custom', 'PocketBook', 'Kindle', 'Kobo'],
  })
  .openapi('EmailDevicePlatform')

const CreateEmailDeviceDtoSchema = z
  .strictObject({
    name: z.string().min(1),
    platform: EmailDevicePlatformSchema,
    emailAddress: z.string().min(1),
  })
  .openapi({ required: ['emailAddress', 'name', 'platform'] })
  .openapi('CreateEmailDeviceDto')

const CreatePersonalToCDtoSchema = z
  .strictObject({
    chapterId: z.int32(),
    volumeId: z.int32(),
    seriesId: z.int32(),
    libraryId: z.int32(),
    pageNumber: z.int32(),
    title: z.string().nullable(),
    bookScrollId: z.string().nullable().exactOptional(),
    selectedText: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['chapterId', 'libraryId', 'pageNumber', 'seriesId', 'title', 'volumeId'] })
  .openapi('CreatePersonalToCDto')

const CreateReadingListDtoSchema = z
  .strictObject({ title: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateReadingListDto')

const CreateRemapRuleDtoSchema = z
  .strictObject({
    cblSeriesName: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    cblVolume: z.string().nullable().exactOptional(),
    cblNumber: z.string().nullable().exactOptional(),
    volumeId: z.int32().nullable().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRemapRuleDto')

const DashboardStreamTypeSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `1` — OnDeck\n- `2` — RecentlyUpdated\n- `3` — NewlyAdded\n- `4` — SmartFilter',
    'x-enum-varnames': ['OnDeck', 'RecentlyUpdated', 'NewlyAdded', 'SmartFilter'],
    'x-enum-descriptions': ['OnDeck', 'RecentlyUpdated', 'NewlyAdded', 'SmartFilter'],
  })
  .openapi('DashboardStreamType')

const DashboardStreamDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable(),
    isProvided: z.boolean().exactOptional(),
    order: z.int32().exactOptional(),
    smartFilterEncoded: z.string().nullable().exactOptional(),
    smartFilterId: z.int32().nullable().exactOptional(),
    streamType: DashboardStreamTypeSchema.exactOptional(),
    visible: z.boolean().exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DashboardStreamDto')

const DateTimeStatCountWithFormatSchema = z
  .strictObject({
    value: z.iso.datetime({ offset: true }).exactOptional(),
    count: z
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
    format: MangaFormatSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DateTimeStatCountWithFormat')

const DayOfWeekSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Sunday\n- `1` — Monday\n- `2` — Tuesday\n- `3` — Wednesday\n- `4` — Thursday\n- `5` — Friday\n- `6` — Saturday',
    'x-enum-varnames': [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    'x-enum-descriptions': [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  })
  .openapi('DayOfWeek')

const DayOfWeekStatCountSchema = z
  .strictObject({
    value: DayOfWeekSchema.exactOptional(),
    count: z
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
  .openapi('DayOfWeekStatCount')

const DecodeFilterDtoSchema = z
  .strictObject({ encodedFilter: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('DecodeFilterDto')

const DeleteChaptersDtoSchema = z
  .strictObject({ chapterIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteChaptersDto')

const DeleteCollectionsDtoSchema = z
  .strictObject({ collectionIds: z.array(z.int32()) })
  .openapi({ required: ['collectionIds'] })
  .openapi('DeleteCollectionsDto')

const DeleteReadingListsDtoSchema = z
  .strictObject({ readingListIds: z.array(z.int32()) })
  .openapi({ required: ['readingListIds'] })
  .openapi('DeleteReadingListsDto')

const DeleteSeriesDtoSchema = z
  .strictObject({ seriesIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteSeriesDto')

const DeviceClientBreakdownDtoSchema = z
  .strictObject({
    records: z.array(ClientDeviceTypeStatCountSchema).nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceClientBreakdownDto')

const DirectoryDtoSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    fullPath: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DirectoryDto')

const DownloadBookmarkDtoSchema = z
  .strictObject({ bookmarks: z.array(BookmarkDtoSchema) })
  .openapi({ required: ['bookmarks'] })
  .openapi('DownloadBookmarkDto')

const DownloadableSiteThemeDtoSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    cssUrl: z.string().nullable().exactOptional(),
    cssFile: z.string().nullable().exactOptional(),
    previewUrls: z.array(z.string()).nullable().exactOptional(),
    alreadyDownloaded: z.boolean().exactOptional(),
    sha: z.string().nullable().exactOptional(),
    path: z.string().nullable().exactOptional(),
    author: z.string().nullable().exactOptional(),
    lastCompatibleVersion: z.string().nullable().exactOptional(),
    isCompatible: z.boolean().exactOptional(),
    description: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadableSiteThemeDto')

const EmailDeviceDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    emailAddress: z.string().nullable().exactOptional(),
    platform: EmailDevicePlatformSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailDeviceDto')

const EmailHistoryDtoSchema = z
  .strictObject({
    id: z
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
    sent: z.boolean().exactOptional(),
    sendDate: z.iso.datetime({ offset: true }).exactOptional(),
    emailTemplate: z.string().nullable().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    toUserName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailHistoryDto')

const EmailTestResultDtoSchema = z
  .strictObject({
    successful: z.boolean().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    emailAddress: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailTestResultDto')

const EncodeFormatSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — PNG\n- `1` — WebP (WEBP)\n- `2` — AVIF',
    'x-enum-varnames': ['PNG', 'WEBP', 'AVIF'],
    'x-enum-descriptions': ['PNG', 'WebP', 'AVIF'],
  })
  .openapi('EncodeFormat')

const FontProviderSchema = z
  .union([z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `1` — System\n- `2` — User',
    'x-enum-varnames': ['System', 'User'],
    'x-enum-descriptions': ['System', 'User'],
  })
  .openapi('FontProvider')

const EpubFontDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    family: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    provider: FontProviderSchema.exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    style: z.string().nullable().exactOptional(),
    weight: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EpubFontDto')

const ExternalCoverImageTypeSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Series\n- `1` — Volume\n- `2` — VolumeBack\n- `3` — Chapter\n- `4` — Issue\n- `5` — Banner\n- `6` — Season\n- `7` — Audiobook\n- `8` — Other',
    'x-enum-varnames': [
      'Series',
      'Volume',
      'VolumeBack',
      'Chapter',
      'Issue',
      'Banner',
      'Season',
      'Audiobook',
      'Other',
    ],
    'x-enum-descriptions': [
      'Series',
      'Volume',
      'VolumeBack',
      'Chapter',
      'Issue',
      'Banner',
      'Season',
      'Audiobook',
      'Other',
    ],
  })
  .openapi('ExternalCoverImageType')

const ExternalCoverResponseDtoSchema = z
  .strictObject({
    url: z.string().nullable(),
    type: ExternalCoverImageTypeSchema.exactOptional(),
    number: z.float32().nullable().exactOptional(),
    language: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['url'] })
  .openapi('ExternalCoverResponseDto')

const ExternalMetadataIdsDtoSchema = z
  .strictObject({
    malId: z
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
    aniListId: z.int32().nullable().exactOptional(),
    mangabakaId: z.int32().nullable().exactOptional(),
    mangaBakaEditionId: z.string().nullable().exactOptional(),
    hardcoverId: z.int32().nullable().exactOptional(),
    isStandAlone: z.boolean().exactOptional(),
    cbrId: z.int32().nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    localizedSeriesName: z.string().nullable().exactOptional(),
    plusMediaFormat: PlusMediaFormatSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalMetadataIdsDto')

const RecommendationSourceSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `1` — Similar\n- `2` — UserBased\n- `3` — Personalized',
    'x-enum-varnames': ['Similar', 'UserBased', 'Personalized'],
    'x-enum-descriptions': ['Similar', 'UserBased', 'Personalized'],
  })
  .openapi('RecommendationSource')

const ExternalSeriesDtoSchema = z
  .strictObject({
    name: z.string().nullable(),
    coverUrl: z.string().nullable(),
    url: z.string().nullable(),
    summary: z.string().nullable().exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    mangaBakaId: z.int32().nullable().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().nullable().exactOptional(),
    provider: ScrobbleProviderSchema.exactOptional(),
    metadataProvider: MetadataProviderSchema.exactOptional(),
    recommendationSource: RecommendationSourceSchema.exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
  })
  .openapi({ required: ['coverUrl', 'name', 'url'] })
  .openapi('ExternalSeriesDto')

const ExternalSeriesMatchDtoSchema = z
  .strictObject({
    series: ExternalSeriesDetailDtoSchema.exactOptional(),
    matchRating: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalSeriesMatchDto')

const ExternalSourceDtoSchema = z
  .strictObject({
    id: z.int32(),
    name: z.string().nullable(),
    host: z.string().nullable(),
    apiKey: z.string().nullable(),
  })
  .openapi({ required: ['apiKey', 'host', 'id', 'name'] })
  .openapi('ExternalSourceDto')

const MetadataFieldTypeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Genre\n- `1` — Tag',
    'x-enum-varnames': ['Genre', 'Tag'],
    'x-enum-descriptions': ['Genre', 'Tag'],
  })
  .openapi('MetadataFieldType')

const MetadataFieldMappingDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    sourceType: MetadataFieldTypeSchema.exactOptional(),
    destinationType: MetadataFieldTypeSchema.exactOptional(),
    sourceValue: z.string().nullable().exactOptional(),
    destinationValue: z.string().nullable().exactOptional(),
    excludeFromSource: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataFieldMappingDto')

const FieldMappingsDtoSchema = z
  .strictObject({
    blacklist: z.array(z.string()).nullable().exactOptional(),
    whitelist: z.array(z.string()).nullable().exactOptional(),
    ageRatingMappings: z.record(z.string(), AgeRatingSchema).nullable().exactOptional(),
    fieldMappings: z.array(MetadataFieldMappingDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FieldMappingsDto')

const SeriesNameLanguageDtoSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    localizedName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesNameLanguageDto')

const MetadataSettingFieldSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
    z.literal(40),
  ])
  .openapi({
    description:
      'Members:\n- `1` — Summary\n- `2` — PublicationStatus\n- `3` — StartDate\n- `4` — Genres\n- `5` — Tags\n- `6` — LocalizedName\n- `7` — Covers\n- `8` — AgeRating\n- `9` — People\n- `10` — Name\n- `11` — SortName\n- `20` — ChapterTitle\n- `21` — ChapterSummary\n- `22` — ChapterReleaseDate\n- `23` — ChapterPublisher\n- `24` — ChapterCovers\n- `25` — ChapterAgeRating\n- `40` — VolumeCovers',
    'x-enum-varnames': [
      'Summary',
      'PublicationStatus',
      'StartDate',
      'Genres',
      'Tags',
      'LocalizedName',
      'Covers',
      'AgeRating',
      'People',
      'Name',
      'SortName',
      'ChapterTitle',
      'ChapterSummary',
      'ChapterReleaseDate',
      'ChapterPublisher',
      'ChapterCovers',
      'ChapterAgeRating',
      'VolumeCovers',
    ],
    'x-enum-descriptions': [
      'Summary',
      'PublicationStatus',
      'StartDate',
      'Genres',
      'Tags',
      'LocalizedName',
      'Covers',
      'AgeRating',
      'People',
      'Name',
      'SortName',
      'ChapterTitle',
      'ChapterSummary',
      'ChapterReleaseDate',
      'ChapterPublisher',
      'ChapterCovers',
      'ChapterAgeRating',
      'VolumeCovers',
    ],
  })
  .openapi('MetadataSettingField')

const MetadataSettingsDtoSchema = z
  .strictObject({
    blacklist: z.array(z.string()).nullable().exactOptional(),
    whitelist: z.array(z.string()).nullable().exactOptional(),
    ageRatingMappings: z.record(z.string(), AgeRatingSchema).nullable().exactOptional(),
    fieldMappings: z.array(MetadataFieldMappingDtoSchema).nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
    enableExtendedMetadataProcessing: z.boolean().exactOptional(),
    enableSummary: z.boolean().exactOptional(),
    enablePublicationStatus: z.boolean().exactOptional(),
    enableAgeRating: z.boolean().exactOptional(),
    enableRelationships: z.boolean().exactOptional(),
    enablePeople: z.boolean().exactOptional(),
    enableStartDate: z.boolean().exactOptional(),
    enableLocalizedName: z.boolean().exactOptional(),
    enableName: z.boolean().exactOptional(),
    enableCoverImage: z.boolean().exactOptional(),
    enableChapterSummary: z.boolean().exactOptional(),
    enableChapterReleaseDate: z.boolean().exactOptional(),
    enableChapterTitle: z.boolean().exactOptional(),
    enableChapterPublisher: z.boolean().exactOptional(),
    enableChapterCoverImage: z.boolean().exactOptional(),
    enableVolumeCoverImage: z.boolean().exactOptional(),
    enableGenres: z.boolean().exactOptional(),
    enableTags: z.boolean().exactOptional(),
    firstLastPeopleNaming: z.boolean().exactOptional(),
    externalAgeRatingMappings: z.record(z.string(), AgeRatingSchema).nullable().exactOptional(),
    globalLanguageTitleSettings: SeriesNameLanguageDtoSchema.exactOptional(),
    libraryLanguageTitleOverrides: z
      .record(z.string(), SeriesNameLanguageDtoSchema)
      .nullable()
      .exactOptional(),
    overrides: z.array(MetadataSettingFieldSchema).nullable().exactOptional(),
    personRoles: z.array(PersonRoleSchema).nullable().exactOptional(),
    filterAboveWeight: TagWeightSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataSettingsDto')

const FieldMappingsImportResultDtoSchema = z
  .strictObject({
    success: z.boolean().exactOptional(),
    resultingMetadataSettings: MetadataSettingsDtoSchema.exactOptional(),
    ageRatingConflicts: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FieldMappingsImportResultDto')

const FileExtensionDtoSchema = z
  .strictObject({
    extension: z.string().nullable().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    totalSize: z
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
    totalFiles: z
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
  .openapi('FileExtensionDto')

const FileExtensionBreakdownDtoSchema = z
  .strictObject({
    totalFileSize: z
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
    fileBreakdown: z.array(FileExtensionDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileExtensionBreakdownDto')

const FileTypeGroupSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description: 'Members:\n- `1` — Archive\n- `2` — EPub (Epub)\n- `3` — Pdf\n- `4` — Images',
    'x-enum-varnames': ['Archive', 'Epub', 'Pdf', 'Images'],
    'x-enum-descriptions': ['Archive', 'EPub', 'Pdf', 'Images'],
  })
  .openapi('FileTypeGroup')

const FolderWatchFallbackReasonSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Errors\n- `1` — MissedChange',
    'x-enum-varnames': ['Errors', 'MissedChange'],
    'x-enum-descriptions': ['Errors', 'MissedChange'],
  })
  .openapi('FolderWatchFallbackReason')

const FolderWatchMethodSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Off\n- `1` — File Watcher (FileWatcher)\n- `2` — Polling\n- `3` — Trial\n- `4` — Failed',
    'x-enum-varnames': ['Off', 'FileWatcher', 'Polling', 'Trial', 'Failed'],
    'x-enum-descriptions': ['Off', 'File Watcher', 'Polling', 'Trial', 'Failed'],
  })
  .openapi('FolderWatchMethod')

const FolderWatchModeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description:
      'Members:\n- `0` — Off\n- `1` — Automatic\n- `2` — File Watcher (FileWatcher)\n- `3` — Polling',
    'x-enum-varnames': ['Off', 'Automatic', 'FileWatcher', 'Polling'],
    'x-enum-descriptions': ['Off', 'Automatic', 'File Watcher', 'Polling'],
  })
  .openapi('FolderWatchMode')

const FolderWatchStatusDtoSchema = z
  .strictObject({
    mode: FolderWatchModeSchema.exactOptional(),
    method: FolderWatchMethodSchema.exactOptional(),
    reason: FolderWatchFallbackReasonSchema.exactOptional(),
    folder: z.string().nullable().exactOptional(),
    successes: z.int32().exactOptional(),
    successesNeeded: z.int32().exactOptional(),
    needsLibraryScan: z.boolean().exactOptional(),
    enableFolderWatching: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FolderWatchStatusDto')

const FontDeleteResultDtoSchema = z
  .strictObject({ deleted: z.boolean().exactOptional(), inUse: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('FontDeleteResultDto')

const GenreTagDtoStatCountSchema = z
  .strictObject({
    value: GenreTagDtoSchema.exactOptional(),
    count: z
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
  .openapi('GenreTagDtoStatCount')

const GroupedSeriesDtoSchema = z
  .strictObject({
    seriesName: z.string().nullable().exactOptional(),
    localizedSeriesName: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    chapterId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupedSeriesDto')

const RgbaColorSchema = z
  .strictObject({
    r: z.int32().exactOptional(),
    g: z.int32().exactOptional(),
    b: z.int32().exactOptional(),
    a: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RgbaColor')

const HighlightSlotSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    slotNumber: z.int32().exactOptional(),
    color: RgbaColorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HighlightSlot')

const HourEstimateRangeDtoSchema = z
  .strictObject({
    minHours: z.int32().exactOptional(),
    maxHours: z.int32().exactOptional(),
    avgHours: z.float32().exactOptional(),
    wordCount: z
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
    pageCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HourEstimateRangeDto')

const IFilterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    combination: FilterCombinationSchema.exactOptional(),
    limitTo: z.int32().exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IFilterDto')

const IdentityProviderSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Kavita\n- `1` — OpenID Connect (OpenIdConnect)',
    'x-enum-varnames': ['Kavita', 'OpenIdConnect'],
    'x-enum-descriptions': ['Kavita', 'OpenID Connect'],
  })
  .openapi('IdentityProvider')

const ImportModeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Replace\n- `1` — Merge',
    'x-enum-varnames': ['Replace', 'Merge'],
    'x-enum-descriptions': ['Replace', 'Merge'],
  })
  .openapi('ImportMode')

const ImportSettingsDtoSchema = z
  .strictObject({
    importMode: ImportModeSchema.exactOptional(),
    resolution: ConflictResolutionSchema.exactOptional(),
    whitelist: z.boolean().exactOptional(),
    blacklist: z.boolean().exactOptional(),
    ageRatings: z.boolean().exactOptional(),
    fieldMappings: z.boolean().exactOptional(),
    ageRatingConflictResolutions: z
      .record(z.string(), ConflictResolutionSchema)
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportSettingsDto')

const ImportFieldMappingsDtoSchema = z
  .strictObject({
    settings: ImportSettingsDtoSchema.exactOptional(),
    data: FieldMappingsDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportFieldMappingsDto')

const Int32StatCountSchema = z
  .strictObject({
    value: z.int32().exactOptional(),
    count: z
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
  .openapi('Int32StatCount')

const InviteUserDtoSchema = z
  .strictObject({
    email: z.string().min(1),
    roles: z.array(z.string()).nullable().exactOptional(),
    libraries: z.array(z.int32()).nullable().exactOptional(),
    ageRestriction: AgeRestrictionDtoSchema.exactOptional(),
  })
  .openapi({ required: ['email'] })
  .openapi('InviteUserDto')

const InviteUserResponseSchema = z
  .strictObject({
    emailLink: z.string().nullable().exactOptional(),
    emailSent: z.boolean().exactOptional(),
    invalidEmail: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InviteUserResponse')

const JobDtoSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    createdAtUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastExecutionUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    cron: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobDto')

const JumpKeyDtoSchema = z
  .strictObject({
    size: z.int32().exactOptional(),
    key: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JumpKeyDto')

const KavitaLocaleSchema = z
  .strictObject({
    fileName: z.string().nullable().exactOptional(),
    renderName: z.string().nullable().exactOptional(),
    translationCompletion: z.float32().exactOptional(),
    isRtL: z.boolean().exactOptional(),
    hash: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaLocale')

const KavitaPlusAuditCategorySchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Match\n- `1` — Metadata\n- `2` — Scrobble\n- `3` — Sync\n- `4` — System',
    'x-enum-varnames': ['Match', 'Metadata', 'Scrobble', 'Sync', 'System'],
    'x-enum-descriptions': ['Match', 'Metadata', 'Scrobble', 'Sync', 'System'],
  })
  .openapi('KavitaPlusAuditCategory')

const KavitaPlusEventTypeSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(10),
    z.literal(11),
    z.literal(13),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(30),
    z.literal(31),
    z.literal(40),
    z.literal(41),
    z.literal(50),
    z.literal(51),
    z.literal(52),
    z.literal(53),
    z.literal(54),
    z.literal(55),
    z.literal(56),
    z.literal(57),
    z.literal(60),
    z.literal(61),
    z.literal(62),
    z.literal(80),
    z.literal(81),
  ])
  .openapi({
    description:
      'Members:\n- `0` — SeriesMatched\n- `1` — SeriesMatchFailed\n- `2` — SeriesBlacklisted\n- `3` — SeriesMatchFixed\n- `4` — SeriesDontMatchSet\n- `5` — SeriesMetadataProviderOverrideSet\n- `10` — MetadataFetched\n- `11` — MetadataUpdated\n- `13` — CoverUpdated\n- `20` — ChapterMetadataUpdated\n- `21` — ChapterCoverUpdated\n- `22` — VolumeCoverUpdated\n- `30` — PersonCoverUpdated\n- `31` — PersonAliasAdded\n- `40` — CollectionSynced\n- `41` — CollectionItemAdded\n- `50` — ScrobbleEventCreated\n- `51` — ScrobbleEventUpdated\n- `52` — ScrobbleEventSent\n- `53` — ScrobbleEventFailed\n- `54` — ScrobbleRateLimitHit\n- `55` — ScrobbleEventSkipped\n- `56` — ScrobbleHoldRemoved\n- `57` — ScrobbleHoldAdded\n- `60` — SyncStarted\n- `61` — SyncCompleted\n- `62` — SyncFailed\n- `80` — SystemTokenRefresh\n- `81` — SystemProviderInfoSync',
    'x-enum-varnames': [
      'SeriesMatched',
      'SeriesMatchFailed',
      'SeriesBlacklisted',
      'SeriesMatchFixed',
      'SeriesDontMatchSet',
      'SeriesMetadataProviderOverrideSet',
      'MetadataFetched',
      'MetadataUpdated',
      'CoverUpdated',
      'ChapterMetadataUpdated',
      'ChapterCoverUpdated',
      'VolumeCoverUpdated',
      'PersonCoverUpdated',
      'PersonAliasAdded',
      'CollectionSynced',
      'CollectionItemAdded',
      'ScrobbleEventCreated',
      'ScrobbleEventUpdated',
      'ScrobbleEventSent',
      'ScrobbleEventFailed',
      'ScrobbleRateLimitHit',
      'ScrobbleEventSkipped',
      'ScrobbleHoldRemoved',
      'ScrobbleHoldAdded',
      'SyncStarted',
      'SyncCompleted',
      'SyncFailed',
      'SystemTokenRefresh',
      'SystemProviderInfoSync',
    ],
    'x-enum-descriptions': [
      'SeriesMatched',
      'SeriesMatchFailed',
      'SeriesBlacklisted',
      'SeriesMatchFixed',
      'SeriesDontMatchSet',
      'SeriesMetadataProviderOverrideSet',
      'MetadataFetched',
      'MetadataUpdated',
      'CoverUpdated',
      'ChapterMetadataUpdated',
      'ChapterCoverUpdated',
      'VolumeCoverUpdated',
      'PersonCoverUpdated',
      'PersonAliasAdded',
      'CollectionSynced',
      'CollectionItemAdded',
      'ScrobbleEventCreated',
      'ScrobbleEventUpdated',
      'ScrobbleEventSent',
      'ScrobbleEventFailed',
      'ScrobbleRateLimitHit',
      'ScrobbleEventSkipped',
      'ScrobbleHoldRemoved',
      'ScrobbleHoldAdded',
      'SyncStarted',
      'SyncCompleted',
      'SyncFailed',
      'SystemTokenRefresh',
      'SystemProviderInfoSync',
    ],
  })
  .openapi('KavitaPlusEventType')

const MetadataFieldChangeKindSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
  ])
  .openapi({
    description:
      'Members:\n- `1` — Relationships\n- `2` — Characters\n- `3` — Artists\n- `4` — Writers\n- `5` — Tags\n- `6` — Genres\n- `7` — PublicationStatus\n- `8` — AgeRating\n- `9` — ExternalIds\n- `10` — Summary\n- `11` — Title\n- `12` — ReleaseDate\n- `13` — ReleaseYear\n- `14` — LocalizedName\n- `15` — Name',
    'x-enum-varnames': [
      'Relationships',
      'Characters',
      'Artists',
      'Writers',
      'Tags',
      'Genres',
      'PublicationStatus',
      'AgeRating',
      'ExternalIds',
      'Summary',
      'Title',
      'ReleaseDate',
      'ReleaseYear',
      'LocalizedName',
      'Name',
    ],
    'x-enum-descriptions': [
      'Relationships',
      'Characters',
      'Artists',
      'Writers',
      'Tags',
      'Genres',
      'PublicationStatus',
      'AgeRating',
      'ExternalIds',
      'Summary',
      'Title',
      'ReleaseDate',
      'ReleaseYear',
      'LocalizedName',
      'Name',
    ],
  })
  .openapi('MetadataFieldChangeKind')

const MetadataFieldChangeDtoSchema = z
  .strictObject({
    field: MetadataFieldChangeKindSchema.exactOptional(),
    from: z.any().exactOptional(),
    to: z.any().exactOptional(),
    note: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetadataFieldChangeDto')

const ScrobbleEventTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `0` — Chapter Read (ChapterRead)\n- `1` — Add to Want to Read (AddWantToRead)\n- `2` — Remove from Want to Read (RemoveWantToRead)\n- `3` — Score Updated (ScoreUpdated)\n- `4` — Review Added/Updated (Review)\n- `5` — Read status Updated (ReadStatusUpdate)',
    'x-enum-varnames': [
      'ChapterRead',
      'AddWantToRead',
      'RemoveWantToRead',
      'ScoreUpdated',
      'Review',
      'ReadStatusUpdate',
    ],
    'x-enum-descriptions': [
      'Chapter Read',
      'Add to Want to Read',
      'Remove from Want to Read',
      'Score Updated',
      'Review Added/Updated',
      'Read status Updated',
    ],
  })
  .openapi('ScrobbleEventType')

const ScrobbleReadStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `0` — Ignore\n- `1` — Want to Read (WantToRead)\n- `2` — Read\n- `3` — Un read (UnRead)\n- `4` — Dropped\n- `5` — On hold (OnHold)',
    'x-enum-varnames': ['Ignore', 'WantToRead', 'Read', 'UnRead', 'Dropped', 'OnHold'],
    'x-enum-descriptions': ['Ignore', 'Want to Read', 'Read', 'Un read', 'Dropped', 'On hold'],
  })
  .openapi('ScrobbleReadStatus')

const KavitaPlusScrobbleDetailsDtoSchema = z
  .strictObject({
    scrobbleEventType: ScrobbleEventTypeSchema.exactOptional(),
    chapterNumber: z.int32().nullable().exactOptional(),
    volumeNumber: z.float32().nullable().exactOptional(),
    percentRead: z.float32().nullable().exactOptional(),
    rating: z.float32().nullable().exactOptional(),
    reviewBody: z.string().nullable().exactOptional(),
    readStatus: ScrobbleReadStatusSchema.exactOptional(),
    provider: ScrobbleProviderSchema.exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusScrobbleDetailsDto')

const KavitaPlusAuditMatchDetailsDtoSchema = z
  .strictObject({
    matchedName: z.string().nullable().exactOptional(),
    before: AuditLogMatchExternalIdsParamsDtoSchema.exactOptional(),
    after: AuditLogMatchExternalIdsParamsDtoSchema.exactOptional(),
    reason: z.string().nullable().exactOptional(),
    dontMatch: z.boolean().nullable().exactOptional(),
    previousProvider: MetadataProviderSchema.exactOptional(),
    newProvider: MetadataProviderSchema.exactOptional(),
    isProviderOverride: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditMatchDetailsDto')

const KavitaPlusAuditSyncDetailsDtoSchema = z
  .strictObject({
    collectionName: z.string().nullable().exactOptional(),
    stackId: z.string().nullable().exactOptional(),
    itemCount: z.int32().nullable().exactOptional(),
    missingCount: z.int32().nullable().exactOptional(),
    collectionUrl: z.string().nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    userName: z.string().nullable().exactOptional(),
    hasMal: z.boolean().nullable().exactOptional(),
    hasAniList: z.boolean().nullable().exactOptional(),
    seriesMatched: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditSyncDetailsDto')

const MetadataFetchTriggerSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Unknown\n- `1` — Series Added (SeriesAdded)\n- `2` — On Demand (OnDemand)\n- `3` — Manual Match (ManualMatch)\n- `4` — Scheduled Refresh (ScheduledRefresh)',
    'x-enum-varnames': ['Unknown', 'SeriesAdded', 'OnDemand', 'ManualMatch', 'ScheduledRefresh'],
    'x-enum-descriptions': [
      'Unknown',
      'Series Added',
      'On Demand',
      'Manual Match',
      'Scheduled Refresh',
    ],
  })
  .openapi('MetadataFetchTrigger')

const KavitaPlusAuditMetadataExtrasDtoSchema = z
  .strictObject({
    coverUrl: z.string().nullable().exactOptional(),
    issueNumber: z.string().nullable().exactOptional(),
    volumeNumber: z.string().nullable().exactOptional(),
    personName: z.string().nullable().exactOptional(),
    aliasAdded: z.string().nullable().exactOptional(),
    fetchTrigger: MetadataFetchTriggerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditMetadataExtrasDto')

const KavitaPlusUserInfoSchema = z
  .strictObject({ username: z.string().nullable() })
  .openapi({ required: ['username'] })
  .openapi('KavitaPlusUserInfo')

const KavitaPlusAuditSystemDetailsDtoSchema = z
  .strictObject({
    provider: ScrobbleProviderSchema.exactOptional(),
    validUntilUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    userInfo: KavitaPlusUserInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditSystemDetailsDto')

const KavitaPlusAuditEntryDtoSchema = z
  .strictObject({
    id: z
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
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    category: KavitaPlusAuditCategorySchema.exactOptional(),
    eventType: KavitaPlusEventTypeSchema.exactOptional(),
    status: AuditStatusSchema.exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    libraryId: z.int32().nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    subjectType: AuditSubjectTypeSchema.exactOptional(),
    subjectId: z.int32().nullable().exactOptional(),
    userId: z.int32().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
    diff: z.array(MetadataFieldChangeDtoSchema).nullable().exactOptional(),
    errorMessage: z.string().nullable().exactOptional(),
    scrobbleErrorId: z.int32().nullable().exactOptional(),
    scrobbleDetails: KavitaPlusScrobbleDetailsDtoSchema.exactOptional(),
    matchDetails: KavitaPlusAuditMatchDetailsDtoSchema.exactOptional(),
    syncDetails: KavitaPlusAuditSyncDetailsDtoSchema.exactOptional(),
    metadataExtras: KavitaPlusAuditMetadataExtrasDtoSchema.exactOptional(),
    systemDetails: KavitaPlusAuditSystemDetailsDtoSchema.exactOptional(),
    canRetry: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditEntryDto')

const KavitaPlusAuditFilterDtoSchema = z
  .strictObject({
    category: KavitaPlusAuditCategorySchema.exactOptional(),
    status: AuditStatusSchema.exactOptional(),
    subjectType: AuditSubjectTypeSchema.exactOptional(),
    provider: ScrobbleProviderSchema.exactOptional(),
    userId: z.int32().nullable().exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    fromUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    toUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    search: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditFilterDto')

const KavitaPlusAuditSeriesInfoDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    isMatched: z.boolean().exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().nullable().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().nullable().exactOptional(),
    cbrId: z.int32().nullable().exactOptional(),
    isStandAlone: z.boolean().exactOptional(),
    metadataProvider: MetadataProviderSchema.exactOptional(),
    nextRefreshUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastRefreshedUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    recentEvents: z.array(KavitaPlusAuditEntryDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditSeriesInfoDto')

const KavitaPlusAuditStatsDtoSchema = z
  .strictObject({
    events24H: z.int32().exactOptional(),
    failures24H: z.int32().exactOptional(),
    unresolvedMatchFailures: z.int32().exactOptional(),
    matchedSeriesCount: z.int32().exactOptional(),
    totalEligibleSeriesCount: z.int32().exactOptional(),
    staleMatchesCount: z.int32().exactOptional(),
    blacklistedSeriesCount: z.int32().exactOptional(),
    scrobbleQueueCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusAuditStatsDto')

const KavitaPlusBillingIntervalSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `0` — Day\n- `1` — Week\n- `2` — Month\n- `3` — Year',
    'x-enum-varnames': ['Day', 'Week', 'Month', 'Year'],
    'x-enum-descriptions': ['Day', 'Week', 'Month', 'Year'],
  })
  .openapi('KavitaPlusBillingInterval')

const KavitaPlusLicenseUsageDtoSchema = z
  .strictObject({
    generatedAtUtc: z.iso.datetime({ offset: true }).exactOptional(),
    stats: z.array(ApiUsageDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusLicenseUsageDto')

const KavitaPlusMyAuditStatsDtoSchema = z
  .strictObject({
    events24H: z.int32().exactOptional(),
    failures24H: z.int32().exactOptional(),
    scrobbleQueueCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusMyAuditStatsDto')

const KavitaPlusProductInfoDtoSchema = z
  .strictObject({
    productName: z.string().nullable().exactOptional(),
    priceAmount: z
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
    priceCurrency: z.string().nullable().exactOptional(),
    billingInterval: KavitaPlusBillingIntervalSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusProductInfoDto')

const KavitaPlusProviderHealthIncidentTypeSchema = z
  .union([z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `1` — Degraded\n- `2` — Down',
    'x-enum-varnames': ['Degraded', 'Down'],
    'x-enum-descriptions': ['Degraded', 'Down'],
  })
  .openapi('KavitaPlusProviderHealthIncidentType')

const KavitaPlusProviderHealthStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `0` — Unknown\n- `1` — Operational\n- `2` — Degraded\n- `3` — Down',
    'x-enum-varnames': ['Unknown', 'Operational', 'Degraded', 'Down'],
    'x-enum-descriptions': ['Unknown', 'Operational', 'Degraded', 'Down'],
  })
  .openapi('KavitaPlusProviderHealthStatus')

const KavitaPlusProviderIncidentDtoSchema = z
  .strictObject({
    startedAtUtc: z.iso.datetime({ offset: true }).exactOptional(),
    endedAtUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    type: KavitaPlusProviderHealthIncidentTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusProviderIncidentDto')

const KavitaPlusProviderHealthSnapshotDtoSchema = z
  .strictObject({
    provider: ScrobbleProviderSchema.exactOptional(),
    avgLatencyMs: z.float64().exactOptional(),
    status: KavitaPlusProviderHealthStatusSchema.exactOptional(),
    lastIncident: KavitaPlusProviderIncidentDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusProviderHealthSnapshotDto')

const KavitaPlusRegistrationErrorCodeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — None\n- `1` — Registration Failed (RegistrationFailed)\n- `2` — Already Registered (AlreadyRegistered)\n- `3` — Subscription Inactive (SubscriptionInactive)\n- `4` — Internal Error (InternalError)',
    'x-enum-varnames': [
      'None',
      'RegistrationFailed',
      'AlreadyRegistered',
      'SubscriptionInactive',
      'InternalError',
    ],
    'x-enum-descriptions': [
      'None',
      'Registration Failed',
      'Already Registered',
      'Subscription Inactive',
      'Internal Error',
    ],
  })
  .openapi('KavitaPlusRegistrationErrorCode')

const KavitaPlusRegisterResultDtoSchema = z
  .strictObject({
    success: z.boolean().exactOptional(),
    isSubscriptionActive: z.boolean().exactOptional(),
    errorCode: KavitaPlusRegistrationErrorCodeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KavitaPlusRegisterResultDto')

const KavitaPlusSubscriptionStateSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Active\n- `1` — Cancelled\n- `2` — Paused\n- `3` — Cancelling\n- `4` — Expired',
    'x-enum-varnames': ['Active', 'Cancelled', 'Paused', 'Cancelling', 'Expired'],
    'x-enum-descriptions': ['Active', 'Cancelled', 'Paused', 'Cancelling', 'Expired'],
  })
  .openapi('KavitaPlusSubscriptionState')

const KeyBindSchema = z
  .strictObject({
    key: z.string().nullable(),
    control: z.boolean().exactOptional(),
    shift: z.boolean().exactOptional(),
    meta: z.boolean().exactOptional(),
    alt: z.boolean().exactOptional(),
    controllerSequence: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: ['key'] })
  .openapi('KeyBind')

const KoreaderBookDtoSchema = z
  .strictObject({
    document: z.string().nullable().exactOptional(),
    device_id: z.string().nullable().exactOptional(),
    device: z.string().nullable().exactOptional(),
    percentage: z.float32().exactOptional(),
    progress: z.string().nullable().exactOptional(),
    timestamp: z
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
  .openapi('KoreaderBookDto')

const KoreaderProgressUpdateDtoSchema = z
  .strictObject({
    document: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KoreaderProgressUpdateDto')

const LanguageDtoSchema = z
  .strictObject({ isoCode: z.string().nullable(), title: z.string().nullable() })
  .openapi({ required: ['isoCode', 'title'] })
  .openapi('LanguageDto')

const LayoutModeSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description:
      'Members:\n- `1` — Single\n- `2` — Double\n- `3` — Double (manga) (DoubleReversed)',
    'x-enum-varnames': ['Single', 'Double', 'DoubleReversed'],
    'x-enum-descriptions': ['Single', 'Double', 'Double (manga)'],
  })
  .openapi('LayoutMode')

const LibraryDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    type: LibraryTypeSchema.exactOptional(),
    lastScanned: z.iso.datetime({ offset: true }).exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    folderWatchMode: FolderWatchModeSchema.exactOptional(),
    includeInDashboard: z.boolean().exactOptional(),
    includeInRecommended: z.boolean().exactOptional(),
    manageCollections: z.boolean().exactOptional(),
    manageReadingLists: z.boolean().exactOptional(),
    includeInSearch: z.boolean().exactOptional(),
    allowScrobbling: z.boolean().exactOptional(),
    folders: z.array(z.string()).nullable().exactOptional(),
    collapseSeriesRelationships: z.boolean().exactOptional(),
    libraryFileTypes: z.array(FileTypeGroupSchema).nullable().exactOptional(),
    excludePatterns: z.array(z.string()).nullable().exactOptional(),
    allowMetadataMatching: z.boolean().exactOptional(),
    enableMetadata: z.boolean().exactOptional(),
    removePrefixForSortName: z.boolean().exactOptional(),
    inheritWebLinksFromFirstChapter: z.boolean().exactOptional(),
    defaultLanguage: z.string().nullable().exactOptional(),
    metadataProvider: MetadataProviderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LibraryDto')

const LibraryDtoStatCountSchema = z
  .strictObject({
    value: LibraryDtoSchema.exactOptional(),
    count: z
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
  .openapi('LibraryDtoStatCount')

const LicenseInfoDtoSchema = z
  .strictObject({
    state: KavitaPlusSubscriptionStateSchema.exactOptional(),
    isActive: z.boolean().exactOptional(),
    isCancelled: z.boolean().exactOptional(),
    expirationDate: z.iso.datetime({ offset: true }).exactOptional(),
    nextChargeDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    subscribedSince: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    productName: z.string().nullable().exactOptional(),
    priceAmount: z
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
    priceCurrency: z.string().nullable().exactOptional(),
    billingInterval: KavitaPlusBillingIntervalSchema.exactOptional(),
    hasActiveDiscount: z.boolean().exactOptional(),
    isValidVersion: z.boolean().exactOptional(),
    registeredEmail: z.string().nullable().exactOptional(),
    totalMonthsSubbed: z.int32().exactOptional(),
    hasLicense: z.boolean().exactOptional(),
    installId: z.string().nullable().exactOptional(),
    pastDue: z.boolean().exactOptional(),
    discordId: z.string().nullable().exactOptional(),
    discordUsername: z.string().nullable().exactOptional(),
    hasDiscordSet: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('LicenseInfoDto')

const LoginDtoSchema = z
  .strictObject({
    username: z.string().nullable().exactOptional(),
    password: z.string().nullable().exactOptional(),
    apiKey: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LoginDto')

const MalStackDtoSchema = z
  .strictObject({
    title: z.string().nullable(),
    stackId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    url: z.string().nullable(),
    author: z.string().nullable(),
    seriesCount: z.int32(),
    restackCount: z.int32(),
    existingId: z.int32().exactOptional(),
  })
  .openapi({ required: ['author', 'restackCount', 'seriesCount', 'stackId', 'title', 'url'] })
  .openapi('MalStackDto')

const MatchStateOptionSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — All\n- `1` — Matched\n- `2` — NotMatched\n- `3` — Error\n- `4` — DontMatch',
    'x-enum-varnames': ['All', 'Matched', 'NotMatched', 'Error', 'DontMatch'],
    'x-enum-descriptions': ['All', 'Matched', 'NotMatched', 'Error', 'DontMatch'],
  })
  .openapi('MatchStateOption')

const ManageMatchFilterDtoSchema = z
  .strictObject({
    matchStateOption: MatchStateOptionSchema.exactOptional(),
    libraryType: z.int32().exactOptional(),
    searchTerm: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManageMatchFilterDto')

const ManageMatchSeriesDtoSchema = z
  .strictObject({
    series: SeriesDtoSchema.exactOptional(),
    isMatched: z.boolean().exactOptional(),
    validUntilUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManageMatchSeriesDto')

const MangaFormatStatCountSchema = z
  .strictObject({
    value: MangaFormatSchema.exactOptional(),
    count: z
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
  .openapi('MangaFormatStatCount')

const MarkChapterReadDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().exactOptional(),
    generateReadingSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkChapterReadDto')

const MarkMultipleSeriesAsReadDtoSchema = z
  .strictObject({
    seriesIds: z.array(z.int32()).nullable().exactOptional(),
    generateReadingSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkMultipleSeriesAsReadDto')

const MarkReadDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    generateReadingSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkReadDto')

const MarkVolumeReadDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    generateReadingSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkVolumeReadDto')

const MarkVolumesReadDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    volumeIds: z.array(z.int32()).nullable().exactOptional(),
    chapterIds: z.array(z.int32()).nullable().exactOptional(),
    generateReadingSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkVolumesReadDto')

const MatchSeriesDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    query: z.string().nullable().exactOptional(),
    isStandAlone: z.boolean().exactOptional(),
    provider: MetadataProviderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchSeriesDto')

const MatchSeriesInfoDtoSchema = z
  .strictObject({
    hasMatch: z.boolean().exactOptional(),
    isLegacy: z.boolean().exactOptional(),
    plusMediaFormat: PlusMediaFormatSchema.exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    metadataProvider: MetadataProviderSchema.exactOptional(),
    seriesFormat: MangaFormatSchema.exactOptional(),
    mangaBakaId: z.int32().nullable().exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    hardcoverId: z.int32().nullable().exactOptional(),
    cbrId: z.int32().nullable().exactOptional(),
    mangaBakaEditionId: z.string().nullable().exactOptional(),
    isStandalone: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchSeriesInfoDto')

const MatchSeriesResultDtoSchema = z
  .strictObject({
    provider: MetadataProviderSchema.exactOptional(),
    matches: z.array(ExternalSeriesMatchDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchSeriesResultDto')

const MatchedExternalSeriesCountDtoSchema = z
  .strictObject({
    totalCount: z.int32().exactOptional(),
    dontMatchCount: z.int32().exactOptional(),
    notMatchedCount: z.int32().exactOptional(),
    erroredCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchedExternalSeriesCountDto')

const MediaErrorProducerSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — BookService\n- `1` — ArchiveService\n- `2` — Scanner',
    'x-enum-varnames': ['BookService', 'ArchiveService', 'Scanner'],
    'x-enum-descriptions': ['BookService', 'ArchiveService', 'Scanner'],
  })
  .openapi('MediaErrorProducer')

const MediaErrorDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    extension: z.string().nullable(),
    filePath: z.string().nullable(),
    details: z.string().nullable().exactOptional(),
    producer: MediaErrorProducerSchema.exactOptional(),
    reason: MediaErrorReasonSchema.exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    libraryId: z.int32().nullable().exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    isDismissed: z.boolean().exactOptional(),
    lastSeenUtc: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['extension', 'filePath'] })
  .openapi('MediaErrorDto')

const MemberDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    isPending: z.boolean().exactOptional(),
    ageRestriction: AgeRestrictionDtoSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastActive: z.iso.datetime({ offset: true }).exactOptional(),
    lastActiveUtc: z.iso.datetime({ offset: true }).exactOptional(),
    libraries: z.array(LibraryDtoSchema).nullable().exactOptional(),
    roles: z.array(z.string()).nullable().exactOptional(),
    identityProvider: IdentityProviderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberDto')

const MemberInfoDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberInfoDto')

const MostReadAuthorsDtoSchema = z
  .strictObject({
    authorId: z.int32().exactOptional(),
    authorName: z.string().nullable().exactOptional(),
    totalChaptersRead: z.int32().exactOptional(),
    chapters: z.array(AuthorChapterDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MostReadAuthorsDto')

const NextExpectedChapterDtoSchema = z
  .strictObject({
    chapterNumber: z.float32().exactOptional(),
    volumeNumber: z.float32().exactOptional(),
    expectedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NextExpectedChapterDto')

const OAuthUpstreamSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `0` — Discord\n- `1` — MangaBaka\n- `2` — AniList\n- `3` — MyAnimeList\n- `4` — Hardcover',
    'x-enum-varnames': ['Discord', 'MangaBaka', 'AniList', 'MyAnimeList', 'Hardcover'],
    'x-enum-descriptions': ['Discord', 'MangaBaka', 'AniList', 'MyAnimeList', 'Hardcover'],
  })
  .openapi('OAuthUpstream')

const OidcConfigDtoSchema = z
  .strictObject({
    autoLogin: z.boolean().exactOptional(),
    disablePasswordAuthentication: z.boolean().exactOptional(),
    providerName: z.string().nullable().exactOptional(),
    authority: z.string().nullable().exactOptional(),
    clientId: z.string().nullable().exactOptional(),
    secret: z.string().nullable().exactOptional(),
    provisionAccounts: z.boolean().exactOptional(),
    requireVerifiedEmail: z.boolean().exactOptional(),
    syncUserSettings: z.boolean().exactOptional(),
    rolesPrefix: z.string().nullable().exactOptional(),
    rolesClaim: z.string().nullable().exactOptional(),
    customScopes: z.array(z.string()).nullable().exactOptional(),
    defaultRoles: z.array(z.string()).nullable().exactOptional(),
    defaultLibraries: z.array(z.int32()).nullable().exactOptional(),
    defaultAgeRestriction: AgeRatingSchema.exactOptional(),
    defaultIncludeUnknowns: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('OidcConfigDto')

const OidcPublicConfigDtoSchema = z
  .strictObject({
    autoLogin: z.boolean().exactOptional(),
    disablePasswordAuthentication: z.boolean().exactOptional(),
    providerName: z.string().nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OidcPublicConfigDto')

const PageLayoutModeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Cards\n- `1` — List',
    'x-enum-varnames': ['Cards', 'List'],
    'x-enum-descriptions': ['Cards', 'List'],
  })
  .openapi('PageLayoutMode')

const PageSplitOptionSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description:
      'Members:\n- `0` — SplitLeftToRight\n- `1` — SplitRightToLeft\n- `2` — NoSplit\n- `3` — FitSplit',
    'x-enum-varnames': ['SplitLeftToRight', 'SplitRightToLeft', 'NoSplit', 'FitSplit'],
    'x-enum-descriptions': ['SplitLeftToRight', 'SplitRightToLeft', 'NoSplit', 'FitSplit'],
  })
  .openapi('PageSplitOption')

const ParseBulkRequestDtoSchema = z
  .strictObject({
    names: z.array(z.string()).nullable().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParseBulkRequestDto')

const ParseResultDtoSchema = z
  .strictObject({
    seriesName: z.string().nullable().exactOptional(),
    seriesYear: z.string().nullable().exactOptional(),
    minChapterNumber: z.float32().exactOptional(),
    maxChapterNumber: z.float32().exactOptional(),
    minVolumeNumber: z.float32().exactOptional(),
    maxVolumeNumber: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParseResultDto')

const ParseBulkResponseDtoSchema = z
  .strictObject({
    results: z.record(z.string(), ParseResultDtoSchema).nullable().exactOptional(),
    errors: z.record(z.string(), z.string().nullable()).nullable().exactOptional(),
    errorCounts: z.int32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ParseBulkResponseDto')

const PdfRenderResolutionSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `1` — Default\n- `2` — High\n- `3` — Ultra',
    'x-enum-varnames': ['Default', 'High', 'Ultra'],
    'x-enum-descriptions': ['Default', 'High', 'Ultra'],
  })
  .openapi('PdfRenderResolution')

const PdfScrollModeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(3)])
  .openapi({
    description: 'Members:\n- `0` — Vertical\n- `1` — Horizontal\n- `3` — Page',
    'x-enum-varnames': ['Vertical', 'Horizontal', 'Page'],
    'x-enum-descriptions': ['Vertical', 'Horizontal', 'Page'],
  })
  .openapi('PdfScrollMode')

const PdfSpreadModeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — None\n- `1` — Odd\n- `2` — Even',
    'x-enum-varnames': ['None', 'Odd', 'Even'],
    'x-enum-descriptions': ['None', 'Odd', 'Even'],
  })
  .openapi('PdfSpreadMode')

const PdfThemeSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Dark\n- `1` — Light',
    'x-enum-varnames': ['Dark', 'Light'],
    'x-enum-descriptions': ['Dark', 'Light'],
  })
  .openapi('PdfTheme')

const PersonAliasCheckDtoSchema = z
  .strictObject({ personId: z.int32(), name: z.string().min(1), alias: z.string().min(1) })
  .openapi({ required: ['alias', 'name', 'personId'] })
  .openapi('PersonAliasCheckDto')

const PersonDtoStatCountSchema = z
  .strictObject({
    value: PersonDtoSchema.exactOptional(),
    count: z
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
  .openapi('PersonDtoStatCount')

const PersonFilterFieldSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
  .openapi({
    description:
      'Members:\n- `1` — Role\n- `2` — Name\n- `3` — SeriesCount\n- `4` — ChapterCount\n- `5` — Library',
    'x-enum-varnames': ['Role', 'Name', 'SeriesCount', 'ChapterCount', 'Library'],
    'x-enum-descriptions': ['Role', 'Name', 'SeriesCount', 'ChapterCount', 'Library'],
  })
  .openapi('PersonFilterField')

const PersonFilterStatementDtoSchema = z
  .strictObject({
    comparison: FilterComparisonSchema.exactOptional(),
    field: PersonFilterFieldSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonFilterStatementDto')

const PersonSortFieldSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'Members:\n- `1` — Name\n- `2` — SeriesCount\n- `3` — ChapterCount',
    'x-enum-varnames': ['Name', 'SeriesCount', 'ChapterCount'],
    'x-enum-descriptions': ['Name', 'SeriesCount', 'ChapterCount'],
  })
  .openapi('PersonSortField')

const PersonSortOptionDtoSchema = z
  .strictObject({
    sortField: PersonSortFieldSchema.exactOptional(),
    isAscending: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonSortOptionDto')

const PersonFilterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    statements: z.array(PersonFilterStatementDtoSchema).nullable().exactOptional(),
    combination: FilterCombinationSchema.exactOptional(),
    sortOptions: PersonSortOptionDtoSchema.exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
    limitTo: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonFilterDto')

const PersonMergeDtoSchema = z
  .strictObject({ destId: z.int32(), srcId: z.int32() })
  .openapi({ required: ['destId', 'srcId'] })
  .openapi('PersonMergeDto')

const PersonalToCDtoSchema = z
  .strictObject({
    id: z.int32(),
    chapterId: z.int32(),
    pageNumber: z.int32(),
    title: z.string().nullable(),
    bookScrollId: z.string().nullable().exactOptional(),
    selectedText: z.string().nullable().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['chapterId', 'id', 'pageNumber', 'title'] })
  .openapi('PersonalToCDto')

const ProfileStatBarDtoSchema = z
  .strictObject({
    booksRead: z.int32().exactOptional(),
    comicsRead: z.int32().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    wordsRead: z.int32().exactOptional(),
    authorsRead: z.int32().exactOptional(),
    reviews: z.int32().exactOptional(),
    ratings: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileStatBarDto')

const ProgressDtoSchema = z
  .strictObject({
    volumeId: z.int32(),
    chapterId: z.int32(),
    pageNum: z.int32(),
    seriesId: z.int32(),
    libraryId: z.int32(),
    bookScrollId: z.string().nullable().exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['chapterId', 'libraryId', 'pageNum', 'seriesId', 'volumeId'] })
  .openapi('ProgressDto')

const PromoteCollectionsDtoSchema = z
  .strictObject({
    collectionIds: z.array(z.int32()).nullable().exactOptional(),
    promoted: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromoteCollectionsDto')

const PromoteReadingListsDtoSchema = z
  .strictObject({
    readingListIds: z.array(z.int32()).nullable().exactOptional(),
    promoted: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromoteReadingListsDto')

const PublicationStatusStatCountSchema = z
  .strictObject({
    value: PublicationStatusSchema.exactOptional(),
    count: z
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
  .openapi('PublicationStatusStatCount')

const QueryContextSchema = z
  .union([z.literal(1), z.literal(2), z.literal(4)])
  .openapi({
    description: 'Members:\n- `1` — None\n- `2` — Search\n- `4` — Dashboard',
    'x-enum-varnames': ['None', 'Search', 'Dashboard'],
    'x-enum-descriptions': ['None', 'Search', 'Dashboard'],
  })
  .openapi('QueryContext')

const ReadStatusTransitionRuleSchema = z
  .strictObject({
    enabled: z.boolean().exactOptional(),
    days: z.int32().exactOptional(),
    transitionStatus: ScrobbleReadStatusSchema.exactOptional(),
    excludedPublicationStatus: z.array(PublicationStatusSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadStatusTransitionRule')

const ReadTimeByHourDtoSchema = z
  .strictObject({
    dataSince: z.iso.datetime({ offset: true }).exactOptional(),
    stats: z.array(Int32StatCountSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadTimeByHourDto')

const ReaderModeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description:
      'Members:\n- `0` — Left and Right (LeftRight)\n- `1` — Up and Down (UpDown)\n- `2` — Webtoon',
    'x-enum-varnames': ['LeftRight', 'UpDown', 'Webtoon'],
    'x-enum-descriptions': ['Left and Right', 'Up and Down', 'Webtoon'],
  })
  .openapi('ReaderMode')

const ReadingActivityDataDtoSchema = z
  .strictObject({
    chapterId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    startPage: z.int32().exactOptional(),
    endPage: z.int32().exactOptional(),
    startTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    endTimeUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    wordsRead: z.int32().exactOptional(),
    totalPages: z.int32().exactOptional(),
    totalWords: z.int32().exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    chapterTitle: z.string().nullable().exactOptional(),
    clientInfo: ClientInfoDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingActivityDataDto')

const ReadingActivityGraphEntryDtoSchema = z
  .strictObject({
    date: z.iso.datetime({ offset: true }).exactOptional(),
    totalTimeReadingSeconds: z.int32().exactOptional(),
    totalPages: z.int32().exactOptional(),
    totalWords: z.int32().exactOptional(),
    totalChaptersFullyRead: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingActivityGraphEntryDto')

const ReadingDirectionSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — LeftToRight\n- `1` — RightToLeft',
    'x-enum-varnames': ['LeftToRight', 'RightToLeft'],
    'x-enum-descriptions': ['LeftToRight', 'RightToLeft'],
  })
  .openapi('ReadingDirection')

const ReadingHistoryChapterItemDtoSchema = z
  .strictObject({
    chapterId: z.int32().exactOptional(),
    label: z.string().nullable().exactOptional(),
    startTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    endTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    pagesRead: z.int32().exactOptional(),
    wordsRead: z.int32().exactOptional(),
    durationSeconds: z.int32().exactOptional(),
    startPage: z.int32().exactOptional(),
    endPage: z.int32().exactOptional(),
    totalPages: z.int32().exactOptional(),
    completed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingHistoryChapterItemDto')

const ReadingHistoryItemDtoSchema = z
  .strictObject({
    sessionDataIds: z.array(z.int32()).nullable().exactOptional(),
    sessionId: z.int32().exactOptional(),
    isGeneratedSession: z.boolean().exactOptional(),
    startTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    endTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    localDate: z.iso.datetime({ offset: true }).exactOptional(),
    seriesId: z.int32().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    seriesFormat: MangaFormatSchema.exactOptional(),
    chapters: z.array(ReadingHistoryChapterItemDtoSchema).nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    wordsRead: z.int32().exactOptional(),
    durationSeconds: z.int32().exactOptional(),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingHistoryItemDto')

const ReadingListTagDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable(),
    normalizedTitle: z.string().nullable(),
  })
  .openapi({ required: ['normalizedTitle', 'title'] })
  .openapi('ReadingListTagDto')

const ReadingListDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    promoted: z.boolean().exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    itemCount: z.int32().exactOptional(),
    startingYear: z.int32().exactOptional(),
    startingMonth: z.int32().exactOptional(),
    endingYear: z.int32().exactOptional(),
    endingMonth: z.int32().exactOptional(),
    ageRating: AgeRatingSchema,
    ownerUserName: z.string().nullable().exactOptional(),
    sourcePath: z.string().nullable().exactOptional(),
    downloadUrl: z.string().nullable().exactOptional(),
    shaHash: z.string().nullable().exactOptional(),
    provider: ReadingListProviderSchema.exactOptional(),
    lastSyncCheckUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastSyncedUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    totalItemsAtImport: z.int32().exactOptional(),
    tags: z.array(ReadingListTagDtoSchema).nullable().exactOptional(),
    canSync: z.boolean().exactOptional(),
  })
  .openapi({ required: ['ageRating'] })
  .openapi('ReadingListDto')

const ReadingListFilterFieldSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ])
  .openapi({
    description:
      'Members:\n- `1` — Title\n- `2` — ReleaseYear\n- `3` — ItemCount\n- `4` — Tags\n- `5` — Writer\n- `6` — Artist\n- `7` — Provider\n- `8` — MissingItemCount',
    'x-enum-varnames': [
      'Title',
      'ReleaseYear',
      'ItemCount',
      'Tags',
      'Writer',
      'Artist',
      'Provider',
      'MissingItemCount',
    ],
    'x-enum-descriptions': [
      'Title',
      'ReleaseYear',
      'ItemCount',
      'Tags',
      'Writer',
      'Artist',
      'Provider',
      'MissingItemCount',
    ],
  })
  .openapi('ReadingListFilterField')

const ReadingListFilterStatementDtoSchema = z
  .strictObject({
    comparison: FilterComparisonSchema.exactOptional(),
    field: ReadingListFilterFieldSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListFilterStatementDto')

const ReadingListSortFieldSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description:
      'Members:\n- `1` — Title\n- `2` — ReleaseYearStart\n- `3` — ReleaseYearEnd\n- `4` — ItemCount',
    'x-enum-varnames': ['Title', 'ReleaseYearStart', 'ReleaseYearEnd', 'ItemCount'],
    'x-enum-descriptions': ['Title', 'ReleaseYearStart', 'ReleaseYearEnd', 'ItemCount'],
  })
  .openapi('ReadingListSortField')

const ReadingListSortOptionDtoSchema = z
  .strictObject({
    sortField: ReadingListSortFieldSchema.exactOptional(),
    isAscending: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListSortOptionDto')

const ReadingListFilterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    statements: z.array(ReadingListFilterStatementDtoSchema).nullable().exactOptional(),
    combination: FilterCombinationSchema.exactOptional(),
    sortOptions: ReadingListSortOptionDtoSchema.exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
    limitTo: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListFilterDto')

const ReadingListInfoDtoSchema = z
  .strictObject({
    pages: z.int32().exactOptional(),
    wordCount: z
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
    isAllEpub: z.boolean().exactOptional(),
    minHoursToRead: z.int32().exactOptional(),
    maxHoursToRead: z.int32().exactOptional(),
    avgHoursToRead: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListInfoDto')

const ReadingListItemChapterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    range: z.string().nullable().exactOptional(),
    titleName: z.string().nullable().exactOptional(),
    minNumber: z.float32().exactOptional(),
    maxNumber: z.float32().exactOptional(),
    sortOrder: z.float32().exactOptional(),
    pages: z.int32().exactOptional(),
    isSpecial: z.boolean().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    summary: z.string().nullable().exactOptional(),
    writerName: z.string().nullable().exactOptional(),
    writerId: z.int32().nullable().exactOptional(),
    pencillerName: z.string().nullable().exactOptional(),
    pencillerId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListItemChapterDto')

const ReadingListItemVolumeDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    minNumber: z.float32().exactOptional(),
    maxNumber: z.float32().exactOptional(),
    seriesId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListItemVolumeDto')

const ReadingListItemDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    order: z.int32().exactOptional(),
    chapterId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    seriesName: z.string().nullable().exactOptional(),
    seriesSortName: z.string().nullable().exactOptional(),
    seriesFormat: MangaFormatSchema.exactOptional(),
    pagesRead: z.int32().exactOptional(),
    pagesTotal: z.int32().exactOptional().openapi({ deprecated: true }),
    chapterNumber: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    volumeNumber: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    chapterTitleName: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    volumeId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    title: z.string().nullable().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    releaseDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true }),
    readingListId: z.int32().exactOptional(),
    lastReadingProgressUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    fileSize: z
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
      .openapi({ type: 'integer', format: 'int64', deprecated: true }),
    summary: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    isSpecial: z.boolean().exactOptional().openapi({ deprecated: true }),
    chapter: ReadingListItemChapterDtoSchema.exactOptional(),
    volume: ReadingListItemVolumeDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingListItemDto')

const ReadingPaceDtoSchema = z
  .strictObject({
    hoursRead: z.int32().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    wordsRead: z.int32().exactOptional(),
    booksRead: z.int32().exactOptional(),
    comicsRead: z.int32().exactOptional(),
    daysInRange: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingPaceDto')

const ReadingProfileKindSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Default\n- `1` — User\n- `2` — Implicit',
    'x-enum-varnames': ['Default', 'User', 'Implicit'],
    'x-enum-descriptions': ['Default', 'User', 'Implicit'],
  })
  .openapi('ReadingProfileKind')

const ReadingSessionDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    startTimeUtc: z.iso.datetime({ offset: true }).exactOptional(),
    endTimeUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    isActive: z.boolean().exactOptional(),
    activityData: z.array(ReadingActivityDataDtoSchema).nullable().exactOptional(),
    userId: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadingSessionDto')

const RecommendedSeriesDtoSchema = z
  .strictObject({ series: SeriesDtoSchema, source: RecommendationSourceSchema.exactOptional() })
  .openapi({ required: ['series'] })
  .openapi('RecommendedSeriesDto')

const RecommendationDtoSchema = z
  .strictObject({
    ownedSeries: z.array(RecommendedSeriesDtoSchema).nullable().exactOptional(),
    externalSeries: z.array(ExternalSeriesDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecommendationDto')

const RefreshSeriesDtoSchema = z
  .strictObject({
    libraryId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    forceUpdate: z.boolean().exactOptional(),
    forceColorscape: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RefreshSeriesDto')

const RegisterDtoSchema = z
  .strictObject({
    username: z.string().min(1),
    email: z.string().nullable().exactOptional(),
    password: z.string().min(6).max(256),
  })
  .openapi({ required: ['password', 'username'] })
  .openapi('RegisterDto')

const RelatedSeriesDtoSchema = z
  .strictObject({
    sourceSeriesId: z.int32().exactOptional(),
    sequels: z.array(SeriesDtoSchema).nullable().exactOptional(),
    prequels: z.array(SeriesDtoSchema).nullable().exactOptional(),
    spinOffs: z.array(SeriesDtoSchema).nullable().exactOptional(),
    adaptations: z.array(SeriesDtoSchema).nullable().exactOptional(),
    sideStories: z.array(SeriesDtoSchema).nullable().exactOptional(),
    characters: z.array(SeriesDtoSchema).nullable().exactOptional(),
    contains: z.array(SeriesDtoSchema).nullable().exactOptional(),
    others: z.array(SeriesDtoSchema).nullable().exactOptional(),
    alternativeSettings: z.array(SeriesDtoSchema).nullable().exactOptional(),
    alternativeVersions: z.array(SeriesDtoSchema).nullable().exactOptional(),
    doujinshis: z.array(SeriesDtoSchema).nullable().exactOptional(),
    parent: z.array(SeriesDtoSchema).nullable().exactOptional(),
    editions: z.array(SeriesDtoSchema).nullable().exactOptional(),
    annuals: z.array(SeriesDtoSchema).nullable().exactOptional(),
    cameos: z.array(SeriesDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedSeriesDto')

const RemapRuleDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    normalizedCblSeriesName: z.string().nullable().exactOptional(),
    cblSeriesName: z.string().nullable().exactOptional(),
    cblVolume: z.string().nullable().exactOptional(),
    cblNumber: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    volumeId: z.int32().nullable().exactOptional(),
    volumeNumber: z.string().nullable().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    kind: CblRemapRuleKindSchema.exactOptional(),
    chapterRange: z.string().nullable().exactOptional(),
    chapterTitleName: z.string().nullable().exactOptional(),
    chapterIsSpecial: z.boolean().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    seriesNameAtMapping: z.string().nullable().exactOptional(),
    appUserId: z.int32().exactOptional(),
    isGlobal: z.boolean().exactOptional(),
    createdByUserName: z.string().nullable().exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemapRuleDto')

const RemoveBookmarkForSeriesDtoSchema = z
  .strictObject({ seriesId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('RemoveBookmarkForSeriesDto')

const RenewKavitaPlusLicenseDtoSchema = z
  .strictObject({ email: z.email().min(1), billingInterval: KavitaPlusBillingIntervalSchema })
  .openapi({ required: ['billingInterval', 'email'] })
  .openapi('RenewKavitaPlusLicenseDto')

const RereadChapterDtoSchema = z
  .strictObject({
    libraryId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    volumeId: z.int32().exactOptional(),
    chapterId: z.int32().exactOptional(),
    label: z.string().nullable().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RereadChapterDto')

const RereadDtoSchema = z
  .strictObject({
    shouldPrompt: z.boolean(),
    timePrompt: z.boolean().exactOptional(),
    fullReread: z.boolean().exactOptional(),
    daysSinceLastRead: z.int32().exactOptional(),
    chapterOnContinue: RereadChapterDtoSchema.exactOptional(),
    chapterOnReread: RereadChapterDtoSchema.exactOptional(),
  })
  .openapi({ required: ['shouldPrompt'] })
  .openapi('RereadDto')

const ResetPasswordDtoSchema = z
  .strictObject({
    userName: z.string().min(1),
    password: z.string().min(6).max(256),
    oldPassword: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['password', 'userName'] })
  .openapi('ResetPasswordDto')

const ReviewScrobbleTargetSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `0` — Private\n- `1` — Friends\n- `2` — Public',
    'x-enum-varnames': ['Private', 'Friends', 'Public'],
    'x-enum-descriptions': ['Private', 'Friends', 'Public'],
  })
  .openapi('ReviewScrobbleTarget')

const RotateAuthKeyRequestDtoSchema = z
  .strictObject({
    keyLength: z.int32().min(8).max(32),
    name: z.string().min(1),
    expiresUtc: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['keyLength', 'name'] })
  .openapi('RotateAuthKeyRequestDto')

const RunMetadataMappingsRequestDtoSchema = z
  .strictObject({
    allLibraries: z.boolean().exactOptional(),
    includedLibraries: z.array(z.int32()).nullable().exactOptional(),
    excludedLibraries: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RunMetadataMappingsRequestDto')

const ScalingOptionSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description:
      'Members:\n- `0` — FitToHeight\n- `1` — FitToWidth\n- `2` — Original\n- `3` — Automatic',
    'x-enum-varnames': ['FitToHeight', 'FitToWidth', 'Original', 'Automatic'],
    'x-enum-descriptions': ['FitToHeight', 'FitToWidth', 'Original', 'Automatic'],
  })
  .openapi('ScalingOption')

const ScanFolderDtoSchema = z
  .strictObject({
    apiKey: z.string().nullable().exactOptional(),
    folderPath: z.string().nullable().exactOptional(),
    abortOnNoSeriesMatch: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScanFolderDto')

const ScrobbleErrorDtoSchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional(),
    details: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrobbleErrorDto')

const ScrobbleEventDtoSchema = z
  .strictObject({
    id: z
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
    seriesName: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    isProcessed: z.boolean().exactOptional(),
    volumeNumber: z.float32().nullable().exactOptional(),
    chapterNumber: z.int32().nullable().exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    rating: z.float32().nullable().exactOptional(),
    readStatus: ScrobbleReadStatusSchema.exactOptional(),
    scrobbleEventType: ScrobbleEventTypeSchema.exactOptional(),
    scrobbleProvider: ScrobbleProviderSchema.exactOptional(),
    isErrored: z.boolean().exactOptional(),
    errorDetails: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrobbleEventDto')

const ScrobbleEventSortFieldSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ])
  .openapi({
    description:
      'Members:\n- `0` — None\n- `1` — Created\n- `2` — LastModified\n- `3` — Type\n- `4` — Series\n- `5` — IsProcessed\n- `6` — ScrobbleEventFilter',
    'x-enum-varnames': [
      'None',
      'Created',
      'LastModified',
      'Type',
      'Series',
      'IsProcessed',
      'ScrobbleEventFilter',
    ],
    'x-enum-descriptions': [
      'None',
      'Created',
      'LastModified',
      'Type',
      'Series',
      'IsProcessed',
      'ScrobbleEventFilter',
    ],
  })
  .openapi('ScrobbleEventSortField')

const ScrobbleEventFilterSchema = z
  .strictObject({
    field: ScrobbleEventSortFieldSchema.exactOptional(),
    isDescending: z.boolean().exactOptional(),
    query: z.string().nullable().exactOptional(),
    includeReviews: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrobbleEventFilter')

const ScrobbleHoldDtoSchema = z
  .strictObject({
    seriesName: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrobbleHoldDto')

const ScrobbleProviderSettingsDtoSchema = z
  .strictObject({
    progressScrobbling: z.boolean().exactOptional(),
    wantToReadSync: z.boolean().exactOptional(),
    ratingScrobbling: z.boolean().exactOptional(),
    reviewsScrobbling: z.boolean().exactOptional(),
    reviewScrobbleTarget: ReviewScrobbleTargetSchema.exactOptional(),
    allLibraries: z.boolean().exactOptional(),
    libraries: z.array(z.int32()).nullable().exactOptional(),
    highestAgeRating: AgeRatingSchema.exactOptional(),
    inactiveSeriesRule: ReadStatusTransitionRuleSchema.exactOptional(),
    droppedSeriesRule: ReadStatusTransitionRuleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrobbleProviderSettingsDto')

const ScrobbleProviderDtoSchema = z
  .strictObject({
    provider: ScrobbleProviderSchema.exactOptional(),
    userName: z.string().nullable().exactOptional(),
    authenticationToken: z.string().nullable().exactOptional(),
    refreshToken: z.string().nullable().exactOptional(),
    validUntilUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastSyncedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    hasRunScrobbleEventGeneration: z.boolean().exactOptional(),
    scrobbleEventGenerationRan: z.iso.datetime({ offset: true }).exactOptional(),
    settings: ScrobbleProviderSettingsDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrobbleProviderDto')

const SearchResultDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    originalName: z.string().nullable().exactOptional(),
    sortName: z.string().nullable().exactOptional(),
    localizedName: z.string().nullable().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    libraryName: z.string().nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    releaseYear: z.int32().exactOptional(),
    volumeCount: z.int32().exactOptional(),
    chapterCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResultDto')

const SearchResultGroupDtoSchema = z
  .strictObject({
    libraries: z.array(LibraryDtoSchema).nullable().exactOptional(),
    series: z.array(SearchResultDtoSchema).nullable().exactOptional(),
    collections: z.array(AppUserCollectionDtoSchema).nullable().exactOptional(),
    readingLists: z.array(ReadingListDtoSchema).nullable().exactOptional(),
    persons: z.array(PersonDtoSchema).nullable().exactOptional(),
    genres: z.array(GenreTagDtoSchema).nullable().exactOptional(),
    tags: z.array(TagDtoSchema).nullable().exactOptional(),
    files: z.array(MangaFileDtoSchema).nullable().exactOptional(),
    chapters: z.array(ChapterDtoSchema).nullable().exactOptional(),
    bookmarks: z.array(BookmarkSearchResultDtoSchema).nullable().exactOptional(),
    annotations: z.array(AnnotationDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResultGroupDto')

const SendSeriesToEmailDeviceDtoSchema = z
  .strictObject({ deviceId: z.int32().exactOptional(), seriesId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('SendSeriesToEmailDeviceDto')

const SendToEmailDeviceDtoSchema = z
  .strictObject({
    deviceId: z.int32().exactOptional(),
    chapterIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendToEmailDeviceDto')

const SeriesByIdsDtoSchema = z
  .strictObject({ seriesIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('SeriesByIdsDto')

const VolumeDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    minNumber: z.float32().exactOptional(),
    maxNumber: z.float32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    number: z.int32().exactOptional().openapi({ deprecated: true }),
    pages: z.int32().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    lastModified: z.iso.datetime({ offset: true }).exactOptional(),
    seriesId: z.int32().exactOptional(),
    chapters: z.array(ChapterDtoSchema).nullable().exactOptional(),
    minHoursToRead: z.int32().exactOptional(),
    maxHoursToRead: z.int32().exactOptional(),
    avgHoursToRead: z.float32().exactOptional(),
    wordCount: z
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
    coverImage: z.string().nullable().exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().exactOptional(),
    cbrId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VolumeDto')

const SeriesDetailDtoSchema = z
  .strictObject({
    specials: z.array(ChapterDtoSchema).nullable().exactOptional(),
    chapters: z.array(ChapterDtoSchema).nullable().exactOptional(),
    volumes: z.array(VolumeDtoSchema).nullable().exactOptional(),
    storylineChapters: z.array(ChapterDtoSchema).nullable().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    unreadCount: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesDetailDto')

const SeriesDetailPlusDtoSchema = z
  .strictObject({
    recommendations: RecommendationDtoSchema.exactOptional(),
    reviews: z.array(UserReviewDtoSchema).nullable().exactOptional(),
    ratings: z.array(RatingDtoSchema).nullable().exactOptional(),
    series: ExternalSeriesDetailDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesDetailPlusDto')

const SeriesDtoStatCountSchema = z
  .strictObject({
    value: SeriesDtoSchema.exactOptional(),
    count: z
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
  .openapi('SeriesDtoStatCount')

const SeriesFilterFieldSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
    z.literal(28),
    z.literal(29),
    z.literal(30),
    z.literal(31),
    z.literal(32),
    z.literal(33),
    z.literal(34),
  ])
  .openapi({
    description:
      'Members:\n- `0` — Summary\n- `1` — SeriesName\n- `2` — PublicationStatus\n- `3` — Languages\n- `4` — AgeRating\n- `5` — UserRating\n- `6` — Tags\n- `7` — CollectionTags\n- `8` — Translators\n- `9` — Characters\n- `10` — Publisher\n- `11` — Editor\n- `12` — CoverArtist\n- `13` — Letterer\n- `14` — Colorist\n- `15` — Inker\n- `16` — Penciller\n- `17` — Writers\n- `18` — Genres\n- `19` — Libraries\n- `20` — ReadProgress\n- `21` — Formats\n- `22` — ReleaseYear\n- `23` — ReadTime\n- `24` — Path\n- `25` — FilePath\n- `26` — WantToRead\n- `27` — ReadingDate\n- `28` — AverageRating\n- `29` — Imprint\n- `30` — Team\n- `31` — Location\n- `32` — ReadLast\n- `33` — FileSize\n- `34` — CollapseSeriesRelationships',
    'x-enum-varnames': [
      'Summary',
      'SeriesName',
      'PublicationStatus',
      'Languages',
      'AgeRating',
      'UserRating',
      'Tags',
      'CollectionTags',
      'Translators',
      'Characters',
      'Publisher',
      'Editor',
      'CoverArtist',
      'Letterer',
      'Colorist',
      'Inker',
      'Penciller',
      'Writers',
      'Genres',
      'Libraries',
      'ReadProgress',
      'Formats',
      'ReleaseYear',
      'ReadTime',
      'Path',
      'FilePath',
      'WantToRead',
      'ReadingDate',
      'AverageRating',
      'Imprint',
      'Team',
      'Location',
      'ReadLast',
      'FileSize',
      'CollapseSeriesRelationships',
    ],
    'x-enum-descriptions': [
      'Summary',
      'SeriesName',
      'PublicationStatus',
      'Languages',
      'AgeRating',
      'UserRating',
      'Tags',
      'CollectionTags',
      'Translators',
      'Characters',
      'Publisher',
      'Editor',
      'CoverArtist',
      'Letterer',
      'Colorist',
      'Inker',
      'Penciller',
      'Writers',
      'Genres',
      'Libraries',
      'ReadProgress',
      'Formats',
      'ReleaseYear',
      'ReadTime',
      'Path',
      'FilePath',
      'WantToRead',
      'ReadingDate',
      'AverageRating',
      'Imprint',
      'Team',
      'Location',
      'ReadLast',
      'FileSize',
      'CollapseSeriesRelationships',
    ],
  })
  .openapi('SeriesFilterField')

const SeriesFilterStatementDtoSchema = z
  .strictObject({
    comparison: FilterComparisonSchema.exactOptional(),
    field: SeriesFilterFieldSchema.exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesFilterStatementDto')

const SeriesSortFieldSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
  ])
  .openapi({
    description:
      'Members:\n- `1` — SortName\n- `2` — CreatedDate\n- `3` — LastModifiedDate\n- `4` — LastChapterAdded\n- `5` — TimeToRead\n- `6` — ReleaseYear\n- `7` — ReadProgress\n- `8` — AverageRating\n- `9` — Random\n- `10` — UserRating\n- `11` — UnreadChapterCount',
    'x-enum-varnames': [
      'SortName',
      'CreatedDate',
      'LastModifiedDate',
      'LastChapterAdded',
      'TimeToRead',
      'ReleaseYear',
      'ReadProgress',
      'AverageRating',
      'Random',
      'UserRating',
      'UnreadChapterCount',
    ],
    'x-enum-descriptions': [
      'SortName',
      'CreatedDate',
      'LastModifiedDate',
      'LastChapterAdded',
      'TimeToRead',
      'ReleaseYear',
      'ReadProgress',
      'AverageRating',
      'Random',
      'UserRating',
      'UnreadChapterCount',
    ],
  })
  .openapi('SeriesSortField')

const SeriesSortOptionDtoSchema = z
  .strictObject({
    sortField: SeriesSortFieldSchema.exactOptional(),
    isAscending: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesSortOptionDto')

const SeriesFilterV2DtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    statements: z.array(SeriesFilterStatementDtoSchema).nullable().exactOptional(),
    combination: FilterCombinationSchema.exactOptional(),
    sortOptions: SeriesSortOptionDtoSchema.exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
    limitTo: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesFilterV2Dto')

const SeriesMetadataDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    genres: z.array(GenreTagDtoSchema).nullable().exactOptional(),
    tags: z.array(TagDtoSchema).nullable().exactOptional(),
    writers: z.array(PersonDtoSchema).nullable().exactOptional(),
    coverArtists: z.array(PersonDtoSchema).nullable().exactOptional(),
    publishers: z.array(PersonDtoSchema).nullable().exactOptional(),
    characters: z.array(PersonDtoSchema).nullable().exactOptional(),
    pencillers: z.array(PersonDtoSchema).nullable().exactOptional(),
    inkers: z.array(PersonDtoSchema).nullable().exactOptional(),
    imprints: z.array(PersonDtoSchema).nullable().exactOptional(),
    colorists: z.array(PersonDtoSchema).nullable().exactOptional(),
    letterers: z.array(PersonDtoSchema).nullable().exactOptional(),
    editors: z.array(PersonDtoSchema).nullable().exactOptional(),
    translators: z.array(PersonDtoSchema).nullable().exactOptional(),
    teams: z.array(PersonDtoSchema).nullable().exactOptional(),
    locations: z.array(PersonDtoSchema).nullable().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    releaseYear: z.int32().exactOptional(),
    language: z.string().nullable().exactOptional(),
    maxCount: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
    publicationStatus: PublicationStatusSchema.exactOptional(),
    webLinks: z.string().nullable().exactOptional(),
    languageLocked: z.boolean().exactOptional(),
    summaryLocked: z.boolean().exactOptional(),
    ageRatingLocked: z.boolean().exactOptional(),
    publicationStatusLocked: z.boolean().exactOptional(),
    genresLocked: z.boolean().exactOptional(),
    tagsLocked: z.boolean().exactOptional(),
    writerLocked: z.boolean().exactOptional(),
    characterLocked: z.boolean().exactOptional(),
    coloristLocked: z.boolean().exactOptional(),
    editorLocked: z.boolean().exactOptional(),
    inkerLocked: z.boolean().exactOptional(),
    imprintLocked: z.boolean().exactOptional(),
    lettererLocked: z.boolean().exactOptional(),
    pencillerLocked: z.boolean().exactOptional(),
    publisherLocked: z.boolean().exactOptional(),
    translatorLocked: z.boolean().exactOptional(),
    teamLocked: z.boolean().exactOptional(),
    locationLocked: z.boolean().exactOptional(),
    coverArtistLocked: z.boolean().exactOptional(),
    releaseYearLocked: z.boolean().exactOptional(),
    seriesId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeriesMetadataDto')

const ServerInfoSlimDtoSchema = z
  .strictObject({
    installId: z.string().nullable(),
    isDocker: z.boolean().exactOptional(),
    kavitaVersion: z.string().nullable(),
    firstInstallDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    firstInstallVersion: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['installId', 'kavitaVersion'] })
  .openapi('ServerInfoSlimDto')

const SmtpConfigDtoSchema = z
  .strictObject({
    senderAddress: z.string().nullable().exactOptional(),
    senderDisplayName: z.string().nullable().exactOptional(),
    userName: z.string().nullable().exactOptional(),
    password: z.string().nullable().exactOptional(),
    host: z.string().nullable().exactOptional(),
    port: z.int32().exactOptional(),
    enableSsl: z.boolean().exactOptional(),
    sizeLimit: z.int32().exactOptional(),
    customizedTemplates: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SmtpConfigDto')

const ServerSettingDtoSchema = z
  .strictObject({
    cacheDirectory: z.string().nullable().exactOptional(),
    taskScan: z.string().nullable().exactOptional(),
    taskBackup: z.string().nullable().exactOptional(),
    taskCleanup: z.string().nullable().exactOptional(),
    taskCblSync: z.string().nullable().exactOptional(),
    loggingLevel: z.string().nullable().exactOptional(),
    port: z.int32().exactOptional(),
    ipAddresses: z.string().nullable().exactOptional(),
    allowStatCollection: z.boolean().exactOptional(),
    enableOpds: z.boolean().exactOptional(),
    baseUrl: z.string().nullable().exactOptional(),
    bookmarksDirectory: z.string().nullable().exactOptional(),
    installVersion: z.string().nullable().exactOptional(),
    installId: z.string().nullable().exactOptional(),
    encodeMediaAs: EncodeFormatSchema.exactOptional(),
    totalBackups: z.int32().exactOptional(),
    enableFolderWatching: z.boolean().exactOptional(),
    totalLogs: z.int32().exactOptional(),
    hostName: z.string().nullable().exactOptional(),
    cacheSize: z
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
    onDeckProgressDays: z.int32().exactOptional(),
    onDeckUpdateDays: z.int32().exactOptional(),
    coverImageSize: CoverImageSizeSchema.exactOptional(),
    pdfRenderResolution: PdfRenderResolutionSchema.exactOptional(),
    smtpConfig: SmtpConfigDtoSchema.exactOptional(),
    oidcConfig: OidcConfigDtoSchema.exactOptional(),
    firstInstallDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    firstInstallVersion: z.string().nullable().exactOptional(),
    statsApiHits: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServerSettingDto')

const ServerStatisticsDtoSchema = z
  .strictObject({
    chapterCount: z
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
    volumeCount: z
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
    seriesCount: z
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
    totalFiles: z
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
    totalSize: z
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
    totalGenres: z
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
    totalTags: z
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
    totalPeople: z
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
    totalReadingTime: z
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
  .openapi('ServerStatisticsDto')

const SideNavStreamTypeSchema = z
  .union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
  ])
  .openapi({
    description:
      'Members:\n- `1` — Collections\n- `2` — ReadingLists\n- `3` — Bookmarks\n- `4` — Library\n- `5` — SmartFilter\n- `6` — ExternalSource\n- `7` — AllSeries\n- `8` — WantToRead\n- `9` — BrowsePeople',
    'x-enum-varnames': [
      'Collections',
      'ReadingLists',
      'Bookmarks',
      'Library',
      'SmartFilter',
      'ExternalSource',
      'AllSeries',
      'WantToRead',
      'BrowsePeople',
    ],
    'x-enum-descriptions': [
      'Collections',
      'ReadingLists',
      'Bookmarks',
      'Library',
      'SmartFilter',
      'ExternalSource',
      'AllSeries',
      'WantToRead',
      'BrowsePeople',
    ],
  })
  .openapi('SideNavStreamType')

const SideNavStreamDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable(),
    isProvided: z.boolean().exactOptional(),
    order: z.int32().exactOptional(),
    smartFilterEncoded: z.string().nullable().exactOptional(),
    smartFilterId: z.int32().nullable().exactOptional(),
    externalSourceId: z.int32().exactOptional(),
    externalSource: ExternalSourceDtoSchema.exactOptional(),
    streamType: SideNavStreamTypeSchema.exactOptional(),
    visible: z.boolean().exactOptional(),
    libraryId: z.int32().nullable().exactOptional(),
    library: LibraryDtoSchema.exactOptional(),
    entityType: FilterEntityTypeSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('SideNavStreamDto')

const ThemeProviderSchema = z
  .union([z.literal(1), z.literal(2)])
  .openapi({
    description: 'Members:\n- `1` — System\n- `2` — Custom',
    'x-enum-varnames': ['System', 'Custom'],
    'x-enum-descriptions': ['System', 'Custom'],
  })
  .openapi('ThemeProvider')

const SiteThemeDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable(),
    normalizedName: z.string().nullable(),
    fileName: z.string().nullable(),
    isDefault: z.boolean().exactOptional(),
    provider: ThemeProviderSchema.exactOptional(),
    previewUrls: z.array(z.string()).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    author: z.string().nullable().exactOptional(),
    compatibleVersion: z.string().nullable().exactOptional(),
    selector: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['fileName', 'name', 'normalizedName'] })
  .openapi('SiteThemeDto')

const SmartFilterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable(),
    filter: z.string().nullable(),
    entityType: FilterEntityTypeSchema,
  })
  .openapi({ required: ['entityType', 'filter', 'name'] })
  .openapi('SmartFilterDto')

const StatBucketDtoSchema = z
  .strictObject({
    rangeStart: z.int32().exactOptional(),
    rangeEnd: z.int32().nullable().exactOptional(),
    count: z.int32().exactOptional(),
    percentage: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatBucketDto')

const SpreadStatsDtoSchema = z
  .strictObject({
    buckets: z.array(StatBucketDtoSchema).nullable().exactOptional(),
    totalCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpreadStatsDto')

const StandaloneChapterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    range: z.string().nullable().exactOptional(),
    number: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    minNumber: z.float32().exactOptional(),
    maxNumber: z.float32().exactOptional(),
    sortOrder: z.float32().exactOptional(),
    pages: z.int32().exactOptional(),
    isSpecial: z.boolean().exactOptional(),
    title: z.string().nullable().exactOptional(),
    files: z.array(MangaFileDtoSchema).nullable().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    totalReads: z.int32().exactOptional(),
    lastReadingProgressUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastReadingProgress: z.iso.datetime({ offset: true }).exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    volumeId: z.int32().exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    titleName: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    wordCount: z
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
    minHoursToRead: z.int32().exactOptional(),
    maxHoursToRead: z.int32().exactOptional(),
    avgHoursToRead: z.float32().exactOptional(),
    webLinks: z.string().nullable().exactOptional(),
    isbn: z.string().nullable().exactOptional(),
    writers: z.array(PersonDtoSchema).nullable().exactOptional(),
    coverArtists: z.array(PersonDtoSchema).nullable().exactOptional(),
    publishers: z.array(PersonDtoSchema).nullable().exactOptional(),
    characters: z.array(PersonDtoSchema).nullable().exactOptional(),
    pencillers: z.array(PersonDtoSchema).nullable().exactOptional(),
    inkers: z.array(PersonDtoSchema).nullable().exactOptional(),
    imprints: z.array(PersonDtoSchema).nullable().exactOptional(),
    colorists: z.array(PersonDtoSchema).nullable().exactOptional(),
    letterers: z.array(PersonDtoSchema).nullable().exactOptional(),
    editors: z.array(PersonDtoSchema).nullable().exactOptional(),
    translators: z.array(PersonDtoSchema).nullable().exactOptional(),
    teams: z.array(PersonDtoSchema).nullable().exactOptional(),
    locations: z.array(PersonDtoSchema).nullable().exactOptional(),
    genres: z.array(GenreTagDtoSchema).nullable().exactOptional(),
    tags: z.array(TagDtoSchema).nullable().exactOptional(),
    publicationStatus: PublicationStatusSchema.exactOptional(),
    language: z.string().nullable().exactOptional(),
    count: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
    languageLocked: z.boolean().exactOptional(),
    summaryLocked: z.boolean().exactOptional(),
    ageRatingLocked: z.boolean().exactOptional(),
    publicationStatusLocked: z.boolean().exactOptional(),
    genresLocked: z.boolean().exactOptional(),
    tagsLocked: z.boolean().exactOptional(),
    writerLocked: z.boolean().exactOptional(),
    characterLocked: z.boolean().exactOptional(),
    coloristLocked: z.boolean().exactOptional(),
    editorLocked: z.boolean().exactOptional(),
    inkerLocked: z.boolean().exactOptional(),
    imprintLocked: z.boolean().exactOptional(),
    lettererLocked: z.boolean().exactOptional(),
    pencillerLocked: z.boolean().exactOptional(),
    publisherLocked: z.boolean().exactOptional(),
    translatorLocked: z.boolean().exactOptional(),
    teamLocked: z.boolean().exactOptional(),
    locationLocked: z.boolean().exactOptional(),
    coverArtistLocked: z.boolean().exactOptional(),
    releaseDateLocked: z.boolean().exactOptional(),
    titleNameLocked: z.boolean().exactOptional(),
    sortOrderLocked: z.boolean().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().exactOptional(),
    cbrId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    libraryId: z.int32().exactOptional(),
    libraryType: LibraryTypeSchema.exactOptional(),
    volumeTitle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StandaloneChapterDto')

const StringStatCountSchema = z
  .strictObject({
    value: z.string().nullable().exactOptional(),
    count: z
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
  .openapi('StringStatCount')

const StringBreakDownDtoSchema = z
  .strictObject({
    data: z.array(StringStatCountSchema).nullable().exactOptional(),
    total: z.int32().exactOptional(),
    totalOptions: z.int32().exactOptional(),
    missing: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringBreakDownDto')

const TachiyomiChapterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    range: z.string().nullable().exactOptional(),
    minNumber: z.float32().exactOptional(),
    maxNumber: z.float32().exactOptional(),
    sortOrder: z.float32().exactOptional(),
    pages: z.int32().exactOptional(),
    isSpecial: z.boolean().exactOptional(),
    title: z.string().nullable().exactOptional(),
    files: z.array(MangaFileDtoSchema).nullable().exactOptional(),
    pagesRead: z.int32().exactOptional(),
    totalReads: z.int32().exactOptional(),
    lastReadingProgressUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastReadingProgress: z.iso.datetime({ offset: true }).exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    volumeId: z.int32().exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    lastModifiedUtc: z.iso.datetime({ offset: true }).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    titleName: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    wordCount: z
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
    volumeTitle: z.string().nullable().exactOptional(),
    minHoursToRead: z.int32().exactOptional(),
    maxHoursToRead: z.int32().exactOptional(),
    avgHoursToRead: z.float32().exactOptional(),
    webLinks: z.string().nullable().exactOptional(),
    isbn: z.string().nullable().exactOptional(),
    writers: z.array(PersonDtoSchema).nullable().exactOptional(),
    coverArtists: z.array(PersonDtoSchema).nullable().exactOptional(),
    publishers: z.array(PersonDtoSchema).nullable().exactOptional(),
    characters: z.array(PersonDtoSchema).nullable().exactOptional(),
    pencillers: z.array(PersonDtoSchema).nullable().exactOptional(),
    inkers: z.array(PersonDtoSchema).nullable().exactOptional(),
    imprints: z.array(PersonDtoSchema).nullable().exactOptional(),
    colorists: z.array(PersonDtoSchema).nullable().exactOptional(),
    letterers: z.array(PersonDtoSchema).nullable().exactOptional(),
    editors: z.array(PersonDtoSchema).nullable().exactOptional(),
    translators: z.array(PersonDtoSchema).nullable().exactOptional(),
    teams: z.array(PersonDtoSchema).nullable().exactOptional(),
    locations: z.array(PersonDtoSchema).nullable().exactOptional(),
    genres: z.array(GenreTagDtoSchema).nullable().exactOptional(),
    tags: z.array(TagDtoSchema).nullable().exactOptional(),
    publicationStatus: PublicationStatusSchema.exactOptional(),
    language: z.string().nullable().exactOptional(),
    count: z.int32().exactOptional(),
    totalCount: z.int32().exactOptional(),
    languageLocked: z.boolean().exactOptional(),
    summaryLocked: z.boolean().exactOptional(),
    ageRatingLocked: z.boolean().exactOptional(),
    publicationStatusLocked: z.boolean().exactOptional(),
    genresLocked: z.boolean().exactOptional(),
    tagsLocked: z.boolean().exactOptional(),
    writerLocked: z.boolean().exactOptional(),
    characterLocked: z.boolean().exactOptional(),
    coloristLocked: z.boolean().exactOptional(),
    editorLocked: z.boolean().exactOptional(),
    inkerLocked: z.boolean().exactOptional(),
    imprintLocked: z.boolean().exactOptional(),
    lettererLocked: z.boolean().exactOptional(),
    pencillerLocked: z.boolean().exactOptional(),
    publisherLocked: z.boolean().exactOptional(),
    translatorLocked: z.boolean().exactOptional(),
    teamLocked: z.boolean().exactOptional(),
    locationLocked: z.boolean().exactOptional(),
    coverArtistLocked: z.boolean().exactOptional(),
    releaseDateLocked: z.boolean().exactOptional(),
    titleNameLocked: z.boolean().exactOptional(),
    sortOrderLocked: z.boolean().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
    format: MangaFormatSchema.exactOptional(),
    aniListId: z.int32().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().exactOptional(),
    cbrId: z.int32().exactOptional(),
    number: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TachiyomiChapterDto')

const TagDtoStatCountSchema = z
  .strictObject({
    value: TagDtoSchema.exactOptional(),
    count: z
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
  .openapi('TagDtoStatCount')

const TokenRequestDtoSchema = z
  .strictObject({
    token: z.string().nullable().exactOptional(),
    refreshToken: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TokenRequestDto')

const TokenValidityInfoDtoSchema = z
  .strictObject({
    provider: ScrobbleProviderSchema.exactOptional(),
    validUntilUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TokenValidityInfoDto')

const TopReadDtoSchema = z
  .strictObject({
    userId: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    comicsTime: z.float32().exactOptional(),
    booksTime: z.float32().exactOptional(),
    mangaTime: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TopReadDto')

const UpdateAgeRestrictionDtoSchema = z
  .strictObject({ ageRating: AgeRatingSchema, includeUnknowns: z.boolean() })
  .openapi({ required: ['ageRating', 'includeUnknowns'] })
  .openapi('UpdateAgeRestrictionDto')

const UpdateChapterDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    genres: z.array(GenreTagDtoSchema).nullable().exactOptional(),
    tags: z.array(TagDtoSchema).nullable().exactOptional(),
    writers: z.array(PersonDtoSchema).nullable().exactOptional(),
    coverArtists: z.array(PersonDtoSchema).nullable().exactOptional(),
    publishers: z.array(PersonDtoSchema).nullable().exactOptional(),
    characters: z.array(PersonDtoSchema).nullable().exactOptional(),
    pencillers: z.array(PersonDtoSchema).nullable().exactOptional(),
    inkers: z.array(PersonDtoSchema).nullable().exactOptional(),
    imprints: z.array(PersonDtoSchema).nullable().exactOptional(),
    colorists: z.array(PersonDtoSchema).nullable().exactOptional(),
    letterers: z.array(PersonDtoSchema).nullable().exactOptional(),
    editors: z.array(PersonDtoSchema).nullable().exactOptional(),
    translators: z.array(PersonDtoSchema).nullable().exactOptional(),
    teams: z.array(PersonDtoSchema).nullable().exactOptional(),
    locations: z.array(PersonDtoSchema).nullable().exactOptional(),
    ageRating: AgeRatingSchema.exactOptional(),
    language: z.string().nullable().exactOptional(),
    ageRatingLocked: z.boolean().exactOptional(),
    titleNameLocked: z.boolean().exactOptional(),
    genresLocked: z.boolean().exactOptional(),
    tagsLocked: z.boolean().exactOptional(),
    writerLocked: z.boolean().exactOptional(),
    characterLocked: z.boolean().exactOptional(),
    coloristLocked: z.boolean().exactOptional(),
    editorLocked: z.boolean().exactOptional(),
    inkerLocked: z.boolean().exactOptional(),
    imprintLocked: z.boolean().exactOptional(),
    lettererLocked: z.boolean().exactOptional(),
    pencillerLocked: z.boolean().exactOptional(),
    publisherLocked: z.boolean().exactOptional(),
    translatorLocked: z.boolean().exactOptional(),
    teamLocked: z.boolean().exactOptional(),
    locationLocked: z.boolean().exactOptional(),
    coverArtistLocked: z.boolean().exactOptional(),
    languageLocked: z.boolean().exactOptional(),
    summaryLocked: z.boolean().exactOptional(),
    isbnLocked: z.boolean().exactOptional(),
    releaseDateLocked: z.boolean().exactOptional(),
    sortOrder: z.float32().exactOptional(),
    sortOrderLocked: z.boolean().exactOptional(),
    webLinks: z.string().nullable().exactOptional(),
    isbn: z.string().nullable().exactOptional(),
    releaseDate: z.iso.datetime({ offset: true }).exactOptional(),
    titleName: z.string().nullable().exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().nullable().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().nullable().exactOptional(),
    cbrId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateChapterDto')

const UpdateClientDeviceNameDtoSchema = z
  .strictObject({
    deviceId: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateClientDeviceNameDto')

const UpdateDefaultThemeDtoSchema = z
  .strictObject({ themeId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateDefaultThemeDto')

const UpdateEmailDeviceDtoSchema = z
  .strictObject({
    id: z.int32(),
    name: z.string().min(1),
    platform: EmailDevicePlatformSchema,
    emailAddress: z.string().min(1),
  })
  .openapi({ required: ['emailAddress', 'id', 'name', 'platform'] })
  .openapi('UpdateEmailDeviceDto')

const UpdateEmailDtoSchema = z
  .strictObject({
    email: z.string().nullable().exactOptional(),
    password: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEmailDto')

const UpdateLibraryDtoSchema = z
  .strictObject({
    id: z.int32(),
    name: z.string().min(1),
    type: LibraryTypeSchema,
    folders: z.array(z.string()),
    folderWatchMode: FolderWatchModeSchema.exactOptional(),
    includeInDashboard: z.boolean(),
    includeInSearch: z.boolean(),
    manageCollections: z.boolean(),
    manageReadingLists: z.boolean(),
    allowScrobbling: z.boolean(),
    allowMetadataMatching: z.boolean(),
    enableMetadata: z.boolean(),
    removePrefixForSortName: z.boolean(),
    inheritWebLinksFromFirstChapter: z.boolean(),
    defaultLanguage: z.string().nullable().exactOptional(),
    metadataProvider: MetadataProviderSchema.exactOptional(),
    fileGroupTypes: z.array(FileTypeGroupSchema),
    excludePatterns: z.array(z.string()),
  })
  .openapi({
    required: [
      'allowMetadataMatching',
      'allowScrobbling',
      'enableMetadata',
      'excludePatterns',
      'fileGroupTypes',
      'folders',
      'id',
      'includeInDashboard',
      'includeInSearch',
      'inheritWebLinksFromFirstChapter',
      'manageCollections',
      'manageReadingLists',
      'name',
      'removePrefixForSortName',
      'type',
    ],
  })
  .openapi('UpdateLibraryDto')

const UpdateLibraryForUserDtoSchema = z
  .strictObject({
    username: z.string().nullable(),
    selectedLibraries: z.array(LibraryDtoSchema).nullable(),
  })
  .openapi({ required: ['selectedLibraries', 'username'] })
  .openapi('UpdateLibraryForUserDto')

const UpdateLicenseDtoSchema = z
  .strictObject({
    license: z.string().nullable(),
    email: z.string().nullable(),
    discordId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['email', 'license'] })
  .openapi('UpdateLicenseDto')

const UpdateNotificationDtoSchema = z
  .strictObject({
    currentVersion: z.string().nullable(),
    updateVersion: z.string().nullable(),
    updateBody: z.string().nullable(),
    updateTitle: z.string().nullable(),
    updateUrl: z.string().nullable(),
    isDocker: z.boolean().exactOptional(),
    isPrerelease: z.boolean().exactOptional(),
    publishDate: z.string().nullable(),
    isOnNightlyInRelease: z.boolean().exactOptional(),
    isReleaseNewer: z.boolean().exactOptional(),
    isReleaseEqual: z.boolean().exactOptional(),
    added: z.array(z.string()).nullable().exactOptional(),
    removed: z.array(z.string()).nullable().exactOptional(),
    changed: z.array(z.string()).nullable().exactOptional(),
    fixed: z.array(z.string()).nullable().exactOptional(),
    theme: z.array(z.string()).nullable().exactOptional(),
    developer: z.array(z.string()).nullable().exactOptional(),
    api: z.array(z.string()).nullable().exactOptional(),
    featureRequests: z.array(z.string()).nullable().exactOptional(),
    knownIssues: z.array(z.string()).nullable().exactOptional(),
    blogPart: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: [
      'currentVersion',
      'publishDate',
      'updateBody',
      'updateTitle',
      'updateUrl',
      'updateVersion',
    ],
  })
  .openapi('UpdateNotificationDto')

const UpdatePersonDtoSchema = z
  .strictObject({
    id: z.int32(),
    coverImageLocked: z.boolean(),
    name: z.string().min(1),
    aliases: z.array(z.string()).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    malId: z
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
    hardcoverId: z.string().nullable().exactOptional(),
    asin: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['coverImageLocked', 'id', 'name'] })
  .openapi('UpdatePersonDto')

const UpdateRatingDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    userRating: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRatingDto')

const UpdateReadingListByChapterDtoSchema = z
  .strictObject({
    chapterId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    readingListId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReadingListByChapterDto')

const UpdateReadingListByMultipleDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    readingListId: z.int32().exactOptional(),
    volumeIds: z.array(z.int32()).nullable().exactOptional(),
    chapterIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReadingListByMultipleDto')

const UpdateReadingListByMultipleSeriesDtoSchema = z
  .strictObject({
    readingListId: z.int32().exactOptional(),
    seriesIds: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReadingListByMultipleSeriesDto')

const UpdateReadingListBySeriesDtoSchema = z
  .strictObject({ seriesId: z.int32().exactOptional(), readingListId: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateReadingListBySeriesDto')

const UpdateReadingListByVolumeDtoSchema = z
  .strictObject({
    volumeId: z.int32().exactOptional(),
    seriesId: z.int32().exactOptional(),
    readingListId: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateReadingListByVolumeDto')

const UpdateReadingListDtoSchema = z
  .strictObject({
    readingListId: z.int32(),
    title: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    promoted: z.boolean().exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    startingMonth: z.int32().exactOptional(),
    startingYear: z.int32().exactOptional(),
    endingMonth: z.int32().exactOptional(),
    endingYear: z.int32().exactOptional(),
    tags: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: ['readingListId'] })
  .openapi('UpdateReadingListDto')

const UpdateReadingListPositionSchema = z
  .strictObject({
    readingListId: z.int32(),
    readingListItemId: z.int32(),
    fromPosition: z.int32().exactOptional(),
    toPosition: z.int32(),
  })
  .openapi({ required: ['readingListId', 'readingListItemId', 'toPosition'] })
  .openapi('UpdateReadingListPosition')

const UpdateRelatedSeriesDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    adaptations: z.array(z.int32()).nullable().exactOptional(),
    characters: z.array(z.int32()).nullable().exactOptional(),
    contains: z.array(z.int32()).nullable().exactOptional(),
    others: z.array(z.int32()).nullable().exactOptional(),
    prequels: z.array(z.int32()).nullable().exactOptional(),
    sequels: z.array(z.int32()).nullable().exactOptional(),
    sideStories: z.array(z.int32()).nullable().exactOptional(),
    spinOffs: z.array(z.int32()).nullable().exactOptional(),
    alternativeSettings: z.array(z.int32()).nullable().exactOptional(),
    alternativeVersions: z.array(z.int32()).nullable().exactOptional(),
    doujinshis: z.array(z.int32()).nullable().exactOptional(),
    editions: z.array(z.int32()).nullable().exactOptional(),
    annuals: z.array(z.int32()).nullable().exactOptional(),
    cameos: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRelatedSeriesDto')

const UpdateRemapRuleDtoSchema = z
  .strictObject({
    cblSeriesName: z.string().nullable().exactOptional(),
    seriesId: z.int32().nullable().exactOptional(),
    volumeId: z.int32().nullable().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    cblVolume: z.string().nullable().exactOptional(),
    cblNumber: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRemapRuleDto')

const UpdateScrobbleProviderDtoSchema = z
  .strictObject({
    provider: ScrobbleProviderSchema,
    userName: z.string().nullable().exactOptional(),
    authenticationToken: z.string().nullable().exactOptional(),
    refreshToken: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['provider'] })
  .openapi('UpdateScrobbleProviderDto')

const UpdateSeriesDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    localizedName: z.string().nullable().exactOptional(),
    sortName: z.string().nullable().exactOptional(),
    coverImageLocked: z.boolean().exactOptional(),
    nameLocked: z.boolean().exactOptional(),
    sortNameLocked: z.boolean().exactOptional(),
    localizedNameLocked: z.boolean().exactOptional(),
    metadataProviderOverride: MetadataProviderSchema.exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().nullable().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().nullable().exactOptional(),
    cbrId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSeriesDto')

const UpdateSeriesForTagDtoSchema = z
  .strictObject({
    tag: AppUserCollectionDtoSchema.exactOptional(),
    seriesIdsToRemove: z.array(z.int32()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSeriesForTagDto')

const UpdateSeriesMetadataDtoSchema = z
  .strictObject({ seriesMetadata: SeriesMetadataDtoSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSeriesMetadataDto')

const UpdateStreamPositionDtoSchema = z
  .strictObject({
    streamName: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    fromPosition: z.int32().exactOptional(),
    toPosition: z.int32().exactOptional(),
    positionIncludesInvisible: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateStreamPositionDto')

const UpdateUserDtoSchema = z
  .strictObject({
    userId: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    roles: z.array(z.string()).nullable().exactOptional(),
    libraries: z.array(z.int32()).nullable().exactOptional(),
    ageRestriction: AgeRestrictionDtoSchema.exactOptional(),
    email: z.string().nullable().exactOptional(),
    identityProvider: IdentityProviderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserDto')

const UpdateUserReviewDtoSchema = z
  .strictObject({
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    body: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserReviewDto')

const UpdateUsernameRequestDtoSchema = z
  .strictObject({ username: z.string().nullable() })
  .openapi({ required: ['username'] })
  .openapi('UpdateUsernameRequestDto')

const UpdateVolumeDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    aniListId: z.int32().nullable().exactOptional(),
    malId: z
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
    hardcoverId: z.int32().nullable().exactOptional(),
    metronId: z
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
    comicVineId: z.string().nullable().exactOptional(),
    mangaBakaId: z.int32().nullable().exactOptional(),
    cbrId: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVolumeDto')

const UpdateWantToReadDtoSchema = z
  .strictObject({ seriesIds: z.array(z.int32()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateWantToReadDto')

const UploadCoverFileDtoSchema = z
  .strictObject({
    id: z.int32(),
    url: z.string().nullable().exactOptional(),
    fileName: z.string().nullable().exactOptional(),
    lockCover: z.boolean().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('UploadCoverFileDto')

const UploadUrlDtoSchema = z
  .strictObject({ url: z.string().min(1) })
  .openapi({ required: ['url'] })
  .openapi('UploadUrlDto')

const UserPreferencesDtoSchema = z
  .strictObject({
    theme: SiteThemeDtoSchema,
    globalPageLayoutMode: PageLayoutModeSchema.exactOptional(),
    blurUnreadSummaries: z.boolean(),
    promptForDownloadSize: z.boolean(),
    noTransitions: z.boolean(),
    collapseSeriesRelationships: z.boolean(),
    locale: z.string().min(1),
    colorScapeEnabled: z.boolean(),
    dataSaver: z.boolean(),
    promptForRereadsAfter: z.int32(),
    onDeckProgressDays: z.int32(),
    onDeckUpdateDays: z.int32(),
    customKeyBinds: z
      .strictObject({
        NavigateToSettings: z.array(KeyBindSchema).exactOptional(),
        OpenSearch: z.array(KeyBindSchema).exactOptional(),
        NavigateToScrobbling: z.array(KeyBindSchema).exactOptional(),
        ToggleFullScreen: z.array(KeyBindSchema).exactOptional(),
        BookmarkPage: z.array(KeyBindSchema).exactOptional(),
        OpenHelp: z.array(KeyBindSchema).exactOptional(),
        GoTo: z.array(KeyBindSchema).exactOptional(),
        ToggleMenu: z.array(KeyBindSchema).exactOptional(),
        PageLeft: z.array(KeyBindSchema).exactOptional(),
        PageRight: z.array(KeyBindSchema).exactOptional(),
        Escape: z.array(KeyBindSchema).exactOptional(),
        PageUp: z.array(KeyBindSchema).exactOptional(),
        PageDown: z.array(KeyBindSchema).exactOptional(),
        OffsetDoublePage: z.array(KeyBindSchema).exactOptional(),
        NextChapter: z.array(KeyBindSchema).exactOptional(),
        PreviousChapter: z.array(KeyBindSchema).exactOptional(),
        FirstPage: z.array(KeyBindSchema).exactOptional(),
        LastPage: z.array(KeyBindSchema).exactOptional(),
        NavigateHome: z.array(KeyBindSchema).exactOptional(),
        OpenEventWidget: z.array(KeyBindSchema).exactOptional(),
      })
      .openapi({ required: [] }),
    aniListScrobblingEnabled: z.boolean().exactOptional(),
    wantToReadSync: z.boolean().exactOptional(),
    bookReaderHighlightSlots: z.array(HighlightSlotSchema),
    socialPreferences: AppUserSocialPreferencesSchema,
    opdsPreferences: AppUserOpdsPreferencesSchema,
  })
  .openapi({
    required: [
      'blurUnreadSummaries',
      'bookReaderHighlightSlots',
      'collapseSeriesRelationships',
      'colorScapeEnabled',
      'customKeyBinds',
      'dataSaver',
      'locale',
      'noTransitions',
      'onDeckProgressDays',
      'onDeckUpdateDays',
      'opdsPreferences',
      'promptForDownloadSize',
      'promptForRereadsAfter',
      'socialPreferences',
      'theme',
    ],
  })
  .openapi('UserPreferencesDto')

const UserDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    oidcId: z.string().nullable().exactOptional(),
    username: z.string().nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    roles: z.array(z.string()).nullable().exactOptional(),
    token: z.string().nullable().exactOptional(),
    refreshToken: z.string().nullable().exactOptional(),
    apiKey: z.string().nullable().exactOptional(),
    preferences: UserPreferencesDtoSchema.exactOptional(),
    ageRestriction: AgeRestrictionDtoSchema.exactOptional(),
    kavitaVersion: z.string().nullable().exactOptional(),
    identityProvider: IdentityProviderSchema.exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    authKeys: z.array(AuthKeyDtoSchema).nullable().exactOptional(),
    coverImage: z.string().nullable().exactOptional(),
    primaryColor: z.string().nullable().exactOptional(),
    secondaryColor: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserDto')

const UserParamsSchema = z
  .strictObject({ pageNumber: z.int32().exactOptional(), pageSize: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserParams')

const UserRatingAndReviewDtoSchema = z
  .strictObject({
    rating: z.float32().exactOptional(),
    review: z.string().nullable().exactOptional(),
    hasBeenRated: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserRatingAndReviewDto')

const UserReadStatisticsSchema = z
  .strictObject({
    totalPagesRead: z
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
    totalWordsRead: z
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
    timeSpentReading: z
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
    lastActiveUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    avgHoursPerWeekSpentReading: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserReadStatistics')

const WritingStyleSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Members:\n- `0` — Horizontal\n- `1` — Vertical',
    'x-enum-varnames': ['Horizontal', 'Vertical'],
    'x-enum-descriptions': ['Horizontal', 'Vertical'],
  })
  .openapi('WritingStyle')

const UserReadingProfileDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    userId: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
    kind: ReadingProfileKindSchema.exactOptional(),
    deviceIds: z.array(z.int32()).nullable().exactOptional(),
    seriesIds: z.array(z.int32()).nullable().exactOptional(),
    libraryIds: z.array(z.int32()).nullable().exactOptional(),
    readingDirection: ReadingDirectionSchema,
    scalingOption: ScalingOptionSchema,
    pageSplitOption: PageSplitOptionSchema,
    readerMode: ReaderModeSchema,
    autoCloseMenu: z.boolean(),
    showScreenHints: z.boolean(),
    emulateBook: z.boolean(),
    layoutMode: LayoutModeSchema,
    backgroundColor: z.string().min(1),
    swipeToPaginate: z.boolean(),
    allowAutomaticWebtoonReaderDetection: z.boolean(),
    widthOverride: z.int32().nullable().exactOptional(),
    disableWidthOverride: BreakPointSchema.exactOptional(),
    bookReaderMargin: z.int32(),
    bookReaderLineSpacing: z.int32(),
    bookReaderFontSize: z.int32(),
    bookReaderFontFamily: z.string().min(1),
    bookReaderTapToPaginate: z.boolean(),
    bookReaderReadingDirection: ReadingDirectionSchema,
    bookReaderWritingStyle: WritingStyleSchema,
    bookReaderThemeName: z.string().min(1),
    bookReaderLayoutMode: BookPageLayoutModeSchema,
    bookReaderImmersiveMode: z.boolean(),
    bookReaderDisableBookmarkIcon: z.boolean(),
    pdfTheme: PdfThemeSchema,
    pdfScrollMode: PdfScrollModeSchema,
    pdfSpreadMode: PdfSpreadModeSchema,
  })
  .openapi({
    required: [
      'allowAutomaticWebtoonReaderDetection',
      'autoCloseMenu',
      'backgroundColor',
      'bookReaderDisableBookmarkIcon',
      'bookReaderFontFamily',
      'bookReaderFontSize',
      'bookReaderImmersiveMode',
      'bookReaderLayoutMode',
      'bookReaderLineSpacing',
      'bookReaderMargin',
      'bookReaderReadingDirection',
      'bookReaderTapToPaginate',
      'bookReaderThemeName',
      'bookReaderWritingStyle',
      'emulateBook',
      'layoutMode',
      'pageSplitOption',
      'pdfScrollMode',
      'pdfSpreadMode',
      'pdfTheme',
      'readerMode',
      'readingDirection',
      'scalingOption',
      'showScreenHints',
      'swipeToPaginate',
    ],
  })
  .openapi('UserReadingProfileDto')

const UserReviewExtendedDtoSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    body: z.string().nullable().exactOptional(),
    seriesId: z.int32().exactOptional(),
    chapterId: z.int32().nullable().exactOptional(),
    libraryId: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    rating: z.float32().exactOptional(),
    series: SeriesDtoSchema.exactOptional(),
    chapter: ChapterDtoSchema.exactOptional(),
    createdUtc: z.iso.datetime({ offset: true }).exactOptional(),
    writers: z.array(PersonDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserReviewExtendedDto')

const UserTokenInfoDtoSchema = z
  .strictObject({
    userId: z.int32().exactOptional(),
    username: z.string().nullable().exactOptional(),
    tokens: z.array(TokenValidityInfoDtoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserTokenInfoDto')

const YearMonthGroupingDtoSchema = z
  .strictObject({ year: z.int32().exactOptional(), month: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('YearMonthGroupingDto')

const YearMonthGroupingDtoStatCountSchema = z
  .strictObject({
    value: YearMonthGroupingDtoSchema.exactOptional(),
    count: z
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
  .openapi('YearMonthGroupingDtoStatCount')

const AuthKeySecurityScheme = {
  type: 'apiKey',
  description: 'Auth Key authentication. Enter your Auth key from your user settings',
  name: 'x-api-key',
  in: 'header',
}

export const getApiAccountOidcAuthenticatedRoute = createRoute({
  method: 'get',
  path: '/api/Account/oidc-authenticated',
  tags: ['Account'],
  summary:
    'Returns true if OIDC authentication cookies are present and the Kavita.Server.Extensions.IdentityServiceExtensions.OpenIdConnect\nscheme has been registered',
  description: 'Makes no guarantee about their validity',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiAccountClearOidcLinkRoute = createRoute({
  method: 'post',
  path: '/api/Account/clear-oidc-link',
  tags: ['Account'],
  summary:
    'Remove the OIDC link for the authenticated user. This action will also remove the authentication cookie.\nThe caller should take note and redirect to login if no other authentication is currently present (I.e. JWT)',
  responses: { 200: { description: 'OK' } },
})

export const getApiAccountRoute = createRoute({
  method: 'get',
  path: '/api/Account',
  tags: ['Account'],
  summary: 'Returns the current user, as it would from login',
  description: 'Does not return tokens for the user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const postApiAccountResetPasswordRoute = createRoute({
  method: 'post',
  path: '/api/Account/reset-password',
  tags: ['Account'],
  summary: "Update a user's password",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ResetPasswordDtoSchema },
        'text/json': { schema: ResetPasswordDtoSchema },
        'application/*+json': { schema: ResetPasswordDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAccountRegisterRoute = createRoute({
  method: 'post',
  path: '/api/Account/register',
  tags: ['Account'],
  summary:
    'Register the first user (admin) on the server. Will not do anything if an admin is already confirmed',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: RegisterDtoSchema },
        'text/json': { schema: RegisterDtoSchema },
        'application/*+json': { schema: RegisterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const postApiAccountLoginRoute = createRoute({
  method: 'post',
  path: '/api/Account/login',
  tags: ['Account'],
  summary: 'Perform a login. Will send JWT Token of the logged in user back.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: LoginDtoSchema },
        'text/json': { schema: LoginDtoSchema },
        'application/*+json': { schema: LoginDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const getApiAccountRefreshAccountRoute = createRoute({
  method: 'get',
  path: '/api/Account/refresh-account',
  tags: ['Account'],
  summary: 'Returns an up-to-date user account',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const postApiAccountRefreshTokenRoute = createRoute({
  method: 'post',
  path: '/api/Account/refresh-token',
  tags: ['Account'],
  summary: "Refreshes the user's JWT token",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: TokenRequestDtoSchema },
        'text/json': { schema: TokenRequestDtoSchema },
        'application/*+json': { schema: TokenRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: TokenRequestDtoSchema },
        'application/json': { schema: TokenRequestDtoSchema },
        'text/json': { schema: TokenRequestDtoSchema },
      },
    },
  },
})

export const getApiAccountRolesRoute = createRoute({
  method: 'get',
  path: '/api/Account/roles',
  tags: ['Account'],
  summary: 'Get All Roles back. See Kavita.Models.Constants.PolicyConstants',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
})

export const postApiAccountUpdateUsernameRoute = createRoute({
  method: 'post',
  path: '/api/Account/update/username',
  tags: ['Account'],
  summary: "Initiates the flow to update a user's username.",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateUsernameRequestDtoSchema },
        'text/json': { schema: UpdateUsernameRequestDtoSchema },
        'application/*+json': { schema: UpdateUsernameRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: InviteUserResponseSchema },
        'application/json': { schema: InviteUserResponseSchema },
        'text/json': { schema: InviteUserResponseSchema },
      },
    },
  },
})

export const postApiAccountUpdateEmailRoute = createRoute({
  method: 'post',
  path: '/api/Account/update/email',
  tags: ['Account'],
  summary:
    "Initiates the flow to update a user's email address.\n            \nIf email is not setup, then the email address is not changed in this API. A confirmation link is sent/dumped which will\nvalidate the email. It must be confirmed for the email to update.",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateEmailDtoSchema },
        'text/json': { schema: UpdateEmailDtoSchema },
        'application/*+json': { schema: UpdateEmailDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: InviteUserResponseSchema },
        'application/json': { schema: InviteUserResponseSchema },
        'text/json': { schema: InviteUserResponseSchema },
      },
    },
  },
})

export const postApiAccountUpdateAgeRestrictionRoute = createRoute({
  method: 'post',
  path: '/api/Account/update/age-restriction',
  tags: ['Account'],
  summary: 'Change the Age Rating restriction for the user',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateAgeRestrictionDtoSchema },
        'text/json': { schema: UpdateAgeRestrictionDtoSchema },
        'application/*+json': { schema: UpdateAgeRestrictionDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAccountUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Account/update',
  tags: ['Account'],
  summary:
    'Update the user account. This can only affect Username, Email (will require confirming), Roles, and Library access.',
  description:
    "Users who's Kavita.Models.Entities.User.AppUser.IdentityProvider is not Kavita.Models.Entities.Enums.IdentityProvider.Kavita cannot be edited if Kavita.Models.DTOs.Settings.OidcConfigDto.SyncUserSettings is true",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateUserDtoSchema },
        'text/json': { schema: UpdateUserDtoSchema },
        'application/*+json': { schema: UpdateUserDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiAccountInviteUrlRoute = createRoute({
  method: 'get',
  path: '/api/Account/invite-url',
  tags: ['Account'],
  summary:
    'Requests the Invite Url for the AppUserId. Will return error if user is already validated.',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      withBaseUrl: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withBaseUrl',
            in: 'query',
            description: 'Include the "https://ip:port/" in the generated link',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiAccountInviteRoute = createRoute({
  method: 'post',
  path: '/api/Account/invite',
  tags: ['Account'],
  summary:
    'Invites a user to the server. Will generate a setup link for continuing setup. If email is not setup, a link will be presented to user to continue setup.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: InviteUserDtoSchema },
        'text/json': { schema: InviteUserDtoSchema },
        'application/*+json': { schema: InviteUserDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: InviteUserResponseSchema },
        'application/json': { schema: InviteUserResponseSchema },
        'text/json': { schema: InviteUserResponseSchema },
      },
    },
  },
})

export const postApiAccountConfirmEmailRoute = createRoute({
  method: 'post',
  path: '/api/Account/confirm-email',
  tags: ['Account'],
  summary: 'Last step in authentication flow, confirms the email token for email',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ConfirmEmailDtoSchema },
        'text/json': { schema: ConfirmEmailDtoSchema },
        'application/*+json': { schema: ConfirmEmailDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const postApiAccountConfirmEmailUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Account/confirm-email-update',
  tags: ['Account'],
  summary:
    'Final step in email update change. Given a confirmation token and the email, this will finish the email change.',
  description: 'This will force connected clients to re-authenticate',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ConfirmEmailUpdateDtoSchema },
        'text/json': { schema: ConfirmEmailUpdateDtoSchema },
        'application/*+json': { schema: ConfirmEmailUpdateDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAccountConfirmPasswordResetRoute = createRoute({
  method: 'post',
  path: '/api/Account/confirm-password-reset',
  tags: ['Account'],
  request: {
    body: {
      content: {
        'application/json': { schema: ConfirmPasswordResetDtoSchema },
        'text/json': { schema: ConfirmPasswordResetDtoSchema },
        'application/*+json': { schema: ConfirmPasswordResetDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiAccountForgotPasswordRoute = createRoute({
  method: 'post',
  path: '/api/Account/forgot-password',
  tags: ['Account'],
  summary:
    'Will send user a link to update their password to their email or prompt them if not accessible',
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiAccountEmailConfirmedRoute = createRoute({
  method: 'get',
  path: '/api/Account/email-confirmed',
  tags: ['Account'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiAccountConfirmMigrationEmailRoute = createRoute({
  method: 'post',
  path: '/api/Account/confirm-migration-email',
  tags: ['Account'],
  request: {
    body: {
      content: {
        'application/json': { schema: ConfirmMigrationEmailDtoSchema },
        'text/json': { schema: ConfirmMigrationEmailDtoSchema },
        'application/*+json': { schema: ConfirmMigrationEmailDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const postApiAccountResendConfirmationEmailRoute = createRoute({
  method: 'post',
  path: '/api/Account/resend-confirmation-email',
  tags: ['Account'],
  summary: 'Resend an invite to a user already invited',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: InviteUserResponseSchema },
        'application/json': { schema: InviteUserResponseSchema },
        'text/json': { schema: InviteUserResponseSchema },
      },
    },
  },
})

export const getApiAccountOpdsUrlRoute = createRoute({
  method: 'get',
  path: '/api/Account/opds-url',
  tags: ['Account'],
  summary: 'Returns the OPDS url for this user',
  request: {
    query: z.object({
      authKeyName: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'authKeyName', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiAccountIsEmailValidRoute = createRoute({
  method: 'get',
  path: '/api/Account/is-email-valid',
  tags: ['Account'],
  summary: "Is the user's current email valid or not",
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiAccountAuthKeysRoute = createRoute({
  method: 'get',
  path: '/api/Account/auth-keys',
  tags: ['Account'],
  summary: 'Returns all Auth Keys with the account',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(AuthKeyDtoSchema) },
        'application/json': { schema: z.array(AuthKeyDtoSchema) },
        'text/json': { schema: z.array(AuthKeyDtoSchema) },
      },
    },
  },
})

export const postApiAccountRotateAuthKeyRoute = createRoute({
  method: 'post',
  path: '/api/Account/rotate-auth-key',
  tags: ['Account'],
  summary: 'Rotate the Auth Key',
  request: {
    query: z.object({
      authKeyId: z
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
            name: 'authKeyId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: RotateAuthKeyRequestDtoSchema },
        'text/json': { schema: RotateAuthKeyRequestDtoSchema },
        'application/*+json': { schema: RotateAuthKeyRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AuthKeyDtoSchema },
        'application/json': { schema: AuthKeyDtoSchema },
        'text/json': { schema: AuthKeyDtoSchema },
      },
    },
  },
})

export const postApiAccountCreateAuthKeyRoute = createRoute({
  method: 'post',
  path: '/api/Account/create-auth-key',
  tags: ['Account'],
  summary: 'Creates a new Auth Key for a user.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: RotateAuthKeyRequestDtoSchema },
        'text/json': { schema: RotateAuthKeyRequestDtoSchema },
        'application/*+json': { schema: RotateAuthKeyRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AuthKeyDtoSchema },
        'application/json': { schema: AuthKeyDtoSchema },
        'text/json': { schema: AuthKeyDtoSchema },
      },
    },
  },
})

export const deleteApiAccountAuthKeyRoute = createRoute({
  method: 'delete',
  path: '/api/Account/auth-key',
  tags: ['Account'],
  summary: 'Delete the Auth Key',
  request: {
    query: z.object({
      authKeyId: z
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
            name: 'authKeyId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiActivityCurrentRoute = createRoute({
  method: 'get',
  path: '/api/Activity/current',
  tags: ['Activity'],
  summary: 'Returns active reading sessions on the Server',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ReadingSessionDtoSchema) },
        'application/json': { schema: z.array(ReadingSessionDtoSchema) },
        'text/json': { schema: z.array(ReadingSessionDtoSchema) },
      },
    },
  },
})

export const getApiAdminExistsRoute = createRoute({
  method: 'get',
  path: '/api/Admin/exists',
  tags: ['Admin'],
  summary:
    'Checks if an admin exists on the system. This is essentially a check to validate if the system has been set up.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiAnnotationAllFilteredRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/all-filtered',
  tags: ['Annotation'],
  summary: 'Returns a list of annotations for browsing',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: AnnotationFilterDtoSchema },
        'text/json': { schema: AnnotationFilterDtoSchema },
        'application/*+json': { schema: AnnotationFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(AnnotationDtoSchema) },
        'application/json': { schema: z.array(AnnotationDtoSchema) },
        'text/json': { schema: z.array(AnnotationDtoSchema) },
      },
    },
  },
})

export const getApiAnnotationAllRoute = createRoute({
  method: 'get',
  path: '/api/Annotation/all',
  tags: ['Annotation'],
  summary: 'Returns the annotations for the given chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(AnnotationDtoSchema) },
        'application/json': { schema: z.array(AnnotationDtoSchema) },
        'text/json': { schema: z.array(AnnotationDtoSchema) },
      },
    },
  },
})

export const getApiAnnotationAllForSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Annotation/all-for-series',
  tags: ['Annotation'],
  summary: 'Returns all annotations by Series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: AnnotationDtoSchema },
        'application/json': { schema: AnnotationDtoSchema },
        'text/json': { schema: AnnotationDtoSchema },
      },
    },
  },
})

export const getApiAnnotationAnnotationIdRoute = createRoute({
  method: 'get',
  path: '/api/Annotation/{annotationId}',
  tags: ['Annotation'],
  summary: 'Returns the Annotation by Id. User must have access to annotation.',
  request: {
    params: z.object({
      annotationId: z
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
            name: 'annotationId',
            in: 'path',
            description: '',
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
        'text/plain': { schema: AnnotationDtoSchema },
        'application/json': { schema: AnnotationDtoSchema },
        'text/json': { schema: AnnotationDtoSchema },
      },
    },
  },
})

export const postApiAnnotationCreateRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/create',
  tags: ['Annotation'],
  summary: 'Create a new Annotation for the user against a Chapter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: AnnotationDtoSchema },
        'text/json': { schema: AnnotationDtoSchema },
        'application/*+json': { schema: AnnotationDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AnnotationDtoSchema },
        'application/json': { schema: AnnotationDtoSchema },
        'text/json': { schema: AnnotationDtoSchema },
      },
    },
  },
})

export const postApiAnnotationUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/update',
  tags: ['Annotation'],
  summary: 'Update the modifiable fields (Spoiler, highlight slot, and comment) for an annotation',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: AnnotationDtoSchema },
        'text/json': { schema: AnnotationDtoSchema },
        'application/*+json': { schema: AnnotationDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AnnotationDtoSchema },
        'application/json': { schema: AnnotationDtoSchema },
        'text/json': { schema: AnnotationDtoSchema },
      },
    },
  },
})

export const postApiAnnotationLikeRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/like',
  tags: ['Annotation'],
  summary:
    'Adds a like for the currently authenticated user if not already from the annotations with given ids',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAnnotationUnlikeRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/unlike',
  tags: ['Annotation'],
  summary:
    'Removes likes for the currently authenticated user if present from the annotations with given ids',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiAnnotationRoute = createRoute({
  method: 'delete',
  path: '/api/Annotation',
  tags: ['Annotation'],
  summary: 'Delete the annotation for the user',
  request: {
    query: z.object({
      annotationId: z
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
            name: 'annotationId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAnnotationBulkDeleteRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/bulk-delete',
  tags: ['Annotation'],
  summary:
    'Removes annotations in bulk. Requires every annotation to be owned by the authenticated user',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAnnotationExportFilterRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/export-filter',
  tags: ['Annotation'],
  summary: 'Exports annotations for the given users',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: AnnotationFilterDtoSchema },
        'text/json': { schema: AnnotationFilterDtoSchema },
        'application/*+json': { schema: AnnotationFilterDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiAnnotationExportRoute = createRoute({
  method: 'post',
  path: '/api/Annotation/export',
  tags: ['Annotation'],
  summary: 'Exports Annotations for the User',
  request: {
    body: {
      description: 'Export annotations with the given ids',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiBookChapterIdBookInfoRoute = createRoute({
  method: 'get',
  path: '/api/Book/{chapterId}/book-info',
  tags: ['Book'],
  summary: 'Retrieves information for the PDF and Epub reader. This will cache the file.',
  description: 'This only applies to Epub or PDF files',
  request: {
    params: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'path',
            description: '',
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
        'text/plain': { schema: BookInfoDtoSchema },
        'application/json': { schema: BookInfoDtoSchema },
        'text/json': { schema: BookInfoDtoSchema },
      },
    },
  },
})

export const getApiBookChapterIdBookResourcesRoute = createRoute({
  method: 'get',
  path: '/api/Book/{chapterId}/book-resources',
  tags: ['Book'],
  summary: 'This is an entry point to fetch resources from within an epub chapter/book.',
  request: {
    params: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiBookChapterIdChaptersRoute = createRoute({
  method: 'get',
  path: '/api/Book/{chapterId}/chapters',
  tags: ['Book'],
  summary:
    'This will return a list of mappings from ID -> page num. ID will be the xhtml key and page num will be the reading order\nthis is used to rewrite anchors in the book text so that we always load properly in our reader.',
  description: 'This is essentially building the table of contents',
  request: {
    params: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'path',
            description: '',
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
        'text/plain': { schema: z.array(BookChapterItemSchema) },
        'application/json': { schema: z.array(BookChapterItemSchema) },
        'text/json': { schema: z.array(BookChapterItemSchema) },
      },
    },
  },
})

export const getApiBookChapterIdBookPageRoute = createRoute({
  method: 'get',
  path: '/api/Book/{chapterId}/book-page',
  tags: ['Book'],
  summary:
    'This returns a single page within the epub book. All html will be rewritten to be scoped within our reader,\nall css is scoped, etc.',
  request: {
    params: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiCblSyncRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/sync',
  tags: ['Cbl'],
  summary:
    'Enqueues the Reading List to be synced on a background thread. UI will be informed from Kavita.Models.DTOs.SignalR.MessageFactory.ReadingListUpdated event',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'Ignore Hash and force sync flow',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCblFileImportRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/file-import',
  tags: ['Cbl'],
  summary: 'Saves an uploaded CBL file to disk without importing. Returns the saved file info.',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              cblFile: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
          encoding: { cblFile: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CblSavedFileDtoSchema },
        'application/json': { schema: CblSavedFileDtoSchema },
        'text/json': { schema: CblSavedFileDtoSchema },
      },
    },
  },
})

export const postApiCblUploadCblFileRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/upload-cbl-file',
  tags: ['Cbl'],
  summary: 'Downloads a CBL file from a URL and saves it to disk without importing.',
  request: {
    body: {
      content: {
        'application/json': { schema: UploadUrlDtoSchema },
        'text/json': { schema: UploadUrlDtoSchema },
        'application/*+json': { schema: UploadUrlDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CblSavedFileDtoSchema },
        'application/json': { schema: CblSavedFileDtoSchema },
        'text/json': { schema: CblSavedFileDtoSchema },
      },
    },
  },
})

export const postApiCblRepoImportRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/repo-import',
  tags: ['Cbl'],
  summary:
    'Downloads selected CBL files from the GitHub repo and saves them to disk without importing.',
  request: {
    body: {
      content: {
        'application/json': { schema: CblRepoImportRequestDtoSchema },
        'text/json': { schema: CblRepoImportRequestDtoSchema },
        'application/*+json': { schema: CblRepoImportRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(CblSavedFileDtoSchema) },
        'application/json': { schema: z.array(CblSavedFileDtoSchema) },
        'text/json': { schema: z.array(CblSavedFileDtoSchema) },
      },
    },
  },
})

export const postApiCblReValidateRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/re-validate',
  tags: ['Cbl'],
  summary:
    'Validates an already-saved CBL file on disk. Called by the import modal after remap rule changes.',
  request: {
    body: {
      content: {
        'application/json': { schema: CblReValidateRequestDtoSchema },
        'text/json': { schema: CblReValidateRequestDtoSchema },
        'application/*+json': { schema: CblReValidateRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CblImportSummaryDtoSchema },
        'application/json': { schema: CblImportSummaryDtoSchema },
        'text/json': { schema: CblImportSummaryDtoSchema },
      },
    },
  },
})

export const postApiCblFinalizeImportRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/finalize-import',
  tags: ['Cbl'],
  summary: 'Finalizes the import of a saved CBL file with user decisions',
  request: {
    body: {
      content: {
        'application/json': { schema: CblFinalizeRequestDtoSchema },
        'text/json': { schema: CblFinalizeRequestDtoSchema },
        'application/*+json': { schema: CblFinalizeRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CblImportSummaryDtoSchema },
        'application/json': { schema: CblImportSummaryDtoSchema },
        'text/json': { schema: CblImportSummaryDtoSchema },
      },
    },
  },
})

export const getApiCblRemapRulesRoute = createRoute({
  method: 'get',
  path: '/api/Cbl/remap-rules',
  tags: ['Cbl'],
  summary:
    'Returns all remap rules accessible to the current user (own rules + global/admin rules).',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(RemapRuleDtoSchema) },
        'application/json': { schema: z.array(RemapRuleDtoSchema) },
        'text/json': { schema: z.array(RemapRuleDtoSchema) },
      },
    },
  },
})

export const postApiCblRemapRulesRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/remap-rules',
  tags: ['Cbl'],
  summary:
    'Creates a new remap rule, or updates an existing one if a rule with the same\nCBL matching key (normalized name + volume + number) already exists for this user.\nWhen no explicit VolumeId is provided, attempts to auto-resolve a matching volume\non the target series from the CBL volume string.',
  request: {
    body: {
      content: {
        'application/json': { schema: CreateRemapRuleDtoSchema },
        'text/json': { schema: CreateRemapRuleDtoSchema },
        'application/*+json': { schema: CreateRemapRuleDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: RemapRuleDtoSchema },
        'application/json': { schema: RemapRuleDtoSchema },
        'text/json': { schema: RemapRuleDtoSchema },
      },
    },
  },
})

export const getApiCblRemapRulesAllRoute = createRoute({
  method: 'get',
  path: '/api/Cbl/remap-rules/all',
  tags: ['Cbl'],
  summary: 'Returns all rules across all users',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(RemapRuleDtoSchema) },
        'application/json': { schema: z.array(RemapRuleDtoSchema) },
        'text/json': { schema: z.array(RemapRuleDtoSchema) },
      },
    },
  },
})

export const postApiCblRemapRulesIdPromoteRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/remap-rules/{id}/promote',
  tags: ['Cbl'],
  summary: 'Promotes a remap rule to global scope. Admin-only.',
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
        'text/plain': { schema: RemapRuleDtoSchema },
        'application/json': { schema: RemapRuleDtoSchema },
        'text/json': { schema: RemapRuleDtoSchema },
      },
    },
  },
})

export const postApiCblRemapRulesIdDemoteRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/remap-rules/{id}/demote',
  tags: ['Cbl'],
  summary: 'Demotes a global remap rule back to user-scoped. Admin-only.',
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
        'text/plain': { schema: RemapRuleDtoSchema },
        'application/json': { schema: RemapRuleDtoSchema },
        'text/json': { schema: RemapRuleDtoSchema },
      },
    },
  },
})

export const postApiCblRemapRulesIdRoute = createRoute({
  method: 'post',
  path: '/api/Cbl/remap-rules/{id}',
  tags: ['Cbl'],
  summary: 'Updates a remap rule with issue-level detail (volume/chapter).',
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
    body: {
      content: {
        'application/json': { schema: UpdateRemapRuleDtoSchema },
        'text/json': { schema: UpdateRemapRuleDtoSchema },
        'application/*+json': { schema: UpdateRemapRuleDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: RemapRuleDtoSchema },
        'application/json': { schema: RemapRuleDtoSchema },
        'text/json': { schema: RemapRuleDtoSchema },
      },
    },
  },
})

export const deleteApiCblRemapRulesIdRoute = createRoute({
  method: 'delete',
  path: '/api/Cbl/remap-rules/{id}',
  tags: ['Cbl'],
  summary: 'Deletes a remap rule. Users can only delete their own rules.',
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

export const getApiCblBrowseRoute = createRoute({
  method: 'get',
  path: '/api/Cbl/browse',
  tags: ['Cbl'],
  summary: 'Provides the browse CBL Repo interface. Requires Download role.',
  request: {
    query: z.object({
      path: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: '',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: CblRepoBrowseResultDtoSchema },
        'application/json': { schema: CblRepoBrowseResultDtoSchema },
        'text/json': { schema: CblRepoBrowseResultDtoSchema },
      },
    },
  },
})

export const getApiChapterRoute = createRoute({
  method: 'get',
  path: '/api/Chapter',
  tags: ['Chapter'],
  summary: 'Gets a single chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ChapterDtoSchema },
        'application/json': { schema: ChapterDtoSchema },
        'text/json': { schema: ChapterDtoSchema },
      },
    },
  },
})

export const deleteApiChapterRoute = createRoute({
  method: 'delete',
  path: '/api/Chapter',
  tags: ['Chapter'],
  summary: 'Removes a Chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiChapterDeleteMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Chapter/delete-multiple',
  tags: ['Chapter'],
  summary: 'Deletes multiple chapters and any volumes with no leftover chapters',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: 'The ID of the series',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The IDs of the chapters to be deleted',
      content: {
        'application/json': { schema: DeleteChaptersDtoSchema },
        'text/json': { schema: DeleteChaptersDtoSchema },
        'application/*+json': { schema: DeleteChaptersDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiChapterUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Chapter/update',
  tags: ['Chapter'],
  summary: 'Update chapter metadata',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateChapterDtoSchema },
        'text/json': { schema: UpdateChapterDtoSchema },
        'application/*+json': { schema: UpdateChapterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ChapterDtoSchema },
        'application/json': { schema: ChapterDtoSchema },
        'text/json': { schema: ChapterDtoSchema },
      },
    },
  },
})

export const getApiChapterChapterDetailPlusRoute = createRoute({
  method: 'get',
  path: '/api/Chapter/chapter-detail-plus',
  tags: ['Chapter'],
  summary: 'Returns Ratings and Reviews for an individual Chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ChapterDetailPlusDtoSchema },
        'application/json': { schema: ChapterDetailPlusDtoSchema },
        'text/json': { schema: ChapterDetailPlusDtoSchema },
      },
    },
  },
})

export const getApiCollectionRoute = createRoute({
  method: 'get',
  path: '/api/Collection',
  tags: ['Collection'],
  summary: 'Returns all Collection tags for a given User',
  request: {
    query: z.object({
      ownedOnly: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'ownedOnly',
            in: 'query',
            description: 'Exclude Promoted',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      sortByLastModified: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sortByLastModified',
            in: 'query',
            description: 'Order by Last Modified rather than on Title',
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
        'text/plain': { schema: z.array(AppUserCollectionDtoSchema) },
        'application/json': { schema: z.array(AppUserCollectionDtoSchema) },
        'text/json': { schema: z.array(AppUserCollectionDtoSchema) },
      },
    },
  },
})

export const deleteApiCollectionRoute = createRoute({
  method: 'delete',
  path: '/api/Collection',
  tags: ['Collection'],
  summary: 'Removes the collection tag from the user',
  request: {
    query: z.object({
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
            name: 'tagId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCollectionSingleRoute = createRoute({
  method: 'get',
  path: '/api/Collection/single',
  tags: ['Collection'],
  summary: 'Returns a single Collection tag by Id for a given user',
  request: {
    query: z.object({
      collectionId: z
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
            name: 'collectionId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: AppUserCollectionDtoSchema },
        'application/json': { schema: AppUserCollectionDtoSchema },
        'text/json': { schema: AppUserCollectionDtoSchema },
      },
    },
  },
})

export const getApiCollectionAllSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Collection/all-series',
  tags: ['Collection'],
  summary:
    'Returns all collections that contain the Series for the user with the option to allow for promoted collections (non-user owned)',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      ownedOnly: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'ownedOnly',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(AppUserCollectionDtoSchema) },
        'application/json': { schema: z.array(AppUserCollectionDtoSchema) },
        'text/json': { schema: z.array(AppUserCollectionDtoSchema) },
      },
    },
  },
})

export const getApiCollectionNameExistsRoute = createRoute({
  method: 'get',
  path: '/api/Collection/name-exists',
  tags: ['Collection'],
  summary: 'Checks if a collection exists with the name',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'If empty or null, will return true as that is invalid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiCollectionUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Collection/update',
  tags: ['Collection'],
  summary:
    'Updates an existing tag with a new title, promotion status, and summary.\n<remarks>UI does not contain controls to update title</remarks>',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: AppUserCollectionDtoSchema },
        'text/json': { schema: AppUserCollectionDtoSchema },
        'application/*+json': { schema: AppUserCollectionDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AppUserCollectionDtoSchema },
        'application/json': { schema: AppUserCollectionDtoSchema },
        'text/json': { schema: AppUserCollectionDtoSchema },
      },
    },
  },
})

export const postApiCollectionPromoteMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Collection/promote-multiple',
  tags: ['Collection'],
  summary:
    "Promote/UnPromote multiple collections in one go. Will only update the authenticated user's collections and will only work if the user has promotion role",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: PromoteCollectionsDtoSchema },
        'text/json': { schema: PromoteCollectionsDtoSchema },
        'application/*+json': { schema: PromoteCollectionsDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCollectionDeleteMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Collection/delete-multiple',
  tags: ['Collection'],
  summary: 'Delete multiple collections in one go',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DeleteCollectionsDtoSchema },
        'text/json': { schema: DeleteCollectionsDtoSchema },
        'application/*+json': { schema: DeleteCollectionsDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCollectionUpdateForSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Collection/update-for-series',
  tags: ['Collection'],
  summary: 'Adds multiple series to a collection. If tag id is 0, this will create a new tag.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: CollectionTagBulkAddDtoSchema },
        'text/json': { schema: CollectionTagBulkAddDtoSchema },
        'application/*+json': { schema: CollectionTagBulkAddDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiCollectionUpdateSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Collection/update-series',
  tags: ['Collection'],
  summary:
    'For a given tag, update the summary if summary has changed and remove a set of series from the tag.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateSeriesForTagDtoSchema },
        'text/json': { schema: UpdateSeriesForTagDtoSchema },
        'application/*+json': { schema: UpdateSeriesForTagDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiCollectionMalStacksRoute = createRoute({
  method: 'get',
  path: '/api/Collection/mal-stacks',
  tags: ['Collection'],
  summary:
    'For the authenticated user, if they have an active Kavita+ subscription and a MAL username on record,\nfetch their Mal interest stacks (including restacks)',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(MalStackDtoSchema) },
        'application/json': { schema: z.array(MalStackDtoSchema) },
        'text/json': { schema: z.array(MalStackDtoSchema) },
      },
    },
  },
})

export const postApiCollectionImportStackRoute = createRoute({
  method: 'post',
  path: '/api/Collection/import-stack',
  tags: ['Collection'],
  summary: 'Imports a MAL Stack into Kavita',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MalStackDtoSchema },
        'text/json': { schema: MalStackDtoSchema },
        'application/*+json': { schema: MalStackDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiColorScapeSeriesRoute = createRoute({
  method: 'get',
  path: '/api/ColorScape/series',
  tags: ['ColorScape'],
  summary: 'Returns the color scape for a series',
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ColorScapeDtoSchema },
        'application/json': { schema: ColorScapeDtoSchema },
        'text/json': { schema: ColorScapeDtoSchema },
      },
    },
  },
})

export const getApiColorScapeVolumeRoute = createRoute({
  method: 'get',
  path: '/api/ColorScape/volume',
  tags: ['ColorScape'],
  summary: 'Returns the color scape for a volume',
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ColorScapeDtoSchema },
        'application/json': { schema: ColorScapeDtoSchema },
        'text/json': { schema: ColorScapeDtoSchema },
      },
    },
  },
})

export const getApiColorScapeChapterRoute = createRoute({
  method: 'get',
  path: '/api/ColorScape/chapter',
  tags: ['ColorScape'],
  summary: 'Returns the color scape for a chapter',
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ColorScapeDtoSchema },
        'application/json': { schema: ColorScapeDtoSchema },
        'text/json': { schema: ColorScapeDtoSchema },
      },
    },
  },
})

export const postApiDeviceCreateRoute = createRoute({
  method: 'post',
  path: '/api/Device/create',
  tags: ['Device'],
  summary: 'Creates a new Device',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: CreateEmailDeviceDtoSchema },
        'text/json': { schema: CreateEmailDeviceDtoSchema },
        'application/*+json': { schema: CreateEmailDeviceDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: EmailDeviceDtoSchema },
        'application/json': { schema: EmailDeviceDtoSchema },
        'text/json': { schema: EmailDeviceDtoSchema },
      },
    },
  },
})

export const postApiDeviceUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Device/update',
  tags: ['Device'],
  summary: 'Updates an existing Device',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateEmailDeviceDtoSchema },
        'text/json': { schema: UpdateEmailDeviceDtoSchema },
        'application/*+json': { schema: UpdateEmailDeviceDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: EmailDeviceDtoSchema },
        'application/json': { schema: EmailDeviceDtoSchema },
        'text/json': { schema: EmailDeviceDtoSchema },
      },
    },
  },
})

export const getApiDeviceRoute = createRoute({
  method: 'get',
  path: '/api/Device',
  tags: ['Device'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(EmailDeviceDtoSchema) },
        'application/json': { schema: z.array(EmailDeviceDtoSchema) },
        'text/json': { schema: z.array(EmailDeviceDtoSchema) },
      },
    },
  },
})

export const deleteApiDeviceRoute = createRoute({
  method: 'delete',
  path: '/api/Device',
  tags: ['Device'],
  summary: 'Deletes the device from the user',
  request: {
    query: z.object({
      deviceId: z
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
            name: 'deviceId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiDeviceSendToRoute = createRoute({
  method: 'post',
  path: '/api/Device/send-to',
  tags: ['Device'],
  summary: "Sends a collection of chapters to the user's device",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: SendToEmailDeviceDtoSchema },
        'text/json': { schema: SendToEmailDeviceDtoSchema },
        'application/*+json': { schema: SendToEmailDeviceDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiDeviceSendSeriesToRoute = createRoute({
  method: 'post',
  path: '/api/Device/send-series-to',
  tags: ['Device'],
  summary: 'Attempts to send a whole series to a device.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: SendSeriesToEmailDeviceDtoSchema },
        'text/json': { schema: SendSeriesToEmailDeviceDtoSchema },
        'application/*+json': { schema: SendSeriesToEmailDeviceDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiDeviceClientDevicesRoute = createRoute({
  method: 'get',
  path: '/api/Device/client/devices',
  tags: ['Device'],
  summary: 'Get my client devices',
  request: {
    query: z.object({
      includeInactive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeInactive',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(ClientDeviceDtoSchema) },
        'application/json': { schema: z.array(ClientDeviceDtoSchema) },
        'text/json': { schema: z.array(ClientDeviceDtoSchema) },
      },
    },
  },
})

export const getApiDeviceClientAllDevicesRoute = createRoute({
  method: 'get',
  path: '/api/Device/client/all-devices',
  tags: ['Device'],
  summary: 'Get All user client devices',
  request: {
    query: z.object({
      includeInactive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeInactive',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(ClientDeviceDtoSchema) },
        'application/json': { schema: z.array(ClientDeviceDtoSchema) },
        'text/json': { schema: z.array(ClientDeviceDtoSchema) },
      },
    },
  },
})

export const deleteApiDeviceClientDeviceRoute = createRoute({
  method: 'delete',
  path: '/api/Device/client/device',
  tags: ['Device'],
  summary: 'Removes the client device from DB',
  request: {
    query: z.object({
      clientDeviceId: z
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
            name: 'clientDeviceId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiDeviceClientUpdateNameRoute = createRoute({
  method: 'post',
  path: '/api/Device/client/update-name',
  tags: ['Device'],
  summary: 'Update the friendly name of the Device',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateClientDeviceNameDtoSchema },
        'text/json': { schema: UpdateClientDeviceNameDtoSchema },
        'application/*+json': { schema: UpdateClientDeviceNameDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiDownloadVolumeSizeRoute = createRoute({
  method: 'get',
  path: '/api/Download/volume-size',
  tags: ['Download'],
  summary: 'For a given volume, return the size in bytes',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
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
        'text/plain': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'text/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
  },
})

export const postApiDownloadBulkVolumeSizeRoute = createRoute({
  method: 'post',
  path: '/api/Download/bulk-volume-size',
  tags: ['Download'],
  summary: 'For a set of volumes, return the size in bytes',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BulkVolumeSizeRequestSchema },
        'text/json': { schema: BulkVolumeSizeRequestSchema },
        'application/*+json': { schema: BulkVolumeSizeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'text/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const getApiDownloadChapterSizeRoute = createRoute({
  method: 'get',
  path: '/api/Download/chapter-size',
  tags: ['Download'],
  summary: 'For a given chapter, return the size in bytes',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'text/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
  },
})

export const postApiDownloadBulkChapterSizeRoute = createRoute({
  method: 'post',
  path: '/api/Download/bulk-chapter-size',
  tags: ['Download'],
  summary: 'For a set of chapters, return the size in bytes',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BulkChapterSizeRequestSchema },
        'text/json': { schema: BulkChapterSizeRequestSchema },
        'application/*+json': { schema: BulkChapterSizeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'text/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const getApiDownloadSeriesSizeRoute = createRoute({
  method: 'get',
  path: '/api/Download/series-size',
  tags: ['Download'],
  summary: 'For a series, return the size in bytes',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'text/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
  },
})

export const getApiDownloadReadinglistSizeRoute = createRoute({
  method: 'get',
  path: '/api/Download/readinglist-size',
  tags: ['Download'],
  summary:
    'Returns the filesize for all items of a reading list that the requesting user has access to',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
        'text/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
  },
})

export const postApiDownloadBulkReadinglistSizeRoute = createRoute({
  method: 'post',
  path: '/api/Download/bulk-readinglist-size',
  tags: ['Download'],
  summary: 'Returns the mapping of readinglist -> size',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BulkReadingListSizeRequestSchema },
        'text/json': { schema: BulkReadingListSizeRequestSchema },
        'application/*+json': { schema: BulkReadingListSizeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'text/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const postApiDownloadBulkSeriesSizeRoute = createRoute({
  method: 'post',
  path: '/api/Download/bulk-series-size',
  tags: ['Download'],
  summary: 'For a set of series, return the size in bytes',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BulkSeriesSizeRequestSchema },
        'text/json': { schema: BulkSeriesSizeRequestSchema },
        'application/*+json': { schema: BulkSeriesSizeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'text/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const getApiDownloadVolumeRoute = createRoute({
  method: 'get',
  path: '/api/Download/volume',
  tags: ['Download'],
  summary:
    'Downloads all chapters within a volume. If the chapters are multiple zips, they will all be zipped up.',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      correlationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'correlationId',
            in: 'query',
            description: 'Only for UI',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiDownloadChapterRoute = createRoute({
  method: 'get',
  path: '/api/Download/chapter',
  tags: ['Download'],
  summary:
    'Returns the zip for a single chapter. If the chapter contains multiple files, they will be zipped.',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      correlationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'correlationId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiDownloadSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Download/series',
  tags: ['Download'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      correlationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'correlationId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiDownloadBookmarksRoute = createRoute({
  method: 'post',
  path: '/api/Download/bookmarks',
  tags: ['Download'],
  summary: 'Downloads all bookmarks in a zip for',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DownloadBookmarkDtoSchema },
        'text/json': { schema: DownloadBookmarkDtoSchema },
        'application/*+json': { schema: DownloadBookmarkDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiEmailAllRoute = createRoute({
  method: 'get',
  path: '/api/Email/all',
  tags: ['Email'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(EmailHistoryDtoSchema) },
        'application/json': { schema: z.array(EmailHistoryDtoSchema) },
        'text/json': { schema: z.array(EmailHistoryDtoSchema) },
      },
    },
  },
})

export const postApiFilterUpdateSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Filter/update/series',
  tags: ['Filter'],
  summary: 'Creates or Updates the Series filter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiFilterUpdateReadingListRoute = createRoute({
  method: 'post',
  path: '/api/Filter/update/reading-list',
  tags: ['Filter'],
  summary: 'Creates or Updates the Reading List filter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ReadingListFilterDtoSchema },
        'text/json': { schema: ReadingListFilterDtoSchema },
        'application/*+json': { schema: ReadingListFilterDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiFilterUpdatePersonRoute = createRoute({
  method: 'post',
  path: '/api/Filter/update/person',
  tags: ['Filter'],
  summary: 'Creates or Updates the Person filter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: PersonFilterDtoSchema },
        'text/json': { schema: PersonFilterDtoSchema },
        'application/*+json': { schema: PersonFilterDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiFilterUpdateAnnotationRoute = createRoute({
  method: 'post',
  path: '/api/Filter/update/annotation',
  tags: ['Filter'],
  summary: 'Creates or Updates the Reading List filter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: AnnotationFilterDtoSchema },
        'text/json': { schema: AnnotationFilterDtoSchema },
        'application/*+json': { schema: AnnotationFilterDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiFilterRoute = createRoute({
  method: 'get',
  path: '/api/Filter',
  tags: ['Filter'],
  summary: 'All Smart Filters for the authenticated user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SmartFilterDtoSchema) },
        'application/json': { schema: z.array(SmartFilterDtoSchema) },
        'text/json': { schema: z.array(SmartFilterDtoSchema) },
      },
    },
  },
})

export const deleteApiFilterRoute = createRoute({
  method: 'delete',
  path: '/api/Filter',
  tags: ['Filter'],
  summary: 'Delete the smart filter for the authenticated user',
  description: 'User must not be in Kavita.Models.Constants.PolicyConstants.ReadOnlyRole',
  request: {
    query: z.object({
      filterId: z
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
            name: 'filterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiFilterEncodeSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Filter/encode/series',
  tags: ['Filter'],
  summary: 'Encode a Series filter',
  request: {
    body: {
      description: 'This must be entityType Series',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiFilterEncodeReadingListRoute = createRoute({
  method: 'post',
  path: '/api/Filter/encode/reading-list',
  tags: ['Filter'],
  summary: 'Encode a Reading List filter',
  request: {
    body: {
      description: 'This must be entityType ReadingList',
      content: {
        'application/json': { schema: ReadingListFilterDtoSchema },
        'text/json': { schema: ReadingListFilterDtoSchema },
        'application/*+json': { schema: ReadingListFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiFilterEncodePersonRoute = createRoute({
  method: 'post',
  path: '/api/Filter/encode/person',
  tags: ['Filter'],
  summary: 'Encode a Person Filter',
  request: {
    body: {
      description: 'This must be entityType Person',
      content: {
        'application/json': { schema: PersonFilterDtoSchema },
        'text/json': { schema: PersonFilterDtoSchema },
        'application/*+json': { schema: PersonFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiFilterEncodeAnnotationRoute = createRoute({
  method: 'post',
  path: '/api/Filter/encode/annotation',
  tags: ['Filter'],
  summary: 'Encode an Annotation Filter',
  request: {
    body: {
      description: 'This must be entityType Annotation',
      content: {
        'application/json': { schema: AnnotationFilterDtoSchema },
        'text/json': { schema: AnnotationFilterDtoSchema },
        'application/*+json': { schema: AnnotationFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiFilterDecodeRoute = createRoute({
  method: 'post',
  path: '/api/Filter/decode',
  tags: ['Filter'],
  summary: 'Decodes the Filter',
  description:
    'Decoded filter will always have the same shape of Kavita.Models.DTOs.Filtering.v2.IFilterDto`2.\n            The concrete class is driven by `EntityType`.\n            Classes: Kavita.Models.DTOs.Filtering.v2.Requests.SeriesFilterV2Dto, Kavita.Models.DTOs.Filtering.v2.Requests.PersonFilterDto, Kavita.Models.DTOs.Filtering.v2.Requests.AnnotationFilterDto, Kavita.Models.DTOs.Filtering.v2.Requests.ReadingListFilterDto',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DecodeFilterDtoSchema },
        'text/json': { schema: DecodeFilterDtoSchema },
        'application/*+json': { schema: DecodeFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: IFilterDtoSchema },
        'application/json': { schema: IFilterDtoSchema },
        'text/json': { schema: IFilterDtoSchema },
      },
    },
  },
})

export const postApiFilterRenameRoute = createRoute({
  method: 'post',
  path: '/api/Filter/rename',
  tags: ['Filter'],
  summary: 'Rename a Smart Filter given the filterId and new name',
  request: {
    query: z.object({
      filterId: z
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
            name: 'filterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiFontAllRoute = createRoute({
  method: 'get',
  path: '/api/Font/all',
  tags: ['Font'],
  summary: 'List out the fonts',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(EpubFontDtoSchema) },
        'application/json': { schema: z.array(EpubFontDtoSchema) },
        'text/json': { schema: z.array(EpubFontDtoSchema) },
      },
    },
  },
})

export const getApiFontRoute = createRoute({
  method: 'get',
  path: '/api/Font',
  tags: ['Font'],
  summary: 'Returns a font file',
  request: {
    query: z.object({
      fontId: z
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
            name: 'fontId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiFontRoute = createRoute({
  method: 'delete',
  path: '/api/Font',
  tags: ['Font'],
  summary:
    'Removes a font family from the system. The family is validated for in-use server side and only removed when\nit is not selected by a user, or when an admin forces the deletion.',
  request: {
    query: z.object({
      fontId: z
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
            name: 'fontId',
            in: 'query',
            description: 'Any file within the family to delete',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'If the family is in use and an admin wants it deleted, they must confirm to force delete it. This is prompted in the UI.',
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
        'text/plain': { schema: FontDeleteResultDtoSchema },
        'application/json': { schema: FontDeleteResultDtoSchema },
        'text/json': { schema: FontDeleteResultDtoSchema },
      },
    },
  },
})

export const postApiFontUploadRoute = createRoute({
  method: 'post',
  path: '/api/Font/upload',
  tags: ['Font'],
  summary: 'Manual upload',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formFile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: '' }),
            })
            .openapi({ required: [] }),
          encoding: { formFile: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: EpubFontDtoSchema },
        'application/json': { schema: EpubFontDtoSchema },
        'text/json': { schema: EpubFontDtoSchema },
      },
    },
  },
})

export const postApiFontUploadByUrlRoute = createRoute({
  method: 'post',
  path: '/api/Font/upload-by-url',
  tags: ['Font'],
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'url', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(EpubFontDtoSchema) },
        'application/json': { schema: z.array(EpubFontDtoSchema) },
        'text/json': { schema: z.array(EpubFontDtoSchema) },
      },
    },
  },
})

export const getApiHealthRoute = createRoute({
  method: 'get',
  path: '/api/Health',
  tags: ['Health'],
  summary: 'No-op method that just returns Ok. Used for health checks in Docker containers.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiImageChapterCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/chapter-cover',
  tags: ['Image'],
  summary: 'Returns cover image for Chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageLibraryCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/library-cover',
  tags: ['Image'],
  summary: 'Returns cover image for Library',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageVolumeCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/volume-cover',
  tags: ['Image'],
  summary: 'Returns cover image for Volume',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageSeriesCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/series-cover',
  tags: ['Image'],
  summary: 'Returns cover image for Series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: 'Id of Series',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageCollectionCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/collection-cover',
  tags: ['Image'],
  summary: 'Returns cover image for Collection',
  request: {
    query: z.object({
      collectionTagId: z
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
            name: 'collectionTagId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageReadinglistCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/readinglist-cover',
  tags: ['Image'],
  summary: 'Returns cover image for a Reading List',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageBookmarkRoute = createRoute({
  method: 'get',
  path: '/api/Image/bookmark',
  tags: ['Image'],
  summary: 'Returns image for a given bookmark page',
  description:
    'This request is served unauthenticated, but user must be passed via api key to validate',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageNum: z
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
            name: 'pageNum',
            in: 'query',
            description: 'Starts at 0',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      imageOffset: z
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
            name: 'imageOffset',
            in: 'query',
            description: 'Only applicable for Epubs - handles multiple images on one page',
            schema: { type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageWebLinkRoute = createRoute({
  method: 'get',
  path: '/api/Image/web-link',
  tags: ['Image'],
  summary: 'Returns the image associated with a web-link',
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImagePublisherRoute = createRoute({
  method: 'get',
  path: '/api/Image/publisher',
  tags: ['Image'],
  summary: 'Returns the image associated with a publisher',
  request: {
    query: z.object({
      publisherName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'publisherName',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImagePersonCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/person-cover',
  tags: ['Image'],
  summary: 'Returns cover image for Person',
  request: {
    query: z.object({
      personId: z
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
            name: 'personId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageUserCoverRoute = createRoute({
  method: 'get',
  path: '/api/Image/user-cover',
  tags: ['Image'],
  summary: 'Returns cover image for User',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageCoverUploadRoute = createRoute({
  method: 'get',
  path: '/api/Image/cover-upload',
  tags: ['Image'],
  summary: 'Returns a temp coverupload image',
  description: 'Requires Admin Role to perform upload',
  request: {
    query: z.object({
      filename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filename',
            in: 'query',
            description: 'Filename of file. This is used with upload/upload-by-url',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiImageExternalSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Image/external/series',
  tags: ['Image'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: z.array(ExternalCoverResponseDtoSchema) },
        'application/json': { schema: z.array(ExternalCoverResponseDtoSchema) },
        'text/json': { schema: z.array(ExternalCoverResponseDtoSchema) },
      },
    },
  },
})

export const getApiImageExternalVolumeRoute = createRoute({
  method: 'get',
  path: '/api/Image/external/volume',
  tags: ['Image'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      volumeId: z
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
            name: 'volumeId',
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
        'text/plain': { schema: z.array(ExternalCoverResponseDtoSchema) },
        'application/json': { schema: z.array(ExternalCoverResponseDtoSchema) },
        'text/json': { schema: z.array(ExternalCoverResponseDtoSchema) },
      },
    },
  },
})

export const getApiImageExternalChapterRoute = createRoute({
  method: 'get',
  path: '/api/Image/external/chapter',
  tags: ['Image'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      chapterId: z
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
            name: 'chapterId',
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
        'text/plain': { schema: z.array(ExternalCoverResponseDtoSchema) },
        'application/json': { schema: z.array(ExternalCoverResponseDtoSchema) },
        'text/json': { schema: z.array(ExternalCoverResponseDtoSchema) },
      },
    },
  },
})

export const postApiKavitaPlusAuditEntriesRoute = createRoute({
  method: 'post',
  path: '/api/kavita-plus-audit/entries',
  tags: ['KavitaPlusAudit'],
  summary: 'Returns a paged, filtered list of all Kavita+ audit events. Admin only.',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: KavitaPlusAuditFilterDtoSchema },
        'text/json': { schema: KavitaPlusAuditFilterDtoSchema },
        'application/*+json': { schema: KavitaPlusAuditFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(KavitaPlusAuditEntryDtoSchema) },
        'application/json': { schema: z.array(KavitaPlusAuditEntryDtoSchema) },
        'text/json': { schema: z.array(KavitaPlusAuditEntryDtoSchema) },
      },
    },
  },
})

export const getApiKavitaPlusAuditEntriesSeriesSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/kavita-plus-audit/entries/series/{seriesId}',
  tags: ['KavitaPlusAudit'],
  summary:
    'Returns Kavita+ audit info scoped to a single series, for the popover.\nScrobble events are filtered to the calling user unless they are an admin.',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: KavitaPlusAuditSeriesInfoDtoSchema },
        'application/json': { schema: KavitaPlusAuditSeriesInfoDtoSchema },
        'text/json': { schema: KavitaPlusAuditSeriesInfoDtoSchema },
      },
    },
  },
})

export const getApiKavitaPlusAuditStatsRoute = createRoute({
  method: 'get',
  path: '/api/kavita-plus-audit/stats',
  tags: ['KavitaPlusAudit'],
  summary: 'Returns aggregate stats for the admin audit feed',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: KavitaPlusAuditStatsDtoSchema },
        'application/json': { schema: KavitaPlusAuditStatsDtoSchema },
        'text/json': { schema: KavitaPlusAuditStatsDtoSchema },
      },
    },
  },
})

export const getApiKavitaPlusAuditMyStatsRoute = createRoute({
  method: 'get',
  path: '/api/kavita-plus-audit/my-stats',
  tags: ['KavitaPlusAudit'],
  summary: 'Aggregate stats for my activity audit feed',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: KavitaPlusMyAuditStatsDtoSchema },
        'application/json': { schema: KavitaPlusMyAuditStatsDtoSchema },
        'text/json': { schema: KavitaPlusMyAuditStatsDtoSchema },
      },
    },
  },
})

export const postApiKavitaPlusAuditMyActivityRoute = createRoute({
  method: 'post',
  path: '/api/kavita-plus-audit/my-activity',
  tags: ['KavitaPlusAudit'],
  summary: "Returns the calling user's own Kavita+ activity, paged and filtered.",
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: KavitaPlusAuditFilterDtoSchema },
        'text/json': { schema: KavitaPlusAuditFilterDtoSchema },
        'application/*+json': { schema: KavitaPlusAuditFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(KavitaPlusAuditEntryDtoSchema) },
        'application/json': { schema: z.array(KavitaPlusAuditEntryDtoSchema) },
        'text/json': { schema: z.array(KavitaPlusAuditEntryDtoSchema) },
      },
    },
  },
})

export const getApiKavitaPlusAuditFailedScrobbleEventsRoute = createRoute({
  method: 'get',
  path: '/api/kavita-plus-audit/failed-scrobble-events',
  tags: ['KavitaPlusAudit'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiKoreaderApiKeyUsersAuthRoute = createRoute({
  method: 'get',
  path: '/api/Koreader/{apiKey}/users/auth',
  tags: ['Koreader'],
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: { name: 'apiKey', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiKoreaderApiKeySyncsProgressRoute = createRoute({
  method: 'put',
  path: '/api/Koreader/{apiKey}/syncs/progress',
  tags: ['Koreader'],
  summary:
    'Syncs book progress with Kavita. Will attempt to save the underlying reader position if possible.',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: KoreaderBookDtoSchema },
        'text/json': { schema: KoreaderBookDtoSchema },
        'application/*+json': { schema: KoreaderBookDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: KoreaderProgressUpdateDtoSchema },
        'application/json': { schema: KoreaderProgressUpdateDtoSchema },
        'text/json': { schema: KoreaderProgressUpdateDtoSchema },
      },
    },
  },
})

export const getApiKoreaderApiKeySyncsProgressEbookHashRoute = createRoute({
  method: 'get',
  path: '/api/Koreader/{apiKey}/syncs/progress/{ebookHash}',
  tags: ['Koreader'],
  summary: 'Gets book progress from Kavita, if not found will return a 400',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ebookHash: z
        .string()
        .openapi({
          param: {
            name: 'ebookHash',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryCreateRoute = createRoute({
  method: 'post',
  path: '/api/Library/create',
  tags: ['Library'],
  summary: 'Creates a new Library. Upon library creation, adds new library to all Admin accounts.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateLibraryDtoSchema },
        'text/json': { schema: UpdateLibraryDtoSchema },
        'application/*+json': { schema: UpdateLibraryDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: LibraryDtoSchema },
        'application/json': { schema: LibraryDtoSchema },
        'text/json': { schema: LibraryDtoSchema },
      },
    },
  },
})

export const getApiLibraryListRoute = createRoute({
  method: 'get',
  path: '/api/Library/list',
  tags: ['Library'],
  summary: 'Returns a list of directories for a given path. If path is empty, returns root drives.',
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(DirectoryDtoSchema) },
        'application/json': { schema: z.array(DirectoryDtoSchema) },
        'text/json': { schema: z.array(DirectoryDtoSchema) },
      },
    },
  },
})

export const postApiLibraryHasFilesAtRootRoute = createRoute({
  method: 'post',
  path: '/api/Library/has-files-at-root',
  tags: ['Library'],
  summary:
    'For each root, checks if there are any supported files at root to warn the user during library creation about an invalid setup',
  request: {
    body: {
      content: {
        'application/json': { schema: CheckForFilesInFolderRootsDtoSchema },
        'text/json': { schema: CheckForFilesInFolderRootsDtoSchema },
        'application/*+json': { schema: CheckForFilesInFolderRootsDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiLibraryRoute = createRoute({
  method: 'get',
  path: '/api/Library',
  tags: ['Library'],
  summary: 'Return a specific library',
  description:
    'If the user is not an admin, only id, type, and name will be returned (Kavita.Models.DTOs.LiteLibraryDto)',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
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
        'text/plain': { schema: LibraryDtoSchema },
        'application/json': { schema: LibraryDtoSchema },
        'text/json': { schema: LibraryDtoSchema },
      },
    },
  },
})

export const getApiLibraryLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/Library/libraries',
  tags: ['Library'],
  summary: 'Return all libraries in the Server',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LibraryDtoSchema) },
        'application/json': { schema: z.array(LibraryDtoSchema) },
        'text/json': { schema: z.array(LibraryDtoSchema) },
      },
    },
  },
})

export const getApiLibraryUserLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/Library/user-libraries',
  tags: ['Library'],
  summary: 'Gets libraries for the given user that you also have access to',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(LibraryDtoSchema) },
        'application/json': { schema: z.array(LibraryDtoSchema) },
        'text/json': { schema: z.array(LibraryDtoSchema) },
      },
    },
  },
})

export const getApiLibraryJumpBarRoute = createRoute({
  method: 'get',
  path: '/api/Library/jump-bar',
  tags: ['Library'],
  summary: 'For a given library, generate the jump bar information',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(JumpKeyDtoSchema) },
        'application/json': { schema: z.array(JumpKeyDtoSchema) },
        'text/json': { schema: z.array(JumpKeyDtoSchema) },
      },
    },
  },
})

export const postApiLibraryGrantAccessRoute = createRoute({
  method: 'post',
  path: '/api/Library/grant-access',
  tags: ['Library'],
  summary: 'Grants a user account access to a Library',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateLibraryForUserDtoSchema },
        'text/json': { schema: UpdateLibraryForUserDtoSchema },
        'application/*+json': { schema: UpdateLibraryForUserDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MemberDtoSchema },
        'application/json': { schema: MemberDtoSchema },
        'text/json': { schema: MemberDtoSchema },
      },
    },
  },
})

export const postApiLibraryScanRoute = createRoute({
  method: 'post',
  path: '/api/Library/scan',
  tags: ['Library'],
  summary: 'Scans a given library for file changes.',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'If true, will ignore any optimizations to avoid file I/O and will treat similar to a first scan',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryFolderWatchRetryRoute = createRoute({
  method: 'post',
  path: '/api/Library/folder-watch/retry',
  tags: ['Library'],
  summary: 'Watches the library again after its watcher missed a change or kept failing',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
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
        'text/plain': { schema: FolderWatchStatusDtoSchema },
        'application/json': { schema: FolderWatchStatusDtoSchema },
        'text/json': { schema: FolderWatchStatusDtoSchema },
      },
    },
  },
})

export const getApiLibraryWatchStatusRoute = createRoute({
  method: 'get',
  path: '/api/Library/watch-status',
  tags: ['Library'],
  summary: 'How the library notices changes now and why',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
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
        'text/plain': { schema: FolderWatchStatusDtoSchema },
        'application/json': { schema: FolderWatchStatusDtoSchema },
        'text/json': { schema: FolderWatchStatusDtoSchema },
      },
    },
  },
})

export const postApiLibraryScanMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Library/scan-multiple',
  tags: ['Library'],
  summary: 'Enqueues a bunch of library scans',
  request: {
    body: {
      content: {
        'application/json': { schema: BulkActionDtoSchema },
        'text/json': { schema: BulkActionDtoSchema },
        'application/*+json': { schema: BulkActionDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryScanAllRoute = createRoute({
  method: 'post',
  path: '/api/Library/scan-all',
  tags: ['Library'],
  summary:
    'Scans a given library for file changes. If another scan task is in progress, will reschedule the invocation for 3 hours in future.',
  request: {
    query: z.object({
      force: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'If true, will ignore any optimizations to avoid file I/O and will treat similar to a first scan',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryRefreshMetadataRoute = createRoute({
  method: 'post',
  path: '/api/Library/refresh-metadata',
  tags: ['Library'],
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      forceColorscape: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceColorscape',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryRefreshMetadataMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Library/refresh-metadata-multiple',
  tags: ['Library'],
  request: {
    query: z.object({
      forceColorscape: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceColorscape',
            in: 'query',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BulkActionDtoSchema },
        'text/json': { schema: BulkActionDtoSchema },
        'application/*+json': { schema: BulkActionDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryCopySettingsFromRoute = createRoute({
  method: 'post',
  path: '/api/Library/copy-settings-from',
  tags: ['Library'],
  summary: 'Copy the library settings (adv tab + optional type) to a set of other libraries.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: CopySettingsFromLibraryDtoSchema },
        'text/json': { schema: CopySettingsFromLibraryDtoSchema },
        'application/*+json': { schema: CopySettingsFromLibraryDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLibraryScanFolderRoute = createRoute({
  method: 'post',
  path: '/api/Library/scan-folder',
  tags: ['Library'],
  summary:
    'Given a valid path, will invoke either a Scan Series or Scan Library. If the folder does not exist within Kavita, the request will be ignored',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ScanFolderDtoSchema },
        'text/json': { schema: ScanFolderDtoSchema },
        'application/*+json': { schema: ScanFolderDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiLibraryDeleteRoute = createRoute({
  method: 'delete',
  path: '/api/Library/delete',
  tags: ['Library'],
  summary: 'Deletes the library and all series within it.',
  description: 'This does not touch any files',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const deleteApiLibraryDeleteMultipleRoute = createRoute({
  method: 'delete',
  path: '/api/Library/delete-multiple',
  tags: ['Library'],
  summary: 'Deletes multiple libraries and all series within it.',
  description: 'This does not touch any files',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiLibraryNameExistsRoute = createRoute({
  method: 'get',
  path: '/api/Library/name-exists',
  tags: ['Library'],
  summary: 'Checks if the library name exists or not',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'If empty or null, will return true as that is invalid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiLibraryUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Library/update',
  tags: ['Library'],
  summary: 'Updates an existing Library with new name, folders, and/or type.',
  description: 'Any folder or type change will invoke a scan.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateLibraryDtoSchema },
        'text/json': { schema: UpdateLibraryDtoSchema },
        'application/*+json': { schema: UpdateLibraryDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiLibraryMetadataProvidersRoute = createRoute({
  method: 'get',
  path: '/api/Library/metadata-providers',
  tags: ['Library'],
  summary:
    'Return all Kavita.Models.Entities.Enums.MetadataProviders that are supported by the given Kavita.Models.Entities.Enums.LibraryType"/>',
  request: {
    query: z.object({
      libraryType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LibraryTypeSchema.openapi({
            param: {
              name: 'libraryType',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/LibraryType' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(MetadataProviderSchema) },
        'application/json': { schema: z.array(MetadataProviderSchema) },
        'text/json': { schema: z.array(MetadataProviderSchema) },
      },
    },
  },
})

export const getApiLibraryMetadataEnabledLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/Library/metadata-enabled-libraries',
  tags: ['Library'],
  summary: 'Kavita.Models.Entities.Enums.LibraryType with KavitaPlus metadata support',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LibraryTypeSchema) },
        'application/json': { schema: z.array(LibraryTypeSchema) },
        'text/json': { schema: z.array(LibraryTypeSchema) },
      },
    },
  },
})

export const getApiLibraryScrobbleEnabledLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/Library/scrobble-enabled-libraries',
  tags: ['Library'],
  summary: 'Kavita.Models.Entities.Enums.LibraryType with KavitaPlus scrobble support',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LibraryTypeSchema) },
        'application/json': { schema: z.array(LibraryTypeSchema) },
        'text/json': { schema: z.array(LibraryTypeSchema) },
      },
    },
  },
})

export const getApiLibraryTypeRoute = createRoute({
  method: 'get',
  path: '/api/Library/type',
  tags: ['Library'],
  summary: 'Returns the type of the underlying library',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: LibraryTypeSchema },
        'application/json': { schema: LibraryTypeSchema },
        'text/json': { schema: LibraryTypeSchema },
      },
    },
  },
})

export const getApiLicenseValidLicenseRoute = createRoute({
  method: 'get',
  path: '/api/License/valid-license',
  tags: ['License'],
  summary: "Checks if the user's license is valid or not",
  request: {
    query: z.object({
      forceCheck: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceCheck',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiLicenseHasLicenseRoute = createRoute({
  method: 'get',
  path: '/api/License/has-license',
  tags: ['License'],
  summary: 'Has any license registered with the instance. Does not validate against Kavita+ API',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiLicenseInfoRoute = createRoute({
  method: 'get',
  path: '/api/License/info',
  tags: ['License'],
  summary: 'Asks Kavita+ for the latest license info',
  request: {
    query: z.object({
      forceCheck: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceCheck',
            in: 'query',
            description: 'Force checking the API and skip the 8-hour cache',
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
        'text/plain': { schema: LicenseInfoDtoSchema },
        'application/json': { schema: LicenseInfoDtoSchema },
        'text/json': { schema: LicenseInfoDtoSchema },
      },
    },
  },
})

export const postApiLicenseRoute = createRoute({
  method: 'post',
  path: '/api/License',
  tags: ['License'],
  summary: 'Updates server license',
  description: 'Caches the result when successful',
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateLicenseDtoSchema },
        'text/json': { schema: UpdateLicenseDtoSchema },
        'application/*+json': { schema: UpdateLicenseDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: KavitaPlusRegisterResultDtoSchema },
        'application/json': { schema: KavitaPlusRegisterResultDtoSchema },
        'text/json': { schema: KavitaPlusRegisterResultDtoSchema },
      },
    },
  },
})

export const deleteApiLicenseRoute = createRoute({
  method: 'delete',
  path: '/api/License',
  tags: ['License'],
  summary: 'Remove the Kavita+ License on the Server',
  responses: { 200: { description: 'OK' } },
})

export const postApiLicenseResetRoute = createRoute({
  method: 'post',
  path: '/api/License/reset',
  tags: ['License'],
  summary: 'Break the registration between Kavita+ and this instance',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateLicenseDtoSchema },
        'text/json': { schema: UpdateLicenseDtoSchema },
        'application/*+json': { schema: UpdateLicenseDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiLicenseResendLicenseRoute = createRoute({
  method: 'post',
  path: '/api/License/resend-license',
  tags: ['License'],
  summary: 'Resend the welcome email to the user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiLicenseProviderHealthRoute = createRoute({
  method: 'get',
  path: '/api/License/provider-health',
  tags: ['License'],
  summary:
    'Provides a 15 min snapshot of Kavita+ Providers (Hardcover, AniList, MangaBaka, etc.) API health.\nKavita caches every 45 mins.',
  request: {
    query: z.object({
      forceCheck: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceCheck',
            in: 'query',
            description: 'Bypass cache and force a reload from Kavita+ server',
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
        'text/plain': { schema: z.array(KavitaPlusProviderHealthSnapshotDtoSchema) },
        'application/json': { schema: z.array(KavitaPlusProviderHealthSnapshotDtoSchema) },
        'text/json': { schema: z.array(KavitaPlusProviderHealthSnapshotDtoSchema) },
      },
    },
  },
})

export const getApiLicenseStatsRoute = createRoute({
  method: 'get',
  path: '/api/License/stats',
  tags: ['License'],
  summary: 'Providers how many interactions this license has had with Kavita+ over a lifetime',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: KavitaPlusLicenseUsageDtoSchema },
        'application/json': { schema: KavitaPlusLicenseUsageDtoSchema },
        'text/json': { schema: KavitaPlusLicenseUsageDtoSchema },
      },
    },
  },
})

export const deleteApiLicenseCancelRoute = createRoute({
  method: 'delete',
  path: '/api/License/cancel',
  tags: ['License'],
  summary:
    'Cancels the active Kavita+ Subscription tied to this server. License will elapse at end of billing period.',
  request: {
    body: {
      content: {
        'application/json': { schema: CancelKavitaPlusLicenseDtoSchema },
        'text/json': { schema: CancelKavitaPlusLicenseDtoSchema },
        'application/*+json': { schema: CancelKavitaPlusLicenseDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiLicenseProductsRoute = createRoute({
  method: 'get',
  path: '/api/License/products',
  tags: ['License'],
  summary:
    'Returns the available Kavita+ products (billing interval and list price) the renew flow can select.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(KavitaPlusProductInfoDtoSchema) },
        'application/json': { schema: z.array(KavitaPlusProductInfoDtoSchema) },
        'text/json': { schema: z.array(KavitaPlusProductInfoDtoSchema) },
      },
    },
  },
})

export const postApiLicenseRenewRoute = createRoute({
  method: 'post',
  path: '/api/License/renew',
  tags: ['License'],
  summary:
    'Renews the subscription on the given billing interval and returns the Stripe Checkout (Pay Now) URL the customer visits to pay.',
  request: {
    body: {
      content: {
        'application/json': { schema: RenewKavitaPlusLicenseDtoSchema },
        'text/json': { schema: RenewKavitaPlusLicenseDtoSchema },
        'application/*+json': { schema: RenewKavitaPlusLicenseDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiLicenseChangeEmailRoute = createRoute({
  method: 'post',
  path: '/api/License/change-email',
  tags: ['License'],
  summary:
    'Change email on Kavita+ License/Stripe - Sends a confirmation email on Kavita+ side. No-op for server.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ChangeEmailOnLicenseDtoSchema },
        'text/json': { schema: ChangeEmailOnLicenseDtoSchema },
        'application/*+json': { schema: ChangeEmailOnLicenseDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiLocaleRoute = createRoute({
  method: 'get',
  path: '/api/Locale',
  tags: ['Locale'],
  summary: 'Returns all applicable locales on the server',
  description: 'This can be cached as it will not change per version.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(KavitaLocaleSchema) },
        'application/json': { schema: z.array(KavitaLocaleSchema) },
        'text/json': { schema: z.array(KavitaLocaleSchema) },
      },
    },
  },
})

export const postApiManageSeriesMetadataRoute = createRoute({
  method: 'post',
  path: '/api/Manage/series-metadata',
  tags: ['Manage'],
  summary:
    'Returns a list of all Series that is Kavita+ applicable to metadata match and the status of it',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ManageMatchFilterDtoSchema },
        'text/json': { schema: ManageMatchFilterDtoSchema },
        'application/*+json': { schema: ManageMatchFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ManageMatchSeriesDtoSchema) },
        'application/json': { schema: z.array(ManageMatchSeriesDtoSchema) },
        'text/json': { schema: z.array(ManageMatchSeriesDtoSchema) },
      },
    },
  },
})

export const getApiManageMatchedSeriesCountsRoute = createRoute({
  method: 'get',
  path: '/api/Manage/matched-series-counts',
  tags: ['Manage'],
  summary: 'Returns high level counts for matched series page',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MatchedExternalSeriesCountDtoSchema },
        'application/json': { schema: MatchedExternalSeriesCountDtoSchema },
        'text/json': { schema: MatchedExternalSeriesCountDtoSchema },
      },
    },
  },
})

export const getApiMetadataGenresRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/genres',
  tags: ['Metadata'],
  summary: 'Fetches genres from the instance',
  request: {
    query: z.object({
      libraryIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryIds',
            in: 'query',
            description: 'String separated libraryIds or null for all genres',
            schema: { type: 'string' },
            required: false,
          },
        }),
      context: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          QueryContextSchema.openapi({
            param: {
              name: 'context',
              in: 'query',
              description: 'Context from which this API was invoked',
              schema: { $ref: '#/components/schemas/QueryContext' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(GenreTagDtoSchema) },
        'application/json': { schema: z.array(GenreTagDtoSchema) },
        'text/json': { schema: z.array(GenreTagDtoSchema) },
      },
    },
  },
})

export const postApiMetadataGenresWithCountsRoute = createRoute({
  method: 'post',
  path: '/api/Metadata/genres-with-counts',
  tags: ['Metadata'],
  summary: 'Returns a list of Genres with counts for counts when Genre is on Series/Chapter',
  request: {
    body: {
      content: {
        'application/json': { schema: UserParamsSchema },
        'text/json': { schema: UserParamsSchema },
        'application/*+json': { schema: UserParamsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(BrowseGenreDtoSchema) },
        'application/json': { schema: z.array(BrowseGenreDtoSchema) },
        'text/json': { schema: z.array(BrowseGenreDtoSchema) },
      },
    },
  },
})

export const getApiMetadataPeopleByRoleRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/people-by-role',
  tags: ['Metadata'],
  summary: 'Fetches people from the instance by role',
  request: {
    query: z.object({
      role: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PersonRoleSchema.openapi({
            param: {
              name: 'role',
              in: 'query',
              description: 'role',
              schema: { $ref: '#/components/schemas/PersonRole' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(PersonDtoSchema) },
        'application/json': { schema: z.array(PersonDtoSchema) },
        'text/json': { schema: z.array(PersonDtoSchema) },
      },
    },
  },
})

export const getApiMetadataPeopleRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/people',
  tags: ['Metadata'],
  summary: 'Fetches people from the instance',
  request: {
    query: z.object({
      libraryIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryIds',
            in: 'query',
            description: 'String separated libraryIds or null for all people',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(PersonDtoSchema) },
        'application/json': { schema: z.array(PersonDtoSchema) },
        'text/json': { schema: z.array(PersonDtoSchema) },
      },
    },
  },
})

export const getApiMetadataTagsRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/tags',
  tags: ['Metadata'],
  summary: 'Fetches all tags from the instance',
  request: {
    query: z.object({
      libraryIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryIds',
            in: 'query',
            description: 'String separated libraryIds or null for all tags',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(TagDtoSchema) },
        'application/json': { schema: z.array(TagDtoSchema) },
        'text/json': { schema: z.array(TagDtoSchema) },
      },
    },
  },
})

export const getApiMetadataReadinglistTagsRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/readinglist-tags',
  tags: ['Metadata'],
  summary: 'Fetches Reading List Tags from the instance',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ReadingListTagDtoSchema) },
        'application/json': { schema: z.array(ReadingListTagDtoSchema) },
        'text/json': { schema: z.array(ReadingListTagDtoSchema) },
      },
    },
  },
})

export const postApiMetadataTagsWithCountsRoute = createRoute({
  method: 'post',
  path: '/api/Metadata/tags-with-counts',
  tags: ['Metadata'],
  summary: 'Returns a list of Tags with counts for counts when Tag is on Series/Chapter',
  request: {
    body: {
      content: {
        'application/json': { schema: UserParamsSchema },
        'text/json': { schema: UserParamsSchema },
        'application/*+json': { schema: UserParamsSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(BrowseTagDtoSchema) },
        'application/json': { schema: z.array(BrowseTagDtoSchema) },
        'text/json': { schema: z.array(BrowseTagDtoSchema) },
      },
    },
  },
})

export const getApiMetadataAgeRatingsRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/age-ratings',
  tags: ['Metadata'],
  summary: 'Fetches all age ratings from the instance',
  description: 'This API is cached for 1 hour, varying by libraryIds',
  request: {
    query: z.object({
      libraryIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryIds',
            in: 'query',
            description: 'String separated libraryIds or null for all ratings',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(AgeRatingDtoSchema) },
        'application/json': { schema: z.array(AgeRatingDtoSchema) },
        'text/json': { schema: z.array(AgeRatingDtoSchema) },
      },
    },
  },
})

export const getApiMetadataPublicationStatusRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/publication-status',
  tags: ['Metadata'],
  summary: "Fetches all publication status' from the instance",
  description: 'This API is cached for 1 hour, varying by libraryIds',
  request: {
    query: z.object({
      libraryIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryIds',
            in: 'query',
            description: 'String separated libraryIds or null for all publication status',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(AgeRatingDtoSchema) },
        'application/json': { schema: z.array(AgeRatingDtoSchema) },
        'text/json': { schema: z.array(AgeRatingDtoSchema) },
      },
    },
  },
})

export const getApiMetadataLanguagesRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/languages',
  tags: ['Metadata'],
  summary:
    'Fetches all age languages from the libraries passed (or if none passed, all in the server)',
  description:
    'This does not perform RBS for the user if they have Library access due to the non-sensitive nature of languages',
  request: {
    query: z.object({
      libraryIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryIds',
            in: 'query',
            description: 'String separated libraryIds or null for all ratings',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LanguageDtoSchema) },
        'application/json': { schema: z.array(LanguageDtoSchema) },
        'text/json': { schema: z.array(LanguageDtoSchema) },
      },
    },
  },
})

export const getApiMetadataAllLanguagesRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/all-languages',
  tags: ['Metadata'],
  summary: 'Returns all languages Kavita can accept',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LanguageDtoSchema) },
        'application/json': { schema: z.array(LanguageDtoSchema) },
        'text/json': { schema: z.array(LanguageDtoSchema) },
      },
    },
  },
})

export const getApiMetadataAllBcp47LanguagesRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/all-bcp47-languages',
  tags: ['Metadata'],
  summary: 'Returns a list of all BCP47 Languages. `IsoCode` stores the BCP47 code',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LanguageDtoSchema) },
        'application/json': { schema: z.array(LanguageDtoSchema) },
        'text/json': { schema: z.array(LanguageDtoSchema) },
      },
    },
  },
})

export const getApiMetadataLanguageTitleRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/language-title',
  tags: ['Metadata'],
  summary: 'Given a language code returns the display name',
  request: {
    query: z.object({
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'code',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiMetadataSeriesDetailPlusRoute = createRoute({
  method: 'get',
  path: '/api/Metadata/series-detail-plus',
  tags: ['Metadata'],
  summary: 'Fetches the details needed from Kavita+ for Series Detail page',
  description: 'This will hit upstream K+ if the data in local db is 2 weeks old',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: 'Series Id',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      libraryType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LibraryTypeSchema.openapi({
            param: {
              name: 'libraryType',
              in: 'query',
              description: 'Library Type',
              schema: { $ref: '#/components/schemas/LibraryType' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: SeriesDetailPlusDtoSchema },
        'application/json': { schema: SeriesDetailPlusDtoSchema },
        'text/json': { schema: SeriesDetailPlusDtoSchema },
      },
    },
  },
})

export const getApiOAuthStartRoute = createRoute({
  method: 'get',
  path: '/api/OAuth/start',
  tags: ['OAuth'],
  summary: 'Start the OAuth flow for the given upstream, redirect (302!) to KavitaPlus',
  request: {
    query: z.object({
      upstream: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          OAuthUpstreamSchema.openapi({
            param: {
              name: 'upstream',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/OAuthUpstream' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOAuthCallbackRoute = createRoute({
  method: 'get',
  path: '/api/OAuth/callback',
  tags: ['OAuth'],
  summary: 'Callback from KavitaPlus.',
  request: {
    query: z.object({
      upstream: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          OAuthUpstreamSchema.openapi({
            param: {
              name: 'upstream',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/OAuthUpstream' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'Encrypted ApiKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      refreshToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'refreshToken',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expiresIn: z
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
            name: 'expiresIn',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getOidcLoginRoute = createRoute({
  method: 'get',
  path: '/Oidc/login',
  tags: ['Oidc'],
  request: {
    query: z.object({
      returnUrl: z
        .string()
        .default('/')
        .exactOptional()
        .openapi({
          param: {
            name: 'returnUrl',
            in: 'query',
            schema: { type: 'string', default: '/' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getOidcLogoutRoute = createRoute({
  method: 'get',
  path: '/Oidc/logout',
  tags: ['Oidc'],
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}',
  tags: ['Opds'],
  summary: "Returns the Catalogue for Kavita's OPDS Service",
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiOpdsApiKeyRoute = createRoute({
  method: 'post',
  path: '/api/Opds/{apiKey}',
  tags: ['Opds'],
  summary: "Returns the Catalogue for Kavita's OPDS Service",
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySmartFiltersFilterIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/smart-filters/{filterId}',
  tags: ['Opds'],
  summary: "Get the User's Smart Filter - Supports Pagination",
  description:
    'Smart filters have different entity types, this will resolve to the underlying entity',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: { name: 'apiKey', in: 'path', required: true, schema: { type: 'string' } },
        }),
      filterId: z
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
            name: 'filterId',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySmartFiltersRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/smart-filters',
  tags: ['Opds'],
  summary: "Get the User's Smart Filters (Dashboard Context) - Supports Pagination",
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/libraries',
  tags: ['Opds'],
  summary: "Get the User's Libraries - No Pagination Support",
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyWantToReadRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/want-to-read',
  tags: ['Opds'],
  summary: "Get the User's Want to Read list - Supports Pagination",
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyCollectionsRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/collections',
  tags: ['Opds'],
  summary: 'Get all Collections - Supports Pagination',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/collections/{collectionId}',
  tags: ['Opds'],
  summary: 'Get Series for a given Collection - Supports Pagination',
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
          z.int32(),
        )
        .openapi({
          param: {
            name: 'collectionId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyReadingListRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/reading-list',
  tags: ['Opds'],
  summary: "Get a User's Reading Lists - Supports Pagination",
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyReadingListReadingListIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/reading-list/{readingListId}',
  tags: ['Opds'],
  summary: 'Returns individual items (chapters) from Reading List by ID - Supports Pagination',
  request: {
    params: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyLibrariesLibraryIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/libraries/{libraryId}',
  tags: ['Opds'],
  summary: 'Returns Series from the Library - Supports Pagination',
  request: {
    params: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyRecentlyAddedRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/recently-added',
  tags: ['Opds'],
  summary: 'Returns Recently Added (Dashboard Feed) - Supports Pagination',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyRecentlyUpdatedRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/recently-updated',
  tags: ['Opds'],
  summary:
    'Get the Recently Updated Series (Dashboard) - Pagination available, total pages will not be filled due to underlying implementation',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyOnDeckRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/on-deck',
  tags: ['Opds'],
  summary: 'Get the On Deck (Dashboard) - Supports Pagination',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySeriesRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/series',
  tags: ['Opds'],
  summary: 'OPDS Search endpoint',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySearchRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/search',
  tags: ['Opds'],
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: { name: 'apiKey', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySeriesSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/series/{seriesId}',
  tags: ['Opds'],
  summary: 'Returns the items within a Series (Series Detail)',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/series/{seriesId}/volume/{volumeId}',
  tags: ['Opds'],
  summary: 'Returns items for a given Volume',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      volumeId: z
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
            name: 'volumeId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/series/{seriesId}/volume/{volumeId}/chapter/{chapterId}',
  tags: ['Opds'],
  summary: 'Gets items for a given Chapter',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      volumeId: z
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
            name: 'volumeId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      chapterId: z
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
            name: 'chapterId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilenameRoute =
  createRoute({
    method: 'get',
    path: '/api/Opds/{apiKey}/series/{seriesId}/volume/{volumeId}/chapter/{chapterId}/download/{filename}',
    tags: ['Opds'],
    summary: 'Downloads a file (user must have download permission)',
    request: {
      params: z.object({
        apiKey: z
          .string()
          .openapi({
            param: {
              name: 'apiKey',
              in: 'path',
              description: "User's API Key",
              required: true,
              schema: { type: 'string' },
            },
          }),
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
          .openapi({
            param: {
              name: 'seriesId',
              in: 'path',
              description: '',
              required: true,
              schema: { type: 'integer', format: 'int32' },
            },
          }),
        volumeId: z
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
              name: 'volumeId',
              in: 'path',
              description: '',
              required: true,
              schema: { type: 'integer', format: 'int32' },
            },
          }),
        chapterId: z
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
              name: 'chapterId',
              in: 'path',
              description: '',
              required: true,
              schema: { type: 'integer', format: 'int32' },
            },
          }),
        filename: z
          .string()
          .openapi({
            param: {
              name: 'filename',
              in: 'path',
              description: 'Not used. Only for Chunky to allow download links',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  })

export const getApiOpdsApiKeyImageRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/image',
  tags: ['Opds'],
  summary: 'This returns a streamed image following OPDS-PS v1.2',
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      saveProgress: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'saveProgress',
            in: 'query',
            description:
              'Optional parameter. Can pass false and progress saving will be suppressed',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiOpdsApiKeyFaviconRoute = createRoute({
  method: 'get',
  path: '/api/Opds/{apiKey}/favicon',
  tags: ['Opds'],
  request: {
    params: z.object({
      apiKey: z
        .string()
        .openapi({
          param: { name: 'apiKey', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiPanelsSaveProgressRoute = createRoute({
  method: 'post',
  path: '/api/Panels/save-progress',
  tags: ['Panels'],
  summary:
    'Saves the progress of a given chapter. This will generate a reading session with the estimated time from the\nlast progress till the current',
  request: {
    query: z.object({
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: ProgressDtoSchema },
        'text/json': { schema: ProgressDtoSchema },
        'application/*+json': { schema: ProgressDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiPanelsGetProgressRoute = createRoute({
  method: 'get',
  path: '/api/Panels/get-progress',
  tags: ['Panels'],
  summary: 'Gets the Progress of a given chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ProgressDtoSchema },
        'application/json': { schema: ProgressDtoSchema },
        'text/json': { schema: ProgressDtoSchema },
      },
    },
  },
})

export const getApiPersonRoute = createRoute({
  method: 'get',
  path: '/api/Person',
  tags: ['Person'],
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: PersonDtoSchema },
        'application/json': { schema: PersonDtoSchema },
        'text/json': { schema: PersonDtoSchema },
      },
    },
  },
})

export const getApiPersonSearchRoute = createRoute({
  method: 'get',
  path: '/api/Person/search',
  tags: ['Person'],
  summary: 'Find a person by name or alias against a query string',
  request: {
    query: z.object({
      queryString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queryString',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(PersonDtoSchema) },
        'application/json': { schema: z.array(PersonDtoSchema) },
        'text/json': { schema: z.array(PersonDtoSchema) },
      },
    },
  },
})

export const getApiPersonRolesRoute = createRoute({
  method: 'get',
  path: '/api/Person/roles',
  tags: ['Person'],
  summary: 'Returns all roles for a Person',
  request: {
    query: z.object({
      personId: z
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
            name: 'personId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(PersonRoleSchema) },
        'application/json': { schema: z.array(PersonRoleSchema) },
        'text/json': { schema: z.array(PersonRoleSchema) },
      },
    },
  },
})

export const postApiPersonAllRoute = createRoute({
  method: 'post',
  path: '/api/Person/all',
  tags: ['Person'],
  summary: 'Returns a list of authors and artists for browsing',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: PersonFilterDtoSchema },
        'text/json': { schema: PersonFilterDtoSchema },
        'application/*+json': { schema: PersonFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(BrowsePersonDtoSchema) },
        'application/json': { schema: z.array(BrowsePersonDtoSchema) },
        'text/json': { schema: z.array(BrowsePersonDtoSchema) },
      },
    },
  },
})

export const postApiPersonUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Person/update',
  tags: ['Person'],
  summary: 'Updates the Person',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdatePersonDtoSchema },
        'text/json': { schema: UpdatePersonDtoSchema },
        'application/*+json': { schema: UpdatePersonDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: PersonDtoSchema },
        'application/json': { schema: PersonDtoSchema },
        'text/json': { schema: PersonDtoSchema },
      },
    },
  },
})

export const getApiPersonCoversdbImageRoute = createRoute({
  method: 'get',
  path: '/api/Person/coversdb-image',
  tags: ['Person'],
  summary:
    'Returns the CoversDB image url for a Person, if one can be matched. Does not apply the cover.',
  request: {
    query: z.object({
      personId: z
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
            name: 'personId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiPersonSeriesKnownForRoute = createRoute({
  method: 'get',
  path: '/api/Person/series-known-for',
  tags: ['Person'],
  summary:
    'Returns the top 20 series that the "person" is known for. This will use Average Rating when applicable (Kavita+ field), else it\'s a random sort',
  request: {
    query: z.object({
      personId: z
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
            name: 'personId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const getApiPersonChaptersByRoleRoute = createRoute({
  method: 'get',
  path: '/api/Person/chapters-by-role',
  tags: ['Person'],
  summary: 'Returns all individual chapters by role. Limited to 20 results.',
  request: {
    query: z.object({
      personId: z
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
            name: 'personId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      role: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PersonRoleSchema.openapi({
            param: {
              name: 'role',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/PersonRole' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(StandaloneChapterDtoSchema) },
        'application/json': { schema: z.array(StandaloneChapterDtoSchema) },
        'text/json': { schema: z.array(StandaloneChapterDtoSchema) },
      },
    },
  },
})

export const postApiPersonMergeRoute = createRoute({
  method: 'post',
  path: '/api/Person/merge',
  tags: ['Person'],
  summary: 'Merges Persons into one, this action is irreversible',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: PersonMergeDtoSchema },
        'text/json': { schema: PersonMergeDtoSchema },
        'application/*+json': { schema: PersonMergeDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: PersonDtoSchema },
        'application/json': { schema: PersonDtoSchema },
        'text/json': { schema: PersonDtoSchema },
      },
    },
  },
})

export const postApiPersonValidAliasRoute = createRoute({
  method: 'post',
  path: '/api/Person/valid-alias',
  tags: ['Person'],
  summary:
    'Ensure the alias is valid to be added. For example, the alias cannot be on another person or be the same as the current person name/alias.',
  request: {
    body: {
      description: 'alias check request',
      content: {
        'application/json': { schema: PersonAliasCheckDtoSchema },
        'text/json': { schema: PersonAliasCheckDtoSchema },
        'application/*+json': { schema: PersonAliasCheckDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiPluginAuthenticateRoute = createRoute({
  method: 'post',
  path: '/api/Plugin/authenticate',
  tags: ['Plugin'],
  summary:
    'Authenticate with the Server given an auth key. This will log you in by returning the user object and the JWT token.',
  description: 'This API is not fully built out and may require more information in later releases',
  request: {
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description:
              'Auth key which will be used to authenticate and return a valid user token back',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pluginName: z
        .string()
        .openapi({
          param: {
            name: 'pluginName',
            in: 'query',
            description: 'Name of the Plugin',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserDtoSchema },
        'application/json': { schema: UserDtoSchema },
        'text/json': { schema: UserDtoSchema },
      },
    },
  },
})

export const getApiPluginVersionRoute = createRoute({
  method: 'get',
  path: '/api/Plugin/version',
  tags: ['Plugin'],
  summary: 'Returns the version of the Kavita install',
  description: 'This will log unauthorized requests to Security log',
  request: {
    query: z.object({
      apiKey: z
        .string()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'Required for authenticating to get result',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiPluginAuthkeyExpiresRoute = createRoute({
  method: 'get',
  path: '/api/Plugin/authkey-expires',
  tags: ['Plugin'],
  summary: 'Returns the expiration (UTC) of the authenticated Auth key (or null if none set)',
  description: 'Will always return null if the Auth Key does not belong to this account',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AuthKeyExpiresAtDtoSchema },
        'application/json': { schema: AuthKeyExpiresAtDtoSchema },
        'text/json': { schema: AuthKeyExpiresAtDtoSchema },
      },
    },
  },
})

export const getApiPluginParseRoute = createRoute({
  method: 'get',
  path: '/api/Plugin/parse',
  tags: ['Plugin'],
  summary:
    'Parse a string and return Parsed information from it. Does not support any directory fallback parsing',
  request: {
    query: z.object({
      name: z
        .string()
        .min(0)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'String to parse',
            schema: { maxLength: 1000, minLength: 0, type: 'string' },
            required: false,
          },
        }),
      libraryType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LibraryTypeSchema.openapi({
            param: {
              name: 'libraryType',
              in: 'query',
              description: 'Determines the set of pattern matching to use',
              schema: { $ref: '#/components/schemas/LibraryType' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ParseResultDtoSchema },
        'application/json': { schema: ParseResultDtoSchema },
        'text/json': { schema: ParseResultDtoSchema },
      },
    },
  },
})

export const postApiPluginParseBulkRoute = createRoute({
  method: 'post',
  path: '/api/Plugin/parse-bulk',
  tags: ['Plugin'],
  request: {
    body: {
      content: {
        'application/json': { schema: ParseBulkRequestDtoSchema },
        'text/json': { schema: ParseBulkRequestDtoSchema },
        'application/*+json': { schema: ParseBulkRequestDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ParseBulkResponseDtoSchema },
        'application/json': { schema: ParseBulkResponseDtoSchema },
        'text/json': { schema: ParseBulkResponseDtoSchema },
      },
    },
  },
})

export const postApiRatingSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Rating/series',
  tags: ['Rating'],
  summary: "Update the users' rating of the given series",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateRatingDtoSchema },
        'text/json': { schema: UpdateRatingDtoSchema },
        'application/*+json': { schema: UpdateRatingDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiRatingChapterRoute = createRoute({
  method: 'post',
  path: '/api/Rating/chapter',
  tags: ['Rating'],
  summary: "Update the users' rating of the given chapter",
  request: {
    body: {
      description: 'chapterId must be set',
      content: {
        'application/json': { schema: UpdateRatingDtoSchema },
        'text/json': { schema: UpdateRatingDtoSchema },
        'application/*+json': { schema: UpdateRatingDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiRatingOverallSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Rating/overall-series',
  tags: ['Rating'],
  summary: 'Overall rating from all Kavita users for a given Series',
  description: 'If the authenticated user is the only user to have rated the series, returns 0',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: RatingDtoSchema },
        'application/json': { schema: RatingDtoSchema },
        'text/json': { schema: RatingDtoSchema },
      },
    },
  },
})

export const getApiRatingOverallChapterRoute = createRoute({
  method: 'get',
  path: '/api/Rating/overall-chapter',
  tags: ['Rating'],
  summary: 'Overall rating from all Kavita users for a given Chapter',
  description: 'If the authenticated user is the only user to have rated the chapter, returns 0',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: RatingDtoSchema },
        'application/json': { schema: RatingDtoSchema },
        'text/json': { schema: RatingDtoSchema },
      },
    },
  },
})

export const getApiReaderPdfRoute = createRoute({
  method: 'get',
  path: '/api/Reader/pdf',
  tags: ['Reader'],
  summary: 'Returns the PDF for the chapterId.',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'Auth Key for authentication',
            schema: { type: 'string' },
            required: false,
          },
        }),
      extractPdf: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'extractPdf',
            in: 'query',
            description: 'Converts PDF into images per-page - Used for Mihon mainly',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderImageRoute = createRoute({
  method: 'get',
  path: '/api/Reader/image',
  tags: ['Reader'],
  summary: 'Returns an image for a given chapter. Will perform bounding checks',
  description: 'This will cache the chapter images for reading',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: 'Chapter Id',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page in question',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: "User's API Key for authentication",
            schema: { type: 'string' },
            required: false,
          },
        }),
      extractPdf: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'extractPdf',
            in: 'query',
            description: 'Should Kavita extract pdf into images. Defaults to false.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderThumbnailRoute = createRoute({
  method: 'get',
  path: '/api/Reader/thumbnail',
  tags: ['Reader'],
  summary: 'Returns a thumbnail for the given page number',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageNum: z
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
            name: 'pageNum',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderBookmarkImageRoute = createRoute({
  method: 'get',
  path: '/api/Reader/bookmark-image',
  tags: ['Reader'],
  summary:
    'Returns an image for a given bookmark series. Side effect: This will cache the bookmark images for reading.',
  description: 'We must use api key as bookmarks could be leaked to other users via the API',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      apiKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'apiKey',
            in: 'query',
            description: 'Api key for the user the bookmarks are on',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderFileDimensionsRoute = createRoute({
  method: 'get',
  path: '/api/Reader/file-dimensions',
  tags: ['Reader'],
  summary:
    'Returns the file dimensions for all pages in a chapter. If the underlying chapter is PDF, use extractPDF to unpack as images.',
  description:
    'This has a side effect of caching the images.\n            This will only be populated on archive filetypes and not in bookmark mode',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      extractPdf: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'extractPdf',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(FileDimensionDtoSchema) },
        'application/json': { schema: z.array(FileDimensionDtoSchema) },
        'text/json': { schema: z.array(FileDimensionDtoSchema) },
      },
    },
  },
})

export const getApiReaderChapterInfoRoute = createRoute({
  method: 'get',
  path: '/api/Reader/chapter-info',
  tags: ['Reader'],
  summary:
    'Returns various information about a Chapter. Side effect: This will cache the chapter images for reading.',
  description:
    'This is generally the first call when attempting to read to allow pre-generation of assets needed for reading',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      extractPdf: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'extractPdf',
            in: 'query',
            description: 'Should Kavita extract pdf into images. Defaults to false.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      includeDimensions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDimensions',
            in: 'query',
            description: 'Include file dimensions. Only useful for image-based reading',
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
        'text/plain': { schema: ChapterInfoDtoSchema },
        'application/json': { schema: ChapterInfoDtoSchema },
        'text/json': { schema: ChapterInfoDtoSchema },
      },
    },
  },
})

export const getApiReaderBookmarkInfoRoute = createRoute({
  method: 'get',
  path: '/api/Reader/bookmark-info',
  tags: ['Reader'],
  summary:
    'Returns various information about all bookmark files for a Series. Side effect: This will cache the bookmark images for reading.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: 'Series Id for all bookmarks',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      includeDimensions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeDimensions',
            in: 'query',
            description: 'Include file dimensions (extra I/O). Defaults to true.',
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
        'text/plain': { schema: BookmarkInfoDtoSchema },
        'application/json': { schema: BookmarkInfoDtoSchema },
        'text/json': { schema: BookmarkInfoDtoSchema },
      },
    },
  },
})

export const postApiReaderMarkChapterReadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-chapter-read',
  tags: ['Reader'],
  summary: 'Mark a single chapter as read',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkChapterReadDtoSchema },
        'text/json': { schema: MarkChapterReadDtoSchema },
        'application/*+json': { schema: MarkChapterReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkReadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-read',
  tags: ['Reader'],
  summary:
    'Marks a Series as read. All volumes and chapters will be marked as read during this process.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkReadDtoSchema },
        'text/json': { schema: MarkReadDtoSchema },
        'application/*+json': { schema: MarkReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkUnreadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-unread',
  tags: ['Reader'],
  summary:
    'Marks a Series as Unread. All volumes and chapters will be marked as unread during this process.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkReadDtoSchema },
        'text/json': { schema: MarkReadDtoSchema },
        'application/*+json': { schema: MarkReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkVolumeUnreadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-volume-unread',
  tags: ['Reader'],
  summary: 'Marks all chapters within a volume as unread',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkVolumeReadDtoSchema },
        'text/json': { schema: MarkVolumeReadDtoSchema },
        'application/*+json': { schema: MarkVolumeReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkVolumeReadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-volume-read',
  tags: ['Reader'],
  summary: 'Marks all chapters within a volume as Read',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkVolumeReadDtoSchema },
        'text/json': { schema: MarkVolumeReadDtoSchema },
        'application/*+json': { schema: MarkVolumeReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkMultipleReadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-multiple-read',
  tags: ['Reader'],
  summary:
    'Marks all chapters within a list of volumes as Read. All volumes must belong to the same Series.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkVolumesReadDtoSchema },
        'text/json': { schema: MarkVolumesReadDtoSchema },
        'application/*+json': { schema: MarkVolumesReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkMultipleUnreadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-multiple-unread',
  tags: ['Reader'],
  summary:
    'Marks all chapters within a list of volumes as Unread. All volumes must belong to the same Series.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkVolumesReadDtoSchema },
        'text/json': { schema: MarkVolumesReadDtoSchema },
        'application/*+json': { schema: MarkVolumesReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkMultipleSeriesReadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-multiple-series-read',
  tags: ['Reader'],
  summary: 'Marks all chapters within a list of series as Read.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkMultipleSeriesAsReadDtoSchema },
        'text/json': { schema: MarkMultipleSeriesAsReadDtoSchema },
        'application/*+json': { schema: MarkMultipleSeriesAsReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderMarkMultipleSeriesUnreadRoute = createRoute({
  method: 'post',
  path: '/api/Reader/mark-multiple-series-unread',
  tags: ['Reader'],
  summary: 'Marks all chapters within a list of series as Unread.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MarkMultipleSeriesAsReadDtoSchema },
        'text/json': { schema: MarkMultipleSeriesAsReadDtoSchema },
        'application/*+json': { schema: MarkMultipleSeriesAsReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderGetProgressRoute = createRoute({
  method: 'get',
  path: '/api/Reader/get-progress',
  tags: ['Reader'],
  summary: 'Returns Progress (page number) for a chapter for the logged in user',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ProgressDtoSchema },
        'application/json': { schema: ProgressDtoSchema },
        'text/json': { schema: ProgressDtoSchema },
      },
    },
  },
})

export const postApiReaderProgressRoute = createRoute({
  method: 'post',
  path: '/api/Reader/progress',
  tags: ['Reader'],
  summary: 'Save page against Chapter for authenticated user',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ProgressDtoSchema },
        'text/json': { schema: ProgressDtoSchema },
        'application/*+json': { schema: ProgressDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderContinuePointRoute = createRoute({
  method: 'get',
  path: '/api/Reader/continue-point',
  tags: ['Reader'],
  summary:
    'Continue point is the chapter which you should start reading again from. If there is no progress on a series, then the first chapter will be returned (non-special unless only specials).\nOtherwise, loop through the chapters and volumes in order to find the next chapter which has progress.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: ChapterDtoSchema },
        'application/json': { schema: ChapterDtoSchema },
        'text/json': { schema: ChapterDtoSchema },
      },
    },
  },
})

export const getApiReaderHasProgressRoute = createRoute({
  method: 'get',
  path: '/api/Reader/has-progress',
  tags: ['Reader'],
  summary: 'Returns if the user has reading progress on the Series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiReaderChapterBookmarksRoute = createRoute({
  method: 'get',
  path: '/api/Reader/chapter-bookmarks',
  tags: ['Reader'],
  summary: 'Returns a list of bookmarked pages for a given Chapter',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(BookmarkDtoSchema) },
        'application/json': { schema: z.array(BookmarkDtoSchema) },
        'text/json': { schema: z.array(BookmarkDtoSchema) },
      },
    },
  },
})

export const postApiReaderAllBookmarksRoute = createRoute({
  method: 'post',
  path: '/api/Reader/all-bookmarks',
  tags: ['Reader'],
  summary: 'Returns a list of all bookmarked pages for a User',
  request: {
    body: {
      description: 'Only supports SeriesNameQuery',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(BookmarkDtoSchema) },
        'application/json': { schema: z.array(BookmarkDtoSchema) },
        'text/json': { schema: z.array(BookmarkDtoSchema) },
      },
    },
  },
})

export const postApiReaderRemoveBookmarksRoute = createRoute({
  method: 'post',
  path: '/api/Reader/remove-bookmarks',
  tags: ['Reader'],
  summary: 'Removes all bookmarks for all chapters linked to a Series',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: RemoveBookmarkForSeriesDtoSchema },
        'text/json': { schema: RemoveBookmarkForSeriesDtoSchema },
        'application/*+json': { schema: RemoveBookmarkForSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderBulkRemoveBookmarksRoute = createRoute({
  method: 'post',
  path: '/api/Reader/bulk-remove-bookmarks',
  tags: ['Reader'],
  summary: 'Removes all bookmarks for all chapters linked to a Series',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BulkRemoveBookmarkForSeriesDtoSchema },
        'text/json': { schema: BulkRemoveBookmarkForSeriesDtoSchema },
        'application/*+json': { schema: BulkRemoveBookmarkForSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderVolumeBookmarksRoute = createRoute({
  method: 'get',
  path: '/api/Reader/volume-bookmarks',
  tags: ['Reader'],
  summary: 'Returns all bookmarked pages for a given volume',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(BookmarkDtoSchema) },
        'application/json': { schema: z.array(BookmarkDtoSchema) },
        'text/json': { schema: z.array(BookmarkDtoSchema) },
      },
    },
  },
})

export const getApiReaderSeriesBookmarksRoute = createRoute({
  method: 'get',
  path: '/api/Reader/series-bookmarks',
  tags: ['Reader'],
  summary: 'Returns all bookmarked pages for a given series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(BookmarkDtoSchema) },
        'application/json': { schema: z.array(BookmarkDtoSchema) },
        'text/json': { schema: z.array(BookmarkDtoSchema) },
      },
    },
  },
})

export const postApiReaderBookmarkRoute = createRoute({
  method: 'post',
  path: '/api/Reader/bookmark',
  tags: ['Reader'],
  summary: 'Bookmarks a page against a Chapter',
  description: 'This has a side effect of caching the chapter files to disk',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BookmarkDtoSchema },
        'text/json': { schema: BookmarkDtoSchema },
        'application/*+json': { schema: BookmarkDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderUnbookmarkRoute = createRoute({
  method: 'post',
  path: '/api/Reader/unbookmark',
  tags: ['Reader'],
  summary: 'Removes a bookmarked page for a Chapter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BookmarkDtoSchema },
        'text/json': { schema: BookmarkDtoSchema },
        'application/*+json': { schema: BookmarkDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderNextChapterRoute = createRoute({
  method: 'get',
  path: '/api/Reader/next-chapter',
  tags: ['Reader'],
  summary: 'Returns the next logical chapter from the series.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      currentChapterId: z
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
            name: 'currentChapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiReaderPrevChapterRoute = createRoute({
  method: 'get',
  path: '/api/Reader/prev-chapter',
  tags: ['Reader'],
  summary: 'Returns the previous logical chapter from the series.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      currentChapterId: z
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
            name: 'currentChapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiReaderTimeLeftRoute = createRoute({
  method: 'get',
  path: '/api/Reader/time-left',
  tags: ['Reader'],
  summary:
    'For the current user, returns an estimate on how long it would take to finish reading the series.',
  description:
    'For Epubs, this does not check words inside a chapter due to overhead so may not work in all cases.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: HourEstimateRangeDtoSchema },
        'application/json': { schema: HourEstimateRangeDtoSchema },
        'text/json': { schema: HourEstimateRangeDtoSchema },
      },
    },
  },
})

export const getApiReaderTimeLeftForChapterRoute = createRoute({
  method: 'get',
  path: '/api/Reader/time-left-for-chapter',
  tags: ['Reader'],
  summary:
    'For the current user, returns an estimate on how long it would take to finish reading the chapter.',
  description:
    'For Epubs, this does not check words inside a chapter due to overhead so may not work in all cases.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: HourEstimateRangeDtoSchema },
        'application/json': { schema: HourEstimateRangeDtoSchema },
        'text/json': { schema: HourEstimateRangeDtoSchema },
      },
    },
  },
})

export const getApiReaderPtocRoute = createRoute({
  method: 'get',
  path: '/api/Reader/ptoc',
  tags: ['Reader'],
  summary: "Returns the user's personal table of contents for the given chapter",
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(PersonalToCDtoSchema) },
        'application/json': { schema: z.array(PersonalToCDtoSchema) },
        'text/json': { schema: z.array(PersonalToCDtoSchema) },
      },
    },
  },
})

export const deleteApiReaderPtocRoute = createRoute({
  method: 'delete',
  path: '/api/Reader/ptoc',
  tags: ['Reader'],
  summary: "Deletes the user's personal table of content for the given chapter",
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageNum: z
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
            name: 'pageNum',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'title',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReaderCreatePtocRoute = createRoute({
  method: 'post',
  path: '/api/Reader/create-ptoc',
  tags: ['Reader'],
  summary: 'Create a new personal table of content entry for a given chapter',
  description: 'The title and page number must be unique to that book',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: CreatePersonalToCDtoSchema },
        'text/json': { schema: CreatePersonalToCDtoSchema },
        'application/*+json': { schema: CreatePersonalToCDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReaderPromptRereadSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Reader/prompt-reread/series',
  tags: ['Reader'],
  summary: 'Check if we should prompt the user for rereads for the given series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: RereadDtoSchema },
        'application/json': { schema: RereadDtoSchema },
        'text/json': { schema: RereadDtoSchema },
      },
    },
  },
})

export const getApiReaderPromptRereadVolumeRoute = createRoute({
  method: 'get',
  path: '/api/Reader/prompt-reread/volume',
  tags: ['Reader'],
  summary: 'Check if we should prompt the user for rereads for the given volume',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: RereadDtoSchema },
        'application/json': { schema: RereadDtoSchema },
        'text/json': { schema: RereadDtoSchema },
      },
    },
  },
})

export const getApiReaderPromptRereadChapterRoute = createRoute({
  method: 'get',
  path: '/api/Reader/prompt-reread/chapter',
  tags: ['Reader'],
  summary: 'Check if we should prompt the user for rereads for the given chapter',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: RereadDtoSchema },
        'application/json': { schema: RereadDtoSchema },
        'text/json': { schema: RereadDtoSchema },
      },
    },
  },
})

export const getApiReaderFirstProgressDateRoute = createRoute({
  method: 'get',
  path: '/api/Reader/first-progress-date',
  tags: ['Reader'],
  request: {
    query: z.object({
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
            name: 'userId',
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
        'text/plain': { schema: z.iso.datetime({ offset: true }) },
        'application/json': { schema: z.iso.datetime({ offset: true }) },
        'text/json': { schema: z.iso.datetime({ offset: true }) },
      },
    },
  },
})

export const getApiReadingListRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList',
  tags: ['ReadingList'],
  summary: 'Fetches a single Reading List',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ReadingListDtoSchema },
        'application/json': { schema: ReadingListDtoSchema },
        'text/json': { schema: ReadingListDtoSchema },
      },
    },
  },
})

export const deleteApiReadingListRoute = createRoute({
  method: 'delete',
  path: '/api/ReadingList',
  tags: ['ReadingList'],
  summary: 'Deletes a reading list',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListListsRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/lists',
  tags: ['ReadingList'],
  summary: 'Returns reading lists (paginated) for a given user.',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      includePromoted: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includePromoted',
            in: 'query',
            description:
              "Include Promoted Reading Lists along with user's Reading Lists. Defaults to true",
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
      sortByLastModified: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sortByLastModified',
            in: 'query',
            description: 'Sort by last modified (most recent first) or by title (alphabetical)',
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
        'text/plain': { schema: z.array(ReadingListDtoSchema) },
        'application/json': { schema: z.array(ReadingListDtoSchema) },
        'text/json': { schema: z.array(ReadingListDtoSchema) },
      },
    },
  },
})

export const postApiReadingListAllRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/all',
  tags: ['ReadingList'],
  summary: 'Returns reading lists (paginated) for a given user.',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: ReadingListFilterDtoSchema },
        'text/json': { schema: ReadingListFilterDtoSchema },
        'application/*+json': { schema: ReadingListFilterDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ReadingListDtoSchema) },
        'application/json': { schema: z.array(ReadingListDtoSchema) },
        'text/json': { schema: z.array(ReadingListDtoSchema) },
      },
    },
  },
})

export const getApiReadingListListsForSeriesRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/lists-for-series',
  tags: ['ReadingList'],
  summary: 'Returns all Reading Lists the user has access to that the given series within it.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(ReadingListDtoSchema) },
        'application/json': { schema: z.array(ReadingListDtoSchema) },
        'text/json': { schema: z.array(ReadingListDtoSchema) },
      },
    },
  },
})

export const getApiReadingListListsForChapterRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/lists-for-chapter',
  tags: ['ReadingList'],
  summary: 'Returns all Reading Lists the user has access to that has the given chapter within it.',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(ReadingListDtoSchema) },
        'application/json': { schema: z.array(ReadingListDtoSchema) },
        'text/json': { schema: z.array(ReadingListDtoSchema) },
      },
    },
  },
})

export const getApiReadingListItemsRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/items',
  tags: ['ReadingList'],
  summary:
    'Fetches all reading list items for a given list including rich metadata around series, volume, chapters, and progress',
  description: 'This call is expensive',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(ReadingListItemDtoSchema) },
        'application/json': { schema: z.array(ReadingListItemDtoSchema) },
        'text/json': { schema: z.array(ReadingListItemDtoSchema) },
      },
    },
  },
})

export const postApiReadingListUpdatePositionRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update-position',
  tags: ['ReadingList'],
  summary: 'Updates an items position',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateReadingListPositionSchema },
        'text/json': { schema: UpdateReadingListPositionSchema },
        'application/*+json': { schema: UpdateReadingListPositionSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListDeleteItemRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/delete-item',
  tags: ['ReadingList'],
  summary: 'Deletes a list item from the list. Item orders will update as a result.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateReadingListPositionSchema },
        'text/json': { schema: UpdateReadingListPositionSchema },
        'application/*+json': { schema: UpdateReadingListPositionSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListRemoveReadRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/remove-read',
  tags: ['ReadingList'],
  summary: 'Removes all entries that are fully read from the reading list',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListCreateRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/create',
  tags: ['ReadingList'],
  summary: 'Creates a new List with a unique title. Returns the new ReadingList back',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: CreateReadingListDtoSchema },
        'text/json': { schema: CreateReadingListDtoSchema },
        'application/*+json': { schema: CreateReadingListDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReadingListDtoSchema },
        'application/json': { schema: ReadingListDtoSchema },
        'text/json': { schema: ReadingListDtoSchema },
      },
    },
  },
})

export const postApiReadingListUpdateRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update',
  tags: ['ReadingList'],
  summary: 'Update the properties (title, summary) of a reading list',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateReadingListDtoSchema },
        'text/json': { schema: UpdateReadingListDtoSchema },
        'application/*+json': { schema: UpdateReadingListDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReadingListDtoSchema },
        'application/json': { schema: ReadingListDtoSchema },
        'text/json': { schema: ReadingListDtoSchema },
      },
    },
  },
})

export const postApiReadingListUpdateBySeriesRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update-by-series',
  tags: ['ReadingList'],
  summary: 'Adds all chapters from a Series to a reading list',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateReadingListBySeriesDtoSchema },
        'text/json': { schema: UpdateReadingListBySeriesDtoSchema },
        'application/*+json': { schema: UpdateReadingListBySeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListUpdateByMultipleRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update-by-multiple',
  tags: ['ReadingList'],
  summary: 'Adds all chapters from a list of volumes and chapters to a reading list',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateReadingListByMultipleDtoSchema },
        'text/json': { schema: UpdateReadingListByMultipleDtoSchema },
        'application/*+json': { schema: UpdateReadingListByMultipleDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListUpdateByMultipleSeriesRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update-by-multiple-series',
  tags: ['ReadingList'],
  summary: 'Adds all chapters from a list of series to a reading list',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateReadingListByMultipleSeriesDtoSchema },
        'text/json': { schema: UpdateReadingListByMultipleSeriesDtoSchema },
        'application/*+json': { schema: UpdateReadingListByMultipleSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListUpdateByVolumeRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update-by-volume',
  tags: ['ReadingList'],
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateReadingListByVolumeDtoSchema },
        'text/json': { schema: UpdateReadingListByVolumeDtoSchema },
        'application/*+json': { schema: UpdateReadingListByVolumeDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListUpdateByChapterRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/update-by-chapter',
  tags: ['ReadingList'],
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateReadingListByChapterDtoSchema },
        'text/json': { schema: UpdateReadingListByChapterDtoSchema },
        'application/*+json': { schema: UpdateReadingListByChapterDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReadingListPeopleRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/people',
  tags: ['ReadingList'],
  summary: 'Returns a list of a given role associated with the reading list',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      role: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PersonRoleSchema.openapi({
            param: {
              name: 'role',
              in: 'query',
              description: 'PersonRole',
              schema: { $ref: '#/components/schemas/PersonRole' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(PersonDtoSchema) },
        'application/json': { schema: z.array(PersonDtoSchema) },
        'text/json': { schema: z.array(PersonDtoSchema) },
      },
    },
  },
})

export const getApiReadingListAllPeopleRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/all-people',
  tags: ['ReadingList'],
  summary: 'Returns all people in given roles for a reading list',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(PersonDtoSchema) },
        'application/json': { schema: z.array(PersonDtoSchema) },
        'text/json': { schema: z.array(PersonDtoSchema) },
      },
    },
  },
})

export const getApiReadingListNextChapterRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/next-chapter',
  tags: ['ReadingList'],
  summary: 'Returns the next chapter within the reading list',
  request: {
    query: z.object({
      currentChapterId: z
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
            name: 'currentChapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiReadingListPrevChapterRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/prev-chapter',
  tags: ['ReadingList'],
  summary: 'Returns the prev chapter within the reading list',
  request: {
    query: z.object({
      currentChapterId: z
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
            name: 'currentChapterId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiReadingListNameExistsRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/name-exists',
  tags: ['ReadingList'],
  summary: 'Checks if a reading list exists with the name',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'If empty or null, will return true as that is invalid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiReadingListPromoteMultipleRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/promote-multiple',
  tags: ['ReadingList'],
  summary:
    "Promote/UnPromote multiple reading lists in one go. Will only update the authenticated user's reading lists and will only work if the user has promotion role",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: PromoteReadingListsDtoSchema },
        'text/json': { schema: PromoteReadingListsDtoSchema },
        'application/*+json': { schema: PromoteReadingListsDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListDeleteMultipleRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/delete-multiple',
  tags: ['ReadingList'],
  summary: 'Delete multiple reading lists in one go',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DeleteReadingListsDtoSchema },
        'text/json': { schema: DeleteReadingListsDtoSchema },
        'application/*+json': { schema: DeleteReadingListsDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReadingListInfoRoute = createRoute({
  method: 'get',
  path: '/api/ReadingList/info',
  tags: ['ReadingList'],
  summary: 'Returns random information about a Reading List',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ReadingListInfoDtoSchema },
        'application/json': { schema: ReadingListInfoDtoSchema },
        'text/json': { schema: ReadingListInfoDtoSchema },
      },
    },
  },
})

export const postApiReadingListExportAsCblRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/export-as-cbl',
  tags: ['ReadingList'],
  summary: 'Export a Reading List to CBL format',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      asV2: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'asV2',
            in: 'query',
            description: '',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingListRegenerateCoverRoute = createRoute({
  method: 'post',
  path: '/api/ReadingList/regenerate-cover',
  tags: ['ReadingList'],
  summary:
    'Regenerates the cover image for a reading list, you must own the given reading list to do this',
  request: {
    query: z.object({
      readingListId: z
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
            name: 'readingListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReadingProfileAllRoute = createRoute({
  method: 'get',
  path: '/api/reading-profile/all',
  tags: ['ReadingProfile'],
  summary: 'Gets all non-implicit reading profiles for a user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(UserReadingProfileDtoSchema) },
        'application/json': { schema: z.array(UserReadingProfileDtoSchema) },
        'text/json': { schema: z.array(UserReadingProfileDtoSchema) },
      },
    },
  },
})

export const getApiReadingProfileLibraryIdSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/reading-profile/{libraryId}/{seriesId}',
  tags: ['ReadingProfile'],
  summary:
    'Returns the ReadingProfile that should be applied to the given series, walks up the tree.\nSeries -> Library -> Default',
  request: {
    params: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      skipImplicit: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipImplicit',
            in: 'query',
            description: '',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      deviceId: z
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
            name: 'deviceId',
            in: 'query',
            description: 'Defaults to currently active device',
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
        'text/plain': { schema: UserReadingProfileDtoSchema },
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
})

export const getApiReadingProfileSeriesRoute = createRoute({
  method: 'get',
  path: '/api/reading-profile/series',
  tags: ['ReadingProfile'],
  summary: 'Returns all Reading Profiles bound to a series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(UserReadingProfileDtoSchema) },
        'application/json': { schema: z.array(UserReadingProfileDtoSchema) },
        'text/json': { schema: z.array(UserReadingProfileDtoSchema) },
      },
    },
  },
})

export const postApiReadingProfileSeriesRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/series',
  tags: ['ReadingProfile'],
  summary: 'Update the implicit reading profile for a series, creates one if none exists',
  description:
    'Any modification to the reader settings during reading will create an implicit profile. Use "update-parent" to save to the bound series profile.',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      deviceId: z
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
            name: 'deviceId',
            in: 'query',
            description: 'Defaults to the currently active device',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
        'application/*+json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserReadingProfileDtoSchema },
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
})

export const getApiReadingProfileLibraryRoute = createRoute({
  method: 'get',
  path: '/api/reading-profile/library',
  tags: ['ReadingProfile'],
  summary: 'Returns all the Reading profiles bound to the library',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(UserReadingProfileDtoSchema) },
        'application/json': { schema: z.array(UserReadingProfileDtoSchema) },
        'text/json': { schema: z.array(UserReadingProfileDtoSchema) },
      },
    },
  },
})

export const postApiReadingProfileCreateRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/create',
  tags: ['ReadingProfile'],
  summary: 'Creates a new reading profile for the current user',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
        'application/*+json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserReadingProfileDtoSchema },
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
})

export const postApiReadingProfilePromoteRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/promote',
  tags: ['ReadingProfile'],
  summary:
    'Promotes the implicit profile to a user profile. Removes the series from other profiles',
  request: {
    query: z.object({
      profileId: z
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
            name: 'profileId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      deviceId: z
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
            name: 'deviceId',
            in: 'query',
            description: 'Defaults to the currently active device',
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
        'text/plain': { schema: UserReadingProfileDtoSchema },
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
})

export const postApiReadingProfileUpdateParentRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/update-parent',
  tags: ['ReadingProfile'],
  summary:
    'Updates the non-implicit reading profile for the given series, and removes implicit profiles',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      deviceId: z
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
            name: 'deviceId',
            in: 'query',
            description: 'Defaults to currently active device',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
        'application/*+json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserReadingProfileDtoSchema },
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
})

export const postApiReadingProfileRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile',
  tags: ['ReadingProfile'],
  summary: 'Updates the given reading profile, must belong to the current user',
  description: 'This does not update connected series and libraries.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
        'application/*+json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserReadingProfileDtoSchema },
        'application/json': { schema: UserReadingProfileDtoSchema },
        'text/json': { schema: UserReadingProfileDtoSchema },
      },
    },
  },
})

export const deleteApiReadingProfileRoute = createRoute({
  method: 'delete',
  path: '/api/reading-profile',
  tags: ['ReadingProfile'],
  summary: 'Deletes the given profile, requires the profile to belong to the logged-in user',
  request: {
    query: z.object({
      profileId: z
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
            name: 'profileId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingProfileSeriesSeriesIdRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/series/{seriesId}',
  tags: ['ReadingProfile'],
  summary: 'Sets the reading profile for a given series, removes the old one',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiReadingProfileSeriesSeriesIdRoute = createRoute({
  method: 'delete',
  path: '/api/reading-profile/series/{seriesId}',
  tags: ['ReadingProfile'],
  summary: 'Clears the reading profile for the given series for the currently logged-in user',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingProfileLibraryLibraryIdRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/library/{libraryId}',
  tags: ['ReadingProfile'],
  summary: 'Sets the reading profile for a given library, removes the old one',
  request: {
    params: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiReadingProfileLibraryLibraryIdRoute = createRoute({
  method: 'delete',
  path: '/api/reading-profile/library/{libraryId}',
  tags: ['ReadingProfile'],
  summary: 'Clears the reading profile for the given library for the currently logged-in user',
  request: {
    params: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingProfileBulkRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/bulk',
  tags: ['ReadingProfile'],
  summary: 'Assigns the reading profile to all passes series, and deletes their implicit profiles',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: BulkSetSeriesProfilesSchema },
        'text/json': { schema: BulkSetSeriesProfilesSchema },
        'application/*+json': { schema: BulkSetSeriesProfilesSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReadingProfileSetDevicesRoute = createRoute({
  method: 'post',
  path: '/api/reading-profile/set-devices',
  tags: ['ReadingProfile'],
  summary: 'Set the assigned devices for a reading profile',
  request: {
    query: z.object({
      profileId: z
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
            name: 'profileId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReviewSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Review/series',
  tags: ['Review'],
  summary: "Updates the user's review for a given series",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateUserReviewDtoSchema },
        'text/json': { schema: UpdateUserReviewDtoSchema },
        'application/*+json': { schema: UpdateUserReviewDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserReviewDtoSchema },
        'application/json': { schema: UserReviewDtoSchema },
        'text/json': { schema: UserReviewDtoSchema },
      },
    },
  },
})

export const deleteApiReviewSeriesRoute = createRoute({
  method: 'delete',
  path: '/api/Review/series',
  tags: ['Review'],
  summary: "Deletes the user's review for the given series",
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiReviewChapterRoute = createRoute({
  method: 'post',
  path: '/api/Review/chapter',
  tags: ['Review'],
  summary: "Update the user's review for a given chapter",
  request: {
    body: {
      description: 'chapterId must be set',
      content: {
        'application/json': { schema: UpdateUserReviewDtoSchema },
        'text/json': { schema: UpdateUserReviewDtoSchema },
        'application/*+json': { schema: UpdateUserReviewDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserReviewDtoSchema },
        'application/json': { schema: UserReviewDtoSchema },
        'text/json': { schema: UserReviewDtoSchema },
      },
    },
  },
})

export const deleteApiReviewChapterRoute = createRoute({
  method: 'delete',
  path: '/api/Review/chapter',
  tags: ['Review'],
  summary: "Deletes the user's review for the given chapter",
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiReviewAllRoute = createRoute({
  method: 'get',
  path: '/api/Review/all',
  tags: ['Review'],
  summary:
    'Returns all reviews for the user. If you are authenticated as the user, will always return data, regardless of ShareReviews setting',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: 'User to load, if your own, will bypass RBS and ShareReviews restrictions',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      rating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rating',
            in: 'query',
            description: 'Null to ignore filtering. >= rating',
            schema: { type: 'number', format: 'float' },
            required: false,
          },
        }),
      filterQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filterQuery',
            in: 'query',
            description: 'Null to ignore filtering on Series name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(UserReviewExtendedDtoSchema) },
        'application/json': { schema: z.array(UserReviewExtendedDtoSchema) },
        'text/json': { schema: z.array(UserReviewExtendedDtoSchema) },
      },
    },
  },
})

export const getApiReviewMySeriesRoute = createRoute({
  method: 'get',
  path: '/api/Review/my-series',
  tags: ['Review'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: UserRatingAndReviewDtoSchema },
        'application/json': { schema: UserRatingAndReviewDtoSchema },
        'text/json': { schema: UserRatingAndReviewDtoSchema },
      },
    },
  },
})

export const getApiScrobblingScrobbleSettingsRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/scrobble-settings',
  tags: ['Scrobbling'],
  summary:
    'Returns all scrobble providers for a user. This list is guaranteed to contain an entry for each currently\nvalid scrobble provider. If the user has none setup, returns the empty default values.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ScrobbleProviderDtoSchema) },
        'application/json': { schema: z.array(ScrobbleProviderDtoSchema) },
        'text/json': { schema: z.array(ScrobbleProviderDtoSchema) },
      },
    },
  },
})

export const postApiScrobblingUpdateScrobbleSettingsRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/update-scrobble-settings',
  tags: ['Scrobbling'],
  summary:
    'Updates the scrobble settings for a given provider. Libraries are filtered on supported types',
  request: {
    query: z.object({
      provider: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ScrobbleProviderSchema.openapi({
            param: {
              name: 'provider',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/ScrobbleProvider' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: ScrobbleProviderSettingsDtoSchema },
        'text/json': { schema: ScrobbleProviderSettingsDtoSchema },
        'application/*+json': { schema: ScrobbleProviderSettingsDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiScrobblingUpdateUserScrobbleProviderRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/update-user-scrobble-provider',
  tags: ['Scrobbling'],
  summary: 'Update authentication details for the given provider',
  description: 'Kicks of a sync background job, listen on signalr for when it completes',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateScrobbleProviderDtoSchema },
        'text/json': { schema: UpdateScrobbleProviderDtoSchema },
        'application/*+json': { schema: UpdateScrobbleProviderDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiScrobblingGenerateScrobbleEventsRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/generate-scrobble-events',
  tags: ['Scrobbling'],
  summary: 'Generate scrobble events from history. Should only be ran once per user.',
  request: {
    query: z.object({
      scrobbleProvider: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ScrobbleProviderSchema.openapi({
            param: {
              name: 'scrobbleProvider',
              in: 'query',
              description:
                'Members:\n- `0` — Kavita\n- `1` — AniList\n- `2` — Mal\n- `4` — Cbr\n- `5` — Hardcover\n- `6` — MangaBaka',
              schema: { $ref: '#/components/schemas/ScrobbleProvider' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiScrobblingGenerateScrobbleEventsAllRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/generate-scrobble-events-all',
  tags: ['Scrobbling'],
  summary: 'Generate scrobble events from history for all valid providers.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiScrobblingTokenExpiredRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/token-expired',
  tags: ['Scrobbling'],
  summary:
    'Checks if the current Scrobbling token for the given Provider has expired for the current user',
  request: {
    query: z.object({
      provider: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ScrobbleProviderSchema.openapi({
            param: {
              name: 'provider',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/ScrobbleProvider' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiScrobblingExpiredTokensRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/expired-tokens',
  tags: ['Scrobbling'],
  summary: 'Returns all expired tokens for the current user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ScrobbleProviderSchema) },
        'application/json': { schema: z.array(ScrobbleProviderSchema) },
        'text/json': { schema: z.array(ScrobbleProviderSchema) },
      },
    },
  },
})

export const getApiScrobblingScrobbleErrorsRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/scrobble-errors',
  tags: ['Scrobbling'],
  summary: 'Returns all scrobbling errors for the instance',
  description: 'Requires admin',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ScrobbleErrorDtoSchema) },
        'application/json': { schema: z.array(ScrobbleErrorDtoSchema) },
        'text/json': { schema: z.array(ScrobbleErrorDtoSchema) },
      },
    },
  },
})

export const postApiScrobblingClearErrorsRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/clear-errors',
  tags: ['Scrobbling'],
  summary: 'Clears the scrobbling errors table',
  responses: { 200: { description: 'OK' } },
})

export const postApiScrobblingScrobbleEventsRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/scrobble-events',
  tags: ['Scrobbling'],
  summary: 'Returns the scrobbling history for the user',
  description: 'User must have a valid license',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ScrobbleEventFilterSchema },
        'text/json': { schema: ScrobbleEventFilterSchema },
        'application/*+json': { schema: ScrobbleEventFilterSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ScrobbleEventDtoSchema) },
        'application/json': { schema: z.array(ScrobbleEventDtoSchema) },
        'text/json': { schema: z.array(ScrobbleEventDtoSchema) },
      },
    },
  },
})

export const getApiScrobblingHoldsRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/holds',
  tags: ['Scrobbling'],
  summary: 'Returns all scrobble holds for the current user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ScrobbleHoldDtoSchema) },
        'application/json': { schema: z.array(ScrobbleHoldDtoSchema) },
        'text/json': { schema: z.array(ScrobbleHoldDtoSchema) },
      },
    },
  },
})

export const getApiScrobblingHasHoldRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/has-hold',
  tags: ['Scrobbling'],
  summary: 'If there is an active hold on the series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiScrobblingLibraryAllowsScrobblingRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/library-allows-scrobbling',
  tags: ['Scrobbling'],
  summary: 'Does the library the series is in allow scrobbling?',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiScrobblingAddHoldRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/add-hold',
  tags: ['Scrobbling'],
  summary: "Adds a hold against the Series for user's scrobbling",
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiScrobblingRemoveHoldRoute = createRoute({
  method: 'delete',
  path: '/api/Scrobbling/remove-hold',
  tags: ['Scrobbling'],
  summary: "Remove a hold against the Series for user's scrobbling",
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiScrobblingBulkRemoveEventsRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/bulk-remove-events',
  tags: ['Scrobbling'],
  summary: 'Delete the given scrobble events if they belong to that user',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'text/json': {
          schema: z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
        'application/*+json': {
          schema: z.array(
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiScrobblingRemoveErrorIdRoute = createRoute({
  method: 'delete',
  path: '/api/Scrobbling/remove-error/{id}',
  tags: ['Scrobbling'],
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

export const postApiScrobblingRetryScrobbleRoute = createRoute({
  method: 'post',
  path: '/api/Scrobbling/retry-scrobble',
  tags: ['Scrobbling'],
  summary:
    'Attempts to retry Scrobble Events for the current authenticated user (or admin-allowed).',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: KavitaPlusAuditEntryDtoSchema },
        'text/json': { schema: KavitaPlusAuditEntryDtoSchema },
        'application/*+json': { schema: KavitaPlusAuditEntryDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiScrobblingNextScrobbleTimeRoute = createRoute({
  method: 'get',
  path: '/api/Scrobbling/next-scrobble-time',
  tags: ['Scrobbling'],
  summary: 'Returns when Scrobbling upload will next execute',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.iso.datetime({ offset: true }).nullable() },
        'application/json': { schema: z.iso.datetime({ offset: true }).nullable() },
        'text/json': { schema: z.iso.datetime({ offset: true }).nullable() },
      },
    },
  },
})

export const getApiSearchSeriesForMangafileRoute = createRoute({
  method: 'get',
  path: '/api/Search/series-for-mangafile',
  tags: ['Search'],
  summary:
    "Returns the series for the MangaFile id. If the user does not have access (shouldn't happen by the UI),\nthen null is returned",
  request: {
    query: z.object({
      mangaFileId: z
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
            name: 'mangaFileId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: SeriesDtoSchema },
        'application/json': { schema: SeriesDtoSchema },
        'text/json': { schema: SeriesDtoSchema },
      },
    },
  },
})

export const getApiSearchSeriesForChapterRoute = createRoute({
  method: 'get',
  path: '/api/Search/series-for-chapter',
  tags: ['Search'],
  summary:
    "Returns the series for the Chapter id. If the user does not have access (shouldn't happen by the UI),\nthen null is returned",
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: SeriesDtoSchema },
        'application/json': { schema: SeriesDtoSchema },
        'text/json': { schema: SeriesDtoSchema },
      },
    },
  },
})

export const getApiSearchSearchRoute = createRoute({
  method: 'get',
  path: '/api/Search/search',
  tags: ['Search'],
  summary: 'Searches against different entities in the system against a query string',
  request: {
    query: z.object({
      queryString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queryString',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeChapterAndFiles: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeChapterAndFiles',
            in: 'query',
            description:
              'Include Chapter and Filenames in the entities. This can slow down the search on larger systems',
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
        'text/plain': { schema: SearchResultGroupDtoSchema },
        'application/json': { schema: SearchResultGroupDtoSchema },
        'text/json': { schema: SearchResultGroupDtoSchema },
      },
    },
  },
})

export const getApiSearchChaptersBySeriesRoute = createRoute({
  method: 'get',
  path: '/api/Search/chapters-by-series',
  tags: ['Search'],
  summary:
    'Returns all chapters for a given series with localized titles. Used for CBL chapter-level matching.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: z.array(ChapterDtoSchema) },
        'application/json': { schema: z.array(ChapterDtoSchema) },
        'text/json': { schema: z.array(ChapterDtoSchema) },
      },
    },
  },
})

export const postApiSeriesV2Route = createRoute({
  method: 'post',
  path: '/api/Series/v2',
  tags: ['Series'],
  summary: 'Gets series with the applied Filter',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const getApiSeriesSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/Series/{seriesId}',
  tags: ['Series'],
  summary: 'Fetches a Series for a given Id',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: 'Series Id to fetch details for',
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
        'text/plain': { schema: SeriesDtoSchema },
        'application/json': { schema: SeriesDtoSchema },
        'text/json': { schema: SeriesDtoSchema },
      },
    },
  },
})

export const deleteApiSeriesSeriesIdRoute = createRoute({
  method: 'delete',
  path: '/api/Series/{seriesId}',
  tags: ['Series'],
  summary: 'Deletes a series from Kavita',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiSeriesDeleteMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Series/delete-multiple',
  tags: ['Series'],
  summary: 'Deletes multiple series from Kavita at once',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DeleteSeriesDtoSchema },
        'text/json': { schema: DeleteSeriesDtoSchema },
        'application/*+json': { schema: DeleteSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiSeriesVolumesRoute = createRoute({
  method: 'get',
  path: '/api/Series/volumes',
  tags: ['Series'],
  summary: 'Returns All volumes for a series with progress information and Chapters',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(VolumeDtoSchema) },
        'application/json': { schema: z.array(VolumeDtoSchema) },
        'text/json': { schema: z.array(VolumeDtoSchema) },
      },
    },
  },
})

export const getApiSeriesVolumeRoute = createRoute({
  method: 'get',
  path: '/api/Series/volume',
  tags: ['Series'],
  summary: 'Returns a single Volume with progress information and Chapters',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: VolumeDtoSchema },
        'application/json': { schema: VolumeDtoSchema },
        'text/json': { schema: VolumeDtoSchema },
      },
    },
  },
})

export const getApiSeriesChapterRoute = createRoute({
  method: 'get',
  path: '/api/Series/chapter',
  tags: ['Series'],
  summary: 'Returns a single Chapter with progress information',
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ChapterDtoSchema },
        'application/json': { schema: ChapterDtoSchema },
        'text/json': { schema: ChapterDtoSchema },
      },
    },
  },
})

export const postApiSeriesUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Series/update',
  tags: ['Series'],
  summary: 'Updates the Series',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateSeriesDtoSchema },
        'text/json': { schema: UpdateSeriesDtoSchema },
        'application/*+json': { schema: UpdateSeriesDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: SeriesDtoSchema },
        'application/json': { schema: SeriesDtoSchema },
        'text/json': { schema: SeriesDtoSchema },
      },
    },
  },
})

export const postApiSeriesRecentlyAddedV2Route = createRoute({
  method: 'post',
  path: '/api/Series/recently-added-v2',
  tags: ['Series'],
  summary: 'Gets all recently added series',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const postApiSeriesRecentlyUpdatedSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Series/recently-updated-series',
  tags: ['Series'],
  summary: 'Returns series that were recently updated, like adding or removing a chapter',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
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
        'text/plain': { schema: z.array(GroupedSeriesDtoSchema) },
        'application/json': { schema: z.array(GroupedSeriesDtoSchema) },
        'text/json': { schema: z.array(GroupedSeriesDtoSchema) },
      },
    },
  },
})

export const postApiSeriesAllV2Route = createRoute({
  method: 'post',
  path: '/api/Series/all-v2',
  tags: ['Series'],
  summary: 'Returns all series for the library',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
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
            name: 'userId',
            in: 'query',
            description:
              'Optional user id to request the OnDeck for someone else. They must have profile sharing enabled when doing so',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      context: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          QueryContextSchema.openapi({
            param: {
              name: 'context',
              in: 'query',
              description: '',
              schema: { $ref: '#/components/schemas/QueryContext' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const postApiSeriesOnDeckRoute = createRoute({
  method: 'post',
  path: '/api/Series/on-deck',
  tags: ['Series'],
  summary: 'Fetches series that are on deck aka have progress on them.',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: 'Default of 0 meaning all libraries',
            schema: { type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const postApiSeriesRemoveFromOnDeckRoute = createRoute({
  method: 'post',
  path: '/api/Series/remove-from-on-deck',
  tags: ['Series'],
  summary: 'Removes a series from displaying on deck until the next read event on that series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiSeriesCurrentlyReadingRoute = createRoute({
  method: 'get',
  path: '/api/Series/currently-reading',
  tags: ['Series'],
  summary: 'Get series a user is currently reading, requires the user to share their profile',
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const postApiSeriesRefreshMetadataRoute = createRoute({
  method: 'post',
  path: '/api/Series/refresh-metadata',
  tags: ['Series'],
  summary: 'Runs a Cover Image Generation task',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: RefreshSeriesDtoSchema },
        'text/json': { schema: RefreshSeriesDtoSchema },
        'application/*+json': { schema: RefreshSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiSeriesScanRoute = createRoute({
  method: 'post',
  path: '/api/Series/scan',
  tags: ['Series'],
  summary:
    'Scan a series and force each file to be updated. This should be invoked via the User, hence why we force.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: RefreshSeriesDtoSchema },
        'text/json': { schema: RefreshSeriesDtoSchema },
        'application/*+json': { schema: RefreshSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiSeriesAnalyzeRoute = createRoute({
  method: 'post',
  path: '/api/Series/analyze',
  tags: ['Series'],
  summary: 'Run a file analysis on the series.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: RefreshSeriesDtoSchema },
        'text/json': { schema: RefreshSeriesDtoSchema },
        'application/*+json': { schema: RefreshSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiSeriesMetadataRoute = createRoute({
  method: 'get',
  path: '/api/Series/metadata',
  tags: ['Series'],
  summary: 'Returns metadata for a given series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: SeriesMetadataDtoSchema },
        'application/json': { schema: SeriesMetadataDtoSchema },
        'text/json': { schema: SeriesMetadataDtoSchema },
      },
    },
  },
})

export const postApiSeriesMetadataRoute = createRoute({
  method: 'post',
  path: '/api/Series/metadata',
  tags: ['Series'],
  summary: 'Update series metadata',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateSeriesMetadataDtoSchema },
        'text/json': { schema: UpdateSeriesMetadataDtoSchema },
        'application/*+json': { schema: UpdateSeriesMetadataDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiSeriesSeriesByCollectionRoute = createRoute({
  method: 'get',
  path: '/api/Series/series-by-collection',
  tags: ['Series'],
  summary: 'Returns all Series grouped by the passed Collection Id with Pagination.',
  request: {
    query: z.object({
      collectionId: z
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
            name: 'collectionId',
            in: 'query',
            description: 'Collection Id to pull series from',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
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
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const postApiSeriesSeriesByIdsRoute = createRoute({
  method: 'post',
  path: '/api/Series/series-by-ids',
  tags: ['Series'],
  summary:
    "Fetches Series for a set of Ids. This will check User for permission access and filter out any Ids that don't exist or\nthe user does not have access to.",
  request: {
    body: {
      content: {
        'application/json': { schema: SeriesByIdsDtoSchema },
        'text/json': { schema: SeriesByIdsDtoSchema },
        'application/*+json': { schema: SeriesByIdsDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const getApiSeriesAgeRatingRoute = createRoute({
  method: 'get',
  path: '/api/Series/age-rating',
  tags: ['Series'],
  summary: 'Get the age rating for the Kavita.Models.Entities.Enums.AgeRating enum value',
  request: {
    query: z.object({
      ageRating: z
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
            name: 'ageRating',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiSeriesSeriesDetailRoute = createRoute({
  method: 'get',
  path: '/api/Series/series-detail',
  tags: ['Series'],
  summary: 'Get a special DTO for Series Detail page.',
  description: 'Do not rely on this API externally. May change without hesitation.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: SeriesDetailDtoSchema },
        'application/json': { schema: SeriesDetailDtoSchema },
        'text/json': { schema: SeriesDetailDtoSchema },
      },
    },
  },
})

export const getApiSeriesRelatedRoute = createRoute({
  method: 'get',
  path: '/api/Series/related',
  tags: ['Series'],
  summary: 'Fetches the related series for a given series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      relation: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          RelationKindSchema.openapi({
            param: {
              name: 'relation',
              in: 'query',
              description: 'Type of Relationship to pull back',
              schema: { $ref: '#/components/schemas/RelationKind' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const getApiSeriesAllRelatedRoute = createRoute({
  method: 'get',
  path: '/api/Series/all-related',
  tags: ['Series'],
  summary: 'Returns all related series against the passed series Id',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: RelatedSeriesDtoSchema },
        'application/json': { schema: RelatedSeriesDtoSchema },
        'text/json': { schema: RelatedSeriesDtoSchema },
      },
    },
  },
})

export const postApiSeriesUpdateRelatedRoute = createRoute({
  method: 'post',
  path: '/api/Series/update-related',
  tags: ['Series'],
  summary:
    'Update the relations attached to the Series. Does not generate associated Sequel/Prequel pairs on target series.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateRelatedSeriesDtoSchema },
        'text/json': { schema: UpdateRelatedSeriesDtoSchema },
        'application/*+json': { schema: UpdateRelatedSeriesDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiSeriesExternalSeriesDetailRoute = createRoute({
  method: 'get',
  path: '/api/Series/external-series-detail',
  tags: ['Series'],
  summary: 'Returns external series metadata around a Given External Series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      aniListId: z
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
            name: 'aniListId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      malId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'malId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
      mangaBakaId: z
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
            name: 'mangaBakaId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      hardcoverId: z
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
            name: 'hardcoverId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      recommendedSeriesId: z
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
            name: 'recommendedSeriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ExternalSeriesDetailDtoSchema },
        'application/json': { schema: ExternalSeriesDetailDtoSchema },
        'text/json': { schema: ExternalSeriesDetailDtoSchema },
      },
    },
  },
})

export const getApiSeriesNextExpectedRoute = createRoute({
  method: 'get',
  path: '/api/Series/next-expected',
  tags: ['Series'],
  summary:
    'Based on the delta times between when chapters are added, for series that are not Completed/Cancelled/Hiatus, forecast the next\ndate when it will be available.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: NextExpectedChapterDtoSchema },
        'application/json': { schema: NextExpectedChapterDtoSchema },
        'text/json': { schema: NextExpectedChapterDtoSchema },
      },
    },
  },
})

export const postApiSeriesMatchRoute = createRoute({
  method: 'post',
  path: '/api/Series/match',
  tags: ['Series'],
  summary: 'Sends a request to Kavita+ API for all potential matches, sorted by relevance',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MatchSeriesDtoSchema },
        'text/json': { schema: MatchSeriesDtoSchema },
        'application/*+json': { schema: MatchSeriesDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MatchSeriesResultDtoSchema },
        'application/json': { schema: MatchSeriesResultDtoSchema },
        'text/json': { schema: MatchSeriesResultDtoSchema },
      },
    },
  },
})

export const postApiSeriesUpdateMatchRoute = createRoute({
  method: 'post',
  path: '/api/Series/update-match',
  tags: ['Series'],
  summary: 'This will perform the fix match',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      provider: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          MetadataProviderSchema.openapi({
            param: {
              name: 'provider',
              in: 'query',
              description: 'The provider the match came from.',
              schema: { $ref: '#/components/schemas/MetadataProvider' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: ExternalMetadataIdsDtoSchema },
        'text/json': { schema: ExternalMetadataIdsDtoSchema },
        'application/*+json': { schema: ExternalMetadataIdsDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiSeriesDontMatchRoute = createRoute({
  method: 'post',
  path: '/api/Series/dont-match',
  tags: ['Series'],
  summary:
    'When true, will not perform a match and will prevent Kavita from attempting to match/scrobble against this series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      dontMatch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dontMatch',
            in: 'query',
            description: '',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiSeriesMatchInfoRoute = createRoute({
  method: 'get',
  path: '/api/Series/match-info',
  tags: ['Series'],
  summary:
    'Returns extra information around an existing match (and series) to display on the Match Screen.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: MatchSeriesInfoDtoSchema },
        'application/json': { schema: MatchSeriesInfoDtoSchema },
        'text/json': { schema: MatchSeriesInfoDtoSchema },
      },
    },
  },
})

export const getApiSeriesSeriesWithAnnotationsRoute = createRoute({
  method: 'get',
  path: '/api/Series/series-with-annotations',
  tags: ['Series'],
  summary: 'Returns all Series that a user has access to',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const postApiServerClearCacheRoute = createRoute({
  method: 'post',
  path: '/api/Server/clear-cache',
  tags: ['Server'],
  summary: 'Performs an ad-hoc cleanup of Cache',
  responses: { 200: { description: 'OK' } },
})

export const postApiServerCleanupWantToReadRoute = createRoute({
  method: 'post',
  path: '/api/Server/cleanup-want-to-read',
  tags: ['Server'],
  summary:
    'Performs an ad-hoc cleanup of Want To Read, by removing want to read series for users, where the series are fully read and in Completed publication status.',
  responses: { 200: { description: 'OK' } },
})

export const postApiServerCleanupRoute = createRoute({
  method: 'post',
  path: '/api/Server/cleanup',
  tags: ['Server'],
  summary: 'Performs the nightly maintenance work on the Server. Can be heavy.',
  responses: { 200: { description: 'OK' } },
})

export const postApiServerBackupDbRoute = createRoute({
  method: 'post',
  path: '/api/Server/backup-db',
  tags: ['Server'],
  summary: 'Performs an ad-hoc backup of the Database',
  responses: { 200: { description: 'OK' } },
})

export const postApiServerAnalyzeFilesRoute = createRoute({
  method: 'post',
  path: '/api/Server/analyze-files',
  tags: ['Server'],
  summary: 'This is a one time task that needs to be ran for v0.7 statistics to work',
  responses: { 200: { description: 'OK' } },
  deprecated: true,
})

export const getApiServerServerInfoSlimRoute = createRoute({
  method: 'get',
  path: '/api/Server/server-info-slim',
  tags: ['Server'],
  summary: 'Returns non-sensitive information about the current system',
  description: 'This is just for the UI and is extremely lightweight',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerInfoSlimDtoSchema },
        'application/json': { schema: ServerInfoSlimDtoSchema },
        'text/json': { schema: ServerInfoSlimDtoSchema },
      },
    },
  },
})

export const postApiServerConvertMediaRoute = createRoute({
  method: 'post',
  path: '/api/Server/convert-media',
  tags: ['Server'],
  summary:
    'Triggers the scheduling of the convert media job. This will convert all media to the target encoding (except for PNG). Only one job will run at a time.',
  responses: { 200: { description: 'OK' } },
})

export const getApiServerLogsRoute = createRoute({
  method: 'get',
  path: '/api/Server/logs',
  tags: ['Server'],
  summary: 'Downloads all the log files via a zip',
  responses: { 200: { description: 'OK' } },
})

export const getApiServerCheckForUpdatesRoute = createRoute({
  method: 'get',
  path: '/api/Server/check-for-updates',
  tags: ['Server'],
  summary: 'Checks for updates and pushes an event to the UI',
  description: 'Some users have websocket issues so this is not always reliable to alert the user',
  responses: { 200: { description: 'OK' } },
})

export const getApiServerCheckUpdateRoute = createRoute({
  method: 'get',
  path: '/api/Server/check-update',
  tags: ['Server'],
  summary: 'Checks for updates, if no updates that are > current version installed, returns null',
  request: {
    query: z.object({
      forceRefresh: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forceRefresh',
            in: 'query',
            description: 'Ask GitHub even when the cached release list is fresh',
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
        'text/plain': { schema: UpdateNotificationDtoSchema },
        'application/json': { schema: UpdateNotificationDtoSchema },
        'text/json': { schema: UpdateNotificationDtoSchema },
      },
    },
  },
})

export const getApiServerCheckOutOfDateRoute = createRoute({
  method: 'get',
  path: '/api/Server/check-out-of-date',
  tags: ['Server'],
  summary: 'Returns how many versions out of date this install is',
  request: {
    query: z.object({
      stableOnly: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'stableOnly',
            in: 'query',
            description: 'Only count Stable releases',
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
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiServerChangelogRoute = createRoute({
  method: 'get',
  path: '/api/Server/changelog',
  tags: ['Server'],
  summary: 'Pull the Changelog for Kavita from Github and display',
  request: {
    query: z.object({
      count: z
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
            name: 'count',
            in: 'query',
            description: 'How many releases from the latest to return',
            schema: { type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(UpdateNotificationDtoSchema) },
        'application/json': { schema: z.array(UpdateNotificationDtoSchema) },
        'text/json': { schema: z.array(UpdateNotificationDtoSchema) },
      },
    },
  },
})

export const getApiServerJobsRoute = createRoute({
  method: 'get',
  path: '/api/Server/jobs',
  tags: ['Server'],
  summary: 'Returns a list of reoccurring jobs. Scheduled ad-hoc jobs will not be returned.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(JobDtoSchema) },
        'application/json': { schema: z.array(JobDtoSchema) },
        'text/json': { schema: z.array(JobDtoSchema) },
      },
    },
  },
})

export const getApiServerActivityRoute = createRoute({
  method: 'get',
  path: '/api/Server/activity',
  tags: ['Server'],
  summary:
    'What is running, delayed and coming up, so a client can rebuild its activity list after a refresh or a server restart',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ActivitySnapshotDtoSchema },
        'application/json': { schema: ActivitySnapshotDtoSchema },
        'text/json': { schema: ActivitySnapshotDtoSchema },
      },
    },
  },
})

export const getApiServerMediaErrorsRoute = createRoute({
  method: 'get',
  path: '/api/Server/media-errors',
  tags: ['Server'],
  summary:
    'Returns a list of issues found during scanning or reading in which files may have corruption or bad metadata (structural metadata)',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(MediaErrorDtoSchema) },
        'application/json': { schema: z.array(MediaErrorDtoSchema) },
        'text/json': { schema: z.array(MediaErrorDtoSchema) },
      },
    },
  },
})

export const postApiServerMediaErrorsDismissRoute = createRoute({
  method: 'post',
  path: '/api/Server/media-errors/dismiss',
  tags: ['Server'],
  summary: 'Dismiss one or more media error',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiServerMediaErrorsUndismissRoute = createRoute({
  method: 'post',
  path: '/api/Server/media-errors/undismiss',
  tags: ['Server'],
  summary: 'Undismiss one or more media error',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiServerMediaErrorsForSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Server/media-errors-for-series',
  tags: ['Server'],
  summary: 'Get the media errors for a given series',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(MediaErrorDtoSchema) },
        'application/json': { schema: z.array(MediaErrorDtoSchema) },
        'text/json': { schema: z.array(MediaErrorDtoSchema) },
      },
    },
  },
})

export const postApiServerClearMediaAlertsRoute = createRoute({
  method: 'post',
  path: '/api/Server/clear-media-alerts',
  tags: ['Server'],
  summary: 'Deletes all media errors',
  responses: { 200: { description: 'OK' } },
})

export const postApiServerBustKavitaplusCacheRoute = createRoute({
  method: 'post',
  path: '/api/Server/bust-kavitaplus-cache',
  tags: ['Server'],
  summary: 'Bust Kavita+ Cache',
  responses: { 200: { description: 'OK' } },
})

export const postApiServerSyncThemesRoute = createRoute({
  method: 'post',
  path: '/api/Server/sync-themes',
  tags: ['Server'],
  summary: 'Runs the Sync Themes task',
  responses: { 200: { description: 'OK' } },
})

export const getApiServerIsTaskRunningRoute = createRoute({
  method: 'get',
  path: '/api/Server/is-task-running',
  tags: ['Server'],
  summary:
    'Returns true if a task is currently running or has been queued. Can be scoped to a queue, default to the default queue',
  request: {
    query: z.object({
      methodName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'methodName',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
      queue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiSettingsBaseUrlRoute = createRoute({
  method: 'get',
  path: '/api/Settings/base-url',
  tags: ['Settings'],
  summary: 'Returns the base url for this instance (if set)',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiSettingsRoute = createRoute({
  method: 'get',
  path: '/api/Settings',
  tags: ['Settings'],
  summary: 'Returns the server settings',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerSettingDtoSchema },
        'application/json': { schema: ServerSettingDtoSchema },
        'text/json': { schema: ServerSettingDtoSchema },
      },
    },
  },
})

export const postApiSettingsRoute = createRoute({
  method: 'post',
  path: '/api/Settings',
  tags: ['Settings'],
  summary: 'Update Server settings',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ServerSettingDtoSchema },
        'text/json': { schema: ServerSettingDtoSchema },
        'application/*+json': { schema: ServerSettingDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerSettingDtoSchema },
        'application/json': { schema: ServerSettingDtoSchema },
        'text/json': { schema: ServerSettingDtoSchema },
      },
    },
  },
})

export const postApiSettingsResetRoute = createRoute({
  method: 'post',
  path: '/api/Settings/reset',
  tags: ['Settings'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerSettingDtoSchema },
        'application/json': { schema: ServerSettingDtoSchema },
        'text/json': { schema: ServerSettingDtoSchema },
      },
    },
  },
})

export const postApiSettingsResetIpAddressesRoute = createRoute({
  method: 'post',
  path: '/api/Settings/reset-ip-addresses',
  tags: ['Settings'],
  summary: 'Resets the IP Addresses',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerSettingDtoSchema },
        'application/json': { schema: ServerSettingDtoSchema },
        'text/json': { schema: ServerSettingDtoSchema },
      },
    },
  },
})

export const postApiSettingsResetBaseUrlRoute = createRoute({
  method: 'post',
  path: '/api/Settings/reset-base-url',
  tags: ['Settings'],
  summary: 'Resets the Base url',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerSettingDtoSchema },
        'application/json': { schema: ServerSettingDtoSchema },
        'text/json': { schema: ServerSettingDtoSchema },
      },
    },
  },
})

export const getApiSettingsIsEmailSetupRoute = createRoute({
  method: 'get',
  path: '/api/Settings/is-email-setup',
  tags: ['Settings'],
  summary: 'Is the minimum information setup for Email to work',
  request: {
    query: z.object({
      forDevice: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'forDevice',
            in: 'query',
            description: "Device send-to doesn't need full email setup (hostname)",
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiSettingsTaskFrequenciesRoute = createRoute({
  method: 'get',
  path: '/api/Settings/task-frequencies',
  tags: ['Settings'],
  summary:
    'All values allowed for Task Scheduling APIs. A custom cron job is not included. Disabled is not applicable for Cleanup.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiSettingsLibraryTypesRoute = createRoute({
  method: 'get',
  path: '/api/Settings/library-types',
  tags: ['Settings'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiSettingsLogLevelsRoute = createRoute({
  method: 'get',
  path: '/api/Settings/log-levels',
  tags: ['Settings'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiSettingsOpdsEnabledRoute = createRoute({
  method: 'get',
  path: '/api/Settings/opds-enabled',
  tags: ['Settings'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiSettingsIsValidCronRoute = createRoute({
  method: 'get',
  path: '/api/Settings/is-valid-cron',
  tags: ['Settings'],
  summary: "Is the cron expression valid for Kavita's scheduler",
  request: {
    query: z.object({
      cronExpression: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cronExpression',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiSettingsTestEmailUrlRoute = createRoute({
  method: 'post',
  path: '/api/Settings/test-email-url',
  tags: ['Settings'],
  summary: 'Sends a test email to see if email settings are hooked up correctly',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: EmailTestResultDtoSchema },
        'application/json': { schema: EmailTestResultDtoSchema },
        'text/json': { schema: EmailTestResultDtoSchema },
      },
    },
  },
})

export const getApiSettingsMetadataSettingsRoute = createRoute({
  method: 'get',
  path: '/api/Settings/metadata-settings',
  tags: ['Settings'],
  summary: 'Get the metadata settings for Kavita+ users.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataSettingsDtoSchema },
        'application/json': { schema: MetadataSettingsDtoSchema },
        'text/json': { schema: MetadataSettingsDtoSchema },
      },
    },
  },
})

export const postApiSettingsMetadataSettingsRoute = createRoute({
  method: 'post',
  path: '/api/Settings/metadata-settings',
  tags: ['Settings'],
  summary: 'Update the metadata settings for Kavita+ Metadata feature',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: MetadataSettingsDtoSchema },
        'text/json': { schema: MetadataSettingsDtoSchema },
        'application/*+json': { schema: MetadataSettingsDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: MetadataSettingsDtoSchema },
        'application/json': { schema: MetadataSettingsDtoSchema },
        'text/json': { schema: MetadataSettingsDtoSchema },
      },
    },
  },
})

export const postApiSettingsRunMetadataMappingsRoute = createRoute({
  method: 'post',
  path: '/api/Settings/run-metadata-mappings',
  tags: ['Settings'],
  request: {
    body: {
      content: {
        'application/json': { schema: RunMetadataMappingsRequestDtoSchema },
        'text/json': { schema: RunMetadataMappingsRequestDtoSchema },
        'application/*+json': { schema: RunMetadataMappingsRequestDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiSettingsImportFieldMappingsRoute = createRoute({
  method: 'post',
  path: '/api/Settings/import-field-mappings',
  tags: ['Settings'],
  summary: 'Import field mappings',
  request: {
    body: {
      content: {
        'application/json': { schema: ImportFieldMappingsDtoSchema },
        'text/json': { schema: ImportFieldMappingsDtoSchema },
        'application/*+json': { schema: ImportFieldMappingsDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: FieldMappingsImportResultDtoSchema },
        'application/json': { schema: FieldMappingsImportResultDtoSchema },
        'text/json': { schema: FieldMappingsImportResultDtoSchema },
      },
    },
  },
})

export const getApiSettingsOidcRoute = createRoute({
  method: 'get',
  path: '/api/Settings/oidc',
  tags: ['Settings'],
  summary: 'Retrieve publicly required configuration regarding Oidc',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: OidcPublicConfigDtoSchema },
        'application/json': { schema: OidcPublicConfigDtoSchema },
        'text/json': { schema: OidcPublicConfigDtoSchema },
      },
    },
  },
})

export const postApiSettingsResetExternalIdsRoute = createRoute({
  method: 'post',
  path: '/api/Settings/reset-external-ids',
  tags: ['Settings'],
  responses: { 200: { description: 'OK' } },
})

export const postApiSettingsIsValidAuthorityRoute = createRoute({
  method: 'post',
  path: '/api/Settings/is-valid-authority',
  tags: ['Settings'],
  summary: 'Validate if the given authority is reachable from the server',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: AuthorityValidationDtoSchema },
        'text/json': { schema: AuthorityValidationDtoSchema },
        'application/*+json': { schema: AuthorityValidationDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: AuthorityValidationResultSchema },
        'application/json': { schema: AuthorityValidationResultSchema },
        'text/json': { schema: AuthorityValidationResultSchema },
      },
    },
  },
})

export const getApiStatsServerStatsRoute = createRoute({
  method: 'get',
  path: '/api/Stats/server/stats',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ServerStatisticsDtoSchema },
        'application/json': { schema: ServerStatisticsDtoSchema },
        'text/json': { schema: ServerStatisticsDtoSchema },
      },
    },
  },
})

export const getApiStatsServerCountPublicationStatusRoute = createRoute({
  method: 'get',
  path: '/api/Stats/server/count/publication-status',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(PublicationStatusStatCountSchema) },
        'application/json': { schema: z.array(PublicationStatusStatCountSchema) },
        'text/json': { schema: z.array(PublicationStatusStatCountSchema) },
      },
    },
  },
})

export const getApiStatsServerCountMangaFormatRoute = createRoute({
  method: 'get',
  path: '/api/Stats/server/count/manga-format',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(MangaFormatStatCountSchema) },
        'application/json': { schema: z.array(MangaFormatStatCountSchema) },
        'text/json': { schema: z.array(MangaFormatStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPopularDecadesRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-decades',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(StatBucketDtoSchema) },
        'application/json': { schema: z.array(StatBucketDtoSchema) },
        'text/json': { schema: z.array(StatBucketDtoSchema) },
      },
    },
  },
})

export const getApiStatsPopularLibrariesRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-libraries',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(LibraryDtoStatCountSchema) },
        'application/json': { schema: z.array(LibraryDtoStatCountSchema) },
        'text/json': { schema: z.array(LibraryDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPopularSeriesRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-series',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoStatCountSchema) },
        'application/json': { schema: z.array(SeriesDtoStatCountSchema) },
        'text/json': { schema: z.array(SeriesDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPopularReadingListRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-reading-list',
  tags: ['Stats'],
  summary:
    'Gets the top 5 most popular reading lists. Counts a reading list as active if a user has read at least some',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoStatCountSchema) },
        'application/json': { schema: z.array(SeriesDtoStatCountSchema) },
        'text/json': { schema: z.array(SeriesDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPopularGenresRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-genres',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(GenreTagDtoStatCountSchema) },
        'application/json': { schema: z.array(GenreTagDtoStatCountSchema) },
        'text/json': { schema: z.array(GenreTagDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPopularTagsRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-tags',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(TagDtoStatCountSchema) },
        'application/json': { schema: z.array(TagDtoStatCountSchema) },
        'text/json': { schema: z.array(TagDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPopularPeopleRoute = createRoute({
  method: 'get',
  path: '/api/Stats/popular-people',
  tags: ['Stats'],
  request: {
    query: z.object({
      role: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PersonRoleSchema.openapi({
            param: {
              name: 'role',
              in: 'query',
              description:
                'Members:\n- `3` — Writer\n- `4` — Penciller\n- `5` — Inker\n- `6` — Colorist\n- `7` — Letterer\n- `8` — CoverArtist\n- `9` — Editor\n- `10` — Publisher\n- `11` — Character\n- `12` — Translator\n- `13` — Imprint\n- `14` — Team\n- `15` — Location',
              schema: { $ref: '#/components/schemas/PersonRole' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(PersonDtoStatCountSchema) },
        'application/json': { schema: z.array(PersonDtoStatCountSchema) },
        'text/json': { schema: z.array(PersonDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsMostActiveUsersRoute = createRoute({
  method: 'get',
  path: '/api/Stats/most-active-users',
  tags: ['Stats'],
  summary: 'Top 5 most active readers for the given timeframe',
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
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
        'text/plain': { schema: z.array(TopReadDtoSchema) },
        'application/json': { schema: z.array(TopReadDtoSchema) },
        'text/json': { schema: z.array(TopReadDtoSchema) },
      },
    },
  },
})

export const getApiStatsServerFileBreakdownRoute = createRoute({
  method: 'get',
  path: '/api/Stats/server/file-breakdown',
  tags: ['Stats'],
  summary: 'A breakdown of different files, their size, and format',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(FileExtensionBreakdownDtoSchema) },
        'application/json': { schema: z.array(FileExtensionBreakdownDtoSchema) },
        'text/json': { schema: z.array(FileExtensionBreakdownDtoSchema) },
      },
    },
  },
})

export const getApiStatsServerFileExtensionRoute = createRoute({
  method: 'get',
  path: '/api/Stats/server/file-extension',
  tags: ['Stats'],
  summary: 'Generates a csv of all file paths for a given extension',
  request: {
    query: z.object({
      fileExtension: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fileExtension',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiStatsReadingCountsRoute = createRoute({
  method: 'get',
  path: '/api/Stats/reading-counts',
  tags: ['Stats'],
  summary: 'Returns reading history events for a give or all users, broken up by day, and format',
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
            in: 'query',
            description: 'If 0, defaults to all users, else just userId',
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
        'text/plain': { schema: z.array(DateTimeStatCountWithFormatSchema) },
        'application/json': { schema: z.array(DateTimeStatCountWithFormatSchema) },
        'text/json': { schema: z.array(DateTimeStatCountWithFormatSchema) },
      },
    },
  },
})

export const getApiStatsDayBreakdownRoute = createRoute({
  method: 'get',
  path: '/api/Stats/day-breakdown',
  tags: ['Stats'],
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(DayOfWeekStatCountSchema) },
        'application/json': { schema: z.array(DayOfWeekStatCountSchema) },
        'text/json': { schema: z.array(DayOfWeekStatCountSchema) },
      },
    },
  },
})

export const getApiStatsPagesPerYearRoute = createRoute({
  method: 'get',
  path: '/api/Stats/pages-per-year',
  tags: ['Stats'],
  summary: 'Returns a count of pages read per year for a given userId.',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(Int32StatCountSchema) },
        'application/json': { schema: z.array(Int32StatCountSchema) },
        'text/json': { schema: z.array(Int32StatCountSchema) },
      },
    },
  },
})

export const getApiStatsWordsPerYearRoute = createRoute({
  method: 'get',
  path: '/api/Stats/words-per-year',
  tags: ['Stats'],
  summary: 'Returns a count of words read per year for a given userId.',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(Int32StatCountSchema) },
        'application/json': { schema: z.array(Int32StatCountSchema) },
        'text/json': { schema: z.array(Int32StatCountSchema) },
      },
    },
  },
})

export const getApiStatsFilesAddedOverTimeRoute = createRoute({
  method: 'get',
  path: '/api/Stats/files-added-over-time',
  tags: ['Stats'],
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(DateTimeStatCountWithFormatSchema) },
        'application/json': { schema: z.array(DateTimeStatCountWithFormatSchema) },
        'text/json': { schema: z.array(DateTimeStatCountWithFormatSchema) },
      },
    },
  },
})

export const getApiStatsDeviceClientTypeRoute = createRoute({
  method: 'get',
  path: '/api/Stats/device/client-type',
  tags: ['Stats'],
  summary: 'Returns client type breakdown for the current month',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: DeviceClientBreakdownDtoSchema },
        'application/json': { schema: DeviceClientBreakdownDtoSchema },
        'text/json': { schema: DeviceClientBreakdownDtoSchema },
      },
    },
  },
})

export const getApiStatsDeviceDeviceTypeRoute = createRoute({
  method: 'get',
  path: '/api/Stats/device/device-type',
  tags: ['Stats'],
  summary: 'Desktop vs Mobile spread over this month',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: StringStatCountSchema },
        'application/json': { schema: StringStatCountSchema },
        'text/json': { schema: StringStatCountSchema },
      },
    },
  },
})

export const getApiStatsReadingActivityRoute = createRoute({
  method: 'get',
  path: '/api/Stats/reading-activity',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'year',
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
        'text/plain': { schema: z.record(z.string(), ReadingActivityGraphEntryDtoSchema) },
        'application/json': { schema: z.record(z.string(), ReadingActivityGraphEntryDtoSchema) },
        'text/json': { schema: z.record(z.string(), ReadingActivityGraphEntryDtoSchema) },
      },
    },
  },
})

export const getApiStatsReadingPaceRoute = createRoute({
  method: 'get',
  path: '/api/Stats/reading-pace',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      booksOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'booksOnly',
            in: 'query',
            description:
              'This API only returns for Books (epub/pdf) and Comics (Image/Archive) regardless of Library type',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ReadingPaceDtoSchema },
        'application/json': { schema: ReadingPaceDtoSchema },
        'text/json': { schema: ReadingPaceDtoSchema },
      },
    },
  },
})

export const getApiStatsGenreBreakdownRoute = createRoute({
  method: 'get',
  path: '/api/Stats/genre-breakdown',
  tags: ['Stats'],
  summary: 'Returns the top 10 genres that the user likes reading',
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: StringBreakDownDtoSchema },
        'application/json': { schema: StringBreakDownDtoSchema },
        'text/json': { schema: StringBreakDownDtoSchema },
      },
    },
  },
})

export const getApiStatsTagBreakdownRoute = createRoute({
  method: 'get',
  path: '/api/Stats/tag-breakdown',
  tags: ['Stats'],
  summary: 'Returns top 10 tags that user likes reading',
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: StringBreakDownDtoSchema },
        'application/json': { schema: StringBreakDownDtoSchema },
        'text/json': { schema: StringBreakDownDtoSchema },
      },
    },
  },
})

export const getApiStatsPageSpreadRoute = createRoute({
  method: 'get',
  path: '/api/Stats/page-spread',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
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
        'text/plain': { schema: SpreadStatsDtoSchema },
        'application/json': { schema: SpreadStatsDtoSchema },
        'text/json': { schema: SpreadStatsDtoSchema },
      },
    },
  },
})

export const getApiStatsWordSpreadRoute = createRoute({
  method: 'get',
  path: '/api/Stats/word-spread',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
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
        'text/plain': { schema: SpreadStatsDtoSchema },
        'application/json': { schema: SpreadStatsDtoSchema },
        'text/json': { schema: SpreadStatsDtoSchema },
      },
    },
  },
})

export const getApiStatsFavoriteAuthorsRoute = createRoute({
  method: 'get',
  path: '/api/Stats/favorite-authors',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
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
        'text/plain': { schema: MostReadAuthorsDtoSchema },
        'application/json': { schema: MostReadAuthorsDtoSchema },
        'text/json': { schema: MostReadAuthorsDtoSchema },
      },
    },
  },
})

export const getApiStatsAvgTimeByHourRoute = createRoute({
  method: 'get',
  path: '/api/Stats/avg-time-by-hour',
  tags: ['Stats'],
  summary: 'Returns the avg time read by hour in the given filter',
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: ReadTimeByHourDtoSchema },
        'application/json': { schema: ReadTimeByHourDtoSchema },
        'text/json': { schema: ReadTimeByHourDtoSchema },
      },
    },
  },
})

export const getApiStatsReadsByMonthRoute = createRoute({
  method: 'get',
  path: '/api/Stats/reads-by-month',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
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
        'text/plain': { schema: z.array(YearMonthGroupingDtoStatCountSchema) },
        'application/json': { schema: z.array(YearMonthGroupingDtoStatCountSchema) },
        'text/json': { schema: z.array(YearMonthGroupingDtoStatCountSchema) },
      },
    },
  },
})

export const getApiStatsTotalReadsRoute = createRoute({
  method: 'get',
  path: '/api/Stats/total-reads',
  tags: ['Stats'],
  summary: 'Returns the total amount reads in the given filter',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.int32() },
        'application/json': { schema: z.int32() },
        'text/json': { schema: z.int32() },
      },
    },
  },
})

export const getApiStatsUserStatsRoute = createRoute({
  method: 'get',
  path: '/api/Stats/user-stats',
  tags: ['Stats'],
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
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
            name: 'userId',
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
        'text/plain': { schema: ProfileStatBarDtoSchema },
        'application/json': { schema: ProfileStatBarDtoSchema },
        'text/json': { schema: ProfileStatBarDtoSchema },
      },
    },
  },
})

export const getApiStatsUserReadRoute = createRoute({
  method: 'get',
  path: '/api/Stats/user-read',
  tags: ['Stats'],
  request: {
    query: z.object({
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
            name: 'userId',
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
        'text/plain': { schema: UserReadStatisticsSchema },
        'application/json': { schema: UserReadStatisticsSchema },
        'text/json': { schema: UserReadStatisticsSchema },
      },
    },
  },
})

export const getApiStatsReadingHistoryRoute = createRoute({
  method: 'get',
  path: '/api/Stats/reading-history',
  tags: ['Stats'],
  summary: "Return a user's reading session history",
  request: {
    query: z.object({
      StartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      TimeZoneId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'TimeZoneId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      EndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndDate',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      Libraries: z
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
            name: 'Libraries',
            in: 'query',
            schema: { type: 'array', items: { type: 'integer', format: 'int32' } },
            required: false,
          },
        }),
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
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
        'text/plain': { schema: z.array(ReadingHistoryItemDtoSchema) },
        'application/json': { schema: z.array(ReadingHistoryItemDtoSchema) },
        'text/json': { schema: z.array(ReadingHistoryItemDtoSchema) },
      },
    },
  },
})

export const getApiStatsReadingHistorySeriesSeriesIdRoute = createRoute({
  method: 'get',
  path: '/api/Stats/reading-history/series/{seriesId}',
  tags: ['Stats'],
  summary: 'Return the authenticated users reading session history for a given series',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            name: 'seriesId',
            in: 'path',
            description: '',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    query: z.object({
      tzId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tzId',
            in: 'query',
            description: '',
            schema: { type: 'string' },
            required: false,
          },
        }),
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
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
        'text/plain': { schema: z.array(ReadingHistoryItemDtoSchema) },
        'application/json': { schema: z.array(ReadingHistoryItemDtoSchema) },
        'text/json': { schema: z.array(ReadingHistoryItemDtoSchema) },
      },
    },
  },
})

export const getApiStreamDashboardRoute = createRoute({
  method: 'get',
  path: '/api/Stream/dashboard',
  tags: ['Stream'],
  summary: "Returns the layout of the user's dashboard",
  request: {
    query: z.object({
      visibleOnly: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'visibleOnly',
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
        'text/plain': { schema: z.array(DashboardStreamDtoSchema) },
        'application/json': { schema: z.array(DashboardStreamDtoSchema) },
        'text/json': { schema: z.array(DashboardStreamDtoSchema) },
      },
    },
  },
})

export const getApiStreamSidenavRoute = createRoute({
  method: 'get',
  path: '/api/Stream/sidenav',
  tags: ['Stream'],
  summary: "Return's the user's side nav",
  request: {
    query: z.object({
      visibleOnly: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'visibleOnly',
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
        'text/plain': { schema: z.array(SideNavStreamDtoSchema) },
        'application/json': { schema: z.array(SideNavStreamDtoSchema) },
        'text/json': { schema: z.array(SideNavStreamDtoSchema) },
      },
    },
  },
})

export const getApiStreamExternalSourcesRoute = createRoute({
  method: 'get',
  path: '/api/Stream/external-sources',
  tags: ['Stream'],
  summary: "Return's the user's external sources",
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(ExternalSourceDtoSchema) },
        'application/json': { schema: z.array(ExternalSourceDtoSchema) },
        'text/json': { schema: z.array(ExternalSourceDtoSchema) },
      },
    },
  },
})

export const postApiStreamCreateExternalSourceRoute = createRoute({
  method: 'post',
  path: '/api/Stream/create-external-source',
  tags: ['Stream'],
  summary: 'Create an external Source',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ExternalSourceDtoSchema },
        'text/json': { schema: ExternalSourceDtoSchema },
        'application/*+json': { schema: ExternalSourceDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ExternalSourceDtoSchema },
        'application/json': { schema: ExternalSourceDtoSchema },
        'text/json': { schema: ExternalSourceDtoSchema },
      },
    },
  },
})

export const postApiStreamUpdateExternalSourceRoute = createRoute({
  method: 'post',
  path: '/api/Stream/update-external-source',
  tags: ['Stream'],
  summary: 'Updates an existing external source',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ExternalSourceDtoSchema },
        'text/json': { schema: ExternalSourceDtoSchema },
        'application/*+json': { schema: ExternalSourceDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: ExternalSourceDtoSchema },
        'application/json': { schema: ExternalSourceDtoSchema },
        'text/json': { schema: ExternalSourceDtoSchema },
      },
    },
  },
})

export const postApiStreamExternalSourceExistsRoute = createRoute({
  method: 'post',
  path: '/api/Stream/external-source-exists',
  tags: ['Stream'],
  summary: 'Validates the external source by host is unique (for this user)',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: ExternalSourceDtoSchema },
        'text/json': { schema: ExternalSourceDtoSchema },
        'application/*+json': { schema: ExternalSourceDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const deleteApiStreamDeleteExternalSourceRoute = createRoute({
  method: 'delete',
  path: '/api/Stream/delete-external-source',
  tags: ['Stream'],
  summary: "Delete's the external source",
  request: {
    query: z.object({
      externalSourceId: z
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
            name: 'externalSourceId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiStreamAddDashboardStreamRoute = createRoute({
  method: 'post',
  path: '/api/Stream/add-dashboard-stream',
  tags: ['Stream'],
  summary:
    "Creates a Dashboard Stream from a SmartFilter and adds it to the user's dashboard as visible",
  request: {
    query: z.object({
      smartFilterId: z
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
            name: 'smartFilterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: DashboardStreamDtoSchema },
        'application/json': { schema: DashboardStreamDtoSchema },
        'text/json': { schema: DashboardStreamDtoSchema },
      },
    },
  },
})

export const postApiStreamUpdateDashboardStreamRoute = createRoute({
  method: 'post',
  path: '/api/Stream/update-dashboard-stream',
  tags: ['Stream'],
  summary: 'Updates the visibility of a dashboard stream',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DashboardStreamDtoSchema },
        'text/json': { schema: DashboardStreamDtoSchema },
        'application/*+json': { schema: DashboardStreamDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiStreamUpdateDashboardPositionRoute = createRoute({
  method: 'post',
  path: '/api/Stream/update-dashboard-position',
  tags: ['Stream'],
  summary: 'Updates the position of a dashboard stream',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateStreamPositionDtoSchema },
        'text/json': { schema: UpdateStreamPositionDtoSchema },
        'application/*+json': { schema: UpdateStreamPositionDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiStreamAddSidenavStreamRoute = createRoute({
  method: 'post',
  path: '/api/Stream/add-sidenav-stream',
  tags: ['Stream'],
  summary:
    "Creates a SideNav Stream from a SmartFilter and adds it to the user's sidenav as visible",
  request: {
    query: z.object({
      smartFilterId: z
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
            name: 'smartFilterId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: SideNavStreamDtoSchema },
        'application/json': { schema: SideNavStreamDtoSchema },
        'text/json': { schema: SideNavStreamDtoSchema },
      },
    },
  },
})

export const postApiStreamAddSidenavStreamFromExternalSourceRoute = createRoute({
  method: 'post',
  path: '/api/Stream/add-sidenav-stream-from-external-source',
  tags: ['Stream'],
  summary:
    "Creates a SideNav Stream from a SmartFilter and adds it to the user's sidenav as visible",
  request: {
    query: z.object({
      externalSourceId: z
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
            name: 'externalSourceId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: SideNavStreamDtoSchema },
        'application/json': { schema: SideNavStreamDtoSchema },
        'text/json': { schema: SideNavStreamDtoSchema },
      },
    },
  },
})

export const postApiStreamUpdateSidenavStreamRoute = createRoute({
  method: 'post',
  path: '/api/Stream/update-sidenav-stream',
  tags: ['Stream'],
  summary: 'Updates the visibility of a dashboard stream',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: SideNavStreamDtoSchema },
        'text/json': { schema: SideNavStreamDtoSchema },
        'application/*+json': { schema: SideNavStreamDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiStreamUpdateSidenavPositionRoute = createRoute({
  method: 'post',
  path: '/api/Stream/update-sidenav-position',
  tags: ['Stream'],
  summary: 'Updates the position of a dashboard stream',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateStreamPositionDtoSchema },
        'text/json': { schema: UpdateStreamPositionDtoSchema },
        'application/*+json': { schema: UpdateStreamPositionDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiStreamBulkSidenavStreamVisibilityRoute = createRoute({
  method: 'post',
  path: '/api/Stream/bulk-sidenav-stream-visibility',
  tags: ['Stream'],
  request: {
    body: {
      content: {
        'application/json': { schema: BulkUpdateSideNavStreamVisibilityDtoSchema },
        'text/json': { schema: BulkUpdateSideNavStreamVisibilityDtoSchema },
        'application/*+json': { schema: BulkUpdateSideNavStreamVisibilityDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiStreamSmartFilterSideNavStreamRoute = createRoute({
  method: 'delete',
  path: '/api/Stream/smart-filter-side-nav-stream',
  tags: ['Stream'],
  summary: "Removes a Smart Filter from a user's SideNav Streams",
  request: {
    query: z.object({
      sideNavStreamId: z
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
            name: 'sideNavStreamId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiStreamSmartFilterDashboardStreamRoute = createRoute({
  method: 'delete',
  path: '/api/Stream/smart-filter-dashboard-stream',
  tags: ['Stream'],
  summary: "Removes a Smart Filter from a user's Dashboard Streams",
  request: {
    query: z.object({
      dashboardStreamId: z
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
            name: 'dashboardStreamId',
            in: 'query',
            description: '',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiTachiyomiLatestChapterRoute = createRoute({
  method: 'get',
  path: '/api/Tachiyomi/latest-chapter',
  tags: ['Tachiyomi'],
  summary: 'Given the series Id, this should return the latest chapter that has been fully read.',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: TachiyomiChapterDtoSchema },
        'application/json': { schema: TachiyomiChapterDtoSchema },
        'text/json': { schema: TachiyomiChapterDtoSchema },
      },
    },
  },
})

export const postApiTachiyomiMarkChapterUntilAsReadRoute = createRoute({
  method: 'post',
  path: '/api/Tachiyomi/mark-chapter-until-as-read',
  tags: ['Tachiyomi'],
  summary:
    'Marks every chapter that is sorted below the passed number as Read. This will not mark any specials as read.',
  description: 'This is built for Tachiyomi and is not expected to be called by any other place',
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      chapterNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'chapterNumber',
            in: 'query',
            schema: { type: 'number', format: 'float' },
            required: false,
          },
        }),
      generateReadingSessions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'generateReadingSessions',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiThemeRoute = createRoute({
  method: 'get',
  path: '/api/Theme',
  tags: ['Theme'],
  summary: 'Returns all Themes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SiteThemeDtoSchema) },
        'application/json': { schema: z.array(SiteThemeDtoSchema) },
        'text/json': { schema: z.array(SiteThemeDtoSchema) },
      },
    },
  },
})

export const deleteApiThemeRoute = createRoute({
  method: 'delete',
  path: '/api/Theme',
  tags: ['Theme'],
  summary: 'Attempts to delete a theme. If already in use by users, will not allow',
  request: {
    query: z.object({
      themeId: z
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
            name: 'themeId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.array(DownloadableSiteThemeDtoSchema) },
        'application/json': { schema: z.array(DownloadableSiteThemeDtoSchema) },
        'text/json': { schema: z.array(DownloadableSiteThemeDtoSchema) },
      },
    },
  },
})

export const postApiThemeUpdateDefaultRoute = createRoute({
  method: 'post',
  path: '/api/Theme/update-default',
  tags: ['Theme'],
  request: {
    body: {
      content: {
        'application/json': { schema: UpdateDefaultThemeDtoSchema },
        'text/json': { schema: UpdateDefaultThemeDtoSchema },
        'application/*+json': { schema: UpdateDefaultThemeDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiThemeDownloadContentRoute = createRoute({
  method: 'get',
  path: '/api/Theme/download-content',
  tags: ['Theme'],
  summary: 'Returns css content to the UI. UI is expected to escape the content',
  request: {
    query: z.object({
      themeId: z
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
            name: 'themeId',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const getApiThemeBrowseRoute = createRoute({
  method: 'get',
  path: '/api/Theme/browse',
  tags: ['Theme'],
  summary: 'Browse themes that can be used on this server',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(DownloadableSiteThemeDtoSchema) },
        'application/json': { schema: z.array(DownloadableSiteThemeDtoSchema) },
        'text/json': { schema: z.array(DownloadableSiteThemeDtoSchema) },
      },
    },
  },
})

export const postApiThemeDownloadThemeRoute = createRoute({
  method: 'post',
  path: '/api/Theme/download-theme',
  tags: ['Theme'],
  summary: 'Downloads a SiteTheme from upstream',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: DownloadableSiteThemeDtoSchema },
        'text/json': { schema: DownloadableSiteThemeDtoSchema },
        'application/*+json': { schema: DownloadableSiteThemeDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: SiteThemeDtoSchema },
        'application/json': { schema: SiteThemeDtoSchema },
        'text/json': { schema: SiteThemeDtoSchema },
      },
    },
  },
})

export const postApiThemeUploadThemeRoute = createRoute({
  method: 'post',
  path: '/api/Theme/upload-theme',
  tags: ['Theme'],
  summary: 'Uploads a new theme file',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formFile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: '' }),
            })
            .openapi({ required: [] }),
          encoding: { formFile: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: SiteThemeDtoSchema },
        'application/json': { schema: SiteThemeDtoSchema },
        'text/json': { schema: SiteThemeDtoSchema },
      },
    },
  },
})

export const postApiUploadUploadByUrlRoute = createRoute({
  method: 'post',
  path: '/api/Upload/upload-by-url',
  tags: ['Upload'],
  summary:
    'This stores a file (image) in temp directory for use in a cover image replacement flow.\nThis is automatically cleaned up.',
  request: {
    body: {
      description: 'Escaped url to download from',
      content: {
        'application/json': { schema: UploadUrlDtoSchema },
        'text/json': { schema: UploadUrlDtoSchema },
        'application/*+json': { schema: UploadUrlDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiUploadUploadChapterCoverRoute = createRoute({
  method: 'post',
  path: '/api/Upload/upload-chapter-cover',
  tags: ['Upload'],
  request: {
    query: z.object({
      chapterId: z
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
            name: 'chapterId',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiUploadUploadVolumeCoverRoute = createRoute({
  method: 'post',
  path: '/api/Upload/upload-volume-cover',
  tags: ['Upload'],
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiUploadUploadSeriesCoverRoute = createRoute({
  method: 'post',
  path: '/api/Upload/upload-series-cover',
  tags: ['Upload'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiUploadUploadByFileRoute = createRoute({
  method: 'post',
  path: '/api/Upload/upload-by-file',
  tags: ['Upload'],
  summary:
    'Stages an uploaded image file in the temp directory for use in a cover image replacement flow.\nThis is automatically cleaned up.',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The image file to stage',
                }),
            })
            .openapi({ required: [] }),
          encoding: { file: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: z.string() },
        'text/json': { schema: z.string() },
      },
    },
  },
})

export const postApiUploadSeriesRoute = createRoute({
  method: 'post',
  path: '/api/Upload/series',
  tags: ['Upload'],
  summary: 'Replaces series cover image and locks it with a base64 encoded image',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadCollectionRoute = createRoute({
  method: 'post',
  path: '/api/Upload/collection',
  tags: ['Upload'],
  summary: 'Replaces collection tag cover image and locks it with a base64 encoded image',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadReadingListRoute = createRoute({
  method: 'post',
  path: '/api/Upload/reading-list',
  tags: ['Upload'],
  summary: 'Replaces reading list cover image and locks it with a base64 encoded image',
  description:
    'This is the only API that can be called by non-admins, but the authenticated user must have a readinglist permission',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadChapterRoute = createRoute({
  method: 'post',
  path: '/api/Upload/chapter',
  tags: ['Upload'],
  summary:
    "Replaces chapter cover image and locks it with a base64 encoded image. This will update the parent volume's cover image.",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadVolumeRoute = createRoute({
  method: 'post',
  path: '/api/Upload/volume',
  tags: ['Upload'],
  summary: 'Replaces volume cover image and locks it with a base64 encoded image.',
  description: 'This will not update the underlying chapter',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadLibraryRoute = createRoute({
  method: 'post',
  path: '/api/Upload/library',
  tags: ['Upload'],
  summary:
    'Replaces library cover image with a base64 encoded image. If empty string passed, will reset to null.',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadPersonRoute = createRoute({
  method: 'post',
  path: '/api/Upload/person',
  tags: ['Upload'],
  summary: 'Replaces person tag cover image and locks it with a base64 encoded image',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiUploadUserRoute = createRoute({
  method: 'post',
  path: '/api/Upload/user',
  tags: ['Upload'],
  summary: 'Replaces user cover image and locks it with a base64 encoded image',
  description: 'You MUST be the user in question',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UploadCoverFileDtoSchema },
        'text/json': { schema: UploadCoverFileDtoSchema },
        'application/*+json': { schema: UploadCoverFileDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteApiUsersDeleteUserRoute = createRoute({
  method: 'delete',
  path: '/api/Users/delete-user',
  tags: ['Users'],
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiUsersRoute = createRoute({
  method: 'get',
  path: '/api/Users',
  tags: ['Users'],
  summary: 'Returns all users of this server',
  request: {
    query: z.object({
      includePending: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includePending',
            in: 'query',
            description: 'This will include pending members',
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
        'text/plain': { schema: z.array(MemberDtoSchema) },
        'application/json': { schema: z.array(MemberDtoSchema) },
        'text/json': { schema: z.array(MemberDtoSchema) },
      },
    },
  },
})

export const getApiUsersProfileInfoRoute = createRoute({
  method: 'get',
  path: '/api/Users/profile-info',
  tags: ['Users'],
  summary: 'Get Information about a given user',
  request: {
    query: z.object({
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
            name: 'userId',
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
        'text/plain': { schema: MemberInfoDtoSchema },
        'application/json': { schema: MemberInfoDtoSchema },
        'text/json': { schema: MemberInfoDtoSchema },
      },
    },
  },
})

export const getApiUsersHasProfileSharedRoute = createRoute({
  method: 'get',
  path: '/api/Users/has-profile-shared',
  tags: ['Users'],
  summary: 'Does the requested user have their profile sharing on',
  request: {
    query: z.object({
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
            name: 'userId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiUsersHasReadingProgressRoute = createRoute({
  method: 'get',
  path: '/api/Users/has-reading-progress',
  tags: ['Users'],
  summary: 'Is there any reading progress on this library',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const getApiUsersHasLibraryAccessRoute = createRoute({
  method: 'get',
  path: '/api/Users/has-library-access',
  tags: ['Users'],
  summary: 'Does the user have access to this library',
  request: {
    query: z.object({
      libraryId: z
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
            name: 'libraryId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiUsersUpdatePreferencesRoute = createRoute({
  method: 'post',
  path: '/api/Users/update-preferences',
  tags: ['Users'],
  summary: 'Update the user preferences',
  description: 'If the user has ReadOnly role, they will not be able to perform this action',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UserPreferencesDtoSchema },
        'text/json': { schema: UserPreferencesDtoSchema },
        'application/*+json': { schema: UserPreferencesDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserPreferencesDtoSchema },
        'application/json': { schema: UserPreferencesDtoSchema },
        'text/json': { schema: UserPreferencesDtoSchema },
      },
    },
  },
})

export const getApiUsersGetPreferencesRoute = createRoute({
  method: 'get',
  path: '/api/Users/get-preferences',
  tags: ['Users'],
  summary: 'Returns the preferences of the user',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: UserPreferencesDtoSchema },
        'application/json': { schema: UserPreferencesDtoSchema },
        'text/json': { schema: UserPreferencesDtoSchema },
      },
    },
  },
})

export const getApiUsersNamesRoute = createRoute({
  method: 'get',
  path: '/api/Users/names',
  tags: ['Users'],
  summary: 'Returns a list of the user names within the system',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(z.string()) },
        'application/json': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getApiUsersTokensRoute = createRoute({
  method: 'get',
  path: '/api/Users/tokens',
  tags: ['Users'],
  summary:
    'Returns all users with tokens registered and their token information. Does not send the tokens.',
  description: 'Kavita+ only',
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(UserTokenInfoDtoSchema) },
        'application/json': { schema: z.array(UserTokenInfoDtoSchema) },
        'text/json': { schema: z.array(UserTokenInfoDtoSchema) },
      },
    },
  },
})

export const getApiVolumeRoute = createRoute({
  method: 'get',
  path: '/api/Volume',
  tags: ['Volume'],
  summary: 'Returns the appropriate Volume',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: VolumeDtoSchema },
        'application/json': { schema: VolumeDtoSchema },
        'text/json': { schema: VolumeDtoSchema },
      },
    },
  },
})

export const deleteApiVolumeRoute = createRoute({
  method: 'delete',
  path: '/api/Volume',
  tags: ['Volume'],
  summary: 'Delete the Volume from the DB',
  request: {
    query: z.object({
      volumeId: z
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
            name: 'volumeId',
            in: 'query',
            description: '',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiVolumeUpdateRoute = createRoute({
  method: 'post',
  path: '/api/Volume/update',
  tags: ['Volume'],
  summary: 'Updates the information on the Volume',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateVolumeDtoSchema },
        'text/json': { schema: UpdateVolumeDtoSchema },
        'application/*+json': { schema: UpdateVolumeDtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: VolumeDtoSchema },
        'application/json': { schema: VolumeDtoSchema },
        'text/json': { schema: VolumeDtoSchema },
      },
    },
  },
})

export const postApiVolumeMultipleRoute = createRoute({
  method: 'post',
  path: '/api/Volume/multiple',
  tags: ['Volume'],
  summary: 'Delete multiple Volumes from the DB',
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: z.array(z.int32()) },
        'text/json': { schema: z.array(z.int32()) },
        'application/*+json': { schema: z.array(z.int32()) },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiWantToReadV2Route = createRoute({
  method: 'post',
  path: '/api/want-to-read/v2',
  tags: ['WantToRead'],
  summary: "Return all Series that are in the current logged in user's Want to Read list, filtered",
  request: {
    query: z.object({
      PageNumber: z
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
            name: 'PageNumber',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      PageSize: z
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
            name: 'PageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
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
            name: 'userId',
            in: 'query',
            description:
              'Optional user id to request the OnDeck for someone else. They must have profile sharing enabled when doing so',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: SeriesFilterV2DtoSchema },
        'text/json': { schema: SeriesFilterV2DtoSchema },
        'application/*+json': { schema: SeriesFilterV2DtoSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': { schema: z.array(SeriesDtoSchema) },
        'application/json': { schema: z.array(SeriesDtoSchema) },
        'text/json': { schema: z.array(SeriesDtoSchema) },
      },
    },
  },
})

export const getApiWantToReadRoute = createRoute({
  method: 'get',
  path: '/api/want-to-read',
  tags: ['WantToRead'],
  request: {
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesId',
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
        'text/plain': { schema: z.boolean() },
        'application/json': { schema: z.boolean() },
        'text/json': { schema: z.boolean() },
      },
    },
  },
})

export const postApiWantToReadAddSeriesRoute = createRoute({
  method: 'post',
  path: '/api/want-to-read/add-series',
  tags: ['WantToRead'],
  summary: "Given a list of Series Ids, add them to the current logged in user's Want To Read list",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateWantToReadDtoSchema },
        'text/json': { schema: UpdateWantToReadDtoSchema },
        'application/*+json': { schema: UpdateWantToReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postApiWantToReadRemoveSeriesRoute = createRoute({
  method: 'post',
  path: '/api/want-to-read/remove-series',
  tags: ['WantToRead'],
  summary:
    "Given a list of Series Ids, remove them from the current logged in user's Want To Read list",
  request: {
    body: {
      description: '',
      content: {
        'application/json': { schema: UpdateWantToReadDtoSchema },
        'text/json': { schema: UpdateWantToReadDtoSchema },
        'application/*+json': { schema: UpdateWantToReadDtoSchema },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})
