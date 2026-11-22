type EntryEditEvent = 'Created' | 'Updated' | 'Deleted' | 'Restored'
type EntryType =
  | 'Undefined'
  | 'Album'
  | 'Artist'
  | 'DiscussionTopic'
  | 'PV'
  | 'ReleaseEvent'
  | 'ReleaseEventSeries'
  | 'Song'
  | 'SongList'
  | 'Tag'
  | 'User'
  | 'Venue'
type ActivityEntryOptionalFields = 'None' | 'ArchivedVersion' | 'Entry'
type EntryOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'Description'
  | 'MainPicture'
  | 'Names'
  | 'PVs'
  | 'Tags'
  | 'WebLinks'
type ContentLanguagePreference = 'Default' | 'Japanese' | 'Romaji' | 'English'
type ActivityEntrySortRule = 'CreateDateDescending' | 'CreateDate'
type UserGroupId = 'Nothing' | 'Limited' | 'Regular' | 'Trusted' | 'Moderator' | 'Admin'
type UserLanguageProficiency = 'Nothing' | 'Basics' | 'Intermediate' | 'Advanced' | 'Native'
type UserKnownLanguageContract = {
  cultureCode?: (string | null) | undefined
  proficiency?: UserLanguageProficiency | undefined
}
type EntryThumbForApiContract = {
  mime?: (string | null) | undefined
  name?: (string | null) | undefined
  urlOriginal?: (string | null) | undefined
  urlSmallThumb?: (string | null) | undefined
  urlThumb?: (string | null) | undefined
  urlTinyThumb?: (string | null) | undefined
}
type OldUsernameContract = { date?: string | undefined; oldName?: (string | null) | undefined }
type UserForApiContract = {
  active?: boolean | undefined
  groupId?: UserGroupId | undefined
  id?: number | undefined
  knownLanguages?: (UserKnownLanguageContract[] | null) | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  memberSince?: string | undefined
  name?: (string | null) | undefined
  oldUsernames?: (OldUsernameContract[] | null) | undefined
  verifiedArtist?: boolean | undefined
}
type EntryStatus = 'Draft' | 'Finished' | 'Approved' | 'Locked'
type ArchivedObjectVersionForApiContract = {
  agentName?: (string | null) | undefined
  anythingChanged?: boolean | undefined
  author?: UserForApiContract | undefined
  changedFields?: (string[] | null) | undefined
  created?: string | undefined
  hidden?: boolean | undefined
  id?: number | undefined
  isSnapshot?: boolean | undefined
  notes?: (string | null) | undefined
  reason?: (string | null) | undefined
  status?: EntryStatus | undefined
  version?: number | undefined
}
type ArtistType =
  | 'Unknown'
  | 'Circle'
  | 'Label'
  | 'Producer'
  | 'Animator'
  | 'Illustrator'
  | 'Lyricist'
  | 'Vocaloid'
  | 'UTAU'
  | 'CeVIO'
  | 'OtherVoiceSynthesizer'
  | 'OtherVocalist'
  | 'OtherGroup'
  | 'OtherIndividual'
  | 'Utaite'
  | 'Band'
  | 'Vocalist'
  | 'Character'
  | 'SynthesizerV'
  | 'CoverArtist'
type ContentLanguageSelection = 'Unspecified' | 'Japanese' | 'Romaji' | 'English'
type DiscType =
  | 'Unknown'
  | 'Album'
  | 'Single'
  | 'EP'
  | 'SplitAlbum'
  | 'Compilation'
  | 'Video'
  | 'Artbook'
  | 'Game'
  | 'Fanmade'
  | 'Instrumental'
  | 'Other'
type EventCategory =
  | 'Unspecified'
  | 'AlbumRelease'
  | 'Anniversary'
  | 'Club'
  | 'Concert'
  | 'Contest'
  | 'Convention'
  | 'Other'
  | 'Festival'
type LocalizedStringContract = {
  language?: ContentLanguageSelection | undefined
  value?: (string | null) | undefined
}
type PVExtendedMetadata = { json?: (string | null) | undefined }
type PVType = 'Original' | 'Reprint' | 'Other'
type PVService =
  | 'NicoNicoDouga'
  | 'Youtube'
  | 'SoundCloud'
  | 'Vimeo'
  | 'Piapro'
  | 'Bilibili'
  | 'File'
  | 'LocalFile'
  | 'Creofuga'
  | 'Bandcamp'
type PVContract = {
  author?: (string | null) | undefined
  createdBy?: (number | null) | undefined
  disabled?: boolean | undefined
  extendedMetadata?: PVExtendedMetadata | undefined
  id?: number | undefined
  length?: number | undefined
  name?: (string | null) | undefined
  publishDate?: (string | null) | undefined
  pvId?: (string | null) | undefined
  pvType?: PVType | undefined
  service?: PVService | undefined
  thumbUrl?: (string | null) | undefined
  url?: (string | null) | undefined
}
type SongListFeaturedCategory = 'Nothing' | 'Concerts' | 'VocaloidRanking' | 'Pools' | 'Other'
type SongType =
  | 'Unspecified'
  | 'Original'
  | 'Remaster'
  | 'Remix'
  | 'Cover'
  | 'Arrangement'
  | 'Instrumental'
  | 'Mashup'
  | 'MusicPV'
  | 'DramaPV'
  | 'Live'
  | 'Illustration'
  | 'Other'
