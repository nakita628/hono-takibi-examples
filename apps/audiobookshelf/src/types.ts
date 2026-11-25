type AuthorIdInput = string
type AuthorId = string
type AuthorAsin = string | null
type AuthorName = string
type AuthorDescription = string | null
type AuthorImagePath = string | null
type AddedAt = number
type UpdatedAt = number
type LibraryItemId = string
type OldLibraryItemId = string | null
type Inode = string
type LibraryId = string
type FolderId = string
type MediaType = 'book' | 'podcast'
type LibraryItemBase = {
  id?: LibraryItemId | undefined
  oldLibraryItemId?: OldLibraryItemId | undefined
  ino?: Inode | undefined
  libraryId?: LibraryId | undefined
  folderId?: FolderId | undefined
  path?: string | undefined
  relPath?: string | undefined
  isFile?: boolean | undefined
  mtimeMs?: number | undefined
  ctimeMs?: number | undefined
  birthtimeMs?: number | undefined
  addedAt?: AddedAt | undefined
  updatedAt?: UpdatedAt | undefined
  isMissing?: boolean | undefined
  isInvalid?: boolean | undefined
  mediaType?: MediaType | undefined
}
type BookMetadataBase = {
  title?: (string | null) | undefined
  subtitle?: (string | null) | undefined
  genres?: string[] | undefined
  publishedYear?: (string | null) | undefined
  publishedDate?: (string | null) | undefined
  publisher?: (string | null) | undefined
  description?: (string | null) | undefined
  isbn?: (string | null) | undefined
  asin?: (string | null) | undefined
  language?: (string | null) | undefined
  explicit?: boolean | undefined
}
type BookMetadataMinified = BookMetadataBase & {
  titleIgnorePrefix?: string | undefined
  authorName?: string | undefined
  authorNameLF?: string | undefined
  narratorName?: string | undefined
  seriesName?: string | undefined
}
type BookCoverPath = string | null
type Tags = string[]
type DurationSec = number
type Size = number
type BookMinified = {
  metadata?: BookMetadataMinified | undefined
  coverPath?: BookCoverPath | undefined
  tags?: Tags | undefined
  numTracks?: number | undefined
  numAudioFiles?: number | undefined
  numChapters?: number | undefined
  numMissingParts?: number | undefined
  numInvalidAudioFiles?: number | undefined
  duration?: DurationSec | undefined
  size?: Size | undefined
  ebookFormat?: (string | null) | undefined
}
type MediaMinified = BookMinified
type LibraryItemMinified = LibraryItemBase & { media?: MediaMinified | undefined }
type SeriesId = string
type SeriesName = string
type AuthorSeries = {
  id?: SeriesId | undefined
  name?: SeriesName | undefined
  items?: LibraryItemMinified[] | undefined
}
type Author = {
  id?: AuthorId | undefined
  asin?: AuthorAsin | undefined
  name?: AuthorName | undefined
  description?: AuthorDescription | undefined
  imagePath?: AuthorImagePath | undefined
  addedAt?: AddedAt | undefined
  updatedAt?: UpdatedAt | undefined
  libraryItems?: LibraryItemMinified[] | undefined
  series?: AuthorSeries[] | undefined
}
type AuthorNameInput = string
type AuthorDescriptionInput = string | null
type AuthorImagePathInput = string | null
type AuthorAsinInput = string | null
type AuthorUpdated = boolean | null
type AuthorMerged = boolean | null
type ImageWidthInput = number
type ImageHeightInput = number | null
type ImageFormatInput = string
type ImageRawInput = boolean
type ImageUrlInput = string
type AuthorSearchNameInput = string
type RegionInput = string
type EreaderName = string
type EreaderDeviceObject = {
  name: EreaderName
  email: string
  availabilityOption: 'adminOrUp' | 'userOrUp' | 'guestOrUp' | 'specificUsers'
  users?: string[] | undefined
}
type EmailSettings = {
  id: string
  host?: (string | null) | undefined
  port: number
  secure: boolean
  rejectUnauthorized?: boolean | undefined
  user?: (string | null) | undefined
  pass?: (string | null) | undefined
  testAddress?: (string | null) | undefined
  fromAddress?: (string | null) | undefined
  ereaderDevices: EreaderDeviceObject[]
}
type EreaderNameInput = string
type EreaderDeviceObjectInput = {
  name: EreaderNameInput
  email: string
  availabilityOption: 'adminOrUp' | 'userOrUp' | 'guestOrUp' | 'specificUsers'
  users?: string[]
}
type EmailSettingsInput = {
  id: string
  host?: string | null
  port: number
  secure: boolean
  rejectUnauthorized?: boolean
  user?: string | null
  pass?: string | null
  testAddress?: string | null
  fromAddress?: string | null
  ereaderDevices: EreaderDeviceObjectInput[]
}
type LibraryItemIdInput = string
type LibraryName = string
type Folder = {
  id?: FolderId | undefined
  fullPath?: string | undefined
  libraryId?: LibraryId | undefined
  addedAt?: AddedAt | undefined
}
type LibrarySettings = {
  coverAspectRatio?: number | undefined
  disableWatcher?: boolean | undefined
  skipMatchingMediaWithAsin?: boolean | undefined
  skipMatchingMediaWithIsbn?: boolean | undefined
  autoScanCronExpression?: (string | null) | undefined
  audiobooksOnly?: boolean | undefined
  hideSingleBookSeries?: boolean | undefined
  onlyShowLaterBooksInContinueSeries?: boolean | undefined
  metadataPrecedence?: string[] | undefined
  podcastSearchRegion?: string | undefined
}
type CreatedAt = number
type Library = {
  id?: LibraryId | undefined
  name?: LibraryName | undefined
  folders?: Folder[] | undefined
  displayOrder?: number | undefined
  icon?: string | undefined
  mediaType?: string | undefined
  provider?: string | undefined
  settings?: LibrarySettings | undefined
  createdAt?: CreatedAt | undefined
  lastUpdate?: UpdatedAt | undefined
}
type LibraryNameInput = string
type FolderIdInput = string
type LibraryIdInput = string
type AddedAtInput = number
type FolderInput = {
  id?: FolderIdInput
  fullPath?: string
  libraryId?: LibraryIdInput
  addedAt?: AddedAtInput
}
type LibraryFoldersInput = FolderInput[]
type LibraryDisplayOrderInput = number
type LibraryIconInput = string
type LibraryMediaTypeInput = string
type LibraryProviderInput = string
type LibrarySettingsInput = {
  coverAspectRatio?: number
  disableWatcher?: boolean
  skipMatchingMediaWithAsin?: boolean
  skipMatchingMediaWithIsbn?: boolean
  autoScanCronExpression?: string | null
  audiobooksOnly?: boolean
  hideSingleBookSeries?: boolean
  onlyShowLaterBooksInContinueSeries?: boolean
  metadataPrecedence?: string[]
  podcastSearchRegion?: string
}
type AuthorExpanded = Author & { numBooks?: number | undefined }
type Total = number
type Limit = number
type Page = number
type SortBy = string
type SortDesc = boolean
type FilterBy = string
type Minified = boolean
type CollapseSeries = boolean
type LibraryInclude = string
type Sequence = string | null
type LibraryItemSequence = LibraryItemBase & { sequence?: Sequence | undefined }
type SeriesBooks = {
  id?: SeriesId | undefined
  name?: SeriesName | undefined
  addedAt?: AddedAt | undefined
  nameIgnorePrefix?: string | undefined
  nameIgnorePrefixSort?: string | undefined
  type?: string | undefined
  books?: LibraryItemSequence[] | undefined
  totalDuration?: number | undefined
}
type SeriesIdInput = string
type SeriesDescription = string | null
type Series = {
  id?: SeriesId | undefined
  name?: SeriesName | undefined
  description?: SeriesDescription | undefined
  addedAt?: AddedAt | undefined
  updatedAt?: UpdatedAt | undefined
}
type SeriesProgress = {
  libraryItemIds?: LibraryItemId[] | undefined
  libraryItemIdsFinished?: LibraryItemId[] | undefined
  isFinished?: boolean | undefined
}
type SeriesWithProgressAndRSS =
  | Series
  | { progress?: SeriesProgress | undefined; rssFeed?: string | undefined }
