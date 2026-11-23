type Violation = { fieldName?: string | undefined; message?: string | undefined }
type ValidationErrorResponse = { violations: Violation[] }
type KomgaExtensionDto = { read: boolean }
type ItemAuthorDto = { name?: string | undefined; url?: string | undefined }
type ItemDto = {
  _komga?: KomgaExtensionDto | undefined
  author?: ItemAuthorDto | undefined
  content_html?: string | undefined
  date_modified?: string | undefined
  id: string
  summary?: string | undefined
  tags: string[]
  title?: string | undefined
  url?: string | undefined
}
type JsonFeedDto = {
  description?: string | undefined
  home_page_url?: string | undefined
  items: ItemDto[]
  title: string
  version: string
}
type AuthorDto = { name: string; role: string }
type MediaDto = {
  comment: string
  epubDivinaCompatible: boolean
  epubIsKepub: boolean
  mediaProfile: string
  mediaType: string
  pagesCount: number
  status: string
}
type WebLinkDto = { label: string; url: string }
type NotableEntityDto = { kind: string; name: string }
type BookMetadataDto = {
  authors: AuthorDto[]
  authorsLock: boolean
  created: string
  isbn: string
  isbnLock: boolean
  lastModified: string
  links: WebLinkDto[]
  linksLock: boolean
  notableEntities: NotableEntityDto[]
  notableEntitiesLock: boolean
  number: string
  numberLock: boolean
  numberSort: number
  numberSortLock: boolean
  releaseDate?: string | undefined
  releaseDateLock: boolean
  summary: string
  summaryLock: boolean
  tags: string[]
  tagsLock: boolean
  title: string
  titleLock: boolean
}
type ReadProgressDto = {
  completed: boolean
  created: string
  deviceId: string
  deviceName: string
  lastModified: string
  page: number
  readDate: string
}
type BookDto = {
  created: string
  deleted: boolean
  fileHash: string
  fileLastModified: string
  id: string
  lastModified: string
  libraryId: string
  media: MediaDto
  metadata: BookMetadataDto
  name: string
  number: number
  oneshot: boolean
  readProgress?: ReadProgressDto | undefined
  seriesId: string
  seriesTitle: string
  size: string
  sizeBytes: bigint
  url: string
}
type SortObject = {
  empty?: boolean | undefined
  sorted?: boolean | undefined
  unsorted?: boolean | undefined
}
type PageableObject = {
  offset?: bigint | undefined
  pageNumber?: number | undefined
  pageSize?: number | undefined
  paged?: boolean | undefined
  sort?: SortObject | undefined
  unpaged?: boolean | undefined
}
type PageBookDto = {
  content?: BookDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type BookImportDto = {
  destinationName?: string | undefined
  seriesId: string
  sourceFile: string
  upgradeBookId?: string | undefined
}
type BookImportBatchDto = { books: BookImportDto[]; copyMode: 'MOVE' | 'COPY' | 'HARDLINK' }
type SearchConditionAnyOfBook = { anyOf: SearchConditionBook[] }
type SearchConditionAllOfBook = { allOf: SearchConditionBook[] }
type SearchOperatorIs = { value: { [x: string]: unknown } }
type SearchOperatorIsNot = { value: { [x: string]: unknown } }
type SearchOperatorEqualityString = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionLibraryId = { libraryId: SearchOperatorEqualityString }
type SearchConditionReadListId = { readListId: SearchOperatorEqualityString }
type SearchConditionSeriesId = { seriesId: SearchOperatorEqualityString }
type SearchOperatorIsTrue = { operator: string }
type SearchOperatorIsFalse = { operator: string }
type SearchOperatorBoolean = SearchOperatorIsTrue | SearchOperatorIsFalse
type SearchConditionDeleted = { deleted: SearchOperatorBoolean }
type SearchConditionOneShot = { oneShot: SearchOperatorBoolean }
type SearchOperatorBeginsWith = { value: string }
type SearchOperatorDoesNotBeginWith = { value: string }
type SearchOperatorContains = { value: string }
type SearchOperatorDoesNotContain = { value: string }
type SearchOperatorEndsWith = { value: string }
type SearchOperatorDoesNotEndWith = { value: string }
type SearchOperatorString =
  | SearchOperatorBeginsWith
  | SearchOperatorDoesNotBeginWith
  | SearchOperatorContains
  | SearchOperatorDoesNotContain
  | SearchOperatorEndsWith
  | SearchOperatorDoesNotEndWith
  | SearchOperatorIs
  | SearchOperatorIsNot
type SearchConditionTitle = { title: SearchOperatorString }
type SearchOperatorBefore = { dateTime: string }
type SearchOperatorAfter = { dateTime: string }
type SearchOperatorIsInTheLast = { duration: string }
type SearchOperatorIsNotInTheLast = { duration: string }
type SearchOperatorIsNull = { operator: string }
type SearchOperatorIsNotNull = { operator: string }
type SearchOperatorDate =
  | SearchOperatorBefore
  | SearchOperatorAfter
  | SearchOperatorIsInTheLast
  | SearchOperatorIsNotInTheLast
  | SearchOperatorIsNull
  | SearchOperatorIsNotNull
type SearchConditionReleaseDate = { releaseDate: SearchOperatorDate }
type SearchOperatorIsNullT = { operator: string }
type SearchOperatorIsNotNullT = { operator: string }
type SearchOperatorEqualityNullableString =
  | SearchOperatorIs
  | SearchOperatorIsNot
  | SearchOperatorIsNullT
  | SearchOperatorIsNotNullT
type SearchConditionTag = { tag: SearchOperatorEqualityNullableString }
type SearchOperatorGreaterThan = { value: { [x: string]: unknown } }
type SearchOperatorLessThan = { value: { [x: string]: unknown } }
type SearchOperatorNumericTFloat =
  | SearchOperatorGreaterThan
  | SearchOperatorLessThan
  | SearchOperatorIs
  | SearchOperatorIsNot
type SearchConditionNumberSort = { numberSort: SearchOperatorNumericTFloat }
type SearchOperatorEqualityReadStatus = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionReadStatus = { readStatus: SearchOperatorEqualityReadStatus }
type SearchOperatorEqualityStatus = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionMediaStatus = { mediaStatus: SearchOperatorEqualityStatus }
type SearchOperatorEqualityMediaProfile = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionMediaProfile = { mediaProfile: SearchOperatorEqualityMediaProfile }
type SearchOperatorEqualityAuthorMatch = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionAuthor = { author: SearchOperatorEqualityAuthorMatch }
type SearchOperatorEqualityNotableEntityMatch = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionNotableEntity = { notableEntity: SearchOperatorEqualityNotableEntityMatch }
type SearchOperatorEqualityPosterMatch = SearchOperatorIs | SearchOperatorIsNot
type SearchConditionPoster = { poster: SearchOperatorEqualityPosterMatch }
type SearchConditionBook =
  | SearchConditionAnyOfBook
  | SearchConditionAllOfBook
  | SearchConditionLibraryId
  | SearchConditionReadListId
  | SearchConditionSeriesId
  | SearchConditionDeleted
  | SearchConditionOneShot
  | SearchConditionTitle
  | SearchConditionReleaseDate
  | SearchConditionTag
  | SearchConditionNumberSort
  | SearchConditionReadStatus
  | SearchConditionMediaStatus
  | SearchConditionMediaProfile
  | SearchConditionAuthor
  | SearchConditionNotableEntity
  | SearchConditionPoster
type BookSearch = {
  condition?: SearchConditionBook | undefined
  fullTextSearch?: string | undefined
}
type AuthorUpdateDto = { name: string; role: string }
type WebLinkUpdateDto = { label: string; url?: string | undefined }
type NotableEntityUpdateDto = { kind: string; name: string }
type BookMetadataUpdateDto = {
  authors?: AuthorUpdateDto[] | undefined
  authorsLock?: boolean | undefined
  isbn?: string | undefined
  isbnLock?: boolean | undefined
  links?: WebLinkUpdateDto[] | undefined
  linksLock?: boolean | undefined
  notableEntities?: NotableEntityUpdateDto[] | undefined
  notableEntitiesLock?: boolean | undefined
  number?: string | undefined
  numberLock?: boolean | undefined
  numberSort?: number | undefined
  numberSortLock?: boolean | undefined
  releaseDate?: string | undefined
  releaseDateLock?: boolean | undefined
  summary?: string | undefined
  summaryLock?: boolean | undefined
  tags?: string[] | undefined
  tagsLock?: boolean | undefined
  title?: string | undefined
  titleLock?: boolean | undefined
}
type StreamingResponseBody = { [x: string]: unknown }
type WPLinkDto = {
  height?: number | undefined
  href?: string | undefined
  properties: { [x: string]: { [x: string]: { [x: string]: unknown } } }
  rel?: string | undefined
  templated?: boolean | undefined
  title?: string | undefined
  type?: string | undefined
  width?: number | undefined
}
type WPContributorDto = { links: WPLinkDto[]; name: string; position?: number | undefined }
type WPBelongsToDto = { collection: WPContributorDto[]; series: WPContributorDto[] }
type WPMetadataDto = {
  artist: string[]
  author: string[]
  belongsTo?: WPBelongsToDto | undefined
  colorist: string[]
  conformsTo?: string | undefined
  contributor: string[]
  description?: string | undefined
  editor: string[]
  identifier?: string | undefined
  illustrator: string[]
  inker: string[]
  language?: string | undefined
  letterer: string[]
  modified?: string | undefined
  numberOfPages?: number | undefined
  penciler: string[]
  published?: string | undefined
  publisher: string[]
  readingProgression?: 'rtl' | 'ltr' | 'ttb' | 'btt' | 'auto' | undefined
  rendition: { [x: string]: { [x: string]: unknown } }
  sortAs?: string | undefined
  subject: string[]
  subtitle?: string | undefined
  title: string
  translator: string[]
  type?: string | undefined
}
type WPPublicationDto = {
  context?: string | undefined
  images: WPLinkDto[]
  landmarks: WPLinkDto[]
  links: WPLinkDto[]
  metadata: WPMetadataDto
  pageList: WPLinkDto[]
  readingOrder: WPLinkDto[]
  resources: WPLinkDto[]
  toc: WPLinkDto[]
}
type PageDto = {
  fileName: string
  height?: number | undefined
  mediaType: string
  number: number
  size: string
  sizeBytes?: bigint | undefined
  width?: number | undefined
}
type MediaType = {
  charset?: string | undefined
  concrete?: boolean | undefined
  parameters?: { [x: string]: string } | undefined
  qualityValue?: number | undefined
  subtype?: string | undefined
  subtypeSuffix?: string | undefined
  type?: string | undefined
  wildcardSubtype?: boolean | undefined
  wildcardType?: boolean | undefined
}
type Location = {
  fragments: string[]
  position?: number | undefined
  progression?: number | undefined
  totalProgression?: number | undefined
}
type Text = {
  after?: string | undefined
  before?: string | undefined
  highlight?: string | undefined
}
type R2Locator = {
  href: string
  koboSpan?: string | undefined
  locations?: Location | undefined
  text?: Text | undefined
  title?: string | undefined
  type: string
}
type R2Positions = { positions: R2Locator[]; total: number }
type R2Device = { id: string; name: string }
type R2Progression = { device: R2Device; locator: R2Locator; modified: string }
type ReadProgressUpdateDto = { completed?: boolean | undefined; page?: number | undefined }
type ReadListDto = {
  bookIds: string[]
  createdDate: string
  filtered: boolean
  id: string
  lastModifiedDate: string
  name: string
  ordered: boolean
  summary: string
}
type ThumbnailBookDto = {
  bookId: string
  fileSize: bigint
  height: number
  id: string
  mediaType: string
  selected: boolean
  type: string
  width: number
}
type ClaimStatus = { isClaimed: boolean }
type AgeRestrictionDto = { age: number; restriction: 'ALLOW_ONLY' | 'EXCLUDE' }
type UserDto = {
  ageRestriction?: AgeRestrictionDto | undefined
  email: string
  id: string
  labelsAllow: string[]
  labelsExclude: string[]
  roles: string[]
  sharedAllLibraries: boolean
  sharedLibrariesIds: string[]
}
type ClientSettingGlobalUpdateDto = { allowUnauthorized: boolean; value: string }
type ClientSettingDto = { allowUnauthorized?: boolean | undefined; value: string }
type ClientSettingUserUpdateDto = { value: string }
type CollectionDto = {
  createdDate: string
  filtered: boolean
  id: string
  lastModifiedDate: string
  name: string
  ordered: boolean
  seriesIds: string[]
}
type PageCollectionDto = {
  content?: CollectionDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type CollectionCreationDto = { name: string; ordered: boolean; seriesIds: string[] }
type CollectionUpdateDto = {
  name?: string | undefined
  ordered?: boolean | undefined
  seriesIds?: string[] | undefined
}
type BookMetadataAggregationDto = {
  authors: AuthorDto[]
  created: string
  lastModified: string
  notableEntities: NotableEntityDto[]
  releaseDate?: string | undefined
  summary: string
  summaryNumber: string
  tags: string[]
}
type AlternateTitleDto = { label: string; title: string }
type SeriesMetadataDto = {
  ageRating?: number | undefined
  ageRatingLock: boolean
  alternateTitles: AlternateTitleDto[]
  alternateTitlesLock: boolean
  created: string
  genres: string[]
  genresLock: boolean
  language: string
  languageLock: boolean
  lastModified: string
  links: WebLinkDto[]
  linksLock: boolean
  publisher: string
  publisherLock: boolean
  readingDirection: string
  readingDirectionLock: boolean
  sharingLabels: string[]
  sharingLabelsLock: boolean
  status: string
  statusLock: boolean
  summary: string
  summaryLock: boolean
  tags: string[]
  tagsLock: boolean
  title: string
  titleLock: boolean
  titleSort: string
  titleSortLock: boolean
  totalBookCount?: number | undefined
  totalBookCountLock: boolean
}
type SeriesDto = {
  booksCount: number
  booksInProgressCount: number
  booksMetadata: BookMetadataAggregationDto
  booksReadCount: number
  booksUnreadCount: number
  created: string
  deleted: boolean
  fileLastModified: string
  id: string
  lastModified: string
  libraryId: string
  metadata: SeriesMetadataDto
  name: string
  oneshot: boolean
  url: string
}
type PageSeriesDto = {
  content?: SeriesDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type ThumbnailSeriesCollectionDto = {
  collectionId: string
  fileSize: bigint
  height: number
  id: string
  mediaType: string
  selected: boolean
  type: string
  width: number
}
type DirectoryRequestDto = { path: string; showFiles: boolean }
type PathDto = { name: string; path: string; type: string }
type DirectoryListingDto = { directories: PathDto[]; files: PathDto[]; parent?: string | undefined }
type HistoricalEventDto = {
  bookId?: string | undefined
  id: string
  properties: { [x: string]: string }
  seriesId?: string | undefined
  timestamp: string
  type: string
}
type PageHistoricalEventDto = {
  content?: HistoricalEventDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type LibraryDto = {
  analyzeDimensions: boolean
  convertToCbz: boolean
  emptyTrashAfterScan: boolean
  hashFiles: boolean
  hashKoreader: boolean
  hashPages: boolean
  id: string
  importBarcodeIsbn: boolean
  importComicInfoBook: boolean
  importComicInfoCollection: boolean
  importComicInfoReadList: boolean
  importComicInfoSeries: boolean
  importComicInfoSeriesAppendVolume: boolean
  importEpubBook: boolean
  importEpubSeries: boolean
  importLocalArtwork: boolean
  importMylarSeries: boolean
  name: string
  oneshotsDirectory?: string | undefined
  repairExtensions: boolean
  root: string
  scanCbx: boolean
  scanDirectoryExclusions: string[]
  scanEpub: boolean
  scanForceModifiedTime: boolean
  scanInterval: 'DISABLED' | 'HOURLY' | 'EVERY_6H' | 'EVERY_12H' | 'DAILY' | 'WEEKLY'
  scanOnStartup: boolean
  scanPdf: boolean
  seriesCover: 'FIRST' | 'FIRST_UNREAD_OR_FIRST' | 'FIRST_UNREAD_OR_LAST' | 'LAST'
  unavailable: boolean
}
type LibraryCreationDto = {
  analyzeDimensions: boolean
  convertToCbz: boolean
  emptyTrashAfterScan: boolean
  hashFiles: boolean
  hashKoreader: boolean
  hashPages: boolean
  importBarcodeIsbn: boolean
  importComicInfoBook: boolean
  importComicInfoCollection: boolean
  importComicInfoReadList: boolean
  importComicInfoSeries: boolean
  importComicInfoSeriesAppendVolume: boolean
  importEpubBook: boolean
  importEpubSeries: boolean
  importLocalArtwork: boolean
  importMylarSeries: boolean
  name: string
  oneshotsDirectory?: string | undefined
  repairExtensions: boolean
  root: string
  scanCbx: boolean
  scanDirectoryExclusions: string[]
  scanEpub: boolean
  scanForceModifiedTime: boolean
  scanInterval: 'DISABLED' | 'HOURLY' | 'EVERY_6H' | 'EVERY_12H' | 'DAILY' | 'WEEKLY'
  scanOnStartup: boolean
  scanPdf: boolean
  seriesCover: 'FIRST' | 'FIRST_UNREAD_OR_FIRST' | 'FIRST_UNREAD_OR_LAST' | 'LAST'
}
type LibraryUpdateDto = {
  analyzeDimensions?: boolean | undefined
  convertToCbz?: boolean | undefined
  emptyTrashAfterScan?: boolean | undefined
  hashFiles?: boolean | undefined
  hashKoreader?: boolean | undefined
  hashPages?: boolean | undefined
  importBarcodeIsbn?: boolean | undefined
  importComicInfoBook?: boolean | undefined
  importComicInfoCollection?: boolean | undefined
  importComicInfoReadList?: boolean | undefined
  importComicInfoSeries?: boolean | undefined
  importComicInfoSeriesAppendVolume?: boolean | undefined
  importEpubBook?: boolean | undefined
  importEpubSeries?: boolean | undefined
  importLocalArtwork?: boolean | undefined
  importMylarSeries?: boolean | undefined
  name?: string | undefined
  oneshotsDirectory?: string | undefined
  repairExtensions?: boolean | undefined
  root?: string | undefined
  scanCbx?: boolean | undefined
  scanDirectoryExclusions?: string[] | undefined
  scanEpub?: boolean | undefined
  scanForceModifiedTime?: boolean | undefined
  scanInterval?: 'DISABLED' | 'HOURLY' | 'EVERY_6H' | 'EVERY_12H' | 'DAILY' | 'WEEKLY' | undefined
  scanOnStartup?: boolean | undefined
  scanPdf?: boolean | undefined
  seriesCover?: 'FIRST' | 'FIRST_UNREAD_OR_FIRST' | 'FIRST_UNREAD_OR_LAST' | 'LAST' | undefined
}
type OAuth2ClientDto = { name: string; registrationId: string }
type PageHashKnownDto = {
  action: 'DELETE_AUTO' | 'DELETE_MANUAL' | 'IGNORE'
  created: string
  deleteCount: number
  hash: string
  lastModified: string
  matchCount: number
  size?: bigint | undefined
}
type PagePageHashKnownDto = {
  content?: PageHashKnownDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type PageHashCreationDto = {
  action: 'DELETE_AUTO' | 'DELETE_MANUAL' | 'IGNORE'
  hash: string
  size?: bigint | undefined
}
type PageHashUnknownDto = { hash: string; matchCount: number; size?: bigint | undefined }
type PagePageHashUnknownDto = {
  content?: PageHashUnknownDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type PageHashMatchDto = {
  bookId: string
  fileName: string
  fileSize: bigint
  mediaType: string
  pageNumber: number
  url: string
}
type PagePageHashMatchDto = {
  content?: PageHashMatchDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type PageReadListDto = {
  content?: ReadListDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type ReadListCreationDto = { bookIds: string[]; name: string; ordered: boolean; summary: string }
type ReadListMatchDto = { errorCode: string; name: string }
type ReadListRequestBookMatchBookDto = { bookId: string; number: string; title: string }
type ReadListRequestBookMatchSeriesDto = {
  releaseDate?: string | undefined
  seriesId: string
  title: string
}
type ReadListRequestBookMatchDto = {
  books: ReadListRequestBookMatchBookDto[]
  series: ReadListRequestBookMatchSeriesDto
}
type ReadListRequestBookDto = { number: string; series: string[] }
type ReadListRequestBookMatchesDto = {
  matches: ReadListRequestBookMatchDto[]
  request: ReadListRequestBookDto
}
type ReadListRequestMatchDto = {
  errorCode: string
  readListMatch: ReadListMatchDto
  requests: ReadListRequestBookMatchesDto[]
}
type ReadListUpdateDto = {
  bookIds?: string[] | undefined
  name?: string | undefined
  ordered?: boolean | undefined
  summary?: string | undefined
}
type TachiyomiReadProgressDto = {
  booksCount: number
  booksInProgressCount: number
  booksReadCount: number
  booksUnreadCount: number
  lastReadContinuousIndex: number
}
type TachiyomiReadProgressUpdateDto = { lastBookRead: number }
type ThumbnailReadListDto = {
  fileSize: bigint
  height: number
  id: string
  mediaType: string
  readListId: string
  selected: boolean
  type: string
  width: number
}
type ReleaseDto = {
  description: string
  latest: boolean
  preRelease: boolean
  releaseDate: string
  url: string
  version: string
}
type GroupCountDto = { count: number; group: string }
type SearchConditionAnyOfSeries = { anyOf: SearchConditionSeries[] }
type SearchConditionAllOfSeries = { allOf: SearchConditionSeries[] }
type SearchConditionCollectionId = { collectionId: SearchOperatorEqualityString }
type SearchConditionComplete = { complete: SearchOperatorBoolean }
type SearchConditionTitleSort = { titleSort: SearchOperatorString }
type SearchConditionSharingLabel = { sharingLabel: SearchOperatorEqualityNullableString }
type SearchConditionPublisher = { publisher: SearchOperatorEqualityString }
type SearchConditionLanguage = { language: SearchOperatorEqualityString }
type SearchConditionGenre = { genre: SearchOperatorEqualityNullableString }
type SearchOperatorNumericNullableInteger =
  | SearchOperatorGreaterThan
  | SearchOperatorLessThan
  | SearchOperatorIsNullT
  | SearchOperatorIsNotNullT
  | SearchOperatorIs
  | SearchOperatorIsNot
type SearchConditionAgeRating = { ageRating: SearchOperatorNumericNullableInteger }
type SearchConditionSeriesStatus = { seriesStatus: SearchOperatorEqualityStatus }
type SearchConditionSeries =
  | SearchConditionAnyOfSeries
  | SearchConditionAllOfSeries
  | SearchConditionLibraryId
  | SearchConditionCollectionId
  | SearchConditionDeleted
  | SearchConditionComplete
  | SearchConditionOneShot
  | SearchConditionTitle
  | SearchConditionTitleSort
  | SearchConditionReleaseDate
  | SearchConditionTag
  | SearchConditionSharingLabel
  | SearchConditionPublisher
  | SearchConditionLanguage
  | SearchConditionGenre
  | SearchConditionAgeRating
  | SearchConditionReadStatus
  | SearchConditionSeriesStatus
  | SearchConditionAuthor
  | SearchConditionNotableEntity
type SeriesSearch = {
  condition?: SearchConditionSeries | undefined
  fullTextSearch?: string | undefined
}
type AlternateTitleUpdateDto = { label: string; title: string }
type SeriesMetadataUpdateDto = {
  ageRating?: number | undefined
  ageRatingLock?: boolean | undefined
  alternateTitles?: AlternateTitleUpdateDto[] | undefined
  alternateTitlesLock?: boolean | undefined
  genres?: string[] | undefined
  genresLock?: boolean | undefined
  language?: string | undefined
  languageLock?: boolean | undefined
  links?: WebLinkUpdateDto[] | undefined
  linksLock?: boolean | undefined
  publisher?: string | undefined
  publisherLock?: boolean | undefined
  readingDirection?: 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT' | 'VERTICAL' | 'WEBTOON' | undefined
  readingDirectionLock?: boolean | undefined
  sharingLabels?: string[] | undefined
  sharingLabelsLock?: boolean | undefined
  status?: 'ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS' | undefined
  statusLock?: boolean | undefined
  summary?: string | undefined
  summaryLock?: boolean | undefined
  tags?: string[] | undefined
  tagsLock?: boolean | undefined
  title?: string | undefined
  titleLock?: boolean | undefined
  titleSort?: string | undefined
  titleSortLock?: boolean | undefined
  totalBookCount?: number | undefined
  totalBookCountLock?: boolean | undefined
}
type ThumbnailSeriesDto = {
  fileSize: bigint
  height: number
  id: string
  mediaType: string
  selected: boolean
  seriesId: string
  type: string
  width: number
}
type SettingMultiSourceString = {
  configurationSource?: string | undefined
  databaseSource?: string | undefined
  effectiveValue?: string | undefined
}
type SettingMultiSourceInteger = {
  configurationSource?: number | undefined
  databaseSource?: number | undefined
  effectiveValue?: number | undefined
}
type SettingsDto = {
  deleteEmptyCollections?: boolean | undefined
  deleteEmptyReadLists?: boolean | undefined
  kepubifyPath?: SettingMultiSourceString | undefined
  koboPort?: number | undefined
  koboProxy?: boolean | undefined
  maxUploadFileSizeBytes?: bigint | undefined
  nextUiAsDefault?: boolean | undefined
  rememberMeDurationDays?: bigint | undefined
  serverContextPath?: SettingMultiSourceString | undefined
  serverPort?: SettingMultiSourceInteger | undefined
  taskPoolSize?: number | undefined
  thumbnailSize?: 'DEFAULT' | 'MEDIUM' | 'LARGE' | 'XLARGE' | undefined
}
type SettingsUpdateDto = {
  deleteEmptyCollections?: boolean | undefined
  deleteEmptyReadLists?: boolean | undefined
  kepubifyPath?: string | undefined
  koboPort?: number | undefined
  koboProxy?: boolean | undefined
  nextUiAsDefault?: boolean | undefined
  rememberMeDurationDays?: bigint | undefined
  renewRememberMeKey?: boolean | undefined
  serverContextPath?: string | undefined
  serverPort?: number | undefined
  taskPoolSize?: number | undefined
  thumbnailSize?: 'DEFAULT' | 'MEDIUM' | 'LARGE' | 'XLARGE' | undefined
}
type ScanRequestDto = { path: string }
type TransientBookDto = {
  comment: string
  fileLastModified: string
  files: string[]
  id: string
  mediaType: string
  name: string
  number?: number | undefined
  pages: PageDto[]
  seriesId?: string | undefined
  size: string
  sizeBytes: bigint
  status: string
  url: string
}
type PageInteger = {
  content?: number[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type PageAuthorDto = {
  content?: AuthorDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type PageString = {
  content?: string[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type TachiyomiReadProgressV2Dto = {
  booksCount: number
  booksInProgressCount: number
  booksReadCount: number
  booksUnreadCount: number
  lastReadContinuousNumberSort: number
  maxNumberSort: number
}
type TachiyomiReadProgressUpdateV2Dto = { lastBookNumberSortRead: number }
type AgeRestrictionUpdateDto = { age: number; restriction: 'ALLOW_ONLY' | 'EXCLUDE' | 'NONE' }
type SharedLibrariesUpdateDto = { all: boolean; libraryIds: string[] }
type UserCreationDto = {
  ageRestriction?: AgeRestrictionUpdateDto | undefined
  email: string
  labelsAllow?: string[] | undefined
  labelsExclude?: string[] | undefined
  password: string
  roles: string[]
  sharedLibraries?: SharedLibrariesUpdateDto | undefined
}
type AuthenticationActivityDto = {
  apiKeyComment?: string | undefined
  apiKeyId?: string | undefined
  dateTime: string
  email?: string | undefined
  error?: string | undefined
  ip?: string | undefined
  source?: string | undefined
  success: boolean
  userAgent?: string | undefined
  userId?: string | undefined
}
type PageAuthenticationActivityDto = {
  content?: AuthenticationActivityDto[] | undefined
  empty?: boolean | undefined
  first?: boolean | undefined
  last?: boolean | undefined
  number?: number | undefined
  numberOfElements?: number | undefined
  pageable?: PageableObject | undefined
  size?: number | undefined
  sort?: SortObject | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type ApiKeyDto = {
  comment: string
  createdDate: string
  id: string
  key: string
  lastModifiedDate: string
  userId: string
}
type ApiKeyRequestDto = { comment: string }
type PasswordUpdateDto = { password: string }
type UserUpdateDto = {
  ageRestriction?: AgeRestrictionUpdateDto | undefined
  labelsAllow?: string[] | undefined
  labelsExclude?: string[] | undefined
  roles?: string[] | undefined
  sharedLibraries?: SharedLibrariesUpdateDto | undefined
}
type PageResponseNotableEntityDto = {
  content: NotableEntityDto[]
  first: boolean
  last: boolean
  page: number
  size: number
  totalElements: bigint
  totalPages: number
}
type PageResponseString = {
  content: string[]
  first: boolean
  last: boolean
  page: number
  size: number
  totalElements: bigint
  totalPages: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actuator/info': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/logout': {
      $get: { input: {}; output: {}; outputFormat: string; status: 204 }
      $post: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/age-ratings': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/announcements': {
      $get:
        | { input: {}; output: JsonFeedDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
      $put:
        | { input: { json: string[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: string[] }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/authors': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string | undefined
                collection_id?: string | undefined
                series_id?: string | undefined
              }
            }
            output: AuthorDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string | undefined
                collection_id?: string | undefined
                series_id?: string | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/authors/names': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/authors/roles': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/books': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                media_status?:
                  | ('UNKNOWN' | 'ERROR' | 'READY' | 'UNSUPPORTED' | 'OUTDATED')[]
                  | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                released_after?: string | undefined
                tag?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                media_status?:
                  | ('UNKNOWN' | 'ERROR' | 'READY' | 'UNSUPPORTED' | 'OUTDATED')[]
                  | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                released_after?: string | undefined
                tag?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/duplicates': {
      $get:
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/import': {
      $post:
        | { input: { json: BookImportBatchDto }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: BookImportBatchDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/latest': {
      $get:
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/list': {
      $post:
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            } & { json: BookSearch }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            } & { json: BookSearch }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/metadata': {
      $patch:
        | {
            input: { json: { [x: string]: BookMetadataUpdateDto } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { [x: string]: BookMetadataUpdateDto } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/ondeck': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/thumbnails': {
      $put:
        | {
            input: { query: { for_bigger_result_only?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { for_bigger_result_only?: boolean | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: BookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/analyze': {
      $post:
        | { input: { param: { bookId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/file': {
      $delete:
        | { input: { param: { bookId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { bookId: string } }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: StreamingResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/file/*': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: StreamingResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/manifest': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/manifest/divina': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/manifest/epub': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/manifest/pdf': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: WPPublicationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/metadata': {
      $patch:
        | {
            input: { param: { bookId: string } } & { json: BookMetadataUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bookId: string } } & { json: BookMetadataUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/metadata/refresh': {
      $post:
        | { input: { param: { bookId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/next': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: BookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/pages': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: PageDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/pages/:pageNumber': {
      $get:
        | {
            input: { param: { bookId: string; pageNumber: number } } & {
              query: {
                convert?: 'jpeg' | 'png' | undefined
                zero_based?: boolean | undefined
                contentNegotiation?: boolean | undefined
              }
            } & { header: { Accept?: MediaType[] | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bookId: string; pageNumber: number } } & {
              query: {
                convert?: 'jpeg' | 'png' | undefined
                zero_based?: boolean | undefined
                contentNegotiation?: boolean | undefined
              }
            } & { header: { Accept?: MediaType[] | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/books/:bookId/pages/:pageNumber/raw': {
      $get:
        | {
            input: { param: { bookId: string; pageNumber: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bookId: string; pageNumber: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string; pageNumber: number } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/pages/:pageNumber/thumbnail': {
      $get:
        | {
            input: { param: { bookId: string; pageNumber: number } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bookId: string; pageNumber: number } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string; pageNumber: number } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/books/:bookId/positions': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: R2Positions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: R2Positions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/previous': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: BookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/progression': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: R2Progression
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: R2Progression
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { bookId: string } } & { json: R2Progression }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bookId: string } } & { json: R2Progression }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/read-progress': {
      $delete:
        | { input: { param: { bookId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { param: { bookId: string } } & { json: ReadProgressUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bookId: string } } & { json: ReadProgressUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/readlists': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: ReadListDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/resource/:resource': {
      $get:
        | {
            input: { param: { bookId: string; resource: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { bookId: string; resource: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string; resource: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/thumbnail': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { bookId: string } }; output: File; outputFormat: 'json'; status: 200 }
        | { input: { param: { bookId: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/books/:bookId/thumbnails': {
      $get:
        | {
            input: { param: { bookId: string } }
            output: ThumbnailBookDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { bookId: string } } & { query: { selected?: boolean | undefined } } & {
              form: { file: File }
            }
            output: ThumbnailBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string } } & { query: { selected?: boolean | undefined } } & {
              form: { file: File }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/books/:bookId/thumbnails/:thumbnailId': {
      $delete:
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/books/:bookId/thumbnails/:thumbnailId/selected': {
      $put:
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { bookId: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/claim': {
      $get:
        | { input: {}; output: ClaimStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
      $post:
        | {
            input: { header: { 'X-Komga-Email': string; 'X-Komga-Password': string } }
            output: UserDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Komga-Email': string; 'X-Komga-Password': string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/client-settings/global': {
      $delete:
        | { input: { json: string[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: string[] }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { json: { [x: string]: ClientSettingGlobalUpdateDto } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { [x: string]: ClientSettingGlobalUpdateDto } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/client-settings/global/list': {
      $get:
        | {
            input: {}
            output: { [x: string]: ClientSettingDto }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/client-settings/user': {
      $delete:
        | { input: { json: string[] }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: string[] }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { json: { [x: string]: ClientSettingUserUpdateDto } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { [x: string]: ClientSettingUserUpdateDto } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/client-settings/user/list': {
      $get:
        | {
            input: {}
            output: { [x: string]: ClientSettingDto }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/collections': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageCollectionDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { json: CollectionCreationDto }
            output: CollectionDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CollectionCreationDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/collections/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { id: string } }
            output: CollectionDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: CollectionUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: CollectionUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/collections/:id/series': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                library_id?: string[] | undefined
                status?: ('ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS')[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                publisher?: string[] | undefined
                language?: string[] | undefined
                genre?: string[] | undefined
                tag?: string[] | undefined
                age_rating?: string[] | undefined
                release_year?: string[] | undefined
                deleted?: boolean | undefined
                complete?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                author?: string[] | undefined
              }
            }
            output: PageSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                library_id?: string[] | undefined
                status?: ('ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS')[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                publisher?: string[] | undefined
                language?: string[] | undefined
                genre?: string[] | undefined
                tag?: string[] | undefined
                age_rating?: string[] | undefined
                release_year?: string[] | undefined
                deleted?: boolean | undefined
                complete?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                author?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/collections/:id/thumbnail': {
      $get:
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: File; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/collections/:id/thumbnails': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThumbnailSeriesCollectionDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { selected?: boolean | undefined } } & {
              form: { file: File }
            }
            output: ThumbnailSeriesCollectionDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { selected?: boolean | undefined } } & {
              form: { file: File }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/collections/:id/thumbnails/:thumbnailId': {
      $delete:
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/collections/:id/thumbnails/:thumbnailId/selected': {
      $put:
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/filesystem': {
      $post:
        | {
            input: { json: DirectoryRequestDto }
            output: DirectoryListingDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DirectoryRequestDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/fonts/families': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/fonts/resource/:fontFamily/css': {
      $get:
        | {
            input: { param: { fontFamily: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fontFamily: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { fontFamily: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/fonts/resource/:fontFamily/:fontFile': {
      $get:
        | {
            input: { param: { fontFamily: string; fontFile: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fontFamily: string; fontFile: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/genres': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/history': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageHistoricalEventDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/languages': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/libraries': {
      $get:
        | { input: {}; output: LibraryDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
      $post:
        | {
            input: { json: LibraryCreationDto }
            output: LibraryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LibraryCreationDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/libraries/:libraryId': {
      $delete:
        | { input: { param: { libraryId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { libraryId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { libraryId: string } }
            output: LibraryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { libraryId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { param: { libraryId: string } } & { json: LibraryUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { libraryId: string } } & { json: LibraryUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { libraryId: string } } & { json: LibraryUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { libraryId: string } } & { json: LibraryUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/libraries/:libraryId/analyze': {
      $post:
        | { input: { param: { libraryId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { libraryId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/libraries/:libraryId/empty-trash': {
      $post:
        | { input: { param: { libraryId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { libraryId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/libraries/:libraryId/metadata/refresh': {
      $post:
        | { input: { param: { libraryId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { libraryId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/libraries/:libraryId/scan': {
      $post:
        | {
            input: { param: { libraryId: string } } & { query: { deep?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { libraryId: string } } & { query: { deep?: boolean | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/login/set-cookie': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/oauth2/providers': {
      $get:
        | { input: {}; output: OAuth2ClientDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/page-hashes': {
      $get:
        | {
            input: {
              query: {
                action?: ('DELETE_AUTO' | 'DELETE_MANUAL' | 'IGNORE')[] | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PagePageHashKnownDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action?: ('DELETE_AUTO' | 'DELETE_MANUAL' | 'IGNORE')[] | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $put:
        | { input: { json: PageHashCreationDto }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: PageHashCreationDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/page-hashes/unknown': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PagePageHashUnknownDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/page-hashes/unknown/:pageHash/thumbnail': {
      $get:
        | {
            input: { param: { pageHash: string } } & { query: { resize?: number | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { pageHash: string } } & { query: { resize?: number | undefined } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageHash: string } } & { query: { resize?: number | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/page-hashes/:pageHash': {
      $get:
        | {
            input: { param: { pageHash: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PagePageHashMatchDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageHash: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/page-hashes/:pageHash/delete-all': {
      $post:
        | { input: { param: { pageHash: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { pageHash: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/page-hashes/:pageHash/delete-match': {
      $post:
        | {
            input: { param: { pageHash: string } } & { json: PageHashMatchDto }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { pageHash: string } } & { json: PageHashMatchDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/page-hashes/:pageHash/thumbnail': {
      $get:
        | {
            input: { param: { pageHash: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { pageHash: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pageHash: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/publishers': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageReadListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { json: ReadListCreationDto }
            output: ReadListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReadListCreationDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/match/comicrack': {
      $post:
        | {
            input: { form: { file: File } }
            output: ReadListRequestMatchDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file: File } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ReadListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ReadListUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: ReadListUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/books': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                library_id?: string[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                tag?: string[] | undefined
                media_status?:
                  | ('UNKNOWN' | 'ERROR' | 'READY' | 'UNSUPPORTED' | 'OUTDATED')[]
                  | undefined
                deleted?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                author?: string[] | undefined
              }
            }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                library_id?: string[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                tag?: string[] | undefined
                media_status?:
                  | ('UNKNOWN' | 'ERROR' | 'READY' | 'UNSUPPORTED' | 'OUTDATED')[]
                  | undefined
                deleted?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                author?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/books/:bookId/next': {
      $get:
        | {
            input: { param: { id: string; bookId: string } }
            output: BookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/books/:bookId/previous': {
      $get:
        | {
            input: { param: { id: string; bookId: string } }
            output: BookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; bookId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/file': {
      $get:
        | {
            input: { param: { id: string } }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: StreamingResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/read-progress/tachiyomi': {
      $get:
        | {
            input: { param: { id: string } }
            output: TachiyomiReadProgressDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { id: string } } & { json: TachiyomiReadProgressUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: TachiyomiReadProgressUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/thumbnail': {
      $get:
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { id: string } }; output: File; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/readlists/:id/thumbnails': {
      $get:
        | {
            input: { param: { id: string } }
            output: ThumbnailReadListDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { selected?: boolean | undefined } } & {
              form: { file: File }
            }
            output: ThumbnailReadListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { selected?: boolean | undefined } } & {
              form: { file: File }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/readlists/:id/thumbnails/:thumbnailId': {
      $delete:
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/readlists/:id/thumbnails/:thumbnailId/selected': {
      $put:
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/releases': {
      $get:
        | { input: {}; output: ReleaseDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/series': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                status?: ('ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS')[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                publisher?: string[] | undefined
                language?: string[] | undefined
                genre?: string[] | undefined
                tag?: string[] | undefined
                age_rating?: string[] | undefined
                release_year?: string[] | undefined
                sharing_label?: string[] | undefined
                deleted?: boolean | undefined
                complete?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                search_regex?: string | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
                author?: string[] | undefined
              }
            }
            output: PageSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                status?: ('ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS')[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                publisher?: string[] | undefined
                language?: string[] | undefined
                genre?: string[] | undefined
                tag?: string[] | undefined
                age_rating?: string[] | undefined
                release_year?: string[] | undefined
                sharing_label?: string[] | undefined
                deleted?: boolean | undefined
                complete?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                search_regex?: string | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
                author?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/alphabetical-groups': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                status?: ('ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS')[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                publisher?: string[] | undefined
                language?: string[] | undefined
                genre?: string[] | undefined
                tag?: string[] | undefined
                age_rating?: string[] | undefined
                release_year?: string[] | undefined
                sharing_label?: string[] | undefined
                deleted?: boolean | undefined
                complete?: boolean | undefined
                oneshot?: boolean | undefined
                search_regex?: string | undefined
                author?: string[] | undefined
              }
            }
            output: GroupCountDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                status?: ('ENDED' | 'ONGOING' | 'ABANDONED' | 'HIATUS')[] | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                publisher?: string[] | undefined
                language?: string[] | undefined
                genre?: string[] | undefined
                tag?: string[] | undefined
                age_rating?: string[] | undefined
                release_year?: string[] | undefined
                sharing_label?: string[] | undefined
                deleted?: boolean | undefined
                complete?: boolean | undefined
                oneshot?: boolean | undefined
                search_regex?: string | undefined
                author?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/latest': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                deleted?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                deleted?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/list': {
      $post:
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            } & { json: SeriesSearch }
            output: PageSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            } & { json: SeriesSearch }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/list/alphabetical-groups': {
      $post:
        | {
            input: { json: SeriesSearch }
            output: GroupCountDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SeriesSearch }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/new': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                deleted?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                deleted?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/release-dates': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/updated': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                deleted?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                deleted?: boolean | undefined
                oneshot?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId': {
      $get:
        | {
            input: { param: { seriesId: string } }
            output: SeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/analyze': {
      $post:
        | { input: { param: { seriesId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/books': {
      $get:
        | {
            input: { param: { seriesId: string } } & {
              query: {
                media_status?:
                  | ('UNKNOWN' | 'ERROR' | 'READY' | 'UNSUPPORTED' | 'OUTDATED')[]
                  | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                tag?: string[] | undefined
                deleted?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
                author?: string[] | undefined
              }
            }
            output: PageBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: {
                media_status?:
                  | ('UNKNOWN' | 'ERROR' | 'READY' | 'UNSUPPORTED' | 'OUTDATED')[]
                  | undefined
                read_status?: ('UNREAD' | 'READ' | 'IN_PROGRESS')[] | undefined
                tag?: string[] | undefined
                deleted?: boolean | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
                author?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/collections': {
      $get:
        | {
            input: { param: { seriesId: string } }
            output: CollectionDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/file': {
      $delete:
        | { input: { param: { seriesId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { seriesId: string } }
            output: StreamingResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: StreamingResponseBody
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/metadata': {
      $patch:
        | {
            input: { param: { seriesId: string } } & { json: SeriesMetadataUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { seriesId: string } } & { json: SeriesMetadataUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/metadata/refresh': {
      $post:
        | { input: { param: { seriesId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/read-progress': {
      $delete:
        | { input: { param: { seriesId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | { input: { param: { seriesId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/thumbnail': {
      $get:
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { seriesId: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/series/:seriesId/thumbnails': {
      $get:
        | {
            input: { param: { seriesId: string } }
            output: ThumbnailSeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { param: { seriesId: string } } & {
              query: { selected?: boolean | undefined }
            } & { form: { file: File } }
            output: ThumbnailSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } } & {
              query: { selected?: boolean | undefined }
            } & { form: { file: File } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/series/:seriesId/thumbnails/:thumbnailId': {
      $delete:
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $get:
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/series/:seriesId/thumbnails/:thumbnailId/selected': {
      $put:
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { seriesId: string; thumbnailId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/settings': {
      $get:
        | { input: {}; output: SettingsDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
      $patch:
        | { input: { json: SettingsUpdateDto }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: SettingsUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/sharing-labels': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/syncpoints/me': {
      $delete:
        | {
            input: { query: { key_id?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { key_id?: string[] | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/tags': {
      $get:
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string[] | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/tags/book': {
      $get:
        | {
            input: {
              query: {
                series_id?: string | undefined
                readlist_id?: string | undefined
                library_id?: string[] | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                series_id?: string | undefined
                readlist_id?: string | undefined
                library_id?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/tags/series': {
      $get:
        | {
            input: {
              query: { library_id?: string | undefined; collection_id?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { library_id?: string | undefined; collection_id?: string | undefined }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/tasks': {
      $delete:
        | { input: {}; output: number; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/api/v1/transient-books': {
      $post:
        | {
            input: { json: ScanRequestDto }
            output: TransientBookDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScanRequestDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/transient-books/:id/analyze': {
      $post:
        | {
            input: { param: { id: string } }
            output: TransientBookDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v1/transient-books/:id/pages/:pageNumber': {
      $get:
        | {
            input: { param: { id: string; pageNumber: number } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; pageNumber: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; pageNumber: number } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/age-ratings': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageInteger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/authors': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                role?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageAuthorDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                role?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/authors/names': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                role?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                role?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/authors/roles': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/genres': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/languages': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/publishers': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/series/release-years': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/series/:seriesId/read-progress/tachiyomi': {
      $get:
        | {
            input: { param: { seriesId: string } }
            output: TachiyomiReadProgressV2Dto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $put:
        | {
            input: { param: { seriesId: string } } & { json: TachiyomiReadProgressUpdateV2Dto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { seriesId: string } } & { json: TachiyomiReadProgressUpdateV2Dto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/sharing-labels': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/tags': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                include?: 'SERIES' | 'BOOK' | 'BOTH' | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                include?: 'SERIES' | 'BOOK' | 'BOTH' | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users': {
      $get:
        | { input: {}; output: UserDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
      $post:
        | { input: { json: UserCreationDto }; output: UserDto; outputFormat: 'json'; status: 201 }
        | {
            input: { json: UserCreationDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/authentication-activity': {
      $get:
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageAuthenticationActivityDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/me': {
      $get:
        | {
            input: { query: { 'remember-me'?: boolean | undefined } }
            output: UserDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'remember-me'?: boolean | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/me/api-keys': {
      $get:
        | { input: {}; output: ApiKeyDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'text'; status: 400 }
      $post:
        | {
            input: { json: ApiKeyRequestDto }
            output: ApiKeyDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiKeyRequestDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/me/api-keys/:keyId': {
      $delete:
        | { input: { param: { keyId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { keyId: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/me/authentication-activity': {
      $get:
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: PageAuthenticationActivityDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/me/password': {
      $patch:
        | { input: { json: PasswordUpdateDto }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: PasswordUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UserUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UserUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/:id/authentication-activity/latest': {
      $get:
        | {
            input: { param: { id: string } } & { query: { apikey_id?: string | undefined } }
            output: AuthenticationActivityDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { apikey_id?: string | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v2/users/:id/password': {
      $patch:
        | {
            input: { param: { id: string } } & { json: PasswordUpdateDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: PasswordUpdateDto }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v3/notable-entities': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                kind?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageResponseNotableEntityDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                kind?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v3/notable-entities/kinds': {
      $get:
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageResponseString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/api/v3/notable-entities/names': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                kind?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: PageResponseString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                kind?: string | undefined
                library_id?: string[] | undefined
                collection_id?: string[] | undefined
                series_id?: string[] | undefined
                readlist_id?: string[] | undefined
                unpaged?: boolean | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'text'
            status: 400
          }
    }
  },
  '/'
>
export default routes