type TagBaseContract = {
  additionalNames?: (string | null) | undefined
  categoryName?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  urlSlug?: (string | null) | undefined
}
type TagUsageForApiContract = { count?: number | undefined; tag?: TagBaseContract | undefined }
type WebLinkCategory = 'Official' | 'Commercial' | 'Reference' | 'Other'
type ArchivedWebLinkContract = {
  category?: WebLinkCategory | undefined
  description?: (string | null) | undefined
  disabled?: boolean | undefined
  url?: (string | null) | undefined
}
type EntryForApiContract = {
  activityDate?: (string | null) | undefined
  additionalNames?: (string | null) | undefined
  artistString?: (string | null) | undefined
  artistType?: ArtistType | undefined
  createDate?: string | undefined
  defaultName?: (string | null) | undefined
  defaultNameLanguage?: ContentLanguageSelection | undefined
  description?: (string | null) | undefined
  discType?: DiscType | undefined
  entryType?: EntryType | undefined
  eventCategory?: EventCategory | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  pvs?: (PVContract[] | null) | undefined
  releaseEventSeriesName?: (string | null) | undefined
  songListFeaturedCategory?: SongListFeaturedCategory | undefined
  songType?: SongType | undefined
  status?: EntryStatus | undefined
  tagCategoryName?: (string | null) | undefined
  tags?: (TagUsageForApiContract[] | null) | undefined
  urlSlug?: (string | null) | undefined
  version?: number | undefined
  webLinks?: (ArchivedWebLinkContract[] | null) | undefined
}
type ActivityEntryForApiContract = {
  archivedVersion?: ArchivedObjectVersionForApiContract | undefined
  author?: UserForApiContract | undefined
  createDate?: string | undefined
  editEvent?: EntryEditEvent | undefined
  entry?: EntryForApiContract | undefined
}
type ActivityEntryForApiContractPartialFindResult = {
  items?: (ActivityEntryForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type ArtistAlbumParticipationStatus = 'Everything' | 'OnlyMainAlbums' | 'OnlyCollaborations'
type AdvancedFilterType =
  | 'Nothing'
  | 'ArtistType'
  | 'WebLink'
  | 'HasUserAccount'
  | 'RootVoicebank'
  | 'VoiceProvider'
  | 'HasStoreLink'
  | 'HasTracks'
  | 'NoCoverPicture'
  | 'HasAlbum'
  | 'HasOriginalMedia'
  | 'HasMedia'
  | 'HasMultipleVoicebanks'
  | 'HasPublishDate'
  | 'Lyrics'
  | 'LyricsContent'
type AdvancedSearchFilterParams = {
  filterType?: AdvancedFilterType | undefined
  negate?: boolean | undefined
  param?: (string | null) | undefined
}
type AlbumSortRule =
  | 'None'
  | 'Name'
  | 'ReleaseDate'
  | 'ReleaseDateWithNulls'
  | 'AdditionDate'
  | 'RatingAverage'
  | 'RatingTotal'
  | 'NameThenReleaseDate'
  | 'CollectionCount'
type NameMatchMode = 'Auto' | 'Partial' | 'StartsWith' | 'Exact' | 'Words'
type AlbumOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'Artists'
  | 'Description'
  | 'Discs'
  | 'Identifiers'
  | 'MainPicture'
  | 'Names'
  | 'PVs'
  | 'ReleaseEvent'
  | 'Tags'
  | 'Tracks'
  | 'WebLinks'
type ArtistContract = {
  additionalNames?: (string | null) | undefined
  artistType?: ArtistType | undefined
  deleted?: boolean | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  pictureMime?: (string | null) | undefined
  releaseDate?: (string | null) | undefined
  status?: EntryStatus | undefined
  version?: number | undefined
}
type ArtistCategories =
  | 'Nothing'
  | 'Vocalist'
  | 'Producer'
  | 'Animator'
  | 'Label'
  | 'Circle'
  | 'Other'
  | 'Band'
  | 'Illustrator'
  | 'Subject'
type ArtistRoles =
  | 'Default'
  | 'Animator'
  | 'Arranger'
  | 'Composer'
  | 'Distributor'
  | 'Illustrator'
  | 'Instrumentalist'
  | 'Lyricist'
  | 'Mastering'
  | 'Publisher'
  | 'Vocalist'
  | 'VoiceManipulator'
  | 'Other'
  | 'Mixer'
  | 'Chorus'
  | 'Encoder'
  | 'VocalDataProvider'
type ArtistForAlbumForApiContract = {
  artist?: ArtistContract | undefined
  categories?: ArtistCategories | undefined
  effectiveRoles?: ArtistRoles | undefined
  isSupport?: boolean | undefined
  name?: (string | null) | undefined
  roles?: ArtistRoles | undefined
}
type DiscMediaType = 'Audio' | 'Video'
type AlbumDiscPropertiesContract = {
  discNumber?: number | undefined
  id?: number | undefined
  mediaType?: DiscMediaType | undefined
  name?: (string | null) | undefined
}
type AlbumIdentifierContract = { value?: (string | null) | undefined }
type OptionalDateTimeContract = {
  day?: (number | null) | undefined
  formatted?: (string | null) | undefined
  isEmpty?: boolean | undefined
  month?: (number | null) | undefined
  year?: (number | null) | undefined
}
type ArtistEventRoles =
  | 'Default'
  | 'Dancer'
  | 'DJ'
  | 'Instrumentalist'
  | 'Organizer'
  | 'Promoter'
  | 'VJ'
  | 'Vocalist'
  | 'VoiceManipulator'
  | 'OtherPerformer'
  | 'Other'
type ArtistForEventContract = {
  artist?: ArtistContract | undefined
  effectiveRoles?: ArtistEventRoles | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  roles?: ArtistEventRoles | undefined
}
type WebLinkContract = {
  category?: WebLinkCategory | undefined
  description?: (string | null) | undefined
  descriptionOrUrl?: (string | null) | undefined
  disabled?: boolean | undefined
  id?: number | undefined
  url?: (string | null) | undefined
}
type ReleaseEventSeriesContract = {
  additionalNames?: (string | null) | undefined
  category?: EventCategory | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  pictureMime?: (string | null) | undefined
  status?: EntryStatus | undefined
  urlSlug?: (string | null) | undefined
  version?: number | undefined
  webLinks?: (WebLinkContract[] | null) | undefined
}
type SongListBaseContract = {
  featuredCategory?: SongListFeaturedCategory | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type OptionalGeoPointContract = {
  formatted?: (string | null) | undefined
  hasValue?: boolean | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
}
type VenueContract = {
  additionalNames?: (string | null) | undefined
  address?: (string | null) | undefined
  addressCountryCode?: (string | null) | undefined
  coordinates?: OptionalGeoPointContract | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  status?: EntryStatus | undefined
  version?: number | undefined
  webLinks?: (WebLinkContract[] | null) | undefined
}
type ReleaseEventContract = {
  additionalNames?: (string | null) | undefined
  category?: EventCategory | undefined
  customName?: boolean | undefined
  date?: (string | null) | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  endDate?: (string | null) | undefined
  hasVenueOrVenueName?: boolean | undefined
  id?: number | undefined
  inheritedCategory?: EventCategory | undefined
  name?: (string | null) | undefined
  pictureMime?: (string | null) | undefined
  series?: ReleaseEventSeriesContract | undefined
  songList?: SongListBaseContract | undefined
  status?: EntryStatus | undefined
  urlSlug?: (string | null) | undefined
  venue?: VenueContract | undefined
  venueName?: (string | null) | undefined
  version?: number | undefined
}
type WebLinkForApiContract = {
  category?: WebLinkCategory | undefined
  description?: (string | null) | undefined
  descriptionOrUrl?: (string | null) | undefined
  disabled?: boolean | undefined
  id?: number | undefined
  url?: (string | null) | undefined
}
type VenueForApiContract = {
  additionalNames?: (string | null) | undefined
  address?: (string | null) | undefined
  addressCountryCode?: (string | null) | undefined
  coordinates?: OptionalGeoPointContract | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  events?: (ReleaseEventContract[] | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  status?: EntryStatus | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type ReleaseEventForApiContract = {
  additionalNames?: (string | null) | undefined
  artists?: (ArtistForEventContract[] | null) | undefined
  category?: EventCategory | undefined
  date?: (string | null) | undefined
  description?: (string | null) | undefined
  endDate?: (string | null) | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  pvs?: (PVContract[] | null) | undefined
  series?: ReleaseEventSeriesContract | undefined
  seriesId?: (number | null) | undefined
  seriesNumber?: number | undefined
  seriesSuffix?: (string | null) | undefined
  songList?: SongListBaseContract | undefined
  status?: EntryStatus | undefined
  tags?: (TagUsageForApiContract[] | null) | undefined
  urlSlug?: (string | null) | undefined
  venue?: VenueForApiContract | undefined
  venueName?: (string | null) | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type SongVoteRating = 'Nothing' | 'Dislike' | 'Like' | 'Favorite'
type AlbumContract = {
  additionalNames?: (string | null) | undefined
  artistString?: (string | null) | undefined
  coverPictureMime?: (string | null) | undefined
  createDate?: string | undefined
  deleted?: boolean | undefined
  discType?: DiscType | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  ratingAverage?: number | undefined
  ratingCount?: number | undefined
  releaseDate?: OptionalDateTimeContract | undefined
  releaseEvent?: ReleaseEventForApiContract | undefined
  status?: EntryStatus | undefined
  version?: number | undefined
}
type ArtistForSongContract = {
  artist?: ArtistContract | undefined
  categories?: ArtistCategories | undefined
  effectiveRoles?: ArtistRoles | undefined
  id?: number | undefined
  isCustomName?: boolean | undefined
  isSupport?: boolean | undefined
  name?: (string | null) | undefined
  roles?: ArtistRoles | undefined
}
type TranslationType = 'Original' | 'Romanized' | 'Translation'
type LyricsForSongContract = {
  cultureCode?: (string | null) | undefined
  id?: number | undefined
  source?: (string | null) | undefined
  translationType?: TranslationType | undefined
  url?: (string | null) | undefined
  value?: (string | null) | undefined
}
type PVServices =
  | 'Nothing'
  | 'NicoNicoDouga'
  | 'Youtube'
  | 'SoundCloud'
  | 'Vimeo'
  | 'Piapro'
  | 'Bilibili'
  | 'File'
  | 'LocalFile'
  | 'Creofuga'
  | 'Bandcamp'
type SongForApiContract = {
  additionalNames?: (string | null) | undefined
  albums?: (AlbumContract[] | null) | undefined
  artistString?: (string | null) | undefined
  artists?: (ArtistForSongContract[] | null) | undefined
  createDate?: string | undefined
  defaultName?: (string | null) | undefined
  defaultNameLanguage?: ContentLanguageSelection | undefined
  deleted?: boolean | undefined
  favoritedTimes?: number | undefined
  id?: number | undefined
  lengthSeconds?: number | undefined
  lyrics?: (LyricsForSongContract[] | null) | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  maxMilliBpm?: (number | null) | undefined
  mergedTo?: number | undefined
  minMilliBpm?: (number | null) | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  originalVersionId?: number | undefined
  publishDate?: (string | null) | undefined
  pvServices?: PVServices | undefined
  pvs?: (PVContract[] | null) | undefined
  ratingScore?: number | undefined
  releaseEvent?: ReleaseEventForApiContract | undefined
  songType?: SongType | undefined
  status?: EntryStatus | undefined
  tags?: (TagUsageForApiContract[] | null) | undefined
  thumbUrl?: (string | null) | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type SongInAlbumForApiContract = {
  discNumber?: number | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  rating?: SongVoteRating | undefined
  song?: SongForApiContract | undefined
  trackNumber?: number | undefined
}
type AlbumForApiContract = {
  additionalNames?: (string | null) | undefined
  artistString?: (string | null) | undefined
  artists?: (ArtistForAlbumForApiContract[] | null) | undefined
  barcode?: (string | null) | undefined
  catalogNumber?: (string | null) | undefined
  createDate?: string | undefined
  defaultName?: (string | null) | undefined
  defaultNameLanguage?: ContentLanguageSelection | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  discType?: DiscType | undefined
  discs?: (AlbumDiscPropertiesContract[] | null) | undefined
  id?: number | undefined
  identifiers?: (AlbumIdentifierContract[] | null) | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  mergedTo?: number | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  pvs?: (PVContract[] | null) | undefined
  ratingAverage?: number | undefined
  ratingCount?: number | undefined
  releaseDate?: OptionalDateTimeContract | undefined
  releaseEvent?: ReleaseEventForApiContract | undefined
  status?: EntryStatus | undefined
  tags?: (TagUsageForApiContract[] | null) | undefined
  tracks?: (SongInAlbumForApiContract[] | null) | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type AlbumForApiContractPartialFindResult = {
  items?: (AlbumForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type CommentForApiContract = {
  author?: UserForApiContract | undefined
  authorName?: (string | null) | undefined
  created?: string | undefined
  entry?: EntryForApiContract | undefined
  id?: number | undefined
  message?: (string | null) | undefined
}
type SongOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'Albums'
  | 'Artists'
  | 'Lyrics'
  | 'MainPicture'
  | 'Names'
  | 'PVs'
  | 'ReleaseEvent'
  | 'Tags'
  | 'ThumbUrl'
  | 'WebLinks'
  | 'Bpm'
type AlbumReviewContract = {
  albumId?: number | undefined
  date?: string | undefined
  id?: number | undefined
  languageCode?: (string | null) | undefined
  text?: (string | null) | undefined
  title?: (string | null) | undefined
  user?: UserForApiContract | undefined
}
type MediaType = 'PhysicalDisc' | 'DigitalDownload' | 'Other'
type PurchaseStatus = 'Nothing' | 'Wishlisted' | 'Ordered' | 'Owned'
type AlbumForUserForApiContract = {
  album?: AlbumForApiContract | undefined
  mediaType?: MediaType | undefined
  purchaseStatus?: PurchaseStatus | undefined
  rating?: number | undefined
  user?: UserForApiContract | undefined
}
type ArtistSortRule =
  | 'None'
  | 'Name'
  | 'AdditionDate'
  | 'AdditionDateAsc'
  | 'ReleaseDate'
  | 'SongCount'
  | 'SongRating'
  | 'FollowerCount'
  | 'ArtistType'
type ArtistOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'ArtistLinks'
  | 'ArtistLinksReverse'
  | 'BaseVoicebank'
  | 'Description'
  | 'MainPicture'
  | 'Names'
  | 'Tags'
  | 'WebLinks'
type ArtistLinkType = 'CharacterDesigner' | 'Group' | 'Illustrator' | 'Manager' | 'VoiceProvider'
type ArtistForArtistForApiContract = {
  artist?: ArtistContract | undefined
  linkType?: ArtistLinkType | undefined
}
type ArtistRelationsForApi = {
  latestAlbums?: (AlbumForApiContract[] | null) | undefined
  latestEvents?: (ReleaseEventForApiContract[] | null) | undefined
  latestSongs?: (SongForApiContract[] | null) | undefined
  popularAlbums?: (AlbumForApiContract[] | null) | undefined
  popularSongs?: (SongForApiContract[] | null) | undefined
}
type ArtistForApiContract = {
  additionalNames?: (string | null) | undefined
  artistLinks?: (ArtistForArtistForApiContract[] | null) | undefined
  artistLinksReverse?: (ArtistForArtistForApiContract[] | null) | undefined
  artistType?: ArtistType | undefined
  baseVoicebank?: ArtistContract | undefined
  createDate?: string | undefined
  defaultName?: (string | null) | undefined
  defaultNameLanguage?: ContentLanguageSelection | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  mergedTo?: number | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  pictureMime?: (string | null) | undefined
  relations?: ArtistRelationsForApi | undefined
  releaseDate?: (string | null) | undefined
  status?: EntryStatus | undefined
  tags?: (TagUsageForApiContract[] | null) | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type ArtistForApiContractPartialFindResult = {
  items?: (ArtistForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type ArtistRelationsFields =
  | 'None'
  | 'LatestAlbums'
  | 'LatestEvents'
  | 'LatestSongs'
  | 'PopularAlbums'
  | 'PopularSongs'
  | 'All'
type CommentOptionalFields = 'None' | 'Entry'
type CommentSortRule = 'CreateDateDescending' | 'CreateDate'
type CommentForApiContractPartialFindResult = {
  items?: (CommentForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type DiscussionFolderOptionalFields = 'None' | 'LastTopic' | 'TopicCount'
type DiscussionFolderContract = {
  description?: (string | null) | undefined
  id?: number | undefined
  lastTopicAuthor?: UserForApiContract | undefined
  lastTopicDate?: (string | null) | undefined
  name?: (string | null) | undefined
  topicCount?: number | undefined
}
type DiscussionTopicOptionalFields =
  | 'None'
  | 'Comments'
  | 'CommentCount'
  | 'Content'
  | 'LastComment'
  | 'All'
type DiscussionTopicContract = {
  author?: UserForApiContract | undefined
  commentCount?: number | undefined
  comments?: (CommentForApiContract[] | null) | undefined
  content?: (string | null) | undefined
  created?: string | undefined
  folderId?: number | undefined
  id?: number | undefined
  lastComment?: CommentForApiContract | undefined
  locked?: boolean | undefined
  name?: (string | null) | undefined
}
type DiscussionTopicSortRule = 'None' | 'Name' | 'DateCreated' | 'LastCommentDate'
type DiscussionTopicContractPartialFindResult = {
  items?: (DiscussionTopicContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type EntryTypes =
  | 'Nothing'
  | 'Album'
  | 'Artist'
  | 'DiscussionTopic'
  | 'PV'
  | 'ReleaseEvent'
  | 'ReleaseEventSeries'
  | 'Song'
  | 'SongList'
  | 'Tag'
  | 'User'
  | 'Venue'
type EntrySortRule = 'None' | 'Name' | 'AdditionDate' | 'ActivityDate'
type EntryForApiContractPartialFindResult = {
  items?: (EntryForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type TagOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'AliasedTo'
  | 'Description'
  | 'MainPicture'
  | 'Names'
  | 'Parent'
  | 'RelatedTags'
  | 'TranslatedDescription'
  | 'WebLinks'
type LocalizedStringWithIdContract = {
  id?: number | undefined
  language?: ContentLanguageSelection | undefined
  value?: (string | null) | undefined
}
type EnglishTranslatedStringContract = {
  english?: (string | null) | undefined
  original?: (string | null) | undefined
}
type TagForApiContract = {
  additionalNames?: (string | null) | undefined
  aliasedTo?: TagBaseContract | undefined
  categoryName?: (string | null) | undefined
  createDate?: string | undefined
  defaultNameLanguage?: ContentLanguageSelection | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringWithIdContract[] | null) | undefined
  parent?: TagBaseContract | undefined
  relatedTags?: (TagBaseContract[] | null) | undefined
  status?: EntryStatus | undefined
  targets?: number | undefined
  translatedDescription?: EnglishTranslatedStringContract | undefined
  urlSlug?: (string | null) | undefined
  usageCount?: number | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type SongContract = {
  additionalNames?: (string | null) | undefined
  artistString?: (string | null) | undefined
  createDate?: string | undefined
  deleted?: boolean | undefined
  favoritedTimes?: number | undefined
  id?: number | undefined
  lengthSeconds?: number | undefined
  name?: (string | null) | undefined
  nicoId?: (string | null) | undefined
  publishDate?: (string | null) | undefined
  pvServices?: PVServices | undefined
  ratingScore?: number | undefined
  songType?: SongType | undefined
  status?: EntryStatus | undefined
  thumbUrl?: (string | null) | undefined
  version?: number | undefined
}
type PVForSongContract = {
  author?: (string | null) | undefined
  createdBy?: (number | null) | undefined
  disabled?: boolean | undefined
  extendedMetadata?: PVExtendedMetadata | undefined
  id?: number | undefined
  length?: number | undefined
  name?: (string | null) | undefined
  publishDate?: (string | null) | undefined
  pvId?: (string | null) | undefined
  pvType?: PVType | undefined
  service?: PVService | undefined
  song?: SongContract | undefined
  thumbUrl?: (string | null) | undefined
  url?: (string | null) | undefined
}
type PVForSongContractPartialFindResult = {
  items?: (PVForSongContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type ReleaseEventSeriesOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'Description'
  | 'Events'
  | 'MainPicture'
  | 'Names'
  | 'WebLinks'
type ReleaseEventSeriesForApiContract = {
  additionalNames?: (string | null) | undefined
  category?: EventCategory | undefined
  description?: (string | null) | undefined
  events?: (ReleaseEventForApiContract[] | null) | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringContract[] | null) | undefined
  status?: EntryStatus | undefined
  urlSlug?: (string | null) | undefined
  version?: number | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type ReleaseEventSeriesForApiContractPartialFindResult = {
  items?: (ReleaseEventSeriesForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type ReleaseEventSeriesForEditForApiContract = {
  category?: EventCategory | undefined
  defaultNameLanguage?: ContentLanguageSelection | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  names?: (LocalizedStringWithIdContract[] | null) | undefined
  status?: EntryStatus | undefined
  webLinks?: (WebLinkForApiContract[] | null) | undefined
}
type EventSortRule = 'None' | 'Name' | 'Date' | 'AdditionDate' | 'SeriesName' | 'VenueName'
type ReleaseEventOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'Artists'
  | 'Description'
  | 'MainPicture'
  | 'Names'
  | 'Series'
  | 'SongList'
  | 'Tags'
  | 'Venue'
  | 'WebLinks'
  | 'PVs'
type SortDirection = 'Ascending' | 'Descending'
type ReleaseEventForApiContractPartialFindResult = {
  items?: (ReleaseEventForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type EventReportType = 'InvalidInfo' | 'Duplicate' | 'Inappropriate' | 'Other'
type SongInListEditContract = {
  notes?: (string | null) | undefined
  order?: number | undefined
  song?: SongForApiContract | undefined
  songInListId?: number | undefined
}
type SongListForEditForApiContract = {
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  eventDate?: (string | null) | undefined
  featuredCategory?: SongListFeaturedCategory | undefined
  id?: number | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  songLinks?: (SongInListEditContract[] | null) | undefined
  status?: EntryStatus | undefined
  updateNotes?: (string | null) | undefined
}
type SongListSortRule = 'None' | 'Name' | 'Date' | 'CreateDate'
type SongListOptionalFields = 'None' | 'Description' | 'Events' | 'MainPicture' | 'Tags'
type SongListForApiContract = {
  author?: UserForApiContract | undefined
  deleted?: boolean | undefined
  description?: (string | null) | undefined
  eventDate?: (string | null) | undefined
  events?: (ReleaseEventForApiContract[] | null) | undefined
  featuredCategory?: SongListFeaturedCategory | undefined
  id?: number | undefined
  latestComments?: (CommentForApiContract[] | null) | undefined
  mainPicture?: EntryThumbForApiContract | undefined
  name?: (string | null) | undefined
  status?: EntryStatus | undefined
  tags?: (TagUsageForApiContract[] | null) | undefined
}
type SongListForApiContractPartialFindResult = {
  items?: (SongListForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type SongSortRule =
  | 'None'
  | 'Name'
  | 'AdditionDate'
  | 'PublishDate'
  | 'FavoritedTimes'
  | 'RatingScore'
  | 'TagUsageCount'
  | 'SongType'
type SongInListForApiContract = {
  notes?: (string | null) | undefined
  order?: number | undefined
  song?: SongForApiContract | undefined
}
type SongInListForApiContractPartialFindResult = {
  items?: (SongInListForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type SongForApiContractPartialFindResult = {
  items?: (SongForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type TopSongsDateFilterType = 'CreateDate' | 'PublishDate' | 'Popularity'
type SongVocalistSelection = 'Nothing' | 'Vocaloid' | 'UTAU' | 'Other'
type UserOptionalFields = 'None' | 'KnownLanguages' | 'MainPicture' | 'OldUsernames'
type RatedSongForUserForApiContract = {
  date?: string | undefined
  rating?: SongVoteRating | undefined
  song?: SongForApiContract | undefined
  user?: UserForApiContract | undefined
}
type SongRatingContract = { rating?: SongVoteRating | undefined }
type RelatedSongsContract = {
  artistMatches?: (SongForApiContract[] | null) | undefined
  likeMatches?: (SongForApiContract[] | null) | undefined
  tagMatches?: (SongForApiContract[] | null) | undefined
}
type TagSortRule = 'Nothing' | 'Name' | 'AdditionDate' | 'UsageCount'
type TagTargetTypes =
  | 'Nothing'
  | 'Album'
  | 'Artist'
  | 'AlbumArtist'
  | 'Event'
  | 'Song'
  | 'AlbumSong'
  | 'ArtistSong'
  | 'SongList'
  | 'All'
type TagForApiContractPartialFindResult = {
  items?: (TagForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type TagReportType = 'InvalidInfo' | 'Duplicate' | 'Inappropriate' | 'Other'
type UserSortRule = 'RegisterDate' | 'Name' | 'Group'
type UserForApiContractPartialFindResult = {
  items?: (UserForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type ArtistForUserForApiContract = {
  artist?: ArtistForApiContract | undefined
  id?: number | undefined
}
type EntryEditDataContract = {
  time?: string | undefined
  userId?: number | undefined
  userName?: (string | null) | undefined
}
type UserInboxType = 'Nothing' | 'Received' | 'Sent' | 'Notifications'
type UserMessageContract = {
  body?: (string | null) | undefined
  createdFormatted?: (string | null) | undefined
  highPriority?: boolean | undefined
  id?: number | undefined
  inbox?: UserInboxType | undefined
  read?: boolean | undefined
  receiver?: UserForApiContract | undefined
  sender?: UserForApiContract | undefined
  subject?: (string | null) | undefined
}
type PurchaseStatuses = 'Nothing' | 'Wishlisted' | 'Ordered' | 'Owned' | 'All'
type AlbumForUserForApiContractPartialFindResult = {
  items?: (AlbumForUserForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type UserEventRelationshipType = 'Interested' | 'Attending'
type ArtistForUserForApiContractPartialFindResult = {
  items?: (ArtistForUserForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type UserMessageContractPartialFindResult = {
  items?: (UserMessageContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type LogicalGrouping = 'And' | 'Or'
type RatedSongForUserSortRule =
  | 'None'
  | 'Name'
  | 'AdditionDate'
  | 'PublishDate'
  | 'FavoritedTimes'
  | 'RatingScore'
  | 'RatingDate'
type RatedSongForUserForApiContractPartialFindResult = {
  items?: (RatedSongForUserForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type UserReportType = 'MaliciousIP' | 'Spamming' | 'RemovePermissions' | 'Other'
type CreateReportModel = {
  reason?: (string | null) | undefined
  reportType?: UserReportType | undefined
}
type VenueOptionalFields =
  | 'None'
  | 'AdditionalNames'
  | 'Description'
  | 'Events'
  | 'Names'
  | 'WebLinks'
type VenueSortRule = 'None' | 'Name' | 'Distance'
type DistanceUnit = 'Kilometers' | 'Miles'
type VenueForApiContractPartialFindResult = {
  items?: (VenueForApiContract[] | null) | undefined
  term?: (string | null) | undefined
  totalCount?: number | undefined
}
type VenueReportType = 'InvalidInfo' | 'Duplicate' | 'Inappropriate' | 'Other'
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/activityEntries': {
      $get:
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                userId?: number | undefined
                editEvent?: EntryEditEvent | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                fields?: ActivityEntryOptionalFields | undefined
                entryFields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: ActivityEntrySortRule | undefined
              }
            }
            output: ActivityEntryForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                userId?: number | undefined
                editEvent?: EntryEditEvent | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                fields?: ActivityEntryOptionalFields | undefined
                entryFields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: ActivityEntrySortRule | undefined
              }
            }
            output: ActivityEntryForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                userId?: number | undefined
                editEvent?: EntryEditEvent | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                fields?: ActivityEntryOptionalFields | undefined
                entryFields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: ActivityEntrySortRule | undefined
              }
            }
            output: ActivityEntryForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                discTypes?: DiscType | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                artistParticipationStatus?: ArtistAlbumParticipationStatus | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                barcode?: string | undefined
                status?: EntryStatus | undefined
                releaseDateAfter?: string | undefined
                releaseDateBefore?: string | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: AlbumSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                deleted?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                discTypes?: DiscType | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                artistParticipationStatus?: ArtistAlbumParticipationStatus | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                barcode?: string | undefined
                status?: EntryStatus | undefined
                releaseDateAfter?: string | undefined
                releaseDateBefore?: string | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: AlbumSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                deleted?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                discTypes?: DiscType | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                artistParticipationStatus?: ArtistAlbumParticipationStatus | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                barcode?: string | undefined
                status?: EntryStatus | undefined
                releaseDateAfter?: string | undefined
                releaseDateBefore?: string | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: AlbumSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                deleted?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/comments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/albums/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/new': {
      $get:
        | {
            input: {
              query: {
                languagePreference?: ContentLanguagePreference | undefined
                fields?: AlbumOptionalFields | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                languagePreference?: ContentLanguagePreference | undefined
                fields?: AlbumOptionalFields | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                languagePreference?: ContentLanguagePreference | undefined
                fields?: AlbumOptionalFields | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/top': {
      $get:
        | {
            input: {
              query: {
                'ignoreIds[]'?: number[] | undefined
                languagePreference?: ContentLanguagePreference | undefined
                fields?: AlbumOptionalFields | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ignoreIds[]'?: number[] | undefined
                languagePreference?: ContentLanguagePreference | undefined
                fields?: AlbumOptionalFields | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'ignoreIds[]'?: number[] | undefined
                languagePreference?: ContentLanguagePreference | undefined
                fields?: AlbumOptionalFields | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/:id': {
      $delete: {
        input: { param: { id: number } } & { query: { notes?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: AlbumOptionalFields | undefined
                songFields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: AlbumOptionalFields | undefined
                songFields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: AlbumOptionalFields | undefined
                songFields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/:id/reviews': {
      $get:
        | {
            input: { param: { id: number } } & { query: { languageCode?: string | undefined } }
            output: AlbumReviewContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { languageCode?: string | undefined } }
            output: AlbumReviewContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { languageCode?: string | undefined } }
            output: AlbumReviewContract[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: AlbumReviewContract }
            output: AlbumReviewContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: AlbumReviewContract }
            output: AlbumReviewContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: AlbumReviewContract }
            output: AlbumReviewContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/:id/reviews/:reviewId': {
      $delete: {
        input: { param: { reviewId: number; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/albums/:id/tracks': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongInAlbumForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongInAlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongInAlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/:id/tracks/fields': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                'field[]'?: string[] | undefined
                discNumber?: number | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: { [x: string]: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                'field[]'?: string[] | undefined
                discNumber?: number | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: { [x: string]: string }[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                'field[]'?: string[] | undefined
                discNumber?: number | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: { [x: string]: string }[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/albums/:id/user-collections': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { languagePreference?: ContentLanguagePreference | undefined }
            }
            output: AlbumForUserForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { languagePreference?: ContentLanguagePreference | undefined }
            }
            output: AlbumForUserForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { languagePreference?: ContentLanguagePreference | undefined }
            }
            output: AlbumForUserForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/artists': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                artistTypes?: string | undefined
                allowBaseVoicebanks?: boolean | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                followedByUserId?: number | undefined
                status?: EntryStatus | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: ArtistSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: ArtistOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                artistTypes?: string | undefined
                allowBaseVoicebanks?: boolean | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                followedByUserId?: number | undefined
                status?: EntryStatus | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: ArtistSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: ArtistOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                artistTypes?: string | undefined
                allowBaseVoicebanks?: boolean | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                followedByUserId?: number | undefined
                status?: EntryStatus | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: ArtistSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: ArtistOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/artists/comments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/artists/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/artists/:id': {
      $delete: {
        input: { param: { id: number } } & { query: { notes?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ArtistOptionalFields | undefined
                relations?: ArtistRelationsFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ArtistOptionalFields | undefined
                relations?: ArtistRelationsFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ArtistOptionalFields | undefined
                relations?: ArtistRelationsFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/artists/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/comments': {
      $get:
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                userId?: number | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                fields?: CommentOptionalFields | undefined
                entryFields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: CommentSortRule | undefined
              }
            }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                userId?: number | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                fields?: CommentOptionalFields | undefined
                entryFields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: CommentSortRule | undefined
              }
            }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                since?: string | undefined
                userId?: number | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                fields?: CommentOptionalFields | undefined
                entryFields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: CommentSortRule | undefined
              }
            }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/comments/:entryType-comments': {
      $get:
        | {
            input: { param: { entryType: EntryType } } & { query: { entryId?: number | undefined } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entryType: EntryType } } & { query: { entryId?: number | undefined } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { entryType: EntryType } } & { query: { entryId?: number | undefined } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { entryType: EntryType } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entryType: EntryType } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { entryType: EntryType } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/comments/:entryType-comments/:commentId': {
      $delete: {
        input: { param: { entryType: EntryType; commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { entryType: EntryType; commentId: number } } & {
          json: CommentForApiContract
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/discussions/comments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/discussions/folders': {
      $get:
        | {
            input: { query: { fields?: DiscussionFolderOptionalFields | undefined } }
            output: DiscussionFolderContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: DiscussionFolderOptionalFields | undefined } }
            output: DiscussionFolderContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { fields?: DiscussionFolderOptionalFields | undefined } }
            output: DiscussionFolderContract[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: DiscussionFolderContract }
            output: DiscussionFolderContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DiscussionFolderContract }
            output: DiscussionFolderContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DiscussionFolderContract }
            output: DiscussionFolderContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/discussions/folders/:folderId/topics': {
      $get:
        | {
            input: { param: { folderId: number } } & {
              query: { fields?: DiscussionTopicOptionalFields | undefined }
            }
            output: DiscussionTopicContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: number } } & {
              query: { fields?: DiscussionTopicOptionalFields | undefined }
            }
            output: DiscussionTopicContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { folderId: number } } & {
              query: { fields?: DiscussionTopicOptionalFields | undefined }
            }
            output: DiscussionTopicContract[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { folderId: number } } & { json: DiscussionTopicContract }
            output: DiscussionTopicContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: number } } & { json: DiscussionTopicContract }
            output: DiscussionTopicContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { folderId: number } } & { json: DiscussionTopicContract }
            output: DiscussionTopicContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/discussions/topics': {
      $get:
        | {
            input: {
              query: {
                folderId?: number | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: DiscussionTopicSortRule | undefined
                fields?: DiscussionTopicOptionalFields | undefined
              }
            }
            output: DiscussionTopicContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                folderId?: number | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: DiscussionTopicSortRule | undefined
                fields?: DiscussionTopicOptionalFields | undefined
              }
            }
            output: DiscussionTopicContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                folderId?: number | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: DiscussionTopicSortRule | undefined
                fields?: DiscussionTopicOptionalFields | undefined
              }
            }
            output: DiscussionTopicContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/discussions/topics/:topicId': {
      $delete: {
        input: { param: { topicId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { topicId: number } } & {
              query: { fields?: DiscussionTopicOptionalFields | undefined }
            }
            output: DiscussionTopicContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicId: number } } & {
              query: { fields?: DiscussionTopicOptionalFields | undefined }
            }
            output: DiscussionTopicContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { topicId: number } } & {
              query: { fields?: DiscussionTopicOptionalFields | undefined }
            }
            output: DiscussionTopicContract
            outputFormat: 'text'
            status: 200
          }
      $post: {
        input: { param: { topicId: number } } & { json: DiscussionTopicContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/discussions/topics/:topicId/comments': {
      $post:
        | {
            input: { param: { topicId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { topicId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/entries': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                entryTypes?: EntryTypes | undefined
                status?: EntryStatus | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: EntrySortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: EntryForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                entryTypes?: EntryTypes | undefined
                status?: EntryStatus | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: EntrySortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: EntryForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                entryTypes?: EntryTypes | undefined
                status?: EntryStatus | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: EntrySortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: EntryOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: EntryForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/entries/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/entry-types/:entryType/:subType/tag': {
      $get:
        | {
            input: { param: { entryType: EntryType; subType: string } } & {
              query: { fields?: TagOptionalFields | undefined }
            }
            output: TagForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entryType: EntryType; subType: string } } & {
              query: { fields?: TagOptionalFields | undefined }
            }
            output: TagForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { entryType: EntryType; subType: string } } & {
              query: { fields?: TagOptionalFields | undefined }
            }
            output: TagForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/pvs/for-songs': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                author?: string | undefined
                service?: PVService | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: PVForSongContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                author?: string | undefined
                service?: PVService | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: PVForSongContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                author?: string | undefined
                service?: PVService | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: PVForSongContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEventSeries': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                fields?: ReleaseEventSeriesOptionalFields | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventSeriesForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                fields?: ReleaseEventSeriesOptionalFields | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventSeriesForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                fields?: ReleaseEventSeriesOptionalFields | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventSeriesForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEventSeries/:id': {
      $delete: {
        input: { param: { id: number } } & {
          query: { notes?: string | undefined; hardDelete?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ReleaseEventSeriesOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventSeriesForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ReleaseEventSeriesOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventSeriesForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ReleaseEventSeriesOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventSeriesForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEventSeries/:id/for-edit': {
      $get:
        | {
            input: { param: { id: number } }
            output: ReleaseEventSeriesForEditForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ReleaseEventSeriesForEditForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ReleaseEventSeriesForEditForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEvents': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                seriesId?: number | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                category?: EventCategory | undefined
                userCollectionId?: number | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                status?: EntryStatus | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: EventSortRule | undefined
                fields?: ReleaseEventOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortDirection?: SortDirection | undefined
              }
            }
            output: ReleaseEventForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                seriesId?: number | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                category?: EventCategory | undefined
                userCollectionId?: number | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                status?: EntryStatus | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: EventSortRule | undefined
                fields?: ReleaseEventOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortDirection?: SortDirection | undefined
              }
            }
            output: ReleaseEventForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                seriesId?: number | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                category?: EventCategory | undefined
                userCollectionId?: number | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                status?: EntryStatus | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: EventSortRule | undefined
                fields?: ReleaseEventOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                sortDirection?: SortDirection | undefined
              }
            }
            output: ReleaseEventForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEvents/names': {
      $get:
        | {
            input: { query: { query?: string | undefined; maxResults?: number | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; maxResults?: number | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; maxResults?: number | undefined } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEvents/:eventId/albums': {
      $get:
        | {
            input: { param: { eventId: number } } & {
              query: {
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: number } } & {
              query: {
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { eventId: number } } & {
              query: {
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: AlbumForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEvents/:eventId/published-songs': {
      $get:
        | {
            input: { param: { eventId: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { eventId: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/releaseEvents/:eventId/reports': {
      $post: {
        input: { param: { eventId: number } } & {
          query: {
            reportType?: EventReportType | undefined
            notes?: string | undefined
            versionNumber?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/releaseEvents/:id': {
      $delete: {
        input: { param: { id: number } } & {
          query: { notes?: string | undefined; hardDelete?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ReleaseEventOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ReleaseEventOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: ReleaseEventOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ReleaseEventForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/resources/:cultureCode': {
      $get:
        | {
            input: { param: { cultureCode: string } } & {
              query: { 'setNames[]'?: string[] | undefined }
            }
            output: { [x: string]: { [x: string]: string } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cultureCode: string } } & {
              query: { 'setNames[]'?: string[] | undefined }
            }
            output: { [x: string]: { [x: string]: string } }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { cultureCode: string } } & {
              query: { 'setNames[]'?: string[] | undefined }
            }
            output: { [x: string]: { [x: string]: string } }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songLists': {
      $post:
        | {
            input: { json: SongListForEditForApiContract }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SongListForEditForApiContract }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SongListForEditForApiContract }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songLists/comments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/songLists/featured': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                featuredCategory?: SongListFeaturedCategory | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongListSortRule | undefined
                fields?: SongListOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongListForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                featuredCategory?: SongListFeaturedCategory | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongListSortRule | undefined
                fields?: SongListOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongListForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                featuredCategory?: SongListFeaturedCategory | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongListSortRule | undefined
                fields?: SongListOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongListForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songLists/featured/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                featuredCategory?: SongListFeaturedCategory | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                featuredCategory?: SongListFeaturedCategory | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                featuredCategory?: SongListFeaturedCategory | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songLists/:id': {
      $delete: {
        input: { param: { id: number } } & {
          query: { notes?: string | undefined; hardDelete?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/songLists/:listId/comments': {
      $get:
        | {
            input: { param: { listId: number } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: number } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { listId: number } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { listId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { listId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songLists/:listId/songs': {
      $get:
        | {
            input: { param: { listId: number } } & {
              query: {
                query?: string | undefined
                songTypes?: string | undefined
                pvServices?: PVServices | undefined
                'tagId[]'?: number[] | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongInListForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: number } } & {
              query: {
                query?: string | undefined
                songTypes?: string | undefined
                pvServices?: PVServices | undefined
                'tagId[]'?: number[] | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongInListForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { listId: number } } & {
              query: {
                query?: string | undefined
                songTypes?: string | undefined
                pvServices?: PVServices | undefined
                'tagId[]'?: number[] | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongInListForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                songTypes?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                unifyTypesAndTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                artistParticipationStatus?: ArtistAlbumParticipationStatus | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                onlyWithPvs?: boolean | undefined
                pvServices?: PVServices | undefined
                since?: number | undefined
                minScore?: number | undefined
                userCollectionId?: number | undefined
                releaseEventId?: number | undefined
                parentSongId?: number | undefined
                status?: EntryStatus | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                minMilliBpm?: number | undefined
                maxMilliBpm?: number | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
              }
            }
            output: SongForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                songTypes?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                unifyTypesAndTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                artistParticipationStatus?: ArtistAlbumParticipationStatus | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                onlyWithPvs?: boolean | undefined
                pvServices?: PVServices | undefined
                since?: number | undefined
                minScore?: number | undefined
                userCollectionId?: number | undefined
                releaseEventId?: number | undefined
                parentSongId?: number | undefined
                status?: EntryStatus | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                minMilliBpm?: number | undefined
                maxMilliBpm?: number | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
              }
            }
            output: SongForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                songTypes?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                'tagName[]'?: string[] | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                unifyTypesAndTags?: boolean | undefined
                'artistId[]'?: number[] | undefined
                artistParticipationStatus?: ArtistAlbumParticipationStatus | undefined
                childVoicebanks?: boolean | undefined
                includeMembers?: boolean | undefined
                onlyWithPvs?: boolean | undefined
                pvServices?: PVServices | undefined
                since?: number | undefined
                minScore?: number | undefined
                userCollectionId?: number | undefined
                releaseEventId?: number | undefined
                parentSongId?: number | undefined
                status?: EntryStatus | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                minMilliBpm?: number | undefined
                maxMilliBpm?: number | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
              }
            }
            output: SongForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/byPv': {
      $get:
        | {
            input: {
              query: {
                pvService?: PVService | undefined
                pvId?: string | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pvService?: PVService | undefined
                pvId?: string | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                pvService?: PVService | undefined
                pvId?: string | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/comments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/songs/highlighted': {
      $get:
        | {
            input: {
              query: {
                languagePreference?: ContentLanguagePreference | undefined
                fields?: SongOptionalFields | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                languagePreference?: ContentLanguagePreference | undefined
                fields?: SongOptionalFields | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                languagePreference?: ContentLanguagePreference | undefined
                fields?: SongOptionalFields | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/lyrics/:lyricsId': {
      $get:
        | {
            input: { param: { lyricsId: number } }
            output: LyricsForSongContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lyricsId: number } }
            output: LyricsForSongContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { lyricsId: number } }
            output: LyricsForSongContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/top-rated': {
      $get:
        | {
            input: {
              query: {
                durationHours?: number | undefined
                startDate?: string | undefined
                filterBy?: TopSongsDateFilterType | undefined
                vocalist?: SongVocalistSelection | undefined
                maxResults?: number | undefined
                fields?: SongOptionalFields | undefined
                languagePreference?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                durationHours?: number | undefined
                startDate?: string | undefined
                filterBy?: TopSongsDateFilterType | undefined
                vocalist?: SongVocalistSelection | undefined
                maxResults?: number | undefined
                fields?: SongOptionalFields | undefined
                languagePreference?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                durationHours?: number | undefined
                startDate?: string | undefined
                filterBy?: TopSongsDateFilterType | undefined
                vocalist?: SongVocalistSelection | undefined
                maxResults?: number | undefined
                fields?: SongOptionalFields | undefined
                languagePreference?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/:id': {
      $delete: {
        input: { param: { id: number } } & { query: { notes?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/:id/comments': {
      $get:
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommentForApiContract[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/:id/derived': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: SongForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/songs/:id/ratings': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                userFields?: UserOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RatedSongForUserForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                userFields?: UserOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RatedSongForUserForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                userFields?: UserOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RatedSongForUserForApiContract[]
            outputFormat: 'text'
            status: 200
          }
      $post: {
        input: { param: { id: number } } & { json: SongRatingContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/songs/:id/related': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RelatedSongsContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RelatedSongsContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RelatedSongsContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                allowChildren?: boolean | undefined
                categoryName?: string | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                sort?: TagSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                target?: TagTargetTypes | undefined
              }
            }
            output: TagForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                allowChildren?: boolean | undefined
                categoryName?: string | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                sort?: TagSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                target?: TagTargetTypes | undefined
              }
            }
            output: TagForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                allowChildren?: boolean | undefined
                categoryName?: string | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                sort?: TagSortRule | undefined
                preferAccurateMatches?: boolean | undefined
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                target?: TagTargetTypes | undefined
              }
            }
            output: TagForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { name?: string | undefined } }
            output: TagBaseContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: TagBaseContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: TagBaseContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/byName/:name': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/categoryNames': {
      $get:
        | {
            input: {
              query: { query?: string | undefined; nameMatchMode?: NameMatchMode | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query?: string | undefined; nameMatchMode?: NameMatchMode | undefined }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { query?: string | undefined; nameMatchMode?: NameMatchMode | undefined }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/comments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/tags/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                allowAliases?: boolean | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                allowAliases?: boolean | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                allowAliases?: boolean | undefined
                maxResults?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/top': {
      $get:
        | {
            input: {
              query: {
                categoryName?: string | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagBaseContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                categoryName?: string | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagBaseContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                categoryName?: string | undefined
                entryType?: EntryType | undefined
                maxResults?: number | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagBaseContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/:id': {
      $delete: {
        input: { param: { id: number } } & {
          query: { notes?: string | undefined; hardDelete?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/:tagId/children': {
      $get:
        | {
            input: { param: { tagId: number } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: number } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: number } } & {
              query: {
                fields?: TagOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: TagForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/:tagId/comments': {
      $get:
        | {
            input: { param: { tagId: number } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: number } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: number } }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { tagId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tagId: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/tags/:tagId/reports': {
      $post: {
        input: { param: { tagId: number } } & {
          query: {
            reportType?: TagReportType | undefined
            notes?: string | undefined
            versionNumber?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/users': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                groups?: UserGroupId | undefined
                joinDateAfter?: string | undefined
                joinDateBefore?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: UserSortRule | undefined
                includeDisabled?: boolean | undefined
                onlyVerified?: boolean | undefined
                knowsLanguage?: string | undefined
                fields?: UserOptionalFields | undefined
              }
            }
            output: UserForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                groups?: UserGroupId | undefined
                joinDateAfter?: string | undefined
                joinDateBefore?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: UserSortRule | undefined
                includeDisabled?: boolean | undefined
                onlyVerified?: boolean | undefined
                knowsLanguage?: string | undefined
                fields?: UserOptionalFields | undefined
              }
            }
            output: UserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                groups?: UserGroupId | undefined
                joinDateAfter?: string | undefined
                joinDateBefore?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: UserSortRule | undefined
                includeDisabled?: boolean | undefined
                onlyVerified?: boolean | undefined
                knowsLanguage?: string | undefined
                fields?: UserOptionalFields | undefined
              }
            }
            output: UserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current': {
      $get:
        | {
            input: { query: { fields?: UserOptionalFields | undefined } }
            output: UserForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fields?: UserOptionalFields | undefined } }
            output: UserForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { fields?: UserOptionalFields | undefined } }
            output: UserForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current/album-collection-statuses/:albumId': {
      $get:
        | {
            input: { param: { albumId: number } }
            output: AlbumForUserForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { albumId: number } }
            output: AlbumForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { albumId: number } }
            output: AlbumForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current/albums/:albumId': {
      $post:
        | {
            input: { param: { albumId: number } } & {
              query: {
                collectionStatus?: PurchaseStatus | undefined
                mediaType?: MediaType | undefined
                rating?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { albumId: number } } & {
              query: {
                collectionStatus?: PurchaseStatus | undefined
                mediaType?: MediaType | undefined
                rating?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { albumId: number } } & {
              query: {
                collectionStatus?: PurchaseStatus | undefined
                mediaType?: MediaType | undefined
                rating?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current/followedArtists/:artistId': {
      $get:
        | {
            input: { param: { artistId: number } }
            output: ArtistForUserForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { artistId: number } }
            output: ArtistForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { artistId: number } }
            output: ArtistForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current/followedTags/:tagId': {
      $delete: {
        input: { param: { tagId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: { input: { param: { tagId: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/users/current/ratedSongs/:songId': {
      $get:
        | {
            input: { param: { songId: number } }
            output: SongVoteRating
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { songId: number } }
            output: SongVoteRating
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { songId: number } }
            output: SongVoteRating
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current/refreshEntryEdit': {
      $post:
        | {
            input: { query: { entryType?: EntryType | undefined; entryId?: number | undefined } }
            output: EntryEditDataContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { entryType?: EntryType | undefined; entryId?: number | undefined } }
            output: EntryEditDataContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { entryType?: EntryType | undefined; entryId?: number | undefined } }
            output: EntryEditDataContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/current/songTags/:songId': {
      $post: { input: { param: { songId: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/users/messages/:messageId': {
      $get:
        | {
            input: { param: { messageId: number } }
            output: UserMessageContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: number } }
            output: UserMessageContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { messageId: number } }
            output: UserMessageContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/names': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
                includeDisabled?: boolean | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
                includeDisabled?: boolean | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                nameMatchMode?: NameMatchMode | undefined
                maxResults?: number | undefined
                includeDisabled?: boolean | undefined
              }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/profileComments/:commentId': {
      $delete: {
        input: { param: { commentId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { commentId: number } } & { json: CommentForApiContract }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/users/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { fields?: UserOptionalFields | undefined }
            }
            output: UserForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: UserOptionalFields | undefined }
            }
            output: UserForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: UserOptionalFields | undefined }
            }
            output: UserForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/album-collection-statuses/:albumId': {
      $get:
        | {
            input: { param: { id: number; albumId: number } }
            output: AlbumForUserForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; albumId: number } }
            output: AlbumForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; albumId: number } }
            output: AlbumForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/albums': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                tagId?: number | undefined
                tag?: string | undefined
                artistId?: number | undefined
                purchaseStatuses?: PurchaseStatuses | undefined
                releaseEventId?: number | undefined
                albumTypes?: DiscType | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: AlbumSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                mediaType?: MediaType | undefined
              }
            }
            output: AlbumForUserForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                tagId?: number | undefined
                tag?: string | undefined
                artistId?: number | undefined
                purchaseStatuses?: PurchaseStatuses | undefined
                releaseEventId?: number | undefined
                albumTypes?: DiscType | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: AlbumSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                mediaType?: MediaType | undefined
              }
            }
            output: AlbumForUserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                tagId?: number | undefined
                tag?: string | undefined
                artistId?: number | undefined
                purchaseStatuses?: PurchaseStatuses | undefined
                releaseEventId?: number | undefined
                albumTypes?: DiscType | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: AlbumSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: AlbumOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
                mediaType?: MediaType | undefined
              }
            }
            output: AlbumForUserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/events': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { relationshipType?: UserEventRelationshipType | undefined }
            }
            output: ReleaseEventForApiContract[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { relationshipType?: UserEventRelationshipType | undefined }
            }
            output: ReleaseEventForApiContract[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { relationshipType?: UserEventRelationshipType | undefined }
            }
            output: ReleaseEventForApiContract[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/followedArtists': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                artistType?: ArtistType | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: ArtistSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: ArtistOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForUserForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                artistType?: ArtistType | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: ArtistSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: ArtistOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForUserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                artistType?: ArtistType | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: ArtistSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: ArtistOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: ArtistForUserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/followedArtists/:artistId': {
      $get:
        | {
            input: { param: { id: number; artistId: number } }
            output: ArtistForUserForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; artistId: number } }
            output: ArtistForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; artistId: number } }
            output: ArtistForUserForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/messages': {
      $delete: {
        input: { param: { id: number } } & { query: { messageId?: number[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                inbox?: UserInboxType | undefined
                unread?: boolean | undefined
                anotherUserId?: number | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
              }
            }
            output: UserMessageContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                inbox?: UserInboxType | undefined
                unread?: boolean | undefined
                anotherUserId?: number | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
              }
            }
            output: UserMessageContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                inbox?: UserInboxType | undefined
                unread?: boolean | undefined
                anotherUserId?: number | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
              }
            }
            output: UserMessageContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: UserMessageContract }
            output: UserMessageContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UserMessageContract }
            output: UserMessageContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UserMessageContract }
            output: UserMessageContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/profileComments': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
              }
            }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
              }
            }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
              }
            }
            output: CommentForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CommentForApiContract }
            output: CommentForApiContract
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/ratedSongs': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                tagName?: string | undefined
                'tagId[]'?: number[] | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                artistGrouping?: LogicalGrouping | undefined
                rating?: SongVoteRating | undefined
                songListId?: number | undefined
                groupByRating?: boolean | undefined
                pvServices?: PVServices | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: RatedSongForUserSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RatedSongForUserForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                tagName?: string | undefined
                'tagId[]'?: number[] | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                artistGrouping?: LogicalGrouping | undefined
                rating?: SongVoteRating | undefined
                songListId?: number | undefined
                groupByRating?: boolean | undefined
                pvServices?: PVServices | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: RatedSongForUserSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RatedSongForUserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                tagName?: string | undefined
                'tagId[]'?: number[] | undefined
                'artistId[]'?: number[] | undefined
                childVoicebanks?: boolean | undefined
                artistGrouping?: LogicalGrouping | undefined
                rating?: SongVoteRating | undefined
                songListId?: number | undefined
                groupByRating?: boolean | undefined
                pvServices?: PVServices | undefined
                advancedFilters?: AdvancedSearchFilterParams[] | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: RatedSongForUserSortRule | undefined
                nameMatchMode?: NameMatchMode | undefined
                fields?: SongOptionalFields | undefined
                lang?: ContentLanguagePreference | undefined
              }
            }
            output: RatedSongForUserForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/ratedSongs/:songId': {
      $get:
        | {
            input: { param: { id: number; songId: number } }
            output: SongVoteRating
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; songId: number } }
            output: SongVoteRating
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; songId: number } }
            output: SongVoteRating
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/reports': {
      $post:
        | {
            input: { param: { id: number } } & { json: CreateReportModel }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CreateReportModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CreateReportModel }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/users/:id/settings/:settingName': {
      $post: {
        input: { param: { id: number; settingName: string } } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/users/:id/songLists': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongListSortRule | undefined
                fields?: SongListOptionalFields | undefined
              }
            }
            output: SongListForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongListSortRule | undefined
                fields?: SongListOptionalFields | undefined
              }
            }
            output: SongListForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                query?: string | undefined
                'tagId[]'?: number[] | undefined
                childTags?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                sort?: SongListSortRule | undefined
                fields?: SongListOptionalFields | undefined
              }
            }
            output: SongListForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/venues': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                fields?: VenueOptionalFields | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: VenueSortRule | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                distanceUnit?: DistanceUnit | undefined
              }
            }
            output: VenueForApiContractPartialFindResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                fields?: VenueOptionalFields | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: VenueSortRule | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                distanceUnit?: DistanceUnit | undefined
              }
            }
            output: VenueForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                fields?: VenueOptionalFields | undefined
                start?: number | undefined
                maxResults?: number | undefined
                getTotalCount?: boolean | undefined
                nameMatchMode?: NameMatchMode | undefined
                lang?: ContentLanguagePreference | undefined
                sortRule?: VenueSortRule | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                distanceUnit?: DistanceUnit | undefined
              }
            }
            output: VenueForApiContractPartialFindResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/venues/:id': {
      $delete: {
        input: { param: { id: number } } & {
          query: { notes?: string | undefined; hardDelete?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/venues/:id/reports': {
      $post: {
        input: { param: { id: number } } & {
          query: {
            reportType?: VenueReportType | undefined
            notes?: string | undefined
            versionNumber?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