type NotificationEvent = {
  name?: string | undefined
  requiresLibrary?: boolean | undefined
  libraryMediaType?: (string | null) | undefined
  description?: string | undefined
  variables?: string[] | undefined
  defaults?: { title?: string | undefined; body?: string | undefined } | undefined
  testData?: { [key: string]: string } | undefined
}
type NotificationId = string
type AppriseApiUrl = string | null
type LibraryIdNullable = string | null
type NotificationEventName =
  | 'onPodcastEpisodeDownloaded'
  | 'onBackupCompleted'
  | 'onBackupFailed'
  | 'onTest'
type Urls = string[]
type TitleTemplate = string
type BodyTemplate = string
type Enabled = boolean
type NotificationType = 'info' | 'success' | 'warning' | 'failure' | null
type Notification = {
  id?: NotificationId | undefined
  libraryId?: LibraryIdNullable | undefined
  eventName?: NotificationEventName | undefined
  urls?: Urls | undefined
  titleTemplate?: TitleTemplate | undefined
  bodyTemplate?: BodyTemplate | undefined
  enabled?: Enabled | undefined
  type?: NotificationType | undefined
  lastFiredAt?: (number | null) | undefined
  lastAttemptFailed?: boolean | undefined
  numConsecutiveFailedAttempts?: number | undefined
  numTimesFired?: number | undefined
  createdAt?: CreatedAt | undefined
}
type MaxFailedAttempts = number
type MaxNotificationQueue = number
type NotificationSettings = {
  id?: NotificationId | undefined
  appriseType?: string | undefined
  appriseApiUrl?: AppriseApiUrl | undefined
  notifications?: Notification[] | undefined
  maxFailedAttempts?: MaxFailedAttempts | undefined
  maxNotificationQueue?: MaxNotificationQueue | undefined
  notificationDelay?: number | undefined
}
type AppriseApiUrlInput = string | null
type MaxFailedAttemptsInput = number
type MaxNotificationQueueInput = number
type LibraryIdNullableInput = string | null
type NotificationEventNameInput =
  | 'onPodcastEpisodeDownloaded'
  | 'onBackupCompleted'
  | 'onBackupFailed'
  | 'onTest'
