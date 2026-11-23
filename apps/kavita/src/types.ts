type ThemeProvider = 1 | 2
type SiteThemeDto = {
  id?: number | undefined
  name: string | null
  normalizedName: string | null
  fileName: string | null
  isDefault?: boolean | undefined
  provider?: ThemeProvider | undefined
  previewUrls?: (string[] | null) | undefined
  description?: (string | null) | undefined
  author?: (string | null) | undefined
  compatibleVersion?: (string | null) | undefined
  selector?: (string | null) | undefined
}
type PageLayoutMode = 0 | 1
type KeyBind = {
  key: string | null
  control?: boolean | undefined
  shift?: boolean | undefined
  meta?: boolean | undefined
  alt?: boolean | undefined
  controllerSequence?: (string[] | null) | undefined
}
type RgbaColor = {
  r?: number | undefined
  g?: number | undefined
  b?: number | undefined
  a?: number | undefined
}
type HighlightSlot = {
  id?: number | undefined
  slotNumber?: number | undefined
  color?: RgbaColor | undefined
}
type AgeRating = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1
type AppUserSocialPreferences = {
  shareReviews?: boolean | undefined
  shareAnnotations?: boolean | undefined
  viewOtherAnnotations?: boolean | undefined
  socialLibraries?: (number[] | null) | undefined
  socialMaxAgeRating?: AgeRating | undefined
  socialIncludeUnknowns?: boolean | undefined
  shareProfile?: boolean | undefined
}
type AppUserOpdsPreferences = {
  embedProgressIndicator?: boolean | undefined
  includeContinueFrom?: boolean | undefined
}
type AppUserKoboSyncPreferences = {
  syncItemLimit?: number | undefined
  forwardToKoboStore?: boolean | undefined
  librarySyncEnabled?: boolean | undefined
  syncLibraries?: (number[] | null) | undefined
  readingListSyncEnabled?: boolean | undefined
  syncReadingLists?: (number[] | null) | undefined
  collectionSyncEnabled?: boolean | undefined
  syncCollections?: (number[] | null) | undefined
  managedCollection?: number | undefined
  hasManagedCollection?: boolean | undefined
}
type UserPreferencesDto = {
  theme: SiteThemeDto
  globalPageLayoutMode?: PageLayoutMode | undefined
  blurUnreadSummaries: boolean
  promptForDownloadSize: boolean
  noTransitions: boolean
  collapseSeriesRelationships: boolean
  locale: string
  colorScapeEnabled: boolean
  dataSaver: boolean
  promptForRereadsAfter: number
  onDeckProgressDays: number
  onDeckUpdateDays: number
  customKeyBinds: {
    NavigateToSettings?: KeyBind[] | undefined
    OpenSearch?: KeyBind[] | undefined
    NavigateToScrobbling?: KeyBind[] | undefined
    ToggleFullScreen?: KeyBind[] | undefined
    BookmarkPage?: KeyBind[] | undefined
    OpenHelp?: KeyBind[] | undefined
    GoTo?: KeyBind[] | undefined
    ToggleMenu?: KeyBind[] | undefined
    PageLeft?: KeyBind[] | undefined
    PageRight?: KeyBind[] | undefined
    Escape?: KeyBind[] | undefined
    PageUp?: KeyBind[] | undefined
    PageDown?: KeyBind[] | undefined
    OffsetDoublePage?: KeyBind[] | undefined
    NextChapter?: KeyBind[] | undefined
    PreviousChapter?: KeyBind[] | undefined
    FirstPage?: KeyBind[] | undefined
    LastPage?: KeyBind[] | undefined
    NavigateHome?: KeyBind[] | undefined
    OpenEventWidget?: KeyBind[] | undefined
  }
  aniListScrobblingEnabled?: boolean | undefined
  wantToReadSync?: boolean | undefined
  bookReaderHighlightSlots: HighlightSlot[]
  socialPreferences: AppUserSocialPreferences
  opdsPreferences: AppUserOpdsPreferences
  koboSyncPreferences: AppUserKoboSyncPreferences
}
type AgeRestrictionDto = { ageRating: AgeRating; includeUnknowns: boolean }
type IdentityProvider = 0 | 1
type AuthKeyProvider = 0 | 1
type AuthKeyDto = {
  id?: number | undefined
  key: string | null
  name: string | null
  createdAtUtc?: string | undefined
  expiresAtUtc?: (string | null) | undefined
  lastAccessedAtUtc?: (string | null) | undefined
  provider?: AuthKeyProvider | undefined
}
type UserDto = {
  id?: number | undefined
  oidcId?: (string | null) | undefined
  username?: (string | null) | undefined
  email?: (string | null) | undefined
  roles?: (string[] | null) | undefined
  token?: (string | null) | undefined
  refreshToken?: (string | null) | undefined
  apiKey?: (string | null) | undefined
  preferences?: UserPreferencesDto | undefined
  ageRestriction?: AgeRestrictionDto | undefined
  kavitaVersion?: (string | null) | undefined
  identityProvider?: IdentityProvider | undefined
  created?: string | undefined
  createdUtc?: string | undefined
  authKeys?: (AuthKeyDto[] | null) | undefined
  hasCoverImage?: boolean | undefined
}
type ResetPasswordDto = {
  userName: string
  password: string
  oldPassword?: (string | null) | undefined
}
type RegisterDto = { username: string; email?: (string | null) | undefined; password: string }
type LoginDto = {
  username?: (string | null) | undefined
  password?: (string | null) | undefined
  apiKey?: (string | null) | undefined
}
type TokenRequestDto = {
  token?: (string | null) | undefined
  refreshToken?: (string | null) | undefined
}
type UpdateUsernameRequestDto = { username: string | null }
type InviteUserResponse = {
  emailLink?: (string | null) | undefined
  emailSent?: boolean | undefined
  invalidEmail?: boolean | undefined
}
type UpdateEmailDto = {
  email?: (string | null) | undefined
  password?: (string | null) | undefined
}
type UpdateAgeRestrictionDto = { ageRating: AgeRating; includeUnknowns: boolean }
type UpdateUserDto = {
  userId?: number | undefined
  username?: (string | null) | undefined
  roles?: (string[] | null) | undefined
  libraries?: (number[] | null) | undefined
  ageRestriction?: AgeRestrictionDto | undefined
  email?: (string | null) | undefined
  identityProvider?: IdentityProvider | undefined
}
type InviteUserDto = {
  email: string
  roles?: (string[] | null) | undefined
  libraries?: (number[] | null) | undefined
  ageRestriction?: AgeRestrictionDto | undefined
}
type ConfirmEmailDto = { email: string; token: string; password: string; username: string }
type ConfirmEmailUpdateDto = { email: string; token: string }
type ConfirmPasswordResetDto = { email: string; token: string; password: string }
type ConfirmMigrationEmailDto = {
  email?: (string | null) | undefined
  token?: (string | null) | undefined
}
type RotateAuthKeyRequestDto = {
  keyLength: number
  name: string
  expiresUtc?: (string | null) | undefined
}
type AuthenticationType = 0 | 1 | 2 | 3 | 4
type ClientDeviceType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type ClientDevicePlatform = 0 | 1 | 2 | 3 | 4 | 5
type ClientInfoDto = {
  userAgent?: (string | null) | undefined
  ipAddress?: (string | null) | undefined
  authType?: AuthenticationType | undefined
  clientType?: ClientDeviceType | undefined
  appVersion?: (string | null) | undefined
  browser?: (string | null) | undefined
  browserVersion?: (string | null) | undefined
  platform?: ClientDevicePlatform | undefined
  deviceType?: (string | null) | undefined
  screenWidth?: (number | null) | undefined
  screenHeight?: (number | null) | undefined
  orientation?: (string | null) | undefined
}
type ReadingActivityDataDto = {
  chapterId?: number | undefined
  volumeId?: number | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  startPage?: number | undefined
  endPage?: number | undefined
  startTimeUtc?: string | undefined
  endTimeUtc?: (string | null) | undefined
  pagesRead?: number | undefined
  wordsRead?: number | undefined
  totalPages?: number | undefined
  totalWords?: number | undefined
  libraryName?: (string | null) | undefined
  seriesName?: (string | null) | undefined
  chapterTitle?: (string | null) | undefined
  clientInfo?: ClientInfoDto | undefined
}
type ReadingSessionDto = {
  id?: number | undefined
  startTimeUtc?: string | undefined
  endTimeUtc?: (string | null) | undefined
  isActive?: boolean | undefined
  activityData?: (ReadingActivityDataDto[] | null) | undefined
  userId?: number | undefined
  username?: (string | null) | undefined
}
type FilterComparison =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
type AnnotationFilterField = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type AnnotationFilterStatementDto = {
  comparison?: FilterComparison | undefined
  field?: AnnotationFilterField | undefined
  value?: (string | null) | undefined
}
type FilterCombination = 0 | 1
type AnnotationSortField = 1 | 2 | 3 | 4
type AnnotationSortOptionDto = {
  sortField?: AnnotationSortField | undefined
  isAscending?: boolean | undefined
}
type FilterEntityType = 0 | 1 | 2 | 3
type AnnotationFilterDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  statements?: (AnnotationFilterStatementDto[] | null) | undefined
  combination?: FilterCombination | undefined
  sortOptions?: AnnotationSortOptionDto | undefined
  entityType?: FilterEntityType | undefined
  limitTo?: number | undefined
}
type AnnotationDto = {
  id?: number | undefined
  xPath: string | null
  endingXPath?: (string | null) | undefined
  selectedText?: (string | null) | undefined
  comment?: (string | null) | undefined
  commentHtml?: (string | null) | undefined
  commentPlainText?: (string | null) | undefined
  chapterTitle?: (string | null) | undefined
  context?: (string | null) | undefined
  highlightCount?: number | undefined
  containsSpoiler?: boolean | undefined
  pageNumber?: number | undefined
  selectedSlotIndex?: number | undefined
  likes?: (number[] | null) | undefined
  seriesName?: (string | null) | undefined
  libraryName?: (string | null) | undefined
  chapterId: number
  volumeId: number
  seriesId: number
  libraryId: number
  ownerUserId: number
  ownerUsername?: (string | null) | undefined
  ageRating?: AgeRating | undefined
  createdUtc?: string | undefined
  lastModifiedUtc?: string | undefined
}
type MangaFormat = 0 | 1 | 2 | 3 | 4
type PublicationStatus = 0 | 1 | 2 | 3 | 4
type BookInfoDto = {
  bookTitle?: (string | null) | undefined
  seriesId?: number | undefined
  volumeId?: number | undefined
  seriesFormat?: MangaFormat | undefined
  seriesName?: (string | null) | undefined
  chapterNumber?: (string | null) | undefined
  volumeNumber?: (string | null) | undefined
  libraryId?: number | undefined
  pages?: number | undefined
  isSpecial?: boolean | undefined
  chapterTitle?: (string | null) | undefined
  seriesPublicationStatus?: PublicationStatus | undefined
}
type BookChapterItem = {
  title?: (string | null) | undefined
  part?: (string | null) | undefined
  page?: number | undefined
  children?: (BookChapterItem[] | null) | undefined
}
type ReadingListProvider = 0 | 1 | 2
type CblSavedFileDto = {
  name?: (string | null) | undefined
  fileName?: (string | null) | undefined
  provider?: ReadingListProvider | undefined
  repoPath?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  sha?: (string | null) | undefined
}
type UploadUrlDto = { url: string }
type CblRepoItemDto = {
  name?: (string | null) | undefined
  path?: (string | null) | undefined
  isDirectory?: boolean | undefined
  sha?: (string | null) | undefined
  size?: bigint | undefined
  downloadUrl?: (string | null) | undefined
  existingReadingListId?: (number | null) | undefined
  alreadySynced?: boolean | undefined
}
type CblRepoImportRequestDto = { items?: (CblRepoItemDto[] | null) | undefined }
type CblReValidateRequestDto = { fileName?: (string | null) | undefined }
type CblImportReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type CblMatchTier = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1
type LibraryType = 0 | 1 | 2 | 3 | 4 | 5
type CblSeriesCandidate = {
  seriesId?: number | undefined
  libraryId?: number | undefined
  seriesName?: (string | null) | undefined
}
type CblBookResult = {
  order?: number | undefined
  series?: (string | null) | undefined
  volume?: (string | null) | undefined
  number?: (string | null) | undefined
  libraryId?: number | undefined
  seriesId?: number | undefined
  readingListName?: (string | null) | undefined
  reason?: CblImportReason | undefined
  matchTier?: CblMatchTier | undefined
  chapterId?: number | undefined
  chapterTitle?: (string | null) | undefined
  matchedSeriesName?: (string | null) | undefined
  libraryType?: LibraryType | undefined
  chapterNumber?: (string | null) | undefined
  candidates?: (CblSeriesCandidate[] | null) | undefined
}
type CblImportResult = 0 | 1 | 2
type CblImportSummaryDto = {
  cblName?: (string | null) | undefined
  fileName?: (string | null) | undefined
  results?: (CblBookResult[] | null) | undefined
  success?: CblImportResult | undefined
  successfulInserts?: (CblBookResult[] | null) | undefined
  isUpdate?: boolean | undefined
  readingListId?: number | undefined
}
type CblItemDecision = {
  seriesId?: number | undefined
  volumeId?: number | undefined
  chapterId?: number | undefined
}
type CblImportDecisions = {
  itemResolutions?: ({ [x: string]: CblItemDecision } | null) | undefined
  saveAsRemapRules?: boolean | undefined
}
type CblFinalizeRequestDto = {
  fileName?: (string | null) | undefined
  decisions?: CblImportDecisions | undefined
  provider?: ReadingListProvider | undefined
  repoPath?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  sha?: (string | null) | undefined
  promote?: boolean | undefined
}
type CblRemapRuleKind = 0 | 1 | 2
type RemapRuleDto = {
  id?: number | undefined
  normalizedCblSeriesName?: (string | null) | undefined
  cblSeriesName?: (string | null) | undefined
  cblVolume?: (string | null) | undefined
  cblNumber?: (string | null) | undefined
  seriesId?: number | undefined
  volumeId?: (number | null) | undefined
  volumeNumber?: (string | null) | undefined
  chapterId?: (number | null) | undefined
  kind?: CblRemapRuleKind | undefined
  chapterRange?: (string | null) | undefined
  chapterTitleName?: (string | null) | undefined
  chapterIsSpecial?: boolean | undefined
  libraryType?: LibraryType | undefined
  seriesNameAtMapping?: (string | null) | undefined
  appUserId?: number | undefined
  isGlobal?: boolean | undefined
  createdByUserName?: (string | null) | undefined
  createdUtc?: string | undefined
}
type CreateRemapRuleDto = {
  cblSeriesName?: (string | null) | undefined
  seriesId?: number | undefined
  cblVolume?: (string | null) | undefined
  cblNumber?: (string | null) | undefined
  volumeId?: (number | null) | undefined
  chapterId?: (number | null) | undefined
}
type UpdateRemapRuleDto = {
  cblSeriesName?: (string | null) | undefined
  seriesId?: (number | null) | undefined
  volumeId?: (number | null) | undefined
  chapterId?: (number | null) | undefined
  cblVolume?: (string | null) | undefined
  cblNumber?: (string | null) | undefined
}
type GithubRateLimitDto = {
  remaining?: (number | null) | undefined
  limit?: (number | null) | undefined
  resetsAtUtc?: (string | null) | undefined
  isLow?: boolean | undefined
  isExhausted?: boolean | undefined
}
type CblRepoBrowseResultDto = {
  items?: (CblRepoItemDto[] | null) | undefined
  rateLimit?: GithubRateLimitDto | undefined
  fromCache?: boolean | undefined
}
type MangaFileDto = {
  id?: number | undefined
  filePath?: (string | null) | undefined
  pages?: number | undefined
  bytes?: bigint | undefined
  format?: MangaFormat | undefined
  created?: string | undefined
  extension?: (string | null) | undefined
  koreaderHash?: (string | null) | undefined
}
type PersonRole = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
type PersonDto = {
  id?: number | undefined
  name: string | null
  hasCoverImage?: boolean | undefined
  coverImageLocked?: boolean | undefined
  aliases?: (string[] | null) | undefined
  description?: (string | null) | undefined
  asin?: (string | null) | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: (string | null) | undefined
  webLinks?: (string[] | null) | undefined
  roles?: (PersonRole[] | null) | undefined
}
type GenreTagDto = { id?: number | undefined; title: string | null }
type TagDto = { id?: number | undefined; title: string | null }
type ChapterDto = {
  id?: number | undefined
  range?: (string | null) | undefined
  number?: (string | null) | undefined
  minNumber?: number | undefined
  maxNumber?: number | undefined
  sortOrder?: number | undefined
  pages?: number | undefined
  isSpecial?: boolean | undefined
  title?: (string | null) | undefined
  files?: (MangaFileDto[] | null) | undefined
  pagesRead?: number | undefined
  totalReads?: number | undefined
  lastReadingProgressUtc?: string | undefined
  lastReadingProgress?: string | undefined
  coverImageLocked?: boolean | undefined
  volumeId?: number | undefined
  createdUtc?: string | undefined
  lastModifiedUtc?: string | undefined
  created?: string | undefined
  releaseDate?: string | undefined
  titleName?: (string | null) | undefined
  summary?: (string | null) | undefined
  ageRating?: AgeRating | undefined
  wordCount?: bigint | undefined
  volumeTitle?: (string | null) | undefined
  minHoursToRead?: number | undefined
  maxHoursToRead?: number | undefined
  avgHoursToRead?: number | undefined
  webLinks?: (string | null) | undefined
  isbn?: (string | null) | undefined
  writers?: (PersonDto[] | null) | undefined
  coverArtists?: (PersonDto[] | null) | undefined
  publishers?: (PersonDto[] | null) | undefined
  characters?: (PersonDto[] | null) | undefined
  pencillers?: (PersonDto[] | null) | undefined
  inkers?: (PersonDto[] | null) | undefined
  imprints?: (PersonDto[] | null) | undefined
  colorists?: (PersonDto[] | null) | undefined
  letterers?: (PersonDto[] | null) | undefined
  editors?: (PersonDto[] | null) | undefined
  translators?: (PersonDto[] | null) | undefined
  teams?: (PersonDto[] | null) | undefined
  locations?: (PersonDto[] | null) | undefined
  genres?: (GenreTagDto[] | null) | undefined
  tags?: (TagDto[] | null) | undefined
  publicationStatus?: PublicationStatus | undefined
  language?: (string | null) | undefined
  count?: number | undefined
  totalCount?: number | undefined
  languageLocked?: boolean | undefined
  summaryLocked?: boolean | undefined
  ageRatingLocked?: boolean | undefined
  publicationStatusLocked?: boolean | undefined
  genresLocked?: boolean | undefined
  tagsLocked?: boolean | undefined
  writerLocked?: boolean | undefined
  characterLocked?: boolean | undefined
  coloristLocked?: boolean | undefined
  editorLocked?: boolean | undefined
  inkerLocked?: boolean | undefined
  imprintLocked?: boolean | undefined
  lettererLocked?: boolean | undefined
  pencillerLocked?: boolean | undefined
  publisherLocked?: boolean | undefined
  translatorLocked?: boolean | undefined
  teamLocked?: boolean | undefined
  locationLocked?: boolean | undefined
  coverArtistLocked?: boolean | undefined
  releaseDateLocked?: boolean | undefined
  titleNameLocked?: boolean | undefined
  sortOrderLocked?: boolean | undefined
  hasCoverImage?: boolean | undefined
  format?: MangaFormat | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: number | undefined
  metronId?: bigint | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: number | undefined
  cbrId?: number | undefined
}
type ChapterRestoreInfoDto = {
  chapterId?: number | undefined
  seriesId?: number | undefined
  seriesTitle?: (string | null) | undefined
  title?: (string | null) | undefined
  removedAtUtc?: string | undefined
}
type DeleteChaptersDto = { chapterIds?: (number[] | null) | undefined }
type UpdateChapterDto = {
  id?: number | undefined
  summary?: (string | null) | undefined
  genres?: (GenreTagDto[] | null) | undefined
  tags?: (TagDto[] | null) | undefined
  writers?: (PersonDto[] | null) | undefined
  coverArtists?: (PersonDto[] | null) | undefined
  publishers?: (PersonDto[] | null) | undefined
  characters?: (PersonDto[] | null) | undefined
  pencillers?: (PersonDto[] | null) | undefined
  inkers?: (PersonDto[] | null) | undefined
  imprints?: (PersonDto[] | null) | undefined
  colorists?: (PersonDto[] | null) | undefined
  letterers?: (PersonDto[] | null) | undefined
  editors?: (PersonDto[] | null) | undefined
  translators?: (PersonDto[] | null) | undefined
  teams?: (PersonDto[] | null) | undefined
  locations?: (PersonDto[] | null) | undefined
  ageRating?: AgeRating | undefined
  language?: (string | null) | undefined
  ageRatingLocked?: boolean | undefined
  titleNameLocked?: boolean | undefined
  genresLocked?: boolean | undefined
  tagsLocked?: boolean | undefined
  writerLocked?: boolean | undefined
  characterLocked?: boolean | undefined
  coloristLocked?: boolean | undefined
  editorLocked?: boolean | undefined
  inkerLocked?: boolean | undefined
  imprintLocked?: boolean | undefined
  lettererLocked?: boolean | undefined
  pencillerLocked?: boolean | undefined
  publisherLocked?: boolean | undefined
  translatorLocked?: boolean | undefined
  teamLocked?: boolean | undefined
  locationLocked?: boolean | undefined
  coverArtistLocked?: boolean | undefined
  languageLocked?: boolean | undefined
  summaryLocked?: boolean | undefined
  isbnLocked?: boolean | undefined
  releaseDateLocked?: boolean | undefined
  sortOrder?: number | undefined
  sortOrderLocked?: boolean | undefined
  webLinks?: (string | null) | undefined
  isbn?: (string | null) | undefined
  releaseDate?: string | undefined
  titleName?: (string | null) | undefined
  aniListId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  hardcoverId?: (number | null) | undefined
  metronId?: (bigint | null) | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: (number | null) | undefined
  cbrId?: (number | null) | undefined
}
type ScrobbleProvider = 0 | 1 | 2 | 4 | 5 | 6
type RatingAuthority = 0 | 1
type UserReviewDto = {
  tagline?: (string | null) | undefined
  body?: (string | null) | undefined
  bodyJustText?: (string | null) | undefined
  seriesId?: number | undefined
  chapterId?: (number | null) | undefined
  libraryId?: number | undefined
  username?: (string | null) | undefined
  userId?: number | undefined
  totalVotes?: number | undefined
  rating?: number | undefined
  rawBody?: (string | null) | undefined
  score?: number | undefined
  siteUrl?: (string | null) | undefined
  isExternal?: boolean | undefined
  provider?: ScrobbleProvider | undefined
  authority?: RatingAuthority | undefined
}
type RatingDto = {
  averageScore?: number | undefined
  provider?: ScrobbleProvider | undefined
  authority?: RatingAuthority | undefined
  providerUrl?: (string | null) | undefined
}
type ChapterDetailPlusDto = {
  rating?: number | undefined
  hasBeenRated?: boolean | undefined
  reviews?: (UserReviewDto[] | null) | undefined
  ratings?: (RatingDto[] | null) | undefined
}
type AppUserCollectionDto = {
  id?: number | undefined
  title?: (string | null) | undefined
  summary?: (string | null) | undefined
  promoted?: boolean | undefined
  ageRating?: AgeRating | undefined
  itemCount?: number | undefined
  owner?: (string | null) | undefined
  lastSyncUtc?: string | undefined
  source?: ScrobbleProvider | undefined
  sourceUrl?: (string | null) | undefined
  totalSourceCount?: number | undefined
  missingSeriesFromSource?: (string | null) | undefined
  hasCoverImage?: boolean | undefined
  coverImageLocked?: boolean | undefined
}
type PromoteCollectionsDto = {
  collectionIds?: (number[] | null) | undefined
  promoted?: boolean | undefined
}
type DeleteCollectionsDto = { collectionIds: number[] }
type CollectionTagBulkAddDto = {
  collectionTagId?: number | undefined
  collectionTagTitle?: (string | null) | undefined
  seriesIds?: (number[] | null) | undefined
}
type UpdateSeriesForTagDto = {
  tag?: AppUserCollectionDto | undefined
  seriesIdsToRemove?: (number[] | null) | undefined
}
type MalStackDto = {
  title: string | null
  stackId: bigint
  url: string | null
  author: string | null
  seriesCount: number
  restackCount: number
  existingId?: number | undefined
}
type ColorScapeDto = {
  primary?: (string | null) | undefined
  secondary?: (string | null) | undefined
}
type EmailDevicePlatform = 0 | 1 | 2 | 3
type CreateEmailDeviceDto = { name: string; platform: EmailDevicePlatform; emailAddress: string }
type EmailDeviceDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  emailAddress?: (string | null) | undefined
  platform?: EmailDevicePlatform | undefined
}
type UpdateEmailDeviceDto = {
  id: number
  name: string
  platform: EmailDevicePlatform
  emailAddress: string
}
type SendToEmailDeviceDto = {
  deviceId?: number | undefined
  chapterIds?: (number[] | null) | undefined
}
type SendSeriesToEmailDeviceDto = { deviceId?: number | undefined; seriesId?: number | undefined }
type ClientDeviceDto = {
  id?: number | undefined
  friendlyName?: (string | null) | undefined
  uiFingerprint?: (string | null) | undefined
  currentClientInfo?: ClientInfoDto | undefined
  firstSeenUtc?: string | undefined
  lastSeenUtc?: string | undefined
  ownerUsername?: (string | null) | undefined
  ownerUserId?: number | undefined
}
type UpdateClientDeviceNameDto = {
  deviceId?: number | undefined
  name?: (string | null) | undefined
}
type BulkVolumeSizeRequest = { volumeIds?: (number[] | null) | undefined }
type BulkChapterSizeRequest = { chapterIds?: (number[] | null) | undefined }
type BulkReadingListSizeRequest = { readingListIds?: (number[] | null) | undefined }
type BulkSeriesSizeRequest = { seriesIds?: (number[] | null) | undefined }
type MetadataProvider = 2 | 3 | 4
type SeriesDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  originalName?: (string | null) | undefined
  localizedName?: (string | null) | undefined
  sortName?: (string | null) | undefined
  pages?: number | undefined
  coverImageLocked?: boolean | undefined
  lastChapterAdded?: string | undefined
  lastChapterAddedUtc?: string | undefined
  userRating?: number | undefined
  hasUserRated?: boolean | undefined
  totalReads?: number | undefined
  pagesRead?: number | undefined
  latestReadDate?: string | undefined
  format?: MangaFormat | undefined
  created?: string | undefined
  sortNameLocked?: boolean | undefined
  localizedNameLocked?: boolean | undefined
  nameLocked?: boolean | undefined
  wordCount?: bigint | undefined
  libraryId?: number | undefined
  libraryName?: (string | null) | undefined
  minHoursToRead?: number | undefined
  maxHoursToRead?: number | undefined
  avgHoursToRead?: number | undefined
  folderPath?: (string | null) | undefined
  lowestFolderPath?: (string | null) | undefined
  lastFolderScanned?: string | undefined
  hasCoverImage?: boolean | undefined
  dontMatch?: boolean | undefined
  isBlacklisted?: boolean | undefined
  isStandAlone?: boolean | undefined
  metadataProviderOverride?: MetadataProvider | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: number | undefined
  metronId?: bigint | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: number | undefined
  mangaBakaEditionId?: (string | null) | undefined
  cbrId?: number | undefined
}
type BookmarkDto = {
  id?: number | undefined
  page: number
  volumeId: number
  seriesId: number
  chapterId: number
  imageOffset?: number | undefined
  xPath?: (string | null) | undefined
  series?: SeriesDto | undefined
  chapterTitle?: (string | null) | undefined
}
type DownloadBookmarkDto = { bookmarks: BookmarkDto[] }
type EmailHistoryDto = {
  id?: bigint | undefined
  sent?: boolean | undefined
  sendDate?: string | undefined
  emailTemplate?: (string | null) | undefined
  errorMessage?: (string | null) | undefined
  toUserName?: (string | null) | undefined
}
type SeriesFilterField =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
type SeriesFilterStatementDto = {
  comparison?: FilterComparison | undefined
  field?: SeriesFilterField | undefined
  value?: (string | null) | undefined
}
type SeriesSortField = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
type SeriesSortOptionDto = {
  sortField?: SeriesSortField | undefined
  isAscending?: boolean | undefined
}
type SeriesFilterV2Dto = {
  id?: number | undefined
  name?: (string | null) | undefined
  statements?: (SeriesFilterStatementDto[] | null) | undefined
  combination?: FilterCombination | undefined
  sortOptions?: SeriesSortOptionDto | undefined
  entityType?: FilterEntityType | undefined
  limitTo?: number | undefined
}
type ReadingListFilterField = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type ReadingListFilterStatementDto = {
  comparison?: FilterComparison | undefined
  field?: ReadingListFilterField | undefined
  value?: (string | null) | undefined
}
type ReadingListSortField = 1 | 2 | 3 | 4
type ReadingListSortOptionDto = {
  sortField?: ReadingListSortField | undefined
  isAscending?: boolean | undefined
}
type ReadingListFilterDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  statements?: (ReadingListFilterStatementDto[] | null) | undefined
  combination?: FilterCombination | undefined
  sortOptions?: ReadingListSortOptionDto | undefined
  entityType?: FilterEntityType | undefined
  limitTo?: number | undefined
}
type PersonFilterField = 1 | 2 | 3 | 4 | 5
type PersonFilterStatementDto = {
  comparison?: FilterComparison | undefined
  field?: PersonFilterField | undefined
  value?: (string | null) | undefined
}
type PersonSortField = 1 | 2 | 3
type PersonSortOptionDto = {
  sortField?: PersonSortField | undefined
  isAscending?: boolean | undefined
}
type PersonFilterDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  statements?: (PersonFilterStatementDto[] | null) | undefined
  combination?: FilterCombination | undefined
  sortOptions?: PersonSortOptionDto | undefined
  entityType?: FilterEntityType | undefined
  limitTo?: number | undefined
}
type SmartFilterDto = {
  id?: number | undefined
  name: string | null
  filter: string | null
  entityType: FilterEntityType
}
type DecodeFilterDto = { encodedFilter?: (string | null) | undefined }
type IFilterDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  combination?: FilterCombination | undefined
  limitTo?: number | undefined
  entityType?: FilterEntityType | undefined
}
type FontProvider = 1 | 2
type EpubFontDto = {
  id?: number | undefined
  family?: (string | null) | undefined
  name?: (string | null) | undefined
  provider?: FontProvider | undefined
  fileName?: (string | null) | undefined
  style?: (string | null) | undefined
  weight?: (string | null) | undefined
}
type FontDeleteResultDto = { deleted?: boolean | undefined; inUse?: boolean | undefined }
type ExternalCoverImageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type ExternalCoverResponseDto = {
  url: string | null
  type?: ExternalCoverImageType | undefined
  number?: (number | null) | undefined
  language?: (string | null) | undefined
}
type KavitaPlusAuditCategory = 0 | 1 | 2 | 3 | 4
type AuditStatus = 0 | 1 | 2
type AuditSubjectType = 0 | 1 | 2 | 3 | 4 | 5
type KavitaPlusAuditFilterDto = {
  category?: KavitaPlusAuditCategory | undefined
  status?: AuditStatus | undefined
  subjectType?: AuditSubjectType | undefined
  provider?: ScrobbleProvider | undefined
  userId?: (number | null) | undefined
  seriesId?: (number | null) | undefined
  fromUtc?: (string | null) | undefined
  toUtc?: (string | null) | undefined
  search?: (string | null) | undefined
}
type KavitaPlusEventType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 10
  | 11
  | 13
  | 20
  | 21
  | 22
  | 30
  | 31
  | 40
  | 41
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 60
  | 61
  | 62
  | 80
  | 81
type MetadataFieldChangeKind = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
type MetadataFieldChangeDto = {
  field?: MetadataFieldChangeKind | undefined
  from?: { [x: string]: unknown } | undefined
  to?: { [x: string]: unknown } | undefined
  note?: (string | null) | undefined
}
type ScrobbleEventType = 0 | 1 | 2 | 3 | 4 | 5
type ScrobbleReadStatus = 0 | 1 | 2 | 3 | 4 | 5
type KavitaPlusScrobbleDetailsDto = {
  scrobbleEventType?: ScrobbleEventType | undefined
  chapterNumber?: (number | null) | undefined
  volumeNumber?: (number | null) | undefined
  percentRead?: (number | null) | undefined
  rating?: (number | null) | undefined
  reviewBody?: (string | null) | undefined
  readStatus?: ScrobbleReadStatus | undefined
  provider?: ScrobbleProvider | undefined
  libraryType?: LibraryType | undefined
}
type AuditLogMatchExternalIdsParamsDto = {
  aniListId?: number | undefined
  malId?: bigint | undefined
  mangaBakaId?: bigint | undefined
  mangaBakaEditionId?: (string | null) | undefined
  cbrId?: number | undefined
  hardcoverId?: number | undefined
}
type KavitaPlusAuditMatchDetailsDto = {
  matchedName?: (string | null) | undefined
  before?: AuditLogMatchExternalIdsParamsDto | undefined
  after?: AuditLogMatchExternalIdsParamsDto | undefined
  reason?: (string | null) | undefined
  dontMatch?: (boolean | null) | undefined
  previousProvider?: MetadataProvider | undefined
  newProvider?: MetadataProvider | undefined
  isProviderOverride?: (boolean | null) | undefined
}
type KavitaPlusAuditSyncDetailsDto = {
  collectionName?: (string | null) | undefined
  stackId?: (string | null) | undefined
  itemCount?: (number | null) | undefined
  missingCount?: (number | null) | undefined
  collectionUrl?: (string | null) | undefined
  seriesName?: (string | null) | undefined
  seriesId?: (number | null) | undefined
  userName?: (string | null) | undefined
  hasMal?: (boolean | null) | undefined
  hasAniList?: (boolean | null) | undefined
  seriesMatched?: (number | null) | undefined
}
type MetadataFetchTrigger = 0 | 1 | 2 | 3 | 4
type KavitaPlusAuditMetadataExtrasDto = {
  coverUrl?: (string | null) | undefined
  issueNumber?: (string | null) | undefined
  volumeNumber?: (string | null) | undefined
  personName?: (string | null) | undefined
  aliasAdded?: (string | null) | undefined
  fetchTrigger?: MetadataFetchTrigger | undefined
}
type KavitaPlusUserInfo = { username: string | null }
type KavitaPlusAuditSystemDetailsDto = {
  provider?: ScrobbleProvider | undefined
  validUntilUtc?: (string | null) | undefined
  userInfo?: KavitaPlusUserInfo | undefined
}
type KavitaPlusAuditEntryDto = {
  id?: bigint | undefined
  createdUtc?: string | undefined
  category?: KavitaPlusAuditCategory | undefined
  eventType?: KavitaPlusEventType | undefined
  status?: AuditStatus | undefined
  seriesId?: (number | null) | undefined
  libraryId?: (number | null) | undefined
  seriesName?: (string | null) | undefined
  subjectType?: AuditSubjectType | undefined
  subjectId?: (number | null) | undefined
  userId?: (number | null) | undefined
  username?: (string | null) | undefined
  diff?: (MetadataFieldChangeDto[] | null) | undefined
  errorMessage?: (string | null) | undefined
  scrobbleErrorId?: (number | null) | undefined
  scrobbleDetails?: KavitaPlusScrobbleDetailsDto | undefined
  matchDetails?: KavitaPlusAuditMatchDetailsDto | undefined
  syncDetails?: KavitaPlusAuditSyncDetailsDto | undefined
  metadataExtras?: KavitaPlusAuditMetadataExtrasDto | undefined
  systemDetails?: KavitaPlusAuditSystemDetailsDto | undefined
  canRetry?: boolean | undefined
}
type KavitaPlusAuditSeriesInfoDto = {
  seriesId?: number | undefined
  libraryId?: number | undefined
  seriesName?: (string | null) | undefined
  isMatched?: boolean | undefined
  aniListId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  hardcoverId?: (number | null) | undefined
  metronId?: (bigint | null) | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: (number | null) | undefined
  cbrId?: (number | null) | undefined
  isStandAlone?: boolean | undefined
  metadataProvider?: MetadataProvider | undefined
  nextRefreshUtc?: (string | null) | undefined
  lastRefreshedUtc?: (string | null) | undefined
  recentEvents?: (KavitaPlusAuditEntryDto[] | null) | undefined
}
type KavitaPlusAuditStatsDto = {
  events24H?: number | undefined
  failures24H?: number | undefined
  unresolvedMatchFailures?: number | undefined
  matchedSeriesCount?: number | undefined
  totalEligibleSeriesCount?: number | undefined
  staleMatchesCount?: number | undefined
  blacklistedSeriesCount?: number | undefined
  scrobbleQueueCount?: number | undefined
}
type KavitaPlusMyAuditStatsDto = {
  events24H?: number | undefined
  failures24H?: number | undefined
  scrobbleQueueCount?: number | undefined
}
type KoreaderBookDto = {
  document?: (string | null) | undefined
  device_id?: (string | null) | undefined
  device?: (string | null) | undefined
  percentage?: number | undefined
  progress?: (string | null) | undefined
  timestamp?: bigint | undefined
}
type KoreaderProgressUpdateDto = {
  document?: (string | null) | undefined
  timestamp?: string | undefined
}
type FolderWatchMode = 0 | 1 | 2 | 3
type FileTypeGroup = 1 | 2 | 3 | 4
type UpdateLibraryDto = {
  id: number
  name: string
  type: LibraryType
  folders: string[]
  folderWatchMode?: FolderWatchMode | undefined
  includeInDashboard: boolean
  includeInSearch: boolean
  manageCollections: boolean
  manageReadingLists: boolean
  allowScrobbling: boolean
  allowMetadataMatching: boolean
  enableMetadata: boolean
  removePrefixForSortName: boolean
  inheritWebLinksFromFirstChapter: boolean
  defaultLanguage?: (string | null) | undefined
  metadataProvider?: MetadataProvider | undefined
  fileGroupTypes: FileTypeGroup[]
  excludePatterns: string[]
}
type LibraryDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  type?: LibraryType | undefined
  lastScanned?: string | undefined
  folderWatchMode?: FolderWatchMode | undefined
  includeInDashboard?: boolean | undefined
  includeInRecommended?: boolean | undefined
  manageCollections?: boolean | undefined
  manageReadingLists?: boolean | undefined
  includeInSearch?: boolean | undefined
  allowScrobbling?: boolean | undefined
  folders?: (string[] | null) | undefined
  collapseSeriesRelationships?: boolean | undefined
  libraryFileTypes?: (FileTypeGroup[] | null) | undefined
  excludePatterns?: (string[] | null) | undefined
  allowMetadataMatching?: boolean | undefined
  enableMetadata?: boolean | undefined
  removePrefixForSortName?: boolean | undefined
  inheritWebLinksFromFirstChapter?: boolean | undefined
  defaultLanguage?: (string | null) | undefined
  metadataProvider?: MetadataProvider | undefined
  hasCoverImage?: boolean | undefined
}
type DirectoryDto = { name?: (string | null) | undefined; fullPath?: (string | null) | undefined }
type CheckForFilesInFolderRootsDto = { roots?: (string[] | null) | undefined }
type JumpKeyDto = {
  size?: number | undefined
  key?: (string | null) | undefined
  title?: (string | null) | undefined
}
type UpdateLibraryForUserDto = { username: string | null; selectedLibraries: LibraryDto[] | null }
type MemberDto = {
  id?: number | undefined
  username?: (string | null) | undefined
  email?: (string | null) | undefined
  isPending?: boolean | undefined
  ageRestriction?: AgeRestrictionDto | undefined
  created?: string | undefined
  createdUtc?: string | undefined
  lastActive?: string | undefined
  lastActiveUtc?: string | undefined
  libraries?: (LibraryDto[] | null) | undefined
  roles?: (string[] | null) | undefined
  identityProvider?: IdentityProvider | undefined
}
type FolderWatchMethod = 0 | 1 | 2 | 3 | 4
type FolderWatchFallbackReason = 0 | 1
type FolderWatchStatusDto = {
  mode?: FolderWatchMode | undefined
  method?: FolderWatchMethod | undefined
  reason?: FolderWatchFallbackReason | undefined
  folder?: (string | null) | undefined
  successes?: number | undefined
  successesNeeded?: number | undefined
  needsLibraryScan?: boolean | undefined
  enableFolderWatching?: boolean | undefined
}
type BulkActionDto = { ids?: (number[] | null) | undefined; force?: (boolean | null) | undefined }
type CopySettingsFromLibraryDto = {
  sourceLibraryId?: number | undefined
  targetLibraryIds?: (number[] | null) | undefined
  includeType?: boolean | undefined
}
type ScanFolderDto = {
  apiKey?: (string | null) | undefined
  folderPath?: (string | null) | undefined
  abortOnNoSeriesMatch?: boolean | undefined
}
type KavitaPlusSubscriptionState = 0 | 1 | 2 | 3 | 4
type KavitaPlusBillingInterval = 0 | 1 | 2 | 3
type LicenseInfoDto = {
  state?: KavitaPlusSubscriptionState | undefined
  isActive?: boolean | undefined
  isCancelled?: boolean | undefined
  expirationDate?: string | undefined
  nextChargeDate?: (string | null) | undefined
  subscribedSince?: (string | null) | undefined
  productName?: (string | null) | undefined
  priceAmount?: (bigint | null) | undefined
  priceCurrency?: (string | null) | undefined
  billingInterval?: KavitaPlusBillingInterval | undefined
  hasActiveDiscount?: boolean | undefined
  isValidVersion?: boolean | undefined
  registeredEmail?: (string | null) | undefined
  totalMonthsSubbed?: number | undefined
  hasLicense?: boolean | undefined
  installId?: (string | null) | undefined
  pastDue?: boolean | undefined
  discordId?: (string | null) | undefined
  discordUsername?: (string | null) | undefined
  hasDiscordSet?: boolean | undefined
}
type UpdateLicenseDto = {
  license: string | null
  email: string | null
  discordId?: (string | null) | undefined
}
type KavitaPlusRegistrationErrorCode = 0 | 1 | 2 | 3 | 4
type KavitaPlusRegisterResultDto = {
  success?: boolean | undefined
  isSubscriptionActive?: boolean | undefined
  errorCode?: KavitaPlusRegistrationErrorCode | undefined
}
type KavitaPlusProviderHealthStatus = 0 | 1 | 2 | 3
type KavitaPlusProviderHealthIncidentType = 1 | 2
type KavitaPlusProviderIncidentDto = {
  startedAtUtc?: string | undefined
  endedAtUtc?: (string | null) | undefined
  type?: KavitaPlusProviderHealthIncidentType | undefined
}
type KavitaPlusProviderHealthSnapshotDto = {
  provider?: ScrobbleProvider | undefined
  avgLatencyMs?: number | undefined
  status?: KavitaPlusProviderHealthStatus | undefined
  lastIncident?: KavitaPlusProviderIncidentDto | undefined
}
type KavitaPlusApiName = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type DailyBucketDto = { date?: string | undefined; count?: bigint | undefined }
type ApiUsageDto = {
  apiName?: KavitaPlusApiName | undefined
  lifetimeCount?: bigint | undefined
  last30DaysCount?: bigint | undefined
  dailyBuckets?: (DailyBucketDto[] | null) | undefined
}
type KavitaPlusLicenseUsageDto = {
  generatedAtUtc?: string | undefined
  stats?: (ApiUsageDto[] | null) | undefined
}
type CancelKavitaPlusLicenseDto = { email: string | null; comment?: (string | null) | undefined }
type KavitaPlusProductInfoDto = {
  productName?: (string | null) | undefined
  priceAmount?: bigint | undefined
  priceCurrency?: (string | null) | undefined
  billingInterval?: KavitaPlusBillingInterval | undefined
}
type RenewKavitaPlusLicenseDto = { email: string; billingInterval: KavitaPlusBillingInterval }
type ChangeEmailOnLicenseDto = { oldEmail: string | null; newEmail: string | null }
type KavitaLocale = {
  fileName?: (string | null) | undefined
  renderName?: (string | null) | undefined
  translationCompletion?: number | undefined
  isRtL?: boolean | undefined
  hash?: (string | null) | undefined
}
type MatchStateOption = 0 | 1 | 2 | 3 | 4
type ManageMatchFilterDto = {
  matchStateOption?: MatchStateOption | undefined
  libraryType?: number | undefined
  searchTerm?: (string | null) | undefined
}
type ManageMatchSeriesDto = {
  series?: SeriesDto | undefined
  isMatched?: boolean | undefined
  validUntilUtc?: string | undefined
}
type MatchedExternalSeriesCountDto = {
  totalCount?: number | undefined
  dontMatchCount?: number | undefined
  notMatchedCount?: number | undefined
  erroredCount?: number | undefined
}
type QueryContext = 1 | 2 | 4
type UserParams = { pageNumber?: number | undefined; pageSize?: number | undefined }
type BrowseGenreDto = {
  id?: number | undefined
  title: string | null
  seriesCount?: number | undefined
  chapterCount?: number | undefined
}
type ReadingListTagDto = {
  id?: number | undefined
  title: string | null
  normalizedTitle: string | null
}
type BrowseTagDto = {
  id?: number | undefined
  title: string | null
  seriesCount?: number | undefined
  chapterCount?: number | undefined
}
type AgeRatingDto = { value?: AgeRating | undefined; title: string | null }
type LanguageDto = { isoCode: string | null; title: string | null }
type RecommendationSource = 1 | 2 | 3
type RecommendedSeriesDto = { series: SeriesDto; source?: RecommendationSource | undefined }
type ExternalSeriesDto = {
  name: string | null
  coverUrl: string | null
  url: string | null
  summary?: (string | null) | undefined
  aniListId?: (number | null) | undefined
  mangaBakaId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  hardcoverId?: (number | null) | undefined
  provider?: ScrobbleProvider | undefined
  metadataProvider?: MetadataProvider | undefined
  recommendationSource?: RecommendationSource | undefined
  ageRating?: AgeRating | undefined
}
type RecommendationDto = {
  ownedSeries?: (RecommendedSeriesDto[] | null) | undefined
  externalSeries?: (ExternalSeriesDto[] | null) | undefined
}
type ALMediaTitle = {
  englishTitle?: (string | null) | undefined
  romajiTitle?: (string | null) | undefined
  nativeTitle?: (string | null) | undefined
  preferredTitle?: (string | null) | undefined
}
type LocalizedTitleDto = {
  title?: (string | null) | undefined
  isPrimary?: boolean | undefined
  isOfficial?: boolean | undefined
}
type PlusMediaFormat = 1 | 2 | 3 | 4 | 5
type SeriesStaffDto = {
  name: string | null
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  url: string | null
  role: string | null
  imageUrl?: (string | null) | undefined
  gender?: (string | null) | undefined
  description?: (string | null) | undefined
}
type TagWeight = 1 | 2 | 3 | 4 | 5
type MetadataTagDto = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  rank?: (number | null) | undefined
  isGeneralSpoiler?: boolean | undefined
  isMediaSpoiler?: boolean | undefined
  isAdult?: boolean | undefined
  tagWeight?: TagWeight | undefined
}
type RelationKind = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 16
type SeriesRelationship = {
  aniListId?: number | undefined
  malId?: (number | null) | undefined
  mangabakaId?: (number | null) | undefined
  seriesName?: ALMediaTitle | undefined
  relation?: RelationKind | undefined
  provider?: ScrobbleProvider | undefined
  format?: PlusMediaFormat | undefined
  series?: ExternalSeriesDetailDto | undefined
  metadataProvider?: MetadataProvider | undefined
}
type CharacterRole = 0 | 1 | 2
type SeriesCharacter = {
  name?: (string | null) | undefined
  description: string | null
  url: string | null
  imageUrl?: (string | null) | undefined
  role?: CharacterRole | undefined
}
type ExternalChapterDto = {
  title?: (string | null) | undefined
  issueNumber?: (string | null) | undefined
  criticRating?: (number | null) | undefined
  userRating?: (number | null) | undefined
  summary?: (string | null) | undefined
  writers?: (string[] | null) | undefined
  artists?: (string[] | null) | undefined
  releaseDate?: (string | null) | undefined
  publisher?: (string | null) | undefined
  coverImageUrl?: (string | null) | undefined
  issueUrl?: (string | null) | undefined
  hardcoverId?: (number | null) | undefined
  mangaBakaWorkId?: (string | null) | undefined
  criticReviews?: (UserReviewDto[] | null) | undefined
  userReviews?: (UserReviewDto[] | null) | undefined
}
type EditionEntryType = 0 | 1 | 2
type ExternalEditionDto = {
  id: string | null
  title: string | null
  format: string | null
  language?: (string | null) | undefined
  publisher?: (string | null) | undefined
  type?: EditionEntryType | undefined
  mainCount?: number | undefined
  totalCount?: number | undefined
}
type ExternalSeriesDetailDto = {
  name?: (string | null) | undefined
  titles?: ALMediaTitle | undefined
  localizedTitles?: ({ [x: string]: LocalizedTitleDto[] } | null) | undefined
  aniListId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  cbrId?: (number | null) | undefined
  hardcoverId?: (number | null) | undefined
  isStandAlone?: boolean | undefined
  mangabakaId?: (number | null) | undefined
  synonyms?: (string[] | null) | undefined
  plusMediaFormat?: PlusMediaFormat | undefined
  siteUrl?: (string | null) | undefined
  coverUrl?: (string | null) | undefined
  genres?: (string[] | null) | undefined
  staff?: (SeriesStaffDto[] | null) | undefined
  tags?: (MetadataTagDto[] | null) | undefined
  summary?: (string | null) | undefined
  ageRating?: AgeRating | undefined
  ageRatingRaw?: (string | null) | undefined
  provider?: ScrobbleProvider | undefined
  startDate?: (string | null) | undefined
  endDate?: (string | null) | undefined
  averageScore?: number | undefined
  chapters?: number | undefined
  volumes?: number | undefined
  relations?: (SeriesRelationship[] | null) | undefined
  characters?: (SeriesCharacter[] | null) | undefined
  ratings?: (RatingDto[] | null) | undefined
  publisher?: (string | null) | undefined
  chapterDtos?: (ExternalChapterDto[] | null) | undefined
  editions?: (ExternalEditionDto[] | null) | undefined
}
type SeriesDetailPlusDto = {
  recommendations?: RecommendationDto | undefined
  reviews?: (UserReviewDto[] | null) | undefined
  ratings?: (RatingDto[] | null) | undefined
  series?: ExternalSeriesDetailDto | undefined
}
type OAuthUpstream = 0 | 1 | 2 | 3 | 4
type ProgressDto = {
  volumeId: number
  chapterId: number
  pageNum: number
  seriesId: number
  libraryId: number
  bookScrollId?: (string | null) | undefined
  koboSpan?: (string | null) | undefined
  lastModifiedUtc?: string | undefined
}
type BrowsePersonDto = {
  id?: number | undefined
  name: string | null
  hasCoverImage?: boolean | undefined
  coverImageLocked?: boolean | undefined
  aliases?: (string[] | null) | undefined
  description?: (string | null) | undefined
  asin?: (string | null) | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: (string | null) | undefined
  webLinks?: (string[] | null) | undefined
  roles?: (PersonRole[] | null) | undefined
  seriesCount?: number | undefined
  chapterCount?: number | undefined
}
type UpdatePersonDto = {
  id: number
  coverImageLocked: boolean
  name: string
  aliases?: (string[] | null) | undefined
  description?: (string | null) | undefined
  aniListId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  hardcoverId?: (string | null) | undefined
  asin?: (string | null) | undefined
}
type StandaloneChapterDto = {
  id?: number | undefined
  range?: (string | null) | undefined
  number?: (string | null) | undefined
  minNumber?: number | undefined
  maxNumber?: number | undefined
  sortOrder?: number | undefined
  pages?: number | undefined
  isSpecial?: boolean | undefined
  title?: (string | null) | undefined
  files?: (MangaFileDto[] | null) | undefined
  pagesRead?: number | undefined
  totalReads?: number | undefined
  lastReadingProgressUtc?: string | undefined
  lastReadingProgress?: string | undefined
  coverImageLocked?: boolean | undefined
  volumeId?: number | undefined
  createdUtc?: string | undefined
  lastModifiedUtc?: string | undefined
  created?: string | undefined
  releaseDate?: string | undefined
  titleName?: (string | null) | undefined
  summary?: (string | null) | undefined
  ageRating?: AgeRating | undefined
  wordCount?: bigint | undefined
  minHoursToRead?: number | undefined
  maxHoursToRead?: number | undefined
  avgHoursToRead?: number | undefined
  webLinks?: (string | null) | undefined
  isbn?: (string | null) | undefined
  writers?: (PersonDto[] | null) | undefined
  coverArtists?: (PersonDto[] | null) | undefined
  publishers?: (PersonDto[] | null) | undefined
  characters?: (PersonDto[] | null) | undefined
  pencillers?: (PersonDto[] | null) | undefined
  inkers?: (PersonDto[] | null) | undefined
  imprints?: (PersonDto[] | null) | undefined
  colorists?: (PersonDto[] | null) | undefined
  letterers?: (PersonDto[] | null) | undefined
  editors?: (PersonDto[] | null) | undefined
  translators?: (PersonDto[] | null) | undefined
  teams?: (PersonDto[] | null) | undefined
  locations?: (PersonDto[] | null) | undefined
  genres?: (GenreTagDto[] | null) | undefined
  tags?: (TagDto[] | null) | undefined
  publicationStatus?: PublicationStatus | undefined
  language?: (string | null) | undefined
  count?: number | undefined
  totalCount?: number | undefined
  languageLocked?: boolean | undefined
  summaryLocked?: boolean | undefined
  ageRatingLocked?: boolean | undefined
  publicationStatusLocked?: boolean | undefined
  genresLocked?: boolean | undefined
  tagsLocked?: boolean | undefined
  writerLocked?: boolean | undefined
  characterLocked?: boolean | undefined
  coloristLocked?: boolean | undefined
  editorLocked?: boolean | undefined
  inkerLocked?: boolean | undefined
  imprintLocked?: boolean | undefined
  lettererLocked?: boolean | undefined
  pencillerLocked?: boolean | undefined
  publisherLocked?: boolean | undefined
  translatorLocked?: boolean | undefined
  teamLocked?: boolean | undefined
  locationLocked?: boolean | undefined
  coverArtistLocked?: boolean | undefined
  releaseDateLocked?: boolean | undefined
  titleNameLocked?: boolean | undefined
  sortOrderLocked?: boolean | undefined
  hasCoverImage?: boolean | undefined
  format?: MangaFormat | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: number | undefined
  metronId?: bigint | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: number | undefined
  cbrId?: number | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  libraryType?: LibraryType | undefined
  volumeTitle?: (string | null) | undefined
}
type PersonMergeDto = { destId: number; srcId: number }
type PersonAliasCheckDto = { personId: number; name: string; alias: string }
type AuthKeyExpiresAtDto = { expiresAt: string | null }
type ParseResultDto = {
  seriesName?: (string | null) | undefined
  seriesYear?: (string | null) | undefined
  minChapterNumber?: number | undefined
  maxChapterNumber?: number | undefined
  minVolumeNumber?: number | undefined
  maxVolumeNumber?: number | undefined
}
type ParseBulkRequestDto = {
  names?: (string[] | null) | undefined
  libraryType?: LibraryType | undefined
}
type ParseBulkResponseDto = {
  results?: ({ [x: string]: ParseResultDto } | null) | undefined
  errors?: ({ [x: string]: string | null } | null) | undefined
  errorCounts?: number | undefined
}
type UpdateRatingDto = {
  seriesId?: number | undefined
  chapterId?: (number | null) | undefined
  userRating?: number | undefined
}
type FileDimensionDto = {
  width?: number | undefined
  height?: number | undefined
  pageNumber?: number | undefined
  fileName?: (string | null) | undefined
  isWide?: boolean | undefined
}
type ChapterInfoDto = {
  chapterNumber?: (string | null) | undefined
  volumeNumber?: (string | null) | undefined
  volumeId?: number | undefined
  seriesName?: (string | null) | undefined
  seriesFormat?: MangaFormat | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  libraryType?: LibraryType | undefined
  chapterTitle?: (string | null) | undefined
  pages?: number | undefined
  fileName?: (string | null) | undefined
  isSpecial?: boolean | undefined
  subtitle?: (string | null) | undefined
  title?: (string | null) | undefined
  seriesTotalPages?: number | undefined
  seriesTotalPagesRead?: number | undefined
  seriesPublicationStatus?: PublicationStatus | undefined
  pageDimensions?: (FileDimensionDto[] | null) | undefined
  doublePairs?: ({ [x: string]: number } | null) | undefined
}
type BookmarkInfoDto = {
  seriesName?: (string | null) | undefined
  seriesFormat?: MangaFormat | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  libraryType?: LibraryType | undefined
  pages?: number | undefined
  pageDimensions?: (FileDimensionDto[] | null) | undefined
  doublePairs?: ({ [x: string]: number } | null) | undefined
}
type MarkChapterReadDto = {
  seriesId?: number | undefined
  chapterId?: number | undefined
  generateReadingSession?: boolean | undefined
}
type MarkReadDto = { seriesId?: number | undefined; generateReadingSession?: boolean | undefined }
type MarkVolumeReadDto = {
  seriesId?: number | undefined
  volumeId?: number | undefined
  generateReadingSession?: boolean | undefined
}
type MarkVolumesReadDto = {
  seriesId?: number | undefined
  volumeIds?: (number[] | null) | undefined
  chapterIds?: (number[] | null) | undefined
  generateReadingSession?: boolean | undefined
}
type MarkMultipleSeriesAsReadDto = {
  seriesIds?: (number[] | null) | undefined
  generateReadingSession?: boolean | undefined
}
type RemoveBookmarkForSeriesDto = { seriesId?: number | undefined }
type BulkRemoveBookmarkForSeriesDto = { seriesIds?: (number[] | null) | undefined }
type HourEstimateRangeDto = {
  minHours?: number | undefined
  maxHours?: number | undefined
  avgHours?: number | undefined
  wordCount?: bigint | undefined
  pageCount?: number | undefined
}
type PersonalToCDto = {
  id: number
  chapterId: number
  pageNumber: number
  title: string | null
  bookScrollId?: (string | null) | undefined
  selectedText?: (string | null) | undefined
  chapterTitle?: (string | null) | undefined
}
type CreatePersonalToCDto = {
  chapterId: number
  volumeId: number
  seriesId: number
  libraryId: number
  pageNumber: number
  title: string | null
  bookScrollId?: (string | null) | undefined
  selectedText?: (string | null) | undefined
}
type RereadChapterDto = {
  libraryId?: number | undefined
  seriesId?: number | undefined
  volumeId?: number | undefined
  chapterId?: number | undefined
  label?: (string | null) | undefined
  format?: MangaFormat | undefined
}
type RereadDto = {
  shouldPrompt: boolean
  timePrompt?: boolean | undefined
  fullReread?: boolean | undefined
  daysSinceLastRead?: number | undefined
  chapterOnContinue?: RereadChapterDto | undefined
  chapterOnReread?: RereadChapterDto | undefined
}
type ReadingListDto = {
  id?: number | undefined
  title?: (string | null) | undefined
  summary?: (string | null) | undefined
  promoted?: boolean | undefined
  coverImageLocked?: boolean | undefined
  itemCount?: number | undefined
  startingYear?: number | undefined
  startingMonth?: number | undefined
  endingYear?: number | undefined
  endingMonth?: number | undefined
  ageRating: AgeRating
  ownerUserName?: (string | null) | undefined
  sourcePath?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  shaHash?: (string | null) | undefined
  provider?: ReadingListProvider | undefined
  lastSyncCheckUtc?: (string | null) | undefined
  lastSyncedUtc?: (string | null) | undefined
  totalItemsAtImport?: number | undefined
  tags?: (ReadingListTagDto[] | null) | undefined
  canSync?: boolean | undefined
  hasCoverImage?: boolean | undefined
}
type ReadingListItemChapterDto = {
  id?: number | undefined
  range?: (string | null) | undefined
  titleName?: (string | null) | undefined
  minNumber?: number | undefined
  maxNumber?: number | undefined
  sortOrder?: number | undefined
  pages?: number | undefined
  isSpecial?: boolean | undefined
  releaseDate?: string | undefined
  summary?: (string | null) | undefined
  writerName?: (string | null) | undefined
  writerId?: (number | null) | undefined
  pencillerName?: (string | null) | undefined
  pencillerId?: (number | null) | undefined
}
type ReadingListItemVolumeDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  minNumber?: number | undefined
  maxNumber?: number | undefined
  seriesId?: number | undefined
}
type ReadingListItemDto = {
  id?: number | undefined
  order?: number | undefined
  chapterId?: number | undefined
  seriesId?: number | undefined
  seriesName?: (string | null) | undefined
  seriesSortName?: (string | null) | undefined
  seriesFormat?: MangaFormat | undefined
  pagesRead?: number | undefined
  pagesTotal?: number | undefined
  chapterNumber?: (string | null) | undefined
  volumeNumber?: (string | null) | undefined
  chapterTitleName?: (string | null) | undefined
  volumeId?: number | undefined
  libraryId?: number | undefined
  title?: (string | null) | undefined
  libraryType?: LibraryType | undefined
  libraryName?: (string | null) | undefined
  releaseDate?: (string | null) | undefined
  readingListId?: number | undefined
  lastReadingProgressUtc?: (string | null) | undefined
  fileSize?: bigint | undefined
  summary?: (string | null) | undefined
  isSpecial?: boolean | undefined
  chapter?: ReadingListItemChapterDto | undefined
  volume?: ReadingListItemVolumeDto | undefined
}
type UpdateReadingListPosition = {
  readingListId: number
  readingListItemId: number
  fromPosition?: number | undefined
  toPosition: number
}
type CreateReadingListDto = { title?: (string | null) | undefined }
type UpdateReadingListDto = {
  readingListId: number
  title?: (string | null) | undefined
  summary?: (string | null) | undefined
  promoted?: boolean | undefined
  coverImageLocked?: boolean | undefined
  startingMonth?: number | undefined
  startingYear?: number | undefined
  endingMonth?: number | undefined
  endingYear?: number | undefined
  tags?: (string[] | null) | undefined
}
type UpdateReadingListBySeriesDto = {
  seriesId?: number | undefined
  readingListId?: number | undefined
}
type UpdateReadingListByMultipleDto = {
  seriesId?: number | undefined
  readingListId?: number | undefined
  volumeIds?: (number[] | null) | undefined
  chapterIds?: (number[] | null) | undefined
}
type UpdateReadingListByMultipleSeriesDto = {
  readingListId?: number | undefined
  seriesIds?: (number[] | null) | undefined
}
type UpdateReadingListByVolumeDto = {
  volumeId?: number | undefined
  seriesId?: number | undefined
  readingListId?: number | undefined
}
type UpdateReadingListByChapterDto = {
  chapterId?: number | undefined
  seriesId?: number | undefined
  readingListId?: number | undefined
}
type PromoteReadingListsDto = {
  readingListIds?: (number[] | null) | undefined
  promoted?: boolean | undefined
}
type DeleteReadingListsDto = { readingListIds: number[] }
type ReadingListInfoDto = {
  pages?: number | undefined
  wordCount?: bigint | undefined
  isAllEpub?: boolean | undefined
  minHoursToRead?: number | undefined
  maxHoursToRead?: number | undefined
  avgHoursToRead?: number | undefined
}
type ReadingProfileKind = 0 | 1 | 2
type ReadingDirection = 0 | 1
type ScalingOption = 0 | 1 | 2 | 3
type PageSplitOption = 0 | 1 | 2 | 3
type ReaderMode = 0 | 1 | 2
type LayoutMode = 1 | 2 | 3
type BreakPoint = 0 | 768 | 1280 | 1440
type WritingStyle = 0 | 1
type BookPageLayoutMode = 0 | 1 | 2
type PdfTheme = 0 | 1
type PdfScrollMode = 0 | 1 | 3
type PdfSpreadMode = 0 | 1 | 2
type UserReadingProfileDto = {
  id?: number | undefined
  userId?: number | undefined
  name?: (string | null) | undefined
  kind?: ReadingProfileKind | undefined
  deviceIds?: (number[] | null) | undefined
  seriesIds?: (number[] | null) | undefined
  libraryIds?: (number[] | null) | undefined
  readingDirection: ReadingDirection
  scalingOption: ScalingOption
  pageSplitOption: PageSplitOption
  readerMode: ReaderMode
  autoCloseMenu: boolean
  showScreenHints: boolean
  emulateBook: boolean
  layoutMode: LayoutMode
  backgroundColor: string
  swipeToPaginate: boolean
  allowAutomaticWebtoonReaderDetection: boolean
  widthOverride?: (number | null) | undefined
  disableWidthOverride?: BreakPoint | undefined
  bookReaderMargin: number
  bookReaderLineSpacing: number
  bookReaderFontSize: number
  bookReaderFontFamily: string
  bookReaderTapToPaginate: boolean
  bookReaderReadingDirection: ReadingDirection
  bookReaderWritingStyle: WritingStyle
  bookReaderThemeName: string
  bookReaderLayoutMode: BookPageLayoutMode
  bookReaderImmersiveMode: boolean
  bookReaderDisableBookmarkIcon: boolean
  pdfTheme: PdfTheme
  pdfScrollMode: PdfScrollMode
  pdfSpreadMode: PdfSpreadMode
}
type BulkSetSeriesProfiles = {
  profileIds?: (number[] | null) | undefined
  seriesIds?: (number[] | null) | undefined
}
type UpdateUserReviewDto = {
  seriesId?: number | undefined
  chapterId?: (number | null) | undefined
  body?: (string | null) | undefined
}
type UserReviewExtendedDto = {
  id?: number | undefined
  body?: (string | null) | undefined
  seriesId?: number | undefined
  chapterId?: (number | null) | undefined
  libraryId?: number | undefined
  username?: (string | null) | undefined
  rating?: number | undefined
  series?: SeriesDto | undefined
  chapter?: ChapterDto | undefined
  createdUtc?: string | undefined
  writers?: (PersonDto[] | null) | undefined
}
type UserRatingAndReviewDto = {
  rating?: number | undefined
  review?: (string | null) | undefined
  hasBeenRated?: boolean | undefined
}
type ReviewScrobbleTarget = 0 | 1 | 2
type ReadStatusTransitionRule = {
  enabled?: boolean | undefined
  days?: number | undefined
  transitionStatus?: ScrobbleReadStatus | undefined
  excludedPublicationStatus?: (PublicationStatus[] | null) | undefined
}
type ScrobbleProviderSettingsDto = {
  progressScrobbling?: boolean | undefined
  wantToReadSync?: boolean | undefined
  ratingScrobbling?: boolean | undefined
  reviewsScrobbling?: boolean | undefined
  reviewScrobbleTarget?: ReviewScrobbleTarget | undefined
  allLibraries?: boolean | undefined
  libraries?: (number[] | null) | undefined
  highestAgeRating?: AgeRating | undefined
  inactiveSeriesRule?: ReadStatusTransitionRule | undefined
  droppedSeriesRule?: ReadStatusTransitionRule | undefined
}
type ScrobbleProviderDto = {
  provider?: ScrobbleProvider | undefined
  userName?: (string | null) | undefined
  authenticationToken?: (string | null) | undefined
  refreshToken?: (string | null) | undefined
  validUntilUtc?: string | undefined
  lastSyncedUtc?: string | undefined
  hasRunScrobbleEventGeneration?: boolean | undefined
  scrobbleEventGenerationRan?: string | undefined
  settings?: ScrobbleProviderSettingsDto | undefined
}
type UpdateScrobbleProviderDto = {
  provider: ScrobbleProvider
  userName?: (string | null) | undefined
  authenticationToken?: (string | null) | undefined
  refreshToken?: (string | null) | undefined
}
type ScrobbleErrorDto = {
  comment?: (string | null) | undefined
  details?: (string | null) | undefined
  seriesId?: number | undefined
  chapterId?: (number | null) | undefined
  libraryId?: number | undefined
  created?: string | undefined
}
type ScrobbleEventSortField = 0 | 1 | 2 | 3 | 4 | 5 | 6
type ScrobbleEventFilter = {
  field?: ScrobbleEventSortField | undefined
  isDescending?: boolean | undefined
  query?: (string | null) | undefined
  includeReviews?: boolean | undefined
}
type ScrobbleEventDto = {
  id?: bigint | undefined
  seriesName?: (string | null) | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  isProcessed?: boolean | undefined
  volumeNumber?: (number | null) | undefined
  chapterNumber?: (number | null) | undefined
  lastModifiedUtc?: string | undefined
  createdUtc?: string | undefined
  rating?: (number | null) | undefined
  readStatus?: ScrobbleReadStatus | undefined
  scrobbleEventType?: ScrobbleEventType | undefined
  scrobbleProvider?: ScrobbleProvider | undefined
  isErrored?: boolean | undefined
  errorDetails?: (string | null) | undefined
}
type ScrobbleHoldDto = {
  seriesName?: (string | null) | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  created?: string | undefined
  createdUtc?: string | undefined
}
type SearchResultDto = {
  seriesId?: number | undefined
  name?: (string | null) | undefined
  originalName?: (string | null) | undefined
  sortName?: (string | null) | undefined
  localizedName?: (string | null) | undefined
  format?: MangaFormat | undefined
  libraryName?: (string | null) | undefined
  libraryId?: number | undefined
  releaseYear?: number | undefined
  volumeCount?: number | undefined
  chapterCount?: number | undefined
}
type BookmarkSearchResultDto = {
  libraryId?: number | undefined
  volumeId?: number | undefined
  seriesId?: number | undefined
  chapterId?: number | undefined
  seriesName?: (string | null) | undefined
  localizedSeriesName?: (string | null) | undefined
}
type SearchResultGroupDto = {
  libraries?: (LibraryDto[] | null) | undefined
  series?: (SearchResultDto[] | null) | undefined
  collections?: (AppUserCollectionDto[] | null) | undefined
  readingLists?: (ReadingListDto[] | null) | undefined
  persons?: (PersonDto[] | null) | undefined
  genres?: (GenreTagDto[] | null) | undefined
  tags?: (TagDto[] | null) | undefined
  files?: (MangaFileDto[] | null) | undefined
  chapters?: (ChapterDto[] | null) | undefined
  bookmarks?: (BookmarkSearchResultDto[] | null) | undefined
  annotations?: (AnnotationDto[] | null) | undefined
}
type DeleteSeriesDto = { seriesIds?: (number[] | null) | undefined }
type VolumeDto = {
  id?: number | undefined
  minNumber?: number | undefined
  maxNumber?: number | undefined
  name?: (string | null) | undefined
  number?: number | undefined
  pages?: number | undefined
  pagesRead?: number | undefined
  lastModifiedUtc?: string | undefined
  createdUtc?: string | undefined
  created?: string | undefined
  lastModified?: string | undefined
  seriesId?: number | undefined
  chapters?: (ChapterDto[] | null) | undefined
  minHoursToRead?: number | undefined
  maxHoursToRead?: number | undefined
  avgHoursToRead?: number | undefined
  wordCount?: bigint | undefined
  coverImageLocked?: boolean | undefined
  hasCoverImage?: boolean | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: number | undefined
  metronId?: bigint | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: number | undefined
  cbrId?: number | undefined
}
type UpdateSeriesDto = {
  id?: number | undefined
  name?: (string | null) | undefined
  localizedName?: (string | null) | undefined
  sortName?: (string | null) | undefined
  coverImageLocked?: boolean | undefined
  nameLocked?: boolean | undefined
  sortNameLocked?: boolean | undefined
  localizedNameLocked?: boolean | undefined
  metadataProviderOverride?: MetadataProvider | undefined
  aniListId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  hardcoverId?: (number | null) | undefined
  metronId?: (bigint | null) | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: (number | null) | undefined
  cbrId?: (number | null) | undefined
}
type GroupedSeriesDto = {
  seriesName?: (string | null) | undefined
  localizedSeriesName?: (string | null) | undefined
  seriesId?: number | undefined
  libraryId?: number | undefined
  libraryType?: LibraryType | undefined
  created?: string | undefined
  chapterId?: number | undefined
  volumeId?: number | undefined
  id?: number | undefined
  format?: MangaFormat | undefined
  count?: number | undefined
}
type RefreshSeriesDto = {
  libraryId?: number | undefined
  seriesId?: number | undefined
  forceUpdate?: boolean | undefined
  forceColorscape?: boolean | undefined
}
type SeriesMetadataDto = {
  id?: number | undefined
  summary?: (string | null) | undefined
  genres?: (GenreTagDto[] | null) | undefined
  tags?: (TagDto[] | null) | undefined
  writers?: (PersonDto[] | null) | undefined
  coverArtists?: (PersonDto[] | null) | undefined
  publishers?: (PersonDto[] | null) | undefined
  characters?: (PersonDto[] | null) | undefined
  pencillers?: (PersonDto[] | null) | undefined
  inkers?: (PersonDto[] | null) | undefined
  imprints?: (PersonDto[] | null) | undefined
  colorists?: (PersonDto[] | null) | undefined
  letterers?: (PersonDto[] | null) | undefined
  editors?: (PersonDto[] | null) | undefined
  translators?: (PersonDto[] | null) | undefined
  teams?: (PersonDto[] | null) | undefined
  locations?: (PersonDto[] | null) | undefined
  ageRating?: AgeRating | undefined
  releaseYear?: number | undefined
  language?: (string | null) | undefined
  maxCount?: number | undefined
  totalCount?: number | undefined
  publicationStatus?: PublicationStatus | undefined
  webLinks?: (string | null) | undefined
  languageLocked?: boolean | undefined
  summaryLocked?: boolean | undefined
  ageRatingLocked?: boolean | undefined
  publicationStatusLocked?: boolean | undefined
  genresLocked?: boolean | undefined
  tagsLocked?: boolean | undefined
  writerLocked?: boolean | undefined
  characterLocked?: boolean | undefined
  coloristLocked?: boolean | undefined
  editorLocked?: boolean | undefined
  inkerLocked?: boolean | undefined
  imprintLocked?: boolean | undefined
  lettererLocked?: boolean | undefined
  pencillerLocked?: boolean | undefined
  publisherLocked?: boolean | undefined
  translatorLocked?: boolean | undefined
  teamLocked?: boolean | undefined
  locationLocked?: boolean | undefined
  coverArtistLocked?: boolean | undefined
  releaseYearLocked?: boolean | undefined
  seriesId?: number | undefined
}
type UpdateSeriesMetadataDto = { seriesMetadata?: SeriesMetadataDto | undefined }
type SeriesByIdsDto = { seriesIds?: (number[] | null) | undefined }
type SeriesDetailDto = {
  specials?: (ChapterDto[] | null) | undefined
  chapters?: (ChapterDto[] | null) | undefined
  volumes?: (VolumeDto[] | null) | undefined
  storylineChapters?: (ChapterDto[] | null) | undefined
  libraryType?: LibraryType | undefined
  unreadCount?: number | undefined
  totalCount?: number | undefined
}
type RelatedSeriesDto = {
  sourceSeriesId?: number | undefined
  sequels?: (SeriesDto[] | null) | undefined
  prequels?: (SeriesDto[] | null) | undefined
  spinOffs?: (SeriesDto[] | null) | undefined
  adaptations?: (SeriesDto[] | null) | undefined
  sideStories?: (SeriesDto[] | null) | undefined
  characters?: (SeriesDto[] | null) | undefined
  contains?: (SeriesDto[] | null) | undefined
  others?: (SeriesDto[] | null) | undefined
  alternativeSettings?: (SeriesDto[] | null) | undefined
  alternativeVersions?: (SeriesDto[] | null) | undefined
  doujinshis?: (SeriesDto[] | null) | undefined
  parent?: (SeriesDto[] | null) | undefined
  editions?: (SeriesDto[] | null) | undefined
  annuals?: (SeriesDto[] | null) | undefined
  cameos?: (SeriesDto[] | null) | undefined
}
type UpdateRelatedSeriesDto = {
  seriesId?: number | undefined
  adaptations?: (number[] | null) | undefined
  characters?: (number[] | null) | undefined
  contains?: (number[] | null) | undefined
  others?: (number[] | null) | undefined
  prequels?: (number[] | null) | undefined
  sequels?: (number[] | null) | undefined
  sideStories?: (number[] | null) | undefined
  spinOffs?: (number[] | null) | undefined
  alternativeSettings?: (number[] | null) | undefined
  alternativeVersions?: (number[] | null) | undefined
  doujinshis?: (number[] | null) | undefined
  editions?: (number[] | null) | undefined
  annuals?: (number[] | null) | undefined
  cameos?: (number[] | null) | undefined
}
type NextExpectedChapterDto = {
  chapterNumber?: number | undefined
  volumeNumber?: number | undefined
  expectedDate?: (string | null) | undefined
  title?: (string | null) | undefined
}
type MatchSeriesDto = {
  seriesId?: number | undefined
  query?: (string | null) | undefined
  isStandAlone?: boolean | undefined
  provider?: MetadataProvider | undefined
}
type ExternalSeriesMatchDto = {
  series?: ExternalSeriesDetailDto | undefined
  matchRating?: number | undefined
}
type MatchSeriesResultDto = {
  provider?: MetadataProvider | undefined
  matches?: (ExternalSeriesMatchDto[] | null) | undefined
}
type ExternalMetadataIdsDto = {
  malId?: (bigint | null) | undefined
  aniListId?: (number | null) | undefined
  mangabakaId?: (number | null) | undefined
  mangaBakaEditionId?: (string | null) | undefined
  hardcoverId?: (number | null) | undefined
  isStandAlone?: boolean | undefined
  cbrId?: (number | null) | undefined
  seriesName?: (string | null) | undefined
  localizedSeriesName?: (string | null) | undefined
  plusMediaFormat?: PlusMediaFormat | undefined
}
type MatchSeriesInfoDto = {
  hasMatch?: boolean | undefined
  isLegacy?: boolean | undefined
  plusMediaFormat?: PlusMediaFormat | undefined
  libraryType?: LibraryType | undefined
  metadataProvider?: MetadataProvider | undefined
  seriesFormat?: MangaFormat | undefined
  mangaBakaId?: (number | null) | undefined
  aniListId?: (number | null) | undefined
  hardcoverId?: (number | null) | undefined
  cbrId?: (number | null) | undefined
  mangaBakaEditionId?: (string | null) | undefined
  isStandalone?: boolean | undefined
}
type ServerInfoSlimDto = {
  installId: string | null
  isDocker?: boolean | undefined
  kavitaVersion: string | null
  firstInstallDate?: (string | null) | undefined
  firstInstallVersion?: (string | null) | undefined
}
type UpdateNotificationDto = {
  currentVersion: string | null
  updateVersion: string | null
  updateBody: string | null
  updateTitle: string | null
  updateUrl: string | null
  isDocker?: boolean | undefined
  isPrerelease?: boolean | undefined
  publishDate: string | null
  isOnNightlyInRelease?: boolean | undefined
  isReleaseNewer?: boolean | undefined
  isReleaseEqual?: boolean | undefined
  added?: (string[] | null) | undefined
  removed?: (string[] | null) | undefined
  changed?: (string[] | null) | undefined
  fixed?: (string[] | null) | undefined
  theme?: (string[] | null) | undefined
  developer?: (string[] | null) | undefined
  api?: (string[] | null) | undefined
  featureRequests?: (string[] | null) | undefined
  knownIssues?: (string[] | null) | undefined
  blogPart?: (string | null) | undefined
}
type JobDto = {
  id?: (string | null) | undefined
  title?: (string | null) | undefined
  createdAtUtc?: (string | null) | undefined
  lastExecutionUtc?: (string | null) | undefined
  cron?: (string | null) | undefined
}
type MessageEventPriority = 0 | 1 | 2 | 3 | 4
type SignalRMessageDto = {
  body?: { [x: string]: unknown } | undefined
  name: string | null
  title?: (string | null) | undefined
  subTitle?: (string | null) | undefined
  eventType?: (string | null) | undefined
  progress?: (string | null) | undefined
  eventTimeUtc?: string | undefined
  priority?: MessageEventPriority | undefined
  code?: (string | null) | undefined
  correlationId?: (string | null) | undefined
}
type ScheduledScanDto = {
  jobId: string | null
  libraryId?: (number | null) | undefined
  seriesId?: (number | null) | undefined
  runAtUtc?: string | undefined
}
type ScheduledFolderScanDto = {
  libraryId?: (number | null) | undefined
  fromFolderWatcher?: boolean | undefined
  runAtUtc?: (string | null) | undefined
  folders: string[] | null
  folderCount?: number | undefined
}
type UpcomingTaskDto = {
  taskId: string | null
  cron: string | null
  nextRunUtc?: string | undefined
}
type MediaErrorReason = 0 | 1 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
type ScanIssueSummaryItemDto = {
  filePath?: (string | null) | undefined
  reason?: MediaErrorReason | undefined
  seriesId?: (number | null) | undefined
  seriesName?: (string | null) | undefined
}
type LibraryScanEndedEventBodyDto = {
  libraryId?: number | undefined
  libraryName?: (string | null) | undefined
  seriesAdded?: number | undefined
  seriesRemoved?: number | undefined
  seriesFailed?: number | undefined
  chaptersAdded?: number | undefined
  chaptersUpdated?: number | undefined
  chaptersRemoved?: number | undefined
  problemFiles?: number | undefined
  newProblemFiles?: number | undefined
  recentProblemFiles?: (ScanIssueSummaryItemDto[] | null) | undefined
  endsJob?: boolean | undefined
}
type RecentJobDto = {
  correlationId: string | null
  startedUtc?: string | undefined
  endedUtc?: string | undefined
  steps?: (SignalRMessageDto[] | null) | undefined
  completed?: boolean | undefined
  scanSummaries?: (LibraryScanEndedEventBodyDto[] | null) | undefined
}
type ActivitySnapshotDto = {
  bootId?: string | undefined
  startedUtc?: string | undefined
  running?: (SignalRMessageDto[] | null) | undefined
  scheduled?: (ScheduledScanDto[] | null) | undefined
  scheduledTotal?: number | undefined
  scheduledFolderScans?: (ScheduledFolderScanDto[] | null) | undefined
  upcoming?: (UpcomingTaskDto[] | null) | undefined
  recentJobs?: (RecentJobDto[] | null) | undefined
  recentEntries?: (SignalRMessageDto[] | null) | undefined
}
type MediaErrorProducer = 0 | 1 | 2 | 3
type MediaErrorDto = {
  id?: number | undefined
  extension: string | null
  filePath: string | null
  details?: (string | null) | undefined
  producer?: MediaErrorProducer | undefined
  reason?: MediaErrorReason | undefined
  seriesId?: (number | null) | undefined
  seriesName?: (string | null) | undefined
  libraryId?: (number | null) | undefined
  libraryName?: (string | null) | undefined
  isDismissed?: boolean | undefined
  lastSeenUtc?: string | undefined
  createdUtc?: string | undefined
}
type EncodeFormat = 0 | 1 | 2 | 3
type CoverImageSize = 1 | 2 | 3 | 4
type PdfRenderResolution = 1 | 2 | 3
type SmtpConfigDto = {
  senderAddress?: (string | null) | undefined
  senderDisplayName?: (string | null) | undefined
  userName?: (string | null) | undefined
  password?: (string | null) | undefined
  host?: (string | null) | undefined
  port?: number | undefined
  enableSsl?: boolean | undefined
  sizeLimit?: number | undefined
  customizedTemplates?: boolean | undefined
}
type OidcConfigDto = {
  autoLogin?: boolean | undefined
  disablePasswordAuthentication?: boolean | undefined
  providerName?: (string | null) | undefined
  authority?: (string | null) | undefined
  clientId?: (string | null) | undefined
  secret?: (string | null) | undefined
  provisionAccounts?: boolean | undefined
  requireVerifiedEmail?: boolean | undefined
  syncUserSettings?: boolean | undefined
  rolesPrefix?: (string | null) | undefined
  rolesClaim?: (string | null) | undefined
  customScopes?: (string[] | null) | undefined
  defaultRoles?: (string[] | null) | undefined
  defaultLibraries?: (number[] | null) | undefined
  defaultAgeRestriction?: AgeRating | undefined
  defaultIncludeUnknowns?: boolean | undefined
  enabled?: boolean | undefined
}
type ServerSettingDto = {
  cacheDirectory?: (string | null) | undefined
  taskScan?: (string | null) | undefined
  taskBackup?: (string | null) | undefined
  taskCleanup?: (string | null) | undefined
  taskCblSync?: (string | null) | undefined
  taskCompositeCovers?: (string | null) | undefined
  loggingLevel?: (string | null) | undefined
  port?: number | undefined
  ipAddresses?: (string | null) | undefined
  allowStatCollection?: boolean | undefined
  enableOpds?: boolean | undefined
  baseUrl?: (string | null) | undefined
  bookmarksDirectory?: (string | null) | undefined
  installVersion?: (string | null) | undefined
  installId?: (string | null) | undefined
  encodeMediaAs?: EncodeFormat | undefined
  totalBackups?: number | undefined
  enableFolderWatching?: boolean | undefined
  totalLogs?: number | undefined
  hostName?: (string | null) | undefined
  cacheSize?: bigint | undefined
  onDeckProgressDays?: number | undefined
  onDeckUpdateDays?: number | undefined
  coverImageSize?: CoverImageSize | undefined
  pdfRenderResolution?: PdfRenderResolution | undefined
  smtpConfig?: SmtpConfigDto | undefined
  oidcConfig?: OidcConfigDto | undefined
  enableKobo?: boolean | undefined
  enableKepubify?: boolean | undefined
  firstInstallDate?: (string | null) | undefined
  firstInstallVersion?: (string | null) | undefined
  statsApiHits?: number | undefined
}
type KepubifyCheckStatus = 0 | 1 | 2
type KepubifySource = 0 | 1
type KepubifyOffReason = 0 | 1 | 2 | 3
type KepubifyStatusDto = {
  status?: KepubifyCheckStatus | undefined
  source?: KepubifySource | undefined
  path?: (string | null) | undefined
  reason?: KepubifyOffReason | undefined
}
type UpdateKepubifyDto = { enabled?: boolean | undefined }
type EmailTestResultDto = {
  successful?: boolean | undefined
  errorMessage?: (string | null) | undefined
  emailAddress?: (string | null) | undefined
}
type MetadataFieldType = 0 | 1
type MetadataFieldMappingDto = {
  id?: number | undefined
  sourceType?: MetadataFieldType | undefined
  destinationType?: MetadataFieldType | undefined
  sourceValue?: (string | null) | undefined
  destinationValue?: (string | null) | undefined
  excludeFromSource?: boolean | undefined
}
type SeriesNameLanguageDto = {
  name?: (string | null) | undefined
  localizedName?: (string | null) | undefined
}
type MetadataSettingField =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 40
type MetadataSettingsDto = {
  blacklist?: (string[] | null) | undefined
  whitelist?: (string[] | null) | undefined
  ageRatingMappings?: ({ [x: string]: AgeRating } | null) | undefined
  fieldMappings?: (MetadataFieldMappingDto[] | null) | undefined
  enabled?: boolean | undefined
  enableExtendedMetadataProcessing?: boolean | undefined
  enableSummary?: boolean | undefined
  enablePublicationStatus?: boolean | undefined
  enableAgeRating?: boolean | undefined
  enableRelationships?: boolean | undefined
  enablePeople?: boolean | undefined
  enableStartDate?: boolean | undefined
  enableLocalizedName?: boolean | undefined
  enableName?: boolean | undefined
  enableCoverImage?: boolean | undefined
  enableChapterSummary?: boolean | undefined
  enableChapterReleaseDate?: boolean | undefined
  enableChapterTitle?: boolean | undefined
  enableChapterPublisher?: boolean | undefined
  enableChapterCoverImage?: boolean | undefined
  enableVolumeCoverImage?: boolean | undefined
  enableGenres?: boolean | undefined
  enableTags?: boolean | undefined
  firstLastPeopleNaming?: boolean | undefined
  externalAgeRatingMappings?: ({ [x: string]: AgeRating } | null) | undefined
  globalLanguageTitleSettings?: SeriesNameLanguageDto | undefined
  libraryLanguageTitleOverrides?: ({ [x: string]: SeriesNameLanguageDto } | null) | undefined
  overrides?: (MetadataSettingField[] | null) | undefined
  personRoles?: (PersonRole[] | null) | undefined
  filterAboveWeight?: TagWeight | undefined
}
type RunMetadataMappingsRequestDto = {
  allLibraries?: boolean | undefined
  includedLibraries?: (number[] | null) | undefined
  excludedLibraries?: (number[] | null) | undefined
}
type ImportMode = 0 | 1
type ConflictResolution = 0 | 1 | 2
type ImportSettingsDto = {
  importMode?: ImportMode | undefined
  resolution?: ConflictResolution | undefined
  whitelist?: boolean | undefined
  blacklist?: boolean | undefined
  ageRatings?: boolean | undefined
  fieldMappings?: boolean | undefined
  ageRatingConflictResolutions?: ({ [x: string]: ConflictResolution } | null) | undefined
}
type FieldMappingsDto = {
  blacklist?: (string[] | null) | undefined
  whitelist?: (string[] | null) | undefined
  ageRatingMappings?: ({ [x: string]: AgeRating } | null) | undefined
  fieldMappings?: (MetadataFieldMappingDto[] | null) | undefined
}
type ImportFieldMappingsDto = {
  settings?: ImportSettingsDto | undefined
  data?: FieldMappingsDto | undefined
}
type FieldMappingsImportResultDto = {
  success?: boolean | undefined
  resultingMetadataSettings?: MetadataSettingsDto | undefined
  ageRatingConflicts?: (string[] | null) | undefined
}
type OidcPublicConfigDto = {
  autoLogin?: boolean | undefined
  disablePasswordAuthentication?: boolean | undefined
  providerName?: (string | null) | undefined
  enabled?: boolean | undefined
}
type AuthorityValidationDto = { authority?: (string | null) | undefined }
type AuthorityValidationResult = 0 | 1 | 2 | 3 | 4
type ServerStatisticsDto = {
  chapterCount?: bigint | undefined
  volumeCount?: bigint | undefined
  seriesCount?: bigint | undefined
  totalFiles?: bigint | undefined
  totalSize?: bigint | undefined
  totalGenres?: bigint | undefined
  totalTags?: bigint | undefined
  totalPeople?: bigint | undefined
  totalReadingTime?: bigint | undefined
}
type PublicationStatusStatCount = {
  value?: PublicationStatus | undefined
  count?: bigint | undefined
}
type MangaFormatStatCount = { value?: MangaFormat | undefined; count?: bigint | undefined }
type StatBucketDto = {
  rangeStart?: number | undefined
  rangeEnd?: (number | null) | undefined
  count?: number | undefined
  percentage?: number | undefined
}
type LibraryDtoStatCount = { value?: LibraryDto | undefined; count?: bigint | undefined }
type SeriesDtoStatCount = { value?: SeriesDto | undefined; count?: bigint | undefined }
type GenreTagDtoStatCount = { value?: GenreTagDto | undefined; count?: bigint | undefined }
type TagDtoStatCount = { value?: TagDto | undefined; count?: bigint | undefined }
type PersonDtoStatCount = { value?: PersonDto | undefined; count?: bigint | undefined }
type TopReadDto = {
  userId?: number | undefined
  username?: (string | null) | undefined
  comicsTime?: number | undefined
  booksTime?: number | undefined
  mangaTime?: number | undefined
}
type FileExtensionDto = {
  extension?: (string | null) | undefined
  format?: MangaFormat | undefined
  totalSize?: bigint | undefined
  totalFiles?: bigint | undefined
}
type FileExtensionBreakdownDto = {
  totalFileSize?: bigint | undefined
  fileBreakdown?: (FileExtensionDto[] | null) | undefined
}
type DateTimeStatCountWithFormat = {
  value?: string | undefined
  count?: bigint | undefined
  format?: MangaFormat | undefined
}
type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
type DayOfWeekStatCount = { value?: DayOfWeek | undefined; count?: bigint | undefined }
type Int32StatCount = { value?: number | undefined; count?: bigint | undefined }
type ClientDeviceTypeStatCount = {
  value?: ClientDeviceType | undefined
  count?: bigint | undefined
}
type DeviceClientBreakdownDto = {
  records?: (ClientDeviceTypeStatCount[] | null) | undefined
  totalCount?: number | undefined
}
type StringStatCount = { value?: (string | null) | undefined; count?: bigint | undefined }
type ReadingActivityGraphEntryDto = {
  date?: string | undefined
  totalTimeReadingSeconds?: number | undefined
  totalPages?: number | undefined
  totalWords?: number | undefined
  totalChaptersFullyRead?: number | undefined
}
type ReadingPaceDto = {
  hoursRead?: number | undefined
  pagesRead?: number | undefined
  wordsRead?: number | undefined
  booksRead?: number | undefined
  comicsRead?: number | undefined
  daysInRange?: number | undefined
}
type StringBreakDownDto = {
  data?: (StringStatCount[] | null) | undefined
  total?: number | undefined
  totalOptions?: number | undefined
  missing?: number | undefined
}
type SpreadStatsDto = {
  buckets?: (StatBucketDto[] | null) | undefined
  totalCount?: number | undefined
}
type AuthorChapterDto = {
  libraryId?: number | undefined
  seriesId?: number | undefined
  chapterId?: number | undefined
  title?: (string | null) | undefined
}
type MostReadAuthorsDto = {
  authorId?: number | undefined
  authorName?: (string | null) | undefined
  totalChaptersRead?: number | undefined
  chapters?: (AuthorChapterDto[] | null) | undefined
}
type ReadTimeByHourDto = {
  dataSince?: string | undefined
  stats?: (Int32StatCount[] | null) | undefined
}
type YearMonthGroupingDto = { year?: number | undefined; month?: number | undefined }
type YearMonthGroupingDtoStatCount = {
  value?: YearMonthGroupingDto | undefined
  count?: bigint | undefined
}
type ProfileStatBarDto = {
  booksRead?: number | undefined
  comicsRead?: number | undefined
  pagesRead?: number | undefined
  wordsRead?: number | undefined
  authorsRead?: number | undefined
  reviews?: number | undefined
  ratings?: number | undefined
}
type UserReadStatistics = {
  totalPagesRead?: bigint | undefined
  totalWordsRead?: bigint | undefined
  timeSpentReading?: bigint | undefined
  lastActiveUtc?: (string | null) | undefined
  avgHoursPerWeekSpentReading?: number | undefined
}
type ReadingHistoryChapterItemDto = {
  chapterId?: number | undefined
  label?: (string | null) | undefined
  startTimeUtc?: string | undefined
  endTimeUtc?: string | undefined
  pagesRead?: number | undefined
  wordsRead?: number | undefined
  durationSeconds?: number | undefined
  startPage?: number | undefined
  endPage?: number | undefined
  totalPages?: number | undefined
  completed?: boolean | undefined
}
type ReadingHistoryItemDto = {
  sessionDataIds?: (number[] | null) | undefined
  sessionId?: number | undefined
  isGeneratedSession?: boolean | undefined
  startTimeUtc?: string | undefined
  endTimeUtc?: string | undefined
  localDate?: string | undefined
  seriesId?: number | undefined
  seriesName?: (string | null) | undefined
  seriesFormat?: MangaFormat | undefined
  chapters?: (ReadingHistoryChapterItemDto[] | null) | undefined
  libraryId?: number | undefined
  libraryName?: (string | null) | undefined
  pagesRead?: number | undefined
  wordsRead?: number | undefined
  durationSeconds?: number | undefined
  totalPages?: number | undefined
}
type DashboardStreamType = 1 | 2 | 3 | 4
type DashboardStreamDto = {
  id?: number | undefined
  name: string | null
  isProvided?: boolean | undefined
  order?: number | undefined
  smartFilterEncoded?: (string | null) | undefined
  smartFilterId?: (number | null) | undefined
  streamType?: DashboardStreamType | undefined
  visible?: boolean | undefined
  entityType?: FilterEntityType | undefined
}
type ExternalSourceDto = {
  id: number
  name: string | null
  host: string | null
  apiKey: string | null
}
type SideNavStreamType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type SideNavStreamDto = {
  id?: number | undefined
  name: string | null
  isProvided?: boolean | undefined
  order?: number | undefined
  smartFilterEncoded?: (string | null) | undefined
  smartFilterId?: (number | null) | undefined
  externalSourceId?: number | undefined
  externalSource?: ExternalSourceDto | undefined
  streamType?: SideNavStreamType | undefined
  visible?: boolean | undefined
  libraryId?: (number | null) | undefined
  library?: LibraryDto | undefined
  entityType?: FilterEntityType | undefined
}
type UpdateStreamPositionDto = {
  streamName?: (string | null) | undefined
  id?: number | undefined
  fromPosition?: number | undefined
  toPosition?: number | undefined
  positionIncludesInvisible?: boolean | undefined
}
type BulkUpdateSideNavStreamVisibilityDto = { ids: number[] | null; visibility: boolean }
type TachiyomiChapterDto = {
  id?: number | undefined
  range?: (string | null) | undefined
  minNumber?: number | undefined
  maxNumber?: number | undefined
  sortOrder?: number | undefined
  pages?: number | undefined
  isSpecial?: boolean | undefined
  title?: (string | null) | undefined
  files?: (MangaFileDto[] | null) | undefined
  pagesRead?: number | undefined
  totalReads?: number | undefined
  lastReadingProgressUtc?: string | undefined
  lastReadingProgress?: string | undefined
  coverImageLocked?: boolean | undefined
  volumeId?: number | undefined
  createdUtc?: string | undefined
  lastModifiedUtc?: string | undefined
  created?: string | undefined
  releaseDate?: string | undefined
  titleName?: (string | null) | undefined
  summary?: (string | null) | undefined
  ageRating?: AgeRating | undefined
  wordCount?: bigint | undefined
  volumeTitle?: (string | null) | undefined
  minHoursToRead?: number | undefined
  maxHoursToRead?: number | undefined
  avgHoursToRead?: number | undefined
  webLinks?: (string | null) | undefined
  isbn?: (string | null) | undefined
  writers?: (PersonDto[] | null) | undefined
  coverArtists?: (PersonDto[] | null) | undefined
  publishers?: (PersonDto[] | null) | undefined
  characters?: (PersonDto[] | null) | undefined
  pencillers?: (PersonDto[] | null) | undefined
  inkers?: (PersonDto[] | null) | undefined
  imprints?: (PersonDto[] | null) | undefined
  colorists?: (PersonDto[] | null) | undefined
  letterers?: (PersonDto[] | null) | undefined
  editors?: (PersonDto[] | null) | undefined
  translators?: (PersonDto[] | null) | undefined
  teams?: (PersonDto[] | null) | undefined
  locations?: (PersonDto[] | null) | undefined
  genres?: (GenreTagDto[] | null) | undefined
  tags?: (TagDto[] | null) | undefined
  publicationStatus?: PublicationStatus | undefined
  language?: (string | null) | undefined
  count?: number | undefined
  totalCount?: number | undefined
  languageLocked?: boolean | undefined
  summaryLocked?: boolean | undefined
  ageRatingLocked?: boolean | undefined
  publicationStatusLocked?: boolean | undefined
  genresLocked?: boolean | undefined
  tagsLocked?: boolean | undefined
  writerLocked?: boolean | undefined
  characterLocked?: boolean | undefined
  coloristLocked?: boolean | undefined
  editorLocked?: boolean | undefined
  inkerLocked?: boolean | undefined
  imprintLocked?: boolean | undefined
  lettererLocked?: boolean | undefined
  pencillerLocked?: boolean | undefined
  publisherLocked?: boolean | undefined
  translatorLocked?: boolean | undefined
  teamLocked?: boolean | undefined
  locationLocked?: boolean | undefined
  coverArtistLocked?: boolean | undefined
  releaseDateLocked?: boolean | undefined
  titleNameLocked?: boolean | undefined
  sortOrderLocked?: boolean | undefined
  hasCoverImage?: boolean | undefined
  format?: MangaFormat | undefined
  aniListId?: number | undefined
  malId?: bigint | undefined
  hardcoverId?: number | undefined
  metronId?: bigint | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: number | undefined
  cbrId?: number | undefined
  number?: (string | null) | undefined
}
type DownloadableSiteThemeDto = {
  name?: (string | null) | undefined
  cssUrl?: (string | null) | undefined
  cssFile?: (string | null) | undefined
  previewUrls?: (string[] | null) | undefined
  alreadyDownloaded?: boolean | undefined
  sha?: (string | null) | undefined
  path?: (string | null) | undefined
  author?: (string | null) | undefined
  lastCompatibleVersion?: (string | null) | undefined
  isCompatible?: boolean | undefined
  description?: (string | null) | undefined
}
type UpdateDefaultThemeDto = { themeId?: number | undefined }
type UploadCoverFileDto = {
  id: number
  url?: (string | null) | undefined
  fileName?: (string | null) | undefined
  lockCover?: boolean | undefined
}
type MemberInfoDto = {
  id?: number | undefined
  username?: (string | null) | undefined
  created?: string | undefined
  createdUtc?: string | undefined
}
type KoboSyncPointDto = {
  id?: number | undefined
  deviceId?: (string | null) | undefined
  removedChapterCount?: number | undefined
  lastSync?: string | undefined
}
type UndoKoboRemoveBookDto = {
  syncPointId?: number | undefined
  undoBookIds?: (number[] | null) | undefined
}
type TokenValidityInfoDto = {
  provider?: ScrobbleProvider | undefined
  validUntilUtc?: string | undefined
}
type UserTokenInfoDto = {
  userId?: number | undefined
  username?: (string | null) | undefined
  tokens?: (TokenValidityInfoDto[] | null) | undefined
}
type UpdateVolumeDto = {
  id?: number | undefined
  aniListId?: (number | null) | undefined
  malId?: (bigint | null) | undefined
  hardcoverId?: (number | null) | undefined
  metronId?: (bigint | null) | undefined
  comicVineId?: (string | null) | undefined
  mangaBakaId?: (number | null) | undefined
  cbrId?: (number | null) | undefined
}
type UpdateWantToReadDto = { seriesIds?: (number[] | null) | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/Account/oidc-authenticated': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/clear-oidc-link': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Account': {
      $get:
        | { input: {}; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/reset-password': {
      $post: { input: { json: ResetPasswordDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Account/register': {
      $post:
        | { input: { json: RegisterDto }; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: { json: RegisterDto }; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: { json: RegisterDto }; output: UserDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/login': {
      $post:
        | { input: { json: LoginDto }; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: { json: LoginDto }; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: { json: LoginDto }; output: UserDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/refresh-account': {
      $get:
        | { input: {}; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/refresh-token': {
      $post:
        | {
            input: { json: TokenRequestDto }
            output: TokenRequestDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TokenRequestDto }
            output: TokenRequestDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenRequestDto }
            output: TokenRequestDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/roles': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/update/username': {
      $post:
        | {
            input: { json: UpdateUsernameRequestDto }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateUsernameRequestDto }
            output: InviteUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateUsernameRequestDto }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/update/email': {
      $post:
        | {
            input: { json: UpdateEmailDto }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateEmailDto }
            output: InviteUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateEmailDto }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/update/age-restriction': {
      $post: {
        input: { json: UpdateAgeRestrictionDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Account/update': {
      $post: { input: { json: UpdateUserDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Account/invite-url': {
      $get:
        | {
            input: { query: { userId?: number | undefined; withBaseUrl?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined; withBaseUrl?: boolean | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined; withBaseUrl?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/invite': {
      $post:
        | {
            input: { json: InviteUserDto }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: InviteUserDto }
            output: InviteUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InviteUserDto }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/confirm-email': {
      $post:
        | { input: { json: ConfirmEmailDto }; output: UserDto; outputFormat: 'text'; status: 200 }
        | { input: { json: ConfirmEmailDto }; output: UserDto; outputFormat: 'json'; status: 200 }
        | { input: { json: ConfirmEmailDto }; output: UserDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/confirm-email-update': {
      $post: {
        input: { json: ConfirmEmailUpdateDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Account/confirm-password-reset': {
      $post:
        | {
            input: { json: ConfirmPasswordResetDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ConfirmPasswordResetDto }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConfirmPasswordResetDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/forgot-password': {
      $post:
        | {
            input: { query: { email?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { email?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/email-confirmed': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/confirm-migration-email': {
      $post:
        | {
            input: { json: ConfirmMigrationEmailDto }
            output: UserDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ConfirmMigrationEmailDto }
            output: UserDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConfirmMigrationEmailDto }
            output: UserDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/resend-confirmation-email': {
      $post:
        | {
            input: { query: { userId?: number | undefined } }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: InviteUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: InviteUserResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/opds-url': {
      $get:
        | {
            input: { query: { authKeyName?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { authKeyName?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authKeyName?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/is-email-valid': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/auth-keys': {
      $get:
        | { input: {}; output: AuthKeyDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: AuthKeyDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AuthKeyDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Account/rotate-auth-key': {
      $post:
        | {
            input: { query: { authKeyId?: number | undefined } } & { json: RotateAuthKeyRequestDto }
            output: AuthKeyDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { authKeyId?: number | undefined } } & { json: RotateAuthKeyRequestDto }
            output: AuthKeyDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authKeyId?: number | undefined } } & { json: RotateAuthKeyRequestDto }
            output: AuthKeyDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/create-auth-key': {
      $post:
        | {
            input: { json: RotateAuthKeyRequestDto }
            output: AuthKeyDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RotateAuthKeyRequestDto }
            output: AuthKeyDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RotateAuthKeyRequestDto }
            output: AuthKeyDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Account/auth-key': {
      $delete: {
        input: { query: { authKeyId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Activity/current': {
      $get:
        | { input: {}; output: ReadingSessionDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ReadingSessionDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ReadingSessionDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Admin/exists': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Annotation/all-filtered': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: AnnotationFilterDto
            }
            output: AnnotationDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: AnnotationFilterDto
            }
            output: AnnotationDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: AnnotationFilterDto
            }
            output: AnnotationDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Annotation/all': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: AnnotationDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: AnnotationDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: AnnotationDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Annotation/all-for-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: AnnotationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Annotation/:annotationId': {
      $get:
        | {
            input: { param: { annotationId: number } }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { annotationId: number } }
            output: AnnotationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annotationId: number } }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Annotation/create': {
      $post:
        | {
            input: { json: AnnotationDto }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AnnotationDto }
            output: AnnotationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnnotationDto }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Annotation/update': {
      $post:
        | {
            input: { json: AnnotationDto }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AnnotationDto }
            output: AnnotationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnnotationDto }
            output: AnnotationDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Annotation/like': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Annotation/unlike': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Annotation': {
      $delete: {
        input: { query: { annotationId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Annotation/bulk-delete': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Annotation/export-filter': {
      $post: {
        input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
          json: AnnotationFilterDto
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Annotation/export': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Book/:chapterId/book-info': {
      $get:
        | {
            input: { param: { chapterId: number } }
            output: BookInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chapterId: number } }
            output: BookInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapterId: number } }
            output: BookInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Book/:chapterId/book-resources': {
      $get: {
        input: { param: { chapterId: number } } & { query: { file?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Book/:chapterId/chapters': {
      $get:
        | {
            input: { param: { chapterId: number } }
            output: BookChapterItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chapterId: number } }
            output: BookChapterItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapterId: number } }
            output: BookChapterItem[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Book/:chapterId/book-page': {
      $get:
        | {
            input: { param: { chapterId: number } } & { query: { page?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chapterId: number } } & { query: { page?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapterId: number } } & { query: { page?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/sync': {
      $post: {
        input: { query: { readingListId?: number | undefined; force?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Cbl/file-import': {
      $post:
        | {
            input: { form: { cblFile?: File | undefined } }
            output: CblSavedFileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { cblFile?: File | undefined } }
            output: CblSavedFileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { cblFile?: File | undefined } }
            output: CblSavedFileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/upload-cbl-file': {
      $post:
        | {
            input: { json: UploadUrlDto }
            output: CblSavedFileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UploadUrlDto }
            output: CblSavedFileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UploadUrlDto }
            output: CblSavedFileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/repo-import': {
      $post:
        | {
            input: { json: CblRepoImportRequestDto }
            output: CblSavedFileDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CblRepoImportRequestDto }
            output: CblSavedFileDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CblRepoImportRequestDto }
            output: CblSavedFileDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/re-validate': {
      $post:
        | {
            input: { json: CblReValidateRequestDto }
            output: CblImportSummaryDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CblReValidateRequestDto }
            output: CblImportSummaryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CblReValidateRequestDto }
            output: CblImportSummaryDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/finalize-import': {
      $post:
        | {
            input: { json: CblFinalizeRequestDto }
            output: CblImportSummaryDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CblFinalizeRequestDto }
            output: CblImportSummaryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CblFinalizeRequestDto }
            output: CblImportSummaryDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/remap-rules': {
      $get:
        | { input: {}; output: RemapRuleDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: RemapRuleDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RemapRuleDto[]; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: CreateRemapRuleDto }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateRemapRuleDto }
            output: RemapRuleDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateRemapRuleDto }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/remap-rules/all': {
      $get:
        | { input: {}; output: RemapRuleDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: RemapRuleDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RemapRuleDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Cbl/remap-rules/:id/promote': {
      $post:
        | {
            input: { param: { id: number } }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RemapRuleDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/remap-rules/:id/demote': {
      $post:
        | {
            input: { param: { id: number } }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RemapRuleDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Cbl/remap-rules/:id': {
      $post:
        | {
            input: { param: { id: number } } & { json: UpdateRemapRuleDto }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UpdateRemapRuleDto }
            output: RemapRuleDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UpdateRemapRuleDto }
            output: RemapRuleDto
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Cbl/browse': {
      $get:
        | {
            input: { query: { path?: string | undefined } }
            output: CblRepoBrowseResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { path?: string | undefined } }
            output: CblRepoBrowseResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { path?: string | undefined } }
            output: CblRepoBrowseResultDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Chapter': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Chapter/restore-info': {
      $get:
        | {
            input: { query: { syncPointId?: number | undefined } }
            output: ChapterRestoreInfoDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { syncPointId?: number | undefined } }
            output: ChapterRestoreInfoDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { syncPointId?: number | undefined } }
            output: ChapterRestoreInfoDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Chapter/delete-multiple': {
      $post:
        | {
            input: { query: { seriesId?: number | undefined } } & { json: DeleteChaptersDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } } & { json: DeleteChaptersDto }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } } & { json: DeleteChaptersDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Chapter/update': {
      $post:
        | {
            input: { json: UpdateChapterDto }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateChapterDto }
            output: ChapterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateChapterDto }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Chapter/chapter-detail-plus': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDetailPlusDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDetailPlusDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDetailPlusDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Collection': {
      $get:
        | {
            input: {
              query: { ownedOnly?: boolean | undefined; sortByLastModified?: boolean | undefined }
            }
            output: AppUserCollectionDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ownedOnly?: boolean | undefined; sortByLastModified?: boolean | undefined }
            }
            output: AppUserCollectionDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { ownedOnly?: boolean | undefined; sortByLastModified?: boolean | undefined }
            }
            output: AppUserCollectionDto[]
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { query: { tagId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Collection/single': {
      $get:
        | {
            input: { query: { collectionId?: number | undefined } }
            output: AppUserCollectionDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { collectionId?: number | undefined } }
            output: AppUserCollectionDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { collectionId?: number | undefined } }
            output: AppUserCollectionDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Collection/all-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined; ownedOnly?: boolean | undefined } }
            output: AppUserCollectionDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; ownedOnly?: boolean | undefined } }
            output: AppUserCollectionDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; ownedOnly?: boolean | undefined } }
            output: AppUserCollectionDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Collection/name-exists': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Collection/update': {
      $post:
        | {
            input: { json: AppUserCollectionDto }
            output: AppUserCollectionDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AppUserCollectionDto }
            output: AppUserCollectionDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AppUserCollectionDto }
            output: AppUserCollectionDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Collection/promote-multiple': {
      $post: {
        input: { json: PromoteCollectionsDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Collection/delete-multiple': {
      $post: {
        input: { json: DeleteCollectionsDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Collection/update-for-series': {
      $post: {
        input: { json: CollectionTagBulkAddDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Collection/update-series': {
      $post: {
        input: { json: UpdateSeriesForTagDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Collection/mal-stacks': {
      $get:
        | { input: {}; output: MalStackDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MalStackDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MalStackDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Collection/import-stack': {
      $post: { input: { json: MalStackDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/ColorScape/series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ColorScape/volume': {
      $get:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ColorScape/chapter': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ColorScape/person': {
      $get:
        | {
            input: { query: { personId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ColorScape/reading-list': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ColorScape/collection': {
      $get:
        | {
            input: { query: { collectionId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { collectionId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { collectionId?: number | undefined } }
            output: ColorScapeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Device/create': {
      $post:
        | {
            input: { json: CreateEmailDeviceDto }
            output: EmailDeviceDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateEmailDeviceDto }
            output: EmailDeviceDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateEmailDeviceDto }
            output: EmailDeviceDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Device/update': {
      $post:
        | {
            input: { json: UpdateEmailDeviceDto }
            output: EmailDeviceDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateEmailDeviceDto }
            output: EmailDeviceDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateEmailDeviceDto }
            output: EmailDeviceDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Device': {
      $delete: {
        input: { query: { deviceId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | { input: {}; output: EmailDeviceDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: EmailDeviceDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: EmailDeviceDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Device/send-to': {
      $post: {
        input: { json: SendToEmailDeviceDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Device/send-series-to': {
      $post: {
        input: { json: SendSeriesToEmailDeviceDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Device/client/devices': {
      $get:
        | {
            input: { query: { includeInactive?: boolean | undefined } }
            output: ClientDeviceDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { includeInactive?: boolean | undefined } }
            output: ClientDeviceDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { includeInactive?: boolean | undefined } }
            output: ClientDeviceDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Device/client/all-devices': {
      $get:
        | {
            input: { query: { includeInactive?: boolean | undefined } }
            output: ClientDeviceDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { includeInactive?: boolean | undefined } }
            output: ClientDeviceDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { includeInactive?: boolean | undefined } }
            output: ClientDeviceDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Device/client/device': {
      $delete:
        | {
            input: { query: { clientDeviceId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { clientDeviceId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { clientDeviceId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Device/client/update-name': {
      $post: {
        input: { json: UpdateClientDeviceNameDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Download/volume-size': {
      $get:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: bigint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/bulk-volume-size': {
      $post:
        | {
            input: { json: BulkVolumeSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BulkVolumeSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkVolumeSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/chapter-size': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: bigint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/bulk-chapter-size': {
      $post:
        | {
            input: { json: BulkChapterSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BulkChapterSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkChapterSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/series-size': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: bigint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/readinglist-size': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: bigint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: bigint
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/bulk-readinglist-size': {
      $post:
        | {
            input: { json: BulkReadingListSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BulkReadingListSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkReadingListSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/bulk-series-size': {
      $post:
        | {
            input: { json: BulkSeriesSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BulkSeriesSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BulkSeriesSizeRequest }
            output: { [x: string]: bigint }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Download/volume': {
      $get: {
        input: { query: { volumeId?: number | undefined; correlationId?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Download/chapter': {
      $get: {
        input: { query: { chapterId?: number | undefined; correlationId?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Download/series': {
      $get: {
        input: { query: { seriesId?: number | undefined; correlationId?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Download/bookmarks': {
      $post: { input: { json: DownloadBookmarkDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Email/all': {
      $get:
        | { input: {}; output: EmailHistoryDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: EmailHistoryDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: EmailHistoryDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Filter/update/series': {
      $post: { input: { json: SeriesFilterV2Dto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Filter/update/reading-list': {
      $post: {
        input: { json: ReadingListFilterDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Filter/update/person': {
      $post: { input: { json: PersonFilterDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Filter/update/annotation': {
      $post: { input: { json: AnnotationFilterDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Filter': {
      $get:
        | { input: {}; output: SmartFilterDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SmartFilterDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SmartFilterDto[]; outputFormat: 'text'; status: 200 }
      $delete: {
        input: { query: { filterId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Filter/encode/series': {
      $post:
        | { input: { json: SeriesFilterV2Dto }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { json: SeriesFilterV2Dto }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: SeriesFilterV2Dto }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Filter/encode/reading-list': {
      $post:
        | {
            input: { json: ReadingListFilterDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReadingListFilterDto }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReadingListFilterDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Filter/encode/person': {
      $post:
        | { input: { json: PersonFilterDto }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { json: PersonFilterDto }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: PersonFilterDto }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Filter/encode/annotation': {
      $post:
        | {
            input: { json: AnnotationFilterDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AnnotationFilterDto }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnnotationFilterDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Filter/decode': {
      $post:
        | {
            input: { json: DecodeFilterDto }
            output: IFilterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DecodeFilterDto }
            output: IFilterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DecodeFilterDto }
            output: IFilterDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Filter/rename': {
      $post: {
        input: { query: { filterId?: number | undefined; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Font/all': {
      $get:
        | { input: {}; output: EpubFontDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: EpubFontDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: EpubFontDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Font': {
      $get: {
        input: { query: { fontId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete:
        | {
            input: { query: { fontId?: number | undefined; force?: boolean | undefined } }
            output: FontDeleteResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { fontId?: number | undefined; force?: boolean | undefined } }
            output: FontDeleteResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fontId?: number | undefined; force?: boolean | undefined } }
            output: FontDeleteResultDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Font/upload': {
      $post:
        | {
            input: { form: { formFile?: File | undefined } }
            output: EpubFontDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { formFile?: File | undefined } }
            output: EpubFontDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { formFile?: File | undefined } }
            output: EpubFontDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Font/upload-by-url': {
      $post:
        | {
            input: { query: { url?: string | undefined } }
            output: EpubFontDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { url?: string | undefined } }
            output: EpubFontDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url?: string | undefined } }
            output: EpubFontDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Health': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Image/chapter-cover': {
      $get: {
        input: { query: { chapterId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/library-cover': {
      $get: {
        input: { query: { libraryId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/volume-cover': {
      $get: {
        input: { query: { volumeId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/series-cover': {
      $get: {
        input: { query: { seriesId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/collection-cover': {
      $get: {
        input: { query: { collectionTagId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/readinglist-cover': {
      $get: {
        input: { query: { readingListId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/bookmark': {
      $get: {
        input: {
          query: {
            chapterId?: number | undefined
            pageNum?: number | undefined
            imageOffset?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/web-link': {
      $get: {
        input: { query: { url?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/publisher': {
      $get: {
        input: { query: { publisherName?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/person-cover': {
      $get: {
        input: { query: { personId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/user-cover': {
      $get: {
        input: { query: { userId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/cover-upload': {
      $get: {
        input: { query: { filename?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Image/external/series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Image/external/volume': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined; volumeId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; volumeId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; volumeId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Image/external/chapter': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined; chapterId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; chapterId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; chapterId?: number | undefined } }
            output: ExternalCoverResponseDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/kavita-plus-audit/entries': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: KavitaPlusAuditFilterDto
            }
            output: KavitaPlusAuditEntryDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: KavitaPlusAuditFilterDto
            }
            output: KavitaPlusAuditEntryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: KavitaPlusAuditFilterDto
            }
            output: KavitaPlusAuditEntryDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/kavita-plus-audit/entries/series/:seriesId': {
      $get:
        | {
            input: { param: { seriesId: number } }
            output: KavitaPlusAuditSeriesInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: number } }
            output: KavitaPlusAuditSeriesInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: number } }
            output: KavitaPlusAuditSeriesInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/kavita-plus-audit/stats': {
      $get:
        | { input: {}; output: KavitaPlusAuditStatsDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KavitaPlusAuditStatsDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KavitaPlusAuditStatsDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/kavita-plus-audit/my-stats': {
      $get:
        | { input: {}; output: KavitaPlusMyAuditStatsDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KavitaPlusMyAuditStatsDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KavitaPlusMyAuditStatsDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/kavita-plus-audit/my-activity': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: KavitaPlusAuditFilterDto
            }
            output: KavitaPlusAuditEntryDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: KavitaPlusAuditFilterDto
            }
            output: KavitaPlusAuditEntryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: KavitaPlusAuditFilterDto
            }
            output: KavitaPlusAuditEntryDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/kavita-plus-audit/failed-scrobble-events': {
      $get:
        | { input: {}; output: number; outputFormat: 'text'; status: 200 }
        | { input: {}; output: number; outputFormat: 'json'; status: 200 }
        | { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Kobo/:apiKey/v1/initialization': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/Kobo/:apiKey/v1/library/sync': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/Kobo/:apiKey/v1/library/:bookId/metadata': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/library/:bookId/state': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/library/:bookId/file/epub': {
      $get: {
        input: { param: { bookId: number; apiKey: string } } & {
          query: { convert?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/books/:thumbnailId/thumbnail/:width/:height/:isGreyScale/image.jpg': {
      $get: {
        input: {
          param: {
            thumbnailId: string
            width: string
            height: string
            isGreyScale: boolean
            apiKey: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/books/:thumbnailId/thumbnail/:width/:height/:quality/:isGreyScale/image.jpg': {
      $get: {
        input: {
          param: {
            thumbnailId: string
            width: string
            height: string
            quality: string
            isGreyScale: boolean
            apiKey: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/library/:bookId': {
      $delete: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/products/:bookId/reviews': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/products/:bookId/recommendations': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/products/books/:bookId': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/products/:bookId/nextread': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/products/books/series/:bookId': {
      $get: {
        input: { param: { bookId: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/products/:bookIds/prices': {
      $get: {
        input: { param: { bookIds: string; apiKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/user/reviews': {
      $get: {
        input: { param: { apiKey: string } } & { query: { ProductIds?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Kobo/:apiKey/v1/user/wishlist': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/Kobo/:apiKey/v1/analytics/gettests': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/content/:bookId/annotations': {
      $get: {
        input: { param: { bookId: string } } & { query: { limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { bookId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/content/checkforchanges': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Koreader/:apiKey/users/auth': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Koreader/:apiKey/syncs/progress': {
      $put:
        | {
            input: { param: { apiKey: string } } & { json: KoreaderBookDto }
            output: KoreaderProgressUpdateDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiKey: string } } & { json: KoreaderBookDto }
            output: KoreaderProgressUpdateDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiKey: string } } & { json: KoreaderBookDto }
            output: KoreaderProgressUpdateDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Koreader/:apiKey/syncs/progress/:ebookHash': {
      $get: {
        input: { param: { apiKey: string; ebookHash: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Library/create': {
      $post:
        | {
            input: { json: UpdateLibraryDto }
            output: LibraryDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateLibraryDto }
            output: LibraryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateLibraryDto }
            output: LibraryDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/list': {
      $get:
        | {
            input: { query: { path?: string | undefined } }
            output: DirectoryDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { path?: string | undefined } }
            output: DirectoryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { path?: string | undefined } }
            output: DirectoryDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/has-files-at-root': {
      $post:
        | {
            input: { json: CheckForFilesInFolderRootsDto }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CheckForFilesInFolderRootsDto }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckForFilesInFolderRootsDto }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: LibraryDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: LibraryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: LibraryDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/libraries': {
      $get:
        | { input: {}; output: LibraryDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LibraryDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LibraryDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Library/user-libraries': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: LibraryDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: LibraryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: LibraryDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/jump-bar': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: JumpKeyDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: JumpKeyDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: JumpKeyDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/grant-access': {
      $post:
        | {
            input: { json: UpdateLibraryForUserDto }
            output: MemberDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateLibraryForUserDto }
            output: MemberDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateLibraryForUserDto }
            output: MemberDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/scan': {
      $post: {
        input: { query: { libraryId?: number | undefined; force?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Library/folder-watch/retry': {
      $post:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: FolderWatchStatusDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: FolderWatchStatusDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: FolderWatchStatusDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/watch-status': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: FolderWatchStatusDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: FolderWatchStatusDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: FolderWatchStatusDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/scan-multiple': {
      $post: { input: { json: BulkActionDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Library/scan-all': {
      $post: {
        input: { query: { force?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Library/refresh-metadata': {
      $post: {
        input: {
          query: {
            libraryId?: number | undefined
            force?: boolean | undefined
            forceColorscape?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Library/refresh-metadata-multiple': {
      $post: {
        input: { query: { forceColorscape?: boolean | undefined } } & { json: BulkActionDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Library/copy-settings-from': {
      $post: {
        input: { json: CopySettingsFromLibraryDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Library/scan-folder': {
      $post: { input: { json: ScanFolderDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Library/delete': {
      $delete:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/delete-multiple': {
      $delete: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Library/name-exists': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/update': {
      $post: { input: { json: UpdateLibraryDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Library/metadata-providers': {
      $get:
        | {
            input: { query: { libraryType?: LibraryType | undefined } }
            output: MetadataProvider[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryType?: LibraryType | undefined } }
            output: MetadataProvider[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryType?: LibraryType | undefined } }
            output: MetadataProvider[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Library/metadata-enabled-libraries': {
      $get:
        | { input: {}; output: LibraryType[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LibraryType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LibraryType[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Library/scrobble-enabled-libraries': {
      $get:
        | { input: {}; output: LibraryType[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LibraryType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LibraryType[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Library/type': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: LibraryType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: LibraryType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: LibraryType
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/License/valid-license': {
      $get:
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/License/has-license': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/License/info': {
      $get:
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: LicenseInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: LicenseInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: LicenseInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/License': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { json: UpdateLicenseDto }
            output: KavitaPlusRegisterResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateLicenseDto }
            output: KavitaPlusRegisterResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateLicenseDto }
            output: KavitaPlusRegisterResultDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/License/reset': {
      $post: { input: { json: UpdateLicenseDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/License/resend-license': {
      $post:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/License/provider-health': {
      $get:
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: KavitaPlusProviderHealthSnapshotDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: KavitaPlusProviderHealthSnapshotDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { forceCheck?: boolean | undefined } }
            output: KavitaPlusProviderHealthSnapshotDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/License/stats': {
      $get:
        | { input: {}; output: KavitaPlusLicenseUsageDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KavitaPlusLicenseUsageDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KavitaPlusLicenseUsageDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/License/cancel': {
      $delete: {
        input: { json: CancelKavitaPlusLicenseDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/License/products': {
      $get:
        | { input: {}; output: KavitaPlusProductInfoDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KavitaPlusProductInfoDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KavitaPlusProductInfoDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/License/renew': {
      $post:
        | {
            input: { json: RenewKavitaPlusLicenseDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RenewKavitaPlusLicenseDto }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RenewKavitaPlusLicenseDto }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/License/change-email': {
      $post:
        | {
            input: { json: ChangeEmailOnLicenseDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ChangeEmailOnLicenseDto }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChangeEmailOnLicenseDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Locale': {
      $get:
        | { input: {}; output: KavitaLocale[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KavitaLocale[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KavitaLocale[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Manage/series-metadata': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ManageMatchFilterDto
            }
            output: ManageMatchSeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ManageMatchFilterDto
            }
            output: ManageMatchSeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ManageMatchFilterDto
            }
            output: ManageMatchSeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Manage/matched-series-counts': {
      $get:
        | { input: {}; output: MatchedExternalSeriesCountDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MatchedExternalSeriesCountDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MatchedExternalSeriesCountDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Metadata/genres': {
      $get:
        | {
            input: {
              query: { libraryIds?: string | undefined; context?: QueryContext | undefined }
            }
            output: GenreTagDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { libraryIds?: string | undefined; context?: QueryContext | undefined }
            }
            output: GenreTagDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { libraryIds?: string | undefined; context?: QueryContext | undefined }
            }
            output: GenreTagDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/genres-with-counts': {
      $post:
        | {
            input: { json: UserParams }
            output: BrowseGenreDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UserParams }
            output: BrowseGenreDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserParams }
            output: BrowseGenreDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/people-by-role': {
      $get:
        | {
            input: { query: { role?: PersonRole | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { role?: PersonRole | undefined } }
            output: PersonDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { role?: PersonRole | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/people': {
      $get:
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: PersonDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/tags': {
      $get:
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: TagDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: TagDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: TagDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/readinglist-tags': {
      $get:
        | { input: {}; output: ReadingListTagDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ReadingListTagDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ReadingListTagDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Metadata/tags-with-counts': {
      $post:
        | { input: { json: UserParams }; output: BrowseTagDto[]; outputFormat: 'text'; status: 200 }
        | { input: { json: UserParams }; output: BrowseTagDto[]; outputFormat: 'json'; status: 200 }
        | { input: { json: UserParams }; output: BrowseTagDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Metadata/age-ratings': {
      $get:
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: AgeRatingDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: AgeRatingDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: AgeRatingDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/publication-status': {
      $get:
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: AgeRatingDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: AgeRatingDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: AgeRatingDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/languages': {
      $get:
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: LanguageDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: LanguageDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryIds?: string | undefined } }
            output: LanguageDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/all-languages': {
      $get:
        | { input: {}; output: LanguageDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LanguageDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LanguageDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Metadata/all-bcp47-languages': {
      $get:
        | { input: {}; output: LanguageDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LanguageDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LanguageDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Metadata/language-title': {
      $get:
        | {
            input: { query: { code?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { code?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { code?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Metadata/series-detail-plus': {
      $get:
        | {
            input: {
              query: { seriesId?: number | undefined; libraryType?: LibraryType | undefined }
            }
            output: SeriesDetailPlusDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { seriesId?: number | undefined; libraryType?: LibraryType | undefined }
            }
            output: SeriesDetailPlusDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { seriesId?: number | undefined; libraryType?: LibraryType | undefined }
            }
            output: SeriesDetailPlusDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/OAuth/start': {
      $get: {
        input: { query: { upstream?: OAuthUpstream | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/OAuth/callback': {
      $get: {
        input: {
          query: {
            upstream?: OAuthUpstream | undefined
            token?: string | undefined
            apiKey?: string | undefined
            refreshToken?: string | undefined
            expiresIn?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/Oidc/login': {
      $get: {
        input: { query: { returnUrl?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/Oidc/logout': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api/Opds/:apiKey': {
      $post: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Opds/:apiKey/smart-filters/:filterId': {
      $get: {
        input: { param: { apiKey: string; filterId: number } } & {
          query: { pageNumber?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/smart-filters': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/libraries': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/want-to-read': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/collections': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/collections/:collectionId': {
      $get: {
        input: { param: { collectionId: number; apiKey: string } } & {
          query: { pageNumber?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/reading-list': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/reading-list/:readingListId': {
      $get: {
        input: { param: { readingListId: number; apiKey: string } } & {
          query: { pageNumber?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/libraries/:libraryId': {
      $get: {
        input: { param: { libraryId: number; apiKey: string } } & {
          query: { pageNumber?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/recently-added': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/recently-updated': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/on-deck': {
      $get: {
        input: { param: { apiKey: string } } & { query: { pageNumber?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/series': {
      $get: {
        input: { param: { apiKey: string } } & { query: { query?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/search': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Opds/:apiKey/series/:seriesId': {
      $get: {
        input: { param: { apiKey: string; seriesId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/series/:seriesId/volume/:volumeId': {
      $get: {
        input: { param: { apiKey: string; seriesId: number; volumeId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/series/:seriesId/volume/:volumeId/chapter/:chapterId': {
      $get: {
        input: { param: { apiKey: string; seriesId: number; volumeId: number; chapterId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/series/:seriesId/volume/:volumeId/chapter/:chapterId/download/:filename': {
      $get: {
        input: {
          param: {
            apiKey: string
            seriesId: number
            volumeId: number
            chapterId: number
            filename: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/image': {
      $get: {
        input: { param: { apiKey: string } } & {
          query: {
            libraryId?: number | undefined
            seriesId?: number | undefined
            volumeId?: number | undefined
            chapterId?: number | undefined
            pageNumber?: number | undefined
            saveProgress?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Opds/:apiKey/favicon': {
      $get: { input: { param: { apiKey: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Panels/save-progress': {
      $post: {
        input: { query: { apiKey?: string | undefined } } & { json: ProgressDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Panels/get-progress': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined; apiKey?: string | undefined } }
            output: ProgressDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined; apiKey?: string | undefined } }
            output: ProgressDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined; apiKey?: string | undefined } }
            output: ProgressDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: PersonDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: PersonDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: PersonDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/search': {
      $get:
        | {
            input: { query: { queryString?: string | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { queryString?: string | undefined } }
            output: PersonDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { queryString?: string | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/roles': {
      $get:
        | {
            input: { query: { personId?: number | undefined } }
            output: PersonRole[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: PersonRole[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: PersonRole[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/all': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: PersonFilterDto
            }
            output: BrowsePersonDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: PersonFilterDto
            }
            output: BrowsePersonDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: PersonFilterDto
            }
            output: BrowsePersonDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/update': {
      $post:
        | { input: { json: UpdatePersonDto }; output: PersonDto; outputFormat: 'text'; status: 200 }
        | { input: { json: UpdatePersonDto }; output: PersonDto; outputFormat: 'json'; status: 200 }
        | { input: { json: UpdatePersonDto }; output: PersonDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Person/coversdb-image': {
      $get:
        | {
            input: { query: { personId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/series-known-for': {
      $get:
        | {
            input: { query: { personId?: number | undefined } }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined } }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/chapters-by-role': {
      $get:
        | {
            input: { query: { personId?: number | undefined; role?: PersonRole | undefined } }
            output: StandaloneChapterDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined; role?: PersonRole | undefined } }
            output: StandaloneChapterDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { personId?: number | undefined; role?: PersonRole | undefined } }
            output: StandaloneChapterDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Person/merge': {
      $post:
        | { input: { json: PersonMergeDto }; output: PersonDto; outputFormat: 'text'; status: 200 }
        | { input: { json: PersonMergeDto }; output: PersonDto; outputFormat: 'json'; status: 200 }
        | { input: { json: PersonMergeDto }; output: PersonDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Person/valid-alias': {
      $post:
        | {
            input: { json: PersonAliasCheckDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PersonAliasCheckDto }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PersonAliasCheckDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Plugin/authenticate': {
      $post:
        | {
            input: { query: { apiKey: string; pluginName: string } }
            output: UserDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { apiKey: string; pluginName: string } }
            output: UserDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiKey: string; pluginName: string } }
            output: UserDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Plugin/version': {
      $get:
        | {
            input: { query: { apiKey: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { apiKey: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { apiKey: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Plugin/authkey-expires': {
      $get:
        | { input: {}; output: AuthKeyExpiresAtDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: AuthKeyExpiresAtDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AuthKeyExpiresAtDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Plugin/parse': {
      $get:
        | {
            input: { query: { name?: string | undefined; libraryType?: LibraryType | undefined } }
            output: ParseResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined; libraryType?: LibraryType | undefined } }
            output: ParseResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined; libraryType?: LibraryType | undefined } }
            output: ParseResultDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Plugin/parse-bulk': {
      $post:
        | {
            input: { json: ParseBulkRequestDto }
            output: ParseBulkResponseDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ParseBulkRequestDto }
            output: ParseBulkResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ParseBulkRequestDto }
            output: ParseBulkResponseDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Rating/series': {
      $post: { input: { json: UpdateRatingDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Rating/chapter': {
      $post: { input: { json: UpdateRatingDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Rating/overall-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: RatingDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: RatingDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: RatingDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Rating/overall-chapter': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: RatingDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: RatingDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: RatingDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/pdf': {
      $get: {
        input: {
          query: {
            chapterId?: number | undefined
            apiKey?: string | undefined
            extractPdf?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/image': {
      $get: {
        input: {
          query: {
            chapterId?: number | undefined
            page?: number | undefined
            apiKey?: string | undefined
            extractPdf?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/thumbnail': {
      $get: {
        input: {
          query: {
            chapterId?: number | undefined
            pageNum?: number | undefined
            apiKey?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/bookmark-image': {
      $get: {
        input: {
          query: {
            seriesId?: number | undefined
            apiKey?: string | undefined
            page?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/file-dimensions': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined; extractPdf?: boolean | undefined } }
            output: FileDimensionDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined; extractPdf?: boolean | undefined } }
            output: FileDimensionDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined; extractPdf?: boolean | undefined } }
            output: FileDimensionDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/chapter-info': {
      $get:
        | {
            input: {
              query: {
                chapterId?: number | undefined
                extractPdf?: boolean | undefined
                includeDimensions?: boolean | undefined
              }
            }
            output: ChapterInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chapterId?: number | undefined
                extractPdf?: boolean | undefined
                includeDimensions?: boolean | undefined
              }
            }
            output: ChapterInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                chapterId?: number | undefined
                extractPdf?: boolean | undefined
                includeDimensions?: boolean | undefined
              }
            }
            output: ChapterInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/bookmark-info': {
      $get:
        | {
            input: {
              query: { seriesId?: number | undefined; includeDimensions?: boolean | undefined }
            }
            output: BookmarkInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { seriesId?: number | undefined; includeDimensions?: boolean | undefined }
            }
            output: BookmarkInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { seriesId?: number | undefined; includeDimensions?: boolean | undefined }
            }
            output: BookmarkInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/mark-chapter-read': {
      $post: { input: { json: MarkChapterReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-read': {
      $post: { input: { json: MarkReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-unread': {
      $post: { input: { json: MarkReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-volume-unread': {
      $post: { input: { json: MarkVolumeReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-volume-read': {
      $post: { input: { json: MarkVolumeReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-multiple-read': {
      $post: { input: { json: MarkVolumesReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-multiple-unread': {
      $post: { input: { json: MarkVolumesReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/mark-multiple-series-read': {
      $post: {
        input: { json: MarkMultipleSeriesAsReadDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/mark-multiple-series-unread': {
      $post: {
        input: { json: MarkMultipleSeriesAsReadDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/get-progress': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ProgressDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ProgressDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ProgressDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/progress': {
      $post: { input: { json: ProgressDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/continue-point': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/has-progress': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/chapter-bookmarks': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/all-bookmarks': {
      $post:
        | {
            input: { json: SeriesFilterV2Dto }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SeriesFilterV2Dto }
            output: BookmarkDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SeriesFilterV2Dto }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/remove-bookmarks': {
      $post: {
        input: { json: RemoveBookmarkForSeriesDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/bulk-remove-bookmarks': {
      $post: {
        input: { json: BulkRemoveBookmarkForSeriesDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/volume-bookmarks': {
      $get:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/series-bookmarks': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: BookmarkDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/bookmark': {
      $post: { input: { json: BookmarkDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/unbookmark': {
      $post: { input: { json: BookmarkDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Reader/next-chapter': {
      $get:
        | {
            input: {
              query: {
                seriesId?: number | undefined
                volumeId?: number | undefined
                currentChapterId?: number | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                volumeId?: number | undefined
                currentChapterId?: number | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                volumeId?: number | undefined
                currentChapterId?: number | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/prev-chapter': {
      $get:
        | {
            input: {
              query: {
                seriesId?: number | undefined
                volumeId?: number | undefined
                currentChapterId?: number | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                volumeId?: number | undefined
                currentChapterId?: number | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                volumeId?: number | undefined
                currentChapterId?: number | undefined
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/time-left': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: HourEstimateRangeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: HourEstimateRangeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: HourEstimateRangeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/time-left-for-chapter': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined; chapterId?: number | undefined } }
            output: HourEstimateRangeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; chapterId?: number | undefined } }
            output: HourEstimateRangeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; chapterId?: number | undefined } }
            output: HourEstimateRangeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/ptoc': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: PersonalToCDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: PersonalToCDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: PersonalToCDto[]
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: {
          query: {
            chapterId?: number | undefined
            pageNum?: number | undefined
            title?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/create-ptoc': {
      $post: {
        input: { json: CreatePersonalToCDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Reader/prompt-reread/series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined; libraryId?: number | undefined } }
            output: RereadDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; libraryId?: number | undefined } }
            output: RereadDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; libraryId?: number | undefined } }
            output: RereadDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/prompt-reread/volume': {
      $get:
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                volumeId?: number | undefined
              }
            }
            output: RereadDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                volumeId?: number | undefined
              }
            }
            output: RereadDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                volumeId?: number | undefined
              }
            }
            output: RereadDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/prompt-reread/chapter': {
      $get:
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                chapterId?: number | undefined
              }
            }
            output: RereadDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                chapterId?: number | undefined
              }
            }
            output: RereadDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                chapterId?: number | undefined
              }
            }
            output: RereadDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Reader/first-progress-date': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListDto
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { query: { readingListId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/lists': {
      $post:
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                includePromoted?: boolean | undefined
                sortByLastModified?: boolean | undefined
              }
            }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                includePromoted?: boolean | undefined
                sortByLastModified?: boolean | undefined
              }
            }
            output: ReadingListDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                includePromoted?: boolean | undefined
                sortByLastModified?: boolean | undefined
              }
            }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/all': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ReadingListFilterDto
            }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ReadingListFilterDto
            }
            output: ReadingListDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ReadingListFilterDto
            }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/lists-for-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ReadingListDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/lists-for-chapter': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ReadingListDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ReadingListDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/items': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListItemDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/update-position': {
      $post: {
        input: { json: UpdateReadingListPosition }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/delete-item': {
      $post: {
        input: { json: UpdateReadingListPosition }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/remove-read': {
      $post: {
        input: { query: { readingListId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/create': {
      $post:
        | {
            input: { json: CreateReadingListDto }
            output: ReadingListDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateReadingListDto }
            output: ReadingListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateReadingListDto }
            output: ReadingListDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/update': {
      $post:
        | {
            input: { json: UpdateReadingListDto }
            output: ReadingListDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateReadingListDto }
            output: ReadingListDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateReadingListDto }
            output: ReadingListDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/update-by-series': {
      $post: {
        input: { json: UpdateReadingListBySeriesDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/update-by-multiple': {
      $post: {
        input: { json: UpdateReadingListByMultipleDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/update-by-multiple-series': {
      $post: {
        input: { json: UpdateReadingListByMultipleSeriesDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/update-by-volume': {
      $post: {
        input: { json: UpdateReadingListByVolumeDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/update-by-chapter': {
      $post: {
        input: { json: UpdateReadingListByChapterDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/people': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined; role?: PersonRole | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined; role?: PersonRole | undefined } }
            output: PersonDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined; role?: PersonRole | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/all-people': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: PersonDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: PersonDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/next-chapter': {
      $get:
        | {
            input: {
              query: { currentChapterId?: number | undefined; readingListId?: number | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { currentChapterId?: number | undefined; readingListId?: number | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { currentChapterId?: number | undefined; readingListId?: number | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/prev-chapter': {
      $get:
        | {
            input: {
              query: { currentChapterId?: number | undefined; readingListId?: number | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { currentChapterId?: number | undefined; readingListId?: number | undefined }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { currentChapterId?: number | undefined; readingListId?: number | undefined }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/name-exists': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/promote-multiple': {
      $post: {
        input: { json: PromoteReadingListsDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/delete-multiple': {
      $post: {
        input: { json: DeleteReadingListsDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/info': {
      $get:
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { readingListId?: number | undefined } }
            output: ReadingListInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ReadingList/export-as-cbl': {
      $post: {
        input: { query: { readingListId?: number | undefined; asV2?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/ReadingList/regenerate-cover': {
      $post: {
        input: { query: { readingListId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/reading-profile/all': {
      $get:
        | { input: {}; output: UserReadingProfileDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserReadingProfileDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserReadingProfileDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/reading-profile/:libraryId/:seriesId': {
      $get:
        | {
            input: { param: { libraryId: number; seriesId: number } } & {
              query: { skipImplicit?: boolean | undefined; deviceId?: number | undefined }
            }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { libraryId: number; seriesId: number } } & {
              query: { skipImplicit?: boolean | undefined; deviceId?: number | undefined }
            }
            output: UserReadingProfileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { libraryId: number; seriesId: number } } & {
              query: { skipImplicit?: boolean | undefined; deviceId?: number | undefined }
            }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/reading-profile/series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: UserReadingProfileDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: UserReadingProfileDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: UserReadingProfileDto[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                deviceId?: number | undefined
              }
            } & { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                deviceId?: number | undefined
              }
            } & { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                deviceId?: number | undefined
              }
            } & { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/reading-profile/library': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: UserReadingProfileDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: UserReadingProfileDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: UserReadingProfileDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/reading-profile/create': {
      $post:
        | {
            input: { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/reading-profile/promote': {
      $post:
        | {
            input: { query: { profileId?: number | undefined; deviceId?: number | undefined } }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { profileId?: number | undefined; deviceId?: number | undefined } }
            output: UserReadingProfileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { profileId?: number | undefined; deviceId?: number | undefined } }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/reading-profile/update-parent': {
      $post:
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                deviceId?: number | undefined
              }
            } & { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                deviceId?: number | undefined
              }
            } & { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                libraryId?: number | undefined
                seriesId?: number | undefined
                deviceId?: number | undefined
              }
            } & { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/reading-profile': {
      $post:
        | {
            input: { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserReadingProfileDto }
            output: UserReadingProfileDto
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { query: { profileId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/reading-profile/series/:seriesId': {
      $post: {
        input: { param: { seriesId: number } } & { json: number[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { seriesId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/reading-profile/library/:libraryId': {
      $post: {
        input: { param: { libraryId: number } } & { json: number[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { libraryId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/reading-profile/bulk': {
      $post: {
        input: { json: BulkSetSeriesProfiles }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/reading-profile/set-devices': {
      $post: {
        input: { query: { profileId?: number | undefined } } & { json: number[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Review/series': {
      $post:
        | {
            input: { json: UpdateUserReviewDto }
            output: UserReviewDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateUserReviewDto }
            output: UserReviewDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateUserReviewDto }
            output: UserReviewDto
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { query: { seriesId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Review/chapter': {
      $post:
        | {
            input: { json: UpdateUserReviewDto }
            output: UserReviewDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateUserReviewDto }
            output: UserReviewDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateUserReviewDto }
            output: UserReviewDto
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { query: { chapterId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Review/all': {
      $get:
        | {
            input: {
              query: {
                userId?: number | undefined
                rating?: number | undefined
                filterQuery?: string | undefined
              }
            }
            output: UserReviewExtendedDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: number | undefined
                rating?: number | undefined
                filterQuery?: string | undefined
              }
            }
            output: UserReviewExtendedDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: number | undefined
                rating?: number | undefined
                filterQuery?: string | undefined
              }
            }
            output: UserReviewExtendedDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Review/my-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: UserRatingAndReviewDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: UserRatingAndReviewDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: UserRatingAndReviewDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Scrobbling/scrobble-settings': {
      $get:
        | { input: {}; output: ScrobbleProviderDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ScrobbleProviderDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ScrobbleProviderDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Scrobbling/update-scrobble-settings': {
      $post: {
        input: { query: { provider?: ScrobbleProvider | undefined } } & {
          json: ScrobbleProviderSettingsDto
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Scrobbling/update-user-scrobble-provider': {
      $post: {
        input: { json: UpdateScrobbleProviderDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Scrobbling/generate-scrobble-events': {
      $post: {
        input: { query: { scrobbleProvider?: ScrobbleProvider | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Scrobbling/generate-scrobble-events-all': {
      $post:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Scrobbling/token-expired': {
      $get:
        | {
            input: { query: { provider?: ScrobbleProvider | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { provider?: ScrobbleProvider | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { provider?: ScrobbleProvider | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Scrobbling/expired-tokens': {
      $get:
        | { input: {}; output: ScrobbleProvider[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ScrobbleProvider[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ScrobbleProvider[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Scrobbling/scrobble-errors': {
      $get:
        | { input: {}; output: ScrobbleErrorDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ScrobbleErrorDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ScrobbleErrorDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Scrobbling/clear-errors': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Scrobbling/scrobble-events': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ScrobbleEventFilter
            }
            output: ScrobbleEventDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ScrobbleEventFilter
            }
            output: ScrobbleEventDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: ScrobbleEventFilter
            }
            output: ScrobbleEventDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Scrobbling/holds': {
      $get:
        | { input: {}; output: ScrobbleHoldDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ScrobbleHoldDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ScrobbleHoldDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Scrobbling/has-hold': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Scrobbling/library-allows-scrobbling': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Scrobbling/add-hold': {
      $post: {
        input: { query: { seriesId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Scrobbling/remove-hold': {
      $delete: {
        input: { query: { seriesId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Scrobbling/bulk-remove-events': {
      $post: { input: { json: bigint[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Scrobbling/remove-error/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Scrobbling/retry-scrobble': {
      $post:
        | {
            input: { json: KavitaPlusAuditEntryDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: KavitaPlusAuditEntryDto }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: KavitaPlusAuditEntryDto }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Scrobbling/next-scrobble-time': {
      $get:
        | { input: {}; output: string | null; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string | null; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string | null; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Search/series-for-mangafile': {
      $get:
        | {
            input: { query: { mangaFileId?: number | undefined } }
            output: SeriesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { mangaFileId?: number | undefined } }
            output: SeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { mangaFileId?: number | undefined } }
            output: SeriesDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Search/series-for-chapter': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: SeriesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: SeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: SeriesDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Search/search': {
      $get:
        | {
            input: {
              query: {
                queryString?: string | undefined
                includeChapterAndFiles?: boolean | undefined
              }
            }
            output: SearchResultGroupDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                queryString?: string | undefined
                includeChapterAndFiles?: boolean | undefined
              }
            }
            output: SearchResultGroupDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                queryString?: string | undefined
                includeChapterAndFiles?: boolean | undefined
              }
            }
            output: SearchResultGroupDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Search/chapters-by-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ChapterDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ChapterDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: ChapterDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/v2': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: SeriesFilterV2Dto
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: SeriesFilterV2Dto
            }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: SeriesFilterV2Dto
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/:seriesId': {
      $get:
        | {
            input: { param: { seriesId: number } }
            output: SeriesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: number } }
            output: SeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: number } }
            output: SeriesDto
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { seriesId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: number } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: number } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/delete-multiple': {
      $post: { input: { json: DeleteSeriesDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Series/volumes': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: VolumeDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: VolumeDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: VolumeDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/volume': {
      $get:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: VolumeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: VolumeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: VolumeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/chapter': {
      $get:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: ChapterDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/update': {
      $post:
        | { input: { json: UpdateSeriesDto }; output: SeriesDto; outputFormat: 'text'; status: 200 }
        | { input: { json: UpdateSeriesDto }; output: SeriesDto; outputFormat: 'json'; status: 200 }
        | { input: { json: UpdateSeriesDto }; output: SeriesDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Series/recently-added-v2': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: SeriesFilterV2Dto
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: SeriesFilterV2Dto
            }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } } & {
              json: SeriesFilterV2Dto
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/recently-updated-series': {
      $post:
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } }
            output: GroupedSeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } }
            output: GroupedSeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PageNumber?: number | undefined; PageSize?: number | undefined } }
            output: GroupedSeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/all-v2': {
      $post:
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
                context?: QueryContext | undefined
              }
            } & { json: SeriesFilterV2Dto }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
                context?: QueryContext | undefined
              }
            } & { json: SeriesFilterV2Dto }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
                context?: QueryContext | undefined
              }
            } & { json: SeriesFilterV2Dto }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/on-deck': {
      $post:
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                libraryId?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                libraryId?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                libraryId?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/remove-from-on-deck': {
      $post: {
        input: { query: { seriesId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Series/currently-reading': {
      $get:
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/refresh-metadata': {
      $post: { input: { json: RefreshSeriesDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Series/scan': {
      $post: { input: { json: RefreshSeriesDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Series/analyze': {
      $post: { input: { json: RefreshSeriesDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Series/metadata': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: SeriesMetadataDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: SeriesMetadataDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: SeriesMetadataDto
            outputFormat: 'text'
            status: 200
          }
      $post: {
        input: { json: UpdateSeriesMetadataDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Series/series-by-collection': {
      $get:
        | {
            input: {
              query: {
                collectionId?: number | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                collectionId?: number | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                collectionId?: number | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/series-by-ids': {
      $post:
        | {
            input: { json: SeriesByIdsDto }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SeriesByIdsDto }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SeriesByIdsDto }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/age-rating': {
      $get:
        | {
            input: { query: { ageRating?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ageRating?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ageRating?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/series-detail': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: SeriesDetailDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: SeriesDetailDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: SeriesDetailDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/related': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined; relation?: RelationKind | undefined } }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; relation?: RelationKind | undefined } }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined; relation?: RelationKind | undefined } }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/all-related': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: RelatedSeriesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: RelatedSeriesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: RelatedSeriesDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/update-related': {
      $post: {
        input: { json: UpdateRelatedSeriesDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Series/external-series-detail': {
      $get:
        | {
            input: {
              query: {
                seriesId?: number | undefined
                aniListId?: number | undefined
                malId?: bigint | undefined
                mangaBakaId?: number | undefined
                hardcoverId?: number | undefined
                recommendedSeriesId?: number | undefined
              }
            }
            output: ExternalSeriesDetailDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                aniListId?: number | undefined
                malId?: bigint | undefined
                mangaBakaId?: number | undefined
                hardcoverId?: number | undefined
                recommendedSeriesId?: number | undefined
              }
            }
            output: ExternalSeriesDetailDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                aniListId?: number | undefined
                malId?: bigint | undefined
                mangaBakaId?: number | undefined
                hardcoverId?: number | undefined
                recommendedSeriesId?: number | undefined
              }
            }
            output: ExternalSeriesDetailDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/next-expected': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: NextExpectedChapterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: NextExpectedChapterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: NextExpectedChapterDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/match': {
      $post:
        | {
            input: { json: MatchSeriesDto }
            output: MatchSeriesResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MatchSeriesDto }
            output: MatchSeriesResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MatchSeriesDto }
            output: MatchSeriesResultDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/update-match': {
      $post: {
        input: {
          query: { seriesId?: number | undefined; provider?: MetadataProvider | undefined }
        } & { json: ExternalMetadataIdsDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Series/dont-match': {
      $post: {
        input: { query: { seriesId?: number | undefined; dontMatch?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Series/match-info': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: MatchSeriesInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: MatchSeriesInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: MatchSeriesInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Series/series-with-annotations': {
      $get:
        | { input: {}; output: SeriesDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SeriesDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SeriesDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Server/clear-cache': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/cleanup-want-to-read': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/cleanup': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/Server/backup-db': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/Server/analyze-files': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/server-info-slim': {
      $get:
        | { input: {}; output: ServerInfoSlimDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerInfoSlimDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerInfoSlimDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Server/convert-media': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/logs': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/Server/debug-export': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/debug-export/:exportId': {
      $get: {
        input: { param: { exportId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Server/check-for-updates': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/check-update': {
      $get:
        | {
            input: { query: { forceRefresh?: boolean | undefined } }
            output: UpdateNotificationDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { forceRefresh?: boolean | undefined } }
            output: UpdateNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { forceRefresh?: boolean | undefined } }
            output: UpdateNotificationDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Server/check-out-of-date': {
      $get:
        | {
            input: { query: { stableOnly?: boolean | undefined } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { stableOnly?: boolean | undefined } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { stableOnly?: boolean | undefined } }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Server/changelog': {
      $get:
        | {
            input: { query: { count?: number | undefined } }
            output: UpdateNotificationDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { count?: number | undefined } }
            output: UpdateNotificationDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { count?: number | undefined } }
            output: UpdateNotificationDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Server/jobs': {
      $get:
        | { input: {}; output: JobDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: JobDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: JobDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Server/activity': {
      $get:
        | { input: {}; output: ActivitySnapshotDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ActivitySnapshotDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ActivitySnapshotDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Server/media-errors': {
      $get:
        | { input: {}; output: MediaErrorDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MediaErrorDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MediaErrorDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Server/media-errors/dismiss': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/media-errors/undismiss': {
      $post: { input: { json: number[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/media-errors-for-series': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: MediaErrorDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: MediaErrorDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: MediaErrorDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Server/clear-media-alerts': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/bust-kavitaplus-cache': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/sync-themes': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Server/is-task-running': {
      $get:
        | {
            input: { query: { methodName?: string | undefined; queue?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { methodName?: string | undefined; queue?: string | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { methodName?: string | undefined; queue?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/base-url': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings': {
      $get:
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: ServerSettingDto }
            output: ServerSettingDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ServerSettingDto }
            output: ServerSettingDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ServerSettingDto }
            output: ServerSettingDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/reset': {
      $post:
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/reset-ip-addresses': {
      $post:
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/reset-base-url': {
      $post:
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerSettingDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/is-email-setup': {
      $get:
        | {
            input: { query: { forDevice?: boolean | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { forDevice?: boolean | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { forDevice?: boolean | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/task-frequencies': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/library-types': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/log-levels': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/opds-enabled': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/kobo-enabled': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/kepubify-supported': {
      $get:
        | { input: {}; output: KepubifyStatusDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KepubifyStatusDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KepubifyStatusDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/kepubify': {
      $post:
        | {
            input: { json: UpdateKepubifyDto }
            output: KepubifyStatusDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateKepubifyDto }
            output: KepubifyStatusDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateKepubifyDto }
            output: KepubifyStatusDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/is-valid-cron': {
      $get:
        | {
            input: { query: { cronExpression?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { cronExpression?: string | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cronExpression?: string | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/test-email-url': {
      $post:
        | { input: {}; output: EmailTestResultDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: EmailTestResultDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: EmailTestResultDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/metadata-settings': {
      $get:
        | { input: {}; output: MetadataSettingsDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MetadataSettingsDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MetadataSettingsDto; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { json: MetadataSettingsDto }
            output: MetadataSettingsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MetadataSettingsDto }
            output: MetadataSettingsDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetadataSettingsDto }
            output: MetadataSettingsDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/run-metadata-mappings': {
      $post: {
        input: { json: RunMetadataMappingsRequestDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Settings/import-field-mappings': {
      $post:
        | {
            input: { json: ImportFieldMappingsDto }
            output: FieldMappingsImportResultDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ImportFieldMappingsDto }
            output: FieldMappingsImportResultDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImportFieldMappingsDto }
            output: FieldMappingsImportResultDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Settings/oidc': {
      $get:
        | { input: {}; output: OidcPublicConfigDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: OidcPublicConfigDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: OidcPublicConfigDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Settings/reset-external-ids': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Settings/is-valid-authority': {
      $post:
        | {
            input: { json: AuthorityValidationDto }
            output: AuthorityValidationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorityValidationDto }
            output: AuthorityValidationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorityValidationDto }
            output: AuthorityValidationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/server/stats': {
      $get:
        | { input: {}; output: ServerStatisticsDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ServerStatisticsDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServerStatisticsDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/server/count/publication-status': {
      $get:
        | { input: {}; output: PublicationStatusStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: PublicationStatusStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PublicationStatusStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/server/count/manga-format': {
      $get:
        | { input: {}; output: MangaFormatStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MangaFormatStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MangaFormatStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-decades': {
      $get:
        | { input: {}; output: StatBucketDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: StatBucketDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StatBucketDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-libraries': {
      $get:
        | { input: {}; output: LibraryDtoStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LibraryDtoStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LibraryDtoStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-series': {
      $get:
        | { input: {}; output: SeriesDtoStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SeriesDtoStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SeriesDtoStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-reading-list': {
      $get:
        | { input: {}; output: SeriesDtoStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SeriesDtoStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SeriesDtoStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-genres': {
      $get:
        | { input: {}; output: GenreTagDtoStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: GenreTagDtoStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GenreTagDtoStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-tags': {
      $get:
        | { input: {}; output: TagDtoStatCount[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TagDtoStatCount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TagDtoStatCount[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/popular-people': {
      $get:
        | {
            input: { query: { role?: PersonRole | undefined } }
            output: PersonDtoStatCount[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { role?: PersonRole | undefined } }
            output: PersonDtoStatCount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { role?: PersonRole | undefined } }
            output: PersonDtoStatCount[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/most-active-users': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
              }
            }
            output: TopReadDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
              }
            }
            output: TopReadDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
              }
            }
            output: TopReadDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/server/file-breakdown': {
      $get:
        | { input: {}; output: FileExtensionBreakdownDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: FileExtensionBreakdownDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: FileExtensionBreakdownDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/server/file-extension': {
      $get: {
        input: { query: { fileExtension?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Stats/reading-counts': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: DateTimeStatCountWithFormat[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: DateTimeStatCountWithFormat[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: DateTimeStatCountWithFormat[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/day-breakdown': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: DayOfWeekStatCount[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: DayOfWeekStatCount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: DayOfWeekStatCount[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/pages-per-year': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: Int32StatCount[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: Int32StatCount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: Int32StatCount[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/words-per-year': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: Int32StatCount[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: Int32StatCount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: Int32StatCount[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/files-added-over-time': {
      $get:
        | { input: {}; output: DateTimeStatCountWithFormat[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DateTimeStatCountWithFormat[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DateTimeStatCountWithFormat[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/device/client-type': {
      $get:
        | { input: {}; output: DeviceClientBreakdownDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DeviceClientBreakdownDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DeviceClientBreakdownDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/device/device-type': {
      $get:
        | { input: {}; output: StringStatCount; outputFormat: 'text'; status: 200 }
        | { input: {}; output: StringStatCount; outputFormat: 'json'; status: 200 }
        | { input: {}; output: StringStatCount; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stats/reading-activity': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
                year?: number | undefined
              }
            }
            output: { [x: string]: ReadingActivityGraphEntryDto }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
                year?: number | undefined
              }
            }
            output: { [x: string]: ReadingActivityGraphEntryDto }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
                year?: number | undefined
              }
            }
            output: { [x: string]: ReadingActivityGraphEntryDto }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/reading-pace': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
                year?: number | undefined
                booksOnly?: boolean | undefined
              }
            }
            output: ReadingPaceDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
                year?: number | undefined
                booksOnly?: boolean | undefined
              }
            }
            output: ReadingPaceDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
                year?: number | undefined
                booksOnly?: boolean | undefined
              }
            }
            output: ReadingPaceDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/genre-breakdown': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: StringBreakDownDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: StringBreakDownDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: StringBreakDownDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/tag-breakdown': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: StringBreakDownDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: StringBreakDownDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: StringBreakDownDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/page-spread': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: SpreadStatsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: SpreadStatsDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: SpreadStatsDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/word-spread': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: SpreadStatsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: SpreadStatsDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: SpreadStatsDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/favorite-authors': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: MostReadAuthorsDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: MostReadAuthorsDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: MostReadAuthorsDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/avg-time-by-hour': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: ReadTimeByHourDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: ReadTimeByHourDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: ReadTimeByHourDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/reads-by-month': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: YearMonthGroupingDtoStatCount[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: YearMonthGroupingDtoStatCount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: YearMonthGroupingDtoStatCount[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/total-reads': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/user-stats': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: ProfileStatBarDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: ProfileStatBarDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                userId?: number | undefined
              }
            }
            output: ProfileStatBarDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/user-read': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: UserReadStatistics
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: UserReadStatistics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: UserReadStatistics
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/reading-history': {
      $get:
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: ReadingHistoryItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: ReadingHistoryItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                StartDate?: string | undefined
                TimeZoneId?: string | undefined
                EndDate?: string | undefined
                Libraries?: number[] | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: ReadingHistoryItemDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stats/reading-history/series/:seriesId': {
      $get:
        | {
            input: { param: { seriesId: number } } & {
              query: {
                tzId?: string | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: ReadingHistoryItemDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { seriesId: number } } & {
              query: {
                tzId?: string | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: ReadingHistoryItemDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { seriesId: number } } & {
              query: {
                tzId?: string | undefined
                PageNumber?: number | undefined
                PageSize?: number | undefined
              }
            }
            output: ReadingHistoryItemDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/dashboard': {
      $get:
        | {
            input: { query: { visibleOnly?: boolean | undefined } }
            output: DashboardStreamDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { visibleOnly?: boolean | undefined } }
            output: DashboardStreamDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { visibleOnly?: boolean | undefined } }
            output: DashboardStreamDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/sidenav': {
      $get:
        | {
            input: { query: { visibleOnly?: boolean | undefined } }
            output: SideNavStreamDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { visibleOnly?: boolean | undefined } }
            output: SideNavStreamDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { visibleOnly?: boolean | undefined } }
            output: SideNavStreamDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/external-sources': {
      $get:
        | { input: {}; output: ExternalSourceDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ExternalSourceDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ExternalSourceDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stream/create-external-source': {
      $post:
        | {
            input: { json: ExternalSourceDto }
            output: ExternalSourceDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ExternalSourceDto }
            output: ExternalSourceDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExternalSourceDto }
            output: ExternalSourceDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/update-external-source': {
      $post:
        | {
            input: { json: ExternalSourceDto }
            output: ExternalSourceDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ExternalSourceDto }
            output: ExternalSourceDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExternalSourceDto }
            output: ExternalSourceDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/external-source-exists': {
      $post:
        | { input: { json: ExternalSourceDto }; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: { json: ExternalSourceDto }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: ExternalSourceDto }; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Stream/delete-external-source': {
      $delete: {
        input: { query: { externalSourceId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Stream/add-dashboard-stream': {
      $post:
        | {
            input: { query: { smartFilterId?: number | undefined } }
            output: DashboardStreamDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { smartFilterId?: number | undefined } }
            output: DashboardStreamDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { smartFilterId?: number | undefined } }
            output: DashboardStreamDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/update-dashboard-stream': {
      $post: { input: { json: DashboardStreamDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Stream/update-dashboard-position': {
      $post: {
        input: { json: UpdateStreamPositionDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Stream/add-sidenav-stream': {
      $post:
        | {
            input: { query: { smartFilterId?: number | undefined } }
            output: SideNavStreamDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { smartFilterId?: number | undefined } }
            output: SideNavStreamDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { smartFilterId?: number | undefined } }
            output: SideNavStreamDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/add-sidenav-stream-from-external-source': {
      $post:
        | {
            input: { query: { externalSourceId?: number | undefined } }
            output: SideNavStreamDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { externalSourceId?: number | undefined } }
            output: SideNavStreamDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { externalSourceId?: number | undefined } }
            output: SideNavStreamDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Stream/update-sidenav-stream': {
      $post: { input: { json: SideNavStreamDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Stream/update-sidenav-position': {
      $post: {
        input: { json: UpdateStreamPositionDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Stream/bulk-sidenav-stream-visibility': {
      $post: {
        input: { json: BulkUpdateSideNavStreamVisibilityDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Stream/smart-filter-side-nav-stream': {
      $delete: {
        input: { query: { sideNavStreamId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Stream/smart-filter-dashboard-stream': {
      $delete: {
        input: { query: { dashboardStreamId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Tachiyomi/latest-chapter': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: TachiyomiChapterDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: TachiyomiChapterDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: TachiyomiChapterDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Tachiyomi/mark-chapter-until-as-read': {
      $post:
        | {
            input: {
              query: {
                seriesId?: number | undefined
                chapterNumber?: number | undefined
                generateReadingSessions?: boolean | undefined
              }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                chapterNumber?: number | undefined
                generateReadingSessions?: boolean | undefined
              }
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                seriesId?: number | undefined
                chapterNumber?: number | undefined
                generateReadingSessions?: boolean | undefined
              }
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Theme': {
      $get:
        | { input: {}; output: SiteThemeDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SiteThemeDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SiteThemeDto[]; outputFormat: 'text'; status: 200 }
      $delete:
        | {
            input: { query: { themeId?: number | undefined } }
            output: DownloadableSiteThemeDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { themeId?: number | undefined } }
            output: DownloadableSiteThemeDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { themeId?: number | undefined } }
            output: DownloadableSiteThemeDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Theme/update-default': {
      $post: {
        input: { json: UpdateDefaultThemeDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Theme/download-content': {
      $get:
        | {
            input: { query: { themeId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { themeId?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { themeId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Theme/browse': {
      $get:
        | { input: {}; output: DownloadableSiteThemeDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DownloadableSiteThemeDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DownloadableSiteThemeDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Theme/download-theme': {
      $post:
        | {
            input: { json: DownloadableSiteThemeDto }
            output: SiteThemeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DownloadableSiteThemeDto }
            output: SiteThemeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DownloadableSiteThemeDto }
            output: SiteThemeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Theme/upload-theme': {
      $post:
        | {
            input: { form: { formFile?: File | undefined } }
            output: SiteThemeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { formFile?: File | undefined } }
            output: SiteThemeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { formFile?: File | undefined } }
            output: SiteThemeDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Upload/upload-by-url': {
      $post:
        | { input: { json: UploadUrlDto }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { json: UploadUrlDto }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: UploadUrlDto }; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Upload/upload-chapter-cover': {
      $post:
        | {
            input: { query: { chapterId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chapterId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Upload/upload-volume-cover': {
      $post:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Upload/upload-series-cover': {
      $post:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Upload/upload-by-file': {
      $post:
        | {
            input: { form: { file?: File | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file?: File | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file?: File | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Upload/series': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/collection': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/reading-list': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/chapter': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/volume': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/library': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/person': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Upload/user': {
      $post: { input: { json: UploadCoverFileDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/Users/delete-user': {
      $delete: {
        input: { query: { userId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Users': {
      $get:
        | {
            input: { query: { includePending?: boolean | undefined } }
            output: MemberDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { includePending?: boolean | undefined } }
            output: MemberDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { includePending?: boolean | undefined } }
            output: MemberDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Users/profile-info': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: MemberInfoDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: MemberInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: MemberInfoDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Users/has-profile-shared': {
      $get:
        | {
            input: { query: { userId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Users/has-reading-progress': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Users/has-library-access': {
      $get:
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { libraryId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Users/update-preferences': {
      $post:
        | {
            input: { json: UserPreferencesDto }
            output: UserPreferencesDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UserPreferencesDto }
            output: UserPreferencesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserPreferencesDto }
            output: UserPreferencesDto
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Users/get-preferences': {
      $get:
        | { input: {}; output: UserPreferencesDto; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserPreferencesDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserPreferencesDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Users/kobo-sync-points': {
      $get:
        | { input: {}; output: KoboSyncPointDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: KoboSyncPointDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KoboSyncPointDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Users/kobo-sync-point': {
      $delete: {
        input: { query: { syncPointId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Users/kobo-sync-point/undo-remove-books': {
      $post: {
        input: { json: UndoKoboRemoveBookDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/Users/names': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Users/tokens': {
      $get:
        | { input: {}; output: UserTokenInfoDto[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UserTokenInfoDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UserTokenInfoDto[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Volume': {
      $get:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: VolumeDto
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: VolumeDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: VolumeDto
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { query: { volumeId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { volumeId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Volume/update': {
      $post:
        | { input: { json: UpdateVolumeDto }; output: VolumeDto; outputFormat: 'text'; status: 200 }
        | { input: { json: UpdateVolumeDto }; output: VolumeDto; outputFormat: 'json'; status: 200 }
        | { input: { json: UpdateVolumeDto }; output: VolumeDto; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Volume/multiple': {
      $post:
        | { input: { json: number[] }; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: { json: number[] }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: number[] }; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/want-to-read/v2': {
      $post:
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
              }
            } & { json: SeriesFilterV2Dto }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
              }
            } & { json: SeriesFilterV2Dto }
            output: SeriesDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                PageNumber?: number | undefined
                PageSize?: number | undefined
                userId?: number | undefined
              }
            } & { json: SeriesFilterV2Dto }
            output: SeriesDto[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/want-to-read': {
      $get:
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seriesId?: number | undefined } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/want-to-read/add-series': {
      $post: { input: { json: UpdateWantToReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/want-to-read/remove-series': {
      $post: { input: { json: UpdateWantToReadDto }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