type UrlsInput = string[]
type TitleTemplateInput = string
type BodyTemplateInput = string
type EnabledInput = boolean
type NotificationTypeInput = 'info' | 'success' | 'warning' | 'failure' | null
type NotificationIdInput = string
type PodcastIdInput = string
type PodcastMetadataInput = {
  title?: string | null
  author?: string | null
  description?: string | null
  releaseDate?: string | null
  genres?: string[]
  feedUrl?: string | null
  imageUrl?: string | null
  itunesPageUrl?: string | null
  itunesId?: string | null
  itunesArtistId?: string | null
  explicit?: boolean
  language?: string | null
  type?: string | null
}
type OldPodcastIdInput = string | null
type InodeInput = string
type SizeInput = number
type FileMetadataInput = {
  filename?: string
  ext?: string
  path?: string
  relPath?: string
  size?: SizeInput
  mtimeMs?: number
  ctimeMs?: number
  birthtimeMs?: number
} | null
type UpdatedAtInput = number
type DurationSecInput = number
type BookChapterInput = { id?: number; start?: number; end?: number; title?: string }
type AudioMetaTagsInput = {
  tagAlbum?: string | null
  tagArtist?: string | null
  tagGenre?: string | null
  tagTitle?: string | null
  tagSeries?: string | null
  tagSeriesPart?: string | null
  tagTrack?: string | null
  tagDisc?: string | null
  tagSubtitle?: string | null
  tagAlbumArtist?: string | null
  tagDate?: string | null
  tagComposer?: string | null
  tagPublisher?: string | null
  tagComment?: string | null
  tagDescription?: string | null
  tagEncoder?: string | null
  tagEncodedBy?: string | null
  tagIsbn?: string | null
  tagLanguage?: string | null
  tagASIN?: string | null
  tagOverdriveMediaMarker?: string | null
  tagOriginalYear?: string | null
  tagReleaseCountry?: string | null
  tagReleaseType?: string | null
  tagReleaseStatus?: string | null
  tagISRC?: string | null
  tagMusicBrainzTrackId?: string | null
  tagMusicBrainzAlbumId?: string | null
  tagMusicBrainzAlbumArtistId?: string | null
  tagMusicBrainzArtistId?: string | null
}
type AudioFileInput = {
  index?: number
  ino?: InodeInput
  metadata?: FileMetadataInput
  addedAt?: AddedAtInput
  updatedAt?: UpdatedAtInput
  trackNumFromMeta?: number | null
  discNumFromMeta?: string | null
  trackNumFromFilename?: number | null
  discNumFromFilename?: string | null
  manuallyVerified?: boolean
  invalid?: boolean
  exclude?: boolean
  error?: string | null
  format?: string
  duration?: DurationSecInput
  bitRate?: number
  language?: string | null
  codec?: string
  timeBase?: string
  channels?: number
  channelLayout?: string
  chapters?: BookChapterInput[]
  embeddedCoverArt?: string | null
  metaTags?: AudioMetaTagsInput
  mimeType?: string
}
type CreatedAtInput = number
type AudioTrackInput = {
  index?: number | null
  startOffset?: number | null
  duration?: number | null
  title?: string | null
  contentUrl?: string | null
  mimeType?: string | null
  codec?: string | null
  metadata?: FileMetadataInput
}
type PodcastEpisodeInput = {
  libraryItemId?: LibraryItemIdInput
  podcastId?: PodcastIdInput
  id?: PodcastIdInput
  oldEpisodeId?: OldPodcastIdInput
  index?: number | null
  season?: string | null
  episode?: string | null
  episodeType?: string | null
  title?: string | null
  subtitle?: string | null
  description?: string | null
  enclosure?: { [key: string]: unknown } | null
  guid?: string | null
  pubDate?: string | null
  chapters?: { [key: string]: unknown }[]
  audioFile?: AudioFileInput
  publishedAt?: CreatedAtInput
  addedAt?: AddedAtInput
  updatedAt?: UpdatedAtInput
  audioTrack?: AudioTrackInput
  duration?: DurationSecInput
  size?: SizeInput
}
type AutoDownloadEpisodesInput = boolean
type PodcastInput = {
  id?: PodcastIdInput
  libraryItemId?: LibraryItemIdInput
  metadata?: PodcastMetadataInput
  coverPath?: string | null
  tags?: string[]
  episodes?: PodcastEpisodeInput[]
  autoDownloadEpisodes?: AutoDownloadEpisodesInput
  autoDownloadSchedule?: string | null
  lastEpisodeCheck?: number
  maxEpisodesToKeep?: number
  maxNewEpisodesToDownload?: number
  lastCoverSearch?: number | null
  lastCoverSearchQuery?: string | null
  size?: number
  duration?: number
  numTracks?: number
  latestEpisodePublished?: number
}
type PodcastId = string
type PodcastMetadata = {
  title?: (string | null) | undefined
  author?: (string | null) | undefined
  description?: (string | null) | undefined
  releaseDate?: (string | null) | undefined
  genres?: string[] | undefined
  feedUrl?: (string | null) | undefined
  imageUrl?: (string | null) | undefined
  itunesPageUrl?: (string | null) | undefined
  itunesId?: (string | null) | undefined
  itunesArtistId?: (string | null) | undefined
  explicit?: boolean | undefined
  language?: (string | null) | undefined
  type?: (string | null) | undefined
}
type OldPodcastId = string | null
type FileMetadata = {
  filename?: string | undefined
  ext?: string | undefined
  path?: string | undefined
  relPath?: string | undefined
  size?: Size | undefined
  mtimeMs?: number | undefined
  ctimeMs?: number | undefined
  birthtimeMs?: number | undefined
} | null
type BookChapter = {
  id?: number | undefined
  start?: number | undefined
  end?: number | undefined
  title?: string | undefined
}
type AudioMetaTags = {
  tagAlbum?: (string | null) | undefined
  tagArtist?: (string | null) | undefined
  tagGenre?: (string | null) | undefined
  tagTitle?: (string | null) | undefined
  tagSeries?: (string | null) | undefined
  tagSeriesPart?: (string | null) | undefined
  tagTrack?: (string | null) | undefined
  tagDisc?: (string | null) | undefined
  tagSubtitle?: (string | null) | undefined
  tagAlbumArtist?: (string | null) | undefined
  tagDate?: (string | null) | undefined
  tagComposer?: (string | null) | undefined
  tagPublisher?: (string | null) | undefined
  tagComment?: (string | null) | undefined
  tagDescription?: (string | null) | undefined
  tagEncoder?: (string | null) | undefined
  tagEncodedBy?: (string | null) | undefined
  tagIsbn?: (string | null) | undefined
  tagLanguage?: (string | null) | undefined
  tagASIN?: (string | null) | undefined
  tagOverdriveMediaMarker?: (string | null) | undefined
  tagOriginalYear?: (string | null) | undefined
  tagReleaseCountry?: (string | null) | undefined
  tagReleaseType?: (string | null) | undefined
  tagReleaseStatus?: (string | null) | undefined
  tagISRC?: (string | null) | undefined
  tagMusicBrainzTrackId?: (string | null) | undefined
  tagMusicBrainzAlbumId?: (string | null) | undefined
  tagMusicBrainzAlbumArtistId?: (string | null) | undefined
  tagMusicBrainzArtistId?: (string | null) | undefined
}
type AudioFile = {
  index?: number | undefined
  ino?: Inode | undefined
  metadata?: FileMetadata | undefined
  addedAt?: AddedAt | undefined
  updatedAt?: UpdatedAt | undefined
  trackNumFromMeta?: (number | null) | undefined
  discNumFromMeta?: (string | null) | undefined
  trackNumFromFilename?: (number | null) | undefined
  discNumFromFilename?: (string | null) | undefined
  manuallyVerified?: boolean | undefined
  invalid?: boolean | undefined
  exclude?: boolean | undefined
  error?: (string | null) | undefined
  format?: string | undefined
  duration?: DurationSec | undefined
  bitRate?: number | undefined
  language?: (string | null) | undefined
  codec?: string | undefined
  timeBase?: string | undefined
  channels?: number | undefined
  channelLayout?: string | undefined
  chapters?: BookChapter[] | undefined
  embeddedCoverArt?: (string | null) | undefined
  metaTags?: AudioMetaTags | undefined
  mimeType?: string | undefined
}
type AudioTrack = {
  index?: (number | null) | undefined
  startOffset?: (number | null) | undefined
  duration?: (number | null) | undefined
  title?: (string | null) | undefined
  contentUrl?: (string | null) | undefined
  mimeType?: (string | null) | undefined
  codec?: (string | null) | undefined
  metadata?: FileMetadata | undefined
}
type PodcastEpisode = {
  libraryItemId?: LibraryItemId | undefined
  podcastId?: PodcastId | undefined
  id?: PodcastId | undefined
  oldEpisodeId?: OldPodcastId | undefined
  index?: (number | null) | undefined
  season?: (string | null) | undefined
  episode?: (string | null) | undefined
  episodeType?: (string | null) | undefined
  title?: (string | null) | undefined
  subtitle?: (string | null) | undefined
  description?: (string | null) | undefined
  enclosure?: ({ [key: string]: unknown } | null) | undefined
  guid?: (string | null) | undefined
  pubDate?: (string | null) | undefined
  chapters?: { [key: string]: unknown }[] | undefined
  audioFile?: AudioFile | undefined
  publishedAt?: CreatedAt | undefined
  addedAt?: AddedAt | undefined
  updatedAt?: UpdatedAt | undefined
  audioTrack?: AudioTrack | undefined
  duration?: DurationSec | undefined
  size?: Size | undefined
}
type AutoDownloadEpisodes = boolean
type Podcast = {
  id?: PodcastId | undefined
  libraryItemId?: LibraryItemId | undefined
  metadata?: PodcastMetadata | undefined
  coverPath?: (string | null) | undefined
  tags?: string[] | undefined
  episodes?: PodcastEpisode[] | undefined
  autoDownloadEpisodes?: AutoDownloadEpisodes | undefined
  autoDownloadSchedule?: (string | null) | undefined
  lastEpisodeCheck?: number | undefined
  maxEpisodesToKeep?: number | undefined
  maxNewEpisodesToDownload?: number | undefined
  lastCoverSearch?: (number | null) | undefined
  lastCoverSearchQuery?: (string | null) | undefined
  size?: number | undefined
  duration?: number | undefined
  numTracks?: number | undefined
  latestEpisodePublished?: number | undefined
}
type SeriesNameInput = string
type SeriesDescriptionInput = string | null
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/authors/:id': {
      $get:
        | {
            input: { param: { id: AuthorIdInput } } & { query: { include?: string } }
            output: Author
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & { query: { include?: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { id: AuthorIdInput } } & {
              json: {
                name?: AuthorNameInput
                description?: AuthorDescriptionInput
                imagePath?: AuthorImagePathInput
                asin?: AuthorAsinInput
              }
            }
            output: Author | AuthorUpdated | AuthorMerged
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & {
              json: {
                name?: AuthorNameInput
                description?: AuthorDescriptionInput
                imagePath?: AuthorImagePathInput
                asin?: AuthorAsinInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: AuthorIdInput } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: AuthorIdInput } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/authors/:id/image': {
      $get:
        | {
            input: { param: { id: AuthorIdInput } } & {
              query: { token?: string; ts?: unknown }
            } & {
              json: {
                width?: ImageWidthInput
                height?: ImageHeightInput
                format?: ImageFormatInput
                raw?: ImageRawInput
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & {
              query: { token?: string; ts?: unknown }
            } & {
              json: {
                width?: ImageWidthInput
                height?: ImageHeightInput
                format?: ImageFormatInput
                raw?: ImageRawInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: AuthorIdInput } } & {
              query: { token?: string; ts?: unknown }
            } & { json: ImageUrlInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & {
              query: { token?: string; ts?: unknown }
            } & { json: ImageUrlInput }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { id: AuthorIdInput } } & {
              query: { token?: string; ts?: unknown }
            } & {
              json: {
                width?: ImageWidthInput
                height?: ImageHeightInput
                format?: ImageFormatInput
                raw?: ImageRawInput
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & {
              query: { token?: string; ts?: unknown }
            } & {
              json: {
                width?: ImageWidthInput
                height?: ImageHeightInput
                format?: ImageFormatInput
                raw?: ImageRawInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: AuthorIdInput } } & { query: { token?: string; ts?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & { query: { token?: string; ts?: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/authors/:id/match': {
      $post:
        | {
            input: { param: { id: AuthorIdInput } } & {
              json: { q?: AuthorSearchNameInput; asin?: AuthorAsinInput; region?: RegionInput }
            }
            output: Author | AuthorUpdated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AuthorIdInput } } & {
              json: { q?: AuthorSearchNameInput; asin?: AuthorAsinInput; region?: RegionInput }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/emails/settings': {
      $get: { input: {}; output: EmailSettings; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { json: EmailSettingsInput }
        output: EmailSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/emails/test': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/emails/ereader-devices': {
      $post:
        | {
            input: { json: { ereaderDevices?: EreaderDeviceObjectInput[] } }
            output: { ereaderDevices?: EreaderDeviceObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ereaderDevices?: EreaderDeviceObjectInput[] } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/emails/send-ebook-to-device': {
      $post:
        | {
            input: { json: { libraryItemId?: LibraryItemIdInput; deviceName?: EreaderNameInput } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { libraryItemId?: LibraryItemIdInput; deviceName?: EreaderNameInput } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { libraryItemId?: LibraryItemIdInput; deviceName?: EreaderNameInput } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { libraryItemId?: LibraryItemIdInput; deviceName?: EreaderNameInput } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries': {
      $get: {
        input: {}
        output: { libraries?: Library[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                name: LibraryNameInput
                folders: LibraryFoldersInput
                displayOrder?: LibraryDisplayOrderInput
                icon?: LibraryIconInput
                mediaType?: LibraryMediaTypeInput
                provider?: LibraryProviderInput
                settings?: LibrarySettingsInput
              }
            }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: LibraryNameInput
                folders: LibraryFoldersInput
                displayOrder?: LibraryDisplayOrderInput
                icon?: LibraryIconInput
                mediaType?: LibraryMediaTypeInput
                provider?: LibraryProviderInput
                settings?: LibrarySettingsInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries/:id': {
      $get:
        | {
            input: { param: { id: LibraryIdInput } } & {
              query: { include?: string; minified?: unknown }
            }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } } & {
              query: { include?: string; minified?: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { id: LibraryIdInput } } & {
              json: {
                name?: LibraryNameInput
                folders?: LibraryFoldersInput
                displayOrder?: LibraryDisplayOrderInput
                icon?: LibraryIconInput
                mediaType?: LibraryMediaTypeInput
                provider?: LibraryProviderInput
                settings?: LibrarySettingsInput
              }
            }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } } & {
              json: {
                name?: LibraryNameInput
                folders?: LibraryFoldersInput
                displayOrder?: LibraryDisplayOrderInput
                icon?: LibraryIconInput
                mediaType?: LibraryMediaTypeInput
                provider?: LibraryProviderInput
                settings?: LibrarySettingsInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: LibraryIdInput } }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries/:id/authors': {
      $get:
        | {
            input: { param: { id: LibraryIdInput } }
            output: { authors?: AuthorExpanded[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries/:id/items': {
      $get:
        | {
            input: { param: { id: LibraryIdInput } } & {
              query: {
                limit?: unknown
                page?: unknown
                sort?: string
                desc?: unknown
                filter?: string
                include?: string
                minified?: unknown
                collapseSeries?: unknown
              }
            }
            output: {
              results?: LibraryItemBase[] | undefined
              total?: Total | undefined
              limit?: Limit | undefined
              page?: Page | undefined
              sortBy?: SortBy | undefined
              sortDesc?: SortDesc | undefined
              filterBy?: FilterBy | undefined
              mediaType?: MediaType | undefined
              minified?: Minified | undefined
              collapseSeries?: CollapseSeries | undefined
              include?: LibraryInclude | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } } & {
              query: {
                limit?: unknown
                page?: unknown
                sort?: string
                desc?: unknown
                filter?: string
                include?: string
                minified?: unknown
                collapseSeries?: unknown
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries/:id/issues': {
      $delete:
        | {
            input: { param: { id: LibraryIdInput } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries/:id/series': {
      $get:
        | {
            input: { param: { id: LibraryIdInput } } & {
              query: {
                limit?: unknown
                page?: unknown
                sort?:
                  | 'name'
                  | 'numBooks'
                  | 'totalDuration'
                  | 'addedAt'
                  | 'lastBookAdded'
                  | 'lastBookUpdated'
                desc?: unknown
                filter?: string
                include?: string
                minified?: unknown
              }
            }
            output: {
              results?: SeriesBooks[] | undefined
              total?: Total | undefined
              limit?: Limit | undefined
              page?: Page | undefined
              sortBy?: SortBy | undefined
              sortDesc?: SortDesc | undefined
              filterBy?: FilterBy | undefined
              minified?: Minified | undefined
              include?: LibraryInclude | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput } } & {
              query: {
                limit?: unknown
                page?: unknown
                sort?:
                  | 'name'
                  | 'numBooks'
                  | 'totalDuration'
                  | 'addedAt'
                  | 'lastBookAdded'
                  | 'lastBookUpdated'
                desc?: unknown
                filter?: string
                include?: string
                minified?: unknown
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/libraries/:id/series/:seriesId': {
      $get:
        | {
            input: { param: { id: LibraryIdInput; seriesId: SeriesIdInput } } & {
              query: {
                limit?: unknown
                page?: unknown
                sort?:
                  | 'name'
                  | 'numBooks'
                  | 'totalDuration'
                  | 'addedAt'
                  | 'lastBookAdded'
                  | 'lastBookUpdated'
                desc?: unknown
                filter?: string
                minified?: unknown
                include?: string
              }
            }
            output: SeriesWithProgressAndRSS
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: LibraryIdInput; seriesId: SeriesIdInput } } & {
              query: {
                limit?: unknown
                page?: unknown
                sort?:
                  | 'name'
                  | 'numBooks'
                  | 'totalDuration'
                  | 'addedAt'
                  | 'lastBookAdded'
                  | 'lastBookUpdated'
                desc?: unknown
                filter?: string
                minified?: unknown
                include?: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/notifications': {
      $get:
        | {
            input: {}
            output: {
              data?: { events?: NotificationEvent[] | undefined } | undefined
              settings?: NotificationSettings | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: {
              json: {
                appriseApiUrl?: AppriseApiUrlInput
                maxFailedAttempts?: MaxFailedAttemptsInput
                maxNotificationQueue?: MaxNotificationQueueInput
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                appriseApiUrl?: AppriseApiUrlInput
                maxFailedAttempts?: MaxFailedAttemptsInput
                maxNotificationQueue?: MaxNotificationQueueInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: {
              json: {
                libraryId?: LibraryIdNullableInput
                eventName: NotificationEventNameInput
                urls: UrlsInput
                titleTemplate: TitleTemplateInput
                bodyTemplate: BodyTemplateInput
                enabled?: EnabledInput
                type?: NotificationTypeInput
              }
            }
            output: { settings?: NotificationSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                libraryId?: LibraryIdNullableInput
                eventName: NotificationEventNameInput
                urls: UrlsInput
                titleTemplate: TitleTemplateInput
                bodyTemplate: BodyTemplateInput
                enabled?: EnabledInput
                type?: NotificationTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/notificationdata': {
      $get:
        | {
            input: {}
            output: { events?: NotificationEvent[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/notifications/test': {
      $get:
        | { input: { query: { fail?: unknown } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { fail?: unknown } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/notifications/:id': {
      $delete:
        | {
            input: { param: { id: NotificationIdInput } }
            output: { settings?: NotificationSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: NotificationIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { id: NotificationIdInput } } & {
              json: {
                libraryId?: LibraryIdInput
                eventName?: NotificationEventNameInput
                urls?: UrlsInput
                titleTemplate?: TitleTemplateInput
                bodyTemplate?: BodyTemplateInput
                enabled?: EnabledInput
                type?: NotificationTypeInput
              }
            }
            output: { settings?: NotificationSettings | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: NotificationIdInput } } & {
              json: {
                libraryId?: LibraryIdInput
                eventName?: NotificationEventNameInput
                urls?: UrlsInput
                titleTemplate?: TitleTemplateInput
                bodyTemplate?: BodyTemplateInput
                enabled?: EnabledInput
                type?: NotificationTypeInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/notifications/:id/test': {
      $get:
        | {
            input: { param: { id: NotificationIdInput } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: NotificationIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/podcasts': {
      $post:
        | { input: { json: PodcastInput }; output: Podcast; outputFormat: 'json'; status: 200 }
        | { input: { json: PodcastInput }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PodcastInput }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: PodcastInput }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/podcasts/feed': {
      $post:
        | {
            input: { json: { rssFeed?: string } }
            output: { podcast?: Podcast | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { rssFeed?: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { rssFeed?: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: { rssFeed?: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/podcasts/opml/parse': {
      $post:
        | {
            input: { json: { opmlText?: string } }
            output: {
              feeds?: { title?: string | undefined; feedUrl?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { opmlText?: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { opmlText?: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api/podcasts/opml/create': {
      $post:
        | {
            input: {
              json: {
                feeds?: string[]
                libraryId?: LibraryIdInput
                folderId?: FolderIdInput
                autoDownloadEpisodes?: AutoDownloadEpisodesInput
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                feeds?: string[]
                libraryId?: LibraryIdInput
                folderId?: FolderIdInput
                autoDownloadEpisodes?: AutoDownloadEpisodesInput
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                feeds?: string[]
                libraryId?: LibraryIdInput
                folderId?: FolderIdInput
                autoDownloadEpisodes?: AutoDownloadEpisodesInput
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                feeds?: string[]
                libraryId?: LibraryIdInput
                folderId?: FolderIdInput
                autoDownloadEpisodes?: AutoDownloadEpisodesInput
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/podcasts/:id/checknew': {
      $get:
        | {
            input: { param: { id: PodcastIdInput } } & { query: { limit?: unknown } }
            output: { episodes?: PodcastEpisode[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput } } & { query: { limit?: unknown } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: PodcastIdInput } } & { query: { limit?: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: PodcastIdInput } } & { query: { limit?: unknown } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/podcasts/:id/clear-queue': {
      $get:
        | {
            input: { param: { id: PodcastIdInput } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/podcasts/:id/downloads': {
      $get:
        | {
            input: { param: { id: PodcastIdInput } }
            output: { downloads?: PodcastEpisode[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/podcasts/:id/search-episode': {
      $get:
        | {
            input: { param: { id: PodcastIdInput } } & { query: { title: string } }
            output: { episodes?: PodcastEpisode[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput } } & { query: { title: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: PodcastIdInput } } & { query: { title: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/podcasts/:id/download-episodes': {
      $post:
        | {
            input: { param: { id: PodcastIdInput } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: PodcastIdInput } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/podcasts/:id/match-episodes': {
      $post:
        | {
            input: { param: { id: PodcastIdInput } } & { query: { override?: string } }
            output: { numEpisodesUpdated?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput } } & { query: { override?: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/podcasts/:id/episode/:episodeId': {
      $patch:
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } } & {
              json: { [key: string]: unknown }
            }
            output: Podcast
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } } & {
              json: { [key: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } }
            output: PodcastEpisode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } } & {
              query: { hard?: string }
            }
            output: Podcast
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } } & {
              query: { hard?: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: PodcastIdInput; episodeId: PodcastIdInput } } & {
              query: { hard?: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/series/:id': {
      $get:
        | {
            input: { param: { id: SeriesIdInput } } & {
              json: { include?: 'progress' | 'rssfeed' | 'progress,rssfeed' | 'rssfeed,progress' }
            }
            output: SeriesWithProgressAndRSS
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: SeriesIdInput } } & {
              json: { include?: 'progress' | 'rssfeed' | 'progress,rssfeed' | 'rssfeed,progress' }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { id: SeriesIdInput } } & {
              json: { name?: SeriesNameInput; description?: SeriesDescriptionInput }
            }
            output: Series
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: SeriesIdInput } } & {
              json: { name?: SeriesNameInput; description?: SeriesDescriptionInput }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
